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
    scrollable: true,    
    width: 400,
    height: 500,
    center: true,
    autoShow: true,
    title: {
        bind: '{editMobileFuelUse.name}'
    },
    bodyPadding: 20,
    defaults: {
        layout: 'form',    
        xtype: 'container',            
        width: '100%'
    },

    listeners: {
        close: 'onClose'
    },
    items: [
        {
            items: [
                {
                    xtype: 'combobox',
                    name: 'mobile',
                    fieldLabel: 'Pojazd',
                    displayField: 'name',
                    valueField: 'id',
                    forceSelection: true,    
                    editable: false,
                    queryMode: 'local',
                    bind: {
                        store: '{mobileList}',
                        value: '{selectedMobile}'
                    },
                    listeners: {
                        select: 'onMobileChange'
                    },
                    allowBlank: false    
                },
                {
                    xtype: 'combobox',
                    name: 'fuel',
                    fieldLabel: 'Rodzaj paliwa',
                    displayField: 'description',
                    valueField: 'id',
                    forceSelection: true,    
                    editable: false,
                    queryMode: 'local',
                    store: 'MobileFuel',
                    queryMode: 'local',
                    bind: {
                        value: '{editMobileFuelUse.mobileFuelId}'
                    },
                    allowBlank: false    
                },
                {
                    xtype: 'numberfield',
                    name: 'expend',
                    bind: '{editMobileFuelUse.expend}',
                    fieldLabel: 'Zużycie',
                    allowBlank: false    
                },
                {
                    xtype: 'datefield',
                    name: 'date',
                    bind: '{editMobileFuelUse.date}',
                    fieldLabel: 'Data',
                    submitFormat: 'Y-m-d H:i:s'
                },
                {
                    xtype: 'textfield',
                    name: 'comment',
                    bind: '{editMobileFuelUse.comment}',
                    fieldLabel: 'Nr faktury'
                }                
            ]
        }
    ],

    buttons: [
        {
            xtype: 'button',
            text: 'Zapisz',
            handler: 'onSave',
            formBind: true
        },
        {
            xtype: 'button',
            text: 'Zamknij',
            handler: 'onCancel'
        }
    ]

});