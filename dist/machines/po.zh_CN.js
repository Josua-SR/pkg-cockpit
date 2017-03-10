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
 "Autostart:": [
  null,
  "自动启动："
 ],
 "Available": [
  null,
  "可用的"
 ],
 "Connection": [
  null,
  "连接"
 ],
 "FORCEOFF_VM action failed": [
  null,
  ""
 ],
 "FORCEREBOOT_VM action failed": [
  null,
  ""
 ],
 "Force Restart": [
  null,
  "强制重启"
 ],
 "Force Shut Down": [
  null,
  "强制关机"
 ],
 "ID:": [
  null,
  "编号："
 ],
 "Memory:": [
  null,
  "内存："
 ],
 "Name": [
  null,
  "名称"
 ],
 "No VM is running or defined on this host": [
  null,
  "该主机上没有虚拟机运行或定义。"
 ],
 "OS Type:": [
  null,
  "操作系统类型："
 ],
 "Overview": [
  null,
  "概览"
 ],
 "REBOOT_VM action failed": [
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
 "SHUTDOWN_VM action failed": [
  null,
  "方案失败"
 ],
 "START_VM action failed": [
  null,
  "方案失败"
 ],
 "Session": [
  null,
  "版本"
 ],
 "Shut Down": [
  null,
  "关机"
 ],
 "State": [
  null,
  "状态"
 ],
 "State:": [
  null,
  "阶段："
 ],
 "System": [
  null,
  "系统"
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
 "The VM is running.": [
  null,
  "虚拟机正在运行。"
 ],
 "The VM is suspended by guest power management.": [
  null,
  "虚拟机已被客户机电源管理暂停。"
 ],
 "Usage": [
  null,
  "使用情况"
 ],
 "Used": [
  null,
  "已使用"
 ],
 "Virtual Machines": [
  null,
  "虚拟机"
 ],
 "crashed": [
  null,
  "虚拟机已崩溃。"
 ],
 "disabled": [
  null,
  "禁用"
 ],
 "dying": [
  null,
  ""
 ],
 "enabled": [
  null,
  "启用"
 ],
 "idle": [
  null,
  ""
 ],
 "paused": [
  null,
  ""
 ],
 "running": [
  null,
  "运行中"
 ],
 "shut off": [
  null,
  ""
 ],
 "shutdown": [
  null,
  ""
 ],
 "suspended (PM)": [
  null,
  ""
 ],
 "vCPUs:": [
  null,
  "虚拟 CPU："
 ]
}));
