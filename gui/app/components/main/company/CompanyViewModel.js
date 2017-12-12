Ext.define('Oplaty.components.main.company.CompanyViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.company',

    data: {
        editCompany: null
    },

    stores: {
        voivodshipList: Ext.create('Oplaty.store.Voivodship'),
        poviatList: Ext.create('Oplaty.store.Poviat'),  
        communeList: Ext.create('Oplaty.store.Commune')
    }
});
