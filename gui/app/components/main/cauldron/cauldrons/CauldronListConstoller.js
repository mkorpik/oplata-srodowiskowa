Ext.define('Oplaty.components.main.cauldron.cauldrons.CauldronListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.cauldronList',

    listen: {
        controller: {
            '*': {
                saveCauldron: 'saveCauldron'
            }
        }
    },    

    onAddCauldron: function () {
        var me = this,
            newCauldron = Ext.create('Oplaty.components.main.cauldron.cauldrons.CauldronModel', {            
            });
        this.showEditForm(newCauldron);
    },

    onEditCauldron: function () {
        var selectedCauldrons = this.getCauldronGrid().getSelection();
        if (selectedCauldrons.length === 1) {
            this.showEditForm(selectedCauldrons[0].copy());
        } else {
            Ext.Msg.alert('Info', 'Należy zaznaczyć wiersz.');
        }
    },

    onDeleteCauldron: function () {
        var selectedCauldrons = this.getCauldronGrid().getSelection();
        if (selectedCauldrons.length === 1) {
            Ext.Msg.confirm('Uwaga', 'Czy na pewno usunąć pojazd?', 'deleteCauldron', this);  
        } else {
            Ext.Msg.alert('Info', 'Należy zaznaczyć wiersz.');
        }
    },

    deleteCauldron: function (btn) {
        var store = this.getViewModel().getStore('cauldronList'),
        selectedCauldrons = this.getCauldronGrid().getSelection();
        if (btn === 'yes') {
            store.remove(selectedCauldrons[0]);
            this.getCauldronGrid().reconfigure(store);
        }
    },

    onRowDblClick: function (grid, record) {
        this.showEditForm(record.copy());
    },

    showEditForm: function (cauldronRecord) {
        var cauldronForm = Ext.create('Oplaty.components.main.cauldron.cauldrons.Cauldron',{
            //    renderTo: 'cauldronListId'
            }); 
        cauldronForm.getViewModel().set('editCauldron', cauldronRecord);            
    },

    saveCauldron: function(record) {
        var store = this.getViewModel().getStore('cauldronList'),
        cauldron = record.data,
        findCauldron = store.findRecord('id', cauldron.id);
        if (findCauldron) {
            findCauldron.data = cauldron;
            record.commit();
        } else {
            cauldron.id = store.count() + 1;
            store.add(record);
            record.commit();
        }
        this.getCauldronGrid().reconfigure(store);
    },

    getCauldronGrid: function() {
        return this.getView().down('#idCauldronGrid');
    }

});
