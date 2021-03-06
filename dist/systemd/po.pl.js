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
 "$0 Template": [
  null,
  "Szablon $0"
 ],
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
 "Absent": [
  null,
  "Nieobecne"
 ],
 "Active since ": [
  null,
  "Aktywna od "
 ],
 "Additional actions": [
  null,
  "Dodatkowe działania"
 ],
 "Additional packages:": [
  null,
  "Dodatkowe pakiety:"
 ],
 "Advanced TCA": [
  null,
  "Zaawansowane TCA"
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
 "All": [
  null,
  "Wszystkie"
 ],
 "All In One": [
  null,
  "Zintegrowane"
 ],
 "Allow running (unmask)": [
  null,
  "Zezwolenie na uruchamianie (odmaskowanie)"
 ],
 "Appearance:": [
  null,
  "Wygląd:"
 ],
 "Asset Tag": [
  null,
  "Etykieta zasobu"
 ],
 "At specific time": [
  null,
  "O podanym czasie"
 ],
 "Automatic Startup": [
  null,
  "Automatyczne uruchamianie"
 ],
 "Automatically starts": [
  null,
  "Automatycznie się uruchamia"
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
 "Before": [
  null,
  "Przed"
 ],
 "Binds To": [
  null,
  "Dowiązuje do"
 ],
 "Black": [
  null,
  "Czarny"
 ],
 "Blade": [
  null,
  "Kasetowy"
 ],
 "Blade enclosure": [
  null,
  "Obudowa kasetowa"
 ],
 "Bound By": [
  null,
  "Dowiązane przez"
 ],
 "Bug Fix Updates Available": [
  null,
  "Dostępne są aktualizacje naprawiające błędy"
 ],
 "Bus Expansion Chassis": [
  null,
  "Obudowa rozszerzenia magistrali"
 ],
 "CPU": [
  null,
  "Procesor"
 ],
 "CPU Security": [
  null,
  "Zabezpieczenia procesora"
 ],
 "CPU Security Toggles": [
  null,
  "Przełączniki zabezpieczeń procesora"
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
 "Checking for updates…": [
  null,
  "Wyszukiwanie aktualizacji…"
 ],
 "Checking installed software": [
  null,
  "Sprawdzanie zainstalowanego oprogramowania"
 ],
 "Class": [
  null,
  "Klasa"
 ],
 "Clear All Filters": [
  null,
  "Wyczyść wszystkie filtry"
 ],
 "Click to see system hardware information": [
  null,
  "Kliknięcie wyświetli informacje o sprzęcie komputera"
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
  "Kompaktowe PCI"
 ],
 "Condition $0=$1 was not met": [
  null,
  "Warunek $0=$1 nie został spełniony"
 ],
 "Condition failed": [
  null,
  "Warunek się nie powiódł"
 ],
 "Conflicted By": [
  null,
  "W konflikcie z"
 ],
 "Conflicts": [
  null,
  "Powoduje konflikt z"
 ],
 "Consists Of": [
  null,
  "Składa się z"
 ],
 "Convertible": [
  null,
  "2 w jednym"
 ],
 "Copy": [
  null,
  "Skopiuj"
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
 "Ctrl+Insert": [
  null,
  "Ctrl+Insert"
 ],
 "Current boot": [
  null,
  "Obecne uruchomienie"
 ],
 "Dark": [
  null,
  "Ciemny"
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
 "Desktop": [
  null,
  "Komputer stacjonarny"
 ],
 "Detachable": [
  null,
  "Odłączalny"
 ],
 "Details": [
  null,
  "Szczegóły"
 ],
 "Disable simultaneous multithreading": [
  null,
  "Wyłącz wielowątkowość współbieżną"
 ],
 "Disabled": [
  null,
  "Wyłączone"
 ],
 "Disallow running (mask)": [
  null,
  "Bez zezwolenia na uruchamianie (zamaskowanie)"
 ],
 "Disk I/O": [
  null,
  "Wejście/wyjście dysku"
 ],
 "Docking Station": [
  null,
  "Stacja dokująca"
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
 "Dual Rank": [
  null,
  "Podwójny stopień"
 ],
 "Embedded PC": [
  null,
  "Komputer osadzony"
 ],
 "Enable stored metrics…": [
  null,
  "Włącz przechowywane statystyki…"
 ],
 "Enabled": [
  null,
  "Włączone"
 ],
 "Enhancement Updates Available": [
  null,
  "Dostępne są aktualizacje z ulepszeniami"
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
 "Expansion Chassis": [
  null,
  "Obudowa rozszerzenia"
 ],
 "Failed to start": [
  null,
  "Uruchomienie się nie powiodło"
 ],
 "Filter by name or description...": [
  null,
  "Wyszukiwanie według nazwy lub opisu…"
 ],
 "Forbidden from running": [
  null,
  "Zabronione uruchamianie"
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
  "Przenośny"
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
 "ID": [
  null,
  "Identyfikator"
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
 "Instance of template: ": [
  null,
  ""
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
  "Brama IoT"
 ],
 "Joins Namespace Of": [
  null,
  "Dołącza do przestrzeni nazw"
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
  "Laptop"
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
 "Light": [
  null,
  "Jasny"
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
  "Komputer stacjonarny o mniejszym rozmiarze"
 ],
 "Lunch Box": [
  null,
  "Lunch Box"
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
  "Główna obudowa serwera"
 ],
 "Manually": [
  null,
  "Ręcznie"
 ],
 "Mask Service": [
  null,
  "Zamaskuj usługę"
 ],
 "Masked": [
  null,
  "Zamaskowana"
 ],
 "Masking service prevents all dependant units from running. This can have bigger impact than anticipated. Please confirm that you want to mask this unit.": [
  null,
  "Zamaskowanie usługi uniemożliwia uruchomienie wszystkich zależnych usług. Może to mieć większy efekt, niż się wydaje. Proszę potwierdzić, że ta jednostka ma zostać zamaskowana."
 ],
 "Memory": [
  null,
  "Pamięć"
 ],
 "Memory & Swap": [
  null,
  "Pamięć i przestrzeń wymiany"
 ],
 "Memory Technology": [
  null,
  "Technologia pamięci"
 ],
 "Message to logged in users": [
  null,
  "Wiadomość do zalogowanych użytkowników"
 ],
 "Mini PC": [
  null,
  "Mini PC"
 ],
 "Mini Tower": [
  null,
  "Mini Tower"
 ],
 "Minute needs to be a number between 0-59": [
  null,
  "Minuta musi być liczbą między 0 a 59"
 ],
 "Minutes": [
  null,
  "Minuty"
 ],
 "Mitigations": [
  null,
  "Poprawki zmniejszające ryzyko"
 ],
 "Model": [
  null,
  "Model"
 ],
 "Monday": [
  null,
  "poniedziałek"
 ],
 "Multi-system Chassis": [
  null,
  "Obudowa dla wielu komputerów"
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
 "No Matching Results": [
  null,
  "Brak wyników"
 ],
 "No host keys found.": [
  null,
  "Nie odnaleziono kluczy komputera."
 ],
 "Not authorized to upload-report": [
  null,
  "Brak upoważnienia do „upload-report”"
 ],
 "Not running": [
  null,
  "Niedziałające"
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
  "Notebook"
 ],
 "Notice and above": [
  null,
  "Uwagi i powyżej"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On Failure": [
  null,
  "Podczas niepowodzenia"
 ],
 "Only Emergency": [
  null,
  "Tylko awaryjne"
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
  "Inne"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "PackageKit crashed": [
  null,
  "Usługa PackageKit uległa awarii"
 ],
 "Part Of": [
  null,
  "Część"
 ],
 "Paste": [
  null,
  "Wklej"
 ],
 "Path": [
  null,
  "Ścieżka"
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
  "Obudowa peryferyjna"
 ],
 "Pizza Box": [
  null,
  "Pizza Box"
 ],
 "Portable": [
  null,
  "Przenośne"
 ],
 "Power Options": [
  null,
  "Opcje zasilania"
 ],
 "Present": [
  null,
  "Obecne"
 ],
 "Pretty Host Name": [
  null,
  "Czytelna nazwa komputera"
 ],
 "Previous boot": [
  null,
  "Poprzednie uruchomienie"
 ],
 "Problem details": [
  null,
  "Informacje o problemie"
 ],
 "Problem info": [
  null,
  "Informacje o problemie"
 ],
 "Propagates Reload To": [
  null,
  "Wysyła ponowne wczytanie do"
 ],
 "RAID Chassis": [
  null,
  "Obudowa RAID"
 ],
 "Rack Mount Chassis": [
  null,
  "Obudowa do montowania w szafie"
 ],
 "Rank": [
  null,
  "Stopień"
 ],
 "Read more...": [
  null,
  "Więcej informacji…"
 ],
 "Read-only": [
  null,
  "Tylko do odczytu"
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
 "Reload Propagated From": [
  null,
  "Odebrano ponowne wczytanie z"
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
 "Required By": [
  null,
  "Wymagane przez"
 ],
 "Required by ": [
  null,
  "Wymagana przez "
 ],
 "Requires": [
  null,
  "Wymaga"
 ],
 "Requires administration access to edit": [
  null,
  "Modyfikacja wymaga dostępu administratora"
 ],
 "Requisite": [
  null,
  "Potrzebne"
 ],
 "Requisite Of": [
  null,
  "Potrzebne dla"
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
 "Running": [
  null,
  "Działające"
 ],
 "Saturday": [
  null,
  "sobota"
 ],
 "Save": [
  null,
  "Zapisz"
 ],
 "Save and reboot": [
  null,
  "Zapisz i uruchom ponownie"
 ],
 "Sealed-case PC": [
  null,
  "Sealed-case PC"
 ],
 "Seconds": [
  null,
  "Sekundy"
 ],
 "Secure Shell Keys": [
  null,
  "Klucze SSH"
 ],
 "Security Updates Available": [
  null,
  "Dostępne są aktualizacje bezpieczeństwa"
 ],
 "Service": [
  null,
  "Usługa"
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
 "Shift+Insert": [
  null,
  "Shift+Insert"
 ],
 "Show fingerprints": [
  null,
  "Wyświetl odciski"
 ],
 "Shut Down": [
  null,
  "Wyłącz"
 ],
 "Single Rank": [
  null,
  "Pojedynczy stopień"
 ],
 "Size": [
  null,
  "Rozmiar"
 ],
 "Slot": [
  null,
  "Gniazdo"
 ],
 "Sockets": [
  null,
  "Gniazda"
 ],
 "Software-based workarounds help prevent CPU security issues. These mitigations have the side effect of reducing performance. Change these settings at your own risk.": [
  null,
  "Programowe obejścia błędów pomagają uniknąć problemów bezpieczeństwa procesora. Ich efektem ubocznym jest zmniejszenie wydajności. Należy zmieniać te ustawienia na własne ryzyko."
 ],
 "Space-saving Computer": [
  null,
  "Komputer oszczędzający miejsce"
 ],
 "Specific Time": [
  null,
  "Podany czas"
 ],
 "Speed": [
  null,
  "Prędkość"
 ],
 "Start": [
  null,
  "Rozpocznij"
 ],
 "Start Service": [
  null,
  "Uruchom usługę"
 ],
 "Start and Enable": [
  null,
  "Uruchom i włącz"
 ],
 "State": [
  null,
  "Stan"
 ],
 "Static": [
  null,
  "Statyczne"
 ],
 "Status": [
  null,
  "Stan"
 ],
 "Stick PC": [
  null,
  "Stick PC"
 ],
 "Stop": [
  null,
  "Zatrzymaj"
 ],
 "Stop and Disable": [
  null,
  "Zatrzymaj i wyłącz"
 ],
 "Store Metrics": [
  null,
  "Przechowuj statystyki"
 ],
 "Sub Chassis": [
  null,
  "Obudowa podrzędna"
 ],
 "Sub Notebook": [
  null,
  "Sub Notebook"
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
 "System Not Registered": [
  null,
  "System nie jest zarejestrowany"
 ],
 "System Services": [
  null,
  "Usługi systemowe"
 ],
 "System Time": [
  null,
  "Czas systemowy"
 ],
 "System Up To Date": [
  null,
  "System jest aktualny"
 ],
 "Tablet": [
  null,
  "Tablet"
 ],
 "Targets": [
  null,
  "Cele"
 ],
 "Terminal": [
  null,
  "Terminal"
 ],
 "The user $0 is not permitted to change cpu security mitigations": [
  null,
  "Użytkownik $0 nie ma zezwolenia na zmianę poprawek zabezpieczeń procesora zmniejszających ryzyko"
 ],
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  "Użytkownik <b>$0</b> nie ma uprawnień do tworzenia liczników"
 ],
 "The user <b>$0</b> is not permitted to change the system time": [
  null,
  "Użytkownik <b>$0</b> nie ma zezwolenia na zmianę czasu systemu"
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
 "Tower": [
  null,
  "Tower"
 ],
 "Triggered By": [
  null,
  "Wyzwalane przez"
 ],
 "Triggers": [
  null,
  "Wyzwalacze"
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
 "Updates Available": [
  null,
  "Dostępne są aktualizacje"
 ],
 "Updating status...": [
  null,
  "Aktualizowanie stanu…"
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
 "Wanted By": [
  null,
  "Chciane przez"
 ],
 "Wants": [
  null,
  "Chce"
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
 "White": [
  null,
  "Biały"
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
 "undefined": [
  null,
  "nieokreślone"
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
