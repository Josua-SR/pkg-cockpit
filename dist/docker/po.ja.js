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
 " (shared with the OS)": [
  null,
  " (OS と共有)"
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
 "$0 shares": [
  null,
  "$0 シェア"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 週"
 ],
 "$0 year": [
  "$0 years",
  "$0 年"
 ],
 "${hip}:${hport} -> $cport": [
  null,
  "${hip}:${hport} -> $cport"
 ],
 "Add Additional Storage": [
  null,
  "ストレージの追加"
 ],
 "Add Storage": [
  null,
  "ストレージの追加"
 ],
 "Additional Storage": [
  null,
  "追加のストレージ"
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "選択されたディスク上のすべてのデータが削除され、ストレージプールにディスクが追加されます。"
 ],
 "Always": [
  null,
  "常時"
 ],
 "Are you sure you want to delete this image?": [
  null,
  "このイメージを削除してもよろしいですか?"
 ],
 "Author": [
  null,
  "作成者"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU priority": [
  null,
  "CPU 優先度"
 ],
 "CPU usage:": [
  null,
  "CPU 使用率:"
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  "Docker に接続できません"
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Change": [
  null,
  "変更"
 ],
 "Change resource limits": [
  null,
  "リソース制限の変更"
 ],
 "Change resources limits": [
  null,
  "リソース制限の変更"
 ],
 "Close": [
  null,
  "閉じる"
 ],
 "Combined CPU usage": [
  null,
  "合計 CPU 使用率"
 ],
 "Combined memory usage": [
  null,
  "合計メモリー使用量"
 ],
 "Command": [
  null,
  "コマンド"
 ],
 "Command can't be empty": [
  null,
  "コマンドは空にすることができません"
 ],
 "Command:": [
  null,
  "コマンド:"
 ],
 "Commit": [
  null,
  "コミット"
 ],
 "Commit Image": [
  null,
  "イメージのコミット"
 ],
 "Configure storage...": [
  null,
  "ストレージの設定 ..."
 ],
 "Connecting to Docker": [
  null,
  "Docker への接続"
 ],
 "Container": [
  null,
  "コンテナー"
 ],
 "Container Name": [
  null,
  "コンテナー名"
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  "コンテナーは現在実行中でないと示されていますが、正常な停止に失敗しました。"
 ],
 "Container is currently running.": [
  null,
  "コンテナーは現在実行中です。"
 ],
 "Container:": [
  null,
  "コンテナー:"
 ],
 "Containers": [
  null,
  "コンテナー"
 ],
 "Could not add all disks": [
  null,
  "すべてのディスクを追加することはできませんでした"
 ],
 "Could not reset the storage pool": [
  null,
  "ストレージプールをリセットできませんでした"
 ],
 "Created": [
  null,
  "作成済み"
 ],
 "Created:": [
  null,
  "作成済み:"
 ],
 "Default": [
  null,
  "デフォルト"
 ],
 "Delete": [
  null,
  "削除"
 ],
 "Delete $0": [
  null,
  "$0 の削除"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "コンテナーを削除すると、コンテナー内のすべてのデータが削除されます。"
 ],
 "Deleting an image will delete it, but you can probably download it again if you need it later.  Unless this image has never been pushed to a repository, that is, in which case you probably can't download it again.": [
  null,
  "イメージは、削除しても、多くの場合、後で必要なときに再びダウンロードできます。このイメージがリポジトリーにプッシュされたことがない場合は、イメージを再びダウンロードできません。"
 ],
 "Details": [
  null,
  "詳細"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Docker はインストールされていないか、システムでアクティベートされていません"
 ],
 "Download": [
  null,
  "ダウンロード"
 ],
 "Drive": [
  null,
  "ドライブ"
 ],
 "Duplicate alias": [
  null,
  "重複するエイリアス"
 ],
 "Duplicate port": [
  null,
  "重複するポート"
 ],
 "Entrypoint": [
  null,
  "Entrypoint"
 ],
 "Environment": [
  null,
  "環境"
 ],
 "Erase containers and reset storage pool": [
  null,
  "コンテナーの削除とストレージプールのリセット"
 ],
 "Erase containers, reformat disks, and add them": [
  null,
  "コンテナーの削除、ディスクの再フォーマット、およびそれらの追加"
 ],
 "Error message from Docker:": [
  null,
  "Docker からのエラーメッセージ:"
 ],
 "Everything": [
  null,
  "すべて"
 ],
 "Exited $ExitCode": [
  null,
  "終了した $ExitCode"
 ],
 "Expose container ports": [
  null,
  "コンテナーポートの公開"
 ],
 "Failed to start Docker: $0": [
  null,
  "Docker の起動に失敗しました: $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  "Docker スコープの停止に失敗しました: $0"
 ],
 "Force Delete": [
  null,
  "削除の強制"
 ],
 "Free": [
  null,
  "空き"
 ],
 "Gateway:": [
  null,
  "ゲートウェイ:"
 ],
 "Get new image": [
  null,
  "新規イメージの取得"
 ],
 "Hard Disk": [
  null,
  "ハードディスク"
 ],
 "IP Address:": [
  null,
  "IP アドレス:"
 ],
 "IP Prefix Length:": [
  null,
  "IP プレフィックスの長さ:"
 ],
 "Id": [
  null,
  "ID"
 ],
 "Id:": [
  null,
  "Id:"
 ],
 "Image": [
  null,
  "画像"
 ],
 "Image $0": [
  null,
  "イメージ $0"
 ],
 "Image Search": [
  null,
  "イメージ検索"
 ],
 "Image:": [
  null,
  "イメージ:"
 ],
 "Images": [
  null,
  "イメージ"
 ],
 "Images and running containers": [
  null,
  "イメージおよび実行中のコンテナー"
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  "Docker ストレージプールに関する情報は利用できません。"
 ],
 "Invalid port": [
  null,
  "無効なポート"
 ],
 "Link to another container": [
  null,
  "別のコンテナーへのリンク"
 ],
 "Links": [
  null,
  "リンク"
 ],
 "Links:": [
  null,
  "リンク:"
 ],
 "Local Disks": [
  null,
  "ローカルディスク"
 ],
 "MAC Address:": [
  null,
  "MAC アドレス:"
 ],
 "Memory": [
  null,
  "メモリ"
 ],
 "Memory limit": [
  null,
  "メモリー制限"
 ],
 "Memory usage:": [
  null,
  "メモリー使用状況:"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Mount container volumes": [
  null,
  "マウントコンテナーボリューム"
 ],
 "Name": [
  null,
  "名前"
 ],
 "No": [
  null,
  "いいえ"
 ],
 "No additional local storage found.": [
  null,
  "追加ローカルストレージがありません。"
 ],
 "No alias specified": [
  null,
  "エイリアスが指定されていません"
 ],
 "No container specified": [
  null,
  "コンテナーが指定されていません"
 ],
 "No containers": [
  null,
  "コンテナーなし"
 ],
 "No containers that match the current filter": [
  null,
  "現在のフィルターに一致するコンテナーがありません"
 ],
 "No images": [
  null,
  "イメージなし"
 ],
 "No images that match the current filter": [
  null,
  "現在のフィルターに一致するイメージがありません"
 ],
 "No results for $0": [
  null,
  "$0 の結果なし"
 ],
 "No running containers": [
  null,
  "実行中のコンテナーなし"
 ],
 "No running containers that match the current filter": [
  null,
  "現在のフィルターに一致する実行中のコンテナーがありません"
 ],
 "Not authorized to access Docker on this system": [
  null,
  "このシステム上の Docker にアクセスする権限がありません"
 ],
 "Not found": [
  null,
  "見つかりません"
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
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "障害発生時に、$0 回再試行します"
 ],
 "Overview": [
  null,
  "概要"
 ],
 "Please confirm deletion of $0": [
  null,
  "$0 の削除を確定してください"
 ],
 "Please confirm forced deletion of $0": [
  null,
  "$0 の強制削除を確定してください"
 ],
 "Please try another term": [
  null,
  "別の用語を試してください"
 ],
 "Ports": [
  null,
  "ポート"
 ],
 "Ports:": [
  null,
  "ポート:"
 ],
 "ReadOnly": [
  null,
  "読み取り専用"
 ],
 "ReadWrite": [
  null,
  "読み書き"
 ],
 "Reformat and add disks": [
  null,
  "ディスクの再フォーマットおよび追加"
 ],
 "Repository": [
  null,
  "リポジトリー"
 ],
 "Reset": [
  null,
  "リセット"
 ],
 "Reset Storage Pool": [
  null,
  "ストレージプールのリセット"
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  "ストレージプールをリセットすると、すべてのコンテナーが削除され、プール内のディスクが解放されます。"
 ],
 "Restart": [
  null,
  "再起動"
 ],
 "Restart Policy": [
  null,
  "再起動ポリシー"
 ],
 "Restart Policy:": [
  null,
  "再起動ポリシー:"
 ],
 "Retries:": [
  null,
  "再試行回数:"
 ],
 "Run": [
  null,
  "実行"
 ],
 "Run Image": [
  null,
  "イメージの実行"
 ],
 "Security": [
  null,
  "Security"
 ],
 "Set container environment variables": [
  null,
  "コンテナー環境変数の設定"
 ],
 "Show all containers": [
  null,
  "すべてのコンテナーの表示"
 ],
 "Show all images": [
  null,
  "すべてのイメージの表示"
 ],
 "Size": [
  null,
  "Size"
 ],
 "Solid-State Disk": [
  null,
  "ソリッドステートディスク"
 ],
 "Start": [
  null,
  "開始日"
 ],
 "Start Docker": [
  null,
  "Docker の起動"
 ],
 "State": [
  null,
  "状態"
 ],
 "State:": [
  null,
  "状態:"
 ],
 "Stop": [
  null,
  "停止"
 ],
 "Stopped": [
  null,
  "停止中"
 ],
 "Storage": [
  null,
  "ストレージ"
 ],
 "Storage pool": [
  null,
  "ストレージプール"
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Tag": [
  null,
  "タグ"
 ],
 "Tags": [
  null,
  "タグ"
 ],
 "The Docker storage pool cannot be managed on this system.": [
  null,
  "Docker ストレージプールはこのシステムで管理できません。"
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  ""
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  ""
 ],
 "The storage pool will be reset to optimize its layout.  All containers will be erased.": [
  null,
  "ストレージプールはそのレイアウトを最適化するためにリセットされます。すべてのコンテナーは削除されます。"
 ],
 "This image does not exist.": [
  null,
  "このイメージは存在しません。"
 ],
 "Total": [
  null,
  "合計"
 ],
 "Try again": [
  null,
  "再試行します"
 ],
 "Type to filter…": [
  null,
  "フィルターのために入力します…"
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "予期しないエラー"
 ],
 "Unless Stopped": [
  null,
  "停止されていない場合"
 ],
 "Up since $StartedAt": [
  null,
  "$StartedAt から稼働中"
 ],
 "Used": [
  null,
  "Used"
 ],
 "Used by Containers": [
  null,
  "コンテナーにより使用済み"
 ],
 "Volumes": [
  null,
  "ボリューム"
 ],
 "With terminal": [
  null,
  "端末の使用"
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  "Docker ストレージプールを管理するパーミッションがありません。"
 ],
 "alias": [
  null,
  "alias"
 ],
 "default": [
  null,
  "default"
 ],
 "key": [
  null,
  "鍵"
 ],
 "none": [
  null,
  "なし"
 ],
 "search by name, namespace or description": [
  null,
  "名前、名前空間、または説明別の検索"
 ],
 "select container": [
  null,
  "コンテナーの選択"
 ],
 "shares": [
  null,
  "共有"
 ],
 "to host path": [
  null,
  "ホストパスに対して"
 ],
 "to host port": [
  null,
  "ホストポートに対して"
 ],
 "undefined": [
  null,
  "未定義"
 ],
 "value": [
  null,
  "value"
 ],
 "page-title\u0004Containers": [
  null,
  "コンテナー"
 ],
 "page-title\u0004Images": [
  null,
  "イメージ"
 ]
}));
