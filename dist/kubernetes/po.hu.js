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
  "language": "hu",
  "x-generator": "Zanata 4.4.5"
 },
 " 1\"Do you want to delete the following Nodes?": [
  null,
  ""
 ],
 " or drag & drop.": [
  null,
  ""
 ],
 "$0% Free": [
  "$0% Free",
  "",
  ""
 ],
 "$0% Used": [
  "$0% Used",
  "",
  ""
 ],
 "AWS Elastic Block Store": [
  null,
  ""
 ],
 "Access Modes": [
  null,
  ""
 ],
 "Access Policy": [
  null,
  ""
 ],
 "Actual": [
  null,
  ""
 ],
 "Add": [
  null,
  ""
 ],
 "Add Cluster Node": [
  null,
  ""
 ],
 "Add Group": [
  null,
  ""
 ],
 "Add Kubernetes Node": [
  null,
  ""
 ],
 "Add Member": [
  null,
  ""
 ],
 "Add Membership": [
  null,
  ""
 ],
 "Add New Cluster": [
  null,
  ""
 ],
 "Add New User": [
  null,
  ""
 ],
 "Add Role": [
  null,
  ""
 ],
 "Add User": [
  null,
  ""
 ],
 "Add membership": [
  null,
  ""
 ],
 "Address": [
  null,
  ""
 ],
 "Addresses": [
  null,
  ""
 ],
 "Adjust": [
  null,
  ""
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
  ""
 ],
 "Admin": [
  null,
  ""
 ],
 "All Projects": [
  null,
  ""
 ],
 "All Types": [
  null,
  ""
 ],
 "All healthy": [
  null,
  ""
 ],
 "All images": [
  null,
  ""
 ],
 "All in use": [
  null,
  ""
 ],
 "All running": [
  null,
  ""
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
  ""
 ],
 "Azure": [
  null,
  ""
 ],
 "Boot ID": [
  null,
  ""
 ],
 "Bus": [
  null,
  ""
 ],
 "CPU": [
  null,
  ""
 ],
 "CPU Utilization: $0%": [
  null,
  ""
 ],
 "Cancel": [
  null,
  ""
 ],
 "Capacity": [
  null,
  ""
 ],
 "Ceph Filesystem Mount": [
  null,
  ""
 ],
 "Ceph Monitors": [
  null,
  ""
 ],
 "Change": [
  null,
  ""
 ],
 "Change User": [
  null,
  ""
 ],
 "Change image stream": [
  null,
  ""
 ],
 "Change project": [
  null,
  ""
 ],
 "Cinder": [
  null,
  ""
 ],
 "Claim": [
  null,
  ""
 ],
 "Claim Name": [
  null,
  ""
 ],
 "Client Certificate": [
  null,
  ""
 ],
 "Cluster": [
  null,
  ""
 ],
 "Configuration": [
  null,
  ""
 ],
 "Configure Flannel networking": [
  null,
  ""
 ],
 "Configure Kubelet and Proxy": [
  null,
  ""
 ],
 "Connect": [
  null,
  ""
 ],
 "Connecting...": [
  null,
  ""
 ],
 "Connection Error": [
  null,
  ""
 ],
 "Connection Error: $0": [
  null,
  ""
 ],
 "Connection Settings": [
  null,
  ""
 ],
 "Container": [
  null,
  ""
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
  ""
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
 "Count:": [
  null,
  ""
 ],
 "Create": [
  null,
  ""
 ],
 "Create Virtual Machine": [
  null,
  ""
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
  ""
 ],
 "DNS Policy": [
  null,
  ""
 ],
 "Delete": [
  null,
  ""
 ],
 "Delete Node": [
  null,
  ""
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
  ""
 ],
 "Delete Selected": [
  null,
  ""
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
  ""
 ],
 "Deploy Application": [
  null,
  ""
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
  ""
 ],
 "Details": [
  null,
  ""
 ],
 "Device": [
  null,
  ""
 ],
 "Directory": [
  null,
  ""
 ],
 "Disk": [
  null,
  ""
 ],
 "Disk Utilization: $0%": [
  null,
  ""
 ],
 "Disks": [
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
  ""
 ],
 "Drop file here to upload.": [
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
 "Free": [
  null,
  ""
 ],
 "GCE Persistent Disk": [
  null,
  ""
 ],
 "GiB": [
  null,
  ""
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
 "Labels:": [
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
 "Memory:": [
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
 "N/A": [
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
 "No disks defined for this VM": [
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
 "No virtual machines": [
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
 "Node:": [
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
  "Nincs"
 ],
 "Not Available": [
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
 "Ok": [
  null,
  ""
 ],
 "Only files of size $0 MiB and less are supported": [
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
 "Paste JSON below, ": [
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
  ""
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
 "Pod:": [
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
  ""
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
 "Readonly": [
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
  ""
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
  ""
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
 "Resolve above errors to continue": [
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
  ""
 ],
 "Session": [
  null,
  ""
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
  ""
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
  ""
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
 "Source": [
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
 "System": [
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
 "Usage": [
  null,
  ""
 ],
 "Usage metrics are available after the pod starts": [
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
 "VM DELETE failed.": [
  null,
  ""
 ],
 "VM definition is not a valid JSON.": [
  null,
  ""
 ],
 "VM definition is required.": [
  null,
  ""
 ],
 "VM definition must be an object.": [
  null,
  ""
 ],
 "Virtual Machines": [
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
  ""
 ],
 "Welcome to the Image Registry": [
  null,
  ""
 ],
 "When": [
  null,
  ""
 ],
 "Yes": [
  null,
  ""
 ],
 "You can bypass the certificate check, but any data you send to the server could be intercepted by others.": [
  null,
  ""
 ],
 "You can deploy an application to your cluster.": [
  null,
  ""
 ],
 "Your login credentials do not give you access to use the docker registry from the command line.": [
  null,
  ""
 ],
 "bridge": [
  null,
  ""
 ],
 "cdrom": [
  null,
  ""
 ],
 "crashed": [
  null,
  ""
 ],
 "custom": [
  null,
  ""
 ],
 "direct": [
  null,
  ""
 ],
 "disabled": [
  null,
  ""
 ],
 "disk": [
  null,
  ""
 ],
 "down": [
  null,
  ""
 ],
 "dying": [
  null,
  ""
 ],
 "eg: my-image-stream": [
  null,
  ""
 ],
 "enabled": [
  null,
  ""
 ],
 "ethernet": [
  null,
  ""
 ],
 "host": [
  null,
  ""
 ],
 "hostdev": [
  null,
  ""
 ],
 "iSCSI": [
  null,
  ""
 ],
 "idle": [
  null,
  ""
 ],
 "mcast": [
  null,
  ""
 ],
 "n/a": [
  null,
  ""
 ],
 "network": [
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
 "paused": [
  null,
  ""
 ],
 "pending volume claims": [
  null,
  ""
 ],
 "running": [
  null,
  ""
 ],
 "server": [
  null,
  ""
 ],
 "show less": [
  null,
  ""
 ],
 "show more": [
  null,
  ""
 ],
 "shut off": [
  null,
  ""
 ],
 "shutdown": [
  null,
  ""
 ],
 "suspended (PM)": [
  null,
  ""
 ],
 "udp": [
  null,
  ""
 ],
 "up": [
  null,
  ""
 ],
 "upload a JSON file": [
  null,
  ""
 ],
 "user": [
  null,
  ""
 ],
 "vCPUs:": [
  null,
  ""
 ],
 "vhostuser": [
  null,
  ""
 ],
 "yes": [
  null,
  ""
 ]
}));
