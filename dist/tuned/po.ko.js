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
  "x-generator": "Zanata 4.5.0"
 },
 "Cancel": [
  null,
  "취소"
 ],
 "Change Performance Profile": [
  null,
  ""
 ],
 "Change Profile": [
  null,
  ""
 ],
 "Communication with tuned has failed": [
  null,
  ""
 ],
 "Disable tuned": [
  null,
  ""
 ],
 "Failed to disable tuned": [
  null,
  " Docker 실행을 실패하였습니다: $0"
 ],
 "Failed to disable tuned profile": [
  null,
  " Docker 실행을 실패하였습니다: $0"
 ],
 "Failed to enable tuned": [
  null,
  ""
 ],
 "Failed to switch profile": [
  null,
  " Docker 실행을 실패하였습니다: $0"
 ],
 "None": [
  null,
  ""
 ],
 "Ok": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to change profiles": [
  null,
  ""
 ],
 "This system is using a custom profile": [
  null,
  ""
 ],
 "This system is using the recommended profile": [
  null,
  ""
 ],
 "Tuned has failed to start": [
  null,
  ""
 ],
 "Tuned is not available": [
  null,
  ""
 ],
 "Tuned is not running": [
  null,
  ""
 ],
 "Tuned is off": [
  null,
  ""
 ],
 "none": [
  null,
  "없음"
 ],
 "recommended": [
  null,
  ""
 ]
}));
