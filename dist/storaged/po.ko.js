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
  ""
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
  ""
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
  ""
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  ""
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
  ""
 ],
 "Device is read-only": [
  null,
  ""
 ],
 "Disk": [
  null,
  "디스크 "
 ],
 "Disk is OK": [
  null,
  ""
 ],
 "Disk passphrase": [
  null,
  ""
 ],
 "Disks": [
  null,
  "디스크 "
 ],
 "Don't overwrite existing data": [
  null,
  ""
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
  ""
 ],
 "Editing a key requires a free slot": [
  null,
  ""
 ],
 "Ejecting $target": [
  null,
  "$target 꺼내는 중 "
 ],
 "Emptying $target": [
  null,
  ""
 ],
 "Encrypt data": [
  null,
  ""
 ],
 "Encrypted $0": [
  null,
  ""
 ],
 "Encrypted Logical Volume of $0": [
  null,
  ""
 ],
 "Encrypted Partition of $0": [
  null,
  ""
 ],
 "Encrypted volumes can not be resized here.": [
  null,
  ""
 ],
 "Encrypted volumes need to be unlocked before they can be resized.": [
  null,
  ""
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
  ""
 ],
 "Error": [
  null,
  "오류"
 ],
 "Extended Partition": [
  null,
  ""
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
  ""
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
  ""
 ],
 "Force remove passphrase in $0": [
  null,
  ""
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
  ""
 ],
 "Go to now": [
  null,
  "지금 바로 가기"
 ],
 "Grow": [
  null,
  ""
 ],
 "Grow Content": [
  null,
  ""
 ],
 "Grow Logical Volume": [
  null,
  ""
 ],
 "Grow logical size of $0": [
  null,
  ""
 ],
 "Grow to take all space": [
  null,
  ""
 ],
 "If tang-show-keys is not available, run the following:": [
  null,
  ""
 ],
 "In Sync": [
  null,
  ""
 ],
 "Inactive volume": [
  null,
  ""
 ],
 "Index Memory": [
  null,
  ""
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
  ""
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
  ""
 ],
 "Keyserver address": [
  null,
  ""
 ],
 "Keyserver removal may prevent unlocking $0.": [
  null,
  ""
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
  ""
 ],
 "Logical": [
  null,
  ""
 ],
 "Logical Size": [
  null,
  ""
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
  ""
 ],
 "Manually check with SSH: ": [
  null,
  ""
 ],
 "Marking $target as faulty": [
  null,
  ""
 ],
 "Member of RAID Device": [
  null,
  ""
 ],
 "Member of RAID Device $0": [
  null,
  ""
 ],
 "Metadata Used": [
  null,
  ""
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
  ""
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
  ""
 ],
 "Mount read only": [
  null,
  ""
 ],
 "Mounted At": [
  null,
  ""
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
  ""
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
  ""
 ],
 "No free key slots": [
  null,
  ""
 ],
 "No free space": [
  null,
  "여유공간이 없습니다."
 ],
 "No iSCSI targets set up": [
  null,
  ""
 ],
 "No keys added": [
  null,
  ""
 ],
 "No media inserted": [
  null,
  ""
 ],
 "No partitioning": [
  null,
  "파티션 설정하지 않음"
 ],
 "No storage set up as RAID": [
  null,
  ""
 ],
 "No storage set up as VDO": [
  null,
  ""
 ],
 "No volume groups created": [
  null,
  ""
 ],
 "Not enough space to grow.": [
  null,
  ""
 ],
 "Not found": [
  null,
  "찾을 수 없습니다."
 ],
 "Not mounted": [
  null,
  ""
 ],
 "Not running": [
  null,
  ""
 ],
 "Ok": [
  null,
  "확인"
 ],
 "Old passphrase": [
  null,
  ""
 ],
 "Only $0 of $1 are used.": [
  null,
  ""
 ],
 "Operation '$operation' on $target": [
  null,
  ""
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
  ""
 ],
 "PackageKit crashed": [
  null,
  ""
 ],
 "Partition": [
  null,
  "파티션"
 ],
 "Partition of $0": [
  null,
  ""
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
  ""
 ],
 "Passphrase removal may prevent unlocking $0.": [
  null,
  ""
 ],
 "Passphrases do not match": [
  null,
  ""
 ],
 "Password": [
  null,
  "암호"
 ],
 "Path on Server": [
  null,
  ""
 ],
 "Path on server cannot be empty.": [
  null,
  ""
 ],
 "Path on server must start with \"/\".": [
  null,
  ""
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
  ""
 ],
 "Physical volumes can not be resized here.": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  "$0 삭제를 확인해주세요"
 ],
 "Please confirm stopping of $0": [
  null,
  ""
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
  ""
 ],
 "Pool for thinly provisioned volumes": [
  null,
  "Thin 논리 볼륨을 위한 풀"
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
  ""
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
  ""
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  ""
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  ""
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  ""
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
  ""
 ],
 "Reading": [
  null,
  ""
 ],
 "Reboot": [
  null,
  "다시 시작"
 ],
 "Recommended default": [
  null,
  ""
 ],
 "Recovering": [
  null,
  ""
 ],
 "Recovering RAID Device $target": [
  null,
  ""
 ],
 "Removals:": [
  null,
  ""
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
  ""
 ],
 "Remove device": [
  null,
  "장치 삭제 "
 ],
 "Remove passphrase": [
  null,
  ""
 ],
 "Remove passphrase in $0?": [
  null,
  ""
 ],
 "Removing $0": [
  null,
  " $0 삭제 중 "
 ],
 "Removing $target from RAID Device": [
  null,
  ""
 ],
 "Removing physical volume from $target": [
  null,
  ""
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
  ""
 ],
 "Renaming $target": [
  null,
  ""
 ],
 "Repairing $target": [
  null,
  ""
 ],
 "Repeat passphrase": [
  null,
  ""
 ],
 "Resizing $target": [
  null,
  ""
 ],
 "Resizing an encrypted filesystem requires unlocking the disk. Please provide a current disk passphrase.": [
  null,
  ""
 ],
 "Running": [
  null,
  "작동중"
 ],
 "SMART self-test of $target": [
  null,
  ""
 ],
 "Save": [
  null,
  "저장"
 ],
 "Save space by compressing individual blocks with LZ4": [
  null,
  ""
 ],
 "Save space by storing identical data blocks just once": [
  null,
  ""
 ],
 "Saving a new passphrase requires unlocking the disk. Please provide a current disk passphrase.": [
  null,
  ""
 ],
 "Securely erasing $target": [
  null,
  ""
 ],
 "Server": [
  null,
  "서버"
 ],
 "Server Address": [
  null,
  ""
 ],
 "Server address cannot be empty.": [
  null,
  ""
 ],
 "Server cannot be empty.": [
  null,
  ""
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
  ""
 ],
 "Show all": [
  null,
  ""
 ],
 "Show all $0 drives": [
  null,
  ""
 ],
 "Shrink": [
  null,
  "축소 "
 ],
 "Shrink Logical Volume": [
  null,
  ""
 ],
 "Shrink Volume": [
  null,
  ""
 ],
 "Size": [
  null,
  "크기"
 ],
 "Size cannot be negative": [
  null,
  ""
 ],
 "Size cannot be zero": [
  null,
  ""
 ],
 "Size is too large": [
  null,
  ""
 ],
 "Size must be a number": [
  null,
  ""
 ],
 "Size must be at least $0": [
  null,
  ""
 ],
 "Slot $0": [
  null,
  ""
 ],
 "Spare": [
  null,
  ""
 ],
 "Start": [
  null,
  "시작"
 ],
 "Start Multipath": [
  null,
  ""
 ],
 "Starting RAID Device $target": [
  null,
  ""
 ],
 "Starting swapspace $target": [
  null,
  ""
 ],
 "Stop": [
  null,
  ""
 ],
 "Stop Device": [
  null,
  ""
 ],
 "Stop and Unmount": [
  null,
  ""
 ],
 "Stop and remove": [
  null,
  "중지 및 제거 "
 ],
 "Stopping RAID Device $target": [
  null,
  ""
 ],
 "Stopping swapspace $target": [
  null,
  ""
 ],
 "Storage": [
  null,
  "스토리지"
 ],
 "Storage Logs": [
  null,
  ""
 ],
 "Storage can not be managed on this system.": [
  null,
  ""
 ],
 "Store passphrase": [
  null,
  ""
 ],
 "Stored Passphrase": [
  null,
  "저장된 암호"
 ],
 "Stored passphrase": [
  null,
  ""
 ],
 "Support is installed.": [
  null,
  ""
 ],
 "Swap": [
  null,
  "스왑"
 ],
 "Synchronizing RAID Device $target": [
  null,
  ""
 ],
 "Tang keyserver": [
  null,
  ""
 ],
 "The RAID Array is in a degraded state": [
  null,
  ""
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  ""
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  ""
 ],
 "The creation of this VDO device did not finish and the device can't be used.": [
  null,
  ""
 ],
 "The currently logged in user is not permitted to see information about keys.": [
  null,
  ""
 ],
 "The filesystem is in use by login sessions and system services. Proceeding will stop these.": [
  null,
  ""
 ],
 "The filesystem is in use by login sessions. Proceeding will stop these.": [
  null,
  ""
 ],
 "The filesystem is in use by system services. Proceeding will stop these.": [
  null,
  ""
 ],
 "The last disk of a RAID device cannot be removed.": [
  null,
  ""
 ],
 "The last key slot can not be removed": [
  null,
  ""
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  ""
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  ""
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  ""
 ],
 "Thin Logical Volume": [
  null,
  "Thin 논리 볼륨"
 ],
 "This NFS mount is in use and only its options can be changed.": [
  null,
  ""
 ],
 "This VDO device does not use all of its backing device.": [
  null,
  ""
 ],
 "This device has filesystems that are currently in use. Proceeding will unmount all filesystems on it.": [
  null,
  ""
 ],
 "This device is currently used for RAID devices.": [
  null,
  "현재 이 장치는 RAID 장치로 사용되고 있습니다. "
 ],
 "This device is currently used for RAID devices. Proceeding will remove it from its RAID devices.": [
  null,
  ""
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
  ""
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  ""
 ],
 "This logical volume is not completely used by its content.": [
  null,
  ""
 ],
 "This volume needs to be activated before it can be resized.": [
  null,
  ""
 ],
 "Total size: $0": [
  null,
  "전체 크기: $0"
 ],
 "Trust key": [
  null,
  ""
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
  ""
 ],
 "Unlock read only": [
  null,
  ""
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
  ""
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
  ""
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
  ""
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
  ""
 ],
 "Waiting for other software management operations to finish": [
  null,
  ""
 ],
 "What if tang-show-keys is not available?": [
  null,
  ""
 ],
 "Write-mostly": [
  null,
  "Write-mostly"
 ],
 "Writing": [
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
 "iSCSI Targets": [
  null,
  "iSCSI 대상"
 ],
 "key slot $0": [
  null,
  ""
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
  ""
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
  ""
 ],
 "storage\u0004Removable Drive": [
  null,
  ""
 ],
 "storage\u0004Solid-State Disk": [
  null,
  ""
 ],
 "format-bytes\u0004bytes": [
  null,
  "바이트"
 ]
}));
