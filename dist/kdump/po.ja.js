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
 "Apply": [
  null,
  "適用"
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Compress crash dumps to save space": [
  null,
  "クラッシュダンプを圧縮し容量を節約する"
 ],
 "Compression": [
  null,
  "圧縮"
 ],
 "Crash dump location": [
  null,
  "クラッシュダンプの場所"
 ],
 "Crash system": [
  null,
  "クラッシュシステム"
 ],
 "Directory": [
  null,
  "フォルダー"
 ],
 "Directory $0 isn't writable or doesn't exist.": [
  null,
  "ディレクトリー $0 は書込み可能でないか、存在しません。"
 ],
 "Kdump service not installed. Please ensure package kexec-tools is installed.": [
  null,
  "Kdump サービスがインストールされていません。パッケージ kexec-tools がインストールされていることを確認してください。"
 ],
 "Kernel Dump": [
  null,
  "カーネル"
 ],
 "Loading...": [
  null,
  "読み込み中..."
 ],
 "Local Filesystem": [
  null,
  "ローカルファイルシステム"
 ],
 "Location": [
  null,
  "場所"
 ],
 "More details": [
  null,
  "詳細"
 ],
 "Mount": [
  null,
  "マウント"
 ],
 "No configuration found": [
  null,
  "設定が見つかりません"
 ],
 "No memory reserved. Append a crashkernel option to the kernel command line (e.g. in /etc/default/grub) to reserve memory at boot time. Example: crashkernel=512M": [
  null,
  "メモリーが予約されていません。crashkernel オプションをカーネルコマンドラインに追加して (例: /etc/default/grub)、起動時にメモリーを予約します。例: crashkernel=512M"
 ],
 "None": [
  null,
  "なし"
 ],
 "Off": [
  null,
  "オフ"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On": [
  null,
  "オン"
 ],
 "On a mounted device": [
  null,
  "マウントされたデバイス上"
 ],
 "Raw to a device": [
  null,
  "デバイスに対する Raw"
 ],
 "Reading...": [
  null,
  "読み取り中 ..."
 ],
 "Remote over NFS": [
  null,
  "NFS 経由のリモート"
 ],
 "Remote over SSH": [
  null,
  "SSH 経由のリモート"
 ],
 "Reserved memory": [
  null,
  "予約済みメモリー"
 ],
 "Server": [
  null,
  "サーバー"
 ],
 "Service has an error": [
  null,
  "サービスでエラーが発生しました"
 ],
 "Service is running": [
  null,
  "サービスが実行中です"
 ],
 "Service is starting": [
  null,
  "サービスが起動中です"
 ],
 "Service is stopped": [
  null,
  "サービスが停止されています"
 ],
 "Service is stopping": [
  null,
  "サービスが停止中です"
 ],
 "Test Configuration": [
  null,
  "設定のテスト"
 ],
 "Test is only available while the kdump service is running.": [
  null,
  "テストは kdump サービスが実行中の間だけ利用可能です。"
 ],
 "Test kdump settings": [
  null,
  "kdump 設定のテスト"
 ],
 "This will test kdump settings by crashing the kernel and thereby the system. Depending on the settings, the system may not automatically reboot and the process may take a while.": [
  null,
  "このため、kdump 設定は、カーネル (つまり、システム) をクラッシュすることによりテストされます。設定に応じて、再起動が自動的に行われず、処理にしばらく時間がかかることがあります。"
 ],
 "This will test the kdump configuration by crashing the kernel.": [
  null,
  "このため、kdump 設定はカーネルをクラッシュすることによりテストされます。"
 ],
 "Unable to apply settings: $0": [
  null,
  "設定を適用できません: $0"
 ],
 "Use the setting in /etc/kdump.conf": [
  null,
  "/etc/kdump.conf の設定を使用します"
 ],
 "invalid: multiple targets defined": [
  null,
  "無効: 複数のターゲットが定義されています"
 ],
 "kdump status": [
  null,
  "kdump ステータス"
 ],
 "locally in $0": [
  null,
  "$0 (ローカル)"
 ],
 "ssh key": [
  null,
  "ssh 鍵"
 ],
 "undefined": [
  null,
  "未定義"
 ]
}));
