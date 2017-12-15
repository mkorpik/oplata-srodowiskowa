
Ext.define('Oplaty.model.MobileFuelModel', {
    extend: 'Ext.data.Model',

    idProperty: 'internalId',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'description',
            type: 'string'
        }
    ]
});