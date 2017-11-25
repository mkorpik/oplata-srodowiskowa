Ext.define('Oplaty.components.main.cauldron.CauldronMenu', {
    extend: 'Ext.tab.Panel',
    xtype: 'cauldronMenu',

    requires: [
        'Oplaty.components.main.cauldron.cauldrons.CauldronList',
        'Oplaty.components.main.cauldron.fueluse.FuelUseList'
    ],

    items: [{
        title: 'Lista kotłów',
        items: [{
            xtype: 'cauldronList'
        }]        
    },{
        title: 'Zużycie paliwa',
        items: [{
            xtype: 'cauldronFuelUseList'
        }]
    },{
        title: 'Opłaty'
    }]
});
