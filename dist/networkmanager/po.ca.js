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
  "language": "ca",
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
  "$mtu"
 ],
 "1 day": [
  null,
  "1 dia"
 ],
 "1 hour": [
  null,
  "1 hora"
 ],
 "1 week": [
  null,
  "1 setmana"
 ],
 "5 minutes": [
  null,
  "5 minuts"
 ],
 "6 hours": [
  null,
  "6 hores"
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
  "Monitoratge ARP"
 ],
 "ARP Ping": [
  null,
  ""
 ],
 "Active": [
  null,
  "Activa"
 ],
 "Active Backup": [
  null,
  "Activa la còpia de seguretat"
 ],
 "Adaptive load balancing": [
  null,
  "Balanceig de càrrega adaptativa"
 ],
 "Adaptive transmit load balancing": [
  null,
  "Balanceig de càrrega de transmissió adaptativa"
 ],
 "Add $0": [
  null,
  ""
 ],
 "Add Bond": [
  null,
  "Afegeix un enllaç"
 ],
 "Add Bridge": [
  null,
  "Afegeix un pont"
 ],
 "Add Team": [
  null,
  ""
 ],
 "Add VLAN": [
  null,
  "Afegeix una VLAN"
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
  "Adreces"
 ],
 "Apply": [
  null,
  "Aplica"
 ],
 "Authenticating": [
  null,
  "S'està autenticant"
 ],
 "Automatic": [
  null,
  "Automàtic"
 ],
 "Automatic (DHCP only)": [
  null,
  "Automàtica, tan sols DHCP"
 ],
 "Automatic (DHCP)": [
  null,
  "Automàtica (DHCP)"
 ],
 "Balancer": [
  null,
  ""
 ],
 "Bond": [
  null,
  "Enllaç"
 ],
 "Bond Settings": [
  null,
  "Ajusts de l'enllaç"
 ],
 "Bridge": [
  null,
  "Pont"
 ],
 "Bridge Port Settings": [
  null,
  "Ajusts del port del pont"
 ],
 "Bridge Settings": [
  null,
  "Ajusts del pont"
 ],
 "Bridge port": [
  null,
  "Port del pont"
 ],
 "Broadcast": [
  null,
  "Difusió"
 ],
 "Broken configuration": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Cancel·la"
 ],
 "Carrier": [
  null,
  "Portadora"
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
  "S'està comprovant la IP"
 ],
 "Close": [
  null,
  "Tanca"
 ],
 "Configure": [
  null,
  "Configura"
 ],
 "Configuring": [
  null,
  "S'està configurant"
 ],
 "Configuring IP": [
  null,
  "S'està configurant la IP"
 ],
 "Connect automatically": [
  null,
  "Connecta automàticament"
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
  "Dominis de cerca DNS"
 ],
 "DNS Search Domains $val": [
  null,
  ""
 ],
 "Deactivating": [
  null,
  "S'està desactivant"
 ],
 "Delete": [
  null,
  "Suprimeix"
 ],
 "Delete $0": [
  null,
  "Suprimeix $0"
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Disabled": [
  null,
  "Inhabilitat"
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
  "Ha fallat"
 ],
 "Forward delay $forward_delay": [
  null,
  "Retard del reenviament $forward_delay"
 ],
 "General": [
  null,
  "General"
 ],
 "Go to now": [
  null,
  "Vés a ara"
 ],
 "Hair Pin mode": [
  null,
  "Mode hairpin"
 ],
 "Hairpin mode": [
  null,
  "Mode hairpin"
 ],
 "Hello time $hello_time": [
  null,
  "Hello time $hello_time"
 ],
 "IP Address": [
  null,
  "Adreça IP"
 ],
 "IP Settings": [
  null,
  "Ajusts de la IP"
 ],
 "IPv4": [
  null,
  "IPv4"
 ],
 "IPv4 Settings": [
  null,
  "Ajustos d'IPv4"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "Ajustos d'IPv6"
 ],
 "Id $id": [
  null,
  "Id. $id"
 ],
 "Ignore": [
  null,
  "Ignora"
 ],
 "Inactive": [
  null,
  "Inactiu"
 ],
 "Interfaces": [
  null,
  "Interfícies"
 ],
 "Invalid address $0": [
  null,
  "Clau no vàlida"
 ],
 "Invalid metric $0": [
  null,
  "Clau no vàlida"
 ],
 "Invalid prefix $0": [
  null,
  "Port no vàlid"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "Port no vàlid"
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
  "Monitoratge de l'enllaç"
 ],
 "Link Watch": [
  null,
  ""
 ],
 "Link down delay": [
  null,
  "Retard del baixament de l'enllaç"
 ],
 "Link local": [
  null,
  "Enllaça localment"
 ],
 "Link up delay": [
  null,
  "Retard de l'aixecament de l'enllaç"
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
  "MII (recomanat)"
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
  "Manual"
 ],
 "Master": [
  null,
  "Màster"
 ],
 "Maximum message age $max_age": [
  null,
  "Envelliment màxim del missatge $max_age"
 ],
 "Members": [
  null,
  "Membres"
 ],
 "Mode": [
  null,
  "Mode"
 ],
 "Monitoring Interval": [
  null,
  "Interval del monitoratge"
 ],
 "Monitoring Targets": [
  null,
  "Objectius del monitoratge"
 ],
 "NSNA Ping": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nom"
 ],
 "Networking": [
  null,
  "Xarxa"
 ],
 "Networking Logs": [
  null,
  "Registres de la xarxa"
 ],
 "No": [
  null,
  "No"
 ],
 "No carrier": [
  null,
  "Sense portadora"
 ],
 "Not available": [
  null,
  "No disponible"
 ],
 "Off": [
  null,
  "Apagat"
 ],
 "On": [
  null,
  "Engegat"
 ],
 "Parent": [
  null,
  "Pare"
 ],
 "Parent $parent": [
  null,
  "Pare $parent"
 ],
 "Part of ": [
  null,
  "Part de"
 ],
 "Passive": [
  null,
  ""
 ],
 "Path cost": [
  null,
  "Cost del camí"
 ],
 "Path cost $path_cost": [
  null,
  "Cost del camí $path_cost"
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
  "Ports"
 ],
 "Prefix length": [
  null,
  "Longitud del prefix"
 ],
 "Prefix length or Netmask": [
  null,
  "Longitud del prefix o Màscara de xarxa"
 ],
 "Preparing": [
  null,
  "S'està preparant"
 ],
 "Preserve": [
  null,
  "Preajusta"
 ],
 "Primary": [
  null,
  "Principal"
 ],
 "Priority": [
  null,
  "Prioritat"
 ],
 "Priority $priority": [
  null,
  "Prioritat $priority"
 ],
 "Random": [
  null,
  ""
 ],
 "Reboot": [
  null,
  "Rearrencada"
 ],
 "Receiving": [
  null,
  "Recepció"
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
  "Torna a connectar"
 ],
 "Round Robin": [
  null,
  "Round Robin"
 ],
 "Routes": [
  null,
  "Rutes"
 ],
 "Runner": [
  null,
  ""
 ],
 "STP Forward delay": [
  null,
  "Retard del reenviament STP"
 ],
 "STP Hello time": [
  null,
  "STP Hello time"
 ],
 "STP Maximum message age": [
  null,
  "Envelliment màxim del missatge STP"
 ],
 "STP Priority": [
  null,
  "Prioritat STP"
 ],
 "Sending": [
  null,
  "Enviament"
 ],
 "Set to": [
  null,
  ""
 ],
 "Shared": [
  null,
  "Compartida"
 ],
 "Spanning Tree Protocol": [
  null,
  "STP (Spanning Tree Protocol)"
 ],
 "Spanning Tree Protocol (STP)": [
  null,
  "STP (Spanning Tree Protocol)"
 ],
 "Stable": [
  null,
  "Habilita"
 ],
 "Status": [
  null,
  "Estat"
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
  "A l'usuari <b>$0</b> no se li permet modificar els ajustos de xarxa"
 ],
 "This device cannot be managed here.": [
  null,
  ""
 ],
 "Unexpected error": [
  null,
  "Error inesperat"
 ],
 "Unknown": [
  null,
  "Desconegut"
 ],
 "Unknown \"$0\"": [
  null,
  ""
 ],
 "Unknown configuration": [
  null,
  "Configuració desconeguda"
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
  "Id. VLAN"
 ],
 "VLAN Settings": [
  null,
  "Ajusts de la VLAN"
 ],
 "Waiting": [
  null,
  "S'està esperant"
 ],
 "XOR": [
  null,
  "XOR"
 ],
 "Yes": [
  null,
  "Sí"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 bytes de dades binàries]"
 ],
 "[binary data]": [
  null,
  "[dades binàries]"
 ],
 "[no data]": [
  null,
  "[sense dades]"
 ],
 "page-title\u0004Networking": [
  null,
  "Xarxa"
 ]
}));
