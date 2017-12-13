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
  "language": "pa",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Block Device": [
  null,
  "$0 ਬਲਾਕ ਜੰਤਰ"
 ],
 "$0 Chunk Size": [
  null,
  "$0 ਚੰਕ ਆਕਾਰ"
 ],
 "$0 Disks": [
  null,
  "$0 ਡਿਸਕਾਂ"
 ],
 "$0 day": [
  "$0 days",
  "$0 ਦਿਨ",
  "$0 ਦਿਨ"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 ਡਿਸਕ ਗੁੰਮ ਹੈ",
  "$0 ਡਿਸਕਾਂ ਗੁੰਮ ਹਨ"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 ਘੰਟਾ",
  "$0 ਘੰਟੇ"
 ],
 "$0 is in active use": [
  null,
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 ਮਿੰਟ",
  "$0 ਮਿੰਟ"
 ],
 "$0 month": [
  "$0 months",
  "$0 ਮਹੀਨਾ",
  "$0 ਮਹੀਨੇ"
 ],
 "$0 of $1": [
  null,
  "$1 'ਚੋਂ $0"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 ਹਫ਼ਤਾ",
  "$0 ਹਫ਼ਤੇ"
 ],
 "$0 year": [
  "$0 years",
  "$0 ਸਾਲ",
  "$0 ਸਾਲ"
 ],
 "$0, $1 free": [
  null,
  "$0, $1 ਖਾਲੀ"
 ],
 "$name (from $host)": [
  null,
  "$name ($host ਤੋਂ)"
 ],
 "${size} ${desc}": [
  null,
  ""
 ],
 "(default)": [
  null,
  "(ਡਿਲਾਲਟ)"
 ],
 "(none)": [
  null,
  "(ਕੋਈ ਨਹੀਂ)"
 ],
 "1 MiB": [
  null,
  "1 MiB"
 ],
 "1 day": [
  null,
  "1 ਦਿਨ"
 ],
 "1 hour": [
  null,
  "1 ਘੰਟਾ"
 ],
 "1 week": [
  null,
  "1 ਹਫ਼ਤਾ"
 ],
 "128 KiB": [
  null,
  "128 KiB"
 ],
 "16 KiB": [
  null,
  "16 KiB"
 ],
 "2 MiB": [
  null,
  "2 MiB"
 ],
 "32 KiB": [
  null,
  "32 KiB"
 ],
 "4 KiB": [
  null,
  "4 KiB"
 ],
 "5 minutes": [
  null,
  "5 ਮਿੰਟ"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6 ਘੰਟੇ"
 ],
 "64 KiB": [
  null,
  "64 KiB"
 ],
 "8 KiB": [
  null,
  "8 KiB"
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  ""
 ],
 "Activate": [
  null,
  "ਸਰਗਰਮ ਕਰੋ"
 ],
 "Activating $target": [
  null,
  "$target ਨੂੰ ਸਰਗਰਮ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ"
 ],
 "Add": [
  null,
  "ਜੋੜੋ"
 ],
 "Add Disks": [
  null,
  ""
 ],
 "Add iSCSI Portal": [
  null,
  ""
 ],
 "Adding physical volume to $target": [
  null,
  ""
 ],
 "Address": [
  null,
  ""
 ],
 "Apply": [
  null,
  ""
 ],
 "At least $0 disks are needed.": [
  null,
  ""
 ],
 "At least one disk is needed.": [
  null,
  ""
 ],
 "Authentication required": [
  null,
  ""
 ],
 "Available targets on $0": [
  null,
  ""
 ],
 "Block": [
  null,
  ""
 ],
 "Block device for filesystems": [
  null,
  ""
 ],
 "Blocked": [
  null,
  ""
 ],
 "Can't delete while unlocked": [
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
 "Change iSCSI Initiator Name": [
  null,
  ""
 ],
 "Checking RAID Device $target": [
  null,
  ""
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  ""
 ],
 "Chunk Size": [
  null,
  ""
 ],
 "Cleaning up for $target": [
  null,
  ""
 ],
 "Close": [
  null,
  ""
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  ""
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  ""
 ],
 "Confirm passphrase": [
  null,
  ""
 ],
 "Content": [
  null,
  ""
 ],
 "Create": [
  null,
  ""
 ],
 "Create Logical Volume": [
  null,
  ""
 ],
 "Create Partition": [
  null,
  ""
 ],
 "Create RAID Device": [
  null,
  "ਰੇਡ ਡਿਵਾਇਸ ਬਣਾਓ"
 ],
 "Create Snapshot": [
  null,
  ""
 ],
 "Create Thin Volume": [
  null,
  ""
 ],
 "Create Volume Group": [
  null,
  "ਵਾਲੀਅਮ ਗਰੁੱਪ ਬਣਾਓ"
 ],
 "Create new Logical Volume": [
  null,
  ""
 ],
 "Create partition": [
  null,
  ""
 ],
 "Create partition on $0": [
  null,
  ""
 ],
 "Create partition table": [
  null,
  ""
 ],
 "Creating RAID Device $target": [
  null,
  ""
 ],
 "Creating filesystem on $target": [
  null,
  ""
 ],
 "Creating logical volume $target": [
  null,
  ""
 ],
 "Creating partition $target": [
  null,
  ""
 ],
 "Creating snapshot of $target": [
  null,
  ""
 ],
 "Creating volume group $target": [
  null,
  ""
 ],
 "Custom": [
  null,
  ""
 ],
 "Custom (Enter filesystem type)": [
  null,
  ""
 ],
 "Custom encryption options": [
  null,
  ""
 ],
 "Custom mount option": [
  null,
  ""
 ],
 "Custom mount options": [
  null,
  ""
 ],
 "DISK IS FAILING": [
  null,
  ""
 ],
 "Data Used": [
  null,
  ""
 ],
 "Deactivate": [
  null,
  ""
 ],
 "Deactivating $target": [
  null,
  ""
 ],
 "Default": [
  null,
  "ਡਿਫਾਲਟ"
 ],
 "Delete": [
  null,
  ""
 ],
 "Deleting $target": [
  null,
  ""
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  ""
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  ""
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  ""
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  ""
 ],
 "Deleting volume group $target": [
  null,
  ""
 ],
 "Device is read-only": [
  null,
  ""
 ],
 "Disk is OK": [
  null,
  ""
 ],
 "Disks": [
  null,
  ""
 ],
 "Don't overwrite existing data": [
  null,
  ""
 ],
 "Drive": [
  null,
  "ਡਰਾਇਵ"
 ],
 "Drives": [
  null,
  "ਡਰਾਇਵ"
 ],
 "Edit": [
  null,
  ""
 ],
 "Ejecting $target": [
  null,
  ""
 ],
 "Emptying $target": [
  null,
  ""
 ],
 "Encrypted $0": [
  null,
  ""
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  ""
 ],
 "Encrypted Logical Volume of $0": [
  null,
  ""
 ],
 "Encrypted Partition of $0": [
  null,
  ""
 ],
 "Encrypted XFS (LUKS)": [
  null,
  ""
 ],
 "Encryption": [
  null,
  ""
 ],
 "Encryption Options": [
  null,
  ""
 ],
 "Erase": [
  null,
  ""
 ],
 "Erasing $target": [
  null,
  ""
 ],
 "Error": [
  null,
  ""
 ],
 "Extended Partition": [
  null,
  ""
 ],
 "FAILED": [
  null,
  ""
 ],
 "Filesystem": [
  null,
  ""
 ],
 "Filesystem Mounting": [
  null,
  ""
 ],
 "Filesystem Name": [
  null,
  ""
 ],
 "Filesystem type": [
  null,
  ""
 ],
 "Filesystems": [
  null,
  "ਫਾਇਲ-ਸਿਸਟਮ"
 ],
 "Format": [
  null,
  ""
 ],
 "Format $0": [
  null,
  ""
 ],
 "Format Disk $0": [
  null,
  ""
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  ""
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  ""
 ],
 "Free": [
  null,
  ""
 ],
 "Free Space": [
  null,
  ""
 ],
 "Go to now": [
  null,
  ""
 ],
 "In Sync": [
  null,
  ""
 ],
 "Inactive volume": [
  null,
  ""
 ],
 "Invalid username or password": [
  null,
  ""
 ],
 "Jobs": [
  null,
  ""
 ],
 "Local Mount Point": [
  null,
  ""
 ],
 "Lock": [
  null,
  ""
 ],
 "Locking $target": [
  null,
  ""
 ],
 "Logical Volume": [
  null,
  ""
 ],
 "Logical Volume (Snapshot)": [
  null,
  ""
 ],
 "Logical Volume of $0": [
  null,
  ""
 ],
 "Marking $target as faulty": [
  null,
  ""
 ],
 "Member of RAID Device": [
  null,
  ""
 ],
 "Member of RAID Device $0": [
  null,
  ""
 ],
 "Metadata Used": [
  null,
  ""
 ],
 "Modifying $target": [
  null,
  ""
 ],
 "Mount": [
  null,
  ""
 ],
 "Mount Options": [
  null,
  ""
 ],
 "Mount Point": [
  null,
  "ਮਾਊਸ ਪੁਆਇੰਟ"
 ],
 "Mount at boot": [
  null,
  ""
 ],
 "Mount options": [
  null,
  ""
 ],
 "Mount point can not be empty": [
  null,
  ""
 ],
 "Mount point cannot be empty.": [
  null,
  ""
 ],
 "Mount point must start with \"/\".": [
  null,
  ""
 ],
 "Mount read only": [
  null,
  ""
 ],
 "Mounted At": [
  null,
  ""
 ],
 "Mounting": [
  null,
  ""
 ],
 "Mounting $target": [
  null,
  ""
 ],
 "NFS Mount": [
  null,
  ""
 ],
 "NFS Mounts": [
  null,
  ""
 ],
 "NTFS - Compatible with most systems": [
  null,
  ""
 ],
 "Name": [
  null,
  "ਨਾਂ"
 ],
 "Name cannot be empty.": [
  null,
  ""
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  ""
 ],
 "Name cannot contain the character '$0'.": [
  null,
  ""
 ],
 "Name cannot contain whitespace.": [
  null,
  ""
 ],
 "New NFS Mount": [
  null,
  ""
 ],
 "Next": [
  null,
  ""
 ],
 "No Filesystem": [
  null,
  ""
 ],
 "No Logical Volumes": [
  null,
  ""
 ],
 "No NFS mounts set up": [
  null,
  ""
 ],
 "No disks are available.": [
  null,
  ""
 ],
 "No drives attached": [
  null,
  ""
 ],
 "No free space": [
  null,
  ""
 ],
 "No iSCSI targets set up": [
  null,
  ""
 ],
 "No media inserted": [
  null,
  ""
 ],
 "No partitioning": [
  null,
  ""
 ],
 "No storage set up as RAID": [
  null,
  ""
 ],
 "No volume groups created": [
  null,
  ""
 ],
 "Not found": [
  null,
  ""
 ],
 "Not mounted": [
  null,
  ""
 ],
 "Not running": [
  null,
  ""
 ],
 "Off": [
  null,
  ""
 ],
 "On": [
  null,
  ""
 ],
 "Operation '$operation' on $target": [
  null,
  ""
 ],
 "Options": [
  null,
  ""
 ],
 "Other Devices": [
  null,
  "ਹੋਰ ਡਿਵਾਇਸ"
 ],
 "Overwrite existing data with zeros": [
  null,
  ""
 ],
 "Partition": [
  null,
  ""
 ],
 "Partition of $0": [
  null,
  ""
 ],
 "Partitioning": [
  null,
  ""
 ],
 "Passphrase": [
  null,
  "ਵਾਕ"
 ],
 "Passphrase cannot be empty": [
  null,
  ""
 ],
 "Passphrases do not match": [
  null,
  ""
 ],
 "Password": [
  null,
  "ਪਾਸਵਰਡ"
 ],
 "Path on Server": [
  null,
  ""
 ],
 "Path on server cannot be empty.": [
  null,
  ""
 ],
 "Path on server must start with \"/\".": [
  null,
  ""
 ],
 "Physical Volume": [
  null,
  ""
 ],
 "Physical Volumes": [
  null,
  ""
 ],
 "Physical volume of $0": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  ""
 ],
 "Pool": [
  null,
  ""
 ],
 "Pool for Thin Logical Volumes": [
  null,
  ""
 ],
 "Pool for Thin Volumes": [
  null,
  ""
 ],
 "Pool for thinly provisioned volumes": [
  null,
  ""
 ],
 "Port": [
  null,
  ""
 ],
 "Purpose": [
  null,
  ""
 ],
 "RAID ($0)": [
  null,
  ""
 ],
 "RAID 0": [
  null,
  ""
 ],
 "RAID 0 (Stripe)": [
  null,
  ""
 ],
 "RAID 1": [
  null,
  ""
 ],
 "RAID 1 (Mirror)": [
  null,
  ""
 ],
 "RAID 10": [
  null,
  ""
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  ""
 ],
 "RAID 4": [
  null,
  ""
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  ""
 ],
 "RAID 5": [
  null,
  ""
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  ""
 ],
 "RAID 6": [
  null,
  ""
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  ""
 ],
 "RAID Device": [
  null,
  "ਰੇਡ ਡਿਵਾਇਸ"
 ],
 "RAID Device $0": [
  null,
  ""
 ],
 "RAID Devices": [
  null,
  ""
 ],
 "RAID Level": [
  null,
  ""
 ],
 "RAID Member": [
  null,
  ""
 ],
 "Reading": [
  null,
  ""
 ],
 "Reboot": [
  null,
  "ਮੁਡ਼ ਚਾਲੂ ਕਰੋ"
 ],
 "Recovering": [
  null,
  ""
 ],
 "Recovering RAID Device $target": [
  null,
  ""
 ],
 "Removing $target from RAID Device": [
  null,
  ""
 ],
 "Removing physical volume from $target": [
  null,
  ""
 ],
 "Rename": [
  null,
  ""
 ],
 "Rename Logical Volume": [
  null,
  ""
 ],
 "Rename Volume Group": [
  null,
  ""
 ],
 "Renaming $target": [
  null,
  ""
 ],
 "Resize": [
  null,
  ""
 ],
 "Resize Filesystem": [
  null,
  ""
 ],
 "Resize Logical Volume": [
  null,
  ""
 ],
 "Resizing $target": [
  null,
  ""
 ],
 "Running": [
  null,
  ""
 ],
 "SMART self-test of $target": [
  null,
  ""
 ],
 "Securely erasing $target": [
  null,
  ""
 ],
 "Server": [
  null,
  ""
 ],
 "Server Address": [
  null,
  ""
 ],
 "Server address cannot be empty.": [
  null,
  ""
 ],
 "Server cannot be empty.": [
  null,
  ""
 ],
 "Setting up loop device $target": [
  null,
  ""
 ],
 "Size": [
  null,
  "ਆਕਾਰ"
 ],
 "Size cannot be negative": [
  null,
  "ਆਕਾਰ ਸਿਫ਼ਰ ਤੋਂ ਘੱਟ ਨਹੀਂ ਹੋ ਸਕਦਾ"
 ],
 "Size cannot be zero": [
  null,
  "ਆਕਾਰ ਸਿਫ਼ਰ ਨਹੀਂ ਹੋ ਸਕਦਾ"
 ],
 "Size is too large": [
  null,
  "ਆਕਾਰ ਬਹੁਤ ਵੱਡਾ ਹੈ"
 ],
 "Size must be a number": [
  null,
  "ਆਕਾਰ ਨੰਬਰ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ"
 ],
 "Spare": [
  null,
  "ਸਪੇਅਰ"
 ],
 "Start": [
  null,
  "ਸ਼ੁਰੂ ਕਰੋ"
 ],
 "Start Multipath": [
  null,
  "ਮਲਟੀਪਾਥ ਸ਼ੁਰੂ ਕਰੋ"
 ],
 "Start Scrubbing": [
  null,
  ""
 ],
 "Starting RAID Device $target": [
  null,
  ""
 ],
 "Starting swapspace $target": [
  null,
  ""
 ],
 "Stop": [
  null,
  "ਰੋਕੋ"
 ],
 "Stop Scrubbing": [
  null,
  ""
 ],
 "Stop and remove": [
  null,
  ""
 ],
 "Stop and unmount": [
  null,
  ""
 ],
 "Stopping RAID Device $target": [
  null,
  ""
 ],
 "Stopping swapspace $target": [
  null,
  ""
 ],
 "Storage": [
  null,
  "ਸਟੋਰੇਜ਼"
 ],
 "Storage Logs": [
  null,
  "ਸਟੋਰੇਜ਼ ਲਾਗ"
 ],
 "Store passphrase": [
  null,
  "ਵਾਕ ਨੂੰ ਸੰਭਾਲੋ"
 ],
 "Stored Passphrase": [
  null,
  "ਵਾਕ ਸੰਭਾਲਿਆ"
 ],
 "Stored passphrase": [
  null,
  "ਵਾਕ ਸੰਭਾਲਿਆ"
 ],
 "Swap": [
  null,
  "ਸਵੈਪ"
 ],
 "Synchronizing RAID Device $target": [
  null,
  ""
 ],
 "Targets": [
  null,
  ""
 ],
 "The \"storaged\" API is not available on this system.": [
  null,
  ""
 ],
 "The RAID Array is in a degraded state": [
  null,
  ""
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  ""
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  ""
 ],
 "The filesystem is in use by system services or login sessions.                Proceeding will stop these services and sessions.": [
  null,
  ""
 ],
 "The last disk of a RAID device cannot be removed.": [
  null,
  ""
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  ""
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  ""
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  ""
 ],
 "Thin Logical Volume": [
  null,
  ""
 ],
 "This NFS mount is in use and only its options can be changed.": [
  null,
  ""
 ],
 "This device has filesystems that are currently in use.                Proceeding will unmount all filesystems on it.": [
  null,
  ""
 ],
 "This device is currently used for RAID devices.": [
  null,
  ""
 ],
 "This device is currently used for RAID devices.                Proceeding will remove it from its RAID devices.": [
  null,
  ""
 ],
 "This device is currently used for volume groups.": [
  null,
  ""
 ],
 "This device is currently used for volume groups.                Proceeding will remove it from its volume groups.": [
  null,
  ""
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  ""
 ],
 "This logical volume cannot be made smaller.": [
  null,
  ""
 ],
 "Type": [
  null,
  "ਕਿਸਮ"
 ],
 "UUID": [
  null,
  ""
 ],
 "Unable to reach server": [
  null,
  ""
 ],
 "Unable to remove mount": [
  null,
  ""
 ],
 "Unable to unmount filesystem": [
  null,
  ""
 ],
 "Unknown": [
  null,
  ""
 ],
 "Unknown ($0)": [
  null,
  ""
 ],
 "Unknown host name": [
  null,
  ""
 ],
 "Unlock": [
  null,
  ""
 ],
 "Unlock at boot": [
  null,
  ""
 ],
 "Unlock read only": [
  null,
  ""
 ],
 "Unlocking $target": [
  null,
  ""
 ],
 "Unmount": [
  null,
  ""
 ],
 "Unmounting $target": [
  null,
  ""
 ],
 "Unrecognized Data": [
  null,
  ""
 ],
 "Unsupported volume": [
  null,
  ""
 ],
 "Usage": [
  null,
  "ਵਰਤੋਂ"
 ],
 "Used": [
  null,
  ""
 ],
 "Username": [
  null,
  "ਵਰਤੋਂਕਾਰ ਨਾਂ"
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  ""
 ],
 "Very securely erasing $target": [
  null,
  ""
 ],
 "Volume": [
  null,
  "ਵਾਲੀਅਮ"
 ],
 "Volume Group": [
  null,
  "ਵਾਲੀਅਮ ਗਰੁੱਪ"
 ],
 "Volume Group $0": [
  null,
  "ਵਾਲੀਅਮ ਗਰੁੱਪ $0"
 ],
 "Volume Groups": [
  null,
  "ਵਾਲੀਅਮ ਗਰੁੱਪ"
 ],
 "Write-mostly": [
  null,
  ""
 ],
 "Writing": [
  null,
  ""
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
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
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  ""
 ],
 "iSCSI Targets": [
  null,
  ""
 ],
 "unknown target": [
  null,
  "ਅਣਪਛਾਤਾ ਟਾਰਗੇਟ"
 ],
 "unpartitioned space on $0": [
  null,
  ""
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 ਫ਼ਾਈਲ ਸਿਸਟਮ"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  ""
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  ""
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "ਸਵੈਪ ਥਾਂ"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  ""
 ],
 "storage\u0004Drive": [
  null,
  ""
 ],
 "storage\u0004Hard Disk": [
  null,
  ""
 ],
 "storage\u0004Optical Drive": [
  null,
  ""
 ],
 "storage\u0004Removable Drive": [
  null,
  ""
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "ਸਾਲਡ-ਸਟੇਟ ਡਿਸਕ"
 ],
 "format-bytes\u0004bytes": [
  null,
  ""
 ]
}));
