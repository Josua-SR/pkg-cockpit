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
 "$0 Template": [
  null,
  "Modelo $0 "
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 não está disponível em nenhum repositório."
 ],
 "$0 will be installed.": [
  null,
  "$0 será instalado."
 ],
 "1 Minute": [
  null,
  "1 Minuto"
 ],
 "1 day": [
  null,
  "1 dia"
 ],
 "1 hour": [
  null,
  "1 hora"
 ],
 "1 min": [
  null,
  "1 min"
 ],
 "1 week": [
  null,
  "1 semana"
 ],
 "10th": [
  null,
  "10º"
 ],
 "11th": [
  null,
  "11º"
 ],
 "12th": [
  null,
  "12º"
 ],
 "13th": [
  null,
  "13º"
 ],
 "14th": [
  null,
  "14º"
 ],
 "15th": [
  null,
  "15º"
 ],
 "16th": [
  null,
  "16º"
 ],
 "17th": [
  null,
  "17º"
 ],
 "18th": [
  null,
  "18º"
 ],
 "19th": [
  null,
  "19º"
 ],
 "1st": [
  null,
  "1º"
 ],
 "2 min": [
  null,
  "2 min"
 ],
 "20 Minutes": [
  null,
  "20 Minutos"
 ],
 "20th": [
  null,
  "20º"
 ],
 "21st": [
  null,
  "21º"
 ],
 "22nd": [
  null,
  "22º"
 ],
 "23rd": [
  null,
  "23º"
 ],
 "24th": [
  null,
  "24º"
 ],
 "25th": [
  null,
  "25º"
 ],
 "26th": [
  null,
  "26º"
 ],
 "27th": [
  null,
  "27º"
 ],
 "28th": [
  null,
  "28º"
 ],
 "29th": [
  null,
  "29º"
 ],
 "2nd": [
  null,
  "2º"
 ],
 "3 min": [
  null,
  "3 min"
 ],
 "30th": [
  null,
  "30º"
 ],
 "31st": [
  null,
  "31º"
 ],
 "3rd": [
  null,
  "3º"
 ],
 "4 min": [
  null,
  "4 min"
 ],
 "40 Minutes": [
  null,
  "40 Minutos"
 ],
 "4th": [
  null,
  "4º"
 ],
 "5 Minutes": [
  null,
  "5 Minutos"
 ],
 "5 min": [
  null,
  "5 min"
 ],
 "5 minutes": [
  null,
  "5 minutos"
 ],
 "5th": [
  null,
  "5º"
 ],
 "6 hours": [
  null,
  "6 horas"
 ],
 "60 Minutes": [
  null,
  "60 Minutos"
 ],
 "6th": [
  null,
  "6º"
 ],
 "7th": [
  null,
  "7º"
 ],
 "8th": [
  null,
  "8º"
 ],
 "9th": [
  null,
  "9º"
 ],
 "Additional packages:": [
  null,
  "Pacotes adicionais:"
 ],
 "Advanced TCA": [
  null,
  "TCA Avançado"
 ],
 "After": [
  null,
  "Após"
 ],
 "After system boot": [
  null,
  "Após a inicialização do sistema"
 ],
 "Alert and above": [
  null,
  "Alerta e acima"
 ],
 "All": [
  null,
  "Todos"
 ],
 "All In One": [
  null,
  "Tudo em um"
 ],
 "Appearance:": [
  null,
  ""
 ],
 "Asset Tag": [
  null,
  "Tag do Recurso"
 ],
 "At specific time": [
  null,
  "Em tempo específico"
 ],
 "Automatic Startup": [
  null,
  ""
 ],
 "Automatically using NTP": [
  null,
  "Usando automaticamente o NTP"
 ],
 "Automatically using specific NTP servers": [
  null,
  "Usando automaticamente servidores NTP específicos"
 ],
 "BIOS": [
  null,
  "BIOS"
 ],
 "BIOS date": [
  null,
  "BIOS data"
 ],
 "BIOS version": [
  null,
  "BIOS versão"
 ],
 "Before": [
  null,
  "Antes"
 ],
 "Binds To": [
  null,
  "Vincula a"
 ],
 "Black": [
  null,
  ""
 ],
 "Blade": [
  null,
  "Blade"
 ],
 "Blade enclosure": [
  null,
  "Blade enclosure"
 ],
 "Bound By": [
  null,
  "Vinculado pela"
 ],
 "Bug Fix Updates Available": [
  null,
  "Atualizações de correção de bug disponíveis"
 ],
 "Bus Expansion Chassis": [
  null,
  "Chassi de Expansão de Barramento"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU Security": [
  null,
  ""
 ],
 "CPU Security Toggles": [
  null,
  ""
 ],
 "Cached": [
  null,
  "Cache"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Cannot schedule event in the past": [
  null,
  "Não é possível agendar eventos no passado"
 ],
 "Change": [
  null,
  "Alterar"
 ],
 "Change Host Name": [
  null,
  "Alterar o Nome do Host"
 ],
 "Change System Time": [
  null,
  "Alterar Horário do Sistema"
 ],
 "Checking for updates…": [
  null,
  "Verificando atualizações ..."
 ],
 "Checking installed software": [
  null,
  "Verificando o software instalado"
 ],
 "Class": [
  null,
  "Classe"
 ],
 "Clear All Filters": [
  null,
  ""
 ],
 "Click to see system hardware information": [
  null,
  "Clique para ver as informações do hardware do sistema"
 ],
 "Close": [
  null,
  "Fechar"
 ],
 "Command": [
  null,
  "Comando"
 ],
 "Compact PCI": [
  null,
  "Compacto PCI"
 ],
 "Condition $0=$1 was not met": [
  null,
  "Condição $0=$1 não foi cumprida"
 ],
 "Condition failed": [
  null,
  "Condição falhou"
 ],
 "Conflicted By": [
  null,
  "Conflito por"
 ],
 "Conflicts": [
  null,
  "Conflitos"
 ],
 "Consists Of": [
  null,
  "Consiste em"
 ],
 "Convertible": [
  null,
  "Conversível"
 ],
 "Copy": [
  null,
  ""
 ],
 "Create Timer": [
  null,
  "Criar Temporizador"
 ],
 "Create Timers": [
  null,
  "Criar Temporizadores"
 ],
 "Critical and above": [
  null,
  "Crítico e acima"
 ],
 "Ctrl+Insert": [
  null,
  ""
 ],
 "Current boot": [
  null,
  "Inicialização atual"
 ],
 "Dark": [
  null,
  ""
 ],
 "Debug and above": [
  null,
  "Depurar e acima"
 ],
 "Delay": [
  null,
  "Atraso"
 ],
 "Description": [
  null,
  "Descrição"
 ],
 "Desktop": [
  null,
  "Desktop"
 ],
 "Detachable": [
  null,
  "Destacável"
 ],
 "Details": [
  null,
  "Detalhes"
 ],
 "Disable": [
  null,
  "Desabilitar"
 ],
 "Disable simultaneous multithreading": [
  null,
  ""
 ],
 "Disabled": [
  null,
  "Desabilitado"
 ],
 "Disk I/O": [
  null,
  "Entrada e Saida de disco"
 ],
 "Docking Station": [
  null,
  "Estação de ancoragem."
 ],
 "Domain": [
  null,
  "Domínio"
 ],
 "Don't Repeat": [
  null,
  "Não Repita"
 ],
 "Downloading $0": [
  null,
  "Baixando $0"
 ],
 "Embedded PC": [
  null,
  "Embedded PC"
 ],
 "Enable": [
  null,
  "Habilitar"
 ],
 "Enable Forcefully": [
  null,
  "Habilite Forçosamente"
 ],
 "Enable stored metrics…": [
  null,
  "Ativar métricas armazenadas ..."
 ],
 "Enabled": [
  null,
  "Habilitado"
 ],
 "Enhancement Updates Available": [
  null,
  "Atualizações de aprimoramento disponíveis"
 ],
 "Entry": [
  null,
  "Entrada"
 ],
 "Error": [
  null,
  "Erro"
 ],
 "Error and above": [
  null,
  "Erro e acima"
 ],
 "Everything": [
  null,
  "Tudo"
 ],
 "Expansion Chassis": [
  null,
  "Chassi de Expansão"
 ],
 "Filter by name or description...": [
  null,
  ""
 ],
 "Friday": [
  null,
  "Sexta-feira"
 ],
 "General": [
  null,
  "Geral"
 ],
 "Go to": [
  null,
  "Ir para"
 ],
 "Go to now": [
  null,
  "Ir para agora"
 ],
 "Hand Held": [
  null,
  "Portátil"
 ],
 "Hardware": [
  null,
  "Hardware"
 ],
 "Hardware Information": [
  null,
  "Informação de Hardware"
 ],
 "Host Name": [
  null,
  "Nome do host"
 ],
 "Hour : Minute": [
  null,
  "Hora : Minuto"
 ],
 "Hour needs to be a number between 0-23": [
  null,
  "A hora precisa ser um número entre 0-23"
 ],
 "Hours": [
  null,
  "Horas"
 ],
 "I/O Wait": [
  null,
  "E/S Espera"
 ],
 "Info and above": [
  null,
  "Info e acima"
 ],
 "Install": [
  null,
  "Instale"
 ],
 "Install Software": [
  null,
  "Instale Software"
 ],
 "Installing $0": [
  null,
  "Instalando $0"
 ],
 "Instantiate": [
  null,
  "Instanciar"
 ],
 "Invalid date format": [
  null,
  "Formato de data inválido"
 ],
 "Invalid date format and invalid time format": [
  null,
  "Formato de data inválido e formato de tempo inválido"
 ],
 "Invalid date format.": [
  null,
  "Formato de data inválido."
 ],
 "Invalid number.": [
  null,
  "Número inválido."
 ],
 "Invalid time format": [
  null,
  "Formato de tempo inválido"
 ],
 "Invalid time zone": [
  null,
  "Fuso Horário inválido"
 ],
 "IoT Gateway": [
  null,
  "Gateway IoT"
 ],
 "Joins Namespace Of": [
  null,
  "Junte os espaços nos nomes de"
 ],
 "Journal": [
  null,
  "Diário"
 ],
 "Journal entry": [
  null,
  "Entrada do diário"
 ],
 "Journal entry not found": [
  null,
  "Entrada do diário não encontrada"
 ],
 "Kernel": [
  null,
  "Kernel"
 ],
 "Laptop": [
  null,
  "Laptop"
 ],
 "Last 24 hours": [
  null,
  "Últimas 24 horas"
 ],
 "Last 7 days": [
  null,
  "Últimos 7 dias"
 ],
 "Last Trigger": [
  null,
  "Último Trigger"
 ],
 "Light": [
  null,
  ""
 ],
 "Load earlier entries": [
  null,
  "Carregar logs anteriores"
 ],
 "Loading...": [
  null,
  "Carregando..."
 ],
 "Log messages": [
  null,
  "Mensagens de Log"
 ],
 "Logs": [
  null,
  "Logs"
 ],
 "Low Profile Desktop": [
  null,
  "Desktop de baixo perfil"
 ],
 "Lunch Box": [
  null,
  "Lunch Box"
 ],
 "Machine ID": [
  null,
  "ID de Máquina"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "Máquina de Chaves SSH e Impressões digitais"
 ],
 "Main Server Chassis": [
  null,
  "Chassi do Servidor Principal"
 ],
 "Manually": [
  null,
  "Manualmente"
 ],
 "Mask": [
  null,
  "Máscara"
 ],
 "Mask Forcefully": [
  null,
  "Máscara forçada"
 ],
 "Memory": [
  null,
  "Memória"
 ],
 "Memory & Swap": [
  null,
  "Memória e Troca"
 ],
 "Message to logged in users": [
  null,
  "Mensagem para usuários logados"
 ],
 "Mini PC": [
  null,
  "Mini PC"
 ],
 "Mini Tower": [
  null,
  "Mini Torre"
 ],
 "Minute needs to be a number between 0-59": [
  null,
  "Minutos precisam ser números entre 0-59"
 ],
 "Minutes": [
  null,
  "Minutos"
 ],
 "Mitigations": [
  null,
  ""
 ],
 "Model": [
  null,
  "Modelo"
 ],
 "Monday": [
  null,
  "Segunda-feira"
 ],
 "Multi-system Chassis": [
  null,
  "Chassi Multi-sistema"
 ],
 "NTP Server": [
  null,
  "Servidor NTP"
 ],
 "Name": [
  null,
  "Nome"
 ],
 "Need at least one NTP server": [
  null,
  "Precisa de pelo menos um servidor NTP"
 ],
 "Network Traffic": [
  null,
  "Tráfego de Rede"
 ],
 "Next Run": [
  null,
  "Próxima Execução"
 ],
 "Nice": [
  null,
  "Bom"
 ],
 "No Delay": [
  null,
  "Sem Atraso"
 ],
 "No Matching Results": [
  null,
  ""
 ],
 "No host keys found.": [
  null,
  "Nenhuma chave de host encontrada."
 ],
 "Not authorized to upload-report": [
  null,
  "Não autorizado a fazer upload de relatório"
 ],
 "Not synchronized": [
  null,
  "Não sincronizado"
 ],
 "Note": [
  null,
  "Nota"
 ],
 "Notebook": [
  null,
  "Notebook"
 ],
 "Notice and above": [
  null,
  "Observe e acima"
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
 "On Failure": [
  null,
  "Em Falha"
 ],
 "Only Emergency": [
  null,
  "Apenas emergência"
 ],
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  "Apenas alfabetos, números,:, _,. , @,- são permitidos."
 ],
 "Operating System": [
  null,
  "Sistema Operacional"
 ],
 "Other": [
  null,
  "De outros"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit caiu"
 ],
 "Part Of": [
  null,
  "Parte de"
 ],
 "Paste": [
  null,
  ""
 ],
 "Path": [
  null,
  "Caminho"
 ],
 "Paths": [
  null,
  "Caminhos"
 ],
 "Performance Profile": [
  null,
  "Perfil de Desempenho"
 ],
 "Peripheral Chassis": [
  null,
  "Chassi Periférico"
 ],
 "Pizza Box": [
  null,
  "Pizza Box"
 ],
 "Portable": [
  null,
  "Portatil"
 ],
 "Power Options": [
  null,
  "Opções de Energia"
 ],
 "Preset": [
  null,
  "Preset"
 ],
 "Preset Forcefully": [
  null,
  "Preset Forçado"
 ],
 "Pretty Host Name": [
  null,
  "Nome de Host Bonito"
 ],
 "Problem details": [
  null,
  "Detalhes do problema"
 ],
 "Problem info": [
  null,
  "Informação do Problema"
 ],
 "Propagates Reload To": [
  null,
  "Propaga Recarregar para"
 ],
 "RAID Chassis": [
  null,
  "RAID Chassis"
 ],
 "Rack Mount Chassis": [
  null,
  "Rack Mount Chassis"
 ],
 "Read more...": [
  null,
  ""
 ],
 "Real Host Name": [
  null,
  "Nome Real de Host"
 ],
 "Real host name can only contain lower-case characters, digits, dashes, and periods (with populated subdomains)": [
  null,
  "Nome de host real só pode conter caracteres minúsculos, dígitos, traços e períodos (com subdomínios preenchidos)"
 ],
 "Real host name must be 64 characters or less": [
  null,
  "Nome de host real deve conter 64 caracteres ou menos"
 ],
 "Reboot": [
  null,
  "Reiniciar"
 ],
 "Recent": [
  null,
  "Recente"
 ],
 "Reload": [
  null,
  "Recarregar"
 ],
 "Reload Propagated From": [
  null,
  "Recarregar propagado de"
 ],
 "Removals:": [
  null,
  "Remoções:"
 ],
 "Removing $0": [
  null,
  "Removendo $0"
 ],
 "Repeat Daily": [
  null,
  "Repita Diariamente"
 ],
 "Repeat Hourly": [
  null,
  "Repita a cada hora"
 ],
 "Repeat Monthly": [
  null,
  "Repita Mensalmente"
 ],
 "Repeat Weekly": [
  null,
  "Repita Semanalmente"
 ],
 "Repeat Yearly": [
  null,
  "Repita Anualmente"
 ],
 "Report": [
  null,
  "Relatório"
 ],
 "Reported": [
  null,
  "Relatado"
 ],
 "Reporter 'reporter-ureport' not found.": [
  null,
  "Repórter 'reporter-ureport' não encontrado."
 ],
 "Reporting was unsucessful. Try running `reporter-ureport -d ": [
  null,
  "Os relatórios não tiveram sucesso. Tente executar `reporter-ureport -d"
 ],
 "Required By": [
  null,
  "Solicitado por"
 ],
 "Requires": [
  null,
  "Requere"
 ],
 "Requisite": [
  null,
  "Requisita"
 ],
 "Requisite Of": [
  null,
  "Requisitode"
 ],
 "Reset": [
  null,
  "Redefinir"
 ],
 "Restart": [
  null,
  "Reiniciar"
 ],
 "Run": [
  null,
  "Executar"
 ],
 "Running Since": [
  null,
  "Executando desde"
 ],
 "Saturday": [
  null,
  "Sábado"
 ],
 "Save": [
  null,
  "Salvar"
 ],
 "Save and reboot": [
  null,
  ""
 ],
 "Sealed-case PC": [
  null,
  "PC com caixa vedada"
 ],
 "Seconds": [
  null,
  "Segundos"
 ],
 "Secure Shell Keys": [
  null,
  "Chaves de Shell Seguras"
 ],
 "Security Updates Available": [
  null,
  "Atualizações de segurança disponíveis"
 ],
 "Service": [
  null,
  "Serviço"
 ],
 "Service Logs": [
  null,
  "Logs de Serviço"
 ],
 "Service name": [
  null,
  "Nome do serviço"
 ],
 "Services": [
  null,
  "Serviços"
 ],
 "Set Host name": [
  null,
  "Difinir o nome do Host"
 ],
 "Set Time": [
  null,
  "Definir Tempo"
 ],
 "Severity": [
  null,
  "Gravidade"
 ],
 "Shift+Insert": [
  null,
  ""
 ],
 "Show fingerprints": [
  null,
  "Exibir digitais"
 ],
 "Shut Down": [
  null,
  "Encerrar"
 ],
 "Slot": [
  null,
  "Slot"
 ],
 "Sockets": [
  null,
  "Sockets"
 ],
 "Software-based workarounds help prevent CPU security issues. These mitigations have the side effect of reducing performance. Change these settings at your own risk.": [
  null,
  ""
 ],
 "Space-saving Computer": [
  null,
  "Computador com economia de espaço"
 ],
 "Specific Time": [
  null,
  "Tempo Específico"
 ],
 "Start": [
  null,
  "Iniciar"
 ],
 "State": [
  null,
  "Estado"
 ],
 "Static": [
  null,
  "Estático"
 ],
 "Status": [
  null,
  "Estado"
 ],
 "Stick PC": [
  null,
  "Stick PC"
 ],
 "Stop": [
  null,
  "Pare"
 ],
 "Store Metrics": [
  null,
  "Armazenar métricas"
 ],
 "Sub Chassis": [
  null,
  "Sub Chassis"
 ],
 "Sub Notebook": [
  null,
  "Sub Notebook"
 ],
 "Sunday": [
  null,
  "Domingo"
 ],
 "Swap Used": [
  null,
  "Swap Usado"
 ],
 "Synchronized": [
  null,
  "Sincronizado"
 ],
 "Synchronized with {{Server}}": [
  null,
  "Sincronizado com {{Server}}"
 ],
 "System": [
  null,
  "Sistema"
 ],
 "System Information": [
  null,
  "Informação do sistema"
 ],
 "System Not Registered": [
  null,
  "Sistema não registrado"
 ],
 "System Services": [
  null,
  "Serviços do Sistema"
 ],
 "System Time": [
  null,
  "Tempo do Sistema"
 ],
 "System Up To Date": [
  null,
  "Sistema atualizado"
 ],
 "Tablet": [
  null,
  "Tablet"
 ],
 "Targets": [
  null,
  "Alvos"
 ],
 "Terminal": [
  null,
  "Terminal"
 ],
 "The user $0 is not permitted to change cpu security mitigations": [
  null,
  ""
 ],
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  "O usuário <b>$0</b> não tem permissões para criar temporizadores"
 ],
 "The user <b>$0</b> is not permitted to change the system time": [
  null,
  "Ao Usuário <b>$0</b> não é permitido trocar a hora do sistema"
 ],
 "The user <b>$0</b> is not permitted to enable or disable services": [
  null,
  "Ao usuário <b>$0</b> não é permitido desabilitar serviços"
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  "O usuário <b>$0</b> não tem permissão para modificar os hostnames"
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  "Ao usuário <b>$0</b>não é permitido modificar serviços"
 ],
 "The user <b>$0</b> is not permitted to start or stop services": [
  null,
  "Ao usuário <b>$0</b> não é permitido iniciar ou parar serviços"
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  "Este dia não existe em todos os meses.<br> O temporizador só será executado em meses que tenham 31 dias."
 ],
 "This field cannot be empty.": [
  null,
  "Este campo não pode estar vazio."
 ],
 "This unit is an instance of the $0 template.": [
  null,
  "Esta unidade é uma instância do modelo $0."
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  "Esta unidade não foi projetada para ser habilitada explicitamente."
 ],
 "Thursday": [
  null,
  "Quinta-feira"
 ],
 "Time Zone": [
  null,
  "Fuso Horário"
 ],
 "Timers": [
  null,
  "Temporizadores"
 ],
 "Total size: $0": [
  null,
  "Tamanho total: $0"
 ],
 "Tower": [
  null,
  "Torre"
 ],
 "Triggered By": [
  null,
  "Disparado por"
 ],
 "Triggers": [
  null,
  "Triggers"
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  "Tentando sincronizar com {{Server}}"
 ],
 "Tuesday": [
  null,
  "Terça-feira"
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "Unknown": [
  null,
  "Desconhecido"
 ],
 "Unmask": [
  null,
  "Sem Máscara"
 ],
 "Updates Available": [
  null,
  "Atualizações disponíveis"
 ],
 "Usage of $0 CPU core": [
  "Usage of $0 CPU cores",
  "Uso de $0 núcleo da CPU ",
  "Uso de $0 núcleos da CPU"
 ],
 "Used": [
  null,
  "Usado"
 ],
 "User": [
  null,
  "Usuário"
 ],
 "Vendor": [
  null,
  "Fabricante"
 ],
 "Version": [
  null,
  "Versão"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Aguardando que outras operações de gerenciamento de software terminem"
 ],
 "Wanted By": [
  null,
  "Requerido por"
 ],
 "Wants": [
  null,
  "Requer"
 ],
 "Warning and above": [
  null,
  "Aviso e acima"
 ],
 "Wednesday": [
  null,
  "Quarta-feira"
 ],
 "Weeks": [
  null,
  "Semanas"
 ],
 "White": [
  null,
  ""
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
 "failed to list ssh host keys: $0": [
  null,
  "falha ao listar chaves locais de ssh: $0"
 ],
 "of $0 CPU core": [
  "of $0 CPU cores",
  "de $0 núcleo da CPU",
  "de $0 núcleos da CPU"
 ],
 "undefined": [
  null,
  "indefinido"
 ],
 "unknown": [
  null,
  "desconhecido"
 ],
 "page-title\u0004CPU Status": [
  null,
  "Status da CPU"
 ],
 "page-title\u0004Memory": [
  null,
  "Memória"
 ]
}));
