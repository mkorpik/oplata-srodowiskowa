Ext.define('Oplaty.store.CauldronKind', {
    extend: 'Ext.data.Store',

    alias: 'store.cauldronKind',

    model: 'Oplaty.model.KindModel',

    proxy: {
        type: 'rest',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        url: OplatyConstants.API_PATH + 'cauldron_kinds',
        reader: {
            type: 'json'
        }
    },
    pageSize: 0,
    autoLoad: true,
    autoSync: false
});
