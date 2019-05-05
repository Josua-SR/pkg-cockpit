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
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Network": [
  null,
  ""
 ],
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 大多数操作系统可用。为了安装它，请在 GNOME 中搜索它，或运行以下命令： "
 ],
 "Activate": [
  null,
  "激活"
 ],
 "Add": [
  null,
  "添加"
 ],
 "Add Disk": [
  null,
  "添加磁盘"
 ],
 "Address": [
  null,
  "地址"
 ],
 "Address:": [
  null,
  "地址："
 ],
 "Always attach": [
  null,
  "保证连接"
 ],
 "Apply": [
  null,
  "应用"
 ],
 "Automatically start libvirt on boot": [
  null,
  "在引导时自动启动 libvirt"
 ],
 "Autostart": [
  null,
  "自动启动"
 ],
 "Available": [
  null,
  "可用的"
 ],
 "Boot Order": [
  null,
  "启动顺序"
 ],
 "Boot order settings could not be saved": [
  null,
  "无法保存启动顺序"
 ],
 "Bus": [
  null,
  "总线"
 ],
 "CPU Type": [
  null,
  "CPU类型"
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
  "改变生效需要关机。"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "点击 \"启动 Remote Viewer\" 将下载一个  .vv 文件并加载 $0。"
 ],
 "Connect with any $0 viewer application.": [
  null,
  "使用任何 $0 查看器应用来连接。"
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "使用任何 SPICE 或 VNC 查看器应用来连接。"
 ],
 "Connecting": [
  null,
  "连接"
 ],
 "Connecting to Virtualization Service": [
  null,
  "连接虚拟化服务"
 ],
 "Connection": [
  null,
  "连接"
 ],
 "Console Type": [
  null,
  "控制台类型"
 ],
 "Consoles": [
  null,
  "控制台"
 ],
 "Cores per socket": [
  null,
  "每个插槽的内核数"
 ],
 "Create": [
  null,
  "创建"
 ],
 "Create New": [
  null,
  "新建"
 ],
 "Create Storage Pool": [
  null,
  "创建存储池"
 ],
 "Create VM": [
  null,
  "创建虚拟机"
 ],
 "Creation of VM $0 failed": [
  null,
  "虚拟机$0创建失败"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "DHCP Range": [
  null,
  "DHCP 范围"
 ],
 "Deactivate": [
  null,
  "取消激活"
 ],
 "Delete": [
  null,
  "删除"
 ],
 "Delete Content": [
  null,
  "删除内容"
 ],
 "Delete Storage Pool $0": [
  null,
  "删除存储池$0"
 ],
 "Delete associated storage files:": [
  null,
  "删除关联的存储文件："
 ],
 "Delete the Volumes inside this Pool": [
  null,
  "删除这个存储池中的卷"
 ],
 "Deleting an inactive Storage Pool will only undefine the Pool. Its content will not be deleted.": [
  null,
  "删除一个不活跃的池指挥取消定义这个池，而不会删除其数据"
 ],
 "Device": [
  null,
  "设备"
 ],
 "Disconnect": [
  null,
  "断开"
 ],
 "Disconnected": [
  null,
  "已断开连接"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  "从串行控制台断开连接。单击“重新连接”按钮。"
 ],
 "Disk $0 fail to get detached from VM $1": [
  null,
  "磁盘$0无法从虚拟机$1上分离"
 ],
 "Disk failed to be attached": [
  null,
  "挂载磁盘失败"
 ],
 "Disk failed to be created": [
  null,
  "创建磁盘失败"
 ],
 "Disks": [
  null,
  "磁盘"
 ],
 "Download the MSI from $0": [
  null,
  "从 $0 下载 MSI"
 ],
 "Edit": [
  null,
  "编辑"
 ],
 "Emulated Machine": [
  null,
  ""
 ],
 "Existing Disk Image": [
  null,
  "现有磁盘镜像"
 ],
 "Existing disk image on host's file system": [
  null,
  ""
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "启用的虚拟 CPU 数量应少于最大虚拟 CPU 数量。"
 ],
 "File": [
  null,
  "文件"
 ],
 "Filesystem Directory": [
  null,
  "文件系统目录"
 ],
 "Force Restart": [
  null,
  "强制重启"
 ],
 "Force Shut Down": [
  null,
  "强制关机"
 ],
 "Format": [
  null,
  "格式化"
 ],
 "Forwarding mode": [
  null,
  ""
 ],
 "General": [
  null,
  "通用"
 ],
 "GiB": [
  null,
  "GiB"
 ],
 "Graphics Console (VNC)": [
  null,
  "图形控制台（VNC）"
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  "Desktop Viewer 中的图形控制台"
 ],
 "Host": [
  null,
  "主机"
 ],
 "Host Device": [
  null,
  ""
 ],
 "Host Name": [
  null,
  "主机名"
 ],
 "Host should not be empty": [
  null,
  "主机不能为空"
 ],
 "IPv4 Address": [
  null,
  "IPv4 地址"
 ],
 "IPv6 Address": [
  null,
  "IPv6 地址"
 ],
 "Immediately Start VM": [
  null,
  "立即启动 VM"
 ],
 "In most configurations, macvtap does not work for host to guest network communication.": [
  null,
  "在多数配置中，macvtap 不能为主机到客户机的网络通信工作。"
 ],
 "Install": [
  null,
  "安装"
 ],
 "Installation Source": [
  null,
  "安装源"
 ],
 "Installation Source Type": [
  null,
  "安装源类型"
 ],
 "Installation Source should not be empty": [
  null,
  "安装源不应为空"
 ],
 "Interface Type": [
  null,
  "接口类型"
 ],
 "Invalid filename": [
  null,
  "无效的文件名"
 ],
 "Isolated Network": [
  null,
  "隔离的网络"
 ],
 "Launch Remote Viewer": [
  null,
  "加载 Remote Viewer"
 ],
 "Loading ...": [
  null,
  "加载中......"
 ],
 "Local Install Media": [
  null,
  "本地安装介质"
 ],
 "MAC Address": [
  null,
  "MAC 地址"
 ],
 "Mac": [
  null,
  "Mac"
 ],
 "Mac Address": [
  null,
  "MAC 地址"
 ],
 "Manual Connection": [
  null,
  "手动连接"
 ],
 "Maximum Transmission Unit": [
  null,
  ""
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "为客户机操作系统分配的最大虚拟 CPU 数，必须介于 1 和 $0 之间"
 ],
 "Memory": [
  null,
  "内存"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Model": [
  null,
  "型号"
 ],
 "Model type": [
  null,
  "型号类型"
 ],
 "More Information": [
  null,
  "更多信息"
 ],
 "NAT to $0": [
  null,
  ""
 ],
 "NIC $0 of VM $1 failed to change state": [
  null,
  ""
 ],
 "Name": [
  null,
  "名称"
 ],
 "Name should not be empty": [
  null,
  "名称不应为空"
 ],
 "Name: ": [
  null,
  ""
 ],
 "Netmask": [
  null,
  ""
 ],
 "Network $0 failed to get activated": [
  null,
  ""
 ],
 "Network $0 failed to get deactivated": [
  null,
  ""
 ],
 "Network Boot (PXE)": [
  null,
  ""
 ],
 "Network File System": [
  null,
  "网络文件系统"
 ],
 "Network Interfaces": [
  null,
  ""
 ],
 "Network Selection does not support PXE.": [
  null,
  ""
 ],
 "Network interface settings could not be saved": [
  null,
  ""
 ],
 "Networks": [
  null,
  "网络"
 ],
 "New Volume Name": [
  null,
  "新卷名称"
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "没有为这个存储池定义存储卷"
 ],
 "No VM is running or defined on this host": [
  null,
  "该主机上没有定义或运行虚拟机。"
 ],
 "No boot device found": [
  null,
  "没有找到引导设备"
 ],
 "No console defined for this virtual machine.": [
  null,
  "没有为该虚拟机定义控制台。"
 ],
 "No disks defined for this VM": [
  null,
  "没有为该虚拟机定义磁盘"
 ],
 "No matching files found": [
  null,
  "没有找到匹配的文件"
 ],
 "No network interfaces defined for this VM": [
  null,
  "没有为此 VM 定义网络接口"
 ],
 "No network is defined on this host": [
  null,
  ""
 ],
 "No storage pool is defined on this host": [
  null,
  "没有在这个主机上定义存储池"
 ],
 "No virtual networks": [
  null,
  "没有虚拟网络"
 ],
 "None (Isolated Network)": [
  null,
  ""
 ],
 "OS Vendor": [
  null,
  "操作系统厂商"
 ],
 "One or more selected volumes are used by domains. Detach the disks first to allow volume deletion.": [
  null,
  ""
 ],
 "Open": [
  null,
  ""
 ],
 "Operating System": [
  null,
  "操作系统"
 ],
 "Overview": [
  null,
  "概览"
 ],
 "Path": [
  null,
  "路径"
 ],
 "Path on host's filesystem": [
  null,
  "主机文件系统上的路径"
 ],
 "Path to ISO file on host's file system": [
  null,
  "主机文件系统中到 ISO 文件的路径"
 ],
 "Path to file": [
  null,
  "文件路径"
 ],
 "Pause": [
  null,
  ""
 ],
 "Persistence": [
  null,
  ""
 ],
 "Persistent": [
  null,
  ""
 ],
 "Please enter new volume name": [
  null,
  "请输入新的卷名"
 ],
 "Please enter new volume size": [
  null,
  "请输入新的卷大小"
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "请启动虚拟机来访问其控制台。"
 ],
 "Plug": [
  null,
  "插"
 ],
 "Pool": [
  null,
  "池"
 ],
 "Port": [
  null,
  "端口"
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  "向客户机公开的首选插槽数。"
 ],
 "Prefix": [
  null,
  ""
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
  "协议"
 ],
 "QEMU/KVM System connection": [
  null,
  "QEMU/KVM 系统连接"
 ],
 "QEMU/KVM User connection": [
  null,
  "QEMU/KVM 用户连接"
 ],
 "Readonly": [
  null,
  "只读"
 ],
 "Reconnect": [
  null,
  "重新连接"
 ],
 "Remote URL": [
  null,
  "远程 URL"
 ],
 "Restart": [
  null,
  "重启"
 ],
 "Resume": [
  null,
  ""
 ],
 "Route to $0": [
  null,
  ""
 ],
 "Routed Network": [
  null,
  ""
 ],
 "Run": [
  null,
  "运行"
 ],
 "Run when host boots": [
  null,
  ""
 ],
 "SPICE": [
  null,
  "SPICE"
 ],
 "SPICE Address:": [
  null,
  "SPICE 地址："
 ],
 "SPICE Port:": [
  null,
  "SPICE 端口："
 ],
 "SPICE TLS Port:": [
  null,
  "SPICE TLS 端口："
 ],
 "Save": [
  null,
  "保存"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  "发送不可屏蔽中断"
 ],
 "Send key": [
  null,
  "发送密钥"
 ],
 "Serial Console": [
  null,
  "串行控制台"
 ],
 "Session": [
  null,
  "会话"
 ],
 "Shut Down": [
  null,
  "关机"
 ],
 "Size": [
  null,
  "大小"
 ],
 "Sockets": [
  null,
  "套接字"
 ],
 "Source": [
  null,
  "源"
 ],
 "Source Path": [
  null,
  "源路径"
 ],
 "Source path should not be empty": [
  null,
  "源路径不能为空"
 ],
 "Source should start with http, ftp or nfs protocol": [
  null,
  "源应该以 http、ftp 或 nfs 协议开头"
 ],
 "Start libvirt": [
  null,
  "启动 libvirt"
 ],
 "Start pool when host boots": [
  null,
  "在主机引导时启动池"
 ],
 "Startup": [
  null,
  "启动"
 ],
 "State": [
  null,
  "状态"
 ],
 "Storage Pool $0 failed to get activated": [
  null,
  ""
 ],
 "Storage Pool $0 failed to get deactivated": [
  null,
  ""
 ],
 "Storage Pool Name": [
  null,
  "存储池名"
 ],
 "Storage Pool failed to be created": [
  null,
  "创建存储池失败"
 ],
 "Storage Pools": [
  null,
  "存储池"
 ],
 "Storage Size": [
  null,
  "存储大小"
 ],
 "Storage Volumes": [
  null,
  "存储卷"
 ],
 "Storage Volumes could not be deleted": [
  null,
  ""
 ],
 "System": [
  null,
  "系统"
 ],
 "Target": [
  null,
  "目标"
 ],
 "Target Path": [
  null,
  "目标路径"
 ],
 "Target path should not be empty": [
  null,
  "目标路径不能为空"
 ],
 "The Storage Pool could not be deleted": [
  null,
  ""
 ],
 "The VM crashed.": [
  null,
  "虚拟机已崩溃。"
 ],
 "The VM is down.": [
  null,
  "虚拟机已停止。"
 ],
 "The VM is going down.": [
  null,
  "虚拟机将要关机。"
 ],
 "The VM is idle.": [
  null,
  "虚拟机已休眠。"
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  "虚拟机处于停止中（关机或崩溃未完成）。"
 ],
 "The VM is paused.": [
  null,
  "虚拟机已暂停。"
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  "虚拟机正在运行并将在被删除前强制关闭。"
 ],
 "The VM is running.": [
  null,
  "虚拟机正在运行。"
 ],
 "The VM is suspended by guest power management.": [
  null,
  "虚拟机已被客户机电源管理暂停。"
 ],
 "The directory on the server being exported": [
  null,
  "服务器上的目录被导出"
 ],
 "The pool is empty": [
  null,
  "池为空"
 ],
 "Threads per core": [
  null,
  "每个内核的线程数"
 ],
 "Too many files found": [
  null,
  "找到太多文件"
 ],
 "Troubleshoot": [
  null,
  "排错"
 ],
 "Type": [
  null,
  "类型"
 ],
 "Type ID": [
  null,
  ""
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unique name": [
  null,
  "唯一名称"
 ],
 "Unit": [
  null,
  "单位"
 ],
 "Unplug": [
  null,
  "拔"
 ],
 "Up to $0 $1 available on the host": [
  null,
  ""
 ],
 "Usage": [
  null,
  "使用"
 ],
 "Use Existing": [
  null,
  "使用现有的"
 ],
 "Used": [
  null,
  "已使用"
 ],
 "Used by": [
  null,
  ""
 ],
 "VCPU settings could not be saved": [
  null,
  "VCPU 设置不能被保存"
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
 "VNC": [
  null,
  "VNC"
 ],
 "VNC Address:": [
  null,
  "VNC 地址："
 ],
 "VNC Port:": [
  null,
  "VNC 端口："
 ],
 "VNC TLS Port:": [
  null,
  "VNC TLS 端口："
 ],
 "Vendor": [
  null,
  "厂商"
 ],
 "Virtual Machines": [
  null,
  "虚拟机"
 ],
 "Virtual Network": [
  null,
  ""
 ],
 "Virtualization Service (libvirt) is Not Active": [
  null,
  "虚拟化服务（libvirt）未激活"
 ],
 "Virtualization Service is Available": [
  null,
  "虚拟化服务可用"
 ],
 "Volume": [
  null,
  "卷"
 ],
 "WWPN": [
  null,
  ""
 ],
 "You need to select the most closely matching OS vendor and Operating System": [
  null,
  ""
 ],
 "active": [
  null,
  "激活"
 ],
 "bridge": [
  null,
  "网桥"
 ],
 "cdrom": [
  null,
  "光驱"
 ],
 "crashed": [
  null,
  "已崩溃"
 ],
 "custom": [
  null,
  "自定义"
 ],
 "direct": [
  null,
  "直接"
 ],
 "disabled": [
  null,
  "已禁用"
 ],
 "disk": [
  null,
  "磁盘"
 ],
 "down": [
  null,
  "已关闭"
 ],
 "dying": [
  null,
  "失活的"
 ],
 "enabled": [
  null,
  "已启用"
 ],
 "ethernet": [
  null,
  "以太网"
 ],
 "host": [
  null,
  "主机"
 ],
 "host device": [
  null,
  ""
 ],
 "hostdev": [
  null,
  "hostdev"
 ],
 "iSCSI Target": [
  null,
  ""
 ],
 "iSCSI target IQN": [
  null,
  ""
 ],
 "idle": [
  null,
  "休眠"
 ],
 "inactive": [
  null,
  "未激活"
 ],
 "mcast": [
  null,
  "MCAST"
 ],
 "network": [
  null,
  "网络"
 ],
 "no": [
  null,
  "否"
 ],
 "paused": [
  null,
  "已暂停"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
 ],
 "redirected device": [
  null,
  ""
 ],
 "running": [
  null,
  "运行中"
 ],
 "server": [
  null,
  "服务器"
 ],
 "show less": [
  null,
  "显示更少"
 ],
 "show more": [
  null,
  "显示更多"
 ],
 "shut off": [
  null,
  "关闭"
 ],
 "shutdown": [
  null,
  "关机"
 ],
 "suspended (PM)": [
  null,
  "已挂起 （电源管理）"
 ],
 "udp": [
  null,
  "udp"
 ],
 "undefined": [
  null,
  "未定义"
 ],
 "up": [
  null,
  "运行中"
 ],
 "user": [
  null,
  "用户"
 ],
 "vCPU Count": [
  null,
  "vCPU 数"
 ],
 "vCPU Maximum": [
  null,
  "vCPU 的最大值"
 ],
 "vCPUs": [
  null,
  "vCPU"
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
