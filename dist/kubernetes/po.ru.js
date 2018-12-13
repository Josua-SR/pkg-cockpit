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
 " 1\"Do you want to delete the following Nodes?": [
  null,
  " 1 «Вы хотите удалить следующие узлы?"
 ],
 "$0% Free": [
  "$0% Free",
  "$0% Свободно",
  "$0% Свободно",
  "$0% Свободно"
 ],
 "$0% Used": [
  "$0% Used",
  "$0% Используемый",
  "$0% Используемый",
  "$0% Используемый"
 ],
 "AWS Elastic Block Store": [
  null,
  "Магазин эластичных блоков AWS"
 ],
 "Access Modes": [
  null,
  "Режимы доступа"
 ],
 "Access Policy": [
  null,
  "Политика доступа"
 ],
 "Actual": [
  null,
  "фактический"
 ],
 "Add": [
  null,
  "Добавить"
 ],
 "Add Cluster Node": [
  null,
  "Добавить кластерный узел"
 ],
 "Add Group": [
  null,
  "Добавить группу"
 ],
 "Add Kubernetes Node": [
  null,
  "Добавить узел Kubernetes"
 ],
 "Add Member": [
  null,
  "Добавить члена"
 ],
 "Add Membership": [
  null,
  "Добавить членство"
 ],
 "Add New Cluster": [
  null,
  "Добавить новый кластер"
 ],
 "Add New User": [
  null,
  "Добавить пользователя"
 ],
 "Add Role": [
  null,
  "Добавить роль"
 ],
 "Add User": [
  null,
  "Добавить пользователя"
 ],
 "Add membership": [
  null,
  "Добавить членство"
 ],
 "Address": [
  null,
  "Адрес"
 ],
 "Addresses": [
  null,
  "Адреса"
 ],
 "Adjust": [
  null,
  "регулировать"
 ],
 "Adjust Persistent Volume '{{ item.metadata.name }}'": [
  null,
  "Отрегулировать постоянный объем \"{{ item.metadata.name }}'"
 ],
 "Adjust Replication Controller {{ item.metadata.name }}": [
  null,
  "Настройка контроллера репликации {{ item.metadata.name }}"
 ],
 "Adjust Route": [
  null,
  "Отрегулировать маршрут"
 ],
 "Adjust Service": [
  null,
  "Настройка службы"
 ],
 "Admin": [
  null,
  "Администратор"
 ],
 "All Projects": [
  null,
  "Все проекты"
 ],
 "All Types": [
  null,
  "Все типы"
 ],
 "All healthy": [
  null,
  "Все здоровые"
 ],
 "All images": [
  null,
  "Все изображения"
 ],
 "All in use": [
  null,
  "Все в использовании"
 ],
 "All running": [
  null,
  "Все работает"
 ],
 "Annotations": [
  null,
  "Аннотации"
 ],
 "Anonymous: Allow all unauthenticated users to pull images": [
  null,
  "Аноним: разрешить всем пользователям, не прошедшим проверку подлинности, вытащить изображения"
 ],
 "Authentication": [
  null,
  "Проверка доступа"
 ],
 "Azure": [
  null,
  "лазурь"
 ],
 "Boot ID": [
  null,
  "Идентификатор загрузки"
 ],
 "CPU": [
  null,
  "ЦП"
 ],
 "CPU Utilization: $0%": [
  null,
  "Использование ЦП: $0%"
 ],
 "Cancel": [
  null,
  "Отмена"
 ],
 "Capacity": [
  null,
  "Объем"
 ],
 "Ceph Filesystem Mount": [
  null,
  "Крепление файловой системы Ceph"
 ],
 "Ceph Monitors": [
  null,
  "Мониторы Ceph"
 ],
 "Change": [
  null,
  "Изменить"
 ],
 "Change User": [
  null,
  "Сменить пользователя"
 ],
 "Change image stream": [
  null,
  "Изменить поток изображений"
 ],
 "Change project": [
  null,
  "Изменить проект"
 ],
 "Cinder": [
  null,
  "окалина"
 ],
 "Claim": [
  null,
  "Взять"
 ],
 "Claim Name": [
  null,
  "Название претензии"
 ],
 "Client Certificate": [
  null,
  "Сертификат клиента"
 ],
 "Cluster": [
  null,
  "Кластер"
 ],
 "Configuration": [
  null,
  "Конфигурация"
 ],
 "Configure Flannel networking": [
  null,
  "Настройка сети Flannel"
 ],
 "Configure Kubelet and Proxy": [
  null,
  "Настройка Kubelet и прокси"
 ],
 "Connect": [
  null,
  "Подключаться"
 ],
 "Connecting...": [
  null,
  "Подключение..."
 ],
 "Connection Error": [
  null,
  "Ошибка соединения"
 ],
 "Connection Error: $0": [
  null,
  "Ошибка соединения: $0"
 ],
 "Connection Settings": [
  null,
  "Настройки соединения"
 ],
 "Container": [
  null,
  "Контейнер"
 ],
 "Container ID": [
  null,
  "Идентификатор контейнера"
 ],
 "Container Runtime Version": [
  null,
  "Версия исполнения контейнера"
 ],
 "Containers": [
  null,
  "Контейнеры"
 ],
 "Could not list services": [
  null,
  "Не удалось перечислить сервисы"
 ],
 "Couldn't connect to server": [
  null,
  "Не удалось подключиться к серверу"
 ],
 "Couldn't find running API server": [
  null,
  "Не удалось найти запущенный сервер API"
 ],
 "Create": [
  null,
  "Создать"
 ],
 "Create empty image stream": [
  null,
  "Создать пустой поток изображений"
 ],
 "Create image stream": [
  null,
  "Создание потока изображений"
 ],
 "Created": [
  null,
  "Создан"
 ],
 "DNS Policy": [
  null,
  "Политика DNS"
 ],
 "Delete": [
  null,
  "Удалить"
 ],
 "Delete Node": [
  null,
  "Удалить узел"
 ],
 "Delete Persistent Volume": [
  null,
  "Удалить постоянный том"
 ],
 "Delete Persistent Volume Claim": [
  null,
  "Удалить постоянную заявку на объем"
 ],
 "Delete Project": [
  null,
  "Удалить проект"
 ],
 "Delete Selected": [
  null,
  "Удалить выбранное"
 ],
 "Delete image stream": [
  null,
  "Удалить поток изображений"
 ],
 "Delete {{ item.kind }}": [
  null,
  "удалять {{ item.kind }}"
 ],
 "Deleting a Pod will kill all associated containers. Pods may be automatically created again in some cases.": [
  null,
  "Удаление Pod приведет к уничтожению всех связанных контейнеров. В некоторых случаях в будущем могут быть созданы автоматически."
 ],
 "Deploy": [
  null,
  "Развертывание"
 ],
 "Deploy Application": [
  null,
  "Развертывание приложения"
 ],
 "Deployment Causes": [
  null,
  "Причины развертывания"
 ],
 "Deployment Config": [
  null,
  "Конфигурация развертывания"
 ],
 "Deployment Configs": [
  null,
  "Конфигурации развертывания"
 ],
 "Description": [
  null,
  "Описание"
 ],
 "Details": [
  null,
  "Подробности"
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
  "Использование диска: $0%"
 ],
 "Display name": [
  null,
  "Отображаемое имя"
 ],
 "Do you want to add the role '{{ fields.displayRole }}'?": [
  null,
  "Вы хотите добавить роль '{{ fields.displayRole }}«?"
 ],
 "Do you want to delete the '{{stream.metadata.namespace}}/{{stream.metadata.name}}' image stream?": [
  null,
  "Вы хотите удалить '{{stream.metadata.namespace}}/{{stream.metadata.name}}'поток изображений?"
 ],
 "Do you want to delete the Persistent Volume '{{item.metadata.name}}'?": [
  null,
  "Вы хотите удалить Persistent Volume '{{item.metadata.name}}«?"
 ],
 "Do you want to delete the Persistent Volume Claim '{{item.metadata.name}}'?": [
  null,
  "Вы хотите удалить Persistent Volume Claim '{{item.metadata.name}}«?"
 ],
 "Do you want to delete the {{ item.kind }} '{{item.metadata.name}}'?": [
  null,
  "Вы хотите удалить {{ item.kind }} '{{item.metadata.name}}«?"
 ],
 "Do you want to delete this Node?": [
  null,
  "Вы хотите удалить этот узел?"
 ],
 "Do you want to remove the image tagged as '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?": [
  null,
  "Вы хотите удалить изображение, помеченное как '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}«?"
 ],
 "Do you want to remove the role '{{ fields.displayRole }}' from member {{ fields.member.metadata.name }}?": [
  null,
  "Вы хотите удалить роль '{{ fields.displayRole }}'от участника {{ fields.member.metadata.name }}?"
 ],
 "Don't pull images automatically": [
  null,
  "Не извлекайте изображения автоматически"
 ],
 "Driver": [
  null,
  "Драйвер"
 ],
 "Empty Directory": [
  null,
  "Пустой каталог"
 ],
 "Endpoint": [
  null,
  "Конечная точка"
 ],
 "Endpoint Name": [
  null,
  "Название конечной точки"
 ],
 "Endpoints": [
  null,
  "Endpoints"
 ],
 "Environment": [
  null,
  "Окружение"
 ],
 "Error getting certificate details: $0": [
  null,
  "Ошибка получения сведений о сертификате: $0"
 ],
 "Error writing kubectl config": [
  null,
  "Ошибка записи конфигурации kubectl"
 ],
 "Fibre Channel": [
  null,
  "Fibre Channel"
 ],
 "Filesystem Type": [
  null,
  "Тип файловой системы"
 ],
 "Flex": [
  null,
  "сгибать"
 ],
 "Flocker": [
  null,
  "Flocker"
 ],
 "Flocker Dataset Name": [
  null,
  "Название набора Flocker"
 ],
 "GCE Persistent Disk": [
  null,
  "Постоянный диск GCE"
 ],
 "Git Repository": [
  null,
  "Репозиторий Git"
 ],
 "Gluster FS": [
  null,
  "Gluster FS"
 ],
 "GlusterFS": [
  null,
  "GlusterFS"
 ],
 "Grant additional push or admin access to specific members below.": [
  null,
  "Предоставьте дополнительный push или админ доступ к определенным членам ниже."
 ],
 "Group Members": [
  null,
  "Участники группы"
 ],
 "Group or Project": [
  null,
  "Группа или проект"
 ],
 "Groups": [
  null,
  "Группы"
 ],
 "Host": [
  null,
  "Узел"
 ],
 "Host Path": [
  null,
  "Путь хоста"
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
  "Тождества"
 ],
 "Identity": [
  null,
  "Идентификация"
 ],
 "Image": [
  null,
  "Изображение"
 ],
 "Image ID": [
  null,
  "ID образа"
 ],
 "Image Name": [
  null,
  "Название изображения"
 ],
 "Image Registry": [
  null,
  "Реестр изображений"
 ],
 "Image Stream": [
  null,
  "Поток изображений"
 ],
 "Image commands": [
  null,
  "Команды изображения"
 ],
 "Images": [
  null,
  "Образы"
 ],
 "Images by project": [
  null,
  "Изображения по проекту"
 ],
 "Images pushed recently": [
  null,
  "Недавно отодвинутые изображения"
 ],
 "In order to begin pushing images to the registry, use the commands below.": [
  null,
  "Чтобы начать нажимать изображения в реестр, используйте приведенные ниже команды."
 ],
 "In order to begin pushing images to the registry, you need to create a project.": [
  null,
  "Чтобы начать нажимать изображения в реестр, вам нужно создать проект."
 ],
 "Interface": [
  null,
  "Интерфейс"
 ],
 "Kernel Version": [
  null,
  "Версия ядра"
 ],
 "Key Ring Path": [
  null,
  "Путь к ключу"
 ],
 "Kubelet Version": [
  null,
  "Версия Kubelet"
 ],
 "Kubernetes Cluster": [
  null,
  "Кластер Кубернете"
 ],
 "Labels": [
  null,
  "Метки"
 ],
 "Last Heartbeat": [
  null,
  "Последнее сердцебиение"
 ],
 "Last Status Change": [
  null,
  "Последнее изменение статуса"
 ],
 "Latest Version": [
  null,
  "Последняя версия"
 ],
 "Log into OpenShift command line tools:": [
  null,
  "Войдите в инструменты командной строки OpenShift:"
 ],
 "Log into the registry:": [
  null,
  "Войдите в реестр:"
 ],
 "Logical Unit Number": [
  null,
  "Номер логического блока"
 ],
 "Login commands": [
  null,
  "Команды входа"
 ],
 "Logs": [
  null,
  "Журналы"
 ],
 "Machine ID": [
  null,
  "ИД машины"
 ],
 "Manifest": [
  null,
  "Манифест"
 ],
 "Medium": [
  null,
  "Средний"
 ],
 "Member of": [
  null,
  "Член"
 ],
 "Members": [
  null,
  "члены"
 ],
 "Membership": [
  null,
  "Состав"
 ],
 "Memory": [
  null,
  "Память"
 ],
 "Memory Utilization: $0%": [
  null,
  "Использование памяти: $0%"
 ],
 "Message": [
  null,
  "Сообщение"
 ],
 "Metadata": [
  null,
  "Метаданные"
 ],
 "Modify": [
  null,
  "Изменить"
 ],
 "Monitors": [
  null,
  "Мониторы"
 ],
 "Mount Location": [
  null,
  "Место установки"
 ],
 "NFS": [
  null,
  "NFS"
 ],
 "NFS Mount": [
  null,
  "Крепление NFS"
 ],
 "Name": [
  null,
  "Имя"
 ],
 "Namespace": [
  null,
  "Пространство имен"
 ],
 "Namespace cannot be empty.": [
  null,
  "Пространство имен не может быть пустым."
 ],
 "Network": [
  null,
  "Сеть"
 ],
 "New Group": [
  null,
  "Новая группа"
 ],
 "New Project": [
  null,
  "Создать проект"
 ],
 "New image stream": [
  null,
  "Новый поток изображений"
 ],
 "New project": [
  null,
  "Новый проект"
 ],
 "No": [
  null,
  "Нет"
 ],
 "No Pods are using this claim": [
  null,
  "Нет, Pods используют это требование"
 ],
 "No Volume Bound": [
  null,
  "Нет ограничения по объему"
 ],
 "No groups are present.": [
  null,
  "Нет групп."
 ],
 "No images pushed": [
  null,
  "Изображения не сдвинуты"
 ],
 "No metadata file was selected. Please select a Kubernetes metadata file.": [
  null,
  "Файл метаданных не выбран. Выберите файл метаданных Kubernetes."
 ],
 "No nodes in cluster": [
  null,
  "Нет узлов в кластере"
 ],
 "No pods deployed": [
  null,
  "Не размещены контейнеры"
 ],
 "No pods replicated": [
  null,
  "Не копируются стручки"
 ],
 "No pods scheduled": [
  null,
  "Нет стручков, запланированных"
 ],
 "No pods selected": [
  null,
  "Не выбраны стручки"
 ],
 "No projects are present.": [
  null,
  "Проекты отсутствуют."
 ],
 "No users are present.": [
  null,
  "Пользователей нет."
 ],
 "No volumes are present.": [
  null,
  "Нет томов."
 ],
 "No volumes in use": [
  null,
  "Нет используемых объемов"
 ],
 "Node": [
  null,
  "Узел"
 ],
 "Nodes": [
  null,
  "Вершины"
 ],
 "Nodes are the machines that run your containers.": [
  null,
  "Узлы - это машины, которые запускают ваши контейнеры."
 ],
 "None": [
  null,
  "Нет"
 ],
 "Not Ready": [
  null,
  "Не готов"
 ],
 "Not a valid number of replicas": [
  null,
  "Недействительное количество копий"
 ],
 "Not a valid value for Host": [
  null,
  "Недействительное значение для Host"
 ],
 "Not deployed": [
  null,
  "Не развернуто"
 ],
 "OS": [
  null,
  "ОС"
 ],
 "OS Versions": [
  null,
  "Версии ОС"
 ],
 "Operating System": [
  null,
  "Операционная система"
 ],
 "Options": [
  null,
  "Параметры"
 ],
 "Overview": [
  null,
  "Обзор"
 ],
 "PD Name": [
  null,
  "Имя PD"
 ],
 "Partition": [
  null,
  "раздел"
 ],
 "Password": [
  null,
  "Пароль"
 ],
 "Path": [
  null,
  "Путь"
 ],
 "Pending Volume Claims": [
  null,
  "Ожидающие заявки на объем"
 ],
 "Persistent Volumes": [
  null,
  "Стойкие тома"
 ],
 "Phase": [
  null,
  "фаза"
 ],
 "Please create another namespace for $0 \"$1\"": [
  null,
  "Создайте другое пространство имен для $0 \"$1\""
 ],
 "Please provide a GlusterFS volume name": [
  null,
  "Укажите имя тома GlusterFS"
 ],
 "Please provide a username": [
  null,
  "Укажите имя пользователя"
 ],
 "Please provide a valid NFS server": [
  null,
  "Укажите действующий сервер NFS"
 ],
 "Please provide a valid address": [
  null,
  "Укажите действительный адрес"
 ],
 "Please provide a valid filesystem type": [
  null,
  "Укажите действительный тип файловой системы"
 ],
 "Please provide a valid interface": [
  null,
  "Укажите действующий интерфейс"
 ],
 "Please provide a valid logical unit number": [
  null,
  "Укажите действительный номер логической единицы"
 ],
 "Please provide a valid name": [
  null,
  "Укажите действующее имя"
 ],
 "Please provide a valid namespace.": [
  null,
  "Укажите действующее пространство имен."
 ],
 "Please provide a valid path": [
  null,
  "Укажите действующий путь"
 ],
 "Please provide a valid qualified name": [
  null,
  "Укажите действующее квалифицированное имя"
 ],
 "Please provide a valid storage capacity.": [
  null,
  "Укажите допустимую емкость."
 ],
 "Please provide a valid target": [
  null,
  "Укажите действительную цель"
 ],
 "Please select a valid access mode": [
  null,
  "Выберите действительный режим доступа"
 ],
 "Please select a valid endpoint": [
  null,
  "Выберите действительную конечную точку"
 ],
 "Please select a valid policy option.": [
  null,
  "Выберите действительный вариант политики."
 ],
 "Please type an address": [
  null,
  "Введите адрес"
 ],
 "Pod": [
  null,
  "стручок"
 ],
 "Pod Address": [
  null,
  "Pod Адрес"
 ],
 "Pod Endpoints": [
  null,
  "Конечные точки Pod"
 ],
 "Pod Replicated": [
  null,
  "Подрепливый"
 ],
 "Pod Selector": [
  null,
  "Pod Selector"
 ],
 "Pods": [
  null,
  "Бобы"
 ],
 "Pods contain one or more containers that run together on a node, containing your application code.": [
  null,
  "Pods содержат один или несколько контейнеров, которые работают вместе на узле, содержащем ваш код приложения."
 ],
 "Pool Name": [
  null,
  "Имя пула"
 ],
 "Populate": [
  null,
  "населять"
 ],
 "Ports": [
  null,
  "Порты"
 ],
 "Private: Allow only specific users or groups to pull images": [
  null,
  "Закрыто: разрешать только определенным пользователям или группам вытягивать изображения"
 ],
 "Project": [
  null,
  "Проект"
 ],
 "Project Members": [
  null,
  "Участники проекта"
 ],
 "Project access policy allows anonymous users to pull images.": [
  null,
  "Политика доступа к проекту позволяет анонимным пользователям вынимать изображения."
 ],
 "Project access policy allows any authenticated user to pull images.": [
  null,
  "Политика доступа к проекту позволяет любому аутентифицированному пользователю извлекать изображения."
 ],
 "Project access policy only allows specific members to access images.": [
  null,
  "Политика доступа к проекту позволяет конкретным участникам получать доступ к изображениям."
 ],
 "Project:": [
  null,
  "Проект:"
 ],
 "Projects": [
  null,
  "Проекты"
 ],
 "Proxy Version": [
  null,
  "Версия прокси"
 ],
 "Pull an image:": [
  null,
  "Потяните изображение:"
 ],
 "Pull from": [
  null,
  "Вытянуть"
 ],
 "Pull specific tags from another image repository": [
  null,
  "Вытяните определенные теги из другого хранилища изображений"
 ],
 "Push an image:": [
  null,
  "Нажмите изображение:"
 ],
 "Qualified Name": [
  null,
  "Квалифицированное имя"
 ],
 "Rados Block Device": [
  null,
  "Блочное устройство Rados"
 ],
 "Read Only": [
  null,
  "Только чтение"
 ],
 "Read and write from a single node": [
  null,
  "Чтение и запись с одного узла"
 ],
 "Read and write from multiple nodes": [
  null,
  "Чтение и запись с нескольких узлов"
 ],
 "Read only from multiple nodes": [
  null,
  "Только чтение из нескольких узлов"
 ],
 "Ready": [
  null,
  "Готов"
 ],
 "Reason": [
  null,
  "Основание"
 ],
 "Reclaim Policy": [
  null,
  "Политика возврата"
 ],
 "Reconnect": [
  null,
  "Заново"
 ],
 "Recycle": [
  null,
  "Рециркулировать"
 ],
 "Register": [
  null,
  "Регистрация"
 ],
 "Register New Volume": [
  null,
  "Зарегистрировать новый том"
 ],
 "Register Persistent Volume": [
  null,
  "Регистрировать постоянный объем"
 ],
 "Remote registry is insecure": [
  null,
  "Удаленный реестр небезопасен"
 ],
 "Remove": [
  null,
  "Удалить зону"
 ],
 "Remove Group": [
  null,
  "Удалить группу"
 ],
 "Remove Member": [
  null,
  "Удалить участник"
 ],
 "Remove Role": [
  null,
  "Удалить роль"
 ],
 "Remove User": [
  null,
  "Удалить пользователя"
 ],
 "Remove image tag": [
  null,
  "Удалить тег изображения"
 ],
 "Remove membership": [
  null,
  "Удалить членство"
 ],
 "Replicas": [
  null,
  "Реплики"
 ],
 "Replication Controller": [
  null,
  "Контроллер репликации"
 ],
 "Replication Controllers": [
  null,
  "Контроллеры репликации"
 ],
 "Replication controllers dynamically create instances of pods from templates, and remove pods when necessary.": [
  null,
  "Контроллеры репликации динамически создают экземпляры контейнеров из шаблонов и удаляют контейнеры, когда это необходимо."
 ],
 "Repository URL": [
  null,
  "Адрес репозитория"
 ],
 "Requested": [
  null,
  "запрошенный"
 ],
 "Requests": [
  null,
  "Запросы"
 ],
 "Requires Authentication": [
  null,
  "Требуется аутентификация"
 ],
 "Restart Count": [
  null,
  "Количество перезапуска"
 ],
 "Restart Policy": [
  null,
  "Политика перезагрузки"
 ],
 "Retain": [
  null,
  "сохранить"
 ],
 "Revision": [
  null,
  "Версия"
 ],
 "Role": [
  null,
  "Роль"
 ],
 "Roles": [
  null,
  "Роли"
 ],
 "Route": [
  null,
  "маршрут"
 ],
 "Routes": [
  null,
  "Маршруты"
 ],
 "Scheduled Pods": [
  null,
  "Запланированные"
 ],
 "Scheduling Disabled": [
  null,
  "Планирование отключено"
 ],
 "Secret": [
  null,
  "Секретно"
 ],
 "Secret File": [
  null,
  "Секретный файл"
 ],
 "Secret Name": [
  null,
  "Секретное имя"
 ],
 "Secret Volume": [
  null,
  "Секретный объем"
 ],
 "Select Manifest File...": [
  null,
  "Выберите Файл манифеста ..."
 ],
 "Select Member": [
  null,
  "Выберите участника"
 ],
 "Select Role": [
  null,
  "Выберите роль"
 ],
 "Select an object to see more details.": [
  null,
  "Выберите объект, чтобы увидеть более подробную информацию."
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
  "Счет службы"
 ],
 "Services": [
  null,
  "Службы"
 ],
 "Services group pods and provide a common DNS name and an optional, load-balanced IP address to access them.": [
  null,
  "Группы услуг и предоставить общее DNS-имя и дополнительный, сбалансированный по нагрузке IP-адрес для доступа к ним."
 ],
 "Session Affinity": [
  null,
  "Сессии"
 ],
 "Share Name": [
  null,
  "Поделиться именем"
 ],
 "Shared: Allow any authenticated user to pull images": [
  null,
  "Shared: разрешить любому аутентифицированному пользователю вытягивать изображения"
 ],
 "Shell": [
  null,
  "Оболочка"
 ],
 "Show all Containers": [
  null,
  "Показать все контейнеры"
 ],
 "Show all Deployment Configs": [
  null,
  "Показать все конфигурации развертывания"
 ],
 "Show all Nodes": [
  null,
  "Показать все узлы"
 ],
 "Show all Persistent Volumes": [
  null,
  "Показать все постоянные тома"
 ],
 "Show all Pod Containers": [
  null,
  "Показать все Под Контейнеры"
 ],
 "Show all Pods": [
  null,
  "Показать все Pods"
 ],
 "Show all Projects": [
  null,
  "Показать все проекты"
 ],
 "Show all Replication Controllers": [
  null,
  "Показать все контроллеры репликации"
 ],
 "Show all Routes": [
  null,
  "Показать все маршруты"
 ],
 "Show all Services": [
  null,
  "Показать все Услуги"
 ],
 "Show all image streams": [
  null,
  "Показать все потоки изображений"
 ],
 "Show all images": [
  null,
  "Показать все изображения"
 ],
 "Since": [
  null,
  "поскольку"
 ],
 "Size": [
  null,
  "Размер"
 ],
 "Skip Certificate Verification": [
  null,
  "Пропустить сертификацию сертификата"
 ],
 "Sorry, I don't know how to modify this volume": [
  null,
  "Извините, я не знаю, как изменить этот том"
 ],
 "State": [
  null,
  "Состояние"
 ],
 "Status": [
  null,
  "Состояние"
 ],
 "Strategy": [
  null,
  "стратегия"
 ],
 "Sync all tags from a remote image repository": [
  null,
  "Синхронизировать все теги из удаленного хранилища изображений"
 ],
 "TLS Termination": [
  null,
  "Прекращение TLS"
 ],
 "Tags": [
  null,
  "Теги"
 ],
 "Target": [
  null,
  "Целевой"
 ],
 "Target Portal": [
  null,
  "Целевой портал"
 ],
 "Target World Wide Names": [
  null,
  "Целевые всемирные имена"
 ],
 "Template": [
  null,
  "Шаблон"
 ],
 "The address contains invalid characters": [
  null,
  "Адрес содержит недопустимые символы"
 ],
 "The container '{{ target }}' does not exist.": [
  null,
  "Контейнер '{{ target }}' не существует."
 ],
 "The deployment config '{{ target }}' does not exist.": [
  null,
  "Конфигурация развертывания '{{ target }}' не существует."
 ],
 "The group '{{ groupName }}' does not exist.": [
  null,
  "Группа '{{ groupName }}' не существует."
 ],
 "The maximum number of replicas is 128": [
  null,
  "Максимальное количество реплик - 128"
 ],
 "The name contains invalid characters": [
  null,
  "Имя содержит недопустимые символы"
 ],
 "The node '{{ target }}' does not exist.": [
  null,
  "Узел '{{ target }}' не существует."
 ],
 "The node doesn't have enough disk space": [
  null,
  "У узла недостаточно места на диске"
 ],
 "The node doesn't have enough free memory": [
  null,
  "У узла недостаточно свободной памяти"
 ],
 "The persistent volume '{{ target }}' does not exist.": [
  null,
  "Постоянный том \"{{ target }}' не существует."
 ],
 "The pod '{{ target }}' does not exist.": [
  null,
  "Под стручок '{{ target }}' не существует."
 ],
 "The project '{{ projName }}' does not exist.": [
  null,
  "Проект '{{ projName }}' не существует."
 ],
 "The replication controller '{{ target }}' does not exist.": [
  null,
  "Контроллер репликации '{{ target }}' не существует."
 ],
 "The route '{{ target }}' does not exist.": [
  null,
  "Маршрут \"{{ target }}' не существует."
 ],
 "The selected file is not a valid Kubernetes application manifest.": [
  null,
  "Выбранный файл не является допустимым манифестом приложения Kubernetes."
 ],
 "The server uses a certificate signed by an unknown authority.": [
  null,
  "Сервер использует сертификат, подписанный неизвестным органом."
 ],
 "The service '{{ target }}' does not exist.": [
  null,
  "Сервис '{{ target }}' не существует."
 ],
 "The user '{{ userName }}' does not exist.": [
  null,
  "Пользователь '{{ userName }}' не существует."
 ],
 "This claim is in use. Deleting it may cause issues with the following pod:": [
  null,
  "Это требование используется. При удалении это может вызвать проблемы со следующим контейнером:"
 ],
 "This option is for single node testing only – local storage will not work in a multi-node cluster": [
  null,
  "Эта опция предназначена только для тестирования только одного узла - локальное хранилище не будет работать в многоузловом кластере"
 ],
 "This volume has been claimed by {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Deleting it will break that claim and may cause issues with any pods depending on it.": [
  null,
  "Этот том был {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}При удалении это нарушит это требование и может вызвать проблемы с любыми контейнерами в зависимости от этого."
 ],
 "This volume has not been claimed": [
  null,
  "Этот том не был заявлен"
 ],
 "Token": [
  null,
  "Токен"
 ],
 "Topology": [
  null,
  "Топология"
 ],
 "Triggers": [
  null,
  "Триггеры"
 ],
 "Troubleshoot": [
  null,
  "Диагностика"
 ],
 "Trust this certificate for this connection": [
  null,
  "Доверяйте этому сертификату для этого соединения"
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
  "Не удалось декодировать манифест приложения Kubernetes."
 ],
 "Unable to read the Kubernetes application manifest. Code $0.": [
  null,
  "Не удалось прочитать манифест приложения Kubernetes. Код $0"
 ],
 "Unavailable": [
  null,
  "Недоступно"
 ],
 "Unknown": [
  null,
  "Неизвестно"
 ],
 "Updating $0...": [
  null,
  "обновление $0..."
 ],
 "Used": [
  null,
  "Использовано"
 ],
 "User": [
  null,
  "Пользователь"
 ],
 "User or Group": [
  null,
  "Пользователь или группа"
 ],
 "Username": [
  null,
  "Имя пользователя"
 ],
 "Users": [
  null,
  "Пользователи"
 ],
 "Volume": [
  null,
  "Громкость"
 ],
 "Volume ID": [
  null,
  "Идент. Объема"
 ],
 "Volume Name": [
  null,
  "Название тома"
 ],
 "Volume Type": [
  null,
  "Тип тома"
 ],
 "Volumes": [
  null,
  "Список томов"
 ],
 "Warning:": [
  null,
  "Предупреждение:"
 ],
 "Welcome to the Image Registry": [
  null,
  "Добро пожаловать в реестр изображений"
 ],
 "When": [
  null,
  "Когда"
 ],
 "Yes": [
  null,
  "Да"
 ],
 "You can bypass the certificate check, but any data you send to the server could be intercepted by others.": [
  null,
  "Вы можете обойти проверку сертификата, но любые данные, которые вы отправляете на сервер, могут быть перехвачены другими."
 ],
 "You can deploy an application to your cluster.": [
  null,
  "Вы можете развернуть приложение в своем кластере."
 ],
 "Your login credentials do not give you access to use the docker registry from the command line.": [
  null,
  "Ваши учетные данные не дают вам доступ к реестру докеров из командной строки."
 ],
 "eg: my-image-stream": [
  null,
  "например: my-image-stream"
 ],
 "no": [
  null,
  "нет"
 ],
 "none": [
  null,
  "нет"
 ],
 "pending volume claims": [
  null,
  "ожидающие заявки на объем"
 ],
 "yes": [
  null,
  "да"
 ]
}));
