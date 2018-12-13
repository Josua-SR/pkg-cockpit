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
 "Apply": [
  null,
  "Zastosuj"
 ],
 "Attach permanently": [
  null,
  "Podłącz na stałe"
 ],
 "Automatically selected host": [
  null,
  "Automatycznie wybrany gospodarz"
 ],
 "Autostart:": [
  null,
  "Automatyczne uruchamianie:"
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
 "Boot Order:": [
  null,
  "Kolejność uruchamiania:"
 ],
 "Bus": [
  null,
  "Magistrala"
 ],
 "CPU Type:": [
  null,
  "Typ procesora:"
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
 "Emulated Machine:": [
  null,
  "Emulowany komputer:"
 ],
 "Enter New VM name": [
  null,
  "Nazwa nowej maszyny wirtualnej"
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
 "Memory:": [
  null,
  "Pamięć:"
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
 "Name": [
  null,
  "Nazwa"
 ],
 "Network Type": [
  null,
  "Typ sieci"
 ],
 "Network settings could not be saved": [
  null,
  "Nie można zapisać ustawień sieci"
 ],
 "Networks": [
  null,
  "Sieci"
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
 "Optimized for:": [
  null,
  "Optymalizacja dla:"
 ],
 "Overview": [
  null,
  "Przegląd"
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
 "Protocol": [
  null,
  "Protokół"
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
 "Run": [
  null,
  "Uruchom"
 ],
 "Run Here": [
  null,
  "Uruchom tutaj"
 ],
 "Running Since:": [
  null,
  "Działa od:"
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
 "Start the VM to see disk statistics.": [
  null,
  "Należy uruchomić maszynę wirtualną, aby wyświetlić statystyki dysku."
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
 "Unplug": [
  null,
  "Odłącz"
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  "Należy zaktualizować do nowszej wersji biblioteki libvirt, aby przeglądać statystyki dysku"
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
 "cores": [
  null,
  "rdzenie"
 ],
 "disabled": [
  null,
  "wyłączone"
 ],
 "enabled": [
  null,
  "włączone"
 ],
 "no": [
  null,
  "nie"
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
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "surowy"
 ],
 "show less": [
  null,
  "wyświetl mniej"
 ],
 "show more": [
  null,
  "wyświetl więcej"
 ],
 "sockets": [
  null,
  "gniazda"
 ],
 "threads": [
  null,
  "wątki"
 ],
 "undefined": [
  null,
  "nieokreślone"
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
 "vCPUs:": [
  null,
  "Wirtualne procesory:"
 ],
 "yes": [
  null,
  "tak"
 ]
}));
