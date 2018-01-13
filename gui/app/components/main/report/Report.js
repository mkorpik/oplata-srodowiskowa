Ext.define('Oplaty.components.main.report.Report', {
    extend: 'Ext.panel.Panel',
    xtype: 'report',

    controller: 'report',

    requires: [
        'Oplaty.components.main.report.ReportController'
    ],

    items: [{        
            xtype: 'combobox',
            name: 'voivodship',
            fieldLabel: 'Województwo',
            displayField: 'name',
            valueField: 'id',
            forceSelection: true,    
            editable: false,
            queryMode: 'local',
            bind: {
                store: '{vList}',
                value: '{reportVoivodshipId}'
            }
        },
            {
                xtype: 'button',
                text: 'Generuj',            
                handler: 'onGenerateReport'
            }
        ]
});
