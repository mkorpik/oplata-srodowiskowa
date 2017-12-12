Ext.define('Oplaty.store.Poviat', {
    extend: 'Ext.data.Store',

    alias: 'store.poviat',

    model: 'Oplaty.model.AdmUnitModel',

    proxy: {
        type: 'rest',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        url: 'http://api.oplaty-gui.pl/app_dev.php/adm_poviats',
        reader: {
            type: 'json'
        }
    },
    autoLoad: false,
    autoSync: false
});