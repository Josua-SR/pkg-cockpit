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
 "Apply": [
  null,
  "적용"
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Compress crash dumps to save space": [
  null,
  "크래시 덤프를 압축하여 공간 절약하기 "
 ],
 "Compression": [
  null,
  "압축"
 ],
 "Crash dump location": [
  null,
  "크래시 덤프 위치 "
 ],
 "Crash system": [
  null,
  "크래시 시스템 "
 ],
 "Directory": [
  null,
  "디렉터리"
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  "디렉토리 $0에 쓰기 불가능하거나 존재하지 않습니다. "
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  "Kdump 서비스가 설치되어 있지 않습니다. kexec-tools 패키지가 설치되어 있는지 확인하십시오. "
 ],
 "Kernel Dump": [
  null,
  "커널 덤프 "
 ],
 "Loading...": [
  null,
  "로딩..."
 ],
 "Local Filesystem": [
  null,
  "로컬 파일 시스템 "
 ],
 "Location": [
  null,
  "위치"
 ],
 "More details": [
  null,
  "더 자세히"
 ],
 "Mount": [
  null,
  "마운트 "
 ],
 "No configuration found": [
  null,
  "설정을 찾을 수 없습니다 "
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  "메모리가 예약되어 있지 않습니다. crashkernel 옵션을 커맨드라인에 추가하고 (예: /etc/default/grub) 시작시 메모리를 예약합니다. 예: crashkernel=512M"
 ],
 "None": [
  null,
  "없음"
 ],
 "Ok": [
  null,
  "확인"
 ],
 "On a mounted device": [
  null,
  "마운트된 장치 "
 ],
 "Raw to a device": [
  null,
  "로우(raw) 장치"
 ],
 "Reading...": [
  null,
  "읽는 중..."
 ],
 "Remote over NFS": [
  null,
  "NFS를 통한 원격 연결 "
 ],
 "Remote over SSH": [
  null,
  "SSH를 통한 원격 연결 "
 ],
 "Reserved memory": [
  null,
  "예약된 메모리 "
 ],
 "Server": [
  null,
  "서버"
 ],
 "Service has an error": [
  null,
  "서비스에 오류가 발생했습니다 "
 ],
 "Service is running": [
  null,
  "서비스 실행 중입니다"
 ],
 "Service is starting": [
  null,
  "서비스가 재시동되고 있습니다"
 ],
 "Service is stopped": [
  null,
  "서비스가 중지되었습니다 "
 ],
 "Service is stopping": [
  null,
  "서비스가 중지되고 있습니다 "
 ],
 "Test Configuration": [
  null,
  "설정 테스트 "
 ],
 "Test is only available while the kdump service is running.": [
  null,
  "테스트에서는 kdump 서비스가 실행 중인 동안에만 사용할 수 있습니다. "
 ],
 "Test kdump settings": [
  null,
  "kdump 설정 테스트 "
 ],
 "This will test kdump settings by crashing the kernel and thereby the system. Depending on the settings, the system may not automatically reboot and the process may take a while.": [
  null,
  "kdump 설정은 커널을 크래시햐여 테스트합니다. 설정에 따라 재부팅이 자동으로 수행되지 않고 처리 시간이 길어질 수 있습니다. "
 ],
 "This will test the kdump configuration by crashing the kernel.": [
  null,
  "kdump 설정은 커널을 크래시햐여 테스트합니다. "
 ],
 "Unable to apply settings: $0": [
  null,
  "설정을 적용할 수 없음: $0"
 ],
 "invalid: multiple targets defined": [
  null,
  "유효하지 않음: 여러 대상이 정의되어 있습니다 "
 ],
 "kdump status": [
  null,
  "kdump 상태"
 ],
 "locally in $0": [
  null,
  " $0 (로컬)"
 ],
 "nfs dump target isn't formated as server:path": [
  null,
  "nfs 덤프 대상이 server:path 형식으로 되어 있지 않습니다 "
 ],
 "ssh key": [
  null,
  "ssh 키"
 ],
 "ssh key isn't a path": [
  null,
  "ssh 키는 경로가 없습니다 "
 ],
 "ssh server is empty": [
  null,
  "ssh 서버가 비어 있습니다 "
 ],
 "undefined": [
  null,
  "정의되지 않음 "
 ]
}));
