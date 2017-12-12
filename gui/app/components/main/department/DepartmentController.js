Ext.define('Oplaty.components.main.department.DepartmentController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.department',

    listen: {
        controller: {
            '*': {
                departmentLoaded: 'departmentLoaded'
            }
        }
    }, 

    onSave: function () {
        var record = this.getViewModel().get('editDepartment');
        this.fireEvent('saveDepartment', record);
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

    departmentLoaded: function() {
        var vm = this.getViewModel(),
            department = vm.get('editDepartment');
        if (department.data.voivodshipId) {
           this.loadPoviatStore(department.data.voivodshipId);
        }
        if (department.data.poviatId) {
            this.loadCommuneStore(department.data.poviatId);
         }         
    }        

});
