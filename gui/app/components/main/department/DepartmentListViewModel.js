Ext.define('Oplaty.components.main.department.DepartmentListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.departmentList',

    requires: [
        'Oplaty.components.main.department.DepartmentStore'
    ],

    data: {

    },

    stores: {
        departmentList: Ext.create('Oplaty.components.main.department.DepartmentStore')
    }
    
});
