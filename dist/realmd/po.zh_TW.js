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
 "$0 is not available from any repository.": [
  null,
  "$0 在任何存儲庫中都不可用。"
 ],
 "$0 will be installed.": [
  null,
  "$0 將會被安裝。"
 ],
 "Additional packages:": [
  null,
  "附加包："
 ],
 "Administrator Password": [
  null,
  "管理員密碼"
 ],
 "After leaving the domain, only users with local credentials will be able to log into this machine. This may also affect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  ""
 ],
 "Authentication": [
  null,
  "核對"
 ],
 "Automatic": [
  null,
  "自動"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Checking installed software": [
  null,
  "檢查已安裝的軟件"
 ],
 "Client Software": [
  null,
  ""
 ],
 "Computer OU": [
  null,
  "計算機OU"
 ],
 "Contacted domain": [
  null,
  ""
 ],
 "Domain": [
  null,
  "網域"
 ],
 "Domain $0 could not be contacted": [
  null,
  "域 $0 無法聯繫"
 ],
 "Domain $0 is not supported": [
  null,
  "域 $0 不受支持"
 ],
 "Domain Address": [
  null,
  "域名地址"
 ],
 "Domain Administrator Name": [
  null,
  "域管理員名稱"
 ],
 "Domain Administrator Password": [
  null,
  "域管理員密碼"
 ],
 "Downloading $0": [
  null,
  "下載 $0"
 ],
 "Host name should not be changed in a domain": [
  null,
  ""
 ],
 "Install": [
  null,
  "安裝"
 ],
 "Install Software": [
  null,
  "安裝軟件"
 ],
 "Installing $0": [
  null,
  "正在安裝 $0"
 ],
 "Join": [
  null,
  "加入"
 ],
 "Join Domain": [
  null,
  "結合網域"
 ],
 "Join a Domain": [
  null,
  "加入域名"
 ],
 "Joining this domain is not supported": [
  null,
  "不支持加入此域"
 ],
 "Leave Domain": [
  null,
  "離開域名"
 ],
 "Login Format": [
  null,
  ""
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
 "One Time Password": [
  null,
  "一次性密碼"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit崩潰了"
 ],
 "Removals:": [
  null,
  "清除："
 ],
 "Removing $0": [
  null,
  "刪除 $0"
 ],
 "Server Software": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "用戶 <b>$0</b> 不允許修改領域"
 ],
 "This may take a while": [
  null,
  "可能還要等一下"
 ],
 "Total size: $0": [
  null,
  "總大小： $0"
 ],
 "User Name": [
  null,
  "使用者名稱"
 ],
 "User Password": [
  null,
  "用戶密碼"
 ],
 "Validating address": [
  null,
  ""
 ],
 "Waiting for other software management operations to finish": [
  null,
  "等待其他軟件管理操作完成"
 ],
 "e.g. \"$0\"": [
  null,
  "例如“$0“"
 ]
}));
