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
  " 1\"Voleu suprimir els següents nodes?"
 ],
 " or drag & drop.": [
  null,
  ""
 ],
 "$0% Free": [
  "$0% Free",
  "$0% lliure",
  "$0% lliures"
 ],
 "$0% Used": [
  "$0% Used",
  "$0% utilitzat",
  "$0% utilitzats"
 ],
 "AWS Elastic Block Store": [
  null,
  ""
 ],
 "Access Modes": [
  null,
  "Modes d'accés"
 ],
 "Access Policy": [
  null,
  "Política d'accés"
 ],
 "Actual": [
  null,
  "Real"
 ],
 "Add": [
  null,
  "Afegeix"
 ],
 "Add Cluster Node": [
  null,
  "Afegeix un node de clúster"
 ],
 "Add Group": [
  null,
  "Afegeix un grup"
 ],
 "Add Kubernetes Node": [
  null,
  "Afegeix un node Kubernetes"
 ],
 "Add Member": [
  null,
  "Afegeix un membre"
 ],
 "Add Membership": [
  null,
  "Afegeix una pertinença"
 ],
 "Add New Cluster": [
  null,
  "Afegeix un clúster nou"
 ],
 "Add New User": [
  null,
  "Afegeix un usuari nou"
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
  "Afegeix una pertinença"
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
  "Ajusta el volum persistent '{{ item.metadata.name }}'"
 ],
 "Adjust Replication Controller {{ item.metadata.name }}": [
  null,
  "Ajusta el controlador de replicació {{ item.metadata.name }}"
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
  "Administrador"
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
  "Tot en execució"
 ],
 "Annotations": [
  null,
  "Anotacions"
 ],
 "Anonymous: Allow all unauthenticated users to pull images": [
  null,
  "Anònim: permet que tots els usuaris no autenticats recuperin imatges"
 ],
 "Authentication": [
  null,
  "Autenticació"
 ],
 "Azure": [
  null,
  "Azure"
 ],
 "Boot ID": [
  null,
  "Id. d'arrencada"
 ],
 "Bus": [
  null,
  "Bus"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU Utilization: $0%": [
  null,
  "Utilització de la CPU: $0%"
 ],
 "Cancel": [
  null,
  "Cancel·la"
 ],
 "Capacity": [
  null,
  "Capacitat"
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
  "Canvia l'usuari"
 ],
 "Change image stream": [
  null,
  "Canvia el flux d'imatges"
 ],
 "Change project": [
  null,
  "Canvia el projecte"
 ],
 "Cinder": [
  null,
  ""
 ],
 "Claim": [
  null,
  "Reclama"
 ],
 "Claim Name": [
  null,
  "Nom de la reclamació"
 ],
 "Client Certificate": [
  null,
  "Certificat de client"
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
  "Configura Kubelet i el servidor intermediari"
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
  "Error de connexió: $0"
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
  "No s'ha pogut trobar el servidor de l'API en execució"
 ],
 "Count:": [
  null,
  "Nombre:"
 ],
 "Create": [
  null,
  "Crea"
 ],
 "Create Virtual Machine": [
  null,
  ""
 ],
 "Create empty image stream": [
  null,
  "Crea un flux d'imatges buit"
 ],
 "Create image stream": [
  null,
  "Crea un flux d'imatges"
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
  "Suprimeix el node"
 ],
 "Delete Persistent Volume": [
  null,
  "Suprimeix el volum persistent"
 ],
 "Delete Persistent Volume Claim": [
  null,
  "Suprimeix la reclamació del volum persistent"
 ],
 "Delete Project": [
  null,
  "Suprimeix el projecte"
 ],
 "Delete Selected": [
  null,
  "Suprimeix la selecció"
 ],
 "Delete image stream": [
  null,
  "Suprimeix el flux d'imatges"
 ],
 "Delete {{ item.kind }}": [
  null,
  "Suprimeix {{ item.kind }}"
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
  "Configuracions de desplegaments"
 ],
 "Description": [
  null,
  "Descripció"
 ],
 "Details": [
  null,
  "Detalls"
 ],
 "Device": [
  null,
  "Dispositiu"
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
 "Disks": [
  null,
  "Discs"
 ],
 "Display name": [
  null,
  "Nom a mostrar"
 ],
 "Do you want to add the role '{{ fields.displayRole }}'?": [
  null,
  "Voleu afegir el rol '{{ fields.displayRole }}'?"
 ],
 "Do you want to delete the '{{stream.metadata.namespace}}/{{stream.metadata.name}}' image stream?": [
  null,
  "Voleu suprimir el flux d'imatges '{{stream.metadata.namespace}}/{{stream.metadata.name}}'?"
 ],
 "Do you want to delete the Persistent Volume '{{item.metadata.name}}'?": [
  null,
  "Voleu suprimir el volum persistent '{{item.metadata.name}}'?"
 ],
 "Do you want to delete the Persistent Volume Claim '{{item.metadata.name}}'?": [
  null,
  ""
 ],
 "Do you want to delete the {{ item.kind }} '{{item.metadata.name}}'?": [
  null,
  "Voleu suprimir {{ item.kind }} '{{item.metadata.name}}'?"
 ],
 "Do you want to delete this Node?": [
  null,
  "Voleu suprimir aquest node?"
 ],
 "Do you want to remove the image tagged as '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?": [
  null,
  "Voleu suprimir la imatge etiquetada com a '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?"
 ],
 "Do you want to remove the role '{{ fields.displayRole }}' from member {{ fields.member.metadata.name }}?": [
  null,
  "Voleu suprimir el rol '{{ fields.displayRole }}' del membre {{ fields.member.metadata.name }}?"
 ],
 "Don't pull images automatically": [
  null,
  "No recuperis automàticament les imatges"
 ],
 "Driver": [
  null,
  "Controlador"
 ],
 "Drop file here to upload.": [
  null,
  ""
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
  "Extrems"
 ],
 "Environment": [
  null,
  "Entorn"
 ],
 "Error getting certificate details: $0": [
  null,
  "Error en obtenir els detalls del certificat: $0"
 ],
 "Error writing kubectl config": [
  null,
  "Error en escriure la configuració de kubectl"
 ],
 "Fibre Channel": [
  null,
  "Fibre Channel"
 ],
 "Filesystem Type": [
  null,
  "Tipus de sistema de fitxers"
 ],
 "Flex": [
  null,
  "Flex"
 ],
 "Flocker": [
  null,
  "Flocker"
 ],
 "Flocker Dataset Name": [
  null,
  ""
 ],
 "GCE Persistent Disk": [
  null,
  "Disc persistent GCE"
 ],
 "GiB": [
  null,
  "GiB"
 ],
 "Git Repository": [
  null,
  "Dipòsit git"
 ],
 "Gluster FS": [
  null,
  "Gluster FS"
 ],
 "GlusterFS": [
  null,
  "GlusterFS"
 ],
 "Grant additional push or admin access to specific members below.": [
  null,
  ""
 ],
 "Group Members": [
  null,
  "Membres del grup"
 ],
 "Group or Project": [
  null,
  "Grup o projecte"
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
  "Camí a l'amfitrió"
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
  "Nom de la imatge"
 ],
 "Image Registry": [
  null,
  "Registre d'imatges"
 ],
 "Image Stream": [
  null,
  "Flux d'imatges"
 ],
 "Image commands": [
  null,
  "Ordres de la imatge"
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
  "Versió del kernel"
 ],
 "Key Ring Path": [
  null,
  "Camí a l'anell de claus"
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
 "Labels:": [
  null,
  "Etiquetes:"
 ],
 "Last Heartbeat": [
  null,
  "Últim batec"
 ],
 "Last Status Change": [
  null,
  "Últim canvi d'estat"
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
  "Ordres d'inici de sessió"
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
  "Utilització de la memòria:  $0%"
 ],
 "Memory:": [
  null,
  "Memòria:"
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
  "Monitors"
 ],
 "Mount Location": [
  null,
  "Ubicació del muntatge"
 ],
 "N/A": [
  null,
  "N/D"
 ],
 "NFS": [
  null,
  "NFS"
 ],
 "NFS Mount": [
  null,
  "Muntatge NFS"
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
  "Grup nou"
 ],
 "New Project": [
  null,
  "Projecte nou"
 ],
 "New image stream": [
  null,
  "Flux d'imatges nou"
 ],
 "New project": [
  null,
  "Projecte nou"
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
 "No disks defined for this VM": [
  null,
  "No hi ha definit cap disc per a aquesta MV"
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
  "Sense seleccionar el fitxer de metadades. Si us plau, seleccioneu un fitxer de metadades del Kubernetes."
 ],
 "No nodes in cluster": [
  null,
  "Cap node al clúster"
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
  "No hi ha volums presents."
 ],
 "No volumes in use": [
  null,
  "Sense volums en ús"
 ],
 "Node": [
  null,
  "Node"
 ],
 "Node:": [
  null,
  "Node:"
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
 "Not Available": [
  null,
  "No disponible"
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
  "Versions del SO"
 ],
 "Ok": [
  null,
  "D'acord"
 ],
 "Only files of size $0 MiB and less are supported": [
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
  "Visió de conjunt"
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
 "Paste JSON below, ": [
  null,
  ""
 ],
 "Path": [
  null,
  "Camí"
 ],
 "Pending Volume Claims": [
  null,
  "Reclamacions de volums pendents"
 ],
 "Persistent Volumes": [
  null,
  "Volums persistents"
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
  "Si us plau, proporcioneu un nom de volum GlusterFS"
 ],
 "Please provide a username": [
  null,
  "Si us plau, proporcioneu un nom d'usuari vàlid"
 ],
 "Please provide a valid NFS server": [
  null,
  "Si us plau, proporcioneu un servidor NFS vàlid"
 ],
 "Please provide a valid address": [
  null,
  "Si us plau, proporcioneu una adreça vàlida"
 ],
 "Please provide a valid filesystem type": [
  null,
  "Si us plau, proporcioneu un tipus de sistema de fitxers vàlid"
 ],
 "Please provide a valid interface": [
  null,
  "Proporcioneu una interfície vàlida"
 ],
 "Please provide a valid logical unit number": [
  null,
  "Si us plau, proporcioneu un nombre vàlid d'unitat lògica"
 ],
 "Please provide a valid name": [
  null,
  "Si us plau, proporcioneu un nom vàlid"
 ],
 "Please provide a valid namespace.": [
  null,
  "Si us plau, proporcioneu un espai de noms vàlid."
 ],
 "Please provide a valid path": [
  null,
  "Si us plau, proporcioneu un camí vàlid"
 ],
 "Please provide a valid qualified name": [
  null,
  ""
 ],
 "Please provide a valid storage capacity.": [
  null,
  "Si us plau, proporcioneu una capacitat d'emmagatzematge vàlida."
 ],
 "Please provide a valid target": [
  null,
  "Si us plau, proporcioneu un objectiu vàlid"
 ],
 "Please select a valid access mode": [
  null,
  "Si us plau, seleccioneu un mode d'accés vàlid"
 ],
 "Please select a valid endpoint": [
  null,
  "Si us plau, seleccioneu un extrem vàlid"
 ],
 "Please select a valid policy option.": [
  null,
  "Si us plau, seleccioneu una opció de política vàlida."
 ],
 "Please type an address": [
  null,
  "Si us plau, teclegeu una adreça"
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
 "Pod:": [
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
  "Nom de l'agrupació"
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
  "Privat: permet que només els usuaris o grups específics recuperin imatges"
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
  "La política d'accés de projecte permet que els usuaris anònims recuperin imatges."
 ],
 "Project access policy allows any authenticated user to pull images.": [
  null,
  "La política d'accés públic permet que qualsevol usuari o grup autenticat recuperi imatges."
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
  "Recupera una imatge:"
 ],
 "Pull from": [
  null,
  "Recupera de"
 ],
 "Pull specific tags from another image repository": [
  null,
  "Recupera les etiquetes específiques d'un altre dipòsit d'imatges"
 ],
 "Push an image:": [
  null,
  ""
 ],
 "Qualified Name": [
  null,
  "Nom qualificat"
 ],
 "Rados Block Device": [
  null,
  "Dispositiu de blocs rados"
 ],
 "Read Only": [
  null,
  "Tan sols lectura"
 ],
 "Read and write from a single node": [
  null,
  "Lectura i escriptura d'un sol node"
 ],
 "Read and write from multiple nodes": [
  null,
  "Lectura i escriptura de diversos nodes"
 ],
 "Read only from multiple nodes": [
  null,
  "Només lectura de diversos nodes"
 ],
 "Readonly": [
  null,
  "NomésLectura"
 ],
 "Ready": [
  null,
  "A punt"
 ],
 "Reason": [
  null,
  "Motiu"
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
  "Recicla"
 ],
 "Register": [
  null,
  "Registra"
 ],
 "Register New Volume": [
  null,
  "Registra un volum nou"
 ],
 "Register Persistent Volume": [
  null,
  "Registra un volum persistent"
 ],
 "Remote registry is insecure": [
  null,
  ""
 ],
 "Remove": [
  null,
  "Suprimeix"
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
  "Suprimeix el rol"
 ],
 "Remove User": [
  null,
  "Suprimeix l'usuari"
 ],
 "Remove image tag": [
  null,
  "Suprimeix l'etiqueta de la imatge"
 ],
 "Remove membership": [
  null,
  "Suprimeix la pertinença"
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
  "Requereix autenticació"
 ],
 "Resolve above errors to continue": [
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
  "Rol"
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
  "Encaminaments"
 ],
 "Scheduled Pods": [
  null,
  ""
 ],
 "Scheduling Disabled": [
  null,
  "Planificació inhabilitada"
 ],
 "Secret": [
  null,
  "Secret"
 ],
 "Secret File": [
  null,
  "Fitxer secret"
 ],
 "Secret Name": [
  null,
  "Nom secret"
 ],
 "Secret Volume": [
  null,
  "Volum secret"
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
  "Servidor"
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
 "Session": [
  null,
  "Sessió"
 ],
 "Session Affinity": [
  null,
  ""
 ],
 "Share Name": [
  null,
  "Nom de compartició"
 ],
 "Shared: Allow any authenticated user to pull images": [
  null,
  "Compartit: permet que qualsevol usuari autenticat recuperi imatges"
 ],
 "Shell": [
  null,
  "Shell"
 ],
 "Show all Containers": [
  null,
  "Mostra tots els contenidors"
 ],
 "Show all Deployment Configs": [
  null,
  "Mostra totes les configuracions de desplegament"
 ],
 "Show all Nodes": [
  null,
  "Mostra tots els nodes"
 ],
 "Show all Persistent Volumes": [
  null,
  "Mostra tots els volums persistents"
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
  "Mostra tots els projectes"
 ],
 "Show all Replication Controllers": [
  null,
  "Mostra tots els controladors de replicació"
 ],
 "Show all Routes": [
  null,
  "Mostra tots els encaminaments"
 ],
 "Show all Services": [
  null,
  "Mostra tots els serveis"
 ],
 "Show all image streams": [
  null,
  "Mostra tots els fluxos d'imatges"
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
  "Omet la verificació del certificat"
 ],
 "Sorry, I don't know how to modify this volume": [
  null,
  ""
 ],
 "Source": [
  null,
  "Origen"
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
  "Estratègia"
 ],
 "Sync all tags from a remote image repository": [
  null,
  ""
 ],
 "System": [
  null,
  "Sistema"
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
  "Objectiu"
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
  "El contenidor '{{ target }}' no existeix."
 ],
 "The deployment config '{{ target }}' does not exist.": [
  null,
  "La configuració del desplegament '{{ target }}' no existeix."
 ],
 "The group '{{ groupName }}' does not exist.": [
  null,
  "El grup '{{ groupName }}' no existeix."
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
  "El node '{{ target }}' no existeix."
 ],
 "The node doesn't have enough disk space": [
  null,
  "El node no té prou espai lliure al disc"
 ],
 "The node doesn't have enough free memory": [
  null,
  "El node no té prou memòria lliure al disc"
 ],
 "The persistent volume '{{ target }}' does not exist.": [
  null,
  "El volum persistent '{{ target }}' no existeix."
 ],
 "The pod '{{ target }}' does not exist.": [
  null,
  "El pod '{{ target }}' no existeix."
 ],
 "The project '{{ projName }}' does not exist.": [
  null,
  "El projecte '{{ projName }}' no existeix."
 ],
 "The replication controller '{{ target }}' does not exist.": [
  null,
  "El controlador de replicació '{{ target }}' no existeix."
 ],
 "The route '{{ target }}' does not exist.": [
  null,
  "L'encaminament '{{ target }}' no existeix."
 ],
 "The selected file is not a valid Kubernetes application manifest.": [
  null,
  "El fitxer seleccionat no és un manifest d'aplicació Kubernetes vàlid."
 ],
 "The server uses a certificate signed by an unknown authority.": [
  null,
  "El servidor utilitza un certificat signat per una autoritat desconeguda."
 ],
 "The service '{{ target }}' does not exist.": [
  null,
  "El servei '{{ target }}' no existeix."
 ],
 "The user '{{ userName }}' does not exist.": [
  null,
  "L'usuari '{{ userName }}' no existeix."
 ],
 "This claim is in use. Deleting it may cause issues with the following pod:": [
  null,
  ""
 ],
 "This option is for single node testing only – local storage will not work in a multi-node cluster": [
  null,
  "Aquesta opció només és per a proves de node únic: l'emmagatzematge local no funcionarà en un clúster de diversos nodes"
 ],
 "This volume has been claimed by {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Deleting it will break that claim and may cause issues with any pods depending on it.": [
  null,
  ""
 ],
 "This volume has not been claimed": [
  null,
  "Aquest volum no ha estat reclamat"
 ],
 "Token": [
  null,
  "Testimoni"
 ],
 "Topology": [
  null,
  "Topologia"
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
  "Confia en aquest certificat per a aquesta connexió"
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
  "No es pot descodificar el manifest d'aplicació de Kubernetes."
 ],
 "Unable to read the Kubernetes application manifest. Code $0.": [
  null,
  "No es pot llegir el fitxer del manifest del Kubernetes. Codi $0."
 ],
 "Unavailable": [
  null,
  "No disponible"
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
  "Usuari o grup"
 ],
 "Username": [
  null,
  "Nom d'usuari"
 ],
 "Users": [
  null,
  "Usuaris"
 ],
 "VM DELETE failed.": [
  null,
  "Ha fallat VM DELETE"
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
  "Màquines virtuals"
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
  "Nom del volum"
 ],
 "Volume Type": [
  null,
  "Tipus del volum"
 ],
 "Volumes": [
  null,
  "Volums"
 ],
 "Warning:": [
  null,
  "Advertència:"
 ],
 "Welcome to the Image Registry": [
  null,
  "Benvingut al registre d'imatges"
 ],
 "When": [
  null,
  "Quan"
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
 "bridge": [
  null,
  "pont"
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "crashed": [
  null,
  "estavellat"
 ],
 "custom": [
  null,
  "personalitzat"
 ],
 "direct": [
  null,
  "directe"
 ],
 "disabled": [
  null,
  "inhabilitat"
 ],
 "disk": [
  null,
  "disc"
 ],
 "down": [
  null,
  ""
 ],
 "dying": [
  null,
  "morint"
 ],
 "eg: my-image-stream": [
  null,
  ""
 ],
 "enabled": [
  null,
  "habilitat"
 ],
 "ethernet": [
  null,
  "ethernet"
 ],
 "host": [
  null,
  "amfitrió"
 ],
 "hostdev": [
  null,
  ""
 ],
 "iSCSI": [
  null,
  "iSCSI"
 ],
 "idle": [
  null,
  "ociós"
 ],
 "mcast": [
  null,
  "mcast"
 ],
 "n/a": [
  null,
  "n/d"
 ],
 "network": [
  null,
  "xarxa"
 ],
 "no": [
  null,
  "no"
 ],
 "none": [
  null,
  "cap"
 ],
 "paused": [
  null,
  "pausa"
 ],
 "pending volume claims": [
  null,
  "reclamacions de volums pendents"
 ],
 "running": [
  null,
  "en execució"
 ],
 "server": [
  null,
  "servidor"
 ],
 "show less": [
  null,
  "mostra menys"
 ],
 "show more": [
  null,
  "mostra més"
 ],
 "shut off": [
  null,
  "apagat"
 ],
 "shutdown": [
  null,
  "apaga"
 ],
 "suspended (PM)": [
  null,
  "suspès (PM)"
 ],
 "udp": [
  null,
  "udp"
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
  "usuari"
 ],
 "vCPUs:": [
  null,
  "vCPUs:"
 ],
 "vhostuser": [
  null,
  ""
 ],
 "yes": [
  null,
  "sí"
 ]
}));
