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
  "language": "sv",
  "x-generator": "Zanata 4.6.2"
 },
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Ingen kompatibel version av Cockpit är installerad på {{#strong}}{{host}}{{/strong}}."
 ],
 "About Cockpit": [
  null,
  "Om Cockpit"
 ],
 "Account Settings": [
  null,
  "Kontoinställningar"
 ],
 "Active Pages": [
  null,
  "Aktiva sidor"
 ],
 "Add": [
  null,
  "Lägg till"
 ],
 "Add Machine to Dashboard": [
  null,
  "Lägg till en maskin till panelen"
 ],
 "Add key": [
  null,
  "Lägg till nyckel"
 ],
 "Address": [
  null,
  "Adress"
 ],
 "Authentication": [
  null,
  "Autentisering"
 ],
 "Authentication Failed": [
  null,
  "Autentisering misslyckades"
 ],
 "Available": [
  null,
  "Tillgängliga"
 ],
 "Cancel": [
  null,
  "Avbryt"
 ],
 "Cannot connect to an unknown machine": [
  null,
  "Kan inte ansluta till en okänd maskin"
 ],
 "Change Password": [
  null,
  "Ändra lösenord"
 ],
 "Checking for public keys": [
  null,
  "Kontrollerar om det finns publika nycklar"
 ],
 "Choose the language to be used in the application": [
  null,
  "Välj språk som skall användas i programmet"
 ],
 "Close": [
  null,
  "Stäng"
 ],
 "Close Selected Pages": [
  null,
  "Stäng valda sidor"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit kunde inte kontakta den angivna värden $0.  Se till att den har ssh körande på port $1, eller ange en annan port i adressen."
 ],
 "Cockpit had an unexpected internal error. <br/><br/>You can try restarting Cockpit by pressing refresh in your browser. The javascript console contains details about this error (<b>Ctrl-Shift-J</b> in most browsers).": [
  null,
  "Cockpit fick ett oväntat internt fel.  <br/><br/>Du kan försöka starta om Cockpit genom att trycka ladda om i din webbläsare.  Javaskriptkosolen innehåller detaljer om detta fel (<b>Ctrl-Shift-J</b> i de flesta webbläsare)."
 ],
 "Cockpit is an interactive Linux server admin interface.": [
  null,
  "Cockpit är ett interaktivt administratörsgränssnitt för Linuxservrar."
 ],
 "Cockpit is not installed": [
  null,
  "Cockpit är inte installerat"
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit kunde inte kontakta {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  "Cockpit kunde inte logga in på {{#strong}}{{host}}{{/strong}}. {{#can_sync}}Du kan vilja försöka att {{#sync_link}}synkronisera användare{{/sync_link}}.{{/can_sync}}  För fler autentiseringsalternativ och hjälp med felsökning, uppgradera cockpit-ws till en nyare version."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit kunde inte logga in på {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  "Cockpit kunde inte logga in på {{#strong}}{{host}}{{/strong}}.  För att använda denna maskin med cockpit behöver du aktivera en av följande autentiseringsmetoder i sshd-konfigurationen på {{#strong}}{{host}}{{/strong}}:"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  "Cockpit kunde inte logga in på {{#strong}}{{host}}{{/strong}}. Du kan ändra dina autentiseringskreditiv nedan.  {{#can_sync}}Du kanske föredraratt {{#sync_link}}synkronisera konton och lösenord{{/sync_link}}.{{/can_sync}}"
 ],
 "Color": [
  null,
  "Färg"
 ],
 "Comment": [
  null,
  "Kommentar"
 ],
 "Confirm": [
  null,
  "Bekräfta"
 ],
 "Connect": [
  null,
  "Anslut"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Att ansluta till mer än {{ limit }} maskiner samtidigt stödjs inte."
 ],
 "Connecting to the machine": [
  null,
  "Ansluter till maskinen"
 ],
 "Could not contact {{host}}": [
  null,
  "Kunde inte kontakta {{host}}"
 ],
 "Couldn't connect to the machine": [
  null,
  "Kunde inte ansluta till maskinen"
 ],
 "Details": [
  null,
  "Detaljer"
 ],
 "Disconnected": [
  null,
  "Frånkopplad"
 ],
 "Display Language": [
  null,
  "Visningsspråk"
 ],
 "Enter IP address or host name": [
  null,
  "Ange en IP-adress eller ett värdnamn"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  "Att ange ett annat lösenord här innebär att du kommer behöva skriva in det igen varje gång du återansluter till denna maskin"
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "Fel när användare lästes in: {{perm_failed}}"
 ],
 "Failed to add machine: $0": [
  null,
  "Misslyckades att lägga till en maskin: $0"
 ],
 "Failed to change password": [
  null,
  "Misslyckades att ändra lösenord"
 ],
 "Failed to edit machine: $0": [
  null,
  "Misslyckades att redigera en makin: $0"
 ],
 "Fingerprint": [
  null,
  "Fingeravtryck"
 ],
 "Host": [
  null,
  "Värd"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  "För att synkronisera användare behöver du logga in på {{#strong}}{{host}}{{/strong}}."
 ],
 "Incorrect Host Key": [
  null,
  "Felaktig värdnyckel"
 ],
 "Invalid file permissions": [
  null,
  "Felaktiga filrättigheter"
 ],
 "Is sshd running on a different port?": [
  null,
  "Kör sshd på en annan port?"
 ],
 "Kerberos Based SSO": [
  null,
  "Kerberos-baserad SSO"
 ],
 "Kerberos Ticket": [
  null,
  "Kerberosbiljett"
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "Lämna tomt för att ansluta till denna maskin som den nu inloggade användaren{{#default_user}} ({{default_user}}){{/default_user}}.  Om du anger ett annat användarnamn kommer den användaren alltid användas när man ansluter till denna maskin."
 ],
 "Licensed under:": [
  null,
  "Licensierad under:"
 ],
 "Log In": [
  null,
  "Logga in"
 ],
 "Log Out": [
  null,
  "Logga ut"
 ],
 "Log in again": [
  null,
  "Logga in igen"
 ],
 "Log in to {{host}}": [
  null,
  "Logga in på {{host}}"
 ],
 "Login Password": [
  null,
  "Inloggningslösenord"
 ],
 "Login has escalated admin privileges": [
  null,
  "Inloggningen har upphöjda administratörsprivilegier"
 ],
 "Machines": [
  null,
  "Maskiner"
 ],
 "New Password": [
  null,
  ""
 ],
 "New password was not accepted": [
  null,
  ""
 ],
 "No matching files found": [
  null,
  ""
 ],
 "No such file or directory": [
  null,
  ""
 ],
 "Not a valid private key": [
  null,
  ""
 ],
 "Off": [
  null,
  ""
 ],
 "Ok": [
  null,
  ""
 ],
 "Old Password": [
  null,
  ""
 ],
 "Old password not accepted": [
  null,
  ""
 ],
 "On": [
  null,
  ""
 ],
 "Ooops!": [
  null,
  ""
 ],
 "Password": [
  null,
  ""
 ],
 "Password not accepted": [
  null,
  ""
 ],
 "Password not usable for privileged tasks or to connect to other machines": [
  null,
  ""
 ],
 "Path to file": [
  null,
  ""
 ],
 "Port": [
  null,
  ""
 ],
 "Privileged": [
  null,
  "Priviligierad"
 ],
 "Project website": [
  null,
  "Projektwebbsajt"
 ],
 "Prompting via ssh-add timed out": [
  null,
  "Tidsgränsen överskreds vid fråga via ssh-add"
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  "Tidsgränsen överskreds vid fråga via ssh-keygen"
 ],
 "Public Key": [
  null,
  "Publik nyckel"
 ],
 "Reconnect": [
  null,
  "Återanslut"
 ],
 "Reuse my password for privileged tasks and to connect to other machines": [
  null,
  ""
 ],
 "Select": [
  null,
  ""
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  ""
 ],
 "Synchronize": [
  null,
  ""
 ],
 "Synchronize users": [
  null,
  ""
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  ""
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  ""
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  ""
 ],
 "The machine is restarting": [
  null,
  ""
 ],
 "The passwords do not match.": [
  null,
  ""
 ],
 "There are currently no active pages": [
  null,
  ""
 ],
 "This machine has already been added.": [
  null,
  ""
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  ""
 ],
 "Tip: Make your key password match your login password to automatically authenticate against other systems.": [
  null,
  ""
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  ""
 ],
 "Too many files found": [
  null,
  ""
 ],
 "Troubleshoot": [
  null,
  ""
 ],
 "Try to reconnect": [
  null,
  "Försök att återansluta"
 ],
 "Type": [
  null,
  ""
 ],
 "Type a password": [
  null,
  ""
 ],
 "Unexpected error": [
  null,
  ""
 ],
 "Unknown Host Key": [
  null,
  ""
 ],
 "Unlock Key": [
  null,
  ""
 ],
 "Update": [
  null,
  ""
 ],
 "Use the following keys to authenticate against other systems": [
  null,
  ""
 ],
 "User name": [
  null,
  ""
 ],
 "Using available credentials": [
  null,
  ""
 ],
 "Version": [
  null,
  ""
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Du är ansluten till {{#strong}}{{host}}{{/strong}}, dock, för att synkronisera användare krävs en användare med superanvändarens rättigheter."
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  "Du kan ta bort den tidigare lagrade nyckeln genom att köra följande kommando"
 ],
 "active": [
  null,
  ""
 ]
}));
