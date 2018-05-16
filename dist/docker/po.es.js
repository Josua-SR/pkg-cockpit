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
  "$0 día",
  "$0 días"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 horas",
  "$0 horas"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minuto",
  "$0 minutos"
 ],
 "$0 month": [
  "$0 months",
  "$0 mes",
  "$0 meses"
 ],
 "$0 shares": [
  null,
  "$0 comparticiones"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 semana",
  "$0 semanas"
 ],
 "$0 year": [
  "$0 years",
  "$0 año",
  "$0 años"
 ],
 "${hip}:${hport} -> $cport": [
  null,
  "${hip}:${hport} → $cport"
 ],
 "Add Additional Storage": [
  null,
  "Añadir almacenamiento adicional"
 ],
 "Add Storage": [
  null,
  "Añadir almacenamiento"
 ],
 "Additional Storage": [
  null,
  "Almacenamiento Adicional"
 ],
 "Advanced TCA": [
  null,
  "TCA avanzado"
 ],
 "All In One": [
  null,
  "Todo En Uno"
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "Todos los datos en los discos seleccionados serán borrados y los discos serán añadidos al pool de almacenamiento."
 ],
 "Always": [
  null,
  "Siempre"
 ],
 "Are you sure you want to delete this image?": [
  null,
  "¿Está seguro de que desea borrar esta imagen?"
 ],
 "Author": [
  null,
  "Autor"
 ],
 "Blade": [
  null,
  "Espada"
 ],
 "Blade enclosure": [
  null,
  "Recinto de la espada"
 ],
 "Bus Expansion Chassis": [
  null,
  "Chasis de Expansión de Bus"
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
  "Utilización de CPU:"
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  "Can&rsquo;t connect to Docker"
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
  "Cambiar los límites de recurso"
 ],
 "Change resources limits": [
  null,
  "Cambiar límites de recursos"
 ],
 "Close": [
  null,
  "Cerrar"
 ],
 "Combined memory usage": [
  null,
  "Uso de memoria combinado"
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  "Uso combinado de núcleo de CPU $0",
  "Uo combinado de núcleos de CPU $0"
 ],
 "Command": [
  null,
  "Orden"
 ],
 "Command can't be empty": [
  null,
  "La orden no puede estar vacía"
 ],
 "Command:": [
  null,
  "Orden:"
 ],
 "Commit": [
  null,
  "Consigna"
 ],
 "Commit Image": [
  null,
  "Imagen de consigna"
 ],
 "Compact PCI": [
  null,
  "PCI Compacto"
 ],
 "Configure storage...": [
  null,
  "Configurar almacenamiento..."
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
  "Contenedor:"
 ],
 "Containers": [
  null,
  "Contenedores"
 ],
 "Convertible": [
  null,
  "Convertible"
 ],
 "Could not add all disks": [
  null,
  "No podría añadir todos los discos"
 ],
 "Could not reset the storage pool": [
  null,
  "No podría reiniciar el pool de almacenamiento"
 ],
 "Created": [
  null,
  "Creado"
 ],
 "Created:": [
  null,
  "Creado:"
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
 "Desktop": [
  null,
  "Escritorio"
 ],
 "Detachable": [
  null,
  "Desmontable"
 ],
 "Details": [
  null,
  "Detalles"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Docker no esta instalado o no esta activo en el sistema"
 ],
 "Docking Station": [
  null,
  "Estación de Acoplamiento"
 ],
 "Download": [
  null,
  "Descarga"
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
 "Embedded PC": [
  null,
  "PC Embebido"
 ],
 "Entrypoint": [
  null,
  "Punto de entrada"
 ],
 "Environment": [
  null,
  "Entorno"
 ],
 "Erase containers and reset storage pool": [
  null,
  "Borrar contenedores y reajustar el pool de almacenamiento"
 ],
 "Error message from Docker:": [
  null,
  "Mensaje de error de Docker:"
 ],
 "Everything": [
  null,
  "Todo"
 ],
 "Exited $ExitCode": [
  null,
  "Salió $ExitCode"
 ],
 "Expansion Chassis": [
  null,
  "Chasis de Expansión"
 ],
 "Expose container ports": [
  null,
  "Exponer puertos de contenedores"
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
  "Pasarela:"
 ],
 "Get new image": [
  null,
  "Obtener nueva imagen"
 ],
 "Hand Held": [
  null,
  "Portátil"
 ],
 "Hard Disk": [
  null,
  "Disco Duro"
 ],
 "IP Address:": [
  null,
  "Dirección IP:"
 ],
 "IP Prefix Length:": [
  null,
  "Longitud de Prefijo IP:"
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
  "Imagén"
 ],
 "Image $0": [
  null,
  "Imagén $0"
 ],
 "Image Search": [
  null,
  "Buscar Imagen"
 ],
 "Image:": [
  null,
  "Imagen:"
 ],
 "Images": [
  null,
  "Imágenes"
 ],
 "Images and running containers": [
  null,
  "Imágenes y contenedores corriendo"
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  "No hay información disponible sobre el grupo de almacenamiento de Docker."
 ],
 "Invalid port": [
  null,
  "Puerto invalido"
 ],
 "IoT Gateway": [
  null,
  "Pasarela IoT"
 ],
 "Laptop": [
  null,
  "Sobremesa"
 ],
 "Link to another container": [
  null,
  "Enlazar con otro contenedor"
 ],
 "Links": [
  null,
  "Vinculos"
 ],
 "Links:": [
  null,
  "Enlaces:"
 ],
 "Local Disks": [
  null,
  "Discos locales"
 ],
 "Low Profile Desktop": [
  null,
  "Escritorio de Perfil Bajo"
 ],
 "Lunch Box": [
  null,
  "Loncheras"
 ],
 "MAC Address:": [
  null,
  "Dirección MAC:"
 ],
 "Main Server Chassis": [
  null,
  "Chasis del Servidor Principal"
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
  "Uso de memoria:"
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
  "Mini Torre"
 ],
 "Mount container volumes": [
  null,
  "Montar volúmenes de contenedores"
 ],
 "Multi-system Chassis": [
  null,
  "Chasis Multisistema"
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
  "No se encontró ningún almacenamiento local adicional."
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
  "No hay ningún contenedor"
 ],
 "No containers that match the current filter": [
  null,
  "Ningún contenedor corresponde al filtro actual"
 ],
 "No images": [
  null,
  "No hay imágenes"
 ],
 "No images that match the current filter": [
  null,
  "No hay imágenes que correspondan al filtro actual"
 ],
 "No results for $0": [
  null,
  "No hay resultados para $0"
 ],
 "No running containers": [
  null,
  "No hay contenedores corriendo"
 ],
 "No running containers that match the current filter": [
  null,
  "No hay contenedores corriendo que coincidan con el filtro actual"
 ],
 "Not authorized to access Docker on this system": [
  null,
  "No esta autorizado a acceder a Docker en este sistema"
 ],
 "Not found": [
  null,
  "No encontrado"
 ],
 "Notebook": [
  null,
  "Portátil"
 ],
 "Off": [
  null,
  "Apagado"
 ],
 "Ok": [
  null,
  "Aceptar"
 ],
 "On": [
  null,
  "Encencido"
 ],
 "On Failure": [
  null,
  "Al producirse un fallo"
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "Al producirse un fallo, reintentar $0 vez",
  "Al producirse un fallo, reintentar $0 veces"
 ],
 "Other": [
  null,
  "Otro"
 ],
 "Overview": [
  null,
  "Visión conjunta"
 ],
 "Peripheral Chassis": [
  null,
  "Chasis Periférico"
 ],
 "Pizza Box": [
  null,
  "Pizza Box"
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
  "Pruebe con otro término"
 ],
 "Portable": [
  null,
  "Portable"
 ],
 "Ports": [
  null,
  "Puertos"
 ],
 "Ports:": [
  null,
  "Puertos:"
 ],
 "Problems": [
  null,
  "Problemas"
 ],
 "RAID Chassis": [
  null,
  "Chasis RAID"
 ],
 "Rack Mount Chassis": [
  null,
  "Chasis Montado en Rack"
 ],
 "ReadOnly": [
  null,
  "SoloLectura"
 ],
 "ReadWrite": [
  null,
  "LecturaEscritura"
 ],
 "Reboot": [
  null,
  "Reiniciar"
 ],
 "Reformat and add disks": [
  null,
  "Reformatear y añadir discos"
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
  "Restablecer grupo de almacenamiento"
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  "Si restablece el grupo de almacenamiento se borrarán todos los contenedores y los discos de liberación del grupo."
 ],
 "Restart": [
  null,
  "Reiniciar"
 ],
 "Restart Policy": [
  null,
  "Normativa de reinicios"
 ],
 "Restart Policy:": [
  null,
  "Normativa de reinicios:"
 ],
 "Retries:": [
  null,
  "Reintentos:"
 ],
 "Run": [
  null,
  "Ejecutar"
 ],
 "Run Image": [
  null,
  "Ejecutar imagen"
 ],
 "Sealed-case PC": [
  null,
  "PC de Caja Sellada"
 ],
 "Security": [
  null,
  "Seguridad"
 ],
 "Set container environment variables": [
  null,
  "Ajustar variables de entorno del contenedor"
 ],
 "Show all containers": [
  null,
  "Mostrar todos los contenedores"
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
  "Disco de Estado Sólido"
 ],
 "Space-saving Computer": [
  null,
  "Ordenador que Ahorra Espacio"
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
  "Estado:"
 ],
 "Stick PC": [
  null,
  "Stick PC"
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
  "Grupo de almacenamiento"
 ],
 "Sub Chassis": [
  null,
  "Sub Chasis"
 ],
 "Sub Notebook": [
  null,
  "Sub Portátil"
 ],
 "TCP": [
  null,
  "TCP: Protocolo de Control de Transmisión, por sus siglas en ingles (Transmission Control Protocol)"
 ],
 "Tablet": [
  null,
  "Tableta"
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
  "El grupo del almacenamiento Docker no se puede administrar en este sistema."
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  "El escaneo desde $time ($type) no encontró vulnerabilidades."
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  "El escaneo desde $time ($type) no tuvo éxito."
 ],
 "This image does not exist.": [
  null,
  "Esta imagen no existe."
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
  "Intentar nuevamente"
 ],
 "Type to filter…": [
  null,
  "Escribir para filtrar..."
 ],
 "UDP": [
  null,
  "UDP:  Protocolo de Datagramas de Usuario, por sus siglas en ingles (User Datagram Protocol)"
 ],
 "Unexpected error": [
  null,
  "Error inesperado"
 ],
 "Unknown": [
  null,
  "Desconocido"
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
  "Utilizado por contenedores"
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
  "Usted no tiene permisos para gestionar el grupo de almacenamiento Docker."
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 bites de datos binarios]"
 ],
 "[binary data]": [
  null,
  "[datos binarios]"
 ],
 "[no data]": [
  null,
  "[no hay datos]"
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
  "clave"
 ],
 "none": [
  null,
  "ninguno"
 ],
 "search by name, namespace or description": [
  null,
  "buscar por nombre, espacio de nombres o descripción"
 ],
 "select container": [
  null,
  "seleccionar contenedor"
 ],
 "shares": [
  null,
  "comparticiones"
 ],
 "to host path": [
  null,
  "al trayecto de anfitrión"
 ],
 "to host port": [
  null,
  "al puerto anfitrión"
 ],
 "undefined": [
  null,
  "sin definir"
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
