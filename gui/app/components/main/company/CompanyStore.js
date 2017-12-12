Ext.define('Oplaty.components.main.company.CompanyStore', {
    extend: 'Ext.data.Store',

    alias: 'store.company',

    model: 'Oplaty.components.main.company.CompanyModel',

    proxy: {
        type: 'rest',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        url: 'http://api.oplaty-gui.pl/app_dev.php/companies',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    autoSync: true
});
