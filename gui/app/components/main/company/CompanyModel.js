
Ext.define('Oplaty.components.main.company.CompanyModel', {
    extend: 'Ext.data.Model',

    idProperty: 'id',//'internalId',

    fields: [
        {
            name: 'id',
            //type: 'int',
            type: 'auto', persist: false
        },
        {
            name: 'shortname',
            type: 'string'
        },
        {
            name: 'nip',
            type: 'string'
        },
        {
            name: 'street',
            type: 'string'
        },
        {
            name: 'city',
            type: 'string'
        }
    ]
});