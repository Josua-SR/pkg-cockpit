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
  "language": "it",
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
  "1 giorno"
 ],
 "1 hour": [
  null,
  "1 ora"
 ],
 "1 week": [
  null,
  "1 settimana"
 ],
 "5 minutes": [
  null,
  "5 minuti"
 ],
 "6 hours": [
  null,
  "6 ore"
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
  "Monitoraggio ARP"
 ],
 "ARP Ping": [
  null,
  "ARP Ping"
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
  "Aggiungi $0"
 ],
 "Add Bond": [
  null,
  "Aggiungi bond"
 ],
 "Add Bridge": [
  null,
  "Aggiungi bridge"
 ],
 "Add Ports": [
  null,
  ""
 ],
 "Add Services": [
  null,
  "Aggiungi servizi"
 ],
 "Add Team": [
  null,
  "Aggiungi team"
 ],
 "Add VLAN": [
  null,
  "Aggiungi VLAN"
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "L'aggiunta di I <b>$0</b>interromperà la connessione al server e renderà l'interfaccia utente di amministrazione non disponibile."
 ],
 "Additional DNS $val": [
  null,
  "DNS aggiuntivo $val"
 ],
 "Additional DNS Search Domains $val": [
  null,
  "Domini di ricerca DNS aggiuntivi $val"
 ],
 "Additional address $val": [
  null,
  "Indirizzo aggiuntivo $val"
 ],
 "Address $val": [
  null,
  "Indirizzo $val"
 ],
 "Addresses": [
  null,
  "Indirizzi"
 ],
 "Allowed Services": [
  null,
  "Servizi consentiti"
 ],
 "Apply": [
  null,
  "Applica"
 ],
 "Authenticating": [
  null,
  "Autenticazione"
 ],
 "Automatic": [
  null,
  "Automatico"
 ],
 "Automatic (DHCP only)": [
  null,
  "Automatico (solo DHCP)"
 ],
 "Automatic (DHCP)": [
  null,
  "Automatico (DHCP)"
 ],
 "Balancer": [
  null,
  "Balancer"
 ],
 "Bond": [
  null,
  "Bond"
 ],
 "Bond Settings": [
  null,
  "Impostazioni bond"
 ],
 "Bridge": [
  null,
  "Bridge"
 ],
 "Bridge Port Settings": [
  null,
  "Impostazioni della porta del bridge"
 ],
 "Bridge Settings": [
  null,
  "Impostazioni del bridge"
 ],
 "Bridge port": [
  null,
  "Porta bridge"
 ],
 "Broadcast": [
  null,
  "Broadcast"
 ],
 "Broken configuration": [
  null,
  "Configurazione rotta"
 ],
 "Cancel": [
  null,
  "Annulla"
 ],
 "Carrier": [
  null,
  "Carrier"
 ],
 "Change the settings": [
  null,
  "Modificare le impostazioni"
 ],
 "Changing the settings will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "La modifica delle impostazioni interromperà la connessione al server e renderà l'interfaccia utente di amministrazione non disponibile."
 ],
 "Checking IP": [
  null,
  "Controllo dell'IP"
 ],
 "Close": [
  null,
  "Chiudi"
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
  "Configurazione"
 ],
 "Configuring IP": [
  null,
  "Configurazione dell'IP"
 ],
 "Connect automatically": [
  null,
  "Connessione automatica"
 ],
 "Connection will be lost": [
  null,
  "La connessione andrà persa"
 ],
 "Create it": [
  null,
  "Crea"
 ],
 "Creating this VLAN will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "La creazione di questa VLAN interromperà la connessione al server e renderà l'interfaccia utente di amministrazione non disponibile."
 ],
 "Creating this bond will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "La creazione di questo bond interromperà la connessione al server e renderà l'interfaccia utente di amministrazione non disponibile."
 ],
 "Creating this bridge will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "La creazione di questo bridge interromperà la connessione al server e renderà l'interfaccia utente di amministrazione non disponibile."
 ],
 "Creating this team will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "La creazione di questo team interromperà la connessione al server e renderà l'interfaccia utente di amministrazione non disponibile."
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
  "Domini di ricerca DNS"
 ],
 "DNS Search Domains $val": [
  null,
  "Domini di ricerca DNS $val"
 ],
 "Deactivating": [
  null,
  "Disattivazione"
 ],
 "Delete": [
  null,
  "Cancella"
 ],
 "Delete $0": [
  null,
  "Cancellare $0"
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "L'eliminazione di xcelection <b>$0</b>interromperà la connessione al server e renderà l'interfaccia utente di amministrazione non disponibile."
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
  "Attivare il servizio"
 ],
 "Ethernet MAC": [
  null,
  "Ethernet MAC"
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
  "Non riuscito"
 ],
 "Filter Services": [
  null,
  "Servizi di filtraggio"
 ],
 "Firewall": [
  null,
  "Firewall"
 ],
 "Firewall is not available": [
  null,
  "Firewall non è disponibile"
 ],
 "Forward delay $forward_delay": [
  null,
  "Ritardo in avanti $forward_ritardo"
 ],
 "General": [
  null,
  "Generale"
 ],
 "Go to now": [
  null,
  "Vai a ora"
 ],
 "Hair Pin mode": [
  null,
  "Capelli Modalità pin"
 ],
 "Hairpin mode": [
  null,
  "Modalità hairpin"
 ],
 "Hello time $hello_time": [
  null,
  "Ciao tempo $hello_time"
 ],
 "IP Address": [
  null,
  "Indirizzo IP"
 ],
 "IP Settings": [
  null,
  "Impostazioni IP"
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
  "Id $id"
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
  "Indirizzo non valido $0"
 ],
 "Invalid metric $0": [
  null,
  "Metrica non valida $0"
 ],
 "Invalid port number": [
  null,
  ""
 ],
 "Invalid prefix $0": [
  null,
  "Prefisso non valido $0"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "Prefisso o maschera di rete non validi $0"
 ],
 "Invalid range": [
  null,
  ""
 ],
 "Keep connection": [
  null,
  "Mantenere la connessione"
 ],
 "LACP Key": [
  null,
  "Chiave LACP"
 ],
 "Link Monitoring": [
  null,
  "Monitoraggio dei collegamenti"
 ],
 "Link Watch": [
  null,
  "Orologio Link"
 ],
 "Link down delay": [
  null,
  "Ritardo caduta collegamento"
 ],
 "Link local": [
  null,
  "Collegamento locale"
 ],
 "Link up delay": [
  null,
  "Ritardo ripristino collegamento"
 ],
 "Load Balancing": [
  null,
  "Bilanciamento del carico"
 ],
 "MAC": [
  null,
  "MAC"
 ],
 "MII (Recommended)": [
  null,
  "MII (consigliato)"
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "MTU must be a positive number": [
  null,
  "MTU deve essere un numero positivo"
 ],
 "Manual": [
  null,
  "Manuale"
 ],
 "Master": [
  null,
  "Maestro"
 ],
 "Maximum message age $max_age": [
  null,
  "Età massima del messaggio $max_età"
 ],
 "Members": [
  null,
  "Membri"
 ],
 "Mode": [
  null,
  "Modalità"
 ],
 "Monitoring Interval": [
  null,
  "Intervallo di monitoraggio"
 ],
 "Monitoring Targets": [
  null,
  "Obiettivi di monitoraggio"
 ],
 "NSNA Ping": [
  null,
  "NSNA Ping"
 ],
 "Name": [
  null,
  "Nome"
 ],
 "Network devices and graphs require NetworkManager.": [
  null,
  "I dispositivi di rete e i grafici richiedono NetworkManager."
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
  "Log di rete"
 ],
 "No": [
  null,
  "No"
 ],
 "No carrier": [
  null,
  "Nessun vettore"
 ],
 "No open ports": [
  null,
  "Nessuna porta aperta"
 ],
 "Not available": [
  null,
  "Non disponibile"
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
  "Padre"
 ],
 "Parent $parent": [
  null,
  "Genitore $parent"
 ],
 "Part of ": [
  null,
  "Parte di "
 ],
 "Passive": [
  null,
  "Passivo"
 ],
 "Path cost": [
  null,
  "Costo percorso"
 ],
 "Path cost $path_cost": [
  null,
  "Costo della traiettoria $path_costo"
 ],
 "Permanent": [
  null,
  "Salvata"
 ],
 "Ping Interval": [
  null,
  "Intervallo ping"
 ],
 "Ping Target": [
  null,
  "Target ping"
 ],
 "Please install the $0 package": [
  null,
  "Si prega di installare il $0pacchetto"
 ],
 "Port number and type do not match": [
  null,
  ""
 ],
 "Ports": [
  null,
  "Porte"
 ],
 "Prefix length": [
  null,
  "Lunghezza prefisso"
 ],
 "Prefix length or Netmask": [
  null,
  "Lunghezza prefisso o maschera di rete"
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
  "Priorità $priority"
 ],
 "Random": [
  null,
  "Casuale"
 ],
 "Range must be strictly ordered": [
  null,
  ""
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
  "Rimuovere $0"
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "La rimozione di I <b>$0</b>interromperà la connessione al server e renderà l'interfaccia utente di amministrazione non disponibile."
 ],
 "Restoring connection": [
  null,
  "Ripristino della connessione"
 ],
 "Round Robin": [
  null,
  "Round robin"
 ],
 "Routes": [
  null,
  "Rotte"
 ],
 "Runner": [
  null,
  "Esecutore"
 ],
 "STP Forward delay": [
  null,
  "STP Ritardo in avanti"
 ],
 "STP Hello time": [
  null,
  "STP Ciao tempo"
 ],
 "STP Maximum message age": [
  null,
  "STP Età massima del messaggio"
 ],
 "STP Priority": [
  null,
  "Priorità STP"
 ],
 "Sending": [
  null,
  "Invio"
 ],
 "Service": [
  null,
  "Servizio"
 ],
 "Services": [
  null,
  "Servizi"
 ],
 "Set to": [
  null,
  "Impostare su"
 ],
 "Shared": [
  null,
  "Condivisa"
 ],
 "Spanning Tree Protocol": [
  null,
  "Spanning Tree Protocol"
 ],
 "Spanning Tree Protocol (STP)": [
  null,
  "Protocollo dell'albero di scansione (STP)"
 ],
 "Stable": [
  null,
  "Stabile"
 ],
 "Start Service": [
  null,
  "Avviare il servizio"
 ],
 "Status": [
  null,
  "Stato"
 ],
 "Sticky": [
  null,
  "Sticky"
 ],
 "Switch off $0": [
  null,
  "Spegni $0"
 ],
 "Switch on $0": [
  null,
  "Accendi $0"
 ],
 "Switching off <b>$0</b>  will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "La disattivazione di ² interromperà la connessione al server e renderà l'interfaccia utente di amministrazione non disponibile."
 ],
 "Switching off <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "La disattivazione di <b>$0</b>questa opzione interromperà la connessione al server e renderà l'interfaccia utente di amministrazione non disponibile."
 ],
 "Switching on <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "L<b>$0</b>'attivazione di questa opzione interromperà la connessione al server e renderà l'interfaccia utente di amministrazione non disponibile."
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
  "Impostazioni della porta del team"
 ],
 "Team Settings": [
  null,
  "Impostazioni della squadra"
 ],
 "Testing connection": [
  null,
  "Test connessione"
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  "L'utente non <b>$0</b>è autorizzato a modificare le impostazioni di rete"
 ],
 "This device cannot be managed here.": [
  null,
  "Questo dispositivo non può essere gestito qui."
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Errore imprevisto"
 ],
 "Unknown": [
  null,
  "Sconosciuto"
 ],
 "Unknown \"$0\"": [
  null,
  "Sconosciuto \" \" \" \" \""
 ],
 "Unknown configuration": [
  null,
  "Configurazione sconosciuta"
 ],
 "Unknown service name": [
  null,
  ""
 ],
 "Unmanaged Interfaces": [
  null,
  "Interfacce non gestite"
 ],
 "VLAN": [
  null,
  "VLAN"
 ],
 "VLAN Id": [
  null,
  "ID VLAN"
 ],
 "VLAN Settings": [
  null,
  "Impostazioni VLAN"
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
  "Non sei autorizzato a modificare il firewall."
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0byte di dati binari]"
 ],
 "[binary data]": [
  null,
  "[dati binari]"
 ],
 "[no data]": [
  null,
  "[nessun dato]"
 ],
 "page-title\u0004Networking": [
  null,
  "Rete"
 ]
}));
