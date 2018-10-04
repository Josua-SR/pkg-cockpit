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
 "$0 day": [
  "$0 days",
  "$0 dag",
  "$0 dagar"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 timme",
  "$0 timmar"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 är inte tillgängligt från något förråd."
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minut",
  "$0 minuter"
 ],
 "$0 month": [
  "$0 months",
  "$0 månad",
  "$0 månader"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 vecka",
  "$0 veckor"
 ],
 "$0 will be installed.": [
  null,
  "$0 kommer att installeras."
 ],
 "$0 year": [
  "$0 years",
  "$0 år",
  "$0 år"
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
  ""
 ],
 "Embedded PC": [
  null,
  ""
 ],
 "Enable": [
  null,
  ""
 ],
 "Enable Forcefully": [
  null,
  ""
 ],
 "Enable persistent metrics…": [
  null,
  "Aktivera beständiga mätningar …"
 ],
 "Enabled": [
  null,
  ""
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
  ""
 ],
 "Error and above": [
  null,
  "Fel och högre"
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
  ""
 ],
 "Friday": [
  null,
  ""
 ],
 "General": [
  null,
  ""
 ],
 "Go to": [
  null,
  ""
 ],
 "Go to now": [
  null,
  ""
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
  ""
 ],
 "Id": [
  null,
  ""
 ],
 "Info and above": [
  null,
  "Info och högre"
 ],
 "Install": [
  null,
  ""
 ],
 "Install Software": [
  null,
  ""
 ],
 "Installing $0": [
  null,
  ""
 ],
 "Instantiate": [
  null,
  ""
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
  ""
 ],
 "Invalid number.": [
  null,
  ""
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
  ""
 ],
 "Journal entry not found": [
  null,
  ""
 ],
 "Kernel": [
  null,
  ""
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
  ""
 ],
 "Loading...": [
  null,
  ""
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
  ""
 ],
 "Mask Forcefully": [
  null,
  ""
 ],
 "Memory": [
  null,
  ""
 ],
 "Message to logged in users": [
  null,
  ""
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
  ""
 ],
 "Name": [
  null,
  ""
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
 "Notice and above": [
  null,
  "Notering och högre"
 ],
 "Off": [
  null,
  ""
 ],
 "Ok": [
  null,
  ""
 ],
 "On": [
  null,
  ""
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
  ""
 ],
 "Preset Forcefully": [
  null,
  ""
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
  ""
 ],
 "Recent": [
  null,
  ""
 ],
 "Reload": [
  null,
  ""
 ],
 "Reload Propagated From": [
  null,
  ""
 ],
 "Removals:": [
  null,
  ""
 ],
 "Removing $0": [
  null,
  ""
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
  ""
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
  ""
 ],
 "Services": [
  null,
  ""
 ],
 "Set Host name": [
  null,
  ""
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
  ""
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
  ""
 ],
 "State": [
  null,
  ""
 ],
 "Static": [
  null,
  ""
 ],
 "Stick PC": [
  null,
  ""
 ],
 "Stop": [
  null,
  ""
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
  ""
 ],
 "System Time": [
  null,
  ""
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
 "The user <b>$0</b> is not permitted to change the system time": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to enable or disable services": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to start or stop services": [
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
 "Total size: $0": [
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
 "Unknown": [
  null,
  ""
 ],
 "Unmask": [
  null,
  ""
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
  "CPU-status"
 ],
 "page-title\u0004Memory": [
  null,
  ""
 ]
}));
