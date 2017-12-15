Ext.define('Oplaty.store.MobileFuel', {
    extend: 'Ext.data.Store',

    alias: 'store.mobileFuel',

    model: 'Oplaty.model.MobileFuelModel',

    proxy: {
        type: 'rest',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        url: OplatyConstants.API_PATH + 'mobile_fuels',
        reader: {
            type: 'json'
        }
    },
    pageSize: 0,
    autoLoad: true,
    autoSync: false
});