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
 "$0 will be installed.": [
  null,
  ""
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
 "Checking installed software": [
  null,
  "설치된 소프트웨어 확인 중 "
 ],
 "Class": [
  null,
  "클래스 "
 ],
 "Close": [
  null,
  "닫기"
 ],
 "Command": [
  null,
  "명령"
 ],
 "Condition failed": [
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
 "Disk I/O": [
  null,
  "디스크 I/O"
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
 "Enable stored metrics…": [
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
 "Hours": [
  null,
  "시"
 ],
 "I/O Wait": [
  null,
  ""
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
 "Invalid time zone": [
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
 "Last 24 hours": [
  null,
  ""
 ],
 "Last 7 days": [
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
 "Machine ID": [
  null,
  ""
 ],
 "Machine SSH Key Fingerprints": [
  null,
  ""
 ],
 "Manually": [
  null,
  "수동"
 ],
 "Memory": [
  null,
  "메모리"
 ],
 "Memory & Swap": [
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
 "Name": [
  null,
  "이름"
 ],
 "Network Traffic": [
  null,
  ""
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
 "Only Emergency": [
  null,
  ""
 ],
 "Operating System": [
  null,
  "운영 체제"
 ],
 "PCI": [
  null,
  "PCI"
 ],
 "Paths": [
  null,
  "경로 "
 ],
 "Performance Profile": [
  null,
  ""
 ],
 "Power Options": [
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
 "Real Host Name": [
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
 "Seconds": [
  null,
  ""
 ],
 "Secure Shell Keys": [
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
 "Slot": [
  null,
  ""
 ],
 "Sockets": [
  null,
  "소켓 "
 ],
 "Specific Time": [
  null,
  ""
 ],
 "Store metrics": [
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
 "System Services": [
  null,
  ""
 ],
 "System Time": [
  null,
  ""
 ],
 "Targets": [
  null,
  ""
 ],
 "Terminal": [
  null,
  "터미널"
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
 ]
}));
