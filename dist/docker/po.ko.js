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
 "Advanced TCA": [
  null,
  "고급 TCA"
 ],
 "All In One": [
  null,
  "일체형 "
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "선택된 디스크의 모든 데이터가 삭제되며 디스크는 스토리지 풀에 추가됩니다. "
 ],
 "Always": [
  null,
  "항상"
 ],
 "Author": [
  null,
  "작성자"
 ],
 "Blade": [
  null,
  "블레이드 "
 ],
 "Blade enclosure": [
  null,
  "블레이드 인클로저 "
 ],
 "Bus Expansion Chassis": [
  null,
  "버스 확장 섀시"
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
  "총 메모리 사용량 "
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  "$0 CPU 코어의 총 사용량"
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
  "이미지 커밋 "
 ],
 "Compact PCI": [
  null,
  "PCI 압축 "
 ],
 "Configure storage...": [
  null,
  "스토리지 설정..."
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
  "컨테이너:"
 ],
 "Containers": [
  null,
  "컨테이너들"
 ],
 "Convertible": [
  null,
  "변환 가능 "
 ],
 "Could not add all disks": [
  null,
  "모든 디스크를 추가할 수 없습니다 "
 ],
 "Could not reset the storage pool": [
  null,
  "스토리지 풀을 재설정할 수 없습니다 "
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
 "Desktop": [
  null,
  "데스크탑"
 ],
 "Detachable": [
  null,
  "분리 가능 "
 ],
 "Details": [
  null,
  "상세 정보"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "본 시스템에 Docker가 설치되어 있지 않거나 활성화되어 있지 않습니다."
 ],
 "Docking Station": [
  null,
  "도킹 스테이션 "
 ],
 "Download": [
  null,
  "다운로드 "
 ],
 "Drive": [
  null,
  "드라이브"
 ],
 "Duplicate alias": [
  null,
  "alias 복제"
 ],
 "Duplicate port": [
  null,
  "포트 복제"
 ],
 "Embedded PC": [
  null,
  "임베디드 PC"
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
  "컨테이너 제거 및 스토리지 풀 재설정 "
 ],
 "Error message from Docker:": [
  null,
  "Docker로 부터의 오류 메세지:"
 ],
 "Everything": [
  null,
  "전체 "
 ],
 "Exited $ExitCode": [
  null,
  "$ExitCode 로 종료"
 ],
 "Expansion Chassis": [
  null,
  "확장 섀시"
 ],
 "Expose container ports": [
  null,
  "컨테이너 포트 공개 "
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
  "새 이미지 가져오기 "
 ],
 "Hand Held": [
  null,
  "휴대용 "
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
  "IP 접두어 길이:"
 ],
 "Id": [
  null,
  "ID "
 ],
 "Id:": [
  null,
  "Id:"
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
  "이미지 검색 "
 ],
 "Image:": [
  null,
  "이미지: "
 ],
 "Images": [
  null,
  "이미지 "
 ],
 "Images and running containers": [
  null,
  "이미지 및 실행 중인 컨테이너 "
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  "Docker 스토리지 풀에 관한 정보를 사용할 수 없습니다. "
 ],
 "Invalid port": [
  null,
  "잘못된 포트"
 ],
 "IoT Gateway": [
  null,
  "IoT 게이트웨이 "
 ],
 "Laptop": [
  null,
  "랩탑 "
 ],
 "Link to another container": [
  null,
  "다른 컨테이너로의 링크 "
 ],
 "Links": [
  null,
  "링크"
 ],
 "Links:": [
  null,
  "링크: "
 ],
 "Local Disks": [
  null,
  "로컬 디스크 "
 ],
 "Low Profile Desktop": [
  null,
  "낮은 프로파일 데스크탑 "
 ],
 "Lunch Box": [
  null,
  "Lunch Box"
 ],
 "MAC Address:": [
  null,
  "MAC 주소:"
 ],
 "Main Server Chassis": [
  null,
  "메인 서버 섀시 "
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
  "메모리 사용량: "
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Mini PC": [
  null,
  "미니 PC"
 ],
 "Mini Tower": [
  null,
  "미니 타워 "
 ],
 "Mount container volumes": [
  null,
  "컨테이너 볼륨 마운트 "
 ],
 "Multi-system Chassis": [
  null,
  "멀티 시스템 섀시 "
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
  "추가 로컬 스토리지를 찾을 수 없습니다. "
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
  "컨테이너 없음 "
 ],
 "No containers that match the current filter": [
  null,
  "현재 필터에 일치하는 컨테이너가 없습니다 "
 ],
 "No images": [
  null,
  "이미지 없음"
 ],
 "No images that match the current filter": [
  null,
  "현재 필터에 일치하는 이미지가 없습니다 "
 ],
 "No results for $0": [
  null,
  "$0의 결과를 찾을 수 없습니다 "
 ],
 "No running containers": [
  null,
  "실행 중인 컨테이너가 없습니다 "
 ],
 "No running containers that match the current filter": [
  null,
  "현재 필터에 일치하는 실행 중인 컨테이너가 없습니다 "
 ],
 "Not authorized to access Docker on this system": [
  null,
  "본 시스템 상의 Docker에 대한 접근 권한이 없습니다."
 ],
 "Not found": [
  null,
  "찾을 수 없습니다."
 ],
 "Notebook": [
  null,
  "노트북 "
 ],
 "Ok": [
  null,
  "확인"
 ],
 "On Failure": [
  null,
  "오류 발생 시 "
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "오류 발생 시, $0 번 다시 시도 "
 ],
 "Other": [
  null,
  "기타"
 ],
 "Overview": [
  null,
  "개요"
 ],
 "Peripheral Chassis": [
  null,
  "주변 장치 섀시 "
 ],
 "Pizza Box": [
  null,
  "Pizza Box"
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
  "다른 용어를 사용해 보십시오 "
 ],
 "Portable": [
  null,
  "이동식 "
 ],
 "Ports": [
  null,
  "포트"
 ],
 "Ports:": [
  null,
  "포트:"
 ],
 "Problems": [
  null,
  "문제 "
 ],
 "RAID Chassis": [
  null,
  "RAID 섀시 "
 ],
 "Rack Mount Chassis": [
  null,
  "랙 마운트 섀시 "
 ],
 "ReadOnly": [
  null,
  "읽기 전용 "
 ],
 "ReadWrite": [
  null,
  "읽기쓰기 "
 ],
 "Reboot": [
  null,
  "다시 시작"
 ],
 "Reformat and add disks": [
  null,
  "디스크 재포맷 및 디스크 추가 "
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
  "스토리지 풀 재설정 "
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  "스토리지 풀을 재설정하면 풀의 모든 컨테이너와 릴리스 디스크가 삭제됩니다."
 ],
 "Restart": [
  null,
  "재시작"
 ],
 "Restart Policy": [
  null,
  "재시작 정책 "
 ],
 "Restart Policy:": [
  null,
  "재시작 정책: "
 ],
 "Retries:": [
  null,
  "재시도 횟수: "
 ],
 "Run": [
  null,
  "실행"
 ],
 "Run Image": [
  null,
  "이미지 실행"
 ],
 "Sealed-case PC": [
  null,
  "쉴드 케이스 PC"
 ],
 "Security": [
  null,
  "보안"
 ],
 "Set container environment variables": [
  null,
  "컨테이너 환경 변수 설정 "
 ],
 "Show all containers": [
  null,
  "모든 컨테이너 표시 "
 ],
 "Show all images": [
  null,
  "모든 이미지 표시 "
 ],
 "Size": [
  null,
  "크기"
 ],
 "Solid-State Disk": [
  null,
  "솔리드 스테이트 디스크 "
 ],
 "Space-saving Computer": [
  null,
  "공간 절약형 컴퓨터 "
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
 "Stick PC": [
  null,
  "스틱 PC"
 ],
 "Stop": [
  null,
  "중지 "
 ],
 "Stop and delete": [
  null,
  "중지 및 삭제 "
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
 "Sub Chassis": [
  null,
  "서브 섀시 "
 ],
 "Sub Notebook": [
  null,
  "서브 노트북 "
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Tablet": [
  null,
  "타블렛"
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
  "Docker 스토리지 풀은 이 시스템에서 관리할 수 없습니다. "
 ],
 "The following containers depend on this image and will become unusable.": [
  null,
  "다음 컨테이너는 이 이미지에 종속되어 있으며 사용할 수 없게 됩니다. "
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
  "이미지가 존재하지 않습니다."
 ],
 "Total": [
  null,
  "전체"
 ],
 "Tower": [
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
 "Unknown": [
  null,
  "알 수 없음"
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
  "볼륨: "
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
  "[바이너리 데이터]"
 ],
 "[no data]": [
  null,
  "[데이터 없음]"
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
  "공유"
 ],
 "to host path": [
  null,
  "호스트 경로"
 ],
 "to host port": [
  null,
  "호스트 포트로"
 ],
 "undefined": [
  null,
  "정의되지 않음 "
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
