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
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "未安裝兼容版本的Cockpit {{#strong}}{{host}}{{/strong}}。"
 ],
 "About Cockpit": [
  null,
  "關於駕駛艙"
 ],
 "Account Settings": [
  null,
  "帳號設定"
 ],
 "Active Pages": [
  null,
  "活動頁面"
 ],
 "Add": [
  null,
  "加入"
 ],
 "Add Machine to Dashboard": [
  null,
  "將機器添加到儀表板"
 ],
 "Add key": [
  null,
  "添加密鑰"
 ],
 "Address": [
  null,
  "位址"
 ],
 "Authentication": [
  null,
  "核對"
 ],
 "Authentication Failed": [
  null,
  "身份驗證失敗"
 ],
 "Available": [
  null,
  "可用空間"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Cannot connect to an unknown machine": [
  null,
  "無法連接到未知機器"
 ],
 "Change Password": [
  null,
  "更改密碼"
 ],
 "Checking for public keys": [
  null,
  "檢查公鑰"
 ],
 "Choose the language to be used in the application": [
  null,
  "選擇要在應用程序中使用的語言"
 ],
 "Close": [
  null,
  "關閉"
 ],
 "Close Selected Pages": [
  null,
  "關閉所選頁面"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "駕駛艙無法聯繫給定的主人 $0。確保它在端口上運行ssh $1, ，或在地址中指定另一個端口。"
 ],
 "Cockpit had an unexpected internal error. <br/><br/>You can try restarting Cockpit by pressing refresh in your browser. The javascript console contains details about this error (<b>Ctrl-Shift-J</b> in most browsers).": [
  null,
  "駕駛艙出現意外的內部錯誤。 <br/><br/>您可以嘗試通過在瀏覽器中按刷新來重新啟動Cockpit。 javascript控制台包含有關此錯誤的詳細信息（<b>CTRL-Shift-J鍵</b> 在大多數瀏覽器中）。"
 ],
 "Cockpit is an interactive Linux server admin interface.": [
  null,
  "Cockpit是一個交互式Linux服務器管理界面。"
 ],
 "Cockpit is not installed": [
  null,
  "沒有安裝駕駛艙"
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  "駕駛艙無法聯繫 {{#strong}}{{host}}{{/strong}}。"
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  "駕駛艙無法登錄 {{#strong}}{{host}}{{/strong}}。 {{#can_sync}}你可能想嘗試 {{#sync_link}}同步用戶{{/sync_link}}。{{/can_sync}} 有關更多身份驗證選項和故障排除支持，請將cockpit-ws升級到更新版本。"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "駕駛艙無法登錄 {{#strong}}{{host}}{{/strong}}。"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  "駕駛艙無法登錄 {{#strong}}{{host}}{{/strong}}。要將此計算機與駕駛艙一起使用，您需要在sshd config中啟用以下身份驗證方法之一 {{#strong}}{{host}}{{/strong}}："
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  "駕駛艙無法登錄 {{#strong}}{{host}}{{/strong}}。您可以在下面更改身份驗證憑據。 {{#can_sync}}你可能更喜歡 {{#sync_link}}同步帳戶和密碼{{/sync_link}}。{{/can_sync}}"
 ],
 "Color": [
  null,
  "顏色"
 ],
 "Comment": [
  null,
  "備註"
 ],
 "Confirm": [
  null,
  "確認"
 ],
 "Connect": [
  null,
  "連接"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "同時連接到多個 {{ limit }} 機器不受支持。"
 ],
 "Connecting to the machine": [
  null,
  "連接到機器"
 ],
 "Could not contact {{host}}": [
  null,
  "無法聯繫 {{host}}"
 ],
 "Couldn't connect to the machine": [
  null,
  "無法連接到機器"
 ],
 "Details": [
  null,
  "詳情"
 ],
 "Disconnected": [
  null,
  "已離線"
 ],
 "Display Language": [
  null,
  "顯示語言"
 ],
 "Enter IP address or host name": [
  null,
  "輸入IP地址或主機名"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  "在此輸入不同的密碼意味著每次重新連接本機時都需要重新輸入密碼"
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "加載用戶時出錯： {{perm_failed}}"
 ],
 "Failed to add machine: $0": [
  null,
  "添加機器失敗： $0"
 ],
 "Failed to change password": [
  null,
  "無法更改密碼"
 ],
 "Failed to edit machine: $0": [
  null,
  "無法編輯機器： $0"
 ],
 "Fingerprint": [
  null,
  "指紋"
 ],
 "Host": [
  null,
  "主機"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  "要同步用戶，您需要登錄 {{#strong}}{{host}}{{/strong}}。"
 ],
 "Incorrect Host Key": [
  null,
  "主機密鑰不正確"
 ],
 "Invalid file permissions": [
  null,
  "文件權限無效"
 ],
 "Is sshd running on a different port?": [
  null,
  "sshd是否在不同的端口上運行？"
 ],
 "Kerberos Based SSO": [
  null,
  "基於Kerberos的SSO"
 ],
 "Kerberos Ticket": [
  null,
  "Kerberos票證"
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "留空以連接到當前登錄用戶的本機{{#default_user}} （{{default_user}}）{{/default_user}}。如果輸入其他用戶名，將始終使用該用戶連接到此計算機。"
 ],
 "Licensed under:": [
  null,
  "許可下："
 ],
 "Log In": [
  null,
  "登入"
 ],
 "Log Out": [
  null,
  "登出"
 ],
 "Log in again": [
  null,
  "再次登錄"
 ],
 "Log in to {{host}}": [
  null,
  "登錄到 {{host}}"
 ],
 "Login Password": [
  null,
  "登錄密碼"
 ],
 "Login has escalated admin privileges": [
  null,
  "登錄已升級管理員權限"
 ],
 "Machines": [
  null,
  "機"
 ],
 "New Password": [
  null,
  "新密碼"
 ],
 "New password was not accepted": [
  null,
  "不接受新密碼"
 ],
 "No matching files found": [
  null,
  "找不到匹配的文件"
 ],
 "No such file or directory": [
  null,
  "沒有相應的文件和目錄"
 ],
 "Not a valid private key": [
  null,
  "不是有效的私鑰"
 ],
 "Ok": [
  null,
  "確定"
 ],
 "Old Password": [
  null,
  "舊密碼"
 ],
 "Old password not accepted": [
  null,
  "舊密碼不被接受"
 ],
 "Ooops!": [
  null,
  "哎呀！"
 ],
 "Password": [
  null,
  "密碼"
 ],
 "Password not accepted": [
  null,
  "密碼不被接受"
 ],
 "Password not usable for privileged tasks or to connect to other machines": [
  null,
  "密碼不可用於特權任務或連接到其他計算機"
 ],
 "Path to file": [
  null,
  "文件路徑"
 ],
 "Port": [
  null,
  "連接埠"
 ],
 "Privileged": [
  null,
  "特權"
 ],
 "Project website": [
  null,
  "項目網站"
 ],
 "Prompting via ssh-add timed out": [
  null,
  "提示通過ssh-add超時"
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  "通過ssh-keygen提示超時"
 ],
 "Public Key": [
  null,
  "公鑰"
 ],
 "Reconnect": [
  null,
  "重新連接"
 ],
 "Reuse my password for privileged tasks and to connect to other machines": [
  null,
  "重用我的密碼以執行特權任務並連接到其他計算機"
 ],
 "Select": [
  null,
  "選擇"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "選擇您要與之同步的用戶 {{#strong}}{{host}}{{/strong}}"
 ],
 "Synchronize": [
  null,
  "同步"
 ],
 "Synchronize users": [
  null,
  "同步用戶"
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  "IP地址或主機名不能包含空格。"
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  "主機的真實性 {{#strong}}{{host}}{{/strong}} 無法建立。您確定要繼續連接嗎？"
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  "關鍵 {{#strong}}{{host}}{{/strong}} 與之前使用的密鑰不匹配。除非最近更換了這台機器，否則有人可能會試圖攻擊您與此機器的連接。"
 ],
 "The machine is restarting": [
  null,
  "機器正在重新啟動"
 ],
 "The passwords do not match.": [
  null,
  "密碼兩者不相符。"
 ],
 "There are currently no active pages": [
  null,
  "目前沒有活動頁面"
 ],
 "This machine has already been added.": [
  null,
  "這台機器已經添加。"
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "此版本的cockpit-ws不支持使用備用用戶或端口連接到主機"
 ],
 "Tip: Make your key password match your login password to automatically authenticate against other systems.": [
  null,
  "提示：使您的密鑰密碼與您的登錄密碼相匹配，以自動對其他系統進行身份驗證。"
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "要嘗試不同的端口，您需要將cockpit-ws升級到更新的版本。"
 ],
 "Too many files found": [
  null,
  "找到的文件太多"
 ],
 "Troubleshoot": [
  null,
  "疑難排解"
 ],
 "Try to reconnect": [
  null,
  "嘗試重新連接"
 ],
 "Type": [
  null,
  "類型"
 ],
 "Type a password": [
  null,
  "輸入一個密碼"
 ],
 "Unexpected error": [
  null,
  "未預期的錯誤"
 ],
 "Unknown Host Key": [
  null,
  "未知的主機密鑰"
 ],
 "Unlock Key": [
  null,
  "解鎖鑰匙"
 ],
 "Update": [
  null,
  "更新"
 ],
 "Use the following keys to authenticate against other systems": [
  null,
  "使用以下密鑰對其他系統進行身份驗證"
 ],
 "User name": [
  null,
  "使用者名稱"
 ],
 "Using available credentials": [
  null,
  "使用可用的憑據"
 ],
 "Version": [
  null,
  "版本"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "你已經連接到了 {{#strong}}{{host}}{{/strong}}, 但是，為了同步用戶，需要具有超級用戶權限的用戶。"
 ],
 "active": [
  null,
  "活性"
 ]
}));
