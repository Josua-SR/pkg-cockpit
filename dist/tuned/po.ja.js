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
 "Change Performance Profile": [
  null,
  "パフォーマンスプロファイルの変更"
 ],
 "Change Profile": [
  null,
  "プロファイルの変更"
 ],
 "Communication with tuned has failed": [
  null,
  "tuned との通信に失敗しました"
 ],
 "Disable tuned": [
  null,
  "tuned の無効化"
 ],
 "Failed to disable tuned": [
  null,
  "tuned の無効化に失敗しました"
 ],
 "Failed to disable tuned profile": [
  null,
  "tuned プロファイルの無効化に失敗しました"
 ],
 "Failed to enable tuned": [
  null,
  "tuned の有効化に失敗しました"
 ],
 "Failed to switch profile": [
  null,
  "プロファイルの切り替えに失敗しました"
 ],
 "None": [
  null,
  "なし"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "This system is using a custom profile": [
  null,
  "このシステムはカスタムプロファイルを使用しています"
 ],
 "This system is using the recommended profile": [
  null,
  "このシステムは推奨プロファイルを使用しています"
 ],
 "Tuned has failed to start": [
  null,
  "Tuned の起動に失敗しました"
 ],
 "Tuned is not available": [
  null,
  "Tuned が利用できません"
 ],
 "Tuned is not running": [
  null,
  "Tuned が実行中ではありません"
 ],
 "Tuned is off": [
  null,
  "Tuned がオフです"
 ],
 "none": [
  null,
  "なし"
 ],
 "recommended": [
  null,
  "推奨"
 ]
}));
