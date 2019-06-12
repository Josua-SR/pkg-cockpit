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
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Block Device": [
  null,
  "$0 ブロックデバイス"
 ],
 "$0 Chunk Size": [
  null,
  "$0 チャンクサイズ"
 ],
 "$0 Disks": [
  null,
  "$0 ディスク"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  "$0 データ + $1 オーバーヘッドが $2 ($3) を使用しています"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 ディスクがありません"
 ],
 "$0 filesystems can not be made larger.": [
  null,
  "$0 ファイルシステムは大きくすることができません。"
 ],
 "$0 filesystems can not be made smaller.": [
  null,
  "$0 ファイルシステムは小さくすることができません。"
 ],
 "$0 filesystems can not be resized here.": [
  null,
  "ここでは、$0 ファイルシステムのサイズを変更できません。"
 ],
 "$0 is in active use": [
  null,
  "$0 は、アクティブに使用されています。"
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 は、あらゆるリポジトリーから利用できません。"
 ],
 "$0 of $1": [
  null,
  "$0/$1"
 ],
 "$0 slots remain": [
  null,
  "$0 スロットが残ります"
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  "$0 が $1  ($2 が保存) を使用しています"
 ],
 "$0 will be installed.": [
  null,
  "$0 がインストールされます。"
 ],
 "$0, $1 free": [
  null,
  "$0, $1 空き"
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
  "5 分"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6 時間"
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
  " 1 つのディスクが必要です。"
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  "このディスクを削除する前に、スペアディスクを追加する必要があります。"
 ],
 "Activate": [
  null,
  "有効化"
 ],
 "Activating $target": [
  null,
  "$target のアクティベート"
 ],
 "Active since": [
  null,
  "以降有効"
 ],
 "Add": [
  null,
  "追加する"
 ],
 "Add Disks": [
  null,
  "ディスクの追加"
 ],
 "Add Key": [
  null,
  "鍵の追加"
 ],
 "Add iSCSI Portal": [
  null,
  "iSCSI ポータルの追加"
 ],
 "Adding physical volume to $target": [
  null,
  "$target への物理ボリュームの追加"
 ],
 "Additional packages:": [
  null,
  "追加のパッケージ:"
 ],
 "Address": [
  null,
  "アドレス:"
 ],
 "Address cannot be empty": [
  null,
  "アドレスは空欄にできません"
 ],
 "Address is not a valid URL": [
  null,
  "アドレスは有効ではありません。"
 ],
 "Apply": [
  null,
  "適用"
 ],
 "At least $0 disks are needed.": [
  null,
  "少なくとも $0 ディスクが必要です。"
 ],
 "At least one disk is needed.": [
  null,
  "少なくとも 1 つのディスクが必要です。"
 ],
 "Authentication required": [
  null,
  "認証が必要です"
 ],
 "Available targets on $0": [
  null,
  "$0 で利用可能なターゲット"
 ],
 "Backing Device": [
  null,
  "バッキングデバイス"
 ],
 "Block": [
  null,
  "ブロック"
 ],
 "Block device for filesystems": [
  null,
  "ファイルシステム用ブロックデバイス"
 ],
 "Blocked": [
  null,
  "ブロック済み"
 ],
 "Can't delete while unlocked": [
  null,
  "ロック解除されている間は削除できません"
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Change": [
  null,
  "変更"
 ],
 "Change iSCSI Initiator Name": [
  null,
  "iSCSI イニシエーター名の変更"
 ],
 "Change passphrase": [
  null,
  "パスフレーズの変更"
 ],
 "Checking $target": [
  null,
  "$target の確認"
 ],
 "Checking RAID Device $target": [
  null,
  "RAID デバイス $target の確認"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "RAID デバイス $target の確認および修復"
 ],
 "Checking installed software": [
  null,
  "インストールされたソフトウェアの確認"
 ],
 "Chunk Size": [
  null,
  "チャンクサイズ"
 ],
 "Cleaning up for $target": [
  null,
  "$target のクリーンアップ"
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
 "Compression": [
  null,
  "圧縮"
 ],
 "Confirm": [
  null,
  "確定します"
 ],
 "Confirm removal with passphrase": [
  null,
  "パスフレーズで削除を確認"
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
 "Create Partition Table": [
  null,
  "パーティションテーブルの作成"
 ],
 "Create Partition on $0": [
  null,
  "$0 上でのパーティションの作成"
 ],
 "Create RAID Device": [
  null,
  "RAID デバイスの作成"
 ],
 "Create Snapshot": [
  null,
  "スナップショットの作成"
 ],
 "Create Thin Volume": [
  null,
  "シンボリュームの作成"
 ],
 "Create VDO Device": [
  null,
  "VDO デバイスの作成"
 ],
 "Create Volume Group": [
  null,
  "ボリュームグループの作成"
 ],
 "Create new Logical Volume": [
  null,
  "新規論理ボリュームの作成"
 ],
 "Creating RAID Device $target": [
  null,
  "RAID デバイス $target の作成"
 ],
 "Creating filesystem on $target": [
  null,
  "$target 上でのファイルシステムの作成"
 ],
 "Creating logical volume $target": [
  null,
  "論理ボリューム $target の作成"
 ],
 "Creating partition $target": [
  null,
  "パーティション $target の作成"
 ],
 "Creating snapshot of $target": [
  null,
  "$target のスナップショットの作成"
 ],
 "Creating volume group $target": [
  null,
  "ボリュームグループ $target の作成"
 ],
 "Custom": [
  null,
  "Custom"
 ],
 "Custom encryption options": [
  null,
  "カスタムの暗号化オプション"
 ],
 "Custom mount options": [
  null,
  "カスタムのマウントオプション"
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
 "Deactivating $target": [
  null,
  "$target の非アクティブ化"
 ],
 "Deduplication": [
  null,
  "重複"
 ],
 "Default": [
  null,
  "デフォルト"
 ],
 "Delete": [
  null,
  "削除"
 ],
 "Deleting $target": [
  null,
  "$target の削除中"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "RAID デバイスを削除すると、そのデバイス上のすべてのデータが削除されます。"
 ],
 "Deleting a VDO device will erase all data on it.": [
  null,
  "VDO デバイスを削除すると、そのデバイスのデータはすべて削除されます。"
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
 "Deleting volume group $target": [
  null,
  "ボリュームグループ $target の削除"
 ],
 "Device File": [
  null,
  "デバイスファイル"
 ],
 "Device is read-only": [
  null,
  "デバイスは読み取り専用です"
 ],
 "Disk": [
  null,
  "ディスク"
 ],
 "Disk is OK": [
  null,
  "ディスクは OK です"
 ],
 "Disk passphrase": [
  null,
  "ディスクのパスフレーズ"
 ],
 "Disks": [
  null,
  "ディスク"
 ],
 "Don't overwrite existing data": [
  null,
  "既存のデータを上書きしないでください"
 ],
 "Downloading $0": [
  null,
  "$0 をダウンロード中"
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
 "Edit Tang keyserver": [
  null,
  "Tang キーサーバーの編集"
 ],
 "Editing a key requires a free slot": [
  null,
  "キーの編集にはフリースロットが必要です"
 ],
 "Ejecting $target": [
  null,
  "$target の取り出し中"
 ],
 "Emptying $target": [
  null,
  "$target を空にしています"
 ],
 "Encrypt data": [
  null,
  "暗号化データ"
 ],
 "Encrypted $0": [
  null,
  "暗号化された $0"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "暗号化された $0 の論理ボリューム"
 ],
 "Encrypted Partition of $0": [
  null,
  "暗号化された $0 のパーティション"
 ],
 "Encrypted volumes can not be resized here.": [
  null,
  "ここでは、暗号化したボリュームのサイズを変更することができません。"
 ],
 "Encrypted volumes need to be unlocked before they can be resized.": [
  null,
  "暗号化したボリュームは、サイズを変更する前にロックを解除する必要があります。"
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
 "Erasing $target": [
  null,
  "$target の削除中"
 ],
 "Error": [
  null,
  "エラー"
 ],
 "Extended Partition": [
  null,
  "拡張パーティション"
 ],
 "FAILED": [
  null,
  "失敗"
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
 "Filesystems": [
  null,
  "ファイルシステム"
 ],
 "For legacy applications only. Reduces performance.": [
  null,
  "レガシーアプリケーション専用です。パフォーマンスが低下します。"
 ],
 "Force remove passphrase in $0": [
  null,
  "$0 のパスフレーズの削除を強制します"
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
 "Free up space in this group: Shrink or delete other logical volumes or add another physical volume.": [
  null,
  "このグループ内で領域を解放します: 他の論理ボリュームを縮小または削除するか、新たな物理ボリュームを追加してください。"
 ],
 "Go to now": [
  null,
  "今すぐ移動"
 ],
 "Grow": [
  null,
  "増加"
 ],
 "Grow Content": [
  null,
  "コンテンツを増やす"
 ],
 "Grow Logical Volume": [
  null,
  "論理ボリュームの増加"
 ],
 "Grow logical size of $0": [
  null,
  "$0 の論理サイズを増加"
 ],
 "Grow to take all space": [
  null,
  "すべての領域を使用して増加"
 ],
 "If tang-show-keys is not available, run the following:": [
  null,
  "tang-show-keys を利用できない場合は、以下を実行します。"
 ],
 "In Sync": [
  null,
  "同期"
 ],
 "Inactive volume": [
  null,
  "非アクティブなボリューム"
 ],
 "Index Memory": [
  null,
  "インデックスメモリー"
 ],
 "Install": [
  null,
  "インストール"
 ],
 "Install NFS Support": [
  null,
  "NFS サポートをインストール"
 ],
 "Install Software": [
  null,
  "ソフトウェアをインストール"
 ],
 "Install VDO support": [
  null,
  "VDO サポートをインストール"
 ],
 "Installing $0": [
  null,
  "$0 をインストール中"
 ],
 "Invalid username or password": [
  null,
  "無効なユーザー名またはパスワード"
 ],
 "Jobs": [
  null,
  "ジョブ"
 ],
 "Key slots with unknown types can not be edited here": [
  null,
  "タイプ不明のキースロットは、ここでは編集できません"
 ],
 "Key source": [
  null,
  "キーソース"
 ],
 "Keys": [
  null,
  "キー"
 ],
 "Keyserver": [
  null,
  "キーサーバー"
 ],
 "Keyserver address": [
  null,
  "キーサーバーのアドレス"
 ],
 "Keyserver removal may prevent unlocking $0.": [
  null,
  "キーサーバーの削除により、$0 のロック解除ができない可能性があります。"
 ],
 "Loading...": [
  null,
  "読み込み中..."
 ],
 "Local Mount Point": [
  null,
  "ローカルマウントポイント"
 ],
 "Lock": [
  null,
  "ロック"
 ],
 "Locking $target": [
  null,
  "$target のロック中"
 ],
 "Logical": [
  null,
  "論理"
 ],
 "Logical Size": [
  null,
  "論理サイズ"
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
 "Make sure the key hash from the Tang server matches:": [
  null,
  "Tang サーバーのキーハッシュが一致することを確認します。"
 ],
 "Manually check with SSH: ": [
  null,
  "手動で SSH を確認します。"
 ],
 "Marking $target as faulty": [
  null,
  "$target を問題があるものとしてマークする"
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
 "Modifying $target": [
  null,
  "$target の変更"
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
 "Mount at boot": [
  null,
  "起動時にマウント"
 ],
 "Mount point can not be empty": [
  null,
  "マウントポイントは空欄にできません"
 ],
 "Mount point cannot be empty.": [
  null,
  "マウントポイントは空欄にできません。"
 ],
 "Mount point must start with \"/\".": [
  null,
  "マウントポイントは \"/\" で開始してください。"
 ],
 "Mount read only": [
  null,
  "読み取り専用でマウント"
 ],
 "Mounted At": [
  null,
  "マウント場所"
 ],
 "Mounting": [
  null,
  "マウント"
 ],
 "Mounting $target": [
  null,
  "$target のマウント"
 ],
 "NFS Mount": [
  null,
  "NFS マウント"
 ],
 "NFS Mounts": [
  null,
  "NFS マウント"
 ],
 "NFS Support not installed": [
  null,
  "NFS サポートはインストールされていません"
 ],
 "Name": [
  null,
  "名前"
 ],
 "Name can not be empty.": [
  null,
  "名前は空欄にできません"
 ],
 "Name cannot be empty.": [
  null,
  "名前は空欄にすることができません。"
 ],
 "Name cannot be longer than $0 bytes": [
  null,
  "名前は、$0 バイトを超えることができません"
 ],
 "Name cannot be longer than $0 characters": [
  null,
  "名前は、$0 文字を超えることができません"
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  "名前は 127 文字を超えることができません。"
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "名前には文字 '$0' を含めることができません。"
 ],
 "Name cannot contain whitespace.": [
  null,
  "名前にはスペースを含めることができません。"
 ],
 "New NFS Mount": [
  null,
  "NFS の新規マウント"
 ],
 "New passphrase": [
  null,
  "新しいパスフレーズ"
 ],
 "Next": [
  null,
  "次へ"
 ],
 "No Filesystem": [
  null,
  "ファイルシステムなし"
 ],
 "No Logical Volumes": [
  null,
  "論理ボリュームなし"
 ],
 "No NFS mounts set up": [
  null,
  "NFS マウントが設定されていません"
 ],
 "No available slots": [
  null,
  "利用可能なスロットはありません"
 ],
 "No disks are available.": [
  null,
  "ディスクが利用できません。"
 ],
 "No drives attached": [
  null,
  "ドライブが割り当てられていません"
 ],
 "No free key slots": [
  null,
  "フリーのキースロットはありません"
 ],
 "No free space": [
  null,
  "空き領域なし"
 ],
 "No iSCSI targets set up": [
  null,
  "iSCSI ターゲットが設定されていません"
 ],
 "No keys added": [
  null,
  "追加されたキーはありません"
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
 "No storage set up as VDO": [
  null,
  "VDO として設定されたストレージがありません"
 ],
 "No volume groups created": [
  null,
  "ボリュームグループが作成されていません"
 ],
 "Not enough space to grow.": [
  null,
  "スペースが不足しています。"
 ],
 "Not found": [
  null,
  "見つかりません"
 ],
 "Not mounted": [
  null,
  "マウントされていません"
 ],
 "Not running": [
  null,
  "実行中ではありません"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Old passphrase": [
  null,
  "古いパスフレーズ"
 ],
 "Only $0 of $1 are used.": [
  null,
  "$1 のうち $0 だけが使用されています。"
 ],
 "Operation '$operation' on $target": [
  null,
  "$target 上の操作 '$operation'"
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
 "PackageKit crashed": [
  null,
  "PackageKit がクラッシュしました"
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
  "パスフレーズは空欄にすることができません"
 ],
 "Passphrase removal may prevent unlocking $0.": [
  null,
  "パスフレーズの削除で、$0 のロック解除ができない可能性があります。"
 ],
 "Passphrases do not match": [
  null,
  "パスフレーズが一致しません"
 ],
 "Password": [
  null,
  "パスワード"
 ],
 "Path on Server": [
  null,
  "サーバーのパス"
 ],
 "Path on server cannot be empty.": [
  null,
  "サーバーのパスは空欄にはできません。"
 ],
 "Path on server must start with \"/\".": [
  null,
  "サーバーのパスは \"/\" で開始してください。"
 ],
 "Physical": [
  null,
  "物理"
 ],
 "Physical Volume": [
  null,
  "物理ボリューム"
 ],
 "Physical Volumes": [
  null,
  "物理ボリューム"
 ],
 "Physical volume of $0": [
  null,
  "$0 の物理ボリューム"
 ],
 "Physical volumes can not be resized here.": [
  null,
  "ここでは、物理ボリュームのサイズを変更することができません。"
 ],
 "Please confirm deletion of $0": [
  null,
  "$0 の削除を確定してください"
 ],
 "Please confirm stopping of $0": [
  null,
  "$0 の停止を確認してください"
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
 "Port": [
  null,
  "ポート"
 ],
 "Process": [
  null,
  "プロセス"
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
  "RAID 0 (ストライプ)"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (ミラー)"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RAID 10 (ミラーのストライプ)"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (専用パリティー)"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (分散パリティー)"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (ダブル分散パリティー)"
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
 "RAID Level": [
  null,
  "RAID レベル"
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
 "Recommended default": [
  null,
  "推奨されるデフォルト"
 ],
 "Recovering": [
  null,
  "復旧"
 ],
 "Recovering RAID Device $target": [
  null,
  "RAID デバイス $target の復旧"
 ],
 "Removals:": [
  null,
  "削除:"
 ],
 "Remove": [
  null,
  "削除"
 ],
 "Remove $0?": [
  null,
  "$0 を削除しますか?"
 ],
 "Remove Tang keyserver": [
  null,
  "Tang キーサーバーを削除"
 ],
 "Remove device": [
  null,
  "リモートデバイス"
 ],
 "Remove passphrase": [
  null,
  "パスフレーズを削除"
 ],
 "Remove passphrase in $0?": [
  null,
  "$0 のパスフレーズを削除しますか?"
 ],
 "Removing $0": [
  null,
  "$0 を削除中"
 ],
 "Removing $target from RAID Device": [
  null,
  "$target を RAID デバイスから削除"
 ],
 "Removing physical volume from $target": [
  null,
  "$target  から物理ボリュームを削除"
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
 "Renaming $target": [
  null,
  "$target の名前変更"
 ],
 "Repairing $target": [
  null,
  "$target の修復"
 ],
 "Repeat passphrase": [
  null,
  "パスフレーズの繰り返し"
 ],
 "Resizing $target": [
  null,
  "$target のサイズ変更"
 ],
 "Resizing an encrypted filesystem requires unlocking the disk. Please provide a current disk passphrase.": [
  null,
  "暗号化されたファイルシステムのサイズ変更には、ディスクのロック解除が必要です。現在のディスクのパスフレーズを提供してください。"
 ],
 "Running": [
  null,
  "実行中"
 ],
 "SMART self-test of $target": [
  null,
  "$target の SMART 自己テスト"
 ],
 "Save": [
  null,
  "保存"
 ],
 "Save space by compressing individual blocks with LZ4": [
  null,
  "LZ4 で個別のブロックを圧縮して空き領域を節約します"
 ],
 "Save space by storing identical data blocks just once": [
  null,
  "同一のデータブロックを 1 回だけ保存することで、空き領域を節約します"
 ],
 "Saving a new passphrase requires unlocking the disk. Please provide a current disk passphrase.": [
  null,
  "新しいパスフレーズの保存には、ディスクのロック解除が必要です。現在のディスクのパスフレーズを提供してください。"
 ],
 "Securely erasing $target": [
  null,
  "$target を安全に削除"
 ],
 "Server": [
  null,
  "サーバー"
 ],
 "Server Address": [
  null,
  "サーバーアドレス"
 ],
 "Server address cannot be empty.": [
  null,
  "サーバーアドレスは空欄にできません。"
 ],
 "Server cannot be empty.": [
  null,
  "サーバーは空欄にできません。"
 ],
 "Service": [
  null,
  "サービス"
 ],
 "Session": [
  null,
  "セッション"
 ],
 "Setting up loop device $target": [
  null,
  "ループデバイス $target の設定"
 ],
 "Show all": [
  null,
  "すべて表示"
 ],
 "Show all $0 drives": [
  null,
  "$0 ドライブをすべて表示"
 ],
 "Shrink": [
  null,
  "縮小"
 ],
 "Shrink Logical Volume": [
  null,
  "論理ボリュームの縮小"
 ],
 "Shrink Volume": [
  null,
  "ボリュームの縮小"
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
 "Size must be at least $0": [
  null,
  "サイズは $0 以上にする必要があります"
 ],
 "Slot $0": [
  null,
  "スロット $0"
 ],
 "Spare": [
  null,
  "スペア"
 ],
 "Start": [
  null,
  "開始日"
 ],
 "Start Multipath": [
  null,
  "マルチパスの開始"
 ],
 "Starting RAID Device $target": [
  null,
  "RAID デバイス $target の起動"
 ],
 "Starting swapspace $target": [
  null,
  "スワップ領域 $target の起動"
 ],
 "Stop": [
  null,
  "停止"
 ],
 "Stop Device": [
  null,
  "デバイスの停止"
 ],
 "Stop and Unmount": [
  null,
  "停止してアンマウント"
 ],
 "Stop and remove": [
  null,
  "停止して削除"
 ],
 "Stopping RAID Device $target": [
  null,
  "RAID デバイス $target の停止"
 ],
 "Stopping swapspace $target": [
  null,
  "スワップ領域 $target の停止"
 ],
 "Storage": [
  null,
  "ストレージ"
 ],
 "Storage Logs": [
  null,
  "ストレージログ"
 ],
 "Storage can not be managed on this system.": [
  null,
  "ストレージは、このシステムで管理できません。"
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
 "Support is installed.": [
  null,
  "サポートはインストールされました。"
 ],
 "Swap": [
  null,
  "スワップ"
 ],
 "Synchronizing RAID Device $target": [
  null,
  "RAID デバイス $target の同期"
 ],
 "Tang keyserver": [
  null,
  "Tang キーサーバー"
 ],
 "The RAID Array is in a degraded state": [
  null,
  "RAID アレイは劣化状態にあります"
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  "スペアディスクを追加する場合は、RAID デバイスが実行中である必要があります。"
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  "ディスクを取り外す場合は、RAID デバイスが実行中である必要があります。"
 ],
 "The creation of this VDO device did not finish and the device can't be used.": [
  null,
  "この VDO デバイスの作成は終了していないため、使用できません。"
 ],
 "The currently logged in user is not permitted to see information about keys.": [
  null,
  "現在ログイン中のユーザーは、キーに関する情報を見ることを許可されていません。"
 ],
 "The filesystem is in use by login sessions and system services. Proceeding will stop these.": [
  null,
  "このファイルシステムは、ログインセッションおよびシステムサービスで使用中です。続行すると、これらを停止します。"
 ],
 "The filesystem is in use by login sessions. Proceeding will stop these.": [
  null,
  "このファイルシステムは、ログインセッションで使用中です。続行すると、これらを停止します。"
 ],
 "The filesystem is in use by system services. Proceeding will stop these.": [
  null,
  "このファイルシステムは、システムサービスで使用中です。続行すると、これらを停止します。"
 ],
 "The last disk of a RAID device cannot be removed.": [
  null,
  "RAID デバイスの最後のディスクは取り外すことができません。"
 ],
 "The last key slot can not be removed": [
  null,
  "最後のキースロットは削除できません。"
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  "ボリュームグループの最後の物理ボリュームは削除できません。"
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "ユーザー <b>$0</b> はストレージを管理することを許可されていません"
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  "システムに複数のパスを持つデバイスがありますが、マルチパスサービスが実行されていません。"
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  "この物理ボリュームを削除するのに十分な空き領域がありません。少なくとも $0 の空き領域が必要です。"
 ],
 "Thin Logical Volume": [
  null,
  "シン論理ボリューム"
 ],
 "This NFS mount is in use and only its options can be changed.": [
  null,
  "この NFS マウントは使用中で、そのオプションだけを変更できます。"
 ],
 "This VDO device does not use all of its backing device.": [
  null,
  "この VDO デバイスは、そのバッキングデバイスをすべて使用していません。"
 ],
 "This device has filesystems that are currently in use. Proceeding will unmount all filesystems on it.": [
  null,
  "このデバイスには、現在使用中のファイルシステムがあります。続行すると、このデバイスのファイルシステムをすべてアンマウントします。"
 ],
 "This device is currently used for RAID devices.": [
  null,
  "このデバイスは、現在 RAID デバイスに使用されています。"
 ],
 "This device is currently used for RAID devices. Proceeding will remove it from its RAID devices.": [
  null,
  "このデバイスは、現在 RAID デバイスに使用されています。続行すると、RAID デバイスからこのデバイスが削除されます。"
 ],
 "This device is currently used for VDO devices.": [
  null,
  "このデバイスは、現在 VDO デバイスに使用されています。"
 ],
 "This device is currently used for volume groups.": [
  null,
  "このデバイスは、現在ボリュームグループに使用されています。"
 ],
 "This device is currently used for volume groups. Proceeding will remove it from its volume groups.": [
  null,
  "このデバイスは現在ボリュームグループに使用されています。続行すると、そのボリュームグループからこのデバイスが削除されます。"
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  "このディスクは、デバイスが復旧中に取り外すことができません。"
 ],
 "This logical volume is not completely used by its content.": [
  null,
  "この論理ボリュームは、コンテンツによって完全には使用されていません。"
 ],
 "This volume needs to be activated before it can be resized.": [
  null,
  "このボリュームは、サイズを変更する前にアクティベートする必要があります。"
 ],
 "Total size: $0": [
  null,
  "合計サイズ: $0"
 ],
 "Trust key": [
  null,
  "キーを信頼します"
 ],
 "Type": [
  null,
  "タイプ"
 ],
 "UUID": [
  null,
  "UUID"
 ],
 "Unable to reach server": [
  null,
  "サーバーに到達できません"
 ],
 "Unable to remove mount": [
  null,
  "マウントを削除できません"
 ],
 "Unable to unmount filesystem": [
  null,
  "ファイルシステムをアンマウントできません"
 ],
 "Unit": [
  null,
  "単位"
 ],
 "Unknown": [
  null,
  "不明"
 ],
 "Unknown ($0)": [
  null,
  "不明な ($0)"
 ],
 "Unknown host name": [
  null,
  "不明なホスト名"
 ],
 "Unknown type": [
  null,
  "不明なタイプ"
 ],
 "Unlock": [
  null,
  "ロック解除"
 ],
 "Unlock at boot": [
  null,
  "起動時にロック解除"
 ],
 "Unlock read only": [
  null,
  "読み取り専用のロックを解除"
 ],
 "Unlocking $target": [
  null,
  "$target をロック解除中"
 ],
 "Unlocking disk...": [
  null,
  "ディスクをロック解除中..."
 ],
 "Unmount": [
  null,
  "アンマウント"
 ],
 "Unmounting $target": [
  null,
  "$target のアンマウント中"
 ],
 "Unrecognized Data": [
  null,
  "認識されないデータ"
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  "ここでは、認識されないデータを小さくすることはできません。"
 ],
 "Unsupported volume": [
  null,
  "サポートされないボリューム"
 ],
 "Usage": [
  null,
  "使用法"
 ],
 "Use 512 Byte emulation": [
  null,
  "512 バイトのエミュレーションを使用します。"
 ],
 "Used": [
  null,
  "Used"
 ],
 "Username": [
  null,
  "ユーザー名"
 ],
 "VDO Backing": [
  null,
  "VDO バッキング"
 ],
 "VDO Device": [
  null,
  "VDO デバイス"
 ],
 "VDO Device $0": [
  null,
  "VDO デバイス $0"
 ],
 "VDO Devices": [
  null,
  "VDO デバイス"
 ],
 "VDO backing devices can not be made smaller": [
  null,
  "VDO バッキングデバイスを小さくすることはできません"
 ],
 "VDO support not installed": [
  null,
  "VDO サポートはインストールされていません"
 ],
 "Verify key": [
  null,
  "キーを検証します"
 ],
 "Very securely erasing $target": [
  null,
  "$target を非常に安全に削除"
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
 "Volume size is $0. Content size is $1.": [
  null,
  "ボリュームサイズは $0 です。コンテンツサイズは $1 です。"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "他のソフトウェア管理オペレーションが終了するまで待機中"
 ],
 "What if tang-show-keys is not available?": [
  null,
  "tang-show-keys を利用できない場合はどうしますか?"
 ],
 "Write-mostly": [
  null,
  "Write-mostly"
 ],
 "Writing": [
  null,
  "書き込み"
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
 "iSCSI Targets": [
  null,
  "iSCSI ターゲット"
 ],
 "key slot $0": [
  null,
  "キースロット $0"
 ],
 "undefined": [
  null,
  "未定義"
 ],
 "unknown target": [
  null,
  "不明なターゲット"
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
 "storage-id-desc\u0004VDO Backing": [
  null,
  "VDO バッキング"
 ],
 "storage\u0004Drive": [
  null,
  "ドライブ"
 ],
 "storage\u0004Hard Disk": [
  null,
  "ハードディスク"
 ],
 "storage\u0004Optical Drive": [
  null,
  "光学ドライブ"
 ],
 "storage\u0004Removable Drive": [
  null,
  "リムーバブルドライブ"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "ソリッドステートディスク"
 ],
 "format-bytes\u0004bytes": [
  null,
  "バイト"
 ]
}));
