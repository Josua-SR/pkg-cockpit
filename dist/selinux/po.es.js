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
 "$0 occurrence": [
  "$1 occurrences",
  "$1 ocurrencia",
  "$1 ocurrencias"
 ],
 "Apply this solution": [
  null,
  "Aplicar esta solución"
 ],
 "Applying solution...": [
  null,
  "Aplicando solución..."
 ],
 "Audit log": [
  null,
  "Registro de auditoria"
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  "Conectando al demonio SETroubleshoot..."
 ],
 "Enforce policy:": [
  null,
  "Aplicar la política:"
 ],
 "Error while deleting alert: $0": [
  null,
  "Error mientras se eliminaba la alerta: $0"
 ],
 "Error while setting SELinux mode: '$0'": [
  null,
  "Error al establecer modo de SELinux:  '$0'"
 ],
 "Failed to delete alert: $0": [
  null,
  "Fallo al eliminar la alerta: $0"
 ],
 "Install setroubleshoot-server to troubleshoot SELinux events.": [
  null,
  "Instale «setroubleshoot-server» para solucionar problemas con sucesos de SELinux."
 ],
 "No SELinux alerts.": [
  null,
  "No hay ninguna alerta de SELinux."
 ],
 "Not connected": [
  null,
  "No conectado"
 ],
 "Occurred $0": [
  null,
  "Ocurrió $0"
 ],
 "Occurred between $0 and $1": [
  null,
  "Ocurrió entre $0 y $1"
 ],
 "SELinux Access Control Errors": [
  null,
  "Errores de control de acceso de SELinux"
 ],
 "SELinux Policy": [
  null,
  "Normativa de SELinux"
 ],
 "SELinux Troubleshoot": [
  null,
  "Solución de problemas de SELinux"
 ],
 "SELinux is disabled on the system": [
  null,
  "Se ha desactivado SELinux en el sistema"
 ],
 "SELinux is disabled on the system.": [
  null,
  "Se ha desactivado SELinux en el sistema."
 ],
 "SELinux system status is unknown.": [
  null,
  "Se desconoce el estado de sistema de SELinux."
 ],
 "Setting deviates from the configured state and will revert on the next boot.": [
  null,
  "Los ajustes se desvían del estado configurado y serán revertidos en el próximo arranque."
 ],
 "Solution applied successfully": [
  null,
  "Solución aplicada con éxito"
 ],
 "Solution failed": [
  null,
  "Fallo en la solución"
 ],
 "Solutions": [
  null,
  "Soluciones"
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  "El estado configurado es desconocido, podría cambiar en el próximo arranque."
 ],
 "Unable to apply this solution automatically": [
  null,
  "Incapaz de aplicar esta solución automáticamente"
 ],
 "Unable to get alert details.": [
  null,
  "Incapaz de obtener detalles de la alerta."
 ],
 "Unable to get alert: $0": [
  null,
  "Incapaz de obtener alerta: $0"
 ],
 "Unable to run fix: %0": [
  null,
  "Incapaz de ejecutar correción: %0"
 ],
 "Unable to start setroubleshootd": [
  null,
  "No se pudo iniciar setroubleshootd"
 ],
 "Waiting for details...": [
  null,
  "Esperando detalles..."
 ],
 "solution details": [
  null,
  "detalles de solución"
 ]
}));
