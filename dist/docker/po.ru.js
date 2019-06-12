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
  " (в общем доступе с ОС)"
 ],
 "$0 shares": [
  null,
  "$0 акции"
 ],
 "${hip}:${hport} -> $cport": [
  null,
  "${hip}:${hport} -> $cport"
 ],
 "Add Additional Storage": [
  null,
  "Добавить дополнительное хранилище"
 ],
 "Add Storage": [
  null,
  "Добавить хранилище"
 ],
 "Additional Storage": [
  null,
  "Дополнительное хранилище"
 ],
 "Advanced TCA": [
  null,
  "Расширенный TCA"
 ],
 "All In One": [
  null,
  "Все в одном"
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "Все данные на выбранных дисках будут удалены, а диски будут добавлены в пул хранения."
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
  "лопасть"
 ],
 "Blade enclosure": [
  null,
  "Корпус лезвия"
 ],
 "Bus Expansion Chassis": [
  null,
  "Шина расширения шины"
 ],
 "CPU": [
  null,
  "ЦП"
 ],
 "CPU priority": [
  null,
  "Приоритет процессора"
 ],
 "CPU usage:": [
  null,
  "Использование процессора:"
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  "Can & rsquo; t подключиться к Docker"
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
  "Изменение ограничений ресурсов"
 ],
 "Change resources limits": [
  null,
  "Изменение ограничений ресурсов"
 ],
 "Close": [
  null,
  "Закрыть"
 ],
 "Combined memory usage": [
  null,
  "Использование комбинированной памяти"
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  "Комбинированное использование $0 ядра процессора",
  "Комбинированное использование $0 ядер процессора",
  "Комбинированное использование $0 ядер процессора"
 ],
 "Command": [
  null,
  "Команда"
 ],
 "Command can't be empty": [
  null,
  "Команда не может быть пустой"
 ],
 "Command:": [
  null,
  "Команда:"
 ],
 "Commit": [
  null,
  "Сохранить"
 ],
 "Commit Image": [
  null,
  "Commit Image"
 ],
 "Compact PCI": [
  null,
  "Компактный PCI"
 ],
 "Configure storage...": [
  null,
  "Настроить хранилище ..."
 ],
 "Connecting to Docker": [
  null,
  "Подключение к Docker"
 ],
 "Container": [
  null,
  "Контейнер"
 ],
 "Container Name": [
  null,
  "Название контейнера"
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  "Контейнер в настоящее время отмечен как не запущенный, но регулярная остановка не удалась."
 ],
 "Container is currently running.": [
  null,
  "Контейнер в настоящее время запущен."
 ],
 "Container:": [
  null,
  "Контейнер:"
 ],
 "Containers": [
  null,
  "Контейнеры"
 ],
 "Convertible": [
  null,
  "конвертируемый"
 ],
 "Could not add all disks": [
  null,
  "Не удалось добавить все диски"
 ],
 "Could not reset the storage pool": [
  null,
  "Не удалось сбросить пул носителей"
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
  "Удаление контейнера приведет к удалению всех данных."
 ],
 "Desktop": [
  null,
  "Рабочий стол"
 ],
 "Detachable": [
  null,
  "отрывной"
 ],
 "Details": [
  null,
  "Подробности"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Докер не установлен или не активирован в системе"
 ],
 "Docking Station": [
  null,
  "Док-станция"
 ],
 "Download": [
  null,
  "Загрузить"
 ],
 "Drive": [
  null,
  "Привод"
 ],
 "Duplicate alias": [
  null,
  "Дублировать псевдоним"
 ],
 "Duplicate port": [
  null,
  "Дублированный порт"
 ],
 "Embedded PC": [
  null,
  "Встроенный ПК"
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
  "Удаление контейнеров и сброс пула хранения"
 ],
 "Error message from Docker:": [
  null,
  "Сообщение об ошибке от Docker:"
 ],
 "Everything": [
  null,
  "Все"
 ],
 "Exited $ExitCode": [
  null,
  "возбужденном $ExitCode"
 ],
 "Expansion Chassis": [
  null,
  "Шасси расширения"
 ],
 "Expose container ports": [
  null,
  "Экспортировать порты контейнера"
 ],
 "Failed to start Docker: $0": [
  null,
  "Не удалось запустить Docker: $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  "Не удалось остановить область Docker: $0"
 ],
 "Force Delete": [
  null,
  "Удалить силу"
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
  "Получить новый образ"
 ],
 "Hand Held": [
  null,
  "Ручная работа"
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
  "IP Префикс Длина:"
 ],
 "Id": [
  null,
  "Идентификатор"
 ],
 "Id:": [
  null,
  "Я бы:"
 ],
 "Image": [
  null,
  "Изображение"
 ],
 "Image $0": [
  null,
  "Образ $0"
 ],
 "Image Search": [
  null,
  "Поиск образов"
 ],
 "Image:": [
  null,
  "Образ:"
 ],
 "Images": [
  null,
  "Образы"
 ],
 "Images and running containers": [
  null,
  "Образы и работающие контейнеры"
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  "Информация о пуле хранения Docker недоступна."
 ],
 "Invalid port": [
  null,
  "Недопустимый порт"
 ],
 "IoT Gateway": [
  null,
  "IoT Gateway"
 ],
 "Laptop": [
  null,
  "портативный компьютер"
 ],
 "Link to another container": [
  null,
  "Ссылка на другой контейнер"
 ],
 "Links": [
  null,
  "связи"
 ],
 "Links:": [
  null,
  "Ссылки:"
 ],
 "Local Disks": [
  null,
  "Локальные диски"
 ],
 "Low Profile Desktop": [
  null,
  "Низкий профиль рабочего стола"
 ],
 "Lunch Box": [
  null,
  "Коробка для ланча"
 ],
 "MAC Address:": [
  null,
  "MAC-адрес:"
 ],
 "Main Server Chassis": [
  null,
  "Основной серверный корпус"
 ],
 "Memory": [
  null,
  "Память"
 ],
 "Memory limit": [
  null,
  "Предел памяти"
 ],
 "Memory usage:": [
  null,
  "Использование памяти:"
 ],
 "MiB": [
  null,
  "МиБ"
 ],
 "Mini PC": [
  null,
  "Мини-ПК"
 ],
 "Mini Tower": [
  null,
  "Мини-башня"
 ],
 "Mount container volumes": [
  null,
  "Объемы контейнеров"
 ],
 "Multi-system Chassis": [
  null,
  "Многосистемное шасси"
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
  "Никакого дополнительного локального хранилища не найдено."
 ],
 "No alias specified": [
  null,
  "Не указан псевдоним"
 ],
 "No container specified": [
  null,
  "Контейнер не указан"
 ],
 "No containers": [
  null,
  "Контейнеры отсутствуют"
 ],
 "No containers that match the current filter": [
  null,
  "Отсутствуют контейнеры, соответствующие текущему фильтру"
 ],
 "No images": [
  null,
  "Образы отсутствуют"
 ],
 "No images that match the current filter": [
  null,
  "Отсутствуют образы, соответствующие текущему фильтру"
 ],
 "No results for $0": [
  null,
  "Нет результатов для $0"
 ],
 "No running containers": [
  null,
  "Нет работающих контейнеров"
 ],
 "No running containers that match the current filter": [
  null,
  "Нет работающих контейнеров, соответствующих текущему фильтру"
 ],
 "Not authorized to access Docker on this system": [
  null,
  "Не разрешено доступ к Докеру в этой системе"
 ],
 "Not found": [
  null,
  "Не найдено"
 ],
 "Notebook": [
  null,
  "Ноутбук"
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
  "О неисправности"
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "При сбое повторите попытку $0 время",
  "При сбое повторите попытку $0 раз",
  "При сбое повторите попытку $0 раз"
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
  "Периферийное шасси"
 ],
 "Pizza Box": [
  null,
  "Коробка для пиццы"
 ],
 "Please confirm deletion of $0": [
  null,
  "Пожалуйста, подтвердите удаление $0"
 ],
 "Please confirm forced deletion of $0": [
  null,
  "Пожалуйста, подтвердите принудительное удаление $0"
 ],
 "Please try another term": [
  null,
  "Попробуйте другой термин"
 ],
 "Portable": [
  null,
  "Портативный"
 ],
 "Ports": [
  null,
  "Порты"
 ],
 "Ports:": [
  null,
  "Порты:"
 ],
 "Problems": [
  null,
  "Проблемы"
 ],
 "RAID Chassis": [
  null,
  "Шасси RAID"
 ],
 "Rack Mount Chassis": [
  null,
  "Корпус для монтажа в стойку"
 ],
 "ReadOnly": [
  null,
  "ReadOnly"
 ],
 "ReadWrite": [
  null,
  "Читай пиши"
 ],
 "Reboot": [
  null,
  "Перезагрузка"
 ],
 "Reformat and add disks": [
  null,
  "Переформатировать и добавить диски"
 ],
 "Repository": [
  null,
  "Репозиторий"
 ],
 "Reset": [
  null,
  "Сброс"
 ],
 "Reset Storage Pool": [
  null,
  "Сброс пула хранения"
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  "Сброс пула хранения приведет к удалению всех контейнеров и выпуску дисков в пуле."
 ],
 "Restart": [
  null,
  "Перезапустить"
 ],
 "Restart Policy": [
  null,
  "Политика перезагрузки"
 ],
 "Restart Policy:": [
  null,
  "Политика перезагрузки:"
 ],
 "Retries:": [
  null,
  "Повторы:"
 ],
 "Run": [
  null,
  "Запуск"
 ],
 "Run Image": [
  null,
  "Запустить изображение"
 ],
 "Sealed-case PC": [
  null,
  "Компьютер с герметичным корпусом"
 ],
 "Security": [
  null,
  "Безопасность"
 ],
 "Set container environment variables": [
  null,
  "Установка переменных среды контейнера"
 ],
 "Show all containers": [
  null,
  "Показать все контейнеры"
 ],
 "Show all images": [
  null,
  "Показать все изображения"
 ],
 "Size": [
  null,
  "Размер"
 ],
 "Solid-State Disk": [
  null,
  "Твердотельный диск"
 ],
 "Space-saving Computer": [
  null,
  "Компактный компьютер"
 ],
 "Start": [
  null,
  "Запустить"
 ],
 "Start Docker": [
  null,
  "Запустить Docker"
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
  "Stick PC"
 ],
 "Stop": [
  null,
  "Остановить"
 ],
 "Stop and delete": [
  null,
  "Остановить и удалить"
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
  "Sub Chassis"
 ],
 "Sub Notebook": [
  null,
  "Sub Notebook"
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
  "Пул хранения Docker нельзя управлять в этой системе."
 ],
 "The following containers depend on this image and will become unusable.": [
  null,
  "Следующие контейнеры зависят от этого изображения и станут непригодными для использования."
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  "Сканирование с $time ($type) не обнаружено уязвимостей."
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  "Сканирование с $time ($type) не удалось."
 ],
 "This image does not exist.": [
  null,
  "Это изображение не существует."
 ],
 "Total": [
  null,
  "Всего"
 ],
 "Tower": [
  null,
  "башня"
 ],
 "Try again": [
  null,
  "Попробуйте снова"
 ],
 "Type to filter…": [
  null,
  "Тип фильтра ..."
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
  "Если не остановлено"
 ],
 "Up since $0": [
  null,
  "С тех пор $0"
 ],
 "Used": [
  null,
  "Использовано"
 ],
 "Used by Containers": [
  null,
  "Используется контейнерами"
 ],
 "Volumes": [
  null,
  "Список томов"
 ],
 "Volumes:": [
  null,
  "Объемы:"
 ],
 "With terminal": [
  null,
  "С терминалом"
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  "У вас нет разрешения на управление пулом хранилища Docker."
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 байты двоичных данных]"
 ],
 "[binary data]": [
  null,
  "[двоичные данные]"
 ],
 "[no data]": [
  null,
  "[нет данных]"
 ],
 "alias": [
  null,
  "псевдоним"
 ],
 "default": [
  null,
  "по умолчанию"
 ],
 "key": [
  null,
  "ключ"
 ],
 "none": [
  null,
  "нет"
 ],
 "search by name, namespace or description": [
  null,
  "Поиск по имени, пространству имён или описанию"
 ],
 "select container": [
  null,
  "выбрать контейнер"
 ],
 "shares": [
  null,
  "акции"
 ],
 "to host path": [
  null,
  "путь хозяина"
 ],
 "to host port": [
  null,
  "для размещения порта"
 ],
 "undefined": [
  null,
  "не определено"
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
