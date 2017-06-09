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
 "$0 Block Device": [
  null,
  "$0 Lohkolaite"
 ],
 "$0 Chunk Size": [
  null,
  ""
 ],
 "$0 Disks": [
  null,
  "$0 levyt"
 ],
 "$0 day": [
  "$0 days",
  "$0 päivä",
  "$0 päivää"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 levyä ei löydy",
  "$0 levyjä ei löydy"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 tunti",
  "$0 tuntia"
 ],
 "$0 is in active use": [
  null,
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minuutti",
  "$0 minuuttia"
 ],
 "$0 month": [
  "$0 months",
  "$0 kuukausi",
  "$0 kuukautta"
 ],
 "$0 of $1": [
  null,
  ""
 ],
 "$0 week": [
  "$0 weeks",
  "$0 viikko",
  "$0 viikkoa"
 ],
 "$0 year": [
  "$0 years",
  "$0 vuosi",
  "$0 vuotta"
 ],
 "$0, $1 free": [
  null,
  "$0, $1 vapaana"
 ],
 "$name (from $host)": [
  null,
  "$name (kohteesta $host)"
 ],
 "${size} ${desc}": [
  null,
  ""
 ],
 "(default)": [
  null,
  "(oletus)"
 ],
 "(none)": [
  null,
  "(ei mitään)"
 ],
 "1 MiB": [
  null,
  "1 MiB"
 ],
 "1 day": [
  null,
  "1 päivä"
 ],
 "1 hour": [
  null,
  "1 tunti"
 ],
 "1 week": [
  null,
  "1 viikko"
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
  "5 minuuttia"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6 tuntia"
 ],
 "64 KiB": [
  null,
  "64 KiB"
 ],
 "8 KiB": [
  null,
  "8 KiB"
 ],
 "<span>Encrypted $0</span>": [
  null,
  "<span>Salattu $0</span>"
 ],
 "<span>Encrypted Logical Volume of $0</span>": [
  null,
  "<span>Salattu Looginen Taltio $0</span>"
 ],
 "<span>Encrypted Partition of $0</span>": [
  null,
  "<span>$0 :n salattu osio</span>"
 ],
 "<span>Logical Volume of $0</span>": [
  null,
  "<span>Looginen Taltio $0</span>"
 ],
 "<span>Partition of $0</span>": [
  null,
  "<span>$0:n osio</span>"
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  ""
 ],
 "Activate": [
  null,
  "Aktivoi"
 ],
 "Activating $target": [
  null,
  "Aktivoidaan $target"
 ],
 "Add": [
  null,
  "Lisää"
 ],
 "Add Disks": [
  null,
  "Lisää Levyjä"
 ],
 "Add iSCSI Portal": [
  null,
  "Lisää iSCSI Portaali"
 ],
 "Adding physical volume to $target": [
  null,
  "Lisätään fyysinen taltio kohteeseen $target"
 ],
 "Address": [
  null,
  "Osoite"
 ],
 "Apply": [
  null,
  "Toteuta"
 ],
 "At least $0 disks are needed.": [
  null,
  "Vähintään $0 levyä tarvitaan."
 ],
 "At least one disk is needed.": [
  null,
  "Vähintään yksi levy tarvitaan."
 ],
 "Authentication required": [
  null,
  "Tunnistautuminen vaaditaan"
 ],
 "Available targets on $0": [
  null,
  "Käytettävät kohteet $0"
 ],
 "Block Device": [
  null,
  "Lohkolaite"
 ],
 "Block device for filesystems": [
  null,
  "Lohkolaite tiedostojärjestelmille"
 ],
 "Blocked": [
  null,
  "Estetty"
 ],
 "Can't delete while unlocked": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Peru"
 ],
 "Change": [
  null,
  "Vaihda"
 ],
 "Change iSCSI Initiator Name": [
  null,
  "Vaihda iSCSI-Asiakaslaitteen Nimi"
 ],
 "Checking RAID Device $target": [
  null,
  "Tarkistetaan RAID-Laite $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "Tarkistetaan ja Korjataan RAID-Laite $target"
 ],
 "Chunk Size": [
  null,
  ""
 ],
 "Cleaning up for $target": [
  null,
  "Siivotaan kohteelle $target"
 ],
 "Close": [
  null,
  "Sulje"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "Yhteensopiva kaikkien järjestelmien ja laitteiden kanssa (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "Yhteensopiva modernien järjestelmien ja kovalevyjen kanssa > 2TB (GPT)"
 ],
 "Confirm passphrase": [
  null,
  "Vahvista salasana"
 ],
 "Content": [
  null,
  "Sisältö"
 ],
 "Create": [
  null,
  "Luo"
 ],
 "Create Logical Volume": [
  null,
  "Luo Looginen Taltio"
 ],
 "Create Partition": [
  null,
  "Luo Osio"
 ],
 "Create RAID Device": [
  null,
  "Luo RAID-Laite"
 ],
 "Create Snapshot": [
  null,
  "Luo Tilannevedos"
 ],
 "Create Thin Volume": [
  null,
  "Luo Thin-Taltio"
 ],
 "Create Volume Group": [
  null,
  "Luo Taltioryhmä"
 ],
 "Create new Logical Volume": [
  null,
  "Luo uusi Looginen Taltio"
 ],
 "Create partition": [
  null,
  "Luo osio"
 ],
 "Create partition on $0": [
  null,
  "Luo osio kohteessa $0"
 ],
 "Create partition table": [
  null,
  "Luo osiotaulu"
 ],
 "Creating RAID Device $target": [
  null,
  "Luodaan RAID-Laite $target"
 ],
 "Creating filesystem on $target": [
  null,
  "Luodaan tiedostojärjestelmää kohteessa $target"
 ],
 "Creating logical volume $target": [
  null,
  "Luodan loogista taltiota $target"
 ],
 "Creating partition $target": [
  null,
  "Luodaan osiota $target"
 ],
 "Creating snapshot of $target": [
  null,
  "Luodaan tilannevedos kohteesta $target"
 ],
 "Creating volume group $target": [
  null,
  "Luodaan taltioryhmä $target"
 ],
 "Custom": [
  null,
  "Mukautettu"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "Mukautettu (Lisää tiedostojärjestelmän tyyppi)"
 ],
 "DISK IS FAILING": [
  null,
  "LEVY ON PETTÄMÄSSÄ"
 ],
 "Data Used": [
  null,
  "Dataa Käytetty"
 ],
 "Deactivate": [
  null,
  "Deaktivoi"
 ],
 "Deactivating $target": [
  null,
  "Deaktivoidaan $target"
 ],
 "Default": [
  null,
  "Oletus"
 ],
 "Delete": [
  null,
  "Poista"
 ],
 "Deleting $target": [
  null,
  "Poistetaan $target"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "RAID-laitteen poistaminen tuhoaa kaiken sillä olevan datan."
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "Loogisen taltion poistaminen tuhoaa kaiken sillä olevan datan."
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "Osion poistaminen tuhoaa kaiken sillä olevan datan."
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "Taltion poistaminen tuhoaa kaiken sillä olevan datan."
 ],
 "Deleting volume group $target": [
  null,
  "Tuhotaan taltioryhmä $target"
 ],
 "Device is read-only": [
  null,
  "Laite on \"vain luku\"-muotoa"
 ],
 "Disk is OK": [
  null,
  "Levy on OK"
 ],
 "Disks": [
  null,
  "Levyt"
 ],
 "Don't overwrite existing data": [
  null,
  "Älä ylikirjoita olemassaolevaa dataa"
 ],
 "Drive": [
  null,
  "Levy"
 ],
 "Drives": [
  null,
  "Levyt"
 ],
 "Edit": [
  null,
  "Muokkaa"
 ],
 "Ejecting $target": [
  null,
  "Ejektoidaan $target"
 ],
 "Emptying $target": [
  null,
  "Tyhjennetään $target"
 ],
 "Encrypted $0": [
  null,
  ""
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "Salattu EXT4 (LUKS)"
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
  "Salattu XFS (LUKS)"
 ],
 "Encryption": [
  null,
  "Salaus"
 ],
 "Encryption Options": [
  null,
  "Salauksen Valinnat"
 ],
 "Erase": [
  null,
  "Tyhjennä"
 ],
 "Erasing $target": [
  null,
  "Tyhjennetään $target"
 ],
 "Error": [
  null,
  "Virhe"
 ],
 "Extended Partition": [
  null,
  "Laajennettu Osio"
 ],
 "FAILED": [
  null,
  "EPÄONNISTUI"
 ],
 "Filesystem": [
  null,
  "Tiedostojärjestelmä"
 ],
 "Filesystem Mounting": [
  null,
  "Tiedostojärjestelmän Liittäminen"
 ],
 "Filesystem Name": [
  null,
  "Tiedostojärjestelmän Nimi"
 ],
 "Filesystem type": [
  null,
  "Tiedostojärjestelmän tyyppi"
 ],
 "Filesystems": [
  null,
  "Tiedostojärjestelmät"
 ],
 "Format": [
  null,
  "Alusta"
 ],
 "Format $0": [
  null,
  "Alusta $0"
 ],
 "Format Disk $0": [
  null,
  "Alusta Levy $0"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "Taltion alustaminen tuhoaa kaiken sillä olevan datan."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "Levylaitteen alustaminen tuhoaa kaiken sillä olevan datan."
 ],
 "Free": [
  null,
  "Vapaa"
 ],
 "Free Space": [
  null,
  "Vapaa Tila"
 ],
 "Go to now": [
  null,
  "Mene nyt"
 ],
 "In Sync": [
  null,
  "Synkronoitu"
 ],
 "Inactive volume": [
  null,
  "Epäaktiivinen taltio"
 ],
 "Invalid username or password": [
  null,
  "Virheellinen käyttäjätunnus tai salasana"
 ],
 "Jobs": [
  null,
  "Työt"
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
 "NTFS - Compatible with most systems": [
  null,
  ""
 ],
 "Name": [
  null,
  ""
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
  ""
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
  ""
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
  ""
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
  ""
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
 "Server Address": [
  null,
  ""
 ],
 "Server address cannot be empty.": [
  null,
  ""
 ],
 "Setting up loop device $target": [
  null,
  ""
 ],
 "Size": [
  null,
  ""
 ],
 "Size cannot be negative": [
  null,
  ""
 ],
 "Size cannot be zero": [
  null,
  ""
 ],
 "Size is too large": [
  null,
  ""
 ],
 "Size must be a number": [
  null,
  ""
 ],
 "Spare": [
  null,
  ""
 ],
 "Start": [
  null,
  ""
 ],
 "Start Multipath": [
  null,
  ""
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
  ""
 ],
 "Stop Scrubbing": [
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
  ""
 ],
 "Storage Log": [
  null,
  ""
 ],
 "Storage Logs": [
  null,
  ""
 ],
 "Store passphrase": [
  null,
  ""
 ],
 "Stored Passphrase": [
  null,
  ""
 ],
 "Stored passphrase": [
  null,
  ""
 ],
 "Swap": [
  null,
  ""
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
  "Tätä loogista taltiota ei voida pienentää."
 ],
 "Type": [
  null,
  "Tyyppi"
 ],
 "UUID": [
  null,
  "UUID"
 ],
 "Unable to reach server": [
  null,
  "Serveriin ei saada yhteyttä"
 ],
 "Unknown": [
  null,
  "Tuntematon"
 ],
 "Unknown ($0)": [
  null,
  "Tuntematon ($0)"
 ],
 "Unknown host name": [
  null,
  ""
 ],
 "Unlock": [
  null,
  "Avaa"
 ],
 "Unlocking $target": [
  null,
  "Avataan $target"
 ],
 "Unmount": [
  null,
  "Irroita"
 ],
 "Unmounting $target": [
  null,
  "Irroitetaan $target"
 ],
 "Unrecognized Data": [
  null,
  "Tunnistamaton Data"
 ],
 "Unsupported volume": [
  null,
  "Tukematon taltio"
 ],
 "Usage": [
  null,
  "Käyttö"
 ],
 "Used": [
  null,
  "Käytetty"
 ],
 "Username": [
  null,
  "Käyttäjätunnus"
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  "VFAT - Yhteensopiva kaikkien järjestelmien ja laitteiden kanssa"
 ],
 "Very securely erasing $target": [
  null,
  "Poistetaan hyvin turvallisesti $target"
 ],
 "Volume": [
  null,
  "Taltio"
 ],
 "Volume Group": [
  null,
  "Taltioryhmä"
 ],
 "Volume Group $0": [
  null,
  "Taltioryhmä $0"
 ],
 "Volume Groups": [
  null,
  ""
 ],
 "Write-mostly": [
  null,
  ""
 ],
 "Writing": [
  null,
  "Kirjoitetaan"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS - Red Hat Enterprise Linux 7 default"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 tavua binääridatasta]"
 ],
 "[binary data]": [
  null,
  "[binääridata]"
 ],
 "[no data]": [
  null,
  "[ei dataa]"
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4 - Red Hat Enterprise Linux 6 default"
 ],
 "iSCSI Targets": [
  null,
  "iSCSI Kohteet"
 ],
 "unknown target": [
  null,
  "tuntematon kohde"
 ],
 "unpartitioned space on $0": [
  null,
  ""
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 tiedostojärjestelmä"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  "Salattu data"
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  ""
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  ""
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "Tunnistamaton Data"
 ],
 "storage\u0004Assessment": [
  null,
  "Arviointi"
 ],
 "storage\u0004Bitmap": [
  null,
  "Bittikartta"
 ],
 "storage\u0004Capacity": [
  null,
  "Koko"
 ],
 "storage\u0004Device": [
  null,
  "Laite"
 ],
 "storage\u0004Device File": [
  null,
  "Laitetiedosto"
 ],
 "storage\u0004Drive": [
  null,
  "Levy"
 ],
 "storage\u0004Firmware Version": [
  null,
  "Laiteohjelmiston Versio"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Kovalevy"
 ],
 "storage\u0004Model": [
  null,
  ""
 ],
 "storage\u0004Multipathed Devices": [
  null,
  ""
 ],
 "storage\u0004Optical Drive": [
  null,
  ""
 ],
 "storage\u0004RAID Level": [
  null,
  ""
 ],
 "storage\u0004Removable Drive": [
  null,
  ""
 ],
 "storage\u0004Serial Number": [
  null,
  ""
 ],
 "storage\u0004Solid-State Disk": [
  null,
  ""
 ],
 "storage\u0004State": [
  null,
  ""
 ],
 "storage\u0004UUID": [
  null,
  "UUID"
 ],
 "storage\u0004World Wide Name": [
  null,
  ""
 ],
 "format-bytes\u0004bytes": [
  null,
  "tavua"
 ]
}));