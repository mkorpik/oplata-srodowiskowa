Ext.define('Oplaty.components.main.cauldron.fueluse.FuelUseList', {
    extend: 'Ext.panel.Panel',
    xtype: 'cauldronFuelUseList',

    viewModel: 'cauldronFuelUseList',
    controller: 'cauldronFuelUseList',

    require: [
        'Oplaty.components.main.cauldron.fueluse.FuelUseGrid',
        'Oplaty.components.main.cauldron.fueluse.FuelUseListViewModel',
        'Oplaty.components.main.cauldron.fueluse.FuelUseListController'
    ],

    layout: {
        type: 'hbox',
        align: 'left'
    },
    items: [{
        xtype: 'cauldronFuelUseGrid',
        itemId: 'idCauldronFuelUseGrid',
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
