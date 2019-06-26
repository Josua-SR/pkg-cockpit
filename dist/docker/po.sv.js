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
 "Mini PC": [
  null,
  "Mini-PC"
 ],
 "Mini Tower": [
  null,
  "Minitorn"
 ],
 "Mount container volumes": [
  null,
  "Montera behållarvolymer"
 ],
 "Multi-system Chassis": [
  null,
  "Multisystemschassi"
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
 "Notebook": [
  null,
  "Bärbar (notebook)"
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
 "Other": [
  null,
  "Annan"
 ],
 "Overview": [
  null,
  "Översikt"
 ],
 "Peripheral Chassis": [
  null,
  "Periferichassi"
 ],
 "Pizza Box": [
  null,
  "Pizzalåda"
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
 "Portable": [
  null,
  "Bärbar"
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
 "RAID Chassis": [
  null,
  "RAID-chassi"
 ],
 "Rack Mount Chassis": [
  null,
  "Rackmonteringschassi"
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
 "Sealed-case PC": [
  null,
  "PC med slutet hölje"
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
 "Space-saving Computer": [
  null,
  "Utrymmessparande dator"
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
 "Stick PC": [
  null,
  "Pinndator"
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
 "Sub Chassis": [
  null,
  "Underchassi"
 ],
 "Sub Notebook": [
  null,
  "ULPC"
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Tablet": [
  null,
  "Platta"
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
 "Tower": [
  null,
  "Torn"
 ],
 "Try again": [
  null,
  "Försök igen"
 ],
 "Type to filter…": [
  null,
  "Skriv för att filtrera …"
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Oväntat fel"
 ],
 "Unknown": [
  null,
  "Okänd"
 ],
 "Unless Stopped": [
  null,
  "Om inte stoppad"
 ],
 "Up since $0": [
  null,
  "Uppe sedan $0"
 ],
 "Used": [
  null,
  "Använt"
 ],
 "Used by Containers": [
  null,
  "Används av behållare"
 ],
 "Volumes": [
  null,
  "Volymer"
 ],
 "Volumes:": [
  null,
  "Volymer:"
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
  "[inga data]"
 ],
 "alias": [
  null,
  "alias"
 ],
 "default": [
  null,
  "standard"
 ],
 "key": [
  null,
  "nyckel"
 ],
 "none": [
  null,
  "ingen"
 ],
 "search by name, namespace or description": [
  null,
  "leta efter namn, namnrymd eller beskrivning"
 ],
 "select container": [
  null,
  "välj behållare"
 ],
 "shares": [
  null,
  "utdelningar"
 ],
 "to host path": [
  null,
  "till värdsökväg"
 ],
 "to host port": [
  null,
  "till värdport"
 ],
 "undefined": [
  null,
  "odefinierad"
 ],
 "value": [
  null,
  "värde"
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
