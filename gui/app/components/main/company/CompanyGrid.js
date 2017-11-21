Ext.define('Oplaty.components.main.company.CompanyGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'companyGrid',

    require: [
        'Oplaty.components.main.company.CompanyStore',
        'Oplaty.store.Personnel'
    ],
    store: {
        type: 'company'
    },

    //store: Ext.create('Oplaty.components.main.company.CompanyStore'),
    // bind: {
    //     store: '{companyList}'
    // },
    columns: [
        { text: 'Nazwa',  dataIndex: 'name' },
        { bind: {text: '{nip}'}, dataIndex: 'nip'},
        { text: 'Województwo', dataIndex: 'voivodship'},
        { text: 'Mejscowość', dataIndex: 'city'}
    ]        

});
