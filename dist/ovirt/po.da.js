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
  "language": "da",
  "x-generator": "Zanata 3.8.4"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  ""
 ],
 "$0 vCPU Details": [
  null,
  ""
 ],
 "Action": [
  null,
  "Indstillinger"
 ],
 "Add": [
  null,
  ""
 ],
 "Add Disk": [
  null,
  "Disk I/O"
 ],
 "Address": [
  null,
  ""
 ],
 "Address:": [
  null,
  ""
 ],
 "All running virtual machines will be turned off.": [
  null,
  ""
 ],
 "Apply": [
  null,
  ""
 ],
 "Attach permanently": [
  null,
  ""
 ],
 "Automatically selected host": [
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
 "CPU Type:": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Annullér"
 ],
 "Capacity": [
  null,
  ""
 ],
 "Changes will take effect after shutting down the VM": [
  null,
  ""
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  ""
 ],
 "Cluster": [
  null,
  ""
 ],
 "Cluster Templates": [
  null,
  ""
 ],
 "Cluster Virtual Machines": [
  null,
  ""
 ],
 "Confirm migration": [
  null,
  ""
 ],
 "Confirm reload:": [
  null,
  ""
 ],
 "Confirm save:": [
  null,
  ""
 ],
 "Connect to oVirt Engine": [
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
 "Connecting": [
  null,
  ""
 ],
 "Connection": [
  null,
  ""
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
 "Create": [
  null,
  ""
 ],
 "Create New": [
  null,
  ""
 ],
 "Create New VM": [
  null,
  ""
 ],
 "Create VM": [
  null,
  ""
 ],
 "Ctrl+Alt+Del": [
  null,
  ""
 ],
 "Delete": [
  null,
  ""
 ],
 "Delete associated storage files:": [
  null,
  ""
 ],
 "Description": [
  null,
  ""
 ],
 "Description:": [
  null,
  ""
 ],
 "Device": [
  null,
  "Værtsnavn"
 ],
 "Disconnect": [
  null,
  ""
 ],
 "Disconnected": [
  null,
  ""
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  ""
 ],
 "Disk failed to be attached": [
  null,
  ""
 ],
 "Disk failed to be created": [
  null,
  ""
 ],
 "Disks": [
  null,
  "Disk I/O"
 ],
 "Download the MSI from $0": [
  null,
  ""
 ],
 "Edit": [
  null,
  ""
 ],
 "Edit the vdsm.conf": [
  null,
  ""
 ],
 "Emulated Machine:": [
  null,
  ""
 ],
 "Enter New VM name": [
  null,
  ""
 ],
 "FQDN": [
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
 "Force Restart": [
  null,
  ""
 ],
 "Force Shut Down": [
  null,
  ""
 ],
 "Format": [
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
 "HA": [
  null,
  ""
 ],
 "HA:": [
  null,
  ""
 ],
 "Host": [
  null,
  ""
 ],
 "Host to Maintenance": [
  null,
  ""
 ],
 "Install": [
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
 "Loading data ...": [
  null,
  ""
 ],
 "MAC Address": [
  null,
  ""
 ],
 "Mac Address": [
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
  ""
 ],
 "Memory:": [
  null,
  "Hukommelse"
 ],
 "MiB": [
  null,
  ""
 ],
 "Migrate To:": [
  null,
  ""
 ],
 "Model": [
  null,
  ""
 ],
 "Model type": [
  null,
  ""
 ],
 "More Information": [
  null,
  "Indstillinger"
 ],
 "Name": [
  null,
  "Værtsnavn"
 ],
 "Network Type": [
  null,
  "Netværks Traffik"
 ],
 "Network settings could not be saved": [
  null,
  ""
 ],
 "Networks": [
  null,
  "Netværks Traffik"
 ],
 "New Volume Name": [
  null,
  "Værtsnavn"
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
 "No network interfaces defined for this VM": [
  null,
  ""
 ],
 "No oVirt connection": [
  null,
  ""
 ],
 "No virtual networks": [
  null,
  ""
 ],
 "Number of virtual CPUs that gonna be used.": [
  null,
  ""
 ],
 "OK": [
  null,
  ""
 ],
 "OS": [
  null,
  ""
 ],
 "OS Type:": [
  null,
  ""
 ],
 "Ok": [
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
  "Værtsnavn"
 ],
 "Port": [
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
 "Restart": [
  null,
  ""
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
 "Save": [
  null,
  ""
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
 "Shut Down": [
  null,
  ""
 ],
 "Size": [
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
 "Start the VM to see disk statistics.": [
  null,
  ""
 ],
 "State": [
  null,
  ""
 ],
 "Stateless": [
  null,
  "Tilstand"
 ],
 "Stateless:": [
  null,
  "Tilstand"
 ],
 "Suspend": [
  null,
  ""
 ],
 "Switch Host to Maintenance": [
  null,
  ""
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
  ""
 ],
 "Threads per core": [
  null,
  ""
 ],
 "Type": [
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
 "Use Existing": [
  null,
  ""
 ],
 "Used": [
  null,
  ""
 ],
 "VCPU settings could not be saved": [
  null,
  ""
 ],
 "VDSM": [
  null,
  ""
 ],
 "VDSM Service Management": [
  null,
  "Værtsnavn"
 ],
 "VM icon": [
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
 "Version": [
  null,
  ""
 ],
 "Version num": [
  null,
  ""
 ],
 "Virtual Machines": [
  null,
  ""
 ],
 "Virtual Machines of $0 cluster": [
  null,
  ""
 ],
 "Volume": [
  null,
  ""
 ],
 "cores": [
  null,
  ""
 ],
 "disabled": [
  null,
  ""
 ],
 "enabled": [
  null,
  ""
 ],
 "no": [
  null,
  ""
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
 "qcow2": [
  null,
  ""
 ],
 "raw": [
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
 "sockets": [
  null,
  ""
 ],
 "threads": [
  null,
  ""
 ],
 "undefined": [
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
 "vCPUs": [
  null,
  ""
 ],
 "vCPUs:": [
  null,
  ""
 ],
 "yes": [
  null,
  ""
 ]
}));
