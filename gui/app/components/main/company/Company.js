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
        // 'Todo.view.tasks.TaskFormController',
        // 'Todo.view.tasks.TaskFormModel',
        // 'Todo.view.PercentTextField'
    ],

    controller: 'company',
    viewModel: 'company',

    modal: true,
    floating: true,
    closable: true,
    width: 400,
    height: 500,
    center: true,
    autoShow: true,
    title: {
        bind: '{editCompany.name}'
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