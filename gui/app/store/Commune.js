Ext.define('Oplaty.store.Commune', {
    extend: 'Ext.data.Store',

    alias: 'store.commune',

    model: 'Oplaty.model.AdmUnitModel',

    proxy: {
        type: 'rest',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        url: OplatyConstants.API_PATH + 'adm_communes',
        reader: {
            type: 'json'
        }
    },
    pageSize: 0,
    autoLoad: false,
    autoSync: false
});