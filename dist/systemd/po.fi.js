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
 "20 Minutes": [
  null,
  "20 minuuttia"
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
  "40 minuuttia"
 ],
 "4th": [
  null,
  "4."
 ],
 "5 Minutes": [
  null,
  "5 minuuttia"
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
  "60 minuuttia"
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
  ""
 ],
 "Advanced TCA": [
  null,
  ""
 ],
 "After": [
  null,
  "Jälkeen"
 ],
 "After system boot": [
  null,
  "Järjestelmän käynnistyksen jälkeen"
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
  "Tiettynä aikana"
 ],
 "Automatically using NTP": [
  null,
  "Käytetään automaattisesti NTP:tä"
 ],
 "Automatically using specific NTP servers": [
  null,
  "Käytetään automaattisesti tiettyjä NTP-palvelimia"
 ],
 "BIOS": [
  null,
  "BIOS"
 ],
 "BIOS date": [
  null,
  "BIOS-päiväys"
 ],
 "BIOS version": [
  null,
  "BIOS-versio"
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
 "Change": [
  null,
  "Vaihda"
 ],
 "Change Host Name": [
  null,
  "Vaihda konenimi (Host)"
 ],
 "Change System Time": [
  null,
  "Vaihda järjestelmän aika"
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
  "Sulje"
 ],
 "Command": [
  null,
  "Komento"
 ],
 "Compact PCI": [
  null,
  ""
 ],
 "Condition failed": [
  null,
  "Ehto epäonnistui"
 ],
 "Convertible": [
  null,
  ""
 ],
 "Create Timer": [
  null,
  "Luo ajastin"
 ],
 "Create Timers": [
  null,
  "Luo ajastimet"
 ],
 "Critical and above": [
  null,
  ""
 ],
 "Current boot": [
  null,
  "Tämänhetkinen käynnistys"
 ],
 "Debug and above": [
  null,
  ""
 ],
 "Delay": [
  null,
  "Viive"
 ],
 "Description": [
  null,
  "Kuvaus"
 ],
 "Desktop": [
  null,
  "Työpöytä"
 ],
 "Detachable": [
  null,
  ""
 ],
 "Disk I/O": [
  null,
  "Levyn I/O"
 ],
 "Docking Station": [
  null,
  ""
 ],
 "Domain": [
  null,
  "Domain"
 ],
 "Don't Repeat": [
  null,
  "Älä toista"
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
  "Virhe"
 ],
 "Error and above": [
  null,
  ""
 ],
 "Everything": [
  null,
  "Kaikki"
 ],
 "Expansion Chassis": [
  null,
  ""
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
 "Hand Held": [
  null,
  ""
 ],
 "Hardware": [
  null,
  "Laitteisto"
 ],
 "Hardware Information": [
  null,
  "Laitteistotiedot"
 ],
 "Host Name": [
  null,
  "Koneen nimi"
 ],
 "Hour : Minute": [
  null,
  "Tunti : Minuutti"
 ],
 "Hours": [
  null,
  "Tuntia"
 ],
 "I/O Wait": [
  null,
  "I/O Odottaa"
 ],
 "Info and above": [
  null,
  ""
 ],
 "Install": [
  null,
  "Asenna"
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
  "Instansoi"
 ],
 "Invalid time zone": [
  null,
  "Virheellinen aikavyöhyke"
 ],
 "IoT Gateway": [
  null,
  ""
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
 "Laptop": [
  null,
  "Kannettava"
 ],
 "Last 24 hours": [
  null,
  "Viimeiset 24 tuntia"
 ],
 "Last 7 days": [
  null,
  "Viimeiset 7 päivää"
 ],
 "Load earlier entries": [
  null,
  "Lataa aiemmat merkinnät"
 ],
 "Loading...": [
  null,
  "Ladataan..."
 ],
 "Log messages": [
  null,
  "Kirjaa viestit"
 ],
 "Logs": [
  null,
  "Lokit"
 ],
 "Low Profile Desktop": [
  null,
  "Matalan tason työpöytä"
 ],
 "Lunch Box": [
  null,
  ""
 ],
 "Machine ID": [
  null,
  "Koneen ID"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "Koneen SSH-avaimen sormenjäljet"
 ],
 "Main Server Chassis": [
  null,
  ""
 ],
 "Manually": [
  null,
  "Manuaalisesti"
 ],
 "Memory": [
  null,
  "Muisti"
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
  "Minuutit"
 ],
 "Model": [
  null,
  "Malli"
 ],
 "Monday": [
  null,
  "Maanantai"
 ],
 "Multi-system Chassis": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nimi"
 ],
 "Network Traffic": [
  null,
  "Verkkoliikenne"
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
  "Ei synkronisoitu"
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
  "Pois"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On": [
  null,
  "Päällä"
 ],
 "Only Emergency": [
  null,
  ""
 ],
 "Operating System": [
  null,
  "Käyttöjärjestelmä"
 ],
 "Other": [
  null,
  ""
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit kaatui"
 ],
 "Paths": [
  null,
  "Polut"
 ],
 "Performance Profile": [
  null,
  "Suorituskykyprofiili"
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
  "Käynnistä uudelleen"
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
  "Toista joka päivä"
 ],
 "Repeat Hourly": [
  null,
  "Toista joka tunti"
 ],
 "Repeat Monthly": [
  null,
  "Toista joka kuukausi"
 ],
 "Repeat Weekly": [
  null,
  "Toista joka viikko"
 ],
 "Repeat Yearly": [
  null,
  "Toista joka vuosi"
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
  "Käynnistä uudelleen"
 ],
 "Run": [
  null,
  ""
 ],
 "Saturday": [
  null,
  "Lauantai"
 ],
 "Save": [
  null,
  "Tallenna"
 ],
 "Sealed-case PC": [
  null,
  ""
 ],
 "Seconds": [
  null,
  "Sekunnit"
 ],
 "Secure Shell Keys": [
  null,
  ""
 ],
 "Service Logs": [
  null,
  "Palvelulokit"
 ],
 "Service name": [
  null,
  "Palvelun nimi"
 ],
 "Services": [
  null,
  "Palvelut"
 ],
 "Set Time": [
  null,
  "Aseta aika"
 ],
 "Severity": [
  null,
  ""
 ],
 "Show fingerprints": [
  null,
  "Näytä sormenjäljet"
 ],
 "Shut Down": [
  null,
  "Sammuta"
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
 "Stick PC": [
  null,
  "Tikku-PC"
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
  "Sunnuntai"
 ],
 "Swap Used": [
  null,
  ""
 ],
 "Synchronized": [
  null,
  "Synkronoitu"
 ],
 "Synchronized with {{Server}}": [
  null,
  "Synkronoi palvelimen {{Server}} kanssa"
 ],
 "System": [
  null,
  "Järjestelmä"
 ],
 "System Information": [
  null,
  "Järjestelmätiedot"
 ],
 "System Services": [
  null,
  "Järjestelmäpalvelut"
 ],
 "System Time": [
  null,
  "Järjestelmän aika"
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
 "This unit is not designed to be enabled explicitly.": [
  null,
  ""
 ],
 "Thursday": [
  null,
  "Torstai"
 ],
 "Time Zone": [
  null,
  "Aikavyöhyke"
 ],
 "Timers": [
  null,
  "Ajastimet"
 ],
 "Total size: $0": [
  null,
  ""
 ],
 "Tower": [
  null,
  "Torni"
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  "Yritetään synkronoida palvelimen {{Server}} kanssa"
 ],
 "Tuesday": [
  null,
  "Tiistai"
 ],
 "Type": [
  null,
  "Tyyppi"
 ],
 "Unknown": [
  null,
  "Tuntematon"
 ],
 "Used": [
  null,
  "Käytetty"
 ],
 "User": [
  null,
  "Käyttäjä"
 ],
 "Vendor": [
  null,
  "Toimittaja"
 ],
 "Version": [
  null,
  "Versio"
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
 ]
}));
