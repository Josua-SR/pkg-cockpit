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
  "$0% Libero",
  "$0% Libero"
 ],
 "$0% Used": [
  "$0% Used",
  "$0% Usato",
  "$0% Usato"
 ],
 "AWS Elastic Block Store": [
  null,
  "AWS Elastic Block Store"
 ],
 "Access Modes": [
  null,
  "Modalità di accesso"
 ],
 "Access Policy": [
  null,
  "Politica di accesso"
 ],
 "Actual": [
  null,
  "Attuale"
 ],
 "Add": [
  null,
  "Aggiungi"
 ],
 "Add Cluster Node": [
  null,
  "Aggiungi nodo cluster"
 ],
 "Add Group": [
  null,
  "Aggiungi gruppo"
 ],
 "Add Kubernetes Node": [
  null,
  "Aggiungi Nodo Kubernetes"
 ],
 "Add Member": [
  null,
  "Aggiungi membro"
 ],
 "Add Membership": [
  null,
  "Aggiungete l'iscrizione"
 ],
 "Add New Cluster": [
  null,
  "Aggiungere un nuovo cluster"
 ],
 "Add New User": [
  null,
  "Aggiungi nuovo utente"
 ],
 "Add Role": [
  null,
  "Aggiungi ruolo"
 ],
 "Add User": [
  null,
  "Aggiungere Utente"
 ],
 "Add membership": [
  null,
  "Aggiungete l'iscrizione"
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
  "Regola"
 ],
 "Adjust Persistent Volume '{{ item.metadata.name }}'": [
  null,
  "Regolare il volume persistente ' ' ' '"
 ],
 "Adjust Replication Controller {{ item.metadata.name }}": [
  null,
  "Regolare il controllore di replica {{ item.metadata.name }}"
 ],
 "Adjust Route": [
  null,
  "Regolare il percorso"
 ],
 "Adjust Service": [
  null,
  "Regolare il servizio"
 ],
 "Admin": [
  null,
  "Admin"
 ],
 "All Projects": [
  null,
  "Tutti i progetti"
 ],
 "All Types": [
  null,
  "Tutti i tipi"
 ],
 "All healthy": [
  null,
  "Tutti sani"
 ],
 "All images": [
  null,
  "Tutte le immagini"
 ],
 "All in use": [
  null,
  "Tutto in uso"
 ],
 "All running": [
  null,
  "Tutti in esecuzione"
 ],
 "Annotations": [
  null,
  "Annotazioni"
 ],
 "Anonymous: Allow all unauthenticated users to pull images": [
  null,
  "Anonimo: consente a tutti gli utenti non autenticati di scaricare immagini"
 ],
 "Authentication": [
  null,
  "Autenticazione"
 ],
 "Azure": [
  null,
  "Azure"
 ],
 "Boot ID": [
  null,
  "ID boot"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU Utilization: $0%": [
  null,
  "Utilizzo CPU: $0%"
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
  "Montaggio su file system Ceph"
 ],
 "Ceph Monitors": [
  null,
  "Monitor Ceph"
 ],
 "Change": [
  null,
  "Cambia"
 ],
 "Change User": [
  null,
  "Cambia utente"
 ],
 "Change image stream": [
  null,
  "Cambia flusso di immagini"
 ],
 "Change project": [
  null,
  "Cambia progetto"
 ],
 "Cinder": [
  null,
  "Cenerentola"
 ],
 "Claim": [
  null,
  "Reclama"
 ],
 "Claim Name": [
  null,
  "Nome del reclamo"
 ],
 "Client Certificate": [
  null,
  "Certificato del client"
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
  "Configurare la rete in flanella"
 ],
 "Configure Kubelet and Proxy": [
  null,
  "Configura Kubelet e Proxy"
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
  "Errore di connessione"
 ],
 "Connection Error: $0": [
  null,
  "Errore di connessione: $0"
 ],
 "Connection Settings": [
  null,
  "Impostazioni di connessione"
 ],
 "Container": [
  null,
  "Container"
 ],
 "Container ID": [
  null,
  "ID container"
 ],
 "Container Runtime Version": [
  null,
  "Versione Runtime del contenitore"
 ],
 "Containers": [
  null,
  "Container"
 ],
 "Could not list services": [
  null,
  "Impossibile elencare i servizi"
 ],
 "Couldn't connect to server": [
  null,
  "Impossibile connettersi al server"
 ],
 "Couldn't find running API server": [
  null,
  "Non sono riuscito a trovare un server API in esecuzione"
 ],
 "Create": [
  null,
  "Crea"
 ],
 "Create empty image stream": [
  null,
  "Creare un flusso di immagini vuoto"
 ],
 "Create image stream": [
  null,
  "Crea flusso di immagini"
 ],
 "Created": [
  null,
  "Creato"
 ],
 "DNS Policy": [
  null,
  "Politica DNS"
 ],
 "Delete": [
  null,
  "Cancella"
 ],
 "Delete Node": [
  null,
  "Elimina nodo"
 ],
 "Delete Persistent Volume": [
  null,
  "Cancellare il volume persistente"
 ],
 "Delete Persistent Volume Claim": [
  null,
  "Eliminazione dell'indicazione del volume persistente"
 ],
 "Delete Project": [
  null,
  "Elimina progetto"
 ],
 "Delete Selected": [
  null,
  "Cancella i selezionati"
 ],
 "Delete image stream": [
  null,
  "Elimina flusso di immagini"
 ],
 "Delete {{ item.kind }}": [
  null,
  "Eliminazione {{ item.kind }}"
 ],
 "Deleting a Pod will kill all associated containers. Pods may be automatically created again in some cases.": [
  null,
  "L'eliminazione di un baccello uccide tutti i contenitori associati. In alcuni casi i baccelli possono essere creati automaticamente di nuovo."
 ],
 "Deploy": [
  null,
  "Dispiegare"
 ],
 "Deploy Application": [
  null,
  "Distribuzione dell'applicazione"
 ],
 "Deployment Causes": [
  null,
  "Cause di distribuzione"
 ],
 "Deployment Config": [
  null,
  "Distribuzione Config"
 ],
 "Deployment Configs": [
  null,
  "Configurazioni di distribuzione"
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
  "Utilizzo del disco: $0%"
 ],
 "Display name": [
  null,
  "Nome visualizzato"
 ],
 "Do you want to add the role '{{ fields.displayRole }}'?": [
  null,
  "Vuoi aggiungere il ruolo '{{ fields.displayRole }}' ?"
 ],
 "Do you want to delete the '{{stream.metadata.namespace}}/{{stream.metadata.name}}' image stream?": [
  null,
  "Vuoi cancellare il flusso di{{stream.metadata.namespace}}{{stream.metadata.name}}immagini ' / ' '?"
 ],
 "Do you want to delete the Persistent Volume '{{item.metadata.name}}'?": [
  null,
  "Si desidera eliminare il volume persistente ' ' ' '?"
 ],
 "Do you want to delete the Persistent Volume Claim '{{item.metadata.name}}'?": [
  null,
  "Si desidera eliminare l'indicazione del volume persistente ' ' ' '?"
 ],
 "Do you want to delete the {{ item.kind }} '{{item.metadata.name}}'?": [
  null,
  "Vuoi cancellare il {{ item.kind }}' ' ' ' '?"
 ],
 "Do you want to delete this Node?": [
  null,
  "Vuoi cancellare questo Nodo?"
 ],
 "Do you want to remove the image tagged as '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?": [
  null,
  "Vuoi rimuovere l'immagine etichettata come ' / : '{{stream.metadata.namespace}}?"
 ],
 "Do you want to remove the role '{{ fields.displayRole }}' from member {{ fields.member.metadata.name }}?": [
  null,
  "Vuoi rimuovere il ruolo '{{ fields.displayRole }}' da membro {{ fields.member.metadata.name }}?"
 ],
 "Don't pull images automatically": [
  null,
  "Non scaricare le immagini automaticamente"
 ],
 "Driver": [
  null,
  "Driver"
 ],
 "Empty Directory": [
  null,
  "Elenco vuoto"
 ],
 "Endpoint": [
  null,
  "Endpoint"
 ],
 "Endpoint Name": [
  null,
  "Nome del punto finale"
 ],
 "Endpoints": [
  null,
  "Punti finali"
 ],
 "Environment": [
  null,
  "Ambiente"
 ],
 "Error getting certificate details: $0": [
  null,
  "Errore nell'ottenere i dettagli del certificato: $0"
 ],
 "Error writing kubectl config": [
  null,
  "Errore nella scrittura di kubectl config"
 ],
 "Fibre Channel": [
  null,
  "Canale in fibra ottica"
 ],
 "Filesystem Type": [
  null,
  "Tipo di file system"
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
  "Nome del set di dati Flocker"
 ],
 "GCE Persistent Disk": [
  null,
  "GCE Disco Persistente"
 ],
 "Git Repository": [
  null,
  "Repository Git"
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
  "Concedi l'accesso aggiuntivo push o admin a specifici membri qui sotto."
 ],
 "Group Members": [
  null,
  "Membri del gruppo"
 ],
 "Group or Project": [
  null,
  "Gruppo o progetto"
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
  "Sentiero dell'ospite"
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
  "Identità"
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
  "Nome dell'immagine"
 ],
 "Image Registry": [
  null,
  "Registro immagini"
 ],
 "Image Stream": [
  null,
  "Flusso d'immagine"
 ],
 "Image commands": [
  null,
  "Comandi immagine"
 ],
 "Images": [
  null,
  "Immagini"
 ],
 "Images by project": [
  null,
  "Immagini per progetto"
 ],
 "Images pushed recently": [
  null,
  "Immagini spinte di recente"
 ],
 "In order to begin pushing images to the registry, use the commands below.": [
  null,
  "Per iniziare a spingere le immagini nel registro di sistema, utilizzare i comandi seguenti."
 ],
 "In order to begin pushing images to the registry, you need to create a project.": [
  null,
  "Per iniziare a spingere le immagini nel registro di sistema, è necessario creare un progetto."
 ],
 "Interface": [
  null,
  "Interfaccia"
 ],
 "Kernel Version": [
  null,
  "Versione del kernel"
 ],
 "Key Ring Path": [
  null,
  "Sentiero dell'anello portachiavi"
 ],
 "Kubelet Version": [
  null,
  "Versione Kubelet"
 ],
 "Kubernetes Cluster": [
  null,
  "Kubernetes Cluster"
 ],
 "Labels": [
  null,
  "Etichette"
 ],
 "Last Heartbeat": [
  null,
  "Ultimo battito cardiaco"
 ],
 "Last Status Change": [
  null,
  "Ultimo cambiamento di stato"
 ],
 "Latest Version": [
  null,
  "Ultima versione"
 ],
 "Log into OpenShift command line tools:": [
  null,
  "Accedere agli strumenti della riga di comando di OpenShift:"
 ],
 "Log into the registry:": [
  null,
  "Effettuare il login nel registro:"
 ],
 "Logical Unit Number": [
  null,
  "Numero di unità logica"
 ],
 "Login commands": [
  null,
  "Comandi di accesso"
 ],
 "Logs": [
  null,
  "Log"
 ],
 "Machine ID": [
  null,
  "ID macchina"
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
  "Membro di"
 ],
 "Members": [
  null,
  "Membri"
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
  "Utilizzo memoria: $0%"
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
  "Monitor"
 ],
 "Mount Location": [
  null,
  "Posizione di montaggio"
 ],
 "NFS": [
  null,
  "NFS"
 ],
 "NFS Mount": [
  null,
  "Montaggio NFS"
 ],
 "Name": [
  null,
  "Nome"
 ],
 "Namespace": [
  null,
  "Namespace"
 ],
 "Namespace cannot be empty.": [
  null,
  "Il namespace dei nomi non può essere vuoto."
 ],
 "Network": [
  null,
  "Rete"
 ],
 "New Group": [
  null,
  "Nuovo gruppo"
 ],
 "New Project": [
  null,
  "Nuovo progetto"
 ],
 "New image stream": [
  null,
  "Nuovo flusso di immagini"
 ],
 "New project": [
  null,
  "Nuovo progetto"
 ],
 "No": [
  null,
  "No"
 ],
 "No Pods are using this claim": [
  null,
  "Nessun baccello sta usando questo claim"
 ],
 "No Volume Bound": [
  null,
  "Nessun volume legato"
 ],
 "No groups are present.": [
  null,
  "Non sono presenti gruppi."
 ],
 "No images pushed": [
  null,
  "Nessuna immagine spinta"
 ],
 "No metadata file was selected. Please select a Kubernetes metadata file.": [
  null,
  "Non è stato selezionato alcun file di metadati. Selezionare un file di metadati Kubernetes."
 ],
 "No nodes in cluster": [
  null,
  "Nessun nodo in cluster"
 ],
 "No pods deployed": [
  null,
  "Nessun baccello dispiegato"
 ],
 "No pods replicated": [
  null,
  "Nessun baccello replicato"
 ],
 "No pods scheduled": [
  null,
  "Nessun baccello in programma"
 ],
 "No pods selected": [
  null,
  "Nessun baccello selezionato"
 ],
 "No projects are present.": [
  null,
  "Non sono presenti progetti."
 ],
 "No users are present.": [
  null,
  "Non ci sono utenti presenti."
 ],
 "No volumes are present.": [
  null,
  "Non sono presenti volumi."
 ],
 "No volumes in use": [
  null,
  "Nessun volume in uso"
 ],
 "Node": [
  null,
  "Nodo"
 ],
 "Nodes": [
  null,
  "Nodi"
 ],
 "Nodes are the machines that run your containers.": [
  null,
  "I nodi sono le macchine che gestiscono i vostri container."
 ],
 "None": [
  null,
  "Nessuno"
 ],
 "Not Ready": [
  null,
  "Non pronto"
 ],
 "Not a valid number of replicas": [
  null,
  "Non un numero valido di repliche"
 ],
 "Not a valid value for Host": [
  null,
  "Non è un valore valido per Host"
 ],
 "Not deployed": [
  null,
  "Non utilizzato"
 ],
 "OS": [
  null,
  "OS"
 ],
 "OS Versions": [
  null,
  "Versioni OS"
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
  "Nome PD"
 ],
 "Partition": [
  null,
  "Partizione"
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
  "Reclami sui volumi in sospeso"
 ],
 "Persistent Volumes": [
  null,
  "Volumi persistenti"
 ],
 "Phase": [
  null,
  "Fase"
 ],
 "Please create another namespace for $0 \"$1\"": [
  null,
  "Si prega di creare un altro namespace per $0 \"$1\""
 ],
 "Please provide a GlusterFS volume name": [
  null,
  "Si prega di fornire un nome di volume GlusterFS"
 ],
 "Please provide a username": [
  null,
  "Si prega di fornire un nome utente"
 ],
 "Please provide a valid NFS server": [
  null,
  "Si prega di fornire un server NFS valido"
 ],
 "Please provide a valid address": [
  null,
  "Si prega di fornire un indirizzo valido"
 ],
 "Please provide a valid filesystem type": [
  null,
  "Si prega di fornire un tipo di filesystem valido"
 ],
 "Please provide a valid interface": [
  null,
  "Si prega di fornire un'interfaccia valida"
 ],
 "Please provide a valid logical unit number": [
  null,
  "Si prega di fornire un numero di unità logica valido"
 ],
 "Please provide a valid name": [
  null,
  "Si prega di fornire un nome valido"
 ],
 "Please provide a valid namespace.": [
  null,
  "Si prega di fornire un namespace valido."
 ],
 "Please provide a valid path": [
  null,
  "Si prega di fornire un percorso valido"
 ],
 "Please provide a valid qualified name": [
  null,
  "Si prega di fornire un nome qualificato valido"
 ],
 "Please provide a valid storage capacity.": [
  null,
  "Si prega di fornire una capacità di storage valida."
 ],
 "Please provide a valid target": [
  null,
  "Si prega di fornire un obiettivo valido"
 ],
 "Please select a valid access mode": [
  null,
  "Selezionare una modalità di accesso valida"
 ],
 "Please select a valid endpoint": [
  null,
  "Selezionare un punto finale valido"
 ],
 "Please select a valid policy option.": [
  null,
  "Selezionare un'opzione valida."
 ],
 "Please type an address": [
  null,
  "Si prega di inserire un indirizzo"
 ],
 "Pod": [
  null,
  "Baccello"
 ],
 "Pod Address": [
  null,
  "Indirizzo"
 ],
 "Pod Endpoints": [
  null,
  "Punti finali dei baccelli"
 ],
 "Pod Replicated": [
  null,
  "Pod replicato"
 ],
 "Pod Selector": [
  null,
  "Selettore di baccelli"
 ],
 "Pods": [
  null,
  "Cialde"
 ],
 "Pods contain one or more containers that run together on a node, containing your application code.": [
  null,
  "I baccelli contengono uno o più contenitori che girano insieme su un nodo, contenente il codice dell'applicazione."
 ],
 "Pool Name": [
  null,
  "Nome pool"
 ],
 "Populate": [
  null,
  "Populate"
 ],
 "Ports": [
  null,
  "Porte"
 ],
 "Private: Allow only specific users or groups to pull images": [
  null,
  "Privato: Consentire solo a utenti o gruppi specifici di scaricare immagini"
 ],
 "Project": [
  null,
  "Progetto"
 ],
 "Project Members": [
  null,
  "Membri del progetto"
 ],
 "Project access policy allows anonymous users to pull images.": [
  null,
  "La politica di accesso ai progetti consente agli utenti anonimi di scaricare immagini."
 ],
 "Project access policy allows any authenticated user to pull images.": [
  null,
  "La politica di accesso al progetto consente a qualsiasi utente autenticato di estrarre immagini."
 ],
 "Project access policy only allows specific members to access images.": [
  null,
  "La politica di accesso ai progetti consente solo a membri specifici di accedere alle immagini."
 ],
 "Project:": [
  null,
  "Progetto:"
 ],
 "Projects": [
  null,
  "Progetti"
 ],
 "Proxy Version": [
  null,
  "Versione proxy"
 ],
 "Pull an image:": [
  null,
  "Scarica un'immagine:"
 ],
 "Pull from": [
  null,
  "Tirare da"
 ],
 "Pull specific tags from another image repository": [
  null,
  "Tirare tag specifici da un altro repository di immagini"
 ],
 "Push an image:": [
  null,
  "Premere un'immagine:"
 ],
 "Qualified Name": [
  null,
  "Nome qualificato"
 ],
 "Rados Block Device": [
  null,
  "Dispositivo di blocco radio"
 ],
 "Read Only": [
  null,
  "Sola lettura"
 ],
 "Read and write from a single node": [
  null,
  "Leggere e scrivere da un singolo nodo"
 ],
 "Read and write from multiple nodes": [
  null,
  "Leggere e scrivere da più nodi"
 ],
 "Read only from multiple nodes": [
  null,
  "Leggere solo da più nodi"
 ],
 "Ready": [
  null,
  "Ready"
 ],
 "Reason": [
  null,
  "Motivo"
 ],
 "Reclaim Policy": [
  null,
  "Politica di Reclamo"
 ],
 "Reconnect": [
  null,
  "Ricollegare"
 ],
 "Recycle": [
  null,
  "Riciclare"
 ],
 "Register": [
  null,
  "Registra"
 ],
 "Register New Volume": [
  null,
  "Registra nuovo volume"
 ],
 "Register Persistent Volume": [
  null,
  "Registrare volume persistente"
 ],
 "Remote registry is insecure": [
  null,
  "Il registro remoto è insicuro"
 ],
 "Remove": [
  null,
  "Elimina Zona"
 ],
 "Remove Group": [
  null,
  "Rimuovi gruppo"
 ],
 "Remove Member": [
  null,
  "Rimuovi membro"
 ],
 "Remove Role": [
  null,
  "Rimuovi ruolo"
 ],
 "Remove User": [
  null,
  "Rimuovi utente"
 ],
 "Remove image tag": [
  null,
  "Rimuovi etichetta immagine"
 ],
 "Remove membership": [
  null,
  "Rimuovere l'iscrizione"
 ],
 "Replicas": [
  null,
  "Repliche"
 ],
 "Replication Controller": [
  null,
  "Controller di replica"
 ],
 "Replication Controllers": [
  null,
  "Controller di replica"
 ],
 "Replication controllers dynamically create instances of pods from templates, and remove pods when necessary.": [
  null,
  "I controller di replica creano dinamicamente istanze di pod dai modelli e rimuovono i pod quando necessario."
 ],
 "Repository URL": [
  null,
  "URL del repositorio"
 ],
 "Requested": [
  null,
  "Richiesto"
 ],
 "Requests": [
  null,
  "Richieste"
 ],
 "Requires Authentication": [
  null,
  "Richiede l'autenticazione"
 ],
 "Restart Count": [
  null,
  "Riavvia il conteggio"
 ],
 "Restart Policy": [
  null,
  "Politica di riavvio"
 ],
 "Retain": [
  null,
  "Conservare"
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
  "Rotta"
 ],
 "Routes": [
  null,
  "Rotte"
 ],
 "Scheduled Pods": [
  null,
  "Cialde in programma"
 ],
 "Scheduling Disabled": [
  null,
  "Programmazione Disabili"
 ],
 "Secret": [
  null,
  "Segreto"
 ],
 "Secret File": [
  null,
  "Archivio segreto"
 ],
 "Secret Name": [
  null,
  "Nome segreto"
 ],
 "Secret Volume": [
  null,
  "Volume segreto"
 ],
 "Select Manifest File...": [
  null,
  "Selezionare il file manifesto....."
 ],
 "Select Member": [
  null,
  "Selezionare il membro"
 ],
 "Select Role": [
  null,
  "Seleziona ruolo"
 ],
 "Select an object to see more details.": [
  null,
  "Selezionare un oggetto per vedere maggiori dettagli."
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
  "Account di servizio"
 ],
 "Services": [
  null,
  "Servizi"
 ],
 "Services group pods and provide a common DNS name and an optional, load-balanced IP address to access them.": [
  null,
  "I servizi raggruppano i pod e forniscono un nome DNS comune e un indirizzo IP load-balanced opzionale per accedervi."
 ],
 "Session Affinity": [
  null,
  "Affinità della sessione"
 ],
 "Share Name": [
  null,
  "Condividi Nome"
 ],
 "Shared: Allow any authenticated user to pull images": [
  null,
  "Condivisa: consente a qualsiasi utente autenticato di estrarre immagini"
 ],
 "Shell": [
  null,
  "Shell"
 ],
 "Show all Containers": [
  null,
  "Mostra tutti i container"
 ],
 "Show all Deployment Configs": [
  null,
  "Mostra tutte le configurazioni di deployment"
 ],
 "Show all Nodes": [
  null,
  "Mostra tutti i nodi"
 ],
 "Show all Persistent Volumes": [
  null,
  "Mostra tutti i volumi persistenti"
 ],
 "Show all Pod Containers": [
  null,
  "Mostra tutti i containers pod"
 ],
 "Show all Pods": [
  null,
  "Mostra tutti i pod"
 ],
 "Show all Projects": [
  null,
  "Mostra tutti i progetti"
 ],
 "Show all Replication Controllers": [
  null,
  "Mostra tutti i controller di replica"
 ],
 "Show all Routes": [
  null,
  "Mostra tutti i percorsi"
 ],
 "Show all Services": [
  null,
  "Mostra tutti i servizi"
 ],
 "Show all image streams": [
  null,
  "Mostra tutti i flussi di immagini"
 ],
 "Show all images": [
  null,
  "Mostra tutte le immagini"
 ],
 "Since": [
  null,
  "Da"
 ],
 "Size": [
  null,
  "Dimensione"
 ],
 "Skip Certificate Verification": [
  null,
  "Salta la verifica del certificato"
 ],
 "Sorry, I don't know how to modify this volume": [
  null,
  "Mi dispiace, non so come modificare questo volume"
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
  "Strategia"
 ],
 "Sync all tags from a remote image repository": [
  null,
  "Sincronizzare tutti i tag da un archivio di immagini remoto"
 ],
 "TLS Termination": [
  null,
  "Terminazione TLS"
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
  "Portale di destinazione"
 ],
 "Target World Wide Names": [
  null,
  "Nomi di destinazione in tutto il mondo"
 ],
 "Template": [
  null,
  "Modello"
 ],
 "The address contains invalid characters": [
  null,
  "L'indirizzo contiene caratteri non validi"
 ],
 "The container '{{ target }}' does not exist.": [
  null,
  "Il contenitore '{{ target }}' non esiste."
 ],
 "The deployment config '{{ target }}' does not exist.": [
  null,
  "La configurazione di distribuzione '{{ target }}'' non esiste."
 ],
 "The group '{{ groupName }}' does not exist.": [
  null,
  "Il gruppo '{{ groupName }}' non esiste."
 ],
 "The maximum number of replicas is 128": [
  null,
  "Il numero massimo di repliche è 128"
 ],
 "The name contains invalid characters": [
  null,
  "Il nome contiene caratteri non validi"
 ],
 "The node '{{ target }}' does not exist.": [
  null,
  "Il nodo '{{ target }}' ' non esiste."
 ],
 "The node doesn't have enough disk space": [
  null,
  "Il nodo non ha abbastanza spazio su disco"
 ],
 "The node doesn't have enough free memory": [
  null,
  "Il nodo non ha abbastanza memoria libera"
 ],
 "The persistent volume '{{ target }}' does not exist.": [
  null,
  "Il volume persistente ''non esiste."
 ],
 "The pod '{{ target }}' does not exist.": [
  null,
  "Il baccello ''non esiste."
 ],
 "The project '{{ projName }}' does not exist.": [
  null,
  "Il progetto ''non esiste."
 ],
 "The replication controller '{{ target }}' does not exist.": [
  null,
  "Il controller di replica ' ' ' '{{ target }}non esiste."
 ],
 "The route '{{ target }}' does not exist.": [
  null,
  "Il percorso ''non esiste."
 ],
 "The selected file is not a valid Kubernetes application manifest.": [
  null,
  "Il file selezionato non è un manifesto valido di applicazione Kubernetes."
 ],
 "The server uses a certificate signed by an unknown authority.": [
  null,
  "Il server utilizza un certificato firmato da un'autorità sconosciuta."
 ],
 "The service '{{ target }}' does not exist.": [
  null,
  "Il servizio ''non esiste."
 ],
 "The user '{{ userName }}' does not exist.": [
  null,
  "L'utente ' ' ' '{{ userName }}non esiste."
 ],
 "This claim is in use. Deleting it may cause issues with the following pod:": [
  null,
  "Questa indicazione è in uso. L'eliminazione potrebbe causare problemi con il seguente pod:"
 ],
 "This option is for single node testing only – local storage will not work in a multi-node cluster": [
  null,
  "Questa opzione è solo per il test di un singolo nodo - l'archiviazione locale non funziona in un cluster multi-nodo"
 ],
 "This volume has been claimed by {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Deleting it will break that claim and may cause issues with any pods depending on it.": [
  null,
  "Questo volume è stato rivendicato da {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Cancellandolo si rompe tale rivendicazione e può causare problemi con qualsiasi baccelli a seconda di esso."
 ],
 "This volume has not been claimed": [
  null,
  "Questo volume non è stato rivendicato"
 ],
 "Token": [
  null,
  "Token"
 ],
 "Topology": [
  null,
  "Topologia"
 ],
 "Triggers": [
  null,
  "Trigger"
 ],
 "Troubleshoot": [
  null,
  "Risoluzione dei problemi"
 ],
 "Trust this certificate for this connection": [
  null,
  "Fidarsi di questo certificato per questo collegamento"
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
  "Incapace di decodificare il manifesto dell'applicazione Kubernetes."
 ],
 "Unable to read the Kubernetes application manifest. Code $0.": [
  null,
  "Impossibile leggere il manifesto di applicazione Kubernetes. Codice $0."
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
  "Aggiornamento $0...."
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
  "Utente o gruppo"
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
  "ID volume"
 ],
 "Volume Name": [
  null,
  "Nome del volume"
 ],
 "Volume Type": [
  null,
  "Tipo di volume"
 ],
 "Volumes": [
  null,
  "Volumi"
 ],
 "Warning:": [
  null,
  "Attenzione:"
 ],
 "Welcome to the Image Registry": [
  null,
  "Benvenuti nel Registro delle immagini"
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
  "È possibile aggirare il controllo del certificato, ma qualsiasi dato inviato al server potrebbe essere intercettato da altri."
 ],
 "You can deploy an application to your cluster.": [
  null,
  "È possibile distribuire un'applicazione nel proprio cluster."
 ],
 "Your login credentials do not give you access to use the docker registry from the command line.": [
  null,
  "Le credenziali di accesso non danno accesso all'utilizzo del registro di bordo dalla riga di comando."
 ],
 "eg: my-image-stream": [
  null,
  "es: my-image-stream"
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
  "richieste di risarcimento in sospeso"
 ],
 "yes": [
  null,
  "si"
 ]
}));
