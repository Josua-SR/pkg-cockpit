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
  "language": "ca",
  "x-generator": "Zanata 4.6.2"
 },
 "$mtu": [
  null,
  "$mtu"
 ],
 "(Optional)": [
  null,
  ""
 ],
 "(default)": [
  null,
  "(predeterminat)"
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
  "802.3ad LACP"
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
  "Ping ARP"
 ],
 "Active": [
  null,
  "Activa"
 ],
 "Active Backup": [
  null,
  "Còpia de seguretat activa"
 ],
 "Active zones": [
  null,
  ""
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
  "Afegeix $0"
 ],
 "Add Bond": [
  null,
  "Afegeix un enllaç"
 ],
 "Add Bridge": [
  null,
  "Afegeix un pont"
 ],
 "Add Ports": [
  null,
  ""
 ],
 "Add Services": [
  null,
  "Afegeix serveis"
 ],
 "Add Team": [
  null,
  "Afegeix un equip"
 ],
 "Add VLAN": [
  null,
  "Afegeix una VLAN"
 ],
 "Add Zone": [
  null,
  ""
 ],
 "Add ports to the following zones:": [
  null,
  ""
 ],
 "Add services to following zones:": [
  null,
  ""
 ],
 "Add zone": [
  null,
  ""
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Additional DNS $val": [
  null,
  "DNS addicional $val"
 ],
 "Additional DNS Search Domains $val": [
  null,
  "Dominis de cerca DNS addicionals $val"
 ],
 "Additional address $val": [
  null,
  "Adreça addicional $val"
 ],
 "Address $val": [
  null,
  "Adreça $val"
 ],
 "Addresses": [
  null,
  "Adreces"
 ],
 "Allowed Addresses": [
  null,
  ""
 ],
 "Allowed Services": [
  null,
  "Serveis permesos"
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
  "Eina de balanceig"
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
  "Configuració trencada"
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
  "Canvia els ajusts"
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
 "Comma-separated ports, ranges, and aliases are accepted": [
  null,
  ""
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
  "Es perdrà la connexió"
 ],
 "Create it": [
  null,
  "Crea-ho"
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
 "Custom Ports": [
  null,
  ""
 ],
 "Custom zones": [
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
  "Dominis de cerca DNS"
 ],
 "DNS Search Domains $val": [
  null,
  "Dominis de cerca DNS $val"
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
 "Description": [
  null,
  "Descripció"
 ],
 "Details": [
  null,
  "Detalls"
 ],
 "Disabled": [
  null,
  "Inhabilitat"
 ],
 "Enable Service": [
  null,
  ""
 ],
 "Entire subnet": [
  null,
  ""
 ],
 "Ethernet MAC": [
  null,
  "MAC d'ethernet"
 ],
 "Ethernet MTU": [
  null,
  "MTU d'ethernet"
 ],
 "Ethtool": [
  null,
  "Ethtool"
 ],
 "Example: 22,ssh,8080,5900-5910": [
  null,
  ""
 ],
 "Example: 88,2019,nfs,rsync": [
  null,
  ""
 ],
 "Failed": [
  null,
  "Ha fallat"
 ],
 "Failed to add service": [
  null,
  ""
 ],
 "Failed to add zone": [
  null,
  ""
 ],
 "Failed to remove service": [
  null,
  ""
 ],
 "Filter Services": [
  null,
  "Filtra els serveis"
 ],
 "Firewall": [
  null,
  "Tallafoc"
 ],
 "Firewall is not available": [
  null,
  "El tallafoc no està disponible"
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
 "IP Range": [
  null,
  ""
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
  "Ajusts d'IPv4"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "Ajusts d'IPv6"
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
 "Included services": [
  null,
  ""
 ],
 "Interfaces": [
  null,
  "Interfícies"
 ],
 "Invalid address $0": [
  null,
  "Adreça no vàlida $0"
 ],
 "Invalid metric $0": [
  null,
  "Mètrica no vàlida $0"
 ],
 "Invalid port number": [
  null,
  ""
 ],
 "Invalid prefix $0": [
  null,
  "Prefix no vàlid $0"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "Prefix o màscara de xarxa no vàlid $0"
 ],
 "Invalid range": [
  null,
  ""
 ],
 "Keep connection": [
  null,
  "Mantén la connexió"
 ],
 "LACP Key": [
  null,
  "Clau LACP"
 ],
 "Link Monitoring": [
  null,
  "Monitoratge de l'enllaç"
 ],
 "Link Watch": [
  null,
  "Observació de l'enllaç"
 ],
 "Link down delay": [
  null,
  "Retard del baixament de l'enllaç"
 ],
 "Link local": [
  null,
  "Enllaç local"
 ],
 "Link up delay": [
  null,
  "Retard de l'aixecament de l'enllaç"
 ],
 "Load Balancing": [
  null,
  "Balanceig de càrrega"
 ],
 "MAC": [
  null,
  "MAC"
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
  "El valor de la MTU ha de ser un nombre positiu"
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
  "Ping NSNA"
 ],
 "Name": [
  null,
  "Nom"
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
 "No active zones": [
  null,
  ""
 ],
 "No carrier": [
  null,
  "Sense portadora"
 ],
 "No description available": [
  null,
  ""
 ],
 "No open ports": [
  null,
  ""
 ],
 "None": [
  null,
  "Cap"
 ],
 "Not available": [
  null,
  "No disponible"
 ],
 "Off": [
  null,
  "Off"
 ],
 "On": [
  null,
  "On"
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
  "Passiu"
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
  "Permanent"
 ],
 "Ping Interval": [
  null,
  "Interval de ping"
 ],
 "Ping Target": [
  null,
  "Objectiu de ping"
 ],
 "Please install the $0 package": [
  null,
  ""
 ],
 "Port number and type do not match": [
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
  "Preserva"
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
  "Aleatòria"
 ],
 "Range": [
  null,
  ""
 ],
 "Range must be strictly ordered": [
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
  "Suprimeix $0"
 ],
 "Remove service": [
  null,
  ""
 ],
 "Remove service from zones": [
  null,
  ""
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Restoring connection": [
  null,
  "S'està restaurant la connexió"
 ],
 "Round Robin": [
  null,
  "Round Robin"
 ],
 "Routes": [
  null,
  "Encaminaments"
 ],
 "Runner": [
  null,
  "Runner"
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
 "Service": [
  null,
  "Servei"
 ],
 "Services": [
  null,
  "Serveis"
 ],
 "Set to": [
  null,
  "Estableix a"
 ],
 "Shared": [
  null,
  "Compartida"
 ],
 "Sorted from least trusted to most trusted": [
  null,
  ""
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
  "Estable"
 ],
 "Start Service": [
  null,
  ""
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
  "Apaga $0"
 ],
 "Switch on $0": [
  null,
  "Engega $0"
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
  "Equip"
 ],
 "Team Port": [
  null,
  "Port de l'equip"
 ],
 "Team Port Settings": [
  null,
  "Ajusts del port de l'equip"
 ],
 "Team Settings": [
  null,
  "Ajusts de l'equip"
 ],
 "Testing connection": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  "A l'usuari <b>$0</b> no se li permet modificar els ajusts de xarxa"
 ],
 "This device cannot be managed here.": [
  null,
  "Aquest dispositiu no es pot gestionar aquí."
 ],
 "Trust level": [
  null,
  ""
 ],
 "UDP": [
  null,
  "UDP"
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
  "\"$0\" desconegut"
 ],
 "Unknown configuration": [
  null,
  "Configuració desconeguda"
 ],
 "Unknown service name": [
  null,
  ""
 ],
 "Unmanaged Interfaces": [
  null,
  "Interfícies sense gestionar"
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
 "You are not authorized to modify the firewall.": [
  null,
  ""
 ],
 "Zone": [
  null,
  ""
 ],
 "Zones": [
  null,
  ""
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
 "show less": [
  null,
  "mostra menys"
 ],
 "show more": [
  null,
  "mostra més"
 ],
 "page-title\u0004Networking": [
  null,
  "Xarxa"
 ]
}));
