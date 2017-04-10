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
  "language": "zh-CN",
  "x-generator": "Zanata 3.9.6"
 },
 "Access": [
  null,
  "访问"
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
  "添加 key"
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
 "Container Administrator": [
  null,
  "容器管理员"
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
 "Delete $0": [
  null,
  "删除 $0"
 ],
 "Delete Files": [
  null,
  "删除文件"
 ],
 "Error": [
  null,
  "错误"
 ],
 "Error saving authorized keys: ": [
  null,
  "保存授权密钥时出错: "
 ],
 "Excellent password": [
  null,
  "密码强度良好"
 ],
 "Failed to change password": [
  null,
  "修改密码失败"
 ],
 "Failed to load authorized keys.": [
  null,
  "载入 authorized key 失败。"
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
 "Logged In": [
  null,
  "登录"
 ],
 "Never": [
  null,
  "从不"
 ],
 "New Password": [
  null,
  "新密码"
 ],
 "New password was not accepted": [
  null,
  "新密码不被接受"
 ],
 "No real name specified": [
  null,
  "未指定真实姓名"
 ],
 "No user name specified": [
  null,
  "未指定用户名"
 ],
 "Off": [
  null,
  "关"
 ],
 "Old Password": [
  null,
  "旧密码"
 ],
 "Old password not accepted": [
  null,
  "旧密码不被接受"
 ],
 "On": [
  null,
  "开"
 ],
 "Password": [
  null,
  "密码"
 ],
 "Password is not acceptable": [
  null,
  "不接受该密码"
 ],
 "Password is too weak": [
  null,
  "密码太弱"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "在这里粘贴 SSH 公钥文件内容"
 ],
 "Prompting via passwd timed out": [
  null,
  "passwd 提示已超时"
 ],
 "Roles": [
  null,
  "角色"
 ],
 "Server Administrator": [
  null,
  "服务器管理员"
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
 "The passwords do not match": [
  null,
  "密码不匹配"
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  "用户 <b>$0</b> 不允许修改账户"
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  "用户名仅能包含 a-z、数字、点、破折号和下划线的字母。"
 ],
 "There are no authorized public keys for this account.": [
  null,
  "存在未被该帐户授权的公钥."
 ],
 "This user name already exists": [
  null,
  "用户名已存在"
 ],
 "Unable to delete root account": [
  null,
  "不能删除 root 账户"
 ],
 "Unable to rename root account": [
  null,
  "不能重命名 root 账户"
 ],
 "Unexpected error": [
  null,
  "意外的错误"
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
 "page-title\u0004Accounts": [
  null,
  "账户"
 ]
}));