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
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 適用於大多數操作系統。要安裝它，請在GNOME軟件中搜索它或運行以下命令："
 ],
 "$0 vCPU Details": [
  null,
  "$0 vCPU詳細信息"
 ],
 "Action": [
  null,
  "動作"
 ],
 "Add": [
  null,
  "加入"
 ],
 "Add Disk": [
  null,
  "添加磁盤"
 ],
 "Address": [
  null,
  "位址"
 ],
 "Address:": [
  null,
  "位址："
 ],
 "All running virtual machines will be turned off.": [
  null,
  "將關閉所有正在運行的虛擬機。"
 ],
 "Always attach": [
  null,
  ""
 ],
 "Apply": [
  null,
  "套用"
 ],
 "Automatically selected host": [
  null,
  "自動選擇主機"
 ],
 "Autostart": [
  null,
  ""
 ],
 "Available": [
  null,
  "可用空間"
 ],
 "Base Template": [
  null,
  "基本模板"
 ],
 "Base template": [
  null,
  "基本模板"
 ],
 "Base template:": [
  null,
  "基本模板："
 ],
 "Boot Order": [
  null,
  ""
 ],
 "Boot order settings could not be saved": [
  null,
  ""
 ],
 "Bus": [
  null,
  "總線"
 ],
 "CPU Type": [
  null,
  ""
 ],
 "CREATE VM action failed": [
  null,
  "CREATE VM操作失敗"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Capacity": [
  null,
  "容量"
 ],
 "Changes will take effect after shutting down the VM": [
  null,
  "關閉VM後，更改將生效"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "單擊“啟動遠程查看器”將下載.vv文件並啟動 $0。"
 ],
 "Cluster": [
  null,
  "叢集"
 ],
 "Cluster Templates": [
  null,
  "群集模板"
 ],
 "Cluster Virtual Machines": [
  null,
  "群集虛擬機"
 ],
 "Confirm migration": [
  null,
  "確認遷移"
 ],
 "Confirm reload:": [
  null,
  "確認重新加載："
 ],
 "Confirm save:": [
  null,
  "確認保存："
 ],
 "Connect to oVirt Engine": [
  null,
  "連接到oVirt引擎"
 ],
 "Connect with any $0 viewer application.": [
  null,
  "與任何人聯繫 $0 查看器應用。"
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "連接任何SPICE或VNC查看器應用程序。"
 ],
 "Connecting": [
  null,
  "連線中"
 ],
 "Connection": [
  null,
  "連線"
 ],
 "Console Type": [
  null,
  "控制台類型"
 ],
 "Consoles": [
  null,
  "控制台"
 ],
 "Cores per socket": [
  null,
  "每個插槽的核心數"
 ],
 "Create": [
  null,
  "建立"
 ],
 "Create New": [
  null,
  "新建"
 ],
 "Create New VM": [
  null,
  "創建新VM"
 ],
 "Create VM": [
  null,
  "創建VM"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "Delete": [
  null,
  "刪除"
 ],
 "Delete associated storage files:": [
  null,
  "刪除關聯的存儲文件："
 ],
 "Description": [
  null,
  "說明"
 ],
 "Description:": [
  null,
  "描述："
 ],
 "Device": [
  null,
  "裝置"
 ],
 "Disconnect": [
  null,
  "斷線"
 ],
 "Disconnected": [
  null,
  "已離線"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  "斷開與串行控制台的連接。單擊“重新連接”按鈕。"
 ],
 "Disk $0 fail to get detached from VM $1": [
  null,
  ""
 ],
 "Disk failed to be attached": [
  null,
  "磁槃無法連接"
 ],
 "Disk failed to be created": [
  null,
  "磁槃無法創建"
 ],
 "Disks": [
  null,
  "磁盤"
 ],
 "Download the MSI from $0": [
  null,
  "從中下載MSI $0"
 ],
 "Edit": [
  null,
  "編輯"
 ],
 "Edit the vdsm.conf": [
  null,
  "編輯vdsm.conf"
 ],
 "Emulated Machine": [
  null,
  ""
 ],
 "Enter New VM name": [
  null,
  "輸入新VM名稱"
 ],
 "FORCEOFF action failed: $0": [
  null,
  ""
 ],
 "FQDN": [
  null,
  "FQDN"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "應啟用少於最大虛擬CPU數量。"
 ],
 "File": [
  null,
  "檔案"
 ],
 "Force Restart": [
  null,
  "強制重啟"
 ],
 "Force Shut Down": [
  null,
  "強制關機"
 ],
 "Format": [
  null,
  "格式"
 ],
 "GiB": [
  null,
  "GiB"
 ],
 "Graphics Console (VNC)": [
  null,
  "圖形控制台（VNC）"
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  "Desktop Viewer中的圖形控制台"
 ],
 "HA": [
  null,
  "HA"
 ],
 "HA:": [
  null,
  "哈："
 ],
 "Host": [
  null,
  "主機"
 ],
 "Host to Maintenance": [
  null,
  "主持維護"
 ],
 "Install": [
  null,
  "安裝"
 ],
 "Interface Type": [
  null,
  ""
 ],
 "Launch Remote Viewer": [
  null,
  "啟動Remote Viewer"
 ],
 "Loading ...": [
  null,
  "正在載入..."
 ],
 "Loading data ...": [
  null,
  "加載數據中 ..."
 ],
 "MAC Address": [
  null,
  "MAC 位址"
 ],
 "MIGRATE action failed": [
  null,
  "MIGRATE操作失敗"
 ],
 "Mac": [
  null,
  ""
 ],
 "Mac Address": [
  null,
  "MAC地址"
 ],
 "Manual Connection": [
  null,
  "手動連接"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "為guest虛擬機操作系統分配的最大虛擬CPU數，必須介於1和1之間 $0"
 ],
 "Memory": [
  null,
  "記憶體"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Migrate To:": [
  null,
  "遷移到："
 ],
 "Model": [
  null,
  "型號"
 ],
 "Model type": [
  null,
  "型號類型"
 ],
 "More Information": [
  null,
  "更多信息"
 ],
 "NIC $0 of VM $1 failed to change state": [
  null,
  ""
 ],
 "Name": [
  null,
  "名稱"
 ],
 "Network Interfaces": [
  null,
  ""
 ],
 "Network interface settings could not be saved": [
  null,
  ""
 ],
 "New Volume Name": [
  null,
  "新卷名稱"
 ],
 "No VM found in oVirt.": [
  null,
  "在oVirt中找不到虛擬機。"
 ],
 "No VM is running or defined on this host": [
  null,
  "此主機上未運行或定義VM"
 ],
 "No boot device found": [
  null,
  "找不到啟動設備"
 ],
 "No console defined for this virtual machine.": [
  null,
  "沒有為此虛擬機定義的控制台。"
 ],
 "No disks defined for this VM": [
  null,
  "沒有為此VM定義磁盤"
 ],
 "No network interfaces defined for this VM": [
  null,
  "沒有為此VM定義的網絡接口"
 ],
 "No oVirt connection": [
  null,
  "沒有oVirt連接"
 ],
 "No virtual networks": [
  null,
  "沒有虛擬網絡"
 ],
 "None (Isolated Network)": [
  null,
  ""
 ],
 "Number of virtual CPUs that gonna be used.": [
  null,
  "要使用的虛擬CPU數量。"
 ],
 "OK": [
  null,
  "確定"
 ],
 "OS": [
  null,
  "作業系統"
 ],
 "OS Type:": [
  null,
  "操作類型："
 ],
 "Ok": [
  null,
  "確定"
 ],
 "Open": [
  null,
  ""
 ],
 "Optimized for:": [
  null,
  "優化："
 ],
 "Overview": [
  null,
  "簡介"
 ],
 "Path": [
  null,
  "路徑"
 ],
 "Pause": [
  null,
  ""
 ],
 "Persistence": [
  null,
  ""
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  "請確認，主機應切換到維護模式。"
 ],
 "Please enter new volume name": [
  null,
  "請輸入新的捲名"
 ],
 "Please enter new volume size": [
  null,
  "請輸入新的捲大小"
 ],
 "Please provide fully qualified domain name and port of the oVirt engine.": [
  null,
  "請提供oVirt引擎的完全合格的域名和端口。"
 ],
 "Please provide valid oVirt engine fully qualified domain name (FQDN) and port (443 by default)": [
  null,
  "請提供有效的oVirt引擎完全限定域名（FQDN）和端口（默認為443）"
 ],
 "Please refer to oVirt's $0 for more information about Remote Viewer setup.": [
  null,
  "請參考oVirt的 $0 有關Remote Viewer設置的更多信息。"
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "請啟動虛擬機以訪問其控制台。"
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  "請等待，直到從服務器加載VM列表。"
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  "請等到服務器加載模板列表。"
 ],
 "Plug": [
  null,
  "插頭"
 ],
 "Pool": [
  null,
  "集池"
 ],
 "Port": [
  null,
  "連接埠"
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  "要向guest虛擬機公開的首選套接字數。"
 ],
 "Preparing for Maintenance": [
  null,
  "準備維護"
 ],
 "Private": [
  null,
  ""
 ],
 "Product": [
  null,
  ""
 ],
 "Protocol": [
  null,
  "協定"
 ],
 "REBOOT action failed": [
  null,
  "REBOOT操作失敗"
 ],
 "REBOOT_VM action failed: %s0": [
  null,
  ""
 ],
 "Readonly": [
  null,
  "唯讀"
 ],
 "Reconnect": [
  null,
  "重新連接"
 ],
 "Register oVirt": [
  null,
  "註冊oVirt"
 ],
 "Registering oVirt to Cockpit": [
  null,
  "將oVirt註冊到駕駛艙"
 ],
 "Reload": [
  null,
  "重新載入"
 ],
 "Restart": [
  null,
  "重新啟動"
 ],
 "Resume": [
  null,
  ""
 ],
 "Run": [
  null,
  "執行"
 ],
 "Run Here": [
  null,
  "跑到這裡"
 ],
 "Run when host boots": [
  null,
  ""
 ],
 "Running Since:": [
  null,
  "運行自："
 ],
 "SET VCPU SETTINGS action failed": [
  null,
  "SET VCPU SETTINGS操作失敗"
 ],
 "SHUTDOWN action failed": [
  null,
  "SHUTDOWN操作失敗"
 ],
 "SPICE": [
  null,
  "SPICE"
 ],
 "SPICE Address:": [
  null,
  "SPICE地址："
 ],
 "SPICE Port:": [
  null,
  "SPICE端口："
 ],
 "SPICE TLS Port:": [
  null,
  "SPICE TLS端口："
 ],
 "START action failed": [
  null,
  "START操作失敗"
 ],
 "START_VM action failed: %s0": [
  null,
  ""
 ],
 "SUSPEND action failed": [
  null,
  "SUSPEND操作失敗"
 ],
 "Save": [
  null,
  "儲存"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  "發送不可屏蔽中斷"
 ],
 "Send key": [
  null,
  "發送密鑰"
 ],
 "Serial Console": [
  null,
  "串行控制台"
 ],
 "Session": [
  null,
  "作業階段"
 ],
 "Shut Down": [
  null,
  "關機"
 ],
 "Size": [
  null,
  "大小"
 ],
 "Sockets": [
  null,
  "插槽"
 ],
 "Source": [
  null,
  "來源"
 ],
 "State": [
  null,
  "狀態"
 ],
 "Stateless": [
  null,
  "無狀態"
 ],
 "Stateless:": [
  null,
  "無狀態："
 ],
 "Suspend": [
  null,
  "暫停"
 ],
 "Switch Host to Maintenance": [
  null,
  "將主機切換到維護"
 ],
 "Switching host to maintenance mode failed. Received error: ": [
  null,
  "將主機切換到維護模式失敗。收到錯誤： "
 ],
 "Switching host to maintenance mode in progress ...": [
  null,
  "將主機切換到正在進行的維護模式"
 ],
 "System": [
  null,
  "系統"
 ],
 "Target": [
  null,
  "目標"
 ],
 "Template": [
  null,
  "範本"
 ],
 "Templates": [
  null,
  "範本"
 ],
 "Templates of $0 cluster": [
  null,
  "的模板 $0 簇"
 ],
 "The VM crashed.": [
  null,
  "虛擬機崩潰了。"
 ],
 "The VM is down.": [
  null,
  "虛擬機已關閉。"
 ],
 "The VM is going down.": [
  null,
  "VM正在下降。"
 ],
 "The VM is idle.": [
  null,
  "VM處於空閒狀態。"
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  "VM正在進行死亡（關閉或崩潰未完成）。"
 ],
 "The VM is paused.": [
  null,
  "VM已暫停。"
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  "VM正在運行，在刪除之前將被強制關閉。"
 ],
 "The VM is running.": [
  null,
  "VM正在運行。"
 ],
 "The VM is suspended by guest power management.": [
  null,
  "客戶端電源管理暫停VM。"
 ],
 "The pool is empty": [
  null,
  "游泳池是空的"
 ],
 "This host is managed by a virtualization manager, so creation of new VMs from the host is not possible.": [
  null,
  "該主機由虛擬化管理器管理，因此無法從主機創建新VM。"
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  "該虛擬機不受oVirt管理"
 ],
 "Threads per core": [
  null,
  "每個核心的線程"
 ],
 "Type": [
  null,
  "類型"
 ],
 "Type ID": [
  null,
  ""
 ],
 "Unit": [
  null,
  "單位"
 ],
 "Unplug": [
  null,
  "拔"
 ],
 "Usage": [
  null,
  "使用方法"
 ],
 "Use Existing": [
  null,
  "利用現有的"
 ],
 "Used": [
  null,
  "已使用"
 ],
 "VCPU settings could not be saved": [
  null,
  "無法保存VCPU設置"
 ],
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "VDSM服務管理"
 ],
 "VM $0 failed to Reboot": [
  null,
  ""
 ],
 "VM $0 failed to force Reboot": [
  null,
  ""
 ],
 "VM $0 failed to force shutdown": [
  null,
  ""
 ],
 "VM $0 failed to get deleted": [
  null,
  ""
 ],
 "VM $0 failed to get installed": [
  null,
  ""
 ],
 "VM $0 failed to pause": [
  null,
  ""
 ],
 "VM $0 failed to resume": [
  null,
  ""
 ],
 "VM $0 failed to send NMI": [
  null,
  ""
 ],
 "VM $0 failed to shutdown": [
  null,
  ""
 ],
 "VM $0 failed to start": [
  null,
  ""
 ],
 "VM icon": [
  null,
  "VM圖標"
 ],
 "VNC": [
  null,
  "VNC"
 ],
 "VNC Address:": [
  null,
  "VNC地址："
 ],
 "VNC Port:": [
  null,
  "VNC端口："
 ],
 "VNC TLS Port:": [
  null,
  "VNC TLS端口："
 ],
 "Vendor": [
  null,
  "供應商"
 ],
 "Version": [
  null,
  "版本"
 ],
 "Version num": [
  null,
  "版本號"
 ],
 "Virtual Machines": [
  null,
  "虛擬機器"
 ],
 "Virtual Machines of $0 cluster": [
  null,
  "虛擬機 $0 簇"
 ],
 "Volume": [
  null,
  "音量"
 ],
 "WWPN": [
  null,
  ""
 ],
 "bridge": [
  null,
  "橋"
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "connecting": [
  null,
  "連線中"
 ],
 "cores": [
  null,
  "核心"
 ],
 "crashed": [
  null,
  "墜毀"
 ],
 "custom": [
  null,
  "習慣"
 ],
 "direct": [
  null,
  "直接"
 ],
 "disabled": [
  null,
  "已停用"
 ],
 "disk": [
  null,
  "磁碟"
 ],
 "down": [
  null,
  "down"
 ],
 "dying": [
  null,
  "垂死"
 ],
 "enabled": [
  null,
  "已啟用"
 ],
 "error": [
  null,
  "錯誤"
 ],
 "ethernet": [
  null,
  "以太網絡"
 ],
 "host": [
  null,
  "主機"
 ],
 "host device": [
  null,
  ""
 ],
 "hostdev": [
  null,
  "hostdev"
 ],
 "idle": [
  null,
  "閒"
 ],
 "initializing": [
  null,
  "初始化"
 ],
 "installation failed": [
  null,
  "安裝失敗"
 ],
 "installing OS": [
  null,
  "安裝OS"
 ],
 "kdumping": [
  null,
  "kdumping"
 ],
 "maintenance": [
  null,
  "保養"
 ],
 "mcast": [
  null,
  "MCAST"
 ],
 "network": [
  null,
  "網絡"
 ],
 "no": [
  null,
  "否"
 ],
 "non operational": [
  null,
  "不運作"
 ],
 "non responsive": [
  null,
  "沒有回應"
 ],
 "oVirt": [
  null,
  "oVirt"
 ],
 "oVirt Host State:": [
  null,
  "oVirt東道國："
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  "由於缺少參數，oVirt Provider安裝腳本失敗。"
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  "oVirt Provider安裝腳本失敗：無法寫入/etc/cockpit/machines-ovirt.config，請以root身份嘗試。"
 ],
 "oVirt installation script failed with following output: ": [
  null,
  "oVirt安裝腳本失敗，輸出如下： "
 ],
 "oVirt login in progress": [
  null,
  "oVirt登錄正在進行中"
 ],
 "paused": [
  null,
  "已暫停"
 ],
 "pending approval": [
  null,
  "待批准"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "原始"
 ],
 "reboot": [
  null,
  "重新啟動"
 ],
 "redirected device": [
  null,
  ""
 ],
 "running": [
  null,
  "執行中"
 ],
 "server": [
  null,
  "服務器"
 ],
 "shut off": [
  null,
  "關閉"
 ],
 "shutdown": [
  null,
  "關掉"
 ],
 "sockets": [
  null,
  "插座"
 ],
 "suspended (PM)": [
  null,
  "暫停（PM）"
 ],
 "threads": [
  null,
  "線程"
 ],
 "udp": [
  null,
  "udp"
 ],
 "unassigned": [
  null,
  "未分配"
 ],
 "undefined": [
  null,
  "未定義"
 ],
 "up": [
  null,
  "up"
 ],
 "user": [
  null,
  "使用者"
 ],
 "vCPU Count": [
  null,
  "vCPU計數"
 ],
 "vCPU Maximum": [
  null,
  "vCPU最大值"
 ],
 "vCPUs": [
  null,
  "vCPUs"
 ],
 "vhostuser": [
  null,
  "vhostuser"
 ],
 "yes": [
  null,
  "是"
 ]
}));
