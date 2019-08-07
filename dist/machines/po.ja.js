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
nplurals=1; plural=0;
return plural;
},
  "language": "ja",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Network": [
  null,
  "$0 ネットワーク"
 ],
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 は、多数のオペレーティングシステムで利用できます。インストールするには、GNOME ソフトウェアで検索するか、以下を実行します:"
 ],
 "Activate": [
  null,
  "有効化"
 ],
 "Add": [
  null,
  "追加する"
 ],
 "Add Disk": [
  null,
  "ディスクの追加"
 ],
 "Additional": [
  null,
  "追加"
 ],
 "Address": [
  null,
  "アドレス:"
 ],
 "Address:": [
  null,
  "アドレス: "
 ],
 "Always attach": [
  null,
  "常に割り当てる"
 ],
 "Apply": [
  null,
  "適用"
 ],
 "Automatically start libvirt on boot": [
  null,
  "起動時に libvirt を自動開始"
 ],
 "Autostart": [
  null,
  "自動起動"
 ],
 "Available": [
  null,
  "利用可能"
 ],
 "Boot Order": [
  null,
  "ブート順序"
 ],
 "Boot order settings could not be saved": [
  null,
  "ブート順序の設定は保存できませんでした"
 ],
 "Bus": [
  null,
  "バス"
 ],
 "CPU Type": [
  null,
  "CPU タイプ"
 ],
 "Cache": [
  null,
  "キャッシュ"
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Capacity": [
  null,
  "容量"
 ],
 "Changes will take effect after shutting down the VM": [
  null,
  "変更は、仮想マシンをシャットダウンすると反映されます。"
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "\"リモートビューアーの起動\" をクリックすると、.vv ファイルをダウンロードし、$0 を起動します。"
 ],
 "Confirm deletion of the Virtual Network": [
  null,
  "仮想ネットワークの削除を確定"
 ],
 "Connect with any $0 viewer application.": [
  null,
  "$0 ビューアーアプリケーションに接続します。"
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "SPICE または VNC のビューアーアプリケーションに接続します。"
 ],
 "Connecting": [
  null,
  "接続中"
 ],
 "Connecting to Virtualization Service": [
  null,
  "仮想化サービスへの接続"
 ],
 "Connection": [
  null,
  "接続"
 ],
 "Console Type": [
  null,
  "コンソールタイプ"
 ],
 "Consoles": [
  null,
  "コンソール"
 ],
 "Cores per socket": [
  null,
  "ソケットごとのコア"
 ],
 "Create": [
  null,
  "作成"
 ],
 "Create New": [
  null,
  "新規作成"
 ],
 "Create Storage Pool": [
  null,
  "ストレージプールの作成"
 ],
 "Create VM": [
  null,
  "仮想マシンの作成"
 ],
 "Creation of VM $0 failed": [
  null,
  "VM $0 の作成に失敗"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "Current Allocation": [
  null,
  "現在の割り当て"
 ],
 "DHCP Range": [
  null,
  "DHCP の範囲"
 ],
 "Deactivate": [
  null,
  "解除"
 ],
 "Delete": [
  null,
  "削除"
 ],
 "Delete Content": [
  null,
  "コンテンツの削除"
 ],
 "Delete Network $0": [
  null,
  "ネットワーク $0 の削除"
 ],
 "Delete Storage Pool $0": [
  null,
  "ストレージプール $0 の削除"
 ],
 "Delete associated storage files:": [
  null,
  "関連するストレージファイルの削除:"
 ],
 "Delete the Volumes inside this Pool": [
  null,
  "このプール内のボリュームを削除します"
 ],
 "Deleting an inactive Storage Pool will only undefine the Pool. Its content will not be deleted.": [
  null,
  "停止状態のストレージプールの削除は、プールの定義を解除するだけです。コンテンツは削除されません。"
 ],
 "Device": [
  null,
  "デバイス"
 ],
 "Disconnect": [
  null,
  "切断"
 ],
 "Disconnected": [
  null,
  "切断されています"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  "シリアルコンソールから切断されました。「再接続」ボタンをクリックします。"
 ],
 "Disk $0 fail to get detached from VM $1": [
  null,
  "ディスク $0 は、VM $1 からの切断に失敗しました"
 ],
 "Disk failed to be attached": [
  null,
  "ディスクの割り当てに失敗しました"
 ],
 "Disk failed to be created": [
  null,
  "ディスクの作成に失敗しました"
 ],
 "Disks": [
  null,
  "ディスク"
 ],
 "Disks cannot be removed from $0 VMs": [
  null,
  "$0 VM からディスクを削除できません"
 ],
 "Download the MSI from $0": [
  null,
  "MSI を $0 からダウンロードします"
 ],
 "Edit": [
  null,
  "編集"
 ],
 "Emulated Machine": [
  null,
  "エミュレートされたマシン"
 ],
 "Existing Disk Image": [
  null,
  "既存のディスクイメージ"
 ],
 "Existing disk image on host's file system": [
  null,
  "ホストファイルシステム上の既存のディスクイメージ"
 ],
 "Failed to fetch the IP addresses of the interfaces present in $0": [
  null,
  "$0 のインターフェイスの IP アドレスの取得に失敗しました"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "仮想 CPU の最大数よりも少ない数を有効にするべきです。"
 ],
 "File": [
  null,
  "File"
 ],
 "Filesystem Directory": [
  null,
  "ファイルシステムのディレクトリー"
 ],
 "Force Restart": [
  null,
  "再起動の強制"
 ],
 "Force Shut Down": [
  null,
  "シャットダウンの強制"
 ],
 "Format": [
  null,
  "フォーマット"
 ],
 "Forwarding mode": [
  null,
  "転送モード"
 ],
 "General": [
  null,
  "全般"
 ],
 "GiB": [
  null,
  "GiB"
 ],
 "Graphics Console (VNC)": [
  null,
  "グラフィックコンソール (VNC)"
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  "デスクトップビューアーのグラフィックコンソール"
 ],
 "Hide Performance Options": [
  null,
  "パフォーマンスオプションを非表示にします"
 ],
 "Host": [
  null,
  "ホスト"
 ],
 "Host Device": [
  null,
  "ホストデバイス"
 ],
 "Host Name": [
  null,
  "ホスト名"
 ],
 "Host should not be empty": [
  null,
  "ホストは空にできません"
 ],
 "IP Address": [
  null,
  "IP アドレス"
 ],
 "IPv4 Address": [
  null,
  "IPv4 アドレス"
 ],
 "IPv6 Address": [
  null,
  "IPv6 アドレス"
 ],
 "Immediately Start VM": [
  null,
  "仮想マシンをすぐに起動"
 ],
 "In most configurations, macvtap does not work for host to guest network communication.": [
  null,
  "ほとんどの構成で、macvtap は、ホストからゲストへのネットワーク通信には正しく動作しません。"
 ],
 "Initiator": [
  null,
  "イニシエーター"
 ],
 "Initiator IQN should not be empty": [
  null,
  "イニシエーター IQN は空にできません"
 ],
 "Install": [
  null,
  "インストール"
 ],
 "Installation Source": [
  null,
  "インストールソース"
 ],
 "Installation Source Type": [
  null,
  "インストールソースのタイプ"
 ],
 "Installation Source should not be empty": [
  null,
  "インストールソースは空欄にできません"
 ],
 "Interface Type": [
  null,
  "インターフェース形式"
 ],
 "Invalid filename": [
  null,
  "無効なファイル名"
 ],
 "Isolated Network": [
  null,
  "隔離されたネットワーク"
 ],
 "Launch Remote Viewer": [
  null,
  "リモートビューアーの起動"
 ],
 "Loading ...": [
  null,
  "ロード中..."
 ],
 "Local Install Media": [
  null,
  "ローカルインストールメディア"
 ],
 "MAC Address": [
  null,
  "MAC アドレス"
 ],
 "Mac": [
  null,
  "Mac"
 ],
 "Mac Address": [
  null,
  "Mac アドレス"
 ],
 "Manual Connection": [
  null,
  "手動接続"
 ],
 "Maximum Allocation": [
  null,
  "最大割り当て"
 ],
 "Maximum Transmission Unit": [
  null,
  "Maximum Transmission Unit"
 ],
 "Maximum memory could not be saved": [
  null,
  "最大メモリーは保存できませんでした"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "ゲスト OS に割り当てられる仮想 CPU の最大数で、これは 1 から $0 の間でなければなりません"
 ],
 "Memory": [
  null,
  "メモリ"
 ],
 "Memory could not be saved": [
  null,
  "メモリーは保存できませんでした"
 ],
 "Memory must not be 0": [
  null,
  "メモリは 0 以外である必要があります"
 ],
 "Memory size between 128 MiB and the maximum allocation": [
  null,
  "メモリーサイズは、128 MiB から最大割り当ての間です"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Model": [
  null,
  "モデル"
 ],
 "Model type": [
  null,
  "モデルタイプ"
 ],
 "More Information": [
  null,
  "詳細情報"
 ],
 "NAT to $0": [
  null,
  "$0 への NAT"
 ],
 "NIC $0 of VM $1 failed to change state": [
  null,
  "VM $1 の NIC $0 は、状態の変更に失敗しました"
 ],
 "Name": [
  null,
  "名前"
 ],
 "Name should not be empty": [
  null,
  "名前は空欄にできません"
 ],
 "Name: ": [
  null,
  "名前: "
 ],
 "Netmask": [
  null,
  "ネットマスク"
 ],
 "Network $0 failed to get activated": [
  null,
  "ネットワーク $0 のアクティベートに失敗しました"
 ],
 "Network $0 failed to get deactivated": [
  null,
  "ネットワーク $0 の停止に失敗しました"
 ],
 "Network Boot (PXE)": [
  null,
  "ネットワークブート (PXE)"
 ],
 "Network Boot is available only when using System connection": [
  null,
  ""
 ],
 "Network File System": [
  null,
  "ネットワークファイルシステム"
 ],
 "Network Interfaces": [
  null,
  "ネットワークインターフェース"
 ],
 "Network Selection does not support PXE.": [
  null,
  "ネットワーク選択では PXE がサポートされていません。"
 ],
 "Network interface settings could not be saved": [
  null,
  "ネットワークインターフェース設定を保存できませんでした"
 ],
 "Networks": [
  null,
  "ネットワーク"
 ],
 "New Volume Name": [
  null,
  "新しいボリューム名"
 ],
 "No Storage Pools available": [
  null,
  "利用可能なストレージプールはありません"
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "このストレージプールにストレージボリュームが定義されていません"
 ],
 "No VM is running or defined on this host": [
  null,
  "仮想マシンがこのホストで実行されていないか、定義されていません。"
 ],
 "No Virtual Networks": [
  null,
  "仮想ネットワークはありません"
 ],
 "No boot device found": [
  null,
  "ブートデバイスが見つかりません"
 ],
 "No console defined for this virtual machine.": [
  null,
  "この仮想マシンにはコンソールが定義されていません"
 ],
 "No disks defined for this VM": [
  null,
  "この仮想マシンに対してディスクが定義されていません"
 ],
 "No matching files found": [
  null,
  "一致するファイルが見つかりませんでした。"
 ],
 "No network interfaces defined for this VM": [
  null,
  "この仮想マシンにはネットワークインターフェースが定義されていません"
 ],
 "No network is defined on this host": [
  null,
  "このホストで定義されるネットワークはありません"
 ],
 "No networks available": [
  null,
  "利用可能なネットワークはありません"
 ],
 "No storage pool is defined on this host": [
  null,
  "このホストではストレージプールが定義されていません"
 ],
 "None (Isolated Network)": [
  null,
  "なし (隔離されたネットワーク)"
 ],
 "OS Vendor": [
  null,
  "OS ベンダー"
 ],
 "One or more selected volumes are used by domains. Detach the disks first to allow volume deletion.": [
  null,
  "ひとつまたは複数の選択されたボリュームがドメインで使用されています。最初にディスクを切断し、ボリュームが削除できるようにします。"
 ],
 "Only editable when the guest is shut off": [
  null,
  "ゲストがシャットオフされた場合のみ、編集可能です"
 ],
 "Open": [
  null,
  "開く"
 ],
 "Operating System": [
  null,
  "オペレーティングシステム"
 ],
 "Operation is in progress": [
  null,
  "操作を実行中"
 ],
 "Overview": [
  null,
  "概要"
 ],
 "Path": [
  null,
  "パス"
 ],
 "Path on host's filesystem": [
  null,
  "ホストファイルシステム上のパス"
 ],
 "Path to ISO file on host's file system": [
  null,
  "ホストファイルシステムの ISO ファイルのパス"
 ],
 "Path to file": [
  null,
  "ファイルのパス"
 ],
 "Pause": [
  null,
  "一時停止"
 ],
 "Persistence": [
  null,
  "永続"
 ],
 "Persistent": [
  null,
  "永続"
 ],
 "Physical Disk Device": [
  null,
  "物理ディスクデバイス"
 ],
 "Physical disk device on host": [
  null,
  "ホスト上の物理ディスクデバイス"
 ],
 "Please enter new volume name": [
  null,
  "新しいボリューム名を入力してください"
 ],
 "Please enter new volume size": [
  null,
  "新しいボリュームサイズを入力してください"
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "仮想マシンを起動して、コンソールにアクセスしてください。"
 ],
 "Plug": [
  null,
  "プラグ"
 ],
 "Pool": [
  null,
  "プール"
 ],
 "Port": [
  null,
  "ポート"
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  "ゲストへの公開用の推奨されるソケットの数。"
 ],
 "Prefix": [
  null,
  "プレフィックス"
 ],
 "Private": [
  null,
  "プライベート"
 ],
 "Product": [
  null,
  "製品"
 ],
 "Protocol": [
  null,
  "プロトコル"
 ],
 "QEMU/KVM System connection": [
  null,
  "QEMU/KVM システム接続"
 ],
 "QEMU/KVM User connection": [
  null,
  "QEMU/KVM ユーザー接続"
 ],
 "Readonly": [
  null,
  "読み取り専用"
 ],
 "Reconnect": [
  null,
  "再接続"
 ],
 "Remote URL": [
  null,
  "リモート URL"
 ],
 "Restart": [
  null,
  "再起動"
 ],
 "Resume": [
  null,
  "再開"
 ],
 "Route to $0": [
  null,
  "$0 へのルーティング"
 ],
 "Routed Network": [
  null,
  "ルーティングされたネットワーク"
 ],
 "Run": [
  null,
  "実行"
 ],
 "Run when host boots": [
  null,
  "ホスト起動時に実行します"
 ],
 "SPICE": [
  null,
  "SPICE"
 ],
 "SPICE Address:": [
  null,
  "SPICE アドレス:"
 ],
 "SPICE Port:": [
  null,
  "SPICE ポート:"
 ],
 "SPICE TLS Port:": [
  null,
  "SPICE TLS ポート:"
 ],
 "Save": [
  null,
  "保存"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  "マスク不可割り込みを送信します"
 ],
 "Send key": [
  null,
  "キーの送信"
 ],
 "Serial Console": [
  null,
  "シリアルコンソール"
 ],
 "Session": [
  null,
  "セッション"
 ],
 "Show Performance Options": [
  null,
  "パフォーマンスオプションを表示します"
 ],
 "Shut Down": [
  null,
  "シャットダウン"
 ],
 "Size": [
  null,
  "Size"
 ],
 "Sockets": [
  null,
  "ソケット"
 ],
 "Source": [
  null,
  "ソース"
 ],
 "Source Format": [
  null,
  "ソースフォーマット"
 ],
 "Source Path": [
  null,
  "ソースパス"
 ],
 "Source path should not be empty": [
  null,
  "ソースパスは空欄にできません"
 ],
 "Source should start with http, ftp or nfs protocol": [
  null,
  "ソースは、http、ftp、または nfs プロトコルで開始する必要があります"
 ],
 "Start libvirt": [
  null,
  "libvirt の開始"
 ],
 "Start pool when host boots": [
  null,
  "ホスト起動時にプールを開始します"
 ],
 "Startup": [
  null,
  "起動"
 ],
 "State": [
  null,
  "状態"
 ],
 "Storage": [
  null,
  "ストレージ"
 ],
 "Storage Pool $0 failed to get activated": [
  null,
  "ストレージプール $0 は、アクティベートに失敗しました"
 ],
 "Storage Pool $0 failed to get deactivated": [
  null,
  "ストレージプール $0 は、停止に失敗しました"
 ],
 "Storage Pool Name": [
  null,
  "ストレージプール名"
 ],
 "Storage Pool failed to be created": [
  null,
  "ストレージプールの作成に失敗しました"
 ],
 "Storage Pools": [
  null,
  "ストレージプール"
 ],
 "Storage Volumes": [
  null,
  "ストレージボリューム"
 ],
 "Storage Volumes could not be deleted": [
  null,
  "ストレージボリュームは削除できませんでした"
 ],
 "System": [
  null,
  "システム"
 ],
 "Target": [
  null,
  "ターゲット"
 ],
 "Target Path": [
  null,
  "ターゲットパス"
 ],
 "Target path should not be empty": [
  null,
  "ターゲットパスは空欄にできません"
 ],
 "The Storage Pool could not be deleted": [
  null,
  "ストレージプールを削除できませんでした"
 ],
 "The VM crashed.": [
  null,
  "仮想マシンがクラッシュしました。"
 ],
 "The VM is down.": [
  null,
  "仮想マシンがダウンしています。"
 ],
 "The VM is going down.": [
  null,
  "仮想マシンがダウンします。"
 ],
 "The VM is idle.": [
  null,
  "仮想マシンがアイドル状態です。"
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  "仮想マシンが終了中の状態です (シャットダウンまたはクラッシュが完了していません)。"
 ],
 "The VM is paused.": [
  null,
  "仮想マシンが一時停止しています。"
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  "仮想マシンが稼動しているため、削除前に強制的に電源がオフになります。"
 ],
 "The VM is running.": [
  null,
  "仮想マシンが実行中です。"
 ],
 "The VM is suspended by guest power management.": [
  null,
  "仮想マシンはゲストの電源管理によって一時停止されています。"
 ],
 "The directory on the server being exported": [
  null,
  "サーバー上のディレクトリーをエクスポート中"
 ],
 "The network could not be deleted": [
  null,
  "ネットワークを削除できませんでした"
 ],
 "The pool is empty": [
  null,
  "プールが空です"
 ],
 "The selected Operating System has minimum memory requirement of $0 $1": [
  null,
  "選択したオペレーティングシステムには、必要なメモリー $0 $1 があります"
 ],
 "This pool type does not support Storage Volume creation": [
  null,
  "このプールタイプは、ストレージボリュームの作成に対応していません"
 ],
 "This volume is already used by another VM.": [
  null,
  "このボリュームは、別の VM によってすでに使用されています。"
 ],
 "Threads per core": [
  null,
  "コアあたりのスレッド"
 ],
 "Too many files found": [
  null,
  "見つかったファイルが多すぎます"
 ],
 "Troubleshoot": [
  null,
  "トラブルシュート"
 ],
 "Type": [
  null,
  "タイプ"
 ],
 "Type ID": [
  null,
  "Type ID"
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unique name": [
  null,
  "固有名"
 ],
 "Unit": [
  null,
  "単位"
 ],
 "Unknown": [
  null,
  "不明"
 ],
 "Unplug": [
  null,
  "アンプラグ"
 ],
 "Up to $0 $1 available in the default location": [
  null,
  "デフォルトの場所では、最大 $0 $1 まで利用できます"
 ],
 "Up to $0 $1 available on the host": [
  null,
  "このホストでは最大 $0 $1 まで使用できます"
 ],
 "Usage": [
  null,
  "使用法"
 ],
 "Use Existing": [
  null,
  "既存の使用"
 ],
 "Used": [
  null,
  "Used"
 ],
 "Used by": [
  null,
  "使用中"
 ],
 "VCPU settings could not be saved": [
  null,
  "VCPU 設定を保存できませんでした"
 ],
 "VM $0 failed to Reboot": [
  null,
  "VM $0 は、再起動に失敗しました"
 ],
 "VM $0 failed to force Reboot": [
  null,
  "VM $0 は、強制的に再起動させることに失敗しました"
 ],
 "VM $0 failed to force shutdown": [
  null,
  "VM $0 は、強制的にシャットダウンさせることに失敗しました"
 ],
 "VM $0 failed to get deleted": [
  null,
  "VM $0 の削除に失敗しました"
 ],
 "VM $0 failed to get installed": [
  null,
  "VM $0 のインストールに失敗しました"
 ],
 "VM $0 failed to pause": [
  null,
  "VM $0 の一時停止に失敗しました"
 ],
 "VM $0 failed to resume": [
  null,
  "VM $0 の再開に失敗しました"
 ],
 "VM $0 failed to send NMI": [
  null,
  "VM $0 は NMI の送信に失敗しました"
 ],
 "VM $0 failed to shutdown": [
  null,
  "VM $0 はシャットダウンに失敗しました"
 ],
 "VM $0 failed to start": [
  null,
  "VM $0 は起動に失敗しました"
 ],
 "VNC": [
  null,
  "VNC"
 ],
 "VNC Address:": [
  null,
  "VNC アドレス:"
 ],
 "VNC Port:": [
  null,
  "VNC ポート:"
 ],
 "VNC TLS Port:": [
  null,
  "VNC TLS ポート:"
 ],
 "Vendor": [
  null,
  "ベンダー"
 ],
 "Virtual Machines": [
  null,
  "仮想マシン"
 ],
 "Virtual Network": [
  null,
  "仮想ネットワーク"
 ],
 "Virtualization Service (libvirt) is Not Active": [
  null,
  "仮想化サービス (libvirt) は有効ではありません "
 ],
 "Virtualization Service is Available": [
  null,
  "仮想化サービスは利用可能です"
 ],
 "Volume": [
  null,
  "音量"
 ],
 "WWPN": [
  null,
  "WWPN"
 ],
 "You need to select the most closely matching OS vendor and Operating System": [
  null,
  "最も合致する OS ベンダーおよびオペレーティングシステムを選択しなければなりません"
 ],
 "active": [
  null,
  "アクティブ"
 ],
 "bridge": [
  null,
  "ブリッジ"
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "control-label $0": [
  null,
  "control-label $0"
 ],
 "crashed": [
  null,
  "クラッシュ"
 ],
 "custom": [
  null,
  "カスタム"
 ],
 "direct": [
  null,
  "ダイレクト"
 ],
 "disabled": [
  null,
  "無効"
 ],
 "disk": [
  null,
  "ディスク"
 ],
 "down": [
  null,
  "下へ"
 ],
 "dying": [
  null,
  "終了中"
 ],
 "enabled": [
  null,
  "有効"
 ],
 "ethernet": [
  null,
  "Ethernet"
 ],
 "host": [
  null,
  "ホスト"
 ],
 "host device": [
  null,
  "ホストデバイス"
 ],
 "hostdev": [
  null,
  "hostdev"
 ],
 "iSCSI Initiator IQN": [
  null,
  "iSCSI イニシエーター IQN"
 ],
 "iSCSI Target": [
  null,
  "iSCSI ターゲット"
 ],
 "iSCSI direct Target": [
  null,
  "iSCSI ダイレクトターゲット"
 ],
 "iSCSI target IQN": [
  null,
  "iSCSI ターゲット IQN"
 ],
 "idle": [
  null,
  "アイドル"
 ],
 "inactive": [
  null,
  "非アクティブ"
 ],
 "mcast": [
  null,
  "mcast"
 ],
 "network": [
  null,
  "ネットワーク"
 ],
 "no": [
  null,
  "いいえ"
 ],
 "paused": [
  null,
  "一時停止"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
 ],
 "redirected device": [
  null,
  "リダイレクトデバイス"
 ],
 "running": [
  null,
  "実行中"
 ],
 "server": [
  null,
  "サーバー"
 ],
 "show less": [
  null,
  "表示を減らす"
 ],
 "show more": [
  null,
  "表示を増やす"
 ],
 "shut off": [
  null,
  "シャットオフ"
 ],
 "shutdown": [
  null,
  "shutdown"
 ],
 "suspended (PM)": [
  null,
  "一時停止中 (PM)"
 ],
 "udp": [
  null,
  "udp"
 ],
 "undefined": [
  null,
  "未定義"
 ],
 "up": [
  null,
  "上へ"
 ],
 "user": [
  null,
  "ユーザー"
 ],
 "vCPU Count": [
  null,
  "vCPU 数"
 ],
 "vCPU Maximum": [
  null,
  "vCPU 最大値"
 ],
 "vCPUs": [
  null,
  "vCPU"
 ],
 "vhostuser": [
  null,
  "vhostuser"
 ],
 "virt-install package needs to be installed on the system in order to create new VMs": [
  null,
  "新しい VM を作成するには、virt-install パッケージをシステムにインストールする必要があります"
 ],
 "yes": [
  null,
  "はい"
 ]
}));
