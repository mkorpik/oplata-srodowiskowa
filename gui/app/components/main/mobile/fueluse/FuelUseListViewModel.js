Ext.define('Oplaty.components.main.mobile.fueluse.FuelUseListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mobileFuelUseList',

    requires:[
        'Oplaty.components.main.mobile.fueluse.FuelUseStore'
    ],

    data: {

    },

    stores: {
        mobileFuelUseList: Ext.create('Oplaty.components.main.mobile.fueluse.FuelUseStore')
    }
});
