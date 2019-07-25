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
  "항상 연결 "
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
  "\"원격 뷰어 시작\"을 클릭하면 .vv 파일을 다운로드하여 $0을 시작합니다. "
 ],
 "Confirm deletion of the Virtual Network": [
  null,
  "가상 네트워크 삭제 확인 "
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
 "Delete Network $0": [
  null,
  "네트워크 $0 삭제 "
 ],
 "Delete Storage Pool $0": [
  null,
  "스토리지 풀 $0 삭제 "
 ],
 "Delete associated storage files:": [
  null,
  "연결된 스토리지 파일 삭제: "
 ],
 "Delete the Volumes inside this Pool": [
  null,
  "풀 내에 있는 볼륨을 삭제합니다 "
 ],
 "Deleting an inactive Storage Pool will only undefine the Pool. Its content will not be deleted.": [
  null,
  "비활성화된 스토리지 풀을 삭제하려면 풀 정의를 해제하면 됩니다. 컨텐츠는 삭제되지 않습니다. "
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
  "직렬 콘솔 연결이 끊어졌습니다. '다시 연결' 버튼을 클릭합니다. "
 ],
 "Disk $0 fail to get detached from VM $1": [
  null,
  "디스크 $ 0이/가 VM $ 1에서 분리되지 않음"
 ],
 "Disk failed to be attached": [
  null,
  "디스크를 연결하지 못했습니다"
 ],
 "Disk failed to be created": [
  null,
  "디스크를 만들지 못했습니다 "
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
  "$0에서 MSI를 다운로드합니다  "
 ],
 "Edit": [
  null,
  "편집"
 ],
 "Emulated Machine": [
  null,
  "에뮬레이트된 기기 "
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
  "$0에 표시된 인터페이스의 IP 주소를 가져오지 못했습니다 "
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "최대 가상 CPU 수 보다 적은 수를 활성화해야 합니다."
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
  "강제 재시작"
 ],
 "Force Shut Down": [
  null,
  "강제 종료 "
 ],
 "Format": [
  null,
  "포멧"
 ],
 "Forwarding mode": [
  null,
  "전송 모드 "
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
  "데스크탑 뷰어 그래픽 콘솔"
 ],
 "Hide Performance Options": [
  null,
  "성능 옵션 숨기기   "
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
  "호스트는 비워둘 수 없습니다  "
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
  "가상 머신을 바로 시작 "
 ],
 "In most configurations, macvtap does not work for host to guest network communication.": [
  null,
  "대부분의 설정에서 macvtap는 호스트와 게스트 간 네트워크 통신에서 작동하지 않습니다."
 ],
 "Initiator": [
  null,
  "개시자 "
 ],
 "Initiator IQN should not be empty": [
  null,
  "개시자 IQN은 비워둘 수 없습니다 "
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
  "원격 뷰어 시작 "
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
  "최대 할당 "
 ],
 "Maximum Transmission Unit": [
  null,
  "MTU (Maximum Transmission Unit)"
 ],
 "Maximum memory could not be saved": [
  null,
  "최대 메모리는 저장할 수 없습니다 "
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "게스트 OS에 할당된 가상 CPU의 최대 개수는 1에서 $0 사이여야 합니다 "
 ],
 "Memory": [
  null,
  "메모리"
 ],
 "Memory could not be saved": [
  null,
  "메모리를 저장할 수 없습니다 "
 ],
 "Memory must not be 0": [
  null,
  "메모리는 0이 아니어야 합니다 "
 ],
 "Memory size between 128 MiB and the maximum allocation": [
  null,
  "128 MiB와 최대 할당 사이의 메모리 크기 "
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
  "자세한 정보 "
 ],
 "NAT to $0": [
  null,
  " $0에 NAT"
 ],
 "NIC $0 of VM $1 failed to change state": [
  null,
  "VM $1의 NIC $0은 상태 변경에 실패했습니다 "
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
  "네트워크 $0의 활성화에 실패했습니다 "
 ],
 "Network $0 failed to get deactivated": [
  null,
  "네트워크 $0의 비활성화에 실패했습니다 "
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
  "이 스토리지 풀에 대해 정의된 스토리지 볼륨이 없습니다 "
 ],
 "No VM is running or defined on this host": [
  null,
  "이 호스트에서 실행 중이거나 정의된 가상 머신이 없습니다 "
 ],
 "No Virtual Networks": [
  null,
  "가상 네트워크가 없습니다 "
 ],
 "No boot device found": [
  null,
  "부팅 장치를 찾을 수 없습니다 "
 ],
 "No console defined for this virtual machine.": [
  null,
  "이 가상 머신에 지정된 콘솔이 없습니다. "
 ],
 "No disks defined for this VM": [
  null,
  "이 가상 머신에 지정된 디스크가 없습니다 "
 ],
 "No matching files found": [
  null,
  "일치하는 파일을 찾을 수 없음 "
 ],
 "No network interfaces defined for this VM": [
  null,
  "이 가상 머신에 네트워크 인터페이스가 정의되어 있지 않습니다 "
 ],
 "No network is defined on this host": [
  null,
  "이 호스트에 정의된 네트워크가 없습니다 "
 ],
 "No networks available": [
  null,
  "사용 가능한 네트워크가 없습니다 "
 ],
 "No storage pool is defined on this host": [
  null,
  "이 호스트에 지정된 스토리지 풀이 없습니다 "
 ],
 "None (Isolated Network)": [
  null,
  "없음 (격리된 네트워크)"
 ],
 "OS Vendor": [
  null,
  "OS 벤더 "
 ],
 "One or more selected volumes are used by domains. Detach the disks first to allow volume deletion.": [
  null,
  "하나 이상의 선택된 볼륨이 도메인에서 사용되고 있습니다. 먼저 디스크를 분리하여 볼륨을 삭제하십시오."
 ],
 "Only editable when the guest is shut off": [
  null,
  "게스트가 종료된 경우에만 편집할 수 있습니다 "
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
  "실행 중인 작업"
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
  "호스트 파일시스템의 경로 "
 ],
 "Path to ISO file on host's file system": [
  null,
  "호스트의 파일 시스템에서 ISO 파일로의 경로 "
 ],
 "Path to file": [
  null,
  "파일의 경로 "
 ],
 "Pause": [
  null,
  "일시정지"
 ],
 "Persistence": [
  null,
  "영구적 "
 ],
 "Persistent": [
  null,
  "영구적 "
 ],
 "Physical Disk Device": [
  null,
  "물리적 디스크 장치"
 ],
 "Physical disk device on host": [
  null,
  "호스트에서 물리적 디스크 장치 "
 ],
 "Please enter new volume name": [
  null,
  "새 볼륨 이름을 입력해 주십시오"
 ],
 "Please enter new volume size": [
  null,
  "새 볼륨 크기를 입력해 주십시오 "
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "가상 머신을 시작하여 콘솔에 액세스하십시오 "
 ],
 "Plug": [
  null,
  "플러그 "
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
  "게스트에게 공개하기 위한 권장 소캣 수입니다. "
 ],
 "Prefix": [
  null,
  "접두어 "
 ],
 "Private": [
  null,
  "비공개 "
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
  "다시 시작"
 ],
 "Route to $0": [
  null,
  "$0로 라우팅 "
 ],
 "Routed Network": [
  null,
  "라우팅된 네트워크"
 ],
 "Run": [
  null,
  "실행"
 ],
 "Run when host boots": [
  null,
  "호스트 부팅 시 실행 "
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
  "마스크 불가능 인터럽트 보내기 "
 ],
 "Send key": [
  null,
  "키 전송 "
 ],
 "Serial Console": [
  null,
  "직렬 콘솔 "
 ],
 "Session": [
  null,
  "세션"
 ],
 "Show Performance Options": [
  null,
  "성능 옵션 보기 "
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
  "소스 형식 "
 ],
 "Source Path": [
  null,
  "소스 경로 "
 ],
 "Source path should not be empty": [
  null,
  "소스 경로를 비워둘 수 없습니다 "
 ],
 "Source should start with http, ftp or nfs protocol": [
  null,
  "소스는 http, ftp, nfs 프로토콜로 시작해야 합니다  "
 ],
 "Start libvirt": [
  null,
  "libvirt 시작 "
 ],
 "Start pool when host boots": [
  null,
  "호스트 부팅 시 풀 시작 "
 ],
 "Startup": [
  null,
  "시작 "
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
  "스토리지 풀 $0의 활성화에 실패했습니다 "
 ],
 "Storage Pool $0 failed to get deactivated": [
  null,
  "스토리지 풀 $0의 비활성화에 실패했습니다 "
 ],
 "Storage Pool Name": [
  null,
  "스토리지 풀 이름 "
 ],
 "Storage Pool failed to be created": [
  null,
  "스토리지 풀 생성에 실패했습니다 "
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
  "스토리지 볼륨은 삭제할 수 없습니다 "
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
  "대상 경로를 비워둘 수 없습니다 "
 ],
 "The Storage Pool could not be deleted": [
  null,
  "스토리지 풀을 삭제할 수 없습니다 "
 ],
 "The VM crashed.": [
  null,
  "가상 머신이 크래시되었습니다. "
 ],
 "The VM is down.": [
  null,
  "가상 머신이 다운되었습니다. "
 ],
 "The VM is going down.": [
  null,
  "가상 머신이 다운됩니다. "
 ],
 "The VM is idle.": [
  null,
  "가상 머신이 유휴 상태입니다. "
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  "가상 머신이 종료되고 있습니다 (종료 또는 크래시가 완료되지 않았습니다). "
 ],
 "The VM is paused.": [
  null,
  "가상 머신이 일시 중지합니다. "
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  "가상 머신이 실행되고 있으므로 삭제 전 강제로 종료됩니다. "
 ],
 "The VM is running.": [
  null,
  "가상 머신이 실행되고 있습니다. "
 ],
 "The VM is suspended by guest power management.": [
  null,
  "가상 머신은 게스트 전원 관리에 의해 일시 중지됩니다. "
 ],
 "The directory on the server being exported": [
  null,
  "서버의 디렉토리를 내보내는 중 "
 ],
 "The network could not be deleted": [
  null,
  "네트워크는 삭제할 수 없습니다 "
 ],
 "The pool is empty": [
  null,
  "풀이 비어 있습니다 "
 ],
 "This volume is already used by another VM.": [
  null,
  "이 볼륨은 이미 다른 가상 머신에서 사용하고 있습니다. "
 ],
 "Threads per core": [
  null,
  "코어 당 스레드 "
 ],
 "Too many files found": [
  null,
  "너무 많은 파일이 검색되었습니다. "
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
  "고유한 이름 "
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
  "언플러그 "
 ],
 "Up to $0 $1 available in the default location": [
  null,
  "기본 위치에서 $0 $1까지 사용 가능 "
 ],
 "Up to $0 $1 available on the host": [
  null,
  "호스트에서 $0 $1 까지 사용 가능 "
 ],
 "Usage": [
  null,
  "사용법"
 ],
 "Use Existing": [
  null,
  "기존 사용 "
 ],
 "Used": [
  null,
  "사용 중"
 ],
 "Used by": [
  null,
  "사용됨 "
 ],
 "VCPU settings could not be saved": [
  null,
  "VCPU 설정을 저장할 수 없습니다 "
 ],
 "VM $0 failed to Reboot": [
  null,
  "VM $0 재부팅에 실패했습니다 "
 ],
 "VM $0 failed to force Reboot": [
  null,
  "VM $0 강제 재부팅에 실패했습니다 "
 ],
 "VM $0 failed to force shutdown": [
  null,
  "VM $0 강제 종료에 실패했습니다 "
 ],
 "VM $0 failed to get deleted": [
  null,
  "VM $0 삭제에 실패했습니다 "
 ],
 "VM $0 failed to get installed": [
  null,
  "VM $0 설치에 실패했습니다 "
 ],
 "VM $0 failed to pause": [
  null,
  "VM $0 일시 정지에 실패했습니다 "
 ],
 "VM $0 failed to resume": [
  null,
  "VM $0 재개에 실패했습니다 "
 ],
 "VM $0 failed to send NMI": [
  null,
  "VM $0의 NMI 전송에 실패했습니다 "
 ],
 "VM $0 failed to shutdown": [
  null,
  "VM $0 종료에 실패했습니다 "
 ],
 "VM $0 failed to start": [
  null,
  "VM $0 시작에 실패했습니다 "
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
  "가장 적합한 OS 벤더 및 운영 체제를 선택해야 합니다. "
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
  "직접 "
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
  "종료 중 "
 ],
 "enabled": [
  null,
  "활성화됨 "
 ],
 "ethernet": [
  null,
  "이더넷"
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
  "iSCSI 직접 대상 "
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
 "virt-install package needs to be installed on the system in order to create new VMs": [
  null,
  "새로운 가상 머신을 생성하려면 시스템에 virt-install 패키지를 설치해야 합니다 "
 ],
 "yes": [
  null,
  "예 "
 ]
}));
