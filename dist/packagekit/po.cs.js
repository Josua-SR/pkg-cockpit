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
 "$0 Package": [
  "$0 Packages",
  "$0 balíček",
  "$0 balíčky",
  "$0 balíčků"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 není k dispozici z žádného z repozitářů."
 ],
 "$0 update": [
  "$0 updates",
  "$0 aktualizace",
  "$0 aktualizace",
  "$0 aktualizací"
 ],
 "$0 will be installed.": [
  null,
  "$0 bude nainstalováno."
 ],
 "$1 security fix": [
  "$1 security fixes",
  "$1 oprava zabezpečení",
  "$1 opravy zabezpečení",
  "$1 oprav zabezpečení"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  ", včetně $1 opravy zabezpečení",
  ", včetně $1 oprav zabezpečení",
  ", včetně $1 oprav zabezpečení"
 ],
 "Additional packages:": [
  null,
  "Další balíčky:"
 ],
 "Apply all updates": [
  null,
  "Aplikovat všechny aktualizace"
 ],
 "Apply security updates": [
  null,
  "Aplikovat aktualizace zabezpečení"
 ],
 "Applying updates": [
  null,
  "Aplikují se aktualizace"
 ],
 "Applying updates failed": [
  null,
  "Aplikace aktualizací se nezdařila"
 ],
 "Automatic Updates": [
  null,
  "Automatické aktualizace"
 ],
 "Available Updates": [
  null,
  "Dostupné aktualizace"
 ],
 "Bugs:": [
  null,
  "Chyby:"
 ],
 "Cancel": [
  null,
  "Storno"
 ],
 "Check for Updates": [
  null,
  "Zkontrolovat aktualizace"
 ],
 "Checking installed software": [
  null,
  "Zjišťuje se nainstalovaný sofware"
 ],
 "Details": [
  null,
  "Podrobnosti"
 ],
 "Downloaded": [
  null,
  "Staženo"
 ],
 "Downloading": [
  null,
  "Stahuje se"
 ],
 "Downloading $0": [
  null,
  "Stahuje se $0"
 ],
 "Errata:": [
  null,
  "Errata:"
 ],
 "Ignore": [
  null,
  "Ignorovat"
 ],
 "Initializing...": [
  null,
  "Inicializace…"
 ],
 "Install": [
  null,
  "Nainstalovat"
 ],
 "Install All Updates": [
  null,
  "Nainstalovat všechny aktualizace"
 ],
 "Install Security Updates": [
  null,
  "Nainstalovat aktualizace zabezpečení"
 ],
 "Install Software": [
  null,
  "Nainstalovat software"
 ],
 "Installed": [
  null,
  "Nainstalováno"
 ],
 "Installing": [
  null,
  "Instaluje se"
 ],
 "Installing $0": [
  null,
  "Instaluje se $0"
 ],
 "Last checked: $0 ago": [
  null,
  "Naposledy zkontrolováno: před $0 dny"
 ],
 "Loading available updates failed": [
  null,
  "Načtení dostupných aktualizací se nezdařilo"
 ],
 "Loading available updates, please wait...": [
  null,
  "Načítání dostupných aktualizací, čekejte…"
 ],
 "Name": [
  null,
  "Název"
 ],
 "No updates pending": [
  null,
  "Žádné čekající aktualizace"
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
 "Package information": [
  null,
  "Informace o balíčku"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit zhavaroval"
 ],
 "PackageKit is not installed": [
  null,
  "PackageKit není nainstalovaný"
 ],
 "PackageKit reported error code $0": [
  null,
  "PackageKit ohlásilo chybový kód $0"
 ],
 "Refreshing package information": [
  null,
  "Obnovují se informace o balíčcích"
 ],
 "Register…": [
  null,
  "Zaregistrovat…"
 ],
 "Removals:": [
  null,
  "Odebrání:"
 ],
 "Removing $0": [
  null,
  "Odebírá se $0"
 ],
 "Restart Now": [
  null,
  "Restartovat nyní"
 ],
 "Restart Recommended": [
  null,
  "Doporučen restart"
 ],
 "Restarting": [
  null,
  "Restartuje se"
 ],
 "Set up": [
  null,
  "Nastavit"
 ],
 "Setting up": [
  null,
  "Nastavení"
 ],
 "Severity": [
  null,
  "Závažnost"
 ],
 "Severity:": [
  null,
  "Závažnost:"
 ],
 "Software Updates": [
  null,
  "Aktualizace software"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  "Správa balíčků je v tuto chvíli používána nějakým jiným programem, vyčkejte…"
 ],
 "System is up to date": [
  null,
  "Systém je aktuální"
 ],
 "This system is not registered": [
  null,
  "Tento systém není zaregistrován"
 ],
 "This web console will be updated.": [
  null,
  "Tato webová konzole bude aktualizována"
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  "Pro získávání aktualizací software je třeba systém zaregistrovat u Red Hat, buď pomocí Red Hat portálu pro zákazníky nebo místního serveru předplatného."
 ],
 "Total size: $0": [
  null,
  "Celková velikost: $0"
 ],
 "Update History": [
  null,
  "Historie aktualizací"
 ],
 "Update Log": [
  null,
  "Záznam událostí aktualizací"
 ],
 "Updated": [
  null,
  "Aktualizováno"
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  "Aby se uplatnily, aktualizované balíčky mohou vyžadovat restart."
 ],
 "Updating": [
  null,
  "Aktualizuje se"
 ],
 "Verified": [
  null,
  "Ověřeno"
 ],
 "Verifying": [
  null,
  "Ověřuje se"
 ],
 "Version": [
  null,
  "Verze"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Čeká se na dokončení ostatních operací správy balíčků"
 ],
 "Your browser will disconnect, but this does not affect the update process. You can reconnect in a few moments to continue watching the progress.": [
  null,
  "Váš prohlížeč se odpojí, ale to neovlivní proces aktualizace. Můžete se kdykoli znovu připojit a podívat se na postup."
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  "Server brzy zavře spojení. Po dokončení jeho restartu se budete moci opět připojit."
 ],
 "and restart the machine automatically.": [
  null,
  "a automaticky restartovat stroj."
 ],
 "at": [
  null,
  "v"
 ],
 "bug fix": [
  null,
  "oprava chyby"
 ],
 "enhancement": [
  null,
  "vylepšení"
 ],
 "every day": [
  null,
  "každý den"
 ],
 "on Fridays": [
  null,
  "v pátky"
 ],
 "on Mondays": [
  null,
  "v pondělky"
 ],
 "on Saturdays": [
  null,
  "v soboty"
 ],
 "on Sundays": [
  null,
  "v neděle"
 ],
 "on Thursdays": [
  null,
  "ve čtvrtky"
 ],
 "on Tuesdays": [
  null,
  "ve středy"
 ],
 "on Wednesdays": [
  null,
  "v úterky"
 ],
 "security": [
  null,
  "zabezpečení"
 ],
 "undefined": [
  null,
  "nedefinované"
 ]
}));
