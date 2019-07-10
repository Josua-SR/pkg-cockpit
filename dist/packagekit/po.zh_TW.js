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
 "$0 Package": [
  "$0 Packages",
  ""
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 在任何存儲庫中都不可用。"
 ],
 "$0 update": [
  "$0 updates",
  "$0 更新"
 ],
 "$0 will be installed.": [
  null,
  "$0 將會被安裝。"
 ],
 "$1 security fix": [
  "$1 security fixes",
  "$1 安全修復"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  "， 包含 $1 安全修復"
 ],
 "Additional packages:": [
  null,
  "附加包："
 ],
 "Apply all updates": [
  null,
  "應用所有更新"
 ],
 "Apply security updates": [
  null,
  "應用安全更新"
 ],
 "Applying updates": [
  null,
  "應用更新"
 ],
 "Applying updates failed": [
  null,
  "應用更新失敗"
 ],
 "Automatic Updates": [
  null,
  "自動更新"
 ],
 "Available Updates": [
  null,
  "可用的更新"
 ],
 "Bugs:": [
  null,
  "Bug："
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Check for Updates": [
  null,
  "檢查更新"
 ],
 "Checking installed software": [
  null,
  "檢查已安裝的軟件"
 ],
 "Details": [
  null,
  "詳情"
 ],
 "Downloaded": [
  null,
  "下載"
 ],
 "Downloading": [
  null,
  "下載中"
 ],
 "Downloading $0": [
  null,
  "下載 $0"
 ],
 "Errata:": [
  null,
  "勘誤："
 ],
 "Fridays": [
  null,
  ""
 ],
 "Ignore": [
  null,
  "忽略"
 ],
 "Initializing...": [
  null,
  "初始化..."
 ],
 "Install": [
  null,
  "安裝"
 ],
 "Install All Updates": [
  null,
  "安裝所有更新"
 ],
 "Install Security Updates": [
  null,
  "安裝安全更新"
 ],
 "Install Software": [
  null,
  "安裝軟件"
 ],
 "Installed": [
  null,
  "已安裝"
 ],
 "Installing": [
  null,
  "安裝"
 ],
 "Installing $0": [
  null,
  "正在安裝 $0"
 ],
 "Last checked: $0 ago": [
  null,
  "上次檢查： $0 前"
 ],
 "Loading available updates failed": [
  null,
  "加載可用更新失敗"
 ],
 "Loading available updates, please wait...": [
  null,
  "正在加載可用的更新，請稍候..."
 ],
 "Mondays": [
  null,
  ""
 ],
 "Name": [
  null,
  "名稱"
 ],
 "No updates pending": [
  null,
  "沒有待更新"
 ],
 "Ok": [
  null,
  "確定"
 ],
 "Package information": [
  null,
  "包裹信息"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit崩潰了"
 ],
 "PackageKit is not installed": [
  null,
  "未安裝PackageKit"
 ],
 "PackageKit reported error code $0": [
  null,
  "PackageKit報告了錯誤代碼 $0"
 ],
 "Refreshing package information": [
  null,
  "刷新包信息"
 ],
 "Register…": [
  null,
  "寄存器…"
 ],
 "Removals:": [
  null,
  "清除："
 ],
 "Removing $0": [
  null,
  "刪除 $0"
 ],
 "Restart Now": [
  null,
  "現在重啟"
 ],
 "Restart Recommended": [
  null,
  "重啟推薦"
 ],
 "Restarting": [
  null,
  "重新啟動"
 ],
 "Saturdays": [
  null,
  ""
 ],
 "Set up": [
  null,
  "建立"
 ],
 "Setting up": [
  null,
  "配置"
 ],
 "Severity": [
  null,
  "嚴重性"
 ],
 "Severity:": [
  null,
  "嚴重性："
 ],
 "Software Updates": [
  null,
  "軟件更新"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  "其他一些程序目前正在使用包管理器，請稍候..."
 ],
 "Sundays": [
  null,
  ""
 ],
 "System is up to date": [
  null,
  "系統已更新至最新狀態"
 ],
 "This system is not registered": [
  null,
  "該系統未註冊"
 ],
 "This web console will be updated.": [
  null,
  "此Web控制台將更新。"
 ],
 "Thursdays": [
  null,
  ""
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  "要獲得軟件更新，需要使用Red Hat客戶門戶或本地訂閱服務器向Red Hat註冊此系統。"
 ],
 "Total size: $0": [
  null,
  "總大小： $0"
 ],
 "Tuesdays": [
  null,
  ""
 ],
 "Update History": [
  null,
  "更新歷史記錄"
 ],
 "Update Log": [
  null,
  "更新日誌"
 ],
 "Updated": [
  null,
  "已更新"
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  "更新的軟件包可能需要重新啟動才能生效。"
 ],
 "Updating": [
  null,
  "更新"
 ],
 "Verified": [
  null,
  "驗證"
 ],
 "Verifying": [
  null,
  "核驗"
 ],
 "Version": [
  null,
  "版本"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "等待其他軟件管理操作完成"
 ],
 "Wednesdays": [
  null,
  ""
 ],
 "Your browser will disconnect, but this does not affect the update process. You can reconnect in a few moments to continue watching the progress.": [
  null,
  "您的瀏覽器將斷開連接，但這不會影響更新過程。您可以在幾分鐘後重新連接以繼續觀察進度。"
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  "您的服務器很快就會關閉連接。您可以在重新啟動後重新連接。"
 ],
 "and restart the machine automatically.": [
  null,
  "並自動重啟機器。"
 ],
 "at": [
  null,
  "於"
 ],
 "bug fix": [
  null,
  "錯誤修復"
 ],
 "enhancement": [
  null,
  "增強"
 ],
 "every day": [
  null,
  "每天"
 ],
 "security": [
  null,
  "安全性"
 ],
 "undefined": [
  null,
  "未定義"
 ]
}));
