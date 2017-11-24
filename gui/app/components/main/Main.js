/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Oplaty.components.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Oplaty.components.main.MainController',
        'Oplaty.components.main.MainModel',
        'Oplaty.components.main.List',
        'Oplaty.components.main.company.CompanyList',
        'Oplaty.components.main.mobile.MobileMenu',
        'Oplaty.components.main.cauldron.CauldronMenu',
        'Oplaty.components.main.rainwater.RainwaterMenu'
    ],

    controller: 'main',
    viewModel: 'main',

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'top'
        }
    },

    items: [{
        xtype: 'panel',
        title: 'Nagłowek'
    },{
        xtype: 'tabpanel',
        height: 600,
        tabBarHeaderPosition: 1,
        titleRotation: 0,
        tabRotation: 0,
        ui: 'navigation',    
        header: {
            layout: {
                align: 'stretchmax'
            },
            title: {
                bind: {
                    text: '{name}'
                },
                flex: 0
            },
            iconCls: 'fa-th-list'
        },    
        tabBar: {
            flex: 1,
            layout: {
                align: 'stretch',
                overflowHandler: 'none',
                pack: 'left'
            }
        },    
        defaults: {
            bodyPadding: 20,
            tabConfig: {
                plugins: 'responsive',
                responsiveConfig: {
                    wide: {
                        iconAlign: 'left',
                        textAlign: 'left'
                    },
                    tall: {
                        iconAlign: 'top',
                        textAlign: 'center',
                        width: 120
                    }
                }
            }
        },    
        items: [{
            title: 'Firmy',
            iconCls: 'fa-industry',
            items: [{
                xtype: 'companyList'
            }]
        },{
            title: 'Pojazdy',
            iconCls: 'fa-automobile',
            items: [{
                xtype: 'mobileMenu'
            }]
        }, {
            title: 'Kotły',
            iconCls: 'fa-steam',
            items: [{
                xtype: 'cauldronMenu'
            }]
        }, {
            title: 'Wody opadowe',
            iconCls: ' fa-cloud',
            items: [{
                xtype: 'rainwaterMenu'
            }]
        }, {
            title: 'Sprawozdania',
            iconCls: 'fa-file-text',
            bind: {
                html: '{loremIpsum}'
            }
        }]
   }]
});
