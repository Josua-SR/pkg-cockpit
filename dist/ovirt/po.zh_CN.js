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
 "$0 vCPU Details": [
  null,
  "$0 vCPU 详情"
 ],
 "Action": [
  null,
  "操作"
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
 "All running virtual machines will be turned off.": [
  null,
  "将关闭所有正在运行的虚拟机。"
 ],
 "Apply": [
  null,
  "应用"
 ],
 "Attach permanently": [
  null,
  "永久附加"
 ],
 "Automatically selected host": [
  null,
  "自动选择的主机"
 ],
 "Autostart:": [
  null,
  "自动启动："
 ],
 "Available": [
  null,
  "可用的"
 ],
 "Base Template": [
  null,
  "基础模板"
 ],
 "Base template": [
  null,
  "基础模板"
 ],
 "Base template:": [
  null,
  "基础模板："
 ],
 "Boot Order:": [
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
 "CPU Type:": [
  null,
  "CPU 类型："
 ],
 "CREATE VM action failed": [
  null,
  "创建虚拟机操作失败"
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
  ""
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "点击 \"启动 Remote Viewer\" 将下载一个  .vv 文件并加载 $0。"
 ],
 "Cluster": [
  null,
  "集群"
 ],
 "Cluster Templates": [
  null,
  "集群模板"
 ],
 "Cluster Virtual Machines": [
  null,
  "集群虚拟机"
 ],
 "Confirm migration": [
  null,
  "确认迁移"
 ],
 "Confirm reload:": [
  null,
  "确认重新加载："
 ],
 "Confirm save:": [
  null,
  "确认保存："
 ],
 "Connect to oVirt Engine": [
  null,
  "连接至 oVirt 引擎"
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
 "Create New VM": [
  null,
  "新建 VM"
 ],
 "Create VM": [
  null,
  "创建虚拟机"
 ],
 "Ctrl+Alt+Del": [
  null,
  ""
 ],
 "Delete": [
  null,
  "删除"
 ],
 "Delete associated storage files:": [
  null,
  "删除关联的存储文件："
 ],
 "Description": [
  null,
  "描述"
 ],
 "Description:": [
  null,
  "描述："
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
  ""
 ],
 "Disk failed to be created": [
  null,
  ""
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
 "Edit the vdsm.conf": [
  null,
  "编辑 vdsm.conf"
 ],
 "Emulated Machine:": [
  null,
  "模拟的机器："
 ],
 "Enter New VM name": [
  null,
  "输入新的虚拟机名称"
 ],
 "FQDN": [
  null,
  "FQDN"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "启用的虚拟 CPU 数量应少于最大虚拟 CPU 数量。"
 ],
 "File": [
  null,
  "文件"
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
 "HA": [
  null,
  "高可用"
 ],
 "HA:": [
  null,
  "高可用："
 ],
 "Host": [
  null,
  "主机"
 ],
 "Host to Maintenance": [
  null,
  "主机维护"
 ],
 "INSTALL VM action failed": [
  null,
  "安装虚拟机操作失败"
 ],
 "Install": [
  null,
  "安装"
 ],
 "Launch Remote Viewer": [
  null,
  "加载 Remote Viewer"
 ],
 "Loading ...": [
  null,
  "加载中......"
 ],
 "Loading data ...": [
  null,
  "正在加载数据 ..."
 ],
 "MAC Address": [
  null,
  "MAC 地址"
 ],
 "MIGRATE action failed": [
  null,
  "迁移操作失败"
 ],
 "Mac Address": [
  null,
  ""
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
 "Memory:": [
  null,
  "内存："
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Migrate To:": [
  null,
  "迁移到："
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
 "Network Type": [
  null,
  ""
 ],
 "Network settings could not be saved": [
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
 "No VM found in oVirt.": [
  null,
  "oVirt 中没有找到虚拟机。"
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
 "No network interfaces defined for this VM": [
  null,
  "没有为此 VM 定义网络接口"
 ],
 "No oVirt connection": [
  null,
  "没有 oVirt 连接"
 ],
 "No virtual networks": [
  null,
  ""
 ],
 "Number of virtual CPUs that gonna be used.": [
  null,
  "要使用的虚拟 CPU 数量。"
 ],
 "OK": [
  null,
  "确认"
 ],
 "OS": [
  null,
  "操作系统"
 ],
 "OS Type:": [
  null,
  "操作系统类型："
 ],
 "Ok": [
  null,
  "确认"
 ],
 "Optimized for:": [
  null,
  "优化目标："
 ],
 "Overview": [
  null,
  "概览"
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  "请确认，主机应切换到维护模式。"
 ],
 "Please enter new volume name": [
  null,
  "请输入新的卷名"
 ],
 "Please enter new volume size": [
  null,
  "请输入新的卷大小"
 ],
 "Please provide fully qualified domain name and port of the oVirt engine.": [
  null,
  "请提供 oVirt 引擎的完整的合法域名和端口。"
 ],
 "Please provide valid oVirt engine fully qualified domain name (FQDN) and port (443 by default)": [
  null,
  "请提供有效的 oVirt 引擎完整的合法域名（FQDN）和端口（默认为443 ）"
 ],
 "Please refer to oVirt's $0 for more information about Remote Viewer setup.": [
  null,
  "请参考 oVirt 的 $0 来获取更新关于 Remote Viewer 的设置。"
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "请启动虚拟机来访问其控制台。"
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  "请等待直到虚拟机列表从服务器加载。"
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  "请等待直到模板列表从服务器加载。"
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
 "Preparing for Maintenance": [
  null,
  "正在准备维护"
 ],
 "Protocol": [
  null,
  "协议"
 ],
 "REBOOT action failed": [
  null,
  "重启操作失败"
 ],
 "Readonly": [
  null,
  "只读"
 ],
 "Reconnect": [
  null,
  "重新连接"
 ],
 "Register oVirt": [
  null,
  "注册 oVirt"
 ],
 "Registering oVirt to Cockpit": [
  null,
  "注册 oVirt 到 Cockpit"
 ],
 "Reload": [
  null,
  "重载"
 ],
 "Restart": [
  null,
  "重启"
 ],
 "Run": [
  null,
  "运行"
 ],
 "Run Here": [
  null,
  "运行到此"
 ],
 "Running Since:": [
  null,
  "运行自："
 ],
 "SET VCPU SETTINGS action failed": [
  null,
  "SET VCPU SETTINGS 操作失败"
 ],
 "SHUTDOWN action failed": [
  null,
  "关机操作失败"
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
 "START action failed": [
  null,
  "启动操作失败"
 ],
 "SUSPEND action failed": [
  null,
  "挂起操作失败"
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
 "Start the VM to see disk statistics.": [
  null,
  "启动 VM 查看磁盘统计数据"
 ],
 "State": [
  null,
  "状态"
 ],
 "Stateless": [
  null,
  "无状态"
 ],
 "Stateless:": [
  null,
  "无状态："
 ],
 "Suspend": [
  null,
  "挂起"
 ],
 "Switch Host to Maintenance": [
  null,
  "把主机切换到维护模式"
 ],
 "Switching host to maintenance mode failed. Received error: ": [
  null,
  "将主机切换到维护模式失败。收到错误： "
 ],
 "Switching host to maintenance mode in progress ...": [
  null,
  "将主机切换到维护模式正在进行中... "
 ],
 "System": [
  null,
  "系统"
 ],
 "Target": [
  null,
  "目标"
 ],
 "Template": [
  null,
  "模板"
 ],
 "Templates": [
  null,
  "模板"
 ],
 "Templates of $0 cluster": [
  null,
  "$0 集群模板"
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
 "The pool is empty": [
  null,
  "池为空"
 ],
 "This host is managed by a virtualization manager, so creation of new VMs from the host is not possible.": [
  null,
  "该主机由虚拟化管理器管理，因此无法从主机创建新VM。"
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  "该虚拟机没有被 oVirt 管理"
 ],
 "Threads per core": [
  null,
  ""
 ],
 "Type": [
  null,
  "类型"
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
  ""
 ],
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "VDSM 服务管理"
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  ""
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  ""
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
 "VM SHUT DOWN action failed": [
  null,
  "虚拟机关机操作失败"
 ],
 "VM START action failed": [
  null,
  "虚拟机启动操作失败"
 ],
 "VM icon": [
  null,
  "虚拟机图标"
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
 "Version": [
  null,
  "版本"
 ],
 "Version num": [
  null,
  "版本号"
 ],
 "Virtual Machines": [
  null,
  "虚拟机"
 ],
 "Virtual Machines of $0 cluster": [
  null,
  "$0 集群地虚拟机"
 ],
 "Volume": [
  null,
  "卷"
 ],
 "bridge": [
  null,
  "网桥"
 ],
 "cdrom": [
  null,
  "光驱"
 ],
 "connecting": [
  null,
  "正在连接"
 ],
 "cores": [
  null,
  "核"
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
 "error": [
  null,
  "错误"
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
 "initializing": [
  null,
  "正在初始化"
 ],
 "installation failed": [
  null,
  "安装失败"
 ],
 "installing OS": [
  null,
  "正在安装操作系统"
 ],
 "kdumping": [
  null,
  "正在执行内核转储"
 ],
 "maintenance": [
  null,
  "维护"
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
 "non operational": [
  null,
  "不可操作"
 ],
 "non responsive": [
  null,
  "未响应"
 ],
 "oVirt": [
  null,
  "oVirt"
 ],
 "oVirt Host State:": [
  null,
  "oVirt 主机状态："
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  "oVirt 供应商安装脚本因缺少参数失败。"
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  "oVirt 供应商安装脚本失败：无法写入 /etc/cockpit/machines-ovirt.config，尝试重启。"
 ],
 "oVirt installation script failed with following output: ": [
  null,
  "oVirt 供应商安装脚本失败，输出以下信息："
 ],
 "oVirt login in progress": [
  null,
  "正在登录oVirt"
 ],
 "other": [
  null,
  "其他"
 ],
 "paused": [
  null,
  "已暂停"
 ],
 "pending approval": [
  null,
  "等待批准"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
 ],
 "reboot": [
  null,
  "重启"
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
 "sockets": [
  null,
  "套接字"
 ],
 "suspended (PM)": [
  null,
  "已挂起 （电源管理）"
 ],
 "threads": [
  null,
  "线程"
 ],
 "udp": [
  null,
  "udp"
 ],
 "unassigned": [
  null,
  "未指定"
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
 "vCPUs:": [
  null,
  "vCPU："
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
