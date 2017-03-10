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
  "language": "ca",
  "x-generator": "Zanata 3.9.6"
 },
 " 1\"Do you want to delete the following Nodes?": [
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
  "Política d'accés"
 ],
 "Actual": [
  null,
  ""
 ],
 "Add": [
  null,
  "Afegeix"
 ],
 "Add Cluster Node": [
  null,
  ""
 ],
 "Add Group": [
  null,
  "Afegeix un grup"
 ],
 "Add Kubernetes Node": [
  null,
  ""
 ],
 "Add Member": [
  null,
  "Afegeix un membre"
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
  "Afegeix un rol"
 ],
 "Add User": [
  null,
  "Afegeix un usuari"
 ],
 "Add membership": [
  null,
  ""
 ],
 "Address": [
  null,
  "Adreça"
 ],
 "Addresses": [
  null,
  "Adreces"
 ],
 "Adjust": [
  null,
  "Ajusta"
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
  "Ajusta la ruta"
 ],
 "Adjust Service": [
  null,
  "Ajusta el servei"
 ],
 "Admin": [
  null,
  ""
 ],
 "All Projects": [
  null,
  "Tots els projectes"
 ],
 "All Types": [
  null,
  "Tots els tipus"
 ],
 "All healthy": [
  null,
  ""
 ],
 "All images": [
  null,
  "Totes les imatges"
 ],
 "All in use": [
  null,
  "Tots en ús"
 ],
 "All running": [
  null,
  ""
 ],
 "Annotations": [
  null,
  "Anotacions"
 ],
 "Anonymous: Allow all unauthenticated users to pull images": [
  null,
  ""
 ],
 "Authentication": [
  null,
  "Autenticació"
 ],
 "Author": [
  null,
  "Autor"
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
  "Cancel·la"
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
  "Canvia"
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
  "Clúster"
 ],
 "Configuration": [
  null,
  "Configuració"
 ],
 "Configure Flannel networking": [
  null,
  "Configura la xarxa Flannel"
 ],
 "Configure Kubelet and Proxy": [
  null,
  "Configura el Kubelet i el servidor intermediari"
 ],
 "Connect": [
  null,
  "Connecta"
 ],
 "Connecting...": [
  null,
  "S'està connectant..."
 ],
 "Connection Error": [
  null,
  "Error de connexió"
 ],
 "Connection Error: $0": [
  null,
  ""
 ],
 "Connection Settings": [
  null,
  "Ajusts de la connexió"
 ],
 "Container": [
  null,
  "Contenidor"
 ],
 "Container ID": [
  null,
  "Id. de contenidor"
 ],
 "Container Runtime Version": [
  null,
  "Versió de l'entorn d'execució del contenidor"
 ],
 "Containers": [
  null,
  "Contenidors"
 ],
 "Could not list services": [
  null,
  "No es van poder llistar els serveis"
 ],
 "Couldn't connect to server": [
  null,
  "No s'ha pogut connectar al servidor"
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
  "Creat"
 ],
 "DNS Policy": [
  null,
  "Política del DNS"
 ],
 "Delete": [
  null,
  "Suprimeix"
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
  "Suprimeix el projecte"
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
  "Desplega"
 ],
 "Deploy Application": [
  null,
  "Desplega l'aplicació"
 ],
 "Deployment Causes": [
  null,
  "Causes del desplegament"
 ],
 "Deployment Config": [
  null,
  "Configuració de desplegament"
 ],
 "Deployment Configs": [
  null,
  "Configuracions del desplegament"
 ],
 "Description": [
  null,
  "Descripció"
 ],
 "Details": [
  null,
  "Detalls"
 ],
 "Directory": [
  null,
  "Directori"
 ],
 "Disk": [
  null,
  "Disc"
 ],
 "Disk Utilization: $0%": [
  null,
  "Utilització del disc: $0%"
 ],
 "Display name": [
  null,
  "Nom a mostrar"
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
  "Controlador"
 ],
 "Empty Directory": [
  null,
  "Directori buit"
 ],
 "Endpoint": [
  null,
  "Extrem"
 ],
 "Endpoint Name": [
  null,
  "Nom de l'extrem"
 ],
 "Endpoints": [
  null,
  ""
 ],
 "Environment": [
  null,
  "Entorn"
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
  "Tipus de sistema de fitxers"
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
  "Dipòsit git"
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
  "Grups"
 ],
 "Host": [
  null,
  "Amfitrió"
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
  "ISCSI"
 ],
 "Identities": [
  null,
  "Identitats"
 ],
 "Identity": [
  null,
  "Identitat"
 ],
 "Image": [
  null,
  "Imatge"
 ],
 "Image ID": [
  null,
  "Id. d'imatge"
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
  "Imatges"
 ],
 "Images by project": [
  null,
  "Imatges per projecte"
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
  "Interfície"
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
  "Versió de Kubelet"
 ],
 "Kubernetes Cluster": [
  null,
  "Clúster Kubernetes"
 ],
 "Labels": [
  null,
  "Etiquetes"
 ],
 "Last Heartbeat": [
  null,
  ""
 ],
 "Last Status Change": [
  null,
  ""
 ],
 "Last Updated": [
  null,
  "Últim cop actualitzat"
 ],
 "Latest Version": [
  null,
  "Última versió"
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
  "Número de la unitat lògica"
 ],
 "Login commands": [
  null,
  ""
 ],
 "Logs": [
  null,
  "Registres"
 ],
 "Machine ID": [
  null,
  "Id. de màquina"
 ],
 "Manifest": [
  null,
  "Manifest"
 ],
 "Medium": [
  null,
  "Mitjà"
 ],
 "Member of": [
  null,
  "Membre de"
 ],
 "Members": [
  null,
  "Membres"
 ],
 "Membership": [
  null,
  "Pertinença"
 ],
 "Memory": [
  null,
  "Memòria"
 ],
 "Memory Utilization: $0%": [
  null,
  ""
 ],
 "Message": [
  null,
  "Missatge"
 ],
 "Metadata": [
  null,
  "Metadades"
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
  "Nom"
 ],
 "Namespace": [
  null,
  "Espai de noms"
 ],
 "Namespace cannot be empty.": [
  null,
  "L'espai de noms no pot estar en blanc."
 ],
 "Network": [
  null,
  "Xarxa"
 ],
 "New Group": [
  null,
  "Nou grup"
 ],
 "New Project": [
  null,
  "Nou projecte"
 ],
 "New image stream": [
  null,
  ""
 ],
 "New project": [
  null,
  "Nou projecte"
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
 "No image streams are present.": [
  null,
  ""
 ],
 "No images pushed": [
  null,
  ""
 ],
 "No metadata file was selected. Please select a Kubernetes metadata file.": [
  null,
  "Sense seleccionar el fitxer de metadades. Si us plau, seleccioneu un fitxer de metadades del Kubernetes."
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
  "Node"
 ],
 "Nodes": [
  null,
  "Nodes"
 ],
 "Nodes are the machines that run your containers.": [
  null,
  "Els nodes són les màquines que executen els vostres contenidors."
 ],
 "None": [
  null,
  "Cap"
 ],
 "Not Ready": [
  null,
  "No a punt"
 ],
 "Not a valid number of replicas": [
  null,
  "No és un nombre vàlid de rèpliques"
 ],
 "Not a valid value for Host": [
  null,
  "No és un valor vàlid per a l'amfitrió"
 ],
 "Not deployed": [
  null,
  "No desplegat"
 ],
 "OS": [
  null,
  "SO"
 ],
 "OS Versions": [
  null,
  ""
 ],
 "Operating System": [
  null,
  "Sistema operatiu"
 ],
 "Options": [
  null,
  "Opcions"
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
  "Partició"
 ],
 "Password": [
  null,
  "Contrasenya"
 ],
 "Path": [
  null,
  "Camí"
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
  "Fase"
 ],
 "Please create another namespace for $0 \"$1\"": [
  null,
  "Si us plau, creeu un altre espai de noms per a $0 \"$1\""
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
  "Si us plau, un espai de noms vàlid."
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
  "Si us plau, introduïu una adreça"
 ],
 "Pod": [
  null,
  "Pod"
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
  "Pods"
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
  "Pobla"
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
  "Projecte"
 ],
 "Project Members": [
  null,
  "Membres del projecte"
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
  "Projecte:"
 ],
 "Projects": [
  null,
  "Projectes"
 ],
 "Proxy Version": [
  null,
  "Versió del servidor intermediari"
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
  "Tan sols lectura"
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
  "A punt"
 ],
 "Reason": [
  null,
  "Raó"
 ],
 "Reclaim Policy": [
  null,
  ""
 ],
 "Reconnect": [
  null,
  "Torna a connectar"
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
  "Elimina"
 ],
 "Remove Group": [
  null,
  "Suprimeix el grup"
 ],
 "Remove Member": [
  null,
  "Suprimeix el membre"
 ],
 "Remove Role": [
  null,
  ""
 ],
 "Remove User": [
  null,
  "Suprimeix l'usuari"
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
  "Rèpliques"
 ],
 "Replication Controller": [
  null,
  "Controlador de replicació"
 ],
 "Replication Controllers": [
  null,
  "Controladors de replicació"
 ],
 "Replication controllers dynamically create instances of pods from templates, and remove pods when necessary.": [
  null,
  ""
 ],
 "Repository URL": [
  null,
  "URl del dipòsit"
 ],
 "Requested": [
  null,
  ""
 ],
 "Requests": [
  null,
  "Peticions"
 ],
 "Requires Authentication": [
  null,
  ""
 ],
 "Restart Count": [
  null,
  "Reinicia el compte"
 ],
 "Restart Policy": [
  null,
  "Reinicia la política"
 ],
 "Retain": [
  null,
  ""
 ],
 "Revision": [
  null,
  "Revisió"
 ],
 "Role": [
  null,
  ""
 ],
 "Roles": [
  null,
  "Rols"
 ],
 "Route": [
  null,
  ""
 ],
 "Routes": [
  null,
  "Rutes"
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
  "Secret"
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
  "Selecciona el fitxer del manifest..."
 ],
 "Select an object to see more details.": [
  null,
  "Seleccioneu un objecte per veure'n més detalls. "
 ],
 "Server": [
  null,
  ""
 ],
 "Service": [
  null,
  "Servei"
 ],
 "Service Account": [
  null,
  "Compte del servei"
 ],
 "Services": [
  null,
  "Serveis"
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
  "Mostra totes les imatges"
 ],
 "Since": [
  null,
  "Des de"
 ],
 "Size": [
  null,
  "Mida"
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
  "Estat"
 ],
 "Status": [
  null,
  "Estat"
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
  "Finalització TLS"
 ],
 "Tags": [
  null,
  "Etiquetes"
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
  "Plantilla"
 ],
 "The address contains invalid characters": [
  null,
  "L'adreça conté caràcters no vàlids"
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
  "El nombre màxim de rèpliques és 128"
 ],
 "The name contains invalid characters": [
  null,
  "El nom conté caràcters no vàlids"
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
  "El fitxer seleccionat no és un manifest d'aplicació Kubernetes vàlid."
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
  "Disparadors"
 ],
 "Troubleshoot": [
  null,
  "Soluciona el problema"
 ],
 "Trust this certificate for this connection": [
  null,
  ""
 ],
 "Type": [
  null,
  "Tipus"
 ],
 "Type:": [
  null,
  "Tipus:"
 ],
 "Unable to decode Kubernetes application manifest.": [
  null,
  ""
 ],
 "Unable to read the Kubernetes application manifest. Code $0.": [
  null,
  "No es pot llegir el fitxer del manifest del Kubernetes. Codi $0."
 ],
 "Unavailable": [
  null,
  ""
 ],
 "Unknown": [
  null,
  "Desconegut"
 ],
 "Updating $0...": [
  null,
  "S'està actualitzant $0..."
 ],
 "Used": [
  null,
  "Utilitzat"
 ],
 "User": [
  null,
  "Usuari"
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
  "Usuaris"
 ],
 "Volume": [
  null,
  "Volum"
 ],
 "Volume ID": [
  null,
  "Id. del volum"
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
  "Volums"
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
  "Sí"
 ],
 "You can bypass the certificate check, but any data you send to the server could be intercepted by others.": [
  null,
  ""
 ],
 "You can deploy an application to your cluster.": [
  null,
  "Podeu desplegar una aplicació al vostre clúster."
 ],
 "Your login credentials do not give you access to use the docker registry from the command line.": [
  null,
  "Les vostres credencials d'inici de sessió no us donen accés a utilitzar el registre de docker des de la línia d'ordres."
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
  "cap"
 ],
 "pending volume claims": [
  null,
  ""
 ],
 "yes": [
  null,
  "sí"
 ]
}));
