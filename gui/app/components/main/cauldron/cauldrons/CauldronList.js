Ext.define('Oplaty.components.main.cauldron.cauldrons.CauldronList', {
    extend: 'Ext.panel.Panel',
    xtype: 'cauldronList',

    //viewModel: 'cauldronList',
    controller: 'cauldronList',

    require: [
        'Oplaty.components.main.cauldron.cauldrons.CauldronGrid',
        'Oplaty.components.main.cauldron.cauldrons.CauldronListViewModel',
        'Oplaty.components.main.cauldron.cauldrons.CauldronListController'
    ],

    layout: {
        type: 'hbox',
        align: 'left'
    },
    items: [{
        xtype: 'cauldronGrid',
        itemId: 'idCauldronGrid',
        listeners: {
            rowdblclick: 'onRowDblClick'
        },
        width: 600,     
        height: 300,     
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
            handler: 'onAddCauldron'
        },{
            xtype: 'button',
            text: 'Edytuj',
            handler: 'onEditCauldron'
        },{
            xtype: 'button',
            text: 'Usuń',
            handler: 'onDeleteCauldron'
        }]
    }]

});
