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
 "$0 Package": [
  "$0 Packages",
  "",
  ""
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 non è disponibile in nessun deposito."
 ],
 "$0 update": [
  "$0 updates",
  "$0 attualizzazione",
  "$0 aggiornamenti"
 ],
 "$0 will be installed.": [
  null,
  "$0 sarà installato."
 ],
 "$1 security fix": [
  "$1 security fixes",
  "$1 fissaggio di sicurezza",
  "$1 correzioni di sicurezza"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  "comprese le correzioni di $1sicurezza",
  "comprese le correzioni di $1sicurezza"
 ],
 "Additional packages:": [
  null,
  "Pacchetti aggiuntivi:"
 ],
 "Apply all updates": [
  null,
  "Applicare tutti gli aggiornamenti"
 ],
 "Apply security updates": [
  null,
  "Applicare gli aggiornamenti di sicurezza"
 ],
 "Applying updates": [
  null,
  "Applicazione degli aggiornamenti"
 ],
 "Applying updates failed": [
  null,
  "Applicazione degli aggiornamenti non riuscita"
 ],
 "Automatic Updates": [
  null,
  "Aggiornamenti automatici"
 ],
 "Available Updates": [
  null,
  "Aggiornamenti disponibili"
 ],
 "Bugs:": [
  null,
  "Bug:"
 ],
 "Cancel": [
  null,
  "Annulla"
 ],
 "Check for Updates": [
  null,
  "Controlla gli aggiornamenti"
 ],
 "Checking installed software": [
  null,
  "Verifica del software installato"
 ],
 "Details": [
  null,
  "Dettagli"
 ],
 "Downloaded": [
  null,
  "Scaricato"
 ],
 "Downloading": [
  null,
  "Download in corso"
 ],
 "Downloading $0": [
  null,
  "Download di $0"
 ],
 "Errata:": [
  null,
  "Errata:"
 ],
 "Fridays": [
  null,
  ""
 ],
 "Ignore": [
  null,
  "Ignora"
 ],
 "Initializing...": [
  null,
  "Inizializzazione....."
 ],
 "Install": [
  null,
  "Installa"
 ],
 "Install All Updates": [
  null,
  "Installa tutti gli aggiornamenti"
 ],
 "Install Security Updates": [
  null,
  "Installa gli aggiornamenti di sicurezza"
 ],
 "Install Software": [
  null,
  "Installare il software"
 ],
 "Installed": [
  null,
  "Installato"
 ],
 "Installing": [
  null,
  "Installazione in corso"
 ],
 "Installing $0": [
  null,
  "Installazione di $0"
 ],
 "Last checked: $0 ago": [
  null,
  "Ultimo controllo: $0■fa"
 ],
 "Loading available updates failed": [
  null,
  "Caricamento degli aggiornamenti disponibili non riuscito"
 ],
 "Loading available updates, please wait...": [
  null,
  "Caricamento degli aggiornamenti disponibili, attendere....."
 ],
 "Mondays": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nome"
 ],
 "No updates pending": [
  null,
  "Nessun aggiornamento in attesa"
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
 "Package information": [
  null,
  "Informazioni sul pacchetto"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit si è interrotto"
 ],
 "PackageKit is not installed": [
  null,
  "PackageKit non è installato"
 ],
 "PackageKit reported error code $0": [
  null,
  "Codice di errore segnalato da PackageKit $0"
 ],
 "Refreshing package information": [
  null,
  "Informazioni sul pacchetto rinfrescante"
 ],
 "Register…": [
  null,
  "Registrati...."
 ],
 "Removals:": [
  null,
  "Traslochi:"
 ],
 "Removing $0": [
  null,
  "Rimozione $0"
 ],
 "Restart Now": [
  null,
  "Riavvia ora"
 ],
 "Restart Recommended": [
  null,
  "Riavvio Raccomandato"
 ],
 "Restarting": [
  null,
  "Riavvio"
 ],
 "Saturdays": [
  null,
  ""
 ],
 "Set up": [
  null,
  "Configurare"
 ],
 "Setting up": [
  null,
  "Impostazione"
 ],
 "Severity": [
  null,
  "Severità"
 ],
 "Severity:": [
  null,
  "Severità:"
 ],
 "Software Updates": [
  null,
  "Aggiornamenti software"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  "Qualche altro programma sta attualmente utilizzando il gestore di pacchetti, si prega di attendere....."
 ],
 "Sundays": [
  null,
  ""
 ],
 "System is up to date": [
  null,
  "Il sistema è aggiornato"
 ],
 "This system is not registered": [
  null,
  "Questo sistema non è registrato"
 ],
 "This web console will be updated.": [
  null,
  "Questa console web sarà aggiornata."
 ],
 "Thursdays": [
  null,
  ""
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  "Per ottenere gli aggiornamenti software, questo sistema deve essere registrato con Red Hat, utilizzando il portale clienti Red Hat o un server locale in abbonamento."
 ],
 "Total size: $0": [
  null,
  "Dimensione totale: $0"
 ],
 "Tuesdays": [
  null,
  ""
 ],
 "Update History": [
  null,
  "Cronologia degli aggiornamenti"
 ],
 "Update Log": [
  null,
  "Log aggiornamenti"
 ],
 "Updated": [
  null,
  "Aggiornato"
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  "I pacchetti aggiornati possono richiedere un riavvio per avere effetto."
 ],
 "Updating": [
  null,
  "Aggiornamento"
 ],
 "Verified": [
  null,
  "Verificato"
 ],
 "Verifying": [
  null,
  "Verifica"
 ],
 "Version": [
  null,
  "Versione"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "In attesa che finiscano le altre operazioni di gestione del software"
 ],
 "Wednesdays": [
  null,
  ""
 ],
 "Your browser will disconnect, but this does not affect the update process. You can reconnect in a few moments to continue watching the progress.": [
  null,
  "Il tuo browser si scollegherà, ma questo non influisce sul processo di aggiornamento. È possibile riconnettersi in pochi istanti per continuare a guardare i progressi."
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  "Il server chiuderà presto la connessione. È possibile riconnettersi dopo che è stato riavviato."
 ],
 "and restart the machine automatically.": [
  null,
  "e riavviare automaticamente la macchina."
 ],
 "at": [
  null,
  "a"
 ],
 "bug fix": [
  null,
  "bug fix"
 ],
 "enhancement": [
  null,
  "miglioramento"
 ],
 "every day": [
  null,
  "quotidianamente"
 ],
 "security": [
  null,
  "sicurezza"
 ],
 "undefined": [
  null,
  "non definito"
 ]
}));
