Ext.define('Oplaty.store.Voivodship', {
    extend: 'Ext.data.Store',

    alias: 'store.voivodship',

    model: 'Oplaty.model.AdmUnitModel',

    proxy: {
        type: 'rest',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        url: OplatyConstants.API_PATH + 'adm_voivodships',
        reader: {
            type: 'json'
        }
    },
    pageSize: 0,
    autoLoad: true,
    autoSync: false
});