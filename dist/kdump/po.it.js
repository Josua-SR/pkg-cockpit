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
 "Apply": [
  null,
  "Applica"
 ],
 "Cancel": [
  null,
  "Annulla"
 ],
 "Compress crash dumps to save space": [
  null,
  "Comprimere i crash dump per risparmiare spazio"
 ],
 "Compression": [
  null,
  "Compressione"
 ],
 "Crash dump location": [
  null,
  "Posizione della discarica di crash"
 ],
 "Crash system": [
  null,
  "Sistema Crash"
 ],
 "Directory": [
  null,
  "Directory"
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  "L'elenco non $0è scrivibile o non esiste."
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  "Servizio Kdump non installato. Assicurarsi che il pacchetto kexec-tools sia installato."
 ],
 "Kernel Dump": [
  null,
  "Kernel Dump"
 ],
 "Loading...": [
  null,
  "Caricamento in corso..."
 ],
 "Local Filesystem": [
  null,
  "File system locale"
 ],
 "Location": [
  null,
  "Posizione"
 ],
 "More details": [
  null,
  "Maggiori dettagli"
 ],
 "Mount": [
  null,
  "Mount"
 ],
 "No configuration found": [
  null,
  "Nessuna configurazione trovata"
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  "Nessuna riserva di memoria. Aggiungere un'opzione crashkernel alla riga di comando del kernel (p.e. in /etc/default/grub) per riservare memoria all'avvio. Esempio: crashkernel=512M"
 ],
 "None": [
  null,
  "Nessuno"
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
 "On a mounted device": [
  null,
  "Su un dispositivo montato"
 ],
 "Raw to a device": [
  null,
  "Crudo a un dispositivo"
 ],
 "Reading...": [
  null,
  "Lettura....."
 ],
 "Remote over NFS": [
  null,
  "Remoto su NFS"
 ],
 "Remote over SSH": [
  null,
  "Remoto su SSH"
 ],
 "Reserved memory": [
  null,
  "Memoria riservata"
 ],
 "Server": [
  null,
  "Server"
 ],
 "Service has an error": [
  null,
  "Il servizio ha un errore"
 ],
 "Service is running": [
  null,
  "Il servizio è in funzione"
 ],
 "Service is starting": [
  null,
  "Il servizio è in fase di avvio"
 ],
 "Service is stopped": [
  null,
  "Il servizio è interrotto"
 ],
 "Service is stopping": [
  null,
  "Il servizio si sta fermando"
 ],
 "Test Configuration": [
  null,
  "Test configurazione"
 ],
 "Test is only available while the kdump service is running.": [
  null,
  "Il test è disponibile solo mentre il servizio kdump è in funzione."
 ],
 "Test kdump settings": [
  null,
  "Test impostazioni kdump"
 ],
 "This will test kdump settings by crashing the kernel and thereby the system. Depending on the settings, the system may not automatically reboot and the process may take a while.": [
  null,
  "Questo testerà le impostazioni di kdump bloccando il kernel e quindi il sistema. A seconda delle impostazioni, il sistema potrebbe non riavviare automaticamente il sistema e il processo potrebbe richiedere del tempo."
 ],
 "This will test the kdump configuration by crashing the kernel.": [
  null,
  "Questo testerà la configurazione di kdump mandando in crash il kernel."
 ],
 "Unable to apply settings: $0": [
  null,
  "Impossibile applicare le impostazioni: $0"
 ],
 "invalid: multiple targets defined": [
  null,
  "non valido: sono stati definiti più obiettivi multipli"
 ],
 "kdump status": [
  null,
  "stato kdump"
 ],
 "locally in $0": [
  null,
  "localmente in $0"
 ],
 "nfs dump target isn't formated as server:path": [
  null,
  "nfs dump target non è formattato come server:path"
 ],
 "ssh key": [
  null,
  "chiave ssh"
 ],
 "ssh key isn't a path": [
  null,
  "ssh key non è un percorso"
 ],
 "ssh server is empty": [
  null,
  "il server ssh è vuoto"
 ],
 "undefined": [
  null,
  "non definito"
 ]
}));
