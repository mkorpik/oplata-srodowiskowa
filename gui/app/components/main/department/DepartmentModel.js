
Ext.define('Oplaty.components.main.department.DepartmentModel', {
    extend: 'Ext.data.Model',

    idProperty: 'id',

    fields: [
        {
            name: 'id',
            type: 'auto',
            persist: false
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'city',
            type: 'string'
        }
    ]
});