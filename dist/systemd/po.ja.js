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
 "$0 Template": [
  null,
  "$0 テンプレート"
 ],
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
 "Absent": [
  null,
  "不在"
 ],
 "Active since ": [
  null,
  "以下以降アクティブ"
 ],
 "Additional actions": [
  null,
  "その他の操作"
 ],
 "Additional packages:": [
  null,
  "追加のパッケージ:"
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
  "アラート以上のレベル"
 ],
 "All": [
  null,
  "すべて"
 ],
 "All In One": [
  null,
  "一体型"
 ],
 "Allow running (unmask)": [
  null,
  "実行を許可 (マスク解除)"
 ],
 "Appearance:": [
  null,
  "Appearance:"
 ],
 "Asset Tag": [
  null,
  "アセットタグ"
 ],
 "At specific time": [
  null,
  "特定の時間"
 ],
 "Automatic Startup": [
  null,
  "自動起動"
 ],
 "Automatically starts": [
  null,
  "自動起動"
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
  "前"
 ],
 "Binds To": [
  null,
  "バインドする"
 ],
 "Black": [
  null,
  "黒"
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
  "バインドされた"
 ],
 "Bug Fix Updates Available": [
  null,
  "バグ修正の更新が利用可能"
 ],
 "Bus Expansion Chassis": [
  null,
  "バス拡張シャーシ"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU Security": [
  null,
  "CPU セキュリティー"
 ],
 "CPU Security Toggles": [
  null,
  "CPU セキュリティートグル"
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
  "更新の確認…"
 ],
 "Checking installed software": [
  null,
  "インストールされたソフトウェアの確認"
 ],
 "Class": [
  null,
  "クラス"
 ],
 "Clear All Filters": [
  null,
  "すべてのフィルターの消去"
 ],
 "Click to see system hardware information": [
  null,
  "クリックしてシステムハードウェア情報を確認"
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
  "競合する"
 ],
 "Conflicts": [
  null,
  "競合"
 ],
 "Consists Of": [
  null,
  "構成するもの"
 ],
 "Convertible": [
  null,
  "変換可能"
 ],
 "Copy": [
  null,
  "コピー"
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
 "Ctrl+Insert": [
  null,
  "Ctrl+Insert"
 ],
 "Current boot": [
  null,
  "現在の起動"
 ],
 "Dark": [
  null,
  "濃く"
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
 "Desktop": [
  null,
  "デスクトップ"
 ],
 "Detachable": [
  null,
  "割り当て解除可能"
 ],
 "Details": [
  null,
  "詳細"
 ],
 "Disable simultaneous multithreading": [
  null,
  "同時マルチスレッディングの無効化"
 ],
 "Disabled": [
  null,
  "無効"
 ],
 "Disallow running (mask)": [
  null,
  "実行を禁止 (マスク)"
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
  "$0 をダウンロード中"
 ],
 "Dual Rank": [
  null,
  "デュアルランク"
 ],
 "Embedded PC": [
  null,
  "組み込み PC"
 ],
 "Enable stored metrics…": [
  null,
  "保存済みメトリクスを有効にします…"
 ],
 "Enabled": [
  null,
  "有効"
 ],
 "Enhancement Updates Available": [
  null,
  "機能拡張の更新を利用できます"
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
 "Expansion Chassis": [
  null,
  "拡張シャーシ"
 ],
 "Failed to start": [
  null,
  "起動に失敗しました"
 ],
 "Filter by name or description...": [
  null,
  "名前または説明による絞り込み..."
 ],
 "Forbidden from running": [
  null,
  "実行が禁止されています"
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
 "ID": [
  null,
  "ID"
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
 "Instance of template: ": [
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
  "名前空間に参加"
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
 "Light": [
  null,
  "薄く"
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
 "Mask Service": [
  null,
  "サービスのマスク"
 ],
 "Masked": [
  null,
  "マスク"
 ],
 "Masking service prevents all dependant units from running. This can have bigger impact than anticipated. Please confirm that you want to mask this unit.": [
  null,
  "サービスをマスクすると、すべての依存するユニットが実行されなくなります。大きな影響が及ぶ可能性があります。このユニットをマスクすることを確認してください。"
 ],
 "Memory": [
  null,
  "メモリ"
 ],
 "Memory & Swap": [
  null,
  "メモリー & スワップ"
 ],
 "Memory Technology": [
  null,
  "メモリーテクノロジー"
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
 "Mitigations": [
  null,
  "緩和"
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
 "No Matching Results": [
  null,
  "一致する結果はありません"
 ],
 "No host keys found.": [
  null,
  "ホストキーが見つかりません。"
 ],
 "Not authorized to upload-report": [
  null,
  "upload-report の権限がありません"
 ],
 "Not running": [
  null,
  "実行中ではありません"
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
  "注意以上のレベル"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "On Failure": [
  null,
  "障害発生時"
 ],
 "Only Emergency": [
  null,
  "緊急時限定"
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
  "一部"
 ],
 "Paste": [
  null,
  "貼り付け"
 ],
 "Path": [
  null,
  "パス"
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
 "Present": [
  null,
  "存在"
 ],
 "Pretty Host Name": [
  null,
  "プリティホスト名"
 ],
 "Previous boot": [
  null,
  "以前のブート"
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
  "再読み込み先を伝搬"
 ],
 "RAID Chassis": [
  null,
  "RAID シャーシ"
 ],
 "Rack Mount Chassis": [
  null,
  "ラックマウントシャーシ"
 ],
 "Rank": [
  null,
  "ランク"
 ],
 "Read more...": [
  null,
  "さらに読む..."
 ],
 "Read-only": [
  null,
  "読み取り専用"
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
  "伝搬元を再読み込み"
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
 "Required By": [
  null,
  "必要とされる"
 ],
 "Required by ": [
  null,
  "以下により必要"
 ],
 "Requires": [
  null,
  "必要"
 ],
 "Requires administration access to edit": [
  null,
  "編集には管理者アクセスが必要"
 ],
 "Requisite": [
  null,
  "必須"
 ],
 "Requisite Of": [
  null,
  "必須の"
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
 "Running": [
  null,
  "実行中"
 ],
 "Saturday": [
  null,
  "土曜日"
 ],
 "Save": [
  null,
  "保存"
 ],
 "Save and reboot": [
  null,
  "保存および再起動"
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
  "セキュリティーの更新を利用できます"
 ],
 "Service": [
  null,
  "サービス"
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
 "Shift+Insert": [
  null,
  "Shift+Insert"
 ],
 "Show fingerprints": [
  null,
  "フィンガープリントの表示"
 ],
 "Shut Down": [
  null,
  "シャットダウン"
 ],
 "Single Rank": [
  null,
  "シングルランク"
 ],
 "Size": [
  null,
  "Size"
 ],
 "Slot": [
  null,
  "スロット"
 ],
 "Sockets": [
  null,
  "ソケット"
 ],
 "Software-based workarounds help prevent CPU security issues. These mitigations have the side effect of reducing performance. Change these settings at your own risk.": [
  null,
  "ソフトウェアベースの回避策により、CPU セキュリティー問題を回避します。これらの緩和策にはパフォーマンスの低下という副次的な影響があります。リスクをご理解の上、これらの設定を変更してください。"
 ],
 "Space-saving Computer": [
  null,
  "省スペースコンピューター"
 ],
 "Specific Time": [
  null,
  "特定の時間"
 ],
 "Speed": [
  null,
  "速度"
 ],
 "Start": [
  null,
  "開始日"
 ],
 "Start Service": [
  null,
  "サービスの開始"
 ],
 "Start and Enable": [
  null,
  "起動と有効化"
 ],
 "State": [
  null,
  "状態"
 ],
 "Static": [
  null,
  "静的"
 ],
 "Status": [
  null,
  "状態"
 ],
 "Stick PC": [
  null,
  "スティッキー PC"
 ],
 "Stop": [
  null,
  "停止"
 ],
 "Stop and Disable": [
  null,
  "停止と無効化"
 ],
 "Store Metrics": [
  null,
  "メトリクスの保存"
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
  "システムは登録されていません"
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
  "システムは最新の状態です"
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
 "The user $0 is not permitted to change cpu security mitigations": [
  null,
  "ユーザー $0 は、cpu セキュリティー緩和の変更を許可されていません"
 ],
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  "ユーザー <b>$0</b> はタイマーを作成するパーミッションを持っていません"
 ],
 "The user <b>$0</b> is not permitted to change the system time": [
  null,
  "ユーザー <b>$0</b> は、システムの時間の変更を許可されていません"
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  "ユーザー <b>$0</b> はホスト名を変更することを許可されていません"
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  "ユーザー <b>$0</b> は、このサーバーをシャットダウンまたは再起動することを許可されていません"
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  "この日はすべての月で存在しません。<br> タイマーは 31 日がある月でのみ実行されます。"
 ],
 "This field cannot be empty.": [
  null,
  "このフィールドは空にできません。"
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
 "Tower": [
  null,
  "タワー"
 ],
 "Triggered By": [
  null,
  "トリガー元"
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
 "Updates Available": [
  null,
  "更新を利用できます"
 ],
 "Updating status...": [
  null,
  "ステータスを更新中..."
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
  "他のソフトウェア管理オペレーションが終了するまで待機中"
 ],
 "Wanted By": [
  null,
  "望まれる"
 ],
 "Wants": [
  null,
  "望む"
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
 "White": [
  null,
  "白"
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
 "undefined": [
  null,
  "未定義"
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
