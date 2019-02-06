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
nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2;
return plural;
},
  "language": "cs",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 je k dispozici pro většinu operačních systémů. Pro instalaci vyhledejte v GNOME Software nebo spusťte následující:"
 ],
 "Add": [
  null,
  "Přidat"
 ],
 "Add Disk": [
  null,
  "Přidat disk"
 ],
 "Address": [
  null,
  "Adresa"
 ],
 "Address:": [
  null,
  "Adresa:"
 ],
 "Always attach": [
  null,
  "Vždy připojit"
 ],
 "Apply": [
  null,
  "Použít"
 ],
 "Automatically start libvirt on boot": [
  null,
  "Spouštět libvirt automaticky při startu"
 ],
 "Autostart": [
  null,
  "Automatické spouštění"
 ],
 "Available": [
  null,
  "Dostupný"
 ],
 "Boot Order": [
  null,
  "Pořadí zavádění"
 ],
 "Bus": [
  null,
  "Sběrnice"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "Akce ZMĚNIT STAV SÍTĚ se nezdařila"
 ],
 "CPU Type": [
  null,
  "Typ procesoru"
 ],
 "Cancel": [
  null,
  "Storno"
 ],
 "Capacity": [
  null,
  "Kapacita"
 ],
 "Changes will take effect after shutting down the VM": [
  null,
  "Změny se projeví až po vypnutí virt. stroje"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "Kliknutím na „Spustit vzdálený prohlížeč“ se stáhne soubor ve formátu .vv a spustí se $0."
 ],
 "Connect with any $0 viewer application.": [
  null,
  "Připojte se libovolnou aplikací pro zobrazování $0."
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "Připojte se libovolnou aplikací pro zobrazování SPICE nebo VNC."
 ],
 "Connecting": [
  null,
  "Připojování"
 ],
 "Connecting to Virtualization Service": [
  null,
  "Připojuje se ke službě virtualizace"
 ],
 "Connection": [
  null,
  "Spojení"
 ],
 "Console Type": [
  null,
  "Typ konzole"
 ],
 "Consoles": [
  null,
  "Konzole"
 ],
 "Cores per socket": [
  null,
  "Jader na patici"
 ],
 "Create": [
  null,
  "Vytvořit"
 ],
 "Create New": [
  null,
  "Vytvořit nový"
 ],
 "Create Storage Pool": [
  null,
  "Vytvořit fond úložiště"
 ],
 "Create VM": [
  null,
  "Vytvořit virt. stroj"
 ],
 "Creation of vm $0 failed": [
  null,
  "Vytvoření virt. stroje $0 se nezdařilo"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "Delete": [
  null,
  "Smazat"
 ],
 "Delete associated storage files:": [
  null,
  "Smazat související soubory úložiště:"
 ],
 "Device": [
  null,
  "Zařízení"
 ],
 "Disconnect": [
  null,
  "Odpojit"
 ],
 "Disconnected": [
  null,
  "Odpojeno"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  "Odpojeno od sériové konzole. Klikněte na tlačítko Znovu připojit"
 ],
 "Disk failed to be attached": [
  null,
  "Disk se nepodařilo připojit"
 ],
 "Disk failed to be created": [
  null,
  "Disk se nepodařilo vytvořit"
 ],
 "Disks": [
  null,
  "Disky"
 ],
 "Download the MSI from $0": [
  null,
  "Stáhnout MSI z $0"
 ],
 "Edit": [
  null,
  "Upravit"
 ],
 "Emulated Machine": [
  null,
  "Emulovaný stroj"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Mělo by být zapnuto méně než maximální počet virtuálních procesorů."
 ],
 "File": [
  null,
  "Soubor"
 ],
 "Filesystem": [
  null,
  "Souborový systém"
 ],
 "Filesystem Directory": [
  null,
  "Složka v souborovém systému"
 ],
 "Force Restart": [
  null,
  "Vynutit restart"
 ],
 "Force Shut Down": [
  null,
  "Vynutit vypnutí"
 ],
 "Format": [
  null,
  "Formát"
 ],
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  "Akce ZJISTIT MAXIMUM VIRT. PROCESORŮ HYPERVIZORU se nezdařila"
 ],
 "GiB": [
  null,
  "GiB"
 ],
 "Graphics Console (VNC)": [
  null,
  "Grafická konzole (VNC)"
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  "Grafická konzole v desktopovém prohlížeči"
 ],
 "Host": [
  null,
  "Počítač"
 ],
 "Host Name": [
  null,
  "Název počítače"
 ],
 "Host should not be empty": [
  null,
  "Hostitele je třeba vyplnit"
 ],
 "INSTALL VM action failed": [
  null,
  "Akce NAINSTALOVAT VIRT. STROJ se nezdařila"
 ],
 "Immediately Start VM": [
  null,
  "Okamžitě spustit virt. stroj"
 ],
 "Install": [
  null,
  "Nainstalovat"
 ],
 "Installation Source": [
  null,
  "Zdroj instalace"
 ],
 "Installation Source Type": [
  null,
  "Typ zdroje instalace"
 ],
 "Installation Source should not be empty": [
  null,
  "Zdroj instalace je třeba vyplnit"
 ],
 "Invalid filename": [
  null,
  "Neplatný název souboru"
 ],
 "Launch Remote Viewer": [
  null,
  "Spustit vzdálený prohlížeč"
 ],
 "Loading ...": [
  null,
  "Načítání…"
 ],
 "MAC Address": [
  null,
  "MAC adresa"
 ],
 "Mac Address": [
  null,
  "MAC adresa"
 ],
 "Manual Connection": [
  null,
  "Ruční připojení"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "Maximální počet virtuálních procesorů, přiřazených operačnímu systému hosta. Je třeba, aby bylo z rozmezí 1 až $0"
 ],
 "Memory": [
  null,
  "Paměť"
 ],
 "Memory should be positive number": [
  null,
  "Paměť by mělo být kladné číslo"
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
  "Více informací"
 ],
 "Name": [
  null,
  "Název"
 ],
 "Name should not be empty": [
  null,
  "Název je třeba vyplnit"
 ],
 "Name should not consist of empty characters only": [
  null,
  "Název by se neměl sestávat pouze z prázdných znaků"
 ],
 "Network File System": [
  null,
  "Síťový souborový systém"
 ],
 "Network Type": [
  null,
  "Typ sítě"
 ],
 "Network settings could not be saved": [
  null,
  "Nastavení sítě se nepodařilo uložit"
 ],
 "Networks": [
  null,
  "Sítě"
 ],
 "New Volume Name": [
  null,
  "Název pro nový svazek"
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "Pro tento fond úložiště nejsou definované žádné úložné svazky"
 ],
 "No VM is running or defined on this host": [
  null,
  "Na tomto stroji nejsou spuštěné nebo definované žádné virt. stroje"
 ],
 "No boot device found": [
  null,
  "Nenalezeno žádné zařízení pro zavádění"
 ],
 "No console defined for this virtual machine.": [
  null,
  "Pro tento virtuální stroj není definována žádná konzole."
 ],
 "No disks defined for this VM": [
  null,
  "Pro tento virt. stroj nejsou definované žádné disky"
 ],
 "No matching files found": [
  null,
  "Nenalezeny žádné odpovídající soubory"
 ],
 "No network interfaces defined for this VM": [
  null,
  "Pro tento virt. stroj nebyla určena žádná síťová rozhraní"
 ],
 "No storage pool is defined on this host": [
  null,
  "Na tomto stroji není definován žádný fond úložiště"
 ],
 "No virtual networks": [
  null,
  "Žádné virtuální sítě"
 ],
 "OS Vendor": [
  null,
  "Výrobce oper. systému"
 ],
 "Operating System": [
  null,
  "Operační systém"
 ],
 "Overview": [
  null,
  "Přehled"
 ],
 "Path": [
  null,
  "Popis umístění"
 ],
 "Path on host's filesystem": [
  null,
  "Umístění v souborovém systému hostitele"
 ],
 "Path to ISO file on host's file system": [
  null,
  "Popis umístění ISO souboru na souborovém systému hostitele"
 ],
 "Path to file": [
  null,
  "Popis umístění serveru"
 ],
 "Persistence": [
  null,
  "Trvalost"
 ],
 "Persistent": [
  null,
  "Trvalé"
 ],
 "Please enter new volume name": [
  null,
  "Zadejte název pro nový svazek"
 ],
 "Please enter new volume size": [
  null,
  "Zadejte velikost nového svazku"
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Pro přístup k jeho konzoli je třeba virtuální stroj napřed zapnout"
 ],
 "Plug": [
  null,
  "Připojit"
 ],
 "Pool": [
  null,
  "Úložiště"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  "Upřednostňovaný počet patic který odhalit hostovi."
 ],
 "Protocol": [
  null,
  "Protokol"
 ],
 "QEMU/KVM System connection": [
  null,
  "Systémové QEMU/KVM spojení"
 ],
 "QEMU/KVM User connection": [
  null,
  "Uživatelské QEMU/KVM spojení"
 ],
 "Readonly": [
  null,
  "Pouze pro čtení"
 ],
 "Reconnect": [
  null,
  "Znovu připojit"
 ],
 "Remote URL": [
  null,
  "Vzdálená URL adresa"
 ],
 "Restart": [
  null,
  "Restartovat"
 ],
 "Run": [
  null,
  "Spustit"
 ],
 "SPICE": [
  null,
  "SPICE"
 ],
 "SPICE Address:": [
  null,
  "Adresa SPICE:"
 ],
 "SPICE Port:": [
  null,
  "Port SPICE:"
 ],
 "SPICE TLS Port:": [
  null,
  "TLS port SPICE:"
 ],
 "Save": [
  null,
  "Uložit"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  "Poslat nemaskovatelné přerušení"
 ],
 "Send key": [
  null,
  "Poslat stisk klávesy"
 ],
 "Serial Console": [
  null,
  "Sériová konzole"
 ],
 "Session": [
  null,
  "Sezení"
 ],
 "Shut Down": [
  null,
  "Vypnout"
 ],
 "Size": [
  null,
  "Velikost"
 ],
 "Sockets": [
  null,
  "Sokety"
 ],
 "Source": [
  null,
  "Zdroj"
 ],
 "Source Path": [
  null,
  "Popis umístění zdroje"
 ],
 "Source path should not be empty": [
  null,
  "Popis umístění zdroje je třeba vyplnit"
 ],
 "Source should start with http, ftp or nfs protocol": [
  null,
  "Zdroj by měl začínat na http, ftp nebo nfs protokol"
 ],
 "Start libvirt": [
  null,
  "Spustit libvirt"
 ],
 "Start pool when host boots": [
  null,
  "Spustit fond při startu hostitele"
 ],
 "Startup": [
  null,
  "Při spuštění"
 ],
 "State": [
  null,
  "Stav"
 ],
 "Storage Pool Name": [
  null,
  "Název fondu úložiště"
 ],
 "Storage Pool failed to be created": [
  null,
  "Fond úložiště se nepodařilo uložit"
 ],
 "Storage Pools": [
  null,
  "Fondy úložiště"
 ],
 "Storage Size": [
  null,
  "Velikost úložiště"
 ],
 "Storage Size should not be negative number": [
  null,
  "Velikost úložiště by nemělo být záporné číslo"
 ],
 "Storage Volumes": [
  null,
  "Úložné svazky"
 ],
 "System": [
  null,
  "Systém"
 ],
 "Target Path": [
  null,
  "Popis umístění cíle"
 ],
 "Target path should not be empty": [
  null,
  "Popis umístění cíle je třeba vyplnit"
 ],
 "The VM crashed.": [
  null,
  "Virt. stroj zhavaroval."
 ],
 "The VM is down.": [
  null,
  "Virt. stroj je vypnutý."
 ],
 "The VM is going down.": [
  null,
  "Virt. stroj se vypíná"
 ],
 "The VM is idle.": [
  null,
  "Virt. stroj je nečinný."
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  "Virt. stroj se poroučí (vypnutí nebo nedokončený pád)."
 ],
 "The VM is paused.": [
  null,
  "Virt. stroj je pozastavený."
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  "Virt. stroj je spuštěný a před smazáním bude vynuceně vypnut."
 ],
 "The VM is running.": [
  null,
  "Virt. stroj je spuštěný."
 ],
 "The VM is suspended by guest power management.": [
  null,
  "Virt. stroj je uspaný svou vlastní správou napájení."
 ],
 "The directory on the server being exported": [
  null,
  "Složka na serveru, kterou exportovat"
 ],
 "The pool is empty": [
  null,
  "Fond je prázdný"
 ],
 "Threads per core": [
  null,
  "Vláken na jádro"
 ],
 "Too many files found": [
  null,
  "Nalezeno příliš mnoho souborů"
 ],
 "Troubleshoot": [
  null,
  "Řešit potíže"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unique name": [
  null,
  "Neopakující se název"
 ],
 "Unplug": [
  null,
  "Odpojit"
 ],
 "Usage": [
  null,
  "Použití"
 ],
 "Use Existing": [
  null,
  "Použít existující"
 ],
 "Used": [
  null,
  "Využito"
 ],
 "VCPU settings could not be saved": [
  null,
  "Nastavení virt. procesoru se nepodařilo uložit"
 ],
 "VM CHANGE_NETWORK_STATE action failed": [
  null,
  "Akce ZMĚNA STAVU SÍTĚ VIRT. STROJE se nezdařila"
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  "Akce SMAZAT VIRT. STROJ (ZLIKVIDOVAT) se nezdařila"
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  "Akce SMAZAT VIRT. STROJ (ZRUŠIT DEFINICI) se nezdařila"
 ],
 "VM DELETE action failed": [
  null,
  "Akce SMAZAT STROJ se nezdařila"
 ],
 "VM DETACH_DISK action failed": [
  null,
  "Akce ODPOJIT DISK VIRT. STROJE se nezdařila"
 ],
 "VM FORCE OFF action failed": [
  null,
  "Akce VYNUCENÉ VYPNUTÍ VIRT. STROJE se nezdařila"
 ],
 "VM FORCE REBOOT action failed": [
  null,
  "Akce VYNUCENÝ RESTART se nezdařila"
 ],
 "VM REBOOT action failed": [
  null,
  "Akce RESTART se nezdařila"
 ],
 "VM SEND Non-Maskable Interrrupt action failed": [
  null,
  "Akce POSLAT VIRT. STROJI nemaskovatelné přerušení se nezdařila"
 ],
 "VM SENDNMI action failed": [
  null,
  "Akce POSLAT VIRT. STROJI NEMASK. PŘERUŠENÍ se nezdařila"
 ],
 "VM SHUT DOWN action failed": [
  null,
  "Akce VYPNOUT VIRT STROJ se nezdařila"
 ],
 "VM START action failed": [
  null,
  "Akce SPUSTIT VIRT STROJ se nezdařila"
 ],
 "VNC": [
  null,
  "VNC"
 ],
 "VNC Address:": [
  null,
  "VNC adresa:"
 ],
 "VNC Port:": [
  null,
  "VNC port"
 ],
 "VNC TLS Port:": [
  null,
  "VNC TLS port:"
 ],
 "Virtual Machines": [
  null,
  "Virtuální stroje"
 ],
 "Virtualization Service (libvirt) is Not Active": [
  null,
  "Služba virtualizace (libvirt) není aktivní"
 ],
 "Virtualization Service is Available": [
  null,
  "Virtualizační služba je k dispozici"
 ],
 "Volume": [
  null,
  "Svazek"
 ],
 "active": [
  null,
  "aktivní"
 ],
 "bridge": [
  null,
  "most"
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "crashed": [
  null,
  "zhavarovalo"
 ],
 "custom": [
  null,
  "uživatelsky určené"
 ],
 "direct": [
  null,
  "přímé"
 ],
 "disabled": [
  null,
  "zakázáno"
 ],
 "disk": [
  null,
  "disk"
 ],
 "down": [
  null,
  "vypnuté"
 ],
 "dying": [
  null,
  "vypíná se"
 ],
 "enabled": [
  null,
  "povoleno"
 ],
 "ethernet": [
  null,
  "ethernet"
 ],
 "host": [
  null,
  "stroj"
 ],
 "hostdev": [
  null,
  "zařízení hostitele"
 ],
 "idle": [
  null,
  "nečinný"
 ],
 "inactive": [
  null,
  "neaktivní"
 ],
 "mcast": [
  null,
  "vícesměrvysílání"
 ],
 "network": [
  null,
  "síť"
 ],
 "no": [
  null,
  "ne"
 ],
 "other": [
  null,
  "ostatní"
 ],
 "paused": [
  null,
  "pozastaveno"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
 ],
 "running": [
  null,
  "spuštěné"
 ],
 "server": [
  null,
  "server"
 ],
 "show less": [
  null,
  "zobrazit méně"
 ],
 "show more": [
  null,
  "zobrazit více"
 ],
 "shut off": [
  null,
  "vypnuto"
 ],
 "shutdown": [
  null,
  "vypnout"
 ],
 "suspended (PM)": [
  null,
  "uspáno (správou napájení)"
 ],
 "udp": [
  null,
  "udp"
 ],
 "undefined": [
  null,
  "nedefinované"
 ],
 "up": [
  null,
  "zapnuto"
 ],
 "user": [
  null,
  "uživatel"
 ],
 "vCPU Count": [
  null,
  "Počet virt. procesorů"
 ],
 "vCPU Maximum": [
  null,
  "Maximum virt. procesorů"
 ],
 "vCPUs": [
  null,
  "virt. procesorů"
 ],
 "vhostuser": [
  null,
  "uzivatelvirtstroje"
 ],
 "yes": [
  null,
  "ano"
 ]
}));
