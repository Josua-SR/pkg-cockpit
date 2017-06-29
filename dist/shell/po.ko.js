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
  "language": "ko",
  "x-generator": "Zanata 3.9.6"
 },
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "About Cockpit": [
  null,
  "Cockpit에 대하여"
 ],
 "Account Settings": [
  null,
  "계정 설정"
 ],
 "Active Pages": [
  null,
  ""
 ],
 "Add": [
  null,
  "추가"
 ],
 "Add Machine to Dashboard": [
  null,
  ""
 ],
 "Address": [
  null,
  "주소"
 ],
 "Authentication": [
  null,
  ""
 ],
 "Authentication Failed": [
  null,
  ""
 ],
 "Available": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Cannot connect to an unknown machine": [
  null,
  ""
 ],
 "Change Password": [
  null,
  ""
 ],
 "Checking for public keys": [
  null,
  ""
 ],
 "Choose the language to be used in the application": [
  null,
  "사용하실 언어를 선택해주세요"
 ],
 "Close": [
  null,
  "닫기"
 ],
 "Close Selected Pages": [
  null,
  ""
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  ""
 ],
 "Cockpit had an unexpected internal error. <br/><br/>You can try restarting Cockpit by pressing refresh in your browser. The javascript console contains details about this error (<b>Ctrl-Shift-J</b> in most browsers).": [
  null,
  ""
 ],
 "Cockpit is an interactive Linux server admin interface.": [
  null,
  ""
 ],
 "Cockpit is an interactive Linux server admin interface. ": [
  null,
  ""
 ],
 "Cockpit is not installed": [
  null,
  ""
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  ""
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  ""
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  ""
 ],
 "Color": [
  null,
  ""
 ],
 "Comment": [
  null,
  ""
 ],
 "Confirm": [
  null,
  ""
 ],
 "Connect": [
  null,
  ""
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  ""
 ],
 "Connecting to the machine": [
  null,
  "장치에 연결 중입니다"
 ],
 "Could not contact {{host}}": [
  null,
  ""
 ],
 "Couldn't connect to the machine": [
  null,
  "장치에 연결할 수 없습니다"
 ],
 "Details": [
  null,
  ""
 ],
 "Disconnected": [
  null,
  "연결 해제됨"
 ],
 "Display Language": [
  null,
  "표시 언어"
 ],
 "Enter IP address or host name": [
  null,
  "IP 주소 또는 호스트 명을 입력하세요"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  ""
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  ""
 ],
 "Failed to add machine: $0": [
  null,
  ""
 ],
 "Failed to change password": [
  null,
  ""
 ],
 "Failed to edit machine: $0": [
  null,
  ""
 ],
 "Fingerprint": [
  null,
  ""
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "Incorrect Host Key": [
  null,
  ""
 ],
 "Invalid file permissions": [
  null,
  ""
 ],
 "Is sshd running on a different port?": [
  null,
  ""
 ],
 "Kerberos Based SSO": [
  null,
  ""
 ],
 "Kerberos Ticket": [
  null,
  ""
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#user}} ({{user}}){{/user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  ""
 ],
 "Licensed under:": [
  null,
  ""
 ],
 "Lock to prevent privileged tasks": [
  null,
  ""
 ],
 "Locked": [
  null,
  ""
 ],
 "Log In": [
  null,
  ""
 ],
 "Log Out": [
  null,
  ""
 ],
 "Log in again": [
  null,
  ""
 ],
 "Log in to {{host}}": [
  null,
  ""
 ],
 "Login Password": [
  null,
  ""
 ],
 "Machines": [
  null,
  "장치들"
 ],
 "New Password": [
  null,
  ""
 ],
 "New password was not accepted": [
  null,
  ""
 ],
 "No such file or directory": [
  null,
  ""
 ],
 "Not a valid private key": [
  null,
  ""
 ],
 "Off": [
  null,
  "비활성"
 ],
 "Ok": [
  null,
  ""
 ],
 "Old Password": [
  null,
  ""
 ],
 "Old password not accepted": [
  null,
  ""
 ],
 "On": [
  null,
  "활성"
 ],
 "Ooops!": [
  null,
  "어머나!"
 ],
 "Password": [
  null,
  "암호"
 ],
 "Password not accepted": [
  null,
  ""
 ],
 "Password not usable for privileged tasks or to connect to other machines": [
  null,
  ""
 ],
 "Port": [
  null,
  ""
 ],
 "Privileged tasks not available": [
  null,
  ""
 ],
 "Project website": [
  null,
  ""
 ],
 "Prompting via ssh-add timed out": [
  null,
  ""
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  ""
 ],
 "Public Key": [
  null,
  ""
 ],
 "Reconnect": [
  null,
  "재연결"
 ],
 "Reuse my password for privileged tasks and to connect to other machines": [
  null,
  ""
 ],
 "Select": [
  null,
  ""
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  ""
 ],
 "Synchronize": [
  null,
  ""
 ],
 "Synchronize users": [
  null,
  ""
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  ""
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  ""
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  ""
 ],
 "The machine is restarting": [
  null,
  "장치가 재시동되고 있습니다"
 ],
 "The passwords do not match.": [
  null,
  ""
 ],
 "There are currently no active pages": [
  null,
  ""
 ],
 "This machine has already been added.": [
  null,
  ""
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  ""
 ],
 "Tip: Make your key password match your login password to automatically authenticate against other systems.": [
  null,
  ""
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  ""
 ],
 "Troubleshoot": [
  null,
  ""
 ],
 "Try to reconnect": [
  null,
  ""
 ],
 "Type": [
  null,
  ""
 ],
 "Type a password": [
  null,
  ""
 ],
 "Unexpected error": [
  null,
  "예상치 못한 오류"
 ],
 "Unknown Host Key": [
  null,
  ""
 ],
 "Unlock Key": [
  null,
  ""
 ],
 "Unlocked": [
  null,
  ""
 ],
 "Update": [
  null,
  ""
 ],
 "Use the following keys to authenticate against other systems": [
  null,
  ""
 ],
 "User name": [
  null,
  ""
 ],
 "Using available credentials": [
  null,
  ""
 ],
 "Version": [
  null,
  "버전"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  ""
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  ""
 ],
 "active": [
  null,
  ""
 ]
}));
