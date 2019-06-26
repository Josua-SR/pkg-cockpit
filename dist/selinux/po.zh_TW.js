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
 "$0 occurrence": [
  "$1 occurrences",
  "$0 發生"
 ],
 "Apply this solution": [
  null,
  "應用此解決方案"
 ],
 "Applying solution...": [
  null,
  "應用解決方案"
 ],
 "Audit log": [
  null,
  "稽核日誌"
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  "連接到SETENCshoot守護程序..."
 ],
 "Enforce policy:": [
  null,
  "執行政策："
 ],
 "Error while deleting alert: $0": [
  null,
  "刪除警報時出錯： $0"
 ],
 "Error while setting SELinux mode: '$0'": [
  null,
  "設置SELinux模式時出錯：'$0“"
 ],
 "Failed to delete alert: $0": [
  null,
  "刪除警報失敗： $0"
 ],
 "Install setroubleshoot-server to troubleshoot SELinux events.": [
  null,
  "安裝setroubleshoot-server以解決SELinux事件的故障。"
 ],
 "No SELinux alerts.": [
  null,
  "沒有SELinux警報。"
 ],
 "Not connected": [
  null,
  "未連線"
 ],
 "Occurred $0": [
  null,
  "發生了 $0"
 ],
 "Occurred between $0 and $1": [
  null,
  "發生在。之間 $0 和 $1"
 ],
 "Off": [
  null,
  "關閉"
 ],
 "On": [
  null,
  "開"
 ],
 "SELinux Access Control Errors": [
  null,
  "SELinux訪問控制錯誤"
 ],
 "SELinux Policy": [
  null,
  "SELinux政策"
 ],
 "SELinux Troubleshoot": [
  null,
  "SELinux故障排除"
 ],
 "SELinux is disabled on the system": [
  null,
  "SELinux在系統上被禁用"
 ],
 "SELinux is disabled on the system.": [
  null,
  "SELinux在系統上被禁用。"
 ],
 "SELinux system status is unknown.": [
  null,
  "SELinux系統狀態未知。"
 ],
 "Setting deviates from the configured state and will revert on the next boot.": [
  null,
  "設置偏離配置狀態，並在下次引導時恢復。"
 ],
 "Solution applied successfully": [
  null,
  "解決方案成功應用"
 ],
 "Solution failed": [
  null,
  "解決方案失敗"
 ],
 "Solutions": [
  null,
  "解決方案"
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  "配置狀態未知，可能會在下次引導時更改。"
 ],
 "Unable to apply this solution automatically": [
  null,
  "無法自動應用此解決方案"
 ],
 "Unable to get alert details.": [
  null,
  "無法獲取警報詳細信息。"
 ],
 "Unable to get alert: $0": [
  null,
  "無法獲得警報： $0"
 ],
 "Unable to run fix: %0": [
  null,
  "無法運行修復： %0"
 ],
 "Unable to start setroubleshootd": [
  null,
  "無法啟動setroubleshootd"
 ],
 "Waiting for details...": [
  null,
  "等待細節......"
 ],
 "solution details": [
  null,
  "解決方案細節"
 ]
}));
