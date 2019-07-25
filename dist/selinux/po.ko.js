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
 "$0 occurrence": [
  "$1 occurrences",
  "$0 발생 "
 ],
 "Ansible Playbook": [
  null,
  "Ansible Playbook"
 ],
 "Apply this solution": [
  null,
  "솔루션 적용"
 ],
 "Applying solution...": [
  null,
  "솔루션 적용 중 ..."
 ],
 "Audit log": [
  null,
  "감사 로그 "
 ],
 "Automation Script": [
  null,
  "자동 스크립트 "
 ],
 "Close": [
  null,
  "닫기"
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  "SETroubleshoot 데몬에 연결 중..."
 ],
 "Copy to clipboard": [
  null,
  "클립보드로 복사 "
 ],
 "Enforce policy:": [
  null,
  "정책 적용:"
 ],
 "Error running semanage to discover system modifications": [
  null,
  ""
 ],
 "Error while deleting alert: $0": [
  null,
  "알림을 삭제하는 동안 오류가 발생했습니다: $0"
 ],
 "Error while setting SELinux mode: '$0'": [
  null,
  "SELinux 모드 설정 도중 오류 발생: '$0'"
 ],
 "Failed to delete alert: $0": [
  null,
  "알림을 삭제하지 못했습니다: $0"
 ],
 "Install setroubleshoot-server to troubleshoot SELinux events.": [
  null,
  "setroubleshoot-server를 설치하여 SELinux 이벤트를 해결합니다. "
 ],
 "Loading system modifications...": [
  null,
  "시스템 수정 로딩 중 "
 ],
 "No SELinux alerts.": [
  null,
  "SELinux 알림이 없습니다. "
 ],
 "No System Modifications": [
  null,
  "시스템 수정 없음 "
 ],
 "Not connected": [
  null,
  "연결되지 않음"
 ],
 "Occurred $0": [
  null,
  "발생 건수 $0"
 ],
 "Occurred between $0 and $1": [
  null,
  "$0에서 $1 사이의 발생 건수 "
 ],
 "SELinux Access Control Errors": [
  null,
  "SELinux 액세스 컨트롤 오류 "
 ],
 "SELinux Policy": [
  null,
  "SELinux 정책 "
 ],
 "SELinux Troubleshoot": [
  null,
  "SELinux 문제 해결 "
 ],
 "SELinux is disabled on the system": [
  null,
  "시스템에서 SELinux가 비활성화되어 있습니다 "
 ],
 "SELinux is disabled on the system.": [
  null,
  "시스템에서 SELinux가 비활성화되어 있습니다 "
 ],
 "SELinux system status is unknown.": [
  null,
  "SELinux 시스템 상태를 알 수 없습니다. "
 ],
 "Setting deviates from the configured state and will revert on the next boot.": [
  null,
  "설정은 구성된 상태가 다르기 때문에 다음 부팅시 원래 상태로 돌아갑니다."
 ],
 "Shell Script": [
  null,
  "쉘 스크립트 "
 ],
 "Solution applied successfully": [
  null,
  "솔루션이 성공적으로 적용되었습니다 "
 ],
 "Solution failed": [
  null,
  "솔루션이 실패했습니다 "
 ],
 "Solutions": [
  null,
  "솔루션 "
 ],
 "System Modifications": [
  null,
  "시스템 수정 "
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  "설정된 상태를 알 수 없습니다. 이는 다음 부팅시에 변경될 수 있습니다. "
 ],
 "The logged in user is not permitted to view system modifications": [
  null,
  "로그인한 사용자는 시스템 수정 사항을 볼 수 없습니다"
 ],
 "Unable to apply this solution automatically": [
  null,
  "이 솔루션을 자동으로 적용할 수 없습니다"
 ],
 "Unable to get alert details.": [
  null,
  "알림 세부 정보를 가져올 수 없습니다. "
 ],
 "Unable to get alert: $0": [
  null,
  "알림을 받을 수 없음: $0"
 ],
 "Unable to run fix: %0": [
  null,
  "수정 프로그램을 실행할 수 없습니다: %0"
 ],
 "Unable to start setroubleshootd": [
  null,
  "setroubleshootd를 시작할 수 없습니다 "
 ],
 "View automation script": [
  null,
  "자동 스크립트 보기 "
 ],
 "Waiting for details...": [
  null,
  "상세 정보 대기 중 "
 ],
 "solution details": [
  null,
  "솔루션 상세 정보 "
 ]
}));
