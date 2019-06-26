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
 "Applications": [
  null,
  "Aplicaciones"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Checking for new applications": [
  null,
  "Requisitos para las nuevas aplicaciones"
 ],
 "Close": [
  null,
  "Cerrar"
 ],
 "Error": [
  null,
  "Error"
 ],
 "Go to Application": [
  null,
  "Ir a la aplicación"
 ],
 "Install": [
  null,
  "Instalar"
 ],
 "Installing": [
  null,
  "Instalando"
 ],
 "No applications installed or available": [
  null,
  "No hay aplicaciones instaladas o disponibles"
 ],
 "No description provided.": [
  null,
  "No se ha suministrado descripción."
 ],
 "No installation package found for this application.": [
  null,
  "No se ha encontrado paquete de instalación para esta aplicación."
 ],
 "Ok": [
  null,
  "Aceptar"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit roto"
 ],
 "Remove": [
  null,
  "Eliminar"
 ],
 "Removing": [
  null,
  "Quitando"
 ],
 "Unknown Application": [
  null,
  "Aplicación Desconocida"
 ],
 "Waiting for other programs to finish using the package manager...": [
  null,
  "Esperando que otros programas terminen de usar el gestor de paquetes..."
 ]
}));
