Ext.define('Oplaty.components.main.cauldron.fueluse.FuelUseController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.cauldronFuelUse',

    listen: {
        controller: {
            '*': {
                cauldronFuelUseLoaded: 'fuelUseLoaded'
            }
        }
    }, 

    fuelUseLoaded: function () {
        this.refreshCauldron();
    },    

    refreshCauldron: function () {
        var cauldronStore = this.getCauldronStore(),
            fuelUseRecord = this.getViewModel().get('editCauldronFuelUse'),
            cauldronId = fuelUseRecord.get('cauldron');
            cauldron = null;

        if (cauldronId) {
            cauldron = cauldronStore.findRecord('id', Number(cauldronId.replace('/cauldrons/', '')));
            this.getViewModel().set('selectedCauldron', cauldron.get('id'));
        } else {
            this.getViewModel().set('selectedCauldron', null);
        }
        
//        this.filterFuelStore();
    },
    
    getCauldronStore: function () {
        return this.getView().lookupViewModel(true).getStore('cauldronList');
    },
    
    onSave: function () {
        var record = this.getViewModel().get('editCauldronFuelUse'),
            selectedCauldron = this.getViewModel().get('selectedCauldron');        
        record.set('cauldron', '/cauldrons/' + selectedCauldron);
        this.fireEvent('saveCauldronFuelUse', record);
        this.getView().close();
    },

    onCancel: function () {
        this.getView().close();
    }

});
