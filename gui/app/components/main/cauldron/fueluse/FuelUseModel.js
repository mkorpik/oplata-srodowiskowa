
Ext.define('Oplaty.components.main.cauldron.fueluse.FuelUseModel', {
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
        }
    ]
});