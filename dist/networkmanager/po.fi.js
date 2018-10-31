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
  "x-generator": "Zanata 4.6.2"
 },
 "$mtu": [
  null,
  "$mtu"
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
 "802.3ad": [
  null,
  "802.3ad"
 ],
 "802.3ad LACP": [
  null,
  "802.3ad LACP"
 ],
 "ARP": [
  null,
  "ARP"
 ],
 "ARP Monitoring": [
  null,
  "ARP-monitorointi"
 ],
 "ARP Ping": [
  null,
  "ARP Ping"
 ],
 "Active": [
  null,
  "Aktiivinen"
 ],
 "Active Backup": [
  null,
  "Aktiivinen varmuuskopio"
 ],
 "Adaptive load balancing": [
  null,
  "Mukautuva kuorman tasapainottaja (balance-alb)"
 ],
 "Adaptive transmit load balancing": [
  null,
  "Mukautuva lähtevän kuorman tasapainottaja (balance-tlb)"
 ],
 "Add $0": [
  null,
  "Lisää $0"
 ],
 "Add Bond": [
  null,
  ""
 ],
 "Add Bridge": [
  null,
  "Lisää silta"
 ],
 "Add Services": [
  null,
  "Lisää palveluja"
 ],
 "Add Services…": [
  null,
  "Lisää palveluja…"
 ],
 "Add Team": [
  null,
  "Lisää tiimi"
 ],
 "Add VLAN": [
  null,
  "Lisää VLAN"
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "<b>$0</b>  lisääminen katkaisee yhteyden palvelimeen, jolloin hallintakäyttöliittymä ei ole saatavilla."
 ],
 "Additional DNS $val": [
  null,
  "Uusi DNS $val"
 ],
 "Additional DNS Search Domains $val": [
  null,
  "Uusi DNS Search Domains $val"
 ],
 "Additional address $val": [
  null,
  "Uusi osoite $val"
 ],
 "Address $val": [
  null,
  "Osoite $val"
 ],
 "Addresses": [
  null,
  "Osoitteet"
 ],
 "Allowed Services": [
  null,
  "Sallitut palvelut"
 ],
 "Apply": [
  null,
  "Toteuta"
 ],
 "Authenticating": [
  null,
  "Tunnistaudutaan"
 ],
 "Automatic": [
  null,
  "Automaattinen"
 ],
 "Automatic (DHCP only)": [
  null,
  "Automaattinen (vain DHCP)"
 ],
 "Automatic (DHCP)": [
  null,
  "Automaattinen (DHCP)"
 ],
 "Balancer": [
  null,
  "Tasapainottaja"
 ],
 "Bond": [
  null,
  "Side"
 ],
 "Bond Settings": [
  null,
  "Sidosasetukset"
 ],
 "Bridge": [
  null,
  "Silta"
 ],
 "Bridge Port Settings": [
  null,
  "Sillan porttiasetukset"
 ],
 "Bridge Settings": [
  null,
  "Sillan asetukset"
 ],
 "Bridge port": [
  null,
  "Sillan portti"
 ],
 "Broadcast": [
  null,
  "Lähetys"
 ],
 "Broken configuration": [
  null,
  "Rikkinäinen asetus"
 ],
 "Cancel": [
  null,
  "Peru"
 ],
 "Carrier": [
  null,
  ""
 ],
 "Change the settings": [
  null,
  "Vaihda asetuksia"
 ],
 "Changing the settings will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Asetuksien vaihtaminen katkaisee yhteyden palvelimeen, jolloin hallintakäyttöliittymä ei ole saatavilla."
 ],
 "Checking IP": [
  null,
  "Tarkistetaan IP"
 ],
 "Close": [
  null,
  "Sulje"
 ],
 "Configure": [
  null,
  "Muokkaa asetuksia"
 ],
 "Configuring": [
  null,
  "Asetetaan"
 ],
 "Configuring IP": [
  null,
  "Asetetaan IP"
 ],
 "Connect automatically": [
  null,
  "Yhdistä automaattisesti"
 ],
 "Connection will be lost": [
  null,
  "Yhteys tulee katoamaan"
 ],
 "Create it": [
  null,
  "Luo se"
 ],
 "Creating this VLAN will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Tämän VLANin luominen katkaisee yhteyden palvelimeen, jolloin hallintakäyttöliittymä ei ole saatavilla."
 ],
 "Creating this bond will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Creating this bridge will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Tämän sillan luominen katkaisee yhteyden serverille, jolloin hallintakäyttöliittymä ei ole saatavilla."
 ],
 "Creating this team will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "DNS": [
  null,
  "DNS"
 ],
 "DNS $val": [
  null,
  "DNS $val"
 ],
 "DNS Search Domains": [
  null,
  "DNS Search Domainit"
 ],
 "DNS Search Domains $val": [
  null,
  "DNS Search Domainit $val"
 ],
 "Deactivating": [
  null,
  "Deaktivoidaan"
 ],
 "Delete": [
  null,
  "Poista"
 ],
 "Delete $0": [
  null,
  "Poista $0"
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Kohteen <b>$0</b>  poistaminen katkaisee yhteyden palvelimeen, jolloin hallintakäyttöliittymä ei ole saatavilla."
 ],
 "Details": [
  null,
  "Yksityiskohdat"
 ],
 "Disabled": [
  null,
  "Ei käytössä"
 ],
 "Enable Service": [
  null,
  ""
 ],
 "Ethernet MAC": [
  null,
  "Ethernet MAC"
 ],
 "Ethernet MTU": [
  null,
  "Ethernet MTU"
 ],
 "Ethtool": [
  null,
  "Ethtool"
 ],
 "Failed": [
  null,
  "Epäonnistui"
 ],
 "Filter Services": [
  null,
  "Suodata palveluja"
 ],
 "Firewall": [
  null,
  "Palomuuri"
 ],
 "Firewall is not available": [
  null,
  "Palomuuri ei ole saatavilla"
 ],
 "Forward delay $forward_delay": [
  null,
  "Edelleenohjaa viive $forward_delay"
 ],
 "General": [
  null,
  "Yleiset"
 ],
 "Go to now": [
  null,
  "Mene nyt"
 ],
 "Hair Pin mode": [
  null,
  "Hair Pin -tila"
 ],
 "Hairpin mode": [
  null,
  "Hairpin-tila"
 ],
 "Hello time $hello_time": [
  null,
  "Hello time $hello_time"
 ],
 "IP Address": [
  null,
  "IP-osoite"
 ],
 "IP Settings": [
  null,
  "IP-asetukset"
 ],
 "IPv4": [
  null,
  "IPv4"
 ],
 "IPv4 Settings": [
  null,
  "IPv4-asetukset"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "IPv6-asetukset"
 ],
 "Id $id": [
  null,
  "Id $id"
 ],
 "Ignore": [
  null,
  "Ohita"
 ],
 "Inactive": [
  null,
  "Epäaktiivinen"
 ],
 "Interfaces": [
  null,
  "Liitännät"
 ],
 "Invalid address $0": [
  null,
  "Virheellinen osoite $0"
 ],
 "Invalid metric $0": [
  null,
  "Virheellinen metriikka $0"
 ],
 "Invalid prefix $0": [
  null,
  "Virheellinen etuliite $0"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "Virheellinen etuliite tai verkkopeite $0"
 ],
 "Keep connection": [
  null,
  "Pidä yhteys"
 ],
 "LACP Key": [
  null,
  "LACP-avain"
 ],
 "Link Monitoring": [
  null,
  ""
 ],
 "Link Watch": [
  null,
  ""
 ],
 "Link down delay": [
  null,
  ""
 ],
 "Link local": [
  null,
  ""
 ],
 "Link up delay": [
  null,
  ""
 ],
 "Load Balancing": [
  null,
  "Kuorman tasapainotus"
 ],
 "MAC": [
  null,
  "MAC"
 ],
 "MII (Recommended)": [
  null,
  ""
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "MTU must be a positive number": [
  null,
  "MTU:n tulee olla positiivinen numero"
 ],
 "Manual": [
  null,
  ""
 ],
 "Master": [
  null,
  "Master"
 ],
 "Maximum message age $max_age": [
  null,
  ""
 ],
 "Members": [
  null,
  "Jäsenet"
 ],
 "Mode": [
  null,
  "Tila"
 ],
 "Monitoring Interval": [
  null,
  "Monitorointiväli"
 ],
 "Monitoring Targets": [
  null,
  ""
 ],
 "NSNA Ping": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nimi"
 ],
 "Network devices and graphs require NetworkManager.": [
  null,
  ""
 ],
 "NetworkManager is not running.": [
  null,
  ""
 ],
 "Networking": [
  null,
  "Verkko"
 ],
 "Networking Logs": [
  null,
  "Verkkolokit"
 ],
 "No": [
  null,
  ""
 ],
 "No carrier": [
  null,
  ""
 ],
 "No open ports": [
  null,
  "Ei avoimia portteja"
 ],
 "Not available": [
  null,
  ""
 ],
 "Off": [
  null,
  "Pois"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On": [
  null,
  "Päällä"
 ],
 "Parent": [
  null,
  ""
 ],
 "Parent $parent": [
  null,
  ""
 ],
 "Part of ": [
  null,
  ""
 ],
 "Passive": [
  null,
  ""
 ],
 "Path cost": [
  null,
  ""
 ],
 "Path cost $path_cost": [
  null,
  ""
 ],
 "Permanent": [
  null,
  ""
 ],
 "Ping Interval": [
  null,
  "Ping-väli"
 ],
 "Ping Target": [
  null,
  ""
 ],
 "Please install the $0 package": [
  null,
  ""
 ],
 "Ports": [
  null,
  "Portit"
 ],
 "Prefix length": [
  null,
  ""
 ],
 "Prefix length or Netmask": [
  null,
  ""
 ],
 "Preparing": [
  null,
  ""
 ],
 "Preserve": [
  null,
  ""
 ],
 "Primary": [
  null,
  "Ensisijainen"
 ],
 "Priority": [
  null,
  "Prioriteeetti"
 ],
 "Priority $priority": [
  null,
  "Prioriteetti $priority"
 ],
 "Random": [
  null,
  "Satunnainen"
 ],
 "Reboot": [
  null,
  "Käynnistä uudelleen"
 ],
 "Receiving": [
  null,
  "Vastaanotetaan"
 ],
 "Remove $0": [
  null,
  "Poista $0"
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Restoring connection": [
  null,
  "Palautetaan yhteys"
 ],
 "Round Robin": [
  null,
  ""
 ],
 "Routes": [
  null,
  "Reitit"
 ],
 "Runner": [
  null,
  ""
 ],
 "STP Forward delay": [
  null,
  ""
 ],
 "STP Hello time": [
  null,
  ""
 ],
 "STP Maximum message age": [
  null,
  ""
 ],
 "STP Priority": [
  null,
  ""
 ],
 "Sending": [
  null,
  "Lähetetään"
 ],
 "Service": [
  null,
  "Palvelu"
 ],
 "Set to": [
  null,
  ""
 ],
 "Shared": [
  null,
  "Jaettu"
 ],
 "Spanning Tree Protocol": [
  null,
  ""
 ],
 "Spanning Tree Protocol (STP)": [
  null,
  ""
 ],
 "Stable": [
  null,
  ""
 ],
 "Start Service": [
  null,
  ""
 ],
 "Status": [
  null,
  "Tila"
 ],
 "Sticky": [
  null,
  ""
 ],
 "Switch off $0": [
  null,
  ""
 ],
 "Switch on $0": [
  null,
  ""
 ],
 "Switching off <b>$0</b>  will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Switching off <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Switching on <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Team": [
  null,
  ""
 ],
 "Team Port": [
  null,
  ""
 ],
 "Team Port Settings": [
  null,
  ""
 ],
 "Team Settings": [
  null,
  ""
 ],
 "Testing connection": [
  null,
  "Testataan yhteyttä"
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  "Käyttäjällä <b>$0</b> ei ole oikeutta muokata verkkoasetuksia"
 ],
 "This device cannot be managed here.": [
  null,
  "Tätä laitetta ei voida hallita täällä."
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Odottamaton virhe"
 ],
 "Unknown": [
  null,
  "Tuntematon"
 ],
 "Unknown \"$0\"": [
  null,
  "Tuntematon \"$0\""
 ],
 "Unknown configuration": [
  null,
  "Tuntematon konfiguraatio"
 ],
 "Unmanaged Interfaces": [
  null,
  "Hallitsemattomat liitännät"
 ],
 "VLAN": [
  null,
  "VLAN"
 ],
 "VLAN Id": [
  null,
  "VLAN Id"
 ],
 "VLAN Settings": [
  null,
  "VLAN-asetukset"
 ],
 "Waiting": [
  null,
  "Odotetaan"
 ],
 "XOR": [
  null,
  "XOR"
 ],
 "Yes": [
  null,
  "Kyllä"
 ],
 "You are not authorized to modify the firewall.": [
  null,
  "Sinulla ei ole valtuuksia muokata palomuuria."
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 tavua binääridatasta]"
 ],
 "[binary data]": [
  null,
  "[binääridata]"
 ],
 "[no data]": [
  null,
  "[ei dataa]"
 ],
 "page-title\u0004Networking": [
  null,
  "Verkko"
 ]
}));
