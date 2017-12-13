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
  ""
 ],
 "Confirm deletion of $0": [
  null,
  ""
 ],
 "Connect with Remote Viewer": [
  null,
  ""
 ],
 "Connect with any $0 viewer application.": [
  null,
  ""
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  ""
 ],
 "Connection": [
  null,
  "Yhteys"
 ],
 "Console": [
  null,
  "Konsoli"
 ],
 "Count:": [
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
 "Disks": [
  null,
  "Levyt"
 ],
 "Download the MSI from $0": [
  null,
  ""
 ],
 "Emulated Machine:": [
  null,
  ""
 ],
 "File": [
  null,
  "Tiedosto"
 ],
 "Force Restart": [
  null,
  "Pakota Uudelleenkäynnistys"
 ],
 "Force Shut Down": [
  null,
  "Pakota Sammutus"
 ],
 "GB": [
  null,
  "Gt"
 ],
 "Host": [
  null,
  "Kone"
 ],
 "Launch Remote Viewer": [
  null,
  ""
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
  ""
 ],
 "Manual Connection": [
  null,
  ""
 ],
 "Memory:": [
  null,
  "Muisti:"
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
 "Networks": [
  null,
  "Verkot"
 ],
 "No VM is running or defined on this host": [
  null,
  ""
 ],
 "No boot device found": [
  null,
  "Käynnistyslaitetta ei löytynyt"
 ],
 "No disks defined for this VM": [
  null,
  ""
 ],
 "No graphics console is defined for this virtual machine.": [
  null,
  ""
 ],
 "No network interfaces defined for this VM": [
  null,
  ""
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Overview": [
  null,
  ""
 ],
 "Please start the virtual machine to access its graphics console.": [
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
 "Protocol": [
  null,
  ""
 ],
 "Readonly": [
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
 "State": [
  null,
  "Tila"
 ],
 "Switch to Desktop Viewer": [
  null,
  ""
 ],
 "Switch to In-Browser Viewer": [
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
 "running": [
  null,
  "suoritetaan"
 ],
 "server": [
  null,
  "palvelin"
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
 "up": [
  null,
  ""
 ],
 "user": [
  null,
  "käyttäjä"
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
