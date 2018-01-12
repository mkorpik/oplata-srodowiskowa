Ext.define('Oplaty.components.main.cauldron.cauldrons.kind.KindStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.kinds',

    rootData: {
        text: 'Ext JS',
        expanded: true,
        children: [
            {
                id: 91500,
                text: 'I Kotły opalane węglem kamiennym',
                children: [
                    {
                        id: 91501,                        
                        text: '1. Kocioł z rusztem mechanicznym, z urządzeniem odpylającym',
						children: [
							{
								id: 91502,
								leaf: true,
								text: 'nominalna moc cieplna <= 3MW'
							},
							{
								id: 91503,
								leaf: true,
								text: 'nominalna moc cieplna > 3 MW i <= 5MW'
							}
						]
                    },
                    {
                        id: 91504,
                        leaf: true,
                        text: '2. Kocioł z rusztem mechanicznym, bez urządzenia odpylającego, o nominalnej mocy cieplnej <=5 MW'
                    },
                    {
                        id: 91505,
                        leaf: true,
                        text: '3. Kocioł z rusztem stałym, z ciągiem naturalnym, o nominalnej mocy cieplnej <=5 MW'
                    },
                    {
                        id: 91506,
                        leaf: true,
                        text: '4. Kocioł z rusztem stałym, z ciągiem sztucznym, z urządzeniem odpylającym, o nominalnej mocy cieplnej <=5 MW'
                    },
                    {
                        id: 91507,
                        leaf: true,
                        text: '5. Kocioł z rusztem stałym, z ciągiem sztucznym, bez urządzenia odpylającego, o nominalnej mocy cieplnej <=5 MW'
                    }			
                ]
            }, {
                id: 91508,
                text: 'II Kotły o nominalnej mocy cieplnej <=5 MW opalane koksem',
                children: [
                    {
                        id: 91509,
                        leaf: true,
                        text: '1. Kocioł z rusztem stałym, z ciągiem naturalnym'
                    },
                    {
                        id: 91510,
                        leaf: true,
                        text: '2. Kocioł z rusztem stałym, z ciągiem sztucznym, z urządzeniem odpylającym'
                    },
                    {
                        id: 91511,
                        leaf: true,
                        text: '3. Kocioł z rusztem stałym, z ciągiem sztucznym, bez urządzenia odpylającego'
                    }
                ]	
            },
            {
                id: 91512,
                text: 'III Kotły o nominalnej mocy cieplnej <=5 MW opalane drewnem',
				leaf: true
            },
            {
                id: 91513,
                text: 'IV Kotły o nominalnej mocy cieplnej <=5 MW opalane olejem',
                children: [
                    {
                        id: 91514,
                        leaf: true,
                        text: '1. Olej lekki (zawartość siarki nie większa niż 0,5 %)'
                    },
                    {
                        id: 91515,
                        leaf: true,
                        text: '2. Olej opałowy (zawartość siarki nie większa niż 1 %)'
                    },
                    {
                        id: 91516,
                        leaf: true,
                        text: '3. Olej opałowy (zawartość siarki od 1 % do 1,5 %)'
                    },
                    {
                        id: 91517,
                        leaf: true,
                        text: '4. Olej napędowy'
                    }		
                ]
            },
            {
                id: 91518,
                text: 'V Kotły opalane paliwem gazowym',
                children: [
                    {
                        id: 91519,                        
                        text: '1. Gaz ziemny wysokometanowy',
						children: [
							{
								id: 91520,
								leaf: true,
								text: 'nominalna moc cieplna <= 1,4MW'
							},
							{
								id: 91521,
								leaf: true,
								text: 'nominalna moc cieplna > 1,4 MW i <= 5MW'
							}
						]
                    },
                    {
                        id: 91522,                        
                        text: '2. Gaz ziemny zaazotowany',
						children: [
							{
								id: 91523,
								leaf: true,
								text: 'nominalna moc cieplna <= 1,4MW'
							},
							{
								id: 91524,
								leaf: true,
								text: 'nominalna moc cieplna > 1,4 MW i <= 5MW'
							}
						]
                    },

                    {
                        id: 91525,
                        leaf: true,
                        text: '3. Gaz płynny propan-butan, nominalna moc cieplna <= 5MW'
                    }		
                ]
            }                            
        ]
    },

    constructor: function (config) {
        // Since records claim the data object given to them, clone the data
        // for each instance.
        config = Ext.apply({
            root: Ext.clone(this.rootData)
        }, config);

        this.callParent([config]);
    }
});