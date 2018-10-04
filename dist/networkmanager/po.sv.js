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
 "$0 day": [
  "$0 days",
  "$0 dag",
  "$0 dagar"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 timme",
  "$0 timmar"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minut",
  "$0 minuter"
 ],
 "$0 month": [
  "$0 months",
  "$0 månad",
  "$0 månader"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 vecka",
  "$0 veckor"
 ],
 "$0 year": [
  "$0 years",
  "$0 år",
  "$0 år"
 ],
 "$mtu": [
  null,
  "$mtu"
 ],
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
  "ARP-övervakning"
 ],
 "ARP Ping": [
  null,
  "ARP-ping"
 ],
 "Active": [
  null,
  "Aktivt"
 ],
 "Active Backup": [
  null,
  "Aktiv säkerhetskopia"
 ],
 "Adaptive load balancing": [
  null,
  "Adaptiv lastbalansering"
 ],
 "Adaptive transmit load balancing": [
  null,
  "Adaptiv lastbalansering av sändning"
 ],
 "Add $0": [
  null,
  "Lägg till $0"
 ],
 "Add Bond": [
  null,
  "Lägg till bindning"
 ],
 "Add Bridge": [
  null,
  "Lägg till brygga"
 ],
 "Add Services": [
  null,
  "Lägg till tjänster"
 ],
 "Add Services…": [
  null,
  "Lägg till tjänster …"
 ],
 "Add Team": [
  null,
  "Lägg till team"
 ],
 "Add VLAN": [
  null,
  " Lägg till VLAN"
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Att lägga till <b>$0</b> kommer bryta anslutningen till servern, och kommer göra administrationsgränssnittet otillgängligt."
 ],
 "Additional DNS $val": [
  null,
  "Ytterligare DNS $val"
 ],
 "Additional DNS Search Domains $val": [
  null,
  "Ytterligare DNS-sökdomäner $val"
 ],
 "Additional address $val": [
  null,
  "Ytterligare adress $val"
 ],
 "Address $val": [
  null,
  "Adress $val"
 ],
 "Addresses": [
  null,
  "Adresser"
 ],
 "Allowed Services": [
  null,
  "Tillåtna tjänster"
 ],
 "Apply": [
  null,
  "Lägg på"
 ],
 "Authenticating": [
  null,
  "Autentiserar"
 ],
 "Automatic": [
  null,
  "Automatisk"
 ],
 "Automatic (DHCP only)": [
  null,
  "Automatiskt (endast DHCP)"
 ],
 "Automatic (DHCP)": [
  null,
  "Automatiskt (DHCP)"
 ],
 "Balancer": [
  null,
  "Balanserare"
 ],
 "Bond": [
  null,
  "Binda"
 ],
 "Bond Settings": [
  null,
  "Bindinställningar"
 ],
 "Bridge": [
  null,
  "Brygga"
 ],
 "Bridge Port Settings": [
  null,
  "Bryggportinställningar"
 ],
 "Bridge Settings": [
  null,
  "Brygginställningar"
 ],
 "Bridge port": [
  null,
  "Bryggport"
 ],
 "Broadcast": [
  null,
  "Utsändning"
 ],
 "Broken configuration": [
  null,
  "Trasig konfiguration"
 ],
 "Cancel": [
  null,
  "Avbryt"
 ],
 "Carrier": [
  null,
  "Transportör"
 ],
 "Change the settings": [
  null,
  "Ändra inställningarna"
 ],
 "Changing the settings will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Att ändra inställningarna kommer bryta förbindelsen till servern, och kommer göra administrationsgränssnittet otillgängligt."
 ],
 "Checking IP": [
  null,
  "Kontrollerar IP"
 ],
 "Close": [
  null,
  "Stäng"
 ],
 "Configure": [
  null,
  "Konfigurera"
 ],
 "Configuring": [
  null,
  "Konfigurerar"
 ],
 "Configuring IP": [
  null,
  "Konfigurerar IP"
 ],
 "Connect automatically": [
  null,
  "Anslut automatiskt"
 ],
 "Connection will be lost": [
  null,
  "Anslutningen kommer gå förlorad"
 ],
 "Create it": [
  null,
  "Skapa den"
 ],
 "Creating this VLAN will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Att skapa detta VLAN kommer bryta anslutningen till servern, och kommer göra administrationsgränssnittet otillgängligt."
 ],
 "Creating this bond will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Att skapa denna bindning kommer bryta anslutningen till servern, och kommer göra administrationsgränssnittet otillgängligt."
 ],
 "Creating this bridge will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Att skapa denna brygga kommer bryta anslutningen till servern, och kommer göra administrationsgränssnittet otillgängligt."
 ],
 "Creating this team will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Att skapa detta team kommer bryta anslutningen till servern, och kommer göra administrationsgränssnittet otillgängligt."
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
  "DNS-sökdomäner"
 ],
 "DNS Search Domains $val": [
  null,
  "DNS-sökdomäner $val"
 ],
 "Deactivating": [
  null,
  "Avaktiverar"
 ],
 "Delete": [
  null,
  "Ta bort"
 ],
 "Delete $0": [
  null,
  "Ta bort $0"
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Att ta bort <b>$0</b> kommer bryta anslutningen till servern, och kommer göra administrationsgränssnittet otillgängligt."
 ],
 "Details": [
  null,
  "Detaljer"
 ],
 "Disabled": [
  null,
  "Avaktiverad"
 ],
 "Enable Service": [
  null,
  ""
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
  ""
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
  ""
 ],
 "General": [
  null,
  ""
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
  ""
 ],
 "IP Address": [
  null,
  ""
 ],
 "IP Settings": [
  null,
  ""
 ],
 "IPv4": [
  null,
  ""
 ],
 "IPv4 Settings": [
  null,
  ""
 ],
 "IPv6": [
  null,
  ""
 ],
 "IPv6 Settings": [
  null,
  ""
 ],
 "Id $id": [
  null,
  ""
 ],
 "Ignore": [
  null,
  ""
 ],
 "Inactive": [
  null,
  ""
 ],
 "Interfaces": [
  null,
  ""
 ],
 "Invalid address $0": [
  null,
  ""
 ],
 "Invalid metric $0": [
  null,
  ""
 ],
 "Invalid prefix $0": [
  null,
  ""
 ],
 "Invalid prefix or netmask $0": [
  null,
  ""
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
 "No open ports": [
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
 "Ok": [
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
 "Please install the {0} package": [
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
 "Start Service": [
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
 "TCP": [
  null,
  ""
 ],
 "Team": [
  null,
  "Team"
 ],
 "Team Port": [
  null,
  "Team-port"
 ],
 "Team Port Settings": [
  null,
  "Team-portsinställningar"
 ],
 "Team Settings": [
  null,
  "Team-inställningar"
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
  ""
 ],
 "Unexpected error": [
  null,
  ""
 ],
 "Unknown": [
  null,
  ""
 ],
 "Unknown \"$0\"": [
  null,
  ""
 ],
 "Unknown configuration": [
  null,
  ""
 ],
 "Unmanaged Interfaces": [
  null,
  ""
 ],
 "VLAN": [
  null,
  ""
 ],
 "VLAN Id": [
  null,
  ""
 ],
 "VLAN Settings": [
  null,
  ""
 ],
 "Waiting": [
  null,
  ""
 ],
 "XOR": [
  null,
  "XOR"
 ],
 "Yes": [
  null,
  "Ja"
 ],
 "You are not authorized to modify the firewall.": [
  null,
  "Du har inte rättigheter att ändra brandväggen."
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 byte med binärdata]"
 ],
 "[binary data]": [
  null,
  "[binärdata]"
 ],
 "[no data]": [
  null,
  ""
 ],
 "page-title\u0004Networking": [
  null,
  ""
 ]
}));
