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
  "x-generator": "Zanata 4.6.0"
 },
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
 "$mtu": [
  null,
  "$mtu"
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
 "5 minutes": [
  null,
  "5 minutos"
 ],
 "6 hours": [
  null,
  "6 horas"
 ],
 "802.3ad": [
  null,
  "802.3ad"
 ],
 "802.3ad LACP": [
  null,
  "802.3ad LACP"
 ],
 "ARP": [
  null,
  "ARP"
 ],
 "ARP Monitoring": [
  null,
  "Supervisión ARP"
 ],
 "ARP Ping": [
  null,
  "Ping ARP"
 ],
 "Active": [
  null,
  "Activo"
 ],
 "Active Backup": [
  null,
  "Copia de seguridad activa"
 ],
 "Adaptive load balancing": [
  null,
  "Equilibrio de carga adaptativo"
 ],
 "Adaptive transmit load balancing": [
  null,
  "Equilibrio de carga de transmisión adaptativa"
 ],
 "Add $0": [
  null,
  "Añadir $0"
 ],
 "Add Bond": [
  null,
  "Añadir vínculo"
 ],
 "Add Bridge": [
  null,
  "Añadir puente"
 ],
 "Add Services": [
  null,
  "Añadir Servicios"
 ],
 "Add Services…": [
  null,
  "Añadir Servicios..."
 ],
 "Add Team": [
  null,
  "Añadir equipo"
 ],
 "Add VLAN": [
  null,
  "Añadir VLAN"
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Si se añade <b>$0</b> se romperá la conexión con el servidor y se indisponibilizará el acceso a la IU de administración."
 ],
 "Additional DNS $val": [
  null,
  "DNA adicional $val"
 ],
 "Additional DNS Search Domains $val": [
  null,
  "Búsqueda de Dominios DNA Adicional $val"
 ],
 "Additional address $val": [
  null,
  "Dirección adicional $val"
 ],
 "Address $val": [
  null,
  "Dirección $val"
 ],
 "Addresses": [
  null,
  "Dirección"
 ],
 "Allowed Services": [
  null,
  "Servicios Permitidos"
 ],
 "Apply": [
  null,
  "Aplicar"
 ],
 "Authenticating": [
  null,
  "Autenticando "
 ],
 "Automatic": [
  null,
  "Automático"
 ],
 "Automatic (DHCP only)": [
  null,
  "Automático (solo DHCP)"
 ],
 "Automatic (DHCP)": [
  null,
  "Automático (DHCP)"
 ],
 "Balancer": [
  null,
  "Balanceador"
 ],
 "Bond": [
  null,
  "Vínculo"
 ],
 "Bond Settings": [
  null,
  "Configuración Bond"
 ],
 "Bridge": [
  null,
  "Puente"
 ],
 "Bridge Port Settings": [
  null,
  "Configuración del puerto Bridge"
 ],
 "Bridge Settings": [
  null,
  "Configuración Bridge"
 ],
 "Bridge port": [
  null,
  "Puerto bridge"
 ],
 "Broadcast": [
  null,
  "Emisión"
 ],
 "Broken configuration": [
  null,
  "Configuración rota"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Carrier": [
  null,
  "Transporte"
 ],
 "Change the settings": [
  null,
  "Cambiar los ajustes"
 ],
 "Changing the settings will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Cambiando los ajustes romperá la conexión al servidor y ha la administración de UI no disponible."
 ],
 "Checking IP": [
  null,
  "Comprobando IP"
 ],
 "Close": [
  null,
  "Cerrar"
 ],
 "Configure": [
  null,
  "Configurar"
 ],
 "Configuring": [
  null,
  "Configurando"
 ],
 "Configuring IP": [
  null,
  "Configurando IP"
 ],
 "Connect automatically": [
  null,
  "Conectado automáticamente"
 ],
 "Connection will be lost": [
  null,
  "Se perderá la conexión"
 ],
 "Create it": [
  null,
  "Crearlo"
 ],
 "Creating this VLAN will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "La creación de esta VLAN romperá la conexión con el servidor y hará a la administración de UI no disponible."
 ],
 "Creating this bond will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "La creación de este enlace romperá la conexión con el servidor y hará que la interfaz de usuario de administración no esté disponible."
 ],
 "Creating this bridge will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "La creación de este puente romperá la conexión con el servidor y hará la administración de UI no disponible."
 ],
 "Creating this team will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "La creación de este equipo romperá la conexión con el servidor y hará que la interfaz de usuario de administración no esté disponible."
 ],
 "DNS": [
  null,
  "DNS"
 ],
 "DNS $val": [
  null,
  "DNS $val"
 ],
 "DNS Search Domains": [
  null,
  "Búsqueda Dominios DNS"
 ],
 "DNS Search Domains $val": [
  null,
  "Buscar Dominios DNS $val"
 ],
 "Deactivating": [
  null,
  "Desactivando"
 ],
 "Delete": [
  null,
  "Eliminar"
 ],
 "Delete $0": [
  null,
  "Eliminar $0"
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Eliminando <b>$0</b> romperá la conexión al servidor y hara no disponible la administración UI."
 ],
 "Details": [
  null,
  "Detalles"
 ],
 "Disabled": [
  null,
  "Deshabilitado"
 ],
 "Enable Service": [
  null,
  ""
 ],
 "Ethernet MAC": [
  null,
  "Ethernet MAC"
 ],
 "Ethernet MTU": [
  null,
  "Ethernet MTU"
 ],
 "Ethtool": [
  null,
  "Ethtool"
 ],
 "Failed": [
  null,
  "Falló"
 ],
 "Filter Services": [
  null,
  "Filtrar Servicios"
 ],
 "Firewall": [
  null,
  "Cortafuegos"
 ],
 "Firewall is not available": [
  null,
  "El cortafuegos no está disponible"
 ],
 "Forward delay $forward_delay": [
  null,
  "Retardo del reenvío $forward_delay"
 ],
 "General": [
  null,
  "General"
 ],
 "Go to now": [
  null,
  "Ir a ahora"
 ],
 "Hair Pin mode": [
  null,
  "Modo horquilla"
 ],
 "Hairpin mode": [
  null,
  "Modo horquilla"
 ],
 "Hello time $hello_time": [
  null,
  "Tiempo de saludo $hello_time"
 ],
 "IP Address": [
  null,
  "Dirección IP"
 ],
 "IP Settings": [
  null,
  "Configuración IP"
 ],
 "IPv4": [
  null,
  "IPv4"
 ],
 "IPv4 Settings": [
  null,
  "Configuración IPv4"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "Configuración IPv6"
 ],
 "Id $id": [
  null,
  "Id $id"
 ],
 "Ignore": [
  null,
  "Ignorar"
 ],
 "Inactive": [
  null,
  "Inactivo"
 ],
 "Interfaces": [
  null,
  "Interfaces"
 ],
 "Invalid address $0": [
  null,
  "La dirección $0 no es válida"
 ],
 "Invalid metric $0": [
  null,
  "La métrica $0 no es válida"
 ],
 "Invalid prefix $0": [
  null,
  "El prefijo $0 no es válido"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "El prefijo o la máscara de red $0 no es válido"
 ],
 "Keep connection": [
  null,
  "Mantener la conexión"
 ],
 "LACP Key": [
  null,
  "Clave de LACP"
 ],
 "Link Monitoring": [
  null,
  "Monitorear enlace"
 ],
 "Link Watch": [
  null,
  "Enlace para ver"
 ],
 "Link down delay": [
  null,
  "Desvincular demora"
 ],
 "Link local": [
  null,
  "Enlace local"
 ],
 "Link up delay": [
  null,
  "Vincular demora"
 ],
 "Load Balancing": [
  null,
  "Equilibrio de carga"
 ],
 "MAC": [
  null,
  "MAC"
 ],
 "MII (Recommended)": [
  null,
  "MII (Recomendado)"
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "MTU must be a positive number": [
  null,
  "El MTU debe ser un número positivo"
 ],
 "Manual": [
  null,
  "Manual"
 ],
 "Master": [
  null,
  "Maestro"
 ],
 "Maximum message age $max_age": [
  null,
  "Edad máxima del mensaje $max_age"
 ],
 "Members": [
  null,
  "Miembros"
 ],
 "Mode": [
  null,
  "Modo"
 ],
 "Monitoring Interval": [
  null,
  "Monitorear intervalo"
 ],
 "Monitoring Targets": [
  null,
  "Monitorear objetivos"
 ],
 "NSNA Ping": [
  null,
  "«Ping» de NSNA"
 ],
 "Name": [
  null,
  "Nombre"
 ],
 "Network devices and graphs require NetworkManager.": [
  null,
  ""
 ],
 "NetworkManager is not running.": [
  null,
  ""
 ],
 "Networking": [
  null,
  "Redes"
 ],
 "Networking Logs": [
  null,
  "Registros de redes"
 ],
 "No": [
  null,
  "No"
 ],
 "No carrier": [
  null,
  "Ningún portador"
 ],
 "No open ports": [
  null,
  "Sin puertos abiertos"
 ],
 "Not available": [
  null,
  "No disponible"
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
 "Parent": [
  null,
  "Padre"
 ],
 "Parent $parent": [
  null,
  "Padre $parent"
 ],
 "Part of ": [
  null,
  "Parte de"
 ],
 "Passive": [
  null,
  "Pasivo"
 ],
 "Path cost": [
  null,
  "Costo de trayecto"
 ],
 "Path cost $path_cost": [
  null,
  "Costo de trayecto $path_cost"
 ],
 "Permanent": [
  null,
  "Permanente"
 ],
 "Ping Interval": [
  null,
  "Intervalo entre cada «ping»"
 ],
 "Ping Target": [
  null,
  "Hacer Ping al Objetivo"
 ],
 "Please install the {0} package": [
  null,
  "Por favor instale el paquete {0}"
 ],
 "Ports": [
  null,
  "Puertos"
 ],
 "Prefix length": [
  null,
  "Tamaño del prefijo"
 ],
 "Prefix length or Netmask": [
  null,
  "Tamaño del prefijo o máscara de red"
 ],
 "Preparing": [
  null,
  "Preparando"
 ],
 "Preserve": [
  null,
  "Conservar"
 ],
 "Primary": [
  null,
  "Primario"
 ],
 "Priority": [
  null,
  "Prioridad"
 ],
 "Priority $priority": [
  null,
  "Prioridad $priority"
 ],
 "Random": [
  null,
  "Al azar"
 ],
 "Reboot": [
  null,
  "Reiniciar"
 ],
 "Receiving": [
  null,
  "Recibiendo"
 ],
 "Remove $0": [
  null,
  "Quitar $0"
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Quitar <b>$0</b> romperá la conexión con el servidor y hará la administración de UI no disponible."
 ],
 "Restoring connection": [
  null,
  "Restableciendo la conexión"
 ],
 "Round Robin": [
  null,
  "Round Robin"
 ],
 "Routes": [
  null,
  "Rutas"
 ],
 "Runner": [
  null,
  "Ejecutor"
 ],
 "STP Forward delay": [
  null,
  "Retardo del reenvío STP"
 ],
 "STP Hello time": [
  null,
  "Tiempo de saludo STP"
 ],
 "STP Maximum message age": [
  null,
  "Edad máxima del mensaje STP"
 ],
 "STP Priority": [
  null,
  "Prioridad STP"
 ],
 "Sending": [
  null,
  "Enviando"
 ],
 "Service": [
  null,
  "Servicio"
 ],
 "Set to": [
  null,
  "Ajustar a"
 ],
 "Shared": [
  null,
  "Compartido"
 ],
 "Spanning Tree Protocol": [
  null,
  "Spanning Tree Protocol"
 ],
 "Spanning Tree Protocol (STP)": [
  null,
  "Spanning Tree Protocol (STP)"
 ],
 "Stable": [
  null,
  "Estable"
 ],
 "Start Service": [
  null,
  ""
 ],
 "Status": [
  null,
  "Estado"
 ],
 "Sticky": [
  null,
  "Pegajoso"
 ],
 "Switch off $0": [
  null,
  "Apagar $0"
 ],
 "Switch on $0": [
  null,
  "Encender $0"
 ],
 "Switching off <b>$0</b>  will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Apagando <b>$0</b>  romperá la conexión al servidor y hará la administración de UI no disponible."
 ],
 "Switching off <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Apagando <b>$0</b>  romperá la conexión al servidor y hará la administración de UI no disponible."
 ],
 "Switching on <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Apagando <b>$0</b>  romperá la conexión al servidor y hará la administración de UI no disponible."
 ],
 "TCP": [
  null,
  "TCP: Protocolo de Control de Transmisión, por sus siglas en ingles (Transmission Control Protocol)"
 ],
 "Team": [
  null,
  "Equipo"
 ],
 "Team Port": [
  null,
  "Puerto de Equipo"
 ],
 "Team Port Settings": [
  null,
  "Ajustes de Puerto de Equipo"
 ],
 "Team Settings": [
  null,
  "Ajustes de Equipo"
 ],
 "Testing connection": [
  null,
  "Probando conexión"
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  "El usuario <b>$0</b> no está autorizado para modificar la configuración de la red"
 ],
 "This device cannot be managed here.": [
  null,
  "Este dispositivo no se puede manejar aquí."
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
 "Unknown \"$0\"": [
  null,
  "Desconocido \"$0\""
 ],
 "Unknown configuration": [
  null,
  "Configuración desconocida"
 ],
 "Unmanaged Interfaces": [
  null,
  "Interfaces No Manejadas"
 ],
 "VLAN": [
  null,
  "VLAN"
 ],
 "VLAN Id": [
  null,
  "VLAN Id"
 ],
 "VLAN Settings": [
  null,
  "Configuración VLAN"
 ],
 "Waiting": [
  null,
  "Esperando"
 ],
 "XOR": [
  null,
  "XOR"
 ],
 "Yes": [
  null,
  "Sí"
 ],
 "You are not authorized to modify the firewall.": [
  null,
  "Usted no está autorizado a modificar el cortafuegos."
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
 "page-title\u0004Networking": [
  null,
  "Redes"
 ]
}));
