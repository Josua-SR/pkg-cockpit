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
 "Asset Tag": [
  null,
  "Kennzeichen"
 ],
 "At specific time": [
  null,
  "Zu einer bestimmten Zeit"
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
 "Checking installed software": [
  null,
  "Installierte Software überprüfen"
 ],
 "Class": [
  null,
  "Klasse"
 ],
 "Close": [
  null,
  "Schließen"
 ],
 "Command": [
  null,
  "Befehl"
 ],
 "Condition failed": [
  null,
  "Bedingung fehlgeschlagen"
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
 "Disk I/O": [
  null,
  "Festplatten-E/A"
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
 "Enable stored metrics…": [
  null,
  "Gespeicherte Metriken aktivieren…"
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
 "Hours": [
  null,
  "Stunde"
 ],
 "I/O Wait": [
  null,
  "I / O Warten"
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
 "Invalid time zone": [
  null,
  "Ungültige Zeitzone"
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
 "Last 24 hours": [
  null,
  "Letzte 24 Stunden"
 ],
 "Last 7 days": [
  null,
  "Letzte 7 Tage"
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
 "Machine ID": [
  null,
  "Maschinen-ID"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "SSH-Fingerabdrücke auf diesem Rechner"
 ],
 "Manually": [
  null,
  "Manuell"
 ],
 "Memory": [
  null,
  "Speicher"
 ],
 "Memory & Swap": [
  null,
  "Speicher & Swap"
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
 "Name": [
  null,
  "Name"
 ],
 "Network Traffic": [
  null,
  "Netzwerk-Verkehr"
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
 "Only Emergency": [
  null,
  "Nur Notfall"
 ],
 "Operating System": [
  null,
  "Betriebssystem"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "Paths": [
  null,
  "Pfade"
 ],
 "Performance Profile": [
  null,
  "Leistungsprofil"
 ],
 "Power Options": [
  null,
  "Energieoptionen"
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
 "Real Host Name": [
  null,
  "Echter Rechnername"
 ],
 "Reboot": [
  null,
  "Neustart"
 ],
 "Recent": [
  null,
  "Zuletzt verwendet"
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
 "Saturday": [
  null,
  "Samstag"
 ],
 "Save": [
  null,
  "Speichern"
 ],
 "Seconds": [
  null,
  "Sekunden"
 ],
 "Secure Shell Keys": [
  null,
  "Secure Shell-Schlüssel"
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
 "Specific Time": [
  null,
  "Bestimmte Zeit"
 ],
 "Store metrics": [
  null,
  "Kennzahlen speichern"
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
 "System Services": [
  null,
  "System Dienste"
 ],
 "System Time": [
  null,
  "Systemzeit"
 ],
 "Targets": [
  null,
  "Ziele"
 ],
 "Terminal": [
  null,
  "Terminal"
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
 ]
}));
