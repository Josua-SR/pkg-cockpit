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
  "language": "zh_TW",
  "x-generator": "Zanata 4.6.2"
 },
 " 1\"Do you want to delete the following Nodes?": [
  null,
  " 1“您要刪除以下節點嗎？"
 ],
 "$0% Free": [
  "$0% Free",
  "$0％ 自由"
 ],
 "$0% Used": [
  "$0% Used",
  "$0％ 用過的"
 ],
 "AWS Elastic Block Store": [
  null,
  "AWS彈性塊存儲"
 ],
 "Access Modes": [
  null,
  "訪問模式"
 ],
 "Access Policy": [
  null,
  "訪問政策"
 ],
 "Actual": [
  null,
  "實際"
 ],
 "Add": [
  null,
  "加入"
 ],
 "Add Cluster Node": [
  null,
  "添加群集節點"
 ],
 "Add Group": [
  null,
  "新增群組"
 ],
 "Add Kubernetes Node": [
  null,
  "添加Kubernetes節點"
 ],
 "Add Member": [
  null,
  "添加會員"
 ],
 "Add Membership": [
  null,
  "添加會員資格"
 ],
 "Add New Cluster": [
  null,
  "添加新群集"
 ],
 "Add New User": [
  null,
  "添加新用戶"
 ],
 "Add Role": [
  null,
  "添加角色"
 ],
 "Add User": [
  null,
  "新增使用者"
 ],
 "Add membership": [
  null,
  "添加會員資格"
 ],
 "Address": [
  null,
  "位址"
 ],
 "Addresses": [
  null,
  "位址"
 ],
 "Adjust": [
  null,
  "調整"
 ],
 "Adjust Persistent Volume '{{ item.metadata.name }}'": [
  null,
  "調整持續音量'{{ item.metadata.name }}“"
 ],
 "Adjust Replication Controller {{ item.metadata.name }}": [
  null,
  "調整復制控制器 {{ item.metadata.name }}"
 ],
 "Adjust Route": [
  null,
  "調整路線"
 ],
 "Adjust Service": [
  null,
  "調整服務"
 ],
 "Admin": [
  null,
  "管理員"
 ],
 "All Projects": [
  null,
  "所有項目"
 ],
 "All Types": [
  null,
  "所有類型"
 ],
 "All healthy": [
  null,
  "一切都很健康"
 ],
 "All images": [
  null,
  "所有圖片"
 ],
 "All in use": [
  null,
  "全部使用"
 ],
 "All running": [
  null,
  "全部運行"
 ],
 "Annotations": [
  null,
  "註釋"
 ],
 "Anonymous: Allow all unauthenticated users to pull images": [
  null,
  "匿名：允許所有未經身份驗證的用戶提取圖像"
 ],
 "Authentication": [
  null,
  "核對"
 ],
 "Azure": [
  null,
  "Azure"
 ],
 "Boot ID": [
  null,
  "引導ID"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU Utilization: $0%": [
  null,
  "CPU利用率： $0％"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Capacity": [
  null,
  "容量"
 ],
 "Ceph Filesystem Mount": [
  null,
  "Ceph文件系統安裝"
 ],
 "Ceph Monitors": [
  null,
  "Ceph監視器"
 ],
 "Change": [
  null,
  "改變"
 ],
 "Change User": [
  null,
  "改變用戶"
 ],
 "Change image stream": [
  null,
  "更改圖像流"
 ],
 "Change project": [
  null,
  "改變項目"
 ],
 "Cinder": [
  null,
  "煤渣"
 ],
 "Claim": [
  null,
  "宣告"
 ],
 "Claim Name": [
  null,
  "索賠名稱"
 ],
 "Client Certificate": [
  null,
  "客戶證書"
 ],
 "Cluster": [
  null,
  "叢集"
 ],
 "Configuration": [
  null,
  "組態"
 ],
 "Configure Flannel networking": [
  null,
  "配置法蘭絨網絡"
 ],
 "Configure Kubelet and Proxy": [
  null,
  "配置Kubelet和代理"
 ],
 "Connect": [
  null,
  "連接"
 ],
 "Connecting...": [
  null,
  "正在連接..."
 ],
 "Connection Error": [
  null,
  "連接錯誤"
 ],
 "Connection Error: $0": [
  null,
  "連接錯誤： $0"
 ],
 "Connection Settings": [
  null,
  "連接設置"
 ],
 "Container": [
  null,
  "容器（Container）"
 ],
 "Container ID": [
  null,
  "容器ID"
 ],
 "Container Runtime Version": [
  null,
  "容器運行時版本"
 ],
 "Containers": [
  null,
  "Container"
 ],
 "Could not list services": [
  null,
  "無法列出服務"
 ],
 "Couldn't connect to server": [
  null,
  "無法連接到服務器"
 ],
 "Couldn't find running API server": [
  null,
  "找不到正在運行的API服務器"
 ],
 "Create": [
  null,
  "建立"
 ],
 "Create empty image stream": [
  null,
  "創建空圖像流"
 ],
 "Create image stream": [
  null,
  "創建圖像流"
 ],
 "Created": [
  null,
  "已建立"
 ],
 "DNS Policy": [
  null,
  "DNS策略"
 ],
 "Delete": [
  null,
  "刪除"
 ],
 "Delete Node": [
  null,
  "刪除節點"
 ],
 "Delete Persistent Volume": [
  null,
  "刪除持久卷"
 ],
 "Delete Persistent Volume Claim": [
  null,
  "刪除持久卷索賠"
 ],
 "Delete Project": [
  null,
  "刪除項目"
 ],
 "Delete Selected": [
  null,
  "刪除已選擇的項目"
 ],
 "Delete image stream": [
  null,
  "刪除圖像流"
 ],
 "Delete {{ item.kind }}": [
  null,
  "刪除 {{ item.kind }}"
 ],
 "Deleting a Pod will kill all associated containers. Pods may be automatically created again in some cases.": [
  null,
  "刪除Pod將終止所有關聯的容器。在某些情況下，可能會再次自動創建窗格。"
 ],
 "Deploy": [
  null,
  "建置"
 ],
 "Deploy Application": [
  null,
  "部署應用程序"
 ],
 "Deployment Causes": [
  null,
  "部署原因"
 ],
 "Deployment Config": [
  null,
  "部署配置"
 ],
 "Deployment Configs": [
  null,
  "部署配置"
 ],
 "Description": [
  null,
  "說明"
 ],
 "Details": [
  null,
  "詳情"
 ],
 "Directory": [
  null,
  "目錄"
 ],
 "Disk": [
  null,
  "磁碟"
 ],
 "Disk Utilization: $0%": [
  null,
  "磁盤利用率： $0％"
 ],
 "Display name": [
  null,
  "顯示名稱"
 ],
 "Do you want to add the role '{{ fields.displayRole }}'?": [
  null,
  "你想添加角色'{{ fields.displayRole }}'？"
 ],
 "Do you want to delete the '{{stream.metadata.namespace}}/{{stream.metadata.name}}' image stream?": [
  null,
  "你想刪除'{{stream.metadata.namespace}}/{{stream.metadata.name}}'圖像流？"
 ],
 "Do you want to delete the Persistent Volume '{{item.metadata.name}}'?": [
  null,
  "要刪除持久卷嗎？{{item.metadata.name}}'？"
 ],
 "Do you want to delete the Persistent Volume Claim '{{item.metadata.name}}'?": [
  null,
  "要刪除持久卷聲明嗎？{{item.metadata.name}}'？"
 ],
 "Do you want to delete the {{ item.kind }} '{{item.metadata.name}}'?": [
  null,
  "你想刪除嗎？ {{ item.kind }} “{{item.metadata.name}}'？"
 ],
 "Do you want to delete this Node?": [
  null,
  "要刪除此節點嗎？"
 ],
 "Do you want to remove the image tagged as '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?": [
  null,
  "要刪除標記為''的圖像嗎？{{stream.metadata.namespace}}/{{stream.metadata.name}}：{{tag.tag}}'？"
 ],
 "Do you want to remove the role '{{ fields.displayRole }}' from member {{ fields.member.metadata.name }}?": [
  null,
  "你想刪除這個角色嗎？{{ fields.displayRole }}'來自會員 {{ fields.member.metadata.name }}？"
 ],
 "Don't pull images automatically": [
  null,
  "不要自動拉圖像"
 ],
 "Driver": [
  null,
  "磁碟"
 ],
 "Empty Directory": [
  null,
  "空目錄"
 ],
 "Endpoint": [
  null,
  "端點"
 ],
 "Endpoint Name": [
  null,
  "端點名稱"
 ],
 "Endpoints": [
  null,
  "端點"
 ],
 "Environment": [
  null,
  "環境"
 ],
 "Error getting certificate details: $0": [
  null,
  "獲取證書詳細信息出錯 $0"
 ],
 "Error writing kubectl config": [
  null,
  "寫kubectl配置時出錯"
 ],
 "Fibre Channel": [
  null,
  "光纖通道"
 ],
 "Filesystem Type": [
  null,
  "文件系統類型"
 ],
 "Flex": [
  null,
  "柔性"
 ],
 "Flocker": [
  null,
  "Flocker"
 ],
 "Flocker Dataset Name": [
  null,
  "植絨數據集名稱"
 ],
 "GCE Persistent Disk": [
  null,
  "GCE持久磁盤"
 ],
 "Git Repository": [
  null,
  "Git存儲庫"
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
  "授予以下特定成員的額外推送或管理員訪問權限。"
 ],
 "Group Members": [
  null,
  "小組成員"
 ],
 "Group or Project": [
  null,
  "小組或項目"
 ],
 "Groups": [
  null,
  "群組"
 ],
 "Host": [
  null,
  "主機"
 ],
 "Host Path": [
  null,
  "主機路徑"
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
  "身份"
 ],
 "Identity": [
  null,
  "身份"
 ],
 "Image": [
  null,
  "影像"
 ],
 "Image ID": [
  null,
  "映像檔 ID"
 ],
 "Image Name": [
  null,
  "圖像名稱"
 ],
 "Image Registry": [
  null,
  "圖像註冊表"
 ],
 "Image Stream": [
  null,
  "圖像流"
 ],
 "Image commands": [
  null,
  "圖像命令"
 ],
 "Images": [
  null,
  "映像檔"
 ],
 "Images by project": [
  null,
  "按項目劃分的圖像"
 ],
 "Images pushed recently": [
  null,
  "圖像最近被推了"
 ],
 "In order to begin pushing images to the registry, use the commands below.": [
  null,
  "要開始將圖像推送到註冊表，請使用以下命令。"
 ],
 "In order to begin pushing images to the registry, you need to create a project.": [
  null,
  "為了開始將圖像推送到註冊表，您需要創建一個項目。"
 ],
 "Interface": [
  null,
  "介面"
 ],
 "Kernel Version": [
  null,
  "內核版本"
 ],
 "Key Ring Path": [
  null,
  "鑰匙環路徑"
 ],
 "Kubelet Version": [
  null,
  "Kubelet版本"
 ],
 "Kubernetes Cluster": [
  null,
  "Kubernetes集群"
 ],
 "Labels": [
  null,
  "標籤"
 ],
 "Last Heartbeat": [
  null,
  "最後的心跳"
 ],
 "Last Status Change": [
  null,
  "上次狀態更改"
 ],
 "Latest Version": [
  null,
  "最新版本"
 ],
 "Log into OpenShift command line tools:": [
  null,
  "登錄OpenShift命令行工具："
 ],
 "Log into the registry:": [
  null,
  "登錄註冊表："
 ],
 "Logical Unit Number": [
  null,
  "邏輯單元號"
 ],
 "Login commands": [
  null,
  "登錄命令"
 ],
 "Logs": [
  null,
  "日誌"
 ],
 "Machine ID": [
  null,
  "機器ID"
 ],
 "Manifest": [
  null,
  "清單"
 ],
 "Medium": [
  null,
  "中"
 ],
 "Member of": [
  null,
  "成員"
 ],
 "Members": [
  null,
  "會員"
 ],
 "Membership": [
  null,
  "成員"
 ],
 "Memory": [
  null,
  "記憶體"
 ],
 "Memory Utilization: $0%": [
  null,
  "內存利用率： $0％"
 ],
 "Message": [
  null,
  "訊息"
 ],
 "Metadata": [
  null,
  "中介資料"
 ],
 "Modify": [
  null,
  "修改"
 ],
 "Monitors": [
  null,
  "顯示器"
 ],
 "Mount Location": [
  null,
  "裝載位置"
 ],
 "NFS": [
  null,
  "NFS"
 ],
 "NFS Mount": [
  null,
  "NFS掛載"
 ],
 "Name": [
  null,
  "名稱"
 ],
 "Namespace": [
  null,
  "命名空間"
 ],
 "Namespace cannot be empty.": [
  null,
  "命名空間不能為空。"
 ],
 "Network": [
  null,
  "網路"
 ],
 "New Group": [
  null,
  "新集團"
 ],
 "New Project": [
  null,
  "新增專案"
 ],
 "New image stream": [
  null,
  "新圖像流"
 ],
 "New project": [
  null,
  "新項目"
 ],
 "No": [
  null,
  "否"
 ],
 "No Pods are using this claim": [
  null,
  "No Pods正在使用此聲明"
 ],
 "No Volume Bound": [
  null,
  "沒有捲限制"
 ],
 "No groups are present.": [
  null,
  "沒有團體在場。"
 ],
 "No images pushed": [
  null,
  "沒有圖像被推送"
 ],
 "No metadata file was selected. Please select a Kubernetes metadata file.": [
  null,
  "未選擇任何元數據文件。請選擇Kubernetes元數據文件。"
 ],
 "No nodes in cluster": [
  null,
  "群集中沒有節點"
 ],
 "No pods deployed": [
  null,
  "沒有部署pod"
 ],
 "No pods replicated": [
  null,
  "沒有豆莢複製"
 ],
 "No pods scheduled": [
  null,
  "沒有安排豆莢"
 ],
 "No pods selected": [
  null,
  "沒有選擇豆莢"
 ],
 "No projects are present.": [
  null,
  "沒有項目存在。"
 ],
 "No users are present.": [
  null,
  "沒有用戶在場。"
 ],
 "No volumes are present.": [
  null,
  "沒有捲。"
 ],
 "No volumes in use": [
  null,
  "沒有正在使用的捲"
 ],
 "Node": [
  null,
  "節點"
 ],
 "Nodes": [
  null,
  "節點"
 ],
 "Nodes are the machines that run your containers.": [
  null,
  "節點是運行容器的機器。"
 ],
 "None": [
  null,
  "沒有"
 ],
 "Not Ready": [
  null,
  "沒有準備好"
 ],
 "Not a valid number of replicas": [
  null,
  "不是有效數量的副本"
 ],
 "Not a valid value for Host": [
  null,
  "不是Host的有效值"
 ],
 "Not deployed": [
  null,
  "未部署"
 ],
 "OS": [
  null,
  "作業系統"
 ],
 "OS Versions": [
  null,
  "OS版本"
 ],
 "Operating System": [
  null,
  "作業系統"
 ],
 "Options": [
  null,
  "選項"
 ],
 "Overview": [
  null,
  "簡介"
 ],
 "PD Name": [
  null,
  "PD名稱"
 ],
 "Partition": [
  null,
  "劃分"
 ],
 "Password": [
  null,
  "密碼"
 ],
 "Path": [
  null,
  "路徑"
 ],
 "Pending Volume Claims": [
  null,
  "待批量索賠"
 ],
 "Persistent Volumes": [
  null,
  "持續卷"
 ],
 "Phase": [
  null,
  "相"
 ],
 "Please create another namespace for $0 \"$1\"": [
  null,
  "請創建另一個命名空間 $0 “$1“"
 ],
 "Please provide a GlusterFS volume name": [
  null,
  "請提供GlusterFS卷名"
 ],
 "Please provide a username": [
  null,
  "請提供用戶名"
 ],
 "Please provide a valid NFS server": [
  null,
  "請提供有效的NFS服務器"
 ],
 "Please provide a valid address": [
  null,
  "請提供有效的地址"
 ],
 "Please provide a valid filesystem type": [
  null,
  "請提供有效的文件系統類型"
 ],
 "Please provide a valid interface": [
  null,
  "請提供有效的界面"
 ],
 "Please provide a valid logical unit number": [
  null,
  "請提供有效的邏輯單元號"
 ],
 "Please provide a valid name": [
  null,
  "請提供有效的姓名"
 ],
 "Please provide a valid namespace.": [
  null,
  "請提供有效的命名空間。"
 ],
 "Please provide a valid path": [
  null,
  "請提供有效路徑"
 ],
 "Please provide a valid qualified name": [
  null,
  "請提供有效的合格名稱"
 ],
 "Please provide a valid storage capacity.": [
  null,
  "請提供有效的存儲容量。"
 ],
 "Please provide a valid target": [
  null,
  "請提供有效的目標"
 ],
 "Please select a valid access mode": [
  null,
  "請選擇有效的訪問模式"
 ],
 "Please select a valid endpoint": [
  null,
  "請選擇有效的端點"
 ],
 "Please select a valid policy option.": [
  null,
  "請選擇有效的政策選項。"
 ],
 "Please type an address": [
  null,
  "請輸入一個地址"
 ],
 "Pod": [
  null,
  "莢"
 ],
 "Pod Address": [
  null,
  "Pod地址"
 ],
 "Pod Endpoints": [
  null,
  "Pod端點"
 ],
 "Pod Replicated": [
  null,
  "Pod複製"
 ],
 "Pod Selector": [
  null,
  "Pod選擇器"
 ],
 "Pods": [
  null,
  "莢"
 ],
 "Pods contain one or more containers that run together on a node, containing your application code.": [
  null,
  "Pod包含一個或多個在節點上一起運行的容器，包含您的應用程序代碼。"
 ],
 "Pool Name": [
  null,
  "池名稱"
 ],
 "Populate": [
  null,
  "填充"
 ],
 "Ports": [
  null,
  "連接埠"
 ],
 "Private: Allow only specific users or groups to pull images": [
  null,
  "專用：僅允許特定用戶或組提取圖像"
 ],
 "Project": [
  null,
  "專案"
 ],
 "Project Members": [
  null,
  "項目成員"
 ],
 "Project access policy allows anonymous users to pull images.": [
  null,
  "項目訪問策略允許匿名用戶提取圖像。"
 ],
 "Project access policy allows any authenticated user to pull images.": [
  null,
  "項目訪問策略允許任何經過身份驗證的用戶提取圖像。"
 ],
 "Project access policy only allows specific members to access images.": [
  null,
  "項目訪問策略僅允許特定成員訪問圖像。"
 ],
 "Project:": [
  null,
  "專案："
 ],
 "Projects": [
  null,
  "專案"
 ],
 "Proxy Version": [
  null,
  "代理版本"
 ],
 "Pull an image:": [
  null,
  "拉圖片："
 ],
 "Pull from": [
  null,
  "從中拉出來"
 ],
 "Pull specific tags from another image repository": [
  null,
  "從另一個圖像存儲庫中提取特定標記"
 ],
 "Push an image:": [
  null,
  "推送圖片："
 ],
 "Qualified Name": [
  null,
  "合格的名稱"
 ],
 "Rados Block Device": [
  null,
  "Rados Block Device"
 ],
 "Read Only": [
  null,
  "唯讀"
 ],
 "Read and write from a single node": [
  null,
  "從單個節點讀取和寫入"
 ],
 "Read and write from multiple nodes": [
  null,
  "從多個節點讀取和寫入"
 ],
 "Read only from multiple nodes": [
  null,
  "只讀多個節點"
 ],
 "Ready": [
  null,
  "已準備好"
 ],
 "Reason": [
  null,
  "理由"
 ],
 "Reclaim Policy": [
  null,
  "回收政策"
 ],
 "Reconnect": [
  null,
  "重新連接"
 ],
 "Recycle": [
  null,
  "回收"
 ],
 "Register": [
  null,
  "註冊"
 ],
 "Register New Volume": [
  null,
  "註冊新卷"
 ],
 "Register Persistent Volume": [
  null,
  "註冊持久卷"
 ],
 "Remote registry is insecure": [
  null,
  "遠程註冊表是不安全的"
 ],
 "Remove": [
  null,
  "移除"
 ],
 "Remove Group": [
  null,
  "移除群組"
 ],
 "Remove Member": [
  null,
  "刪除會員"
 ],
 "Remove Role": [
  null,
  "刪除角色"
 ],
 "Remove User": [
  null,
  "移除使用者"
 ],
 "Remove image tag": [
  null,
  "刪除圖片代碼"
 ],
 "Remove membership": [
  null,
  "刪除會員資格"
 ],
 "Replicas": [
  null,
  "副本"
 ],
 "Replication Controller": [
  null,
  "複製控制器"
 ],
 "Replication Controllers": [
  null,
  "複製控制器"
 ],
 "Replication controllers dynamically create instances of pods from templates, and remove pods when necessary.": [
  null,
  "複製控制器從模板動態創建pod的實例，並在必要時刪除pod。"
 ],
 "Repository URL": [
  null,
  "軟體庫 URL"
 ],
 "Requested": [
  null,
  "要求"
 ],
 "Requests": [
  null,
  "需求"
 ],
 "Requires Authentication": [
  null,
  "需要身份驗證"
 ],
 "Restart Count": [
  null,
  "重啟計數"
 ],
 "Restart Policy": [
  null,
  "重啟政策"
 ],
 "Retain": [
  null,
  "保留"
 ],
 "Revision": [
  null,
  "修訂版"
 ],
 "Role": [
  null,
  "角色"
 ],
 "Roles": [
  null,
  "角色"
 ],
 "Route": [
  null,
  "路線"
 ],
 "Routes": [
  null,
  "路線"
 ],
 "Scheduled Pods": [
  null,
  "預定的豆莢"
 ],
 "Scheduling Disabled": [
  null,
  "調度已禁用"
 ],
 "Secret": [
  null,
  "密"
 ],
 "Secret File": [
  null,
  "秘密檔案"
 ],
 "Secret Name": [
  null,
  "秘密名稱"
 ],
 "Secret Volume": [
  null,
  "秘密卷"
 ],
 "Select Manifest File...": [
  null,
  "選擇清單文件..."
 ],
 "Select Member": [
  null,
  "選擇會員"
 ],
 "Select Role": [
  null,
  "選擇角色"
 ],
 "Select an object to see more details.": [
  null,
  "選擇一個對像以查看更多詳細信息。"
 ],
 "Server": [
  null,
  "伺服器"
 ],
 "Service": [
  null,
  "服務"
 ],
 "Service Account": [
  null,
  "服務帳戶"
 ],
 "Services": [
  null,
  "服務"
 ],
 "Services group pods and provide a common DNS name and an optional, load-balanced IP address to access them.": [
  null,
  "服務組pod並提供通用DNS名稱和可選的負載平衡IP地址以訪問它們。"
 ],
 "Session Affinity": [
  null,
  "會話親和力"
 ],
 "Share Name": [
  null,
  "分享名稱"
 ],
 "Shared: Allow any authenticated user to pull images": [
  null,
  "共享：允許任何經過身份驗證的用戶提取圖像"
 ],
 "Shell": [
  null,
  "Shell 命令列"
 ],
 "Show all Containers": [
  null,
  "顯示所有容器"
 ],
 "Show all Deployment Configs": [
  null,
  "顯示所有部署配置"
 ],
 "Show all Nodes": [
  null,
  "顯示所有節點"
 ],
 "Show all Persistent Volumes": [
  null,
  "顯示所有持久卷"
 ],
 "Show all Pod Containers": [
  null,
  "顯示所有Pod容器"
 ],
 "Show all Pods": [
  null,
  "顯示所有Pods"
 ],
 "Show all Projects": [
  null,
  "顯示所有項目"
 ],
 "Show all Replication Controllers": [
  null,
  "顯示所有復制控制器"
 ],
 "Show all Routes": [
  null,
  "顯示所有路線"
 ],
 "Show all Services": [
  null,
  "顯示所有服務"
 ],
 "Show all image streams": [
  null,
  "顯示所有圖像流"
 ],
 "Show all images": [
  null,
  "顯示所有圖像"
 ],
 "Since": [
  null,
  "以來"
 ],
 "Size": [
  null,
  "大小"
 ],
 "Skip Certificate Verification": [
  null,
  "跳過證書驗證"
 ],
 "Sorry, I don't know how to modify this volume": [
  null,
  "對不起，我不知道如何修改這個卷"
 ],
 "State": [
  null,
  "狀態"
 ],
 "Status": [
  null,
  "狀態"
 ],
 "Strategy": [
  null,
  "戰略"
 ],
 "Sync all tags from a remote image repository": [
  null,
  "同步遠程映像存儲庫中的所有標記"
 ],
 "TLS Termination": [
  null,
  "TLS終止"
 ],
 "Tags": [
  null,
  "標籤"
 ],
 "Target": [
  null,
  "目標"
 ],
 "Target Portal": [
  null,
  "目標門戶"
 ],
 "Target World Wide Names": [
  null,
  "目標全球名稱"
 ],
 "Template": [
  null,
  "範本"
 ],
 "The address contains invalid characters": [
  null,
  "地址包含無效字符"
 ],
 "The container '{{ target }}' does not exist.": [
  null,
  "容器'{{ target }}' 不存在。"
 ],
 "The deployment config '{{ target }}' does not exist.": [
  null,
  "部署配置'{{ target }}' 不存在。"
 ],
 "The group '{{ groupName }}' does not exist.": [
  null,
  "群組 '{{ groupName }}' 不存在。"
 ],
 "The maximum number of replicas is 128": [
  null,
  "副本的最大數量為128"
 ],
 "The name contains invalid characters": [
  null,
  "名字裡含有無效的字符"
 ],
 "The node '{{ target }}' does not exist.": [
  null,
  "節點'{{ target }}' 不存在。"
 ],
 "The node doesn't have enough disk space": [
  null,
  "節點沒有足夠的磁盤空間"
 ],
 "The node doesn't have enough free memory": [
  null,
  "節點沒有足夠的可用內存"
 ],
 "The persistent volume '{{ target }}' does not exist.": [
  null,
  "持久量'{{ target }}' 不存在。"
 ],
 "The pod '{{ target }}' does not exist.": [
  null,
  "豆莢'{{ target }}' 不存在。"
 ],
 "The project '{{ projName }}' does not exist.": [
  null,
  "該項目 '{{ projName }}' 不存在。"
 ],
 "The replication controller '{{ target }}' does not exist.": [
  null,
  "複製控制器'{{ target }}' 不存在。"
 ],
 "The route '{{ target }}' does not exist.": [
  null,
  "路線 '{{ target }}' 不存在。"
 ],
 "The selected file is not a valid Kubernetes application manifest.": [
  null,
  "所選文件不是有效的Kubernetes應用程序清單。"
 ],
 "The server uses a certificate signed by an unknown authority.": [
  null,
  "服務器使用由未知權限簽名的證書。"
 ],
 "The service '{{ target }}' does not exist.": [
  null,
  "服務 '{{ target }}' 不存在。"
 ],
 "The user '{{ userName }}' does not exist.": [
  null,
  "用戶 '{{ userName }}' 不存在。"
 ],
 "This claim is in use. Deleting it may cause issues with the following pod:": [
  null,
  "此聲明正在使用中。刪除它可能會導致以下pod出現問題："
 ],
 "This option is for single node testing only – local storage will not work in a multi-node cluster": [
  null,
  "此選項僅適用於單節點測試 - 本地存儲在多節點群集中不起作用"
 ],
 "This volume has been claimed by {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Deleting it will break that claim and may cause issues with any pods depending on it.": [
  null,
  "本卷已被聲稱 {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}。刪除它會破壞該聲明，並可能導致任何pod的問題，具體取決於它。"
 ],
 "This volume has not been claimed": [
  null,
  "此卷尚未聲明"
 ],
 "Token": [
  null,
  "權杖"
 ],
 "Topology": [
  null,
  "拓撲"
 ],
 "Triggers": [
  null,
  "觸發器"
 ],
 "Troubleshoot": [
  null,
  "疑難排解"
 ],
 "Trust this certificate for this connection": [
  null,
  "信任此證書以獲取此連接"
 ],
 "Type": [
  null,
  "類型"
 ],
 "Type:": [
  null,
  "類型："
 ],
 "Unable to decode Kubernetes application manifest.": [
  null,
  "無法解碼Kubernetes應用程序清單。"
 ],
 "Unable to read the Kubernetes application manifest. Code $0.": [
  null,
  "無法讀取Kubernetes應用程序清單。碼 $0。"
 ],
 "Unavailable": [
  null,
  "無法使用"
 ],
 "Unknown": [
  null,
  "不明"
 ],
 "Updating $0...": [
  null,
  "更新 $0..."
 ],
 "Used": [
  null,
  "已使用"
 ],
 "User": [
  null,
  "使用者"
 ],
 "User or Group": [
  null,
  "使用者或群組"
 ],
 "Username": [
  null,
  "使用者名稱"
 ],
 "Users": [
  null,
  "使用者"
 ],
 "Volume": [
  null,
  "音量"
 ],
 "Volume ID": [
  null,
  "卷ID"
 ],
 "Volume Name": [
  null,
  "卷名"
 ],
 "Volume Type": [
  null,
  "卷類型"
 ],
 "Volumes": [
  null,
  "卷冊"
 ],
 "Warning:": [
  null,
  "警告："
 ],
 "Welcome to the Image Registry": [
  null,
  "歡迎來到Image Registry"
 ],
 "When": [
  null,
  "何時"
 ],
 "Yes": [
  null,
  "是"
 ],
 "You can bypass the certificate check, but any data you send to the server could be intercepted by others.": [
  null,
  "您可以繞過證書檢查，但是您發送到服務器的任何數據都可能被其他人截獲。"
 ],
 "You can deploy an application to your cluster.": [
  null,
  "您可以將應用程序部署到群集。"
 ],
 "Your login credentials do not give you access to use the docker registry from the command line.": [
  null,
  "您的登錄憑據不允許您從命令行使用docker註冊表。"
 ],
 "eg: my-image-stream": [
  null,
  "例如：my-image-stream"
 ],
 "no": [
  null,
  "否"
 ],
 "none": [
  null,
  "none"
 ],
 "pending volume claims": [
  null,
  "待批量索賠"
 ],
 "yes": [
  null,
  "是"
 ]
}));
