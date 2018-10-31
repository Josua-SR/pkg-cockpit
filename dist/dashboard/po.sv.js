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
 "1 day": [
  null,
  "1 dag"
 ],
 "1 hour": [
  null,
  "1 timma"
 ],
 "1 week": [
  null,
  "1 vecka"
 ],
 "5 minutes": [
  null,
  "5 minuter"
 ],
 "6 hours": [
  null,
  "6 timmar"
 ],
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Ingen kompatibel version av Cockpit är installerad på {{#strong}}{{host}}{{/strong}}."
 ],
 "Add": [
  null,
  "Lägg till"
 ],
 "Add Machine to Dashboard": [
  null,
  "Lägg till en maskin till panelen"
 ],
 "Address": [
  null,
  "Adress"
 ],
 "Advanced TCA": [
  null,
  "Avanserad TCA"
 ],
 "All In One": [
  null,
  "Allt-i-ett"
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
 "Avatar": [
  null,
  "Avatar"
 ],
 "Blade": [
  null,
  "Blad"
 ],
 "Blade enclosure": [
  null,
  "Bladhölje"
 ],
 "Bus Expansion Chassis": [
  null,
  "Bussexpansionschassi"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Can't load image": [
  null,
  "Kan inte ladda avbilden"
 ],
 "Cancel": [
  null,
  "Avbryt"
 ],
 "Checking for public keys": [
  null,
  "Kontrollerar om det finns publika nycklar"
 ],
 "Close": [
  null,
  "Stäng"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit kunde inte kontakta den angivna värden $0.  Se till att den har ssh körande på port $1, eller ange en annan port i adressen."
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
 "Compact PCI": [
  null,
  "Kompakt PCI"
 ],
 "Connect": [
  null,
  "Anslut"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Att ansluta till mer än {{ limit }} maskiner samtidigt stödjs inte."
 ],
 "Connection Error": [
  null,
  "Anslutningsfel"
 ],
 "Convertible": [
  null,
  "Konvertibel"
 ],
 "Could not contact {{host}}": [
  null,
  "Kunde inte kontakta {{host}}"
 ],
 "Dashboard": [
  null,
  "Panel"
 ],
 "Desktop": [
  null,
  "Skrivbord"
 ],
 "Detachable": [
  null,
  "Frånkopplingsbar"
 ],
 "Disk I/O": [
  null,
  "Disk-I/O"
 ],
 "Docking Station": [
  null,
  "Dockningsstation"
 ],
 "Edit Server": [
  null,
  "Redigera server"
 ],
 "Embedded PC": [
  null,
  "Inbäddad PC"
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
 "Expansion Chassis": [
  null,
  "Expansionschassin"
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
 "Go to now": [
  null,
  "Gå till nu"
 ],
 "Hand Held": [
  null,
  "Handhållen"
 ],
 "Host Name": [
  null,
  "Värdnamn"
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
 "IoT Gateway": [
  null,
  "IoT-gateway"
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
 "Laptop": [
  null,
  "Bärbar dator"
 ],
 "Leave blank to connect to this machine as the currently logged in user. If you enter a different username, that user will always be used when connecting to this machine.": [
  null,
  "Lämna tomt för att ansluta till denna maskin som den nu inloggade användaren.  Om du anger ett annat användarnamn kommer den användaren alltid användas när man ansluter till denna maskin."
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  "Lämna tomt för att ansluta till denna maskin som den nu inloggade användaren{{#default_user}} ({{default_user}}){{/default_user}}.  Om du anger ett annat användarnamn kommer den användaren alltid användas när man ansluter till denna maskin."
 ],
 "Log In": [
  null,
  "Logga in"
 ],
 "Log in to {{host}}": [
  null,
  "Logga in på {{host}}"
 ],
 "Login Password": [
  null,
  "Inloggningslösenord"
 ],
 "Lost connection. Trying to reconnect": [
  null,
  "Förlorade förbindelsen.  Försöker återansluta"
 ],
 "Low Profile Desktop": [
  null,
  "Lågprofilskrivbord"
 ],
 "Lunch Box": [
  null,
  "Lunchlåda"
 ],
 "Main Server Chassis": [
  null,
  "Huvudserverchassi"
 ],
 "Memory": [
  null,
  ""
 ],
 "Mini PC": [
  null,
  ""
 ],
 "Mini Tower": [
  null,
  ""
 ],
 "Multi-system Chassis": [
  null,
  ""
 ],
 "Network": [
  null,
  ""
 ],
 "New password was not accepted": [
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
 "Notebook": [
  null,
  ""
 ],
 "Off": [
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
 "Other": [
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
 "Peripheral Chassis": [
  null,
  ""
 ],
 "Pizza Box": [
  null,
  ""
 ],
 "Port": [
  null,
  ""
 ],
 "Portable": [
  null,
  ""
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
 "RAID Chassis": [
  null,
  ""
 ],
 "Rack Mount Chassis": [
  null,
  ""
 ],
 "Sealed-case PC": [
  null,
  ""
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  ""
 ],
 "Servers": [
  null,
  ""
 ],
 "Set": [
  null,
  ""
 ],
 "Space-saving Computer": [
  null,
  ""
 ],
 "Stick PC": [
  null,
  ""
 ],
 "Sub Chassis": [
  null,
  ""
 ],
 "Sub Notebook": [
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
 "Tablet": [
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
 "The passwords do not match.": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to manage servers": [
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
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  ""
 ],
 "Tower": [
  null,
  ""
 ],
 "Type a password": [
  null,
  ""
 ],
 "Unknown": [
  null,
  ""
 ],
 "Unknown Host Key": [
  null,
  ""
 ],
 "Update": [
  null,
  ""
 ],
 "User": [
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
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Du är ansluten till {{#strong}}{{host}}{{/strong}}, dock, för att synkronisera användare krävs en användare med superanvändarens rättigheter."
 ],
 "You are currently connected directly to this server. You cannot delete it.": [
  null,
  "Du är för närvarande ansluten direkt till denna server.  Du kan inte ta bort den."
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  "Du kan ta bort den tidigare lagrade nyckeln genom att köra följande kommando"
 ]
}));
