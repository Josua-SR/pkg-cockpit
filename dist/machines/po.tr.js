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
nplurals=2; plural=(n>1);
return plural;
},
  "language": "tr",
  "x-generator": "Zanata 4.4.5"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  ""
 ],
 "$0 vCPU Details": [
  null,
  ""
 ],
 "Additional": [
  null,
  ""
 ],
 "Address": [
  null,
  "Adres"
 ],
 "Address:": [
  null,
  ""
 ],
 "All changes will take effect only after stopping and starting the VM.": [
  null,
  ""
 ],
 "Apply": [
  null,
  "Uygula"
 ],
 "Automatically start libvirt on boot": [
  null,
  ""
 ],
 "Autostart:": [
  null,
  ""
 ],
 "Available": [
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
 "Cancel": [
  null,
  "İptal"
 ],
 "Capacity": [
  null,
  "Kapasite"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  ""
 ],
 "Confirm deletion of $0": [
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
 "Connecting to Virtualization Service": [
  null,
  ""
 ],
 "Connection": [
  null,
  "Docker'a bağlanılıyor"
 ],
 "Console Type": [
  null,
  ""
 ],
 "Consoles": [
  null,
  ""
 ],
 "Cores per socket": [
  null,
  ""
 ],
 "Count:": [
  null,
  ""
 ],
 "Create": [
  null,
  "Yarat"
 ],
 "Create New VM": [
  null,
  ""
 ],
 "Create New Virtual Machine": [
  null,
  ""
 ],
 "Creation of vm $0 failed": [
  null,
  ""
 ],
 "Delete": [
  null,
  "Sil"
 ],
 "Delete associated storage files:": [
  null,
  ""
 ],
 "Device": [
  null,
  ""
 ],
 "Disconnect": [
  null,
  ""
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  ""
 ],
 "Disks": [
  null,
  "Diskler"
 ],
 "Download the MSI from $0": [
  null,
  ""
 ],
 "Emulated Machine:": [
  null,
  ""
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  ""
 ],
 "File": [
  null,
  ""
 ],
 "Filesystem": [
  null,
  ""
 ],
 "Force Restart": [
  null,
  ""
 ],
 "Force Shut Down": [
  null,
  ""
 ],
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  ""
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
 "Host": [
  null,
  "Host"
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
  ""
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
  ""
 ],
 "MAC Address": [
  null,
  ""
 ],
 "MTU": [
  null,
  ""
 ],
 "Managed": [
  null,
  ""
 ],
 "Manual Connection": [
  null,
  ""
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  ""
 ],
 "Memory": [
  null,
  "Bellek"
 ],
 "Memory should be positive number": [
  null,
  ""
 ],
 "Memory:": [
  null,
  ""
 ],
 "MiB": [
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
  "İsim"
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
  ""
 ],
 "No VM is running or defined on this host": [
  null,
  ""
 ],
 "No boot device found": [
  null,
  ""
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
 "OS Vendor": [
  null,
  ""
 ],
 "Ok": [
  null,
  ""
 ],
 "Operating System": [
  null,
  ""
 ],
 "Overview": [
  null,
  "Servis"
 ],
 "Path to ISO file on host's file system": [
  null,
  ""
 ],
 "Path to file": [
  null,
  ""
 ],
 "Please start the virtual machine to access its console.": [
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
  ""
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
  ""
 ],
 "Remote URL": [
  null,
  ""
 ],
 "Restart": [
  null,
  "Yeniden başlat"
 ],
 "Run": [
  null,
  ""
 ],
 "SET VCPU SETTINGS action failed": [
  null,
  ""
 ],
 "SPICE": [
  null,
  ""
 ],
 "SPICE Address:": [
  null,
  ""
 ],
 "SPICE Port:": [
  null,
  ""
 ],
 "SPICE TLS Port:": [
  null,
  ""
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
  "Sürüm"
 ],
 "Shut Down": [
  null,
  ""
 ],
 "Sockets": [
  null,
  ""
 ],
 "Source": [
  null,
  ""
 ],
 "Source should start with http, ftp or nfs protocol": [
  null,
  ""
 ],
 "Start libvirt": [
  null,
  ""
 ],
 "Start the VM to see disk statistics.": [
  null,
  ""
 ],
 "State": [
  null,
  ""
 ],
 "Storage Size": [
  null,
  ""
 ],
 "Storage Size should not be negative number": [
  null,
  ""
 ],
 "System": [
  null,
  ""
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
 "Threads per cores": [
  null,
  ""
 ],
 "Too many files found": [
  null,
  ""
 ],
 "Troubleshoot": [
  null,
  ""
 ],
 "Type": [
  null,
  "Tip"
 ],
 "URL": [
  null,
  ""
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
  ""
 ],
 "Used": [
  null,
  "Kullanılmış"
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
  ""
 ],
 "VNC Address:": [
  null,
  ""
 ],
 "VNC Port:": [
  null,
  ""
 ],
 "VNC TLS Port:": [
  null,
  ""
 ],
 "Virtual Machines": [
  null,
  ""
 ],
 "Virtualization Service (libvirt) is Not Active": [
  null,
  ""
 ],
 "Virtualization Service is Available": [
  null,
  ""
 ],
 "Virtualport": [
  null,
  ""
 ],
 "Volume": [
  null,
  "Mantıksal Bölüm"
 ],
 "Your browser does not support iframes.": [
  null,
  ""
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
  ""
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
  "Etkin değil"
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
  ""
 ],
 "enabled": [
  null,
  "Etkin değil"
 ],
 "ethernet": [
  null,
  ""
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
  ""
 ],
 "mcast": [
  null,
  ""
 ],
 "network": [
  null,
  ""
 ],
 "no": [
  null,
  ""
 ],
 "other": [
  null,
  ""
 ],
 "paused": [
  null,
  ""
 ],
 "running": [
  null,
  "Çalışıyor"
 ],
 "server": [
  null,
  ""
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
  ""
 ],
 "shutdown": [
  null,
  ""
 ],
 "suspended (PM)": [
  null,
  ""
 ],
 "udp": [
  null,
  ""
 ],
 "undefined": [
  null,
  ""
 ],
 "up": [
  null,
  ""
 ],
 "user": [
  null,
  ""
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
  ""
 ],
 "vhostuser": [
  null,
  ""
 ],
 "yes": [
  null,
  ""
 ]
}));
