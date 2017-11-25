Ext.define('Oplaty.components.main.cauldron.fueluse.FuelUseListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.cauldronFuelUseList',

    listen: {
        controller: {
            '*': {
                saveCauldronFuelUse: 'saveFuelUse'
            }
        }
    },    

    onAddFuelUse: function () {
        var me = this,
            newFuelUse = Ext.create('Oplaty.components.main.cauldron.fueluse.FuelUseModel', {            
            });
        this.showEditForm(newFuelUse);
    },

    onEditFuelUse: function () {
        var selectedFuelUses = this.getFuelUseGrid().getSelection();
        if (selectedFuelUses.length === 1) {
            this.showEditForm(selectedFuelUses[0].copy());
        } else {
            Ext.Msg.alert('Info', 'Należy zaznaczyć wiersz.');
        }
    },

    onDeleteFuelUse: function () {
        var selectedFuelUses = this.getFuelUseGrid().getSelection();
        if (selectedFuelUses.length === 1) {
            Ext.Msg.confirm('Uwaga', 'Czy na pewno usunąć pojazd?', 'deleteFuelUse', this);  
        } else {
            Ext.Msg.alert('Info', 'Należy zaznaczyć wiersz.');
        }
    },

    deleteFuelUse: function (btn) {
        var store = this.getViewModel().getStore('cauldronFuelUseList'),
        selectedFuelUses = this.getFuelUseGrid().getSelection();
        if (btn === 'yes') {
            store.remove(selectedFuelUses[0]);
            this.getFuelUseGrid().reconfigure(store);
        }
    },

    onRowDblClick: function (grid, record) {
        this.showEditForm(record.copy());
    },

    showEditForm: function (cauldronFuelUseRecord) {
        var cauldronFuelUseForm = Ext.create('Oplaty.components.main.cauldron.fueluse.FuelUse',{
            //    renderTo: 'fuelUseListId'
            }); 
            cauldronFuelUseForm.getViewModel().set('editCauldronFuelUse', cauldronFuelUseRecord);            
    },

    saveFuelUse: function(record) {
        var store = this.getViewModel().getStore('cauldronFuelUseList'),
        cauldronFuelUse = record.data,
        findFuelUse = store.findRecord('id', cauldronFuelUse.id);
        if (findFuelUse) {
            findFuelUse.data = cauldronFuelUse;
            record.commit();
        } else {
            cauldronFuelUse.id = store.count() + 1;
            store.add(record);
            record.commit();
        }
        this.getFuelUseGrid().reconfigure(store);
    },

    getFuelUseGrid: function() {
        return this.getView().down('#idCauldronFuelUseGrid');
    }

});
