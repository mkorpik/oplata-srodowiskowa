
Ext.define('Oplaty.components.main.cauldron.cauldrons.CauldronModel', {
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
            name: 'registrationNumber',
            type: 'string'
        },
        {
            name: 'engineId',
            type: 'string'
        },
        {
            name: 'startDate',
            type: 'date'
        },
        {
            name: 'endDate',
            type: 'date'
        }
    ]
});