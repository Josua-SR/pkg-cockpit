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
 "$0 disk is missing": [
  "$0 disks are missing",
  "Falta $0 disco",
  "Faltan $0 discos"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Control": [
  null,
  "Control"
 ],
 "Empty": [
  null,
  "Vaciar"
 ],
 "Error": [
  null,
  "Error"
 ],
 "Memory": [
  null,
  "Memoria"
 ],
 "Network": [
  null,
  "Red"
 ],
 "No matching files found": [
  null,
  "No se han encontrado ficheros coincidentes"
 ],
 "Not Ready": [
  null,
  "No está listo"
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
 "Path to file": [
  null,
  "Ruta al fichero"
 ],
 "Ready": [
  null,
  "Listo"
 ],
 "Too many files found": [
  null,
  "Encontrados demasiados archivos"
 ],
 "Unavailable": [
  null,
  "No Disponible"
 ],
 "User": [
  null,
  "Usuario"
 ],
 "undefined": [
  null,
  "sin definir"
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "Falta $0 disco",
  "Faltan $0 discos"
 ],
 "key\u0004Control": [
  null,
  "Control"
 ],
 "verb\u0004Empty": [
  null,
  "Vacío"
 ],
 "verb\u0004Ready": [
  null,
  "Preparado"
 ]
}));
