
Ext.define('Oplaty.components.main.mobile.mobiles.MobileModel', {
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
            name: 'registrationNumber',
            type: 'string'
        }
    ]
});