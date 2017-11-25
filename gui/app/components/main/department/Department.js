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
            xtype: 'textarea',
            name: 'name',
            bind: '{editDepartment.name}',
            fieldLabel: 'Nazwa'
        },
        {
            xtype: 'textfield',
            name: 'city',
            bind: '{editDepartment.city}',
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