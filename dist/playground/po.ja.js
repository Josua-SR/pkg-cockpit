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
 "$0 day": [
  "$0 days",
  "$0 日"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 ディスクがありません"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 時間"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 分"
 ],
 "$0 month": [
  "$0 months",
  "$0 ヶ月"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 週"
 ],
 "$0 year": [
  "$0 years",
  "$0 年"
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Control": [
  null,
  "コントロール"
 ],
 "Delete '{{ name }}'": [
  null,
  "'{{ name }}' の削除"
 ],
 "Empty": [
  null,
  "空"
 ],
 "Error": [
  null,
  "エラー"
 ],
 "Memory": [
  null,
  "メモリ"
 ],
 "Network": [
  null,
  "ネットワーク"
 ],
 "No matching files found": [
  null,
  "ホストキーが見つかりません。"
 ],
 "Not Ready": [
  null,
  "準備ができていません"
 ],
 "Off": [
  null,
  "オフ"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On": [
  null,
  "オン"
 ],
 "Path to file": [
  null,
  ""
 ],
 "Ready": [
  null,
  "準備ができています"
 ],
 "Too many files found": [
  null,
  ""
 ],
 "Unavailable": [
  null,
  "利用できません"
 ],
 "User": [
  null,
  "ユーザー"
 ],
 "undefined": [
  null,
  "未定義"
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "$0 ディスクがありません"
 ],
 "key\u0004Control": [
  null,
  "コントロール"
 ],
 "verb\u0004Empty": [
  null,
  "空"
 ],
 "verb\u0004Ready": [
  null,
  "準備ができています"
 ]
}));