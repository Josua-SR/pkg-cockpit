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
 "Adding key": [
  null,
  "Anahtar ekleniyor"
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
 "Container Administrator": [
  null,
  "Konteyner Yöneticisi"
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
 "Delete $0": [
  null,
  "Sil: $0"
 ],
 "Delete Files": [
  null,
  "Dosyaları Sil"
 ],
 "Error": [
  null,
  "Hata"
 ],
 "Error saving authorized keys: ": [
  null,
  "Yetkilendirilmiş anahtarın kaydedilmesinde hata:"
 ],
 "Excellent password": [
  null,
  "Mükemmel Parola"
 ],
 "Failed to change password": [
  null,
  "Parola değişimi başarısız oldu"
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
 "Image Builder": [
  null,
  ""
 ],
 "Invalid expiration date": [
  null,
  ""
 ],
 "Invalid key": [
  null,
  "Geçersiz anahtar"
 ],
 "Invalid number of days": [
  null,
  ""
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
 "Lock account on $0": [
  null,
  ""
 ],
 "Logged In": [
  null,
  "Giriş Yapıldı"
 ],
 "Never": [
  null,
  "Asla"
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
 "New password was not accepted": [
  null,
  "Yeni parola kabul edilmedi"
 ],
 "No real name specified": [
  null,
  "Gerçek ad belirtilmedi"
 ],
 "No user name specified": [
  null,
  "Kullanıcı adı belirtilmedi"
 ],
 "Off": [
  null,
  "Kapalı"
 ],
 "Old Password": [
  null,
  "Eski Parola"
 ],
 "Old password not accepted": [
  null,
  "Eski parola kabul edilmedi"
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
 "Password is not acceptable": [
  null,
  "Parola kabul edilebilir değil"
 ],
 "Password is too weak": [
  null,
  "Parola çok güçsüz"
 ],
 "Password must be changed": [
  null,
  ""
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  ""
 ],
 "Please specify an expiration date": [
  null,
  ""
 ],
 "Prompting via passwd timed out": [
  null,
  ""
 ],
 "Require password change every $0 days": [
  null,
  ""
 ],
 "Require password change on $0": [
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
 "Server Administrator": [
  null,
  "Sunucu Yöneticisi"
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
 "The account '$0' will be forced to change their password on next login": [
  null,
  ""
 ],
 "The key you provided was not valid.": [
  null,
  "Sağladığınız anahtar geçerli değil."
 ],
 "The passwords do not match": [
  null,
  "Parolalar eşleşmişyor"
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  "<b>$0</b> kullanıcısı hesapları düzenlemek için yetkili değil"
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  ""
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Bu hesap için yetkilendirilmiş açık anahtar yok."
 ],
 "This user name already exists": [
  null,
  "Böyle bir kullanıcı adı zaten var"
 ],
 "Unable to delete root account": [
  null,
  "Kök hesabı silinemiyor"
 ],
 "Unable to rename root account": [
  null,
  "Kök hesabı yeniden adlandırılamıyor"
 ],
 "Unexpected error": [
  null,
  "Beklenmeyen hata"
 ],
 "Unnamed": [
  null,
  "İsimsiz"
 ],
 "User Name": [
  null,
  "Kullanıcı Adı"
 ],
 "Validating key": [
  null,
  "Anahtar doğrulanıyor"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "Bu hesabın yetkilendirilmiş açık anahtarlarını görmeniz için izniniz yok."
 ],
 "You must wait longer to change your password": [
  null,
  ""
 ],
 "translatable": [
  null,
  ""
 ],
 "page-title\u0004Accounts": [
  null,
  "Hesaplar"
 ]
}));
