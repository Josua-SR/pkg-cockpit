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
  "x-generator": "Zanata 4.4.5"
 },
 " (shared with the OS)": [
  null,
  " (compartit amb el SO)"
 ],
 "$0 day": [
  "$0 days",
  "$0 dia",
  "$0 dies"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 hora",
  "$0 hores"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minut",
  "$0 minuts"
 ],
 "$0 month": [
  "$0 months",
  "$0 mes",
  "$0 mesos"
 ],
 "$0 shares": [
  null,
  "$0 comparticions"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 setmana",
  "$0 setmanes"
 ],
 "$0 year": [
  "$0 years",
  "$0 any",
  "$0 anys"
 ],
 "${hip}:${hport} -> $cport": [
  null,
  "${hip}:${hport} -> $cport"
 ],
 "Add Additional Storage": [
  null,
  "Afegeix emmagatzematge addicional"
 ],
 "Add Storage": [
  null,
  "Afegeix emmagatzematge"
 ],
 "Additional Storage": [
  null,
  "Emmagatzematge addicional"
 ],
 "Advanced TCA": [
  null,
  ""
 ],
 "All In One": [
  null,
  "Tot en un"
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
  "Esteu segur que voleu suprimir aquesta imatge?"
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
  "Prioritat de CPU"
 ],
 "CPU usage:": [
  null,
  "Ús de la CPU:"
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
  "Canvia els límits dels recursos"
 ],
 "Change resources limits": [
  null,
  "Canvia els límits dels recursos"
 ],
 "Close": [
  null,
  "Tanca"
 ],
 "Combined memory usage": [
  null,
  "Ús combinat de memòria"
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  "Ús combinat de $0 nucli de CPU",
  "Ús combinat de $0 nuclis de CPU"
 ],
 "Command": [
  null,
  "Ordre"
 ],
 "Command can't be empty": [
  null,
  "L'ordre no pot estar en blanc"
 ],
 "Command:": [
  null,
  "Ordre:"
 ],
 "Commit": [
  null,
  "Consigna"
 ],
 "Commit Image": [
  null,
  "Consigna la imatge"
 ],
 "Compact PCI": [
  null,
  "PCI compacte"
 ],
 "Configure storage...": [
  null,
  "Configura l'emmagatzematge..."
 ],
 "Connecting to Docker": [
  null,
  "S'està connectant a Docker"
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
  "Contenidor:"
 ],
 "Containers": [
  null,
  "Contenidors"
 ],
 "Convertible": [
  null,
  "Convertible"
 ],
 "Could not add all disks": [
  null,
  "No s'han pogut afegir tots els discs"
 ],
 "Could not reset the storage pool": [
  null,
  "No s'ha pogut restablir l'agrupació d'emmagatzematge"
 ],
 "Created": [
  null,
  "Creat"
 ],
 "Created:": [
  null,
  "Creat:"
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
 "Desktop": [
  null,
  "Escriptori"
 ],
 "Detachable": [
  null,
  ""
 ],
 "Details": [
  null,
  "Detalls"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Docker no està activat o instal·lat al sistema"
 ],
 "Docking Station": [
  null,
  ""
 ],
 "Download": [
  null,
  "Baixa"
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
 "Embedded PC": [
  null,
  ""
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
  "Esborra els contenidors i restableix l'agrupació d'emmagatzematge"
 ],
 "Error message from Docker:": [
  null,
  "Missatge d'error de Docker:"
 ],
 "Everything": [
  null,
  "Tot"
 ],
 "Exited $ExitCode": [
  null,
  "Sortida $ExitCode"
 ],
 "Expansion Chassis": [
  null,
  ""
 ],
 "Expose container ports": [
  null,
  "Exposa els ports del contenidor"
 ],
 "Failed to start Docker: $0": [
  null,
  "Ha fallat l'inici de Docker: $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  "Ha fallat l'aturada de l'àmbit de Docker: $0"
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
  "Passarel·la:"
 ],
 "Get new image": [
  null,
  "Obtén una imatge nova"
 ],
 "Hand Held": [
  null,
  ""
 ],
 "Hard Disk": [
  null,
  "Disc dur"
 ],
 "IP Address:": [
  null,
  "Adreça IP:"
 ],
 "IP Prefix Length:": [
  null,
  "Longitud del prefix IP:"
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
  "Imatge"
 ],
 "Image $0": [
  null,
  "Imatge $0"
 ],
 "Image Search": [
  null,
  "Cerca de la imatge"
 ],
 "Image:": [
  null,
  "Imatge:"
 ],
 "Images": [
  null,
  "Imatges"
 ],
 "Images and running containers": [
  null,
  "Imatges i contenidors en execució"
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  ""
 ],
 "Invalid port": [
  null,
  "Port no vàlid"
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
  "Enllaça a un altre contenidor"
 ],
 "Links": [
  null,
  "Enllaços"
 ],
 "Links:": [
  null,
  "Enllaços:"
 ],
 "Local Disks": [
  null,
  "Discs locals"
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
  "Adreça MAC:"
 ],
 "Main Server Chassis": [
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
  "Ús de la memòria: "
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
  "Mini torre"
 ],
 "Mount container volumes": [
  null,
  "Munta els volums del contenidor"
 ],
 "Multi-system Chassis": [
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
  "No s'ha trobat cap emmagatzematge local addicional."
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
  "Sense contenidors"
 ],
 "No containers that match the current filter": [
  null,
  ""
 ],
 "No images": [
  null,
  "Sense imatges"
 ],
 "No images that match the current filter": [
  null,
  ""
 ],
 "No results for $0": [
  null,
  "Cap resultat per a $0"
 ],
 "No running containers": [
  null,
  "Cap contenidor en execució"
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
 "Notebook": [
  null,
  ""
 ],
 "Off": [
  null,
  "Off"
 ],
 "Ok": [
  null,
  "D'acord"
 ],
 "On": [
  null,
  "On"
 ],
 "On Failure": [
  null,
  "Amb la fallada"
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "Amb la fallada, reintenta $0 cop",
  "Amb la fallada, reintenta $0 cops"
 ],
 "Other": [
  null,
  "Altres"
 ],
 "Overview": [
  null,
  "Visió de conjunt"
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
  "Si us plau, confirmeu la supressió de $0"
 ],
 "Please confirm forced deletion of $0": [
  null,
  "Si us plau, confirmeu la supressió forçada de $0"
 ],
 "Please try another term": [
  null,
  "Si us plau, proveu un altre terme"
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
  "Ports:"
 ],
 "Problems": [
  null,
  "Problemes"
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
  "NomésLectura"
 ],
 "ReadWrite": [
  null,
  "LecturaEscriptura"
 ],
 "Reboot": [
  null,
  "Rearrencada"
 ],
 "Reformat and add disks": [
  null,
  "Torna a formatar i afegeix discs"
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
  "Restableix l'agrupació d'emmagatzematge"
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
  "Reinicia la política:"
 ],
 "Retries:": [
  null,
  "Intents:"
 ],
 "Run": [
  null,
  "Executa"
 ],
 "Run Image": [
  null,
  "Executa la imatge"
 ],
 "Sealed-case PC": [
  null,
  ""
 ],
 "Security": [
  null,
  "Seguretat"
 ],
 "Set container environment variables": [
  null,
  "Estableix les variables d'entorn del contenidor"
 ],
 "Show all containers": [
  null,
  "Mostra tots els contenidors"
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
  "Disc d'estat sòlid"
 ],
 "Space-saving Computer": [
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
  "Estat:"
 ],
 "Stick PC": [
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
  "Agrupació d'emmagatzematge"
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
  "Tauleta"
 ],
 "Tag": [
  null,
  "Etiqueta"
 ],
 "Tags": [
  null,
  "Etiquetes"
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
 "This image does not exist.": [
  null,
  "No existeix aquesta image."
 ],
 "Total": [
  null,
  "Total"
 ],
 "Tower": [
  null,
  "Torre"
 ],
 "Try again": [
  null,
  "Torna-ho a intentar"
 ],
 "Type to filter…": [
  null,
  "Teclegeu per filtrar..."
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Error inesperat"
 ],
 "Unknown": [
  null,
  "Desconegut"
 ],
 "Unless Stopped": [
  null,
  "A menys que s'aturi"
 ],
 "Up since $0": [
  null,
  ""
 ],
 "Used": [
  null,
  "Utilitzat"
 ],
 "Used by Containers": [
  null,
  "Utilitzat pels contenidors"
 ],
 "Volumes": [
  null,
  "Volums"
 ],
 "Volumes:": [
  null,
  ""
 ],
 "With terminal": [
  null,
  "Amb terminal"
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  "No teniu els permisos per gestionar l'agrupació d'emmagatzematge de Docker."
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 bytes de dades binàries]"
 ],
 "[binary data]": [
  null,
  "[dades binàries]"
 ],
 "[no data]": [
  null,
  "[sense dades]"
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
  "cerqueu pel nom, per l'espai de noms o per la descripció"
 ],
 "select container": [
  null,
  "seleccioneu el contenidor"
 ],
 "shares": [
  null,
  "comparticions"
 ],
 "to host path": [
  null,
  "al camí de l'amfitrió"
 ],
 "to host port": [
  null,
  "al port de l'amfitrió"
 ],
 "undefined": [
  null,
  "indefinit"
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
