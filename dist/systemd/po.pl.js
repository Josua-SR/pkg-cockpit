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
  "x-generator": "Zanata 4.6.2"
 },
 "$0 is not available from any repository.": [
  null,
  "$0 nie jest dostępne w żadnym repozytorium."
 ],
 "$0 will be installed.": [
  null,
  "$0 zostanie zainstalowane."
 ],
 "1 Minute": [
  null,
  "1 minuta"
 ],
 "1 day": [
  null,
  "1 dzień"
 ],
 "1 hour": [
  null,
  "1 godzina"
 ],
 "1 week": [
  null,
  "1 tydzień"
 ],
 "10th": [
  null,
  "10."
 ],
 "11th": [
  null,
  "11."
 ],
 "12th": [
  null,
  "12."
 ],
 "13th": [
  null,
  "13."
 ],
 "14th": [
  null,
  "14."
 ],
 "15th": [
  null,
  "15."
 ],
 "16th": [
  null,
  "16."
 ],
 "17th": [
  null,
  "17."
 ],
 "18th": [
  null,
  "18."
 ],
 "19th": [
  null,
  "19."
 ],
 "1st": [
  null,
  "1."
 ],
 "20 Minutes": [
  null,
  "20 minut"
 ],
 "20th": [
  null,
  "20."
 ],
 "21st": [
  null,
  "21."
 ],
 "22nd": [
  null,
  "22."
 ],
 "23rd": [
  null,
  "23."
 ],
 "24th": [
  null,
  "24."
 ],
 "25th": [
  null,
  "25."
 ],
 "26th": [
  null,
  "26."
 ],
 "27th": [
  null,
  "27."
 ],
 "28th": [
  null,
  "28."
 ],
 "29th": [
  null,
  "29."
 ],
 "2nd": [
  null,
  "2."
 ],
 "30th": [
  null,
  "30."
 ],
 "31st": [
  null,
  "31."
 ],
 "3rd": [
  null,
  "3."
 ],
 "40 Minutes": [
  null,
  "40 minut"
 ],
 "4th": [
  null,
  "4."
 ],
 "5 Minutes": [
  null,
  "5 minut"
 ],
 "5 minutes": [
  null,
  "5 minut"
 ],
 "5th": [
  null,
  "5."
 ],
 "6 hours": [
  null,
  "6 godzin"
 ],
 "60 Minutes": [
  null,
  "Godzina"
 ],
 "6th": [
  null,
  "6."
 ],
 "7th": [
  null,
  "7."
 ],
 "8th": [
  null,
  "8."
 ],
 "9th": [
  null,
  "9."
 ],
 "Additional packages:": [
  null,
  "Dodatkowe pakiety:"
 ],
 "After": [
  null,
  "Po"
 ],
 "After system boot": [
  null,
  "Po uruchomieniu systemu"
 ],
 "Alert and above": [
  null,
  "Alarmy i powyżej"
 ],
 "Asset Tag": [
  null,
  "Etykieta zasobu"
 ],
 "At specific time": [
  null,
  "O podanym czasie"
 ],
 "Automatically using NTP": [
  null,
  "Automatycznie za pomocą NTP"
 ],
 "Automatically using specific NTP servers": [
  null,
  "Automatycznie za pomocą podanych serwerów NTP"
 ],
 "BIOS": [
  null,
  "BIOS"
 ],
 "BIOS date": [
  null,
  "Data BIOS-u"
 ],
 "BIOS version": [
  null,
  "Wersja BIOS-u"
 ],
 "CPU": [
  null,
  "Procesor"
 ],
 "Cached": [
  null,
  "W pamięci podręcznej"
 ],
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Change": [
  null,
  "Zmień"
 ],
 "Change Host Name": [
  null,
  "Zmień nazwę komputera"
 ],
 "Change System Time": [
  null,
  "Zmień czas systemu"
 ],
 "Checking installed software": [
  null,
  "Sprawdzanie zainstalowanego oprogramowania"
 ],
 "Class": [
  null,
  "Klasa"
 ],
 "Close": [
  null,
  "Zamknij"
 ],
 "Command": [
  null,
  "Polecenie"
 ],
 "Condition failed": [
  null,
  "Warunek się nie powiódł"
 ],
 "Create Timer": [
  null,
  "Utwórz licznik"
 ],
 "Create Timers": [
  null,
  "Utwórz liczniki"
 ],
 "Critical and above": [
  null,
  "Krytyczne i powyżej"
 ],
 "Current boot": [
  null,
  "Obecne uruchomienie"
 ],
 "Debug and above": [
  null,
  "Debugowania i powyżej"
 ],
 "Delay": [
  null,
  "Opóźnienie"
 ],
 "Description": [
  null,
  "Opis"
 ],
 "Disk I/O": [
  null,
  "Wejście/wyjście dysku"
 ],
 "Domain": [
  null,
  "Domena"
 ],
 "Don't Repeat": [
  null,
  "Bez powtarzania"
 ],
 "Downloading $0": [
  null,
  "Pobieranie $0"
 ],
 "Enable stored metrics…": [
  null,
  "Włącz przechowywane statystyki…"
 ],
 "Entry": [
  null,
  "Wpis"
 ],
 "Error": [
  null,
  "Błąd"
 ],
 "Error and above": [
  null,
  "Błędy i powyżej"
 ],
 "Everything": [
  null,
  "Wszystko"
 ],
 "Friday": [
  null,
  "piątek"
 ],
 "General": [
  null,
  "Ogólne"
 ],
 "Go to": [
  null,
  "Przejdź do"
 ],
 "Go to now": [
  null,
  "Przejdź teraz"
 ],
 "Hardware": [
  null,
  "Sprzęt"
 ],
 "Hardware Information": [
  null,
  "Informacje o sprzęcie"
 ],
 "Host Name": [
  null,
  "Nazwa komputera"
 ],
 "Hour : Minute": [
  null,
  "Godzina : Minuta"
 ],
 "Hours": [
  null,
  "Godziny"
 ],
 "I/O Wait": [
  null,
  "Oczekiwanie wejścia/wyjścia"
 ],
 "Info and above": [
  null,
  "Informacje i powyżej"
 ],
 "Install": [
  null,
  "Zainstaluj"
 ],
 "Install Software": [
  null,
  "Zainstaluj oprogramowanie"
 ],
 "Installing $0": [
  null,
  "Instalowanie $0"
 ],
 "Instantiate": [
  null,
  "Wystąpienie"
 ],
 "Invalid time zone": [
  null,
  "Nieprawidłowa strefa czasowa"
 ],
 "Journal": [
  null,
  "Dziennik"
 ],
 "Journal entry": [
  null,
  "Wpis dziennika"
 ],
 "Journal entry not found": [
  null,
  "Nie odnaleziono wpisu dziennika"
 ],
 "Kernel": [
  null,
  "Jądro"
 ],
 "Last 24 hours": [
  null,
  "Ostatni dzień"
 ],
 "Last 7 days": [
  null,
  "Ostatni tydzień"
 ],
 "Load earlier entries": [
  null,
  "Wczytaj wcześniejsze wpisy"
 ],
 "Loading...": [
  null,
  "Wczytywanie…"
 ],
 "Log messages": [
  null,
  "Komunikaty dziennika"
 ],
 "Logs": [
  null,
  "Dzienniki"
 ],
 "Machine ID": [
  null,
  "Identyfikator komputera"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "Odciski kluczy SSH komputera"
 ],
 "Manually": [
  null,
  "Ręcznie"
 ],
 "Memory": [
  null,
  "Pamięć"
 ],
 "Memory & Swap": [
  null,
  "Pamięć i przestrzeń wymiany"
 ],
 "Minutes": [
  null,
  "Minuty"
 ],
 "Model": [
  null,
  "Model"
 ],
 "Monday": [
  null,
  "poniedziałek"
 ],
 "Name": [
  null,
  "Nazwa"
 ],
 "Network Traffic": [
  null,
  "Ruch sieciowy"
 ],
 "Nice": [
  null,
  "Nice"
 ],
 "No Delay": [
  null,
  "Brak opóźnienia"
 ],
 "No host keys found.": [
  null,
  "Nie odnaleziono kluczy komputera."
 ],
 "Not authorized to upload-report": [
  null,
  "Brak upoważnienia do „upload-report”"
 ],
 "Not synchronized": [
  null,
  "Niesynchronizowane"
 ],
 "Note": [
  null,
  "Uwaga"
 ],
 "Notice and above": [
  null,
  "Uwagi i powyżej"
 ],
 "Off": [
  null,
  "Wyłączone"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On": [
  null,
  "Włączone"
 ],
 "Only Emergency": [
  null,
  "Tylko awaryjne"
 ],
 "Operating System": [
  null,
  "System operacyjny"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "Paths": [
  null,
  "Ścieżki"
 ],
 "Performance Profile": [
  null,
  "Profil wydajności"
 ],
 "Power Options": [
  null,
  "Opcje zasilania"
 ],
 "Pretty Host Name": [
  null,
  "Czytelna nazwa komputera"
 ],
 "Problem details": [
  null,
  "Informacje o problemie"
 ],
 "Problem info": [
  null,
  "Informacje o problemie"
 ],
 "Real Host Name": [
  null,
  "Prawdziwa nazwa komputera"
 ],
 "Reboot": [
  null,
  "Uruchom ponownie"
 ],
 "Recent": [
  null,
  "Ostatnie"
 ],
 "Removals:": [
  null,
  "Usuwane:"
 ],
 "Removing $0": [
  null,
  "Usuwanie $0"
 ],
 "Repeat Daily": [
  null,
  "Powtarzanie codziennie"
 ],
 "Repeat Hourly": [
  null,
  "Powtarzanie co godzinę"
 ],
 "Repeat Monthly": [
  null,
  "Powtarzanie co miesiąc"
 ],
 "Repeat Weekly": [
  null,
  "Powtarzanie co tydzień"
 ],
 "Repeat Yearly": [
  null,
  "Powtarzanie co roku"
 ],
 "Report": [
  null,
  "Zgłoś"
 ],
 "Reported": [
  null,
  "Zgłoszono"
 ],
 "Reporter 'reporter-ureport' not found.": [
  null,
  "Nie odnaleziono modułu zgłaszania „reporter-ureport”."
 ],
 "Reporting was unsucessful. Try running `reporter-ureport -d ": [
  null,
  "Zgłoszenie się nie powiodło. Proszę wykonać „reporter-ureport -d "
 ],
 "Reset": [
  null,
  "Przywróć"
 ],
 "Restart": [
  null,
  "Uruchom ponownie"
 ],
 "Run": [
  null,
  "Uruchom"
 ],
 "Saturday": [
  null,
  "sobota"
 ],
 "Save": [
  null,
  "Zapisz"
 ],
 "Seconds": [
  null,
  "Sekundy"
 ],
 "Secure Shell Keys": [
  null,
  "Klucze SSH"
 ],
 "Service Logs": [
  null,
  "Dzienniki serwera"
 ],
 "Service name": [
  null,
  "Nazwa usługi"
 ],
 "Services": [
  null,
  "Usługi"
 ],
 "Set Time": [
  null,
  "Ustaw czas"
 ],
 "Severity": [
  null,
  "Ważność"
 ],
 "Show fingerprints": [
  null,
  "Wyświetl odciski"
 ],
 "Shut Down": [
  null,
  "Wyłącz"
 ],
 "Slot": [
  null,
  "Gniazdo"
 ],
 "Sockets": [
  null,
  "Gniazda"
 ],
 "Specific Time": [
  null,
  "Podany czas"
 ],
 "Store metrics": [
  null,
  "Przechowuj statystyki"
 ],
 "Sunday": [
  null,
  "niedziela"
 ],
 "Swap Used": [
  null,
  "Używana przestrzeń wymiany"
 ],
 "Synchronized": [
  null,
  "Synchronizowane"
 ],
 "Synchronized with {{Server}}": [
  null,
  "Synchronizowane z {{Server}}"
 ],
 "System": [
  null,
  "System"
 ],
 "System Information": [
  null,
  "Informacje o systemie"
 ],
 "System Services": [
  null,
  "Usługi systemowe"
 ],
 "System Time": [
  null,
  "Czas systemowy"
 ],
 "Targets": [
  null,
  "Cele"
 ],
 "Terminal": [
  null,
  "Terminal"
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  "Ta jednostka nie została zaprojektowana do bezpośredniego włączania."
 ],
 "Thursday": [
  null,
  "czwartek"
 ],
 "Time Zone": [
  null,
  "Strefa czasowa"
 ],
 "Timers": [
  null,
  "Liczniki"
 ],
 "Total size: $0": [
  null,
  "Całkowity rozmiar: $0"
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  "Próbowanie synchronizacji z {{Server}}"
 ],
 "Tuesday": [
  null,
  "wtorek"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "Used": [
  null,
  "Używane"
 ],
 "User": [
  null,
  "Użytkownik"
 ],
 "Vendor": [
  null,
  "Producent"
 ],
 "Version": [
  null,
  "Wersja"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Oczekiwanie na ukończenie pozostałych działań zarządzania oprogramowaniem"
 ],
 "Warning and above": [
  null,
  "Ostrzeżenia i powyżej"
 ],
 "Wednesday": [
  null,
  "środa"
 ],
 "Weeks": [
  null,
  "Tygodnie"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 B danych binarnych]"
 ],
 "[binary data]": [
  null,
  "[dane binarne]"
 ],
 "[no data]": [
  null,
  "[brak danych]"
 ]
}));
