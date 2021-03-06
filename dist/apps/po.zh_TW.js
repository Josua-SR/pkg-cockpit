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
 "Applications": [
  null,
  "應用程式"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Checking for new applications": [
  null,
  "檢查新的應用程序"
 ],
 "Close": [
  null,
  "關閉"
 ],
 "Error": [
  null,
  "錯誤"
 ],
 "Go to Application": [
  null,
  "轉到應用程序"
 ],
 "Install": [
  null,
  "安裝"
 ],
 "Installing": [
  null,
  "安裝"
 ],
 "No applications installed or available": [
  null,
  "沒有安裝或可用的應用程序"
 ],
 "No description provided.": [
  null,
  "沒有提供說明。"
 ],
 "No installation package found for this application.": [
  null,
  "找不到此應用程序的安裝包。"
 ],
 "Ok": [
  null,
  "確定"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit崩潰了"
 ],
 "Remove": [
  null,
  "移除"
 ],
 "Removing": [
  null,
  "移除"
 ],
 "Unknown Application": [
  null,
  "未知的申請"
 ],
 "Waiting for other programs to finish using the package manager...": [
  null,
  "等待其他程序完成使用包管理器..."
 ]
}));
