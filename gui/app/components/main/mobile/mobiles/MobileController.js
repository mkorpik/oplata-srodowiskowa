Ext.define('Oplaty.components.main.mobile.mobiles.MobileController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.mobile',

    listen: {
        controller: {
            '*': {
                mobileLoaded: 'mobileLoaded',
                engineSelected: 'engineSelected'
            }
        }
    },     

    onSave: function () {
        var record = this.getViewModel().get('editMobile'),
            fuels = [];
        this.getViewModel().get('selectedFuels').forEach(function (entry) {
            fuels.push('/mobile_fuels/' + entry);
        })
        record.set('fuels', fuels);        
        this.fireEvent('saveMobile', record);
        this.getView().close();
    },

    onCancel: function () {
        this.getView().close();
    },

    onEngineChoise: function () {
        var engineForm = Ext.create('Oplaty.components.main.mobile.mobiles.engine.EngineTree',{        
            });         
    },

    mobileLoaded: function () {
        this.refreshEngine();
        this.refreshFuels();
    },

    engineSelected: function (engine) {
        var mobileRecord = this.getViewModel().get('editMobile');
        mobileRecord.set('engineId', engine.get('id'));
        this.refreshEngine();
    },

    refreshEngine: function() {
        var engineStore = this.getEngineStore(),
            mobileRecord = this.getViewModel().get('editMobile'),
            engine = engineStore.findRecord('id', mobileRecord.get('engineId')),
            fuels = [];
        this.getViewModel().set('selectedEngine', engine);
        if (engine) {
            engine.get('fuels').forEach(function(entry){
                fuels.push(Number(entry.replace('/mobile_fuels/', '')));
            });
        }
        this.getViewModel().set('avaliableFuels', fuels);
        this.filterFuelStore();
    },

    getEngineStore: function () {        
        return Ext.getStore('MobileEngine');        
    },

    getFuelStore: function () {        
        return Ext.getStore('MobileFuel');        
    },

    refreshFuels: function () {
        var mobileRecord = this.getViewModel().get('editMobile'),
            fuelStore = this.getFuelStore(),
            selectedFuels = [];
        mobileRecord.get('fuels').forEach(function(entry) {
            var id = Number(entry.replace('/mobile_fuels/', ''));
               // fuel = fuelStore.findRecord('id', id);
            selectedFuels.push(id);
        });
        this.getViewModel().set('selectedFuels', selectedFuels);
    },

    filterFuelStore: function () {
        var store = this.getFuelStore(),
        avaliableFuels = this.getViewModel().get('avaliableFuels');
        store.clearFilter();   
        store.filterBy(function (record){
            return avaliableFuels.indexOf(record.get('id')) > -1;
        });
    }

});
