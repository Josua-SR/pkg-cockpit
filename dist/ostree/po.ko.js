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
  "x-generator": "Zanata 4.4.5"
 },
 "$0 key ID": [
  null,
  ""
 ],
 "$0 package": [
  null,
  ""
 ],
 "$0 packages": [
  null,
  ""
 ],
 "- Add New Repository": [
  null,
  "리포지터리 "
 ],
 "Add": [
  null,
  "추가"
 ],
 "Add Another Key": [
  null,
  ""
 ],
 "Additions": [
  null,
  ""
 ],
 "Apply": [
  null,
  "적용"
 ],
 "Available": [
  null,
  ""
 ],
 "Begins with '-----BEGIN PGP PUBLIC KEY BLOCK-----'": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Change Repository": [
  null,
  "리포지터리 "
 ],
 "Check for Updates": [
  null,
  ""
 ],
 "Checking for updates": [
  null,
  ""
 ],
 "Connecting to OSTree": [
  null,
  ""
 ],
 "Couldn't load settings for '$0': $1": [
  null,
  ""
 ],
 "Currently using:": [
  null,
  ""
 ],
 "Default": [
  null,
  "기본"
 ],
 "Delete": [
  null,
  "삭제"
 ],
 "Downgrades": [
  null,
  ""
 ],
 "Error loading remotes: $0": [
  null,
  ""
 ],
 "Expired Signature": [
  null,
  ""
 ],
 "Failed": [
  null,
  "실패하였습니다"
 ],
 "Good Signature": [
  null,
  ""
 ],
 "Invalid Signature": [
  null,
  ""
 ],
 "Name": [
  null,
  "이름"
 ],
 "No Deployments": [
  null,
  ""
 ],
 "No OSTree deployments found": [
  null,
  ""
 ],
 "No configuration data found": [
  null,
  "알 수 없는 설정"
 ],
 "No signature avaliable": [
  null,
  ""
 ],
 "Not authorized to update software on this system": [
  null,
  ""
 ],
 "OS $0 not found": [
  null,
  ""
 ],
 "OSTree is not available on this system": [
  null,
  ""
 ],
 "Operating System": [
  null,
  ""
 ],
 "Operating System Updates": [
  null,
  ""
 ],
 "Origin": [
  null,
  ""
 ],
 "Packages": [
  null,
  ""
 ],
 "Please provide a valid URL": [
  null,
  "올바른 네임스페이스를 입력하세요."
 ],
 "Please provide a valid name": [
  null,
  "올바른 네임스페이스를 입력하세요."
 ],
 "Rebase and Reboot": [
  null,
  ""
 ],
 "Receiving delta parts": [
  null,
  ""
 ],
 "Receiving metadata objects": [
  null,
  ""
 ],
 "Receiving objects: $0%": [
  null,
  ""
 ],
 "Reconnect": [
  null,
  "재연결"
 ],
 "Released": [
  null,
  ""
 ],
 "Removals": [
  null,
  ""
 ],
 "Roll Back and Reboot": [
  null,
  ""
 ],
 "Running": [
  null,
  "작동중"
 ],
 "Scanning metadata": [
  null,
  ""
 ],
 "Signature": [
  null,
  ""
 ],
 "Signed by": [
  null,
  ""
 ],
 "Software Updates": [
  null,
  ""
 ],
 "Status": [
  null,
  "상태"
 ],
 "This deployment contains the same packages as your currently booted system": [
  null,
  ""
 ],
 "Tree": [
  null,
  ""
 ],
 "URL": [
  null,
  ""
 ],
 "Unable to communicate with OSTree": [
  null,
  ""
 ],
 "Update and Reboot": [
  null,
  ""
 ],
 "Updates": [
  null,
  ""
 ],
 "Updating": [
  null,
  ""
 ],
 "Use trusted GPG key": [
  null,
  ""
 ],
 "Version": [
  null,
  "버전"
 ],
 "When": [
  null,
  ""
 ],
 "Writing objects": [
  null,
  ""
 ],
 "at": [
  null,
  "Path cost"
 ]
}));
