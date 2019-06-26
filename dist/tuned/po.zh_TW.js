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
 "Cancel": [
  null,
  "取消"
 ],
 "Change Performance Profile": [
  null,
  "更改績效檔案"
 ],
 "Change Profile": [
  null,
  "改變檔案"
 ],
 "Communication with tuned has failed": [
  null,
  "與tuned的通信失敗了"
 ],
 "Disable tuned": [
  null,
  "禁用調整"
 ],
 "Failed to disable tuned": [
  null,
  "無法禁用已調整"
 ],
 "Failed to disable tuned profile": [
  null,
  "無法禁用調整的個人資料"
 ],
 "Failed to enable tuned": [
  null,
  "無法啟用調整"
 ],
 "Failed to switch profile": [
  null,
  "無法切換配置文件"
 ],
 "None": [
  null,
  "沒有"
 ],
 "Ok": [
  null,
  "確定"
 ],
 "The user <b>$0</b> is not permitted to change profiles": [
  null,
  "用戶 <b>$0</b> 不允許更改個人資料"
 ],
 "This system is using a custom profile": [
  null,
  "該系統使用自定義配置文件"
 ],
 "This system is using the recommended profile": [
  null,
  "該系統使用推薦的配置文件"
 ],
 "Tuned has failed to start": [
  null,
  "Tuned未能開始"
 ],
 "Tuned is not available": [
  null,
  "調諧不可用"
 ],
 "Tuned is not running": [
  null,
  "Tuned沒有運行"
 ],
 "Tuned is off": [
  null,
  "Tuned已關閉"
 ],
 "none": [
  null,
  "none"
 ],
 "recommended": [
  null,
  "推薦的"
 ]
}));
