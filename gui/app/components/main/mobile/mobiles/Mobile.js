Ext.define('Oplaty.components.main.mobile.mobiles.Mobile', {
    extend: 'Ext.form.Panel',

    xtype: 'mobile',

    requires: [
        'Ext.button.Button',
        'Ext.button.Button',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Oplaty.components.main.mobile.mobiles.MobileViewModel',
        'Oplaty.components.main.mobile.mobiles.MobileController'
    ],

    controller: 'mobile',
    viewModel: 'mobile',

    modal: true,
    floating: true,
    closable: true,
    scrollable: true,
    width: 400,
    height: 500,
    layout: 'column',
    center: true,
    autoShow: true,
    title: 'Dane pojazdu',
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
                    xtype: 'textfield',
                    name: 'name',
                    bind: '{editMobile.name}',
                    fieldLabel: 'Nazwa'
                },
                {
                    xtype: 'textfield',
                    name: 'registrationNumber',
                    bind: '{editMobile.registrationNumber}',
                    fieldLabel: 'Nr rejestracyjny'
                },
                {
                    xtype: 'displayfield',
                    name: 'engineLabel',
                    fieldLabel: 'Rodzaj silnika',
                    bind: '{selectedEngine.longDesc}'
                },
                {
                    xtype: 'button',
                    text: 'Wybierz rodzaj silnika',
                    margin: '5 0',
                    handler: 'onEngineChoise'
                },             
                {
                    xtype: 'tagfield',
                    fieldLabel: 'Rodzaj paliwa',                        
                    displayField: 'description',
                    valueField: 'id',
                    store: 'MobileFuel',
                    queryMode: 'local',
                    bind: '{selectedFuels}'       
                }        
            ]
        }
    ],
    
    buttons: [
        {
            xtype: 'button',
            text: 'Zapisz',
            handler: 'onSave'
        },
        {
            xtype: 'button',
            text: 'Zamknij',
            handler: 'onCancel'
        }
    ]

});