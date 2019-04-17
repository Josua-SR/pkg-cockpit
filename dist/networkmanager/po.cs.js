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
  ""
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
  ""
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
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Přidání <b>$0</b> přeruší spojení se serverem a znepřístupní tak rozhraní pro jeho správu."
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
  ""
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
  ""
 ],
 "Example: 88,2019,nfs,rsync": [
  null,
  ""
 ],
 "Failed": [
  null,
  "Neúspěšné"
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
  ""
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
  ""
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
 "Members": [
  null,
  "Členové"
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
 "No carrier": [
  null,
  "Bez signálu"
 ],
 "No open ports": [
  null,
  "Žádné otevřené porty"
 ],
 "Not available": [
  null,
  "Není k dispozici"
 ],
 "Off": [
  null,
  "Vypnuto"
 ],
 "On": [
  null,
  "Zapnuto"
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
  ""
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
 "Range must be strictly ordered": [
  null,
  ""
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
  ""
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
 "page-title\u0004Networking": [
  null,
  "Síť"
 ]
}));
