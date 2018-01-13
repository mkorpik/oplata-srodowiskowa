Ext.define('Oplaty.components.main.cauldron.fueluse.FuelUseListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.cauldronFuelUseList',

    listen: {
        controller: {
            '*': {
                saveCauldronFuelUse: 'saveFuelUse',
                cauldronsLoaded: 'cauldronsLoaded',
                activePeriodChange: 'activePeriodChange'                
            }
        }
    },    

    onAddFuelUse: function () {
        var me = this,
            newFuelUse = null,
            companyId = this.getActiveCompanyId(),
            periodId = this.getActivePeriodId();     
        if (companyId && periodId) {
            newFuelUse = Ext.create('Oplaty.components.main.cauldron.fueluse.FuelUseModel', {            
            });
            newFuelUse.set('periodId', periodId);
            this.showEditForm(newFuelUse);
        } else {
            Ext.Msg.alert('Info', 'Należy wybrać firmę i rok.');              
        }            
    },

    onEditFuelUse: function () {
        var selectedFuelUses = this.getFuelUseGrid().getSelection();
        if (selectedFuelUses.length === 1) {
            this.showEditForm(selectedFuelUses[0].copy());
        } else {
            Ext.Msg.alert('Info', 'Należy zaznaczyć wiersz.');
        }
    },

    onDeleteFuelUse: function () {
        var selectedFuelUses = this.getFuelUseGrid().getSelection();
        if (selectedFuelUses.length === 1) {
            Ext.Msg.confirm('Uwaga', 'Czy na pewno usunąć pojazd?', 'deleteFuelUse', this);  
        } else {
            Ext.Msg.alert('Info', 'Należy zaznaczyć wiersz.');
        }
    },

    deleteFuelUse: function (btn) {
        var store = this.getViewModel().getStore('cauldronFuelUseList'),
        selectedFuelUses = this.getFuelUseGrid().getSelection();
        if (btn === 'yes') {
            store.remove(selectedFuelUses[0]);
            this.getFuelUseGrid().reconfigure(store);
            this.fireEvent('cauldronFuelUseChanged');                       
        }
    },

    onRowDblClick: function (grid, record) {
        this.showEditForm(record.copy());
    },

    showEditForm: function (cauldronFuelUseRecord) {
        var cauldronFuelUseForm = Ext.create('Oplaty.components.main.cauldron.fueluse.FuelUse',{
            //    renderTo: 'fuelUseListId'
            }); 
            cauldronFuelUseForm.getViewModel().set('editCauldronFuelUse', cauldronFuelUseRecord); 
            this.fireEvent('cauldronFuelUseLoaded');            
    },

    saveFuelUse: function(record) {
        var store = this.getFuelUsedStore(),
        cauldronFuelUse = record.data,
        findFuelUse = store.findRecord('id', cauldronFuelUse.id);
        store.proxy.url = OplatyConstants.API_PATH + 'cauldron_fuel_useds';                
        if (findFuelUse) {
            findFuelUse.data = cauldronFuelUse;
            record.commit();
        } else {
            store.add(record);
            record.commit();
        }
        this.fireEvent('cauldronFuelUseChanged');           
        this.getFuelUseGrid().reconfigure(store);
    },

    getFuelUseGrid: function() {
        return this.getView().down('#idCauldronFuelUseGrid');
    },
    
    cauldronsLoaded: function () {
        this.reloadFuelUsed();
    }, 

    getFuelUsedStore: function () {
        return this.getViewModel().getStore('cauldronFuelUseList');
    },

    getActiveCompanyId: function () {
        return this.getView().lookupViewModel().get('activeCompanyId');
    },

    getActivePeriodId: function () {
        return this.getView().lookupViewModel().get('activePeriodId');
    },    

    getCauldronsLoaded: function () {
        return this.getView().lookupViewModel().get('cauldronsLoaded');
    },      
    
    activePeriodChange: function () {
        this.reloadFuelUsed();
    },

    reloadFuelUsed: function () {
        var store = this.getFuelUsedStore(),
            companyId = this.getActiveCompanyId(),
            periodId = this.getActivePeriodId(),
            cauldronsLoaded = this.getCauldronsLoaded();
//        store.reload();
        
        if (cauldronsLoaded && companyId && periodId) {
            store.proxy.url = OplatyConstants.API_PATH + 'cauldron_fuel_useds?mobile.company=' + companyId + '&periodId=' + periodId;
            store.reload();
            this.getFuelUseGrid().reconfigure(store);           
        }
    },

    renderCauldron: function (value, metaData) {
        var cauldronId = Number(value.replace('/cauldrons/', '')),
            cauldron = this.getCauldronStore().findRecord('id', cauldronId);
        return cauldron.get('name');

    },
    
    getCauldronStore: function () {
        return this.getView().lookupViewModel().getStore('cauldronList');
    }

});
