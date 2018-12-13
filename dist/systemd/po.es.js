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
 "$0 is not available from any repository.": [
  null,
  "$0 no está disponible en ningún repositorio"
 ],
 "$0 will be installed.": [
  null,
  "Se instalará $0"
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
 "Additional packages:": [
  null,
  "Paquetes adicionales:"
 ],
 "After": [
  null,
  "Después"
 ],
 "After system boot": [
  null,
  "Después de que el sistema arranque"
 ],
 "Alert and above": [
  null,
  "Alerta y arriba"
 ],
 "Asset Tag": [
  null,
  "Etiqueta de Propiedad"
 ],
 "At specific time": [
  null,
  "A hora específica"
 ],
 "Automatically using NTP": [
  null,
  "Usando automáticamente NTP"
 ],
 "Automatically using specific NTP servers": [
  null,
  "Usando automáticamente servidores NTP específicos"
 ],
 "BIOS": [
  null,
  "BIOS"
 ],
 "BIOS date": [
  null,
  "Fecha de la BIOS"
 ],
 "BIOS version": [
  null,
  "Versión de la BIOS"
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
 "Checking installed software": [
  null,
  "Comprobando el software instalado"
 ],
 "Class": [
  null,
  "Clase"
 ],
 "Close": [
  null,
  "Cerrar"
 ],
 "Command": [
  null,
  "Orden"
 ],
 "Condition failed": [
  null,
  "Condición fallida"
 ],
 "Create Timer": [
  null,
  "Crear temporizador"
 ],
 "Create Timers": [
  null,
  "Crear Temporizadores"
 ],
 "Critical and above": [
  null,
  "Crítico y arriba"
 ],
 "Current boot": [
  null,
  "Arranque actual"
 ],
 "Debug and above": [
  null,
  "Depurar y arriba"
 ],
 "Delay": [
  null,
  "Retraso"
 ],
 "Description": [
  null,
  "Descripción "
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
 "Downloading $0": [
  null,
  "Descargando $0"
 ],
 "Enable stored metrics…": [
  null,
  "Habilitar métricas almacenadas ..."
 ],
 "Entry": [
  null,
  "Entrada"
 ],
 "Error": [
  null,
  "Error"
 ],
 "Error and above": [
  null,
  "Error y arriba"
 ],
 "Everything": [
  null,
  "Todo"
 ],
 "Friday": [
  null,
  "Viernes"
 ],
 "General": [
  null,
  "General"
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
 "Hardware Information": [
  null,
  "Información de Hardware"
 ],
 "Host Name": [
  null,
  "Nombre de Host"
 ],
 "Hour : Minute": [
  null,
  "Hora : Minuto"
 ],
 "Hours": [
  null,
  "Horas"
 ],
 "I/O Wait": [
  null,
  "Espera de E/S"
 ],
 "Info and above": [
  null,
  "Información y arriba"
 ],
 "Install": [
  null,
  "Instalar"
 ],
 "Install Software": [
  null,
  "Instalar software"
 ],
 "Installing $0": [
  null,
  "Instalando $0"
 ],
 "Instantiate": [
  null,
  "Instanciar"
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
 "Memory": [
  null,
  "Memoria"
 ],
 "Memory & Swap": [
  null,
  "Memoria e intercambio"
 ],
 "Minutes": [
  null,
  "Minutos"
 ],
 "Model": [
  null,
  "Modelo"
 ],
 "Monday": [
  null,
  "Lunes"
 ],
 "Name": [
  null,
  "Nombre"
 ],
 "Network Traffic": [
  null,
  "Tránsito de redes"
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
 "Not authorized to upload-report": [
  null,
  "No autorizado para cargar informe"
 ],
 "Not synchronized": [
  null,
  "No sincronizado"
 ],
 "Note": [
  null,
  "Nota"
 ],
 "Notice and above": [
  null,
  "Aviso y arriba"
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
 "Only Emergency": [
  null,
  "Solo Emergencia"
 ],
 "Operating System": [
  null,
  "Sistema Operativo"
 ],
 "PCI": [
  null,
  "PCI"
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
 "Pretty Host Name": [
  null,
  "Bonito Nombre de Host"
 ],
 "Problem details": [
  null,
  "Detalles del problema"
 ],
 "Problem info": [
  null,
  "Información de problema"
 ],
 "Real Host Name": [
  null,
  "Nombre de anfitrión real"
 ],
 "Reboot": [
  null,
  "Reiniciar"
 ],
 "Recent": [
  null,
  "Reciente"
 ],
 "Removals:": [
  null,
  "Eliminaciones:"
 ],
 "Removing $0": [
  null,
  "Quitando $0"
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
 "Report": [
  null,
  "Informe"
 ],
 "Reported": [
  null,
  "Informado"
 ],
 "Reporter 'reporter-ureport' not found.": [
  null,
  "Informador 'reporter-ureport' no encontrado."
 ],
 "Reporting was unsucessful. Try running `reporter-ureport -d ": [
  null,
  "Informando no tuvo éxito. Intente ejecutar `reporter-ureport -d "
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
  "Claves de Shell Seguras"
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
 "Set Time": [
  null,
  "Ajustar Hora"
 ],
 "Severity": [
  null,
  "Severidad"
 ],
 "Show fingerprints": [
  null,
  "Mostrar huellas dactilares"
 ],
 "Shut Down": [
  null,
  "Apagar"
 ],
 "Slot": [
  null,
  "Espacio"
 ],
 "Sockets": [
  null,
  "Sockets"
 ],
 "Specific Time": [
  null,
  "Hora Específica"
 ],
 "Store metrics": [
  null,
  "Métricas de la tienda"
 ],
 "Sunday": [
  null,
  "Domingo"
 ],
 "Swap Used": [
  null,
  "Swap utilizada"
 ],
 "Synchronized": [
  null,
  "Sincronizado"
 ],
 "Synchronized with {{Server}}": [
  null,
  "Sincronizado con {{Server}}"
 ],
 "System": [
  null,
  "Sistema"
 ],
 "System Information": [
  null,
  "Información del Sistema"
 ],
 "System Services": [
  null,
  "Servicios de Sistema"
 ],
 "System Time": [
  null,
  "Hora del Sistema"
 ],
 "Targets": [
  null,
  "Objetivos"
 ],
 "Terminal": [
  null,
  "Terminal"
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  "Esta unidad no está diseñada para ser habilitada explícitamente."
 ],
 "Thursday": [
  null,
  "Jueves"
 ],
 "Time Zone": [
  null,
  "Zona Horaria"
 ],
 "Timers": [
  null,
  "Temporizadores"
 ],
 "Total size: $0": [
  null,
  "Tamaño total: $0"
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  "Intentando sincronizar con {{Server}}"
 ],
 "Tuesday": [
  null,
  "Martes"
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "Used": [
  null,
  "Usado"
 ],
 "User": [
  null,
  "Usuario"
 ],
 "Vendor": [
  null,
  "Proveedor"
 ],
 "Version": [
  null,
  "Versión"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Esperando a que finalicen otras operaciones de gestión de software"
 ],
 "Warning and above": [
  null,
  "Precaución y arriba"
 ],
 "Wednesday": [
  null,
  "Miércoles"
 ],
 "Weeks": [
  null,
  "Semanas"
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
 ]
}));
