Ext.define('Oplaty.components.main.company.CompanyStore', {
    extend: 'Ext.data.Store',

    alias: 'store.company',

    model: 'Oplaty.components.main.company.CompanyModel',
    sorters: [{
        property: 'shortname',
        direction: 'ASC'
    }],
    proxy: {
        type: 'rest',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        url: OplatyConstants.API_PATH + 'companies',
        reader: {
            type: 'json'
        }
    },
    pageSize: 0,
    autoLoad: true,
    autoSync: true
});
