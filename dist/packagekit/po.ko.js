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
  "x-generator": "Zanata 4.6.2"
 },
 "$0 is not available from any repository.": [
  null,
  ""
 ],
 "$0 update": [
  "$0 updates",
  "$0 업데이트 "
 ],
 "$0 will be installed.": [
  null,
  ""
 ],
 "$1 security fix": [
  "$1 security fixes",
  "$1 보안 수정"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  ""
 ],
 "Additional packages:": [
  null,
  "추가 패키지 :"
 ],
 "Apply all updates": [
  null,
  "모든 업데이트 적용"
 ],
 "Apply security updates": [
  null,
  "보안 업데이트 적용"
 ],
 "Applying updates": [
  null,
  "업데이트 적용 중 "
 ],
 "Applying updates failed": [
  null,
  "업데이트 적용 실패"
 ],
 "Automatic Updates": [
  null,
  "자동 업데이트"
 ],
 "Available Updates": [
  null,
  "사용 가능한 업데이트"
 ],
 "Bugs:": [
  null,
  "버그:"
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Check for Updates": [
  null,
  "업데이트 확인"
 ],
 "Checking installed software": [
  null,
  "설치된 소프트웨어 확인 중 "
 ],
 "Details": [
  null,
  "상세 정보"
 ],
 "Downloaded": [
  null,
  ""
 ],
 "Downloading": [
  null,
  ""
 ],
 "Downloading $0": [
  null,
  ""
 ],
 "Errata:": [
  null,
  "에라타: "
 ],
 "Ignore": [
  null,
  "무시"
 ],
 "Initializing...": [
  null,
  ""
 ],
 "Install": [
  null,
  "설치"
 ],
 "Install All Updates": [
  null,
  ""
 ],
 "Install Security Updates": [
  null,
  ""
 ],
 "Install Software": [
  null,
  ""
 ],
 "Installed": [
  null,
  "설치됨"
 ],
 "Installing": [
  null,
  "설치 중"
 ],
 "Installing $0": [
  null,
  ""
 ],
 "Last checked: $0 ago": [
  null,
  ""
 ],
 "Loading available updates failed": [
  null,
  ""
 ],
 "Loading available updates, please wait...": [
  null,
  ""
 ],
 "Name": [
  null,
  "이름"
 ],
 "No updates pending": [
  null,
  ""
 ],
 "Off": [
  null,
  "비활성"
 ],
 "Ok": [
  null,
  "확인"
 ],
 "On": [
  null,
  "활성"
 ],
 "Package information": [
  null,
  ""
 ],
 "PackageKit is not installed": [
  null,
  ""
 ],
 "PackageKit reported error code $0": [
  null,
  ""
 ],
 "Refreshing package information": [
  null,
  ""
 ],
 "Register…": [
  null,
  ""
 ],
 "Removals:": [
  null,
  ""
 ],
 "Removing $0": [
  null,
  ""
 ],
 "Restart Now": [
  null,
  ""
 ],
 "Restart Recommended": [
  null,
  ""
 ],
 "Restarting": [
  null,
  ""
 ],
 "Set up": [
  null,
  ""
 ],
 "Setting up": [
  null,
  ""
 ],
 "Severity": [
  null,
  "심각도"
 ],
 "Severity:": [
  null,
  ""
 ],
 "Software Updates": [
  null,
  "소프트웨어 업데이트"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  ""
 ],
 "System is up to date": [
  null,
  "시스템이 업데이트되었음"
 ],
 "The following packages were recently updated:": [
  null,
  ""
 ],
 "The following packages were updated $0:": [
  null,
  ""
 ],
 "This system is not registered": [
  null,
  ""
 ],
 "This web console will be updated.": [
  null,
  ""
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  ""
 ],
 "Total size: $0": [
  null,
  ""
 ],
 "Update History": [
  null,
  ""
 ],
 "Update Log": [
  null,
  ""
 ],
 "Updated": [
  null,
  "업데이트됨"
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  ""
 ],
 "Updating": [
  null,
  ""
 ],
 "Verified": [
  null,
  ""
 ],
 "Verifying": [
  null,
  ""
 ],
 "Version": [
  null,
  "버전"
 ],
 "Waiting for other software management operations to finish": [
  null,
  ""
 ],
 "Your browser will disconnect, but this does not affect the update process. You can reconnect in a few moments to continue watching the progress.": [
  null,
  ""
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  ""
 ],
 "and restart the machine automatically.": [
  null,
  ""
 ],
 "at": [
  null,
  "시간:"
 ],
 "bug fix": [
  null,
  "버그 수정"
 ],
 "enhancement": [
  null,
  ""
 ],
 "every day": [
  null,
  ""
 ],
 "on Fridays": [
  null,
  ""
 ],
 "on Mondays": [
  null,
  ""
 ],
 "on Saturdays": [
  null,
  ""
 ],
 "on Sundays": [
  null,
  ""
 ],
 "on Thursdays": [
  null,
  ""
 ],
 "on Tuesdays": [
  null,
  ""
 ],
 "on Wednesdays": [
  null,
  ""
 ],
 "security": [
  null,
  "보안"
 ],
 "undefined": [
  null,
  ""
 ]
}));
