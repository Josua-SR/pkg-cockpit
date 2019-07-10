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
 "$0 occurrence": [
  "$1 occurrences",
  "$0 occorrenza",
  "$1 fenomeni"
 ],
 "Apply this solution": [
  null,
  "Applicare questa soluzione"
 ],
 "Applying solution...": [
  null,
  "Applicazione della soluzione....."
 ],
 "Audit log": [
  null,
  "Log audit"
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  "Collegamento al demone SETroubleshoot....."
 ],
 "Enforce policy:": [
  null,
  "Applicare la politica:"
 ],
 "Error while deleting alert: $0": [
  null,
  "Errore durante l'eliminazione dell'avviso: $0"
 ],
 "Error while setting SELinux mode: '$0'": [
  null,
  "Errore durante l'impostazione del modo SELinux: ' ' ' '"
 ],
 "Failed to delete alert: $0": [
  null,
  "Non è riuscito a cancellare l'avviso: $0"
 ],
 "Install setroubleshoot-server to troubleshoot SELinux events.": [
  null,
  "Installare setroubleshoot-server per la risoluzione dei problemi degli eventi SELinux."
 ],
 "No SELinux alerts.": [
  null,
  "Nessun allarme SELinux."
 ],
 "Not connected": [
  null,
  "Non connesso"
 ],
 "Occurred $0": [
  null,
  "Si è verificato $0"
 ],
 "Occurred between $0 and $1": [
  null,
  "Si è verificato tra $0 e $1"
 ],
 "SELinux Access Control Errors": [
  null,
  "Errori del controllo accessi SELinux"
 ],
 "SELinux Policy": [
  null,
  "Politica SELinux"
 ],
 "SELinux Troubleshoot": [
  null,
  "Risoluzione dei problemi di SELinux"
 ],
 "SELinux is disabled on the system": [
  null,
  "SELinux è disabilitato sul sistema"
 ],
 "SELinux is disabled on the system.": [
  null,
  "SELinux è disabilitato sul sistema."
 ],
 "SELinux system status is unknown.": [
  null,
  "Lo stato del sistema SELinux è sconosciuto."
 ],
 "Setting deviates from the configured state and will revert on the next boot.": [
  null,
  "L'impostazione devia dallo stato configurato e ritornerà al prossimo avvio."
 ],
 "Solution applied successfully": [
  null,
  "Soluzione applicata con successo"
 ],
 "Solution failed": [
  null,
  "Soluzione fallita"
 ],
 "Solutions": [
  null,
  "Soluzioni"
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  "Lo stato configurato è sconosciuto, potrebbe cambiare al prossimo avvio."
 ],
 "Unable to apply this solution automatically": [
  null,
  "Impossibile applicare automaticamente questa soluzione"
 ],
 "Unable to get alert details.": [
  null,
  "Impossibile ottenere i dettagli dell'allarme."
 ],
 "Unable to get alert: $0": [
  null,
  "Incapace di stare all'erta: $0"
 ],
 "Unable to run fix: %0": [
  null,
  "Impossibile eseguire la correzione: %0"
 ],
 "Unable to start setroubleshootd": [
  null,
  "Impossibile avviare il setroubleshootd"
 ],
 "Waiting for details...": [
  null,
  "Aspettando i dettagli....."
 ],
 "solution details": [
  null,
  "dettagli della soluzione"
 ]
}));
