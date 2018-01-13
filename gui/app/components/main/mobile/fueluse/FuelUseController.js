Ext.define('Oplaty.components.main.mobile.fueluse.FuelUseController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.mobileFuelUse',

    listen: {
        controller: {
            '*': {
                fuelUseLoaded: 'fuelUseLoaded'
            }
        }
    }, 

    fuelUseLoaded: function () {
        this.refreshMobile();
        this.refreshFuels();
    },

    refreshMobile: function () {
        var mobileStore = this.getMobileStore(),
            fuelUseRecord = this.getViewModel().get('editMobileFuelUse'),
            mobileId = fuelUseRecord.get('mobile');
            mobile = null,
            fuels = [];

        if (mobileId) {
            mobile = mobileStore.findRecord('id', Number(mobileId.replace('/mobiles/', '')));
            this.getViewModel().set('selectedMobile', mobile.get('id'));
        } else {
            this.getViewModel().set('selectedMobile', null);
        }        
    },

    filterFuelStore: function () {
        var store = this.getFuelStore(),
        avaliableFuels = this.getViewModel().get('avaliableFuels');
        store.clearFilter();   
        store.filterBy(function (record){
            return avaliableFuels.indexOf(record.get('id')) > -1;
        });
    },    

    getFuelStore: function () {        
        return Ext.getStore('MobileFuel');        
    },    

    getMobileStore: function () {
        return this.getView().lookupViewModel(true).getStore('mobileList');
    },

    onMobileChange: function() {
        this.refreshFuels();        
    },

    refreshFuels: function () {
        var selectedMobile = this.getViewModel().get('selectedMobile'),
            mobileStore = this.getMobileStore(),
            mobile = null,
            fuels = [];

        if (selectedMobile) {
            mobile = mobileStore.findRecord('id', selectedMobile);            
            mobile.get('fuels').forEach(function(entry){
                fuels.push(Number(entry.replace('/mobile_fuels/', '')));
            });
        }
        this.getViewModel().set('avaliableFuels', fuels);
        this.filterFuelStore();        
    },
    
    onSave: function () {
        var record = this.getViewModel().get('editMobileFuelUse'),
            selectedMobile = this.getViewModel().get('selectedMobile');
        record.set('mobile', '/mobiles/' + selectedMobile);
        this.fireEvent('saveMobileFuelUse', record);
        this.getView().close();
    },

    onCancel: function () {
        this.getView().close();
    },

    onClose: function () {
        var store = this.getFuelStore();
        store.clearFilter();           
    }

});
