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
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Close": [
  null,
  "Cerrar"
 ],
 "Create Report": [
  null,
  "Crear Reporte"
 ],
 "Create diagnostic report": [
  null,
  "Crear reporte de diagnóstico"
 ],
 "Diagnostic reports": [
  null,
  "Reportes de diagnostico"
 ],
 "Done!": [
  null,
  "Hecho!"
 ],
 "Download report": [
  null,
  "Informe de descarga"
 ],
 "Generating report": [
  null,
  "Generando reporte"
 ],
 "No archive has been created.": [
  null,
  "No archive has been created."
 ],
 "The collected information will be stored locally on the system.": [
  null,
  "La información recolectada será almacenada localmente en el sistema."
 ],
 "The generated archive contains data considered sensitive and its content should be reviewed by the originating organization before being passed to any third party.": [
  null,
  "El archivo generado contiene datos considerados sensibles y su contenido debería ser revisados por el organización originaria antes de ser pasado a cualquier tercero."
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  "Esta herramienta recogerá la configuración del sistema e información de diagnóstico desde este sistema para su uso en la diagnosis de problemas con el sistema."
 ]
}));
