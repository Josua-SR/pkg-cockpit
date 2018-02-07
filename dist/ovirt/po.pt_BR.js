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
  "language": "pt-BR",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  ""
 ],
 "Action": [
  null,
  ""
 ],
 "Additional": [
  null,
  ""
 ],
 "Address": [
  null,
  "Endereço"
 ],
 "Address:": [
  null,
  ""
 ],
 "All running virtual machines will be turned off.": [
  null,
  ""
 ],
 "Automatically selected host": [
  null,
  ""
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
  ""
 ],
 "Base template": [
  null,
  ""
 ],
 "Base template:": [
  null,
  ""
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
  ""
 ],
 "CPU Type:": [
  null,
  "Tipo de CPU:"
 ],
 "CREATE VM action failed": [
  null,
  ""
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
  ""
 ],
 "Cluster": [
  null,
  "Cluster"
 ],
 "Cluster Templates": [
  null,
  ""
 ],
 "Cluster Virtual Machines": [
  null,
  ""
 ],
 "Confirm deletion of $0": [
  null,
  ""
 ],
 "Confirm migration": [
  null,
  ""
 ],
 "Confirm reload:": [
  null,
  ""
 ],
 "Confirm save:": [
  null,
  ""
 ],
 "Connect to oVirt Engine": [
  null,
  ""
 ],
 "Connect with any $0 viewer application.": [
  null,
  ""
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  ""
 ],
 "Connection": [
  null,
  "Conexão"
 ],
 "Console Type": [
  null,
  ""
 ],
 "Consoles": [
  null,
  ""
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
  ""
 ],
 "Create New Virtual Machine": [
  null,
  ""
 ],
 "Create VM": [
  null,
  ""
 ],
 "Delete": [
  null,
  "Excluir"
 ],
 "Delete associated storage files:": [
  null,
  ""
 ],
 "Description": [
  null,
  "Descrição"
 ],
 "Description:": [
  null,
  ""
 ],
 "Device": [
  null,
  "Dispositivo"
 ],
 "Disconnect": [
  null,
  ""
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  ""
 ],
 "Disks": [
  null,
  "Discos"
 ],
 "Download the MSI from $0": [
  null,
  ""
 ],
 "Edit the vdsm.conf": [
  null,
  ""
 ],
 "Emulated Machine:": [
  null,
  "Máquina Emulada:"
 ],
 "Enter New VM name": [
  null,
  ""
 ],
 "FQDN": [
  null,
  ""
 ],
 "File": [
  null,
  "Arquivo"
 ],
 "Filesystem": [
  null,
  "Sistema de arquivos"
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
  ""
 ],
 "Graphics Console (VNC)": [
  null,
  ""
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  ""
 ],
 "HA": [
  null,
  ""
 ],
 "HA:": [
  null,
  ""
 ],
 "Host": [
  null,
  "Máquina"
 ],
 "Host to Maintenance": [
  null,
  ""
 ],
 "INSTALL VM action failed": [
  null,
  ""
 ],
 "Immediately Start VM": [
  null,
  ""
 ],
 "Install": [
  null,
  ""
 ],
 "Installation Source": [
  null,
  ""
 ],
 "Installation Source Type": [
  null,
  ""
 ],
 "Installation Source should not be empty": [
  null,
  ""
 ],
 "Invalid filename": [
  null,
  ""
 ],
 "Launch Remote Viewer": [
  null,
  ""
 ],
 "Loading ...": [
  null,
  ""
 ],
 "Loading data ...": [
  null,
  ""
 ],
 "MAC Address": [
  null,
  ""
 ],
 "MIGRATE action failed": [
  null,
  ""
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "Managed": [
  null,
  ""
 ],
 "Manual Connection": [
  null,
  ""
 ],
 "Memory": [
  null,
  "Memória"
 ],
 "Memory should be positive number": [
  null,
  ""
 ],
 "Memory:": [
  null,
  "Memória:"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Migrate To:": [
  null,
  ""
 ],
 "Model type": [
  null,
  ""
 ],
 "More Information": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nome"
 ],
 "Name should not be empty": [
  null,
  ""
 ],
 "Name should not consist of empty characters only": [
  null,
  ""
 ],
 "Networks": [
  null,
  ""
 ],
 "No VM found in oVirt.": [
  null,
  ""
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
  ""
 ],
 "No disks defined for this VM": [
  null,
  "Nenhum disco definido para esta VM"
 ],
 "No matching files found": [
  null,
  ""
 ],
 "No network interfaces defined for this VM": [
  null,
  ""
 ],
 "OK": [
  null,
  ""
 ],
 "OS": [
  null,
  "OS"
 ],
 "OS Type:": [
  null,
  ""
 ],
 "OS Vendor": [
  null,
  ""
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Operating System": [
  null,
  "Sistema Operacional"
 ],
 "Optimized for:": [
  null,
  ""
 ],
 "Overview": [
  null,
  "Visão geral"
 ],
 "Path to ISO file on host's file system": [
  null,
  ""
 ],
 "Path to file": [
  null,
  ""
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  ""
 ],
 "Please provide fully qualified domain name and port of the oVirt engine.": [
  null,
  ""
 ],
 "Please provide valid oVirt engine fully qualified domain name (FQDN) and port (443 by default)": [
  null,
  ""
 ],
 "Please refer to oVirt's $0 for more information about Remote Viewer setup.": [
  null,
  ""
 ],
 "Please start the virtual machine to access its console.": [
  null,
  ""
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  ""
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  ""
 ],
 "Plug": [
  null,
  ""
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
  ""
 ],
 "Preparing for Maintenance": [
  null,
  ""
 ],
 "Protocol": [
  null,
  "Protocolo"
 ],
 "REBOOT action failed": [
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
  ""
 ],
 "Registering oVirt to Cockpit": [
  null,
  ""
 ],
 "Reload": [
  null,
  "Recarregar"
 ],
 "Remote URL": [
  null,
  ""
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
  ""
 ],
 "Running Since:": [
  null,
  ""
 ],
 "SHUTDOWN action failed": [
  null,
  ""
 ],
 "SPICE": [
  null,
  ""
 ],
 "SPICE Address:": [
  null,
  ""
 ],
 "SPICE Port:": [
  null,
  ""
 ],
 "SPICE TLS Port:": [
  null,
  ""
 ],
 "START action failed": [
  null,
  ""
 ],
 "SUSPEND action failed": [
  null,
  ""
 ],
 "Save": [
  null,
  "Salvar"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  ""
 ],
 "Send shortcut": [
  null,
  ""
 ],
 "Serial Console": [
  null,
  ""
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
 "Source should start with http, ftp or nfs protocol": [
  null,
  ""
 ],
 "Start the VM to see disk statistics.": [
  null,
  ""
 ],
 "State": [
  null,
  "Estado"
 ],
 "Stateless": [
  null,
  ""
 ],
 "Stateless:": [
  null,
  ""
 ],
 "Storage Size": [
  null,
  ""
 ],
 "Storage Size should not be negative number": [
  null,
  ""
 ],
 "Suspend": [
  null,
  ""
 ],
 "Switch Host to Maintenance": [
  null,
  ""
 ],
 "Switching host to maintenance mode failed. Received error: ": [
  null,
  ""
 ],
 "Switching host to maintenance mode in progress ...": [
  null,
  ""
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
  ""
 ],
 "Templates of $0 cluster": [
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
  ""
 ],
 "The VM is running.": [
  null,
  "A VM está em execução."
 ],
 "The VM is suspended by guest power management.": [
  null,
  "A VM é suspensa pela gerência de poder do convidado."
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  ""
 ],
 "Too many files found": [
  null,
  ""
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "URL": [
  null,
  "URL"
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
