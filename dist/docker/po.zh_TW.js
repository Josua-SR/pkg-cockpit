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
  "language": "zh_TW",
  "x-generator": "Zanata 4.6.2"
 },
 " (shared with the OS)": [
  null,
  " （與操作系統共享）"
 ],
 "$0 shares": [
  null,
  "$0 分享"
 ],
 "${hip}:${hport} -> $cport": [
  null,
  "${hip}:${hport} -> $cport"
 ],
 "Add Additional Storage": [
  null,
  "添加附加存儲"
 ],
 "Add Storage": [
  null,
  "添加存儲"
 ],
 "Additional Storage": [
  null,
  "額外存儲"
 ],
 "Advanced TCA": [
  null,
  "高級TCA"
 ],
 "All In One": [
  null,
  "一體"
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "將擦除所選磁盤上的所有數據，並將磁盤添加到存儲池中。"
 ],
 "Always": [
  null,
  "總是"
 ],
 "Author": [
  null,
  "作者"
 ],
 "Blade": [
  null,
  "刀"
 ],
 "Blade enclosure": [
  null,
  "刀片機箱"
 ],
 "Bus Expansion Chassis": [
  null,
  "總線擴展機箱"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU priority": [
  null,
  "CPU優先級"
 ],
 "CPU usage:": [
  null,
  "CPU使用率："
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  "無法連接到Docker"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Change": [
  null,
  "改變"
 ],
 "Change resource limits": [
  null,
  "更改資源限制"
 ],
 "Change resources limits": [
  null,
  "更改資源限制"
 ],
 "Close": [
  null,
  "關閉"
 ],
 "Combined memory usage": [
  null,
  "組合內存使用"
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  "綜合使用 $0 CPU核心"
 ],
 "Command": [
  null,
  "指令"
 ],
 "Command can't be empty": [
  null,
  "命令不能為空"
 ],
 "Command:": [
  null,
  "命令："
 ],
 "Commit": [
  null,
  "交付"
 ],
 "Commit Image": [
  null,
  "提交圖像"
 ],
 "Compact PCI": [
  null,
  "緊湊型PCI"
 ],
 "Configure storage...": [
  null,
  "配置存儲......"
 ],
 "Connecting to Docker": [
  null,
  "連接到Docker"
 ],
 "Container": [
  null,
  "容器（Container）"
 ],
 "Container Name": [
  null,
  "容器名稱"
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  "Container目前標記為未運行，但定期停止失敗。"
 ],
 "Container is currently running.": [
  null,
  "Container目前正在運行。"
 ],
 "Container:": [
  null,
  "容器："
 ],
 "Containers": [
  null,
  "Container"
 ],
 "Convertible": [
  null,
  "可兌換"
 ],
 "Could not add all disks": [
  null,
  "無法添加所有磁盤"
 ],
 "Could not reset the storage pool": [
  null,
  "無法重置存儲池"
 ],
 "Created": [
  null,
  "已建立"
 ],
 "Created:": [
  null,
  "建立："
 ],
 "Default": [
  null,
  "預設值"
 ],
 "Delete": [
  null,
  "刪除"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "刪除容器將清除其中的所有數據。"
 ],
 "Desktop": [
  null,
  "桌面環境"
 ],
 "Detachable": [
  null,
  "可拆開"
 ],
 "Details": [
  null,
  "詳情"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "未在系統上安裝或激活Docker"
 ],
 "Docking Station": [
  null,
  "停靠站"
 ],
 "Download": [
  null,
  "下載"
 ],
 "Drive": [
  null,
  "駕駛"
 ],
 "Duplicate alias": [
  null,
  "複製別名"
 ],
 "Duplicate port": [
  null,
  "重複端口"
 ],
 "Embedded PC": [
  null,
  "嵌入式PC"
 ],
 "Entrypoint": [
  null,
  "進入點"
 ],
 "Environment": [
  null,
  "環境"
 ],
 "Erase containers and reset storage pool": [
  null,
  "擦除容器並重置存儲池"
 ],
 "Error message from Docker:": [
  null,
  "來自Docker的錯誤消息："
 ],
 "Everything": [
  null,
  "一切"
 ],
 "Exited $ExitCode": [
  null,
  "已退出 $ExitCode"
 ],
 "Expansion Chassis": [
  null,
  "擴展機箱"
 ],
 "Expose container ports": [
  null,
  "暴露容器端口"
 ],
 "Failed to start Docker: $0": [
  null,
  "無法啟動Docker： $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  "無法停止Docker範圍： $0"
 ],
 "Force Delete": [
  null,
  "強制刪除"
 ],
 "Free": [
  null,
  "剩餘"
 ],
 "Gateway:": [
  null,
  "閘道："
 ],
 "Get new image": [
  null,
  "獲取新圖片"
 ],
 "Hand Held": [
  null,
  "手持"
 ],
 "Hard Disk": [
  null,
  "硬碟"
 ],
 "IP Address:": [
  null,
  "IP 位址："
 ],
 "IP Prefix Length:": [
  null,
  "IP前綴長度："
 ],
 "Id": [
  null,
  "ID"
 ],
 "Id:": [
  null,
  "ID："
 ],
 "Image": [
  null,
  "影像"
 ],
 "Image $0": [
  null,
  "圖片 $0"
 ],
 "Image Search": [
  null,
  "圖片搜索"
 ],
 "Image:": [
  null,
  "圖片："
 ],
 "Images": [
  null,
  "映像檔"
 ],
 "Images and running containers": [
  null,
  "圖像和運行容器"
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  "有關Docker存儲池的信息不可用。"
 ],
 "Invalid port": [
  null,
  "無效的端口"
 ],
 "IoT Gateway": [
  null,
  "物聯網網關"
 ],
 "Laptop": [
  null,
  "筆記本電腦"
 ],
 "Link to another container": [
  null,
  "鏈接到另一個容器"
 ],
 "Links": [
  null,
  "鏈接"
 ],
 "Links:": [
  null,
  "鏈接："
 ],
 "Local Disks": [
  null,
  "本地磁盤"
 ],
 "Low Profile Desktop": [
  null,
  "低調桌面"
 ],
 "Lunch Box": [
  null,
  "午餐盒"
 ],
 "MAC Address:": [
  null,
  "MAC地址："
 ],
 "Main Server Chassis": [
  null,
  "主服務器機箱"
 ],
 "Memory": [
  null,
  "記憶體"
 ],
 "Memory limit": [
  null,
  "內存限制"
 ],
 "Memory usage:": [
  null,
  "內存使用情況："
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Mini PC": [
  null,
  "迷你電腦"
 ],
 "Mini Tower": [
  null,
  "迷你塔"
 ],
 "Mount container volumes": [
  null,
  "裝載容器卷"
 ],
 "Multi-system Chassis": [
  null,
  "多系統機箱"
 ],
 "Name": [
  null,
  "名稱"
 ],
 "No": [
  null,
  "否"
 ],
 "No additional local storage found.": [
  null,
  "找不到其他本地存儲空間。"
 ],
 "No alias specified": [
  null,
  "沒有指定別名"
 ],
 "No container specified": [
  null,
  "沒有指定容器"
 ],
 "No containers": [
  null,
  "沒有容器"
 ],
 "No containers that match the current filter": [
  null,
  "沒有與當前過濾器匹配的容器"
 ],
 "No images": [
  null,
  "沒有圖像"
 ],
 "No images that match the current filter": [
  null,
  "沒有與當前過濾器匹配的圖像"
 ],
 "No results for $0": [
  null,
  "沒有結果 $0"
 ],
 "No running containers": [
  null,
  "沒有運行容器"
 ],
 "No running containers that match the current filter": [
  null,
  "沒有與當前過濾器匹配的正在運行的容器"
 ],
 "Not authorized to access Docker on this system": [
  null,
  "未授權在此系統上訪問Docker"
 ],
 "Not found": [
  null,
  "未找到"
 ],
 "Notebook": [
  null,
  "筆記本"
 ],
 "Off": [
  null,
  "關閉"
 ],
 "Ok": [
  null,
  "確定"
 ],
 "On": [
  null,
  "開"
 ],
 "On Failure": [
  null,
  "失敗"
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "失敗時，重試 $0 時間"
 ],
 "Other": [
  null,
  "其它"
 ],
 "Overview": [
  null,
  "簡介"
 ],
 "Peripheral Chassis": [
  null,
  "外圍機箱"
 ],
 "Pizza Box": [
  null,
  "披薩盒"
 ],
 "Please confirm deletion of $0": [
  null,
  "請確認刪除 $0"
 ],
 "Please confirm forced deletion of $0": [
  null,
  "請確認強制刪除 $0"
 ],
 "Please try another term": [
  null,
  "請嘗試另一個學期"
 ],
 "Portable": [
  null,
  "手提"
 ],
 "Ports": [
  null,
  "連接埠"
 ],
 "Ports:": [
  null,
  "端口："
 ],
 "Problems": [
  null,
  "問題"
 ],
 "RAID Chassis": [
  null,
  "RAID機箱"
 ],
 "Rack Mount Chassis": [
  null,
  "機架式機箱"
 ],
 "ReadOnly": [
  null,
  "ReadOnly"
 ],
 "ReadWrite": [
  null,
  "ReadWrite"
 ],
 "Reboot": [
  null,
  "重新開機"
 ],
 "Reformat and add disks": [
  null,
  "重新格式化並添加磁盤"
 ],
 "Repository": [
  null,
  "軟體庫"
 ],
 "Reset": [
  null,
  "重設"
 ],
 "Reset Storage Pool": [
  null,
  "重置存儲池"
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  "重置存儲池將清除池中的所有容器和釋放磁盤。"
 ],
 "Restart": [
  null,
  "重新啟動"
 ],
 "Restart Policy": [
  null,
  "重啟政策"
 ],
 "Restart Policy:": [
  null,
  "重啟政策："
 ],
 "Retries:": [
  null,
  "重試次數："
 ],
 "Run": [
  null,
  "執行"
 ],
 "Run Image": [
  null,
  "運行圖像"
 ],
 "Sealed-case PC": [
  null,
  "密封式PC"
 ],
 "Security": [
  null,
  "安全性"
 ],
 "Set container environment variables": [
  null,
  "設置容器環境變量"
 ],
 "Show all containers": [
  null,
  "顯示所有容器"
 ],
 "Show all images": [
  null,
  "顯示所有圖像"
 ],
 "Size": [
  null,
  "大小"
 ],
 "Solid-State Disk": [
  null,
  "固態磁盤"
 ],
 "Space-saving Computer": [
  null,
  "節省空間的計算機"
 ],
 "Start": [
  null,
  "開始"
 ],
 "Start Docker": [
  null,
  "啟動Docker"
 ],
 "State": [
  null,
  "狀態"
 ],
 "State:": [
  null,
  "狀態："
 ],
 "Stick PC": [
  null,
  "堅持使用PC"
 ],
 "Stop": [
  null,
  "停止"
 ],
 "Stop and delete": [
  null,
  "停止並刪除"
 ],
 "Stopped": [
  null,
  "已停止"
 ],
 "Storage": [
  null,
  "儲存裝置"
 ],
 "Storage pool": [
  null,
  "儲存集區"
 ],
 "Sub Chassis": [
  null,
  "子機箱"
 ],
 "Sub Notebook": [
  null,
  "子筆記本"
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Tablet": [
  null,
  "面板"
 ],
 "Tag": [
  null,
  "標籤"
 ],
 "Tags": [
  null,
  "標籤"
 ],
 "The Docker storage pool cannot be managed on this system.": [
  null,
  "無法在此系統上管理Docker存儲池。"
 ],
 "The following containers depend on this image and will become unusable.": [
  null,
  "以下容器依賴於此圖像並將變得不可用。"
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  "從中掃描 $time （$type）沒有發現任何漏洞。"
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  "從中掃描 $time （$type）沒有成功。"
 ],
 "This image does not exist.": [
  null,
  "此圖像不存在。"
 ],
 "Total": [
  null,
  "總數"
 ],
 "Tower": [
  null,
  "塔"
 ],
 "Try again": [
  null,
  "再試一次"
 ],
 "Type to filter…": [
  null,
  "鍵入以過濾..."
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "未預期的錯誤"
 ],
 "Unknown": [
  null,
  "不明"
 ],
 "Unless Stopped": [
  null,
  "除非停止"
 ],
 "Up since $0": [
  null,
  "從那以後 $0"
 ],
 "Used": [
  null,
  "已使用"
 ],
 "Used by Containers": [
  null,
  "由容器使用"
 ],
 "Volumes": [
  null,
  "卷冊"
 ],
 "Volumes:": [
  null,
  "卷："
 ],
 "With terminal": [
  null,
  "有了終端"
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  "您無權管理Docker存儲池。"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 二進制數據的字節]"
 ],
 "[binary data]": [
  null,
  "[二進制數據]"
 ],
 "[no data]": [
  null,
  "[沒有數據]"
 ],
 "alias": [
  null,
  "別號"
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
  "none"
 ],
 "search by name, namespace or description": [
  null,
  "按名稱，名稱空間或描述進行搜索"
 ],
 "select container": [
  null,
  "選擇容器"
 ],
 "shares": [
  null,
  "分享"
 ],
 "to host path": [
  null,
  "主持路徑"
 ],
 "to host port": [
  null,
  "託管端口"
 ],
 "undefined": [
  null,
  "未定義"
 ],
 "value": [
  null,
  "價值"
 ],
 "page-title\u0004Containers": [
  null,
  "Container"
 ],
 "page-title\u0004Images": [
  null,
  "映像檔"
 ]
}));
