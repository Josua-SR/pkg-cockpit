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
 "1 day": [
  null,
  "1 gün"
 ],
 "1 hour": [
  null,
  "1 saat "
 ],
 "1 week": [
  null,
  "1 hafta"
 ],
 "5 minutes": [
  null,
  "5 dakika"
 ],
 "6 hours": [
  null,
  "6 saat"
 ],
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "Add": [
  null,
  "Ekle"
 ],
 "Add Machine to Dashboard": [
  null,
  ""
 ],
 "Address": [
  null,
  "Adres"
 ],
 "Advanced TCA": [
  null,
  ""
 ],
 "All In One": [
  null,
  ""
 ],
 "Authentication": [
  null,
  "Yetkilendirme"
 ],
 "Authentication Failed": [
  null,
  ""
 ],
 "Available": [
  null,
  ""
 ],
 "Avatar": [
  null,
  ""
 ],
 "Blade": [
  null,
  ""
 ],
 "Blade enclosure": [
  null,
  ""
 ],
 "Bus Expansion Chassis": [
  null,
  ""
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Can't load image": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "İptal"
 ],
 "Checking for public keys": [
  null,
  ""
 ],
 "Close": [
  null,
  "Kapat"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  ""
 ],
 "Cockpit is not installed": [
  null,
  ""
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  ""
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  ""
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  ""
 ],
 "Color": [
  null,
  ""
 ],
 "Compact PCI": [
  null,
  ""
 ],
 "Connect": [
  null,
  ""
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  ""
 ],
 "Connection Error": [
  null,
  "Docker'a bağlanılıyor"
 ],
 "Convertible": [
  null,
  ""
 ],
 "Could not contact {{host}}": [
  null,
  ""
 ],
 "Dashboard": [
  null,
  ""
 ],
 "Desktop": [
  null,
  ""
 ],
 "Detachable": [
  null,
  ""
 ],
 "Disk I/O": [
  null,
  ""
 ],
 "Docking Station": [
  null,
  ""
 ],
 "Edit Server": [
  null,
  ""
 ],
 "Embedded PC": [
  null,
  ""
 ],
 "Enter IP address or host name": [
  null,
  "IP adresi ya da ana makine adı gir"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  ""
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  ""
 ],
 "Expansion Chassis": [
  null,
  ""
 ],
 "Failed to add machine: $0": [
  null,
  "Makine ekleme başarısız: $0"
 ],
 "Failed to change password": [
  null,
  "Parola değişimi başarısız oldu"
 ],
 "Failed to edit machine: $0": [
  null,
  "Makine düzenleme başarısız:  $0"
 ],
 "Fingerprint": [
  null,
  ""
 ],
 "Go to now": [
  null,
  "Şimdiye git"
 ],
 "Hand Held": [
  null,
  ""
 ],
 "Host Name": [
  null,
  ""
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "Incorrect Host Key": [
  null,
  ""
 ],
 "Invalid file permissions": [
  null,
  "Geçersiz dosya izinleri"
 ],
 "IoT Gateway": [
  null,
  ""
 ],
 "Is sshd running on a different port?": [
  null,
  ""
 ],
 "Kerberos Based SSO": [
  null,
  ""
 ],
 "Kerberos Ticket": [
  null,
  ""
 ],
 "Laptop": [
  null,
  ""
 ],
 "Leave blank to connect to this machine as the currently logged in user. If you enter a different username, that user will always be used when connecting to this machine.": [
  null,
  ""
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  ""
 ],
 "Log In": [
  null,
  ""
 ],
 "Log in to {{host}}": [
  null,
  ""
 ],
 "Login Password": [
  null,
  ""
 ],
 "Lost connection. Trying to reconnect": [
  null,
  "Bağlantı koptu. Tekrar bağlanmaya çalışıyor"
 ],
 "Low Profile Desktop": [
  null,
  ""
 ],
 "Lunch Box": [
  null,
  ""
 ],
 "Main Server Chassis": [
  null,
  ""
 ],
 "Memory": [
  null,
  "Bellek"
 ],
 "Mini PC": [
  null,
  ""
 ],
 "Mini Tower": [
  null,
  ""
 ],
 "Multi-system Chassis": [
  null,
  ""
 ],
 "Network": [
  null,
  "Ağ"
 ],
 "New password was not accepted": [
  null,
  "Yeni parola kabul edilmedi"
 ],
 "No such file or directory": [
  null,
  "Böyle bir dosya ya da dizin yok"
 ],
 "Not a valid private key": [
  null,
  "Geçerli bir özel anahtar değil"
 ],
 "Notebook": [
  null,
  ""
 ],
 "Off": [
  null,
  "Kapalı"
 ],
 "Old password not accepted": [
  null,
  "Eski parola kabul edilmedi"
 ],
 "On": [
  null,
  "Açık"
 ],
 "Other": [
  null,
  ""
 ],
 "Password": [
  null,
  "Parola"
 ],
 "Password not accepted": [
  null,
  "Parola kabul edilmedi"
 ],
 "Peripheral Chassis": [
  null,
  ""
 ],
 "Pizza Box": [
  null,
  ""
 ],
 "Port": [
  null,
  ""
 ],
 "Portable": [
  null,
  ""
 ],
 "Prompting via ssh-add timed out": [
  null,
  ""
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  ""
 ],
 "Public Key": [
  null,
  ""
 ],
 "RAID Chassis": [
  null,
  ""
 ],
 "Rack Mount Chassis": [
  null,
  ""
 ],
 "Sealed-case PC": [
  null,
  ""
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  ""
 ],
 "Servers": [
  null,
  ""
 ],
 "Set": [
  null,
  ""
 ],
 "Space-saving Computer": [
  null,
  ""
 ],
 "Stick PC": [
  null,
  ""
 ],
 "Sub Chassis": [
  null,
  ""
 ],
 "Sub Notebook": [
  null,
  ""
 ],
 "Synchronize": [
  null,
  ""
 ],
 "Synchronize users": [
  null,
  ""
 ],
 "Tablet": [
  null,
  ""
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  ""
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  ""
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  ""
 ],
 "The passwords do not match.": [
  null,
  "Parolalar uyuşmuyor."
 ],
 "The user <b>$0</b> is not permitted to manage servers": [
  null,
  ""
 ],
 "This machine has already been added.": [
  null,
  "Bu makine zaten eklenmiş."
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  ""
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  ""
 ],
 "Tower": [
  null,
  ""
 ],
 "Type a password": [
  null,
  ""
 ],
 "Unknown": [
  null,
  "Bilinmiyor"
 ],
 "Unknown Host Key": [
  null,
  ""
 ],
 "Update": [
  null,
  ""
 ],
 "User": [
  null,
  "Kullanıcı"
 ],
 "User name": [
  null,
  ""
 ],
 "Using available credentials": [
  null,
  ""
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  ""
 ],
 "You are currently connected directly to this server. You cannot delete it.": [
  null,
  "Şu an bu sunucuya doğrudan bağlısınız. Silme işlemi yapamazsınız."
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  ""
 ]
}));
