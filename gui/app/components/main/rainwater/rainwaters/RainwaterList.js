Ext.define('Oplaty.components.main.rainwater.rainwaters.RainwaterList', {
    extend: 'Ext.panel.Panel',
    xtype: 'rainwaterList',

    viewModel: 'rainwaterList',
    controller: 'rainwaterList',

    require: [
        'Oplaty.components.main.rainwater.rainwaters.RainwaterGrid',
        'Oplaty.components.main.rainwater.rainwaters.RainwaterListViewModel',
        'Oplaty.components.main.rainwater.rainwaters.RainwaterListController'
    ],

    layout: {
        type: 'hbox',
        align: 'left'
    },
    items: [{
        xtype: 'rainwaterGrid',
        itemId: 'idRainwaterGrid',
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
            handler: 'onAddRainwater'
        },{
            xtype: 'button',
            text: 'Edytuj',
            handler: 'onEditRainwater'
        },{
            xtype: 'button',
            text: 'Usuń',
            handler: 'onDeleteRainwater'
        }]
    }]

});
