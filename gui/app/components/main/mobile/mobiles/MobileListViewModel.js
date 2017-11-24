Ext.define('Oplaty.components.main.mobile.mobiles.MobileListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mobileList',

    requires:[
        'Oplaty.components.main.mobile.mobiles.MobileStore'
    ],

    data: {

    },

    stores: {
        mobileList: Ext.create('Oplaty.components.main.mobile.mobiles.MobileStore')
    }
});
