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
  "language": "zh_TW",
  "x-generator": "Zanata 4.6.2"
 },
 "Access": [
  null,
  "存取"
 ],
 "Account Expiration": [
  null,
  "帳戶到期"
 ],
 "Account not available or cannot be edited.": [
  null,
  "帳戶不可用或無法編輯。"
 ],
 "Accounts": [
  null,
  "帳號"
 ],
 "Add key": [
  null,
  "添加密鑰"
 ],
 "Add public key": [
  null,
  "添加公鑰"
 ],
 "Adding key": [
  null,
  "添加密鑰"
 ],
 "Authorized Public SSH Keys": [
  null,
  "授權的公共SSH密鑰"
 ],
 "Back to Accounts": [
  null,
  "回到帳戶"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Change": [
  null,
  "改變"
 ],
 "Close": [
  null,
  "關閉"
 ],
 "Confirm": [
  null,
  "確認"
 ],
 "Confirm New Password": [
  null,
  "確認新密碼"
 ],
 "Container Administrator": [
  null,
  "容器管理員"
 ],
 "Create": [
  null,
  "建立"
 ],
 "Create New Account": [
  null,
  "建立新帳戶"
 ],
 "Delete": [
  null,
  "刪除"
 ],
 "Delete $0": [
  null,
  "刪除 $0"
 ],
 "Delete Files": [
  null,
  "刪除檔案"
 ],
 "Error": [
  null,
  "錯誤"
 ],
 "Error saving authorized keys: ": [
  null,
  "保存授權密鑰時出錯： "
 ],
 "Excellent password": [
  null,
  "優秀的密碼"
 ],
 "Failed to change password": [
  null,
  "無法更改密碼"
 ],
 "Failed to load authorized keys.": [
  null,
  "無法加載授權密鑰。"
 ],
 "Force Change": [
  null,
  "強制改變"
 ],
 "Force password change": [
  null,
  "強制更改密碼"
 ],
 "Full Name": [
  null,
  "全名"
 ],
 "Image Builder": [
  null,
  "圖像生成器"
 ],
 "Invalid expiration date": [
  null,
  "失效日期無效"
 ],
 "Invalid key": [
  null,
  "無效的密鑰"
 ],
 "Invalid number of days": [
  null,
  "無效天數"
 ],
 "Last Login": [
  null,
  "上次登錄"
 ],
 "Local Accounts": [
  null,
  "本地帳戶"
 ],
 "Lock Account": [
  null,
  "鎖定帳戶"
 ],
 "Lock account on $0": [
  null,
  "鎖定帳戶 $0"
 ],
 "Logged In": [
  null,
  "登錄"
 ],
 "Never": [
  null,
  "永不"
 ],
 "Never expire password": [
  null,
  "永不過期密碼"
 ],
 "Never lock account": [
  null,
  "從不鎖定帳戶"
 ],
 "New Password": [
  null,
  "新密碼"
 ],
 "New password was not accepted": [
  null,
  "不接受新密碼"
 ],
 "No real name specified": [
  null,
  "沒有指定實名"
 ],
 "No user name specified": [
  null,
  "未指定用戶名"
 ],
 "Off": [
  null,
  "關閉"
 ],
 "Old Password": [
  null,
  "舊密碼"
 ],
 "Old password not accepted": [
  null,
  "舊密碼不被接受"
 ],
 "On": [
  null,
  "開"
 ],
 "Password": [
  null,
  "密碼"
 ],
 "Password Expiration": [
  null,
  "密碼到期"
 ],
 "Password is not acceptable": [
  null,
  "密碼是不可接受的"
 ],
 "Password is too weak": [
  null,
  "密碼太弱了"
 ],
 "Password must be changed": [
  null,
  "密碼必須更改"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "在此處粘貼公共SSH密鑰文件的內容"
 ],
 "Please specify an expiration date": [
  null,
  "請指定到期日期"
 ],
 "Prompting via passwd timed out": [
  null,
  "通過passwd提示超時"
 ],
 "Require password change every $0 days": [
  null,
  "每次都需要密碼更改 $0 天"
 ],
 "Require password change on $0": [
  null,
  "需要更改密碼 $0"
 ],
 "Reset": [
  null,
  "重設"
 ],
 "Roles": [
  null,
  "角色"
 ],
 "Server Administrator": [
  null,
  "Server Administrator"
 ],
 "Set": [
  null,
  "設置"
 ],
 "Set Password": [
  null,
  "設置密碼"
 ],
 "Terminate Session": [
  null,
  "終止會話"
 ],
 "The account '$0' will be forced to change their password on next login": [
  null,
  "帳戶'$0'將在下次登錄時被迫更改密碼"
 ],
 "The key you provided was not valid.": [
  null,
  "您提供的密鑰無效。"
 ],
 "The passwords do not match": [
  null,
  "密碼不匹配"
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  "用戶 <b>$0</b> 不允許修改帳戶"
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  "用戶名只能包含來自az，數字，點，短劃線和下劃線的字母。"
 ],
 "There are no authorized public keys for this account.": [
  null,
  "此帳戶沒有授權的公鑰。"
 ],
 "This user name already exists": [
  null,
  "這個用戶名已經存在"
 ],
 "Unable to delete root account": [
  null,
  "無法刪除root帳戶"
 ],
 "Unable to rename root account": [
  null,
  "無法重命名root帳戶"
 ],
 "Unexpected error": [
  null,
  "未預期的錯誤"
 ],
 "Unnamed": [
  null,
  "未命名"
 ],
 "User Name": [
  null,
  "使用者名稱"
 ],
 "Validating key": [
  null,
  "驗證密鑰"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "您無權查看此帳戶的授權公鑰。"
 ],
 "You must wait longer to change your password": [
  null,
  "您必須等待更長時間才能更改密碼"
 ],
 "translatable": [
  null,
  "翻譯"
 ],
 "page-title\u0004Accounts": [
  null,
  "帳號"
 ]
}));
