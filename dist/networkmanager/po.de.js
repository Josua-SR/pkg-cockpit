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
  "language": "de",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 day": [
  "$0 days",
  "",
  ""
 ],
 "$0 hour": [
  "$0 hours",
  "",
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  "",
  ""
 ],
 "$0 month": [
  "$0 months",
  "",
  ""
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
  "1 Tag"
 ],
 "1 hour": [
  null,
  "1 Stunde"
 ],
 "1 week": [
  null,
  "1 Woche"
 ],
 "5 minutes": [
  null,
  "5 Minuten"
 ],
 "6 hours": [
  null,
  "6 Stunden"
 ],
 "802.3ad": [
  null,
  "802.3ad"
 ],
 "802.3ad LACP": [
  null,
  "802.3ad"
 ],
 "ARP": [
  null,
  "ARP"
 ],
 "ARP Monitoring": [
  null,
  "ARP-Überwachung"
 ],
 "ARP Ping": [
  null,
  "ARP-Überwachung"
 ],
 "Active": [
  null,
  "Aktiv"
 ],
 "Active Backup": [
  null,
  "Aktive Sicherung"
 ],
 "Adaptive load balancing": [
  null,
  "Adaptives Load Balancing (alb)"
 ],
 "Adaptive transmit load balancing": [
  null,
  "Adaptives Transmit Load Balancing (tlb)"
 ],
 "Add $0": [
  null,
  ""
 ],
 "Add Bond": [
  null,
  "Bündelung hinzufügen"
 ],
 "Add Bridge": [
  null,
  "Bridge hinzufügen"
 ],
 "Add Team": [
  null,
  ""
 ],
 "Add VLAN": [
  null,
  "VLAN hinzufügen"
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
  "Adressen"
 ],
 "Apply": [
  null,
  "Anwenden"
 ],
 "Authenticating": [
  null,
  "Authentifiziere"
 ],
 "Automatic": [
  null,
  "Automatisch"
 ],
 "Automatic (DHCP only)": [
  null,
  "Automatisch (nur DHCP)"
 ],
 "Automatic (DHCP)": [
  null,
  "Automatisch (DHCP)"
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
  "Bond Einstellungen"
 ],
 "Bridge": [
  null,
  "Brücke"
 ],
 "Bridge Port Settings": [
  null,
  "Bridge Port Einstellungen"
 ],
 "Bridge Settings": [
  null,
  "Bridge Einstellungen"
 ],
 "Bridge port": [
  null,
  "Bridge-Port"
 ],
 "Broadcast": [
  null,
  "Broadcast"
 ],
 "Broken configuration": [
  null,
  "Unbekannte Konfiguration"
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Carrier": [
  null,
  "Träger"
 ],
 "Change the settings": [
  null,
  "Bridge Port Einstellungen"
 ],
 "Changing the settings will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Checking IP": [
  null,
  "IP wird überprüft"
 ],
 "Close": [
  null,
  "Schliessen"
 ],
 "Configure": [
  null,
  "Konfigurieren"
 ],
 "Configuring": [
  null,
  "Konfiguriere"
 ],
 "Configuring IP": [
  null,
  "Konfiguriere IP"
 ],
 "Connect automatically": [
  null,
  "Verbindung automatisch herstellen"
 ],
 "Connection will be lost": [
  null,
  ""
 ],
 "Create it": [
  null,
  "Erstellen"
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
  "DNS Suchdomänen"
 ],
 "DNS Search Domains $val": [
  null,
  ""
 ],
 "Deactivating": [
  null,
  "Wird deaktiviert"
 ],
 "Delete": [
  null,
  "Löschen"
 ],
 "Delete $0": [
  null,
  "$0 löschen"
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Disabled": [
  null,
  "Deaktiviert"
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
  "Fehlgeschlagen"
 ],
 "Forward delay $forward_delay": [
  null,
  "Weiterleitungsverzögerung $forward_delay"
 ],
 "General": [
  null,
  "Allgemein"
 ],
 "Go to now": [
  null,
  "Zu 'Jetzt' gehen"
 ],
 "Hair Pin mode": [
  null,
  "Hairpin Modus"
 ],
 "Hairpin mode": [
  null,
  "Hairpin-Modus"
 ],
 "Hello time $hello_time": [
  null,
  "Hello-Zeit $hello_time"
 ],
 "IP Address": [
  null,
  "IP-Adresse"
 ],
 "IP Settings": [
  null,
  "IP Einstellungen"
 ],
 "IPv4": [
  null,
  "IPv4"
 ],
 "IPv4 Settings": [
  null,
  "IPv4 Einstellungen"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "IPv6 Einstellungen"
 ],
 "Id $id": [
  null,
  "ID $id"
 ],
 "Ignore": [
  null,
  "Ignorieren"
 ],
 "Inactive": [
  null,
  "Inaktiv"
 ],
 "Interfaces": [
  null,
  "Schnittstellen"
 ],
 "Invalid address $0": [
  null,
  "Ungültiger Schlüssel"
 ],
 "Invalid metric $0": [
  null,
  "Ungültiger Schlüssel"
 ],
 "Invalid prefix $0": [
  null,
  "Ungültiger Port"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "Ungültiger Port"
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
  "Verbindungsüberwachung"
 ],
 "Link Watch": [
  null,
  "Link local"
 ],
 "Link down delay": [
  null,
  "Verzögerung bei der Deaktivierung einer Verbindung"
 ],
 "Link local": [
  null,
  "Link local"
 ],
 "Link up delay": [
  null,
  "Verzögerung bei der Aktivierung einer Verbindung"
 ],
 "Load Balancing": [
  null,
  "Adaptives Load Balancing (alb)"
 ],
 "MAC": [
  null,
  ""
 ],
 "MII (Recommended)": [
  null,
  "MII (empfohlen)"
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
  "Manuell"
 ],
 "Master": [
  null,
  "Master"
 ],
 "Maximum message age $max_age": [
  null,
  "Maximales Alter der Nachrichten $max_age"
 ],
 "Members": [
  null,
  "Mitglieder"
 ],
 "Mode": [
  null,
  "Modus"
 ],
 "Monitoring Interval": [
  null,
  "Überwachungsintervall"
 ],
 "Monitoring Targets": [
  null,
  "Überwachungsziele"
 ],
 "NSNA Ping": [
  null,
  ""
 ],
 "Name": [
  null,
  "Name"
 ],
 "Networking": [
  null,
  "Netzwerk"
 ],
 "Networking Logs": [
  null,
  "Netzwerk-Logs"
 ],
 "No": [
  null,
  "Nein"
 ],
 "No carrier": [
  null,
  "Kein Träger"
 ],
 "Not available": [
  null,
  "Nicht verfügbar"
 ],
 "Off": [
  null,
  "Aus"
 ],
 "On": [
  null,
  "Ein"
 ],
 "Parent": [
  null,
  "Parent"
 ],
 "Parent $parent": [
  null,
  "Parent $parent"
 ],
 "Part of ": [
  null,
  "Teil von"
 ],
 "Passive": [
  null,
  ""
 ],
 "Path cost": [
  null,
  "Pfadkosten"
 ],
 "Path cost $path_cost": [
  null,
  "Pfadkosten $path_cost"
 ],
 "Permanent": [
  null,
  ""
 ],
 "Ping Interval": [
  null,
  "Überwachungsintervall"
 ],
 "Ping Target": [
  null,
  "$target wird gelöscht"
 ],
 "Ports": [
  null,
  "Ports"
 ],
 "Prefix length": [
  null,
  "Präfix"
 ],
 "Prefix length or Netmask": [
  null,
  "Präfix oder Netzmaske"
 ],
 "Preparing": [
  null,
  "Vorbereitung läuft"
 ],
 "Preserve": [
  null,
  "Voreinstellen"
 ],
 "Primary": [
  null,
  "Primär"
 ],
 "Priority": [
  null,
  "Priorität"
 ],
 "Priority $priority": [
  null,
  "Priorität $priority"
 ],
 "Random": [
  null,
  ""
 ],
 "Reboot": [
  null,
  "Neustart"
 ],
 "Receiving": [
  null,
  "Empfange"
 ],
 "Remove $0": [
  null,
  "Entfernen"
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Restoring connection": [
  null,
  "Erneut verbinden"
 ],
 "Round Robin": [
  null,
  "Round Robin"
 ],
 "Routes": [
  null,
  "Routen"
 ],
 "Runner": [
  null,
  "Läuft"
 ],
 "STP Forward delay": [
  null,
  "STP Forward Delay"
 ],
 "STP Hello time": [
  null,
  "STP Hello-Zeitintervall"
 ],
 "STP Maximum message age": [
  null,
  "STP Maximum Message Age"
 ],
 "STP Priority": [
  null,
  "STP Priorität"
 ],
 "Sending": [
  null,
  "Sende"
 ],
 "Set to": [
  null,
  ""
 ],
 "Shared": [
  null,
  "Geteilt"
 ],
 "Spanning Tree Protocol": [
  null,
  "Spanning Tree Protocol"
 ],
 "Spanning Tree Protocol (STP)": [
  null,
  "Spanning Tree Protocol (STP)"
 ],
 "Stable": [
  null,
  "Einschalten"
 ],
 "Status": [
  null,
  "Status"
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
  "Bridge Port Einstellungen"
 ],
 "Team Settings": [
  null,
  "IP Einstellungen"
 ],
 "Testing connection": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  "Der User <b>$0</b> hat keine Rechte, die Netzwerkeinstellungen zu verändern."
 ],
 "This device cannot be managed here.": [
  null,
  ""
 ],
 "Unexpected error": [
  null,
  "Unerwarteter Fehler"
 ],
 "Unknown": [
  null,
  "Unbekannt"
 ],
 "Unknown \"$0\"": [
  null,
  ""
 ],
 "Unknown configuration": [
  null,
  "Unbekannte Konfiguration"
 ],
 "Unmanaged Interfaces": [
  null,
  "Schnittstellen"
 ],
 "VLAN": [
  null,
  "VLAN"
 ],
 "VLAN Id": [
  null,
  "VLAN Kennung"
 ],
 "VLAN Settings": [
  null,
  "VLAN Einstellungen"
 ],
 "Waiting": [
  null,
  "Wartet"
 ],
 "XOR": [
  null,
  "XOR"
 ],
 "Yes": [
  null,
  "Ja"
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
  "Netzwerk"
 ]
}));