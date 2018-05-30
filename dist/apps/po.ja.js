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
  "x-generator": "Zanata 4.4.5"
 },
 "Applications": [
  null,
  "アプリケーション"
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Checking for new applications": [
  null,
  "新しいアプリケーションを探す"
 ],
 "Close": [
  null,
  "閉じる"
 ],
 "Error": [
  null,
  "エラー"
 ],
 "Go to Application": [
  null,
  "アプリケーションへ移動"
 ],
 "Install": [
  null,
  "インストール"
 ],
 "Installing": [
  null,
  "インストール中"
 ],
 "No applications installed or available": [
  null,
  "アプリケーションがインストールされていないか、利用できません"
 ],
 "No description provided.": [
  null,
  "説明が入力されていません。"
 ],
 "No installation package found for this application.": [
  null,
  "このアプリケーションのインストールパッケージが見つかりませんでした。"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit がクラッシュしました"
 ],
 "Remove": [
  null,
  "削除"
 ],
 "Removing": [
  null,
  "削除中"
 ],
 "Unknown Application": [
  null,
  "不明なアプリケーション"
 ],
 "Waiting for other programs to finish using the package manager...": [
  null,
  "パッケージマネージャーを使用して、その他のプログラムを終了するのを待機中..."
 ]
}));
