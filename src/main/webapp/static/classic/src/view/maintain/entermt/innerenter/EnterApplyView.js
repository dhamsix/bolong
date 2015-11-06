/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.entermt.innerenter.EnterApplyView', {
    requires: [
        'app.xtemplate.corp_apply',
        'app.xtemplate.select_zjh'
    ]
});

//var enterapplyview_new = Ext.create('Ext.panel.Panel', {
//    id: 'applyf_panel_id',
//    bodyPadding: 10,
//    bodyStyle: 'overflow-y:scroll',
//    listeners: {
//        afterrender: function () {
//            corp_apply_con_tpl.append('apply_view_corp', {});
//        }
//    },
//    frame: false,
//    border: false,
//    autoScroll: true,
//    layout: {
//        type: 'vbox',
//        align: 'stretch',
//        pack: 'start'
//    },
//
//    items: [
//        {
//            xtype: 'panel',
//            border: false,
//            id: 'corp_panel',
//            html: '<div id="apply_view_corp"></div>'
//        }
//    ]
//});

var win_enterapplyview = Ext.create('Ext.window.Window', {
    modal: true,
    title: '新增企业',
    border: false,
    maximized: true,
    //autoDestroy: true,
    //closeAction: 'destroy',
    layout: 'fit',
    items: [{
        id: 'applyf_panel_id',
        bodyPadding: 10,
        bodyStyle: 'overflow-y:scroll',
        listeners: {
            afterrender: function () {
                new Ext.XTemplate(
                    '<div class="wrap_center">',
                    '<h2>企业信息</h2>',
                    '<form id="apply_form">',
                    '<table class="enter_table" id="table_apply_base">',
                    '<div class="wrap_center">',
                    '<tr>',
                    '<th class="table_header" colspan="4">基本信息</th>',
                    '</tr>',
                    '<tr>',
                    '<th>营业执照号码<span style="color: red">*</span></th>',
                    '<td><input id="buslicno"  name="buslicno"  type="text"  /></td>',
                    '<th style="min-width: 12em">企业名称</th>',
                    '<td><input id="name" name="name"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>单位类别</th>',
                    '<td><input id="unit" name="unit"  type="text" /></td>',
                    '<th>法定代表人</th>',
                    '<td><input id="legrep" name="legrep"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>地域</th>',
                    '<td>',
                    '<select style="width: 70px" class="select" name="province"  id="province">',
                    '<option>甘肃</option>',
                    '</select>',
                    '<select onchange="areaCh(this.value)" style="width: 70px"  class="select" name="city" id="city">',
                    '<option>兰州</option>',
                    '<option>白银市</option>',
                    '<option>定西市</option>',
                    '<option>甘南州</option>',
                    '<option>临夏州</option>',
                    '<option>平凉市</option>',
                    '<option>陇南市</option>',
                    '<option>金昌市</option>',
                    '<option>酒泉市</option>',
                    '<option>嘉峪关市</option>',
                    '<option>庆阳市</option>',
                    '<option>天水市</option>',
                    '<option>武威市</option>',
                    '<option>张掖市</option>',
                    '</select>',
                    '<select style="width: 70px"  class="select" name="county" id="country">',
                    '<option>城关区</option>',
                    '<option>七里河</option>',
                    '<option>西固区</option>',
                    '<option>安宁区</option>',
                    '<option>红古区</option>',
                    '<option>永登县</option>',
                    '<option>皋兰县</option>',
                    '<option>榆中县</option>',
                    '</select>',
                    '</td>',
                    '<th>公司简称</th>',
                    '<td><input id="nos" name="nos"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>邮政编码</th>',
                    '<td><input id="postal" name="postal"  type="text" /></td>',
                    '<th>企业性质</th>',
                    '<td><input id="nature" name="nature"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>注册资本（万元）</th>',
                    '<td><input id="regcap" name="regcap"  type="text" /></td>',
                    '<th>注册日期</th>',
                    '<td><input id="regdt" name="regdt"  type="date" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>营业期限自</th>',
                    '<td><input id="bustermfdt" name="bustermfdt"  type="date" /></td>',
                    '<th>营业期限至</th>',
                    '<td><input id="bustremtdt" name="bustremtdt"  type="date" /></td>',
                    '</tr>',
                    '<tr>' +
                    '<th>挂牌区域</th>' +
                    '<td><input id="list_area" name="list_area"  type="text" /></td>' +
                    '<th>挂牌日期</th>' +
                    '<td><input id="listdt" name="listdt"  type="date" /></td>' +
                    '</tr>' +
                    '<tr>',
                    '<th>挂牌代码</th>' +
                    '<td><input id="listcode" name="listcode"  type="text" /></td>' +
                    '<th>挂牌价格 - 元/元出资(股)</th>' +
                    '<td><input id="listprice" name="listprice"  type="text" /></td>' +
                    '</tr>' +

                    '<tr>' +
                    '<th>企业微信号</th>',
                    '<td><input id="webchat" name="webchat"  type="text" /></td>' +
                    '<th>推荐单位</th>' +
                    '<td><input id="channels" name="channels"  type="text" /></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>登记机关</th>' +
                    '<td><input id="regist_organ" name="regist_organ"  type="text" /></td>' +

                    '<th>员工人数</th>' +
                    '<td><input id="staffnum" name="staffnum"  type="text" /></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>注册地址</th>' +
                    '<td colspan="3"><input id="regaddr" name="regaddr"  type="text" /></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>办公地址</th>' +
                    '<td colspan="3"><input id="offaddr" name="offaddr"  type="text" /></td>' +
                    '</tr>' +

                    '<tr>',
                    '<th>经营范围</th>' +
                    '<td colspan="3"><textarea style="background-color: white" id="scope" name="scope"  type="text"></textarea></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>主营业务</th>' +
                    '<td colspan="3"><textarea style="background-color: white"  id="mbus" name="mbus"  type="text"></textarea></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>企业简介</th>' +
                    '<td colspan="3"><textarea style="background-color: white"  id="eprofile" name="eprofile"  type="text"></textarea></td>' +
                    '</tr>' +
                    '<tr>',
                    '<th>备注</th>',
                    '<td colspan="3"><textarea style="background-color: white"  id="remark" name="remark"  type="text"></textarea></td>',
                    '</tr>',
                    //'<tr>',
                    //'<th>企业图文信息</th>',
                    //'<td colspan="3"><button type="button" onclick="corp_img_upload()">上传图片</button></td>',
                    //'</tr>',
                    '</table>',

                    '<div style="overflow-x: auto; overflow-y: auto;  width:80%;">',
                    '<input type="button" onClick="addRow_edit();" style="font-size:16px;" value="+"/>',
                    '<div contenteditable="true">',
                    '<table class="enter_table_sh" id="table_corp_sh">',
                    '<tr>',
                    '<th class="table_header" colspan="16">股东名册  </th> ',
                    '</tr>',
                    '<tr>',
                    '<th><div contenteditable="false">股东类型</div></th>',
                    '<th><div contenteditable="false">股东</div></th>',
                    '<th><div contenteditable="false">证件类型</div></th>',
                    '<th><div contenteditable="false">证件号码</div></th>',
                    '<th><div contenteditable="false">持股数量</div></th>',
                    '<th><div contenteditable="false">流通数量</div></th>',
                    '<th><div contenteditable="false">冻结数量</div></th>',
                    '<th><div contenteditable="false">详情</div></th>',
                    '<th><div contenteditable="false">职务</div></th>',
                    '<th><div contenteditable="false">电话</div></th>',
                    '<th><div contenteditable="false">传真</div></th>',
                    '<th><div contenteditable="false">E-mail</div></th>',
                    '<th><div contenteditable="false">QQ</div></th>',
                    '<th><div contenteditable="false">个人微信号</div></th>',
                    '<th><div contenteditable="false">固定电话</div></th>',
                    '<th><div contenteditable="false">删除</div></th>',
                    '</tr>',
                    '</table>',
                    '</div>',
                    '</div>',

                    '<table class="enter_table" id="table_apply_link">',
                    '<tr>',
                    '<th class="table_header" colspan="4">法定代表人基本信息</th>',
                    '</tr>',
                    '<tr>',
                    '<th>姓名</th>',
                    '<td><input id="cont_name" name="cont_name"  type="text" /></td>',
                    '<th>证件类型</th>',
                    '<td><input id="cont_edoctype" name="cont_edoctype"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>职务</th>',
                    '<td><input id="cont_psotion" name="cont_psotion"  type="text" /></td>',
                    '<th>证件号码</th>',
                    '<td><input id="cont_edocnum" name="cont_edocnum"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>手机</th>',
                    '<td><input id="cont_ephone" name="cont_ephone"  type="text"  onchange="cont_ephone_check();"/></td>',
                    '<th>传真</th>',
                    '<td><input id="cont_efax" name="cont_efax"  type="text"  onchange="cont_efax_check();"/></td>',
                    '</tr>',
                    '<tr>',
                    '<th>E-mail</th>',
                    '<td><input id="cont_eemail" name="cont_eemail"  type="text"  onchange="cont_eemail_check_apply();"/></td>',
                    '<th>QQ</th>',
                    '<td><input id="cont_eqq" name="cont_eqq"  type="text"  onchange="cont_eqq_check_apply();"/></td>',
                    '</tr>',
                    '<tr>' +
                    '<th>微信号</th>' +
                    '<td><input id="cont_webchat" name="cont_webchat"  type="text" /></td>' +
                    '<th>固话</th>',
                    '<td><input id="cont_tel" name="cont_tel"  type="text"  onchange="cont_tel_check();" /></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>备注</th>' +
                    '<td colspan="3"><textarea  style="background-color: white"  id="cont_bz" name="cont_bz"  type="text"></textarea></td>' +
                    '</tr>' +
                    '</table>' +

                    '<table class="enter_table" id="table_apply_acount">',
                    '<tr>',
                    '<th class="table_header" colspan="4">国民经济行业分类信息</th>',
                    '</tr>',
                    '<tr>',
                    '<th>行业一级分类</th>',
                    '<td>' +
                    '<select onchange="industry1(this.value)" style="width: 230px"   class="select" name="indclass1" id="indclass1">',
                    '<option>农、林、牧、渔业</option>',
                    '<option>采矿业</option>',
                    '<option>制造业</option>',
                    '<option>电力、燃气及水的生产和供应业</option>',
                    '<option>建筑业</option>',
                    '<option>交通运输、仓储和邮政业</option>',
                    '<option>信息传输、计算机服务和软件业</option>',
                    '<option>批发和零售业</option>',
                    '<option>住宿和餐饮业</option>',
                    '<option>金融业</option>',
                    '<option>房地产业</option>',
                    '<option>租赁和商务服务业</option>',
                    '<option>科学研究、技术服务和地质勘查业</option>',
                    '<option>水利、环境和公共设施管理业</option>',
                    '<option>居民服务和其他服务业</option>',
                    '<option>教育</option>',
                    '<option>卫生、社会保障和社会福利业</option>',
                    '<option>文化、体育和娱乐业</option>',
                    '<option>公共管理和社会组织</option>',
                    '<option>国际组织</option>',
                    ' </select>',
                    '</td>',
                    '<th>行业二级分类</th>',
                    '<td>',
                    '<select  onchange="industry2(this.value)" style="width: 230px" class="select" name="indclass2" id="indclass2">',
                    '<option>{indclass2}</option>',
                    ' </select>',
                    '</td>',
                    '</tr>',
                    '<tr>',
                    '<th>行业三级分类</th>',
                    '<td>',
                    '<select  onchange="industry3(this.value)"style="width: 230px" class="select" name="indclass3" id="indclass3">',
                    '<option>{indclass3}</option>',
                    ' </select>',
                    '</td>',
                    '<th>行业四级分类</th>',
                    '<td>',
                    '<select style="width: 230px" class="select" name="indclass4" id="indclass4">',
                    '<option>{indclass4}</option>',
                    ' </select>',
                    '</td>',
                    '</tr>',
                    '</table>',
                    '<table class="enter_table" id="table_apply_csrc_type">',
                    '<tr>',
                    '<th class="table_header" colspan="4">证监会行业分类信息</th>',
                    '</tr>',
                    '<tr>',
                    '<th>证监会行业一级分类</th>',
                    '<td>    ' +
                    '<select onchange="areaZjh(this.value)" style="width: 230px" class="select" name="csrc_type1" id="csrc_type1">',
                    '<option>农、林、牧、渔业</option>',
                    '<option>采矿业</option>',
                    '<option>制造业</option>',
                    '<option>电力、热力、燃气及水生产和供应业</option>',
                    '<option>建筑业</option>',
                    '<option>批发和零售业</option>',
                    '<option>交通运输、仓储和邮政业</option>',
                    '<option>住宿和餐饮业</option>',
                    '<option>信息传输、软件和信息技术服务业</option> ',
                    '<option>金融业</option>',
                    '<option>房地产业</option>',
                    '<option>租赁和商务服务业</option>',
                    '<option>科学研究和技术服务业</option>',
                    '<option>水利、环境和公共设施管理业</option>',
                    '<option>居民服务、修理和其他服务业</option>',
                    '<option>教育</option>',
                    '<option>卫生和社会工作</option>',
                    '<option>文化、体育和娱乐业</option>',
                    '<option>综合</option>',
                    '</select>',
                    '</td>',
                    '<th>证监会行业二级分类</th>',
                    '<td>',
                    '<select  style="width: 230px" class="select" name="csrc_type2" id="csrc_type2">',
                    '</select>',
                    '</td>',
                    '</tr>',
                    '</table>',


                    '<table  class="enter_table" id="table_apply_ocompay">',
                    '<tr>',
                    '<th class="table_header" colspan="4">企业最近一次被关注信息</th>',
                    '</tr>',
                    '<tr>',
                    '<th>更新日期</th>',
                    '<td><input id="mai_changer_dt" name="mai_changer_dt"  type="date" /></td>',
                    '<th>更新人</th>',
                    '<td><input id="mai_changer_id" name="mai_changer_id"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>更新单位</th>',
                    '<td><input id="mai_changer_dept" name="mai_changer_dept"  type="text" /></td>',
                    '<th>推荐日期</th>',
                    '<td><input id="mai_recomdt" name="mai_recomdt"  type="date" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>托管状态</th>',
                    '<td><input id="mai_trusteeship" name="mai_trusteeship"  type="text" /></td>',
                    '<th>挂牌状态</th>',
                    '<td><input id="mai_listst" name="mai_listst"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>企业等级</th>',
                    '<td><input id="mai_eclass" name="mai_eclass"  type="text" /></td>',
                    '<th>企业维护状态</th>',
                    '<td><input id="mai_maintain" name="mai_maintain"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>所属后备库</th>',
                    '<td><input id="mai_reserve" name="mai_reserve"  type="text" /></td>',
                    '<th>企业接待人</th>',
                    '<td><input id="mai_emaint" name="mai_emaint"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>部门</th>',
                    '<td><input id="mai_dept" name="mai_dept"  type="text" /></td>',
                    '<th>职务</th>',
                    '<td><input id="mai_post" name="mai_post"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>固定电话</th>',
                    '<td><input id="mai_tel" name="mai_tel"  type="text"   onchange="mai_tel_check();"/></td>',
                    '<th>手机号码</th>',
                    '<td><input id="mai_phone" name="mai_phone"  type="text"   onchange="mai_phone_check();"/></td>',
                    '</tr>',
                    '<tr>',
                    '<th>传真</th>',
                    '<td><input id="mai_fax" name="mai_fax"  type="text"  onchange="mai_fax_check();"/></td>',
                    '<th>E-mail</th>',
                    '<td><input id="mai_email" name="mai_email"  type="text"    onchange="mai_email_check_apply();"/></td>',
                    '</tr>',
                    '<tr>',
                    '<th>QQ</th>',
                    '<td><input id="mai_qq" name="mai_qq"  type="text"  onchange="mai_qq_check_apply();"/></td>',
                    '<th>微信号</th>',
                    '<td><input id="mai_webchat" name="mai_webchat"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>备注</th>',
                    '<td colspan="3"><textarea  style="background-color: white"  id="mai_bz" name="mai_bz"  type="text" ></textarea></td>' +
                    '</tr>',
                    '</table>',

                    '<table class="enter_table" id="table_apply_assets_finance">',
                    '<tr>',
                    '<th class="table_header" colspan="6">企业财务信息</th>',
                    '</tr>',
                    '<tr>',
                    '<th style="min-width: 14em">时间始</th>',
                    '<td colspan="2"><input id="start_time" name="start_time"  type="date" /></td>',
                    '<th style="min-width: 14em">时间至</th>',
                    '<td colspan="2"><input id="end_time" name="end_time"  type="date" /></td>',

                    '<tr>',
                    '<th style="background-color: #9ABCE6;">资产</th>',
                    '<th style="background-color: #9ABCE6;">年初余额(元)</th>',
                    '<th style="background-color: #9ABCE6;">期末余额(元)</th>',
                    '<th style="background-color: #9ABCE6;">负债和所有者权益</th>',
                    '<th style="background-color: #9ABCE6;">年初余额(元)</th>',
                    '<th style="background-color: #9ABCE6;">期末余额(元)</th>',
                    '</tr>',

                    '<tr>',
                    '<th colspan="3" style="background-color: #9ABCE6;text-align: center">流动资产：</th>',
                    '<th colspan="3" style="background-color: #9ABCE6;text-align: center">流动负债：（元）</th>',
                    '</tr>',

                    '<tr>',
                    '<th>货币资金</th>',
                    '<td><input id="st_money_fund" name="st_money_fund"  type="text" onkeypress="keyPress()"/></td>',
                    '<td><input id="end_money_fund" name="end_money_fund"  type="text"  onkeypress="keyPress()"/></td>',
                    '<th>短期借款</th>',
                    '<td><input id="st_short_borrow" name="st_short_borrow"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_short_borrow" name="end_short_borrow"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>交易性金融资产</th>',
                    '<td><input id="st_jyxjr_assets" name="st_jyxjr_assets"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_jyxjr_assets" name="end_jyxjr_assets"  type="text"  onkeypress="keyPress()"/></td>',
                    '<th>交易性金融负债</th>',
                    '<td><input id="st_jyx_finance_fz" name="st_jyx_finance_fz"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_jyx_finance_fz" name="end_jyx_finance_fz"  type="text"  onkeypress="keyPress()"/></td>',
                    '</tr>',
                    '<tr>',
                    '<th>应收票据</th>',
                    '<td><input id="st_ys_bill" name="st_ys_bill"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_ys_bill" name="end_ys_bill"  type="text"  onkeypress="keyPress()"/></td>',
                    '<th>应付票据</th>',
                    '<td><input id="st_yf_bill" name="st_yf_bill"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_yf_bill" name="end_yf_bill"  type="text"  onkeypress="keyPress()"/></td>',
                    '</tr>',
                    '<tr>',
                    '<th>应收账款</th>',
                    '<td><input id="st_ys_account" name="st_ys_account"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_ys_account" name="end_ys_account"  type="text"  onkeypress="keyPress()"/></td>',
                    '<th>应付账款</th>',
                    '<td><input id="st_yf_account" name="st_yf_account"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_yf_account" name="end_yf_account"  type="text"  onkeypress="keyPress()"/></td>',
                    '</tr>',
                    '<tr>',
                    '<th>预付款项</th>',
                    '<td><input id="st_yf_money" name="st_yf_money"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_yf_money" name="end_yf_money"  type="text"  onkeypress="keyPress()"/></td>',
                    '<th>预收款项</th>',
                    '<td><input id="st_ys_money" name="st_ys_money"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_ys_money" name="end_ys_money"  type="text"  onkeypress="keyPress()"/></td>',
                    '</tr>',
                    '<tr>',
                    '<th>应收利息</th>',
                    '<td><input id="st_ys_interest" name="st_ys_interest"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_ys_interest" name="end_ys_interest"  type="text"  onkeypress="keyPress()"/></td>',
                    '<th>应付职工薪酬</th>',
                    '<td><input id="st_yf_staff_pay" name="st_yf_staff_pay"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_yf_staff_pay" name="end_yf_staff_pay"  type="text"  onkeypress="keyPress()"/></td>',
                    '</tr>',
                    '<tr>',
                    '<th>应收股利</th>',
                    '<td><input id="st_ys_dividends" name="st_ys_dividends"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_ys_dividends" name="end_ys_dividends"  type="text"  onkeypress="keyPress()"/></td>',
                    '<th>应交税费</th>',
                    '<td><input id="st_yj_tax" name="st_yj_tax"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_yj_tax" name="end_yj_tax"  type="text"  onkeypress="keyPress()"/></td>',
                    '</tr>',
                    '<tr>',
                    '<th>其他应收款</th>',
                    '<td><input id="st_other_ys_money" name="st_other_ys_money"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_other_ys_money" name="end_other_ys_money"  type="text"  onkeypress="keyPress()"/></td>',
                    '<th>应付利息</th>',
                    '<td><input id="st_yf_interest" name="st_yf_interest"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_yf_interest" name="end_yf_interest"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>存货</th>',
                    '<td><input id="st_inventory" name="st_inventory"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_inventory" name="end_inventory"  type="text" onkeypress="keyPress()" /></td>',
                    '<th>应付股利</th>',
                    '<td><input id="st_yf_dividends" name="st_yf_dividends"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_yf_dividends" name="end_yf_dividends"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>一年内到期非流动资产</th>',
                    '<td><input id="st_ynndq_no_assets" name="st_ynndq_no_assets"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_ynndq_no_assets" name="end_ynndq_no_assets"  type="text" onkeypress="keyPress()" /></td>',
                    '<th>其他应付款</th>',
                    '<td><input id="st_other_yf_money" name="st_other_yf_money"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_other_yf_money" name="end_other_yf_money"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>其他流动资产</th>',
                    '<td><input id="st_other_assets" name="st_other_assets"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_other_assets" name="end_other_assets"  type="text" onkeypress="keyPress()" /></td>',
                    '<th>一年内到期的非流动负债</th>',
                    '<td><input id="st_ynndq_no_fz" name="st_ynndq_no_fz"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_ynndq_no_fz" name="end_ynndq_no_fz"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th></th>',
                    '<th></th>',
                    '<th></th>',
                    '<th>其他流动负债</th>',
                    '<td><input id="st_other_fz" name="st_other_fz"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_other_fz" name="end_other_fz"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>流动资产合计</th>',
                    '<td><input id="st_hj_assets" name="st_hj_assets"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_hj_assets" name="end_hj_assets"  type="text" onkeypress="keyPress()" /></td>',
                    '<th>流动负债合计</th>',
                    '<td><input id="st_hj_fz" name="st_hj_fz"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_hj_fz" name="end_hj_fz"  type="text"  onkeypress="keyPress()"/></td>',
                    '</tr>',

                    '<tr>',
                    '<th colspan="3" style="background-color: #9ABCE6;text-align: center">非流动资产：</th>',
                    '<th colspan="3" style="background-color: #9ABCE6;text-align: center">非流动负债：</th>',
                    '</tr>',

                    '<tr>',
                    '<th>可供出售金融资产</th>',
                    '<td><input id="st_kgcs_assets" name="st_kgcs_assets"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_kgcs_assets" name="end_kgcs_assets"  type="text"  onkeypress="keyPress()"/></td>',
                    '<th>长期借款</th>',
                    '<td><input id="st_long_borrow" name="st_long_borrow"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_long_borrow" name="end_long_borrow"  type="text"  onkeypress="keyPress()"/></td>',
                    '</tr>',
                    '<tr>',
                    '<th>持有至到期投资</th>',
                    '<td><input id="st_cyzdq_investment" name="st_cyzdq_investment"  type="text"  onkeypress="keyPress()" /></td>',
                    '<td><input id="end_cyzdq_investment" name="end_cyzdq_investment"  type="text"  onkeypress="keyPress()"/></td>',
                    '<th>应付债券</th>',
                    '<td><input id="st_yf_bond" name="st_yf_bond"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_yf_bond" name="end_yf_bond"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>长期应收款</th>',
                    '<td><input id="st_long_ys_money" name="st_long_ys_money"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_long_ys_money" name="end_long_ys_money"  type="text" onkeypress="keyPress()" /></td>',
                    '<th>长期应付款</th>',
                    '<td><input id="st_long_yf_money" name="st_long_yf_money"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_long_yf_money" name="end_long_yf_money"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>长期股权投资</th>',
                    '<td><input id="st_long_gq_investment" name="st_long_gq_investment"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_long_gq_investment" name="end_long_gq_investment"  type="text" onkeypress="keyPress()" /></td>',
                    '<th>专项应付款</th>',
                    '<td><input id="st_zx_yf_money" name="st_zx_yf_money"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_zx_yf_money" name="end_zx_yf_money"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>投资性房地产</th>',
                    '<td><input id="st_invest_house" name="st_invest_house"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_invest_house" name="end_invest_house"  type="text" onkeypress="keyPress()" /></td>',
                    '<th>预计负债</th>',
                    '<td><input id="st_yj_fz" name="st_yj_fz"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_yj_fz" name="end_yj_fz"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>固定资产</th>',
                    '<td><input id="st_gd_assets" name="st_gd_assets"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_gd_assets" name="end_gd_assets"  type="text" onkeypress="keyPress()" /></td>',
                    '<th>递延所得税负债</th>',
                    '<td><input id="st_dysds_fz" name="st_dysds_fz"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_dysds_fz" name="end_dysds_fz"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>减：累计折旧</th>',
                    '<td><input id="st_accu_deprec" name="st_accu_deprec"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_accu_deprec" name="end_accu_deprec"  type="text" onkeypress="keyPress()" /></td>',
                    '<th>其他非流动负债</th>',
                    '<td><input id="st_other_no_fz" name="st_other_no_fz"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_other_no_fz" name="end_other_no_fz"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>固定资产净值</th>',
                    '<td><input id="st_gd_assets_jz" name="st_gd_assets_jz"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_gd_assets_jz" name="end_gd_assets_jz"  type="text" onkeypress="keyPress()" /></td>',
                    '<th>非流动负债合计</th>',
                    '<td><input id="st_hj_no_fz" name="st_hj_no_fz"  type="text" /></td>',
                    '<td><input id="end_hj_no_fz" name="end_hj_no_fz"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>减：固定资产减值准备</th>',
                    '<td><input id="st_gd_assets_ready" name="st_gd_assets_ready"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_gd_assets_ready" name="end_gd_assets_ready"  type="text" onkeypress="keyPress()" /></td>',
                    '<th>负债合计</th>',
                    '<td><input id="st_hj_total_fz" name="st_hj_total_fz"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_hj_total_fz" name="end_hj_total_fz"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>固定资产净额</th>',
                    '<td><input id="st_gd_assets_je" name="st_gd_assets_je"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_gd_assets_je" name="end_gd_assets_je"  type="text"  onkeypress="keyPress()"/></td>',
                    '<th></th>',
                    '<th></th>',
                    '<th></th>',
                    '</tr>',
                    '<tr>',
                    '<th>在建工程</th>',
                    '<td><input id="st_now_project" name="st_now_project"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_now_project" name="end_now_project"  type="text" onkeypress="keyPress()" /></td>',
                    '<th>所有者权益(或股东权益)</th>',
                    '<th></th>',
                    '<th></th>',
                    '</tr>',
                    '<tr>',
                    '<th>工程物资</th>',
                    '<td><input id="st_project_material" name="st_project_material"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_project_material" name="end_project_material"  type="text"  onkeypress="keyPress()"/></td>',
                    '<th>实收资本（或股本）</th>',
                    '<td><input id="st_paid_assets" name="st_paid_assets"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_paid_assets" name="end_paid_assets"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>固定资产清理</th>',
                    '<td><input id="st_gd_assets_ql" name="st_gd_assets_ql"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_gd_assets_ql" name="end_gd_assets_ql"  type="text" onkeypress="keyPress()" /></td>',
                    '<th>资本公积</th>',
                    '<td><input id="st_zb_reserve" name="st_zb_reserve"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_zb_reserve" name="end_zb_reserve"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>生产性生物资产</th>',
                    '<td><input id="st_scx_investment" name="st_scx_investment"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_scx_investment" name="end_scx_investment"  type="text" onkeypress="keyPress()" /></td>',
                    '<th>减：库存股</th>',
                    '<td><input id="st_kc_stock" name="st_kc_stock"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_kc_stock" name="end_kc_stock"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>无形资产</th>',
                    '<td><input id="st_wx_assets" name="st_wx_assets"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_wx_assets" name="end_wx_assets"  type="text" value="{end_wx_assets}" onkeypress="keyPress()"/></td>',
                    '<th>专项储备</th>',
                    '<td><input id="st_zx_reserve" name="st_zx_reserve"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_zx_reserve" name="end_zx_reserve"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>商誉</th>',
                    '<td><input id="st_goodwill" name="st_goodwill"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_goodwill" name="end_goodwill"  type="text" onkeypress="keyPress()" /></td>',
                    '<th>盈余公积</th>',
                    '<td><input id="st_yy_reserve" name="st_yy_reserve"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_yy_reserve" name="end_yy_reserve"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>长期待摊费用</th>',
                    '<td><input id="st_cqdt_cost" name="st_cqdt_cost"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_cqdt_cost" name="end_cqdt_cost"  type="text"  onkeypress="keyPress()"/></td>',
                    '<th>未分配利润</th>',
                    '<td><input id="st_wfp_profit" name="st_wfp_profit"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_wfp_profit" name="end_wfp_profit"  type="text"  onkeypress="keyPress()"/></td>',
                    '</tr>',
                    '<tr>',
                    '<th>递延所得税资产</th>',
                    '<td><input id="st_dysds_assets" name="st_dysds_assets"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_dysds_assets" name="end_dysds_assets"  type="text"  onkeypress="keyPress()"/></td>',
                    '<th>所有者权益合计</th>',
                    '<td><input id="st_hj_owner_right" name="st_hj_owner_right"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_hj_owner_right" name="end_hj_owner_right"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>其他非流动资产</th>',
                    '<td><input id="st_other_no_assets" name="st_other_no_assets"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_other_no_assets" name="end_other_no_assets"  type="text" onkeypress="keyPress()" /></td>',
                    '<th></th>',
                    '<th></th>',
                    '<th></th>',
                    '</tr>',
                    '<tr>',
                    '<th>非流动资产合计</th>',
                    '<td><input id="st_hj_no_asset" name="st_hj_no_asset"  type="text"  onkeypress="keyPress()"/></td>',
                    '<td><input id="end_hj_no_asset" name="end_hj_no_asset"  type="text" onkeypress="keyPress()" /></td>',
                    '<th></th>',
                    '<th></th>',
                    '<th></th>',
                    '</tr>',
                    '<tr>',
                    '<th>资产总计</th>',
                    '<td><input id="st_hj_total_asset" name="st_hj_total_asset"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_hj_total_asset" name="end_hj_total_asset"  type="text" onkeypress="keyPress()" /></td>',
                    '<th>负债和所有者权益合计</th>',
                    '<td><input id="st_hj_fz_owner_right" name="st_hj_fz_owner_right"  type="text" onkeypress="keyPress()" /></td>',
                    '<td><input id="end_hj_fz_owner_right" name="end_hj_fz_owner_right"  type="text" onkeypress="keyPress()" /></td>',
                    '</tr>',
                    '</table>',


                    '<table class="enter_table" id="table_apply_service">',
                    '<tr>',
                    '<td  colspan="4"><input style="width:50px;height:14px;"  id="type_server"  name="type_server"  type="checkbox" value="true" />服务机构&nbsp;&nbsp;</td>',
                    '</tr>',
                    '<tr>',
                    '<th class="table_header" colspan="4">服务机构信息</th>',
                    '</tr>',
                    '<tr>',
                    '<th>服务机构名称</th>',
                    '<td><input id="srv_name" name="srv_name"  type="text" /></td>',
                    '<th>服务机构类别</th>',
                    '<td><input id="srv_type" name="srv_type"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>业务内容</th>',
                    '<td><input id="srv_content" name="srv_content"  type="text" /></td>',
                    '<th>级别</th>',
                    '<td><input id="srv_levels" name="srv_levels"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>惩罚记录</th>',
                    '<td><input id="srv_penalty" name="srv_penalty"  type="text" /></td>',
                    '<th>专属领域</th>',
                    '<td><input id="srv_domain" name="srv_domain"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>专审委员</th>',
                    '<td><input id="srv_examiner" name="srv_examiner"  type="text" /></td>',
                    '<th>兼任职务</th>',
                    '<td><input id="srv_post" name="srv_post"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>简介</th>',
                    '<td colspan="3"><textarea  style="background-color: white"  id="srv_descs" name="srv_descs"  type="text"></textarea></td>' +
                    '</tr>',
                    '<tr>',
                    '<th>备注</th>',
                    '<td colspan="3"><textarea  style="background-color: white"  id="srv_remark" name="srv_remark"  type="text"></textarea></td>' +
                    '</tr>',
                    '</table>',


                    '<table class="enter_table" id="table_apply_investors">',
                    '<tr>',
                    '<td  colspan="4"><input style="width:50px;height:14px;"  id="type_investors" name="type_investors"  type="checkbox" />投资人&nbsp;&nbsp;</td>',
                    '</tr>',
                    '<tr>',
                    '<th class="table_header" colspan="4">投资人信息</th>',
                    '</tr>',
                    '<tr>',
                    '<th>投资领域</th>',
                    '<td  colspan="3"><input id="inv_domain" name="inv_domain"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>行业一级分类</th>',
                    '<td>',
                    '<select onchange="inv_csrc_type1_select(this.value)" style="width: 230px" class="select" name="inv_csrc_type1" id="inv_csrc_type1">',
                    //'<option>{inv_csrc_type1}</option>',
                    '<option>农、林、牧、渔业</option>',
                    '<option>采矿业</option>',
                    '<option>制造业</option>',
                    '<option>电力、燃气及水的生产和供应业</option>',
                    '<option>建筑业</option>',
                    '<option>交通运输、仓储和邮政业</option>',
                    '<option>信息传输、计算机服务和软件业</option>',
                    '<option>批发和零售业</option>',
                    '<option>住宿和餐饮业</option>',
                    '<option>金融业</option>',
                    '<option>房地产业</option>',
                    '<option>租赁和商务服务业</option>',
                    '<option>科学研究、技术服务和地质勘查业</option>',
                    '<option>水利、环境和公共设施管理业</option>',
                    '<option>居民服务和其他服务业</option>',
                    '<option>教育</option>',
                    '<option>卫生、社会保障和社会福利业</option>',
                    '<option>文化、体育和娱乐业</option>',
                    '<option>公共管理和社会组织</option>',
                    '<option>国际组织</option>',
                    ' </select>',
                    '</td>',
                    '<th>行业二级分类</th>',
                    '<td>',
                    '<select  onchange="inv_csrc_type2_select(this.value)" style="width: 230px" class="select" name="inv_csrc_type2" id="inv_csrc_type2">',
                    '<option></option>',
                    ' </select>',
                    '</td>',
                    '</tr>',
                    '<tr>',
                    '<th>行业三级分类</th>',
                    '<td>',
                    '<select  onchange="inv_csrc_type3_select(this.value)" style="width: 230px" class="select" name="inv_csrc_type3" id="inv_csrc_type3">',
                    '<option></option>',
                    ' </select>',
                    '</td>',
                    '<th>行业四级分类</th>',
                    '<td>',
                    '<select style="width: 230px" class="select" name="inv_csrc_type4" id="inv_csrc_type4">',
                    '<option></option>',
                    ' </select>',
                    '</td>',
                    '</tr>',
                    '<tr>',
                    '<th>证监会行业一级分类</th>',
                    '<td>    ' +
                    '<select onchange="inv_indclass1_select(this.value)" style="width: 230px" class="select" name="inv_indclass1" id="inv_indclass1">',
                    '<option>农、林、牧、渔业</option>',
                    '<option>采矿业</option>',
                    '<option>制造业</option>',
                    '<option>电力、热力、燃气及水生产和供应业</option>',
                    '<option>建筑业</option>',
                    '<option>批发和零售业</option>',
                    '<option>交通运输、仓储和邮政业</option>',
                    '<option>住宿和餐饮业</option>',
                    '<option>信息传输、软件和信息技术服务业</option> ',
                    '<option>金融业</option>',
                    '<option>房地产业</option>',
                    '<option>租赁和商务服务业</option>',
                    '<option>科学研究和技术服务业</option>',
                    '<option>水利、环境和公共设施管理业</option>',
                    '<option>居民服务、修理和其他服务业</option>',
                    '<option>教育</option>',
                    '<option>卫生和社会工作</option>',
                    '<option>文化、体育和娱乐业</option>',
                    '<option>综合</option>',
                    ' </select>',
                    '</td>',
                    '<th>证监会行业二级分类</th>',
                    '<td>',
                    '<select style="width: 230px" class="select" name="inv_indclass2" id="inv_indclass2">',
                    '<option></option>',
                    ' </select>',
                    '</td>',
                    '</tr>',
                    '<tr>',
                    '<th>姓名</th>',
                    '<td><input id="inv_contact" name="inv_contact"  type="text" /></td>',
                    '<th>证件类型</th>',
                    '<td><input id="inv_doctype" name="inv_doctype"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>职务</th>',
                    '<td><input id="inv_psotion" name="inv_psotion"  type="text" /></td>',
                    '<th>证件号码</th>',
                    '<td><input id="inv_docnum" name="inv_docnum"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>手机</th>',
                    '<td><input id="inv_phone" name="inv_phone"  type="text"  onchange="inv_phone_check();" /></td>',
                    '<th>传真</th>',
                    '<td><input id="inv_fax" name="inv_fax"  type="text"   onchange="inv_fax_check();"/></td>',
                    '</tr>',
                    '<tr>',
                    '<th>E-mail</th>',
                    '<td><input id="inv_email" name="inv_email"  type="text"   onchange="inv_email_check_apply();" /></td>',
                    '<th>QQ</th>',
                    '<td><input id="inv_qq" name="inv_qq"  type="text"  onchange="inv_qq_check_apply();"/></td>',
                    '</tr>',
                    '<tr>' +
                    '<th>微信号</th>' +
                    '<td><input id="inv_webchat" name="inv_webchat"  type="text" "/></td>' +
                    '<th>固话</th>',
                    '<td><input id="inv_tel" name="inv_tel"  type="text"   onchange="inv_tel_check();"/></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>备注</th>' +
                    '<td colspan="3"><textarea  style="background-color: white"  id="inv_remark" name="inv_remark"  type="text"></textarea></td>' +
                    '</tr>' +
                    '</table>',


                    '<table class="enter_table" id="table_apply_govermt">',
                    '<tr>',
                    '<td  colspan="4"><input style="width:50px;height:14px;"  id="type_govermt"  name="type_govermt" type="checkbox"  value="true"/>政府机构&nbsp;&nbsp;</td>',
                    '</tr>',
                    '<tr>',
                    '<th class="table_header" colspan="4">政府部门信息</th>',
                    '</tr>',
                    '<tr>',
                    '<th>单位名称</th>',
                    '<td><input id="gov_domain" name="gov_domain"  type="text" /></td>',
                    '<th>处/室</th>',
                    '<td><input id="gov_office" name="gov_office"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>职能介绍</th>',
                    '<td colspan="3"><input id="gov_desc" name="gov_desc"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>姓名</th>',
                    '<td><input id="gov_contact" name="gov_contact"  type="text" /></td>',
                    '<th>证件类型</th>',
                    '<td><input id="gov_doctype" name="gov_doctype"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>职务</th>',
                    '<td><input id="gov_psotion" name="gov_psotion"  type="text" /></td>',
                    '<th>证件号码</th>',
                    '<td><input id="gov_docnum" name="gov_docnum"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>手机</th>',
                    '<td><input id="gov_phone" name="gov_phone"  type="text"  onchange="gov_phone_check();"/></td>',
                    '<th>传真</th>',
                    '<td><input id="gov_fax" name="gov_fax"  type="text"  onchange="gov_fax_check();"/></td>',
                    '</tr>',
                    '<tr>',
                    '<th>E-mail</th>',
                    '<td><input id="gov_email" name="gov_email"  type="text" onchange="email_check_apply();"/></td>',
                    '<th>QQ</th>',
                    '<td><input id="gov_qq" name="gov_qq"  type="text"  onchange="gov_qq_check();"/></td>',
                    '</tr>',
                    '<tr>' +
                    '<th>微信号</th>' +
                    '<td><input id="gov_webchat" name="gov_webchat"  type="text" /></td>' +
                    '<th>固话</th>',
                    '<td><input id="gov_tel" name="gov_tel"  type="text"   onchange="gov_tel_check();"/></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>备注</th>' +
                    '<td colspan="3"><textarea  style="background-color: white"  id="gov_remark" name="gov_remark"  type="text" ></textarea></td>' +
                    '</tr>' +
                    '</table>',

                    '<table class="enter_table" id="table_apply_demand_rz">',
                    '<tr>',
                    '<td  colspan="4"><input style="width:50px;height:14px;"  id="demand_rz"  type="checkbox" name="demand_rz" value="true" />融资需求&nbsp;&nbsp;</td>',
                    '</tr>',
                    '<tr>',
                    '<th class="table_header" colspan="4">融资需求</th>',
                    '</tr>',
                    '<tr>',
                    '<th>融资金额</th>',
                    '<td><input id="refi_amounts" name="refi_amounts"  type="text" /></td>',
                    '<th>融资用途</th>',
                    '<td><input id="refi_use" name="refi_use"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>股份融资/债券融资</th>',
                    '<td><input id="refi_financ" name="refi_financ"  type="text" /></td>',
                    '<th>偿付保障</th>',
                    '<td><input id="refi_security" name="refi_security"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>可接受成本（%/年）</th>',
                    '<td><input id="refi_acc_cost" name="refi_acc_cost"  type="text"  onkeypress="keyPress()"/></td>',
                    '<th>融资期限</th>',
                    '<td><input id="refi_deadline" name="refi_deadline"  type="text" /></td>',
                    '</tr>',
                    '<tr>' +
                    '<th>融资用途详细说明</th>' +
                    '<td colspan="3"><textarea  style="background-color: white"  id="refi_desc" name="refi_desc"  type="text" ></textarea></td>' +
                    '</tr>' +
                    '</table>',


                    '<table class="enter_table" id="table_apply_demand_px">',
                    '<tr>',
                    '<td  colspan="4"><input style="width:50px;height:14px;" id="demand_px"   type="checkbox" name="demand_px" value="true"/>培训需求&nbsp;&nbsp;</td>',
                    '</tr>',
                    '<tr>',
                    '<th class="table_header" colspan="4">培训需求</th>',
                    '</tr>',
                    '<tr>',
                    '<th>培训方式</th>',
                    '<td colspan="3"><input id="retra_mode" name="retra_mode"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>有效时间</th>',
                    '<td><input id="retra_dt" name="retra_dt"  type="date" /></td>',
                    '<th>可接受成本</th>',
                    '<td><input id="retra_acc_cost" name="retra_acc_cost"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>培训内容</th>',
                    '<td colspan="3"><textarea  style="background-color: white"  id="retra_content" name="retra_content"  type="text"></textarea></td>' +
                    '</tr>',
                    '<tr>' +
                    '<th>详细要求</th>' +
                    '<td colspan="3"><textarea  style="background-color: white"  id="retra_requests" name="retra_requests"  type="text"></textarea></td>' +
                    '</tr>' +
                    '</table>',

                    '<table class="enter_table" id="table_apply_demand_rl">',
                    '<tr>',
                    '<td  colspan="4"><input style="width:50px;height:14px;" id="demand_rl"  type="checkbox" name="demand_rl" value="true"/>人力需求&nbsp;&nbsp;</td>',
                    '</tr>',
                    '<tr>',
                    '<th class="table_header" colspan="4">人力资源需求</th>',
                    '</tr>',
                    '<tr>',
                    '<th>需求职位</th>',
                    '<td><input id="rehr_post" name="rehr_post"  type="text" /></td>',
                    '<th>职位人数</th>',
                    '<td><input id="rehr_num" name="rehr_num"  type="text" /></td>',
                    '</tr>',
                    '<tr>',
                    '<th>职位薪金</th>',
                    '<td><input id="rehr_salary" name="rehr_salary"  type="text" /></td>',
                    '<th>性别要求</th>',
                    '<td><input id="rehr_sex_req" name="rehr_sex_req"  type="text" /></td>',
                    '</tr>',
                    '<tr>' +
                    '<th>年龄要求</th>',
                    '<td><input id="rehr_age_req" name="rehr_age_req"  type="text" /></td>',
                    '<th>经验要求</th>',
                    '<td><input id="rehr_requests" name="rehr_requests"  type="text" /></td>',
                    '</tr>' +
                    '</table>',

                    '</div>',
                    '<div id="enter_menu_list" style="position: fixed; top: 7em; right: 6em;">',
                    '<ul>',
                    '<br>',
                    '<br>',
                    '<li><a href="#table_apply_base" style="font-size:18px;">基本信息</a></li>',
                    '<li><a href="#table_apply_sh" style="font-size:18px;">股东名册</a></li>',
                    '<li><a href="#table_apply_link" style="font-size:18px;">法定代表人</a></li>',
                    '<li><a href="#table_apply_acount" style="font-size:18px;">行业分类</a></li>',
                    '<li><a href="#table_apply_csrc_type" style="font-size:18px;">证监会行业分类</a></li>',
                    '<li><a href="#table_apply_ocompay" style="font-size:18px;">企业维护信息</a></li>',
                    '<li><a href="#table_apply_assets_finance" style="font-size:18px;">企业财务信息</a></li>',
                    '<li><a href="#table_apply_service" style="font-size:18px;">服务机构</a></li>',
                    '<li><a href="#table_apply_investors" style="font-size:18px;">投资人</a></li>',
                    '<li><a href="#table_apply_govermt" style="font-size:18px;">政府部门</a></li>',
                    '<li><a href="#table_apply_demand_rz" style="font-size:18px;">融资需求</a></li>',
                    '<li><a href="#table_apply_demand_px" style="font-size:18px;">培训需求</a></li>',
                    '<li><a href="#table_apply_demand_rl" style="font-size:18px;">人力资源需求</a></li>',
                    '<li><a href="#" class="win_save_btn" onclick="save_cust_add()">保 存</a></li>',
                    '</ul>',
                    '</div>',
                    '</form>',
                    '</div>'
                ).append('apply_view_corp', {});
            }
        },
        frame: false,
        border: false,
        autoScroll: true,
        layout: {
            type: 'vbox',
            align: 'stretch',
            pack: 'start'
        },

        items: [
            {
                xtype: 'panel',
                border: false,
                id: 'corp_panel',
                html: '<div id="apply_view_corp"></div>'
            }
        ]
    }]
});

