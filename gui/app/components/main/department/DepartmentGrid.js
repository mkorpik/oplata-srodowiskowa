Ext.define('Oplaty.components.main.department.DepartmentGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'departmentGrid',

    require: [
        'Oplaty.components.main.department.DepartmentStore'
    ],
    bind:{
        store: '{departmentList}'
    },
    plugins: 'gridfilters',
    columns: [
        {
            text: 'Nazwa',
            dataIndex: 'name',
            flex: 3,
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
        },
        { 
            text: 'Ulica',
            dataIndex: 'street',
            flex: 3,
            filter: {
                type: 'string'
            }                        
        }        
    ]
});
