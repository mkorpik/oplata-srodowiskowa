Ext.define('Oplaty.components.main.fee.FeeMenu', {
    extend: 'Ext.panel.Panel',
    xtype: 'feeMenu',

    requires: [
        'Oplaty.components.main.department.DepartmentList',
        'Oplaty.components.main.mobile.MobileMenu',
        'Oplaty.components.main.cauldron.CauldronMenu',
        'Oplaty.components.main.rainwater.RainwaterMenu',
        'Oplaty.components.main.fee.FeeMenuViewModel',
        'Oplaty.components.main.fee.FeeMenuController'
    ],

//    viewModel: 'feeMenu',
    controller: 'feeMenu',
    layout: {
        type: 'vbox'
    },

    items: [
        {
            xtype: 'panel',
            width: 600,
            layout: 'hbox',
            items:[
                {
                    xtype: 'combobox',
                    fieldLabel: 'Aktywna firma',
                    displayField: 'shortname',
                    valueField: 'id',
                    forceSelection: true,    
                    editable: false,
                    queryMode: 'local',
                    labelAlign: 'top',
                    bind: {
                        store: '{companyList}',
                        value: '{activeCompanyId}'
                    },
                    listeners: {
                        select: 'onCompanyChange'
                    },
                    margin: '0 10 20 90'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Okres rozliczeniowy',
                    displayField: 'periodName',
                    valueField: 'id',
                    queryMode: 'local',
                    forceSelection: true,
                    editable: false,
                    labelAlign: 'top',
                    bind: {
                        store: '{periodList}',
                        value: '{activePeriodId}'
                    },
                    listeners: {
                        select: 'onPeriodChange'
                    },
                    margin: '0 10 20 10'               
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
                iconCls: 'fa-industry',
                items: [{
                    xtype: 'departmentList'
                }]      
            },
            {
                title: 'Pojazdy',
                iconCls: 'fa-truck',
                items: [{
                    xtype: 'mobileMenu'
                }]
            }, {
                title: 'Kotły',
                iconCls: 'fa-fire',
                items: [{
                    xtype: 'cauldronMenu'
                }]
            }, {
                title: 'Wody opadowe',
                hidden: true,
                iconCls: ' fa-cloud',
                items: [{
                    xtype: 'rainwaterMenu'
                }]
            }, {
                title: 'Sprawozdania',
                iconCls: 'fa-file-text',
                width: 721,
                bind: {
                    html: '{loremIpsum}'
                }
            }]                    
        }
    ]

});
