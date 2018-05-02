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
 "$mtu": [
  null,
  "$mtu"
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
 "5 minutes": [
  null,
  "5 分"
 ],
 "6 hours": [
  null,
  "6 時間"
 ],
 "802.3ad": [
  null,
  "802.3ad"
 ],
 "802.3ad LACP": [
  null,
  "802.3ad LACP"
 ],
 "ARP": [
  null,
  "ARP"
 ],
 "ARP Monitoring": [
  null,
  "ARP 監視"
 ],
 "ARP Ping": [
  null,
  "ARP Ping"
 ],
 "Active": [
  null,
  "動作中"
 ],
 "Active Backup": [
  null,
  "アクティブなバックアップ"
 ],
 "Adaptive load balancing": [
  null,
  "適応ロードバランス"
 ],
 "Adaptive transmit load balancing": [
  null,
  "適応送信のロードバランス"
 ],
 "Add $0": [
  null,
  "$0 の追加"
 ],
 "Add Bond": [
  null,
  "ボンドの追加"
 ],
 "Add Bridge": [
  null,
  "ブリッジの追加"
 ],
 "Add Team": [
  null,
  "チームの追加"
 ],
 "Add VLAN": [
  null,
  "VLAN の追加"
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "<b>$0</b> を追加すると、サーバーへの接続が切断され、管理 UI が利用できなくなります。"
 ],
 "Additional DNS $val": [
  null,
  "追加の DNS $val"
 ],
 "Additional DNS Search Domains $val": [
  null,
  "追加の DNS 検索ドメイン $val"
 ],
 "Additional address $val": [
  null,
  "追加のアドレス $val"
 ],
 "Address $val": [
  null,
  "アドレス $val"
 ],
 "Addresses": [
  null,
  "アドレス"
 ],
 "Apply": [
  null,
  "適用"
 ],
 "Authenticating": [
  null,
  "認証"
 ],
 "Automatic": [
  null,
  "自動"
 ],
 "Automatic (DHCP only)": [
  null,
  "自動 (DHCP のみ)"
 ],
 "Automatic (DHCP)": [
  null,
  "自動 (DHCP)"
 ],
 "Balancer": [
  null,
  "バランサー"
 ],
 "Bond": [
  null,
  "Bond"
 ],
 "Bond Settings": [
  null,
  "ボンド設定"
 ],
 "Bridge": [
  null,
  "ブリッジ"
 ],
 "Bridge Port Settings": [
  null,
  "ブリッジポート設定"
 ],
 "Bridge Settings": [
  null,
  "ブリッジ設定"
 ],
 "Bridge port": [
  null,
  "ブリッジポート"
 ],
 "Broadcast": [
  null,
  "ブロードキャスト"
 ],
 "Broken configuration": [
  null,
  "破損した設定"
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Carrier": [
  null,
  "キャリア"
 ],
 "Change the settings": [
  null,
  "設定の変更"
 ],
 "Changing the settings will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "設定を変更すると、サーバーへの接続が切断され、管理 UI が利用できなくなります。"
 ],
 "Checking IP": [
  null,
  "IP の確認"
 ],
 "Close": [
  null,
  "閉じる"
 ],
 "Configure": [
  null,
  "設定"
 ],
 "Configuring": [
  null,
  "設定"
 ],
 "Configuring IP": [
  null,
  "IP の設定"
 ],
 "Connect automatically": [
  null,
  "自動的に接続"
 ],
 "Connection will be lost": [
  null,
  "接続が失われます"
 ],
 "Create it": [
  null,
  "作成"
 ],
 "Creating this VLAN will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "この VLAN を作成すると、サーバーへの接続が切断され、管理 UI が利用できなくなります。"
 ],
 "Creating this bond will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "このボンドを作成すると、サーバーへの接続が切断され、管理 UI が利用できなくなります。"
 ],
 "Creating this bridge will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "このブリッジを作成すると、サーバーへの接続が切断され、管理 UI が利用できなくなります。"
 ],
 "Creating this team will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "このチームを作成すると、サーバーへの接続が切断され、管理 UI が利用できなくなります。"
 ],
 "DNS": [
  null,
  "DNS"
 ],
 "DNS $val": [
  null,
  "DNS $val"
 ],
 "DNS Search Domains": [
  null,
  "DNS 検索ドメイン"
 ],
 "DNS Search Domains $val": [
  null,
  "DNS 検索ドメイン $val"
 ],
 "Deactivating": [
  null,
  "非アクティブ化"
 ],
 "Delete": [
  null,
  "削除"
 ],
 "Delete $0": [
  null,
  "$0 の削除"
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "<b>$0</b> を削除すると、サーバーへの接続が切断され、管理 UI が利用できなくなります。"
 ],
 "Disabled": [
  null,
  "無効"
 ],
 "Ethernet MAC": [
  null,
  "Ethernet MAC"
 ],
 "Ethernet MTU": [
  null,
  "Ethernet MTU"
 ],
 "Ethtool": [
  null,
  "Ethtool"
 ],
 "Failed": [
  null,
  "失敗"
 ],
 "Forward delay $forward_delay": [
  null,
  "フォワード遅延 $forward_delay"
 ],
 "General": [
  null,
  "全般"
 ],
 "Go to now": [
  null,
  "今すぐ移動"
 ],
 "Hair Pin mode": [
  null,
  "ヘアピンモード"
 ],
 "Hairpin mode": [
  null,
  "ヘアピンモード"
 ],
 "Hello time $hello_time": [
  null,
  "Hello タイム $hello_time"
 ],
 "IP Address": [
  null,
  "IP アドレス"
 ],
 "IP Settings": [
  null,
  "IP 設定"
 ],
 "IPv4": [
  null,
  "IPv4"
 ],
 "IPv4 Settings": [
  null,
  "IPv4 のセッティング"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "IPv6 のセッティング"
 ],
 "Id $id": [
  null,
  "Id $id"
 ],
 "Ignore": [
  null,
  "無視"
 ],
 "Inactive": [
  null,
  "停止"
 ],
 "Interfaces": [
  null,
  "インターフェース"
 ],
 "Invalid address $0": [
  null,
  "無効なアドレス $0"
 ],
 "Invalid metric $0": [
  null,
  "無効なメトリック $0"
 ],
 "Invalid prefix $0": [
  null,
  "無効なプレフィックス $0"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "無効なプレフィックスまたはネットマスク $0"
 ],
 "Keep connection": [
  null,
  "接続の保持"
 ],
 "LACP Key": [
  null,
  "LACP キー"
 ],
 "Link Monitoring": [
  null,
  "リンクのモニタリング"
 ],
 "Link Watch": [
  null,
  "リンクの監視"
 ],
 "Link down delay": [
  null,
  "リンクダウンの遅延"
 ],
 "Link local": [
  null,
  "ローカルリンク"
 ],
 "Link up delay": [
  null,
  "リンクアップの遅延"
 ],
 "Load Balancing": [
  null,
  "ロードバランシング"
 ],
 "MAC": [
  null,
  "MAC"
 ],
 "MII (Recommended)": [
  null,
  "MII (推奨)"
 ],
 "MTU": [
  null,
  "MTU"
 ],
 "MTU must be a positive number": [
  null,
  "MTU は正の数値である必要があります"
 ],
 "Manual": [
  null,
  "手作業"
 ],
 "Master": [
  null,
  "マスター"
 ],
 "Maximum message age $max_age": [
  null,
  "メッセージ最大期間 $max_age"
 ],
 "Members": [
  null,
  "メンバー"
 ],
 "Mode": [
  null,
  "モード"
 ],
 "Monitoring Interval": [
  null,
  "監視間隔"
 ],
 "Monitoring Targets": [
  null,
  "ターゲットの監視"
 ],
 "NSNA Ping": [
  null,
  "NSNA Ping"
 ],
 "Name": [
  null,
  "名前"
 ],
 "Networking": [
  null,
  "ネットワーキング"
 ],
 "Networking Logs": [
  null,
  "ネットワークログ"
 ],
 "No": [
  null,
  "いいえ"
 ],
 "No carrier": [
  null,
  "キャリアなし"
 ],
 "Not available": [
  null,
  "利用できません"
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
 "Parent": [
  null,
  "親"
 ],
 "Parent $parent": [
  null,
  "親 $parent"
 ],
 "Part of ": [
  null,
  "一部"
 ],
 "Passive": [
  null,
  "パッシブ"
 ],
 "Path cost": [
  null,
  "パスコスト"
 ],
 "Path cost $path_cost": [
  null,
  "パスコスト $path_cost"
 ],
 "Permanent": [
  null,
  "永続"
 ],
 "Ping Interval": [
  null,
  "Ping 間隔"
 ],
 "Ping Target": [
  null,
  "Ping ターゲット"
 ],
 "Ports": [
  null,
  "ポート"
 ],
 "Prefix length": [
  null,
  "プレフィックス長"
 ],
 "Prefix length or Netmask": [
  null,
  "プレフィックス長またはネットマスク"
 ],
 "Preparing": [
  null,
  "準備中"
 ],
 "Preserve": [
  null,
  "保存"
 ],
 "Primary": [
  null,
  "プライマリ"
 ],
 "Priority": [
  null,
  "優先度"
 ],
 "Priority $priority": [
  null,
  "優先度 $priority"
 ],
 "Random": [
  null,
  "ランダム"
 ],
 "Reboot": [
  null,
  "再起動"
 ],
 "Receiving": [
  null,
  "受信:"
 ],
 "Remove $0": [
  null,
  "$0 の削除"
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "<b>$0</b> を削除すると、サーバーへの接続が切断され、管理 UI が利用できなくなります。"
 ],
 "Restoring connection": [
  null,
  "接続の復元"
 ],
 "Round Robin": [
  null,
  "ラウンドロビン"
 ],
 "Routes": [
  null,
  "ルート"
 ],
 "Runner": [
  null,
  "ランナー"
 ],
 "STP Forward delay": [
  null,
  "STP フォワード遅延"
 ],
 "STP Hello time": [
  null,
  "STP Hello タイム"
 ],
 "STP Maximum message age": [
  null,
  "STP メッセージ最大期間"
 ],
 "STP Priority": [
  null,
  "STP 優先度"
 ],
 "Sending": [
  null,
  "送信:"
 ],
 "Set to": [
  null,
  "設定値"
 ],
 "Shared": [
  null,
  "共有"
 ],
 "Spanning Tree Protocol": [
  null,
  "スパニング ツリープロトコル"
 ],
 "Spanning Tree Protocol (STP)": [
  null,
  "スパニング ツリープロトコル (STP)"
 ],
 "Stable": [
  null,
  "安定"
 ],
 "Status": [
  null,
  "状態"
 ],
 "Sticky": [
  null,
  "スティッキー"
 ],
 "Switch off $0": [
  null,
  "$0 をオフにする"
 ],
 "Switch on $0": [
  null,
  "$0 をオンにする"
 ],
 "Switching off <b>$0</b>  will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "<b>$0</b> をオフにすると、サーバーへの接続が切断され、管理 UI が利用できなくなります。"
 ],
 "Switching off <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "<b>$0</b> をオフにすると、サーバーへの接続が切断され、管理 UI が利用できなくなります。1"
 ],
 "Switching on <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  "<b>$0</b> をオンにすると、サーバーへの接続が切断され、管理 UI が利用できなくなります。"
 ],
 "Team": [
  null,
  "チーム"
 ],
 "Team Port": [
  null,
  "Team ポート"
 ],
 "Team Port Settings": [
  null,
  "チームポート設定"
 ],
 "Team Settings": [
  null,
  "チーム設定"
 ],
 "Testing connection": [
  null,
  "接続のテスト"
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  "ユーザー <b>$0</b> はネットワーク設定を変更することを許可されていません"
 ],
 "This device cannot be managed here.": [
  null,
  "このデバイスはここで管理できません。"
 ],
 "Unexpected error": [
  null,
  "予期しないエラー"
 ],
 "Unknown": [
  null,
  "不明"
 ],
 "Unknown \"$0\"": [
  null,
  "不明な \"$0\""
 ],
 "Unknown configuration": [
  null,
  "不明な設定"
 ],
 "Unmanaged Interfaces": [
  null,
  "未管理のインターフェース"
 ],
 "VLAN": [
  null,
  "VLAN"
 ],
 "VLAN Id": [
  null,
  "VLAN Id"
 ],
 "VLAN Settings": [
  null,
  "VLAN 設定"
 ],
 "Waiting": [
  null,
  "待機中"
 ],
 "XOR": [
  null,
  "XOR"
 ],
 "Yes": [
  null,
  "はい"
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
 "page-title\u0004Networking": [
  null,
  "ネットワーク"
 ]
}));
