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
 " (shared with the OS)": [
  null,
  " (condiviso con il SO)"
 ],
 "$0 shares": [
  null,
  "$0 titoli azionari"
 ],
 "${hip}:${hport} -> $cport": [
  null,
  "${hip}:${hport} -> $cport"
 ],
 "Add Additional Storage": [
  null,
  "Aggiungi memoria aggiuntiva"
 ],
 "Add Storage": [
  null,
  "Aggiungi storage"
 ],
 "Additional Storage": [
  null,
  "Memoria aggiuntiva"
 ],
 "Advanced TCA": [
  null,
  "TCA avanzato"
 ],
 "All In One": [
  null,
  "Tutto In Uno"
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "Tutti i dati sui dischi selezionati verranno cancellati e i dischi verranno aggiunti al pool di archiviazione."
 ],
 "Always": [
  null,
  "Sempre"
 ],
 "Author": [
  null,
  "Autore"
 ],
 "Blade": [
  null,
  "Lama"
 ],
 "Blade enclosure": [
  null,
  "Involucro della lama"
 ],
 "Bus Expansion Chassis": [
  null,
  "Telaio di espansione bus"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU priority": [
  null,
  "Priorità della CPU"
 ],
 "CPU usage:": [
  null,
  "Utilizzo CPU"
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  "Non è possibile connettersi a Docker"
 ],
 "Cancel": [
  null,
  "Annulla"
 ],
 "Change": [
  null,
  "Cambia"
 ],
 "Change resource limits": [
  null,
  "Modificare i limiti delle risorse"
 ],
 "Change resources limits": [
  null,
  "Modificare i limiti delle risorse"
 ],
 "Close": [
  null,
  "Chiudi"
 ],
 "Combined memory usage": [
  null,
  "Utilizzo della memoria combinata"
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  "Utilizzo combinato di $0 core della CPU",
  "Utilizzo combinato di $0 core della CPU"
 ],
 "Command": [
  null,
  "Comando"
 ],
 "Command can't be empty": [
  null,
  "Il comando non può essere vuoto"
 ],
 "Command:": [
  null,
  "Comando:"
 ],
 "Commit": [
  null,
  "Commit"
 ],
 "Commit Image": [
  null,
  "Commit immagine"
 ],
 "Compact PCI": [
  null,
  "Compact PCI"
 ],
 "Configure storage...": [
  null,
  "Configura storage....."
 ],
 "Connecting to Docker": [
  null,
  "Collegamento a Docker"
 ],
 "Container": [
  null,
  "Container"
 ],
 "Container Name": [
  null,
  "Nome container"
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  "Il contenitore è attualmente contrassegnato come non funzionante, ma l'arresto regolare non è riuscito."
 ],
 "Container is currently running.": [
  null,
  "Il contenitore è attualmente in funzione."
 ],
 "Container:": [
  null,
  "Container:"
 ],
 "Containers": [
  null,
  "Container"
 ],
 "Convertible": [
  null,
  "Convertibile"
 ],
 "Could not add all disks": [
  null,
  "Impossibile aggiungere tutti i dischi"
 ],
 "Could not reset the storage pool": [
  null,
  "Impossibile resettare il pool di stoccaggio"
 ],
 "Created": [
  null,
  "Creato"
 ],
 "Created:": [
  null,
  "Creato:"
 ],
 "Default": [
  null,
  "Predefinito"
 ],
 "Delete": [
  null,
  "Cancella"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "L'eliminazione di un contenitore cancellerà tutti i dati in esso contenuti."
 ],
 "Desktop": [
  null,
  "Desktop"
 ],
 "Detachable": [
  null,
  "Staccabile"
 ],
 "Details": [
  null,
  "Dettagli"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Docker non è installato o attivato sul sistema"
 ],
 "Docking Station": [
  null,
  "Docking Station"
 ],
 "Download": [
  null,
  "Scarica"
 ],
 "Drive": [
  null,
  "Drive"
 ],
 "Duplicate alias": [
  null,
  "Duplica alias"
 ],
 "Duplicate port": [
  null,
  "Duplica porta"
 ],
 "Embedded PC": [
  null,
  "PC integrato"
 ],
 "Entrypoint": [
  null,
  "Punto d'ingresso"
 ],
 "Environment": [
  null,
  "Ambiente"
 ],
 "Erase containers and reset storage pool": [
  null,
  "Cancellare i contenitori e resettare il pool di stoccaggio"
 ],
 "Error message from Docker:": [
  null,
  "Messaggio di errore da parte di Docker:"
 ],
 "Everything": [
  null,
  "Tutto"
 ],
 "Exited $ExitCode": [
  null,
  "Codice di uscita $ExitCode"
 ],
 "Expansion Chassis": [
  null,
  "Telaio di espansione"
 ],
 "Expose container ports": [
  null,
  "Esporre le porte dei contenitori"
 ],
 "Failed to start Docker: $0": [
  null,
  "Non sono riuscito a far partire Docker: $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  "Non è riuscito a fermare il cannocchiale Docker: $0"
 ],
 "Force Delete": [
  null,
  "Forza Cancella"
 ],
 "Free": [
  null,
  "Libero"
 ],
 "Gateway:": [
  null,
  "Gateway:"
 ],
 "Get new image": [
  null,
  "Ricevi una nuova immagine"
 ],
 "Hand Held": [
  null,
  "Tenuto in mano"
 ],
 "Hard Disk": [
  null,
  "Disco rigido"
 ],
 "IP Address:": [
  null,
  "Indirizzo IP:"
 ],
 "IP Prefix Length:": [
  null,
  "Lunghezza prefisso IP:"
 ],
 "Id": [
  null,
  "Id"
 ],
 "Id:": [
  null,
  "Id:"
 ],
 "Image": [
  null,
  "Immagine"
 ],
 "Image $0": [
  null,
  "Immagine $0"
 ],
 "Image Search": [
  null,
  "Ricerca immagini"
 ],
 "Image:": [
  null,
  "Immagine:"
 ],
 "Images": [
  null,
  "Immagini"
 ],
 "Images and running containers": [
  null,
  "Immagini e container in esecuzione"
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  "Le informazioni sul pool di archiviazione Docker non sono disponibili."
 ],
 "Invalid port": [
  null,
  "Porta non valida"
 ],
 "IoT Gateway": [
  null,
  "IoT Gateway"
 ],
 "Laptop": [
  null,
  "Portatile"
 ],
 "Link to another container": [
  null,
  "Collegamento ad un altro contenitore"
 ],
 "Links": [
  null,
  "Link"
 ],
 "Links:": [
  null,
  "Link:"
 ],
 "Local Disks": [
  null,
  "Dischi locali"
 ],
 "Low Profile Desktop": [
  null,
  "Desktop a basso profilo"
 ],
 "Lunch Box": [
  null,
  "Scatola da pranzo"
 ],
 "MAC Address:": [
  null,
  "Indirizzo MAC:"
 ],
 "Main Server Chassis": [
  null,
  "Telaio del server principale"
 ],
 "Memory": [
  null,
  "Memoria"
 ],
 "Memory limit": [
  null,
  "Limite memoria"
 ],
 "Memory usage:": [
  null,
  "Utilizzo memoria:"
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
  "Mini Torre"
 ],
 "Mount container volumes": [
  null,
  "Montare i volumi dei container"
 ],
 "Multi-system Chassis": [
  null,
  "Telaio multisistema"
 ],
 "Name": [
  null,
  "Nome"
 ],
 "No": [
  null,
  "No"
 ],
 "No additional local storage found.": [
  null,
  "Non è stata trovata alcuna ulteriore conservazione locale."
 ],
 "No alias specified": [
  null,
  "Nessun alias specificato"
 ],
 "No container specified": [
  null,
  "Nessun contenitore specificato"
 ],
 "No containers": [
  null,
  "Nessun contenitore"
 ],
 "No containers that match the current filter": [
  null,
  "Nessun contenitore che corrisponde al filtro corrente"
 ],
 "No images": [
  null,
  "Nessuna immagine"
 ],
 "No images that match the current filter": [
  null,
  "Nessuna immagine che corrisponde al filtro corrente"
 ],
 "No results for $0": [
  null,
  "Nessun risultato per $0"
 ],
 "No running containers": [
  null,
  "Nessun contenitore in funzione"
 ],
 "No running containers that match the current filter": [
  null,
  "Nessun contenitore in esecuzione che corrisponde al filtro corrente"
 ],
 "Not authorized to access Docker on this system": [
  null,
  "Non autorizzato ad accedere a Docker su questo sistema"
 ],
 "Not found": [
  null,
  "Non trovato"
 ],
 "Notebook": [
  null,
  "Notebook"
 ],
 "Off": [
  null,
  "Off"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  "On"
 ],
 "On Failure": [
  null,
  "In caso di guasto"
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "In caso di guasto, $0tempo di ripetizione del tentativo",
  "In caso di guasto, $0tempi di ripetizione"
 ],
 "Other": [
  null,
  "Altro"
 ],
 "Overview": [
  null,
  "Panoramica"
 ],
 "Peripheral Chassis": [
  null,
  "Telaio periferico"
 ],
 "Pizza Box": [
  null,
  "Scatola della pizza"
 ],
 "Please confirm deletion of $0": [
  null,
  "Si prega di confermare la cancellazione di $0"
 ],
 "Please confirm forced deletion of $0": [
  null,
  "Si prega di confermare la cancellazione forzata di $0"
 ],
 "Please try another term": [
  null,
  "Per favore, prova con un altro termine"
 ],
 "Portable": [
  null,
  "Portatile"
 ],
 "Ports": [
  null,
  "Porte"
 ],
 "Ports:": [
  null,
  "Porte:"
 ],
 "Problems": [
  null,
  "Problemi"
 ],
 "RAID Chassis": [
  null,
  "Telaio RAID"
 ],
 "Rack Mount Chassis": [
  null,
  "Telaio a rack"
 ],
 "ReadOnly": [
  null,
  "Solo lettura"
 ],
 "ReadWrite": [
  null,
  "Lettura scrittura"
 ],
 "Reboot": [
  null,
  "Riavvia"
 ],
 "Reformat and add disks": [
  null,
  "Riformattare e aggiungere dischi"
 ],
 "Repository": [
  null,
  "Repository"
 ],
 "Reset": [
  null,
  "Azzera"
 ],
 "Reset Storage Pool": [
  null,
  "Reimpostare la piscina di stoccaggio"
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  "Il ripristino della piscina di stoccaggio cancellerà tutti i contenitori e i dischi di rilascio nella piscina."
 ],
 "Restart": [
  null,
  "Riavvia"
 ],
 "Restart Policy": [
  null,
  "Politica di riavvio"
 ],
 "Restart Policy:": [
  null,
  "Politica di riavvio:"
 ],
 "Retries:": [
  null,
  "Riprova:"
 ],
 "Run": [
  null,
  "Esegui"
 ],
 "Run Image": [
  null,
  "Esegui Immagine"
 ],
 "Sealed-case PC": [
  null,
  "Caso PC sigillato"
 ],
 "Security": [
  null,
  "Sicurezza"
 ],
 "Set container environment variables": [
  null,
  "Impostare le variabili d'ambiente del container"
 ],
 "Show all containers": [
  null,
  "Mostra tutti i container"
 ],
 "Show all images": [
  null,
  "Mostra tutte le immagini"
 ],
 "Size": [
  null,
  "Dimensione"
 ],
 "Solid-State Disk": [
  null,
  "Disco a stato solido"
 ],
 "Space-saving Computer": [
  null,
  "Computer salvaspazio"
 ],
 "Start": [
  null,
  "Avvia"
 ],
 "Start Docker": [
  null,
  "Avvia Docker"
 ],
 "State": [
  null,
  "Stato"
 ],
 "State:": [
  null,
  "Stato:"
 ],
 "Stick PC": [
  null,
  "Stick PC"
 ],
 "Stop": [
  null,
  "Ferma"
 ],
 "Stop and delete": [
  null,
  "Ferma ed elimina"
 ],
 "Stopped": [
  null,
  "Fermato"
 ],
 "Storage": [
  null,
  "Storage"
 ],
 "Storage pool": [
  null,
  "Pool di archiviazione"
 ],
 "Sub Chassis": [
  null,
  "Sub Chassis"
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
  "Tavoletta"
 ],
 "Tag": [
  null,
  "Etichetta"
 ],
 "Tags": [
  null,
  "Tag"
 ],
 "The Docker storage pool cannot be managed on this system.": [
  null,
  "Il pool di archiviazione Docker non può essere gestito su questo sistema."
 ],
 "The following containers depend on this image and will become unusable.": [
  null,
  "I seguenti contenitori dipendono da questa immagine e diventeranno inutilizzabili."
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  "La scansione da $time ($type) non ha trovato vulnerabilità."
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  "La scansione da $time ($type) non ha avuto successo."
 ],
 "This image does not exist.": [
  null,
  "Questa immagine non esiste."
 ],
 "Total": [
  null,
  "Totale"
 ],
 "Tower": [
  null,
  "Tower"
 ],
 "Try again": [
  null,
  "Riprova"
 ],
 "Type to filter…": [
  null,
  "Tipo da filtrare...."
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Errore imprevisto"
 ],
 "Unknown": [
  null,
  "Sconosciuto"
 ],
 "Unless Stopped": [
  null,
  "A meno che non si sia fermato"
 ],
 "Up since $0": [
  null,
  "Avviato dal $0"
 ],
 "Used": [
  null,
  "Usato"
 ],
 "Used by Containers": [
  null,
  "Usato da Contenitori"
 ],
 "Volumes": [
  null,
  "Volumi"
 ],
 "Volumes:": [
  null,
  "Volumi:"
 ],
 "With terminal": [
  null,
  "Con terminale"
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  "Non hai il permesso di gestire il pool di archiviazione di Docker."
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0byte di dati binari]"
 ],
 "[binary data]": [
  null,
  "[dati binari]"
 ],
 "[no data]": [
  null,
  "[nessun dato]"
 ],
 "alias": [
  null,
  "alias"
 ],
 "default": [
  null,
  "predefinito"
 ],
 "key": [
  null,
  "chiave"
 ],
 "none": [
  null,
  "nessuno"
 ],
 "search by name, namespace or description": [
  null,
  "ricerca per nome, spazio dei nomi o descrizione"
 ],
 "select container": [
  null,
  "seleziona container"
 ],
 "shares": [
  null,
  "condivisioni"
 ],
 "to host path": [
  null,
  "per ospitare il percorso"
 ],
 "to host port": [
  null,
  "per ospitare la porta"
 ],
 "undefined": [
  null,
  "non definito"
 ],
 "value": [
  null,
  "valore"
 ],
 "page-title\u0004Containers": [
  null,
  "Container"
 ],
 "page-title\u0004Images": [
  null,
  "Immagini"
 ]
}));
