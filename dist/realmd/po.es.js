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
 "$0 is not available from any repository.": [
  null,
  "$0 no está disponible en ningún repositorio"
 ],
 "$0 will be installed.": [
  null,
  "Se instalará $0"
 ],
 "Additional packages:": [
  null,
  "Paquetes adicionales:"
 ],
 "Administrator Password": [
  null,
  "Contraseña de Administrador"
 ],
 "After leaving the domain, only users with local credentials will be able to log into this machine. This may also affect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  ""
 ],
 "Authentication": [
  null,
  "Autenticación"
 ],
 "Automatic": [
  null,
  "Automático"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Checking installed software": [
  null,
  "Comprobando el software instalado"
 ],
 "Client Software": [
  null,
  ""
 ],
 "Computer OU": [
  null,
  "Computadora OU"
 ],
 "Contacted domain": [
  null,
  ""
 ],
 "Domain": [
  null,
  "Dominio"
 ],
 "Domain $0 could not be contacted": [
  null,
  "Dominio $0 no puede ser contactado"
 ],
 "Domain $0 is not supported": [
  null,
  "Dominio $0 no esta soportado"
 ],
 "Domain Address": [
  null,
  "Dirección de Dominio"
 ],
 "Domain Administrator Name": [
  null,
  "Nombre del Administrador de Dominio"
 ],
 "Domain Administrator Password": [
  null,
  "Contraseña del Administrador de Dominio"
 ],
 "Downloading $0": [
  null,
  "Descargando $0"
 ],
 "Host name should not be changed in a domain": [
  null,
  ""
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
 "Join": [
  null,
  "Unirse"
 ],
 "Join Domain": [
  null,
  "Unirse a Dominio"
 ],
 "Join a Domain": [
  null,
  "Unirse a un dominio"
 ],
 "Joining this domain is not supported": [
  null,
  "Unirse a este dominio no esta soportado"
 ],
 "Leave Domain": [
  null,
  "Abandonar el dominio"
 ],
 "Login Format": [
  null,
  ""
 ],
 "More": [
  null,
  "Más"
 ],
 "Next": [
  null,
  "Siguiente"
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
 "One Time Password": [
  null,
  "Contraseña de un solo uso"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit roto"
 ],
 "Removals:": [
  null,
  "Eliminaciones:"
 ],
 "Removing $0": [
  null,
  "Quitando $0"
 ],
 "Server Software": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "El usuario <b>$0</b> no está autorizado a modificar dominios"
 ],
 "This may take a while": [
  null,
  "Esto podría tomar un momento"
 ],
 "Total size: $0": [
  null,
  "Tamaño total: $0"
 ],
 "User Name": [
  null,
  "Nombre de usuario"
 ],
 "User Password": [
  null,
  "Contraseña de usuario"
 ],
 "Validating address": [
  null,
  ""
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Esperando a que finalicen otras operaciones de gestión de software"
 ],
 "e.g. \"$0\"": [
  null,
  "p. ej., «$0»"
 ]
}));
