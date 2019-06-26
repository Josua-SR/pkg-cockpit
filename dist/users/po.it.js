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
 "Access": [
  null,
  "Accesso"
 ],
 "Account Expiration": [
  null,
  "Scadenza account"
 ],
 "Account not available or cannot be edited.": [
  null,
  "Account non disponibile o non modificabile."
 ],
 "Accounts": [
  null,
  "Account"
 ],
 "Add key": [
  null,
  "Aggiungi chiave"
 ],
 "Add public key": [
  null,
  "Aggiungere la chiave pubblica"
 ],
 "Adding key": [
  null,
  "Aggiunta di un tasto"
 ],
 "Authorized Public SSH Keys": [
  null,
  "Chiavi SSH pubbliche autorizzate"
 ],
 "Back to Accounts": [
  null,
  "Torna agli account"
 ],
 "Cancel": [
  null,
  "Annulla"
 ],
 "Change": [
  null,
  "Cambia"
 ],
 "Close": [
  null,
  "Chiudi"
 ],
 "Confirm": [
  null,
  "Conferma"
 ],
 "Confirm New Password": [
  null,
  "Conferma nuova password"
 ],
 "Container Administrator": [
  null,
  "Amministratore del contenitore"
 ],
 "Create": [
  null,
  "Crea"
 ],
 "Create New Account": [
  null,
  "Crea un nuovo account"
 ],
 "Delete": [
  null,
  "Cancella"
 ],
 "Delete $0": [
  null,
  "Cancellare $0"
 ],
 "Delete Files": [
  null,
  "Cancella file"
 ],
 "Error": [
  null,
  "Errore"
 ],
 "Error saving authorized keys: ": [
  null,
  "Errore nel salvare le chiavi autorizzate: "
 ],
 "Excellent password": [
  null,
  "Password eccellente"
 ],
 "Failed to change password": [
  null,
  "Impossibile cambiare la password"
 ],
 "Failed to load authorized keys.": [
  null,
  "Impossibile caricare le chiavi autorizzate."
 ],
 "Force Change": [
  null,
  "Cambio di forza"
 ],
 "Force password change": [
  null,
  "Forzare la modifica della password"
 ],
 "Full Name": [
  null,
  "Nome completo"
 ],
 "Image Builder": [
  null,
  "Costruttore di immagini"
 ],
 "Invalid expiration date": [
  null,
  "Data di scadenza non valida"
 ],
 "Invalid key": [
  null,
  "Chiave non valida"
 ],
 "Invalid number of days": [
  null,
  "Numero di giorni non valido"
 ],
 "Last Login": [
  null,
  "Ultimo accesso"
 ],
 "Local Accounts": [
  null,
  "Conti locali"
 ],
 "Lock Account": [
  null,
  "Blocca account"
 ],
 "Lock account on $0": [
  null,
  "Blocca il tuo account su $0"
 ],
 "Logged In": [
  null,
  "Loggato"
 ],
 "Never": [
  null,
  "Mai"
 ],
 "Never expire password": [
  null,
  "Non scadere mai la password"
 ],
 "Never lock account": [
  null,
  "Non chiudere mai il conto"
 ],
 "New Password": [
  null,
  "Nuova password"
 ],
 "New password was not accepted": [
  null,
  "Nuova password non è stata accettata"
 ],
 "No real name specified": [
  null,
  "Nessun nome reale specificato"
 ],
 "No user name specified": [
  null,
  "Nessun nome utente specificato"
 ],
 "Off": [
  null,
  "Off"
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
 "Password": [
  null,
  "Password"
 ],
 "Password Expiration": [
  null,
  "Scadenza della password"
 ],
 "Password is not acceptable": [
  null,
  "La password non è accettabile"
 ],
 "Password is too weak": [
  null,
  "La password è troppo debole"
 ],
 "Password must be changed": [
  null,
  "La password deve essere cambiata"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Incollare qui il contenuto del file della chiave SSH pubblica"
 ],
 "Please specify an expiration date": [
  null,
  "Si prega di specificare una data di scadenza"
 ],
 "Prompting via passwd timed out": [
  null,
  "Prompting via passwd timed out"
 ],
 "Require password change every $0 days": [
  null,
  "Richiedere la modifica della password ogni $0giorno"
 ],
 "Require password change on $0": [
  null,
  "Richiedi la modifica della password su $0"
 ],
 "Reset": [
  null,
  "Azzera"
 ],
 "Roles": [
  null,
  "Ruoli"
 ],
 "Server Administrator": [
  null,
  "Amministratore del server"
 ],
 "Set": [
  null,
  "Set"
 ],
 "Set Password": [
  null,
  "Imposta password"
 ],
 "Terminate Session": [
  null,
  "Terminare la sessione"
 ],
 "The account '$0' will be forced to change their password on next login": [
  null,
  "L'account '$0' ' ' sarà costretto a cambiare la propria password al prossimo login"
 ],
 "The key you provided was not valid.": [
  null,
  "La chiave fornita non era valida."
 ],
 "The passwords do not match": [
  null,
  "Le password non corrispondono"
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  "L'utente non <b>$0</b>è autorizzato a modificare gli account"
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  "Il nome utente può essere composto solo da lettere da a-z, cifre, punti, linee e sottolineature."
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Non ci sono chiavi pubbliche autorizzate per questo account."
 ],
 "This user name already exists": [
  null,
  "Questo nome utente esiste già"
 ],
 "Unable to delete root account": [
  null,
  "Impossibile cancellare l'account di root"
 ],
 "Unable to rename root account": [
  null,
  "Impossibile rinominare l'account di root"
 ],
 "Unexpected error": [
  null,
  "Errore imprevisto"
 ],
 "Unnamed": [
  null,
  "Senza nome"
 ],
 "User Name": [
  null,
  "Nome utente"
 ],
 "Validating key": [
  null,
  "Tasto di convalida"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "Non hai il permesso di visualizzare le chiavi pubbliche autorizzate per questo account."
 ],
 "You must wait longer to change your password": [
  null,
  "Devi aspettare più a lungo per cambiare la tua password"
 ],
 "translatable": [
  null,
  "translatable"
 ],
 "page-title\u0004Accounts": [
  null,
  "Account"
 ]
}));
