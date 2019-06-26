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
 "$0 Network": [
  null,
  "$0 네트워크 "
 ],
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
 "Additional": [
  null,
  "추가 "
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
  "자동 시작"
 ],
 "Available": [
  null,
  "사용 가능"
 ],
 "Boot Order": [
  null,
  "부팅 순서 "
 ],
 "Boot order settings could not be saved": [
  null,
  "부팅 순서 설정을 저장하지 못했습니다 "
 ],
 "Bus": [
  null,
  "버스 "
 ],
 "CPU Type": [
  null,
  "CPU 유형 "
 ],
 "Cache": [
  null,
  "캐시 "
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
  "VM 종료 후 변경사항이 적용됩니다. "
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  ""
 ],
 "Connect with any $0 viewer application.": [
  null,
  " $0 뷰어 애플리케이션에 연결합니다. "
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "SPICE 또는 VNC 뷰어 애플리케이션에 연결합니다. "
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
  "새로 만들기 "
 ],
 "Create Storage Pool": [
  null,
  "스토리지 풀 만들기 "
 ],
 "Create VM": [
  null,
  "가상 머신 만들기 "
 ],
 "Creation of VM $0 failed": [
  null,
  "VM $0 생성에 실패했습니다 "
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "Current Allocation": [
  null,
  "현재 할당 "
 ],
 "DHCP Range": [
  null,
  "DHCP 범위 "
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
  "컨텐츠 삭제 "
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
 "Disk $0 fail to get detached from VM $1": [
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
  "디스크 "
 ],
 "Disks cannot be removed from $0 VMs": [
  null,
  "$0 VM에서 디스크를 제거할 수 없습니다 "
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
  "기존 디스크 이미지 "
 ],
 "Existing disk image on host's file system": [
  null,
  "호스트의 파일 시스템에서 기존 디스크 이미지 "
 ],
 "Failed to fetch the IP addresses of the interfaces present in $0": [
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
  "파일 시스템 디렉토리 "
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
  "그래픽 콘솔 (VNC)"
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  ""
 ],
 "Hide Performance Options": [
  null,
  ""
 ],
 "Host": [
  null,
  "호스트"
 ],
 "Host Device": [
  null,
  "호스트 장치 "
 ],
 "Host Name": [
  null,
  "호스트명"
 ],
 "Host should not be empty": [
  null,
  ""
 ],
 "IP Address": [
  null,
  "IP 주소"
 ],
 "IPv4 Address": [
  null,
  "IPv4 주소 "
 ],
 "IPv6 Address": [
  null,
  "IPv6 주소 "
 ],
 "Immediately Start VM": [
  null,
  ""
 ],
 "In most configurations, macvtap does not work for host to guest network communication.": [
  null,
  "대부분의 설정에서 macvtap는 호스트와 게스트 간 네트워크 통신에서 작동하지 않습니다."
 ],
 "Initiator": [
  null,
  ""
 ],
 "Initiator IQN should not be empty": [
  null,
  ""
 ],
 "Install": [
  null,
  "설치"
 ],
 "Installation Source": [
  null,
  "설치 소스 "
 ],
 "Installation Source Type": [
  null,
  "설치 소스 유형 "
 ],
 "Installation Source should not be empty": [
  null,
  "설치 소스를 비워둘 수 없습니다 "
 ],
 "Interface Type": [
  null,
  "인터페이스 유형"
 ],
 "Invalid filename": [
  null,
  "잘못된 파일 이름 "
 ],
 "Isolated Network": [
  null,
  "독립된 네트워크"
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
  "로컬 설치 미디어 "
 ],
 "MAC Address": [
  null,
  "MAC 주소"
 ],
 "Mac": [
  null,
  "Mac"
 ],
 "Mac Address": [
  null,
  "Mac 주소 "
 ],
 "Manual Connection": [
  null,
  "수동 연결 "
 ],
 "Maximum Allocation": [
  null,
  ""
 ],
 "Maximum Transmission Unit": [
  null,
  ""
 ],
 "Maximum memory could not be saved": [
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
 "Memory could not be saved": [
  null,
  "메모리를 저장할 수 없습니다 "
 ],
 "Memory size between 128 MiB and the maximum allocation": [
  null,
  ""
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
  "모델 유형"
 ],
 "More Information": [
  null,
  ""
 ],
 "NAT to $0": [
  null,
  ""
 ],
 "NIC $0 of VM $1 failed to change state": [
  null,
  ""
 ],
 "Name": [
  null,
  "이름"
 ],
 "Name should not be empty": [
  null,
  "이름은 비워 둘 수 없습니다."
 ],
 "Name: ": [
  null,
  "이름: "
 ],
 "Netmask": [
  null,
  "넷마스크 "
 ],
 "Network $0 failed to get activated": [
  null,
  ""
 ],
 "Network $0 failed to get deactivated": [
  null,
  ""
 ],
 "Network Boot (PXE)": [
  null,
  "네트워크 부팅 (PXE)"
 ],
 "Network File System": [
  null,
  "네트워크 파일 시스템 "
 ],
 "Network Interfaces": [
  null,
  "네트워크 인터페이스 "
 ],
 "Network Selection does not support PXE.": [
  null,
  "네트워크 선택은 PXE를 지원하지 않습니다. "
 ],
 "Network interface settings could not be saved": [
  null,
  "네트워크 인터페이스 설정을 저장하지 못했습니다. "
 ],
 "Networks": [
  null,
  "네트워크"
 ],
 "New Volume Name": [
  null,
  "새 볼륨 이름 "
 ],
 "No Storage Pools available": [
  null,
  "스토리지 풀을 사용할 수 없음 "
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  ""
 ],
 "No VM is running or defined on this host": [
  null,
  ""
 ],
 "No Virtual Networks": [
  null,
  "가상 네트워크가 없습니다 "
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
  "일치하는 파일을 찾을 수 없음 "
 ],
 "No network interfaces defined for this VM": [
  null,
  ""
 ],
 "No network is defined on this host": [
  null,
  ""
 ],
 "No networks available": [
  null,
  ""
 ],
 "No storage pool is defined on this host": [
  null,
  ""
 ],
 "None (Isolated Network)": [
  null,
  ""
 ],
 "OS Vendor": [
  null,
  "OS 벤더 "
 ],
 "One or more selected volumes are used by domains. Detach the disks first to allow volume deletion.": [
  null,
  ""
 ],
 "Only editable when the guest is shut off": [
  null,
  ""
 ],
 "Open": [
  null,
  "열기"
 ],
 "Operating System": [
  null,
  "운영 체제"
 ],
 "Operation is in progress": [
  null,
  ""
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
 "Pause": [
  null,
  "일시정지"
 ],
 "Persistence": [
  null,
  ""
 ],
 "Persistent": [
  null,
  ""
 ],
 "Physical Disk Device": [
  null,
  "물리적 디스크 장치"
 ],
 "Physical disk device on host": [
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
 "Product": [
  null,
  "제품"
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
 "Resume": [
  null,
  ""
 ],
 "Route to $0": [
  null,
  ""
 ],
 "Routed Network": [
  null,
  ""
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
 "Show Performance Options": [
  null,
  ""
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
 "Source Format": [
  null,
  ""
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
 "Storage": [
  null,
  "스토리지"
 ],
 "Storage Pool $0 failed to get activated": [
  null,
  ""
 ],
 "Storage Pool $0 failed to get deactivated": [
  null,
  ""
 ],
 "Storage Pool Name": [
  null,
  "스토리지 풀 이름 "
 ],
 "Storage Pool failed to be created": [
  null,
  ""
 ],
 "Storage Pools": [
  null,
  "스토리지 풀 "
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
 "Target": [
  null,
  "대상"
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
 "This volume is already used by another VM.": [
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
 "Type ID": [
  null,
  "ID 입력 "
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unique name": [
  null,
  ""
 ],
 "Unit": [
  null,
  "단위"
 ],
 "Unknown": [
  null,
  "알 수 없음"
 ],
 "Unplug": [
  null,
  ""
 ],
 "Up to $0 $1 available in the default location": [
  null,
  ""
 ],
 "Up to $0 $1 available on the host": [
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
  "VCPU 설정을 저장할 수 없습니다 "
 ],
 "VM $0 failed to Reboot": [
  null,
  ""
 ],
 "VM $0 failed to force Reboot": [
  null,
  ""
 ],
 "VM $0 failed to force shutdown": [
  null,
  ""
 ],
 "VM $0 failed to get deleted": [
  null,
  ""
 ],
 "VM $0 failed to get installed": [
  null,
  ""
 ],
 "VM $0 failed to pause": [
  null,
  ""
 ],
 "VM $0 failed to resume": [
  null,
  ""
 ],
 "VM $0 failed to send NMI": [
  null,
  ""
 ],
 "VM $0 failed to shutdown": [
  null,
  ""
 ],
 "VM $0 failed to start": [
  null,
  ""
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
 "Vendor": [
  null,
  "벤더"
 ],
 "Virtual Machines": [
  null,
  "가상머신"
 ],
 "Virtual Network": [
  null,
  "가상 네트워크"
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
 "WWPN": [
  null,
  "WWPN"
 ],
 "You need to select the most closely matching OS vendor and Operating System": [
  null,
  ""
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
 "control-label $0": [
  null,
  "control-label $0"
 ],
 "crashed": [
  null,
  "충돌됨"
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
 "host device": [
  null,
  "호스트 장치 "
 ],
 "hostdev": [
  null,
  "hostdev"
 ],
 "iSCSI Initiator IQN": [
  null,
  "iSCSI 개시자 IQN"
 ],
 "iSCSI Target": [
  null,
  "iSCSI 대상"
 ],
 "iSCSI direct Target": [
  null,
  ""
 ],
 "iSCSI target IQN": [
  null,
  "iSCSI 대상 IQN"
 ],
 "idle": [
  null,
  "유휴상태"
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
 "redirected device": [
  null,
  "리디렉트된 장치 "
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
