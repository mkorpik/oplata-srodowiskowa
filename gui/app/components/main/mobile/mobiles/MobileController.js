Ext.define('Oplaty.components.main.mobile.mobiles.MobileController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.mobile',

    listen: {
        controller: {
            '*': {
                mobileLoaded: 'mobileLoaded'
            }
        }
    },     

    onSave: function () {
        var record = this.getViewModel().get('editMobile');
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
        var store = this.getEngineStore();
    },

    getEngineStore: function () {
        return this.getView().lookupViewModel().getStore('engineList');
    },

});
