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
 "$0 Template": [
  null,
  "Modelo $0 "
 ],
 "$0 day": [
  "$0 days",
  "$0 dia",
  "$0 dias"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 horas",
  "$0 horas"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minuto",
  "$0 minutos"
 ],
 "$0 month": [
  "$0 months",
  "$0 mês",
  "$0 meses"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 semana",
  "$0 semanas"
 ],
 "$0 year": [
  "$0 years",
  "$0 ano",
  "$0 anos"
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
 "Advanced TCA": [
  null,
  ""
 ],
 "After": [
  null,
  "Após"
 ],
 "After system boot": [
  null,
  "Após a inicialização do sistema"
 ],
 "All In One": [
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
  ""
 ],
 "BIOS date": [
  null,
  ""
 ],
 "BIOS version": [
  null,
  ""
 ],
 "Blade": [
  null,
  ""
 ],
 "Blade enclosure": [
  null,
  ""
 ],
 "Bus Expansion Chassis": [
  null,
  ""
 ],
 "CPU": [
  null,
  "CPU"
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
 "Class": [
  null,
  ""
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
  ""
 ],
 "Condition $0=$1 was not met": [
  null,
  ""
 ],
 "Condition failed": [
  null,
  ""
 ],
 "Convertible": [
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
 "Current boot": [
  null,
  "Inicialização atual"
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
  ""
 ],
 "Detachable": [
  null,
  ""
 ],
 "Disable": [
  null,
  "Desabilitar"
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
  ""
 ],
 "Domain": [
  null,
  "Domínio"
 ],
 "Don't Repeat": [
  null,
  "Não Repita"
 ],
 "Embedded PC": [
  null,
  ""
 ],
 "Enable": [
  null,
  "Habilitar"
 ],
 "Enable Forcefully": [
  null,
  "Habilite Forçosamente"
 ],
 "Enabled": [
  null,
  "Habilitado"
 ],
 "Entry": [
  null,
  "Entrada"
 ],
 "Error": [
  null,
  "Erro"
 ],
 "Everything": [
  null,
  "Tudo"
 ],
 "Expansion Chassis": [
  null,
  ""
 ],
 "Free": [
  null,
  "Livre"
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
  ""
 ],
 "Hardware": [
  null,
  "Hardware"
 ],
 "Hardware Information": [
  null,
  ""
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
 "Id": [
  null,
  "Id"
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
  ""
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
  ""
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
  ""
 ],
 "Lunch Box": [
  null,
  ""
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
  ""
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
 "Message to logged in users": [
  null,
  "Mensagem para usuários logados"
 ],
 "Mini PC": [
  null,
  ""
 ],
 "Mini Tower": [
  null,
  ""
 ],
 "Minute needs to be a number between 0-59": [
  null,
  "Minutos precisam ser números entre 0-59"
 ],
 "Minutes": [
  null,
  "Minutos"
 ],
 "Model": [
  null,
  ""
 ],
 "Monday": [
  null,
  "Segunda-feira"
 ],
 "Multi-system Chassis": [
  null,
  ""
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
 "No host keys found.": [
  null,
  "Nenhuma chave de host encontrada."
 ],
 "Not authorized to upload-report": [
  null,
  ""
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
  ""
 ],
 "Off": [
  null,
  "Desligado"
 ],
 "On": [
  null,
  "Ligado"
 ],
 "Only Problems": [
  null,
  ""
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
  ""
 ],
 "PCI": [
  null,
  ""
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
  ""
 ],
 "Pizza Box": [
  null,
  ""
 ],
 "Portable": [
  null,
  ""
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
  ""
 ],
 "Problem info": [
  null,
  ""
 ],
 "Problems, Errors": [
  null,
  ""
 ],
 "Problems, Errors, Warnings": [
  null,
  ""
 ],
 "Problems, Errors, Warnings, Notices": [
  null,
  ""
 ],
 "RAID Chassis": [
  null,
  ""
 ],
 "Rack Mount Chassis": [
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
  ""
 ],
 "Reported": [
  null,
  ""
 ],
 "Reporter 'reporter-ureport' not found.": [
  null,
  ""
 ],
 "Reporting was unsucessful. Try running `reporter-ureport -d ": [
  null,
  ""
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
 "Saturday": [
  null,
  "Sábado"
 ],
 "Save": [
  null,
  "Salvar"
 ],
 "Sealed-case PC": [
  null,
  ""
 ],
 "Seconds": [
  null,
  "Segundos"
 ],
 "Secure Shell Keys": [
  null,
  "Chaves de Shell Seguras"
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
 "Since $0": [
  null,
  "Desde $0"
 ],
 "Slot": [
  null,
  ""
 ],
 "Sockets": [
  null,
  "Sockets"
 ],
 "Space-saving Computer": [
  null,
  ""
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
 "Stick PC": [
  null,
  ""
 ],
 "Stop": [
  null,
  "Pare"
 ],
 "Store Performance Data": [
  null,
  "Armazene Dados de Performance"
 ],
 "Sub Chassis": [
  null,
  ""
 ],
 "Sub Notebook": [
  null,
  ""
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
  ""
 ],
 "System Services": [
  null,
  "Serviços do Sistema"
 ],
 "System Time": [
  null,
  "Tempo do Sistema"
 ],
 "Tablet": [
  null,
  ""
 ],
 "Targets": [
  null,
  "Alvos"
 ],
 "Terminal": [
  null,
  "Terminal"
 ],
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  "O usuário <b>$0</b> não tem permissões para criar temporizadores"
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  "O usuário <b>$0</b> não tem permissão para modificar os hostnames"
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  "Ao usuário <b>$0</b>não é permitido modificar serviços"
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
 "Tower": [
  null,
  ""
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
 "Usage of $0 CPU core": [
  "Usage of $0 CPU cores",
  "",
  ""
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
  ""
 ],
 "Version": [
  null,
  "Versão"
 ],
 "Wednesday": [
  null,
  "Quarta-feira"
 ],
 "Weeks": [
  null,
  "Semanas"
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
  "",
  ""
 ],
 "unknown": [
  null,
  "desconhecido"
 ],
 "page-title\u0004CPU Status": [
  null,
  "Status de CPU"
 ],
 "page-title\u0004Memory": [
  null,
  "Memória"
 ]
}));
