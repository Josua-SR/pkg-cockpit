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
 " (shared with the OS)": [
  null,
  " (спільний із операційною системою)"
 ],
 "$0 day": [
  "$0 days",
  "$0 день",
  "$0 дні",
  "$0 днів"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 година",
  "$0 години",
  "$0 годин"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 хвилина",
  "$0 хвилини",
  "$0 хвилин"
 ],
 "$0 month": [
  "$0 months",
  "$0 місяць",
  "$0 місяці",
  "$0 місяців"
 ],
 "$0 shares": [
  null,
  "$0 спільних ресурсів"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 тиждень",
  "$0 тижні",
  "$0 тижнів"
 ],
 "$0 year": [
  "$0 years",
  "$0 рік",
  "$0 роки",
  "$0 років"
 ],
 "${hip}:${hport} -> $cport": [
  null,
  "${hip}:${hport} -> $cport"
 ],
 "Add Additional Storage": [
  null,
  "Додати додаткове сховище"
 ],
 "Add Storage": [
  null,
  "Додати сховище даних"
 ],
 "Additional Storage": [
  null,
  "Додаткове сховище"
 ],
 "Advanced TCA": [
  null,
  "Розширене TCA"
 ],
 "All In One": [
  null,
  "Усе-в-одному"
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "Всі дані на позначених дисках буде витерто, а диски буде додано до резервного сховища даних."
 ],
 "Always": [
  null,
  "Завжди"
 ],
 "Author": [
  null,
  "Автор"
 ],
 "Blade": [
  null,
  "Blade"
 ],
 "Blade enclosure": [
  null,
  "Обгортка Blade"
 ],
 "Bus Expansion Chassis": [
  null,
  "Апаратний блок розширення каналу"
 ],
 "CPU": [
  null,
  "Процесор"
 ],
 "CPU priority": [
  null,
  "Пріоритетність процесора"
 ],
 "CPU usage:": [
  null,
  "Використання процесора:"
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  "Не вдалося зв’язатися із Docker"
 ],
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Change": [
  null,
  "Змінити"
 ],
 "Change resource limits": [
  null,
  "Змінити обмеження ресурсів"
 ],
 "Change resources limits": [
  null,
  "Змінити обмеження ресурсів"
 ],
 "Close": [
  null,
  "Закрити"
 ],
 "Combined memory usage": [
  null,
  "Поєднане використання пам’яті"
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  "Комбіноване використання $0 ядра процесора",
  "Комбіноване використання $0 ядер процесора",
  "Комбіноване використання $0 ядер процесора"
 ],
 "Command": [
  null,
  "Команда"
 ],
 "Command can't be empty": [
  null,
  "Команда не може бути порожньою"
 ],
 "Command:": [
  null,
  "Команда:"
 ],
 "Commit": [
  null,
  "Надіслати"
 ],
 "Commit Image": [
  null,
  "Надіслати образ"
 ],
 "Compact PCI": [
  null,
  "Компактний PCI"
 ],
 "Configure storage...": [
  null,
  "Налаштувати сховище даних…"
 ],
 "Connecting to Docker": [
  null,
  "Встановлюємо з’єднання із Docker"
 ],
 "Container": [
  null,
  "Контейнер"
 ],
 "Container Name": [
  null,
  "Назва контейнера"
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  "Зараз контейнер позначено як такий, що працює, але звичайна спроба зупинити роботу зазнала невдачі."
 ],
 "Container is currently running.": [
  null,
  "Контейнер працює."
 ],
 "Container:": [
  null,
  "Контейнер:"
 ],
 "Containers": [
  null,
  "Контейнери"
 ],
 "Convertible": [
  null,
  "Змінюваний"
 ],
 "Could not add all disks": [
  null,
  "Не вдалося додати усі диски"
 ],
 "Could not reset the storage pool": [
  null,
  "Не вдалося скинути резервне сховище даних"
 ],
 "Created": [
  null,
  "Створено"
 ],
 "Created:": [
  null,
  "Створено:"
 ],
 "Default": [
  null,
  "Типовий"
 ],
 "Delete": [
  null,
  "Вилучити"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "Вилучення контейнера призведе до витирання усіх даних, що на ньому зберігаються."
 ],
 "Desktop": [
  null,
  "Робоча станція"
 ],
 "Detachable": [
  null,
  "Змінний"
 ],
 "Details": [
  null,
  "Подробиці"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Docker не встановлено або не активовано у цій системі"
 ],
 "Docking Station": [
  null,
  "Станція заряджання"
 ],
 "Download": [
  null,
  "Отримати"
 ],
 "Drive": [
  null,
  "Диск"
 ],
 "Duplicate alias": [
  null,
  "Дублювання псевдоніма"
 ],
 "Duplicate port": [
  null,
  "Дублювання порту"
 ],
 "Embedded PC": [
  null,
  "Вбудований ПК"
 ],
 "Entrypoint": [
  null,
  "Точка входження"
 ],
 "Environment": [
  null,
  "Середовище"
 ],
 "Erase containers and reset storage pool": [
  null,
  "Витерти контейнери і відновити початковий стан резервного сховища"
 ],
 "Error message from Docker:": [
  null,
  "Повідомлення щодо помилки від Docker:"
 ],
 "Everything": [
  null,
  "Все"
 ],
 "Exited $ExitCode": [
  null,
  "Завершено $ExitCode"
 ],
 "Expansion Chassis": [
  null,
  "Апаратний блок розширення"
 ],
 "Expose container ports": [
  null,
  "Відкрити порти контейнера"
 ],
 "Failed to start Docker: $0": [
  null,
  "Не вдалося запустити Docker: $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  "Не вдалося зупинити область Docker: $0"
 ],
 "Force Delete": [
  null,
  "Примусове вилучення"
 ],
 "Free": [
  null,
  "Вільно"
 ],
 "Gateway:": [
  null,
  "Шлюз:"
 ],
 "Get new image": [
  null,
  "Отримати новий образ"
 ],
 "Hand Held": [
  null,
  "Портативний"
 ],
 "Hard Disk": [
  null,
  "Твердий диск"
 ],
 "IP Address:": [
  null,
  "IP-адреса:"
 ],
 "IP Prefix Length:": [
  null,
  "Довжина префікса IP:"
 ],
 "Id": [
  null,
  "Ід."
 ],
 "Id:": [
  null,
  "Ід.:"
 ],
 "Image": [
  null,
  "Образ"
 ],
 "Image $0": [
  null,
  "Зображення $0"
 ],
 "Image Search": [
  null,
  "Пошук образів"
 ],
 "Image:": [
  null,
  "Зображення:"
 ],
 "Images": [
  null,
  "Зображення"
 ],
 "Images and running containers": [
  null,
  "Образи і запущені контейнери"
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  "Немає доступу до даних щодо резервного сховища даних Docker."
 ],
 "Invalid port": [
  null,
  "Некоректний порт"
 ],
 "IoT Gateway": [
  null,
  "Шлюз IoT"
 ],
 "Laptop": [
  null,
  "Переносний ПК"
 ],
 "Link to another container": [
  null,
  "Посилання на інший контейнер"
 ],
 "Links": [
  null,
  "Посилання"
 ],
 "Links:": [
  null,
  "Посилання:"
 ],
 "Local Disks": [
  null,
  "Локальні диски"
 ],
 "Low Profile Desktop": [
  null,
  "Низькопрофільна робоча станція"
 ],
 "Lunch Box": [
  null,
  "Пусковий комп'ютер"
 ],
 "MAC Address:": [
  null,
  "MAC-адреса:"
 ],
 "Main Server Chassis": [
  null,
  "Апаратний блок основного сервера"
 ],
 "Memory": [
  null,
  "Пам'ять"
 ],
 "Memory limit": [
  null,
  "Обмеження пам’яті"
 ],
 "Memory usage:": [
  null,
  "Використання пам'яті:"
 ],
 "MiB": [
  null,
  "МіБ"
 ],
 "Mini PC": [
  null,
  "Міні-ПК"
 ],
 "Mini Tower": [
  null,
  "Міні-башточка"
 ],
 "Mount container volumes": [
  null,
  "Змонтувати томи контейнера"
 ],
 "Multi-system Chassis": [
  null,
  "Багатосистемний апаратний блок"
 ],
 "Name": [
  null,
  "Назва"
 ],
 "No": [
  null,
  "Ні"
 ],
 "No additional local storage found.": [
  null,
  "Додаткових локальний сховищ даних не знайдено."
 ],
 "No alias specified": [
  null,
  "Альтернативної назви не вказано"
 ],
 "No container specified": [
  null,
  "Контейнер не вказано"
 ],
 "No containers": [
  null,
  "Немає контейнерів"
 ],
 "No containers that match the current filter": [
  null,
  "Немає контейнерів, які проходять поточні умови фільтрування"
 ],
 "No images": [
  null,
  "Немає образів"
 ],
 "No images that match the current filter": [
  null,
  "Немає образів, які проходять поточні умови фільтрування"
 ],
 "No results for $0": [
  null,
  "Не знайдено нічого, що б відповідало $0"
 ],
 "No running containers": [
  null,
  "Немає запущених контейнерів"
 ],
 "No running containers that match the current filter": [
  null,
  "Немає запущених контейнерів, які проходять поточні умови фільтрування"
 ],
 "Not authorized to access Docker on this system": [
  null,
  "Не уповноважено на доступ до Docker у цій системі"
 ],
 "Not found": [
  null,
  "Не знайдено"
 ],
 "Notebook": [
  null,
  "Ноутбук"
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
 "On Failure": [
  null,
  "Якщо помилка"
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "Якщо помилка, повторити $0 раз",
  "Якщо помилка, повторити $0 рази",
  "Якщо помилка, повторити $0 разів"
 ],
 "Other": [
  null,
  "Інше"
 ],
 "Overview": [
  null,
  "Огляд"
 ],
 "Peripheral Chassis": [
  null,
  "Периферійний апаратний блок"
 ],
 "Pizza Box": [
  null,
  "З коробку для піци"
 ],
 "Please confirm deletion of $0": [
  null,
  "Будь ласка, підтвердьте вилучення $0"
 ],
 "Please confirm forced deletion of $0": [
  null,
  "Будь ласка, підтвердьте примусове вилучення $0"
 ],
 "Please try another term": [
  null,
  "Будь ласка, спробуйте інший ключ"
 ],
 "Portable": [
  null,
  "Портативний"
 ],
 "Ports": [
  null,
  "Порти"
 ],
 "Ports:": [
  null,
  "Порти:"
 ],
 "Problems": [
  null,
  "Проблеми"
 ],
 "RAID Chassis": [
  null,
  "Апаратний блок RAID"
 ],
 "Rack Mount Chassis": [
  null,
  "Апаратний блок монтування стійок"
 ],
 "ReadOnly": [
  null,
  "Лише запис"
 ],
 "ReadWrite": [
  null,
  "Запис-читання"
 ],
 "Reboot": [
  null,
  "Перезавантажити"
 ],
 "Reformat and add disks": [
  null,
  "Повторно форматувати і додати диски"
 ],
 "Repository": [
  null,
  "Сховище"
 ],
 "Reset": [
  null,
  "Скинути"
 ],
 "Reset Storage Pool": [
  null,
  "Скинути резервне сховище"
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  "Скидання резервного сховища даних призведе до витирання усіх контейнерів та звільнення дисків зі сховища."
 ],
 "Restart": [
  null,
  "Перезапустити"
 ],
 "Restart Policy": [
  null,
  "Правила перезапуску"
 ],
 "Restart Policy:": [
  null,
  "Правила перезапуску:"
 ],
 "Retries:": [
  null,
  "Кількість спроб:"
 ],
 "Run": [
  null,
  "Запустити"
 ],
 "Run Image": [
  null,
  "Запустити образ"
 ],
 "Sealed-case PC": [
  null,
  "ПК з опломбованим корпусом"
 ],
 "Security": [
  null,
  "Безпека"
 ],
 "Set container environment variables": [
  null,
  "Встановити змінні середовища контейнера"
 ],
 "Show all containers": [
  null,
  "Показати усі контейнери"
 ],
 "Show all images": [
  null,
  "Показати усі образи"
 ],
 "Size": [
  null,
  "Розмір"
 ],
 "Solid-State Disk": [
  null,
  "Твердотільний диск"
 ],
 "Space-saving Computer": [
  null,
  "Компактний комп'ютер"
 ],
 "Start": [
  null,
  "Почати"
 ],
 "Start Docker": [
  null,
  "Запустити Docker"
 ],
 "State": [
  null,
  "Стан"
 ],
 "State:": [
  null,
  "Стан:"
 ],
 "Stick PC": [
  null,
  "Паличковий ПК"
 ],
 "Stop": [
  null,
  "Зупинити"
 ],
 "Stop and delete": [
  null,
  "Зупинити і вилучити"
 ],
 "Stopped": [
  null,
  "Зупинено"
 ],
 "Storage": [
  null,
  "Сховище даних"
 ],
 "Storage pool": [
  null,
  "Буфер сховища"
 ],
 "Sub Chassis": [
  null,
  "Підблок"
 ],
 "Sub Notebook": [
  null,
  "Підноутбук"
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
  "Мітка"
 ],
 "Tags": [
  null,
  "Мітки"
 ],
 "The Docker storage pool cannot be managed on this system.": [
  null,
  "У цій системі не можна керувати резервним сховищем даних Docker."
 ],
 "The following containers depend on this image and will become unusable.": [
  null,
  "Вказані нижче контейнери залежать від цього образу, отже стануть непридатними до використання."
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  "Скануванням від $time ($type) вразливостей не знайдено."
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  "Сканування $time ($type) виконати не вдалося."
 ],
 "This image does not exist.": [
  null,
  "Цього образу не існує."
 ],
 "Total": [
  null,
  "Загалом"
 ],
 "Tower": [
  null,
  "Башточка"
 ],
 "Try again": [
  null,
  "Повторити спробу"
 ],
 "Type to filter…": [
  null,
  "Введіть щось для фільтрування…"
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Неочікувана помилка"
 ],
 "Unknown": [
  null,
  "Невідомий"
 ],
 "Unless Stopped": [
  null,
  "Якщо не зупинено"
 ],
 "Up since $0": [
  null,
  "Працює з $0"
 ],
 "Used": [
  null,
  "Використано"
 ],
 "Used by Containers": [
  null,
  "Використано контейнерами"
 ],
 "Volumes": [
  null,
  "Томи"
 ],
 "Volumes:": [
  null,
  "Томи:"
 ],
 "With terminal": [
  null,
  "За допомогою термінала"
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  "У вас немає прав доступу до керування резервним сховищем даних Docker."
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 байтів двійкових даних]"
 ],
 "[binary data]": [
  null,
  "[двійкові дані]"
 ],
 "[no data]": [
  null,
  "[немає даних]"
 ],
 "alias": [
  null,
  "псевдонім"
 ],
 "default": [
  null,
  "типовий"
 ],
 "key": [
  null,
  "ключ"
 ],
 "none": [
  null,
  "немає"
 ],
 "search by name, namespace or description": [
  null,
  "шукати за назвою, простором назв або описом"
 ],
 "select container": [
  null,
  "вибрати контейнер"
 ],
 "shares": [
  null,
  "спільний"
 ],
 "to host path": [
  null,
  "до шляху на вузлі"
 ],
 "to host port": [
  null,
  "до порту основної системи"
 ],
 "undefined": [
  null,
  "не визначено"
 ],
 "value": [
  null,
  "значення"
 ],
 "page-title\u0004Containers": [
  null,
  "Контейнери"
 ],
 "page-title\u0004Images": [
  null,
  "Образи"
 ]
}));
