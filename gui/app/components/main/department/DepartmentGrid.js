Ext.define('Oplaty.components.main.department.DepartmentGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'departmentGrid',

    require: [
        'Oplaty.components.main.department.DepartmentStore'
    ],
    bind:{
        store: '{departmentList}'
    },
    // store: {
    //     type: 'department'
    // },

    columns: [
        {
            text: 'Nazwa',
            dataIndex: 'name',
            flex: 3
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
