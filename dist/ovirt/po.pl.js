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
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 jest dostępne dla większości systemów operacyjnych. Aby zainstalować, należy wyszukać w Menedżerze oprogramowania GNOME lub wykonać polecenie:"
 ],
 "$0 vCPU Details": [
  null,
  "Informacje o wirtualnym procesorze $0"
 ],
 "Action": [
  null,
  "Działanie"
 ],
 "Add": [
  null,
  "Dodaj"
 ],
 "Add Disk": [
  null,
  "Dodaj dysk"
 ],
 "Address": [
  null,
  "Adres"
 ],
 "Address:": [
  null,
  "Adres:"
 ],
 "All running virtual machines will be turned off.": [
  null,
  "Wszystkie uruchomione maszyny wirtualne zostaną wyłączone."
 ],
 "Always attach": [
  null,
  "Podłączanie za każdym razem"
 ],
 "Apply": [
  null,
  "Zastosuj"
 ],
 "Automatically selected host": [
  null,
  "Automatycznie wybrany gospodarz"
 ],
 "Autostart": [
  null,
  "Automatyczne uruchamianie"
 ],
 "Available": [
  null,
  "Dostępne"
 ],
 "Base Template": [
  null,
  "Podstawowy szablon"
 ],
 "Base template": [
  null,
  "Podstawowy szablon"
 ],
 "Base template:": [
  null,
  "Podstawowy szablon:"
 ],
 "Boot Order": [
  null,
  "Kolejność uruchamiania"
 ],
 "Boot order settings could not be saved": [
  null,
  "Nie można zapisać ustawień kolejności uruchamiania"
 ],
 "Bus": [
  null,
  "Magistrala"
 ],
 "CPU Type": [
  null,
  "Typ procesora"
 ],
 "CREATE VM action failed": [
  null,
  "Działanie CREATE VM się nie powiodło"
 ],
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Capacity": [
  null,
  "Pojemność"
 ],
 "Changes will take effect after shutting down the VM": [
  null,
  "Zmiany zostaną uwzględnione po wyłączeniu maszyny wirtualnej"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "Kliknięcie „Uruchom zdalną przeglądarkę” pobierze plik .vv i uruchomi $0."
 ],
 "Cluster": [
  null,
  "Klaster"
 ],
 "Cluster Templates": [
  null,
  "Szablony klastrów"
 ],
 "Cluster Virtual Machines": [
  null,
  "Maszyny wirtualne klastrów"
 ],
 "Confirm migration": [
  null,
  "Potwierdź migrację"
 ],
 "Confirm reload:": [
  null,
  "Potwierdzenie ponownego wczytania:"
 ],
 "Confirm save:": [
  null,
  "Potwierdzenie zapisu:"
 ],
 "Connect to oVirt Engine": [
  null,
  "Połącz z mechanizmem oVirt"
 ],
 "Connect with any $0 viewer application.": [
  null,
  "Połącz z dowolną przeglądarką $0."
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "Połącz z dowolną przeglądarką SPICE lub VNC."
 ],
 "Connecting": [
  null,
  "Łączenie"
 ],
 "Connection": [
  null,
  "Połączenie"
 ],
 "Console Type": [
  null,
  "Typ konsoli"
 ],
 "Consoles": [
  null,
  "Konsole"
 ],
 "Cores per socket": [
  null,
  "Rdzenie na gniazdo"
 ],
 "Create": [
  null,
  "Utwórz"
 ],
 "Create New": [
  null,
  "Utwórz nowy"
 ],
 "Create New VM": [
  null,
  "Utwórz nową maszynę wirtualną"
 ],
 "Create VM": [
  null,
  "Utwórz maszynę wirtualną"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "Delete": [
  null,
  "Usuń"
 ],
 "Delete associated storage files:": [
  null,
  "Usunięcie powiązanych plików urządzeń do przechowywania danych:"
 ],
 "Description": [
  null,
  "Opis"
 ],
 "Description:": [
  null,
  "Opis:"
 ],
 "Device": [
  null,
  "Urządzenie"
 ],
 "Disconnect": [
  null,
  "Rozłącz"
 ],
 "Disconnected": [
  null,
  "Rozłączono"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  "Rozłączono z konsoli szeregowej. Proszę kliknąć przycisk „Połącz ponownie”."
 ],
 "Disk $0 fail to get detached from VM $1": [
  null,
  "Odłączenie dysku $0 z maszyny wirtualnej $1 się nie powiodło"
 ],
 "Disk failed to be attached": [
  null,
  "Podłączenie dysku się nie powiodło"
 ],
 "Disk failed to be created": [
  null,
  "Utworzenie dysku się nie powiodło"
 ],
 "Disks": [
  null,
  "Dyski"
 ],
 "Download the MSI from $0": [
  null,
  "Pobierz plik MSI z $0"
 ],
 "Edit": [
  null,
  "Modyfikuj"
 ],
 "Edit the vdsm.conf": [
  null,
  "Modyfikuj plik vdsm.conf"
 ],
 "Emulated Machine": [
  null,
  "Emulowany komputer"
 ],
 "Enter New VM name": [
  null,
  "Nazwa nowej maszyny wirtualnej"
 ],
 "FORCEOFF action failed: $0": [
  null,
  "Działanie FORCEOFF się nie powiodło: $0"
 ],
 "FQDN": [
  null,
  "FQDN"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Mniej niż maksymalna liczba wirtualnych procesorów powinna być włączona."
 ],
 "File": [
  null,
  "Plik"
 ],
 "Force Restart": [
  null,
  "Wymuś ponowne uruchomienie"
 ],
 "Force Shut Down": [
  null,
  "Wymuś wyłączenie"
 ],
 "Format": [
  null,
  "Sformatuj"
 ],
 "GiB": [
  null,
  "GiB"
 ],
 "Graphics Console (VNC)": [
  null,
  "Konsola graficzna (VNC)"
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  "Konsola graficzna w przeglądarce pulpitu"
 ],
 "HA": [
  null,
  "HA"
 ],
 "HA:": [
  null,
  "HA:"
 ],
 "Host": [
  null,
  "Gospodarz"
 ],
 "Host to Maintenance": [
  null,
  "Gospodarz do konserwacji"
 ],
 "Install": [
  null,
  "Zainstaluj"
 ],
 "Interface Type": [
  null,
  "Typ interfejsu"
 ],
 "Launch Remote Viewer": [
  null,
  "Uruchom zdalną przeglądarkę"
 ],
 "Loading ...": [
  null,
  "Wczytywanie…"
 ],
 "Loading data ...": [
  null,
  "Wczytywanie danych…"
 ],
 "MAC Address": [
  null,
  "Adres MAC"
 ],
 "MIGRATE action failed": [
  null,
  "Działanie MIGRATE się nie powiodło"
 ],
 "Mac": [
  null,
  "Mac"
 ],
 "Mac Address": [
  null,
  "Adres MAC"
 ],
 "Manual Connection": [
  null,
  "Ręczne połączenie"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "Maksymalna liczba wirtualnych procesorów przydzielonych do systemu operacyjnego gościa, musi wynosić między 1 a $0"
 ],
 "Memory": [
  null,
  "Pamięć"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Migrate To:": [
  null,
  "Migracja do:"
 ],
 "Model": [
  null,
  "Model"
 ],
 "Model type": [
  null,
  "Typ modelu"
 ],
 "More Information": [
  null,
  "Więcej informacji"
 ],
 "NIC $0 of VM $1 failed to change state": [
  null,
  "Zmiana stanu NIC $0 maszyny wirtualnej $1 się nie powiodła"
 ],
 "Name": [
  null,
  "Nazwa"
 ],
 "Network Interfaces": [
  null,
  "Interfejsy sieciowe"
 ],
 "Network interface settings could not be saved": [
  null,
  "Nie można zapisać ustawień interfejsu sieciowego"
 ],
 "New Volume Name": [
  null,
  "Nazwa nowego woluminu"
 ],
 "No VM found in oVirt.": [
  null,
  "Nie odnaleziono maszyn wirtualnych w oprogramowaniu oVirt."
 ],
 "No VM is running or defined on this host": [
  null,
  "Brak uruchomionych lub określonych maszyn wirtualnych na tym gospodarzu"
 ],
 "No boot device found": [
  null,
  "Nie odnaleziono żadnego urządzenia startowego"
 ],
 "No console defined for this virtual machine.": [
  null,
  "Dla tej maszyny wirtualnej nie określono żadnej konsoli."
 ],
 "No disks defined for this VM": [
  null,
  "Nie określono dysków dla tej maszyny wirtualnej"
 ],
 "No network interfaces defined for this VM": [
  null,
  "Nie określono interfejsów sieciowych dla tej maszyny wirtualnej"
 ],
 "No oVirt connection": [
  null,
  "Brak połączenia oVirt"
 ],
 "No virtual networks": [
  null,
  "Brak sieci wirtualnych"
 ],
 "None (Isolated Network)": [
  null,
  "Brak (odizolowana sieć)"
 ],
 "Number of virtual CPUs that gonna be used.": [
  null,
  "Liczba wirtualnych procesorów, które będą używane."
 ],
 "OK": [
  null,
  "OK"
 ],
 "OS": [
  null,
  "System operacyjny"
 ],
 "OS Type:": [
  null,
  "Typ systemu operacyjnego:"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Open": [
  null,
  "Otwórz"
 ],
 "Optimized for:": [
  null,
  "Optymalizacja dla:"
 ],
 "Overview": [
  null,
  "Przegląd"
 ],
 "Path": [
  null,
  "Ścieżka"
 ],
 "Pause": [
  null,
  "Wstrzymaj"
 ],
 "Persistence": [
  null,
  "Trwałość"
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  "Proszę potwierdzić, gospodarz zostanie przełączony do trybu konserwacji."
 ],
 "Please enter new volume name": [
  null,
  "Proszę podać nazwę nowego woluminu"
 ],
 "Please enter new volume size": [
  null,
  "Proszę podać rozmiar nowego woluminu"
 ],
 "Please provide fully qualified domain name and port of the oVirt engine.": [
  null,
  "Proszę podać w pełni kwalifikowaną nazwę domeny i port mechanizmu oVirt."
 ],
 "Please provide valid oVirt engine fully qualified domain name (FQDN) and port (443 by default)": [
  null,
  "Proszę podać prawidłową w pełni kwalifikowaną nazwę domeny mechanizmu oVirt (FQDN) i port (domyślnie 443)"
 ],
 "Please refer to oVirt's $0 for more information about Remote Viewer setup.": [
  null,
  "$0 oprogramowania oVirt zawiera więcej informacji o ustawianiu zdalnej przeglądarki."
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Proszę uruchomić maszynę wirtualną, aby uzyskać dostęp do jej konsoli."
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  "Proszę poczekać na wczytanie listy maszyn wirtualnych z serwera."
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  "Proszę poczekać na wczytanie listy szablonów z serwera."
 ],
 "Plug": [
  null,
  "Podłącz"
 ],
 "Pool": [
  null,
  "Pula"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  "Preferowana liczba gniazd eksponowanych gościowi."
 ],
 "Preparing for Maintenance": [
  null,
  "Przygotowywanie do konserwacji"
 ],
 "Private": [
  null,
  "Prywatne"
 ],
 "Product": [
  null,
  "Produkt"
 ],
 "Protocol": [
  null,
  "Protokół"
 ],
 "REBOOT action failed": [
  null,
  "Działanie REBOOT się nie powiodło"
 ],
 "REBOOT_VM action failed: %s0": [
  null,
  "Działanie REBOOT_VM się nie powiodło: %s0"
 ],
 "Readonly": [
  null,
  "Tylko do odczytu"
 ],
 "Reconnect": [
  null,
  "Połącz ponownie"
 ],
 "Register oVirt": [
  null,
  "Zarejestruj oprogramowanie oVirt"
 ],
 "Registering oVirt to Cockpit": [
  null,
  "Rejestrowanie oprogramowania oVirt w programie Cockpit"
 ],
 "Reload": [
  null,
  "Wczytaj ponownie"
 ],
 "Restart": [
  null,
  "Uruchom ponownie"
 ],
 "Resume": [
  null,
  "Wznów"
 ],
 "Run": [
  null,
  "Uruchom"
 ],
 "Run Here": [
  null,
  "Uruchom tutaj"
 ],
 "Run when host boots": [
  null,
  "Uruchamianie po włączeniu gospodarza"
 ],
 "Running Since:": [
  null,
  "Działa od:"
 ],
 "SET VCPU SETTINGS action failed": [
  null,
  "Działanie SET VCPU SETTINGS się nie powiodło"
 ],
 "SHUTDOWN action failed": [
  null,
  "Działanie SHUTDOWN się nie powiodło"
 ],
 "SPICE": [
  null,
  "SPICE"
 ],
 "SPICE Address:": [
  null,
  "Adres SPICE:"
 ],
 "SPICE Port:": [
  null,
  "Port SPICE:"
 ],
 "SPICE TLS Port:": [
  null,
  "Port TLS SPICE:"
 ],
 "START action failed": [
  null,
  "Działanie START się nie powiodło"
 ],
 "START_VM action failed: %s0": [
  null,
  "Działanie START_VM się nie powiodło: %s0"
 ],
 "SUSPEND action failed": [
  null,
  "Działanie SUSPEND się nie powiodło"
 ],
 "Save": [
  null,
  "Zapisz"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  "Wyślij niemaskowalne przerwanie"
 ],
 "Send key": [
  null,
  "Wyślij klawisz"
 ],
 "Serial Console": [
  null,
  "Konsola szeregowa"
 ],
 "Session": [
  null,
  "Sesja"
 ],
 "Shut Down": [
  null,
  "Wyłącz"
 ],
 "Size": [
  null,
  "Rozmiar"
 ],
 "Sockets": [
  null,
  "Gniazda"
 ],
 "Source": [
  null,
  "Źródło"
 ],
 "State": [
  null,
  "Stan"
 ],
 "Stateless": [
  null,
  "Bez stanu"
 ],
 "Stateless:": [
  null,
  "Bez stanu:"
 ],
 "Suspend": [
  null,
  "Uśpij"
 ],
 "Switch Host to Maintenance": [
  null,
  "Przełącz gospodarza do konserwacji"
 ],
 "Switching host to maintenance mode failed. Received error: ": [
  null,
  "Przełączenie gospodarza do trybu konserwacji się nie powiodło. Otrzymany błąd:"
 ],
 "Switching host to maintenance mode in progress ...": [
  null,
  "Trwa przełączanie gospodarza do trybu konserwacji…"
 ],
 "System": [
  null,
  "System"
 ],
 "Target": [
  null,
  "Cel"
 ],
 "Template": [
  null,
  "Szablon"
 ],
 "Templates": [
  null,
  "Szablony"
 ],
 "Templates of $0 cluster": [
  null,
  "Szablony klastra $0"
 ],
 "The VM crashed.": [
  null,
  "Maszyna wirtualna uległa awarii."
 ],
 "The VM is down.": [
  null,
  "Maszyna wirtualna jest wyłączona."
 ],
 "The VM is going down.": [
  null,
  "Maszyna wirtualna jest wyłączana."
 ],
 "The VM is idle.": [
  null,
  "Maszyna wirtualna jest bezczynna."
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  "Maszyna wirtualna jest w trakcie umierania (wyłączanie lub nie ukończono awarii)."
 ],
 "The VM is paused.": [
  null,
  "Maszyna wirtualna jest wstrzymana."
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  "Maszyna wirtualna jest uruchomiona i przed jej usunięciem zostanie wymuszone jej wyłączenie."
 ],
 "The VM is running.": [
  null,
  "Maszyna wirtualna jest uruchomiona."
 ],
 "The VM is suspended by guest power management.": [
  null,
  "Maszyna wirtualna jest uśpiona przez zarządzanie zasilaniem."
 ],
 "The pool is empty": [
  null,
  "Pula jest pusta"
 ],
 "This host is managed by a virtualization manager, so creation of new VMs from the host is not possible.": [
  null,
  "Ten gospodarz jest zarządzany przez menedżera wirtualizacji, więc tworzenie nowych maszyn wirtualnych z gospodarza nie jest możliwe."
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  "Ta maszyna wirtualna nie jest zarządzana przez oprogramowanie oVirt"
 ],
 "Threads per core": [
  null,
  "Wątki na rdzeń"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "Type ID": [
  null,
  "Identyfikator typu"
 ],
 "Unit": [
  null,
  "Jednostka"
 ],
 "Unplug": [
  null,
  "Odłącz"
 ],
 "Usage": [
  null,
  "Użycie"
 ],
 "Use Existing": [
  null,
  "Użyj istniejącej"
 ],
 "Used": [
  null,
  "Używane"
 ],
 "VCPU settings could not be saved": [
  null,
  "Nie można zapisać ustawień wirtualnego procesora"
 ],
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "Zarządzanie usługami VDSM"
 ],
 "VM $0 failed to Reboot": [
  null,
  "Ponowne uruchomienie maszyny wirtualnej $0 się nie powiodło"
 ],
 "VM $0 failed to force Reboot": [
  null,
  "Wymuszenie ponownego uruchomienia maszyny wirtualnej $0 się nie powiodło"
 ],
 "VM $0 failed to force shutdown": [
  null,
  "Wymuszenie wyłączenia maszyny wirtualnej $0 się nie powiodło"
 ],
 "VM $0 failed to get deleted": [
  null,
  "Usunięcie maszyny wirtualnej $0 się nie powiodło"
 ],
 "VM $0 failed to get installed": [
  null,
  "Zainstalowanie maszyny wirtualnej $0 się nie powiodło"
 ],
 "VM $0 failed to pause": [
  null,
  "Wstrzymanie maszyny wirtualnej $0 się nie powiodło"
 ],
 "VM $0 failed to resume": [
  null,
  "Wznowienie maszyny wirtualnej $0 się nie powiodło"
 ],
 "VM $0 failed to send NMI": [
  null,
  "Wysłanie NMI w maszynie wirtualnej $0 się nie powiodło"
 ],
 "VM $0 failed to shutdown": [
  null,
  "Wyłączenie maszyny wirtualnej $0 się nie powiodło"
 ],
 "VM $0 failed to start": [
  null,
  "Uruchomienie maszyny wirtualnej $0 się nie powiodło"
 ],
 "VM icon": [
  null,
  "Ikona maszyny wirtualnej"
 ],
 "VNC": [
  null,
  "VNC"
 ],
 "VNC Address:": [
  null,
  "Adres VNC:"
 ],
 "VNC Port:": [
  null,
  "Port VNC:"
 ],
 "VNC TLS Port:": [
  null,
  "Port TLS VNC:"
 ],
 "Vendor": [
  null,
  "Producent"
 ],
 "Version": [
  null,
  "Wersja"
 ],
 "Version num": [
  null,
  "Numer wersji"
 ],
 "Virtual Machines": [
  null,
  "Maszyny wirtualne"
 ],
 "Virtual Machines of $0 cluster": [
  null,
  "Maszyny wirtualne klastra $0"
 ],
 "Volume": [
  null,
  "Wolumin"
 ],
 "WWPN": [
  null,
  "WWPN"
 ],
 "bridge": [
  null,
  "mostek"
 ],
 "cdrom": [
  null,
  "CD-ROM"
 ],
 "connecting": [
  null,
  "łączenie"
 ],
 "cores": [
  null,
  "rdzenie"
 ],
 "crashed": [
  null,
  "uległo awarii"
 ],
 "custom": [
  null,
  "niestandardowe"
 ],
 "direct": [
  null,
  "bezpośrednie"
 ],
 "disabled": [
  null,
  "wyłączone"
 ],
 "disk": [
  null,
  "dysk"
 ],
 "down": [
  null,
  "w dół"
 ],
 "dying": [
  null,
  "w trakcie umierania"
 ],
 "enabled": [
  null,
  "włączone"
 ],
 "error": [
  null,
  "błąd"
 ],
 "ethernet": [
  null,
  "Ethernet"
 ],
 "host": [
  null,
  "gospodarz"
 ],
 "host device": [
  null,
  "urządzenie gospodarza"
 ],
 "hostdev": [
  null,
  "urządzenie gospodarza"
 ],
 "idle": [
  null,
  "bezczynne"
 ],
 "initializing": [
  null,
  "inicjowanie"
 ],
 "installation failed": [
  null,
  "instalacja się nie powiodła"
 ],
 "installing OS": [
  null,
  "instalowanie systemu operacyjnego"
 ],
 "kdumping": [
  null,
  "zrzucanie kdump"
 ],
 "maintenance": [
  null,
  "konserwacja"
 ],
 "mcast": [
  null,
  "multicast"
 ],
 "network": [
  null,
  "sieć"
 ],
 "no": [
  null,
  "nie"
 ],
 "non operational": [
  null,
  "nie działa"
 ],
 "non responsive": [
  null,
  "nie odpowiada"
 ],
 "oVirt": [
  null,
  "oVirt"
 ],
 "oVirt Host State:": [
  null,
  "Stan gospodarza oVirt:"
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  "Skrypt instalacji dostawcy oVirt się nie powiódł z powodu brakujących parametrów."
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  "Skrypt instalacji dostawcy oVirt się nie powiódł: nie można zapisać do pliku /etc/cockpit/machines-ovirt.config, próbowanie jako root."
 ],
 "oVirt installation script failed with following output: ": [
  null,
  "Skrypt instalacji oVirt się nie powiódł, jego wyjście:"
 ],
 "oVirt login in progress": [
  null,
  "Trwa logowanie oprogramowania oVirt"
 ],
 "paused": [
  null,
  "wstrzymane"
 ],
 "pending approval": [
  null,
  "oczekuje na akceptację"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "surowy"
 ],
 "reboot": [
  null,
  "uruchom ponownie"
 ],
 "redirected device": [
  null,
  "przekierowane urządzenie"
 ],
 "running": [
  null,
  "działanie"
 ],
 "server": [
  null,
  "serwer"
 ],
 "show less": [
  null,
  "wyświetl mniej"
 ],
 "show more": [
  null,
  "wyświetl więcej"
 ],
 "shut off": [
  null,
  "wyłącz"
 ],
 "shutdown": [
  null,
  "wyłączenie"
 ],
 "sockets": [
  null,
  "gniazda"
 ],
 "suspended (PM)": [
  null,
  "uśpione (PM)"
 ],
 "threads": [
  null,
  "wątki"
 ],
 "udp": [
  null,
  "UDP"
 ],
 "unassigned": [
  null,
  "nieprzydzielone"
 ],
 "undefined": [
  null,
  "nieokreślone"
 ],
 "up": [
  null,
  "w górę"
 ],
 "user": [
  null,
  "użytkownik"
 ],
 "vCPU Count": [
  null,
  "Liczba wirtualnych procesorów"
 ],
 "vCPU Maximum": [
  null,
  "Maksymalna liczba wirtualnych procesorów"
 ],
 "vCPUs": [
  null,
  "Wirtualne procesory"
 ],
 "vhostuser": [
  null,
  "użytkownik gospodarza wirtualizacji"
 ],
 "yes": [
  null,
  "tak"
 ]
}));
