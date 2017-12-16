Ext.define('Oplaty.components.main.mobile.fees.MobileFeesData', {
    extend: 'Ext.grid.Panel',
    xtype: 'mobileFeesData',

    controller: 'mobileFeesData',

    require: [
        'Oplaty.components.main.mobile.fueluse.MobileFeesDataController'
    ],

    width: 700,
    height: 300,
    bind: {
        store: '{mobileFeesData}'
    },
    columns: [
        {
            text: 'Pojazd',
            dataIndex: 'mobileId',
            flex: 1,
            renderer: 'renderMobile'
        },
        {
            text: 'Rodzaj silnika',
            dataIndex: 'engineId',
            flex: 2,
            renderer: 'renderEngine'
        },
        {
            text: 'Paliwo',
            dataIndex: 'fuelId',
            flex: 1,
            renderer: 'renderFuel'
        },
        {
            text: 'Zużycie',
            dataIndex: 'expend',
            flex: 1
        },
        {
            text: 'Zużycie Mg',
            dataIndex: 'converted',
            flex: 1
        },
        {
            text: 'Stawka zł/Mg',
            dataIndex: 'fee',
            flex: 1
        },
        {
            text: 'Opłata zł',
            dataIndex: 'mobileFee',
            flex: 1
        }                        
    ]
});
