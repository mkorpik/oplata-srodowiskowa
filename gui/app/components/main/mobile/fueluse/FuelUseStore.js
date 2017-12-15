Ext.define('Oplaty.components.main.mobile.fueluse.FuelUseStore', {
    extend: 'Ext.data.Store',

    alias: 'store.mobileFuelUse',

    model: 'Oplaty.components.main.mobile.fueluse.FuelUseModel',

    proxy: {
        type: 'rest',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        url: OplatyConstants.API_PATH + 'mobile_fuel_useds',
        reader: {
            type: 'json'
        }
    },
    autoLoad: false,
    autoSync: true
});