function save_cust_add() {
    if (document.getElementById("buslicno").value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>营业执照号码不能为空！</span>");
        return;
    }
    if (document.getElementById("name").value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>企业名称不能为空！</span>");
        return;
    }
    if (document.getElementById("unit").value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>单位类别不能为空！</span>");
        return;
    }
    if (document.getElementById("legrep").value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>法定代表人不能为空！</span>");
        return;
    }
    if (document.getElementById("nature").value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>企业性质不能为空！</span>");
        return;
    }
    if (document.getElementById("regcap").value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>注册资本不能为空！</span>");
        return;
    }
    if (document.getElementById("regdt").value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>注册日期不能为空！</span>");
        return;
    }

    //企业ＩＤ
    var corp_id;
    if (document.getElementById('apply_form')['buslicno'].value == null && document.getElementById('apply_form')['buslicno'].value == "") {
        Ext.Msg.alert("提示", "请填写营业执照号码！");
        return;
    } else {
        Ext.Ajax.request({
            method: "POST",
            url: '/bolong/checked_corp_id_info_me',
            success: function (response) {
                var obj = Ext.decode(response.responseText);

                if (obj.success) {
                    corp_id = parseInt(obj.name);
                }

                obt_corp_add(corp_id);
                obt_corp_contact_add(corp_id);
                obt_corp_shareholder_add(corp_id);
                obt_corp_finance_add(corp_id);
                obt_corp_maintain_add(corp_id);
                obt_corp_government_add(corp_id);
                obt_corp_investors_add(corp_id);
                obt_corp_service_add(corp_id);
                obt_corp_refinancing_add(corp_id);
                obt_corp_rehr_add(corp_id);
                obt_corp_retrain_add(corp_id);
            },
            failure: function () {
                Ext.Msg.alert("失败", "企业ID检验失败!");
            }
        });
    }
};

