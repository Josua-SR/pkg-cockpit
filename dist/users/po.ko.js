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
  "승인된 키를 저장하는 동안 오류가 발생했습니다:"
 ],
 "Excellent password": [
  null,
  "우수한 암호"
 ],
 "Failed to change password": [
  null,
  "암호 변경 실패 "
 ],
 "Failed to load authorized keys.": [
  null,
  "승인된 키를 불러오지 못했습니다"
 ],
 "Force Change": [
  null,
  "강제 변경 "
 ],
 "Force password change": [
  null,
  "강제 암호 변경 "
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
  "잘못된 만료 기간 "
 ],
 "Invalid key": [
  null,
  "잘못된 키 "
 ],
 "Invalid number of days": [
  null,
  "일 수가 잘못되었습니다 "
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
  " $0의 계정 잠금 "
 ],
 "Logged In": [
  null,
  "로그인되었습니다 "
 ],
 "Never": [
  null,
  "하지 않기"
 ],
 "Never expire password": [
  null,
  "암호가 만료되어서는 안됩니다 "
 ],
 "Never lock account": [
  null,
  "계정 잠금을 하지 않습니다 "
 ],
 "New Password": [
  null,
  "새 암호 "
 ],
 "New password was not accepted": [
  null,
  "새 암호가 허용되지 않습니다 "
 ],
 "No real name specified": [
  null,
  "실제 이름이 지정되어 있지 않습니다 "
 ],
 "No user name specified": [
  null,
  "지정된 사용자 이름이 없습니다."
 ],
 "Old Password": [
  null,
  "이전 암호 "
 ],
 "Old password not accepted": [
  null,
  "이전 암호가 허용되지 않습니다 "
 ],
 "Password": [
  null,
  "암호"
 ],
 "Password Expiration": [
  null,
  "암호 만료 "
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
  "만료 날짜를 지정해 주십시오 "
 ],
 "Prompting via passwd timed out": [
  null,
  "passwd를 통한 메세지 제공 시간이 초과되었습니다 "
 ],
 "Require password change every $0 days": [
  null,
  "$0 일 마다 암호를 변경해야 합니다 "
 ],
 "Require password change on $0": [
  null,
  "$0에서 암호를 변경해야 합니다 "
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
  "세션 종료 "
 ],
 "The account '$0' will be forced to change their password on next login": [
  null,
  " '$0' 계정은 다음 로그인 시 암호를 변경해야 합니다. "
 ],
 "The key you provided was not valid.": [
  null,
  "입력하신 키가 유효하지 않습니다. "
 ],
 "The passwords do not match": [
  null,
  "암호가 일치하지 않습니다 "
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  "사용자 <b>$0</b>는 계정을 수정할 수 없습니다."
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  "사용자 이름에는 a~z 문자, 숫자, 점, 대시, 밑줄만 사용할 수 있습니다. "
 ],
 "There are no authorized public keys for this account.": [
  null,
  "이 계정에 승인된 공개키가 없습니다. "
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
  "키 확인 "
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "이 계정에 승인된 공개 키를 표시할 수 있는 권한이 없습니다. "
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
