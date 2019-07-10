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
nplurals=2; plural=(n != 1);
return plural;
},
  "language": "it",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Network": [
  null,
  ""
 ],
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 è disponibile per la maggior parte dei sistemi operativi. Per installarlo, cercarlo nel software GNOME o eseguire quanto segue:"
 ],
 "Activate": [
  null,
  "Attiva"
 ],
 "Add": [
  null,
  "Aggiungi"
 ],
 "Add Disk": [
  null,
  "Aggiungi disco"
 ],
 "Additional": [
  null,
  "Memoria aggiuntiva"
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
 "Autostart": [
  null,
  ""
 ],
 "Available": [
  null,
  "Disponibile"
 ],
 "Boot Order": [
  null,
  ""
 ],
 "Boot order settings could not be saved": [
  null,
  ""
 ],
 "Bus": [
  null,
  "Bus"
 ],
 "CPU Type": [
  null,
  ""
 ],
 "Cache": [
  null,
  "Imbarcato"
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
 "Confirm deletion of the Virtual Network": [
  null,
  ""
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
 "Creation of VM $0 failed": [
  null,
  ""
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "Current Allocation": [
  null,
  "Posizione di montaggio"
 ],
 "DHCP Range": [
  null,
  ""
 ],
 "Deactivate": [
  null,
  "Disattiva"
 ],
 "Delete": [
  null,
  "Cancella"
 ],
 "Delete Content": [
  null,
  ""
 ],
 "Delete Network $0": [
  null,
  "Cancellare $0"
 ],
 "Delete Storage Pool $0": [
  null,
  ""
 ],
 "Delete associated storage files:": [
  null,
  "Elimina i file di archiviazione associati:"
 ],
 "Delete the Volumes inside this Pool": [
  null,
  ""
 ],
 "Deleting an inactive Storage Pool will only undefine the Pool. Its content will not be deleted.": [
  null,
  ""
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
 "Disk $0 fail to get detached from VM $1": [
  null,
  ""
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
 "Disks cannot be removed from $0 VMs": [
  null,
  ""
 ],
 "Download the MSI from $0": [
  null,
  "Scarica l'MSI da $0"
 ],
 "Edit": [
  null,
  "Modifica"
 ],
 "Emulated Machine": [
  null,
  ""
 ],
 "Existing Disk Image": [
  null,
  ""
 ],
 "Existing disk image on host's file system": [
  null,
  ""
 ],
 "Failed to fetch the IP addresses of the interfaces present in $0": [
  null,
  ""
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Meno del numero massimo di CPU virtuali dovrebbe essere abilitato."
 ],
 "File": [
  null,
  "File"
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
 "Forwarding mode": [
  null,
  ""
 ],
 "General": [
  null,
  "Generale"
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
 "Hide Performance Options": [
  null,
  "Profilo di prestazione"
 ],
 "Host": [
  null,
  "Host"
 ],
 "Host Device": [
  null,
  ""
 ],
 "Host Name": [
  null,
  "Host Name"
 ],
 "Host should not be empty": [
  null,
  "L'host non deve essere vuoto"
 ],
 "IP Address": [
  null,
  "Indirizzo IP"
 ],
 "IPv4 Address": [
  null,
  ""
 ],
 "IPv6 Address": [
  null,
  ""
 ],
 "Immediately Start VM": [
  null,
  "Avviare immediatamente la VM"
 ],
 "In most configurations, macvtap does not work for host to guest network communication.": [
  null,
  ""
 ],
 "Initiator": [
  null,
  "Istantanea"
 ],
 "Initiator IQN should not be empty": [
  null,
  "Installazione La fonte non deve essere vuota"
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
 "Interface Type": [
  null,
  ""
 ],
 "Invalid filename": [
  null,
  "Nome file non valido"
 ],
 "Isolated Network": [
  null,
  ""
 ],
 "Launch Remote Viewer": [
  null,
  "Avviare il visualizzatore remoto"
 ],
 "Loading ...": [
  null,
  "Caricamento in corso..."
 ],
 "Local Install Media": [
  null,
  ""
 ],
 "MAC Address": [
  null,
  "Indirizzo MAC"
 ],
 "Mac": [
  null,
  ""
 ],
 "Mac Address": [
  null,
  "Indirizzo Mac"
 ],
 "Manual Connection": [
  null,
  "Collegamento manuale"
 ],
 "Maximum Allocation": [
  null,
  "Posizione della discarica di crash"
 ],
 "Maximum Transmission Unit": [
  null,
  ""
 ],
 "Maximum memory could not be saved": [
  null,
  "Non è stato possibile salvare le impostazioni del VCPU"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "Numero massimo di CPU virtuali allocate per il sistema operativo guest, che deve essere compreso tra 1 e $0"
 ],
 "Memory": [
  null,
  "Memoria"
 ],
 "Memory could not be saved": [
  null,
  "Non è stato possibile salvare le impostazioni del VCPU"
 ],
 "Memory must not be 0": [
  null,
  "Utilizzo memoria:"
 ],
 "Memory size between 128 MiB and the maximum allocation": [
  null,
  ""
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
 "NAT to $0": [
  null,
  ""
 ],
 "NIC $0 of VM $1 failed to change state": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nome"
 ],
 "Name should not be empty": [
  null,
  "Il nome non deve essere vuoto"
 ],
 "Name: ": [
  null,
  ""
 ],
 "Netmask": [
  null,
  ""
 ],
 "Network $0 failed to get activated": [
  null,
  ""
 ],
 "Network $0 failed to get deactivated": [
  null,
  ""
 ],
 "Network Boot (PXE)": [
  null,
  ""
 ],
 "Network File System": [
  null,
  "Sistema di file di rete"
 ],
 "Network Interfaces": [
  null,
  ""
 ],
 "Network Selection does not support PXE.": [
  null,
  ""
 ],
 "Network interface settings could not be saved": [
  null,
  ""
 ],
 "Networks": [
  null,
  "Reti"
 ],
 "New Volume Name": [
  null,
  "Nuovo nome del volume"
 ],
 "No Storage Pools available": [
  null,
  "Nome della piscina di stoccaggio"
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "Nessun volume di stoccaggio definito per questo pool di stoccaggio"
 ],
 "No VM is running or defined on this host": [
  null,
  "Nessuna VM è in esecuzione o definita su questo host"
 ],
 "No Virtual Networks": [
  null,
  "Nessuna rete virtuale"
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
 "No network is defined on this host": [
  null,
  ""
 ],
 "No networks available": [
  null,
  "Non disponibile"
 ],
 "No storage pool is defined on this host": [
  null,
  "Nessun pool di archiviazione è definito su questo host"
 ],
 "None (Isolated Network)": [
  null,
  ""
 ],
 "OS Vendor": [
  null,
  "Fornitore di OS"
 ],
 "One or more selected volumes are used by domains. Detach the disks first to allow volume deletion.": [
  null,
  ""
 ],
 "Only editable when the guest is shut off": [
  null,
  ""
 ],
 "Open": [
  null,
  ""
 ],
 "Operating System": [
  null,
  "Sistema Operativo"
 ],
 "Operation is in progress": [
  null,
  "oVirt login in corso"
 ],
 "Overview": [
  null,
  "Panoramica"
 ],
 "Path": [
  null,
  "Percorso"
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
 "Pause": [
  null,
  ""
 ],
 "Persistence": [
  null,
  ""
 ],
 "Persistent": [
  null,
  ""
 ],
 "Physical Disk Device": [
  null,
  ""
 ],
 "Physical disk device on host": [
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
 "Prefix": [
  null,
  ""
 ],
 "Private": [
  null,
  ""
 ],
 "Product": [
  null,
  ""
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
 "Resume": [
  null,
  ""
 ],
 "Route to $0": [
  null,
  ""
 ],
 "Routed Network": [
  null,
  ""
 ],
 "Run": [
  null,
  "Esegui"
 ],
 "Run when host boots": [
  null,
  ""
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
 "Show Performance Options": [
  null,
  "Opzioni di alimentazione"
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
 "Source Format": [
  null,
  "Percorso della sorgente"
 ],
 "Source Path": [
  null,
  "Percorso della sorgente"
 ],
 "Source path should not be empty": [
  null,
  "Il percorso della sorgente non deve essere vuoto"
 ],
 "Source should start with http, ftp or nfs protocol": [
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
 "Startup": [
  null,
  "Avvio"
 ],
 "State": [
  null,
  "Stato"
 ],
 "Storage": [
  null,
  "Storage"
 ],
 "Storage Pool $0 failed to get activated": [
  null,
  ""
 ],
 "Storage Pool $0 failed to get deactivated": [
  null,
  ""
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
 "Storage Volumes": [
  null,
  "Volumi di storage"
 ],
 "Storage Volumes could not be deleted": [
  null,
  ""
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
 "The Storage Pool could not be deleted": [
  null,
  ""
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
 "The network could not be deleted": [
  null,
  "Il percorso di destinazione non deve essere vuoto"
 ],
 "The pool is empty": [
  null,
  "La piscina è vuota"
 ],
 "This volume is already used by another VM.": [
  null,
  ""
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
 "Type ID": [
  null,
  ""
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unique name": [
  null,
  "Nome unico"
 ],
 "Unit": [
  null,
  "Unità"
 ],
 "Unknown": [
  null,
  "Sconosciuto"
 ],
 "Unplug": [
  null,
  "Scollegare"
 ],
 "Up to $0 $1 available in the default location": [
  null,
  ""
 ],
 "Up to $0 $1 available on the host": [
  null,
  ""
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
 "Used by": [
  null,
  ""
 ],
 "VCPU settings could not be saved": [
  null,
  "Non è stato possibile salvare le impostazioni del VCPU"
 ],
 "VM $0 failed to Reboot": [
  null,
  ""
 ],
 "VM $0 failed to force Reboot": [
  null,
  ""
 ],
 "VM $0 failed to force shutdown": [
  null,
  ""
 ],
 "VM $0 failed to get deleted": [
  null,
  ""
 ],
 "VM $0 failed to get installed": [
  null,
  ""
 ],
 "VM $0 failed to pause": [
  null,
  ""
 ],
 "VM $0 failed to resume": [
  null,
  ""
 ],
 "VM $0 failed to send NMI": [
  null,
  ""
 ],
 "VM $0 failed to shutdown": [
  null,
  ""
 ],
 "VM $0 failed to start": [
  null,
  ""
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
 "Vendor": [
  null,
  "Rivenditore"
 ],
 "Virtual Machines": [
  null,
  "Server Virtuali"
 ],
 "Virtual Network": [
  null,
  ""
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
 "WWPN": [
  null,
  ""
 ],
 "You need to select the most closely matching OS vendor and Operating System": [
  null,
  ""
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
 "control-label $0": [
  null,
  ""
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
 "host device": [
  null,
  ""
 ],
 "hostdev": [
  null,
  "hostdev"
 ],
 "iSCSI Initiator IQN": [
  null,
  "Cambiare il nome dell'iniziatore iSCSI"
 ],
 "iSCSI Target": [
  null,
  ""
 ],
 "iSCSI direct Target": [
  null,
  "target iSCSI"
 ],
 "iSCSI target IQN": [
  null,
  ""
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
 "redirected device": [
  null,
  ""
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
 "vCPUs": [
  null,
  "vCPU"
 ],
 "vhostuser": [
  null,
  "vhostuser"
 ],
 "virt-install package needs to be installed on the system in order to create new VMs": [
  null,
  ""
 ],
 "yes": [
  null,
  "si"
 ]
}));
