Ext.define('Oplaty.components.main.mobile.mobiles.MobileStore', {
    extend: 'Ext.data.Store',

    alias: 'store.mobile',

    model: 'Oplaty.components.main.mobile.mobiles.MobileModel',
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
        url: OplatyConstants.API_PATH + 'mobiles',
        reader: {
            type: 'json'
        }
    },
    autoLoad: false,
    autoSync: true
});
