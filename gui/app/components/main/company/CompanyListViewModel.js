Ext.define('Oplaty.components.main.company.CompanyListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.companyList',

    requires:[
        'Oplaty.components.main.company.CompanyStore'
    ],

    data: {

    },

    stores: {
        companyList: Ext.create('Oplaty.components.main.company.CompanyStore')
    }
});
