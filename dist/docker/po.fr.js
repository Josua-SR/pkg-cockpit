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
  "x-generator": "Zanata 4.6.2"
 },
 " (shared with the OS)": [
  null,
  "(partagé avec l'OS)"
 ],
 "$0 day": [
  "$0 days",
  "$0 jour",
  "$0 jours"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 heure",
  "$0 heures"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minute",
  "$0 minutes"
 ],
 "$0 month": [
  "$0 months",
  "$0 mois",
  "$0 mois"
 ],
 "$0 shares": [
  null,
  "$0 actions"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 semaine",
  "$0 semaines"
 ],
 "$0 year": [
  "$0 years",
  "$0 an",
  "$0 ans"
 ],
 "${hip}:${hport} -> $cport": [
  null,
  "$ {hip}: $ {hport} -> $cport"
 ],
 "Add Additional Storage": [
  null,
  "Ajouter un espace de stockage supplémentaire"
 ],
 "Add Storage": [
  null,
  "Ajouter du stockage"
 ],
 "Additional Storage": [
  null,
  "Stockage supplémentaire"
 ],
 "Advanced TCA": [
  null,
  "TCA avancé"
 ],
 "All In One": [
  null,
  "Tout en un"
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "Toutes les données sur les disques sélectionnés seront effacées et les disques seront ajoutés au pool de stockage."
 ],
 "Always": [
  null,
  "Toujours"
 ],
 "Author": [
  null,
  "Auteur"
 ],
 "Blade": [
  null,
  "Panneau"
 ],
 "Blade enclosure": [
  null,
  "Enceintes du panneau"
 ],
 "Bus Expansion Chassis": [
  null,
  "Châssis d'extension de bus"
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
  "Utilisation CPU :"
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  "Impossible de se connecter à Docker"
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Change": [
  null,
  "Changement"
 ],
 "Change resource limits": [
  null,
  "Modifier les limites de ressources"
 ],
 "Change resources limits": [
  null,
  "Modifier les limites de ressources"
 ],
 "Close": [
  null,
  "Fermer"
 ],
 "Combined memory usage": [
  null,
  "Utilisation de la mémoire combinée"
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  "Utilisation combinée de $0 noyau CPU",
  "Utilisation combinée de $0 noyaux CPU"
 ],
 "Command": [
  null,
  "Commander"
 ],
 "Command can't be empty": [
  null,
  "La commande ne peut pas être vide"
 ],
 "Command:": [
  null,
  "Commande :"
 ],
 "Commit": [
  null,
  "Enregistrer"
 ],
 "Commit Image": [
  null,
  "Enregistrer l'image"
 ],
 "Compact PCI": [
  null,
  "PCI compact"
 ],
 "Configure storage...": [
  null,
  "Configurer le stockage ..."
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
  "Le conteneur est actuellement marqué comme n'étant pas en cours d'exécution, mais l'arrêt normal a échoué."
 ],
 "Container is currently running.": [
  null,
  "Le conteneur est en cours d'exécution."
 ],
 "Container:": [
  null,
  "Conteneur :"
 ],
 "Containers": [
  null,
  "Conteneurs"
 ],
 "Convertible": [
  null,
  "Convertible"
 ],
 "Could not add all disks": [
  null,
  "Impossible d'ajouter tous les disques"
 ],
 "Could not reset the storage pool": [
  null,
  "Impossible de réinitialiser le pool de stockage"
 ],
 "Created": [
  null,
  "Créé"
 ],
 "Created:": [
  null,
  "Créé :"
 ],
 "Default": [
  null,
  "Par défaut"
 ],
 "Delete": [
  null,
  "Supprimer"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "Supprimer un conteneur effacera toutes les données qu'il contient."
 ],
 "Desktop": [
  null,
  "Bureau"
 ],
 "Detachable": [
  null,
  "Détachable"
 ],
 "Details": [
  null,
  "Détails"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Docker n'est pas installé ou activé sur le système"
 ],
 "Docking Station": [
  null,
  "Station d'accueil"
 ],
 "Download": [
  null,
  "Télécharger"
 ],
 "Drive": [
  null,
  "Lecteur"
 ],
 "Duplicate alias": [
  null,
  "Alias ​​en double"
 ],
 "Duplicate port": [
  null,
  "Port dupliqué"
 ],
 "Embedded PC": [
  null,
  "PC intégré"
 ],
 "Entrypoint": [
  null,
  "Point d'accès"
 ],
 "Environment": [
  null,
  "Environnement"
 ],
 "Erase containers and reset storage pool": [
  null,
  "Effacer les conteneurs et réinitialiser le pool de stockage"
 ],
 "Error message from Docker:": [
  null,
  "Message d'erreur de Docker:"
 ],
 "Everything": [
  null,
  "Tout"
 ],
 "Exited $ExitCode": [
  null,
  "Sortie $ExitCode"
 ],
 "Expansion Chassis": [
  null,
  "Châssis d'extension"
 ],
 "Expose container ports": [
  null,
  "Exposer les ports conteneurs"
 ],
 "Failed to start Docker: $0": [
  null,
  "Impossible de démarrer Docker: $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  "Échec de l'arrêt de Docker scope : $0"
 ],
 "Force Delete": [
  null,
  "Forcer la suppression"
 ],
 "Free": [
  null,
  "Gratuit"
 ],
 "Gateway:": [
  null,
  "Gateway :"
 ],
 "Get new image": [
  null,
  "Obtenir une nouvelle image"
 ],
 "Hand Held": [
  null,
  "Portatif"
 ],
 "Hard Disk": [
  null,
  "Disque dur"
 ],
 "IP Address:": [
  null,
  "Adresse IP :"
 ],
 "IP Prefix Length:": [
  null,
  "Longueur du préfixe IP :"
 ],
 "Id": [
  null,
  "Id"
 ],
 "Id:": [
  null,
  "Id :"
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
  "Recherche d'image"
 ],
 "Image:": [
  null,
  "Image :"
 ],
 "Images": [
  null,
  "Images"
 ],
 "Images and running containers": [
  null,
  "Images et conteneurs en cours"
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  "Les informations sur le pool de stockage Docker ne sont pas disponibles."
 ],
 "Invalid port": [
  null,
  "Port non valide"
 ],
 "IoT Gateway": [
  null,
  "IoT Gateway"
 ],
 "Laptop": [
  null,
  "Portable"
 ],
 "Link to another container": [
  null,
  "Lien vers un autre conteneur"
 ],
 "Links": [
  null,
  "Liens"
 ],
 "Links:": [
  null,
  "Liens :"
 ],
 "Local Disks": [
  null,
  "Disques locaux"
 ],
 "Low Profile Desktop": [
  null,
  "Bureau de profil bas"
 ],
 "Lunch Box": [
  null,
  "Lunch Box"
 ],
 "MAC Address:": [
  null,
  "Adresse Mac :"
 ],
 "Main Server Chassis": [
  null,
  "Châssis principal du serveur"
 ],
 "Memory": [
  null,
  "Mémoire"
 ],
 "Memory limit": [
  null,
  "Limite de mémoire"
 ],
 "Memory usage:": [
  null,
  "Utilisation de la mémoire:"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Mini PC": [
  null,
  "Mini PC"
 ],
 "Mini Tower": [
  null,
  "Mini Tower"
 ],
 "Mount container volumes": [
  null,
  "Monter les volumes de conteneur"
 ],
 "Multi-system Chassis": [
  null,
  "Châssis multi-système"
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
  "Aucun espace de stockage local supplémentaire trouvé."
 ],
 "No alias specified": [
  null,
  "Aucun alias spécifié"
 ],
 "No container specified": [
  null,
  "Aucun conteneur spécifié"
 ],
 "No containers": [
  null,
  "Aucun conteneur"
 ],
 "No containers that match the current filter": [
  null,
  "Aucun conteneur correspondant au filtre actuel"
 ],
 "No images": [
  null,
  "Pas d'images"
 ],
 "No images that match the current filter": [
  null,
  "Aucune image correspondant au filtre actuel"
 ],
 "No results for $0": [
  null,
  "Aucun résultat pour $0"
 ],
 "No running containers": [
  null,
  "Aucun conteneur en cours d'exécution"
 ],
 "No running containers that match the current filter": [
  null,
  "Aucun conteneur en cours d'exécution correspondant au filtre actuel"
 ],
 "Not authorized to access Docker on this system": [
  null,
  "Non autorisé à accéder à Docker sur ce système"
 ],
 "Not found": [
  null,
  "Non trouvé"
 ],
 "Notebook": [
  null,
  "Notebook"
 ],
 "Off": [
  null,
  "De"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  "Sur"
 ],
 "On Failure": [
  null,
  "En cas d'échec"
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "En cas d'échec, réessayez $0 fois",
  "En cas d'échec, réessayez $0 fois"
 ],
 "Other": [
  null,
  "Autre"
 ],
 "Overview": [
  null,
  "Aperçu"
 ],
 "Peripheral Chassis": [
  null,
  "Châssis périphérique"
 ],
 "Pizza Box": [
  null,
  "Pizza Box"
 ],
 "Please confirm deletion of $0": [
  null,
  "Veuillez confirmer la suppression de $0"
 ],
 "Please confirm forced deletion of $0": [
  null,
  "Veuillez confirmer la suppression forcée de $0"
 ],
 "Please try another term": [
  null,
  "Veuillez essayer un autre terme"
 ],
 "Portable": [
  null,
  "Portable"
 ],
 "Ports": [
  null,
  "Ports"
 ],
 "Ports:": [
  null,
  "Ports :"
 ],
 "Problems": [
  null,
  "Problèmes"
 ],
 "RAID Chassis": [
  null,
  "Châssis RAID"
 ],
 "Rack Mount Chassis": [
  null,
  "Châssis de montage en rack"
 ],
 "ReadOnly": [
  null,
  "Lecture seulement"
 ],
 "ReadWrite": [
  null,
  "LectureÉcriture"
 ],
 "Reboot": [
  null,
  "Redémarrer"
 ],
 "Reformat and add disks": [
  null,
  "Reformatez et ajoutez des disques"
 ],
 "Repository": [
  null,
  "Référentiel"
 ],
 "Reset": [
  null,
  "Réinitialiser"
 ],
 "Reset Storage Pool": [
  null,
  "Réinitialiser le pool de stockage"
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  "La réinitialisation du pool de stockage efface tous les conteneurs et libère des disques dans le pool."
 ],
 "Restart": [
  null,
  "Redémarrer"
 ],
 "Restart Policy": [
  null,
  "Redémarrer la stratégie"
 ],
 "Restart Policy:": [
  null,
  "Redémarrer la stratégie:"
 ],
 "Retries:": [
  null,
  "Tentatives :"
 ],
 "Run": [
  null,
  "Exécuter"
 ],
 "Run Image": [
  null,
  "Exécuter l'image"
 ],
 "Sealed-case PC": [
  null,
  "PC scellé"
 ],
 "Security": [
  null,
  "Sécurité"
 ],
 "Set container environment variables": [
  null,
  "Définir les variables d'environnement du conteneur"
 ],
 "Show all containers": [
  null,
  "Afficher tous les conteneurs"
 ],
 "Show all images": [
  null,
  "Afficher toutes les images"
 ],
 "Size": [
  null,
  "Taille"
 ],
 "Solid-State Disk": [
  null,
  "Solid-State Disk"
 ],
 "Space-saving Computer": [
  null,
  "Ordinateur gain de place"
 ],
 "Start": [
  null,
  "Démarrer"
 ],
 "Start Docker": [
  null,
  "Démarrer Docker"
 ],
 "State": [
  null,
  "État"
 ],
 "State:": [
  null,
  "État :"
 ],
 "Stick PC": [
  null,
  "Stick PC"
 ],
 "Stop": [
  null,
  "Arrêter"
 ],
 "Stop and delete": [
  null,
  "Arrêter et supprimer"
 ],
 "Stopped": [
  null,
  "Arrêté"
 ],
 "Storage": [
  null,
  "Stockage"
 ],
 "Storage pool": [
  null,
  "Pool de stockage"
 ],
 "Sub Chassis": [
  null,
  "Sous-châssis"
 ],
 "Sub Notebook": [
  null,
  "Sub Notebook"
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Tablet": [
  null,
  "Tablette"
 ],
 "Tag": [
  null,
  "Balise"
 ],
 "Tags": [
  null,
  "Balises"
 ],
 "The Docker storage pool cannot be managed on this system.": [
  null,
  "Le pool de stockage Docker ne peut pas être géré sur ce système."
 ],
 "The following containers depend on this image and will become unusable.": [
  null,
  "Les conteneurs suivants dépendent de cette image et deviendront inutilisables."
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  "Le scan de $time ( $type ) n'a trouvé aucune vulnérabilité."
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  "Le scan de $time ( $type ) n'a pas réussi."
 ],
 "This image does not exist.": [
  null,
  "Cette image n'existe pas."
 ],
 "Total": [
  null,
  "Total"
 ],
 "Tower": [
  null,
  "Tower"
 ],
 "Try again": [
  null,
  "Réessayer"
 ],
 "Type to filter…": [
  null,
  "Tapez pour filtrer ..."
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Erreur inattendue"
 ],
 "Unknown": [
  null,
  "Inconnu"
 ],
 "Unless Stopped": [
  null,
  "Sauf si arrêté"
 ],
 "Up since $0": [
  null,
  "En cours depuis $0"
 ],
 "Used": [
  null,
  "Utilisé"
 ],
 "Used by Containers": [
  null,
  "Utilisé par les conteneurs"
 ],
 "Volumes": [
  null,
  "Volumes"
 ],
 "Volumes:": [
  null,
  "Volumes :"
 ],
 "With terminal": [
  null,
  "Avec terminal"
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  "Vous n'êtes pas autorisé à gérer le pool de stockage Docker."
 ],
 "[$0 bytes of binary data]": [
  null,
  "[ $0 octets de données binaires]"
 ],
 "[binary data]": [
  null,
  "[données binaires]"
 ],
 "[no data]": [
  null,
  "[pas de données]"
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
  "clé"
 ],
 "none": [
  null,
  "aucun"
 ],
 "search by name, namespace or description": [
  null,
  "recherche par nom, espace de noms ou description"
 ],
 "select container": [
  null,
  "sélectionnez le conteneur"
 ],
 "shares": [
  null,
  "shares"
 ],
 "to host path": [
  null,
  "pour héberger le chemin"
 ],
 "to host port": [
  null,
  "accueillir le port"
 ],
 "undefined": [
  null,
  "indéfini"
 ],
 "value": [
  null,
  "valeur"
 ],
 "page-title\u0004Containers": [
  null,
  "Conteneurs"
 ],
 "page-title\u0004Images": [
  null,
  "Images"
 ]
}));
