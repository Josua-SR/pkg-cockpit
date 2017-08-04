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
 "$0 more…": [
  null,
  ""
 ],
 "$0 update": [
  "$0 updates",
  "更新"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  ""
 ],
 "Applying updates": [
  null,
  "ソリューションの適用中 ..."
 ],
 "Applying updates failed": [
  null,
  ""
 ],
 "Available Updates": [
  null,
  "利用可能"
 ],
 "Bugs": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Check for updates": [
  null,
  "更新の確認"
 ],
 "Cockpit itself will be updated.": [
  null,
  ""
 ],
 "Details": [
  null,
  "詳細"
 ],
 "Downloaded": [
  null,
  "ダウンロード"
 ],
 "Downloading": [
  null,
  "ダウンロード"
 ],
 "Ignore": [
  null,
  "無視"
 ],
 "Initializing...": [
  null,
  ""
 ],
 "Install all updates": [
  null,
  "インストールされた製品"
 ],
 "Install security updates": [
  null,
  "インストールされた製品"
 ],
 "Installed": [
  null,
  "インストールされた製品"
 ],
 "Installing": [
  null,
  ""
 ],
 "Last checked: $0 ago": [
  null,
  ""
 ],
 "Loading available updates failed": [
  null,
  "利用可能な認証情報の使用"
 ],
 "Loading available updates, please wait...": [
  null,
  ""
 ],
 "More information…": [
  null,
  ""
 ],
 "Name": [
  null,
  "名前"
 ],
 "No updates pending": [
  null,
  ""
 ],
 "Package information": [
  null,
  ""
 ],
 "PackageKit crashed": [
  null,
  "パッケージ"
 ],
 "PackageKit is not installed": [
  null,
  "Cockpit はインストールされていません"
 ],
 "PackageKit reported error code $0": [
  null,
  ""
 ],
 "Refreshing package information": [
  null,
  ""
 ],
 "Restart Now": [
  null,
  "再起動"
 ],
 "Restart Recommended": [
  null,
  "推奨"
 ],
 "Restarting": [
  null,
  "再起動"
 ],
 "Security Update": [
  null,
  "Security"
 ],
 "Set up": [
  null,
  "設定値"
 ],
 "Setting up": [
  null,
  "IP 設定"
 ],
 "Software Updates": [
  null,
  "ソフトウェア更新"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  ""
 ],
 "System is up to date": [
  null,
  ""
 ],
 "The following packages were recently updated:": [
  null,
  ""
 ],
 "The following packages were updated $0:": [
  null,
  ""
 ],
 "Update History": [
  null,
  "更新"
 ],
 "Update Log": [
  null,
  "更新"
 ],
 "Updated": [
  null,
  "更新"
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  ""
 ],
 "Updating": [
  null,
  "更新中"
 ],
 "Verified": [
  null,
  ""
 ],
 "Verifying": [
  null,
  ""
 ],
 "Version": [
  null,
  "バージョン"
 ],
 "When you get disconnected, the updates will continue in the background. You can reconnect and resume watching the update progress.": [
  null,
  ""
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  ""
 ]
}));