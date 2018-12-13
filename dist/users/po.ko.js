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
  ""
 ],
 "Authorized Public SSH Keys": [
  null,
  ""
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
  ""
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
 "Delete Files": [
  null,
  "파일 삭제"
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
 "Invalid key": [
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
 "Off": [
  null,
  "비활성"
 ],
 "Old Password": [
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
 "Paste the contents of your public SSH key file here": [
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
 "Set": [
  null,
  "설정"
 ],
 "Set Password": [
  null,
  ""
 ],
 "Terminate Session": [
  null,
  ""
 ],
 "There are no authorized public keys for this account.": [
  null,
  ""
 ],
 "Unnamed": [
  null,
  "이름 없음"
 ],
 "User Name": [
  null,
  "사용자 이름"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  ""
 ],
 "translatable": [
  null,
  ""
 ]
}));
