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
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 对大多数操作系统可用。为了安装它，在 GNOME 软件中搜索它，或运行以下命令： "
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
  "总是"
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
  "自动启动："
 ],
 "Available": [
  null,
  "可用的"
 ],
 "Boot Order": [
  null,
  "引导顺序："
 ],
 "Bus": [
  null,
  "总线"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "更改网络状态操作失败"
 ],
 "CPU Type": [
  null,
  "CPU 类型："
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
  "关机后所做的改变将会起作用。"
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
 "Creation of vm $0 failed": [
  null,
  "创建 vm $ 0失败"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "Delete": [
  null,
  "删除"
 ],
 "Delete associated storage files:": [
  null,
  "删除关联的存储文件："
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
 "Disk failed to be attached": [
  null,
  "附加磁盘失败"
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
  "模拟的机器："
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "启用的虚拟 CPU 数量应少于最大虚拟 CPU 数量。"
 ],
 "File": [
  null,
  "文件"
 ],
 "Filesystem": [
  null,
  "文件系统"
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
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  "获取 HYPERVISOR MAX VCPU 操作失败"
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
 "Host Name": [
  null,
  "主机名"
 ],
 "Host should not be empty": [
  null,
  "主机不能为空"
 ],
 "INSTALL VM action failed": [
  null,
  "安装虚拟机操作失败"
 ],
 "Immediately Start VM": [
  null,
  "立即启动 VM"
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
 "Invalid filename": [
  null,
  "无效的文件名"
 ],
 "Launch Remote Viewer": [
  null,
  "加载 Remote Viewer"
 ],
 "Loading ...": [
  null,
  "加载中......"
 ],
 "MAC Address": [
  null,
  "MAC 地址"
 ],
 "Mac Address": [
  null,
  "MAC 地址"
 ],
 "Manual Connection": [
  null,
  "手动连接"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "为客户机操作系统分配的最大虚拟 CPU 数，必须介于 1 和 $0 之间"
 ],
 "Memory": [
  null,
  "内存"
 ],
 "Memory should be positive number": [
  null,
  "内存需要是正数"
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
 "Name": [
  null,
  "名称"
 ],
 "Name should not be empty": [
  null,
  "名称不应为空"
 ],
 "Name should not consist of empty characters only": [
  null,
  "名称不应仅包含空字符"
 ],
 "Network File System": [
  null,
  "网络文件系统"
 ],
 "Network Type": [
  null,
  "网络类型"
 ],
 "Network settings could not be saved": [
  null,
  "网络设置不能被保存"
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
 "No storage pool is defined on this host": [
  null,
  "没有在这个主机上定义存储池"
 ],
 "No virtual networks": [
  null,
  "没有虚拟网络"
 ],
 "OS Vendor": [
  null,
  "操作系统厂商"
 ],
 "Operating System": [
  null,
  "操作系统"
 ],
 "Overview": [
  null,
  "概览"
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
 "Persistence": [
  null,
  "持久卷"
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
 "Run": [
  null,
  "运行"
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
 "Source should start with https, ftp or nfs protocol": [
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
 "Start the VM to see disk statistics.": [
  null,
  "启动 VM 查看磁盘统计数据"
 ],
 "Startup": [
  null,
  "启动"
 ],
 "State": [
  null,
  "状态"
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
 "Storage Size should not be negative number": [
  null,
  "存储大小不应为负数"
 ],
 "Storage Volumes": [
  null,
  "存储卷"
 ],
 "System": [
  null,
  "系统"
 ],
 "Target Path": [
  null,
  "目标路径"
 ],
 "Target path should not be empty": [
  null,
  "目标路径不能为空"
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
 "URL": [
  null,
  "URL"
 ],
 "Unique name": [
  null,
  "唯一名称"
 ],
 "Unplug": [
  null,
  "拔"
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  "升级到一个更新版本的 libvirt 来查看磁盘统计数据"
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
 "VCPU settings could not be saved": [
  null,
  "VCPU 设置不能被保存"
 ],
 "VM CHANGE_NETWORK_STATE action failed": [
  null,
  "VM CHANGE_NETWORK_STATE 操作失败"
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  "VM DELETE (DESTROY) 操作失败"
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  "VM DELETE (UNDEFINE) 操作失败"
 ],
 "VM DELETE action failed": [
  null,
  "VM DELETE 操作失败"
 ],
 "VM DETACH_DISK action failed": [
  null,
  "VM DETACH_DISK 操作失败"
 ],
 "VM FORCE OFF action failed": [
  null,
  "虚拟机强制关闭操作失败"
 ],
 "VM FORCE REBOOT action failed": [
  null,
  "虚拟机强制重启操作失败"
 ],
 "VM REBOOT action failed": [
  null,
  "虚拟机重启操作失败"
 ],
 "VM SEND Non-Maskable Interrrupt action failed": [
  null,
  "虚拟机发送非屏蔽中断操作失败"
 ],
 "VM SENDNMI action failed": [
  null,
  "VM SENDNMI 操作失败"
 ],
 "VM SHUT DOWN action failed": [
  null,
  "虚拟机关机操作失败"
 ],
 "VM START action failed": [
  null,
  "虚拟机启动操作失败"
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
 "Virtual Machines": [
  null,
  "虚拟机"
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
 "hostdev": [
  null,
  "hostdev"
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
 "other": [
  null,
  "其他"
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
