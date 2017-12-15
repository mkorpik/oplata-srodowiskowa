Ext.define('Oplaty.components.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'Oplaty.components.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Logowanie',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            ui: '',
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }  
});