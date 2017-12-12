Ext.define('Oplaty.components.main.company.CompanyController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.company',

    listen: {
        controller: {
            '*': {
                companyLoaded: 'companyLoaded'
            }
        }
    },  

    onSave: function () {
        var record = this.getViewModel().get('editCompany');
        this.fireEvent('saveCompany', record);
        this.getView().close();
    },

    onCancel: function () {
        this.getView().close();
    },

    onVoivodshipChange: function (combo, record) {
        var voivodshipId = record.get('id');
        this.loadPoviatStore(voivodshipId);
    },

    loadPoviatStore: function(voivodshipId) {
        var vm = this.getViewModel(),
            store = vm.getStore('poviatList');
        store.proxy.url = OplatyConstants.API_PATH + 'adm_poviats?voivodship=' + voivodshipId;
        store.reload();    
    },

    onPoviatChange: function (combo, record) {
        var poviatId = record.get('id');
        this.loadCommuneStore(poviatId);
    },

    loadCommuneStore: function (poviatId) {
        var vm = this.getViewModel(),
            store = vm.getStore('communeList');        
        store.proxy.url = OplatyConstants.API_PATH + 'adm_communes?poviat=' + poviatId;
        store.reload();    
    },

    companyLoaded: function() {
        var vm = this.getViewModel(),
            company = vm.get('editCompany');
        if (company.data.voivodshipId) {
           this.loadPoviatStore(company.data.voivodshipId);
        }
        if (company.data.poviatId) {
            this.loadCommuneStore(company.data.poviatId);
         }         
    }    
});
