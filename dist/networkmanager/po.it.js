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
  "language": "it",
  "x-generator": "Zanata 4.6.2"
 },
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
  ""
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
  ""
 ],
 "Active": [
  null,
  "Attivo"
 ],
 "Active Backup": [
  null,
  "Backup attivo"
 ],
 "Adaptive load balancing": [
  null,
  "Adaptive Load Balancing"
 ],
 "Adaptive transmit load balancing": [
  null,
  "Adaptive Transmit Load Balancing"
 ],
 "Add $0": [
  null,
  ""
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
  "Indirizzi"
 ],
 "Allowed Services": [
  null,
  ""
 ],
 "Apply": [
  null,
  "Applica"
 ],
 "Authenticating": [
  null,
  ""
 ],
 "Automatic": [
  null,
  "Automatico"
 ],
 "Automatic (DHCP only)": [
  null,
  ""
 ],
 "Automatic (DHCP)": [
  null,
  "Automatico (DHCP)"
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
  ""
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
  ""
 ],
 "Bridge port": [
  null,
  ""
 ],
 "Broadcast": [
  null,
  "Broadcast"
 ],
 "Broken configuration": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Annulla"
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
  "Chiudi"
 ],
 "Configure": [
  null,
  "Configura"
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
  "Cancella"
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
  "Dettagli"
 ],
 "Disabled": [
  null,
  "Disabilitato"
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
  "Non riuscito"
 ],
 "Filter Services": [
  null,
  ""
 ],
 "Firewall": [
  null,
  "Firewall"
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
  "Generale"
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
  "Modalità hairpin"
 ],
 "Hello time $hello_time": [
  null,
  ""
 ],
 "IP Address": [
  null,
  "Indirizzo IP"
 ],
 "IP Settings": [
  null,
  ""
 ],
 "IPv4": [
  null,
  "IPv4"
 ],
 "IPv4 Settings": [
  null,
  "Impostazioni IPv4"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "Impostazioni IPv6"
 ],
 "Id $id": [
  null,
  ""
 ],
 "Ignore": [
  null,
  "Ignora"
 ],
 "Inactive": [
  null,
  "Inattiva"
 ],
 "Interfaces": [
  null,
  "Interfaccia"
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
  "Ritardo caduta collegamento"
 ],
 "Link local": [
  null,
  ""
 ],
 "Link up delay": [
  null,
  "Ritardo ripristino collegamento"
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
  "Manuale"
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
  "Modalità"
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
  "Nome"
 ],
 "Network devices and graphs require NetworkManager.": [
  null,
  ""
 ],
 "NetworkManager is not running.": [
  null,
  "NetworkManager non è in esecuzione."
 ],
 "Networking": [
  null,
  "Rete"
 ],
 "Networking Logs": [
  null,
  ""
 ],
 "No": [
  null,
  "No"
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
  "Non disponibile"
 ],
 "Off": [
  null,
  "Off"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  "On"
 ],
 "Parent": [
  null,
  "Padre"
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
  "Costo percorso"
 ],
 "Path cost $path_cost": [
  null,
  ""
 ],
 "Permanent": [
  null,
  "Salvata"
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
  "Porte"
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
  "Preparazione"
 ],
 "Preserve": [
  null,
  "Preserva"
 ],
 "Primary": [
  null,
  "Primario"
 ],
 "Priority": [
  null,
  "Priorità"
 ],
 "Priority $priority": [
  null,
  ""
 ],
 "Random": [
  null,
  "Casuale"
 ],
 "Reboot": [
  null,
  "Riavvia"
 ],
 "Receiving": [
  null,
  "Ricevuti"
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
  "Esecutore"
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
  "Invio"
 ],
 "Service": [
  null,
  "Servizio"
 ],
 "Set to": [
  null,
  ""
 ],
 "Shared": [
  null,
  "Condivisa"
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
  "Stabile"
 ],
 "Start Service": [
  null,
  ""
 ],
 "Status": [
  null,
  "Stato"
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
  "Team"
 ],
 "Team Port": [
  null,
  "Porta team"
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
  ""
 ],
 "Unknown": [
  null,
  "Sconosciuto"
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
  ""
 ],
 "VLAN Settings": [
  null,
  ""
 ],
 "Waiting": [
  null,
  "In attesa"
 ],
 "XOR": [
  null,
  "XOR"
 ],
 "Yes": [
  null,
  "Sì"
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
  "Rete"
 ]
}));
