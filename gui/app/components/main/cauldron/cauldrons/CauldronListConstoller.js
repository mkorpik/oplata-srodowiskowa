Ext.define('Oplaty.components.main.cauldron.cauldrons.CauldronListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.cauldronList',

    listen: {
        controller: {
            '*': {
                saveCauldron: 'saveCauldron',
                activeCompanyChange: 'activeCompanyChange'                
            }
        }
    },    

    init: function () {
        var store = this.getCauldronStore();
        store.on('load', this.onStoreLoad, this);
    },

    onStoreLoad: function () {
        this.getView().lookupViewModel(true).set('cauldronsLoaded', true);
        this.fireEvent('cauldronsLoaded'); 
    }, 
        
    onAddCauldron: function () {
        var me = this,
        newCauldron = null,
        companyId = this.getActiveCompanyId();
        if (companyId) {    
            newCauldron = Ext.create('Oplaty.components.main.cauldron.cauldrons.CauldronModel', {            
            });
            newCauldron.set('company', OplatyConstants.Rest.COMPANY + this.getActiveCompanyId());    
            this.showEditForm(newCauldron);
        } else {
            Ext.Msg.alert('Info', 'Należy wybrać firmę.');            
        }    
    },

    onEditCauldron: function () {
        var selectedCauldrons = this.getCauldronGrid().getSelection();
        if (selectedCauldrons.length === 1) {
            this.showEditForm(selectedCauldrons[0].copy());
        } else {
            Ext.Msg.alert('Info', 'Należy zaznaczyć wiersz.');
        }
    },

    onDeleteCauldron: function () {
        var selectedCauldrons = this.getCauldronGrid().getSelection();
        if (selectedCauldrons.length === 1) {
            Ext.Msg.confirm('Uwaga', 'Czy na pewno usunąć pojazd?', 'deleteCauldron', this);  
        } else {
            Ext.Msg.alert('Info', 'Należy zaznaczyć wiersz.');
        }
    },

    deleteCauldron: function (btn) {
        var store = this.getCauldronStore(),
        selectedCauldrons = this.getCauldronGrid().getSelection();
        if (btn === 'yes') {
            store.remove(selectedCauldrons[0]);
            this.getCauldronGrid().reconfigure(store);
        }
    },

    onRowDblClick: function (grid, record) {
        this.showEditForm(record.copy());
    },

    showEditForm: function (cauldronRecord) {
        var cauldronForm = Ext.create('Oplaty.components.main.cauldron.cauldrons.Cauldron',{
            //    renderTo: 'cauldronListId'
            }); 
        cauldronForm.getViewModel().set('editCauldron', cauldronRecord);            
    },

    saveCauldron: function(record) {
        var store = this.getCauldronStore(),
        cauldron = record.data,
        findCauldron = store.findRecord('id', cauldron.id);
        store.proxy.url = OplatyConstants.API_PATH + 'cauldrons';        
        if (findCauldron) {
            findCauldron.set(cauldron);
            record.commit();
        } else {
            store.add(record);
            record.commit();
        }
        this.getCauldronGrid().reconfigure(store);
    },

    getCauldronGrid: function() {
        return this.getView().down('#idCauldronGrid');
    },

    getCauldronStore: function () {
        return this.getView().lookupViewModel().getStore('cauldronList');
    },    

    activeCompanyChange: function () {
        var store = this.getCauldronStore();
        this.getView().lookupViewModel(true).set('cauldronsLoaded', false);
        store.reload();
        companyId = this.getActiveCompanyId();
        store.proxy.url = OplatyConstants.API_PATH + 'cauldrons?company=' + companyId;
        store.reload();
        this.getCauldronGrid().reconfigure(store);           
    },

    getActiveCompanyId: function () {
        return this.getView().lookupViewModel().get('activeCompanyId');
    }    
    
});
