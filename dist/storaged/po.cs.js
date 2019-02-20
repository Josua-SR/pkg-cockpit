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
nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2;
return plural;
},
  "language": "cs",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Block Device": [
  null,
  "$0 Blokové zařízení"
 ],
 "$0 Chunk Size": [
  null,
  "$0 Velikost bloku dat"
 ],
 "$0 Disks": [
  null,
  "$0 Disky"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  "$0 data + $1 režie využito z $2 ($3)"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 disk chybí",
  "$0 disky chybí",
  "$0 disků chybí"
 ],
 "$0 filesystems can not be made larger.": [
  null,
  "$0 souborových systémů nelze zvětšit."
 ],
 "$0 filesystems can not be made smaller.": [
  null,
  "$0 souborových systémů nelze zmenšit."
 ],
 "$0 filesystems can not be resized here.": [
  null,
  "$0 souborovým systémům nelze změnit velikost zde."
 ],
 "$0 is in active use": [
  null,
  "$0 je právě používáno"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 není k dispozici z žádného z repozitářů."
 ],
 "$0 of $1": [
  null,
  "$0 z $1"
 ],
 "$0 slots remain": [
  null,
  "$0 slotů zbývá"
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  "použito $0 z $1 ($2 ušetřeno)"
 ],
 "$0 will be installed.": [
  null,
  "$0 bude nainstalováno."
 ],
 "$0, $1 free": [
  null,
  "$0, $1 volné"
 ],
 "$name (from $host)": [
  null,
  "$name (z $host)"
 ],
 "${size} ${desc}": [
  null,
  "${size} ${desc}"
 ],
 "(default)": [
  null,
  "(výchozí)"
 ],
 "(none)": [
  null,
  "(žádné)"
 ],
 "--": [
  null,
  "–"
 ],
 "1 MiB": [
  null,
  "1 MiB"
 ],
 "1 day": [
  null,
  "1 den"
 ],
 "1 hour": [
  null,
  "1 hodina"
 ],
 "1 week": [
  null,
  "1 týden"
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
  "5 minut"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6 hodin"
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
  "Je zapotřebí disk."
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  "Před odebráním tohoto disku je třeba přidat náhradní."
 ],
 "Activate": [
  null,
  "Aktivovat"
 ],
 "Activating $target": [
  null,
  "Aktivuje se $target"
 ],
 "Active since": [
  null,
  "Aktivní od"
 ],
 "Add": [
  null,
  "Přidat"
 ],
 "Add Disks": [
  null,
  "Přidat disky"
 ],
 "Add Key": [
  null,
  "Přidat klíč"
 ],
 "Add iSCSI Portal": [
  null,
  "Přidat iSCSI portál"
 ],
 "Adding physical volume to $target": [
  null,
  "Přidává se fyzický svazek do $target"
 ],
 "Additional packages:": [
  null,
  "Další balíčky:"
 ],
 "Address": [
  null,
  "Adresa"
 ],
 "Address cannot be empty": [
  null,
  "Adresu je třeba vyplnit"
 ],
 "Address is not a valid URL": [
  null,
  "Do adresy nebyla vyplněná platná URL"
 ],
 "Apply": [
  null,
  "Použít"
 ],
 "At least $0 disks are needed.": [
  null,
  "Je vyžadováno alespoň $0 disků."
 ],
 "At least one disk is needed.": [
  null,
  "Je vyžadován alespoň 1 disk."
 ],
 "Authentication required": [
  null,
  "Nutné ověření"
 ],
 "Available targets on $0": [
  null,
  "Cíle dostupné na $0"
 ],
 "Backing Device": [
  null,
  "Podkladové zařízení"
 ],
 "Block": [
  null,
  "Blok"
 ],
 "Block device for filesystems": [
  null,
  "Blokové zařízení pro souborové systémy"
 ],
 "Blocked": [
  null,
  "Blokované"
 ],
 "Can't delete while unlocked": [
  null,
  "Nelze smazat neuzamčený"
 ],
 "Cancel": [
  null,
  "Storno"
 ],
 "Change": [
  null,
  "Změnit"
 ],
 "Change iSCSI Initiator Name": [
  null,
  "Změnit název iSCSI iniciátoru"
 ],
 "Change passphrase": [
  null,
  "Změnit heslovou frázi"
 ],
 "Checking $target": [
  null,
  "Ověřuje se $target"
 ],
 "Checking RAID Device $target": [
  null,
  "Ověřuje se RAID zařízení $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "Kontroluje a opravuje se RAID zařízení $target"
 ],
 "Checking installed software": [
  null,
  "Zjišťuje se nainstalovaný sofware"
 ],
 "Chunk Size": [
  null,
  "Velikost bloku"
 ],
 "Cleaning up for $target": [
  null,
  "Čištění pro $target"
 ],
 "Close": [
  null,
  "Zavřít"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "Kompatibilní se všemi systémy a zařízeními (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "Kompatibilní s moderním systémem a pevnými disky > 2TB (GPT)"
 ],
 "Compression": [
  null,
  "Komprese"
 ],
 "Confirm passphrase": [
  null,
  "Potvrdit heslovou frázi"
 ],
 "Confirm removal with passphrase": [
  null,
  "Potvrdit odebrání pomocí heslové fráze"
 ],
 "Content": [
  null,
  "Obsah"
 ],
 "Create": [
  null,
  "Vytvořit"
 ],
 "Create Logical Volume": [
  null,
  "Vytvořit logický svazek"
 ],
 "Create Partition": [
  null,
  "Vytvořit oddíl"
 ],
 "Create RAID Device": [
  null,
  "Vytvořit RAID zařízení"
 ],
 "Create Snapshot": [
  null,
  "Pořídit zachycený stav"
 ],
 "Create Thin Volume": [
  null,
  "Vytvořit tenký svazek"
 ],
 "Create VDO Device": [
  null,
  "Vytvořit VDO zařízení"
 ],
 "Create Volume Group": [
  null,
  "Vytvořit skupinu svazků"
 ],
 "Create new Logical Volume": [
  null,
  "Vytvořit nový logický svazek"
 ],
 "Create partition": [
  null,
  "Vytvořit oddíl"
 ],
 "Create partition on $0": [
  null,
  "Vytvořit oddíl na $0"
 ],
 "Create partition table": [
  null,
  "Vytvořit tabulku rozdělení úložiště"
 ],
 "Creating RAID Device $target": [
  null,
  "Vytváří se RAID zařízení $target"
 ],
 "Creating filesystem on $target": [
  null,
  "Vytváří se souborový systém na $target"
 ],
 "Creating logical volume $target": [
  null,
  "Vytváří se logický svazek $target"
 ],
 "Creating partition $target": [
  null,
  "Vytváří se oddíl $target"
 ],
 "Creating snapshot of $target": [
  null,
  "Pořizování zachyceného stavu $target"
 ],
 "Creating volume group $target": [
  null,
  "Vytváření skupiny svazků $target"
 ],
 "Custom": [
  null,
  "Uživatelsky určené"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "Uživatelsky určené (zadejte typ souborového systému)"
 ],
 "Custom encryption options": [
  null,
  "Uživatelsky určené předvolby šifrování"
 ],
 "Custom mount option": [
  null,
  "Uživatelsky určená předvolba připojení"
 ],
 "Custom mount options": [
  null,
  "Uživatelsky určené předvolby připojení"
 ],
 "DISK IS FAILING": [
  null,
  "DISK SELHÁVÁ"
 ],
 "Data Used": [
  null,
  "Využito dat"
 ],
 "Deactivate": [
  null,
  "Deaktivovat"
 ],
 "Deactivating $target": [
  null,
  "Deaktivuje se $target"
 ],
 "Deduplication": [
  null,
  "Deduplikace"
 ],
 "Default": [
  null,
  "Výchozí"
 ],
 "Delete": [
  null,
  "Smazat"
 ],
 "Deleting $target": [
  null,
  "Maže se $target"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "Smazání RAID zařízení vymaže veškerá data, která se na něm nacházejí."
 ],
 "Deleting a VDO device will erase all data on it.": [
  null,
  "Smazání VDO zařízení vymaže veškerá data na něm."
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "Smazání logického svazku vymaže veškerá data na něm."
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "Smazání oddílu vymaže veškerá data v něm."
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "Smazání skupiny svazků vymaže veškerá data v ní."
 ],
 "Deleting volume group $target": [
  null,
  "Maže se skupina svazků $target"
 ],
 "Device File": [
  null,
  "Soubor představující zařízení"
 ],
 "Device is read-only": [
  null,
  "Zařízení je pouze pro čtení"
 ],
 "Disk": [
  null,
  "Disk"
 ],
 "Disk is OK": [
  null,
  "Disk je OK"
 ],
 "Disk passphrase": [
  null,
  "Heslová fráze k disku"
 ],
 "Disks": [
  null,
  "Disky"
 ],
 "Don't overwrite existing data": [
  null,
  "Nepřepisovat existující data"
 ],
 "Downloading $0": [
  null,
  "Stahuje se $0"
 ],
 "Drive": [
  null,
  "Jednotka"
 ],
 "Drives": [
  null,
  "Jednotky"
 ],
 "Edit": [
  null,
  "Upravit"
 ],
 "Edit Tang keyserver": [
  null,
  "Upravit Tang server s klíči"
 ],
 "Editing a key requires a free slot": [
  null,
  "K upravení klíče je zapotřebí volného slotu"
 ],
 "Ejecting $target": [
  null,
  "Vysouvání $target"
 ],
 "Emptying $target": [
  null,
  "Vyprazdňuje se $target"
 ],
 "Encrypted $0": [
  null,
  "Šifrované $0"
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "Šifrované EXT4 (LUKS)"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "Šifrovaný logický svazek na $0"
 ],
 "Encrypted Partition of $0": [
  null,
  "Šifrovaný oddíl na $0"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "Šifrované XFS (LUKS)"
 ],
 "Encrypted volumes can not be resized here.": [
  null,
  "Zde není možné upravovat velikost šifrovaných svazků."
 ],
 "Encrypted volumes need to be unlocked before they can be resized.": [
  null,
  "Šifrované svazky je třeba před změnou velikosti odemknout."
 ],
 "Encryption": [
  null,
  "Šifrování"
 ],
 "Encryption Options": [
  null,
  "Volby šifrování"
 ],
 "Erase": [
  null,
  "Smazat"
 ],
 "Erasing $target": [
  null,
  "Vymazává se $target"
 ],
 "Error": [
  null,
  "Chyba"
 ],
 "Extended Partition": [
  null,
  "Rozšířený oddíl"
 ],
 "FAILED": [
  null,
  "NEZDAŘILO SE"
 ],
 "Filesystem": [
  null,
  "Souborový systém"
 ],
 "Filesystem Mounting": [
  null,
  "Připojování souborového systému"
 ],
 "Filesystem Name": [
  null,
  "Název souborového systému"
 ],
 "Filesystem type": [
  null,
  "Typ souborového systému"
 ],
 "Filesystems": [
  null,
  "Souborové systémy"
 ],
 "For legacy applications only. Reduces performance.": [
  null,
  "Pouze pro staré aplikace. Snižuje výkon."
 ],
 "Force remove passphrase in $0": [
  null,
  "Vynutit odebrání heslové fráze v $0"
 ],
 "Format": [
  null,
  "Formát"
 ],
 "Format $0": [
  null,
  "Naformátovat $0"
 ],
 "Format Disk $0": [
  null,
  "Naformátovat disk $0"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "Formátování disku vymaže všechna data, která na něm nyní jsou."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "Formátování úložného zařízení vymaže všechna data, která na něm nyní jsou."
 ],
 "Free": [
  null,
  "Volno"
 ],
 "Free Space": [
  null,
  "Volné místo"
 ],
 "Free up space in this group: Shrink or delete other logical volumes or add another physical volume.": [
  null,
  "Uvolněte prostor v této skupině: zmenšete nebo smažte nějaké logické svazky nebo přidejte fyzický svazek."
 ],
 "Go to now": [
  null,
  "Přejít na nyní"
 ],
 "Grow": [
  null,
  "Zvětšit"
 ],
 "Grow Logical Volume": [
  null,
  "Zvětšit logický svazek"
 ],
 "Grow logical size of $0": [
  null,
  "Zvětšit logickou velikost $0"
 ],
 "Grow to take all space": [
  null,
  "Zvětšit a využít veškerý dostupný prostor"
 ],
 "If tang-show-keys is not available, run the following:": [
  null,
  "Pokud tang-show-keys není k dispozici, spusťte následující:"
 ],
 "In Sync": [
  null,
  "Synchronní"
 ],
 "Inactive volume": [
  null,
  "Neaktivní svazek"
 ],
 "Index Memory": [
  null,
  "Paměť indexu"
 ],
 "Install": [
  null,
  "Nainstalovat"
 ],
 "Install NFS Support": [
  null,
  "Nainstalovat podporu pro NFS"
 ],
 "Install Software": [
  null,
  "Nainstalovat software"
 ],
 "Install VDO support": [
  null,
  "Nainstalovat podporu pro VDO"
 ],
 "Installing $0": [
  null,
  "Instaluje se $0"
 ],
 "Invalid username or password": [
  null,
  "Neplatné uživatelské jméno a heslo"
 ],
 "Jobs": [
  null,
  "Úlohy"
 ],
 "Key slots with unknown types can not be edited here": [
  null,
  "Sloty klíčů s neznámým typem zde není možné upravovat"
 ],
 "Key source": [
  null,
  "Zdroj klíče"
 ],
 "Keys": [
  null,
  "Klíče"
 ],
 "Keyserver": [
  null,
  "Server s klíči"
 ],
 "Keyserver address": [
  null,
  "Adresa serveru s klíči"
 ],
 "Keyserver removal may prevent unlocking $0.": [
  null,
  "Odebrání serveru s klíči může zabránit odemčení $0."
 ],
 "Local Mount Point": [
  null,
  "Místní přípojný bod"
 ],
 "Lock": [
  null,
  "Uzamknout"
 ],
 "Locking $target": [
  null,
  "Uzamyká se $target"
 ],
 "Logical": [
  null,
  "Logický"
 ],
 "Logical Size": [
  null,
  "Logická velikost"
 ],
 "Logical Volume": [
  null,
  "Logický svazek"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "Logický svazek (zachycený stav)"
 ],
 "Logical Volume of $0": [
  null,
  "Logický svazek na $0"
 ],
 "Make sure the key hash from the Tang server matches:": [
  null,
  "Ověřte, že otisk klíče z Tang serveru odpovídá:"
 ],
 "Manually check with SSH: ": [
  null,
  "Zkontrolovat ručně s SSH:"
 ],
 "Marking $target as faulty": [
  null,
  "Označování $target jako vadný"
 ],
 "Member of RAID Device": [
  null,
  "Člen RAID zařízení"
 ],
 "Member of RAID Device $0": [
  null,
  "Člen RAID zařízení $0"
 ],
 "Metadata Used": [
  null,
  "Využito metadat"
 ],
 "Modifying $target": [
  null,
  "Upravuje se $target"
 ],
 "Mount": [
  null,
  "Připojit (mount)"
 ],
 "Mount Options": [
  null,
  "Předvolby připojení"
 ],
 "Mount Point": [
  null,
  "Přípojný bod"
 ],
 "Mount at boot": [
  null,
  "Připojit při startu"
 ],
 "Mount options": [
  null,
  "Předvolby připojení"
 ],
 "Mount point can not be empty": [
  null,
  "Přípojný bod je třeba vyplnit"
 ],
 "Mount point cannot be empty.": [
  null,
  "Přípojný bod je třeba vyplnit."
 ],
 "Mount point must start with \"/\".": [
  null,
  "Je třeba, aby popis přípojného bodu začínal na „/“."
 ],
 "Mount read only": [
  null,
  "Připojit pouze pro čtení"
 ],
 "Mounted At": [
  null,
  "Připojeno v"
 ],
 "Mounting": [
  null,
  "Připojování"
 ],
 "Mounting $target": [
  null,
  "Připojování $target"
 ],
 "NFS Mount": [
  null,
  "NFS připojení"
 ],
 "NFS Mounts": [
  null,
  "NFS připojení"
 ],
 "NFS Support not installed": [
  null,
  "Podpora pro NFS není nainstalovaná"
 ],
 "NTFS - Compatible with most systems": [
  null,
  "NTFS – kompatibilní s většinou systémů"
 ],
 "Name": [
  null,
  "Název"
 ],
 "Name can not be empty.": [
  null,
  "Název je třeba vyplnit."
 ],
 "Name cannot be empty.": [
  null,
  "Název je třeba vyplnit."
 ],
 "Name cannot be longer than $0 bytes": [
  null,
  "Název nemůže být delší než $0 bajtů"
 ],
 "Name cannot be longer than $0 characters": [
  null,
  "Název nemůže být delší než $0 znaků"
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  "Název nemůže být delší než 127 znaků."
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "Název nemůže obsahovat znak „$0“."
 ],
 "Name cannot contain whitespace.": [
  null,
  "Název nemůže obsahovat prázdné znaky."
 ],
 "New NFS Mount": [
  null,
  "Nové NFS připojení"
 ],
 "New passphrase": [
  null,
  "Nová heslová fráze"
 ],
 "Next": [
  null,
  "Další"
 ],
 "No Filesystem": [
  null,
  "Žádný souborový systém"
 ],
 "No Logical Volumes": [
  null,
  "Žádné logické svazky"
 ],
 "No NFS mounts set up": [
  null,
  "Nejsou nastavená žádná NFS připojení"
 ],
 "No available slots": [
  null,
  "Nejsou k dispozici žádné sloty"
 ],
 "No disks are available.": [
  null,
  "Nejsou k dispozici žádné disky."
 ],
 "No drives attached": [
  null,
  "Nejsou připojené žádné jednotky"
 ],
 "No free key slots": [
  null,
  "Žádné volné sloty klíčů"
 ],
 "No free space": [
  null,
  "Žádné volné místo"
 ],
 "No iSCSI targets set up": [
  null,
  "Nejsou nastavené žádné iSCSI cíle"
 ],
 "No keys added": [
  null,
  "Nepřidány žádné klíče"
 ],
 "No media inserted": [
  null,
  "Není vloženo žádné médium"
 ],
 "No partitioning": [
  null,
  "Žádný oddíl"
 ],
 "No storage set up as RAID": [
  null,
  "Žádné úložiště nastavené jako RAID"
 ],
 "No storage set up as VDO": [
  null,
  "Žádné úložiště nastavené jako VDO"
 ],
 "No volume groups created": [
  null,
  "Nejsou vytvořené žádné skupiny svazků"
 ],
 "Not enough space to grow.": [
  null,
  "Pro zvětšení není k dispozici dostatek prostoru."
 ],
 "Not found": [
  null,
  "Nenalezeno"
 ],
 "Not mounted": [
  null,
  "Nepřipojeno"
 ],
 "Not running": [
  null,
  "Není spuštěné"
 ],
 "Off": [
  null,
  "Vypnuto"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Old passphrase": [
  null,
  "Původní heslová fráze"
 ],
 "On": [
  null,
  "Zapnuto"
 ],
 "Only $0 of $1 are used.": [
  null,
  "Je použito pouze $0 z $1."
 ],
 "Operation '$operation' on $target": [
  null,
  "Operace „$operation“ na $target"
 ],
 "Options": [
  null,
  "Přepínače"
 ],
 "Other Devices": [
  null,
  "Ostatní zařízení"
 ],
 "Overwrite existing data with zeros": [
  null,
  "Přepsat existující data nulami"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit zhavaroval"
 ],
 "Partition": [
  null,
  "Oddíl"
 ],
 "Partition of $0": [
  null,
  "Oddíl na $0"
 ],
 "Partitioning": [
  null,
  "Vytváření oddílů"
 ],
 "Passphrase": [
  null,
  "Heslo"
 ],
 "Passphrase cannot be empty": [
  null,
  "Heslovou frázi je třeba vyplnit"
 ],
 "Passphrase removal may prevent unlocking $0.": [
  null,
  "Odebrání heslové fráze může bránit odemknutí $0."
 ],
 "Passphrases do not match": [
  null,
  "Zadání heslové fráze se neshodují"
 ],
 "Password": [
  null,
  "Heslo"
 ],
 "Path on Server": [
  null,
  "Popis umístění na serveru"
 ],
 "Path on server cannot be empty.": [
  null,
  "Popis umístění na serveru je třeba vyplnit."
 ],
 "Path on server must start with \"/\".": [
  null,
  "Je třeba, aby popis umístění na serveru začínal na „/“."
 ],
 "Physical": [
  null,
  "Fyzické"
 ],
 "Physical Volume": [
  null,
  "Fyzický svazek"
 ],
 "Physical Volumes": [
  null,
  "Fyzické svazky"
 ],
 "Physical volume of $0": [
  null,
  "Fyzický svazek od $0"
 ],
 "Physical volumes can not be resized here.": [
  null,
  "Zde není možné měnit velikost fyzických svazků."
 ],
 "Please confirm deletion of $0": [
  null,
  "Potvrďte smazání $0"
 ],
 "Please confirm stopping of $0": [
  null,
  "Potvrďte zastavení $0"
 ],
 "Pool": [
  null,
  "Úložiště"
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "Fond pro thin logické svazky"
 ],
 "Pool for Thin Volumes": [
  null,
  "Fond pro thin svazky"
 ],
 "Pool for thinly provisioned volumes": [
  null,
  "Fond pro tence poskytované svazky"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Process": [
  null,
  "Proces"
 ],
 "Purpose": [
  null,
  "Účel"
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
  "RAID 0 (proužkování)"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (zrcadlení)"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RAID 10 (proužkování zrcadel)"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (vyhrazená parita)"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (distribuovaná parita)"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (dvojitá distribuovaná parita)"
 ],
 "RAID Device": [
  null,
  "RAID zařízení"
 ],
 "RAID Device $0": [
  null,
  "RAID zařízení $0"
 ],
 "RAID Devices": [
  null,
  "RAID zařízení"
 ],
 "RAID Level": [
  null,
  "RAID úroveň"
 ],
 "RAID Member": [
  null,
  "Člen RAID"
 ],
 "Reading": [
  null,
  "Čtení"
 ],
 "Reboot": [
  null,
  "Restartovat"
 ],
 "Recovering": [
  null,
  "Zotavování"
 ],
 "Recovering RAID Device $target": [
  null,
  "Zotavování RAID zařízení $target"
 ],
 "Removals:": [
  null,
  "Odebrání:"
 ],
 "Remove": [
  null,
  "Odebrat"
 ],
 "Remove $0?": [
  null,
  "Odebrat $0?"
 ],
 "Remove Tang keyserver": [
  null,
  "Odebrat Tang server s klíči"
 ],
 "Remove device": [
  null,
  "Odebrat zařízení"
 ],
 "Remove passphrase": [
  null,
  "Odebrat heslovou frázi"
 ],
 "Remove passphrase in $0?": [
  null,
  "Odebrat heslovou frázi v $0?"
 ],
 "Removing $0": [
  null,
  "Odebírá se $0"
 ],
 "Removing $target from RAID Device": [
  null,
  "Odebírání $target z RAID zařízení"
 ],
 "Removing physical volume from $target": [
  null,
  "Odebírání fyzického svazku z $target"
 ],
 "Rename": [
  null,
  "Přejmenovat"
 ],
 "Rename Logical Volume": [
  null,
  "Přejmenovat logický svazek"
 ],
 "Rename Volume Group": [
  null,
  "Přejmenovat skupinu svazků"
 ],
 "Renaming $target": [
  null,
  "Přejmenovává se $target"
 ],
 "Repairing $target": [
  null,
  "Opravuje se $target"
 ],
 "Repeat passphrase": [
  null,
  "Zopakovat heslovou frázi"
 ],
 "Resizing $target": [
  null,
  "Mění se velikost $target"
 ],
 "Running": [
  null,
  "Spuštěné"
 ],
 "SMART self-test of $target": [
  null,
  "SMART samotest $target"
 ],
 "Save": [
  null,
  "Uložit"
 ],
 "Save space by compressing individual blocks with LZ4": [
  null,
  "Šetřit prostorem komprimováním jednotlivých bloků pomocí LZ4"
 ],
 "Save space by storing identical data blocks just once": [
  null,
  "Šetřit prostorem tím, že stejné bloky dat budou ukládány pouze jednou"
 ],
 "Saving a new passphrase requires unlocking the disk. Please provide a current disk passphrase.": [
  null,
  "Uložení nové heslové fráze vyžaduje odemknutí disku. Zadejte stávající heslovou frázi k disku."
 ],
 "Securely erasing $target": [
  null,
  "Jisté vymazávání $target"
 ],
 "Server": [
  null,
  "Server"
 ],
 "Server Address": [
  null,
  "Adresa serveru"
 ],
 "Server address cannot be empty.": [
  null,
  "Adresu serveru je třeba vyplnit."
 ],
 "Server cannot be empty.": [
  null,
  "Server je třeba vyplnit."
 ],
 "Service": [
  null,
  "Služba"
 ],
 "Session": [
  null,
  "Sezení"
 ],
 "Setting up loop device $target": [
  null,
  "Nastavování zařízení zpětné smyčky $target"
 ],
 "Shrink": [
  null,
  "Zmenšit"
 ],
 "Shrink Logical Volume": [
  null,
  "Zmenšit logický svazek"
 ],
 "Size": [
  null,
  "Velikost"
 ],
 "Size cannot be negative": [
  null,
  "Velikost nemůže být záporná"
 ],
 "Size cannot be zero": [
  null,
  "Velikost nemůže být nula"
 ],
 "Size is too large": [
  null,
  "Příliš velké"
 ],
 "Size must be a number": [
  null,
  "Je třeba, aby velikost byla číslo"
 ],
 "Size must be at least $0": [
  null,
  "Je třeba, aby velikost byla alespoň $0"
 ],
 "Slot $0": [
  null,
  "Slot $0"
 ],
 "Spare": [
  null,
  "Náhradní"
 ],
 "Start": [
  null,
  "Spustit"
 ],
 "Start Multipath": [
  null,
  "Spustit multipath"
 ],
 "Starting RAID Device $target": [
  null,
  "Spouštění RAID zařízení $target"
 ],
 "Starting swapspace $target": [
  null,
  "Spouštění odkládacího prostoru $target"
 ],
 "Stop": [
  null,
  "Zastavit"
 ],
 "Stop Device": [
  null,
  "Zastavit zařízení"
 ],
 "Stop and Unmount": [
  null,
  "Zastavit a odpojit"
 ],
 "Stop and remove": [
  null,
  "Zastavit a odebrat"
 ],
 "Stopping RAID Device $target": [
  null,
  "Zastavování RAID zařízení $target"
 ],
 "Stopping swapspace $target": [
  null,
  "Zastavování odkládacího prostoru $target"
 ],
 "Storage": [
  null,
  "Úložiště"
 ],
 "Storage Logs": [
  null,
  "Záznamy událostí úložiště"
 ],
 "Storage can not be managed on this system.": [
  null,
  "Úložiště není na tomto systému možné spravovat."
 ],
 "Store passphrase": [
  null,
  "Uložit heslovou frázi"
 ],
 "Stored Passphrase": [
  null,
  "Uložená heslová fráze"
 ],
 "Stored passphrase": [
  null,
  "Uložená heslová fráze"
 ],
 "Support is installed.": [
  null,
  "Podpora je nainstalovaná."
 ],
 "Swap": [
  null,
  "Odkládací oddíl"
 ],
 "Synchronizing RAID Device $target": [
  null,
  "Synchronizuje se RAID zařízení $target"
 ],
 "Tang keyserver": [
  null,
  "Tang server s klíči"
 ],
 "The RAID Array is in a degraded state": [
  null,
  "RAID pole je v degradovaném stavu"
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  "Aby bylo možné přidávat náhradní disky je třeba, aby RAID zařízení bylo spuštěné."
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  "Aby bylo možné odebírat disky je třeba, aby RAID zařízení bylo spuštěné."
 ],
 "The creation of this VDO device did not finish and the device can't be used.": [
  null,
  "Vytváření tohoto VDO zařízení není dokončeno a proto ho nelze použít."
 ],
 "The currently logged in user is not permitted to see information about keys.": [
  null,
  "Stávající uživatel není oprávněn zobrazovat informace o klíčích."
 ],
 "The filesystem is in use by login sessions and system services. Proceeding will stop these.": [
  null,
  "Souborový systém je používán přihlašovacími sezeními a systémovými službami. Pokračování je zastaví."
 ],
 "The filesystem is in use by login sessions. Proceeding will stop these.": [
  null,
  "Souborový systém je používán přihlašovacími sezeními. Pokračování je zastaví."
 ],
 "The filesystem is in use by system services. Proceeding will stop these.": [
  null,
  "Souborový systém je používán systémovými službami. Pokračování je zastaví."
 ],
 "The last disk of a RAID device cannot be removed.": [
  null,
  "Poslední zbývající disk RAID zařízení není možné odebrat."
 ],
 "The last key slot can not be removed": [
  null,
  "Poslední zbývající slot klíče není možné odebrat"
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  "Poslední zbývající fyzický svazek skupiny svazků není možné odebrat."
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "Uživatel <b>$0</b> není oprávněn spravovat úložiště"
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  "V systému jsou zařízení s vícero cestami, ale služba multipath není spuštěná."
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  "Pro odebrání tohoto fyzického svazku není k dispozici dostatek volného místa. Je třeba alespoň $0 dalšího volného prostoru."
 ],
 "Thin Logical Volume": [
  null,
  "Tenký logický svazek"
 ],
 "This NFS mount is in use and only its options can be changed.": [
  null,
  "Toto NFS připojení je používáno a měnit je možné jen jeho volby."
 ],
 "This VDO device does not use all of its backing device.": [
  null,
  "Toto VDO zařízení nepoužívá ze svého podkladového zařízení vše."
 ],
 "This device has filesystems that are currently in use. Proceeding will unmount all filesystems on it.": [
  null,
  "Na tomto zařízení se nacházejí souborové systémy, které jsou v tuto chvíli používány. Pokračování je odpojí."
 ],
 "This device is currently used for RAID devices.": [
  null,
  "Toto zařízení je v tuto chvíli používáno pro RAID zařízení."
 ],
 "This device is currently used for RAID devices. Proceeding will remove it from its RAID devices.": [
  null,
  "Toto zařízení je v tuto chvíli používáno pro RAID zařízení. Pokračování ho z nich odebere."
 ],
 "This device is currently used for VDO devices.": [
  null,
  "Toto zařízení je v tuto chvíli používáno pro VDO zařízení."
 ],
 "This device is currently used for volume groups.": [
  null,
  "Toto zařízení je v tuto chvíli používáno ve skupinách svazků."
 ],
 "This device is currently used for volume groups. Proceeding will remove it from its volume groups.": [
  null,
  "Toto zařízení je v tuto chvíli používáno ve skupinách svazků. Pokračování ho odebere z jeho skupin svazků."
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  "Disk není možné vyjmout v průběhu zotavování zařízení."
 ],
 "This volume needs to be activated before it can be resized.": [
  null,
  "Než bude možné změnit jeho velikost je třeba, aby tento svazek byl aktivován."
 ],
 "Total size: $0": [
  null,
  "Celková velikost: $0"
 ],
 "Trust key": [
  null,
  "Důvěryhodný klíč"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "UUID": [
  null,
  "UUID:"
 ],
 "Unable to reach server": [
  null,
  "Server se nedaří dosáhnout"
 ],
 "Unable to remove mount": [
  null,
  "Účet se nedaří odebrat"
 ],
 "Unable to unmount filesystem": [
  null,
  "Nedaří se odpojit souborový systém"
 ],
 "Unit": [
  null,
  "Jednotka"
 ],
 "Unknown": [
  null,
  "Neznámé"
 ],
 "Unknown ($0)": [
  null,
  "Neznámé ($0)"
 ],
 "Unknown host name": [
  null,
  "Neznámý název stroje"
 ],
 "Unknown type": [
  null,
  "Neznámý typ"
 ],
 "Unlock": [
  null,
  "Odemknout"
 ],
 "Unlock at boot": [
  null,
  "Odemknout při startu systému"
 ],
 "Unlock read only": [
  null,
  "Odemknout pouze pro čtení"
 ],
 "Unlocking $target": [
  null,
  "Odemyká se $target"
 ],
 "Unlocking disk...": [
  null,
  "Odemykání disku…"
 ],
 "Unmount": [
  null,
  "Odpojit"
 ],
 "Unmounting $target": [
  null,
  "Odpojování $target"
 ],
 "Unrecognized Data": [
  null,
  "Nerozpoznaná data"
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  "Nerozpoznaná data zde nelze zmenšit."
 ],
 "Unsupported volume": [
  null,
  "Nepodporovaný svazek"
 ],
 "Usage": [
  null,
  "Použití"
 ],
 "Use 512 Byte emulation": [
  null,
  "Použít emulaci 512 bajtů"
 ],
 "Used": [
  null,
  "Využito"
 ],
 "Username": [
  null,
  "Uživatelské jméno"
 ],
 "VDO Backing": [
  null,
  "Podklad pro VDO"
 ],
 "VDO Device": [
  null,
  "VDO zařízení"
 ],
 "VDO Device $0": [
  null,
  "VDO zařízení $0"
 ],
 "VDO Devices": [
  null,
  "VDO zařízení"
 ],
 "VDO backing devices can not be made smaller": [
  null,
  "Zařízení, která jsou podkladem pro VDO, není možné zmenšovat"
 ],
 "VDO support not installed": [
  null,
  "Podpora pro VDO není nainstalovaná"
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  "VFAT – kompatibilní se všemi systémy a zařízeními"
 ],
 "Verify key": [
  null,
  "Ověřit klíč"
 ],
 "Very securely erasing $target": [
  null,
  "Velmi jisté vymazávání $target"
 ],
 "Volume": [
  null,
  "Svazek"
 ],
 "Volume Group": [
  null,
  "Skupina oddílů"
 ],
 "Volume Group $0": [
  null,
  "Skupina svazků $0"
 ],
 "Volume Groups": [
  null,
  "Skupiny svazků"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Čeká se na dokončení ostatních operací správy balíčků"
 ],
 "What if tang-show-keys is not available?": [
  null,
  "Co když příkaz tang-show-keys není k dispozici?"
 ],
 "Write-mostly": [
  null,
  "Převážně zápis"
 ],
 "Writing": [
  null,
  "Zapisování"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS – výchozí pro Red Hat Enterprise Linux 7"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 bajtů binárních dat]"
 ],
 "[binary data]": [
  null,
  "[binarní data]"
 ],
 "[no data]": [
  null,
  "[žádná data]"
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4 – výchozí v Red Hat Enterprise Linux 6"
 ],
 "iSCSI Targets": [
  null,
  "iSCSI cíle"
 ],
 "key slot $0": [
  null,
  "slot pro klíč $0"
 ],
 "undefined": [
  null,
  "nedefinované"
 ],
 "unknown target": [
  null,
  "neznámý cíl"
 ],
 "unpartitioned space on $0": [
  null,
  "nerozdělené místo na $0"
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 Souborový systém"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  "Šifrovaná data"
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "Ostatní data"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "Odkládací prostor"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "Nerozpoznaná data"
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  "Podklad pro VDO"
 ],
 "storage\u0004Drive": [
  null,
  "Jednotka"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Pevný disk"
 ],
 "storage\u0004Optical Drive": [
  null,
  "Mechanika optických disků"
 ],
 "storage\u0004Removable Drive": [
  null,
  "Vyjímatelná jednotka"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "Jednotka bez pohyblivých částí"
 ],
 "format-bytes\u0004bytes": [
  null,
  "bajtů"
 ]
}));
