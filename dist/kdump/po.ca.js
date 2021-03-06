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
  "language": "ca",
  "x-generator": "Zanata 4.6.2"
 },
 "Apply": [
  null,
  "Aplica"
 ],
 "Cancel": [
  null,
  "Cancel·la"
 ],
 "Compress crash dumps to save space": [
  null,
  "Comprimeix els estavellaments per estalviar espai"
 ],
 "Compression": [
  null,
  "Compressió"
 ],
 "Crash dump location": [
  null,
  "Ubicació del bolcat de l'estavellament"
 ],
 "Crash system": [
  null,
  ""
 ],
 "Directory": [
  null,
  "Directori"
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  "No es pot escriure al directori $0 o bé no existeix."
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  "El servei de Kdump no està instal·lat. Assegureu-vos que el paquet kexec-tools estigui instal·lat."
 ],
 "Kernel Dump": [
  null,
  "Bolcat del kernel"
 ],
 "Loading...": [
  null,
  "S'està carregant..."
 ],
 "Local Filesystem": [
  null,
  "Sistema de fitxers local"
 ],
 "Location": [
  null,
  "Ubicació"
 ],
 "More details": [
  null,
  "Més detalls"
 ],
 "Mount": [
  null,
  "Munta"
 ],
 "No configuration found": [
  null,
  "No s'ha trobat cap configuració"
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  "No hi ha memòria reservada. Afegiu crashkernel a la línia d'ordres del kernel (p. ex. a /etc/default/grub) per reservar memòria en temps d'arrencada. Exemple: crashkernel=512M"
 ],
 "None": [
  null,
  "Cap"
 ],
 "Ok": [
  null,
  "D'acord"
 ],
 "On a mounted device": [
  null,
  "Amb un dispositiu muntat"
 ],
 "Raw to a device": [
  null,
  ""
 ],
 "Reading...": [
  null,
  "S'està llegint..."
 ],
 "Remote over NFS": [
  null,
  "Remot sobre NFS"
 ],
 "Remote over SSH": [
  null,
  "Remot sobre SSH"
 ],
 "Reserved memory": [
  null,
  "Memòria reservada"
 ],
 "Server": [
  null,
  "Servidor"
 ],
 "Service has an error": [
  null,
  "El servei té un error"
 ],
 "Service is running": [
  null,
  "El servei s'està executant"
 ],
 "Service is starting": [
  null,
  "El servei s'està iniciant"
 ],
 "Service is stopped": [
  null,
  "El servei està aturat"
 ],
 "Service is stopping": [
  null,
  "El servei s'està aturant"
 ],
 "Test Configuration": [
  null,
  "Prova la configuració"
 ],
 "Test is only available while the kdump service is running.": [
  null,
  "Això només està disponible mentre el servei kdump està en execució."
 ],
 "Test kdump settings": [
  null,
  "Prova els ajusts de kdump"
 ],
 "This will test kdump settings by crashing the kernel and thereby the system. Depending on the settings, the system may not automatically reboot and the process may take a while.": [
  null,
  "Això provarà la configuració de kdump en fer estavellar el kernel i, per tant, el sistema. En funció dels ajusts, el sistema pot no reiniciar-se automàticament i el procés pot trigar una estona."
 ],
 "This will test the kdump configuration by crashing the kernel.": [
  null,
  "Això provarà la configuració de kdump en fer estavellar el kernel."
 ],
 "Unable to apply settings: $0": [
  null,
  "No es poden aplicar els ajusts: $0"
 ],
 "invalid: multiple targets defined": [
  null,
  "no és vàlid: s'han definit diversos objectius"
 ],
 "kdump status": [
  null,
  "Estat de kdump"
 ],
 "locally in $0": [
  null,
  "localment a $0"
 ],
 "nfs dump target isn't formated as server:path": [
  null,
  ""
 ],
 "ssh key": [
  null,
  "clau ssh"
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
  "indefinit"
 ]
}));
