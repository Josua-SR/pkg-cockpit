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
  "language": "zh_CN",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Block Device": [
  null,
  "$0 块设备"
 ],
 "$0 Chunk Size": [
  null,
  "$0 区块大小"
 ],
 "$0 Disks": [
  null,
  "$0 磁盘"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  "$0 数据 + $1 过渡使用 $2（$3）"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 磁盘无法找到"
 ],
 "$0 filesystems can not be made larger.": [
  null,
  "$0文件系统不能变得更大。"
 ],
 "$0 filesystems can not be made smaller.": [
  null,
  "$0文件系统不能变得更小。"
 ],
 "$0 filesystems can not be resized here.": [
  null,
  "$0文件系统不能在这里改变大小。"
 ],
 "$0 is in active use": [
  null,
  "$0 已激活"
 ],
 "$0 is not available from any repository.": [
  null,
  "所有仓库都不提供 $0。"
 ],
 "$0 of $1": [
  null,
  "$1 的 $0"
 ],
 "$0 slots remain": [
  null,
  "剩余 $0 个槽位"
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  "$0 使用 $1（已保存 $2）"
 ],
 "$0 will be installed.": [
  null,
  "将安装 $0。"
 ],
 "$0, $1 free": [
  null,
  "$0, $1 可用"
 ],
 "$name (from $host)": [
  null,
  "$name (来自 $host)"
 ],
 "${size} ${desc}": [
  null,
  "${size} ${desc}"
 ],
 "(default)": [
  null,
  "（默认）"
 ],
 "(none)": [
  null,
  "（无）"
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
  "1 天"
 ],
 "1 hour": [
  null,
  "1 小时"
 ],
 "1 week": [
  null,
  "1 周"
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
  "5 分钟"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6 小时"
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
  "需要一个磁盘。"
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  "该磁盘被移除前，需要添加一个备用的磁盘。"
 ],
 "Activate": [
  null,
  "激活"
 ],
 "Activating $target": [
  null,
  "激活 $target"
 ],
 "Active since": [
  null,
  "活跃自"
 ],
 "Add": [
  null,
  "添加"
 ],
 "Add Disks": [
  null,
  "添加磁盘"
 ],
 "Add Key": [
  null,
  "添加密钥"
 ],
 "Add iSCSI Portal": [
  null,
  "添加 iSCSI 门户"
 ],
 "Adding physical volume to $target": [
  null,
  "为 $target 添加物理卷"
 ],
 "Additional packages:": [
  null,
  "额外的软件包："
 ],
 "Address": [
  null,
  "地址"
 ],
 "Address cannot be empty": [
  null,
  "地址不能为空"
 ],
 "Address is not a valid URL": [
  null,
  "该地址无效"
 ],
 "Apply": [
  null,
  "应用"
 ],
 "At least $0 disks are needed.": [
  null,
  "至少需要 $0 块磁盘。"
 ],
 "At least one disk is needed.": [
  null,
  "至少需要 1 块磁盘。"
 ],
 "Authentication required": [
  null,
  "需要验证"
 ],
 "Available targets on $0": [
  null,
  "$0 上可用的目标"
 ],
 "Backing Device": [
  null,
  "后端设备"
 ],
 "Block": [
  null,
  "块"
 ],
 "Block device for filesystems": [
  null,
  "文件系统的块设备"
 ],
 "Blocked": [
  null,
  "受阻"
 ],
 "Can't delete while unlocked": [
  null,
  "解锁时无法删除"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Change": [
  null,
  "变更"
 ],
 "Change iSCSI Initiator Name": [
  null,
  "变更 iSCSI Initiator 名称"
 ],
 "Change passphrase": [
  null,
  "修改密码"
 ],
 "Checking $target": [
  null,
  "检查 $target"
 ],
 "Checking RAID Device $target": [
  null,
  "检查 RAID 设备 $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "检查并修复 RAID 设备 $target"
 ],
 "Checking installed software": [
  null,
  "检查安装的软件"
 ],
 "Chunk Size": [
  null,
  "区块大小"
 ],
 "Cleaning up for $target": [
  null,
  "清理 $target"
 ],
 "Close": [
  null,
  "关闭"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "兼容所有系统和设备 (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "兼容现代系统，且硬盘空间大于 2TB (GPT)"
 ],
 "Compression": [
  null,
  "压缩"
 ],
 "Confirm passphrase": [
  null,
  "确认口令"
 ],
 "Confirm removal with passphrase": [
  null,
  "使用密码确认删除"
 ],
 "Content": [
  null,
  "内容"
 ],
 "Create": [
  null,
  "创建"
 ],
 "Create Logical Volume": [
  null,
  "创建逻辑卷"
 ],
 "Create Partition": [
  null,
  "创建分区"
 ],
 "Create RAID Device": [
  null,
  "创建 RAID 设备"
 ],
 "Create Snapshot": [
  null,
  "创建快照"
 ],
 "Create Thin Volume": [
  null,
  "创建Thin卷"
 ],
 "Create VDO Device": [
  null,
  "创建 VDO 设备"
 ],
 "Create Volume Group": [
  null,
  "创建卷组"
 ],
 "Create new Logical Volume": [
  null,
  "创建新逻辑卷"
 ],
 "Create Partition on $0": [
  null,
  "为 $0 创建分区"
 ],
 "Create Partition Table": [
  null,
  "创建分区表"
 ],
 "Creating RAID Device $target": [
  null,
  "创建 RAID 设备 $target"
 ],
 "Creating filesystem on $target": [
  null,
  "在 $target 中创建文件系统"
 ],
 "Creating logical volume $target": [
  null,
  "创建逻辑卷 $target"
 ],
 "Creating partition $target": [
  null,
  "创建分区 $target"
 ],
 "Creating snapshot of $target": [
  null,
  "创建快照 $target "
 ],
 "Creating volume group $target": [
  null,
  "创建卷组 $target"
 ],
 "Custom": [
  null,
  "自定义"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "自定义 (输入文件系统类型)"
 ],
 "Custom encryption options": [
  null,
  "自定义加密选项"
 ],
 "Custom mount options": [
  null,
  "自定义挂载选项"
 ],
 "DISK IS FAILING": [
  null,
  "磁盘错误"
 ],
 "Data Used": [
  null,
  "数据已使用空间"
 ],
 "Deactivate": [
  null,
  "取消激活"
 ],
 "Deactivating $target": [
  null,
  "取消激活 $target"
 ],
 "Deduplication": [
  null,
  "复制"
 ],
 "Default": [
  null,
  "默认"
 ],
 "Delete": [
  null,
  "删除"
 ],
 "Deleting $target": [
  null,
  "删除 $target"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "删除 RAID 设备将擦除其中的所有数据."
 ],
 "Deleting a VDO device will erase all data on it.": [
  null,
  "删除 RAID 设备将擦除其中的所有数据."
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "删除逻辑卷将擦除其中的所有数据。"
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "删除分区将擦除其中的所有数据。"
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "删除卷组将擦除其中的所有数据。"
 ],
 "Deleting volume group $target": [
  null,
  "删除卷组 $target"
 ],
 "Device File": [
  null,
  "设备文件"
 ],
 "Device is read-only": [
  null,
  "设备只读"
 ],
 "Disk": [
  null,
  "磁盘"
 ],
 "Disk is OK": [
  null,
  "磁盘良好"
 ],
 "Disk passphrase": [
  null,
  "磁盘口令"
 ],
 "Disks": [
  null,
  "磁盘"
 ],
 "Don't overwrite existing data": [
  null,
  "不覆盖已存在数据"
 ],
 "Downloading $0": [
  null,
  "正在下载"
 ],
 "Drive": [
  null,
  "驱动"
 ],
 "Drives": [
  null,
  "驱动器"
 ],
 "Edit": [
  null,
  "编辑"
 ],
 "Edit Tang keyserver": [
  null,
  "编辑Tang keyserver"
 ],
 "Editing a key requires a free slot": [
  null,
  "编辑密钥需要一个空闲插槽"
 ],
 "Ejecting $target": [
  null,
  "弹出 $target"
 ],
 "Emptying $target": [
  null,
  "清空 $target"
 ],
 "Encrypted $0": [
  null,
  "已加密 $0"
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "加密 EXT4 (LUKS)"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "$0 的已加密逻辑卷"
 ],
 "Encrypted Partition of $0": [
  null,
  "$0 的已加密分区"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "加密 XFS (LUKS)"
 ],
 "Encrypted volumes can not be resized here.": [
  null,
  "加密卷不能在这里改变大小。"
 ],
 "Encrypted volumes need to be unlocked before they can be resized.": [
  null,
  "加密卷需要先解锁才能调整大小。"
 ],
 "Encryption": [
  null,
  "加密"
 ],
 "Encryption Options": [
  null,
  "加密选项"
 ],
 "Erase": [
  null,
  "擦除"
 ],
 "Erasing $target": [
  null,
  "擦除 $target"
 ],
 "Error": [
  null,
  "错误"
 ],
 "Extended Partition": [
  null,
  "扩展分区"
 ],
 "FAILED": [
  null,
  "失败"
 ],
 "Filesystem": [
  null,
  "文件系统"
 ],
 "Filesystem Mounting": [
  null,
  "文件系统挂载"
 ],
 "Filesystem Name": [
  null,
  "文件系统名称"
 ],
 "Filesystem type": [
  null,
  "文件系统类型"
 ],
 "Filesystems": [
  null,
  "文件系统"
 ],
 "For legacy applications only. Reduces performance.": [
  null,
  ""
 ],
 "Force remove passphrase in $0": [
  null,
  "强制删除 $0 中的密码"
 ],
 "Format": [
  null,
  "格式化"
 ],
 "Format $0": [
  null,
  "格式 $0"
 ],
 "Format Disk $0": [
  null,
  "格式化磁盘 $0"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "格式化磁盘将擦除其中的所有数据。"
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "格式化存储设备将擦除其中的所有数据."
 ],
 "Free": [
  null,
  "可用"
 ],
 "Free Space": [
  null,
  "空闲空间"
 ],
 "Free up space in this group: Shrink or delete other logical volumes or add another physical volume.": [
  null,
  ""
 ],
 "Go to now": [
  null,
  "转到现在"
 ],
 "Grow": [
  null,
  "增长"
 ],
 "Grow Content": [
  null,
  ""
 ],
 "Grow Logical Volume": [
  null,
  "稀疏逻辑卷增长"
 ],
 "Grow logical size of $0": [
  null,
  "增长 $0 的逻辑大小"
 ],
 "Grow to take all space": [
  null,
  "增长到占据所有空间"
 ],
 "If tang-show-keys is not available, run the following:": [
  null,
  "如果没有 tang-show-keys，请运行以下命令："
 ],
 "In Sync": [
  null,
  "同步中"
 ],
 "Inactive volume": [
  null,
  "暂停卷"
 ],
 "Index Memory": [
  null,
  "索引内存"
 ],
 "Install": [
  null,
  "安装"
 ],
 "Install NFS Support": [
  null,
  "安装 NFS 支持"
 ],
 "Install Software": [
  null,
  "安装软件"
 ],
 "Install VDO support": [
  null,
  "安装 VDO 支持"
 ],
 "Installing $0": [
  null,
  "正在安装 $0"
 ],
 "Invalid username or password": [
  null,
  "无效的用户名或密码"
 ],
 "Jobs": [
  null,
  "任务"
 ],
 "Key slots with unknown types can not be edited here": [
  null,
  "这里无法编辑未知类型的密钥 slot"
 ],
 "Key source": [
  null,
  "密钥源"
 ],
 "Keys": [
  null,
  "密钥"
 ],
 "Keyserver": [
  null,
  "Keyserver"
 ],
 "Keyserver address": [
  null,
  "Keyserver 地址"
 ],
 "Keyserver removal may prevent unlocking $0.": [
  null,
  "删除 keyserver 可能会阻止解锁 $0。"
 ],
 "Local Mount Point": [
  null,
  "挂载点"
 ],
 "Lock": [
  null,
  "锁定"
 ],
 "Locking $target": [
  null,
  "锁定 $target"
 ],
 "Logical": [
  null,
  "逻辑"
 ],
 "Logical Size": [
  null,
  "逻辑大小"
 ],
 "Logical Volume": [
  null,
  "逻辑卷"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "逻辑卷 (快照)"
 ],
 "Logical Volume of $0": [
  null,
  "$0 的逻辑卷"
 ],
 "Make sure the key hash from the Tang server matches:": [
  null,
  "确保来自 Tang 服务器的密钥哈希匹配："
 ],
 "Manually check with SSH: ": [
  null,
  "用 SSH 手动检查： "
 ],
 "Marking $target as faulty": [
  null,
  "标记 $target 为故障"
 ],
 "Member of RAID Device": [
  null,
  "RAID 设备的成员"
 ],
 "Member of RAID Device $0": [
  null,
  "RAID 设备 $0 的成员"
 ],
 "Metadata Used": [
  null,
  "已使用的元数据"
 ],
 "Modifying $target": [
  null,
  "修改 $target"
 ],
 "Mount": [
  null,
  "挂载"
 ],
 "Mount Options": [
  null,
  "挂载选项"
 ],
 "Mount Point": [
  null,
  "挂载点"
 ],
 "Mount at boot": [
  null,
  "引导时挂载"
 ],
 "Mount point can not be empty": [
  null,
  "挂载点不能为空"
 ],
 "Mount point cannot be empty.": [
  null,
  "挂载点不能为空"
 ],
 "Mount point must start with \"/\".": [
  null,
  "挂载点必须以“/”开头。"
 ],
 "Mount read only": [
  null,
  "只读挂载"
 ],
 "Mounted At": [
  null,
  "挂载于"
 ],
 "Mounting": [
  null,
  "挂载"
 ],
 "Mounting $target": [
  null,
  "挂载 $target"
 ],
 "NFS Mount": [
  null,
  "NFS 挂载"
 ],
 "NFS Mounts": [
  null,
  "NFS 挂载"
 ],
 "NFS Support not installed": [
  null,
  "未安装 NFS 的支持"
 ],
 "NTFS - Compatible with most systems": [
  null,
  "NTFS - 兼容多数系统"
 ],
 "Name": [
  null,
  "名称"
 ],
 "Name can not be empty.": [
  null,
  "名称不能为空."
 ],
 "Name cannot be empty.": [
  null,
  "名称不能为空。"
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
  "名称不能长于127个字符。"
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "名称不能包含字符 '$0'。"
 ],
 "Name cannot contain whitespace.": [
  null,
  "名称不能包含空格。"
 ],
 "New NFS Mount": [
  null,
  "新的 NFS 挂载"
 ],
 "New passphrase": [
  null,
  "新口令"
 ],
 "Next": [
  null,
  "下一步"
 ],
 "No Filesystem": [
  null,
  "无文件系统"
 ],
 "No Logical Volumes": [
  null,
  "没有逻辑卷"
 ],
 "No NFS mounts set up": [
  null,
  "没有设置 NFS 挂载"
 ],
 "No available slots": [
  null,
  "没有可用的 slot"
 ],
 "No disks are available.": [
  null,
  "没有可用的磁盘。"
 ],
 "No drives attached": [
  null,
  "没有附件的驱动器"
 ],
 "No free key slots": [
  null,
  "没有空闲的密钥 slot"
 ],
 "No free space": [
  null,
  "没有剩余空间"
 ],
 "No iSCSI targets set up": [
  null,
  "没有设置 iSCSI 目标"
 ],
 "No keys added": [
  null,
  "没有添加密钥"
 ],
 "No media inserted": [
  null,
  "没有插入介质"
 ],
 "No partitioning": [
  null,
  "无分区"
 ],
 "No storage set up as RAID": [
  null,
  "没有存储设置为 RAID"
 ],
 "No storage set up as VDO": [
  null,
  "没有存储设置为 VDO"
 ],
 "No volume groups created": [
  null,
  "没有创建的卷组"
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
  "未加载"
 ],
 "Not running": [
  null,
  "未运行"
 ],
 "Off": [
  null,
  "关"
 ],
 "Ok": [
  null,
  "确认"
 ],
 "Old passphrase": [
  null,
  "旧密码口令"
 ],
 "On": [
  null,
  "开"
 ],
 "Only $0 of $1 are used.": [
  null,
  "仅使用 $1 中的 $0。"
 ],
 "Operation '$operation' on $target": [
  null,
  "在 $target 操作 '$operation'"
 ],
 "Options": [
  null,
  "选项"
 ],
 "Other Devices": [
  null,
  "其他设备"
 ],
 "Overwrite existing data with zeros": [
  null,
  "使用 0 覆盖已存在数据"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit 已崩溃"
 ],
 "Partition": [
  null,
  "分区"
 ],
 "Partition of $0": [
  null,
  "$0 的分区"
 ],
 "Partitioning": [
  null,
  "分区"
 ],
 "Passphrase": [
  null,
  "口令"
 ],
 "Passphrase cannot be empty": [
  null,
  "密码不能为空"
 ],
 "Passphrase removal may prevent unlocking $0.": [
  null,
  "删除密码口令可能会阻止解锁 $0。"
 ],
 "Passphrases do not match": [
  null,
  "口令不匹配"
 ],
 "Password": [
  null,
  "密码"
 ],
 "Path on Server": [
  null,
  "服务器上的路径"
 ],
 "Path on server cannot be empty.": [
  null,
  "服务器上的路径不能为空。"
 ],
 "Path on server must start with \"/\".": [
  null,
  "服务器上的路径必须以“/”开头。"
 ],
 "Physical": [
  null,
  "物理"
 ],
 "Physical Volume": [
  null,
  "物理卷"
 ],
 "Physical Volumes": [
  null,
  "物理卷"
 ],
 "Physical volume of $0": [
  null,
  "$0 的物理卷"
 ],
 "Physical volumes can not be resized here.": [
  null,
  "物理卷不能在这里改变大小。"
 ],
 "Please confirm deletion of $0": [
  null,
  "请确认删除 $0"
 ],
 "Please confirm stopping of $0": [
  null,
  "请确认停止$0"
 ],
 "Pool": [
  null,
  "池"
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "瘦逻辑卷池"
 ],
 "Pool for Thin Volumes": [
  null,
  "瘦卷的池"
 ],
 "Pool for thinly provisioned volumes": [
  null,
  "瘦分配配置卷的池"
 ],
 "Port": [
  null,
  "端口"
 ],
 "Process": [
  null,
  "流程"
 ],
 "Purpose": [
  null,
  "目的"
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
  "RAID 0 (条带)"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (镜像)"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RAID 10 (条带镜像)"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (奇偶校验)"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (奇偶校验)"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (双倍奇偶校验)"
 ],
 "RAID Device": [
  null,
  "RAID 设备"
 ],
 "RAID Device $0": [
  null,
  "RAID 设备 $0"
 ],
 "RAID Devices": [
  null,
  "RAID 设备"
 ],
 "RAID Level": [
  null,
  "RAID 级别"
 ],
 "RAID Member": [
  null,
  "RAID 成员"
 ],
 "Reading": [
  null,
  "读取中"
 ],
 "Reboot": [
  null,
  "重启"
 ],
 "Recovering": [
  null,
  "恢复"
 ],
 "Recovering RAID Device $target": [
  null,
  "恢复 RAID 设备 $target"
 ],
 "Removals:": [
  null,
  "移除"
 ],
 "Remove": [
  null,
  "删除"
 ],
 "Remove $0?": [
  null,
  "移除 $0"
 ],
 "Remove Tang keyserver": [
  null,
  "删除 Tang keyserver"
 ],
 "Remove device": [
  null,
  "删除设备"
 ],
 "Remove passphrase": [
  null,
  "删除密码"
 ],
 "Remove passphrase in $0?": [
  null,
  "在 $0 中删除密码？"
 ],
 "Removing $0": [
  null,
  "正在删除 $0"
 ],
 "Removing $target from RAID Device": [
  null,
  "从 RAID 设备中删除 $target"
 ],
 "Removing physical volume from $target": [
  null,
  "从 $target 删除物理卷"
 ],
 "Rename": [
  null,
  "重命名"
 ],
 "Rename Logical Volume": [
  null,
  "重命名逻辑卷"
 ],
 "Rename Volume Group": [
  null,
  "重命名卷组"
 ],
 "Renaming $target": [
  null,
  "重命名 $target"
 ],
 "Repairing $target": [
  null,
  "修复$ target"
 ],
 "Repeat passphrase": [
  null,
  "重复密码"
 ],
 "Resizing $target": [
  null,
  "调整大小 $target"
 ],
 "Resizing an encrypted filesystem requires unlocking the disk. Please provide a current disk passphrase.": [
  null,
  ""
 ],
 "Running": [
  null,
  "运行中"
 ],
 "SMART self-test of $target": [
  null,
  "$target SMART 自检"
 ],
 "Save": [
  null,
  "保存"
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
  "保存新密码需要解锁磁盘。请提供当前的磁盘密码。"
 ],
 "Securely erasing $target": [
  null,
  "安全擦除 $target"
 ],
 "Server": [
  null,
  "服务器"
 ],
 "Server Address": [
  null,
  "服务器地址"
 ],
 "Server address cannot be empty.": [
  null,
  "服务器地址不能为空。"
 ],
 "Server cannot be empty.": [
  null,
  "名称不能为空。"
 ],
 "Service": [
  null,
  "服务"
 ],
 "Session": [
  null,
  "会话"
 ],
 "Setting up loop device $target": [
  null,
  "创建 loop 设备 $target"
 ],
 "Shrink": [
  null,
  "缩小"
 ],
 "Shrink Logical Volume": [
  null,
  "缩小逻辑卷"
 ],
 "Shrink Volume": [
  null,
  ""
 ],
 "Size": [
  null,
  "大小"
 ],
 "Size cannot be negative": [
  null,
  "大小不能为负数"
 ],
 "Size cannot be zero": [
  null,
  "大小不能为零"
 ],
 "Size is too large": [
  null,
  "大小太大"
 ],
 "Size must be a number": [
  null,
  "大小必须是一个数字"
 ],
 "Size must be at least $0": [
  null,
  "大小必须最小为 $0"
 ],
 "Slot $0": [
  null,
  "插槽 $0"
 ],
 "Spare": [
  null,
  "备用"
 ],
 "Start": [
  null,
  "启动"
 ],
 "Start Multipath": [
  null,
  "启用多路径"
 ],
 "Starting RAID Device $target": [
  null,
  "启动 RAID 设备 $target"
 ],
 "Starting swapspace $target": [
  null,
  "启动交换空间 $target"
 ],
 "Stop": [
  null,
  "停止"
 ],
 "Stop Device": [
  null,
  "停止设备"
 ],
 "Stop and Unmount": [
  null,
  "停止并卸载"
 ],
 "Stop and remove": [
  null,
  "停止并删除"
 ],
 "Stopping RAID Device $target": [
  null,
  "停止 RAID 设备 $target"
 ],
 "Stopping swapspace $target": [
  null,
  "停止启动交换空间 $target"
 ],
 "Storage": [
  null,
  "存储"
 ],
 "Storage Logs": [
  null,
  "存储日志"
 ],
 "Storage can not be managed on this system.": [
  null,
  ""
 ],
 "Store passphrase": [
  null,
  "存储口令"
 ],
 "Stored Passphrase": [
  null,
  "已存储的口令"
 ],
 "Stored passphrase": [
  null,
  "保存的密码"
 ],
 "Support is installed.": [
  null,
  "已安装支持。"
 ],
 "Swap": [
  null,
  "交换空间"
 ],
 "Synchronizing RAID Device $target": [
  null,
  "同步 RAID 设备 $target"
 ],
 "Tang keyserver": [
  null,
  "Tang keyserver"
 ],
 "The RAID Array is in a degraded state": [
  null,
  "RAID 阵列处于降级状态"
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  "为了添加备用的磁盘，RAID 设备必须在运行。"
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  "为了移除磁盘，RAID 设备必须在运行。"
 ],
 "The creation of this VDO device did not finish and the device can't be used.": [
  null,
  "此 VDO 设备的创建未完成，无法使用该设备。"
 ],
 "The currently logged in user is not permitted to see information about keys.": [
  null,
  "当前登录的用户不允许查看有关密钥的信息。"
 ],
 "The filesystem is in use by login sessions and system services. Proceeding will stop these.": [
  null,
  "登录会话和系统服务正在使用文件系统。继续进行将停止这些。"
 ],
 "The filesystem is in use by login sessions. Proceeding will stop these.": [
  null,
  "登录会话正在使用文件系统。继续进行将停止这些。"
 ],
 "The filesystem is in use by system services. Proceeding will stop these.": [
  null,
  "系统服务正在使用文件系统。继续进行将停止这些。"
 ],
 "The last disk of a RAID device cannot be removed.": [
  null,
  " RAID 设备中的最后一个磁盘不能被移除。"
 ],
 "The last key slot can not be removed": [
  null,
  "无法删除最后一个密钥槽"
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  "不能删除一个卷组的最后一个物理卷。"
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "用户 <b>$0</b> 不允许管理存储"
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  "该系统上有带有多路径的设备，但是多路径服务未运行。"
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  "其它地方没有足够的空闲空间来移除这个物理卷。至少需要 $0 或更多空闲空间。"
 ],
 "Thin Logical Volume": [
  null,
  "稀疏逻辑卷"
 ],
 "This NFS mount is in use and only its options can be changed.": [
  null,
  "此 NFS 挂载正在使用中，只能更改其选项。"
 ],
 "This VDO device does not use all of its backing device.": [
  null,
  "此 VDO 设备不使用其所有后台设备。"
 ],
 "This device has filesystems that are currently in use. Proceeding will unmount all filesystems on it.": [
  null,
  "该设备有正在使用的文件系统。继续进行将卸载其上的所有文件系统。"
 ],
 "This device is currently used for RAID devices.": [
  null,
  "该设备正在被 RAID 设备使用。"
 ],
 "This device is currently used for RAID devices. Proceeding will remove it from its RAID devices.": [
  null,
  "该设备正在被 RAID 设备使用。                继续进行将从 RAID 设备中移除它。"
 ],
 "This device is currently used for VDO devices.": [
  null,
  "该设备正在被 VOD 设备使用。"
 ],
 "This device is currently used for volume groups.": [
  null,
  "该设备正在被卷组使用。"
 ],
 "This device is currently used for volume groups. Proceeding will remove it from its volume groups.": [
  null,
  "该设备正在被卷组使用。继续进行将从卷组中移除它。"
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  "当设备正在恢复时，该磁盘不能被移除。"
 ],
 "This logical volume is not completely used by its content.": [
  null,
  ""
 ],
 "This volume needs to be activated before it can be resized.": [
  null,
  "在调整大小之前，需要激活此卷。"
 ],
 "Total size: $0": [
  null,
  "总大小：$0"
 ],
 "Trust key": [
  null,
  "信任密钥"
 ],
 "Type": [
  null,
  "类型"
 ],
 "UUID": [
  null,
  "UUID"
 ],
 "Unable to reach server": [
  null,
  "无法到达服务器"
 ],
 "Unable to remove mount": [
  null,
  "无法删除挂载"
 ],
 "Unable to unmount filesystem": [
  null,
  "无法卸载文件系统"
 ],
 "Unit": [
  null,
  "单位"
 ],
 "Unknown": [
  null,
  "未知"
 ],
 "Unknown ($0)": [
  null,
  "未知 ($0)"
 ],
 "Unknown host name": [
  null,
  "未知主机名"
 ],
 "Unknown type": [
  null,
  "未知类型"
 ],
 "Unlock": [
  null,
  "未锁定"
 ],
 "Unlock at boot": [
  null,
  "在启动时解锁"
 ],
 "Unlock read only": [
  null,
  "只读解锁"
 ],
 "Unlocking $target": [
  null,
  "解锁 $target"
 ],
 "Unlocking disk...": [
  null,
  "解锁磁盘......"
 ],
 "Unmount": [
  null,
  "卸载"
 ],
 "Unmounting $target": [
  null,
  "卸载 $target"
 ],
 "Unrecognized Data": [
  null,
  "无法识别的数据"
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  "这里不能把无法识别的数据变小。"
 ],
 "Unsupported volume": [
  null,
  "不支持的卷"
 ],
 "Usage": [
  null,
  "使用"
 ],
 "Use 512 Byte emulation": [
  null,
  "使用 512 字节模拟"
 ],
 "Used": [
  null,
  "已使用"
 ],
 "Username": [
  null,
  "用户名"
 ],
 "VDO Backing": [
  null,
  "VDO支持"
 ],
 "VDO Device": [
  null,
  "VDO 设备"
 ],
 "VDO Device $0": [
  null,
  "VDO 设备 $0"
 ],
 "VDO Devices": [
  null,
  "VDO 设备"
 ],
 "VDO backing devices can not be made smaller": [
  null,
  "VDO 后台设备不能更小"
 ],
 "VDO support not installed": [
  null,
  "未安装 VDO 的支持"
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  "VFAT - 兼容所有系统和设备"
 ],
 "Verify key": [
  null,
  "验证密钥"
 ],
 "Very securely erasing $target": [
  null,
  "非常安全地擦除 $target"
 ],
 "Volume": [
  null,
  "卷"
 ],
 "Volume Group": [
  null,
  "卷组"
 ],
 "Volume Group $0": [
  null,
  "卷组 $0"
 ],
 "Volume Groups": [
  null,
  "卷组"
 ],
 "Volume size is $0. Content size is $1.": [
  null,
  ""
 ],
 "Waiting for other software management operations to finish": [
  null,
  "等待其他软件管理操作完成"
 ],
 "Warning": [
  null,
  ""
 ],
 "What if tang-show-keys is not available?": [
  null,
  "如果没有 tang-show-keys？"
 ],
 "Write-mostly": [
  null,
  "Write-mostly"
 ],
 "Writing": [
  null,
  "写入中"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS - Red Hat Enterprise Linux 7 默认"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 字节二进制数据]"
 ],
 "[binary data]": [
  null,
  "[二进制数据]"
 ],
 "[no data]": [
  null,
  "[没有数据]"
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4 - Red Hat Enterprise Linux 6 默认"
 ],
 "iSCSI Targets": [
  null,
  "iSCSI 目标"
 ],
 "key slot $0": [
  null,
  "钥匙槽 $0"
 ],
 "undefined": [
  null,
  "未定义"
 ],
 "unknown target": [
  null,
  "未知目标"
 ],
 "unpartitioned space on $0": [
  null,
  "$0 上未分区的空间"
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 文件系统"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  "加密的数据"
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "其他数据"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "交换空间"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "无法识别的数据"
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  "VDO支持"
 ],
 "storage\u0004Drive": [
  null,
  "驱动"
 ],
 "storage\u0004Hard Disk": [
  null,
  "硬盘"
 ],
 "storage\u0004Optical Drive": [
  null,
  "光盘驱动器"
 ],
 "storage\u0004Removable Drive": [
  null,
  "可移动驱动器"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "固态磁盘"
 ],
 "format-bytes\u0004bytes": [
  null,
  "字节"
 ]
}));
