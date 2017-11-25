Ext.define('Oplaty.components.main.department.DepartmentStore', {
    extend: 'Ext.data.Store',

    alias: 'store.department',

    model: 'Oplaty.components.main.department.DepartmentModel',

    data: [
        { id: 1, name: 'Oddział 1', nip: "6541233434", voivodship: "wielkpolskie", city: 'Poznań' },
        { id: 2, name: 'Oddział 2', nip: "5433278965", voivodship: "mazowieckie", city: 'warszawa' },
        { id: 3, name: 'Oddział 3', nip: "4435657657", voivodship: "pomorskie", city: 'Gdańsk' },
        { id: 4, name: 'Oddział 4', nip: "7676843455", voivodship: "wielkopolskie", city: 'Poznań' }
    ],

    proxy: {
        type: 'memory',
        reader: 'json'
    }
});
