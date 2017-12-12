Ext.define('Oplaty.components.main.company.CompanyGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'companyGrid',

    require: [
        'Oplaty.components.main.company.CompanyStore'
    ],
    bind:{
        store: '{companyList}'
    },
    // store: {
    //     type: 'company'
    // },

    columns: [
        {
            text: 'Nazwa',
            dataIndex: 'shortname',
            flex: 3
        },{
            text: 'NIP',
            dataIndex: 'nip',
            flex: 2
        },{
            text: 'Ulica',
            dataIndex: 'street',
            flex: 3
        },{ 
            text: 'Mejscowość', 
            dataIndex: 'city',
            flex: 3
        }
    ]
});
