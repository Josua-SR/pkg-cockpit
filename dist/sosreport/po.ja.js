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
  "language": "ja",
  "x-generator": "Zanata 3.9.6"
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
  "収集した情報は、システムのローカルに保存されます。"
 ],
 "The generated archive contains data considered sensitive and its content should be reviewed by the originating organization before being passed to any third party.": [
  null,
  "生成されたアーカイブには、機密データと見なされるデータが含まれます。サードパーティーに渡す前に、所属先の組織に確認してください。"
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  "このツールは、システムの問題を診断するのに使用する、システム設定と診断情報をシステムから収集します。"
 ]
}));
