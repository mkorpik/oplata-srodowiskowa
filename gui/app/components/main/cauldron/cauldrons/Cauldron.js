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
    scrollable: true,    
    width: 400,
    height: 500,
    layout: 'column',    
    center: true,
    autoShow: true,
    title: 'Dane kotła',
    bodyPadding: 20,
    defaults: {
        layout: 'form',    
        xtype: 'container',            
        width: '100%'
    },
    items: [
        {
            items: [
                {
                    xtype: 'textarea',
                    name: 'name',
                    bind: '{editCauldron.name}',
                    fieldLabel: 'Nazwa',
                    allowBlank: false
                },
                {
                    xtype: 'combobox',
                    name: 'kind',
                    fieldLabel: 'Oddział',
                    displayField: 'name',
                    valueField: 'id',
                    forceSelection: true,    
                    editable: false,
                    queryMode: 'local',
                    bind: {
                        store: '{departmentList}',
                        value: '{editCauldron.departmentId}'
                    },
                    allowBlank: false
                },          
                {
                    xtype: 'displayfield',
                    name: 'kindLabel',
                    fieldLabel: 'Rodzaj kotła',
                    bind: '{selectedKind.description}'
                },        
                {
                    xtype: 'button',
                    text: 'Wybierz rodzaj kotła',
                    margin: '5 0',
                    handler: 'onKindChoise'
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