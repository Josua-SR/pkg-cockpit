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
 "$0 Network": [
  null,
  "Sieć $0"
 ],
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 jest dostępne dla większości systemów operacyjnych. Aby zainstalować, należy wyszukać w Menedżerze oprogramowania GNOME lub wykonać polecenie:"
 ],
 "Activate": [
  null,
  "Aktywuj"
 ],
 "Add": [
  null,
  "Dodaj"
 ],
 "Add Disk": [
  null,
  "Dodaj dysk"
 ],
 "Additional": [
  null,
  "Dodatkowe"
 ],
 "Address": [
  null,
  "Adres"
 ],
 "Address:": [
  null,
  "Adres:"
 ],
 "Always attach": [
  null,
  "Podłączanie za każdym razem"
 ],
 "Apply": [
  null,
  "Zastosuj"
 ],
 "Automatically start libvirt on boot": [
  null,
  "Automatyczne włączanie usługi libvirt podczas uruchamiania"
 ],
 "Autostart": [
  null,
  "Automatyczne uruchamianie"
 ],
 "Available": [
  null,
  "Dostępne"
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
 "Cache": [
  null,
  "Pamięć podręczna"
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
 "Connecting to Virtualization Service": [
  null,
  "Łączenie z usługą wirtualizacji"
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
 "Create Storage Pool": [
  null,
  "Utwórz pulę urządzeń do przechowywania danych"
 ],
 "Create VM": [
  null,
  "Utwórz maszynę wirtualną"
 ],
 "Creation of VM $0 failed": [
  null,
  "Utworzenie maszyny wirtualnej $0 się nie powiodło"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "Current Allocation": [
  null,
  "Obecny przydział"
 ],
 "DHCP Range": [
  null,
  "Zakres DHCP"
 ],
 "Deactivate": [
  null,
  "Dezaktywuj"
 ],
 "Delete": [
  null,
  "Usuń"
 ],
 "Delete Content": [
  null,
  "Usuń zawartość"
 ],
 "Delete Storage Pool $0": [
  null,
  "Usuń pulę urządzeń do przechowywania danych $0"
 ],
 "Delete associated storage files:": [
  null,
  "Usunięcie powiązanych plików urządzeń do przechowywania danych:"
 ],
 "Delete the Volumes inside this Pool": [
  null,
  "Usuń woluminy wewnątrz tej puli"
 ],
 "Deleting an inactive Storage Pool will only undefine the Pool. Its content will not be deleted.": [
  null,
  "Usunięcie nieaktywnej puli urządzeń do przechowywania danych spowoduje tylko usunięcie określenia puli. Jej zawartość nie zostanie usunięta."
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
 "Disks cannot be removed from $0 VMs": [
  null,
  "Nie można usuwać dysków z maszyn wirtualnych $0"
 ],
 "Download the MSI from $0": [
  null,
  "Pobierz plik MSI z $0"
 ],
 "Edit": [
  null,
  "Modyfikuj"
 ],
 "Emulated Machine": [
  null,
  "Emulowany komputer"
 ],
 "Existing Disk Image": [
  null,
  "Istniejący obraz dysku"
 ],
 "Existing disk image on host's file system": [
  null,
  "Istniejący obraz dysku w systemie plików gospodarza"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Mniej niż maksymalna liczba wirtualnych procesorów powinna być włączona."
 ],
 "File": [
  null,
  "Plik"
 ],
 "Filesystem Directory": [
  null,
  "Katalog systemu plików"
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
 "Forwarding mode": [
  null,
  "Tryb przekierowania"
 ],
 "General": [
  null,
  "Ogólne"
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
 "Hide Performance Options": [
  null,
  "Ukryj opcje wydajności"
 ],
 "Host": [
  null,
  "Gospodarz"
 ],
 "Host Device": [
  null,
  "Urządzenie gospodarza"
 ],
 "Host Name": [
  null,
  "Nazwa komputera"
 ],
 "Host should not be empty": [
  null,
  "Gospodarz nie może być pusty"
 ],
 "IPv4 Address": [
  null,
  "Adres IPv4"
 ],
 "IPv6 Address": [
  null,
  "Adres IPv6"
 ],
 "Immediately Start VM": [
  null,
  "Od razu uruchom maszynę wirtualną"
 ],
 "In most configurations, macvtap does not work for host to guest network communication.": [
  null,
  "W przypadku większości konfiguracji, macvtap nie działa dla gospodarza w celu komunikacji sieciowej gościa."
 ],
 "Initiator": [
  null,
  "Inicjator"
 ],
 "Initiator IQN should not be empty": [
  null,
  "Inicjator IQN nie może być pusty"
 ],
 "Install": [
  null,
  "Zainstaluj"
 ],
 "Installation Source": [
  null,
  "Źródło instalacji"
 ],
 "Installation Source Type": [
  null,
  "Typ źródła instalacji"
 ],
 "Installation Source should not be empty": [
  null,
  "Źródło instalacji nie może być puste"
 ],
 "Interface Type": [
  null,
  "Typ interfejsu"
 ],
 "Invalid filename": [
  null,
  "Nieprawidłowa nazwa pliku"
 ],
 "Isolated Network": [
  null,
  "Odosobniona sieć"
 ],
 "Launch Remote Viewer": [
  null,
  "Uruchom zdalną przeglądarkę"
 ],
 "Loading ...": [
  null,
  "Wczytywanie…"
 ],
 "Local Install Media": [
  null,
  "Lokalny nośnik instalacji"
 ],
 "MAC Address": [
  null,
  "Adres MAC"
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
 "Maximum Allocation": [
  null,
  "Maksymalny przydział"
 ],
 "Maximum Transmission Unit": [
  null,
  "MTU"
 ],
 "Maximum memory could not be saved": [
  null,
  "Nie można zapisać maksymalnej ilości pamięci"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "Maksymalna liczba wirtualnych procesorów przydzielonych do systemu operacyjnego gościa, musi wynosić między 1 a $0"
 ],
 "Memory": [
  null,
  "Pamięć"
 ],
 "Memory could not be saved": [
  null,
  "Nie można zapisać pamięci"
 ],
 "Memory size between 128 MiB and the maximum allocation": [
  null,
  "Rozmiar między 128 MiB a maksymalnym przydziałem"
 ],
 "MiB": [
  null,
  "MiB"
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
 "NAT to $0": [
  null,
  "NAT do $0"
 ],
 "NIC $0 of VM $1 failed to change state": [
  null,
  "Zmiana stanu NIC $0 maszyny wirtualnej $1 się nie powiodła"
 ],
 "Name": [
  null,
  "Nazwa"
 ],
 "Name should not be empty": [
  null,
  "Nazwa nie może być pusta"
 ],
 "Name: ": [
  null,
  "Nazwa: "
 ],
 "Netmask": [
  null,
  "Maska sieci"
 ],
 "Network $0 failed to get activated": [
  null,
  "Aktywacja sieci $0 się nie powiodła"
 ],
 "Network $0 failed to get deactivated": [
  null,
  "Dezaktywacja sieci $0 się nie powiodła"
 ],
 "Network Boot (PXE)": [
  null,
  "Uruchamianie sieciowe (PXE)"
 ],
 "Network File System": [
  null,
  "NFS"
 ],
 "Network Interfaces": [
  null,
  "Interfejsy sieciowe"
 ],
 "Network Selection does not support PXE.": [
  null,
  "Wybór sieci nie obsługuje PXE."
 ],
 "Network interface settings could not be saved": [
  null,
  "Nie można zapisać ustawień interfejsu sieciowego"
 ],
 "Networks": [
  null,
  "Sieci"
 ],
 "New Volume Name": [
  null,
  "Nazwa nowego woluminu"
 ],
 "No Storage Pools available": [
  null,
  "Brak dostępnych pul urządzeń do przechowywania danych"
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "Dla tej puli urządzeń do przechowywania danych nie określono żadnych woluminów urządzeń do przechowywania danych"
 ],
 "No VM is running or defined on this host": [
  null,
  "Brak uruchomionych lub określonych maszyn wirtualnych na tym gospodarzu"
 ],
 "No Virtual Networks": [
  null,
  "Brak sieci wirtualnych"
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
 "No matching files found": [
  null,
  "Nie odnaleziono pasujących plików"
 ],
 "No network interfaces defined for this VM": [
  null,
  "Nie określono interfejsów sieciowych dla tej maszyny wirtualnej"
 ],
 "No network is defined on this host": [
  null,
  "Na tym gospodarzu nie określono żadnej sieci"
 ],
 "No networks available": [
  null,
  "Brak dostępnych sieci"
 ],
 "No storage pool is defined on this host": [
  null,
  "Na tym gospodarzu nie określono żadnej puli urządzeń do przechowywania danych"
 ],
 "None (Isolated Network)": [
  null,
  "Brak (odizolowana sieć)"
 ],
 "OS Vendor": [
  null,
  "Producent systemu operacyjnego"
 ],
 "One or more selected volumes are used by domains. Detach the disks first to allow volume deletion.": [
  null,
  "Jeden lub więcej zaznaczonych woluminów jest używanych przez domeny. Należy najpierw odłączyć dyski, aby umożliwić usuwanie woluminów."
 ],
 "Only editable when the guest is shut off": [
  null,
  "Można zmieniać tylko przy wyłączonym gościu"
 ],
 "Open": [
  null,
  "Otwórz"
 ],
 "Operating System": [
  null,
  "System operacyjny"
 ],
 "Overview": [
  null,
  "Przegląd"
 ],
 "Path": [
  null,
  "Ścieżka"
 ],
 "Path on host's filesystem": [
  null,
  "Ścieżka w systemie plików gospodarza"
 ],
 "Path to ISO file on host's file system": [
  null,
  "Ścieżka do pliku ISO w systemie plików gospodarza"
 ],
 "Path to file": [
  null,
  "Ścieżka do pliku"
 ],
 "Pause": [
  null,
  "Wstrzymaj"
 ],
 "Persistence": [
  null,
  "Trwałość"
 ],
 "Persistent": [
  null,
  "Trwałe"
 ],
 "Physical Disk Device": [
  null,
  "Fizyczne urządzenie dyskowe"
 ],
 "Physical disk device on host": [
  null,
  "Fizyczne urządzenie dyskowe na gospodarzu"
 ],
 "Please enter new volume name": [
  null,
  "Proszę podać nazwę nowego woluminu"
 ],
 "Please enter new volume size": [
  null,
  "Proszę podać rozmiar nowego woluminu"
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Proszę uruchomić maszynę wirtualną, aby uzyskać dostęp do jej konsoli."
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
 "Prefix": [
  null,
  "Przedrostek"
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
 "QEMU/KVM System connection": [
  null,
  "Połączenie systemowe QEMU/KVM"
 ],
 "QEMU/KVM User connection": [
  null,
  "Połączenie użytkownika QEMU/KVM"
 ],
 "Readonly": [
  null,
  "Tylko do odczytu"
 ],
 "Reconnect": [
  null,
  "Połącz ponownie"
 ],
 "Remote URL": [
  null,
  "Zdalny adres URL"
 ],
 "Restart": [
  null,
  "Uruchom ponownie"
 ],
 "Resume": [
  null,
  "Wznów"
 ],
 "Route to $0": [
  null,
  "Trasa do $0"
 ],
 "Routed Network": [
  null,
  "Trasowana sieć"
 ],
 "Run": [
  null,
  "Uruchom"
 ],
 "Run when host boots": [
  null,
  "Uruchamianie po włączeniu gospodarza"
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
 "Session": [
  null,
  "Sesja"
 ],
 "Show Performance Options": [
  null,
  "Wyświetl opcje wydajności"
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
 "Source Format": [
  null,
  "Format źródłowy"
 ],
 "Source Path": [
  null,
  "Ścieżka źródłowa"
 ],
 "Source path should not be empty": [
  null,
  "Ścieżka źródłowa nie może być pusta"
 ],
 "Source should start with http, ftp or nfs protocol": [
  null,
  "Źródło musi zaczynać się od protokołu http, ftp lub nfs"
 ],
 "Start libvirt": [
  null,
  "Uruchom usługę libvirt"
 ],
 "Start pool when host boots": [
  null,
  "Włączanie puli po uruchomieniu gospodarza"
 ],
 "Startup": [
  null,
  "Uruchamianie"
 ],
 "State": [
  null,
  "Stan"
 ],
 "Storage": [
  null,
  "Przechowywanie danych"
 ],
 "Storage Pool $0 failed to get activated": [
  null,
  "Aktywacja puli urządzeń do przechowywania danych $0 się nie powiodła"
 ],
 "Storage Pool $0 failed to get deactivated": [
  null,
  "Dezaktywacja puli urządzeń do przechowywania danych $0 się nie powiodła"
 ],
 "Storage Pool Name": [
  null,
  "Nazwa puli urządzeń do przechowywania danych"
 ],
 "Storage Pool failed to be created": [
  null,
  "Utworzenie puli urządzeń do przechowywania danych się nie powiodło"
 ],
 "Storage Pools": [
  null,
  "Pule urządzeń do przechowywania danych"
 ],
 "Storage Volumes": [
  null,
  "Woluminy urządzeń do przechowywania danych"
 ],
 "Storage Volumes could not be deleted": [
  null,
  "Nie można usunąć woluminów urządzeń do przechowywania danych"
 ],
 "System": [
  null,
  "System"
 ],
 "Target": [
  null,
  "Cel"
 ],
 "Target Path": [
  null,
  "Ścieżka docelowa"
 ],
 "Target path should not be empty": [
  null,
  "Ścieżka docelowa nie może być pusta"
 ],
 "The Storage Pool could not be deleted": [
  null,
  "Nie można usunąć puli urządzeń do przechowywania danych"
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
 "The directory on the server being exported": [
  null,
  "Eksportowany katalog na serwerze"
 ],
 "The pool is empty": [
  null,
  "Pula jest pusta"
 ],
 "This volume is already used by another VM.": [
  null,
  "Ten wolumin jest już używany przez inną maszynę wirtualną."
 ],
 "Threads per core": [
  null,
  "Wątki na rdzeń"
 ],
 "Too many files found": [
  null,
  "Odnaleziono za dużo plików"
 ],
 "Troubleshoot": [
  null,
  "Rozwiązywanie problemów"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "Type ID": [
  null,
  "Identyfikator typu"
 ],
 "URL": [
  null,
  "Adres URL"
 ],
 "Unique name": [
  null,
  "Unikalna nazwa"
 ],
 "Unit": [
  null,
  "Jednostka"
 ],
 "Unplug": [
  null,
  "Odłącz"
 ],
 "Up to $0 $1 available on the host": [
  null,
  "Do $0 $1 dostępnej na gospodarzu"
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
 "Used by": [
  null,
  "Używane przez"
 ],
 "VCPU settings could not be saved": [
  null,
  "Nie można zapisać ustawień wirtualnego procesora"
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
 "Virtual Machines": [
  null,
  "Maszyny wirtualne"
 ],
 "Virtual Network": [
  null,
  "Sieć wirtualna"
 ],
 "Virtualization Service (libvirt) is Not Active": [
  null,
  "Usługa wirtualizacji (libvirt) nie jest aktywna"
 ],
 "Virtualization Service is Available": [
  null,
  "Usługa wirtualizacji jest dostępna"
 ],
 "Volume": [
  null,
  "Wolumin"
 ],
 "WWPN": [
  null,
  "WWPN"
 ],
 "You need to select the most closely matching OS vendor and Operating System": [
  null,
  "Należy wybrać najlepiej pasującego producenta systemu operacyjnego i system operacyjny"
 ],
 "active": [
  null,
  "aktywne"
 ],
 "bridge": [
  null,
  "mostek"
 ],
 "cdrom": [
  null,
  "CD-ROM"
 ],
 "control-label $0": [
  null,
  "control-label $0"
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
 "iSCSI Initiator IQN": [
  null,
  "Inicjator IQN iSCSI"
 ],
 "iSCSI Target": [
  null,
  "Cel iSCSI"
 ],
 "iSCSI direct Target": [
  null,
  "Bezpośredni cel iSCSI"
 ],
 "iSCSI target IQN": [
  null,
  "IQN celu iSCSI"
 ],
 "idle": [
  null,
  "bezczynne"
 ],
 "inactive": [
  null,
  "nieaktywne"
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
 "paused": [
  null,
  "wstrzymane"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "surowy"
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
 "suspended (PM)": [
  null,
  "uśpione (PM)"
 ],
 "udp": [
  null,
  "UDP"
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
