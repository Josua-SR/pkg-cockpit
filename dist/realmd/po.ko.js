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
  "language": "ko",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Only users with local credentials will be able to log into this machine. This may also effect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  ""
 ],
 "Administrator Password": [
  null,
  ""
 ],
 "Are you sure you want to leave the '$0' domain?": [
  null,
  ""
 ],
 "Are you sure you want to leave this domain?": [
  null,
  ""
 ],
 "Authentication": [
  null,
  ""
 ],
 "Automatic": [
  null,
  "자동"
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Cannot join a domain because realmd is not available on this system": [
  null,
  ""
 ],
 "Computer OU": [
  null,
  ""
 ],
 "Domain $0 could not be contacted": [
  null,
  ""
 ],
 "Domain $0 is not supported": [
  null,
  ""
 ],
 "Domain Address": [
  null,
  ""
 ],
 "Domain Administrator Name": [
  null,
  ""
 ],
 "Domain Administrator Password": [
  null,
  ""
 ],
 "Join": [
  null,
  ""
 ],
 "Join Domain": [
  null,
  ""
 ],
 "Join a Domain": [
  null,
  ""
 ],
 "Joining this domain is not supported": [
  null,
  ""
 ],
 "Leave": [
  null,
  ""
 ],
 "Leave Domain": [
  null,
  ""
 ],
 "More": [
  null,
  ""
 ],
 "Next": [
  null,
  "다음"
 ],
 "Off": [
  null,
  "비활성"
 ],
 "On": [
  null,
  "활성"
 ],
 "One Time Password": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  ""
 ],
 "This may take a while": [
  null,
  ""
 ],
 "User Name": [
  null,
  "사용자 이름"
 ],
 "User Password": [
  null,
  ""
 ],
 "e.g. \"$0\"": [
  null,
  ""
 ]
}));
