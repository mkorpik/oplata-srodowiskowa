Ext.define('Oplaty.components.main.company.CompanyStore.CompanyViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.company',

    requires:[
        'Oplaty.components.main.company.CompanyStore'
    ],

    data: {
        addBtn: 'Dodaj',
        nip: 'NIP'
    },

    stores: {
        companyList: Ext.create('Oplaty.components.main.company.CompanyStore')
    }
});
