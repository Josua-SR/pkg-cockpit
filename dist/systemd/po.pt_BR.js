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
  "",
  ""
 ],
 "$0 week": [
  "$0 weeks",
  "",
  ""
 ],
 "$0 year": [
  "$0 years",
  "",
  ""
 ],
 "1 Minute": [
  null,
  ""
 ],
 "1 day": [
  null,
  ""
 ],
 "1 hour": [
  null,
  ""
 ],
 "1 min": [
  null,
  ""
 ],
 "1 week": [
  null,
  ""
 ],
 "10th": [
  null,
  ""
 ],
 "11th": [
  null,
  ""
 ],
 "12th": [
  null,
  ""
 ],
 "13th": [
  null,
  ""
 ],
 "14th": [
  null,
  ""
 ],
 "15th": [
  null,
  ""
 ],
 "16th": [
  null,
  ""
 ],
 "17th": [
  null,
  ""
 ],
 "18th": [
  null,
  ""
 ],
 "19th": [
  null,
  ""
 ],
 "1st": [
  null,
  ""
 ],
 "2 min": [
  null,
  ""
 ],
 "20 Minutes": [
  null,
  ""
 ],
 "20th": [
  null,
  ""
 ],
 "21st": [
  null,
  ""
 ],
 "22nd": [
  null,
  ""
 ],
 "23rd": [
  null,
  ""
 ],
 "24th": [
  null,
  ""
 ],
 "25th": [
  null,
  ""
 ],
 "26th": [
  null,
  ""
 ],
 "27th": [
  null,
  ""
 ],
 "28th": [
  null,
  ""
 ],
 "29th": [
  null,
  ""
 ],
 "2nd": [
  null,
  ""
 ],
 "3 min": [
  null,
  ""
 ],
 "30th": [
  null,
  ""
 ],
 "31st": [
  null,
  ""
 ],
 "3rd": [
  null,
  ""
 ],
 "4 min": [
  null,
  ""
 ],
 "40 Minutes": [
  null,
  ""
 ],
 "4th": [
  null,
  ""
 ],
 "5 Minutes": [
  null,
  ""
 ],
 "5 min": [
  null,
  ""
 ],
 "5 minutes": [
  null,
  ""
 ],
 "5th": [
  null,
  ""
 ],
 "6 hours": [
  null,
  ""
 ],
 "60 Minutes": [
  null,
  ""
 ],
 "6th": [
  null,
  ""
 ],
 "7th": [
  null,
  ""
 ],
 "8th": [
  null,
  ""
 ],
 "9th": [
  null,
  ""
 ],
 "After": [
  null,
  ""
 ],
 "After system boot": [
  null,
  ""
 ],
 "All": [
  null,
  "Todos"
 ],
 "Asset Tag": [
  null,
  ""
 ],
 "At specific time": [
  null,
  ""
 ],
 "Automatically using NTP": [
  null,
  ""
 ],
 "Automatically using specific NTP servers": [
  null,
  ""
 ],
 "CPU": [
  null,
  ""
 ],
 "Cached": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Cannot schedule event in the past": [
  null,
  ""
 ],
 "Change": [
  null,
  ""
 ],
 "Change Host Name": [
  null,
  ""
 ],
 "Change System Time": [
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
 "Create Timer": [
  null,
  ""
 ],
 "Create Timers": [
  null,
  ""
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
  ""
 ],
 "Domain": [
  null,
  ""
 ],
 "Don't Repeat": [
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
  ""
 ],
 "Error": [
  null,
  "Erro"
 ],
 "Errors": [
  null,
  "Erros"
 ],
 "Free": [
  null,
  ""
 ],
 "Friday": [
  null,
  ""
 ],
 "Go to": [
  null,
  "Ir para"
 ],
 "Go to now": [
  null,
  ""
 ],
 "Hardware": [
  null,
  ""
 ],
 "Host Name": [
  null,
  ""
 ],
 "Hour : Minute": [
  null,
  ""
 ],
 "Hour needs to be a number between 0-23": [
  null,
  ""
 ],
 "Hours": [
  null,
  ""
 ],
 "I/O Wait": [
  null,
  ""
 ],
 "Id": [
  null,
  ""
 ],
 "Instantiate": [
  null,
  "Instanciar"
 ],
 "Invalid date format": [
  null,
  ""
 ],
 "Invalid date format and invalid time format": [
  null,
  ""
 ],
 "Invalid date format.": [
  null,
  ""
 ],
 "Invalid number.": [
  null,
  ""
 ],
 "Invalid time format": [
  null,
  ""
 ],
 "Invalid time zone": [
  null,
  ""
 ],
 "Isolate": [
  null,
  "Isolar"
 ],
 "Journal": [
  null,
  ""
 ],
 "Journal entry": [
  null,
  ""
 ],
 "Journal entry not found": [
  null,
  ""
 ],
 "Kernel": [
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
  ""
 ],
 "Logs": [
  null,
  ""
 ],
 "Machine ID": [
  null,
  ""
 ],
 "Machine SSH Key Fingerprints": [
  null,
  ""
 ],
 "Manually": [
  null,
  ""
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
  ""
 ],
 "Message to logged in users": [
  null,
  ""
 ],
 "Minute needs to be a number between 0-59": [
  null,
  ""
 ],
 "Minutes": [
  null,
  ""
 ],
 "Monday": [
  null,
  ""
 ],
 "NTP Server": [
  null,
  ""
 ],
 "Need at least one NTP server": [
  null,
  ""
 ],
 "Network Traffic": [
  null,
  ""
 ],
 "Next Run": [
  null,
  ""
 ],
 "Nice": [
  null,
  ""
 ],
 "No Delay": [
  null,
  ""
 ],
 "No host keys found.": [
  null,
  ""
 ],
 "Not synchronized": [
  null,
  ""
 ],
 "Note": [
  null,
  "Nota"
 ],
 "Notices": [
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
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  ""
 ],
 "Operating System": [
  null,
  ""
 ],
 "Paths": [
  null,
  "Caminhos"
 ],
 "Performance Profile": [
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
  ""
 ],
 "Real Host Name": [
  null,
  ""
 ],
 "Real host name can only contain lower-case characters, digits, dashes, and periods (with populated subdomains)": [
  null,
  ""
 ],
 "Real host name must be 64 characters or less": [
  null,
  ""
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
 "Reload or Restart": [
  null,
  "Recarregar ou Reiniciar"
 ],
 "Reload or Try Restart": [
  null,
  "Recarregue ou Tente Reiniciar"
 ],
 "Repeat Daily": [
  null,
  ""
 ],
 "Repeat Hourly": [
  null,
  ""
 ],
 "Repeat Monthly": [
  null,
  ""
 ],
 "Repeat Weekly": [
  null,
  ""
 ],
 "Repeat Yearly": [
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
  ""
 ],
 "Saturday": [
  null,
  ""
 ],
 "Save": [
  null,
  ""
 ],
 "Seconds": [
  null,
  ""
 ],
 "Secure Shell Keys": [
  null,
  ""
 ],
 "Service Logs": [
  null,
  ""
 ],
 "Service name": [
  null,
  ""
 ],
 "Services": [
  null,
  "Serviços"
 ],
 "Set Host name": [
  null,
  ""
 ],
 "Set Time": [
  null,
  ""
 ],
 "Show fingerprints": [
  null,
  ""
 ],
 "Shut Down": [
  null,
  ""
 ],
 "Since $0": [
  null,
  "Desde $0"
 ],
 "Sockets": [
  null,
  "Sockets"
 ],
 "Specific Time": [
  null,
  ""
 ],
 "Start": [
  null,
  "Iniciar"
 ],
 "State": [
  null,
  ""
 ],
 "Static": [
  null,
  "Estático"
 ],
 "Stop": [
  null,
  "Pare"
 ],
 "Store Performance Data": [
  null,
  ""
 ],
 "Sunday": [
  null,
  ""
 ],
 "Swap Used": [
  null,
  ""
 ],
 "Synchronized": [
  null,
  ""
 ],
 "Synchronized with {{Server}}": [
  null,
  ""
 ],
 "System": [
  null,
  ""
 ],
 "System Services": [
  null,
  "Serviços do Sistema"
 ],
 "System Time": [
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
  ""
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  ""
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  ""
 ],
 "This field cannot be empty.": [
  null,
  ""
 ],
 "This unit is an instance of the $0 template.": [
  null,
  "Esta unidade é uma instância do modelo $0."
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  ""
 ],
 "Thursday": [
  null,
  ""
 ],
 "Time Zone": [
  null,
  ""
 ],
 "Timers": [
  null,
  "Temporizadores"
 ],
 "Try Restart": [
  null,
  "Tente Reiniciar"
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  ""
 ],
 "Tuesday": [
  null,
  ""
 ],
 "Unmask": [
  null,
  "Sem Máscara"
 ],
 "Used": [
  null,
  ""
 ],
 "User": [
  null,
  ""
 ],
 "Version": [
  null,
  ""
 ],
 "Warnings": [
  null,
  "Avisos"
 ],
 "Wednesday": [
  null,
  ""
 ],
 "Weeks": [
  null,
  ""
 ],
 "[$0 bytes of binary data]": [
  null,
  ""
 ],
 "[binary data]": [
  null,
  ""
 ],
 "[no data]": [
  null,
  ""
 ],
 "failed to list ssh host keys: $0": [
  null,
  ""
 ],
 "unknown": [
  null,
  ""
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
