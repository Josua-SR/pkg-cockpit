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
  "$0 템플릿 "
 ],
 "$0 is not available from any repository.": [
  null,
  "$0은/는 리포지터리에서 사용할 수 없습니다. "
 ],
 "$0 will be installed.": [
  null,
  "$0이/가 설치됩니다. "
 ],
 "1 Minute": [
  null,
  "1 분"
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
  "1분"
 ],
 "1 week": [
  null,
  "1주"
 ],
 "10th": [
  null,
  "10일 "
 ],
 "11th": [
  null,
  "11일"
 ],
 "12th": [
  null,
  "12일"
 ],
 "13th": [
  null,
  "13일"
 ],
 "14th": [
  null,
  "14일"
 ],
 "15th": [
  null,
  "15일"
 ],
 "16th": [
  null,
  "16일 "
 ],
 "17th": [
  null,
  "17일"
 ],
 "18th": [
  null,
  "18일"
 ],
 "19th": [
  null,
  "19일"
 ],
 "1st": [
  null,
  "1일 "
 ],
 "2 min": [
  null,
  "2분"
 ],
 "20 Minutes": [
  null,
  "20분"
 ],
 "20th": [
  null,
  "20일"
 ],
 "21st": [
  null,
  "21일"
 ],
 "22nd": [
  null,
  "22일 "
 ],
 "23rd": [
  null,
  "23일 "
 ],
 "24th": [
  null,
  "24일 "
 ],
 "25th": [
  null,
  "25일 "
 ],
 "26th": [
  null,
  "26일 "
 ],
 "27th": [
  null,
  "27일"
 ],
 "28th": [
  null,
  "28일 "
 ],
 "29th": [
  null,
  "29일"
 ],
 "2nd": [
  null,
  "2일 "
 ],
 "3 min": [
  null,
  "3분 "
 ],
 "30th": [
  null,
  "30일 "
 ],
 "31st": [
  null,
  "31일 "
 ],
 "3rd": [
  null,
  "3일 "
 ],
 "4 min": [
  null,
  "4분 "
 ],
 "40 Minutes": [
  null,
  "40분 "
 ],
 "4th": [
  null,
  "4일 "
 ],
 "5 Minutes": [
  null,
  "5분 "
 ],
 "5 min": [
  null,
  "5분 "
 ],
 "5 minutes": [
  null,
  "5분"
 ],
 "5th": [
  null,
  "5일 "
 ],
 "6 hours": [
  null,
  "6 시간"
 ],
 "60 Minutes": [
  null,
  "60분 "
 ],
 "6th": [
  null,
  "6일 "
 ],
 "7th": [
  null,
  "7일 "
 ],
 "8th": [
  null,
  "8일 "
 ],
 "9th": [
  null,
  "9일 "
 ],
 "Additional packages:": [
  null,
  "추가 패키지 :"
 ],
 "Advanced TCA": [
  null,
  "고급 TCA"
 ],
 "After": [
  null,
  "이후 "
 ],
 "After system boot": [
  null,
  "시스템 부팅 후"
 ],
 "Alert and above": [
  null,
  "경고 이상의 수준 "
 ],
 "All In One": [
  null,
  "일체형 "
 ],
 "Asset Tag": [
  null,
  "자산 태그"
 ],
 "At specific time": [
  null,
  "특정 시간  "
 ],
 "Automatic Startup": [
  null,
  ""
 ],
 "Automatically using NTP": [
  null,
  "자동으로 NTP 사용"
 ],
 "Automatically using specific NTP servers": [
  null,
  "특정 NTP 서버를 자동으로 사용"
 ],
 "BIOS": [
  null,
  "BIOS"
 ],
 "BIOS date": [
  null,
  "BIOS 날짜"
 ],
 "BIOS version": [
  null,
  "BIOS 버전"
 ],
 "Before": [
  null,
  "이전 "
 ],
 "Binds To": [
  null,
  "바인딩 "
 ],
 "Blade": [
  null,
  "블레이드 "
 ],
 "Blade enclosure": [
  null,
  "블레이드 인클로저 "
 ],
 "Bound By": [
  null,
  "바인딩됨 "
 ],
 "Bug Fix Updates Available": [
  null,
  "사용 가능한 버그 수정 업데이트"
 ],
 "Bus Expansion Chassis": [
  null,
  "버스 확장 섀시"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Cached": [
  null,
  "캐시됨 "
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
  "변경 "
 ],
 "Change Host Name": [
  null,
  "호스트 이름 변경"
 ],
 "Change System Time": [
  null,
  "시스템 시간 변경"
 ],
 "Checking for updates…": [
  null,
  "업데이트 확인 중 ..."
 ],
 "Checking installed software": [
  null,
  "설치된 소프트웨어 확인 중 "
 ],
 "Class": [
  null,
  "클래스 "
 ],
 "Click to see system hardware information": [
  null,
  "시스템 하드웨어 정보를 보려면 클릭하십시오."
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
  "조건이 충족되지 않았습니다 "
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
  "변환 가능 "
 ],
 "Create Timer": [
  null,
  "타이머 만들기 "
 ],
 "Create Timers": [
  null,
  "타이머 만들기 "
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
 "Details": [
  null,
  "상세 정보"
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
 "Enable stored metrics…": [
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
 "Path": [
  null,
  "경로"
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
  " $0 삭제 중 "
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
 "Running Since": [
  null,
  ""
 ],
 "Saturday": [
  null,
  "토요일 "
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
  "초"
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
  "서비스 로그 "
 ],
 "Service name": [
  null,
  "서비스 이름 "
 ],
 "Services": [
  null,
  "서비스"
 ],
 "Set Host name": [
  null,
  "호스트 이름 설정"
 ],
 "Set Time": [
  null,
  "시간 설정 "
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
 "Status": [
  null,
  "상태"
 ],
 "Stick PC": [
  null,
  ""
 ],
 "Stop": [
  null,
  ""
 ],
 "Store Metrics": [
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
  "시스템 서비스 "
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
  "대상 "
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
  "주 "
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
  "CPU 상태"
 ],
 "page-title\u0004Memory": [
  null,
  "메모리"
 ]
}));
