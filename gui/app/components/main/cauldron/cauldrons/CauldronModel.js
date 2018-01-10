
Ext.define('Oplaty.components.main.cauldron.cauldrons.CauldronModel', {
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
        }
    ]
});