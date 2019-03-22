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
  "x-generator": "Zanata 4.6.2"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 대부분의 운영 체제에서 사용할 수 있습니다. 설치하려면 GNOME 소프트웨어에서 검색하거나 다음을 실행하십시오."
 ],
 "$0 vCPU Details": [
  null,
  "$0 vCPU 세부 정보"
 ],
 "Action": [
  null,
  "동작 "
 ],
 "Add": [
  null,
  "추가"
 ],
 "Add Disk": [
  null,
  "디스크 추가"
 ],
 "Address": [
  null,
  "주소"
 ],
 "Address:": [
  null,
  "주소:"
 ],
 "All running virtual machines will be turned off.": [
  null,
  "실행 중인 모든 가상 머신이 종료됩니다. "
 ],
 "Always attach": [
  null,
  ""
 ],
 "Apply": [
  null,
  "적용"
 ],
 "Automatically selected host": [
  null,
  "자동 선택된 호스트"
 ],
 "Autostart": [
  null,
  ""
 ],
 "Available": [
  null,
  "사용 가능"
 ],
 "Base Template": [
  null,
  "기본 템플릿"
 ],
 "Base template": [
  null,
  "기본 템플릿"
 ],
 "Base template:": [
  null,
  "기본 템플릿 :"
 ],
 "Boot Order": [
  null,
  ""
 ],
 "Bus": [
  null,
  "버스 "
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "CHANGE NETWORK STATE 동작이 실패했습니다 "
 ],
 "CPU Type": [
  null,
  ""
 ],
 "CREATE VM action failed": [
  null,
  "CREATE VM 동작이 실패했습니다 "
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Capacity": [
  null,
  "용량"
 ],
 "Changes will take effect after shutting down the VM": [
  null,
  ""
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  ""
 ],
 "Cluster": [
  null,
  "클러스터"
 ],
 "Cluster Templates": [
  null,
  "클러스터 템플릿 "
 ],
 "Cluster Virtual Machines": [
  null,
  "클러스터 가상 머신 "
 ],
 "Confirm migration": [
  null,
  "마이그레이션 확인 "
 ],
 "Confirm reload:": [
  null,
  ""
 ],
 "Confirm save:": [
  null,
  ""
 ],
 "Connect to oVirt Engine": [
  null,
  ""
 ],
 "Connect with any $0 viewer application.": [
  null,
  ""
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  ""
 ],
 "Connecting": [
  null,
  "연결 중"
 ],
 "Connection": [
  null,
  "연결"
 ],
 "Console Type": [
  null,
  "콘솔 유형 "
 ],
 "Consoles": [
  null,
  "콘솔 "
 ],
 "Cores per socket": [
  null,
  "소켓당 코어 수 "
 ],
 "Create": [
  null,
  "생성"
 ],
 "Create New": [
  null,
  ""
 ],
 "Create New VM": [
  null,
  ""
 ],
 "Create VM": [
  null,
  "가상 머신 만들기 "
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "Delete": [
  null,
  "삭제"
 ],
 "Delete associated storage files:": [
  null,
  ""
 ],
 "Description": [
  null,
  "설명"
 ],
 "Description:": [
  null,
  "설명:"
 ],
 "Device": [
  null,
  "장치"
 ],
 "Disconnect": [
  null,
  "연결 끊김"
 ],
 "Disconnected": [
  null,
  "연결 해제됨"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  ""
 ],
 "Disk failed to be attached": [
  null,
  ""
 ],
 "Disk failed to be created": [
  null,
  ""
 ],
 "Disks": [
  null,
  ""
 ],
 "Download the MSI from $0": [
  null,
  ""
 ],
 "Edit": [
  null,
  "편집"
 ],
 "Edit the vdsm.conf": [
  null,
  ""
 ],
 "Emulated Machine": [
  null,
  ""
 ],
 "Enter New VM name": [
  null,
  ""
 ],
 "FQDN": [
  null,
  "FQDN"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  ""
 ],
 "File": [
  null,
  "파일"
 ],
 "Force Restart": [
  null,
  ""
 ],
 "Force Shut Down": [
  null,
  ""
 ],
 "Format": [
  null,
  "포멧"
 ],
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  ""
 ],
 "GiB": [
  null,
  "GiB"
 ],
 "Graphics Console (VNC)": [
  null,
  ""
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  ""
 ],
 "HA": [
  null,
  ""
 ],
 "HA:": [
  null,
  ""
 ],
 "Host": [
  null,
  "호스트"
 ],
 "Host to Maintenance": [
  null,
  ""
 ],
 "INSTALL VM action failed": [
  null,
  ""
 ],
 "Install": [
  null,
  "설치"
 ],
 "Interface Type": [
  null,
  ""
 ],
 "Launch Remote Viewer": [
  null,
  ""
 ],
 "Loading ...": [
  null,
  "로딩 중..."
 ],
 "Loading data ...": [
  null,
  ""
 ],
 "MAC Address": [
  null,
  "MAC 주소"
 ],
 "MIGRATE action failed": [
  null,
  ""
 ],
 "Mac Address": [
  null,
  ""
 ],
 "Manual Connection": [
  null,
  ""
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  ""
 ],
 "Memory": [
  null,
  "메모리"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Migrate To:": [
  null,
  ""
 ],
 "Model": [
  null,
  "모델 "
 ],
 "Model type": [
  null,
  ""
 ],
 "More Information": [
  null,
  ""
 ],
 "Name": [
  null,
  "이름"
 ],
 "Network Interfaces": [
  null,
  ""
 ],
 "Network interface settings could not be saved": [
  null,
  ""
 ],
 "New Volume Name": [
  null,
  ""
 ],
 "No VM found in oVirt.": [
  null,
  ""
 ],
 "No VM is running or defined on this host": [
  null,
  ""
 ],
 "No boot device found": [
  null,
  ""
 ],
 "No console defined for this virtual machine.": [
  null,
  ""
 ],
 "No disks defined for this VM": [
  null,
  ""
 ],
 "No network interfaces defined for this VM": [
  null,
  ""
 ],
 "No oVirt connection": [
  null,
  ""
 ],
 "No virtual networks": [
  null,
  ""
 ],
 "None (Isolated Network)": [
  null,
  ""
 ],
 "Number of virtual CPUs that gonna be used.": [
  null,
  ""
 ],
 "OK": [
  null,
  "OK"
 ],
 "OS": [
  null,
  "OS"
 ],
 "OS Type:": [
  null,
  ""
 ],
 "Ok": [
  null,
  "확인"
 ],
 "Open": [
  null,
  ""
 ],
 "Optimized for:": [
  null,
  ""
 ],
 "Overview": [
  null,
  "개요"
 ],
 "Persistence": [
  null,
  ""
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  ""
 ],
 "Please enter new volume name": [
  null,
  ""
 ],
 "Please enter new volume size": [
  null,
  ""
 ],
 "Please provide fully qualified domain name and port of the oVirt engine.": [
  null,
  ""
 ],
 "Please provide valid oVirt engine fully qualified domain name (FQDN) and port (443 by default)": [
  null,
  ""
 ],
 "Please refer to oVirt's $0 for more information about Remote Viewer setup.": [
  null,
  ""
 ],
 "Please start the virtual machine to access its console.": [
  null,
  ""
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  ""
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  ""
 ],
 "Plug": [
  null,
  ""
 ],
 "Pool": [
  null,
  "풀"
 ],
 "Port": [
  null,
  "포트"
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  ""
 ],
 "Preparing for Maintenance": [
  null,
  ""
 ],
 "Private": [
  null,
  ""
 ],
 "Protocol": [
  null,
  "프로토콜"
 ],
 "REBOOT action failed": [
  null,
  "REBOOT 작업에 실패했습니다 "
 ],
 "Readonly": [
  null,
  "읽기 전용 "
 ],
 "Reconnect": [
  null,
  "재연결"
 ],
 "Register oVirt": [
  null,
  ""
 ],
 "Registering oVirt to Cockpit": [
  null,
  ""
 ],
 "Reload": [
  null,
  "다시읽기"
 ],
 "Restart": [
  null,
  "재시작"
 ],
 "Run": [
  null,
  "실행"
 ],
 "Run Here": [
  null,
  ""
 ],
 "Run when host boots": [
  null,
  ""
 ],
 "Running Since:": [
  null,
  ""
 ],
 "SET VCPU SETTINGS action failed": [
  null,
  "SET VCPU SETTINGS 작업에 실패했습니다 "
 ],
 "SHUTDOWN action failed": [
  null,
  "SHUTDOWN 작업에 실패했습니다"
 ],
 "SPICE": [
  null,
  "SPICE"
 ],
 "SPICE Address:": [
  null,
  "SPICE 주소:"
 ],
 "SPICE Port:": [
  null,
  "SPICE 포트:"
 ],
 "SPICE TLS Port:": [
  null,
  "SPICE TLS 포트:"
 ],
 "START action failed": [
  null,
  "START 작업에 실패했습니다."
 ],
 "SUSPEND action failed": [
  null,
  "SUSPEND 작업에 실패했습니다"
 ],
 "Save": [
  null,
  "저장"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  ""
 ],
 "Send key": [
  null,
  ""
 ],
 "Serial Console": [
  null,
  ""
 ],
 "Session": [
  null,
  "세션"
 ],
 "Shut Down": [
  null,
  "종료"
 ],
 "Size": [
  null,
  "크기"
 ],
 "Sockets": [
  null,
  "소켓 "
 ],
 "Source": [
  null,
  "원본"
 ],
 "State": [
  null,
  "상태"
 ],
 "Stateless": [
  null,
  ""
 ],
 "Stateless:": [
  null,
  ""
 ],
 "Suspend": [
  null,
  "절전"
 ],
 "Switch Host to Maintenance": [
  null,
  ""
 ],
 "Switching host to maintenance mode failed. Received error: ": [
  null,
  ""
 ],
 "Switching host to maintenance mode in progress ...": [
  null,
  ""
 ],
 "System": [
  null,
  "시스템 "
 ],
 "Template": [
  null,
  "템플릿"
 ],
 "Templates": [
  null,
  "템플릿"
 ],
 "Templates of $0 cluster": [
  null,
  ""
 ],
 "The VM crashed.": [
  null,
  ""
 ],
 "The VM is down.": [
  null,
  ""
 ],
 "The VM is going down.": [
  null,
  ""
 ],
 "The VM is idle.": [
  null,
  ""
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  ""
 ],
 "The VM is paused.": [
  null,
  ""
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  ""
 ],
 "The VM is running.": [
  null,
  ""
 ],
 "The VM is suspended by guest power management.": [
  null,
  ""
 ],
 "The pool is empty": [
  null,
  ""
 ],
 "This host is managed by a virtualization manager, so creation of new VMs from the host is not possible.": [
  null,
  ""
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  ""
 ],
 "Threads per core": [
  null,
  ""
 ],
 "Type": [
  null,
  "유형"
 ],
 "Unplug": [
  null,
  ""
 ],
 "Usage": [
  null,
  "사용법"
 ],
 "Use Existing": [
  null,
  ""
 ],
 "Used": [
  null,
  "사용 중"
 ],
 "VCPU settings could not be saved": [
  null,
  ""
 ],
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "VDSM 서비스 관리 "
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  "VM DELETE (DESTROY) 작업에 실패했습니다 "
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  "VM DELETE (UNDEFINE) 작업에 실패했습니다 "
 ],
 "VM FORCE OFF action failed": [
  null,
  "VM FORCE OFF 작업에 실패했습니다 "
 ],
 "VM FORCE REBOOT action failed": [
  null,
  "VM FORCE REBOOT 작업에 실패했습니다 "
 ],
 "VM REBOOT action failed": [
  null,
  "VM REBOOT 작업에 실패했습니다 "
 ],
 "VM SEND Non-Maskable Interrrupt action failed": [
  null,
  "VM SEND Non-Maskable Interrrupt 작업에 실패했습니다 "
 ],
 "VM SHUT DOWN action failed": [
  null,
  "VM SHUT DOWN 작업에 실패했습니다 "
 ],
 "VM START action failed": [
  null,
  "VM START 작업에 실패했습니다 "
 ],
 "VM icon": [
  null,
  "가상 머신 아이콘 "
 ],
 "VNC": [
  null,
  "VNC"
 ],
 "VNC Address:": [
  null,
  "VNC 주소:"
 ],
 "VNC Port:": [
  null,
  "VNC 포트:"
 ],
 "VNC TLS Port:": [
  null,
  "VNC TLS 포트:"
 ],
 "Version": [
  null,
  "버전"
 ],
 "Version num": [
  null,
  "버전 번호 "
 ],
 "Virtual Machines": [
  null,
  "가상머신"
 ],
 "Virtual Machines of $0 cluster": [
  null,
  "$0 클러스터의 가상 머신 "
 ],
 "Volume": [
  null,
  "볼륨"
 ],
 "bridge": [
  null,
  "브릿지"
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "connecting": [
  null,
  "연결 중 "
 ],
 "cores": [
  null,
  "코어 "
 ],
 "crashed": [
  null,
  ""
 ],
 "custom": [
  null,
  "사용자 지정 "
 ],
 "direct": [
  null,
  ""
 ],
 "disabled": [
  null,
  "비활성화됨 "
 ],
 "disk": [
  null,
  "디스크"
 ],
 "down": [
  null,
  "아래로"
 ],
 "dying": [
  null,
  ""
 ],
 "enabled": [
  null,
  "활성화됨 "
 ],
 "error": [
  null,
  "오류 "
 ],
 "ethernet": [
  null,
  ""
 ],
 "host": [
  null,
  "호스트"
 ],
 "hostdev": [
  null,
  "hostdev"
 ],
 "idle": [
  null,
  ""
 ],
 "initializing": [
  null,
  "초기화 중 "
 ],
 "installation failed": [
  null,
  "설치에 실패했습니다 "
 ],
 "installing OS": [
  null,
  "OS 설치 중 "
 ],
 "kdumping": [
  null,
  "kdump 중 "
 ],
 "maintenance": [
  null,
  "유지 보수 "
 ],
 "mcast": [
  null,
  "mcast"
 ],
 "network": [
  null,
  "네트워크 "
 ],
 "no": [
  null,
  "아니요"
 ],
 "non operational": [
  null,
  "작동하지 않습니다 "
 ],
 "non responsive": [
  null,
  "응답하지 않습니다 "
 ],
 "oVirt": [
  null,
  "oVirt"
 ],
 "oVirt Host State:": [
  null,
  "oVirt 호스트 상태:"
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  ""
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  ""
 ],
 "oVirt installation script failed with following output: ": [
  null,
  ""
 ],
 "oVirt login in progress": [
  null,
  "oVirt 로그인 처리 중 "
 ],
 "other": [
  null,
  "기타 "
 ],
 "paused": [
  null,
  "일시 중지"
 ],
 "pending approval": [
  null,
  "승인 보류 중 "
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
 ],
 "reboot": [
  null,
  "재부팅 "
 ],
 "running": [
  null,
  "실행 중"
 ],
 "server": [
  null,
  "서버 "
 ],
 "show less": [
  null,
  "덜 보기 "
 ],
 "show more": [
  null,
  "더 보기 "
 ],
 "shut off": [
  null,
  "종료"
 ],
 "shutdown": [
  null,
  "종료"
 ],
 "sockets": [
  null,
  "소켓 "
 ],
 "suspended (PM)": [
  null,
  "일시 정지 (PM)"
 ],
 "threads": [
  null,
  "스레드"
 ],
 "udp": [
  null,
  "udp"
 ],
 "unassigned": [
  null,
  "할당되지 않음 "
 ],
 "undefined": [
  null,
  "정의되지 않음 "
 ],
 "up": [
  null,
  "위로"
 ],
 "user": [
  null,
  "사용자 "
 ],
 "vCPU Count": [
  null,
  "vCPU 개수"
 ],
 "vCPU Maximum": [
  null,
  "vCPU 최대 "
 ],
 "vCPUs": [
  null,
  "vCPU"
 ],
 "vhostuser": [
  null,
  "vhostuser"
 ],
 "yes": [
  null,
  "예 "
 ]
}));
