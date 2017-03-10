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
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Template": [
  null,
  "$0 Template"
 ],
 "$0 day": [
  "$0 days",
  "",
  ""
 ],
 "$0 hour": [
  "$0 hours",
  "",
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  "",
  ""
 ],
 "$0 month": [
  "$0 months",
  "",
  ""
 ],
 "$0 week": [
  "$0 weeks",
  "",
  ""
 ],
 "$0 year": [
  "$0 years",
  "",
  ""
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
  ""
 ],
 "1 week": [
  null,
  "1 Woche"
 ],
 "10th": [
  null,
  ""
 ],
 "11th": [
  null,
  ""
 ],
 "12th": [
  null,
  ""
 ],
 "13th": [
  null,
  ""
 ],
 "14th": [
  null,
  ""
 ],
 "15th": [
  null,
  ""
 ],
 "16th": [
  null,
  ""
 ],
 "17th": [
  null,
  ""
 ],
 "18th": [
  null,
  ""
 ],
 "19th": [
  null,
  ""
 ],
 "1st": [
  null,
  ""
 ],
 "2 min": [
  null,
  ""
 ],
 "20 Minutes": [
  null,
  "20 Minuten"
 ],
 "20th": [
  null,
  ""
 ],
 "21st": [
  null,
  ""
 ],
 "22nd": [
  null,
  ""
 ],
 "23rd": [
  null,
  ""
 ],
 "24th": [
  null,
  ""
 ],
 "25th": [
  null,
  ""
 ],
 "26th": [
  null,
  ""
 ],
 "27th": [
  null,
  ""
 ],
 "28th": [
  null,
  ""
 ],
 "29th": [
  null,
  ""
 ],
 "2nd": [
  null,
  ""
 ],
 "3 min": [
  null,
  ""
 ],
 "30th": [
  null,
  ""
 ],
 "31st": [
  null,
  ""
 ],
 "3rd": [
  null,
  ""
 ],
 "4 min": [
  null,
  ""
 ],
 "40 Minutes": [
  null,
  "40 Minuten"
 ],
 "4th": [
  null,
  ""
 ],
 "5 Minutes": [
  null,
  "5 Minuten"
 ],
 "5 min": [
  null,
  ""
 ],
 "5 minutes": [
  null,
  "5 Minuten"
 ],
 "5th": [
  null,
  ""
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
  ""
 ],
 "7th": [
  null,
  ""
 ],
 "8th": [
  null,
  ""
 ],
 "9th": [
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
 "All": [
  null,
  "Alle"
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
 "CPU": [
  null,
  "CPU"
 ],
 "Cached": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Abbrechen"
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
  "Schliessen"
 ],
 "Command": [
  null,
  "Befehl"
 ],
 "Create Timer": [
  null,
  ""
 ],
 "Create Timers": [
  null,
  "Erstellen"
 ],
 "Current boot": [
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
 "Domain": [
  null,
  ""
 ],
 "Don't Repeat": [
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
 "Entry": [
  null,
  ""
 ],
 "Error": [
  null,
  "Fehler"
 ],
 "Errors": [
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
 "Go to": [
  null,
  "Gehe zu"
 ],
 "Go to now": [
  null,
  "Zu 'Jetzt' gehen"
 ],
 "Hardware": [
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
 "Isolate": [
  null,
  "Isolieren"
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
 "Machine ID": [
  null,
  ""
 ],
 "Machine SSH Key Fingerprints": [
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
 "Minute needs to be a number between 0-59": [
  null,
  ""
 ],
 "Minutes": [
  null,
  "5 Minuten"
 ],
 "Monday": [
  null,
  ""
 ],
 "NTP Server": [
  null,
  "NTP Server"
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
 "Not synchronized": [
  null,
  ""
 ],
 "Note": [
  null,
  ""
 ],
 "Notices": [
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
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  ""
 ],
 "Operating System": [
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
 "Reload or Restart": [
  null,
  "Neu Laden oder Neu Starten"
 ],
 "Reload or Try Restart": [
  null,
  "Neu Laden oder Neustart Versuchen"
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
  ""
 ],
 "Save": [
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
  "Gerätedatei"
 ],
 "Services": [
  null,
  ""
 ],
 "Set Host name": [
  null,
  "Hostname festlegen"
 ],
 "Set Time": [
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
 "Sockets": [
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
  ""
 ],
 "Static": [
  null,
  "Statisch"
 ],
 "Stop": [
  null,
  "Stoppen"
 ],
 "Store Performance Data": [
  null,
  ""
 ],
 "Sunday": [
  null,
  ""
 ],
 "Swap Used": [
  null,
  ""
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
 "System Services": [
  null,
  "System Dienste"
 ],
 "System Time": [
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
  "Der Benutzer <b>$0</b> hat keine Rechte, um Server zu administrieren"
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  ""
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  ""
 ],
 "This field cannot be empty.": [
  null,
  "Name darf nicht leer sein."
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
 "Try Restart": [
  null,
  "Neustart Versuchen"
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  ""
 ],
 "Tuesday": [
  null,
  ""
 ],
 "Unmask": [
  null,
  "Freigeben"
 ],
 "Used": [
  null,
  "Benutzt"
 ],
 "User": [
  null,
  "Benutzer"
 ],
 "Version": [
  null,
  "Version"
 ],
 "Warnings": [
  null,
  ""
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
  ""
 ],
 "[binary data]": [
  null,
  ""
 ],
 "[no data]": [
  null,
  ""
 ],
 "failed to list ssh host keys: $0": [
  null,
  ""
 ],
 "unknown": [
  null,
  ""
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
