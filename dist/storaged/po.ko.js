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
 "$0 Block Device": [
  null,
  "$0 블록 장치 "
 ],
 "$0 Chunk Size": [
  null,
  "$0 청크 크기 "
 ],
 "$0 Disks": [
  null,
  "$0 디스크"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  "$0 데이터 + $1 오버헤드가 $2 ($3) 사용"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 디스크 누락 "
 ],
 "$0 filesystems can not be made larger.": [
  null,
  "$0 파일 시스템을 더 크게 만들 수는 없습니다."
 ],
 "$0 filesystems can not be made smaller.": [
  null,
  "$0 파일 시스템을 더 작게 만들 수는 없습니다."
 ],
 "$0 filesystems can not be resized here.": [
  null,
  "$0 파일 시스템의 크기를 조정할 수 없습니다."
 ],
 "$0 is in active use": [
  null,
  "$0 은/는 현재 사용 중입니다. "
 ],
 "$0 is not available from any repository.": [
  null,
  "$0은/는 리포지터리에서 사용할 수 없습니다. "
 ],
 "$0 of $1": [
  null,
  "$0 / $1"
 ],
 "$0 slots remain": [
  null,
  "$0 슬롯이 남아 있습니다 "
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  "$0/$1 ($2 저장)을 사용하고 있습니다 "
 ],
 "$0 will be installed.": [
  null,
  "$0이/가 설치됩니다. "
 ],
 "$0, $1 free": [
  null,
  "$0, $1 여유 공간 "
 ],
 "$name (from $host)": [
  null,
  "$name ($host에서)"
 ],
 "${size} ${desc}": [
  null,
  "${size} ${desc}"
 ],
 "(default)": [
  null,
  "(기본값)"
 ],
 "(none)": [
  null,
  "(없음)"
 ],
 "--": [
  null,
  "--"
 ],
 "1 MiB": [
  null,
  "1 MiB"
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
 "128 KiB": [
  null,
  "128 KiB"
 ],
 "16 KiB": [
  null,
  "16 KiB"
 ],
 "2 MiB": [
  null,
  "2 MiB"
 ],
 "32 KiB": [
  null,
  "32 KiB"
 ],
 "4 KiB": [
  null,
  "4 KiB"
 ],
 "5 minutes": [
  null,
  "5분"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6 시간"
 ],
 "64 KiB": [
  null,
  "64 KiB"
 ],
 "8 KiB": [
  null,
  "8 KiB"
 ],
 "A disk is needed.": [
  null,
  "디스크가 필요합니다."
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  "디스크를 제거하기 전 예비용 디스크를 추가해야 합니다. "
 ],
 "Activate": [
  null,
  "활성화"
 ],
 "Activating $target": [
  null,
  " $target 활성화 중 "
 ],
 "Active since": [
  null,
  "이후 활성화 "
 ],
 "Add": [
  null,
  "추가"
 ],
 "Add Disks": [
  null,
  "디스크 추가"
 ],
 "Add Key": [
  null,
  "키 추가"
 ],
 "Add iSCSI Portal": [
  null,
  "iSCSI 포털 추가"
 ],
 "Adding physical volume to $target": [
  null,
  "$target에 물리 볼륨 추가 중 "
 ],
 "Additional packages:": [
  null,
  "추가 패키지 :"
 ],
 "Address": [
  null,
  "주소"
 ],
 "Address cannot be empty": [
  null,
  "주소는 비워 둘 수 없습니다."
 ],
 "Address is not a valid URL": [
  null,
  "주소가 유효하지 않습니다 "
 ],
 "Apply": [
  null,
  "적용"
 ],
 "At least $0 disks are needed.": [
  null,
  "최소 $0 개의 디스크가 필요합니다."
 ],
 "At least one disk is needed.": [
  null,
  "최소 1개의 디스크가 필요합니다."
 ],
 "Authentication required": [
  null,
  "인증이 필요합니다"
 ],
 "Available targets on $0": [
  null,
  "$0에서 사용 가능한 대상 "
 ],
 "Backing Device": [
  null,
  "백업 장치 "
 ],
 "Block": [
  null,
  "블록"
 ],
 "Block device for filesystems": [
  null,
  "파일 시스템의 블록 장치 "
 ],
 "Blocked": [
  null,
  "차단됨 "
 ],
 "Can't delete while unlocked": [
  null,
  "잠금 해제된 상태에서는 삭제할 수 없습니다."
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Change": [
  null,
  "변경 "
 ],
 "Change iSCSI Initiator Name": [
  null,
  "iSCSI 개시자 이름 변경 "
 ],
 "Change passphrase": [
  null,
  "암호문 변경 "
 ],
 "Checking $target": [
  null,
  "$target 확인 중 "
 ],
 "Checking RAID Device $target": [
  null,
  "RAID 장치 $target 확인 중 "
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "RAID 장치 $target 확인 및 복구 중 "
 ],
 "Checking installed software": [
  null,
  "설치된 소프트웨어 확인 중 "
 ],
 "Chunk Size": [
  null,
  "청크 크기 "
 ],
 "Cleaning up for $target": [
  null,
  "$target 정리 "
 ],
 "Close": [
  null,
  "닫기"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "모든 시스템과 장치와 호환됩니다 (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "최신 시스템과 2TB 이상의 하드 디스크와 호환됩니다 (GPT)"
 ],
 "Compression": [
  null,
  "압축"
 ],
 "Confirm": [
  null,
  "확인"
 ],
 "Confirm removal with passphrase": [
  null,
  "암호문 삭제 확인 "
 ],
 "Content": [
  null,
  "컨텐츠"
 ],
 "Create": [
  null,
  "생성"
 ],
 "Create Logical Volume": [
  null,
  "논리 볼륨 만들기 "
 ],
 "Create Partition": [
  null,
  "파티션 만들기"
 ],
 "Create Partition Table": [
  null,
  "파티션 테이블 만들기 "
 ],
 "Create Partition on $0": [
  null,
  "$0에 파티션 만들기"
 ],
 "Create RAID Device": [
  null,
  "RAID 장치 만들기 "
 ],
 "Create Snapshot": [
  null,
  "스냅샷 생성 "
 ],
 "Create Thin Volume": [
  null,
  "씬 볼륨 만들기 "
 ],
 "Create VDO Device": [
  null,
  "VDO 장치 만들기 "
 ],
 "Create Volume Group": [
  null,
  "볼륨 그룹 생성"
 ],
 "Create new Logical Volume": [
  null,
  "새 볼륨 그룹 만들기 "
 ],
 "Creating RAID Device $target": [
  null,
  "RAID 장치 $target 만들기 "
 ],
 "Creating filesystem on $target": [
  null,
  "$target에 파일 시스템 만드는 중 "
 ],
 "Creating logical volume $target": [
  null,
  "논리 볼륨 $target 만드는 중 "
 ],
 "Creating partition $target": [
  null,
  "파티션 $target 생성 중 "
 ],
 "Creating snapshot of $target": [
  null,
  "$target 스냅샷 생성 중"
 ],
 "Creating volume group $target": [
  null,
  "볼륨 그룹 $target 생성 중 "
 ],
 "Custom": [
  null,
  "사용자 지정"
 ],
 "Custom encryption options": [
  null,
  "사용자 지정 암호화 옵션 "
 ],
 "Custom mount options": [
  null,
  "사용자 정의 마운트 옵션 "
 ],
 "DISK IS FAILING": [
  null,
  "디스크에 오류 발생 "
 ],
 "Data Used": [
  null,
  "사용된 데이터 "
 ],
 "Deactivate": [
  null,
  "비활성화 "
 ],
 "Deactivating $target": [
  null,
  "$target 비활성화 중 "
 ],
 "Deduplication": [
  null,
  "중복 "
 ],
 "Default": [
  null,
  "기본"
 ],
 "Delete": [
  null,
  "삭제"
 ],
 "Deleting $target": [
  null,
  "$target 삭제 중 "
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "RAID 장치를 제거하면 내부의 모든 데이터를 지우게 됩니다."
 ],
 "Deleting a VDO device will erase all data on it.": [
  null,
  "VDO 장치를 제거하면 장치 내부의 모든 데이터가 삭제됩니다. "
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "논리 볼륨을 삭제하면 논리 볼륨 내의 모든 데이터도 함께 삭제됩니다. "
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "파티션을 삭제하면 파티션 내의 모든 데이터도 함께 삭제됩니다. "
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "볼륨 그룹을 삭제하면 내부의 모든 데이터도 함께 삭제됩니다. "
 ],
 "Deleting volume group $target": [
  null,
  "볼륨 그룹 $target 삭제 중 "
 ],
 "Device File": [
  null,
  "장치 파일 "
 ],
 "Device is read-only": [
  null,
  "장치는 읽기 전용입니다 "
 ],
 "Disk": [
  null,
  "디스크 "
 ],
 "Disk is OK": [
  null,
  "디스크는 정상입니다"
 ],
 "Disk passphrase": [
  null,
  "디스크 암호 "
 ],
 "Disks": [
  null,
  "디스크 "
 ],
 "Don't overwrite existing data": [
  null,
  "기존 데이터를 덮어쓰지 않습니다 "
 ],
 "Downloading $0": [
  null,
  "$0 다운로드 중 "
 ],
 "Drive": [
  null,
  "드라이브"
 ],
 "Drives": [
  null,
  "드라이브 "
 ],
 "Edit": [
  null,
  "편집"
 ],
 "Edit Tang keyserver": [
  null,
  "Tang 키 서버 편집 "
 ],
 "Editing a key requires a free slot": [
  null,
  "키 편집에 빈 슬롯이 필요합니다 "
 ],
 "Ejecting $target": [
  null,
  "$target 꺼내는 중 "
 ],
 "Emptying $target": [
  null,
  "$target 비우는 중 "
 ],
 "Encrypt data": [
  null,
  "데이터 암호화 "
 ],
 "Encrypted $0": [
  null,
  "암호화됨 $0"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "암호화된 $0의 논리 볼륨"
 ],
 "Encrypted Partition of $0": [
  null,
  "암호화된 $0의 파티션"
 ],
 "Encrypted volumes can not be resized here.": [
  null,
  "여기에서는 암호화된 볼륨 크기를 변경할 수 없습니다. "
 ],
 "Encrypted volumes need to be unlocked before they can be resized.": [
  null,
  "암호화된 볼륨 크기를 변경하기 전에 잠금을 해제해야 합니다."
 ],
 "Encryption": [
  null,
  "암호화"
 ],
 "Encryption Options": [
  null,
  "암호화 옵션 "
 ],
 "Erase": [
  null,
  "지우기 "
 ],
 "Erasing $target": [
  null,
  "$target 삭제 중 "
 ],
 "Error": [
  null,
  "오류"
 ],
 "Extended Partition": [
  null,
  "확장 파티션 "
 ],
 "FAILED": [
  null,
  "실패"
 ],
 "Filesystem": [
  null,
  "파일 시스템"
 ],
 "Filesystem Mounting": [
  null,
  "파일 시스템 마운트 "
 ],
 "Filesystem Name": [
  null,
  "파일 시스템 이름 "
 ],
 "Filesystems": [
  null,
  "파일 시스템 "
 ],
 "For legacy applications only. Reduces performance.": [
  null,
  "레거시 애플리케이션 전용입니다. 성능이 저하됩니다. "
 ],
 "Force remove passphrase in $0": [
  null,
  "$0에서 암호문을 강제 삭제합니다 "
 ],
 "Format": [
  null,
  "포멧"
 ],
 "Format $0": [
  null,
  "$0 포맷 "
 ],
 "Format Disk $0": [
  null,
  "디스크 $0 포멧"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "디스크를 포멧하면 내부의 모든 데이터를 지우게 됩니다."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "장치를 포멧하면 내부의 모든 데이터를 지우게 됩니다."
 ],
 "Free": [
  null,
  "남은 양"
 ],
 "Free Space": [
  null,
  "여유공간"
 ],
 "Free up space in this group: Shrink or delete other logical volumes or add another physical volume.": [
  null,
  "이 그룹에서 여유 공간을 확보합니다: 다른 논리 볼륨을 축소 또는 제거하거나 새로운 물리 볼륨을 추가하십시오."
 ],
 "Go to now": [
  null,
  "지금 바로 가기"
 ],
 "Grow": [
  null,
  "확장 "
 ],
 "Grow Content": [
  null,
  "컨텐츠 확장 "
 ],
 "Grow Logical Volume": [
  null,
  "논리 불륨 확장 "
 ],
 "Grow logical size of $0": [
  null,
  "$0의 논리 크기 확장 "
 ],
 "Grow to take all space": [
  null,
  "모든 공간을 사용하여 확장하기 "
 ],
 "If tang-show-keys is not available, run the following:": [
  null,
  "tang-show-keys를 사용할 수 없는 경우 다음을 실행합니다:"
 ],
 "In Sync": [
  null,
  "동기화 "
 ],
 "Inactive volume": [
  null,
  "비활성 볼륨 "
 ],
 "Index Memory": [
  null,
  "인덱스 메모리 "
 ],
 "Install": [
  null,
  "설치"
 ],
 "Install NFS Support": [
  null,
  "NFS 지원 설치 "
 ],
 "Install Software": [
  null,
  "소프트웨어 설치 "
 ],
 "Install VDO support": [
  null,
  "VDO 지원 설치 "
 ],
 "Installing $0": [
  null,
  "$0 설치 중 "
 ],
 "Invalid username or password": [
  null,
  "잘못된 사용자 이름 또는 비밀번호"
 ],
 "Jobs": [
  null,
  "작업"
 ],
 "Key slots with unknown types can not be edited here": [
  null,
  "알 수 없는 유형의 키 슬롯은 여기에서 수정할 수 없습니다."
 ],
 "Key source": [
  null,
  "키 소스 "
 ],
 "Keys": [
  null,
  "키 "
 ],
 "Keyserver": [
  null,
  "키 서버 "
 ],
 "Keyserver address": [
  null,
  "키 서버 주소 "
 ],
 "Keyserver removal may prevent unlocking $0.": [
  null,
  "키 서버를 제거하면 $0 잠금 해제가 되지 않을 수 있습니다."
 ],
 "Loading...": [
  null,
  "로딩..."
 ],
 "Local Mount Point": [
  null,
  "로컬 마운트 지점 "
 ],
 "Lock": [
  null,
  "잠그기"
 ],
 "Locking $target": [
  null,
  "$target 잠금 중 "
 ],
 "Logical": [
  null,
  "논리"
 ],
 "Logical Size": [
  null,
  "논리 크기 "
 ],
 "Logical Volume": [
  null,
  "논리 볼륨"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "논리 볼륨 (스냅샷)"
 ],
 "Logical Volume of $0": [
  null,
  "$0 논리 볼륨 "
 ],
 "Make sure the key hash from the Tang server matches:": [
  null,
  "Tang 서버의 키 해시가 일치하는지 확인합니다."
 ],
 "Manually check with SSH: ": [
  null,
  "수동으로 SSH로 확인합니다. "
 ],
 "Marking $target as faulty": [
  null,
  "$target을 오류가 있는 것으로 표시"
 ],
 "Member of RAID Device": [
  null,
  "RAID 장치 멤버 "
 ],
 "Member of RAID Device $0": [
  null,
  "RAID 장치 $0 멤버"
 ],
 "Metadata Used": [
  null,
  "사용된 메타데이터 "
 ],
 "Modifying $target": [
  null,
  "$target 수정 중 "
 ],
 "Mount": [
  null,
  "마운트 "
 ],
 "Mount Options": [
  null,
  "마운트 옵션"
 ],
 "Mount Point": [
  null,
  "마운트 포인트"
 ],
 "Mount at boot": [
  null,
  "부팅 시 마운트 "
 ],
 "Mount point can not be empty": [
  null,
  "마운트 지점을 비워둘 수 없습니다 "
 ],
 "Mount point cannot be empty.": [
  null,
  "마운트 지점을 비워둘 수 없습니다. "
 ],
 "Mount point must start with \"/\".": [
  null,
  "마운트 지점은 \"/\"로 시작해야 합니다. "
 ],
 "Mount read only": [
  null,
  "읽기 전용으로 마운트 "
 ],
 "Mounted At": [
  null,
  "마운트 위치 "
 ],
 "Mounting": [
  null,
  "마운트"
 ],
 "Mounting $target": [
  null,
  "$target 마운트 중 "
 ],
 "NFS Mount": [
  null,
  "NFS 마운트 "
 ],
 "NFS Mounts": [
  null,
  "NFS 마운트 "
 ],
 "NFS Support not installed": [
  null,
  "NFS 지원이 설치되어 있지 않습니다 "
 ],
 "Name": [
  null,
  "이름"
 ],
 "Name can not be empty.": [
  null,
  "이름을 입력하셔야 합니다."
 ],
 "Name cannot be empty.": [
  null,
  "이름을 입력하셔야 합니다 "
 ],
 "Name cannot be longer than $0 bytes": [
  null,
  "이름은 $0 바이트보다 길 수 없습니다 "
 ],
 "Name cannot be longer than $0 characters": [
  null,
  "이름은 $0자를 초과할 수 없습니다 "
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  "이름은 127자보다 길 수 없습니다."
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "이름에는 문자 '$0'를 포함할 수 없습니다."
 ],
 "Name cannot contain whitespace.": [
  null,
  "이름에는 공백이 없어야 합니다."
 ],
 "New NFS Mount": [
  null,
  "새 NFS 마운트 "
 ],
 "New passphrase": [
  null,
  "새 암호문 "
 ],
 "Next": [
  null,
  "다음"
 ],
 "No Filesystem": [
  null,
  "파일 시스템 없음 "
 ],
 "No Logical Volumes": [
  null,
  "논리 볼륨 없음 "
 ],
 "No NFS mounts set up": [
  null,
  "NFS 마운트 설정 없음 "
 ],
 "No available slots": [
  null,
  "사용 가능한 슬롯이 없습니다 "
 ],
 "No disks are available.": [
  null,
  "사용 가능한 디스크가 없습니다."
 ],
 "No drives attached": [
  null,
  "드라이브가 연결되어 있지 않습니다 "
 ],
 "No free key slots": [
  null,
  "여유 키 슬롯이 없습니다."
 ],
 "No free space": [
  null,
  "여유공간이 없습니다."
 ],
 "No iSCSI targets set up": [
  null,
  "iSCSI 대상이 설정되어 있지 않습니다 "
 ],
 "No keys added": [
  null,
  "추가된 키가 없습니다 "
 ],
 "No media inserted": [
  null,
  "미디어가 삽입되어 있지 않습니다 "
 ],
 "No partitioning": [
  null,
  "파티션 설정하지 않음"
 ],
 "No storage set up as RAID": [
  null,
  "RAID로 설정된 스토리지가 없습니다 "
 ],
 "No storage set up as VDO": [
  null,
  "VDO로 설정된 스토리지가 없습니다 "
 ],
 "No volume groups created": [
  null,
  "생성된 볼륨 그룹이 없습니다 "
 ],
 "Not enough space to grow.": [
  null,
  " 확장 공간이 부족합니다. "
 ],
 "Not found": [
  null,
  "찾을 수 없습니다."
 ],
 "Not mounted": [
  null,
  "마운트되어 있지 않습니다. "
 ],
 "Not running": [
  null,
  "실행되고 있지 않습니다 "
 ],
 "Ok": [
  null,
  "확인"
 ],
 "Old passphrase": [
  null,
  "이전 암호문 "
 ],
 "Only $0 of $1 are used.": [
  null,
  "$1 중 $0만 사용됩니다. "
 ],
 "Operation '$operation' on $target": [
  null,
  "$target에서 '$operation' 작업"
 ],
 "Options": [
  null,
  "옵션"
 ],
 "Other Devices": [
  null,
  "다른 장치 "
 ],
 "Overwrite existing data with zeros": [
  null,
  "기존의 데이터를 제로로 덮어쓰기 "
 ],
 "PackageKit crashed": [
  null,
  "PackageKit가 크래시되었습니다 "
 ],
 "Partition": [
  null,
  "파티션"
 ],
 "Partition of $0": [
  null,
  "$0의 파티션"
 ],
 "Partitioning": [
  null,
  "파티션"
 ],
 "Passphrase": [
  null,
  "암호문"
 ],
 "Passphrase cannot be empty": [
  null,
  "암호문은 비워둘 수 없습니다 "
 ],
 "Passphrase removal may prevent unlocking $0.": [
  null,
  "암호 제거에서 $0 잠금 해제가 되지 않을 수 있습니다. "
 ],
 "Passphrases do not match": [
  null,
  "암호가 일치하지 않습니다 "
 ],
 "Password": [
  null,
  "암호"
 ],
 "Path on Server": [
  null,
  "서버 상의 경로 "
 ],
 "Path on server cannot be empty.": [
  null,
  "서버 상의 경로는 비워둘 수 없습니다. "
 ],
 "Path on server must start with \"/\".": [
  null,
  "서버 상의 경로는 \"/\"로 시작해야 합니다. "
 ],
 "Physical": [
  null,
  "물리"
 ],
 "Physical Volume": [
  null,
  "물리 볼륨 "
 ],
 "Physical Volumes": [
  null,
  "물리 볼륨 "
 ],
 "Physical volume of $0": [
  null,
  "$0의 물리 볼륨 "
 ],
 "Physical volumes can not be resized here.": [
  null,
  "여기에서는 물리적 볼륨 크기를 변경할 수 없습니다. "
 ],
 "Please confirm deletion of $0": [
  null,
  "$0 삭제를 확인해주세요"
 ],
 "Please confirm stopping of $0": [
  null,
  "$0 정지를 확인하십시오 "
 ],
 "Pool": [
  null,
  "풀"
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "Thin 논리 볼륨을 위한 풀"
 ],
 "Pool for Thin Volumes": [
  null,
  "씬 볼륨을 위한 풀 "
 ],
 "Pool for thinly provisioned volumes": [
  null,
  "씬 프로비저닝된 볼륨을 위한 풀"
 ],
 "Port": [
  null,
  "포트"
 ],
 "Process": [
  null,
  "프로세스"
 ],
 "Purpose": [
  null,
  "목적"
 ],
 "RAID ($0)": [
  null,
  "RAID ($0)"
 ],
 "RAID 0": [
  null,
  "RAID 0"
 ],
 "RAID 0 (Stripe)": [
  null,
  "RAID 0 (스트라이프)"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (미러링)"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RAID 10 (미러 스트라이프)"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (전용 패리티)"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (분산 패리티)"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (이중 분산 패리티)"
 ],
 "RAID Device": [
  null,
  "RAID 장치"
 ],
 "RAID Device $0": [
  null,
  "RAID 장치 $0"
 ],
 "RAID Devices": [
  null,
  "RAID 장치"
 ],
 "RAID Level": [
  null,
  "RAID 레벨"
 ],
 "RAID Member": [
  null,
  "RAID 멤버 "
 ],
 "Reading": [
  null,
  "읽는 중 "
 ],
 "Reboot": [
  null,
  "다시 시작"
 ],
 "Recommended default": [
  null,
  "기본 권장 사항 "
 ],
 "Recovering": [
  null,
  "복구 중 "
 ],
 "Recovering RAID Device $target": [
  null,
  "RAID 장치 $target 복구 중 "
 ],
 "Removals:": [
  null,
  "삭제: "
 ],
 "Remove": [
  null,
  "제거 "
 ],
 "Remove $0?": [
  null,
  "$0을/를 삭제하시겠습니까?"
 ],
 "Remove Tang keyserver": [
  null,
  "Tang 키 서버 삭제 "
 ],
 "Remove device": [
  null,
  "장치 삭제 "
 ],
 "Remove passphrase": [
  null,
  "암호문 삭제 "
 ],
 "Remove passphrase in $0?": [
  null,
  "$0에서 암호를 삭제하시겠습니까?"
 ],
 "Removing $0": [
  null,
  " $0 삭제 중 "
 ],
 "Removing $target from RAID Device": [
  null,
  "RAID 장치에서 $target 삭제 중 "
 ],
 "Removing physical volume from $target": [
  null,
  "$target에서 물리 볼륨 삭제 중 "
 ],
 "Rename": [
  null,
  "이름 변경 "
 ],
 "Rename Logical Volume": [
  null,
  "논리 볼륨 이름 변경 "
 ],
 "Rename Volume Group": [
  null,
  "볼륨 그룹 이름 변경 "
 ],
 "Renaming $target": [
  null,
  "$target 이름 변경 중 "
 ],
 "Repairing $target": [
  null,
  "$target 복구 중 "
 ],
 "Repeat passphrase": [
  null,
  "암호문 반복 "
 ],
 "Resizing $target": [
  null,
  "$target 크기 변경 중 "
 ],
 "Resizing an encrypted filesystem requires unlocking the disk. Please provide a current disk passphrase.": [
  null,
  "암호화된 파일 시스템의 크기를 변경하려면 디스크 잠금을 해제해야 합니다. 현재 디스크의 암호를 입력하십시오."
 ],
 "Running": [
  null,
  "작동중"
 ],
 "SMART self-test of $target": [
  null,
  "$target의 SMART 셀프 테스트 "
 ],
 "Save": [
  null,
  "저장"
 ],
 "Save space by compressing individual blocks with LZ4": [
  null,
  "LZ4로 개별 블록을 압축하여 공간을 절약합니다 "
 ],
 "Save space by storing identical data blocks just once": [
  null,
  "동일한 데이터 블록을 한 번만 저장하여 공간을 절약합니다 "
 ],
 "Saving a new passphrase requires unlocking the disk. Please provide a current disk passphrase.": [
  null,
  "새 암호를 저장하려면 디스크 잠금 해제가 필요합니다. 현재 디스크의 암호를 제공하십시오."
 ],
 "Securely erasing $target": [
  null,
  "$target을 안전하게 삭제 "
 ],
 "Server": [
  null,
  "서버"
 ],
 "Server Address": [
  null,
  "서버 주소 "
 ],
 "Server address cannot be empty.": [
  null,
  "서버 주소는 비워둘 수 없습니다 "
 ],
 "Server cannot be empty.": [
  null,
  "서버는 비워둘 수 없습니다 "
 ],
 "Service": [
  null,
  "서비스"
 ],
 "Session": [
  null,
  "세션"
 ],
 "Setting up loop device $target": [
  null,
  "루프 장치 $target 설정 중 "
 ],
 "Show all": [
  null,
  "모두 표시 "
 ],
 "Show all $0 drives": [
  null,
  "모든 $0 드라이브 표시 "
 ],
 "Shrink": [
  null,
  "축소 "
 ],
 "Shrink Logical Volume": [
  null,
  "논리 볼륨 축소 "
 ],
 "Shrink Volume": [
  null,
  "볼륨 축소 "
 ],
 "Size": [
  null,
  "크기"
 ],
 "Size cannot be negative": [
  null,
  "크기는 음수일 수 없습니다. "
 ],
 "Size cannot be zero": [
  null,
  "크기가 0이될 수 없습니다 "
 ],
 "Size is too large": [
  null,
  "크기가 너무 큽니다 "
 ],
 "Size must be a number": [
  null,
  "크기는 숫자여야 합니다 "
 ],
 "Size must be at least $0": [
  null,
  "크기는 최소 $0이어야 합니다 "
 ],
 "Slot $0": [
  null,
  "슬롯 $0"
 ],
 "Spare": [
  null,
  "예비 "
 ],
 "Start": [
  null,
  "시작"
 ],
 "Start Multipath": [
  null,
  "멀티패스 시작 "
 ],
 "Starting RAID Device $target": [
  null,
  "RAID 장치 $target 시작 "
 ],
 "Starting swapspace $target": [
  null,
  "스왑공간 $target 시작 "
 ],
 "Stop": [
  null,
  "중지 "
 ],
 "Stop Device": [
  null,
  "장치 중지 "
 ],
 "Stop and Unmount": [
  null,
  "중지 및 마운트 해제 "
 ],
 "Stop and remove": [
  null,
  "중지 및 제거 "
 ],
 "Stopping RAID Device $target": [
  null,
  "RAID 장치 $target 중지 "
 ],
 "Stopping swapspace $target": [
  null,
  "스왑공간 $target 중지 "
 ],
 "Storage": [
  null,
  "스토리지"
 ],
 "Storage Logs": [
  null,
  "스토리지 로그 "
 ],
 "Storage can not be managed on this system.": [
  null,
  "스토리지는 이 시스템에서 관리할 수 없습니다. "
 ],
 "Store passphrase": [
  null,
  "암호 저장 "
 ],
 "Stored Passphrase": [
  null,
  "저장된 암호"
 ],
 "Stored passphrase": [
  null,
  "저장된 암호"
 ],
 "Support is installed.": [
  null,
  "지원이 설치되어 있습니다."
 ],
 "Swap": [
  null,
  "스왑"
 ],
 "Synchronizing RAID Device $target": [
  null,
  "RAID 장치 $target 동기화 "
 ],
 "Tang keyserver": [
  null,
  "Tang 키 서버 "
 ],
 "The RAID Array is in a degraded state": [
  null,
  "RAID 어레이는 성능이 저하된 상태입니다. "
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  "예비 디스크를 추가하려면 RAID 장치가 실행되고 있어야 합니다. "
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  "디스크를 제거하려면 RAID 장치가 실행되고 있어야 합니다. "
 ],
 "The creation of this VDO device did not finish and the device can't be used.": [
  null,
  "VDO 장치 생성이 완료되지 않았기 때문에 장치를 사용할 수 없습니다. "
 ],
 "The currently logged in user is not permitted to see information about keys.": [
  null,
  "현재 로그인한 사용자는 키에 대한 정보를 볼 수 없습니다. "
 ],
 "The filesystem is in use by login sessions and system services. Proceeding will stop these.": [
  null,
  "파일 시스템은 로그인 세션 및 시스템 서비스에 사용되고 있습니다. 계속 진행하면 이러한 작업이 중지됩니다.  "
 ],
 "The filesystem is in use by login sessions. Proceeding will stop these.": [
  null,
  "파일 시스템은 로그인 세션에서 사용되고 있습니다. 계속 진행하면 이러한 작업이 중지됩니다. "
 ],
 "The filesystem is in use by system services. Proceeding will stop these.": [
  null,
  "파일 시스템은 시스템 서비스에서 사용되고 있습니다. 계속 진행하면 이러한 작업이 중지됩니다. "
 ],
 "The last disk of a RAID device cannot be removed.": [
  null,
  "RAID의 마지막 디스크는 삭제할 수 없습니다. "
 ],
 "The last key slot can not be removed": [
  null,
  "마지막 키 슬롯은 삭제할 수 없습니다 "
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  "볼륨 그룹의 마지막 물리 볼륨은 삭제할 수 없습니다 "
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "사용자 <b>$0</b>는 스토리지를 관리할 수 없습니다. "
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  "시스템에 여러 경로를 갖는 장치가 있지만 멀티패스 서비스가 실행되고 있지 않습니다. "
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  "이 물리 볼륨을 제거하는데 필요한 공간이 충분하지 않습니다. 최소 $0의 여유 공간이 필요합니다. "
 ],
 "Thin Logical Volume": [
  null,
  "Thin 논리 볼륨"
 ],
 "This NFS mount is in use and only its options can be changed.": [
  null,
  "NFS 마운트는 사용되고 있으며 옵션만 변경할 수 있습니다. "
 ],
 "This VDO device does not use all of its backing device.": [
  null,
  "이 VDO 장치는 백업 장치를 사용하지 않습니다."
 ],
 "This device has filesystems that are currently in use. Proceeding will unmount all filesystems on it.": [
  null,
  "이 장치에는 현재 사용 중인 파일 시스템이 있습니다. 계속 진행하면 이 장치의 파일 시스템을 모두 마운트 해제하게 됩니다. "
 ],
 "This device is currently used for RAID devices.": [
  null,
  "현재 이 장치는 RAID 장치로 사용되고 있습니다. "
 ],
 "This device is currently used for RAID devices. Proceeding will remove it from its RAID devices.": [
  null,
  "현재 이 장치는 RAID 장치로 사용되고 있습니다. 계속 진행하면 RAID 장치에서 이 장치가 제거됩니다."
 ],
 "This device is currently used for VDO devices.": [
  null,
  "현재 이 장치는 VDO 장치로 사용되고 있습니다. "
 ],
 "This device is currently used for volume groups.": [
  null,
  "현재 이 장치는 볼륨 그룹으로 사용되고 있습니다. "
 ],
 "This device is currently used for volume groups. Proceeding will remove it from its volume groups.": [
  null,
  "현재 이 장치는 볼륨 그룹으로 사용되고 있습니다. 계속 진행하면 볼륨 그룹에서 이 장치가 제거됩니다. "
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  "장치를 복구하는 동안 디스크를 제거할 수 없습니다. "
 ],
 "This logical volume is not completely used by its content.": [
  null,
  "이 논리 볼륨의 컨텐츠에 의해 완전히 사용되고 있지 않습니다. "
 ],
 "This volume needs to be activated before it can be resized.": [
  null,
  "볼륨 크기를 변경하기 전에 활성화해야 합니다. "
 ],
 "Total size: $0": [
  null,
  "전체 크기: $0"
 ],
 "Trust key": [
  null,
  "신뢰 키 "
 ],
 "Type": [
  null,
  "유형"
 ],
 "UUID": [
  null,
  "UUID"
 ],
 "Unable to reach server": [
  null,
  "서버에 연결할 수 없습니다 "
 ],
 "Unable to remove mount": [
  null,
  "마운트를 제거할 수 없습니다 "
 ],
 "Unable to unmount filesystem": [
  null,
  "파일 시스템을 마운트 해제할 수 없습니다 "
 ],
 "Unit": [
  null,
  "단위"
 ],
 "Unknown": [
  null,
  "알 수 없음"
 ],
 "Unknown ($0)": [
  null,
  "알 수 없음 ($0)"
 ],
 "Unknown host name": [
  null,
  "알 수 없는 호스트 이름 "
 ],
 "Unknown type": [
  null,
  "알 수 없는 유형"
 ],
 "Unlock": [
  null,
  "잠금 해제"
 ],
 "Unlock at boot": [
  null,
  "부팅 시 잠금 해제 "
 ],
 "Unlock read only": [
  null,
  "읽기 전용 잠금 해제 "
 ],
 "Unlocking $target": [
  null,
  "$target 잠금 해제 중 "
 ],
 "Unlocking disk...": [
  null,
  "디스크 잠금 해제 중..."
 ],
 "Unmount": [
  null,
  "마운트 해제"
 ],
 "Unmounting $target": [
  null,
  "$target 마운트 해제 중 "
 ],
 "Unrecognized Data": [
  null,
  "인식되지 않는 데이터 "
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  "여기에서는 인식되지 않은 데이터를 작게할 수 없습니다. "
 ],
 "Unsupported volume": [
  null,
  "지원되지 않는 볼륨 "
 ],
 "Usage": [
  null,
  "사용법"
 ],
 "Use 512 Byte emulation": [
  null,
  "512 바이트 에뮬레이션 사용 "
 ],
 "Used": [
  null,
  "사용 중"
 ],
 "Username": [
  null,
  "사용자 이름"
 ],
 "VDO Backing": [
  null,
  "VDO 백업 "
 ],
 "VDO Device": [
  null,
  "VDO 장치 "
 ],
 "VDO Device $0": [
  null,
  "VDO 장치 $0"
 ],
 "VDO Devices": [
  null,
  "VDO 장치 "
 ],
 "VDO backing devices can not be made smaller": [
  null,
  "VDO 백업 장치를 작게 할 수 없습니다 "
 ],
 "VDO support not installed": [
  null,
  "VDO 지원이 설치되어 있지 않습니다 "
 ],
 "Verify key": [
  null,
  "키 확인 "
 ],
 "Very securely erasing $target": [
  null,
  "$target을 매우 안전하게 삭제 "
 ],
 "Volume": [
  null,
  "볼륨"
 ],
 "Volume Group": [
  null,
  "볼륨 그룹 "
 ],
 "Volume Group $0": [
  null,
  "볼륨 그룹 $0"
 ],
 "Volume Groups": [
  null,
  "볼륨 그룹 "
 ],
 "Volume size is $0. Content size is $1.": [
  null,
  "볼륨 크기는 $0입니다. 컨텐츠 크기는 $1입니다. "
 ],
 "Waiting for other software management operations to finish": [
  null,
  "다른 소프트웨어 관리 작업이 완료될 때 까지 대기 중 "
 ],
 "What if tang-show-keys is not available?": [
  null,
  "tang-show-keys를 사용할 수 없는 경우는 어떻게 합니까?"
 ],
 "Write-mostly": [
  null,
  "Write-mostly"
 ],
 "Writing": [
  null,
  "쓰기 "
 ],
 "[$0 bytes of binary data]": [
  null,
  "[바이너리 데이터의 $0 바이트]"
 ],
 "[binary data]": [
  null,
  "[바이너리 데이터]"
 ],
 "[no data]": [
  null,
  "[데이터 없음]"
 ],
 "iSCSI Targets": [
  null,
  "iSCSI 대상"
 ],
 "key slot $0": [
  null,
  "키 슬롯 $0"
 ],
 "undefined": [
  null,
  "정의되지 않음 "
 ],
 "unknown target": [
  null,
  "알 수 없는 대상 "
 ],
 "unpartitioned space on $0": [
  null,
  "$0에서 파티션 설정되지 않은 공간 "
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 파일 시스템"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  "암호화된 데이터 "
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "다른 데이터 "
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "스왑 공간 "
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "인식되지 않는 데이터 "
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  "VDO 백업 "
 ],
 "storage\u0004Drive": [
  null,
  "드라이브"
 ],
 "storage\u0004Hard Disk": [
  null,
  "하드 디스크"
 ],
 "storage\u0004Optical Drive": [
  null,
  "광학 드라이브 "
 ],
 "storage\u0004Removable Drive": [
  null,
  "삭제 가능한 드라이브 "
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "솔리드 스테이트 디스크 "
 ],
 "format-bytes\u0004bytes": [
  null,
  "바이트"
 ]
}));
