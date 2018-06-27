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
 "Change Performance Profile": [
  null,
  "变更性能配置集"
 ],
 "Change Profile": [
  null,
  "变更配置集"
 ],
 "Communication with tuned has failed": [
  null,
  "与 Tuned 通信失败"
 ],
 "Disable tuned": [
  null,
  "禁用 Tuned"
 ],
 "Failed to disable tuned": [
  null,
  "禁用Tuned失败"
 ],
 "Failed to disable tuned profile": [
  null,
  "禁用Tuned配置失败"
 ],
 "Failed to enable tuned": [
  null,
  "启用Tuned失败"
 ],
 "Failed to switch profile": [
  null,
  "切换配置集失败"
 ],
 "None": [
  null,
  "无"
 ],
 "Ok": [
  null,
  "确认"
 ],
 "The user <b>$0</b> is not permitted to change profiles": [
  null,
  ""
 ],
 "This system is using a custom profile": [
  null,
  "该系统正在使用自定义的配置集"
 ],
 "This system is using the recommended profile": [
  null,
  "该系统正在使用推荐的配置集"
 ],
 "Tuned has failed to start": [
  null,
  "Tuned 启动失败"
 ],
 "Tuned is not available": [
  null,
  "Tuned 不可用"
 ],
 "Tuned is not running": [
  null,
  "Tuned 未运行"
 ],
 "Tuned is off": [
  null,
  "Tuned 已关闭"
 ],
 "none": [
  null,
  "空"
 ],
 "recommended": [
  null,
  "推荐"
 ]
}));
