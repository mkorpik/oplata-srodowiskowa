Ext.define('Oplaty.components.main.rainwater.rainwaters.RainwaterListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.rainwaterList',

    requires:[
        'Oplaty.components.main.rainwater.rainwaters.RainwaterStore'
    ],

    data: {

    },

    stores: {
        rainwaterList: Ext.create('Oplaty.components.main.rainwater.rainwaters.RainwaterStore')
    }
});
