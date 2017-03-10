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
  "x-generator": "Zanata 3.9.6"
 },
 "$0 day": [
  "$0 days",
  "",
  ""
 ],
 "$0 hour": [
  "$0 hours",
  "",
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  "",
  ""
 ],
 "$0 month": [
  "$0 months",
  "",
  ""
 ],
 "$0 week": [
  "$0 weeks",
  "",
  ""
 ],
 "$0 year": [
  "$0 years",
  "",
  ""
 ],
 "$mtu": [
  null,
  ""
 ],
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
 "802.3ad": [
  null,
  "802.3ad"
 ],
 "802.3ad LACP": [
  null,
  ""
 ],
 "ARP": [
  null,
  "ARP"
 ],
 "ARP Monitoring": [
  null,
  "ARP İzleme"
 ],
 "ARP Ping": [
  null,
  ""
 ],
 "Active": [
  null,
  "Aktif"
 ],
 "Active Backup": [
  null,
  "Aktif Yedekleme"
 ],
 "Adaptive load balancing": [
  null,
  ""
 ],
 "Adaptive transmit load balancing": [
  null,
  ""
 ],
 "Add $0": [
  null,
  ""
 ],
 "Add Bond": [
  null,
  ""
 ],
 "Add Bridge": [
  null,
  ""
 ],
 "Add Team": [
  null,
  ""
 ],
 "Add VLAN": [
  null,
  ""
 ],
 "Adding <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Additional DNS $val": [
  null,
  ""
 ],
 "Additional DNS Search Domains $val": [
  null,
  ""
 ],
 "Additional address $val": [
  null,
  ""
 ],
 "Address $val": [
  null,
  ""
 ],
 "Addresses": [
  null,
  "Adresler"
 ],
 "Apply": [
  null,
  "Uygula"
 ],
 "Authenticating": [
  null,
  "Yetkilendiriliyor"
 ],
 "Automatic": [
  null,
  "Otomatik"
 ],
 "Automatic (DHCP only)": [
  null,
  "Otomatik (Sadece DHCP)"
 ],
 "Automatic (DHCP)": [
  null,
  "Otomatik (DHCP)"
 ],
 "Balancer": [
  null,
  ""
 ],
 "Bond": [
  null,
  "Bond"
 ],
 "Bond Settings": [
  null,
  ""
 ],
 "Bridge": [
  null,
  "Köprü"
 ],
 "Bridge Port Settings": [
  null,
  ""
 ],
 "Bridge Settings": [
  null,
  ""
 ],
 "Bridge port": [
  null,
  ""
 ],
 "Broadcast": [
  null,
  "Broadcast"
 ],
 "Broken configuration": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "İptal"
 ],
 "Carrier": [
  null,
  "Taşıyıcı"
 ],
 "Change the settings": [
  null,
  ""
 ],
 "Changing the settings will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Checking IP": [
  null,
  "IP kontrol ediliyor"
 ],
 "Close": [
  null,
  "Kapat"
 ],
 "Configure": [
  null,
  "Ayarla"
 ],
 "Configuring": [
  null,
  "Ayarlanıyor"
 ],
 "Configuring IP": [
  null,
  "IP ayarlanıyor"
 ],
 "Connect automatically": [
  null,
  "Otomatik bağlan"
 ],
 "Connection will be lost": [
  null,
  ""
 ],
 "Create it": [
  null,
  ""
 ],
 "Creating this VLAN will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Creating this bond will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Creating this bridge will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Creating this team will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "DNS": [
  null,
  "DNS"
 ],
 "DNS $val": [
  null,
  ""
 ],
 "DNS Search Domains": [
  null,
  "DNS Search Domains"
 ],
 "DNS Search Domains $val": [
  null,
  ""
 ],
 "Deactivating": [
  null,
  "Deaktif ediliyor"
 ],
 "Delete": [
  null,
  "Sil"
 ],
 "Delete $0": [
  null,
  "Sil: $0"
 ],
 "Deleting <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Disabled": [
  null,
  "Etkin değil"
 ],
 "Ethernet MAC": [
  null,
  ""
 ],
 "Ethernet MTU": [
  null,
  ""
 ],
 "Ethtool": [
  null,
  ""
 ],
 "Failed": [
  null,
  ""
 ],
 "Forward delay $forward_delay": [
  null,
  ""
 ],
 "General": [
  null,
  "Genel"
 ],
 "Go to now": [
  null,
  "Şimdiye git"
 ],
 "Hair Pin mode": [
  null,
  ""
 ],
 "Hairpin mode": [
  null,
  ""
 ],
 "Hello time $hello_time": [
  null,
  ""
 ],
 "IP Address": [
  null,
  ""
 ],
 "IP Settings": [
  null,
  ""
 ],
 "IPv4": [
  null,
  "IPv4"
 ],
 "IPv4 Settings": [
  null,
  "IPv4 Ayarları"
 ],
 "IPv6": [
  null,
  "IPv6"
 ],
 "IPv6 Settings": [
  null,
  "IPv6 Ayarları"
 ],
 "Id $id": [
  null,
  ""
 ],
 "Ignore": [
  null,
  "Yoksay"
 ],
 "Inactive": [
  null,
  "Aktif değil"
 ],
 "Interfaces": [
  null,
  "Arayüzler"
 ],
 "Invalid address $0": [
  null,
  "Geçersiz anahtar"
 ],
 "Invalid metric $0": [
  null,
  "Geçersiz anahtar"
 ],
 "Invalid prefix $0": [
  null,
  "Geçersiz port"
 ],
 "Invalid prefix or netmask $0": [
  null,
  "Geçersiz port"
 ],
 "Keep connection": [
  null,
  ""
 ],
 "LACP Key": [
  null,
  ""
 ],
 "Link Monitoring": [
  null,
  ""
 ],
 "Link Watch": [
  null,
  ""
 ],
 "Link down delay": [
  null,
  ""
 ],
 "Link local": [
  null,
  ""
 ],
 "Link up delay": [
  null,
  ""
 ],
 "Load Balancing": [
  null,
  ""
 ],
 "MAC": [
  null,
  ""
 ],
 "MII (Recommended)": [
  null,
  ""
 ],
 "MTU": [
  null,
  ""
 ],
 "MTU must be a positive number": [
  null,
  "Boyut belirtilmeli"
 ],
 "Manual": [
  null,
  "Elle"
 ],
 "Master": [
  null,
  "Ana"
 ],
 "Maximum message age $max_age": [
  null,
  ""
 ],
 "Members": [
  null,
  "Üyeler"
 ],
 "Mode": [
  null,
  "Mod"
 ],
 "Monitoring Interval": [
  null,
  "İzleme Sıklığı"
 ],
 "Monitoring Targets": [
  null,
  "İzleme Hedefleri"
 ],
 "NSNA Ping": [
  null,
  ""
 ],
 "Name": [
  null,
  "İsim"
 ],
 "Networking": [
  null,
  ""
 ],
 "Networking Logs": [
  null,
  ""
 ],
 "No": [
  null,
  "Hayır"
 ],
 "No carrier": [
  null,
  "Taşıyıcı yok"
 ],
 "Not available": [
  null,
  ""
 ],
 "Off": [
  null,
  "Kapalı"
 ],
 "On": [
  null,
  "Açık"
 ],
 "Parent": [
  null,
  "Ana"
 ],
 "Parent $parent": [
  null,
  ""
 ],
 "Part of ": [
  null,
  "Parçası: "
 ],
 "Passive": [
  null,
  ""
 ],
 "Path cost": [
  null,
  ""
 ],
 "Path cost $path_cost": [
  null,
  ""
 ],
 "Permanent": [
  null,
  ""
 ],
 "Ping Interval": [
  null,
  ""
 ],
 "Ping Target": [
  null,
  ""
 ],
 "Ports": [
  null,
  "Portlar"
 ],
 "Prefix length": [
  null,
  "Ön ek uzunluğu"
 ],
 "Prefix length or Netmask": [
  null,
  "Ön ek uzunluğu ya da ağ maskesi"
 ],
 "Preparing": [
  null,
  "Hazırlanıyor"
 ],
 "Preserve": [
  null,
  ""
 ],
 "Primary": [
  null,
  "Öncelikli"
 ],
 "Priority": [
  null,
  "Öncelik"
 ],
 "Priority $priority": [
  null,
  "Öncelik $priority"
 ],
 "Random": [
  null,
  ""
 ],
 "Reboot": [
  null,
  ""
 ],
 "Receiving": [
  null,
  ""
 ],
 "Remove $0": [
  null,
  ""
 ],
 "Removing <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Restoring connection": [
  null,
  "Bağlanırken hata."
 ],
 "Round Robin": [
  null,
  "Round Robin"
 ],
 "Routes": [
  null,
  "Yönlendirmeler"
 ],
 "Runner": [
  null,
  ""
 ],
 "STP Forward delay": [
  null,
  ""
 ],
 "STP Hello time": [
  null,
  ""
 ],
 "STP Maximum message age": [
  null,
  ""
 ],
 "STP Priority": [
  null,
  "STP Önceliği"
 ],
 "Sending": [
  null,
  ""
 ],
 "Set to": [
  null,
  "Zamanı Ayarla"
 ],
 "Shared": [
  null,
  "Paylaşılan"
 ],
 "Spanning Tree Protocol": [
  null,
  "Spanning Tree Protocol"
 ],
 "Spanning Tree Protocol (STP)": [
  null,
  "Spanning Tree Protocol (STP)"
 ],
 "Stable": [
  null,
  ""
 ],
 "Status": [
  null,
  "Durum"
 ],
 "Sticky": [
  null,
  ""
 ],
 "Switch off $0": [
  null,
  ""
 ],
 "Switch on $0": [
  null,
  ""
 ],
 "Switching off <b>$0</b>  will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Switching off <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Switching on <b>$0</b> will break the connection to the server, and will make the administration UI unavailable.": [
  null,
  ""
 ],
 "Team": [
  null,
  ""
 ],
 "Team Port": [
  null,
  ""
 ],
 "Team Port Settings": [
  null,
  ""
 ],
 "Team Settings": [
  null,
  ""
 ],
 "Testing connection": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify network settings": [
  null,
  ""
 ],
 "This device cannot be managed here.": [
  null,
  ""
 ],
 "Unexpected error": [
  null,
  "Beklenmeyen hata"
 ],
 "Unknown": [
  null,
  "Bilinmiyor"
 ],
 "Unknown \"$0\"": [
  null,
  ""
 ],
 "Unknown configuration": [
  null,
  "Bilinmeyen konfigrasyon"
 ],
 "Unmanaged Interfaces": [
  null,
  ""
 ],
 "VLAN": [
  null,
  "VLAN"
 ],
 "VLAN Id": [
  null,
  "VLAN id"
 ],
 "VLAN Settings": [
  null,
  ""
 ],
 "Waiting": [
  null,
  "Bekleniyor"
 ],
 "XOR": [
  null,
  "XOR"
 ],
 "Yes": [
  null,
  "Evet"
 ],
 "[$0 bytes of binary data]": [
  null,
  ""
 ],
 "[binary data]": [
  null,
  ""
 ],
 "[no data]": [
  null,
  ""
 ],
 "page-title\u0004Networking": [
  null,
  ""
 ]
}));
