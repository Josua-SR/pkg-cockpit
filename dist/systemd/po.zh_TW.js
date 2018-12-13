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
 "Asset Tag": [
  null,
  "資產標籤"
 ],
 "At specific time": [
  null,
  "在特定時間"
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
 "Checking installed software": [
  null,
  "檢查已安裝的軟件"
 ],
 "Class": [
  null,
  "類別"
 ],
 "Close": [
  null,
  "關閉"
 ],
 "Command": [
  null,
  "指令"
 ],
 "Condition failed": [
  null,
  "條件失敗"
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
 "Disk I/O": [
  null,
  "磁碟 I/O"
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
 "Enable stored metrics…": [
  null,
  "啟用存儲的指標..."
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
 "Hours": [
  null,
  "時"
 ],
 "I/O Wait": [
  null,
  "I / O等待"
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
 "Invalid time zone": [
  null,
  "時區無效"
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
 "Last 24 hours": [
  null,
  "過去24小時"
 ],
 "Last 7 days": [
  null,
  "過去7天"
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
 "Machine ID": [
  null,
  "機器ID"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "機器SSH密鑰指紋"
 ],
 "Manually": [
  null,
  "手動"
 ],
 "Memory": [
  null,
  "記憶體"
 ],
 "Memory & Swap": [
  null,
  "記憶和交換"
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
 "Name": [
  null,
  "名稱"
 ],
 "Network Traffic": [
  null,
  "網絡流量"
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
 "Only Emergency": [
  null,
  "只有緊急情況"
 ],
 "Operating System": [
  null,
  "作業系統"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "Paths": [
  null,
  "路徑"
 ],
 "Performance Profile": [
  null,
  "績效簡介"
 ],
 "Power Options": [
  null,
  "電源選項"
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
 "Real Host Name": [
  null,
  "真實主機名"
 ],
 "Reboot": [
  null,
  "重新開機"
 ],
 "Recent": [
  null,
  "最近開啟"
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
 "Saturday": [
  null,
  "週六"
 ],
 "Save": [
  null,
  "儲存"
 ],
 "Seconds": [
  null,
  "秒"
 ],
 "Secure Shell Keys": [
  null,
  "安全外殼密鑰"
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
 "Specific Time": [
  null,
  "特定的時間"
 ],
 "Store metrics": [
  null,
  "存儲指標"
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
 "System Services": [
  null,
  "系統服務"
 ],
 "System Time": [
  null,
  "系統時間"
 ],
 "Targets": [
  null,
  "目標"
 ],
 "Terminal": [
  null,
  "終端機"
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
 ]
}));
