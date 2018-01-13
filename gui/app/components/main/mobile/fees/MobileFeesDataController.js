Ext.define('Oplaty.components.main.mobile.fueluse.MobileFeesDataController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.mobileFeesData',

    listen: {
        controller: {
            '*': {
                mobilesLoaded: 'mobilesLoaded',
                activePeriodChange: 'activePeriodChange',
                mobileFuelUseChanged: 'reloadMobileFeesData'
            }
        }
    }, 


    getMobileDataGrid: function() {
        return this.getView();
    },

    mobilesLoaded: function () {
        this.reloadMobileFeesData();
    }, 

    getMobileFeesDataStore: function () {
        return this.getViewModel().getStore('mobileFeesData');
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
        this.reloadMobileFeesData();
    },

    reloadMobileFeesData: function () {
        var store = this.getMobileFeesDataStore(),
            companyId = this.getActiveCompanyId(),
            periodId = this.getActivePeriodId(),
            mobilesLoaded = this.getMobilesLoaded();
//        store.reload();
        
        if (mobilesLoaded && companyId && periodId) {
            store.proxy.url = OplatyConstants.API_PATH + 'mobile_datas?companyId=' + companyId + '&periodId=' + periodId;
            store.reload();
            this.getMobileDataGrid().reconfigure(store);           
        }
    },

    renderMobile: function (value, metaData) {
        var mobileId = Number(value.replace('/mobiles/', '')),
            mobile = this.getMobileStore().findRecord('id', mobileId);
        return mobile.get('name');

    },

    renderFuel: function (value, metaData) {
        var fuelId = Number(value),
            fuel = this.getFuelStore().findRecord('id', mobileId);
        return mobile.get('description');

    },    

    getFuelStore: function () {        
        return Ext.getStore('MobileFuel');        
    },

    getEngineStore: function () {        
        return Ext.getStore('MobileEngine');        
    },
    
    getMobileStore: function () {
        return this.getView().lookupViewModel().getStore('mobileList');
    },

    renderMobile: function (value, metaData) {
        var mobileId = Number(value),
            mobile = this.getMobileStore().findRecord('id', mobileId);
        return mobile.get('name');

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
