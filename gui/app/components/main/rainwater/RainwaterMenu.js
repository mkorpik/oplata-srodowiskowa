Ext.define('Oplaty.components.main.rainwater.RainwaterMenu', {
    extend: 'Ext.tab.Panel',
    xtype: 'rainwaterMenu',

    requires: [
        'Oplaty.components.main.rainwater.rainwaters.RainwaterList'
    ],

    items: [{
        title: 'Lista terenów',
        items: [{
            xtype: 'rainwaterList'
        }]        
    },{
        title: 'Opłaty'
    }]
});
