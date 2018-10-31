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
  "language": "sv",
  "x-generator": "Zanata 4.6.2"
 },
 " (shared with the OS)": [
  null,
  "(delat med OS:et)"
 ],
 "$0 shares": [
  null,
  "$0 utdelningar"
 ],
 "${hip}:${hport} -> $cport": [
  null,
  "${hip}:${hport} → $cport"
 ],
 "Add Additional Storage": [
  null,
  "Lägg till ytterligare lagring"
 ],
 "Add Storage": [
  null,
  "Lägg till lagring"
 ],
 "Additional Storage": [
  null,
  "Ytterligare lagring"
 ],
 "Advanced TCA": [
  null,
  "Avanserad TCA"
 ],
 "All In One": [
  null,
  "Allt-i-ett"
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "Alla data på valda diskar kommer raderas och diskarna kommer läggas till i lagringspoolen."
 ],
 "Always": [
  null,
  "Alltid"
 ],
 "Author": [
  null,
  "Upphovsman"
 ],
 "Blade": [
  null,
  "Blad"
 ],
 "Blade enclosure": [
  null,
  "Bladhölje"
 ],
 "Bus Expansion Chassis": [
  null,
  "Bussexpansionschassi"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU priority": [
  null,
  "CPU-prioritet"
 ],
 "CPU usage:": [
  null,
  "CPU-användning:"
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  "Kan inte ansluta till Docker"
 ],
 "Cancel": [
  null,
  "Avbryt"
 ],
 "Change": [
  null,
  "Ändra"
 ],
 "Change resource limits": [
  null,
  "Ändra resursgränser"
 ],
 "Change resources limits": [
  null,
  "Ändra resursgränser"
 ],
 "Close": [
  null,
  "Stäng"
 ],
 "Combined memory usage": [
  null,
  "Kombinerad minnesanvändning"
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  "Kombinerad användning av $0 CPU-kärna",
  "Kombinerad användning av $0 CPU-kärnor"
 ],
 "Command": [
  null,
  "Kommando"
 ],
 "Command can't be empty": [
  null,
  "Kommandot får inte vara tomt"
 ],
 "Command:": [
  null,
  "Kommando:"
 ],
 "Commit": [
  null,
  "Fastställ"
 ],
 "Commit Image": [
  null,
  "Fastställ avbild"
 ],
 "Compact PCI": [
  null,
  "Kompakt PCI"
 ],
 "Configure storage...": [
  null,
  "Konfigurera lagring …"
 ],
 "Connecting to Docker": [
  null,
  "Ansluter till Docker"
 ],
 "Container": [
  null,
  "Behållare"
 ],
 "Container Name": [
  null,
  "Behållarnamn"
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  "Behållaren är för närvarande markerad som inte körande, men normalt stoppande har misslyckats."
 ],
 "Container is currently running.": [
  null,
  "Behållaren kör för närvarande."
 ],
 "Container:": [
  null,
  "Behållare:"
 ],
 "Containers": [
  null,
  "Behållare"
 ],
 "Convertible": [
  null,
  "Konvertibel"
 ],
 "Could not add all disks": [
  null,
  "Kunde inte lägga till alla diskar"
 ],
 "Could not reset the storage pool": [
  null,
  "Kunde inte återställa lagringspoolen"
 ],
 "Created": [
  null,
  "Skapad"
 ],
 "Created:": [
  null,
  "Skapad:"
 ],
 "Default": [
  null,
  "Standard"
 ],
 "Delete": [
  null,
  "Ta bort"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "Att ta bort en behållare kommer att radera all data i den."
 ],
 "Desktop": [
  null,
  "Skrivbord"
 ],
 "Detachable": [
  null,
  "Frånkopplingsbar"
 ],
 "Details": [
  null,
  "Detaljer"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Docker är inte installerat eller aktiverat på systemet"
 ],
 "Docking Station": [
  null,
  "Dockningsstation"
 ],
 "Download": [
  null,
  "Hämta"
 ],
 "Drive": [
  null,
  "Enhet"
 ],
 "Duplicate alias": [
  null,
  "Dubblerat alias"
 ],
 "Duplicate port": [
  null,
  "Dubblerad port"
 ],
 "Embedded PC": [
  null,
  "Inbäddad PC"
 ],
 "Entrypoint": [
  null,
  "Ingångspunkt"
 ],
 "Environment": [
  null,
  "Miljö"
 ],
 "Erase containers and reset storage pool": [
  null,
  "Radera behållare och återställ lagringspoolen"
 ],
 "Error message from Docker:": [
  null,
  "Felmeddelande från Docker:"
 ],
 "Everything": [
  null,
  "Allting"
 ],
 "Exited $ExitCode": [
  null,
  "Avslutade $ExitCode"
 ],
 "Expansion Chassis": [
  null,
  "Expansionschassin"
 ],
 "Expose container ports": [
  null,
  "Exponerade behållarportar"
 ],
 "Failed to start Docker: $0": [
  null,
  "Misslyckades att stara Docker: $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  "Misslyckades att stoppa Docker-scope: $0"
 ],
 "Force Delete": [
  null,
  "Framtvinga borttagande"
 ],
 "Free": [
  null,
  "Ledigt"
 ],
 "Gateway:": [
  null,
  "Gateway:"
 ],
 "Get new image": [
  null,
  "Hämta ny avbild"
 ],
 "Hand Held": [
  null,
  "Handhållen"
 ],
 "Hard Disk": [
  null,
  "Hårddisk"
 ],
 "IP Address:": [
  null,
  "IP-adress:"
 ],
 "IP Prefix Length:": [
  null,
  "IP-prefixlängd:"
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
  "Avbild"
 ],
 "Image $0": [
  null,
  "Avbild $0"
 ],
 "Image Search": [
  null,
  "Avbildssökning"
 ],
 "Image:": [
  null,
  "Avbild:"
 ],
 "Images": [
  null,
  "Avbilder"
 ],
 "Images and running containers": [
  null,
  "Avbilder och körande behållare"
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  "Information om Dockers lagringspool är inte tillgängligt."
 ],
 "Invalid port": [
  null,
  "Felaktig port"
 ],
 "IoT Gateway": [
  null,
  "IoT-gateway"
 ],
 "Laptop": [
  null,
  "Bärbar dator"
 ],
 "Link to another container": [
  null,
  "Länka till en annan behållare"
 ],
 "Links": [
  null,
  "Länkar"
 ],
 "Links:": [
  null,
  "Länkar:"
 ],
 "Local Disks": [
  null,
  "Lokala diskar"
 ],
 "Low Profile Desktop": [
  null,
  "Lågprofilskrivbord"
 ],
 "Lunch Box": [
  null,
  "Lunchlåda"
 ],
 "MAC Address:": [
  null,
  "MAC-adress:"
 ],
 "Main Server Chassis": [
  null,
  "Huvudserverchassi"
 ],
 "Memory": [
  null,
  ""
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
  ""
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
 "Ok": [
  null,
  ""
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
  ""
 ],
 "Other": [
  null,
  ""
 ],
 "Overview": [
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
  ""
 ],
 "Ports": [
  null,
  ""
 ],
 "Ports:": [
  null,
  ""
 ],
 "Problems": [
  null,
  "Problem"
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
  ""
 ],
 "Reformat and add disks": [
  null,
  ""
 ],
 "Repository": [
  null,
  ""
 ],
 "Reset": [
  null,
  ""
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
  ""
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
  ""
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
  ""
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
  ""
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
  ""
 ],
 "Start Docker": [
  null,
  ""
 ],
 "State": [
  null,
  ""
 ],
 "State:": [
  null,
  ""
 ],
 "Stick PC": [
  null,
  ""
 ],
 "Stop": [
  null,
  ""
 ],
 "Stop and delete": [
  null,
  ""
 ],
 "Stopped": [
  null,
  ""
 ],
 "Storage": [
  null,
  ""
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
  ""
 ],
 "Tag": [
  null,
  ""
 ],
 "Tags": [
  null,
  ""
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
  ""
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
  ""
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
  "Med terminal"
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  "Du har inte rättigheter att hantera lagringspoolen för Docker."
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 byte med binärdata]"
 ],
 "[binary data]": [
  null,
  "[binärdata]"
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
  ""
 ],
 "key": [
  null,
  ""
 ],
 "none": [
  null,
  ""
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
  "Behållare"
 ],
 "page-title\u0004Images": [
  null,
  "Avbilder"
 ]
}));
