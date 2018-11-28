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
 "Access": [
  null,
  "Erişim"
 ],
 "Account Expiration": [
  null,
  ""
 ],
 "Account not available or cannot be edited.": [
  null,
  ""
 ],
 "Accounts": [
  null,
  ""
 ],
 "Add key": [
  null,
  ""
 ],
 "Add public key": [
  null,
  "Açık anahtar ekle"
 ],
 "Authorized Public SSH Keys": [
  null,
  "Yetkilendirilmiş Açık SSH Anahtarları"
 ],
 "Back to Accounts": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "İptal"
 ],
 "Change": [
  null,
  ""
 ],
 "Close": [
  null,
  "Kapat"
 ],
 "Confirm": [
  null,
  "Onayla"
 ],
 "Confirm New Password": [
  null,
  "Yeni Parolayı Onayla"
 ],
 "Create": [
  null,
  "Yarat"
 ],
 "Create New Account": [
  null,
  "Yeni Hesap Yarat"
 ],
 "Delete": [
  null,
  "Sil"
 ],
 "Delete Files": [
  null,
  "Dosyaları Sil"
 ],
 "Failed to load authorized keys.": [
  null,
  "Yetkilendirilmiş anahtarların yüklemesi başarısız oldu."
 ],
 "Force Change": [
  null,
  ""
 ],
 "Force password change": [
  null,
  ""
 ],
 "Full Name": [
  null,
  "Tam İsim"
 ],
 "Invalid key": [
  null,
  "Geçersiz anahtar"
 ],
 "Last Login": [
  null,
  "Son Giriş"
 ],
 "Local Accounts": [
  null,
  ""
 ],
 "Lock Account": [
  null,
  "Hesabı Kilitle"
 ],
 "Never expire password": [
  null,
  ""
 ],
 "Never lock account": [
  null,
  ""
 ],
 "New Password": [
  null,
  "Yeni Parola"
 ],
 "Off": [
  null,
  "Kapalı"
 ],
 "Old Password": [
  null,
  "Eski Parola"
 ],
 "On": [
  null,
  "Açık"
 ],
 "Password": [
  null,
  "Parola"
 ],
 "Password Expiration": [
  null,
  ""
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  ""
 ],
 "Reset": [
  null,
  ""
 ],
 "Roles": [
  null,
  "Roller"
 ],
 "Set": [
  null,
  ""
 ],
 "Set Password": [
  null,
  "Parola Belirle"
 ],
 "Terminate Session": [
  null,
  ""
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Bu hesap için yetkilendirilmiş açık anahtar yok."
 ],
 "Unnamed": [
  null,
  "İsimsiz"
 ],
 "User Name": [
  null,
  "Kullanıcı Adı"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "Bu hesabın yetkilendirilmiş açık anahtarlarını görmeniz için izniniz yok."
 ],
 "translatable": [
  null,
  ""
 ]
}));
