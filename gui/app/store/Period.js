Ext.define('Oplaty.store.Period', {
    extend: 'Ext.data.Store',

    alias: 'store.period',

    model: 'Oplaty.model.PeriodModel',

    data: [
        { id: 1, name: '2013'},
        { id: 2, name: '2014'},
        { id: 3, name: '2015'},
        { id: 4, name: '2016'},
        { id: 5, name: '2017'}
    ],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
