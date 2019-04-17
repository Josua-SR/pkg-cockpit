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
 "$mtu": [
  null,
  "$mtu"
 ],
 "(Optional)": [
  null,
  ""
 ],
 "1 day": [
  null,
  "1天"
 ],
 "1 hour": [
  null,
  "1小時"
 ],
 "1 week": [
  null,
  "1週"
 ],
 "5 minutes": [
  null,
  "5分鐘"
 ],
 "6 hours": [
  null,
  "6個小時"
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
  "ARP監控"
 ],
 "ARP Ping": [
  null,
  "ARP Ping"
 ],
 "Active": [
  null,
  "啟用"
 ],
 "Active Backup": [
  null,
  "使用中備份工作"
 ],
 "Adaptive load balancing": [
  null,
  "適應性負載平衡"
 ],
 "Adaptive transmit load balancing": [
  null,
  "適應性傳輸負載平衡"
 ],
 "Add $0": [
  null,
  "加 $0"
 ],
 "Add Bond": [
  null,
  "添加債券"
 ],
 "Add Bridge": [
  null,
  "添加橋"
 ],
 "Add Ports": [
  null,
  ""
 ],
 "Add Services": [
  null,
  "添加服務"
 ],
 "Add Team": [
  null,
  "添加團隊"
 ],
 "Add VLAN": [
  null,
  "添加VLAN"
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "添加 <b>$0</b> 將斷開與服務器的連接，並使管理UI不可用。"
 ],
 "Additional DNS $val": [
  null,
  "額外的DNS $val"
 ],
 "Additional DNS Search Domains $val": [
  null,
  "其他DNS搜索域 $val"
 ],
 "Additional address $val": [
  null,
  "另外地址 $val"
 ],
 "Address $val": [
  null,
  "地址 $val"
 ],
 "Addresses": [
  null,
  "位址"
 ],
 "Allowed Services": [
  null,
  "允許的服務"
 ],
 "Apply": [
  null,
  "套用"
 ],
 "Authenticating": [
  null,
  "認證"
 ],
 "Automatic": [
  null,
  "自動"
 ],
 "Automatic (DHCP only)": [
  null,
  "自動（僅限DHCP）"
 ],
 "Automatic (DHCP)": [
  null,
  "自動 (DHCP)"
 ],
 "Balancer": [
  null,
  "平衡器"
 ],
 "Bond": [
  null,
  "綁定網路"
 ],
 "Bond Settings": [
  null,
  "債券設置"
 ],
 "Bridge": [
  null,
  "橋接器"
 ],
 "Bridge Port Settings": [
  null,
  "網橋端口設置"
 ],
 "Bridge Settings": [
  null,
  "橋設置"
 ],
 "Bridge port": [
  null,
  "橋接"
 ],
 "Broadcast": [
  null,
  "廣播"
 ],
 "Broken configuration": [
  null,
  "配置損壞"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Carrier": [
  null,
  "支架"
 ],
 "Change the settings": [
  null,
  "更改設置"
 ],
 "Changing the settings will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "更改設置將中斷與服務器的連接，並使管理UI不可用。"
 ],
 "Checking IP": [
  null,
  "檢查IP"
 ],
 "Close": [
  null,
  "關閉"
 ],
 "Comma-separated ports, ranges, and aliases are accepted": [
  null,
  ""
 ],
 "Configure": [
  null,
  "配置"
 ],
 "Configuring": [
  null,
  "配置"
 ],
 "Configuring IP": [
  null,
  "配置IP"
 ],
 "Connect automatically": [
  null,
  "自動連接"
 ],
 "Connection will be lost": [
  null,
  "連接將丟失"
 ],
 "Create it": [
  null,
  "創造它"
 ],
 "Creating this VLAN will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "創建此VLAN將斷開與服務器的連接，並使管理UI不可用。"
 ],
 "Creating this bond will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "創建此綁定將斷開與服務器的連接，並將使管理UI不可用。"
 ],
 "Creating this bridge will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "創建此網橋將斷開與服務器的連接，並使管理UI不可用。"
 ],
 "Creating this team will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "創建此團隊將斷開與服務器的連接，並使管理UI不可用。"
 ],
 "Custom Ports": [
  null,
  ""
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
  "DNS搜索域"
 ],
 "DNS Search Domains $val": [
  null,
  "DNS搜索域 $val"
 ],
 "Deactivating": [
  null,
  "停用"
 ],
 "Delete": [
  null,
  "刪除"
 ],
 "Delete $0": [
  null,
  "刪除 $0"
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "刪除 <b>$0</b> 將斷開與服務器的連接，並使管理UI不可用。"
 ],
 "Details": [
  null,
  "詳情"
 ],
 "Disabled": [
  null,
  "已停用"
 ],
 "Enable Service": [
  null,
  "啟用服務"
 ],
 "Ethernet MAC": [
  null,
  "以太網MAC"
 ],
 "Ethernet MTU": [
  null,
  "以太網MTU"
 ],
 "Ethtool": [
  null,
  "Ethtool的"
 ],
 "Example: 22,ssh,8080,5900-5910": [
  null,
  ""
 ],
 "Example: 88,2019,nfs,rsync": [
  null,
  ""
 ],
 "Failed": [
  null,
  "失敗"
 ],
 "Filter Services": [
  null,
  "過濾服務"
 ],
 "Firewall": [
  null,
  "防火牆"
 ],
 "Firewall is not available": [
  null,
  "防火牆不可用"
 ],
 "Forward delay $forward_delay": [
  null,
  "轉發延遲 $forward_延遲"
 ],
 "General": [
  null,
  "一般"
 ],
 "Go to now": [
  null,
  "去吧"
 ],
 "Hair Pin mode": [
  null,
  "髮夾模式"
 ],
 "Hairpin mode": [
  null,
  "Hairpin 模式"
 ],
 "Hello time $hello_time": [
  null,
  "你好時間 $hello_時間"
 ],
 "IP Address": [
  null,
  "IP 位址"
 ],
 "IP Settings": [
  null,
  "IP設置"
 ],
 "IPv4": [
  null,
  "IPv4"
 ],
 "IPv4 Settings": [
  null,
  "IPv4 設定"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "IPv6 設定"
 ],
 "Id $id": [
  null,
  "ID $id"
 ],
 "Ignore": [
  null,
  "忽略"
 ],
 "Inactive": [
  null,
  "未啟用"
 ],
 "Interfaces": [
  null,
  "介面"
 ],
 "Invalid address $0": [
  null,
  "無效地址 $0"
 ],
 "Invalid metric $0": [
  null,
  "指標無效 $0"
 ],
 "Invalid port number": [
  null,
  ""
 ],
 "Invalid prefix $0": [
  null,
  "無效的前綴 $0"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "無效的前綴或網絡掩碼 $0"
 ],
 "Invalid range": [
  null,
  ""
 ],
 "Keep connection": [
  null,
  "保持聯繫"
 ],
 "LACP Key": [
  null,
  "LACP密鑰"
 ],
 "Link Monitoring": [
  null,
  "鏈接監控"
 ],
 "Link Watch": [
  null,
  "Link Watch"
 ],
 "Link down delay": [
  null,
  "斷線延遲"
 ],
 "Link local": [
  null,
  "鏈接本地"
 ],
 "Link up delay": [
  null,
  "連線延遲"
 ],
 "Load Balancing": [
  null,
  "負載均衡"
 ],
 "MAC": [
  null,
  "MAC"
 ],
 "MII (Recommended)": [
  null,
  "信息產業部（推薦）"
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "MTU must be a positive number": [
  null,
  "MTU必須是正數"
 ],
 "Manual": [
  null,
  "手動"
 ],
 "Master": [
  null,
  "主"
 ],
 "Maximum message age $max_age": [
  null,
  "最大郵件年齡 $max_年齡"
 ],
 "Members": [
  null,
  "會員"
 ],
 "Mode": [
  null,
  "模式"
 ],
 "Monitoring Interval": [
  null,
  "監控間隔"
 ],
 "Monitoring Targets": [
  null,
  "監控目標"
 ],
 "NSNA Ping": [
  null,
  "NSNA Ping"
 ],
 "Name": [
  null,
  "名稱"
 ],
 "Network devices and graphs require NetworkManager.": [
  null,
  "網絡設備和圖形需要NetworkManager。"
 ],
 "NetworkManager is not running.": [
  null,
  "NetworkManager 並不在執行中。"
 ],
 "Networking": [
  null,
  "網路作業"
 ],
 "Networking Logs": [
  null,
  "網絡日誌"
 ],
 "No": [
  null,
  "否"
 ],
 "No carrier": [
  null,
  "沒有承運人"
 ],
 "No open ports": [
  null,
  "沒有開放的端口"
 ],
 "Not available": [
  null,
  "不存在"
 ],
 "Off": [
  null,
  "關閉"
 ],
 "On": [
  null,
  "開"
 ],
 "Parent": [
  null,
  "父層"
 ],
 "Parent $parent": [
  null,
  "親 $parent"
 ],
 "Part of ": [
  null,
  "部分 "
 ],
 "Passive": [
  null,
  "被動"
 ],
 "Path cost": [
  null,
  "路徑成本"
 ],
 "Path cost $path_cost": [
  null,
  "路徑成本 $path_成本"
 ],
 "Permanent": [
  null,
  "永久"
 ],
 "Ping Interval": [
  null,
  "Ping間隔"
 ],
 "Ping Target": [
  null,
  "Ping目標"
 ],
 "Please install the $0 package": [
  null,
  "請安裝 $0 包"
 ],
 "Port number and type do not match": [
  null,
  ""
 ],
 "Ports": [
  null,
  "連接埠"
 ],
 "Prefix length": [
  null,
  "前綴長度"
 ],
 "Prefix length or Netmask": [
  null,
  "前綴長度或網絡掩碼"
 ],
 "Preparing": [
  null,
  "正在準備"
 ],
 "Preserve": [
  null,
  "保留"
 ],
 "Primary": [
  null,
  "主要"
 ],
 "Priority": [
  null,
  "優先等級"
 ],
 "Priority $priority": [
  null,
  "優先 $priority"
 ],
 "Random": [
  null,
  "隨機"
 ],
 "Range must be strictly ordered": [
  null,
  ""
 ],
 "Reboot": [
  null,
  "重新開機"
 ],
 "Receiving": [
  null,
  "接收中"
 ],
 "Remove $0": [
  null,
  "去掉 $0"
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "刪除 <b>$0</b> 將斷開與服務器的連接，並使管理UI不可用。"
 ],
 "Restoring connection": [
  null,
  "恢復連接"
 ],
 "Round Robin": [
  null,
  "Round Robin"
 ],
 "Routes": [
  null,
  "路線"
 ],
 "Runner": [
  null,
  "跑步者"
 ],
 "STP Forward delay": [
  null,
  "STP前向延遲"
 ],
 "STP Hello time": [
  null,
  "STP你好時間"
 ],
 "STP Maximum message age": [
  null,
  "STP最大消息時間"
 ],
 "STP Priority": [
  null,
  "STP優先權"
 ],
 "Sending": [
  null,
  "傳送中"
 ],
 "Service": [
  null,
  "服務"
 ],
 "Services": [
  null,
  "服務"
 ],
 "Set to": [
  null,
  "調成"
 ],
 "Shared": [
  null,
  "共享"
 ],
 "Spanning Tree Protocol": [
  null,
  "生成樹協議"
 ],
 "Spanning Tree Protocol (STP)": [
  null,
  "生成樹協議（STP）"
 ],
 "Stable": [
  null,
  "穩定"
 ],
 "Start Service": [
  null,
  "開始服務"
 ],
 "Status": [
  null,
  "狀態"
 ],
 "Sticky": [
  null,
  "黏"
 ],
 "Switch off $0": [
  null,
  "關掉 $0"
 ],
 "Switch on $0": [
  null,
  "打開 $0"
 ],
 "Switching off <b>$0</b>  will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "正在關掉 <b>$0</b>  將斷開與服務器的連接，並使管理UI不可用。"
 ],
 "Switching off <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "正在關掉 <b>$0</b> 將斷開與服務器的連接，並使管理UI不可用。"
 ],
 "Switching on <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "開啟 <b>$0</b> 將斷開與服務器的連接，並使管理UI不可用。"
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Team": [
  null,
  "團隊網路"
 ],
 "Team Port": [
  null,
  "團隊連接埠"
 ],
 "Team Port Settings": [
  null,
  "團隊端口設置"
 ],
 "Team Settings": [
  null,
  "團隊設置"
 ],
 "Testing connection": [
  null,
  "測試連接"
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  "用戶 <b>$0</b> 不允許修改網絡設置"
 ],
 "This device cannot be managed here.": [
  null,
  "此設備無法在此處管理。"
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "未預期的錯誤"
 ],
 "Unknown": [
  null,
  "不明"
 ],
 "Unknown \"$0\"": [
  null,
  "未知“$0“"
 ],
 "Unknown configuration": [
  null,
  "配置未知"
 ],
 "Unknown service name": [
  null,
  ""
 ],
 "Unmanaged Interfaces": [
  null,
  "非託管接口"
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
  "VLAN設置"
 ],
 "Waiting": [
  null,
  "正在等待"
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
  "您無權修改防火牆。"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 二進制數據的字節]"
 ],
 "[binary data]": [
  null,
  "[二進制數據]"
 ],
 "[no data]": [
  null,
  "[沒有數據]"
 ],
 "page-title\u0004Networking": [
  null,
  "網路作業"
 ]
}));
