Ext.define('Oplaty.components.main.company.CompanyStore', {
    extend: 'Ext.data.Store',

    alias: 'store.company',

    model: 'Oplaty.components.main.company.CompanyModel',

    // fields: [
    //     'name', 'nip', 'voivodship', 'city'
    // ],
    data: [
        { name: 'Firma 1', nip: "6541233434", voivodship: "wielkpolskie", city: 'Poznań' },
        { name: 'Firma 2', nip: "5433278965", voivodship: "mazowieckie", city: 'warszawa' },
        { name: 'Firma 3', nip: "4435657657", voivodship: "pomorskie", city: 'Gdańsk' },
        { name: 'Firma 4', nip: "7676843455", voivodship: "wielkopolskie", city: 'Poznań' }
    ],

    proxy: {
        type: 'memory',
        reader: 'json'
    }
});
