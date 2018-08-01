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
  "x-generator": "Zanata 4.5.0"
 },
 "$0 Only users with local credentials will be able to log into this machine. This may also effect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  "$0 ローカル認証情報を持つユーザーだけが、このマシンにログインできます。DNS 解決設定と、信頼される CA の一覧が変更する場合があるため、他のサービスにもこれが当てはまることもあります。"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 は、あらゆるリポジトリーから利用できません。"
 ],
 "$0 will be installed.": [
  null,
  "$0 がインストールされます。"
 ],
 "Additional packages:": [
  null,
  "追加のパッケージ:"
 ],
 "Administrator Password": [
  null,
  "管理者パスワード"
 ],
 "Are you sure you want to leave the '$0' domain?": [
  null,
  "'$0' ドメインを解除してもよろしいですか?"
 ],
 "Are you sure you want to leave this domain?": [
  null,
  "このドメインを解除してもよろしいですか?"
 ],
 "Authentication": [
  null,
  "認証"
 ],
 "Automatic": [
  null,
  "自動"
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Cannot join a domain because realmd is not available on this system": [
  null,
  "このシステムでは realmd が利用できないため、ドメインに参加できません"
 ],
 "Checking installed software": [
  null,
  "インストールされたソフトウェアの確認"
 ],
 "Computer OU": [
  null,
  "コンピューター OU"
 ],
 "Domain $0 could not be contacted": [
  null,
  "ドメイン $0 に接続できませんでした"
 ],
 "Domain $0 is not supported": [
  null,
  "ドメイン $0 はサポートされていません"
 ],
 "Domain Address": [
  null,
  "ドメインアドレス"
 ],
 "Domain Administrator Name": [
  null,
  "ドメイン管理者名"
 ],
 "Domain Administrator Password": [
  null,
  "ドメイン管理者パスワード"
 ],
 "Downloading $0": [
  null,
  "$0 をダウンロード中"
 ],
 "Install": [
  null,
  "インストール"
 ],
 "Install Software": [
  null,
  "ソフトウェアをインストール"
 ],
 "Installing $0": [
  null,
  "$0 をインストール中"
 ],
 "Join": [
  null,
  "参加"
 ],
 "Join Domain": [
  null,
  "ドメイン参加"
 ],
 "Join a Domain": [
  null,
  "ドメインの参加"
 ],
 "Joining this domain is not supported": [
  null,
  "このドメインの参加はサポートされていません"
 ],
 "Leave": [
  null,
  "脱退"
 ],
 "Leave Domain": [
  null,
  "ドメインの脱退"
 ],
 "More": [
  null,
  "詳細表示"
 ],
 "Next": [
  null,
  "次へ"
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
 "One Time Password": [
  null,
  "ワンタイムパスワード"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit がクラッシュしました"
 ],
 "Removals:": [
  null,
  "削除:"
 ],
 "Removing $0": [
  null,
  "$0 を削除中"
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "ユーザー <b>$0</b> はレルムを変更することを許可されていません"
 ],
 "This may take a while": [
  null,
  "これにはしばらく時間がかかることがあります"
 ],
 "Total size: $0": [
  null,
  "合計サイズ: $0"
 ],
 "User Name": [
  null,
  "ユーザー名"
 ],
 "User Password": [
  null,
  "ユーザーパスワード"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "他のソフトウェア管理オペレーションが終了するまで待機中"
 ],
 "e.g. \"$0\"": [
  null,
  "例: \"$0\""
 ]
}));
