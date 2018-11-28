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
  "x-generator": "Zanata 4.6.2"
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
  "Стиснути дампи аварійних завершень для заощадження місця"
 ],
 "Compression": [
  null,
  "Стискання"
 ],
 "Crash dump location": [
  null,
  "Розташування дампу аварійного завершення"
 ],
 "Crash system": [
  null,
  "Аварійно завершити роботу системи"
 ],
 "Directory": [
  null,
  "Каталог"
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  "Каталог $0 є непридатним до запису або не існує."
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  "Не встановлено службу Kdump. Будь ласка, переконайтеся, що у системі встановлено пакунок kexec-tools."
 ],
 "Kernel Dump": [
  null,
  "Дамп ядра"
 ],
 "Loading...": [
  null,
  "Завантаження…"
 ],
 "Local Filesystem": [
  null,
  "Локальна файлова система"
 ],
 "Location": [
  null,
  "Розташування"
 ],
 "More details": [
  null,
  "Докладніше"
 ],
 "Mount": [
  null,
  "Змонтувати"
 ],
 "No configuration found": [
  null,
  "Не знайдено налаштувань"
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  "Немає зарезервованої пам’яті. Додайте параметр crashkernel до командного рядка ядра (наприклад у /etc/default/grub), щоб зарезервувати пам’ять під час завантаження. Приклад: crashkernel=512M"
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
  "На змонтованому пристрої"
 ],
 "Raw to a device": [
  null,
  "Без обробки на пристрій"
 ],
 "Reading...": [
  null,
  "Читання…"
 ],
 "Remote over NFS": [
  null,
  "Віддалене на основі NFS"
 ],
 "Remote over SSH": [
  null,
  "Віддалене на основі SSH"
 ],
 "Reserved memory": [
  null,
  "Зарезервована пам’ять"
 ],
 "Server": [
  null,
  "Сервер"
 ],
 "Service has an error": [
  null,
  "Помилка у службі"
 ],
 "Service is running": [
  null,
  "Службу запущено"
 ],
 "Service is starting": [
  null,
  "Служба запускається"
 ],
 "Service is stopped": [
  null,
  "Службу зупинено"
 ],
 "Service is stopping": [
  null,
  "Служба зупиняється"
 ],
 "Test Configuration": [
  null,
  "Налаштування перевірки"
 ],
 "Test is only available while the kdump service is running.": [
  null,
  "Перевірка є доступною, лише якщо запущено службу kdump."
 ],
 "Test kdump settings": [
  null,
  "Перевірити параметри kdump"
 ],
 "This will test kdump settings by crashing the kernel and thereby the system. Depending on the settings, the system may not automatically reboot and the process may take a while.": [
  null,
  "Виконати тестування параметрів kdump, аварійно завершивши роботу ядра, а отже і системи. Залежно від параметрів, система може автоматично перезавантажитися, що потребуватиме певного часу."
 ],
 "This will test the kdump configuration by crashing the kernel.": [
  null,
  "Перевіряє налаштування kdump, аварійно завершуючи роботу ядра."
 ],
 "Unable to apply settings: $0": [
  null,
  "Не вдалося застосувати параметри: $0"
 ],
 "invalid: multiple targets defined": [
  null,
  "помилка: визначено декілька цілей"
 ],
 "kdump status": [
  null,
  "стан kdump"
 ],
 "locally in $0": [
  null,
  "локально у $0"
 ],
 "nfs dump target isn't formated as server:path": [
  null,
  ""
 ],
 "ssh key": [
  null,
  "ключ ssh"
 ],
 "ssh key isn't a path": [
  null,
  ""
 ],
 "ssh server is empty": [
  null,
  ""
 ],
 "undefined": [
  null,
  "не визначено"
 ]
}));
