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
  "language": "fi",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 on saatavilla useimmille käyttöjärjestelmille. Asentaaksesi sen, hae sitä GNOME Softwaresta, tai aja seuraava komento:"
 ],
 "Action": [
  null,
  "Toiminto"
 ],
 "Additional": [
  null,
  ""
 ],
 "Address": [
  null,
  "Osoite"
 ],
 "Address:": [
  null,
  "Osoite:"
 ],
 "All running virtual machines will be turned off.": [
  null,
  "Kaikki käynnissä olevat virtuaalikoneet tullaan sammuttamaan."
 ],
 "Automatically selected host": [
  null,
  "Automaattisesti valittu kone"
 ],
 "Autostart:": [
  null,
  "Autostart:"
 ],
 "Available": [
  null,
  "Saatavilla"
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
  ""
 ],
 "Bus": [
  null,
  ""
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  ""
 ],
 "CPU Type:": [
  null,
  ""
 ],
 "CREATE VM action failed": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Peru"
 ],
 "Capacity": [
  null,
  "Koko"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "Painamalla \"Launch Remote Viewer\" lataat .vv-tiedoston ja avaat $0."
 ],
 "Cluster": [
  null,
  "Klusteri"
 ],
 "Cluster Templates": [
  null,
  "Klusteri-mallit"
 ],
 "Cluster Virtual Machines": [
  null,
  "Klusterin Virtuaalikoneet"
 ],
 "Confirm deletion of $0": [
  null,
  "Vahvista $0 poistaminen"
 ],
 "Confirm migration": [
  null,
  "Vahvista migraatio"
 ],
 "Confirm reload:": [
  null,
  "Vahvista uudelleenlataus:"
 ],
 "Confirm save:": [
  null,
  "Vahvista tallennus:"
 ],
 "Connect to oVirt Engine": [
  null,
  "Yhdistä oVirt Engine"
 ],
 "Connect with any $0 viewer application.": [
  null,
  "Yhdistä mihin tahansa $0 -katseluohjelmaan."
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "Yhdistä mihin tahansa SPICE tai VNC -katseluohjelmaan."
 ],
 "Connection": [
  null,
  "Yhteys"
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
  ""
 ],
 "Create": [
  null,
  "Luo"
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
  "Poista"
 ],
 "Delete associated storage files:": [
  null,
  ""
 ],
 "Description": [
  null,
  "Kuvaus"
 ],
 "Description:": [
  null,
  "Kuvaus:"
 ],
 "Device": [
  null,
  "Laite"
 ],
 "Disconnect": [
  null,
  "Katkaise yhteys"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  ""
 ],
 "Disks": [
  null,
  "Levyt"
 ],
 "Download the MSI from $0": [
  null,
  "Lataa MSI kohteesta $0"
 ],
 "Edit the vdsm.conf": [
  null,
  "Muokkaa vdsm.conf-tiedostoa"
 ],
 "Emulated Machine:": [
  null,
  "Emuloitu Kone:"
 ],
 "Enter New VM name": [
  null,
  "Anna Uusi VM nimi"
 ],
 "FQDN": [
  null,
  "FQDN"
 ],
 "File": [
  null,
  "Tiedosto"
 ],
 "Filesystem": [
  null,
  "Tiedostojärjestelmä"
 ],
 "Force Restart": [
  null,
  "Pakota Uudelleenkäynnistys"
 ],
 "Force Shut Down": [
  null,
  "Pakota Sammutus"
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
  "HA"
 ],
 "HA:": [
  null,
  "HA:"
 ],
 "Host": [
  null,
  "Kone"
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
  "Asenna"
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
  "Ladataan ..."
 ],
 "Loading data ...": [
  null,
  "Ladataan tietoja..."
 ],
 "MAC Address": [
  null,
  "MAC-osoite"
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
  "Manuaalinen Yhteys"
 ],
 "Memory": [
  null,
  "Muisti"
 ],
 "Memory should be positive number": [
  null,
  ""
 ],
 "Memory:": [
  null,
  "Muisti:"
 ],
 "MiB": [
  null,
  ""
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
  "Nimi"
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
  "Verkot"
 ],
 "No VM found in oVirt.": [
  null,
  ""
 ],
 "No VM is running or defined on this host": [
  null,
  ""
 ],
 "No boot device found": [
  null,
  "Käynnistyslaitetta ei löytynyt"
 ],
 "No console defined for this virtual machine.": [
  null,
  ""
 ],
 "No disks defined for this VM": [
  null,
  ""
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
  "OK"
 ],
 "OS": [
  null,
  "Käyttöjärjestelmä"
 ],
 "OS Type:": [
  null,
  "Käyttöjärjestelmän tyyppi:"
 ],
 "OS Vendor": [
  null,
  ""
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Operating System": [
  null,
  ""
 ],
 "Optimized for:": [
  null,
  ""
 ],
 "Overview": [
  null,
  ""
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
  ""
 ],
 "Port": [
  null,
  "Portti"
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
  ""
 ],
 "REBOOT action failed": [
  null,
  ""
 ],
 "Readonly": [
  null,
  ""
 ],
 "Reconnect": [
  null,
  ""
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
  ""
 ],
 "Remote URL": [
  null,
  ""
 ],
 "Restart": [
  null,
  "Käynnistä uudelleen"
 ],
 "Run": [
  null,
  ""
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
  "SPICE"
 ],
 "SPICE Address:": [
  null,
  "SPICE-osoite:"
 ],
 "SPICE Port:": [
  null,
  "SPICE-portti:"
 ],
 "SPICE TLS Port:": [
  null,
  "SPICE-TLS-portti:"
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
  "Tallenna"
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
  "Istunto"
 ],
 "Shut Down": [
  null,
  "Sammuta"
 ],
 "Source": [
  null,
  "Lähde"
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
  "Tila"
 ],
 "Stateless": [
  null,
  "Tilaton"
 ],
 "Stateless:": [
  null,
  "Tilaton:"
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
  "Järjestelmä"
 ],
 "Target": [
  null,
  ""
 ],
 "Template": [
  null,
  ""
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
  ""
 ],
 "The VM is down.": [
  null,
  ""
 ],
 "The VM is going down.": [
  null,
  ""
 ],
 "The VM is idle.": [
  null,
  ""
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  ""
 ],
 "The VM is paused.": [
  null,
  ""
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  ""
 ],
 "The VM is running.": [
  null,
  ""
 ],
 "The VM is suspended by guest power management.": [
  null,
  ""
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  ""
 ],
 "Too many files found": [
  null,
  "Löytyi liian monta tiedostoa"
 ],
 "Type": [
  null,
  "Tyyppi"
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
  ""
 ],
 "Usage": [
  null,
  "Käyttö"
 ],
 "Used": [
  null,
  "Käytetty"
 ],
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "VDSM-palveluhallinta"
 ],
 "VM FORCE OFF action failed": [
  null,
  ""
 ],
 "VM FORCE REBOOT action failed": [
  null,
  ""
 ],
 "VM REBOOT action failed": [
  null,
  ""
 ],
 "VM SEND Non-Maskable Interrrupt action failed": [
  null,
  ""
 ],
 "VM SHUT DOWN action failed": [
  null,
  ""
 ],
 "VM START action failed": [
  null,
  ""
 ],
 "VM icon": [
  null,
  ""
 ],
 "VNC": [
  null,
  "VNC"
 ],
 "VNC Address:": [
  null,
  "VNC-osoite:"
 ],
 "VNC Port:": [
  null,
  "VNC-portti:"
 ],
 "VNC TLS Port:": [
  null,
  "VNC-TLS-portti:"
 ],
 "Version": [
  null,
  "Versio"
 ],
 "Version num": [
  null,
  ""
 ],
 "Virtual Machines": [
  null,
  "Virtuaalikoneet"
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
  "Taltio"
 ],
 "Your browser does not support iframes.": [
  null,
  "Selaimesi ei tue iframeja."
 ],
 "bridge": [
  null,
  ""
 ],
 "cdrom": [
  null,
  ""
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
  "kaatui"
 ],
 "custom": [
  null,
  ""
 ],
 "direct": [
  null,
  ""
 ],
 "disabled": [
  null,
  "pois käytöstä"
 ],
 "disk": [
  null,
  ""
 ],
 "down": [
  null,
  ""
 ],
 "dying": [
  null,
  "kuolemassa"
 ],
 "enabled": [
  null,
  "käytössä"
 ],
 "error": [
  null,
  "virhe"
 ],
 "ethernet": [
  null,
  "ethernet"
 ],
 "host": [
  null,
  ""
 ],
 "hostdev": [
  null,
  ""
 ],
 "idle": [
  null,
  "jouten"
 ],
 "initializing": [
  null,
  ""
 ],
 "installation failed": [
  null,
  "asennus epäonnistui"
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
  "verkko"
 ],
 "no": [
  null,
  "ei"
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
  "oVirt"
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
  "muu"
 ],
 "paused": [
  null,
  "pysäytetty"
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
  "suoritetaan"
 ],
 "server": [
  null,
  "palvelin"
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
  "sammutettu"
 ],
 "shutdown": [
  null,
  "sammuta"
 ],
 "sockets": [
  null,
  ""
 ],
 "suspended (PM)": [
  null,
  "pysäytetty (PM)"
 ],
 "threads": [
  null,
  "säikeet"
 ],
 "udp": [
  null,
  "udp"
 ],
 "unassigned": [
  null,
  ""
 ],
 "undefined": [
  null,
  "määrittämätön"
 ],
 "up": [
  null,
  ""
 ],
 "user": [
  null,
  "käyttäjä"
 ],
 "vCPUs": [
  null,
  ""
 ],
 "vCPUs:": [
  null,
  "vCPUt:"
 ],
 "vhostuser": [
  null,
  ""
 ],
 "yes": [
  null,
  "kyllä"
 ]
}));
