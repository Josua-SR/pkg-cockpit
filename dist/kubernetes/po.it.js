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
  "language": "it",
  "x-generator": "Zanata 4.6.2"
 },
 " 1\"Do you want to delete the following Nodes?": [
  null,
  " 1\"Eliminare i seguenti Nodi?"
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
  "Aggiungi"
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
  "Aggiungere Utente"
 ],
 "Add membership": [
  null,
  ""
 ],
 "Address": [
  null,
  "Indirizzo"
 ],
 "Addresses": [
  null,
  "Indirizzi"
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
  "Ammin"
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
  "Autenticazione"
 ],
 "Azure": [
  null,
  ""
 ],
 "Boot ID": [
  null,
  ""
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU Utilization: $0%": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Annulla"
 ],
 "Capacity": [
  null,
  "Capacità"
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
  "Cambia"
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
  "Cluster"
 ],
 "Configuration": [
  null,
  "Configurazione"
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
  "Connetti"
 ],
 "Connecting...": [
  null,
  "Connessione..."
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
  "Container"
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
  "Crea"
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
  "Creato"
 ],
 "DNS Policy": [
  null,
  ""
 ],
 "Delete": [
  null,
  "Cancella"
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
  "Cancella i selezionati"
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
  "Descrizione"
 ],
 "Details": [
  null,
  "Dettagli"
 ],
 "Directory": [
  null,
  "Directory"
 ],
 "Disk": [
  null,
  "Disco"
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
  "Driver"
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
  "Ambiente"
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
  "Gruppi"
 ],
 "Host": [
  null,
  "Host"
 ],
 "Host Path": [
  null,
  ""
 ],
 "IP": [
  null,
  "IP"
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
  "Identità"
 ],
 "Image": [
  null,
  "Immagine"
 ],
 "Image ID": [
  null,
  "ID immagine"
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
  "Immagini"
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
  "Interfaccia"
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
  "Log"
 ],
 "Machine ID": [
  null,
  ""
 ],
 "Manifest": [
  null,
  "Manifesto"
 ],
 "Medium": [
  null,
  "Media"
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
  "Appartenenza"
 ],
 "Memory": [
  null,
  "Memoria"
 ],
 "Memory Utilization: $0%": [
  null,
  ""
 ],
 "Message": [
  null,
  "Messaggio"
 ],
 "Metadata": [
  null,
  "Metadati"
 ],
 "Modify": [
  null,
  "Modifica"
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
  "NFS"
 ],
 "NFS Mount": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nome"
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
  "Rete"
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
  "No"
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
  "Nessuno"
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
  "OS"
 ],
 "OS Versions": [
  null,
  ""
 ],
 "Operating System": [
  null,
  "Sistema Operativo"
 ],
 "Options": [
  null,
  "Opzioni"
 ],
 "Overview": [
  null,
  "Panoramica"
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
  "Password"
 ],
 "Path": [
  null,
  "Percorso"
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
  "Porte"
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
  "Sola lettura"
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
  "Motivo"
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
  "Registra"
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
  "Elimina Zona"
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
  "URL del repositorio"
 ],
 "Requested": [
  null,
  ""
 ],
 "Requests": [
  null,
  "Richieste"
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
  "Revisione"
 ],
 "Role": [
  null,
  "Ruolo"
 ],
 "Roles": [
  null,
  "Ruoli"
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
  "Segreto"
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
  "Server"
 ],
 "Service": [
  null,
  "Servizio"
 ],
 "Service Account": [
  null,
  ""
 ],
 "Services": [
  null,
  "Servizi"
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
  ""
 ],
 "Shared: Allow any authenticated user to pull images": [
  null,
  ""
 ],
 "Shell": [
  null,
  "Shell"
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
  "Dimensione"
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
  "Stato"
 ],
 "Status": [
  null,
  "Stato"
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
  "Tag"
 ],
 "Target": [
  null,
  "Obiettivo"
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
  "Modello"
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
  "Token"
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
  "Risoluzione dei problemi"
 ],
 "Trust this certificate for this connection": [
  null,
  ""
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "Type:": [
  null,
  "Tipo:"
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
  "Non disponibile"
 ],
 "Unknown": [
  null,
  "Sconosciuto"
 ],
 "Updating $0...": [
  null,
  ""
 ],
 "Used": [
  null,
  "Usato"
 ],
 "User": [
  null,
  "Utente"
 ],
 "User or Group": [
  null,
  ""
 ],
 "Username": [
  null,
  "Nome utente"
 ],
 "Users": [
  null,
  "Utenti"
 ],
 "Volume": [
  null,
  "Volume"
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
  "Volumi"
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
  "Quando"
 ],
 "Yes": [
  null,
  "Sì"
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
 "eg: my-image-stream": [
  null,
  ""
 ],
 "no": [
  null,
  "no"
 ],
 "none": [
  null,
  "nessuno"
 ],
 "pending volume claims": [
  null,
  ""
 ],
 "yes": [
  null,
  "si"
 ]
}));
