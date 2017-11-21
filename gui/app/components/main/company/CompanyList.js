Ext.define('Oplaty.components.main.company.CompanyList', {
    extend: 'Ext.panel.Panel',
    xtype: 'companyList',

    viewModel: 'company',
    controller: 'company',

    require: [
        'Oplaty.components.main.company.CompanyGrid',
        'Oplaty.components.main.company.CompanyViewModel',
        'Oplaty.components.main.company.CompanyController',
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
            handler: 'onItemSelected'           
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
