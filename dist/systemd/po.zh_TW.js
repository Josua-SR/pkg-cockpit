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
  "language": "zh_TW",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Template": [
  null,
  "$0 模板"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 在任何存儲庫中都不可用。"
 ],
 "$0 will be installed.": [
  null,
  "$0 將會被安裝。"
 ],
 "1 Minute": [
  null,
  "1分鐘"
 ],
 "1 day": [
  null,
  "1天"
 ],
 "1 hour": [
  null,
  "1小時"
 ],
 "1 min": [
  null,
  "1分鐘"
 ],
 "1 week": [
  null,
  "1週"
 ],
 "10th": [
  null,
  "第10"
 ],
 "11th": [
  null,
  "第11"
 ],
 "12th": [
  null,
  "第12"
 ],
 "13th": [
  null,
  "第13"
 ],
 "14th": [
  null,
  "第14"
 ],
 "15th": [
  null,
  "第15"
 ],
 "16th": [
  null,
  "第16"
 ],
 "17th": [
  null,
  "17"
 ],
 "18th": [
  null,
  "18"
 ],
 "19th": [
  null,
  "19"
 ],
 "1st": [
  null,
  "1"
 ],
 "2 min": [
  null,
  "2分鐘"
 ],
 "20 Minutes": [
  null,
  "20分鐘"
 ],
 "20th": [
  null,
  "20"
 ],
 "21st": [
  null,
  "21"
 ],
 "22nd": [
  null,
  "第22"
 ],
 "23rd": [
  null,
  "第23"
 ],
 "24th": [
  null,
  "第24"
 ],
 "25th": [
  null,
  "第25"
 ],
 "26th": [
  null,
  "第26"
 ],
 "27th": [
  null,
  "第27"
 ],
 "28th": [
  null,
  "第28"
 ],
 "29th": [
  null,
  "第29"
 ],
 "2nd": [
  null,
  "第2"
 ],
 "3 min": [
  null,
  "3分鐘"
 ],
 "30th": [
  null,
  "第30"
 ],
 "31st": [
  null,
  "第31"
 ],
 "3rd": [
  null,
  "第3"
 ],
 "4 min": [
  null,
  "4分鐘"
 ],
 "40 Minutes": [
  null,
  "40分鐘"
 ],
 "4th": [
  null,
  "第四"
 ],
 "5 Minutes": [
  null,
  "5分鐘"
 ],
 "5 min": [
  null,
  "5分鐘"
 ],
 "5 minutes": [
  null,
  "5分鐘"
 ],
 "5th": [
  null,
  "第5"
 ],
 "6 hours": [
  null,
  "6個小時"
 ],
 "60 Minutes": [
  null,
  "60分鐘"
 ],
 "6th": [
  null,
  "第6"
 ],
 "7th": [
  null,
  "7日"
 ],
 "8th": [
  null,
  "第八"
 ],
 "9th": [
  null,
  "9日"
 ],
 "Additional packages:": [
  null,
  "附加包："
 ],
 "Advanced TCA": [
  null,
  "高級TCA"
 ],
 "After": [
  null,
  "封底"
 ],
 "After system boot": [
  null,
  "系統啟動後"
 ],
 "Alert and above": [
  null,
  "警報及以上"
 ],
 "All In One": [
  null,
  "一體"
 ],
 "Asset Tag": [
  null,
  "資產標籤"
 ],
 "At specific time": [
  null,
  "在特定時間"
 ],
 "Automatic Startup": [
  null,
  "自動更新"
 ],
 "Automatically using NTP": [
  null,
  "自動使用NTP"
 ],
 "Automatically using specific NTP servers": [
  null,
  "自動使用特定的NTP服務器"
 ],
 "BIOS": [
  null,
  "BIOS"
 ],
 "BIOS date": [
  null,
  "BIOS日期"
 ],
 "BIOS version": [
  null,
  "BIOS版本"
 ],
 "Before": [
  null,
  "之前"
 ],
 "Binds To": [
  null,
  "綁定到"
 ],
 "Blade": [
  null,
  "刀"
 ],
 "Blade enclosure": [
  null,
  "刀片機箱"
 ],
 "Bound By": [
  null,
  "以......為界"
 ],
 "Bug Fix Updates Available": [
  null,
  "錯誤修復更新可用"
 ],
 "Bus Expansion Chassis": [
  null,
  "總線擴展機箱"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Cached": [
  null,
  "緩存"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Cannot schedule event in the past": [
  null,
  "無法安排過去的活動"
 ],
 "Change": [
  null,
  "改變"
 ],
 "Change Host Name": [
  null,
  "更改主機名"
 ],
 "Change System Time": [
  null,
  "改變系統時間"
 ],
 "Checking for updates…": [
  null,
  "查詢更新…"
 ],
 "Checking installed software": [
  null,
  "檢查已安裝的軟件"
 ],
 "Class": [
  null,
  "類別"
 ],
 "Click to see system hardware information": [
  null,
  "單擊以查看系統硬件信息"
 ],
 "Close": [
  null,
  "關閉"
 ],
 "Command": [
  null,
  "指令"
 ],
 "Compact PCI": [
  null,
  "緊湊型PCI"
 ],
 "Condition $0=$1 was not met": [
  null,
  "條件 $0=$1 沒有得到滿足"
 ],
 "Condition failed": [
  null,
  "條件失敗"
 ],
 "Conflicted By": [
  null,
  "衝突的"
 ],
 "Conflicts": [
  null,
  "衝突"
 ],
 "Consists Of": [
  null,
  "由組成"
 ],
 "Convertible": [
  null,
  "可兌換"
 ],
 "Create Timer": [
  null,
  "創建計時器"
 ],
 "Create Timers": [
  null,
  "創建計時器"
 ],
 "Critical and above": [
  null,
  "關鍵及以上"
 ],
 "Current boot": [
  null,
  "當前啟動"
 ],
 "Debug and above": [
  null,
  "調試及以上"
 ],
 "Delay": [
  null,
  "延遲"
 ],
 "Description": [
  null,
  "說明"
 ],
 "Desktop": [
  null,
  "桌面環境"
 ],
 "Detachable": [
  null,
  "可拆開"
 ],
 "Disable": [
  null,
  "停用"
 ],
 "Disabled": [
  null,
  "已停用"
 ],
 "Disk I/O": [
  null,
  "磁碟 I/O"
 ],
 "Docking Station": [
  null,
  "停靠站"
 ],
 "Domain": [
  null,
  "網域"
 ],
 "Don't Repeat": [
  null,
  "不要重複"
 ],
 "Downloading $0": [
  null,
  "下載 $0"
 ],
 "Embedded PC": [
  null,
  "嵌入式PC"
 ],
 "Enable": [
  null,
  "啟用"
 ],
 "Enable Forcefully": [
  null,
  "強制啟用"
 ],
 "Enable stored metrics…": [
  null,
  "啟用存儲的指標..."
 ],
 "Enabled": [
  null,
  "已啟用"
 ],
 "Enhancement Updates Available": [
  null,
  "可用的增強更新"
 ],
 "Entry": [
  null,
  "條目"
 ],
 "Error": [
  null,
  "錯誤"
 ],
 "Error and above": [
  null,
  "錯誤及以上"
 ],
 "Everything": [
  null,
  "一切"
 ],
 "Expansion Chassis": [
  null,
  "擴展機箱"
 ],
 "Friday": [
  null,
  "週五"
 ],
 "General": [
  null,
  "一般"
 ],
 "Go to": [
  null,
  "去"
 ],
 "Go to now": [
  null,
  "去吧"
 ],
 "Hand Held": [
  null,
  "手持"
 ],
 "Hardware": [
  null,
  "硬體"
 ],
 "Hardware Information": [
  null,
  "硬件信息"
 ],
 "Host Name": [
  null,
  "主機名稱"
 ],
 "Hour : Minute": [
  null,
  "小時：分鐘"
 ],
 "Hour needs to be a number between 0-23": [
  null,
  "小時需要是0-23之間的數字"
 ],
 "Hours": [
  null,
  "時"
 ],
 "I/O Wait": [
  null,
  "I / O等待"
 ],
 "Id": [
  null,
  "ID"
 ],
 "Info and above": [
  null,
  "信息及以上"
 ],
 "Install": [
  null,
  "安裝"
 ],
 "Install Software": [
  null,
  "安裝軟件"
 ],
 "Installing $0": [
  null,
  "正在安裝 $0"
 ],
 "Instantiate": [
  null,
  "實例"
 ],
 "Invalid date format": [
  null,
  "日期格式無效"
 ],
 "Invalid date format and invalid time format": [
  null,
  "日期格式無效，時間格式無效"
 ],
 "Invalid date format.": [
  null,
  "日期格式無效。"
 ],
 "Invalid number.": [
  null,
  "無效號碼。"
 ],
 "Invalid time format": [
  null,
  "時間格式無效"
 ],
 "Invalid time zone": [
  null,
  "時區無效"
 ],
 "IoT Gateway": [
  null,
  "物聯網網關"
 ],
 "Joins Namespace Of": [
  null,
  "加入命名空間"
 ],
 "Journal": [
  null,
  "日誌"
 ],
 "Journal entry": [
  null,
  "期刊錄入"
 ],
 "Journal entry not found": [
  null,
  "期刊條目未找到"
 ],
 "Kernel": [
  null,
  "Kernel"
 ],
 "Laptop": [
  null,
  "筆記本電腦"
 ],
 "Last 24 hours": [
  null,
  "過去24小時"
 ],
 "Last 7 days": [
  null,
  "過去7天"
 ],
 "Last Trigger": [
  null,
  "最後觸發"
 ],
 "Load earlier entries": [
  null,
  "加載較早的條目"
 ],
 "Loading...": [
  null,
  "正在載入..."
 ],
 "Log messages": [
  null,
  "記錄消息"
 ],
 "Logs": [
  null,
  "日誌"
 ],
 "Low Profile Desktop": [
  null,
  "低調桌面"
 ],
 "Lunch Box": [
  null,
  "午餐盒"
 ],
 "Machine ID": [
  null,
  "機器ID"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "機器SSH密鑰指紋"
 ],
 "Main Server Chassis": [
  null,
  "主服務器機箱"
 ],
 "Manually": [
  null,
  "手動"
 ],
 "Mask": [
  null,
  "遮罩"
 ],
 "Mask Forcefully": [
  null,
  "面具強有力"
 ],
 "Memory": [
  null,
  "記憶體"
 ],
 "Memory & Swap": [
  null,
  "記憶和交換"
 ],
 "Message to logged in users": [
  null,
  "登錄用戶的消息"
 ],
 "Mini PC": [
  null,
  "迷你電腦"
 ],
 "Mini Tower": [
  null,
  "迷你塔"
 ],
 "Minute needs to be a number between 0-59": [
  null,
  "分鐘需要是0-59之間的數字"
 ],
 "Minutes": [
  null,
  "分"
 ],
 "Model": [
  null,
  "型號"
 ],
 "Monday": [
  null,
  "週一"
 ],
 "Multi-system Chassis": [
  null,
  "多系統機箱"
 ],
 "NTP Server": [
  null,
  "NTP服務器"
 ],
 "Name": [
  null,
  "名稱"
 ],
 "Need at least one NTP server": [
  null,
  "至少需要一台NTP服務器"
 ],
 "Network Traffic": [
  null,
  "網絡流量"
 ],
 "Next Run": [
  null,
  "下次運行"
 ],
 "Nice": [
  null,
  "Nice"
 ],
 "No Delay": [
  null,
  "沒有延遲"
 ],
 "No host keys found.": [
  null,
  "找不到主機密鑰。"
 ],
 "Not authorized to upload-report": [
  null,
  "未授權上傳報告"
 ],
 "Not synchronized": [
  null,
  "不同步"
 ],
 "Note": [
  null,
  "備註"
 ],
 "Notebook": [
  null,
  "筆記本"
 ],
 "Notice and above": [
  null,
  "注意及以上"
 ],
 "Off": [
  null,
  "關閉"
 ],
 "Ok": [
  null,
  "確定"
 ],
 "On": [
  null,
  "開"
 ],
 "On Failure": [
  null,
  "失敗"
 ],
 "Only Emergency": [
  null,
  "只有緊急情況"
 ],
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  "只有字母，數字，：，_ ,. ， @ ， - 被允許。"
 ],
 "Operating System": [
  null,
  "作業系統"
 ],
 "Other": [
  null,
  "其它"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit崩潰了"
 ],
 "Part Of": [
  null,
  "部分"
 ],
 "Path": [
  null,
  "路徑"
 ],
 "Paths": [
  null,
  "路徑"
 ],
 "Performance Profile": [
  null,
  "績效簡介"
 ],
 "Peripheral Chassis": [
  null,
  "外圍機箱"
 ],
 "Pizza Box": [
  null,
  "披薩盒"
 ],
 "Portable": [
  null,
  "手提"
 ],
 "Power Options": [
  null,
  "電源選項"
 ],
 "Preset": [
  null,
  "預置"
 ],
 "Preset Forcefully": [
  null,
  "強制預設"
 ],
 "Pretty Host Name": [
  null,
  "漂亮的主機名"
 ],
 "Problem details": [
  null,
  "問題詳情"
 ],
 "Problem info": [
  null,
  "問題信息"
 ],
 "Propagates Reload To": [
  null,
  "宣傳重新加載"
 ],
 "RAID Chassis": [
  null,
  "RAID機箱"
 ],
 "Rack Mount Chassis": [
  null,
  "機架式機箱"
 ],
 "Real Host Name": [
  null,
  "真實主機名"
 ],
 "Real host name can only contain lower-case characters, digits, dashes, and periods (with populated subdomains)": [
  null,
  "真實主機名只能包含小寫字符，數字，短劃線和句點（帶有填充的子域）"
 ],
 "Real host name must be 64 characters or less": [
  null,
  "實際主機名必須為64個字符或更少"
 ],
 "Reboot": [
  null,
  "重新開機"
 ],
 "Recent": [
  null,
  "最近開啟"
 ],
 "Reload": [
  null,
  "重新載入"
 ],
 "Reload Propagated From": [
  null,
  "重新傳播來自"
 ],
 "Removals:": [
  null,
  "清除："
 ],
 "Removing $0": [
  null,
  "刪除 $0"
 ],
 "Repeat Daily": [
  null,
  "每日重複"
 ],
 "Repeat Hourly": [
  null,
  "每小時重複一次"
 ],
 "Repeat Monthly": [
  null,
  "重複每月"
 ],
 "Repeat Weekly": [
  null,
  "重複每週"
 ],
 "Repeat Yearly": [
  null,
  "每年重複一次"
 ],
 "Report": [
  null,
  "回報"
 ],
 "Reported": [
  null,
  "報導"
 ],
 "Reporter 'reporter-ureport' not found.": [
  null,
  "記者'記者 - 尿道'未找到。"
 ],
 "Reporting was unsucessful. Try running `reporter-ureport -d ": [
  null,
  "報告不成功。嘗試運行`reporter-ureport -d "
 ],
 "Required By": [
  null,
  "要求的"
 ],
 "Requires": [
  null,
  "需要"
 ],
 "Requisite": [
  null,
  "必要"
 ],
 "Requisite Of": [
  null,
  "必備的"
 ],
 "Reset": [
  null,
  "重設"
 ],
 "Restart": [
  null,
  "重新啟動"
 ],
 "Run": [
  null,
  "執行"
 ],
 "Running Since": [
  null,
  "運行自："
 ],
 "Saturday": [
  null,
  "週六"
 ],
 "Save": [
  null,
  "儲存"
 ],
 "Sealed-case PC": [
  null,
  "密封式PC"
 ],
 "Seconds": [
  null,
  "秒"
 ],
 "Secure Shell Keys": [
  null,
  "安全外殼密鑰"
 ],
 "Security Updates Available": [
  null,
  "安全更新可用"
 ],
 "Service Logs": [
  null,
  "服務日誌"
 ],
 "Service name": [
  null,
  "服務名稱"
 ],
 "Services": [
  null,
  "服務"
 ],
 "Set Host name": [
  null,
  "設置主機名"
 ],
 "Set Time": [
  null,
  "設置時間"
 ],
 "Severity": [
  null,
  "嚴重性"
 ],
 "Show fingerprints": [
  null,
  "顯示指紋"
 ],
 "Shut Down": [
  null,
  "關機"
 ],
 "Slot": [
  null,
  "插槽"
 ],
 "Sockets": [
  null,
  "插槽"
 ],
 "Space-saving Computer": [
  null,
  "節省空間的計算機"
 ],
 "Specific Time": [
  null,
  "特定的時間"
 ],
 "Start": [
  null,
  "開始"
 ],
 "State": [
  null,
  "狀態"
 ],
 "Static": [
  null,
  "靜態"
 ],
 "Status": [
  null,
  "狀態"
 ],
 "Stick PC": [
  null,
  "堅持使用PC"
 ],
 "Stop": [
  null,
  "停止"
 ],
 "Store metrics": [
  null,
  "存儲指標"
 ],
 "Sub Chassis": [
  null,
  "子機箱"
 ],
 "Sub Notebook": [
  null,
  "子筆記本"
 ],
 "Sunday": [
  null,
  "週日"
 ],
 "Swap Used": [
  null,
  "交換使用"
 ],
 "Synchronized": [
  null,
  "同步"
 ],
 "Synchronized with {{Server}}": [
  null,
  "與...同步 {{Server}}"
 ],
 "System": [
  null,
  "系統"
 ],
 "System Information": [
  null,
  "系統資訊"
 ],
 "System Not Registered": [
  null,
  "系統未註冊"
 ],
 "System Services": [
  null,
  "系統服務"
 ],
 "System Time": [
  null,
  "系統時間"
 ],
 "System Up To Date": [
  null,
  "系統最新"
 ],
 "Tablet": [
  null,
  "面板"
 ],
 "Targets": [
  null,
  "目標"
 ],
 "Terminal": [
  null,
  "終端機"
 ],
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  "用戶 <b>$0</b> 沒有創建計時器的權限"
 ],
 "The user <b>$0</b> is not permitted to change the system time": [
  null,
  "用戶 <b>$0</b> 不允許更改系統時間"
 ],
 "The user <b>$0</b> is not permitted to enable or disable services": [
  null,
  "用戶 <b>$0</b> 不允許啟用或禁用服務"
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  "用戶 <b>$0</b> 不允許修改主機名"
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  "用戶 <b>$0</b> 不允許關閉或重新啟動此服務器"
 ],
 "The user <b>$0</b> is not permitted to start or stop services": [
  null,
  "用戶 <b>$0</b> 不允許啟動或停止服務"
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  "這一天並非在所有月份都存在。<br> 計時器只會在有31個月的月份執行。"
 ],
 "This field cannot be empty.": [
  null,
  "此字段不能為空。"
 ],
 "This unit is an instance of the $0 template.": [
  null,
  "這個單位是一個實例 $0 模板。"
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  "此單元未設計為顯式啟用。"
 ],
 "Thursday": [
  null,
  "週四"
 ],
 "Time Zone": [
  null,
  "時區"
 ],
 "Timers": [
  null,
  "計時器"
 ],
 "Total size: $0": [
  null,
  "總大小： $0"
 ],
 "Tower": [
  null,
  "塔"
 ],
 "Triggered By": [
  null,
  "觸發"
 ],
 "Triggers": [
  null,
  "觸發器"
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  "試圖與...同步 {{Server}}"
 ],
 "Tuesday": [
  null,
  "週二"
 ],
 "Type": [
  null,
  "類型"
 ],
 "Unknown": [
  null,
  "不明"
 ],
 "Unmask": [
  null,
  "UNMASK"
 ],
 "Updates Available": [
  null,
  "可用更新"
 ],
 "Usage of $0 CPU core": [
  "Usage of $0 CPU cores",
  "用法 $0 CPU核心"
 ],
 "Used": [
  null,
  "已使用"
 ],
 "User": [
  null,
  "使用者"
 ],
 "Vendor": [
  null,
  "供應商"
 ],
 "Version": [
  null,
  "版本"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "等待其他軟件管理操作完成"
 ],
 "Wanted By": [
  null,
  "通緝"
 ],
 "Wants": [
  null,
  "希望"
 ],
 "Warning and above": [
  null,
  "警告及以上"
 ],
 "Wednesday": [
  null,
  "週三"
 ],
 "Weeks": [
  null,
  "週"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 二進制數據的字節]"
 ],
 "[binary data]": [
  null,
  "[二進制數據]"
 ],
 "[no data]": [
  null,
  "[沒有數據]"
 ],
 "failed to list ssh host keys: $0": [
  null,
  "無法列出ssh​​主機密鑰： $0"
 ],
 "of $0 CPU core": [
  "of $0 CPU cores",
  "的 $0 CPU核心"
 ],
 "unknown": [
  null,
  "不明"
 ],
 "page-title\u0004CPU Status": [
  null,
  "CPU狀態"
 ],
 "page-title\u0004Memory": [
  null,
  "記憶體"
 ]
}));
