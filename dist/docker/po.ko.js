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
 " (shared with the OS)": [
  null,
  " (OS와 공유)"
 ],
 "$0 shares": [
  null,
  "$0 공유"
 ],
 "${hip}:${hport} -> $cport": [
  null,
  "${hip}:${hport} -> $cport"
 ],
 "Add Additional Storage": [
  null,
  "스토리지 추가 "
 ],
 "Add Storage": [
  null,
  "스토리지 추가 "
 ],
 "Additional Storage": [
  null,
  "추가 스토리지 "
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  ""
 ],
 "Always": [
  null,
  "항상"
 ],
 "Author": [
  null,
  "작성자"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU priority": [
  null,
  "CPU 우선순위"
 ],
 "CPU usage:": [
  null,
  "CPU 사용량:"
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  "Docker에 연결할 수 없습니다."
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Change": [
  null,
  "변경 "
 ],
 "Change resource limits": [
  null,
  "리소스 제한 변경"
 ],
 "Change resources limits": [
  null,
  "리소스 제한 변경"
 ],
 "Close": [
  null,
  "닫기"
 ],
 "Combined memory usage": [
  null,
  ""
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  ""
 ],
 "Command": [
  null,
  "명령"
 ],
 "Command can't be empty": [
  null,
  "명령을 비워 둘 수 없습니다."
 ],
 "Command:": [
  null,
  "명령:"
 ],
 "Commit": [
  null,
  "커밋 "
 ],
 "Commit Image": [
  null,
  ""
 ],
 "Configure storage...": [
  null,
  ""
 ],
 "Connecting to Docker": [
  null,
  "Docker에 연결중입니다."
 ],
 "Container": [
  null,
  "컨테이너 "
 ],
 "Container Name": [
  null,
  "컨테이너 이름"
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  "컨테이너는 현재 실행중이지 않은 것으로 보이지만, 정상적인 종료가 되지 않았습니다."
 ],
 "Container is currently running.": [
  null,
  "컨테이너가 현재 실행중입니다."
 ],
 "Container:": [
  null,
  ""
 ],
 "Containers": [
  null,
  "컨테이너들"
 ],
 "Could not add all disks": [
  null,
  ""
 ],
 "Could not reset the storage pool": [
  null,
  ""
 ],
 "Created": [
  null,
  "생성 일시"
 ],
 "Created:": [
  null,
  "작성일: "
 ],
 "Default": [
  null,
  "기본"
 ],
 "Delete": [
  null,
  "삭제"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "컨테이너를 삭제하시면, 내부의 모든 데이터도 함께 삭제됩니다. "
 ],
 "Details": [
  null,
  "상세 정보"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "본 시스템에 Docker가 설치되어 있지 않거나 활성화되어 있지 않습니다."
 ],
 "Download": [
  null,
  "다운로드 "
 ],
 "Drive": [
  null,
  ""
 ],
 "Duplicate alias": [
  null,
  "alias 복제"
 ],
 "Duplicate port": [
  null,
  "포트 복제"
 ],
 "Entrypoint": [
  null,
  "시작점"
 ],
 "Environment": [
  null,
  "환경"
 ],
 "Erase containers and reset storage pool": [
  null,
  ""
 ],
 "Error message from Docker:": [
  null,
  "Docker로 부터의 오류 메세지:"
 ],
 "Everything": [
  null,
  ""
 ],
 "Exited $ExitCode": [
  null,
  "$ExitCode 로 종료"
 ],
 "Expose container ports": [
  null,
  ""
 ],
 "Failed to start Docker: $0": [
  null,
  " Docker 실행을 실패하였습니다: $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  "Docker Scope를 정지하지 못했습니다: $0"
 ],
 "Force Delete": [
  null,
  "강제 삭제"
 ],
 "Free": [
  null,
  "남은 양"
 ],
 "Gateway:": [
  null,
  "게이트웨이:"
 ],
 "Get new image": [
  null,
  ""
 ],
 "Hard Disk": [
  null,
  "하드 디스크"
 ],
 "IP Address:": [
  null,
  "IP 주소:"
 ],
 "IP Prefix Length:": [
  null,
  "접두 길이"
 ],
 "Id": [
  null,
  "ID "
 ],
 "Id:": [
  null,
  ""
 ],
 "Image": [
  null,
  "이미지"
 ],
 "Image $0": [
  null,
  "이미지 $0"
 ],
 "Image Search": [
  null,
  ""
 ],
 "Image:": [
  null,
  ""
 ],
 "Images": [
  null,
  "이미지 "
 ],
 "Images and running containers": [
  null,
  ""
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  ""
 ],
 "Invalid port": [
  null,
  "잘못된 포트"
 ],
 "Link to another container": [
  null,
  ""
 ],
 "Links": [
  null,
  "링크"
 ],
 "Links:": [
  null,
  ""
 ],
 "Local Disks": [
  null,
  ""
 ],
 "MAC Address:": [
  null,
  "주소"
 ],
 "Memory": [
  null,
  "메모리"
 ],
 "Memory limit": [
  null,
  "메모리 제한"
 ],
 "Memory usage:": [
  null,
  ""
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Mount container volumes": [
  null,
  ""
 ],
 "Name": [
  null,
  "이름"
 ],
 "No": [
  null,
  "아니오"
 ],
 "No additional local storage found.": [
  null,
  ""
 ],
 "No alias specified": [
  null,
  "alias가 지정되지 않았습니다"
 ],
 "No container specified": [
  null,
  "컨테이너가 지정되지 않았습니다."
 ],
 "No containers": [
  null,
  ""
 ],
 "No containers that match the current filter": [
  null,
  ""
 ],
 "No images": [
  null,
  ""
 ],
 "No images that match the current filter": [
  null,
  ""
 ],
 "No results for $0": [
  null,
  ""
 ],
 "No running containers": [
  null,
  ""
 ],
 "No running containers that match the current filter": [
  null,
  ""
 ],
 "Not authorized to access Docker on this system": [
  null,
  "본 시스템 상의 Docker에 대한 접근 권한이 없습니다."
 ],
 "Not found": [
  null,
  "찾을 수 없습니다."
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
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  ""
 ],
 "Overview": [
  null,
  "개요"
 ],
 "Please confirm deletion of $0": [
  null,
  "$0 삭제를 확인해주세요"
 ],
 "Please confirm forced deletion of $0": [
  null,
  "$0 강제 삭제를 확인해주세요"
 ],
 "Please try another term": [
  null,
  ""
 ],
 "Ports": [
  null,
  "포트"
 ],
 "Ports:": [
  null,
  ""
 ],
 "Problems": [
  null,
  ""
 ],
 "ReadOnly": [
  null,
  "준비됨"
 ],
 "ReadWrite": [
  null,
  ""
 ],
 "Reboot": [
  null,
  "다시 시작"
 ],
 "Reformat and add disks": [
  null,
  ""
 ],
 "Repository": [
  null,
  "리포지터리 "
 ],
 "Reset": [
  null,
  "초기화"
 ],
 "Reset Storage Pool": [
  null,
  ""
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  ""
 ],
 "Restart": [
  null,
  "재시작"
 ],
 "Restart Policy": [
  null,
  ""
 ],
 "Restart Policy:": [
  null,
  ""
 ],
 "Retries:": [
  null,
  ""
 ],
 "Run": [
  null,
  "실행"
 ],
 "Run Image": [
  null,
  ""
 ],
 "Security": [
  null,
  "보안"
 ],
 "Set container environment variables": [
  null,
  ""
 ],
 "Show all containers": [
  null,
  ""
 ],
 "Show all images": [
  null,
  ""
 ],
 "Size": [
  null,
  "크기"
 ],
 "Solid-State Disk": [
  null,
  ""
 ],
 "Start": [
  null,
  "시작"
 ],
 "Start Docker": [
  null,
  "Docker 시작"
 ],
 "State": [
  null,
  "상태"
 ],
 "State:": [
  null,
  "상태:"
 ],
 "Stop": [
  null,
  ""
 ],
 "Stop and delete": [
  null,
  ""
 ],
 "Stopped": [
  null,
  "정지됨"
 ],
 "Storage": [
  null,
  "스토리지"
 ],
 "Storage pool": [
  null,
  "스토리지 풀 "
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Tag": [
  null,
  "태그"
 ],
 "Tags": [
  null,
  "태그"
 ],
 "The Docker storage pool cannot be managed on this system.": [
  null,
  ""
 ],
 "The following containers depend on this image and will become unusable.": [
  null,
  ""
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  ""
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  ""
 ],
 "This image does not exist.": [
  null,
  ""
 ],
 "Total": [
  null,
  "전체"
 ],
 "Try again": [
  null,
  "다시 시도"
 ],
 "Type to filter…": [
  null,
  ""
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "예상치 못한 오류"
 ],
 "Unless Stopped": [
  null,
  "정지됨"
 ],
 "Up since $0": [
  null,
  ""
 ],
 "Used": [
  null,
  "사용 중"
 ],
 "Used by Containers": [
  null,
  "컨테이너들"
 ],
 "Volumes": [
  null,
  "볼륨"
 ],
 "Volumes:": [
  null,
  ""
 ],
 "With terminal": [
  null,
  "터미널 실행"
 ],
 "You don't have permission to manage the Docker storage pool.": [
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
 "alias": [
  null,
  "alias"
 ],
 "default": [
  null,
  "기본"
 ],
 "key": [
  null,
  "키"
 ],
 "none": [
  null,
  "없음"
 ],
 "search by name, namespace or description": [
  null,
  "이름, 네임 스페이스, 설명으로 검색"
 ],
 "select container": [
  null,
  "컨테이너 선택 "
 ],
 "shares": [
  null,
  "$0 공유"
 ],
 "to host path": [
  null,
  "호스트 포트로"
 ],
 "to host port": [
  null,
  "호스트 포트로"
 ],
 "undefined": [
  null,
  ""
 ],
 "value": [
  null,
  "value"
 ],
 "page-title\u0004Containers": [
  null,
  "컨테이너"
 ],
 "page-title\u0004Images": [
  null,
  "이미지 "
 ]
}));
