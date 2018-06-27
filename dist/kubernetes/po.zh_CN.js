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
  "language": "zh_CN",
  "x-generator": "Zanata 4.4.5"
 },
 " 1\"Do you want to delete the following Nodes?": [
  null,
  " 1\"是否想要删除以下节点？"
 ],
 " or drag & drop.": [
  null,
  ""
 ],
 "$0% Free": [
  "$0% Free",
  "$0% 空闲的"
 ],
 "$0% Used": [
  "$0% Used",
  "$0% 已使用的"
 ],
 "AWS Elastic Block Store": [
  null,
  "AWS 弹性块存储"
 ],
 "Access Modes": [
  null,
  "访问模式"
 ],
 "Access Policy": [
  null,
  "访问策略"
 ],
 "Actual": [
  null,
  "真实的"
 ],
 "Add": [
  null,
  "添加"
 ],
 "Add Cluster Node": [
  null,
  "添加集群节点"
 ],
 "Add Group": [
  null,
  "添加组"
 ],
 "Add Kubernetes Node": [
  null,
  "添加 Kubernetes 节点"
 ],
 "Add Member": [
  null,
  "添加成员"
 ],
 "Add Membership": [
  null,
  "添加成员关系"
 ],
 "Add New Cluster": [
  null,
  "添加新集群"
 ],
 "Add New User": [
  null,
  "添加新用户"
 ],
 "Add Role": [
  null,
  "添加角色"
 ],
 "Add User": [
  null,
  "添加用户"
 ],
 "Add membership": [
  null,
  "添加成员关系"
 ],
 "Address": [
  null,
  "地址"
 ],
 "Addresses": [
  null,
  "地址"
 ],
 "Adjust": [
  null,
  "调整"
 ],
 "Adjust Persistent Volume '{{ item.metadata.name }}'": [
  null,
  "调整持久卷 '{{ item.metadata.name }}'"
 ],
 "Adjust Replication Controller {{ item.metadata.name }}": [
  null,
  "调整复制控制器 {{ item.metadata.name }}"
 ],
 "Adjust Route": [
  null,
  "调整路由"
 ],
 "Adjust Service": [
  null,
  "调整服务"
 ],
 "Admin": [
  null,
  "管理"
 ],
 "All Projects": [
  null,
  "所有项目"
 ],
 "All Types": [
  null,
  "所有类型"
 ],
 "All healthy": [
  null,
  "所有健康的"
 ],
 "All images": [
  null,
  "所有镜像"
 ],
 "All in use": [
  null,
  "所有正在使用的"
 ],
 "All running": [
  null,
  "所有运行的"
 ],
 "Annotations": [
  null,
  "注释"
 ],
 "Anonymous: Allow all unauthenticated users to pull images": [
  null,
  "匿名的：允许所有未鉴定的用户拉取镜像"
 ],
 "Authentication": [
  null,
  "认证"
 ],
 "Azure": [
  null,
  "Azure"
 ],
 "Boot ID": [
  null,
  "启动编号"
 ],
 "Bus": [
  null,
  "总线"
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
  "取消"
 ],
 "Capacity": [
  null,
  "容量"
 ],
 "Ceph Filesystem Mount": [
  null,
  "Ceph 文件系统挂载"
 ],
 "Ceph Monitors": [
  null,
  "Ceph 监视器"
 ],
 "Change": [
  null,
  "变更"
 ],
 "Change User": [
  null,
  "变更用户"
 ],
 "Change image stream": [
  null,
  "变更镜像流"
 ],
 "Change project": [
  null,
  "变更项目"
 ],
 "Cinder": [
  null,
  "Cinder"
 ],
 "Claim": [
  null,
  "声明"
 ],
 "Claim Name": [
  null,
  "声明名称"
 ],
 "Client Certificate": [
  null,
  "客户端证书"
 ],
 "Cluster": [
  null,
  "集群"
 ],
 "Configuration": [
  null,
  "配置"
 ],
 "Configure Flannel networking": [
  null,
  "配置 Flannel 网络"
 ],
 "Configure Kubelet and Proxy": [
  null,
  "配置 Kubelet 和代理"
 ],
 "Connect": [
  null,
  "连接"
 ],
 "Connecting...": [
  null,
  "连接中..."
 ],
 "Connection Error": [
  null,
  "连接错误"
 ],
 "Connection Error: $0": [
  null,
  "连接错误: $0"
 ],
 "Connection Settings": [
  null,
  "连接设置"
 ],
 "Container": [
  null,
  "容器"
 ],
 "Container ID": [
  null,
  "容器编号"
 ],
 "Container Runtime Version": [
  null,
  "容器运行时版本"
 ],
 "Containers": [
  null,
  "容器"
 ],
 "Could not list services": [
  null,
  "无法罗列服务"
 ],
 "Couldn't connect to server": [
  null,
  "无法连接到服务器"
 ],
 "Couldn't find running API server": [
  null,
  "无法找到运行的 API 服务器"
 ],
 "Count:": [
  null,
  "计数："
 ],
 "Create": [
  null,
  "创建"
 ],
 "Create Virtual Machine": [
  null,
  ""
 ],
 "Create empty image stream": [
  null,
  "创建空镜像流"
 ],
 "Create image stream": [
  null,
  "创建镜像流"
 ],
 "Created": [
  null,
  "创建于"
 ],
 "DNS Policy": [
  null,
  "DNS 策略"
 ],
 "Delete": [
  null,
  "删除"
 ],
 "Delete Node": [
  null,
  "删除节点"
 ],
 "Delete Persistent Volume": [
  null,
  "删除持久卷"
 ],
 "Delete Persistent Volume Claim": [
  null,
  "删除持久卷声明"
 ],
 "Delete Project": [
  null,
  "删除项目"
 ],
 "Delete Selected": [
  null,
  "删除所选的"
 ],
 "Delete image stream": [
  null,
  "删除镜像流"
 ],
 "Delete {{ item.kind }}": [
  null,
  "删除 {{ item.kind }}"
 ],
 "Deleting a Pod will kill all associated containers. Pods may be automatically created again in some cases.": [
  null,
  "删除容器舱将会杀掉所有相关的容器。容器舱也许会在某些情况下被自动创建。"
 ],
 "Deploy": [
  null,
  "部署"
 ],
 "Deploy Application": [
  null,
  "部署应用"
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
  "描述"
 ],
 "Details": [
  null,
  "详情"
 ],
 "Device": [
  null,
  "设备"
 ],
 "Directory": [
  null,
  "目录"
 ],
 "Disk": [
  null,
  "磁盘"
 ],
 "Disk Utilization: $0%": [
  null,
  "磁盘使用率: $0%"
 ],
 "Disks": [
  null,
  "磁盘"
 ],
 "Display name": [
  null,
  "显示名称"
 ],
 "Do you want to add the role '{{ fields.displayRole }}'?": [
  null,
  "是否想要添加角色 '{{ fields.displayRole }}'？"
 ],
 "Do you want to delete the '{{stream.metadata.namespace}}/{{stream.metadata.name}}' image stream?": [
  null,
  "是否想要删除镜像流 '{{stream.metadata.namespace}}/{{stream.metadata.name}}' ？"
 ],
 "Do you want to delete the Persistent Volume '{{item.metadata.name}}'?": [
  null,
  "是否想要删除持久卷 '{{item.metadata.name}}'？"
 ],
 "Do you want to delete the Persistent Volume Claim '{{item.metadata.name}}'?": [
  null,
  "是否想要删除持久卷声明 '{{item.metadata.name}}'？"
 ],
 "Do you want to delete the {{ item.kind }} '{{item.metadata.name}}'?": [
  null,
  "是否想要删除 {{ item.kind }} '{{item.metadata.name}}'？"
 ],
 "Do you want to delete this Node?": [
  null,
  "是否想要删除该节点？"
 ],
 "Do you want to remove the image tagged as '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?": [
  null,
  "是否想要移除镜像标记 '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'？"
 ],
 "Do you want to remove the role '{{ fields.displayRole }}' from member {{ fields.member.metadata.name }}?": [
  null,
  "是否想要从成员 {{ fields.member.metadata.name }} 移除角色 '{{ fields.displayRole }}'？"
 ],
 "Don't pull images automatically": [
  null,
  "不自动拉取镜像"
 ],
 "Driver": [
  null,
  "驱动器"
 ],
 "Drop file here to upload.": [
  null,
  ""
 ],
 "Empty Directory": [
  null,
  "空目录"
 ],
 "Endpoint": [
  null,
  "端点"
 ],
 "Endpoint Name": [
  null,
  "端点名称"
 ],
 "Endpoints": [
  null,
  "端点"
 ],
 "Environment": [
  null,
  "环境变量"
 ],
 "Error getting certificate details: $0": [
  null,
  "获取证书详情出错: $0"
 ],
 "Error writing kubectl config": [
  null,
  "写 kubectl 配置时出错"
 ],
 "Fibre Channel": [
  null,
  "光纤通道"
 ],
 "Filesystem Type": [
  null,
  "文件系统类型"
 ],
 "Flex": [
  null,
  "收缩"
 ],
 "Flocker": [
  null,
  "Flocker"
 ],
 "Flocker Dataset Name": [
  null,
  "Flocker 数据集名称"
 ],
 "Free": [
  null,
  "可用"
 ],
 "GCE Persistent Disk": [
  null,
  "GCE 持久盘"
 ],
 "GiB": [
  null,
  ""
 ],
 "Git Repository": [
  null,
  "Git 仓库"
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
  "授权额外的推送或管理员权限来指定以下成员。"
 ],
 "Group Members": [
  null,
  "组成员"
 ],
 "Group or Project": [
  null,
  "组或项目"
 ],
 "Groups": [
  null,
  "组"
 ],
 "Host": [
  null,
  "主机"
 ],
 "Host Path": [
  null,
  "主机路径"
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
  "镜像"
 ],
 "Image ID": [
  null,
  "镜像编号"
 ],
 "Image Name": [
  null,
  "镜像名称"
 ],
 "Image Registry": [
  null,
  "镜像注册表"
 ],
 "Image Stream": [
  null,
  "镜像流"
 ],
 "Image commands": [
  null,
  "镜像命令"
 ],
 "Images": [
  null,
  "镜像"
 ],
 "Images by project": [
  null,
  "镜像（按项目）"
 ],
 "Images pushed recently": [
  null,
  "最近推送的镜像"
 ],
 "In order to begin pushing images to the registry, use the commands below.": [
  null,
  "为了开始推送镜像到注册表，使用以下命令。"
 ],
 "In order to begin pushing images to the registry, you need to create a project.": [
  null,
  "为了开始推送镜像到注册表，需要创建一个项目。"
 ],
 "Interface": [
  null,
  "接口"
 ],
 "Kernel Version": [
  null,
  "内核版本"
 ],
 "Key Ring Path": [
  null,
  "密钥环路径"
 ],
 "Kubelet Version": [
  null,
  "Kubelet 版本"
 ],
 "Kubernetes Cluster": [
  null,
  "Kubernetes 集群"
 ],
 "Labels": [
  null,
  "标签"
 ],
 "Labels:": [
  null,
  ""
 ],
 "Last Heartbeat": [
  null,
  "最近的保活心跳"
 ],
 "Last Status Change": [
  null,
  "最近的状态变更"
 ],
 "Latest Version": [
  null,
  "最近的版本"
 ],
 "Log into OpenShift command line tools:": [
  null,
  "登录到 OpenShift 命令行工具："
 ],
 "Log into the registry:": [
  null,
  "登录到注册表："
 ],
 "Logical Unit Number": [
  null,
  "逻辑单元编号"
 ],
 "Login commands": [
  null,
  "登录命令"
 ],
 "Logs": [
  null,
  "日志"
 ],
 "Machine ID": [
  null,
  "机器编号"
 ],
 "Manifest": [
  null,
  "清单"
 ],
 "Medium": [
  null,
  "媒介"
 ],
 "Member of": [
  null,
  "属于"
 ],
 "Members": [
  null,
  "成员"
 ],
 "Membership": [
  null,
  "成员关系"
 ],
 "Memory": [
  null,
  "内存"
 ],
 "Memory Utilization: $0%": [
  null,
  "Memory 使用率: $0%"
 ],
 "Memory:": [
  null,
  "内存："
 ],
 "Message": [
  null,
  "消息"
 ],
 "Metadata": [
  null,
  "元数据"
 ],
 "Modify": [
  null,
  "修改"
 ],
 "Monitors": [
  null,
  "监视器"
 ],
 "Mount Location": [
  null,
  "挂载位置"
 ],
 "N/A": [
  null,
  ""
 ],
 "NFS": [
  null,
  "NFS"
 ],
 "NFS Mount": [
  null,
  "NFS 挂载"
 ],
 "Name": [
  null,
  "名称"
 ],
 "Namespace": [
  null,
  "名称空间"
 ],
 "Namespace cannot be empty.": [
  null,
  "命名空间不能为空."
 ],
 "Network": [
  null,
  "网络"
 ],
 "New Group": [
  null,
  "新建组"
 ],
 "New Project": [
  null,
  "新建项目"
 ],
 "New image stream": [
  null,
  "新建镜像流"
 ],
 "New project": [
  null,
  "新建项目"
 ],
 "No": [
  null,
  "否"
 ],
 "No Pods are using this claim": [
  null,
  "没有容器舱使用该声明"
 ],
 "No Volume Bound": [
  null,
  "未绑定卷"
 ],
 "No disks defined for this VM": [
  null,
  "没有为该虚拟机定义磁盘"
 ],
 "No groups are present.": [
  null,
  "没有组用于显示。"
 ],
 "No images pushed": [
  null,
  "没有推送的镜像"
 ],
 "No metadata file was selected. Please select a Kubernetes metadata file.": [
  null,
  "未选择元数据文件. 请选择一个 Kubernetes 元数据文件."
 ],
 "No nodes in cluster": [
  null,
  "集群中没有节点"
 ],
 "No pods deployed": [
  null,
  "没有部署的容器舱"
 ],
 "No pods replicated": [
  null,
  "没有复制的容器舱"
 ],
 "No pods scheduled": [
  null,
  "没有被调度的容器舱"
 ],
 "No pods selected": [
  null,
  "没有选中的容器舱"
 ],
 "No projects are present.": [
  null,
  "没有项目用于显示。"
 ],
 "No users are present.": [
  null,
  "没有用户用于显示。"
 ],
 "No virtual machines": [
  null,
  ""
 ],
 "No volumes are present.": [
  null,
  "没有卷用于显示。"
 ],
 "No volumes in use": [
  null,
  "没有正在使用的卷"
 ],
 "Node": [
  null,
  "节点"
 ],
 "Node:": [
  null,
  ""
 ],
 "Nodes": [
  null,
  "节点"
 ],
 "Nodes are the machines that run your containers.": [
  null,
  "节点是运行容器的主机。"
 ],
 "None": [
  null,
  "无"
 ],
 "Not Available": [
  null,
  ""
 ],
 "Not Ready": [
  null,
  "未就绪"
 ],
 "Not a valid number of replicas": [
  null,
  "副本不是一个有效数字"
 ],
 "Not a valid value for Host": [
  null,
  "无效的主机值"
 ],
 "Not deployed": [
  null,
  "未部署"
 ],
 "OS": [
  null,
  "操作系统"
 ],
 "OS Versions": [
  null,
  "操作系统版本"
 ],
 "Ok": [
  null,
  "确认"
 ],
 "Only files of size $0 MiB and less are supported": [
  null,
  ""
 ],
 "Operating System": [
  null,
  "操作系统"
 ],
 "Options": [
  null,
  "选项"
 ],
 "Overview": [
  null,
  "概览"
 ],
 "PD Name": [
  null,
  "持久盘名称"
 ],
 "Partition": [
  null,
  "分区"
 ],
 "Password": [
  null,
  "密码"
 ],
 "Paste JSON below, ": [
  null,
  ""
 ],
 "Path": [
  null,
  "路径"
 ],
 "Pending Volume Claims": [
  null,
  "挂起的卷声明"
 ],
 "Persistent Volumes": [
  null,
  "持久卷"
 ],
 "Phase": [
  null,
  "阶段"
 ],
 "Please create another namespace for $0 \"$1\"": [
  null,
  "请重新为 $0 创建一个命名空间 \"$1\""
 ],
 "Please provide a GlusterFS volume name": [
  null,
  "请提供一个 GlusterFS 卷名称"
 ],
 "Please provide a username": [
  null,
  "请提供一个用户名"
 ],
 "Please provide a valid NFS server": [
  null,
  "请提供一个有效的 NFS 服务器"
 ],
 "Please provide a valid address": [
  null,
  "请提供一个有效的地址"
 ],
 "Please provide a valid filesystem type": [
  null,
  "请提供一个有效的文件系统类型"
 ],
 "Please provide a valid interface": [
  null,
  "请提供一个有效的接口"
 ],
 "Please provide a valid logical unit number": [
  null,
  "请提供一个有效的逻辑单元编号"
 ],
 "Please provide a valid name": [
  null,
  "请提供有效的名称"
 ],
 "Please provide a valid namespace.": [
  null,
  "请提供有效的命名空间."
 ],
 "Please provide a valid path": [
  null,
  "请提供一个有效的路径"
 ],
 "Please provide a valid qualified name": [
  null,
  "请提供一个有效的限定名"
 ],
 "Please provide a valid storage capacity.": [
  null,
  "请提供有效的存储容量。"
 ],
 "Please provide a valid target": [
  null,
  "请提供一个有效的目标"
 ],
 "Please select a valid access mode": [
  null,
  "请选择有效的访问模式"
 ],
 "Please select a valid endpoint": [
  null,
  "请选择有效的端点"
 ],
 "Please select a valid policy option.": [
  null,
  "请选择有效的策略选项。"
 ],
 "Please type an address": [
  null,
  "请输入一个地址"
 ],
 "Pod": [
  null,
  "容器舱"
 ],
 "Pod Address": [
  null,
  "容器舱地址"
 ],
 "Pod Endpoints": [
  null,
  "容器舱端点"
 ],
 "Pod Replicated": [
  null,
  "复制的容器舱"
 ],
 "Pod Selector": [
  null,
  "容器舱选择器"
 ],
 "Pod:": [
  null,
  ""
 ],
 "Pods": [
  null,
  "容器舱"
 ],
 "Pods contain one or more containers that run together on a node, containing your application code.": [
  null,
  "容器舱包含一个或多个运行在同一节点上包含应用代码的容器。"
 ],
 "Pool Name": [
  null,
  "池名称"
 ],
 "Populate": [
  null,
  "填入"
 ],
 "Ports": [
  null,
  "端口"
 ],
 "Private: Allow only specific users or groups to pull images": [
  null,
  "私有的：仅允许指定用户或组拉取镜像"
 ],
 "Project": [
  null,
  "项目"
 ],
 "Project Members": [
  null,
  "项目成员"
 ],
 "Project access policy allows anonymous users to pull images.": [
  null,
  "项目访问策略允许任何用户拉取镜像。"
 ],
 "Project access policy allows any authenticated user to pull images.": [
  null,
  "项目访问策略允许任何认证的用户拉取镜像。"
 ],
 "Project access policy only allows specific members to access images.": [
  null,
  "项目访问策略允许指定的用户拉取镜像。"
 ],
 "Project:": [
  null,
  "项目:"
 ],
 "Projects": [
  null,
  "项目"
 ],
 "Proxy Version": [
  null,
  "代理版本"
 ],
 "Pull an image:": [
  null,
  "拉取镜像:"
 ],
 "Pull from": [
  null,
  "拉取自"
 ],
 "Pull specific tags from another image repository": [
  null,
  "从另一个镜像仓库拉取指定标记"
 ],
 "Push an image:": [
  null,
  "推送镜像:"
 ],
 "Qualified Name": [
  null,
  "限定名"
 ],
 "Rados Block Device": [
  null,
  "Rados 块设备"
 ],
 "Read Only": [
  null,
  "只读"
 ],
 "Read and write from a single node": [
  null,
  "从单节点读和写"
 ],
 "Read and write from multiple nodes": [
  null,
  "从多节点读和写"
 ],
 "Read only from multiple nodes": [
  null,
  "仅从多节点读"
 ],
 "Readonly": [
  null,
  "只读"
 ],
 "Ready": [
  null,
  "就绪"
 ],
 "Reason": [
  null,
  "原因"
 ],
 "Reclaim Policy": [
  null,
  "重新声明策略"
 ],
 "Reconnect": [
  null,
  "重新连接"
 ],
 "Recycle": [
  null,
  "回收"
 ],
 "Register": [
  null,
  "注册"
 ],
 "Register New Volume": [
  null,
  "注册新卷"
 ],
 "Register Persistent Volume": [
  null,
  "注册持久卷"
 ],
 "Remote registry is insecure": [
  null,
  "远程注册表不安全"
 ],
 "Remove": [
  null,
  "删除"
 ],
 "Remove Group": [
  null,
  "移除组"
 ],
 "Remove Member": [
  null,
  "移除成员"
 ],
 "Remove Role": [
  null,
  "移除角色"
 ],
 "Remove User": [
  null,
  "移除用户"
 ],
 "Remove image tag": [
  null,
  "移除镜像标记"
 ],
 "Remove membership": [
  null,
  "移除成员关系"
 ],
 "Replicas": [
  null,
  "复用"
 ],
 "Replication Controller": [
  null,
  "复制控制器"
 ],
 "Replication Controllers": [
  null,
  "复制控制器"
 ],
 "Replication controllers dynamically create instances of pods from templates, and remove pods when necessary.": [
  null,
  "复制控制器动态地从模板创建容器舱实例，并且在必要的时候移除容器舱。"
 ],
 "Repository URL": [
  null,
  "仓库网址"
 ],
 "Requested": [
  null,
  "请求的"
 ],
 "Requests": [
  null,
  "请求"
 ],
 "Requires Authentication": [
  null,
  "需要认证"
 ],
 "Resolve above errors to continue": [
  null,
  ""
 ],
 "Restart Count": [
  null,
  "重启次数"
 ],
 "Restart Policy": [
  null,
  "重启策略"
 ],
 "Retain": [
  null,
  "留存"
 ],
 "Revision": [
  null,
  "修订"
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
  "路由"
 ],
 "Routes": [
  null,
  "路由"
 ],
 "Scheduled Pods": [
  null,
  "被调度的容器舱"
 ],
 "Scheduling Disabled": [
  null,
  "调度被禁用"
 ],
 "Secret": [
  null,
  "口令"
 ],
 "Secret File": [
  null,
  "口令文件"
 ],
 "Secret Name": [
  null,
  "口令名称"
 ],
 "Secret Volume": [
  null,
  "口令卷"
 ],
 "Select Manifest File...": [
  null,
  "选择 Manifest 文件..."
 ],
 "Select an object to see more details.": [
  null,
  "选择一个对象来查看更多详情。"
 ],
 "Server": [
  null,
  "服务器"
 ],
 "Service": [
  null,
  "服务"
 ],
 "Service Account": [
  null,
  "服务账号"
 ],
 "Services": [
  null,
  "服务"
 ],
 "Services group pods and provide a common DNS name and an optional, load-balanced IP address to access them.": [
  null,
  "服务组织容器舱并提供一个通用DNS名称和一个可选的负载均衡的IP地址来访问它们。"
 ],
 "Session": [
  null,
  "会话"
 ],
 "Session Affinity": [
  null,
  "会话关联"
 ],
 "Share Name": [
  null,
  "共享名称"
 ],
 "Shared: Allow any authenticated user to pull images": [
  null,
  "共享的：运行任何已认证的用户拉取镜像"
 ],
 "Shell": [
  null,
  "Shell"
 ],
 "Show all Containers": [
  null,
  "显示所有容器"
 ],
 "Show all Deployment Configs": [
  null,
  "显示所有部署配置"
 ],
 "Show all Nodes": [
  null,
  "显示所有节点"
 ],
 "Show all Persistent Volumes": [
  null,
  "显示所有持久卷"
 ],
 "Show all Pod Containers": [
  null,
  "显示所有容器舱容器"
 ],
 "Show all Pods": [
  null,
  "显示所有容器舱"
 ],
 "Show all Projects": [
  null,
  "显示所有项目"
 ],
 "Show all Replication Controllers": [
  null,
  "显示所有复制控制器"
 ],
 "Show all Routes": [
  null,
  "显示所有路由"
 ],
 "Show all Services": [
  null,
  "显示所有服务"
 ],
 "Show all image streams": [
  null,
  "显示所有镜像流"
 ],
 "Show all images": [
  null,
  "显示所有镜像"
 ],
 "Since": [
  null,
  "自从"
 ],
 "Size": [
  null,
  "大小"
 ],
 "Skip Certificate Verification": [
  null,
  "跳过证书验证"
 ],
 "Sorry, I don't know how to modify this volume": [
  null,
  "抱歉，不知道如何修改该卷"
 ],
 "Source": [
  null,
  "源"
 ],
 "State": [
  null,
  "状态"
 ],
 "Status": [
  null,
  "状态"
 ],
 "Strategy": [
  null,
  "策略"
 ],
 "Sync all tags from a remote image repository": [
  null,
  "从远程镜像仓库同步所有标记"
 ],
 "System": [
  null,
  "系统"
 ],
 "TLS Termination": [
  null,
  "TLS 终止协议"
 ],
 "Tags": [
  null,
  "标记"
 ],
 "Target": [
  null,
  "目标"
 ],
 "Target Portal": [
  null,
  "目标门户"
 ],
 "Target World Wide Names": [
  null,
  "目标全球通用名称"
 ],
 "Template": [
  null,
  "模板"
 ],
 "The address contains invalid characters": [
  null,
  "地址包含无效字符"
 ],
 "The container '{{ target }}' does not exist.": [
  null,
  "容器 '{{ target }}' 不存在。"
 ],
 "The deployment config '{{ target }}' does not exist.": [
  null,
  "部署配置 '{{ target }}' 不存在。"
 ],
 "The group '{{ groupName }}' does not exist.": [
  null,
  "组 '{{ groupName }}' 不存在。"
 ],
 "The maximum number of replicas is 128": [
  null,
  "副本最大数量为 128"
 ],
 "The name contains invalid characters": [
  null,
  "名称包含无效的字符"
 ],
 "The node '{{ target }}' does not exist.": [
  null,
  "节点 '{{ target }}' 不存在。"
 ],
 "The node doesn't have enough disk space": [
  null,
  "节点没有足够的磁盘空间"
 ],
 "The node doesn't have enough free memory": [
  null,
  "节点没有足够的空闲内存"
 ],
 "The persistent volume '{{ target }}' does not exist.": [
  null,
  "持久卷 '{{ target }}' 不存在。"
 ],
 "The pod '{{ target }}' does not exist.": [
  null,
  "容器舱 '{{ target }}' 不存在。"
 ],
 "The project '{{ projName }}' does not exist.": [
  null,
  "项目 '{{ projName }}' 不存在。"
 ],
 "The replication controller '{{ target }}' does not exist.": [
  null,
  "复制控制器 '{{ target }}' 不存在。"
 ],
 "The route '{{ target }}' does not exist.": [
  null,
  "路由 '{{ target }}' 不存在。"
 ],
 "The selected file is not a valid Kubernetes application manifest.": [
  null,
  "所选的文件不是有效的 Kubernetes 应用程序清单."
 ],
 "The server uses a certificate signed by an unknown authority.": [
  null,
  "服务器使用率一个通过未知机构签名的证书。"
 ],
 "The service '{{ target }}' does not exist.": [
  null,
  "服务 '{{ target }}' 不存在。"
 ],
 "The user '{{ userName }}' does not exist.": [
  null,
  "用户 '{{ userName }}' 不存在。"
 ],
 "This claim is in use. Deleting it may cause issues with the following pod:": [
  null,
  "该声明正在使用。删除它也许会对以下容器舱产生影响:"
 ],
 "This option is for single node testing only – local storage will not work in a multi-node cluster": [
  null,
  "该选项是仅为单节点测试 – 本地存储，将在多节点集群中不工作"
 ],
 "This volume has been claimed by {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Deleting it will break that claim and may cause issues with any pods depending on it.": [
  null,
  "该卷已经被 {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }} 声明。删除它将会损坏该声明并且也许会对依赖于它的容器舱尝试影响。"
 ],
 "This volume has not been claimed": [
  null,
  "该卷未被声明"
 ],
 "Token": [
  null,
  "令牌"
 ],
 "Topology": [
  null,
  "拓扑"
 ],
 "Triggers": [
  null,
  "触发器"
 ],
 "Troubleshoot": [
  null,
  "排错"
 ],
 "Trust this certificate for this connection": [
  null,
  "为该连接信任该证书"
 ],
 "Type": [
  null,
  "类型"
 ],
 "Type:": [
  null,
  "类型:"
 ],
 "Unable to decode Kubernetes application manifest.": [
  null,
  "无法解码 Kubernetes 应用清单。"
 ],
 "Unable to read the Kubernetes application manifest. Code $0.": [
  null,
  "无法读取 Kubernetes 应用程序清单. 代码 $0."
 ],
 "Unavailable": [
  null,
  "不可用"
 ],
 "Unknown": [
  null,
  "未知"
 ],
 "Updating $0...": [
  null,
  "更新 $0..."
 ],
 "Usage": [
  null,
  "使用情况"
 ],
 "Usage metrics are available after the pod starts": [
  null,
  ""
 ],
 "Used": [
  null,
  "已使用"
 ],
 "User": [
  null,
  "用户"
 ],
 "User or Group": [
  null,
  "用户或组"
 ],
 "Username": [
  null,
  "用户名"
 ],
 "Users": [
  null,
  "用户"
 ],
 "VM DELETE failed.": [
  null,
  ""
 ],
 "VM definition is not a valid JSON.": [
  null,
  ""
 ],
 "VM definition is required.": [
  null,
  ""
 ],
 "VM definition must be an object.": [
  null,
  ""
 ],
 "Virtual Machines": [
  null,
  "虚拟机"
 ],
 "Volume": [
  null,
  "卷"
 ],
 "Volume ID": [
  null,
  "卷编号"
 ],
 "Volume Name": [
  null,
  "卷名称"
 ],
 "Volume Type": [
  null,
  "卷类型"
 ],
 "Volumes": [
  null,
  "卷"
 ],
 "Warning:": [
  null,
  "警告:"
 ],
 "Welcome to the Image Registry": [
  null,
  "欢迎使用镜像注册表"
 ],
 "When": [
  null,
  "当"
 ],
 "Yes": [
  null,
  "是"
 ],
 "You can bypass the certificate check, but any data you send to the server could be intercepted by others.": [
  null,
  "可以通过证书检查，但是发送到服务器的任何数据可能被其他人拦截。"
 ],
 "You can deploy an application to your cluster.": [
  null,
  "可以部署一个应用到集群中。"
 ],
 "Your login credentials do not give you access to use the docker registry from the command line.": [
  null,
  "登录凭证没有从命令行使用 Docker 注册表的权限"
 ],
 "bridge": [
  null,
  ""
 ],
 "cdrom": [
  null,
  "光驱"
 ],
 "crashed": [
  null,
  "已崩溃"
 ],
 "custom": [
  null,
  "自定义"
 ],
 "direct": [
  null,
  ""
 ],
 "disabled": [
  null,
  "已禁用"
 ],
 "disk": [
  null,
  "磁盘"
 ],
 "down": [
  null,
  "已关闭"
 ],
 "dying": [
  null,
  "失活的"
 ],
 "eg: my-image-stream": [
  null,
  "例如：my-image-stream"
 ],
 "enabled": [
  null,
  "已启用"
 ],
 "ethernet": [
  null,
  ""
 ],
 "host": [
  null,
  "主机"
 ],
 "hostdev": [
  null,
  ""
 ],
 "iSCSI": [
  null,
  ""
 ],
 "idle": [
  null,
  "休眠的"
 ],
 "mcast": [
  null,
  ""
 ],
 "n/a": [
  null,
  ""
 ],
 "network": [
  null,
  "网络"
 ],
 "no": [
  null,
  "否"
 ],
 "none": [
  null,
  "空"
 ],
 "paused": [
  null,
  "已暂停"
 ],
 "pending volume claims": [
  null,
  "挂起的卷声明"
 ],
 "running": [
  null,
  "运行中"
 ],
 "server": [
  null,
  ""
 ],
 "show less": [
  null,
  ""
 ],
 "show more": [
  null,
  ""
 ],
 "shut off": [
  null,
  "关闭"
 ],
 "shutdown": [
  null,
  "关机"
 ],
 "suspended (PM)": [
  null,
  "已挂起 （电源管理）"
 ],
 "udp": [
  null,
  ""
 ],
 "up": [
  null,
  "运行中"
 ],
 "upload a JSON file": [
  null,
  ""
 ],
 "user": [
  null,
  ""
 ],
 "vCPUs:": [
  null,
  "虚拟 CPU："
 ],
 "vhostuser": [
  null,
  ""
 ],
 "yes": [
  null,
  "是"
 ]
}));
