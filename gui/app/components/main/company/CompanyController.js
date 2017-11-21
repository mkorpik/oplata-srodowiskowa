Ext.define('Oplaty.components.main.company.CompanyController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.company',

    onItemSelected: function (sender, record) {
        var store = this.getViewModel().getStore('companyList');
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    }

});
