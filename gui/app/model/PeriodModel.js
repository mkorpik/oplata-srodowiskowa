
Ext.define('Oplaty.model.PeriodModel', {
    extend: 'Ext.data.Model',

    idProperty: 'internalId',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'periodName',
            type: 'string'
        }
    ]
});