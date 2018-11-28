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
  "language": "pa",
  "x-generator": "Zanata 4.6.2"
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
  "1 ਮਿੰਟ"
 ],
 "1 day": [
  null,
  "1 ਦਿਨ"
 ],
 "1 hour": [
  null,
  "1 ਘੰਟਾ"
 ],
 "1 week": [
  null,
  "1 ਹਫ਼ਤਾ"
 ],
 "10th": [
  null,
  "10ਵਾਂ"
 ],
 "11th": [
  null,
  "11ਵਾਂ"
 ],
 "12th": [
  null,
  "12ਵਾਂ"
 ],
 "13th": [
  null,
  "13ਵਾਂ"
 ],
 "14th": [
  null,
  "14ਵਾਂ"
 ],
 "15th": [
  null,
  "15ਵਾਂ"
 ],
 "16th": [
  null,
  "16ਵਾਂ"
 ],
 "17th": [
  null,
  "17ਵਾਂ"
 ],
 "18th": [
  null,
  "18ਵਾਂ"
 ],
 "19th": [
  null,
  "19ਵਾਂ"
 ],
 "1st": [
  null,
  "1ਲਾਂ"
 ],
 "20 Minutes": [
  null,
  "20 ਮਿੰਟ"
 ],
 "20th": [
  null,
  "20ਵਾਂ"
 ],
 "21st": [
  null,
  "21ਵਾਂ"
 ],
 "22nd": [
  null,
  "22ਵਾਂ"
 ],
 "23rd": [
  null,
  "23ਵਾਂ"
 ],
 "24th": [
  null,
  "24ਵਾਂ"
 ],
 "25th": [
  null,
  "25ਵਾਂ"
 ],
 "26th": [
  null,
  "26ਵਾਂ"
 ],
 "27th": [
  null,
  "27ਵਾਂ"
 ],
 "28th": [
  null,
  "28ਵਾਂ"
 ],
 "29th": [
  null,
  "29ਵਾਂ"
 ],
 "2nd": [
  null,
  "2ਜਾ"
 ],
 "30th": [
  null,
  "30ਵਾਂ"
 ],
 "31st": [
  null,
  "31ਵਾਂ"
 ],
 "3rd": [
  null,
  "3ਜਾ"
 ],
 "40 Minutes": [
  null,
  "40 ਮਿੰਟ"
 ],
 "4th": [
  null,
  "4ਥਾ"
 ],
 "5 Minutes": [
  null,
  "5 ਮਿੰਟ"
 ],
 "5 minutes": [
  null,
  "5 ਮਿੰਟ"
 ],
 "5th": [
  null,
  "5ਵਾਂ"
 ],
 "6 hours": [
  null,
  "6 ਘੰਟੇ"
 ],
 "60 Minutes": [
  null,
  "60 ਮਿੰਟ"
 ],
 "6th": [
  null,
  "6ਵਾਂ"
 ],
 "7th": [
  null,
  "7ਵਾਂ"
 ],
 "8th": [
  null,
  "8ਵਾਂ"
 ],
 "9th": [
  null,
  "9ਵਾਂ"
 ],
 "Additional packages:": [
  null,
  ""
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
  ""
 ],
 "Cached": [
  null,
  ""
 ],
 "Cancel": [
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
 "Compact PCI": [
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
 "Desktop": [
  null,
  ""
 ],
 "Detachable": [
  null,
  ""
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
 "Downloading $0": [
  null,
  ""
 ],
 "Embedded PC": [
  null,
  ""
 ],
 "Enable persistent metrics…": [
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
  "ਜਾਓ"
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
 "Load earlier entries": [
  null,
  ""
 ],
 "Loading...": [
  null,
  "...ਲੋਡ ਕਰ ਰਿਹਾ ਹੈ"
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
 "Memory": [
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
 "Name": [
  null,
  "ਨਾਂ"
 ],
 "Network Traffic": [
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
  "ਪਾਵਰ ਚੋਣਾਂ"
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
 "Reboot": [
  null,
  "ਮੁਡ਼ ਚਾਲੂ ਕਰੋ"
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
  "ਫਿੰਗਰਪਰਿੰਟ ਵੇਖੋ"
 ],
 "Shut Down": [
  null,
  "ਬੰਦ ਕਰੋ"
 ],
 "Slot": [
  null,
  ""
 ],
 "Sockets": [
  null,
  "ਸਾਕਟ"
 ],
 "Space-saving Computer": [
  null,
  ""
 ],
 "Specific Time": [
  null,
  "ਖਾਸ ਸਮਾਂ"
 ],
 "Stick PC": [
  null,
  ""
 ],
 "Store Performance Data": [
  null,
  "ਸਟੋਰੇਜ਼ ਕਾਰਗੁਜ਼ਾਰੀ ਡਾਟਾ"
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
  "ਐਤਵਾਰ"
 ],
 "Swap Used": [
  null,
  "ਵਰਤੀ ਗਈ ਸਵੈਪ"
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
  "ਸਿਸਟਮ"
 ],
 "System Information": [
  null,
  ""
 ],
 "System Services": [
  null,
  "ਸਿਸਟਮ ਸੇਵਾਵਾਂ"
 ],
 "System Time": [
  null,
  "ਸਿਸਟਮ ਸਮਾਂ"
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
  "ਟਰਮੀਨਲ"
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
  "ਕਿਸਮ"
 ],
 "Unknown": [
  null,
  ""
 ],
 "Used": [
  null,
  ""
 ],
 "User": [
  null,
  "ਵਰਤੋਂਕਾਰ"
 ],
 "Vendor": [
  null,
  ""
 ],
 "Version": [
  null,
  "ਵਰਜ਼ਨ"
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
  "ਬੁੱਧਵਾਰ"
 ],
 "Weeks": [
  null,
  "ਹਫ਼ਤੇ"
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
