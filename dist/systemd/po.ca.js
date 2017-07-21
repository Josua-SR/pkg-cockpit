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
  "language": "ca",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Template": [
  null,
  "Plantilla $0"
 ],
 "$0 day": [
  "$0 days",
  "",
  ""
 ],
 "$0 hour": [
  "$0 hours",
  "",
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  "",
  ""
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
  "1 minut"
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
  ""
 ],
 "1 week": [
  null,
  "1 setmana"
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
  "20 minuts"
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
  "40 minuts"
 ],
 "4th": [
  null,
  ""
 ],
 "5 Minutes": [
  null,
  "5 minuts"
 ],
 "5 min": [
  null,
  ""
 ],
 "5 minutes": [
  null,
  "5 minuts"
 ],
 "5th": [
  null,
  ""
 ],
 "6 hours": [
  null,
  "6 hores"
 ],
 "60 Minutes": [
  null,
  "60 minuts"
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
 "Asset Tag": [
  null,
  "Etiqueta de recurs"
 ],
 "At specific time": [
  null,
  ""
 ],
 "Automatically using NTP": [
  null,
  "Automàticament mitjançant NTP"
 ],
 "Automatically using specific NTP servers": [
  null,
  "Automàticament mitjançant servidors NTP específics"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Cached": [
  null,
  "Emmagatzemat temporalment"
 ],
 "Cancel": [
  null,
  "Cancel·la"
 ],
 "Cannot schedule event in the past": [
  null,
  ""
 ],
 "Change": [
  null,
  "Canvia"
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
  "Tanca"
 ],
 "Command": [
  null,
  "Ordre"
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
  "Arrencada actual"
 ],
 "Delay": [
  null,
  "Retard"
 ],
 "Description": [
  null,
  "Descripció"
 ],
 "Disable": [
  null,
  "Inhabilita"
 ],
 "Disabled": [
  null,
  "Inhabilitat"
 ],
 "Disk I/O": [
  null,
  ""
 ],
 "Domain": [
  null,
  "Domini"
 ],
 "Don't Repeat": [
  null,
  ""
 ],
 "Enable": [
  null,
  "Habilita"
 ],
 "Enable Forcefully": [
  null,
  "Habilita-ho forçosament"
 ],
 "Enabled": [
  null,
  "Habilitat"
 ],
 "Entry": [
  null,
  "Entrada"
 ],
 "Error": [
  null,
  "Error"
 ],
 "Everything": [
  null,
  ""
 ],
 "Free": [
  null,
  "Lliure"
 ],
 "Friday": [
  null,
  ""
 ],
 "Go to": [
  null,
  "Vés a"
 ],
 "Go to now": [
  null,
  "Vés a ara"
 ],
 "Hardware": [
  null,
  "Maquinari"
 ],
 "Host Name": [
  null,
  "Nom d'amfitrió"
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
  "Espera d'E/S"
 ],
 "Id": [
  null,
  "Id"
 ],
 "Instantiate": [
  null,
  "Instancia"
 ],
 "Invalid date format": [
  null,
  "format de data no vàlid"
 ],
 "Invalid date format and invalid time format": [
  null,
  "format no vàlid de la data i l'hora"
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
  "format d'hora no vàlid"
 ],
 "Invalid time zone": [
  null,
  ""
 ],
 "Journal": [
  null,
  "Publicacions"
 ],
 "Journal entry": [
  null,
  "Entrada de les publicacions"
 ],
 "Journal entry not found": [
  null,
  "Entrada no trobada de les publicacions"
 ],
 "Kernel": [
  null,
  "Nucli del sistema operatiu"
 ],
 "Last 24 hours": [
  null,
  "Les últimes 24 hores"
 ],
 "Last 7 days": [
  null,
  "Els últims 7 dies"
 ],
 "Last Trigger": [
  null,
  ""
 ],
 "Load earlier entries": [
  null,
  "Carrega les entrades anteriors"
 ],
 "Loading...": [
  null,
  "S'està carregant..."
 ],
 "Log messages": [
  null,
  ""
 ],
 "Logs": [
  null,
  "Registres"
 ],
 "Machine ID": [
  null,
  "Id. de màquina"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  ""
 ],
 "Manually": [
  null,
  "Manualment"
 ],
 "Mask": [
  null,
  "Emmascara"
 ],
 "Mask Forcefully": [
  null,
  "Emmascara-ho forçosament"
 ],
 "Memory": [
  null,
  "Memòria"
 ],
 "Message to logged in users": [
  null,
  "Missatge als usuaris que hagin iniciat la sessió"
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
  "Servidor NTP"
 ],
 "Need at least one NTP server": [
  null,
  "Com a mínim es necessita un servidor NTP"
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
  "Nice"
 ],
 "No Delay": [
  null,
  "Sense retard"
 ],
 "No host keys found.": [
  null,
  ""
 ],
 "Not authorized to upload-report": [
  null,
  ""
 ],
 "Not synchronized": [
  null,
  "No sincronitzat"
 ],
 "Note": [
  null,
  "Nota"
 ],
 "Off": [
  null,
  "Apagat"
 ],
 "On": [
  null,
  "Engegat"
 ],
 "Only Problems": [
  null,
  ""
 ],
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  ""
 ],
 "Operating System": [
  null,
  "Sistema operatiu"
 ],
 "Paths": [
  null,
  "Camins"
 ],
 "Performance Profile": [
  null,
  "Perfil de rendiment"
 ],
 "Power Options": [
  null,
  "Opcions d'energia"
 ],
 "Preset": [
  null,
  "Preajusta"
 ],
 "Preset Forcefully": [
  null,
  "Preajusta-ho forçosament"
 ],
 "Pretty Host Name": [
  null,
  "Nom de l'amfitrió de nivell superior"
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
 "Real Host Name": [
  null,
  "Nom real de l'amfitrió"
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
  "Rearrencada"
 ],
 "Recent": [
  null,
  "Recent"
 ],
 "Reload": [
  null,
  "Recarrega"
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
  "Restableix"
 ],
 "Restart": [
  null,
  "Reinicia"
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
  "Registres del servei"
 ],
 "Service name": [
  null,
  ""
 ],
 "Services": [
  null,
  "Serveis"
 ],
 "Set Host name": [
  null,
  "Estableix el nom de l'amfitrió"
 ],
 "Set Time": [
  null,
  "Ajusta l'hora"
 ],
 "Severity": [
  null,
  ""
 ],
 "Show fingerprints": [
  null,
  "Mostra les empremptes"
 ],
 "Shut Down": [
  null,
  ""
 ],
 "Since $0": [
  null,
  "Des de $0"
 ],
 "Sockets": [
  null,
  "Sockets"
 ],
 "Specific Time": [
  null,
  "Temps específic"
 ],
 "Start": [
  null,
  "Inicia"
 ],
 "State": [
  null,
  "Estat"
 ],
 "Static": [
  null,
  "Estàtic"
 ],
 "Stop": [
  null,
  "Atura"
 ],
 "Store Performance Data": [
  null,
  "Emmagatzema dades de rendiment"
 ],
 "Sunday": [
  null,
  ""
 ],
 "Swap Used": [
  null,
  "Intercanvi utilitzat"
 ],
 "Synchronized": [
  null,
  "Sincronitzat"
 ],
 "Synchronized with {{Server}}": [
  null,
  "Sincronitzat amb {{Server}}"
 ],
 "System": [
  null,
  ""
 ],
 "System Services": [
  null,
  "Serveis del sistema"
 ],
 "System Time": [
  null,
  "Hora del sistema"
 ],
 "Targets": [
  null,
  "Objectius"
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
  "A l'usuari <b>$0</b> no se li permet modificar el noms dels amfitrions"
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
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
  "Aquesta unitat és una instantània de la plantilla $0."
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
  "Zona horària"
 ],
 "Timers": [
  null,
  "Rellotges"
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  "S'està intentant la sincronització amb {{Server}}"
 ],
 "Tuesday": [
  null,
  ""
 ],
 "Unmask": [
  null,
  "Desemmascara"
 ],
 "Used": [
  null,
  "Utilitzat"
 ],
 "User": [
  null,
  "Usuari"
 ],
 "Version": [
  null,
  "Versió"
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
  "[$0 bytes de dades binàries]"
 ],
 "[binary data]": [
  null,
  "[dades binàries]"
 ],
 "[no data]": [
  null,
  "[sense dades]"
 ],
 "failed to list ssh host keys: $0": [
  null,
  ""
 ],
 "unknown": [
  null,
  "desconegut"
 ],
 "page-title\u0004CPU Status": [
  null,
  "Estat de la CPU"
 ],
 "page-title\u0004Memory": [
  null,
  "Memòria"
 ]
}));
