
Ext.define('Oplaty.components.main.department.DepartmentModel', {
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
            name: 'voivodship',
            type: 'string'
        },
        {
            name: 'city',
            type: 'string'
        }
    ]
});