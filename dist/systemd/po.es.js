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
 "1 Minute": [
  null,
  "1 minuto"
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
  "10.º"
 ],
 "11th": [
  null,
  "11.º"
 ],
 "12th": [
  null,
  "12.º"
 ],
 "13th": [
  null,
  "13.º"
 ],
 "14th": [
  null,
  "14.º"
 ],
 "15th": [
  null,
  "15.º"
 ],
 "16th": [
  null,
  "16.º"
 ],
 "17th": [
  null,
  "17.º"
 ],
 "18th": [
  null,
  "18.º"
 ],
 "19th": [
  null,
  "19.º"
 ],
 "1st": [
  null,
  "1.º"
 ],
 "2 min": [
  null,
  "2 min"
 ],
 "20 Minutes": [
  null,
  "20 minutos"
 ],
 "20th": [
  null,
  "20.º"
 ],
 "21st": [
  null,
  "21.º"
 ],
 "22nd": [
  null,
  "22.º"
 ],
 "23rd": [
  null,
  "23.º"
 ],
 "24th": [
  null,
  "24.º"
 ],
 "25th": [
  null,
  "25.º"
 ],
 "26th": [
  null,
  "26.º"
 ],
 "27th": [
  null,
  "27.º"
 ],
 "28th": [
  null,
  "28.º"
 ],
 "29th": [
  null,
  "29.º"
 ],
 "2nd": [
  null,
  "2.º"
 ],
 "3 min": [
  null,
  "3 min"
 ],
 "30th": [
  null,
  "30.º"
 ],
 "31st": [
  null,
  "31.º"
 ],
 "3rd": [
  null,
  "3.º"
 ],
 "4 min": [
  null,
  "4 min"
 ],
 "40 Minutes": [
  null,
  "40 minutos"
 ],
 "4th": [
  null,
  "4.º"
 ],
 "5 Minutes": [
  null,
  "5 minutos"
 ],
 "5 min": [
  null,
  "5 min"
 ],
 "5 minutes": [
  null,
  "5 minutos"
 ],
 "5th": [
  null,
  "5.º"
 ],
 "6 hours": [
  null,
  "6 horas"
 ],
 "60 Minutes": [
  null,
  "60 minutos"
 ],
 "6th": [
  null,
  "6.º"
 ],
 "7th": [
  null,
  "7.º"
 ],
 "8th": [
  null,
  "8.º"
 ],
 "9th": [
  null,
  "9.º"
 ],
 "After": [
  null,
  "Después"
 ],
 "After system boot": [
  null,
  "Después de que el sistema arranque"
 ],
 "All": [
  null,
  "Todos"
 ],
 "Asset Tag": [
  null,
  "Etiqueta de Propiedad"
 ],
 "At specific time": [
  null,
  "A hora espacífica"
 ],
 "Automatically using NTP": [
  null,
  "Usando automáticamente NTP"
 ],
 "Automatically using specific NTP servers": [
  null,
  "Usando automáticamente servidores NTP específicos"
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
  "No puede planificar un evento en el pasado"
 ],
 "Change": [
  null,
  "Cambiar"
 ],
 "Change Host Name": [
  null,
  "Cambiar el Nombre de Host"
 ],
 "Change System Time": [
  null,
  "Cambiar la Hora del Sistema"
 ],
 "Close": [
  null,
  "Cerrar"
 ],
 "Command": [
  null,
  "Orden"
 ],
 "Create Timer": [
  null,
  "Crear temporizador"
 ],
 "Create Timers": [
  null,
  "Crear Temporizadores"
 ],
 "Current boot": [
  null,
  "Arranque actual"
 ],
 "Delay": [
  null,
  "Retraso"
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
  "Disco I/O"
 ],
 "Domain": [
  null,
  "Dominio"
 ],
 "Don't Repeat": [
  null,
  "No repetir"
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
  "Viernes"
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
  "Nombre de Host"
 ],
 "Hour : Minute": [
  null,
  "Hora : Minuto"
 ],
 "Hour needs to be a number between 0-23": [
  null,
  "La hora es necesario que sea un número entre 0 y 23"
 ],
 "Hours": [
  null,
  "Horas"
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
  "El formato de fecha no es válido."
 ],
 "Invalid number.": [
  null,
  "El número no es válido."
 ],
 "Invalid time format": [
  null,
  "Formato de hora inválido"
 ],
 "Invalid time zone": [
  null,
  "El huso horario no es válido"
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
  "Mensajes de registro"
 ],
 "Logs": [
  null,
  "Registros"
 ],
 "Machine ID": [
  null,
  "Id. de máquina"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "Huellas de clave SSH de la máquina"
 ],
 "Manually": [
  null,
  "Manualmente"
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
  "El minuto debe ser un número comprendido entre 0 y 59"
 ],
 "Minutes": [
  null,
  "Minutos"
 ],
 "Monday": [
  null,
  "Lunes"
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
  "Tránsito de redes"
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
  "Sin retardo"
 ],
 "No host keys found.": [
  null,
  "No se encontró ninguna clave de anfitrión."
 ],
 "Not synchronized": [
  null,
  "No sincronizado"
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
  "Solo se permiten caracteres alfanuméricos y  : , _ , . , @ , -."
 ],
 "Operating System": [
  null,
  "Sistema Operativo"
 ],
 "Paths": [
  null,
  "Trayectos"
 ],
 "Performance Profile": [
  null,
  "Perfil de rendimiento"
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
  "Nombre de anfitrión real"
 ],
 "Real host name can only contain lower-case characters, digits, dashes, and periods (with populated subdomains)": [
  null,
  "El nombre real de anfitrión únicamente puede contener caracteres en minúscula, dígitos, guiones y puntos (con subdominios rellenados)"
 ],
 "Real host name must be 64 characters or less": [
  null,
  "El nombre real de anfitrión debe tener 64 caracteres o menos"
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
 "Repeat Daily": [
  null,
  "Repetir cada día"
 ],
 "Repeat Hourly": [
  null,
  "Repetir cada hora"
 ],
 "Repeat Monthly": [
  null,
  "Repetir cada mes"
 ],
 "Repeat Weekly": [
  null,
  "Repetir cada semana"
 ],
 "Repeat Yearly": [
  null,
  "Repetir cada año"
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
  "Ejecutar"
 ],
 "Saturday": [
  null,
  "Sábado"
 ],
 "Save": [
  null,
  "Guardar"
 ],
 "Seconds": [
  null,
  "Segundos"
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
  "Nombre de servicio"
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
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  ""
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
