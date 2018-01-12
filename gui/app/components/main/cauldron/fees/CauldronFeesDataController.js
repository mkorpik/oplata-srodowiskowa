Ext.define('Oplaty.components.main.cauldron.fueluse.CauldronFeesDataController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.cauldronFeesData',

    listen: {
        controller: {
            '*': {
                cauldronsLoaded: 'cauldronsLoaded',
                activePeriodChange: 'activePeriodChange'
            }
        }
    }, 


    getCauldronDataGrid: function() {
        return this.getView();
    },

    cauldronsLoaded: function () {
        this.reloadCauldronFeesData();
    }, 

    getCauldronFeesDataStore: function () {
        return this.getViewModel().getStore('cauldronFeesData');
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
        this.reloadCauldronFeesData();
    },

    reloadCauldronFeesData: function () {
        var store = this.getCauldronFeesDataStore(),
            companyId = this.getActiveCompanyId(),
            periodId = this.getActivePeriodId(),
            cauldronsLoaded = this.getCauldronsLoaded();
//        store.reload();
        
        if (cauldronsLoaded && companyId && periodId) {
            store.proxy.url = OplatyConstants.API_PATH + 'cauldron_datas?companyId=' + companyId + '&periodId=' + periodId;
            store.reload();
            this.getCauldronDataGrid().reconfigure(store);           
        }
    },

    renderCauldron: function (value, metaData) {
        var cauldronId = Number(value.replace('/cauldrons/', '')),
            cauldron = this.getCauldronStore().findRecord('id', cauldronId);
        return cauldron.get('name');

    },

    renderFuel: function (value, metaData) {
        var fuelId = Number(value),
            fuel = this.getFuelStore().findRecord('id', cauldronId);
        return cauldron.get('description');

    },    

    getFuelStore: function () {        
        return Ext.getStore('CauldronFuel');        
    },

    getEngineStore: function () {        
        return Ext.getStore('CauldronEngine');        
    },
    
    getCauldronStore: function () {
        return this.getView().lookupViewModel().getStore('cauldronList');
    },

    renderCauldron: function (value, metaData) {
        var cauldronId = Number(value),
            cauldron = this.getCauldronStore().findRecord('id', cauldronId);
        return cauldron.get('name');

    },

    renderFuel: function (value, metaData) {
        var fuelId = Number(value),
            fuel = this.getFuelStore().findRecord('id', fuelId);
        return fuel.get('description');
    },

    renderEngine: function (value, metaData) {
        var engineId = Number(value),
            engine = this.getEngineStore().findRecord('id', engineId);
        return engine.get('description');
    }    
});
