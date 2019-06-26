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
 "$mtu": [
  null,
  "$mtu"
 ],
 "(Optional)": [
  null,
  "(옵션)"
 ],
 "(default)": [
  null,
  "(기본값)"
 ],
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
 "802.3ad": [
  null,
  "802.3ad"
 ],
 "802.3ad LACP": [
  null,
  "802.3ad LACP"
 ],
 "ARP": [
  null,
  "ARP"
 ],
 "ARP Monitoring": [
  null,
  "ARP 모니터링"
 ],
 "ARP Ping": [
  null,
  "ARP Ping"
 ],
 "Active": [
  null,
  "활성"
 ],
 "Active Backup": [
  null,
  "활성화된 백업"
 ],
 "Active zones": [
  null,
  "활성 영역 "
 ],
 "Adaptive load balancing": [
  null,
  "적응형 로드 밸런싱"
 ],
 "Adaptive transmit load balancing": [
  null,
  "적응형 전송 로드 밸런싱"
 ],
 "Add $0": [
  null,
  "$0 추가 "
 ],
 "Add Bond": [
  null,
  "본드 추가"
 ],
 "Add Bridge": [
  null,
  "브릿지 추가"
 ],
 "Add Ports": [
  null,
  "포트 추가 "
 ],
 "Add Services": [
  null,
  "서비스 추가"
 ],
 "Add Team": [
  null,
  "팀 추가"
 ],
 "Add VLAN": [
  null,
  "VLAN 추가"
 ],
 "Add Zone": [
  null,
  "영역 추가 "
 ],
 "Add ports to the following zones:": [
  null,
  "다음 영역에 포트를 추가합니다: "
 ],
 "Add services to following zones:": [
  null,
  "다음 영역에 서비스를 추가합니다: "
 ],
 "Add zone": [
  null,
  "영역 추가 "
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "<b>$0</b>을/를 추가하면 서버와의 연결이 끊어지고 관리 UI를 사용할 수 없게 됩니다. "
 ],
 "Additional DNS $val": [
  null,
  "추가 DNS $val"
 ],
 "Additional DNS Search Domains $val": [
  null,
  "추가 DNS 검색 도메인 $val"
 ],
 "Additional address $val": [
  null,
  "추가 주소 $val"
 ],
 "Address $val": [
  null,
  "주소 $val"
 ],
 "Addresses": [
  null,
  "주소"
 ],
 "Allowed Addresses": [
  null,
  "허용된 주소 "
 ],
 "Allowed Services": [
  null,
  "허용된 서비스"
 ],
 "Apply": [
  null,
  "적용"
 ],
 "Authenticating": [
  null,
  "인증 중입니다"
 ],
 "Automatic": [
  null,
  "자동"
 ],
 "Automatic (DHCP only)": [
  null,
  "자동(DHCP만)"
 ],
 "Automatic (DHCP)": [
  null,
  "자동(DHCP)"
 ],
 "Balancer": [
  null,
  "벨런서 "
 ],
 "Bond": [
  null,
  "본드"
 ],
 "Bond Settings": [
  null,
  "본드 설정"
 ],
 "Bridge": [
  null,
  "브릿지"
 ],
 "Bridge Port Settings": [
  null,
  "브릿지 포트 설정"
 ],
 "Bridge Settings": [
  null,
  "브릿지 설정"
 ],
 "Bridge port": [
  null,
  "브릿지 포트"
 ],
 "Broadcast": [
  null,
  "브로트캐스트"
 ],
 "Broken configuration": [
  null,
  "손상된 설정 "
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Carrier": [
  null,
  "캐리어"
 ],
 "Change the settings": [
  null,
  "설정 변경"
 ],
 "Changing the settings will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Checking IP": [
  null,
  "IP확인 중입니다"
 ],
 "Close": [
  null,
  "닫기"
 ],
 "Comma-separated ports, ranges, and aliases are accepted": [
  null,
  ""
 ],
 "Configure": [
  null,
  "설정"
 ],
 "Configuring": [
  null,
  "설정 중입니다"
 ],
 "Configuring IP": [
  null,
  "IP 인증 중입니다"
 ],
 "Connect automatically": [
  null,
  "자동으로 연결"
 ],
 "Connection will be lost": [
  null,
  "연결이 끊어졌습니다 "
 ],
 "Create it": [
  null,
  "만들기 "
 ],
 "Creating this VLAN will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "이 VLAN을 생성하면 서버와의 연결이 끊어지고 관리 UI를 사용할 수 없게 됩니다. "
 ],
 "Creating this bond will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "이 본드를 생성하면 서버와의 연결이 끊어지고 관리 UI를 사용할 수 없게 됩니다. "
 ],
 "Creating this bridge will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "이 브릿지를 생성하면 서버와의 연결이 끊어지고 관리 UI를 사용할 수 없게 됩니다. "
 ],
 "Creating this team will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "이 팀을 생성하면 서버와의 연결이 끊어지고 관리 UI를 사용할 수 없게 됩니다. "
 ],
 "Custom Ports": [
  null,
  "사용자 지정 포트 "
 ],
 "Custom zones": [
  null,
  "사용자 지정 영역 "
 ],
 "DNS": [
  null,
  "DNS"
 ],
 "DNS $val": [
  null,
  "DNS $val"
 ],
 "DNS Search Domains": [
  null,
  "DNS 검색 도메인 "
 ],
 "DNS Search Domains $val": [
  null,
  "DNS 검색 도메인 $val"
 ],
 "Deactivating": [
  null,
  "비활성화 중 입니다"
 ],
 "Delete": [
  null,
  "삭제"
 ],
 "Delete $0": [
  null,
  "$0 삭제 "
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "<b>$0</b>을/를 삭제하면 서버와의 연결이 끊어지고 관리 UI를 사용할 수 없게 됩니다. "
 ],
 "Description": [
  null,
  "설명"
 ],
 "Details": [
  null,
  "상세 정보"
 ],
 "Disabled": [
  null,
  "사용 안함"
 ],
 "Enable Service": [
  null,
  ""
 ],
 "Entire subnet": [
  null,
  "전체 서브넷 "
 ],
 "Ethernet MAC": [
  null,
  "Ethernet MAC"
 ],
 "Ethernet MTU": [
  null,
  "Ethernet MTU"
 ],
 "Ethtool": [
  null,
  "Ethtool"
 ],
 "Example: 22,ssh,8080,5900-5910": [
  null,
  "예: 22,ssh,8080,5900-5910"
 ],
 "Example: 88,2019,nfs,rsync": [
  null,
  "예: 88,2019,nfs,rsync"
 ],
 "Failed": [
  null,
  "실패하였습니다"
 ],
 "Failed to add port": [
  null,
  ""
 ],
 "Failed to add service": [
  null,
  "서비스 추가 실패 "
 ],
 "Failed to add zone": [
  null,
  "영역 추가 실패 "
 ],
 "Failed to remove service": [
  null,
  "서비스를 제거하지 못했습니다 "
 ],
 "Filter Services": [
  null,
  "필터 서비스 "
 ],
 "Firewall": [
  null,
  "방화벽"
 ],
 "Firewall is not available": [
  null,
  ""
 ],
 "Forward delay $forward_delay": [
  null,
  "포워드 딜레이 $forward_delay"
 ],
 "General": [
  null,
  "일반"
 ],
 "Go to now": [
  null,
  "지금 바로 가기"
 ],
 "Hair Pin mode": [
  null,
  "Hair Pin 모드"
 ],
 "Hairpin mode": [
  null,
  "Hairpin 모드"
 ],
 "Hello time $hello_time": [
  null,
  "Hello 시간 $hello_time"
 ],
 "IP Address": [
  null,
  "IP 주소"
 ],
 "IP Range": [
  null,
  "IP 범위 "
 ],
 "IP Settings": [
  null,
  "IP 설정"
 ],
 "IPv4": [
  null,
  "IPv4"
 ],
 "IPv4 Settings": [
  null,
  "IPv4 설정"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "IPv6 설정"
 ],
 "Id $id": [
  null,
  "Id $id"
 ],
 "Ignore": [
  null,
  "무시"
 ],
 "Inactive": [
  null,
  "비활성"
 ],
 "Included services": [
  null,
  ""
 ],
 "Interfaces": [
  null,
  "인터페이스"
 ],
 "Invalid address $0": [
  null,
  "잘못된 주소 $0"
 ],
 "Invalid metric $0": [
  null,
  "잘못된 포트"
 ],
 "Invalid port number": [
  null,
  ""
 ],
 "Invalid prefix $0": [
  null,
  "잘못된 포트"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "잘못된 포트"
 ],
 "Invalid range": [
  null,
  "잘못된 범위 "
 ],
 "Keep connection": [
  null,
  ""
 ],
 "LACP Key": [
  null,
  "LACP 키 "
 ],
 "Link Monitoring": [
  null,
  "링크 모니터링"
 ],
 "Link Watch": [
  null,
  ""
 ],
 "Link down delay": [
  null,
  "링크 다운 딜레이"
 ],
 "Link local": [
  null,
  "로컬 링크"
 ],
 "Link up delay": [
  null,
  "링크 업 딜레이"
 ],
 "Load Balancing": [
  null,
  "로드 밸런싱 "
 ],
 "MAC": [
  null,
  "MAC"
 ],
 "MII (Recommended)": [
  null,
  "MII (권장 사항)"
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "MTU must be a positive number": [
  null,
  ""
 ],
 "Manual": [
  null,
  "수동"
 ],
 "Master": [
  null,
  "마스터"
 ],
 "Maximum message age $max_age": [
  null,
  "최대 메세지 수명 $max_age"
 ],
 "Mode": [
  null,
  "모드"
 ],
 "Monitoring Interval": [
  null,
  "모니터링 주기"
 ],
 "Monitoring Targets": [
  null,
  "모니터링 대상"
 ],
 "NSNA Ping": [
  null,
  "NSNA Ping"
 ],
 "Name": [
  null,
  "이름"
 ],
 "Network devices and graphs require NetworkManager.": [
  null,
  ""
 ],
 "NetworkManager is not running.": [
  null,
  "NetworkManager가 실행되고 있지 않습니다."
 ],
 "Networking": [
  null,
  "네트워킹"
 ],
 "Networking Logs": [
  null,
  "네트워킹 로그"
 ],
 "No": [
  null,
  "아니오"
 ],
 "No active zones": [
  null,
  ""
 ],
 "No carrier": [
  null,
  "캐리어가 없습니다"
 ],
 "No description available": [
  null,
  "사용 가능한 설명이 없음"
 ],
 "No open ports": [
  null,
  ""
 ],
 "None": [
  null,
  "없음"
 ],
 "Not available": [
  null,
  "사용할 수 없습니다"
 ],
 "Off": [
  null,
  "비활성"
 ],
 "On": [
  null,
  "활성"
 ],
 "Parent": [
  null,
  "부모"
 ],
 "Parent $parent": [
  null,
  "부모 $parent"
 ],
 "Part of ": [
  null,
  "일부분"
 ],
 "Passive": [
  null,
  ""
 ],
 "Path cost": [
  null,
  "Path cost"
 ],
 "Path cost $path_cost": [
  null,
  "Path cost $path_cost"
 ],
 "Permanent": [
  null,
  "영구적 "
 ],
 "Ping Interval": [
  null,
  ""
 ],
 "Ping Target": [
  null,
  ""
 ],
 "Please install the $0 package": [
  null,
  ""
 ],
 "Port number and type do not match": [
  null,
  ""
 ],
 "Ports": [
  null,
  "포트"
 ],
 "Prefix length": [
  null,
  "접두 길이"
 ],
 "Prefix length or Netmask": [
  null,
  "접두 길이 또는 넷마스크"
 ],
 "Preparing": [
  null,
  "준비 중입니다"
 ],
 "Preserve": [
  null,
  "저장 "
 ],
 "Primary": [
  null,
  "주"
 ],
 "Priority": [
  null,
  "우선순위"
 ],
 "Priority $priority": [
  null,
  "우선순위 $priority"
 ],
 "Random": [
  null,
  "임의"
 ],
 "Range": [
  null,
  ""
 ],
 "Range must be strictly ordered": [
  null,
  ""
 ],
 "Reboot": [
  null,
  "다시 시작"
 ],
 "Receiving": [
  null,
  "수신 중입니다"
 ],
 "Remove $0": [
  null,
  ""
 ],
 "Remove service": [
  null,
  ""
 ],
 "Remove service from zones": [
  null,
  ""
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Restoring connection": [
  null,
  "재연결"
 ],
 "Round Robin": [
  null,
  "Round Robin"
 ],
 "Routes": [
  null,
  ""
 ],
 "Runner": [
  null,
  ""
 ],
 "STP Forward delay": [
  null,
  "STP Forward delay"
 ],
 "STP Hello time": [
  null,
  "STP Hello time"
 ],
 "STP Maximum message age": [
  null,
  "STP Maximum message age"
 ],
 "STP Priority": [
  null,
  "STP 우선순위"
 ],
 "Sending": [
  null,
  "전송 중입니다"
 ],
 "Service": [
  null,
  "서비스"
 ],
 "Services": [
  null,
  "서비스"
 ],
 "Set to": [
  null,
  ""
 ],
 "Shared": [
  null,
  "공유됨"
 ],
 "Sorted from least trusted to most trusted": [
  null,
  ""
 ],
 "Spanning Tree Protocol": [
  null,
  "Spanning Tree Protocol"
 ],
 "Spanning Tree Protocol (STP)": [
  null,
  "Spanning Tree Protocol (STP)"
 ],
 "Stable": [
  null,
  ""
 ],
 "Start Service": [
  null,
  "서비스 시작 "
 ],
 "Status": [
  null,
  "상태"
 ],
 "Sticky": [
  null,
  ""
 ],
 "Switch off $0": [
  null,
  ""
 ],
 "Switch on $0": [
  null,
  ""
 ],
 "Switching off <b>$0</b>  will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Switching off <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Switching on <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Team": [
  null,
  " 팀"
 ],
 "Team Port": [
  null,
  "팀 포트"
 ],
 "Team Port Settings": [
  null,
  ""
 ],
 "Team Settings": [
  null,
  ""
 ],
 "Testing connection": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  "사용자 <b>$0</b> 는 네트워크 설정 권한이 없습니다"
 ],
 "This device cannot be managed here.": [
  null,
  ""
 ],
 "Trust level": [
  null,
  ""
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "예상치 못한 오류"
 ],
 "Unknown": [
  null,
  "알 수 없음"
 ],
 "Unknown \"$0\"": [
  null,
  "알 수 없는 \"$0\""
 ],
 "Unknown configuration": [
  null,
  "알 수 없는 설정"
 ],
 "Unknown service name": [
  null,
  "알 수 없는 서비스 이름"
 ],
 "Unmanaged Interfaces": [
  null,
  ""
 ],
 "VLAN": [
  null,
  "VLAN"
 ],
 "VLAN Id": [
  null,
  "VLAN ID"
 ],
 "VLAN Settings": [
  null,
  "VLAN 설정"
 ],
 "Waiting": [
  null,
  "대기 중입니다"
 ],
 "XOR": [
  null,
  "XOR"
 ],
 "Yes": [
  null,
  "네"
 ],
 "You are not authorized to modify the firewall.": [
  null,
  "방화벽을 수정할 수있는 권한이 없습니다."
 ],
 "Zone": [
  null,
  "영역 "
 ],
 "Zones": [
  null,
  "영역 "
 ],
 "[$0 bytes of binary data]": [
  null,
  ""
 ],
 "[binary data]": [
  null,
  "[바이너리 데이터]"
 ],
 "[no data]": [
  null,
  "[데이터 없음]"
 ],
 "show less": [
  null,
  "덜 보기 "
 ],
 "show more": [
  null,
  "더 보기 "
 ],
 "page-title\u0004Networking": [
  null,
  "네트워킹"
 ]
}));
