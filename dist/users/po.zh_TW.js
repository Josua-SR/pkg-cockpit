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
  ""
 ],
 "Account not available or cannot be edited.": [
  null,
  ""
 ],
 "Accounts": [
  null,
  ""
 ],
 "Add key": [
  null,
  ""
 ],
 "Add public key": [
  null,
  ""
 ],
 "Authorized Public SSH Keys": [
  null,
  ""
 ],
 "Back to Accounts": [
  null,
  ""
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
  ""
 ],
 "Container Administrator": [
  null,
  ""
 ],
 "Create": [
  null,
  "建立"
 ],
 "Create New Account": [
  null,
  ""
 ],
 "Delete": [
  null,
  "刪除"
 ],
 "Delete $0": [
  null,
  ""
 ],
 "Delete Files": [
  null,
  "刪除檔案"
 ],
 "Error": [
  null,
  "錯誤"
 ],
 "Excellent password": [
  null,
  ""
 ],
 "Failed to change password": [
  null,
  ""
 ],
 "Failed to load authorized keys.": [
  null,
  ""
 ],
 "Force Change": [
  null,
  ""
 ],
 "Force password change": [
  null,
  ""
 ],
 "Full Name": [
  null,
  "全名"
 ],
 "Image Builder": [
  null,
  ""
 ],
 "Invalid expiration date": [
  null,
  ""
 ],
 "Invalid key": [
  null,
  ""
 ],
 "Invalid number of days": [
  null,
  ""
 ],
 "Last Login": [
  null,
  ""
 ],
 "Local Accounts": [
  null,
  ""
 ],
 "Lock Account": [
  null,
  ""
 ],
 "Lock account on $0": [
  null,
  ""
 ],
 "Logged In": [
  null,
  ""
 ],
 "Never": [
  null,
  "永不"
 ],
 "Never expire password": [
  null,
  ""
 ],
 "Never lock account": [
  null,
  ""
 ],
 "New Password": [
  null,
  ""
 ],
 "New password was not accepted": [
  null,
  ""
 ],
 "No real name specified": [
  null,
  ""
 ],
 "No user name specified": [
  null,
  ""
 ],
 "Off": [
  null,
  "關閉"
 ],
 "Old Password": [
  null,
  ""
 ],
 "Old password not accepted": [
  null,
  ""
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
  ""
 ],
 "Password is not acceptable": [
  null,
  ""
 ],
 "Password is too weak": [
  null,
  ""
 ],
 "Password must be changed": [
  null,
  ""
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  ""
 ],
 "Please specify an expiration date": [
  null,
  ""
 ],
 "Prompting via passwd timed out": [
  null,
  ""
 ],
 "Require password change every $0 days": [
  null,
  ""
 ],
 "Require password change on $0": [
  null,
  ""
 ],
 "Reset": [
  null,
  "重設"
 ],
 "Roles": [
  null,
  "角色"
 ],
 "Server Administrator": [
  null,
  ""
 ],
 "Set": [
  null,
  "設置"
 ],
 "Set Password": [
  null,
  ""
 ],
 "Terminate Session": [
  null,
  ""
 ],
 "The account '$0' will be forced to change their password on next login": [
  null,
  ""
 ],
 "The passwords do not match": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  ""
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  ""
 ],
 "There are no authorized public keys for this account.": [
  null,
  ""
 ],
 "This user name already exists": [
  null,
  ""
 ],
 "Unable to delete root account": [
  null,
  ""
 ],
 "Unable to rename root account": [
  null,
  ""
 ],
 "Unexpected error": [
  null,
  "未預期的錯誤"
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
  ""
 ],
 "translatable": [
  null,
  ""
 ],
 "page-title\u0004Accounts": [
  null,
  ""
 ]
}));
