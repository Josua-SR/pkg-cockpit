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
 "$0 is not available from any repository.": [
  null,
  "$0은/는 리포지터리에서 사용할 수 없습니다. "
 ],
 "$0 will be installed.": [
  null,
  "$0이/가 설치됩니다. "
 ],
 "Additional packages:": [
  null,
  "추가 패키지 :"
 ],
 "Administrator Password": [
  null,
  "관리자 암호"
 ],
 "After leaving the domain, only users with local credentials will be able to log into this machine. This may also affect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  "도메인 종료 후 로컬 인증 정보가 있는 사용자만 시스템에 로그인할 수 있습니다. 이 경우 DNS 확인 설정 및 신뢰할 수 있는 CA 목록이 변경될 수 있으므로 다른 서비스에도 영향을 미칠 수 있습니다. "
 ],
 "Authentication": [
  null,
  "인증"
 ],
 "Automatic": [
  null,
  "자동"
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Checking installed software": [
  null,
  "설치된 소프트웨어 확인 중 "
 ],
 "Client Software": [
  null,
  "클라이언트 소프트웨어 "
 ],
 "Computer OU": [
  null,
  "컴퓨터 OU"
 ],
 "Contacted domain": [
  null,
  "연결된 도메인 "
 ],
 "Domain": [
  null,
  "도메인 "
 ],
 "Domain $0 could not be contacted": [
  null,
  "도메인 $0에 연결할 수 없습니다 "
 ],
 "Domain $0 is not supported": [
  null,
  "도메인 $0이/가 지원되지 않습니다 "
 ],
 "Domain Address": [
  null,
  "도메인 주소 "
 ],
 "Domain Administrator Name": [
  null,
  "도메인 관리자 이름 "
 ],
 "Domain Administrator Password": [
  null,
  "도메인 관리자 암호 "
 ],
 "Downloading $0": [
  null,
  "$0 다운로드 중 "
 ],
 "Host name should not be changed in a domain": [
  null,
  "도메인에서 호스트 이름을 변경할 수 없습니다 "
 ],
 "Install": [
  null,
  "설치"
 ],
 "Install Software": [
  null,
  "소프트웨어 설치 "
 ],
 "Installing $0": [
  null,
  "$0 설치 중 "
 ],
 "Join": [
  null,
  "참가"
 ],
 "Join Domain": [
  null,
  "도메인 참가"
 ],
 "Join a Domain": [
  null,
  "도메인에 가입 "
 ],
 "Joining this domain is not supported": [
  null,
  "도메인 가입이 지원되지 않습니다"
 ],
 "Leave Domain": [
  null,
  "도메인 나가기 "
 ],
 "Login Format": [
  null,
  "로그인 형식 "
 ],
 "More": [
  null,
  "기타 "
 ],
 "Next": [
  null,
  "다음"
 ],
 "Ok": [
  null,
  "확인"
 ],
 "One Time Password": [
  null,
  "일회용 암호 "
 ],
 "PackageKit crashed": [
  null,
  "PackageKit가 크래시되었습니다 "
 ],
 "Removals:": [
  null,
  "삭제: "
 ],
 "Removing $0": [
  null,
  " $0 삭제 중 "
 ],
 "Server Software": [
  null,
  "서버 소프트웨어 "
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  ""
 ],
 "This may take a while": [
  null,
  ""
 ],
 "Total size: $0": [
  null,
  "전체 크기: $0"
 ],
 "User Name": [
  null,
  "사용자 이름"
 ],
 "User Password": [
  null,
  "사용자 암호 "
 ],
 "Validating address": [
  null,
  ""
 ],
 "Waiting for other software management operations to finish": [
  null,
  ""
 ],
 "e.g. \"$0\"": [
  null,
  "예: \"$0\""
 ]
}));
