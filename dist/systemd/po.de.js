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
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Template": [
  null,
  "$0 Template"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 ist in keinem Repository verfügbar."
 ],
 "$0 will be installed.": [
  null,
  "$0 wird installiert."
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
 "Additional packages:": [
  null,
  "Zusatzpakete:"
 ],
 "Advanced TCA": [
  null,
  "Fortgeschrittenes TCA"
 ],
 "After": [
  null,
  "Hinten"
 ],
 "After system boot": [
  null,
  "Nach dem Systemstart"
 ],
 "Alert and above": [
  null,
  "Alarm und oben"
 ],
 "All In One": [
  null,
  "Alles in einem"
 ],
 "Asset Tag": [
  null,
  "Kennzeichen"
 ],
 "At specific time": [
  null,
  "Zu einer bestimmten Zeit"
 ],
 "Automatic Startup": [
  null,
  "Automatische Updates"
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
  "BIOS"
 ],
 "BIOS date": [
  null,
  "BIOS-Datum"
 ],
 "BIOS version": [
  null,
  "BIOS-Version"
 ],
 "Before": [
  null,
  "Bevor"
 ],
 "Binds To": [
  null,
  "Bindet an"
 ],
 "Blade": [
  null,
  "Klinge"
 ],
 "Blade enclosure": [
  null,
  "Klingengehäuse"
 ],
 "Bound By": [
  null,
  "Gebunden"
 ],
 "Bug Fix Updates Available": [
  null,
  "Bug Fix Updates verfügbar"
 ],
 "Bus Expansion Chassis": [
  null,
  "Bus-Erweiterungsgehäuse"
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
  "Ändern"
 ],
 "Change Host Name": [
  null,
  "Rechnernamen ändern"
 ],
 "Change System Time": [
  null,
  "Systemzeit ändern"
 ],
 "Checking for updates…": [
  null,
  "Nach Updates suchen…"
 ],
 "Checking installed software": [
  null,
  "Installierte Software überprüfen"
 ],
 "Class": [
  null,
  "Klasse"
 ],
 "Click to see system hardware information": [
  null,
  "Klicken Sie hier, um Informationen zur Systemhardware anzuzeigen"
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
  "Kompakte PCI"
 ],
 "Condition $0=$1 was not met": [
  null,
  "Bedingung $0=$1 wurde nicht erfüllt"
 ],
 "Condition failed": [
  null,
  "Bedingung fehlgeschlagen"
 ],
 "Conflicted By": [
  null,
  "Konflikt von"
 ],
 "Conflicts": [
  null,
  "Konflikte"
 ],
 "Consists Of": [
  null,
  "Besteht aus"
 ],
 "Convertible": [
  null,
  "Convertible"
 ],
 "Create Timer": [
  null,
  "Timer erstellen"
 ],
 "Create Timers": [
  null,
  "Timer erstellen"
 ],
 "Critical and above": [
  null,
  "Kritisch und oben"
 ],
 "Current boot": [
  null,
  "Aktueller Boot"
 ],
 "Debug and above": [
  null,
  "Debuggen und darüber"
 ],
 "Delay": [
  null,
  "Verzögerung"
 ],
 "Description": [
  null,
  "Beschreibung"
 ],
 "Desktop": [
  null,
  "Desktop"
 ],
 "Detachable": [
  null,
  "Abnehmbar"
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
  "Festplatten-E/A"
 ],
 "Docking Station": [
  null,
  "Dockingstation"
 ],
 "Domain": [
  null,
  "Domain"
 ],
 "Don't Repeat": [
  null,
  "Nicht wiederholen"
 ],
 "Downloading $0": [
  null,
  "wird heruntergeladen $0"
 ],
 "Embedded PC": [
  null,
  "Eingebetteter PC"
 ],
 "Enable": [
  null,
  "Einschalten"
 ],
 "Enable Forcefully": [
  null,
  "Gewaltsam Einschalten"
 ],
 "Enable stored metrics…": [
  null,
  "Gespeicherte Metriken aktivieren…"
 ],
 "Enabled": [
  null,
  "Aktiviert"
 ],
 "Enhancement Updates Available": [
  null,
  "Verbesserungsaktualisierungen verfügbar"
 ],
 "Entry": [
  null,
  "Eintrag"
 ],
 "Error": [
  null,
  "Fehler"
 ],
 "Error and above": [
  null,
  "Fehler und darüber"
 ],
 "Everything": [
  null,
  "Alles"
 ],
 "Expansion Chassis": [
  null,
  "Erweiterungsgehäuse"
 ],
 "Friday": [
  null,
  "Freitag"
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
  "Hand gehalten"
 ],
 "Hardware": [
  null,
  "Hardware"
 ],
 "Hardware Information": [
  null,
  "Hardware-Informationen"
 ],
 "Host Name": [
  null,
  "Rechnername"
 ],
 "Hour : Minute": [
  null,
  "Stunde : Minute"
 ],
 "Hour needs to be a number between 0-23": [
  null,
  "Die Stunde muss eine Zahl zwischen 0 und 23 sein"
 ],
 "Hours": [
  null,
  "Stunde"
 ],
 "I/O Wait": [
  null,
  "I / O Warten"
 ],
 "Id": [
  null,
  "ID"
 ],
 "Info and above": [
  null,
  "Info und darüber"
 ],
 "Install": [
  null,
  "Installation"
 ],
 "Install Software": [
  null,
  "Software installieren"
 ],
 "Installing $0": [
  null,
  "$0 wird installiert"
 ],
 "Instantiate": [
  null,
  "Instanzieren"
 ],
 "Invalid date format": [
  null,
  "ungültiges Datumsformat"
 ],
 "Invalid date format and invalid time format": [
  null,
  "Ungültiges Datumsformat und ungültiges Zeitformat"
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
  "Ungültiges Zeitformat"
 ],
 "Invalid time zone": [
  null,
  "Ungültige Zeitzone"
 ],
 "IoT Gateway": [
  null,
  "IoT-Gateway"
 ],
 "Joins Namespace Of": [
  null,
  "Tritt dem Namespace Of bei"
 ],
 "Journal": [
  null,
  "Tagebuch"
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
  "Laptop"
 ],
 "Last 24 hours": [
  null,
  "Letzte 24 Stunden"
 ],
 "Last 7 days": [
  null,
  "Letzte 7 Tage"
 ],
 "Last Trigger": [
  null,
  "Letzter Auslöser"
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
  "Nachrichten protokollieren"
 ],
 "Logs": [
  null,
  "Protokolle"
 ],
 "Low Profile Desktop": [
  null,
  "Low-Profile-Desktop"
 ],
 "Lunch Box": [
  null,
  "Brotdose"
 ],
 "Machine ID": [
  null,
  "Maschinen-ID"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "SSH-Fingerabdrücke auf diesem Rechner"
 ],
 "Main Server Chassis": [
  null,
  "Hauptservergehäuse"
 ],
 "Manually": [
  null,
  "Manuell"
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
 "Memory & Swap": [
  null,
  "Speicher & Swap"
 ],
 "Message to logged in users": [
  null,
  "Nachricht an angemeldete Benutzer"
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
  "Minute muss eine Zahl zwischen 0 und 59 sein"
 ],
 "Minutes": [
  null,
  "Minuten"
 ],
 "Model": [
  null,
  "Modell"
 ],
 "Monday": [
  null,
  "Montag"
 ],
 "Multi-system Chassis": [
  null,
  "Multi-System-Chassis"
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
  "Benötigen Sie mindestens einen NTP-Server"
 ],
 "Network Traffic": [
  null,
  "Netzwerk-Verkehr"
 ],
 "Next Run": [
  null,
  "Nächster Run"
 ],
 "Nice": [
  null,
  "Nice-Wert"
 ],
 "No Delay": [
  null,
  "Keine Verzögerung"
 ],
 "No host keys found.": [
  null,
  "Es wurden keine Host-Schlüssel gefunden."
 ],
 "Not authorized to upload-report": [
  null,
  "Keine Berechtigung zum Hochladen von Berichten"
 ],
 "Not synchronized": [
  null,
  "Nicht synchronisiert"
 ],
 "Note": [
  null,
  "Hinweis"
 ],
 "Notebook": [
  null,
  "Notizbuch"
 ],
 "Notice and above": [
  null,
  "Hinweis und oben"
 ],
 "Off": [
  null,
  "Aus"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On": [
  null,
  "Ein"
 ],
 "On Failure": [
  null,
  "Bei einem Ausfall"
 ],
 "Only Emergency": [
  null,
  "Nur Notfall"
 ],
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  "Nur Alphabete, Zahlen,:, _,. , @ , - sind erlaubt."
 ],
 "Operating System": [
  null,
  "Betriebssystem"
 ],
 "Other": [
  null,
  "Weitere"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit ist abgestürzt"
 ],
 "Part Of": [
  null,
  "Teil von"
 ],
 "Path": [
  null,
  "Pfad"
 ],
 "Paths": [
  null,
  "Pfade"
 ],
 "Performance Profile": [
  null,
  "Leistungsprofil"
 ],
 "Peripheral Chassis": [
  null,
  "Peripheriechassis"
 ],
 "Pizza Box": [
  null,
  "Pizza-Box"
 ],
 "Portable": [
  null,
  "tragbar"
 ],
 "Power Options": [
  null,
  "Energieoptionen"
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
  "Anzeige-Rechnername"
 ],
 "Problem details": [
  null,
  "Problemdetails"
 ],
 "Problem info": [
  null,
  "Problem Info"
 ],
 "Propagates Reload To": [
  null,
  "Propagiert reload to"
 ],
 "RAID Chassis": [
  null,
  "RAID-Chassis"
 ],
 "Rack Mount Chassis": [
  null,
  "Rack-Einbaugehäuse"
 ],
 "Real Host Name": [
  null,
  "Echter Rechnername"
 ],
 "Real host name can only contain lower-case characters, digits, dashes, and periods (with populated subdomains)": [
  null,
  "Ein echter Hostname darf nur Kleinbuchstaben, Ziffern, Bindestriche und Punkte enthalten (mit ausgefüllten Unterdomänen)."
 ],
 "Real host name must be 64 characters or less": [
  null,
  "Der tatsächliche Hostname darf höchstens 64 Zeichen umfassen"
 ],
 "Reboot": [
  null,
  "Neustart"
 ],
 "Recent": [
  null,
  "Zuletzt verwendet"
 ],
 "Reload": [
  null,
  "Neu Laden"
 ],
 "Reload Propagated From": [
  null,
  "Propagiert von neu laden"
 ],
 "Removals:": [
  null,
  "Umzüge:"
 ],
 "Removing $0": [
  null,
  "Entfernen $0"
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
  "Melden"
 ],
 "Reported": [
  null,
  "Berichtete"
 ],
 "Reporter 'reporter-ureport' not found.": [
  null,
  "Reporter 'Reporter-ureport' nicht gefunden."
 ],
 "Reporting was unsucessful. Try running `reporter-ureport -d ": [
  null,
  "Die Berichterstattung war erfolglos. Führen Sie `reporter-ureport -d aus "
 ],
 "Required By": [
  null,
  "Benötigt von"
 ],
 "Requires": [
  null,
  "Erfordert"
 ],
 "Requisite": [
  null,
  "Requisit"
 ],
 "Requisite Of": [
  null,
  "Erfordernis von"
 ],
 "Reset": [
  null,
  "Zurücksetzen"
 ],
 "Restart": [
  null,
  "Neustarten"
 ],
 "Run": [
  null,
  "Ausführen"
 ],
 "Running Since": [
  null,
  "Laufen seit"
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
  "PC mit versiegeltem Gehäuse"
 ],
 "Seconds": [
  null,
  "Sekunden"
 ],
 "Secure Shell Keys": [
  null,
  "Secure Shell-Schlüssel"
 ],
 "Security Updates Available": [
  null,
  "Sicherheitsupdates verfügbar"
 ],
 "Service Logs": [
  null,
  "Serviceprotokolle"
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
  "Rechnernamen festlegen"
 ],
 "Set Time": [
  null,
  "Zeit setzen"
 ],
 "Severity": [
  null,
  "Schweregrad"
 ],
 "Show fingerprints": [
  null,
  "Fingerabdrücke anzeigen"
 ],
 "Shut Down": [
  null,
  "Herunterfahren"
 ],
 "Slot": [
  null,
  "Slot"
 ],
 "Sockets": [
  null,
  "Sockets"
 ],
 "Space-saving Computer": [
  null,
  "Platzsparender Computer"
 ],
 "Specific Time": [
  null,
  "Bestimmte Zeit"
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
 "Status": [
  null,
  "Status"
 ],
 "Stick PC": [
  null,
  "Stick PC"
 ],
 "Stop": [
  null,
  "Stoppen"
 ],
 "Store metrics": [
  null,
  "Kennzahlen speichern"
 ],
 "Sub Chassis": [
  null,
  "Sub-Chassis"
 ],
 "Sub Notebook": [
  null,
  "Subnotizbuch"
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
  "Systeminformationen"
 ],
 "System Not Registered": [
  null,
  "System nicht registriert"
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
  "System ist auf aktuellem Stand"
 ],
 "Tablet": [
  null,
  "Tablett"
 ],
 "Targets": [
  null,
  "Ziele"
 ],
 "Terminal": [
  null,
  "Terminal"
 ],
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  "Der Benutzer <b>$0</b> hat keine Rechte zum Anlegen von Timern"
 ],
 "The user <b>$0</b> is not permitted to change the system time": [
  null,
  "Der Benutzer <b>$0</b> darf die Systemzeit nicht ändern"
 ],
 "The user <b>$0</b> is not permitted to enable or disable services": [
  null,
  "Der Benutzer <b>$0</b> darf keine Dienste aktivieren oder deaktivieren"
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  "Der Benutzer <b>$0</b> hat keine Rechte, Hostnamen zu verändern"
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  "Der Benutzer <b>$0</b> darf diesen Server nicht herunterfahren oder neu starten"
 ],
 "The user <b>$0</b> is not permitted to start or stop services": [
  null,
  "Der Benutzer <b>$0</b> ist nicht berechtigt, Dienste zu starten oder zu stoppen"
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
  "Diese Einheit ist eine Instanz von $0 Vorlage."
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  "Dieses Gerät kann nicht explizit aktiviert werden."
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
  "Timer"
 ],
 "Total size: $0": [
  null,
  "Gesamtgröße: $0"
 ],
 "Tower": [
  null,
  "Turm"
 ],
 "Triggered By": [
  null,
  "Ausgelöst durch"
 ],
 "Triggers": [
  null,
  "Löst aus"
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
  "Updates verfügbar"
 ],
 "Usage of $0 CPU core": [
  "Usage of $0 CPU cores",
  "Verwendung von $0 CPU-Kern",
  "Verwendung von $0 CPU-Kernen"
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
  "Anbieter"
 ],
 "Version": [
  null,
  "Version"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Warten, bis andere Software-Verwaltungsvorgänge abgeschlossen sind"
 ],
 "Wanted By": [
  null,
  "Gesucht von"
 ],
 "Wants": [
  null,
  "Will"
 ],
 "Warning and above": [
  null,
  "Warnung und oben"
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
  "von $0 CPU-Kern",
  "von $0 CPU-Kernen"
 ],
 "undefined": [
  null,
  "nicht definiert"
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
