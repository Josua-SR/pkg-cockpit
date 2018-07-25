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
  "x-generator": "Zanata 4.5.0"
 },
 " 1\"Do you want to delete the following Nodes?": [
  null,
  " 1\"Хочете вилучити вказані нижче вузли?"
 ],
 " or drag & drop.": [
  null,
  " або перетягніть і скиньте."
 ],
 "$0% Free": [
  "$0% Free",
  "Вільно $0%",
  "Вільно $0%",
  "Вільно $0%"
 ],
 "$0% Used": [
  "$0% Used",
  "Використано $0%",
  "Використано $0%",
  "Використано $0%"
 ],
 "AWS Elastic Block Store": [
  null,
  "Блокове сховище AWS Elastic"
 ],
 "Access Modes": [
  null,
  "Режими доступу"
 ],
 "Access Policy": [
  null,
  "Правила доступу"
 ],
 "Actual": [
  null,
  "Поточна"
 ],
 "Add": [
  null,
  "Додати"
 ],
 "Add Cluster Node": [
  null,
  "Додати вузол кластера"
 ],
 "Add Group": [
  null,
  "Додати групу"
 ],
 "Add Kubernetes Node": [
  null,
  "Додати вузол Kubernetes"
 ],
 "Add Member": [
  null,
  "Додати учасника"
 ],
 "Add Membership": [
  null,
  "Додати запис участі"
 ],
 "Add New Cluster": [
  null,
  "Додати новий кластер"
 ],
 "Add New User": [
  null,
  "Додати нового користувача"
 ],
 "Add Role": [
  null,
  "Додати роль"
 ],
 "Add User": [
  null,
  "Додати користувача"
 ],
 "Add membership": [
  null,
  "Додати запис участі"
 ],
 "Address": [
  null,
  "Адреса"
 ],
 "Addresses": [
  null,
  "Адреси"
 ],
 "Adjust": [
  null,
  "Скоригувати"
 ],
 "Adjust Persistent Volume '{{ item.metadata.name }}'": [
  null,
  "Скоригувати сталий том «{{ item.metadata.name }}»"
 ],
 "Adjust Replication Controller {{ item.metadata.name }}": [
  null,
  "Скоригувати контролер реплікації {{ item.metadata.name }}"
 ],
 "Adjust Route": [
  null,
  "Скоригувати маршрут"
 ],
 "Adjust Service": [
  null,
  "Скоригувати службу"
 ],
 "Admin": [
  null,
  "Адміністратор"
 ],
 "All Projects": [
  null,
  "Всі проекти"
 ],
 "All Types": [
  null,
  "Всі типи"
 ],
 "All healthy": [
  null,
  "Усі корисні"
 ],
 "All images": [
  null,
  "Усі образи"
 ],
 "All in use": [
  null,
  "Усі використано"
 ],
 "All running": [
  null,
  "Усі запущено"
 ],
 "Annotations": [
  null,
  "Анотації"
 ],
 "Anonymous: Allow all unauthenticated users to pull images": [
  null,
  "Анонімний: дозволити усім нерозпізнаним користувачам отримувати образи"
 ],
 "Authentication": [
  null,
  "Розпізнавання"
 ],
 "Azure": [
  null,
  "Azure"
 ],
 "Boot ID": [
  null,
  "Ід. завантаження"
 ],
 "Bus": [
  null,
  "Канал"
 ],
 "CPU": [
  null,
  "Процесор"
 ],
 "CPU Utilization: $0%": [
  null,
  "Використання процесора: $0%"
 ],
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Capacity": [
  null,
  "Місткість"
 ],
 "Ceph Filesystem Mount": [
  null,
  "Змонтована файлова система Ceph"
 ],
 "Ceph Monitors": [
  null,
  "Монітори Ceph"
 ],
 "Change": [
  null,
  "Змінити"
 ],
 "Change User": [
  null,
  "Змінити користувача"
 ],
 "Change image stream": [
  null,
  "Змінити потік образу"
 ],
 "Change project": [
  null,
  "Змінити проект"
 ],
 "Cinder": [
  null,
  "Cinder"
 ],
 "Claim": [
  null,
  "Заявити"
 ],
 "Claim Name": [
  null,
  "Назва заявки"
 ],
 "Client Certificate": [
  null,
  "Сертифікат клієнта"
 ],
 "Cluster": [
  null,
  "Кластер"
 ],
 "Configuration": [
  null,
  "Налаштування"
 ],
 "Configure Flannel networking": [
  null,
  "Налаштувати роботу у мережі Flannel"
 ],
 "Configure Kubelet and Proxy": [
  null,
  "Налаштувати Kubelet і проксі"
 ],
 "Connect": [
  null,
  "З'єднатися"
 ],
 "Connecting...": [
  null,
  "Встановлення з’єднання…"
 ],
 "Connection Error": [
  null,
  "Помилка з'єднання"
 ],
 "Connection Error: $0": [
  null,
  "Помилка з’єднання: $0"
 ],
 "Connection Settings": [
  null,
  "Параметри з’єднання"
 ],
 "Container": [
  null,
  "Контейнер"
 ],
 "Container ID": [
  null,
  "Ід. контейнера"
 ],
 "Container Runtime Version": [
  null,
  "Версія середовища контейнера"
 ],
 "Containers": [
  null,
  "Контейнери"
 ],
 "Could not list services": [
  null,
  "Не вдалося побудувати список служб"
 ],
 "Couldn't connect to server": [
  null,
  "Не вдалося встановити з’єднання із сервером"
 ],
 "Couldn't find running API server": [
  null,
  "Не вдалося знайти запущений сервер API"
 ],
 "Create": [
  null,
  "Створити"
 ],
 "Create Virtual Machine": [
  null,
  "Створити віртуальну машину"
 ],
 "Create empty image stream": [
  null,
  "Створити порожній потік образу"
 ],
 "Create image stream": [
  null,
  "Створити потік образу"
 ],
 "Created": [
  null,
  "Створено"
 ],
 "DNS Policy": [
  null,
  "Правило DNS"
 ],
 "Delete": [
  null,
  "Вилучити"
 ],
 "Delete Node": [
  null,
  "Вилучити вузол"
 ],
 "Delete Persistent Volume": [
  null,
  "Вилучити сталий том"
 ],
 "Delete Persistent Volume Claim": [
  null,
  "Вилучити заявку на сталий том"
 ],
 "Delete Project": [
  null,
  "Вилучення проекту"
 ],
 "Delete Selected": [
  null,
  "Вилучити позначене"
 ],
 "Delete image stream": [
  null,
  "Вилучити потік образу"
 ],
 "Delete {{ item.kind }}": [
  null,
  "Вилучити {{ item.kind }}"
 ],
 "Deleting a Pod will kill all associated containers. Pods may be automatically created again in some cases.": [
  null,
  "Вилучення кокона призведе до завершення роботи усіх пов’язаних із ним контейнерів. У певних випадках кокон може бути повторно створено автоматично.\n          "
 ],
 "Deploy": [
  null,
  "Розгорнути"
 ],
 "Deploy Application": [
  null,
  "Розгорнути програму"
 ],
 "Deployment Causes": [
  null,
  "Причини розгортання"
 ],
 "Deployment Config": [
  null,
  "Налаштування розгортання"
 ],
 "Deployment Configs": [
  null,
  "Налаштування розгортання"
 ],
 "Description": [
  null,
  "Опис"
 ],
 "Details": [
  null,
  "Подробиці"
 ],
 "Device": [
  null,
  "Пристрій"
 ],
 "Directory": [
  null,
  "Каталог"
 ],
 "Disk": [
  null,
  "Диск"
 ],
 "Disk Utilization: $0%": [
  null,
  "Використання диска: $0%"
 ],
 "Disks": [
  null,
  "Диски"
 ],
 "Display name": [
  null,
  "Показана назва"
 ],
 "Do you want to add the role '{{ fields.displayRole }}'?": [
  null,
  "Хочете додати роль «{{ fields.displayRole }}»?"
 ],
 "Do you want to delete the '{{stream.metadata.namespace}}/{{stream.metadata.name}}' image stream?": [
  null,
  "Хочете вилучити потік образу «{{stream.metadata.namespace}}/{{stream.metadata.name}}»?"
 ],
 "Do you want to delete the Persistent Volume '{{item.metadata.name}}'?": [
  null,
  "Ви хочете вилучити сталий том «{{item.metadata.name}}»?"
 ],
 "Do you want to delete the Persistent Volume Claim '{{item.metadata.name}}'?": [
  null,
  "Ви хочете вилучити заявку на сталий том «{{item.metadata.name}}»?"
 ],
 "Do you want to delete the {{ item.kind }} '{{item.metadata.name}}'?": [
  null,
  "Хочете вилучити {{ item.kind }} «{{item.metadata.name}}»?"
 ],
 "Do you want to delete this Node?": [
  null,
  "Хочете вилучити цей вузол?"
 ],
 "Do you want to remove the image tagged as '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?": [
  null,
  "Хочете вилучити образ із мітками «{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}»?"
 ],
 "Do you want to remove the role '{{ fields.displayRole }}' from member {{ fields.member.metadata.name }}?": [
  null,
  "Хочете вилучити роль «{{ fields.displayRole }}» із запису учасника {{ fields.member.metadata.name }}?"
 ],
 "Don't pull images automatically": [
  null,
  "Не отримувати образи автоматично"
 ],
 "Driver": [
  null,
  "Драйвер"
 ],
 "Drop file here to upload.": [
  null,
  "Скиньте сюди файл для вивантаження."
 ],
 "Empty Directory": [
  null,
  "Порожній каталог"
 ],
 "Endpoint": [
  null,
  "Кінцевий пункт"
 ],
 "Endpoint Name": [
  null,
  "Назва кінцевої точки"
 ],
 "Endpoints": [
  null,
  "Кінцеві точки"
 ],
 "Environment": [
  null,
  "Середовище"
 ],
 "Error getting certificate details: $0": [
  null,
  "Помилка під час спроби отримати параметри сертифіката: $0"
 ],
 "Error writing kubectl config": [
  null,
  "Помилка під час спроби записати налаштування kubectl"
 ],
 "Fibre Channel": [
  null,
  "Оптоволоконний канал"
 ],
 "Filesystem Type": [
  null,
  "Тип файлової системи"
 ],
 "Flex": [
  null,
  "Flex"
 ],
 "Flocker": [
  null,
  "Flocker"
 ],
 "Flocker Dataset Name": [
  null,
  "Назва набору даних Flocker"
 ],
 "Free": [
  null,
  "Вільно"
 ],
 "GCE Persistent Disk": [
  null,
  "Сталий диск GCE"
 ],
 "GiB": [
  null,
  "ГіБ"
 ],
 "Git Repository": [
  null,
  "Сховище Git"
 ],
 "Gluster FS": [
  null,
  "ФС Gluster"
 ],
 "GlusterFS": [
  null,
  "GlusterFS"
 ],
 "Grant additional push or admin access to specific members below.": [
  null,
  "Нижче можна надати додатковий доступ для запису або адміністрування окремим користувачам."
 ],
 "Group Members": [
  null,
  "Учасники групи"
 ],
 "Group or Project": [
  null,
  "Група або проект"
 ],
 "Groups": [
  null,
  "Групи"
 ],
 "Host": [
  null,
  "Вузол"
 ],
 "Host Path": [
  null,
  "Шлях на вузлі"
 ],
 "IP": [
  null,
  "IP"
 ],
 "ISCSI": [
  null,
  "ISCSI"
 ],
 "Identities": [
  null,
  "Профілі"
 ],
 "Identity": [
  null,
  "Профіль"
 ],
 "Image": [
  null,
  "Образ"
 ],
 "Image ID": [
  null,
  "Ід. образу"
 ],
 "Image Name": [
  null,
  "Назви предметів"
 ],
 "Image Registry": [
  null,
  "Реєстр образів"
 ],
 "Image Stream": [
  null,
  "Потік образу"
 ],
 "Image commands": [
  null,
  "Команди роботи з образами"
 ],
 "Images": [
  null,
  "Зображення"
 ],
 "Images by project": [
  null,
  "Образи за проектом"
 ],
 "Images pushed recently": [
  null,
  "Нещодавно вивантажені образи"
 ],
 "In order to begin pushing images to the registry, use the commands below.": [
  null,
  "З метою розпочати надсилання образів до реєстру скористайтеся наведеними нижче командами."
 ],
 "In order to begin pushing images to the registry, you need to create a project.": [
  null,
  "Щоб розпочати надсилання образів до реєстру, вам слід створити проект."
 ],
 "Interface": [
  null,
  "Інтерфейс"
 ],
 "Kernel Version": [
  null,
  "Версія ядра"
 ],
 "Key Ring Path": [
  null,
  "Шлях до сховища ключів"
 ],
 "Kubelet Version": [
  null,
  "Версія Kubelet"
 ],
 "Kubernetes Cluster": [
  null,
  "Кластер Kubernetes"
 ],
 "Labels": [
  null,
  "Мітки"
 ],
 "Labels:": [
  null,
  "Мітки:"
 ],
 "Last Heartbeat": [
  null,
  "Останній такт"
 ],
 "Last Status Change": [
  null,
  "Остання зміна стану"
 ],
 "Latest Version": [
  null,
  "Найсвіжіша версія"
 ],
 "Log into OpenShift command line tools:": [
  null,
  "Вхід до інтерфейсу інструментів командного рядка OpenShift:"
 ],
 "Log into the registry:": [
  null,
  "Вхід до реєстру:"
 ],
 "Logical Unit Number": [
  null,
  "Логічний номер модуля"
 ],
 "Login commands": [
  null,
  "Команди входу"
 ],
 "Logs": [
  null,
  "Журнали"
 ],
 "Machine ID": [
  null,
  "Ід. комп’ютера"
 ],
 "Manifest": [
  null,
  "Маніфест"
 ],
 "Medium": [
  null,
  "Носій"
 ],
 "Member of": [
  null,
  "Учасник"
 ],
 "Members": [
  null,
  "Учасники"
 ],
 "Membership": [
  null,
  "Участь"
 ],
 "Memory": [
  null,
  "Пам'ять"
 ],
 "Memory Utilization: $0%": [
  null,
  "Використання пам’яті: $0%"
 ],
 "Memory:": [
  null,
  "Пам’ять:"
 ],
 "Message": [
  null,
  "Повідомлення"
 ],
 "Metadata": [
  null,
  "Метадані"
 ],
 "Modify": [
  null,
  "Змінити"
 ],
 "Monitors": [
  null,
  "Монітори"
 ],
 "Mount Location": [
  null,
  "Місце монтування"
 ],
 "N/A": [
  null,
  "н/д"
 ],
 "NFS": [
  null,
  "NFS"
 ],
 "NFS Mount": [
  null,
  "Змонтована NFS"
 ],
 "Name": [
  null,
  "Назва"
 ],
 "Namespace": [
  null,
  "Простір назв"
 ],
 "Namespace cannot be empty.": [
  null,
  "Простір назв не може бути порожнім."
 ],
 "Network": [
  null,
  "Мережа"
 ],
 "New Group": [
  null,
  "Нова група"
 ],
 "New Project": [
  null,
  "Новий проект"
 ],
 "New image stream": [
  null,
  "Новий потік образу"
 ],
 "New project": [
  null,
  "Новий проект"
 ],
 "No": [
  null,
  "Ні"
 ],
 "No Pods are using this claim": [
  null,
  "Цю вимогу не використовує жоден кокон"
 ],
 "No Volume Bound": [
  null,
  "Не пов’язано тому"
 ],
 "No disks defined for this VM": [
  null,
  "Для цієї ВМ не визначено дисків"
 ],
 "No groups are present.": [
  null,
  "Немає груп."
 ],
 "No images pushed": [
  null,
  "Не вивантажено жодного образу"
 ],
 "No metadata file was selected. Please select a Kubernetes metadata file.": [
  null,
  "Не вибрано файл метаданих. Будь ласка, виберіть файл метаданих Kubernetes."
 ],
 "No nodes in cluster": [
  null,
  "У кластері немає вузлів"
 ],
 "No pods deployed": [
  null,
  "Коконів не розгорнуто"
 ],
 "No pods replicated": [
  null,
  "Реплік коконів не створено"
 ],
 "No pods scheduled": [
  null,
  "Коконів не заплановано"
 ],
 "No pods selected": [
  null,
  "Коконів не позначено"
 ],
 "No projects are present.": [
  null,
  "Немає проектів."
 ],
 "No users are present.": [
  null,
  "Немає користувачів."
 ],
 "No virtual machines": [
  null,
  "Немає віртуальних машин"
 ],
 "No volumes are present.": [
  null,
  "Немає томів."
 ],
 "No volumes in use": [
  null,
  "Немає використаних томів"
 ],
 "Node": [
  null,
  "Вузол"
 ],
 "Node:": [
  null,
  "Вузол:"
 ],
 "Nodes": [
  null,
  "Вузли"
 ],
 "Nodes are the machines that run your containers.": [
  null,
  "Вузли — комп’ютери, на яких запущено ваші контейнери."
 ],
 "None": [
  null,
  "Немає"
 ],
 "Not Available": [
  null,
  "Немає доступу"
 ],
 "Not Ready": [
  null,
  "Не готовий"
 ],
 "Not a valid number of replicas": [
  null,
  "Некоректна кількість реплік"
 ],
 "Not a valid value for Host": [
  null,
  "Некоректне значення вузла"
 ],
 "Not deployed": [
  null,
  "Не розгорнуто"
 ],
 "OS": [
  null,
  "ОС"
 ],
 "OS Versions": [
  null,
  "Версії ОС"
 ],
 "Ok": [
  null,
  "Гаразд"
 ],
 "Only files of size $0 MiB and less are supported": [
  null,
  "Підтримку передбачено лише для файлів розміру $0 МіБ або меншого"
 ],
 "Operating System": [
  null,
  "Операційна система"
 ],
 "Options": [
  null,
  "Параметри"
 ],
 "Overview": [
  null,
  "Огляд"
 ],
 "PD Name": [
  null,
  "Назва PD"
 ],
 "Partition": [
  null,
  "Розділ"
 ],
 "Password": [
  null,
  "Пароль"
 ],
 "Paste JSON below, ": [
  null,
  "Вставте JSON нижче, "
 ],
 "Path": [
  null,
  "Шлях"
 ],
 "Pending Volume Claims": [
  null,
  "Заявки щодо томів у черзі"
 ],
 "Persistent Volumes": [
  null,
  "Сталі томи"
 ],
 "Phase": [
  null,
  "Фаза"
 ],
 "Please create another namespace for $0 \"$1\"": [
  null,
  "Будь ласка, створіть інший простір назв для $0 «$1»"
 ],
 "Please provide a GlusterFS volume name": [
  null,
  "Будь ласка, вкажіть назву тому GlusterFS"
 ],
 "Please provide a username": [
  null,
  "Будь ласка, вкажіть ім’я користувача"
 ],
 "Please provide a valid NFS server": [
  null,
  "Будь ласка, вкажіть коректний сервер NFS"
 ],
 "Please provide a valid address": [
  null,
  "Будь ласка, вкажіть коректну адресу"
 ],
 "Please provide a valid filesystem type": [
  null,
  "Будь ласка, вкажіть коректний тип файлової системи"
 ],
 "Please provide a valid interface": [
  null,
  "Будь ласка, вкажіть коректний інтерфейс"
 ],
 "Please provide a valid logical unit number": [
  null,
  "Будь ласка, вкажіть коректну кількість логічних одиниць"
 ],
 "Please provide a valid name": [
  null,
  "Будь ласка, вкажіть коректну назву"
 ],
 "Please provide a valid namespace.": [
  null,
  "Будь ласка, вкажіть коректний простір назв."
 ],
 "Please provide a valid path": [
  null,
  "Будь ласка, вкажіть коректний шлях"
 ],
 "Please provide a valid qualified name": [
  null,
  "Будь ласка, вкажіть коректну повну назву"
 ],
 "Please provide a valid storage capacity.": [
  null,
  "Будь ласка, вкажіть коректну місткість сховища."
 ],
 "Please provide a valid target": [
  null,
  "Будь ласка, вкажіть коректне призначення"
 ],
 "Please select a valid access mode": [
  null,
  "Будь ласка, виберіть коректний режим доступу"
 ],
 "Please select a valid endpoint": [
  null,
  "Будь ласка, виберіть коректну кінцеву точку"
 ],
 "Please select a valid policy option.": [
  null,
  "Будь ласка, виберіть коректний варіант правил."
 ],
 "Please type an address": [
  null,
  "Будь ласка, введіть адресу"
 ],
 "Pod": [
  null,
  "Кокон"
 ],
 "Pod Address": [
  null,
  "Адреса коконів"
 ],
 "Pod Endpoints": [
  null,
  "Кінцеві точки коконів"
 ],
 "Pod Replicated": [
  null,
  "Створено репліку кокона"
 ],
 "Pod Selector": [
  null,
  "Вибір коконів"
 ],
 "Pod:": [
  null,
  "Кокон:"
 ],
 "Pods": [
  null,
  "Кокони"
 ],
 "Pods contain one or more containers that run together on a node, containing your application code.": [
  null,
  "Кокони містять один або декілька контейнерів, які працюють разом на вузлі, де міститься код вашої програми."
 ],
 "Pool Name": [
  null,
  "Назва буфера"
 ],
 "Populate": [
  null,
  "Заповнити"
 ],
 "Ports": [
  null,
  "Порти"
 ],
 "Private: Allow only specific users or groups to pull images": [
  null,
  "Приватний: дозволити отримувати образи лише вказаним користувачам або групам"
 ],
 "Project": [
  null,
  "Проект"
 ],
 "Project Members": [
  null,
  "Учасники проекту"
 ],
 "Project access policy allows anonymous users to pull images.": [
  null,
  "Правила доступу до проекту дозволяють анонімним користувачам отримувати образи."
 ],
 "Project access policy allows any authenticated user to pull images.": [
  null,
  "Правила доступу до проекту дозволяють усім розпізнаним користувачам отримувати образи."
 ],
 "Project access policy only allows specific members to access images.": [
  null,
  "Правила доступу до проекту дозволяють отримувати доступ до образів лише окремим користувачам."
 ],
 "Project:": [
  null,
  "Проект:"
 ],
 "Projects": [
  null,
  "Проекти"
 ],
 "Proxy Version": [
  null,
  "Версія проксі"
 ],
 "Pull an image:": [
  null,
  "Отримати образ:"
 ],
 "Pull from": [
  null,
  "Отримати з"
 ],
 "Pull specific tags from another image repository": [
  null,
  "Отримати вказані мітки з іншого сховища образів"
 ],
 "Push an image:": [
  null,
  "Вивантажити образ:"
 ],
 "Qualified Name": [
  null,
  "Повна назва"
 ],
 "Rados Block Device": [
  null,
  "Блоковий пристрій Rados"
 ],
 "Read Only": [
  null,
  "Лише читання"
 ],
 "Read and write from a single node": [
  null,
  "Читання і запис із одного вузла"
 ],
 "Read and write from multiple nodes": [
  null,
  "Читання і запис із декількох вузлів"
 ],
 "Read only from multiple nodes": [
  null,
  "Читання лише з декількох вузлів"
 ],
 "Readonly": [
  null,
  "Лише запис"
 ],
 "Ready": [
  null,
  "Готовий"
 ],
 "Reason": [
  null,
  "Підстава"
 ],
 "Reclaim Policy": [
  null,
  "Правила повторного заявлення"
 ],
 "Reconnect": [
  null,
  "Повторно з’єднатися"
 ],
 "Recycle": [
  null,
  "Повторний цикл"
 ],
 "Register": [
  null,
  "Зареєструвати"
 ],
 "Register New Volume": [
  null,
  "Зареєструвати новий том"
 ],
 "Register Persistent Volume": [
  null,
  "Зареєструвати сталий том"
 ],
 "Remote registry is insecure": [
  null,
  "Віддалений реєстр є незахищеним"
 ],
 "Remove": [
  null,
  "Вилучити"
 ],
 "Remove Group": [
  null,
  "Вилучити групу"
 ],
 "Remove Member": [
  null,
  "Вилучити члена"
 ],
 "Remove Role": [
  null,
  "Вилучити роль"
 ],
 "Remove User": [
  null,
  "Вилучити користувача"
 ],
 "Remove image tag": [
  null,
  "Вилучити мітку образу"
 ],
 "Remove membership": [
  null,
  "Вилучити запис участі"
 ],
 "Replicas": [
  null,
  "Репліки"
 ],
 "Replication Controller": [
  null,
  "Контролер реплікації"
 ],
 "Replication Controllers": [
  null,
  "Керування реплікацією"
 ],
 "Replication controllers dynamically create instances of pods from templates, and remove pods when necessary.": [
  null,
  "Контролери реплікації динамічно створюють екземпляри коконів із шаблонів і вилучають кокони, якщо потрібно."
 ],
 "Repository URL": [
  null,
  "Адреса сховища"
 ],
 "Requested": [
  null,
  "Запитано"
 ],
 "Requests": [
  null,
  "Запити"
 ],
 "Requires Authentication": [
  null,
  "Потрібне розпізнавання"
 ],
 "Resolve above errors to continue": [
  null,
  "Усуньте наведені вище помилки, щоб продовжити"
 ],
 "Restart Count": [
  null,
  "Кількість перезапусків"
 ],
 "Restart Policy": [
  null,
  "Правила перезапуску"
 ],
 "Retain": [
  null,
  "Зберегти"
 ],
 "Revision": [
  null,
  "Модифікація"
 ],
 "Role": [
  null,
  "Роль"
 ],
 "Roles": [
  null,
  "Ролі"
 ],
 "Route": [
  null,
  "Маршрут"
 ],
 "Routes": [
  null,
  "Маршрути"
 ],
 "Scheduled Pods": [
  null,
  "Заплановані кокони"
 ],
 "Scheduling Disabled": [
  null,
  "Планування вимкнено"
 ],
 "Secret": [
  null,
  "Секретний"
 ],
 "Secret File": [
  null,
  "Файл ключа"
 ],
 "Secret Name": [
  null,
  "Назва ключа"
 ],
 "Secret Volume": [
  null,
  "Секретний том"
 ],
 "Select Manifest File...": [
  null,
  "Вибір файла маніфесту…"
 ],
 "Select Member": [
  null,
  ""
 ],
 "Select Role": [
  null,
  ""
 ],
 "Select an object to see more details.": [
  null,
  "Виберіть об’єкт для перегляду ширшого спектра параметрів."
 ],
 "Server": [
  null,
  "Сервер"
 ],
 "Service": [
  null,
  "Служба"
 ],
 "Service Account": [
  null,
  "Обліковий запис служби"
 ],
 "Services": [
  null,
  "Служби"
 ],
 "Services group pods and provide a common DNS name and an optional, load-balanced IP address to access them.": [
  null,
  "Служби збирають у групи кокони і надають загальну назву DNS та додаткову, збалансовану за навантаженням IP-адресу для доступу до них."
 ],
 "Session": [
  null,
  "Сеанс"
 ],
 "Session Affinity": [
  null,
  "Спорідненість сеансу"
 ],
 "Share Name": [
  null,
  "Назва ресурсу"
 ],
 "Shared: Allow any authenticated user to pull images": [
  null,
  "Спільний: дозволити усім розпізнаним користувачам отримувати образи"
 ],
 "Shell": [
  null,
  "Оболонка"
 ],
 "Show all Containers": [
  null,
  "Показати усі контейнери"
 ],
 "Show all Deployment Configs": [
  null,
  "Показати усі налаштування розгортання"
 ],
 "Show all Nodes": [
  null,
  "Показати усі вузли"
 ],
 "Show all Persistent Volumes": [
  null,
  "Показати усі сталі томи"
 ],
 "Show all Pod Containers": [
  null,
  "Показати усі контейнери коконів"
 ],
 "Show all Pods": [
  null,
  "Показати усі кокони"
 ],
 "Show all Projects": [
  null,
  "Показати усі проекти"
 ],
 "Show all Replication Controllers": [
  null,
  "Показати усі контролери реплікації"
 ],
 "Show all Routes": [
  null,
  "Показати усі маршрути"
 ],
 "Show all Services": [
  null,
  "Показувати всі служби"
 ],
 "Show all image streams": [
  null,
  "Показати усіх потоки образів"
 ],
 "Show all images": [
  null,
  "Показати усі образи"
 ],
 "Since": [
  null,
  "З"
 ],
 "Size": [
  null,
  "Розмір"
 ],
 "Skip Certificate Verification": [
  null,
  "Пропустити перевірку сертифікатів"
 ],
 "Sorry, I don't know how to modify this volume": [
  null,
  "Вибачте, спосіб внесення змін до цього тому невідомий"
 ],
 "Source": [
  null,
  "Джерело"
 ],
 "State": [
  null,
  "Стан"
 ],
 "Status": [
  null,
  "Стан"
 ],
 "Strategy": [
  null,
  "Стратегія"
 ],
 "Sync all tags from a remote image repository": [
  null,
  "Синхронізувати усі мітки з віддаленого сховища образів"
 ],
 "System": [
  null,
  "Система"
 ],
 "TLS Termination": [
  null,
  "Переривання TLS"
 ],
 "Tags": [
  null,
  "Мітки"
 ],
 "Target": [
  null,
  "Призначення"
 ],
 "Target Portal": [
  null,
  "Портал призначення"
 ],
 "Target World Wide Names": [
  null,
  "WWN призначень"
 ],
 "Template": [
  null,
  "Шаблон"
 ],
 "The address contains invalid characters": [
  null,
  "У адресі містяться некоректні символи"
 ],
 "The container '{{ target }}' does not exist.": [
  null,
  "Контейнера «{{ target }}» не існує."
 ],
 "The deployment config '{{ target }}' does not exist.": [
  null,
  "Налаштувань розгортання «{{ target }}» не існує."
 ],
 "The group '{{ groupName }}' does not exist.": [
  null,
  "Групи «{{ groupName }}» не існує."
 ],
 "The maximum number of replicas is 128": [
  null,
  "Максимальною є кількість реплік 128"
 ],
 "The name contains invalid characters": [
  null,
  "У назві містяться некоректні символи"
 ],
 "The node '{{ target }}' does not exist.": [
  null,
  "Вузла «{{ target }}» не існує."
 ],
 "The node doesn't have enough disk space": [
  null,
  "На вузлі недостатньо простору на диску"
 ],
 "The node doesn't have enough free memory": [
  null,
  "На вузлі недостатньо вільної пам’яті"
 ],
 "The persistent volume '{{ target }}' does not exist.": [
  null,
  "Сталого тому «{{ target }}» не існує."
 ],
 "The pod '{{ target }}' does not exist.": [
  null,
  "Кокона «{{ target }}» не існує."
 ],
 "The project '{{ projName }}' does not exist.": [
  null,
  "Проекту «{{ projName }}» не існує."
 ],
 "The replication controller '{{ target }}' does not exist.": [
  null,
  "Контролера реплікації «{{ target }}» не існує."
 ],
 "The route '{{ target }}' does not exist.": [
  null,
  "Маршруту «{{ target }}» не існує."
 ],
 "The selected file is not a valid Kubernetes application manifest.": [
  null,
  "Вибраний файл не є коректним маніфестом програми Kubernetes."
 ],
 "The server uses a certificate signed by an unknown authority.": [
  null,
  "На сервері використовується сертифікат, підписаний невідомою службою сертифікації."
 ],
 "The service '{{ target }}' does not exist.": [
  null,
  "Служби «{{ target }}» не існує."
 ],
 "The user '{{ userName }}' does not exist.": [
  null,
  "Запису користувача «{{ userName }}» не існує."
 ],
 "This claim is in use. Deleting it may cause issues with the following pod:": [
  null,
  "Ця заявка використовується. Її вилучення може призвести до проблем із цим коконом:"
 ],
 "This option is for single node testing only – local storage will not work in a multi-node cluster": [
  null,
  "Цей параметр призначено лише для тестування окремих вузлів – локальне сховище не працюватиму у багатовузловому кластері"
 ],
 "This volume has been claimed by {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Deleting it will break that claim and may cause issues with any pods depending on it.": [
  null,
  "Цей том може бути заявлено для {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Його вилучення порушить цю заявку і може призвести до проблем із усіма коконами, які від нього залежать."
 ],
 "This volume has not been claimed": [
  null,
  "Цей том не заявлено"
 ],
 "Token": [
  null,
  "Елемент"
 ],
 "Topology": [
  null,
  "Топологія"
 ],
 "Triggers": [
  null,
  "Умовні зміни"
 ],
 "Troubleshoot": [
  null,
  "Діагностика проблем"
 ],
 "Trust this certificate for this connection": [
  null,
  "Довіряти цьому сертифікату для цього з’єднання"
 ],
 "Type": [
  null,
  "Тип"
 ],
 "Type:": [
  null,
  "Тип:"
 ],
 "Unable to decode Kubernetes application manifest.": [
  null,
  "Не вдалося декодувати маніфест програми Kubernetes."
 ],
 "Unable to read the Kubernetes application manifest. Code $0.": [
  null,
  "Не вдалося прочитати маніфест програми Kubernetes. Код $0."
 ],
 "Unavailable": [
  null,
  "Недоступний"
 ],
 "Unknown": [
  null,
  "Невідомий"
 ],
 "Updating $0...": [
  null,
  "Оновлення $0…"
 ],
 "Usage": [
  null,
  "Використання"
 ],
 "Usage metrics are available after the pod starts": [
  null,
  "Дані щодо користування стануть доступними після запуску кокона"
 ],
 "Used": [
  null,
  "Використано"
 ],
 "User": [
  null,
  "Користувач"
 ],
 "User or Group": [
  null,
  "Користувач або група"
 ],
 "Username": [
  null,
  "Користувач"
 ],
 "Users": [
  null,
  "Користувачі"
 ],
 "VM DELETE failed.": [
  null,
  "Не вдалося виконати дію DELETE для ВМ."
 ],
 "VM definition is not a valid JSON.": [
  null,
  "Визначення віртуальної машини не є коректним JSON."
 ],
 "VM definition is required.": [
  null,
  "Потрібне визначення віртуальної машини."
 ],
 "VM definition must be an object.": [
  null,
  "Визначення віртуальної машини має бути об'єктом."
 ],
 "Virtual Machines": [
  null,
  "Віртуальні машини"
 ],
 "Volume": [
  null,
  "Том"
 ],
 "Volume ID": [
  null,
  "Ід. тому"
 ],
 "Volume Name": [
  null,
  "Назва тому"
 ],
 "Volume Type": [
  null,
  "Тип тому"
 ],
 "Volumes": [
  null,
  "Томи"
 ],
 "Warning:": [
  null,
  "Попередження:"
 ],
 "Welcome to the Image Registry": [
  null,
  "Вітаємо у реєстрі образів"
 ],
 "When": [
  null,
  "Умова"
 ],
 "Yes": [
  null,
  "Так"
 ],
 "You can bypass the certificate check, but any data you send to the server could be intercepted by others.": [
  null,
  "Ви можете наказати пропустити перевірку сертифікатів, але якщо це буде зроблено, будь-які дані, які надсилатимуться на сервер, може бути перехоплено сторонніми особами."
 ],
 "You can deploy an application to your cluster.": [
  null,
  "Ви можете розгорнути програму на вашому кластері."
 ],
 "Your login credentials do not give you access to use the docker registry from the command line.": [
  null,
  "Ваші реєстраційні дані не дають вам доступу до реєстру docker з командного рядка."
 ],
 "bridge": [
  null,
  "місток"
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "crashed": [
  null,
  "аварійне завершення"
 ],
 "custom": [
  null,
  "нетиповий"
 ],
 "direct": [
  null,
  "безпосередньо"
 ],
 "disabled": [
  null,
  "вимкнено"
 ],
 "disk": [
  null,
  "диск"
 ],
 "down": [
  null,
  "нижче"
 ],
 "dying": [
  null,
  "вмирає"
 ],
 "eg: my-image-stream": [
  null,
  "приклад: my-image-stream"
 ],
 "enabled": [
  null,
  "увімкнено"
 ],
 "ethernet": [
  null,
  "ethernet"
 ],
 "host": [
  null,
  "вузол"
 ],
 "hostdev": [
  null,
  "пристрій осн. системи"
 ],
 "iSCSI": [
  null,
  "iSCSI"
 ],
 "idle": [
  null,
  "бездіяльний"
 ],
 "mcast": [
  null,
  "mcast"
 ],
 "n/a": [
  null,
  "н/д"
 ],
 "network": [
  null,
  "мережа"
 ],
 "no": [
  null,
  "ні"
 ],
 "none": [
  null,
  "немає"
 ],
 "paused": [
  null,
  "призупинено"
 ],
 "pending volume claims": [
  null,
  "запити тому у черзі"
 ],
 "running": [
  null,
  "працює"
 ],
 "server": [
  null,
  "сервер"
 ],
 "show less": [
  null,
  "показати менше"
 ],
 "show more": [
  null,
  "показати більше"
 ],
 "shut off": [
  null,
  "вимкнути"
 ],
 "shutdown": [
  null,
  "завершити роботу"
 ],
 "suspended (PM)": [
  null,
  "призупинено (PM)"
 ],
 "udp": [
  null,
  "udp"
 ],
 "up": [
  null,
  "вище"
 ],
 "upload a JSON file": [
  null,
  "вивантажити файл JSON"
 ],
 "user": [
  null,
  "користувач"
 ],
 "vCPUs:": [
  null,
  "vCPU:"
 ],
 "vhostuser": [
  null,
  "vhostuser"
 ],
 "yes": [
  null,
  "так"
 ]
}));
