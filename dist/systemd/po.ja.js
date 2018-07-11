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
 "$0 Template": [
  null,
  "$0 テンプレート"
 ],
 "$0 day": [
  "$0 days",
  "$0 日"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 時間"
 ],
 "$0 is not available from any repository.": [
  null,
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 分"
 ],
 "$0 month": [
  "$0 months",
  "$0 ヶ月"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 週"
 ],
 "$0 will be installed.": [
  null,
  ""
 ],
 "$0 year": [
  "$0 years",
  "$0 年"
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
 "1 min": [
  null,
  "1 分"
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
 "2 min": [
  null,
  "2 分"
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
 "3 min": [
  null,
  "3 分"
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
 "4 min": [
  null,
  "4 分"
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
 "5 min": [
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
  ""
 ],
 "Advanced TCA": [
  null,
  "高度な TCA"
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
  ""
 ],
 "All In One": [
  null,
  "一体型"
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
 "Before": [
  null,
  ""
 ],
 "Binds To": [
  null,
  ""
 ],
 "Blade": [
  null,
  "ブレード"
 ],
 "Blade enclosure": [
  null,
  "ブレードエンクロージャー"
 ],
 "Bound By": [
  null,
  ""
 ],
 "Bug Fix Updates Available": [
  null,
  ""
 ],
 "Bus Expansion Chassis": [
  null,
  "バス拡張シャーシ"
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
 "Cannot schedule event in the past": [
  null,
  "過去のイベントはスケジュールできません"
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
 "Checking for updates…": [
  null,
  ""
 ],
 "Checking installed software": [
  null,
  ""
 ],
 "Class": [
  null,
  "クラス"
 ],
 "Click to see system hardware information": [
  null,
  ""
 ],
 "Close": [
  null,
  "閉じる"
 ],
 "Command": [
  null,
  "コマンド"
 ],
 "Compact PCI": [
  null,
  "PCI の圧縮"
 ],
 "Condition $0=$1 was not met": [
  null,
  "条件 $0=$1 を満たしていませんでした。"
 ],
 "Condition failed": [
  null,
  "条件が満たされませんでした。"
 ],
 "Conflicted By": [
  null,
  ""
 ],
 "Conflicts": [
  null,
  ""
 ],
 "Consists Of": [
  null,
  ""
 ],
 "Convertible": [
  null,
  "変換可能"
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
  ""
 ],
 "Current boot": [
  null,
  "現在の起動"
 ],
 "Debug and above": [
  null,
  ""
 ],
 "Delay": [
  null,
  "遅延"
 ],
 "Description": [
  null,
  "説明"
 ],
 "Desktop": [
  null,
  "デスクトップ"
 ],
 "Detachable": [
  null,
  "割り当て解除可能"
 ],
 "Disable": [
  null,
  "無効化"
 ],
 "Disabled": [
  null,
  "無効"
 ],
 "Disk I/O": [
  null,
  "ディスク I/O"
 ],
 "Docking Station": [
  null,
  "ドッキングステーション"
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
  ""
 ],
 "Embedded PC": [
  null,
  "組み込み PC"
 ],
 "Enable": [
  null,
  "有効化"
 ],
 "Enable Forcefully": [
  null,
  "強制的に有効にする"
 ],
 "Enable persistent metrics…": [
  null,
  ""
 ],
 "Enabled": [
  null,
  "有効"
 ],
 "Enhancement Updates Available": [
  null,
  ""
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
  ""
 ],
 "Everything": [
  null,
  "すべて"
 ],
 "Expansion Chassis": [
  null,
  "拡張シャーシ"
 ],
 "Free": [
  null,
  "空き"
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
 "Hand Held": [
  null,
  "ハンドヘルド"
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
 "Hour needs to be a number between 0-23": [
  null,
  "時間は 0〜23 の数字である必要があります"
 ],
 "Hours": [
  null,
  "時"
 ],
 "I/O Wait": [
  null,
  "I/O 待機"
 ],
 "Id": [
  null,
  "ID"
 ],
 "Info and above": [
  null,
  ""
 ],
 "Install": [
  null,
  "インストール"
 ],
 "Install Software": [
  null,
  ""
 ],
 "Installing $0": [
  null,
  ""
 ],
 "Instantiate": [
  null,
  "インスタンス化"
 ],
 "Invalid date format": [
  null,
  "無効な日付形式"
 ],
 "Invalid date format and invalid time format": [
  null,
  "無効な日付形式と無効な時間形式"
 ],
 "Invalid date format.": [
  null,
  "無効な日付形式。"
 ],
 "Invalid number.": [
  null,
  "無効な数字。"
 ],
 "Invalid time format": [
  null,
  "無効な時間形式"
 ],
 "Invalid time zone": [
  null,
  "無効なタイムゾーン"
 ],
 "IoT Gateway": [
  null,
  "IoT ゲートウェイ"
 ],
 "Joins Namespace Of": [
  null,
  ""
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
 "Laptop": [
  null,
  "ラップトップ"
 ],
 "Last 24 hours": [
  null,
  "過去 24 時間"
 ],
 "Last 7 days": [
  null,
  "過去 7 日間"
 ],
 "Last Trigger": [
  null,
  "最後のトリガー"
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
 "Low Profile Desktop": [
  null,
  "低プロファイルデスクトップ"
 ],
 "Lunch Box": [
  null,
  "Lunch Box"
 ],
 "Machine ID": [
  null,
  "マシン ID"
 ],
 "Machine SSH Key Fingerprints": [
  null,
  "マシンSSH 鍵フィンガープリント"
 ],
 "Main Server Chassis": [
  null,
  "メインサーバーシャーシ"
 ],
 "Manually": [
  null,
  "手動"
 ],
 "Mask": [
  null,
  "マスク"
 ],
 "Mask Forcefully": [
  null,
  "強制的にマスク"
 ],
 "Memory": [
  null,
  "メモリ"
 ],
 "Message to logged in users": [
  null,
  "ログインしているユーザーへのメッセージ"
 ],
 "Mini PC": [
  null,
  "ミニ PC"
 ],
 "Mini Tower": [
  null,
  "ミニタワー"
 ],
 "Minute needs to be a number between 0-59": [
  null,
  "分は 0〜59 の数字である必要があります"
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
 "Multi-system Chassis": [
  null,
  "マルチシステムシャーシ"
 ],
 "NTP Server": [
  null,
  "NTP サーバー"
 ],
 "Name": [
  null,
  "名前"
 ],
 "Need at least one NTP server": [
  null,
  "少なくとも 1 つの NTP サーバーが必要です"
 ],
 "Network Traffic": [
  null,
  "ネットワークトラフィック"
 ],
 "Next Run": [
  null,
  "次回の実行日時"
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
 "Notebook": [
  null,
  "ノートブック"
 ],
 "Notice and above": [
  null,
  ""
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
 "On Failure": [
  null,
  "障害発生時"
 ],
 "Only Emergency": [
  null,
  ""
 ],
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  "アルファベット、数字、:、 _ 、.、@、- のみを使用できます。"
 ],
 "Operating System": [
  null,
  "オペレーティングシステム"
 ],
 "Other": [
  null,
  "その他"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit がクラッシュしました"
 ],
 "Part Of": [
  null,
  ""
 ],
 "Paths": [
  null,
  "パス"
 ],
 "Performance Profile": [
  null,
  "パフォーマンスプロファイル"
 ],
 "Peripheral Chassis": [
  null,
  "周辺機器シャーシ"
 ],
 "Pizza Box": [
  null,
  "Pizza Box"
 ],
 "Portable": [
  null,
  "ポータブル"
 ],
 "Power Options": [
  null,
  "電源オプション"
 ],
 "Preset": [
  null,
  "事前設定"
 ],
 "Preset Forcefully": [
  null,
  "強制的に事前設定"
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
 "Propagates Reload To": [
  null,
  ""
 ],
 "RAID Chassis": [
  null,
  "RAID シャーシ"
 ],
 "Rack Mount Chassis": [
  null,
  "ラックマウントシャーシ"
 ],
 "Real Host Name": [
  null,
  "実際のホスト名"
 ],
 "Real host name can only contain lower-case characters, digits, dashes, and periods (with populated subdomains)": [
  null,
  "実際のホスト名には小文字、数字、ダッシュ、およびピリオドのみを使用できます (入力されたサブドメインを含む)。"
 ],
 "Real host name must be 64 characters or less": [
  null,
  "実際のホスト名は 64 文字以下である必要があります"
 ],
 "Reboot": [
  null,
  "再起動"
 ],
 "Recent": [
  null,
  "最近開いたファイル"
 ],
 "Reload": [
  null,
  "再読み込み"
 ],
 "Reload Propagated From": [
  null,
  ""
 ],
 "Removals:": [
  null,
  ""
 ],
 "Removing $0": [
  null,
  ""
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
 "Required By": [
  null,
  ""
 ],
 "Requires": [
  null,
  ""
 ],
 "Requisite": [
  null,
  ""
 ],
 "Requisite Of": [
  null,
  ""
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
 "Sealed-case PC": [
  null,
  "シールドケース PC"
 ],
 "Seconds": [
  null,
  "秒"
 ],
 "Secure Shell Keys": [
  null,
  "セキュアシェルキー"
 ],
 "Security Updates Available": [
  null,
  ""
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
 "Set Host name": [
  null,
  "ホスト名の設定"
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
 "Since $0": [
  null,
  "$0 以降"
 ],
 "Slot": [
  null,
  "スロット"
 ],
 "Sockets": [
  null,
  "ソケット"
 ],
 "Space-saving Computer": [
  null,
  "省スペースコンピューター"
 ],
 "Specific Time": [
  null,
  "特定の時間"
 ],
 "Start": [
  null,
  "開始日"
 ],
 "State": [
  null,
  "状態"
 ],
 "Static": [
  null,
  "静的"
 ],
 "Stick PC": [
  null,
  "スティッキー PC"
 ],
 "Stop": [
  null,
  "停止"
 ],
 "Store Performance Data": [
  null,
  "パフォーマンスデータの保存"
 ],
 "Sub Chassis": [
  null,
  "サブシャーシ"
 ],
 "Sub Notebook": [
  null,
  "サブノートブック"
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
 "System Not Registered": [
  null,
  ""
 ],
 "System Services": [
  null,
  "システムサービス"
 ],
 "System Time": [
  null,
  "システム時間"
 ],
 "System Up To Date": [
  null,
  ""
 ],
 "Tablet": [
  null,
  "タブレット"
 ],
 "Targets": [
  null,
  "ターゲット"
 ],
 "Terminal": [
  null,
  "端末"
 ],
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  "ユーザー <b>$0</b> はタイマーを作成するパーミッションを持っていません"
 ],
 "The user <b>$0</b> is not permitted to change the system time": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to enable or disable services": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  "ユーザー <b>$0</b> はホスト名を変更することを許可されていません"
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  "ユーザー <b>$0</b> は、このサーバーをシャットダウンまたは再起動することを許可されていません"
 ],
 "The user <b>$0</b> is not permitted to start or stop services": [
  null,
  ""
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  "この日はすべての月で存在しません。<br> タイマーは 31 日がある月でのみ実行されます。"
 ],
 "This field cannot be empty.": [
  null,
  "このフィールドは空にできません。"
 ],
 "This unit is an instance of the $0 template.": [
  null,
  "このユニットは $0 テンプレートのインスタンスです。"
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
  ""
 ],
 "Tower": [
  null,
  "タワー"
 ],
 "Triggered By": [
  null,
  ""
 ],
 "Triggers": [
  null,
  "トリガー"
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
 "Unknown": [
  null,
  "不明"
 ],
 "Unmask": [
  null,
  "マスク解除"
 ],
 "Updates Available": [
  null,
  ""
 ],
 "Usage of $0 CPU core": [
  "Usage of $0 CPU cores",
  "$0 CPU コアの使用率"
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
  ""
 ],
 "Wanted By": [
  null,
  ""
 ],
 "Wants": [
  null,
  ""
 ],
 "Warning and above": [
  null,
  ""
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
 ],
 "failed to list ssh host keys: $0": [
  null,
  "ssh ホスト鍵の一覧表示に失敗しました: $0"
 ],
 "of $0 CPU core": [
  "of $0 CPU cores",
  "$0 CPU コアの"
 ],
 "unknown": [
  null,
  "不明"
 ],
 "page-title\u0004CPU Status": [
  null,
  "CPU ステータス"
 ],
 "page-title\u0004Memory": [
  null,
  "メモリー"
 ]
}));