function NumberCheck(num) {
    var no_regexp = /\d{15}/;
    return no_regexp.exec(num) != null;
};

function card_check_apply() {
    if (document.getElementById("buslicno").value == "") {
        Ext.Msg.alert("提示", "<span style='color: red;'>营业执照号码不能为空！</span>")
        return;
    }
    if (document.getElementById('buslicno').value.length != 15) {
        Ext.Msg.alert("提示", "<span style='color: red;'>营业执照号码格式不对！请重新输入！</span>");
        document.getElementById('apply_form')['buslicno'].value = "";
        return;
    }
    if (!NumberCheck(document.getElementById('buslicno').value)) {
        Ext.Msg.alert("提示", "<span style='color: red;'>营业执照号码格式不对！请重新输入！</span>")
        document.getElementById('apply_form')['buslicno'].value = "";
        return;
    }

    var form_obt_apply = document.getElementById("apply_form");

    Ext.Ajax.request({
        method: "POST",
        params: {
            buslicno: form_obt_apply['buslicno'].value,
            id: 0
        },
        url: 'check_buslicno_info',
        success: function (response, opts) {
            var obj = Ext.decode(response.responseText);

            if (!obj.success) {
                Ext.Msg.alert("提示", "该营业执照号码已用！");
                document.getElementById('apply_form')['buslicno'].value = "";
            }
        },
        failure: function (response, opts) {
            //Ext.Msg.alert("提示", "错");
        }
    });
};

