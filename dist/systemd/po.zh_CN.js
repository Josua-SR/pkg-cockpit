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
 "$0 Template": [
  null,
  "$0 模板"
 ],
 "$0 day": [
  "$0 days",
  "$0 天"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 小时"
 ],
 "$0 is not available from any repository.": [
  null,
  "所有仓库都不提供 $0。"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 分钟"
 ],
 "$0 month": [
  "$0 months",
  "$0 月"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 周"
 ],
 "$0 will be installed.": [
  null,
  "将安装 $0。"
 ],
 "$0 year": [
  "$0 years",
  "$0 年"
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
 "1 min": [
  null,
  "1 分钟"
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
 "2 min": [
  null,
  "2 分钟"
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
 "3 min": [
  null,
  "3 分钟"
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
 "4 min": [
  null,
  "4 分钟"
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
 "5 min": [
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
 "Advanced TCA": [
  null,
  "高级 TCA"
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
 "All In One": [
  null,
  "所有"
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
 "Before": [
  null,
  "之前"
 ],
 "Binds To": [
  null,
  "绑定到"
 ],
 "Blade": [
  null,
  "刀片"
 ],
 "Blade enclosure": [
  null,
  "刀片机箱"
 ],
 "Bound By": [
  null,
  "边界为"
 ],
 "Bug Fix Updates Available": [
  null,
  "可用的错误修复更新"
 ],
 "Bus Expansion Chassis": [
  null,
  "总线扩展机箱"
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
 "Cannot schedule event in the past": [
  null,
  "无法调度以前的事件"
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
 "Checking for updates…": [
  null,
  "检查更新"
 ],
 "Checking installed software": [
  null,
  "检查安装的软件"
 ],
 "Class": [
  null,
  "等级"
 ],
 "Click to see system hardware information": [
  null,
  "点击以查看系统硬件信息"
 ],
 "Close": [
  null,
  "关闭"
 ],
 "Command": [
  null,
  "命令"
 ],
 "Compact PCI": [
  null,
  "紧凑型 PCI"
 ],
 "Condition $0=$1 was not met": [
  null,
  "条件 $0=$1 不满足"
 ],
 "Condition failed": [
  null,
  "条件失败"
 ],
 "Conflicted By": [
  null,
  "冲突"
 ],
 "Conflicts": [
  null,
  "冲突"
 ],
 "Consists Of": [
  null,
  "组成"
 ],
 "Convertible": [
  null,
  "可转换"
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
 "Desktop": [
  null,
  "桌面"
 ],
 "Detachable": [
  null,
  "可拆开"
 ],
 "Disable": [
  null,
  "禁用"
 ],
 "Disabled": [
  null,
  "禁用"
 ],
 "Disk I/O": [
  null,
  "磁盘 I/O"
 ],
 "Docking Station": [
  null,
  "Docking Station"
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
 "Embedded PC": [
  null,
  "嵌入式 PC"
 ],
 "Enable": [
  null,
  "启用"
 ],
 "Enable Forcefully": [
  null,
  "强制启用"
 ],
 "Enable persistent metrics…": [
  null,
  "启用持久性指标..."
 ],
 "Enabled": [
  null,
  "启用"
 ],
 "Enhancement Updates Available": [
  null,
  "可用的功能增强更新"
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
 "Expansion Chassis": [
  null,
  "扩展机箱"
 ],
 "Free": [
  null,
  "可用"
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
 "Hand Held": [
  null,
  "手持"
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
 "Hour needs to be a number between 0-23": [
  null,
  "小时需要是在 0-23 间的数字"
 ],
 "Hours": [
  null,
  "小时"
 ],
 "I/O Wait": [
  null,
  "I/O 等待"
 ],
 "Id": [
  null,
  "ID"
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
 "Invalid date format": [
  null,
  "无效的日期格式"
 ],
 "Invalid date format and invalid time format": [
  null,
  "无效的日期格式和时间格式"
 ],
 "Invalid date format.": [
  null,
  "无效的数据格式。"
 ],
 "Invalid number.": [
  null,
  "无效的编号。"
 ],
 "Invalid time format": [
  null,
  "无效的时间格式"
 ],
 "Invalid time zone": [
  null,
  "无效的时区"
 ],
 "IoT Gateway": [
  null,
  "IoT 网关"
 ],
 "Joins Namespace Of": [
  null,
  "加入命名空间"
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
 "Laptop": [
  null,
  "笔记本电脑"
 ],
 "Last 24 hours": [
  null,
  "最近 24 小时"
 ],
 "Last 7 days": [
  null,
  "最近 7 天"
 ],
 "Last Trigger": [
  null,
  "最近的触发器"
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
 "Low Profile Desktop": [
  null,
  "低调桌面"
 ],
 "Lunch Box": [
  null,
  "午餐盒"
 ],
 "Machine ID": [
  null,
  "机器编号"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "主机 SSH 密钥指纹"
 ],
 "Main Server Chassis": [
  null,
  "主服务器机箱"
 ],
 "Manually": [
  null,
  "手动的"
 ],
 "Mask": [
  null,
  "Mask"
 ],
 "Mask Forcefully": [
  null,
  "强制 Mask"
 ],
 "Memory": [
  null,
  "内存"
 ],
 "Message to logged in users": [
  null,
  "登录用户的信息"
 ],
 "Mini PC": [
  null,
  "迷你电脑"
 ],
 "Mini Tower": [
  null,
  "Mini Tower"
 ],
 "Minute needs to be a number between 0-59": [
  null,
  "分钟需要是 0-59 间的数字"
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
 "Multi-system Chassis": [
  null,
  "多系统机箱"
 ],
 "NTP Server": [
  null,
  "NTP 服务器"
 ],
 "Name": [
  null,
  "名称"
 ],
 "Need at least one NTP server": [
  null,
  "至少需要一个 NTP 服务器"
 ],
 "Network Traffic": [
  null,
  "网络流量"
 ],
 "Next Run": [
  null,
  "下次运行"
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
 "Notebook": [
  null,
  "笔记本"
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
 "On Failure": [
  null,
  "失败时"
 ],
 "Only Emergency": [
  null,
  "只有紧急情况"
 ],
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  "只有许使用字母、数字、 : 、 _ 、 . 、 @ 、 - 。"
 ],
 "Operating System": [
  null,
  "操作系统"
 ],
 "Other": [
  null,
  "其他"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit 已崩溃"
 ],
 "Part Of": [
  null,
  "部分"
 ],
 "Paths": [
  null,
  "路径"
 ],
 "Performance Profile": [
  null,
  "性能配置集"
 ],
 "Peripheral Chassis": [
  null,
  "外设机箱"
 ],
 "Pizza Box": [
  null,
  "披萨盒"
 ],
 "Portable": [
  null,
  "手提"
 ],
 "Power Options": [
  null,
  "电源选项"
 ],
 "Preset": [
  null,
  "预置"
 ],
 "Preset Forcefully": [
  null,
  "强制预设"
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
 "Propagates Reload To": [
  null,
  "传播重新加载到"
 ],
 "RAID Chassis": [
  null,
  "RAID 机箱"
 ],
 "Rack Mount Chassis": [
  null,
  "机架式机箱"
 ],
 "Real Host Name": [
  null,
  "实际主机名"
 ],
 "Real host name can only contain lower-case characters, digits, dashes, and periods (with populated subdomains)": [
  null,
  "实际主机名仅包含小写字母、数字、破折号和句号（包括填充的子域）"
 ],
 "Real host name must be 64 characters or less": [
  null,
  "实际主机名必须小于等于64个字符"
 ],
 "Reboot": [
  null,
  "重启"
 ],
 "Recent": [
  null,
  "最近"
 ],
 "Reload": [
  null,
  "重载"
 ],
 "Reload Propagated From": [
  null,
  "重新加载的传播来自"
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
 "Required By": [
  null,
  "要求的"
 ],
 "Requires": [
  null,
  "要求"
 ],
 "Requisite": [
  null,
  "必要"
 ],
 "Requisite Of": [
  null,
  "必备的"
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
 "Sealed-case PC": [
  null,
  "密封式 PC"
 ],
 "Seconds": [
  null,
  "秒"
 ],
 "Secure Shell Keys": [
  null,
  "安全 Shell  密钥"
 ],
 "Security Updates Available": [
  null,
  "可用的错误修复更新"
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
 "Set Host name": [
  null,
  "设置主机名"
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
 "Since $0": [
  null,
  "由从 $0"
 ],
 "Slot": [
  null,
  "插槽"
 ],
 "Sockets": [
  null,
  "套接字"
 ],
 "Space-saving Computer": [
  null,
  "节省空间的计算机"
 ],
 "Specific Time": [
  null,
  "指定时间"
 ],
 "Start": [
  null,
  "启动"
 ],
 "State": [
  null,
  "状态"
 ],
 "Static": [
  null,
  "静态"
 ],
 "Stick PC": [
  null,
  "Stick PC"
 ],
 "Stop": [
  null,
  "停止"
 ],
 "Store Performance Data": [
  null,
  "保存性能数据"
 ],
 "Sub Chassis": [
  null,
  "子机箱"
 ],
 "Sub Notebook": [
  null,
  "子笔记本"
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
 "System Not Registered": [
  null,
  "系统未注册"
 ],
 "System Services": [
  null,
  "系统服务"
 ],
 "System Time": [
  null,
  "系统时间"
 ],
 "System Up To Date": [
  null,
  "系统已是最新"
 ],
 "Tablet": [
  null,
  "平板"
 ],
 "Targets": [
  null,
  "目标"
 ],
 "Terminal": [
  null,
  "终端"
 ],
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  "用户 <b>$0</b> 没有权限创建定时器"
 ],
 "The user <b>$0</b> is not permitted to change the system time": [
  null,
  "用户 <b>$0</b> 不允许修改系统时间"
 ],
 "The user <b>$0</b> is not permitted to enable or disable services": [
  null,
  "用户<b>$0</ b>不允许启用或禁用服务"
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  "用户 <b>$0</b> 不允许修改主机名"
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  "用户 <b>$0</b> 不允许关闭或重启该服务器"
 ],
 "The user <b>$0</b> is not permitted to start or stop services": [
  null,
  "用户<b>$0</ b>不允许启用或禁用服务"
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  "这天不是所有月份都有。<br> 定时器将只会在有 31 号的月份执行。"
 ],
 "This field cannot be empty.": [
  null,
  "该字段不能为空。"
 ],
 "This unit is an instance of the $0 template.": [
  null,
  "该单元是模板 $0 的实例."
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
 "Tower": [
  null,
  "Tower"
 ],
 "Triggered By": [
  null,
  "触发于"
 ],
 "Triggers": [
  null,
  "触发器"
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
 "Unknown": [
  null,
  "未知"
 ],
 "Unmask": [
  null,
  "Unmask"
 ],
 "Updates Available": [
  null,
  "可用的更新"
 ],
 "Usage of $0 CPU core": [
  "Usage of $0 CPU cores",
  "使用 $0 CPU 内核"
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
 "Wanted By": [
  null,
  "需要于"
 ],
 "Wants": [
  null,
  "需要"
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
 ],
 "failed to list ssh host keys: $0": [
  null,
  "列出 SSH 主机密钥失败: $0"
 ],
 "of $0 CPU core": [
  "of $0 CPU cores",
  "$0 CPU 内核"
 ],
 "unknown": [
  null,
  "未知"
 ],
 "page-title\u0004CPU Status": [
  null,
  "CPU 状态"
 ],
 "page-title\u0004Memory": [
  null,
  "内存"
 ]
}));
