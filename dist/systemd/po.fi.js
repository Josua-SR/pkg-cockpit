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
  "language": "fi",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Template": [
  null,
  "$0 mallipohja"
 ],
 "$0 day": [
  "$0 days",
  "$0 päivä",
  "$0 päivää"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 tunti",
  "$0 tuntia"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minuutti",
  "$0 minuuttia"
 ],
 "$0 month": [
  "$0 months",
  "$0 kuukausi",
  "$0 kuukautta"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 viikko",
  "$0 viikkoa"
 ],
 "$0 year": [
  "$0 years",
  "$0 vuosi",
  "$0 vuotta"
 ],
 "1 Minute": [
  null,
  "1 Minuutti"
 ],
 "1 day": [
  null,
  "1 päivä"
 ],
 "1 hour": [
  null,
  "1 tunti"
 ],
 "1 min": [
  null,
  "1 min"
 ],
 "1 week": [
  null,
  "1 viikko"
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
  "2 min"
 ],
 "20 Minutes": [
  null,
  "20 Minuuttia"
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
  "3 min"
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
  "4 min"
 ],
 "40 Minutes": [
  null,
  "40 Minuuttia"
 ],
 "4th": [
  null,
  "4."
 ],
 "5 Minutes": [
  null,
  "5 Minuuttia"
 ],
 "5 min": [
  null,
  "5 min"
 ],
 "5 minutes": [
  null,
  "5 minuuttia"
 ],
 "5th": [
  null,
  "5."
 ],
 "6 hours": [
  null,
  "6 tuntia"
 ],
 "60 Minutes": [
  null,
  "60 Minuuttia"
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
 "After": [
  null,
  "Jälkeen"
 ],
 "After system boot": [
  null,
  "Järjestelmän käynnistyksen jälkeen"
 ],
 "Asset Tag": [
  null,
  ""
 ],
 "At specific time": [
  null,
  "Tiettynä aikana"
 ],
 "Automatically using NTP": [
  null,
  "Käytetään automaattisesti NTP:tä"
 ],
 "Automatically using specific NTP servers": [
  null,
  "Käytetään automaattisesti tiettyjä NTP-servereitä"
 ],
 "CPU": [
  null,
  "Prosessori"
 ],
 "Cached": [
  null,
  "Välimuistissa"
 ],
 "Cancel": [
  null,
  "Peru"
 ],
 "Cannot schedule event in the past": [
  null,
  ""
 ],
 "Change": [
  null,
  "Vaihda"
 ],
 "Change Host Name": [
  null,
  "Vaihda Konenimi (Host)"
 ],
 "Change System Time": [
  null,
  "Vaihda Järjestelmän Aika"
 ],
 "Close": [
  null,
  "Sulje"
 ],
 "Command": [
  null,
  "Komento"
 ],
 "Condition $0=$1 was not met": [
  null,
  ""
 ],
 "Condition failed": [
  null,
  ""
 ],
 "Create Timer": [
  null,
  "Luo Ajastin"
 ],
 "Create Timers": [
  null,
  "Luo Ajastimet"
 ],
 "Current boot": [
  null,
  "Tämänhetkinen käynnistys"
 ],
 "Delay": [
  null,
  "Viive"
 ],
 "Description": [
  null,
  "Kuvaus"
 ],
 "Disable": [
  null,
  "Poista käytöstä"
 ],
 "Disabled": [
  null,
  "Ei käytössä"
 ],
 "Disk I/O": [
  null,
  "Levyn I/O"
 ],
 "Domain": [
  null,
  "Domain"
 ],
 "Don't Repeat": [
  null,
  "Älä Toista"
 ],
 "Enable": [
  null,
  "Ota käyttöön"
 ],
 "Enable Forcefully": [
  null,
  "Ota käyttöön väkisin"
 ],
 "Enabled": [
  null,
  "Käytössä"
 ],
 "Entry": [
  null,
  ""
 ],
 "Error": [
  null,
  "Virhe"
 ],
 "Everything": [
  null,
  "Kaikki"
 ],
 "Free": [
  null,
  "Vapaa"
 ],
 "Friday": [
  null,
  "Perjantai"
 ],
 "General": [
  null,
  "Yleiset"
 ],
 "Go to": [
  null,
  "Mene"
 ],
 "Go to now": [
  null,
  "Mene nyt"
 ],
 "Hardware": [
  null,
  "Laitteisto"
 ],
 "Host Name": [
  null,
  "Koneen Nimi"
 ],
 "Hour : Minute": [
  null,
  "Tunti : Minuutti"
 ],
 "Hour needs to be a number between 0-23": [
  null,
  "Tunti tarvitsee numeron väliltä 0-23"
 ],
 "Hours": [
  null,
  "Tuntia"
 ],
 "I/O Wait": [
  null,
  "I/O Odottaa"
 ],
 "Id": [
  null,
  "Id"
 ],
 "Instantiate": [
  null,
  "Instansoi"
 ],
 "Invalid date format": [
  null,
  "Virheellinen päivämuoto"
 ],
 "Invalid date format and invalid time format": [
  null,
  "Virheellinen päivämuoto tai aikamuoto"
 ],
 "Invalid date format.": [
  null,
  "Virheellinen päivämuoto."
 ],
 "Invalid number.": [
  null,
  "Virheellinen numero."
 ],
 "Invalid time format": [
  null,
  "Virheellinen aikamuoto"
 ],
 "Invalid time zone": [
  null,
  "Virheellinen aikavyöhyke"
 ],
 "Journal": [
  null,
  "Journal"
 ],
 "Journal entry": [
  null,
  "Journal-merkintä"
 ],
 "Journal entry not found": [
  null,
  "Journal-merkintää ei löytynyt"
 ],
 "Kernel": [
  null,
  "Kernel"
 ],
 "Last 24 hours": [
  null,
  "Viimeiset 24 tuntia"
 ],
 "Last 7 days": [
  null,
  "Viimeiset 7 päivää"
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
 "Minute needs to be a number between 0-59": [
  null,
  ""
 ],
 "Minutes": [
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
  "Tätä päivää ei ole kaikissa kuukausissa. <br> Ajastin ajetaan vain kuukausissa, joissa on 31. päivä."
 ],
 "This field cannot be empty.": [
  null,
  "Tämä kenttä ei voi olla tyhjä."
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
 "Trying to synchronize with {{Server}}": [
  null,
  "Yritetään synkronoida {{Server}} kanssa"
 ],
 "Tuesday": [
  null,
  "Tiistai"
 ],
 "Unmask": [
  null,
  ""
 ],
 "Used": [
  null,
  "Käytetty"
 ],
 "User": [
  null,
  "Käyttäjä"
 ],
 "Version": [
  null,
  "Versio"
 ],
 "Wednesday": [
  null,
  "Keskiviikko"
 ],
 "Weeks": [
  null,
  "Viikot"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 tavua binääridatasta]"
 ],
 "[binary data]": [
  null,
  "[binääridata]"
 ],
 "[no data]": [
  null,
  "[ei dataa]"
 ],
 "failed to list ssh host keys: $0": [
  null,
  ""
 ],
 "unknown": [
  null,
  "tuntematon"
 ],
 "page-title\u0004CPU Status": [
  null,
  "Prosessorin Tila"
 ],
 "page-title\u0004Memory": [
  null,
  ""
 ]
}));
