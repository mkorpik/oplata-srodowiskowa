Ext.define('Oplaty.components.main.cauldron.cauldrons.Cauldron', {
    extend: 'Ext.form.Panel',

    xtype: 'cauldron',

    requires: [
        'Ext.button.Button',
        'Ext.button.Button',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Oplaty.components.main.cauldron.cauldrons.CauldronViewModel',
        'Oplaty.components.main.cauldron.cauldrons.CauldronController'
    ],

    controller: 'cauldron',
    viewModel: 'cauldron',

    modal: true,
    floating: true,
    closable: true,
    width: 400,
    height: 500,
    center: true,
    autoShow: true,
    title: {
        bind: '{editCauldron.name}'
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
            bind: '{editCauldron.name}',
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