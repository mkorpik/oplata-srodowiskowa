Ext.define('Oplaty.components.main.mobile.mobiles.MobileListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.mobileList',

    listen: {
        controller: {
            '*': {
                saveMobile: 'saveMobile',
                activeCompanyChange: 'activeCompanyChange'
            }
        }
    },    

    init: function () {
        var store = this.getMobileStore();
        store.on('load', this.onStoreLoad, this);
    },

    onStoreLoad: function () {
        this.getView().lookupViewModel().set('mobilesLoaded', true);
        this.fireEvent('mobilesLoaded'); 
    }, 

    onAddMobile: function () {
        var me = this,
            newMobile = Ext.create('Oplaty.components.main.mobile.mobiles.MobileModel', {            
            });
        newMobile.set('company', OplatyConstants.Rest.COMPANY + this.getActiveCompanyId());    
        //newMobile.set('engineId', 91015);   
        newMobile.set('fuels', []);                     
        this.showEditForm(newMobile);
    },

    onEditMobile: function () {
        var selectedMobiles = this.getMobileGrid().getSelection();
        if (selectedMobiles.length === 1) {
            this.showEditForm(selectedMobiles[0].copy());
        } else {
            Ext.Msg.alert('Info', 'Należy zaznaczyć wiersz.');
        }
    },

    onDeleteMobile: function () {
        var selectedMobiles = this.getMobileGrid().getSelection();
        if (selectedMobiles.length === 1) {
            Ext.Msg.confirm('Uwaga', 'Czy na pewno usunąć pojazd?', 'deleteMobile', this);  
        } else {
            Ext.Msg.alert('Info', 'Należy zaznaczyć wiersz.');
        }
    },

    deleteMobile: function (btn) {
        var store = this.getMobileStore(),
        selectedMobiles = this.getMobileGrid().getSelection();
        if (btn === 'yes') {
            store.remove(selectedMobiles[0]);
            this.getMobileGrid().reconfigure(store);
        }
    },

    onRowDblClick: function (grid, record) {
        this.showEditForm(record.copy());
    },

    showEditForm: function (mobileRecord) {
        var mobileForm = Ext.create('Oplaty.components.main.mobile.mobiles.Mobile',{
            //    renderTo: 'mobileListId'
            }); 
        mobileForm.getViewModel().set('editMobile', mobileRecord);            
        this.fireEvent('mobileLoaded');                    
    },

    saveMobile: function(record) {
        var store = this.getMobileStore(),
        mobile = record.data,
        findMobile = store.findRecord('id', mobile.id);
        store.proxy.url = OplatyConstants.API_PATH + 'mobiles'        
        if (findMobile) {
            findMobile.set(mobile);
            record.commit();
        } else {
            store.add(record);
            record.commit();
        }
        this.getMobileGrid().reconfigure(store);
    },

    getMobileGrid: function() {
        return this.getView().down('#idMobileGrid');
    },

    getMobileStore: function () {
        return this.getView().lookupViewModel().getStore('mobileList');
    },    

    activeCompanyChange: function () {
        var store = this.getMobileStore();
        this.getView().lookupViewModel().set('mobilesLoaded', false);
        store.reload();
        companyId = this.getActiveCompanyId();
        store.proxy.url = OplatyConstants.API_PATH + 'mobiles?company=' + companyId;
        store.reload();
        this.getMobileGrid().reconfigure(store);           
    },
    
    getActiveCompanyId: function () {
        return this.getView().lookupViewModel().get('activeCompanyId');
    }    

});
