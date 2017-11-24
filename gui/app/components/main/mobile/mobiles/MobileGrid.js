Ext.define('Oplaty.components.main.mobile.mobiles.MobileGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mobileGrid',

    require: [
        'Oplaty.components.main.mobile.mobiles.MobileStore'
    ],
    store: {
        type: 'mobile'
    },

    columns: [
        {
            text: 'Nazwa',
            dataIndex: 'name',
            flex: 3
        }
    ]
});
