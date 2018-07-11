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
  "x-generator": "Zanata 4.4.5"
 },
 " (shared with the OS)": [
  null,
  " (współdzielone z systemem operacyjnym)"
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
 "$0 shares": [
  null,
  "Udziały: $0"
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
 "${hip}:${hport} -> $cport": [
  null,
  "${hip}:${hport} → $cport"
 ],
 "Add Additional Storage": [
  null,
  "Dodaj dodatkowe urządzenia do przechowywania danych"
 ],
 "Add Storage": [
  null,
  "Dodaj urządzenia do przechowywania danych"
 ],
 "Additional Storage": [
  null,
  "Dodatkowe urządzenia do przechowywania danych"
 ],
 "Advanced TCA": [
  null,
  "Zaawansowane TCA"
 ],
 "All In One": [
  null,
  "Zintegrowane"
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "Wszystkie dane na wybranych dyskach zostaną usunięte, a dyski zostaną dodane do puli urządzeń do przechowywania danych."
 ],
 "Always": [
  null,
  "Zawsze"
 ],
 "Are you sure you want to delete this image?": [
  null,
  "Na pewno usunąć ten obraz?"
 ],
 "Author": [
  null,
  "Autor"
 ],
 "Blade": [
  null,
  "Kasetowy"
 ],
 "Blade enclosure": [
  null,
  "Obudowa kasetowa"
 ],
 "Bus Expansion Chassis": [
  null,
  "Obudowa rozszerzenia magistrali"
 ],
 "CPU": [
  null,
  "Procesor"
 ],
 "CPU priority": [
  null,
  "Priorytet procesora"
 ],
 "CPU usage:": [
  null,
  "Użycie procesora:"
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  "Nie można połączyć z Dockerem"
 ],
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Change": [
  null,
  "Zmień"
 ],
 "Change resource limits": [
  null,
  "Zmień ograniczenia zasobów"
 ],
 "Change resources limits": [
  null,
  "Zmień ograniczenia zasobów"
 ],
 "Close": [
  null,
  "Zamknij"
 ],
 "Combined memory usage": [
  null,
  "Łączne użycie pamięci"
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  "Łączne użycie $0 rdzenia procesora",
  "Łączne użycie $0 rdzeni procesora",
  "Łączne użycie $0 rdzeni procesora"
 ],
 "Command": [
  null,
  "Polecenie"
 ],
 "Command can't be empty": [
  null,
  "Polecenie nie może być puste"
 ],
 "Command:": [
  null,
  "Polecenie:"
 ],
 "Commit": [
  null,
  "Zatwierdź"
 ],
 "Commit Image": [
  null,
  "Zatwierdź obraz"
 ],
 "Compact PCI": [
  null,
  "Kompaktowe PCI"
 ],
 "Configure storage...": [
  null,
  "Skonfiguruj urządzenia do przechowywania danych…"
 ],
 "Connecting to Docker": [
  null,
  "Łączenie z Dockerem"
 ],
 "Container": [
  null,
  "Kontener"
 ],
 "Container Name": [
  null,
  "Nazwa kontenera"
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  "Kontener jest obecnie oznaczony jako działający, ale zwykłe zatrzymanie się nie powiodło."
 ],
 "Container is currently running.": [
  null,
  "Kontener jest obecnie uruchomiony."
 ],
 "Container:": [
  null,
  "Kontener:"
 ],
 "Containers": [
  null,
  "Kontenery"
 ],
 "Convertible": [
  null,
  "2 w jednym"
 ],
 "Could not add all disks": [
  null,
  "Nie można dodać wszystkich dysków"
 ],
 "Could not reset the storage pool": [
  null,
  "Nie można przywrócić puli urządzeń do przechowywania danych"
 ],
 "Created": [
  null,
  "Utworzono"
 ],
 "Created:": [
  null,
  "Utworzono:"
 ],
 "Default": [
  null,
  "Domyślne"
 ],
 "Delete": [
  null,
  "Usuń"
 ],
 "Delete $0": [
  null,
  "Usuń $0"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "Usunięcie kontenera usunie wszystkie znajdujące się w nim dane."
 ],
 "Deleting an image will delete it, but you can probably download it again if you need it later.  Unless this image has never been pushed to a repository, that is, in which case you probably can't download it again.": [
  null,
  "Usunięcie obrazu spowoduje jego usunięcie, ale prawdopodobnie można go pobrać ponownie w razie potrzeby. Wyjątkiem jest sytuacja, w której tego obrazu nigdy nie wysłano do repozytorium."
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
 "Docker is not installed or activated on the system": [
  null,
  "Docker nie jest zainstalowany lub aktywowany w tym systemie"
 ],
 "Docking Station": [
  null,
  "Stacja dokująca"
 ],
 "Download": [
  null,
  "Pobierz"
 ],
 "Drive": [
  null,
  "Napęd"
 ],
 "Duplicate alias": [
  null,
  "Podwójny alias"
 ],
 "Duplicate port": [
  null,
  "Podwójny port"
 ],
 "Embedded PC": [
  null,
  "Komputer osadzony"
 ],
 "Entrypoint": [
  null,
  "Punkt wejścia"
 ],
 "Environment": [
  null,
  "Środowisko"
 ],
 "Erase containers and reset storage pool": [
  null,
  "Usuń kontenery i przywróć pulę urządzeń do przechowywania danych"
 ],
 "Error message from Docker:": [
  null,
  "Komunikat o błędzie Dockera:"
 ],
 "Everything": [
  null,
  "Wszystko"
 ],
 "Exited $ExitCode": [
  null,
  "Zakończono $ExitCode"
 ],
 "Expansion Chassis": [
  null,
  "Obudowa rozszerzenia"
 ],
 "Expose container ports": [
  null,
  "Eksponuj porty kontenera"
 ],
 "Failed to start Docker: $0": [
  null,
  "Uruchomienie Dockera się nie powiodło: $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  "Zatrzymanie zakresu Dockera się nie powiodło: $0"
 ],
 "Force Delete": [
  null,
  "Wymuś usunięcie"
 ],
 "Free": [
  null,
  "Wolne"
 ],
 "Gateway:": [
  null,
  "Brama:"
 ],
 "Get new image": [
  null,
  "Pobierz nowy obraz"
 ],
 "Hand Held": [
  null,
  "Przenośny"
 ],
 "Hard Disk": [
  null,
  "Dysk twardy"
 ],
 "IP Address:": [
  null,
  "Adres IP:"
 ],
 "IP Prefix Length:": [
  null,
  "Długość przedrostka IP:"
 ],
 "Id": [
  null,
  "Identyfikator"
 ],
 "Id:": [
  null,
  "Identyfikator:"
 ],
 "Image": [
  null,
  "Obraz"
 ],
 "Image $0": [
  null,
  "Obraz $0"
 ],
 "Image Search": [
  null,
  "Wyszukiwanie obrazów"
 ],
 "Image:": [
  null,
  "Obraz:"
 ],
 "Images": [
  null,
  "Obrazy"
 ],
 "Images and running containers": [
  null,
  "Obrazy i uruchomione kontenery"
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  "Informacje o puli urządzeń do przechowywania danych Docker są niedostępne."
 ],
 "Invalid port": [
  null,
  "Nieprawidłowy port"
 ],
 "IoT Gateway": [
  null,
  "Brama IoT"
 ],
 "Laptop": [
  null,
  "Laptop"
 ],
 "Link to another container": [
  null,
  "Odnośnik do innego kontenera"
 ],
 "Links": [
  null,
  "Łącza"
 ],
 "Links:": [
  null,
  "Odnośniki:"
 ],
 "Local Disks": [
  null,
  "Lokalne dyski"
 ],
 "Low Profile Desktop": [
  null,
  "Komputer stacjonarny o mniejszym rozmiarze"
 ],
 "Lunch Box": [
  null,
  "Lunch Box"
 ],
 "MAC Address:": [
  null,
  "Adres MAC:"
 ],
 "Main Server Chassis": [
  null,
  "Główna obudowa serwera"
 ],
 "Memory": [
  null,
  "Pamięć"
 ],
 "Memory limit": [
  null,
  "Ograniczenie pamięci"
 ],
 "Memory usage:": [
  null,
  "Użycie pamięci:"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Mini PC": [
  null,
  "Mini PC"
 ],
 "Mini Tower": [
  null,
  "Mini Tower"
 ],
 "Mount container volumes": [
  null,
  "Zamontuj woluminy kontenera"
 ],
 "Multi-system Chassis": [
  null,
  "Obudowa dla wielu komputerów"
 ],
 "Name": [
  null,
  "Nazwa"
 ],
 "No": [
  null,
  "Nie"
 ],
 "No additional local storage found.": [
  null,
  "Nie odnaleziono dodatkowych lokalnych urządzeń do przechowywania danych."
 ],
 "No alias specified": [
  null,
  "Nie podano aliasu"
 ],
 "No container specified": [
  null,
  "Nie podano kontenera"
 ],
 "No containers": [
  null,
  "Brak kontenerów"
 ],
 "No containers that match the current filter": [
  null,
  "Brak kontenerów pasujących do obecnego filtru"
 ],
 "No images": [
  null,
  "Brak obrazów"
 ],
 "No images that match the current filter": [
  null,
  "Brak obrazów pasujących do obecnego filtru"
 ],
 "No results for $0": [
  null,
  "Brak wyników dla $0"
 ],
 "No running containers": [
  null,
  "Brak uruchomionych kontenerów"
 ],
 "No running containers that match the current filter": [
  null,
  "Brak uruchomionych kontenerów pasujących do obecnego filtru"
 ],
 "Not authorized to access Docker on this system": [
  null,
  "Brak upoważnienia do łączenia z Dockerem w tym systemie"
 ],
 "Not found": [
  null,
  "Nie odnaleziono"
 ],
 "Notebook": [
  null,
  "Notebook"
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
 "On Failure": [
  null,
  "Podczas niepowodzenia"
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "Po niepowodzeniu próbowanie ponownie $0 raz",
  "Po niepowodzeniu próbowanie ponownie $0 razy",
  "Po niepowodzeniu próbowanie ponownie $0 razy"
 ],
 "Other": [
  null,
  "Inne"
 ],
 "Overview": [
  null,
  "Przegląd"
 ],
 "Peripheral Chassis": [
  null,
  "Obudowa peryferyjna"
 ],
 "Pizza Box": [
  null,
  "Pizza Box"
 ],
 "Please confirm deletion of $0": [
  null,
  "Proszę potwierdzić usunięcie $0"
 ],
 "Please confirm forced deletion of $0": [
  null,
  "Proszę potwierdzić wymuszenie usunięcia $0"
 ],
 "Please try another term": [
  null,
  "Proszę spróbować innego terminu"
 ],
 "Portable": [
  null,
  "Przenośne"
 ],
 "Ports": [
  null,
  "Porty"
 ],
 "Ports:": [
  null,
  "Porty:"
 ],
 "Problems": [
  null,
  "Problemy"
 ],
 "RAID Chassis": [
  null,
  "Obudowa RAID"
 ],
 "Rack Mount Chassis": [
  null,
  "Obudowa do montowania w szafie"
 ],
 "ReadOnly": [
  null,
  "Tylko do odczytu"
 ],
 "ReadWrite": [
  null,
  "Odczyt i zapis"
 ],
 "Reboot": [
  null,
  "Uruchom ponownie"
 ],
 "Reformat and add disks": [
  null,
  "Sformatuj ponownie i dodaj dyski"
 ],
 "Repository": [
  null,
  "Repozytorium"
 ],
 "Reset": [
  null,
  "Przywróć"
 ],
 "Reset Storage Pool": [
  null,
  "Przywróć pulę urządzeń do przechowywania danych"
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  "Przywrócenie puli urządzeń do przechowywania danych usunie wszystkie kontenery i zwolni dyski w puli."
 ],
 "Restart": [
  null,
  "Uruchom ponownie"
 ],
 "Restart Policy": [
  null,
  "Polityka ponownego uruchamiania"
 ],
 "Restart Policy:": [
  null,
  "Polityka ponownego uruchamiania:"
 ],
 "Retries:": [
  null,
  "Próby:"
 ],
 "Run": [
  null,
  "Uruchom"
 ],
 "Run Image": [
  null,
  "Uruchom obraz"
 ],
 "Sealed-case PC": [
  null,
  "Sealed-case PC"
 ],
 "Security": [
  null,
  "Zabezpieczenia"
 ],
 "Set container environment variables": [
  null,
  "Ustaw zmienne środowiskowe kontenera"
 ],
 "Show all containers": [
  null,
  "Wyświetl wszystkie kontenery"
 ],
 "Show all images": [
  null,
  "Wyświetl wszystkie obrazy"
 ],
 "Size": [
  null,
  "Rozmiar"
 ],
 "Solid-State Disk": [
  null,
  "Dysk SSD"
 ],
 "Space-saving Computer": [
  null,
  "Komputer oszczędzający miejsce"
 ],
 "Start": [
  null,
  "Rozpocznij"
 ],
 "Start Docker": [
  null,
  "Uruchom Dockera"
 ],
 "State": [
  null,
  "Stan"
 ],
 "State:": [
  null,
  "Stan:"
 ],
 "Stick PC": [
  null,
  "Stick PC"
 ],
 "Stop": [
  null,
  "Zatrzymaj"
 ],
 "Stopped": [
  null,
  "Zatrzymano"
 ],
 "Storage": [
  null,
  "Przechowywanie danych"
 ],
 "Storage pool": [
  null,
  "Pula urządzeń do przechowywania danych"
 ],
 "Sub Chassis": [
  null,
  "Obudowa podrzędna"
 ],
 "Sub Notebook": [
  null,
  "Sub Notebook"
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Tablet": [
  null,
  "Tablet"
 ],
 "Tag": [
  null,
  "Etykieta"
 ],
 "Tags": [
  null,
  "Etykiety"
 ],
 "The Docker storage pool cannot be managed on this system.": [
  null,
  "Pula urządzeń do przechowywania danych Docker nie może być zarządzana na tym systemie."
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  "Wyszukiwanie z $time ($type) nie zwróciło żadnych zagrożeń."
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  "Wyszukiwanie z $time ($type) się nie powiodło."
 ],
 "This image does not exist.": [
  null,
  "Ten obraz nie istnieje."
 ],
 "Total": [
  null,
  "Razem"
 ],
 "Tower": [
  null,
  "Tower"
 ],
 "Try again": [
  null,
  "Spróbuj ponownie"
 ],
 "Type to filter…": [
  null,
  "Filtrowanie…"
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
 "Unless Stopped": [
  null,
  "Do zatrzymania"
 ],
 "Up since $0": [
  null,
  "Działa od $0"
 ],
 "Used": [
  null,
  "Używane"
 ],
 "Used by Containers": [
  null,
  "Używane przez kontenery"
 ],
 "Volumes": [
  null,
  "Woluminy"
 ],
 "Volumes:": [
  null,
  "Woluminy:"
 ],
 "With terminal": [
  null,
  "Z terminalem"
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  "Brak uprawnień do zrządzania pulą urządzeń do przechowywania danych Docker."
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
 "alias": [
  null,
  "alias"
 ],
 "default": [
  null,
  "domyślnie"
 ],
 "key": [
  null,
  "klucz"
 ],
 "none": [
  null,
  "brak"
 ],
 "search by name, namespace or description": [
  null,
  "wyszukiwanie według nazwy, przestrzeni nazw lub opisu"
 ],
 "select container": [
  null,
  "wybierz kontener"
 ],
 "shares": [
  null,
  "udziały"
 ],
 "to host path": [
  null,
  "do ścieżki gospodarza"
 ],
 "to host port": [
  null,
  "do portu gospodarza"
 ],
 "undefined": [
  null,
  "nieokreślone"
 ],
 "value": [
  null,
  "wartość"
 ],
 "page-title\u0004Containers": [
  null,
  "Kontenery"
 ],
 "page-title\u0004Images": [
  null,
  "Obrazy"
 ]
}));
