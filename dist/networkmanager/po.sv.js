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
  "language": "sv",
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
  "(standard)"
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
  "Aktiv reserv"
 ],
 "Active zones": [
  null,
  ""
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
 "Add Ports": [
  null,
  ""
 ],
 "Add Services": [
  null,
  "Lägg till tjänster"
 ],
 "Add Team": [
  null,
  "Lägg till team"
 ],
 "Add VLAN": [
  null,
  " Lägg till VLAN"
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
 "Allowed Addresses": [
  null,
  ""
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
 "Comma-separated ports, ranges, and aliases are accepted": [
  null,
  ""
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
 "Description": [
  null,
  "Beskrivning"
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
  "Aktivera tjänst"
 ],
 "Entire subnet": [
  null,
  ""
 ],
 "Ethernet MAC": [
  null,
  "Ethernet-MAC"
 ],
 "Ethernet MTU": [
  null,
  "Ethernet-MTU"
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
  "Misslyckades"
 ],
 "Failed to add port": [
  null,
  "Misslyckades att ändra lösenord"
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
  "Filtrera tjänster"
 ],
 "Firewall": [
  null,
  "Brandvägg"
 ],
 "Firewall is not available": [
  null,
  "Brandväggen är inte tillgänglig"
 ],
 "Forward delay $forward_delay": [
  null,
  "Fördröjning framåt $forward_delay"
 ],
 "General": [
  null,
  "Allmänt"
 ],
 "Go to now": [
  null,
  "Gå till nu"
 ],
 "Hair Pin mode": [
  null,
  "Hårnålsläge"
 ],
 "Hairpin mode": [
  null,
  "Hårnålsläge"
 ],
 "Hello time $hello_time": [
  null,
  "Hälsningstid $hello_time"
 ],
 "IP Address": [
  null,
  "IP-adress"
 ],
 "IP Range": [
  null,
  ""
 ],
 "IP Settings": [
  null,
  "IP-inställningar"
 ],
 "IPv4": [
  null,
  "IPv4"
 ],
 "IPv4 Settings": [
  null,
  "IPv4-inställningar"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "IPv6-inställningar"
 ],
 "Id $id": [
  null,
  "Id $id"
 ],
 "Ignore": [
  null,
  "Ignorera"
 ],
 "Inactive": [
  null,
  "Inaktiv"
 ],
 "Included services": [
  null,
  ""
 ],
 "Interfaces": [
  null,
  "Gränssnitt"
 ],
 "Invalid address $0": [
  null,
  "Felaktig adress $0"
 ],
 "Invalid metric $0": [
  null,
  "Felaktigt mått $0"
 ],
 "Invalid port number": [
  null,
  ""
 ],
 "Invalid prefix $0": [
  null,
  "Felaktigt prefix $0"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "Felaktigt prefix eller nätmask $0"
 ],
 "Invalid range": [
  null,
  ""
 ],
 "Keep connection": [
  null,
  "Behåll förbindelsen"
 ],
 "LACP Key": [
  null,
  "LACP-nyckel"
 ],
 "Link Monitoring": [
  null,
  "Länkövervakning"
 ],
 "Link Watch": [
  null,
  "Länkbetraktelse"
 ],
 "Link down delay": [
  null,
  "Länk nere fördröjning"
 ],
 "Link local": [
  null,
  "Länklokal"
 ],
 "Link up delay": [
  null,
  "Länk uppe fördröjning"
 ],
 "Load Balancing": [
  null,
  "Lastbalansering"
 ],
 "MAC": [
  null,
  "MAC"
 ],
 "MII (Recommended)": [
  null,
  "MII (Rekommenderas)"
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "MTU must be a positive number": [
  null,
  "MTU måste vara ett positivt tal"
 ],
 "Manual": [
  null,
  "Manuell"
 ],
 "Master": [
  null,
  "Huvudgränssnitt"
 ],
 "Maximum message age $max_age": [
  null,
  "Maximal meddelandeålder $max_age"
 ],
 "Mode": [
  null,
  "Läge"
 ],
 "Monitoring Interval": [
  null,
  "Övervakningsintervall"
 ],
 "Monitoring Targets": [
  null,
  "Övervakningsmål"
 ],
 "NSNA Ping": [
  null,
  "NSNA-ping"
 ],
 "Name": [
  null,
  "Namn"
 ],
 "Network devices and graphs require NetworkManager.": [
  null,
  "Nätverksenheter och -grafer behöver NetworkManager."
 ],
 "NetworkManager is not running.": [
  null,
  "NetworkManager kör inte."
 ],
 "Networking": [
  null,
  "Nätverk"
 ],
 "Networking Logs": [
  null,
  "Nätverksloggar"
 ],
 "No": [
  null,
  "Nej"
 ],
 "No active zones": [
  null,
  ""
 ],
 "No carrier": [
  null,
  "Ingen bärvåg"
 ],
 "No description available": [
  null,
  ""
 ],
 "No open ports": [
  null,
  "Inga öppna portar"
 ],
 "None": [
  null,
  "Inga"
 ],
 "Not available": [
  null,
  "Inte tillgängligt"
 ],
 "Off": [
  null,
  "Av"
 ],
 "On": [
  null,
  "På"
 ],
 "Parent": [
  null,
  "Förälder"
 ],
 "Parent $parent": [
  null,
  "Förälder $parent"
 ],
 "Part of ": [
  null,
  "Del av"
 ],
 "Passive": [
  null,
  "Passiv"
 ],
 "Path cost": [
  null,
  "Sökvägskostnad"
 ],
 "Path cost $path_cost": [
  null,
  "Sökvägskostnad $path_cost"
 ],
 "Permanent": [
  null,
  "Permanent"
 ],
 "Ping Interval": [
  null,
  "Ping-intervall"
 ],
 "Ping Target": [
  null,
  "Ping-mål"
 ],
 "Please install the $0 package": [
  null,
  "Installera paketet $0"
 ],
 "Port number and type do not match": [
  null,
  ""
 ],
 "Ports": [
  null,
  "Portar"
 ],
 "Prefix length": [
  null,
  "Prefixlängd"
 ],
 "Prefix length or Netmask": [
  null,
  "Nätmaskens prefixlängd"
 ],
 "Preparing": [
  null,
  "Förbereder"
 ],
 "Preserve": [
  null,
  "Bevara"
 ],
 "Primary": [
  null,
  "Primär"
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
  "Slumpvis"
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
  "Starta om"
 ],
 "Receiving": [
  null,
  "Tar emot"
 ],
 "Remove $0": [
  null,
  "Ta bort $0"
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
  "Att ta bort <b>$0</b> kommer bryta anslutningen till servern, och kommer göra administrationsgränssnittet otillgängligt."
 ],
 "Restoring connection": [
  null,
  "Återställer förbindelsen"
 ],
 "Round Robin": [
  null,
  "Turas om"
 ],
 "Routes": [
  null,
  "Rutter"
 ],
 "Runner": [
  null,
  "Körare"
 ],
 "STP Forward delay": [
  null,
  "Fördröjning av STP-vidarebefordran"
 ],
 "STP Hello time": [
  null,
  "STP Hello-tid"
 ],
 "STP Maximum message age": [
  null,
  "STP maximal meddelandeålder"
 ],
 "STP Priority": [
  null,
  "STP-prioritet"
 ],
 "Sending": [
  null,
  "Skickar"
 ],
 "Service": [
  null,
  "Tjänst"
 ],
 "Services": [
  null,
  "Tjänster"
 ],
 "Set to": [
  null,
  "Sätt till"
 ],
 "Shared": [
  null,
  "Delad"
 ],
 "Sorted from least trusted to most trusted": [
  null,
  ""
 ],
 "Spanning Tree Protocol": [
  null,
  "Uppspännande-träd-protokollet"
 ],
 "Spanning Tree Protocol (STP)": [
  null,
  "Uppspännande-träd-protokollet (STP)"
 ],
 "Stable": [
  null,
  "Stabilt"
 ],
 "Start Service": [
  null,
  "Starta tjänst"
 ],
 "Status": [
  null,
  "Status"
 ],
 "Sticky": [
  null,
  "Fast"
 ],
 "Switch off $0": [
  null,
  "Stäng av $0"
 ],
 "Switch on $0": [
  null,
  "Sätt på $0"
 ],
 "Switching off <b>$0</b>  will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Att slå av <b>$0</b> kommer bryta anslutningen till servern, och kommer göra administrationsgränssnittet otillgängligt."
 ],
 "Switching off <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Att slå av <b>$0</b> kommer bryta anslutningen till servern, och kommer göra administrationsgränssnittet otillgängligt."
 ],
 "Switching on <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Att sätta på <b>$0</b> kommer bryta anslutningen till servern, och kommer göra administrationsgränssnittet otillgängligt."
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
  "Testar anslutningen"
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  "Användaren <b>$0</b> har inte rättighet att ändra nätverksinställningar"
 ],
 "This device cannot be managed here.": [
  null,
  "Denna enhet kan inte hanteras här."
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
  "Oväntat fel"
 ],
 "Unknown": [
  null,
  "Okänd"
 ],
 "Unknown \"$0\"": [
  null,
  "Okänt ”$0”"
 ],
 "Unknown configuration": [
  null,
  "Okänd konfiguration"
 ],
 "Unknown service name": [
  null,
  ""
 ],
 "Unmanaged Interfaces": [
  null,
  "Ej hanterade gränssnitt"
 ],
 "VLAN": [
  null,
  "VLAN"
 ],
 "VLAN Id": [
  null,
  "VLAN-id"
 ],
 "VLAN Settings": [
  null,
  "VLAN-inställningar"
 ],
 "Waiting": [
  null,
  "Väntar"
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
  "[$0 byte med binärdata]"
 ],
 "[binary data]": [
  null,
  "[binärdata]"
 ],
 "[no data]": [
  null,
  "[inga data]"
 ],
 "show less": [
  null,
  "visa mindre"
 ],
 "show more": [
  null,
  "visa mer"
 ],
 "page-title\u0004Networking": [
  null,
  "Nätverk"
 ]
}));
