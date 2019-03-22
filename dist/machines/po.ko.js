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
 "Activate": [
  null,
  "활성화"
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
 "Always attach": [
  null,
  ""
 ],
 "Apply": [
  null,
  "적용"
 ],
 "Automatically start libvirt on boot": [
  null,
  "부트시 자동으로 libvirt 시작"
 ],
 "Autostart": [
  null,
  ""
 ],
 "Available": [
  null,
  "사용 가능"
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
 "Connecting to Virtualization Service": [
  null,
  "가상 서비스에 연결 중입니다 "
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
 "Create Storage Pool": [
  null,
  "스토리지 풀 만들기 "
 ],
 "Create VM": [
  null,
  "가상 머신 만들기 "
 ],
 "Creation of vm $0 failed": [
  null,
  ""
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "DHCP Range": [
  null,
  ""
 ],
 "Deactivate": [
  null,
  "비활성화 "
 ],
 "Delete": [
  null,
  "삭제"
 ],
 "Delete Content": [
  null,
  ""
 ],
 "Delete Storage Pool $0": [
  null,
  ""
 ],
 "Delete associated storage files:": [
  null,
  ""
 ],
 "Delete the Volumes inside this Pool": [
  null,
  ""
 ],
 "Deleting an inactive Storage Pool will only undefine the Pool. Its content will not be deleted.": [
  null,
  ""
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
 "Emulated Machine": [
  null,
  ""
 ],
 "Existing Disk Image": [
  null,
  ""
 ],
 "Existing disk image on host's file system": [
  null,
  ""
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  ""
 ],
 "File": [
  null,
  "파일"
 ],
 "Filesystem Directory": [
  null,
  ""
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
 "Forwarding mode": [
  null,
  ""
 ],
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  ""
 ],
 "General": [
  null,
  "일반"
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
 "Host": [
  null,
  "호스트"
 ],
 "Host Name": [
  null,
  "호스트명"
 ],
 "Host should not be empty": [
  null,
  ""
 ],
 "INSTALL VM action failed": [
  null,
  ""
 ],
 "IPv4 Address": [
  null,
  ""
 ],
 "IPv6 Address": [
  null,
  ""
 ],
 "Immediately Start VM": [
  null,
  ""
 ],
 "Install": [
  null,
  "설치"
 ],
 "Installation Source": [
  null,
  ""
 ],
 "Installation Source Type": [
  null,
  ""
 ],
 "Installation Source should not be empty": [
  null,
  ""
 ],
 "Interface Type": [
  null,
  ""
 ],
 "Invalid filename": [
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
 "Local Install Media": [
  null,
  ""
 ],
 "MAC Address": [
  null,
  "MAC 주소"
 ],
 "Mac Address": [
  null,
  ""
 ],
 "Manual Connection": [
  null,
  ""
 ],
 "Maximum Transmission Unit": [
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
 "Name should not be empty": [
  null,
  ""
 ],
 "Name: ": [
  null,
  ""
 ],
 "Netmask": [
  null,
  ""
 ],
 "Network File System": [
  null,
  ""
 ],
 "Network Interfaces": [
  null,
  ""
 ],
 "Network interface settings could not be saved": [
  null,
  ""
 ],
 "Networks": [
  null,
  "네트워크"
 ],
 "New Volume Name": [
  null,
  ""
 ],
 "No Storage Volumes defined for this Storage Pool": [
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
 "No matching files found": [
  null,
  ""
 ],
 "No network interfaces defined for this VM": [
  null,
  ""
 ],
 "No network is defined on this host": [
  null,
  ""
 ],
 "No storage pool is defined on this host": [
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
 "OS Vendor": [
  null,
  ""
 ],
 "One or more selected volumes are used by domains. Detach the disks first to allow volume deletion.": [
  null,
  ""
 ],
 "Open": [
  null,
  ""
 ],
 "Operating System": [
  null,
  "운영 체제"
 ],
 "Overview": [
  null,
  "개요"
 ],
 "Path": [
  null,
  "경로"
 ],
 "Path on host's filesystem": [
  null,
  ""
 ],
 "Path to ISO file on host's file system": [
  null,
  ""
 ],
 "Path to file": [
  null,
  ""
 ],
 "Persistence": [
  null,
  ""
 ],
 "Persistent": [
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
 "Please start the virtual machine to access its console.": [
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
 "Prefix": [
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
 "QEMU/KVM System connection": [
  null,
  "QEMU/KVM 시스템 연결 "
 ],
 "QEMU/KVM User connection": [
  null,
  "QEMU/KVM 사용자 연결 "
 ],
 "Readonly": [
  null,
  "읽기 전용 "
 ],
 "Reconnect": [
  null,
  "재연결"
 ],
 "Remote URL": [
  null,
  "원격 URL"
 ],
 "Restart": [
  null,
  "재시작"
 ],
 "Run": [
  null,
  "실행"
 ],
 "Run when host boots": [
  null,
  ""
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
 "Source Path": [
  null,
  "소스 경로 "
 ],
 "Source path should not be empty": [
  null,
  ""
 ],
 "Source should start with http, ftp or nfs protocol": [
  null,
  ""
 ],
 "Start libvirt": [
  null,
  "libvirt 시작 "
 ],
 "Start pool when host boots": [
  null,
  ""
 ],
 "Startup": [
  null,
  ""
 ],
 "State": [
  null,
  "상태"
 ],
 "Storage Pool Name": [
  null,
  "스토리지 풀 이름 "
 ],
 "Storage Pool failed to be created": [
  null,
  ""
 ],
 "Storage Pool failed to get activated": [
  null,
  ""
 ],
 "Storage Pool failed to get deactivated": [
  null,
  ""
 ],
 "Storage Pools": [
  null,
  "스토리지 풀 "
 ],
 "Storage Size": [
  null,
  "스토리지 크기 "
 ],
 "Storage Volumes": [
  null,
  "스토리지 볼륨 "
 ],
 "Storage Volumes could not be deleted": [
  null,
  ""
 ],
 "System": [
  null,
  "시스템 "
 ],
 "Target Path": [
  null,
  "대상 경로"
 ],
 "Target path should not be empty": [
  null,
  ""
 ],
 "The Storage Pool could not be deleted": [
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
 "The directory on the server being exported": [
  null,
  ""
 ],
 "The pool is empty": [
  null,
  ""
 ],
 "Threads per core": [
  null,
  ""
 ],
 "Too many files found": [
  null,
  ""
 ],
 "Troubleshoot": [
  null,
  "문제 해결"
 ],
 "Type": [
  null,
  "유형"
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unique name": [
  null,
  ""
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
 "Used by": [
  null,
  ""
 ],
 "VCPU settings could not be saved": [
  null,
  ""
 ],
 "VM CHANGE_NETWORK_STATE action failed": [
  null,
  "VM CHANGE_NETWORK_STATE 작업에 실패했습니다 "
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  "VM DELETE (DESTROY) 작업에 실패했습니다 "
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  "VM DELETE (UNDEFINE) 작업에 실패했습니다 "
 ],
 "VM DELETE action failed": [
  null,
  "VM DELETE 작업에 실패했습니다 "
 ],
 "VM DETACH_DISK action failed": [
  null,
  "VM DETACH_DISK 작업에 실패했습니다 "
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
 "VM SENDNMI action failed": [
  null,
  "VM SENDNMI 작업에 실패했습니다 "
 ],
 "VM SHUT DOWN action failed": [
  null,
  "VM SHUT DOWN 작업에 실패했습니다 "
 ],
 "VM START action failed": [
  null,
  "VM START 작업에 실패했습니다 "
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
 "Virtual Machines": [
  null,
  "가상머신"
 ],
 "Virtualization Service (libvirt) is Not Active": [
  null,
  "가상화 서비스 (libvirt)가 활성화되어 있지 않습니다"
 ],
 "Virtualization Service is Available": [
  null,
  "가상화 서비스를 사용할 수 있습니다 "
 ],
 "Volume": [
  null,
  "볼륨"
 ],
 "active": [
  null,
  "active"
 ],
 "bridge": [
  null,
  "브릿지"
 ],
 "cdrom": [
  null,
  "cdrom"
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
 "inactive": [
  null,
  "비활성"
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
 "other": [
  null,
  "기타 "
 ],
 "paused": [
  null,
  "일시 중지"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
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
 "suspended (PM)": [
  null,
  "일시 정지 (PM)"
 ],
 "udp": [
  null,
  "udp"
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
