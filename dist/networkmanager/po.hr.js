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
nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
return plural;
},
  "language": "hr",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 day": [
  "$0 days",
  "",
  "",
  ""
 ],
 "$0 hour": [
  "$0 hours",
  "",
  "",
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  "",
  "",
  ""
 ],
 "$0 month": [
  "$0 months",
  "",
  "",
  ""
 ],
 "$0 week": [
  "$0 weeks",
  "",
  "",
  ""
 ],
 "$0 year": [
  "$0 years",
  "",
  "",
  ""
 ],
 "$mtu": [
  null,
  ""
 ],
 "1 day": [
  null,
  "1 dan"
 ],
 "1 hour": [
  null,
  "1 sat"
 ],
 "1 week": [
  null,
  "1 tjedan"
 ],
 "5 minutes": [
  null,
  "5 minuta"
 ],
 "6 hours": [
  null,
  "6 sati"
 ],
 "802.3ad": [
  null,
  "802.3ad"
 ],
 "802.3ad LACP": [
  null,
  ""
 ],
 "ARP": [
  null,
  "ARP"
 ],
 "ARP Monitoring": [
  null,
  "ARP nadziranje"
 ],
 "ARP Ping": [
  null,
  ""
 ],
 "Active": [
  null,
  "Aktivno"
 ],
 "Active Backup": [
  null,
  ""
 ],
 "Adaptive load balancing": [
  null,
  ""
 ],
 "Adaptive transmit load balancing": [
  null,
  ""
 ],
 "Add $0": [
  null,
  ""
 ],
 "Add Bond": [
  null,
  "Dodaj Bond"
 ],
 "Add Bridge": [
  null,
  "Dodaj Bridge"
 ],
 "Add Services": [
  null,
  ""
 ],
 "Add Services…": [
  null,
  ""
 ],
 "Add Team": [
  null,
  ""
 ],
 "Add VLAN": [
  null,
  "Dodaj VLAN"
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Additional DNS $val": [
  null,
  ""
 ],
 "Additional DNS Search Domains $val": [
  null,
  ""
 ],
 "Additional address $val": [
  null,
  ""
 ],
 "Address $val": [
  null,
  ""
 ],
 "Addresses": [
  null,
  "Adresa"
 ],
 "Allowed Services": [
  null,
  ""
 ],
 "Apply": [
  null,
  ""
 ],
 "Authenticating": [
  null,
  "Autoriziranje"
 ],
 "Automatic": [
  null,
  "Automatski"
 ],
 "Automatic (DHCP only)": [
  null,
  "Automatski (samo DHCP)"
 ],
 "Automatic (DHCP)": [
  null,
  "Automatski (DHCP)"
 ],
 "Balancer": [
  null,
  ""
 ],
 "Bond": [
  null,
  ""
 ],
 "Bond Settings": [
  null,
  "Bond Postavke"
 ],
 "Bridge": [
  null,
  ""
 ],
 "Bridge Port Settings": [
  null,
  "Bridge Port Postavke"
 ],
 "Bridge Settings": [
  null,
  "Bridge Postavke"
 ],
 "Bridge port": [
  null,
  ""
 ],
 "Broadcast": [
  null,
  "Emitiranje"
 ],
 "Broken configuration": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Odustani"
 ],
 "Carrier": [
  null,
  "Nosioc"
 ],
 "Change the settings": [
  null,
  ""
 ],
 "Changing the settings will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Checking IP": [
  null,
  "Provjera IP"
 ],
 "Close": [
  null,
  "Zatvori"
 ],
 "Configure": [
  null,
  "Konfiguriranje"
 ],
 "Configuring": [
  null,
  "Podešavanje"
 ],
 "Configuring IP": [
  null,
  "Podešavanje IP"
 ],
 "Connect automatically": [
  null,
  "Automatski uspostavi vezu"
 ],
 "Connection will be lost": [
  null,
  ""
 ],
 "Create it": [
  null,
  ""
 ],
 "Creating this VLAN will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Creating this bond will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Creating this bridge will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
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
  ""
 ],
 "DNS Search Domains": [
  null,
  "DNS traži domene"
 ],
 "DNS Search Domains $val": [
  null,
  ""
 ],
 "Deactivating": [
  null,
  "Deaktiviram"
 ],
 "Delete": [
  null,
  "Izbriši"
 ],
 "Delete $0": [
  null,
  ""
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Details": [
  null,
  ""
 ],
 "Disabled": [
  null,
  "Onemogućen"
 ],
 "Ethernet MAC": [
  null,
  ""
 ],
 "Ethernet MTU": [
  null,
  ""
 ],
 "Ethtool": [
  null,
  ""
 ],
 "Failed": [
  null,
  "Neuspjelo"
 ],
 "Filter Services": [
  null,
  ""
 ],
 "Firewall": [
  null,
  ""
 ],
 "Firewall is not available": [
  null,
  ""
 ],
 "Forward delay $forward_delay": [
  null,
  "Odgoda prosljeđivanja $forward_delay"
 ],
 "General": [
  null,
  "Općenito"
 ],
 "Go to now": [
  null,
  ""
 ],
 "Hair Pin mode": [
  null,
  ""
 ],
 "Hairpin mode": [
  null,
  ""
 ],
 "Hello time $hello_time": [
  null,
  "Hello vrijeme $hello_time"
 ],
 "IP Address": [
  null,
  "IP adresa"
 ],
 "IP Settings": [
  null,
  "IP postavke"
 ],
 "IPv4": [
  null,
  "IPv4"
 ],
 "IPv4 Settings": [
  null,
  "IPv4 Postavke"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "IPv6 Postavke"
 ],
 "Id $id": [
  null,
  "Id $id"
 ],
 "Ignore": [
  null,
  "Ignoriraj"
 ],
 "Inactive": [
  null,
  "Neaktivan"
 ],
 "Interfaces": [
  null,
  "Sučelja"
 ],
 "Invalid address $0": [
  null,
  "Nepravilan port"
 ],
 "Invalid metric $0": [
  null,
  "Nepravilan port"
 ],
 "Invalid prefix $0": [
  null,
  "Nepravilan port"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "Nepravilan port"
 ],
 "Keep connection": [
  null,
  ""
 ],
 "LACP Key": [
  null,
  ""
 ],
 "Link Monitoring": [
  null,
  "Nadziranje veze"
 ],
 "Link Watch": [
  null,
  ""
 ],
 "Link down delay": [
  null,
  "Odgoda gašenja linka"
 ],
 "Link local": [
  null,
  ""
 ],
 "Link up delay": [
  null,
  "Odgoda podizanja linka"
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
  "Veličina mora biti specificirana."
 ],
 "Manual": [
  null,
  "Ručno"
 ],
 "Master": [
  null,
  "Glavni"
 ],
 "Maximum message age $max_age": [
  null,
  "Maksimalna starost poruke $max_age"
 ],
 "Members": [
  null,
  "Članovi"
 ],
 "Mode": [
  null,
  "Način"
 ],
 "Monitoring Interval": [
  null,
  "Interval nadziranja"
 ],
 "Monitoring Targets": [
  null,
  "Mete nadziranja"
 ],
 "NSNA Ping": [
  null,
  ""
 ],
 "Name": [
  null,
  "Naziv"
 ],
 "Networking": [
  null,
  "Mreža"
 ],
 "Networking Logs": [
  null,
  "Mrežni Logovi"
 ],
 "No": [
  null,
  "Ne"
 ],
 "No carrier": [
  null,
  ""
 ],
 "No open ports": [
  null,
  ""
 ],
 "Not available": [
  null,
  "Nije dostupno"
 ],
 "Off": [
  null,
  "Isključi"
 ],
 "Ok": [
  null,
  ""
 ],
 "On": [
  null,
  "Uključi"
 ],
 "Parent": [
  null,
  "Roditelj"
 ],
 "Parent $parent": [
  null,
  "Roditelj $parent"
 ],
 "Part of ": [
  null,
  "Dio"
 ],
 "Passive": [
  null,
  ""
 ],
 "Path cost": [
  null,
  "Trošak putanje"
 ],
 "Path cost $path_cost": [
  null,
  "Trošak putanje $path_cost"
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
 "Please install the {0} package": [
  null,
  ""
 ],
 "Ports": [
  null,
  "Portovi"
 ],
 "Prefix length": [
  null,
  "Prefiks"
 ],
 "Prefix length or Netmask": [
  null,
  "Prefiks ili mrežna maska"
 ],
 "Preparing": [
  null,
  "Pripremanje"
 ],
 "Preserve": [
  null,
  ""
 ],
 "Primary": [
  null,
  "Primarni"
 ],
 "Priority": [
  null,
  "Prioritet"
 ],
 "Priority $priority": [
  null,
  "Prioritet $priority"
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
  "Primanje"
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
  "Greška prilikom preuzimanja"
 ],
 "Round Robin": [
  null,
  ""
 ],
 "Routes": [
  null,
  "Putanje"
 ],
 "Runner": [
  null,
  ""
 ],
 "STP Forward delay": [
  null,
  "STP odgoda prosljeđivanja"
 ],
 "STP Hello time": [
  null,
  "STP hello vrijeme"
 ],
 "STP Maximum message age": [
  null,
  "STP maksimalna starost poruke"
 ],
 "STP Priority": [
  null,
  "STP Prioritet"
 ],
 "Sending": [
  null,
  "Slanje"
 ],
 "Service": [
  null,
  ""
 ],
 "Set to": [
  null,
  ""
 ],
 "Shared": [
  null,
  "Dijeljenje"
 ],
 "Spanning Tree Protocol": [
  null,
  "Spanning Tree Protokol"
 ],
 "Spanning Tree Protocol (STP)": [
  null,
  "Spanning Tree Protocol (STP)"
 ],
 "Stable": [
  null,
  ""
 ],
 "Status": [
  null,
  "Stanje"
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
  ""
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  ""
 ],
 "This device cannot be managed here.": [
  null,
  ""
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Neočekivana pogreška"
 ],
 "Unknown": [
  null,
  "Nepoznato"
 ],
 "Unknown \"$0\"": [
  null,
  ""
 ],
 "Unknown configuration": [
  null,
  "Nepoznata konfiguracija"
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
  "VLAN id"
 ],
 "VLAN Settings": [
  null,
  "VLAN Postavke"
 ],
 "Waiting": [
  null,
  "Čekanje"
 ],
 "XOR": [
  null,
  "XILI"
 ],
 "Yes": [
  null,
  "Da"
 ],
 "You are not authorized to modify the firewall.": [
  null,
  ""
 ],
 "[$0 bytes of binary data]": [
  null,
  ""
 ],
 "[binary data]": [
  null,
  ""
 ],
 "[no data]": [
  null,
  ""
 ],
 "page-title\u0004Networking": [
  null,
  "Mreža"
 ]
}));
