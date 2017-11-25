Ext.define('Oplaty.components.main.fee.FeeMenuViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.feeMenu',

    requires:[
        'Oplaty.components.main.company.CompanyStore'
    ],

    data: {

    },

    stores: {
        companyList: Ext.create('Oplaty.components.main.company.CompanyStore')
    }
});
