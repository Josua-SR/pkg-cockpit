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
nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
return plural;
},
  "language": "hr",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Template": [
  null,
  ""
 ],
 "$0 day": [
  "$0 days",
  "",
  "",
  ""
 ],
 "$0 hour": [
  "$0 hours",
  "",
  "",
  ""
 ],
 "$0 is not available from any repository.": [
  null,
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  "",
  "",
  ""
 ],
 "$0 month": [
  "$0 months",
  "",
  "",
  ""
 ],
 "$0 week": [
  "$0 weeks",
  "",
  "",
  ""
 ],
 "$0 will be installed.": [
  null,
  ""
 ],
 "$0 year": [
  "$0 years",
  "",
  "",
  ""
 ],
 "1 Minute": [
  null,
  ""
 ],
 "1 day": [
  null,
  "1 dan"
 ],
 "1 hour": [
  null,
  "1 sat"
 ],
 "1 min": [
  null,
  ""
 ],
 "1 week": [
  null,
  "1 tjedan"
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
  ""
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
  ""
 ],
 "4th": [
  null,
  ""
 ],
 "5 Minutes": [
  null,
  ""
 ],
 "5 min": [
  null,
  ""
 ],
 "5 minutes": [
  null,
  "5 minuta"
 ],
 "5th": [
  null,
  ""
 ],
 "6 hours": [
  null,
  "6 sati"
 ],
 "60 Minutes": [
  null,
  ""
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
 "Additional packages:": [
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
 "Before": [
  null,
  ""
 ],
 "Binds To": [
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
  "Odustani"
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
 "Checking for updates…": [
  null,
  ""
 ],
 "Checking installed software": [
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
  "Zatvori"
 ],
 "Command": [
  null,
  "Naredba"
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
 "Create Timer": [
  null,
  ""
 ],
 "Create Timers": [
  null,
  ""
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
  ""
 ],
 "Description": [
  null,
  ""
 ],
 "Disable": [
  null,
  ""
 ],
 "Disabled": [
  null,
  "Onemogućen"
 ],
 "Disk I/O": [
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
 "Downloading $0": [
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
  ""
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
  ""
 ],
 "Everything": [
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
  "Općenito"
 ],
 "Go to": [
  null,
  ""
 ],
 "Go to now": [
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
  ""
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
  "Ručno"
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
  "Memorija"
 ],
 "Message to logged in users": [
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
 "NTP Server": [
  null,
  ""
 ],
 "Name": [
  null,
  "Naziv"
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
  "Sljedeće"
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
  "Nije pronađeno"
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
 "Notice and above": [
  null,
  ""
 ],
 "Off": [
  null,
  "Isključi"
 ],
 "Ok": [
  null,
  ""
 ],
 "On": [
  null,
  "Uključi"
 ],
 "On Failure": [
  null,
  "Neuspjelo"
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
 "PCI": [
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
 "Stop": [
  null,
  ""
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
  "Tip"
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
  "Inačica"
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
  "Pokretanje Docker-a neuspjelo: $0"
 ],
 "of $0 CPU core": [
  "of $0 CPU cores",
  "",
  "",
  ""
 ],
 "unknown": [
  null,
  "Nepoznato"
 ],
 "page-title\u0004CPU Status": [
  null,
  ""
 ],
 "page-title\u0004Memory": [
  null,
  ""
 ]
}));
