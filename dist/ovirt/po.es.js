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
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 esta disponible para muchos sistemas operativos. Para instalarlo, búscalo en \"GNOME Software\" o ejecuta el siguiente comando:"
 ],
 "Action": [
  null,
  "Acción"
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
 "All running virtual machines will be turned off.": [
  null,
  "Todas las máquinas virtuales corriendo serán apagadas."
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
 "Count:": [
  null,
  "Conteo:"
 ],
 "Create": [
  null,
  "Crear"
 ],
 "Create New VM": [
  null,
  "Crear Nueva VM"
 ],
 "Create VM": [
  null,
  "Crear VM"
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
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  "Desconectado de la consola serie. Pulse el botón Reconectar."
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
 "MAC Address": [
  null,
  "Dirección MAC"
 ],
 "MIGRATE action failed": [
  null,
  "Fallo en acción MIGRATE"
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
 "Memory": [
  null,
  "Memoria"
 ],
 "Memory:": [
  null,
  "Memoria:"
 ],
 "Migrate To:": [
  null,
  "Migrar A:"
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
 "Networks": [
  null,
  "Redes"
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
 "No matching files found": [
  null,
  "No se han encontrado ficheros coincidentes"
 ],
 "No network interfaces defined for this VM": [
  null,
  "No se han definido interfaces de red para esta VM"
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
 "Path to file": [
  null,
  "Ruta al fichero"
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  "Por favor confirme que el host será conmutado a modo mantenimiento."
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
 "Send shortcut": [
  null,
  "Enviar atajo"
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
 "This virtual machine is not managed by oVirt": [
  null,
  ""
 ],
 "Too many files found": [
  null,
  ""
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "Unplug": [
  null,
  ""
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
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
 "VDSM": [
  null,
  ""
 ],
 "VDSM Service Management": [
  null,
  ""
 ],
 "VM FORCE OFF action failed": [
  null,
  ""
 ],
 "VM FORCE REBOOT action failed": [
  null,
  ""
 ],
 "VM REBOOT action failed": [
  null,
  ""
 ],
 "VM SEND Non-Maskable Interrrupt action failed": [
  null,
  ""
 ],
 "VM SHUT DOWN action failed": [
  null,
  ""
 ],
 "VM START action failed": [
  null,
  ""
 ],
 "VM icon": [
  null,
  ""
 ],
 "VNC": [
  null,
  ""
 ],
 "VNC Address:": [
  null,
  ""
 ],
 "VNC Port:": [
  null,
  ""
 ],
 "VNC TLS Port:": [
  null,
  ""
 ],
 "Version": [
  null,
  "Versión"
 ],
 "Version num": [
  null,
  ""
 ],
 "Virtual Machines": [
  null,
  ""
 ],
 "Virtual Machines of $0 cluster": [
  null,
  ""
 ],
 "Virtualport": [
  null,
  ""
 ],
 "Volume": [
  null,
  ""
 ],
 "Your browser does not support iframes.": [
  null,
  ""
 ],
 "bridge": [
  null,
  ""
 ],
 "cdrom": [
  null,
  ""
 ],
 "connecting": [
  null,
  ""
 ],
 "cores": [
  null,
  ""
 ],
 "crashed": [
  null,
  ""
 ],
 "custom": [
  null,
  ""
 ],
 "direct": [
  null,
  ""
 ],
 "disabled": [
  null,
  "desactivado"
 ],
 "disk": [
  null,
  ""
 ],
 "down": [
  null,
  ""
 ],
 "dying": [
  null,
  ""
 ],
 "enabled": [
  null,
  "activado"
 ],
 "error": [
  null,
  ""
 ],
 "ethernet": [
  null,
  ""
 ],
 "host": [
  null,
  ""
 ],
 "hostdev": [
  null,
  ""
 ],
 "idle": [
  null,
  "inactivo"
 ],
 "initializing": [
  null,
  ""
 ],
 "installation failed": [
  null,
  ""
 ],
 "installing OS": [
  null,
  ""
 ],
 "kdumping": [
  null,
  ""
 ],
 "maintenance": [
  null,
  ""
 ],
 "mcast": [
  null,
  ""
 ],
 "network": [
  null,
  ""
 ],
 "no": [
  null,
  "no"
 ],
 "non operational": [
  null,
  ""
 ],
 "non responsive": [
  null,
  ""
 ],
 "oVirt": [
  null,
  ""
 ],
 "oVirt Host State:": [
  null,
  ""
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  ""
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  ""
 ],
 "oVirt installation script failed with following output: ": [
  null,
  ""
 ],
 "oVirt login in progress": [
  null,
  ""
 ],
 "other": [
  null,
  ""
 ],
 "paused": [
  null,
  "en pausa"
 ],
 "pending approval": [
  null,
  ""
 ],
 "reboot": [
  null,
  ""
 ],
 "running": [
  null,
  "en ejecución"
 ],
 "server": [
  null,
  ""
 ],
 "show less": [
  null,
  ""
 ],
 "show more": [
  null,
  ""
 ],
 "shut off": [
  null,
  ""
 ],
 "shutdown": [
  null,
  ""
 ],
 "sockets": [
  null,
  ""
 ],
 "suspended (PM)": [
  null,
  ""
 ],
 "threads": [
  null,
  ""
 ],
 "udp": [
  null,
  ""
 ],
 "unassigned": [
  null,
  ""
 ],
 "undefined": [
  null,
  "sin definir"
 ],
 "up": [
  null,
  ""
 ],
 "user": [
  null,
  ""
 ],
 "vCPUs": [
  null,
  ""
 ],
 "vCPUs:": [
  null,
  ""
 ],
 "vhostuser": [
  null,
  ""
 ],
 "yes": [
  null,
  "sí"
 ]
}));
