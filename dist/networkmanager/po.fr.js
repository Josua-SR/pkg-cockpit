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
nplurals=2; plural=(n > 1);
return plural;
},
  "language": "fr",
  "x-generator": "Zanata 4.6.2"
 },
 "$mtu": [
  null,
  "$mtu"
 ],
 "(Optional)": [
  null,
  "(facultatif)"
 ],
 "(default)": [
  null,
  "(défaut)"
 ],
 "1 day": [
  null,
  "Un jour"
 ],
 "1 hour": [
  null,
  "1 heure"
 ],
 "1 week": [
  null,
  "1 semaine"
 ],
 "5 minutes": [
  null,
  "5 minutes"
 ],
 "6 hours": [
  null,
  "6 heures"
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
  "Surveillance ARP"
 ],
 "ARP Ping": [
  null,
  "ARP Ping"
 ],
 "Active": [
  null,
  "actif"
 ],
 "Active Backup": [
  null,
  "Sauvegarde active"
 ],
 "Active zones": [
  null,
  "Zones actives"
 ],
 "Adaptive load balancing": [
  null,
  "Équilibrage de charge adaptatif"
 ],
 "Adaptive transmit load balancing": [
  null,
  "Equilibrage adaptatif de la charge d’émission"
 ],
 "Add $0": [
  null,
  "Ajouter $0"
 ],
 "Add Bond": [
  null,
  "Ajouter un lien"
 ],
 "Add Bridge": [
  null,
  "Ajouter un pont"
 ],
 "Add Ports": [
  null,
  "Ajouter des ports"
 ],
 "Add Services": [
  null,
  "Ajouter services"
 ],
 "Add Team": [
  null,
  "Ajouter une équipe"
 ],
 "Add VLAN": [
  null,
  "Ajouter un VLAN"
 ],
 "Add Zone": [
  null,
  "Ajouter une zone"
 ],
 "Add ports to the following zones:": [
  null,
  "Ajouter des ports aux zones suivantes :"
 ],
 "Add services to following zones:": [
  null,
  "Ajouter des services aux zones suivantes :"
 ],
 "Add zone": [
  null,
  "Ajouter une zone"
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Ajouter <b>$0</b> interrompra la connexion au serveur et rendra l’interface utilisateur d’administration indisponible."
 ],
 "Adding custom ports will reload firewalld. A reload will result in the loss of any runtime-only configuration!": [
  null,
  "Ajouter des ports personnalisés rechargera firwalld. Le chargement à nouveau entraînera la perte des configurations d'exécution-uniquement."
 ],
 "Additional DNS $val": [
  null,
  "DNS supplémentaire $val"
 ],
 "Additional DNS Search Domains $val": [
  null,
  "Domaines de recherche DNS supplémentaires $val"
 ],
 "Additional address $val": [
  null,
  "Adresse supplémentaire $val"
 ],
 "Address $val": [
  null,
  "Adresse $val"
 ],
 "Addresses": [
  null,
  "Adresses"
 ],
 "Allowed Addresses": [
  null,
  "Adresses autorisées"
 ],
 "Allowed Services": [
  null,
  "Services autorisés"
 ],
 "Apply": [
  null,
  "Appliquer"
 ],
 "Authenticating": [
  null,
  "Authentification"
 ],
 "Automatic": [
  null,
  "Automatique"
 ],
 "Automatic (DHCP only)": [
  null,
  "Automatique (DHCP uniquement)"
 ],
 "Automatic (DHCP)": [
  null,
  "Automatique (DHCP)"
 ],
 "Balancer": [
  null,
  "Équilibreur de charge"
 ],
 "Bond": [
  null,
  "Liaison"
 ],
 "Bond Settings": [
  null,
  "Paramètres de liaison"
 ],
 "Bridge": [
  null,
  "Pont"
 ],
 "Bridge Port Settings": [
  null,
  "Paramètres du port de Bridge"
 ],
 "Bridge Settings": [
  null,
  "Paramètres de Bridge"
 ],
 "Bridge port": [
  null,
  "Port de Bridge"
 ],
 "Broadcast": [
  null,
  "Diffuser"
 ],
 "Broken configuration": [
  null,
  "Configuration endommagée"
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Carrier": [
  null,
  "Opérateur"
 ],
 "Change the settings": [
  null,
  "Modifier les paramètres"
 ],
 "Changing the settings will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "La modification des paramètres interrompt la connexion au serveur et rend l’interface utilisateur d’administration indisponible."
 ],
 "Checking IP": [
  null,
  "Vérification de l’adresse IP"
 ],
 "Close": [
  null,
  "Fermer"
 ],
 "Comma-separated ports, ranges, and aliases are accepted": [
  null,
  "Plusieurs ports, pages et alias séparés par des virgules sont acceptés"
 ],
 "Configure": [
  null,
  "Configurer"
 ],
 "Configuring": [
  null,
  "Configuration en cours"
 ],
 "Configuring IP": [
  null,
  "Configuration de l’adresse IP"
 ],
 "Connect automatically": [
  null,
  "Connecter automatiquement"
 ],
 "Connection will be lost": [
  null,
  "La connexion sera perdue"
 ],
 "Create it": [
  null,
  "Créez-le"
 ],
 "Creating this VLAN will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "La création de ce VLAN interrompt la connexion au serveur et rend l’interface utilisateur d’administration indisponible."
 ],
 "Creating this bond will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "La création de cette liaison interrompt la connexion au serveur et rend l’interface utilisateur d’administration indisponible."
 ],
 "Creating this bridge will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "La création de ce pont interrompt la connexion au serveur et rend l’interface utilisateur d’administration indisponible."
 ],
 "Creating this team will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "La création de cette équipe interrompt la connexion au serveur et rend l’interface utilisateur d’administration indisponible."
 ],
 "Custom Ports": [
  null,
  "Ports personnalisés"
 ],
 "Custom zones": [
  null,
  "Zones personnalisées"
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
  "Domaines de recherche DNS"
 ],
 "DNS Search Domains $val": [
  null,
  "Domaines de recherche DNS $val"
 ],
 "Deactivating": [
  null,
  "Désactivation en cours"
 ],
 "Delete": [
  null,
  "Supprimer"
 ],
 "Delete $0": [
  null,
  "Supprimer $0"
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "La suppression de <b>$0</b> interrompra la connexion au serveur et rendra l’interface utilisateur d’administration indisponible."
 ],
 "Description": [
  null,
  "La description"
 ],
 "Details": [
  null,
  "Détails"
 ],
 "Disabled": [
  null,
  "Désactivé"
 ],
 "Enable Service": [
  null,
  "Activer le service"
 ],
 "Entire subnet": [
  null,
  "Ensemble du sous-réseau"
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
  "Exemple : 22,ssh,8080,5900-5910"
 ],
 "Example: 88,2019,nfs,rsync": [
  null,
  "Exemple : 88,2019,nfs,rsync"
 ],
 "Failed": [
  null,
  "Échoué"
 ],
 "Failed to add port": [
  null,
  "N'a pas pu ajouter le port"
 ],
 "Failed to add service": [
  null,
  "N'a pas pu ajouter le service"
 ],
 "Failed to add zone": [
  null,
  "N'a pas pu ajouter de zone"
 ],
 "Failed to remove service": [
  null,
  "N'a pas pu supprimer le service"
 ],
 "Filter Services": [
  null,
  "Services de filtrage"
 ],
 "Firewall": [
  null,
  "Pare-feu"
 ],
 "Firewall is not available": [
  null,
  "Le pare-feu n’est pas disponible"
 ],
 "Forward delay $forward_delay": [
  null,
  "Délai d’attente $forward_delay"
 ],
 "General": [
  null,
  "Général"
 ],
 "Go to now": [
  null,
  "Aller à maintenant"
 ],
 "Hair Pin mode": [
  null,
  "Mode Hair Pin"
 ],
 "Hairpin mode": [
  null,
  "Mode Hair Pin"
 ],
 "Hello time $hello_time": [
  null,
  "Bonjour $hello_time"
 ],
 "IP Address": [
  null,
  "Adresse IP"
 ],
 "IP Range": [
  null,
  "Gamme d'adresses IP"
 ],
 "IP Settings": [
  null,
  "Paramètres IP"
 ],
 "IPv4": [
  null,
  "IPv4"
 ],
 "IPv4 Settings": [
  null,
  "Réglages IPv4"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "Paramètres IPv6"
 ],
 "Id $id": [
  null,
  "Id $id"
 ],
 "Ignore": [
  null,
  "Ignorer"
 ],
 "Inactive": [
  null,
  "Inactif"
 ],
 "Included services": [
  null,
  "services inclus"
 ],
 "Interfaces": [
  null,
  "Interfaces"
 ],
 "Invalid address $0": [
  null,
  "Adresse non valide $0"
 ],
 "Invalid metric $0": [
  null,
  "Métrique non valide $0"
 ],
 "Invalid port number": [
  null,
  "Numéro de port invalide"
 ],
 "Invalid prefix $0": [
  null,
  "Préfixe non valide $0"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "Préfixe ou masque de réseau non valide $0"
 ],
 "Invalid range": [
  null,
  "Plage invalide"
 ],
 "Keep connection": [
  null,
  "Gardez la connexion"
 ],
 "LACP Key": [
  null,
  "Clé LACP"
 ],
 "Link Monitoring": [
  null,
  "Link Monitoring"
 ],
 "Link Watch": [
  null,
  "Link Watch"
 ],
 "Link down delay": [
  null,
  "Délai de chute de lien"
 ],
 "Link local": [
  null,
  "Lien local"
 ],
 "Link up delay": [
  null,
  "Délai d’activation de lien"
 ],
 "Load Balancing": [
  null,
  "L’équilibrage de charge"
 ],
 "MAC": [
  null,
  "MAC"
 ],
 "MII (Recommended)": [
  null,
  "MII (recommandé)"
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "MTU must be a positive number": [
  null,
  "MTU doit être un nombre positif"
 ],
 "Manual": [
  null,
  "Manuel"
 ],
 "Master": [
  null,
  "Master"
 ],
 "Maximum message age $max_age": [
  null,
  "Âge maximal du message $max_age"
 ],
 "Mode": [
  null,
  "Mode"
 ],
 "Monitoring Interval": [
  null,
  "Intervalle de surveillance"
 ],
 "Monitoring Targets": [
  null,
  "Objectifs de surveillance"
 ],
 "NSNA Ping": [
  null,
  "NSNA Ping"
 ],
 "Name": [
  null,
  "Nom"
 ],
 "Network devices and graphs require NetworkManager.": [
  null,
  "Les périphériques réseau et les graphiques nécessitent NetworkManager."
 ],
 "NetworkManager is not running.": [
  null,
  "NetworkManager n’est pas en cours d’exécution."
 ],
 "Networking": [
  null,
  "Réseau"
 ],
 "Networking Logs": [
  null,
  "Journaux réseau"
 ],
 "No": [
  null,
  "Non"
 ],
 "No active zones": [
  null,
  "Aucune zone active"
 ],
 "No carrier": [
  null,
  "Pas de transporteur"
 ],
 "No description available": [
  null,
  "Aucune description disponible"
 ],
 "No open ports": [
  null,
  "Pas de ports ouverts"
 ],
 "None": [
  null,
  "Aucun"
 ],
 "Not available": [
  null,
  "Indisponible"
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
  "Partie de"
 ],
 "Passive": [
  null,
  "Passif"
 ],
 "Path cost": [
  null,
  "Coût du chemin"
 ],
 "Path cost $path_cost": [
  null,
  "Coût du chemin $path_cost"
 ],
 "Permanent": [
  null,
  "Permanent"
 ],
 "Ping Interval": [
  null,
  "Intervalle de ping"
 ],
 "Ping Target": [
  null,
  "Clible de ping"
 ],
 "Please install the $0 package": [
  null,
  "Veuillez installer le paquet $0"
 ],
 "Port number and type do not match": [
  null,
  "Le numéro de port et son type ne correspondent pas"
 ],
 "Ports": [
  null,
  "Ports"
 ],
 "Prefix length": [
  null,
  "Longueur du préfixe"
 ],
 "Prefix length or Netmask": [
  null,
  "Longueur du préfixe ou masque de réseau"
 ],
 "Preparing": [
  null,
  "Préparation en cours"
 ],
 "Preserve": [
  null,
  "Préserver"
 ],
 "Primary": [
  null,
  "Primaire"
 ],
 "Priority": [
  null,
  "Priorité"
 ],
 "Priority $priority": [
  null,
  "Priorité $priority"
 ],
 "Random": [
  null,
  "Random"
 ],
 "Range": [
  null,
  "Gamme"
 ],
 "Range must be strictly ordered": [
  null,
  "La plage doit être strictement ordonnée."
 ],
 "Reboot": [
  null,
  "Redémarrer"
 ],
 "Receiving": [
  null,
  "Réception"
 ],
 "Remove $0": [
  null,
  "Supprimer $0"
 ],
 "Remove service": [
  null,
  "Supprimer un service"
 ],
 "Remove service from zones": [
  null,
  "Supprimer un service des zones"
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Supprimer <b>$0</b> aura pour effet d’interrompra la connexion au serveur et rendra l’interface utilisateur d’administration indisponible."
 ],
 "Restoring connection": [
  null,
  "Restauration de la connexion"
 ],
 "Round Robin": [
  null,
  "Round Robin"
 ],
 "Routes": [
  null,
  "Routes"
 ],
 "Runner": [
  null,
  "Runner"
 ],
 "STP Forward delay": [
  null,
  "Délai de réacheminement STP"
 ],
 "STP Hello time": [
  null,
  "Durée Hello STP"
 ],
 "STP Maximum message age": [
  null,
  "Âge maximal de message STP"
 ],
 "STP Priority": [
  null,
  "Priorité STP"
 ],
 "Sending": [
  null,
  "Envoi"
 ],
 "Service": [
  null,
  "Service"
 ],
 "Services": [
  null,
  "Prestations de service"
 ],
 "Set to": [
  null,
  "Mis à"
 ],
 "Shared": [
  null,
  "Shared"
 ],
 "Sorted from least trusted to most trusted": [
  null,
  "Ordonner du moins au plus fiable"
 ],
 "Spanning Tree Protocol": [
  null,
  "Protocole Spanning Tree"
 ],
 "Spanning Tree Protocol (STP)": [
  null,
  "Protocole Spanning Tree (STP)"
 ],
 "Stable": [
  null,
  "Stable"
 ],
 "Start Service": [
  null,
  "Démarrer le service"
 ],
 "Status": [
  null,
  "Statut"
 ],
 "Sticky": [
  null,
  "Sticky"
 ],
 "Switch off $0": [
  null,
  "Éteindre $0"
 ],
 "Switch on $0": [
  null,
  "Allumer $0"
 ],
 "Switching off <b>$0</b>  will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Éteindre <b>$0</b> interrompra la connexion au serveur et rendra l’interface utilisateur d’administration indisponible."
 ],
 "Switching off <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Éteindre <b>$0</b> interrompra la connexion au serveur et rendra l’interface utilisateur d’administration indisponible."
 ],
 "Switching on <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Activer <b>$0</b> interrompra la connexion au serveur et rendra l’interface utilisateur d’administration indisponible."
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Team": [
  null,
  "Équipe"
 ],
 "Team Port": [
  null,
  "Port de l’équipe"
 ],
 "Team Port Settings": [
  null,
  "Paramètres du port de l’équipe"
 ],
 "Team Settings": [
  null,
  "Paramètres de l’équipe"
 ],
 "Testing connection": [
  null,
  "Test de connexion"
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  "L’utilisateur <b>$0</b> n’est pas autorisé à modifier les paramètres réseau"
 ],
 "This device cannot be managed here.": [
  null,
  "Ce périphérique ne peut pas être géré ici."
 ],
 "Trust level": [
  null,
  "Niveau de confiance"
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Erreur inattendue"
 ],
 "Unknown": [
  null,
  "Inconnu"
 ],
 "Unknown \"$0\"": [
  null,
  "Inconnu \"$0\""
 ],
 "Unknown configuration": [
  null,
  "Configuration inconnue"
 ],
 "Unknown service name": [
  null,
  "Nom de service inconnu"
 ],
 "Unmanaged Interfaces": [
  null,
  "Interfaces non gérées"
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
  "Paramètres VLAN"
 ],
 "Waiting": [
  null,
  "Attente"
 ],
 "XOR": [
  null,
  "XOR"
 ],
 "Yes": [
  null,
  "Oui"
 ],
 "You are not authorized to modify the firewall.": [
  null,
  "Vous n’êtes pas autorisé à modifier le pare-feu."
 ],
 "Zone": [
  null,
  "Zone"
 ],
 "Zones": [
  null,
  "Zones"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[ $0 octets de données binaires]"
 ],
 "[binary data]": [
  null,
  "[données binaires]"
 ],
 "[no data]": [
  null,
  "[pas de données]"
 ],
 "show less": [
  null,
  "montrer moins"
 ],
 "show more": [
  null,
  "montrer plus"
 ],
 "page-title\u0004Networking": [
  null,
  "La mise en réseau"
 ]
}));
