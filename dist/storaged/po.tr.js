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
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Block Device": [
  null,
  "$0 Blok Device"
 ],
 "$0 day": [
  "$0 days",
  "",
  ""
 ],
 "$0 hour": [
  "$0 hours",
  "",
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  "",
  ""
 ],
 "$0 month": [
  "$0 months",
  "",
  ""
 ],
 "$0 of $1": [
  null,
  ""
 ],
 "$0 week": [
  "$0 weeks",
  "",
  ""
 ],
 "$0 year": [
  "$0 years",
  "",
  ""
 ],
 "$name (from $host)": [
  null,
  ""
 ],
 "(default)": [
  null,
  ""
 ],
 "(none)": [
  null,
  ""
 ],
 "1 MiB": [
  null,
  ""
 ],
 "1 day": [
  null,
  "1 gün"
 ],
 "1 hour": [
  null,
  "1 saat "
 ],
 "1 week": [
  null,
  "1 hafta"
 ],
 "128 KiB": [
  null,
  ""
 ],
 "16 KiB": [
  null,
  ""
 ],
 "2 MiB": [
  null,
  ""
 ],
 "32 KiB": [
  null,
  ""
 ],
 "4 KiB": [
  null,
  ""
 ],
 "5 minutes": [
  null,
  "5 dakika"
 ],
 "512 KiB": [
  null,
  ""
 ],
 "6 hours": [
  null,
  "6 saat"
 ],
 "64 KiB": [
  null,
  ""
 ],
 "8 KiB": [
  null,
  ""
 ],
 "<span>Encrypted $0</span>": [
  null,
  ""
 ],
 "<span>Encrypted Logical Volume of $0</span>": [
  null,
  ""
 ],
 "<span>Encrypted Partition of $0</span>": [
  null,
  ""
 ],
 "<span>Logical Volume of $0</span>": [
  null,
  ""
 ],
 "<span>Partition of $0</span>": [
  null,
  ""
 ],
 "Activate": [
  null,
  "Aktifleştir"
 ],
 "Activating $target": [
  null,
  ""
 ],
 "Add": [
  null,
  "Ekle"
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
  "Adres"
 ],
 "Apply": [
  null,
  "Uygula"
 ],
 "At least $0 disks are needed.": [
  null,
  ""
 ],
 "At least one disk is needed.": [
  null,
  "En azından bir disk gerekli"
 ],
 "Authentication required": [
  null,
  ""
 ],
 "Available targets on $0": [
  null,
  ""
 ],
 "Block Device": [
  null,
  "Blok Aygıtı"
 ],
 "Block device for filesystems": [
  null,
  ""
 ],
 "Can't delete while unlocked": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "İptal"
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
  "Kapat"
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
  "Parolayı onayla"
 ],
 "Content": [
  null,
  "İçerik"
 ],
 "Create": [
  null,
  "Yarat"
 ],
 "Create Logical Volume": [
  null,
  "Mantıksal Bölümü Yeniden İsimlendir"
 ],
 "Create Partition": [
  null,
  ""
 ],
 "Create RAID Device": [
  null,
  "RAID Yarat"
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
  "Volume Grubu Yarat"
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
  "Özel"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "Özel (Dosya sistemi tipi girin)"
 ],
 "DISK IS FAILING": [
  null,
  "DİSK BOZULUYOR"
 ],
 "Data Used": [
  null,
  ""
 ],
 "Deactivate": [
  null,
  "Deaktifleştir"
 ],
 "Deactivating $target": [
  null,
  ""
 ],
 "Default": [
  null,
  "Ön tanımlı"
 ],
 "Delete": [
  null,
  "Sil"
 ],
 "Deleting $target": [
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
 "Deleting volume group $target": [
  null,
  ""
 ],
 "Device $0 is a member of RAID Array $1": [
  null,
  ""
 ],
 "Device $0 is a physical volume of $1": [
  null,
  ""
 ],
 "Device $0 is mounted on $1": [
  null,
  ""
 ],
 "Device is read-only": [
  null,
  ""
 ],
 "Disk is OK": [
  null,
  "Disk durumu iyi"
 ],
 "Disks": [
  null,
  "Diskler"
 ],
 "Don't overwrite existing data": [
  null,
  "Mevcut verinin üstüne yazma"
 ],
 "Drive": [
  null,
  "Sürücü"
 ],
 "Drives": [
  null,
  ""
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
 "Encrypted EXT4 (LUKS)": [
  null,
  "Şifreli EXT4 (LUKS)"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "Şifreli XFS (LUKS)"
 ],
 "Encryption": [
  null,
  ""
 ],
 "Encryption Options": [
  null,
  "Şifreleme seçenekleri"
 ],
 "Erase": [
  null,
  "Sil"
 ],
 "Erasing $target": [
  null,
  ""
 ],
 "Error": [
  null,
  "Hata"
 ],
 "Extended Partition": [
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
  "Dosya sistemi tipi"
 ],
 "Filesystems": [
  null,
  "Dosya Sistemleri"
 ],
 "Format": [
  null,
  "Biçimlendir"
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
  "Bir diski biçimlendirmek üstünde yer alan veriyi silecektir."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  ""
 ],
 "Free": [
  null,
  "Boş"
 ],
 "Free Space": [
  null,
  ""
 ],
 "Go to now": [
  null,
  "Şimdiye git"
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
  "İşler"
 ],
 "Lock": [
  null,
  "Kilitle"
 ],
 "Locking $target": [
  null,
  ""
 ],
 "Logical Volume": [
  null,
  "Mantıksal Bölüm"
 ],
 "Logical Volume (Snapshot)": [
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
  "Bağla"
 ],
 "Mount Options": [
  null,
  "Bağlama Seçenekleri"
 ],
 "Mount Point": [
  null,
  "Bağlama Noktası"
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
  "NTFS - Çoğu sistemle uyumlu"
 ],
 "Name": [
  null,
  "İsim"
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
  "Sonraki"
 ],
 "No Filesystem": [
  null,
  "Dosya sistemi yok"
 ],
 "No Logical Volumes": [
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
 "Off": [
  null,
  "Kapalı"
 ],
 "On": [
  null,
  "Açık"
 ],
 "Operation '$operation' on $target": [
  null,
  ""
 ],
 "Options": [
  null,
  "Seçenekler"
 ],
 "Other Devices": [
  null,
  "Diğer Aygıtlar"
 ],
 "Overwrite existing data with zeros": [
  null,
  "Mevcut veriyi sıfırlarla tekrar yaz"
 ],
 "Partition": [
  null,
  ""
 ],
 "Partitioning": [
  null,
  ""
 ],
 "Passphrase": [
  null,
  "Parola"
 ],
 "Passphrase cannot be empty": [
  null,
  ""
 ],
 "Passphrases do not match": [
  null,
  "Parolalar eşleşmiyor"
 ],
 "Password": [
  null,
  "Parola"
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
 "RAID 0 (Stripe)": [
  null,
  ""
 ],
 "RAID 1 (Mirror)": [
  null,
  ""
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  ""
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  ""
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  ""
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  ""
 ],
 "RAID Device": [
  null,
  "RAID Aygıtı"
 ],
 "RAID Device $0": [
  null,
  ""
 ],
 "RAID Devices": [
  null,
  "RAID Aygıtları"
 ],
 "RAID Level": [
  null,
  "RAID Level"
 ],
 "RAID Member": [
  null,
  ""
 ],
 "Reading": [
  null,
  "Okunuyor"
 ],
 "Reboot": [
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
  "Yeniden İsimlendir"
 ],
 "Rename Logical Volume": [
  null,
  ""
 ],
 "Renaming $target": [
  null,
  ""
 ],
 "Resize": [
  null,
  "Yeniden Boyutlandır"
 ],
 "Resize Filesystem": [
  null,
  "Dosya Sistemini Yeniden Boyutlandır"
 ],
 "Resize Logical Volume": [
  null,
  "Mantıksal Bölümü Yeniden Boyurlandır"
 ],
 "Resizing $target": [
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
  "Boyut"
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
  "Boyut belirtilmeli"
 ],
 "Start": [
  null,
  "Başlat"
 ],
 "Start Multipath": [
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
  "Durdur"
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
  "Depolama"
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
  "Parolayı sakla"
 ],
 "Stored Passphrase": [
  null,
  "Saklı Parolalar"
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
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  ""
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  ""
 ],
 "Thin Logical Volume": [
  null,
  ""
 ],
 "This logical volume cannot be made smaller.": [
  null,
  ""
 ],
 "Type": [
  null,
  "Tip"
 ],
 "UUID": [
  null,
  ""
 ],
 "Unable to reach server": [
  null,
  ""
 ],
 "Unknown": [
  null,
  "Bilinmiyor"
 ],
 "Unknown host name": [
  null,
  ""
 ],
 "Unlock": [
  null,
  "Kilidi Aç"
 ],
 "Unlocking $target": [
  null,
  ""
 ],
 "Unmount": [
  null,
  "Çöz"
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
  ""
 ],
 "Used": [
  null,
  "Kullanılmış"
 ],
 "Username": [
  null,
  "Kullanıcı Adı"
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  "VFAT - Tüm sistemler ve cihazlarla uyumlu"
 ],
 "Very securely erasing $target": [
  null,
  ""
 ],
 "Volume": [
  null,
  "Mantıksal Bölüm"
 ],
 "Volume Group": [
  null,
  ""
 ],
 "Volume Group $0": [
  null,
  ""
 ],
 "Volume Groups": [
  null,
  ""
 ],
 "Writing": [
  null,
  "Yazılıyor"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS - Red Hat Enterprise Linux 7 ön tanımlı"
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
  "ext4 - Red Hat Enterprise Linux 6 ön tanımlı"
 ],
 "iSCSI Targets": [
  null,
  ""
 ],
 "unknown target": [
  null,
  ""
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  ""
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  ""
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "Diğer Veri"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "Swap Alanı"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "Tanımlanamayan Veri"
 ],
 "storage\u0004Assessment": [
  null,
  ""
 ],
 "storage\u0004Bitmap": [
  null,
  "Bitmap"
 ],
 "storage\u0004Capacity": [
  null,
  "Kapasite"
 ],
 "storage\u0004Device": [
  null,
  "Aygıt"
 ],
 "storage\u0004Device File": [
  null,
  "Aygıt dosyası"
 ],
 "storage\u0004Drive": [
  null,
  "Sürücü"
 ],
 "storage\u0004Firmware Version": [
  null,
  "Firmware Sürümü"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Sabit Disk"
 ],
 "storage\u0004Model": [
  null,
  "Model"
 ],
 "storage\u0004Multipathed Devices": [
  null,
  ""
 ],
 "storage\u0004Optical Drive": [
  null,
  "Optik Sürücü"
 ],
 "storage\u0004RAID Level": [
  null,
  "RAID Seviyesi"
 ],
 "storage\u0004Removable Drive": [
  null,
  "Çıkarılabilir Disk"
 ],
 "storage\u0004Serial Number": [
  null,
  "Seri Numarası"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "SSD Disk"
 ],
 "storage\u0004State": [
  null,
  "Durum"
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
  ""
 ]
}));
