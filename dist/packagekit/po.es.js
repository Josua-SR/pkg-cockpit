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
 "$0 Package": [
  "$0 Packages",
  "",
  ""
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 no está disponible en ningún repositorio"
 ],
 "$0 update": [
  "$0 updates",
  "$0 actualización.",
  "$0 actualizaciones."
 ],
 "$0 will be installed.": [
  null,
  "Se instalará $0"
 ],
 "$1 security fix": [
  "$1 security fixes",
  "$1 corrección de seguridad",
  "$1 correcciones de seguridad"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  ", incluyendo la corrección de seguridad $1 ",
  ", incluyendo las correcciones de seguridad $1"
 ],
 "Additional packages:": [
  null,
  "Paquetes adicionales:"
 ],
 "Apply all updates": [
  null,
  "Aplicar todas las actualizaciones"
 ],
 "Apply security updates": [
  null,
  "Aplicar actualizaciones de seguridad"
 ],
 "Applying updates": [
  null,
  "Aplicando actualizaciones"
 ],
 "Applying updates failed": [
  null,
  "Falló aplicar actualizaciones. "
 ],
 "Automatic Updates": [
  null,
  "Actualizaciones Automáticas"
 ],
 "Available Updates": [
  null,
  "Actualizaciones Disponibles"
 ],
 "Bugs:": [
  null,
  "Errores:"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Check for Updates": [
  null,
  "Comprobacióin de Actualizaciones"
 ],
 "Checking installed software": [
  null,
  "Comprobando el software instalado"
 ],
 "Details": [
  null,
  "Detalles"
 ],
 "Downloaded": [
  null,
  "Descargado"
 ],
 "Downloading": [
  null,
  "Descargando"
 ],
 "Downloading $0": [
  null,
  "Descargando $0"
 ],
 "Errata:": [
  null,
  "Errata:"
 ],
 "Fridays": [
  null,
  ""
 ],
 "Ignore": [
  null,
  "Ignorar"
 ],
 "Initializing...": [
  null,
  "Inicializando..."
 ],
 "Install": [
  null,
  "Instalar"
 ],
 "Install All Updates": [
  null,
  "Instalar todas las Actualizaciones"
 ],
 "Install Security Updates": [
  null,
  "Instalar Actualizaciones de Seguridad"
 ],
 "Install Software": [
  null,
  "Instalar software"
 ],
 "Installed": [
  null,
  "Instalado"
 ],
 "Installing": [
  null,
  "Instalando"
 ],
 "Installing $0": [
  null,
  "Instalando $0"
 ],
 "Last checked: $0 ago": [
  null,
  "Ultima revisión: $0 atrás"
 ],
 "Loading available updates failed": [
  null,
  "Fallo la carga de  las actualizaciones disponibles "
 ],
 "Loading available updates, please wait...": [
  null,
  "Leyendo actualizaciones disponibles, por favor espere..."
 ],
 "Mondays": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nombre"
 ],
 "No updates pending": [
  null,
  "No hay actualizaciones pendientes"
 ],
 "Ok": [
  null,
  "Aceptar"
 ],
 "Package information": [
  null,
  "Información del paquete"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit roto"
 ],
 "PackageKit is not installed": [
  null,
  "PackageKit no está instalado"
 ],
 "PackageKit reported error code $0": [
  null,
  "PackageKit reportó error con código $0"
 ],
 "Refreshing package information": [
  null,
  "Refrescando información del paquete"
 ],
 "Register…": [
  null,
  "Registro…"
 ],
 "Removals:": [
  null,
  "Eliminaciones:"
 ],
 "Removing $0": [
  null,
  "Quitando $0"
 ],
 "Restart Now": [
  null,
  "Reiniciar Ahora"
 ],
 "Restart Recommended": [
  null,
  "Reinicio Recomendado"
 ],
 "Restarting": [
  null,
  "Reiniciando"
 ],
 "Saturdays": [
  null,
  ""
 ],
 "Set up": [
  null,
  "Preparar"
 ],
 "Setting up": [
  null,
  "Configurar"
 ],
 "Severity": [
  null,
  "Severidad"
 ],
 "Severity:": [
  null,
  "Severidad:"
 ],
 "Software Updates": [
  null,
  "Actualizaciones de Software"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  "Algún otro programa está usando actualmente el gestor de paquetes, por favor espere..."
 ],
 "Sundays": [
  null,
  ""
 ],
 "System is up to date": [
  null,
  "El sistema está actualizado"
 ],
 "This system is not registered": [
  null,
  "Este sistema no está registrado"
 ],
 "This web console will be updated.": [
  null,
  "Esta consola web será actualizada."
 ],
 "Thursdays": [
  null,
  ""
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  "Para obtener actualizaciones de software, este sistema necesita ser registrado en Red Hat, bien usando el Portal de Usuario de Red Hat o un servidor de suscripción local."
 ],
 "Total size: $0": [
  null,
  "Tamaño total: $0"
 ],
 "Tuesdays": [
  null,
  ""
 ],
 "Update History": [
  null,
  "Histórico de Actualización"
 ],
 "Update Log": [
  null,
  "Actualizar Registro"
 ],
 "Updated": [
  null,
  "Actualizado"
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  "Los paquetes actualizados pueden requerir un reinicio para tener efecto."
 ],
 "Updating": [
  null,
  "Actualizando"
 ],
 "Verified": [
  null,
  "Verificado"
 ],
 "Verifying": [
  null,
  "Verificando"
 ],
 "Version": [
  null,
  "Versión"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Esperando a que finalicen otras operaciones de gestión de software"
 ],
 "Wednesdays": [
  null,
  ""
 ],
 "Your browser will disconnect, but this does not affect the update process. You can reconnect in a few moments to continue watching the progress.": [
  null,
  "Su navegador se desconectará pero esto no afectará al proceso de actualización. Usted puede volver a conectar en breves momentos para continuar vigilando el progreso."
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  "Se servidor cerrará la conexión pronto. Usted puede volver a conectar después de que se reinicie."
 ],
 "and restart the machine automatically.": [
  null,
  "y reinicia la máquina automáticamente."
 ],
 "at": [
  null,
  "en"
 ],
 "bug fix": [
  null,
  "arreglo del fallo"
 ],
 "enhancement": [
  null,
  "mejora"
 ],
 "every day": [
  null,
  "cada día"
 ],
 "security": [
  null,
  "seguridad"
 ],
 "undefined": [
  null,
  "sin definir"
 ]
}));
