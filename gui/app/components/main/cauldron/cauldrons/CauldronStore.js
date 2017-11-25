Ext.define('Oplaty.components.main.cauldron.cauldrons.CauldronStore', {
    extend: 'Ext.data.Store',

    alias: 'store.cauldron',

    model: 'Oplaty.components.main.cauldron.cauldrons.CauldronModel',

    data: [
        { id: 1, name: 'Kocioł 1', registrationNumber: "6541233434", startDate: "2016-01-01", endDate: '2016-01-01' },
        { id: 2, name: 'Kocioł 2', registrationNumber: "5433278965", startDate: "2016-01-01", endDate: '2016-01-01' },
        { id: 3, name: 'Kocioł 3', registrationNumber: "4435657657", startDate: "2016-01-01", endDate: '2016-01-01' },
        { id: 4, name: 'Kocioł 4', registrationNumber: "7676843455", startDate: "2016-01-01", endDate: '2016-01-01' }
    ],

    proxy: {
        type: 'memory',
        reader: 'json'
    }
});
