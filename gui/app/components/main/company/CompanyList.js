Ext.define('Oplaty.components.main.company.CompanyList', {
    extend: 'Ext.panel.Panel',
    xtype: 'companyList',
    id: 'companyListId',

//    viewModel: 'companyList',
    controller: 'companyList',

    require: [
        'Oplaty.components.main.company.CompanyGrid',
        'Oplaty.components.main.company.CompanyListViewModel',
        'Oplaty.components.main.company.CompanyListController'
    ],

    layout: {
        type: 'hbox',
        align: 'left'
    },
    items: [{
        xtype: 'companyGrid',
        itemId: 'idCompanyGrid',
        listeners: {
            rowdblclick: 'onRowDblClick'
        },
        width: 600,        
        align: 'right'
    },{
        xtype: 'panel',
        width: 110,        
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
            handler: 'onAddCompany'
        },{
            xtype: 'button',
            text: 'Edytuj',
            handler: 'onEditCompany'
        },{
            xtype: 'button',
            text: 'Usuń',
            handler: 'onDeleteCompany'
        }]
    }]
});
