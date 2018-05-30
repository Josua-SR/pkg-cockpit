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
 "$0 key ID": [
  null,
  "$0 キー ID"
 ],
 "$0 package": [
  null,
  "$0 パッケージ"
 ],
 "$0 packages": [
  null,
  "$0 パッケージ"
 ],
 "- Add New Repository": [
  null,
  "- 新規リポジトリーの追加"
 ],
 "Add": [
  null,
  "追加する"
 ],
 "Add Another Key": [
  null,
  "別の鍵の追加"
 ],
 "Additions": [
  null,
  "追加"
 ],
 "Apply": [
  null,
  "適用"
 ],
 "Available": [
  null,
  "利用可能"
 ],
 "Begins with '-----BEGIN PGP PUBLIC KEY BLOCK-----'": [
  null,
  "'-----BEGIN PGP PUBLIC KEY BLOCK-----' で始めます"
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Change Repository": [
  null,
  "リポジトリーの変更"
 ],
 "Check for Updates": [
  null,
  "更新の確認"
 ],
 "Checking for updates": [
  null,
  "更新の確認"
 ],
 "Connecting to OSTree": [
  null,
  "OSTree への接続"
 ],
 "Couldn't load settings for '$0': $1": [
  null,
  "'$0' の設定をロードできませんでした: $1"
 ],
 "Currently using:": [
  null,
  "現在使用中:"
 ],
 "Default": [
  null,
  "デフォルト"
 ],
 "Delete": [
  null,
  "削除"
 ],
 "Downgrades": [
  null,
  "ダウングレード"
 ],
 "Error loading remotes: $0": [
  null,
  "リモートのロード中にエラーが発生しました: $0"
 ],
 "Expired Signature": [
  null,
  "期限切れの署名"
 ],
 "Failed": [
  null,
  "失敗"
 ],
 "Good Signature": [
  null,
  "優れた署名"
 ],
 "Invalid Signature": [
  null,
  "無効な署名"
 ],
 "Name": [
  null,
  "名前"
 ],
 "No Deployments": [
  null,
  "デプロイメントなし"
 ],
 "No OSTree deployments found": [
  null,
  "OSTree デプロイメントが見つかりません"
 ],
 "No configuration data found": [
  null,
  "設定データが見つかりません"
 ],
 "No signature avaliable": [
  null,
  "署名が利用できません"
 ],
 "Not authorized to update software on this system": [
  null,
  "このシステム上のソフトウェアを更新する権限がありません"
 ],
 "OS $0 not found": [
  null,
  "OS $0 が見つかりません"
 ],
 "OSTree is not available on this system": [
  null,
  "このシステムでは OSTree は利用できません"
 ],
 "Operating System": [
  null,
  "オペレーティングシステム"
 ],
 "Operating System Updates": [
  null,
  "オペレーティングシステムの更新"
 ],
 "Origin": [
  null,
  "生成"
 ],
 "Packages": [
  null,
  "パッケージ"
 ],
 "Please provide a valid URL": [
  null,
  "有効な URL を提供してください"
 ],
 "Please provide a valid name": [
  null,
  "有効な名前を提供してください"
 ],
 "Rebase and Reboot": [
  null,
  "リベースおよび再起動"
 ],
 "Receiving delta parts": [
  null,
  "デルタ部分の受信"
 ],
 "Receiving metadata objects": [
  null,
  "メタデータオブジェクトの受信"
 ],
 "Receiving objects: $0%": [
  null,
  "オブジェクトの受信: $0%"
 ],
 "Reconnect": [
  null,
  "再接続"
 ],
 "Released": [
  null,
  "リリース済み"
 ],
 "Removals": [
  null,
  "削除"
 ],
 "Roll Back and Reboot": [
  null,
  "ロールバックおよび再起動"
 ],
 "Running": [
  null,
  "実行中"
 ],
 "Scanning metadata": [
  null,
  "メタデータのスキャン"
 ],
 "Signature": [
  null,
  "署名"
 ],
 "Signed by": [
  null,
  "署名者"
 ],
 "Software Updates": [
  null,
  "ソフトウェア更新"
 ],
 "Status": [
  null,
  "状態"
 ],
 "This deployment contains the same packages as your currently booted system": [
  null,
  "このデプロイメントには、現在起動されているシステムと同じパッケージが含まれています"
 ],
 "Tree": [
  null,
  "ツリー"
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unable to communicate with OSTree": [
  null,
  "OSTree と通信できません"
 ],
 "Update and Reboot": [
  null,
  "更新および再起動"
 ],
 "Updates": [
  null,
  "更新"
 ],
 "Updating": [
  null,
  "更新中"
 ],
 "Use trusted GPG key": [
  null,
  "信頼済み GPG 鍵の使用"
 ],
 "Version": [
  null,
  "バージョン"
 ],
 "When": [
  null,
  "日付"
 ],
 "Writing objects": [
  null,
  "オブジェクトの書き込み"
 ],
 "at": [
  null,
  "時間: "
 ]
}));
