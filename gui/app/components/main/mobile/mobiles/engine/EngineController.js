Ext.define('Oplaty.components.main.mobile.mobiles.engine.EngineController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.engine',

    onSave: function () {
        var record = this.getEngineTree().getSelection();
        
        //this.fireEvent('saveMobile', record);
        this.getView().close();
    },

    getEngineTree: function() {
        return this.getView().down('#idEngineTree');
    }
});
