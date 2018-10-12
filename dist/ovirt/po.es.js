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
 "Action": [
  null,
  "Acción"
 ],
 "Add": [
  null,
  "Añadir"
 ],
 "Add Disk": [
  null,
  "Añadir disco"
 ],
 "Address:": [
  null,
  "Dirección:"
 ],
 "All changes will take effect only after stopping and starting the VM.": [
  null,
  "Los cambios sólo tendrán efecto tras el reinicio de la MV."
 ],
 "All running virtual machines will be turned off.": [
  null,
  "Todas las máquinas virtuales corriendo serán apagadas."
 ],
 "Apply": [
  null,
  "Aplicar"
 ],
 "Attach permanently": [
  null,
  "Conectar permanentemente"
 ],
 "Automatically selected host": [
  null,
  "Host seleccionado automáticamente"
 ],
 "Autostart:": [
  null,
  "Auto inicio:"
 ],
 "Available": [
  null,
  "Disponible"
 ],
 "Base Template": [
  null,
  "Plantilla Base"
 ],
 "Base template": [
  null,
  "Plantilla base"
 ],
 "Base template:": [
  null,
  "Plantilla base:"
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
 "CREATE VM action failed": [
  null,
  "Fallo en la acción CREATE VM"
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
 "Cluster": [
  null,
  "Cluster"
 ],
 "Cluster Templates": [
  null,
  "Plantilla de Cluster"
 ],
 "Cluster Virtual Machines": [
  null,
  "Cluster de Máquinas Virtuales"
 ],
 "Confirm deletion of $0": [
  null,
  "Confirma la eliminación de $0"
 ],
 "Confirm migration": [
  null,
  "Confirme migración"
 ],
 "Confirm reload:": [
  null,
  "Confirme recarga:"
 ],
 "Confirm save:": [
  null,
  "Confirme guardar:"
 ],
 "Connect to oVirt Engine": [
  null,
  "Conectar a oVirt Engine"
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
 "Create VM": [
  null,
  "Crear VM"
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
 "Description": [
  null,
  "Descripción "
 ],
 "Description:": [
  null,
  "Descripción:"
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
 "Edit the vdsm.conf": [
  null,
  "Editar vdsm.conf"
 ],
 "Emulated Machine:": [
  null,
  "Maquina Emulada:"
 ],
 "Enter New VM name": [
  null,
  "Introducir Nuevo nombre de VM"
 ],
 "FQDN": [
  null,
  "FQDN"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Deben habilitarse menos CPU virtuales de las máximas."
 ],
 "File": [
  null,
  "Archivo"
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
 "HA": [
  null,
  "HA"
 ],
 "HA:": [
  null,
  "HA:"
 ],
 "Host": [
  null,
  "Anfitrión"
 ],
 "Host to Maintenance": [
  null,
  "Host para Mantenimiento"
 ],
 "INSTALL VM action failed": [
  null,
  "INSTALL VM acción fallada"
 ],
 "Install": [
  null,
  "Instalar"
 ],
 "Launch Remote Viewer": [
  null,
  "Lanzar Visualizador remoto"
 ],
 "Loading ...": [
  null,
  "Cargando ..."
 ],
 "Loading data ...": [
  null,
  "Cargando datos ..."
 ],
 "MIGRATE action failed": [
  null,
  "Fallo en acción MIGRATE"
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
 "Memory:": [
  null,
  "Memoria:"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Migrate To:": [
  null,
  "Migrar A:"
 ],
 "More Information": [
  null,
  "Mas información"
 ],
 "Name": [
  null,
  "Nombre"
 ],
 "Networks": [
  null,
  "Redes"
 ],
 "New Volume Name": [
  null,
  "Nuevo nombre de volumen"
 ],
 "No VM found in oVirt.": [
  null,
  "Mo se ha encontrado VM en oVirt."
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
 "No oVirt connection": [
  null,
  "Sin conexión oVirt"
 ],
 "Number of virtual CPUs that gonna be used.": [
  null,
  "Número de CPU virtuales que se usarán."
 ],
 "OK": [
  null,
  "OK"
 ],
 "OS": [
  null,
  "SO"
 ],
 "OS Type:": [
  null,
  "Tipo de SO:"
 ],
 "Ok": [
  null,
  "Aceptar"
 ],
 "Optimized for:": [
  null,
  "Optimizado para:"
 ],
 "Overview": [
  null,
  "Visión conjunta"
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  "Por favor confirme que el host será conmutado a modo mantenimiento."
 ],
 "Please enter new volume name": [
  null,
  "Introduzca el nuevo nombre de volumen"
 ],
 "Please enter new volume size": [
  null,
  "Introduzca el nuevo tamaño de volumen"
 ],
 "Please provide fully qualified domain name and port of the oVirt engine.": [
  null,
  "Por favor suministre el nombre completo de dominio y el puerto de la máquina oVirt."
 ],
 "Please provide valid oVirt engine fully qualified domain name (FQDN) and port (443 by default)": [
  null,
  "Por favor suministre un nombre de dominio totalmente cualificado (FQDN) de la máquina oVirt y puerto (443 por defecto)"
 ],
 "Please refer to oVirt's $0 for more information about Remote Viewer setup.": [
  null,
  "Por favor vea $0 de oVirt para más información sobre el ajuste del Visualizador Remoto."
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Por favor arranque la maquina virtual para acceder a su consola."
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  "Por favor espere hasta que la lista VMs se cargue desde el servidor."
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  "Por favor espere hasta que la lista de plantilla se cargue desde el servidor."
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
  ""
 ],
 "Preparing for Maintenance": [
  null,
  "Preparando para Mantenimiento"
 ],
 "Protocol": [
  null,
  "Protocolo"
 ],
 "REBOOT action failed": [
  null,
  "REBOOT falló acción"
 ],
 "Readonly": [
  null,
  "Sólo lectura"
 ],
 "Reconnect": [
  null,
  "Reconectarse"
 ],
 "Register oVirt": [
  null,
  "Registrar oVirt"
 ],
 "Registering oVirt to Cockpit": [
  null,
  "Registrando oVirt a Cockpit"
 ],
 "Reload": [
  null,
  "Recargar"
 ],
 "Restart": [
  null,
  "Reiniciar"
 ],
 "Run": [
  null,
  "Ejecutar"
 ],
 "Run Here": [
  null,
  "Ejecutar Aquí"
 ],
 "Running Since:": [
  null,
  "Ejecutando Desde:"
 ],
 "SET VCPU SETTINGS action failed": [
  null,
  ""
 ],
 "SHUTDOWN action failed": [
  null,
  "SHUTDOWN acción fallada"
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
 "START action failed": [
  null,
  "START acción fallada"
 ],
 "SUSPEND action failed": [
  null,
  "SUSPEND acción fallada"
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
 "Start the VM to see disk statistics.": [
  null,
  "Arranque el VM para ver las estadísticas de disco."
 ],
 "State": [
  null,
  "Estado"
 ],
 "Stateless": [
  null,
  "Sin estado"
 ],
 "Stateless:": [
  null,
  "Sin estado:"
 ],
 "Suspend": [
  null,
  "Suspendido"
 ],
 "Switch Host to Maintenance": [
  null,
  "Conmutar el Host para Mantenimiento"
 ],
 "Switching host to maintenance mode failed. Received error: ": [
  null,
  "La conmutación del host para modo de mantenimiento fallo. Error recibido:"
 ],
 "Switching host to maintenance mode in progress ...": [
  null,
  "La conmutación del host a modo mantenimiento progresando..."
 ],
 "System": [
  null,
  "Sistema"
 ],
 "Target": [
  null,
  "Objetivo"
 ],
 "Template": [
  null,
  "Plantilla"
 ],
 "Templates": [
  null,
  "Plantillas"
 ],
 "Templates of $0 cluster": [
  null,
  "Plantilla de cluster $0"
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
 "This host is managed by a virtualization manager, so creation of new VMs from the host is not possible.": [
  null,
  "Este host está gestionado por un gestor de virtualización de modo que la creación de nuevas VMs desde este host no es posible."
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  "Esta máquina virtual no está gestionada por oVirt"
 ],
 "Threads per cores": [
  null,
  "Hilos por núcleo"
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
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "Gestión de Servicio VDSM"
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  ""
 ],
 "VM DELETE (UNDEFINE) action failed": [
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
 "VM SHUT DOWN action failed": [
  null,
  "VM SHUT DOWN falló acción"
 ],
 "VM START action failed": [
  null,
  "VM START falló acción"
 ],
 "VM icon": [
  null,
  "Icono VM"
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
 "Version": [
  null,
  "Versión"
 ],
 "Version num": [
  null,
  "Número de Versión"
 ],
 "Virtual Machines": [
  null,
  "Máquinas Virtuales"
 ],
 "Virtual Machines of $0 cluster": [
  null,
  "Máquinas Virtuales de $0 cluster"
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
 "connecting": [
  null,
  "conectando"
 ],
 "cores": [
  null,
  "núcleos"
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
 "error": [
  null,
  "error"
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
 "initializing": [
  null,
  "inicializando"
 ],
 "installation failed": [
  null,
  "instalación fallada"
 ],
 "installing OS": [
  null,
  "instalando SO"
 ],
 "kdumping": [
  null,
  "kdumping"
 ],
 "maintenance": [
  null,
  "mantenimiento"
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
 "non operational": [
  null,
  "no operativo"
 ],
 "non responsive": [
  null,
  "sin respuesta"
 ],
 "oVirt": [
  null,
  "oVirt"
 ],
 "oVirt Host State:": [
  null,
  "Estado del Huésped oVirt:"
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  "oVirt Provider el script de instalación falló debido a argumentos perdidos."
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  "oVirt Provider el script de instalación falló: No puede escribir en /etc/cockpit/machines-ovirt.config, inténtelo como root."
 ],
 "oVirt installation script failed with following output: ": [
  null,
  "oVirt script de instalación falló con la siguiente salida: "
 ],
 "oVirt login in progress": [
  null,
  "oVirt acceso progresando"
 ],
 "other": [
  null,
  "otro"
 ],
 "paused": [
  null,
  "en pausa"
 ],
 "pending approval": [
  null,
  "pendiente de aprobación"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
 ],
 "reboot": [
  null,
  "reiniciar"
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
 "sockets": [
  null,
  "enchufes"
 ],
 "suspended (PM)": [
  null,
  "suspendido (PM)"
 ],
 "threads": [
  null,
  "hilos"
 ],
 "udp": [
  null,
  "udp"
 ],
 "unassigned": [
  null,
  "no asignado"
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
 "vCPUs": [
  null,
  "vCPUs"
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
