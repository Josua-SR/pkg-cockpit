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
  "$0 dia",
  "$0 dies"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 hora",
  "$0 hores"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minut",
  "$0 minuts"
 ],
 "$0 month": [
  "$0 months",
  "$0 mes",
  "$0 mesos"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 setmana",
  "$0 setmanes"
 ],
 "$0 year": [
  "$0 years",
  "$0 any",
  "$0 anys"
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
  "1 min"
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
 "2 min": [
  null,
  "2 min"
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
 "3 min": [
  null,
  "3 min"
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
 "4 min": [
  null,
  "4 min"
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
 "5 min": [
  null,
  "5 min"
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
 "Advanced TCA": [
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
 "All In One": [
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
  "Canvia el nom d'amfitrió"
 ],
 "Change System Time": [
  null,
  "Canvia l'hora del sistema"
 ],
 "Close": [
  null,
  "Tanca"
 ],
 "Command": [
  null,
  "Ordre"
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
  "Ha fallat la condició"
 ],
 "Convertible": [
  null,
  ""
 ],
 "Create Timer": [
  null,
  "Crea un temporitzador"
 ],
 "Create Timers": [
  null,
  "Crea temporitzadors"
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
  "Inhabilita"
 ],
 "Disabled": [
  null,
  "Inhabilitat"
 ],
 "Disk I/O": [
  null,
  "E/S de disc"
 ],
 "Docking Station": [
  null,
  ""
 ],
 "Domain": [
  null,
  "Domini"
 ],
 "Don't Repeat": [
  null,
  "No repeteixis"
 ],
 "Embedded PC": [
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
  "Tot"
 ],
 "Expansion Chassis": [
  null,
  ""
 ],
 "Free": [
  null,
  "Lliure"
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
 "Hand Held": [
  null,
  ""
 ],
 "Hardware": [
  null,
  "Maquinari"
 ],
 "Hardware Information": [
  null,
  ""
 ],
 "Host Name": [
  null,
  "Nom d'amfitrió"
 ],
 "Hour : Minute": [
  null,
  "hora : minut"
 ],
 "Hour needs to be a number between 0-23": [
  null,
  "L'hora ha de ser un nombre entre 0-23"
 ],
 "Hours": [
  null,
  "Hores"
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
  "Format de data no vàlid"
 ],
 "Invalid date format and invalid time format": [
  null,
  "Format no vàlid de la data i l'hora"
 ],
 "Invalid date format.": [
  null,
  "Format de data no vàlid."
 ],
 "Invalid number.": [
  null,
  "Número no vàlid."
 ],
 "Invalid time format": [
  null,
  "Format d'hora no vàlid"
 ],
 "Invalid time zone": [
  null,
  "Zona horària no vàlida"
 ],
 "IoT Gateway": [
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
  "Kernel"
 ],
 "Laptop": [
  null,
  ""
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
  "Últim disparador"
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
  "Id. de màquina"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "Empremtes de les claus SSH de la màquina"
 ],
 "Main Server Chassis": [
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
  "Missatge per als usuaris que hagin iniciat la sessió"
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
  "El minut ha de ser un nombre entre 0-59"
 ],
 "Minutes": [
  null,
  "Minuts"
 ],
 "Monday": [
  null,
  "Dilluns"
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
  "Nom"
 ],
 "Need at least one NTP server": [
  null,
  "Com a mínim es necessita un servidor NTP"
 ],
 "Network Traffic": [
  null,
  "Trànsit de xarxa"
 ],
 "Next Run": [
  null,
  "Següent execució"
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
 "Notebook": [
  null,
  ""
 ],
 "Off": [
  null,
  "Off"
 ],
 "On": [
  null,
  "On"
 ],
 "Only Problems": [
  null,
  "Només els problemes"
 ],
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  ""
 ],
 "Operating System": [
  null,
  "Sistema operatiu"
 ],
 "Other": [
  null,
  ""
 ],
 "Paths": [
  null,
  "Camins"
 ],
 "Performance Profile": [
  null,
  "Perfil de rendiment"
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
 "Problems, Errors": [
  null,
  "Problemes i errors"
 ],
 "Problems, Errors, Warnings": [
  null,
  "Problemes, errors i avisos"
 ],
 "Problems, Errors, Warnings, Notices": [
  null,
  "Problemes, errors, avisos i notificacions"
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
  "Nom d'amfitrió real"
 ],
 "Real host name can only contain lower-case characters, digits, dashes, and periods (with populated subdomains)": [
  null,
  "El nom d'amfitrió real només pot contenir caràcters en minúscules, dígits, guions i punts (amb subdominis poblats)"
 ],
 "Real host name must be 64 characters or less": [
  null,
  "El nom d'amfitrió real pot tenir com a molt 64 caràcters"
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
 "Sealed-case PC": [
  null,
  ""
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
 "Set Host name": [
  null,
  "Estableix el nom d'amfitrió"
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
 "Since $0": [
  null,
  "Des de $0"
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
  "Instant concret"
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
 "Stick PC": [
  null,
  ""
 ],
 "Stop": [
  null,
  "Atura"
 ],
 "Store Performance Data": [
  null,
  "Desa les dades de rendiment"
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
 "Tablet": [
  null,
  ""
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
  "A l'usuari <b>$0</b> no se li permet crear temporitzadors"
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  "A l'usuari <b>$0</b> no se li permet modificar els noms d'amfitrions"
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  "A l'usuari <b>$0</b> no se li permet apagar o reiniciar aquest servidor."
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  "Aquest dia no existeix en tots els mesos.<br> El temporitzador només s'executarà en aquells mesos que en tinguin 31."
 ],
 "This field cannot be empty.": [
  null,
  "Aquest camp no pot estar en blanc."
 ],
 "This unit is an instance of the $0 template.": [
  null,
  "Aquesta unitat és una instància de la plantilla $0."
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
 "Tower": [
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
 "Unknown": [
  null,
  "Desconegut"
 ],
 "Unmask": [
  null,
  "Desemmascara"
 ],
 "Usage of $0 CPU core": [
  "Usage of $0 CPU cores",
  "",
  ""
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
 ],
 "failed to list ssh host keys: $0": [
  null,
  "no s'han pogut llistar les claus d'amfitrions ssh: $0"
 ],
 "of $0 CPU core": [
  "of $0 CPU cores",
  "",
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
