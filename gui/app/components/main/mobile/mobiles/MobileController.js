Ext.define('Oplaty.components.main.mobile.mobiles.MobileController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.mobile',

    onSave: function () {
        var record = this.getViewModel().get('editMobile');
        this.fireEvent('saveMobile', record);
        this.getView().close();
    },

    onCancel: function () {
        this.getView().close();
    }

});
