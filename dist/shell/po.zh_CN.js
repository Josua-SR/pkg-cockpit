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
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "{{#strong}}{{host}}{{/strong}} 上未安装一个兼容版本的 Cockpit。"
 ],
 "About Cockpit": [
  null,
  "关于 Cockpit"
 ],
 "Account Settings": [
  null,
  "账户设置"
 ],
 "Active Pages": [
  null,
  "激活页面"
 ],
 "Add": [
  null,
  "添加"
 ],
 "Add Machine to Dashboard": [
  null,
  "把机器添加到仪表板"
 ],
 "Add key": [
  null,
  "添加密钥"
 ],
 "Address": [
  null,
  "地址"
 ],
 "Authentication": [
  null,
  "验证"
 ],
 "Authentication Failed": [
  null,
  "验证失败"
 ],
 "Available": [
  null,
  "可用的"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Cannot connect to an unknown machine": [
  null,
  "不能连接至未知主机"
 ],
 "Change Password": [
  null,
  "变更密码"
 ],
 "Checking for public keys": [
  null,
  "检查公钥"
 ],
 "Choose the language to be used in the application": [
  null,
  "选择应用程序使用的语言"
 ],
 "Close": [
  null,
  "关闭"
 ],
 "Close Selected Pages": [
  null,
  "关闭已选的页面"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit 无法与指定主机 $0 联系。请确认已经在端口 $1 上运行 SSH，或者在地址中指定另一个端口。"
 ],
 "Cockpit had an unexpected internal error. <br/><br/>You can try restarting Cockpit by pressing refresh in your browser. The javascript console contains details about this error (<b>Ctrl-Shift-J</b> in most browsers).": [
  null,
  "Cockpit 遇到意外的内部错误。 <br/><br/>可以尝试通过刷新浏览器重启 Cockpit。Javascript 控制台包含关于该错误的详情 （在大多数浏览器中按<b>Ctrl-Shift-J</b> ）。"
 ],
 "Cockpit is an interactive Linux server admin interface.": [
  null,
  "Cockpit 是一个交互式 Linux 服务器管理接口。"
 ],
 "Cockpit is not installed": [
  null,
  "Cockpit 未安装"
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit 无法联系 {{#strong}}{{host}}{{/strong}}。"
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  "Cockpit 无法登录到 {{#strong}}{{host}}{{/strong}}。 {{#can_sync}}您可以尝试使用 {{#sync_link}}对用户进行同步{{/sync_link}}。{{/can_sync}} 如需更多验证选项和排错支持，请把 cockpit-ws 更新到一个新版本。"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit 无法登录到 {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  "Cockpit 无法登录到 {{#strong}}{{host}}{{/strong}}。 为了可以使这个机器可以使用 cockpit， 需要在 {{#strong}}{{host}}{{/strong}} 上的 sshd 配置中启用以下验证方式之一："
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  "Cockpit 无法登录到 {{#strong}}{{host}}{{/strong}}。可以变更以下验证凭证。{{#can_sync}}您也可以尝试{{#sync_link}}同步账号和密码{{/sync_link}}。{{/can_sync}}"
 ],
 "Color": [
  null,
  "颜色"
 ],
 "Comment": [
  null,
  "注释"
 ],
 "Confirm": [
  null,
  "确认"
 ],
 "Connect": [
  null,
  "连接"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "不支持同时连接到超过 {{ limit }} 主机。"
 ],
 "Connecting to the machine": [
  null,
  "正在连接至主机"
 ],
 "Could not contact {{host}}": [
  null,
  "无法联系 {{host}}"
 ],
 "Couldn't connect to the machine": [
  null,
  "不能连接至主机"
 ],
 "Details": [
  null,
  "详情"
 ],
 "Disconnected": [
  null,
  "已断开连接"
 ],
 "Display Language": [
  null,
  "显示语言"
 ],
 "Enter IP address or host name": [
  null,
  "输入 IP 地址或主机名"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  "在这里输入不同的密码意味着将要在每次重新连接该主机时重新输入"
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "加载用户: {{perm_failed}} 出错"
 ],
 "Failed to add machine: $0": [
  null,
  "添加主机失败: $0"
 ],
 "Failed to change password": [
  null,
  "修改密码失败"
 ],
 "Failed to edit machine: $0": [
  null,
  "编辑主机失败: $0"
 ],
 "Fingerprint": [
  null,
  "指纹"
 ],
 "Host": [
  null,
  "主机"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  "为了同步用户，需要登录到 {{#strong}}{{host}}{{/strong}}。"
 ],
 "Incorrect Host Key": [
  null,
  "不正确的主机密钥"
 ],
 "Invalid file permissions": [
  null,
  "无效的文件权限"
 ],
 "Is sshd running on a different port?": [
  null,
  "sshd 是否在一个不同的端口上运行？"
 ],
 "Kerberos Based SSO": [
  null,
  "基于 Kerberos 的 SSO"
 ],
 "Kerberos Ticket": [
  null,
  "Kerberos 权证"
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "以当前登录的用户 {{#default_user}} ({{default_user}}){{/default_user}} 来连接该主机则保留为空。如果输入一个不同的用户名，将总会用那个用户连接该主机。"
 ],
 "Licensed under:": [
  null,
  "授权为："
 ],
 "Log In": [
  null,
  "登录"
 ],
 "Log Out": [
  null,
  "注销"
 ],
 "Log in again": [
  null,
  "重新登录"
 ],
 "Log in to {{host}}": [
  null,
  "登录到 {{host}}"
 ],
 "Login Password": [
  null,
  "登录密码"
 ],
 "Login has escalated admin privileges": [
  null,
  "登录已升级管理员权限"
 ],
 "Machines": [
  null,
  "主机"
 ],
 "New Password": [
  null,
  "新密码"
 ],
 "New password was not accepted": [
  null,
  "新密码不被接受"
 ],
 "No matching files found": [
  null,
  "没有找到匹配的文件"
 ],
 "No such file or directory": [
  null,
  "没有该文件或目录"
 ],
 "Not a valid private key": [
  null,
  "无效的私钥"
 ],
 "Off": [
  null,
  "关"
 ],
 "Ok": [
  null,
  "确认"
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
 "Ooops!": [
  null,
  "糟糕！"
 ],
 "Password": [
  null,
  "密码"
 ],
 "Password not accepted": [
  null,
  "密码未接受"
 ],
 "Password not usable for privileged tasks or to connect to other machines": [
  null,
  "密码对特权任务和连接到其他主机不可用"
 ],
 "Path to file": [
  null,
  "文件路径"
 ],
 "Port": [
  null,
  "端口"
 ],
 "Privileged": [
  null,
  "有特权的"
 ],
 "Project website": [
  null,
  "项目网站"
 ],
 "Prompting via ssh-add timed out": [
  null,
  "通过 ssh-add 提示超时"
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  "通过 ssh-keygen 提示超时"
 ],
 "Public Key": [
  null,
  "公钥"
 ],
 "Reconnect": [
  null,
  "重新连接"
 ],
 "Reuse my password for privileged tasks and to connect to other machines": [
  null,
  "为特权任务和连接其他主机重用我的密码"
 ],
 "Select": [
  null,
  "选择"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "选择您需要与 {{#strong}}{{host}}{{/strong}} 同步的用户"
 ],
 "Synchronize": [
  null,
  "同步"
 ],
 "Synchronize users": [
  null,
  "同步用户"
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  "IP 地址或主机名不能包含空格。"
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  "主机 {{#strong}}{{host}}{{/strong}} 的认证无法完成。确认想要继续连接？"
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  "{{#strong}}{{host}}{{/strong}} 的密钥与之前使用的不匹配。除非该主机最近被替换，否则可能有人正在攻击与该主机的连接。"
 ],
 "The machine is restarting": [
  null,
  "正在重启主机"
 ],
 "The passwords do not match.": [
  null,
  "密码不匹配"
 ],
 "There are currently no active pages": [
  null,
  "当前没有激活的页面"
 ],
 "This machine has already been added.": [
  null,
  "该主机已经被添加。"
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "该版本的 cockpit-ws 不支持连接到有交替的用户或端口的主机"
 ],
 "Tip: Make your key password match your login password to automatically authenticate against other systems.": [
  null,
  "提示：确保您的关键密码匹配登录密码来自动验证其他系统。"
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "为了尝试一个不同的端口，需要把 cockpit-ws 升级到一个新版本。"
 ],
 "Too many files found": [
  null,
  "找到太多文件"
 ],
 "Troubleshoot": [
  null,
  "排错"
 ],
 "Try to reconnect": [
  null,
  "尝试重连"
 ],
 "Type": [
  null,
  "类型"
 ],
 "Type a password": [
  null,
  "输入密码"
 ],
 "Unexpected error": [
  null,
  "意外的错误"
 ],
 "Unknown Host Key": [
  null,
  "未知主机密钥"
 ],
 "Unlock Key": [
  null,
  "解锁密钥"
 ],
 "Update": [
  null,
  "更新"
 ],
 "Use the following keys to authenticate against other systems": [
  null,
  "使用以下密钥来验证其他系统"
 ],
 "User name": [
  null,
  "用户名"
 ],
 "Using available credentials": [
  null,
  "使用可用的凭证"
 ],
 "Version": [
  null,
  "版本"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "已经连接到 {{#strong}}{{host}}{{/strong}}，然而为了同步用户，需要一个特权用户。"
 ],
 "active": [
  null,
  "激活"
 ]
}));
