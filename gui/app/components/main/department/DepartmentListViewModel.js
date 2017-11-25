Ext.define('Oplaty.components.main.department.DepartmentListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.departmentList',

    requires: [

    ],

    data: {

    },

    stores: {
        departmentList: Ext.create('Oplaty.components.main.department.DepartmentStore')
    }
    
});
