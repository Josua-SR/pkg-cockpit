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
  "x-generator": "Zanata 4.6.0"
 },
 " (shared with the OS)": [
  null,
  "(sdíleno s OS)"
 ],
 "$0 day": [
  "$0 days",
  "$0 den",
  "$0 dny",
  "$0 dnů"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 hodina",
  "$0 hodiny",
  "$0 hodin"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minuta",
  "$0 minuty",
  "$0 minut"
 ],
 "$0 month": [
  "$0 months",
  "$0 měsíc",
  "$0 měsíce",
  "$0 měsíců"
 ],
 "$0 shares": [
  null,
  "$0 sdílení"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 týden",
  "$0 týdny",
  "$0 týdnů"
 ],
 "$0 year": [
  "$0 years",
  "$0 rok",
  "$0 roky",
  "$0 roků"
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
  "Dodatečné úložiště"
 ],
 "Advanced TCA": [
  null,
  "Pokročilé TCA"
 ],
 "All In One": [
  null,
  "Vše v jednom"
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "Všechna data na vybraných discích budou vymazána a disky budou přidány do fondu úložišť."
 ],
 "Always": [
  null,
  "Vždy"
 ],
 "Author": [
  null,
  "Autor"
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
  "CPU"
 ],
 "CPU priority": [
  null,
  "Priorita CPU"
 ],
 "CPU usage:": [
  null,
  "Využití CPU:"
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  "Nelze se spojit s Docker"
 ],
 "Cancel": [
  null,
  "Zrušit"
 ],
 "Change": [
  null,
  "Změna"
 ],
 "Change resource limits": [
  null,
  "Změnit limity zdroje"
 ],
 "Change resources limits": [
  null,
  "Změnit limity zdrojů"
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
  "",
  "",
  ""
 ],
 "Command": [
  null,
  "Příkaz"
 ],
 "Command can't be empty": [
  null,
  "Příkaz nesmí být prázdný"
 ],
 "Command:": [
  null,
  "Příkaz:"
 ],
 "Commit": [
  null,
  ""
 ],
 "Commit Image": [
  null,
  ""
 ],
 "Compact PCI": [
  null,
  ""
 ],
 "Configure storage...": [
  null,
  "Konfigurace úložiště..."
 ],
 "Connecting to Docker": [
  null,
  ""
 ],
 "Container": [
  null,
  ""
 ],
 "Container Name": [
  null,
  ""
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  ""
 ],
 "Container is currently running.": [
  null,
  ""
 ],
 "Container:": [
  null,
  ""
 ],
 "Containers": [
  null,
  "Kontejnery"
 ],
 "Convertible": [
  null,
  "Konvertibilní"
 ],
 "Could not add all disks": [
  null,
  "Nelze přidat všechny disky"
 ],
 "Could not reset the storage pool": [
  null,
  "Nelze obnovit úložný prostor"
 ],
 "Created": [
  null,
  ""
 ],
 "Created:": [
  null,
  ""
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
  ""
 ],
 "Desktop": [
  null,
  "Desktop"
 ],
 "Detachable": [
  null,
  ""
 ],
 "Details": [
  null,
  "Podrobnosti"
 ],
 "Docker is not installed or activated on the system": [
  null,
  ""
 ],
 "Docking Station": [
  null,
  ""
 ],
 "Download": [
  null,
  "Stáhnout"
 ],
 "Drive": [
  null,
  "Mechanika"
 ],
 "Duplicate alias": [
  null,
  ""
 ],
 "Duplicate port": [
  null,
  ""
 ],
 "Embedded PC": [
  null,
  ""
 ],
 "Entrypoint": [
  null,
  ""
 ],
 "Environment": [
  null,
  ""
 ],
 "Erase containers and reset storage pool": [
  null,
  ""
 ],
 "Error message from Docker:": [
  null,
  ""
 ],
 "Everything": [
  null,
  "Vše"
 ],
 "Exited $ExitCode": [
  null,
  ""
 ],
 "Expansion Chassis": [
  null,
  ""
 ],
 "Expose container ports": [
  null,
  ""
 ],
 "Failed to start Docker: $0": [
  null,
  ""
 ],
 "Failed to stop Docker scope: $0": [
  null,
  ""
 ],
 "Force Delete": [
  null,
  ""
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
  ""
 ],
 "Hand Held": [
  null,
  ""
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
  ""
 ],
 "Id": [
  null,
  "Id"
 ],
 "Id:": [
  null,
  "Id:"
 ],
 "Image": [
  null,
  ""
 ],
 "Image $0": [
  null,
  ""
 ],
 "Image Search": [
  null,
  ""
 ],
 "Image:": [
  null,
  ""
 ],
 "Images": [
  null,
  ""
 ],
 "Images and running containers": [
  null,
  ""
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  ""
 ],
 "Invalid port": [
  null,
  ""
 ],
 "IoT Gateway": [
  null,
  ""
 ],
 "Laptop": [
  null,
  ""
 ],
 "Link to another container": [
  null,
  ""
 ],
 "Links": [
  null,
  ""
 ],
 "Links:": [
  null,
  ""
 ],
 "Local Disks": [
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
 "MAC Address:": [
  null,
  ""
 ],
 "Main Server Chassis": [
  null,
  ""
 ],
 "Memory": [
  null,
  "Paměť"
 ],
 "Memory limit": [
  null,
  ""
 ],
 "Memory usage:": [
  null,
  ""
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Mini PC": [
  null,
  ""
 ],
 "Mini Tower": [
  null,
  ""
 ],
 "Mount container volumes": [
  null,
  ""
 ],
 "Multi-system Chassis": [
  null,
  ""
 ],
 "Name": [
  null,
  "Název"
 ],
 "No": [
  null,
  ""
 ],
 "No additional local storage found.": [
  null,
  ""
 ],
 "No alias specified": [
  null,
  ""
 ],
 "No container specified": [
  null,
  ""
 ],
 "No containers": [
  null,
  ""
 ],
 "No containers that match the current filter": [
  null,
  ""
 ],
 "No images": [
  null,
  ""
 ],
 "No images that match the current filter": [
  null,
  ""
 ],
 "No results for $0": [
  null,
  ""
 ],
 "No running containers": [
  null,
  ""
 ],
 "No running containers that match the current filter": [
  null,
  ""
 ],
 "Not authorized to access Docker on this system": [
  null,
  ""
 ],
 "Not found": [
  null,
  "Nenalezeno"
 ],
 "Notebook": [
  null,
  ""
 ],
 "Off": [
  null,
  ""
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  ""
 ],
 "On Failure": [
  null,
  ""
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "",
  "",
  ""
 ],
 "Other": [
  null,
  ""
 ],
 "Overview": [
  null,
  "Přehled"
 ],
 "Peripheral Chassis": [
  null,
  ""
 ],
 "Pizza Box": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  ""
 ],
 "Please confirm forced deletion of $0": [
  null,
  ""
 ],
 "Please try another term": [
  null,
  ""
 ],
 "Portable": [
  null,
  "Přenosný"
 ],
 "Ports": [
  null,
  "Porty"
 ],
 "Ports:": [
  null,
  ""
 ],
 "Problems": [
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
 "ReadOnly": [
  null,
  ""
 ],
 "ReadWrite": [
  null,
  ""
 ],
 "Reboot": [
  null,
  "Restartovat"
 ],
 "Reformat and add disks": [
  null,
  ""
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
  ""
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  ""
 ],
 "Restart": [
  null,
  "Restartovat"
 ],
 "Restart Policy": [
  null,
  ""
 ],
 "Restart Policy:": [
  null,
  ""
 ],
 "Retries:": [
  null,
  ""
 ],
 "Run": [
  null,
  "Spustit"
 ],
 "Run Image": [
  null,
  ""
 ],
 "Sealed-case PC": [
  null,
  ""
 ],
 "Security": [
  null,
  "Bezpečnost"
 ],
 "Set container environment variables": [
  null,
  ""
 ],
 "Show all containers": [
  null,
  ""
 ],
 "Show all images": [
  null,
  ""
 ],
 "Size": [
  null,
  "Velikost"
 ],
 "Solid-State Disk": [
  null,
  ""
 ],
 "Space-saving Computer": [
  null,
  ""
 ],
 "Start": [
  null,
  "Start"
 ],
 "Start Docker": [
  null,
  ""
 ],
 "State": [
  null,
  "Stav"
 ],
 "State:": [
  null,
  "Stav:"
 ],
 "Stick PC": [
  null,
  ""
 ],
 "Stop": [
  null,
  "Zastavit"
 ],
 "Stop and delete": [
  null,
  ""
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
 "TCP": [
  null,
  ""
 ],
 "Tablet": [
  null,
  "Tablet"
 ],
 "Tag": [
  null,
  ""
 ],
 "Tags": [
  null,
  "Tagy"
 ],
 "The Docker storage pool cannot be managed on this system.": [
  null,
  ""
 ],
 "The following containers depend on this image and will become unusable.": [
  null,
  ""
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  ""
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  ""
 ],
 "This image does not exist.": [
  null,
  ""
 ],
 "Total": [
  null,
  "Celkový"
 ],
 "Tower": [
  null,
  ""
 ],
 "Try again": [
  null,
  ""
 ],
 "Type to filter…": [
  null,
  ""
 ],
 "UDP": [
  null,
  ""
 ],
 "Unexpected error": [
  null,
  ""
 ],
 "Unknown": [
  null,
  "Neznámý"
 ],
 "Unless Stopped": [
  null,
  ""
 ],
 "Up since $0": [
  null,
  ""
 ],
 "Used": [
  null,
  ""
 ],
 "Used by Containers": [
  null,
  ""
 ],
 "Volumes": [
  null,
  ""
 ],
 "Volumes:": [
  null,
  ""
 ],
 "With terminal": [
  null,
  ""
 ],
 "You don't have permission to manage the Docker storage pool.": [
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
 ],
 "alias": [
  null,
  ""
 ],
 "default": [
  null,
  "výchozí"
 ],
 "key": [
  null,
  ""
 ],
 "none": [
  null,
  "nic"
 ],
 "search by name, namespace or description": [
  null,
  ""
 ],
 "select container": [
  null,
  ""
 ],
 "shares": [
  null,
  ""
 ],
 "to host path": [
  null,
  ""
 ],
 "to host port": [
  null,
  ""
 ],
 "undefined": [
  null,
  ""
 ],
 "value": [
  null,
  ""
 ],
 "page-title\u0004Containers": [
  null,
  "Kontejnery"
 ],
 "page-title\u0004Images": [
  null,
  ""
 ]
}));
