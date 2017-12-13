Ext.define('Oplaty.components.main.mobile.mobiles.engine.EngineStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.engines',

    rootData: {
        text: 'Ext JS',
        expanded: true,
        children: [
            {
                id: 91010,
                text: 'I Silniki w samochodach osobowych',
                children: [
                    {
                        id: 91011,
                        leaf: true,
                        text: '1. zarejestrowanych po raz pierwszy do dnia 31.12.1992r'
                    },
                    {
                        id: 91012,
                        leaf: true,
                        text: '2. zarejestrowanych po raz pierwszy w okresie 01.01.1993r - 31.12.1996r lub z dokumentem potwierdzającym spełnienie wymagań EURO 1'
                    },
                    {
                        id: 91013,
                        leaf: true,
                        text: '3. zarejestrowanych po raz pierwszy w okresie 01.01.1997r - 31.12.2000r lub z dokumentem potwierdzającym spełnienie wymagań EURO 2'
                    },
                    {
                        id: 91014,
                        leaf: true,
                        text: '4. zarejestrowanych po raz pierwszy w okresie 01.01.2001r - 31.12.2005r lub z dokumentem potwierdzającym spełnienie wymagań EURO 3'
                    },
                    {
                        id: 91015,
                        leaf: true,
                        text: '5. zarejestrowanych po dniu 31.12.2005r lub z dokumentem potwierdzającym spełnienie wymagań EURO 4'
                    },
                    {
                        id: 91016,
                        leaf: true,
                        text: '6. z dokumentem potwierdzającym spełnienie wymagań EURO 5'
                    }			
                ]
            }, {
                id: 91017,
                text: 'II Silniki w samochodach o dopuszczalnej masie całkowitej do 3,5 Mg innych niż osobowe',
                children: [
                    {
                        id: 91018,
                        leaf: true,
                        text: '7. zarejestrowanych po raz pierwszy do dnia 30.09.1993r'
                    },
                    {
                        id: 91019,
                        leaf: true,
                        text: '8. zarejestrowanych po raz pierwszy w okresie 01.10.1993r - 30.06.1997r lub z dokumentem potwierdzającym spełnienie wymagań EURO 1'
                    },
                    {
                        id: 91020,
                        leaf: true,
                        text: '9. zarejestrowanych po raz pierwszy w okresie 01.07.1997r - 30.06.2001r lub z dokumentem potwierdzającym spełnienie wymagań EURO 2'
                    },
                    {
                        id: 91021,
                        leaf: true,
                        text: '10. zarejestrowanych po raz pierwszy w okresie 30.07.2001r - 30.06.2006r lub z dokumentem potwierdzającym spełnienie wymagań EURO 3'
                    },
                    {
                        id: 91022,
                        leaf: true,
                        text: '11. zarejestrowanych po raz pierwszy po dniu 30.06.2006r lub z dokumentem potwierdzającym spełnienie wymagań EURO 4'
                    },
                    {
                        id: 91023,
                        leaf: true,
                        text: '12. z dokumentem potwierdzającym spełnienie wymagań EURO 5'
                    }
                ]	
            },
            {
                id: 91024,
                text: 'III Silniki w pojazdach o dopuszczalnej masie całkowitej powyżej 3,5 Mg',
                children: [
                    {
                        id: 91025,
                        leaf: true,
                        text: '13. w samochodach o dopuszczalnej masie całkowitej powyżej 3,5 Mg, z wyjątkiem autobusów, zarejestrowanych po raz pierwszy do dnia 30.09.1993r'
                    },
                    {
                        id: 91026,
                        leaf: true,
                        text: '14. w autobusach o dopuszczalnej masie całkowitej powyżej 3,5 Mg zarejestrowanych po raz pierwszy do dnia 30.09.1993r'
                    },
                    {
                        id: 91027,
                        leaf: true,
                        text: '15. zarejestrowanych po raz pierwszy w okresie 01.10.1993r - 30.09.1996r lub z dokumentem potwierdzającym spełnianie wymagań EURO 1'
                    },
                    {
                        id: 91028,
                        leaf: true,
                        text: '16. zarejestrowanych po raz pierwszy w okresie 01.10.1996r - 30.09.2001r lub z dokumentem potwierdzającym spełnianie wymagań EURO 2'
                    },
                    {
                        id: 91029,
                        leaf: true,
                        text: '17. zarejestrowanych po raz pierwszy w okresie 01.10.2001r - 30.09.2006r lub z dokumentem potwierdzającym spełnianie wymagań EURO 3'
                    },
                    {
                        id: 91030,
                        leaf: true,
                        text: '18. zarejestrowanych po raz pierwszy w okresie 01.10.2006r - 30.09.2009r lub z dokumentem potwierdzającym spełnianie wymagań EURO 4'
                    },
                    {
                        id: 91031,
                        leaf: true,
                        text: '19. z dokumentem potwierdzającym spełnianie wymagań EURO 5'
                    }			
                ]
            },
            {
                id: 91032,
                text: 'IV Silniki w ciągnikach rolniczych',
                children: [
                    {
                        id: 91033,
                        leaf: true,
                        text: '20. zarejestrowanych po raz pierwszy do dnia 30.06.2001r'
                    },
                    {
                        id: 91034,
                        leaf: true,
                        text: '21. zarejestrowanych po raz pierwszy w okresie 01.07.2001r - 31.12.2003r lub z dokumentem potwierdzającym spełnienie wymagań etapu I'
                    },
                    {
                        id: 91035,
                        leaf: true,
                        text: '22. zarejestrowanych po raz pierwszy w okresie 01.01.2004r - 31.12.2007r lub z dokumentem potwierdzającym spełnienie wymagań etapu II'
                    },
                    {
                        id: 91036,
                        leaf: true,
                        text: '23. zarejestrowanych po raz pierwszy po dniu 01.01.2008r lub z dokumentem potwierdzającym spełnienie wymagań etapu IIIA'
                    }		
                ]
            },
            {
                id: 91037,
                text: 'V Silniki w pojazdach wolnobieżnych, maszynach i urządzeniach',
                children: [
                    {
                        id: 91038,
                        leaf: true,
                        text: '24. wyprodukowanych do 1999r'
                    },
                    {
                        id: 91039,
                        leaf: true,
                        text: '25. wyprodukowanych w latach 2000 - 2003 lub z dokumentem potwierdzającym spełnienie wymagań etapu I'
                    },
                    {
                        id: 91040,
                        leaf: true,
                        text: '26. wyprodukowanych w latach 2004 - 2008 lub z dokumentem potwierdzającym spełnienie wymagań etapu II'
                    },
                    {
                        id: 91041,
                        leaf: true,
                        text: '27. z dokumentem potwierdzającym spełnienie wymagań etapu IIIA'
                    }		
                ]
            },
            {
                id: 91042,
                text: 'VI Inne',
                children: [
                    {
                        id: 91043,
                        leaf: true,
                        text: '28. Silniki w pojazdach szynowych wyprodukowanych do 2007r'
                    },
                    {
                        id: 91044,
                        leaf: true,
                        text: '29. Silniki w pojazdach szynowych wyprodukowanych po 2007r lub z dokumentem potwierdzającym spełnienie wymagań etapu IIIA'
                    },
                    {
                        id: 91045,
                        leaf: true,
                        text: '30. Silniki w jednostkach pływających żeglugi śródlądowej wyprodukowanych do 2007r'
                    },
                    {
                        id: 91046,
                        leaf: true,
                        text: '31. Silniki w jednostkach pływających żeglugi śródlądowej wyprodukowanych po 2007r lub z dokumentem potwierdzającym spełnienie wymagań etapu IIIA'
                    },
                    {
                        id: 91047,
                        leaf: true,
                        text: '32. Silniki w innych pojazdach samochodowych o dopuszczalnej masie całkowitej do 3,5 Mg i w motorowerach'
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