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
  "language": "es",
  "x-generator": "Zanata 3.9.6"
 },
 " 1\"Do you want to delete the following Nodes?": [
  null,
  " 1\"¿Desea borrar los siguientes Nodos?"
 ],
 "$0% Free": [
  "$0% Free",
  "$0% Libre",
  "$0% Libre"
 ],
 "$0% Used": [
  "$0% Used",
  "$0% Usado",
  "$0% Usado"
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
  "Política de Acceso"
 ],
 "Actual": [
  null,
  ""
 ],
 "Add": [
  null,
  "Agregar"
 ],
 "Add Cluster Node": [
  null,
  ""
 ],
 "Add Group": [
  null,
  "Agregar Grupo"
 ],
 "Add Kubernetes Node": [
  null,
  ""
 ],
 "Add Member": [
  null,
  "Agregar Miembro"
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
  "Dirección"
 ],
 "Addresses": [
  null,
  "Dirección"
 ],
 "Adjust": [
  null,
  "Ajustar"
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
  "Ajustar servicio"
 ],
 "Admin": [
  null,
  ""
 ],
 "All Projects": [
  null,
  "Todos los Proyectos"
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
  "Todas las imágenes"
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
  "Anotaciones"
 ],
 "Anonymous: Allow all unauthenticated users to pull images": [
  null,
  ""
 ],
 "Authentication": [
  null,
  "Autenticación"
 ],
 "Author": [
  null,
  "Autor"
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
  "Uso de CPU: $0%"
 ],
 "Cancel": [
  null,
  "Cancelar"
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
  "Cambiar"
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
  "Cambiar proyecto"
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
  "Configuración"
 ],
 "Configure Flannel networking": [
  null,
  "Configurar la red Flannel"
 ],
 "Configure Kubelet and Proxy": [
  null,
  "Configurar Kubelet y proxy"
 ],
 "Connect": [
  null,
  "Conectar"
 ],
 "Connecting...": [
  null,
  "Conectando..."
 ],
 "Connection Error": [
  null,
  ""
 ],
 "Connection Error: $0": [
  null,
  "Error de conexión: $0"
 ],
 "Connection Settings": [
  null,
  ""
 ],
 "Container": [
  null,
  "Contenedor"
 ],
 "Container ID": [
  null,
  "ID de Contenedor"
 ],
 "Container Runtime Version": [
  null,
  ""
 ],
 "Containers": [
  null,
  "Contenedores"
 ],
 "Could not list services": [
  null,
  "No se pueden listar los servicios"
 ],
 "Couldn't connect to server": [
  null,
  "No se pudo conectar al servidor"
 ],
 "Couldn't find running API server": [
  null,
  "No se puede encontrar un servidor API ejecutandose"
 ],
 "Create": [
  null,
  "Crear"
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
  "Creado"
 ],
 "DNS Policy": [
  null,
  ""
 ],
 "Delete": [
  null,
  "Eliminar"
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
  "Desplegar"
 ],
 "Deploy Application": [
  null,
  "Desplegar aplicación"
 ],
 "Deployment Causes": [
  null,
  "Causas de Despliegue"
 ],
 "Deployment Config": [
  null,
  "Configuración de Despliegue"
 ],
 "Deployment Configs": [
  null,
  "Configuración de despliegue"
 ],
 "Description": [
  null,
  "Descripción "
 ],
 "Details": [
  null,
  "Detalles"
 ],
 "Directory": [
  null,
  "Directorio"
 ],
 "Disk": [
  null,
  "Disco"
 ],
 "Disk Utilization: $0%": [
  null,
  "Uso de disco: $0%"
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
 "Empty Directory": [
  null,
  "Directorio vació"
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
  "Entorno"
 ],
 "Error getting certificate details: $0": [
  null,
  "Error al obtener los detalles del certificado: $0"
 ],
 "Error writing kubectl config": [
  null,
  "Error escribiendo configuración de kubectl"
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
  ""
 ],
 "Git Repository": [
  null,
  "Repositorio Git"
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
  "Anfitrión"
 ],
 "Host Path": [
  null,
  "Ruta del Host"
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
  ""
 ],
 "Identity": [
  null,
  ""
 ],
 "Image": [
  null,
  "Imagén"
 ],
 "Image ID": [
  null,
  "ID de Imagen"
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
  "Imágenes"
 ],
 "Images by project": [
  null,
  "Imágenes por proyecto"
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
  "Cluster de Kubernetes"
 ],
 "Labels": [
  null,
  "Viñetas"
 ],
 "Last Heartbeat": [
  null,
  "Último Heartbeat"
 ],
 "Last Status Change": [
  null,
  "Último Cambio de Estado"
 ],
 "Last Updated": [
  null,
  "Última Actualización"
 ],
 "Latest Version": [
  null,
  "Última Versión"
 ],
 "Log into OpenShift command line tools:": [
  null,
  ""
 ],
 "Log into the registry:": [
  null,
  "Iniciar sesión en el registro:"
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
  "Manifiesto"
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
  "Miembros"
 ],
 "Membership": [
  null,
  "Afiliación"
 ],
 "Memory": [
  null,
  "Memoria"
 ],
 "Memory Utilization: $0%": [
  null,
  "Uso de memoria: $0%"
 ],
 "Message": [
  null,
  "Mensaje"
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
  "NFS"
 ],
 "NFS Mount": [
  null,
  "Montar NFS"
 ],
 "Name": [
  null,
  "Nombre"
 ],
 "Namespace": [
  null,
  "Espacio de Nombres"
 ],
 "Namespace cannot be empty.": [
  null,
  "El nombre de espacio no puede estar vacio"
 ],
 "Network": [
  null,
  "Red"
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
  "Nuevo proyecto"
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
  "No se seleccionó un archivo metadata. Por favor seleccione un archivo metadata Kebernetes."
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
  "Nodo"
 ],
 "Nodes": [
  null,
  "Nodos"
 ],
 "Nodes are the machines that run your containers.": [
  null,
  "Nodos son las computadoras que ejecutan sus contenedores"
 ],
 "None": [
  null,
  "Ninguno"
 ],
 "Not Ready": [
  null,
  "No está listo"
 ],
 "Not a valid number of replicas": [
  null,
  "No es un número válido de réplicas"
 ],
 "Not a valid value for Host": [
  null,
  "No es un valor valido para el host"
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
  "Sistema Operativo"
 ],
 "Options": [
  null,
  "Opciones"
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
  "Partición"
 ],
 "Password": [
  null,
  "Contraseña"
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
  "Por favor cree otro nombre de espacio para $0 \"$1\""
 ],
 "Please provide a GlusterFS volume name": [
  null,
  "Por favor provea un nombre de volumen GlusterFS"
 ],
 "Please provide a username": [
  null,
  "Provea un nombre de usuario"
 ],
 "Please provide a valid NFS server": [
  null,
  "Por favor provea un servidos NFS valido"
 ],
 "Please provide a valid address": [
  null,
  "Provea una dirección valida"
 ],
 "Please provide a valid filesystem type": [
  null,
  "Por favor provea un tipo de sistema de archivos valido"
 ],
 "Please provide a valid interface": [
  null,
  "Por favor provea una interfaz valida"
 ],
 "Please provide a valid logical unit number": [
  null,
  "Por favor provea un número valido de unidad lógica"
 ],
 "Please provide a valid name": [
  null,
  "Por favor provea un nombre valido"
 ],
 "Please provide a valid namespace.": [
  null,
  "Por favor provea un nombre de espacio valido"
 ],
 "Please provide a valid path": [
  null,
  "Por favor provea una ruta valida"
 ],
 "Please provide a valid qualified name": [
  null,
  "Por favor provea un nombre cualifica valido"
 ],
 "Please provide a valid storage capacity.": [
  null,
  "Por favor provea una capacidad de almacenamiento valida."
 ],
 "Please provide a valid target": [
  null,
  "Por favor provea un objetivo valido"
 ],
 "Please select a valid access mode": [
  null,
  "Por favor seleccionar un modo de acceso valido"
 ],
 "Please select a valid endpoint": [
  null,
  ""
 ],
 "Please select a valid policy option.": [
  null,
  "Por favor provea una opción de política valida."
 ],
 "Please type an address": [
  null,
  "Por favor escriba una dirección"
 ],
 "Pod": [
  null,
  "Ranura"
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
  "Ranuras"
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
  "Puertos"
 ],
 "Private: Allow only specific users or groups to pull images": [
  null,
  ""
 ],
 "Project": [
  null,
  "Proyecto"
 ],
 "Project Members": [
  null,
  "Miembros del Proyecto"
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
  "Proyecto:"
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
  "Halar una imagen:"
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
  "Empujar una imagen:"
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
  "Lectura y escritura para un solo nodo."
 ],
 "Read and write from multiple nodes": [
  null,
  "Lectura y escritura para nodos multiples"
 ],
 "Read only from multiple nodes": [
  null,
  "Sólo lectura para nodos múltiples"
 ],
 "Ready": [
  null,
  "Listo"
 ],
 "Reason": [
  null,
  "Razón"
 ],
 "Reclaim Policy": [
  null,
  ""
 ],
 "Reconnect": [
  null,
  "Reconectarse"
 ],
 "Recycle": [
  null,
  "Reciclar"
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
  "Eliminar"
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
  "Remover etiqueta de imagen"
 ],
 "Remove membership": [
  null,
  ""
 ],
 "Replicas": [
  null,
  "Réplicas"
 ],
 "Replication Controller": [
  null,
  "Contolador de replicación"
 ],
 "Replication Controllers": [
  null,
  "Controladores de replicación"
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
  "Conteo de Reinicios"
 ],
 "Restart Policy": [
  null,
  ""
 ],
 "Retain": [
  null,
  "Retener"
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
  "Roles"
 ],
 "Route": [
  null,
  ""
 ],
 "Routes": [
  null,
  "Rutas"
 ],
 "Scheduled Pods": [
  null,
  ""
 ],
 "Scheduling Disabled": [
  null,
  "Programación deshabilitada "
 ],
 "Secret": [
  null,
  "Secreto"
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
  "Seleccione un archivo Manifiesto..."
 ],
 "Select an object to see more details.": [
  null,
  "Selecciona un objeto para ver mas detalles"
 ],
 "Server": [
  null,
  ""
 ],
 "Service": [
  null,
  "Servicio"
 ],
 "Service Account": [
  null,
  ""
 ],
 "Services": [
  null,
  "Servicios"
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
  "Mostrar todas las imágenes"
 ],
 "Since": [
  null,
  "Desde"
 ],
 "Size": [
  null,
  "Tamaño"
 ],
 "Skip Certificate Verification": [
  null,
  ""
 ],
 "Sorry, I don't know how to modify this volume": [
  null,
  "Lo siento, no se como modificar este volumen"
 ],
 "State": [
  null,
  "Estado"
 ],
 "Status": [
  null,
  "Estado"
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
  "Terminación TLS"
 ],
 "Tags": [
  null,
  "Etiquetas"
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
  "La dirección contiene caracteres inválidos"
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
  "El número maximo de replicas es 128"
 ],
 "The name contains invalid characters": [
  null,
  "El nombre contiene caracteres invalidos"
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
  "El archivo seleccionado no es un archivo de manifiesto de aplicación kubernetes valido"
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
  "Disparadores"
 ],
 "Troubleshoot": [
  null,
  "Soporte"
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
  ""
 ],
 "Unable to decode Kubernetes application manifest.": [
  null,
  "No es posible decodificar el manifiesto de Kubernetes."
 ],
 "Unable to read the Kubernetes application manifest. Code $0.": [
  null,
  "No es posible leer el manifiesto de la aplicación Kubernetes. Código $0."
 ],
 "Unavailable": [
  null,
  "No Disponible"
 ],
 "Unknown": [
  null,
  "Desconocido"
 ],
 "Updating $0...": [
  null,
  "Actualizando $0..."
 ],
 "Used": [
  null,
  "Usado"
 ],
 "User": [
  null,
  "Usuario"
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
  "Volúmenes"
 ],
 "Warning:": [
  null,
  ""
 ],
 "Welcome to the Image Registry": [
  null,
  "Bienvenidos al Registro de Imagen"
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
  "Tu puedes desplegar una aplicación a tu cluster"
 ],
 "Your login credentials do not give you access to use the docker registry from the command line.": [
  null,
  "Tus credenciales de acceso no te dan acceso a usar el registro docker desde la línea de comandos."
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
  "ninguno"
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
