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
 "$0 key ID": [
  null,
  "Ід. ключа $0"
 ],
 "$0 package": [
  null,
  "$0 пакунок"
 ],
 "$0 packages": [
  null,
  "$0 пакунків"
 ],
 "- Add New Repository": [
  null,
  "Сховище"
 ],
 "Add": [
  null,
  "Додати"
 ],
 "Add Another Key": [
  null,
  ""
 ],
 "Additions": [
  null,
  "Додавання"
 ],
 "Apply": [
  null,
  "Застосувати"
 ],
 "Available": [
  null,
  "Доступні"
 ],
 "Begins with '-----BEGIN PGP PUBLIC KEY BLOCK-----'": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Change Repository": [
  null,
  "Сховище"
 ],
 "Check for Updates": [
  null,
  "Перевірити наявність оновлень"
 ],
 "Checking for updates": [
  null,
  "Шукаємо оновлення"
 ],
 "Connecting to OSTree": [
  null,
  "Встановлюємо з’єднання з OSTree"
 ],
 "Couldn't load settings for '$0': $1": [
  null,
  "Не вдалося завантажити дані користувача"
 ],
 "Currently using:": [
  null,
  ""
 ],
 "Default": [
  null,
  "Типовий"
 ],
 "Delete": [
  null,
  "Вилучити"
 ],
 "Downgrades": [
  null,
  "Зниження"
 ],
 "Error loading remotes: $0": [
  null,
  "Помилка під час вилучення нагадування: $0"
 ],
 "Expired Signature": [
  null,
  "Застарілий підпис"
 ],
 "Failed": [
  null,
  "Помилка"
 ],
 "Good Signature": [
  null,
  "Чинний підпис"
 ],
 "Invalid Signature": [
  null,
  "Некоректний підпис"
 ],
 "Name": [
  null,
  "Назва"
 ],
 "No Deployments": [
  null,
  "Немає розгортань"
 ],
 "No OSTree deployments found": [
  null,
  "Не знайдено розгорнутих OSTree"
 ],
 "No configuration data found": [
  null,
  "Помилки у налаштуваннях"
 ],
 "No signature avaliable": [
  null,
  "Підпис недоступний"
 ],
 "Not authorized to update software on this system": [
  null,
  "Не уповноважено на оновлення програмного забезпечення у цій системі"
 ],
 "OS $0 not found": [
  null,
  "ОС $0 не знайдено"
 ],
 "OSTree is not available on this system": [
  null,
  "OSTree у цій системі недоступна"
 ],
 "Operating System": [
  null,
  "Операційна система"
 ],
 "Operating System Updates": [
  null,
  "Оновлення операційної системи"
 ],
 "Origin": [
  null,
  ""
 ],
 "Packages": [
  null,
  "Пакунки"
 ],
 "Please provide a valid URL": [
  null,
  "Будь ласка, вкажіть коректну назву"
 ],
 "Please provide a valid name": [
  null,
  "Будь ласка, вкажіть коректну назву"
 ],
 "Rebase and Reboot": [
  null,
  "Оновити і перезавантажити"
 ],
 "Receiving delta parts": [
  null,
  "Отримуємо частини відмінностей"
 ],
 "Receiving metadata objects": [
  null,
  "Отримуємо об’єкти метаданих"
 ],
 "Receiving objects: $0%": [
  null,
  "Отримуємо об’єкти: $0%"
 ],
 "Reconnect": [
  null,
  "Повторно з’єднатися"
 ],
 "Released": [
  null,
  "Випущено"
 ],
 "Removals": [
  null,
  "Вилучення"
 ],
 "Roll Back and Reboot": [
  null,
  "Відкотити і перезавантажити"
 ],
 "Running": [
  null,
  "Працює"
 ],
 "Scanning metadata": [
  null,
  "Скануємо метадані"
 ],
 "Signature": [
  null,
  "Підпис"
 ],
 "Signed by": [
  null,
  "Підписано"
 ],
 "Software Updates": [
  null,
  "Оновлення програм"
 ],
 "Status": [
  null,
  "Стан"
 ],
 "This deployment contains the same packages as your currently booted system": [
  null,
  "У цьому розгортанні містяться деякі пакунки, які є у поточній завантаженій системі"
 ],
 "Tree": [
  null,
  "Дерево"
 ],
 "URL": [
  null,
  "Адреса"
 ],
 "Unable to communicate with OSTree": [
  null,
  "Не вдалося обмінятися даними з OSTree"
 ],
 "Update and Reboot": [
  null,
  "Оновити і перезавантажити"
 ],
 "Updates": [
  null,
  "Оновлення"
 ],
 "Updating": [
  null,
  "Оновлення"
 ],
 "Use trusted GPG key": [
  null,
  ""
 ],
 "Version": [
  null,
  "Версія"
 ],
 "When": [
  null,
  "Умова"
 ],
 "Writing objects": [
  null,
  "Записуємо об’єкти"
 ],
 "at": [
  null,
  "Шлях"
 ]
}));
