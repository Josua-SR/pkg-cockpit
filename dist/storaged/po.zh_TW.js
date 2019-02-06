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
  "$0 塊設備"
 ],
 "$0 Chunk Size": [
  null,
  "$0 塊大小"
 ],
 "$0 Disks": [
  null,
  "$0 磁盤"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  "$0 數據+ $1 使用的開銷 $2 （$3）"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 磁盤丟失了"
 ],
 "$0 filesystems can not be made larger.": [
  null,
  "$0 文件系統不能變得更大。"
 ],
 "$0 filesystems can not be made smaller.": [
  null,
  "$0 文件系統不能變小。"
 ],
 "$0 filesystems can not be resized here.": [
  null,
  "$0 文件系統無法在此處調整大小。"
 ],
 "$0 is in active use": [
  null,
  "$0 正在積極使用"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 在任何存儲庫中都不可用。"
 ],
 "$0 of $1": [
  null,
  "可用 $0 共 $1"
 ],
 "$0 slots remain": [
  null,
  "$0 插槽仍然存在"
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  "$0 用的 $1 （$2 保存）"
 ],
 "$0 will be installed.": [
  null,
  "$0 將會被安裝。"
 ],
 "$0, $1 free": [
  null,
  "$0， $1 自由"
 ],
 "$name (from $host)": [
  null,
  "$name （從 $host）"
 ],
 "${size} ${desc}": [
  null,
  "${size} ${desc}"
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
  "--"
 ],
 "1 MiB": [
  null,
  "1 MiB"
 ],
 "1 day": [
  null,
  "1天"
 ],
 "1 hour": [
  null,
  "1小時"
 ],
 "1 week": [
  null,
  "1週"
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
  "5分鐘"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6個小時"
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
  "需要一個磁盤。"
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  "在刪除此磁盤之前，需要先添加備用磁盤。"
 ],
 "Activate": [
  null,
  "使用"
 ],
 "Activating $target": [
  null,
  "激活 $target"
 ],
 "Active since": [
  null,
  "活躍起來"
 ],
 "Add": [
  null,
  "加入"
 ],
 "Add Disks": [
  null,
  "添加磁盤"
 ],
 "Add Key": [
  null,
  "添加密鑰"
 ],
 "Add iSCSI Portal": [
  null,
  "添加iSCSI門戶"
 ],
 "Adding physical volume to $target": [
  null,
  "添加物理捲到 $target"
 ],
 "Additional packages:": [
  null,
  "附加包："
 ],
 "Address": [
  null,
  "位址"
 ],
 "Address cannot be empty": [
  null,
  "地址不能為空"
 ],
 "Address is not a valid URL": [
  null,
  "地址不是有效的URL"
 ],
 "Apply": [
  null,
  "套用"
 ],
 "At least $0 disks are needed.": [
  null,
  "至少 $0 需要磁盤。"
 ],
 "At least one disk is needed.": [
  null,
  "至少需要一個磁盤。"
 ],
 "Authentication required": [
  null,
  "需經過認證"
 ],
 "Available targets on $0": [
  null,
  "可用目標 $0"
 ],
 "Backing Device": [
  null,
  "支持設備"
 ],
 "Block": [
  null,
  "方塊"
 ],
 "Block device for filesystems": [
  null,
  "用於文件系統的塊設備"
 ],
 "Blocked": [
  null,
  "阻止"
 ],
 "Can't delete while unlocked": [
  null,
  "解鎖時無法刪除"
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
  "更改iSCSI啟動器名稱"
 ],
 "Change passphrase": [
  null,
  "更改密碼"
 ],
 "Checking $target": [
  null,
  "檢查 $target"
 ],
 "Checking RAID Device $target": [
  null,
  "檢查RAID設備 $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "檢查和修復RAID設備 $target"
 ],
 "Checking installed software": [
  null,
  "檢查已安裝的軟件"
 ],
 "Chunk Size": [
  null,
  "塊大小"
 ],
 "Cleaning up for $target": [
  null,
  "清理 $target"
 ],
 "Close": [
  null,
  "關閉"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "兼容所有系統和設備（MBR）"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "兼容現代系統和硬盤> 2TB（GPT）"
 ],
 "Compression": [
  null,
  "壓縮"
 ],
 "Confirm passphrase": [
  null,
  "確認密碼"
 ],
 "Confirm removal with passphrase": [
  null,
  "使用密碼確認刪除"
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
  "創建邏輯卷"
 ],
 "Create Partition": [
  null,
  "創建分區"
 ],
 "Create RAID Device": [
  null,
  "創建RAID設備"
 ],
 "Create Snapshot": [
  null,
  "創建快照"
 ],
 "Create Thin Volume": [
  null,
  "創建精簡卷"
 ],
 "Create VDO Device": [
  null,
  "創建VDO設備"
 ],
 "Create Volume Group": [
  null,
  "創建卷組"
 ],
 "Create new Logical Volume": [
  null,
  "創建新的邏輯卷"
 ],
 "Create partition": [
  null,
  "創建分區"
 ],
 "Create partition on $0": [
  null,
  "創建分區 $0"
 ],
 "Create partition table": [
  null,
  "創建分區表"
 ],
 "Creating RAID Device $target": [
  null,
  "創建RAID設備 $target"
 ],
 "Creating filesystem on $target": [
  null,
  "創建文件系統 $target"
 ],
 "Creating logical volume $target": [
  null,
  "創建邏輯卷 $target"
 ],
 "Creating partition $target": [
  null,
  "創建分區 $target"
 ],
 "Creating snapshot of $target": [
  null,
  "創建快照 $target"
 ],
 "Creating volume group $target": [
  null,
  "創建卷組 $target"
 ],
 "Custom": [
  null,
  "自訂"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "自定義（輸入文件系統類型）"
 ],
 "Custom encryption options": [
  null,
  "自定義加密選項"
 ],
 "Custom mount option": [
  null,
  "自定義安裝選項"
 ],
 "Custom mount options": [
  null,
  "自定義安裝選項"
 ],
 "DISK IS FAILING": [
  null,
  "磁盤失敗"
 ],
 "Data Used": [
  null,
  "使用的數據"
 ],
 "Deactivate": [
  null,
  "取消啟動"
 ],
 "Deactivating $target": [
  null,
  "停用 $target"
 ],
 "Deduplication": [
  null,
  "重複數據刪除"
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
  "刪除 $target"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "刪除RAID設備將清除其上的所有數據。"
 ],
 "Deleting a VDO device will erase all data on it.": [
  null,
  "刪除VDO設備將清除其上的所有數據。"
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "刪除邏輯卷將刪除其中的所有數據。"
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "刪除分區將刪除其中的所有數據。"
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "刪除卷組將刪除其上的所有數據。"
 ],
 "Deleting volume group $target": [
  null,
  "刪除卷組 $target"
 ],
 "Device File": [
  null,
  "設備文件"
 ],
 "Device is read-only": [
  null,
  "設備是只讀的"
 ],
 "Disk": [
  null,
  "磁碟"
 ],
 "Disk is OK": [
  null,
  "磁盤沒問題"
 ],
 "Disk passphrase": [
  null,
  "磁盤密碼"
 ],
 "Disks": [
  null,
  "磁盤"
 ],
 "Don't overwrite existing data": [
  null,
  "不要覆蓋現有數據"
 ],
 "Downloading $0": [
  null,
  "下載 $0"
 ],
 "Drive": [
  null,
  "駕駛"
 ],
 "Drives": [
  null,
  "驅動器"
 ],
 "Edit": [
  null,
  "編輯"
 ],
 "Edit Tang keyserver": [
  null,
  "編輯Tang keyserver"
 ],
 "Editing a key requires a free slot": [
  null,
  "編輯密鑰需要一個空閒插槽"
 ],
 "Ejecting $target": [
  null,
  "彈出 $target"
 ],
 "Emptying $target": [
  null,
  "清空 $target"
 ],
 "Encrypted $0": [
  null,
  "加密 $0"
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "加密EXT4（LUKS）"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "加密邏輯卷 $0"
 ],
 "Encrypted Partition of $0": [
  null,
  "加密分區 $0"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "加密XFS（LUKS）"
 ],
 "Encrypted volumes can not be resized here.": [
  null,
  "無法在此處調整加密卷的大小。"
 ],
 "Encrypted volumes need to be unlocked before they can be resized.": [
  null,
  "加密卷需要先解鎖才能調整大小。"
 ],
 "Encryption": [
  null,
  "加密"
 ],
 "Encryption Options": [
  null,
  "加密選項"
 ],
 "Erase": [
  null,
  "抹除"
 ],
 "Erasing $target": [
  null,
  "刪除 $target"
 ],
 "Error": [
  null,
  "錯誤"
 ],
 "Extended Partition": [
  null,
  "擴展分區"
 ],
 "FAILED": [
  null,
  "失敗"
 ],
 "Filesystem": [
  null,
  "檔案系統"
 ],
 "Filesystem Mounting": [
  null,
  "文件系統安裝"
 ],
 "Filesystem Name": [
  null,
  "文件系統名稱"
 ],
 "Filesystem type": [
  null,
  "文件系統類型"
 ],
 "Filesystems": [
  null,
  "文件系統"
 ],
 "Force remove passphrase in $0": [
  null,
  "強制刪除密碼 $0"
 ],
 "Format": [
  null,
  "格式"
 ],
 "Format $0": [
  null,
  "格式 $0"
 ],
 "Format Disk $0": [
  null,
  "格式化磁盤 $0"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "格式化磁盤將清除其上的所有數據。"
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "格式化存儲設備將清除其上的所有數據。"
 ],
 "Free": [
  null,
  "剩餘"
 ],
 "Free Space": [
  null,
  "可用空間"
 ],
 "Free up space in this group: Shrink or delete other logical volumes or add another physical volume.": [
  null,
  ""
 ],
 "Go to now": [
  null,
  "去吧"
 ],
 "Grow": [
  null,
  "增長"
 ],
 "Grow Logical Volume": [
  null,
  "增長邏輯卷"
 ],
 "Grow logical size of $0": [
  null,
  "增加邏輯大小 $0"
 ],
 "Grow to take all space": [
  null,
  "成長以佔據所有空間"
 ],
 "If tang-show-keys is not available, run the following:": [
  null,
  "如果沒有tang-show-keys，請運行以下命令："
 ],
 "In Sync": [
  null,
  "同步中"
 ],
 "Inactive volume": [
  null,
  "無效音量"
 ],
 "Index Memory": [
  null,
  "索引記憶"
 ],
 "Install": [
  null,
  "安裝"
 ],
 "Install NFS Support": [
  null,
  "安裝NFS支持"
 ],
 "Install Software": [
  null,
  "安裝軟件"
 ],
 "Install VDO support": [
  null,
  "安裝VDO支持"
 ],
 "Installing $0": [
  null,
  "正在安裝 $0"
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
  "此處無法編輯未知類型的鍵槽"
 ],
 "Key source": [
  null,
  "關鍵來源"
 ],
 "Keys": [
  null,
  "按鍵"
 ],
 "Keyserver": [
  null,
  "密鑰服務器"
 ],
 "Keyserver address": [
  null,
  "密鑰服務器地址"
 ],
 "Keyserver removal may prevent unlocking $0.": [
  null,
  "密鑰服務器刪除可能會阻止解鎖 $0。"
 ],
 "Local Mount Point": [
  null,
  "當地的Mount Point"
 ],
 "Lock": [
  null,
  "鎖定"
 ],
 "Locking $target": [
  null,
  "鎖定 $target"
 ],
 "Logical": [
  null,
  "合乎邏輯"
 ],
 "Logical Size": [
  null,
  "邏輯大小"
 ],
 "Logical Volume": [
  null,
  "邏輯卷"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "邏輯卷（快照）"
 ],
 "Logical Volume of $0": [
  null,
  "邏輯卷 $0"
 ],
 "Make sure the key hash from the Tang server matches:": [
  null,
  "確保來自Tang服務器的密鑰哈希匹配："
 ],
 "Manually check with SSH: ": [
  null,
  "用SSH手動檢查： "
 ],
 "Marking $target as faulty": [
  null,
  "印記 $target 有缺陷的"
 ],
 "Member of RAID Device": [
  null,
  "RAID設備的成員"
 ],
 "Member of RAID Device $0": [
  null,
  "RAID設備的成員 $0"
 ],
 "Metadata Used": [
  null,
  "使用的元數據"
 ],
 "Modifying $target": [
  null,
  "修改 $target"
 ],
 "Mount": [
  null,
  "安裝"
 ],
 "Mount Options": [
  null,
  "裝載選項"
 ],
 "Mount Point": [
  null,
  "登山點"
 ],
 "Mount at boot": [
  null,
  "在靴子上安裝"
 ],
 "Mount options": [
  null,
  "裝載選項"
 ],
 "Mount point can not be empty": [
  null,
  "掛載點不能為空"
 ],
 "Mount point cannot be empty.": [
  null,
  "掛載點不能為空。"
 ],
 "Mount point must start with \"/\".": [
  null,
  "掛載點必須以“/”開頭。"
 ],
 "Mount read only": [
  null,
  "安裝只讀"
 ],
 "Mounted At": [
  null,
  "安裝在"
 ],
 "Mounting": [
  null,
  "安裝"
 ],
 "Mounting $target": [
  null,
  "安裝 $target"
 ],
 "NFS Mount": [
  null,
  "NFS掛載"
 ],
 "NFS Mounts": [
  null,
  "NFS掛載"
 ],
 "NFS Support not installed": [
  null,
  "未安裝NFS支持"
 ],
 "NTFS - Compatible with most systems": [
  null,
  "NTFS  - 與大多數係統兼容"
 ],
 "Name": [
  null,
  "名稱"
 ],
 "Name can not be empty.": [
  null,
  "名稱不能為空。"
 ],
 "Name cannot be empty.": [
  null,
  "名稱不能為空。"
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
  "名稱不能超過127個字符。"
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "名稱不能包含字符'$0“。"
 ],
 "Name cannot contain whitespace.": [
  null,
  "名稱不能包含空格。"
 ],
 "New NFS Mount": [
  null,
  "新的NFS安裝"
 ],
 "New passphrase": [
  null,
  "新密碼"
 ],
 "Next": [
  null,
  "下一步"
 ],
 "No Filesystem": [
  null,
  "沒有文件系統"
 ],
 "No Logical Volumes": [
  null,
  "沒有邏輯卷"
 ],
 "No NFS mounts set up": [
  null,
  "沒有設置NFS掛載"
 ],
 "No available slots": [
  null,
  "沒有可用的插槽"
 ],
 "No disks are available.": [
  null,
  "沒有磁盤可用。"
 ],
 "No drives attached": [
  null,
  "沒有附加驅動器"
 ],
 "No free key slots": [
  null,
  "沒有免費的鑰匙槽"
 ],
 "No free space": [
  null,
  "沒有自由空間"
 ],
 "No iSCSI targets set up": [
  null,
  "未設置iSCSI目標"
 ],
 "No keys added": [
  null,
  "沒有添加密鑰"
 ],
 "No media inserted": [
  null,
  "沒有插入媒體"
 ],
 "No partitioning": [
  null,
  "沒有分區"
 ],
 "No storage set up as RAID": [
  null,
  "沒有存儲設置為RAID"
 ],
 "No storage set up as VDO": [
  null,
  "沒有存儲設置為VDO"
 ],
 "No volume groups created": [
  null,
  "沒有創建卷組"
 ],
 "Not enough space to grow.": [
  null,
  ""
 ],
 "Not found": [
  null,
  "未找到"
 ],
 "Not mounted": [
  null,
  "沒裝"
 ],
 "Not running": [
  null,
  "沒跑"
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
  "舊密碼"
 ],
 "On": [
  null,
  "開"
 ],
 "Only $0 of $1 are used.": [
  null,
  "只要 $0 的 $1 使用。"
 ],
 "Operation '$operation' on $target": [
  null,
  "運營'$operation' 上 $target"
 ],
 "Options": [
  null,
  "選項"
 ],
 "Other Devices": [
  null,
  "其他設備"
 ],
 "Overwrite existing data with zeros": [
  null,
  "用零覆蓋現有數據"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit崩潰了"
 ],
 "Partition": [
  null,
  "劃分"
 ],
 "Partition of $0": [
  null,
  "分區 $0"
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
  "密碼短語不能為空"
 ],
 "Passphrase removal may prevent unlocking $0.": [
  null,
  "密碼短語刪除可能會阻止解鎖 $0。"
 ],
 "Passphrases do not match": [
  null,
  "密碼短語不匹配"
 ],
 "Password": [
  null,
  "密碼"
 ],
 "Path on Server": [
  null,
  "服務器上的路徑"
 ],
 "Path on server cannot be empty.": [
  null,
  "服務器上的路徑不能為空。"
 ],
 "Path on server must start with \"/\".": [
  null,
  "服務器上的路徑必須以“/”開頭。"
 ],
 "Physical": [
  null,
  "實體"
 ],
 "Physical Volume": [
  null,
  "物理量"
 ],
 "Physical Volumes": [
  null,
  "物理卷"
 ],
 "Physical volume of $0": [
  null,
  "體積 $0"
 ],
 "Physical volumes can not be resized here.": [
  null,
  "此處無法調整物理卷的大小。"
 ],
 "Please confirm deletion of $0": [
  null,
  "請確認刪除 $0"
 ],
 "Please confirm stopping of $0": [
  null,
  "請確認停止 $0"
 ],
 "Pool": [
  null,
  "集池"
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "精簡邏輯卷池"
 ],
 "Pool for Thin Volumes": [
  null,
  "精簡池的池"
 ],
 "Pool for thinly provisioned volumes": [
  null,
  "精簡配置卷的池"
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
  "RAID（$0）"
 ],
 "RAID 0": [
  null,
  "RAID 0"
 ],
 "RAID 0 (Stripe)": [
  null,
  "RAID 0（條紋）"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1（鏡像）"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RAID 10（鏡子條紋）"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4（專用奇偶校驗）"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5（分佈式奇偶校驗）"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6（雙分佈式奇偶校驗）"
 ],
 "RAID Device": [
  null,
  "RAID 裝置"
 ],
 "RAID Device $0": [
  null,
  "RAID設備 $0"
 ],
 "RAID Devices": [
  null,
  "RAID設備"
 ],
 "RAID Level": [
  null,
  "RAID級別"
 ],
 "RAID Member": [
  null,
  "RAID會員"
 ],
 "Reading": [
  null,
  "讀"
 ],
 "Reboot": [
  null,
  "重新開機"
 ],
 "Recovering": [
  null,
  "恢復"
 ],
 "Recovering RAID Device $target": [
  null,
  "恢復RAID設備 $target"
 ],
 "Removals:": [
  null,
  "清除："
 ],
 "Remove": [
  null,
  "移除"
 ],
 "Remove $0?": [
  null,
  "去掉 $0？"
 ],
 "Remove Tang keyserver": [
  null,
  "刪除Tang keyserver"
 ],
 "Remove device": [
  null,
  "刪除設備"
 ],
 "Remove passphrase": [
  null,
  "刪除密碼"
 ],
 "Remove passphrase in $0?": [
  null,
  "刪除中的密碼 $0？"
 ],
 "Removing $0": [
  null,
  "刪除 $0"
 ],
 "Removing $target from RAID Device": [
  null,
  "刪除 $target 來自RAID設備"
 ],
 "Removing physical volume from $target": [
  null,
  "從中刪除物理卷 $target"
 ],
 "Rename": [
  null,
  "重新命名"
 ],
 "Rename Logical Volume": [
  null,
  "重命名邏輯卷"
 ],
 "Rename Volume Group": [
  null,
  "重命名卷組"
 ],
 "Renaming $target": [
  null,
  "重命名 $target"
 ],
 "Repairing $target": [
  null,
  "修復 $target"
 ],
 "Repeat passphrase": [
  null,
  "重複密碼"
 ],
 "Resizing $target": [
  null,
  "調整 $target"
 ],
 "Running": [
  null,
  "執行中"
 ],
 "SMART self-test of $target": [
  null,
  "智能自我測試 $target"
 ],
 "Save": [
  null,
  "儲存"
 ],
 "Saving a new passphrase requires unlocking the disk. Please provide a current disk passphrase.": [
  null,
  "保存新密碼需要解鎖磁盤。請提供當前的磁盤密碼。"
 ],
 "Securely erasing $target": [
  null,
  "安全擦除 $target"
 ],
 "Server": [
  null,
  "伺服器"
 ],
 "Server Address": [
  null,
  "服務器地址"
 ],
 "Server address cannot be empty.": [
  null,
  "服務器地址不能為空。"
 ],
 "Server cannot be empty.": [
  null,
  "服務器不能為空。"
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
  "設置循環設備 $target"
 ],
 "Shrink": [
  null,
  "縮小"
 ],
 "Shrink Logical Volume": [
  null,
  "收縮邏輯卷"
 ],
 "Size": [
  null,
  "大小"
 ],
 "Size cannot be negative": [
  null,
  "大小不能是負面的"
 ],
 "Size cannot be zero": [
  null,
  "大小不能為零"
 ],
 "Size is too large": [
  null,
  "尺寸太大"
 ],
 "Size must be a number": [
  null,
  "大小必須是數字"
 ],
 "Size must be at least $0": [
  null,
  "尺寸必須至少為 $0"
 ],
 "Slot $0": [
  null,
  "插槽 $0"
 ],
 "Spare": [
  null,
  "備用"
 ],
 "Start": [
  null,
  "開始"
 ],
 "Start Multipath": [
  null,
  "啟動多路徑"
 ],
 "Starting RAID Device $target": [
  null,
  "啟動RAID設備 $target"
 ],
 "Starting swapspace $target": [
  null,
  "啟動swapspace $target"
 ],
 "Stop": [
  null,
  "停止"
 ],
 "Stop Device": [
  null,
  "停止設備"
 ],
 "Stop and Unmount": [
  null,
  "停止和卸載"
 ],
 "Stop and remove": [
  null,
  "停止並刪除"
 ],
 "Stopping RAID Device $target": [
  null,
  "停止RAID設備 $target"
 ],
 "Stopping swapspace $target": [
  null,
  "停止交換空間 $target"
 ],
 "Storage": [
  null,
  "儲存裝置"
 ],
 "Storage Logs": [
  null,
  "存儲日誌"
 ],
 "Storage can not be managed on this system.": [
  null,
  ""
 ],
 "Store passphrase": [
  null,
  "存儲密碼"
 ],
 "Stored Passphrase": [
  null,
  "存儲的密碼短語"
 ],
 "Stored passphrase": [
  null,
  "存儲密碼"
 ],
 "Support is installed.": [
  null,
  "已安裝支持。"
 ],
 "Swap": [
  null,
  "置換"
 ],
 "Synchronizing RAID Device $target": [
  null,
  "同步RAID設備 $target"
 ],
 "Tang keyserver": [
  null,
  "唐鑰匙服務器"
 ],
 "The RAID Array is in a degraded state": [
  null,
  "RAID陣列處於降級狀態"
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  "必須運行RAID設備才能添加備用磁盤。"
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  "必須運行RAID設備才能刪除磁盤。"
 ],
 "The creation of this VDO device did not finish and the device can't be used.": [
  null,
  "此VDO設備的創建未完成，無法使用該設備。"
 ],
 "The currently logged in user is not permitted to see information about keys.": [
  null,
  "當前登錄的用戶不允許查看有關密鑰的信息。"
 ],
 "The filesystem is in use by login sessions and system services. Proceeding will stop these.": [
  null,
  "登錄會話和系統服務正在使用文件系統。繼續進行將阻止這些。"
 ],
 "The filesystem is in use by login sessions. Proceeding will stop these.": [
  null,
  "登錄會話正在使用文件系統。繼續進行將阻止這些。"
 ],
 "The filesystem is in use by system services. Proceeding will stop these.": [
  null,
  "文件系統正由系統服務使用。繼續進行將阻止這些。"
 ],
 "The last disk of a RAID device cannot be removed.": [
  null,
  "無法刪除RAID設備的最後一個磁盤。"
 ],
 "The last key slot can not be removed": [
  null,
  "無法刪除最後一個密鑰槽"
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  "無法刪除卷組的最後一個物理卷。"
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "用戶 <b>$0</b> 不允許管理存儲空間"
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  "系統上有多個路徑的設備，但多路徑服務未運行。"
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  "其他地方沒有足夠的可用空間來移除此物理卷。至少 $0 需要更多的自由空間。"
 ],
 "Thin Logical Volume": [
  null,
  "精簡邏輯卷"
 ],
 "This NFS mount is in use and only its options can be changed.": [
  null,
  "此NFS掛載正在使用中，只能更改其選項。"
 ],
 "This VDO device does not use all of its backing device.": [
  null,
  "此VDO設備不使用其所有後備設備。"
 ],
 "This device has filesystems that are currently in use. Proceeding will unmount all filesystems on it.": [
  null,
  "此設備具有當前正在使用的文件系統。 Proceeding將卸載其上的所有文件系統。"
 ],
 "This device is currently used for RAID devices.": [
  null,
  "該設備目前用於RAID設備。"
 ],
 "This device is currently used for RAID devices. Proceeding will remove it from its RAID devices.": [
  null,
  "該設備目前用於RAID設備。繼續將其從RAID設備中刪除。"
 ],
 "This device is currently used for VDO devices.": [
  null,
  "該設備目前用於VDO設備。"
 ],
 "This device is currently used for volume groups.": [
  null,
  "此設備當前用於卷組。"
 ],
 "This device is currently used for volume groups. Proceeding will remove it from its volume groups.": [
  null,
  "此設備當前用於卷組。繼續將其從卷組中刪除。"
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  "設備恢復時無法刪除此磁盤。"
 ],
 "This volume needs to be activated before it can be resized.": [
  null,
  "在調整大小之前，需要激活此卷。"
 ],
 "Total size: $0": [
  null,
  "總大小： $0"
 ],
 "Trust key": [
  null,
  "信任密鑰"
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
  "無法訪問服務器"
 ],
 "Unable to remove mount": [
  null,
  "無法刪除掛載"
 ],
 "Unable to unmount filesystem": [
  null,
  "無法卸載文件系統"
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
  "未知（$0）"
 ],
 "Unknown host name": [
  null,
  "未知的主機名"
 ],
 "Unknown type": [
  null,
  "未知類型"
 ],
 "Unlock": [
  null,
  "解除鎖定"
 ],
 "Unlock at boot": [
  null,
  "在啟動時解鎖"
 ],
 "Unlock read only": [
  null,
  "解鎖只讀"
 ],
 "Unlocking $target": [
  null,
  "解鎖 $target"
 ],
 "Unlocking disk...": [
  null,
  "解鎖磁盤......"
 ],
 "Unmount": [
  null,
  "卸載"
 ],
 "Unmounting $target": [
  null,
  "卸載 $target"
 ],
 "Unrecognized Data": [
  null,
  "無法識別的數據"
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  "這裡無法識別無法識別的數據。"
 ],
 "Unsupported volume": [
  null,
  "音量不受支持"
 ],
 "Usage": [
  null,
  "使用方法"
 ],
 "Use 512 Byte emulation": [
  null,
  "使用512字節模擬"
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
  "VDO支持"
 ],
 "VDO Device": [
  null,
  "VDO設備"
 ],
 "VDO Device $0": [
  null,
  "VDO設備 $0"
 ],
 "VDO Devices": [
  null,
  "VDO設備"
 ],
 "VDO backing devices can not be made smaller": [
  null,
  "VDO後備設備不能做得更小"
 ],
 "VDO support not installed": [
  null,
  "未安裝VDO支持"
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  "VFAT  - 兼容所有系統和設備"
 ],
 "Verify key": [
  null,
  "驗證密鑰"
 ],
 "Very securely erasing $target": [
  null,
  "非常安全地擦除 $target"
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
  "卷組 $0"
 ],
 "Volume Groups": [
  null,
  "卷組"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "等待其他軟件管理操作完成"
 ],
 "What if tang-show-keys is not available?": [
  null,
  "如果沒有tang-show-keys怎麼辦？"
 ],
 "Write-mostly": [
  null,
  "寫大多"
 ],
 "Writing": [
  null,
  "寫作"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS  -  Red Hat Enterprise Linux 7默認"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 二進制數據的字節]"
 ],
 "[binary data]": [
  null,
  "[二進制數據]"
 ],
 "[no data]": [
  null,
  "[沒有數據]"
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4  -  Red Hat Enterprise Linux 6默認"
 ],
 "iSCSI Targets": [
  null,
  "iSCSI目標"
 ],
 "key slot $0": [
  null,
  "鍵槽 $0"
 ],
 "undefined": [
  null,
  "未定義"
 ],
 "unknown target": [
  null,
  "未知目標"
 ],
 "unpartitioned space on $0": [
  null,
  "未分區的空間 $0"
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 文件系統"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  "加密數據"
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "其他數據"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "交換空間"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "無法識別的數據"
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  "VDO支持"
 ],
 "storage\u0004Drive": [
  null,
  "駕駛"
 ],
 "storage\u0004Hard Disk": [
  null,
  "硬碟"
 ],
 "storage\u0004Optical Drive": [
  null,
  "光驅"
 ],
 "storage\u0004Removable Drive": [
  null,
  "可拆卸驅動器"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "固態磁盤"
 ],
 "format-bytes\u0004bytes": [
  null,
  "位元組"
 ]
}));
