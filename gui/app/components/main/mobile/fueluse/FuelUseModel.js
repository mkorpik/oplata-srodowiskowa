
Ext.define('Oplaty.components.main.mobile.fueluse.FuelUseModel', {
    extend: 'Ext.data.Model',

    idProperty: 'id',

    fields: [
        {
            name: 'id',
            type: 'auto',
            persist: false
        },
        {
            name: 'expend',
            type: 'number'
        },        
        {
            name: 'deleted',
            type: 'int'
        },
        {
            name: 'comment',
            type: 'string'
        }
    ]
});