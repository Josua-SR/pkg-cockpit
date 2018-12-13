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
 "$0 is not available from any repository.": [
  null,
  "$0 は、あらゆるリポジトリーから利用できません。"
 ],
 "$0 will be installed.": [
  null,
  "$0 がインストールされます。"
 ],
 "1 Minute": [
  null,
  "1 分"
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
 "10th": [
  null,
  "10 日"
 ],
 "11th": [
  null,
  "11 日"
 ],
 "12th": [
  null,
  "12 日"
 ],
 "13th": [
  null,
  "13 日"
 ],
 "14th": [
  null,
  "14 日"
 ],
 "15th": [
  null,
  "15 日"
 ],
 "16th": [
  null,
  "16 日"
 ],
 "17th": [
  null,
  "17 日"
 ],
 "18th": [
  null,
  "18 日"
 ],
 "19th": [
  null,
  "19 日"
 ],
 "1st": [
  null,
  "1 日"
 ],
 "20 Minutes": [
  null,
  "20 分"
 ],
 "20th": [
  null,
  "20 日"
 ],
 "21st": [
  null,
  "21 日"
 ],
 "22nd": [
  null,
  "22 日"
 ],
 "23rd": [
  null,
  "23 日"
 ],
 "24th": [
  null,
  "24 日"
 ],
 "25th": [
  null,
  "25 日"
 ],
 "26th": [
  null,
  "26 日"
 ],
 "27th": [
  null,
  "27 日"
 ],
 "28th": [
  null,
  "28 日"
 ],
 "29th": [
  null,
  "29 日"
 ],
 "2nd": [
  null,
  "2 日"
 ],
 "30th": [
  null,
  "30 日"
 ],
 "31st": [
  null,
  "31 日"
 ],
 "3rd": [
  null,
  "3 日"
 ],
 "40 Minutes": [
  null,
  "40 分"
 ],
 "4th": [
  null,
  "4 日"
 ],
 "5 Minutes": [
  null,
  "5 分"
 ],
 "5 minutes": [
  null,
  "5 分"
 ],
 "5th": [
  null,
  "5 日"
 ],
 "6 hours": [
  null,
  "6 時間"
 ],
 "60 Minutes": [
  null,
  "60 分"
 ],
 "6th": [
  null,
  "6 日"
 ],
 "7th": [
  null,
  "7 日"
 ],
 "8th": [
  null,
  "8 日"
 ],
 "9th": [
  null,
  "9 日"
 ],
 "Additional packages:": [
  null,
  "追加のパッケージ:"
 ],
 "After": [
  null,
  "後"
 ],
 "After system boot": [
  null,
  "システムブート後"
 ],
 "Alert and above": [
  null,
  "アラート以上のレベル"
 ],
 "Asset Tag": [
  null,
  "アセットタグ"
 ],
 "At specific time": [
  null,
  "特定の時間"
 ],
 "Automatically using NTP": [
  null,
  "NTP を自動的に使用"
 ],
 "Automatically using specific NTP servers": [
  null,
  "特定の NTP サーバーを自動的に使用"
 ],
 "BIOS": [
  null,
  "BIOS"
 ],
 "BIOS date": [
  null,
  "BIOS の日付"
 ],
 "BIOS version": [
  null,
  "BIOS のバージョン"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Cached": [
  null,
  "キャッシュ済み"
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Change": [
  null,
  "変更"
 ],
 "Change Host Name": [
  null,
  "ホスト名の変更"
 ],
 "Change System Time": [
  null,
  "システム時間の変更"
 ],
 "Checking installed software": [
  null,
  "インストールされたソフトウェアの確認"
 ],
 "Class": [
  null,
  "クラス"
 ],
 "Close": [
  null,
  "閉じる"
 ],
 "Command": [
  null,
  "コマンド"
 ],
 "Condition failed": [
  null,
  "条件が満たされませんでした。"
 ],
 "Create Timer": [
  null,
  "タイマーの作成"
 ],
 "Create Timers": [
  null,
  "タイマーの作成"
 ],
 "Critical and above": [
  null,
  "重大以上のレベル"
 ],
 "Current boot": [
  null,
  "現在の起動"
 ],
 "Debug and above": [
  null,
  "デバッグ以上のレベル"
 ],
 "Delay": [
  null,
  "遅延"
 ],
 "Description": [
  null,
  "説明"
 ],
 "Disk I/O": [
  null,
  "ディスク I/O"
 ],
 "Domain": [
  null,
  "Domain"
 ],
 "Don't Repeat": [
  null,
  "繰り返さないでください"
 ],
 "Downloading $0": [
  null,
  "$0 をダウンロード中"
 ],
 "Enable stored metrics…": [
  null,
  "保存済みメトリクスを有効にします…"
 ],
 "Entry": [
  null,
  "エントリー"
 ],
 "Error": [
  null,
  "エラー"
 ],
 "Error and above": [
  null,
  "エラー以上のレベル"
 ],
 "Everything": [
  null,
  "すべて"
 ],
 "Friday": [
  null,
  "金曜日"
 ],
 "General": [
  null,
  "全般"
 ],
 "Go to": [
  null,
  "移動"
 ],
 "Go to now": [
  null,
  "今すぐ移動"
 ],
 "Hardware": [
  null,
  "ハードウェア"
 ],
 "Hardware Information": [
  null,
  "ハードウェア情報"
 ],
 "Host Name": [
  null,
  "ホスト名"
 ],
 "Hour : Minute": [
  null,
  "時間: 分"
 ],
 "Hours": [
  null,
  "時"
 ],
 "I/O Wait": [
  null,
  "I/O 待機"
 ],
 "Info and above": [
  null,
  "情報以上のレベル"
 ],
 "Install": [
  null,
  "インストール"
 ],
 "Install Software": [
  null,
  "ソフトウェアをインストール"
 ],
 "Installing $0": [
  null,
  "$0 をインストール中"
 ],
 "Instantiate": [
  null,
  "インスタンス化"
 ],
 "Invalid time zone": [
  null,
  "無効なタイムゾーン"
 ],
 "Journal": [
  null,
  "ジャーナル"
 ],
 "Journal entry": [
  null,
  "ジャーナルエントリー"
 ],
 "Journal entry not found": [
  null,
  "ジャーナルエントリーが見つかりません"
 ],
 "Kernel": [
  null,
  "カーネル"
 ],
 "Last 24 hours": [
  null,
  "過去 24 時間"
 ],
 "Last 7 days": [
  null,
  "過去 7 日間"
 ],
 "Load earlier entries": [
  null,
  "以前のエントリーのロード"
 ],
 "Loading...": [
  null,
  "読み込み中..."
 ],
 "Log messages": [
  null,
  "ログメッセージ"
 ],
 "Logs": [
  null,
  "ログ"
 ],
 "Machine ID": [
  null,
  "マシン ID"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "マシンSSH 鍵フィンガープリント"
 ],
 "Manually": [
  null,
  "手動"
 ],
 "Memory": [
  null,
  "メモリ"
 ],
 "Memory & Swap": [
  null,
  "メモリー & スワップ"
 ],
 "Minutes": [
  null,
  "分"
 ],
 "Model": [
  null,
  "モデル"
 ],
 "Monday": [
  null,
  "月曜日"
 ],
 "Name": [
  null,
  "名前"
 ],
 "Network Traffic": [
  null,
  "ネットワークトラフィック"
 ],
 "Nice": [
  null,
  "Nice値"
 ],
 "No Delay": [
  null,
  "遅延なし"
 ],
 "No host keys found.": [
  null,
  "ホストキーが見つかりません。"
 ],
 "Not authorized to upload-report": [
  null,
  "upload-report の権限がありません"
 ],
 "Not synchronized": [
  null,
  "同期されていません"
 ],
 "Note": [
  null,
  "注記"
 ],
 "Notice and above": [
  null,
  "注意以上のレベル"
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
 "Only Emergency": [
  null,
  "緊急時限定"
 ],
 "Operating System": [
  null,
  "オペレーティングシステム"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "Paths": [
  null,
  "パス"
 ],
 "Performance Profile": [
  null,
  "パフォーマンスプロファイル"
 ],
 "Power Options": [
  null,
  "電源オプション"
 ],
 "Pretty Host Name": [
  null,
  "プリティホスト名"
 ],
 "Problem details": [
  null,
  "問題の詳細"
 ],
 "Problem info": [
  null,
  "問題の情報"
 ],
 "Real Host Name": [
  null,
  "実際のホスト名"
 ],
 "Reboot": [
  null,
  "再起動"
 ],
 "Recent": [
  null,
  "最近開いたファイル"
 ],
 "Removals:": [
  null,
  "削除:"
 ],
 "Removing $0": [
  null,
  "$0 を削除中"
 ],
 "Repeat Daily": [
  null,
  "毎日繰り返す"
 ],
 "Repeat Hourly": [
  null,
  "毎時繰り返す"
 ],
 "Repeat Monthly": [
  null,
  "毎月繰り返す"
 ],
 "Repeat Weekly": [
  null,
  "毎週繰り返す"
 ],
 "Repeat Yearly": [
  null,
  "毎年繰り返す"
 ],
 "Report": [
  null,
  "レポート"
 ],
 "Reported": [
  null,
  "報告済み"
 ],
 "Reporter 'reporter-ureport' not found.": [
  null,
  "レポーターの 'reporter-ureport' が見つかりませんでした。"
 ],
 "Reporting was unsucessful. Try running `reporter-ureport -d ": [
  null,
  "レポートは成功しませんでした。次を試してください: `reporter-ureport -d"
 ],
 "Reset": [
  null,
  "リセット"
 ],
 "Restart": [
  null,
  "再起動"
 ],
 "Run": [
  null,
  "実行"
 ],
 "Saturday": [
  null,
  "土曜日"
 ],
 "Save": [
  null,
  "保存"
 ],
 "Seconds": [
  null,
  "秒"
 ],
 "Secure Shell Keys": [
  null,
  "セキュアシェルキー"
 ],
 "Service Logs": [
  null,
  "サービスログ"
 ],
 "Service name": [
  null,
  "サービス名"
 ],
 "Services": [
  null,
  "サービス"
 ],
 "Set Time": [
  null,
  "時間の設定"
 ],
 "Severity": [
  null,
  "重大度"
 ],
 "Show fingerprints": [
  null,
  "フィンガープリントの表示"
 ],
 "Shut Down": [
  null,
  "シャットダウン"
 ],
 "Slot": [
  null,
  "スロット"
 ],
 "Sockets": [
  null,
  "ソケット"
 ],
 "Specific Time": [
  null,
  "特定の時間"
 ],
 "Store metrics": [
  null,
  "メトリクスの保存"
 ],
 "Sunday": [
  null,
  "日曜日"
 ],
 "Swap Used": [
  null,
  "使用済みスワップ"
 ],
 "Synchronized": [
  null,
  "同期済み"
 ],
 "Synchronized with {{Server}}": [
  null,
  "{{Server}} と同期済み"
 ],
 "System": [
  null,
  "システム"
 ],
 "System Information": [
  null,
  "システム情報"
 ],
 "System Services": [
  null,
  "システムサービス"
 ],
 "System Time": [
  null,
  "システム時間"
 ],
 "Targets": [
  null,
  "ターゲット"
 ],
 "Terminal": [
  null,
  "端末"
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  "このユニットは明示的に有効にするよう設計されていません。"
 ],
 "Thursday": [
  null,
  "木曜日"
 ],
 "Time Zone": [
  null,
  "タイムゾーン"
 ],
 "Timers": [
  null,
  "タイマー"
 ],
 "Total size: $0": [
  null,
  "合計サイズ: $0"
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  "{{Server}} との同期を試行中です"
 ],
 "Tuesday": [
  null,
  "火曜日"
 ],
 "Type": [
  null,
  "タイプ"
 ],
 "Used": [
  null,
  "Used"
 ],
 "User": [
  null,
  "ユーザー"
 ],
 "Vendor": [
  null,
  "ベンダー"
 ],
 "Version": [
  null,
  "バージョン"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "他のソフトウェア管理オペレーションが終了するまで待機中"
 ],
 "Warning and above": [
  null,
  "警告以上のレベル"
 ],
 "Wednesday": [
  null,
  "水曜日"
 ],
 "Weeks": [
  null,
  "週"
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
 ]
}));
