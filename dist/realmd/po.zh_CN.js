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
 "Administrator Password": [
  null,
  "管理员密码"
 ],
 "Authentication": [
  null,
  "认证"
 ],
 "Automatic": [
  null,
  "自动"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Cannot join a domain because realmd is not available on this system": [
  null,
  "因为该系统的 realmd 不可用, 因此无法加入域"
 ],
 "Computer OU": [
  null,
  "计算机 OU"
 ],
 "Domain $0 could not be contacted": [
  null,
  "域名 $0 无法联系"
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
  "域"
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
 "On": [
  null,
  "开"
 ],
 "One Time Password": [
  null,
  "一次性密码"
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "用户 <b>$0</b> 不允许修改 realms"
 ],
 "This may take a while": [
  null,
  "这可能需要一些时间"
 ],
 "User Name": [
  null,
  "用户名"
 ],
 "User Password": [
  null,
  "用户密码"
 ],
 "e.g. \"$0\"": [
  null,
  "例如 \"$0\""
 ]
}));