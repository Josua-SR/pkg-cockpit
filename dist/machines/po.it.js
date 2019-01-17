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
nplurals=2; plural=(n != 1);
return plural;
},
  "language": "it",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 è disponibile per la maggior parte dei sistemi operativi. Per installarlo, cercarlo nel software GNOME o eseguire quanto segue:"
 ],
 "Add": [
  null,
  "Aggiungi"
 ],
 "Add Disk": [
  null,
  "Aggiungi disco"
 ],
 "Address": [
  null,
  "Indirizzo"
 ],
 "Address:": [
  null,
  "Indirizzo:"
 ],
 "Always attach": [
  null,
  ""
 ],
 "Apply": [
  null,
  "Applica"
 ],
 "Automatically start libvirt on boot": [
  null,
  "Avvia automaticamente libvirt al boot"
 ],
 "Autostart:": [
  null,
  "Avvio automatico:"
 ],
 "Available": [
  null,
  "Disponibile"
 ],
 "Boot Order:": [
  null,
  "Ordine boot"
 ],
 "Bus": [
  null,
  "Bus"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "Azione CHANGE NETWORK NETWORK STATE fallita"
 ],
 "CPU Type:": [
  null,
  "Tipo CPU:"
 ],
 "Cancel": [
  null,
  "Annulla"
 ],
 "Capacity": [
  null,
  "Capacità"
 ],
 "Changes will take effect after shutting down the VM": [
  null,
  "Le modifiche avranno effetto dopo lo spegnimento della VM."
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "Facendo clic su \"Avvia visualizzatore remoto\" si scarica un file .vv e si avvia $0."
 ],
 "Connect with any $0 viewer application.": [
  null,
  "Connettiti con qualsiasi applicazione di visualizzazione $0."
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "Connessione con qualsiasi applicazione di visualizzazione SPICE o VNC."
 ],
 "Connecting": [
  null,
  "Connessione"
 ],
 "Connecting to Virtualization Service": [
  null,
  "Connessione al servizio di virtualizzazione"
 ],
 "Connection": [
  null,
  "Connessione"
 ],
 "Console Type": [
  null,
  "Tipo di console"
 ],
 "Consoles": [
  null,
  "Console"
 ],
 "Cores per socket": [
  null,
  "Core per socket"
 ],
 "Create": [
  null,
  "Crea"
 ],
 "Create New": [
  null,
  "Crea nuovo"
 ],
 "Create Storage Pool": [
  null,
  "Creare un pool di archiviazione"
 ],
 "Create VM": [
  null,
  "Creare VM"
 ],
 "Creation of vm $0 failed": [
  null,
  "Creazione vm $0 fallita"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "Delete": [
  null,
  "Cancella"
 ],
 "Delete associated storage files:": [
  null,
  "Elimina i file di archiviazione associati:"
 ],
 "Device": [
  null,
  "Device"
 ],
 "Disconnect": [
  null,
  "Disconnetti"
 ],
 "Disconnected": [
  null,
  "Disconnesso"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  "Scollegato dalla console seriale. Fare clic sul pulsante Ricollega."
 ],
 "Disk failed to be attached": [
  null,
  "Il disco non è stato collegato"
 ],
 "Disk failed to be created": [
  null,
  "Disco che non è stato creato"
 ],
 "Disks": [
  null,
  "Dischi"
 ],
 "Download the MSI from $0": [
  null,
  "Scarica l'MSI da $0"
 ],
 "Edit": [
  null,
  "Modifica"
 ],
 "Emulated Machine:": [
  null,
  "Macchina emulata:"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Meno del numero massimo di CPU virtuali dovrebbe essere abilitato."
 ],
 "File": [
  null,
  "File"
 ],
 "Filesystem": [
  null,
  "File system"
 ],
 "Filesystem Directory": [
  null,
  "Elenco dei file system"
 ],
 "Force Restart": [
  null,
  "Riavvio della forza"
 ],
 "Force Shut Down": [
  null,
  "Spegnimento forzato"
 ],
 "Format": [
  null,
  "Formato"
 ],
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  "GET HYPERVISOR MAX VCPU azione fallita"
 ],
 "GiB": [
  null,
  "GiB"
 ],
 "Graphics Console (VNC)": [
  null,
  "Console grafica (VNC)"
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  "Console grafica in Desktop Viewer"
 ],
 "Host": [
  null,
  "Host"
 ],
 "Host Name": [
  null,
  "Host Name"
 ],
 "Host should not be empty": [
  null,
  "L'host non deve essere vuoto"
 ],
 "INSTALL VM action failed": [
  null,
  "L'azione INSTALLA VM è fallita"
 ],
 "Immediately Start VM": [
  null,
  "Avviare immediatamente la VM"
 ],
 "Install": [
  null,
  "Installa"
 ],
 "Installation Source": [
  null,
  "Fonte di installazione"
 ],
 "Installation Source Type": [
  null,
  "Tipo di sorgente di installazione"
 ],
 "Installation Source should not be empty": [
  null,
  "Installazione La fonte non deve essere vuota"
 ],
 "Invalid filename": [
  null,
  "Nome file non valido"
 ],
 "Launch Remote Viewer": [
  null,
  "Avviare il visualizzatore remoto"
 ],
 "Loading ...": [
  null,
  "Caricamento in corso..."
 ],
 "MAC Address": [
  null,
  "Indirizzo MAC"
 ],
 "Mac Address": [
  null,
  "Indirizzo Mac"
 ],
 "Manual Connection": [
  null,
  "Collegamento manuale"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "Numero massimo di CPU virtuali allocate per il sistema operativo guest, che deve essere compreso tra 1 e $0"
 ],
 "Memory": [
  null,
  "Memoria"
 ],
 "Memory should be positive number": [
  null,
  "La memoria deve essere un numero positivo"
 ],
 "Memory:": [
  null,
  "Memoria:"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Model": [
  null,
  "Modello"
 ],
 "Model type": [
  null,
  "Tipo di modello"
 ],
 "More Information": [
  null,
  "Per saperne di più"
 ],
 "Name": [
  null,
  "Nome"
 ],
 "Name should not be empty": [
  null,
  "Il nome non deve essere vuoto"
 ],
 "Name should not consist of empty characters only": [
  null,
  "Il nome non deve consistere solo di caratteri vuoti"
 ],
 "Network File System": [
  null,
  "Sistema di file di rete"
 ],
 "Network Type": [
  null,
  "Tipo di rete"
 ],
 "Network settings could not be saved": [
  null,
  "Le impostazioni di rete non possono essere salvate"
 ],
 "Networks": [
  null,
  "Reti"
 ],
 "New Volume Name": [
  null,
  "Nuovo nome del volume"
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "Nessun volume di stoccaggio definito per questo pool di stoccaggio"
 ],
 "No VM is running or defined on this host": [
  null,
  "Nessuna VM è in esecuzione o definita su questo host"
 ],
 "No boot device found": [
  null,
  "Nessun dispositivo di avvio trovato"
 ],
 "No console defined for this virtual machine.": [
  null,
  "Nessuna console definita per questa macchina virtuale."
 ],
 "No disks defined for this VM": [
  null,
  "Nessun disco definito per questa VM"
 ],
 "No matching files found": [
  null,
  "Nessun file corrispondente trovato"
 ],
 "No network interfaces defined for this VM": [
  null,
  "Nessuna interfaccia di rete definita per questa macchina virtuale"
 ],
 "No storage pool is defined on this host": [
  null,
  "Nessun pool di archiviazione è definito su questo host"
 ],
 "No virtual networks": [
  null,
  "Nessuna rete virtuale"
 ],
 "OS Vendor": [
  null,
  "Fornitore di OS"
 ],
 "Operating System": [
  null,
  "Sistema Operativo"
 ],
 "Overview": [
  null,
  "Panoramica"
 ],
 "Path on host's filesystem": [
  null,
  "Percorso sul filesystem dell'host"
 ],
 "Path to ISO file on host's file system": [
  null,
  "Percorso al file ISO sul file system dell'host"
 ],
 "Path to file": [
  null,
  "Percorso da file"
 ],
 "Persistence": [
  null,
  ""
 ],
 "Please enter new volume name": [
  null,
  "Si prega di inserire il nuovo nome del volume"
 ],
 "Please enter new volume size": [
  null,
  "Si prega di inserire una nuova dimensione del volume"
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Avviare la macchina virtuale per accedere alla sua console."
 ],
 "Plug": [
  null,
  "Spina"
 ],
 "Pool": [
  null,
  "Pool"
 ],
 "Port": [
  null,
  "Porta"
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  "Numero preferito di prese da esporre all'ospite."
 ],
 "Protocol": [
  null,
  "Protocollo"
 ],
 "QEMU/KVM System connection": [
  null,
  "QEMU/KVM Collegamento di sistema"
 ],
 "QEMU/KVM User connection": [
  null,
  "QEMU/KVM Connessione utente"
 ],
 "Readonly": [
  null,
  "Solo lettura"
 ],
 "Reconnect": [
  null,
  "Ricollegare"
 ],
 "Remote URL": [
  null,
  "URL remoto"
 ],
 "Restart": [
  null,
  "Riavvia"
 ],
 "Run": [
  null,
  "Esegui"
 ],
 "SPICE": [
  null,
  "SPICE"
 ],
 "SPICE Address:": [
  null,
  "Indirizzo SPICE:"
 ],
 "SPICE Port:": [
  null,
  "Porta SPICE:"
 ],
 "SPICE TLS Port:": [
  null,
  "SPICE TLS Port:"
 ],
 "Save": [
  null,
  "Salva"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  "Invia Interruzione non mascherabile"
 ],
 "Send key": [
  null,
  "Invia combinazione di tasti"
 ],
 "Serial Console": [
  null,
  "Console seriale"
 ],
 "Session": [
  null,
  "Sessione"
 ],
 "Shut Down": [
  null,
  "Arresto"
 ],
 "Size": [
  null,
  "Dimensione"
 ],
 "Sockets": [
  null,
  "Socket"
 ],
 "Source": [
  null,
  "Sorgente"
 ],
 "Source Path": [
  null,
  "Percorso della sorgente"
 ],
 "Source path should not be empty": [
  null,
  "Il percorso della sorgente non deve essere vuoto"
 ],
 "Source should start with https, ftp or nfs protocol": [
  null,
  "La sorgente dovrebbe iniziare con il protocollo http, ftp o nfs"
 ],
 "Start libvirt": [
  null,
  "Avvia libvirt"
 ],
 "Start pool when host boots": [
  null,
  "Iniziare la piscina quando gli stivali host"
 ],
 "Start the VM to see disk statistics.": [
  null,
  "Avviare la macchina virtuale per visualizzare le statistiche del disco."
 ],
 "Startup": [
  null,
  "Avvio"
 ],
 "State": [
  null,
  "Stato"
 ],
 "Storage Pool Name": [
  null,
  "Nome della piscina di stoccaggio"
 ],
 "Storage Pool failed to be created": [
  null,
  "Non è stato creato un pool di storage che non è riuscito a creare"
 ],
 "Storage Pools": [
  null,
  "Pool di storage"
 ],
 "Storage Size": [
  null,
  "Dimensione storage"
 ],
 "Storage Size should not be negative number": [
  null,
  "La dimensione dello storage non dovrebbe essere numero negativo"
 ],
 "Storage Volumes": [
  null,
  "Volumi di storage"
 ],
 "System": [
  null,
  "Sistema"
 ],
 "Target": [
  null,
  "Obiettivo"
 ],
 "Target Path": [
  null,
  "Percorso di destinazione"
 ],
 "Target path should not be empty": [
  null,
  "Il percorso di destinazione non deve essere vuoto"
 ],
 "The VM crashed.": [
  null,
  "La VM si è interrotta."
 ],
 "The VM is down.": [
  null,
  "La VM è spenta."
 ],
 "The VM is going down.": [
  null,
  "La VM si sta spegnendo."
 ],
 "The VM is idle.": [
  null,
  "La VM è inattiva."
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  "La macchina virtuale sta morendo (arresto o crash non completato)."
 ],
 "The VM is paused.": [
  null,
  "La VM è in pausa."
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  "The VM is running and will be forced off before deletion."
 ],
 "The VM is running.": [
  null,
  "La macchina virtuale è in funzione."
 ],
 "The VM is suspended by guest power management.": [
  null,
  "La VM è sospesa dalla gestione dell'alimentazione degli ospiti."
 ],
 "The directory on the server being exported": [
  null,
  "La directory sul server da esportare"
 ],
 "The pool is empty": [
  null,
  "La piscina è vuota"
 ],
 "Threads per core": [
  null,
  "Threads per core"
 ],
 "Too many files found": [
  null,
  "Troppi file trovati"
 ],
 "Troubleshoot": [
  null,
  "Risoluzione dei problemi"
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unique name": [
  null,
  "Nome unico"
 ],
 "Unplug": [
  null,
  "Scollegare"
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  "Aggiornare a una versione più recente di libvirt per visualizzare le statistiche del disco"
 ],
 "Usage": [
  null,
  "Utilizzo"
 ],
 "Use Existing": [
  null,
  "Usa esistente"
 ],
 "Used": [
  null,
  "Usato"
 ],
 "VCPU settings could not be saved": [
  null,
  "Non è stato possibile salvare le impostazioni del VCPU"
 ],
 "VM CHANGE_NETWORK_STATE action failed": [
  null,
  "VM CHANGE_NETWORK_STATE azione fallita"
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  "VM DELETE (DESTROY) azione fallita"
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  "VM DELETE (UNDEFINE) azione fallita"
 ],
 "VM DELETE action failed": [
  null,
  "VM DELETE azione fallita"
 ],
 "VM DETACH_DISK action failed": [
  null,
  "VM DETACH_DISK azione fallita"
 ],
 "VM FORCE OFF action failed": [
  null,
  "VM FORCE OFF azione fallita"
 ],
 "VM FORCE REBOOT action failed": [
  null,
  "VM FORCE REBOOT azione fallita"
 ],
 "VM REBOOT action failed": [
  null,
  "VM REBOOT azione fallita"
 ],
 "VM SEND Non-Maskable Interrrupt action failed": [
  null,
  "VM SEND Non Maskable Interrrupt azione non riuscita"
 ],
 "VM SENDNMI action failed": [
  null,
  "VM SENDNMI azione fallita"
 ],
 "VM SHUT DOWN action failed": [
  null,
  "VM SHUT DOWN azione fallita"
 ],
 "VM START action failed": [
  null,
  "VM START azione fallita"
 ],
 "VNC": [
  null,
  "VNC"
 ],
 "VNC Address:": [
  null,
  "Indirizzo VNC:"
 ],
 "VNC Port:": [
  null,
  "Porta VNC:"
 ],
 "VNC TLS Port:": [
  null,
  "Porta VNC TLS:"
 ],
 "Virtual Machines": [
  null,
  "Server Virtuali"
 ],
 "Virtualization Service (libvirt) is Not Active": [
  null,
  "Il servizio di virtualizzazione (libvirt) non è attivo"
 ],
 "Virtualization Service is Available": [
  null,
  "Il servizio di virtualizzazione è disponibile"
 ],
 "Volume": [
  null,
  "Volume"
 ],
 "active": [
  null,
  "attivo"
 ],
 "bridge": [
  null,
  "bridge"
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "crashed": [
  null,
  "interrotto con errore"
 ],
 "custom": [
  null,
  "personalizzato"
 ],
 "direct": [
  null,
  "diretto"
 ],
 "disabled": [
  null,
  "disabilitato"
 ],
 "disk": [
  null,
  "disco"
 ],
 "down": [
  null,
  "giù"
 ],
 "dying": [
  null,
  "morente"
 ],
 "enabled": [
  null,
  "abilitato"
 ],
 "ethernet": [
  null,
  "ethernet"
 ],
 "host": [
  null,
  "host"
 ],
 "hostdev": [
  null,
  "hostdev"
 ],
 "idle": [
  null,
  "in attesa"
 ],
 "inactive": [
  null,
  "Inattivo"
 ],
 "mcast": [
  null,
  "cast"
 ],
 "network": [
  null,
  "rete"
 ],
 "no": [
  null,
  "no"
 ],
 "other": [
  null,
  "altro"
 ],
 "paused": [
  null,
  "in pausa"
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
  "in esecuzione"
 ],
 "server": [
  null,
  "server"
 ],
 "show less": [
  null,
  "mostra meno"
 ],
 "show more": [
  null,
  "mostra di più"
 ],
 "shut off": [
  null,
  "spento"
 ],
 "shutdown": [
  null,
  "spegnimento"
 ],
 "suspended (PM)": [
  null,
  "sospesi (PM)"
 ],
 "udp": [
  null,
  "udp"
 ],
 "undefined": [
  null,
  "non definito"
 ],
 "up": [
  null,
  "su"
 ],
 "user": [
  null,
  "utente"
 ],
 "vCPU Count": [
  null,
  "conteggio vCPU"
 ],
 "vCPU Maximum": [
  null,
  "vCPU Massimo"
 ],
 "vCPUs:": [
  null,
  "vCPU"
 ],
 "vhostuser": [
  null,
  "vhostuser"
 ],
 "yes": [
  null,
  "si"
 ]
}));
