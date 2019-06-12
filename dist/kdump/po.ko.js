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
  ""
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
  ""
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  ""
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
  "알 수 없는 설정"
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  ""
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
  ""
 ],
 "Raw to a device": [
  null,
  ""
 ],
 "Reading...": [
  null,
  ""
 ],
 "Remote over NFS": [
  null,
  ""
 ],
 "Remote over SSH": [
  null,
  ""
 ],
 "Reserved memory": [
  null,
  ""
 ],
 "Server": [
  null,
  "서버"
 ],
 "Service has an error": [
  null,
  ""
 ],
 "Service is running": [
  null,
  "서비스 실행 중입니다"
 ],
 "Service is starting": [
  null,
  "장치가 재시동되고 있습니다"
 ],
 "Service is stopped": [
  null,
  ""
 ],
 "Service is stopping": [
  null,
  ""
 ],
 "Test Configuration": [
  null,
  "설정 중입니다"
 ],
 "Test is only available while the kdump service is running.": [
  null,
  ""
 ],
 "Test kdump settings": [
  null,
  ""
 ],
 "This will test kdump settings by crashing the kernel and thereby the system. Depending on the settings, the system may not automatically reboot and the process may take a while.": [
  null,
  ""
 ],
 "This will test the kdump configuration by crashing the kernel.": [
  null,
  ""
 ],
 "Unable to apply settings: $0": [
  null,
  ""
 ],
 "invalid: multiple targets defined": [
  null,
  ""
 ],
 "kdump status": [
  null,
  "kdump 상태"
 ],
 "locally in $0": [
  null,
  ""
 ],
 "nfs dump target isn't formated as server:path": [
  null,
  ""
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
