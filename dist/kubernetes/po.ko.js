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
 " 1\"Do you want to delete the following Nodes?": [
  null,
  " 1 \"다음 노드를 삭제 하시겠습니까?"
 ],
 "$0% Free": [
  "$0% Free",
  ""
 ],
 "$0% Used": [
  "$0% Used",
  ""
 ],
 "AWS Elastic Block Store": [
  null,
  "AWS Elastic Block Store"
 ],
 "Access Modes": [
  null,
  "액세스 모드"
 ],
 "Access Policy": [
  null,
  "액세스 정책"
 ],
 "Actual": [
  null,
  ""
 ],
 "Add": [
  null,
  "추가"
 ],
 "Add Cluster Node": [
  null,
  "클러스터 노드 추가"
 ],
 "Add Group": [
  null,
  "그룹 추가"
 ],
 "Add Kubernetes Node": [
  null,
  "Kubernetes 노드 추가 "
 ],
 "Add Member": [
  null,
  "멤버 추가 "
 ],
 "Add Membership": [
  null,
  "맴버"
 ],
 "Add New Cluster": [
  null,
  "새 클러스터 추가"
 ],
 "Add New User": [
  null,
  "새 사용자 추가 "
 ],
 "Add Role": [
  null,
  "역할 추가"
 ],
 "Add User": [
  null,
  "사용자 추가 "
 ],
 "Add membership": [
  null,
  ""
 ],
 "Address": [
  null,
  "주소"
 ],
 "Addresses": [
  null,
  "주소"
 ],
 "Adjust": [
  null,
  "조정"
 ],
 "Adjust Persistent Volume '{{ item.metadata.name }}'": [
  null,
  ""
 ],
 "Adjust Replication Controller {{ item.metadata.name }}": [
  null,
  ""
 ],
 "Adjust Route": [
  null,
  ""
 ],
 "Adjust Service": [
  null,
  "서비스 조정"
 ],
 "Admin": [
  null,
  "관리자 "
 ],
 "All Projects": [
  null,
  "모든 프로젝트"
 ],
 "All Types": [
  null,
  "모든 유형"
 ],
 "All healthy": [
  null,
  ""
 ],
 "All images": [
  null,
  "모든 이미지"
 ],
 "All in use": [
  null,
  ""
 ],
 "All running": [
  null,
  "작동중"
 ],
 "Annotations": [
  null,
  ""
 ],
 "Anonymous: Allow all unauthenticated users to pull images": [
  null,
  ""
 ],
 "Authentication": [
  null,
  "인증"
 ],
 "Azure": [
  null,
  "Azure"
 ],
 "Boot ID": [
  null,
  "부팅 ID"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU Utilization: $0%": [
  null,
  "CPU 사용률 : $0%"
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Capacity": [
  null,
  "용량"
 ],
 "Ceph Filesystem Mount": [
  null,
  "파일 시스템 옵션"
 ],
 "Ceph Monitors": [
  null,
  "리포지터리 "
 ],
 "Change": [
  null,
  "변경 "
 ],
 "Change User": [
  null,
  "사용자 변경"
 ],
 "Change image stream": [
  null,
  "이미지 스트림 변경"
 ],
 "Change project": [
  null,
  "프로젝트 변경"
 ],
 "Cinder": [
  null,
  "Cinder"
 ],
 "Claim": [
  null,
  ""
 ],
 "Claim Name": [
  null,
  "컨테이너 이름"
 ],
 "Client Certificate": [
  null,
  "클라이언트 인증서"
 ],
 "Cluster": [
  null,
  "클러스터"
 ],
 "Configuration": [
  null,
  "설정"
 ],
 "Configure Flannel networking": [
  null,
  "Flannel 네트워킹 설정"
 ],
 "Configure Kubelet and Proxy": [
  null,
  "Kubelet 과 프록시 설정"
 ],
 "Connect": [
  null,
  "연결"
 ],
 "Connecting...": [
  null,
  "연결 중..."
 ],
 "Connection Error": [
  null,
  "Docker에 연결중입니다."
 ],
 "Connection Error: $0": [
  null,
  "Docker에 연결중입니다."
 ],
 "Connection Settings": [
  null,
  "본드 설정"
 ],
 "Container": [
  null,
  "컨테이너 "
 ],
 "Container ID": [
  null,
  ""
 ],
 "Container Runtime Version": [
  null,
  ""
 ],
 "Containers": [
  null,
  "컨테이너들"
 ],
 "Could not list services": [
  null,
  ""
 ],
 "Couldn't connect to server": [
  null,
  ""
 ],
 "Couldn't find running API server": [
  null,
  ""
 ],
 "Create": [
  null,
  "생성"
 ],
 "Create empty image stream": [
  null,
  ""
 ],
 "Create image stream": [
  null,
  ""
 ],
 "Created": [
  null,
  "생성 일시"
 ],
 "DNS Policy": [
  null,
  ""
 ],
 "Delete": [
  null,
  "삭제"
 ],
 "Delete Node": [
  null,
  "삭제"
 ],
 "Delete Persistent Volume": [
  null,
  ""
 ],
 "Delete Persistent Volume Claim": [
  null,
  ""
 ],
 "Delete Project": [
  null,
  "프로젝트"
 ],
 "Delete Selected": [
  null,
  "선택 항목 삭제 "
 ],
 "Delete image stream": [
  null,
  ""
 ],
 "Delete {{ item.kind }}": [
  null,
  ""
 ],
 "Deleting a Pod will kill all associated containers. Pods may be automatically created again in some cases.": [
  null,
  ""
 ],
 "Deploy": [
  null,
  "배포"
 ],
 "Deploy Application": [
  null,
  "어플리케이션 사용"
 ],
 "Deployment Causes": [
  null,
  ""
 ],
 "Deployment Config": [
  null,
  ""
 ],
 "Deployment Configs": [
  null,
  ""
 ],
 "Description": [
  null,
  "설명"
 ],
 "Details": [
  null,
  "상세 정보"
 ],
 "Directory": [
  null,
  "디렉터리"
 ],
 "Disk": [
  null,
  "디스크 "
 ],
 "Disk Utilization: $0%": [
  null,
  ""
 ],
 "Display name": [
  null,
  ""
 ],
 "Do you want to add the role '{{ fields.displayRole }}'?": [
  null,
  ""
 ],
 "Do you want to delete the '{{stream.metadata.namespace}}/{{stream.metadata.name}}' image stream?": [
  null,
  ""
 ],
 "Do you want to delete the Persistent Volume '{{item.metadata.name}}'?": [
  null,
  ""
 ],
 "Do you want to delete the Persistent Volume Claim '{{item.metadata.name}}'?": [
  null,
  ""
 ],
 "Do you want to delete the {{ item.kind }} '{{item.metadata.name}}'?": [
  null,
  ""
 ],
 "Do you want to delete this Node?": [
  null,
  ""
 ],
 "Do you want to remove the image tagged as '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?": [
  null,
  ""
 ],
 "Do you want to remove the role '{{ fields.displayRole }}' from member {{ fields.member.metadata.name }}?": [
  null,
  ""
 ],
 "Don't pull images automatically": [
  null,
  ""
 ],
 "Driver": [
  null,
  "드라이버"
 ],
 "Empty Directory": [
  null,
  ""
 ],
 "Endpoint": [
  null,
  ""
 ],
 "Endpoint Name": [
  null,
  ""
 ],
 "Endpoints": [
  null,
  ""
 ],
 "Environment": [
  null,
  "환경"
 ],
 "Error getting certificate details: $0": [
  null,
  ""
 ],
 "Error writing kubectl config": [
  null,
  ""
 ],
 "Fibre Channel": [
  null,
  ""
 ],
 "Filesystem Type": [
  null,
  "파일 시스템 옵션"
 ],
 "Flex": [
  null,
  ""
 ],
 "Flocker": [
  null,
  "잠금 해제"
 ],
 "Flocker Dataset Name": [
  null,
  ""
 ],
 "GCE Persistent Disk": [
  null,
  ""
 ],
 "Git Repository": [
  null,
  "리포지터리 "
 ],
 "Gluster FS": [
  null,
  ""
 ],
 "GlusterFS": [
  null,
  ""
 ],
 "Grant additional push or admin access to specific members below.": [
  null,
  ""
 ],
 "Group Members": [
  null,
  "맴버"
 ],
 "Group or Project": [
  null,
  ""
 ],
 "Groups": [
  null,
  "그룹"
 ],
 "Host": [
  null,
  "호스트"
 ],
 "Host Path": [
  null,
  "호스트"
 ],
 "IP": [
  null,
  "IP "
 ],
 "ISCSI": [
  null,
  ""
 ],
 "Identities": [
  null,
  ""
 ],
 "Identity": [
  null,
  "ID"
 ],
 "Image": [
  null,
  "이미지"
 ],
 "Image ID": [
  null,
  "이미지 ID"
 ],
 "Image Name": [
  null,
  "이미지 $0"
 ],
 "Image Registry": [
  null,
  ""
 ],
 "Image Stream": [
  null,
  ""
 ],
 "Image commands": [
  null,
  ""
 ],
 "Images": [
  null,
  "이미지 "
 ],
 "Images by project": [
  null,
  ""
 ],
 "Images pushed recently": [
  null,
  ""
 ],
 "In order to begin pushing images to the registry, use the commands below.": [
  null,
  ""
 ],
 "In order to begin pushing images to the registry, you need to create a project.": [
  null,
  ""
 ],
 "Interface": [
  null,
  "인터페이스 "
 ],
 "Kernel Version": [
  null,
  "버전"
 ],
 "Key Ring Path": [
  null,
  ""
 ],
 "Kubelet Version": [
  null,
  ""
 ],
 "Kubernetes Cluster": [
  null,
  "Kubernetes 클러스터"
 ],
 "Labels": [
  null,
  ""
 ],
 "Last Heartbeat": [
  null,
  ""
 ],
 "Last Status Change": [
  null,
  ""
 ],
 "Latest Version": [
  null,
  ""
 ],
 "Log into OpenShift command line tools:": [
  null,
  ""
 ],
 "Log into the registry:": [
  null,
  ""
 ],
 "Logical Unit Number": [
  null,
  "논리 볼륨"
 ],
 "Login commands": [
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
 "Manifest": [
  null,
  "매니페스트 "
 ],
 "Medium": [
  null,
  "중간 (Medium)"
 ],
 "Member of": [
  null,
  ""
 ],
 "Members": [
  null,
  "맴버"
 ],
 "Membership": [
  null,
  "회원"
 ],
 "Memory": [
  null,
  "메모리"
 ],
 "Memory Utilization: $0%": [
  null,
  ""
 ],
 "Message": [
  null,
  "메세지"
 ],
 "Metadata": [
  null,
  "메타데이터"
 ],
 "Modify": [
  null,
  "수정 "
 ],
 "Monitors": [
  null,
  "ARP 모니터링"
 ],
 "Mount Location": [
  null,
  "마운트 옵션"
 ],
 "NFS": [
  null,
  "NFS"
 ],
 "NFS Mount": [
  null,
  ""
 ],
 "Name": [
  null,
  "이름"
 ],
 "Namespace": [
  null,
  "네임스페이스"
 ],
 "Namespace cannot be empty.": [
  null,
  "네임스페이스를 입력하셔야 합니다."
 ],
 "Network": [
  null,
  "네트워크"
 ],
 "New Group": [
  null,
  ""
 ],
 "New Project": [
  null,
  ""
 ],
 "New image stream": [
  null,
  ""
 ],
 "New project": [
  null,
  ""
 ],
 "No": [
  null,
  "아니오"
 ],
 "No Pods are using this claim": [
  null,
  ""
 ],
 "No Volume Bound": [
  null,
  "볼륨 그룹 $0"
 ],
 "No groups are present.": [
  null,
  ""
 ],
 "No images pushed": [
  null,
  ""
 ],
 "No metadata file was selected. Please select a Kubernetes metadata file.": [
  null,
  "메타데이터 파일이 선택되지 않았습니다. Kubernetes 메타데이터 파일을 선택하세요."
 ],
 "No nodes in cluster": [
  null,
  ""
 ],
 "No pods deployed": [
  null,
  ""
 ],
 "No pods replicated": [
  null,
  ""
 ],
 "No pods scheduled": [
  null,
  ""
 ],
 "No pods selected": [
  null,
  ""
 ],
 "No projects are present.": [
  null,
  ""
 ],
 "No users are present.": [
  null,
  ""
 ],
 "No volumes are present.": [
  null,
  ""
 ],
 "No volumes in use": [
  null,
  ""
 ],
 "Node": [
  null,
  "노드"
 ],
 "Nodes": [
  null,
  "노드"
 ],
 "Nodes are the machines that run your containers.": [
  null,
  ""
 ],
 "None": [
  null,
  "없음"
 ],
 "Not Ready": [
  null,
  "준비되지 않음"
 ],
 "Not a valid number of replicas": [
  null,
  "올바른 replica 숫자가 아닙니다."
 ],
 "Not a valid value for Host": [
  null,
  ""
 ],
 "Not deployed": [
  null,
  ""
 ],
 "OS": [
  null,
  "OS"
 ],
 "OS Versions": [
  null,
  "버전"
 ],
 "Operating System": [
  null,
  "운영 체제"
 ],
 "Options": [
  null,
  "옵션"
 ],
 "Overview": [
  null,
  "개요"
 ],
 "PD Name": [
  null,
  "이름"
 ],
 "Partition": [
  null,
  "파티션"
 ],
 "Password": [
  null,
  "암호"
 ],
 "Path": [
  null,
  "경로"
 ],
 "Pending Volume Claims": [
  null,
  ""
 ],
 "Persistent Volumes": [
  null,
  ""
 ],
 "Phase": [
  null,
  ""
 ],
 "Please create another namespace for $0 \"$1\"": [
  null,
  " $0 \"$1\"을 위한 다른 네임스페이스를 생성하세요"
 ],
 "Please provide a GlusterFS volume name": [
  null,
  "올바른 네임스페이스를 입력하세요."
 ],
 "Please provide a username": [
  null,
  "올바른 네임스페이스를 입력하세요."
 ],
 "Please provide a valid NFS server": [
  null,
  "올바른 네임스페이스를 입력하세요."
 ],
 "Please provide a valid address": [
  null,
  "올바른 네임스페이스를 입력하세요."
 ],
 "Please provide a valid filesystem type": [
  null,
  "올바른 네임스페이스를 입력하세요."
 ],
 "Please provide a valid interface": [
  null,
  "올바른 네임스페이스를 입력하세요."
 ],
 "Please provide a valid logical unit number": [
  null,
  "올바른 네임스페이스를 입력하세요."
 ],
 "Please provide a valid name": [
  null,
  "올바른 네임스페이스를 입력하세요."
 ],
 "Please provide a valid namespace.": [
  null,
  "올바른 네임스페이스를 입력하세요."
 ],
 "Please provide a valid path": [
  null,
  "올바른 네임스페이스를 입력하세요."
 ],
 "Please provide a valid qualified name": [
  null,
  "올바른 네임스페이스를 입력하세요."
 ],
 "Please provide a valid storage capacity.": [
  null,
  "올바른 네임스페이스를 입력하세요."
 ],
 "Please provide a valid target": [
  null,
  "올바른 네임스페이스를 입력하세요."
 ],
 "Please select a valid access mode": [
  null,
  "올바른 네임스페이스를 입력하세요."
 ],
 "Please select a valid endpoint": [
  null,
  "올바른 네임스페이스를 입력하세요."
 ],
 "Please select a valid policy option.": [
  null,
  ""
 ],
 "Please type an address": [
  null,
  "주소를 입력해주세요"
 ],
 "Pod": [
  null,
  ""
 ],
 "Pod Address": [
  null,
  ""
 ],
 "Pod Endpoints": [
  null,
  ""
 ],
 "Pod Replicated": [
  null,
  ""
 ],
 "Pod Selector": [
  null,
  ""
 ],
 "Pods": [
  null,
  ""
 ],
 "Pods contain one or more containers that run together on a node, containing your application code.": [
  null,
  ""
 ],
 "Pool Name": [
  null,
  "이름"
 ],
 "Populate": [
  null,
  ""
 ],
 "Ports": [
  null,
  "포트"
 ],
 "Private: Allow only specific users or groups to pull images": [
  null,
  ""
 ],
 "Project": [
  null,
  "프로젝트"
 ],
 "Project Members": [
  null,
  ""
 ],
 "Project access policy allows anonymous users to pull images.": [
  null,
  ""
 ],
 "Project access policy allows any authenticated user to pull images.": [
  null,
  ""
 ],
 "Project access policy only allows specific members to access images.": [
  null,
  ""
 ],
 "Project:": [
  null,
  ""
 ],
 "Projects": [
  null,
  ""
 ],
 "Proxy Version": [
  null,
  ""
 ],
 "Pull an image:": [
  null,
  ""
 ],
 "Pull from": [
  null,
  ""
 ],
 "Pull specific tags from another image repository": [
  null,
  ""
 ],
 "Push an image:": [
  null,
  ""
 ],
 "Qualified Name": [
  null,
  ""
 ],
 "Rados Block Device": [
  null,
  ""
 ],
 "Read Only": [
  null,
  "읽기 전용"
 ],
 "Read and write from a single node": [
  null,
  ""
 ],
 "Read and write from multiple nodes": [
  null,
  ""
 ],
 "Read only from multiple nodes": [
  null,
  ""
 ],
 "Ready": [
  null,
  "준비됨"
 ],
 "Reason": [
  null,
  "이유"
 ],
 "Reclaim Policy": [
  null,
  ""
 ],
 "Reconnect": [
  null,
  "재연결"
 ],
 "Recycle": [
  null,
  ""
 ],
 "Register": [
  null,
  "시스템 등록"
 ],
 "Register New Volume": [
  null,
  "논리 볼륨 크기 조정"
 ],
 "Register Persistent Volume": [
  null,
  ""
 ],
 "Remote registry is insecure": [
  null,
  ""
 ],
 "Remove": [
  null,
  "제거 "
 ],
 "Remove Group": [
  null,
  ""
 ],
 "Remove Member": [
  null,
  "맴버"
 ],
 "Remove Role": [
  null,
  ""
 ],
 "Remove User": [
  null,
  ""
 ],
 "Remove image tag": [
  null,
  ""
 ],
 "Remove membership": [
  null,
  ""
 ],
 "Replicas": [
  null,
  "Replicas"
 ],
 "Replication Controller": [
  null,
  ""
 ],
 "Replication Controllers": [
  null,
  ""
 ],
 "Replication controllers dynamically create instances of pods from templates, and remove pods when necessary.": [
  null,
  ""
 ],
 "Repository URL": [
  null,
  "리포지터리 URL"
 ],
 "Requested": [
  null,
  ""
 ],
 "Requests": [
  null,
  "요청"
 ],
 "Requires Authentication": [
  null,
  "인증 중입니다"
 ],
 "Restart Count": [
  null,
  ""
 ],
 "Restart Policy": [
  null,
  ""
 ],
 "Retain": [
  null,
  ""
 ],
 "Revision": [
  null,
  "버전"
 ],
 "Role": [
  null,
  "역할"
 ],
 "Roles": [
  null,
  "역할"
 ],
 "Route": [
  null,
  ""
 ],
 "Routes": [
  null,
  ""
 ],
 "Scheduled Pods": [
  null,
  ""
 ],
 "Scheduling Disabled": [
  null,
  ""
 ],
 "Secret": [
  null,
  "비밀"
 ],
 "Secret File": [
  null,
  ""
 ],
 "Secret Name": [
  null,
  "사용자 이름"
 ],
 "Secret Volume": [
  null,
  "볼륨 그룹 생성"
 ],
 "Select Manifest File...": [
  null,
  "manifest을 선택하세요..."
 ],
 "Select Member": [
  null,
  ""
 ],
 "Select Role": [
  null,
  ""
 ],
 "Select an object to see more details.": [
  null,
  ""
 ],
 "Server": [
  null,
  "서버"
 ],
 "Service": [
  null,
  "서비스"
 ],
 "Service Account": [
  null,
  ""
 ],
 "Services": [
  null,
  "서비스"
 ],
 "Services group pods and provide a common DNS name and an optional, load-balanced IP address to access them.": [
  null,
  ""
 ],
 "Session Affinity": [
  null,
  ""
 ],
 "Share Name": [
  null,
  "사용자 이름"
 ],
 "Shared: Allow any authenticated user to pull images": [
  null,
  ""
 ],
 "Shell": [
  null,
  "쉘"
 ],
 "Show all Containers": [
  null,
  "컨테이너들"
 ],
 "Show all Deployment Configs": [
  null,
  ""
 ],
 "Show all Nodes": [
  null,
  ""
 ],
 "Show all Persistent Volumes": [
  null,
  ""
 ],
 "Show all Pod Containers": [
  null,
  "컨테이너들"
 ],
 "Show all Pods": [
  null,
  ""
 ],
 "Show all Projects": [
  null,
  ""
 ],
 "Show all Replication Controllers": [
  null,
  ""
 ],
 "Show all Routes": [
  null,
  ""
 ],
 "Show all Services": [
  null,
  ""
 ],
 "Show all image streams": [
  null,
  ""
 ],
 "Show all images": [
  null,
  ""
 ],
 "Since": [
  null,
  ""
 ],
 "Size": [
  null,
  "크기"
 ],
 "Skip Certificate Verification": [
  null,
  ""
 ],
 "Sorry, I don't know how to modify this volume": [
  null,
  ""
 ],
 "State": [
  null,
  "상태"
 ],
 "Status": [
  null,
  "상태"
 ],
 "Strategy": [
  null,
  ""
 ],
 "Sync all tags from a remote image repository": [
  null,
  ""
 ],
 "TLS Termination": [
  null,
  ""
 ],
 "Tags": [
  null,
  "태그"
 ],
 "Target": [
  null,
  "대상"
 ],
 "Target Portal": [
  null,
  ""
 ],
 "Target World Wide Names": [
  null,
  ""
 ],
 "Template": [
  null,
  "템플릿"
 ],
 "The address contains invalid characters": [
  null,
  "주소에 잘못된 문자가 있습니다 "
 ],
 "The container '{{ target }}' does not exist.": [
  null,
  ""
 ],
 "The deployment config '{{ target }}' does not exist.": [
  null,
  ""
 ],
 "The group '{{ groupName }}' does not exist.": [
  null,
  ""
 ],
 "The maximum number of replicas is 128": [
  null,
  "replica의 최대 수는 128개입니다."
 ],
 "The name contains invalid characters": [
  null,
  ""
 ],
 "The node '{{ target }}' does not exist.": [
  null,
  ""
 ],
 "The node doesn't have enough disk space": [
  null,
  ""
 ],
 "The node doesn't have enough free memory": [
  null,
  ""
 ],
 "The persistent volume '{{ target }}' does not exist.": [
  null,
  ""
 ],
 "The pod '{{ target }}' does not exist.": [
  null,
  ""
 ],
 "The project '{{ projName }}' does not exist.": [
  null,
  ""
 ],
 "The replication controller '{{ target }}' does not exist.": [
  null,
  ""
 ],
 "The route '{{ target }}' does not exist.": [
  null,
  ""
 ],
 "The selected file is not a valid Kubernetes application manifest.": [
  null,
  "선택한 파일은 올바른 Kubernetes 메타데이터 파일이 아닙니다."
 ],
 "The server uses a certificate signed by an unknown authority.": [
  null,
  ""
 ],
 "The service '{{ target }}' does not exist.": [
  null,
  ""
 ],
 "The user '{{ userName }}' does not exist.": [
  null,
  ""
 ],
 "This claim is in use. Deleting it may cause issues with the following pod:": [
  null,
  ""
 ],
 "This option is for single node testing only – local storage will not work in a multi-node cluster": [
  null,
  ""
 ],
 "This volume has been claimed by {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Deleting it will break that claim and may cause issues with any pods depending on it.": [
  null,
  ""
 ],
 "This volume has not been claimed": [
  null,
  ""
 ],
 "Token": [
  null,
  "토큰 "
 ],
 "Topology": [
  null,
  ""
 ],
 "Triggers": [
  null,
  ""
 ],
 "Troubleshoot": [
  null,
  "문제 해결"
 ],
 "Trust this certificate for this connection": [
  null,
  ""
 ],
 "Type": [
  null,
  "유형"
 ],
 "Type:": [
  null,
  "형식:"
 ],
 "Unable to decode Kubernetes application manifest.": [
  null,
  ""
 ],
 "Unable to read the Kubernetes application manifest. Code $0.": [
  null,
  "Kubernetes 어플리케이션  manifest를 읽을 수 없습니다. 코드 $0."
 ],
 "Unavailable": [
  null,
  "사용 불가능"
 ],
 "Unknown": [
  null,
  "알 수 없음"
 ],
 "Updating $0...": [
  null,
  "$0 업데이트 중..."
 ],
 "Used": [
  null,
  "사용 중"
 ],
 "User": [
  null,
  "사용자"
 ],
 "User or Group": [
  null,
  ""
 ],
 "Username": [
  null,
  "사용자 이름"
 ],
 "Users": [
  null,
  "사용자"
 ],
 "Volume": [
  null,
  "볼륨"
 ],
 "Volume ID": [
  null,
  ""
 ],
 "Volume Name": [
  null,
  "사용자 이름"
 ],
 "Volume Type": [
  null,
  "볼륨 유형"
 ],
 "Volumes": [
  null,
  "볼륨"
 ],
 "Warning:": [
  null,
  "파티션"
 ],
 "Welcome to the Image Registry": [
  null,
  ""
 ],
 "When": [
  null,
  "언제"
 ],
 "Yes": [
  null,
  "네"
 ],
 "You can bypass the certificate check, but any data you send to the server could be intercepted by others.": [
  null,
  ""
 ],
 "You can deploy an application to your cluster.": [
  null,
  "클러스터에 애플리케이션을 배포할 수 있습니다."
 ],
 "Your login credentials do not give you access to use the docker registry from the command line.": [
  null,
  ""
 ],
 "eg: my-image-stream": [
  null,
  "예: my-image-stream"
 ],
 "no": [
  null,
  "아니요"
 ],
 "none": [
  null,
  "없음"
 ],
 "pending volume claims": [
  null,
  ""
 ],
 "yes": [
  null,
  "예 "
 ]
}));
