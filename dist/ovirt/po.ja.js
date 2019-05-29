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
 "All running virtual machines will be turned off.": [
  null,
  "全ての実行中のマシンはオフされます。"
 ],
 "Always attach": [
  null,
  "常に割り当てる"
 ],
 "Apply": [
  null,
  "適用"
 ],
 "Automatically selected host": [
  null,
  "自動的に選択されたホスト"
 ],
 "Autostart": [
  null,
  "自動起動"
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
 "Boot Order": [
  null,
  "ブート順序"
 ],
 "Boot order settings could not be saved": [
  null,
  "ブート順序の設定は保存できない"
 ],
 "Bus": [
  null,
  "バス"
 ],
 "CPU Type": [
  null,
  "CPU タイプ"
 ],
 "CREATE VM action failed": [
  null,
  "CREATE VM アクションに失敗しました"
 ],
 "Cache": [
  null,
  ""
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
  "接続中"
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
  "Ctrl+Alt+Del"
 ],
 "Current Allocation": [
  null,
  "現在の割り当て"
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
  ""
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
 "Emulated Machine": [
  null,
  "エミュレートされたマシン"
 ],
 "Enter New VM name": [
  null,
  "新規仮想マシン名を入力します"
 ],
 "FORCEOFF action failed: $0": [
  null,
  "FORCEOFF の動作が失敗: $0"
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
 "Hide Performance Options": [
  null,
  ""
 ],
 "Host": [
  null,
  "ホスト"
 ],
 "Host to Maintenance": [
  null,
  "メンテナンスするホスト"
 ],
 "Install": [
  null,
  "インストール"
 ],
 "Interface Type": [
  null,
  "インターフェース形式"
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
 "Memory size between 128 MiB and the maximum allocation": [
  null,
  "128 MiB から最大割り当ての間のメモリーサイズ"
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
 "NIC $0 of VM $1 failed to change state": [
  null,
  "VM $1 の NIC $0 は、状態の変更に失敗しました"
 ],
 "Name": [
  null,
  "名前"
 ],
 "Network Interfaces": [
  null,
  "ネットワークインターフェース"
 ],
 "Network interface settings could not be saved": [
  null,
  "ネットワークインターフェース設定を保存できませんでした"
 ],
 "New Volume Name": [
  null,
  "新しいボリューム名"
 ],
 "No Storage Pools available": [
  null,
  ""
 ],
 "No VM found in oVirt.": [
  null,
  "oVirt で仮想マシンが見つかりませんでした。"
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
 "No network interfaces defined for this VM": [
  null,
  "この仮想マシンにはネットワークインターフェースが定義されていません"
 ],
 "No oVirt connection": [
  null,
  "oVirt 接続がありません"
 ],
 "None (Isolated Network)": [
  null,
  "なし (隔離されたネットワーク)"
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
 "Only editable when the guest is shut off": [
  null,
  "ゲストがシャットオフされた場合のみ、編集可能です"
 ],
 "Open": [
  null,
  "開く"
 ],
 "Optimized for:": [
  null,
  "次に対して最適化:"
 ],
 "Overview": [
  null,
  "概要"
 ],
 "Path": [
  null,
  "パス"
 ],
 "Pause": [
  null,
  "一時停止"
 ],
 "Persistence": [
  null,
  "永続"
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
 "REBOOT action failed": [
  null,
  "REBOOT アクションに失敗しました"
 ],
 "REBOOT_VM action failed: %s0": [
  null,
  "REBOOT_VM の動作が失敗: %s0"
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
 "Resume": [
  null,
  "再開"
 ],
 "Run": [
  null,
  "実行"
 ],
 "Run Here": [
  null,
  "ここから実行"
 ],
 "Run when host boots": [
  null,
  "ホスト起動時に実行します"
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
 "START_VM action failed: %s0": [
  null,
  "START_VM の動作が失敗: %s0"
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
  ""
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
  "コアあたりのスレッド"
 ],
 "Type": [
  null,
  "タイプ"
 ],
 "Type ID": [
  null,
  "Type ID"
 ],
 "Unit": [
  null,
  "単位"
 ],
 "Unplug": [
  null,
  "アンプラグ"
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
 "VDSM": [
  null,
  "VDSM"
 ],
 "VDSM Service Management": [
  null,
  "VDSM サービス管理"
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
  "VM $0 の停止に失敗しました"
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
  "VM $0 起動に失敗しました"
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
 "Vendor": [
  null,
  "ベンダー"
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
 "WWPN": [
  null,
  "WWPN"
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
 "control-label $0": [
  null,
  "control-label $0"
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
 "host device": [
  null,
  "ホストデバイス"
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
 "vhostuser": [
  null,
  "vhostuser"
 ],
 "yes": [
  null,
  "はい"
 ]
}));
