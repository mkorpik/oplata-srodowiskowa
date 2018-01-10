Ext.define('Oplaty.components.main.cauldron.cauldrons.CauldronStore', {
    extend: 'Ext.data.Store',

    alias: 'store.cauldron',

    model: 'Oplaty.components.main.cauldron.cauldrons.CauldronModel',

    proxy: {
        type: 'rest',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        url: OplatyConstants.API_PATH + 'cauldrons',
        reader: {
            type: 'json'
        }
    },
    autoLoad: false,
    autoSync: true
});
