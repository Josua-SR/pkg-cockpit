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
 " (shared with the OS)": [
  null,
  ""
 ],
 "$0 shares": [
  null,
  ""
 ],
 "${hip}:${hport} -> $cport": [
  null,
  ""
 ],
 "Add Additional Storage": [
  null,
  ""
 ],
 "Add Storage": [
  null,
  ""
 ],
 "Additional Storage": [
  null,
  ""
 ],
 "Advanced TCA": [
  null,
  ""
 ],
 "All In One": [
  null,
  ""
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  ""
 ],
 "Always": [
  null,
  "Всегда"
 ],
 "Author": [
  null,
  "Автор"
 ],
 "Blade": [
  null,
  ""
 ],
 "Blade enclosure": [
  null,
  ""
 ],
 "Bus Expansion Chassis": [
  null,
  ""
 ],
 "CPU": [
  null,
  "ЦП"
 ],
 "CPU priority": [
  null,
  ""
 ],
 "CPU usage:": [
  null,
  ""
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Отмена"
 ],
 "Change": [
  null,
  "Изменить"
 ],
 "Change resource limits": [
  null,
  ""
 ],
 "Change resources limits": [
  null,
  ""
 ],
 "Close": [
  null,
  "Закрыть"
 ],
 "Combined memory usage": [
  null,
  ""
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  "",
  "",
  ""
 ],
 "Command": [
  null,
  "Команда"
 ],
 "Command can't be empty": [
  null,
  ""
 ],
 "Command:": [
  null,
  ""
 ],
 "Commit": [
  null,
  "Сохранить"
 ],
 "Commit Image": [
  null,
  ""
 ],
 "Compact PCI": [
  null,
  ""
 ],
 "Configure storage...": [
  null,
  ""
 ],
 "Connecting to Docker": [
  null,
  ""
 ],
 "Container": [
  null,
  "Контейнер"
 ],
 "Container Name": [
  null,
  ""
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  ""
 ],
 "Container is currently running.": [
  null,
  ""
 ],
 "Container:": [
  null,
  ""
 ],
 "Containers": [
  null,
  "Контейнеры"
 ],
 "Convertible": [
  null,
  ""
 ],
 "Could not add all disks": [
  null,
  ""
 ],
 "Could not reset the storage pool": [
  null,
  ""
 ],
 "Created": [
  null,
  "Создан"
 ],
 "Created:": [
  null,
  "Создан:"
 ],
 "Default": [
  null,
  "По умолчанию"
 ],
 "Delete": [
  null,
  "Удалить"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  ""
 ],
 "Desktop": [
  null,
  "Рабочий стол"
 ],
 "Detachable": [
  null,
  ""
 ],
 "Details": [
  null,
  "Подробности"
 ],
 "Docker is not installed or activated on the system": [
  null,
  ""
 ],
 "Docking Station": [
  null,
  ""
 ],
 "Download": [
  null,
  "Загрузить"
 ],
 "Drive": [
  null,
  ""
 ],
 "Duplicate alias": [
  null,
  ""
 ],
 "Duplicate port": [
  null,
  ""
 ],
 "Embedded PC": [
  null,
  ""
 ],
 "Entrypoint": [
  null,
  "Точка входа"
 ],
 "Environment": [
  null,
  "Окружение"
 ],
 "Erase containers and reset storage pool": [
  null,
  ""
 ],
 "Error message from Docker:": [
  null,
  ""
 ],
 "Everything": [
  null,
  ""
 ],
 "Exited $ExitCode": [
  null,
  ""
 ],
 "Expansion Chassis": [
  null,
  ""
 ],
 "Expose container ports": [
  null,
  ""
 ],
 "Failed to start Docker: $0": [
  null,
  ""
 ],
 "Failed to stop Docker scope: $0": [
  null,
  ""
 ],
 "Force Delete": [
  null,
  ""
 ],
 "Free": [
  null,
  "Свободно"
 ],
 "Gateway:": [
  null,
  "Шлюз:"
 ],
 "Get new image": [
  null,
  ""
 ],
 "Hand Held": [
  null,
  ""
 ],
 "Hard Disk": [
  null,
  "Жесткий диск"
 ],
 "IP Address:": [
  null,
  "IP-адрес:"
 ],
 "IP Prefix Length:": [
  null,
  ""
 ],
 "Id": [
  null,
  "Идентификатор"
 ],
 "Id:": [
  null,
  ""
 ],
 "Image": [
  null,
  "Изображение"
 ],
 "Image $0": [
  null,
  ""
 ],
 "Image Search": [
  null,
  ""
 ],
 "Image:": [
  null,
  ""
 ],
 "Images": [
  null,
  "Образы"
 ],
 "Images and running containers": [
  null,
  ""
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  ""
 ],
 "Invalid port": [
  null,
  ""
 ],
 "IoT Gateway": [
  null,
  ""
 ],
 "Laptop": [
  null,
  ""
 ],
 "Link to another container": [
  null,
  ""
 ],
 "Links": [
  null,
  ""
 ],
 "Links:": [
  null,
  ""
 ],
 "Local Disks": [
  null,
  ""
 ],
 "Low Profile Desktop": [
  null,
  ""
 ],
 "Lunch Box": [
  null,
  ""
 ],
 "MAC Address:": [
  null,
  ""
 ],
 "Main Server Chassis": [
  null,
  ""
 ],
 "Memory": [
  null,
  "Память"
 ],
 "Memory limit": [
  null,
  ""
 ],
 "Memory usage:": [
  null,
  ""
 ],
 "MiB": [
  null,
  "МиБ"
 ],
 "Mini PC": [
  null,
  ""
 ],
 "Mini Tower": [
  null,
  ""
 ],
 "Mount container volumes": [
  null,
  ""
 ],
 "Multi-system Chassis": [
  null,
  ""
 ],
 "Name": [
  null,
  "Имя"
 ],
 "No": [
  null,
  "Нет"
 ],
 "No additional local storage found.": [
  null,
  ""
 ],
 "No alias specified": [
  null,
  ""
 ],
 "No container specified": [
  null,
  ""
 ],
 "No containers": [
  null,
  ""
 ],
 "No containers that match the current filter": [
  null,
  ""
 ],
 "No images": [
  null,
  ""
 ],
 "No images that match the current filter": [
  null,
  ""
 ],
 "No results for $0": [
  null,
  ""
 ],
 "No running containers": [
  null,
  ""
 ],
 "No running containers that match the current filter": [
  null,
  ""
 ],
 "Not authorized to access Docker on this system": [
  null,
  ""
 ],
 "Not found": [
  null,
  ""
 ],
 "Notebook": [
  null,
  ""
 ],
 "Off": [
  null,
  "Выкл"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On": [
  null,
  "Вкл"
 ],
 "On Failure": [
  null,
  ""
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "",
  "",
  ""
 ],
 "Other": [
  null,
  "Другие"
 ],
 "Overview": [
  null,
  "Обзор"
 ],
 "Peripheral Chassis": [
  null,
  ""
 ],
 "Pizza Box": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  ""
 ],
 "Please confirm forced deletion of $0": [
  null,
  ""
 ],
 "Please try another term": [
  null,
  ""
 ],
 "Portable": [
  null,
  ""
 ],
 "Ports": [
  null,
  "Порты"
 ],
 "Ports:": [
  null,
  ""
 ],
 "Problems": [
  null,
  "Проблемы"
 ],
 "RAID Chassis": [
  null,
  ""
 ],
 "Rack Mount Chassis": [
  null,
  ""
 ],
 "ReadOnly": [
  null,
  ""
 ],
 "ReadWrite": [
  null,
  ""
 ],
 "Reboot": [
  null,
  "Перезагрузить"
 ],
 "Reformat and add disks": [
  null,
  ""
 ],
 "Repository": [
  null,
  "Репозиторий"
 ],
 "Reset": [
  null,
  "Сбросить"
 ],
 "Reset Storage Pool": [
  null,
  ""
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  ""
 ],
 "Restart": [
  null,
  "Перезапуск"
 ],
 "Restart Policy": [
  null,
  ""
 ],
 "Restart Policy:": [
  null,
  ""
 ],
 "Retries:": [
  null,
  ""
 ],
 "Run": [
  null,
  "Запустить"
 ],
 "Run Image": [
  null,
  ""
 ],
 "Sealed-case PC": [
  null,
  ""
 ],
 "Security": [
  null,
  "Безопасность"
 ],
 "Set container environment variables": [
  null,
  ""
 ],
 "Show all containers": [
  null,
  ""
 ],
 "Show all images": [
  null,
  ""
 ],
 "Size": [
  null,
  "Размер"
 ],
 "Solid-State Disk": [
  null,
  ""
 ],
 "Space-saving Computer": [
  null,
  ""
 ],
 "Start": [
  null,
  "Пуск"
 ],
 "Start Docker": [
  null,
  ""
 ],
 "State": [
  null,
  "Состояние"
 ],
 "State:": [
  null,
  "Состояние:"
 ],
 "Stick PC": [
  null,
  ""
 ],
 "Stop": [
  null,
  "Остановить"
 ],
 "Stop and delete": [
  null,
  ""
 ],
 "Stopped": [
  null,
  "Остановлен"
 ],
 "Storage": [
  null,
  "Хранилище"
 ],
 "Storage pool": [
  null,
  "Пул"
 ],
 "Sub Chassis": [
  null,
  ""
 ],
 "Sub Notebook": [
  null,
  ""
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Tablet": [
  null,
  "Планшет"
 ],
 "Tag": [
  null,
  "Метка"
 ],
 "Tags": [
  null,
  "Теги"
 ],
 "The Docker storage pool cannot be managed on this system.": [
  null,
  ""
 ],
 "The following containers depend on this image and will become unusable.": [
  null,
  ""
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  ""
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  ""
 ],
 "This image does not exist.": [
  null,
  ""
 ],
 "Total": [
  null,
  "Всего"
 ],
 "Tower": [
  null,
  ""
 ],
 "Try again": [
  null,
  ""
 ],
 "Type to filter…": [
  null,
  ""
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Непредвиденная ошибка"
 ],
 "Unknown": [
  null,
  "Неизвестно"
 ],
 "Unless Stopped": [
  null,
  ""
 ],
 "Up since $0": [
  null,
  ""
 ],
 "Used": [
  null,
  "Использовано"
 ],
 "Used by Containers": [
  null,
  ""
 ],
 "Volumes": [
  null,
  "Список томов"
 ],
 "Volumes:": [
  null,
  ""
 ],
 "With terminal": [
  null,
  ""
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  ""
 ],
 "[$0 bytes of binary data]": [
  null,
  ""
 ],
 "[binary data]": [
  null,
  ""
 ],
 "[no data]": [
  null,
  ""
 ],
 "alias": [
  null,
  ""
 ],
 "default": [
  null,
  "по умолчанию"
 ],
 "key": [
  null,
  ""
 ],
 "none": [
  null,
  "нет"
 ],
 "search by name, namespace or description": [
  null,
  ""
 ],
 "select container": [
  null,
  ""
 ],
 "shares": [
  null,
  ""
 ],
 "to host path": [
  null,
  ""
 ],
 "to host port": [
  null,
  ""
 ],
 "undefined": [
  null,
  ""
 ],
 "value": [
  null,
  "значение"
 ],
 "page-title\u0004Containers": [
  null,
  "Контейнеры"
 ],
 "page-title\u0004Images": [
  null,
  "Образы"
 ]
}));
