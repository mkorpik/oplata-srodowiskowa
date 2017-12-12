Ext.define('Oplaty.store.Period', {
    extend: 'Ext.data.Store',

    alias: 'store.period',

    model: 'Oplaty.model.PeriodModel',

    proxy: {
        type: 'rest',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        url: OplatyConstants.API_PATH + 'periods',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    autoSync: false
});
