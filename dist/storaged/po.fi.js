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
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  ""
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 levyä ei löydy",
  "$0 levyjä ei löydy"
 ],
 "$0 filesystems can not be made larger.": [
  null,
  ""
 ],
 "$0 filesystems can not be made smaller.": [
  null,
  ""
 ],
 "$0 filesystems can not be resized here.": [
  null,
  ""
 ],
 "$0 is in active use": [
  null,
  "$0 on aktiivisessa käytössä"
 ],
 "$0 is not available from any repository.": [
  null,
  ""
 ],
 "$0 of $1": [
  null,
  "$0/$1"
 ],
 "$0 slots remain": [
  null,
  ""
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  "$0 käytetty kohteesta $1 ($2 tallennettu)"
 ],
 "$0 will be installed.": [
  null,
  ""
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
  "${size} ${desc}"
 ],
 "(default)": [
  null,
  "(oletus)"
 ],
 "(none)": [
  null,
  "(ei mitään)"
 ],
 "--": [
  null,
  "--"
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
 "A disk is needed.": [
  null,
  "Levy vaaditaan."
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  "Varalevy pitää lisätä ennen kuin tämä levy voidaan poistaa."
 ],
 "Activate": [
  null,
  "Aktivoi"
 ],
 "Activating $target": [
  null,
  "Aktivoidaan $target"
 ],
 "Active since": [
  null,
  "Aktiivinen lähtien"
 ],
 "Add": [
  null,
  "Lisää"
 ],
 "Add Disks": [
  null,
  "Lisää levyjä"
 ],
 "Add Key": [
  null,
  ""
 ],
 "Add iSCSI Portal": [
  null,
  "Lisää iSCSI Portaali"
 ],
 "Adding physical volume to $target": [
  null,
  "Lisätään fyysinen taltio kohteeseen $target"
 ],
 "Additional packages:": [
  null,
  ""
 ],
 "Address": [
  null,
  "Osoite"
 ],
 "Address cannot be empty": [
  null,
  ""
 ],
 "Address is not a valid URL": [
  null,
  ""
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
 "Backing Device": [
  null,
  ""
 ],
 "Block": [
  null,
  "Lohko"
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
  "Vaihda iSCSI-asiakaslaitteen nimi"
 ],
 "Change passphrase": [
  null,
  ""
 ],
 "Checking $target": [
  null,
  "Tarkistetaan $target"
 ],
 "Checking RAID Device $target": [
  null,
  "Tarkistetaan RAID-laite $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "Tarkistetaan ja korjataan RAID-laite $target"
 ],
 "Checking installed software": [
  null,
  ""
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
 "Compression": [
  null,
  "Pakkaus"
 ],
 "Confirm passphrase": [
  null,
  "Vahvista salasana"
 ],
 "Confirm removal with passphrase": [
  null,
  ""
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
  "Luo looginen taltio"
 ],
 "Create Partition": [
  null,
  "Luo osio"
 ],
 "Create Partition Table": [
  null,
  ""
 ],
 "Create Partition on $0": [
  null,
  ""
 ],
 "Create RAID Device": [
  null,
  "Luo RAID-laite"
 ],
 "Create Snapshot": [
  null,
  "Luo tilannevedos"
 ],
 "Create Thin Volume": [
  null,
  "Luo Thin-taltio"
 ],
 "Create VDO Device": [
  null,
  "Luo VDO-laite"
 ],
 "Create Volume Group": [
  null,
  "Luo taltioryhmä"
 ],
 "Create new Logical Volume": [
  null,
  "Luo uusi looginen taltio"
 ],
 "Creating RAID Device $target": [
  null,
  "Luodaan RAID-laite $target"
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
 "Custom encryption options": [
  null,
  "Mukautetut salausvalinnat"
 ],
 "Custom mount options": [
  null,
  "Mukautetut liitosvalinnat"
 ],
 "DISK IS FAILING": [
  null,
  "LEVY ON PETTÄMÄSSÄ"
 ],
 "Data Used": [
  null,
  "Dataa käytetty"
 ],
 "Deactivate": [
  null,
  "Deaktivoi"
 ],
 "Deactivating $target": [
  null,
  "Deaktivoidaan $target"
 ],
 "Deduplication": [
  null,
  ""
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
 "Deleting a VDO device will erase all data on it.": [
  null,
  "VDO-laitteen poistaminen tuhoaa kaiken sillä olevan datan."
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
 "Device File": [
  null,
  "Laitetiedosto"
 ],
 "Device is read-only": [
  null,
  "Laite on \"vain luku\"-muotoa"
 ],
 "Disk": [
  null,
  "Levy"
 ],
 "Disk is OK": [
  null,
  "Levy on OK"
 ],
 "Disk passphrase": [
  null,
  ""
 ],
 "Disks": [
  null,
  "Levyt"
 ],
 "Don't overwrite existing data": [
  null,
  "Älä ylikirjoita olemassa olevaa dataa"
 ],
 "Downloading $0": [
  null,
  ""
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
 "Edit Tang keyserver": [
  null,
  ""
 ],
 "Editing a key requires a free slot": [
  null,
  ""
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
  "Salattu $0"
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "Salattu EXT4 (LUKS)"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "Salattu looginen taltio $0"
 ],
 "Encrypted Partition of $0": [
  null,
  "Salattu osio $0"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "Salattu XFS (LUKS)"
 ],
 "Encrypted volumes can not be resized here.": [
  null,
  "Salattujen taltioiden kokoa ei voi muuttaa täällä."
 ],
 "Encrypted volumes need to be unlocked before they can be resized.": [
  null,
  "Salattujen taltioiden salaus tulee olla avattu, ennen kuin niiden kokoa voidaan muuttaa."
 ],
 "Encryption": [
  null,
  "Salaus"
 ],
 "Encryption Options": [
  null,
  "Salauksen valinnat"
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
  "Laajennettu osio"
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
  "Tiedostojärjestelmän liittäminen"
 ],
 "Filesystem Name": [
  null,
  "Tiedostojärjestelmän nimi"
 ],
 "Filesystem type": [
  null,
  "Tiedostojärjestelmän tyyppi"
 ],
 "Filesystems": [
  null,
  "Tiedostojärjestelmät"
 ],
 "For legacy applications only. Reduces performance.": [
  null,
  ""
 ],
 "Force remove passphrase in $0": [
  null,
  ""
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
  "Alusta levy $0"
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
  "Vapaa tila"
 ],
 "Free up space in this group: Shrink or delete other logical volumes or add another physical volume.": [
  null,
  ""
 ],
 "Go to now": [
  null,
  "Mene nyt"
 ],
 "Grow": [
  null,
  "Kasvata"
 ],
 "Grow Logical Volume": [
  null,
  "Kasvata loogista taltiota"
 ],
 "Grow logical size of $0": [
  null,
  "Kasvata loogista kokoa $0"
 ],
 "Grow to take all space": [
  null,
  ""
 ],
 "If tang-show-keys is not available, run the following:": [
  null,
  ""
 ],
 "In Sync": [
  null,
  "Synkronoitu"
 ],
 "Inactive volume": [
  null,
  "Epäaktiivinen taltio"
 ],
 "Index Memory": [
  null,
  ""
 ],
 "Install": [
  null,
  "Asenna"
 ],
 "Install NFS Support": [
  null,
  ""
 ],
 "Install Software": [
  null,
  ""
 ],
 "Install VDO support": [
  null,
  ""
 ],
 "Installing $0": [
  null,
  ""
 ],
 "Invalid username or password": [
  null,
  "Virheellinen käyttäjätunnus tai salasana"
 ],
 "Jobs": [
  null,
  "Työt"
 ],
 "Key slots with unknown types can not be edited here": [
  null,
  ""
 ],
 "Key source": [
  null,
  ""
 ],
 "Keys": [
  null,
  ""
 ],
 "Keyserver": [
  null,
  ""
 ],
 "Keyserver address": [
  null,
  ""
 ],
 "Keyserver removal may prevent unlocking $0.": [
  null,
  ""
 ],
 "Local Mount Point": [
  null,
  "Paikallinen liitospiste"
 ],
 "Lock": [
  null,
  "Lukitse"
 ],
 "Locking $target": [
  null,
  "Lukitaan $target"
 ],
 "Logical": [
  null,
  "Looginen"
 ],
 "Logical Size": [
  null,
  "Looginen koko"
 ],
 "Logical Volume": [
  null,
  "Looginen taltio"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "Looginen taltio (tilannevedos)"
 ],
 "Logical Volume of $0": [
  null,
  ""
 ],
 "Make sure the key hash from the Tang server matches:": [
  null,
  ""
 ],
 "Manually check with SSH: ": [
  null,
  ""
 ],
 "Marking $target as faulty": [
  null,
  "Merkitään $target virheelliseksi"
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
  "Muokataan $target"
 ],
 "Mount": [
  null,
  ""
 ],
 "Mount Options": [
  null,
  "Liitosvalinnat"
 ],
 "Mount Point": [
  null,
  "Liitospiste"
 ],
 "Mount at boot": [
  null,
  "Liitä käynnistyksen yhteydessä"
 ],
 "Mount point can not be empty": [
  null,
  "Liitospiste ei voi olla tyhjä"
 ],
 "Mount point cannot be empty.": [
  null,
  "Liitospiste ei voi olla tyhjä."
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
  "Liitetään"
 ],
 "Mounting $target": [
  null,
  "Liitetään $target"
 ],
 "NFS Mount": [
  null,
  "NFS-liitos"
 ],
 "NFS Mounts": [
  null,
  "NFS-liitokset"
 ],
 "NFS Support not installed": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nimi"
 ],
 "Name can not be empty.": [
  null,
  "Nimi ei voi olla tyhjä."
 ],
 "Name cannot be empty.": [
  null,
  "Nimi ei voi olla tyhjä."
 ],
 "Name cannot be longer than $0 bytes": [
  null,
  ""
 ],
 "Name cannot be longer than $0 characters": [
  null,
  ""
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  "Nimi voi sisältää enintään 127 merkkiä."
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "Nimi ei voi sisältää merkkiä '$0'."
 ],
 "Name cannot contain whitespace.": [
  null,
  ""
 ],
 "New NFS Mount": [
  null,
  "Uusi NFS-liitos"
 ],
 "New passphrase": [
  null,
  ""
 ],
 "Next": [
  null,
  "Seuraava"
 ],
 "No Filesystem": [
  null,
  "Ei tiedostojärjestelmää"
 ],
 "No Logical Volumes": [
  null,
  "Ei loogisia taltioita"
 ],
 "No NFS mounts set up": [
  null,
  ""
 ],
 "No available slots": [
  null,
  ""
 ],
 "No disks are available.": [
  null,
  "Levyjä ei ole saatavilla."
 ],
 "No drives attached": [
  null,
  ""
 ],
 "No free key slots": [
  null,
  ""
 ],
 "No free space": [
  null,
  "Ei vapaata tilaa"
 ],
 "No iSCSI targets set up": [
  null,
  ""
 ],
 "No keys added": [
  null,
  ""
 ],
 "No media inserted": [
  null,
  ""
 ],
 "No partitioning": [
  null,
  "Ei osiointia"
 ],
 "No storage set up as RAID": [
  null,
  ""
 ],
 "No storage set up as VDO": [
  null,
  ""
 ],
 "No volume groups created": [
  null,
  "Taltioryhmiä ei ole luotu"
 ],
 "Not enough space to grow.": [
  null,
  ""
 ],
 "Not found": [
  null,
  "Ei löytynyt"
 ],
 "Not mounted": [
  null,
  "Ei liitetty"
 ],
 "Not running": [
  null,
  "Ei käynnissä"
 ],
 "Off": [
  null,
  "Pois"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Old passphrase": [
  null,
  ""
 ],
 "On": [
  null,
  "Päällä"
 ],
 "Only $0 of $1 are used.": [
  null,
  ""
 ],
 "Operation '$operation' on $target": [
  null,
  ""
 ],
 "Options": [
  null,
  "Valinnat"
 ],
 "Other Devices": [
  null,
  "Muut laitteet"
 ],
 "Overwrite existing data with zeros": [
  null,
  ""
 ],
 "PackageKit crashed": [
  null,
  "PackageKit kaatui"
 ],
 "Partition": [
  null,
  "Osio"
 ],
 "Partition of $0": [
  null,
  ""
 ],
 "Partitioning": [
  null,
  "Osiointi"
 ],
 "Passphrase": [
  null,
  "Tunnuslause"
 ],
 "Passphrase cannot be empty": [
  null,
  "Tunnuslause ei voi olla tyhjä"
 ],
 "Passphrase removal may prevent unlocking $0.": [
  null,
  ""
 ],
 "Passphrases do not match": [
  null,
  "Tunnuslauseet eivät täsmää"
 ],
 "Password": [
  null,
  "Salasana"
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
 "Physical": [
  null,
  "Fyysinen"
 ],
 "Physical Volume": [
  null,
  "Fyysinen taltio"
 ],
 "Physical Volumes": [
  null,
  "Fyysiset taltiot"
 ],
 "Physical volume of $0": [
  null,
  ""
 ],
 "Physical volumes can not be resized here.": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  "Vahvista kohteen $0 poistaminen"
 ],
 "Please confirm stopping of $0": [
  null,
  "Vahvista kohteen $0 pysäyttäminen"
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
  "Portti"
 ],
 "Process": [
  null,
  ""
 ],
 "Purpose": [
  null,
  ""
 ],
 "RAID ($0)": [
  null,
  "RAID ($0)"
 ],
 "RAID 0": [
  null,
  "RAID 0"
 ],
 "RAID 0 (Stripe)": [
  null,
  ""
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  ""
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  ""
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  ""
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  ""
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  ""
 ],
 "RAID Device": [
  null,
  "RAID-laite"
 ],
 "RAID Device $0": [
  null,
  "RAID-laite $0"
 ],
 "RAID Devices": [
  null,
  "RAID-laitteet"
 ],
 "RAID Level": [
  null,
  "RAID-taso"
 ],
 "RAID Member": [
  null,
  "RAID-jäsen"
 ],
 "Reading": [
  null,
  ""
 ],
 "Reboot": [
  null,
  "Käynnistä uudelleen"
 ],
 "Recommended default": [
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
 "Removals:": [
  null,
  ""
 ],
 "Remove": [
  null,
  "Poista"
 ],
 "Remove $0?": [
  null,
  ""
 ],
 "Remove Tang keyserver": [
  null,
  ""
 ],
 "Remove device": [
  null,
  "Poista laite"
 ],
 "Remove passphrase": [
  null,
  ""
 ],
 "Remove passphrase in $0?": [
  null,
  ""
 ],
 "Removing $0": [
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
  "Nimeä uudelleen"
 ],
 "Rename Logical Volume": [
  null,
  "Nimeä uudelleen looginen taltio"
 ],
 "Rename Volume Group": [
  null,
  "Nimeä uudelleen taltioryhmä"
 ],
 "Renaming $target": [
  null,
  "Nimetään uudelleen $target"
 ],
 "Repairing $target": [
  null,
  "Korjataan $target"
 ],
 "Repeat passphrase": [
  null,
  ""
 ],
 "Resizing $target": [
  null,
  ""
 ],
 "Resizing an encrypted filesystem requires unlocking the disk. Please provide a current disk passphrase.": [
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
 "Save": [
  null,
  "Tallenna"
 ],
 "Save space by compressing individual blocks with LZ4": [
  null,
  ""
 ],
 "Save space by storing identical data blocks just once": [
  null,
  ""
 ],
 "Saving a new passphrase requires unlocking the disk. Please provide a current disk passphrase.": [
  null,
  ""
 ],
 "Securely erasing $target": [
  null,
  ""
 ],
 "Server": [
  null,
  "Palvelin"
 ],
 "Server Address": [
  null,
  "Palvelimen osoite"
 ],
 "Server address cannot be empty.": [
  null,
  "Palvelimen osoite ei voi olla tyhjä."
 ],
 "Server cannot be empty.": [
  null,
  "Palvelin ei voi olla tyhjä."
 ],
 "Service": [
  null,
  "Palvelu"
 ],
 "Session": [
  null,
  "Istunto"
 ],
 "Setting up loop device $target": [
  null,
  ""
 ],
 "Shrink": [
  null,
  ""
 ],
 "Shrink Logical Volume": [
  null,
  ""
 ],
 "Size": [
  null,
  "Koko"
 ],
 "Size cannot be negative": [
  null,
  "Koko ei  voi olla negatiivinen"
 ],
 "Size cannot be zero": [
  null,
  "Koko ei voi olla nolla"
 ],
 "Size is too large": [
  null,
  "Koko on liian suuri"
 ],
 "Size must be a number": [
  null,
  "Koon tulee olla numero"
 ],
 "Size must be at least $0": [
  null,
  "Koon tulee olla vähintään $0"
 ],
 "Slot $0": [
  null,
  ""
 ],
 "Spare": [
  null,
  ""
 ],
 "Start": [
  null,
  "Käynnistä"
 ],
 "Start Multipath": [
  null,
  "Käynnistä Multipath"
 ],
 "Starting RAID Device $target": [
  null,
  "Käynnistetään RAID-laite $target"
 ],
 "Starting swapspace $target": [
  null,
  ""
 ],
 "Stop": [
  null,
  "Pysäytä"
 ],
 "Stop Device": [
  null,
  "Pysäytä laite"
 ],
 "Stop and Unmount": [
  null,
  ""
 ],
 "Stop and remove": [
  null,
  "Pysäytä ja poista"
 ],
 "Stopping RAID Device $target": [
  null,
  "Pysäytetään RAID-laite $target"
 ],
 "Stopping swapspace $target": [
  null,
  ""
 ],
 "Storage": [
  null,
  "Tallennustila"
 ],
 "Storage Logs": [
  null,
  "Tallennustilan lokit"
 ],
 "Storage can not be managed on this system.": [
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
 "Support is installed.": [
  null,
  ""
 ],
 "Swap": [
  null,
  ""
 ],
 "Synchronizing RAID Device $target": [
  null,
  "Synkronoidaan RAID-laitetta $target"
 ],
 "Tang keyserver": [
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
 "The creation of this VDO device did not finish and the device can't be used.": [
  null,
  ""
 ],
 "The currently logged in user is not permitted to see information about keys.": [
  null,
  ""
 ],
 "The filesystem is in use by login sessions and system services. Proceeding will stop these.": [
  null,
  ""
 ],
 "The filesystem is in use by login sessions. Proceeding will stop these.": [
  null,
  ""
 ],
 "The filesystem is in use by system services. Proceeding will stop these.": [
  null,
  ""
 ],
 "The last disk of a RAID device cannot be removed.": [
  null,
  ""
 ],
 "The last key slot can not be removed": [
  null,
  ""
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "Käyttäjällä  <b>$0</b> ei ole oikeutta hallita tallennustilaa"
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
  "Tämä NFS-liitos on käytössä ja vain sen valintoja on mahdollista muokata."
 ],
 "This VDO device does not use all of its backing device.": [
  null,
  ""
 ],
 "This device has filesystems that are currently in use. Proceeding will unmount all filesystems on it.": [
  null,
  ""
 ],
 "This device is currently used for RAID devices.": [
  null,
  "Tätä laitetta käytetään parhaillaan RAID-laitteille."
 ],
 "This device is currently used for RAID devices. Proceeding will remove it from its RAID devices.": [
  null,
  ""
 ],
 "This device is currently used for VDO devices.": [
  null,
  "Tätä laitetta käytetään parhaillaan VDO-laitteille."
 ],
 "This device is currently used for volume groups.": [
  null,
  "Tätä laitetta käytetään parhaillaan taltioryhmille."
 ],
 "This device is currently used for volume groups. Proceeding will remove it from its volume groups.": [
  null,
  ""
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  ""
 ],
 "This volume needs to be activated before it can be resized.": [
  null,
  "Tämä taltio tulee aktivoida, ennen kuin sen kokoa voi muuttaa."
 ],
 "Total size: $0": [
  null,
  ""
 ],
 "Trust key": [
  null,
  ""
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
  "Palvelimeen ei saada yhteyttä"
 ],
 "Unable to remove mount": [
  null,
  ""
 ],
 "Unable to unmount filesystem": [
  null,
  ""
 ],
 "Unit": [
  null,
  "Yksikkö"
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
 "Unknown type": [
  null,
  ""
 ],
 "Unlock": [
  null,
  "Avaa"
 ],
 "Unlock at boot": [
  null,
  "Avaa käynnistyksen yhteydessä"
 ],
 "Unlock read only": [
  null,
  ""
 ],
 "Unlocking $target": [
  null,
  "Avataan $target"
 ],
 "Unlocking disk...": [
  null,
  ""
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
 "Unrecognized data can not be made smaller here.": [
  null,
  ""
 ],
 "Unsupported volume": [
  null,
  "Tukematon taltio"
 ],
 "Usage": [
  null,
  "Käyttö"
 ],
 "Use 512 Byte emulation": [
  null,
  ""
 ],
 "Used": [
  null,
  "Käytetty"
 ],
 "Username": [
  null,
  "Käyttäjätunnus"
 ],
 "VDO Backing": [
  null,
  ""
 ],
 "VDO Device": [
  null,
  "VDO-laite"
 ],
 "VDO Device $0": [
  null,
  "VDO-laite $0"
 ],
 "VDO Devices": [
  null,
  "VDO-laitteet"
 ],
 "VDO backing devices can not be made smaller": [
  null,
  ""
 ],
 "VDO support not installed": [
  null,
  ""
 ],
 "Verify key": [
  null,
  ""
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
  "Taltioryhmät"
 ],
 "Waiting for other software management operations to finish": [
  null,
  ""
 ],
 "Warning": [
  null,
  ""
 ],
 "What if tang-show-keys is not available?": [
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
 "iSCSI Targets": [
  null,
  "iSCSI-kohteet"
 ],
 "key slot $0": [
  null,
  ""
 ],
 "undefined": [
  null,
  "määrittämätön"
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
 "storage-id-desc\u0004VDO Backing": [
  null,
  ""
 ],
 "storage\u0004Drive": [
  null,
  "Levy"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Kiintolevy"
 ],
 "storage\u0004Optical Drive": [
  null,
  "Optinen asema"
 ],
 "storage\u0004Removable Drive": [
  null,
  ""
 ],
 "storage\u0004Solid-State Disk": [
  null,
  ""
 ],
 "format-bytes\u0004bytes": [
  null,
  "tavua"
 ]
}));
