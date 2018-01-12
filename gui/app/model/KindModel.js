
Ext.define('Oplaty.model.KindModel', {
    extend: 'Ext.data.Model',

    idProperty: 'internalId',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'level',
            type: 'int'
        }
    ]
});