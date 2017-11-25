Ext.define('Oplaty.components.main.cauldron.fueluse.FuelUseController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.cauldronFuelUse',

    onSave: function () {
        var record = this.getViewModel().get('editCauldronFuelUse');
        this.fireEvent('saveCauldronFuelUse', record);
        this.getView().close();
    },

    onCancel: function () {
        this.getView().close();
    }

});
