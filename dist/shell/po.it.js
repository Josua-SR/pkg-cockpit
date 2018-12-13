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
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Una versione compatibile di Cockpit non è installata su {{#strong}}{{host}}{{/strong}}."
 ],
 "About Cockpit": [
  null,
  "Informazioni su Cockpit"
 ],
 "Account Settings": [
  null,
  "Impostazioni account"
 ],
 "Active Pages": [
  null,
  "Pagine attive"
 ],
 "Add": [
  null,
  "Aggiungi"
 ],
 "Add Machine to Dashboard": [
  null,
  "Aggiungi macchina alla dashboard"
 ],
 "Add key": [
  null,
  "Aggiungi chiave"
 ],
 "Address": [
  null,
  "Indirizzo"
 ],
 "Authentication": [
  null,
  "Autenticazione"
 ],
 "Authentication Failed": [
  null,
  "Autenticazione fallita"
 ],
 "Available": [
  null,
  "Disponibile"
 ],
 "Cancel": [
  null,
  "Annulla"
 ],
 "Cannot connect to an unknown machine": [
  null,
  "Impossibile connettersi a una macchina sconosciuta"
 ],
 "Change Password": [
  null,
  "Cambia password"
 ],
 "Checking for public keys": [
  null,
  "Controllo delle chiavi pubbliche"
 ],
 "Choose the language to be used in the application": [
  null,
  "Scegliere la lingua da utilizzare nell'applicazione"
 ],
 "Close": [
  null,
  "Chiudi"
 ],
 "Close Selected Pages": [
  null,
  "Chiudere le pagine selezionate"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit non può contattare l'host $0. Assicurarsi che abbia ssh in esecuzione sulla porta $1, o specificare un'altra porta nell'indirizzo."
 ],
 "Cockpit had an unexpected internal error. <br/><br/>You can try restarting Cockpit by pressing refresh in your browser. The javascript console contains details about this error (<b>Ctrl-Shift-J</b> in most browsers).": [
  null,
  "Cockpit ha avuto un errore interno inaspettato. <br/><br/>Puoi provare a riavviare Cockpit premendo aggiorna nel tuo browser. La console javascript contiene dettagli su questo errore (<b>Ctrl-Shift-J</b> nella maggior parte dei browser)."
 ],
 "Cockpit is an interactive Linux server admin interface.": [
  null,
  "Cockpit è un'interfaccia amministrativa interattiva per server Linux."
 ],
 "Cockpit is not installed": [
  null,
  "Cockpit non è installato"
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit non è stato in grado di contattare {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  "Cockpit non è stato in grado di accedere a {{#strong}}{{host}}{{/strong}}. {{#can_sync}}Si consiglia di provare a {{#sync_link}}sincronizzare gli utenti{{/sync_link}}.{{/can_sync}} Per ulteriori opzioni di autenticazione e supporto per la risoluzione dei problemi si prega di aggiornare cockpit-ws ad una versione più recente."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit non è stata in grado di effettuare il login{{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  "Cockpit non è riuscito ad accedere a {{#strong}}{{host}}{{/strong}}. Per utilizzare questa macchina con cockpit è necessario abilitare uno dei seguenti metodi di autenticazione nella configurazione di sshd su {{#strong}}{{host}}{{/strong}}:"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  "Cockpit non è stato in grado di accedere{{#strong}}{{host}}{{/strong}}. È possibile modificare le credenziali di autenticazione qui sotto. {{#can_sync}}Si può preferire di {{#sync_link}}sincronizzare gli account e le password{{/sync_link}}.{{/can_sync}}"
 ],
 "Color": [
  null,
  "Colore"
 ],
 "Comment": [
  null,
  "Commento"
 ],
 "Confirm": [
  null,
  "Conferma"
 ],
 "Connect": [
  null,
  "Connetti"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Il collegamento simultaneo a più di {{ limit }} macchine non è supportato."
 ],
 "Connecting to the machine": [
  null,
  "Collegamento alla macchina"
 ],
 "Could not contact {{host}}": [
  null,
  "Impossibile contattare {{host}}"
 ],
 "Couldn't connect to the machine": [
  null,
  "Non riusciva a connettersi alla macchina"
 ],
 "Details": [
  null,
  "Dettagli"
 ],
 "Disconnected": [
  null,
  "Disconnesso"
 ],
 "Display Language": [
  null,
  "Lingua di visualizzazione"
 ],
 "Enter IP address or host name": [
  null,
  "Inserire l'indirizzo IP o il nome host"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  "L'inserimento di una password diversa significa che sarà necessario riscriverla ogni volta che ci si ricollega a questa macchina"
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "Errore nel caricamento degli utenti: {{perm_failed}}"
 ],
 "Failed to add machine: $0": [
  null,
  "Non è riuscito ad aggiungere la macchina: $0"
 ],
 "Failed to change password": [
  null,
  "Impossibile cambiare la password"
 ],
 "Failed to edit machine: $0": [
  null,
  "Impossibile modificare la macchina: $0"
 ],
 "Fingerprint": [
  null,
  "Firma digitale"
 ],
 "Host": [
  null,
  "Host"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Per sincronizzare gli utenti, è necessario accedere a {{#strong}}{{host}}{{/strong}}."
 ],
 "Incorrect Host Key": [
  null,
  "Chiave host errata"
 ],
 "Invalid file permissions": [
  null,
  "Autorizzazioni file non valide"
 ],
 "Is sshd running on a different port?": [
  null,
  "La sshd è in esecuzione su un porto diverso?"
 ],
 "Kerberos Based SSO": [
  null,
  "SSO basato su Kerberos"
 ],
 "Kerberos Ticket": [
  null,
  "Biglietto Kerberos"
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "Lasciare vuoto per connettersi a questa macchina come utente attualmente connesso{{#default_user}} ({{default_user}}){{/default_user}}. Se si inserisce un nome utente diverso, tale utente sarà sempre utilizzato per connettersi a questa macchina."
 ],
 "Licensed under:": [
  null,
  "Concesso in licenza:"
 ],
 "Log In": [
  null,
  "Accedi"
 ],
 "Log Out": [
  null,
  "Esci"
 ],
 "Log in again": [
  null,
  "Effettua di nuovo il login"
 ],
 "Log in to {{host}}": [
  null,
  "Accedi a {{host}}"
 ],
 "Login Password": [
  null,
  "Password di login"
 ],
 "Login has escalated admin privileges": [
  null,
  "Il login ha aumentato i privilegi amministrativi"
 ],
 "Machines": [
  null,
  "Macchine"
 ],
 "New Password": [
  null,
  "Nuova password"
 ],
 "New password was not accepted": [
  null,
  "Nuova password non è stata accettata"
 ],
 "No matching files found": [
  null,
  "Nessun file corrispondente trovato"
 ],
 "No such file or directory": [
  null,
  "Nessun file o directory di questo tipo"
 ],
 "Not a valid private key": [
  null,
  "Non una chiave privata valida"
 ],
 "Off": [
  null,
  "Off"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Old Password": [
  null,
  "Vecchia password"
 ],
 "Old password not accepted": [
  null,
  "Vecchia password non accettata"
 ],
 "On": [
  null,
  "On"
 ],
 "Ooops!": [
  null,
  "Ooops!"
 ],
 "Password": [
  null,
  "Password"
 ],
 "Password not accepted": [
  null,
  "Password non accettata"
 ],
 "Password not usable for privileged tasks or to connect to other machines": [
  null,
  "Password non utilizzabile per compiti privilegiati o per connettersi ad altre macchine"
 ],
 "Path to file": [
  null,
  "Percorso da file"
 ],
 "Port": [
  null,
  "Porta"
 ],
 "Privileged": [
  null,
  "Privilegiato"
 ],
 "Project website": [
  null,
  "Sito web del progetto"
 ],
 "Prompting via ssh-add timed out": [
  null,
  "Prompting via ssh-add timed out"
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  "Prompting via ssh-keygen timed out"
 ],
 "Public Key": [
  null,
  "Chiave pubblica"
 ],
 "Reconnect": [
  null,
  "Ricollegare"
 ],
 "Reuse my password for privileged tasks and to connect to other machines": [
  null,
  "Riutilizza la mia password per attività privilegiate e per connettersi ad altre macchine"
 ],
 "Select": [
  null,
  "Seleziona"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "Selezionare gli utenti con cui si desidera essere sincronizzati {{#strong}}{{host}}{{/strong}}"
 ],
 "Synchronize": [
  null,
  "Sincronizza"
 ],
 "Synchronize users": [
  null,
  "Sincronizzare gli utenti"
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  "L'indirizzo IP o il nome host non può contenere spazi bianchi."
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  "L'autenticità dell'host non {{#strong}}{{host}}{{/strong}} può essere stabilita. Sei sicuro di voler continuare a connetterti?"
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  "La chiave di {{#strong}}{{host}}{{/strong}} non corrisponde alla chiave precedentemente in uso. Se questa macchina non è stata sostituita di recente, è probabile che qualcuno stia cercando di attaccare la vostra connessione a questa macchina."
 ],
 "The machine is restarting": [
  null,
  "La macchina si sta riavviando"
 ],
 "The passwords do not match.": [
  null,
  "Le password non corrispondono."
 ],
 "There are currently no active pages": [
  null,
  "Attualmente non ci sono pagine attive"
 ],
 "This machine has already been added.": [
  null,
  "Questa macchina è già stata aggiunta."
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "Questa versione di cockpit-ws non supporta la connessione a un host con un utente alternativo o una porta"
 ],
 "Tip: Make your key password match your login password to automatically authenticate against other systems.": [
  null,
  "Suggerimento: Fai in modo che la password della tua chiave corrisponda alla password di accesso per l'autenticazione automatica contro altri sistemi."
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "Per provare un porto diverso è necessario aggiornare le ganasce della cabina di pilotaggio ad una versione più recente."
 ],
 "Too many files found": [
  null,
  "Troppi file trovati"
 ],
 "Troubleshoot": [
  null,
  "Risoluzione dei problemi"
 ],
 "Try to reconnect": [
  null,
  "Provare a riconnettersi"
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "Type a password": [
  null,
  "Digitare una password"
 ],
 "Unexpected error": [
  null,
  "Errore imprevisto"
 ],
 "Unknown Host Key": [
  null,
  "Chiave host sconosciuto"
 ],
 "Unlock Key": [
  null,
  "Sbloccare la chiave"
 ],
 "Update": [
  null,
  "Aggiorna"
 ],
 "Use the following keys to authenticate against other systems": [
  null,
  "Utilizzare i seguenti tasti per autenticarsi contro altri sistemi"
 ],
 "User name": [
  null,
  "Nome utente"
 ],
 "Using available credentials": [
  null,
  "Utilizzo delle credenziali disponibili"
 ],
 "Version": [
  null,
  "Versione"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Si è connessi{{#strong}}{{host}}{{/strong}}, ma per sincronizzare gli utenti è necessario un utente con privilegi di superutente."
 ],
 "active": [
  null,
  "attivo"
 ]
}));
