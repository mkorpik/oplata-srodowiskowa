Ext.define('Oplaty.components.main.mobile.mobiles.MobileList', {
    extend: 'Ext.panel.Panel',
    xtype: 'mobileList',

    viewModel: 'mobileList',
    controller: 'mobileList',

    require: [
        'Oplaty.components.main.mobile.mobiles.MobileGrid',
        'Oplaty.components.main.mobile.mobiles.MobileListViewModel',
        'Oplaty.components.main.mobile.mobiles.MobileListController'
    ],

    layout: {
        type: 'hbox',
        align: 'left'
    },
    items: [{
        xtype: 'mobileGrid',
        itemId: 'idMobileGrid',
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
            handler: 'onAddMobile'
        },{
            xtype: 'button',
            text: 'Edytuj',
            handler: 'onEditMobile'
        },{
            xtype: 'button',
            text: 'Usuń',
            handler: 'onDeleteMobile'
        }]
    }]

});
