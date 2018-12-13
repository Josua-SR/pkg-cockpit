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
 "Asset Tag": [
  null,
  "Inventární štítek"
 ],
 "At specific time": [
  null,
  "V uvedený čas"
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
 "CPU": [
  null,
  "Procesor"
 ],
 "Cached": [
  null,
  "Uloženo v mezipaměti"
 ],
 "Cancel": [
  null,
  "Storno"
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
 "Checking installed software": [
  null,
  "Zjišťuje se nainstalovaný sofware"
 ],
 "Class": [
  null,
  "Třída"
 ],
 "Close": [
  null,
  "Zavřít"
 ],
 "Command": [
  null,
  "Příkaz"
 ],
 "Condition failed": [
  null,
  "Podmínka nebyla úspěšná"
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
 "Current boot": [
  null,
  "Od tohoto spuštění systému"
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
 "Disk I/O": [
  null,
  "Diskový vst/výst."
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
 "Enable stored metrics…": [
  null,
  "Zapnout uchovávání metrik…"
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
 "Invalid time zone": [
  null,
  "Neplatná časová zóna"
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
 "Last 24 hours": [
  null,
  "Uplynulých 24 hodin"
 ],
 "Last 7 days": [
  null,
  "Uplynulých 7 dnů"
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
 "Machine ID": [
  null,
  "Identif. stroje"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "Otisky SSH klíče stroje"
 ],
 "Manually": [
  null,
  "Ručně"
 ],
 "Memory": [
  null,
  "Paměť"
 ],
 "Memory & Swap": [
  null,
  "Operační paměť a odkládací prostor stránek"
 ],
 "Minutes": [
  null,
  "Minut"
 ],
 "Model": [
  null,
  "Model"
 ],
 "Monday": [
  null,
  "pondělí"
 ],
 "Name": [
  null,
  "Název"
 ],
 "Network Traffic": [
  null,
  "Síťový provoz"
 ],
 "Nice": [
  null,
  "Nice"
 ],
 "No Delay": [
  null,
  "Bez prodlevy"
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
 "Only Emergency": [
  null,
  "Pouze nouzové"
 ],
 "Operating System": [
  null,
  "Operační systém"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "Paths": [
  null,
  "Popisy umístění"
 ],
 "Performance Profile": [
  null,
  "Výkonnostní profil"
 ],
 "Power Options": [
  null,
  "Možnosti napájení"
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
 "Real Host Name": [
  null,
  "Skutečný název stroje"
 ],
 "Reboot": [
  null,
  "Restartovat"
 ],
 "Recent": [
  null,
  "Nedávné"
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
 "Saturday": [
  null,
  "sobota"
 ],
 "Save": [
  null,
  "Uložit"
 ],
 "Seconds": [
  null,
  "Sekund"
 ],
 "Secure Shell Keys": [
  null,
  "Klíče zabezpečeného shellu"
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
 "Set Time": [
  null,
  "Nastavit čas"
 ],
 "Severity": [
  null,
  "Závažnost"
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
 "Specific Time": [
  null,
  "Konkrétní čas"
 ],
 "Store metrics": [
  null,
  "Uchovávat metriky"
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
 "System Services": [
  null,
  "Systémové služby"
 ],
 "System Time": [
  null,
  "Systémový čas"
 ],
 "Targets": [
  null,
  "Cíle"
 ],
 "Terminal": [
  null,
  "Terminál"
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
 ]
}));
