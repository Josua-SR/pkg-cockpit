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
 " (shared with the OS)": [
  null,
  "(sdíleno s operačním systémem)"
 ],
 "$0 shares": [
  null,
  "$0 sdílení"
 ],
 "${hip}:${hport} -> $cport": [
  null,
  "${hip}:${hport} -> $cport"
 ],
 "Add Additional Storage": [
  null,
  "Přidat další úložiště"
 ],
 "Add Storage": [
  null,
  "Přidat úložiště"
 ],
 "Additional Storage": [
  null,
  "Další úložiště"
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "Všechna data na vybraných discích budou vymazána a disky budou přidány do fondu úložiště."
 ],
 "Always": [
  null,
  "Vždy"
 ],
 "Author": [
  null,
  "Autor"
 ],
 "CPU": [
  null,
  "Procesor"
 ],
 "CPU priority": [
  null,
  "Priorita procesoru"
 ],
 "CPU usage:": [
  null,
  "Využití procesoru:"
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  "Nedaří se spojit s Docker"
 ],
 "Cancel": [
  null,
  "Storno"
 ],
 "Change": [
  null,
  "Změnit"
 ],
 "Change resource limits": [
  null,
  "Změnit limity prostředku"
 ],
 "Change resources limits": [
  null,
  "Změnit limity prostředků"
 ],
 "Close": [
  null,
  "Zavřít"
 ],
 "Combined memory usage": [
  null,
  "Kombinované využití paměti"
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  "Kombinované využití $0 jádra procesoru",
  "Kombinované využití $0 jader procesoru",
  "Kombinované využití $0 jader procesoru"
 ],
 "Command": [
  null,
  "Příkaz"
 ],
 "Command can't be empty": [
  null,
  "Příkaz je třeba vyplnit"
 ],
 "Command:": [
  null,
  "Příkaz:"
 ],
 "Commit": [
  null,
  "Odeslat"
 ],
 "Commit Image": [
  null,
  "Odeslat obraz"
 ],
 "Configure storage...": [
  null,
  "Nastavit úložiště…"
 ],
 "Connecting to Docker": [
  null,
  "Připojování k Docker"
 ],
 "Container": [
  null,
  "Kontejner"
 ],
 "Container Name": [
  null,
  "Název kontejneru"
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  "Kontejner je nyní označen jako nespuštěný, ale běžné zastavení se nezdařilo."
 ],
 "Container is currently running.": [
  null,
  "Kontejner je v tuto chvíli spuštěný."
 ],
 "Container:": [
  null,
  "Kontejner:"
 ],
 "Containers": [
  null,
  "Kontejnery"
 ],
 "Could not add all disks": [
  null,
  "Nedaří se přidat všechny disky"
 ],
 "Could not reset the storage pool": [
  null,
  "Nedaří se resetovat fond úložiště"
 ],
 "Created": [
  null,
  "Vytvořeno"
 ],
 "Created:": [
  null,
  "Vytvořeno:"
 ],
 "Default": [
  null,
  "Výchozí"
 ],
 "Delete": [
  null,
  "Smazat"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "Smazání kontejneru vymaže veškerá data v něm."
 ],
 "Details": [
  null,
  "Podrobnosti"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Docker na tomto systému není nainstalovaný nebo aktivovaný"
 ],
 "Download": [
  null,
  "Stáhnout"
 ],
 "Drive": [
  null,
  "Jednotka"
 ],
 "Duplicate alias": [
  null,
  "Duplikovat alternativní názvy"
 ],
 "Duplicate port": [
  null,
  "Duplikovat port"
 ],
 "Entrypoint": [
  null,
  "Koncový bod"
 ],
 "Environment": [
  null,
  "Prostředí"
 ],
 "Erase containers and reset storage pool": [
  null,
  "Vymazat kontejnery a resetovat fond úložiště"
 ],
 "Error message from Docker:": [
  null,
  "Chybové hlášení z Docker:"
 ],
 "Everything": [
  null,
  "Vše"
 ],
 "Exited $ExitCode": [
  null,
  "Skončilo s $ExitCode"
 ],
 "Expose container ports": [
  null,
  "Odhalit porty kontejneru"
 ],
 "Failed to start Docker: $0": [
  null,
  "Nepodařilo se spustit Docker: $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  "Nepodařilo se zastavit Docker rozsah: $0"
 ],
 "Force Delete": [
  null,
  "Vynutit smazání"
 ],
 "Free": [
  null,
  "Volno"
 ],
 "Gateway:": [
  null,
  "Brána:"
 ],
 "Get new image": [
  null,
  "Získat nový obraz"
 ],
 "Hard Disk": [
  null,
  "Pevný disk"
 ],
 "IP Address:": [
  null,
  "IP adresa:"
 ],
 "IP Prefix Length:": [
  null,
  "Délka předpony IP adresy:"
 ],
 "Id": [
  null,
  "Identif."
 ],
 "Id:": [
  null,
  "Identif.:"
 ],
 "Image": [
  null,
  "Obraz"
 ],
 "Image $0": [
  null,
  "Obraz $0"
 ],
 "Image Search": [
  null,
  "Hledání obrazu"
 ],
 "Image:": [
  null,
  "Obraz:"
 ],
 "Images": [
  null,
  "Obrazy"
 ],
 "Images and running containers": [
  null,
  "Obrazy a spuštěné kontejnery"
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  "Informace o Docker fondu úložiště nejsou k dispozici."
 ],
 "Invalid port": [
  null,
  "Neplatný port"
 ],
 "Link to another container": [
  null,
  "Propojení s jiným kontejnerem"
 ],
 "Links": [
  null,
  "Linky"
 ],
 "Links:": [
  null,
  "Linky:"
 ],
 "Local Disks": [
  null,
  "Místní disky"
 ],
 "MAC Address:": [
  null,
  "MAC adresa"
 ],
 "Memory": [
  null,
  "Paměť"
 ],
 "Memory limit": [
  null,
  "Limit paměti"
 ],
 "Memory usage:": [
  null,
  "Využití paměti:"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Mount container volumes": [
  null,
  "Připojit svazky kontejneru"
 ],
 "Name": [
  null,
  "Název"
 ],
 "No": [
  null,
  "Ne"
 ],
 "No additional local storage found.": [
  null,
  "Nenalezeno žádné další místní úložiště."
 ],
 "No alias specified": [
  null,
  "Není zadán žádný alternativní název"
 ],
 "No container specified": [
  null,
  "Není určený žádný kontejner"
 ],
 "No containers": [
  null,
  "Žádné kontejnery"
 ],
 "No containers that match the current filter": [
  null,
  "Žádné kontejnery, které by odpovídaly stávajícímu filtru"
 ],
 "No images": [
  null,
  "Žádné obrazy"
 ],
 "No images that match the current filter": [
  null,
  "Stávajícímu filtru neodpovídají žádné obrazy"
 ],
 "No results for $0": [
  null,
  "Žádné výsledky pro $0"
 ],
 "No running containers": [
  null,
  "Žádné spuštěné kontejnery"
 ],
 "No running containers that match the current filter": [
  null,
  "Žádné spuštěné kontejnery, které by odpovídaly stávajícímu filtru"
 ],
 "Not authorized to access Docker on this system": [
  null,
  "Neoprávněni k přístupu k Dockeru na tomto systému"
 ],
 "Not found": [
  null,
  "Nenalezeno"
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
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "V případě nezdaru, zkusit znovu $0 krát",
  "V případě nezdaru, zkusit znovu $0 krát",
  "V případě nezdaru, zkusit znovu $0 krát"
 ],
 "Overview": [
  null,
  "Přehled"
 ],
 "Please confirm deletion of $0": [
  null,
  "Potvrďte smazání $0"
 ],
 "Please confirm forced deletion of $0": [
  null,
  "Potvrďte vynucené smazání $0"
 ],
 "Please try another term": [
  null,
  "Zkuste jiný pojem"
 ],
 "Ports": [
  null,
  "Porty"
 ],
 "Ports:": [
  null,
  "Porty:"
 ],
 "Problems": [
  null,
  "Problémy"
 ],
 "ReadOnly": [
  null,
  "Pouze pro čtení"
 ],
 "ReadWrite": [
  null,
  "Čtení i zápis"
 ],
 "Reboot": [
  null,
  "Restartovat"
 ],
 "Reformat and add disks": [
  null,
  "Znovu naformátovat a přidat disky"
 ],
 "Repository": [
  null,
  "Repozitář"
 ],
 "Reset": [
  null,
  "Reset"
 ],
 "Reset Storage Pool": [
  null,
  "Resetovat fond úložišť"
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  "Resetování fondu úložiště vymaže všechny kontejnery a uvolní disky ve fondu"
 ],
 "Restart": [
  null,
  "Restartovat"
 ],
 "Restart Policy": [
  null,
  "Zásada restartu"
 ],
 "Restart Policy:": [
  null,
  "Zásada restartu:"
 ],
 "Retries:": [
  null,
  "Opětovných pokusů:"
 ],
 "Run": [
  null,
  "Spustit"
 ],
 "Run Image": [
  null,
  "Spustit obraz"
 ],
 "Security": [
  null,
  "Zabezpečení"
 ],
 "Set container environment variables": [
  null,
  "Nastavit proměnné prostředí pro kontejner"
 ],
 "Show all containers": [
  null,
  "Zobrazit všechny kontejnery"
 ],
 "Show all images": [
  null,
  "Zobrazit všechny obrazy"
 ],
 "Size": [
  null,
  "Velikost"
 ],
 "Solid-State Disk": [
  null,
  "Jednotka bez pohyblivých částí"
 ],
 "Start": [
  null,
  "Spustit"
 ],
 "Start Docker": [
  null,
  "Spustit Docker"
 ],
 "State": [
  null,
  "Stav"
 ],
 "State:": [
  null,
  "Stav:"
 ],
 "Stop": [
  null,
  "Zastavit"
 ],
 "Stop and delete": [
  null,
  "Zastavit a smazat"
 ],
 "Stopped": [
  null,
  "Zastaveno"
 ],
 "Storage": [
  null,
  "Úložiště"
 ],
 "Storage pool": [
  null,
  "Fond úložiště"
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Tag": [
  null,
  "Štítek"
 ],
 "Tags": [
  null,
  "Šítky"
 ],
 "The Docker storage pool cannot be managed on this system.": [
  null,
  "Docker fond úložiště není na tomto systému možné spravovat."
 ],
 "The following containers depend on this image and will become unusable.": [
  null,
  "Následující kontejnery závisí na tomto obrazu a přestanou být použitelné."
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  "Sken z $time ($type) nenalezl žádné zranitelnosti."
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  "Sken z $time ($type) nebyl úspěšný."
 ],
 "This image does not exist.": [
  null,
  "Tento obraz neexistuje."
 ],
 "Total": [
  null,
  "Celkem"
 ],
 "Try again": [
  null,
  "Zkusit znovu"
 ],
 "Type to filter…": [
  null,
  "Filtrujte psaním…"
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Neočekávaná chyba"
 ],
 "Unless Stopped": [
  null,
  "Pokud nezastaveno"
 ],
 "Up since $0": [
  null,
  "Zapnuto od $0"
 ],
 "Used": [
  null,
  "Využito"
 ],
 "Used by Containers": [
  null,
  "Využito kontejnery"
 ],
 "Volumes": [
  null,
  "Svazky"
 ],
 "Volumes:": [
  null,
  "Svazky:"
 ],
 "With terminal": [
  null,
  "S terminálem"
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  "Nemáte oprávnění spravovat fond úložiště pro Docker."
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
 "alias": [
  null,
  "alternativní název"
 ],
 "default": [
  null,
  "výchozí"
 ],
 "key": [
  null,
  "klíč"
 ],
 "none": [
  null,
  "nic"
 ],
 "search by name, namespace or description": [
  null,
  "hledat podle názvu, jmenného prostoru nebo popisu"
 ],
 "select container": [
  null,
  "vybrat kontejner"
 ],
 "shares": [
  null,
  "sdílení"
 ],
 "to host path": [
  null,
  "do umístění stroje"
 ],
 "to host port": [
  null,
  "na port stroje"
 ],
 "undefined": [
  null,
  "nedefinované"
 ],
 "value": [
  null,
  "hodnota"
 ],
 "page-title\u0004Containers": [
  null,
  "Kontejnery"
 ],
 "page-title\u0004Images": [
  null,
  "Obrazy"
 ]
}));
