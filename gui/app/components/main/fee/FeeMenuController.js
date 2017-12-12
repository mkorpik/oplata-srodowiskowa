Ext.define('Oplaty.components.main.fee.FeeMenuController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.feeMenu',

    onCompanyChange: function (combo, record) {
        this.fireEvent('activeCompanyChange');        
    }

});
