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
  "language": "ru",
  "x-generator": "Zanata 4.6.2"
 },
 "Apply": [
  null,
  "Применить"
 ],
 "Cancel": [
  null,
  "Отмена"
 ],
 "Compress crash dumps to save space": [
  null,
  "Сжатие аварийных дампов для экономии места"
 ],
 "Compression": [
  null,
  "Сжатие"
 ],
 "Crash dump location": [
  null,
  "Расположение аварийного дампа"
 ],
 "Crash system": [
  null,
  "Аварийная система"
 ],
 "Directory": [
  null,
  "Каталог"
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  "каталог $0 не доступен для записи или не существует."
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  "Служба Kdump не установлена. Убедитесь, что установлен пакет kexec-tools."
 ],
 "Kernel Dump": [
  null,
  "Дамп ядра"
 ],
 "Loading...": [
  null,
  "Загрузка..."
 ],
 "Local Filesystem": [
  null,
  "Локальная файловая система"
 ],
 "Location": [
  null,
  "Адрес"
 ],
 "More details": [
  null,
  "Подробности"
 ],
 "Mount": [
  null,
  "гора"
 ],
 "No configuration found": [
  null,
  "Конфигурация не найдена"
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  "Память не сохраняется. Добавьте резервную копию в командную строку ядра (например, в файле / etc / default / grub), чтобы зарезервировать память во время загрузки. Пример: crashkernel = 512M"
 ],
 "None": [
  null,
  "Нет"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On a mounted device": [
  null,
  "На установленном устройстве"
 ],
 "Raw to a device": [
  null,
  "Необработанные устройства"
 ],
 "Reading...": [
  null,
  "Чтение..."
 ],
 "Remote over NFS": [
  null,
  "Удаленный доступ к NFS"
 ],
 "Remote over SSH": [
  null,
  "Удаленный доступ к SSH"
 ],
 "Reserved memory": [
  null,
  "Зарезервированная память"
 ],
 "Server": [
  null,
  "Сервер"
 ],
 "Service has an error": [
  null,
  "У службы есть ошибка"
 ],
 "Service is running": [
  null,
  "Служба работает"
 ],
 "Service is starting": [
  null,
  "Служба запускается"
 ],
 "Service is stopped": [
  null,
  "Служба остановлена"
 ],
 "Service is stopping": [
  null,
  "Служба останавливается"
 ],
 "Test Configuration": [
  null,
  "Проверить конфигурацию"
 ],
 "Test is only available while the kdump service is running.": [
  null,
  "Проверка доступна только при запущенной службе kdump."
 ],
 "Test kdump settings": [
  null,
  "Проверить настройки kdump"
 ],
 "This will test kdump settings by crashing the kernel and thereby the system. Depending on the settings, the system may not automatically reboot and the process may take a while.": [
  null,
  "Это проверит настройки kdump, разбив ядро ​​и тем самым систему. В зависимости от настроек система может не перезагружаться автоматически, и процесс может занять некоторое время."
 ],
 "This will test the kdump configuration by crashing the kernel.": [
  null,
  "Конфигурация kdump будет проверена путём осуществления умышленного сбоя в ядре."
 ],
 "Unable to apply settings: $0": [
  null,
  "Невозможно применить настройки: $0"
 ],
 "invalid: multiple targets defined": [
  null,
  "недействителен: несколько заданных целей"
 ],
 "kdump status": [
  null,
  "Статус kdump"
 ],
 "locally in $0": [
  null,
  "локально в $0"
 ],
 "nfs dump target isn't formated as server:path": [
  null,
  "Назначение дампа nfs не отформатировано как сервер: путь"
 ],
 "ssh key": [
  null,
  "клавиша ssh"
 ],
 "ssh key isn't a path": [
  null,
  "ключ ssh не путь"
 ],
 "ssh server is empty": [
  null,
  "сервер ssh пуст"
 ],
 "undefined": [
  null,
  "не определено"
 ]
}));
