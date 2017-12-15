Ext.define('Oplaty.components.main.department.DepartmentList', {
    extend: 'Ext.panel.Panel',
    xtype: 'departmentList',
    id: 'departmentListId',

    viewModel: 'departmentList',
    controller: 'departmentList',

    require: [
        'Oplaty.components.main.department.DepartmentGrid',
        'Oplaty.components.main.department.DepartmentListViewModel',
        'Oplaty.components.main.department.DepartmentListController'
    ],

    layout: {
        type: 'hbox',
        align: 'left'
    },
    items: [{
        xtype: 'departmentGrid',
        itemId: 'idDepartmentGrid',
        listeners: {
            rowdblclick: 'onRowDblClick'
        },
        width: 600,  
        height: 400,      
        align: 'right'
    },{
        xtype: 'panel',
        width: 111,        
        layout: {
            type: 'table',
            columns: 1,
            tdAttrs: {
                style: 'padding: 5px 10px;'
            }            
        },
        defaults: {
            width: 90
        },
        items: [{
            xtype: 'button',
            text: 'Dodaj',            
            handler: 'onAddDepartment'
        },{
            xtype: 'button',
            text: 'Edytuj',
            handler: 'onEditDepartment'
        },{
            xtype: 'button',
            text: 'Usuń',
            handler: 'onDeleteDepartment'
        }]
    }]
});
