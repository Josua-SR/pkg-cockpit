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
  "x-generator": "Zanata 3.9.6"
 },
 "$0 day": [
  "$0 days",
  ""
 ],
 "$0 hour": [
  "$0 hours",
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  ""
 ],
 "$0 month": [
  "$0 months",
  ""
 ],
 "$0 week": [
  "$0 weeks",
  ""
 ],
 "$0 year": [
  "$0 years",
  ""
 ],
 "$mtu": [
  null,
  ""
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
  "1 주"
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
  ""
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
  ""
 ],
 "Active": [
  null,
  "활성"
 ],
 "Active Backup": [
  null,
  "활성화된 백업"
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
  ""
 ],
 "Add Bond": [
  null,
  "본드 추가"
 ],
 "Add Bridge": [
  null,
  "브릿지 추가"
 ],
 "Add Services": [
  null,
  ""
 ],
 "Add Services…": [
  null,
  ""
 ],
 "Add Team": [
  null,
  ""
 ],
 "Add VLAN": [
  null,
  "VLAN 추가"
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Additional DNS $val": [
  null,
  ""
 ],
 "Additional DNS Search Domains $val": [
  null,
  ""
 ],
 "Additional address $val": [
  null,
  ""
 ],
 "Address $val": [
  null,
  ""
 ],
 "Addresses": [
  null,
  ""
 ],
 "Allowed Services": [
  null,
  ""
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
  "자동(DHCP only)"
 ],
 "Automatic (DHCP)": [
  null,
  "자동(DHCP)"
 ],
 "Balancer": [
  null,
  ""
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
  ""
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
  ""
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
  ""
 ],
 "Create it": [
  null,
  ""
 ],
 "Creating this VLAN will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Creating this bond will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Creating this bridge will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Creating this team will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "DNS": [
  null,
  ""
 ],
 "DNS $val": [
  null,
  ""
 ],
 "DNS Search Domains": [
  null,
  ""
 ],
 "DNS Search Domains $val": [
  null,
  ""
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
  ""
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Details": [
  null,
  ""
 ],
 "Disabled": [
  null,
  "사용 안함"
 ],
 "Ethernet MAC": [
  null,
  ""
 ],
 "Ethernet MTU": [
  null,
  ""
 ],
 "Ethtool": [
  null,
  ""
 ],
 "Failed": [
  null,
  "실패하였습니다"
 ],
 "Filter Services": [
  null,
  ""
 ],
 "Firewall": [
  null,
  ""
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
  ""
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  ""
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
 "Interfaces": [
  null,
  "인터페이스"
 ],
 "Invalid address $0": [
  null,
  "잘못된 포트"
 ],
 "Invalid metric $0": [
  null,
  "잘못된 포트"
 ],
 "Invalid prefix $0": [
  null,
  "잘못된 포트"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "잘못된 포트"
 ],
 "Keep connection": [
  null,
  ""
 ],
 "LACP Key": [
  null,
  ""
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
  ""
 ],
 "MAC": [
  null,
  ""
 ],
 "MII (Recommended)": [
  null,
  "MII (권장 사항)"
 ],
 "MTU": [
  null,
  ""
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
 "Members": [
  null,
  "맴버"
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
  ""
 ],
 "Name": [
  null,
  "이름"
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
 "No carrier": [
  null,
  "캐리어가 없습니다"
 ],
 "No open ports": [
  null,
  ""
 ],
 "Not available": [
  null,
  "사용할 수 없습니다"
 ],
 "Off": [
  null,
  "비활성"
 ],
 "Ok": [
  null,
  ""
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
  ""
 ],
 "Ping Interval": [
  null,
  ""
 ],
 "Ping Target": [
  null,
  ""
 ],
 "Please install the {0} package": [
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
  ""
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
  ""
 ],
 "Reboot": [
  null,
  ""
 ],
 "Receiving": [
  null,
  "수신 중입니다"
 ],
 "Remove $0": [
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
  ""
 ],
 "Set to": [
  null,
  ""
 ],
 "Shared": [
  null,
  "공유됨"
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
  ""
 ],
 "Team Port": [
  null,
  ""
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
  ""
 ],
 "Unknown configuration": [
  null,
  "알 수 없는 설정"
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
  ""
 ],
 "[$0 bytes of binary data]": [
  null,
  ""
 ],
 "[binary data]": [
  null,
  ""
 ],
 "[no data]": [
  null,
  ""
 ],
 "page-title\u0004Networking": [
  null,
  "네트워킹"
 ]
}));
