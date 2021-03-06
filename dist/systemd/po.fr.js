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
 "$0 Template": [
  null,
  "$0 Modèle"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 n’est disponible à partir d’aucun référentiel."
 ],
 "$0 will be installed.": [
  null,
  "0 $ sera installé."
 ],
 "1 Minute": [
  null,
  "1 minute"
 ],
 "1 day": [
  null,
  "Un jour"
 ],
 "1 hour": [
  null,
  "1 heure"
 ],
 "1 min": [
  null,
  "1 minute"
 ],
 "1 week": [
  null,
  "1 semaine"
 ],
 "10th": [
  null,
  "10ème"
 ],
 "11th": [
  null,
  "11ème"
 ],
 "12th": [
  null,
  "12ème"
 ],
 "13th": [
  null,
  "13ème"
 ],
 "14th": [
  null,
  "14ème"
 ],
 "15th": [
  null,
  "15ème"
 ],
 "16th": [
  null,
  "16ème"
 ],
 "17th": [
  null,
  "17ème"
 ],
 "18th": [
  null,
  "18ème"
 ],
 "19th": [
  null,
  "19ème"
 ],
 "1st": [
  null,
  "1er"
 ],
 "2 min": [
  null,
  "2 minutes"
 ],
 "20 Minutes": [
  null,
  "20 minutes"
 ],
 "20th": [
  null,
  "20ème"
 ],
 "21st": [
  null,
  "21ème"
 ],
 "22nd": [
  null,
  "22ème"
 ],
 "23rd": [
  null,
  "23ème"
 ],
 "24th": [
  null,
  "24ème"
 ],
 "25th": [
  null,
  "25ème"
 ],
 "26th": [
  null,
  "26ème"
 ],
 "27th": [
  null,
  "27ème"
 ],
 "28th": [
  null,
  "28ème"
 ],
 "29th": [
  null,
  "29ème"
 ],
 "2nd": [
  null,
  "2ème"
 ],
 "3 min": [
  null,
  "3 minutes"
 ],
 "30th": [
  null,
  "30ème"
 ],
 "31st": [
  null,
  "31ème"
 ],
 "3rd": [
  null,
  "3ème"
 ],
 "4 min": [
  null,
  "4 minutes"
 ],
 "40 Minutes": [
  null,
  "40 minutes"
 ],
 "4th": [
  null,
  "4ème"
 ],
 "5 Minutes": [
  null,
  "5 minutes"
 ],
 "5 min": [
  null,
  "5 minutes"
 ],
 "5 minutes": [
  null,
  "5 minutes"
 ],
 "5th": [
  null,
  "5ème"
 ],
 "6 hours": [
  null,
  "6 heures"
 ],
 "60 Minutes": [
  null,
  "60 minutes"
 ],
 "6th": [
  null,
  "6th"
 ],
 "7th": [
  null,
  "7th"
 ],
 "8th": [
  null,
  "8ème"
 ],
 "9th": [
  null,
  "9ème"
 ],
 "Absent": [
  null,
  "Absent"
 ],
 "Active since ": [
  null,
  "Actif depuis"
 ],
 "Additional actions": [
  null,
  "Actions supplémenaires"
 ],
 "Additional packages:": [
  null,
  "Paquets supplémentaires :"
 ],
 "Advanced TCA": [
  null,
  "TCA avancé"
 ],
 "After": [
  null,
  "Après"
 ],
 "After system boot": [
  null,
  "Après le démarrage du système"
 ],
 "Alert and above": [
  null,
  "Alerte et au-dessus"
 ],
 "All": [
  null,
  "Tout"
 ],
 "All In One": [
  null,
  "Tout en un"
 ],
 "Allow running (unmask)": [
  null,
  "Autoriser l'exécution (unmask)"
 ],
 "Appearance:": [
  null,
  "Apparence :"
 ],
 "Asset Tag": [
  null,
  "Balise de ressource"
 ],
 "At specific time": [
  null,
  "À un moment précis"
 ],
 "Automatic Startup": [
  null,
  "Démarrage automatique"
 ],
 "Automatically starts": [
  null,
  "Démarre automatiquement"
 ],
 "Automatically using NTP": [
  null,
  "Utiliser automatiquement NTP"
 ],
 "Automatically using specific NTP servers": [
  null,
  "Utiliser automatiquement des serveurs NTP spécifiques"
 ],
 "BIOS": [
  null,
  "BIOS"
 ],
 "BIOS date": [
  null,
  "Date du BIOS"
 ],
 "BIOS version": [
  null,
  "Version du BIOS"
 ],
 "Before": [
  null,
  "Avant"
 ],
 "Binds To": [
  null,
  "Liaison vers"
 ],
 "Black": [
  null,
  "Noir"
 ],
 "Blade": [
  null,
  "Panneau"
 ],
 "Blade enclosure": [
  null,
  "Enceintes du panneau"
 ],
 "Bound By": [
  null,
  "Liés par"
 ],
 "Bug Fix Updates Available": [
  null,
  "Mises à jour des corrections de bogues disponibles"
 ],
 "Bus Expansion Chassis": [
  null,
  "Châssis d’extension de bus"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU Security": [
  null,
  "Sécurité du CPU"
 ],
 "CPU Security Toggles": [
  null,
  "Paramètres de sécurité du CPU"
 ],
 "Cached": [
  null,
  "En cache"
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Cannot schedule event in the past": [
  null,
  "Impossible de planifier un événement dans le passé"
 ],
 "Change": [
  null,
  "Modification"
 ],
 "Change Host Name": [
  null,
  "Modifier le nom d’hôte"
 ],
 "Change System Time": [
  null,
  "Modifier l’heure du système"
 ],
 "Checking for updates…": [
  null,
  "Vérification des mises à jour…"
 ],
 "Checking installed software": [
  null,
  "Vérification des logiciels installés"
 ],
 "Class": [
  null,
  "Classe"
 ],
 "Clear All Filters": [
  null,
  "Supprimer tous les filtres"
 ],
 "Click to see system hardware information": [
  null,
  "Cliquez pour voir les informations sur le matériel du système"
 ],
 "Close": [
  null,
  "Fermer"
 ],
 "Command": [
  null,
  "Commander"
 ],
 "Compact PCI": [
  null,
  "PCI compact"
 ],
 "Condition $0=$1 was not met": [
  null,
  "Condition $0 = $1 n’a pas été remplie"
 ],
 "Condition failed": [
  null,
  "Condition non remplie"
 ],
 "Conflicted By": [
  null,
  "Conflit avec"
 ],
 "Conflicts": [
  null,
  "Conflits"
 ],
 "Consists Of": [
  null,
  "Comprend"
 ],
 "Convertible": [
  null,
  "Convertible"
 ],
 "Copy": [
  null,
  "Copier"
 ],
 "Create Timer": [
  null,
  "Créer Timer"
 ],
 "Create Timers": [
  null,
  "Créer des timers"
 ],
 "Critical and above": [
  null,
  "Critique et au-dessus"
 ],
 "Ctrl+Insert": [
  null,
  "Ctrl+Inser"
 ],
 "Current boot": [
  null,
  "Boot actuel"
 ],
 "Dark": [
  null,
  "Sombre"
 ],
 "Debug and above": [
  null,
  "Débogage et au-dessus"
 ],
 "Delay": [
  null,
  "Retard"
 ],
 "Description": [
  null,
  "La description"
 ],
 "Desktop": [
  null,
  "Bureau"
 ],
 "Detachable": [
  null,
  "Détachable"
 ],
 "Details": [
  null,
  "Détails"
 ],
 "Disable simultaneous multithreading": [
  null,
  "Désactiver le multithreading simultané"
 ],
 "Disabled": [
  null,
  "Désactivé"
 ],
 "Disallow running (mask)": [
  null,
  "Cesser l'exécution (mask)"
 ],
 "Disk I/O": [
  null,
  "E / S disque"
 ],
 "Docking Station": [
  null,
  "Station d’accueil"
 ],
 "Domain": [
  null,
  "Domaine"
 ],
 "Don't Repeat": [
  null,
  "Ne pas répéter"
 ],
 "Downloading $0": [
  null,
  "Téléchargement $0"
 ],
 "Dual Rank": [
  null,
  "Double rang"
 ],
 "Embedded PC": [
  null,
  "PC intégré"
 ],
 "Enable stored metrics…": [
  null,
  "Activer les métriques stockées…."
 ],
 "Enabled": [
  null,
  "Activée"
 ],
 "Enhancement Updates Available": [
  null,
  "Mises à jour des améliorations disponibles"
 ],
 "Entry": [
  null,
  "Entrée"
 ],
 "Error": [
  null,
  "Erreur"
 ],
 "Error and above": [
  null,
  "Erreur et au-dessus"
 ],
 "Everything": [
  null,
  "Tout"
 ],
 "Expansion Chassis": [
  null,
  "Châssis d’extension"
 ],
 "Failed to start": [
  null,
  "N'a pas pu démarrer"
 ],
 "Filter by name or description...": [
  null,
  "Filtrer par nom ou description…"
 ],
 "Forbidden from running": [
  null,
  "Non autorisé à exécuter"
 ],
 "Friday": [
  null,
  "Vendredi"
 ],
 "General": [
  null,
  "Général"
 ],
 "Go to": [
  null,
  "Aller à"
 ],
 "Go to now": [
  null,
  "Aller à maintenant"
 ],
 "Hand Held": [
  null,
  "Portatif"
 ],
 "Hardware": [
  null,
  "Matériel"
 ],
 "Hardware Information": [
  null,
  "Informations sur le matériel"
 ],
 "Host Name": [
  null,
  "Nom d’hôte"
 ],
 "Hour : Minute": [
  null,
  "Heure : Minute"
 ],
 "Hour needs to be a number between 0-23": [
  null,
  "L’heure doit être un nombre compris entre 0 et 23"
 ],
 "Hours": [
  null,
  "Heures"
 ],
 "I/O Wait": [
  null,
  "I / O Attente"
 ],
 "ID": [
  null,
  "ID"
 ],
 "Info and above": [
  null,
  "Info et au-dessus"
 ],
 "Install": [
  null,
  "Installer"
 ],
 "Install Software": [
  null,
  "Installer le logiciel"
 ],
 "Installing $0": [
  null,
  "Installation de $0"
 ],
 "Instance of template: ": [
  null,
  ""
 ],
 "Instantiate": [
  null,
  "Instancier"
 ],
 "Invalid date format": [
  null,
  "Format de date non valide"
 ],
 "Invalid date format and invalid time format": [
  null,
  "Format de date non valide et format d’heure non valide"
 ],
 "Invalid date format.": [
  null,
  "Format de date incorrect"
 ],
 "Invalid number.": [
  null,
  "Numéro non valide."
 ],
 "Invalid time format": [
  null,
  "Format d’heure non valide"
 ],
 "Invalid time zone": [
  null,
  "Fuseau horaire non valide"
 ],
 "IoT Gateway": [
  null,
  "IoT Gateway"
 ],
 "Joins Namespace Of": [
  null,
  "Rejoint l’espace de noms de"
 ],
 "Journal": [
  null,
  "Journal"
 ],
 "Journal entry": [
  null,
  "Entrée de journal"
 ],
 "Journal entry not found": [
  null,
  "Entrée de journal non trouvée"
 ],
 "Kernel": [
  null,
  "Noyau"
 ],
 "Laptop": [
  null,
  "Portable"
 ],
 "Last 24 hours": [
  null,
  "Dernières 24 heures"
 ],
 "Last 7 days": [
  null,
  "Les 7 derniers jours"
 ],
 "Last Trigger": [
  null,
  "Dernier déclencheur"
 ],
 "Light": [
  null,
  "Clair"
 ],
 "Load earlier entries": [
  null,
  "Charger les entrées précédentes"
 ],
 "Loading...": [
  null,
  "Chargement…"
 ],
 "Log messages": [
  null,
  "Enregistrer les messages"
 ],
 "Logs": [
  null,
  "Journaux"
 ],
 "Low Profile Desktop": [
  null,
  "Bureau de profil bas"
 ],
 "Lunch Box": [
  null,
  "Lunch Box"
 ],
 "Machine ID": [
  null,
  "ID machine"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "Empreintes digitales clés de la machine SSH"
 ],
 "Main Server Chassis": [
  null,
  "Châssis principal du serveur"
 ],
 "Manually": [
  null,
  "Manuellement"
 ],
 "Mask Service": [
  null,
  "Service Masque"
 ],
 "Masked": [
  null,
  "Masqué"
 ],
 "Masking service prevents all dependant units from running. This can have bigger impact than anticipated. Please confirm that you want to mask this unit.": [
  null,
  "Le service Masque empêche toutes les unités dépendantes d'exécuter. Cela peut avoir un plus gros impact que prévu. Veuillez confirmer que vous souhaitez masquer cette unité."
 ],
 "Memory": [
  null,
  "Mémoire"
 ],
 "Memory & Swap": [
  null,
  "Mémoire & Swap"
 ],
 "Memory Technology": [
  null,
  "Technologie de mémoire"
 ],
 "Message to logged in users": [
  null,
  "Message aux utilisateurs connectés"
 ],
 "Mini PC": [
  null,
  "Mini PC"
 ],
 "Mini Tower": [
  null,
  "Mini Tower"
 ],
 "Minute needs to be a number between 0-59": [
  null,
  "La minute doit être un nombre entre 0-59"
 ],
 "Minutes": [
  null,
  "Minutes"
 ],
 "Mitigations": [
  null,
  "Mitigations"
 ],
 "Model": [
  null,
  "Modèle"
 ],
 "Monday": [
  null,
  "Lundi"
 ],
 "Multi-system Chassis": [
  null,
  "Châssis multi-système"
 ],
 "NTP Server": [
  null,
  "Serveur NTP"
 ],
 "Name": [
  null,
  "Nom"
 ],
 "Need at least one NTP server": [
  null,
  "Besoin d’au moins un serveur NTP"
 ],
 "Network Traffic": [
  null,
  "Trafic réseau"
 ],
 "Next Run": [
  null,
  "Prochaine exécution"
 ],
 "Nice": [
  null,
  "Priorité"
 ],
 "No Delay": [
  null,
  "Sans délais"
 ],
 "No Matching Results": [
  null,
  "Aucun résultat correspondant n’a été trouvé"
 ],
 "No host keys found.": [
  null,
  "Aucune clé d’hôte trouvée."
 ],
 "Not authorized to upload-report": [
  null,
  "Non autorisé à téléverser le rapport"
 ],
 "Not running": [
  null,
  "Pas en cours d’exécution"
 ],
 "Not synchronized": [
  null,
  "Non synchronisé"
 ],
 "Note": [
  null,
  "Note"
 ],
 "Notebook": [
  null,
  "Notebook"
 ],
 "Notice and above": [
  null,
  "Notification et au-dessus"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On Failure": [
  null,
  "En cas d’échec"
 ],
 "Only Emergency": [
  null,
  "Urgences uniquement"
 ],
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  "Seuls les caractères alphabétiques, les nombres,:, _,. , @ , - sont autorisés."
 ],
 "Operating System": [
  null,
  "Système d’exploitation"
 ],
 "Other": [
  null,
  "Autre"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit crash"
 ],
 "Part Of": [
  null,
  "Fait partie de"
 ],
 "Paste": [
  null,
  "Coller"
 ],
 "Path": [
  null,
  "Chemin"
 ],
 "Paths": [
  null,
  "Chemins"
 ],
 "Performance Profile": [
  null,
  "Profil de performance"
 ],
 "Peripheral Chassis": [
  null,
  "Châssis périphérique"
 ],
 "Pizza Box": [
  null,
  "Pizza Box"
 ],
 "Portable": [
  null,
  "Portable"
 ],
 "Power Options": [
  null,
  "Options d’alimentation"
 ],
 "Present": [
  null,
  "Présent"
 ],
 "Pretty Host Name": [
  null,
  "Nom d’hôte pretty"
 ],
 "Previous boot": [
  null,
  "Démarrage précédent"
 ],
 "Problem details": [
  null,
  "Détails du problème"
 ],
 "Problem info": [
  null,
  "Informations sur le problème"
 ],
 "Propagates Reload To": [
  null,
  "Recharger Propagation jusqu’à"
 ],
 "RAID Chassis": [
  null,
  "Châssis RAID"
 ],
 "Rack Mount Chassis": [
  null,
  "Châssis de montage en rack"
 ],
 "Rank": [
  null,
  "Rang"
 ],
 "Read more...": [
  null,
  "En savoir plus…"
 ],
 "Read-only": [
  null,
  "Lecture seule"
 ],
 "Real Host Name": [
  null,
  "Nom d’hôte réel"
 ],
 "Real host name can only contain lower-case characters, digits, dashes, and periods (with populated subdomains)": [
  null,
  "Le nom d’hôte réel ne peut contenir que des caractères minuscules, des chiffres, des tirets et des points (avec des sous-domaines remplis)"
 ],
 "Real host name must be 64 characters or less": [
  null,
  "Le nom d’hôte réel doit comporter 64 caractères ou moins"
 ],
 "Reboot": [
  null,
  "Redémarrer"
 ],
 "Recent": [
  null,
  "Récent"
 ],
 "Reload": [
  null,
  "Recharger"
 ],
 "Reload Propagated From": [
  null,
  "Recharger Propagation à partir de"
 ],
 "Removals:": [
  null,
  "Suppressions :"
 ],
 "Removing $0": [
  null,
  "Suppression de $0"
 ],
 "Repeat Daily": [
  null,
  "Répéter quotidiennement"
 ],
 "Repeat Hourly": [
  null,
  "Répéter toutes les heures"
 ],
 "Repeat Monthly": [
  null,
  "Répéter chaque mois"
 ],
 "Repeat Weekly": [
  null,
  "Répéter chaque semaine"
 ],
 "Repeat Yearly": [
  null,
  "Répéter chaque année"
 ],
 "Report": [
  null,
  "Signaler"
 ],
 "Reported": [
  null,
  "Signalé"
 ],
 "Reporter 'reporter-ureport' not found.": [
  null,
  "’reporter-ureport’ non trouvé."
 ],
 "Reporting was unsucessful. Try running `reporter-ureport -d ": [
  null,
  "La signalisation n’a pas abouti. Essayez d’exécuter `reporter-ureport -d"
 ],
 "Required By": [
  null,
  "Requis par"
 ],
 "Required by ": [
  null,
  "Requis par"
 ],
 "Requires": [
  null,
  "Nécessite"
 ],
 "Requires administration access to edit": [
  null,
  "Nécessite un accès adminitratif pour pouvoir modifier"
 ],
 "Requisite": [
  null,
  "Conditions requises"
 ],
 "Requisite Of": [
  null,
  "Requis par"
 ],
 "Reset": [
  null,
  "Réinitialiser"
 ],
 "Restart": [
  null,
  "Redémarrer"
 ],
 "Run": [
  null,
  "Exécuter"
 ],
 "Running": [
  null,
  "En cours"
 ],
 "Saturday": [
  null,
  "Samedi"
 ],
 "Save": [
  null,
  "sauvegarder"
 ],
 "Save and reboot": [
  null,
  "Enregistrer et redémarrer"
 ],
 "Sealed-case PC": [
  null,
  "PC scellé"
 ],
 "Seconds": [
  null,
  "Secondes"
 ],
 "Secure Shell Keys": [
  null,
  "Clés Shell sécurisées"
 ],
 "Security Updates Available": [
  null,
  "Mises à jour de sécurité disponibles"
 ],
 "Service": [
  null,
  "Service"
 ],
 "Service Logs": [
  null,
  "Journaux de service"
 ],
 "Service name": [
  null,
  "Nom du service"
 ],
 "Services": [
  null,
  "Prestations de service"
 ],
 "Set Host name": [
  null,
  "Définir le nom d’hôte"
 ],
 "Set Time": [
  null,
  "Régler l’heure"
 ],
 "Severity": [
  null,
  "Gravité"
 ],
 "Shift+Insert": [
  null,
  "Maj+Inser"
 ],
 "Show fingerprints": [
  null,
  "Afficher les empreintes digitales"
 ],
 "Shut Down": [
  null,
  "Fermeture"
 ],
 "Single Rank": [
  null,
  "Rang unique"
 ],
 "Size": [
  null,
  "Taille"
 ],
 "Slot": [
  null,
  "Emplacement"
 ],
 "Sockets": [
  null,
  "Sockets"
 ],
 "Software-based workarounds help prevent CPU security issues. These mitigations have the side effect of reducing performance. Change these settings at your own risk.": [
  null,
  "Les contournements logiciels aident à éviter les problèmes de sécurité des CPU. Ces mitigations on pour effet de bord de réduire les performances. Modifiez ces paramètres à vos risques et périls."
 ],
 "Space-saving Computer": [
  null,
  "Ordinateur gain de place"
 ],
 "Specific Time": [
  null,
  "Temps spécifique"
 ],
 "Speed": [
  null,
  "Vitesse"
 ],
 "Start": [
  null,
  "Démarrer"
 ],
 "Start Service": [
  null,
  "Démarrer le service"
 ],
 "Start and Enable": [
  null,
  "Démarrer et activer"
 ],
 "State": [
  null,
  "État"
 ],
 "Static": [
  null,
  "Statique"
 ],
 "Status": [
  null,
  "Statut"
 ],
 "Stick PC": [
  null,
  "Stick PC"
 ],
 "Stop": [
  null,
  "Arrêter"
 ],
 "Stop and Disable": [
  null,
  "Arrêter et désactiver"
 ],
 "Store Metrics": [
  null,
  "Stocker les métriques"
 ],
 "Sub Chassis": [
  null,
  "Sous-châssis"
 ],
 "Sub Notebook": [
  null,
  "Sub Notebook"
 ],
 "Sunday": [
  null,
  "Dimanche"
 ],
 "Swap Used": [
  null,
  "Swap utilisé"
 ],
 "Synchronized": [
  null,
  "Synchronisé"
 ],
 "Synchronized with {{Server}}": [
  null,
  "Synchronisé avec {{Server}}"
 ],
 "System": [
  null,
  "Système"
 ],
 "System Information": [
  null,
  "Informations sur le système"
 ],
 "System Not Registered": [
  null,
  "Système non enregistré"
 ],
 "System Services": [
  null,
  "Services système"
 ],
 "System Time": [
  null,
  "Le temps du système"
 ],
 "System Up To Date": [
  null,
  "Le système est à jour"
 ],
 "Tablet": [
  null,
  "Tablette"
 ],
 "Targets": [
  null,
  "Cibles"
 ],
 "Terminal": [
  null,
  "Terminal"
 ],
 "The user $0 is not permitted to change cpu security mitigations": [
  null,
  "L’utilisateur $0 n’est pas autorisé à changer les mitigations de sécurité pour le  CPU"
 ],
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  "L’utilisateur <b>$0</b> n’a pas les autorisations pour créer des timers"
 ],
 "The user <b>$0</b> is not permitted to change the system time": [
  null,
  "L’utilisateur <b>$0</b> n’a pas le droit de modifier les heures système"
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  "L’utilisateur <b>$0</b> n’est pas autorisé à modifier les noms d’hôte"
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  "L’utilisateur <b>$0</b> n’est pas autorisé à arrêter ou redémarrer ce serveur"
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  "Ce jour n’est pas présent tous les mois. <br> Le timer ne sera exécuté que dans les mois qui ont un 31ème jour."
 ],
 "This field cannot be empty.": [
  null,
  "Ce champ ne peut pas être vide."
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  "Cette unité n’est pas conçue pour être activée explicitement."
 ],
 "Thursday": [
  null,
  "Jeudi"
 ],
 "Time Zone": [
  null,
  "Fuseau horaire"
 ],
 "Timers": [
  null,
  "Timers"
 ],
 "Total size: $0": [
  null,
  "Taille totale : $0"
 ],
 "Tower": [
  null,
  "Tower"
 ],
 "Triggered By": [
  null,
  "Déclenché par"
 ],
 "Triggers": [
  null,
  "Déclencheurs"
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  "Essayer de synchroniser avec {{Server}}"
 ],
 "Tuesday": [
  null,
  "Mardi"
 ],
 "Type": [
  null,
  "Type"
 ],
 "Unknown": [
  null,
  "Inconnu"
 ],
 "Updates Available": [
  null,
  "Mises à jour disponibles"
 ],
 "Updating status...": [
  null,
  "Mise à jour du statut..."
 ],
 "Usage of $0 CPU core": [
  "Usage of $0 CPU cores",
  "Utilisation de $0 noyau CPU",
  "Utilisation de $0 noyaux CPU"
 ],
 "Used": [
  null,
  "Utilisé"
 ],
 "User": [
  null,
  "Utilisateur"
 ],
 "Vendor": [
  null,
  "Fournisseur"
 ],
 "Version": [
  null,
  "Version"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Attente de la fin des autres opérations de gestion du logiciel"
 ],
 "Wanted By": [
  null,
  "Recherché par"
 ],
 "Wants": [
  null,
  "Recherches"
 ],
 "Warning and above": [
  null,
  "Avertissement et au-dessus"
 ],
 "Wednesday": [
  null,
  "Mercredi"
 ],
 "Weeks": [
  null,
  "Semaines"
 ],
 "White": [
  null,
  "Blanc"
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
 "failed to list ssh host keys: $0": [
  null,
  "Échec de listage des clés de l’hôte ssh : $0"
 ],
 "of $0 CPU core": [
  "of $0 CPU cores",
  "de $0 noyau CPU",
  "de $0 noyaux CPU"
 ],
 "undefined": [
  null,
  "indéfini"
 ],
 "unknown": [
  null,
  "inconnu"
 ],
 "page-title\u0004CPU Status": [
  null,
  "Statut du processeur"
 ],
 "page-title\u0004Memory": [
  null,
  "Mémoire"
 ]
}));
