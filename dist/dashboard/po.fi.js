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
  "language": "fi",
  "x-generator": "Zanata 4.6.2"
 },
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
  "Lisää kone kojelaudalle"
 ],
 "Address": [
  null,
  "Osoite"
 ],
 "Advanced TCA": [
  null,
  ""
 ],
 "All In One": [
  null,
  ""
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
 "Blade": [
  null,
  ""
 ],
 "Blade enclosure": [
  null,
  ""
 ],
 "Bus Expansion Chassis": [
  null,
  ""
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
 "Compact PCI": [
  null,
  ""
 ],
 "Connect": [
  null,
  "Yhdistä"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Samanaikainen yhdistäminen useampaan kuin {{ limit }} koneeseen ei ole tuettu."
 ],
 "Connection Error": [
  null,
  "Yhteysvirhe"
 ],
 "Convertible": [
  null,
  ""
 ],
 "Could not contact {{host}}": [
  null,
  "Ei saatu yhteyttä kohteeseen {{host}}"
 ],
 "Dashboard": [
  null,
  "Kojelauta"
 ],
 "Desktop": [
  null,
  "Työpöytä"
 ],
 "Detachable": [
  null,
  ""
 ],
 "Disk I/O": [
  null,
  "Levyn I/O"
 ],
 "Docking Station": [
  null,
  ""
 ],
 "Edit Server": [
  null,
  "Muokkaa palvelinta"
 ],
 "Embedded PC": [
  null,
  ""
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
 "Expansion Chassis": [
  null,
  ""
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
 "Hand Held": [
  null,
  ""
 ],
 "Host Name": [
  null,
  "Koneen nimi"
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
 "IoT Gateway": [
  null,
  ""
 ],
 "Is sshd running on a different port?": [
  null,
  "Onko sshd käynnissä eri portissa?"
 ],
 "Kerberos Based SSO": [
  null,
  "Kerberos-pohjainen SSO"
 ],
 "Kerberos Ticket": [
  null,
  "Kerberos-tiketti"
 ],
 "Laptop": [
  null,
  "Kannettava"
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
  "Kirjaudu sisään"
 ],
 "Log in to {{host}}": [
  null,
  "Kirjaudu kohteeseen {{host}}"
 ],
 "Login Password": [
  null,
  "Kirjautumissalasana"
 ],
 "Lost connection. Trying to reconnect": [
  null,
  "Yhteys menetettiin. Yritetään yhdistää uudelleen"
 ],
 "Low Profile Desktop": [
  null,
  "Matalan tason työpöytä"
 ],
 "Lunch Box": [
  null,
  ""
 ],
 "Main Server Chassis": [
  null,
  ""
 ],
 "Memory": [
  null,
  "Muisti"
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
  "Verkko"
 ],
 "New password was not accepted": [
  null,
  "Uutta salasanaa ei hyväksytty"
 ],
 "No such file or directory": [
  null,
  ""
 ],
 "Not a valid private key": [
  null,
  "Ei kelvollinen yksityinen avain"
 ],
 "Notebook": [
  null,
  ""
 ],
 "Off": [
  null,
  "Pois"
 ],
 "Old password not accepted": [
  null,
  "Vanhaa salasanaa ei hyväksytty"
 ],
 "On": [
  null,
  "Päällä"
 ],
 "Other": [
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
  "Portti"
 ],
 "Portable": [
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
  "Julkinen avain"
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
  "Palvelimet"
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
  "Tikku-PC"
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
  "Synkronoi"
 ],
 "Synchronize users": [
  null,
  "Synkronoi käyttäjät"
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
  "Salasanat eivät täsmää."
 ],
 "The user <b>$0</b> is not permitted to manage servers": [
  null,
  "Käyttäjällä <b>$0</b> ei ole oikeutta hallita palvelimia"
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
 "Tower": [
  null,
  "Torni"
 ],
 "Type a password": [
  null,
  "Kirjoita salasana"
 ],
 "Unknown": [
  null,
  "Tuntematon"
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
  "Olet tällä hetkellä suoraan yhteydessä tähän palvelimeen. Et voi poistaa sitä."
 ]
}));
