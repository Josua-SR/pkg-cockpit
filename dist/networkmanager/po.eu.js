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
  "language": "eu",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 day": [
  "$0 days",
  "",
  ""
 ],
 "$0 hour": [
  "$0 hours",
  "ordu $0",
  "$0 ordu"
 ],
 "$0 minute": [
  "$0 minutes",
  "minutu $0",
  "$0 minutu"
 ],
 "$0 month": [
  "$0 months",
  "hilabete $0",
  "$0 hilabete"
 ],
 "$0 week": [
  "$0 weeks",
  "",
  ""
 ],
 "$0 year": [
  "$0 years",
  "",
  ""
 ],
 "$mtu": [
  null,
  ""
 ],
 "1 day": [
  null,
  ""
 ],
 "1 hour": [
  null,
  ""
 ],
 "1 week": [
  null,
  ""
 ],
 "5 minutes": [
  null,
  ""
 ],
 "6 hours": [
  null,
  ""
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
  ""
 ],
 "ARP Ping": [
  null,
  "ARP Ping"
 ],
 "Active": [
  null,
  ""
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
  "Gehitu $0"
 ],
 "Add Bond": [
  null,
  ""
 ],
 "Add Bridge": [
  null,
  ""
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
  ""
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
  "Helbideak"
 ],
 "Allowed Services": [
  null,
  ""
 ],
 "Apply": [
  null,
  "Aplikatu"
 ],
 "Authenticating": [
  null,
  ""
 ],
 "Automatic": [
  null,
  "Automatikoa"
 ],
 "Automatic (DHCP only)": [
  null,
  ""
 ],
 "Automatic (DHCP)": [
  null,
  ""
 ],
 "Balancer": [
  null,
  ""
 ],
 "Bond": [
  null,
  "Bond"
 ],
 "Bond Settings": [
  null,
  "Bond ezarpenak"
 ],
 "Bridge": [
  null,
  "Bridge"
 ],
 "Bridge Port Settings": [
  null,
  ""
 ],
 "Bridge Settings": [
  null,
  "Bridge ezarpenak"
 ],
 "Bridge port": [
  null,
  ""
 ],
 "Broadcast": [
  null,
  ""
 ],
 "Broken configuration": [
  null,
  ""
 ],
 "Cancel": [
  null,
  ""
 ],
 "Carrier": [
  null,
  ""
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
  ""
 ],
 "Close": [
  null,
  ""
 ],
 "Configure": [
  null,
  ""
 ],
 "Configuring": [
  null,
  ""
 ],
 "Configuring IP": [
  null,
  ""
 ],
 "Connect automatically": [
  null,
  ""
 ],
 "Connection will be lost": [
  null,
  ""
 ],
 "Create it": [
  null,
  "Sortu"
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
  "DNS $val"
 ],
 "DNS Search Domains": [
  null,
  ""
 ],
 "DNS Search Domains $val": [
  null,
  ""
 ],
 "Deactivating": [
  null,
  ""
 ],
 "Delete": [
  null,
  "Ezabatu"
 ],
 "Delete $0": [
  null,
  "Ezabatu $0"
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Details": [
  null,
  "Xehetasunak"
 ],
 "Disabled": [
  null,
  ""
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
 "Please install the $0 package": [
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
  "VLAN"
 ],
 "VLAN Id": [
  null,
  "VLAN id"
 ],
 "VLAN Settings": [
  null,
  "VLAN ezarpenak"
 ],
 "Waiting": [
  null,
  "Itxaroten"
 ],
 "XOR": [
  null,
  "XOR"
 ],
 "Yes": [
  null,
  "Bai"
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
  ""
 ]
}));
