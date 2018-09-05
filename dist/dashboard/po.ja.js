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
  "x-generator": "Zanata 4.6.0"
 },
 "$0 day": [
  "$0 days",
  "$0 日"
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
 "1 day": [
  null,
  "1 日"
 ],
 "1 hour": [
  null,
  "1 時間"
 ],
 "1 week": [
  null,
  "1 週間"
 ],
 "5 minutes": [
  null,
  "5 分"
 ],
 "6 hours": [
  null,
  "6 時間"
 ],
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit の互換バージョンが {{#strong}}{{host}}{{/strong}} にインストールされていません。"
 ],
 "Add": [
  null,
  "追加する"
 ],
 "Add Machine to Dashboard": [
  null,
  "ダッシュボードへのマシンの追加"
 ],
 "Address": [
  null,
  "アドレス:"
 ],
 "Advanced TCA": [
  null,
  "高度な TCA"
 ],
 "All In One": [
  null,
  "一体型"
 ],
 "Authentication": [
  null,
  "認証"
 ],
 "Authentication Failed": [
  null,
  "認証に失敗しました"
 ],
 "Available": [
  null,
  "利用可能"
 ],
 "Avatar": [
  null,
  "アバター"
 ],
 "Blade": [
  null,
  "ブレード"
 ],
 "Blade enclosure": [
  null,
  "ブレードエンクロージャー"
 ],
 "Bus Expansion Chassis": [
  null,
  "バス拡張シャーシ"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Can't load image": [
  null,
  "画像を読み込めません。"
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Checking for public keys": [
  null,
  "公開鍵の確認"
 ],
 "Close": [
  null,
  "閉じる"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit は該当するホスト $0 に接続できませんでした。そのホストのポート $1 で ssh が実行されていることを確認するか、アドレスで別のポートを指定します。"
 ],
 "Cockpit is not installed": [
  null,
  "Cockpit はインストールされていません"
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit は {{#strong}}{{host}}{{/strong}} に接続できませんでした。"
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  "Cockpit は {{#strong}}{{host}}{{/strong}} にログインできませんでした。{{#can_sync}}{{#sync_link}}ユーザーの同期{{/sync_link}}を行ってください。{{/can_sync}}他の認証オプションとトラブルシューティングのサポートが必要な場合は、cockpit-ws を新しいバージョンにアップグレードしてください。"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit は {{#strong}}{{host}}{{/strong}} にログインできませんでした。"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  "Cockpit は {{#strong}}{{host}}{{/strong}} にログインできませんでした。このマシンを Cockpit で使用するには、{{#strong}}{{host}}{{/strong}} 上の sshd 設定で次の認証方法のいずれかを有効にする必要があります。"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  "Cockpit は {{#strong}}{{host}}{{/strong}} にログインできませんでした。認証情報は以下で変更できます。{{#can_sync}}{{#sync_link}}アカウントとパスワードの同期{{/sync_link}}を実行できます。{{/can_sync}}"
 ],
 "Color": [
  null,
  "色"
 ],
 "Compact PCI": [
  null,
  "PCI の圧縮"
 ],
 "Connect": [
  null,
  "接続"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "{{ limit }} 台を超えるマシンへの同時接続はサポートされていません。"
 ],
 "Connection Error": [
  null,
  "接続エラー"
 ],
 "Convertible": [
  null,
  "変換可能"
 ],
 "Could not contact {{host}}": [
  null,
  "{{host}} に接続できませんでした"
 ],
 "Dashboard": [
  null,
  "ダッシュボード"
 ],
 "Desktop": [
  null,
  "デスクトップ"
 ],
 "Detachable": [
  null,
  "割り当て解除可能"
 ],
 "Disk I/O": [
  null,
  "ディスク I/O"
 ],
 "Docking Station": [
  null,
  "ドッキングステーション"
 ],
 "Edit Server": [
  null,
  "サーバーの編集"
 ],
 "Embedded PC": [
  null,
  "組み込み PC"
 ],
 "Enter IP address or host name": [
  null,
  "IP アドレスまたはホスト名の入力"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  "ここで別のパスワードを入力すると、このマシンに接続するときに毎回そのパスワードを再入力する必要があります"
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "ユーザーのロード中にエラーが発生しました: {{perm_failed}}"
 ],
 "Expansion Chassis": [
  null,
  "拡張シャーシ"
 ],
 "Failed to add machine: $0": [
  null,
  "マシンの追加に失敗しました: $0"
 ],
 "Failed to change password": [
  null,
  "パスワードの変更に失敗しました"
 ],
 "Failed to edit machine: $0": [
  null,
  "マシンの編集に失敗しました: $0"
 ],
 "Fingerprint": [
  null,
  "フィンガープリント"
 ],
 "Go to now": [
  null,
  "今すぐ移動"
 ],
 "Hand Held": [
  null,
  "ハンドヘルド"
 ],
 "Host Name": [
  null,
  "ホスト名"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  "ユーザーを同期するには、{{#strong}}{{host}}{{/strong}} にログインする必要があります。"
 ],
 "Incorrect Host Key": [
  null,
  "正しくないホストキー"
 ],
 "Invalid file permissions": [
  null,
  "無効なファイルパーミッション"
 ],
 "IoT Gateway": [
  null,
  "IoT ゲートウェイ"
 ],
 "Is sshd running on a different port?": [
  null,
  "sshd が別のポートで実行されていますか?"
 ],
 "Kerberos Based SSO": [
  null,
  "Kerberos ベース SSO"
 ],
 "Kerberos Ticket": [
  null,
  "Kerberos チケット"
 ],
 "Laptop": [
  null,
  "ラップトップ"
 ],
 "Leave blank to connect to this machine as the currently logged in user. If you enter a different username, that user will always be used when connecting to this machine.": [
  null,
  "現在ログインしているユーザーとしてこのマシンに接続する場合は空白のままにします。異なるユーザー名を入力した場合は、このマシンへの接続時にそのユーザーが常に使用されます。"
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "現在ログインしているユーザー {{#default_user}} ({{default_user}}){{/default_user}} としてこのマシンに接続する場合は空白のままにします。別のユーザー名を入力すると、このマシンへの接続時にそのユーザーが常に使用されます。"
 ],
 "Log In": [
  null,
  "ログイン"
 ],
 "Log in to {{host}}": [
  null,
  "{{host}} へのログイン"
 ],
 "Login Password": [
  null,
  "ログインパスワード"
 ],
 "Lost connection. Trying to reconnect": [
  null,
  "接続が失われました。再接続の試行中です"
 ],
 "Low Profile Desktop": [
  null,
  "低プロファイルデスクトップ"
 ],
 "Lunch Box": [
  null,
  "Lunch Box"
 ],
 "Main Server Chassis": [
  null,
  "メインサーバーシャーシ"
 ],
 "Memory": [
  null,
  "メモリ"
 ],
 "Mini PC": [
  null,
  "ミニ PC"
 ],
 "Mini Tower": [
  null,
  "ミニタワー"
 ],
 "Multi-system Chassis": [
  null,
  "マルチシステムシャーシ"
 ],
 "Network": [
  null,
  "ネットワーク"
 ],
 "New password was not accepted": [
  null,
  "新規パスワードは受け入れられませんでした"
 ],
 "No such file or directory": [
  null,
  "このようなファイルまたはディレクトリーがありません"
 ],
 "Not a valid private key": [
  null,
  "有効な秘密鍵ではありません"
 ],
 "Notebook": [
  null,
  "ノートブック"
 ],
 "Off": [
  null,
  "オフ"
 ],
 "Old password not accepted": [
  null,
  "古いパスワードは受け入れられません"
 ],
 "On": [
  null,
  "オン"
 ],
 "Other": [
  null,
  "その他"
 ],
 "Password": [
  null,
  "パスワード"
 ],
 "Password not accepted": [
  null,
  "パスワードは受け入れられません"
 ],
 "Peripheral Chassis": [
  null,
  "周辺機器シャーシ"
 ],
 "Pizza Box": [
  null,
  "Pizza Box"
 ],
 "Port": [
  null,
  "ポート"
 ],
 "Portable": [
  null,
  "ポータブル"
 ],
 "Prompting via ssh-add timed out": [
  null,
  "ssh-add によるプロンプトがタイムアウトしました"
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  "ssh-keygen によるプロンプトがタイムアウトしました"
 ],
 "Public Key": [
  null,
  "公開鍵"
 ],
 "RAID Chassis": [
  null,
  "RAID シャーシ"
 ],
 "Rack Mount Chassis": [
  null,
  "ラックマウントシャーシ"
 ],
 "Sealed-case PC": [
  null,
  "シールドケース PC"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "{{#strong}}{{host}}{{/strong}} と同期するユーザーを選択します"
 ],
 "Servers": [
  null,
  "サーバー"
 ],
 "Set": [
  null,
  "セット"
 ],
 "Space-saving Computer": [
  null,
  "省スペースコンピューター"
 ],
 "Stick PC": [
  null,
  "スティッキー PC"
 ],
 "Sub Chassis": [
  null,
  "サブシャーシ"
 ],
 "Sub Notebook": [
  null,
  "サブノートブック"
 ],
 "Synchronize": [
  null,
  "同期"
 ],
 "Synchronize users": [
  null,
  "ユーザーの同期"
 ],
 "Tablet": [
  null,
  "タブレット"
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  "IP アドレスまたはホスト名にはスペースを含めることができません。"
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  "ホスト {{#strong}}{{host}}{{/strong}} の認証を確立できません。本当に接続を維持しますか?"
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  "{{#strong}}{{host}}{{/strong}} の鍵が、以前に使用された鍵と一致しません。このマシンが最近置き換えられたものでない限り、誰かがこのマシンへの接続を攻撃しようとしている可能性があります。"
 ],
 "The passwords do not match.": [
  null,
  "パスワードが一致しません。"
 ],
 "The user <b>$0</b> is not permitted to manage servers": [
  null,
  "ユーザー <b>$0</b> はサーバーを管理することを許可されていません"
 ],
 "This machine has already been added.": [
  null,
  "このマシンはすでに追加されています。"
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "cockpit-ws のこのバージョンでは、別のユーザーまたはポートによるホストへの接続がサポートされません"
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "別のポートを試すには、cockpit-ws を新しいバージョンにアップグレードする必要があります。"
 ],
 "Tower": [
  null,
  "タワー"
 ],
 "Type a password": [
  null,
  "パスワードを入力します"
 ],
 "Unknown": [
  null,
  "不明"
 ],
 "Unknown Host Key": [
  null,
  "不明なホストキー"
 ],
 "Update": [
  null,
  "更新"
 ],
 "User": [
  null,
  "ユーザー"
 ],
 "User name": [
  null,
  "ユーザー名"
 ],
 "Using available credentials": [
  null,
  "利用可能な認証情報の使用"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "{{#strong}}{{host}}{{/strong}} に接続されていますが、ユーザーを同期するには、スーパーユーザー権限を持つユーザーが必要です。"
 ],
 "You are currently connected directly to this server. You cannot delete it.": [
  null,
  "現在このサーバーに直接接続されています。削除できません。"
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  "以前に保存された鍵を削除するには次のコマンドを実行します"
 ]
}));
