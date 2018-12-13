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
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 は、多数のオペレーティングシステムで利用できます。インストールするには、GNOME ソフトウェアで検索するか、以下を実行します:"
 ],
 "Add": [
  null,
  "追加する"
 ],
 "Add Disk": [
  null,
  "ディスクの追加"
 ],
 "Address": [
  null,
  "アドレス:"
 ],
 "Address:": [
  null,
  "アドレス: "
 ],
 "Apply": [
  null,
  "適用"
 ],
 "Attach permanently": [
  null,
  "完全な割り当て"
 ],
 "Automatically start libvirt on boot": [
  null,
  "起動時に libvirt を自動開始"
 ],
 "Autostart:": [
  null,
  "自動起動:"
 ],
 "Available": [
  null,
  "利用可能"
 ],
 "Boot Order:": [
  null,
  "ブート順序:"
 ],
 "Bus": [
  null,
  "バス"
 ],
 "CPU Type:": [
  null,
  "CPU タイプ:"
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
 "Creation of vm $0 failed": [
  null,
  "vm $0 の作成に失敗しました。"
 ],
 "Ctrl+Alt+Del": [
  null,
  "Ctrl+Alt+Del"
 ],
 "Delete": [
  null,
  "削除"
 ],
 "Delete associated storage files:": [
  null,
  "関連するストレージファイルの削除:"
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
 "Download the MSI from $0": [
  null,
  "MSI を $0 からダウンロードします"
 ],
 "Edit": [
  null,
  "編集"
 ],
 "Emulated Machine:": [
  null,
  "エミュレートされたマシン:"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "仮想 CPU の最大数よりも少ない数を有効にするべきです。"
 ],
 "File": [
  null,
  "File"
 ],
 "Filesystem": [
  null,
  "ファイルシステム"
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
 "Host": [
  null,
  "ホスト"
 ],
 "Host Name": [
  null,
  "ホスト名"
 ],
 "Host should not be empty": [
  null,
  "ホストは空にできません"
 ],
 "Immediately Start VM": [
  null,
  "仮想マシンをすぐに起動"
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
 "Invalid filename": [
  null,
  "無効なファイル名"
 ],
 "Launch Remote Viewer": [
  null,
  "リモートビューアーの起動"
 ],
 "Loading ...": [
  null,
  "ロード中..."
 ],
 "MAC Address": [
  null,
  "MAC アドレス"
 ],
 "Mac Address": [
  null,
  "Mac アドレス"
 ],
 "Manual Connection": [
  null,
  "手動接続"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "ゲスト OS に割り当てられる仮想 CPU の最大数で、これは 1 から $0 の間でなければなりません"
 ],
 "Memory": [
  null,
  "メモリ"
 ],
 "Memory should be positive number": [
  null,
  "メモリーは正の数値である必要があります"
 ],
 "Memory:": [
  null,
  "メモリー:"
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
 "Name": [
  null,
  "名前"
 ],
 "Name should not be empty": [
  null,
  "名前は空欄にできません"
 ],
 "Name should not consist of empty characters only": [
  null,
  "名前は空欄にできません"
 ],
 "Network File System": [
  null,
  "ネットワークファイルシステム"
 ],
 "Network Type": [
  null,
  "ネットワークタイプ"
 ],
 "Network settings could not be saved": [
  null,
  "ネットワーク設定を保存できませんでした"
 ],
 "Networks": [
  null,
  "ネットワーク"
 ],
 "New Volume Name": [
  null,
  "新しいボリューム名"
 ],
 "No Storage Volumes defined for this Storage Pool": [
  null,
  "このストレージプールにストレージボリュームが定義されていません"
 ],
 "No VM is running or defined on this host": [
  null,
  "仮想マシンがこのホストで実行されていないか、定義されていません。"
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
 "No storage pool is defined on this host": [
  null,
  "このホストではストレージプールが定義されていません"
 ],
 "No virtual networks": [
  null,
  "仮想ネットワークがありません"
 ],
 "OS Vendor": [
  null,
  "OS ベンダー"
 ],
 "Operating System": [
  null,
  "オペレーティングシステム"
 ],
 "Overview": [
  null,
  "概要"
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
 "Run": [
  null,
  "実行"
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
 "Source Path": [
  null,
  "ソースパス"
 ],
 "Source path should not be empty": [
  null,
  "ソースパスは空欄にできません"
 ],
 "Source should start with https, ftp or nfs protocol": [
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
 "Start the VM to see disk statistics.": [
  null,
  "仮想マシンを起動して、ディスク統計を確認します"
 ],
 "Startup": [
  null,
  "起動"
 ],
 "State": [
  null,
  "状態"
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
 "Storage Size": [
  null,
  "ストレージのサイズ"
 ],
 "Storage Size should not be negative number": [
  null,
  "ストレージのサイズは負の値にすることができません"
 ],
 "Storage Volumes": [
  null,
  "ストレージボリューム"
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
 "The pool is empty": [
  null,
  "プールが空です"
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
 "URL": [
  null,
  "URL"
 ],
 "Unique name": [
  null,
  "固有名"
 ],
 "Unplug": [
  null,
  "アンプラグ"
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  "ディスクの統計情報を表示するには、libvirt を新しいバージョンにアップグレードしてください"
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
 "VCPU settings could not be saved": [
  null,
  "VCPU 設定を保存できませんでした"
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
 "Virtual Machines": [
  null,
  "仮想マシン"
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
 "active": [
  null,
  "アクティブ"
 ],
 "inactive": [
  null,
  "非アクティブ"
 ],
 "no": [
  null,
  "いいえ"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
 ],
 "show less": [
  null,
  "表示を減らす"
 ],
 "show more": [
  null,
  "表示を増やす"
 ],
 "undefined": [
  null,
  "未定義"
 ],
 "vCPU Count": [
  null,
  "vCPU 数"
 ],
 "vCPU Maximum": [
  null,
  "vCPU 最大値"
 ],
 "vCPUs:": [
  null,
  "vCPU:"
 ],
 "yes": [
  null,
  "はい"
 ]
}));
