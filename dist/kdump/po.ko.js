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
  ""
 ],
 "Crash dump location": [
  null,
  ""
 ],
 "Crash system": [
  null,
  ""
 ],
 "Directory": [
  null,
  ""
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  ""
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  ""
 ],
 "Kernel dump configuration": [
  null,
  "알 수 없는 설정"
 ],
 "Loading...": [
  null,
  ""
 ],
 "Local Filesystem": [
  null,
  "파티션 크기 조저"
 ],
 "Location": [
  null,
  "마운트 옵션"
 ],
 "More details": [
  null,
  ""
 ],
 "Mount": [
  null,
  ""
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
  ""
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
  ""
 ],
 "Service has an error": [
  null,
  ""
 ],
 "Service is running": [
  null,
  ""
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
 "Use the setting in /etc/kdump.conf": [
  null,
  ""
 ],
 "invalid: multiple targets defined": [
  null,
  ""
 ],
 "kdump status": [
  null,
  ""
 ],
 "locally in $0": [
  null,
  ""
 ],
 "ssh key": [
  null,
  ""
 ],
 "undefined": [
  null,
  ""
 ]
}));