function corp_img_upload(id) {
    Ext.create('widget.window', {
        title: '企业图片',
        id: 'corp_find_window',
        width: 800,
        height: 600,
        modal: true,
        frame: true,
        border: false,
        layout: 'border',
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [{
                text: '上传',
                id: 'corp_update_img_id',
                listeners: {
                    click: function () {
                        Ext.create('widget.window', {
                            title: '资料上传',
                            width: 280,
                            height: 160,
                            modal: true,
                            border: false,
                            layout: 'fit',
                            items: [{
                                xtype: 'form',
                                frame: true,
                                bodyPadding: 16,
                                defaults: {
                                    labelWidth: 50
                                },
                                items: [{
                                    xtype: 'filefield',
                                    allowBlank: false,
                                    fieldLabel: '文件',
                                    name: 'file',
                                    id: 'file',
                                    anchor: '100%',
                                    buttonText: '浏览...',
                                    buttonConfig: {
                                        iconCls: 'upload'
                                    },
                                    listeners: {
                                        change: function (btn, value) {
                                            //是否是规定的图片类型
                                            var img_reg = /\.([jJ][pP][gG])$|\.([jJ][pP][eE][gG])$|\.([gG][iI][fF])小贝$|\.([pP][nN][gG])$|\.([bB][mM][pP])$/;
                                            if (img_reg.test(value)) {
                                                var img = Ext.getCmp('file');
                                                var file = btn.fileInputEl.dom.files[0];
                                                var url = URL.createObjectURL(file);
                                                img.setSrc(url);
                                            } else {
                                                Ext.Msg.alert('提示', '请选择图片类型的文件！');
                                                Ext.getCmp('file').reset();
                                                return;
                                            }
                                        }
                                    }
                                }],
                                buttonAlign: "center",
                                buttons: [{
                                    text: '保存',
                                    handler: function () {
                                        var form = this.up('form').getForm();
                                        if (form.isValid()) {
                                            form.submit({
                                                url: 'add_corp_img_info',
                                                params: {
                                                    img_corp_id: id
                                                },
                                                waitMsg: '正在保存数据...',
                                                success: function (response, action) {
                                                    Ext.Msg.alert("成功", "文件上传成功!");
                                                    Ext.getCmp('grid_corp_img').getStore().reload();
                                                },
                                                failure: function (form, action) {
                                                    Ext.Msg.alert("提示", "文件格式不正确，只能上传jpg,png格式的文件！");
                                                }
                                            });
                                        }
                                    }
                                }]
                            }]
                        }).show();
                    }
                }
            }]
        }],
        items: [{
            xtype: 'corp_img_gridf',
            region: 'center',
            listeners: {
                afterrender: function () {
                    Ext.getCmp('grid_corp_img').getStore().load();
                    var store = Ext.getCmp('grid_corp_img').getStore();
                    store.load({
                        params: {
                            img_corp_id: id
                        }
                    })
                }
            }
        }]
    }).show(Ext.get('corp_find_window'));
};
