
Ext.define('Oplaty.components.main.company.CompanyModel', {
    extend: 'Ext.data.Model',

    idProperty: 'internalId',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'nip',
            type: 'string'
        },
        {
            name: 'voivodship',
            type: 'string'
        },
        {
            name: 'city',
            type: 'string'
        }
    ]
});