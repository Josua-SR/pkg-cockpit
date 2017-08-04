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
  ""
 ],
 "Address:": [
  null,
  "アドレス:"
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
  ""
 ],
 "Bus": [
  null,
  "バス"
 ],
 "CPU Type:": [
  null,
  "種類:"
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
 "Confirm deletion of $0": [
  null,
  "$0 の削除を確定してください"
 ],
 "Connect with Remote Viewer": [
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
 "Console": [
  null,
  ""
 ],
 "Count:": [
  null,
  "数量:"
 ],
 "Delete": [
  null,
  "削除"
 ],
 "Delete associated storage files:": [
  null,
  ""
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
  ""
 ],
 "Emulated Machine:": [
  null,
  "仮想マシン"
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
 "Host": [
  null,
  "ホスト"
 ],
 "Launch Remote Viewer": [
  null,
  ""
 ],
 "Manual Connection": [
  null,
  "接続"
 ],
 "Memory:": [
  null,
  "メモリー:"
 ],
 "More Information": [
  null,
  "設定"
 ],
 "Name": [
  null,
  "名前"
 ],
 "No VM is running or defined on this host": [
  null,
  "VM がこのホストで実行されていないか、定義されていません。"
 ],
 "No boot device found": [
  null,
  "ホストキーが見つかりません。"
 ],
 "No disks defined for this VM": [
  null,
  "この VM に対してディスクが定義されていません"
 ],
 "No graphics console is defined for this virtual machine.": [
  null,
  ""
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Overview": [
  null,
  "概要"
 ],
 "Please start the virtual machine to access its graphics console.": [
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
 "Protocol": [
  null,
  "プロトコル"
 ],
 "Readonly": [
  null,
  "読み取り専用"
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
 "Switch to Desktop Viewer": [
  null,
  ""
 ],
 "Switch to In-Browser Viewer": [
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
  ""
 ],
 "cdrom": [
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
 "disabled": [
  null,
  "無効"
 ],
 "disk": [
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
 "host": [
  null,
  ""
 ],
 "idle": [
  null,
  "アイドル"
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
  ""
 ],
 "paused": [
  null,
  "一時停止"
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
 "suspended (PM)": [
  null,
  "一時停止中 (PM)"
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
