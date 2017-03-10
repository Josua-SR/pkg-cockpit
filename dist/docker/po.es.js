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
  "language": "es",
  "x-generator": "Zanata 3.9.6"
 },
 " (shared with the OS)": [
  null,
  " (compartido con el SO)"
 ],
 "$0 day": [
  "$0 days",
  "$0 días",
  "$0 días"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 horas",
  "$0 horas"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minutos",
  "$0 minutos"
 ],
 "$0 month": [
  "$0 months",
  "$0 meses",
  "$0 meses"
 ],
 "$0 shares": [
  null,
  "$0 Acciones"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 semanas",
  "$0 semanas"
 ],
 "$0 year": [
  "$0 years",
  "$0 años",
  "$0 años"
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
  "Siempre"
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
  "Prioridad del CPU"
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
  "Cancelar"
 ],
 "Change": [
  null,
  "Cambiar"
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
  "Cerrar"
 ],
 "Combined CPU usage": [
  null,
  ""
 ],
 "Combined memory usage": [
  null,
  "Uso de memoria combinado"
 ],
 "Command": [
  null,
  "Comando"
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
  "Conectando a Docker"
 ],
 "Container": [
  null,
  "Contenedor"
 ],
 "Container Name": [
  null,
  "Nombre del Contenedor"
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  "El contenedor esta marcado actualmente como que no esta corriendo, pero el paro regular ha fallado"
 ],
 "Container is currently running.": [
  null,
  "El contenedor esta corriendo actualmente"
 ],
 "Container:": [
  null,
  ""
 ],
 "Containers": [
  null,
  "Contenedores"
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
  "Creado"
 ],
 "Created:": [
  null,
  ""
 ],
 "Default": [
  null,
  "Predeterminado"
 ],
 "Delete": [
  null,
  "Eliminar"
 ],
 "Delete $0": [
  null,
  "Eliminar $0"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "Eliminar un contenedor eliminara toda la información en él."
 ],
 "Deleting an image will delete it, but you can probably download it again if you need it later.  Unless this image has never been pushed to a repository, that is, in which case you probably can't download it again.": [
  null,
  "Borrar una imagen, la borrara, pero tu puedes descargarla de nuevo si tu la necesitas mas tarde. A menos que esta imagen nunca haya sido colocada a un repositorio, en cuyo caso no puedas volver a descargarla nuevamente."
 ],
 "Details": [
  null,
  "Detalles"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Docker no esta instalado o no esta activo en el sistema"
 ],
 "Download": [
  null,
  ""
 ],
 "Drive": [
  null,
  "Disco"
 ],
 "Duplicate alias": [
  null,
  "Alias duplicado"
 ],
 "Duplicate port": [
  null,
  "Puerto duplicado"
 ],
 "Entrypoint": [
  null,
  "Entrada"
 ],
 "Environment": [
  null,
  "Entorno"
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
  "Mensaje de error de Docker:"
 ],
 "Everything": [
  null,
  ""
 ],
 "Exited $ExitCode": [
  null,
  "Salió $ExitCode"
 ],
 "Expose container ports": [
  null,
  ""
 ],
 "Failed to start Docker: $0": [
  null,
  "Fallo al iniciar Docker: $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  "Fallo al detener Docker scope: $0"
 ],
 "Force Delete": [
  null,
  "Forzar el borrado"
 ],
 "Free": [
  null,
  "Libre"
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
  "Id"
 ],
 "Id:": [
  null,
  ""
 ],
 "Image": [
  null,
  "Imagén"
 ],
 "Image $0": [
  null,
  "Imagén $0"
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
  "Imágenes"
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
  "Puerto invalido"
 ],
 "Link to another container": [
  null,
  ""
 ],
 "Links": [
  null,
  "Vinculos"
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
  "Memoria"
 ],
 "Memory limit": [
  null,
  "Limite de Memoria "
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
  "Nombre"
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
  "No se ha especificado un alias"
 ],
 "No container specified": [
  null,
  "No se ha especificado un contenedor"
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
  "No esta autorizado a acceder a Docker en este sistema"
 ],
 "Not found": [
  null,
  "No encontrado"
 ],
 "Off": [
  null,
  "Apagado"
 ],
 "Ok": [
  null,
  ""
 ],
 "On": [
  null,
  "Encencido"
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
  "Por favor confirmar la eliminación de $0"
 ],
 "Please confirm forced deletion of $0": [
  null,
  "Por favor confirme, forzar el borrado de $0"
 ],
 "Please try another term": [
  null,
  ""
 ],
 "Ports": [
  null,
  "Puertos"
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
  "Repositorio"
 ],
 "Reset": [
  null,
  "Reiniciar"
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
  "Reiniciar"
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
  "Mostrar todas las imágenes"
 ],
 "Size": [
  null,
  "Tamaño"
 ],
 "Solid-State Disk": [
  null,
  ""
 ],
 "Start": [
  null,
  "Iniciar"
 ],
 "Start Docker": [
  null,
  "Iniciar a Docker"
 ],
 "State": [
  null,
  "Estado"
 ],
 "State:": [
  null,
  ""
 ],
 "Stop": [
  null,
  "Detener"
 ],
 "Stopped": [
  null,
  "Detenido"
 ],
 "Storage": [
  null,
  "Almacenamiento"
 ],
 "Storage pool": [
  null,
  ""
 ],
 "TCP": [
  null,
  "TCP: Protocolo de Control de Transmisión, por sus siglas en ingles (Transmission Control Protocol)"
 ],
 "Tag": [
  null,
  "Etiquetas"
 ],
 "Tags": [
  null,
  "Etiquetas"
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
  "Intentar nuevamente"
 ],
 "Type to filter…": [
  null,
  ""
 ],
 "UDP": [
  null,
  "UDP:  Protocolo de Datagramas de Usuario, por sus siglas en ingles (User Datagram Protocol)"
 ],
 "Unexpected error": [
  null,
  "Error inesperado"
 ],
 "Unless Stopped": [
  null,
  "A menos que detenido"
 ],
 "Up since $StartedAt": [
  null,
  "Arriba desde $StartedAt"
 ],
 "Used": [
  null,
  "Usado"
 ],
 "Used by Containers": [
  null,
  "Contenedores"
 ],
 "Volumes": [
  null,
  "Volúmenes"
 ],
 "With terminal": [
  null,
  "Con terminal"
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  ""
 ],
 "alias": [
  null,
  "Alias"
 ],
 "default": [
  null,
  "Por defecto"
 ],
 "key": [
  null,
  "llave"
 ],
 "none": [
  null,
  "ninguno"
 ],
 "search by name, namespace or description": [
  null,
  ""
 ],
 "select container": [
  null,
  "seleccionar contenedor"
 ],
 "shares": [
  null,
  ""
 ],
 "to host path": [
  null,
  "hacía directorio en el host"
 ],
 "to host port": [
  null,
  "al puerto anfitrión"
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
  "Contenedores"
 ],
 "page-title\u0004Images": [
  null,
  "Imágenes"
 ]
}));
