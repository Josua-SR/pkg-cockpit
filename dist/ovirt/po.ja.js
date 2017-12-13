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
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 は、多数のオペレーティングシステムで利用できます。インストールするには、GNOME ソフトウェアで検索するか、以下を実行します:"
 ],
 "Action": [
  null,
  "アクション"
 ],
 "Address:": [
  null,
  "アドレス:"
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
 "Connect with Remote Viewer": [
  null,
  "リモートビューアーに接続"
 ],
 "Connect with any $0 viewer application.": [
  null,
  "$0 ビューアーアプリケーションに接続します。"
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "SPICE または VNC のビューアーアプリケーションに接続します。"
 ],
 "Connection": [
  null,
  "接続"
 ],
 "Console": [
  null,
  "コンソール"
 ],
 "Count:": [
  null,
  "数量:"
 ],
 "Create": [
  null,
  "作成"
 ],
 "Create VM": [
  null,
  "仮想マシンの作成"
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
 "Disks": [
  null,
  "ディスク"
 ],
 "Download the MSI from $0": [
  null,
  "MSI を $0 からダウンロードします"
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
 "GB": [
  null,
  "GB"
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
 "Launch Remote Viewer": [
  null,
  "リモートビューアーの起動"
 ],
 "Loading data ...": [
  null,
  "データのロード中..."
 ],
 "MIGRATE action failed": [
  null,
  "MIGRATE アクションに失敗しました"
 ],
 "Manual Connection": [
  null,
  "手動接続"
 ],
 "Memory": [
  null,
  "メモリ"
 ],
 "Memory:": [
  null,
  "メモリー:"
 ],
 "Migrate To:": [
  null,
  "移行先:"
 ],
 "More Information": [
  null,
  "詳細情報"
 ],
 "Name": [
  null,
  "名前"
 ],
 "No VM found in oVirt.": [
  null,
  "oVirt で仮想マシンが見つかりませんでした。"
 ],
 "No VM is running or defined on this host": [
  null,
  "VM がこのホストで実行されていないか、定義されていません。"
 ],
 "No boot device found": [
  null,
  "ブートデバイスが見つかりません"
 ],
 "No disks defined for this VM": [
  null,
  "この仮想マシンにはディスクが定義されていません"
 ],
 "No graphics console is defined for this virtual machine.": [
  null,
  "この仮想マシンには、グラフィカルコンソールが定義されていません。"
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
 "Please start the virtual machine to access its graphics console.": [
  null,
  "仮想マシンを起動して、グラフィックコンソールにアクセスしてください。"
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  "サーバーから仮想マシンの一覧がロードされるまでお待ちください。"
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  "テンプレートの一覧がサーバーからロードされるのをお待ちください。"
 ],
 "Pool": [
  null,
  "プール"
 ],
 "Port": [
  null,
  "ポート"
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
 "Session": [
  null,
  "セッション"
 ],
 "Shut Down": [
  null,
  "シャットダウン"
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
 "Switch to Desktop Viewer": [
  null,
  "デスクトップビューアーに切り替える"
 ],
 "Switch to In-Browser Viewer": [
  null,
  "ブラウザー内ビューアーに切り替えます。"
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
 "The VM crashed.": [
  null,
  "VM がクラッシュしました。"
 ],
 "The VM is down.": [
  null,
  "VM がダウンしています。"
 ],
 "The VM is going down.": [
  null,
  "VM がダウンします。"
 ],
 "The VM is idle.": [
  null,
  "VM がアイドル状態です。"
 ],
 "The VM is in process of dying (shut down or crash is not completed).": [
  null,
  "VM が終了中の状態です (シャットダウンまたはクラッシュが完了していません)。"
 ],
 "The VM is paused.": [
  null,
  "VM が一時停止しています。"
 ],
 "The VM is running and will be forced off before deletion.": [
  null,
  "仮想マシンが稼動しているため、削除前に強制的に電源がオフになります。"
 ],
 "The VM is running.": [
  null,
  "VM が実行中です。"
 ],
 "The VM is suspended by guest power management.": [
  null,
  "VM はゲストの電源管理によって一時停止されています。"
 ],
 "This virtual machine is not managed by oVirt": [
  null,
  "この仮想マシンは、oVirt で管理されていません"
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  "ディスクの統計情報を表示するには、libvirt を新しいバージョンにアップグレードしてください"
 ],
 "Usage": [
  null,
  "使用法"
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
  "VM アイコン"
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
 "Volume": [
  null,
  "音量"
 ],
 "Your browser does not support iframes.": [
  null,
  "ブラウザーが、iframe をサポートしません。"
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
 "host": [
  null,
  "ホスト"
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
 "reboot": [
  null,
  "再起動"
 ],
 "running": [
  null,
  "実行中"
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
 "unassigned": [
  null,
  "未割り当て"
 ],
 "up": [
  null,
  "上へ"
 ],
 "vCPUs": [
  null,
  "vCPU"
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
