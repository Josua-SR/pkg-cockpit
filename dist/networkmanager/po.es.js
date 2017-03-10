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
  ""
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
  ""
 ],
 "Active": [
  null,
  "Activo"
 ],
 "Active Backup": [
  null,
  "Respaldo activo"
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
  ""
 ],
 "Add Bond": [
  null,
  "Añadir vínculo"
 ],
 "Add Bridge": [
  null,
  "Añadir Puente"
 ],
 "Add Team": [
  null,
  ""
 ],
 "Add VLAN": [
  null,
  "Añadir VLAN"
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Additional DNS $val": [
  null,
  ""
 ],
 "Additional DNS Search Domains $val": [
  null,
  ""
 ],
 "Additional address $val": [
  null,
  ""
 ],
 "Address $val": [
  null,
  ""
 ],
 "Addresses": [
  null,
  "Dirección"
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
  ""
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
  ""
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
  ""
 ],
 "Changing the settings will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
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
  ""
 ],
 "Create it": [
  null,
  ""
 ],
 "Creating this VLAN will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Creating this bond will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Creating this bridge will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Creating this team will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "DNS": [
  null,
  "DNS"
 ],
 "DNS $val": [
  null,
  ""
 ],
 "DNS Search Domains": [
  null,
  "Búsqueda Dominios DNS"
 ],
 "DNS Search Domains $val": [
  null,
  ""
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
  ""
 ],
 "Disabled": [
  null,
  "Deshabilitado"
 ],
 "Ethernet MAC": [
  null,
  ""
 ],
 "Ethernet MTU": [
  null,
  ""
 ],
 "Ethtool": [
  null,
  ""
 ],
 "Failed": [
  null,
  "Falló"
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
  "Llave inválida"
 ],
 "Invalid metric $0": [
  null,
  "Llave inválida"
 ],
 "Invalid prefix $0": [
  null,
  "Puerto invalido"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "Puerto invalido"
 ],
 "Keep connection": [
  null,
  ""
 ],
 "LACP Key": [
  null,
  ""
 ],
 "Link Monitoring": [
  null,
  "Monitorear enlace"
 ],
 "Link Watch": [
  null,
  ""
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
  ""
 ],
 "MAC": [
  null,
  ""
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
  ""
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
  ""
 ],
 "Name": [
  null,
  "Nombre"
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
  ""
 ],
 "Path cost": [
  null,
  "Costo ruta"
 ],
 "Path cost $path_cost": [
  null,
  "Costo ruta $path_cost"
 ],
 "Permanent": [
  null,
  ""
 ],
 "Ping Interval": [
  null,
  ""
 ],
 "Ping Target": [
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
  "Ajustar"
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
  ""
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Restoring connection": [
  null,
  "Reconectarse"
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
  ""
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
 "Set to": [
  null,
  ""
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
  "Habilitar"
 ],
 "Status": [
  null,
  "Estado"
 ],
 "Sticky": [
  null,
  ""
 ],
 "Switch off $0": [
  null,
  ""
 ],
 "Switch on $0": [
  null,
  ""
 ],
 "Switching off <b>$0</b>  will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Switching off <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Switching on <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Team": [
  null,
  ""
 ],
 "Team Port": [
  null,
  ""
 ],
 "Team Port Settings": [
  null,
  ""
 ],
 "Team Settings": [
  null,
  ""
 ],
 "Testing connection": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  "El usuario <b>$0</b> no está autorizado para modificar la configuración de la red"
 ],
 "This device cannot be managed here.": [
  null,
  ""
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
  ""
 ],
 "Unknown configuration": [
  null,
  "Configuración desconocida"
 ],
 "Unmanaged Interfaces": [
  null,
  ""
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
