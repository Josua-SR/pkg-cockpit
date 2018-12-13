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
 "$0 is not available from any repository.": [
  null,
  "所有仓库都不提供 $0。"
 ],
 "$0 will be installed.": [
  null,
  "将安装 $0。"
 ],
 "1 Minute": [
  null,
  "1 分钟"
 ],
 "1 day": [
  null,
  "1 天"
 ],
 "1 hour": [
  null,
  "1 小时"
 ],
 "1 week": [
  null,
  "1 周"
 ],
 "10th": [
  null,
  "10号"
 ],
 "11th": [
  null,
  "11号"
 ],
 "12th": [
  null,
  "12号"
 ],
 "13th": [
  null,
  "13号"
 ],
 "14th": [
  null,
  "14号"
 ],
 "15th": [
  null,
  "15号"
 ],
 "16th": [
  null,
  "16号"
 ],
 "17th": [
  null,
  "17号"
 ],
 "18th": [
  null,
  "18号"
 ],
 "19th": [
  null,
  "19号"
 ],
 "1st": [
  null,
  "1号"
 ],
 "20 Minutes": [
  null,
  "20 分钟"
 ],
 "20th": [
  null,
  "20号"
 ],
 "21st": [
  null,
  "21号"
 ],
 "22nd": [
  null,
  "22号"
 ],
 "23rd": [
  null,
  "23号"
 ],
 "24th": [
  null,
  "24号"
 ],
 "25th": [
  null,
  "25号"
 ],
 "26th": [
  null,
  "26号"
 ],
 "27th": [
  null,
  "27号"
 ],
 "28th": [
  null,
  "28号"
 ],
 "29th": [
  null,
  "29号"
 ],
 "2nd": [
  null,
  "2号"
 ],
 "30th": [
  null,
  "30号"
 ],
 "31st": [
  null,
  "31号"
 ],
 "3rd": [
  null,
  "3号"
 ],
 "40 Minutes": [
  null,
  "40 分钟"
 ],
 "4th": [
  null,
  "4号"
 ],
 "5 Minutes": [
  null,
  "5 分钟"
 ],
 "5 minutes": [
  null,
  "5 分钟"
 ],
 "5th": [
  null,
  "5号"
 ],
 "6 hours": [
  null,
  "6 小时"
 ],
 "60 Minutes": [
  null,
  "60 分钟"
 ],
 "6th": [
  null,
  "6号"
 ],
 "7th": [
  null,
  "7号"
 ],
 "8th": [
  null,
  "8号"
 ],
 "9th": [
  null,
  "9号"
 ],
 "Additional packages:": [
  null,
  "额外的软件包："
 ],
 "After": [
  null,
  "后"
 ],
 "After system boot": [
  null,
  "系统启动后"
 ],
 "Alert and above": [
  null,
  "警报及以上"
 ],
 "Asset Tag": [
  null,
  "资产标记"
 ],
 "At specific time": [
  null,
  "在指定时间"
 ],
 "Automatically using NTP": [
  null,
  "自动使用 NTP"
 ],
 "Automatically using specific NTP servers": [
  null,
  "自动使用指定的 NTP 服务器"
 ],
 "BIOS": [
  null,
  "BIOS"
 ],
 "BIOS date": [
  null,
  "BIOS 日期"
 ],
 "BIOS version": [
  null,
  "BIOS 版本"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Cached": [
  null,
  "已缓存"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Change": [
  null,
  "变更"
 ],
 "Change Host Name": [
  null,
  "修改主机名"
 ],
 "Change System Time": [
  null,
  "修改系统时间"
 ],
 "Checking installed software": [
  null,
  "检查安装的软件"
 ],
 "Class": [
  null,
  "等级"
 ],
 "Close": [
  null,
  "关闭"
 ],
 "Command": [
  null,
  "命令"
 ],
 "Condition failed": [
  null,
  "条件失败"
 ],
 "Create Timer": [
  null,
  "创建定时器"
 ],
 "Create Timers": [
  null,
  "创建定时器"
 ],
 "Critical and above": [
  null,
  "关键及以上"
 ],
 "Current boot": [
  null,
  "当前启动"
 ],
 "Debug and above": [
  null,
  "Debug 及以上"
 ],
 "Delay": [
  null,
  "延时"
 ],
 "Description": [
  null,
  "描述"
 ],
 "Disk I/O": [
  null,
  "磁盘 I/O"
 ],
 "Domain": [
  null,
  "域"
 ],
 "Don't Repeat": [
  null,
  "不要重复"
 ],
 "Downloading $0": [
  null,
  "正在下载"
 ],
 "Enable stored metrics…": [
  null,
  "启用保存的指标..."
 ],
 "Entry": [
  null,
  "条目"
 ],
 "Error": [
  null,
  "错误"
 ],
 "Error and above": [
  null,
  "Error 及以上"
 ],
 "Everything": [
  null,
  "所有"
 ],
 "Friday": [
  null,
  "星期五"
 ],
 "General": [
  null,
  "通用"
 ],
 "Go to": [
  null,
  "到"
 ],
 "Go to now": [
  null,
  "转到现在"
 ],
 "Hardware": [
  null,
  "硬件"
 ],
 "Hardware Information": [
  null,
  "硬件信息"
 ],
 "Host Name": [
  null,
  "主机名"
 ],
 "Hour : Minute": [
  null,
  "小时：分钟"
 ],
 "Hours": [
  null,
  "小时"
 ],
 "I/O Wait": [
  null,
  "I/O 等待"
 ],
 "Info and above": [
  null,
  "Info 及以上"
 ],
 "Install": [
  null,
  "安装"
 ],
 "Install Software": [
  null,
  "安装软件"
 ],
 "Installing $0": [
  null,
  "正在安装 $0"
 ],
 "Instantiate": [
  null,
  "实例"
 ],
 "Invalid time zone": [
  null,
  "无效的时区"
 ],
 "Journal": [
  null,
  "日志"
 ],
 "Journal entry": [
  null,
  "日志条目"
 ],
 "Journal entry not found": [
  null,
  "未找到日志条目"
 ],
 "Kernel": [
  null,
  "内核"
 ],
 "Last 24 hours": [
  null,
  "最近 24 小时"
 ],
 "Last 7 days": [
  null,
  "最近 7 天"
 ],
 "Load earlier entries": [
  null,
  "载入更早条目"
 ],
 "Loading...": [
  null,
  "载入中..."
 ],
 "Log messages": [
  null,
  "日志消息"
 ],
 "Logs": [
  null,
  "日志"
 ],
 "Machine ID": [
  null,
  "机器编号"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "主机 SSH 密钥指纹"
 ],
 "Manually": [
  null,
  "手动的"
 ],
 "Memory": [
  null,
  "内存"
 ],
 "Memory & Swap": [
  null,
  "内存和交换空间"
 ],
 "Minutes": [
  null,
  "分钟"
 ],
 "Model": [
  null,
  "型号"
 ],
 "Monday": [
  null,
  "星期一"
 ],
 "Name": [
  null,
  "名称"
 ],
 "Network Traffic": [
  null,
  "网络流量"
 ],
 "Nice": [
  null,
  "Nice"
 ],
 "No Delay": [
  null,
  "无延时"
 ],
 "No host keys found.": [
  null,
  "没有找到主机密钥。"
 ],
 "Not authorized to upload-report": [
  null,
  "没有授权来上传报告"
 ],
 "Not synchronized": [
  null,
  "未同步"
 ],
 "Note": [
  null,
  "注意"
 ],
 "Notice and above": [
  null,
  "Notice 及以上"
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
 "Only Emergency": [
  null,
  "只有紧急情况"
 ],
 "Operating System": [
  null,
  "操作系统"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "Paths": [
  null,
  "路径"
 ],
 "Performance Profile": [
  null,
  "性能配置集"
 ],
 "Power Options": [
  null,
  "电源选项"
 ],
 "Pretty Host Name": [
  null,
  "好主机名"
 ],
 "Problem details": [
  null,
  "问题详情"
 ],
 "Problem info": [
  null,
  "问题信息"
 ],
 "Real Host Name": [
  null,
  "实际主机名"
 ],
 "Reboot": [
  null,
  "重启"
 ],
 "Recent": [
  null,
  "最近"
 ],
 "Removals:": [
  null,
  "移除"
 ],
 "Removing $0": [
  null,
  "正在删除 $0"
 ],
 "Repeat Daily": [
  null,
  "每天重复"
 ],
 "Repeat Hourly": [
  null,
  "每小时重复"
 ],
 "Repeat Monthly": [
  null,
  "每月重复"
 ],
 "Repeat Weekly": [
  null,
  "每周重复"
 ],
 "Repeat Yearly": [
  null,
  "每年重复"
 ],
 "Report": [
  null,
  "报表"
 ],
 "Reported": [
  null,
  "报告的"
 ],
 "Reporter 'reporter-ureport' not found.": [
  null,
  "未发现报告器 'reporter-ureport'。"
 ],
 "Reporting was unsucessful. Try running `reporter-ureport -d ": [
  null,
  "报告未执行成功。尝试运行`reporter-ureport -d "
 ],
 "Reset": [
  null,
  "重置"
 ],
 "Restart": [
  null,
  "重启"
 ],
 "Run": [
  null,
  "运行"
 ],
 "Saturday": [
  null,
  "星期六"
 ],
 "Save": [
  null,
  "保存"
 ],
 "Seconds": [
  null,
  "秒"
 ],
 "Secure Shell Keys": [
  null,
  "安全 Shell  密钥"
 ],
 "Service Logs": [
  null,
  "服务日志"
 ],
 "Service name": [
  null,
  "服务名称"
 ],
 "Services": [
  null,
  "服务"
 ],
 "Set Time": [
  null,
  "设置时间"
 ],
 "Severity": [
  null,
  "严重性"
 ],
 "Show fingerprints": [
  null,
  "显示指印"
 ],
 "Shut Down": [
  null,
  "关机"
 ],
 "Slot": [
  null,
  "插槽"
 ],
 "Sockets": [
  null,
  "套接字"
 ],
 "Specific Time": [
  null,
  "指定时间"
 ],
 "Store metrics": [
  null,
  "存储指标数据"
 ],
 "Sunday": [
  null,
  "星期日"
 ],
 "Swap Used": [
  null,
  "使用的交换空间"
 ],
 "Synchronized": [
  null,
  "已同步"
 ],
 "Synchronized with {{Server}}": [
  null,
  "与 {{Server}} 同步"
 ],
 "System": [
  null,
  "系统"
 ],
 "System Information": [
  null,
  "系统信息"
 ],
 "System Services": [
  null,
  "系统服务"
 ],
 "System Time": [
  null,
  "系统时间"
 ],
 "Targets": [
  null,
  "目标"
 ],
 "Terminal": [
  null,
  "终端"
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  "该单元没有设计为需要明确启用。"
 ],
 "Thursday": [
  null,
  "星期四"
 ],
 "Time Zone": [
  null,
  "时区"
 ],
 "Timers": [
  null,
  "计时器"
 ],
 "Total size: $0": [
  null,
  "总大小：$0"
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  "正在尝试与 {{Server}} 同步"
 ],
 "Tuesday": [
  null,
  "星期二"
 ],
 "Type": [
  null,
  "类型"
 ],
 "Used": [
  null,
  "已使用"
 ],
 "User": [
  null,
  "用户"
 ],
 "Vendor": [
  null,
  "厂商"
 ],
 "Version": [
  null,
  "版本"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "等待其他软件管理操作完成"
 ],
 "Warning and above": [
  null,
  "Warning 及以上"
 ],
 "Wednesday": [
  null,
  "星期三"
 ],
 "Weeks": [
  null,
  "周"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 字节二进制数据]"
 ],
 "[binary data]": [
  null,
  "[二进制数据]"
 ],
 "[no data]": [
  null,
  "[没有数据]"
 ]
}));
