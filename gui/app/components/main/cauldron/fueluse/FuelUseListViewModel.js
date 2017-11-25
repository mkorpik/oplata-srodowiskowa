Ext.define('Oplaty.components.main.cauldron.fueluse.FuelUseListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.cauldronFuelUseList',

    requires:[
        'Oplaty.components.main.cauldron.fueluse.FuelUseStore'
    ],

    data: {

    },

    stores: {
        cauldronFuelUseList: Ext.create('Oplaty.components.main.cauldron.fueluse.FuelUseStore')
    }
});
