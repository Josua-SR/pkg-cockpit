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
 "$0 key ID": [
  null,
  "$0 ID de clave"
 ],
 "$0 package": [
  null,
  "$0 paquete"
 ],
 "$0 packages": [
  null,
  "$0 paquetes"
 ],
 "- Add New Repository": [
  null,
  "- Añadir un repositorio nuevo"
 ],
 "Add": [
  null,
  "Añadir"
 ],
 "Add Another Key": [
  null,
  "Añadir otra clave"
 ],
 "Additions": [
  null,
  "Añadidos"
 ],
 "Apply": [
  null,
  "Aplicar"
 ],
 "Available": [
  null,
  "Disponible"
 ],
 "Begins with '-----BEGIN PGP PUBLIC KEY BLOCK-----'": [
  null,
  "Empieza con '-----BEGIN PGP PUBLIC KEY BLOCK-----'"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Change Repository": [
  null,
  "Cambiar Repositorio"
 ],
 "Check for Updates": [
  null,
  "Comprobacióin de Actualizaciones"
 ],
 "Checking for updates": [
  null,
  "Chequeando por actualizaciones"
 ],
 "Connecting to OSTree": [
  null,
  "Conectando al Árbol de SO"
 ],
 "Couldn't load settings for '$0': $1": [
  null,
  "No podría cargar ajustes para '$0': $1"
 ],
 "Currently using:": [
  null,
  "Usando actualmente:"
 ],
 "Default": [
  null,
  "Predeterminado"
 ],
 "Delete": [
  null,
  "Eliminar"
 ],
 "Downgrades": [
  null,
  "Rebajas"
 ],
 "Error loading remotes: $0": [
  null,
  "Error cargando remotos: $0"
 ],
 "Expired Signature": [
  null,
  "Firma caducada"
 ],
 "Failed": [
  null,
  "Falló"
 ],
 "Good Signature": [
  null,
  "Buena Firma"
 ],
 "Invalid Signature": [
  null,
  "La firma no es válida"
 ],
 "Name": [
  null,
  "Nombre"
 ],
 "No Deployments": [
  null,
  "No hay Despliegues"
 ],
 "No OSTree deployments found": [
  null,
  "No se encontraron despliegues de OSTree"
 ],
 "No configuration data found": [
  null,
  "No se encontró ningún dato de configuración"
 ],
 "No signature avaliable": [
  null,
  "No hay firma disponible"
 ],
 "Not authorized to update software on this system": [
  null,
  "No esta autorizado para actualizar software en este sistema"
 ],
 "OS $0 not found": [
  null,
  "OS $0 no encontrado"
 ],
 "OSTree is not available on this system": [
  null,
  "OSTree no esta disponible para este sistema"
 ],
 "Operating System": [
  null,
  "Sistema Operativo"
 ],
 "Operating System Updates": [
  null,
  "Actualizaciones de Sistema Operativo"
 ],
 "Origin": [
  null,
  "Origen"
 ],
 "Packages": [
  null,
  "Paquetes"
 ],
 "Please provide a valid URL": [
  null,
  "Proporcione un URL válido"
 ],
 "Please provide a valid name": [
  null,
  "Por favor provea un nombre valido"
 ],
 "Rebase and Reboot": [
  null,
  "Reorganizar y reiniciar"
 ],
 "Receiving delta parts": [
  null,
  "Reciviendo deltas"
 ],
 "Receiving metadata objects": [
  null,
  "Recibiendo metadatos"
 ],
 "Receiving objects: $0%": [
  null,
  "Recibiendo objetos: $0%"
 ],
 "Reconnect": [
  null,
  "Reconectarse"
 ],
 "Released": [
  null,
  "Lanzado"
 ],
 "Removals": [
  null,
  "Removidos"
 ],
 "Roll Back and Reboot": [
  null,
  "Revertir y reiniciar"
 ],
 "Running": [
  null,
  "Corriendo"
 ],
 "Scanning metadata": [
  null,
  "Escaneando metadatos"
 ],
 "Signature": [
  null,
  "Firma"
 ],
 "Signed by": [
  null,
  "Firmado por"
 ],
 "Software Updates": [
  null,
  "Actualizaciones de Software"
 ],
 "Status": [
  null,
  "Estado"
 ],
 "This deployment contains the same packages as your currently booted system": [
  null,
  "Este despliegue contiene los mismos paquetes que su sistema actualmente arrancado"
 ],
 "Tree": [
  null,
  "Árbol"
 ],
 "URL": [
  null,
  ""
 ],
 "Unable to communicate with OSTree": [
  null,
  ""
 ],
 "Update and Reboot": [
  null,
  ""
 ],
 "Updates": [
  null,
  "Actualizaciones"
 ],
 "Updating": [
  null,
  "Actualizando"
 ],
 "Use trusted GPG key": [
  null,
  ""
 ],
 "Version": [
  null,
  "Versión"
 ],
 "When": [
  null,
  ""
 ],
 "Writing objects": [
  null,
  "Escribiendo objetos"
 ],
 "at": [
  null,
  ""
 ]
}));
