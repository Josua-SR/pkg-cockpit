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
 "Always attach": [
  null,
  "總是"
 ],
 "Apply": [
  null,
  "套用"
 ],
 "Automatically start libvirt on boot": [
  null,
  "在啟動時自動啟動libvirt"
 ],
 "Autostart": [
  null,
  "自動開啟："
 ],
 "Available": [
  null,
  "可用空間"
 ],
 "Boot Order": [
  null,
  "引導順序："
 ],
 "Bus": [
  null,
  "總線"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "更改網絡狀態操作失敗"
 ],
 "CPU Type": [
  null,
  "CPU類型："
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
 "Connecting to Virtualization Service": [
  null,
  "連接虛擬化服務"
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
 "Create Storage Pool": [
  null,
  "創建存儲池"
 ],
 "Create VM": [
  null,
  "創建VM"
 ],
 "Creation of vm $0 failed": [
  null,
  "創建vm $0 失敗"
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
 "Emulated Machine": [
  null,
  "仿真機："
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "應啟用少於最大虛擬CPU數量。"
 ],
 "File": [
  null,
  "檔案"
 ],
 "Filesystem": [
  null,
  "檔案系統"
 ],
 "Filesystem Directory": [
  null,
  "文件系統目錄"
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
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  "獲取HYPERVISOR MAX VCPU操作失敗"
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
 "Host": [
  null,
  "主機"
 ],
 "Host Name": [
  null,
  "主機名稱"
 ],
 "Host should not be empty": [
  null,
  "主持人不應該是空的"
 ],
 "INSTALL VM action failed": [
  null,
  "安裝VM操作失敗"
 ],
 "Immediately Start VM": [
  null,
  "立即啟動VM"
 ],
 "Install": [
  null,
  "安裝"
 ],
 "Installation Source": [
  null,
  "安裝源"
 ],
 "Installation Source Type": [
  null,
  "安裝源類型"
 ],
 "Installation Source should not be empty": [
  null,
  "安裝源不應為空"
 ],
 "Invalid filename": [
  null,
  "無效的文件名"
 ],
 "Launch Remote Viewer": [
  null,
  "啟動Remote Viewer"
 ],
 "Loading ...": [
  null,
  "正在載入..."
 ],
 "MAC Address": [
  null,
  "MAC 位址"
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
 "Memory should be positive number": [
  null,
  "記憶應該是正數"
 ],
 "MiB": [
  null,
  "MiB"
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
 "Name": [
  null,
  "名稱"
 ],
 "Name should not be empty": [
  null,
  "名稱不應為空"
 ],
 "Name should not consist of empty characters only": [
  null,
  "名稱不應僅包含空字符"
 ],
 "Network File System": [
  null,
  "網絡文件系統"
 ],
 "Network Type": [
  null,
  "網絡類型"
 ],
 "Network settings could not be saved": [
  null,
  "無法保存網絡設置"
 ],
 "Networks": [
  null,
  "網路"
 ],
 "New Volume Name": [
  null,
  "新卷名稱"
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "沒有為此存儲池定義存儲卷"
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
 "No matching files found": [
  null,
  "找不到匹配的文件"
 ],
 "No network interfaces defined for this VM": [
  null,
  "沒有為此VM定義的網絡接口"
 ],
 "No storage pool is defined on this host": [
  null,
  "此主機上未定義存儲池"
 ],
 "No virtual networks": [
  null,
  "沒有虛擬網絡"
 ],
 "OS Vendor": [
  null,
  "OS供應商"
 ],
 "Operating System": [
  null,
  "作業系統"
 ],
 "Overview": [
  null,
  "簡介"
 ],
 "Path on host's filesystem": [
  null,
  "主機文件系統上的路徑"
 ],
 "Path to ISO file on host's file system": [
  null,
  "主機文件系統上ISO文件的路徑"
 ],
 "Path to file": [
  null,
  "文件路徑"
 ],
 "Persistence": [
  null,
  "持續卷"
 ],
 "Please enter new volume name": [
  null,
  "請輸入新的捲名"
 ],
 "Please enter new volume size": [
  null,
  "請輸入新的捲大小"
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "請啟動虛擬機以訪問其控制台。"
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
 "Protocol": [
  null,
  "協定"
 ],
 "QEMU/KVM System connection": [
  null,
  "QEMU / KVM系統連接"
 ],
 "QEMU/KVM User connection": [
  null,
  "QEMU / KVM用戶連接"
 ],
 "Readonly": [
  null,
  "唯讀"
 ],
 "Reconnect": [
  null,
  "重新連接"
 ],
 "Remote URL": [
  null,
  "遠程URL"
 ],
 "Restart": [
  null,
  "重新啟動"
 ],
 "Run": [
  null,
  "執行"
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
 "Source Path": [
  null,
  "來源路徑"
 ],
 "Source path should not be empty": [
  null,
  "源路徑不應為空"
 ],
 "Source should start with https, ftp or nfs protocol": [
  null,
  "源應該以http，ftp或nfs協議開頭"
 ],
 "Start libvirt": [
  null,
  "啟動libvirt"
 ],
 "Start pool when host boots": [
  null,
  "主機啟動時啟動池"
 ],
 "Start the VM to see disk statistics.": [
  null,
  "啟動VM以查看磁盤統計信息。"
 ],
 "Startup": [
  null,
  "啟動"
 ],
 "State": [
  null,
  "狀態"
 ],
 "Storage Pool Name": [
  null,
  "存儲池名稱"
 ],
 "Storage Pool failed to be created": [
  null,
  "存儲池無法創建"
 ],
 "Storage Pools": [
  null,
  "存儲池"
 ],
 "Storage Size": [
  null,
  "存儲大小"
 ],
 "Storage Size should not be negative number": [
  null,
  "存儲大小不應為負數"
 ],
 "Storage Volumes": [
  null,
  "存儲卷"
 ],
 "System": [
  null,
  "系統"
 ],
 "Target Path": [
  null,
  "目標路徑"
 ],
 "Target path should not be empty": [
  null,
  "目標路徑不應為空"
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
 "The directory on the server being exported": [
  null,
  "正在導出的服務器上的目錄"
 ],
 "The pool is empty": [
  null,
  "游泳池是空的"
 ],
 "Threads per core": [
  null,
  "每個核心的線程"
 ],
 "Too many files found": [
  null,
  "找到的文件太多"
 ],
 "Troubleshoot": [
  null,
  "疑難排解"
 ],
 "Type": [
  null,
  "類型"
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unique name": [
  null,
  "唯一名稱"
 ],
 "Unplug": [
  null,
  "拔"
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  "升級到更新版本的libvirt以查看磁盤統計信息"
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
 "VM CHANGE_NETWORK_STATE action failed": [
  null,
  "VM CHANGE_NETWORK_STATE操作失敗"
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  "VM DELETE（DESTROY）操作失敗"
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  "VM DELETE（UNDEFINE）操作失敗"
 ],
 "VM DELETE action failed": [
  null,
  "VM DELETE操作失敗"
 ],
 "VM DETACH_DISK action failed": [
  null,
  "VM DETACH_DISK操作失敗"
 ],
 "VM FORCE OFF action failed": [
  null,
  "VM FORCE OFF操作失敗"
 ],
 "VM FORCE REBOOT action failed": [
  null,
  "VM FORCE REBOOT操作失敗"
 ],
 "VM REBOOT action failed": [
  null,
  "VM REBOOT操作失敗"
 ],
 "VM SEND Non-Maskable Interrrupt action failed": [
  null,
  "VM SEND不可屏蔽中斷操作失敗"
 ],
 "VM SENDNMI action failed": [
  null,
  "VM SENDNMI操作失敗"
 ],
 "VM SHUT DOWN action failed": [
  null,
  "VM SHUT DOWN操作失敗"
 ],
 "VM START action failed": [
  null,
  "VM START操作失敗"
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
 "Virtual Machines": [
  null,
  "虛擬機器"
 ],
 "Virtualization Service (libvirt) is Not Active": [
  null,
  "虛擬化服務（libvirt）未激活"
 ],
 "Virtualization Service is Available": [
  null,
  "虛擬化服務可用"
 ],
 "Volume": [
  null,
  "音量"
 ],
 "active": [
  null,
  "活性"
 ],
 "bridge": [
  null,
  "橋"
 ],
 "cdrom": [
  null,
  "cdrom"
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
 "ethernet": [
  null,
  "以太網絡"
 ],
 "host": [
  null,
  "主機"
 ],
 "hostdev": [
  null,
  "hostdev"
 ],
 "idle": [
  null,
  "閒"
 ],
 "inactive": [
  null,
  "待用"
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
 "other": [
  null,
  "其他"
 ],
 "paused": [
  null,
  "已暫停"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "原始"
 ],
 "running": [
  null,
  "執行中"
 ],
 "server": [
  null,
  "服務器"
 ],
 "show less": [
  null,
  "顯示較少"
 ],
 "show more": [
  null,
  "顯示更多"
 ],
 "shut off": [
  null,
  "關閉"
 ],
 "shutdown": [
  null,
  "關掉"
 ],
 "suspended (PM)": [
  null,
  "暫停（PM）"
 ],
 "udp": [
  null,
  "udp"
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
