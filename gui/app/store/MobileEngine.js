Ext.define('Oplaty.store.MobileEngine', {
    extend: 'Ext.data.Store',

    alias: 'store.mobileEngine',

    model: 'Oplaty.model.EngineModel',

    proxy: {
        type: 'rest',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        url: OplatyConstants.API_PATH + 'mobile_engines',
        reader: {
            type: 'json'
        }
    },
    pageSize: 0,
    autoLoad: true,
    autoSync: false
});
