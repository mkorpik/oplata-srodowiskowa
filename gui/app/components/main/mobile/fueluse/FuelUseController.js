Ext.define('Oplaty.components.main.mobile.fueluse.FuelUseController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.mobileFuelUse',

    onSave: function () {
        var record = this.getViewModel().get('editMobileFuelUse');
        this.fireEvent('saveMobileFuelUse', record);
        this.getView().close();
    },

    onCancel: function () {
        this.getView().close();
    }

});
