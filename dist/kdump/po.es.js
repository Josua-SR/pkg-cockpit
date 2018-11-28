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
 "Apply": [
  null,
  "Aplicar"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Compress crash dumps to save space": [
  null,
  "Comprimir volcado de errores para ahorrar espacio"
 ],
 "Compression": [
  null,
  "Compresión"
 ],
 "Crash dump location": [
  null,
  "Localización del volcado de errores"
 ],
 "Crash system": [
  null,
  "Error del sistema"
 ],
 "Directory": [
  null,
  "Directorio"
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  "El directorio $0 no es editable o no existe."
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  "No se ha instalado el servicio Kdump. Asegúrese de que esté instalado el paquete «kexec-tools»."
 ],
 "Kernel Dump": [
  null,
  "Volcado del Kernel"
 ],
 "Loading...": [
  null,
  "Cargando..."
 ],
 "Local Filesystem": [
  null,
  "Sistema de archivos local"
 ],
 "Location": [
  null,
  "Ubicación"
 ],
 "More details": [
  null,
  "Más detalles"
 ],
 "Mount": [
  null,
  "Montar"
 ],
 "No configuration found": [
  null,
  "No se encontró ninguna configuración"
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  "No se ha reservado memoria. Anexe una opción de «crashkernel» a la consola del núcleo (p. ej. en /etc/default/grub) para reservar memoria durante el arranque. Ejemplo: crashkernel=512M"
 ],
 "None": [
  null,
  "Ninguno"
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
 "On a mounted device": [
  null,
  "Al montarse un dispositivo"
 ],
 "Raw to a device": [
  null,
  "Sin procesar a un dispositivo"
 ],
 "Reading...": [
  null,
  "Consultando…"
 ],
 "Remote over NFS": [
  null,
  "Remoto a través de NFS"
 ],
 "Remote over SSH": [
  null,
  "Remoto sobre SSH"
 ],
 "Reserved memory": [
  null,
  "Memoria reservada"
 ],
 "Server": [
  null,
  "Servidor"
 ],
 "Service has an error": [
  null,
  "El servicio tiene un error"
 ],
 "Service is running": [
  null,
  "Se está ejecutando el servicio"
 ],
 "Service is starting": [
  null,
  "Se está iniciando el servicio"
 ],
 "Service is stopped": [
  null,
  "Se ha detenido el servicio"
 ],
 "Service is stopping": [
  null,
  "Se está deteniendo el servicio"
 ],
 "Test Configuration": [
  null,
  "Comprobar la configuración"
 ],
 "Test is only available while the kdump service is running.": [
  null,
  "Las pruebas solo están disponibles cuando el servicio kdump está corriendo."
 ],
 "Test kdump settings": [
  null,
  "Ajustes de prueba kdump"
 ],
 "This will test kdump settings by crashing the kernel and thereby the system. Depending on the settings, the system may not automatically reboot and the process may take a while.": [
  null,
  "Esto probará la configuración kdump bloqueando el núcleo y por lo tanto el sistema. Dependiendo de los ajustes, el sistema puede que no se reinicie automáticamente y el proceso tardará un tiempo."
 ],
 "This will test the kdump configuration by crashing the kernel.": [
  null,
  "Esto probará la configuración kdump bloqueando el núcleo."
 ],
 "Unable to apply settings: $0": [
  null,
  "Incapaz de aplicar los ajustes: $0"
 ],
 "invalid: multiple targets defined": [
  null,
  "no válido: definidos múltiples objetivos"
 ],
 "kdump status": [
  null,
  "estado de kdump"
 ],
 "locally in $0": [
  null,
  "localmente en $0"
 ],
 "nfs dump target isn't formated as server:path": [
  null,
  ""
 ],
 "ssh key": [
  null,
  "clave ssh"
 ],
 "ssh key isn't a path": [
  null,
  ""
 ],
 "ssh server is empty": [
  null,
  ""
 ],
 "undefined": [
  null,
  "sin definir"
 ]
}));
