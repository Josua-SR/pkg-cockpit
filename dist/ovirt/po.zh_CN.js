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
  "x-generator": "Zanata 4.4.5"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 对大多数操作系统可用。为了安装它，在 GNOME 软件中心搜索它或运行以下命令： "
 ],
 "$0 vCPU Details": [
  null,
  ""
 ],
 "Action": [
  null,
  "动作"
 ],
 "Additional": [
  null,
  ""
 ],
 "Address": [
  null,
  "地址"
 ],
 "Address:": [
  null,
  "地址："
 ],
 "All changes will take effect only after stopping and starting the VM.": [
  null,
  ""
 ],
 "All running virtual machines will be turned off.": [
  null,
  ""
 ],
 "Apply": [
  null,
  "应用"
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
  "启动顺序："
 ],
 "Bus": [
  null,
  "总线"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  ""
 ],
 "CPU Type:": [
  null,
  "处理器类型："
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
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "点击 \"加载远程查看其\" 将下载一个  .vv 文件并加载 $0。"
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
 "Confirm deletion of $0": [
  null,
  "确认删除 $0"
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
  "使用任何  SPICE 或 VNC 查看器应用来连接。"
 ],
 "Connection": [
  null,
  "连接"
 ],
 "Console Type": [
  null,
  ""
 ],
 "Consoles": [
  null,
  ""
 ],
 "Cores per socket": [
  null,
  ""
 ],
 "Count:": [
  null,
  "计数："
 ],
 "Create": [
  null,
  "创建"
 ],
 "Create New VM": [
  null,
  ""
 ],
 "Create VM": [
  null,
  "创建虚拟机"
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
  ""
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  ""
 ],
 "Disks": [
  null,
  "磁盘"
 ],
 "Download the MSI from $0": [
  null,
  "从 $0 下载MSI"
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
  ""
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
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  ""
 ],
 "GiB": [
  null,
  ""
 ],
 "Graphics Console (VNC)": [
  null,
  ""
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  ""
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
  ""
 ],
 "INSTALL VM action failed": [
  null,
  ""
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
  ""
 ],
 "Loading data ...": [
  null,
  "正在加载数据 ..."
 ],
 "MAC Address": [
  null,
  ""
 ],
 "MIGRATE action failed": [
  null,
  "迁移操作失败"
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "Managed": [
  null,
  ""
 ],
 "Manual Connection": [
  null,
  "手动连接"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  ""
 ],
 "Memory": [
  null,
  "内存"
 ],
 "Memory:": [
  null,
  "内存："
 ],
 "Migrate To:": [
  null,
  "迁移到："
 ],
 "Model type": [
  null,
  ""
 ],
 "More Information": [
  null,
  "更多信息"
 ],
 "Name": [
  null,
  "名称"
 ],
 "Networks": [
  null,
  ""
 ],
 "No VM found in oVirt.": [
  null,
  "oVirt 中没有找到虚拟机。"
 ],
 "No VM is running or defined on this host": [
  null,
  "该主机上没有虚拟机运行或定义。"
 ],
 "No boot device found": [
  null,
  "没有找到启动设备"
 ],
 "No console defined for this virtual machine.": [
  null,
  ""
 ],
 "No disks defined for this VM": [
  null,
  "没有为该虚拟机定义磁盘"
 ],
 "No network interfaces defined for this VM": [
  null,
  ""
 ],
 "No oVirt connection": [
  null,
  ""
 ],
 "Number of virtual CPUs that gonna be used.": [
  null,
  ""
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
  "优化来："
 ],
 "Overview": [
  null,
  "概览"
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  ""
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
  "请参考 oVirt 的 $0 来获取更新关于远程查看器设置。"
 ],
 "Please start the virtual machine to access its console.": [
  null,
  ""
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  "请等待直到虚拟机列表从服务器加载。"
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  "请等待直达模板列表从服务器加载。"
 ],
 "Plug": [
  null,
  ""
 ],
 "Pool": [
  null,
  "池"
 ],
 "Port": [
  null,
  "端口"
 ],
 "Portgroup": [
  null,
  ""
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  ""
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
  ""
 ],
 "SET VCPU SETTINGS action failed": [
  null,
  ""
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
  "发送非屏蔽中断"
 ],
 "Send shortcut": [
  null,
  ""
 ],
 "Serial Console": [
  null,
  ""
 ],
 "Session": [
  null,
  "会话"
 ],
 "Shut Down": [
  null,
  "关机"
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
  ""
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
  ""
 ],
 "Switching host to maintenance mode failed. Received error: ": [
  null,
  ""
 ],
 "Switching host to maintenance mode in progress ...": [
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
 "This host is managed by a virtualization manager, so creation of new VMs from the host is not possible.": [
  null,
  ""
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  "该虚拟机没有被 oVirt 管理"
 ],
 "Threads per cores": [
  null,
  ""
 ],
 "Type": [
  null,
  "类型"
 ],
 "Unplug": [
  null,
  ""
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  "升级到一个更新版本的 libvirt 来查看磁盘统计数据"
 ],
 "Usage": [
  null,
  "使用情况"
 ],
 "Used": [
  null,
  "已使用"
 ],
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "VDSM 服务管理"
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
  ""
 ],
 "Virtualport": [
  null,
  ""
 ],
 "Volume": [
  null,
  "卷"
 ],
 "Your browser does not support iframes.": [
  null,
  "你的浏览器不支持 iframes。"
 ],
 "bridge": [
  null,
  ""
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
  ""
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
  ""
 ],
 "host": [
  null,
  "主机"
 ],
 "hostdev": [
  null,
  ""
 ],
 "idle": [
  null,
  "休眠的"
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
  ""
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
  ""
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
  "oVirt 供应商安装脚本失败，携带以下输出信息："
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
  "等待审批"
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
  ""
 ],
 "show less": [
  null,
  ""
 ],
 "show more": [
  null,
  ""
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
  ""
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
  ""
 ],
 "vCPU Count": [
  null,
  ""
 ],
 "vCPU Maximum": [
  null,
  ""
 ],
 "vCPUs": [
  null,
  "虚拟处理器"
 ],
 "vCPUs:": [
  null,
  "虚拟 CPU："
 ],
 "vhostuser": [
  null,
  ""
 ],
 "yes": [
  null,
  "是"
 ]
}));
