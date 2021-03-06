/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.entermt.innerenter.InnerEnterView', {
    extend: 'Ext.window.Window',
    xtype: 'innerenterview',
    alias: 'innerenterview',
    requires: [
        'app.view.maintain.entermt.innerenter.InnerEnterController',
        'app.view.maintain.entermt.innerenter.InnerEnterGridView',
        'app.view.maintain.entermt.innerenter.InnerEnterQueryView'
    ],
    controller: 'innerentercontroller',
    width: 960,
    title: '已入库企业',
    constrain: true,
    closable: true,
    modal: true,
    autoDestroy: true,
    closeAction: 'destroy',
    layout: 'border',

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        border: false,
        items: [{
            text: '删除',
            handler: 'delete'
        }, {
            text: '刷新',
            handler: 'btnClick'
        }]
    }],

    items: [{
        xtype: 'innerenterqueryview',
        id: 'innerenterqueryview_id',
        margin: '1 0 0 0',
        region: 'north'
    }, {
        xtype: 'innerentergridview',
        id: 'innerentergridview_id',
        margin: '1 1 0 0',
        region: 'center',
        listeners: {
            afterrender: function (_this) {
                _this.getStore().load();
            }
        }
    }]
});
