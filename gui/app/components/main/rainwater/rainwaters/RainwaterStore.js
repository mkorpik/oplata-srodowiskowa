Ext.define('Oplaty.components.main.rainwater.rainwaters.RainwaterStore', {
    extend: 'Ext.data.Store',

    alias: 'store.rainwater',

    model: 'Oplaty.components.main.rainwater.rainwaters.RainwaterModel',

    data: [
        { id: 1, name: 'Pojazd 1', registrationNumber: "6541233434", startDate: "2016-01-01", endDate: '2016-01-01' },
        { id: 2, name: 'Pojazd 2', registrationNumber: "5433278965", startDate: "2016-01-01", endDate: '2016-01-01' },
        { id: 3, name: 'Pojazd 3', registrationNumber: "4435657657", startDate: "2016-01-01", endDate: '2016-01-01' },
        { id: 4, name: 'Pojazd 4', registrationNumber: "7676843455", startDate: "2016-01-01", endDate: '2016-01-01' }
    ],

    proxy: {
        type: 'memory',
        reader: 'json'
    }
});
