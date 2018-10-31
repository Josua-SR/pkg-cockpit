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
  "language": "de",
  "x-generator": "Zanata 4.6.2"
 },
 " 1\"Do you want to delete the following Nodes?": [
  null,
  "1\"Sind Sie sicher, dass Sie die folgenden Nodes löschen möchten?"
 ],
 "$0% Free": [
  "$0% Free",
  "$0% verfügbar",
  "$0% verfügbar"
 ],
 "$0% Used": [
  "$0% Used",
  "$0% in Benutzung",
  "$0% in Benutzung"
 ],
 "AWS Elastic Block Store": [
  null,
  ""
 ],
 "Access Modes": [
  null,
  "Zugriffsmodi"
 ],
 "Access Policy": [
  null,
  "Zugriffs-Richtlinie"
 ],
 "Actual": [
  null,
  ""
 ],
 "Add": [
  null,
  "Hinzufügen"
 ],
 "Add Cluster Node": [
  null,
  ""
 ],
 "Add Group": [
  null,
  "Gruppe hinzufügen"
 ],
 "Add Kubernetes Node": [
  null,
  "Kubernetes Node hinzufügen"
 ],
 "Add Member": [
  null,
  "Mitglied hinzufügen"
 ],
 "Add Membership": [
  null,
  "Mitgliedschaft hinzufügen"
 ],
 "Add New Cluster": [
  null,
  "Neuen Cluster hinzufügen"
 ],
 "Add New User": [
  null,
  "Neuen Nutzer anlegen"
 ],
 "Add Role": [
  null,
  "Neue Rolle hinzufügen"
 ],
 "Add User": [
  null,
  "Benutzer hinzufügen"
 ],
 "Add membership": [
  null,
  "Mitgliedschaft hinzufügen"
 ],
 "Address": [
  null,
  "Adresse"
 ],
 "Addresses": [
  null,
  "Adressen"
 ],
 "Adjust": [
  null,
  "Anpassen"
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
  "Route anpassen"
 ],
 "Adjust Service": [
  null,
  "Dienst anpassen"
 ],
 "Admin": [
  null,
  "Administrator"
 ],
 "All Projects": [
  null,
  "Alle Projekte"
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
  "Annotationen"
 ],
 "Anonymous: Allow all unauthenticated users to pull images": [
  null,
  ""
 ],
 "Authentication": [
  null,
  "Authentifizierung"
 ],
 "Azure": [
  null,
  "Azure"
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
  "CPU Auslastung: $0%"
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Capacity": [
  null,
  "Kapazität"
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
  "Ändern"
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
  "Claim"
 ],
 "Claim Name": [
  null,
  ""
 ],
 "Client Certificate": [
  null,
  "Client-Zertifikat"
 ],
 "Cluster": [
  null,
  "Cluster"
 ],
 "Configuration": [
  null,
  "Konfiguration"
 ],
 "Configure Flannel networking": [
  null,
  "Flannel Netzwerk konfigurieren"
 ],
 "Configure Kubelet and Proxy": [
  null,
  "Kubelet und Proxy konfigurieren"
 ],
 "Connect": [
  null,
  "Verbinden"
 ],
 "Connecting...": [
  null,
  "Verbinde..."
 ],
 "Connection Error": [
  null,
  "Fehler bei der Verbindung"
 ],
 "Connection Error: $0": [
  null,
  "Fehler bei der Verbindung: $0"
 ],
 "Connection Settings": [
  null,
  "Verbindungseinstellungen"
 ],
 "Container": [
  null,
  "Container"
 ],
 "Container ID": [
  null,
  "Container ID"
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
  "Verbindung zum Server konnte nicht hergstellt werden"
 ],
 "Couldn't find running API server": [
  null,
  ""
 ],
 "Create": [
  null,
  "Erstellen"
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
  "Erstellt"
 ],
 "DNS Policy": [
  null,
  "DNS Policy"
 ],
 "Delete": [
  null,
  "Löschen"
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
  "Auswahl löschen"
 ],
 "Delete image stream": [
  null,
  ""
 ],
 "Delete {{ item.kind }}": [
  null,
  "{{ item.kind }} löschen"
 ],
 "Deleting a Pod will kill all associated containers. Pods may be automatically created again in some cases.": [
  null,
  ""
 ],
 "Deploy": [
  null,
  "Deployen"
 ],
 "Deploy Application": [
  null,
  "Applikation installieren"
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
  "Beschreibung"
 ],
 "Details": [
  null,
  "Details"
 ],
 "Directory": [
  null,
  "Ordner"
 ],
 "Disk": [
  null,
  "Festplatte"
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
  "Treiber"
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
  "Endpunkte"
 ],
 "Environment": [
  null,
  "Umgebung"
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
  "Gruppen"
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
  "Identität"
 ],
 "Image": [
  null,
  "Bild"
 ],
 "Image ID": [
  null,
  "Abbildkennung"
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
  "Abbilder"
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
  "Schnittstelle"
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
  "Kubernetes Cluster"
 ],
 "Labels": [
  null,
  "Bezeichnungen"
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
  "Aktuelle Version"
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
  "Protokolle"
 ],
 "Machine ID": [
  null,
  "Maschinen-ID"
 ],
 "Manifest": [
  null,
  "Manifest"
 ],
 "Medium": [
  null,
  "Mittel"
 ],
 "Member of": [
  null,
  ""
 ],
 "Members": [
  null,
  "Mitglieder"
 ],
 "Membership": [
  null,
  "Mitgliedschaft"
 ],
 "Memory": [
  null,
  "Speicher"
 ],
 "Memory Utilization: $0%": [
  null,
  ""
 ],
 "Message": [
  null,
  "Anzeige"
 ],
 "Metadata": [
  null,
  "Metadaten"
 ],
 "Modify": [
  null,
  "Ändern"
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
  "Name"
 ],
 "Namespace": [
  null,
  "Namespace"
 ],
 "Namespace cannot be empty.": [
  null,
  "Der Namespace darf nicht leer sein."
 ],
 "Network": [
  null,
  "Netzwerk"
 ],
 "New Group": [
  null,
  "Neue Gruppe"
 ],
 "New Project": [
  null,
  "Neues Projekt"
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
  "Nein"
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
  "Es wurde keine Metadaten-Datei ausgewählt. Bitte geben Sie eine Kubernetes Metadaten-Datei an. "
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
  "Knoten"
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
  "Kein"
 ],
 "Not Ready": [
  null,
  "Nicht bereit"
 ],
 "Not a valid number of replicas": [
  null,
  "Keine gültige Anzahl von Repliken"
 ],
 "Not a valid value for Host": [
  null,
  "Kein gültiger Wert für Host"
 ],
 "Not deployed": [
  null,
  ""
 ],
 "OS": [
  null,
  "Betriebssystem"
 ],
 "OS Versions": [
  null,
  ""
 ],
 "Operating System": [
  null,
  "Betriebssystem"
 ],
 "Options": [
  null,
  "Einstellungen"
 ],
 "Overview": [
  null,
  "Überblick"
 ],
 "PD Name": [
  null,
  ""
 ],
 "Partition": [
  null,
  "Partition"
 ],
 "Password": [
  null,
  "Passwort"
 ],
 "Path": [
  null,
  "Pfad"
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
  "Bitte erzeugen Sie einen anderen Namespace für $0 \"$1\""
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
  "Bitte geben Sie einen gültigen Namespace an."
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
  "Bitte geben Sie eine Adresse an"
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
  "Ports"
 ],
 "Private: Allow only specific users or groups to pull images": [
  null,
  ""
 ],
 "Project": [
  null,
  "Projekt"
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
  "Projekt:"
 ],
 "Projects": [
  null,
  "Projekte"
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
  "Nur Lesen"
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
  "Bereit"
 ],
 "Reason": [
  null,
  "Grund"
 ],
 "Reclaim Policy": [
  null,
  ""
 ],
 "Reconnect": [
  null,
  "Erneut verbinden"
 ],
 "Recycle": [
  null,
  ""
 ],
 "Register": [
  null,
  "Registrieren"
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
  "Entfernen"
 ],
 "Remove Group": [
  null,
  "Gruppe entfernen"
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
  "Benutzer entfernen"
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
  "Repliken"
 ],
 "Replication Controller": [
  null,
  "Replication Controller"
 ],
 "Replication Controllers": [
  null,
  "Replication Controller"
 ],
 "Replication controllers dynamically create instances of pods from templates, and remove pods when necessary.": [
  null,
  ""
 ],
 "Repository URL": [
  null,
  "Repository URL"
 ],
 "Requested": [
  null,
  ""
 ],
 "Requests": [
  null,
  "Anfragen"
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
  "Revision"
 ],
 "Role": [
  null,
  "Rolle"
 ],
 "Roles": [
  null,
  "Rollen"
 ],
 "Route": [
  null,
  "Route"
 ],
 "Routes": [
  null,
  "Routen"
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
  "Geheim"
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
  "Wählen Sie eine Manifestdatei aus..."
 ],
 "Select Member": [
  null,
  ""
 ],
 "Select Role": [
  null,
  "Rolle auswählen"
 ],
 "Select an object to see more details.": [
  null,
  "Wählen Sie ein Objekt aus, um weitere Details anzuzeigen."
 ],
 "Server": [
  null,
  "Server"
 ],
 "Service": [
  null,
  "Dienst"
 ],
 "Service Account": [
  null,
  ""
 ],
 "Services": [
  null,
  "Dienste"
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
  "Freigabe Name"
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
  "Zeige alle Container an"
 ],
 "Show all Deployment Configs": [
  null,
  ""
 ],
 "Show all Nodes": [
  null,
  "Zeige alle Knoten an"
 ],
 "Show all Persistent Volumes": [
  null,
  "Zeige alle persistenten Datenträger an"
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
  "Zeige alle Projekte an"
 ],
 "Show all Replication Controllers": [
  null,
  "Zeige alle Replication Controller an"
 ],
 "Show all Routes": [
  null,
  "Zeige alle Routen an"
 ],
 "Show all Services": [
  null,
  "Zeige alle Dienste an"
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
  "Seit"
 ],
 "Size": [
  null,
  "Größe"
 ],
 "Skip Certificate Verification": [
  null,
  "Zertifikatprüfung überspringen"
 ],
 "Sorry, I don't know how to modify this volume": [
  null,
  "Entschuldigung, ich weiß nicht, wie ich diesen Datenträger modifizieren soll"
 ],
 "State": [
  null,
  "Status"
 ],
 "Status": [
  null,
  "Status"
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
  "Tags"
 ],
 "Target": [
  null,
  "Ziel"
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
  "Vorlage"
 ],
 "The address contains invalid characters": [
  null,
  "Das Adressfeld enthält ungültige Zeichen"
 ],
 "The container '{{ target }}' does not exist.": [
  null,
  "Der Container '{{ target }}' existiert nicht."
 ],
 "The deployment config '{{ target }}' does not exist.": [
  null,
  ""
 ],
 "The group '{{ groupName }}' does not exist.": [
  null,
  "Die Gruppe '{{ groupName }}' existiert nicht."
 ],
 "The maximum number of replicas is 128": [
  null,
  "Die maximale Anzahl von Repliken ist 128"
 ],
 "The name contains invalid characters": [
  null,
  "Der Name enthält ungültige Zeichen"
 ],
 "The node '{{ target }}' does not exist.": [
  null,
  "Der Knoten '{{ target }}' existiert nicht."
 ],
 "The node doesn't have enough disk space": [
  null,
  "Dieser Knoten verfügt nicht über ausreichend freien Speicherplatz"
 ],
 "The node doesn't have enough free memory": [
  null,
  "Dieser Knoten verfügt nicht über ausreichend freien Arbeitsspeicher"
 ],
 "The persistent volume '{{ target }}' does not exist.": [
  null,
  ""
 ],
 "The pod '{{ target }}' does not exist.": [
  null,
  "Der Pod '{{ target }}' existiert nicht."
 ],
 "The project '{{ projName }}' does not exist.": [
  null,
  "Das Projekt '{{ projName }}' existiert nicht."
 ],
 "The replication controller '{{ target }}' does not exist.": [
  null,
  "Der Replication Controller '{{ target }}' existiert nicht."
 ],
 "The route '{{ target }}' does not exist.": [
  null,
  "Die Route '{{ target }}' existiert nicht."
 ],
 "The selected file is not a valid Kubernetes application manifest.": [
  null,
  "Die ausgewählte Datei ist kein gültiges Kubernetes Applikationsmanifest."
 ],
 "The server uses a certificate signed by an unknown authority.": [
  null,
  "Der Server nutzt ein Zertifikat, das von einer unbekannten Stelle signiert wurde."
 ],
 "The service '{{ target }}' does not exist.": [
  null,
  "Der Dienst '{{ target }}' existiert nicht."
 ],
 "The user '{{ userName }}' does not exist.": [
  null,
  "Der Benutzer '{{ userName }}' existiert nicht."
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
  "Topologie"
 ],
 "Triggers": [
  null,
  ""
 ],
 "Troubleshoot": [
  null,
  "Fehlersuche"
 ],
 "Trust this certificate for this connection": [
  null,
  "Diesem Zertifikat für diese Verbindung vertrauen"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "Type:": [
  null,
  "Typ:"
 ],
 "Unable to decode Kubernetes application manifest.": [
  null,
  "Kann Kubernetes Applikationsmanifest nicht verarbeiten."
 ],
 "Unable to read the Kubernetes application manifest. Code $0.": [
  null,
  "Das Kubernetes Applikationsmanifest konnte nicht gelesen werden. Code $0."
 ],
 "Unavailable": [
  null,
  "Nicht verfügbar"
 ],
 "Unknown": [
  null,
  "Unbekannt"
 ],
 "Updating $0...": [
  null,
  "Aktualisiere $0..."
 ],
 "Used": [
  null,
  "Benutzt"
 ],
 "User": [
  null,
  "Benutzer"
 ],
 "User or Group": [
  null,
  "Benutzer oder Gruppe"
 ],
 "Username": [
  null,
  "Benutzername"
 ],
 "Users": [
  null,
  "Benutzer"
 ],
 "Volume": [
  null,
  "Lautstärke"
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
  "Datenträger"
 ],
 "Warning:": [
  null,
  "Warnung:"
 ],
 "Welcome to the Image Registry": [
  null,
  "Willkommen bei der Image Registry"
 ],
 "When": [
  null,
  "Wann"
 ],
 "Yes": [
  null,
  "Ja"
 ],
 "You can bypass the certificate check, but any data you send to the server could be intercepted by others.": [
  null,
  "Sie können die Zertifikatsprüfung umgehen, dann könnten jedoch sämtliche an den Server gesendete Daten von Dritten mitgelesen werden."
 ],
 "You can deploy an application to your cluster.": [
  null,
  ""
 ],
 "Your login credentials do not give you access to use the docker registry from the command line.": [
  null,
  "Ihre Zugangsdaten erlauben Ihnen keinen Zugang zur Docker Registry von der Kommandozeile."
 ],
 "eg: my-image-stream": [
  null,
  ""
 ],
 "no": [
  null,
  "Nein"
 ],
 "none": [
  null,
  "kein"
 ],
 "pending volume claims": [
  null,
  ""
 ],
 "yes": [
  null,
  "Ja"
 ]
}));
