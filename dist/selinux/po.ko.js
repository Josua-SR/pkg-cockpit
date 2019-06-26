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
 "Connecting to SETroubleshoot daemon...": [
  null,
  "SETroubleshoot 데몬에 연결 중..."
 ],
 "Enforce policy:": [
  null,
  ""
 ],
 "Error while deleting alert: $0": [
  null,
  ""
 ],
 "Error while setting SELinux mode: '$0'": [
  null,
  ""
 ],
 "Failed to delete alert: $0": [
  null,
  ""
 ],
 "Install setroubleshoot-server to troubleshoot SELinux events.": [
  null,
  ""
 ],
 "No SELinux alerts.": [
  null,
  ""
 ],
 "Not connected": [
  null,
  "연결되지 않음"
 ],
 "Occurred $0": [
  null,
  ""
 ],
 "Occurred between $0 and $1": [
  null,
  ""
 ],
 "SELinux Access Control Errors": [
  null,
  ""
 ],
 "SELinux Policy": [
  null,
  "SELinux 정책 "
 ],
 "SELinux Troubleshoot": [
  null,
  ""
 ],
 "SELinux is disabled on the system": [
  null,
  ""
 ],
 "SELinux is disabled on the system.": [
  null,
  ""
 ],
 "SELinux system status is unknown.": [
  null,
  ""
 ],
 "Setting deviates from the configured state and will revert on the next boot.": [
  null,
  ""
 ],
 "Solution applied successfully": [
  null,
  ""
 ],
 "Solution failed": [
  null,
  ""
 ],
 "Solutions": [
  null,
  "솔루션 "
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  ""
 ],
 "Unable to apply this solution automatically": [
  null,
  "이 솔루션을 자동으로 적용할 수 없습니다"
 ],
 "Unable to get alert details.": [
  null,
  ""
 ],
 "Unable to get alert: $0": [
  null,
  ""
 ],
 "Unable to run fix: %0": [
  null,
  ""
 ],
 "Unable to start setroubleshootd": [
  null,
  "setroubleshootd를 시작할 수 없습니다 "
 ],
 "Waiting for details...": [
  null,
  ""
 ],
 "solution details": [
  null,
  "솔루션 상세 정보 "
 ]
}));
