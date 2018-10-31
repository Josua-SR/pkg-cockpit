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
  "x-generator": "Zanata 4.6.2"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 on saatavilla useimmille käyttöjärjestelmille. Asentaaksesi sen, hae sitä GNOME Softwaresta, tai aja seuraava komento:"
 ],
 "$0 vCPU Details": [
  null,
  ""
 ],
 "Action": [
  null,
  "Toiminto"
 ],
 "Add": [
  null,
  "Lisää"
 ],
 "Add Disk": [
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
 "All changes will take effect only after stopping and starting the VM.": [
  null,
  ""
 ],
 "All running virtual machines will be turned off.": [
  null,
  "Kaikki käynnissä olevat virtuaalikoneet tullaan sammuttamaan."
 ],
 "Apply": [
  null,
  "Toteuta"
 ],
 "Attach permanently": [
  null,
  ""
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
  "Käynnistysjärjestys:"
 ],
 "Bus": [
  null,
  ""
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "CHANGE NETWORK STATE -toiminto epäonnistui"
 ],
 "CPU Type:": [
  null,
  "Prosessorin tyyppi:"
 ],
 "CREATE VM action failed": [
  null,
  "CREATE VM -toiminto epäonnistui"
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
  "Klusterin virtuaalikoneet"
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
  "Yhdistä oVirt Engineen"
 ],
 "Connect with any $0 viewer application.": [
  null,
  "Yhdistä mihin tahansa $0 -katseluohjelmaan."
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "Yhdistä mihin tahansa SPICE- tai VNC-katseluohjelmaan."
 ],
 "Connecting": [
  null,
  ""
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
  "Konsolit"
 ],
 "Cores per socket": [
  null,
  ""
 ],
 "Create": [
  null,
  "Luo"
 ],
 "Create New": [
  null,
  ""
 ],
 "Create New VM": [
  null,
  "Luo uusi VM"
 ],
 "Create VM": [
  null,
  "Luo VM"
 ],
 "Ctrl+Alt+Del": [
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
 "Disconnected": [
  null,
  "Katkaistu"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  ""
 ],
 "Disk failed to be attached with following error: ": [
  null,
  ""
 ],
 "Disk failed to be created with following error: ": [
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
  "Emuloitu kone:"
 ],
 "Enter New VM name": [
  null,
  "Anna Uusi VM nimi"
 ],
 "FQDN": [
  null,
  "FQDN"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  ""
 ],
 "File": [
  null,
  "Tiedosto"
 ],
 "Force Restart": [
  null,
  "Pakota uudelleenkäynnistys"
 ],
 "Force Shut Down": [
  null,
  "Pakota sammutus"
 ],
 "Format": [
  null,
  "Alusta"
 ],
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  ""
 ],
 "GiB": [
  null,
  "GiB"
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
  "INSTALL VM -toiminto epäonnistui"
 ],
 "Install": [
  null,
  "Asenna"
 ],
 "Launch Remote Viewer": [
  null,
  "Käynnistä etäkatselin"
 ],
 "Loading ...": [
  null,
  "Ladataan..."
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
  "MIGRATE-toiminto epäonnistui"
 ],
 "Manual Connection": [
  null,
  "Manuaalinen yhteys"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  ""
 ],
 "Memory": [
  null,
  "Muisti"
 ],
 "Memory:": [
  null,
  "Muisti:"
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
  "Mallityyppi"
 ],
 "More Information": [
  null,
  "Lisää tietoja"
 ],
 "Name": [
  null,
  "Nimi"
 ],
 "Networks": [
  null,
  "Verkot"
 ],
 "New Volume Name": [
  null,
  ""
 ],
 "No VM found in oVirt.": [
  null,
  "oVirtistä ei löytynyt virtuaalikonetta."
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
  "Tälle virtuaalikoneelle ei ole määritetty levyjä."
 ],
 "No network interfaces defined for this VM": [
  null,
  "Tälle virtuaalikoneelle ei ole määritetty verkkoliitäntöjä"
 ],
 "No oVirt connection": [
  null,
  "Ei oVirt-yhteyttä"
 ],
 "Number of virtual CPUs that gonna be used.": [
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
 "Ok": [
  null,
  "OK"
 ],
 "Optimized for:": [
  null,
  ""
 ],
 "Overview": [
  null,
  ""
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  ""
 ],
 "Please enter new volume name": [
  null,
  ""
 ],
 "Please enter new volume size": [
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
  "Käynnistä virtuaalikone päästäksesi sen konsoliin."
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  "Odota että virtuaalikoneiden lista ladataan palvelimelta."
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
 "Preferred number of sockets to expose to the guest.": [
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
  "REBOOT-toiminto epäonnistui"
 ],
 "Readonly": [
  null,
  ""
 ],
 "Reconnect": [
  null,
  "Yhdistä uudelleen"
 ],
 "Register oVirt": [
  null,
  "Rekisteröi oVirt"
 ],
 "Registering oVirt to Cockpit": [
  null,
  "Rekisteröidän oVirt Cockpitiin"
 ],
 "Reload": [
  null,
  "Lataa uudelleen"
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
 "SET VCPU SETTINGS action failed": [
  null,
  ""
 ],
 "SHUTDOWN action failed": [
  null,
  "SHUTDOWN-toiminto epäonnistui"
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
  "START-toiminto epäonnistui"
 ],
 "SUSPEND action failed": [
  null,
  "SUSPEND-toiminto epäonnistui"
 ],
 "Save": [
  null,
  "Tallenna"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  ""
 ],
 "Send key": [
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
 "Size": [
  null,
  "Koko"
 ],
 "Sockets": [
  null,
  ""
 ],
 "Source": [
  null,
  "Lähde"
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
  "Virtuaalikone kaatui."
 ],
 "The VM is down.": [
  null,
  "Virtuaalikone on alhaalla."
 ],
 "The VM is going down.": [
  null,
  "Virtuaalikone on menossa alas."
 ],
 "The VM is idle.": [
  null,
  "Virtuaalikone on jouten."
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  ""
 ],
 "The VM is paused.": [
  null,
  "Virtuaalikone on keskeytetty."
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  ""
 ],
 "The VM is running.": [
  null,
  "Virtuaalikone on käynnissä."
 ],
 "The VM is suspended by guest power management.": [
  null,
  ""
 ],
 "The pool is empty": [
  null,
  ""
 ],
 "This host is managed by a virtualization manager, so creation of new VMs from the host is not possible.": [
  null,
  ""
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  "Tämä virtuaalikone ei ole oVirtin hallinnassa"
 ],
 "Threads per core": [
  null,
  ""
 ],
 "Type": [
  null,
  "Tyyppi"
 ],
 "Unplug": [
  null,
  ""
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  "Päivitä libvirt uudempaan versioon nähdäksesi levytilastot"
 ],
 "Usage": [
  null,
  "Käyttö"
 ],
 "Use Existing": [
  null,
  ""
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
 "VM DELETE (DESTROY) action failed": [
  null,
  ""
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  ""
 ],
 "VM FORCE OFF action failed": [
  null,
  "VM FORCE OFF -toiminto epäonnistui"
 ],
 "VM FORCE REBOOT action failed": [
  null,
  "VM FORCE REBOOT -toiminto epäonnistui"
 ],
 "VM REBOOT action failed": [
  null,
  "VM REBOOT -toiminto epäonnistui"
 ],
 "VM SEND Non-Maskable Interrrupt action failed": [
  null,
  "VM SEND Non-Maskable Interrrupt -toiminto epäonnistui"
 ],
 "VM SHUT DOWN action failed": [
  null,
  "VM SHUT DOWN -toiminto epäonnistui"
 ],
 "VM START action failed": [
  null,
  "VM START -toiminto epäonnistui"
 ],
 "VM icon": [
  null,
  "VM-kuvake"
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
 "Volume": [
  null,
  "Taltio"
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
  "yhdistetään"
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
  "asennetaan käyttöjärjestelmä"
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
  "odottaa hyväksyntää"
 ],
 "qcow2": [
  null,
  ""
 ],
 "raw": [
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
  "näytä vähemmän"
 ],
 "show more": [
  null,
  "näytä enemmän"
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
 "vCPU Count": [
  null,
  ""
 ],
 "vCPU Maximum": [
  null,
  ""
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
