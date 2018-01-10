Ext.define('Oplaty.components.main.cauldron.fueluse.FuelUseStore', {
    extend: 'Ext.data.Store',

    alias: 'store.cauldronFuelUse',

    model: 'Oplaty.components.main.cauldron.fueluse.FuelUseModel',

    proxy: {
        type: 'rest',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        url: OplatyConstants.API_PATH + 'cauldron_fuel_useds',
        reader: {
            type: 'json'
        }
    },
    autoLoad: false,
    autoSync: true
});
