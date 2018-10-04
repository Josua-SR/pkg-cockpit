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
nplurals=2; plural=(n != 1);
return plural;
},
  "language": "sv",
  "x-generator": "Zanata 4.6.2"
 },
 " 1\"Do you want to delete the following Nodes?": [
  null,
  " 1\"Vill du radera följande noder?"
 ],
 "$0% Free": [
  "$0% Free",
  "$0 % fritt",
  "$0 % fritt"
 ],
 "$0% Used": [
  "$0% Used",
  "$0 % använt",
  "$0 % använt"
 ],
 "AWS Elastic Block Store": [
  null,
  "AWS elastisk blocklagring"
 ],
 "Access Modes": [
  null,
  "Åtkomstlägen"
 ],
 "Access Policy": [
  null,
  "Åtkomstpolicy"
 ],
 "Actual": [
  null,
  "Aktuell"
 ],
 "Add": [
  null,
  "Lägg till"
 ],
 "Add Cluster Node": [
  null,
  "Lägg till klusternod"
 ],
 "Add Group": [
  null,
  "Lägg till grupp"
 ],
 "Add Kubernetes Node": [
  null,
  "Lägg till Kubernetesnod"
 ],
 "Add Member": [
  null,
  "Lägg till medlem"
 ],
 "Add Membership": [
  null,
  "Lägg till medlemskap"
 ],
 "Add New Cluster": [
  null,
  "Lägg till nytt kluster"
 ],
 "Add New User": [
  null,
  "Lägg till ny användare"
 ],
 "Add Role": [
  null,
  "Lägg till roll"
 ],
 "Add User": [
  null,
  "Lägg till användare"
 ],
 "Add membership": [
  null,
  "Lägg till medlemskap"
 ],
 "Address": [
  null,
  "Adress"
 ],
 "Addresses": [
  null,
  "Adresser"
 ],
 "Adjust": [
  null,
  "Justera"
 ],
 "Adjust Persistent Volume '{{ item.metadata.name }}'": [
  null,
  "Justera beständig volym ”{{ item.metadata.name }}”"
 ],
 "Adjust Replication Controller {{ item.metadata.name }}": [
  null,
  "Justera replikeringskontroll {{ item.metadata.name }}"
 ],
 "Adjust Route": [
  null,
  "Justera rutt"
 ],
 "Adjust Service": [
  null,
  "Justera tjänst"
 ],
 "Admin": [
  null,
  "Admin"
 ],
 "All Projects": [
  null,
  "Alla projekt"
 ],
 "All Types": [
  null,
  "Alla typer"
 ],
 "All healthy": [
  null,
  "Alla friska"
 ],
 "All images": [
  null,
  "Alla bilder"
 ],
 "All in use": [
  null,
  "Alla används"
 ],
 "All running": [
  null,
  "Alla kör"
 ],
 "Annotations": [
  null,
  "Noteringar"
 ],
 "Anonymous: Allow all unauthenticated users to pull images": [
  null,
  "Anonymt: tillåt alla oautentiserade användare att hämta avbilder"
 ],
 "Authentication": [
  null,
  "Autentisering"
 ],
 "Azure": [
  null,
  "Azure"
 ],
 "Boot ID": [
  null,
  "Start-ID"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU Utilization: $0%": [
  null,
  "CPU-användning: $0 %"
 ],
 "Cancel": [
  null,
  "Avbryt"
 ],
 "Capacity": [
  null,
  "Kapacitet"
 ],
 "Ceph Filesystem Mount": [
  null,
  "Ceph-filsystemsmontering"
 ],
 "Ceph Monitors": [
  null,
  "Ceph-övervakare"
 ],
 "Change": [
  null,
  "Ändra"
 ],
 "Change User": [
  null,
  "Ändra användare"
 ],
 "Change image stream": [
  null,
  "Ändra avbildsström"
 ],
 "Change project": [
  null,
  "Ändra projekt"
 ],
 "Cinder": [
  null,
  "Cinder"
 ],
 "Claim": [
  null,
  "Anspråk"
 ],
 "Claim Name": [
  null,
  "Anspråksnamn"
 ],
 "Client Certificate": [
  null,
  "Klientcertifikat"
 ],
 "Cluster": [
  null,
  "Kluster"
 ],
 "Configuration": [
  null,
  "Konfiguration"
 ],
 "Configure Flannel networking": [
  null,
  "Konfigurera Flannel-nätverk"
 ],
 "Configure Kubelet and Proxy": [
  null,
  "Konfigurerar Kubelet och Proxy"
 ],
 "Connect": [
  null,
  "Anslut"
 ],
 "Connecting...": [
  null,
  "Ansluter …"
 ],
 "Connection Error": [
  null,
  "Anslutningsfel"
 ],
 "Connection Error: $0": [
  null,
  "Anslutningsfel: $0"
 ],
 "Connection Settings": [
  null,
  "Anslutningsinställningar"
 ],
 "Container": [
  null,
  "Behållare"
 ],
 "Container ID": [
  null,
  "Behållar-ID"
 ],
 "Container Runtime Version": [
  null,
  "Behållarnas körtidsversion"
 ],
 "Containers": [
  null,
  "Behållare"
 ],
 "Could not list services": [
  null,
  "Kunde inte lista tjänster"
 ],
 "Couldn't connect to server": [
  null,
  "Kunde inte ansluta till servern"
 ],
 "Couldn't find running API server": [
  null,
  "Kunde inte hitta en körande API-server"
 ],
 "Create": [
  null,
  "Skapa"
 ],
 "Create empty image stream": [
  null,
  "Skapa en tom avbildsström"
 ],
 "Create image stream": [
  null,
  "Skapa en avbildsström"
 ],
 "Created": [
  null,
  "Skapad"
 ],
 "DNS Policy": [
  null,
  "DNS-policy"
 ],
 "Delete": [
  null,
  "Ta bort"
 ],
 "Delete Node": [
  null,
  "Ta bort en nod"
 ],
 "Delete Persistent Volume": [
  null,
  "Ta bort en beständig volym"
 ],
 "Delete Persistent Volume Claim": [
  null,
  "Ta bort anspråk på en beständig volym"
 ],
 "Delete Project": [
  null,
  "Ta bort ett projekt"
 ],
 "Delete Selected": [
  null,
  "Ta bort det valda"
 ],
 "Delete image stream": [
  null,
  "Ta bort en avbildsström"
 ],
 "Delete {{ item.kind }}": [
  null,
  "Ta bort en {{ item.kind }}"
 ],
 "Deleting a Pod will kill all associated containers. Pods may be automatically created again in some cases.": [
  null,
  "Att ta bort en kapsel kommer döda tillhörande behållare.  Kapslar kan automatiskt skapas igen i några fall."
 ],
 "Deploy": [
  null,
  "Placera ut"
 ],
 "Deploy Application": [
  null,
  "Placera ut ett program"
 ],
 "Deployment Causes": [
  null,
  "Utplaceringsorsaker"
 ],
 "Deployment Config": [
  null,
  "Utplaceringskonfiguration"
 ],
 "Deployment Configs": [
  null,
  "Utplaceringskonfigurationer"
 ],
 "Description": [
  null,
  "Beskrivning"
 ],
 "Details": [
  null,
  "Detaljer"
 ],
 "Directory": [
  null,
  "Katalog"
 ],
 "Disk": [
  null,
  "Disk"
 ],
 "Disk Utilization: $0%": [
  null,
  "Diskanvändning: $0 %"
 ],
 "Display name": [
  null,
  "Visningsnamn"
 ],
 "Do you want to add the role '{{ fields.displayRole }}'?": [
  null,
  "Vill du lägga till rollen ”{{ fields.displayRole }}”?"
 ],
 "Do you want to delete the '{{stream.metadata.namespace}}/{{stream.metadata.name}}' image stream?": [
  null,
  "Vill du ta bort avbildsströmmen ”{{stream.metadata.namespace}}/{{stream.metadata.name}}”?"
 ],
 "Do you want to delete the Persistent Volume '{{item.metadata.name}}'?": [
  null,
  "Vill du ta bort den beständiga volymen ”{{item.metadata.name}}”?"
 ],
 "Do you want to delete the Persistent Volume Claim '{{item.metadata.name}}'?": [
  null,
  "Vill du ta bort anspråket på den beständiga volymen ”{{item.metadata.name}}”?"
 ],
 "Do you want to delete the {{ item.kind }} '{{item.metadata.name}}'?": [
  null,
  "Vill du ta bort {{ item.kind }} ”{{item.metadata.name}}”?"
 ],
 "Do you want to delete this Node?": [
  null,
  "Vill du ta bort denna nod?"
 ],
 "Do you want to remove the image tagged as '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?": [
  null,
  "Vill du ta bort avbilden med etiketten ”{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}”?"
 ],
 "Do you want to remove the role '{{ fields.displayRole }}' from member {{ fields.member.metadata.name }}?": [
  null,
  "Vill du ta bort rollen ”{{ fields.displayRole }}” från medlemmen {{ fields.member.metadata.name }}?"
 ],
 "Don't pull images automatically": [
  null,
  "Hämta inte avbilder automatiskt"
 ],
 "Driver": [
  null,
  ""
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
  ""
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
  ""
 ],
 "Flex": [
  null,
  ""
 ],
 "Flocker": [
  null,
  ""
 ],
 "Flocker Dataset Name": [
  null,
  ""
 ],
 "GCE Persistent Disk": [
  null,
  "GCE beständig disk"
 ],
 "Git Repository": [
  null,
  ""
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
  ""
 ],
 "Group or Project": [
  null,
  ""
 ],
 "Groups": [
  null,
  ""
 ],
 "Host": [
  null,
  ""
 ],
 "Host Path": [
  null,
  ""
 ],
 "IP": [
  null,
  ""
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
  ""
 ],
 "Image": [
  null,
  ""
 ],
 "Image ID": [
  null,
  ""
 ],
 "Image Name": [
  null,
  ""
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
  ""
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
  ""
 ],
 "Kernel Version": [
  null,
  ""
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
  ""
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
  ""
 ],
 "Login commands": [
  null,
  ""
 ],
 "Logs": [
  null,
  ""
 ],
 "Machine ID": [
  null,
  ""
 ],
 "Manifest": [
  null,
  ""
 ],
 "Medium": [
  null,
  ""
 ],
 "Member of": [
  null,
  ""
 ],
 "Members": [
  null,
  ""
 ],
 "Membership": [
  null,
  ""
 ],
 "Memory": [
  null,
  ""
 ],
 "Memory Utilization: $0%": [
  null,
  ""
 ],
 "Message": [
  null,
  ""
 ],
 "Metadata": [
  null,
  ""
 ],
 "Modify": [
  null,
  ""
 ],
 "Monitors": [
  null,
  ""
 ],
 "Mount Location": [
  null,
  ""
 ],
 "NFS": [
  null,
  ""
 ],
 "NFS Mount": [
  null,
  ""
 ],
 "Name": [
  null,
  ""
 ],
 "Namespace": [
  null,
  ""
 ],
 "Namespace cannot be empty.": [
  null,
  ""
 ],
 "Network": [
  null,
  ""
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
  ""
 ],
 "No Pods are using this claim": [
  null,
  ""
 ],
 "No Volume Bound": [
  null,
  ""
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
  ""
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
  ""
 ],
 "Nodes": [
  null,
  ""
 ],
 "Nodes are the machines that run your containers.": [
  null,
  ""
 ],
 "None": [
  null,
  ""
 ],
 "Not Ready": [
  null,
  ""
 ],
 "Not a valid number of replicas": [
  null,
  ""
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
  ""
 ],
 "OS Versions": [
  null,
  ""
 ],
 "Operating System": [
  null,
  ""
 ],
 "Options": [
  null,
  ""
 ],
 "Overview": [
  null,
  ""
 ],
 "PD Name": [
  null,
  ""
 ],
 "Partition": [
  null,
  ""
 ],
 "Password": [
  null,
  ""
 ],
 "Path": [
  null,
  ""
 ],
 "Pending Volume Claims": [
  null,
  ""
 ],
 "Persistent Volumes": [
  null,
  "Beständiga volymer"
 ],
 "Phase": [
  null,
  ""
 ],
 "Please create another namespace for $0 \"$1\"": [
  null,
  ""
 ],
 "Please provide a GlusterFS volume name": [
  null,
  ""
 ],
 "Please provide a username": [
  null,
  ""
 ],
 "Please provide a valid NFS server": [
  null,
  ""
 ],
 "Please provide a valid address": [
  null,
  ""
 ],
 "Please provide a valid filesystem type": [
  null,
  ""
 ],
 "Please provide a valid interface": [
  null,
  ""
 ],
 "Please provide a valid logical unit number": [
  null,
  ""
 ],
 "Please provide a valid name": [
  null,
  ""
 ],
 "Please provide a valid namespace.": [
  null,
  ""
 ],
 "Please provide a valid path": [
  null,
  ""
 ],
 "Please provide a valid qualified name": [
  null,
  ""
 ],
 "Please provide a valid storage capacity.": [
  null,
  ""
 ],
 "Please provide a valid target": [
  null,
  ""
 ],
 "Please select a valid access mode": [
  null,
  ""
 ],
 "Please select a valid endpoint": [
  null,
  ""
 ],
 "Please select a valid policy option.": [
  null,
  ""
 ],
 "Please type an address": [
  null,
  ""
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
  ""
 ],
 "Populate": [
  null,
  ""
 ],
 "Ports": [
  null,
  ""
 ],
 "Private: Allow only specific users or groups to pull images": [
  null,
  "Privat: tillåt endast specifika användare eller grupper att hämta avbilder"
 ],
 "Project": [
  null,
  ""
 ],
 "Project Members": [
  null,
  ""
 ],
 "Project access policy allows anonymous users to pull images.": [
  null,
  "Projektåtkomstpolicyn tillåter anonyma användare att hämta avbilder."
 ],
 "Project access policy allows any authenticated user to pull images.": [
  null,
  "Projektåtkomstpolicyn tillåter alla autentiserade användare att hämta avbilder."
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
  ""
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
  ""
 ],
 "Reason": [
  null,
  ""
 ],
 "Reclaim Policy": [
  null,
  ""
 ],
 "Reconnect": [
  null,
  "Återanslut"
 ],
 "Recycle": [
  null,
  ""
 ],
 "Register": [
  null,
  ""
 ],
 "Register New Volume": [
  null,
  ""
 ],
 "Register Persistent Volume": [
  null,
  "Registrera en beständig volym"
 ],
 "Remote registry is insecure": [
  null,
  ""
 ],
 "Remove": [
  null,
  ""
 ],
 "Remove Group": [
  null,
  ""
 ],
 "Remove Member": [
  null,
  ""
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
  ""
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
  ""
 ],
 "Requested": [
  null,
  ""
 ],
 "Requests": [
  null,
  ""
 ],
 "Requires Authentication": [
  null,
  ""
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
  ""
 ],
 "Role": [
  null,
  ""
 ],
 "Roles": [
  null,
  ""
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
  ""
 ],
 "Secret File": [
  null,
  ""
 ],
 "Secret Name": [
  null,
  ""
 ],
 "Secret Volume": [
  null,
  ""
 ],
 "Select Manifest File...": [
  null,
  ""
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
  ""
 ],
 "Service": [
  null,
  ""
 ],
 "Service Account": [
  null,
  ""
 ],
 "Services": [
  null,
  ""
 ],
 "Services group pods and provide a common DNS name and an optional, load-balanced IP address to access them.": [
  null,
  "Tjänster grupperar kapslar och tillhandahåller ett gemensamt DNS-namn och om så önskas en lastbalanserad IP-adress för att komma åt dem."
 ],
 "Session Affinity": [
  null,
  ""
 ],
 "Share Name": [
  null,
  ""
 ],
 "Shared: Allow any authenticated user to pull images": [
  null,
  "Delat: tillåt alla autentiserade användare att hämta avbilder"
 ],
 "Shell": [
  null,
  ""
 ],
 "Show all Containers": [
  null,
  ""
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
  "Visa alla beständiga volymer"
 ],
 "Show all Pod Containers": [
  null,
  ""
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
  ""
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
  ""
 ],
 "Status": [
  null,
  ""
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
  ""
 ],
 "Target": [
  null,
  ""
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
  ""
 ],
 "The address contains invalid characters": [
  null,
  ""
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
  ""
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
  "Den beständiga volymen ”{{ target }}” finns inte."
 ],
 "The pod '{{ target }}' does not exist.": [
  null,
  "Kapseln ”{{ target }}” finns inte."
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
  ""
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
  ""
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
  ""
 ],
 "Trust this certificate for this connection": [
  null,
  ""
 ],
 "Type": [
  null,
  ""
 ],
 "Type:": [
  null,
  ""
 ],
 "Unable to decode Kubernetes application manifest.": [
  null,
  ""
 ],
 "Unable to read the Kubernetes application manifest. Code $0.": [
  null,
  ""
 ],
 "Unavailable": [
  null,
  ""
 ],
 "Unknown": [
  null,
  ""
 ],
 "Updating $0...": [
  null,
  ""
 ],
 "Used": [
  null,
  ""
 ],
 "User": [
  null,
  ""
 ],
 "User or Group": [
  null,
  ""
 ],
 "Username": [
  null,
  ""
 ],
 "Users": [
  null,
  ""
 ],
 "Volume": [
  null,
  ""
 ],
 "Volume ID": [
  null,
  ""
 ],
 "Volume Name": [
  null,
  ""
 ],
 "Volume Type": [
  null,
  ""
 ],
 "Volumes": [
  null,
  ""
 ],
 "Warning:": [
  null,
  "Varning:"
 ],
 "Welcome to the Image Registry": [
  null,
  "Välkommen till avbildsregistret"
 ],
 "When": [
  null,
  "När"
 ],
 "Yes": [
  null,
  "Ja"
 ],
 "You can bypass the certificate check, but any data you send to the server could be intercepted by others.": [
  null,
  "Du kan hoppa över certifikatkontrollen, men alla data du skickar till servern skulle kunna avlyssnas av andra."
 ],
 "You can deploy an application to your cluster.": [
  null,
  "Du kan placera ut ett program i ditt kluster."
 ],
 "Your login credentials do not give you access to use the docker registry from the command line.": [
  null,
  "Dina inloggningskreditiv ger dig inte åtkomst till att använda docker-registret från kommandoraden."
 ],
 "eg: my-image-stream": [
  null,
  ""
 ],
 "no": [
  null,
  ""
 ],
 "none": [
  null,
  ""
 ],
 "pending volume claims": [
  null,
  ""
 ],
 "yes": [
  null,
  ""
 ]
}));
