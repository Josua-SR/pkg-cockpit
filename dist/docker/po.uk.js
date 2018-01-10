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
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "Всі дані на позначених дисках буде витерто, а диски буде додано до резервного сховища даних."
 ],
 "Always": [
  null,
  "Завжди"
 ],
 "Are you sure you want to delete this image?": [
  null,
  "Ви справді хочете вилучити цей образ?"
 ],
 "Author": [
  null,
  "Автор"
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
 "Combined CPU usage": [
  null,
  "Поєднане використання процесора"
 ],
 "Combined memory usage": [
  null,
  "Поєднане використання пам’яті"
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
 "Delete $0": [
  null,
  "Вилучити $0"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "Вилучення контейнера призведе до витирання усіх даних, що на ньому зберігаються."
 ],
 "Deleting an image will delete it, but you can probably download it again if you need it later.  Unless this image has never been pushed to a repository, that is, in which case you probably can't download it again.": [
  null,
  "Вилучення образу призведе до його вилучення, але ви, ймовірно, зможете отримати його знову, якщо виникне потреба. Виключенням є випадок, коли образ ніколи не було записано до сховища. У цьому випадку ви, ймовірно, не зможете отримати образ знову."
 ],
 "Details": [
  null,
  "Подробиці"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Docker не встановлено або не активовано у цій системі"
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
 "Erase containers, reformat disks, and add them": [
  null,
  "Витерти контейнери, переформатувати диски і додати їх"
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
 "MAC Address:": [
  null,
  "MAC-адреса:"
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
 "Mount container volumes": [
  null,
  "Змонтувати томи контейнера"
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
 "Overview": [
  null,
  "Огляд"
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
 "Stop": [
  null,
  "Зупинити"
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
 "TCP": [
  null,
  "TCP"
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
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  "Скануванням від $time ($type) вразливостей не знайдено."
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  "Сканування $time ($type) виконати не вдалося."
 ],
 "The storage pool will be reset to optimize its layout.  All containers will be erased.": [
  null,
  "Для оптимізації компонування буде відновлено початковий стан резервного сховища даних. Усі контейнери буде витерто."
 ],
 "This image does not exist.": [
  null,
  "Цього образу не існує."
 ],
 "Total": [
  null,
  "Загалом"
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
 "Unless Stopped": [
  null,
  "Якщо не зупинено"
 ],
 "Up since $StartedAt": [
  null,
  "Працює з $StartedAt"
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
