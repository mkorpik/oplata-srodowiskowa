Ext.define('Oplaty.components.main.cauldron.fees.CauldronFeesDataStore', {
    extend: 'Ext.data.Store',

    alias: 'store.cauldronFeesData',

    model: 'Oplaty.components.main.cauldron.fees.CauldronFeesDataModel',

    proxy: {
        type: 'rest',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        url: OplatyConstants.API_PATH + 'cauldron_datas',
        reader: {
            type: 'json'
        }
    },
    autoLoad: false,
    autoSync: false
});
