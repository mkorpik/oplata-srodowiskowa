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
        url: 'http://api.oplaty-gui.pl/app_dev.php/adm_communes',
        reader: {
            type: 'json'
        }
    },
    autoLoad: false,
    autoSync: false
});