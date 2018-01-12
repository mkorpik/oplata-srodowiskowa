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
            text: 'Kocioł',
            dataIndex: 'cauldron',
            flex: 3,
            renderer: 'renderCauldron'
        }
    ]
});
