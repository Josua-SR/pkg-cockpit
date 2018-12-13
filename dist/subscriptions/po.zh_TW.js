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
  "language": "zh_TW",
  "x-generator": "Zanata 4.6.2"
 },
 "'Organization' required to register.": [
  null,
  "“組織”需要註冊。"
 ],
 "'Organization' required when using activation keys.": [
  null,
  "使用激活密鑰時需要“組織”。"
 ],
 "Access denied": [
  null,
  "拒絕存取"
 ],
 "Activation Key": [
  null,
  "啟動金鑰"
 ],
 "Architecture": [
  null,
  "架構"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Couldn't get system subscription status. Please ensure subscription-manager is installed.": [
  null,
  "無法獲得系統訂閱狀態。請確保已安裝訂閱管理器。"
 ],
 "Custom URL": [
  null,
  "自訂 URL"
 ],
 "Default": [
  null,
  "預設值"
 ],
 "Details": [
  null,
  "詳情"
 ],
 "Ends": [
  null,
  "結束"
 ],
 "Installed products": [
  null,
  "已安裝的產品"
 ],
 "Invalid credentials": [
  null,
  "無效證件"
 ],
 "Invalid username or password": [
  null,
  "無效的帳號或密碼"
 ],
 "Login": [
  null,
  "登入"
 ],
 "Login/password or activation key required to register.": [
  null,
  "註冊需要登錄/密碼或激活密鑰。"
 ],
 "No installed products on the system.": [
  null,
  "系統上沒有安裝產品。"
 ],
 "Ok": [
  null,
  "確定"
 ],
 "Organization": [
  null,
  "組織"
 ],
 "Password": [
  null,
  "密碼"
 ],
 "Product ID": [
  null,
  "產品 ID"
 ],
 "Product name": [
  null,
  "產品名稱"
 ],
 "Proxy": [
  null,
  "代理伺服器"
 ],
 "Register": [
  null,
  "註冊"
 ],
 "Register system": [
  null,
  "註冊系統"
 ],
 "Retrieving subscription status...": [
  null,
  "檢索訂閱狀態..."
 ],
 "Server": [
  null,
  "伺服器"
 ],
 "Starts": [
  null,
  "起始"
 ],
 "Status": [
  null,
  "狀態"
 ],
 "Status: $0": [
  null,
  "狀態：$0"
 ],
 "Status: System isn't registered": [
  null,
  "狀態：系統未註冊"
 ],
 "Subscriptions": [
  null,
  "訂閱服務"
 ],
 "The current user isn't allowed to access system subscription status.": [
  null,
  "目前的使用者沒有權限存取系統訂閱狀態。"
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unable to connect": [
  null,
  "無法連線"
 ],
 "Unregister": [
  null,
  "取消註冊"
 ],
 "Unregistering system...": [
  null,
  "取消註冊系統......"
 ],
 "Updating": [
  null,
  "更新"
 ],
 "Use proxy server": [
  null,
  "使用代理服務器"
 ],
 "User": [
  null,
  "使用者"
 ],
 "Version": [
  null,
  "版本"
 ],
 "undefined": [
  null,
  "未定義"
 ]
}));
