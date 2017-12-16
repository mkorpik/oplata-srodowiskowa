Ext.define('Oplaty.components.main.mobile.fees.MobileFeesDataStore', {
    extend: 'Ext.data.Store',

    alias: 'store.mobileFeesData',

    model: 'Oplaty.components.main.mobile.fees.MobileFeesDataModel',

    proxy: {
        type: 'rest',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        url: OplatyConstants.API_PATH + 'mobile_datas',
        reader: {
            type: 'json'
        }
    },
    autoLoad: false,
    autoSync: false
});
