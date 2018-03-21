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
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Template": [
  null,
  "$0 ਟੈਪਲੇਟ"
 ],
 "$0 day": [
  "$0 days",
  "$0 ਦਿਨ",
  "$0 ਦਿਨ"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 ਘੰਟਾ",
  "$0 ਘੰਟੇ"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 ਮਿੰਟ",
  "$0 ਮਿੰਟ"
 ],
 "$0 month": [
  "$0 months",
  "$0 ਮਹੀਨਾ",
  "$0 ਮਹੀਨੇ"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 ਹਫ਼ਤਾ",
  "$0 ਹਫ਼ਤੇ"
 ],
 "$0 year": [
  "$0 years",
  "$0 ਸਾਲ",
  "$0 ਸਾਲ"
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
 "1 min": [
  null,
  "1 ਮਿੰਟ"
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
 "2 min": [
  null,
  "2 ਮਿੰਟ"
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
 "3 min": [
  null,
  "3 ਮਿੰਟ"
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
 "4 min": [
  null,
  "4 ਮਿੰਟ"
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
 "5 min": [
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
 "Condition $0=$1 was not met": [
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
 "Current boot": [
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
 "Disable": [
  null,
  ""
 ],
 "Disabled": [
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
 "Enabled": [
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
  "ਨਾਂ"
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
 "Off": [
  null,
  ""
 ],
 "On": [
  null,
  ""
 ],
 "Only Problems": [
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
 "Problems, Errors": [
  null,
  ""
 ],
 "Problems, Errors, Warnings": [
  null,
  ""
 ],
 "Problems, Errors, Warnings, Notices": [
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
  "ਮੁਡ਼ ਚਾਲੂ ਕਰੋ"
 ],
 "Recent": [
  null,
  ""
 ],
 "Reload": [
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
  "ਫਿੰਗਰਪਰਿੰਟ ਵੇਖੋ"
 ],
 "Shut Down": [
  null,
  "ਬੰਦ ਕਰੋ"
 ],
 "Since $0": [
  null,
  "$0 ਤੋਂ"
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
 "Start": [
  null,
  "ਸ਼ੁਰੂ ਕਰੋ"
 ],
 "State": [
  null,
  "ਹਾਲਤ"
 ],
 "Static": [
  null,
  "ਸਥਿਰ"
 ],
 "Stick PC": [
  null,
  ""
 ],
 "Stop": [
  null,
  "ਰੋਕੋ"
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
 "The user <b>$0</b> does not have permissions for creating timers": [
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
 "Unmask": [
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
  "ਅਣਪਛਾਤਾ"
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
