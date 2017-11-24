Ext.define('Oplaty.components.main.mobile.MobileMenu', {
    extend: 'Ext.tab.Panel',
    xtype: 'mobileMenu',

    requires: [
        'Oplaty.components.main.mobile.mobiles.MobileList'
    ],

    items: [{
        title: 'Lista pojazdów',
        items: [{
            xtype: 'mobileList'
        }]        
    },{
        title: 'Zużycie paliwa'
    },{
        title: 'Opłaty'
    }]
});
