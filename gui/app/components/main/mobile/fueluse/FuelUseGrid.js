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
            text: 'Pojazd',
            dataIndex: 'mobile',
            flex: 3,
            renderer: 'renderMobile'
        },
        {
            text: 'Paliwo',
            dataIndex: 'mobileFuelId',
            flex: 3,
            renderer: 'renderFuel'
        },
        {
            text: 'Zużycie',
            dataIndex: 'expend',
            flex: 3
        }
        
    ]
});
