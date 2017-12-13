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
  "$0 を超えています…"
 ],
 "$0 update": [
  "$0 updates",
  "$0 更新"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  "セキュリティー修正を $1 個含む"
 ],
 "Apply all updates": [
  null,
  "すべてのアップデートを適用します"
 ],
 "Apply security updates": [
  null,
  "セキュリティーアップデートを適用します"
 ],
 "Applying updates": [
  null,
  "アップデートの適用中 ..."
 ],
 "Applying updates failed": [
  null,
  "アップデートの適用に失敗しました"
 ],
 "Automatic Updates": [
  null,
  "自動アップデート"
 ],
 "Available Updates": [
  null,
  "利用可能なアップデート"
 ],
 "Bugs": [
  null,
  "バグ"
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Check for Updates": [
  null,
  "更新の確認"
 ],
 "Cockpit itself will be updated.": [
  null,
  "Cockpit 自体がアップデートされます。"
 ],
 "Details": [
  null,
  "詳細"
 ],
 "Downloaded": [
  null,
  "ダウンロードされました"
 ],
 "Downloading": [
  null,
  "ダウンロード中"
 ],
 "Ignore": [
  null,
  "無視"
 ],
 "Initializing...": [
  null,
  "初期化中..."
 ],
 "Install All Updates": [
  null,
  "すべてのアップデートをインストール"
 ],
 "Install Security Updates": [
  null,
  "セキュリティーアップデートのインストール"
 ],
 "Installed": [
  null,
  "インストール済み"
 ],
 "Installing": [
  null,
  "インストール中"
 ],
 "Last checked: $0 ago": [
  null,
  "最終確認: $0 前"
 ],
 "Loading available updates failed": [
  null,
  "利用可能なアップデートのロードに失敗しました"
 ],
 "Loading available updates, please wait...": [
  null,
  "利用可能なアップデートをロード中です。しばらくお待ちください..."
 ],
 "More information…": [
  null,
  "詳細情報…"
 ],
 "Name": [
  null,
  "名前"
 ],
 "No updates pending": [
  null,
  "保留中の更新がありません"
 ],
 "Off": [
  null,
  "オフ"
 ],
 "On": [
  null,
  "オン"
 ],
 "Package information": [
  null,
  "パッケージ情報"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit がクラッシュしました"
 ],
 "PackageKit is not installed": [
  null,
  "PackageKit はインストールされていません"
 ],
 "PackageKit reported error code $0": [
  null,
  "PackageKit が、エラーコード $0 を報告しました"
 ],
 "Refreshing package information": [
  null,
  "パッケージ情報の更新中"
 ],
 "Register…": [
  null,
  "登録中…"
 ],
 "Restart Now": [
  null,
  "すぐに再起動"
 ],
 "Restart Recommended": [
  null,
  "再起動が推奨されます"
 ],
 "Restarting": [
  null,
  "再起動中"
 ],
 "Security Update": [
  null,
  "セキュリティー更新"
 ],
 "Set up": [
  null,
  "設定"
 ],
 "Setting up": [
  null,
  "設定中"
 ],
 "Software Updates": [
  null,
  "ソフトウェア更新"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  "別のプログラムがパッケージマネージャーを使用中です。しばらくお待ちください..."
 ],
 "System is up to date": [
  null,
  "システムは最新の状態です"
 ],
 "The following packages were recently updated:": [
  null,
  "以下のパッケージは最近更新されました:"
 ],
 "The following packages were updated $0:": [
  null,
  "以下のパッケージが更新されました $0:"
 ],
 "This system is not registered": [
  null,
  "このシステムは登録されていません"
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  "ソフトウェアアップデートを取得するには、このシステムを Red Hat に登録する必要があります。登録には、Red Hat カスタマーポータルまたはローカルのサブスクリプションサーバーを使用します。"
 ],
 "Unregistered System": [
  null,
  "未登録のシステム"
 ],
 "Update History": [
  null,
  "履歴の更新"
 ],
 "Update Log": [
  null,
  "ログの更新"
 ],
 "Updated": [
  null,
  "更新済み"
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  "パッケージの更新を反映するには、再起動が必要になる場合があります。"
 ],
 "Updates are disabled.": [
  null,
  "更新が無効です。"
 ],
 "Updating": [
  null,
  "更新中"
 ],
 "Verified": [
  null,
  "検証済み"
 ],
 "Verifying": [
  null,
  "検証中"
 ],
 "Version": [
  null,
  "バージョン"
 ],
 "View Registration Details": [
  null,
  "登録の詳細を表示"
 ],
 "When you get disconnected, the updates will continue in the background. You can reconnect and resume watching the update progress.": [
  null,
  "切断すると、更新は背景で継続します。再接続すると、更新の進捗確認を再開できます。"
 ],
 "You need to re-subscribe this system.": [
  null,
  "再度、このシステムをサブスクライブする必要があります。"
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  "サーバーがまもなく接続を閉じます。再起動したら再接続できます。"
 ],
 "and restart the machine automatically.": [
  null,
  "自動的にマシンを再起動します。"
 ],
 "at": [
  null,
  "時間: "
 ],
 "every day": [
  null,
  "毎日"
 ],
 "on Fridays": [
  null,
  "毎週金曜日"
 ],
 "on Mondays": [
  null,
  "毎週月曜日"
 ],
 "on Saturdays": [
  null,
  "毎週土曜日"
 ],
 "on Sundays": [
  null,
  "毎週日曜日"
 ],
 "on Thursdays": [
  null,
  "毎週木曜日"
 ],
 "on Tuesdays": [
  null,
  "毎週火曜日"
 ],
 "on Wednesdays": [
  null,
  "毎週水曜日"
 ],
 "undefined": [
  null,
  "未定義"
 ]
}));
