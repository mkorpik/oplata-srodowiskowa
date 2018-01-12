Ext.define('Oplaty.components.main.cauldron.cauldrons.kind.KindTree', {
    extend: 'Ext.form.Panel',

    xtype: 'kindTree',

    requires: [
        'Ext.button.Button',
        'Ext.button.Button',
        'Oplaty.components.main.cauldron.cauldrons.kind.KindStore',
        'Oplaty.components.main.cauldron.cauldrons.kind.KindController'
    ],

    controller: 'kind',

    modal: true,
    floating: true,
    closable: true,
    scrollable: true,
    width: 800,
    height: 500,
    center: true,
    autoShow: true,
    title: 'Wybierz rodzaj kotła',
    bodyPadding: 20,
    defaults: {
        width: '100%',
        labelAlign: 'top'
    },
    items: [
        {
            xtype: 'treepanel',
            itemId: 'idKindTree',
            useArrows: true,
            colspan: 2,
            rootVisible: false,
            store: {
                type: 'kinds'
            }
        }   
    ],

    buttons: [
        {
            xtype: 'button',
            text: 'Wybierz',            
            handler: 'onSave'
        }        
    ]

});