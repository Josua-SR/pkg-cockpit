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
 "1 day": [
  null,
  "1 일"
 ],
 "1 hour": [
  null,
  "1 시간"
 ],
 "1 week": [
  null,
  "1주"
 ],
 "5 minutes": [
  null,
  "5분"
 ],
 "6 hours": [
  null,
  "6 시간"
 ],
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit 호환 버전이 {{#strong}}{{host}}{{/strong}} 에 설치되어 있지 않습니다. "
 ],
 "Add": [
  null,
  "추가"
 ],
 "Add Machine to Dashboard": [
  null,
  "대시보드에 시스템 추가 "
 ],
 "Address": [
  null,
  "주소"
 ],
 "Advanced TCA": [
  null,
  "고급 TCA"
 ],
 "All In One": [
  null,
  "일체형 "
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
 "Avatar": [
  null,
  "아바타 "
 ],
 "Blade": [
  null,
  "블레이드 "
 ],
 "Blade enclosure": [
  null,
  "블레이드 인클로저 "
 ],
 "Bus Expansion Chassis": [
  null,
  "버스 확장 섀시"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Can't load image": [
  null,
  "이미지를 로드할 수 없습니다."
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Checking for public keys": [
  null,
  "공개 키 확인 중 "
 ],
 "Close": [
  null,
  "닫기"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  ""
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
  ""
 ],
 "Color": [
  null,
  "색"
 ],
 "Compact PCI": [
  null,
  "PCI 압축 "
 ],
 "Connect": [
  null,
  "연결"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  ""
 ],
 "Connection Error": [
  null,
  "연결 오류 "
 ],
 "Convertible": [
  null,
  "변환 가능 "
 ],
 "Could not contact {{host}}": [
  null,
  "{{host}}에 연결할 수 없습니다 "
 ],
 "Dashboard": [
  null,
  "대시보드"
 ],
 "Desktop": [
  null,
  "데스크탑"
 ],
 "Detachable": [
  null,
  ""
 ],
 "Disk I/O": [
  null,
  "디스크 I/O"
 ],
 "Docking Station": [
  null,
  "도킹 스테이션 "
 ],
 "Edit Server": [
  null,
  "서버 편집 "
 ],
 "Embedded PC": [
  null,
  ""
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
 "Expansion Chassis": [
  null,
  ""
 ],
 "Failed to add machine: $0": [
  null,
  ""
 ],
 "Failed to change password": [
  null,
  "암호 변경 실패 "
 ],
 "Failed to edit machine: $0": [
  null,
  ""
 ],
 "Fingerprint": [
  null,
  "지문 "
 ],
 "Go to now": [
  null,
  "지금 바로 가기"
 ],
 "Hand Held": [
  null,
  ""
 ],
 "Host Name": [
  null,
  "호스트명"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "Incorrect Host Key": [
  null,
  "잘못된 호스트 키 "
 ],
 "Invalid file permissions": [
  null,
  ""
 ],
 "IoT Gateway": [
  null,
  "IoT 게이트웨이 "
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
 "Laptop": [
  null,
  ""
 ],
 "Leave blank to connect to this machine as the currently logged in user. If you enter a different username, that user will always be used when connecting to this machine.": [
  null,
  ""
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  ""
 ],
 "Log In": [
  null,
  "로그인"
 ],
 "Log in to {{host}}": [
  null,
  "{{host}}에 로그인 "
 ],
 "Login Password": [
  null,
  "로그인 암호 "
 ],
 "Lost connection. Trying to reconnect": [
  null,
  "연결이 끓어졌습니다. 다시 시도 하는 중입니다."
 ],
 "Low Profile Desktop": [
  null,
  ""
 ],
 "Lunch Box": [
  null,
  ""
 ],
 "Main Server Chassis": [
  null,
  ""
 ],
 "Memory": [
  null,
  "메모리"
 ],
 "Mini PC": [
  null,
  ""
 ],
 "Mini Tower": [
  null,
  ""
 ],
 "Multi-system Chassis": [
  null,
  ""
 ],
 "Network": [
  null,
  "네트워크"
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
 "Notebook": [
  null,
  ""
 ],
 "Off": [
  null,
  "비활성"
 ],
 "Old password not accepted": [
  null,
  ""
 ],
 "On": [
  null,
  "활성"
 ],
 "Other": [
  null,
  "기타"
 ],
 "Password": [
  null,
  "암호"
 ],
 "Password not accepted": [
  null,
  ""
 ],
 "Peripheral Chassis": [
  null,
  ""
 ],
 "Pizza Box": [
  null,
  ""
 ],
 "Port": [
  null,
  "포트"
 ],
 "Portable": [
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
  "공개 키 "
 ],
 "RAID Chassis": [
  null,
  ""
 ],
 "Rack Mount Chassis": [
  null,
  ""
 ],
 "Sealed-case PC": [
  null,
  ""
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  ""
 ],
 "Servers": [
  null,
  "서버 "
 ],
 "Set": [
  null,
  "설정"
 ],
 "Space-saving Computer": [
  null,
  ""
 ],
 "Stick PC": [
  null,
  ""
 ],
 "Sub Chassis": [
  null,
  ""
 ],
 "Sub Notebook": [
  null,
  ""
 ],
 "Synchronize": [
  null,
  "동기화 "
 ],
 "Synchronize users": [
  null,
  "사용자 동기화 "
 ],
 "Tablet": [
  null,
  "타블렛"
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
 "The passwords do not match.": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to manage servers": [
  null,
  "사용자 <b>$0</b> 는 서버 관리 권한이 없습니다."
 ],
 "This machine has already been added.": [
  null,
  ""
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  ""
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  ""
 ],
 "Tower": [
  null,
  ""
 ],
 "Type a password": [
  null,
  "암호 입력 "
 ],
 "Unknown": [
  null,
  "알 수 없음"
 ],
 "Unknown Host Key": [
  null,
  "알 수 없는 호스트 키 "
 ],
 "Update": [
  null,
  "업데이트"
 ],
 "User": [
  null,
  "사용자"
 ],
 "User name": [
  null,
  "사용자 이름 "
 ],
 "Using available credentials": [
  null,
  ""
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  ""
 ],
 "You are currently connected directly to this server. You cannot delete it.": [
  null,
  "현재 직접적으로 이 서버에 연결되어 있습니다. 삭제하실 수 없습니다."
 ]
}));
