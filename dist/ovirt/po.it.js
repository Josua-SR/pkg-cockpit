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
 "$0 vCPU Details": [
  null,
  "$0 dettagli vCPU"
 ],
 "Action": [
  null,
  "Azione"
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
 "All running virtual machines will be turned off.": [
  null,
  "Tutte le macchine virtuali in esecuzione saranno disattivate."
 ],
 "Always attach": [
  null,
  ""
 ],
 "Apply": [
  null,
  "Applica"
 ],
 "Automatically selected host": [
  null,
  "Ospite selezionato automaticamente"
 ],
 "Autostart:": [
  null,
  "Avvio automatico:"
 ],
 "Available": [
  null,
  "Disponibile"
 ],
 "Base Template": [
  null,
  "Modello di base"
 ],
 "Base template": [
  null,
  "Modello di base"
 ],
 "Base template:": [
  null,
  "Modello di base:"
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
 "CREATE VM action failed": [
  null,
  "Azione CREATE VM fallita"
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
 "Cluster": [
  null,
  "Cluster"
 ],
 "Cluster Templates": [
  null,
  "Modelli di cluster"
 ],
 "Cluster Virtual Machines": [
  null,
  "Cluster Virtual Machines"
 ],
 "Confirm migration": [
  null,
  "Confermare la migrazione"
 ],
 "Confirm reload:": [
  null,
  "Confermare la ricarica:"
 ],
 "Confirm save:": [
  null,
  "Confermare il salvataggio:"
 ],
 "Connect to oVirt Engine": [
  null,
  "Colega al motore oVirt"
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
 "Create New VM": [
  null,
  "Creare una nuova macchina virtuale"
 ],
 "Create VM": [
  null,
  "Creare VM"
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
 "Description": [
  null,
  "Descrizione"
 ],
 "Description:": [
  null,
  "Descrizione:"
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
 "Edit the vdsm.conf": [
  null,
  "Modifica il file vdsm.conf"
 ],
 "Emulated Machine:": [
  null,
  "Macchina emulata:"
 ],
 "Enter New VM name": [
  null,
  "Inserire il nome della nuova macchina virtuale"
 ],
 "FQDN": [
  null,
  "FQDN"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Meno del numero massimo di CPU virtuali dovrebbe essere abilitato."
 ],
 "File": [
  null,
  "File"
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
  "Host"
 ],
 "Host to Maintenance": [
  null,
  "Ospite a Manutenzione"
 ],
 "INSTALL VM action failed": [
  null,
  "L'azione INSTALLA VM è fallita"
 ],
 "Install": [
  null,
  "Installa"
 ],
 "Launch Remote Viewer": [
  null,
  "Avviare il visualizzatore remoto"
 ],
 "Loading ...": [
  null,
  "Caricamento in corso..."
 ],
 "Loading data ...": [
  null,
  "Caricamento dati ...."
 ],
 "MAC Address": [
  null,
  "Indirizzo MAC"
 ],
 "MIGRATE action failed": [
  null,
  "Azione MIGRATE fallita"
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
 "Memory:": [
  null,
  "Memoria:"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Migrate To:": [
  null,
  "Migrare a:"
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
 "No VM found in oVirt.": [
  null,
  "Nessuna VM trovata in oVirt."
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
 "No network interfaces defined for this VM": [
  null,
  "Nessuna interfaccia di rete definita per questa macchina virtuale"
 ],
 "No oVirt connection": [
  null,
  "Nessuna connessione oVirt"
 ],
 "No virtual networks": [
  null,
  "Nessuna rete virtuale"
 ],
 "Number of virtual CPUs that gonna be used.": [
  null,
  "Numero di CPU virtuali che verranno utilizzate."
 ],
 "OK": [
  null,
  "OK"
 ],
 "OS": [
  null,
  "OS"
 ],
 "OS Type:": [
  null,
  "Tipo di OS:"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Optimized for:": [
  null,
  "Ottimizzato per:"
 ],
 "Overview": [
  null,
  "Panoramica"
 ],
 "Persistence": [
  null,
  ""
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  "Si prega di confermare, l'host deve essere impostato sulla modalità di manutenzione."
 ],
 "Please enter new volume name": [
  null,
  "Si prega di inserire il nuovo nome del volume"
 ],
 "Please enter new volume size": [
  null,
  "Si prega di inserire una nuova dimensione del volume"
 ],
 "Please provide fully qualified domain name and port of the oVirt engine.": [
  null,
  "Si prega di fornire il nome di dominio completo e la porta del motore oVirt."
 ],
 "Please provide valid oVirt engine fully qualified domain name (FQDN) and port (443 by default)": [
  null,
  "Si prega di fornire un motore oVirt valido, un nome di dominio pienamente qualificato (FQDN) e una porta (443 di default)"
 ],
 "Please refer to oVirt's $0 for more information about Remote Viewer setup.": [
  null,
  "Per $0ulteriori informazioni sulla configurazione del Remote Viewer, fare riferimento a oVirt."
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Avviare la macchina virtuale per accedere alla sua console."
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  "Attendere che l'elenco delle macchine virtuali sia caricato dal server."
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  "Attendere che l'elenco dei modelli sia caricato dal server."
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
 "Preparing for Maintenance": [
  null,
  "Preparazione per la manutenzione"
 ],
 "Protocol": [
  null,
  "Protocollo"
 ],
 "REBOOT action failed": [
  null,
  "RIBOT azione fallita"
 ],
 "Readonly": [
  null,
  "Solo lettura"
 ],
 "Reconnect": [
  null,
  "Ricollegare"
 ],
 "Register oVirt": [
  null,
  "Registrati su oVirt"
 ],
 "Registering oVirt to Cockpit": [
  null,
  "Registrazione oVirt su Cockpit"
 ],
 "Reload": [
  null,
  "Ricarica"
 ],
 "Restart": [
  null,
  "Riavvia"
 ],
 "Run": [
  null,
  "Esegui"
 ],
 "Run Here": [
  null,
  "Esegui qu"
 ],
 "Running Since:": [
  null,
  "Corsa da allora:"
 ],
 "SET VCPU SETTINGS action failed": [
  null,
  "Azione SET_VCPU_SETTINGS fallita"
 ],
 "SHUTDOWN action failed": [
  null,
  "Azione SHUTDOWN fallita"
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
 "START action failed": [
  null,
  "Azione START fallita"
 ],
 "SUSPEND action failed": [
  null,
  "Azione SUSPEND fallita"
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
 "Start the VM to see disk statistics.": [
  null,
  "Avviare la macchina virtuale per visualizzare le statistiche del disco."
 ],
 "State": [
  null,
  "Stato"
 ],
 "Stateless": [
  null,
  "Stateless"
 ],
 "Stateless:": [
  null,
  "Stateless:"
 ],
 "Suspend": [
  null,
  "Sospendi"
 ],
 "Switch Host to Maintenance": [
  null,
  "Passa da l'host in modalità di manutenzione"
 ],
 "Switching host to maintenance mode failed. Received error: ": [
  null,
  "Cambio dell'host in modalità manutenzione fallita. Errore ricevuto: "
 ],
 "Switching host to maintenance mode in progress ...": [
  null,
  "Cambio dell'host in modalità di manutenzione in corso ...."
 ],
 "System": [
  null,
  "Sistema"
 ],
 "Target": [
  null,
  "Obiettivo"
 ],
 "Template": [
  null,
  "Modello"
 ],
 "Templates": [
  null,
  "Modelli"
 ],
 "Templates of $0 cluster": [
  null,
  "Modelli di cluster $0"
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
 "The pool is empty": [
  null,
  "La piscina è vuota"
 ],
 "This host is managed by a virtualization manager, so creation of new VMs from the host is not possible.": [
  null,
  "Questo host è gestito da un gestore di virtualizzazione, quindi non è possibile creare nuove macchine virtuali dall'host."
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  "Questa macchina virtuale non è gestita da oVirt"
 ],
 "Threads per core": [
  null,
  "Threads per core"
 ],
 "Type": [
  null,
  "Tipo"
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
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "Gestione dei servizi VDSM"
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  "VM DELETE (DESTROY) azione fallita"
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  "VM DELETE (UNDEFINE) azione fallita"
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
 "VM SHUT DOWN action failed": [
  null,
  "VM SHUT DOWN azione fallita"
 ],
 "VM START action failed": [
  null,
  "VM START azione fallita"
 ],
 "VM icon": [
  null,
  "Icona VM"
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
 "Version": [
  null,
  "Versione"
 ],
 "Version num": [
  null,
  "Version num"
 ],
 "Virtual Machines": [
  null,
  "Server Virtuali"
 ],
 "Virtual Machines of $0 cluster": [
  null,
  "Macchine virtuali del cluster $0"
 ],
 "Volume": [
  null,
  "Volume"
 ],
 "bridge": [
  null,
  "bridge"
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "connecting": [
  null,
  "connessione in corso"
 ],
 "cores": [
  null,
  "core"
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
 "error": [
  null,
  "errore"
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
 "initializing": [
  null,
  "inizializzazione"
 ],
 "installation failed": [
  null,
  "installazione fallita"
 ],
 "installing OS": [
  null,
  "installazione del sistema operativo"
 ],
 "kdumping": [
  null,
  "kdumping"
 ],
 "maintenance": [
  null,
  "mantenimento"
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
 "non operational": [
  null,
  "non operativo"
 ],
 "non responsive": [
  null,
  "non risponde"
 ],
 "oVirt": [
  null,
  "oVirt"
 ],
 "oVirt Host State:": [
  null,
  "Stato host oVirt:"
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  "oVirt Provider non è riuscito a causa di argomenti mancanti."
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  "script di installazione oVirt Provider fallito: non è possibile scrivere su /etc/cockpit/machines-ovirt.config, provare come root."
 ],
 "oVirt installation script failed with following output: ": [
  null,
  "lo script di installazione di oVirt non è riuscito con il seguente output: "
 ],
 "oVirt login in progress": [
  null,
  "oVirt login in corso"
 ],
 "other": [
  null,
  "altro"
 ],
 "paused": [
  null,
  "in pausa"
 ],
 "pending approval": [
  null,
  "in attesa di approvazione"
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
  "riavvia"
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
 "sockets": [
  null,
  "raccordi"
 ],
 "suspended (PM)": [
  null,
  "sospesi (PM)"
 ],
 "threads": [
  null,
  "thread"
 ],
 "udp": [
  null,
  "udp"
 ],
 "unassigned": [
  null,
  "non assegnato"
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
 "vCPUs": [
  null,
  "vCPU"
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
