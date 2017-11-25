Ext.define('Oplaty.components.main.rainwater.rainwaters.RainwaterGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'rainwaterGrid',

    require: [
        'Oplaty.components.main.rainwater.rainwaters.RainwaterStore'
    ],
    store: {
        type: 'rainwater'
    },

    columns: [
        {
            text: 'Nazwa',
            dataIndex: 'name',
            flex: 3
        }
    ]
});
