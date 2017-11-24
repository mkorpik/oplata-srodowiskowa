Ext.define('Oplaty.components.main.company.CompanyListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.companyListC',

    listen: {
        controller: {
            '*': {
                saveCompany: 'saveCompany'
            }
        }
    },    


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
    },

    onRowDblClick: function (grid, record) {
        var taskForm = Ext.create('Oplaty.components.main.company.Company'),
        cloneC = record.copy();
        taskForm.getViewModel().set('editCompany', cloneC);
    },

    saveCompany: function(record) {
        var store = this.getViewModel().getStore('companyList'),
        company = record.data,
        findCompany = store.findRecord('id', company.id);
        if (findCompany) {
            findCompany.data = company;
            record.commit();
        } else {
            company.id = store.count() + 1;
            store.add(record);
            record.commit();
        }
        this.getView().down('#idCompanyGrid').reconfigure(store);
    }

});
