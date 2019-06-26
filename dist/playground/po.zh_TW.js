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
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 磁盤丟失了"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Control": [
  null,
  "控制"
 ],
 "Delete '{{ name }}'": [
  null,
  "刪除'{{ name }}“"
 ],
 "Empty": [
  null,
  "空的"
 ],
 "Error": [
  null,
  "錯誤"
 ],
 "Memory": [
  null,
  "記憶體"
 ],
 "Network": [
  null,
  "網路"
 ],
 "No matching files found": [
  null,
  "找不到匹配的文件"
 ],
 "Not Ready": [
  null,
  "沒有準備好"
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
 "Path to file": [
  null,
  "文件路徑"
 ],
 "Ready": [
  null,
  "已準備好"
 ],
 "Too many files found": [
  null,
  "找到的文件太多"
 ],
 "Unavailable": [
  null,
  "無法使用"
 ],
 "User": [
  null,
  "使用者"
 ],
 "undefined": [
  null,
  "未定義"
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "$0 磁盤丟失了"
 ],
 "key\u0004Control": [
  null,
  "控制"
 ],
 "verb\u0004Empty": [
  null,
  "空的"
 ],
 "verb\u0004Ready": [
  null,
  "已準備好"
 ]
}));
