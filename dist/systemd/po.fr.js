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
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Template": [
  null,
  "Modèle de $0"
 ],
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
 "1 Minute": [
  null,
  "1 minute"
 ],
 "1 day": [
  null,
  "1 jour"
 ],
 "1 hour": [
  null,
  "1 heure"
 ],
 "1 min": [
  null,
  "1 min"
 ],
 "1 week": [
  null,
  "1 semaine"
 ],
 "10th": [
  null,
  "10e"
 ],
 "11th": [
  null,
  "11e"
 ],
 "12th": [
  null,
  "12e"
 ],
 "13th": [
  null,
  "13e"
 ],
 "14th": [
  null,
  "14e"
 ],
 "15th": [
  null,
  "15e"
 ],
 "16th": [
  null,
  "16e"
 ],
 "17th": [
  null,
  "17e"
 ],
 "18th": [
  null,
  "18e"
 ],
 "19th": [
  null,
  "19e"
 ],
 "1st": [
  null,
  "1er"
 ],
 "2 min": [
  null,
  "2 min"
 ],
 "20 Minutes": [
  null,
  "20 minutes"
 ],
 "20th": [
  null,
  "20e"
 ],
 "21st": [
  null,
  "21e"
 ],
 "22nd": [
  null,
  "22e"
 ],
 "23rd": [
  null,
  "23e"
 ],
 "24th": [
  null,
  "24e"
 ],
 "25th": [
  null,
  "25e"
 ],
 "26th": [
  null,
  "26e"
 ],
 "27th": [
  null,
  "27e"
 ],
 "28th": [
  null,
  "28e"
 ],
 "29th": [
  null,
  "29e"
 ],
 "2nd": [
  null,
  "2e"
 ],
 "3 min": [
  null,
  "3 min"
 ],
 "30th": [
  null,
  "30e"
 ],
 "31st": [
  null,
  "31e"
 ],
 "3rd": [
  null,
  "3e"
 ],
 "4 min": [
  null,
  "4 min"
 ],
 "40 Minutes": [
  null,
  "40 minutes"
 ],
 "4th": [
  null,
  "4e"
 ],
 "5 Minutes": [
  null,
  "5 minutes"
 ],
 "5 min": [
  null,
  "5 min"
 ],
 "5 minutes": [
  null,
  "5 minutes"
 ],
 "5th": [
  null,
  "5e"
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
  "6e"
 ],
 "7th": [
  null,
  "7e"
 ],
 "8th": [
  null,
  "8e"
 ],
 "9th": [
  null,
  "9e"
 ],
 "Advanced TCA": [
  null,
  ""
 ],
 "After": [
  null,
  ""
 ],
 "After system boot": [
  null,
  ""
 ],
 "All In One": [
  null,
  ""
 ],
 "Asset Tag": [
  null,
  ""
 ],
 "At specific time": [
  null,
  ""
 ],
 "Automatically using NTP": [
  null,
  ""
 ],
 "Automatically using specific NTP servers": [
  null,
  ""
 ],
 "BIOS": [
  null,
  ""
 ],
 "BIOS date": [
  null,
  ""
 ],
 "BIOS version": [
  null,
  ""
 ],
 "Blade": [
  null,
  ""
 ],
 "Blade enclosure": [
  null,
  ""
 ],
 "Bus Expansion Chassis": [
  null,
  ""
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
 "Cannot schedule event in the past": [
  null,
  ""
 ],
 "Change": [
  null,
  ""
 ],
 "Change Host Name": [
  null,
  ""
 ],
 "Change System Time": [
  null,
  ""
 ],
 "Close": [
  null,
  "Fermer"
 ],
 "Command": [
  null,
  "Commande"
 ],
 "Compact PCI": [
  null,
  ""
 ],
 "Condition $0=$1 was not met": [
  null,
  ""
 ],
 "Condition failed": [
  null,
  ""
 ],
 "Convertible": [
  null,
  ""
 ],
 "Create Timer": [
  null,
  ""
 ],
 "Create Timers": [
  null,
  ""
 ],
 "Current boot": [
  null,
  ""
 ],
 "Delay": [
  null,
  ""
 ],
 "Description": [
  null,
  ""
 ],
 "Desktop": [
  null,
  ""
 ],
 "Detachable": [
  null,
  ""
 ],
 "Disable": [
  null,
  "Désactiver"
 ],
 "Disabled": [
  null,
  "Désactivé"
 ],
 "Disk I/O": [
  null,
  ""
 ],
 "Docking Station": [
  null,
  ""
 ],
 "Domain": [
  null,
  ""
 ],
 "Don't Repeat": [
  null,
  ""
 ],
 "Embedded PC": [
  null,
  ""
 ],
 "Enable": [
  null,
  "Activer"
 ],
 "Enable Forcefully": [
  null,
  "Forcer l'activation"
 ],
 "Enabled": [
  null,
  "Activé(e)"
 ],
 "Entry": [
  null,
  ""
 ],
 "Error": [
  null,
  "Erreur"
 ],
 "Everything": [
  null,
  ""
 ],
 "Expansion Chassis": [
  null,
  ""
 ],
 "Free": [
  null,
  "Disponible"
 ],
 "Friday": [
  null,
  ""
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
  ""
 ],
 "Hardware": [
  null,
  ""
 ],
 "Hardware Information": [
  null,
  ""
 ],
 "Host Name": [
  null,
  ""
 ],
 "Hour : Minute": [
  null,
  ""
 ],
 "Hour needs to be a number between 0-23": [
  null,
  ""
 ],
 "Hours": [
  null,
  ""
 ],
 "I/O Wait": [
  null,
  "Attente sur E/S"
 ],
 "Id": [
  null,
  ""
 ],
 "Instantiate": [
  null,
  ""
 ],
 "Invalid date format": [
  null,
  "Format de date invalide"
 ],
 "Invalid date format and invalid time format": [
  null,
  "Formats de date et d'heure invalides"
 ],
 "Invalid date format.": [
  null,
  ""
 ],
 "Invalid number.": [
  null,
  ""
 ],
 "Invalid time format": [
  null,
  "Format d'heure invalide"
 ],
 "Invalid time zone": [
  null,
  ""
 ],
 "IoT Gateway": [
  null,
  ""
 ],
 "Journal": [
  null,
  ""
 ],
 "Journal entry": [
  null,
  "Entrée de journal"
 ],
 "Journal entry not found": [
  null,
  "Entrée de journal introuvable"
 ],
 "Kernel": [
  null,
  "Noyau"
 ],
 "Laptop": [
  null,
  ""
 ],
 "Last 24 hours": [
  null,
  ""
 ],
 "Last 7 days": [
  null,
  ""
 ],
 "Last Trigger": [
  null,
  ""
 ],
 "Load earlier entries": [
  null,
  "Charger des entrées antérieures"
 ],
 "Loading...": [
  null,
  "Chargement..."
 ],
 "Log messages": [
  null,
  ""
 ],
 "Logs": [
  null,
  ""
 ],
 "Low Profile Desktop": [
  null,
  ""
 ],
 "Lunch Box": [
  null,
  ""
 ],
 "Machine ID": [
  null,
  ""
 ],
 "Machine SSH Key Fingerprints": [
  null,
  ""
 ],
 "Main Server Chassis": [
  null,
  ""
 ],
 "Manually": [
  null,
  ""
 ],
 "Mask": [
  null,
  "Masquer"
 ],
 "Mask Forcefully": [
  null,
  "Forcer le masquage"
 ],
 "Memory": [
  null,
  "Mémoire"
 ],
 "Message to logged in users": [
  null,
  "Message aux utilisateurs connectés"
 ],
 "Mini PC": [
  null,
  ""
 ],
 "Mini Tower": [
  null,
  ""
 ],
 "Minute needs to be a number between 0-59": [
  null,
  ""
 ],
 "Minutes": [
  null,
  ""
 ],
 "Monday": [
  null,
  ""
 ],
 "Multi-system Chassis": [
  null,
  ""
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
  "Au moins un serveur NTP est nécessaire"
 ],
 "Network Traffic": [
  null,
  ""
 ],
 "Next Run": [
  null,
  ""
 ],
 "Nice": [
  null,
  ""
 ],
 "No Delay": [
  null,
  ""
 ],
 "No host keys found.": [
  null,
  ""
 ],
 "Not authorized to upload-report": [
  null,
  ""
 ],
 "Not synchronized": [
  null,
  ""
 ],
 "Note": [
  null,
  ""
 ],
 "Notebook": [
  null,
  ""
 ],
 "Off": [
  null,
  "Éteint"
 ],
 "On": [
  null,
  "Allumé"
 ],
 "Only Problems": [
  null,
  ""
 ],
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  ""
 ],
 "Operating System": [
  null,
  ""
 ],
 "Other": [
  null,
  ""
 ],
 "Paths": [
  null,
  ""
 ],
 "Performance Profile": [
  null,
  ""
 ],
 "Peripheral Chassis": [
  null,
  ""
 ],
 "Pizza Box": [
  null,
  ""
 ],
 "Portable": [
  null,
  ""
 ],
 "Power Options": [
  null,
  ""
 ],
 "Preset": [
  null,
  "Préconfigurer"
 ],
 "Preset Forcefully": [
  null,
  "Forcer la préconfiguration"
 ],
 "Pretty Host Name": [
  null,
  ""
 ],
 "Problem details": [
  null,
  ""
 ],
 "Problem info": [
  null,
  ""
 ],
 "Problems, Errors": [
  null,
  ""
 ],
 "Problems, Errors, Warnings": [
  null,
  ""
 ],
 "Problems, Errors, Warnings, Notices": [
  null,
  ""
 ],
 "RAID Chassis": [
  null,
  ""
 ],
 "Rack Mount Chassis": [
  null,
  ""
 ],
 "Real Host Name": [
  null,
  ""
 ],
 "Real host name can only contain lower-case characters, digits, dashes, and periods (with populated subdomains)": [
  null,
  ""
 ],
 "Real host name must be 64 characters or less": [
  null,
  ""
 ],
 "Reboot": [
  null,
  "Redémarrer"
 ],
 "Recent": [
  null,
  ""
 ],
 "Reload": [
  null,
  "Recharger"
 ],
 "Repeat Daily": [
  null,
  ""
 ],
 "Repeat Hourly": [
  null,
  ""
 ],
 "Repeat Monthly": [
  null,
  ""
 ],
 "Repeat Weekly": [
  null,
  ""
 ],
 "Repeat Yearly": [
  null,
  ""
 ],
 "Report": [
  null,
  ""
 ],
 "Reported": [
  null,
  ""
 ],
 "Reporter 'reporter-ureport' not found.": [
  null,
  ""
 ],
 "Reporting was unsucessful. Try running `reporter-ureport -d ": [
  null,
  ""
 ],
 "Reset": [
  null,
  ""
 ],
 "Restart": [
  null,
  "Redémarrer"
 ],
 "Run": [
  null,
  ""
 ],
 "Saturday": [
  null,
  ""
 ],
 "Save": [
  null,
  ""
 ],
 "Sealed-case PC": [
  null,
  ""
 ],
 "Seconds": [
  null,
  ""
 ],
 "Secure Shell Keys": [
  null,
  ""
 ],
 "Service Logs": [
  null,
  ""
 ],
 "Service name": [
  null,
  ""
 ],
 "Services": [
  null,
  ""
 ],
 "Set Host name": [
  null,
  "Définir le nom d'hôte"
 ],
 "Set Time": [
  null,
  ""
 ],
 "Severity": [
  null,
  ""
 ],
 "Show fingerprints": [
  null,
  ""
 ],
 "Shut Down": [
  null,
  ""
 ],
 "Since $0": [
  null,
  "Depuis $0"
 ],
 "Sockets": [
  null,
  ""
 ],
 "Space-saving Computer": [
  null,
  ""
 ],
 "Specific Time": [
  null,
  ""
 ],
 "Start": [
  null,
  "Démarrer"
 ],
 "State": [
  null,
  ""
 ],
 "Static": [
  null,
  "Statique"
 ],
 "Stick PC": [
  null,
  ""
 ],
 "Stop": [
  null,
  "Arrêter"
 ],
 "Store Performance Data": [
  null,
  ""
 ],
 "Sub Chassis": [
  null,
  ""
 ],
 "Sub Notebook": [
  null,
  ""
 ],
 "Sunday": [
  null,
  ""
 ],
 "Swap Used": [
  null,
  "Échange utilisé"
 ],
 "Synchronized": [
  null,
  ""
 ],
 "Synchronized with {{Server}}": [
  null,
  ""
 ],
 "System": [
  null,
  ""
 ],
 "System Information": [
  null,
  ""
 ],
 "System Services": [
  null,
  ""
 ],
 "System Time": [
  null,
  ""
 ],
 "Tablet": [
  null,
  ""
 ],
 "Targets": [
  null,
  ""
 ],
 "Terminal": [
  null,
  ""
 ],
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  "L'utilisateur <b>$0</b> n'a pas le droit de modifier les noms d'hôtes"
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  ""
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  ""
 ],
 "This field cannot be empty.": [
  null,
  ""
 ],
 "This unit is an instance of the $0 template.": [
  null,
  "Cette unité est une instance du modèle $0."
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  ""
 ],
 "Thursday": [
  null,
  ""
 ],
 "Time Zone": [
  null,
  ""
 ],
 "Timers": [
  null,
  ""
 ],
 "Tower": [
  null,
  ""
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  ""
 ],
 "Tuesday": [
  null,
  ""
 ],
 "Type": [
  null,
  "Type"
 ],
 "Unknown": [
  null,
  "Inconnu"
 ],
 "Unmask": [
  null,
  "Démasquer"
 ],
 "Usage of $0 CPU core": [
  "Usage of $0 CPU cores",
  "",
  ""
 ],
 "Used": [
  null,
  "Utilisé(e)"
 ],
 "User": [
  null,
  "Utilisateur"
 ],
 "Version": [
  null,
  "Version"
 ],
 "Wednesday": [
  null,
  ""
 ],
 "Weeks": [
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
 "failed to list ssh host keys: $0": [
  null,
  ""
 ],
 "of $0 CPU core": [
  "of $0 CPU cores",
  "",
  ""
 ],
 "unknown": [
  null,
  ""
 ],
 "page-title\u0004CPU Status": [
  null,
  "État du CPU"
 ],
 "page-title\u0004Memory": [
  null,
  "Mémoire"
 ]
}));
