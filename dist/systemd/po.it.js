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
 "Asset Tag": [
  null,
  "Etichetta Asset"
 ],
 "At specific time": [
  null,
  "In un momento specifico"
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
 "CPU": [
  null,
  "CPU"
 ],
 "Cached": [
  null,
  "Imbarcato"
 ],
 "Cancel": [
  null,
  "Annulla"
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
 "Checking installed software": [
  null,
  "Verifica del software installato"
 ],
 "Class": [
  null,
  "Classe"
 ],
 "Close": [
  null,
  "Chiudi"
 ],
 "Command": [
  null,
  "Comando"
 ],
 "Condition failed": [
  null,
  "Condizione fallita"
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
 "Current boot": [
  null,
  "Boot corrente"
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
 "Disk I/O": [
  null,
  "I/O disco"
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
 "Enable stored metrics…": [
  null,
  "Abilita metriche memorizzate...."
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
 "Invalid time zone": [
  null,
  "Fuso orario non valido"
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
 "Last 24 hours": [
  null,
  "Ultime 24 ore"
 ],
 "Last 7 days": [
  null,
  "Ultimi 7 giorni"
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
 "Machine ID": [
  null,
  "ID macchina"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "Impronte digitali dei tasti SSH a macchina"
 ],
 "Manually": [
  null,
  "Manualmente"
 ],
 "Memory": [
  null,
  "Memoria"
 ],
 "Memory & Swap": [
  null,
  "Memoria & Scambio"
 ],
 "Minutes": [
  null,
  "Minuti"
 ],
 "Model": [
  null,
  "Modello"
 ],
 "Monday": [
  null,
  "Lunedì"
 ],
 "Name": [
  null,
  "Nome"
 ],
 "Network Traffic": [
  null,
  "Traffico di rete"
 ],
 "Nice": [
  null,
  "Nice"
 ],
 "No Delay": [
  null,
  "Nessun ritardo"
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
 "Only Emergency": [
  null,
  "Solo emergenza"
 ],
 "Operating System": [
  null,
  "Sistema Operativo"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "Paths": [
  null,
  "Percorsi"
 ],
 "Performance Profile": [
  null,
  "Profilo di prestazione"
 ],
 "Power Options": [
  null,
  "Opzioni di alimentazione"
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
 "Real Host Name": [
  null,
  "Nome dell'host reale"
 ],
 "Reboot": [
  null,
  "Riavvia"
 ],
 "Recent": [
  null,
  "Recenti"
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
 "Saturday": [
  null,
  "Sabato"
 ],
 "Save": [
  null,
  "Salva"
 ],
 "Seconds": [
  null,
  "Secondi"
 ],
 "Secure Shell Keys": [
  null,
  "Chiavi a guscio sicuro"
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
 "Set Time": [
  null,
  "Tempo impostato"
 ],
 "Severity": [
  null,
  "Severità"
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
 "Specific Time": [
  null,
  "Tempo specifico"
 ],
 "Store metrics": [
  null,
  "Conserva metriche"
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
 "System Services": [
  null,
  "Servizi di sistema"
 ],
 "System Time": [
  null,
  "Tempo di sistema"
 ],
 "Targets": [
  null,
  "Obiettivi"
 ],
 "Terminal": [
  null,
  "Terminale"
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
 ]
}));
