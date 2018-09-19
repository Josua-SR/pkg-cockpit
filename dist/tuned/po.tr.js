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
nplurals=2; plural=(n>1);
return plural;
},
  "language": "tr",
  "x-generator": "Zanata 4.6.2"
 },
 "Cancel": [
  null,
  "İptal"
 ],
 "Change Performance Profile": [
  null,
  "Başarım Profilini Değiştir"
 ],
 "Change Profile": [
  null,
  "Profil Değiştir"
 ],
 "Communication with tuned has failed": [
  null,
  "tuned ile iletişim başarısız"
 ],
 "Disable tuned": [
  null,
  "tuned'i devre dışı bırak"
 ],
 "Failed to disable tuned": [
  null,
  "tuned'i devre dışı bırakma başarısız"
 ],
 "Failed to disable tuned profile": [
  null,
  "tuned profilini devre dışı bırakma başarısız"
 ],
 "Failed to enable tuned": [
  null,
  "tuned'i etkinleştirme başarısız"
 ],
 "Failed to switch profile": [
  null,
  ""
 ],
 "None": [
  null,
  "Hiçbiri"
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
  "Bu sistem özel profil kullanıyor"
 ],
 "This system is using the recommended profile": [
  null,
  "Bu sistem önerilen profili kullanıyor"
 ],
 "Tuned has failed to start": [
  null,
  "Tuned başlatılırken başarısız oldu"
 ],
 "Tuned is not available": [
  null,
  "Tuned uygun değil"
 ],
 "Tuned is not running": [
  null,
  "Tuned çalışmıyor"
 ],
 "Tuned is off": [
  null,
  "Tuned kapalı"
 ],
 "none": [
  null,
  "hiç biri"
 ],
 "recommended": [
  null,
  ""
 ]
}));
