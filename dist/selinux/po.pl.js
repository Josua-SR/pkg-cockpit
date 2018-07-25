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
  "x-generator": "Zanata 4.5.0"
 },
 "$0 occurrence": [
  "$1 occurrences",
  "$0 wystąpienie",
  "$0 wystąpienia",
  "$0 wystąpień"
 ],
 "Apply this solution": [
  null,
  "Zastosuj to rozwiązanie"
 ],
 "Applying solution...": [
  null,
  "Zastosowywanie rozwiązania…"
 ],
 "Audit log": [
  null,
  "Dziennik audytu"
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  "Łączenie z usługą SETroubleshoot…"
 ],
 "Enforce policy:": [
  null,
  "Wymuszanie polityki:"
 ],
 "Error while deleting alert: $0": [
  null,
  "Błąd podczas usuwania alarmu: $0"
 ],
 "Error while setting SELinux mode: '$0'": [
  null,
  "Błąd podczas ustawiania trybu SELinuksa: „$0”"
 ],
 "Failed to delete alert: $0": [
  null,
  "Usunięcie alarmu się nie powiodło: $0"
 ],
 "Install setroubleshoot-server to troubleshoot SELinux events.": [
  null,
  "Należy zainstalować setroubleshoot-server, aby rozwiązywać problemy ze zdarzeniami SELinuksa."
 ],
 "No SELinux alerts.": [
  null,
  "Brak alarmów SELinuksa."
 ],
 "Not connected": [
  null,
  "Nie połączono"
 ],
 "Occurred $0": [
  null,
  "Wystąpiło $0"
 ],
 "Occurred between $0 and $1": [
  null,
  "Wystąpiło między $0 a $1"
 ],
 "Off": [
  null,
  "Wyłączone"
 ],
 "On": [
  null,
  "Włączone"
 ],
 "SELinux Access Control Errors": [
  null,
  "Błędy kontroli dostępu SELinuksa"
 ],
 "SELinux Policy": [
  null,
  "Polityka SELinuksa"
 ],
 "SELinux Troubleshoot": [
  null,
  "Rozwiązywanie problemów z SELinuksem"
 ],
 "SELinux is disabled on the system": [
  null,
  "SELinux jest wyłączony w systemie"
 ],
 "SELinux is disabled on the system.": [
  null,
  "SELinux jest wyłączony w systemie."
 ],
 "SELinux system status is unknown.": [
  null,
  "Stan SELinuksa systemu jest nieznany."
 ],
 "Setting deviates from the configured state and will revert on the next boot.": [
  null,
  "Ustawienie odbiega od skonfigurowanego stanu i zostanie przywrócone po następnym uruchomieniu."
 ],
 "Solution applied successfully": [
  null,
  "Pomyślnie zastosowano rozwiązanie"
 ],
 "Solution failed": [
  null,
  "Rozwiązanie się nie powiodło"
 ],
 "Solutions": [
  null,
  "Rozwiązania"
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  "Nieznany stan konfiguracji, może zostać zmieniony po następnych uruchomieniu."
 ],
 "Unable to apply this solution automatically": [
  null,
  "Nie można automatycznie zastosować tego rozwiązania"
 ],
 "Unable to get alert details.": [
  null,
  "Nie można pobrać informacji o alarmie."
 ],
 "Unable to get alert: $0": [
  null,
  "Nie można pobrać alarmu: $0"
 ],
 "Unable to run fix: %0": [
  null,
  "Nie można wykonać poprawki: %0"
 ],
 "Unable to start setroubleshootd": [
  null,
  "Nie można uruchomić usługi setroubleshootd"
 ],
 "Waiting for details...": [
  null,
  "Oczekiwanie na informacje…"
 ],
 "solution details": [
  null,
  "informacje o rozwiązaniu"
 ]
}));
