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
  "language": "fi",
  "x-generator": "Zanata 4.6.2"
 },
 " (shared with the OS)": [
  null,
  " (jaettu OS:n kanssa)"
 ],
 "$0 shares": [
  null,
  "$0 jaot"
 ],
 "${hip}:${hport} -> $cport": [
  null,
  "${hip}:${hport} -> $cport"
 ],
 "Add Additional Storage": [
  null,
  "Lisää uusi tallennustila"
 ],
 "Add Storage": [
  null,
  "Lisää tallennustila"
 ],
 "Additional Storage": [
  null,
  "Uusi tallennustila"
 ],
 "Advanced TCA": [
  null,
  ""
 ],
 "All In One": [
  null,
  ""
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "Kaikki valituilla levyillä oleva data poistetaan ja levyt lisätään tallennuspooliin."
 ],
 "Always": [
  null,
  "Aina"
 ],
 "Author": [
  null,
  "Tekijä"
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
 "CPU priority": [
  null,
  "Prosessorin prioriteetti"
 ],
 "CPU usage:": [
  null,
  "Prosessorin käyttö"
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  "Ei voitu yhdistää Dockeriin"
 ],
 "Cancel": [
  null,
  "Peru"
 ],
 "Change": [
  null,
  "Vaihda"
 ],
 "Change resource limits": [
  null,
  "Muuta resurssin rajoja"
 ],
 "Change resources limits": [
  null,
  "Muuta resurssien rajoja"
 ],
 "Close": [
  null,
  "Sulje"
 ],
 "Combined memory usage": [
  null,
  "Yhdistetty muistin käyttö"
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  "Yhdistetty $0 CPU-ytimen käyttö",
  "Yhdistetty $0 CPU-ydinten käyttö"
 ],
 "Command": [
  null,
  "Komento"
 ],
 "Command can't be empty": [
  null,
  "Komento ei voi olla tyhjä"
 ],
 "Command:": [
  null,
  "Komento:"
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
  "Aseta tallennustila..."
 ],
 "Connecting to Docker": [
  null,
  "Yhdistetään Dockeriin"
 ],
 "Container": [
  null,
  "Kontti"
 ],
 "Container Name": [
  null,
  "Kontin nimi"
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  "Kontti on merkitty ei käynnissä olevaksi, mutta tavallinen pysäyttäminen epäonnistui."
 ],
 "Container is currently running.": [
  null,
  "Kontti on parhaillaan käynnissä."
 ],
 "Container:": [
  null,
  "Kontti:"
 ],
 "Containers": [
  null,
  "Kontit"
 ],
 "Convertible": [
  null,
  ""
 ],
 "Could not add all disks": [
  null,
  "Ei voitu lisätä kaikkia levyjä"
 ],
 "Could not reset the storage pool": [
  null,
  "Ei voitu resetoida tallennusvarantoa"
 ],
 "Created": [
  null,
  "Luotu"
 ],
 "Created:": [
  null,
  "Luotu:"
 ],
 "Default": [
  null,
  "Oletus"
 ],
 "Delete": [
  null,
  "Poista"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "Kontin poistaminen tuhoaa kaiken sillä olevan datan."
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
 "Docker is not installed or activated on the system": [
  null,
  "Docker ei ole asennettu tai aktiivisena järjestelmässä"
 ],
 "Docking Station": [
  null,
  ""
 ],
 "Download": [
  null,
  "Lataa"
 ],
 "Drive": [
  null,
  "Levy"
 ],
 "Duplicate alias": [
  null,
  "Aliaksen duplikaatti"
 ],
 "Duplicate port": [
  null,
  "Portin duplikaatti"
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
  "Ympäristö"
 ],
 "Erase containers and reset storage pool": [
  null,
  "Tyhjennä kontit ja resetoi tallennusvaranto"
 ],
 "Error message from Docker:": [
  null,
  "Virheviesti Dockerilta:"
 ],
 "Everything": [
  null,
  "Kaikki"
 ],
 "Exited $ExitCode": [
  null,
  "Poistui $ExitCode"
 ],
 "Expansion Chassis": [
  null,
  ""
 ],
 "Expose container ports": [
  null,
  "Paljasta kontin portit"
 ],
 "Failed to start Docker: $0": [
  null,
  "Ei voitu käynnistää Dockeria: $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  "Ei voitu pysäyttää Dockerin scopea: $0"
 ],
 "Force Delete": [
  null,
  "Pakota poisto"
 ],
 "Free": [
  null,
  "Vapaa"
 ],
 "Gateway:": [
  null,
  "Yhdyskäytävä:"
 ],
 "Get new image": [
  null,
  "Hae uusi levykuva"
 ],
 "Hand Held": [
  null,
  ""
 ],
 "Hard Disk": [
  null,
  "Kiintolevy"
 ],
 "IP Address:": [
  null,
  "IP-osoitteet:"
 ],
 "IP Prefix Length:": [
  null,
  "IP Prefix Pituus:"
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
  "Levykuva"
 ],
 "Image $0": [
  null,
  "Levykuva $0"
 ],
 "Image Search": [
  null,
  "Levykuvan haku"
 ],
 "Image:": [
  null,
  "Levykuva:"
 ],
 "Images": [
  null,
  "Levykuvat"
 ],
 "Images and running containers": [
  null,
  "Levykuvat ja käynnissä olevat kontit"
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  "Tieto Dockering tallentovarannosta ei ole saatavilla."
 ],
 "Invalid port": [
  null,
  "Virheellinen portti"
 ],
 "IoT Gateway": [
  null,
  ""
 ],
 "Laptop": [
  null,
  "Kannettava"
 ],
 "Link to another container": [
  null,
  "Yhdistä toiseen konttiin"
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
  "Paikalliset levyt"
 ],
 "Low Profile Desktop": [
  null,
  "Matalan tason työpöytä"
 ],
 "Lunch Box": [
  null,
  ""
 ],
 "MAC Address:": [
  null,
  "MAC-osoite:"
 ],
 "Main Server Chassis": [
  null,
  ""
 ],
 "Memory": [
  null,
  "Muisti"
 ],
 "Memory limit": [
  null,
  "Muistiraja"
 ],
 "Memory usage:": [
  null,
  "Muistin käyttö:"
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
  "Liitä konttitaltiot"
 ],
 "Multi-system Chassis": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nimi"
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
  "Ei kontteja"
 ],
 "No containers that match the current filter": [
  null,
  "Ei nykyistä suodatusta vastaavia kontteja"
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
  "Ei käynnissä olevia kontteja"
 ],
 "No running containers that match the current filter": [
  null,
  "Ei suodatusta vastaavia käynnissä olevia kontteja"
 ],
 "Not authorized to access Docker on this system": [
  null,
  ""
 ],
 "Not found": [
  null,
  "Ei löytynyt"
 ],
 "Notebook": [
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
  "Vahvista kohteen $0 poistaminen"
 ],
 "Please confirm forced deletion of $0": [
  null,
  "Vahvista kohteen $0 pakotettu poistaminen"
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
  "Portit"
 ],
 "Ports:": [
  null,
  "Portit:"
 ],
 "Problems": [
  null,
  "Ongelmat"
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
  "Käynnistä uudelleen"
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
  "Käynnistä uudelleen"
 ],
 "Restart Policy": [
  null,
  "Uudelleenkäynnistyksen käytäntö"
 ],
 "Restart Policy:": [
  null,
  "Uudelleenkäynnistyksen käytäntö:"
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
  "Aseta kontin ympäristömuuttujat"
 ],
 "Show all containers": [
  null,
  "Näytä kaikki kontit"
 ],
 "Show all images": [
  null,
  ""
 ],
 "Size": [
  null,
  "Koko"
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
  "Käynnistä"
 ],
 "Start Docker": [
  null,
  "Käynnistä Docker"
 ],
 "State": [
  null,
  "Tila"
 ],
 "State:": [
  null,
  "Tila:"
 ],
 "Stick PC": [
  null,
  "Tikku-PC"
 ],
 "Stop": [
  null,
  "Pysäytä"
 ],
 "Stop and delete": [
  null,
  ""
 ],
 "Stopped": [
  null,
  "Pysäytetty"
 ],
 "Storage": [
  null,
  "Tallennustila"
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
  "TCP"
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
  "Tätä kuvaa ei ole olemassa."
 ],
 "Total": [
  null,
  "Yhteensä"
 ],
 "Tower": [
  null,
  "Torni"
 ],
 "Try again": [
  null,
  "Yritä uudelleen"
 ],
 "Type to filter…": [
  null,
  "Kirjoita suodattaaksesi..."
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Odottamaton virhe"
 ],
 "Unknown": [
  null,
  "Tuntematon"
 ],
 "Unless Stopped": [
  null,
  "Ellei pysäytetty"
 ],
 "Up since $0": [
  null,
  ""
 ],
 "Used": [
  null,
  "Käytetty"
 ],
 "Used by Containers": [
  null,
  ""
 ],
 "Volumes": [
  null,
  "Taltiot"
 ],
 "Volumes:": [
  null,
  ""
 ],
 "With terminal": [
  null,
  "Terminaalilla"
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  "Sinulla ei ole oikeutta hallita Dockerin tallennusvarantoa."
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
 "alias": [
  null,
  "alias"
 ],
 "default": [
  null,
  "Oletus"
 ],
 "key": [
  null,
  "avain"
 ],
 "none": [
  null,
  "Ei mitään"
 ],
 "search by name, namespace or description": [
  null,
  "etsi nimellä, nimiavaruudella tai kuvauksella"
 ],
 "select container": [
  null,
  "valitse kontti"
 ],
 "shares": [
  null,
  "jaot"
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
  "määrittämätön"
 ],
 "value": [
  null,
  "Arvo"
 ],
 "page-title\u0004Containers": [
  null,
  "Kontit"
 ],
 "page-title\u0004Images": [
  null,
  "Levykuvat"
 ]
}));
