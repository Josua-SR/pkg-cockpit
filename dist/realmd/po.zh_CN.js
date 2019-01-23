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
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Only users with local credentials will be able to log into this machine. This may also effect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  "$0 仅本地用户可登录到该主机。这可能也会影响其他服务，因为 DNS 解析配置以及信任的 CA 列表可能会改变。"
 ],
 "$0 is not available from any repository.": [
  null,
  "所有仓库都不提供 $0。"
 ],
 "$0 will be installed.": [
  null,
  "将安装 $0。"
 ],
 "Additional packages:": [
  null,
  "额外的软件包："
 ],
 "Administrator Password": [
  null,
  "管理员密码"
 ],
 "Are you sure you want to leave the '$0' domain?": [
  null,
  "您确定要离开域 '$0' 吗？"
 ],
 "Are you sure you want to leave this domain?": [
  null,
  "您确定要离开这个域吗？"
 ],
 "Authentication": [
  null,
  "验证"
 ],
 "Automatic": [
  null,
  "自动"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Checking installed software": [
  null,
  "检查安装的软件"
 ],
 "Computer OU": [
  null,
  "计算机 OU"
 ],
 "Domain $0 could not be contacted": [
  null,
  "域 $0 无法联系"
 ],
 "Domain $0 is not supported": [
  null,
  "不支持域 $0"
 ],
 "Domain Address": [
  null,
  "域地址"
 ],
 "Domain Administrator Name": [
  null,
  "域管理员用户名"
 ],
 "Domain Administrator Password": [
  null,
  "域管理员密码"
 ],
 "Downloading $0": [
  null,
  "正在下载"
 ],
 "Host name should not be changed in a domain": [
  null,
  "主机不能为空"
 ],
 "Install": [
  null,
  "安装"
 ],
 "Install Software": [
  null,
  "安装软件"
 ],
 "Installing $0": [
  null,
  "正在安装 $0"
 ],
 "Join": [
  null,
  "加入"
 ],
 "Join Domain": [
  null,
  "加入域"
 ],
 "Join a Domain": [
  null,
  "加入域"
 ],
 "Joining this domain is not supported": [
  null,
  "不支持加入该域"
 ],
 "Leave": [
  null,
  "离开"
 ],
 "Leave Domain": [
  null,
  "离开域"
 ],
 "More": [
  null,
  "更多"
 ],
 "Next": [
  null,
  "下一步"
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
 "One Time Password": [
  null,
  "一次性密码"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit 已崩溃"
 ],
 "Removals:": [
  null,
  "移除"
 ],
 "Removing $0": [
  null,
  "正在删除 $0"
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "用户 <b>$0</b> 不允许修改 realms"
 ],
 "This may take a while": [
  null,
  "这可能需要一些时间"
 ],
 "Total size: $0": [
  null,
  "总大小：$0"
 ],
 "User Name": [
  null,
  "用户名"
 ],
 "User Password": [
  null,
  "用户密码"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "等待其他软件管理操作完成"
 ],
 "e.g. \"$0\"": [
  null,
  "例如 \"$0\""
 ]
}));
