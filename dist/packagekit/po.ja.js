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
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Package": [
  "$0 Packages",
  "$0 パッケージ"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 は、あらゆるリポジトリーから利用できません。"
 ],
 "$0 update": [
  "$0 updates",
  "$0 更新"
 ],
 "$0 will be installed.": [
  null,
  "$0 がインストールされます。"
 ],
 "$1 security fix": [
  "$1 security fixes",
  "$1 セキュリティー修正"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  "セキュリティー修正を $1 個含む"
 ],
 "Additional packages:": [
  null,
  "追加のパッケージ:"
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
 "Bugs:": [
  null,
  "バグ:"
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Check for Updates": [
  null,
  "更新の確認"
 ],
 "Checking installed software": [
  null,
  "インストールされたソフトウェアの確認"
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
 "Downloading $0": [
  null,
  "$0 をダウンロード中"
 ],
 "Errata:": [
  null,
  "エラータ:"
 ],
 "Fridays": [
  null,
  "毎週金曜日"
 ],
 "Ignore": [
  null,
  "無視"
 ],
 "Initializing...": [
  null,
  "初期化中..."
 ],
 "Install": [
  null,
  "インストール"
 ],
 "Install All Updates": [
  null,
  "すべてのアップデートをインストール"
 ],
 "Install Security Updates": [
  null,
  "セキュリティーアップデートのインストール"
 ],
 "Install Software": [
  null,
  "ソフトウェアをインストール"
 ],
 "Installed": [
  null,
  "インストール済み"
 ],
 "Installing": [
  null,
  "インストール中"
 ],
 "Installing $0": [
  null,
  "$0 をインストール中"
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
 "Mondays": [
  null,
  "毎週月曜日"
 ],
 "Name": [
  null,
  "名前"
 ],
 "No updates pending": [
  null,
  "保留中の更新がありません"
 ],
 "Ok": [
  null,
  "OK"
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
 "Removals:": [
  null,
  "削除:"
 ],
 "Removing $0": [
  null,
  "$0 を削除中"
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
 "Saturdays": [
  null,
  "毎週土曜日"
 ],
 "Set up": [
  null,
  "設定"
 ],
 "Setting up": [
  null,
  "設定中"
 ],
 "Severity": [
  null,
  "重大度"
 ],
 "Severity:": [
  null,
  "重要度:"
 ],
 "Software Updates": [
  null,
  "ソフトウェア更新"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  "別のプログラムがパッケージマネージャーを使用中です。しばらくお待ちください..."
 ],
 "Sundays": [
  null,
  "毎週日曜日"
 ],
 "System is up to date": [
  null,
  "システムは最新の状態です"
 ],
 "This system is not registered": [
  null,
  "このシステムは登録されていません"
 ],
 "This web console will be updated.": [
  null,
  "この Web コンソールは更新されます。"
 ],
 "Thursdays": [
  null,
  "毎週木曜日"
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  "ソフトウェアアップデートを取得するには、このシステムを Red Hat に登録する必要があります。登録には、Red Hat カスタマーポータルまたはローカルのサブスクリプションサーバーを使用します。"
 ],
 "Total size: $0": [
  null,
  "合計サイズ: $0"
 ],
 "Tuesdays": [
  null,
  "毎週火曜日"
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
 "Waiting for other software management operations to finish": [
  null,
  "他のソフトウェア管理オペレーションが終了するまで待機中"
 ],
 "Wednesdays": [
  null,
  "毎週水曜日"
 ],
 "Your browser will disconnect, but this does not affect the update process. You can reconnect in a few moments to continue watching the progress.": [
  null,
  "ブラウザーが切断されますが、更新プロセスへの影響はありません。すぐに再接続して進捗確認を継続できます。"
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
 "bug fix": [
  null,
  "バグ修正"
 ],
 "enhancement": [
  null,
  "機能強化"
 ],
 "every day": [
  null,
  "毎日"
 ],
 "security": [
  null,
  "セキュリティー"
 ],
 "undefined": [
  null,
  "未定義"
 ]
}));
