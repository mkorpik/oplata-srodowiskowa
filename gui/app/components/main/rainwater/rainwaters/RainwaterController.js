Ext.define('Oplaty.components.main.rainwater.rainwaters.RainwaterController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.rainwater',

    onSave: function () {
        var record = this.getViewModel().get('editRainwater');
        this.fireEvent('saveRainwater', record);
        this.getView().close();
    },

    onCancel: function () {
        this.getView().close();
    }

});
