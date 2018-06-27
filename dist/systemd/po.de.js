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
nplurals=2; plural=(n != 1);
return plural;
},
  "language": "de",
  "x-generator": "Zanata 4.4.5"
 },
 "$0 Template": [
  null,
  "$0 Template"
 ],
 "$0 day": [
  "$0 days",
  "$0 Tag",
  "$0 Tage"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 Stunde",
  "$0 Stunden"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 Minute",
  "$0 Minuten"
 ],
 "$0 month": [
  "$0 months",
  "$0 Monat",
  "$0 Monate"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 Woche",
  "$0 Wochen"
 ],
 "$0 year": [
  "$0 years",
  "$0 Jahr",
  "$0 Jahre"
 ],
 "1 Minute": [
  null,
  "1 Minute"
 ],
 "1 day": [
  null,
  "1 Tag"
 ],
 "1 hour": [
  null,
  "1 Stunde"
 ],
 "1 min": [
  null,
  "1 Minute"
 ],
 "1 week": [
  null,
  "1 Woche"
 ],
 "10th": [
  null,
  "10."
 ],
 "11th": [
  null,
  "11."
 ],
 "12th": [
  null,
  "12."
 ],
 "13th": [
  null,
  "13."
 ],
 "14th": [
  null,
  "14."
 ],
 "15th": [
  null,
  "15."
 ],
 "16th": [
  null,
  "16."
 ],
 "17th": [
  null,
  "17."
 ],
 "18th": [
  null,
  "18."
 ],
 "19th": [
  null,
  "19."
 ],
 "1st": [
  null,
  "1."
 ],
 "2 min": [
  null,
  "2 Minuten"
 ],
 "20 Minutes": [
  null,
  "20 Minuten"
 ],
 "20th": [
  null,
  "20."
 ],
 "21st": [
  null,
  "21."
 ],
 "22nd": [
  null,
  "22."
 ],
 "23rd": [
  null,
  "23."
 ],
 "24th": [
  null,
  "24."
 ],
 "25th": [
  null,
  "25."
 ],
 "26th": [
  null,
  "26."
 ],
 "27th": [
  null,
  "27."
 ],
 "28th": [
  null,
  "28."
 ],
 "29th": [
  null,
  "29."
 ],
 "2nd": [
  null,
  "2."
 ],
 "3 min": [
  null,
  "3 Minuten"
 ],
 "30th": [
  null,
  "30."
 ],
 "31st": [
  null,
  "31."
 ],
 "3rd": [
  null,
  "3."
 ],
 "4 min": [
  null,
  "4 Minuten"
 ],
 "40 Minutes": [
  null,
  "40 Minuten"
 ],
 "4th": [
  null,
  "4."
 ],
 "5 Minutes": [
  null,
  "5 Minuten"
 ],
 "5 min": [
  null,
  "5 Minuten"
 ],
 "5 minutes": [
  null,
  "5 Minuten"
 ],
 "5th": [
  null,
  "5."
 ],
 "6 hours": [
  null,
  "6 Stunden"
 ],
 "60 Minutes": [
  null,
  "60 Minuten"
 ],
 "6th": [
  null,
  "6."
 ],
 "7th": [
  null,
  "7."
 ],
 "8th": [
  null,
  "8."
 ],
 "9th": [
  null,
  "9."
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
 "Alert and above": [
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
  "Automatisch (NTP)"
 ],
 "Automatically using specific NTP servers": [
  null,
  "Automatisch (spezifische NTP-Server)"
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
 "Before": [
  null,
  ""
 ],
 "Binds To": [
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
 "Bound By": [
  null,
  ""
 ],
 "Bug Fix Updates Available": [
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
  "Zwischengespeichert"
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Cannot schedule event in the past": [
  null,
  "Vorgang kann nicht für die Vergangenheit geplant werden"
 ],
 "Change": [
  null,
  ""
 ],
 "Change Host Name": [
  null,
  "Hostnamen ändern"
 ],
 "Change System Time": [
  null,
  "Systemzeit ändern"
 ],
 "Checking for updates…": [
  null,
  ""
 ],
 "Class": [
  null,
  ""
 ],
 "Click to see system hardware information": [
  null,
  ""
 ],
 "Close": [
  null,
  "Schließen"
 ],
 "Command": [
  null,
  "Befehl"
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
 "Conflicted By": [
  null,
  ""
 ],
 "Conflicts": [
  null,
  ""
 ],
 "Consists Of": [
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
  "Erstellen"
 ],
 "Critical and above": [
  null,
  ""
 ],
 "Current boot": [
  null,
  ""
 ],
 "Debug and above": [
  null,
  ""
 ],
 "Delay": [
  null,
  "Verzögerung"
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
  "Ausschalten"
 ],
 "Disabled": [
  null,
  "Deaktiviert"
 ],
 "Disk I/O": [
  null,
  "Datenträger ist OK"
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
  "Einschalten"
 ],
 "Enable Forcefully": [
  null,
  "Gewaltsam Einschalten"
 ],
 "Enabled": [
  null,
  "Aktiviert"
 ],
 "Enhancement Updates Available": [
  null,
  ""
 ],
 "Entry": [
  null,
  ""
 ],
 "Error": [
  null,
  "Fehler"
 ],
 "Error and above": [
  null,
  ""
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
  "Verfügbar"
 ],
 "Friday": [
  null,
  ""
 ],
 "General": [
  null,
  "Allgemein"
 ],
 "Go to": [
  null,
  "Gehe zu"
 ],
 "Go to now": [
  null,
  "Zu 'Jetzt' gehen"
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
  "1 Minute"
 ],
 "Hour needs to be a number between 0-23": [
  null,
  ""
 ],
 "Hours": [
  null,
  "6 Stunden"
 ],
 "I/O Wait": [
  null,
  ""
 ],
 "Id": [
  null,
  ""
 ],
 "Info and above": [
  null,
  ""
 ],
 "Instantiate": [
  null,
  "Instanzieren"
 ],
 "Invalid date format": [
  null,
  ""
 ],
 "Invalid date format and invalid time format": [
  null,
  ""
 ],
 "Invalid date format.": [
  null,
  "Ungültiger Port"
 ],
 "Invalid number.": [
  null,
  "Ungültiger Schlüssel"
 ],
 "Invalid time format": [
  null,
  ""
 ],
 "Invalid time zone": [
  null,
  ""
 ],
 "IoT Gateway": [
  null,
  ""
 ],
 "Joins Namespace Of": [
  null,
  ""
 ],
 "Journal": [
  null,
  ""
 ],
 "Journal entry": [
  null,
  "Journal-Eintrag"
 ],
 "Journal entry not found": [
  null,
  "Journal-Eintrag nicht gefunden"
 ],
 "Kernel": [
  null,
  "Kernel"
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
  "Frühere Einträge laden"
 ],
 "Loading...": [
  null,
  "Lade..."
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
  "Sperren"
 ],
 "Mask Forcefully": [
  null,
  "Maskieren erzwingen"
 ],
 "Memory": [
  null,
  "Speicher"
 ],
 "Message to logged in users": [
  null,
  "Nachricht an angemeldete Benutzer"
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
  "5 Minuten"
 ],
 "Model": [
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
  "NTP Server"
 ],
 "Name": [
  null,
  "Name"
 ],
 "Need at least one NTP server": [
  null,
  ""
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
  "Keine Verzögerung"
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
 "Notice and above": [
  null,
  ""
 ],
 "Off": [
  null,
  "Aus"
 ],
 "On": [
  null,
  "Ein"
 ],
 "On Failure": [
  null,
  ""
 ],
 "Only Emergency": [
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
 "PCI": [
  null,
  ""
 ],
 "PackageKit crashed": [
  null,
  ""
 ],
 "Part Of": [
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
  "Voreinstellen"
 ],
 "Preset Forcefully": [
  null,
  "Gewaltsam Voreinstellen"
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
 "Propagates Reload To": [
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
  "Neustart"
 ],
 "Recent": [
  null,
  ""
 ],
 "Reload": [
  null,
  "Neu Laden"
 ],
 "Reload Propagated From": [
  null,
  ""
 ],
 "Repeat Daily": [
  null,
  "Täglich wiederholen"
 ],
 "Repeat Hourly": [
  null,
  "Stündlich wiederholen"
 ],
 "Repeat Monthly": [
  null,
  "Monatlich wiederholen"
 ],
 "Repeat Weekly": [
  null,
  "Wöchentlich wiederholen"
 ],
 "Repeat Yearly": [
  null,
  "Jährlich wiederholen"
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
 "Required By": [
  null,
  ""
 ],
 "Requires": [
  null,
  ""
 ],
 "Requisite": [
  null,
  ""
 ],
 "Requisite Of": [
  null,
  ""
 ],
 "Reset": [
  null,
  ""
 ],
 "Restart": [
  null,
  "Neustarten"
 ],
 "Run": [
  null,
  "Läuft"
 ],
 "Saturday": [
  null,
  "Samstag"
 ],
 "Save": [
  null,
  "Speichern"
 ],
 "Sealed-case PC": [
  null,
  ""
 ],
 "Seconds": [
  null,
  "Sekunden"
 ],
 "Secure Shell Keys": [
  null,
  ""
 ],
 "Security Updates Available": [
  null,
  ""
 ],
 "Service Logs": [
  null,
  ""
 ],
 "Service name": [
  null,
  "Dienstname"
 ],
 "Services": [
  null,
  "Dienste"
 ],
 "Set Host name": [
  null,
  "Hostname festlegen"
 ],
 "Set Time": [
  null,
  "Zeit setzen"
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
  "Herunterfahren"
 ],
 "Since $0": [
  null,
  "Seit $0"
 ],
 "Slot": [
  null,
  ""
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
  "Starten"
 ],
 "State": [
  null,
  "Status"
 ],
 "Static": [
  null,
  "Statisch"
 ],
 "Stick PC": [
  null,
  ""
 ],
 "Stop": [
  null,
  "Stoppen"
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
  "Sonntag"
 ],
 "Swap Used": [
  null,
  "Benutzter Auslagerungsspeicher"
 ],
 "Synchronized": [
  null,
  "Synchronisiert"
 ],
 "Synchronized with {{Server}}": [
  null,
  "Synchronisiert mit {{Server}}"
 ],
 "System": [
  null,
  "System"
 ],
 "System Information": [
  null,
  ""
 ],
 "System Not Registered": [
  null,
  ""
 ],
 "System Services": [
  null,
  "System Dienste"
 ],
 "System Time": [
  null,
  "Systemzeit"
 ],
 "System Up To Date": [
  null,
  ""
 ],
 "Tablet": [
  null,
  ""
 ],
 "Targets": [
  null,
  "Ziele"
 ],
 "Terminal": [
  null,
  ""
 ],
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  "Der Benutzer <b>$0</b> hat keine Rechte zum Anlegen von Timern"
 ],
 "The user <b>$0</b> is not permitted to change the system time": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  "Der Benutzer <b>$0</b> hat keine Rechte, Hostnamen zu verändern"
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  ""
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  "Dieser Tag ist nicht in allen Monaten vorhanden.<br> Die Aktion wird nur in Monaten mit 31 Tagen ausgeführt."
 ],
 "This field cannot be empty.": [
  null,
  "Dieses Feld darf nicht leer sein."
 ],
 "This unit is an instance of the $0 template.": [
  null,
  ""
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  ""
 ],
 "Thursday": [
  null,
  "Donnerstag"
 ],
 "Time Zone": [
  null,
  "Zeitzone"
 ],
 "Timers": [
  null,
  ""
 ],
 "Tower": [
  null,
  ""
 ],
 "Triggered By": [
  null,
  ""
 ],
 "Triggers": [
  null,
  ""
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  "Versuche mit  {{Server}} zu synchronisieren"
 ],
 "Tuesday": [
  null,
  "Dienstag"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "Unknown": [
  null,
  "Unbekannt"
 ],
 "Unmask": [
  null,
  "Freigeben"
 ],
 "Updates Available": [
  null,
  ""
 ],
 "Usage of $0 CPU core": [
  "Usage of $0 CPU cores",
  "",
  ""
 ],
 "Used": [
  null,
  "Benutzt"
 ],
 "User": [
  null,
  "Benutzer"
 ],
 "Vendor": [
  null,
  ""
 ],
 "Version": [
  null,
  "Version"
 ],
 "Wanted By": [
  null,
  ""
 ],
 "Wants": [
  null,
  ""
 ],
 "Warning and above": [
  null,
  ""
 ],
 "Wednesday": [
  null,
  "Mittwoch"
 ],
 "Weeks": [
  null,
  "Wochen"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 bytes Binäredaten]"
 ],
 "[binary data]": [
  null,
  "[Binärdaten]"
 ],
 "[no data]": [
  null,
  "[keine Daten]"
 ],
 "failed to list ssh host keys: $0": [
  null,
  "Kann SSH-Hostschlüssel nicht anzeigen: $0"
 ],
 "of $0 CPU core": [
  "of $0 CPU cores",
  "",
  ""
 ],
 "unknown": [
  null,
  "unbekannt"
 ],
 "page-title\u0004CPU Status": [
  null,
  "CPU Status"
 ],
 "page-title\u0004Memory": [
  null,
  "Speicher"
 ]
}));
