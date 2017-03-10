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
  "x-generator": "Zanata 3.9.6"
 },
 " (shared with the OS)": [
  null,
  ""
 ],
 "$0 day": [
  "$0 days",
  ""
 ],
 "$0 hour": [
  "$0 hours",
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  ""
 ],
 "$0 month": [
  "$0 months",
  ""
 ],
 "$0 shares": [
  null,
  "$0 공유"
 ],
 "$0 week": [
  "$0 weeks",
  ""
 ],
 "$0 year": [
  "$0 years",
  ""
 ],
 "${hip}:${hport} -> $cport": [
  null,
  "${hip}:${hport} -> $cport"
 ],
 "Add Additional Storage": [
  null,
  ""
 ],
 "Add Storage": [
  null,
  ""
 ],
 "Additional Storage": [
  null,
  ""
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  ""
 ],
 "Always": [
  null,
  ""
 ],
 "Are you sure you want to delete this image?": [
  null,
  ""
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
  ""
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
  ""
 ],
 "Change resource limits": [
  null,
  ""
 ],
 "Change resources limits": [
  null,
  ""
 ],
 "Close": [
  null,
  "닫기"
 ],
 "Combined CPU usage": [
  null,
  ""
 ],
 "Combined memory usage": [
  null,
  ""
 ],
 "Command": [
  null,
  "명령"
 ],
 "Command can't be empty": [
  null,
  ""
 ],
 "Command:": [
  null,
  ""
 ],
 "Commit": [
  null,
  ""
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
  ""
 ],
 "Created:": [
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
 "Delete $0": [
  null,
  ""
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "컨테이너를 삭제하시면, 내부의 모든 데이터도 함께 삭제됩니다. "
 ],
 "Deleting an image will delete it, but you can probably download it again if you need it later.  Unless this image has never been pushed to a repository, that is, in which case you probably can't download it again.": [
  null,
  "이미지를 삭제하시면 실제 파일이 삭제되지만, 필요할 때 다시 다운로드 하실 수 있습니다. 만일 이미지가 리포지터리에 한번도 푸쉬되지 않았다면, 다시 다운로드 하실 수 없습니다."
 ],
 "Details": [
  null,
  ""
 ],
 "Docker is not installed or activated on the system": [
  null,
  "본 시스템에 Docker가 설치되어 있지 않거나 활성화되어 있지 않습니다."
 ],
 "Download": [
  null,
  ""
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
  ""
 ],
 "Environment": [
  null,
  ""
 ],
 "Erase containers and reset storage pool": [
  null,
  ""
 ],
 "Erase containers, reformat disks, and add them": [
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
  ""
 ],
 "Gateway:": [
  null,
  ""
 ],
 "Get new image": [
  null,
  ""
 ],
 "Hard Disk": [
  null,
  ""
 ],
 "IP Address:": [
  null,
  "IP 주소"
 ],
 "IP Prefix Length:": [
  null,
  "접두 길이"
 ],
 "Id": [
  null,
  ""
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
  ""
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
  ""
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
  ""
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
  ""
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
 "ReadOnly": [
  null,
  "준비됨"
 ],
 "ReadWrite": [
  null,
  ""
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
  ""
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
  ""
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
  ""
 ],
 "Run Image": [
  null,
  ""
 ],
 "Security": [
  null,
  ""
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
  ""
 ],
 "Solid-State Disk": [
  null,
  ""
 ],
 "Start": [
  null,
  ""
 ],
 "Start Docker": [
  null,
  "Docker 시작"
 ],
 "State": [
  null,
  ""
 ],
 "State:": [
  null,
  ""
 ],
 "Stop": [
  null,
  ""
 ],
 "Stopped": [
  null,
  "정지됨"
 ],
 "Storage": [
  null,
  ""
 ],
 "Storage pool": [
  null,
  ""
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
  ""
 ],
 "The Docker storage pool cannot be managed on this system.": [
  null,
  ""
 ],
 "The storage pool will be reset to optimize its layout.  All containers will be erased.": [
  null,
  ""
 ],
 "This image does not exist.": [
  null,
  ""
 ],
 "Total": [
  null,
  ""
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
 "Up since $StartedAt": [
  null,
  "$StartedAt 부터 켜져있음"
 ],
 "Used": [
  null,
  ""
 ],
 "Used by Containers": [
  null,
  "컨테이너들"
 ],
 "Volumes": [
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
  ""
 ],
 "none": [
  null,
  "없음"
 ],
 "search by name, namespace or description": [
  null,
  ""
 ],
 "select container": [
  null,
  ""
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
  ""
 ],
 "page-title\u0004Containers": [
  null,
  "컨테이너"
 ],
 "page-title\u0004Images": [
  null,
  "이미지"
 ]
}));
