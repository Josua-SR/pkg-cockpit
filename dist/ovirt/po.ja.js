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
 "Automatically selected host": [
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
 "Base Template": [
  null,
  ""
 ],
 "Base template": [
  null,
  ""
 ],
 "Base template:": [
  null,
  ""
 ],
 "Boot Order:": [
  null,
  ""
 ],
 "Bus": [
  null,
  "バス"
 ],
 "CHANGE NETWORK STATE action failed": [
  null,
  ""
 ],
 "CPU Type:": [
  null,
  "種類:"
 ],
 "CREATE VM action failed": [
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
 "Clicking \"Launch Remote Viewer\" will download a .vv file and launch $0.": [
  null,
  ""
 ],
 "Cluster": [
  null,
  "クラスター"
 ],
 "Cluster Templates": [
  null,
  ""
 ],
 "Cluster Virtual Machines": [
  null,
  ""
 ],
 "Confirm deletion of $0": [
  null,
  "$0 の削除を確定してください"
 ],
 "Confirm migration": [
  null,
  ""
 ],
 "Confirm reload:": [
  null,
  ""
 ],
 "Confirm save:": [
  null,
  ""
 ],
 "Connect to oVirt Engine": [
  null,
  ""
 ],
 "Connect with any $0 viewer application.": [
  null,
  ""
 ],
 "Connect with any SPICE or VNC viewer application.": [
  null,
  ""
 ],
 "Connection": [
  null,
  "接続"
 ],
 "Console Type": [
  null,
  ""
 ],
 "Consoles": [
  null,
  ""
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
  ""
 ],
 "Create New Virtual Machine": [
  null,
  ""
 ],
 "Create VM": [
  null,
  ""
 ],
 "Delete": [
  null,
  "削除"
 ],
 "Delete associated storage files:": [
  null,
  ""
 ],
 "Description": [
  null,
  "説明"
 ],
 "Description:": [
  null,
  ""
 ],
 "Device": [
  null,
  "デバイス"
 ],
 "Disconnect": [
  null,
  ""
 ],
 "Disconnected from serial console. Click the Reconnect button.": [
  null,
  ""
 ],
 "Disks": [
  null,
  "ディスク"
 ],
 "Download the MSI from $0": [
  null,
  ""
 ],
 "Edit the vdsm.conf": [
  null,
  ""
 ],
 "Emulated Machine:": [
  null,
  "仮想マシン"
 ],
 "Enter New VM name": [
  null,
  ""
 ],
 "FQDN": [
  null,
  ""
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
  ""
 ],
 "Graphics Console (VNC)": [
  null,
  ""
 ],
 "Graphics Console in Desktop Viewer": [
  null,
  ""
 ],
 "HA": [
  null,
  ""
 ],
 "HA:": [
  null,
  ""
 ],
 "Host": [
  null,
  "ホスト"
 ],
 "Host to Maintenance": [
  null,
  ""
 ],
 "INSTALL VM action failed": [
  null,
  ""
 ],
 "Immediately Start VM": [
  null,
  ""
 ],
 "Install": [
  null,
  ""
 ],
 "Installation Source": [
  null,
  ""
 ],
 "Installation Source Type": [
  null,
  ""
 ],
 "Installation Source should not be empty": [
  null,
  ""
 ],
 "Invalid filename": [
  null,
  ""
 ],
 "Launch Remote Viewer": [
  null,
  ""
 ],
 "Loading ...": [
  null,
  ""
 ],
 "Loading data ...": [
  null,
  ""
 ],
 "MAC Address": [
  null,
  ""
 ],
 "MIGRATE action failed": [
  null,
  ""
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "Managed": [
  null,
  ""
 ],
 "Manual Connection": [
  null,
  "接続"
 ],
 "Memory": [
  null,
  "メモリ"
 ],
 "Memory should be positive number": [
  null,
  ""
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
  ""
 ],
 "Model type": [
  null,
  ""
 ],
 "More Information": [
  null,
  "設定"
 ],
 "Name": [
  null,
  "名前"
 ],
 "Name should not be empty": [
  null,
  ""
 ],
 "Name should not consist of empty characters only": [
  null,
  ""
 ],
 "Networks": [
  null,
  ""
 ],
 "No VM found in oVirt.": [
  null,
  ""
 ],
 "No VM is running or defined on this host": [
  null,
  "VM がこのホストで実行されていないか、定義されていません。"
 ],
 "No boot device found": [
  null,
  "ホストキーが見つかりません。"
 ],
 "No console defined for this virtual machine.": [
  null,
  ""
 ],
 "No disks defined for this VM": [
  null,
  "この VM に対してディスクが定義されていません"
 ],
 "No matching files found": [
  null,
  "ホストキーが見つかりません。"
 ],
 "No network interfaces defined for this VM": [
  null,
  ""
 ],
 "OK": [
  null,
  ""
 ],
 "OS": [
  null,
  "OS"
 ],
 "OS Type:": [
  null,
  ""
 ],
 "OS Vendor": [
  null,
  ""
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Operating System": [
  null,
  "オペレーティングシステム"
 ],
 "Optimized for:": [
  null,
  ""
 ],
 "Overview": [
  null,
  "概要"
 ],
 "Path to ISO file on host's file system": [
  null,
  ""
 ],
 "Path to file": [
  null,
  ""
 ],
 "Please confirm, the host shall be switched to maintenance mode.": [
  null,
  ""
 ],
 "Please provide fully qualified domain name and port of the oVirt engine.": [
  null,
  ""
 ],
 "Please provide valid oVirt engine fully qualified domain name (FQDN) and port (443 by default)": [
  null,
  ""
 ],
 "Please refer to oVirt's $0 for more information about Remote Viewer setup.": [
  null,
  ""
 ],
 "Please start the virtual machine to access its console.": [
  null,
  ""
 ],
 "Please wait till VMs list is loaded from the server.": [
  null,
  ""
 ],
 "Please wait till list of templates is loaded from the server.": [
  null,
  ""
 ],
 "Plug": [
  null,
  ""
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
  ""
 ],
 "Preparing for Maintenance": [
  null,
  ""
 ],
 "Protocol": [
  null,
  "プロトコル"
 ],
 "REBOOT action failed": [
  null,
  ""
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
  ""
 ],
 "Registering oVirt to Cockpit": [
  null,
  ""
 ],
 "Reload": [
  null,
  "再読み込み"
 ],
 "Remote URL": [
  null,
  ""
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
  ""
 ],
 "Running Since:": [
  null,
  ""
 ],
 "SHUTDOWN action failed": [
  null,
  ""
 ],
 "SPICE": [
  null,
  ""
 ],
 "SPICE Address:": [
  null,
  "IP アドレス:"
 ],
 "SPICE Port:": [
  null,
  ""
 ],
 "SPICE TLS Port:": [
  null,
  ""
 ],
 "START action failed": [
  null,
  ""
 ],
 "SUSPEND action failed": [
  null,
  ""
 ],
 "Save": [
  null,
  "保存"
 ],
 "Send Non-Maskable Interrupt": [
  null,
  ""
 ],
 "Send shortcut": [
  null,
  ""
 ],
 "Serial Console": [
  null,
  ""
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
  ""
 ],
 "Start the VM to see disk statistics.": [
  null,
  ""
 ],
 "State": [
  null,
  "状態"
 ],
 "Stateless": [
  null,
  ""
 ],
 "Stateless:": [
  null,
  ""
 ],
 "Storage Size": [
  null,
  ""
 ],
 "Storage Size should not be negative number": [
  null,
  ""
 ],
 "Suspend": [
  null,
  ""
 ],
 "Switch Host to Maintenance": [
  null,
  ""
 ],
 "Switching host to maintenance mode failed. Received error: ": [
  null,
  ""
 ],
 "Switching host to maintenance mode in progress ...": [
  null,
  ""
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
  ""
 ],
 "Templates of $0 cluster": [
  null,
  ""
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
  ""
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
  ""
 ],
 "Too many files found": [
  null,
  ""
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
  ""
 ],
 "Upgrade to a more recent version of libvirt to view disk statistics": [
  null,
  "ディスクの統計情報を表示するには libvirt の新しいバージョンにアップグレードしてください"
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
  ""
 ],
 "VDSM Service Management": [
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
  ""
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
  ""
 ],
 "VNC": [
  null,
  ""
 ],
 "VNC Address:": [
  null,
  "MAC アドレス:"
 ],
 "VNC Port:": [
  null,
  "ポート:"
 ],
 "VNC TLS Port:": [
  null,
  ""
 ],
 "Version": [
  null,
  "バージョン"
 ],
 "Version num": [
  null,
  ""
 ],
 "Virtual Machines": [
  null,
  "仮想マシン"
 ],
 "Virtual Machines of $0 cluster": [
  null,
  ""
 ],
 "Virtualport": [
  null,
  ""
 ],
 "Volume": [
  null,
  "音量"
 ],
 "Your browser does not support iframes.": [
  null,
  ""
 ],
 "bridge": [
  null,
  ""
 ],
 "cdrom": [
  null,
  ""
 ],
 "connecting": [
  null,
  ""
 ],
 "cores": [
  null,
  ""
 ],
 "crashed": [
  null,
  "クラッシュ"
 ],
 "custom": [
  null,
  "Custom"
 ],
 "direct": [
  null,
  ""
 ],
 "disabled": [
  null,
  "無効"
 ],
 "disk": [
  null,
  ""
 ],
 "down": [
  null,
  ""
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
  ""
 ],
 "ethernet": [
  null,
  ""
 ],
 "host": [
  null,
  ""
 ],
 "hostdev": [
  null,
  ""
 ],
 "idle": [
  null,
  "アイドル"
 ],
 "initializing": [
  null,
  ""
 ],
 "installation failed": [
  null,
  ""
 ],
 "installing OS": [
  null,
  ""
 ],
 "kdumping": [
  null,
  ""
 ],
 "maintenance": [
  null,
  ""
 ],
 "mcast": [
  null,
  ""
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
  ""
 ],
 "non responsive": [
  null,
  ""
 ],
 "oVirt": [
  null,
  ""
 ],
 "oVirt Host State:": [
  null,
  ""
 ],
 "oVirt Provider installation script failed due to missing arguments.": [
  null,
  ""
 ],
 "oVirt Provider installation script failed: Can't write to /etc/cockpit/machines-ovirt.config, try as root.": [
  null,
  ""
 ],
 "oVirt installation script failed with following output: ": [
  null,
  ""
 ],
 "oVirt login in progress": [
  null,
  ""
 ],
 "other": [
  null,
  ""
 ],
 "paused": [
  null,
  "一時停止"
 ],
 "pending approval": [
  null,
  ""
 ],
 "reboot": [
  null,
  ""
 ],
 "running": [
  null,
  "実行中"
 ],
 "server": [
  null,
  ""
 ],
 "show less": [
  null,
  ""
 ],
 "show more": [
  null,
  ""
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
  ""
 ],
 "suspended (PM)": [
  null,
  "一時停止中 (PM)"
 ],
 "threads": [
  null,
  ""
 ],
 "udp": [
  null,
  ""
 ],
 "unassigned": [
  null,
  ""
 ],
 "undefined": [
  null,
  "未定義"
 ],
 "up": [
  null,
  ""
 ],
 "user": [
  null,
  ""
 ],
 "vCPUs": [
  null,
  ""
 ],
 "vCPUs:": [
  null,
  "vCPU:"
 ],
 "vhostuser": [
  null,
  ""
 ],
 "yes": [
  null,
  "はい"
 ]
}));
