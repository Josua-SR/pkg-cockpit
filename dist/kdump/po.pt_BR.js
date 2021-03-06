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
  "language": "pt_BR",
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
  "Comprimir despejos de travamento para economizar espaço"
 ],
 "Compression": [
  null,
  "Compressão"
 ],
 "Crash dump location": [
  null,
  "Local de despejo de travamento"
 ],
 "Crash system": [
  null,
  "Sistema de travamento"
 ],
 "Directory": [
  null,
  "Diretório"
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  "O diretório $0 não é gravável ou não existe."
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  "Serviço Kdump não instalado. Assegure-se de que o pacote kexec-tools está instalado."
 ],
 "Kernel Dump": [
  null,
  "Kernel Dump"
 ],
 "Loading...": [
  null,
  "Carregando..."
 ],
 "Local Filesystem": [
  null,
  "Sistema de Arquivos Local"
 ],
 "Location": [
  null,
  "Localização"
 ],
 "More details": [
  null,
  "Mais detalhes"
 ],
 "Mount": [
  null,
  "Montar"
 ],
 "No configuration found": [
  null,
  "Nenhuma configuração encontrada"
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  "Nenhuma memória reservada. Acrescente uma opção crashkernel à linha de comando do kernel (por exemplo, em  /etc/default/grub) para reservar memória no momento de inicialização. Exemplo: crashkernel=512M"
 ],
 "None": [
  null,
  "Nenhum"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On a mounted device": [
  null,
  "Em um dispositivo montado"
 ],
 "Raw to a device": [
  null,
  "Raw para um dispositivo"
 ],
 "Reading...": [
  null,
  "Lendo..."
 ],
 "Remote over NFS": [
  null,
  "Remoto sobre NFS"
 ],
 "Remote over SSH": [
  null,
  "Remoto sobre SSH"
 ],
 "Reserved memory": [
  null,
  "Memória reservada"
 ],
 "Server": [
  null,
  "Servidor"
 ],
 "Service has an error": [
  null,
  "O serviço tem um erro"
 ],
 "Service is running": [
  null,
  "O serviço está em execução"
 ],
 "Service is starting": [
  null,
  "O serviço está iniciando"
 ],
 "Service is stopped": [
  null,
  "O serviço parou"
 ],
 "Service is stopping": [
  null,
  "Serviço está a parar"
 ],
 "Test Configuration": [
  null,
  "Configuração Teste"
 ],
 "Test is only available while the kdump service is running.": [
  null,
  "O teste só está disponível enquanto o serviço kdump está em execução."
 ],
 "Test kdump settings": [
  null,
  "Testar configurações kdump"
 ],
 "This will test kdump settings by crashing the kernel and thereby the system. Depending on the settings, the system may not automatically reboot and the process may take a while.": [
  null,
  "Isso irá testar as configurações de kdump, quebrando o kernel e, desse modo, o sistema. Dependendo das configurações, o sistema não pode reiniciar automaticamente e o processo pode demorar um pouco."
 ],
 "This will test the kdump configuration by crashing the kernel.": [
  null,
  "Isso testará a configuração do kdump, quebrando o kernel."
 ],
 "Unable to apply settings: $0": [
  null,
  "ão é possível aplicar as configurações: $0"
 ],
 "invalid: multiple targets defined": [
  null,
  "inválido: vários destinos definidos"
 ],
 "kdump status": [
  null,
  "status kdump"
 ],
 "locally in $0": [
  null,
  "localmente em $0"
 ],
 "nfs dump target isn't formated as server:path": [
  null,
  "destino de despejo nfs não é formatado como servidor: caminho"
 ],
 "ssh key": [
  null,
  "chave ssh"
 ],
 "ssh key isn't a path": [
  null,
  "chave ssh não é um caminho"
 ],
 "ssh server is empty": [
  null,
  "servidor ssh está vazio"
 ],
 "undefined": [
  null,
  "indefinido"
 ]
}));
