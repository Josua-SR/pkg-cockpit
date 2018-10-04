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
 "Apply": [
  null,
  "应用"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Compress crash dumps to save space": [
  null,
  "对崩溃转储数据进行压缩以节省空间"
 ],
 "Compression": [
  null,
  "压缩"
 ],
 "Crash dump location": [
  null,
  "崩溃储位置"
 ],
 "Crash system": [
  null,
  "导致系统崩溃"
 ],
 "Directory": [
  null,
  "目录"
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  "目录 $0 不可写或不存在。"
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  "Kdump 服务未安装。请保证软件包 kexec-tools 已安装。"
 ],
 "Kernel Dump": [
  null,
  "内核转储"
 ],
 "Loading...": [
  null,
  "载入中..."
 ],
 "Local Filesystem": [
  null,
  "本地文件系统"
 ],
 "Location": [
  null,
  "位置"
 ],
 "More details": [
  null,
  "更多详情"
 ],
 "Mount": [
  null,
  "挂载"
 ],
 "No configuration found": [
  null,
  "未找到配置"
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  "没有内存预留。在内核命令行（例如在 /etc/default/grub 文件）中增加一个 crashkernel 选项以在启动时预留内存。例如：crashkernel=512M"
 ],
 "None": [
  null,
  "无"
 ],
 "Off": [
  null,
  "关"
 ],
 "Ok": [
  null,
  "确认"
 ],
 "On": [
  null,
  "开"
 ],
 "On a mounted device": [
  null,
  "在一个已挂载的设备上"
 ],
 "Raw to a device": [
  null,
  "格式化设备"
 ],
 "Reading...": [
  null,
  "读取中..."
 ],
 "Remote over NFS": [
  null,
  "通过 NFS 远程"
 ],
 "Remote over SSH": [
  null,
  "通过 SSH 远程"
 ],
 "Reserved memory": [
  null,
  "保留内存"
 ],
 "Server": [
  null,
  "服务器"
 ],
 "Service has an error": [
  null,
  "服务有一个错误"
 ],
 "Service is running": [
  null,
  "服务正在运行"
 ],
 "Service is starting": [
  null,
  "服务正在启动"
 ],
 "Service is stopped": [
  null,
  "服务已停止"
 ],
 "Service is stopping": [
  null,
  "服务正在停止"
 ],
 "Test Configuration": [
  null,
  "测试配置"
 ],
 "Test is only available while the kdump service is running.": [
  null,
  "测试仅在 kdump 服务已运行时可用。"
 ],
 "Test kdump settings": [
  null,
  "测试内核转储设置"
 ],
 "This will test kdump settings by crashing the kernel and thereby the system. Depending on the settings, the system may not automatically reboot and the process may take a while.": [
  null,
  "这将通过崩溃内核和系统来测试 kdump 设置。取决于这些设置，系统也许不会自动重启，并且过程将持续一段时间。"
 ],
 "This will test the kdump configuration by crashing the kernel.": [
  null,
  "这将通过崩溃内核来测试 kdump 配置。"
 ],
 "Unable to apply settings: $0": [
  null,
  "无法应用设置： $0"
 ],
 "Use the setting in /etc/kdump.conf": [
  null,
  "使用 /etc/kdump.conf 中的设置"
 ],
 "invalid: multiple targets defined": [
  null,
  "无效：定义了多个目标"
 ],
 "kdump status": [
  null,
  "kdump 状态"
 ],
 "locally in $0": [
  null,
  "位于 $0 本地"
 ],
 "ssh key": [
  null,
  "SSH 密钥"
 ],
 "undefined": [
  null,
  "未定义"
 ]
}));
