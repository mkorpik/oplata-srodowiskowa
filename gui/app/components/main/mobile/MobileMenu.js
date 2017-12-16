Ext.define('Oplaty.components.main.mobile.MobileMenu', {
    extend: 'Ext.tab.Panel',
    xtype: 'mobileMenu',

    requires: [
        'Oplaty.components.main.mobile.mobiles.MobileList',
        'Oplaty.components.main.mobile.fueluse.FuelUseList',
        'Oplaty.components.main.mobile.fees.MobileFeesData'
    ],

    items: [{
        title: 'Lista pojazdów',
        items: [{
            xtype: 'mobileList'
        }]        
    },{
        title: 'Zużycie paliwa',
        items: [{
            xtype: 'mobileFuelUseList'
        }]
    },{
        title: 'Opłaty',
        items: [{
            xtype: 'mobileFeesData'
        }]
    }]
});
