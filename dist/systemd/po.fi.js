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
 "$0 Template": [
  null,
  "$0 mallipohja"
 ],
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
 "All": [
  null,
  "Kaikki"
 ],
 "All In One": [
  null,
  ""
 ],
 "Appearance:": [
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
 "Automatic Startup": [
  null,
  ""
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
 "Before": [
  null,
  ""
 ],
 "Binds To": [
  null,
  ""
 ],
 "Black": [
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
 "Bound By": [
  null,
  ""
 ],
 "Bug Fix Updates Available": [
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
 "Cannot schedule event in the past": [
  null,
  "Tapahtumaa ei voi aikatauluttaa menneisyyteen"
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
 "Checking for updates…": [
  null,
  "Etsitään päivityksiä…"
 ],
 "Checking installed software": [
  null,
  ""
 ],
 "Class": [
  null,
  ""
 ],
 "Clear All Filters": [
  null,
  ""
 ],
 "Click to see system hardware information": [
  null,
  "Napsauta nähdäksesi järjestelmän laitteistotiedot"
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
 "Condition $0=$1 was not met": [
  null,
  "Ehto $0=$1 ei toteutunut"
 ],
 "Condition failed": [
  null,
  "Ehto epäonnistui"
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
 "Convertible": [
  null,
  ""
 ],
 "Copy": [
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
 "Ctrl+Insert": [
  null,
  ""
 ],
 "Current boot": [
  null,
  "Tämänhetkinen käynnistys"
 ],
 "Dark": [
  null,
  ""
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
 "Details": [
  null,
  "Yksityiskohdat"
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
 "Enable": [
  null,
  "Ota käyttöön"
 ],
 "Enable Forcefully": [
  null,
  "Ota käyttöön väkisin"
 ],
 "Enable stored metrics…": [
  null,
  ""
 ],
 "Enabled": [
  null,
  "Käytössä"
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
 "Filter by name or description...": [
  null,
  ""
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
 "Invalid date format": [
  null,
  "Virheellinen päivämuoto"
 ],
 "Invalid date format and invalid time format": [
  null,
  "Virheellinen päivämuoto ja aikamuoto"
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
 "Last Trigger": [
  null,
  "Edellinen liipaisin"
 ],
 "Light": [
  null,
  ""
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
 "Mask": [
  null,
  "Peite"
 ],
 "Mask Forcefully": [
  null,
  "Peitä väkisin"
 ],
 "Memory": [
  null,
  "Muisti"
 ],
 "Memory & Swap": [
  null,
  ""
 ],
 "Message to logged in users": [
  null,
  "Viesti sisäänkirjautuneille käyttäjille"
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
  "Minuutit tulee olla esitetty numerovälillä 0-59"
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
 "NTP Server": [
  null,
  "NTP-palvelin"
 ],
 "Name": [
  null,
  "Nimi"
 ],
 "Need at least one NTP server": [
  null,
  "Tarvitaan vähintään yksi NTP-palvelin"
 ],
 "Network Traffic": [
  null,
  "Verkkoliikenne"
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
 "No Matching Results": [
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
 "Part Of": [
  null,
  ""
 ],
 "Paste": [
  null,
  ""
 ],
 "Path": [
  null,
  "Polku"
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
  "Käynnistä uudelleen"
 ],
 "Recent": [
  null,
  ""
 ],
 "Reload": [
  null,
  "Lataa uudelleen"
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
  "Käynnistä uudelleen"
 ],
 "Run": [
  null,
  ""
 ],
 "Running Since": [
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
 "Security Updates Available": [
  null,
  "Tietoturvapäivityksiä saatavilla"
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
 "Set Host name": [
  null,
  ""
 ],
 "Set Time": [
  null,
  "Aseta aika"
 ],
 "Severity": [
  null,
  ""
 ],
 "Shift+Insert": [
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
 "Start": [
  null,
  "Käynnistä"
 ],
 "State": [
  null,
  "Tila"
 ],
 "Static": [
  null,
  ""
 ],
 "Status": [
  null,
  "Tila"
 ],
 "Stick PC": [
  null,
  "Tikku-PC"
 ],
 "Stop": [
  null,
  "Pysäytä"
 ],
 "Store Metrics": [
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
 "System Not Registered": [
  null,
  "Järjestelmää ei ole rekisteröity"
 ],
 "System Services": [
  null,
  "Järjestelmäpalvelut"
 ],
 "System Time": [
  null,
  "Järjestelmän aika"
 ],
 "System Up To Date": [
  null,
  "Järjestelmä ajan tasalla"
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
  "Käyttäjällä <b>$0</b> ei ole oikeutta luoda ajastimia"
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
  "Käyttäjällä <b>$0</b> ei ole oikeutta sammuttaa tai käynnistää uudelleen tätä palvelinta"
 ],
 "The user <b>$0</b> is not permitted to start or stop services": [
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
 "Triggered By": [
  null,
  ""
 ],
 "Triggers": [
  null,
  "Liipaisimet"
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
 "Unmask": [
  null,
  ""
 ],
 "Updates Available": [
  null,
  "Päivityksiä saatavilla"
 ],
 "Usage of $0 CPU core": [
  "Usage of $0 CPU cores",
  "",
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
  "Keskiviikko"
 ],
 "Weeks": [
  null,
  "Viikot"
 ],
 "White": [
  null,
  ""
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
 "of $0 CPU core": [
  "of $0 CPU cores",
  "",
  ""
 ],
 "undefined": [
  null,
  "määrittämätön"
 ],
 "unknown": [
  null,
  "tuntematon"
 ],
 "page-title\u0004CPU Status": [
  null,
  "Prosessorin tila"
 ],
 "page-title\u0004Memory": [
  null,
  "Muisti"
 ]
}));
