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
  "language": "ja",
  "x-generator": "Zanata 4.6.2"
 },
 "Cancel": [
  null,
  "取り消し"
 ],
 "Close": [
  null,
  "閉じる"
 ],
 "Create Report": [
  null,
  "レポートの作成"
 ],
 "Create diagnostic report": [
  null,
  "診断レポートの作成"
 ],
 "Diagnostic reports": [
  null,
  "診断レポート"
 ],
 "Done!": [
  null,
  "完了！"
 ],
 "Download report": [
  null,
  "レポートのダウンロード"
 ],
 "Generating report": [
  null,
  "レポートの生成"
 ],
 "No archive has been created.": [
  null,
  "アーカイブが作成されていません"
 ],
 "The collected information will be stored locally on the system.": [
  null,
  "収集された情報はシステムにローカルで保存されます。"
 ],
 "The generated archive contains data considered sensitive and its content should be reviewed by the originating organization before being passed to any third party.": [
  null,
  "生成されたアーカイブには、機密データと見なされるデータが含まれます。その内容はサードパーティーに渡す前に元の組織が確認する必要があります。"
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  "このツールは、システムの問題の診断で使用するためにシステムからシステム設定と診断情報を収集します。"
 ]
}));
