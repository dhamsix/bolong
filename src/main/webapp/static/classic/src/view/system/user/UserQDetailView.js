/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.user.UserQDetailView', {
    extend: 'Ext.panel.Panel',
    xtype: 'userdetailview',

    scrollable: true,
    requires: [
        'app.view.system.user.UserModel',
        'app.view.system.user.UserController'
    ],

    controller: 'usercontroller',
    viewModel: 'usermodel',
    listeners: {
        afterrender: function (_this) {
            var data = {};
            _this.updateDetail(data);
        }
    },
    tpl: Ext.create('Ext.XTemplate', [
        '<div class="wrapper_div">' +
        '<div><span>用户ID</span><span>{id}</span></div>' +
        '<div><span>员工姓名</span><span>{name}</span></div>' +
        '<div><span>性别</span><span>{sex}</span></div>' +
        '<div><span>手机号</span><span>{phone}</span></div>' +
        '<div><span>员工帐号</span><span>{account}</span></div>' +
        '<div><span>用户照片</span><span>{img}</span></div>' +
        '<div><span>联系地址</span><span>{address}</span></div>' +
        '<div><span>备注</span><span>{remark}</span></div>' +
        '</div>'
    ]),
    updateDetail: function (data) {
        this.tpl.overwrite(this.body, data);
    },

    bind: {
        html: '{loremIpsum}'
    }
});
