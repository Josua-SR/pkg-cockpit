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
 "$0 Template": [
  null,
  "$0 Plantilla"
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
 "1 Minute": [
  null,
  "1 Minuto"
 ],
 "1 day": [
  null,
  "1 día"
 ],
 "1 hour": [
  null,
  "1 hora"
 ],
 "1 min": [
  null,
  "1 min"
 ],
 "1 week": [
  null,
  "1 semana"
 ],
 "10th": [
  null,
  "10º"
 ],
 "11th": [
  null,
  "11º"
 ],
 "12th": [
  null,
  "12º"
 ],
 "13th": [
  null,
  "13º"
 ],
 "14th": [
  null,
  "14º"
 ],
 "15th": [
  null,
  "15º"
 ],
 "16th": [
  null,
  "16º"
 ],
 "17th": [
  null,
  "17º"
 ],
 "18th": [
  null,
  "18º"
 ],
 "19th": [
  null,
  "19º"
 ],
 "1st": [
  null,
  "1º"
 ],
 "2 min": [
  null,
  "2 min"
 ],
 "20 Minutes": [
  null,
  "20 Minutos"
 ],
 "20th": [
  null,
  "20º"
 ],
 "21st": [
  null,
  "21º"
 ],
 "22nd": [
  null,
  "22º"
 ],
 "23rd": [
  null,
  "23º"
 ],
 "24th": [
  null,
  "24º"
 ],
 "25th": [
  null,
  "25º"
 ],
 "26th": [
  null,
  "26º"
 ],
 "27th": [
  null,
  "27º"
 ],
 "28th": [
  null,
  "28º"
 ],
 "29th": [
  null,
  "29º"
 ],
 "2nd": [
  null,
  "2º"
 ],
 "3 min": [
  null,
  "3 min"
 ],
 "30th": [
  null,
  "30º"
 ],
 "31st": [
  null,
  "31º"
 ],
 "3rd": [
  null,
  "3º"
 ],
 "4 min": [
  null,
  ""
 ],
 "40 Minutes": [
  null,
  "40 Minutos"
 ],
 "4th": [
  null,
  ""
 ],
 "5 Minutes": [
  null,
  "5 Minutos"
 ],
 "5 min": [
  null,
  ""
 ],
 "5 minutes": [
  null,
  "5 minutos"
 ],
 "5th": [
  null,
  ""
 ],
 "6 hours": [
  null,
  "6 horas"
 ],
 "60 Minutes": [
  null,
  "60 Minutos"
 ],
 "6th": [
  null,
  ""
 ],
 "7th": [
  null,
  ""
 ],
 "8th": [
  null,
  ""
 ],
 "9th": [
  null,
  ""
 ],
 "After": [
  null,
  ""
 ],
 "After system boot": [
  null,
  ""
 ],
 "All": [
  null,
  "Todos"
 ],
 "Asset Tag": [
  null,
  ""
 ],
 "At specific time": [
  null,
  ""
 ],
 "Automatically using NTP": [
  null,
  ""
 ],
 "Automatically using specific NTP servers": [
  null,
  ""
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Cached": [
  null,
  "En cache"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Cannot schedule event in the past": [
  null,
  ""
 ],
 "Change": [
  null,
  "Cambiar"
 ],
 "Change Host Name": [
  null,
  ""
 ],
 "Change System Time": [
  null,
  ""
 ],
 "Close": [
  null,
  "Cerrar"
 ],
 "Command": [
  null,
  "Comando"
 ],
 "Create Timer": [
  null,
  ""
 ],
 "Create Timers": [
  null,
  ""
 ],
 "Current boot": [
  null,
  "Arranque actual"
 ],
 "Delay": [
  null,
  ""
 ],
 "Description": [
  null,
  "Descripción "
 ],
 "Disable": [
  null,
  "Desabilitar"
 ],
 "Disabled": [
  null,
  "Deshabilitado"
 ],
 "Disk I/O": [
  null,
  ""
 ],
 "Domain": [
  null,
  "Dominio"
 ],
 "Don't Repeat": [
  null,
  ""
 ],
 "Enable": [
  null,
  "Habilitar"
 ],
 "Enable Forcefully": [
  null,
  "Habilitar pre-ajuste"
 ],
 "Enabled": [
  null,
  "Habilitado"
 ],
 "Entry": [
  null,
  "Entrada"
 ],
 "Error": [
  null,
  "Error"
 ],
 "Errors": [
  null,
  "Errores"
 ],
 "Free": [
  null,
  "Libre"
 ],
 "Friday": [
  null,
  ""
 ],
 "Go to": [
  null,
  "Ir a"
 ],
 "Go to now": [
  null,
  "Ir a ahora"
 ],
 "Hardware": [
  null,
  "Hardware"
 ],
 "Host Name": [
  null,
  ""
 ],
 "Hour : Minute": [
  null,
  ""
 ],
 "Hour needs to be a number between 0-23": [
  null,
  ""
 ],
 "Hours": [
  null,
  ""
 ],
 "I/O Wait": [
  null,
  "Espera de E/S"
 ],
 "Id": [
  null,
  "Id"
 ],
 "Instantiate": [
  null,
  "Instanciar"
 ],
 "Invalid date format": [
  null,
  "Formato de fecha inválido"
 ],
 "Invalid date format and invalid time format": [
  null,
  "Formato de fecha y formato de hora inválidos "
 ],
 "Invalid date format.": [
  null,
  ""
 ],
 "Invalid number.": [
  null,
  ""
 ],
 "Invalid time format": [
  null,
  "Formato de hora inválido"
 ],
 "Invalid time zone": [
  null,
  ""
 ],
 "Isolate": [
  null,
  "Aislar"
 ],
 "Journal": [
  null,
  "Bitacora"
 ],
 "Journal entry": [
  null,
  "Bitacora de entradas"
 ],
 "Journal entry not found": [
  null,
  "Entrada de bitacora no encontrada"
 ],
 "Kernel": [
  null,
  "Kernel"
 ],
 "Last 24 hours": [
  null,
  "Ultimas 24 horas"
 ],
 "Last 7 days": [
  null,
  "Ultimos 7 dias"
 ],
 "Last Trigger": [
  null,
  "Última ejecución"
 ],
 "Load earlier entries": [
  null,
  "Cargar entradas anteriores"
 ],
 "Loading...": [
  null,
  "Cargando..."
 ],
 "Log messages": [
  null,
  ""
 ],
 "Logs": [
  null,
  ""
 ],
 "Machine ID": [
  null,
  ""
 ],
 "Machine SSH Key Fingerprints": [
  null,
  ""
 ],
 "Manually": [
  null,
  ""
 ],
 "Mask": [
  null,
  "Enmascarar"
 ],
 "Mask Forcefully": [
  null,
  "Enmascarar "
 ],
 "Memory": [
  null,
  "Memoria"
 ],
 "Message to logged in users": [
  null,
  "Mensaje para usuarios activos "
 ],
 "Minute needs to be a number between 0-59": [
  null,
  ""
 ],
 "Minutes": [
  null,
  ""
 ],
 "Monday": [
  null,
  ""
 ],
 "NTP Server": [
  null,
  "Servidor NTP"
 ],
 "Need at least one NTP server": [
  null,
  "Se requiere al menos un servidor NTP"
 ],
 "Network Traffic": [
  null,
  ""
 ],
 "Next Run": [
  null,
  "En la próxima ejecución"
 ],
 "Nice": [
  null,
  "Bien"
 ],
 "No Delay": [
  null,
  ""
 ],
 "No host keys found.": [
  null,
  ""
 ],
 "Not synchronized": [
  null,
  ""
 ],
 "Note": [
  null,
  "Nota"
 ],
 "Notices": [
  null,
  "Avisos"
 ],
 "Off": [
  null,
  "Apagado"
 ],
 "On": [
  null,
  "Encencido"
 ],
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  ""
 ],
 "Operating System": [
  null,
  "Sistema Operativo"
 ],
 "Paths": [
  null,
  "Rutas"
 ],
 "Performance Profile": [
  null,
  ""
 ],
 "Power Options": [
  null,
  "Opciones de apagado"
 ],
 "Preset": [
  null,
  "Ajustar"
 ],
 "Preset Forcefully": [
  null,
  "Forzar pre-ajuste"
 ],
 "Pretty Host Name": [
  null,
  ""
 ],
 "Real Host Name": [
  null,
  ""
 ],
 "Real host name can only contain lower-case characters, digits, dashes, and periods (with populated subdomains)": [
  null,
  ""
 ],
 "Real host name must be 64 characters or less": [
  null,
  ""
 ],
 "Reboot": [
  null,
  "Reiniciar"
 ],
 "Recent": [
  null,
  "Reciente"
 ],
 "Reload": [
  null,
  "Recargar"
 ],
 "Reload or Restart": [
  null,
  "Recargue para Reiniciar"
 ],
 "Reload or Try Restart": [
  null,
  "Recargar o intente reiniciar"
 ],
 "Repeat Daily": [
  null,
  ""
 ],
 "Repeat Hourly": [
  null,
  ""
 ],
 "Repeat Monthly": [
  null,
  ""
 ],
 "Repeat Weekly": [
  null,
  ""
 ],
 "Repeat Yearly": [
  null,
  ""
 ],
 "Reset": [
  null,
  "Reiniciar"
 ],
 "Restart": [
  null,
  "Reiniciar"
 ],
 "Run": [
  null,
  ""
 ],
 "Saturday": [
  null,
  ""
 ],
 "Save": [
  null,
  ""
 ],
 "Seconds": [
  null,
  ""
 ],
 "Secure Shell Keys": [
  null,
  ""
 ],
 "Service Logs": [
  null,
  "Bitácoras del Servicio"
 ],
 "Service name": [
  null,
  ""
 ],
 "Services": [
  null,
  "Servicios"
 ],
 "Set Host name": [
  null,
  "Establecer nombre del sistema"
 ],
 "Set Time": [
  null,
  ""
 ],
 "Show fingerprints": [
  null,
  ""
 ],
 "Shut Down": [
  null,
  ""
 ],
 "Since $0": [
  null,
  "Desde $0"
 ],
 "Sockets": [
  null,
  "Sockets"
 ],
 "Specific Time": [
  null,
  ""
 ],
 "Start": [
  null,
  "Iniciar"
 ],
 "State": [
  null,
  "Estado"
 ],
 "Static": [
  null,
  "Estático"
 ],
 "Stop": [
  null,
  "Detener"
 ],
 "Store Performance Data": [
  null,
  ""
 ],
 "Sunday": [
  null,
  ""
 ],
 "Swap Used": [
  null,
  "Swap utilizada"
 ],
 "Synchronized": [
  null,
  ""
 ],
 "Synchronized with {{Server}}": [
  null,
  "Sincronizado con {{Server}}"
 ],
 "System": [
  null,
  ""
 ],
 "System Services": [
  null,
  "Servicios de Sistema"
 ],
 "System Time": [
  null,
  ""
 ],
 "Targets": [
  null,
  "Objetivos"
 ],
 "Terminal": [
  null,
  "Terminal"
 ],
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  "El usuario <b>$0</b> no está autorizado a modificar dominios"
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  ""
 ],
 "This field cannot be empty.": [
  null,
  ""
 ],
 "This unit is an instance of the $0 template.": [
  null,
  "Esta unidad es una instancia de la plantilla $0 "
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  ""
 ],
 "Thursday": [
  null,
  ""
 ],
 "Time Zone": [
  null,
  ""
 ],
 "Timers": [
  null,
  "Temporizadores"
 ],
 "Try Restart": [
  null,
  "Intente Reniciar"
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  ""
 ],
 "Tuesday": [
  null,
  ""
 ],
 "Unmask": [
  null,
  "Desenmascarar"
 ],
 "Used": [
  null,
  "Usado"
 ],
 "User": [
  null,
  "Usuario"
 ],
 "Version": [
  null,
  "Versión"
 ],
 "Warnings": [
  null,
  "Advertencias"
 ],
 "Wednesday": [
  null,
  ""
 ],
 "Weeks": [
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
 "failed to list ssh host keys: $0": [
  null,
  "incapaz de mostrar llaves de host ssh: $0"
 ],
 "unknown": [
  null,
  "desconocido"
 ],
 "page-title\u0004CPU Status": [
  null,
  "Estado del CPU"
 ],
 "page-title\u0004Memory": [
  null,
  "Memoria"
 ]
}));
