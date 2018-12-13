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
  "x-generator": "Zanata 4.6.2"
 },
 "$0 is not available from any repository.": [
  null,
  ""
 ],
 "$0 will be installed.": [
  null,
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
 "1 week": [
  null,
  "1 setmana"
 ],
 "10th": [
  null,
  "10è"
 ],
 "11th": [
  null,
  "11è"
 ],
 "12th": [
  null,
  "12è"
 ],
 "13th": [
  null,
  "13è"
 ],
 "14th": [
  null,
  "14è"
 ],
 "15th": [
  null,
  "15è"
 ],
 "16th": [
  null,
  "16è"
 ],
 "17th": [
  null,
  "17è"
 ],
 "18th": [
  null,
  "18è"
 ],
 "19th": [
  null,
  "19è"
 ],
 "1st": [
  null,
  "1r"
 ],
 "20 Minutes": [
  null,
  "20 minuts"
 ],
 "20th": [
  null,
  "20è"
 ],
 "21st": [
  null,
  "21è"
 ],
 "22nd": [
  null,
  "22è"
 ],
 "23rd": [
  null,
  "23è"
 ],
 "24th": [
  null,
  "24è"
 ],
 "25th": [
  null,
  "25è"
 ],
 "26th": [
  null,
  "26è"
 ],
 "27th": [
  null,
  "27è"
 ],
 "28th": [
  null,
  "28è"
 ],
 "29th": [
  null,
  "29è"
 ],
 "2nd": [
  null,
  "2n"
 ],
 "30th": [
  null,
  "30è"
 ],
 "31st": [
  null,
  "31è"
 ],
 "3rd": [
  null,
  "3r"
 ],
 "40 Minutes": [
  null,
  "40 minuts"
 ],
 "4th": [
  null,
  "4t"
 ],
 "5 Minutes": [
  null,
  "5 minuts"
 ],
 "5 minutes": [
  null,
  "5 minuts"
 ],
 "5th": [
  null,
  "5è"
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
  "6è"
 ],
 "7th": [
  null,
  "7è"
 ],
 "8th": [
  null,
  "8è"
 ],
 "9th": [
  null,
  "9è"
 ],
 "Additional packages:": [
  null,
  ""
 ],
 "After": [
  null,
  "Després"
 ],
 "After system boot": [
  null,
  "Després de l'arrencada del sistema"
 ],
 "Alert and above": [
  null,
  ""
 ],
 "Asset Tag": [
  null,
  "Etiqueta de recurs"
 ],
 "At specific time": [
  null,
  "A l'instant específic"
 ],
 "Automatically using NTP": [
  null,
  "Automàticament mitjançant NTP"
 ],
 "Automatically using specific NTP servers": [
  null,
  "Automàticament mitjançant servidors NTP específics"
 ],
 "BIOS": [
  null,
  "BIOS"
 ],
 "BIOS date": [
  null,
  "Data del BIOS"
 ],
 "BIOS version": [
  null,
  "Versió del BIOS"
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
 "Change": [
  null,
  "Canvia"
 ],
 "Change Host Name": [
  null,
  "Canvia el nom d'amfitrió"
 ],
 "Change System Time": [
  null,
  "Canvia l'hora del sistema"
 ],
 "Checking installed software": [
  null,
  ""
 ],
 "Class": [
  null,
  "Classe"
 ],
 "Close": [
  null,
  "Tanca"
 ],
 "Command": [
  null,
  "Ordre"
 ],
 "Condition failed": [
  null,
  "Ha fallat la condició"
 ],
 "Create Timer": [
  null,
  "Crea un temporitzador"
 ],
 "Create Timers": [
  null,
  "Crea temporitzadors"
 ],
 "Critical and above": [
  null,
  ""
 ],
 "Current boot": [
  null,
  "Arrencada actual"
 ],
 "Debug and above": [
  null,
  ""
 ],
 "Delay": [
  null,
  "Retard"
 ],
 "Description": [
  null,
  "Descripció"
 ],
 "Disk I/O": [
  null,
  "E/S de disc"
 ],
 "Domain": [
  null,
  "Domini"
 ],
 "Don't Repeat": [
  null,
  "No repeteixis"
 ],
 "Downloading $0": [
  null,
  ""
 ],
 "Enable persistent metrics…": [
  null,
  ""
 ],
 "Entry": [
  null,
  "Entrada"
 ],
 "Error": [
  null,
  "Error"
 ],
 "Error and above": [
  null,
  ""
 ],
 "Everything": [
  null,
  "Tot"
 ],
 "Friday": [
  null,
  "Divendres"
 ],
 "General": [
  null,
  "General"
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
 "Hardware Information": [
  null,
  "Informació del maquinari"
 ],
 "Host Name": [
  null,
  "Nom d'amfitrió"
 ],
 "Hour : Minute": [
  null,
  "hora : minut"
 ],
 "Hours": [
  null,
  "Hores"
 ],
 "I/O Wait": [
  null,
  "Espera d'E/S"
 ],
 "Info and above": [
  null,
  ""
 ],
 "Install": [
  null,
  "Instal·la"
 ],
 "Install Software": [
  null,
  ""
 ],
 "Installing $0": [
  null,
  ""
 ],
 "Instantiate": [
  null,
  "Instancia"
 ],
 "Invalid time zone": [
  null,
  "Zona horària no vàlida"
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
  "Kernel"
 ],
 "Last 24 hours": [
  null,
  "Les últimes 24 hores"
 ],
 "Last 7 days": [
  null,
  "Els últims 7 dies"
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
  "Missatges del registre"
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
  "Empremtes de les claus SSH de la màquina"
 ],
 "Manually": [
  null,
  "Manualment"
 ],
 "Memory": [
  null,
  "Memòria"
 ],
 "Memory & Swap": [
  null,
  ""
 ],
 "Minutes": [
  null,
  "Minuts"
 ],
 "Model": [
  null,
  "Model"
 ],
 "Monday": [
  null,
  "Dilluns"
 ],
 "Name": [
  null,
  "Nom"
 ],
 "Network Traffic": [
  null,
  "Trànsit de xarxa"
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
  "No autoritzat per pujar l'informe"
 ],
 "Not synchronized": [
  null,
  "No sincronitzat"
 ],
 "Note": [
  null,
  "Nota"
 ],
 "Notice and above": [
  null,
  ""
 ],
 "Off": [
  null,
  "Off"
 ],
 "Ok": [
  null,
  "D'acord"
 ],
 "On": [
  null,
  "On"
 ],
 "Only Emergency": [
  null,
  "Només emergències"
 ],
 "Operating System": [
  null,
  "Sistema operatiu"
 ],
 "PCI": [
  null,
  "PCI"
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
 "Pretty Host Name": [
  null,
  "Nom d'amfitrió bonic"
 ],
 "Problem details": [
  null,
  "Detalls del problema"
 ],
 "Problem info": [
  null,
  "Informació del problema"
 ],
 "Real Host Name": [
  null,
  "Nom d'amfitrió real"
 ],
 "Reboot": [
  null,
  "Rearrencada"
 ],
 "Recent": [
  null,
  "Recent"
 ],
 "Removals:": [
  null,
  ""
 ],
 "Removing $0": [
  null,
  ""
 ],
 "Repeat Daily": [
  null,
  "Repeteix diàriament"
 ],
 "Repeat Hourly": [
  null,
  "Repeteix cada hora"
 ],
 "Repeat Monthly": [
  null,
  "Repeteix cada mes"
 ],
 "Repeat Weekly": [
  null,
  "Repeteix cada setmana"
 ],
 "Repeat Yearly": [
  null,
  "Repeteix cada any"
 ],
 "Report": [
  null,
  ""
 ],
 "Reported": [
  null,
  "Informat"
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
  "Executa"
 ],
 "Saturday": [
  null,
  "Dissabte"
 ],
 "Save": [
  null,
  "Desa"
 ],
 "Seconds": [
  null,
  "segons"
 ],
 "Secure Shell Keys": [
  null,
  "Claus de shell segures"
 ],
 "Service Logs": [
  null,
  "Registres del servei"
 ],
 "Service name": [
  null,
  "Nom del servei"
 ],
 "Services": [
  null,
  "Serveis"
 ],
 "Set Time": [
  null,
  "Ajusta l'hora"
 ],
 "Severity": [
  null,
  "Gravetat"
 ],
 "Show fingerprints": [
  null,
  "Mostra les empremtes"
 ],
 "Shut Down": [
  null,
  "Apaga"
 ],
 "Slot": [
  null,
  "Ranura"
 ],
 "Sockets": [
  null,
  "Sockets"
 ],
 "Specific Time": [
  null,
  "Instant concret"
 ],
 "Store Performance Data": [
  null,
  "Desa les dades de rendiment"
 ],
 "Sunday": [
  null,
  "Diumenge"
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
  "Sistema"
 ],
 "System Information": [
  null,
  "Informació del sistema"
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
 "This unit is not designed to be enabled explicitly.": [
  null,
  "Aquesta unitat no està dissenyada per estar explícitament activada."
 ],
 "Thursday": [
  null,
  "Dijous"
 ],
 "Time Zone": [
  null,
  "Zona horària"
 ],
 "Timers": [
  null,
  "Temporitzadors"
 ],
 "Total size: $0": [
  null,
  ""
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  "S'està intentant la sincronització amb {{Server}}"
 ],
 "Tuesday": [
  null,
  "Dimarts"
 ],
 "Type": [
  null,
  "Tipus"
 ],
 "Used": [
  null,
  "Utilitzat"
 ],
 "User": [
  null,
  "Usuari"
 ],
 "Vendor": [
  null,
  "Fabricant"
 ],
 "Version": [
  null,
  "Versió"
 ],
 "Waiting for other software management operations to finish": [
  null,
  ""
 ],
 "Warning and above": [
  null,
  ""
 ],
 "Wednesday": [
  null,
  "Dimecres"
 ],
 "Weeks": [
  null,
  "Setmanes"
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
 ]
}));
