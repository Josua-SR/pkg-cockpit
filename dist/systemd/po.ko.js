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
 "$0 Template": [
  null,
  ""
 ],
 "$0 is not available from any repository.": [
  null,
  ""
 ],
 "$0 will be installed.": [
  null,
  ""
 ],
 "1 Minute": [
  null,
  ""
 ],
 "1 day": [
  null,
  "1 일"
 ],
 "1 hour": [
  null,
  "1 시간"
 ],
 "1 min": [
  null,
  ""
 ],
 "1 week": [
  null,
  "1 주"
 ],
 "10th": [
  null,
  ""
 ],
 "11th": [
  null,
  ""
 ],
 "12th": [
  null,
  ""
 ],
 "13th": [
  null,
  ""
 ],
 "14th": [
  null,
  ""
 ],
 "15th": [
  null,
  ""
 ],
 "16th": [
  null,
  ""
 ],
 "17th": [
  null,
  ""
 ],
 "18th": [
  null,
  ""
 ],
 "19th": [
  null,
  ""
 ],
 "1st": [
  null,
  ""
 ],
 "2 min": [
  null,
  ""
 ],
 "20 Minutes": [
  null,
  ""
 ],
 "20th": [
  null,
  ""
 ],
 "21st": [
  null,
  ""
 ],
 "22nd": [
  null,
  ""
 ],
 "23rd": [
  null,
  ""
 ],
 "24th": [
  null,
  ""
 ],
 "25th": [
  null,
  ""
 ],
 "26th": [
  null,
  ""
 ],
 "27th": [
  null,
  ""
 ],
 "28th": [
  null,
  ""
 ],
 "29th": [
  null,
  ""
 ],
 "2nd": [
  null,
  ""
 ],
 "3 min": [
  null,
  ""
 ],
 "30th": [
  null,
  ""
 ],
 "31st": [
  null,
  ""
 ],
 "3rd": [
  null,
  ""
 ],
 "4 min": [
  null,
  ""
 ],
 "40 Minutes": [
  null,
  ""
 ],
 "4th": [
  null,
  ""
 ],
 "5 Minutes": [
  null,
  ""
 ],
 "5 min": [
  null,
  ""
 ],
 "5 minutes": [
  null,
  "5분"
 ],
 "5th": [
  null,
  ""
 ],
 "6 hours": [
  null,
  "6 시간"
 ],
 "60 Minutes": [
  null,
  ""
 ],
 "6th": [
  null,
  ""
 ],
 "7th": [
  null,
  ""
 ],
 "8th": [
  null,
  ""
 ],
 "9th": [
  null,
  ""
 ],
 "Additional packages:": [
  null,
  ""
 ],
 "Advanced TCA": [
  null,
  ""
 ],
 "After": [
  null,
  "뒤에"
 ],
 "After system boot": [
  null,
  ""
 ],
 "Alert and above": [
  null,
  ""
 ],
 "All In One": [
  null,
  ""
 ],
 "Asset Tag": [
  null,
  "자산 태그"
 ],
 "At specific time": [
  null,
  ""
 ],
 "Automatically using NTP": [
  null,
  ""
 ],
 "Automatically using specific NTP servers": [
  null,
  ""
 ],
 "BIOS": [
  null,
  "BIOS"
 ],
 "BIOS date": [
  null,
  ""
 ],
 "BIOS version": [
  null,
  ""
 ],
 "Before": [
  null,
  "앞에"
 ],
 "Binds To": [
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
 "Bound By": [
  null,
  ""
 ],
 "Bug Fix Updates Available": [
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
 "Cached": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Cannot schedule event in the past": [
  null,
  ""
 ],
 "Change": [
  null,
  "바꾸기"
 ],
 "Change Host Name": [
  null,
  ""
 ],
 "Change System Time": [
  null,
  ""
 ],
 "Checking for updates…": [
  null,
  ""
 ],
 "Checking installed software": [
  null,
  ""
 ],
 "Class": [
  null,
  "클래스 "
 ],
 "Click to see system hardware information": [
  null,
  ""
 ],
 "Close": [
  null,
  "닫기"
 ],
 "Command": [
  null,
  "명령"
 ],
 "Compact PCI": [
  null,
  ""
 ],
 "Condition $0=$1 was not met": [
  null,
  ""
 ],
 "Condition failed": [
  null,
  ""
 ],
 "Conflicted By": [
  null,
  ""
 ],
 "Conflicts": [
  null,
  "충돌"
 ],
 "Consists Of": [
  null,
  ""
 ],
 "Convertible": [
  null,
  ""
 ],
 "Create Timer": [
  null,
  ""
 ],
 "Create Timers": [
  null,
  ""
 ],
 "Critical and above": [
  null,
  ""
 ],
 "Current boot": [
  null,
  ""
 ],
 "Debug and above": [
  null,
  ""
 ],
 "Delay": [
  null,
  ""
 ],
 "Description": [
  null,
  "설명"
 ],
 "Desktop": [
  null,
  "데스크탑"
 ],
 "Detachable": [
  null,
  ""
 ],
 "Disable": [
  null,
  "비활성화"
 ],
 "Disabled": [
  null,
  "사용 안함"
 ],
 "Disk I/O": [
  null,
  "디스크 I/O"
 ],
 "Docking Station": [
  null,
  ""
 ],
 "Domain": [
  null,
  "도메인 "
 ],
 "Don't Repeat": [
  null,
  ""
 ],
 "Downloading $0": [
  null,
  ""
 ],
 "Embedded PC": [
  null,
  ""
 ],
 "Enable": [
  null,
  "사용"
 ],
 "Enable Forcefully": [
  null,
  ""
 ],
 "Enable persistent metrics…": [
  null,
  ""
 ],
 "Enabled": [
  null,
  "사용"
 ],
 "Enhancement Updates Available": [
  null,
  ""
 ],
 "Entry": [
  null,
  "항목"
 ],
 "Error": [
  null,
  "오류"
 ],
 "Error and above": [
  null,
  ""
 ],
 "Everything": [
  null,
  ""
 ],
 "Expansion Chassis": [
  null,
  ""
 ],
 "Friday": [
  null,
  "금요일"
 ],
 "General": [
  null,
  "일반"
 ],
 "Go to": [
  null,
  ""
 ],
 "Go to now": [
  null,
  "지금 바로 가기"
 ],
 "Hand Held": [
  null,
  ""
 ],
 "Hardware": [
  null,
  "하드웨어"
 ],
 "Hardware Information": [
  null,
  ""
 ],
 "Host Name": [
  null,
  "호스트명"
 ],
 "Hour : Minute": [
  null,
  ""
 ],
 "Hour needs to be a number between 0-23": [
  null,
  ""
 ],
 "Hours": [
  null,
  "시"
 ],
 "I/O Wait": [
  null,
  ""
 ],
 "Id": [
  null,
  "ID "
 ],
 "Info and above": [
  null,
  ""
 ],
 "Install": [
  null,
  "설치"
 ],
 "Install Software": [
  null,
  ""
 ],
 "Installing $0": [
  null,
  ""
 ],
 "Instantiate": [
  null,
  ""
 ],
 "Invalid date format": [
  null,
  ""
 ],
 "Invalid date format and invalid time format": [
  null,
  ""
 ],
 "Invalid date format.": [
  null,
  ""
 ],
 "Invalid number.": [
  null,
  ""
 ],
 "Invalid time format": [
  null,
  ""
 ],
 "Invalid time zone": [
  null,
  ""
 ],
 "IoT Gateway": [
  null,
  ""
 ],
 "Joins Namespace Of": [
  null,
  ""
 ],
 "Journal": [
  null,
  ""
 ],
 "Journal entry": [
  null,
  ""
 ],
 "Journal entry not found": [
  null,
  ""
 ],
 "Kernel": [
  null,
  "커널 "
 ],
 "Laptop": [
  null,
  ""
 ],
 "Last 24 hours": [
  null,
  ""
 ],
 "Last 7 days": [
  null,
  ""
 ],
 "Last Trigger": [
  null,
  ""
 ],
 "Load earlier entries": [
  null,
  ""
 ],
 "Loading...": [
  null,
  "로딩..."
 ],
 "Log messages": [
  null,
  ""
 ],
 "Logs": [
  null,
  "로그 "
 ],
 "Low Profile Desktop": [
  null,
  ""
 ],
 "Lunch Box": [
  null,
  ""
 ],
 "Machine ID": [
  null,
  ""
 ],
 "Machine SSH Key Fingerprints": [
  null,
  ""
 ],
 "Main Server Chassis": [
  null,
  ""
 ],
 "Manually": [
  null,
  "수동"
 ],
 "Mask": [
  null,
  "마스크 "
 ],
 "Mask Forcefully": [
  null,
  ""
 ],
 "Memory": [
  null,
  "메모리"
 ],
 "Memory & Swap": [
  null,
  ""
 ],
 "Message to logged in users": [
  null,
  ""
 ],
 "Mini PC": [
  null,
  ""
 ],
 "Mini Tower": [
  null,
  ""
 ],
 "Minute needs to be a number between 0-59": [
  null,
  ""
 ],
 "Minutes": [
  null,
  "분"
 ],
 "Model": [
  null,
  "모델 "
 ],
 "Monday": [
  null,
  "월요일"
 ],
 "Multi-system Chassis": [
  null,
  ""
 ],
 "NTP Server": [
  null,
  ""
 ],
 "Name": [
  null,
  "이름"
 ],
 "Need at least one NTP server": [
  null,
  ""
 ],
 "Network Traffic": [
  null,
  ""
 ],
 "Next Run": [
  null,
  "다음"
 ],
 "Nice": [
  null,
  "Nice"
 ],
 "No Delay": [
  null,
  ""
 ],
 "No host keys found.": [
  null,
  "찾을 수 없습니다."
 ],
 "Not authorized to upload-report": [
  null,
  ""
 ],
 "Not synchronized": [
  null,
  ""
 ],
 "Note": [
  null,
  "알림"
 ],
 "Notebook": [
  null,
  ""
 ],
 "Notice and above": [
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
 "On Failure": [
  null,
  "실패하였습니다"
 ],
 "Only Emergency": [
  null,
  ""
 ],
 "Only alphabets, numbers, : , _ , . , @ , - are allowed.": [
  null,
  ""
 ],
 "Operating System": [
  null,
  "운영 체제"
 ],
 "Other": [
  null,
  "기타"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "PackageKit crashed": [
  null,
  ""
 ],
 "Part Of": [
  null,
  ""
 ],
 "Paths": [
  null,
  "경로 "
 ],
 "Performance Profile": [
  null,
  ""
 ],
 "Peripheral Chassis": [
  null,
  ""
 ],
 "Pizza Box": [
  null,
  ""
 ],
 "Portable": [
  null,
  ""
 ],
 "Power Options": [
  null,
  ""
 ],
 "Preset": [
  null,
  ""
 ],
 "Preset Forcefully": [
  null,
  ""
 ],
 "Pretty Host Name": [
  null,
  ""
 ],
 "Problem details": [
  null,
  ""
 ],
 "Problem info": [
  null,
  ""
 ],
 "Propagates Reload To": [
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
 "Real Host Name": [
  null,
  ""
 ],
 "Real host name can only contain lower-case characters, digits, dashes, and periods (with populated subdomains)": [
  null,
  ""
 ],
 "Real host name must be 64 characters or less": [
  null,
  ""
 ],
 "Reboot": [
  null,
  "다시 시작"
 ],
 "Recent": [
  null,
  "최근"
 ],
 "Reload": [
  null,
  "다시읽기"
 ],
 "Reload Propagated From": [
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
 "Repeat Daily": [
  null,
  ""
 ],
 "Repeat Hourly": [
  null,
  ""
 ],
 "Repeat Monthly": [
  null,
  ""
 ],
 "Repeat Weekly": [
  null,
  ""
 ],
 "Repeat Yearly": [
  null,
  ""
 ],
 "Report": [
  null,
  "보고  "
 ],
 "Reported": [
  null,
  ""
 ],
 "Reporter 'reporter-ureport' not found.": [
  null,
  ""
 ],
 "Reporting was unsucessful. Try running `reporter-ureport -d ": [
  null,
  ""
 ],
 "Required By": [
  null,
  ""
 ],
 "Requires": [
  null,
  "요구 사항 "
 ],
 "Requisite": [
  null,
  ""
 ],
 "Requisite Of": [
  null,
  ""
 ],
 "Reset": [
  null,
  "초기화"
 ],
 "Restart": [
  null,
  "재시작"
 ],
 "Run": [
  null,
  "실행"
 ],
 "Saturday": [
  null,
  ""
 ],
 "Save": [
  null,
  "저장"
 ],
 "Sealed-case PC": [
  null,
  ""
 ],
 "Seconds": [
  null,
  ""
 ],
 "Secure Shell Keys": [
  null,
  ""
 ],
 "Security Updates Available": [
  null,
  ""
 ],
 "Service Logs": [
  null,
  ""
 ],
 "Service name": [
  null,
  ""
 ],
 "Services": [
  null,
  "서비스"
 ],
 "Set Host name": [
  null,
  ""
 ],
 "Set Time": [
  null,
  ""
 ],
 "Severity": [
  null,
  "심각도"
 ],
 "Show fingerprints": [
  null,
  ""
 ],
 "Shut Down": [
  null,
  "종료"
 ],
 "Since $0": [
  null,
  ""
 ],
 "Slot": [
  null,
  ""
 ],
 "Sockets": [
  null,
  "소켓 "
 ],
 "Space-saving Computer": [
  null,
  ""
 ],
 "Specific Time": [
  null,
  ""
 ],
 "Start": [
  null,
  "시작"
 ],
 "State": [
  null,
  "상태"
 ],
 "Static": [
  null,
  "정적"
 ],
 "Stick PC": [
  null,
  ""
 ],
 "Stop": [
  null,
  ""
 ],
 "Store Performance Data": [
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
 "Sunday": [
  null,
  "일요일"
 ],
 "Swap Used": [
  null,
  ""
 ],
 "Synchronized": [
  null,
  ""
 ],
 "Synchronized with {{Server}}": [
  null,
  ""
 ],
 "System": [
  null,
  "시스템 "
 ],
 "System Information": [
  null,
  "시스템 정보 "
 ],
 "System Not Registered": [
  null,
  ""
 ],
 "System Services": [
  null,
  ""
 ],
 "System Time": [
  null,
  ""
 ],
 "System Up To Date": [
  null,
  ""
 ],
 "Tablet": [
  null,
  "타블렛"
 ],
 "Targets": [
  null,
  ""
 ],
 "Terminal": [
  null,
  "터미널"
 ],
 "The user <b>$0</b> does not have permissions for creating timers": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to change the system time": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to enable or disable services": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to modify hostnames": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to shutdown or restart this server": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to start or stop services": [
  null,
  ""
 ],
 "This day doesn't exist in all months.<br> The timer will only be executed in months that have 31st.": [
  null,
  ""
 ],
 "This field cannot be empty.": [
  null,
  ""
 ],
 "This unit is an instance of the $0 template.": [
  null,
  ""
 ],
 "This unit is not designed to be enabled explicitly.": [
  null,
  ""
 ],
 "Thursday": [
  null,
  "목요일"
 ],
 "Time Zone": [
  null,
  "시간대"
 ],
 "Timers": [
  null,
  ""
 ],
 "Total size: $0": [
  null,
  ""
 ],
 "Tower": [
  null,
  ""
 ],
 "Triggered By": [
  null,
  ""
 ],
 "Triggers": [
  null,
  ""
 ],
 "Trying to synchronize with {{Server}}": [
  null,
  ""
 ],
 "Tuesday": [
  null,
  "화요일"
 ],
 "Type": [
  null,
  "유형"
 ],
 "Unknown": [
  null,
  "알 수 없음"
 ],
 "Unmask": [
  null,
  ""
 ],
 "Updates Available": [
  null,
  "사용 가능한 업데이트 "
 ],
 "Usage of $0 CPU core": [
  "Usage of $0 CPU cores",
  ""
 ],
 "Used": [
  null,
  "사용 중"
 ],
 "User": [
  null,
  "사용자"
 ],
 "Vendor": [
  null,
  "벤더"
 ],
 "Version": [
  null,
  "버전"
 ],
 "Waiting for other software management operations to finish": [
  null,
  ""
 ],
 "Wanted By": [
  null,
  ""
 ],
 "Wants": [
  null,
  ""
 ],
 "Warning and above": [
  null,
  ""
 ],
 "Wednesday": [
  null,
  "수요일"
 ],
 "Weeks": [
  null,
  ""
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
 "failed to list ssh host keys: $0": [
  null,
  " Docker 실행을 실패하였습니다: $0"
 ],
 "of $0 CPU core": [
  "of $0 CPU cores",
  ""
 ],
 "unknown": [
  null,
  "알 수 없음"
 ],
 "page-title\u0004CPU Status": [
  null,
  ""
 ],
 "page-title\u0004Memory": [
  null,
  "메모리"
 ]
}));
