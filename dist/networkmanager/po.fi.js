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
  "ARP -Monitorointi"
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
  "Aktiivinen Varmuuskopio"
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
  "Lisää Silta"
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
  "<b>$0</b>  lisääminen katkaisee yhteyden serverille, jolloin hallintakäyttöliittymä ei ole saatavilla."
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
  ""
 ],
 "Bond Settings": [
  null,
  ""
 ],
 "Bridge": [
  null,
  "Silta"
 ],
 "Bridge Port Settings": [
  null,
  "Sillan Porttiasetukset"
 ],
 "Bridge Settings": [
  null,
  "Sillan Asetukset"
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
  "Asetuksien vaihtaminen katkaisee yhteyden serverille, jolloin hallintakäyttöliittymä ei ole saatavilla."
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
  "Tämän VLANin luominen katkaisee yhteyden serverille, jolloin hallintakäyttöliittymä ei ole saatavilla."
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
  "<b>$0</b>  poistaminen katkaisee yhteyden serverille, jolloin hallintakäyttöliittymä ei ole saatavilla."
 ],
 "Disabled": [
  null,
  "Ei käytössä"
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
 "Forward delay $forward_delay": [
  null,
  ""
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
  "IP-Asetukset"
 ],
 "IPv4": [
  null,
  "IPv4"
 ],
 "IPv4 Settings": [
  null,
  "IPv4-Asetukset"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "IPv6-Asetukset"
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
  "LACP-Avain"
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
  ""
 ],
 "MAC": [
  null,
  ""
 ],
 "MII (Recommended)": [
  null,
  ""
 ],
 "MTU": [
  null,
  ""
 ],
 "MTU must be a positive number": [
  null,
  ""
 ],
 "Manual": [
  null,
  ""
 ],
 "Master": [
  null,
  ""
 ],
 "Maximum message age $max_age": [
  null,
  ""
 ],
 "Members": [
  null,
  ""
 ],
 "Mode": [
  null,
  ""
 ],
 "Monitoring Interval": [
  null,
  ""
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
  ""
 ],
 "Networking": [
  null,
  ""
 ],
 "Networking Logs": [
  null,
  ""
 ],
 "No": [
  null,
  ""
 ],
 "No carrier": [
  null,
  ""
 ],
 "Not available": [
  null,
  ""
 ],
 "Off": [
  null,
  ""
 ],
 "On": [
  null,
  ""
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
  ""
 ],
 "Ping Target": [
  null,
  ""
 ],
 "Ports": [
  null,
  ""
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
  ""
 ],
 "Priority": [
  null,
  ""
 ],
 "Priority $priority": [
  null,
  ""
 ],
 "Random": [
  null,
  ""
 ],
 "Reboot": [
  null,
  ""
 ],
 "Receiving": [
  null,
  ""
 ],
 "Remove $0": [
  null,
  ""
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Restoring connection": [
  null,
  ""
 ],
 "Round Robin": [
  null,
  ""
 ],
 "Routes": [
  null,
  ""
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
  ""
 ],
 "Set to": [
  null,
  ""
 ],
 "Shared": [
  null,
  ""
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
 "Status": [
  null,
  ""
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
  ""
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  ""
 ],
 "This device cannot be managed here.": [
  null,
  "Tätä laitetta ei voida hallita täällä."
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
  ""
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
  "VLAN Asetukset"
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
  ""
 ]
}));
