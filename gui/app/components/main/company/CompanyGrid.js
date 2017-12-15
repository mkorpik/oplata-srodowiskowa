Ext.define('Oplaty.components.main.company.CompanyGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'companyGrid',

    require: [
        'Oplaty.components.main.company.CompanyStore'
    ],
    bind:{
        store: '{companyList}'
    },
    plugins: 'gridfilters',
    columns: [
        {
            text: 'Nazwa',
            dataIndex: 'shortname',
            flex: 3,
            filter: {
                type: 'string'
            }            
        },{
            text: 'NIP',
            dataIndex: 'nip',
            flex: 2,
            filter: {
                type: 'string'
            }            
            
        },{
            text: 'Miejscowość', 
            dataIndex: 'city',
            flex: 3,
            filter: {
                type: 'string'
            }                        
        },{ 
            text: 'Ulica',
            dataIndex: 'street',
            flex: 3,
            filter: {
                type: 'string'
            }            
        }
    ]
});
