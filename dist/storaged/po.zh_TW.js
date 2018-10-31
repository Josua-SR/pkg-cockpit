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
  "language": "zh_TW",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Block Device": [
  null,
  ""
 ],
 "$0 Chunk Size": [
  null,
  ""
 ],
 "$0 Disks": [
  null,
  ""
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  ""
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  ""
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
  ""
 ],
 "$0 is not available from any repository.": [
  null,
  ""
 ],
 "$0 of $1": [
  null,
  ""
 ],
 "$0 slots remain": [
  null,
  ""
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  ""
 ],
 "$0 will be installed.": [
  null,
  ""
 ],
 "$0, $1 free": [
  null,
  ""
 ],
 "$name (from $host)": [
  null,
  ""
 ],
 "${size} ${desc}": [
  null,
  ""
 ],
 "(default)": [
  null,
  "（預設）"
 ],
 "(none)": [
  null,
  "(none)"
 ],
 "--": [
  null,
  ""
 ],
 "1 MiB": [
  null,
  ""
 ],
 "1 day": [
  null,
  ""
 ],
 "1 hour": [
  null,
  ""
 ],
 "1 week": [
  null,
  ""
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
  ""
 ],
 "512 KiB": [
  null,
  ""
 ],
 "6 hours": [
  null,
  ""
 ],
 "64 KiB": [
  null,
  ""
 ],
 "8 KiB": [
  null,
  ""
 ],
 "A disk is needed.": [
  null,
  ""
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  ""
 ],
 "Activate": [
  null,
  "使用"
 ],
 "Activating $target": [
  null,
  ""
 ],
 "Active since": [
  null,
  ""
 ],
 "Add": [
  null,
  "加入"
 ],
 "Add Disks": [
  null,
  ""
 ],
 "Add Key": [
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
 "Additional packages:": [
  null,
  ""
 ],
 "Address": [
  null,
  "位址"
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
  "套用"
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
  "需經過認證"
 ],
 "Available targets on $0": [
  null,
  ""
 ],
 "Backing Device": [
  null,
  ""
 ],
 "Block": [
  null,
  "方塊"
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
  "取消"
 ],
 "Change": [
  null,
  "改變"
 ],
 "Change iSCSI Initiator Name": [
  null,
  ""
 ],
 "Change passphrase": [
  null,
  ""
 ],
 "Checking $target": [
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
  ""
 ],
 "Close": [
  null,
  "關閉"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  ""
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  ""
 ],
 "Compression": [
  null,
  "壓縮"
 ],
 "Confirm passphrase": [
  null,
  ""
 ],
 "Confirm removal with passphrase": [
  null,
  ""
 ],
 "Content": [
  null,
  "內容"
 ],
 "Create": [
  null,
  "建立"
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
  ""
 ],
 "Create Snapshot": [
  null,
  ""
 ],
 "Create Thin Volume": [
  null,
  ""
 ],
 "Create VDO Device": [
  null,
  ""
 ],
 "Create Volume Group": [
  null,
  ""
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
  "自訂"
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
  "取消啟動"
 ],
 "Deactivating $target": [
  null,
  ""
 ],
 "Deduplication": [
  null,
  ""
 ],
 "Default": [
  null,
  "預設值"
 ],
 "Delete": [
  null,
  "刪除"
 ],
 "Deleting $target": [
  null,
  ""
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  ""
 ],
 "Deleting a VDO device will erase all data on it.": [
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
 "Device File": [
  null,
  ""
 ],
 "Device is read-only": [
  null,
  ""
 ],
 "Disk": [
  null,
  "磁碟"
 ],
 "Disk is OK": [
  null,
  ""
 ],
 "Disk passphrase": [
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
 "Downloading $0": [
  null,
  ""
 ],
 "Drive": [
  null,
  ""
 ],
 "Drives": [
  null,
  ""
 ],
 "Edit": [
  null,
  "編輯"
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
 "Encrypted volumes can not be resized here.": [
  null,
  ""
 ],
 "Encrypted volumes need to be unlocked before they can be resized.": [
  null,
  ""
 ],
 "Encryption": [
  null,
  "加密"
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
  "錯誤"
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
  "檔案系統"
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
  ""
 ],
 "Force remove passphrase in $0": [
  null,
  ""
 ],
 "Format": [
  null,
  "格式"
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
  "剩餘"
 ],
 "Free Space": [
  null,
  ""
 ],
 "Go to now": [
  null,
  ""
 ],
 "Grow": [
  null,
  ""
 ],
 "Grow Logical Volume": [
  null,
  ""
 ],
 "Grow logical size of $0": [
  null,
  ""
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
  ""
 ],
 "Inactive volume": [
  null,
  ""
 ],
 "Index Memory": [
  null,
  ""
 ],
 "Install": [
  null,
  "安裝"
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
  "無效的帳號或密碼"
 ],
 "Jobs": [
  null,
  "工作"
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
  ""
 ],
 "Lock": [
  null,
  "鎖定"
 ],
 "Locking $target": [
  null,
  ""
 ],
 "Logical": [
  null,
  ""
 ],
 "Logical Size": [
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
 "NFS Support not installed": [
  null,
  ""
 ],
 "NTFS - Compatible with most systems": [
  null,
  ""
 ],
 "Name": [
  null,
  "名稱"
 ],
 "Name can not be empty.": [
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
 "New NFS Mount": [
  null,
  ""
 ],
 "New passphrase": [
  null,
  ""
 ],
 "Next": [
  null,
  "下一步"
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
 "No available slots": [
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
 "No free key slots": [
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
  ""
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
  "關閉"
 ],
 "Ok": [
  null,
  "確定"
 ],
 "Old passphrase": [
  null,
  ""
 ],
 "On": [
  null,
  "開"
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
  "選項"
 ],
 "Other Devices": [
  null,
  ""
 ],
 "Overwrite existing data with zeros": [
  null,
  ""
 ],
 "PackageKit crashed": [
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
  "分割硬碟"
 ],
 "Passphrase": [
  null,
  "密碼"
 ],
 "Passphrase cannot be empty": [
  null,
  ""
 ],
 "Passphrase removal may prevent unlocking $0.": [
  null,
  ""
 ],
 "Passphrases do not match": [
  null,
  ""
 ],
 "Password": [
  null,
  "密碼"
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
  "實體"
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
 "Physical volumes can not be resized here.": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  ""
 ],
 "Please confirm stopping of $0": [
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
  "連接埠"
 ],
 "Process": [
  null,
  "程序"
 ],
 "Purpose": [
  null,
  "用途"
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
  "RAID 裝置"
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
  "重新開機"
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
  "移除"
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
  ""
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
  "重新命名"
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
 "Repairing $target": [
  null,
  ""
 ],
 "Repeat passphrase": [
  null,
  ""
 ],
 "Resizing $target": [
  null,
  ""
 ],
 "Running": [
  null,
  "執行中"
 ],
 "SMART self-test of $target": [
  null,
  ""
 ],
 "Save": [
  null,
  "儲存"
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
  "伺服器"
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
 "Service": [
  null,
  "服務"
 ],
 "Session": [
  null,
  "作業階段"
 ],
 "Setting up loop device $target": [
  null,
  ""
 ],
 "Shrink": [
  null,
  "縮小"
 ],
 "Shrink Logical Volume": [
  null,
  ""
 ],
 "Size": [
  null,
  "大小"
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
 "Size must be at least $0": [
  null,
  ""
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
  "開始"
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
  "停止"
 ],
 "Stop Device": [
  null,
  ""
 ],
 "Stop and Unmount": [
  null,
  ""
 ],
 "Stop and remove": [
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
  "儲存裝置"
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
 "Support is installed.": [
  null,
  ""
 ],
 "Swap": [
  null,
  "置換"
 ],
 "Synchronizing RAID Device $target": [
  null,
  ""
 ],
 "Tang keyserver": [
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
  ""
 ],
 "This device is currently used for RAID devices. Proceeding will remove it from its RAID devices.": [
  null,
  ""
 ],
 "This device is currently used for VDO devices.": [
  null,
  ""
 ],
 "This device is currently used for volume groups.": [
  null,
  ""
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
  ""
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
  "類型"
 ],
 "UUID": [
  null,
  "UUID"
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
 "Unit": [
  null,
  "單位"
 ],
 "Unknown": [
  null,
  "不明"
 ],
 "Unknown ($0)": [
  null,
  ""
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
  "解除鎖定"
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
 "Unlocking disk...": [
  null,
  ""
 ],
 "Unmount": [
  null,
  "卸載"
 ],
 "Unmounting $target": [
  null,
  ""
 ],
 "Unrecognized Data": [
  null,
  ""
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  ""
 ],
 "Unsupported volume": [
  null,
  ""
 ],
 "Usage": [
  null,
  "使用方法"
 ],
 "Use 512 Byte emulation": [
  null,
  ""
 ],
 "Used": [
  null,
  "已使用"
 ],
 "Username": [
  null,
  "使用者名稱"
 ],
 "VDO Backing": [
  null,
  ""
 ],
 "VDO Device": [
  null,
  ""
 ],
 "VDO Device $0": [
  null,
  ""
 ],
 "VDO Devices": [
  null,
  ""
 ],
 "VDO backing devices can not be made smaller": [
  null,
  ""
 ],
 "VDO support not installed": [
  null,
  ""
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  ""
 ],
 "Verify key": [
  null,
  ""
 ],
 "Very securely erasing $target": [
  null,
  ""
 ],
 "Volume": [
  null,
  "音量"
 ],
 "Volume Group": [
  null,
  "儲區群組"
 ],
 "Volume Group $0": [
  null,
  ""
 ],
 "Volume Groups": [
  null,
  ""
 ],
 "Waiting for other software management operations to finish": [
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
 "key slot $0": [
  null,
  ""
 ],
 "undefined": [
  null,
  ""
 ],
 "unknown target": [
  null,
  ""
 ],
 "unpartitioned space on $0": [
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
  ""
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  ""
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  ""
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  ""
 ],
 "storage\u0004Drive": [
  null,
  ""
 ],
 "storage\u0004Hard Disk": [
  null,
  "硬碟"
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
  ""
 ],
 "format-bytes\u0004bytes": [
  null,
  "位元組"
 ]
}));
