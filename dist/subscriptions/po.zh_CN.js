(function (root, data) {
    var loaded, module;

    /* Load into AMD if desired */
    if (typeof define === 'function' && define.amd) {
        define(data);
        loaded = true;
    }

    /* Load into Cockpit locale */
    if (typeof cockpit === 'object') {
        cockpit.locale(data)
        loaded = true;
    }

    function transformAngular(data, prev) {
        var key, context, parts, value, result = { };
        for (key in data) {
            if (key === "")
                continue;
            parts = key.split("\u0004");
            value = data[key];
            if (parts[1]) {
                context = parts[0];
                key = parts[1];
            } else {
                context = "$$noContext";
                key = parts[0];
            }
            if (value[0] === null)
                value = value[1];
            else
                value = value.slice(1);
            if (!(key in result))
                result[key] = { };
            result[key][context] = value;
        }
        return angular.extend(prev, result);
    }

    /* Load into angular here */
    if (typeof angular === 'object') {
        try {
            module = angular.module(["gettext"]);
        } catch(ex) { console.log(ex); /* Either no angular or angular-gettext */ };
        if (module) {
            loaded = true;
            module.run(['gettextCatalog', function(gettextCatalog) {
                var lang = data[""]["language"];
                var prev = (gettextCatalog.getCurrentLanguage() == lang) ? gettextCatalog.strings : { };
                gettextCatalog.setStrings(lang, transformAngular(data, prev));
                gettextCatalog.setCurrentLanguage(lang);
            }]);
        }
    }

    if (!loaded)
        root.po = data;

/* The syntax of this line is important  by po2json */
}(this, {
 "": {'plural-forms':function(n) {
var nplurals, plural;
nplurals=1; plural=0;
return plural;
},
  "language": "zh_CN",
  "x-generator": "Zanata 4.6.2"
 },
 "'Organization' required to register.": [
  null,
  "需要注册“组织”。"
 ],
 "'Organization' required when using activation keys.": [
  null,
  "当使用激活码时需要“组织”。"
 ],
 "Access denied": [
  null,
  "访问被拒绝"
 ],
 "Activation Key": [
  null,
  "激活码"
 ],
 "Architecture": [
  null,
  "架构"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Couldn't get system subscription status. Please ensure subscription-manager is installed.": [
  null,
  "无法获取系统订阅状态。请确认 subscription-manager 已安装。"
 ],
 "Custom URL": [
  null,
  "自定义 URL"
 ],
 "Default": [
  null,
  "默认"
 ],
 "Details": [
  null,
  "详情"
 ],
 "Ends": [
  null,
  "结尾"
 ],
 "Installed products": [
  null,
  "已安装的产品"
 ],
 "Invalid credentials": [
  null,
  "无效的凭证"
 ],
 "Invalid username or password": [
  null,
  "无效的用户名或密码"
 ],
 "Login": [
  null,
  "登录"
 ],
 "Login/password or activation key required to register.": [
  null,
  "注册需要登录/密码或激活码。"
 ],
 "No installed products on the system.": [
  null,
  "该系统上没有安装的产品。"
 ],
 "Ok": [
  null,
  "确认"
 ],
 "Organization": [
  null,
  "组织"
 ],
 "Password": [
  null,
  "密码"
 ],
 "Product ID": [
  null,
  "产品 ID"
 ],
 "Product name": [
  null,
  "产品名"
 ],
 "Proxy": [
  null,
  "代理"
 ],
 "Register": [
  null,
  "注册"
 ],
 "Register system": [
  null,
  "注册系统"
 ],
 "Retrieving subscription status...": [
  null,
  "正在获取订阅状态..."
 ],
 "Server": [
  null,
  "服务器"
 ],
 "Starts": [
  null,
  "开始"
 ],
 "Status": [
  null,
  "状态"
 ],
 "Status: $0": [
  null,
  "状态：$0"
 ],
 "Status: System isn't registered": [
  null,
  "状态：系统未注册"
 ],
 "Subscriptions": [
  null,
  "订阅"
 ],
 "The current user isn't allowed to access system subscription status.": [
  null,
  "当前用户不允许访问系统订阅状态。"
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unable to connect": [
  null,
  "无法连接"
 ],
 "Unregister": [
  null,
  "注销"
 ],
 "Unregistering system...": [
  null,
  "正在注销系统..."
 ],
 "Updating": [
  null,
  "更新"
 ],
 "Use proxy server": [
  null,
  "使用代理服务器"
 ],
 "User": [
  null,
  "用户"
 ],
 "Version": [
  null,
  "版本"
 ],
 "undefined": [
  null,
  "未定义"
 ]
}));
