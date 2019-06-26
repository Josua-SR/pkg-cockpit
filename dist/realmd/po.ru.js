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
 "$0 is not available from any repository.": [
  null,
  "$0 недоступен из какого-либо репозитория."
 ],
 "$0 will be installed.": [
  null,
  "$0 будет установлен."
 ],
 "Additional packages:": [
  null,
  "Дополнительные пакеты:"
 ],
 "Administrator Password": [
  null,
  "Пароль администратора"
 ],
 "After leaving the domain, only users with local credentials will be able to log into this machine. This may also affect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  "После выхода из домена только пользователи с локальными учётными данными смогут выполнить вход в эту систему. Это также может повлиять и на другие службы, поскольку параметры разрешения DNS и список доверенных центров сертификации могут измениться."
 ],
 "Authentication": [
  null,
  "Проверка подлинности"
 ],
 "Automatic": [
  null,
  "Автоматически"
 ],
 "Cancel": [
  null,
  "Отмена"
 ],
 "Checking installed software": [
  null,
  "Проверка установленного программного обеспечения"
 ],
 "Client Software": [
  null,
  "Клиентское программное обеспечение"
 ],
 "Computer OU": [
  null,
  "Компьютерное подразделение"
 ],
 "Contacted domain": [
  null,
  "Связь с доменом установлена"
 ],
 "Domain": [
  null,
  "Домен"
 ],
 "Domain $0 could not be contacted": [
  null,
  "Не удалось установить связь с доменом $0"
 ],
 "Domain $0 is not supported": [
  null,
  "Домен $0 не поддерживается"
 ],
 "Domain Address": [
  null,
  "Адрес домена"
 ],
 "Domain Administrator Name": [
  null,
  "Имя администратора домена"
 ],
 "Domain Administrator Password": [
  null,
  "Пароль администратора домена"
 ],
 "Downloading $0": [
  null,
  "Загрузка $0"
 ],
 "Host name should not be changed in a domain": [
  null,
  "Имя узла не должно изменяться в домене"
 ],
 "Install": [
  null,
  "Установка"
 ],
 "Install Software": [
  null,
  "Установить программное обеспечение"
 ],
 "Installing $0": [
  null,
  "Установка $0"
 ],
 "Join": [
  null,
  "Присоединиться"
 ],
 "Join Domain": [
  null,
  "Войти в домен"
 ],
 "Join a Domain": [
  null,
  "Присоединиться к домену"
 ],
 "Joining this domain is not supported": [
  null,
  "Присоединение к этому домену не поддерживается"
 ],
 "Leave Domain": [
  null,
  "Оставить домен"
 ],
 "Login Format": [
  null,
  ""
 ],
 "More": [
  null,
  "Больше"
 ],
 "Next": [
  null,
  "Далее"
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
 "One Time Password": [
  null,
  "Одноразовый пароль"
 ],
 "PackageKit crashed": [
  null,
  "Пакет PackageKit разбился"
 ],
 "Removals:": [
  null,
  "Удаления:"
 ],
 "Removing $0": [
  null,
  "Удаление $0"
 ],
 "Server Software": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "Пользователь <b>$0</b> не разрешено изменять сферы"
 ],
 "This may take a while": [
  null,
  "Это может занять некоторое время"
 ],
 "Total size: $0": [
  null,
  "Общий размер: $0"
 ],
 "User Name": [
  null,
  "Имя пользователя"
 ],
 "User Password": [
  null,
  "Пользовательский пароль"
 ],
 "Validating address": [
  null,
  ""
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Ожидание выполнения других операций управления программным обеспечением"
 ],
 "e.g. \"$0\"": [
  null,
  "например, \"$0\""
 ]
}));
