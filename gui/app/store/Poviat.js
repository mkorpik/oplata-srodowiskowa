Ext.define('Oplaty.store.Poviat', {
    extend: 'Ext.data.Store',

    alias: 'store.poviat',

    model: 'Oplaty.model.AdmUnitModel',
    sorters: [{
        property: 'name',
        direction: 'ASC'
    }],
    proxy: {
        type: 'rest',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        url: OplatyConstants.API_PATH + 'adm_poviats',
        reader: {
            type: 'json'
        }
    },
    pageSize: 0,
    autoLoad: false,
    autoSync: false
});