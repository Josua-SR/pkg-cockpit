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
 "Absent": [
  null,
  "缺席"
 ],
 "Add": [
  null,
  "添加"
 ],
 "Add Machine to Dashboard": [
  null,
  "把机器添加到仪表板"
 ],
 "Address": [
  null,
  "地址"
 ],
 "Advanced TCA": [
  null,
  "高级 TCA"
 ],
 "All In One": [
  null,
  "多合一"
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
 "Avatar": [
  null,
  "头像"
 ],
 "Blade": [
  null,
  "刀片"
 ],
 "Blade enclosure": [
  null,
  "刀片机箱"
 ],
 "Bus Expansion Chassis": [
  null,
  "总线扩展机箱"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Can't load image": [
  null,
  "无法加载镜像"
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
  "Cockpit 无法与指定主机 $0 联系。请确认已经在端口 $1 上运行 SSH，或者在地址中指定另一个端口。"
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
 "Compact PCI": [
  null,
  "紧凑型 PCI"
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
  "可转换"
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
  "桌面"
 ],
 "Detachable": [
  null,
  "可拆开"
 ],
 "Disk I/O": [
  null,
  "磁盘 I/O"
 ],
 "Docking Station": [
  null,
  "Docking Station"
 ],
 "Dual Rank": [
  null,
  "Dual Rank"
 ],
 "Edit Server": [
  null,
  "编辑服务器"
 ],
 "Embedded PC": [
  null,
  "嵌入式 PC"
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
  "扩展机箱"
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
 "Go to now": [
  null,
  "转到现在"
 ],
 "Hand Held": [
  null,
  "手持"
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
  "IoT 网关"
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
  "笔记本电脑"
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
  "低调桌面"
 ],
 "Lunch Box": [
  null,
  "主机类型"
 ],
 "Main Server Chassis": [
  null,
  "主服务器机箱"
 ],
 "Memory": [
  null,
  "内存"
 ],
 "Mini PC": [
  null,
  "迷你电脑"
 ],
 "Mini Tower": [
  null,
  "迷你塔式主机"
 ],
 "Multi-system Chassis": [
  null,
  "多系统机箱"
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
  "笔记本"
 ],
 "Old password not accepted": [
  null,
  "旧密码不被接受"
 ],
 "Other": [
  null,
  "其他"
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
  "外设机箱"
 ],
 "Pizza Box": [
  null,
  "披萨盒"
 ],
 "Port": [
  null,
  "端口"
 ],
 "Portable": [
  null,
  "手提"
 ],
 "Present": [
  null,
  "当前"
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
  "RAID 机箱"
 ],
 "Rack Mount Chassis": [
  null,
  "机架式机箱"
 ],
 "Sealed-case PC": [
  null,
  "密封式 PC"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "选择您需要与 {{#strong}}{{host}}{{/strong}} 同步的用户"
 ],
 "Servers": [
  null,
  "服务器"
 ],
 "Set": [
  null,
  "设置"
 ],
 "Single Rank": [
  null,
  "Single Rank"
 ],
 "Space-saving Computer": [
  null,
  "节省空间的计算机"
 ],
 "Stick PC": [
  null,
  "Stick PC"
 ],
 "Sub Chassis": [
  null,
  "子机箱"
 ],
 "Sub Notebook": [
  null,
  "子笔记本"
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
  "平板"
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
  "为了尝试一个不同的端口，需要把 cockpit-ws 升级到一个新版本。"
 ],
 "Tower": [
  null,
  "Tower"
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
 ]
}));
