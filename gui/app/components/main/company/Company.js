Ext.define('Oplaty.components.main.company.Company', {
    extend: 'Ext.form.Panel',

    xtype: 'company',

    requires: [
        'Ext.button.Button',
        'Ext.button.Button',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        // 'Todo.view.tasks.TaskFormController',
        // 'Todo.view.tasks.TaskFormModel',
        // 'Todo.view.PercentTextField'
    ],

    viewModel: {
        type: 'TaskFormModel'
    },
    controller: 'TaskFormController',

    listeners: {
        close: 'onClose'
    },
    modal: true,
    floating: true,
    closable: true,
    width: 400,
    height: 500,
    center: true,
    autoShow: true,
    title: {
        bind: '{taskRecord.title}'
    },
    bodyPadding: 20,
    defaults: {
        width: '100%',
        labelAlign: 'top'
    },
    items: [
        {
            xtype: 'textfield',
            name: 'title',
            bind: '{taskRecord.title}',
            fieldLabel: 'Title'
        },
        {
            xtype: 'textarea',
            name: 'description',
            bind: '{taskRecord.description}',
            fieldLabel: 'Description'
        },
        {
            xtype: 'datefield',
            name: 'dueDate',
            bind: '{taskRecord.dueDate}',
            dateFormat: 'd/m/Y',
            fieldLabel: 'Due Date'
        },
        {
            xtype: 'textfield',
            name: 'progess',
            bind: '{taskprogress}',
            fieldLabel: 'Progress'
        },
        {
            xtype: 'button',
            text: 'Save',
            margin: '5 0',
            handler: 'onSave'
        },
        {
            xtype: 'button',
            text: 'Delete',
            margin: '5 0',
            handler: 'onDelete',
            hidden: true,
            bind: {
                hidden: '{!taskRecord.description}'
            }
        }
    ]


});