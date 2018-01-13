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
    width: 700,
    height: 500,
    layout: 'column',
    center: true,
    autoShow: true,
    title: 'Dane firmy',
    bodyPadding: 20,
    defaults: {
        layout: 'form',    
        xtype: 'container',            
        width: '50%'
    },
    items: [
        {   
            items: [
                {
                    xtype: 'textarea',
                    name: 'longname',
                    bind: '{editCompany.longname}',
                    fieldLabel: 'Nazwa*',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'shortname',                    
                    bind: '{editCompany.shortname}',
                    fieldLabel: 'Nazwa skrócona*',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'nip',
                    bind: '{editCompany.nip}',
                    fieldLabel: 'NIP'
                },
                {
                    xtype: 'textfield',
                    name: 'regon',
                    bind: '{editCompany.regon}',
                    fieldLabel: 'REGON'
                },
                {
                    xtype: 'textfield',
                    name: 'phone',
                    bind: '{editCompany.phone}',
                    fieldLabel: 'Telefon'
                },
                {
                    xtype: 'textfield',
                    name: 'fax',
                    bind: '{editCompany.fax}',
                    fieldLabel: 'Faks'
                },
                {
                    xtype: 'textfield',
                    name: 'email',
                    bind: '{editCompany.email}',
                    fieldLabel: 'E-mail'
                }                
            ]
        },
        {
            items: [
                {
                    xtype: 'textfield',
                    name: 'postalCode',
                    bind: '{editCompany.postalCode}',
                    fieldLabel: 'Kod pocztowy'
                },
                {
                    xtype: 'textfield',
                    name: 'city',
                    bind: '{editCompany.city}',
                    fieldLabel: 'Miejscowość'
                },
                {
                    xtype: 'textfield',
                    name: 'street',
                    bind: '{editCompany.street}',
                    fieldLabel: 'Ulica'
                },
                {
                    xtype: 'textfield',
                    name: 'houseNr',
                    bind: '{editCompany.houseNr}',
                    fieldLabel: 'Nr domu'
                },
                {
                    xtype: 'textfield',
                    name: 'flatNr',
                    bind: '{editCompany.flatNr}',
                    fieldLabel: 'Nr lokalu'
                },
                {
                    xtype: 'combobox',
                    name: 'voivodship',
                    fieldLabel: 'Województwo*',
                    displayField: 'name',
                    valueField: 'id',
                    forceSelection: true,    
                    editable: false,
                    queryMode: 'local',
                    allowBlank: false,
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
                    editable: false,
                    queryMode: 'local',
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
                    editable: false,
                    queryMode: 'local',
                    bind: {
                        store: '{communeList}',
                        value: '{editCompany.communeId}',
                        disabled: '{!editCompany.poviatId}'
                    }
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