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
 "$0 Template": [
  null,
  "$0 mall"
 ],
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
 "1 min": [
  null,
  "1 min"
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
 "2 min": [
  null,
  "2 min"
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
 "3 min": [
  null,
  "3 min"
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
 "4 min": [
  null,
  "4 min"
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
 "5 min": [
  null,
  "5 min"
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
 "Advanced TCA": [
  null,
  "Avanserad TCA"
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
 "All In One": [
  null,
  "Allt-i-ett"
 ],
 "Asset Tag": [
  null,
  "Tillgångsetikett"
 ],
 "At specific time": [
  null,
  "Vid en specifik tidpunkt"
 ],
 "Automatic Startup": [
  null,
  ""
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
 "Before": [
  null,
  "Före"
 ],
 "Binds To": [
  null,
  "Binder till"
 ],
 "Blade": [
  null,
  "Blad"
 ],
 "Blade enclosure": [
  null,
  "Bladhölje"
 ],
 "Bound By": [
  null,
  "Bundet av"
 ],
 "Bug Fix Updates Available": [
  null,
  "Felrättningsuppdateringar tillgängliga"
 ],
 "Bus Expansion Chassis": [
  null,
  "Bussexpansionschassi"
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
 "Cannot schedule event in the past": [
  null,
  "Kan inte schemalägga händelser i det förflutna"
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
 "Checking for updates…": [
  null,
  "Kontrollerar om det finns uppdateringar …"
 ],
 "Checking installed software": [
  null,
  "Kontrollerar installerad programvara"
 ],
 "Class": [
  null,
  "Klass"
 ],
 "Click to see system hardware information": [
  null,
  "Klicka för att se hårdvaruinformation för systemet"
 ],
 "Close": [
  null,
  "Stäng"
 ],
 "Command": [
  null,
  "Kommando"
 ],
 "Compact PCI": [
  null,
  "Kompakt PCI"
 ],
 "Condition $0=$1 was not met": [
  null,
  "Villkoret $0=$1 uppfylldes inte"
 ],
 "Condition failed": [
  null,
  "Villkoret misslyckades"
 ],
 "Conflicted By": [
  null,
  "Står i konflikt med"
 ],
 "Conflicts": [
  null,
  "Konflikter"
 ],
 "Consists Of": [
  null,
  "Består av"
 ],
 "Convertible": [
  null,
  "Konvertibel"
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
 "Desktop": [
  null,
  "Skrivbord"
 ],
 "Detachable": [
  null,
  "Frånkopplingsbar"
 ],
 "Details": [
  null,
  "Detaljer"
 ],
 "Disable": [
  null,
  "Avaktivera"
 ],
 "Disabled": [
  null,
  "Avaktiverad"
 ],
 "Disk I/O": [
  null,
  "Disk-I/O"
 ],
 "Docking Station": [
  null,
  "Dockningsstation"
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
 "Embedded PC": [
  null,
  "Inbäddad PC"
 ],
 "Enable": [
  null,
  "Aktivera"
 ],
 "Enable Forcefully": [
  null,
  "Aktivera tvingande"
 ],
 "Enable stored metrics…": [
  null,
  "Aktivera lagrade mätningar …"
 ],
 "Enabled": [
  null,
  "Aktiverad"
 ],
 "Enhancement Updates Available": [
  null,
  "Förbättringsuppdateringar är tillgängliga"
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
 "Expansion Chassis": [
  null,
  "Expansionschassin"
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
 "Hand Held": [
  null,
  "Handhållen"
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
 "Hour needs to be a number between 0-23": [
  null,
  "Timmen måste vara ett tal mellan 0-23"
 ],
 "Hours": [
  null,
  "Timmar"
 ],
 "I/O Wait": [
  null,
  "I/O-väntan"
 ],
 "Id": [
  null,
  "Id"
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
 "Invalid date format": [
  null,
  "Felaktigt datumformat"
 ],
 "Invalid date format and invalid time format": [
  null,
  "Felaktigt datumformat och felaktigt tidsformat"
 ],
 "Invalid date format.": [
  null,
  "Felaktigt datumformat."
 ],
 "Invalid number.": [
  null,
  "Felaktigt tal."
 ],
 "Invalid time format": [
  null,
  "Felaktigt tidsformat"
 ],
 "Invalid time zone": [
  null,
  "Felaktigt tidszon"
 ],
 "IoT Gateway": [
  null,
  "IoT-gateway"
 ],
 "Joins Namespace Of": [
  null,
  "Går med i namnrymden för"
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
 "Laptop": [
  null,
  "Bärbar dator"
 ],
 "Last 24 hours": [
  null,
  "Senaste 24 timmarna"
 ],
 "Last 7 days": [
  null,
  "Senaste 7 datgarna"
 ],
 "Last Trigger": [
  null,
  "Senaste trigger"
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
 "Low Profile Desktop": [
  null,
  "Lågprofilskrivbord"
 ],
 "Lunch Box": [
  null,
  "Lunchlåda"
 ],
 "Machine ID": [
  null,
  "Makin-ID"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "Makinens SSH-nyckels fingeravtryck"
 ],
 "Main Server Chassis": [
  null,
  "Huvudserverchassi"
 ],
 "Manually": [
  null,
  "Manuellt"
 ],
 "Mask": [
  null,
  "Maskera"
 ],
 "Mask Forcefully": [
  null,
  "Maskera tvingande"
 ],
 "Memory": [
  null,
  "Minne"
 ],
 "Memory & Swap": [
  null,
  "Minne och växling"
 ],
 "Message to logged in users": [
  null,
  "Meddelande till inloggade användare"
 ],
 "Mini PC": [
  null,
  "Mini-PC"
 ],
 "Mini Tower": [
  null,
  "Minitorn"
 ],
 "Minute needs to be a number between 0-59": [
  null,
  "Minuterna måste vara ett tal mellan 0-59"
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
 "Multi-system Chassis": [
  null,
  "Multisystemschassi"
 ],
 "NTP Server": [
  null,
  "NTP-server"
 ],
 "Name": [
  null,
  "Namn"
 ],
 "Need at least one NTP server": [
  null,
  "Behöver åtminstone en NTP-server"
 ],
 "Network Traffic": [
  null,
  "Nätverkstrafik"
 ],
 "Next Run": [
  null,
  "Nästa körning"
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
 "Notebook": [
  null,
  "Bärbar (notebook)"
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
 "On Failure": [
  null,
  "Vid misslyckande"
 ],
 "Only Emergency": [
  null,
  "Endast nödläge"
 ],
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  "Endast alfabetet, nummer, :, _, ., @, - är tillåtna."
 ],
 "Operating System": [
  null,
  "Operativsystem"
 ],
 "Other": [
  null,
  "Annan"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit kraschade"
 ],
 "Part Of": [
  null,
  "Del av"
 ],
 "Path": [
  null,
  "Sökväg"
 ],
 "Paths": [
  null,
  "Sökvägar"
 ],
 "Performance Profile": [
  null,
  "Prestandaprofil"
 ],
 "Peripheral Chassis": [
  null,
  "Periferichassi"
 ],
 "Pizza Box": [
  null,
  "Pizzalåda"
 ],
 "Portable": [
  null,
  "Bärbar"
 ],
 "Power Options": [
  null,
  "Strömalternativ"
 ],
 "Preset": [
  null,
  "Förinställ"
 ],
 "Preset Forcefully": [
  null,
  "Förinställ tvingande"
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
 "Propagates Reload To": [
  null,
  "Vidarebefordrar omladdning till"
 ],
 "RAID Chassis": [
  null,
  "RAID-chassi"
 ],
 "Rack Mount Chassis": [
  null,
  "Rackmonteringschassi"
 ],
 "Real Host Name": [
  null,
  "Verkligt värdnamn"
 ],
 "Real host name can only contain lower-case characters, digits, dashes, and periods (with populated subdomains)": [
  null,
  "Det verkliga värdnamnet kan endast innehålla gemena bokstäver, siffror, bindestreck och punkter (med populerade underdomäner)"
 ],
 "Real host name must be 64 characters or less": [
  null,
  "Det verkliga värdnamnet får bara vara 64 tecken eller mindre"
 ],
 "Reboot": [
  null,
  "Starta om"
 ],
 "Recent": [
  null,
  "Senaste"
 ],
 "Reload": [
  null,
  "Läs om"
 ],
 "Reload Propagated From": [
  null,
  "Omläsning vidarebefordrad från"
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
 "Required By": [
  null,
  "Begärd av"
 ],
 "Requires": [
  null,
  "Begär"
 ],
 "Requisite": [
  null,
  "Behov"
 ],
 "Requisite Of": [
  null,
  "Behov av"
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
 "Running Since": [
  null,
  ""
 ],
 "Saturday": [
  null,
  "Lördag"
 ],
 "Save": [
  null,
  "Spara"
 ],
 "Sealed-case PC": [
  null,
  "PC med slutet hölje"
 ],
 "Seconds": [
  null,
  "Sekunder"
 ],
 "Secure Shell Keys": [
  null,
  "Säkra skalnycklar"
 ],
 "Security Updates Available": [
  null,
  "Säkerhetsuppdateringar tillgängliga"
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
 "Set Host name": [
  null,
  "Sätt värdnamn"
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
 "Space-saving Computer": [
  null,
  "Utrymmessparande dator"
 ],
 "Specific Time": [
  null,
  "Specifik tid"
 ],
 "Start": [
  null,
  "Starta"
 ],
 "State": [
  null,
  "Tillstånd"
 ],
 "Static": [
  null,
  "Statisk"
 ],
 "Status": [
  null,
  "Status"
 ],
 "Stick PC": [
  null,
  "Pinndator"
 ],
 "Stop": [
  null,
  "Stoppa"
 ],
 "Store Metrics": [
  null,
  ""
 ],
 "Sub Chassis": [
  null,
  "Underchassi"
 ],
 "Sub Notebook": [
  null,
  "ULPC"
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
 "System Not Registered": [
  null,
  "Systemet är inte registrerat"
 ],
 "System Services": [
  null,
  "Systemtjänster"
 ],
 "System Time": [
  null,
  "Systemtid"
 ],
 "System Up To Date": [
  null,
  "Systemet är uppdaterat"
 ],
 "Tablet": [
  null,
  "Platta"
 ],
 "Targets": [
  null,
  "Mål"
 ],
 "Terminal": [
  null,
  "Terminal"
 ],
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  "Användaren <b>$0</b> har inte rättighet att skapa timrar"
 ],
 "The user <b>$0</b> is not permitted to change the system time": [
  null,
  "Användaren <b>$0</b> har inte rättighet att ändra systemtiden"
 ],
 "The user <b>$0</b> is not permitted to enable or disable services": [
  null,
  "Användaren <b>$0</b> har inte rättighet att aktivera eller avaktivera tjänster"
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  "Användaren <b>$0</b> har inte rättighet att ändra värdnamn"
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  "Användaren <b>$0</b> har inte rättighet att starta om denna server"
 ],
 "The user <b>$0</b> is not permitted to start or stop services": [
  null,
  "Användaren <b>$0</b> har inte rättighet att starta eller stoppa tjänster"
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  "Denna dag finns inte i alla månader.<br>Timern kommer bara köras i månader som har den 31:e."
 ],
 "This field cannot be empty.": [
  null,
  "Detta fält får inte vara tomt."
 ],
 "This unit is an instance of the $0 template.": [
  null,
  "Denna enhet är en instans av mallen $0."
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
  "Total storlek: $0"
 ],
 "Tower": [
  null,
  "Torn"
 ],
 "Triggered By": [
  null,
  "Utlöst av"
 ],
 "Triggers": [
  null,
  "Utlösare"
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  "Försök att synkronisera med {{Server}}"
 ],
 "Tuesday": [
  null,
  "Tisdag"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "Unknown": [
  null,
  "Okänd"
 ],
 "Unmask": [
  null,
  "Avmaskera"
 ],
 "Updates Available": [
  null,
  "Uppdateringar tillgängliga"
 ],
 "Usage of $0 CPU core": [
  "Usage of $0 CPU cores",
  "Användning av $0 CPU-kärna",
  "Användning av $0 CPU-kärnor"
 ],
 "Used": [
  null,
  "Använt"
 ],
 "User": [
  null,
  "Användare"
 ],
 "Vendor": [
  null,
  "Leverantör"
 ],
 "Version": [
  null,
  "Version"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Väntar på att andra programvaruhanteringsåtgärder skall bli klara"
 ],
 "Wanted By": [
  null,
  "Önskat av"
 ],
 "Wants": [
  null,
  "Önskar"
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
  "[inga data]"
 ],
 "failed to list ssh host keys: $0": [
  null,
  "misslyckades att lista ssh-värdnycklar: $0"
 ],
 "of $0 CPU core": [
  "of $0 CPU cores",
  "av $0 CPU-kärna",
  "av $0 CPU-kärnor"
 ],
 "unknown": [
  null,
  "okänd"
 ],
 "page-title\u0004CPU Status": [
  null,
  "CPU-status"
 ],
 "page-title\u0004Memory": [
  null,
  "Minne"
 ]
}));
