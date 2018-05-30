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
 "$0 key ID": [
  null,
  "$0 密钥编号"
 ],
 "$0 package": [
  null,
  "$0 软件包"
 ],
 "$0 packages": [
  null,
  "$0 软件包"
 ],
 "- Add New Repository": [
  null,
  "添加新的源"
 ],
 "Add": [
  null,
  "添加"
 ],
 "Add Another Key": [
  null,
  "添加另一个密钥"
 ],
 "Additions": [
  null,
  "添加"
 ],
 "Apply": [
  null,
  "应用"
 ],
 "Available": [
  null,
  "可用的"
 ],
 "Begins with '-----BEGIN PGP PUBLIC KEY BLOCK-----'": [
  null,
  "以 '-----BEGIN PGP PUBLIC KEY BLOCK-----' 开始"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Change Repository": [
  null,
  "变更源"
 ],
 "Check for Updates": [
  null,
  "检查更新"
 ],
 "Checking for updates": [
  null,
  "检查升级"
 ],
 "Connecting to OSTree": [
  null,
  "连接到系统树"
 ],
 "Couldn't load settings for '$0': $1": [
  null,
  "不能为 '$0': $1 加载设置"
 ],
 "Currently using:": [
  null,
  "当前正在使用："
 ],
 "Default": [
  null,
  "默认"
 ],
 "Delete": [
  null,
  "删除"
 ],
 "Downgrades": [
  null,
  "降级"
 ],
 "Error loading remotes: $0": [
  null,
  "加载远程： $0 出错"
 ],
 "Expired Signature": [
  null,
  "过期的签名"
 ],
 "Failed": [
  null,
  "已失败"
 ],
 "Good Signature": [
  null,
  "正确的签名"
 ],
 "Invalid Signature": [
  null,
  "无效的签名"
 ],
 "Name": [
  null,
  "名称"
 ],
 "No Deployments": [
  null,
  "没有部署"
 ],
 "No OSTree deployments found": [
  null,
  "没有找到 OSTree  部署"
 ],
 "No configuration data found": [
  null,
  "未找到配置数据"
 ],
 "No signature avaliable": [
  null,
  "没有可用的签名"
 ],
 "Not authorized to update software on this system": [
  null,
  "未授权更新该系统上的软件"
 ],
 "OS $0 not found": [
  null,
  "未找到操作系统 $0"
 ],
 "OSTree is not available on this system": [
  null,
  "该系统上 OSTree  不可用"
 ],
 "Operating System": [
  null,
  "操作系统"
 ],
 "Operating System Updates": [
  null,
  "操作系统更新"
 ],
 "Origin": [
  null,
  "Origin"
 ],
 "Packages": [
  null,
  "软件包"
 ],
 "Please provide a valid URL": [
  null,
  "请提供有效的网址"
 ],
 "Please provide a valid name": [
  null,
  "请提供有效的名称"
 ],
 "Rebase and Reboot": [
  null,
  "重构并重启"
 ],
 "Receiving delta parts": [
  null,
  "正在接收增量部分"
 ],
 "Receiving metadata objects": [
  null,
  "正在接收元数据对象"
 ],
 "Receiving objects: $0%": [
  null,
  "正在接收对象: $0%"
 ],
 "Reconnect": [
  null,
  "重新连接"
 ],
 "Released": [
  null,
  "发布于"
 ],
 "Removals": [
  null,
  "移除"
 ],
 "Roll Back and Reboot": [
  null,
  "回滚并重启"
 ],
 "Running": [
  null,
  "运行中"
 ],
 "Scanning metadata": [
  null,
  "正在扫描元数据"
 ],
 "Signature": [
  null,
  "签名"
 ],
 "Signed by": [
  null,
  "签名为"
 ],
 "Software Updates": [
  null,
  "软件更新"
 ],
 "Status": [
  null,
  "状态"
 ],
 "This deployment contains the same packages as your currently booted system": [
  null,
  "该部署与当前启动的系统包含相同的软件包"
 ],
 "Tree": [
  null,
  "Tree"
 ],
 "URL": [
  null,
  "网址"
 ],
 "Unable to communicate with OSTree": [
  null,
  "无法与 OSTree 通信"
 ],
 "Update and Reboot": [
  null,
  "更新并重启"
 ],
 "Updates": [
  null,
  "更新"
 ],
 "Updating": [
  null,
  "更新"
 ],
 "Use trusted GPG key": [
  null,
  "使用可信的 GPG 密钥"
 ],
 "Version": [
  null,
  "版本"
 ],
 "When": [
  null,
  "当"
 ],
 "Writing objects": [
  null,
  "正在写对象"
 ],
 "at": [
  null,
  "在"
 ]
}));
