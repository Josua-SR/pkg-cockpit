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
  "language": "zh_CN",
  "x-generator": "Zanata 4.4.5"
 },
 "Cancel": [
  null,
  "取消"
 ],
 "Close": [
  null,
  "关闭"
 ],
 "Create Report": [
  null,
  "创建报表"
 ],
 "Create diagnostic report": [
  null,
  "创建诊断报告"
 ],
 "Diagnostic reports": [
  null,
  "诊断报告"
 ],
 "Done!": [
  null,
  "已完成！"
 ],
 "Download report": [
  null,
  "下载报表"
 ],
 "Generating report": [
  null,
  "正在生成报告"
 ],
 "No archive has been created.": [
  null,
  "没有档案被创建"
 ],
 "The collected information will be stored locally on the system.": [
  null,
  "搜集的信息将保存在系统本地。"
 ],
 "The generated archive contains data considered sensitive and its content should be reviewed by the originating organization before being passed to any third party.": [
  null,
  "生成的文档包含被认为敏感的数据并且其内容在传递到第三方前应该由发起组织检查通过。"
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  "该工具将会为诊断系统问题的用户，从该系统搜集系统配置和诊断信息。"
 ]
}));
