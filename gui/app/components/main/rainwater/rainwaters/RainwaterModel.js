
Ext.define('Oplaty.components.main.rainwater.rainwaters.RainwaterModel', {
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