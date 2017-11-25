Ext.define('Oplaty.components.main.cauldron.cauldrons.CauldronGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'cauldronGrid',

    require: [
        'Oplaty.components.main.cauldron.cauldrons.CauldronStore'
    ],
    store: {
        type: 'cauldron'
    },

    columns: [
        {
            text: 'Nazwa',
            dataIndex: 'name',
            flex: 3
        }
    ]
});
