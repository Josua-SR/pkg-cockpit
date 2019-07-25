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
 "$mtu": [
  null,
  "$mtu"
 ],
 "(Optional)": [
  null,
  "(可选)"
 ],
 "(default)": [
  null,
  "（默认）"
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
 "802.3ad": [
  null,
  "802.3ad"
 ],
 "802.3ad LACP": [
  null,
  "802.3ad LACP"
 ],
 "ARP": [
  null,
  "ARP"
 ],
 "ARP Monitoring": [
  null,
  "ARP 监控"
 ],
 "ARP Ping": [
  null,
  "ARP Ping"
 ],
 "Active": [
  null,
  "激活"
 ],
 "Active Backup": [
  null,
  "激活备份"
 ],
 "Active zones": [
  null,
  "活动区域"
 ],
 "Adaptive load balancing": [
  null,
  "自适应负载均衡"
 ],
 "Adaptive transmit load balancing": [
  null,
  "自适应传输负载均衡"
 ],
 "Add $0": [
  null,
  "添加 $0"
 ],
 "Add Bond": [
  null,
  "添加绑定"
 ],
 "Add Bridge": [
  null,
  "添加网桥"
 ],
 "Add Ports": [
  null,
  "添加端口"
 ],
 "Add Services": [
  null,
  "添加服务"
 ],
 "Add Team": [
  null,
  "添加组"
 ],
 "Add VLAN": [
  null,
  "添加 VLAN"
 ],
 "Add Zone": [
  null,
  "添加区域"
 ],
 "Add ports to the following zones:": [
  null,
  "把端口添加到以下域："
 ],
 "Add services to following zones:": [
  null,
  "把服务添加到以下区："
 ],
 "Add zone": [
  null,
  "添加区域"
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "添加 <b>$0</b> 将会中断与服务器的连接，并且将导致管理界面不可用。"
 ],
 "Additional DNS $val": [
  null,
  "额外的 DNS $val"
 ],
 "Additional DNS Search Domains $val": [
  null,
  "额外的 DNS 搜索域 $val"
 ],
 "Additional address $val": [
  null,
  "额外的地址 $val"
 ],
 "Address $val": [
  null,
  "地址 $val"
 ],
 "Addresses": [
  null,
  "地址"
 ],
 "Allowed Addresses": [
  null,
  "允许的地址"
 ],
 "Allowed Services": [
  null,
  "允许的服务"
 ],
 "Apply": [
  null,
  "应用"
 ],
 "Authenticating": [
  null,
  "验证中"
 ],
 "Automatic": [
  null,
  "自动"
 ],
 "Automatic (DHCP only)": [
  null,
  "自动 (仅 DHCP)"
 ],
 "Automatic (DHCP)": [
  null,
  "自动 (DHCP)"
 ],
 "Balancer": [
  null,
  "平衡器"
 ],
 "Bond": [
  null,
  "绑定"
 ],
 "Bond Settings": [
  null,
  "绑定设置"
 ],
 "Bridge": [
  null,
  "网桥"
 ],
 "Bridge Port Settings": [
  null,
  "网桥端口设置"
 ],
 "Bridge Settings": [
  null,
  "网桥设置"
 ],
 "Bridge port": [
  null,
  "网桥端口"
 ],
 "Broadcast": [
  null,
  "广播"
 ],
 "Broken configuration": [
  null,
  "错误的配置"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Carrier": [
  null,
  "载体"
 ],
 "Change the settings": [
  null,
  "修改设置"
 ],
 "Changing the settings will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "修改设置将会中断与服务器的连接，并将导致管理界面不可用。"
 ],
 "Checking IP": [
  null,
  "正在检查 IP"
 ],
 "Close": [
  null,
  "关闭"
 ],
 "Comma-separated ports, ranges, and aliases are accepted": [
  null,
  "可以使用逗号隔开的端口、范围和别名"
 ],
 "Configure": [
  null,
  "配置"
 ],
 "Configuring": [
  null,
  "配置中"
 ],
 "Configuring IP": [
  null,
  "正在配置 IP"
 ],
 "Connect automatically": [
  null,
  "自动连接"
 ],
 "Connection will be lost": [
  null,
  "连接将丢失"
 ],
 "Create it": [
  null,
  "创建它"
 ],
 "Creating this VLAN will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "创建该 VLAN 将会中断与服务器的连接，并且将会导致管理界面不可用。"
 ],
 "Creating this bond will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "创建该绑定将会断开与服务器的连接，并且将会使管理界面不能访问。"
 ],
 "Creating this bridge will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "创建该网桥将会中断与服务器的连接，并且将会导致管理界面不可用。"
 ],
 "Creating this team will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "创建该组将断开与服务器的连接，并且将会导致管理界面不可用。"
 ],
 "Custom Ports": [
  null,
  "自定义端口"
 ],
 "Custom zones": [
  null,
  "自定义区域"
 ],
 "DNS": [
  null,
  "DNS"
 ],
 "DNS $val": [
  null,
  "DNS $val"
 ],
 "DNS Search Domains": [
  null,
  "DNS 搜索域"
 ],
 "DNS Search Domains $val": [
  null,
  "DNS 搜索域 $val"
 ],
 "Deactivating": [
  null,
  "取消激活中"
 ],
 "Delete": [
  null,
  "删除"
 ],
 "Delete $0": [
  null,
  "删除 $0"
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "删除 <b>$0</b> 将会中断与服务器的连接，并且将会导致管理界面不可用。"
 ],
 "Description": [
  null,
  "描述"
 ],
 "Details": [
  null,
  "详情"
 ],
 "Disabled": [
  null,
  "禁用"
 ],
 "Enable Service": [
  null,
  "启用服务"
 ],
 "Entire subnet": [
  null,
  "整个子网"
 ],
 "Ethernet MAC": [
  null,
  "以太网 MAC"
 ],
 "Ethernet MTU": [
  null,
  "以太网 MTU"
 ],
 "Ethtool": [
  null,
  "Ethtool"
 ],
 "Example: 22,ssh,8080,5900-5910": [
  null,
  "例如: 22,ssh,8080,5900-5910"
 ],
 "Example: 88,2019,nfs,rsync": [
  null,
  "例如: 88,2019,nfs,rsync"
 ],
 "Failed": [
  null,
  "已失败"
 ],
 "Failed to add port": [
  null,
  "添加端口失败"
 ],
 "Failed to add service": [
  null,
  "添加服务失败"
 ],
 "Failed to add zone": [
  null,
  "添加区域失败"
 ],
 "Failed to remove service": [
  null,
  "删除服务失败"
 ],
 "Filter Services": [
  null,
  "过滤服务"
 ],
 "Firewall": [
  null,
  "防火墙"
 ],
 "Firewall is not available": [
  null,
  "防火墙不可用"
 ],
 "Forward delay $forward_delay": [
  null,
  "转发延迟 $forward_delay"
 ],
 "General": [
  null,
  "通用"
 ],
 "Go to now": [
  null,
  "转到现在"
 ],
 "Hair Pin mode": [
  null,
  "发夹模式"
 ],
 "Hairpin mode": [
  null,
  "发夹模式"
 ],
 "Hello time $hello_time": [
  null,
  "Hello 时间 $hello_time"
 ],
 "IP Address": [
  null,
  "IP 地址"
 ],
 "IP Range": [
  null,
  "IP 地址范围"
 ],
 "IP Settings": [
  null,
  "IP 设置"
 ],
 "IPv4": [
  null,
  "IPv4"
 ],
 "IPv4 Settings": [
  null,
  "IPv4 设置"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "IPv6 设置"
 ],
 "Id $id": [
  null,
  "Id $id"
 ],
 "Ignore": [
  null,
  "忽略"
 ],
 "Inactive": [
  null,
  "未激活"
 ],
 "Included services": [
  null,
  "包括的服务"
 ],
 "Interfaces": [
  null,
  "接口"
 ],
 "Invalid address $0": [
  null,
  "无效的地址 $0"
 ],
 "Invalid metric $0": [
  null,
  "无效的度量 $0"
 ],
 "Invalid port number": [
  null,
  "无效的端口号"
 ],
 "Invalid prefix $0": [
  null,
  "无效的前缀 $0"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "无效的前缀或掩码 $0"
 ],
 "Invalid range": [
  null,
  "无效范围"
 ],
 "Keep connection": [
  null,
  "保持连接"
 ],
 "LACP Key": [
  null,
  "LACP 密钥"
 ],
 "Link Monitoring": [
  null,
  "链路监控"
 ],
 "Link Watch": [
  null,
  "侦测连接状态"
 ],
 "Link down delay": [
  null,
  "链路断开延时"
 ],
 "Link local": [
  null,
  "本地链路"
 ],
 "Link up delay": [
  null,
  "链路启用延时"
 ],
 "Load Balancing": [
  null,
  "负载均衡"
 ],
 "MAC": [
  null,
  "MAC"
 ],
 "MII (Recommended)": [
  null,
  "MII (推荐)"
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "MTU must be a positive number": [
  null,
  "MTU 必须是正整数"
 ],
 "Manual": [
  null,
  "手动"
 ],
 "Master": [
  null,
  "主"
 ],
 "Maximum message age $max_age": [
  null,
  "最大消息有效期 $max_age"
 ],
 "Mode": [
  null,
  "模式"
 ],
 "Monitoring Interval": [
  null,
  "监控间隔"
 ],
 "Monitoring Targets": [
  null,
  "监控目标"
 ],
 "NSNA Ping": [
  null,
  "NSNA Ping"
 ],
 "Name": [
  null,
  "名称"
 ],
 "Network devices and graphs require NetworkManager.": [
  null,
  "网络设备和图形需要 NetworkManager。"
 ],
 "NetworkManager is not running.": [
  null,
  "NetworkManager 没有运行。"
 ],
 "Networking": [
  null,
  "网络"
 ],
 "Networking Logs": [
  null,
  "网络日志"
 ],
 "No": [
  null,
  "否"
 ],
 "No active zones": [
  null,
  "没有活动区域"
 ],
 "No carrier": [
  null,
  "无载体"
 ],
 "No description available": [
  null,
  "没有可用描述"
 ],
 "No open ports": [
  null,
  "没有开放的端口"
 ],
 "None": [
  null,
  "无"
 ],
 "Not available": [
  null,
  "不可用"
 ],
 "Parent": [
  null,
  "父"
 ],
 "Parent $parent": [
  null,
  "父 $parent"
 ],
 "Part of ": [
  null,
  "部分"
 ],
 "Passive": [
  null,
  "被动"
 ],
 "Path cost": [
  null,
  "路径开销"
 ],
 "Path cost $path_cost": [
  null,
  "路径开销 $path_cost"
 ],
 "Permanent": [
  null,
  "永久的"
 ],
 "Ping Interval": [
  null,
  "Ping 周期"
 ],
 "Ping Target": [
  null,
  "Ping 目标"
 ],
 "Please install the $0 package": [
  null,
  "请安装 $0 软件包"
 ],
 "Port number and type do not match": [
  null,
  "端口号和类型不匹配"
 ],
 "Ports": [
  null,
  "端口"
 ],
 "Prefix length": [
  null,
  "前缀长度"
 ],
 "Prefix length or Netmask": [
  null,
  "前缀长度或网络掩码"
 ],
 "Preparing": [
  null,
  "准备中"
 ],
 "Preserve": [
  null,
  "保留"
 ],
 "Primary": [
  null,
  "主"
 ],
 "Priority": [
  null,
  "优先级"
 ],
 "Priority $priority": [
  null,
  "优先级 $priority"
 ],
 "Random": [
  null,
  "随机"
 ],
 "Range": [
  null,
  "范围"
 ],
 "Range must be strictly ordered": [
  null,
  "范围必须排序"
 ],
 "Reboot": [
  null,
  "重启"
 ],
 "Receiving": [
  null,
  "接收中"
 ],
 "Remove $0": [
  null,
  "移除 $0"
 ],
 "Remove service": [
  null,
  "删除服务"
 ],
 "Remove service from zones": [
  null,
  "从区中删除服务"
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "移除  <b>$0</b> 将断开与服务器的连接，并将导致管理界面不可用。"
 ],
 "Restoring connection": [
  null,
  "恢复连接"
 ],
 "Round Robin": [
  null,
  "轮循"
 ],
 "Routes": [
  null,
  "路由"
 ],
 "Runner": [
  null,
  "运行者"
 ],
 "STP Forward delay": [
  null,
  "STP 转发延迟"
 ],
 "STP Hello time": [
  null,
  "STP Hello 时间"
 ],
 "STP Maximum message age": [
  null,
  "STP 最大消息有效期"
 ],
 "STP Priority": [
  null,
  "STP 优先级"
 ],
 "Sending": [
  null,
  "发送中"
 ],
 "Service": [
  null,
  "服务"
 ],
 "Services": [
  null,
  "服务"
 ],
 "Set to": [
  null,
  "设置为"
 ],
 "Shared": [
  null,
  "共享"
 ],
 "Sorted from least trusted to most trusted": [
  null,
  "按最不被信任到最被信任的顺序排序"
 ],
 "Spanning Tree Protocol": [
  null,
  "生成树协议"
 ],
 "Spanning Tree Protocol (STP)": [
  null,
  "生成树协议 (STP)"
 ],
 "Stable": [
  null,
  "稳定的"
 ],
 "Start Service": [
  null,
  "启动服务"
 ],
 "Status": [
  null,
  "状态"
 ],
 "Sticky": [
  null,
  "Sticky"
 ],
 "Switch off $0": [
  null,
  "关掉 $0"
 ],
 "Switch on $0": [
  null,
  "打开 $0"
 ],
 "Switching off <b>$0</b>  will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "关掉 <b>$0</b>  将中断与服务器的连接，并将导致管理界面不可用。"
 ],
 "Switching off <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "关掉 <b>$0</b> 将中断与服务器的连接，并将导致管理界面不可用。"
 ],
 "Switching on <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "打开 <b>$0</b> 将中断与服务器的连接，并将导致管理界面不可用。"
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Team": [
  null,
  "组"
 ],
 "Team Port": [
  null,
  "组端口"
 ],
 "Team Port Settings": [
  null,
  "组端口设置"
 ],
 "Team Settings": [
  null,
  "组设置"
 ],
 "Testing connection": [
  null,
  "测试连接"
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  "用户 <b>$0</b> 不允许修改网络设置"
 ],
 "This device cannot be managed here.": [
  null,
  "该设备不能在这里被管理。"
 ],
 "Trust level": [
  null,
  "信任级别"
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "意外的错误"
 ],
 "Unknown": [
  null,
  "未知"
 ],
 "Unknown \"$0\"": [
  null,
  "未知 \"$0\""
 ],
 "Unknown configuration": [
  null,
  "未知配置"
 ],
 "Unknown service name": [
  null,
  "未知的服务名"
 ],
 "Unmanaged Interfaces": [
  null,
  "未管理的接口"
 ],
 "VLAN": [
  null,
  "VLAN"
 ],
 "VLAN Id": [
  null,
  "VLAN Id"
 ],
 "VLAN Settings": [
  null,
  "VLAN 设置"
 ],
 "Waiting": [
  null,
  "等待中"
 ],
 "XOR": [
  null,
  "XOR"
 ],
 "Yes": [
  null,
  "是"
 ],
 "You are not authorized to modify the firewall.": [
  null,
  "您无权修改防火墙。"
 ],
 "Zone": [
  null,
  "区域"
 ],
 "Zones": [
  null,
  "区域"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 字节二进制数据]"
 ],
 "[binary data]": [
  null,
  "[二进制数据]"
 ],
 "[no data]": [
  null,
  "[没有数据]"
 ],
 "show less": [
  null,
  "显示更少"
 ],
 "show more": [
  null,
  "显示更多"
 ],
 "page-title\u0004Networking": [
  null,
  "网络"
 ]
}));
