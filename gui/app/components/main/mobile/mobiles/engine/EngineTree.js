Ext.define('Oplaty.components.main.mobile.mobiles.engine.EngineTree', {
    extend: 'Ext.form.Panel',

    xtype: 'engineTree',

    requires: [
        'Ext.button.Button',
        'Ext.button.Button',
        'Oplaty.components.main.mobile.mobiles.engine.EngineStore',
        'Oplaty.components.main.mobile.mobiles.engine.EngineController'
    ],

    controller: 'engine',
    // viewModel: 'mobile',

    modal: true,
    floating: true,
    closable: true,
    scrollable: true,
    width: 800,
    height: 500,
    center: true,
    autoShow: true,
    // title: {
    //     bind: '{editMobile.name}'
    // },
    bodyPadding: 20,
    defaults: {
        width: '100%',
        labelAlign: 'top'
    },
    items: [
        {
            xtype: 'treepanel',
            itemId: 'idEngineTree',
            useArrows: true,
            colspan: 2,
            rootVisible: false,
            store: {
                type: 'engines'
            }
        },        
        {
            xtype: 'button',
            text: 'Wybierz',
            margin: '5 0',
            handler: 'onSave'
        }
    ]

});