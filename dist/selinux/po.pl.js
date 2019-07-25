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
nplurals=3; plural=n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;
return plural;
},
  "language": "pl",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 occurrence": [
  "$1 occurrences",
  "$0 wystąpienie",
  "$0 wystąpienia",
  "$0 wystąpień"
 ],
 "Ansible Playbook": [
  null,
  "Podręcznik Ansible"
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
 "Automation Script": [
  null,
  "Skrypt automatyzacji"
 ],
 "Close": [
  null,
  "Zamknij"
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  "Łączenie z usługą SETroubleshoot…"
 ],
 "Copy to clipboard": [
  null,
  "Skopiuj do schowka"
 ],
 "Enforce policy:": [
  null,
  "Wymuszanie polityki:"
 ],
 "Error running semanage to discover system modifications": [
  null,
  ""
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
 "Loading system modifications...": [
  null,
  "Wczytywanie modyfikacji systemu…"
 ],
 "No SELinux alerts.": [
  null,
  "Brak alarmów SELinuksa."
 ],
 "No System Modifications": [
  null,
  "Brak modyfikacji systemu"
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
 "Shell Script": [
  null,
  "Skrypt powłoki"
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
 "System Modifications": [
  null,
  "Modyfikacje systemu"
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  "Nieznany stan konfiguracji, może zostać zmieniony po następnych uruchomieniu."
 ],
 "The logged in user is not permitted to view system modifications": [
  null,
  "Zalogowany użytkownik nie ma zezwolenia na wyświetlanie modyfikacji systemu"
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
 "View automation script": [
  null,
  "Wyświetl skrypt automatyzacji"
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
