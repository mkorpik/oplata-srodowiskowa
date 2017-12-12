Ext.define('Oplaty.components.main.department.DepartmentViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.department',

    data: {
        editDepartment: null
    },

    stores: {
        voivodshipList: Ext.create('Oplaty.store.Voivodship'),
        poviatList: Ext.create('Oplaty.store.Poviat'),  
        communeList: Ext.create('Oplaty.store.Commune')
    }
    
});
