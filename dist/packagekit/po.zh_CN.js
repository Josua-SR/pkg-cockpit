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
 "$0 Package": [
  "$0 Packages",
  "$0 软件包"
 ],
 "$0 is not available from any repository.": [
  null,
  "所有仓库都不提供 $0。"
 ],
 "$0 update": [
  "$0 updates",
  "$0 个更新"
 ],
 "$0 will be installed.": [
  null,
  "将安装 $0。"
 ],
 "$1 security fix": [
  "$1 security fixes",
  "$1 安全修正"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  "， 包括 $1 安全修复"
 ],
 "Additional packages:": [
  null,
  "额外的软件包："
 ],
 "Apply all updates": [
  null,
  "应用所有更新"
 ],
 "Apply security updates": [
  null,
  "应用安全更新"
 ],
 "Applying updates": [
  null,
  "正在应用更新"
 ],
 "Applying updates failed": [
  null,
  "应用更新失败"
 ],
 "Automatic Updates": [
  null,
  "自动更新"
 ],
 "Available Updates": [
  null,
  "可用的更新"
 ],
 "Bugs:": [
  null,
  "缺陷："
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Check for Updates": [
  null,
  "检查更新"
 ],
 "Checking installed software": [
  null,
  "检查安装的软件"
 ],
 "Details": [
  null,
  "详情"
 ],
 "Downloaded": [
  null,
  "已下载"
 ],
 "Downloading": [
  null,
  "正在下载"
 ],
 "Downloading $0": [
  null,
  "正在下载"
 ],
 "Errata:": [
  null,
  "勘误："
 ],
 "Fridays": [
  null,
  "周五"
 ],
 "Ignore": [
  null,
  "忽略"
 ],
 "Initializing...": [
  null,
  "初始化中..."
 ],
 "Install": [
  null,
  "安装"
 ],
 "Install All Updates": [
  null,
  "安装所有更新"
 ],
 "Install Security Updates": [
  null,
  "安装安全更新"
 ],
 "Install Software": [
  null,
  "安装软件"
 ],
 "Installed": [
  null,
  "已安装"
 ],
 "Installing": [
  null,
  "正在安装"
 ],
 "Installing $0": [
  null,
  "正在安装 $0"
 ],
 "Last checked: $0 ago": [
  null,
  "最后检查于： $0 前"
 ],
 "Loading available updates failed": [
  null,
  "加载可用的更新失败"
 ],
 "Loading available updates, please wait...": [
  null,
  "正在加载可用的更新，请等待..."
 ],
 "Mondays": [
  null,
  "周一"
 ],
 "Name": [
  null,
  "名称"
 ],
 "No updates pending": [
  null,
  "没有待完成的更新"
 ],
 "Ok": [
  null,
  "确认"
 ],
 "Package information": [
  null,
  "软件包信息"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit 已崩溃"
 ],
 "PackageKit is not installed": [
  null,
  "PackageKit 未安装"
 ],
 "PackageKit reported error code $0": [
  null,
  "PackageKit 已报告错误码 $0"
 ],
 "Refreshing package information": [
  null,
  "刷新软件包信息"
 ],
 "Register…": [
  null,
  "注册…"
 ],
 "Removals:": [
  null,
  "移除"
 ],
 "Removing $0": [
  null,
  "正在删除 $0"
 ],
 "Restart Now": [
  null,
  "立刻重启"
 ],
 "Restart Recommended": [
  null,
  "建议重启"
 ],
 "Restarting": [
  null,
  "正在重启"
 ],
 "Saturdays": [
  null,
  "周六"
 ],
 "Set up": [
  null,
  "设置"
 ],
 "Setting up": [
  null,
  "设置"
 ],
 "Severity": [
  null,
  "严重性"
 ],
 "Severity:": [
  null,
  "严重性"
 ],
 "Software Updates": [
  null,
  "软件更新"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  "某些其他程序正在使用软件包管理器，请等待..."
 ],
 "Sundays": [
  null,
  "周日"
 ],
 "System is up to date": [
  null,
  "系统已更新到最新"
 ],
 "This system is not registered": [
  null,
  "该系统未注册"
 ],
 "This web console will be updated.": [
  null,
  "此 Web 控制台将会被更新。"
 ],
 "Thursdays": [
  null,
  "周四"
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  "为了获取软件更新，该系统需要通过红帽客户门户网站或本地订阅服务器注册到红帽。"
 ],
 "Total size: $0": [
  null,
  "总大小：$0"
 ],
 "Tuesdays": [
  null,
  "周二"
 ],
 "Update History": [
  null,
  "更新历史"
 ],
 "Update Log": [
  null,
  "更新日志"
 ],
 "Updated": [
  null,
  "已更新"
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  "已更新的软件包可能需要重启生效。"
 ],
 "Updating": [
  null,
  "更新"
 ],
 "Verified": [
  null,
  "已验证"
 ],
 "Verifying": [
  null,
  "正在验证"
 ],
 "Version": [
  null,
  "版本"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "等待其他软件管理操作完成"
 ],
 "Wednesdays": [
  null,
  "周三"
 ],
 "Your browser will disconnect, but this does not affect the update process. You can reconnect in a few moments to continue watching the progress.": [
  null,
  "您的浏览器将断开连接，但这不会影响更新过程。您可以在几分钟后重新连接以继续观察进度。"
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  "您的服务器将要关闭连接。你可以在其重启后，重新连接。"
 ],
 "and restart the machine automatically.": [
  null,
  "并自动重启机器。"
 ],
 "at": [
  null,
  "在"
 ],
 "bug fix": [
  null,
  "Bug 修正"
 ],
 "enhancement": [
  null,
  "性能强化"
 ],
 "every day": [
  null,
  "每天"
 ],
 "security": [
  null,
  "安全"
 ],
 "undefined": [
  null,
  "未定义"
 ]
}));
