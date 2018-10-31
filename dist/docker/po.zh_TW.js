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
 " (shared with the OS)": [
  null,
  ""
 ],
 "$0 shares": [
  null,
  ""
 ],
 "${hip}:${hport} -> $cport": [
  null,
  ""
 ],
 "Add Additional Storage": [
  null,
  ""
 ],
 "Add Storage": [
  null,
  ""
 ],
 "Additional Storage": [
  null,
  ""
 ],
 "Advanced TCA": [
  null,
  ""
 ],
 "All In One": [
  null,
  ""
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  ""
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
  ""
 ],
 "Blade enclosure": [
  null,
  ""
 ],
 "Bus Expansion Chassis": [
  null,
  ""
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU priority": [
  null,
  ""
 ],
 "CPU usage:": [
  null,
  ""
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  ""
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
  ""
 ],
 "Change resources limits": [
  null,
  ""
 ],
 "Close": [
  null,
  "關閉"
 ],
 "Combined memory usage": [
  null,
  ""
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  ""
 ],
 "Command": [
  null,
  "指令"
 ],
 "Command can't be empty": [
  null,
  ""
 ],
 "Command:": [
  null,
  ""
 ],
 "Commit": [
  null,
  "交付"
 ],
 "Commit Image": [
  null,
  ""
 ],
 "Compact PCI": [
  null,
  ""
 ],
 "Configure storage...": [
  null,
  ""
 ],
 "Connecting to Docker": [
  null,
  ""
 ],
 "Container": [
  null,
  "容器（Container）"
 ],
 "Container Name": [
  null,
  ""
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  ""
 ],
 "Container is currently running.": [
  null,
  ""
 ],
 "Container:": [
  null,
  ""
 ],
 "Containers": [
  null,
  "Container"
 ],
 "Convertible": [
  null,
  ""
 ],
 "Could not add all disks": [
  null,
  ""
 ],
 "Could not reset the storage pool": [
  null,
  ""
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
  ""
 ],
 "Desktop": [
  null,
  "桌面環境"
 ],
 "Detachable": [
  null,
  ""
 ],
 "Details": [
  null,
  "詳情"
 ],
 "Docker is not installed or activated on the system": [
  null,
  ""
 ],
 "Docking Station": [
  null,
  ""
 ],
 "Download": [
  null,
  "下載"
 ],
 "Drive": [
  null,
  ""
 ],
 "Duplicate alias": [
  null,
  ""
 ],
 "Duplicate port": [
  null,
  ""
 ],
 "Embedded PC": [
  null,
  ""
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
  ""
 ],
 "Error message from Docker:": [
  null,
  ""
 ],
 "Everything": [
  null,
  ""
 ],
 "Exited $ExitCode": [
  null,
  ""
 ],
 "Expansion Chassis": [
  null,
  ""
 ],
 "Expose container ports": [
  null,
  ""
 ],
 "Failed to start Docker: $0": [
  null,
  ""
 ],
 "Failed to stop Docker scope: $0": [
  null,
  ""
 ],
 "Force Delete": [
  null,
  ""
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
  ""
 ],
 "Hand Held": [
  null,
  ""
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
  ""
 ],
 "Id": [
  null,
  "ID"
 ],
 "Id:": [
  null,
  ""
 ],
 "Image": [
  null,
  "影像"
 ],
 "Image $0": [
  null,
  ""
 ],
 "Image Search": [
  null,
  ""
 ],
 "Image:": [
  null,
  ""
 ],
 "Images": [
  null,
  "映像檔"
 ],
 "Images and running containers": [
  null,
  ""
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  ""
 ],
 "Invalid port": [
  null,
  ""
 ],
 "IoT Gateway": [
  null,
  ""
 ],
 "Laptop": [
  null,
  ""
 ],
 "Link to another container": [
  null,
  ""
 ],
 "Links": [
  null,
  ""
 ],
 "Links:": [
  null,
  ""
 ],
 "Local Disks": [
  null,
  ""
 ],
 "Low Profile Desktop": [
  null,
  ""
 ],
 "Lunch Box": [
  null,
  ""
 ],
 "MAC Address:": [
  null,
  ""
 ],
 "Main Server Chassis": [
  null,
  ""
 ],
 "Memory": [
  null,
  "記憶體"
 ],
 "Memory limit": [
  null,
  ""
 ],
 "Memory usage:": [
  null,
  ""
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Mini PC": [
  null,
  ""
 ],
 "Mini Tower": [
  null,
  ""
 ],
 "Mount container volumes": [
  null,
  ""
 ],
 "Multi-system Chassis": [
  null,
  ""
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
  ""
 ],
 "No alias specified": [
  null,
  ""
 ],
 "No container specified": [
  null,
  ""
 ],
 "No containers": [
  null,
  ""
 ],
 "No containers that match the current filter": [
  null,
  ""
 ],
 "No images": [
  null,
  ""
 ],
 "No images that match the current filter": [
  null,
  ""
 ],
 "No results for $0": [
  null,
  ""
 ],
 "No running containers": [
  null,
  ""
 ],
 "No running containers that match the current filter": [
  null,
  ""
 ],
 "Not authorized to access Docker on this system": [
  null,
  ""
 ],
 "Not found": [
  null,
  ""
 ],
 "Notebook": [
  null,
  ""
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
  ""
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  ""
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
  ""
 ],
 "Pizza Box": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  ""
 ],
 "Please confirm forced deletion of $0": [
  null,
  ""
 ],
 "Please try another term": [
  null,
  ""
 ],
 "Portable": [
  null,
  ""
 ],
 "Ports": [
  null,
  "連接埠"
 ],
 "Ports:": [
  null,
  ""
 ],
 "Problems": [
  null,
  "問題"
 ],
 "RAID Chassis": [
  null,
  ""
 ],
 "Rack Mount Chassis": [
  null,
  ""
 ],
 "ReadOnly": [
  null,
  ""
 ],
 "ReadWrite": [
  null,
  ""
 ],
 "Reboot": [
  null,
  "重新開機"
 ],
 "Reformat and add disks": [
  null,
  ""
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
  ""
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  ""
 ],
 "Restart": [
  null,
  "重新啟動"
 ],
 "Restart Policy": [
  null,
  ""
 ],
 "Restart Policy:": [
  null,
  ""
 ],
 "Retries:": [
  null,
  ""
 ],
 "Run": [
  null,
  "執行"
 ],
 "Run Image": [
  null,
  ""
 ],
 "Sealed-case PC": [
  null,
  ""
 ],
 "Security": [
  null,
  "安全性"
 ],
 "Set container environment variables": [
  null,
  ""
 ],
 "Show all containers": [
  null,
  ""
 ],
 "Show all images": [
  null,
  ""
 ],
 "Size": [
  null,
  "大小"
 ],
 "Solid-State Disk": [
  null,
  ""
 ],
 "Space-saving Computer": [
  null,
  ""
 ],
 "Start": [
  null,
  "開始"
 ],
 "Start Docker": [
  null,
  ""
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
  ""
 ],
 "Stop": [
  null,
  "停止"
 ],
 "Stop and delete": [
  null,
  ""
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
  ""
 ],
 "Sub Notebook": [
  null,
  ""
 ],
 "TCP": [
  null,
  ""
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
  ""
 ],
 "The following containers depend on this image and will become unusable.": [
  null,
  ""
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  ""
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  ""
 ],
 "This image does not exist.": [
  null,
  ""
 ],
 "Total": [
  null,
  "總數"
 ],
 "Tower": [
  null,
  ""
 ],
 "Try again": [
  null,
  ""
 ],
 "Type to filter…": [
  null,
  ""
 ],
 "UDP": [
  null,
  ""
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
  ""
 ],
 "Up since $0": [
  null,
  ""
 ],
 "Used": [
  null,
  "已使用"
 ],
 "Used by Containers": [
  null,
  ""
 ],
 "Volumes": [
  null,
  "卷冊"
 ],
 "Volumes:": [
  null,
  ""
 ],
 "With terminal": [
  null,
  ""
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  ""
 ],
 "[$0 bytes of binary data]": [
  null,
  ""
 ],
 "[binary data]": [
  null,
  ""
 ],
 "[no data]": [
  null,
  ""
 ],
 "alias": [
  null,
  ""
 ],
 "default": [
  null,
  "default"
 ],
 "key": [
  null,
  ""
 ],
 "none": [
  null,
  "none"
 ],
 "search by name, namespace or description": [
  null,
  ""
 ],
 "select container": [
  null,
  ""
 ],
 "shares": [
  null,
  ""
 ],
 "to host path": [
  null,
  ""
 ],
 "to host port": [
  null,
  ""
 ],
 "undefined": [
  null,
  ""
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
