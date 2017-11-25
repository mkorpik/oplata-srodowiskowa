Ext.define('Oplaty.components.main.company.CompanyListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.companyList',

    listen: {
        controller: {
            '*': {
                saveCompany: 'saveCompany'
            }
        }
    },    

    onAddCompany: function () {
        var me = this,
            newCompany = Ext.create('Oplaty.components.main.company.CompanyModel', {            
            });
        this.showEditForm(newCompany);
    },

    onEditCompany: function () {
        var selectedCompanies = this.getCompanyGrid().getSelection();
        if (selectedCompanies.length === 1) {
            this.showEditForm(selectedCompanies[0].copy());
        } else {
            Ext.Msg.alert('Info', 'Należy zaznaczyć wiersz.');
        }
    },

    onDeleteCompany: function () {
        var selectedCompanies = this.getCompanyGrid().getSelection();
        if (selectedCompanies.length === 1) {
            Ext.Msg.confirm('Uwaga', 'Czy na pewno usunąć firmę?', 'deleteCompany', this);  
        } else {
            Ext.Msg.alert('Info', 'Należy zaznaczyć wiersz.');
        }
    },

    deleteCompany: function (btn) {
        var store = this.getCompanyStore(),
        selectedCompanies = this.getCompanyGrid().getSelection();
        if (btn === 'yes') {
            store.remove(selectedCompanies[0]);
            this.getCompanyGrid().reconfigure(store);
        }
    },

    onRowDblClick: function (grid, record) {
        this.showEditForm(record.copy());
    },

    showEditForm: function (companyRecord) {
        var companyForm = Ext.create('Oplaty.components.main.company.Company',{
            //    renderTo: 'companyListId'
            }); 
        companyForm.getViewModel().set('editCompany', companyRecord);            
    },

    saveCompany: function(record) {
        var store = this.getCompanyStore(),
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
        this.getCompanyGrid().reconfigure(store);
    },

    getCompanyGrid: function() {
        return this.getView().down('#idCompanyGrid');
    },

    getCompanyStore: function () {
        return this.getView().lookupViewModel().getStore('companyList');
    }
});
