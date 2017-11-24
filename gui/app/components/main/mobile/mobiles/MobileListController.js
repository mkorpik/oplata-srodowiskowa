Ext.define('Oplaty.components.main.mobile.mobiles.MobileListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.mobileList',

    listen: {
        controller: {
            '*': {
                saveMobile: 'saveMobile'
            }
        }
    },    

    onAddMobile: function () {
        var me = this,
            newMobile = Ext.create('Oplaty.components.main.mobile.mobiles.MobileModel', {            
            });
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
        var store = this.getViewModel().getStore('mobileList'),
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
    },

    saveMobile: function(record) {
        var store = this.getViewModel().getStore('mobileList'),
        mobile = record.data,
        findMobile = store.findRecord('id', mobile.id);
        if (findMobile) {
            findMobile.data = mobile;
            record.commit();
        } else {
            mobile.id = store.count() + 1;
            store.add(record);
            record.commit();
        }
        this.getMobileGrid().reconfigure(store);
    },

    getMobileGrid: function() {
        return this.getView().down('#idMobileGrid');
    }

});
