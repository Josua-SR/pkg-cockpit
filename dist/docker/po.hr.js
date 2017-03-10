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
nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
return plural;
},
  "language": "hr",
  "x-generator": "Zanata 3.9.6"
 },
 " (shared with the OS)": [
  null,
  ""
 ],
 "$0 day": [
  "$0 days",
  "",
  "",
  ""
 ],
 "$0 hour": [
  "$0 hours",
  "",
  "",
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  "",
  "",
  ""
 ],
 "$0 month": [
  "$0 months",
  "",
  "",
  ""
 ],
 "$0 shares": [
  null,
  ""
 ],
 "$0 week": [
  "$0 weeks",
  "",
  "",
  ""
 ],
 "$0 year": [
  "$0 years",
  "",
  "",
  ""
 ],
 "${hip}:${hport} -> $cport": [
  null,
  "${hip}:${hport} -> $cport"
 ],
 "Add Additional Storage": [
  null,
  ""
 ],
 "Add Storage": [
  null,
  ""
 ],
 "Additional Storage": [
  null,
  ""
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  ""
 ],
 "Always": [
  null,
  ""
 ],
 "Are you sure you want to delete this image?": [
  null,
  ""
 ],
 "Author": [
  null,
  "Autor"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU priority": [
  null,
  "CPU prioritet"
 ],
 "CPU usage:": [
  null,
  ""
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  "Uspostavljanje veze sa Docker-om nije moguće"
 ],
 "Cancel": [
  null,
  "Odustani"
 ],
 "Change": [
  null,
  ""
 ],
 "Change resource limits": [
  null,
  ""
 ],
 "Change resources limits": [
  null,
  ""
 ],
 "Close": [
  null,
  "Zatvori"
 ],
 "Combined CPU usage": [
  null,
  ""
 ],
 "Combined memory usage": [
  null,
  ""
 ],
 "Command": [
  null,
  "Naredba"
 ],
 "Command can't be empty": [
  null,
  ""
 ],
 "Command:": [
  null,
  ""
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
  ""
 ],
 "Connecting to Docker": [
  null,
  "Povezujem se na Docker"
 ],
 "Container": [
  null,
  "Spremnik"
 ],
 "Container Name": [
  null,
  "Ime spremnika"
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  "Spremnik trenutno nije u pogonu, ali uredno zaustavljanje nije uspjelo."
 ],
 "Container is currently running.": [
  null,
  "Spremnik je pokrenut."
 ],
 "Container:": [
  null,
  ""
 ],
 "Containers": [
  null,
  "Spremnici"
 ],
 "Could not add all disks": [
  null,
  ""
 ],
 "Could not reset the storage pool": [
  null,
  ""
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
  "Zadano"
 ],
 "Delete": [
  null,
  "Izbriši"
 ],
 "Delete $0": [
  null,
  ""
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "Brisanjem svih spremnika ćete izbrisati sve podatke u njima."
 ],
 "Deleting an image will delete it, but you can probably download it again if you need it later.  Unless this image has never been pushed to a repository, that is, in which case you probably can't download it again.": [
  null,
  ""
 ],
 "Details": [
  null,
  ""
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Docker nije instaliran ili pokrenut na sustavu"
 ],
 "Download": [
  null,
  ""
 ],
 "Drive": [
  null,
  ""
 ],
 "Duplicate alias": [
  null,
  ""
 ],
 "Duplicate port": [
  null,
  "Dupliciran port"
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
 "Erase containers, reformat disks, and add them": [
  null,
  ""
 ],
 "Error message from Docker:": [
  null,
  "Poruka greške od Docker-a:"
 ],
 "Everything": [
  null,
  ""
 ],
 "Exited $ExitCode": [
  null,
  ""
 ],
 "Expose container ports": [
  null,
  ""
 ],
 "Failed to start Docker: $0": [
  null,
  "Pokretanje Docker-a neuspjelo: $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  ""
 ],
 "Force Delete": [
  null,
  "Prisilno brisanje"
 ],
 "Free": [
  null,
  ""
 ],
 "Gateway:": [
  null,
  ""
 ],
 "Get new image": [
  null,
  ""
 ],
 "Hard Disk": [
  null,
  ""
 ],
 "IP Address:": [
  null,
  "IP adresa"
 ],
 "IP Prefix Length:": [
  null,
  "Prefiks"
 ],
 "Id": [
  null,
  ""
 ],
 "Id:": [
  null,
  ""
 ],
 "Image": [
  null,
  ""
 ],
 "Image $0": [
  null,
  "Preslika $0"
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
  "Nepravilan port"
 ],
 "Link to another container": [
  null,
  ""
 ],
 "Links": [
  null,
  "Linkovi"
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
  "Adresa"
 ],
 "Memory": [
  null,
  "Memorija"
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
  "Naziv"
 ],
 "No": [
  null,
  "Ne"
 ],
 "No additional local storage found.": [
  null,
  ""
 ],
 "No alias specified": [
  null,
  "Alias nije naveden"
 ],
 "No container specified": [
  null,
  "Nijedan spremnik nije naveden"
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
  "Nemate dopuštenje da pristupite Docker-u na ovom sustavu"
 ],
 "Not found": [
  null,
  "Nije pronađeno"
 ],
 "Off": [
  null,
  "Isključi"
 ],
 "Ok": [
  null,
  ""
 ],
 "On": [
  null,
  "Uključi"
 ],
 "On Failure": [
  null,
  "Neuspjelo"
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "",
  "",
  ""
 ],
 "Overview": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  "Potvrdite brisanje $0"
 ],
 "Please confirm forced deletion of $0": [
  null,
  "Potvrdite prisilno brisanje $0"
 ],
 "Please try another term": [
  null,
  ""
 ],
 "Ports": [
  null,
  "Portovi"
 ],
 "Ports:": [
  null,
  ""
 ],
 "ReadOnly": [
  null,
  "Spreman"
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
  "Repozitorij"
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
  "Veličina"
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
  "Pokreni Docker"
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
  "Zaustavljeno "
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
  "TCP"
 ],
 "Tag": [
  null,
  "Oznaka"
 ],
 "Tags": [
  null,
  ""
 ],
 "The Docker storage pool cannot be managed on this system.": [
  null,
  ""
 ],
 "The storage pool will be reset to optimize its layout.  All containers will be erased.": [
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
 "Try again": [
  null,
  "Pokušaj ponovo"
 ],
 "Type to filter…": [
  null,
  ""
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Neočekivana pogreška"
 ],
 "Unless Stopped": [
  null,
  "Zaustavljeno "
 ],
 "Up since $StartedAt": [
  null,
  "Pokrenut od $StartedAt"
 ],
 "Used": [
  null,
  ""
 ],
 "Used by Containers": [
  null,
  "Spremnici"
 ],
 "Volumes": [
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
 "alias": [
  null,
  "alias"
 ],
 "default": [
  null,
  "zadano"
 ],
 "key": [
  null,
  ""
 ],
 "none": [
  null,
  "nijedan"
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
  "Dijeljenje"
 ],
 "to host path": [
  null,
  "Trošak putanje $path_cost"
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
  "Spremnici"
 ],
 "page-title\u0004Images": [
  null,
  "Preslika $0"
 ]
}));
