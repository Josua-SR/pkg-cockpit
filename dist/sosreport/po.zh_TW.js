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
 "Cancel": [
  null,
  "取消"
 ],
 "Close": [
  null,
  "關閉"
 ],
 "Create Report": [
  null,
  "創建報告"
 ],
 "Create diagnostic report": [
  null,
  "創建診斷報告"
 ],
 "Diagnostic reports": [
  null,
  "診斷報告"
 ],
 "Done!": [
  null,
  "完成！"
 ],
 "Download report": [
  null,
  "下載報告"
 ],
 "Generating report": [
  null,
  "生成報告"
 ],
 "No archive has been created.": [
  null,
  "沒有創建存檔。"
 ],
 "The collected information will be stored locally on the system.": [
  null,
  "收集的信息將本地存儲在系統中。"
 ],
 "The generated archive contains data considered sensitive and its content should be reviewed by the originating organization before being passed to any third party.": [
  null,
  "生成的存檔包含被視為敏感的數據，其內容應在發送給任何第三方之前由原始組織審核。"
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  "該工具將從該系統收集系統配置和診斷信息，以用於診斷系統問題。"
 ]
}));
