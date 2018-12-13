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
 "Details": [
  null,
  "Detaljer"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Docker är inte installerat eller aktiverat på systemet"
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
 "MAC Address:": [
  null,
  "MAC-adress:"
 ],
 "Memory": [
  null,
  "Minne"
 ],
 "Memory limit": [
  null,
  "Minnesgräns"
 ],
 "Memory usage:": [
  null,
  "Minnesanvändning:"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Mount container volumes": [
  null,
  "Montera behållarvolymer"
 ],
 "Name": [
  null,
  "Namn"
 ],
 "No": [
  null,
  "Nej"
 ],
 "No additional local storage found.": [
  null,
  "Ingen ytterligare lokal lagring hittad."
 ],
 "No alias specified": [
  null,
  "Inget alias angivet"
 ],
 "No container specified": [
  null,
  "Ingen behållare angiven"
 ],
 "No containers": [
  null,
  "Inga behållare"
 ],
 "No containers that match the current filter": [
  null,
  "Inga behållare som stämmer med det aktuella filtret"
 ],
 "No images": [
  null,
  "Inga avbilder"
 ],
 "No images that match the current filter": [
  null,
  "Inga avbilder som stämmer med det aktuella filtret"
 ],
 "No results for $0": [
  null,
  "Inga resultat för $0"
 ],
 "No running containers": [
  null,
  "Inga körande behållare"
 ],
 "No running containers that match the current filter": [
  null,
  "Inga körande behållare som stämmer med det aktuella filtret"
 ],
 "Not authorized to access Docker on this system": [
  null,
  "Har inte rättigheter att komma åt Docker på detta system"
 ],
 "Not found": [
  null,
  "Finns inte"
 ],
 "Off": [
  null,
  "Av"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  "På"
 ],
 "On Failure": [
  null,
  "Vid misslyckande"
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "Vid misslyckande, försök igen $0 gång",
  "Vid misslyckande, försök igen $0 gånger"
 ],
 "Overview": [
  null,
  "Översikt"
 ],
 "Please confirm deletion of $0": [
  null,
  "Bekräfta raderingen av $0"
 ],
 "Please confirm forced deletion of $0": [
  null,
  "Bekräfta den tvingande raderingen av $0"
 ],
 "Please try another term": [
  null,
  "Försök med en annan term"
 ],
 "Ports": [
  null,
  "Portar"
 ],
 "Ports:": [
  null,
  "Portar:"
 ],
 "Problems": [
  null,
  "Problem"
 ],
 "ReadOnly": [
  null,
  "LäsEndast"
 ],
 "ReadWrite": [
  null,
  "LäsSkriv"
 ],
 "Reboot": [
  null,
  "Starta om"
 ],
 "Reformat and add disks": [
  null,
  "Omformatera och lägg till diskar"
 ],
 "Repository": [
  null,
  "Förråd"
 ],
 "Reset": [
  null,
  "Återställ"
 ],
 "Reset Storage Pool": [
  null,
  "Återställ lagringspoolen"
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  "Att återställa lagringspoolen kommer radera alla behållare och släppa diskar i poolen."
 ],
 "Restart": [
  null,
  "Starta om"
 ],
 "Restart Policy": [
  null,
  "Omstartspolicy"
 ],
 "Restart Policy:": [
  null,
  "Omstartspolicy:"
 ],
 "Retries:": [
  null,
  "Omförsök:"
 ],
 "Run": [
  null,
  "Kör"
 ],
 "Run Image": [
  null,
  "Kör avbild"
 ],
 "Security": [
  null,
  "Säkerhet"
 ],
 "Set container environment variables": [
  null,
  "Sätt behållarens miljövariabler"
 ],
 "Show all containers": [
  null,
  "Visa alla behållare"
 ],
 "Show all images": [
  null,
  "Visa alla avbilder"
 ],
 "Size": [
  null,
  "Storlek"
 ],
 "Solid-State Disk": [
  null,
  "SSD-minne"
 ],
 "Start": [
  null,
  "Starta"
 ],
 "Start Docker": [
  null,
  "Starta Docker"
 ],
 "State": [
  null,
  "Tillstånd"
 ],
 "State:": [
  null,
  "Tillstånd:"
 ],
 "Stop": [
  null,
  "Stoppa"
 ],
 "Stop and delete": [
  null,
  "Stoppa och radera"
 ],
 "Stopped": [
  null,
  "Stoppad"
 ],
 "Storage": [
  null,
  "Lagring"
 ],
 "Storage pool": [
  null,
  "Lagringspool"
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Tag": [
  null,
  "Tagg"
 ],
 "Tags": [
  null,
  "Taggar"
 ],
 "The Docker storage pool cannot be managed on this system.": [
  null,
  "Dockers lagringspool kan inte hanteras på det här system."
 ],
 "The following containers depend on this image and will become unusable.": [
  null,
  "Följande behållare beror på denna avbild och kommer bli oanvändbara."
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  "Skanningen från $time ($type) hittade inga sårbarheter."
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  "Skanningen från $time ($type) lyckades inte."
 ],
 "This image does not exist.": [
  null,
  "Denna avbild finns inte."
 ],
 "Total": [
  null,
  "Totalt"
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
