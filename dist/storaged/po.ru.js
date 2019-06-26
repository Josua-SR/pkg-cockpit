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
 "$0 Block Device": [
  null,
  "$0 Блочное устройство"
 ],
 "$0 Chunk Size": [
  null,
  "размер блока: $0"
 ],
 "$0 Disks": [
  null,
  "дисков: $0"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  "$0 данных + $1 служебной информации использовано из $2 ($3)"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 диск отсутствует",
  "$0 диска отсутствует",
  "$0 дисков отсутствует"
 ],
 "$0 filesystems can not be made larger.": [
  null,
  "$0 файловые системы не могут быть увеличены."
 ],
 "$0 filesystems can not be made smaller.": [
  null,
  "$0 файловые системы не могут быть уменьшены."
 ],
 "$0 filesystems can not be resized here.": [
  null,
  "$0 файловые системы здесь не могут быть изменены."
 ],
 "$0 is in active use": [
  null,
  "$0 активно используется"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 недоступен из какого-либо репозитория."
 ],
 "$0 of $1": [
  null,
  "$0 из $1"
 ],
 "$0 slots remain": [
  null,
  "$0 слоты остаются"
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  "$0 используется $1 ($2 Сохраненный)"
 ],
 "$0 will be installed.": [
  null,
  "$0 будет установлен."
 ],
 "$0, $1 free": [
  null,
  "$0, $1 свободно"
 ],
 "$name (from $host)": [
  null,
  "$name (от $host)"
 ],
 "${size} ${desc}": [
  null,
  "${size} ${desc}"
 ],
 "(default)": [
  null,
  "(по умолчанию)"
 ],
 "(none)": [
  null,
  "(нет)"
 ],
 "--": [
  null,
  "--"
 ],
 "1 MiB": [
  null,
  "1 МиБ"
 ],
 "1 day": [
  null,
  "1 день"
 ],
 "1 hour": [
  null,
  "1 час"
 ],
 "1 week": [
  null,
  "1 неделя"
 ],
 "128 KiB": [
  null,
  "128 КиБ"
 ],
 "16 KiB": [
  null,
  "16 КиБ"
 ],
 "2 MiB": [
  null,
  "2 МиБ"
 ],
 "32 KiB": [
  null,
  "32 КиБ"
 ],
 "4 KiB": [
  null,
  "4 КиБ"
 ],
 "5 minutes": [
  null,
  "5 минут"
 ],
 "512 KiB": [
  null,
  "512 КиБ"
 ],
 "6 hours": [
  null,
  "6 часов"
 ],
 "64 KiB": [
  null,
  "64 КиБ"
 ],
 "8 KiB": [
  null,
  "8 КиБ"
 ],
 "A disk is needed.": [
  null,
  "Требуется диск."
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  "Перед тем, как этот диск можно будет удалить, необходимо добавить запасной диск."
 ],
 "Activate": [
  null,
  "Включить"
 ],
 "Activating $target": [
  null,
  "Включение $target"
 ],
 "Active since": [
  null,
  "Активно с"
 ],
 "Add": [
  null,
  "Добавить"
 ],
 "Add Disks": [
  null,
  "Добавление дисков"
 ],
 "Add Key": [
  null,
  "Добавление ключа"
 ],
 "Add iSCSI Portal": [
  null,
  "Добавить iSCSI Portal"
 ],
 "Adding physical volume to $target": [
  null,
  "Добавление физического тома в $target"
 ],
 "Additional packages:": [
  null,
  "Дополнительные пакеты:"
 ],
 "Address": [
  null,
  "Адрес"
 ],
 "Address cannot be empty": [
  null,
  "Адрес не может быть пустым"
 ],
 "Address is not a valid URL": [
  null,
  "Недопустимое значение URL-адреса"
 ],
 "Apply": [
  null,
  "Применить"
 ],
 "At least $0 disks are needed.": [
  null,
  "Минимально необходимое количество дисков: $0."
 ],
 "At least one disk is needed.": [
  null,
  "Необходим хотя бы один диск."
 ],
 "Authentication required": [
  null,
  "Необходима проверка подлинности"
 ],
 "Available targets on $0": [
  null,
  "Доступные цели на $0"
 ],
 "Backing Device": [
  null,
  "Резервное устройство"
 ],
 "Block": [
  null,
  "Блок"
 ],
 "Block device for filesystems": [
  null,
  "Устройство блочного ввода-вывода для файловых систем"
 ],
 "Blocked": [
  null,
  "Заблокировано"
 ],
 "Can't delete while unlocked": [
  null,
  "Невозможно удалить в разблокированном состоянии"
 ],
 "Cancel": [
  null,
  "Отмена"
 ],
 "Change": [
  null,
  "Изменить"
 ],
 "Change iSCSI Initiator Name": [
  null,
  "Изменить имя инициатора iSCSI"
 ],
 "Change passphrase": [
  null,
  "Изменить парольную фразу"
 ],
 "Checking $target": [
  null,
  "Проверка $target"
 ],
 "Checking RAID Device $target": [
  null,
  "Проверка RAID-устройства $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "Проверка и восстановление RAID-устройства $target"
 ],
 "Checking installed software": [
  null,
  "Проверка установленного программного обеспечения"
 ],
 "Chunk Size": [
  null,
  "Размер блока"
 ],
 "Cleaning up for $target": [
  null,
  "Очистка данных $target"
 ],
 "Close": [
  null,
  "Закрыть"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "Совместимость со всеми системами и устройствами (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "Совместимость с современными системами и жёсткими дисками объёмом более 2 ТБ (GPT)"
 ],
 "Compression": [
  null,
  "Сжатие"
 ],
 "Confirm": [
  null,
  "Подтверждение"
 ],
 "Confirm removal with passphrase": [
  null,
  "Подтвердить удаление с помощью парольной фразы"
 ],
 "Content": [
  null,
  "Содержимое"
 ],
 "Create": [
  null,
  "Создать"
 ],
 "Create Logical Volume": [
  null,
  "Создание логического тома"
 ],
 "Create Partition": [
  null,
  "Создать раздел"
 ],
 "Create Partition Table": [
  null,
  "Создать таблицу разделов"
 ],
 "Create Partition on $0": [
  null,
  "Создание раздела на $0"
 ],
 "Create RAID Device": [
  null,
  "Создание RAID-устройства"
 ],
 "Create Snapshot": [
  null,
  "Создание моментального снимка"
 ],
 "Create Thin Volume": [
  null,
  "Создание тонкого тома"
 ],
 "Create VDO Device": [
  null,
  "Создание устройства VDO"
 ],
 "Create Volume Group": [
  null,
  "Создать группу томов"
 ],
 "Create new Logical Volume": [
  null,
  "Создать новый логический том"
 ],
 "Creating RAID Device $target": [
  null,
  "Создание RAID-устройства $target"
 ],
 "Creating filesystem on $target": [
  null,
  "Создание файловой системы на $target"
 ],
 "Creating logical volume $target": [
  null,
  "Создание логического тома $target"
 ],
 "Creating partition $target": [
  null,
  "Создание раздела $target"
 ],
 "Creating snapshot of $target": [
  null,
  "Создание моментального снимка $target"
 ],
 "Creating volume group $target": [
  null,
  "Создание группы томов $target"
 ],
 "Custom": [
  null,
  "Настраиваемое"
 ],
 "Custom encryption options": [
  null,
  "Пользовательские параметры шифрования"
 ],
 "Custom mount options": [
  null,
  "Пользовательские параметры подключения"
 ],
 "DISK IS FAILING": [
  null,
  "СБОЙ В РАБОТЕ ДИСКА"
 ],
 "Data Used": [
  null,
  "Использованные данные"
 ],
 "Deactivate": [
  null,
  "Отключить"
 ],
 "Deactivating $target": [
  null,
  "Отключение $target"
 ],
 "Deduplication": [
  null,
  "Дедупликация"
 ],
 "Default": [
  null,
  "По умолчанию"
 ],
 "Delete": [
  null,
  "Удалить"
 ],
 "Deleting $target": [
  null,
  "Удаление $target"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "Удаление RAID-устройства приведёт к удалению всех данных на нём."
 ],
 "Deleting a VDO device will erase all data on it.": [
  null,
  "Удаление устройства VDO приведёт к удалению всех данных на нём."
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "Удаление логического тома приведёт к удалению всех данных в нём."
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "Удаление раздела приведёт к удалению всех данных в нём."
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "Удаление группы томов приведёт к удалению всех данных в них."
 ],
 "Deleting volume group $target": [
  null,
  "Удаление группы томов $target"
 ],
 "Device File": [
  null,
  "Файл устройства"
 ],
 "Device is read-only": [
  null,
  "Устройство доступно только для чтения"
 ],
 "Disk": [
  null,
  "Диск"
 ],
 "Disk is OK": [
  null,
  "Диск в порядке"
 ],
 "Disk passphrase": [
  null,
  "Парольная фраза диска"
 ],
 "Disks": [
  null,
  "Диски"
 ],
 "Don't overwrite existing data": [
  null,
  "Не заменять существующие данные"
 ],
 "Downloading $0": [
  null,
  "Загрузка $0"
 ],
 "Drive": [
  null,
  "Устройство"
 ],
 "Drives": [
  null,
  "Устройства"
 ],
 "Edit": [
  null,
  "Изменить"
 ],
 "Edit Tang keyserver": [
  null,
  "Изменение сервера криптографических ключей Tang"
 ],
 "Editing a key requires a free slot": [
  null,
  "Для редактирования ключа необходим свободный слот"
 ],
 "Ejecting $target": [
  null,
  "Извлечение $target"
 ],
 "Emptying $target": [
  null,
  "Очистка $target"
 ],
 "Encrypt data": [
  null,
  "Шифровать данные"
 ],
 "Encrypted $0": [
  null,
  "Зашифрованный $0"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "Зашифрованный логический том $0"
 ],
 "Encrypted Partition of $0": [
  null,
  "Зашифрованный раздел $0"
 ],
 "Encrypted volumes can not be resized here.": [
  null,
  "Невозможно изменить размер зашифрованных томов."
 ],
 "Encrypted volumes need to be unlocked before they can be resized.": [
  null,
  "Зашифрованные тома необходимо разблокировать, прежде чем станет возможным изменение их размера."
 ],
 "Encryption": [
  null,
  "Шифрование"
 ],
 "Encryption Options": [
  null,
  "Параметры шифрования"
 ],
 "Erase": [
  null,
  "Удаление"
 ],
 "Erasing $target": [
  null,
  "Стирание $target"
 ],
 "Error": [
  null,
  "Ошибка"
 ],
 "Extended Partition": [
  null,
  "Дополнительный раздел"
 ],
 "FAILED": [
  null,
  "СБОЙ"
 ],
 "Filesystem": [
  null,
  "Файловая система"
 ],
 "Filesystem Mounting": [
  null,
  "Подключение файловой системы"
 ],
 "Filesystem Name": [
  null,
  "Имя файловой системы"
 ],
 "Filesystems": [
  null,
  "Файловые системы"
 ],
 "For legacy applications only. Reduces performance.": [
  null,
  "Только для устаревших приложений. Установка данного флажка снижает производительность."
 ],
 "Force remove passphrase in $0": [
  null,
  "Принудительно удалить парольную фразу в $0"
 ],
 "Format": [
  null,
  "Форматировать"
 ],
 "Format $0": [
  null,
  "Форматирование $0"
 ],
 "Format Disk $0": [
  null,
  "Форматирование диска $0"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "При форматировании диска все данные на нём будут удалены."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "При форматировании запоминающего устройства все данные на нём будут удалены."
 ],
 "Free": [
  null,
  "Свободно"
 ],
 "Free Space": [
  null,
  "свободного места"
 ],
 "Free up space in this group: Shrink or delete other logical volumes or add another physical volume.": [
  null,
  "Освободите место в этой группе: сожмите или удалите другие логические тома или добавьте новый физический том."
 ],
 "Go to now": [
  null,
  "Текущий момент"
 ],
 "Grow": [
  null,
  "Расширить"
 ],
 "Grow Content": [
  null,
  "Расширить содержимое"
 ],
 "Grow Logical Volume": [
  null,
  "Расширение логического тома"
 ],
 "Grow logical size of $0": [
  null,
  "Расширение логического размера $0"
 ],
 "Grow to take all space": [
  null,
  "Расширить на всё пространство"
 ],
 "If tang-show-keys is not available, run the following:": [
  null,
  "Если клавиши танга-шоу недоступны, выполните следующие действия:"
 ],
 "In Sync": [
  null,
  "В синхронизации"
 ],
 "Inactive volume": [
  null,
  "Неактивный том"
 ],
 "Index Memory": [
  null,
  "Индексная память"
 ],
 "Install": [
  null,
  "Установка"
 ],
 "Install NFS Support": [
  null,
  "Установка поддержки NFS"
 ],
 "Install Software": [
  null,
  "Установить программное обеспечение"
 ],
 "Install VDO support": [
  null,
  "Установить поддержку VDO"
 ],
 "Installing $0": [
  null,
  "Установка $0"
 ],
 "Invalid username or password": [
  null,
  "Неверное имя пользователя или пароль"
 ],
 "Jobs": [
  null,
  "Задания"
 ],
 "Key slots with unknown types can not be edited here": [
  null,
  "Ключевые слоты с неизвестными типами нельзя редактировать здесь"
 ],
 "Key source": [
  null,
  "Основной источник"
 ],
 "Keys": [
  null,
  "Ключи"
 ],
 "Keyserver": [
  null,
  "сервера ключей"
 ],
 "Keyserver address": [
  null,
  "Адрес сервера"
 ],
 "Keyserver removal may prevent unlocking $0.": [
  null,
  "Удаление Keyserver может предотвратить разблокировку $0"
 ],
 "Loading...": [
  null,
  "Загрузка..."
 ],
 "Local Mount Point": [
  null,
  "Местная точка монтирования"
 ],
 "Lock": [
  null,
  "Заблокировать"
 ],
 "Locking $target": [
  null,
  "Блокировка $target"
 ],
 "Logical": [
  null,
  "логический"
 ],
 "Logical Size": [
  null,
  "Логический размер"
 ],
 "Logical Volume": [
  null,
  "Логический том"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "Логический том (моментальный снимок)"
 ],
 "Logical Volume of $0": [
  null,
  "Логический том $0"
 ],
 "Make sure the key hash from the Tang server matches:": [
  null,
  "Убедитесь, что хэш ключа с сервера Tang соответствует:"
 ],
 "Manually check with SSH: ": [
  null,
  "Вручную проверять с помощью SSH: "
 ],
 "Marking $target as faulty": [
  null,
  "маркировка $target как неисправный"
 ],
 "Member of RAID Device": [
  null,
  "Член RAID-устройства"
 ],
 "Member of RAID Device $0": [
  null,
  "Член RAID-устройства $0"
 ],
 "Metadata Used": [
  null,
  "Используемые метаданные"
 ],
 "Modifying $target": [
  null,
  "Изменение $target"
 ],
 "Mount": [
  null,
  "гора"
 ],
 "Mount Options": [
  null,
  "Параметры крепления"
 ],
 "Mount Point": [
  null,
  "Точка подключения"
 ],
 "Mount at boot": [
  null,
  "Гора при загрузке"
 ],
 "Mount point can not be empty": [
  null,
  "Точка монтирования не может быть пуста"
 ],
 "Mount point cannot be empty.": [
  null,
  "Точка монтирования не может быть пуста."
 ],
 "Mount point must start with \"/\".": [
  null,
  "Точка монтирования должна начинаться с \"/\"."
 ],
 "Mount read only": [
  null,
  "Только для чтения"
 ],
 "Mounted At": [
  null,
  "Установлено на"
 ],
 "Mounting": [
  null,
  "Подключение"
 ],
 "Mounting $target": [
  null,
  "монтаж $target"
 ],
 "NFS Mount": [
  null,
  "Подключение по NFS"
 ],
 "NFS Mounts": [
  null,
  "Подключения по NFS"
 ],
 "NFS Support not installed": [
  null,
  "Поддержка NFS не установлена"
 ],
 "Name": [
  null,
  "Имя"
 ],
 "Name can not be empty.": [
  null,
  "Имя не может быть пустым."
 ],
 "Name cannot be empty.": [
  null,
  "Имя не может быть пустым."
 ],
 "Name cannot be longer than $0 bytes": [
  null,
  ""
 ],
 "Name cannot be longer than $0 characters": [
  null,
  ""
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  "Имя не может быть длиннее 127 символов."
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "Имя не может содержать символ '$0»."
 ],
 "Name cannot contain whitespace.": [
  null,
  "Имя не может содержать пробелы."
 ],
 "New NFS Mount": [
  null,
  "Новое подключение по NFS"
 ],
 "New passphrase": [
  null,
  "Новая кодовая фраза"
 ],
 "Next": [
  null,
  "Далее"
 ],
 "No Filesystem": [
  null,
  "Нет файловой системы"
 ],
 "No Logical Volumes": [
  null,
  "Нет логических томов"
 ],
 "No NFS mounts set up": [
  null,
  "Подключения по NFS отсутствуют"
 ],
 "No available slots": [
  null,
  "Нет доступных слотов"
 ],
 "No disks are available.": [
  null,
  "Нет доступных дисков."
 ],
 "No drives attached": [
  null,
  "Приводы не подключены"
 ],
 "No free key slots": [
  null,
  "Нет свободных слотов для ключей"
 ],
 "No free space": [
  null,
  "Нет свободного места"
 ],
 "No iSCSI targets set up": [
  null,
  "Нет установленных целей iSCSI"
 ],
 "No keys added": [
  null,
  "Не добавлены ключи"
 ],
 "No media inserted": [
  null,
  "Не вставлен носитель"
 ],
 "No partitioning": [
  null,
  "Без разбиения"
 ],
 "No storage set up as RAID": [
  null,
  "Нет хранилища, настроенного как RAID"
 ],
 "No storage set up as VDO": [
  null,
  "Нет хранилища, настроенного как VDO"
 ],
 "No volume groups created": [
  null,
  "Нет групп томов"
 ],
 "Not enough space to grow.": [
  null,
  ""
 ],
 "Not found": [
  null,
  "Не найдено"
 ],
 "Not mounted": [
  null,
  "Не установлен"
 ],
 "Not running": [
  null,
  "Не бегать"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Old passphrase": [
  null,
  "Старая кодовая фраза"
 ],
 "Only $0 of $1 are used.": [
  null,
  "Только $0 из $1 используются."
 ],
 "Operation '$operation' on $target": [
  null,
  "Операция '$operation'on $target"
 ],
 "Options": [
  null,
  "Параметры"
 ],
 "Other Devices": [
  null,
  "Другие устройства"
 ],
 "Overwrite existing data with zeros": [
  null,
  "Заменять существующие данные нулями"
 ],
 "PackageKit crashed": [
  null,
  "Пакет PackageKit разбился"
 ],
 "Partition": [
  null,
  "раздел"
 ],
 "Partition of $0": [
  null,
  "Раздел $0"
 ],
 "Partitioning": [
  null,
  "Разбиение"
 ],
 "Passphrase": [
  null,
  "Парольная фраза"
 ],
 "Passphrase cannot be empty": [
  null,
  "Парольная фраза не может быть пустой"
 ],
 "Passphrase removal may prevent unlocking $0.": [
  null,
  "Удаление парольной фразы может предотвратить разблокировку $0"
 ],
 "Passphrases do not match": [
  null,
  "Парольные фразы не совпадают"
 ],
 "Password": [
  null,
  "Пароль"
 ],
 "Path on Server": [
  null,
  "Путь на сервере"
 ],
 "Path on server cannot be empty.": [
  null,
  "Путь на сервере не может быть пустым."
 ],
 "Path on server must start with \"/\".": [
  null,
  "Путь на сервере должен начинаться с «/»."
 ],
 "Physical": [
  null,
  "Физическая"
 ],
 "Physical Volume": [
  null,
  "Физический объем"
 ],
 "Physical Volumes": [
  null,
  "Физические тома"
 ],
 "Physical volume of $0": [
  null,
  "Физический объем $0"
 ],
 "Physical volumes can not be resized here.": [
  null,
  "Здесь физические размеры не могут быть изменены."
 ],
 "Please confirm deletion of $0": [
  null,
  "Пожалуйста, подтвердите удаление $0"
 ],
 "Please confirm stopping of $0": [
  null,
  "Пожалуйста, подтвердите прекращение $0"
 ],
 "Pool": [
  null,
  "Пул"
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "Пул для тонких логических томов"
 ],
 "Pool for Thin Volumes": [
  null,
  "Бассейн для тонких томов"
 ],
 "Pool for thinly provisioned volumes": [
  null,
  "Бассейн для тонко заготовленных объемов"
 ],
 "Port": [
  null,
  "Порт"
 ],
 "Process": [
  null,
  "Процесс"
 ],
 "Purpose": [
  null,
  "Назначение"
 ],
 "RAID ($0)": [
  null,
  "RAID ($0)"
 ],
 "RAID 0": [
  null,
  "RAID 0"
 ],
 "RAID 0 (Stripe)": [
  null,
  "RAID 0 (полоса)"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (зеркало)"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RAID 10 (полоса зеркал)"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (выделенная четность)"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (распределенная четность)"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (Double Distributed Parity)"
 ],
 "RAID Device": [
  null,
  "Устройство RAID"
 ],
 "RAID Device $0": [
  null,
  "Устройство RAID $0"
 ],
 "RAID Devices": [
  null,
  "Устройства RAID"
 ],
 "RAID Level": [
  null,
  "Уровень RAID"
 ],
 "RAID Member": [
  null,
  "Пользователи"
 ],
 "Reading": [
  null,
  "Чтение"
 ],
 "Reboot": [
  null,
  "Перезагрузка"
 ],
 "Recommended default": [
  null,
  ""
 ],
 "Recovering": [
  null,
  "Восстановление"
 ],
 "Recovering RAID Device $target": [
  null,
  "Восстановление RAID-устройства $target"
 ],
 "Removals:": [
  null,
  "Удаления:"
 ],
 "Remove": [
  null,
  "Удалить зону"
 ],
 "Remove $0?": [
  null,
  "Удалить $0?"
 ],
 "Remove Tang keyserver": [
  null,
  "Удалить сервер ключей Tang"
 ],
 "Remove device": [
  null,
  "Удалить устройство"
 ],
 "Remove passphrase": [
  null,
  "Удалить кодовую фразу"
 ],
 "Remove passphrase in $0?": [
  null,
  "Удалить кодовую фразу в $0?"
 ],
 "Removing $0": [
  null,
  "Удаление $0"
 ],
 "Removing $target from RAID Device": [
  null,
  "Удаление $target с устройства RAID"
 ],
 "Removing physical volume from $target": [
  null,
  "Удаление физического объема из $target"
 ],
 "Rename": [
  null,
  "Переименовать"
 ],
 "Rename Logical Volume": [
  null,
  "Переименовать логический том"
 ],
 "Rename Volume Group": [
  null,
  "Переименовать группу томов"
 ],
 "Renaming $target": [
  null,
  "Переименование $target"
 ],
 "Repairing $target": [
  null,
  "ремонт $target"
 ],
 "Repeat passphrase": [
  null,
  "Повторить кодовую фразу"
 ],
 "Resizing $target": [
  null,
  "Изменение размера $target"
 ],
 "Resizing an encrypted filesystem requires unlocking the disk. Please provide a current disk passphrase.": [
  null,
  ""
 ],
 "Running": [
  null,
  "Работает"
 ],
 "SMART self-test of $target": [
  null,
  "SMART самотестирование $target"
 ],
 "Save": [
  null,
  "Сохранить"
 ],
 "Save space by compressing individual blocks with LZ4": [
  null,
  ""
 ],
 "Save space by storing identical data blocks just once": [
  null,
  ""
 ],
 "Saving a new passphrase requires unlocking the disk. Please provide a current disk passphrase.": [
  null,
  "Для сохранения новой парольной фразы требуется разблокировка диска. Укажите текущую кодовую фразу."
 ],
 "Securely erasing $target": [
  null,
  "Безопасное стирание $target"
 ],
 "Server": [
  null,
  "Сервер"
 ],
 "Server Address": [
  null,
  "Адрес сервера"
 ],
 "Server address cannot be empty.": [
  null,
  "Адрес сервера не может быть пустым."
 ],
 "Server cannot be empty.": [
  null,
  "Сервер не может быть пустым."
 ],
 "Service": [
  null,
  "Служба"
 ],
 "Session": [
  null,
  "Сеанс"
 ],
 "Setting up loop device $target": [
  null,
  "Настройка петлевого устройства $target"
 ],
 "Show all": [
  null,
  ""
 ],
 "Show all $0 drives": [
  null,
  ""
 ],
 "Shrink": [
  null,
  "Уменьшить"
 ],
 "Shrink Logical Volume": [
  null,
  "Термоусадочный логический том"
 ],
 "Shrink Volume": [
  null,
  "Сжать том"
 ],
 "Size": [
  null,
  "Размер"
 ],
 "Size cannot be negative": [
  null,
  "Размер не может быть отрицательным"
 ],
 "Size cannot be zero": [
  null,
  "Размер не может быть равен нулю"
 ],
 "Size is too large": [
  null,
  "Слишком большой размер"
 ],
 "Size must be a number": [
  null,
  "Размер должен быть числом"
 ],
 "Size must be at least $0": [
  null,
  "Размер должен быть не менее $0"
 ],
 "Slot $0": [
  null,
  "слот $0"
 ],
 "Spare": [
  null,
  "Запасной"
 ],
 "Start": [
  null,
  "Запустить"
 ],
 "Start Multipath": [
  null,
  "Запустить Multipath"
 ],
 "Starting RAID Device $target": [
  null,
  "Запуск устройства RAID $target"
 ],
 "Starting swapspace $target": [
  null,
  "Запуск swapspace $target"
 ],
 "Stop": [
  null,
  "Остановить"
 ],
 "Stop Device": [
  null,
  "Остановить устройство"
 ],
 "Stop and Unmount": [
  null,
  "Стоп и отключение"
 ],
 "Stop and remove": [
  null,
  "Остановить и удалить"
 ],
 "Stopping RAID Device $target": [
  null,
  "Остановка RAID-устройства $target"
 ],
 "Stopping swapspace $target": [
  null,
  "Остановка обмена $target"
 ],
 "Storage": [
  null,
  "Хранилище"
 ],
 "Storage Logs": [
  null,
  "Журналы хранения"
 ],
 "Storage can not be managed on this system.": [
  null,
  ""
 ],
 "Store passphrase": [
  null,
  "Хранить парольную фразу"
 ],
 "Stored Passphrase": [
  null,
  "Сохраненная парольная фраза"
 ],
 "Stored passphrase": [
  null,
  "Сохраненная кодовая фраза"
 ],
 "Support is installed.": [
  null,
  "Установлена ​​поддержка."
 ],
 "Swap": [
  null,
  "Подкачка"
 ],
 "Synchronizing RAID Device $target": [
  null,
  "Синхронизация RAID-устройства $target"
 ],
 "Tang keyserver": [
  null,
  "Tang keyserver"
 ],
 "The RAID Array is in a degraded state": [
  null,
  "RAID-массив находится в деградированном состоянии"
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  "Устройство RAID должно работать, чтобы добавить запасные диски."
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  "Устройство RAID должно быть запущено для удаления дисков."
 ],
 "The creation of this VDO device did not finish and the device can't be used.": [
  null,
  "Создание этого устройства VDO не завершилось, и устройство не может быть использовано."
 ],
 "The currently logged in user is not permitted to see information about keys.": [
  null,
  "Пользователю в настоящий момент не разрешено просматривать информацию о ключах."
 ],
 "The filesystem is in use by login sessions and system services. Proceeding will stop these.": [
  null,
  "Файловая система используется сеансами входа в систему и системными службами. Продолжающие действия остановят их."
 ],
 "The filesystem is in use by login sessions. Proceeding will stop these.": [
  null,
  "Файловая система используется сеансами входа в систему. Продолжающие действия остановят их."
 ],
 "The filesystem is in use by system services. Proceeding will stop these.": [
  null,
  "Файловая система используется системными службами. При продолжении они будут остановлены."
 ],
 "The last disk of a RAID device cannot be removed.": [
  null,
  "Последний диск RAID-устройства не может быть удален."
 ],
 "The last key slot can not be removed": [
  null,
  "Последний ключевой слот нельзя удалить"
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  "Последний физический том группы томов не может быть удален."
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "Пользователь <b>$0</b> не разрешено управлять хранилищем"
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  "В системе есть устройства с несколькими путями, но служба многолучевого распространения не работает."
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  "Недостаточно свободного места в другом месте для удаления этого физического тома. По крайней мере $0 требуется больше свободного места."
 ],
 "Thin Logical Volume": [
  null,
  "Тонкий логический том"
 ],
 "This NFS mount is in use and only its options can be changed.": [
  null,
  "Данное подключение по NFS используется. Возможно только изменение его параметров."
 ],
 "This VDO device does not use all of its backing device.": [
  null,
  "Это устройство VDO не использует все его поддерживающее устройство."
 ],
 "This device has filesystems that are currently in use. Proceeding will unmount all filesystems on it.": [
  null,
  "Это устройство имеет файловые системы, которые в настоящее время используются. В процессе работы будет отключено все файловые системы."
 ],
 "This device is currently used for RAID devices.": [
  null,
  "В настоящее время это устройство используется для устройств RAID."
 ],
 "This device is currently used for RAID devices. Proceeding will remove it from its RAID devices.": [
  null,
  "В настоящее время это устройство используется для устройств RAID. Продолжающийся будет удалять его с его RAID-устройств."
 ],
 "This device is currently used for VDO devices.": [
  null,
  "В настоящее время это устройство используется для устройств VDO."
 ],
 "This device is currently used for volume groups.": [
  null,
  "В настоящее время это устройство используется для групп томов."
 ],
 "This device is currently used for volume groups. Proceeding will remove it from its volume groups.": [
  null,
  "В настоящее время это устройство используется для групп томов. Продолжение будет удалено из групп томов."
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  "Этот диск не может быть удален во время восстановления устройства."
 ],
 "This logical volume is not completely used by its content.": [
  null,
  ""
 ],
 "This volume needs to be activated before it can be resized.": [
  null,
  "Этот том необходимо активировать, прежде чем его можно будет изменить."
 ],
 "Total size: $0": [
  null,
  "Общий размер: $0"
 ],
 "Trust key": [
  null,
  "Целевой ключ"
 ],
 "Type": [
  null,
  "Тип"
 ],
 "UUID": [
  null,
  "UUID"
 ],
 "Unable to reach server": [
  null,
  "Не удалось связаться с сервером"
 ],
 "Unable to remove mount": [
  null,
  "Не удалось удалить mount"
 ],
 "Unable to unmount filesystem": [
  null,
  "Не удалось отключить файловую систему"
 ],
 "Unit": [
  null,
  "Сервис"
 ],
 "Unknown": [
  null,
  "Неизвестно"
 ],
 "Unknown ($0)": [
  null,
  "Неизвестный ($0)"
 ],
 "Unknown host name": [
  null,
  "Неизвестное имя хоста"
 ],
 "Unknown type": [
  null,
  "Неизвестный тип"
 ],
 "Unlock": [
  null,
  "Разблокировать"
 ],
 "Unlock at boot": [
  null,
  "Разблокировка при загрузке"
 ],
 "Unlock read only": [
  null,
  "Разблокировать только чтение"
 ],
 "Unlocking $target": [
  null,
  "размыкание $target"
 ],
 "Unlocking disk...": [
  null,
  "Разблокировка диска ..."
 ],
 "Unmount": [
  null,
  "Отсоединить"
 ],
 "Unmounting $target": [
  null,
  "Размонтирование $target"
 ],
 "Unrecognized Data": [
  null,
  "Непризнанные данные"
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  "Здесь не могут быть уменьшены нераспознанные данные."
 ],
 "Unsupported volume": [
  null,
  "Неподдерживаемый объем"
 ],
 "Usage": [
  null,
  "Формат"
 ],
 "Use 512 Byte emulation": [
  null,
  "Использовать эмуляцию 512 байт"
 ],
 "Used": [
  null,
  "Использовано"
 ],
 "Username": [
  null,
  "Имя пользователя"
 ],
 "VDO Backing": [
  null,
  "Поддержка VDO"
 ],
 "VDO Device": [
  null,
  "Устройство VDO"
 ],
 "VDO Device $0": [
  null,
  "Устройство VDO $0"
 ],
 "VDO Devices": [
  null,
  "Устройства VDO"
 ],
 "VDO backing devices can not be made smaller": [
  null,
  "Устройства поддержки VDO не могут быть уменьшены"
 ],
 "VDO support not installed": [
  null,
  "Поддержка VDO не установлена"
 ],
 "Verify key": [
  null,
  "Подтвердить ключ"
 ],
 "Very securely erasing $target": [
  null,
  "Очень надежно стирает $target"
 ],
 "Volume": [
  null,
  "Том"
 ],
 "Volume Group": [
  null,
  "Группа томов"
 ],
 "Volume Group $0": [
  null,
  "Группа томов $0"
 ],
 "Volume Groups": [
  null,
  "Группы томов"
 ],
 "Volume size is $0. Content size is $1.": [
  null,
  ""
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Ожидание выполнения других операций управления программным обеспечением"
 ],
 "What if tang-show-keys is not available?": [
  null,
  "Что делать, если танг-шоу-ключи недоступны?"
 ],
 "Write-mostly": [
  null,
  "Списание в основном"
 ],
 "Writing": [
  null,
  "Запись"
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
 "iSCSI Targets": [
  null,
  "Цели iSCSI"
 ],
 "key slot $0": [
  null,
  "ключевой слот $0"
 ],
 "undefined": [
  null,
  "не определено"
 ],
 "unknown target": [
  null,
  "неизвестная цель"
 ],
 "unpartitioned space on $0": [
  null,
  "нераспределенное пространство на $0"
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 Файловая система"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  "Зашифрованные данные"
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "Другие данные"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "Swap Space"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "Непризнанные данные"
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  "Поддержка VDO"
 ],
 "storage\u0004Drive": [
  null,
  "Накопитель"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Жёсткий диск"
 ],
 "storage\u0004Optical Drive": [
  null,
  "Оптический привод"
 ],
 "storage\u0004Removable Drive": [
  null,
  "Съемный диск"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "Твердотельный диск"
 ],
 "format-bytes\u0004bytes": [
  null,
  "байт"
 ]
}));
