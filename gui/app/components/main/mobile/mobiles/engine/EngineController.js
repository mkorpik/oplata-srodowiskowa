Ext.define('Oplaty.components.main.mobile.mobiles.engine.EngineController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.engine',

    onSave: function () {
        var selection = this.getEngineTree().getSelection();
        if (selection && selection[0].isLeaf()){
            this.fireEvent('engineSelected', selection[0]);
            this.getView().close();    
        } else {
            Ext.Msg.alert('Info', 'Należy wybrać rodzaj silnika.');            
        }
    },

    getEngineTree: function() {
        return this.getView().down('#idEngineTree');
    }
});
