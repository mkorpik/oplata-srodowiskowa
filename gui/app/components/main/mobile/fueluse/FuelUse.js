Ext.define('Oplaty.components.main.mobile.fueluse.FuelUse', {
    extend: 'Ext.form.Panel',

    xtype: 'mobileFuelUse',

    requires: [
        'Ext.button.Button',
        'Ext.button.Button',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Oplaty.components.main.mobile.fueluse.FuelUseViewModel',
        'Oplaty.components.main.mobile.fueluse.FuelUseController'
    ],

    controller: 'mobileFuelUse',
    viewModel: 'mobileFuelUse',

    modal: true,
    floating: true,
    closable: true,
    width: 400,
    height: 500,
    center: true,
    autoShow: true,
    title: {
        bind: '{editMobileFuelUse.name}'
    },
    bodyPadding: 20,
    defaults: {
        width: '100%',
        labelAlign: 'top'
    },
    items: [
        {
            xtype: 'textarea',
            name: 'name',
            bind: '{editMobileFuelUse.name}',
            fieldLabel: 'Nazwa'
        },
        {
            xtype: 'button',
            text: 'Zapisz',
            margin: '5 0',
            handler: 'onSave'
        },
        {
            xtype: 'button',
            text: 'Zamknij',
            margin: '5 0',
            handler: 'onCancel'
        }
    ]

});