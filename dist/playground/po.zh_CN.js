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
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 磁盘无法找到"
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
  "删除 '{{ name }}'"
 ],
 "Empty": [
  null,
  "空"
 ],
 "Error": [
  null,
  "错误"
 ],
 "Memory": [
  null,
  "内存"
 ],
 "Network": [
  null,
  "网络"
 ],
 "No matching files found": [
  null,
  "没有找到匹配的文件"
 ],
 "Not Ready": [
  null,
  "未就绪"
 ],
 "Off": [
  null,
  "关"
 ],
 "Ok": [
  null,
  "确认"
 ],
 "On": [
  null,
  "开"
 ],
 "Path to file": [
  null,
  "文件路径"
 ],
 "Ready": [
  null,
  "就绪"
 ],
 "Too many files found": [
  null,
  "找到太多文件"
 ],
 "Unavailable": [
  null,
  "不可用"
 ],
 "User": [
  null,
  "用户"
 ],
 "undefined": [
  null,
  "未定义"
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "$0 磁盘无法找到"
 ],
 "key\u0004Control": [
  null,
  "控制"
 ],
 "verb\u0004Empty": [
  null,
  "空"
 ],
 "verb\u0004Ready": [
  null,
  "就绪"
 ]
}));
