Ext.define('Oplaty.components.main.rainwater.rainwaters.RainwaterListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.rainwaterList',

    listen: {
        controller: {
            '*': {
                saveRainwater: 'saveRainwater'
            }
        }
    },    

    onAddRainwater: function () {
        var me = this,
            newRainwater = Ext.create('Oplaty.components.main.rainwater.rainwaters.RainwaterModel', {            
            });
        this.showEditForm(newRainwater);
    },

    onEditRainwater: function () {
        var selectedRainwaters = this.getRainwaterGrid().getSelection();
        if (selectedRainwaters.length === 1) {
            this.showEditForm(selectedRainwaters[0].copy());
        } else {
            Ext.Msg.alert('Info', 'Należy zaznaczyć wiersz.');
        }
    },

    onDeleteRainwater: function () {
        var selectedRainwaters = this.getRainwaterGrid().getSelection();
        if (selectedRainwaters.length === 1) {
            Ext.Msg.confirm('Uwaga', 'Czy na pewno usunąć pojazd?', 'deleteRainwater', this);  
        } else {
            Ext.Msg.alert('Info', 'Należy zaznaczyć wiersz.');
        }
    },

    deleteRainwater: function (btn) {
        var store = this.getViewModel().getStore('rainwaterList'),
        selectedRainwaters = this.getRainwaterGrid().getSelection();
        if (btn === 'yes') {
            store.remove(selectedRainwaters[0]);
            this.getRainwaterGrid().reconfigure(store);
        }
    },

    onRowDblClick: function (grid, record) {
        this.showEditForm(record.copy());
    },

    showEditForm: function (rainwaterRecord) {
        var rainwaterForm = Ext.create('Oplaty.components.main.rainwater.rainwaters.Rainwater',{
            //    renderTo: 'rainwaterListId'
            }); 
        rainwaterForm.getViewModel().set('editRainwater', rainwaterRecord);            
    },

    saveRainwater: function(record) {
        var store = this.getViewModel().getStore('rainwaterList'),
        rainwater = record.data,
        findRainwater = store.findRecord('id', rainwater.id);
        if (findRainwater) {
            findRainwater.data = rainwater;
            record.commit();
        } else {
            rainwater.id = store.count() + 1;
            store.add(record);
            record.commit();
        }
        this.getRainwaterGrid().reconfigure(store);
    },

    getRainwaterGrid: function() {
        return this.getView().down('#idRainwaterGrid');
    }

});
