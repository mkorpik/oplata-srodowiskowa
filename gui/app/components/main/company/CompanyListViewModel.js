Ext.define('Oplaty.components.main.company.CompanyStore.CompanyListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.companyList',

    requires:[
        'Oplaty.components.main.company.CompanyStore'
    ],

    data: {
        addBtn: 'Dodaj',
        nip: 'NIP',
        editCompany: ''
    },

    stores: {
        companyList: Ext.create('Oplaty.components.main.company.CompanyStore')
    }
});
