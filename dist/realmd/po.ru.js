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
 "$0 Only users with local credentials will be able to log into this machine. This may also effect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  "$0 Только пользователи с локальными учетными данными смогут подключиться к этой машине. Это может также повлиять на другие сервисы в качестве параметров разрешения DNS, и список доверенных ЦС может измениться."
 ],
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
 "Are you sure you want to leave the '$0' domain?": [
  null,
  "Вы уверены, что хотите оставить \"$0' домен?"
 ],
 "Are you sure you want to leave this domain?": [
  null,
  "Вы действительно хотите покинуть этот домен?"
 ],
 "Authentication": [
  null,
  "Проверка доступа"
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
 "Computer OU": [
  null,
  "Компьютерное подразделение"
 ],
 "Domain $0 could not be contacted": [
  null,
  "Домен $0 не удалось связаться"
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
  "загрузка $0"
 ],
 "Host name should not be changed in a domain": [
  null,
  "Хост не должен быть пустым"
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
 "Leave": [
  null,
  "Покидать"
 ],
 "Leave Domain": [
  null,
  "Оставить домен"
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
 "Waiting for other software management operations to finish": [
  null,
  "Ожидание выполнения других операций управления программным обеспечением"
 ],
 "e.g. \"$0\"": [
  null,
  "например, \"$0\""
 ]
}));
