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
 "Access": [
  null,
  "存取"
 ],
 "Account Expiration": [
  null,
  "帳戶到期"
 ],
 "Account not available or cannot be edited.": [
  null,
  "帳戶不可用或無法編輯。"
 ],
 "Accounts": [
  null,
  "帳號"
 ],
 "Add key": [
  null,
  "添加密鑰"
 ],
 "Add public key": [
  null,
  "添加公鑰"
 ],
 "Authorized Public SSH Keys": [
  null,
  "授權的公共SSH密鑰"
 ],
 "Back to Accounts": [
  null,
  "回到帳戶"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Change": [
  null,
  "改變"
 ],
 "Close": [
  null,
  "關閉"
 ],
 "Confirm": [
  null,
  "確認"
 ],
 "Confirm New Password": [
  null,
  "確認新密碼"
 ],
 "Create": [
  null,
  "建立"
 ],
 "Create New Account": [
  null,
  "建立新帳戶"
 ],
 "Delete": [
  null,
  "刪除"
 ],
 "Delete Files": [
  null,
  "刪除檔案"
 ],
 "Failed to load authorized keys.": [
  null,
  "無法加載授權密鑰。"
 ],
 "Force Change": [
  null,
  "強制改變"
 ],
 "Force password change": [
  null,
  "強制更改密碼"
 ],
 "Full Name": [
  null,
  "全名"
 ],
 "Invalid key": [
  null,
  "無效的密鑰"
 ],
 "Last Login": [
  null,
  "上次登錄"
 ],
 "Local Accounts": [
  null,
  "本地帳戶"
 ],
 "Lock Account": [
  null,
  "鎖定帳戶"
 ],
 "Never expire password": [
  null,
  "永不過期密碼"
 ],
 "Never lock account": [
  null,
  "從不鎖定帳戶"
 ],
 "New Password": [
  null,
  "新密碼"
 ],
 "Off": [
  null,
  "關閉"
 ],
 "Old Password": [
  null,
  "舊密碼"
 ],
 "On": [
  null,
  "開"
 ],
 "Password": [
  null,
  "密碼"
 ],
 "Password Expiration": [
  null,
  "密碼到期"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "在此處粘貼公共SSH密鑰文件的內容"
 ],
 "Reset": [
  null,
  "重設"
 ],
 "Roles": [
  null,
  "角色"
 ],
 "Set": [
  null,
  "設置"
 ],
 "Set Password": [
  null,
  "設置密碼"
 ],
 "Terminate Session": [
  null,
  "終止會話"
 ],
 "There are no authorized public keys for this account.": [
  null,
  "此帳戶沒有授權的公鑰。"
 ],
 "Unnamed": [
  null,
  "未命名"
 ],
 "User Name": [
  null,
  "使用者名稱"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "您無權查看此帳戶的授權公鑰。"
 ],
 "translatable": [
  null,
  "翻譯"
 ]
}));
