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
  "새 계정 만들기 "
 ],
 "Delete": [
  null,
  "삭제"
 ],
 "Delete $0": [
  null,
  "$0 삭제 "
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
  "암호 변경 실패 "
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
  "이미지 빌더 "
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
  "마지막 로그인 "
 ],
 "Local Accounts": [
  null,
  "로컬 계정 "
 ],
 "Lock Account": [
  null,
  "계정 잠금 "
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
  "새 암호 "
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
  "암호가 허용되지 않습니다 "
 ],
 "Password is too weak": [
  null,
  "암호가 너무 취약합니다 "
 ],
 "Password must be changed": [
  null,
  "암호를 변경해야 합니다 "
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "SSH 공개키 파일 내용을 여기에 붙여넣기합니다"
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
  "이 사용자 이름이 이미 존재합니다. "
 ],
 "Unable to delete root account": [
  null,
  "root 계정을 삭제할 수 없음 "
 ],
 "Unable to rename root account": [
  null,
  "root 계정 이름을 다시 설정할 수 없습니다 "
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
  "암호 변경을 위해 조금더 기다려 주십시오."
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
