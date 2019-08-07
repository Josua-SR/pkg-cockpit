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
 "$0 occurrence": [
  "$1 occurrences",
  "$0 概率"
 ],
 "Ansible Playbook": [
  null,
  "Ansible Playbook"
 ],
 "Apply this solution": [
  null,
  "应用该方案"
 ],
 "Applying solution...": [
  null,
  "正在应用方案..."
 ],
 "Audit log": [
  null,
  "审计日志"
 ],
 "Automation Script": [
  null,
  "自动化脚本"
 ],
 "Close": [
  null,
  "关闭"
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  "连接到 SETroubleshoot 守护进程..."
 ],
 "Copy to clipboard": [
  null,
  "复制到剪贴板"
 ],
 "Enforcing": [
  null,
  "强制"
 ],
 "Error running semanage to discover system modifications": [
  null,
  "运行 semanage 来发现系统的改变时出错"
 ],
 "Error while deleting alert: $0": [
  null,
  "删除警告： $0 时出错"
 ],
 "Error while setting SELinux mode: '$0'": [
  null,
  "设置 SELinux 模式时出错: '$0'"
 ],
 "Failed to delete alert: $0": [
  null,
  "删除警告： $0 失败"
 ],
 "Install setroubleshoot-server to troubleshoot SELinux events.": [
  null,
  "安装 setroubleshoot-server 来排查 SELinux 事件。"
 ],
 "Loading system modifications...": [
  null,
  "加载系统改变..."
 ],
 "No SELinux alerts.": [
  null,
  "没有 SELinux 警告。"
 ],
 "No System Modifications": [
  null,
  "没有系统改变"
 ],
 "Not connected": [
  null,
  "未连接"
 ],
 "Occurred $0": [
  null,
  "发生于 $0"
 ],
 "Occurred between $0 and $1": [
  null,
  "在 $0 和 $1 间发生"
 ],
 "Permissive": [
  null,
  "Permissive"
 ],
 "SELinux Access Control Errors": [
  null,
  "SELinux 访问控制错误"
 ],
 "SELinux Policy": [
  null,
  "SELinux 策略"
 ],
 "SELinux Troubleshoot": [
  null,
  "SELinux 排错"
 ],
 "SELinux is disabled on the system": [
  null,
  "该系统上 SELinux 已禁用。"
 ],
 "SELinux is disabled on the system.": [
  null,
  "该系统上 SELinux 已禁用。"
 ],
 "SELinux system status is unknown.": [
  null,
  "SELinux 系统状态未知。"
 ],
 "Setting deviates from the configured state and will revert on the next boot.": [
  null,
  "设置从配置的状态偏离并将在下一次重启恢复。"
 ],
 "Shell Script": [
  null,
  "Shell 脚本"
 ],
 "Solution applied successfully": [
  null,
  "方案应用成功"
 ],
 "Solution failed": [
  null,
  "方案失败"
 ],
 "Solutions": [
  null,
  "方案"
 ],
 "System Modifications": [
  null,
  "系统改变"
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  "配置状态未知，下一次启动时会改变。"
 ],
 "The logged in user is not permitted to view system modifications": [
  null,
  "登陆的用户没有权限查看系统改变"
 ],
 "Unable to apply this solution automatically": [
  null,
  "无法自动应用该方案"
 ],
 "Unable to get alert details.": [
  null,
  "无法获取警告详情。"
 ],
 "Unable to get alert: $0": [
  null,
  "无法获取警告： $0"
 ],
 "Unable to run fix: %0": [
  null,
  "无法运行修复： %0"
 ],
 "Unable to start setroubleshootd": [
  null,
  "无法启动 setroubleshootd"
 ],
 "View automation script": [
  null,
  "查看自动化脚本"
 ],
 "Waiting for details...": [
  null,
  "等待详情..."
 ],
 "solution details": [
  null,
  "方案详情"
 ]
}));
