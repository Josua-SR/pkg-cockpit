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
 "Access": [
  null,
  "访问"
 ],
 "Account Expiration": [
  null,
  "账号过期"
 ],
 "Account not available or cannot be edited.": [
  null,
  "帐户不可用或不能编辑."
 ],
 "Accounts": [
  null,
  "账户"
 ],
 "Add key": [
  null,
  "添加密钥"
 ],
 "Add public key": [
  null,
  "添加公钥"
 ],
 "Adding key": [
  null,
  "添加密钥"
 ],
 "Authorized Public SSH Keys": [
  null,
  "授权公共 SSH 密钥"
 ],
 "Back to Accounts": [
  null,
  "返回账号"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Change": [
  null,
  "变更"
 ],
 "Close": [
  null,
  "关闭"
 ],
 "Confirm": [
  null,
  "确认"
 ],
 "Confirm New Password": [
  null,
  "确认新密码"
 ],
 "Create": [
  null,
  "创建"
 ],
 "Create New Account": [
  null,
  "创建新账户"
 ],
 "Delete": [
  null,
  "删除"
 ],
 "Delete Files": [
  null,
  "删除文件"
 ],
 "Error saving authorized keys: ": [
  null,
  "保存授权密钥时出错: "
 ],
 "Failed to load authorized keys.": [
  null,
  "载入 authorized key 失败。"
 ],
 "Force Change": [
  null,
  "强制变更"
 ],
 "Force password change": [
  null,
  "强制密码变更"
 ],
 "Full Name": [
  null,
  "全名"
 ],
 "Invalid key": [
  null,
  "无效的 key"
 ],
 "Last Login": [
  null,
  "最近登陆"
 ],
 "Local Accounts": [
  null,
  "本地账户"
 ],
 "Lock Account": [
  null,
  "锁定账户"
 ],
 "Never expire password": [
  null,
  "密码从不过期"
 ],
 "Never lock account": [
  null,
  "账号从不锁定"
 ],
 "New Password": [
  null,
  "新密码"
 ],
 "Off": [
  null,
  "关"
 ],
 "Old Password": [
  null,
  "旧密码"
 ],
 "On": [
  null,
  "开"
 ],
 "Password": [
  null,
  "密码"
 ],
 "Password Expiration": [
  null,
  "密码过期"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "在这里粘贴 SSH 公钥文件内容"
 ],
 "Reset": [
  null,
  "重置"
 ],
 "Roles": [
  null,
  "角色"
 ],
 "Set": [
  null,
  "设置"
 ],
 "Set Password": [
  null,
  "设置密码"
 ],
 "Terminate Session": [
  null,
  "终止会话"
 ],
 "The key you provided was not valid.": [
  null,
  "您提供的 key 是无效的."
 ],
 "There are no authorized public keys for this account.": [
  null,
  "没有这个帐户的授权公钥."
 ],
 "Unnamed": [
  null,
  "未命名"
 ],
 "User Name": [
  null,
  "用户名"
 ],
 "Validating key": [
  null,
  "验证 key"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "您没有权限查看此帐户的授权公钥."
 ],
 "translatable": [
  null,
  "翻译"
 ]
}));
