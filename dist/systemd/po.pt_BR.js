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
 "Checking installed software": [
  null,
  "Verificando o software instalado"
 ],
 "Class": [
  null,
  "Classe"
 ],
 "Close": [
  null,
  "Fechar"
 ],
 "Command": [
  null,
  "Comando"
 ],
 "Condition failed": [
  null,
  "Condição falhou"
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
 "Current boot": [
  null,
  "Inicialização atual"
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
 "Disk I/O": [
  null,
  "Entrada e Saida de disco"
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
 "Enable stored metrics…": [
  null,
  "Ativar métricas armazenadas ..."
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
 "Invalid time zone": [
  null,
  "Fuso Horário inválido"
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
 "Last 24 hours": [
  null,
  "Últimas 24 horas"
 ],
 "Last 7 days": [
  null,
  "Últimos 7 dias"
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
 "Machine ID": [
  null,
  "ID de Máquina"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "Máquina de Chaves SSH e Impressões digitais"
 ],
 "Manually": [
  null,
  "Manualmente"
 ],
 "Memory": [
  null,
  "Memória"
 ],
 "Memory & Swap": [
  null,
  "Memória e Troca"
 ],
 "Minutes": [
  null,
  "Minutos"
 ],
 "Model": [
  null,
  "Modelo"
 ],
 "Monday": [
  null,
  "Segunda-feira"
 ],
 "Name": [
  null,
  "Nome"
 ],
 "Network Traffic": [
  null,
  "Tráfego de Rede"
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
 "Only Emergency": [
  null,
  "Apenas emergência"
 ],
 "Operating System": [
  null,
  "Sistema Operacional"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "Paths": [
  null,
  "Caminhos"
 ],
 "Performance Profile": [
  null,
  "Perfil de Desempenho"
 ],
 "Power Options": [
  null,
  "Opções de Energia"
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
 "Real Host Name": [
  null,
  "Nome Real de Host"
 ],
 "Reboot": [
  null,
  "Reiniciar"
 ],
 "Recent": [
  null,
  "Recente"
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
 "Set Time": [
  null,
  "Definir Tempo"
 ],
 "Severity": [
  null,
  "Gravidade"
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
 "Specific Time": [
  null,
  "Tempo Específico"
 ],
 "Store metrics": [
  null,
  "Armazenar métricas"
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
 "System Services": [
  null,
  "Serviços do Sistema"
 ],
 "System Time": [
  null,
  "Tempo do Sistema"
 ],
 "Targets": [
  null,
  "Alvos"
 ],
 "Terminal": [
  null,
  "Terminal"
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
 ]
}));
