Ext.define('Oplaty.components.main.company.CompanyStore', {
    extend: 'Ext.data.Store',

    alias: 'store.company',

    model: 'Oplaty.components.main.company.CompanyModel',

    data: [
        { id: 1, name: 'Firma 1', nip: "6541233434", voivodship: "wielkpolskie", city: 'Poznań' },
        { id: 2, name: 'Firma 2', nip: "5433278965", voivodship: "mazowieckie", city: 'warszawa' },
        { id: 3, name: 'Firma 3', nip: "4435657657", voivodship: "pomorskie", city: 'Gdańsk' },
        { id: 4, name: 'Firma 4', nip: "7676843455", voivodship: "wielkopolskie", city: 'Poznań' }
    ],

    proxy: {
        type: 'memory',
        reader: 'json'
    }
});
