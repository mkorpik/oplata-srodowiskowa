Ext.define('Oplaty.components.main.company.CompanyGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'companyGrid',

    require: [
        'Oplaty.components.main.company.CompanyStore',
        'Oplaty.store.Personnel'
    ],
    store: {
        type: 'company'
    },

    columns: [
        {
            text: 'Nazwa',
            dataIndex: 'name',
            flex: 3
        },{
            bind: {
                text: '{nip}'
            },
            dataIndex: 'nip',
            flex: 2
        },{
            text: 'Województwo',
            dataIndex: 'voivodship',
            flex: 3
        },{ 
            text: 'Mejscowość', 
            dataIndex: 'city',
            flex: 3
        }
    ]
});
