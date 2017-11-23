Ext.define('Oplaty.components.main.company.CompanyListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.companyListC',

    onItemSelected: function (sender, record) {
        var store = this.getViewModel().getStore('companyList');
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onAddCompany: function (sender) {
        var me = this,
            companyForm = Ext.create('Oplaty.components.main.company.Company',{
        //    renderTo: 'companyListId'
        }),        
            newRecord = Ext.create('Oplaty.components.main.company.CompanyModel', {
                
            });
        companyForm.getViewModel().set('editCompany', newRecord);
    }

});
