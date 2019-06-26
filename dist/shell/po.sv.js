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
  "Nytt lösenord"
 ],
 "New password was not accepted": [
  null,
  "Det nya lösenordet godtogs inte"
 ],
 "No matching files found": [
  null,
  "Inga matchande filer hittade"
 ],
 "No such file or directory": [
  null,
  "Filen eller katalogen finns inte"
 ],
 "Not a valid private key": [
  null,
  "Inte en giltig privat nyckel"
 ],
 "Off": [
  null,
  "Av"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Old Password": [
  null,
  "Gammalt lösenord"
 ],
 "Old password not accepted": [
  null,
  "Det gamla lösenordet accepterades inte"
 ],
 "On": [
  null,
  "På"
 ],
 "Ooops!": [
  null,
  "Hoppsan!"
 ],
 "Password": [
  null,
  "Lösenord"
 ],
 "Password not accepted": [
  null,
  "Lösenordet accepterades inte"
 ],
 "Password not usable for privileged tasks or to connect to other machines": [
  null,
  "Lösenordet är inte användbart för priviligerade uppgifter eller för att ansluta till andra maskiner"
 ],
 "Path to file": [
  null,
  "Sökväg till filen"
 ],
 "Port": [
  null,
  "Port"
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
  "Återanvänd mitt lösenord för priviligierade uppgifter och för att ansluta till andra maskiner"
 ],
 "Select": [
  null,
  "Välj"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "Välj användaren som du vill skall synkorniseras med {{#strong}}{{host}}{{/strong}}"
 ],
 "Synchronize": [
  null,
  "Synkronisera"
 ],
 "Synchronize users": [
  null,
  "Synkronisera användare"
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  "IP-adressen och värdnamnet får inte innehålla blanktecken."
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  "Autenticiteten hos värden {{#strong}}{{host}}{{/strong}} kan inte fastställas.  Är du säker på att du vill fortsätta ansluta?"
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  "Nyckeln för {{#strong}}{{host}}{{/strong}} stämmer inte med den tidigare använda nyckeln.  Om inte denna maskin ersattes nyligen är det troligt att någon försöker attackera din förbindelse till denna maskin."
 ],
 "The machine is restarting": [
  null,
  "Maskinen startar om"
 ],
 "The passwords do not match.": [
  null,
  "Lösenorden stämmer inte överens."
 ],
 "There are currently no active pages": [
  null,
  "Det finns för närvarande inga aktiva sidor"
 ],
 "This machine has already been added.": [
  null,
  "Denna maskin har redan lagts till."
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "Denna version av cockpit-ws stödjer inte att ansluta till en värd med en alternativ användare eller port"
 ],
 "Tip: Make your key password match your login password to automatically authenticate against other systems.": [
  null,
  "Tips: gör så att ditt nyckellösenord stämmer med ditt inloggningslösenord för att automatiskt autentisera mot andra system."
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "För att använda en annan port behöver du uppgradera cockpit-ws till en nyare version."
 ],
 "Too many files found": [
  null,
  "För många filer hittade"
 ],
 "Troubleshoot": [
  null,
  "Felsök"
 ],
 "Try to reconnect": [
  null,
  "Försök att återansluta"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "Type a password": [
  null,
  "Skriv ett lösenord"
 ],
 "Unexpected error": [
  null,
  "Oväntat fel"
 ],
 "Unknown Host Key": [
  null,
  "Okänd värdnyckel"
 ],
 "Unlock Key": [
  null,
  "Lås upp nyckeln"
 ],
 "Update": [
  null,
  "Uppdatera"
 ],
 "Use the following keys to authenticate against other systems": [
  null,
  "Använd följande nycklar för att autentisera mot andra system"
 ],
 "User name": [
  null,
  "Användarnamn"
 ],
 "Using available credentials": [
  null,
  "Använder tillgängliga kreditiv"
 ],
 "Version": [
  null,
  "Version"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Du är ansluten till {{#strong}}{{host}}{{/strong}}, dock, för att synkronisera användare krävs en användare med superanvändarens rättigheter."
 ],
 "active": [
  null,
  "aktiv"
 ]
}));
