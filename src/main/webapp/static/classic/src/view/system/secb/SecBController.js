/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.system.secb.SecBController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.secbcontroller',

    itemclick: function (this_, record_) {

    },

    btnAdd: function(){
        Ext.create('app.view.system.secb.SecBAddView',{
        }).show(Ext.get('secb_add_id'));
    },

    btnRefresh: function () {
        Ext.getCmp('secbgridview_id').getStore().load();
    },

    btnFind: function(){
        Ext.getCmp('secbgridview_id').getStore().load({
            params: {
                rolename: Ext.getCmp('query_secb_rolename_id').getValue(),
                username: Ext.getCmp('query_secb_username_id').getValue()
            }
        });
    },

    btnReset: function(_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('secbgridview_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('secbqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'secbqueryview',
                    id: 'secbqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('secbqueryview_id'));
        }
    },

    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('secbgridview_id').getSelectionModel();
                var rows = sm.getSelection();

                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var roleid = row.get('roleid');
                        var userid = row.get('userid');
                        Ext.Ajax.request({
                            url: '/bolong/deleteuserroles',
                            params: {
                                "roleid": roleid,
                                "userid": userid
                            },
                            waitMsg: '正在删除数据...',
                            success: function () {
                                Ext.getCmp('secbgridview_id').getStore().load();
                                Ext.Msg.alert("成功", "数据删除成功!");
                            },
                            failure: function () {
                                Ext.Msg.alert("失败", "数据删除失败!");
                            }
                        });
                    }
                } else {
                    Ext.Msg.alert('提示', '请选择要删除的记录');
                }
            }
        });
    }
});
