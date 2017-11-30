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
 "$0 day": [
  "$0 days",
  "$0 päivä",
  "$0 päivää"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 tunti",
  "$0 tuntia"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minuutti",
  "$0 minuuttia"
 ],
 "$0 month": [
  "$0 months",
  "$0 kuukausi",
  "$0 kuukautta"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 viikko",
  "$0 viikkoa"
 ],
 "$0 year": [
  "$0 years",
  "$0 vuosi",
  "$0 vuotta"
 ],
 "1 day": [
  null,
  "1 päivä"
 ],
 "1 hour": [
  null,
  "1 tunti"
 ],
 "1 week": [
  null,
  "1 viikko"
 ],
 "5 minutes": [
  null,
  "5 minuuttia"
 ],
 "6 hours": [
  null,
  "6 tuntia"
 ],
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Yhteensopivaa versiota Cockpitistä ei ole asennettu kohteessa {{#strong}}{{host}}{{/strong}}."
 ],
 "Add": [
  null,
  "Lisää"
 ],
 "Add Machine to Dashboard": [
  null,
  "Lisää Kone Kojelaudalle"
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
 "Avatar": [
  null,
  "Avatar"
 ],
 "CPU": [
  null,
  "Prosessori"
 ],
 "Can't load image": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Peru"
 ],
 "Checking for public keys": [
  null,
  "Etsitään julkisia avaimia"
 ],
 "Close": [
  null,
  "Sulje"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit ei saanut yhteyttä hostiin $0. Varmista, että sillä on ssh toiminnassa portissa $1, tai määrittele toinen portti osoitteessa."
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
 "Connect": [
  null,
  "Yhdistä"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Samanaikainen yhdistäminen useampaan kuin {{ limit }} koneeseen ei ole tuettu."
 ],
 "Could not contact {{host}}": [
  null,
  "Ei saatu yhteyttä kohteeseen {{host}}"
 ],
 "Dashboard": [
  null,
  "Kojelauta"
 ],
 "Disk I/O": [
  null,
  "Levyn I/O"
 ],
 "Edit Server": [
  null,
  "Muokkaa Palvelinta"
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
 "Go to now": [
  null,
  "Mene nyt"
 ],
 "Host Name": [
  null,
  "Koneen Nimi"
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
 "Leave blank to connect to this machine as the currently logged in user. If you enter a different username, that user will always be used when connecting to this machine.": [
  null,
  "Jätä tyhjäksi yhdistääksesi tähän koneeseen nykyisenä käyttäjänä. Jos annat eri käyttäjänimen, sitä tullaan aina käyttämään yhdistettäessä tähän koneeseen."
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  ""
 ],
 "Log In": [
  null,
  ""
 ],
 "Log in to {{host}}": [
  null,
  ""
 ],
 "Login Password": [
  null,
  ""
 ],
 "Lost connection. Trying to reconnect": [
  null,
  ""
 ],
 "Memory": [
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
 "Password": [
  null,
  ""
 ],
 "Password not accepted": [
  null,
  ""
 ],
 "Port": [
  null,
  ""
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
  "Tämä kone on jo lisätty."
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  ""
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  "Kokeillaksesi toista porttia sinun tulee päivittää cockpit-ws uudempaan versioon."
 ],
 "Type a password": [
  null,
  "Kirjoita salasana"
 ],
 "Unknown Host Key": [
  null,
  ""
 ],
 "Update": [
  null,
  "Päivitä"
 ],
 "User": [
  null,
  "Käyttäjä"
 ],
 "User name": [
  null,
  "Käyttäjätunnus"
 ],
 "Using available credentials": [
  null,
  "Käytetään saatavilla olevia käyttäjävaltuuksia"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Olet yhdistetty kohteeseen {{#strong}}{{host}}{{/strong}}, mutta synkronoidaksesi käyttäjiä vaaditaan yksi käyttäjä superuser-oikeuksilla."
 ],
 "You are currently connected directly to this server. You cannot delete it.": [
  null,
  "Olet tällä hetkellä suoraan yhteydessä tähän serveriin. Et voi poistaa sitä."
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  "Voit poistaa aiemmin tallennetun avaimen ajamalla seuraavan komennon"
 ]
}));
