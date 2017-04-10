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
  "language": "ca",
  "x-generator": "Zanata 3.9.6"
 },
 " (shared with the OS)": [
  null,
  ""
 ],
 "$0 day": [
  "$0 days",
  "",
  ""
 ],
 "$0 hour": [
  "$0 hours",
  "",
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  "",
  ""
 ],
 "$0 month": [
  "$0 months",
  "",
  ""
 ],
 "$0 shares": [
  null,
  "$0 comparticions"
 ],
 "$0 week": [
  "$0 weeks",
  "",
  ""
 ],
 "$0 year": [
  "$0 years",
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
  "Sempre"
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
  "Prioritat de CPU"
 ],
 "CPU usage:": [
  null,
  ""
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  "No es pot connectar a Docker"
 ],
 "Cancel": [
  null,
  "Cancel·la"
 ],
 "Change": [
  null,
  "Canvia"
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
  "Tanca"
 ],
 "Combined CPU usage": [
  null,
  "Ús combinat de CPU"
 ],
 "Combined memory usage": [
  null,
  "Ús combinat de memòria"
 ],
 "Command": [
  null,
  "Ordre"
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
  "S'està connectant al Docker"
 ],
 "Container": [
  null,
  "Contenidor"
 ],
 "Container Name": [
  null,
  "Nom del contenidor"
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  "El contenidor actualment està marcat com a no en execució, però va fallar l'aturada normal."
 ],
 "Container is currently running.": [
  null,
  "El contenidor s'està executant actualment."
 ],
 "Container:": [
  null,
  ""
 ],
 "Containers": [
  null,
  "Contenidors"
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
  "Creat"
 ],
 "Created:": [
  null,
  ""
 ],
 "Default": [
  null,
  "Predeterminat"
 ],
 "Delete": [
  null,
  "Suprimeix"
 ],
 "Delete $0": [
  null,
  "Suprimeix $0"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "La supressió d'un contenidor n'esborrarà totes les dades."
 ],
 "Deleting an image will delete it, but you can probably download it again if you need it later.  Unless this image has never been pushed to a repository, that is, in which case you probably can't download it again.": [
  null,
  "La supressió d'una imatge ho suprimirà, però probablement es pot baixar de nou si es necessita més endavant. Llevat que aquesta imatge mai hagi estat empesa a un dipòsit, que ho és, en aquest cas probablement no pugueu baixar-ho de nou."
 ],
 "Details": [
  null,
  "Detalls"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Docker no està activat o instal·lat al sistema"
 ],
 "Download": [
  null,
  ""
 ],
 "Drive": [
  null,
  "Unitat"
 ],
 "Duplicate alias": [
  null,
  "Àlies duplicat"
 ],
 "Duplicate port": [
  null,
  "Port duplicat"
 ],
 "Entrypoint": [
  null,
  "Extrem"
 ],
 "Environment": [
  null,
  "Entorn"
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
  "Missatge d'error del Docker:"
 ],
 "Everything": [
  null,
  ""
 ],
 "Exited $ExitCode": [
  null,
  "Sortida $ExitCode"
 ],
 "Expose container ports": [
  null,
  ""
 ],
 "Failed to start Docker: $0": [
  null,
  "Ha fallat l'inici del Docker: $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  "Ha fallat l'aturada de l'àmbit del Docker: $0"
 ],
 "Force Delete": [
  null,
  "Força la supressió"
 ],
 "Free": [
  null,
  "Lliure"
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
  "Adreça IP:"
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
  ""
 ],
 "Image": [
  null,
  "Imatge"
 ],
 "Image $0": [
  null,
  "Imatge $0"
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
  "Imatges"
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
  "Port no vàlid"
 ],
 "Link to another container": [
  null,
  ""
 ],
 "Links": [
  null,
  "Enllaços"
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
  "Memòria"
 ],
 "Memory limit": [
  null,
  "Límit de memòria"
 ],
 "Memory usage:": [
  null,
  ""
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Mount container volumes": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nom"
 ],
 "No": [
  null,
  "No"
 ],
 "No additional local storage found.": [
  null,
  ""
 ],
 "No alias specified": [
  null,
  "Sense especificar l'àlies"
 ],
 "No container specified": [
  null,
  "Sense especificar el contenidor"
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
  "No s'autoritza l'accés Docker en aquest sistema"
 ],
 "Not found": [
  null,
  "No s'ha trobat"
 ],
 "Off": [
  null,
  "Apagat"
 ],
 "Ok": [
  null,
  ""
 ],
 "On": [
  null,
  "Engegat"
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
  "Si us plau, confirmeu la supressió de $0"
 ],
 "Please confirm forced deletion of $0": [
  null,
  "Si us plau, confirmeu la supressió forçada de $0"
 ],
 "Please try another term": [
  null,
  ""
 ],
 "Ports": [
  null,
  "Ports"
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
  "Dipòsit"
 ],
 "Reset": [
  null,
  "Restableix"
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
  "Reinicia"
 ],
 "Restart Policy": [
  null,
  "Reinicia la política"
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
  "Mostra totes les imatges"
 ],
 "Size": [
  null,
  "Mida"
 ],
 "Solid-State Disk": [
  null,
  ""
 ],
 "Start": [
  null,
  "Inicia"
 ],
 "Start Docker": [
  null,
  "Inicia Docker"
 ],
 "State": [
  null,
  "Estat"
 ],
 "State:": [
  null,
  ""
 ],
 "Stop": [
  null,
  "Atura"
 ],
 "Stopped": [
  null,
  "Aturat"
 ],
 "Storage": [
  null,
  "Emmagatzematge"
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
  "Tag"
 ],
 "Tags": [
  null,
  "Etiquetes"
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
  "Torna-ho a intentar"
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
  "Error inesperat"
 ],
 "Unless Stopped": [
  null,
  ""
 ],
 "Up since $StartedAt": [
  null,
  "Aixecat des de $StartedAt"
 ],
 "Used": [
  null,
  "Utilitzat"
 ],
 "Used by Containers": [
  null,
  "Contenidors"
 ],
 "Volumes": [
  null,
  "Volums"
 ],
 "With terminal": [
  null,
  "Amb el terminal"
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  ""
 ],
 "alias": [
  null,
  "àlies"
 ],
 "default": [
  null,
  "per defecte"
 ],
 "key": [
  null,
  "clau"
 ],
 "none": [
  null,
  "cap"
 ],
 "search by name, namespace or description": [
  null,
  ""
 ],
 "select container": [
  null,
  "selecciona el contenidor"
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
  "al port de l'amfitrió"
 ],
 "undefined": [
  null,
  ""
 ],
 "value": [
  null,
  "valor"
 ],
 "page-title\u0004Containers": [
  null,
  "Contenidors"
 ],
 "page-title\u0004Images": [
  null,
  "Imatges"
 ]
}));