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
 " 1\"Do you want to delete the following Nodes?": [
  null,
  " 1\" 次のノードを削除しますか?"
 ],
 "$0% Free": [
  "$0% Free",
  "$0% 空き"
 ],
 "$0% Used": [
  "$0% Used",
  "$0% 使用済み"
 ],
 "AWS Elastic Block Store": [
  null,
  "AWS Elastic Block Store"
 ],
 "Access Modes": [
  null,
  "アクセスモード"
 ],
 "Access Policy": [
  null,
  "アクセスポリシー"
 ],
 "Actual": [
  null,
  "実際"
 ],
 "Add": [
  null,
  "追加する"
 ],
 "Add Cluster Node": [
  null,
  "クラスターノードの追加"
 ],
 "Add Group": [
  null,
  "グループの追加"
 ],
 "Add Kubernetes Node": [
  null,
  "Kubernetes ノードの追加"
 ],
 "Add Member": [
  null,
  "メンバーの追加"
 ],
 "Add Membership": [
  null,
  "メンバーシップの追加"
 ],
 "Add New Cluster": [
  null,
  "新規クラスターの追加"
 ],
 "Add New User": [
  null,
  "新規ユーザーの追加"
 ],
 "Add Role": [
  null,
  "ロールの追加"
 ],
 "Add User": [
  null,
  "ユーザーの追加"
 ],
 "Add membership": [
  null,
  "メンバーシップの追加"
 ],
 "Address": [
  null,
  "アドレス:"
 ],
 "Addresses": [
  null,
  "アドレス"
 ],
 "Adjust": [
  null,
  "調整"
 ],
 "Adjust Persistent Volume '{{ item.metadata.name }}'": [
  null,
  "永続ボリューム '{{ item.metadata.name }}' の調整"
 ],
 "Adjust Replication Controller {{ item.metadata.name }}": [
  null,
  "レプリケーションコントローラー {{ item.metadata.name }} の調整"
 ],
 "Adjust Route": [
  null,
  "ルートの調整"
 ],
 "Adjust Service": [
  null,
  "サービスの調整"
 ],
 "Admin": [
  null,
  "管理者"
 ],
 "All Projects": [
  null,
  "すべてのプロジェクト"
 ],
 "All Types": [
  null,
  "すべてのタイプ"
 ],
 "All healthy": [
  null,
  "すべてが正常"
 ],
 "All images": [
  null,
  "すべてのイメージ"
 ],
 "All in use": [
  null,
  "使用中のすべてのもの"
 ],
 "All running": [
  null,
  "実行中のすべてのもの"
 ],
 "Annotations": [
  null,
  "アノテーション"
 ],
 "Anonymous: Allow all unauthenticated users to pull images": [
  null,
  "匿名: 認証されていないすべてのユーザーがイメージをプルできます"
 ],
 "Authentication": [
  null,
  "認証"
 ],
 "Azure": [
  null,
  "Azure"
 ],
 "Boot ID": [
  null,
  "ブート ID"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU Utilization: $0%": [
  null,
  "CPU 使用率: $0%"
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Capacity": [
  null,
  "容量"
 ],
 "Ceph Filesystem Mount": [
  null,
  "Ceph ファイルシステムマウント"
 ],
 "Ceph Monitors": [
  null,
  "Ceph モニター"
 ],
 "Change": [
  null,
  "変更"
 ],
 "Change User": [
  null,
  "ユーザーの変更"
 ],
 "Change image stream": [
  null,
  "イメージストリームの変更"
 ],
 "Change project": [
  null,
  "プロジェクトの変更"
 ],
 "Cinder": [
  null,
  "Cinder"
 ],
 "Claim": [
  null,
  "クレーム"
 ],
 "Claim Name": [
  null,
  "クレーム名"
 ],
 "Client Certificate": [
  null,
  "クライアント証明書"
 ],
 "Cluster": [
  null,
  "クラスター"
 ],
 "Configuration": [
  null,
  "設定"
 ],
 "Configure Flannel networking": [
  null,
  "Flannel ネットワーキングの設定"
 ],
 "Configure Kubelet and Proxy": [
  null,
  "Kubelet およびプロキシーの設定"
 ],
 "Connect": [
  null,
  "接続"
 ],
 "Connecting...": [
  null,
  "接続中..."
 ],
 "Connection Error": [
  null,
  "接続エラー"
 ],
 "Connection Error: $0": [
  null,
  "接続エラー: $0"
 ],
 "Connection Settings": [
  null,
  "接続設定"
 ],
 "Container": [
  null,
  "コンテナー"
 ],
 "Container ID": [
  null,
  "コンテナー ID"
 ],
 "Container Runtime Version": [
  null,
  "コンテナーランタイムバージョン"
 ],
 "Containers": [
  null,
  "コンテナー"
 ],
 "Could not list services": [
  null,
  "サービスを一覧表示できませんでした"
 ],
 "Couldn't connect to server": [
  null,
  "サーバーに接続できませんでした"
 ],
 "Couldn't find running API server": [
  null,
  "実行中の API サーバーを見つけることができませんでした"
 ],
 "Create": [
  null,
  "作成"
 ],
 "Create empty image stream": [
  null,
  "空のイメージストリームの作成"
 ],
 "Create image stream": [
  null,
  "イメージストリームの作成"
 ],
 "Created": [
  null,
  "作成済み"
 ],
 "DNS Policy": [
  null,
  "DNS ポリシー"
 ],
 "Delete": [
  null,
  "削除"
 ],
 "Delete Node": [
  null,
  "ノードの削除"
 ],
 "Delete Persistent Volume": [
  null,
  "永続ボリュームの削除"
 ],
 "Delete Persistent Volume Claim": [
  null,
  "永続ボリュームクレームの削除"
 ],
 "Delete Project": [
  null,
  "プロジェクトの削除"
 ],
 "Delete Selected": [
  null,
  "選択項目の削除"
 ],
 "Delete image stream": [
  null,
  "イメージストリームの削除"
 ],
 "Delete {{ item.kind }}": [
  null,
  "{{ item.kind }} の削除"
 ],
 "Deleting a Pod will kill all associated containers. Pods may be automatically created again in some cases.": [
  null,
  "ポッドを削除すると、関連するすべてのコンテナーが終了します。ポッドは自動的に再び作成されることもあります。"
 ],
 "Deploy": [
  null,
  "デプロイ"
 ],
 "Deploy Application": [
  null,
  "アプリケーションのデプロイ"
 ],
 "Deployment Causes": [
  null,
  "デプロイメントの理由"
 ],
 "Deployment Config": [
  null,
  "デプロイメント設定"
 ],
 "Deployment Configs": [
  null,
  "デプロイメント設定"
 ],
 "Description": [
  null,
  "説明"
 ],
 "Details": [
  null,
  "詳細"
 ],
 "Directory": [
  null,
  "フォルダー"
 ],
 "Disk": [
  null,
  "ディスク"
 ],
 "Disk Utilization: $0%": [
  null,
  "ディスク使用率: $0%˙"
 ],
 "Display name": [
  null,
  "名前の表示"
 ],
 "Do you want to add the role '{{ fields.displayRole }}'?": [
  null,
  "ロール '{{ fields.displayRole }}' を追加しますか?"
 ],
 "Do you want to delete the '{{stream.metadata.namespace}}/{{stream.metadata.name}}' image stream?": [
  null,
  "'{{stream.metadata.namespace}}/{{stream.metadata.name}}' イメージストリームを削除しますか?"
 ],
 "Do you want to delete the Persistent Volume '{{item.metadata.name}}'?": [
  null,
  "永続ボリューム '{{item.metadata.name}}' を削除しますか?"
 ],
 "Do you want to delete the Persistent Volume Claim '{{item.metadata.name}}'?": [
  null,
  "永続ボリュームクレーム '{{item.metadata.name}}' を削除しますか?"
 ],
 "Do you want to delete the {{ item.kind }} '{{item.metadata.name}}'?": [
  null,
  "{{ item.kind }} '{{item.metadata.name}}' を削除しますか?"
 ],
 "Do you want to delete this Node?": [
  null,
  "このノードを削除しますか?"
 ],
 "Do you want to remove the image tagged as '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?": [
  null,
  "'{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}' というタグが付けられたイメージを削除しますか?"
 ],
 "Do you want to remove the role '{{ fields.displayRole }}' from member {{ fields.member.metadata.name }}?": [
  null,
  "ロール '{{ fields.displayRole }}' をメンバー {{ fields.member.metadata.name }} から削除しますか?"
 ],
 "Don't pull images automatically": [
  null,
  "イメージを自動的にプルしないでください"
 ],
 "Driver": [
  null,
  "ドライバー"
 ],
 "Empty Directory": [
  null,
  "空のディレクトリー"
 ],
 "Endpoint": [
  null,
  "エンドポイント"
 ],
 "Endpoint Name": [
  null,
  "エンドポイント名"
 ],
 "Endpoints": [
  null,
  "エンドポイント"
 ],
 "Environment": [
  null,
  "環境"
 ],
 "Error getting certificate details: $0": [
  null,
  "証明書の詳細の取得中にエラーが発生しました: $0"
 ],
 "Error writing kubectl config": [
  null,
  "kubectl 設定の書き込み中にエラーが発生しました"
 ],
 "Fibre Channel": [
  null,
  "ファイバーチャネル"
 ],
 "Filesystem Type": [
  null,
  "ファイルシステムタイプ"
 ],
 "Flex": [
  null,
  "Flex"
 ],
 "Flocker": [
  null,
  "Flocker"
 ],
 "Flocker Dataset Name": [
  null,
  "Flocker データセット名"
 ],
 "GCE Persistent Disk": [
  null,
  "GCE 永続ディスク"
 ],
 "Git Repository": [
  null,
  "Git リポジトリー"
 ],
 "Gluster FS": [
  null,
  "Gluster FS"
 ],
 "GlusterFS": [
  null,
  "GlusterFS"
 ],
 "Grant additional push or admin access to specific members below.": [
  null,
  "以下の特定のメンバーに追加のプッシュまたは管理アクセスを提供します。"
 ],
 "Group Members": [
  null,
  "グループメンバー"
 ],
 "Group or Project": [
  null,
  "グループまたはプロジェクト"
 ],
 "Groups": [
  null,
  "グループ"
 ],
 "Host": [
  null,
  "ホスト"
 ],
 "Host Path": [
  null,
  "ホストパス"
 ],
 "IP": [
  null,
  "IP"
 ],
 "ISCSI": [
  null,
  "ISCSI"
 ],
 "Identities": [
  null,
  "ID"
 ],
 "Identity": [
  null,
  "ID"
 ],
 "Image": [
  null,
  "画像"
 ],
 "Image ID": [
  null,
  "イメージ ID"
 ],
 "Image Name": [
  null,
  "イメージ名"
 ],
 "Image Registry": [
  null,
  "イメージレジストリー"
 ],
 "Image Stream": [
  null,
  "イメージストリーム"
 ],
 "Image commands": [
  null,
  "イメージコマンド"
 ],
 "Images": [
  null,
  "イメージ"
 ],
 "Images by project": [
  null,
  "プロジェクト別イメージ"
 ],
 "Images pushed recently": [
  null,
  "最近プッシュされたイメージ"
 ],
 "In order to begin pushing images to the registry, use the commands below.": [
  null,
  "レジストリーへのイメージのプッシュを開始するには、次のコマンドを使用します。"
 ],
 "In order to begin pushing images to the registry, you need to create a project.": [
  null,
  "レジストリーへのイメージのプッシュを開始するには、プロジェクトを作成する必要があります。"
 ],
 "Interface": [
  null,
  "インターフェース"
 ],
 "Kernel Version": [
  null,
  "Kernel バージョン"
 ],
 "Key Ring Path": [
  null,
  "キーリングパス"
 ],
 "Kubelet Version": [
  null,
  "Kubelet バージョン"
 ],
 "Kubernetes Cluster": [
  null,
  "Kubernetes クラスター"
 ],
 "Labels": [
  null,
  "ラベル"
 ],
 "Last Heartbeat": [
  null,
  "最後のハートビート"
 ],
 "Last Status Change": [
  null,
  "最終ステータス変更"
 ],
 "Latest Version": [
  null,
  "最新バージョン"
 ],
 "Log into OpenShift command line tools:": [
  null,
  "OpenShift コマンドラインツールへのログイン:"
 ],
 "Log into the registry:": [
  null,
  "レジストリーへのログイン:"
 ],
 "Logical Unit Number": [
  null,
  "論理ユニット番号"
 ],
 "Login commands": [
  null,
  "ログインコマンド"
 ],
 "Logs": [
  null,
  "ログ"
 ],
 "Machine ID": [
  null,
  "マシン ID"
 ],
 "Manifest": [
  null,
  "マニフェスト"
 ],
 "Medium": [
  null,
  "普通"
 ],
 "Member of": [
  null,
  "メンバー"
 ],
 "Members": [
  null,
  "メンバー"
 ],
 "Membership": [
  null,
  "メンバーシップ"
 ],
 "Memory": [
  null,
  "メモリ"
 ],
 "Memory Utilization: $0%": [
  null,
  "メモリー使用率: $0%"
 ],
 "Message": [
  null,
  "メッセージ"
 ],
 "Metadata": [
  null,
  "メタデータ"
 ],
 "Modify": [
  null,
  "修正"
 ],
 "Monitors": [
  null,
  "監視"
 ],
 "Mount Location": [
  null,
  "マウント場所"
 ],
 "NFS": [
  null,
  "NFS"
 ],
 "NFS Mount": [
  null,
  "NFS マウント"
 ],
 "Name": [
  null,
  "名前"
 ],
 "Namespace": [
  null,
  "名前空間"
 ],
 "Namespace cannot be empty.": [
  null,
  "名前空間は空欄にできません。"
 ],
 "Network": [
  null,
  "ネットワーク"
 ],
 "New Group": [
  null,
  "新規グループ"
 ],
 "New Project": [
  null,
  "新規プロジェクト"
 ],
 "New image stream": [
  null,
  "新規イメージストリーム"
 ],
 "New project": [
  null,
  "新規プロジェクト"
 ],
 "No": [
  null,
  "いいえ"
 ],
 "No Pods are using this claim": [
  null,
  "このクレームを使用しているポッドがありません"
 ],
 "No Volume Bound": [
  null,
  "ボリュームがバインドされていません"
 ],
 "No groups are present.": [
  null,
  "グループが存在しません。"
 ],
 "No images pushed": [
  null,
  "イメージがプッシュされていません"
 ],
 "No metadata file was selected. Please select a Kubernetes metadata file.": [
  null,
  "メタデータファイルが選択されていません。Kubernetes メタデータファイルを選択してください。"
 ],
 "No nodes in cluster": [
  null,
  "クラスター内にノードがありません"
 ],
 "No pods deployed": [
  null,
  "ポッドがデプロイされていません"
 ],
 "No pods replicated": [
  null,
  "ポッドがレプリケートされていません"
 ],
 "No pods scheduled": [
  null,
  "ポッドがスケジュールされていません"
 ],
 "No pods selected": [
  null,
  "ポッドが選択されていません"
 ],
 "No projects are present.": [
  null,
  "プロジェクトが存在しません。"
 ],
 "No users are present.": [
  null,
  "ユーザーが存在しません。"
 ],
 "No volumes are present.": [
  null,
  "ボリュームが存在しません。"
 ],
 "No volumes in use": [
  null,
  "使用中のボリュームがありません"
 ],
 "Node": [
  null,
  "ノード"
 ],
 "Nodes": [
  null,
  "ノード"
 ],
 "Nodes are the machines that run your containers.": [
  null,
  "ノードはコンテナーを実行するマシンです。"
 ],
 "None": [
  null,
  "なし"
 ],
 "Not Ready": [
  null,
  "準備ができていません"
 ],
 "Not a valid number of replicas": [
  null,
  "レプリカの有効な数ではありません"
 ],
 "Not a valid value for Host": [
  null,
  "ホストの有効な値ではありません"
 ],
 "Not deployed": [
  null,
  "デプロイされていません"
 ],
 "OS": [
  null,
  "OS"
 ],
 "OS Versions": [
  null,
  "OS バージョン"
 ],
 "Operating System": [
  null,
  "オペレーティングシステム"
 ],
 "Options": [
  null,
  "オプション"
 ],
 "Overview": [
  null,
  "概要"
 ],
 "PD Name": [
  null,
  "PD 名"
 ],
 "Partition": [
  null,
  "パーティション"
 ],
 "Password": [
  null,
  "パスワード"
 ],
 "Path": [
  null,
  "パス"
 ],
 "Pending Volume Claims": [
  null,
  "保留中のボリュームクレーム"
 ],
 "Persistent Volumes": [
  null,
  "永続ボリューム"
 ],
 "Phase": [
  null,
  "フェーズ"
 ],
 "Please create another namespace for $0 \"$1\"": [
  null,
  "$0 \"$1\" の別の名前空間を作成してください"
 ],
 "Please provide a GlusterFS volume name": [
  null,
  "GlusterFS ボリューム名を提供してください"
 ],
 "Please provide a username": [
  null,
  "ユーザー名を提供してください"
 ],
 "Please provide a valid NFS server": [
  null,
  "有効な NFS サーバーを提供してください"
 ],
 "Please provide a valid address": [
  null,
  "有効なアドレスを提供してください"
 ],
 "Please provide a valid filesystem type": [
  null,
  "有効なファイルシステムタイプを提供してください"
 ],
 "Please provide a valid interface": [
  null,
  "有効なインターフェースを提供してください"
 ],
 "Please provide a valid logical unit number": [
  null,
  "有効な論理ユニット番号を提供してください"
 ],
 "Please provide a valid name": [
  null,
  "有効な名前を提供してください"
 ],
 "Please provide a valid namespace.": [
  null,
  "有効な名前空間を提供してください"
 ],
 "Please provide a valid path": [
  null,
  "有効なパスを提供してください"
 ],
 "Please provide a valid qualified name": [
  null,
  "有効な修飾名を提供してください"
 ],
 "Please provide a valid storage capacity.": [
  null,
  "有効なストレージ容量を提供してください"
 ],
 "Please provide a valid target": [
  null,
  "有効なターゲットを提供してください"
 ],
 "Please select a valid access mode": [
  null,
  "有効なアクセスモードを選択してください"
 ],
 "Please select a valid endpoint": [
  null,
  "有効なエンドポイントを選択してください"
 ],
 "Please select a valid policy option.": [
  null,
  "有効なポリシーオプションを選択してください"
 ],
 "Please type an address": [
  null,
  "アドレスを入力してください"
 ],
 "Pod": [
  null,
  "ポッド"
 ],
 "Pod Address": [
  null,
  "ポッドアドレス"
 ],
 "Pod Endpoints": [
  null,
  "ポッドエンドポイント"
 ],
 "Pod Replicated": [
  null,
  "ポッドがレプリケートされました"
 ],
 "Pod Selector": [
  null,
  "ポッドセレクター"
 ],
 "Pods": [
  null,
  "ポッド"
 ],
 "Pods contain one or more containers that run together on a node, containing your application code.": [
  null,
  "ポッドには、ノードで一緒に実行される 1 つ以上のコンテナーが含まれます (アプリケーションコードを含む)"
 ],
 "Pool Name": [
  null,
  "プール名"
 ],
 "Populate": [
  null,
  "入力"
 ],
 "Ports": [
  null,
  "ポート"
 ],
 "Private: Allow only specific users or groups to pull images": [
  null,
  "プライベート: 特定のユーザーまたはグループのみがイメージをプルすることを許可する"
 ],
 "Project": [
  null,
  "プロジェクト"
 ],
 "Project Members": [
  null,
  "プロジェクトメンバー"
 ],
 "Project access policy allows anonymous users to pull images.": [
  null,
  "プロジェクトアクセスポリシーにより、匿名ユーザーはイメージをプルすることができます。"
 ],
 "Project access policy allows any authenticated user to pull images.": [
  null,
  "プロジェクトアクセスポリシーにより、認証されたユーザーはイメージをプルすることができます。"
 ],
 "Project access policy only allows specific members to access images.": [
  null,
  "プロジェクトアクセスポリシーにより、特定のメンバーのみがイメージにアクセスできます。"
 ],
 "Project:": [
  null,
  "プロジェクト:"
 ],
 "Projects": [
  null,
  "プロジェクト"
 ],
 "Proxy Version": [
  null,
  "プロキシーバージョン"
 ],
 "Pull an image:": [
  null,
  "イメージのプル:"
 ],
 "Pull from": [
  null,
  "プル対象"
 ],
 "Pull specific tags from another image repository": [
  null,
  "別のイメージリポジトリーから特定のタグをプルします"
 ],
 "Push an image:": [
  null,
  "イメージのプッシュ:"
 ],
 "Qualified Name": [
  null,
  "修飾名"
 ],
 "Rados Block Device": [
  null,
  "Rados ブロックデバイス"
 ],
 "Read Only": [
  null,
  "読み込み専用"
 ],
 "Read and write from a single node": [
  null,
  "単一ノードからの読み書き"
 ],
 "Read and write from multiple nodes": [
  null,
  "複数のノードからの読み書き"
 ],
 "Read only from multiple nodes": [
  null,
  "複数のノードからの読み取り専用"
 ],
 "Ready": [
  null,
  "準備ができています"
 ],
 "Reason": [
  null,
  "理由"
 ],
 "Reclaim Policy": [
  null,
  "リクレームポリシー"
 ],
 "Reconnect": [
  null,
  "再接続"
 ],
 "Recycle": [
  null,
  "リサイクル"
 ],
 "Register": [
  null,
  "登録"
 ],
 "Register New Volume": [
  null,
  "新規ボリュームの登録"
 ],
 "Register Persistent Volume": [
  null,
  "永続ボリュームの登録"
 ],
 "Remote registry is insecure": [
  null,
  "リモートレジストリーは安全ではありません"
 ],
 "Remove": [
  null,
  "削除"
 ],
 "Remove Group": [
  null,
  "グループの削除"
 ],
 "Remove Member": [
  null,
  "メンバーの削除"
 ],
 "Remove Role": [
  null,
  "ロールの削除"
 ],
 "Remove User": [
  null,
  "ユーザーの削除"
 ],
 "Remove image tag": [
  null,
  "イメージタグの削除"
 ],
 "Remove membership": [
  null,
  "メンバーシップの削除"
 ],
 "Replicas": [
  null,
  "レプリカ"
 ],
 "Replication Controller": [
  null,
  "レプリケーションコントローラー"
 ],
 "Replication Controllers": [
  null,
  "レプリケーションコントローラー"
 ],
 "Replication controllers dynamically create instances of pods from templates, and remove pods when necessary.": [
  null,
  "レプリケーションコントローラーにより、テンプレートからポッドのインスタンスが動的に作成され、必要に応じてポッドが削除されます。"
 ],
 "Repository URL": [
  null,
  "リポジトリー URL"
 ],
 "Requested": [
  null,
  "要求者"
 ],
 "Requests": [
  null,
  "要求"
 ],
 "Requires Authentication": [
  null,
  "認証が必要"
 ],
 "Restart Count": [
  null,
  "再起動回数"
 ],
 "Restart Policy": [
  null,
  "再起動ポリシー"
 ],
 "Retain": [
  null,
  "保持"
 ],
 "Revision": [
  null,
  "リビジョン"
 ],
 "Role": [
  null,
  "役職"
 ],
 "Roles": [
  null,
  "ロール"
 ],
 "Route": [
  null,
  "ルート"
 ],
 "Routes": [
  null,
  "ルート"
 ],
 "Scheduled Pods": [
  null,
  "スケジュール済みポッド"
 ],
 "Scheduling Disabled": [
  null,
  "スケジューリングの無効化"
 ],
 "Secret": [
  null,
  "シークレット"
 ],
 "Secret File": [
  null,
  "シークレットファイル"
 ],
 "Secret Name": [
  null,
  "シークレット名"
 ],
 "Secret Volume": [
  null,
  "シークレットボリューム"
 ],
 "Select Manifest File...": [
  null,
  "マニフェストファイルの選択 ..."
 ],
 "Select Member": [
  null,
  ""
 ],
 "Select Role": [
  null,
  ""
 ],
 "Select an object to see more details.": [
  null,
  "オブジェクトを選択して詳細を参照します。"
 ],
 "Server": [
  null,
  "サーバー"
 ],
 "Service": [
  null,
  "サービス"
 ],
 "Service Account": [
  null,
  "サービスアカウント"
 ],
 "Services": [
  null,
  "サービス"
 ],
 "Services group pods and provide a common DNS name and an optional, load-balanced IP address to access them.": [
  null,
  "サービスはポッドをグループ化し、ポッドにアクセスするために共通の DNS 名とオプションのロードバランス IP アドレスを提供します。"
 ],
 "Session Affinity": [
  null,
  "セッションアフィニティー"
 ],
 "Share Name": [
  null,
  "共有名"
 ],
 "Shared: Allow any authenticated user to pull images": [
  null,
  "共有済み: 認証されたユーザーはイメージをプルできます"
 ],
 "Shell": [
  null,
  "シェル"
 ],
 "Show all Containers": [
  null,
  "すべてのコンテナーの表示"
 ],
 "Show all Deployment Configs": [
  null,
  "すべてのデプロイメント設定の表示"
 ],
 "Show all Nodes": [
  null,
  "すべてのノードの表示"
 ],
 "Show all Persistent Volumes": [
  null,
  "すべての永続ボリュームの表示"
 ],
 "Show all Pod Containers": [
  null,
  "すべてのポッドコンテナーの表示"
 ],
 "Show all Pods": [
  null,
  "すべてのポッドの表示"
 ],
 "Show all Projects": [
  null,
  "すべてのプロジェクトの表示"
 ],
 "Show all Replication Controllers": [
  null,
  "すべてのレプリケーションコントローラーの表示"
 ],
 "Show all Routes": [
  null,
  "すべてのルートの表示"
 ],
 "Show all Services": [
  null,
  "すべてのサービスの表示"
 ],
 "Show all image streams": [
  null,
  "すべてのイメージストリームの表示"
 ],
 "Show all images": [
  null,
  "すべてのイメージの表示"
 ],
 "Since": [
  null,
  "以降"
 ],
 "Size": [
  null,
  "Size"
 ],
 "Skip Certificate Verification": [
  null,
  "証明書検証の省略"
 ],
 "Sorry, I don't know how to modify this volume": [
  null,
  "申し訳ありませんが、このボリュームを変更する方法がわかりません"
 ],
 "State": [
  null,
  "状態"
 ],
 "Status": [
  null,
  "状態"
 ],
 "Strategy": [
  null,
  "ストラテジー"
 ],
 "Sync all tags from a remote image repository": [
  null,
  "リモートイメージリポジトリーからすべてのタグを同期"
 ],
 "TLS Termination": [
  null,
  "TLS 終了"
 ],
 "Tags": [
  null,
  "タグ"
 ],
 "Target": [
  null,
  "ターゲット"
 ],
 "Target Portal": [
  null,
  "ターゲットポータル"
 ],
 "Target World Wide Names": [
  null,
  "ターゲットワールドワイド名"
 ],
 "Template": [
  null,
  "テンプレート"
 ],
 "The address contains invalid characters": [
  null,
  "アドレスに無効な文字が含まれています。"
 ],
 "The container '{{ target }}' does not exist.": [
  null,
  "コンテナー '{{ target }}' が存在しません。"
 ],
 "The deployment config '{{ target }}' does not exist.": [
  null,
  "デプロイメント設定 '{{ target }}' が存在しません。"
 ],
 "The group '{{ groupName }}' does not exist.": [
  null,
  "グループ '{{ groupName }}' は存在しません。"
 ],
 "The maximum number of replicas is 128": [
  null,
  "レプリカの最大数は 128 です"
 ],
 "The name contains invalid characters": [
  null,
  "名前に無効な文字が含まれています"
 ],
 "The node '{{ target }}' does not exist.": [
  null,
  "ノード '{{ target }}' が存在しません。"
 ],
 "The node doesn't have enough disk space": [
  null,
  "ノードに十分なディスク領域がありません"
 ],
 "The node doesn't have enough free memory": [
  null,
  "ノードに十分な空きメモリーがありません"
 ],
 "The persistent volume '{{ target }}' does not exist.": [
  null,
  "永続ボリューム '{{ target }}' が存在しません。"
 ],
 "The pod '{{ target }}' does not exist.": [
  null,
  "ポッド '{{ target }}' が存在しません。"
 ],
 "The project '{{ projName }}' does not exist.": [
  null,
  "プロジェクト '{{ projName }}' が存在しません。"
 ],
 "The replication controller '{{ target }}' does not exist.": [
  null,
  "レプリケーションコントローラー '{{ target }}' が存在しません。"
 ],
 "The route '{{ target }}' does not exist.": [
  null,
  "ルート '{{ target }}' が存在しません。"
 ],
 "The selected file is not a valid Kubernetes application manifest.": [
  null,
  "選択されたファイルは有効な Kubernetes アプリケーションマニフェストではありません。"
 ],
 "The server uses a certificate signed by an unknown authority.": [
  null,
  "サーバーは不明な認証局によって署名された証明書を使用します。"
 ],
 "The service '{{ target }}' does not exist.": [
  null,
  "サービス '{{ target }}' は存在しません。"
 ],
 "The user '{{ userName }}' does not exist.": [
  null,
  "ユーザー '{{ userName }}' は存在しません。"
 ],
 "This claim is in use. Deleting it may cause issues with the following pod:": [
  null,
  "このクレームは使用中です。クレームを削除すると、次のポッドで問題が発生することがあります。"
 ],
 "This option is for single node testing only – local storage will not work in a multi-node cluster": [
  null,
  "このオプションは単一ノードのテストにのみ使用できます – ローカルストレージはマルチノードクラスターで動作しません"
 ],
 "This volume has been claimed by {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Deleting it will break that claim and may cause issues with any pods depending on it.": [
  null,
  "このボリュームは {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }} によってクレームされました。このボリュームを削除すると、そのクレームが破損して、依存するすべてのポッドで問題が発生することがあります。"
 ],
 "This volume has not been claimed": [
  null,
  "このボリュームはクレームされていません"
 ],
 "Token": [
  null,
  "トークン"
 ],
 "Topology": [
  null,
  "トポロジー"
 ],
 "Triggers": [
  null,
  "トリガー"
 ],
 "Troubleshoot": [
  null,
  "トラブルシュート"
 ],
 "Trust this certificate for this connection": [
  null,
  "この接続に対してこの証明書を信頼します"
 ],
 "Type": [
  null,
  "タイプ"
 ],
 "Type:": [
  null,
  "種類:"
 ],
 "Unable to decode Kubernetes application manifest.": [
  null,
  "Kubernetes アプリケーションマニフェストをデコードできません。"
 ],
 "Unable to read the Kubernetes application manifest. Code $0.": [
  null,
  "Kubernetes アプリケーションマニフェストを読み取ることができません。コード $0。"
 ],
 "Unavailable": [
  null,
  "利用できません"
 ],
 "Unknown": [
  null,
  "不明"
 ],
 "Updating $0...": [
  null,
  "$0 の更新中 ..."
 ],
 "Used": [
  null,
  "Used"
 ],
 "User": [
  null,
  "ユーザー"
 ],
 "User or Group": [
  null,
  "ユーザーまたはグループ"
 ],
 "Username": [
  null,
  "ユーザー名"
 ],
 "Users": [
  null,
  "ユーザー"
 ],
 "Volume": [
  null,
  "音量"
 ],
 "Volume ID": [
  null,
  "ボリューム ID"
 ],
 "Volume Name": [
  null,
  "ボリューム名"
 ],
 "Volume Type": [
  null,
  "ボリュームタイプ"
 ],
 "Volumes": [
  null,
  "ボリューム"
 ],
 "Warning:": [
  null,
  "警告:"
 ],
 "Welcome to the Image Registry": [
  null,
  "イメージレジストリーへようこそ"
 ],
 "When": [
  null,
  "日付"
 ],
 "Yes": [
  null,
  "はい"
 ],
 "You can bypass the certificate check, but any data you send to the server could be intercepted by others.": [
  null,
  "証明書チェックを省略できますが、サーバーに送信したデータは他者によって取得されることがあります。"
 ],
 "You can deploy an application to your cluster.": [
  null,
  "アプリケーションをクラスターにデプロイできます。"
 ],
 "Your login credentials do not give you access to use the docker registry from the command line.": [
  null,
  "ログイン資格情報は、コマンドラインから docker レジストリーを使用するアクセスを提供しません。"
 ],
 "eg: my-image-stream": [
  null,
  "例: my-image-stream"
 ],
 "no": [
  null,
  "いいえ"
 ],
 "none": [
  null,
  "なし"
 ],
 "pending volume claims": [
  null,
  "保留中のボリュームクレーム"
 ],
 "yes": [
  null,
  "はい"
 ]
}));
