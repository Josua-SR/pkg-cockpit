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
  "language": "pt_BR",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 está disponível para a maioria dos sistemas operacionais. Para instalá-lo, procure-o no GNOME Software ou execute o seguinte:"
 ],
 "Activate": [
  null,
  "Ativar"
 ],
 "Add": [
  null,
  "Adicionar"
 ],
 "Add Disk": [
  null,
  "Adicionar disco"
 ],
 "Address": [
  null,
  "Endereço"
 ],
 "Address:": [
  null,
  "Endereço:"
 ],
 "Always attach": [
  null,
  "Sempre anexar"
 ],
 "Apply": [
  null,
  "Aplicar"
 ],
 "Automatically start libvirt on boot": [
  null,
  "Iniciar automaticamente a libvirt na inicialização"
 ],
 "Autostart": [
  null,
  ""
 ],
 "Available": [
  null,
  "Disponível"
 ],
 "Boot Order": [
  null,
  ""
 ],
 "Bus": [
  null,
  "Bus"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "A ação MUDAR DE ESTADO DE REDE falhou"
 ],
 "CPU Type": [
  null,
  "Tipo da CPU"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Capacity": [
  null,
  "Capacidade"
 ],
 "Changes will take effect after shutting down the VM": [
  null,
  "As alterações entrarão em vigor após o desligamento da VM"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "Clicar em \"Iniciar Visualizador Remoto\" fará o download de um arquivo .vv e será iniciado $0."
 ],
 "Connect with any $0 viewer application.": [
  null,
  "Conecte-se com qualquer $0 aplicativo visualizador ."
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "Conecte-se com qualquer aplicativo visualizador SPICE ou VNC."
 ],
 "Connecting": [
  null,
  "Conectando"
 ],
 "Connecting to Virtualization Service": [
  null,
  "Conectando-se ao serviço de virtualização"
 ],
 "Connection": [
  null,
  "Conexão"
 ],
 "Console Type": [
  null,
  "Tipo de console"
 ],
 "Consoles": [
  null,
  "Consoles"
 ],
 "Cores per socket": [
  null,
  "Núcleos por soquete"
 ],
 "Create": [
  null,
  "Criar"
 ],
 "Create New": [
  null,
  "Criar novo"
 ],
 "Create Storage Pool": [
  null,
  "Criar pool de armazenamento"
 ],
 "Create VM": [
  null,
  "Criar VM"
 ],
 "Creation of vm $0 failed": [
  null,
  "Criação da vm $0 falhou"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "Deactivate": [
  null,
  "Desativar"
 ],
 "Delete": [
  null,
  "Excluir"
 ],
 "Delete Content": [
  null,
  ""
 ],
 "Delete Storage Pool $0": [
  null,
  ""
 ],
 "Delete associated storage files:": [
  null,
  "Excluir arquivos de armazenamento associados:"
 ],
 "Delete the Volumes inside this Pool": [
  null,
  ""
 ],
 "Deleting an inactive Storage Pool will only undefine the Pool. Its content will not be deleted.": [
  null,
  ""
 ],
 "Device": [
  null,
  "Dispositivo"
 ],
 "Disconnect": [
  null,
  "Desconectar"
 ],
 "Disconnected": [
  null,
  "Desconectado"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  "Desconectado do console serial. Clique no botão Reconectar."
 ],
 "Disk failed to be attached": [
  null,
  "Disco falhou ao ser anexado"
 ],
 "Disk failed to be created": [
  null,
  "Disco falhou ao ser criado"
 ],
 "Disks": [
  null,
  "Discos"
 ],
 "Download the MSI from $0": [
  null,
  "Baixe o MSI de $0"
 ],
 "Edit": [
  null,
  "Editar"
 ],
 "Emulated Machine": [
  null,
  ""
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Menos do que o número máximo de CPUs virtuais deve ser ativado."
 ],
 "File": [
  null,
  "Arquivo"
 ],
 "Filesystem": [
  null,
  "Sistema de arquivos"
 ],
 "Filesystem Directory": [
  null,
  "Diretório do sistema de arquivos"
 ],
 "Force Restart": [
  null,
  "Forçar Reinicialização"
 ],
 "Force Shut Down": [
  null,
  "Forçar Desligamento"
 ],
 "Format": [
  null,
  "Formate"
 ],
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  "GET HYPERVISOR MAX VCPU falhou"
 ],
 "GiB": [
  null,
  "GiB"
 ],
 "Graphics Console (VNC)": [
  null,
  "Console de gráficos (VNC)"
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  "Console gráfico no visualizador da área de trabalho"
 ],
 "Host": [
  null,
  "Máquina"
 ],
 "Host Name": [
  null,
  "Nome do host"
 ],
 "Host should not be empty": [
  null,
  "Host não deve estar vazio"
 ],
 "INSTALL VM action failed": [
  null,
  "A ação de instalação da VM falhou"
 ],
 "Immediately Start VM": [
  null,
  "Imediatamente Iniciar VM"
 ],
 "Install": [
  null,
  "Instale"
 ],
 "Installation Source": [
  null,
  "Fonte de Instalação"
 ],
 "Installation Source Type": [
  null,
  "Tipo de Fonte de Instalação"
 ],
 "Installation Source should not be empty": [
  null,
  "A fonte de instalação não deve estar vazia"
 ],
 "Invalid filename": [
  null,
  "Nome de arquivo inválido"
 ],
 "Launch Remote Viewer": [
  null,
  "Iniciar o Visualizador Remoto"
 ],
 "Loading ...": [
  null,
  "Carregando ..."
 ],
 "MAC Address": [
  null,
  "MAC Address"
 ],
 "Mac Address": [
  null,
  "Endereço MAC"
 ],
 "Manual Connection": [
  null,
  "Conexão manual"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "Número máximo de CPUs virtuais alocadas para o sistema operacional virtualizado, que deve estar entre 1 e $0"
 ],
 "Memory": [
  null,
  "Memória"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Model": [
  null,
  "Modelo"
 ],
 "Model type": [
  null,
  "Tipo de modelo"
 ],
 "More Information": [
  null,
  "Mais Informações"
 ],
 "Name": [
  null,
  "Nome"
 ],
 "Name should not be empty": [
  null,
  "O nome não deve estar vazio"
 ],
 "Network File System": [
  null,
  "Sistema de arquivos de rede"
 ],
 "Network Type": [
  null,
  "Tipo de rede"
 ],
 "Network settings could not be saved": [
  null,
  "As configurações de rede não puderam ser salvas"
 ],
 "Networks": [
  null,
  "Networks"
 ],
 "New Volume Name": [
  null,
  "Novo nome do volume"
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "Nenhum volume de armazenamento definido para este pool de armazenamento"
 ],
 "No VM is running or defined on this host": [
  null,
  "Nenhuma VM está sendo executada ou definida neste host"
 ],
 "No boot device found": [
  null,
  "Nenhum dispositivo de inicialização encontrado"
 ],
 "No console defined for this virtual machine.": [
  null,
  "Nenhum console definido para esta máquina virtual."
 ],
 "No disks defined for this VM": [
  null,
  "Nenhum disco definido para esta VM"
 ],
 "No matching files found": [
  null,
  "Nenhum arquivo correspondente encontrado"
 ],
 "No network interfaces defined for this VM": [
  null,
  "Nenhuma interface de rede definida para esta VM"
 ],
 "No storage pool is defined on this host": [
  null,
  "Nenhum conjunto de armazenamento é definido neste host"
 ],
 "No virtual networks": [
  null,
  "Nenhuma rede virtual"
 ],
 "OS Vendor": [
  null,
  "Fornecedor de SO"
 ],
 "Operating System": [
  null,
  "Sistema Operacional"
 ],
 "Overview": [
  null,
  "Visão geral"
 ],
 "Path": [
  null,
  "Caminho"
 ],
 "Path on host's filesystem": [
  null,
  "Caminho no sistema de arquivos do host"
 ],
 "Path to ISO file on host's file system": [
  null,
  "Caminho para o arquivo ISO no sistema de arquivos do host"
 ],
 "Path to file": [
  null,
  "Caminho para o arquivo"
 ],
 "Persistence": [
  null,
  "Persistência"
 ],
 "Persistent": [
  null,
  "Persistente"
 ],
 "Please enter new volume name": [
  null,
  "Por favor insira o novo nome do volume"
 ],
 "Please enter new volume size": [
  null,
  "Por favor insira o novo tamanho do volume"
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Por favor, inicie a máquina virtual para acessar seu console."
 ],
 "Plug": [
  null,
  "Plug"
 ],
 "Pool": [
  null,
  "Pool"
 ],
 "Port": [
  null,
  "Porta"
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  "Número preferido de soquetes para expor ao convidado."
 ],
 "Protocol": [
  null,
  "Protocolo"
 ],
 "QEMU/KVM System connection": [
  null,
  "Conexão do sistema QEMU / KVM"
 ],
 "QEMU/KVM User connection": [
  null,
  "Conexão do usuário QEMU / KVM"
 ],
 "Readonly": [
  null,
  "Apenasleitura"
 ],
 "Reconnect": [
  null,
  "Reconectar"
 ],
 "Remote URL": [
  null,
  "URL remoto"
 ],
 "Restart": [
  null,
  "Reiniciar"
 ],
 "Run": [
  null,
  "Executar"
 ],
 "SPICE": [
  null,
  "SPICE"
 ],
 "SPICE Address:": [
  null,
  "SPICE Endereço:"
 ],
 "SPICE Port:": [
  null,
  "SPICE Porta:"
 ],
 "SPICE TLS Port:": [
  null,
  "SPICE TLS Porta:"
 ],
 "Save": [
  null,
  "Salvar"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  "Enviar interrupção não mascarada"
 ],
 "Send key": [
  null,
  "Chave de envio"
 ],
 "Serial Console": [
  null,
  "Console Serial"
 ],
 "Session": [
  null,
  "Sessão"
 ],
 "Shut Down": [
  null,
  "Encerrar"
 ],
 "Size": [
  null,
  "Tamanho"
 ],
 "Sockets": [
  null,
  "Sockets"
 ],
 "Source": [
  null,
  "Fonte"
 ],
 "Source Path": [
  null,
  "Caminho da origem"
 ],
 "Source path should not be empty": [
  null,
  "O caminho da origem não deve estar vazio"
 ],
 "Source should start with http, ftp or nfs protocol": [
  null,
  "A fonte deve começar com o protocolo http, ftp ou nfs"
 ],
 "Start libvirt": [
  null,
  "Iniciar libvirt"
 ],
 "Start pool when host boots": [
  null,
  "Iniciar pool quando o host inicializa"
 ],
 "Startup": [
  null,
  "Comece"
 ],
 "State": [
  null,
  "Estado"
 ],
 "Storage Pool Name": [
  null,
  "Nome do pool de armazenamento"
 ],
 "Storage Pool failed to be created": [
  null,
  "O pool de armazenamento não pôde ser criado"
 ],
 "Storage Pool failed to get activated": [
  null,
  ""
 ],
 "Storage Pool failed to get deactivated": [
  null,
  ""
 ],
 "Storage Pools": [
  null,
  "Piscinas de Armazenamento"
 ],
 "Storage Size": [
  null,
  "Storage Size"
 ],
 "Storage Volumes": [
  null,
  "Volumes de Armazenamento"
 ],
 "System": [
  null,
  "Sistema"
 ],
 "Target Path": [
  null,
  "Caminho de Destino"
 ],
 "Target path should not be empty": [
  null,
  "O caminho de destino não deve estar vazio"
 ],
 "The Storage Pool could not be deleted": [
  null,
  ""
 ],
 "The VM crashed.": [
  null,
  "A VM caiu."
 ],
 "The VM is down.": [
  null,
  "A VM está desligada."
 ],
 "The VM is going down.": [
  null,
  "A VM está desligando."
 ],
 "The VM is idle.": [
  null,
  "A VM está ociosa."
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  "A VM está em processo de falha total (Desligar ou Crash não está concluída)."
 ],
 "The VM is paused.": [
  null,
  "A VM está pausada."
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  "A VM está em execução e será desativada antes da exclusão."
 ],
 "The VM is running.": [
  null,
  "A VM está em execução."
 ],
 "The VM is suspended by guest power management.": [
  null,
  "A VM é suspensa pela gerência de poder do convidado."
 ],
 "The directory on the server being exported": [
  null,
  "O diretório no servidor que está sendo exportado"
 ],
 "The pool is empty": [
  null,
  "A piscina está vazia"
 ],
 "Threads per core": [
  null,
  "Tópicos por núcleo"
 ],
 "Too many files found": [
  null,
  "Muitos arquivos encontrados"
 ],
 "Troubleshoot": [
  null,
  "Solução de problemas"
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unique name": [
  null,
  "Nome único"
 ],
 "Unplug": [
  null,
  "Desplugar"
 ],
 "Usage": [
  null,
  "Uso"
 ],
 "Use Existing": [
  null,
  "Usar existente"
 ],
 "Used": [
  null,
  "Usado"
 ],
 "VCPU settings could not be saved": [
  null,
  "Configurações de VCPU não puderam ser salvas"
 ],
 "VM CHANGE_NETWORK_STATE action failed": [
  null,
  "VM CHANGE_NETWORK_STATE action failed"
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  "A ação de exclusão de VM (DESTROY) falhou"
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  "Falha na ação VM DELETE (UNDEFINE)"
 ],
 "VM DELETE action failed": [
  null,
  "A ação de exclusão de VM falhou"
 ],
 "VM DETACH_DISK action failed": [
  null,
  "Falha na ação DETACH_DISK da VM"
 ],
 "VM FORCE OFF action failed": [
  null,
  "ação VM FORCE OFF falhou"
 ],
 "VM FORCE REBOOT action failed": [
  null,
  "ação VM FORCE REBOOT falhou"
 ],
 "VM REBOOT action failed": [
  null,
  "ação VM REBOOT falhou"
 ],
 "VM SEND Non-Maskable Interrrupt action failed": [
  null,
  "VM SEND Falha na ação de interrupção não mascarável"
 ],
 "VM SENDNMI action failed": [
  null,
  "A ação VM SENDNMI falhou"
 ],
 "VM SHUT DOWN action failed": [
  null,
  "ação VM SHUT DOWN falhou"
 ],
 "VM START action failed": [
  null,
  "ação VM START falhou"
 ],
 "VNC": [
  null,
  "VNC"
 ],
 "VNC Address:": [
  null,
  "VNC Endereço:"
 ],
 "VNC Port:": [
  null,
  "VNC Porta:"
 ],
 "VNC TLS Port:": [
  null,
  "VNC TLS Porta:"
 ],
 "Virtual Machines": [
  null,
  "Máquinas Virtuais"
 ],
 "Virtualization Service (libvirt) is Not Active": [
  null,
  "Serviço de virtualização (libvirt) não está ativo"
 ],
 "Virtualization Service is Available": [
  null,
  "Serviço de virtualização disponível"
 ],
 "Volume": [
  null,
  "Volume"
 ],
 "active": [
  null,
  "ativo"
 ],
 "bridge": [
  null,
  "bridge"
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "crashed": [
  null,
  "travou"
 ],
 "custom": [
  null,
  "personalizado"
 ],
 "direct": [
  null,
  "direto"
 ],
 "disabled": [
  null,
  "desabilitado"
 ],
 "disk": [
  null,
  "disco"
 ],
 "down": [
  null,
  "down"
 ],
 "dying": [
  null,
  "morrendo"
 ],
 "enabled": [
  null,
  "habilitado"
 ],
 "ethernet": [
  null,
  "ethernet"
 ],
 "host": [
  null,
  "host"
 ],
 "hostdev": [
  null,
  "hostdev"
 ],
 "idle": [
  null,
  "ocioso"
 ],
 "inactive": [
  null,
  "inativo"
 ],
 "mcast": [
  null,
  "mcast"
 ],
 "network": [
  null,
  "rede"
 ],
 "no": [
  null,
  "não"
 ],
 "other": [
  null,
  "outro"
 ],
 "paused": [
  null,
  "pausado"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
 ],
 "running": [
  null,
  "executando"
 ],
 "server": [
  null,
  "servidor"
 ],
 "show less": [
  null,
  "mostrar menos"
 ],
 "show more": [
  null,
  "mostrar mais"
 ],
 "shut off": [
  null,
  "desligar"
 ],
 "shutdown": [
  null,
  "desligar"
 ],
 "suspended (PM)": [
  null,
  "suspenso (PM)"
 ],
 "udp": [
  null,
  "udp"
 ],
 "undefined": [
  null,
  "indefinido"
 ],
 "up": [
  null,
  "up"
 ],
 "user": [
  null,
  "usuário"
 ],
 "vCPU Count": [
  null,
  "quantidade de vCPU"
 ],
 "vCPU Maximum": [
  null,
  "Máximo de vCPU"
 ],
 "vCPUs": [
  null,
  "vCPUs"
 ],
 "vhostuser": [
  null,
  "vhostuser"
 ],
 "yes": [
  null,
  "sim"
 ]
}));
