Ext.define('Oplaty.components.main.mobile.fueluse.FuelUseStore', {
    extend: 'Ext.data.Store',

    alias: 'store.mobileFuelUse',

    model: 'Oplaty.components.main.mobile.fueluse.FuelUseModel',

    data: [
        { id: 1, name: 'Zużycie m1', registrationNumber: "6541233434", startDate: "2016-01-01", endDate: '2016-01-01' },
        { id: 2, name: 'Zużycie m2', registrationNumber: "5433278965", startDate: "2016-01-01", endDate: '2016-01-01' },
        { id: 3, name: 'Zużycie m3', registrationNumber: "4435657657", startDate: "2016-01-01", endDate: '2016-01-01' },
        { id: 4, name: 'Zużycie m4', registrationNumber: "7676843455", startDate: "2016-01-01", endDate: '2016-01-01' }
    ],

    proxy: {
        type: 'memory',
        reader: 'json'
    }
});
