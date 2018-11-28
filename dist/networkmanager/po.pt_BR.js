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
 "$mtu": [
  null,
  "$mtu"
 ],
 "1 day": [
  null,
  "1 dia"
 ],
 "1 hour": [
  null,
  "1 hora"
 ],
 "1 week": [
  null,
  "1 semana"
 ],
 "5 minutes": [
  null,
  "5 minutos"
 ],
 "6 hours": [
  null,
  "6 horas"
 ],
 "802.3ad": [
  null,
  "802.3ad"
 ],
 "802.3ad LACP": [
  null,
  "802.3ad LACP"
 ],
 "ARP": [
  null,
  "ARP"
 ],
 "ARP Monitoring": [
  null,
  "ARP Monitoramento"
 ],
 "ARP Ping": [
  null,
  "ARP Ping"
 ],
 "Active": [
  null,
  "Ativo"
 ],
 "Active Backup": [
  null,
  "Backup Ativo"
 ],
 "Adaptive load balancing": [
  null,
  "Balanceamento de carga dinâmico"
 ],
 "Adaptive transmit load balancing": [
  null,
  "Transmissão dinâmica de balanceamento de carga"
 ],
 "Add $0": [
  null,
  "Adicionar $0"
 ],
 "Add Bond": [
  null,
  "Adicionar Vínculo"
 ],
 "Add Bridge": [
  null,
  "Adicionar Ponte"
 ],
 "Add Services": [
  null,
  "Adicionar serviços"
 ],
 "Add Services…": [
  null,
  "Adicionar serviços…"
 ],
 "Add Team": [
  null,
  "Adicionar Equipe"
 ],
 "Add VLAN": [
  null,
  "Adicionar VLAN"
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Adicionando <b>$0</b> a conexão com o servidor será interrompida e tornará a administração da interface do usuário indisponível."
 ],
 "Additional DNS $val": [
  null,
  "DNS Adicional $val"
 ],
 "Additional DNS Search Domains $val": [
  null,
  "Domínios de Pesquisa de DNS Adicionais $val"
 ],
 "Additional address $val": [
  null,
  "Endereço adicional $val"
 ],
 "Address $val": [
  null,
  "Endereço $val"
 ],
 "Addresses": [
  null,
  "Endereços"
 ],
 "Allowed Services": [
  null,
  "Serviços Permitidos"
 ],
 "Apply": [
  null,
  "Aplicar"
 ],
 "Authenticating": [
  null,
  "Autenticando"
 ],
 "Automatic": [
  null,
  "Automático"
 ],
 "Automatic (DHCP only)": [
  null,
  "Automático (apenas DHCP)"
 ],
 "Automatic (DHCP)": [
  null,
  "Automático (DHCP)"
 ],
 "Balancer": [
  null,
  "Balanceador"
 ],
 "Bond": [
  null,
  "Bond"
 ],
 "Bond Settings": [
  null,
  "Configurações de Vínculo"
 ],
 "Bridge": [
  null,
  "Bridge"
 ],
 "Bridge Port Settings": [
  null,
  "Configurações da Porta de Ponte"
 ],
 "Bridge Settings": [
  null,
  "Configurações de Ponte"
 ],
 "Bridge port": [
  null,
  "Bridge porta"
 ],
 "Broadcast": [
  null,
  "Broadcast"
 ],
 "Broken configuration": [
  null,
  "Configuração quebrada"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Carrier": [
  null,
  "Sinal"
 ],
 "Change the settings": [
  null,
  "Alterar as configurações"
 ],
 "Changing the settings will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Alterar as configurações irá encerrar a conexão com o servidor, e tornará a administração interface do usuário indisponível."
 ],
 "Checking IP": [
  null,
  "Checando IP"
 ],
 "Close": [
  null,
  "Fechar"
 ],
 "Configure": [
  null,
  "Configurar"
 ],
 "Configuring": [
  null,
  "Configurando"
 ],
 "Configuring IP": [
  null,
  "Configurando IP"
 ],
 "Connect automatically": [
  null,
  "Conecte automaticamente"
 ],
 "Connection will be lost": [
  null,
  "A conexão será perdida"
 ],
 "Create it": [
  null,
  "Criá-lo"
 ],
 "Creating this VLAN will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Criando esta VLAN a conexão com o servidor será encerrada, e tornará a administração da interface do usuário indisponível."
 ],
 "Creating this bond will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Criando essa ligação a conexão com o servidor será encerrada, e tornará a administração da interface do usuário indisponível."
 ],
 "Creating this bridge will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Criando essa ponte a conexão com o servidor será encerrada, e tornará a administração da interface do usuário indisponível."
 ],
 "Creating this team will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Criando essa equipe a conexão com o servidor será encerrada e tornará a administração da interface do usuário indisponível."
 ],
 "DNS": [
  null,
  "DNS"
 ],
 "DNS $val": [
  null,
  "DNS $val"
 ],
 "DNS Search Domains": [
  null,
  "DNS Busca de Domínios"
 ],
 "DNS Search Domains $val": [
  null,
  "Domínios de Pesquisa DNS $val"
 ],
 "Deactivating": [
  null,
  "Desativando"
 ],
 "Delete": [
  null,
  "Excluir"
 ],
 "Delete $0": [
  null,
  "Deletar $0"
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Excluindo <b>$0</b> a conexão com o servidor será encerrada, e tornará a administração da interface do usuário indisponível."
 ],
 "Details": [
  null,
  "Detalhes"
 ],
 "Disabled": [
  null,
  "Desabilitado"
 ],
 "Enable Service": [
  null,
  "Ativar serviço"
 ],
 "Ethernet MAC": [
  null,
  "Ethernet MAC"
 ],
 "Ethernet MTU": [
  null,
  "Ethernet MTU"
 ],
 "Ethtool": [
  null,
  "Ethtool"
 ],
 "Failed": [
  null,
  "Falhou"
 ],
 "Filter Services": [
  null,
  "Serviços de filtro"
 ],
 "Firewall": [
  null,
  "Firewall"
 ],
 "Firewall is not available": [
  null,
  "Firewall não está disponível"
 ],
 "Forward delay $forward_delay": [
  null,
  "Encaminhado Atraso $forward_delay"
 ],
 "General": [
  null,
  "Geral"
 ],
 "Go to now": [
  null,
  "Ir para agora"
 ],
 "Hair Pin mode": [
  null,
  "Hair Pin modo"
 ],
 "Hairpin mode": [
  null,
  "Hairpin modo"
 ],
 "Hello time $hello_time": [
  null,
  "Hello time $hello_time"
 ],
 "IP Address": [
  null,
  "Endereço IP"
 ],
 "IP Settings": [
  null,
  "Configurações de IP"
 ],
 "IPv4": [
  null,
  "IPv4"
 ],
 "IPv4 Settings": [
  null,
  "IPv4 Ajustes"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "IPv6 Ajustes"
 ],
 "Id $id": [
  null,
  "Id $id"
 ],
 "Ignore": [
  null,
  "Ignorar"
 ],
 "Inactive": [
  null,
  "Inativo"
 ],
 "Interfaces": [
  null,
  "Interfaces"
 ],
 "Invalid address $0": [
  null,
  "Endereço inválido $0"
 ],
 "Invalid metric $0": [
  null,
  "Métrica inválida $0"
 ],
 "Invalid prefix $0": [
  null,
  "Prefixo inválido $0"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "Prefixo ou máscara de rede inválidos $0"
 ],
 "Keep connection": [
  null,
  "Manter conexão"
 ],
 "LACP Key": [
  null,
  "Chave LACP"
 ],
 "Link Monitoring": [
  null,
  "Monitoramento de Link"
 ],
 "Link Watch": [
  null,
  "Link Watch"
 ],
 "Link down delay": [
  null,
  "Link down atraso"
 ],
 "Link local": [
  null,
  "Link Local"
 ],
 "Link up delay": [
  null,
  "Link up atraso"
 ],
 "Load Balancing": [
  null,
  "Balanceamento de Carga"
 ],
 "MAC": [
  null,
  "MAC"
 ],
 "MII (Recommended)": [
  null,
  "MII (Recomendado)"
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "MTU must be a positive number": [
  null,
  "O MTU deve ser um número positivo"
 ],
 "Manual": [
  null,
  "Manual"
 ],
 "Master": [
  null,
  "Mestre"
 ],
 "Maximum message age $max_age": [
  null,
  "Máxima permanência da mensagem $max_age"
 ],
 "Members": [
  null,
  "Membros"
 ],
 "Mode": [
  null,
  "Modo"
 ],
 "Monitoring Interval": [
  null,
  "Monitorando Intervalo"
 ],
 "Monitoring Targets": [
  null,
  "Alvod e Monitoramento"
 ],
 "NSNA Ping": [
  null,
  "NSNA Ping"
 ],
 "Name": [
  null,
  "Nome"
 ],
 "Network devices and graphs require NetworkManager.": [
  null,
  "Dispositivos de rede e gráficos requerem o NetworkManager."
 ],
 "NetworkManager is not running.": [
  null,
  "NetworkManager não está rodando."
 ],
 "Networking": [
  null,
  "Rede"
 ],
 "Networking Logs": [
  null,
  "Logs de rede"
 ],
 "No": [
  null,
  "Não"
 ],
 "No carrier": [
  null,
  "Sem sinal"
 ],
 "No open ports": [
  null,
  "Sem portas abertas"
 ],
 "Not available": [
  null,
  "Indisponível"
 ],
 "Off": [
  null,
  "Desligado"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  "Ligado"
 ],
 "Parent": [
  null,
  "Parente"
 ],
 "Parent $parent": [
  null,
  "Parent $parent"
 ],
 "Part of ": [
  null,
  "Parte de"
 ],
 "Passive": [
  null,
  "Passivo"
 ],
 "Path cost": [
  null,
  "Custo do Caminho"
 ],
 "Path cost $path_cost": [
  null,
  "Path cost $path_cost"
 ],
 "Permanent": [
  null,
  "Permanente"
 ],
 "Ping Interval": [
  null,
  "Intervalo de Ping"
 ],
 "Ping Target": [
  null,
  "Alvo do Ping"
 ],
 "Please install the $0 package": [
  null,
  ""
 ],
 "Ports": [
  null,
  "Portas"
 ],
 "Prefix length": [
  null,
  "Comprimento do prefixo"
 ],
 "Prefix length or Netmask": [
  null,
  "Comprimento do prefixo ou máscara de rede"
 ],
 "Preparing": [
  null,
  "Preparando"
 ],
 "Preserve": [
  null,
  "Preservar"
 ],
 "Primary": [
  null,
  "Primário"
 ],
 "Priority": [
  null,
  "Prioridade"
 ],
 "Priority $priority": [
  null,
  "Prioridade $priority"
 ],
 "Random": [
  null,
  "Aleatório(a)"
 ],
 "Reboot": [
  null,
  "Reiniciar"
 ],
 "Receiving": [
  null,
  "Recebendo"
 ],
 "Remove $0": [
  null,
  "Remover $0"
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Removendo <b>$0</b> irá encerrar a conexão com o servidor e tornará a administração da interface do usuário indisponível."
 ],
 "Restoring connection": [
  null,
  "Restaurando conexão"
 ],
 "Round Robin": [
  null,
  "Round Robin"
 ],
 "Routes": [
  null,
  "Rotas"
 ],
 "Runner": [
  null,
  "Executor"
 ],
 "STP Forward delay": [
  null,
  "STP Atraso de Redirecionamento "
 ],
 "STP Hello time": [
  null,
  "STP Hello time"
 ],
 "STP Maximum message age": [
  null,
  "STP Máxima permanência de mensagem"
 ],
 "STP Priority": [
  null,
  "STP Prioridade"
 ],
 "Sending": [
  null,
  "Enviando"
 ],
 "Service": [
  null,
  "Serviço"
 ],
 "Set to": [
  null,
  "Configurado para"
 ],
 "Shared": [
  null,
  "Compartilhado"
 ],
 "Spanning Tree Protocol": [
  null,
  "Spanning Tree Protocol (STP)"
 ],
 "Spanning Tree Protocol (STP)": [
  null,
  "Spanning Tree Protocol (STP)"
 ],
 "Stable": [
  null,
  "Estável"
 ],
 "Start Service": [
  null,
  "Começar serviço"
 ],
 "Status": [
  null,
  "Estado"
 ],
 "Sticky": [
  null,
  "Sticky"
 ],
 "Switch off $0": [
  null,
  "Desligar $0"
 ],
 "Switch on $0": [
  null,
  "Ligar $0"
 ],
 "Switching off <b>$0</b>  will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Desligando <b>$0</b> irá encerrar a conexão com o servidor, e tornará a administração da interface do usuário indisdisponível."
 ],
 "Switching off <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Desligando <b>$0</b> irá encerrar a conexão com o servidor, e tornará a administração da interface do usuário indisponível."
 ],
 "Switching on <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "Ligando <b>$0</b> irá encerrar a conexão com o servidor e tornará a administração da interface do usuário indisponível."
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Team": [
  null,
  "Equipe"
 ],
 "Team Port": [
  null,
  "Porta da Equipe"
 ],
 "Team Port Settings": [
  null,
  "Configurações da Porta da Equipe"
 ],
 "Team Settings": [
  null,
  "Configurações da Equipe"
 ],
 "Testing connection": [
  null,
  "Testando conexão"
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  "O usuário <b>$0</b> não tem permissão para modificar as configurações de rede"
 ],
 "This device cannot be managed here.": [
  null,
  "Este dispositivo não pode ser gerenciado aqui."
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Erro inesperado"
 ],
 "Unknown": [
  null,
  "Desconhecido"
 ],
 "Unknown \"$0\"": [
  null,
  "Desconhecido \"$0\""
 ],
 "Unknown configuration": [
  null,
  "Configuração desconhecida"
 ],
 "Unmanaged Interfaces": [
  null,
  "Interfaces Não Gerenciadas"
 ],
 "VLAN": [
  null,
  "VLAN"
 ],
 "VLAN Id": [
  null,
  "VLAN Id"
 ],
 "VLAN Settings": [
  null,
  "Configurações VLAN"
 ],
 "Waiting": [
  null,
  "Aguardando"
 ],
 "XOR": [
  null,
  "XOR"
 ],
 "Yes": [
  null,
  "Sim"
 ],
 "You are not authorized to modify the firewall.": [
  null,
  "Você não está autorizado a modificar o firewall."
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 bytes de data bynária]"
 ],
 "[binary data]": [
  null,
  "[dados binários]"
 ],
 "[no data]": [
  null,
  "[sem dados]"
 ],
 "page-title\u0004Networking": [
  null,
  "Networking"
 ]
}));
