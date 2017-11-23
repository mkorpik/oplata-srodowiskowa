Ext.define('Oplaty.components.main.company.CompanyList', {
    extend: 'Ext.panel.Panel',
    xtype: 'companyList',
    id: 'companyListId',

    viewModel: 'companyList',
    controller: 'companyListC',

    require: [
        'Oplaty.components.main.company.CompanyGrid',
        'Oplaty.components.main.company.CompanyListViewModel',
        'Oplaty.components.main.company.CompanyListController',
        'Oplaty.components.main.List'
    ],

    title: 'Company main',

    layout: {
        type: 'hbox',
        align: 'left'
    },
    items: [{
        xtype: 'companyGrid',
        flex: 2
    },{
        xtype: 'panel',
        flex: 1,
        layout: {
            type: 'vbox',
            align: 'left'
        },
        items: [{
            xtype: 'button',
            bind:{
                text: '{addBtn}'
            },
            handler: 'onAddCompany'           
        },{
            xtype: 'button',
            text: 'Edytuj'
        },{
            xtype: 'button',
            text: 'Usuń'
        }]
    }]
    // requires: [
    //     'Oplaty.store.Personnel'
    // ],

});
