Ext.define('Oplaty.components.main.mobile.mobiles.MobileGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mobileGrid',

    require: [
        'Oplaty.components.main.mobile.mobiles.MobileStore'
    ],

    bind: {
        store: '{mobileList}'
    },
    plugins: 'gridfilters',
    columns: [
        {
            text: 'Nazwa',
            dataIndex: 'name',
            flex: 3,
            filter: {
                type: 'string'
            } 
        },
        {
            text: 'Nr rejestracyjny',
            dataIndex: 'registrationNumber',
            flex: 3,
            filter: {
                type: 'string'
            } 
        }        
    ]
});
