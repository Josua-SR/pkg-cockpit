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
nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2;
return plural;
},
  "language": "cs",
  "x-generator": "Zanata 4.6.2"
 },
 "$mtu": [
  null,
  "$mtu"
 ],
 "(Optional)": [
  null,
  "(Volitelné)"
 ],
 "(default)": [
  null,
  "(výchozí)"
 ],
 "1 day": [
  null,
  "1 den"
 ],
 "1 hour": [
  null,
  "1 hodina"
 ],
 "1 week": [
  null,
  "1 týden"
 ],
 "5 minutes": [
  null,
  "5 minut"
 ],
 "6 hours": [
  null,
  "6 hodin"
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
  "ARP monitorování"
 ],
 "ARP Ping": [
  null,
  "ARP ping"
 ],
 "Active": [
  null,
  "Aktivní"
 ],
 "Active Backup": [
  null,
  "Aktivní záloha"
 ],
 "Active zones": [
  null,
  "Aktivní zóny"
 ],
 "Adaptive load balancing": [
  null,
  "Přizpůsobující se rozkládání zátěže"
 ],
 "Adaptive transmit load balancing": [
  null,
  "Přizpůsobující se rozkládání přenosové zátěže odesílání"
 ],
 "Add $0": [
  null,
  "Přidat $0"
 ],
 "Add Bond": [
  null,
  "Přidat sloučení linek"
 ],
 "Add Bridge": [
  null,
  "Přidat síťový most"
 ],
 "Add Ports": [
  null,
  "Přidat porty"
 ],
 "Add Services": [
  null,
  "Přidat služby"
 ],
 "Add Team": [
  null,
  "Přidat tým"
 ],
 "Add VLAN": [
  null,
  "Přidat VLAN"
 ],
 "Add Zone": [
  null,
  "Přidat zónu"
 ],
 "Add ports to the following zones:": [
  null,
  "Přidat porty do následujících zón:"
 ],
 "Add services to following zones:": [
  null,
  "Přidat služby do následujících zón:"
 ],
 "Add zone": [
  null,
  "Přidat zónu"
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Přidání <b>$0</b> přeruší spojení se serverem a znepřístupní tak rozhraní pro jeho správu."
 ],
 "Adding custom ports will reload firewalld. A reload will result in the loss of any runtime-only configuration!": [
  null,
  "Přidání uživatelsky určených portů znovunačte firewalld. To povede ke ztrátě jakéhokoli nastavení, které bylo učiněno za běhu a neuloženo!"
 ],
 "Additional DNS $val": [
  null,
  "Další DNS $val"
 ],
 "Additional DNS Search Domains $val": [
  null,
  "Další DNS domény k prohledávání $val"
 ],
 "Additional address $val": [
  null,
  "Další adresa $val"
 ],
 "Address $val": [
  null,
  "Adresa $val"
 ],
 "Addresses": [
  null,
  "Adresy"
 ],
 "Allowed Addresses": [
  null,
  "Adresy, které umožněny"
 ],
 "Allowed Services": [
  null,
  "Dovolené služby"
 ],
 "Apply": [
  null,
  "Použít"
 ],
 "Authenticating": [
  null,
  "Ověřování"
 ],
 "Automatic": [
  null,
  "Automaticky"
 ],
 "Automatic (DHCP only)": [
  null,
  "Automaticky (pouze DHCP)"
 ],
 "Automatic (DHCP)": [
  null,
  "Automaticky (DHCP)"
 ],
 "Balancer": [
  null,
  "Rozkládání zátěže"
 ],
 "Bond": [
  null,
  "Vazba"
 ],
 "Bond Settings": [
  null,
  "Nastavení vazby"
 ],
 "Bridge": [
  null,
  "Most"
 ],
 "Bridge Port Settings": [
  null,
  "Nastavení portu mostu"
 ],
 "Bridge Settings": [
  null,
  "Nastavení mostu"
 ],
 "Bridge port": [
  null,
  "Port mostu"
 ],
 "Broadcast": [
  null,
  "Vysílání"
 ],
 "Broken configuration": [
  null,
  "Chybné nastavení"
 ],
 "Cancel": [
  null,
  "Storno"
 ],
 "Carrier": [
  null,
  "Nosný signál"
 ],
 "Change the settings": [
  null,
  "Změnit nastavení"
 ],
 "Changing the settings will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Změna nastavení přeruší spojení se serverem a znepřístupní tak uživatelské rozhraní pro jeho správu."
 ],
 "Checking IP": [
  null,
  "Ověřuje se IP adresa"
 ],
 "Close": [
  null,
  "Zavřít"
 ],
 "Comma-separated ports, ranges, and aliases are accepted": [
  null,
  "Jsou přijímány čárkou oddělované porty, rozsahy a alternativní názvy"
 ],
 "Configure": [
  null,
  "Nastavit"
 ],
 "Configuring": [
  null,
  "Nastavuje se"
 ],
 "Configuring IP": [
  null,
  "Nastavuje se IP adresa"
 ],
 "Connect automatically": [
  null,
  "Připojit se automaticky"
 ],
 "Connection will be lost": [
  null,
  "Spojení bude ztraceno"
 ],
 "Create it": [
  null,
  "Vytvořit to"
 ],
 "Creating this VLAN will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Vytvoření této VLAN přeruší spojení se serverem a znepřístupní tak rozhraní pro jeho správu."
 ],
 "Creating this bond will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Vytvoření tohoto sdružení linek přeruší spojení se serverem a znepřístupní tak rozhraní pro jeho správu."
 ],
 "Creating this bridge will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Vytvoření tohoto mostu přeruší spojení se serverem a znepřístupní tak rozhraní pro jeho správu."
 ],
 "Creating this team will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Vytvoření tohoto týmu přeruší spojení se serverem a znepřístupní tak rozhraní pro jeho správu."
 ],
 "Custom Ports": [
  null,
  "Uživatelsky určené porty"
 ],
 "Custom zones": [
  null,
  "Uživatelsky určené zóny"
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
  "DNS prohledávané domény"
 ],
 "DNS Search Domains $val": [
  null,
  "Prohledávat DNS domény $val"
 ],
 "Deactivating": [
  null,
  "Deaktivuje se"
 ],
 "Delete": [
  null,
  "Smazat"
 ],
 "Delete $0": [
  null,
  "Smazat $0"
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Smazání <b>$0</b> přeruší spojení se serverem a znepřístupní tak rozhraní pro jeho správu."
 ],
 "Description": [
  null,
  "Popis"
 ],
 "Details": [
  null,
  "Podrobnosti"
 ],
 "Disabled": [
  null,
  "Vypnuto"
 ],
 "Enable Service": [
  null,
  "Zapnout službu"
 ],
 "Entire subnet": [
  null,
  "Celá podsíť"
 ],
 "Ethernet MAC": [
  null,
  "Ethernet MAC adresa"
 ],
 "Ethernet MTU": [
  null,
  "Ethernet MTU"
 ],
 "Ethtool": [
  null,
  "Ethtool"
 ],
 "Example: 22,ssh,8080,5900-5910": [
  null,
  "Příklad: 22,ssh,8080,5900-5910"
 ],
 "Example: 88,2019,nfs,rsync": [
  null,
  "Příkaz: 88,2019,nfs,rsync"
 ],
 "Failed": [
  null,
  "Neúspěšné"
 ],
 "Failed to add port": [
  null,
  "Přidání portu se nezdařilo"
 ],
 "Failed to add service": [
  null,
  "Službu se nepodařilo přidat"
 ],
 "Failed to add zone": [
  null,
  "Zónu se nepodařilo přidat"
 ],
 "Failed to remove service": [
  null,
  "Službu se nepodařilo odbrat"
 ],
 "Filter Services": [
  null,
  "Filtrovat služby"
 ],
 "Firewall": [
  null,
  "Brána firewall"
 ],
 "Firewall is not available": [
  null,
  "Brána firewall není k dispozici"
 ],
 "Forward delay $forward_delay": [
  null,
  "Prodleva přeposlání $forward_delay"
 ],
 "General": [
  null,
  "Obecné"
 ],
 "Go to now": [
  null,
  "Přejít na nyní"
 ],
 "Hair Pin mode": [
  null,
  "Hair Pin režim"
 ],
 "Hairpin mode": [
  null,
  "Hair Pin režim"
 ],
 "Hello time $hello_time": [
  null,
  "Oznamovací čas $hello_time"
 ],
 "IP Address": [
  null,
  "IP adresa"
 ],
 "IP Range": [
  null,
  "Rozsah IP adres"
 ],
 "IP Settings": [
  null,
  "Nastavení IP"
 ],
 "IPv4": [
  null,
  "IPv4"
 ],
 "IPv4 Settings": [
  null,
  "Nastavení IPv4"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "Nastavení IPv6"
 ],
 "Id $id": [
  null,
  "Identif. $id"
 ],
 "Ignore": [
  null,
  "Ignorovat"
 ],
 "Inactive": [
  null,
  "Neaktivní"
 ],
 "Included services": [
  null,
  "Obsažené služby"
 ],
 "Interfaces": [
  null,
  "Rozhraní"
 ],
 "Invalid address $0": [
  null,
  "Neplatná adresa $0"
 ],
 "Invalid metric $0": [
  null,
  "Neplatná metrika $0"
 ],
 "Invalid port number": [
  null,
  "Neplatné číslo portu"
 ],
 "Invalid prefix $0": [
  null,
  "Neplatná předpona $0"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "Neplatná předpona nebo maska sítě $0"
 ],
 "Invalid range": [
  null,
  "Neplatný rozsah"
 ],
 "Keep connection": [
  null,
  "Zachovat spojení"
 ],
 "LACP Key": [
  null,
  "LACP klíč"
 ],
 "Link Monitoring": [
  null,
  "Monitorování linky"
 ],
 "Link Watch": [
  null,
  "Hlídání linky"
 ],
 "Link down delay": [
  null,
  "Prodleva neaktivní linky"
 ],
 "Link local": [
  null,
  "Lokální propoj"
 ],
 "Link up delay": [
  null,
  "Prodleva aktivní linky"
 ],
 "Load Balancing": [
  null,
  "Rozkládání zátěže"
 ],
 "MAC": [
  null,
  "MAC"
 ],
 "MII (Recommended)": [
  null,
  "MII (doporučeno)"
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "MTU must be a positive number": [
  null,
  "Je třeba, aby MTU bylo kladné číslo"
 ],
 "Manual": [
  null,
  "Ruční"
 ],
 "Master": [
  null,
  "Hlavní"
 ],
 "Maximum message age $max_age": [
  null,
  "Maximální stáří zpráv $max_age"
 ],
 "Mode": [
  null,
  "Režim"
 ],
 "Monitoring Interval": [
  null,
  "Interval monitorování"
 ],
 "Monitoring Targets": [
  null,
  "Cíle monitorování"
 ],
 "NSNA Ping": [
  null,
  "NSNA Ping"
 ],
 "Name": [
  null,
  "Název"
 ],
 "Network devices and graphs require NetworkManager.": [
  null,
  "Síťová zařízení a grafy vyžadují NetworkManager"
 ],
 "NetworkManager is not running.": [
  null,
  "NetworkManager není spuštěný."
 ],
 "Networking": [
  null,
  "Síť"
 ],
 "Networking Logs": [
  null,
  "Záznamy událostí sítě"
 ],
 "No": [
  null,
  "Ne"
 ],
 "No active zones": [
  null,
  "Žádné aktivní zóny"
 ],
 "No carrier": [
  null,
  "Bez signálu"
 ],
 "No description available": [
  null,
  "Není k dispozici žádný popis"
 ],
 "No open ports": [
  null,
  "Žádné otevřené porty"
 ],
 "None": [
  null,
  "Žádný"
 ],
 "Not available": [
  null,
  "Není k dispozici"
 ],
 "Parent": [
  null,
  "Nadřazené"
 ],
 "Parent $parent": [
  null,
  "Nadřazené $parent"
 ],
 "Part of ": [
  null,
  "Součástí"
 ],
 "Passive": [
  null,
  "Pasivní"
 ],
 "Path cost": [
  null,
  "Náklady trasy"
 ],
 "Path cost $path_cost": [
  null,
  "Náklady trasy $path_cost"
 ],
 "Permanent": [
  null,
  "Trvalá"
 ],
 "Ping Interval": [
  null,
  "Interval pro ping"
 ],
 "Ping Target": [
  null,
  "Cíl pro ping"
 ],
 "Please install the $0 package": [
  null,
  "Nainstalujte balíček $0"
 ],
 "Port number and type do not match": [
  null,
  "Číslo a typ portu si neodpovídají"
 ],
 "Ports": [
  null,
  "Porty"
 ],
 "Prefix length": [
  null,
  "Délka předpony"
 ],
 "Prefix length or Netmask": [
  null,
  "Délka předpony nebo maska sítě"
 ],
 "Preparing": [
  null,
  "Příprava"
 ],
 "Preserve": [
  null,
  "Zachovat"
 ],
 "Primary": [
  null,
  "Primární"
 ],
 "Priority": [
  null,
  "Priorita"
 ],
 "Priority $priority": [
  null,
  "Priorita $priority"
 ],
 "Random": [
  null,
  "Náhodné"
 ],
 "Range": [
  null,
  "Rozsah"
 ],
 "Range must be strictly ordered": [
  null,
  "Je třeba, aby rozsah byl striktně řazený"
 ],
 "Reboot": [
  null,
  "Restartovat"
 ],
 "Receiving": [
  null,
  "Příchozí"
 ],
 "Remove $0": [
  null,
  "Odebrat $0"
 ],
 "Remove service": [
  null,
  "Odebrat službu"
 ],
 "Remove service from zones": [
  null,
  "Odebrat službu ze zón"
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Odebrání <b>$0</b> přeruší spojení se serverem a znepřístupní tak rozhraní pro jeho správu."
 ],
 "Restoring connection": [
  null,
  "Obnovování spojení"
 ],
 "Round Robin": [
  null,
  "Round Robin"
 ],
 "Routes": [
  null,
  "Trasy"
 ],
 "Runner": [
  null,
  "Spouštěč"
 ],
 "STP Forward delay": [
  null,
  "STP prodleva přeposílání"
 ],
 "STP Hello time": [
  null,
  "STP uvítací doba"
 ],
 "STP Maximum message age": [
  null,
  "STP maximální stáří zprávy"
 ],
 "STP Priority": [
  null,
  "STP priorita"
 ],
 "Sending": [
  null,
  "Odchozí"
 ],
 "Service": [
  null,
  "Služba"
 ],
 "Services": [
  null,
  "Služby"
 ],
 "Set to": [
  null,
  "Nastavit na"
 ],
 "Shared": [
  null,
  "Sdílené"
 ],
 "Sorted from least trusted to most trusted": [
  null,
  "Seřazeno od nejméně po nejvíce důvěryhodné"
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
  "Stabilní"
 ],
 "Start Service": [
  null,
  "Spustit službu"
 ],
 "Status": [
  null,
  "Stav"
 ],
 "Sticky": [
  null,
  "Lepkavé"
 ],
 "Switch off $0": [
  null,
  "Vypnout $0"
 ],
 "Switch on $0": [
  null,
  "Zapnout $0"
 ],
 "Switching off <b>$0</b>  will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Vypnutí <b>$0</b> přeruší spojení se serverem a znepřístupní tak rozhraní pro jeho správu."
 ],
 "Switching off <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Vypnutí <b>$0</b> přeruší spojení se serverem a znepřístupní tak rozhraní pro jeho správu."
 ],
 "Switching on <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Zapnutí <b>$0</b> přeruší spojení se serverem a znepřístupní tak rozhraní pro jeho správu."
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Team": [
  null,
  "Tým"
 ],
 "Team Port": [
  null,
  "Port týmu"
 ],
 "Team Port Settings": [
  null,
  "Nastavení portu týmu"
 ],
 "Team Settings": [
  null,
  "Nastavení týmu"
 ],
 "Testing connection": [
  null,
  "Zkouška spojení"
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  "Uživatel <b>$0</b> není oprávněn upravovat nastavení sítě"
 ],
 "This device cannot be managed here.": [
  null,
  "Toto zařízení zde nelze spravovat."
 ],
 "Trust level": [
  null,
  "Stupeň důvěryhodnosti"
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Neočekávaná chyba"
 ],
 "Unknown": [
  null,
  "Neznámé"
 ],
 "Unknown \"$0\"": [
  null,
  "Neznámé „$0“"
 ],
 "Unknown configuration": [
  null,
  "Neznámé nastavení"
 ],
 "Unknown service name": [
  null,
  "Neznámý název služby"
 ],
 "Unmanaged Interfaces": [
  null,
  "Nespravovaná rozhraní"
 ],
 "VLAN": [
  null,
  "VLAN"
 ],
 "VLAN Id": [
  null,
  "Identifikátor VLAN"
 ],
 "VLAN Settings": [
  null,
  "Nastavení VLAN"
 ],
 "Waiting": [
  null,
  "Čeká se"
 ],
 "XOR": [
  null,
  "XOR"
 ],
 "Yes": [
  null,
  "Ano"
 ],
 "You are not authorized to modify the firewall.": [
  null,
  "Nemáte oprávnění upravovat bránu firewall"
 ],
 "Zone": [
  null,
  "Zóna"
 ],
 "Zones": [
  null,
  "Zóny"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 bajtů binárních dat]"
 ],
 "[binary data]": [
  null,
  "[binarní data]"
 ],
 "[no data]": [
  null,
  "[žádná data]"
 ],
 "show less": [
  null,
  "zobrazit méně"
 ],
 "show more": [
  null,
  "zobrazit více"
 ],
 "page-title\u0004Networking": [
  null,
  "Síť"
 ]
}));
