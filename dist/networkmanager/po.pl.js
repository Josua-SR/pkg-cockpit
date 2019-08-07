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
 "$mtu": [
  null,
  "$mtu"
 ],
 "(Optional)": [
  null,
  "(Opcjonalne)"
 ],
 "(default)": [
  null,
  "(domyślnie)"
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
 "Active zones": [
  null,
  "Aktywne strefy"
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
 "Add Ports": [
  null,
  "Dodaj porty"
 ],
 "Add Services": [
  null,
  "Dodaj usługi"
 ],
 "Add Team": [
  null,
  "Dodaj zespół"
 ],
 "Add VLAN": [
  null,
  "Dodaj VLAN"
 ],
 "Add Zone": [
  null,
  "Dodaj strefę"
 ],
 "Add ports to the following zones:": [
  null,
  "Dodanie portów do tych stref:"
 ],
 "Add services to following zones:": [
  null,
  "Dodanie usług do tych stref:"
 ],
 "Add zone": [
  null,
  "Dodaj strefę"
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Dodanie <b>$0</b> zerwie połączenie z serwerem i uniemożliwi korzystanie z interfejsu administracji."
 ],
 "Adding custom ports will reload firewalld. A reload will result in the loss of any runtime-only configuration!": [
  null,
  "Dodanie niestandardowych portów spowoduje ponowne wczytanie zapory sieciowej. Ponowne wczytanie spowoduje utratę całej konfiguracji tylko dla obecnej sesji."
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
 "Allowed Addresses": [
  null,
  "Dozwolone adresy"
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
 "Comma-separated ports, ranges, and aliases are accepted": [
  null,
  "Przyjmowane są porty, zakresy i aliasy oddzielone przecinkami"
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
 "Custom Ports": [
  null,
  "Niestandardowe porty"
 ],
 "Custom zones": [
  null,
  "Niestandardowe strefy"
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
 "Description": [
  null,
  "Opis"
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
 "Entire subnet": [
  null,
  "Cała podsieć"
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
 "Example: 22,ssh,8080,5900-5910": [
  null,
  "Przykład: 22,ssh,8080,5900-5910"
 ],
 "Example: 88,2019,nfs,rsync": [
  null,
  "Przykład: 88,2019,nfs,rsync"
 ],
 "Failed": [
  null,
  "Niepowodzenie"
 ],
 "Failed to add port": [
  null,
  "Dodanie portu się nie powiodło"
 ],
 "Failed to add service": [
  null,
  "Dodanie usługi się nie powiodło"
 ],
 "Failed to add zone": [
  null,
  "Dodanie strefy się nie powiodło"
 ],
 "Failed to remove service": [
  null,
  "Usunięcie usługi się nie powiodło"
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
 "IP Range": [
  null,
  "Zakres IP"
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
 "Included services": [
  null,
  "Dołączone usługi"
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
 "Invalid port number": [
  null,
  "Nieprawidłowy numer portu"
 ],
 "Invalid prefix $0": [
  null,
  "Nieprawidłowy przedrostek $0"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "Nieprawidłowy przedrostek lub maska sieci $0"
 ],
 "Invalid range": [
  null,
  "Nieprawidłowy zakres"
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
 "No active zones": [
  null,
  "Brak aktywnych stref"
 ],
 "No carrier": [
  null,
  "Brak operatora"
 ],
 "No description available": [
  null,
  "Brak dostępnego opisu"
 ],
 "No open ports": [
  null,
  "Brak otwartych portów"
 ],
 "None": [
  null,
  "Brak"
 ],
 "Not available": [
  null,
  "Niedostępne"
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
 "Please install the $0 package": [
  null,
  "Proszę zainstalować pakiet $0"
 ],
 "Port number and type do not match": [
  null,
  "Numer i typ portu się nie zgadzają"
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
 "Range": [
  null,
  "Zakres"
 ],
 "Range must be strictly ordered": [
  null,
  "Zakres musi być w ścisłej kolejności"
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
 "Remove service": [
  null,
  "Usuń usługę"
 ],
 "Remove service from zones": [
  null,
  "Usuń usługę ze stref"
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
 "Services": [
  null,
  "Usługi"
 ],
 "Set to": [
  null,
  "Ustaw na"
 ],
 "Shared": [
  null,
  "Współdzielone"
 ],
 "Sorted from least trusted to most trusted": [
  null,
  "Uporządkowane od najmniej do najbardziej zaufanych"
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
 "Trust level": [
  null,
  "Poziom zaufania"
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
 "Unknown service name": [
  null,
  "Nieznana nazwa usługi"
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
 "Zone": [
  null,
  "Strefa"
 ],
 "Zones": [
  null,
  "Strefy"
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
 "show less": [
  null,
  "wyświetl mniej"
 ],
 "show more": [
  null,
  "wyświetl więcej"
 ],
 "page-title\u0004Networking": [
  null,
  "Sieć"
 ]
}));
