Ext.define('Oplaty.components.main.department.DepartmentController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.department',

    onSave: function () {
        var record = this.getViewModel().get('editDepartment');
        this.fireEvent('saveDepartment', record);
        this.getView().close();
    },

    onCancel: function () {
        this.getView().close();
    }

});
