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
  " 1\"¿Quiere eliminar los nodos siguientes?"
 ],
 " or drag & drop.": [
  null,
  " o arrastre & suelte."
 ],
 "$0% Free": [
  "$0% Free",
  "$0 % disponible",
  "$0 % disponible"
 ],
 "$0% Used": [
  "$0% Used",
  "$0 % en uso",
  "$0 % en uso"
 ],
 "AWS Elastic Block Store": [
  null,
  "AWS Almacén Elástico de Bloque"
 ],
 "Access Modes": [
  null,
  "Modos de acceso"
 ],
 "Access Policy": [
  null,
  "Normativa de acceso"
 ],
 "Actual": [
  null,
  "Real"
 ],
 "Add": [
  null,
  "Añadir"
 ],
 "Add Cluster Node": [
  null,
  "Añadir nodo de agrupación"
 ],
 "Add Group": [
  null,
  "Añadir grupo"
 ],
 "Add Kubernetes Node": [
  null,
  "Añadir nodo de Kubernetes"
 ],
 "Add Member": [
  null,
  "Añadir miembro"
 ],
 "Add Membership": [
  null,
  "Añadir afiliación"
 ],
 "Add New Cluster": [
  null,
  "Añadir agrupación nueva"
 ],
 "Add New User": [
  null,
  "Añadir usuario nuevo"
 ],
 "Add Role": [
  null,
  "Añadir rol"
 ],
 "Add User": [
  null,
  "Añadir usuario"
 ],
 "Add membership": [
  null,
  "Añadir afiliación"
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
  "Ajustar Volumen Persistente '{{ item.metadata.name }}'"
 ],
 "Adjust Replication Controller {{ item.metadata.name }}": [
  null,
  "Ajustar el Controlador de Replicación {{ item.metadata.name }}"
 ],
 "Adjust Route": [
  null,
  "Ajustar Ruta"
 ],
 "Adjust Service": [
  null,
  "Ajustar servicio"
 ],
 "Admin": [
  null,
  "Administración"
 ],
 "All Projects": [
  null,
  "Todos los Proyectos"
 ],
 "All Types": [
  null,
  "Todos los Tipos"
 ],
 "All healthy": [
  null,
  "Todo saludable"
 ],
 "All images": [
  null,
  "Todas las imágenes"
 ],
 "All in use": [
  null,
  "Todo en uso"
 ],
 "All running": [
  null,
  "Todo corriendo"
 ],
 "Annotations": [
  null,
  "Anotaciones"
 ],
 "Anonymous: Allow all unauthenticated users to pull images": [
  null,
  "Anónimo: Permite a todos los usuarios no autentificados tirar de las imágenes"
 ],
 "Authentication": [
  null,
  "Autenticación"
 ],
 "Azure": [
  null,
  "Azure"
 ],
 "Boot ID": [
  null,
  "ID de Arranque"
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
  "Uso de CPU: $0%"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Capacity": [
  null,
  "Capacidad"
 ],
 "Ceph Filesystem Mount": [
  null,
  "Montaje del Sistema de Archivos Ceph"
 ],
 "Ceph Monitors": [
  null,
  "Monitores Ceph"
 ],
 "Change": [
  null,
  "Cambiar"
 ],
 "Change User": [
  null,
  "Cambiar Usuario"
 ],
 "Change image stream": [
  null,
  "Cambiar flujo de imagen"
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
  "Reclamación"
 ],
 "Claim Name": [
  null,
  "Nombre de Reclamación"
 ],
 "Client Certificate": [
  null,
  "Certificado de Cliente"
 ],
 "Cluster": [
  null,
  "Cluster"
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
  "Error de Conexión"
 ],
 "Connection Error: $0": [
  null,
  "Error de conexión: $0"
 ],
 "Connection Settings": [
  null,
  "Ajustes de Conexión"
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
  "Contenedor de Versión en Tiempo de Ejecución"
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
 "Count:": [
  null,
  "Conteo:"
 ],
 "Create": [
  null,
  "Crear"
 ],
 "Create Virtual Machine": [
  null,
  "Crear Máquina Virtual"
 ],
 "Create empty image stream": [
  null,
  "Crea un flujo de imágenes vacío"
 ],
 "Create image stream": [
  null,
  "Crear un flujo de imagen"
 ],
 "Created": [
  null,
  "Creado"
 ],
 "DNS Policy": [
  null,
  "Política DNS"
 ],
 "Delete": [
  null,
  "Eliminar"
 ],
 "Delete Node": [
  null,
  "Borrar Nodo"
 ],
 "Delete Persistent Volume": [
  null,
  "Borrar Volumen Persitente"
 ],
 "Delete Persistent Volume Claim": [
  null,
  "Eliminar la Reclamación de Volumen Persistente"
 ],
 "Delete Project": [
  null,
  "Borrar Proyecto"
 ],
 "Delete Selected": [
  null,
  "Borrar Seleccionado"
 ],
 "Delete image stream": [
  null,
  "Eliminar el flujo de imágenes"
 ],
 "Delete {{ item.kind }}": [
  null,
  "Eliminar {{ item.kind }}"
 ],
 "Deleting a Pod will kill all associated containers. Pods may be automatically created again in some cases.": [
  null,
  "Eliminando un Pod matará todos los contenedores asociados. Los Pods pueden ser creados automáticamente otra vez en algunos casos."
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
 "Device": [
  null,
  "Dispositivo"
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
 "Disks": [
  null,
  "Discos"
 ],
 "Display name": [
  null,
  "Visualizar nombre"
 ],
 "Do you want to add the role '{{ fields.displayRole }}'?": [
  null,
  "¿Desea añadir el rol? '{{ fields.displayRole }}'?"
 ],
 "Do you want to delete the '{{stream.metadata.namespace}}/{{stream.metadata.name}}' image stream?": [
  null,
  "¿Desea eliminar el flujo de imagen '{{stream.metadata.namespace}}/{{stream.metadata.name}}' ?"
 ],
 "Do you want to delete the Persistent Volume '{{item.metadata.name}}'?": [
  null,
  "¿Desea eliminar el Volumen Persitente '{{item.metadata.name}}'?"
 ],
 "Do you want to delete the Persistent Volume Claim '{{item.metadata.name}}'?": [
  null,
  "¿Desea eliminar la Reclamación de Volumen Persistente '{{item.metadata.name}}'?"
 ],
 "Do you want to delete the {{ item.kind }} '{{item.metadata.name}}'?": [
  null,
  "¿Desea eliminar {{ item.kind }} '{{item.metadata.name}}'?"
 ],
 "Do you want to delete this Node?": [
  null,
  "¿Desea eliminar este Nodo?"
 ],
 "Do you want to remove the image tagged as '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?": [
  null,
  "¿Desea borrar la imagen etiquetada como '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?"
 ],
 "Do you want to remove the role '{{ fields.displayRole }}' from member {{ fields.member.metadata.name }}?": [
  null,
  "¿Desea borrar el rol '{{ fields.displayRole }}' del miembro {{ fields.member.metadata.name }}?"
 ],
 "Don't pull images automatically": [
  null,
  "No tire de las imágenes automáticamente"
 ],
 "Driver": [
  null,
  "Driver"
 ],
 "Drop file here to upload.": [
  null,
  "Soltar el archivo aquí para subirlo."
 ],
 "Empty Directory": [
  null,
  "Directorio vació"
 ],
 "Endpoint": [
  null,
  "Punto final"
 ],
 "Endpoint Name": [
  null,
  "Nombre del Punto final"
 ],
 "Endpoints": [
  null,
  "Puntos finales"
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
  "Canal de Fibra"
 ],
 "Filesystem Type": [
  null,
  "Tipo de Sistema de archivos"
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
  "Nombre del Conjunto de Datos Flocker"
 ],
 "GCE Persistent Disk": [
  null,
  "Disco GCE Persistente"
 ],
 "GiB": [
  null,
  "GiB"
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
  "Obtener empuje adicional o administrar el acceso a los miembros específicos de abajo."
 ],
 "Group Members": [
  null,
  "Miembros del Grupo"
 ],
 "Group or Project": [
  null,
  "Grupo o Proyecto"
 ],
 "Groups": [
  null,
  "Grupos"
 ],
 "Host": [
  null,
  "Anfitrión"
 ],
 "Host Path": [
  null,
  "Trayecto del anfitrión"
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
  "Identidades"
 ],
 "Identity": [
  null,
  "Identidad"
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
  "Nombre de Imagen"
 ],
 "Image Registry": [
  null,
  "Registro de Imagen"
 ],
 "Image Stream": [
  null,
  "Corriente de Imagen"
 ],
 "Image commands": [
  null,
  "Órdenes de imagen"
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
  "Imágenes utilizadas recientemente"
 ],
 "In order to begin pushing images to the registry, use the commands below.": [
  null,
  "Para comenzar a insertar imágenes en el registro, utilice las órdenes siguientes."
 ],
 "In order to begin pushing images to the registry, you need to create a project.": [
  null,
  "Con el objetivo de llevar imágenes al registro, usted necesita crear un proyecto."
 ],
 "Interface": [
  null,
  "Interfaz"
 ],
 "Kernel Version": [
  null,
  "Versión del núcleo"
 ],
 "Key Ring Path": [
  null,
  "Trayecto del llavero"
 ],
 "Kubelet Version": [
  null,
  "Versión de Kubelet"
 ],
 "Kubernetes Cluster": [
  null,
  "Cluster de Kubernetes"
 ],
 "Labels": [
  null,
  "Viñetas"
 ],
 "Labels:": [
  null,
  "Etiquetas:"
 ],
 "Last Heartbeat": [
  null,
  "Último Heartbeat"
 ],
 "Last Status Change": [
  null,
  "Último Cambio de Estado"
 ],
 "Latest Version": [
  null,
  "Última Versión"
 ],
 "Log into OpenShift command line tools:": [
  null,
  "Ingrese a las herramientas de consola de OpenShift:"
 ],
 "Log into the registry:": [
  null,
  "Iniciar sesión en el registro:"
 ],
 "Logical Unit Number": [
  null,
  "Número de unidad lógica"
 ],
 "Login commands": [
  null,
  "Órdenes de ingreso"
 ],
 "Logs": [
  null,
  "Registros"
 ],
 "Machine ID": [
  null,
  "Id. de máquina"
 ],
 "Manifest": [
  null,
  "Manifiesto"
 ],
 "Medium": [
  null,
  "Medio"
 ],
 "Member of": [
  null,
  "Miembro de"
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
 "Memory:": [
  null,
  "Memoria:"
 ],
 "Message": [
  null,
  "Mensaje"
 ],
 "Metadata": [
  null,
  "Metadatos"
 ],
 "Modify": [
  null,
  "Modificar"
 ],
 "Monitors": [
  null,
  "Monitores"
 ],
 "Mount Location": [
  null,
  "Ubicación de montaje"
 ],
 "N/A": [
  null,
  "N/A"
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
  "Grupo nuevo"
 ],
 "New Project": [
  null,
  "Proyecto nuevo"
 ],
 "New image stream": [
  null,
  "Flujo de imágenes nuevo"
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
  "Ningún Pods está usando este reclamo"
 ],
 "No Volume Bound": [
  null,
  "No hay ningún vínculo de volumen"
 ],
 "No disks defined for this VM": [
  null,
  "No se han definido discos para esta VM"
 ],
 "No groups are present.": [
  null,
  "No hay ningún grupo presente."
 ],
 "No images pushed": [
  null,
  "Sin imágenes empujadas"
 ],
 "No metadata file was selected. Please select a Kubernetes metadata file.": [
  null,
  "No se seleccionó un archivo metadata. Por favor seleccione un archivo metadata Kebernetes."
 ],
 "No nodes in cluster": [
  null,
  "No hay  nodos en el cluster"
 ],
 "No pods deployed": [
  null,
  "No se han desplegado pods"
 ],
 "No pods replicated": [
  null,
  "No se han replicado pods"
 ],
 "No pods scheduled": [
  null,
  "Sin pods planificados"
 ],
 "No pods selected": [
  null,
  "Sin pods seleccionados"
 ],
 "No projects are present.": [
  null,
  "No hay proyectos presentes."
 ],
 "No users are present.": [
  null,
  "No hay usuarios presentes."
 ],
 "No virtual machines": [
  null,
  "Sin máquinas virtuales"
 ],
 "No volumes are present.": [
  null,
  "No hay volúmenes presentes."
 ],
 "No volumes in use": [
  null,
  "No hay volúmenes en uso"
 ],
 "Node": [
  null,
  "Nodo"
 ],
 "Node:": [
  null,
  "Nodo:"
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
 "Not Available": [
  null,
  "No Disponible"
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
  "No distribuido"
 ],
 "OS": [
  null,
  "SO"
 ],
 "OS Versions": [
  null,
  "Versiones de SO"
 ],
 "Ok": [
  null,
  "Aceptar"
 ],
 "Only files of size $0 MiB and less are supported": [
  null,
  "Solo se soportan archivos de un tamaño de $0 MiB y menos"
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
  "Visión conjunta"
 ],
 "PD Name": [
  null,
  "Nombre de PD"
 ],
 "Partition": [
  null,
  "Partición"
 ],
 "Password": [
  null,
  "Contraseña"
 ],
 "Paste JSON below, ": [
  null,
  "Pegar JSON abajo,"
 ],
 "Path": [
  null,
  "Trayecto"
 ],
 "Pending Volume Claims": [
  null,
  "Reclamaciones de Volumen Pendientes"
 ],
 "Persistent Volumes": [
  null,
  "Volúmenes persistentes"
 ],
 "Phase": [
  null,
  "Fase"
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
  "Proporcione un trayecto válido"
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
  "Por favor seleccione un punto final válido"
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
  "Dirección del Pod"
 ],
 "Pod Endpoints": [
  null,
  "Puntos Finales del Pod"
 ],
 "Pod Replicated": [
  null,
  "Pod Replicado"
 ],
 "Pod Selector": [
  null,
  "Selector de Pod"
 ],
 "Pod:": [
  null,
  "Pod:"
 ],
 "Pods": [
  null,
  "Ranuras"
 ],
 "Pods contain one or more containers that run together on a node, containing your application code.": [
  null,
  "Pods contienen uno o mas contenedores que corren juntos sobre un nodo, conteniendo su código de aplicación."
 ],
 "Pool Name": [
  null,
  "Nombre del grupo"
 ],
 "Populate": [
  null,
  "Rellenar"
 ],
 "Ports": [
  null,
  "Puertos"
 ],
 "Private: Allow only specific users or groups to pull images": [
  null,
  "Privado: Permite sólo a usuarios o grupos específicos tirar imágenes"
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
  "Proyecto de política de acceso que permite a usuarios anónimos quitar imágenes."
 ],
 "Project access policy allows any authenticated user to pull images.": [
  null,
  "Proyecto de política de acceso permite a cualquier usuario autenticado quitar imágenes."
 ],
 "Project access policy only allows specific members to access images.": [
  null,
  "Proyecto de política de acceso permite sólo a miembros específicos acceder a imágenes."
 ],
 "Project:": [
  null,
  "Proyecto:"
 ],
 "Projects": [
  null,
  "Proyectos"
 ],
 "Proxy Version": [
  null,
  "Versión de Proxy"
 ],
 "Pull an image:": [
  null,
  "Halar una imagen:"
 ],
 "Pull from": [
  null,
  "Extraer desde"
 ],
 "Pull specific tags from another image repository": [
  null,
  "Extraer etiquetas específicas desde otro repositorio de imágenes"
 ],
 "Push an image:": [
  null,
  "Empujar una imagen:"
 ],
 "Qualified Name": [
  null,
  "Nombre Cualificado"
 ],
 "Rados Block Device": [
  null,
  "Dispositivo de Bloque Rados"
 ],
 "Read Only": [
  null,
  "Solo lectura"
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
 "Readonly": [
  null,
  "Sólo lectura"
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
  "Normativa de reclamación"
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
  "Registrar"
 ],
 "Register New Volume": [
  null,
  "Registrar volumen nuevo"
 ],
 "Register Persistent Volume": [
  null,
  "Registrar volumen persistente"
 ],
 "Remote registry is insecure": [
  null,
  "El registro remoto es inseguro"
 ],
 "Remove": [
  null,
  "Eliminar"
 ],
 "Remove Group": [
  null,
  "Quitar Grupo"
 ],
 "Remove Member": [
  null,
  "Quitar miembro"
 ],
 "Remove Role": [
  null,
  "Quitar rol"
 ],
 "Remove User": [
  null,
  "Quitar usuario"
 ],
 "Remove image tag": [
  null,
  "Remover etiqueta de imagen"
 ],
 "Remove membership": [
  null,
  "Quitar afiliación"
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
  "Los controladores de replicación crean dinámicamente instancias de pods a partir de plantillas y eliminan pods cuando es necesario."
 ],
 "Repository URL": [
  null,
  "URL del repositorio"
 ],
 "Requested": [
  null,
  "Solicitado"
 ],
 "Requests": [
  null,
  "Solicitudes"
 ],
 "Requires Authentication": [
  null,
  "Necesita autenticación"
 ],
 "Resolve above errors to continue": [
  null,
  "Resuelva los errores de arriba para continuar"
 ],
 "Restart Count": [
  null,
  "Conteo de Reinicios"
 ],
 "Restart Policy": [
  null,
  "Normativa de reinicios"
 ],
 "Retain": [
  null,
  "Retener"
 ],
 "Revision": [
  null,
  "Revisión"
 ],
 "Role": [
  null,
  "Rol"
 ],
 "Roles": [
  null,
  "Roles"
 ],
 "Route": [
  null,
  "Ruta"
 ],
 "Routes": [
  null,
  "Rutas"
 ],
 "Scheduled Pods": [
  null,
  "Pods Programados"
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
  "Fichero Secreto"
 ],
 "Secret Name": [
  null,
  "Nombre Secreto"
 ],
 "Secret Volume": [
  null,
  "Volumen Secreto"
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
  "Servidor"
 ],
 "Service": [
  null,
  "Servicio"
 ],
 "Service Account": [
  null,
  "Cuenta de servicio"
 ],
 "Services": [
  null,
  "Servicios"
 ],
 "Services group pods and provide a common DNS name and an optional, load-balanced IP address to access them.": [
  null,
  "Agrupan pods de servicios y suministran un nombre DNS común y una dirección IP opcional con balance de carga para acceder a ellos"
 ],
 "Session": [
  null,
  "Sesión"
 ],
 "Session Affinity": [
  null,
  "Afinidad de Sesión"
 ],
 "Share Name": [
  null,
  "Nombre Compartido"
 ],
 "Shared: Allow any authenticated user to pull images": [
  null,
  "Compartido: permitir a cualquier usuario autenticado extraer imágenes"
 ],
 "Shell": [
  null,
  "Shell"
 ],
 "Show all Containers": [
  null,
  "Mostrar todos los contenedores"
 ],
 "Show all Deployment Configs": [
  null,
  "Mostrar todas las configuraciones de distribución"
 ],
 "Show all Nodes": [
  null,
  "Mostrar todos los nodos"
 ],
 "Show all Persistent Volumes": [
  null,
  "Mostrar todos los volúmenes persistentes"
 ],
 "Show all Pod Containers": [
  null,
  "Mostrar todos los Pod Contenedores"
 ],
 "Show all Pods": [
  null,
  "Mostrar todos los Pods"
 ],
 "Show all Projects": [
  null,
  "Mostrar todos los proyectos"
 ],
 "Show all Replication Controllers": [
  null,
  "Mostrar todos los Controladores Replicantes"
 ],
 "Show all Routes": [
  null,
  "Mostrar todas las rutas"
 ],
 "Show all Services": [
  null,
  "Mostrar todos los servicios"
 ],
 "Show all image streams": [
  null,
  "Mostrar toda la secuencia de imagen"
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
  "Saltar la Verificación de Certificado"
 ],
 "Sorry, I don't know how to modify this volume": [
  null,
  "Lo siento, no se como modificar este volumen"
 ],
 "Source": [
  null,
  "Fuente"
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
  "Estrategia"
 ],
 "Sync all tags from a remote image repository": [
  null,
  "Sincronizar todas las etiquetas desde un repositorio de imagen remoto"
 ],
 "System": [
  null,
  "Sistema"
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
  "Objetivo"
 ],
 "Target Portal": [
  null,
  "Portal Objetivo"
 ],
 "Target World Wide Names": [
  null,
  "Nombres Objetivo en todo el Mundo"
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
  "El contenedor '{{ target }}' no existe."
 ],
 "The deployment config '{{ target }}' does not exist.": [
  null,
  "La configuración de despliegue '{{ target }}' no existe."
 ],
 "The group '{{ groupName }}' does not exist.": [
  null,
  "El grupo '{{ groupName }}' no existe."
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
  "El nodo '{{ target }}' no existe."
 ],
 "The node doesn't have enough disk space": [
  null,
  "El nodo no tiene bastante espacio de disco"
 ],
 "The node doesn't have enough free memory": [
  null,
  "El nodo no tiene bastante memoria libre"
 ],
 "The persistent volume '{{ target }}' does not exist.": [
  null,
  "El volumen presistente '{{ target }}' no existe."
 ],
 "The pod '{{ target }}' does not exist.": [
  null,
  "El pod '{{ target }}' no existe."
 ],
 "The project '{{ projName }}' does not exist.": [
  null,
  "El proyecto '{{ projName }}' no existe."
 ],
 "The replication controller '{{ target }}' does not exist.": [
  null,
  "El controlador de replica '{{ target }}' no existe."
 ],
 "The route '{{ target }}' does not exist.": [
  null,
  "La ruta '{{ target }}' no existe."
 ],
 "The selected file is not a valid Kubernetes application manifest.": [
  null,
  "El archivo seleccionado no es un archivo de manifiesto de aplicación kubernetes valido"
 ],
 "The server uses a certificate signed by an unknown authority.": [
  null,
  "El servidor usa un certificado firmado por una autoridad desconocida."
 ],
 "The service '{{ target }}' does not exist.": [
  null,
  "El servicio '{{ target }}' no existe."
 ],
 "The user '{{ userName }}' does not exist.": [
  null,
  "El usuario '{{ userName }}' no existe."
 ],
 "This claim is in use. Deleting it may cause issues with the following pod:": [
  null,
  "Esta reclamo está en uso. Borrarlo puede causar problemas con los siguientes pod:"
 ],
 "This option is for single node testing only – local storage will not work in a multi-node cluster": [
  null,
  "Esta opción es para probar un único nodo solo – el almacenamiento local no trabajará en un clúster multi nodo"
 ],
 "This volume has been claimed by {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Deleting it will break that claim and may cause issues with any pods depending on it.": [
  null,
  "Este volumen ha sido reclamado por {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Eliminarlo romperá el reclamo y puede causar problemas en cualquier pod que dependa de él."
 ],
 "This volume has not been claimed": [
  null,
  "Este volumen ni ha sido reclamado"
 ],
 "Token": [
  null,
  "Ficha"
 ],
 "Topology": [
  null,
  "Topología"
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
  "Confía en este certificado para esta conexión"
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "Type:": [
  null,
  "Teclear:"
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
  "Usuario o Grupo"
 ],
 "Username": [
  null,
  "Nombre de Usuario"
 ],
 "Users": [
  null,
  "Usuarios"
 ],
 "VM DELETE failed.": [
  null,
  "VM DELETE falló."
 ],
 "VM definition is not a valid JSON.": [
  null,
  "La definición VM no es un JSON válido."
 ],
 "VM definition is required.": [
  null,
  "Se requiere definición VM."
 ],
 "VM definition must be an object.": [
  null,
  "La definición VM debe ser un objeto."
 ],
 "Virtual Machines": [
  null,
  "Máquinas Virtuales"
 ],
 "Volume": [
  null,
  "Volumen"
 ],
 "Volume ID": [
  null,
  "ID de Volumen"
 ],
 "Volume Name": [
  null,
  "Nombre de Volumen"
 ],
 "Volume Type": [
  null,
  "Tipo de Volumen"
 ],
 "Volumes": [
  null,
  "Volúmenes"
 ],
 "Warning:": [
  null,
  "Precaución:"
 ],
 "Welcome to the Image Registry": [
  null,
  "Bienvenidos al Registro de Imagen"
 ],
 "When": [
  null,
  "Cuando"
 ],
 "Yes": [
  null,
  "Sí"
 ],
 "You can bypass the certificate check, but any data you send to the server could be intercepted by others.": [
  null,
  "Usted puede evitar la comprobación del certificado, pero cualquier datos que envíe al servidor podría ser interceptado por otros."
 ],
 "You can deploy an application to your cluster.": [
  null,
  "Tu puedes desplegar una aplicación a tu cluster"
 ],
 "Your login credentials do not give you access to use the docker registry from the command line.": [
  null,
  "Sus credenciales de acceso no le conceden acceso para utilizar el registro de Docker a partir de la consola."
 ],
 "bridge": [
  null,
  "puente"
 ],
 "cdrom": [
  null,
  "cdrom"
 ],
 "crashed": [
  null,
  "estrellado"
 ],
 "custom": [
  null,
  "personal"
 ],
 "direct": [
  null,
  "directo"
 ],
 "disabled": [
  null,
  "desactivado"
 ],
 "disk": [
  null,
  "disco"
 ],
 "down": [
  null,
  "abajo"
 ],
 "dying": [
  null,
  "agonizante"
 ],
 "eg: my-image-stream": [
  null,
  "eg: mi secuencia de imagen"
 ],
 "enabled": [
  null,
  "activado"
 ],
 "ethernet": [
  null,
  "ethernet"
 ],
 "host": [
  null,
  "huésped"
 ],
 "hostdev": [
  null,
  "hostdev"
 ],
 "iSCSI": [
  null,
  "iSCSI"
 ],
 "idle": [
  null,
  "inactivo"
 ],
 "mcast": [
  null,
  "mcast"
 ],
 "n/a": [
  null,
  "n/a"
 ],
 "network": [
  null,
  "red"
 ],
 "no": [
  null,
  "no"
 ],
 "none": [
  null,
  "ninguno"
 ],
 "paused": [
  null,
  "en pausa"
 ],
 "pending volume claims": [
  null,
  "pendiente de reclamación de volumen"
 ],
 "running": [
  null,
  "en ejecución"
 ],
 "server": [
  null,
  "servidor"
 ],
 "show less": [
  null,
  "mostrar menos"
 ],
 "show more": [
  null,
  "mostrar más"
 ],
 "shut off": [
  null,
  "apagar"
 ],
 "shutdown": [
  null,
  "apagar"
 ],
 "suspended (PM)": [
  null,
  "suspendido (PM)"
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
  "sí"
 ]
}));
