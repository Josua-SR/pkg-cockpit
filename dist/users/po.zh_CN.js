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
  "帐户不可用或不可编辑."
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
 "Image Builder": [
  null,
  "图像生成器"
 ],
 "Invalid expiration date": [
  null,
  "无效的过期时间"
 ],
 "Invalid key": [
  null,
  "无效的 key"
 ],
 "Invalid number of days": [
  null,
  "无效的天数"
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
 "Lock account on $0": [
  null,
  "锁定 $0 上的账号"
 ],
 "Logged In": [
  null,
  "登录"
 ],
 "Never": [
  null,
  "从不"
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
 "Old Password": [
  null,
  "旧密码"
 ],
 "Old password not accepted": [
  null,
  "旧密码不被接受"
 ],
 "Password": [
  null,
  "密码"
 ],
 "Password Expiration": [
  null,
  "密码过期"
 ],
 "Password is not acceptable": [
  null,
  "不接受该密码"
 ],
 "Password is too weak": [
  null,
  "密码太弱"
 ],
 "Password must be changed": [
  null,
  "密码必须被修改"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "在这里粘贴 SSH 公钥文件内容"
 ],
 "Please specify an expiration date": [
  null,
  "请指定一个过期时间"
 ],
 "Prompting via passwd timed out": [
  null,
  "通过密码提示已超时"
 ],
 "Require password change every $0 days": [
  null,
  "要求每 $0 天修改密码"
 ],
 "Require password change on $0": [
  null,
  "要求于 $0 修改密码"
 ],
 "Reset": [
  null,
  "重置"
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
 "The account '$0' will be forced to change their password on next login": [
  null,
  "账号 '$0' 将在下次登录时被强制变更其密码"
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
  "没有这个帐户的授权公钥."
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
 "You must wait longer to change your password": [
  null,
  "您需要等待更长时间来修改您的密码"
 ],
 "translatable": [
  null,
  "翻译"
 ],
 "page-title\u0004Accounts": [
  null,
  "账户"
 ]
}));
