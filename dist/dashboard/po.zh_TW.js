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
  "language": "zh_TW",
  "x-generator": "Zanata 4.6.2"
 },
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
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "未安裝兼容版本的Cockpit {{#strong}}{{host}}{{/strong}}。"
 ],
 "Add": [
  null,
  "加入"
 ],
 "Add Machine to Dashboard": [
  null,
  "將機器添加到儀表板"
 ],
 "Address": [
  null,
  "位址"
 ],
 "Advanced TCA": [
  null,
  "高級TCA"
 ],
 "All In One": [
  null,
  "一體"
 ],
 "Authentication": [
  null,
  "核對"
 ],
 "Authentication Failed": [
  null,
  "身份驗證失敗"
 ],
 "Available": [
  null,
  "可用空間"
 ],
 "Avatar": [
  null,
  "阿凡達"
 ],
 "Blade": [
  null,
  "刀"
 ],
 "Blade enclosure": [
  null,
  "刀片機箱"
 ],
 "Bus Expansion Chassis": [
  null,
  "總線擴展機箱"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Can't load image": [
  null,
  "無法加載圖片"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Checking for public keys": [
  null,
  "檢查公鑰"
 ],
 "Close": [
  null,
  "關閉"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "駕駛艙無法聯繫給定的主人 $0。確保它在端口上運行ssh $1, ，或在地址中指定另一個端口。"
 ],
 "Cockpit is not installed": [
  null,
  "沒有安裝駕駛艙"
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  "駕駛艙無法聯繫 {{#strong}}{{host}}{{/strong}}。"
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  "駕駛艙無法登錄 {{#strong}}{{host}}{{/strong}}。 {{#can_sync}}你可能想嘗試 {{#sync_link}}同步用戶{{/sync_link}}。{{/can_sync}} 有關更多身份驗證選項和故障排除支持，請將cockpit-ws升級到更新版本。"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "駕駛艙無法登錄 {{#strong}}{{host}}{{/strong}}。"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  "駕駛艙無法登錄 {{#strong}}{{host}}{{/strong}}。要將此計算機與駕駛艙一起使用，您需要在sshd config中啟用以下身份驗證方法之一 {{#strong}}{{host}}{{/strong}}："
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  "駕駛艙無法登錄 {{#strong}}{{host}}{{/strong}}。您可以在下面更改身份驗證憑據。 {{#can_sync}}你可能更喜歡 {{#sync_link}}同步帳戶和密碼{{/sync_link}}。{{/can_sync}}"
 ],
 "Color": [
  null,
  "顏色"
 ],
 "Compact PCI": [
  null,
  "緊湊型PCI"
 ],
 "Connect": [
  null,
  "連接"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "同時連接到多個 {{ limit }} 機器不受支持。"
 ],
 "Connection Error": [
  null,
  "連接錯誤"
 ],
 "Convertible": [
  null,
  "可兌換"
 ],
 "Could not contact {{host}}": [
  null,
  "無法聯繫 {{host}}"
 ],
 "Dashboard": [
  null,
  "控制面板"
 ],
 "Desktop": [
  null,
  "桌面環境"
 ],
 "Detachable": [
  null,
  "可拆開"
 ],
 "Disk I/O": [
  null,
  "磁碟 I/O"
 ],
 "Docking Station": [
  null,
  "停靠站"
 ],
 "Edit Server": [
  null,
  "編輯服務器"
 ],
 "Embedded PC": [
  null,
  "嵌入式PC"
 ],
 "Enter IP address or host name": [
  null,
  "輸入IP地址或主機名"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  "在此輸入不同的密碼意味著每次重新連接本機時都需要重新輸入密碼"
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "加載用戶時出錯： {{perm_failed}}"
 ],
 "Expansion Chassis": [
  null,
  "擴展機箱"
 ],
 "Failed to add machine: $0": [
  null,
  "添加機器失敗： $0"
 ],
 "Failed to change password": [
  null,
  "無法更改密碼"
 ],
 "Failed to edit machine: $0": [
  null,
  "無法編輯機器： $0"
 ],
 "Fingerprint": [
  null,
  "指紋"
 ],
 "Go to now": [
  null,
  "去吧"
 ],
 "Hand Held": [
  null,
  "手持"
 ],
 "Host Name": [
  null,
  "主機名稱"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  "要同步用戶，您需要登錄 {{#strong}}{{host}}{{/strong}}。"
 ],
 "Incorrect Host Key": [
  null,
  "主機密鑰不正確"
 ],
 "Invalid file permissions": [
  null,
  "文件權限無效"
 ],
 "IoT Gateway": [
  null,
  "物聯網網關"
 ],
 "Is sshd running on a different port?": [
  null,
  "sshd是否在不同的端口上運行？"
 ],
 "Kerberos Based SSO": [
  null,
  "基於Kerberos的SSO"
 ],
 "Kerberos Ticket": [
  null,
  "Kerberos票證"
 ],
 "Laptop": [
  null,
  "筆記本電腦"
 ],
 "Leave blank to connect to this machine as the currently logged in user. If you enter a different username, that user will always be used when connecting to this machine.": [
  null,
  "留空以連接到當前登錄用戶的本機。如果輸入其他用戶名，則在連接到此計算機時將始終使用該用戶。"
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "留空以連接到當前登錄用戶的本機{{#default_user}} （{{default_user}}）{{/default_user}}。如果輸入其他用戶名，將始終使用該用戶連接到此計算機。"
 ],
 "Log In": [
  null,
  "登入"
 ],
 "Log in to {{host}}": [
  null,
  "登錄到 {{host}}"
 ],
 "Login Password": [
  null,
  "登錄密碼"
 ],
 "Lost connection. Trying to reconnect": [
  null,
  "失去了連接。試圖重新連接"
 ],
 "Low Profile Desktop": [
  null,
  "低調桌面"
 ],
 "Lunch Box": [
  null,
  "午餐盒"
 ],
 "Main Server Chassis": [
  null,
  "主服務器機箱"
 ],
 "Memory": [
  null,
  "記憶體"
 ],
 "Mini PC": [
  null,
  "迷你電腦"
 ],
 "Mini Tower": [
  null,
  "迷你塔"
 ],
 "Multi-system Chassis": [
  null,
  "多系統機箱"
 ],
 "Network": [
  null,
  "網路"
 ],
 "New password was not accepted": [
  null,
  "不接受新密碼"
 ],
 "No such file or directory": [
  null,
  "沒有相應的文件和目錄"
 ],
 "Not a valid private key": [
  null,
  "不是有效的私鑰"
 ],
 "Notebook": [
  null,
  "筆記本"
 ],
 "Old password not accepted": [
  null,
  "舊密碼不被接受"
 ],
 "Other": [
  null,
  "其它"
 ],
 "Password": [
  null,
  "密碼"
 ],
 "Password not accepted": [
  null,
  "密碼不被接受"
 ],
 "Peripheral Chassis": [
  null,
  "外圍機箱"
 ],
 "Pizza Box": [
  null,
  "披薩盒"
 ],
 "Port": [
  null,
  "連接埠"
 ],
 "Portable": [
  null,
  "手提"
 ],
 "Prompting via ssh-add timed out": [
  null,
  "提示通過ssh-add超時"
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  "通過ssh-keygen提示超時"
 ],
 "Public Key": [
  null,
  "公鑰"
 ],
 "RAID Chassis": [
  null,
  "RAID機箱"
 ],
 "Rack Mount Chassis": [
  null,
  "機架式機箱"
 ],
 "Sealed-case PC": [
  null,
  "密封式PC"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "選擇您要與之同步的用戶 {{#strong}}{{host}}{{/strong}}"
 ],
 "Servers": [
  null,
  "伺服器"
 ],
 "Set": [
  null,
  "設置"
 ],
 "Space-saving Computer": [
  null,
  "節省空間的計算機"
 ],
 "Stick PC": [
  null,
  "堅持使用PC"
 ],
 "Sub Chassis": [
  null,
  "子機箱"
 ],
 "Sub Notebook": [
  null,
  "子筆記本"
 ],
 "Synchronize": [
  null,
  "同步"
 ],
 "Synchronize users": [
  null,
  "同步用戶"
 ],
 "Tablet": [
  null,
  "面板"
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  "IP地址或主機名不能包含空格。"
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  "主機的真實性 {{#strong}}{{host}}{{/strong}} 無法建立。您確定要繼續連接嗎？"
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  "關鍵 {{#strong}}{{host}}{{/strong}} 與之前使用的密鑰不匹配。除非最近更換了這台機器，否則有人可能會試圖攻擊您與此機器的連接。"
 ],
 "The passwords do not match.": [
  null,
  "密碼兩者不相符。"
 ],
 "The user <b>$0</b> is not permitted to manage servers": [
  null,
  "用戶 <b>$0</b> 不允許管理服務器"
 ],
 "This machine has already been added.": [
  null,
  "這台機器已經添加。"
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "此版本的cockpit-ws不支持使用備用用戶或端口連接到主機"
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "要嘗試不同的端口，您需要將cockpit-ws升級到更新的版本。"
 ],
 "Tower": [
  null,
  "塔"
 ],
 "Type a password": [
  null,
  "輸入一個密碼"
 ],
 "Unknown": [
  null,
  "不明"
 ],
 "Unknown Host Key": [
  null,
  "未知的主機密鑰"
 ],
 "Update": [
  null,
  "更新"
 ],
 "User": [
  null,
  "使用者"
 ],
 "User name": [
  null,
  "使用者名稱"
 ],
 "Using available credentials": [
  null,
  "使用可用的憑據"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "你已經連接到了 {{#strong}}{{host}}{{/strong}}, 但是，為了同步用戶，需要具有超級用戶權限的用戶。"
 ],
 "You are currently connected directly to this server. You cannot delete it.": [
  null,
  "您當前直接連接到此服務器。你無法刪除它。"
 ]
}));
