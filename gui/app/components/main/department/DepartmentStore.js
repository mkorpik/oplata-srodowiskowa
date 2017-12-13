Ext.define('Oplaty.components.main.department.DepartmentStore', {
    extend: 'Ext.data.Store',

    alias: 'store.department',

    model: 'Oplaty.components.main.department.DepartmentModel',

    proxy: {
        type: 'rest',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        url: OplatyConstants.API_PATH + 'departments',
        reader: {
            type: 'json'
        }
    },
    autoLoad: false,
    autoSync: true
});
