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
 "$0 Package": [
  "$0 Packages",
  "$0 패키지 "
 ],
 "$0 is not available from any repository.": [
  null,
  "$0은/는 리포지터리에서 사용할 수 없습니다. "
 ],
 "$0 update": [
  "$0 updates",
  "$0 업데이트 "
 ],
 "$0 will be installed.": [
  null,
  "$0이/가 설치됩니다. "
 ],
 "$1 security fix": [
  "$1 security fixes",
  "$1 보안 수정"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  "$1 보안 수정 포함"
 ],
 "Additional packages:": [
  null,
  "추가 패키지 :"
 ],
 "Apply all updates": [
  null,
  "모든 업데이트 적용"
 ],
 "Apply security updates": [
  null,
  "보안 업데이트 적용"
 ],
 "Applying updates": [
  null,
  "업데이트 적용 중 "
 ],
 "Applying updates failed": [
  null,
  "업데이트 적용 실패"
 ],
 "Automatic Updates": [
  null,
  "자동 업데이트"
 ],
 "Available Updates": [
  null,
  "사용 가능한 업데이트"
 ],
 "Bugs:": [
  null,
  "버그:"
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Check for Updates": [
  null,
  "업데이트 확인"
 ],
 "Checking installed software": [
  null,
  "설치된 소프트웨어 확인 중 "
 ],
 "Details": [
  null,
  "상세 정보"
 ],
 "Downloaded": [
  null,
  "다운로드됨 "
 ],
 "Downloading": [
  null,
  "다운로드 중 "
 ],
 "Downloading $0": [
  null,
  "$0 다운로드 중 "
 ],
 "Errata:": [
  null,
  "에라타: "
 ],
 "Fridays": [
  null,
  "금요일 "
 ],
 "Ignore": [
  null,
  "무시"
 ],
 "Initializing...": [
  null,
  "초기화 중 "
 ],
 "Install": [
  null,
  "설치"
 ],
 "Install All Updates": [
  null,
  "모든 업데이트 설치 "
 ],
 "Install Security Updates": [
  null,
  "보안 업데이트 설치 "
 ],
 "Install Software": [
  null,
  "소프트웨어 설치 "
 ],
 "Installed": [
  null,
  "설치됨"
 ],
 "Installing": [
  null,
  "설치 중"
 ],
 "Installing $0": [
  null,
  "$0 설치 중 "
 ],
 "Last checked: $0 ago": [
  null,
  "마지막 접속 날짜: $0 이전  "
 ],
 "Loading available updates failed": [
  null,
  "사용 가능한 업데이트 로드에 실패했습니다 "
 ],
 "Loading available updates, please wait...": [
  null,
  "사용 가능한 업데이트를 로딩하고 있습니다. 잠시만 기다리십시오..."
 ],
 "Mondays": [
  null,
  "월요일 "
 ],
 "Name": [
  null,
  "이름"
 ],
 "No updates pending": [
  null,
  "보류 중인 업데이트가 없습니다 "
 ],
 "Ok": [
  null,
  "확인"
 ],
 "Package information": [
  null,
  "패키지 정보"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit가 크래시되었습니다 "
 ],
 "PackageKit is not installed": [
  null,
  "PackageKit이 설치되어 있지 않습니다 "
 ],
 "PackageKit reported error code $0": [
  null,
  "PackageKit가 오류 코드 $0을/를 보고했습니다 "
 ],
 "Refreshing package information": [
  null,
  "패키지 정보 새로고침 중 "
 ],
 "Register…": [
  null,
  "등록 중..."
 ],
 "Removals:": [
  null,
  "삭제: "
 ],
 "Removing $0": [
  null,
  " $0 삭제 중 "
 ],
 "Restart Now": [
  null,
  "지금 다시 시작 "
 ],
 "Restart Recommended": [
  null,
  "다시 시작하는 것이 좋습니다 "
 ],
 "Restarting": [
  null,
  "재시작 중 "
 ],
 "Saturdays": [
  null,
  "토요일 "
 ],
 "Set up": [
  null,
  "설정 "
 ],
 "Setting up": [
  null,
  "설정 중 "
 ],
 "Severity": [
  null,
  "심각도"
 ],
 "Severity:": [
  null,
  "심각도: "
 ],
 "Software Updates": [
  null,
  "소프트웨어 업데이트"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  "다른 프로그램이 패키지 관리자를 사용 중입니다. 잠시만 기다려주십시오..."
 ],
 "Sundays": [
  null,
  "일요일 "
 ],
 "System is up to date": [
  null,
  "시스템이 업데이트되었음"
 ],
 "This system is not registered": [
  null,
  "이 시스템은 등록되어 있지 않습니다 "
 ],
 "This web console will be updated.": [
  null,
  "이 웹 콘솔은 업데이트됩니다."
 ],
 "Thursdays": [
  null,
  "목요일 "
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  ""
 ],
 "Total size: $0": [
  null,
  "전체 크기: $0"
 ],
 "Tuesdays": [
  null,
  "화요일 "
 ],
 "Update History": [
  null,
  ""
 ],
 "Update Log": [
  null,
  ""
 ],
 "Updated": [
  null,
  "업데이트됨"
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  ""
 ],
 "Updating": [
  null,
  "업데이트 중 "
 ],
 "Verified": [
  null,
  ""
 ],
 "Verifying": [
  null,
  "확인 중"
 ],
 "Version": [
  null,
  "버전"
 ],
 "Waiting for other software management operations to finish": [
  null,
  ""
 ],
 "Wednesdays": [
  null,
  "수요일 "
 ],
 "Your browser will disconnect, but this does not affect the update process. You can reconnect in a few moments to continue watching the progress.": [
  null,
  ""
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  ""
 ],
 "and restart the machine automatically.": [
  null,
  ""
 ],
 "at": [
  null,
  "시간:"
 ],
 "bug fix": [
  null,
  "버그 수정"
 ],
 "enhancement": [
  null,
  ""
 ],
 "every day": [
  null,
  "매일 "
 ],
 "security": [
  null,
  "보안"
 ],
 "undefined": [
  null,
  "정의되지 않음 "
 ]
}));
