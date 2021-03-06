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
  "language": "sv",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Block Device": [
  null,
  "$0 blockenhet"
 ],
 "$0 Chunk Size": [
  null,
  "$0 styckesstorlek"
 ],
 "$0 Disks": [
  null,
  "$0 diskar"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  "$0 data + $1 överskjutande använt av $2 ($3)"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 disk saknas",
  "$0 diskar saknas"
 ],
 "$0 filesystems can not be made larger.": [
  null,
  "$0 filsystem kan inte göras större."
 ],
 "$0 filesystems can not be made smaller.": [
  null,
  "$0 filsystem kan inte göras mindre."
 ],
 "$0 filesystems can not be resized here.": [
  null,
  "$0 filsystem kan inte storleksändras här."
 ],
 "$0 is in active use": [
  null,
  "$0 används aktivt"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 är inte tillgängligt från något förråd."
 ],
 "$0 of $1": [
  null,
  "$0 av $1"
 ],
 "$0 slots remain": [
  null,
  "$0 fack återstår"
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  "$0 använt av $1 ($2 sparat)"
 ],
 "$0 will be installed.": [
  null,
  "$0 kommer att installeras."
 ],
 "$0, $1 free": [
  null,
  "$0, $1 fritt"
 ],
 "$name (from $host)": [
  null,
  "$name (från $host)"
 ],
 "${size} ${desc}": [
  null,
  "${size} ${desc}"
 ],
 "(default)": [
  null,
  "(standard)"
 ],
 "(none)": [
  null,
  "(ingen)"
 ],
 "--": [
  null,
  "—"
 ],
 "1 MiB": [
  null,
  "1 MiB"
 ],
 "1 day": [
  null,
  "1 dag"
 ],
 "1 hour": [
  null,
  "1 timma"
 ],
 "1 week": [
  null,
  "1 vecka"
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
  "5 minuter"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6 timmar"
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
  "En disk behövs."
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  "En reservdisk behöver läggas till först före denna disk kan tas bort."
 ],
 "Activate": [
  null,
  "Aktivera"
 ],
 "Activating $target": [
  null,
  "Aktivera $target"
 ],
 "Active since": [
  null,
  "Aktivt sedan"
 ],
 "Add": [
  null,
  "Lägg till"
 ],
 "Add Disks": [
  null,
  "Lägg till diskar"
 ],
 "Add Key": [
  null,
  "Lägg till nyckel"
 ],
 "Add iSCSI Portal": [
  null,
  "Lägg till iSCSI-portal"
 ],
 "Adding physical volume to $target": [
  null,
  "Lägger till fysisk volym till $target"
 ],
 "Additional packages:": [
  null,
  "Ytterligare paket:"
 ],
 "Address": [
  null,
  "Adress"
 ],
 "Address cannot be empty": [
  null,
  "Adressen kan inte vara tom"
 ],
 "Address is not a valid URL": [
  null,
  "Adressen är inte en giltig URL"
 ],
 "Apply": [
  null,
  "Lägg på"
 ],
 "At least $0 disks are needed.": [
  null,
  "Åtminstone $0 diskar behövs."
 ],
 "At least one disk is needed.": [
  null,
  "Åtminstone en disk behövs."
 ],
 "Authentication required": [
  null,
  "Autentisering krävs"
 ],
 "Available targets on $0": [
  null,
  "Tillgängliga mål på $0"
 ],
 "Backing Device": [
  null,
  "Bakomliggande enhet"
 ],
 "Block": [
  null,
  "Block"
 ],
 "Block device for filesystems": [
  null,
  "Blockenhet för filsystem"
 ],
 "Blocked": [
  null,
  "Blockerat"
 ],
 "Can't delete while unlocked": [
  null,
  "Kan inte radera när olåst"
 ],
 "Cancel": [
  null,
  "Avbryt"
 ],
 "Change": [
  null,
  "Ändra"
 ],
 "Change iSCSI Initiator Name": [
  null,
  "Ändra iSCSI-initierarnamn"
 ],
 "Change passphrase": [
  null,
  "Ändra lösenfras"
 ],
 "Checking $target": [
  null,
  "Kontrollerar $target"
 ],
 "Checking RAID Device $target": [
  null,
  "Kontrollerar RAID-enhet $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "Kontrollerar och reparerar RAID-enhet $target"
 ],
 "Checking installed software": [
  null,
  "Kontrollerar installerad programvara"
 ],
 "Chunk Size": [
  null,
  "Styckesstorlek"
 ],
 "Cleaning up for $target": [
  null,
  "Rensar upp för $target"
 ],
 "Close": [
  null,
  "Stäng"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "Kompatibel med alla system och enheter (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "Kompatibel med moderna system och hårddiskar > 2 TB (GPT)"
 ],
 "Compression": [
  null,
  "Komprimering"
 ],
 "Confirm": [
  null,
  "Bekräfta"
 ],
 "Confirm removal with passphrase": [
  null,
  "Bekräfta borttagandet med en lösenfras"
 ],
 "Content": [
  null,
  "Innehåll"
 ],
 "Create": [
  null,
  "Skapa"
 ],
 "Create Logical Volume": [
  null,
  "Skapa en logisk volym"
 ],
 "Create Partition": [
  null,
  "Skapa en partition"
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
  "Skapa en RAID-enhet"
 ],
 "Create Snapshot": [
  null,
  "Skapa en ögonblicksbild"
 ],
 "Create Thin Volume": [
  null,
  "Skapa en tunn volym"
 ],
 "Create VDO Device": [
  null,
  "Skapa en VDO-enhet"
 ],
 "Create Volume Group": [
  null,
  "Skapa en volymgrupp"
 ],
 "Create new Logical Volume": [
  null,
  "Skapa en ny logisk volym"
 ],
 "Creating RAID Device $target": [
  null,
  "Skapar en RAID-enhet $target"
 ],
 "Creating filesystem on $target": [
  null,
  "Skapar ett filsystem på $target"
 ],
 "Creating logical volume $target": [
  null,
  "Skapar en logisk volym på $target"
 ],
 "Creating partition $target": [
  null,
  "Skapar en partition på $target"
 ],
 "Creating snapshot of $target": [
  null,
  "Skapar en ögonblicksbild av $target"
 ],
 "Creating volume group $target": [
  null,
  "Skapar en volymgrupp $target"
 ],
 "Custom": [
  null,
  "Anpassat"
 ],
 "Custom encryption options": [
  null,
  "Anpassade krypteringsalternativ"
 ],
 "Custom mount options": [
  null,
  "Anpassade monteringsalternativ"
 ],
 "DISK IS FAILING": [
  null,
  "DISKEN GÅR SÖNDER"
 ],
 "Data Used": [
  null,
  "Data använt"
 ],
 "Deactivate": [
  null,
  "Avaktivera"
 ],
 "Deactivating $target": [
  null,
  "Avaktiverar $target"
 ],
 "Deduplication": [
  null,
  "Avduplicering"
 ],
 "Default": [
  null,
  "Standard"
 ],
 "Delete": [
  null,
  "Ta bort"
 ],
 "Deleting $target": [
  null,
  "Tar bort $target"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "Att ta bort en RAID-enhet kommer att radera all data på den."
 ],
 "Deleting a VDO device will erase all data on it.": [
  null,
  "Att ta bort en VDO-enhet kommer att ta bort all data på den."
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "Att ta bort en logisk volym kommer att ta bort all data i den."
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "Att ta bort en partition kommer att ta bort all data i den."
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "Att ta bort en volymgrupp kommer att radera all data i den."
 ],
 "Deleting volume group $target": [
  null,
  "Tar bort volymgruppen $target"
 ],
 "Device File": [
  null,
  "Enhetsfil"
 ],
 "Device is read-only": [
  null,
  "Enheten är skrivskyddad"
 ],
 "Disk": [
  null,
  "Disk"
 ],
 "Disk is OK": [
  null,
  "Disken är OK"
 ],
 "Disk passphrase": [
  null,
  "Disklösenfras"
 ],
 "Disks": [
  null,
  "Diskar"
 ],
 "Don't overwrite existing data": [
  null,
  "Skriv inte över befintliga data"
 ],
 "Downloading $0": [
  null,
  "Hämtar $0"
 ],
 "Drive": [
  null,
  "Enhet"
 ],
 "Drives": [
  null,
  "Enheter"
 ],
 "Edit": [
  null,
  "Redigera"
 ],
 "Edit Tang keyserver": [
  null,
  "Redigera Tang-nyckelserver"
 ],
 "Editing a key requires a free slot": [
  null,
  "Att redigera en nyckel kräver ett fritt fack"
 ],
 "Ejecting $target": [
  null,
  "Matar ut $target"
 ],
 "Emptying $target": [
  null,
  "Tömmer $target"
 ],
 "Encrypt data": [
  null,
  ""
 ],
 "Encrypted $0": [
  null,
  "Krypterad $0"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "Krypterad logisk volym av $0"
 ],
 "Encrypted Partition of $0": [
  null,
  "Krypterad partition av $0"
 ],
 "Encrypted volumes can not be resized here.": [
  null,
  "Storleken på krypterade volymer kan inte ändras här."
 ],
 "Encrypted volumes need to be unlocked before they can be resized.": [
  null,
  "Krypterade volymer behöver låsas upp innan deras storlek kan ändras."
 ],
 "Encryption": [
  null,
  "Kryptering"
 ],
 "Encryption Options": [
  null,
  "Krypteringsalternativ"
 ],
 "Erase": [
  null,
  "Radera"
 ],
 "Erasing $target": [
  null,
  "Raderar $target"
 ],
 "Error": [
  null,
  "Fel"
 ],
 "Extended Partition": [
  null,
  "Utökad partition"
 ],
 "FAILED": [
  null,
  "MISSLYCKADES"
 ],
 "Filesystem": [
  null,
  "Filsystem"
 ],
 "Filesystem Mounting": [
  null,
  "Filsystemmontering"
 ],
 "Filesystem Name": [
  null,
  "Filsystemsnamn"
 ],
 "Filesystems": [
  null,
  "Filsystem"
 ],
 "For legacy applications only. Reduces performance.": [
  null,
  ""
 ],
 "Force remove passphrase in $0": [
  null,
  "Framtvinga borttagande av lösenfras i $0"
 ],
 "Format": [
  null,
  "Formater"
 ],
 "Format $0": [
  null,
  "Formatera $0"
 ],
 "Format Disk $0": [
  null,
  "Formatera disken $0"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "Att formatera en disk kommer att radera all data på den."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "Att formatera en lagringsenhet kommer att radera all data på den."
 ],
 "Free": [
  null,
  "Ledigt"
 ],
 "Free Space": [
  null,
  "Ledigt utrymme"
 ],
 "Free up space in this group: Shrink or delete other logical volumes or add another physical volume.": [
  null,
  "Frigör utrymme i denna grupp: krymp eller radera andra logiska volymer eller lägg till en ytterligare fysisk volym."
 ],
 "Go to now": [
  null,
  "Gå till nu"
 ],
 "Grow": [
  null,
  "Utöka"
 ],
 "Grow Content": [
  null,
  ""
 ],
 "Grow Logical Volume": [
  null,
  "Utöka en logisk volym"
 ],
 "Grow logical size of $0": [
  null,
  "Utöka den logiska storleken av $0"
 ],
 "Grow to take all space": [
  null,
  "Utöka till att ta allt utrymme"
 ],
 "If tang-show-keys is not available, run the following:": [
  null,
  "Om tang-show-keys inte är tillgängligt, kör det följande:"
 ],
 "In Sync": [
  null,
  "I synk"
 ],
 "Inactive volume": [
  null,
  "Inaktiv volym"
 ],
 "Index Memory": [
  null,
  "Indexminne"
 ],
 "Install": [
  null,
  "Installera"
 ],
 "Install NFS Support": [
  null,
  "Installera stöd för NFS"
 ],
 "Install Software": [
  null,
  "Installera programvara"
 ],
 "Install VDO support": [
  null,
  "Installera VDO-stöd"
 ],
 "Installing $0": [
  null,
  "Installerar $0"
 ],
 "Invalid username or password": [
  null,
  "Felaktigt användarnamn eller lösenord"
 ],
 "Jobs": [
  null,
  "Jobb"
 ],
 "Key slots with unknown types can not be edited here": [
  null,
  "Nyckelfack med okända typer kan inte redigeras här"
 ],
 "Key source": [
  null,
  "Nyckelkälla"
 ],
 "Keys": [
  null,
  "Nycklar"
 ],
 "Keyserver": [
  null,
  "Nyckelserver"
 ],
 "Keyserver address": [
  null,
  "Nyckelserverns adress"
 ],
 "Keyserver removal may prevent unlocking $0.": [
  null,
  "Att ta bort nyckelservern kan förhindra upplåsning av $0."
 ],
 "Loading...": [
  null,
  "Läser in …"
 ],
 "Local Mount Point": [
  null,
  "Lokal monteringspunkt"
 ],
 "Lock": [
  null,
  "Lås"
 ],
 "Locking $target": [
  null,
  "Låser $target"
 ],
 "Logical": [
  null,
  "Logisk"
 ],
 "Logical Size": [
  null,
  "Logisk storlek"
 ],
 "Logical Volume": [
  null,
  "Logisk volym"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "Logisk volym (ögonblicksbild)"
 ],
 "Logical Volume of $0": [
  null,
  "Logisk voly av $0"
 ],
 "Make sure the key hash from the Tang server matches:": [
  null,
  "Se till att kontrollsumman för nyckeln från Tang-servern stämmer:"
 ],
 "Manually check with SSH: ": [
  null,
  "Kontrollera manuellt med SSH:"
 ],
 "Marking $target as faulty": [
  null,
  "Markerar $target som felaktig"
 ],
 "Member of RAID Device": [
  null,
  "Medlem i RAID-enhet"
 ],
 "Member of RAID Device $0": [
  null,
  "Medlem i RAID-enhet $0"
 ],
 "Metadata Used": [
  null,
  "Metadata använt"
 ],
 "Modifying $target": [
  null,
  "Modifiera $target"
 ],
 "Mount": [
  null,
  "Montering"
 ],
 "Mount Options": [
  null,
  "Monteringsflaggor"
 ],
 "Mount Point": [
  null,
  "Monteringspunkt"
 ],
 "Mount at boot": [
  null,
  "Montera vid uppstart"
 ],
 "Mount point can not be empty": [
  null,
  "Monteringspunkten får inte vara tom"
 ],
 "Mount point cannot be empty.": [
  null,
  "Monteringspunkten får inte vara tom."
 ],
 "Mount point must start with \"/\".": [
  null,
  "Monteringspunkten måste börja med ”/”."
 ],
 "Mount read only": [
  null,
  "Montera skrivskyddat"
 ],
 "Mounted At": [
  null,
  "Monterad på"
 ],
 "Mounting": [
  null,
  "Monterar"
 ],
 "Mounting $target": [
  null,
  "Monterar $target"
 ],
 "NFS Mount": [
  null,
  "NFS-montering"
 ],
 "NFS Mounts": [
  null,
  "NFS-monteringar"
 ],
 "NFS Support not installed": [
  null,
  "Stöd för NFS är inte installerat"
 ],
 "Name": [
  null,
  "Namn"
 ],
 "Name can not be empty.": [
  null,
  "Namnet får inte vara tomt."
 ],
 "Name cannot be empty.": [
  null,
  "Namnet får inte vara tomt."
 ],
 "Name cannot be longer than $0 bytes": [
  null,
  "Namnet får inte vara längre än $0 byte"
 ],
 "Name cannot be longer than $0 characters": [
  null,
  "Namnet får inte vara längre än $0 tecken"
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  "Namnet får inte vara längre än 127 tecken."
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "Namnet får inte innehålla tecknet ”$0”."
 ],
 "Name cannot contain whitespace.": [
  null,
  "Namnet får inte innehålla blanktecken."
 ],
 "New NFS Mount": [
  null,
  "Ny NFS-montering"
 ],
 "New passphrase": [
  null,
  "Ny lösenfras"
 ],
 "Next": [
  null,
  "Nästa"
 ],
 "No Filesystem": [
  null,
  "Inget filsystem"
 ],
 "No Logical Volumes": [
  null,
  "Inga logiska volymer"
 ],
 "No NFS mounts set up": [
  null,
  "Inga NFS-monteringar uppsatta"
 ],
 "No available slots": [
  null,
  "Inga tillgängliga platser"
 ],
 "No disks are available.": [
  null,
  "Inga diskar är tillgängliga."
 ],
 "No drives attached": [
  null,
  "Inga diskar är anslutna"
 ],
 "No free key slots": [
  null,
  "Inga fria nyckelfack"
 ],
 "No free space": [
  null,
  "Inget ledigt utrymme"
 ],
 "No iSCSI targets set up": [
  null,
  "Inga iSCSI-mål är uppsatta"
 ],
 "No keys added": [
  null,
  "Inga nycklar tillagda"
 ],
 "No media inserted": [
  null,
  "Inget medium isatt"
 ],
 "No partitioning": [
  null,
  "Ingen partitionering"
 ],
 "No storage set up as RAID": [
  null,
  "Ingen lagring uppsatt som RAID"
 ],
 "No storage set up as VDO": [
  null,
  "Ingen lagring uppsatt som VDO"
 ],
 "No volume groups created": [
  null,
  "Inga volymgrupper skapade"
 ],
 "Not enough space to grow.": [
  null,
  "Inte tillräckligt med utrymme för att växa"
 ],
 "Not found": [
  null,
  "Finns inte"
 ],
 "Not mounted": [
  null,
  "Inte monterat"
 ],
 "Not running": [
  null,
  "Kör inte"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Old passphrase": [
  null,
  "Gammal lösenfras"
 ],
 "Only $0 of $1 are used.": [
  null,
  "Endast $0 av $1 används."
 ],
 "Operation '$operation' on $target": [
  null,
  "Åtgärden ”$operation” på $target"
 ],
 "Options": [
  null,
  "Alternativ"
 ],
 "Other Devices": [
  null,
  "Andra enheter"
 ],
 "Overwrite existing data with zeros": [
  null,
  "Skriv över befintliga data med nollor"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit kraschade"
 ],
 "Partition": [
  null,
  "Partition"
 ],
 "Partition of $0": [
  null,
  "Partition av $0"
 ],
 "Partitioning": [
  null,
  "Partitionering"
 ],
 "Passphrase": [
  null,
  "Lösenfras"
 ],
 "Passphrase cannot be empty": [
  null,
  "Lösenfrasen får inte vara tom"
 ],
 "Passphrase removal may prevent unlocking $0.": [
  null,
  "Att ta bort lösenfrasen kan förhindra upplåsning av $0."
 ],
 "Passphrases do not match": [
  null,
  "Lösenfraserna stämmer inte överens"
 ],
 "Password": [
  null,
  "Lösenord"
 ],
 "Path on Server": [
  null,
  "Sökväg på servern"
 ],
 "Path on server cannot be empty.": [
  null,
  "Sökvägen på servern får inte vara tom."
 ],
 "Path on server must start with \"/\".": [
  null,
  "Sökvägen på servern måste börja med ”/”."
 ],
 "Physical": [
  null,
  "Fysiskt"
 ],
 "Physical Volume": [
  null,
  "Fysisk volym"
 ],
 "Physical Volumes": [
  null,
  "Fysiska volymer"
 ],
 "Physical volume of $0": [
  null,
  "Fysisk volym för $0"
 ],
 "Physical volumes can not be resized here.": [
  null,
  "Storleken på fysiska volymer kan inte ändras här."
 ],
 "Please confirm deletion of $0": [
  null,
  "Bekräfta raderingen av $0"
 ],
 "Please confirm stopping of $0": [
  null,
  "Bekräfta stoppandet av $0"
 ],
 "Pool": [
  null,
  "Pool"
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "Pool för tunna logiska volymer"
 ],
 "Pool for Thin Volumes": [
  null,
  "Pool för tunna volymer"
 ],
 "Pool for thinly provisioned volumes": [
  null,
  "Pool för tunt underhållna volymer"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Process": [
  null,
  "Process"
 ],
 "Purpose": [
  null,
  "Syfte"
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
  "RAID 0 (Strimlor)"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (Spegel)"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RAID 10 (Strimlor av speglar)"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (dedikerad paritet)"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (distribuerad paritet)"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (dubbel distribuerad paritet)"
 ],
 "RAID Device": [
  null,
  "RAID-enhet"
 ],
 "RAID Device $0": [
  null,
  "RAID-enhet $0"
 ],
 "RAID Devices": [
  null,
  "RAID-enheter"
 ],
 "RAID Level": [
  null,
  "RAID-nivå"
 ],
 "RAID Member": [
  null,
  "RAID-medlem"
 ],
 "Reading": [
  null,
  "Läser"
 ],
 "Reboot": [
  null,
  "Starta om"
 ],
 "Recommended default": [
  null,
  ""
 ],
 "Recovering": [
  null,
  "Återställer"
 ],
 "Recovering RAID Device $target": [
  null,
  "Återställer RAID-enhet $target"
 ],
 "Removals:": [
  null,
  "Borttagningar:"
 ],
 "Remove": [
  null,
  "Ta bort"
 ],
 "Remove $0?": [
  null,
  "Ta bort $0?"
 ],
 "Remove Tang keyserver": [
  null,
  "Ta bort Tang-nyckelserver"
 ],
 "Remove device": [
  null,
  "Ta bort enhet"
 ],
 "Remove passphrase": [
  null,
  "Ta bort lösenfras"
 ],
 "Remove passphrase in $0?": [
  null,
  "Ta bort lösenfrasen i $0?"
 ],
 "Removing $0": [
  null,
  "Tar bort $0"
 ],
 "Removing $target from RAID Device": [
  null,
  "Tar bort $target från RAID-enheten"
 ],
 "Removing physical volume from $target": [
  null,
  "Tar bort den fysiska volymen från $target"
 ],
 "Rename": [
  null,
  "Byt namn"
 ],
 "Rename Logical Volume": [
  null,
  "Byt namn på en logisk volym"
 ],
 "Rename Volume Group": [
  null,
  "Byt namn på en volymgrupp"
 ],
 "Renaming $target": [
  null,
  "Byter namn på $target"
 ],
 "Repairing $target": [
  null,
  "Reparerar $target"
 ],
 "Repeat passphrase": [
  null,
  "Upprepa lösenfrasen"
 ],
 "Resizing $target": [
  null,
  "Ändrar storlek på $target"
 ],
 "Resizing an encrypted filesystem requires unlocking the disk. Please provide a current disk passphrase.": [
  null,
  ""
 ],
 "Running": [
  null,
  "Kör"
 ],
 "SMART self-test of $target": [
  null,
  "SMART-självtest av $target"
 ],
 "Save": [
  null,
  "Spara"
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
  "Att spara en ny lösenfras kräver att disken låses upp.  Ge en aktuell disklösenfras."
 ],
 "Securely erasing $target": [
  null,
  "Raderar säkert $target"
 ],
 "Server": [
  null,
  "Server"
 ],
 "Server Address": [
  null,
  "Serveradress"
 ],
 "Server address cannot be empty.": [
  null,
  "Serveradressen får inte vara tom."
 ],
 "Server cannot be empty.": [
  null,
  "Servern får inte vara tom."
 ],
 "Service": [
  null,
  "Tjänst"
 ],
 "Session": [
  null,
  "Session"
 ],
 "Setting up loop device $target": [
  null,
  "Sätter upp vändslingeenheten $target"
 ],
 "Show all": [
  null,
  ""
 ],
 "Show all $0 drives": [
  null,
  ""
 ],
 "Shrink": [
  null,
  "Krymp"
 ],
 "Shrink Logical Volume": [
  null,
  "Krymp en logisk volym"
 ],
 "Shrink Volume": [
  null,
  ""
 ],
 "Size": [
  null,
  "Storlek"
 ],
 "Size cannot be negative": [
  null,
  "Storleken kan inte vara negativ"
 ],
 "Size cannot be zero": [
  null,
  "Storleken kan inte vara noll"
 ],
 "Size is too large": [
  null,
  "Storleken är för stor"
 ],
 "Size must be a number": [
  null,
  "Storleken måste vara ett tal"
 ],
 "Size must be at least $0": [
  null,
  "Storleken måste vara åtminstone $0"
 ],
 "Slot $0": [
  null,
  "Plats $0"
 ],
 "Spare": [
  null,
  "Reserv"
 ],
 "Start": [
  null,
  "Starta"
 ],
 "Start Multipath": [
  null,
  "Starta multipath"
 ],
 "Starting RAID Device $target": [
  null,
  "Starta RAID-enhet $target"
 ],
 "Starting swapspace $target": [
  null,
  "Starta växlingsutrymmet $target"
 ],
 "Stop": [
  null,
  "Stoppa"
 ],
 "Stop Device": [
  null,
  "Stoppa enhet"
 ],
 "Stop and Unmount": [
  null,
  "Stoppa och avmontera"
 ],
 "Stop and remove": [
  null,
  "Stoppa och ta bort"
 ],
 "Stopping RAID Device $target": [
  null,
  "Stoppar RAID-enhet $target"
 ],
 "Stopping swapspace $target": [
  null,
  "Stoppar växlingsutrymmet $target"
 ],
 "Storage": [
  null,
  "Lagring"
 ],
 "Storage Logs": [
  null,
  "Lagringsloggar"
 ],
 "Storage can not be managed on this system.": [
  null,
  ""
 ],
 "Store passphrase": [
  null,
  "Lagra lösenfrasen"
 ],
 "Stored Passphrase": [
  null,
  "Lagrad lösenfras"
 ],
 "Stored passphrase": [
  null,
  "Lagrad lösenfras"
 ],
 "Support is installed.": [
  null,
  "Stöd är installerat."
 ],
 "Swap": [
  null,
  "Växlingsutrymme"
 ],
 "Synchronizing RAID Device $target": [
  null,
  "Synkroniserar RAID-enheten $target"
 ],
 "Tang keyserver": [
  null,
  "Tang-nyckelserver"
 ],
 "The RAID Array is in a degraded state": [
  null,
  "RAID-vektor är i ett nedsatt tillstånd"
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  "RAID-enheten måste köra för att kunna lägga till reservdiskar."
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  "RAID-enheten måste köra för att kunna ta bort diskar."
 ],
 "The creation of this VDO device did not finish and the device can't be used.": [
  null,
  "Skapandet av denna VDO-enhet avslutade inte och enheten kan inte användas."
 ],
 "The currently logged in user is not permitted to see information about keys.": [
  null,
  "Användaren som för närvarande är inloggad har inte tillstånd att se information om nycklar."
 ],
 "The filesystem is in use by login sessions and system services. Proceeding will stop these.": [
  null,
  "Filsystemet används av inloggningssesioner och systemtjänster.  Att gå vidare kommer stoppa dessa."
 ],
 "The filesystem is in use by login sessions. Proceeding will stop these.": [
  null,
  "Filsystemet används av inloggningssessioner.  Att gå vidare kommer stoppa dessa."
 ],
 "The filesystem is in use by system services. Proceeding will stop these.": [
  null,
  "Filsystemet används av systemtjänster.  Att gå vidare kommer stoppa dessa."
 ],
 "The last disk of a RAID device cannot be removed.": [
  null,
  "Den sista disken i en RAID-enhet kan inte tas bort."
 ],
 "The last key slot can not be removed": [
  null,
  "Det sista nyckelfacket kan inte tas bort"
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  "Den sista fysiska volymen i en volymgrupp kan inte tas bort."
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "Användaren <b>$0</b> har inte rättighet att hantera lagring"
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  "Det finns enheter med flera sökvägar på systemet, men multipath-tjänsten kör inte."
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  "Det finns inte tillräckligt med fritt utrymme någon annanstans för att ta bort dennay fysiska volym.  Åtminstone $0 mer ledigt utrymme behövs."
 ],
 "Thin Logical Volume": [
  null,
  "Tunn logisk volym"
 ],
 "This NFS mount is in use and only its options can be changed.": [
  null,
  "Denna NFS-montering används och endast dess alternativ kan ändras."
 ],
 "This VDO device does not use all of its backing device.": [
  null,
  "Denna VDO-enhet använder inte alla sina underliggande enheter."
 ],
 "This device has filesystems that are currently in use. Proceeding will unmount all filesystems on it.": [
  null,
  "Denna enhet har filsystem som används just nu.  Att gå vidare kommer avmontera alla filsystem på den."
 ],
 "This device is currently used for RAID devices.": [
  null,
  "Denna enhet används just nu till RAID-enheter."
 ],
 "This device is currently used for RAID devices. Proceeding will remove it from its RAID devices.": [
  null,
  "Denna enhet används just nu till RAID-enheter.  Att gå vidare kommer ta bort den från sin RAID-enhet."
 ],
 "This device is currently used for VDO devices.": [
  null,
  "Denna enhet används just nu till VDO-enheter."
 ],
 "This device is currently used for volume groups.": [
  null,
  "Denna enhet används just nu till volymgrupper."
 ],
 "This device is currently used for volume groups. Proceeding will remove it from its volume groups.": [
  null,
  "Denna enhet används just nu till volymgrupper.  Att gå vidare kommer ta bort den från sin volymgrupper."
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  "Denna disk kan inte tas bort medans enheten återhämtar sig."
 ],
 "This logical volume is not completely used by its content.": [
  null,
  ""
 ],
 "This volume needs to be activated before it can be resized.": [
  null,
  "Denna volym behöver aktiveras före dess storlek kan ändras."
 ],
 "Total size: $0": [
  null,
  "Total storlek: $0"
 ],
 "Trust key": [
  null,
  "Förtroendenyckel"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "UUID": [
  null,
  "UUID"
 ],
 "Unable to reach server": [
  null,
  "Kan inte nå servern"
 ],
 "Unable to remove mount": [
  null,
  "Kan inte ta bort monteringen"
 ],
 "Unable to unmount filesystem": [
  null,
  "Kan inte avmontera filsystem"
 ],
 "Unit": [
  null,
  "Enhet"
 ],
 "Unknown": [
  null,
  "Okänd"
 ],
 "Unknown ($0)": [
  null,
  "Okänt ($0)"
 ],
 "Unknown host name": [
  null,
  "Okänt värdnamn"
 ],
 "Unknown type": [
  null,
  "Okänd typ"
 ],
 "Unlock": [
  null,
  "Lås upp"
 ],
 "Unlock at boot": [
  null,
  "Lås upp vid uppstart"
 ],
 "Unlock read only": [
  null,
  "Lås upp endast för läsning"
 ],
 "Unlocking $target": [
  null,
  "Lås upp $target"
 ],
 "Unlocking disk...": [
  null,
  "Låser upp disken …"
 ],
 "Unmount": [
  null,
  "Avmontera"
 ],
 "Unmounting $target": [
  null,
  "Avmonterar $target"
 ],
 "Unrecognized Data": [
  null,
  "Okända data"
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  "Okända data får inte göras mindre här."
 ],
 "Unsupported volume": [
  null,
  "Volym som ej stöds"
 ],
 "Usage": [
  null,
  "Användning"
 ],
 "Use 512 Byte emulation": [
  null,
  "Använd 512-byteemulering"
 ],
 "Used": [
  null,
  "Använt"
 ],
 "Username": [
  null,
  "Användarnamn"
 ],
 "VDO Backing": [
  null,
  "VDO-underlag"
 ],
 "VDO Device": [
  null,
  "VDO-enhet"
 ],
 "VDO Device $0": [
  null,
  "VDO-enhet $0"
 ],
 "VDO Devices": [
  null,
  "VDO-enheter"
 ],
 "VDO backing devices can not be made smaller": [
  null,
  "VDO-underlagsenheter kan inte göras mindre"
 ],
 "VDO support not installed": [
  null,
  "VDO-stöd är inte installerat"
 ],
 "Verify key": [
  null,
  "Verifiera nyckel"
 ],
 "Very securely erasing $target": [
  null,
  "Raderar mycket säkert $target"
 ],
 "Volume": [
  null,
  "Volym"
 ],
 "Volume Group": [
  null,
  "Volymgrupp"
 ],
 "Volume Group $0": [
  null,
  "Volymgrupp $0"
 ],
 "Volume Groups": [
  null,
  "Volymgrupper"
 ],
 "Volume size is $0. Content size is $1.": [
  null,
  ""
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Väntar på att andra programvaruhanteringsåtgärder skall bli klara"
 ],
 "What if tang-show-keys is not available?": [
  null,
  "Vad gör man om tang-show-keys inte är tillgängligt?"
 ],
 "Write-mostly": [
  null,
  "Skriv huvudsakligen"
 ],
 "Writing": [
  null,
  "Skriver"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 byte med binärdata]"
 ],
 "[binary data]": [
  null,
  "[binärdata]"
 ],
 "[no data]": [
  null,
  "[inga data]"
 ],
 "iSCSI Targets": [
  null,
  "iSCSI-mål"
 ],
 "key slot $0": [
  null,
  "nyckelfack $0"
 ],
 "undefined": [
  null,
  "odefinierad"
 ],
 "unknown target": [
  null,
  "okänt mål"
 ],
 "unpartitioned space on $0": [
  null,
  "opartitionerat utrymmer på $0"
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 filsystem"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  "Krypterad data"
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "Andra data"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "Växlingsutrymme"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "Okända data"
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  "VDO-underlag"
 ],
 "storage\u0004Drive": [
  null,
  "Enhet"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Hårddisk"
 ],
 "storage\u0004Optical Drive": [
  null,
  "Optisk enhet"
 ],
 "storage\u0004Removable Drive": [
  null,
  "Löstagbar disk"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "SSD-minne"
 ],
 "format-bytes\u0004bytes": [
  null,
  "byte"
 ]
}));
