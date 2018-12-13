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
  "x-generator": "Zanata 4.6.2"
 },
 "Access": [
  null,
  "アクセス"
 ],
 "Account Expiration": [
  null,
  "アカウントの有効期限"
 ],
 "Account not available or cannot be edited.": [
  null,
  "アカウントが利用可能でないか、アカウントを編集できません。"
 ],
 "Accounts": [
  null,
  "アカウント"
 ],
 "Add key": [
  null,
  "鍵の追加"
 ],
 "Add public key": [
  null,
  "公開鍵の追加"
 ],
 "Authorized Public SSH Keys": [
  null,
  "承認された公開 SSH 鍵"
 ],
 "Back to Accounts": [
  null,
  "アカウントに戻る"
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Change": [
  null,
  "変更"
 ],
 "Close": [
  null,
  "閉じる"
 ],
 "Confirm": [
  null,
  "確定します"
 ],
 "Confirm New Password": [
  null,
  "新規パスワードの確認"
 ],
 "Create": [
  null,
  "作成"
 ],
 "Create New Account": [
  null,
  "新規アカウントの作成"
 ],
 "Delete": [
  null,
  "削除"
 ],
 "Delete Files": [
  null,
  "ファイルの削除"
 ],
 "Failed to load authorized keys.": [
  null,
  "承認された鍵のロードに失敗しました。"
 ],
 "Force Change": [
  null,
  "変更の強制"
 ],
 "Force password change": [
  null,
  "パスワード変更の強制"
 ],
 "Full Name": [
  null,
  "フルネーム"
 ],
 "Invalid key": [
  null,
  "無効な鍵"
 ],
 "Last Login": [
  null,
  "最終ログイン"
 ],
 "Local Accounts": [
  null,
  "ローカルアカウント"
 ],
 "Lock Account": [
  null,
  "アカウントのロック"
 ],
 "Never expire password": [
  null,
  "パスワードを失効しない"
 ],
 "Never lock account": [
  null,
  "アカウントをロックしない"
 ],
 "New Password": [
  null,
  "新規パスワード"
 ],
 "Off": [
  null,
  "オフ"
 ],
 "Old Password": [
  null,
  "古いパスワード"
 ],
 "On": [
  null,
  "オン"
 ],
 "Password": [
  null,
  "パスワード"
 ],
 "Password Expiration": [
  null,
  "パスワードの有効期限"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "公開 SSH 鍵ファイルの内容をここに貼り付けます"
 ],
 "Reset": [
  null,
  "リセット"
 ],
 "Roles": [
  null,
  "ロール"
 ],
 "Set": [
  null,
  "セット"
 ],
 "Set Password": [
  null,
  "パスワードの設定"
 ],
 "Terminate Session": [
  null,
  "セッションの終了"
 ],
 "There are no authorized public keys for this account.": [
  null,
  "このアカウントに承認された公開鍵がありません。"
 ],
 "Unnamed": [
  null,
  "名前なし"
 ],
 "User Name": [
  null,
  "ユーザー名"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "このアカウントに承認された公開鍵を表示するパーミッションがありません"
 ],
 "translatable": [
  null,
  "翻訳可能"
 ]
}));
