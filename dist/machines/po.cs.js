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
nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2;
return plural;
},
  "language": "cs",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Network": [
  null,
  "Síť $0"
 ],
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 je k dispozici pro většinu operačních systémů. Pro instalaci vyhledejte v GNOME Software nebo spusťte následující:"
 ],
 "Activate": [
  null,
  "Aktivovat"
 ],
 "Add": [
  null,
  "Přidat"
 ],
 "Add Disk": [
  null,
  "Přidat disk"
 ],
 "Additional": [
  null,
  "Další"
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
 "Boot order settings could not be saved": [
  null,
  "Nastavení pořadí zavádění se nepodařilo uložit"
 ],
 "Bus": [
  null,
  "Sběrnice"
 ],
 "CPU Type": [
  null,
  "Typ procesoru"
 ],
 "Cache": [
  null,
  "Mezipaměť"
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
 "Confirm deletion of the Virtual Network": [
  null,
  "Potvrďte smazání virtuální sítě"
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
 "Creation of VM $0 failed": [
  null,
  "Vytvoření virt. stroje $0 se nezdařilo"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "Current Allocation": [
  null,
  "Stávající přiřazení"
 ],
 "DHCP Range": [
  null,
  "DHCP rozsah"
 ],
 "Deactivate": [
  null,
  "Deaktivovat"
 ],
 "Delete": [
  null,
  "Smazat"
 ],
 "Delete Content": [
  null,
  "Smazat obsah"
 ],
 "Delete Network $0": [
  null,
  "Smazat síť $0"
 ],
 "Delete Storage Pool $0": [
  null,
  "Smazat fond úložiště $0"
 ],
 "Delete associated storage files:": [
  null,
  "Smazat související soubory úložiště:"
 ],
 "Delete the Volumes inside this Pool": [
  null,
  "Smazat svazek v tomto fondu"
 ],
 "Deleting an inactive Storage Pool will only undefine the Pool. Its content will not be deleted.": [
  null,
  "Smazání neaktivního fondu úložiště pouze zruší jeho definici. Obsah fondu samotný smazán nebude."
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
 "Disk $0 fail to get detached from VM $1": [
  null,
  "Disk $0 se nepodařilo odpojit od virt. stroje $1"
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
 "Disks cannot be removed from $0 VMs": [
  null,
  "Disky není možné odebrat z $0 virt. strojů"
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
 "Existing Disk Image": [
  null,
  "Existující obraz disku"
 ],
 "Existing disk image on host's file system": [
  null,
  "Existující obraz disku na souborovém systému hostitele"
 ],
 "Failed to fetch the IP addresses of the interfaces present in $0": [
  null,
  "Nepodařilo se zjistit IP adresy rozhraní nacházející se v $0"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Mělo by být zapnuto méně než maximální počet virtuálních procesorů."
 ],
 "File": [
  null,
  "Soubor"
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
 "Forwarding mode": [
  null,
  "Režim přeposílání"
 ],
 "General": [
  null,
  "Obecné"
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
 "Hide Performance Options": [
  null,
  "Předvolby pro výkonnost"
 ],
 "Host": [
  null,
  "Počítač"
 ],
 "Host Device": [
  null,
  "Zařízení hostitele"
 ],
 "Host Name": [
  null,
  "Název počítače"
 ],
 "Host should not be empty": [
  null,
  "Hostitele je třeba vyplnit"
 ],
 "IP Address": [
  null,
  "IP adresa"
 ],
 "IPv4 Address": [
  null,
  "IPv4 adresa"
 ],
 "IPv6 Address": [
  null,
  "IPv6 adresa"
 ],
 "Immediately Start VM": [
  null,
  "Okamžitě spustit virt. stroj"
 ],
 "In most configurations, macvtap does not work for host to guest network communication.": [
  null,
  "Ve většině uspořádání, macvtap nefunguje pro komunikaci hostitel-host."
 ],
 "Initiator": [
  null,
  "Iniciátor"
 ],
 "Initiator IQN should not be empty": [
  null,
  "IQN iniciátoru by mělo být vyplněné"
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
 "Interface Type": [
  null,
  "Typ rozhraní"
 ],
 "Invalid filename": [
  null,
  "Neplatný název souboru"
 ],
 "Isolated Network": [
  null,
  "Izolovaná síť"
 ],
 "Launch Remote Viewer": [
  null,
  "Spustit vzdálený prohlížeč"
 ],
 "Loading ...": [
  null,
  "Načítání…"
 ],
 "Local Install Media": [
  null,
  "Místní instalační médium"
 ],
 "MAC Address": [
  null,
  "MAC adresa"
 ],
 "Mac": [
  null,
  "Mac"
 ],
 "Mac Address": [
  null,
  "MAC adresa"
 ],
 "Manual Connection": [
  null,
  "Ruční připojení"
 ],
 "Maximum Allocation": [
  null,
  "Přiřadit nanejvýš"
 ],
 "Maximum Transmission Unit": [
  null,
  "Přenosová jednotka nejvýše"
 ],
 "Maximum memory could not be saved": [
  null,
  "Paměťové maximum se nepodařilo uložit"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "Maximální počet virtuálních procesorů, přiřazených operačnímu systému hosta. Je třeba, aby bylo z rozmezí 1 až $0"
 ],
 "Memory": [
  null,
  "Paměť"
 ],
 "Memory could not be saved": [
  null,
  "Paměť se nepodařilo uložit"
 ],
 "Memory must not be 0": [
  null,
  "Je třeba, aby paměť nebyla 0 (nula)"
 ],
 "Memory size between 128 MiB and the maximum allocation": [
  null,
  "Velikost paměti z rozmezí 128 MiB a maxima"
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
 "NAT to $0": [
  null,
  "NAT na $0"
 ],
 "NIC $0 of VM $1 failed to change state": [
  null,
  "Nepodařilo se změnit stav síť. rozhraní $0 virt. stroje $1 "
 ],
 "Name": [
  null,
  "Název"
 ],
 "Name should not be empty": [
  null,
  "Název je třeba vyplnit"
 ],
 "Name: ": [
  null,
  "Název:"
 ],
 "Netmask": [
  null,
  "Maska sítě"
 ],
 "Network $0 failed to get activated": [
  null,
  "Síť $0 se nepodařilo aktivovat"
 ],
 "Network $0 failed to get deactivated": [
  null,
  "Síť $0 se nepodařilo deaktivovat"
 ],
 "Network Boot (PXE)": [
  null,
  "Zavádění ze sítě (PXE)"
 ],
 "Network File System": [
  null,
  "Síťový souborový systém"
 ],
 "Network Interfaces": [
  null,
  "Síťová rozhraní"
 ],
 "Network Selection does not support PXE.": [
  null,
  "Síťový výběr nepodporuje PXE."
 ],
 "Network interface settings could not be saved": [
  null,
  "Nastavení síťového rozhraní se nepodařilo uložit"
 ],
 "Networks": [
  null,
  "Sítě"
 ],
 "New Volume Name": [
  null,
  "Název pro nový svazek"
 ],
 "No Storage Pools available": [
  null,
  "Nejsou k dispozici žádné fondy úložiště"
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "Pro tento fond úložiště nejsou definované žádné úložné svazky"
 ],
 "No VM is running or defined on this host": [
  null,
  "Na tomto stroji nejsou spuštěné nebo definované žádné virt. stroje"
 ],
 "No Virtual Networks": [
  null,
  "Žádné virtuální sítě"
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
 "No network is defined on this host": [
  null,
  "Na tomto hostiteli není definována žádná síť"
 ],
 "No networks available": [
  null,
  "Žádné sítě k dispozici"
 ],
 "No storage pool is defined on this host": [
  null,
  "Na tomto stroji není definován žádný fond úložiště"
 ],
 "None (Isolated Network)": [
  null,
  "Žádné (izolovaná síť)"
 ],
 "OS Vendor": [
  null,
  "Výrobce oper. systému"
 ],
 "One or more selected volumes are used by domains. Detach the disks first to allow volume deletion.": [
  null,
  "Jeden či více z vybraných svazků je používán doménami. Aby bylo možné svazek smazat, je třeba nejprve odpojit disky."
 ],
 "Only editable when the guest is shut off": [
  null,
  "Upravit je možné pouze pokud je host vypnutý"
 ],
 "Open": [
  null,
  "Otevřít"
 ],
 "Operating System": [
  null,
  "Operační systém"
 ],
 "Operation is in progress": [
  null,
  "Operace probíhá"
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
 "Pause": [
  null,
  "Pozastavit"
 ],
 "Persistence": [
  null,
  "Trvalost"
 ],
 "Persistent": [
  null,
  "Trvalé"
 ],
 "Physical Disk Device": [
  null,
  "Fyzické diskové zařízení"
 ],
 "Physical disk device on host": [
  null,
  "Fyzické diskové zařízení na hostiteli"
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
 "Prefix": [
  null,
  "Předpona"
 ],
 "Private": [
  null,
  "Soukromé"
 ],
 "Product": [
  null,
  "Produkt"
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
 "Resume": [
  null,
  "Obnovit chod"
 ],
 "Route to $0": [
  null,
  "Trasa na $0"
 ],
 "Routed Network": [
  null,
  "Směrovaná síť"
 ],
 "Run": [
  null,
  "Spustit"
 ],
 "Run when host boots": [
  null,
  "Spustit při startu stroje"
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
 "Show Performance Options": [
  null,
  "Zobrazit předvolby pro výkonnost"
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
 "Source Format": [
  null,
  "Zdrojový formát"
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
 "Storage": [
  null,
  "Úložiště"
 ],
 "Storage Pool $0 failed to get activated": [
  null,
  "Fond úložiště $0 se nepodařilo aktivovat"
 ],
 "Storage Pool $0 failed to get deactivated": [
  null,
  "Fond úložiště $0 se nepodařilo deaktivovat"
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
 "Storage Volumes": [
  null,
  "Úložné svazky"
 ],
 "Storage Volumes could not be deleted": [
  null,
  "Svazky úložiště není možné smazat"
 ],
 "System": [
  null,
  "Systém"
 ],
 "Target": [
  null,
  "Cíl"
 ],
 "Target Path": [
  null,
  "Popis umístění cíle"
 ],
 "Target path should not be empty": [
  null,
  "Popis umístění cíle je třeba vyplnit"
 ],
 "The Storage Pool could not be deleted": [
  null,
  "Fond úložiště se nepodařilo smazat"
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
 "The network could not be deleted": [
  null,
  "Síť nebylo možné smazat"
 ],
 "The pool is empty": [
  null,
  "Fond je prázdný"
 ],
 "The selected Operating System has minimum memory requirement of $0 $1": [
  null,
  ""
 ],
 "This pool type does not support Storage Volume creation": [
  null,
  ""
 ],
 "This volume is already used by another VM.": [
  null,
  "Tento svazek už je využíván jiným virt. strojem"
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
 "Type ID": [
  null,
  "Identifikátor typu"
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unique name": [
  null,
  "Neopakující se název"
 ],
 "Unit": [
  null,
  "Jednotka"
 ],
 "Unknown": [
  null,
  "Neznámé"
 ],
 "Unplug": [
  null,
  "Odpojit"
 ],
 "Up to $0 $1 available in the default location": [
  null,
  "Ve výchozím umístění je k dipozici až $0 $1"
 ],
 "Up to $0 $1 available on the host": [
  null,
  "Až $0 $1 k dispozici na tomto stroji"
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
 "Used by": [
  null,
  "Používá"
 ],
 "VCPU settings could not be saved": [
  null,
  "Nastavení virt. procesoru se nepodařilo uložit"
 ],
 "VM $0 failed to Reboot": [
  null,
  "Virt. stroj $0 se nepodařilo restartovat"
 ],
 "VM $0 failed to force Reboot": [
  null,
  "Nepodařilo se vynutit restart virt. stroje $0"
 ],
 "VM $0 failed to force shutdown": [
  null,
  "Nepodařilo se vynutit vypnutí virt. stroje $0"
 ],
 "VM $0 failed to get deleted": [
  null,
  "Virt. stroj $0 se nezdařilo smazat"
 ],
 "VM $0 failed to get installed": [
  null,
  "Virt. stroj $0 se nezdařilo nainstalovat"
 ],
 "VM $0 failed to pause": [
  null,
  "Virt. stroj $0 se nezdařilo pozastavit"
 ],
 "VM $0 failed to resume": [
  null,
  "Nezdařilo se navázat v chodu virt. stroje $0"
 ],
 "VM $0 failed to send NMI": [
  null,
  "Nezdařilo se zaslat virt. stroji $0 nemaskovatelné přerušení"
 ],
 "VM $0 failed to shutdown": [
  null,
  "Virt. stroj $0 se nepodařilo vypnout"
 ],
 "VM $0 failed to start": [
  null,
  "Virt. stroj $0 se nepodařilo zapnout"
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
 "Vendor": [
  null,
  "Výrobce"
 ],
 "Virtual Machines": [
  null,
  "Virtuální stroje"
 ],
 "Virtual Network": [
  null,
  "Virtuální síť"
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
 "WWPN": [
  null,
  "Neopakující se číslo portu"
 ],
 "You need to select the most closely matching OS vendor and Operating System": [
  null,
  "Je třeba vybrat nejpodobnějšího výrobce a vydání operačního systému"
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
 "control-label $0": [
  null,
  "control-label $0"
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
 "host device": [
  null,
  "zařízení hostitele"
 ],
 "hostdev": [
  null,
  "zařízení hostitele"
 ],
 "iSCSI Initiator IQN": [
  null,
  "IQN iSCSI iniciátoru"
 ],
 "iSCSI Target": [
  null,
  "iSCSI cíl"
 ],
 "iSCSI direct Target": [
  null,
  "Přímý cíl iSCSI"
 ],
 "iSCSI target IQN": [
  null,
  "IQN název iSCSI cíle"
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
 "redirected device": [
  null,
  "přesměrované zařízení"
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
 "virt-install package needs to be installed on the system in order to create new VMs": [
  null,
  "Aby bylo možné vytvářet nové virt. stroje je třeba, aby byl nainstalovaný balíček virt-install"
 ],
 "yes": [
  null,
  "ano"
 ]
}));
