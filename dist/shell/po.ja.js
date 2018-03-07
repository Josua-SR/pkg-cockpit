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
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit の互換バージョンが {{#strong}}{{host}}{{/strong}} にインストールされていません。"
 ],
 "About Cockpit": [
  null,
  "Cockpit について"
 ],
 "Account Settings": [
  null,
  "アカウント設定"
 ],
 "Active Pages": [
  null,
  "アクティブページ"
 ],
 "Add": [
  null,
  "追加する"
 ],
 "Add Machine to Dashboard": [
  null,
  "ダッシュボードへのマシンの追加"
 ],
 "Add key": [
  null,
  "鍵の追加"
 ],
 "Address": [
  null,
  "アドレス:"
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
 "Cancel": [
  null,
  "取り消し"
 ],
 "Cannot connect to an unknown machine": [
  null,
  "不明なマシンには接続できません"
 ],
 "Change Password": [
  null,
  "パスワードの変更"
 ],
 "Checking for public keys": [
  null,
  "公開鍵の確認"
 ],
 "Choose the language to be used in the application": [
  null,
  "アプリケーションで使用する言語の選択"
 ],
 "Close": [
  null,
  "閉じる"
 ],
 "Close Selected Pages": [
  null,
  "選択されたページを閉じる"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit は該当するホスト $0 に接続できませんでした。そのホストのポート $1 で ssh が実行されていることを確認するか、アドレスで別のポートを指定します。"
 ],
 "Cockpit had an unexpected internal error. <br/><br/>You can try restarting Cockpit by pressing refresh in your browser. The javascript console contains details about this error (<b>Ctrl-Shift-J</b> in most browsers).": [
  null,
  "Cockpit で予期しない内部エラーが発生しました。<br/><br/>ブラウザーで更新を押して Cockpit の再起動を試行できます。javascript コンソールにはこのエラーに関する詳細が含まれます (ほとんどのブラウザーでは <b>Ctrl-Shift-J</b>)。"
 ],
 "Cockpit is an interactive Linux server admin interface.": [
  null,
  "Cockpit は対話型 Linux サーバー管理インターフェースです。"
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
 "Comment": [
  null,
  "コメント"
 ],
 "Confirm": [
  null,
  "確定します"
 ],
 "Connect": [
  null,
  "接続"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "{{ limit }} 台を超えるマシンへの同時接続はサポートされていません。"
 ],
 "Connecting to the machine": [
  null,
  "マシンへの接続"
 ],
 "Could not contact {{host}}": [
  null,
  "{{host}} に接続できませんでした"
 ],
 "Couldn't connect to the machine": [
  null,
  "マシンに接続できませんでした"
 ],
 "Details": [
  null,
  "詳細"
 ],
 "Disconnected": [
  null,
  "切断されています"
 ],
 "Display Language": [
  null,
  "言語の表示"
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
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "現在ログインしているユーザー {{#default_user}} ({{default_user}}){{/default_user}} としてこのマシンに接続する場合は空白のままにします。別のユーザー名を入力すると、このマシンへの接続時にそのユーザーが常に使用されます。"
 ],
 "Licensed under:": [
  null,
  "ライセンス保持者:"
 ],
 "Lock to prevent privileged tasks": [
  null,
  "特権タスクを防ぐためにロック"
 ],
 "Locked": [
  null,
  "ロック"
 ],
 "Log In": [
  null,
  "ログイン"
 ],
 "Log Out": [
  null,
  "ログアウト"
 ],
 "Log in again": [
  null,
  "再ログイン"
 ],
 "Log in to {{host}}": [
  null,
  "{{host}} へのログイン"
 ],
 "Login Password": [
  null,
  "ログインパスワード"
 ],
 "Machines": [
  null,
  "マシン"
 ],
 "New Password": [
  null,
  "新規パスワード"
 ],
 "New password was not accepted": [
  null,
  "新規パスワードは受け入れられませんでした"
 ],
 "No matching files found": [
  null,
  "一致するファイルが見つかりませんでした。"
 ],
 "No such file or directory": [
  null,
  "このようなファイルまたはディレクトリーがありません"
 ],
 "Not a valid private key": [
  null,
  "有効な秘密鍵ではありません"
 ],
 "Off": [
  null,
  "オフ"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Old Password": [
  null,
  "古いパスワード"
 ],
 "Old password not accepted": [
  null,
  "古いパスワードは受け入れられません"
 ],
 "On": [
  null,
  "オン"
 ],
 "Ooops!": [
  null,
  "問題が発生しました"
 ],
 "Password": [
  null,
  "パスワード"
 ],
 "Password not accepted": [
  null,
  "パスワードは受け入れられません"
 ],
 "Password not usable for privileged tasks or to connect to other machines": [
  null,
  "特権タスクの実行または他のマシンへの接続のためにパスワードを使用できません"
 ],
 "Path to file": [
  null,
  "ファイルのパス"
 ],
 "Port": [
  null,
  "ポート"
 ],
 "Privileged tasks not available": [
  null,
  "特権タスクが利用できません"
 ],
 "Project website": [
  null,
  "プロジェクト Web サイト"
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
 "Reconnect": [
  null,
  "再接続"
 ],
 "Reuse my password for privileged tasks and to connect to other machines": [
  null,
  "特権タスクの実行または他のマシンへの接続のためにパスワードを再使用します"
 ],
 "Select": [
  null,
  "選択"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "{{#strong}}{{host}}{{/strong}} と同期するユーザーを選択します"
 ],
 "Synchronize": [
  null,
  "同期"
 ],
 "Synchronize users": [
  null,
  "ユーザーの同期"
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
 "The machine is restarting": [
  null,
  "マシンが再起動中です"
 ],
 "The passwords do not match.": [
  null,
  "パスワードが一致しません。"
 ],
 "There are currently no active pages": [
  null,
  "現在アクティブなページはありません"
 ],
 "This machine has already been added.": [
  null,
  "このマシンはすでに追加されています。"
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "cockpit-ws のこのバージョンでは、別のユーザーまたはポートによるホストへの接続がサポートされません"
 ],
 "Tip: Make your key password match your login password to automatically authenticate against other systems.": [
  null,
  "ヒント: 他のシステムに対して自動的に認証する場合は、鍵のパスワードをログインパスワードに一致させます。"
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "別のポートを試すには、cockpit-ws を新しいバージョンにアップグレードする必要があります。"
 ],
 "Too many files found": [
  null,
  "見つかったファイルが多すぎます"
 ],
 "Troubleshoot": [
  null,
  "トラブルシュート"
 ],
 "Try to reconnect": [
  null,
  "再接続を試行します"
 ],
 "Type": [
  null,
  "タイプ"
 ],
 "Type a password": [
  null,
  "パスワードを入力します"
 ],
 "Unexpected error": [
  null,
  "予期しないエラー"
 ],
 "Unknown Host Key": [
  null,
  "不明なホストキー"
 ],
 "Unlock Key": [
  null,
  "ロック解除キー"
 ],
 "Unlocked": [
  null,
  "ロック解除済み"
 ],
 "Update": [
  null,
  "更新"
 ],
 "Use the following keys to authenticate against other systems": [
  null,
  "他のシステムに対して認証する場合は次の鍵を使用します"
 ],
 "User name": [
  null,
  "ユーザー名"
 ],
 "Using available credentials": [
  null,
  "利用可能な認証情報の使用"
 ],
 "Version": [
  null,
  "バージョン"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "{{#strong}}{{host}}{{/strong}} に接続されていますが、ユーザーを同期するには、スーパーユーザー権限を持つユーザーが必要です。"
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  "以前に保存された鍵を削除するには次のコマンドを実行します"
 ],
 "active": [
  null,
  "アクティブ"
 ]
}));
