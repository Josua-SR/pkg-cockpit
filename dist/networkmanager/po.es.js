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
 "$mtu": [
  null,
  "$mtu"
 ],
 "(Optional)": [
  null,
  ""
 ],
 "(default)": [
  null,
  "(predeterminado)"
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
 "Active zones": [
  null,
  ""
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
 "Add Ports": [
  null,
  ""
 ],
 "Add Services": [
  null,
  "Añadir Servicios"
 ],
 "Add Team": [
  null,
  "Añadir equipo"
 ],
 "Add VLAN": [
  null,
  "Añadir VLAN"
 ],
 "Add Zone": [
  null,
  ""
 ],
 "Add ports to the following zones:": [
  null,
  ""
 ],
 "Add services to following zones:": [
  null,
  ""
 ],
 "Add zone": [
  null,
  ""
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
 "Allowed Addresses": [
  null,
  ""
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
 "Comma-separated ports, ranges, and aliases are accepted": [
  null,
  ""
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
 "Custom Ports": [
  null,
  ""
 ],
 "Custom zones": [
  null,
  ""
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
 "Description": [
  null,
  "Descripción "
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
  "Habilitar servicio"
 ],
 "Entire subnet": [
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
 "Example: 22,ssh,8080,5900-5910": [
  null,
  ""
 ],
 "Example: 88,2019,nfs,rsync": [
  null,
  ""
 ],
 "Failed": [
  null,
  "Falló"
 ],
 "Failed to add service": [
  null,
  ""
 ],
 "Failed to add zone": [
  null,
  ""
 ],
 "Failed to remove service": [
  null,
  ""
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
 "IP Range": [
  null,
  ""
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
 "Included services": [
  null,
  ""
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
 "Invalid port number": [
  null,
  ""
 ],
 "Invalid prefix $0": [
  null,
  "El prefijo $0 no es válido"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "El prefijo o la máscara de red $0 no es válido"
 ],
 "Invalid range": [
  null,
  ""
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
  "Los dispositivos y gráficos de red requieren NetworkManager."
 ],
 "NetworkManager is not running.": [
  null,
  "NetworkManager no está funcionando."
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
 "No active zones": [
  null,
  ""
 ],
 "No carrier": [
  null,
  "Ningún portador"
 ],
 "No description available": [
  null,
  ""
 ],
 "No open ports": [
  null,
  "Sin puertos abiertos"
 ],
 "None": [
  null,
  "Ninguno"
 ],
 "Not available": [
  null,
  "No disponible"
 ],
 "Off": [
  null,
  "Apagado"
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
 "Please install the $0 package": [
  null,
  "Por favor instale el $0 paquete"
 ],
 "Port number and type do not match": [
  null,
  ""
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
 "Range": [
  null,
  ""
 ],
 "Range must be strictly ordered": [
  null,
  ""
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
 "Remove service": [
  null,
  ""
 ],
 "Remove service from zones": [
  null,
  ""
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
 "Services": [
  null,
  "Servicios"
 ],
 "Set to": [
  null,
  "Ajustar a"
 ],
 "Shared": [
  null,
  "Compartido"
 ],
 "Sorted from least trusted to most trusted": [
  null,
  ""
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
  "Iniciar servicio"
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
 "Trust level": [
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
 "Unknown service name": [
  null,
  ""
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
 "Zone": [
  null,
  ""
 ],
 "Zones": [
  null,
  ""
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
 "show less": [
  null,
  "mostrar menos"
 ],
 "show more": [
  null,
  "mostrar más"
 ],
 "page-title\u0004Networking": [
  null,
  "Redes"
 ]
}));
