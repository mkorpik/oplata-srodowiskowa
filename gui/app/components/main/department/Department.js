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
    width: 400,
    height: 500,
    center: true,
    autoShow: true,
    title: {
        bind: '{editDepartment.name}'
    },
    bodyPadding: 20,
    defaults: {
        width: '100%',
        labelAlign: 'top'
    },
    items: [
        {
            xtype: 'textfield',
            name: 'name',
            bind: '{editDepartment.name}',
            fieldLabel: 'Nazwa'
        },
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
            bind: {
                store: '{communeList}',
                value: '{editDepartment.communeId}',
                disabled: '{!editDepartment.poviatId}'
            }
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