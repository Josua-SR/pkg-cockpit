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
 "$0 Block Device": [
  null,
  "$0 Dispositivo de Bloque"
 ],
 "$0 Chunk Size": [
  null,
  "$0 tamaño del Chunk "
 ],
 "$0 Disks": [
  null,
  "$0 Discos"
 ],
 "$0 day": [
  "$0 days",
  "$0 días",
  "$0 días"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 discos han desaparecido",
  "$0 discos han desaparecido"
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
 "$0 of $1": [
  null,
  "$0 de $1"
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
 "$0, $1 free": [
  null,
  "$0, $1 disponible"
 ],
 "$name (from $host)": [
  null,
  "$name (de $host)"
 ],
 "(default)": [
  null,
  "(por defecto)"
 ],
 "(none)": [
  null,
  "(ninguno)"
 ],
 "1 MiB": [
  null,
  "1 MB"
 ],
 "1 day": [
  null,
  "1 día"
 ],
 "1 hour": [
  null,
  "1 hora"
 ],
 "1 week": [
  null,
  "1 semana"
 ],
 "128 KiB": [
  null,
  "128 KBs"
 ],
 "16 KiB": [
  null,
  "16 KBs"
 ],
 "2 MiB": [
  null,
  "2 MB"
 ],
 "32 KiB": [
  null,
  "32 KBs"
 ],
 "4 KiB": [
  null,
  "4 KBs"
 ],
 "5 minutes": [
  null,
  "5 minutos"
 ],
 "512 KiB": [
  null,
  "512 KBs"
 ],
 "6 hours": [
  null,
  "6 horas"
 ],
 "64 KiB": [
  null,
  "64 KBs"
 ],
 "8 KiB": [
  null,
  "8 KBs"
 ],
 "<span>Encrypted $0</span>": [
  null,
  "<span>Encriptado $0</span>"
 ],
 "<span>Encrypted Logical Volume of $0</span>": [
  null,
  "<span>Volumen Lógico Encriptado de $0</span>"
 ],
 "<span>Encrypted Partition of $0</span>": [
  null,
  "<span>Partición Encriptada de $0</span>"
 ],
 "<span>Logical Volume of $0</span>": [
  null,
  "<span>Volumen Lógico de $0</span>"
 ],
 "<span>Partition of $0</span>": [
  null,
  "<span>Partición de $0</span>"
 ],
 "Activate": [
  null,
  "Activar"
 ],
 "Activating $target": [
  null,
  "Activando $target"
 ],
 "Add": [
  null,
  "Agregar"
 ],
 "Add Disks": [
  null,
  "Añadir Discos"
 ],
 "Add iSCSI Portal": [
  null,
  "Agregar portal iSCSI"
 ],
 "Adding physical volume to $target": [
  null,
  "Agregando volumen físico a $target"
 ],
 "Address": [
  null,
  "Dirección"
 ],
 "Apply": [
  null,
  "Aplicar"
 ],
 "At least $0 disks are needed.": [
  null,
  "Se necesitan al menos $0 discos."
 ],
 "At least one disk is needed.": [
  null,
  "Se necesita al menos un disco."
 ],
 "Authentication required": [
  null,
  ""
 ],
 "Available targets on $0": [
  null,
  "Objetivos disponibles en $0"
 ],
 "Block Device": [
  null,
  "Dispositivo de Bloque"
 ],
 "Block device for filesystems": [
  null,
  ""
 ],
 "Blocked": [
  null,
  "Bloqueado"
 ],
 "Can't delete while unlocked": [
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
 "Change iSCSI Initiator Name": [
  null,
  "Cambiar Nombre Iniciador de iSCSI "
 ],
 "Checking RAID Device $target": [
  null,
  ""
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  ""
 ],
 "Chunk Size": [
  null,
  "Tamaño de la porción"
 ],
 "Cleaning up for $target": [
  null,
  "Limpiando por $target"
 ],
 "Close": [
  null,
  "Cerrar"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "Compatible con todos los sistemas y dispositivos (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "Compatible con los sistemas modernos y discos duros > 2TB (GPT)"
 ],
 "Confirm passphrase": [
  null,
  "Confirmar palabra de paso"
 ],
 "Content": [
  null,
  "Contenido"
 ],
 "Create": [
  null,
  "Crear"
 ],
 "Create Logical Volume": [
  null,
  "Crear un volumen logico"
 ],
 "Create Partition": [
  null,
  "Crear Partición"
 ],
 "Create RAID Device": [
  null,
  "Crear Dispositivo RAID"
 ],
 "Create Snapshot": [
  null,
  "Crear Instantánea"
 ],
 "Create Thin Volume": [
  null,
  "Crear Volumen Delgado"
 ],
 "Create Volume Group": [
  null,
  "Crear un Grupo de Volúmenes"
 ],
 "Create new Logical Volume": [
  null,
  ""
 ],
 "Create partition": [
  null,
  "Crear partición"
 ],
 "Create partition on $0": [
  null,
  "Crear partición en $0"
 ],
 "Create partition table": [
  null,
  "Crear tabla de particiones"
 ],
 "Creating RAID Device $target": [
  null,
  "Creando dispositivo RAID $target"
 ],
 "Creating filesystem on $target": [
  null,
  "Creando sistema de archivos en $target"
 ],
 "Creating logical volume $target": [
  null,
  "Creando  Volumen Lógico $target"
 ],
 "Creating partition $target": [
  null,
  "Creando partición $target"
 ],
 "Creating snapshot of $target": [
  null,
  "Creando una imagne de $target"
 ],
 "Creating volume group $target": [
  null,
  "Creando Grupo de Volumen $target"
 ],
 "Custom": [
  null,
  "Personalizar"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "Personalizado (Ingrese el sistema de archivos)"
 ],
 "DISK IS FAILING": [
  null,
  "DISCO ESTÁ FALLANDO"
 ],
 "Data Used": [
  null,
  ""
 ],
 "Deactivate": [
  null,
  "Desactivar"
 ],
 "Deactivating $target": [
  null,
  "Desactivando $target"
 ],
 "Default": [
  null,
  "Predeterminado"
 ],
 "Delete": [
  null,
  "Eliminar"
 ],
 "Deleting $target": [
  null,
  "Eliminando $target"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "Eliminar un dispositivo RAID borrará toda la información en el."
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "Eliminar un volumen lógico borrará toda la información en el."
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "Eliminar una partición borrará toda la información en el."
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "Eliminar un grupo de volúmenes borrará toda la información en el."
 ],
 "Deleting volume group $target": [
  null,
  "Borrando Grupo de Volumen $target"
 ],
 "Device $0 is a member of RAID Array $1": [
  null,
  "Dispositivo $0 es un miembro del Arreglo RAID $1"
 ],
 "Device $0 is a physical volume of $1": [
  null,
  "Dispositivo $0 es un volumen físico de $1"
 ],
 "Device $0 is mounted on $1": [
  null,
  "Dispositivo $0 está montado en $1"
 ],
 "Device is read-only": [
  null,
  ""
 ],
 "Disk is OK": [
  null,
  "Disco está OK"
 ],
 "Disks": [
  null,
  "Discos"
 ],
 "Don't overwrite existing data": [
  null,
  "No sobreescribir los datos existentes"
 ],
 "Drive": [
  null,
  "Disco"
 ],
 "Drives": [
  null,
  "Discos"
 ],
 "Edit": [
  null,
  ""
 ],
 "Ejecting $target": [
  null,
  "Expulsando $target"
 ],
 "Emptying $target": [
  null,
  "Eliminando el contenido de $target"
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "Encriptado EXT4 (LUKS)"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "Encriptado XFS (LUKS)"
 ],
 "Encryption": [
  null,
  ""
 ],
 "Encryption Options": [
  null,
  "Opciones de cifrado"
 ],
 "Erase": [
  null,
  "Borrar"
 ],
 "Erasing $target": [
  null,
  "Borrando $target"
 ],
 "Error": [
  null,
  "Error"
 ],
 "Extended Partition": [
  null,
  "Partición Extendida"
 ],
 "FAILED": [
  null,
  "Fallido"
 ],
 "Filesystem": [
  null,
  ""
 ],
 "Filesystem Mounting": [
  null,
  ""
 ],
 "Filesystem Name": [
  null,
  ""
 ],
 "Filesystem type": [
  null,
  "Tipo de sistema de archivos"
 ],
 "Filesystems": [
  null,
  "Archivos del sistema"
 ],
 "Format": [
  null,
  "Formato"
 ],
 "Format $0": [
  null,
  "Formatear $0"
 ],
 "Format Disk $0": [
  null,
  "Formatear Disco $0"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "Formatear un disco eliminará todos los datos en el."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "Formatear un dispositivo de almacenamiento eliminará todos los datos en el."
 ],
 "Free": [
  null,
  "Libre"
 ],
 "Free Space": [
  null,
  ""
 ],
 "Go to now": [
  null,
  "Ir a ahora"
 ],
 "In Sync": [
  null,
  "En Sincronía"
 ],
 "Inactive volume": [
  null,
  ""
 ],
 "Invalid username or password": [
  null,
  "Nombre de usuario o contraseña invalidos"
 ],
 "Jobs": [
  null,
  "Trabajos"
 ],
 "Lock": [
  null,
  "Bloquear"
 ],
 "Locking $target": [
  null,
  "Bloquendo $target"
 ],
 "Logical Volume": [
  null,
  "Volumen Lógico"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "Volumen Lógico(Captura)"
 ],
 "Marking $target as faulty": [
  null,
  "Marcando $target como fallado"
 ],
 "Member of RAID Device": [
  null,
  ""
 ],
 "Member of RAID Device $0": [
  null,
  ""
 ],
 "Metadata Used": [
  null,
  ""
 ],
 "Modifying $target": [
  null,
  "Modificando $target"
 ],
 "Mount": [
  null,
  "Montar"
 ],
 "Mount Options": [
  null,
  "Opciones de Montaje"
 ],
 "Mount Point": [
  null,
  "Punto de Montaje"
 ],
 "Mounted At": [
  null,
  ""
 ],
 "Mounting": [
  null,
  "Montando"
 ],
 "Mounting $target": [
  null,
  "Montando $target"
 ],
 "NTFS - Compatible with most systems": [
  null,
  "NTFS - Compatible con la mayoría de los sistemas"
 ],
 "Name": [
  null,
  "Nombre"
 ],
 "Name cannot be empty.": [
  null,
  ""
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  ""
 ],
 "Name cannot contain the character '$0'.": [
  null,
  ""
 ],
 "Name cannot contain whitespace.": [
  null,
  ""
 ],
 "Next": [
  null,
  "Siguiente"
 ],
 "No Filesystem": [
  null,
  "Ningún Sistema de Archivos"
 ],
 "No Logical Volumes": [
  null,
  ""
 ],
 "No drives attached": [
  null,
  "No hay dispositivos adjuntos"
 ],
 "No free space": [
  null,
  ""
 ],
 "No iSCSI targets set up": [
  null,
  ""
 ],
 "No media inserted": [
  null,
  "No hay media insertada"
 ],
 "No partitioning": [
  null,
  "No particionar"
 ],
 "No storage set up as RAID": [
  null,
  ""
 ],
 "No volume groups created": [
  null,
  ""
 ],
 "Not found": [
  null,
  "No encontrado"
 ],
 "Not running": [
  null,
  "No esta corriendo"
 ],
 "Off": [
  null,
  "Apagado"
 ],
 "On": [
  null,
  "Encencido"
 ],
 "Operation '$operation' on $target": [
  null,
  "Actividad '$operation' en $target"
 ],
 "Options": [
  null,
  "Opciones"
 ],
 "Other Devices": [
  null,
  "Otros dispositivos"
 ],
 "Overwrite existing data with zeros": [
  null,
  "Sobreescribir los datos existentes con ceros"
 ],
 "Partition": [
  null,
  "Partición"
 ],
 "Partitioning": [
  null,
  "Particionamiento"
 ],
 "Passphrase": [
  null,
  "Palabra de paso"
 ],
 "Passphrase cannot be empty": [
  null,
  ""
 ],
 "Passphrases do not match": [
  null,
  "Palabra de paso no coincide"
 ],
 "Password": [
  null,
  "Contraseña"
 ],
 "Physical Volume": [
  null,
  ""
 ],
 "Physical Volumes": [
  null,
  "Volúmenea Físicos"
 ],
 "Physical volume of $0": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  "Por favor confirmar la eliminación de $0"
 ],
 "Pool": [
  null,
  ""
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "Reserva para Volúmenes Lógicos Delgados"
 ],
 "Pool for Thin Volumes": [
  null,
  ""
 ],
 "Pool for thinly provisioned volumes": [
  null,
  ""
 ],
 "Port": [
  null,
  "Puerto"
 ],
 "Purpose": [
  null,
  "Proposito"
 ],
 "RAID ($0)": [
  null,
  "RAID ($0)"
 ],
 "RAID 0": [
  null,
  "RAID 0"
 ],
 "RAID 0 (Stripe)": [
  null,
  "RAID 0 (Stripe)"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (Espejo)"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RAID 10 (Arreglo de espejos)"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (Paridad Dedicada)"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (Paridad Distribuida)"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (Doble Paridad Distribuida)"
 ],
 "RAID Device": [
  null,
  "Dispositivo RAID"
 ],
 "RAID Device $0": [
  null,
  "Dispositivo RAID $0"
 ],
 "RAID Devices": [
  null,
  "Dispositivos RAID"
 ],
 "RAID Level": [
  null,
  "Nivel RAID"
 ],
 "RAID Member": [
  null,
  ""
 ],
 "Reading": [
  null,
  "Leyendo"
 ],
 "Reboot": [
  null,
  "Reiniciar"
 ],
 "Recovering": [
  null,
  "Recuperando"
 ],
 "Recovering RAID Device $target": [
  null,
  ""
 ],
 "Removing $target from RAID Device": [
  null,
  "Removiendo $target del Dispositivo RAID"
 ],
 "Removing physical volume from $target": [
  null,
  "Eliminando volumen físico de $target"
 ],
 "Rename": [
  null,
  "Renombrar"
 ],
 "Rename Logical Volume": [
  null,
  ""
 ],
 "Rename Volume Group": [
  null,
  "Renombrar Grupo de Volumen"
 ],
 "Renaming $target": [
  null,
  "Renombrando $target"
 ],
 "Resize": [
  null,
  "Redimensionar"
 ],
 "Resize Filesystem": [
  null,
  "Redimensionar Sistema de Archivos"
 ],
 "Resize Logical Volume": [
  null,
  "Redimensionar Volumen Lógico"
 ],
 "Resizing $target": [
  null,
  "Redimencionando $target"
 ],
 "Running": [
  null,
  "Corriendo"
 ],
 "SMART self-test of $target": [
  null,
  "SMART auto-diagnóstico de $target"
 ],
 "Securely erasing $target": [
  null,
  "Borrando de forma segura $target"
 ],
 "Server Address": [
  null,
  "Dirección del Servidor"
 ],
 "Server address cannot be empty.": [
  null,
  ""
 ],
 "Setting up loop device $target": [
  null,
  "Configurando dispositivo de retorno $target"
 ],
 "Size": [
  null,
  "Tamaño"
 ],
 "Size cannot be negative": [
  null,
  ""
 ],
 "Size cannot be zero": [
  null,
  ""
 ],
 "Size is too large": [
  null,
  "Tamaño es muy grande"
 ],
 "Size must be a number": [
  null,
  "Tamaña debe ser un número"
 ],
 "Spare": [
  null,
  "Libre"
 ],
 "Start": [
  null,
  "Iniciar"
 ],
 "Start Multipath": [
  null,
  ""
 ],
 "Start Scrubbing": [
  null,
  "Iniciar Borrado"
 ],
 "Starting RAID Device $target": [
  null,
  "Iniciando dispositivo RAID $target"
 ],
 "Starting swapspace $target": [
  null,
  "Iniciando espacio de swap $target"
 ],
 "Stop": [
  null,
  "Detener"
 ],
 "Stop Scrubbing": [
  null,
  "Detener Borrado"
 ],
 "Stopping RAID Device $target": [
  null,
  "Deteniendo dispositivo RAID $target"
 ],
 "Stopping swapspace $target": [
  null,
  "Deteniendo espacio de swap $target"
 ],
 "Storage": [
  null,
  "Almacenamiento"
 ],
 "Storage Log": [
  null,
  ""
 ],
 "Storage Logs": [
  null,
  "Bitácoras de Almacenamiento"
 ],
 "Store passphrase": [
  null,
  "Guardar palabra de paso"
 ],
 "Stored Passphrase": [
  null,
  "Frase de paso guardada"
 ],
 "Stored passphrase": [
  null,
  ""
 ],
 "Swap": [
  null,
  ""
 ],
 "Synchronizing RAID Device $target": [
  null,
  ""
 ],
 "Targets": [
  null,
  "Objetivos"
 ],
 "The \"storaged\" API is not available on this system.": [
  null,
  ""
 ],
 "The RAID Array is in a degraded state": [
  null,
  ""
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "Al usuario <b>$0</b> no le es permitido administrar el almacenamiento "
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  ""
 ],
 "There is not enough free space elsewhere to remove this physical volume.  At least $0 more free space is needed.": [
  null,
  ""
 ],
 "Thin Logical Volume": [
  null,
  "Volumen Lógico Delgado"
 ],
 "This logical volume cannot be made smaller.": [
  null,
  ""
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "UUID": [
  null,
  ""
 ],
 "Unable to reach server": [
  null,
  "Imposible conectar al servidor"
 ],
 "Unknown": [
  null,
  "Desconocido"
 ],
 "Unknown ($0)": [
  null,
  "Desconocido ($0)"
 ],
 "Unknown host name": [
  null,
  "Nombre de host desconocido "
 ],
 "Unlock": [
  null,
  "Desbloquear"
 ],
 "Unlocking $target": [
  null,
  "Desbloquendo $target"
 ],
 "Unmount": [
  null,
  "Desmontar"
 ],
 "Unmounting $target": [
  null,
  "Desmontando $target"
 ],
 "Unrecognized Data": [
  null,
  ""
 ],
 "Unsupported volume": [
  null,
  ""
 ],
 "Usage": [
  null,
  ""
 ],
 "Used": [
  null,
  "Usado"
 ],
 "Username": [
  null,
  ""
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  "VFAT - Compatible con todos los sistemas y dispositivos"
 ],
 "Very securely erasing $target": [
  null,
  "Borrando de forma muy segura $target"
 ],
 "Volume": [
  null,
  ""
 ],
 "Volume Group": [
  null,
  "Grupo de Volúmenes"
 ],
 "Volume Group $0": [
  null,
  "Grupo de volúmenes $0 "
 ],
 "Volume Groups": [
  null,
  ""
 ],
 "Write-mostly": [
  null,
  "Escribir casi todo"
 ],
 "Writing": [
  null,
  "Escribiendo"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS - Red Hat Enterprise Linux 7 Predeterminado"
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
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4 - Red Hat Enterprise Linux 6 Predeterminado"
 ],
 "iSCSI Targets": [
  null,
  ""
 ],
 "unknown target": [
  null,
  "destino u objetivo desconocido"
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 Sistema de Archivos"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  ""
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "Otros datos"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "Espacio de intercambio"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "Dato desnocnocido"
 ],
 "storage\u0004Assessment": [
  null,
  "Evaluación"
 ],
 "storage\u0004Bitmap": [
  null,
  "Mapa de bits"
 ],
 "storage\u0004Capacity": [
  null,
  "Capacidad"
 ],
 "storage\u0004Device": [
  null,
  "Dispositivo"
 ],
 "storage\u0004Device File": [
  null,
  "Dispositivo de Fichero"
 ],
 "storage\u0004Drive": [
  null,
  "Unidad"
 ],
 "storage\u0004Firmware Version": [
  null,
  "Versión de Firmware"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Disco Duro"
 ],
 "storage\u0004Model": [
  null,
  "Modelo"
 ],
 "storage\u0004Multipathed Devices": [
  null,
  "Dispositivos Multipathed"
 ],
 "storage\u0004Optical Drive": [
  null,
  "Disco Óptico"
 ],
 "storage\u0004RAID Level": [
  null,
  "Nivel de RAID"
 ],
 "storage\u0004Removable Drive": [
  null,
  "Disco Removible"
 ],
 "storage\u0004Serial Number": [
  null,
  "Número de serial"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "Disco en Estado Sólido"
 ],
 "storage\u0004State": [
  null,
  "Estado"
 ],
 "storage\u0004UUID": [
  null,
  "UUID"
 ],
 "storage\u0004World Wide Name": [
  null,
  "World Wide Name"
 ],
 "format-bytes\u0004bytes": [
  null,
  "bytes"
 ]
}));
