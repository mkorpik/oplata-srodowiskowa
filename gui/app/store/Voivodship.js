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
        url: 'http://api.oplaty-gui.pl/app_dev.php/adm_voivodships',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    autoSync: false
});