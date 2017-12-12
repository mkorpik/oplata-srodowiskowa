Ext.define('Oplaty.components.main.company.Company', {
    extend: 'Ext.form.Panel',

    xtype: 'company',

    requires: [
        'Ext.button.Button',
        'Ext.button.Button',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Oplaty.components.main.company.CompanyViewModel',
        'Oplaty.components.main.company.CompanyController'
    ],

    controller: 'company',
    viewModel: 'company',

    modal: true,
    floating: true,
    closable: true,
    scrollable: true,
    width: 400,
    height: 500,
    center: true,
    autoShow: true,
    title: {
        bind: '{editCompany.shortname}'
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
            bind: '{editCompany.name}',
            fieldLabel: 'Nazwa'
        },
        {
            xtype: 'textfield',
            name: 'nip',
            bind: '{editCompany.nip}',
            fieldLabel: 'NIP'
        },
        {
            xtype: 'textfield',
            name: 'city',
            bind: '{editCompany.city}',
            fieldLabel: 'Miejscowość'
        },
        {
            xtype: 'combobox',
            name: 'voivodship',
            fieldLabel: 'Województwo',
            displayField: 'name',
            valueField: 'id',
            forceSelection: true,    
            editable: true,
            bind: {
                store: '{voivodshipList}',
                value: '{editCompany.voivodshipId}'
            },
            listeners: {
                select: 'onVoivodshipChange'
            }
        },        
        {
            xtype: 'combobox',
            name: 'poviat',
            fieldLabel: 'Powiat',
            displayField: 'name',
            valueField: 'id',
            forceSelection: true,
            editable: true,
            bind: {
                store: '{poviatList}',
                value: '{editCompany.poviatId}',
                disabled: '{!editCompany.voivodshipId}'
            },
            listeners: {
                select: 'onPoviatChange'
            }            
        },
        {
            xtype: 'combobox',
            name: 'commune',
            fieldLabel: 'Gmina',
            displayField: 'name',
            valueField: 'id',
            forceSelection: true,
            editable: true,
            bind: {
                store: '{communeList}',
                value: '{editCompany.communeId}',
                disabled: '{!editCompany.poviatId}'
            }
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