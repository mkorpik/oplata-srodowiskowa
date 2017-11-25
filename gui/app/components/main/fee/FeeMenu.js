Ext.define('Oplaty.components.main.fee.FeeMenu', {
    extend: 'Ext.panel.Panel',
    xtype: 'feeMenu',

    requires: [
        'Oplaty.components.main.mobile.MobileMenu',
        'Oplaty.components.main.cauldron.CauldronMenu',
        'Oplaty.components.main.rainwater.RainwaterMenu',
        'Oplaty.components.main.fee.FeeMenuViewModel'
    ],

    viewModel: 'feeMenu',

    layout: {
        type: 'vbox'
    },

    items: [
        {
            xtype: 'panel',
            layout: 'form',
            items:[
                {
                    xtype: 'combobox',
                    fieldLabel: 'Aktywna firma',
                    displayField: 'name',
                    valueField: 'id',
                    forceSelection: true,    
                    bind: {
                        store: '{companyList}'
                    }
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Okres rozliczeniowy',
                    displayField: 'name',
                    valueField: 'id',
                    forceSelection: true,    
                    bind: {
                        store: '{companyList}'
                    }
                },
                {
                    
                }                
            ]
        },
        {
            xtype: 'tabpanel',
            ui: 'navigation',    
            tabBar: {
                flex: 1,
                layout: {
                    align: 'fit',
                    overflowHandler: 'none',
                    pack: 'left'
                }
            },  
            defaults: {
                bodyPadding: 5,
                tabConfig: {
                    //width: 150,
                    plugins: 'responsive',
                    responsiveConfig: {
                        wide: {
                            iconAlign: 'left',
                            textAlign: 'left'
                        },
                        tall: {
                            iconAlign: 'top',
                            textAlign: 'center'                            
                        }
                    }
                }
            },                                  
            items: [{
                title: 'Oddziały',
                iconCls: 'fa-file-text',
                bind: {
                    html: '{loremIpsum}'
                }        
            },
            {
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
        }
    ]

});
