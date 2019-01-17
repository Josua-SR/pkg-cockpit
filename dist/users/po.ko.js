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
  "x-generator": "Zanata 4.6.2"
 },
 "Access": [
  null,
  "액세스"
 ],
 "Account Expiration": [
  null,
  "계정 만료"
 ],
 "Account not available or cannot be edited.": [
  null,
  "계정을 사용할 수 없거나 편집 할 수 없습니다."
 ],
 "Accounts": [
  null,
  "계정"
 ],
 "Add key": [
  null,
  "키 추가"
 ],
 "Add public key": [
  null,
  "공개 키 추가 "
 ],
 "Adding key": [
  null,
  "키 추가 중"
 ],
 "Authorized Public SSH Keys": [
  null,
  "승인된 공개 SSH 키"
 ],
 "Back to Accounts": [
  null,
  "계정으로 돌아 가기"
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Change": [
  null,
  "변경 "
 ],
 "Close": [
  null,
  "닫기"
 ],
 "Confirm": [
  null,
  "확인"
 ],
 "Confirm New Password": [
  null,
  "새 암호 확인 "
 ],
 "Container Administrator": [
  null,
  "컨테이너 관리자 "
 ],
 "Create": [
  null,
  "생성"
 ],
 "Create New Account": [
  null,
  ""
 ],
 "Delete": [
  null,
  "삭제"
 ],
 "Delete $0": [
  null,
  ""
 ],
 "Delete Files": [
  null,
  "파일 삭제"
 ],
 "Error": [
  null,
  "오류"
 ],
 "Error saving authorized keys: ": [
  null,
  ""
 ],
 "Excellent password": [
  null,
  ""
 ],
 "Failed to change password": [
  null,
  ""
 ],
 "Failed to load authorized keys.": [
  null,
  ""
 ],
 "Force Change": [
  null,
  ""
 ],
 "Force password change": [
  null,
  ""
 ],
 "Full Name": [
  null,
  "성명"
 ],
 "Image Builder": [
  null,
  ""
 ],
 "Invalid expiration date": [
  null,
  ""
 ],
 "Invalid key": [
  null,
  ""
 ],
 "Invalid number of days": [
  null,
  ""
 ],
 "Last Login": [
  null,
  ""
 ],
 "Local Accounts": [
  null,
  ""
 ],
 "Lock Account": [
  null,
  ""
 ],
 "Lock account on $0": [
  null,
  ""
 ],
 "Logged In": [
  null,
  ""
 ],
 "Never": [
  null,
  "하지 않기"
 ],
 "Never expire password": [
  null,
  ""
 ],
 "Never lock account": [
  null,
  ""
 ],
 "New Password": [
  null,
  ""
 ],
 "New password was not accepted": [
  null,
  ""
 ],
 "No real name specified": [
  null,
  ""
 ],
 "No user name specified": [
  null,
  ""
 ],
 "Off": [
  null,
  "비활성"
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
 "Password": [
  null,
  "암호"
 ],
 "Password Expiration": [
  null,
  ""
 ],
 "Password is not acceptable": [
  null,
  ""
 ],
 "Password is too weak": [
  null,
  ""
 ],
 "Password must be changed": [
  null,
  ""
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  ""
 ],
 "Please specify an expiration date": [
  null,
  ""
 ],
 "Prompting via passwd timed out": [
  null,
  ""
 ],
 "Require password change every $0 days": [
  null,
  ""
 ],
 "Require password change on $0": [
  null,
  ""
 ],
 "Reset": [
  null,
  "초기화"
 ],
 "Roles": [
  null,
  "역할"
 ],
 "Server Administrator": [
  null,
  "서버 관리자 "
 ],
 "Set": [
  null,
  "설정"
 ],
 "Set Password": [
  null,
  "암호 설정 "
 ],
 "Terminate Session": [
  null,
  ""
 ],
 "The account '$0' will be forced to change their password on next login": [
  null,
  ""
 ],
 "The key you provided was not valid.": [
  null,
  ""
 ],
 "The passwords do not match": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  ""
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  ""
 ],
 "There are no authorized public keys for this account.": [
  null,
  ""
 ],
 "This user name already exists": [
  null,
  ""
 ],
 "Unable to delete root account": [
  null,
  ""
 ],
 "Unable to rename root account": [
  null,
  ""
 ],
 "Unexpected error": [
  null,
  "예상치 못한 오류"
 ],
 "Unnamed": [
  null,
  "이름 없음"
 ],
 "User Name": [
  null,
  "사용자 이름"
 ],
 "Validating key": [
  null,
  ""
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  ""
 ],
 "You must wait longer to change your password": [
  null,
  ""
 ],
 "translatable": [
  null,
  "번역 가능 "
 ],
 "page-title\u0004Accounts": [
  null,
  "계정"
 ]
}));
