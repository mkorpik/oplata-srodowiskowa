Ext.define('Oplaty.components.main.department.DepartmentListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.departmentList',

    listen: {
        controller: {
            '*': {
                saveDepartment: 'saveDepartment'
            }
        }
    },    

    onAddDepartment: function () {
        var me = this,
            newDepartment = Ext.create('Oplaty.components.main.department.DepartmentModel', {            
            });
        this.showEditForm(newDepartment);
    },

    onEditDepartment: function () {
        var selectedCompanies = this.getDepartmentGrid().getSelection();
        if (selectedCompanies.length === 1) {
            this.showEditForm(selectedCompanies[0].copy());
        } else {
            Ext.Msg.alert('Info', 'Należy zaznaczyć wiersz.');
        }
    },

    onDeleteDepartment: function () {
        var selectedCompanies = this.getDepartmentGrid().getSelection();
        if (selectedCompanies.length === 1) {
            Ext.Msg.confirm('Uwaga', 'Czy na pewno usunąć firmę?', 'deleteDepartment', this);  
        } else {
            Ext.Msg.alert('Info', 'Należy zaznaczyć wiersz.');
        }
    },

    deleteDepartment: function (btn) {
        var store = this.getDepartmentStore(),
        selectedCompanies = this.getDepartmentGrid().getSelection();
        if (btn === 'yes') {
            store.remove(selectedCompanies[0]);
            this.getDepartmentGrid().reconfigure(store);
        }
    },

    onRowDblClick: function (grid, record) {
        this.showEditForm(record.copy());
    },

    showEditForm: function (departmentRecord) {
        var departmentForm = Ext.create('Oplaty.components.main.department.Department',{
            //    renderTo: 'departmentListId'
            }); 
        departmentForm.getViewModel().set('editDepartment', departmentRecord);            
    },

    saveDepartment: function(record) {
        var store = this.getDepartmentStore(),
        department = record.data,
        findDepartment = store.findRecord('id', department.id);
        if (findDepartment) {
            findDepartment.data = department;
            record.commit();
        } else {
            department.id = store.count() + 1;
            store.add(record);
            record.commit();
        }
        this.getDepartmentGrid().reconfigure(store);
    },

    getDepartmentGrid: function() {
        return this.getView().down('#idDepartmentGrid');
    },

    getDepartmentStore: function () {
        return this.getView().lookupViewModel().getStore('departmentList');
    }
});
