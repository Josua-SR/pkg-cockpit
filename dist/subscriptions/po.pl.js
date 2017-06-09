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
nplurals=3; plural=n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;
return plural;
},
  "language": "pl",
  "x-generator": "Zanata 3.9.6"
 },
 "'Organization' required to register.": [
  null,
  "„Organization” jest wymagane do rejestracji."
 ],
 "'Organization' required when using activation keys.": [
  null,
  "„Organization” jest wymagane podczas używania kluczy aktywacji."
 ],
 "Access denied": [
  null,
  "Odmowa dostępu"
 ],
 "Activation Key": [
  null,
  "Klucz aktywacji"
 ],
 "Architecture": [
  null,
  "Architektura"
 ],
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Couldn't get system subscription status. Please ensure subscription-manager is installed.": [
  null,
  "Nie można pobrać stanu subskrypcji komputera. Proszę się upewnić, że program subscription-manager jest zainstalowany."
 ],
 "Custom URL": [
  null,
  "Niestandardowy adres URL"
 ],
 "Default": [
  null,
  "Domyślne"
 ],
 "Details": [
  null,
  "Szczegóły"
 ],
 "Ends": [
  null,
  "Kończy się"
 ],
 "Installed products": [
  null,
  "Zainstalowane produkty"
 ],
 "Invalid credentials": [
  null,
  "Nieprawidłowe dane uwierzytelniania"
 ],
 "Invalid username or password": [
  null,
  "Nieprawidłowa nazwa użytkownika lub hasło"
 ],
 "Login": [
  null,
  "Login"
 ],
 "Login/password or activation key required to register.": [
  null,
  "Do rejestracji wymagany jest login/hasło lub klucz aktywacji."
 ],
 "No installed products on the system.": [
  null,
  "Brak zainstalowanych produktów w systemie."
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Organization": [
  null,
  "Organizacja"
 ],
 "Password": [
  null,
  "Hasło"
 ],
 "Product ID": [
  null,
  "Identyfikator produktu"
 ],
 "Product name": [
  null,
  "Nazwa produktu"
 ],
 "Proxy": [
  null,
  "Pośrednik"
 ],
 "Register": [
  null,
  "Zarejestruj"
 ],
 "Register system": [
  null,
  "Zarejestruj system"
 ],
 "Retrieving subscription status...": [
  null,
  "Pobieranie stanu subskrypcji…"
 ],
 "Server": [
  null,
  "Serwer"
 ],
 "Starts": [
  null,
  "Zaczyna się"
 ],
 "Status": [
  null,
  "Stan"
 ],
 "Status: $0": [
  null,
  "Stan: $0"
 ],
 "Status: System isn't registered": [
  null,
  "Stan: system nie jest zarejestrowany"
 ],
 "Subscriptions": [
  null,
  "Subskrypcje"
 ],
 "The current user isn't allowed to access system subscription status.": [
  null,
  "Obecny użytkownik nie ma dostępu do stanu subskrypcji komputera."
 ],
 "URL": [
  null,
  "Adres URL"
 ],
 "Unable to connect": [
  null,
  "Nie można połączyć"
 ],
 "Unregister": [
  null,
  "Wyrejestruj"
 ],
 "Unregistering system...": [
  null,
  "Wyrejestrowywanie systemu…"
 ],
 "Updating": [
  null,
  "Aktualizowanie"
 ],
 "Use proxy server": [
  null,
  "Użyj serwera pośrednika"
 ],
 "User": [
  null,
  "Użytkownik"
 ],
 "Version": [
  null,
  "Wersja"
 ],
 "undefined": [
  null,
  "nieokreślone"
 ]
}));
