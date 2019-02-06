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
 "$0 vCPU Details": [
  null,
  "Podrobnosti o virt. procesoru $0"
 ],
 "Action": [
  null,
  "Akce"
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
 "All running virtual machines will be turned off.": [
  null,
  "Všechny spuštěné virtuální stroje budou vypnuty."
 ],
 "Always attach": [
  null,
  "Vždy připojit"
 ],
 "Apply": [
  null,
  "Použít"
 ],
 "Automatically selected host": [
  null,
  "Automaticky vybraný stroj"
 ],
 "Autostart": [
  null,
  "Automatické spouštění"
 ],
 "Available": [
  null,
  "Dostupný"
 ],
 "Base Template": [
  null,
  "Základní šablona"
 ],
 "Base template": [
  null,
  "Základní šablona"
 ],
 "Base template:": [
  null,
  "Základní šablona:"
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
 "CREATE VM action failed": [
  null,
  "Akce VYTVOŘIT VIRT. STROJ se nezdařila"
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
 "Cluster": [
  null,
  "Cluster"
 ],
 "Cluster Templates": [
  null,
  "Šablony clusterů"
 ],
 "Cluster Virtual Machines": [
  null,
  "Cluster virtuálních strojů"
 ],
 "Confirm migration": [
  null,
  "Potvrdit migraci"
 ],
 "Confirm reload:": [
  null,
  "Potvrdit opětovné načtení:"
 ],
 "Confirm save:": [
  null,
  "Potvrdit uložení:"
 ],
 "Connect to oVirt Engine": [
  null,
  "Připojit k oVirt Engine"
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
 "Create New VM": [
  null,
  "Vytvořit nový virt. stroj"
 ],
 "Create VM": [
  null,
  "Vytvořit virt. stroj"
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
 "Description": [
  null,
  "Popis"
 ],
 "Description:": [
  null,
  "Popis:"
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
 "Edit the vdsm.conf": [
  null,
  "Upravit vdsm.conf"
 ],
 "Emulated Machine": [
  null,
  "Emulovaný stroj"
 ],
 "Enter New VM name": [
  null,
  "Zadejte název pro nový virt. stroj"
 ],
 "FQDN": [
  null,
  "FQDN"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Mělo by být zapnuto méně než maximální počet virtuálních procesorů."
 ],
 "File": [
  null,
  "Soubor"
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
  "Počítač"
 ],
 "Host to Maintenance": [
  null,
  "Stroj do údržby"
 ],
 "INSTALL VM action failed": [
  null,
  "Akce NAINSTALOVAT VIRT. STROJ se nezdařila"
 ],
 "Install": [
  null,
  "Nainstalovat"
 ],
 "Launch Remote Viewer": [
  null,
  "Spustit vzdálený prohlížeč"
 ],
 "Loading ...": [
  null,
  "Načítání…"
 ],
 "Loading data ...": [
  null,
  "Načítání dat…"
 ],
 "MAC Address": [
  null,
  "MAC adresa"
 ],
 "MIGRATE action failed": [
  null,
  "Akce MIGRACE se nezdařila"
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
 "MiB": [
  null,
  "MiB"
 ],
 "Migrate To:": [
  null,
  "Migrovat na:"
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
 "No VM found in oVirt.": [
  null,
  "V oVirt nenalezeny žádné virt. stroje."
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
 "No network interfaces defined for this VM": [
  null,
  "Pro tento virt. stroj nebyla určena žádná síťová rozhraní"
 ],
 "No oVirt connection": [
  null,
  "Žádné připojení k oVirt"
 ],
 "No virtual networks": [
  null,
  "Žádné virtuální sítě"
 ],
 "Number of virtual CPUs that gonna be used.": [
  null,
  "Počet virtuálních procesorů které mají být použity."
 ],
 "OK": [
  null,
  "OK"
 ],
 "OS": [
  null,
  "Operační systém"
 ],
 "OS Type:": [
  null,
  "Druh oper. systému:"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Optimized for:": [
  null,
  "Optimalizováno pro:"
 ],
 "Overview": [
  null,
  "Přehled"
 ],
 "Persistence": [
  null,
  "Trvalost"
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  "Potvrďte že má být stroj přepnut do režimu údržby."
 ],
 "Please enter new volume name": [
  null,
  "Zadejte název pro nový svazek"
 ],
 "Please enter new volume size": [
  null,
  "Zadejte velikost nového svazku"
 ],
 "Please provide fully qualified domain name and port of the oVirt engine.": [
  null,
  "Zadejte úplný doménový název a port oVirt engine."
 ],
 "Please provide valid oVirt engine fully qualified domain name (FQDN) and port (443 by default)": [
  null,
  "Zadejte platný úplný doménový název (FQDN) a port (výchozí je 443) oVirt engine"
 ],
 "Please refer to oVirt's $0 for more information about Remote Viewer setup.": [
  null,
  "Pro více informací o nastavení prohlížeče na dálku nahlédněte do $0 k oVirt."
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Pro přístup k jeho konzoli je třeba virtuální stroj napřed zapnout"
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  "Vyčkejte na načtení seznamu virt. strojů ze serveru"
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  "Vyčkejte na načtení seznamu šablon ze serveru"
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
 "Preparing for Maintenance": [
  null,
  "Příprava na údržbu"
 ],
 "Protocol": [
  null,
  "Protokol"
 ],
 "REBOOT action failed": [
  null,
  "Akce RESTART se nezdařila"
 ],
 "Readonly": [
  null,
  "Pouze pro čtení"
 ],
 "Reconnect": [
  null,
  "Znovu připojit"
 ],
 "Register oVirt": [
  null,
  "Zaregistrovat oVirt"
 ],
 "Registering oVirt to Cockpit": [
  null,
  "Registruje se Ovirt do Cockpit"
 ],
 "Reload": [
  null,
  "Načíst znovu"
 ],
 "Restart": [
  null,
  "Restartovat"
 ],
 "Run": [
  null,
  "Spustit"
 ],
 "Run Here": [
  null,
  "Spustit zde"
 ],
 "Running Since:": [
  null,
  "Spuštěno od:"
 ],
 "SET VCPU SETTINGS action failed": [
  null,
  "Akce NASTAVIT NASTAVENÍ VIRT. PROCESORU se nezdařila"
 ],
 "SHUTDOWN action failed": [
  null,
  "Akce VYPNOUT se nezdařila"
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
 "START action failed": [
  null,
  "Akce START se nezdařila"
 ],
 "SUSPEND action failed": [
  null,
  "Akce USPAT se nezdařila"
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
 "State": [
  null,
  "Stav"
 ],
 "Stateless": [
  null,
  "Bezstavové"
 ],
 "Stateless:": [
  null,
  "Bezstavové:"
 ],
 "Suspend": [
  null,
  "Uspat"
 ],
 "Switch Host to Maintenance": [
  null,
  "Přepnout stroj do režimu údržby"
 ],
 "Switching host to maintenance mode failed. Received error: ": [
  null,
  "Přepnutí stroje do režimu údržby se nezdařilo. Obdržena chyba:"
 ],
 "Switching host to maintenance mode in progress ...": [
  null,
  "Přepínání stroje do režimu údržby…"
 ],
 "System": [
  null,
  "Systém"
 ],
 "Template": [
  null,
  "Šablona"
 ],
 "Templates": [
  null,
  "Šablony"
 ],
 "Templates of $0 cluster": [
  null,
  "Šablona clusteru $0"
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
 "The pool is empty": [
  null,
  "Fond je prázdný"
 ],
 "This host is managed by a virtualization manager, so creation of new VMs from the host is not possible.": [
  null,
  "Tento stroj je spravován správou virtualizace, takže vytváření nových virt. strojů z něj není možné."
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  "Tento virtuální stroj není spravován prostřednictvím oVirt"
 ],
 "Threads per core": [
  null,
  "Vláken na jádro"
 ],
 "Type": [
  null,
  "Typ"
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
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "Správa služby VDSM"
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  "Akce SMAZAT VIRT. STROJ (ZLIKVIDOVAT) se nezdařila"
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  "Akce SMAZAT VIRT. STROJ (ZRUŠIT DEFINICI) se nezdařila"
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
 "VM SHUT DOWN action failed": [
  null,
  "Akce VYPNOUT VIRT STROJ se nezdařila"
 ],
 "VM START action failed": [
  null,
  "Akce SPUSTIT VIRT STROJ se nezdařila"
 ],
 "VM icon": [
  null,
  "Ikona virt. stroje"
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
 "Version": [
  null,
  "Verze"
 ],
 "Version num": [
  null,
  "Číslo verze"
 ],
 "Virtual Machines": [
  null,
  "Virtuální stroje"
 ],
 "Virtual Machines of $0 cluster": [
  null,
  "Virtuální stroje clusteru $0"
 ],
 "Volume": [
  null,
  "Svazek"
 ],
 "bridge": [
  null,
  "most"
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "connecting": [
  null,
  "připojuje se"
 ],
 "cores": [
  null,
  "jádra"
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
 "error": [
  null,
  "chyba"
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
 "initializing": [
  null,
  "inicializuje se"
 ],
 "installation failed": [
  null,
  "instalace se nezdařila"
 ],
 "installing OS": [
  null,
  "instaluje se operační systém"
 ],
 "kdumping": [
  null,
  "výpispamětijádra"
 ],
 "maintenance": [
  null,
  "údržba"
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
 "non operational": [
  null,
  "nefunkční"
 ],
 "non responsive": [
  null,
  "neodpovídá"
 ],
 "oVirt": [
  null,
  "oVirt"
 ],
 "oVirt Host State:": [
  null,
  "Stav oVirt hostitele:"
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  "Vykonání instalačního skriptu oVirt poskytovatele se nezdařilo kvůli chybějícím argumentům."
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  "Vykonání instalačního skriptu oVirt poskytovatele se nezdařilo: Nedaří se zapisovat do /etc/cockpit/machines-ovirt.config. Zkuste to s právy správce."
 ],
 "oVirt installation script failed with following output: ": [
  null,
  "Vykonání instalačního skriptu oVirt poskytovatele se nezdařilo s následujícím výstupem:"
 ],
 "oVirt login in progress": [
  null,
  "oVirt přihlášení v běhu"
 ],
 "other": [
  null,
  "ostatní"
 ],
 "paused": [
  null,
  "pozastaveno"
 ],
 "pending approval": [
  null,
  "čeká na schválení"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
 ],
 "reboot": [
  null,
  "restart"
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
 "sockets": [
  null,
  "patic"
 ],
 "suspended (PM)": [
  null,
  "uspáno (správou napájení)"
 ],
 "threads": [
  null,
  "vlákna"
 ],
 "udp": [
  null,
  "udp"
 ],
 "unassigned": [
  null,
  "nepřiřazeno"
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
