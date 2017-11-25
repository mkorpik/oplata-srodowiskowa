Ext.define('Oplaty.components.main.cauldron.cauldrons.CauldronController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.cauldron',

    onSave: function () {
        var record = this.getViewModel().get('editCauldron');
        this.fireEvent('saveCauldron', record);
        this.getView().close();
    },

    onCancel: function () {
        this.getView().close();
    }

});
