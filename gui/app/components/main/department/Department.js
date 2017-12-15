Ext.define('Oplaty.components.main.department.Department', {
    extend: 'Ext.form.Panel',

    xtype: 'department',

    requires: [
        'Ext.button.Button',
        'Ext.button.Button',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Oplaty.components.main.department.DepartmentViewModel',
        'Oplaty.components.main.department.DepartmentController'
    ],

    controller: 'department',
    viewModel: 'department',

    modal: true,
    floating: true,
    closable: true,
    scrollable: true,
    width: 700,
    height: 500,
    layout: 'column',
    center: true,
    autoShow: true,
    title: 'Dane oddziału',
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
                    xtype: 'textfield',
                    name: 'name',
                    bind: '{editDepartment.name}',
                    fieldLabel: 'Nazwa'
                },
                {
                    xtype: 'textfield',
                    name: 'phone',
                    bind: '{editDepartment.phone}',
                    fieldLabel: 'Telefon'
                },
                {
                    xtype: 'textfield',
                    name: 'fax',
                    bind: '{editDepartment.fax}',
                    fieldLabel: 'Faks'
                },
                {
                    xtype: 'textfield',
                    name: 'email',
                    bind: '{editDepartment.email}',
                    fieldLabel: 'E-mail'
                }                
            ]
        },
        {
            items: [
                {
                    xtype: 'textfield',
                    name: 'postalCode',
                    bind: '{editDepartment.postalCode}',
                    fieldLabel: 'Kod pocztowy'
                },
                {
                    xtype: 'textfield',
                    name: 'city',
                    bind: '{editDepartment.city}',
                    fieldLabel: 'Miejscowość'
                },
                {
                    xtype: 'textfield',
                    name: 'street',
                    bind: '{editDepartment.street}',
                    fieldLabel: 'Ulica'
                },
                {
                    xtype: 'textfield',
                    name: 'houseNr',
                    bind: '{editDepartment.houseNr}',
                    fieldLabel: 'Nr domu'
                },
                {
                    xtype: 'textfield',
                    name: 'flatNr',
                    bind: '{editDepartment.flatNr}',
                    fieldLabel: 'Nr lokalu'
                },
                {
                    xtype: 'combobox',
                    name: 'voivodship',
                    fieldLabel: 'Województwo',
                    displayField: 'name',
                    valueField: 'id',
                    forceSelection: true,    
                    editable: false,
                    queryMode: 'local',
                    bind: {
                        store: '{voivodshipList}',
                        value: '{editDepartment.voivodshipId}'
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
                        value: '{editDepartment.poviatId}',
                        disabled: '{!editDepartment.voivodshipId}'
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
                        value: '{editDepartment.communeId}',
                        disabled: '{!editDepartment.poviatId}'
                    }
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