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
 "$0 vCPU Details": [
  null,
  "$0 vCPU の詳細"
 ],
 "Action": [
  null,
  "アクション"
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
 "All changes will take effect only after stopping and starting the VM.": [
  null,
  "すべての変更は、仮想マシンの停止および開始後にのみ、実施されます。"
 ],
 "All running virtual machines will be turned off.": [
  null,
  "全ての実行中のマシンはオフされます。"
 ],
 "Apply": [
  null,
  "適用"
 ],
 "Attach permanently": [
  null,
  "完全な割り当て"
 ],
 "Automatically selected host": [
  null,
  "自動的に選択されたホスト"
 ],
 "Autostart:": [
  null,
  "自動起動:"
 ],
 "Available": [
  null,
  "利用可能"
 ],
 "Base Template": [
  null,
  "ベーステンプレート"
 ],
 "Base template": [
  null,
  "ベーステンプレート"
 ],
 "Base template:": [
  null,
  "ベーステンプレート:"
 ],
 "Boot Order:": [
  null,
  "ブート順序:"
 ],
 "Bus": [
  null,
  "バス"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  "CHANGE NETWORK STATE アクションに失敗しました"
 ],
 "CPU Type:": [
  null,
  "CPU タイプ:"
 ],
 "CREATE VM action failed": [
  null,
  "CREATE VM アクションに失敗しました"
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Capacity": [
  null,
  "容量"
 ],
 "Changes will apply on VM shutdown": [
  null,
  ""
 ],
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "\"リモートビューアーの起動\" をクリックすると、.vv ファイルをダウンロードし、$0 を起動します。"
 ],
 "Cluster": [
  null,
  "クラスター"
 ],
 "Cluster Templates": [
  null,
  "クラスターテンプレート"
 ],
 "Cluster Virtual Machines": [
  null,
  "クラスター仮想マシン"
 ],
 "Confirm deletion of $0": [
  null,
  "$0 の削除を確定"
 ],
 "Confirm migration": [
  null,
  "移行の確定"
 ],
 "Confirm reload:": [
  null,
  "リロードの確認:"
 ],
 "Confirm save:": [
  null,
  "保存の確認:"
 ],
 "Connect to oVirt Engine": [
  null,
  "oVirt エンジンに接続"
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
  ""
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
 "Create New VM": [
  null,
  "仮想マシンの新規作成"
 ],
 "Create VM": [
  null,
  "仮想マシンの作成"
 ],
 "Ctrl+Alt+Del": [
  null,
  ""
 ],
 "Delete": [
  null,
  "削除"
 ],
 "Delete associated storage files:": [
  null,
  "関連するストレージファイルの削除:"
 ],
 "Description": [
  null,
  "説明"
 ],
 "Description:": [
  null,
  "詳細:"
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
 "Disk failed to be attached with following error: ": [
  null,
  "以下のエラーが原因でディスクの割り当てに失敗しました: "
 ],
 "Disk failed to be created with following error: ": [
  null,
  "以下のエラーが原因でディスクの作成に失敗しました: "
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
 "Edit the vdsm.conf": [
  null,
  "vdsm.conf を編集します"
 ],
 "Emulated Machine:": [
  null,
  "エミュレートされたマシン:"
 ],
 "Enter New VM name": [
  null,
  "新規仮想マシン名を入力します"
 ],
 "FQDN": [
  null,
  "FQDN"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "仮想 CPU の最大数よりも少ない数を有効にするべきです。"
 ],
 "File": [
  null,
  "File"
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
 "GET HYPERVISOR MAX VCPU action failed": [
  null,
  "GET HYPERVISOR MAX VCPU アクションに失敗しました"
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
 "HA": [
  null,
  "HA"
 ],
 "HA:": [
  null,
  "HA:"
 ],
 "Host": [
  null,
  "ホスト"
 ],
 "Host to Maintenance": [
  null,
  "メンテナンスするホスト"
 ],
 "INSTALL VM action failed": [
  null,
  "INSTALL VM アクションに失敗しました"
 ],
 "Install": [
  null,
  "インストール"
 ],
 "Launch Remote Viewer": [
  null,
  "リモートビューアーの起動"
 ],
 "Loading ...": [
  null,
  "ロード中..."
 ],
 "Loading data ...": [
  null,
  "データのロード中..."
 ],
 "MAC Address": [
  null,
  "MAC アドレス"
 ],
 "MIGRATE action failed": [
  null,
  "MIGRATE アクションに失敗しました"
 ],
 "Mac Address": [
  null,
  ""
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
 "Memory:": [
  null,
  "メモリー:"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Migrate To:": [
  null,
  "移行先:"
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
 "Network Type": [
  null,
  ""
 ],
 "Network settings failed to change with following error: ": [
  null,
  ""
 ],
 "Networks": [
  null,
  "ネットワーク"
 ],
 "New Volume Name": [
  null,
  "新しいボリューム名"
 ],
 "No VM found in oVirt.": [
  null,
  "oVirt で仮想マシンが見つかりませんでした。"
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
 "No network interfaces defined for this VM": [
  null,
  "この仮想マシンにはネットワークインターフェースが定義されていません"
 ],
 "No oVirt connection": [
  null,
  "oVirt 接続がありません"
 ],
 "No virtual networks": [
  null,
  ""
 ],
 "Number of virtual CPUs that gonna be used.": [
  null,
  "使用予定の仮想 CPU の数。"
 ],
 "OK": [
  null,
  "OK"
 ],
 "OS": [
  null,
  "OS"
 ],
 "OS Type:": [
  null,
  "OS タイプ:"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Optimized for:": [
  null,
  "次に対して最適化:"
 ],
 "Overview": [
  null,
  "概要"
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  "ホストがメンテナンスモードに切り替わっていることを確認してください。"
 ],
 "Please enter new volume name": [
  null,
  "新しいボリューム名を入力してください"
 ],
 "Please enter new volume size": [
  null,
  "新しいボリュームサイズを入力してください"
 ],
 "Please provide fully qualified domain name and port of the oVirt engine.": [
  null,
  "完全修飾ドメイン名と、oVirt エンジンのポートを提供してください。"
 ],
 "Please provide valid oVirt engine fully qualified domain name (FQDN) and port (443 by default)": [
  null,
  "有効な oVirt エンジンの完全修飾ドメイン名 (FQDN) と、ポート (デフォルトでは 443) を提供してください"
 ],
 "Please refer to oVirt's $0 for more information about Remote Viewer setup.": [
  null,
  "リモートビューアーの設定の詳細は、oVirt の $0 を参照してください。"
 ],
 "Please start the virtual machine to access its console.": [
  null,
  "仮想マシンを起動して、コンソールにアクセスしてください。"
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  "サーバーから仮想マシンの一覧がロードされるのをお待ちください。"
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  "テンプレートの一覧がサーバーからロードされるのをお待ちください。"
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
 "Preparing for Maintenance": [
  null,
  "メンテナンスの準備中"
 ],
 "Protocol": [
  null,
  "プロトコル"
 ],
 "REBOOT action failed": [
  null,
  "REBOOT アクションに失敗しました"
 ],
 "Readonly": [
  null,
  "読み取り専用"
 ],
 "Reconnect": [
  null,
  "再接続"
 ],
 "Register oVirt": [
  null,
  "oVirt の登録"
 ],
 "Registering oVirt to Cockpit": [
  null,
  "oVirt を Cockpit に登録中"
 ],
 "Reload": [
  null,
  "再読み込み"
 ],
 "Restart": [
  null,
  "再起動"
 ],
 "Run": [
  null,
  "実行"
 ],
 "Run Here": [
  null,
  "ここから実行"
 ],
 "Running Since:": [
  null,
  "実行開始:"
 ],
 "SET VCPU SETTINGS action failed": [
  null,
  "SET VCPU SETTINGS アクションに失敗しました"
 ],
 "SHUTDOWN action failed": [
  null,
  "SHUTDOWN アクションに失敗しました"
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
 "START action failed": [
  null,
  "START アクションに失敗しました"
 ],
 "SUSPEND action failed": [
  null,
  "SUSPEND アクションに失敗しました"
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
  ""
 ],
 "Serial Console": [
  null,
  "シリアルコンソール"
 ],
 "Session": [
  null,
  "セッション"
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
 "Start the VM to see disk statistics.": [
  null,
  "仮想マシンを起動して、ディスク統計を確認します"
 ],
 "State": [
  null,
  "状態"
 ],
 "Stateless": [
  null,
  "ステートレス"
 ],
 "Stateless:": [
  null,
  "ステートレス:"
 ],
 "Suspend": [
  null,
  "一時停止"
 ],
 "Switch Host to Maintenance": [
  null,
  "ホストをメンテナンスに切り替え"
 ],
 "Switching host to maintenance mode failed. Received error: ": [
  null,
  "ホストをメンテナンスモードに切り替えることができませんでした。受け取ったエラー: "
 ],
 "Switching host to maintenance mode in progress ...": [
  null,
  "ホストをメンテナンスモードに切り替え中..."
 ],
 "System": [
  null,
  "システム"
 ],
 "Target": [
  null,
  "ターゲット"
 ],
 "Template": [
  null,
  "テンプレート"
 ],
 "Templates": [
  null,
  "テンプレート"
 ],
 "Templates of $0 cluster": [
  null,
  "$0 クラスターのテンプレート"
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
 "The pool is empty": [
  null,
  "プールが空です"
 ],
 "This host is managed by a virtualization manager, so creation of new VMs from the host is not possible.": [
  null,
  "このホストは仮想化マネージャーによって管理されているため、ホストからの新規の仮想マシンの作成は不可能です。"
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  "この仮想マシンは、oVirt で管理されていません"
 ],
 "Threads per core": [
  null,
  ""
 ],
 "Type": [
  null,
  "タイプ"
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
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "VDSM サービス管理"
 ],
 "VM DELETE (DESTROY) action failed": [
  null,
  ""
 ],
 "VM DELETE (UNDEFINE) action failed": [
  null,
  ""
 ],
 "VM FORCE OFF action failed": [
  null,
  "VM FORCE OFF アクションに失敗しました"
 ],
 "VM FORCE REBOOT action failed": [
  null,
  "VM FORCE REBOOT アクションに失敗しました"
 ],
 "VM REBOOT action failed": [
  null,
  "VM REBOOT アクションに失敗しました"
 ],
 "VM SEND Non-Maskable Interrrupt action failed": [
  null,
  "VM SEND マスク不可な割り込みアクションに失敗しました"
 ],
 "VM SHUT DOWN action failed": [
  null,
  "VM SHUT DOWN アクションに失敗しました"
 ],
 "VM START action failed": [
  null,
  "VM START アクションに失敗しました"
 ],
 "VM icon": [
  null,
  "仮想マシンのアイコン"
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
 "Version": [
  null,
  "バージョン"
 ],
 "Version num": [
  null,
  "バージョン番号"
 ],
 "Virtual Machines": [
  null,
  "仮想マシン"
 ],
 "Virtual Machines of $0 cluster": [
  null,
  "$0 クラスターの仮想マシン"
 ],
 "Volume": [
  null,
  "音量"
 ],
 "bridge": [
  null,
  "ブリッジ"
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "connecting": [
  null,
  "接続中"
 ],
 "cores": [
  null,
  "コア"
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
 "error": [
  null,
  "エラー"
 ],
 "ethernet": [
  null,
  "Ethernet"
 ],
 "host": [
  null,
  "ホスト"
 ],
 "hostdev": [
  null,
  "hostdev"
 ],
 "idle": [
  null,
  "アイドル"
 ],
 "initializing": [
  null,
  "初期化中"
 ],
 "installation failed": [
  null,
  "インストールに失敗しました"
 ],
 "installing OS": [
  null,
  "OS のインストール中"
 ],
 "kdumping": [
  null,
  "kdump 中"
 ],
 "maintenance": [
  null,
  "メンテナンス"
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
 "non operational": [
  null,
  "稼動していません"
 ],
 "non responsive": [
  null,
  "応答しません"
 ],
 "oVirt": [
  null,
  "oVirt"
 ],
 "oVirt Host State:": [
  null,
  "oVirt ホストの状態:"
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  "引数がないため、oVirt プロバイダーのインストールスクリプトに失敗しました。"
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  "oVirt プロバイダーのインストールスクリプトに失敗しました。/etc/cockpit/machines-ovirt.config に書き込めません。root で試行してください。"
 ],
 "oVirt installation script failed with following output: ": [
  null,
  "oVirt インストールスクリプトが失敗し、次が出力されます: "
 ],
 "oVirt login in progress": [
  null,
  "oVirt ログインの処理中"
 ],
 "other": [
  null,
  "その他"
 ],
 "paused": [
  null,
  "一時停止"
 ],
 "pending approval": [
  null,
  "保留中の承認"
 ],
 "qcow2": [
  null,
  "qcow2"
 ],
 "raw": [
  null,
  "raw"
 ],
 "reboot": [
  null,
  "再起動"
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
 "sockets": [
  null,
  "ソケット"
 ],
 "suspended (PM)": [
  null,
  "一時停止中 (PM)"
 ],
 "threads": [
  null,
  "スレッド"
 ],
 "udp": [
  null,
  "udp"
 ],
 "unassigned": [
  null,
  "未割り当て"
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
 "vCPUs:": [
  null,
  "vCPU:"
 ],
 "vhostuser": [
  null,
  "vhostuser"
 ],
 "yes": [
  null,
  "はい"
 ]
}));
