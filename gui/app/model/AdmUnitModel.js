
Ext.define('Oplaty.model.AdmUnitModel', {
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
        }
    ]
});