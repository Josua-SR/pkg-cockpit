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
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit 호환 버전이 {{#strong}}{{host}}{{/strong}} 에 설치되어 있지 않습니다. "
 ],
 "About Cockpit": [
  null,
  "Cockpit 정보 "
 ],
 "Account Settings": [
  null,
  "계정 설정"
 ],
 "Active Pages": [
  null,
  "활성 페이지 "
 ],
 "Add": [
  null,
  "추가"
 ],
 "Add Machine to Dashboard": [
  null,
  "대시보드에 시스템 추가 "
 ],
 "Add key": [
  null,
  "키 추가"
 ],
 "Address": [
  null,
  "주소"
 ],
 "Authentication": [
  null,
  "인증"
 ],
 "Authentication Failed": [
  null,
  "인증 실패"
 ],
 "Available": [
  null,
  "사용 가능"
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Cannot connect to an unknown machine": [
  null,
  "알 수 없는 컴퓨터에 연결할 수 없습니다."
 ],
 "Change Password": [
  null,
  "비밀번호 변경"
 ],
 "Checking for public keys": [
  null,
  "공개 키 확인 중 "
 ],
 "Choose the language to be used in the application": [
  null,
  "사용하실 언어를 선택해 주세요"
 ],
 "Close": [
  null,
  "닫기"
 ],
 "Close Selected Pages": [
  null,
  "선택한 페이지 닫기 "
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit은 지정된 호스트 $0에 연결할 수 없습니다. 포트 $1에서 ssh가 실행되고 있는지 확인하거나 주소에서 다른 포트를 지정합니다. "
 ],
 "Cockpit had an unexpected internal error. <br/><br/>You can try restarting Cockpit by pressing refresh in your browser. The javascript console contains details about this error (<b>Ctrl-Shift-J</b> in most browsers).": [
  null,
  "Cockpit에서 예상치 못한 내부 오류가 발생했습니다.  <br/><br/>브라우저에서 업데이트를 눌러 Cockpit 재부팅을 시도할 수 있습니다. javascript 콘솔에는 이러한 오류에 대한 상세 정보가 포함되어 있습니다 (대부분의 브라우저에서 <b>Ctrl-Shift-J</b>)."
 ],
 "Cockpit is an interactive Linux server admin interface.": [
  null,
  "Cockpit은 대화형 Linux 서버 관리 인터페이스입니다.\n            "
 ],
 "Cockpit is not installed": [
  null,
  "Cockpit이 설치되어 있지 않습니다 "
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit은 {{#strong}}{{host}}{{/strong}}에 연결할 수 없습니다. "
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  "Cockpit은 {{#strong}}{{host}}{{/strong}}에 로그인할 수 없습니다. {{#can_sync}} {{#sync_link}}사용자 동기화{{/sync_link}}를 수행하십시오.{{/can_sync}} 다른 인증 옵션 및 문제 해결에 대한 지원이 필요한 경우 cockpit-ws를 새 버전으로 업그레이드하십시오."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit은 {{#strong}}{{host}}{{/strong}}에 로그인할 수 없습니다. "
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  "Cockpit은 {{#strong}}{{host}}{{/strong}}에 로그인할 수 없습니다. 이 시스템을 cockpit과 사용하려면 {{#strong}}{{host}}{{/strong}}의 sshd 설정에서 다음 인증 방법 중 하나를 사용해야 합니다:"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  "Cockpit은 {{#strong}}{{host}}{{/strong}}에 로그인할 수 없습니다. 다음에서 인증 정보를 변경할 수 있습니다. {{#can_sync}}{{#sync_link}}계정과 암호 동기화{{/sync_link}}를 실행할 수 있습니다.{{/can_sync}}"
 ],
 "Color": [
  null,
  "색"
 ],
 "Comment": [
  null,
  "설명"
 ],
 "Confirm": [
  null,
  "확인"
 ],
 "Connect": [
  null,
  "연결"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "{{ limit }} 대 이상의 컴퓨터에 동시 연결을 지원하지 않습니다. "
 ],
 "Connecting to the machine": [
  null,
  "장치에 연결 중입니다"
 ],
 "Could not contact {{host}}": [
  null,
  "{{host}}에 연결할 수 없습니다 "
 ],
 "Couldn't connect to the machine": [
  null,
  "장치에 연결할 수 없습니다"
 ],
 "Details": [
  null,
  "상세 정보"
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
  "여기에 다른 암호를 입력하면 이 컴퓨터에 연결할 때 마다 암호를 다시 입력해야 합니다"
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "사용자를 로드하는 동안 오류가 발생했습니다: {{perm_failed}}"
 ],
 "Failed to add machine: $0": [
  null,
  "컴퓨터를 추가하지 못했습니다: $0"
 ],
 "Failed to change password": [
  null,
  "암호 변경 실패 "
 ],
 "Failed to edit machine: $0": [
  null,
  "컴퓨터를 편집하지 못했습니다: $0"
 ],
 "Fingerprint": [
  null,
  "지문 "
 ],
 "Host": [
  null,
  "호스트"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  "사용자를 동기화하려면 {{#strong}}{{host}}{{/strong}}에 로그인해야 합니다. "
 ],
 "Incorrect Host Key": [
  null,
  "잘못된 호스트 키 "
 ],
 "Invalid file permissions": [
  null,
  "잘못된 파일 권한 "
 ],
 "Is sshd running on a different port?": [
  null,
  "다른 포트에서 sshd가 실행되고 있습니까?"
 ],
 "Kerberos Based SSO": [
  null,
  "Kerberos 기반 SSO"
 ],
 "Kerberos Ticket": [
  null,
  "Kerberos 티켓 "
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "컴퓨터에 현재 로그인한 사용자{{#default_user}} ({{default_user}}){{/default_user}}로 연결하려면 비워두십시오. 다른 사용자 이름을 입력하면 이 컴퓨터에 연결할 때 입력한 사용자가 항상 사용됩니다."
 ],
 "Licensed under:": [
  null,
  "라이센스 보유자: "
 ],
 "Log In": [
  null,
  "로그인"
 ],
 "Log Out": [
  null,
  "로그 아웃 "
 ],
 "Log in again": [
  null,
  "다시 로그인 "
 ],
 "Log in to {{host}}": [
  null,
  "{{host}}에 로그인 "
 ],
 "Login Password": [
  null,
  "로그인 암호 "
 ],
 "Login has escalated admin privileges": [
  null,
  "로그인 관리자의 권한이 상승되었습니다 "
 ],
 "Machines": [
  null,
  "장치들"
 ],
 "New Password": [
  null,
  "새 암호 "
 ],
 "New password was not accepted": [
  null,
  "새 암호가 허용되지 않습니다 "
 ],
 "No matching files found": [
  null,
  "일치하는 파일을 찾을 수 없음 "
 ],
 "No such file or directory": [
  null,
  "이러한 파일 또는 디렉토리가 없습니다 "
 ],
 "Not a valid private key": [
  null,
  "유효한 개인 키가 없습니다 "
 ],
 "Ok": [
  null,
  "확인"
 ],
 "Old Password": [
  null,
  "이전 암호 "
 ],
 "Old password not accepted": [
  null,
  "이전 암호가 허용되지 않습니다 "
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
  "암호가 허용되지 않습니다 "
 ],
 "Password not usable for privileged tasks or to connect to other machines": [
  null,
  "권한 작업 실행 또는 다른 컴퓨터에 연결하기 위해 암호를 사용할 수 없습니다 "
 ],
 "Path to file": [
  null,
  "파일의 경로 "
 ],
 "Port": [
  null,
  "포트"
 ],
 "Privileged": [
  null,
  "권한 "
 ],
 "Project website": [
  null,
  "프로젝트 웹사이트 "
 ],
 "Prompting via ssh-add timed out": [
  null,
  "ssh-add를 통한 메세지 제공 시간이 초과되었습니다 "
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  "ssh-keygen을 통한 메세지 제공 시간이 초과되었습니다 "
 ],
 "Public Key": [
  null,
  "공개 키 "
 ],
 "Reconnect": [
  null,
  "재연결"
 ],
 "Reuse my password for privileged tasks and to connect to other machines": [
  null,
  "권한 작업 실행 또는 다른 컴퓨터에 연결을 위해 암호를 재사용합니다 "
 ],
 "Select": [
  null,
  "선택"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "{{#strong}}{{host}}{{/strong}}와 동기화할 사용자를 선택합니다 "
 ],
 "Synchronize": [
  null,
  "동기화 "
 ],
 "Synchronize users": [
  null,
  "사용자 동기화 "
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  "IP 주소 또는 호스트 이름에는 공백을 포함할 수 없습니다. "
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  "호스트 {{#strong}}{{host}}{{/strong}} 인증을 설정할 수 없습니다. 연결을 유지하시겠습니까?"
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  "{{#strong}}{{host}}{{/strong}}의 키가 이전에 사용된 키와 일치하지 않습니다. 이 컴퓨터가 최근에 교체된 것이 아닌 경우 누군가가 이 컴퓨터에 대한 연결을 공격할 가능성이 있습니다."
 ],
 "The machine is restarting": [
  null,
  "장치가 재시동되고 있습니다"
 ],
 "The passwords do not match.": [
  null,
  "암호가 일치하지 않습니다. "
 ],
 "There are currently no active pages": [
  null,
  "현재 활성화된 페이지가 없습니다 "
 ],
 "This machine has already been added.": [
  null,
  "이 컴퓨터는 이미 추가되어 있습니다. "
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "cockpit-ws 버전에서는 다른 사용자 또는 포트가 있는 호스트 연결이 지원되지 않습니다"
 ],
 "Tip: Make your key password match your login password to automatically authenticate against other systems.": [
  null,
  "도움말: 다른 시스템에 자동으로 인증하려면 키 암호가 로그인 암호화 일치해야 합니다. "
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "다른 포트를 사용하려면 cockpit-ws를 최신 버전으로 업그레이드해야 합니다. "
 ],
 "Too many files found": [
  null,
  "너무 많은 파일이 검색되었습니다. "
 ],
 "Troubleshoot": [
  null,
  "문제 해결"
 ],
 "Try to reconnect": [
  null,
  "재연결 시도 "
 ],
 "Type": [
  null,
  "유형"
 ],
 "Type a password": [
  null,
  "암호 입력 "
 ],
 "Unexpected error": [
  null,
  "예상치 못한 오류"
 ],
 "Unknown Host Key": [
  null,
  "알 수 없는 호스트 키 "
 ],
 "Unlock Key": [
  null,
  "키 잠금 해제 "
 ],
 "Update": [
  null,
  "업데이트"
 ],
 "Use the following keys to authenticate against other systems": [
  null,
  "다른 시스템에 대해 인증하려면 다음 키를 사용합니다. "
 ],
 "User name": [
  null,
  "사용자 이름 "
 ],
 "Using available credentials": [
  null,
  "사용 가능한 인증 정보 사용 "
 ],
 "Version": [
  null,
  "버전"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "{{#strong}}{{host}}{{/strong}}에 연결되어 있지만 사용자를 동기화하려면 수퍼 유저 권한을 가진 사용자가 필요합니다. "
 ],
 "active": [
  null,
  "active"
 ]
}));
