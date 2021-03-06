/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Oplaty.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Oplaty',

    requires: [
        'Oplaty.components.main.Main',
        'Oplaty.components.login.Login',
        'Oplaty.constants.OplatyConstants'
    ],

    stores: [        
        'MobileEngine',
        'MobileFuel',
        'CauldronKind'
        // TODO: add global / shared stores here
    ],

    init: function () {
        Ext.Ajax.setDefaultHeaders({ 'Authorization': 'Bearer {eyJleHAiOjE0MzQ3Mjc1MzYsInVzZXJuYW1lIjoia29ybGVvbiIsImlhdCI6IjE0MzQ2NDExMzYifQ}' });
    },
    
    launch: function () {
        
        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var loggedIn;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("TutorialLoggedIn");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        });

    },
        

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
