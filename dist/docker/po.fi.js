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
  "x-generator": "Zanata 3.9.6"
 },
 " (shared with the OS)": [
  null,
  " (jaettu OS:n kanssa)"
 ],
 "$0 day": [
  "$0 days",
  "$0 päivä",
  "$0 päivää"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 tunti",
  "$0 tuntia"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minuutti",
  "$0 minuuttia"
 ],
 "$0 month": [
  "$0 months",
  "$0 kuukausi",
  "$0 kuukautta"
 ],
 "$0 shares": [
  null,
  "$0 jaot"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 viikko",
  "$0 viikkoa"
 ],
 "$0 year": [
  "$0 years",
  "$0 vuosi",
  "$0 vuotta"
 ],
 "${hip}:${hport} -> $cport": [
  null,
  "${hip}:${hport} -> $cport"
 ],
 "Add Additional Storage": [
  null,
  "Lisää Uusi Tallennustila"
 ],
 "Add Storage": [
  null,
  "Lisää Tallennustila"
 ],
 "Additional Storage": [
  null,
  "Uusi Tallennustila"
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "Kaikki valituilla levyillä oleva data poistetaan ja levyt lisätään tallennuspooliin."
 ],
 "Always": [
  null,
  "Aina"
 ],
 "Are you sure you want to delete this image?": [
  null,
  "Haluatko varmasti poistaa tämän levykuvan?"
 ],
 "Author": [
  null,
  "Tekijä"
 ],
 "CPU": [
  null,
  "Prosessori"
 ],
 "CPU priority": [
  null,
  "CPU Prioriteetti"
 ],
 "CPU usage:": [
  null,
  "CPU:n Käyttö"
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
 "Combined CPU usage": [
  null,
  "Yhdistetty CPU:n käyttö"
 ],
 "Combined memory usage": [
  null,
  "Yhdistetty muistin käyttö"
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
  "Kontin Nimi"
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  "Kontti on ei ole merkitty käynnissä olevaksi, mutta tavallinen pysäyttäminen epäonnistui."
 ],
 "Container is currently running.": [
  null,
  "Kontti on edelleen käynnissä"
 ],
 "Container:": [
  null,
  "Kontti:"
 ],
 "Containers": [
  null,
  "Kontit"
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
 "Delete $0": [
  null,
  "Poista $0"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "Kontin poistaminen tuhoaa kaiken sillä olevan datan."
 ],
 "Deleting an image will delete it, but you can probably download it again if you need it later.  Unless this image has never been pushed to a repository, that is, in which case you probably can't download it again.": [
  null,
  "Levykuvan tuhoaminen poistaa sen, mutta voit luultavasti ladata sen uudelleen jos tarvitset sitä myöhemmin.  Mikäli levykuvaa ei ole koskaan puskettu repositorioon, et voi ladata sitä uudestaan."
 ],
 "Details": [
  null,
  "Yksityiskohdat"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Docker ei ole asennettu tai aktiivisena järjestelmässä"
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
 "Erase containers, reformat disks, and add them": [
  null,
  "Tyhjennä kontit, uudelleenformatoi levyt, ja lisää ne"
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
  "Pakota Poisto"
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
 "Hard Disk": [
  null,
  "Kovalevy"
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
  "Levykuvan Haku"
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
 "MAC Address:": [
  null,
  ""
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
 "Mount container volumes": [
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
 "Overview": [
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
 "Ports": [
  null,
  ""
 ],
 "Ports:": [
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
 "Stop": [
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
 "TCP": [
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
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  ""
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  ""
 ],
 "The storage pool will be reset to optimize its layout.  All containers will be erased.": [
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
 "Unless Stopped": [
  null,
  "Ellei pysäytetty"
 ],
 "Up since $StartedAt": [
  null,
  "Päällä alkaen $StartedAt"
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
  ""
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
