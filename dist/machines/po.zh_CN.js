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
  "language": "zh-CN",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 对大多数操作系统可用。为了安装它，在 GNOME 软件中心搜索它或运行以下命令： "
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
 "Automatically start libvirt on boot": [
  null,
  ""
 ],
 "Autostart:": [
  null,
  "自动启动："
 ],
 "Available": [
  null,
  "可用的"
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
 "Confirm deletion of $0": [
  null,
  "确认删除 $0"
 ],
 "Connect with any $0 viewer application.": [
  null,
  "使用任何 $0 查看器应用来连接。"
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "使用任何  SPICE 或 VNC 查看器应用来连接。"
 ],
 "Connecting to Virtualization Service": [
  null,
  ""
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
 "Create New Virtual Machine": [
  null,
  ""
 ],
 "Creation of vm $0 failed": [
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
 "Emulated Machine:": [
  null,
  "模拟的机器："
 ],
 "File": [
  null,
  "文件"
 ],
 "Filesystem": [
  null,
  "文件系统"
 ],
 "Force Restart": [
  null,
  "强制重启"
 ],
 "Force Shut Down": [
  null,
  "强制关机"
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
 "Host": [
  null,
  "主机"
 ],
 "INSTALL VM action failed": [
  null,
  ""
 ],
 "Immediately Start VM": [
  null,
  ""
 ],
 "Install": [
  null,
  "安装"
 ],
 "Installation Source": [
  null,
  ""
 ],
 "Installation Source Type": [
  null,
  ""
 ],
 "Installation Source should not be empty": [
  null,
  ""
 ],
 "Invalid filename": [
  null,
  ""
 ],
 "Launch Remote Viewer": [
  null,
  "加载 Remote Viewer"
 ],
 "Loading ...": [
  null,
  ""
 ],
 "MAC Address": [
  null,
  ""
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
 "Memory": [
  null,
  "内存"
 ],
 "Memory should be positive number": [
  null,
  ""
 ],
 "Memory:": [
  null,
  "内存："
 ],
 "MiB": [
  null,
  "MiB"
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
 "Name should not be empty": [
  null,
  ""
 ],
 "Name should not consist of empty characters only": [
  null,
  ""
 ],
 "Networks": [
  null,
  ""
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
 "No matching files found": [
  null,
  "没有找到匹配的文件"
 ],
 "No network interfaces defined for this VM": [
  null,
  ""
 ],
 "OS Vendor": [
  null,
  ""
 ],
 "Ok": [
  null,
  "确认"
 ],
 "Operating System": [
  null,
  "操作系统"
 ],
 "Overview": [
  null,
  "概览"
 ],
 "Path to ISO file on host's file system": [
  null,
  ""
 ],
 "Path to file": [
  null,
  "文件路径"
 ],
 "Please start the virtual machine to access its console.": [
  null,
  ""
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
 "Protocol": [
  null,
  "协议"
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
  ""
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
 "Source": [
  null,
  "源"
 ],
 "Source should start with http, ftp or nfs protocol": [
  null,
  ""
 ],
 "Start libvirt": [
  null,
  ""
 ],
 "Start the VM to see disk statistics.": [
  null,
  ""
 ],
 "State": [
  null,
  "状态"
 ],
 "Storage Size": [
  null,
  ""
 ],
 "Storage Size should not be negative number": [
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
 "Too many files found": [
  null,
  "太多文件未找到"
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
  "网址"
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
  ""
 ],
 "Virtualization Service is Available": [
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
 "other": [
  null,
  "其他"
 ],
 "paused": [
  null,
  "已暂停"
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
 "suspended (PM)": [
  null,
  "已挂起 （电源管理）"
 ],
 "udp": [
  null,
  ""
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
