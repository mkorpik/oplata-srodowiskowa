Ext.define('Oplaty.components.main.cauldron.fueluse.FuelUseGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'cauldronFuelUseGrid',

    require: [
        'Oplaty.components.main.cauldron.fueluse.FuelUseStore'
    ],
    store: {
        type: 'cauldronFuelUse'
    },

    columns: [
        {
            text: 'Nazwa',
            dataIndex: 'name',
            flex: 3
        }
    ]
});
