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
 "Apply": [
  null,
  "套用"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Compress crash dumps to save space": [
  null,
  "壓縮故障轉儲以節省空間"
 ],
 "Compression": [
  null,
  "壓縮"
 ],
 "Crash dump location": [
  null,
  "崩潰轉儲位置"
 ],
 "Crash system": [
  null,
  "崩潰系統"
 ],
 "Directory": [
  null,
  "目錄"
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  "目錄 $0 不可寫或不存在。"
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  "沒有安裝Kdump服務。請確保已安裝包kexec-tools。"
 ],
 "Kernel Dump": [
  null,
  "內核轉儲"
 ],
 "Loading...": [
  null,
  "正在載入..."
 ],
 "Local Filesystem": [
  null,
  "本地文件系統"
 ],
 "Location": [
  null,
  "位置"
 ],
 "More details": [
  null,
  "更多詳細資訊"
 ],
 "Mount": [
  null,
  "安裝"
 ],
 "No configuration found": [
  null,
  "找不到配置"
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  "沒有內存保留。將crashkernel選項附加到內核命令行（例如，在/ etc / default / grub中）以在引導時保留內存。示例：crashkernel = 512M"
 ],
 "None": [
  null,
  "沒有"
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
 "On a mounted device": [
  null,
  "在已安裝的設備上"
 ],
 "Raw to a device": [
  null,
  "原始設備"
 ],
 "Reading...": [
  null,
  "讀..."
 ],
 "Remote over NFS": [
  null,
  "遠程通過NFS"
 ],
 "Remote over SSH": [
  null,
  "遠程通過SSH"
 ],
 "Reserved memory": [
  null,
  "保留的內存"
 ],
 "Server": [
  null,
  "伺服器"
 ],
 "Service has an error": [
  null,
  "服務有錯誤"
 ],
 "Service is running": [
  null,
  "服務正在運行"
 ],
 "Service is starting": [
  null,
  "服務正在開始"
 ],
 "Service is stopped": [
  null,
  "服務已停止"
 ],
 "Service is stopping": [
  null,
  "服務正在停止"
 ],
 "Test Configuration": [
  null,
  "測試配置"
 ],
 "Test is only available while the kdump service is running.": [
  null,
  "測試僅在kdump服務運行時可用。"
 ],
 "Test kdump settings": [
  null,
  "測試kdump設置"
 ],
 "This will test kdump settings by crashing the kernel and thereby the system. Depending on the settings, the system may not automatically reboot and the process may take a while.": [
  null,
  "這將通過崩潰內核以及系統來測試kdump設置。根據設置，系統可能不會自動重啟，並且該過程可能需要一段時間。"
 ],
 "This will test the kdump configuration by crashing the kernel.": [
  null,
  "這將通過崩潰內核來測試kdump配置。"
 ],
 "Unable to apply settings: $0": [
  null,
  "無法應用設置： $0"
 ],
 "invalid: multiple targets defined": [
  null,
  "無效：定義了多個目標"
 ],
 "kdump status": [
  null,
  "kdump狀態"
 ],
 "locally in $0": [
  null,
  "在當地 $0"
 ],
 "nfs dump target isn't formated as server:path": [
  null,
  "nfs dump target未格式化為server：path"
 ],
 "ssh key": [
  null,
  "ssh鍵"
 ],
 "ssh key isn't a path": [
  null,
  "ssh鍵不是路徑"
 ],
 "ssh server is empty": [
  null,
  "ssh服務器是空的"
 ],
 "undefined": [
  null,
  "未定義"
 ]
}));
