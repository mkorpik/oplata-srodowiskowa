/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Oplaty.components.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    requires: [
        'Oplaty.components.main.company.CompanyStore',
        'Oplaty.store.Period',
        'Oplaty.store.MobileEngine'
    ],

    data: {
        name: 'Oplaty środowiskowe',
        activeCompanyId: null,
        activePeriodId: null,
        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },

    stores: {
        companyList: Ext.create('Oplaty.components.main.company.CompanyStore'),
        periodList: Ext.create('Oplaty.store.Period'),
        engineList: Ext.create('Oplaty.store.MobileEngine')
    }    
    //TODO - add data, formulas and/or methods to support your view
});
