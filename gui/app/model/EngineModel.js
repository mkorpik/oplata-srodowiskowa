
Ext.define('Oplaty.model.EngineModel', {
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