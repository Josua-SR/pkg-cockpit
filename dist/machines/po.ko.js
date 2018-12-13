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
 "Apply": [
  null,
  "적용"
 ],
 "Attach permanently": [
  null,
  ""
 ],
 "Automatically start libvirt on boot": [
  null,
  "부트시 자동으로 libvirt 시작"
 ],
 "Autostart:": [
  null,
  "자동 시작 :"
 ],
 "Available": [
  null,
  "사용 가능"
 ],
 "Boot Order:": [
  null,
  "부팅 순서 :"
 ],
 "Bus": [
  null,
  ""
 ],
 "CPU Type:": [
  null,
  "CPU 유형 :"
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
  ""
 ],
 "Connecting to Virtualization Service": [
  null,
  ""
 ],
 "Connection": [
  null,
  "연결"
 ],
 "Console Type": [
  null,
  ""
 ],
 "Consoles": [
  null,
  ""
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
  ""
 ],
 "Create VM": [
  null,
  ""
 ],
 "Creation of vm $0 failed": [
  null,
  ""
 ],
 "Ctrl+Alt+Del": [
  null,
  ""
 ],
 "Delete": [
  null,
  "삭제"
 ],
 "Delete associated storage files:": [
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
 "Emulated Machine:": [
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
 "Filesystem": [
  null,
  "파일 시스템"
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
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  ""
 ],
 "Memory": [
  null,
  "메모리"
 ],
 "Memory should be positive number": [
  null,
  ""
 ],
 "Memory:": [
  null,
  "메모리:"
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
 "Name should not consist of empty characters only": [
  null,
  ""
 ],
 "Network File System": [
  null,
  ""
 ],
 "Network Type": [
  null,
  ""
 ],
 "Network settings could not be saved": [
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
 "No storage pool is defined on this host": [
  null,
  ""
 ],
 "No virtual networks": [
  null,
  ""
 ],
 "OS Vendor": [
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
  ""
 ],
 "Port": [
  null,
  "포트"
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  ""
 ],
 "Protocol": [
  null,
  "프로토콜"
 ],
 "QEMU/KVM System connection": [
  null,
  ""
 ],
 "QEMU/KVM User connection": [
  null,
  ""
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
  ""
 ],
 "Restart": [
  null,
  "재시작"
 ],
 "Run": [
  null,
  "실행"
 ],
 "SPICE": [
  null,
  "SPICE"
 ],
 "SPICE Address:": [
  null,
  ""
 ],
 "SPICE Port:": [
  null,
  ""
 ],
 "SPICE TLS Port:": [
  null,
  ""
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
  ""
 ],
 "Source path should not be empty": [
  null,
  ""
 ],
 "Source should start with https, ftp or nfs protocol": [
  null,
  ""
 ],
 "Start libvirt": [
  null,
  ""
 ],
 "Start pool when host boots": [
  null,
  ""
 ],
 "Start the VM to see disk statistics.": [
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
  ""
 ],
 "Storage Pool failed to be created": [
  null,
  ""
 ],
 "Storage Pools": [
  null,
  ""
 ],
 "Storage Size": [
  null,
  ""
 ],
 "Storage Size should not be negative number": [
  null,
  ""
 ],
 "Storage Volumes": [
  null,
  ""
 ],
 "Target": [
  null,
  "대상"
 ],
 "Target Path": [
  null,
  ""
 ],
 "Target path should not be empty": [
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
 "Upgrade to a more recent version of libvirt to view disk statistics": [
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
 "VNC": [
  null,
  "VNC"
 ],
 "VNC Address:": [
  null,
  ""
 ],
 "VNC Port:": [
  null,
  ""
 ],
 "VNC TLS Port:": [
  null,
  ""
 ],
 "Virtual Machines": [
  null,
  "가상머신"
 ],
 "Virtualization Service (libvirt) is Not Active": [
  null,
  ""
 ],
 "Virtualization Service is Available": [
  null,
  ""
 ],
 "Volume": [
  null,
  "볼륨"
 ],
 "active": [
  null,
  "active"
 ],
 "inactive": [
  null,
  ""
 ],
 "no": [
  null,
  "아니요"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
 ],
 "show less": [
  null,
  ""
 ],
 "show more": [
  null,
  ""
 ],
 "undefined": [
  null,
  ""
 ],
 "vCPU Count": [
  null,
  "vCPU 개수"
 ],
 "vCPU Maximum": [
  null,
  ""
 ],
 "vCPUs:": [
  null,
  "vCPU:"
 ],
 "yes": [
  null,
  "예 "
 ]
}));
