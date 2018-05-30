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
  "x-generator": "Zanata 4.4.5"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 está disponível para a maioria dos sistemas operacionais. Para instalá-lo, procure-o no GNOME Software ou execute o seguinte:"
 ],
 "Action": [
  null,
  "Ação"
 ],
 "Additional": [
  null,
  "Adicional"
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
 "Automatically selected host": [
  null,
  "Host selecionado automaticamente"
 ],
 "Autostart:": [
  null,
  "Início automático:"
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
 "Boot Order:": [
  null,
  "Ordem de Inicialização:"
 ],
 "Bus": [
  null,
  "Bus"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "A ação MUDAR DE ESTADO DE REDE falhou"
 ],
 "CPU Type:": [
  null,
  "Tipo de CPU:"
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
 "Confirm deletion of $0": [
  null,
  "Confirme a exclusão de $0"
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
 "Count:": [
  null,
  "Contagem:"
 ],
 "Create": [
  null,
  "Criar"
 ],
 "Create New VM": [
  null,
  "Criar nova VM"
 ],
 "Create VM": [
  null,
  "Criar VM"
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
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  "Desconectado do console serial. Clique no botão Reconectar."
 ],
 "Disks": [
  null,
  "Discos"
 ],
 "Download the MSI from $0": [
  null,
  "Baixe o MSI de $0"
 ],
 "Edit the vdsm.conf": [
  null,
  "Edite o vdsm.conf"
 ],
 "Emulated Machine:": [
  null,
  "Máquina Emulada:"
 ],
 "Enter New VM name": [
  null,
  "Insira o novo nome da VM"
 ],
 "FQDN": [
  null,
  "FQDN"
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
 "INSTALL VM action failed": [
  null,
  "A ação de instalação da VM falhou"
 ],
 "Install": [
  null,
  "Instale"
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
 "MTU": [
  null,
  "MTU"
 ],
 "Managed": [
  null,
  "Gerenciou"
 ],
 "Manual Connection": [
  null,
  "Conexão manual"
 ],
 "Memory": [
  null,
  "Memória"
 ],
 "Memory:": [
  null,
  "Memória:"
 ],
 "Migrate To:": [
  null,
  "Migrar para:"
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
 "Networks": [
  null,
  "Networks"
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
  ""
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
 "Optimized for:": [
  null,
  "Otimizado para:"
 ],
 "Overview": [
  null,
  "Visão geral"
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  "Por favor confirme, o host deve ser mudado para o modo de manutenção."
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
 "Portgroup": [
  null,
  "Portgroup"
 ],
 "Preparing for Maintenance": [
  null,
  "Preparando-se para manutenção"
 ],
 "Protocol": [
  null,
  "Protocolo"
 ],
 "REBOOT action failed": [
  null,
  "A ação REBOOT falhou"
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
 "Run": [
  null,
  "Executar"
 ],
 "Run Here": [
  null,
  "Rodar aqui"
 ],
 "Running Since:": [
  null,
  "Correndo desde:"
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
 "Send shortcut": [
  null,
  "Enviar atalho"
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
 "Source": [
  null,
  "Fonte"
 ],
 "Start the VM to see disk statistics.": [
  null,
  "Inicie a VM para ver as estatísticas do disco."
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
 "This host is managed by a virtualization manager, so creation of new VMs from the host is not possible.": [
  null,
  ""
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  "Esta máquina virtual não é gerenciada pelo oVirt"
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "Unplug": [
  null,
  ""
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  "Atualize para uma versão mais recente do libvirt para exibir estatísticas de disco"
 ],
 "Usage": [
  null,
  "Uso"
 ],
 "Used": [
  null,
  "Usado"
 ],
 "VDSM": [
  null,
  ""
 ],
 "VDSM Service Management": [
  null,
  ""
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
  ""
 ],
 "VM SHUT DOWN action failed": [
  null,
  "ação VM SHUT DOWN falhou"
 ],
 "VM START action failed": [
  null,
  "ação VM START falhou"
 ],
 "VM icon": [
  null,
  ""
 ],
 "VNC": [
  null,
  ""
 ],
 "VNC Address:": [
  null,
  ""
 ],
 "VNC Port:": [
  null,
  ""
 ],
 "VNC TLS Port:": [
  null,
  ""
 ],
 "Version": [
  null,
  "Versão"
 ],
 "Version num": [
  null,
  ""
 ],
 "Virtual Machines": [
  null,
  "Máquinas Virtuais"
 ],
 "Virtual Machines of $0 cluster": [
  null,
  ""
 ],
 "Virtualport": [
  null,
  ""
 ],
 "Volume": [
  null,
  "Volume"
 ],
 "Your browser does not support iframes.": [
  null,
  ""
 ],
 "bridge": [
  null,
  ""
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "connecting": [
  null,
  ""
 ],
 "cores": [
  null,
  ""
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
  ""
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
  ""
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
  ""
 ],
 "host": [
  null,
  "host"
 ],
 "hostdev": [
  null,
  ""
 ],
 "idle": [
  null,
  "ocioso"
 ],
 "initializing": [
  null,
  ""
 ],
 "installation failed": [
  null,
  ""
 ],
 "installing OS": [
  null,
  ""
 ],
 "kdumping": [
  null,
  ""
 ],
 "maintenance": [
  null,
  ""
 ],
 "mcast": [
  null,
  ""
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
  ""
 ],
 "non responsive": [
  null,
  ""
 ],
 "oVirt": [
  null,
  ""
 ],
 "oVirt Host State:": [
  null,
  ""
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  ""
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  ""
 ],
 "oVirt installation script failed with following output: ": [
  null,
  ""
 ],
 "oVirt login in progress": [
  null,
  ""
 ],
 "other": [
  null,
  "outro"
 ],
 "paused": [
  null,
  "pausado"
 ],
 "pending approval": [
  null,
  ""
 ],
 "reboot": [
  null,
  ""
 ],
 "running": [
  null,
  "executando"
 ],
 "server": [
  null,
  ""
 ],
 "show less": [
  null,
  ""
 ],
 "show more": [
  null,
  ""
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
  ""
 ],
 "suspended (PM)": [
  null,
  "suspenso (PM)"
 ],
 "threads": [
  null,
  ""
 ],
 "udp": [
  null,
  ""
 ],
 "unassigned": [
  null,
  ""
 ],
 "undefined": [
  null,
  "indefinido"
 ],
 "up": [
  null,
  ""
 ],
 "user": [
  null,
  ""
 ],
 "vCPUs": [
  null,
  ""
 ],
 "vCPUs:": [
  null,
  "vCPUs:"
 ],
 "vhostuser": [
  null,
  ""
 ],
 "yes": [
  null,
  "sim"
 ]
}));
