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
  "language": "da",
  "x-generator": "Zanata 3.8.4"
 },
 "$0 is not available from any repository.": [
  null,
  ""
 ],
 "$0 will be installed.": [
  null,
  ""
 ],
 "1 Minute": [
  null,
  ""
 ],
 "1 day": [
  null,
  ""
 ],
 "1 hour": [
  null,
  ""
 ],
 "1 week": [
  null,
  ""
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
 "5 minutes": [
  null,
  ""
 ],
 "5th": [
  null,
  ""
 ],
 "6 hours": [
  null,
  ""
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
 "CPU": [
  null,
  ""
 ],
 "Cached": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Annullér"
 ],
 "Change": [
  null,
  ""
 ],
 "Change Host Name": [
  null,
  "Værtsnavn"
 ],
 "Change System Time": [
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
 "Close": [
  null,
  ""
 ],
 "Command": [
  null,
  ""
 ],
 "Condition failed": [
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
 "Disk I/O": [
  null,
  "Disk I/O"
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
 "Enable stored metrics…": [
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
 "Hours": [
  null,
  ""
 ],
 "I/O Wait": [
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
 "Invalid time zone": [
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
  ""
 ],
 "Memory": [
  null,
  ""
 ],
 "Memory & Swap": [
  null,
  "Hukommelse"
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
 "Name": [
  null,
  "Værtsnavn"
 ],
 "Network Traffic": [
  null,
  "Netværks Traffik"
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
 "Notice and above": [
  null,
  ""
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
 "Only Emergency": [
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
 "Real Host Name": [
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
 "Service Logs": [
  null,
  ""
 ],
 "Service name": [
  null,
  "Værtsnavn"
 ],
 "Services": [
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
 "Store metrics": [
  null,
  "Værtsnavn"
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
 "System Services": [
  null,
  ""
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
 ]
}));
