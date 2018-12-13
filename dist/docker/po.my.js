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
nplurals=1; plural=0;
return plural;
},
  "language": "my",
  "x-generator": "Zanata 4.6.2"
 },
 " (shared with the OS)": [
  null,
  ""
 ],
 "$0 day": [
  "$0 days",
  ""
 ],
 "$0 hour": [
  "$0 hours",
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  ""
 ],
 "$0 month": [
  "$0 months",
  ""
 ],
 "$0 shares": [
  null,
  ""
 ],
 "$0 week": [
  "$0 weeks",
  ""
 ],
 "$0 year": [
  "$0 years",
  ""
 ],
 "${hip}:${hport} -> $cport": [
  null,
  "${hip}:${hport} -> $cport"
 ],
 "Add Additional Storage": [
  null,
  ""
 ],
 "Add Storage": [
  null,
  ""
 ],
 "Additional Storage": [
  null,
  ""
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  ""
 ],
 "Always": [
  null,
  ""
 ],
 "Author": [
  null,
  "ေရးသူ"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU priority": [
  null,
  "CPU ဦးစားပေး"
 ],
 "CPU usage:": [
  null,
  ""
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  ""
 ],
 "Cancel": [
  null,
  ""
 ],
 "Change": [
  null,
  ""
 ],
 "Change resource limits": [
  null,
  ""
 ],
 "Change resources limits": [
  null,
  ""
 ],
 "Close": [
  null,
  "ပိတ္ပါ။"
 ],
 "Combined memory usage": [
  null,
  ""
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  ""
 ],
 "Command": [
  null,
  ""
 ],
 "Command can't be empty": [
  null,
  ""
 ],
 "Command:": [
  null,
  ""
 ],
 "Commit": [
  null,
  ""
 ],
 "Commit Image": [
  null,
  ""
 ],
 "Configure storage...": [
  null,
  ""
 ],
 "Connecting to Docker": [
  null,
  "Docker ကို ချိတ်ဆက်နေပါသည်။"
 ],
 "Container": [
  null,
  ""
 ],
 "Container Name": [
  null,
  ""
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  ""
 ],
 "Container is currently running.": [
  null,
  ""
 ],
 "Container:": [
  null,
  ""
 ],
 "Containers": [
  null,
  ""
 ],
 "Could not add all disks": [
  null,
  ""
 ],
 "Could not reset the storage pool": [
  null,
  ""
 ],
 "Created": [
  null,
  ""
 ],
 "Created:": [
  null,
  ""
 ],
 "Default": [
  null,
  ""
 ],
 "Delete": [
  null,
  "ဖျက်ဆီးပါ။"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "Container ကို ဖျက်ဆီးခြင်းသည် ၄င်းထဲတွင်ရှိသော အချက်အလက်များအားလုံးကိုပါ ဖျက်ဆီးပစ်လိမ့်မည်။"
 ],
 "Details": [
  null,
  ""
 ],
 "Docker is not installed or activated on the system": [
  null,
  ""
 ],
 "Download": [
  null,
  ""
 ],
 "Drive": [
  null,
  ""
 ],
 "Duplicate alias": [
  null,
  ""
 ],
 "Duplicate port": [
  null,
  "Port ထပ်နေသည်။"
 ],
 "Entrypoint": [
  null,
  ""
 ],
 "Environment": [
  null,
  ""
 ],
 "Erase containers and reset storage pool": [
  null,
  ""
 ],
 "Error message from Docker:": [
  null,
  ""
 ],
 "Everything": [
  null,
  ""
 ],
 "Exited $ExitCode": [
  null,
  "ထွက်သွားခဲ့သည်။"
 ],
 "Expose container ports": [
  null,
  ""
 ],
 "Failed to start Docker: $0": [
  null,
  "Docker ကိုစတင်နိုင်ခြင်း မရှိပါ။ $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  ""
 ],
 "Force Delete": [
  null,
  ""
 ],
 "Free": [
  null,
  ""
 ],
 "Gateway:": [
  null,
  ""
 ],
 "Get new image": [
  null,
  ""
 ],
 "Hard Disk": [
  null,
  ""
 ],
 "IP Address:": [
  null,
  ""
 ],
 "IP Prefix Length:": [
  null,
  ""
 ],
 "Id": [
  null,
  ""
 ],
 "Id:": [
  null,
  ""
 ],
 "Image": [
  null,
  ""
 ],
 "Image $0": [
  null,
  "Image $0"
 ],
 "Image Search": [
  null,
  ""
 ],
 "Image:": [
  null,
  ""
 ],
 "Images": [
  null,
  ""
 ],
 "Images and running containers": [
  null,
  ""
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  ""
 ],
 "Invalid port": [
  null,
  ""
 ],
 "Link to another container": [
  null,
  ""
 ],
 "Links": [
  null,
  "Links"
 ],
 "Links:": [
  null,
  ""
 ],
 "Local Disks": [
  null,
  ""
 ],
 "MAC Address:": [
  null,
  ""
 ],
 "Memory": [
  null,
  "Memory"
 ],
 "Memory limit": [
  null,
  ""
 ],
 "Memory usage:": [
  null,
  ""
 ],
 "MiB": [
  null,
  ""
 ],
 "Mount container volumes": [
  null,
  ""
 ],
 "Name": [
  null,
  "အမည်"
 ],
 "No": [
  null,
  ""
 ],
 "No additional local storage found.": [
  null,
  ""
 ],
 "No alias specified": [
  null,
  ""
 ],
 "No container specified": [
  null,
  ""
 ],
 "No containers": [
  null,
  ""
 ],
 "No containers that match the current filter": [
  null,
  ""
 ],
 "No images": [
  null,
  ""
 ],
 "No images that match the current filter": [
  null,
  ""
 ],
 "No results for $0": [
  null,
  ""
 ],
 "No running containers": [
  null,
  ""
 ],
 "No running containers that match the current filter": [
  null,
  ""
 ],
 "Not authorized to access Docker on this system": [
  null,
  ""
 ],
 "Not found": [
  null,
  "မတွေ့ပါ။"
 ],
 "Off": [
  null,
  "ဖွင့်"
 ],
 "Ok": [
  null,
  ""
 ],
 "On": [
  null,
  "ပိတ်"
 ],
 "On Failure": [
  null,
  ""
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  ""
 ],
 "Overview": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  "$0 အား ဖျက်ဆီးခြင်းကို အတည်ပြုပါ။"
 ],
 "Please confirm forced deletion of $0": [
  null,
  ""
 ],
 "Please try another term": [
  null,
  ""
 ],
 "Ports": [
  null,
  "Ports"
 ],
 "Ports:": [
  null,
  ""
 ],
 "Problems": [
  null,
  ""
 ],
 "ReadOnly": [
  null,
  ""
 ],
 "ReadWrite": [
  null,
  ""
 ],
 "Reboot": [
  null,
  ""
 ],
 "Reformat and add disks": [
  null,
  ""
 ],
 "Repository": [
  null,
  ""
 ],
 "Reset": [
  null,
  ""
 ],
 "Reset Storage Pool": [
  null,
  ""
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  ""
 ],
 "Restart": [
  null,
  ""
 ],
 "Restart Policy": [
  null,
  ""
 ],
 "Restart Policy:": [
  null,
  ""
 ],
 "Retries:": [
  null,
  ""
 ],
 "Run": [
  null,
  ""
 ],
 "Run Image": [
  null,
  ""
 ],
 "Security": [
  null,
  ""
 ],
 "Set container environment variables": [
  null,
  ""
 ],
 "Show all containers": [
  null,
  ""
 ],
 "Show all images": [
  null,
  ""
 ],
 "Size": [
  null,
  ""
 ],
 "Solid-State Disk": [
  null,
  ""
 ],
 "Start": [
  null,
  ""
 ],
 "Start Docker": [
  null,
  "Docker ကို စတင်ပါ။"
 ],
 "State": [
  null,
  ""
 ],
 "State:": [
  null,
  ""
 ],
 "Stop": [
  null,
  ""
 ],
 "Stop and delete": [
  null,
  ""
 ],
 "Stopped": [
  null,
  "ရပ်နေသည်။"
 ],
 "Storage": [
  null,
  ""
 ],
 "Storage pool": [
  null,
  ""
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Tag": [
  null,
  ""
 ],
 "Tags": [
  null,
  ""
 ],
 "The Docker storage pool cannot be managed on this system.": [
  null,
  ""
 ],
 "The following containers depend on this image and will become unusable.": [
  null,
  ""
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  ""
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  ""
 ],
 "This image does not exist.": [
  null,
  ""
 ],
 "Total": [
  null,
  ""
 ],
 "Try again": [
  null,
  "ထပ်ကြိုးစားပါ။"
 ],
 "Type to filter…": [
  null,
  ""
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  ""
 ],
 "Unless Stopped": [
  null,
  ""
 ],
 "Up since $0": [
  null,
  ""
 ],
 "Used": [
  null,
  ""
 ],
 "Used by Containers": [
  null,
  ""
 ],
 "Volumes": [
  null,
  ""
 ],
 "Volumes:": [
  null,
  ""
 ],
 "With terminal": [
  null,
  "Terminal ဖြင့်"
 ],
 "You don't have permission to manage the Docker storage pool.": [
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
 "alias": [
  null,
  ""
 ],
 "default": [
  null,
  ""
 ],
 "key": [
  null,
  ""
 ],
 "none": [
  null,
  ""
 ],
 "search by name, namespace or description": [
  null,
  ""
 ],
 "select container": [
  null,
  ""
 ],
 "shares": [
  null,
  ""
 ],
 "to host path": [
  null,
  ""
 ],
 "to host port": [
  null,
  ""
 ],
 "undefined": [
  null,
  ""
 ],
 "value": [
  null,
  ""
 ],
 "page-title\u0004Containers": [
  null,
  ""
 ],
 "page-title\u0004Images": [
  null,
  ""
 ]
}));
