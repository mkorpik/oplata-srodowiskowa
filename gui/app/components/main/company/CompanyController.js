Ext.define('Oplaty.components.main.company.CompanyController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.company',

    onSave: function () {
        var record = this.getViewModel().get('editCompany');
        this.fireEvent('saveCompany', record);
        this.getView().close();
    },

    onCancel: function () {
        this.getView().close();
    }


});
