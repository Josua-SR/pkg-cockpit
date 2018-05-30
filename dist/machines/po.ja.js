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
  "x-generator": "Zanata 4.4.5"
 },
 "$0 is available for most operating systems. To install it, search for it in GNOME Software or run the following:": [
  null,
  "$0 は、多数のオペレーティングシステムで利用できます。インストールするには、GNOME ソフトウェアで検索するか、以下を実行します:"
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
 "Automatically start libvirt on boot": [
  null,
  ""
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
 "CHANGE NETWORK STATE action failed": [
  null,
  "CHANGE NETWORK STATE アクションに失敗しました"
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
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  "\"リモートビューアーの起動\" をクリックすると、.vv ファイルをダウンロードし、$0 を起動します。"
 ],
 "Confirm deletion of $0": [
  null,
  "$0 の削除を確定"
 ],
 "Connect with any $0 viewer application.": [
  null,
  "$0 ビューアーアプリケーションに接続します。"
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  "SPICE または VNC のビューアーアプリケーションに接続します。"
 ],
 "Connecting to Virtualization Service": [
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
 "Count:": [
  null,
  "数量:"
 ],
 "Create": [
  null,
  "作成"
 ],
 "Create New VM": [
  null,
  "仮想マシンの新規作成"
 ],
 "Create New Virtual Machine": [
  null,
  "仮想マシンの新規作成"
 ],
 "Creation of vm $0 failed": [
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
 "Device": [
  null,
  "デバイス"
 ],
 "Disconnect": [
  null,
  "切断"
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  "シリアルコンソールから切断されました。「再接続」ボタンをクリックします。"
 ],
 "Disks": [
  null,
  "ディスク"
 ],
 "Download the MSI from $0": [
  null,
  "MSI を $0 からダウンロードします"
 ],
 "Emulated Machine:": [
  null,
  "エミュレートされたマシン:"
 ],
 "File": [
  null,
  "File"
 ],
 "Filesystem": [
  null,
  "ファイルシステム"
 ],
 "Force Restart": [
  null,
  "再起動の強制"
 ],
 "Force Shut Down": [
  null,
  "シャットダウンの強制"
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
 "INSTALL VM action failed": [
  null,
  "INSTALL VM アクションに失敗しました"
 ],
 "Immediately Start VM": [
  null,
  "VM をすぐに起動"
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
 "MTU": [
  null,
  "MTU"
 ],
 "Managed": [
  null,
  "管理"
 ],
 "Manual Connection": [
  null,
  "手動接続"
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
 "Networks": [
  null,
  "ネットワーク"
 ],
 "No VM is running or defined on this host": [
  null,
  "VM がこのホストで実行されていないか、定義されていません。"
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
  "この VM に対してディスクが定義されていません"
 ],
 "No matching files found": [
  null,
  "一致するファイルが見つかりませんでした。"
 ],
 "No network interfaces defined for this VM": [
  null,
  "この仮想マシンにはネットワークインターフェースが定義されていません"
 ],
 "OS Vendor": [
  null,
  "OS ベンダー"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Operating System": [
  null,
  "オペレーティングシステム"
 ],
 "Overview": [
  null,
  "概要"
 ],
 "Path to ISO file on host's file system": [
  null,
  "ホストファイルシステムの ISO ファイルのパス"
 ],
 "Path to file": [
  null,
  "ファイルのパス"
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
 "Portgroup": [
  null,
  "ポートグループ"
 ],
 "Protocol": [
  null,
  "プロトコル"
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
 "Send Non-Maskable Interrupt": [
  null,
  "マスク不可割り込みを送信します"
 ],
 "Send shortcut": [
  null,
  "ショートカットの送信"
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
 "Source": [
  null,
  "ソース"
 ],
 "Source should start with http, ftp or nfs protocol": [
  null,
  "ソースは、http、ftp、または nfs プロトコルで開始する必要があります"
 ],
 "Start libvirt": [
  null,
  ""
 ],
 "Start the VM to see disk statistics.": [
  null,
  "仮想マシンを起動して、ディスク統計を確認します"
 ],
 "State": [
  null,
  "状態"
 ],
 "Storage Size": [
  null,
  "ストレージのサイズ"
 ],
 "Storage Size should not be negative number": [
  null,
  "ストレージのサイズは負の値にすることができません"
 ],
 "System": [
  null,
  "システム"
 ],
 "Target": [
  null,
  "ターゲット"
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
 "Used": [
  null,
  "Used"
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
  ""
 ],
 "Virtualization Service is Available": [
  null,
  ""
 ],
 "Virtualport": [
  null,
  "Virtualport"
 ],
 "Volume": [
  null,
  "音量"
 ],
 "Your browser does not support iframes.": [
  null,
  "ブラウザーが、iframe をサポートしません。"
 ],
 "bridge": [
  null,
  "ブリッジ"
 ],
 "cdrom": [
  null,
  "cdrom"
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
 "hostdev": [
  null,
  "hostdev"
 ],
 "idle": [
  null,
  "アイドル"
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
 "other": [
  null,
  "その他"
 ],
 "paused": [
  null,
  "一時停止"
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
