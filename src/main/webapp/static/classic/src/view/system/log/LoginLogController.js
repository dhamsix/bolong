/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app.view.system.log.LoginLogController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.loginlog',

    onAfterrender: function (self) {
        self.getStore().load();
    },

    onClick: function(){
        Ext.getCmp('loginlog_id').getStore().load()
    }
});
