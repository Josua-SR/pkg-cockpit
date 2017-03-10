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
nplurals=2; plural=(n > 1);
return plural;
},
  "language": "fr",
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
  "$0 partages"
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
  ""
 ],
 "Are you sure you want to delete this image?": [
  null,
  ""
 ],
 "Author": [
  null,
  "Auteur"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU priority": [
  null,
  "Priorité en CPU"
 ],
 "CPU usage:": [
  null,
  ""
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Annuler"
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
  "Fermer"
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
  "Commande"
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
  "Connexion à Docker"
 ],
 "Container": [
  null,
  "Conteneur"
 ],
 "Container Name": [
  null,
  "Nom du conteneur"
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  "Le conteneur est marqué comme arrêté, mais l'arrêt normal a échoué."
 ],
 "Container is currently running.": [
  null,
  "Le conteneur est en cours d'exécution"
 ],
 "Container:": [
  null,
  ""
 ],
 "Containers": [
  null,
  "Conteneurs"
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
  "Par défaut"
 ],
 "Delete": [
  null,
  "Supprimer"
 ],
 "Delete $0": [
  null,
  "Supprimer $0"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "Supprimer un conteneur en supprimera toutes les données"
 ],
 "Deleting an image will delete it, but you can probably download it again if you need it later.  Unless this image has never been pushed to a repository, that is, in which case you probably can't download it again.": [
  null,
  "Supprimer une image la supprimera, mais il sera probablement possible de la récupérer à nouveau plus tard. Si cette image n'a jamais été poussée sur un dépôt, il ne sera probablement pas possible de la récupérer."
 ],
 "Details": [
  null,
  ""
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Docker n'est pas installé ou activé sur le système"
 ],
 "Download": [
  null,
  ""
 ],
 "Drive": [
  null,
  "Disque"
 ],
 "Duplicate alias": [
  null,
  "Alias dupliqué"
 ],
 "Duplicate port": [
  null,
  "Port dupliqué"
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
  "Message d'erreur de Docker :"
 ],
 "Everything": [
  null,
  ""
 ],
 "Exited $ExitCode": [
  null,
  "Code de sortie $ExitCode"
 ],
 "Expose container ports": [
  null,
  ""
 ],
 "Failed to start Docker: $0": [
  null,
  "Échec du démarrage de Docker : $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  "Échec de l'arrêt de la portée Docker : $0"
 ],
 "Force Delete": [
  null,
  "Forcer la suppression"
 ],
 "Free": [
  null,
  "Disponible"
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
  ""
 ],
 "IP Prefix Length:": [
  null,
  ""
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
  "Image"
 ],
 "Image $0": [
  null,
  "Image $0"
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
  "Port invalide"
 ],
 "Link to another container": [
  null,
  ""
 ],
 "Links": [
  null,
  "Liens"
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
  "Mémoire"
 ],
 "Memory limit": [
  null,
  "Limite en mémoire"
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
  "Nom"
 ],
 "No": [
  null,
  "Non"
 ],
 "No additional local storage found.": [
  null,
  ""
 ],
 "No alias specified": [
  null,
  "Aucun alias indiqué"
 ],
 "No container specified": [
  null,
  "Aucun conteneur indiqué"
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
  "Vous n'êtes pas autorisé à accéder à Docker sur ce système"
 ],
 "Not found": [
  null,
  "Non trouvé"
 ],
 "Off": [
  null,
  "Éteint"
 ],
 "Ok": [
  null,
  ""
 ],
 "On": [
  null,
  "Allumé"
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
  "Confirmer la suppression de $0"
 ],
 "Please confirm forced deletion of $0": [
  null,
  "Merci de confirmer la suppression de $0"
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
  "Dépôt"
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
  "Redémarrer"
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
  "Taille"
 ],
 "Solid-State Disk": [
  null,
  ""
 ],
 "Start": [
  null,
  "Démarrer"
 ],
 "Start Docker": [
  null,
  "Démarrer docker"
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
  "Arrêter"
 ],
 "Stopped": [
  null,
  "Arrêté"
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
  "Balise"
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
  "Réessayer"
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
  "Erreur inattendue"
 ],
 "Unless Stopped": [
  null,
  ""
 ],
 "Up since $StartedAt": [
  null,
  "Allumé depuis $StartedAt"
 ],
 "Used": [
  null,
  "Utilisé(e)"
 ],
 "Used by Containers": [
  null,
  "Conteneurs"
 ],
 "Volumes": [
  null,
  ""
 ],
 "With terminal": [
  null,
  "Avec le terminal"
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
  "par défaut"
 ],
 "key": [
  null,
  ""
 ],
 "none": [
  null,
  "aucun"
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
  "vers le port de l'hôte"
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
  "Conteneurs"
 ],
 "page-title\u0004Images": [
  null,
  "Image"
 ]
}));
