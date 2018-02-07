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
 "$0 Template": [
  null,
  "Szablon $0"
 ],
 "$0 day": [
  "$0 days",
  "$0 dzień",
  "$0 dni",
  "$0 dni"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 godzina",
  "$0 godziny",
  "$0 godzin"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minuta",
  "$0 minuty",
  "$0 minut"
 ],
 "$0 month": [
  "$0 months",
  "$0 miesiąc",
  "$0 miesiące",
  "$0 miesięcy"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 tydzień",
  "$0 tygodnie",
  "$0 tygodni"
 ],
 "$0 year": [
  "$0 years",
  "$0 rok",
  "$0 lata",
  "$0 lat"
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
 "1 min": [
  null,
  "1 minuta"
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
 "2 min": [
  null,
  "2 minuty"
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
 "3 min": [
  null,
  "3 minuty"
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
 "4 min": [
  null,
  "4 minuty"
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
 "5 min": [
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
 "Advanced TCA": [
  null,
  ""
 ],
 "After": [
  null,
  "Po"
 ],
 "After system boot": [
  null,
  "Po uruchomieniu systemu"
 ],
 "All In One": [
  null,
  ""
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
  ""
 ],
 "BIOS date": [
  null,
  ""
 ],
 "BIOS version": [
  null,
  ""
 ],
 "Blade": [
  null,
  ""
 ],
 "Blade enclosure": [
  null,
  ""
 ],
 "Bus Expansion Chassis": [
  null,
  ""
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
 "Cannot schedule event in the past": [
  null,
  "Nie można planować zdarzeń w przeszłości"
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
 "Close": [
  null,
  "Zamknij"
 ],
 "Command": [
  null,
  "Polecenie"
 ],
 "Compact PCI": [
  null,
  ""
 ],
 "Condition $0=$1 was not met": [
  null,
  "Warunek $0=$1 nie został spełniony"
 ],
 "Condition failed": [
  null,
  "Warunek się nie powiódł"
 ],
 "Convertible": [
  null,
  ""
 ],
 "Create Timer": [
  null,
  "Utwórz licznik"
 ],
 "Create Timers": [
  null,
  "Utwórz liczniki"
 ],
 "Current boot": [
  null,
  "Obecne uruchomienie"
 ],
 "Delay": [
  null,
  "Opóźnienie"
 ],
 "Description": [
  null,
  "Opis"
 ],
 "Desktop": [
  null,
  ""
 ],
 "Detachable": [
  null,
  ""
 ],
 "Disable": [
  null,
  "Wyłącz"
 ],
 "Disabled": [
  null,
  "Wyłączone"
 ],
 "Disk I/O": [
  null,
  "Wejście/wyjście dysku"
 ],
 "Docking Station": [
  null,
  ""
 ],
 "Domain": [
  null,
  "Domena"
 ],
 "Don't Repeat": [
  null,
  "Bez powtarzania"
 ],
 "Embedded PC": [
  null,
  ""
 ],
 "Enable": [
  null,
  "Włącz"
 ],
 "Enable Forcefully": [
  null,
  "Wymuś włączenie"
 ],
 "Enabled": [
  null,
  "Włączone"
 ],
 "Entry": [
  null,
  "Wpis"
 ],
 "Error": [
  null,
  "Błąd"
 ],
 "Everything": [
  null,
  "Wszystko"
 ],
 "Expansion Chassis": [
  null,
  ""
 ],
 "Free": [
  null,
  "Wolne"
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
 "Hand Held": [
  null,
  ""
 ],
 "Hardware": [
  null,
  "Sprzęt"
 ],
 "Hardware Information": [
  null,
  ""
 ],
 "Host Name": [
  null,
  "Nazwa komputera"
 ],
 "Hour : Minute": [
  null,
  "Godzina : Minuta"
 ],
 "Hour needs to be a number between 0-23": [
  null,
  "Godzina musi być liczbą między 0 a 23"
 ],
 "Hours": [
  null,
  "Godziny"
 ],
 "I/O Wait": [
  null,
  "Oczekiwanie wejścia/wyjścia"
 ],
 "Id": [
  null,
  "Identyfikator"
 ],
 "Instantiate": [
  null,
  "Wystąpienie"
 ],
 "Invalid date format": [
  null,
  "Nieprawidłowy format daty"
 ],
 "Invalid date format and invalid time format": [
  null,
  "Nieprawidłowy format daty i nieprawidłowy format czasu"
 ],
 "Invalid date format.": [
  null,
  "Nieprawidłowy format daty."
 ],
 "Invalid number.": [
  null,
  "Nieprawidłowy numer."
 ],
 "Invalid time format": [
  null,
  "Nieprawidłowy format czasu"
 ],
 "Invalid time zone": [
  null,
  "Nieprawidłowa strefa czasowa"
 ],
 "IoT Gateway": [
  null,
  ""
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
 "Laptop": [
  null,
  ""
 ],
 "Last 24 hours": [
  null,
  "Ostatni dzień"
 ],
 "Last 7 days": [
  null,
  "Ostatni tydzień"
 ],
 "Last Trigger": [
  null,
  "Ostatnio wyzwolono"
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
 "Low Profile Desktop": [
  null,
  ""
 ],
 "Lunch Box": [
  null,
  ""
 ],
 "Machine ID": [
  null,
  "Identyfikator komputera"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "Odciski kluczy SSH komputera"
 ],
 "Main Server Chassis": [
  null,
  ""
 ],
 "Manually": [
  null,
  "Ręcznie"
 ],
 "Mask": [
  null,
  "Maskuj"
 ],
 "Mask Forcefully": [
  null,
  "Wymuś maskowanie"
 ],
 "Memory": [
  null,
  "Pamięć"
 ],
 "Message to logged in users": [
  null,
  "Wiadomość do zalogowanych użytkowników"
 ],
 "Mini PC": [
  null,
  ""
 ],
 "Mini Tower": [
  null,
  ""
 ],
 "Minute needs to be a number between 0-59": [
  null,
  "Minuta musi być liczbą między 0 a 59"
 ],
 "Minutes": [
  null,
  "Minuty"
 ],
 "Monday": [
  null,
  "poniedziałek"
 ],
 "Multi-system Chassis": [
  null,
  ""
 ],
 "NTP Server": [
  null,
  "Serwer NTP"
 ],
 "Name": [
  null,
  "Nazwa"
 ],
 "Need at least one NTP server": [
  null,
  "Wymagany jest co najmniej jeden serwer NTP"
 ],
 "Network Traffic": [
  null,
  "Ruch sieciowy"
 ],
 "Next Run": [
  null,
  "Następne uruchomienie"
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
 "Notebook": [
  null,
  ""
 ],
 "Off": [
  null,
  "Wyłączone"
 ],
 "On": [
  null,
  "Włączone"
 ],
 "Only Problems": [
  null,
  "Tylko problemy"
 ],
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  "Dozwolone są tylko litery, liczby i znaki „:”, „_”, „.”, „@”, „-”."
 ],
 "Operating System": [
  null,
  "System operacyjny"
 ],
 "Other": [
  null,
  ""
 ],
 "Paths": [
  null,
  "Ścieżki"
 ],
 "Performance Profile": [
  null,
  "Profil wydajności"
 ],
 "Peripheral Chassis": [
  null,
  ""
 ],
 "Pizza Box": [
  null,
  ""
 ],
 "Portable": [
  null,
  ""
 ],
 "Power Options": [
  null,
  "Opcje zasilania"
 ],
 "Preset": [
  null,
  "Ustaw wstępnie"
 ],
 "Preset Forcefully": [
  null,
  "Wymuś ustawienie wstępne"
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
 "Problems, Errors": [
  null,
  "Problemy, błędy"
 ],
 "Problems, Errors, Warnings": [
  null,
  "Problemy, błędy, ostrzeżenia"
 ],
 "Problems, Errors, Warnings, Notices": [
  null,
  "Problemy, błędy, ostrzeżenia, uwagi"
 ],
 "RAID Chassis": [
  null,
  ""
 ],
 "Rack Mount Chassis": [
  null,
  ""
 ],
 "Real Host Name": [
  null,
  "Prawdziwa nazwa komputera"
 ],
 "Real host name can only contain lower-case characters, digits, dashes, and periods (with populated subdomains)": [
  null,
  "Prawdziwa nazwa komputera może zawierać tylko małe litery, cyfry, myślniki i kropki (z zaludnionymi poddomenami)"
 ],
 "Real host name must be 64 characters or less": [
  null,
  "Prawdziwa nazwa komputera może mieć co najwyżej 64 znaki"
 ],
 "Reboot": [
  null,
  "Uruchom ponownie"
 ],
 "Recent": [
  null,
  "Ostatnie"
 ],
 "Reload": [
  null,
  "Wczytaj ponownie"
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
 "Sealed-case PC": [
  null,
  ""
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
 "Set Host name": [
  null,
  "Ustaw nazwę komputera"
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
 "Since $0": [
  null,
  "Od $0"
 ],
 "Sockets": [
  null,
  "Gniazda"
 ],
 "Space-saving Computer": [
  null,
  ""
 ],
 "Specific Time": [
  null,
  "Podany czas"
 ],
 "Start": [
  null,
  "Rozpocznij"
 ],
 "State": [
  null,
  "Stan"
 ],
 "Static": [
  null,
  "Statyczne"
 ],
 "Stick PC": [
  null,
  ""
 ],
 "Stop": [
  null,
  "Zatrzymaj"
 ],
 "Store Performance Data": [
  null,
  "Przechowywanie danych wydajności"
 ],
 "Sub Chassis": [
  null,
  ""
 ],
 "Sub Notebook": [
  null,
  ""
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
  ""
 ],
 "System Services": [
  null,
  "Usługi systemowe"
 ],
 "System Time": [
  null,
  "Czas systemowy"
 ],
 "Tablet": [
  null,
  ""
 ],
 "Targets": [
  null,
  "Cele"
 ],
 "Terminal": [
  null,
  "Terminal"
 ],
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  "Użytkownik <b>$0</b> nie ma uprawnień do tworzenia liczników"
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  "Użytkownik <b>$0</b> nie ma zezwolenia na modyfikowanie nazw komputerów"
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  "Użytkownik <b>$0</b> nie może wyłączać ani ponownie uruchamiać tego serwera"
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  "Ten dzień nie istnieje we wszystkich miesiącach.<br> Licznik będzie wykonywany tylko w miesiącach z 31. dniem."
 ],
 "This field cannot be empty.": [
  null,
  "To pole nie może być puste."
 ],
 "This unit is an instance of the $0 template.": [
  null,
  "Ta jednostka jest wystąpieniem szablonu $0."
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
 "Tower": [
  null,
  ""
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
 "Unknown": [
  null,
  "Nieznane"
 ],
 "Unmask": [
  null,
  "Anuluj maskowanie"
 ],
 "Usage of $0 CPU core": [
  "Usage of $0 CPU cores",
  "Użycie $0 rdzenia procesora",
  "Użycie $0 rdzeni procesora",
  "Użycie $0 rdzeni procesora"
 ],
 "Used": [
  null,
  "Używane"
 ],
 "User": [
  null,
  "Użytkownik"
 ],
 "Version": [
  null,
  "Wersja"
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
 ],
 "failed to list ssh host keys: $0": [
  null,
  "wyświetlenie listy kluczy SSH komputera się nie powiodło: $0"
 ],
 "of $0 CPU core": [
  "of $0 CPU cores",
  "$0 rdzenia procesora",
  "$0 rdzeni procesora",
  "$0 rdzeni procesora"
 ],
 "unknown": [
  null,
  "nieznane"
 ],
 "page-title\u0004CPU Status": [
  null,
  "Stan procesora"
 ],
 "page-title\u0004Memory": [
  null,
  "Pamięć"
 ]
}));
