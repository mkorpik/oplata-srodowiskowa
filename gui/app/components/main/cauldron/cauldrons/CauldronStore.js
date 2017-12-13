Ext.define('Oplaty.components.main.cauldron.cauldrons.CauldronStore', {
    extend: 'Ext.data.Store',

    alias: 'store.cauldron',

    model: 'Oplaty.components.main.cauldron.cauldrons.CauldronModel',

    data: [
        { id: 1, name: 'A1'},
        { id: 2, name: 'A2'},
        { id: 3, name: 'A3'},
        { id: 4, name: 'A4'}
    ],

    proxy: {
        type: 'memory',
        reader: 'json'
    }
});
