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
  "language": "zh-CN",
  "x-generator": "Zanata 3.9.6"
 },
 " (shared with the OS)": [
  null,
  " (与操作系统共享)"
 ],
 "$0 day": [
  "$0 days",
  "$0 天"
 ],
 "$0 hour": [
  "$0 hours",
  "$0 小时"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 分钟"
 ],
 "$0 month": [
  "$0 months",
  "$0 月"
 ],
 "$0 shares": [
  null,
  "$0 共享"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 周"
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
  "添加额外的存储"
 ],
 "Add Storage": [
  null,
  "添加存储"
 ],
 "Additional Storage": [
  null,
  "额外的存储"
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "所选磁盘上所有数据将会被擦除并且磁盘将会被添加到存储池。"
 ],
 "Always": [
  null,
  "通常"
 ],
 "Are you sure you want to delete this image?": [
  null,
  "确认想要删除该镜像？"
 ],
 "Author": [
  null,
  "作者"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU priority": [
  null,
  "CPU 优先级"
 ],
 "CPU usage:": [
  null,
  "CPU 使用率："
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  "无法连接到 Docker"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Change": [
  null,
  "变更"
 ],
 "Change resource limits": [
  null,
  "修改资源限制"
 ],
 "Change resources limits": [
  null,
  "修改资源限制"
 ],
 "Close": [
  null,
  "关闭"
 ],
 "Combined CPU usage": [
  null,
  "结合 CPU 使用率"
 ],
 "Combined memory usage": [
  null,
  "结合内存使用率"
 ],
 "Command": [
  null,
  "命令"
 ],
 "Command can't be empty": [
  null,
  "命令不能为空"
 ],
 "Command:": [
  null,
  "命令："
 ],
 "Commit": [
  null,
  "提交"
 ],
 "Commit Image": [
  null,
  "提交镜像"
 ],
 "Configure storage...": [
  null,
  "配置存储..."
 ],
 "Connecting to Docker": [
  null,
  "正在连接 Docker"
 ],
 "Container": [
  null,
  "容器"
 ],
 "Container Name": [
  null,
  "容器名称"
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  "容器当前标记为未运行, 但正常停止失败."
 ],
 "Container is currently running.": [
  null,
  "当前容器正在运行。"
 ],
 "Container:": [
  null,
  "容器："
 ],
 "Containers": [
  null,
  "容器"
 ],
 "Could not add all disks": [
  null,
  "无法添加所有磁盘"
 ],
 "Could not reset the storage pool": [
  null,
  "无法重置存储池"
 ],
 "Created": [
  null,
  "创建于"
 ],
 "Created:": [
  null,
  "创建时间："
 ],
 "Default": [
  null,
  "默认"
 ],
 "Delete": [
  null,
  "删除"
 ],
 "Delete $0": [
  null,
  "删除 $0"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "删除容器将清除其中的所有数据。"
 ],
 "Deleting an image will delete it, but you can probably download it again if you need it later.  Unless this image has never been pushed to a repository, that is, in which case you probably can't download it again.": [
  null,
  "这将删除镜像, 如果以后需要, 可以重新下载.除非该镜像未推送至镜像库, 镜像库未包含的镜像, 无法再次下载."
 ],
 "Details": [
  null,
  "详情"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "系统中的 Docker 未安装或未启动"
 ],
 "Download": [
  null,
  "下载"
 ],
 "Drive": [
  null,
  "驱动器"
 ],
 "Duplicate alias": [
  null,
  "重复别名"
 ],
 "Duplicate port": [
  null,
  "重复端口"
 ],
 "Entrypoint": [
  null,
  "入口点"
 ],
 "Environment": [
  null,
  "环境变量"
 ],
 "Erase containers and reset storage pool": [
  null,
  "擦除容器并重置存储池"
 ],
 "Erase containers, reformat disks, and add them": [
  null,
  "擦除容器，格式化磁盘，并添加"
 ],
 "Error message from Docker:": [
  null,
  "来自 Docker 的错误消息："
 ],
 "Everything": [
  null,
  "所有内容"
 ],
 "Exited $ExitCode": [
  null,
  "已退出 $ExitCode"
 ],
 "Expose container ports": [
  null,
  "暴露容器端口"
 ],
 "Failed to start Docker: $0": [
  null,
  "启动 Docker 失败： $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  "无法停止 Docker 范围: $0"
 ],
 "Force Delete": [
  null,
  "强制删除"
 ],
 "Free": [
  null,
  "可用"
 ],
 "Gateway:": [
  null,
  "网关:"
 ],
 "Get new image": [
  null,
  "获取新镜像"
 ],
 "Hard Disk": [
  null,
  "硬盘"
 ],
 "IP Address:": [
  null,
  "IP 地址:"
 ],
 "IP Prefix Length:": [
  null,
  "IP 前缀长度:"
 ],
 "Id": [
  null,
  "ID"
 ],
 "Id:": [
  null,
  "编号："
 ],
 "Image": [
  null,
  "镜像"
 ],
 "Image $0": [
  null,
  "镜像 $0"
 ],
 "Image Search": [
  null,
  "搜索镜像"
 ],
 "Image:": [
  null,
  "镜像："
 ],
 "Images": [
  null,
  "镜像"
 ],
 "Images and running containers": [
  null,
  "镜像和运行的容器"
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  "关于容器存储池的信息不可用。"
 ],
 "Invalid port": [
  null,
  "无效端口"
 ],
 "Link to another container": [
  null,
  "链接到另一个容器"
 ],
 "Links": [
  null,
  "连接"
 ],
 "Links:": [
  null,
  "链接："
 ],
 "Local Disks": [
  null,
  "本地磁盘"
 ],
 "MAC Address:": [
  null,
  "MAC 地址:"
 ],
 "Memory": [
  null,
  "内存"
 ],
 "Memory limit": [
  null,
  "内存限制"
 ],
 "Memory usage:": [
  null,
  "内存占用率："
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Mount container volumes": [
  null,
  "挂载容器卷"
 ],
 "Name": [
  null,
  "名称"
 ],
 "No": [
  null,
  "否"
 ],
 "No additional local storage found.": [
  null,
  "没有找到额外的逻辑卷。"
 ],
 "No alias specified": [
  null,
  "未指定别名"
 ],
 "No container specified": [
  null,
  "未指定容器"
 ],
 "No containers": [
  null,
  "没有容器"
 ],
 "No containers that match the current filter": [
  null,
  "没有容器匹配当前过滤器"
 ],
 "No images": [
  null,
  "没有镜像"
 ],
 "No images that match the current filter": [
  null,
  "没有匹配当前过滤器的镜像"
 ],
 "No results for $0": [
  null,
  "没有 $0 的结果"
 ],
 "No running containers": [
  null,
  "没有运行的容器"
 ],
 "No running containers that match the current filter": [
  null,
  "没有匹配当前过滤器的容器"
 ],
 "Not authorized to access Docker on this system": [
  null,
  "未授权访问该系统的 Docker"
 ],
 "Not found": [
  null,
  "未找到"
 ],
 "Off": [
  null,
  "关"
 ],
 "Ok": [
  null,
  "确认"
 ],
 "On": [
  null,
  "开"
 ],
 "On Failure": [
  null,
  "失败时"
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "失败时, 重试 $0 次"
 ],
 "Overview": [
  null,
  "概览"
 ],
 "Please confirm deletion of $0": [
  null,
  "请确认删除 $0"
 ],
 "Please confirm forced deletion of $0": [
  null,
  "请确认强制删除 $0"
 ],
 "Please try another term": [
  null,
  "请尝试另一个终端"
 ],
 "Ports": [
  null,
  "端口"
 ],
 "Ports:": [
  null,
  "端口："
 ],
 "Problems": [
  null,
  ""
 ],
 "ReadOnly": [
  null,
  "只读"
 ],
 "ReadWrite": [
  null,
  "读写"
 ],
 "Reboot": [
  null,
  "重启"
 ],
 "Reformat and add disks": [
  null,
  "格式化并添加磁盘"
 ],
 "Repository": [
  null,
  "存储库"
 ],
 "Reset": [
  null,
  "重置"
 ],
 "Reset Storage Pool": [
  null,
  "重置存储池"
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  "重置存储池将擦除所有容器并释放池中的磁盘。"
 ],
 "Restart": [
  null,
  "重启"
 ],
 "Restart Policy": [
  null,
  "重启策略"
 ],
 "Restart Policy:": [
  null,
  "重启策略："
 ],
 "Retries:": [
  null,
  "重试次数:"
 ],
 "Run": [
  null,
  "运行"
 ],
 "Run Image": [
  null,
  "运行镜像"
 ],
 "Security": [
  null,
  "安全性"
 ],
 "Set container environment variables": [
  null,
  "设置容器环境变量"
 ],
 "Show all containers": [
  null,
  "显示所有容器"
 ],
 "Show all images": [
  null,
  "显示所有镜像"
 ],
 "Size": [
  null,
  "大小"
 ],
 "Solid-State Disk": [
  null,
  "固态磁盘"
 ],
 "Start": [
  null,
  "启动"
 ],
 "Start Docker": [
  null,
  "启动 Docker"
 ],
 "State": [
  null,
  "状态"
 ],
 "State:": [
  null,
  "阶段："
 ],
 "Stop": [
  null,
  "停止"
 ],
 "Stopped": [
  null,
  "已停止"
 ],
 "Storage": [
  null,
  "存储"
 ],
 "Storage pool": [
  null,
  "存储池"
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Tag": [
  null,
  "标签"
 ],
 "Tags": [
  null,
  "标记"
 ],
 "The Docker storage pool cannot be managed on this system.": [
  null,
  "该系统上容器存储池不能被管理。"
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  "从 $time ($type) 开始的扫描没有找到缺陷。"
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  "从 $time ($type) 开始的扫描未成功。"
 ],
 "The storage pool will be reset to optimize its layout.  All containers will be erased.": [
  null,
  "存储池将会重置来优化分区表。所有容器将被擦除。"
 ],
 "This image does not exist.": [
  null,
  "该镜像不存在。"
 ],
 "Total": [
  null,
  "总共"
 ],
 "Try again": [
  null,
  "重试"
 ],
 "Type to filter…": [
  null,
  "输入内容来过滤…"
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "意外的错误"
 ],
 "Unless Stopped": [
  null,
  "直到被停止"
 ],
 "Up since $StartedAt": [
  null,
  "运行自 $StartedAt"
 ],
 "Used": [
  null,
  "已使用"
 ],
 "Used by Containers": [
  null,
  "被容器使用"
 ],
 "Volumes": [
  null,
  "卷"
 ],
 "With terminal": [
  null,
  "跟随终端"
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  "没有权限来管理容器存储池"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 字节二进制数据]"
 ],
 "[binary data]": [
  null,
  "[二进制数据]"
 ],
 "[no data]": [
  null,
  "[没有数据]"
 ],
 "alias": [
  null,
  "别名"
 ],
 "default": [
  null,
  "默认"
 ],
 "key": [
  null,
  "密钥"
 ],
 "none": [
  null,
  "空"
 ],
 "search by name, namespace or description": [
  null,
  "通过名称、命名空间或描述来搜索"
 ],
 "select container": [
  null,
  "选择容器"
 ],
 "shares": [
  null,
  "共享"
 ],
 "to host path": [
  null,
  "到主机路径"
 ],
 "to host port": [
  null,
  "到主机端口"
 ],
 "undefined": [
  null,
  "未定义"
 ],
 "value": [
  null,
  "值"
 ],
 "page-title\u0004Containers": [
  null,
  "容器"
 ],
 "page-title\u0004Images": [
  null,
  "镜像"
 ]
}));
