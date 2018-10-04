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
  "x-generator": "Zanata 4.6.2"
 },
 "Applications": [
  null,
  "应用"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Checking for new applications": [
  null,
  "检查新的应用"
 ],
 "Close": [
  null,
  "关闭"
 ],
 "Error": [
  null,
  "错误"
 ],
 "Go to Application": [
  null,
  "到应用"
 ],
 "Install": [
  null,
  "安装"
 ],
 "Installing": [
  null,
  "正在安装"
 ],
 "No applications installed or available": [
  null,
  "没有可用的安装"
 ],
 "No description provided.": [
  null,
  "没有提供说明。"
 ],
 "No installation package found for this application.": [
  null,
  "没有找到为该应用的安装包"
 ],
 "Ok": [
  null,
  "确认"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit 已崩溃"
 ],
 "Remove": [
  null,
  "删除"
 ],
 "Removing": [
  null,
  "正在移除"
 ],
 "Unknown Application": [
  null,
  "未知应用"
 ],
 "Waiting for other programs to finish using the package manager...": [
  null,
  "正在等待其他程序来结束使用中的软件包管理器"
 ]
}));
