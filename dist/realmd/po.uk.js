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
 "$0 is not available from any repository.": [
  null,
  "$0 немає у жодному зі сховищ."
 ],
 "$0 will be installed.": [
  null,
  "Буде встановлено $0."
 ],
 "Additional packages:": [
  null,
  "Додаткові пакунки:"
 ],
 "Administrator Password": [
  null,
  "Пароль адміністратора"
 ],
 "After leaving the domain, only users with local credentials will be able                to log into this machine. This may also affect other services as DNS resolution settings and                the list of trusted CAs may change.": [
  null,
  ""
 ],
 "Authentication": [
  null,
  "Розпізнавання"
 ],
 "Automatic": [
  null,
  "Автоматично"
 ],
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Checking installed software": [
  null,
  "Перевіряємо встановлене програмне забезпечення"
 ],
 "Client Software": [
  null,
  "Клієнтське програмне забезпечення"
 ],
 "Computer OU": [
  null,
  "OU комп’ютера"
 ],
 "Contacted domain": [
  null,
  "Пов'язаний домен"
 ],
 "Domain": [
  null,
  "Домен"
 ],
 "Domain $0 could not be contacted": [
  null,
  "Не вдалося встановити зв’язок із доменом $0"
 ],
 "Domain $0 is not supported": [
  null,
  "Підтримки домену $0 не передбачено"
 ],
 "Domain Address": [
  null,
  "Адреса домену"
 ],
 "Domain Administrator Name": [
  null,
  "Ім’я адміністратора домену"
 ],
 "Domain Administrator Password": [
  null,
  "Пароль адміністратора домену"
 ],
 "Downloading $0": [
  null,
  "Отримуємо $0"
 ],
 "Host name should not be changed in a domain": [
  null,
  "У домені не слід змінювати назву вузла"
 ],
 "Install": [
  null,
  "Встановити"
 ],
 "Install Software": [
  null,
  "Встановити програмне забезпечення"
 ],
 "Installing $0": [
  null,
  "Встановлюємо $0"
 ],
 "Join": [
  null,
  "З'єднати"
 ],
 "Join Domain": [
  null,
  "Долучитися до домену"
 ],
 "Join a Domain": [
  null,
  "Долучитися до домену"
 ],
 "Joining this domain is not supported": [
  null,
  "Підтримки долучення до цього домену не передбачено"
 ],
 "Leave Domain": [
  null,
  "Полишити домен"
 ],
 "Login Format": [
  null,
  "Формат входу"
 ],
 "More": [
  null,
  "Більше"
 ],
 "Next": [
  null,
  "Далі"
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
 "One Time Password": [
  null,
  "Одноразовий пароль"
 ],
 "PackageKit crashed": [
  null,
  "Аварійне завершення роботи PackageKit"
 ],
 "Removals:": [
  null,
  "Вилучення:"
 ],
 "Removing $0": [
  null,
  "Вилучаємо $0"
 ],
 "Server Software": [
  null,
  "Програмне забезпечення сервера"
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "Користувачу <b>$0</b> не дозволено вносити зміни до областей"
 ],
 "This may take a while": [
  null,
  "Зачекайте"
 ],
 "Total size: $0": [
  null,
  "Загальний розмір: $0"
 ],
 "User Name": [
  null,
  "Ім'я користувача"
 ],
 "User Password": [
  null,
  "Пароль користувача"
 ],
 "Validating address": [
  null,
  "Перевіряємо чинність адреси"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Очікуємо на завершення інших дій із програмним забезпеченням"
 ],
 "e.g. \"$0\"": [
  null,
  "наприклад «$0»"
 ]
}));
