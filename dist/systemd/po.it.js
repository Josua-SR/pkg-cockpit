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
 "$0 Template": [
  null,
  "$0 Template"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 non è disponibile in nessun deposito."
 ],
 "$0 will be installed.": [
  null,
  "$0 sarà installato."
 ],
 "1 Minute": [
  null,
  "1 minuto"
 ],
 "1 day": [
  null,
  "1 giorno"
 ],
 "1 hour": [
  null,
  "1 ora"
 ],
 "1 min": [
  null,
  "1 min"
 ],
 "1 week": [
  null,
  "1 settimana"
 ],
 "10th": [
  null,
  "10°"
 ],
 "11th": [
  null,
  "11t°"
 ],
 "12th": [
  null,
  "12°"
 ],
 "13th": [
  null,
  "13°"
 ],
 "14th": [
  null,
  "14°"
 ],
 "15th": [
  null,
  "15°"
 ],
 "16th": [
  null,
  "16°"
 ],
 "17th": [
  null,
  "17°"
 ],
 "18th": [
  null,
  "18°"
 ],
 "19th": [
  null,
  "19°"
 ],
 "1st": [
  null,
  "1°"
 ],
 "2 min": [
  null,
  "2 min"
 ],
 "20 Minutes": [
  null,
  "20 minuti"
 ],
 "20th": [
  null,
  "20"
 ],
 "21st": [
  null,
  "21"
 ],
 "22nd": [
  null,
  "22esimo"
 ],
 "23rd": [
  null,
  "ventitreesimo"
 ],
 "24th": [
  null,
  "ventiquattresimo"
 ],
 "25th": [
  null,
  "venticinquesimo"
 ],
 "26th": [
  null,
  "26°"
 ],
 "27th": [
  null,
  "27"
 ],
 "28th": [
  null,
  "ventottesimo"
 ],
 "29th": [
  null,
  "ventinovesimo"
 ],
 "2nd": [
  null,
  "2a"
 ],
 "3 min": [
  null,
  "3 min"
 ],
 "30th": [
  null,
  "30"
 ],
 "31st": [
  null,
  "31"
 ],
 "3rd": [
  null,
  "Terzo"
 ],
 "4 min": [
  null,
  "4 min"
 ],
 "40 Minutes": [
  null,
  "40 minuti"
 ],
 "4th": [
  null,
  "4a"
 ],
 "5 Minutes": [
  null,
  "5 Minuti"
 ],
 "5 min": [
  null,
  "5 min"
 ],
 "5 minutes": [
  null,
  "5 minuti"
 ],
 "5th": [
  null,
  "Quinto"
 ],
 "6 hours": [
  null,
  "6 ore"
 ],
 "60 Minutes": [
  null,
  "60 minuti"
 ],
 "6th": [
  null,
  "6°"
 ],
 "7th": [
  null,
  "7°"
 ],
 "8th": [
  null,
  "ottavo"
 ],
 "9th": [
  null,
  "Nona"
 ],
 "Additional packages:": [
  null,
  "Pacchetti aggiuntivi:"
 ],
 "Advanced TCA": [
  null,
  "TCA avanzato"
 ],
 "After": [
  null,
  "Dopo"
 ],
 "After system boot": [
  null,
  "Dopo l'avvio del sistema"
 ],
 "Alert and above": [
  null,
  "Allarme e oltre"
 ],
 "All": [
  null,
  ""
 ],
 "All In One": [
  null,
  "Tutto In Uno"
 ],
 "Appearance:": [
  null,
  ""
 ],
 "Asset Tag": [
  null,
  "Etichetta Asset"
 ],
 "At specific time": [
  null,
  "In un momento specifico"
 ],
 "Automatic Startup": [
  null,
  ""
 ],
 "Automatically using NTP": [
  null,
  "Automaticamente utilizzando NTP"
 ],
 "Automatically using specific NTP servers": [
  null,
  "Automaticamente utilizzando server NTP specifici"
 ],
 "BIOS": [
  null,
  "BIOS"
 ],
 "BIOS date": [
  null,
  "Data del BIOS"
 ],
 "BIOS version": [
  null,
  "Versione BIOS"
 ],
 "Before": [
  null,
  "Prima"
 ],
 "Binds To": [
  null,
  "Si lega a"
 ],
 "Black": [
  null,
  ""
 ],
 "Blade": [
  null,
  "Lama"
 ],
 "Blade enclosure": [
  null,
  "Involucro della lama"
 ],
 "Bound By": [
  null,
  "Legato da"
 ],
 "Bug Fix Updates Available": [
  null,
  "Aggiornamenti Bug Fix disponibili"
 ],
 "Bus Expansion Chassis": [
  null,
  "Telaio di espansione bus"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU Security": [
  null,
  ""
 ],
 "CPU Security Toggles": [
  null,
  ""
 ],
 "Cached": [
  null,
  "Imbarcato"
 ],
 "Cancel": [
  null,
  "Annulla"
 ],
 "Cannot schedule event in the past": [
  null,
  "Non è possibile programmare eventi del passato"
 ],
 "Change": [
  null,
  "Cambia"
 ],
 "Change Host Name": [
  null,
  "Cambia nome host"
 ],
 "Change System Time": [
  null,
  "Modifica dell'ora di sistema"
 ],
 "Checking for updates…": [
  null,
  "Controllo degli aggiornamenti...."
 ],
 "Checking installed software": [
  null,
  "Verifica del software installato"
 ],
 "Class": [
  null,
  "Classe"
 ],
 "Clear All Filters": [
  null,
  ""
 ],
 "Click to see system hardware information": [
  null,
  "Fare clic per visualizzare le informazioni sull'hardware del sistema"
 ],
 "Close": [
  null,
  "Chiudi"
 ],
 "Command": [
  null,
  "Comando"
 ],
 "Compact PCI": [
  null,
  "Compact PCI"
 ],
 "Condition $0=$1 was not met": [
  null,
  "Condizione $0=$1 non soddisfatta"
 ],
 "Condition failed": [
  null,
  "Condizione fallita"
 ],
 "Conflicted By": [
  null,
  "Conflitto da"
 ],
 "Conflicts": [
  null,
  "Conflitti"
 ],
 "Consists Of": [
  null,
  "Consiste di"
 ],
 "Convertible": [
  null,
  "Convertibile"
 ],
 "Copy": [
  null,
  ""
 ],
 "Create Timer": [
  null,
  "Creare un timer"
 ],
 "Create Timers": [
  null,
  "Creazione di timer"
 ],
 "Critical and above": [
  null,
  "Critico e superiore"
 ],
 "Ctrl+Insert": [
  null,
  ""
 ],
 "Current boot": [
  null,
  "Boot corrente"
 ],
 "Dark": [
  null,
  ""
 ],
 "Debug and above": [
  null,
  "Debug e superiore"
 ],
 "Delay": [
  null,
  "Ritardo"
 ],
 "Description": [
  null,
  "Descrizione"
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
 "Disable": [
  null,
  "Disabilita"
 ],
 "Disable simultaneous multithreading": [
  null,
  ""
 ],
 "Disabled": [
  null,
  "Disabilitato"
 ],
 "Disk I/O": [
  null,
  "I/O disco"
 ],
 "Docking Station": [
  null,
  "Docking Station"
 ],
 "Domain": [
  null,
  "Dominio"
 ],
 "Don't Repeat": [
  null,
  "Non ripetere"
 ],
 "Downloading $0": [
  null,
  "Download di $0"
 ],
 "Embedded PC": [
  null,
  "PC integrato"
 ],
 "Enable": [
  null,
  "Abilita"
 ],
 "Enable Forcefully": [
  null,
  "Abilita forzatamente"
 ],
 "Enable stored metrics…": [
  null,
  "Abilita metriche memorizzate...."
 ],
 "Enabled": [
  null,
  "Attivato"
 ],
 "Enhancement Updates Available": [
  null,
  "Aggiornamenti di miglioramento disponibili"
 ],
 "Entry": [
  null,
  "Voce"
 ],
 "Error": [
  null,
  "Errore"
 ],
 "Error and above": [
  null,
  "Errore e superiore"
 ],
 "Everything": [
  null,
  "Tutto"
 ],
 "Expansion Chassis": [
  null,
  "Telaio di espansione"
 ],
 "Filter by name or description...": [
  null,
  ""
 ],
 "Friday": [
  null,
  "Venerdì"
 ],
 "General": [
  null,
  "Generale"
 ],
 "Go to": [
  null,
  "Vai a"
 ],
 "Go to now": [
  null,
  "Vai a ora"
 ],
 "Hand Held": [
  null,
  "Tenuto in mano"
 ],
 "Hardware": [
  null,
  "Hardware"
 ],
 "Hardware Information": [
  null,
  "Informazioni hardware"
 ],
 "Host Name": [
  null,
  "Host Name"
 ],
 "Hour : Minute": [
  null,
  "Ora : Minuto"
 ],
 "Hour needs to be a number between 0-23": [
  null,
  "L'ora deve essere un numero compreso tra 0-23"
 ],
 "Hours": [
  null,
  "Ore"
 ],
 "I/O Wait": [
  null,
  "Attesa I/O"
 ],
 "Info and above": [
  null,
  "Info e sopra"
 ],
 "Install": [
  null,
  "Installa"
 ],
 "Install Software": [
  null,
  "Installare il software"
 ],
 "Installing $0": [
  null,
  "Installazione di $0"
 ],
 "Instantiate": [
  null,
  "Istantanea"
 ],
 "Invalid date format": [
  null,
  "Formato data non valido"
 ],
 "Invalid date format and invalid time format": [
  null,
  "Formato data non valido e formato ora non valido"
 ],
 "Invalid date format.": [
  null,
  "Formato data non valido."
 ],
 "Invalid number.": [
  null,
  "Numero non valido."
 ],
 "Invalid time format": [
  null,
  "Formato ora non valido"
 ],
 "Invalid time zone": [
  null,
  "Fuso orario non valido"
 ],
 "IoT Gateway": [
  null,
  "IoT Gateway"
 ],
 "Joins Namespace Of": [
  null,
  "Iscrive Namespace Of"
 ],
 "Journal": [
  null,
  "Giornale"
 ],
 "Journal entry": [
  null,
  "Voce del diario"
 ],
 "Journal entry not found": [
  null,
  "Voce del diario non trovata"
 ],
 "Kernel": [
  null,
  "Kernel"
 ],
 "Laptop": [
  null,
  "Portatile"
 ],
 "Last 24 hours": [
  null,
  "Ultime 24 ore"
 ],
 "Last 7 days": [
  null,
  "Ultimi 7 giorni"
 ],
 "Last Trigger": [
  null,
  "Ultimo trigger"
 ],
 "Light": [
  null,
  ""
 ],
 "Load earlier entries": [
  null,
  "Carica le voci precedenti"
 ],
 "Loading...": [
  null,
  "Caricamento in corso..."
 ],
 "Log messages": [
  null,
  "Messaggi di log"
 ],
 "Logs": [
  null,
  "Log"
 ],
 "Low Profile Desktop": [
  null,
  "Desktop a basso profilo"
 ],
 "Lunch Box": [
  null,
  "Scatola da pranzo"
 ],
 "Machine ID": [
  null,
  "ID macchina"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "Impronte digitali dei tasti SSH a macchina"
 ],
 "Main Server Chassis": [
  null,
  "Telaio del server principale"
 ],
 "Manually": [
  null,
  "Manualmente"
 ],
 "Mask": [
  null,
  "Maschera"
 ],
 "Mask Forcefully": [
  null,
  "Maschera con forza"
 ],
 "Memory": [
  null,
  "Memoria"
 ],
 "Memory & Swap": [
  null,
  "Memoria & Scambio"
 ],
 "Message to logged in users": [
  null,
  "Messaggio agli utenti registrati"
 ],
 "Mini PC": [
  null,
  "Mini PC"
 ],
 "Mini Tower": [
  null,
  "Mini Torre"
 ],
 "Minute needs to be a number between 0-59": [
  null,
  "Il minuto deve essere un numero compreso tra 0-59"
 ],
 "Minutes": [
  null,
  "Minuti"
 ],
 "Mitigations": [
  null,
  ""
 ],
 "Model": [
  null,
  "Modello"
 ],
 "Monday": [
  null,
  "Lunedì"
 ],
 "Multi-system Chassis": [
  null,
  "Telaio multisistema"
 ],
 "NTP Server": [
  null,
  "Server NTP"
 ],
 "Name": [
  null,
  "Nome"
 ],
 "Need at least one NTP server": [
  null,
  "Immettere almeno un server NTP"
 ],
 "Network Traffic": [
  null,
  "Traffico di rete"
 ],
 "Next Run": [
  null,
  "Prossima esecuzione"
 ],
 "Nice": [
  null,
  "Nice"
 ],
 "No Delay": [
  null,
  "Nessun ritardo"
 ],
 "No Matching Results": [
  null,
  ""
 ],
 "No host keys found.": [
  null,
  "Non sono state trovate chiavi host."
 ],
 "Not authorized to upload-report": [
  null,
  "Non autorizzato a caricare-report"
 ],
 "Not synchronized": [
  null,
  "Non sincronizzato"
 ],
 "Note": [
  null,
  "Note"
 ],
 "Notebook": [
  null,
  "Notebook"
 ],
 "Notice and above": [
  null,
  "Notice e oltre"
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
 "Only Emergency": [
  null,
  "Solo emergenza"
 ],
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  "Sono ammessi solo gli alfabeti, i numeri, : , _ , _ , . , , @ , -."
 ],
 "Operating System": [
  null,
  "Sistema Operativo"
 ],
 "Other": [
  null,
  "Altro"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit si è interrotto"
 ],
 "Part Of": [
  null,
  "Parte di"
 ],
 "Paste": [
  null,
  ""
 ],
 "Path": [
  null,
  "Percorso"
 ],
 "Paths": [
  null,
  "Percorsi"
 ],
 "Performance Profile": [
  null,
  "Profilo di prestazione"
 ],
 "Peripheral Chassis": [
  null,
  "Telaio periferico"
 ],
 "Pizza Box": [
  null,
  "Scatola della pizza"
 ],
 "Portable": [
  null,
  "Portatile"
 ],
 "Power Options": [
  null,
  "Opzioni di alimentazione"
 ],
 "Preset": [
  null,
  "Preset"
 ],
 "Preset Forcefully": [
  null,
  "Preselezionato Con forza"
 ],
 "Pretty Host Name": [
  null,
  "Nome dell'host grazioso"
 ],
 "Problem details": [
  null,
  "Dettagli del problema"
 ],
 "Problem info": [
  null,
  "Informazioni sul problema"
 ],
 "Propagates Reload To": [
  null,
  "Propagati Ricarica su"
 ],
 "RAID Chassis": [
  null,
  "Telaio RAID"
 ],
 "Rack Mount Chassis": [
  null,
  "Telaio a rack"
 ],
 "Read more...": [
  null,
  ""
 ],
 "Real Host Name": [
  null,
  "Nome dell'host reale"
 ],
 "Real host name can only contain lower-case characters, digits, dashes, and periods (with populated subdomains)": [
  null,
  "Il nome host reale può contenere solo caratteri minuscoli, cifre, trattini e periodi (con sottodomini popolati)"
 ],
 "Real host name must be 64 characters or less": [
  null,
  "Il nome host reale deve essere di 64 caratteri o meno"
 ],
 "Reboot": [
  null,
  "Riavvia"
 ],
 "Recent": [
  null,
  "Recenti"
 ],
 "Reload": [
  null,
  "Ricarica"
 ],
 "Reload Propagated From": [
  null,
  "Ricarica Propagato da"
 ],
 "Removals:": [
  null,
  "Traslochi:"
 ],
 "Removing $0": [
  null,
  "Rimozione $0"
 ],
 "Repeat Daily": [
  null,
  "Ripetere tutti i giorni"
 ],
 "Repeat Hourly": [
  null,
  "Ripetere ogni ora"
 ],
 "Repeat Monthly": [
  null,
  "Ripetere ogni mese"
 ],
 "Repeat Weekly": [
  null,
  "Ripetere ogni settimana"
 ],
 "Repeat Yearly": [
  null,
  "Ripetere ogni anno"
 ],
 "Report": [
  null,
  "Notifica"
 ],
 "Reported": [
  null,
  "Segnalato"
 ],
 "Reporter 'reporter-ureport' not found.": [
  null,
  "Reporter \"reporter-ureport\" non trovato."
 ],
 "Reporting was unsucessful. Try running `reporter-ureport -d ": [
  null,
  "La segnalazione non ha avuto successo. Prova a eseguire `reporter-ureport -d "
 ],
 "Required By": [
  null,
  "Richiesto da"
 ],
 "Requires": [
  null,
  "Ha bisogno di"
 ],
 "Requisite": [
  null,
  "Requisito"
 ],
 "Requisite Of": [
  null,
  "Requisito di"
 ],
 "Reset": [
  null,
  "Azzera"
 ],
 "Restart": [
  null,
  "Riavvia"
 ],
 "Run": [
  null,
  "Esegui"
 ],
 "Running Since": [
  null,
  ""
 ],
 "Saturday": [
  null,
  "Sabato"
 ],
 "Save": [
  null,
  "Salva"
 ],
 "Save and reboot": [
  null,
  ""
 ],
 "Sealed-case PC": [
  null,
  "Caso PC sigillato"
 ],
 "Seconds": [
  null,
  "Secondi"
 ],
 "Secure Shell Keys": [
  null,
  "Chiavi a guscio sicuro"
 ],
 "Security Updates Available": [
  null,
  "Aggiornamenti di sicurezza disponibili"
 ],
 "Service": [
  null,
  "Servizio"
 ],
 "Service Logs": [
  null,
  "Log servizi"
 ],
 "Service name": [
  null,
  "Nome del servizio"
 ],
 "Services": [
  null,
  "Servizi"
 ],
 "Set Host name": [
  null,
  "Imposta nome host"
 ],
 "Set Time": [
  null,
  "Tempo impostato"
 ],
 "Severity": [
  null,
  "Severità"
 ],
 "Shift+Insert": [
  null,
  ""
 ],
 "Show fingerprints": [
  null,
  "Mostra le impronte digitali"
 ],
 "Shut Down": [
  null,
  "Arresto"
 ],
 "Slot": [
  null,
  "Slot"
 ],
 "Sockets": [
  null,
  "Socket"
 ],
 "Software-based workarounds help prevent CPU security issues. These mitigations have the side effect of reducing performance. Change these settings at your own risk.": [
  null,
  ""
 ],
 "Space-saving Computer": [
  null,
  "Computer salvaspazio"
 ],
 "Specific Time": [
  null,
  "Tempo specifico"
 ],
 "Start": [
  null,
  "Avvia"
 ],
 "State": [
  null,
  "Stato"
 ],
 "Static": [
  null,
  "Statico"
 ],
 "Status": [
  null,
  "Stato"
 ],
 "Stick PC": [
  null,
  "Stick PC"
 ],
 "Stop": [
  null,
  "Ferma"
 ],
 "Store Metrics": [
  null,
  ""
 ],
 "Sub Chassis": [
  null,
  "Sub Chassis"
 ],
 "Sub Notebook": [
  null,
  "Sub Notebook"
 ],
 "Sunday": [
  null,
  "Domenica"
 ],
 "Swap Used": [
  null,
  "Swap usato"
 ],
 "Synchronized": [
  null,
  "Sincronizzato"
 ],
 "Synchronized with {{Server}}": [
  null,
  "Sincronizzato con {{Server}}"
 ],
 "System": [
  null,
  "Sistema"
 ],
 "System Information": [
  null,
  "Informazioni sul sistema"
 ],
 "System Not Registered": [
  null,
  "Sistema non registrato"
 ],
 "System Services": [
  null,
  "Servizi di sistema"
 ],
 "System Time": [
  null,
  "Tempo di sistema"
 ],
 "System Up To Date": [
  null,
  "Sistema aggiornato"
 ],
 "Tablet": [
  null,
  "Tavoletta"
 ],
 "Targets": [
  null,
  "Obiettivi"
 ],
 "Terminal": [
  null,
  "Terminale"
 ],
 "The user $0 is not permitted to change cpu security mitigations": [
  null,
  ""
 ],
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  "L<b>$0</b>'utente non ha i permessi per la creazione di timer"
 ],
 "The user <b>$0</b> is not permitted to change the system time": [
  null,
  "L'utente non <b>$0</b> è autorizzato a modificare l'orario di sistema"
 ],
 "The user <b>$0</b> is not permitted to enable or disable services": [
  null,
  "All'utente non <b>$0</b> è consentito abilitare o disabilitare i servizi"
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  "L'utente non <b>$0</b>è autorizzato a modificare i nomi degli hostname"
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  "L'utente non <b>$0</b>è autorizzato a spegnere o riavviare il server"
 ],
 "The user <b>$0</b> is not permitted to start or stop services": [
  null,
  "L'utente non <b>$0</b>è autorizzato ad avviare o interrompere i servizi"
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  "Questo giorno non esiste in tutti i mesi. Il<br> timer verrà eseguito solo nei mesi che hanno 31."
 ],
 "This field cannot be empty.": [
  null,
  "Questo campo non può essere vuoto."
 ],
 "This unit is an instance of the $0 template.": [
  null,
  "Questa unità è un'istanza del $0 modello."
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  "Questa unità non è stata progettata per essere abilitata esplicitamente."
 ],
 "Thursday": [
  null,
  "Giovedì"
 ],
 "Time Zone": [
  null,
  "Fuso Orario"
 ],
 "Timers": [
  null,
  "Timer"
 ],
 "Total size: $0": [
  null,
  "Dimensione totale: $0"
 ],
 "Tower": [
  null,
  "Tower"
 ],
 "Triggered By": [
  null,
  "Attivato da"
 ],
 "Triggers": [
  null,
  "Trigger"
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  "Tenativo di sincronizzazione con {{Server}}"
 ],
 "Tuesday": [
  null,
  "Martedì"
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "Unknown": [
  null,
  "Sconosciuto"
 ],
 "Unmask": [
  null,
  "Smascherare"
 ],
 "Updates Available": [
  null,
  "Aggiornamenti disponibili"
 ],
 "Usage of $0 CPU core": [
  "Usage of $0 CPU cores",
  "Utilizzo del core della $0CPU",
  "Utilizzo dei core della $0CPU"
 ],
 "Used": [
  null,
  "Usato"
 ],
 "User": [
  null,
  "Utente"
 ],
 "Vendor": [
  null,
  "Rivenditore"
 ],
 "Version": [
  null,
  "Versione"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "In attesa che finiscano le altre operazioni di gestione del software"
 ],
 "Wanted By": [
  null,
  "Ricercato da"
 ],
 "Wants": [
  null,
  "Vuole"
 ],
 "Warning and above": [
  null,
  "Avvertenza e oltre"
 ],
 "Wednesday": [
  null,
  "Mercoledì"
 ],
 "Weeks": [
  null,
  "Settimane"
 ],
 "White": [
  null,
  ""
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
 "failed to list ssh host keys: $0": [
  null,
  "non ha elencato le chiavi host ssh: $0"
 ],
 "of $0 CPU core": [
  "of $0 CPU cores",
  "di core della CPU $0",
  "di core della CPU $0"
 ],
 "undefined": [
  null,
  "non definito"
 ],
 "unknown": [
  null,
  "sconosciuto"
 ],
 "page-title\u0004CPU Status": [
  null,
  "Stato CPU"
 ],
 "page-title\u0004Memory": [
  null,
  "Memoria"
 ]
}));
