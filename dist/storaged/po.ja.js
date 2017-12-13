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
  "language": "ja",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Chunk Size": [
  null,
  "$0 チャンクサイズ"
 ],
 "$0 Disks": [
  null,
  "$0 ディスク"
 ],
 "$0 day": [
  "$0 days",
  "$0 日"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 ディスクがありません"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 時間"
 ],
 "$0 is in active use": [
  null,
  "$0 は、アクティブに使用されています。"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 分"
 ],
 "$0 month": [
  "$0 months",
  "$0 ヶ月"
 ],
 "$0 of $1": [
  null,
  "$0/$1"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 週"
 ],
 "$0 year": [
  "$0 years",
  "$0 年"
 ],
 "$name (from $host)": [
  null,
  "$name ($host)"
 ],
 "${size} ${desc}": [
  null,
  "${size} ${desc}"
 ],
 "(default)": [
  null,
  "(デフォルト)"
 ],
 "(none)": [
  null,
  "（なし）"
 ],
 "1 day": [
  null,
  "1 日"
 ],
 "1 hour": [
  null,
  "1 時間"
 ],
 "1 week": [
  null,
  "1 週間"
 ],
 "5 minutes": [
  null,
  "5 分"
 ],
 "6 hours": [
  null,
  "6 時間"
 ],
 "<span>Encrypted $0</span>": [
  null,
  "<span>暗号化された $0</span>"
 ],
 "<span>Encrypted Logical Volume of $0</span>": [
  null,
  "<span>暗号化された $0 の論理ボリューム</span>"
 ],
 "<span>Encrypted Partition of $0</span>": [
  null,
  "<span>暗号化された $0 のパーティション</span>†"
 ],
 "<span>Logical Volume of $0</span>": [
  null,
  "<span>$0 の論理ボリューム</span>"
 ],
 "<span>Partition of $0</span>": [
  null,
  "<span>$0 のパーティション</span>"
 ],
 "Activate": [
  null,
  "有効化"
 ],
 "Apply": [
  null,
  "適用"
 ],
 "Block Device": [
  null,
  "ブロックデバイス"
 ],
 "Block device for filesystems": [
  null,
  "ファイルシステム用ブロックデバイス"
 ],
 "Can't delete while unlocked": [
  null,
  "ロック解除されている間は削除できません"
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Close": [
  null,
  "閉じる"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "すべてのシステムおよびデバイスとの互換性あり (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "最新のシステムとの互換性があり、ハードディスクが 2TB よりも大きい (GPT)"
 ],
 "Confirm passphrase": [
  null,
  "パスフレーズの確認"
 ],
 "Content": [
  null,
  "コンテンツ"
 ],
 "Create": [
  null,
  "作成"
 ],
 "Create Logical Volume": [
  null,
  "論理ボリュームの作成"
 ],
 "Create Partition": [
  null,
  "パーティションの作成"
 ],
 "Create Snapshot": [
  null,
  "スナップショットの作成"
 ],
 "Create Thin Volume": [
  null,
  "シンボリュームの作成"
 ],
 "Create new Logical Volume": [
  null,
  "新規論理ボリュームの作成"
 ],
 "Create partition": [
  null,
  "パーティションの作成"
 ],
 "Create partition on $0": [
  null,
  "$0 上でのパーティションの作成"
 ],
 "Create partition table": [
  null,
  "パーティションテーブルの作成"
 ],
 "Custom": [
  null,
  "Custom"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "カスタム (ファイルシステムタイプの入力)"
 ],
 "DISK IS FAILING": [
  null,
  "ディスクで障害が発生中"
 ],
 "Data Used": [
  null,
  "使用済みデータ"
 ],
 "Deactivate": [
  null,
  "解除"
 ],
 "Default": [
  null,
  "デフォルト"
 ],
 "Delete": [
  null,
  "削除"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "RAID デバイスを削除すると、そのデバイス上のすべてのデータが削除されます。"
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "論理ボリュームを削除すると、論理ボリューム内のすべてのデータが削除されます。"
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "パーティションを削除すると、パーティション内のすべてのデータが削除されます。"
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "ボリュームグループを削除すると、ボリュームグループ上のすべてのデータが削除されます。"
 ],
 "Device is read-only": [
  null,
  "デバイスは読み取り専用です"
 ],
 "Disk is OK": [
  null,
  "ディスクは OK です"
 ],
 "Don't overwrite existing data": [
  null,
  "既存のデータを上書きしないでください"
 ],
 "Drive": [
  null,
  "ドライブ"
 ],
 "Drives": [
  null,
  "ドライブ"
 ],
 "Edit": [
  null,
  "編集"
 ],
 "Encrypted $0": [
  null,
  "暗号化された $0"
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "暗号化された EXT4 (LUKS)"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "暗号化された $0 の論理ボリューム"
 ],
 "Encrypted Partition of $0": [
  null,
  "暗号化された $0 のパーティション"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "暗号化された XFS (LUKS)"
 ],
 "Encryption": [
  null,
  "暗号化"
 ],
 "Encryption Options": [
  null,
  "暗号化オプション"
 ],
 "Erase": [
  null,
  "削除"
 ],
 "Error": [
  null,
  "エラー"
 ],
 "Extended Partition": [
  null,
  "拡張パーティション"
 ],
 "Filesystem": [
  null,
  "ファイルシステム"
 ],
 "Filesystem Mounting": [
  null,
  "ファイルシステムのマウント"
 ],
 "Filesystem Name": [
  null,
  "ファイルシステム名"
 ],
 "Filesystem type": [
  null,
  "ファイルシステムタイプ"
 ],
 "Filesystems": [
  null,
  "ファイルシステム"
 ],
 "Format": [
  null,
  "フォーマット"
 ],
 "Format $0": [
  null,
  "$0 のフォーマット"
 ],
 "Format Disk $0": [
  null,
  "ディスク $0 のフォーマット"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "ディスクをフォーマットすると、ディスク上のすべてのデータが削除されます。"
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "ストレージデバイスをフォーマットすると、そのデバイス上のすべてのデータが削除されます。"
 ],
 "Free": [
  null,
  "空き"
 ],
 "Free Space": [
  null,
  "空き領域"
 ],
 "Go to now": [
  null,
  "今すぐ移動"
 ],
 "Inactive volume": [
  null,
  "非アクティブなボリューム"
 ],
 "Jobs": [
  null,
  "ジョブ"
 ],
 "Lock": [
  null,
  "ロック"
 ],
 "Logical Volume": [
  null,
  "論理ボリューム"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "論理ボリューム (スナップショット)"
 ],
 "Logical Volume of $0": [
  null,
  "$0 の論理ボリューム"
 ],
 "Member of RAID Device": [
  null,
  "RAID デバイスのメンバー"
 ],
 "Member of RAID Device $0": [
  null,
  "RAID デバイス $0 のメンバー"
 ],
 "Metadata Used": [
  null,
  "使用済みメタデータ"
 ],
 "Mount": [
  null,
  "マウント"
 ],
 "Mount Options": [
  null,
  "マウントオプション"
 ],
 "Mount Point": [
  null,
  "マウントポイント"
 ],
 "Mounted At": [
  null,
  "マウント場所"
 ],
 "Mounting": [
  null,
  "マウント"
 ],
 "NTFS - Compatible with most systems": [
  null,
  "NTFS - 最新システムとの互換性あり"
 ],
 "Name": [
  null,
  "名前"
 ],
 "Name cannot be empty.": [
  null,
  "名前は、空にすることができません。"
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  "名前は、127 文字を超えることができません。"
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "名前には、文字 '$0' を使用することができません。"
 ],
 "Name cannot contain whitespace.": [
  null,
  "名前には、スペースを使用することができません。"
 ],
 "No Filesystem": [
  null,
  "ファイルシステムなし"
 ],
 "No Logical Volumes": [
  null,
  "論理ボリュームなし"
 ],
 "No drives attached": [
  null,
  "ドライブが割り当てられていません"
 ],
 "No free space": [
  null,
  "空き領域なし"
 ],
 "No iSCSI targets set up": [
  null,
  "iSCSI ターゲットが設定されていません"
 ],
 "No media inserted": [
  null,
  "メディアが挿入されていません"
 ],
 "No partitioning": [
  null,
  "パーティションなし"
 ],
 "No storage set up as RAID": [
  null,
  "RAID として設定されたストレージがありません"
 ],
 "No volume groups created": [
  null,
  "ボリュームグループが作成されていません"
 ],
 "Not found": [
  null,
  "見つかりません"
 ],
 "Not running": [
  null,
  "実行中ではありません"
 ],
 "Off": [
  null,
  "オフ"
 ],
 "On": [
  null,
  "オン"
 ],
 "Options": [
  null,
  "オプション"
 ],
 "Other Devices": [
  null,
  "他のデバイス"
 ],
 "Overwrite existing data with zeros": [
  null,
  "既存のデータをゼロで上書きする"
 ],
 "Partition": [
  null,
  "パーティション"
 ],
 "Partition of $0": [
  null,
  "$0 のパーティション"
 ],
 "Partitioning": [
  null,
  "パーティション構成"
 ],
 "Passphrase": [
  null,
  "パスフレーズ"
 ],
 "Passphrase cannot be empty": [
  null,
  "パスフレーズは空にすることができません"
 ],
 "Passphrases do not match": [
  null,
  "パスフレーズが一致しません"
 ],
 "Physical Volume": [
  null,
  "物理ボリューム"
 ],
 "Physical volume of $0": [
  null,
  "$0 の物理ボリューム"
 ],
 "Please confirm deletion of $0": [
  null,
  "$0 の削除を確定してください"
 ],
 "Pool": [
  null,
  "プール"
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "シン論理ボリューム用プール"
 ],
 "Pool for Thin Volumes": [
  null,
  "シンボリューム用プール"
 ],
 "Pool for thinly provisioned volumes": [
  null,
  "シンプロビジョニングされたボリューム用プール"
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
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID Device": [
  null,
  "RAID デバイス"
 ],
 "RAID Device $0": [
  null,
  "RAID デバイス $0"
 ],
 "RAID Devices": [
  null,
  "RAID デバイス"
 ],
 "RAID Member": [
  null,
  "RAID メンバー"
 ],
 "Reading": [
  null,
  "読み取り中"
 ],
 "Reboot": [
  null,
  "再起動"
 ],
 "Rename": [
  null,
  "名前変更"
 ],
 "Rename Logical Volume": [
  null,
  "論理ボリュームの名前変更"
 ],
 "Rename Volume Group": [
  null,
  "ボリュームグループの名前変更"
 ],
 "Resize": [
  null,
  "サイズの変更"
 ],
 "Resize Filesystem": [
  null,
  "ファイルシステムのサイズ変更"
 ],
 "Resize Logical Volume": [
  null,
  "論理ボリュームのサイズ変更"
 ],
 "Running": [
  null,
  "実行中"
 ],
 "Size": [
  null,
  "Size"
 ],
 "Size cannot be negative": [
  null,
  "サイズはマイナスにすることができません"
 ],
 "Size cannot be zero": [
  null,
  "サイズはゼロにすることができません"
 ],
 "Size is too large": [
  null,
  "サイズが大きすぎます"
 ],
 "Size must be a number": [
  null,
  "サイズは数値である必要があります"
 ],
 "Start": [
  null,
  "開始日"
 ],
 "Start Multipath": [
  null,
  "マルチパスの開始"
 ],
 "Start Scrubbing": [
  null,
  "Scrubbing の起動"
 ],
 "Stop": [
  null,
  "停止"
 ],
 "Stop Scrubbing": [
  null,
  "Scrubbing の停止"
 ],
 "Storage": [
  null,
  "ストレージ"
 ],
 "Storage Log": [
  null,
  "ストレージログ"
 ],
 "Storage Logs": [
  null,
  "ストレージログ"
 ],
 "Store passphrase": [
  null,
  "パスフレーズの保存"
 ],
 "Stored Passphrase": [
  null,
  "保存されたパスフレーズ"
 ],
 "Stored passphrase": [
  null,
  "保存されたパスフレーズ"
 ],
 "Swap": [
  null,
  "スワップ"
 ],
 "The \"storaged\" API is not available on this system.": [
  null,
  "\"storaged\" API は、このシステムでは利用できません。"
 ],
 "The RAID Array is in a degraded state": [
  null,
  "RAID アレイは劣化状態にあります"
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "ユーザー <b>$0</b> は、ストレージを管理することを許可されていません"
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  "システムに複数のパスを持つデバイスがありますが、マルチパスサービスが実行されていません。"
 ],
 "Thin Logical Volume": [
  null,
  "シン論理ボリューム"
 ],
 "This device has filesystems that are currently in use.                Proceeding will unmount all filesystems on it.": [
  null,
  "このデバイスには、現在使用中のファイルシステムがあります。                続行すると、このデバイスのファイルシステムをすべてアンマウントします。"
 ],
 "This device is currently used for RAID devices.": [
  null,
  "このデバイスは、現在 RAID デバイスに使用されています。"
 ],
 "This device is currently used for RAID devices.                Proceeding will remove it from its RAID devices.": [
  null,
  "このデバイスは、現在 RAID デバイスに使用されています。                続行すると、RAID デバイスからこのデバイスが削除されます。"
 ],
 "This device is currently used for volume groups.": [
  null,
  "このデバイスは、現在ボリュームグループに使用されています。"
 ],
 "This device is currently used for volume groups.                Proceeding will remove it from its volume groups.": [
  null,
  "このデバイスは現在ボリュームグループに使用されています。                続行すると、そのボリュームグループからこのデバイスが削除されます。"
 ],
 "This logical volume cannot be made smaller.": [
  null,
  "この論理ボリュームは、小さくすることができません。"
 ],
 "Type": [
  null,
  "タイプ"
 ],
 "UUID": [
  null,
  "UUID"
 ],
 "Unknown": [
  null,
  "不明"
 ],
 "Unlock": [
  null,
  "ロック解除"
 ],
 "Unmount": [
  null,
  "アンマウント"
 ],
 "Unrecognized Data": [
  null,
  "認識されないデータ"
 ],
 "Unsupported volume": [
  null,
  "サポートされないボリューム"
 ],
 "Usage": [
  null,
  "使用法"
 ],
 "Used": [
  null,
  "Used"
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  "VFAT - すべてのシステムおよびデバイスとの互換性あり"
 ],
 "Volume": [
  null,
  "音量"
 ],
 "Volume Group": [
  null,
  "ボリュームグループ"
 ],
 "Volume Group $0": [
  null,
  "ボリュームグループ $0"
 ],
 "Volume Groups": [
  null,
  "ボリュームグループ"
 ],
 "Writing": [
  null,
  "書き込み"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS - Red Hat Enterprise Linux 7 のデフォルト値"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[バイナリーデータの $0 バイト]"
 ],
 "[binary data]": [
  null,
  "[バイナリーデータ]"
 ],
 "[no data]": [
  null,
  "[データなし]"
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4 - Red Hat Enterprise Linux 6 のデフォルト値"
 ],
 "iSCSI Targets": [
  null,
  "iSCSI ターゲット"
 ],
 "unpartitioned space on $0": [
  null,
  "$0 の未パーティション領域"
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 ファイルシステム"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  "暗号化されたデータ"
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "他のデータ"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "スワップ領域"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "認識されないデータ"
 ],
 "storage\u0004Assessment": [
  null,
  "評価"
 ],
 "storage\u0004Bitmap": [
  null,
  "ビットマップ"
 ],
 "storage\u0004Capacity": [
  null,
  "容量"
 ],
 "storage\u0004Device": [
  null,
  "デバイス"
 ],
 "storage\u0004Device File": [
  null,
  "デバイスファイル"
 ],
 "storage\u0004Firmware Version": [
  null,
  "ファームウェアバージョン"
 ],
 "storage\u0004Model": [
  null,
  "モデル"
 ],
 "storage\u0004Multipathed Devices": [
  null,
  "マルチパスデバイス"
 ],
 "storage\u0004RAID Level": [
  null,
  "RAID レベル"
 ],
 "storage\u0004Serial Number": [
  null,
  "シリアル番号"
 ],
 "storage\u0004State": [
  null,
  "ステート"
 ],
 "storage\u0004UUID": [
  null,
  "UUID"
 ],
 "storage\u0004World Wide Name": [
  null,
  "ワールドワイド名"
 ],
 "format-bytes\u0004bytes": [
  null,
  "バイト"
 ]
}));
