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
 "Adding key": [
  null,
  "鍵の追加"
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
 "Container Administrator": [
  null,
  "コンテナー管理者"
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
 "Delete $0": [
  null,
  "$0 の削除"
 ],
 "Delete Files": [
  null,
  "ファイルの削除"
 ],
 "Error": [
  null,
  "エラー"
 ],
 "Error saving authorized keys: ": [
  null,
  "承認された鍵の保存中にエラーが発生しました: "
 ],
 "Excellent password": [
  null,
  "優れたパスワード"
 ],
 "Failed to change password": [
  null,
  "パスワードの変更に失敗しました"
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
 "Image Builder": [
  null,
  "イメージビルダー"
 ],
 "Invalid expiration date": [
  null,
  "無効な有効期限"
 ],
 "Invalid key": [
  null,
  "無効な鍵"
 ],
 "Invalid number of days": [
  null,
  "無効な日数"
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
 "Lock account on $0": [
  null,
  "$0 のアカウントをロック"
 ],
 "Logged In": [
  null,
  "すでにログインしています"
 ],
 "Never": [
  null,
  "しない"
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
 "New password was not accepted": [
  null,
  "新規パスワードは受け入れられませんでした"
 ],
 "No real name specified": [
  null,
  "実際の名前が指定されていません"
 ],
 "No user name specified": [
  null,
  "ユーザー名が指定されていません"
 ],
 "Old Password": [
  null,
  "古いパスワード"
 ],
 "Old password not accepted": [
  null,
  "古いパスワードは受け入れられません"
 ],
 "Password": [
  null,
  "パスワード"
 ],
 "Password Expiration": [
  null,
  "パスワードの有効期限"
 ],
 "Password is not acceptable": [
  null,
  "パスワードは受け入れられません"
 ],
 "Password is too weak": [
  null,
  "パスワードが弱すぎます"
 ],
 "Password must be changed": [
  null,
  "パスワードを変更する必要があります"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "公開 SSH 鍵ファイルの内容をここに貼り付けます"
 ],
 "Please specify an expiration date": [
  null,
  "有効期限を指定してください"
 ],
 "Prompting via passwd timed out": [
  null,
  "passwd によるプロンプトがタイムアウトしました"
 ],
 "Require password change every $0 days": [
  null,
  "$0 日ごとのパスワードの変更が必要"
 ],
 "Require password change on $0": [
  null,
  "$0 でパスワードの変更が必要"
 ],
 "Reset": [
  null,
  "リセット"
 ],
 "Roles": [
  null,
  "ロール"
 ],
 "Server Administrator": [
  null,
  "サーバー管理者"
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
 "The account '$0' will be forced to change their password on next login": [
  null,
  "アカウント '$0' が次回ログインする際に、パスワードの変更が求められます"
 ],
 "The key you provided was not valid.": [
  null,
  "提供した鍵が有効ではありません。"
 ],
 "The passwords do not match": [
  null,
  "パスワードが一致しません"
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  "ユーザー <b>$0</b> はアカウントを変更することを許可されていません"
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  "ユーザー名は a〜z の文字、数字、ドット、ダッシュ、およびアンダースコアだけで構成されます。"
 ],
 "There are no authorized public keys for this account.": [
  null,
  "このアカウントに承認された公開鍵がありません。"
 ],
 "This user name already exists": [
  null,
  "このユーザー名はすでに存在します"
 ],
 "Unable to delete root account": [
  null,
  "root アカウントを削除できません"
 ],
 "Unable to rename root account": [
  null,
  "root アカウントの名前を変更できません"
 ],
 "Unexpected error": [
  null,
  "予期しないエラー"
 ],
 "Unnamed": [
  null,
  "名前なし"
 ],
 "User Name": [
  null,
  "ユーザー名"
 ],
 "Validating key": [
  null,
  "鍵の検証"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "このアカウントに承認された公開鍵を表示するパーミッションがありません"
 ],
 "You must wait longer to change your password": [
  null,
  "パスワードを変更するにはより長い時間の経過が必要です。"
 ],
 "translatable": [
  null,
  "翻訳可能"
 ],
 "page-title\u0004Accounts": [
  null,
  "アカウント"
 ]
}));
