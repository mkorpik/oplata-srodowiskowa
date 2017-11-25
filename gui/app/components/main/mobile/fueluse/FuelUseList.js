Ext.define('Oplaty.components.main.mobile.fueluse.FuelUseList', {
    extend: 'Ext.panel.Panel',
    xtype: 'mobileFuelUseList',

    viewModel: 'mobileFuelUseList',
    controller: 'mobileFuelUseList',

    require: [
        'Oplaty.components.main.mobile.fueluse.FuelUseGrid',
        'Oplaty.components.main.mobile.fueluse.FuelUseListViewModel',
        'Oplaty.components.main.mobile.fueluse.FuelUseListController'
    ],

    layout: {
        type: 'hbox',
        align: 'left'
    },
    items: [{
        xtype: 'mobileFuelUseGrid',
        itemId: 'idMobileFuelUseGrid',
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
            handler: 'onAddFuelUse'
        },{
            xtype: 'button',
            text: 'Edytuj',
            handler: 'onEditFuelUse'
        },{
            xtype: 'button',
            text: 'Usuń',
            handler: 'onDeleteFuelUse'
        }]
    }]

});
