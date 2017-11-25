Ext.define('Oplaty.components.main.cauldron.cauldrons.CauldronListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.cauldronList',

    requires:[
        'Oplaty.components.main.cauldron.cauldrons.CauldronStore'
    ],

    data: {

    },

    stores: {
        cauldronList: Ext.create('Oplaty.components.main.cauldron.cauldrons.CauldronStore')
    }
});