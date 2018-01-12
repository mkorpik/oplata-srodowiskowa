Ext.define('Oplaty.components.main.cauldron.fees.CauldronFeesData', {
    extend: 'Ext.grid.Panel',
    xtype: 'cauldronFeesData',

    controller: 'cauldronFeesData',

    require: [
        'Oplaty.components.main.cauldron.fueluse.CauldronFeesDataController'
    ],

    width: 700,
    height: 300,
    bind: {
        store: '{cauldronFeesData}'
    },
    columns: [
        {
            text: 'Kocioł',
            dataIndex: 'cauldronId',
            flex: 1,
            renderer: 'renderCauldron'
        },
        {
            text: 'Rodzaj silnika',
            dataIndex: 'kindId',
            flex: 2,
            renderer: 'renderEngine'
        },
        {
            text: 'Zużycie',
            dataIndex: 'expend',
            flex: 1
        },
        {
            text: 'Stawka zł/Mg',
            dataIndex: 'fee',
            flex: 1
        },
        {
            text: 'Opłata zł',
            dataIndex: 'cauldronFee',
            flex: 1
        }                        
    ]
});
