Ext.define('Oplaty.components.main.cauldron.fueluse.FuelUse', {
    extend: 'Ext.form.Panel',

    xtype: 'cauldronFuelUse',

    requires: [
        'Ext.button.Button',
        'Ext.button.Button',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Oplaty.components.main.cauldron.fueluse.FuelUseViewModel',
        'Oplaty.components.main.cauldron.fueluse.FuelUseController'
    ],

    controller: 'cauldronFuelUse',
    viewModel: 'cauldronFuelUse',

    modal: true,
    floating: true,
    closable: true,
    width: 400,
    height: 500,
    center: true,
    autoShow: true,
    title: {
        bind: '{editCauldronFuelUse.name}'
    },
    bodyPadding: 20,
    defaults: {
        width: '100%',
        labelAlign: 'top'
    },
    items: [
        {
            xtype: 'combobox',
            name: 'cauldron',
            fieldLabel: 'Kocioł',
            displayField: 'name',
            valueField: 'id',
            forceSelection: true,    
            editable: false,
            queryMode: 'local',
            bind: {
                store: '{cauldronList}',
                value: '{selectedCauldron}'
            }
        },
        {
            xtype: 'numberfield',
            name: 'expend',
            bind: '{editCauldronFuelUse.expend}',
            fieldLabel: 'Zużycie'
        },
        {
            xtype: 'datefield',
            name: 'date',
            bind: '{editCauldronFuelUse.date}',
            fieldLabel: 'Data',
            submitFormat: 'Y-m-d H:i:s'
        },
        {
            xtype: 'textfield',
            name: 'comment',
            bind: '{editCauldronFuelUse.comment}',
            fieldLabel: 'Nr faktury'
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