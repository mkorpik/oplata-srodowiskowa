Ext.define('Oplaty.components.main.company.CompanyController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.company',

    onSave: function () {
        var record = this.getViewModel().get('editCompany');
        this.fireEvent('saveCompany', record);
        this.getView().close();
    },

    onCancel: function () {
        this.getView().close();
    },

    onVoivodshipChange: function (combo, record) {
        var vm = this.getViewModel(),
            store = vm.getStore('poviatList'),
            voivodshipId = record.get('id');
        store.proxy.url = 'http://api.oplaty-gui.pl/app_dev.php/adm_poviats?voivodship=' + voivodshipId;
        store.reload();    
    },

    onPoviatChange: function (combo, record) {
        var vm = this.getViewModel(),
            store = vm.getStore('communeList'),
            poviatId = record.get('id');
        store.proxy.url = 'http://api.oplaty-gui.pl/app_dev.php/adm_communes?poviat=' + poviatId;
        store.reload();    
    }
    
});
