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
 "After": [
  null,
  "後"
 ],
 "After system boot": [
  null,
  "システムブート後"
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
 "Close": [
  null,
  "閉じる"
 ],
 "Command": [
  null,
  "コマンド"
 ],
 "Condition $0=$1 was not met": [
  null,
  "条件 $0=$1 を満たしていませんでした。"
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
 "Current boot": [
  null,
  "現在の起動"
 ],
 "Delay": [
  null,
  "遅延"
 ],
 "Description": [
  null,
  "説明"
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
 "Domain": [
  null,
  "Domain"
 ],
 "Don't Repeat": [
  null,
  "繰り返さないでください"
 ],
 "Enable": [
  null,
  "有効化"
 ],
 "Enable Forcefully": [
  null,
  "強制的に有効にする"
 ],
 "Enabled": [
  null,
  "有効"
 ],
 "Entry": [
  null,
  "エントリー"
 ],
 "Error": [
  null,
  "エラー"
 ],
 "Everything": [
  null,
  "すべて"
 ],
 "Free": [
  null,
  "空き"
 ],
 "Friday": [
  null,
  "金曜日"
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
  "時間は 0 - 23 の数字である必要があります"
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
 "Minute needs to be a number between 0-59": [
  null,
  "分は 0 - 59 の数字である必要があります"
 ],
 "Minutes": [
  null,
  "分"
 ],
 "Monday": [
  null,
  "月曜日"
 ],
 "NTP Server": [
  null,
  "NTP サーバー"
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
  "Nice 値"
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
 "Off": [
  null,
  "オフ"
 ],
 "On": [
  null,
  "オン"
 ],
 "Only Problems": [
  null,
  "問題のみ"
 ],
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  "アルファベット、数字、:、 _ 、.、@、- のみを使用できます。"
 ],
 "Operating System": [
  null,
  "オペレーティングシステム"
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
 "Problems, Errors": [
  null,
  "問題、エラー"
 ],
 "Problems, Errors, Warnings": [
  null,
  "問題、エラー、警告"
 ],
 "Problems, Errors, Warnings, Notices": [
  null,
  "問題、エラー、警告、注記"
 ],
 "Real Host Name": [
  null,
  "実際のホスト名"
 ],
 "Real host name can only contain lower-case characters, digits, dashes, and periods (with populated subdomains)": [
  null,
  "実際のホスト名には小文字、数字、ダッシュ、およびピリオドのみを含めることができます (入力されたサブドメインを含む)。"
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
 "Sockets": [
  null,
  "ソケット"
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
 "Stop": [
  null,
  "停止"
 ],
 "Store Performance Data": [
  null,
  "パフォーマンスデータの保存"
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
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  "ユーザー <b>$0</b> は、タイマーを作成するパーミッションを持っていません"
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  "ユーザー <b>$0</b> は、ホスト名を変更することを許可されていません"
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  "ユーザー <b>$0</b> は、このサーバーをシャットダウンまたは再起動することを許可されていません"
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  "この日は、すべての月に存在するわけではありません。<br>この タイマーは、31 日がある月でのみ実行されます。"
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
 "Trying to synchronize with {{Server}}": [
  null,
  "{{Server}} との同期を試行中です"
 ],
 "Tuesday": [
  null,
  "火曜日"
 ],
 "Unmask": [
  null,
  "マスク解除"
 ],
 "Used": [
  null,
  "Used"
 ],
 "User": [
  null,
  "ユーザー"
 ],
 "Version": [
  null,
  "バージョン"
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
