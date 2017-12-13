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
  "language": "fi",
  "x-generator": "Zanata 3.9.6"
 },
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Yhteensopivaa versiota Cockpitistä ei ole asennettu kohteessa {{#strong}}{{host}}{{/strong}}."
 ],
 "About Cockpit": [
  null,
  "Lisää Cockpitistä"
 ],
 "Account Settings": [
  null,
  "Tilin Asetukset"
 ],
 "Active Pages": [
  null,
  ""
 ],
 "Add": [
  null,
  "Lisää"
 ],
 "Add Machine to Dashboard": [
  null,
  "Lisää Kone Kojelaudalle"
 ],
 "Add key": [
  null,
  "Lisää avain"
 ],
 "Address": [
  null,
  "Osoite"
 ],
 "Authentication": [
  null,
  "Tunnistautuminen"
 ],
 "Authentication Failed": [
  null,
  "Tunnistautuminen epäonnistui"
 ],
 "Available": [
  null,
  "Saatavilla"
 ],
 "Cancel": [
  null,
  "Peru"
 ],
 "Cannot connect to an unknown machine": [
  null,
  "Ei voida yhdistää tuntemattomaan koneeseen"
 ],
 "Change Password": [
  null,
  "Vaihda Salasana"
 ],
 "Checking for public keys": [
  null,
  "Etsitään julkisia avaimia"
 ],
 "Choose the language to be used in the application": [
  null,
  "Valitse ohjelmassa käytettävä kieli"
 ],
 "Close": [
  null,
  "Sulje"
 ],
 "Close Selected Pages": [
  null,
  ""
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit ei saanut yhteyttä hostiin $0. Varmista, että sillä on ssh toiminnassa portissa $1, tai määrittele toinen portti osoitteessa."
 ],
 "Cockpit had an unexpected internal error. <br/><br/>You can try restarting Cockpit by pressing refresh in your browser. The javascript console contains details about this error (<b>Ctrl-Shift-J</b> in most browsers).": [
  null,
  "Cockpitissä tapahtui odottamaton virhe. <br/><br/>Voit yrittää käynnistää Cockpitin uudelleen päivittämällä selaimesi sivun. Javascript-konsolissa on lisätietoja tästä virheestä (<b>Ctrl-Shift-J</b> useimmissa selaimissa)."
 ],
 "Cockpit is an interactive Linux server admin interface.": [
  null,
  "Cockpit on interaktiivinen Linux-palvelimen ylläpitäjän käyttöliittymä."
 ],
 "Cockpit is not installed": [
  null,
  "Cockpit ei ole asennettu"
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit ei saanut yhteyttä kohteeseen {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  "Cockpit ei pystynyt kirjautumaan kohteeseen {{#strong}}{{host}}{{/strong}}. {{#can_sync}}Haluat ehkä kokeilla {{#sync_link}}käyttäjien synkronointia{{/sync_link}}.{{/can_sync}} Lisää vaihtoehtoja todentamiseen ja tukea vianetsintään saat, kun päivität cockpit-ws uudempaan versioon."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Cockpit ei pystynyt kirjautumaan kohteeseen {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  "Cockpit ei pystynyt kirjautumaan kohteeseen {{#strong}}{{host}}{{/strong}}. Käyttääksesi tätä konetta Cockpitin kanssa sinun tulee ottaa käyttöön jokin seuraavista todentamismetodeista sshd-konfiguraatiossa kohteessa {{#strong}}{{host}}{{/strong}}:"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  "Cockpit ei pystynyt kirjautumaan kohteeseen {{#strong}}{{host}}{{/strong}}. Voit vaihtaa todentamiseen käyttämiäsi tunnuksi alla. {{#can_sync}}Haluat ehkä {{#sync_link}}synkronoida käyttäjätilit ja salasanat{{/sync_link}}.{{/can_sync}}"
 ],
 "Color": [
  null,
  "Väri"
 ],
 "Comment": [
  null,
  "Kommentti"
 ],
 "Confirm": [
  null,
  "Vahvista"
 ],
 "Connect": [
  null,
  "Yhdistä"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Samanaikainen yhdistäminen useampaan kuin {{ limit }} koneeseen ei ole tuettu."
 ],
 "Connecting to the machine": [
  null,
  "Yhdistetään koneeseen"
 ],
 "Could not contact {{host}}": [
  null,
  "Ei saatu yhteyttä kohteeseen {{host}}"
 ],
 "Couldn't connect to the machine": [
  null,
  "Ei saatu yhteyttä koneeseen"
 ],
 "Details": [
  null,
  "Yksityiskohdat"
 ],
 "Disconnected": [
  null,
  "Katkaistu"
 ],
 "Display Language": [
  null,
  "Näytä Kieli"
 ],
 "Enter IP address or host name": [
  null,
  "Anna IP-osoite tai host-nimi"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  "Erilaisen salasanan antaminen tässä tarkoittaa, että sinun tulee antaa salasana uudestaan joka kerta kun yhdistät uudelleen tähän koneeseen."
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "Virhe ladattaessa käyttäjiä: {{perm_failed}}"
 ],
 "Failed to add machine: $0": [
  null,
  "Ei voitu lisätä konetta: $0"
 ],
 "Failed to change password": [
  null,
  "Ei voitu vaihtaa salasanaa"
 ],
 "Failed to edit machine: $0": [
  null,
  "Ei voitu muokata konetta: $0"
 ],
 "Fingerprint": [
  null,
  "Sormenjälki"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Synkronoidaksesi käyttäjät, sinun tulee olla kirjautuneena kohteeseen {{#strong}}{{host}}{{/strong}}."
 ],
 "Incorrect Host Key": [
  null,
  "Väärä Host Avain"
 ],
 "Invalid file permissions": [
  null,
  "Virheelliset tiedosto-oikeudet"
 ],
 "Is sshd running on a different port?": [
  null,
  "Onko sshd käynnissä eri portissa?"
 ],
 "Kerberos Based SSO": [
  null,
  "Kerberos Based SSO"
 ],
 "Kerberos Ticket": [
  null,
  "Kerberos Ticket"
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  ""
 ],
 "Licensed under:": [
  null,
  ""
 ],
 "Lock to prevent privileged tasks": [
  null,
  ""
 ],
 "Locked": [
  null,
  "Lukitse"
 ],
 "Log In": [
  null,
  "Kirjaudu sisään"
 ],
 "Log Out": [
  null,
  "Kirjaudu ulos"
 ],
 "Log in again": [
  null,
  "Kirjaudu sisään uudelleen"
 ],
 "Log in to {{host}}": [
  null,
  ""
 ],
 "Login Password": [
  null,
  ""
 ],
 "Machines": [
  null,
  "Koneet"
 ],
 "New Password": [
  null,
  "Uusi salasana"
 ],
 "New password was not accepted": [
  null,
  "Uutta salasanaa ei hyväksytty"
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
  "Ei kelvollinen yksityinen avain"
 ],
 "Off": [
  null,
  ""
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Old Password": [
  null,
  "Vanha salasana"
 ],
 "Old password not accepted": [
  null,
  "Vanhaa salasanaa ei hyväksytty"
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
  "Salasana"
 ],
 "Password not accepted": [
  null,
  "Salasanaa ei hyväksytty"
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
  "Portti"
 ],
 "Privileged tasks not available": [
  null,
  ""
 ],
 "Project website": [
  null,
  "Projektin verkkosivusto"
 ],
 "Prompting via ssh-add timed out": [
  null,
  ""
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  ""
 ],
 "Public Key": [
  null,
  "Julkinen avain"
 ],
 "Reconnect": [
  null,
  ""
 ],
 "Reuse my password for privileged tasks and to connect to other machines": [
  null,
  ""
 ],
 "Select": [
  null,
  "Valitse"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  ""
 ],
 "Synchronize": [
  null,
  "Synkronoi"
 ],
 "Synchronize users": [
  null,
  "Synkronoi käyttäjät"
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
  "Kone käynnistyy uudelleen"
 ],
 "The passwords do not match.": [
  null,
  "Salasanat eivät täsmää."
 ],
 "There are currently no active pages": [
  null,
  ""
 ],
 "This machine has already been added.": [
  null,
  "Tämä kone on jo lisätty."
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  ""
 ],
 "Tip: Make your key password match your login password to automatically authenticate against other systems.": [
  null,
  "Vinkki: Luo avaimesi salasana vastaamaan käyttäjätunnuksesi salasanaa, jotta voit automaattisesti tunnistautua muita järjestelmiä kohden."
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "Kokeillaksesi toista porttia sinun tulee päivittää cockpit-ws uudempaan versioon."
 ],
 "Too many files found": [
  null,
  "Löytyi liian monta tiedostoa"
 ],
 "Troubleshoot": [
  null,
  "Vianetsintä"
 ],
 "Try to reconnect": [
  null,
  "Yritä yhdistää uudelleen"
 ],
 "Type": [
  null,
  "Tyyppi"
 ],
 "Type a password": [
  null,
  "Kirjoita salasana"
 ],
 "Unexpected error": [
  null,
  "Odottamaton virhe"
 ],
 "Unknown Host Key": [
  null,
  ""
 ],
 "Unlock Key": [
  null,
  "Avaa avain"
 ],
 "Unlocked": [
  null,
  ""
 ],
 "Update": [
  null,
  "Päivitä"
 ],
 "Use the following keys to authenticate against other systems": [
  null,
  "Käytä seuraavia avaimia todentamaan muita järjestelmiä kohden"
 ],
 "User name": [
  null,
  "Käyttäjätunnus"
 ],
 "Using available credentials": [
  null,
  "Käytetään saatavilla olevia käyttäjävaltuuksia"
 ],
 "Version": [
  null,
  "Versio"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Olet yhdistetty kohteeseen {{#strong}}{{host}}{{/strong}}, mutta synkronoidaksesi käyttäjiä vaaditaan yksi käyttäjä superuser-oikeuksilla."
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  "Voit poistaa aiemmin tallennetun avaimen ajamalla seuraavan komennon"
 ],
 "active": [
  null,
  ""
 ]
}));
