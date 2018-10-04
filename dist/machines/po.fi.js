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
 "Add": [
  null,
  "Lisää"
 ],
 "Add Disk": [
  null,
  ""
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
 "All changes will take effect only after stopping and starting the VM.": [
  null,
  ""
 ],
 "Apply": [
  null,
  "Toteuta"
 ],
 "Attach permanently": [
  null,
  ""
 ],
 "Automatically start libvirt on boot": [
  null,
  "Käynnistä libvirt automaattisesti käynnistyksen yhteydessä"
 ],
 "Autostart:": [
  null,
  "Autostart:"
 ],
 "Available": [
  null,
  "Saatavilla"
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
 "CREATE_AND_ATTACH_VOLUME action failed": [
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
 "Confirm deletion of $0": [
  null,
  "Vahvista $0 poistaminen"
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
 "Connecting to Virtualization Service": [
  null,
  "Yhdistetään virtualisointipalveluun"
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
 "Create New Virtual Machine": [
  null,
  "Luo uusi virtuaalikone"
 ],
 "Creation of vm $0 failed": [
  null,
  "Virtuaalikoneen $0 luominen epäonnistui"
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
 "Emulated Machine:": [
  null,
  "Emuloitu kone:"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  ""
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
 "Host": [
  null,
  "Kone"
 ],
 "Host Interface": [
  null,
  ""
 ],
 "INSTALL VM action failed": [
  null,
  "INSTALL VM -toiminto epäonnistui"
 ],
 "Immediately Start VM": [
  null,
  "Käynnistä VM välittömästi"
 ],
 "Install": [
  null,
  "Asenna"
 ],
 "Installation Source": [
  null,
  "Asennuslähde"
 ],
 "Installation Source Type": [
  null,
  "Asennuslähteen tyyppi"
 ],
 "Installation Source should not be empty": [
  null,
  "Asennuslähteen ei tulisi olla tyhjä"
 ],
 "Invalid filename": [
  null,
  "Virheellinen tiedostonimi"
 ],
 "Launch Remote Viewer": [
  null,
  "Käynnistä etäkatselin"
 ],
 "Loading ...": [
  null,
  "Ladataan..."
 ],
 "MAC Address": [
  null,
  "MAC-osoite"
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "Managed": [
  null,
  "Hallittu"
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
 "Memory should be positive number": [
  null,
  "Muistin tulee olla positiivinen numero"
 ],
 "Memory:": [
  null,
  "Muisti:"
 ],
 "MiB": [
  null,
  "MiB"
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
 "Name should not be empty": [
  null,
  "Nimen ei tule olla tyhjä."
 ],
 "Name should not consist of empty characters only": [
  null,
  ""
 ],
 "Networks": [
  null,
  "Verkot"
 ],
 "New Volume Name": [
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
  "Tälle virtuaalikoneelle ei ole määritetty levyjä."
 ],
 "No matching files found": [
  null,
  "Vastaavia tiedostoja ei löytynyt."
 ],
 "No network interfaces defined for this VM": [
  null,
  "Tälle virtuaalikoneelle ei ole määritetty verkkoliitäntöjä"
 ],
 "OS Vendor": [
  null,
  "Käyttöjärjestelmän toimittaja"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Operating System": [
  null,
  "Käyttöjärjestelmä"
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
 "Please enter new volume name": [
  null,
  ""
 ],
 "Please enter new volume size": [
  null,
  ""
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "Käynnistä virtuaalikone päästäksesi sen konsoliin."
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
 "Preferred number of sockets to expose to the guest.": [
  null,
  ""
 ],
 "Protocol": [
  null,
  ""
 ],
 "Readonly": [
  null,
  ""
 ],
 "Reconnect": [
  null,
  "Yhdistä uudelleen"
 ],
 "Remote URL": [
  null,
  "Etä-URL"
 ],
 "Restart": [
  null,
  "Käynnistä uudelleen"
 ],
 "Run": [
  null,
  ""
 ],
 "SET VCPU SETTINGS action failed": [
  null,
  ""
 ],
 "SET_VCPU_SETTINGS action failed": [
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
 "Source should start with http, ftp or nfs protocol": [
  null,
  ""
 ],
 "Start libvirt": [
  null,
  "Käynnistä libvirt"
 ],
 "Start the VM to see disk statistics.": [
  null,
  ""
 ],
 "State": [
  null,
  "Tila"
 ],
 "Storage Size": [
  null,
  "Tallennustilan koko"
 ],
 "Storage Size should not be negative number": [
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
 "Threads per cores": [
  null,
  ""
 ],
 "Too many files found": [
  null,
  "Löytyi liian monta tiedostoa"
 ],
 "Troubleshoot": [
  null,
  "Vianetsintä"
 ],
 "Type": [
  null,
  "Tyyppi"
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unique name": [
  null,
  ""
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
 "VM ATTACH_DISK action failed": [
  null,
  ""
 ],
 "VM CHANGE_NETWORK_STATE action failed": [
  null,
  ""
 ],
 "VM CHANGE_NETWORK_STATE action failed: updated device XML couldn't not be generated": [
  null,
  ""
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  ""
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  ""
 ],
 "VM DELETE action failed": [
  null,
  ""
 ],
 "VM DETACH action failed": [
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
 "VM SENDNMI action failed": [
  null,
  ""
 ],
 "VM SHUT DOWN action failed": [
  null,
  "VM SHUT DOWN -toiminto epäonnistui"
 ],
 "VM START action failed": [
  null,
  "VM START -toiminto epäonnistui"
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
 "Virtual Machines": [
  null,
  "Virtuaalikoneet"
 ],
 "Virtualization Service (libvirt) is Not Active": [
  null,
  "Virtualisointipalvelu (libvirt) ei ole aktiivinen"
 ],
 "Virtualization Service is Available": [
  null,
  "Virtualisointipalvelu ei ole saatavilla"
 ],
 "Virtualport": [
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
 "other": [
  null,
  "muu"
 ],
 "paused": [
  null,
  "pysäytetty"
 ],
 "qcow2": [
  null,
  ""
 ],
 "raw": [
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
 "suspended (PM)": [
  null,
  "pysäytetty (PM)"
 ],
 "udp": [
  null,
  "udp"
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
