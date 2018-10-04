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
 "$0 vCPU Details": [
  null,
  "$0 Detalles vCPU"
 ],
 "Add": [
  null,
  "Añadir"
 ],
 "Add Disk": [
  null,
  "Añadir disco"
 ],
 "Additional": [
  null,
  "Adicional"
 ],
 "Address": [
  null,
  "Dirección"
 ],
 "Address:": [
  null,
  "Dirección:"
 ],
 "All changes will take effect only after stopping and starting the VM.": [
  null,
  "Los cambios sólo tendrán efecto tras el reinicio de la MV."
 ],
 "Apply": [
  null,
  "Aplicar"
 ],
 "Attach permanently": [
  null,
  "Conectar permanentemente"
 ],
 "Automatically start libvirt on boot": [
  null,
  "Iniciar automáticamente libvirt en el arranque"
 ],
 "Autostart:": [
  null,
  "Auto inicio:"
 ],
 "Available": [
  null,
  "Disponible"
 ],
 "Boot Order:": [
  null,
  "Orden de Inicio:"
 ],
 "Bus": [
  null,
  "Bus"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "Fallo en la acción CHANGE NETWORK STATE"
 ],
 "CPU Type:": [
  null,
  "Tipo de CPU"
 ],
 "CREATE_AND_ATTACH_VOLUME action failed": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Capacity": [
  null,
  "Capacidad"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "Dar click en \"Lanzar Visor Remoto\" descargará un archivo con la extensión .vv y lo ejecutará $0."
 ],
 "Confirm deletion of $0": [
  null,
  "Confirma la eliminación de $0"
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
  ""
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
 "Create New VM": [
  null,
  "Crear Nueva VM"
 ],
 "Create New Virtual Machine": [
  null,
  "Crear una Nueva Máquina Virtual"
 ],
 "Creation of vm $0 failed": [
  null,
  "Creación de máquina virtual $0 falló"
 ],
 "Ctrl+Alt+Del": [
  null,
  ""
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
 "Disk failed to be attached with following error: ": [
  null,
  "No se pudo añadir el disco por el siguiente error: "
 ],
 "Disk failed to be created with following error: ": [
  null,
  "No se pudo crear el disco por el siguiente error: "
 ],
 "Disks": [
  null,
  "Discos"
 ],
 "Download the MSI from $0": [
  null,
  "Descargar el MSI desde $0"
 ],
 "Emulated Machine:": [
  null,
  "Maquina Emulada:"
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
  ""
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
 "Host Interface": [
  null,
  ""
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
 "MTU": [
  null,
  "MTU"
 ],
 "Managed": [
  null,
  "Manejado"
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
 "Memory:": [
  null,
  "Memoria:"
 ],
 "MiB": [
  null,
  "MiB"
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
 "Networks": [
  null,
  "Redes"
 ],
 "New Volume Name": [
  null,
  "Nuevo nombre de volumen"
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
 "OS Vendor": [
  null,
  "Proveedor de SO"
 ],
 "Ok": [
  null,
  "Aceptar"
 ],
 "Operating System": [
  null,
  "Sistema Operativo"
 ],
 "Overview": [
  null,
  "Visión conjunta"
 ],
 "Path to ISO file on host's file system": [
  null,
  "Ruta al fichero ISO en el sistema de archivos del host"
 ],
 "Path to file": [
  null,
  "Ruta al fichero"
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
 "Portgroup": [
  null,
  "Grupo de puertos"
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  ""
 ],
 "Protocol": [
  null,
  "Protocolo"
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
 "SET VCPU SETTINGS action failed": [
  null,
  ""
 ],
 "SET_VCPU_SETTINGS action failed": [
  null,
  ""
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
 "Send Non-Maskable Interrupt": [
  null,
  "Enviar Interrupción no Enmascarable"
 ],
 "Send key": [
  null,
  ""
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
 "Source should start with http, ftp or nfs protocol": [
  null,
  "La fuente debería empezar con http, ftp o protocolo nfs"
 ],
 "Start libvirt": [
  null,
  "Inicar libvirt"
 ],
 "Start the VM to see disk statistics.": [
  null,
  "Arranque el VM para ver las estadísticas de disco."
 ],
 "State": [
  null,
  "Estado"
 ],
 "Storage Size": [
  null,
  "Tamaño de Almacenamiento"
 ],
 "Storage Size should not be negative number": [
  null,
  "El Tamaño de Almacenamiento no puede ser un número negativo"
 ],
 "System": [
  null,
  "Sistema"
 ],
 "Target": [
  null,
  "Objetivo"
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
 "The pool is empty": [
  null,
  "El grupo está vacío"
 ],
 "Threads per cores": [
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
 "VM ATTACH_DISK action failed": [
  null,
  ""
 ],
 "VM CHANGE_NETWORK_STATE action failed": [
  null,
  ""
 ],
 "VM CHANGE_NETWORK_STATE action failed: updated device XML couldn't not be generated": [
  null,
  ""
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  ""
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  ""
 ],
 "VM DELETE action failed": [
  null,
  ""
 ],
 "VM DETACH action failed": [
  null,
  ""
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
  ""
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
 "Virtualport": [
  null,
  "Puerto Virtual"
 ],
 "Volume": [
  null,
  "Volumen"
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
  ""
 ],
 "vCPUs:": [
  null,
  "vCPUs:"
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
