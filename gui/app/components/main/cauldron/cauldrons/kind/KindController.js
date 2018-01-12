Ext.define('Oplaty.components.main.cauldron.cauldrons.kind.KindController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.kind',

    onSave: function () {
        var selection = this.getKindTree().getSelection();
        if (selection && selection[0].isLeaf()){
            this.fireEvent('kindSelected', selection[0]);
            this.getView().close();    
        } else {
            Ext.Msg.alert('Info', 'Należy wybrać rodzaj kotła.');            
        }
    },

    getKindTree: function() {
        return this.getView().down('#idKindTree');
    }
});
