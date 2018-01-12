Ext.define('Oplaty.components.main.cauldron.cauldrons.CauldronController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.cauldron',

    listen: {
        controller: {
            '*': {
                cauldronLoaded: 'cauldronLoaded',
                kindSelected: 'kindSelected'
            }
        }
    },  

    onSave: function () {
        var record = this.getViewModel().get('editCauldron');
        this.fireEvent('saveCauldron', record);
        this.getView().close();
    },

    onCancel: function () {
        this.getView().close();
    },

    onKindChoise: function () {
        var engineForm = Ext.create('Oplaty.components.main.cauldron.cauldrons.kind.KindTree',{        
            });         
    },    

    cauldronLoaded: function () {
        this.refreshKind();        
    },

    kindSelected: function (kind) {
        var cauldronRecord = this.getViewModel().get('editCauldron');
        cauldronRecord.set('kindId', kind.get('id'));
        this.refreshKind();
    },    

    refreshKind: function() {
        var kindStore = this.getKindStore(),
            cauldronRecord = this.getViewModel().get('editCauldron'),
            kind = kindStore.findRecord('id', cauldronRecord.get('kindId'));
        this.getViewModel().set('selectedKind', kind);
    },

    getKindStore: function () {        
        return Ext.getStore('CauldronKind');        
    }    
});
