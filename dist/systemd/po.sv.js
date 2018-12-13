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
  "language": "sv",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 is not available from any repository.": [
  null,
  "$0 är inte tillgängligt från något förråd."
 ],
 "$0 will be installed.": [
  null,
  "$0 kommer att installeras."
 ],
 "1 Minute": [
  null,
  "1 minut"
 ],
 "1 day": [
  null,
  "1 dag"
 ],
 "1 hour": [
  null,
  "1 timma"
 ],
 "1 week": [
  null,
  "1 vecka"
 ],
 "10th": [
  null,
  "10:e"
 ],
 "11th": [
  null,
  "11:e"
 ],
 "12th": [
  null,
  "12:e"
 ],
 "13th": [
  null,
  "13:e"
 ],
 "14th": [
  null,
  "14:e"
 ],
 "15th": [
  null,
  "15:e"
 ],
 "16th": [
  null,
  "16:e"
 ],
 "17th": [
  null,
  "17:e"
 ],
 "18th": [
  null,
  "18:e"
 ],
 "19th": [
  null,
  "19:e"
 ],
 "1st": [
  null,
  "1:a"
 ],
 "20 Minutes": [
  null,
  "20 minuter"
 ],
 "20th": [
  null,
  "20:e"
 ],
 "21st": [
  null,
  "21:a"
 ],
 "22nd": [
  null,
  "22:a"
 ],
 "23rd": [
  null,
  "23:e"
 ],
 "24th": [
  null,
  "24:e"
 ],
 "25th": [
  null,
  "25:e"
 ],
 "26th": [
  null,
  "26:e"
 ],
 "27th": [
  null,
  "27:e"
 ],
 "28th": [
  null,
  "28:e"
 ],
 "29th": [
  null,
  "29:e"
 ],
 "2nd": [
  null,
  "2:a"
 ],
 "30th": [
  null,
  "30:e"
 ],
 "31st": [
  null,
  "31:a"
 ],
 "3rd": [
  null,
  "3:e"
 ],
 "40 Minutes": [
  null,
  "40 minuter"
 ],
 "4th": [
  null,
  "4:e"
 ],
 "5 Minutes": [
  null,
  "5 minuter"
 ],
 "5 minutes": [
  null,
  "5 minuter"
 ],
 "5th": [
  null,
  "5:e"
 ],
 "6 hours": [
  null,
  "6 timmar"
 ],
 "60 Minutes": [
  null,
  "60 minuter"
 ],
 "6th": [
  null,
  "6:e"
 ],
 "7th": [
  null,
  "7:e"
 ],
 "8th": [
  null,
  "8:e"
 ],
 "9th": [
  null,
  "9:e"
 ],
 "Additional packages:": [
  null,
  "Ytterligare paket:"
 ],
 "After": [
  null,
  "Efter"
 ],
 "After system boot": [
  null,
  "Efter systemstart"
 ],
 "Alert and above": [
  null,
  "Larm och högre"
 ],
 "Asset Tag": [
  null,
  "Tillgångsetikett"
 ],
 "At specific time": [
  null,
  "Vid en specifik tidpunkt"
 ],
 "Automatically using NTP": [
  null,
  "Använder automatiskt NTP"
 ],
 "Automatically using specific NTP servers": [
  null,
  "Använder automatiskt specifika NTP-servrar"
 ],
 "BIOS": [
  null,
  "BIOS"
 ],
 "BIOS date": [
  null,
  "BIOS-datum"
 ],
 "BIOS version": [
  null,
  "BIOS-version"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Cached": [
  null,
  "Cachad"
 ],
 "Cancel": [
  null,
  "Avbryt"
 ],
 "Change": [
  null,
  "Ändra"
 ],
 "Change Host Name": [
  null,
  "Ändra värdnamn"
 ],
 "Change System Time": [
  null,
  "Ändra systemtid"
 ],
 "Checking installed software": [
  null,
  "Kontrollerar installerad programvara"
 ],
 "Class": [
  null,
  "Klass"
 ],
 "Close": [
  null,
  "Stäng"
 ],
 "Command": [
  null,
  "Kommando"
 ],
 "Condition failed": [
  null,
  "Villkoret misslyckades"
 ],
 "Create Timer": [
  null,
  "Skapa en timer"
 ],
 "Create Timers": [
  null,
  "Skapa timrar"
 ],
 "Critical and above": [
  null,
  "Kritisk och högre"
 ],
 "Current boot": [
  null,
  "Nuvarande uppstart"
 ],
 "Debug and above": [
  null,
  "Felsökning och högre"
 ],
 "Delay": [
  null,
  "Fördröjning"
 ],
 "Description": [
  null,
  "Beskrivning"
 ],
 "Disk I/O": [
  null,
  "Disk-I/O"
 ],
 "Domain": [
  null,
  "Domän"
 ],
 "Don't Repeat": [
  null,
  "Upprepa inte"
 ],
 "Downloading $0": [
  null,
  "Hämtar $0"
 ],
 "Enable stored metrics…": [
  null,
  "Aktivera lagrade mätningar …"
 ],
 "Entry": [
  null,
  "Post"
 ],
 "Error": [
  null,
  "Fel"
 ],
 "Error and above": [
  null,
  "Fel och högre"
 ],
 "Everything": [
  null,
  "Allting"
 ],
 "Friday": [
  null,
  "Fredag"
 ],
 "General": [
  null,
  "Allmänt"
 ],
 "Go to": [
  null,
  "Gå till"
 ],
 "Go to now": [
  null,
  "Gå till nu"
 ],
 "Hardware": [
  null,
  "Hårdvara"
 ],
 "Hardware Information": [
  null,
  "Hårdvaruinformation"
 ],
 "Host Name": [
  null,
  "Värdnamn"
 ],
 "Hour : Minute": [
  null,
  "Timme : Minut"
 ],
 "Hours": [
  null,
  "Timmar"
 ],
 "I/O Wait": [
  null,
  "I/O-väntan"
 ],
 "Info and above": [
  null,
  "Info och högre"
 ],
 "Install": [
  null,
  "Installera"
 ],
 "Install Software": [
  null,
  "Installera programvara"
 ],
 "Installing $0": [
  null,
  "Installerar $0"
 ],
 "Instantiate": [
  null,
  "Instatiera"
 ],
 "Invalid time zone": [
  null,
  "Felaktigt tidszon"
 ],
 "Journal": [
  null,
  "Journal"
 ],
 "Journal entry": [
  null,
  "Journalpost"
 ],
 "Journal entry not found": [
  null,
  "Journalposten hittades inte"
 ],
 "Kernel": [
  null,
  "Kärnan"
 ],
 "Last 24 hours": [
  null,
  "Senaste 24 timmarna"
 ],
 "Last 7 days": [
  null,
  "Senaste 7 datgarna"
 ],
 "Load earlier entries": [
  null,
  "Läs in tidigare poster"
 ],
 "Loading...": [
  null,
  "Läser in …"
 ],
 "Log messages": [
  null,
  "Loggmeddelanden"
 ],
 "Logs": [
  null,
  "Loggar"
 ],
 "Machine ID": [
  null,
  "Makin-ID"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "Makinens SSH-nyckels fingeravtryck"
 ],
 "Manually": [
  null,
  "Manuellt"
 ],
 "Memory": [
  null,
  "Minne"
 ],
 "Memory & Swap": [
  null,
  "Minne och växling"
 ],
 "Minutes": [
  null,
  "Minuter"
 ],
 "Model": [
  null,
  "Modell"
 ],
 "Monday": [
  null,
  "Måndag"
 ],
 "Name": [
  null,
  "Namn"
 ],
 "Network Traffic": [
  null,
  "Nätverkstrafik"
 ],
 "Nice": [
  null,
  "Nice"
 ],
 "No Delay": [
  null,
  "Ingen fördröjning"
 ],
 "No host keys found.": [
  null,
  "Inga värdnycklar hittade."
 ],
 "Not authorized to upload-report": [
  null,
  "Har inte rättigheter att skicka rapport"
 ],
 "Not synchronized": [
  null,
  "Inte synkroniserad"
 ],
 "Note": [
  null,
  "Observera"
 ],
 "Notice and above": [
  null,
  "Notering och högre"
 ],
 "Off": [
  null,
  "Av"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  "På"
 ],
 "Only Emergency": [
  null,
  "Endast nödläge"
 ],
 "Operating System": [
  null,
  "Operativsystem"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "Paths": [
  null,
  "Sökvägar"
 ],
 "Performance Profile": [
  null,
  "Prestandaprofil"
 ],
 "Power Options": [
  null,
  "Strömalternativ"
 ],
 "Pretty Host Name": [
  null,
  "Snyggt värdnamn"
 ],
 "Problem details": [
  null,
  "Problemdetaljer"
 ],
 "Problem info": [
  null,
  "Probleminformation"
 ],
 "Real Host Name": [
  null,
  "Verkligt värdnamn"
 ],
 "Reboot": [
  null,
  "Starta om"
 ],
 "Recent": [
  null,
  "Senaste"
 ],
 "Removals:": [
  null,
  "Borttagningar:"
 ],
 "Removing $0": [
  null,
  "Tar bort $0"
 ],
 "Repeat Daily": [
  null,
  "Upprepa dagligen"
 ],
 "Repeat Hourly": [
  null,
  "Upprepa varje timma"
 ],
 "Repeat Monthly": [
  null,
  "Upprepa varje månad"
 ],
 "Repeat Weekly": [
  null,
  "Upprepa varje vecka"
 ],
 "Repeat Yearly": [
  null,
  "Upprepa årligen"
 ],
 "Report": [
  null,
  "Rapport"
 ],
 "Reported": [
  null,
  "Rapporterad"
 ],
 "Reporter 'reporter-ureport' not found.": [
  null,
  "Rapporteraren ”reporter-ureport” finns inte."
 ],
 "Reporting was unsucessful. Try running `reporter-ureport -d ": [
  null,
  "Rapporterandet misslyckades.  Försök att köra ”reporter-ureport -d"
 ],
 "Reset": [
  null,
  "Återställ"
 ],
 "Restart": [
  null,
  "Starta om"
 ],
 "Run": [
  null,
  "Kör"
 ],
 "Saturday": [
  null,
  "Lördag"
 ],
 "Save": [
  null,
  "Spara"
 ],
 "Seconds": [
  null,
  "Sekunder"
 ],
 "Secure Shell Keys": [
  null,
  "Säkra skalnycklar"
 ],
 "Service Logs": [
  null,
  "Tjänsteloggar"
 ],
 "Service name": [
  null,
  "Tjänstenamn"
 ],
 "Services": [
  null,
  "Tjänster"
 ],
 "Set Time": [
  null,
  "Ställ in tiden"
 ],
 "Severity": [
  null,
  "Allvarsgrad"
 ],
 "Show fingerprints": [
  null,
  "Visa fingeravtryck"
 ],
 "Shut Down": [
  null,
  "Stäng av"
 ],
 "Slot": [
  null,
  "Plats"
 ],
 "Sockets": [
  null,
  "Uttag"
 ],
 "Specific Time": [
  null,
  "Specifik tid"
 ],
 "Store metrics": [
  null,
  "Lagringsmått"
 ],
 "Sunday": [
  null,
  "Söndag"
 ],
 "Swap Used": [
  null,
  "Använt växlingsutrymme"
 ],
 "Synchronized": [
  null,
  "Synkroniserad"
 ],
 "Synchronized with {{Server}}": [
  null,
  "Synkroniserad med {{Server}}"
 ],
 "System": [
  null,
  "System"
 ],
 "System Information": [
  null,
  "Systeminformation"
 ],
 "System Services": [
  null,
  "Systemtjänster"
 ],
 "System Time": [
  null,
  "Systemtid"
 ],
 "Targets": [
  null,
  "Mål"
 ],
 "Terminal": [
  null,
  "Terminal"
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  "Denna enhet är inte gjord för att aktiveras explicit."
 ],
 "Thursday": [
  null,
  "Torsdag"
 ],
 "Time Zone": [
  null,
  "Tidszon"
 ],
 "Timers": [
  null,
  "Timrar"
 ],
 "Total size: $0": [
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
  ""
 ],
 "Used": [
  null,
  ""
 ],
 "User": [
  null,
  ""
 ],
 "Vendor": [
  null,
  ""
 ],
 "Version": [
  null,
  ""
 ],
 "Waiting for other software management operations to finish": [
  null,
  ""
 ],
 "Warning and above": [
  null,
  "Varning och högre"
 ],
 "Wednesday": [
  null,
  "Onsdag"
 ],
 "Weeks": [
  null,
  "Veckor"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 byte med binärdata]"
 ],
 "[binary data]": [
  null,
  "[binärdata]"
 ],
 "[no data]": [
  null,
  ""
 ]
}));
