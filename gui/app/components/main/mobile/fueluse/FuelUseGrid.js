Ext.define('Oplaty.components.main.mobile.fueluse.FuelUseGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mobileFuelUseGrid',

    require: [
        'Oplaty.components.main.mobile.fueluse.FuelUseStore'
    ],
    store: {
        type: 'mobileFuelUse'
    },

    columns: [
        {
            text: 'Nazwa',
            dataIndex: 'name',
            flex: 3
        }
    ]
});
