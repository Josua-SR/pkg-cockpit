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
  "language": "zh_CN",
  "x-generator": "Zanata 4.6.2"
 },
 " (shared with the OS)": [
  null,
  " (与操作系统共享)"
 ],
 "$0 shares": [
  null,
  "$0 共享"
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
 "Advanced TCA": [
  null,
  "高级 TCA"
 ],
 "All In One": [
  null,
  "多合一"
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "所选磁盘上的所有数据将会被删除，磁盘将会被添加到存储池。"
 ],
 "Always": [
  null,
  "总是"
 ],
 "Author": [
  null,
  "作者"
 ],
 "Blade": [
  null,
  "刀片"
 ],
 "Blade enclosure": [
  null,
  "刀片机箱"
 ],
 "Bus Expansion Chassis": [
  null,
  "总线扩展机箱"
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
 "Combined memory usage": [
  null,
  "内存使用率总计"
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  "总计使用 $0 CPU 内核"
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
 "Compact PCI": [
  null,
  "紧凑型 PCI"
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
  "容器当前标记为未运行, 但正常停止失败。"
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
 "Convertible": [
  null,
  "可转换"
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
  "创建于："
 ],
 "Default": [
  null,
  "默认"
 ],
 "Delete": [
  null,
  "删除"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "删除容器将清除其中的所有数据。"
 ],
 "Desktop": [
  null,
  "桌面"
 ],
 "Detachable": [
  null,
  "可拆开"
 ],
 "Details": [
  null,
  "详情"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "系统中的 Docker 未安装或未激活"
 ],
 "Docking Station": [
  null,
  "Docking Station"
 ],
 "Download": [
  null,
  "下载"
 ],
 "Drive": [
  null,
  "驱动"
 ],
 "Duplicate alias": [
  null,
  "重复别名"
 ],
 "Duplicate port": [
  null,
  "重复端口"
 ],
 "Embedded PC": [
  null,
  "嵌入式 PC"
 ],
 "Entrypoint": [
  null,
  "入口点"
 ],
 "Environment": [
  null,
  "环境"
 ],
 "Erase containers and reset storage pool": [
  null,
  "擦除容器并重置存储池"
 ],
 "Error message from Docker:": [
  null,
  "来自 Docker 的错误消息："
 ],
 "Everything": [
  null,
  "所有"
 ],
 "Exited $ExitCode": [
  null,
  "已退出 $ExitCode"
 ],
 "Expansion Chassis": [
  null,
  "扩展机箱"
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
 "Hand Held": [
  null,
  "手持"
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
 "IoT Gateway": [
  null,
  "IoT 网关"
 ],
 "Laptop": [
  null,
  "笔记本电脑"
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
 "Low Profile Desktop": [
  null,
  "低调桌面"
 ],
 "Lunch Box": [
  null,
  "主机类型"
 ],
 "MAC Address:": [
  null,
  "MAC 地址:"
 ],
 "Main Server Chassis": [
  null,
  "主服务器机箱"
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
  "内存使用："
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Mini PC": [
  null,
  "迷你电脑"
 ],
 "Mini Tower": [
  null,
  "迷你塔式主机"
 ],
 "Mount container volumes": [
  null,
  "挂载容器卷"
 ],
 "Multi-system Chassis": [
  null,
  "多系统机箱"
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
  "没有找到额外的本地存储。"
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
  "没有容器匹配当前的过滤条件"
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
 "Notebook": [
  null,
  "笔记本"
 ],
 "Ok": [
  null,
  "确认"
 ],
 "On Failure": [
  null,
  "失败时"
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "失败时, 重试 $0 次"
 ],
 "Other": [
  null,
  "其他"
 ],
 "Overview": [
  null,
  "概览"
 ],
 "Peripheral Chassis": [
  null,
  "外设机箱"
 ],
 "Pizza Box": [
  null,
  "披萨盒"
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
 "Portable": [
  null,
  "手提"
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
  "问题"
 ],
 "RAID Chassis": [
  null,
  "RAID 机箱"
 ],
 "Rack Mount Chassis": [
  null,
  "机架式机箱"
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
  "重新格式化并添加磁盘"
 ],
 "Repository": [
  null,
  "仓库"
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
 "Sealed-case PC": [
  null,
  "密封式 PC"
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
 "Space-saving Computer": [
  null,
  "节省空间的计算机"
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
 "Stick PC": [
  null,
  "Stick PC"
 ],
 "Stop": [
  null,
  "停止"
 ],
 "Stop and delete": [
  null,
  "停止并删除"
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
 "Sub Chassis": [
  null,
  "子机箱"
 ],
 "Sub Notebook": [
  null,
  "子笔记本"
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Tablet": [
  null,
  "平板"
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
  "Docker 存储池不能在这个系统上被管理。"
 ],
 "The following containers depend on this image and will become unusable.": [
  null,
  "以下容器依赖于此镜像，将变得不可用。"
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  "从 $time ($type) 开始的扫描没有找到漏洞。"
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  "从 $time ($type) 开始的扫描未成功。"
 ],
 "This image does not exist.": [
  null,
  "该镜像不存在。"
 ],
 "Total": [
  null,
  "总共"
 ],
 "Tower": [
  null,
  "Tower"
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
 "Unknown": [
  null,
  "未知"
 ],
 "Unless Stopped": [
  null,
  "直到被停止"
 ],
 "Up since $0": [
  null,
  "运行自 $0"
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
 "Volumes:": [
  null,
  "卷"
 ],
 "With terminal": [
  null,
  "带有终端"
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  "您没有权限管理 Docker 存储池"
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
