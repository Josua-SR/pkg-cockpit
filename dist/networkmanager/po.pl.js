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
  "x-generator": "Zanata 4.6.0"
 },
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
 "$mtu": [
  null,
  "$mtu"
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
 "5 minutes": [
  null,
  "5 minut"
 ],
 "6 hours": [
  null,
  "6 godzin"
 ],
 "802.3ad": [
  null,
  "802.3ad"
 ],
 "802.3ad LACP": [
  null,
  "LACP 802.3ad"
 ],
 "ARP": [
  null,
  "ARP"
 ],
 "ARP Monitoring": [
  null,
  "Monitorowanie ARP"
 ],
 "ARP Ping": [
  null,
  "Ping ARP"
 ],
 "Active": [
  null,
  "Aktywne"
 ],
 "Active Backup": [
  null,
  "Aktywna kopia zapasowa"
 ],
 "Adaptive load balancing": [
  null,
  "Adaptacyjne równoważenie obciążenia"
 ],
 "Adaptive transmit load balancing": [
  null,
  "Adaptacyjne równoważenie obciążenia przesyłu"
 ],
 "Add $0": [
  null,
  "Dodaj $0"
 ],
 "Add Bond": [
  null,
  "Dodaj węzeł"
 ],
 "Add Bridge": [
  null,
  "Dodaj mostek"
 ],
 "Add Services": [
  null,
  "Dodaj usługi"
 ],
 "Add Services…": [
  null,
  "Dodaj usługi…"
 ],
 "Add Team": [
  null,
  "Dodaj zespół"
 ],
 "Add VLAN": [
  null,
  "Dodaj VLAN"
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Dodanie <b>$0</b> zerwie połączenie z serwerem i uniemożliwi korzystanie z interfejsu administracji."
 ],
 "Additional DNS $val": [
  null,
  "Dodatkowy DNS $val"
 ],
 "Additional DNS Search Domains $val": [
  null,
  "Dodatkowe domeny wyszukiwania DNS $val"
 ],
 "Additional address $val": [
  null,
  "Dodatkowy adres $val"
 ],
 "Address $val": [
  null,
  "Adres $val"
 ],
 "Addresses": [
  null,
  "Adresy"
 ],
 "Allowed Services": [
  null,
  "Dozwolone usługi"
 ],
 "Apply": [
  null,
  "Zastosuj"
 ],
 "Authenticating": [
  null,
  "Uwierzytelnianie"
 ],
 "Automatic": [
  null,
  "Automatyczne"
 ],
 "Automatic (DHCP only)": [
  null,
  "Automatyczne (tylko DHCP)"
 ],
 "Automatic (DHCP)": [
  null,
  "Automatyczne (DHCP)"
 ],
 "Balancer": [
  null,
  "Równoważenie"
 ],
 "Bond": [
  null,
  "Wiązanie"
 ],
 "Bond Settings": [
  null,
  "Ustawienia węzła"
 ],
 "Bridge": [
  null,
  "Mostek"
 ],
 "Bridge Port Settings": [
  null,
  "Ustawienia portu mostku"
 ],
 "Bridge Settings": [
  null,
  "Ustawienia mostka"
 ],
 "Bridge port": [
  null,
  "Port mostku"
 ],
 "Broadcast": [
  null,
  "Broadcast"
 ],
 "Broken configuration": [
  null,
  "Uszkodzona konfiguracja"
 ],
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Carrier": [
  null,
  "Operator"
 ],
 "Change the settings": [
  null,
  "Zmień ustawienia"
 ],
 "Changing the settings will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Zmiana ustawień zerwie połączenie z serwerem i uniemożliwi korzystanie z interfejsu administracji."
 ],
 "Checking IP": [
  null,
  "Sprawdzanie IP"
 ],
 "Close": [
  null,
  "Zamknij"
 ],
 "Configure": [
  null,
  "Skonfiguruj"
 ],
 "Configuring": [
  null,
  "Konfigurowanie"
 ],
 "Configuring IP": [
  null,
  "Konfigurowanie IP"
 ],
 "Connect automatically": [
  null,
  "Łączenie automatyczne"
 ],
 "Connection will be lost": [
  null,
  "Połączenie zostanie utracone"
 ],
 "Create it": [
  null,
  "Utwórz"
 ],
 "Creating this VLAN will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Utworzenie tej sieci VLAN zerwie połączenie z serwerem i uniemożliwi korzystanie z interfejsu administracji."
 ],
 "Creating this bond will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Utworzenie tego wiązania zerwie połączenie z serwerem i uniemożliwi korzystanie z interfejsu administracji."
 ],
 "Creating this bridge will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Utworzenie tego mostka zerwie połączenie z serwerem i uniemożliwi korzystanie z interfejsu administracji."
 ],
 "Creating this team will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Utworzenie tego zespołu zerwie połączenie z serwerem i uniemożliwi korzystanie z interfejsu administracji."
 ],
 "DNS": [
  null,
  "DNS"
 ],
 "DNS $val": [
  null,
  "DNS $val"
 ],
 "DNS Search Domains": [
  null,
  "Domeny wyszukiwania DNS"
 ],
 "DNS Search Domains $val": [
  null,
  "Domeny wyszukiwania DNS $val"
 ],
 "Deactivating": [
  null,
  "Dezaktywowanie"
 ],
 "Delete": [
  null,
  "Usuń"
 ],
 "Delete $0": [
  null,
  "Usuń $0"
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Usunięcie <b>$0</b> zerwie połączenie z serwerem i uniemożliwi korzystanie z interfejsu administracji."
 ],
 "Details": [
  null,
  "Szczegóły"
 ],
 "Disabled": [
  null,
  "Wyłączone"
 ],
 "Enable Service": [
  null,
  "Włącz usługę"
 ],
 "Ethernet MAC": [
  null,
  "MAC ethernetu"
 ],
 "Ethernet MTU": [
  null,
  "MTU ethernetu"
 ],
 "Ethtool": [
  null,
  "ethtool"
 ],
 "Failed": [
  null,
  "Niepowodzenie"
 ],
 "Filter Services": [
  null,
  "Filtrowanie usług"
 ],
 "Firewall": [
  null,
  "Zapora sieciowa"
 ],
 "Firewall is not available": [
  null,
  "Zapora sieciowa jest niedostępna"
 ],
 "Forward delay $forward_delay": [
  null,
  "Opóźnienie w przód $forward_delay"
 ],
 "General": [
  null,
  "Ogólne"
 ],
 "Go to now": [
  null,
  "Przejdź teraz"
 ],
 "Hair Pin mode": [
  null,
  "Tryb Hairpin"
 ],
 "Hairpin mode": [
  null,
  "Tryb Hairpin"
 ],
 "Hello time $hello_time": [
  null,
  "Czas powitania $hello_time"
 ],
 "IP Address": [
  null,
  "Adres IP"
 ],
 "IP Settings": [
  null,
  "Ustawienia IP"
 ],
 "IPv4": [
  null,
  "IPv4"
 ],
 "IPv4 Settings": [
  null,
  "Ustawienia IPv4"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "Ustawienia IPv6"
 ],
 "Id $id": [
  null,
  "Identyfikator $id"
 ],
 "Ignore": [
  null,
  "Ignorowanie"
 ],
 "Inactive": [
  null,
  "Nieaktywne"
 ],
 "Interfaces": [
  null,
  "Interfejsy"
 ],
 "Invalid address $0": [
  null,
  "Nieprawidłowy adres $0"
 ],
 "Invalid metric $0": [
  null,
  "Nieprawidłowe parametry $0"
 ],
 "Invalid prefix $0": [
  null,
  "Nieprawidłowy przedrostek $0"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "Nieprawidłowy przedrostek lub maska sieci $0"
 ],
 "Keep connection": [
  null,
  "Utrzymywanie połączenia"
 ],
 "LACP Key": [
  null,
  "Klucz LACP"
 ],
 "Link Monitoring": [
  null,
  "Monitorowanie łącza"
 ],
 "Link Watch": [
  null,
  "Obserwacja łącza"
 ],
 "Link down delay": [
  null,
  "Opóźnienie łącza w dół"
 ],
 "Link local": [
  null,
  "Link-local"
 ],
 "Link up delay": [
  null,
  "Opóźnienie łącza w górę"
 ],
 "Load Balancing": [
  null,
  "Równoważenie obciążenia"
 ],
 "MAC": [
  null,
  "MAC"
 ],
 "MII (Recommended)": [
  null,
  "MII (zalecane)"
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "MTU must be a positive number": [
  null,
  "MTU musi być liczbą dodatnią"
 ],
 "Manual": [
  null,
  "Ręczne"
 ],
 "Master": [
  null,
  "Główne"
 ],
 "Maximum message age $max_age": [
  null,
  "Maksymalny wiek komunikatu $max_age"
 ],
 "Members": [
  null,
  "Elementy"
 ],
 "Mode": [
  null,
  "Tryb"
 ],
 "Monitoring Interval": [
  null,
  "Odstęp monitorowania"
 ],
 "Monitoring Targets": [
  null,
  "Cele monitorowania"
 ],
 "NSNA Ping": [
  null,
  "Ping NSNA"
 ],
 "Name": [
  null,
  "Nazwa"
 ],
 "Network devices and graphs require NetworkManager.": [
  null,
  "Urządzenia i wykresy sieciowe wymagają usługi NetworkManager."
 ],
 "NetworkManager is not running.": [
  null,
  "Usługa NetworkManager nie jest uruchomiona."
 ],
 "Networking": [
  null,
  "Sieć"
 ],
 "Networking Logs": [
  null,
  "Dzienniki sieci"
 ],
 "No": [
  null,
  "Nie"
 ],
 "No carrier": [
  null,
  "Brak operatora"
 ],
 "No open ports": [
  null,
  "Brak otwartych portów"
 ],
 "Not available": [
  null,
  "Niedostępne"
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
 "Parent": [
  null,
  "Nadrzędne"
 ],
 "Parent $parent": [
  null,
  "Nadrzędne $parent"
 ],
 "Part of ": [
  null,
  "Część "
 ],
 "Passive": [
  null,
  "Pasywnie"
 ],
 "Path cost": [
  null,
  "Koszt ścieżki"
 ],
 "Path cost $path_cost": [
  null,
  "Koszt ścieżki $path_cost"
 ],
 "Permanent": [
  null,
  "Trwałe"
 ],
 "Ping Interval": [
  null,
  "Odstęp między pingami"
 ],
 "Ping Target": [
  null,
  "Cel pingu"
 ],
 "Please install the {0} package": [
  null,
  "Proszę zainstalować pakiet {0}"
 ],
 "Ports": [
  null,
  "Porty"
 ],
 "Prefix length": [
  null,
  "Długość przedrostka"
 ],
 "Prefix length or Netmask": [
  null,
  "Długość przedrostka lub maska sieci"
 ],
 "Preparing": [
  null,
  "Przygotowywanie"
 ],
 "Preserve": [
  null,
  "Zachowaj"
 ],
 "Primary": [
  null,
  "Główne"
 ],
 "Priority": [
  null,
  "Priorytet"
 ],
 "Priority $priority": [
  null,
  "Priorytet $priority"
 ],
 "Random": [
  null,
  "Losowo"
 ],
 "Reboot": [
  null,
  "Uruchom ponownie"
 ],
 "Receiving": [
  null,
  "Odbieranie"
 ],
 "Remove $0": [
  null,
  "Usuń $0"
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Usunięcie <b>$0</b> zerwie połączenie z serwerem i uniemożliwi korzystanie z interfejsu administracji."
 ],
 "Restoring connection": [
  null,
  "Przywracanie połączenia"
 ],
 "Round Robin": [
  null,
  "Round Robin"
 ],
 "Routes": [
  null,
  "Trasy"
 ],
 "Runner": [
  null,
  "Uruchamianie"
 ],
 "STP Forward delay": [
  null,
  "Opóźnienie w przód STP"
 ],
 "STP Hello time": [
  null,
  "Czas powitania STP"
 ],
 "STP Maximum message age": [
  null,
  "Maksymalny wiek komunikatu STP"
 ],
 "STP Priority": [
  null,
  "Priorytet STP"
 ],
 "Sending": [
  null,
  "Wysyłanie"
 ],
 "Service": [
  null,
  "Usługa"
 ],
 "Set to": [
  null,
  "Ustaw na"
 ],
 "Shared": [
  null,
  "Współdzielone"
 ],
 "Spanning Tree Protocol": [
  null,
  "Protokół STP"
 ],
 "Spanning Tree Protocol (STP)": [
  null,
  "Protokół STP"
 ],
 "Stable": [
  null,
  "Stabilna"
 ],
 "Start Service": [
  null,
  "Uruchom usługę"
 ],
 "Status": [
  null,
  "Stan"
 ],
 "Sticky": [
  null,
  "Lepkie"
 ],
 "Switch off $0": [
  null,
  "Wyłącz $0"
 ],
 "Switch on $0": [
  null,
  "Włącz $0"
 ],
 "Switching off <b>$0</b>  will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Wyłączenie <b>$0</b> zerwie połączenie z serwerem i uniemożliwi korzystanie z interfejsu administracji."
 ],
 "Switching off <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Wyłączenie <b>$0</b> zerwie połączenie z serwerem i uniemożliwi korzystanie z interfejsu administracji."
 ],
 "Switching on <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Włączenie <b>$0</b> zerwie połączenie z serwerem i uniemożliwi korzystanie z interfejsu administracji."
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Team": [
  null,
  "Zespół"
 ],
 "Team Port": [
  null,
  "Port zespołu"
 ],
 "Team Port Settings": [
  null,
  "Ustawienia portu zespołu"
 ],
 "Team Settings": [
  null,
  "Ustawienia zespołu"
 ],
 "Testing connection": [
  null,
  "Testowanie połączenia"
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  "Użytkownik <b>$0</b> nie ma zezwolenia na modyfikowanie ustawień sieci"
 ],
 "This device cannot be managed here.": [
  null,
  "Tutaj nie można zarządzać tym urządzeniem."
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Nieoczekiwany błąd"
 ],
 "Unknown": [
  null,
  "Nieznane"
 ],
 "Unknown \"$0\"": [
  null,
  "Nieznane „$0”"
 ],
 "Unknown configuration": [
  null,
  "Nieznana konfiguracja"
 ],
 "Unmanaged Interfaces": [
  null,
  "Niezarządzane interfejsy"
 ],
 "VLAN": [
  null,
  "VLAN"
 ],
 "VLAN Id": [
  null,
  "Identyfikator VLAN"
 ],
 "VLAN Settings": [
  null,
  "Ustawienia VLAN"
 ],
 "Waiting": [
  null,
  "Oczekiwanie"
 ],
 "XOR": [
  null,
  "XOR"
 ],
 "Yes": [
  null,
  "Tak"
 ],
 "You are not authorized to modify the firewall.": [
  null,
  "Brak upoważnienia do modyfikacji zapory sieciowej."
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
 "page-title\u0004Networking": [
  null,
  "Sieć"
 ]
}));
