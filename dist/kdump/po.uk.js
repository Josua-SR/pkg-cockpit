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
nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
return plural;
},
  "language": "uk",
  "x-generator": "Zanata 3.9.6"
 },
 "Apply": [
  null,
  "Застосувати"
 ],
 "Cancel": [
  null,
  "Скасувати"
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
  "Каталог"
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
  "Помилки у налаштуваннях"
 ],
 "Loading...": [
  null,
  "Завантаження…"
 ],
 "Local Filesystem": [
  null,
  "Немає файлової системи"
 ],
 "Location": [
  null,
  "Місце монтування"
 ],
 "More details": [
  null,
  "параметри рішення"
 ],
 "Mount": [
  null,
  "Змонтувати"
 ],
 "No configuration found": [
  null,
  "Помилки у налаштуваннях"
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  ""
 ],
 "None": [
  null,
  "Немає"
 ],
 "Off": [
  null,
  "Вимкнено"
 ],
 "Ok": [
  null,
  "Гаразд"
 ],
 "On": [
  null,
  "Увімкнено"
 ],
 "On a mounted device": [
  null,
  ""
 ],
 "Raw to a device": [
  null,
  "Блоковий пристрій Rados"
 ],
 "Reading...": [
  null,
  "Читання"
 ],
 "Remote over NFS": [
  null,
  "Вилучити роль"
 ],
 "Remote over SSH": [
  null,
  "Вилучити роль"
 ],
 "Reserved memory": [
  null,
  ""
 ],
 "Server": [
  null,
  "Сервер"
 ],
 "Service has an error": [
  null,
  "Назва служби"
 ],
 "Service is running": [
  null,
  "Віртуальна машина працює."
 ],
 "Service is starting": [
  null,
  "Комп’ютер перезавантажується"
 ],
 "Service is stopped": [
  null,
  "Служби"
 ],
 "Service is stopping": [
  null,
  "Журнали служб"
 ],
 "Test Configuration": [
  null,
  "Налаштування"
 ],
 "Test is only available while the kdump service is running.": [
  null,
  ""
 ],
 "Test kdump settings": [
  null,
  "Параметри команди"
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
  "Не вдалося отримати нагадування: $0"
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
  "не визначено"
 ]
}));
