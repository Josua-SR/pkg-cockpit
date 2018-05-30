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
nplurals=2; plural=(n > 1);
return plural;
},
  "language": "fr",
  "x-generator": "Zanata 4.4.5"
 },
 "$0 day": [
  "$0 days",
  "$0 jour",
  "$0 jours"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 heure",
  "$0 heures"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minute",
  "$0 minutes"
 ],
 "$0 month": [
  "$0 months",
  "$0 mois",
  "$0 mois"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 semaine",
  "$0 semaines"
 ],
 "$0 year": [
  "$0 years",
  "$0 an",
  "$0 ans"
 ],
 "$mtu": [
  null,
  ""
 ],
 "1 day": [
  null,
  "1 jour"
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
  "Supervision ARP"
 ],
 "ARP Ping": [
  null,
  "Ping ARP"
 ],
 "Active": [
  null,
  "Actif"
 ],
 "Active Backup": [
  null,
  "Active Backup"
 ],
 "Adaptive load balancing": [
  null,
  "Adaptive load balancing"
 ],
 "Adaptive transmit load balancing": [
  null,
  "Adaptive transmit load balancing"
 ],
 "Add $0": [
  null,
  "Ajouter $0"
 ],
 "Add Bond": [
  null,
  "Ajouter une liaison d'interfaces réseau"
 ],
 "Add Bridge": [
  null,
  "Ajouter un pont"
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
  "Ajouter un VLAN"
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
  "Adresses"
 ],
 "Allowed Services": [
  null,
  ""
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
  ""
 ],
 "Bond": [
  null,
  "Bond"
 ],
 "Bond Settings": [
  null,
  "Réglages de la liaison d'interfaces"
 ],
 "Bridge": [
  null,
  "Pont"
 ],
 "Bridge Port Settings": [
  null,
  "Réglages de port du pont"
 ],
 "Bridge Settings": [
  null,
  "Réglages du pont"
 ],
 "Bridge port": [
  null,
  "Port de pont"
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
  "Annuler"
 ],
 "Carrier": [
  null,
  "Porteuse"
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
  "Vérification IP"
 ],
 "Close": [
  null,
  "Fermer"
 ],
 "Configure": [
  null,
  "Configurer"
 ],
 "Configuring": [
  null,
  "Configuration"
 ],
 "Configuring IP": [
  null,
  "Configuration IP"
 ],
 "Connect automatically": [
  null,
  "Connexion automatique"
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
  "Domaines de recherche DNS"
 ],
 "DNS Search Domains $val": [
  null,
  ""
 ],
 "Deactivating": [
  null,
  "Désactivation"
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
  ""
 ],
 "Details": [
  null,
  ""
 ],
 "Disabled": [
  null,
  "Désactivé"
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
  "Échec"
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
  "Forward delay $forward_delay"
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
  ""
 ],
 "Hairpin mode": [
  null,
  ""
 ],
 "Hello time $hello_time": [
  null,
  "Hello time $hello_time"
 ],
 "IP Address": [
  null,
  "Adresse IP"
 ],
 "IP Settings": [
  null,
  "Paramétrage IP"
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
  "Réglages IPv6"
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
 "Interfaces": [
  null,
  "Interfaces"
 ],
 "Invalid address $0": [
  null,
  "Port invalide"
 ],
 "Invalid metric $0": [
  null,
  "Port invalide"
 ],
 "Invalid prefix $0": [
  null,
  "Port invalide"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "Port invalide"
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
  "Surveillance du lien"
 ],
 "Link Watch": [
  null,
  ""
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
  "Délai de montée de lien"
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
  "MII (Recommandé)"
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
  "Manuel"
 ],
 "Master": [
  null,
  "Maître"
 ],
 "Maximum message age $max_age": [
  null,
  "Âge maximal de message $max_age"
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
  "Intervalle de surveillance"
 ],
 "Monitoring Targets": [
  null,
  "Cibles à surveiller"
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
 "No carrier": [
  null,
  "Pas de porteuse"
 ],
 "No open ports": [
  null,
  ""
 ],
 "Not available": [
  null,
  "Indisponible"
 ],
 "Off": [
  null,
  "Éteint"
 ],
 "Ok": [
  null,
  ""
 ],
 "On": [
  null,
  "Allumé"
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
  "Fait partie de "
 ],
 "Passive": [
  null,
  ""
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
 "Please install the {0} package": [
  null,
  ""
 ],
 "Ports": [
  null,
  "Ports"
 ],
 "Prefix length": [
  null,
  "Longueur de préfixe"
 ],
 "Prefix length or Netmask": [
  null,
  "Longueur de préfixe ou masque de réseau"
 ],
 "Preparing": [
  null,
  "Préparation"
 ],
 "Preserve": [
  null,
  "Préconfigurer"
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
  ""
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
  ""
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Restoring connection": [
  null,
  "Reconnecter"
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
  ""
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
  ""
 ],
 "Set to": [
  null,
  ""
 ],
 "Shared": [
  null,
  "Partagé"
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
  "Activer"
 ],
 "Status": [
  null,
  "État"
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
  "L'utilisateur <b>$0</b> n'a pas le droit de modifier les réglages réseau"
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
  "Erreur inattendue"
 ],
 "Unknown": [
  null,
  "Inconnu"
 ],
 "Unknown \"$0\"": [
  null,
  ""
 ],
 "Unknown configuration": [
  null,
  "Configuration inconnue"
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
  "Identifiant de VLAN"
 ],
 "VLAN Settings": [
  null,
  "Réglages VLAN"
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
  ""
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 octets de données binaires]"
 ],
 "[binary data]": [
  null,
  "[données binaires]"
 ],
 "[no data]": [
  null,
  "[aucune donnée]"
 ],
 "page-title\u0004Networking": [
  null,
  "Réseau"
 ]
}));
