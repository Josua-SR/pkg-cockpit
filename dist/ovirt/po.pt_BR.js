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
 "$0 vCPU Details": [
  null,
  "$0 vCPU Detalhes"
 ],
 "Action": [
  null,
  "Ação"
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
 "All running virtual machines will be turned off.": [
  null,
  "Todas as máquinas virtuais em execução serão desativadas."
 ],
 "Always attach": [
  null,
  "Sempre anexar"
 ],
 "Apply": [
  null,
  "Aplicar"
 ],
 "Automatically selected host": [
  null,
  "Host selecionado automaticamente"
 ],
 "Autostart": [
  null,
  ""
 ],
 "Available": [
  null,
  "Disponível"
 ],
 "Base Template": [
  null,
  "Modelo base"
 ],
 "Base template": [
  null,
  "Modelo base"
 ],
 "Base template:": [
  null,
  "Modelo base:"
 ],
 "Boot Order": [
  null,
  ""
 ],
 "Boot order settings could not be saved": [
  null,
  ""
 ],
 "Bus": [
  null,
  "Bus"
 ],
 "CPU Type": [
  null,
  "Tipo da CPU"
 ],
 "CREATE VM action failed": [
  null,
  "A ação CRiar VM falhou"
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
 "Cluster": [
  null,
  "Cluster"
 ],
 "Cluster Templates": [
  null,
  "Modelos de Cluster"
 ],
 "Cluster Virtual Machines": [
  null,
  "Máquinas Virtuais de Cluster"
 ],
 "Confirm migration": [
  null,
  "Confirme a migração"
 ],
 "Confirm reload:": [
  null,
  "Confirme o recarregamento:"
 ],
 "Confirm save:": [
  null,
  "Confirme salve:"
 ],
 "Connect to oVirt Engine": [
  null,
  "Conecte-se ao motor do ivirt"
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
 "Create New VM": [
  null,
  "Criar nova VM"
 ],
 "Create VM": [
  null,
  "Criar VM"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "Delete": [
  null,
  "Excluir"
 ],
 "Delete associated storage files:": [
  null,
  "Excluir arquivos de armazenamento associados:"
 ],
 "Description": [
  null,
  "Descrição"
 ],
 "Description:": [
  null,
  "Descrição:"
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
 "Disk $0 fail to get detached from VM $1": [
  null,
  ""
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
 "Edit the vdsm.conf": [
  null,
  "Edite o vdsm.conf"
 ],
 "Emulated Machine": [
  null,
  ""
 ],
 "Enter New VM name": [
  null,
  "Insira o novo nome da VM"
 ],
 "FORCEOFF action failed: $0": [
  null,
  ""
 ],
 "FQDN": [
  null,
  "FQDN"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Menos do que o número máximo de CPUs virtuais deve ser ativado."
 ],
 "File": [
  null,
  "Arquivo"
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
 "HA": [
  null,
  "HA"
 ],
 "HA:": [
  null,
  "HA:"
 ],
 "Host": [
  null,
  "Máquina"
 ],
 "Host to Maintenance": [
  null,
  "Host para Manutenção"
 ],
 "Install": [
  null,
  "Instale"
 ],
 "Interface Type": [
  null,
  ""
 ],
 "Launch Remote Viewer": [
  null,
  "Iniciar o Visualizador Remoto"
 ],
 "Loading ...": [
  null,
  "Carregando ..."
 ],
 "Loading data ...": [
  null,
  "Carregando dados ..."
 ],
 "MAC Address": [
  null,
  "MAC Address"
 ],
 "MIGRATE action failed": [
  null,
  "A ação MIGRATE falhou"
 ],
 "Mac": [
  null,
  ""
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
 "Migrate To:": [
  null,
  "Migrar para:"
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
 "NIC $0 of VM $1 failed to change state": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nome"
 ],
 "Network Interfaces": [
  null,
  ""
 ],
 "Network interface settings could not be saved": [
  null,
  ""
 ],
 "New Volume Name": [
  null,
  "Novo nome do volume"
 ],
 "No VM found in oVirt.": [
  null,
  "Nenhuma VM encontrada no oVirt."
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
 "No network interfaces defined for this VM": [
  null,
  "Nenhuma interface de rede definida para esta VM"
 ],
 "No oVirt connection": [
  null,
  "Sem conexão com oVirt"
 ],
 "No virtual networks": [
  null,
  "Nenhuma rede virtual"
 ],
 "None (Isolated Network)": [
  null,
  ""
 ],
 "Number of virtual CPUs that gonna be used.": [
  null,
  "Número de CPUs virtuais que serão usadas."
 ],
 "OK": [
  null,
  "OK"
 ],
 "OS": [
  null,
  "OS"
 ],
 "OS Type:": [
  null,
  "Tipo de SO:"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Open": [
  null,
  ""
 ],
 "Optimized for:": [
  null,
  "Otimizado para:"
 ],
 "Overview": [
  null,
  "Visão geral"
 ],
 "Path": [
  null,
  "Caminho"
 ],
 "Pause": [
  null,
  ""
 ],
 "Persistence": [
  null,
  "Persistência"
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  "Por favor confirme, o host deve ser mudado para o modo de manutenção."
 ],
 "Please enter new volume name": [
  null,
  "Por favor insira o novo nome do volume"
 ],
 "Please enter new volume size": [
  null,
  "Por favor insira o novo tamanho do volume"
 ],
 "Please provide fully qualified domain name and port of the oVirt engine.": [
  null,
  "Por favor, forneça o nome de domínio e a porta totalmente qualificados do motor da oVirt."
 ],
 "Please provide valid oVirt engine fully qualified domain name (FQDN) and port (443 by default)": [
  null,
  "Por favor, forneça o nome de domínio totalmente qualificado (FQDN) do motor oVirt e a porta (443 por padrão)"
 ],
 "Please refer to oVirt's $0 for more information about Remote Viewer setup.": [
  null,
  "Por favor, consulte o $0 da oVirt para mais informações sobre a configuração do Visualizador Remoto."
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Por favor, inicie a máquina virtual para acessar seu console."
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  "Por favor, aguarde até que a lista de VMs seja carregada do servidor."
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  "Por favor, aguarde até que a lista de modelos seja carregada do servidor."
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
 "Preparing for Maintenance": [
  null,
  "Preparando-se para manutenção"
 ],
 "Private": [
  null,
  ""
 ],
 "Product": [
  null,
  ""
 ],
 "Protocol": [
  null,
  "Protocolo"
 ],
 "REBOOT action failed": [
  null,
  "A ação REBOOT falhou"
 ],
 "REBOOT_VM action failed: %s0": [
  null,
  ""
 ],
 "Readonly": [
  null,
  "Apenasleitura"
 ],
 "Reconnect": [
  null,
  "Reconectar"
 ],
 "Register oVirt": [
  null,
  "Registrar oVirt"
 ],
 "Registering oVirt to Cockpit": [
  null,
  "Registrando oVirt no Cockpit"
 ],
 "Reload": [
  null,
  "Recarregar"
 ],
 "Restart": [
  null,
  "Reiniciar"
 ],
 "Resume": [
  null,
  ""
 ],
 "Run": [
  null,
  "Executar"
 ],
 "Run Here": [
  null,
  "Rodar aqui"
 ],
 "Run when host boots": [
  null,
  ""
 ],
 "Running Since:": [
  null,
  "Correndo desde:"
 ],
 "SET VCPU SETTINGS action failed": [
  null,
  "A ação SET SETUP VCPU falhou"
 ],
 "SHUTDOWN action failed": [
  null,
  "A ação SHUTDOWN falhou"
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
 "START action failed": [
  null,
  "START Ação: falhou"
 ],
 "START_VM action failed: %s0": [
  null,
  ""
 ],
 "SUSPEND action failed": [
  null,
  "SUSPEND Ação: falhou"
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
 "State": [
  null,
  "Estado"
 ],
 "Stateless": [
  null,
  "Sem estado"
 ],
 "Stateless:": [
  null,
  "Sem estado:"
 ],
 "Suspend": [
  null,
  "Suspender"
 ],
 "Switch Host to Maintenance": [
  null,
  "Trocar de host para manutenção"
 ],
 "Switching host to maintenance mode failed. Received error: ": [
  null,
  "A comutação do host para o modo de manutenção falhou. Erro recebido:"
 ],
 "Switching host to maintenance mode in progress ...": [
  null,
  "Mudando o host para o modo de manutenção em andamento ..."
 ],
 "System": [
  null,
  "Sistema"
 ],
 "Target": [
  null,
  "Alvo"
 ],
 "Template": [
  null,
  "Modelo"
 ],
 "Templates": [
  null,
  "Templates"
 ],
 "Templates of $0 cluster": [
  null,
  "Templates de $0 cluster"
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
 "The pool is empty": [
  null,
  "A piscina está vazia"
 ],
 "This host is managed by a virtualization manager, so creation of new VMs from the host is not possible.": [
  null,
  "Esse host é gerenciado por um gerenciador de virtualização, portanto, a criação de novas VMs a partir do host não é possível."
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  "Esta máquina virtual não é gerenciada pelo oVirt"
 ],
 "Threads per core": [
  null,
  "Tópicos por núcleo"
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "Type ID": [
  null,
  ""
 ],
 "Unit": [
  null,
  "Unidade"
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
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "VDSM Gerenciamento de Serviços"
 ],
 "VM $0 failed to Reboot": [
  null,
  ""
 ],
 "VM $0 failed to force Reboot": [
  null,
  ""
 ],
 "VM $0 failed to force shutdown": [
  null,
  ""
 ],
 "VM $0 failed to get deleted": [
  null,
  ""
 ],
 "VM $0 failed to get installed": [
  null,
  ""
 ],
 "VM $0 failed to pause": [
  null,
  ""
 ],
 "VM $0 failed to resume": [
  null,
  ""
 ],
 "VM $0 failed to send NMI": [
  null,
  ""
 ],
 "VM $0 failed to shutdown": [
  null,
  ""
 ],
 "VM $0 failed to start": [
  null,
  ""
 ],
 "VM icon": [
  null,
  "VM icone"
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
 "Vendor": [
  null,
  "Fabricante"
 ],
 "Version": [
  null,
  "Versão"
 ],
 "Version num": [
  null,
  "Versão num"
 ],
 "Virtual Machines": [
  null,
  "Máquinas Virtuais"
 ],
 "Virtual Machines of $0 cluster": [
  null,
  "Máquinas Virtuais de $0 cluster"
 ],
 "Volume": [
  null,
  "Volume"
 ],
 "WWPN": [
  null,
  ""
 ],
 "bridge": [
  null,
  "bridge"
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "connecting": [
  null,
  "conectando"
 ],
 "cores": [
  null,
  "cores"
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
 "error": [
  null,
  "erro"
 ],
 "ethernet": [
  null,
  "ethernet"
 ],
 "host": [
  null,
  "host"
 ],
 "host device": [
  null,
  ""
 ],
 "hostdev": [
  null,
  "hostdev"
 ],
 "idle": [
  null,
  "ocioso"
 ],
 "initializing": [
  null,
  "inicializando"
 ],
 "installation failed": [
  null,
  "Instalação falhada"
 ],
 "installing OS": [
  null,
  "instalando o sistema operacional"
 ],
 "kdumping": [
  null,
  "kdumping"
 ],
 "maintenance": [
  null,
  "manutenção"
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
 "non operational": [
  null,
  "não operacional"
 ],
 "non responsive": [
  null,
  "não responsivo"
 ],
 "oVirt": [
  null,
  "oVirt"
 ],
 "oVirt Host State:": [
  null,
  "oVirt Host State:"
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  "O script de instalação do Provedor oVirt falhou devido a argumentos ausentes."
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  "Falha no script de instalação do Provedor oVirt: Não é possível gravar em /etc/cockpit/machines-ovirt.config, tente como root."
 ],
 "oVirt installation script failed with following output: ": [
  null,
  "O script de instalação do ivirt falhou com a seguinte saída: "
 ],
 "oVirt login in progress": [
  null,
  "login do theVirt em andamento"
 ],
 "paused": [
  null,
  "pausado"
 ],
 "pending approval": [
  null,
  "aprovação pendente"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
 ],
 "reboot": [
  null,
  "reiniciar"
 ],
 "redirected device": [
  null,
  ""
 ],
 "running": [
  null,
  "executando"
 ],
 "server": [
  null,
  "servidor"
 ],
 "shut off": [
  null,
  "desligar"
 ],
 "shutdown": [
  null,
  "desligar"
 ],
 "sockets": [
  null,
  "sockets"
 ],
 "suspended (PM)": [
  null,
  "suspenso (PM)"
 ],
 "threads": [
  null,
  "threads"
 ],
 "udp": [
  null,
  "udp"
 ],
 "unassigned": [
  null,
  "não assinado"
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
