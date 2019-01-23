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
  "x-generator": "Zanata 4.6.2"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 esta disponible para muchos sistemas operativos. Para instalarlo, búscalo en \"GNOME Software\" o ejecuta el siguiente comando:"
 ],
 "Add": [
  null,
  "Añadir"
 ],
 "Add Disk": [
  null,
  "Añadir disco"
 ],
 "Address": [
  null,
  "Dirección"
 ],
 "Address:": [
  null,
  "Dirección:"
 ],
 "Always attach": [
  null,
  "Siempre"
 ],
 "Apply": [
  null,
  "Aplicar"
 ],
 "Automatically start libvirt on boot": [
  null,
  "Iniciar automáticamente libvirt en el arranque"
 ],
 "Autostart": [
  null,
  "Auto inicio"
 ],
 "Available": [
  null,
  "Disponible"
 ],
 "Boot Order": [
  null,
  "Orden de Inicio"
 ],
 "Bus": [
  null,
  "Bus"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "Fallo en la acción CHANGE NETWORK STATE"
 ],
 "CPU Type": [
  null,
  "Tipo de CPU"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Capacity": [
  null,
  "Capacidad"
 ],
 "Changes will take effect after shutting down the VM": [
  null,
  "Los cambios entrarán en vigor después de apagar la máquina virtual"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "Dar click en \"Lanzar Visor Remoto\" descargará un archivo con la extensión .vv y lo ejecutará $0."
 ],
 "Connect with any $0 viewer application.": [
  null,
  "Conectar con alguna Aplicación para ver $0"
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "Conectar con alguna aplicación para ver SPICE o VNC"
 ],
 "Connecting": [
  null,
  "Conectando"
 ],
 "Connecting to Virtualization Service": [
  null,
  "Conectando al Servicio de Virtualización"
 ],
 "Connection": [
  null,
  "Conexión"
 ],
 "Console Type": [
  null,
  "Tipo de Consola"
 ],
 "Consoles": [
  null,
  "Consolas"
 ],
 "Cores per socket": [
  null,
  "Núcleos por socket"
 ],
 "Create": [
  null,
  "Crear"
 ],
 "Create New": [
  null,
  "Crear nuevo"
 ],
 "Create Storage Pool": [
  null,
  "Crear grupo de almacenamiento"
 ],
 "Create VM": [
  null,
  "Crear VM"
 ],
 "Creation of vm $0 failed": [
  null,
  "Creación de máquina virtual $0 falló"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "Delete": [
  null,
  "Eliminar"
 ],
 "Delete associated storage files:": [
  null,
  "Eliminar archivos de almacenamiento asociados:"
 ],
 "Device": [
  null,
  "Dispositivo"
 ],
 "Disconnect": [
  null,
  "Desconectar"
 ],
 "Disconnected": [
  null,
  "Desconectado"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  "Desconectado de la consola serie. Pulse el botón Reconectar."
 ],
 "Disk failed to be attached": [
  null,
  "Disco no se pudo adjuntar"
 ],
 "Disk failed to be created": [
  null,
  "Disco no se pudo crear"
 ],
 "Disks": [
  null,
  "Discos"
 ],
 "Download the MSI from $0": [
  null,
  "Descargar el MSI desde $0"
 ],
 "Edit": [
  null,
  "Editar"
 ],
 "Emulated Machine": [
  null,
  "Maquina Emulada"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Deben habilitarse menos CPU virtuales de las máximas."
 ],
 "File": [
  null,
  "Archivo"
 ],
 "Filesystem": [
  null,
  "Sistema de archivos"
 ],
 "Filesystem Directory": [
  null,
  "Directorio del sistema de archivos"
 ],
 "Force Restart": [
  null,
  "Forzar Reinicio"
 ],
 "Force Shut Down": [
  null,
  "Forzar Apagado"
 ],
 "Format": [
  null,
  "Formato"
 ],
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  "Falló la acción GET HYPERVISOR MAX VCPU"
 ],
 "GiB": [
  null,
  "GiB"
 ],
 "Graphics Console (VNC)": [
  null,
  "Consola Gráfica (VNC)"
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  "Consola Gráfica en Visualizador de Escritorio"
 ],
 "Host": [
  null,
  "Anfitrión"
 ],
 "Host Name": [
  null,
  "Nombre de Host"
 ],
 "Host should not be empty": [
  null,
  "El anfitrión no debe estar vacío"
 ],
 "INSTALL VM action failed": [
  null,
  "INSTALL VM acción fallada"
 ],
 "Immediately Start VM": [
  null,
  "Iniciar Inmediatamente VM"
 ],
 "Install": [
  null,
  "Instalar"
 ],
 "Installation Source": [
  null,
  "Fuente de la Instalación"
 ],
 "Installation Source Type": [
  null,
  "Tipo de Fuente de Instalación"
 ],
 "Installation Source should not be empty": [
  null,
  "La Fuente de Instalación no debería estar vacía"
 ],
 "Invalid filename": [
  null,
  "Nobre de fichero no válido"
 ],
 "Launch Remote Viewer": [
  null,
  "Lanzar Visualizador remoto"
 ],
 "Loading ...": [
  null,
  "Cargando ..."
 ],
 "MAC Address": [
  null,
  "Dirección MAC"
 ],
 "Mac Address": [
  null,
  "Dirección MAC"
 ],
 "Manual Connection": [
  null,
  "Conexión Manual"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "Número máximo de CPU virtuales asignadas al SO invitado, entre 1 y $0"
 ],
 "Memory": [
  null,
  "Memoria"
 ],
 "Memory should be positive number": [
  null,
  "La memoria debería ser un número positivo"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Model": [
  null,
  "Modelo"
 ],
 "Model type": [
  null,
  "Modelo tipo"
 ],
 "More Information": [
  null,
  "Mas información"
 ],
 "Name": [
  null,
  "Nombre"
 ],
 "Name should not be empty": [
  null,
  "El nombre no debería estar vacío"
 ],
 "Name should not consist of empty characters only": [
  null,
  "El nombre no debería constar solo de caracteres vacíos"
 ],
 "Network File System": [
  null,
  "Sistema de archivos de red"
 ],
 "Network Type": [
  null,
  "Tipo de red"
 ],
 "Network settings could not be saved": [
  null,
  "La configuración de red no se pudo guardar"
 ],
 "Networks": [
  null,
  "Redes"
 ],
 "New Volume Name": [
  null,
  "Nuevo nombre de volumen"
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "No hay volúmenes de almacenamiento definidos para este grupo de almacenamiento"
 ],
 "No VM is running or defined on this host": [
  null,
  "No hay ninguna MV en ejecución o definida en este anfitrión"
 ],
 "No boot device found": [
  null,
  "No encontrado dispositivo de arranque"
 ],
 "No console defined for this virtual machine.": [
  null,
  "No hay consola definida para esta máquina virtual."
 ],
 "No disks defined for this VM": [
  null,
  "No se han definido discos para esta VM"
 ],
 "No matching files found": [
  null,
  "No se han encontrado ficheros coincidentes"
 ],
 "No network interfaces defined for this VM": [
  null,
  "No se han definido interfaces de red para esta VM"
 ],
 "No storage pool is defined on this host": [
  null,
  "Ningún grupo de almacenamiento está definido en este host"
 ],
 "No virtual networks": [
  null,
  "No hay redes virtuales"
 ],
 "OS Vendor": [
  null,
  "Proveedor de SO"
 ],
 "Operating System": [
  null,
  "Sistema Operativo"
 ],
 "Overview": [
  null,
  "Visión conjunta"
 ],
 "Path on host's filesystem": [
  null,
  "Ruta en el sistema de archivos del host"
 ],
 "Path to ISO file on host's file system": [
  null,
  "Ruta al fichero ISO en el sistema de archivos del host"
 ],
 "Path to file": [
  null,
  "Ruta al fichero"
 ],
 "Persistence": [
  null,
  "Volúmenes persistentes"
 ],
 "Please enter new volume name": [
  null,
  "Introduzca el nuevo nombre de volumen"
 ],
 "Please enter new volume size": [
  null,
  "Introduzca el nuevo tamaño de volumen"
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Por favor arranque la maquina virtual para acceder a su consola."
 ],
 "Plug": [
  null,
  "Enchufe"
 ],
 "Pool": [
  null,
  "Grupo"
 ],
 "Port": [
  null,
  "Puerto"
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  "Número preferido de sockets para exponer al invitado."
 ],
 "Protocol": [
  null,
  "Protocolo"
 ],
 "QEMU/KVM System connection": [
  null,
  "Conexión del sistema QEMU / KVM"
 ],
 "QEMU/KVM User connection": [
  null,
  "Conexión de usuario QEMU / KVM"
 ],
 "Readonly": [
  null,
  "Sólo lectura"
 ],
 "Reconnect": [
  null,
  "Reconectarse"
 ],
 "Remote URL": [
  null,
  "URL Remota"
 ],
 "Restart": [
  null,
  "Reiniciar"
 ],
 "Run": [
  null,
  "Ejecutar"
 ],
 "SPICE": [
  null,
  "SPICE"
 ],
 "SPICE Address:": [
  null,
  "Dirección SPICE:"
 ],
 "SPICE Port:": [
  null,
  "Puerto SPICE:"
 ],
 "SPICE TLS Port:": [
  null,
  "Puerto SPICE TLS:"
 ],
 "Save": [
  null,
  "Guardar"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  "Enviar Interrupción no Enmascarable"
 ],
 "Send key": [
  null,
  "Tecla Enviar"
 ],
 "Serial Console": [
  null,
  "Consola Serie"
 ],
 "Session": [
  null,
  "Sesión"
 ],
 "Shut Down": [
  null,
  "Apagar"
 ],
 "Size": [
  null,
  "Tamaño"
 ],
 "Sockets": [
  null,
  "Sockets"
 ],
 "Source": [
  null,
  "Fuente"
 ],
 "Source Path": [
  null,
  "Dirección de origen"
 ],
 "Source path should not be empty": [
  null,
  "La ruta de origen no debe estar vacía"
 ],
 "Source should start with https, ftp or nfs protocol": [
  null,
  "La fuente debería empezar con http, ftp o protocolo nfs"
 ],
 "Start libvirt": [
  null,
  "Inicar libvirt"
 ],
 "Start pool when host boots": [
  null,
  "Empezar el pool cuando el host arranque."
 ],
 "Start the VM to see disk statistics.": [
  null,
  "Arranque el VM para ver las estadísticas de disco."
 ],
 "Startup": [
  null,
  "Puesta en marcha"
 ],
 "State": [
  null,
  "Estado"
 ],
 "Storage Pool Name": [
  null,
  "Nombre del grupo de almacenamiento"
 ],
 "Storage Pool failed to be created": [
  null,
  "No se pudo crear la agrupación de almacenamiento"
 ],
 "Storage Pools": [
  null,
  "Piscinas de almacenamiento"
 ],
 "Storage Size": [
  null,
  "Tamaño de Almacenamiento"
 ],
 "Storage Size should not be negative number": [
  null,
  "El Tamaño de Almacenamiento no puede ser un número negativo"
 ],
 "Storage Volumes": [
  null,
  "Volúmenes de almacenamiento"
 ],
 "System": [
  null,
  "Sistema"
 ],
 "Target Path": [
  null,
  "Ruta de destino"
 ],
 "Target path should not be empty": [
  null,
  "La ruta de destino no debe estar vacía"
 ],
 "The VM crashed.": [
  null,
  "El VM se ha roto."
 ],
 "The VM is down.": [
  null,
  "El VM está abajo."
 ],
 "The VM is going down.": [
  null,
  "El VM está cayendo."
 ],
 "The VM is idle.": [
  null,
  "La VM está ocioso."
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  "La VM está moribundo (el apagado o la caída no se ha completado)."
 ],
 "The VM is paused.": [
  null,
  "La VM está pausado."
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  "La VM está corriendo y se forzará antes de la eliminación."
 ],
 "The VM is running.": [
  null,
  "La VM está corriendo."
 ],
 "The VM is suspended by guest power management.": [
  null,
  "La VM está suspendida por la administración de energía de los invitados."
 ],
 "The directory on the server being exported": [
  null,
  "El directorio en el servidor que se está exportando."
 ],
 "The pool is empty": [
  null,
  "El grupo está vacío"
 ],
 "Threads per core": [
  null,
  "Hilos por núcleo"
 ],
 "Too many files found": [
  null,
  "Encontrados demasiados archivos"
 ],
 "Troubleshoot": [
  null,
  "Soporte"
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unique name": [
  null,
  "Nombre único"
 ],
 "Unplug": [
  null,
  "Desenchufar"
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  "Actualizar a una versión más reciente de libvirt para visualizar estadísticas de disco"
 ],
 "Usage": [
  null,
  "Utilización"
 ],
 "Use Existing": [
  null,
  "Usar existente"
 ],
 "Used": [
  null,
  "Usado"
 ],
 "VCPU settings could not be saved": [
  null,
  "La configuración de VCPU no se pudo guardar"
 ],
 "VM CHANGE_NETWORK_STATE action failed": [
  null,
  "La acción de VM CHANGE_NETWORK_STATE falló"
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  "La acción VM DELETE (DESTROY) falló"
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  "La acción VM DELETE (UNDEFINE) falló"
 ],
 "VM DELETE action failed": [
  null,
  "La acción VM BORRAR falló"
 ],
 "VM DETACH_DISK action failed": [
  null,
  "Error en la acción de DETACH_DISK de la VM"
 ],
 "VM FORCE OFF action failed": [
  null,
  "VM FORCE OFF falló acción"
 ],
 "VM FORCE REBOOT action failed": [
  null,
  "VM FORCE REBOOT falló acción"
 ],
 "VM REBOOT action failed": [
  null,
  "VM REBOOT falló acción"
 ],
 "VM SEND Non-Maskable Interrrupt action failed": [
  null,
  "VM SEND Non-Maskable Interrrupt falló acción"
 ],
 "VM SENDNMI action failed": [
  null,
  "La acción de VM SENDNMI falló"
 ],
 "VM SHUT DOWN action failed": [
  null,
  "VM SHUT DOWN falló acción"
 ],
 "VM START action failed": [
  null,
  "VM START falló acción"
 ],
 "VNC": [
  null,
  "VNC"
 ],
 "VNC Address:": [
  null,
  "Dirección VNC:"
 ],
 "VNC Port:": [
  null,
  "Puerto VNC:"
 ],
 "VNC TLS Port:": [
  null,
  "Puerto VNC TLS:"
 ],
 "Virtual Machines": [
  null,
  "Máquinas Virtuales"
 ],
 "Virtualization Service (libvirt) is Not Active": [
  null,
  "Servicio de Virtualización (libvirt) No Está Activo"
 ],
 "Virtualization Service is Available": [
  null,
  "El Servicio de Virtualización Está Disponible"
 ],
 "Volume": [
  null,
  "Volumen"
 ],
 "active": [
  null,
  "activo"
 ],
 "bridge": [
  null,
  "puente"
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "crashed": [
  null,
  "estrellado"
 ],
 "custom": [
  null,
  "personal"
 ],
 "direct": [
  null,
  "directo"
 ],
 "disabled": [
  null,
  "desactivado"
 ],
 "disk": [
  null,
  "disco"
 ],
 "down": [
  null,
  "abajo"
 ],
 "dying": [
  null,
  "agonizante"
 ],
 "enabled": [
  null,
  "activado"
 ],
 "ethernet": [
  null,
  "ethernet"
 ],
 "host": [
  null,
  "huésped"
 ],
 "hostdev": [
  null,
  "hostdev"
 ],
 "idle": [
  null,
  "inactivo"
 ],
 "inactive": [
  null,
  "inactivo"
 ],
 "mcast": [
  null,
  "mcast"
 ],
 "network": [
  null,
  "red"
 ],
 "no": [
  null,
  "no"
 ],
 "other": [
  null,
  "otro"
 ],
 "paused": [
  null,
  "en pausa"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
 ],
 "running": [
  null,
  "en ejecución"
 ],
 "server": [
  null,
  "servidor"
 ],
 "show less": [
  null,
  "mostrar menos"
 ],
 "show more": [
  null,
  "mostrar más"
 ],
 "shut off": [
  null,
  "apagar"
 ],
 "shutdown": [
  null,
  "apagar"
 ],
 "suspended (PM)": [
  null,
  "suspendido (PM)"
 ],
 "udp": [
  null,
  "udp"
 ],
 "undefined": [
  null,
  "sin definir"
 ],
 "up": [
  null,
  "arriba"
 ],
 "user": [
  null,
  "usuario"
 ],
 "vCPU Count": [
  null,
  "Conteo de CPU virtuales"
 ],
 "vCPU Maximum": [
  null,
  "vCPU maximo"
 ],
 "vCPUs": [
  null,
  "vCPUs"
 ],
 "vhostuser": [
  null,
  "vhostuser"
 ],
 "yes": [
  null,
  "sí"
 ]
}));
