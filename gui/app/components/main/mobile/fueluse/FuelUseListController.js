Ext.define('Oplaty.components.main.mobile.fueluse.FuelUseListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.mobileFuelUseList',

    listen: {
        controller: {
            '*': {
                saveMobileFuelUse: 'saveFuelUse',
                mobilesLoaded: 'mobilesLoaded',
                activePeriodChange: 'activePeriodChange'
            }
        }
    }, 

    onAddFuelUse: function () {
        var me = this,
            newFuelUse = Ext.create('Oplaty.components.main.mobile.fueluse.FuelUseModel', {            
            });
        this.showEditForm(newFuelUse);
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
        var store = this.getViewModel().getStore('mobileFuelUseList'),
        selectedFuelUses = this.getFuelUseGrid().getSelection();
        if (btn === 'yes') {
            store.remove(selectedFuelUses[0]);
            this.getFuelUseGrid().reconfigure(store);
        }
    },

    onRowDblClick: function (grid, record) {
        this.showEditForm(record.copy());
    },

    showEditForm: function (mobileFuelUseRecord) {
        var mobileFuelUseForm = Ext.create('Oplaty.components.main.mobile.fueluse.FuelUse',{
            //    renderTo: 'fuelUseListId'
            }); 
            mobileFuelUseForm.getViewModel().set('editMobileFuelUse', mobileFuelUseRecord);            
    },

    saveFuelUse: function(record) {
        var store = this.getViewModel().getStore('mobileFuelUseList'),
        mobileFuelUse = record.data,
        findFuelUse = store.findRecord('id', mobileFuelUse.id);
        if (findFuelUse) {
            findFuelUse.data = mobileFuelUse;
            record.commit();
        } else {
            mobileFuelUse.id = store.count() + 1;
            store.add(record);
            record.commit();
        }
        this.getFuelUseGrid().reconfigure(store);
    },

    getFuelUseGrid: function() {
        return this.getView().down('#idMobileFuelUseGrid');
    },

    mobilesLoaded: function () {
        this.reloadFuelUsed();
    }, 

    getFuelUsedStore: function () {
        return this.getViewModel().getStore('mobileFuelUseList');
    },

    getActiveCompanyId: function () {
        return this.getView().lookupViewModel().get('activeCompanyId');
    },

    getActivePeriodId: function () {
        return this.getView().lookupViewModel().get('activePeriodId');
    },    

    getMobilesLoaded: function () {
        return this.getView().lookupViewModel().get('mobilesLoaded');
    },      
    
    activePeriodChange: function () {
        this.reloadFuelUsed();
    },

    reloadFuelUsed: function () {
        var store = this.getFuelUsedStore(),
            companyId = this.getActiveCompanyId(),
            periodId = this.getActivePeriodId(),
            mobilesLoaded = this.getMobilesLoaded();
//        store.reload();
        
        if (mobilesLoaded && companyId && periodId) {
            store.proxy.url = OplatyConstants.API_PATH + 'mobile_fuel_useds?mobile.company=' + companyId + '&periodId=' + periodId;
            store.reload();
            this.getFuelUseGrid().reconfigure(store);           
        }
    }

});
