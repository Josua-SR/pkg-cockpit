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
 "Autostart:": [
  null,
  "Автозапуск:"
 ],
 "Available": [
  null,
  "Доступні"
 ],
 "Connection": [
  null,
  "З'єднатися"
 ],
 "FORCEOFF_VM action failed": [
  null,
  ""
 ],
 "FORCEREBOOT_VM action failed": [
  null,
  ""
 ],
 "Force Restart": [
  null,
  "Примусовий перезапуск"
 ],
 "Force Shut Down": [
  null,
  "Примусово вимкнути"
 ],
 "ID:": [
  null,
  "Ід.:"
 ],
 "Memory:": [
  null,
  "Пам’ять:"
 ],
 "Name": [
  null,
  "Назва"
 ],
 "No VM is running or defined on this host": [
  null,
  "У цій основній системі не запущено або не визначено віртуальних машин"
 ],
 "OS Type:": [
  null,
  "Тип ОС:"
 ],
 "Overview": [
  null,
  "Огляд"
 ],
 "REBOOT_VM action failed": [
  null,
  ""
 ],
 "Restart": [
  null,
  "Перезапустити"
 ],
 "Run": [
  null,
  "Запустити"
 ],
 "SHUTDOWN_VM action failed": [
  null,
  "Помилка рішення"
 ],
 "START_VM action failed": [
  null,
  "Помилка рішення"
 ],
 "Session": [
  null,
  "Версія"
 ],
 "Shut Down": [
  null,
  "Вимкнути"
 ],
 "State": [
  null,
  "Стан"
 ],
 "State:": [
  null,
  "Стан:"
 ],
 "System": [
  null,
  "Система"
 ],
 "The VM crashed.": [
  null,
  "Віртуальна машина аварійно завершила роботу."
 ],
 "The VM is down.": [
  null,
  "Віртуальну машину вимкнено."
 ],
 "The VM is going down.": [
  null,
  "Віртуальна машина вимикається."
 ],
 "The VM is idle.": [
  null,
  "Віртуальна машина бездіяльна."
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  "Віртуальна машина завершує роботу (вимикання або аварійне завершення у процесі)."
 ],
 "The VM is paused.": [
  null,
  "Роботу віртуальної машини призупинено."
 ],
 "The VM is running.": [
  null,
  "Віртуальна машина працює."
 ],
 "The VM is suspended by guest power management.": [
  null,
  "Роботу віртуальної машини призупинено засобами керування живленням гостьової системи."
 ],
 "Usage": [
  null,
  "Використання"
 ],
 "Used": [
  null,
  "Використано"
 ],
 "Virtual Machines": [
  null,
  "Віртуальні машини"
 ],
 "crashed": [
  null,
  "Віртуальна машина аварійно завершила роботу."
 ],
 "disabled": [
  null,
  "Вимкнено"
 ],
 "dying": [
  null,
  ""
 ],
 "enabled": [
  null,
  "Увімкнено"
 ],
 "idle": [
  null,
  ""
 ],
 "paused": [
  null,
  ""
 ],
 "running": [
  null,
  "Працює"
 ],
 "shut off": [
  null,
  ""
 ],
 "shutdown": [
  null,
  ""
 ],
 "suspended (PM)": [
  null,
  ""
 ],
 "vCPUs:": [
  null,
  "vCPU:"
 ]
}));
