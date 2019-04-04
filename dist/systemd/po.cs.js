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
nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2;
return plural;
},
  "language": "cs",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Template": [
  null,
  "$0 Šablona"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 není k dispozici z žádného z repozitářů."
 ],
 "$0 will be installed.": [
  null,
  "$0 bude nainstalováno."
 ],
 "1 Minute": [
  null,
  "1 minuta"
 ],
 "1 day": [
  null,
  "1 den"
 ],
 "1 hour": [
  null,
  "1 hodina"
 ],
 "1 min": [
  null,
  "1 minuta"
 ],
 "1 week": [
  null,
  "1 týden"
 ],
 "10th": [
  null,
  "10."
 ],
 "11th": [
  null,
  "11. "
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
  "20 minut"
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
  "40 minut"
 ],
 "4th": [
  null,
  "4."
 ],
 "5 Minutes": [
  null,
  "5 minut"
 ],
 "5 min": [
  null,
  "5 min"
 ],
 "5 minutes": [
  null,
  "5 minut"
 ],
 "5th": [
  null,
  "5."
 ],
 "6 hours": [
  null,
  "6 hodin"
 ],
 "60 Minutes": [
  null,
  "60 minut"
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
  "Další balíčky:"
 ],
 "Advanced TCA": [
  null,
  "Pokročilé TCA"
 ],
 "After": [
  null,
  "Později"
 ],
 "After system boot": [
  null,
  "Po startu systému"
 ],
 "Alert and above": [
  null,
  "Výstraha a závažnější"
 ],
 "All": [
  null,
  "Vše"
 ],
 "All In One": [
  null,
  "Vše v jednom"
 ],
 "Appearance:": [
  null,
  "Vzhled:"
 ],
 "Asset Tag": [
  null,
  "Inventární štítek"
 ],
 "At specific time": [
  null,
  "V uvedený čas"
 ],
 "Automatic Startup": [
  null,
  "Automatické spouštění"
 ],
 "Automatically using NTP": [
  null,
  "Automatické použití NTP"
 ],
 "Automatically using specific NTP servers": [
  null,
  "Automatické použití uvedených NTP serverů"
 ],
 "BIOS": [
  null,
  "BIOS"
 ],
 "BIOS date": [
  null,
  "Datum vydání BIOS"
 ],
 "BIOS version": [
  null,
  "Verze BIOS"
 ],
 "Before": [
  null,
  "Před"
 ],
 "Binds To": [
  null,
  "Spojuje k"
 ],
 "Black": [
  null,
  "Černá"
 ],
 "Blade": [
  null,
  "Blade server"
 ],
 "Blade enclosure": [
  null,
  "Skříň se šachtami pro blade servery"
 ],
 "Bound By": [
  null,
  "Spojeno"
 ],
 "Bug Fix Updates Available": [
  null,
  "Jsou k dispozici aktualizace opravující zabezpečení"
 ],
 "Bus Expansion Chassis": [
  null,
  "Skříň rozšíření sběrnice"
 ],
 "CPU": [
  null,
  "Procesor"
 ],
 "CPU Security": [
  null,
  ""
 ],
 "CPU Security Toggles": [
  null,
  ""
 ],
 "Cached": [
  null,
  "Uloženo v mezipaměti"
 ],
 "Cancel": [
  null,
  "Storno"
 ],
 "Cannot schedule event in the past": [
  null,
  "Nelze naplánovat událost v minulosti"
 ],
 "Change": [
  null,
  "Změnit"
 ],
 "Change Host Name": [
  null,
  "Změnit název počítače"
 ],
 "Change System Time": [
  null,
  "Změnit systémový čas"
 ],
 "Checking for updates…": [
  null,
  "Zjišťování případných aktualizací…"
 ],
 "Checking installed software": [
  null,
  "Zjišťuje se nainstalovaný sofware"
 ],
 "Class": [
  null,
  "Třída"
 ],
 "Clear All Filters": [
  null,
  "Vyčistit všechny filtry"
 ],
 "Click to see system hardware information": [
  null,
  "Kliknutím zobrazíte informace o hardware"
 ],
 "Close": [
  null,
  "Zavřít"
 ],
 "Command": [
  null,
  "Příkaz"
 ],
 "Compact PCI": [
  null,
  "Compact PCI"
 ],
 "Condition $0=$1 was not met": [
  null,
  "Podmínka $0=$1 nebyla splněna"
 ],
 "Condition failed": [
  null,
  "Podmínka nebyla úspěšná"
 ],
 "Conflicted By": [
  null,
  "V konfliktu s"
 ],
 "Conflicts": [
  null,
  "Konflikty"
 ],
 "Consists Of": [
  null,
  "Sestává se z"
 ],
 "Convertible": [
  null,
  "Počítač 2v1"
 ],
 "Copy": [
  null,
  "Zkopírovat"
 ],
 "Create Timer": [
  null,
  "Vytvořit časovač"
 ],
 "Create Timers": [
  null,
  "Vytvořit časovače"
 ],
 "Critical and above": [
  null,
  "Kritické a závažnější"
 ],
 "Ctrl+Insert": [
  null,
  "Ctrl+Insert"
 ],
 "Current boot": [
  null,
  "Od tohoto spuštění systému"
 ],
 "Dark": [
  null,
  "Tmavý"
 ],
 "Debug and above": [
  null,
  "Ladící a závažnější"
 ],
 "Delay": [
  null,
  "Prodleva"
 ],
 "Description": [
  null,
  "Popis"
 ],
 "Desktop": [
  null,
  "Desktop"
 ],
 "Detachable": [
  null,
  "Odpojitelné"
 ],
 "Details": [
  null,
  "Podrobnosti"
 ],
 "Disable": [
  null,
  "Vypnout"
 ],
 "Disable symmetric multithreading": [
  null,
  ""
 ],
 "Disabled": [
  null,
  "Vypnuto"
 ],
 "Disk I/O": [
  null,
  "Diskový vst/výst."
 ],
 "Docking Station": [
  null,
  "Dokovací stanice"
 ],
 "Domain": [
  null,
  "Doména"
 ],
 "Don't Repeat": [
  null,
  "Neopakovat"
 ],
 "Downloading $0": [
  null,
  "Stahuje se $0"
 ],
 "Embedded PC": [
  null,
  "Jednodeskový počítač"
 ],
 "Enable": [
  null,
  "Povolit"
 ],
 "Enable Forcefully": [
  null,
  "Vynuceně zapnout"
 ],
 "Enable stored metrics…": [
  null,
  "Zapnout uchovávání metrik…"
 ],
 "Enabled": [
  null,
  "Povoleno"
 ],
 "Enhancement Updates Available": [
  null,
  "Jsou k dispozici vylepšující aktualizace"
 ],
 "Entry": [
  null,
  "Položka"
 ],
 "Error": [
  null,
  "Chyba"
 ],
 "Error and above": [
  null,
  "Chyba a závažnější"
 ],
 "Everything": [
  null,
  "Vše"
 ],
 "Expansion Chassis": [
  null,
  "Rozšiřující šasi"
 ],
 "Filter by name or description...": [
  null,
  "Filtrovat podle názvu nebo popisu…"
 ],
 "Friday": [
  null,
  "pátek"
 ],
 "General": [
  null,
  "Obecné"
 ],
 "Go to": [
  null,
  "Jít na"
 ],
 "Go to now": [
  null,
  "Přejít na nyní"
 ],
 "Hand Held": [
  null,
  "Pro držení v rukou"
 ],
 "Hardware": [
  null,
  "Hardware"
 ],
 "Hardware Information": [
  null,
  "Informace o hardware"
 ],
 "Host Name": [
  null,
  "Název počítače"
 ],
 "Hour : Minute": [
  null,
  "Hodina:minuta"
 ],
 "Hour needs to be a number between 0-23": [
  null,
  "Je třeba, aby hodina bylo číslo z rozmezí 0 až 23"
 ],
 "Hours": [
  null,
  "Hodin"
 ],
 "I/O Wait": [
  null,
  "Čekání na vst./výst."
 ],
 "Info and above": [
  null,
  "Informace a závažnější"
 ],
 "Install": [
  null,
  "Nainstalovat"
 ],
 "Install Software": [
  null,
  "Nainstalovat software"
 ],
 "Installing $0": [
  null,
  "Instaluje se $0"
 ],
 "Instantiate": [
  null,
  "Vytvořit instanci a spustit"
 ],
 "Invalid date format": [
  null,
  "Neplatný formát data"
 ],
 "Invalid date format and invalid time format": [
  null,
  "Neplatný formát data a času"
 ],
 "Invalid date format.": [
  null,
  "Neplatný formát data."
 ],
 "Invalid number.": [
  null,
  "Neplatné číslo."
 ],
 "Invalid time format": [
  null,
  "Neplatný formát času"
 ],
 "Invalid time zone": [
  null,
  "Neplatná časová zóna"
 ],
 "IoT Gateway": [
  null,
  "Brána Internetu věcí (IoT)"
 ],
 "Joins Namespace Of": [
  null,
  "Připojuje jmenný prostor od"
 ],
 "Journal": [
  null,
  "Žurnál"
 ],
 "Journal entry": [
  null,
  "Položka žurnálu"
 ],
 "Journal entry not found": [
  null,
  "Položka žurnálu nenalezena"
 ],
 "Kernel": [
  null,
  "Jádro"
 ],
 "Laptop": [
  null,
  "Notebook"
 ],
 "Last 24 hours": [
  null,
  "Uplynulých 24 hodin"
 ],
 "Last 7 days": [
  null,
  "Uplynulých 7 dnů"
 ],
 "Last Trigger": [
  null,
  "Naposledy spuštěno"
 ],
 "Light": [
  null,
  "Světlý"
 ],
 "Load earlier entries": [
  null,
  "Načíst dřívější položky"
 ],
 "Loading...": [
  null,
  "Načítání…"
 ],
 "Log messages": [
  null,
  "Zprávy záznamu událostí"
 ],
 "Logs": [
  null,
  "Záznamy událostí"
 ],
 "Low Profile Desktop": [
  null,
  "Nízký desktop"
 ],
 "Lunch Box": [
  null,
  "Kufříkový počítač"
 ],
 "Machine ID": [
  null,
  "Identif. stroje"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "Otisky SSH klíče stroje"
 ],
 "Main Server Chassis": [
  null,
  "Hlavní skříň serveru"
 ],
 "Manually": [
  null,
  "Ručně"
 ],
 "Mask": [
  null,
  "Maska"
 ],
 "Mask Forcefully": [
  null,
  "Vynuceně zamaskovat"
 ],
 "Memory": [
  null,
  "Paměť"
 ],
 "Memory & Swap": [
  null,
  "Operační paměť a odkládací prostor stránek"
 ],
 "Message to logged in users": [
  null,
  "Zpráva přihlášeným uživatelům"
 ],
 "Mini PC": [
  null,
  "Mini PC"
 ],
 "Mini Tower": [
  null,
  "Mini věž"
 ],
 "Minute needs to be a number between 0-59": [
  null,
  "Je třeba, aby minuta bylo číslo z rozmezí 0-59"
 ],
 "Minutes": [
  null,
  "Minut"
 ],
 "Mitigations": [
  null,
  ""
 ],
 "Model": [
  null,
  "Model"
 ],
 "Monday": [
  null,
  "pondělí"
 ],
 "Multi-system Chassis": [
  null,
  "Skříň pro více systémů"
 ],
 "NTP Server": [
  null,
  "NTP server"
 ],
 "Name": [
  null,
  "Název"
 ],
 "Need at least one NTP server": [
  null,
  "Je třeba alespoň jeden NTP server"
 ],
 "Network Traffic": [
  null,
  "Síťový provoz"
 ],
 "Next Run": [
  null,
  "Příští spuštění"
 ],
 "Nice": [
  null,
  "Nice"
 ],
 "No Delay": [
  null,
  "Bez prodlevy"
 ],
 "No Matching Results": [
  null,
  "Žádné shodující se výsledky"
 ],
 "No host keys found.": [
  null,
  "Nenalezeny žádné klíče stroje."
 ],
 "Not authorized to upload-report": [
  null,
  "Neoprávněni k nahrání výkazu"
 ],
 "Not synchronized": [
  null,
  "Nesynchronizováno"
 ],
 "Note": [
  null,
  "Poznámka"
 ],
 "Notebook": [
  null,
  "Notebook"
 ],
 "Notice and above": [
  null,
  "Oznámení a závažnější"
 ],
 "Off": [
  null,
  "Vypnuto"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  "Zapnuto"
 ],
 "On Failure": [
  null,
  "Při nezdaru"
 ],
 "Only Emergency": [
  null,
  "Pouze nouzové"
 ],
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  "Dovolena jsou pouze písmena a číslice, dále ještě znaky  : , _ , . , @ , -"
 ],
 "Operating System": [
  null,
  "Operační systém"
 ],
 "Other": [
  null,
  "Ostatní"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit zhavaroval"
 ],
 "Part Of": [
  null,
  "Součástí"
 ],
 "Paste": [
  null,
  "Vložit"
 ],
 "Path": [
  null,
  "Popis umístění"
 ],
 "Paths": [
  null,
  "Popisy umístění"
 ],
 "Performance Profile": [
  null,
  "Výkonnostní profil"
 ],
 "Peripheral Chassis": [
  null,
  "Skříň periferií"
 ],
 "Pizza Box": [
  null,
  "Velikost „krabice od pizzy“"
 ],
 "Portable": [
  null,
  "Přenosný"
 ],
 "Power Options": [
  null,
  "Možnosti napájení"
 ],
 "Preset": [
  null,
  "Přednastavené"
 ],
 "Preset Forcefully": [
  null,
  "Vynucené přednastavené"
 ],
 "Pretty Host Name": [
  null,
  "Hezký název stroje"
 ],
 "Problem details": [
  null,
  "Podrobnosti o problému"
 ],
 "Problem info": [
  null,
  "Informace o problému"
 ],
 "Propagates Reload To": [
  null,
  "Propaguje načíst znovu k"
 ],
 "RAID Chassis": [
  null,
  "RAID skříň"
 ],
 "Rack Mount Chassis": [
  null,
  "Skříň do stojanu"
 ],
 "Read more...": [
  null,
  ""
 ],
 "Real Host Name": [
  null,
  "Skutečný název stroje"
 ],
 "Real host name can only contain lower-case characters, digits, dashes, and periods (with populated subdomains)": [
  null,
  "Skutečný název stroje může obsahovat pouze malá písmena (bez diakritiky), číslice, spojovníky a tečky (u použitých subdomén)"
 ],
 "Real host name must be 64 characters or less": [
  null,
  "Je třeba, aby skutečný název stroje byl nanejvýš 64 znaků dlouhý"
 ],
 "Reboot": [
  null,
  "Restartovat"
 ],
 "Recent": [
  null,
  "Nedávné"
 ],
 "Reload": [
  null,
  "Načíst znovu"
 ],
 "Reload Propagated From": [
  null,
  "Znovu načíst propagováno z"
 ],
 "Removals:": [
  null,
  "Odebrání:"
 ],
 "Removing $0": [
  null,
  "Odebírá se $0"
 ],
 "Repeat Daily": [
  null,
  "Opakovat každý den"
 ],
 "Repeat Hourly": [
  null,
  "Opakovat každou hodinu"
 ],
 "Repeat Monthly": [
  null,
  "Opakovat každý měsíc"
 ],
 "Repeat Weekly": [
  null,
  "Opakovat každý týden"
 ],
 "Repeat Yearly": [
  null,
  "Opakovat každý rok"
 ],
 "Report": [
  null,
  "Nahlásit"
 ],
 "Reported": [
  null,
  "Nahlášeno"
 ],
 "Reporter 'reporter-ureport' not found.": [
  null,
  "Hlásič „reporter-ureport“ nenalezen."
 ],
 "Reporting was unsucessful. Try running `reporter-ureport -d ": [
  null,
  "Hlášení nebylo úspěšné. Zkuste spustit `reporter-ureport -d "
 ],
 "Required By": [
  null,
  "Vyžadováno"
 ],
 "Requires": [
  null,
  "Vyžaduje"
 ],
 "Requisite": [
  null,
  "Závislost"
 ],
 "Requisite Of": [
  null,
  "Závislost pro"
 ],
 "Reset": [
  null,
  "Reset"
 ],
 "Restart": [
  null,
  "Restartovat"
 ],
 "Run": [
  null,
  "Spustit"
 ],
 "Running Since": [
  null,
  "Spuštěno od doby"
 ],
 "Saturday": [
  null,
  "sobota"
 ],
 "Save": [
  null,
  "Uložit"
 ],
 "Save and reboot": [
  null,
  ""
 ],
 "Sealed-case PC": [
  null,
  "Počítač se zapečetěnou skříní"
 ],
 "Seconds": [
  null,
  "Sekund"
 ],
 "Secure Shell Keys": [
  null,
  "Klíče zabezpečeného shellu"
 ],
 "Security Updates Available": [
  null,
  "Jsou k dispozici aktualizace zabezpečení"
 ],
 "Service": [
  null,
  "Služba"
 ],
 "Service Logs": [
  null,
  "Záznamy událostí služby"
 ],
 "Service name": [
  null,
  "Název služby"
 ],
 "Services": [
  null,
  "Služby"
 ],
 "Set Host name": [
  null,
  "Nastavit název stroje"
 ],
 "Set Time": [
  null,
  "Nastavit čas"
 ],
 "Severity": [
  null,
  "Závažnost"
 ],
 "Shift+Insert": [
  null,
  "Shift+Insert"
 ],
 "Show fingerprints": [
  null,
  "Zobrazit otisky"
 ],
 "Shut Down": [
  null,
  "Vypnout"
 ],
 "Slot": [
  null,
  "Slot"
 ],
 "Sockets": [
  null,
  "Sokety"
 ],
 "Software-based workarounds help prevent CPU security issues. These mitigations have the side effect of reducing performance. Change these settings at your own risk.": [
  null,
  ""
 ],
 "Space-saving Computer": [
  null,
  "Prostorově úsporný počítač"
 ],
 "Specific Time": [
  null,
  "Konkrétní čas"
 ],
 "Start": [
  null,
  "Spustit"
 ],
 "State": [
  null,
  "Stav"
 ],
 "Static": [
  null,
  "Statické"
 ],
 "Status": [
  null,
  "Stav"
 ],
 "Stick PC": [
  null,
  "Počítač v klíčence"
 ],
 "Stop": [
  null,
  "Zastavit"
 ],
 "Store Metrics": [
  null,
  "Ukládat metriky"
 ],
 "Sub Chassis": [
  null,
  "Dílčí skříň"
 ],
 "Sub Notebook": [
  null,
  "Zmenšený notebook"
 ],
 "Sunday": [
  null,
  "neděle"
 ],
 "Swap Used": [
  null,
  "Využití odkládacího prostoru"
 ],
 "Synchronized": [
  null,
  "Synchronizováno"
 ],
 "Synchronized with {{Server}}": [
  null,
  "Synchronizováno s {{Server}}"
 ],
 "System": [
  null,
  "Systém"
 ],
 "System Information": [
  null,
  "Informace o systému"
 ],
 "System Not Registered": [
  null,
  "Systém není zaregistrován"
 ],
 "System Services": [
  null,
  "Systémové služby"
 ],
 "System Time": [
  null,
  "Systémový čas"
 ],
 "System Up To Date": [
  null,
  "Systém je aktuální"
 ],
 "Tablet": [
  null,
  "Tablet"
 ],
 "Targets": [
  null,
  "Cíle"
 ],
 "Terminal": [
  null,
  "Terminál"
 ],
 "The user $0 is not permitted to change cpu security mitigations": [
  null,
  ""
 ],
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  "Uživatel <b>$0</b> není oprávněn pro vytváření časovačů"
 ],
 "The user <b>$0</b> is not permitted to change the system time": [
  null,
  "Uživatel <b>$0</b> není oprávněn měnit systémový čas"
 ],
 "The user <b>$0</b> is not permitted to enable or disable services": [
  null,
  "Uživatel <b>$0</b> není oprávněn povolovat nebo zakazovat služby"
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  "Uživatel <b>$0</b> není oprávněn upravovat názvy strojů"
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  "Uživatel <b>$0</b> není oprávněn vypínat či restartovat tento server"
 ],
 "The user <b>$0</b> is not permitted to start or stop services": [
  null,
  "Uživatel <b>$0</b> není oprávněn spouštět či zastavovat služby"
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  "Tento den neexistuje ve všech měsících.<br> Časovač bude vykonán pouze v měsících, které mají 31. den"
 ],
 "This field cannot be empty.": [
  null,
  "Tuto kolonku je třeba vyplnit."
 ],
 "This unit is an instance of the $0 template.": [
  null,
  "Tato jednotka je instancí šablony $0."
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  "Tato jednotka není navržena k tomu, aby byla výslovně zapnuta."
 ],
 "Thursday": [
  null,
  "čtvrtek"
 ],
 "Time Zone": [
  null,
  "Časová zóna"
 ],
 "Timers": [
  null,
  "Časovače"
 ],
 "Total size: $0": [
  null,
  "Celková velikost: $0"
 ],
 "Tower": [
  null,
  "Věž"
 ],
 "Triggered By": [
  null,
  "Spuštěno na základě"
 ],
 "Triggers": [
  null,
  "Spouštěče"
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  "Pokus o synchronizaci se {{Server}}"
 ],
 "Tuesday": [
  null,
  "úterý"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "Unknown": [
  null,
  "Neznámé"
 ],
 "Unmask": [
  null,
  "Odmaskovat"
 ],
 "Updates Available": [
  null,
  "Jsou k dispozici aktualizace"
 ],
 "Usage of $0 CPU core": [
  "Usage of $0 CPU cores",
  "Využití $0 jádra procesoru",
  "Využití $0 jader procesoru",
  "Využití $0 jader procesoru"
 ],
 "Used": [
  null,
  "Využito"
 ],
 "User": [
  null,
  "Uživatel"
 ],
 "Vendor": [
  null,
  "Výrobce"
 ],
 "Version": [
  null,
  "Verze"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Čeká se na dokončení ostatních operací správy balíčků"
 ],
 "Wanted By": [
  null,
  "Vyžadováno"
 ],
 "Wants": [
  null,
  "Vyžaduje"
 ],
 "Warning and above": [
  null,
  "Varování a závažnější"
 ],
 "Wednesday": [
  null,
  "středa"
 ],
 "Weeks": [
  null,
  "Týdny"
 ],
 "White": [
  null,
  "Bílá"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 bajtů binárních dat]"
 ],
 "[binary data]": [
  null,
  "[binarní data]"
 ],
 "[no data]": [
  null,
  "[žádná data]"
 ],
 "failed to list ssh host keys: $0": [
  null,
  "nepodařilo se vypsat ssh klíče stroje: $0"
 ],
 "of $0 CPU core": [
  "of $0 CPU cores",
  "z $0 jádra procesoru",
  "ze $0 jader procesoru",
  "z $0 jader procesoru"
 ],
 "undefined": [
  null,
  "nedefinované"
 ],
 "unknown": [
  null,
  "neznámý"
 ],
 "page-title\u0004CPU Status": [
  null,
  "Stav procesoru"
 ],
 "page-title\u0004Memory": [
  null,
  "Paměť"
 ]
}));
