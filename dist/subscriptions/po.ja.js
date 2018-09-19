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
 "'Organization' required to register.": [
  null,
  "'組織' を登録する必要があります。"
 ],
 "'Organization' required when using activation keys.": [
  null,
  "アクティベーションキーを使用する場合は '組織' が必要です。"
 ],
 "Access denied": [
  null,
  "アクセスは拒否されました"
 ],
 "Activation Key": [
  null,
  "アクティベーションキー"
 ],
 "Architecture": [
  null,
  "アーキテクチャー"
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Couldn't get system subscription status. Please ensure subscription-manager is installed.": [
  null,
  "システムサブスクリプションステータスを取得できませんでした。subscription-manager がインストールされていることを確認してください。"
 ],
 "Custom URL": [
  null,
  "カスタム URL"
 ],
 "Default": [
  null,
  "デフォルト"
 ],
 "Details": [
  null,
  "詳細"
 ],
 "Ends": [
  null,
  "終了"
 ],
 "Installed products": [
  null,
  "インストールされた製品"
 ],
 "Invalid credentials": [
  null,
  "無効な資格情報"
 ],
 "Invalid username or password": [
  null,
  "無効なユーザー名またはパスワード"
 ],
 "Login": [
  null,
  "ログイン"
 ],
 "Login/password or activation key required to register.": [
  null,
  "ログイン/パスワードまたはアクティベーションキーを登録する必要があります。"
 ],
 "No installed products on the system.": [
  null,
  "システムにインストールされた製品がありません。"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Organization": [
  null,
  "部門"
 ],
 "Password": [
  null,
  "パスワード"
 ],
 "Product ID": [
  null,
  "製品 ID"
 ],
 "Product name": [
  null,
  "製品名"
 ],
 "Proxy": [
  null,
  "プロキシ"
 ],
 "Register": [
  null,
  "登録"
 ],
 "Register system": [
  null,
  "システムの登録"
 ],
 "Retrieving subscription status...": [
  null,
  "サブスクリプションステータスを再取得中 ..."
 ],
 "Server": [
  null,
  "サーバー"
 ],
 "Starts": [
  null,
  "開始"
 ],
 "Status": [
  null,
  "状態"
 ],
 "Status: $0": [
  null,
  "ステータス: $0"
 ],
 "Status: System isn't registered": [
  null,
  "ステータス: システムが登録されていません"
 ],
 "Subscriptions": [
  null,
  "サブスクリプション"
 ],
 "The current user isn't allowed to access system subscription status.": [
  null,
  "現在のユーザーにはシステムサブスクリプションステータスへのアクセスが許可されていません。"
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unable to connect": [
  null,
  "接続できません"
 ],
 "Unregister": [
  null,
  "登録解除"
 ],
 "Unregistering system...": [
  null,
  "システムの登録解除中 ..."
 ],
 "Updating": [
  null,
  "更新中"
 ],
 "Use proxy server": [
  null,
  "プロキシーサーバーの使用"
 ],
 "User": [
  null,
  "ユーザー"
 ],
 "Version": [
  null,
  "バージョン"
 ],
 "undefined": [
  null,
  "未定義"
 ]
}));
