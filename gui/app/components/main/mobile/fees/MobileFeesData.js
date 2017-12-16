Ext.define('Oplaty.components.main.mobile.fees.MobileFeesData', {
    extend: 'Ext.grid.Panel',
    xtype: 'mobileFeesData',

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
            flex: 3
        },
        {
            text: 'Paliwo',
            dataIndex: 'fuel',
            flex: 3
        },
        {
            text: 'Zużycie',
            dataIndex: 'expend',
            flex: 3
        }
        
    ]
});
