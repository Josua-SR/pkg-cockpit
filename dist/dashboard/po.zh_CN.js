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
  "x-generator": "Zanata 4.5.0"
 },
 "$0 day": [
  "$0 days",
  "$0 天"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 小时"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 分钟"
 ],
 "$0 month": [
  "$0 months",
  "$0 月"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 周"
 ],
 "$0 year": [
  "$0 years",
  "$0 年"
 ],
 "1 day": [
  null,
  "1 天"
 ],
 "1 hour": [
  null,
  "1 小时"
 ],
 "1 week": [
  null,
  "1 周"
 ],
 "5 minutes": [
  null,
  "5 分钟"
 ],
 "6 hours": [
  null,
  "6 小时"
 ],
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "{{#strong}}{{host}}{{/strong}} 上未安装一个兼容版本的 Cockpit。"
 ],
 "Add": [
  null,
  "添加"
 ],
 "Add Machine to Dashboard": [
  null,
  "添加主机到仪表板"
 ],
 "Address": [
  null,
  "地址"
 ],
 "Advanced TCA": [
  null,
  ""
 ],
 "All In One": [
  null,
  ""
 ],
 "Authentication": [
  null,
  "认证"
 ],
 "Authentication Failed": [
  null,
  "认证失败"
 ],
 "Available": [
  null,
  "可用的"
 ],
 "Avatar": [
  null,
  "替身"
 ],
 "Blade": [
  null,
  ""
 ],
 "Blade enclosure": [
  null,
  ""
 ],
 "Bus Expansion Chassis": [
  null,
  ""
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Can't load image": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Checking for public keys": [
  null,
  "检查公钥"
 ],
 "Close": [
  null,
  "关闭"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit 无法与指定主机 $0 联系。请确认已经在端口 $1 上运行 SSH，或者在该地址中指定另一个端口。"
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
  "Cockpit 无法登录到 {{#strong}}{{host}}{{/strong}}。 {{#can_sync}}也许想要尝试 {{#sync_link}}同步用户{{/sync_link}}。{{/can_sync}} 更多认证选项和排错支持，请更新 cockpit-ws 到一个新版本。"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit 无法登录到 {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  "Cockpit 无法登录到 {{#strong}}{{host}}{{/strong}}。 To use this machine with cockpit 需要在 {{#strong}}{{host}}{{/strong}} 上的 sshd 配置中启用以下认证方式其中之一 来使用该主机的 Cockpit:"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  "Cockpit 无法登录到 {{#strong}}{{host}}{{/strong}}。可以变更以下认证凭证。{{#can_sync}}也许想要 {{#sync_link}}同步账号和密码{{/sync_link}}.{{/can_sync}}"
 ],
 "Color": [
  null,
  "颜色"
 ],
 "Compact PCI": [
  null,
  ""
 ],
 "Connect": [
  null,
  "连接"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "不支持同时连接到超过 {{ limit }} 主机。"
 ],
 "Connection Error": [
  null,
  "连接错误"
 ],
 "Convertible": [
  null,
  ""
 ],
 "Could not contact {{host}}": [
  null,
  "无法联系 {{host}}"
 ],
 "Dashboard": [
  null,
  "仪表板"
 ],
 "Desktop": [
  null,
  ""
 ],
 "Detachable": [
  null,
  ""
 ],
 "Disk I/O": [
  null,
  "磁盘 读/写"
 ],
 "Docking Station": [
  null,
  ""
 ],
 "Edit Server": [
  null,
  "编辑服务器"
 ],
 "Embedded PC": [
  null,
  ""
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
 "Expansion Chassis": [
  null,
  ""
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
  "指印"
 ],
 "Go to now": [
  null,
  "转到现在"
 ],
 "Hand Held": [
  null,
  ""
 ],
 "Host Name": [
  null,
  "主机名"
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
 "IoT Gateway": [
  null,
  ""
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
 "Laptop": [
  null,
  ""
 ],
 "Leave blank to connect to this machine as the currently logged in user. If you enter a different username, that user will always be used when connecting to this machine.": [
  null,
  "以当前登录用户来连接到该主机则保留为空。如果输入另一个用户名，连接到该主机时通常将会使用该用户。"
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "以当前登录的用户 {{#default_user}} ({{default_user}}){{/default_user}} 来连接该主机则保留为空。如果输入一个不同的用户名，将总会用那个用户连接该主机。"
 ],
 "Log In": [
  null,
  "登录"
 ],
 "Log in to {{host}}": [
  null,
  "登录到 {{host}}"
 ],
 "Login Password": [
  null,
  "登录密码"
 ],
 "Lost connection. Trying to reconnect": [
  null,
  "连接失败。请重新连接"
 ],
 "Low Profile Desktop": [
  null,
  ""
 ],
 "Lunch Box": [
  null,
  ""
 ],
 "Main Server Chassis": [
  null,
  ""
 ],
 "Memory": [
  null,
  "内存"
 ],
 "Mini PC": [
  null,
  ""
 ],
 "Mini Tower": [
  null,
  ""
 ],
 "Multi-system Chassis": [
  null,
  ""
 ],
 "Network": [
  null,
  "网络"
 ],
 "New password was not accepted": [
  null,
  "新密码不被接受"
 ],
 "No such file or directory": [
  null,
  "没有该文件或目录"
 ],
 "Not a valid private key": [
  null,
  "无效的私钥"
 ],
 "Notebook": [
  null,
  ""
 ],
 "Off": [
  null,
  "关"
 ],
 "Old password not accepted": [
  null,
  "旧密码不被接受"
 ],
 "On": [
  null,
  "开"
 ],
 "Other": [
  null,
  ""
 ],
 "Password": [
  null,
  "密码"
 ],
 "Password not accepted": [
  null,
  "密码未接受"
 ],
 "Peripheral Chassis": [
  null,
  ""
 ],
 "Pizza Box": [
  null,
  ""
 ],
 "Port": [
  null,
  "端口"
 ],
 "Portable": [
  null,
  ""
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
 "RAID Chassis": [
  null,
  ""
 ],
 "Rack Mount Chassis": [
  null,
  ""
 ],
 "Sealed-case PC": [
  null,
  ""
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "选择你想要与 {{#strong}}{{host}}{{/strong}} 同步的用户"
 ],
 "Servers": [
  null,
  "服务器"
 ],
 "Set": [
  null,
  "设置"
 ],
 "Space-saving Computer": [
  null,
  ""
 ],
 "Stick PC": [
  null,
  ""
 ],
 "Sub Chassis": [
  null,
  ""
 ],
 "Sub Notebook": [
  null,
  ""
 ],
 "Synchronize": [
  null,
  "同步"
 ],
 "Synchronize users": [
  null,
  "同步用户"
 ],
 "Tablet": [
  null,
  ""
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
 "The passwords do not match.": [
  null,
  "密码不匹配"
 ],
 "The user <b>$0</b> is not permitted to manage servers": [
  null,
  "用户 <b>$0</b> 不允许管理服务器"
 ],
 "This machine has already been added.": [
  null,
  "该主机已经被添加。"
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "该版本的 cockpit-ws 不支持连接到有交替的用户或端口的主机"
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "需要更新 cockpit-ws 到一个新版本来尝试一个不同的端口。"
 ],
 "Tower": [
  null,
  ""
 ],
 "Type a password": [
  null,
  "输入密码"
 ],
 "Unknown": [
  null,
  "未知"
 ],
 "Unknown Host Key": [
  null,
  "未知主机密钥"
 ],
 "Update": [
  null,
  "更新"
 ],
 "User": [
  null,
  "用户"
 ],
 "User name": [
  null,
  "用户名"
 ],
 "Using available credentials": [
  null,
  "使用可用的凭证"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "已经连接到 {{#strong}}{{host}}{{/strong}}，然而为了同步用户，需要一个特权用户。"
 ],
 "You are currently connected directly to this server. You cannot delete it.": [
  null,
  "您当前已直接连接到该服务器。您不能删除它。"
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  "可以通过使用以下命令来移除之前保存的密钥"
 ]
}));
