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
  "x-generator": "Zanata 4.6.2"
 },
 "$0 is not available from any repository.": [
  null,
  "$0 n'est disponible à partir d'aucun référentiel."
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
 "Additional packages:": [
  null,
  "Paquets supplémentaires :"
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
 "Asset Tag": [
  null,
  "Balise de ressource"
 ],
 "At specific time": [
  null,
  "À un moment précis"
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
 "CPU": [
  null,
  "CPU"
 ],
 "Cached": [
  null,
  "En cache"
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Change": [
  null,
  "Changement"
 ],
 "Change Host Name": [
  null,
  "Modifier le nom d'hôte"
 ],
 "Change System Time": [
  null,
  "Modifier l'heure du système"
 ],
 "Checking installed software": [
  null,
  "Vérification des logiciels installés"
 ],
 "Class": [
  null,
  "Classe"
 ],
 "Close": [
  null,
  "Fermer"
 ],
 "Command": [
  null,
  "Commander"
 ],
 "Condition failed": [
  null,
  "Condition non remplie"
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
 "Current boot": [
  null,
  "Boot actuel"
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
 "Disk I/O": [
  null,
  "E / S disque"
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
 "Enable stored metrics…": [
  null,
  "Activer les métriques stockées...."
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
  "Nom d'hôte"
 ],
 "Hour : Minute": [
  null,
  "Heure : Minute"
 ],
 "Hours": [
  null,
  "Heures"
 ],
 "I/O Wait": [
  null,
  "I / O Attente"
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
 "Instantiate": [
  null,
  "Instancier"
 ],
 "Invalid time zone": [
  null,
  "Fuseau horaire non valide"
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
 "Last 24 hours": [
  null,
  "Dernières 24 heures"
 ],
 "Last 7 days": [
  null,
  "Les 7 derniers jours"
 ],
 "Load earlier entries": [
  null,
  "Charger les entrées précédentes"
 ],
 "Loading...": [
  null,
  "Chargement..."
 ],
 "Log messages": [
  null,
  "Enregistrer les messages"
 ],
 "Logs": [
  null,
  "Journaux"
 ],
 "Machine ID": [
  null,
  "ID machine"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "Empreintes digitales clés de la machine SSH"
 ],
 "Manually": [
  null,
  "Manuellement"
 ],
 "Memory": [
  null,
  "Mémoire"
 ],
 "Memory & Swap": [
  null,
  "Mémoire & Swap"
 ],
 "Minutes": [
  null,
  "Minutes"
 ],
 "Model": [
  null,
  "Modèle"
 ],
 "Monday": [
  null,
  "Lundi"
 ],
 "Name": [
  null,
  "Nom"
 ],
 "Network Traffic": [
  null,
  "Trafic réseau"
 ],
 "Nice": [
  null,
  "Priorité"
 ],
 "No Delay": [
  null,
  "Sans délais"
 ],
 "No host keys found.": [
  null,
  "Aucune clé d'hôte trouvée."
 ],
 "Not authorized to upload-report": [
  null,
  "Non autorisé à télécharger le rapport"
 ],
 "Not synchronized": [
  null,
  "Non synchronisé"
 ],
 "Note": [
  null,
  "Note"
 ],
 "Notice and above": [
  null,
  "Notification et au-dessus"
 ],
 "Off": [
  null,
  "De"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  "Sur"
 ],
 "Only Emergency": [
  null,
  "Urgences uniquement"
 ],
 "Operating System": [
  null,
  "Système d'exploitation"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "Paths": [
  null,
  "Chemins"
 ],
 "Performance Profile": [
  null,
  "Profil de performance"
 ],
 "Power Options": [
  null,
  "Options d'alimentation"
 ],
 "Pretty Host Name": [
  null,
  "Nom d'hôte pretty"
 ],
 "Problem details": [
  null,
  "Détails du problème"
 ],
 "Problem info": [
  null,
  "Informations sur le problème"
 ],
 "Real Host Name": [
  null,
  "Nom d'hôte réel"
 ],
 "Reboot": [
  null,
  "Redémarrer"
 ],
 "Recent": [
  null,
  "Récent"
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
  "'reporter-ureport' non trouvé."
 ],
 "Reporting was unsucessful. Try running `reporter-ureport -d ": [
  null,
  "La signalisation n'a pas abouti. Essayez d'exécuter `reporter-ureport -d"
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
 "Saturday": [
  null,
  "Samedi"
 ],
 "Save": [
  null,
  "sauvegarder"
 ],
 "Seconds": [
  null,
  "Secondes"
 ],
 "Secure Shell Keys": [
  null,
  "Clés Shell sécurisées"
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
 "Set Time": [
  null,
  "Régler l'heure"
 ],
 "Severity": [
  null,
  "Gravité"
 ],
 "Show fingerprints": [
  null,
  "Afficher les empreintes digitales"
 ],
 "Shut Down": [
  null,
  "Fermeture"
 ],
 "Slot": [
  null,
  "Emplacement"
 ],
 "Sockets": [
  null,
  "Sockets"
 ],
 "Specific Time": [
  null,
  "Temps spécifique"
 ],
 "Store metrics": [
  null,
  "Stocker les métriques"
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
 "System Services": [
  null,
  "Services système"
 ],
 "System Time": [
  null,
  "Le temps du système"
 ],
 "Targets": [
  null,
  "Cibles"
 ],
 "Terminal": [
  null,
  "Terminal"
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  "Cette unité n'est pas conçue pour être activée explicitement."
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
 ]
}));
