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
  ""
 ],
 "Compression": [
  null,
  ""
 ],
 "Crash dump location": [
  null,
  ""
 ],
 "Crash system": [
  null,
  ""
 ],
 "Directory": [
  null,
  "目录"
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  ""
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  ""
 ],
 "Kernel dump configuration": [
  null,
  "错误的配置"
 ],
 "Loading...": [
  null,
  "载入中..."
 ],
 "Local Filesystem": [
  null,
  "无文件系统"
 ],
 "Location": [
  null,
  "挂载位置"
 ],
 "More details": [
  null,
  "方案详情"
 ],
 "Mount": [
  null,
  "挂载"
 ],
 "No configuration found": [
  null,
  "错误的配置"
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  ""
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
  ""
 ],
 "Raw to a device": [
  null,
  "Rados 块设备"
 ],
 "Reading...": [
  null,
  "读取中"
 ],
 "Remote over NFS": [
  null,
  "移除角色"
 ],
 "Remote over SSH": [
  null,
  "移除角色"
 ],
 "Reserved memory": [
  null,
  ""
 ],
 "Server": [
  null,
  "服务器"
 ],
 "Service has an error": [
  null,
  "服务名称"
 ],
 "Service is running": [
  null,
  "虚拟机正在运行。"
 ],
 "Service is starting": [
  null,
  "正在重启主机"
 ],
 "Service is stopped": [
  null,
  "服务"
 ],
 "Service is stopping": [
  null,
  "服务日志"
 ],
 "Test Configuration": [
  null,
  "配置"
 ],
 "Test is only available while the kdump service is running.": [
  null,
  ""
 ],
 "Test kdump settings": [
  null,
  "组设置"
 ],
 "This will test kdump settings by crashing the kernel and thereby the system. Depending on the settings, the system may not automatically reboot and the process may take a while.": [
  null,
  ""
 ],
 "This will test the kdump configuration by crashing the kernel.": [
  null,
  ""
 ],
 "Unable to apply settings: $0": [
  null,
  "无法获取警告： $0"
 ],
 "Use the setting in /etc/kdump.conf": [
  null,
  ""
 ],
 "invalid: multiple targets defined": [
  null,
  ""
 ],
 "kdump status": [
  null,
  ""
 ],
 "locally in $0": [
  null,
  ""
 ],
 "ssh key": [
  null,
  ""
 ],
 "undefined": [
  null,
  "未定义"
 ]
}));
