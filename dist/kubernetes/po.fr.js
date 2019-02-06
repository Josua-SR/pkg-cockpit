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
nplurals=2; plural=(n > 1);
return plural;
},
  "language": "fr",
  "x-generator": "Zanata 4.6.2"
 },
 " 1\"Do you want to delete the following Nodes?": [
  null,
  " 1\"Désirez-vous supprimer les nœuds suivants?"
 ],
 "$0% Free": [
  "$0% Free",
  "$0% disponible",
  "$0% disponible"
 ],
 "$0% Used": [
  "$0% Used",
  "$0% utilisé",
  "$0% utilisé"
 ],
 "AWS Elastic Block Store": [
  null,
  "AWS Elastic Block Store"
 ],
 "Access Modes": [
  null,
  "Modes d’accès"
 ],
 "Access Policy": [
  null,
  "Politique d’accès"
 ],
 "Actual": [
  null,
  "Réel"
 ],
 "Add": [
  null,
  "Ajouter"
 ],
 "Add Cluster Node": [
  null,
  "Ajouter une nœud de cluster"
 ],
 "Add Group": [
  null,
  "Ajouter un groupe"
 ],
 "Add Kubernetes Node": [
  null,
  "Ajouter un nœud Kubernetes"
 ],
 "Add Member": [
  null,
  "Ajouter un membre"
 ],
 "Add Membership": [
  null,
  "Ajouter un membre"
 ],
 "Add New Cluster": [
  null,
  "Ajouter un nouveau cluster"
 ],
 "Add New User": [
  null,
  "Ajouter un nouvel utilisateur"
 ],
 "Add Role": [
  null,
  "Ajouter un rôle"
 ],
 "Add User": [
  null,
  "Ajouter un utilisateur"
 ],
 "Add membership": [
  null,
  "Ajouter un membre"
 ],
 "Address": [
  null,
  "Adresse"
 ],
 "Addresses": [
  null,
  "Adresses"
 ],
 "Adjust": [
  null,
  "Régler"
 ],
 "Adjust Persistent Volume '{{ item.metadata.name }}'": [
  null,
  "Ajuster le volume persistant « {{item.metadata.name}} »"
 ],
 "Adjust Replication Controller {{ item.metadata.name }}": [
  null,
  "Ajuster le contrôleur de réplication {{item.metadata.name}}"
 ],
 "Adjust Route": [
  null,
  "Ajuster l’itinéraire"
 ],
 "Adjust Service": [
  null,
  "Ajuster le service"
 ],
 "Admin": [
  null,
  "Admin"
 ],
 "All Projects": [
  null,
  "Tous les projets"
 ],
 "All Types": [
  null,
  "Tous les types"
 ],
 "All healthy": [
  null,
  "Tout fonctionne bien"
 ],
 "All images": [
  null,
  "Toutes les images"
 ],
 "All in use": [
  null,
  "Tout en cours d’utilisation"
 ],
 "All running": [
  null,
  "Le tout est en cours d’exécution"
 ],
 "Annotations": [
  null,
  "Annotations"
 ],
 "Anonymous: Allow all unauthenticated users to pull images": [
  null,
  "Anonyme : autoriser tous les utilisateurs non authentifiés à tirer des images"
 ],
 "Authentication": [
  null,
  "Authentification"
 ],
 "Azure": [
  null,
  "Azur"
 ],
 "Boot ID": [
  null,
  "ID de démarrage"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU Utilization: $0%": [
  null,
  "Utilisation du processeur: $0 %"
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Capacity": [
  null,
  "Capacité"
 ],
 "Ceph Filesystem Mount": [
  null,
  "Point de montage du système de fichiers Ceph"
 ],
 "Ceph Monitors": [
  null,
  "Moniteurs Ceph"
 ],
 "Change": [
  null,
  "Changement"
 ],
 "Change User": [
  null,
  "Changer d’utilisateur"
 ],
 "Change image stream": [
  null,
  "Changer le flux d’image"
 ],
 "Change project": [
  null,
  "Changer de projet"
 ],
 "Cinder": [
  null,
  "Cinder"
 ],
 "Claim": [
  null,
  "Requête"
 ],
 "Claim Name": [
  null,
  "Nom de la requête"
 ],
 "Client Certificate": [
  null,
  "Certificat client"
 ],
 "Cluster": [
  null,
  "Cluster"
 ],
 "Configuration": [
  null,
  "Configuration"
 ],
 "Configure Flannel networking": [
  null,
  "Configurer le réseau Flannel"
 ],
 "Configure Kubelet and Proxy": [
  null,
  "Configurer Kubelet et Proxy"
 ],
 "Connect": [
  null,
  "Connecter"
 ],
 "Connecting...": [
  null,
  "Connexion en cours..."
 ],
 "Connection Error": [
  null,
  "Erreur de connexion"
 ],
 "Connection Error: $0": [
  null,
  "Erreur de connexion: $0"
 ],
 "Connection Settings": [
  null,
  "Paramètres de connexion"
 ],
 "Container": [
  null,
  "Conteneur"
 ],
 "Container ID": [
  null,
  "ID du conteneur"
 ],
 "Container Runtime Version": [
  null,
  "Version du runtime du conteneur"
 ],
 "Containers": [
  null,
  "Conteneurs"
 ],
 "Could not list services": [
  null,
  "Impossible de répertorier les services"
 ],
 "Couldn't connect to server": [
  null,
  "Impossible de se connecter au serveur"
 ],
 "Couldn't find running API server": [
  null,
  "Impossible de trouver le serveur d’API en cours d’exécution"
 ],
 "Create": [
  null,
  "Créer"
 ],
 "Create empty image stream": [
  null,
  "Créer un flux d’images vide"
 ],
 "Create image stream": [
  null,
  "Créer un flux d’images"
 ],
 "Created": [
  null,
  "Créé"
 ],
 "DNS Policy": [
  null,
  "Stratégie DNS"
 ],
 "Delete": [
  null,
  "Supprimer"
 ],
 "Delete Node": [
  null,
  "Supprimer le nœud"
 ],
 "Delete Persistent Volume": [
  null,
  "Supprimer le volume persistant"
 ],
 "Delete Persistent Volume Claim": [
  null,
  "Supprimer la requête de volume persistant"
 ],
 "Delete Project": [
  null,
  "Supprimer le projet"
 ],
 "Delete Selected": [
  null,
  "Supprimer la sélection"
 ],
 "Delete image stream": [
  null,
  "Supprimer le flux d’images"
 ],
 "Delete {{ item.kind }}": [
  null,
  "Supprimer {{item.kind}}"
 ],
 "Deleting a Pod will kill all associated containers. Pods may be automatically created again in some cases.": [
  null,
  "Supprimer un Pod va tuer tous les conteneurs associés. Les pods peuvent être automatiquement créés à nouveau dans certains cas."
 ],
 "Deploy": [
  null,
  "Déployer"
 ],
 "Deploy Application": [
  null,
  "Déployer l’application"
 ],
 "Deployment Causes": [
  null,
  "Causes du déploiement"
 ],
 "Deployment Config": [
  null,
  "Configuration du déploiement"
 ],
 "Deployment Configs": [
  null,
  "Configurations de déploiement"
 ],
 "Description": [
  null,
  "La description"
 ],
 "Details": [
  null,
  "Détails"
 ],
 "Directory": [
  null,
  "Répertoire"
 ],
 "Disk": [
  null,
  "Disque"
 ],
 "Disk Utilization: $0%": [
  null,
  "Utilisation du disque: $0 %"
 ],
 "Display name": [
  null,
  "Afficher un nom"
 ],
 "Do you want to add the role '{{ fields.displayRole }}'?": [
  null,
  "Voulez-vous ajouter le rôle « {{fields.displayRole}} » ?"
 ],
 "Do you want to delete the '{{stream.metadata.namespace}}/{{stream.metadata.name}}' image stream?": [
  null,
  "Voulez-vous supprimer le flux d’image « {{stream.metadata.namespace}} / {{stream.metadata.name}} » ?"
 ],
 "Do you want to delete the Persistent Volume '{{item.metadata.name}}'?": [
  null,
  "Voulez-vous supprimer le volume persistant « {{item.metadata.name}} » ?"
 ],
 "Do you want to delete the Persistent Volume Claim '{{item.metadata.name}}'?": [
  null,
  "Voulez-vous supprimer la requête de volume persistant « {{item.metadata.name}}’ »"
 ],
 "Do you want to delete the {{ item.kind }} '{{item.metadata.name}}'?": [
  null,
  "Voulez-vous supprimer le {{item.kind}} « {{item.metadata.name}} » ?"
 ],
 "Do you want to delete this Node?": [
  null,
  "Voulez-vous supprimer ce nœud ?"
 ],
 "Do you want to remove the image tagged as '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?": [
  null,
  "Voulez-vous supprimer l’image intitulée « {{stream.metadata.namespace}} / {{stream.metadata.name}} : {{tag.tag}} »?"
 ],
 "Do you want to remove the role '{{ fields.displayRole }}' from member {{ fields.member.metadata.name }}?": [
  null,
  "Voulez-vous supprimer le rôle « {{fields.displayRole}} » du membre {{fields.member.metadata.name}} ?"
 ],
 "Don't pull images automatically": [
  null,
  "Ne pas tirer les images automatiquement"
 ],
 "Driver": [
  null,
  "Pilote"
 ],
 "Empty Directory": [
  null,
  "Répertoire vide"
 ],
 "Endpoint": [
  null,
  "Point d’accès"
 ],
 "Endpoint Name": [
  null,
  "Nom du point d’accès"
 ],
 "Endpoints": [
  null,
  "Points d’accès"
 ],
 "Environment": [
  null,
  "Environnement"
 ],
 "Error getting certificate details: $0": [
  null,
  "Erreur lors de l’obtention des détails du certificat: $0"
 ],
 "Error writing kubectl config": [
  null,
  "Erreur lors de l’écriture de la configuration de kubectl"
 ],
 "Fibre Channel": [
  null,
  "Fibre Channel"
 ],
 "Filesystem Type": [
  null,
  "Type de système de fichiers"
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
  "Nom du jeu de données Flocker"
 ],
 "GCE Persistent Disk": [
  null,
  "Disque persistant GCE"
 ],
 "Git Repository": [
  null,
  "Référentiel Git"
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
  "Accordez un accès push ou admin supplémentaire à des membres spécifiques ci-dessous."
 ],
 "Group Members": [
  null,
  "Les membres du groupe"
 ],
 "Group or Project": [
  null,
  "Groupe ou projet"
 ],
 "Groups": [
  null,
  "Groupes"
 ],
 "Host": [
  null,
  "Hôte"
 ],
 "Host Path": [
  null,
  "Chemin d’hôte"
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
  "Identités"
 ],
 "Identity": [
  null,
  "Identité"
 ],
 "Image": [
  null,
  "Image"
 ],
 "Image ID": [
  null,
  "ID de l’image"
 ],
 "Image Name": [
  null,
  "Nom de l’image"
 ],
 "Image Registry": [
  null,
  "Registre d’images"
 ],
 "Image Stream": [
  null,
  "Flux d’images"
 ],
 "Image commands": [
  null,
  "Commandes d’image"
 ],
 "Images": [
  null,
  "Images"
 ],
 "Images by project": [
  null,
  "Images par projet"
 ],
 "Images pushed recently": [
  null,
  "Images poussées récemment"
 ],
 "In order to begin pushing images to the registry, use the commands below.": [
  null,
  "Pour commencer à pousser les images dans le registre, utilisez les commandes ci-dessous."
 ],
 "In order to begin pushing images to the registry, you need to create a project.": [
  null,
  "Afin de commencer à pousser les images dans le registre, vous devez créer un projet."
 ],
 "Interface": [
  null,
  "Interface"
 ],
 "Kernel Version": [
  null,
  "Version du noyau"
 ],
 "Key Ring Path": [
  null,
  "Key Ring Path"
 ],
 "Kubelet Version": [
  null,
  "Version Kubelet"
 ],
 "Kubernetes Cluster": [
  null,
  "Cluster Kubernetes"
 ],
 "Labels": [
  null,
  "Étiquettes"
 ],
 "Last Heartbeat": [
  null,
  "Dernière pulsation"
 ],
 "Last Status Change": [
  null,
  "Dernier changement de statut"
 ],
 "Latest Version": [
  null,
  "Dernière version"
 ],
 "Log into OpenShift command line tools:": [
  null,
  "Connectez-vous aux outils de ligne de commande OpenShift :"
 ],
 "Log into the registry:": [
  null,
  "Connectez-vous au registre:"
 ],
 "Logical Unit Number": [
  null,
  "Numéro d’unité logique"
 ],
 "Login commands": [
  null,
  "Commandes de connexion"
 ],
 "Logs": [
  null,
  "Journaux"
 ],
 "Machine ID": [
  null,
  "ID machine"
 ],
 "Manifest": [
  null,
  "Manifeste"
 ],
 "Medium": [
  null,
  "Moyen"
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
  "Appartenance"
 ],
 "Memory": [
  null,
  "Mémoire"
 ],
 "Memory Utilization: $0%": [
  null,
  "Utilisation de la mémoire: $0 %"
 ],
 "Message": [
  null,
  "Message"
 ],
 "Metadata": [
  null,
  "Méta-données"
 ],
 "Modify": [
  null,
  "Modifier"
 ],
 "Monitors": [
  null,
  "Moniteurs"
 ],
 "Mount Location": [
  null,
  "Emplacement de montage"
 ],
 "NFS": [
  null,
  "NFS"
 ],
 "NFS Mount": [
  null,
  "Point de montage NFS"
 ],
 "Name": [
  null,
  "Nom"
 ],
 "Namespace": [
  null,
  "Espace de noms"
 ],
 "Namespace cannot be empty.": [
  null,
  "L’espace de noms ne peut pas être vide."
 ],
 "Network": [
  null,
  "Réseau"
 ],
 "New Group": [
  null,
  "Nouveau groupe"
 ],
 "New Project": [
  null,
  "Nouveau projet"
 ],
 "New image stream": [
  null,
  "Nouveau flux d’images"
 ],
 "New project": [
  null,
  "Nouveau projet"
 ],
 "No": [
  null,
  "Non"
 ],
 "No Pods are using this claim": [
  null,
  "Aucun pod n’utilise cette requête"
 ],
 "No Volume Bound": [
  null,
  "Aucune limite de volume"
 ],
 "No groups are present.": [
  null,
  "Aucun groupe n’est présent."
 ],
 "No images pushed": [
  null,
  "Aucune image poussée"
 ],
 "No metadata file was selected. Please select a Kubernetes metadata file.": [
  null,
  "Aucun fichier de métadonnées n’a été sélectionné. Veuillez sélectionner un fichier de méta-données Kubernetes."
 ],
 "No nodes in cluster": [
  null,
  "Aucun nœud dans le cluster"
 ],
 "No pods deployed": [
  null,
  "Aucun pod déployé"
 ],
 "No pods replicated": [
  null,
  "Aucun pod répliqué"
 ],
 "No pods scheduled": [
  null,
  "Aucun pod programmé"
 ],
 "No pods selected": [
  null,
  "Aucun pod sélectionné"
 ],
 "No projects are present.": [
  null,
  "Aucun projet n’est présent."
 ],
 "No users are present.": [
  null,
  "Aucun utilisateur n’est présent"
 ],
 "No volumes are present.": [
  null,
  "Aucun volume n’est présent."
 ],
 "No volumes in use": [
  null,
  "Aucun volume en cours d’utilisation"
 ],
 "Node": [
  null,
  "Nœud"
 ],
 "Nodes": [
  null,
  "Nœuds"
 ],
 "Nodes are the machines that run your containers.": [
  null,
  "Les nœuds sont les machines qui exécutent vos conteneurs."
 ],
 "None": [
  null,
  "Aucun(e)"
 ],
 "Not Ready": [
  null,
  "Pas prêt"
 ],
 "Not a valid number of replicas": [
  null,
  "Nombre de répliques non valide"
 ],
 "Not a valid value for Host": [
  null,
  "Valeur non valide pour l’hôte"
 ],
 "Not deployed": [
  null,
  "Non déployé"
 ],
 "OS": [
  null,
  "OS"
 ],
 "OS Versions": [
  null,
  "Versions OS"
 ],
 "Operating System": [
  null,
  "Système d’exploitation"
 ],
 "Options": [
  null,
  "Options"
 ],
 "Overview": [
  null,
  "Aperçu"
 ],
 "PD Name": [
  null,
  "Nom du PD"
 ],
 "Partition": [
  null,
  "Partition"
 ],
 "Password": [
  null,
  "Mot de passe"
 ],
 "Path": [
  null,
  "Chemin"
 ],
 "Pending Volume Claims": [
  null,
  "Requêtes de volume en attente"
 ],
 "Persistent Volumes": [
  null,
  "Volumes persistants"
 ],
 "Phase": [
  null,
  "Phase"
 ],
 "Please create another namespace for $0 \"$1\"": [
  null,
  "Veuillez créer un autre espace de nom pour $0 \"$1\""
 ],
 "Please provide a GlusterFS volume name": [
  null,
  "Veuillez indiquer un nom de volume GlusterFS"
 ],
 "Please provide a username": [
  null,
  "Veuillez fournir un nom d’utilisateur"
 ],
 "Please provide a valid NFS server": [
  null,
  "Veuillez fournir un serveur NFS valide"
 ],
 "Please provide a valid address": [
  null,
  "Veuillez fournir une adresse valide"
 ],
 "Please provide a valid filesystem type": [
  null,
  "Veuillez fournir un type de système de fichiers valide"
 ],
 "Please provide a valid interface": [
  null,
  "Veuillez fournir une interface valide"
 ],
 "Please provide a valid logical unit number": [
  null,
  "Veuillez fournir un numéro d’unité logique valide"
 ],
 "Please provide a valid name": [
  null,
  "Veuillez fournir un nom valide"
 ],
 "Please provide a valid namespace.": [
  null,
  "Veuillez fournir un espace de noms valide."
 ],
 "Please provide a valid path": [
  null,
  "Veuillez fournir un chemin valide"
 ],
 "Please provide a valid qualified name": [
  null,
  "Veuillez fournir un nom qualifié valide"
 ],
 "Please provide a valid storage capacity.": [
  null,
  "Veuillez indiquer une capacité de stockage valide"
 ],
 "Please provide a valid target": [
  null,
  "Veuillez fournir une cible valide"
 ],
 "Please select a valid access mode": [
  null,
  "Veuillez sélectionner un mode d’accès valide"
 ],
 "Please select a valid endpoint": [
  null,
  "Veuillez sélectionner un point de terminaison valide"
 ],
 "Please select a valid policy option.": [
  null,
  "Veuillez sélectionner une option de politique valide."
 ],
 "Please type an address": [
  null,
  "Veuillez saisir une adresse"
 ],
 "Pod": [
  null,
  "Pod"
 ],
 "Pod Address": [
  null,
  "Adresse Pod"
 ],
 "Pod Endpoints": [
  null,
  "Points d’accès Pod"
 ],
 "Pod Replicated": [
  null,
  "Pod répliqué"
 ],
 "Pod Selector": [
  null,
  "Sélecteur de Pod"
 ],
 "Pods": [
  null,
  "Pods"
 ],
 "Pods contain one or more containers that run together on a node, containing your application code.": [
  null,
  "Les pods contiennent un ou plusieurs conteneurs qui s’exécutent ensemble sur un nœud, contenant le code de votre application."
 ],
 "Pool Name": [
  null,
  "Nom du pool"
 ],
 "Populate": [
  null,
  "Remplissage"
 ],
 "Ports": [
  null,
  "Ports"
 ],
 "Private: Allow only specific users or groups to pull images": [
  null,
  "Privé: autoriser uniquement des utilisateurs ou des groupes spécifiques à extraire des images"
 ],
 "Project": [
  null,
  "Projet"
 ],
 "Project Members": [
  null,
  "Les membres du projet"
 ],
 "Project access policy allows anonymous users to pull images.": [
  null,
  "La stratégie d’accès au projet permet aux utilisateurs anonymes d’extraire des images."
 ],
 "Project access policy allows any authenticated user to pull images.": [
  null,
  "La stratégie d’accès au projet permet à tout utilisateur authentifié d’extraire des images."
 ],
 "Project access policy only allows specific members to access images.": [
  null,
  "La stratégie d’accès au projet autorise uniquement des membres spécifiques à accéder aux images."
 ],
 "Project:": [
  null,
  "Projet :"
 ],
 "Projects": [
  null,
  "Projets"
 ],
 "Proxy Version": [
  null,
  "Version proxy"
 ],
 "Pull an image:": [
  null,
  "Extraire une image :"
 ],
 "Pull from": [
  null,
  "Extraire de"
 ],
 "Pull specific tags from another image repository": [
  null,
  "Extraire des tags spécifiques d’un autre référentiel d’images"
 ],
 "Push an image:": [
  null,
  "Pousser image :"
 ],
 "Qualified Name": [
  null,
  "Nom qualifié"
 ],
 "Rados Block Device": [
  null,
  "Rados Block Device"
 ],
 "Read Only": [
  null,
  "Lecture seulement"
 ],
 "Read and write from a single node": [
  null,
  "Lecture et Écriture à partir d’un seul nœud"
 ],
 "Read and write from multiple nodes": [
  null,
  "Lecture et Écriture à partir de plusieurs nœuds"
 ],
 "Read only from multiple nodes": [
  null,
  "Lecture uniquement à partir de plusieurs nœuds"
 ],
 "Ready": [
  null,
  "Prêt"
 ],
 "Reason": [
  null,
  "Raison"
 ],
 "Reclaim Policy": [
  null,
  "Politique de récupération"
 ],
 "Reconnect": [
  null,
  "Reconnecter"
 ],
 "Recycle": [
  null,
  "Recycler"
 ],
 "Register": [
  null,
  "Enregistrer"
 ],
 "Register New Volume": [
  null,
  "Enregistrer un nouveau volume"
 ],
 "Register Persistent Volume": [
  null,
  "Enregistrer le volume persistant"
 ],
 "Remote registry is insecure": [
  null,
  "L’enregistrement à distance n’est pas sécurisé"
 ],
 "Remove": [
  null,
  "Retirer"
 ],
 "Remove Group": [
  null,
  "Supprimer le groupe"
 ],
 "Remove Member": [
  null,
  "Supprimer le membre"
 ],
 "Remove Role": [
  null,
  "Supprimer le rôle"
 ],
 "Remove User": [
  null,
  "Supprimer l’utilisateur"
 ],
 "Remove image tag": [
  null,
  "Supprimer le tag d’image"
 ],
 "Remove membership": [
  null,
  "Révoquez l’appartenance"
 ],
 "Replicas": [
  null,
  "Replicas"
 ],
 "Replication Controller": [
  null,
  "Contrôleur de réplication"
 ],
 "Replication Controllers": [
  null,
  "Contrôleurs de réplication"
 ],
 "Replication controllers dynamically create instances of pods from templates, and remove pods when necessary.": [
  null,
  "Les contrôleurs de réplication créent dynamiquement des instances de pods à partir de modèles et suppriment des pods si nécessaire."
 ],
 "Repository URL": [
  null,
  "URL du référentiel"
 ],
 "Requested": [
  null,
  "Demandé"
 ],
 "Requests": [
  null,
  "Requêtes"
 ],
 "Requires Authentication": [
  null,
  "Nécessite une authentification"
 ],
 "Restart Count": [
  null,
  "Redémarrer Comptage"
 ],
 "Restart Policy": [
  null,
  "Redémarrer la stratégie"
 ],
 "Retain": [
  null,
  "Conserver"
 ],
 "Revision": [
  null,
  "Révision"
 ],
 "Role": [
  null,
  "Rôle"
 ],
 "Roles": [
  null,
  "Les rôles"
 ],
 "Route": [
  null,
  "Route"
 ],
 "Routes": [
  null,
  "Routes"
 ],
 "Scheduled Pods": [
  null,
  "Pods planifiés"
 ],
 "Scheduling Disabled": [
  null,
  "Planification désactivée"
 ],
 "Secret": [
  null,
  "Secret"
 ],
 "Secret File": [
  null,
  "Fichier secret"
 ],
 "Secret Name": [
  null,
  "Nom secret"
 ],
 "Secret Volume": [
  null,
  "Volume secret"
 ],
 "Select Manifest File...": [
  null,
  "Sélectionnez le fichier manifeste ..."
 ],
 "Select Member": [
  null,
  "Choisir un membre"
 ],
 "Select Role": [
  null,
  "Sélectionner un rôle"
 ],
 "Select an object to see more details.": [
  null,
  "Sélectionnez un objet pour voir plus de détails."
 ],
 "Server": [
  null,
  "Serveur"
 ],
 "Service": [
  null,
  "Service"
 ],
 "Service Account": [
  null,
  "Compte de service"
 ],
 "Services": [
  null,
  "Prestations de service"
 ],
 "Services group pods and provide a common DNS name and an optional, load-balanced IP address to access them.": [
  null,
  "Les services regroupe les pods et fournissent un nom DNS commun et une adresse IP facultative équilibrée pour y accéder."
 ],
 "Session Affinity": [
  null,
  "Affinité de session"
 ],
 "Share Name": [
  null,
  "Nom de partage (Share)"
 ],
 "Shared: Allow any authenticated user to pull images": [
  null,
  "Shared: permet à tout utilisateur authentifié d’extraire des images"
 ],
 "Shell": [
  null,
  "Interpréteur de commande"
 ],
 "Show all Containers": [
  null,
  "Afficher tous les conteneurs"
 ],
 "Show all Deployment Configs": [
  null,
  "Afficher toutes les configurations de déploiement"
 ],
 "Show all Nodes": [
  null,
  "Afficher tous les nœuds"
 ],
 "Show all Persistent Volumes": [
  null,
  "Afficher tous les volumes persistants"
 ],
 "Show all Pod Containers": [
  null,
  "Afficher tous les conteneurs Pod"
 ],
 "Show all Pods": [
  null,
  "Afficher tous les Pods"
 ],
 "Show all Projects": [
  null,
  "Afficher tous les projets"
 ],
 "Show all Replication Controllers": [
  null,
  "Afficher tous les contrôleurs de réplication"
 ],
 "Show all Routes": [
  null,
  "Afficher tous les itinéraires"
 ],
 "Show all Services": [
  null,
  "Afficher tous les services"
 ],
 "Show all image streams": [
  null,
  "Afficher tous les flux d’images"
 ],
 "Show all images": [
  null,
  "Afficher toutes les images"
 ],
 "Since": [
  null,
  "Depuis"
 ],
 "Size": [
  null,
  "Taille"
 ],
 "Skip Certificate Verification": [
  null,
  "Ignorer la vérification du certificat"
 ],
 "Sorry, I don't know how to modify this volume": [
  null,
  "Désolé, je ne sais pas comment modifier ce volume"
 ],
 "State": [
  null,
  "État"
 ],
 "Status": [
  null,
  "Statut"
 ],
 "Strategy": [
  null,
  "Stratégie"
 ],
 "Sync all tags from a remote image repository": [
  null,
  "Synchroniser toutes les balises d’un référentiel d’images distant"
 ],
 "TLS Termination": [
  null,
  "Résiliation TLS"
 ],
 "Tags": [
  null,
  "Balises"
 ],
 "Target": [
  null,
  "Cible"
 ],
 "Target Portal": [
  null,
  "Portail cible"
 ],
 "Target World Wide Names": [
  null,
  "Ciblez des noms World Wide"
 ],
 "Template": [
  null,
  "Modèle"
 ],
 "The address contains invalid characters": [
  null,
  "L’adresse contient des caractères non valides"
 ],
 "The container '{{ target }}' does not exist.": [
  null,
  "Le conteneur « {{target}} » n’existe pas."
 ],
 "The deployment config '{{ target }}' does not exist.": [
  null,
  "La configuration de déploiement « {{target}} » n’existe pas."
 ],
 "The group '{{ groupName }}' does not exist.": [
  null,
  "Le groupe « {{groupName}} » n’existe pas."
 ],
 "The maximum number of replicas is 128": [
  null,
  "Le nombre maximum de répliques est de 128"
 ],
 "The name contains invalid characters": [
  null,
  "Le nom contient des caractères invalides"
 ],
 "The node '{{ target }}' does not exist.": [
  null,
  "Le nœud « {{target}} » n’existe pas."
 ],
 "The node doesn't have enough disk space": [
  null,
  "Le noeud n’a pas assez d’espace disque"
 ],
 "The node doesn't have enough free memory": [
  null,
  "Le noeud n’a pas assez de mémoire disponible"
 ],
 "The persistent volume '{{ target }}' does not exist.": [
  null,
  "Le volume persistant « {{target}} » n’existe pas."
 ],
 "The pod '{{ target }}' does not exist.": [
  null,
  "Le pod « {{target}} » n’existe pas."
 ],
 "The project '{{ projName }}' does not exist.": [
  null,
  "Le projet « {{projName}} » n’existe pas."
 ],
 "The replication controller '{{ target }}' does not exist.": [
  null,
  "Le contrôleur de réplication « {{target}} » n’existe pas."
 ],
 "The route '{{ target }}' does not exist.": [
  null,
  "La route « {{target}} » n’existe pas."
 ],
 "The selected file is not a valid Kubernetes application manifest.": [
  null,
  "Le fichier sélectionné n’est pas un manifeste d’application Kubernetes valide."
 ],
 "The server uses a certificate signed by an unknown authority.": [
  null,
  "Le serveur utilise un certificat signé par une autorité inconnue."
 ],
 "The service '{{ target }}' does not exist.": [
  null,
  "Le service « {{target}} » n’existe pas."
 ],
 "The user '{{ userName }}' does not exist.": [
  null,
  "L’utilisateur « {{userName}} » n’existe pas."
 ],
 "This claim is in use. Deleting it may cause issues with the following pod:": [
  null,
  "Cette requête est en cours d’utilisation. La supprimer peut entraîner des problèmes avec le pod suivant :"
 ],
 "This option is for single node testing only – local storage will not work in a multi-node cluster": [
  null,
  "Cette option est réservée aux tests à un seul nœud - le stockage local ne fonctionnera pas dans un cluster à plusieurs nœuds"
 ],
 "This volume has been claimed by {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Deleting it will break that claim and may cause issues with any pods depending on it.": [
  null,
  "Ce volume a été revendiqué par {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Le supprimer va briser cette demande et peut entraîner des problèmes avec les pods qui en dépendent."
 ],
 "This volume has not been claimed": [
  null,
  "Ce volume n’a pas été revendiqué"
 ],
 "Token": [
  null,
  "Jeton"
 ],
 "Topology": [
  null,
  "Topologie"
 ],
 "Triggers": [
  null,
  "Déclencheurs"
 ],
 "Troubleshoot": [
  null,
  "Troubleshoot"
 ],
 "Trust this certificate for this connection": [
  null,
  "Faites confiance à ce certificat pour cette connexion"
 ],
 "Type": [
  null,
  "Type"
 ],
 "Type:": [
  null,
  "Type :"
 ],
 "Unable to decode Kubernetes application manifest.": [
  null,
  "Impossible de décoder le manifeste d’application Kubernetes."
 ],
 "Unable to read the Kubernetes application manifest. Code $0.": [
  null,
  "Impossible de lire le manifeste de l’application Kubernetes. Code $0 ."
 ],
 "Unavailable": [
  null,
  "Non disponible"
 ],
 "Unknown": [
  null,
  "Inconnu"
 ],
 "Updating $0...": [
  null,
  "Mise à jour de $0 ..."
 ],
 "Used": [
  null,
  "Utilisé"
 ],
 "User": [
  null,
  "Utilisateur"
 ],
 "User or Group": [
  null,
  "Utilisateur ou groupe"
 ],
 "Username": [
  null,
  "Nom d’utilisateur"
 ],
 "Users": [
  null,
  "Utilisateurs"
 ],
 "Volume": [
  null,
  "Volume"
 ],
 "Volume ID": [
  null,
  "ID de volume"
 ],
 "Volume Name": [
  null,
  "Nom du volume"
 ],
 "Volume Type": [
  null,
  "Type de volume"
 ],
 "Volumes": [
  null,
  "Volumes"
 ],
 "Warning:": [
  null,
  "Attention :"
 ],
 "Welcome to the Image Registry": [
  null,
  "Bienvenue dans le registre d’images"
 ],
 "When": [
  null,
  "Quand"
 ],
 "Yes": [
  null,
  "Oui"
 ],
 "You can bypass the certificate check, but any data you send to the server could be intercepted by others.": [
  null,
  "Vous pouvez ignorer la vérification du certificat, mais toutes les données que vous envoyez au serveur peuvent être interceptées par d’autres personnes."
 ],
 "You can deploy an application to your cluster.": [
  null,
  "Vous pouvez déployer une application sur votre cluster."
 ],
 "Your login credentials do not give you access to use the docker registry from the command line.": [
  null,
  "Vos identifiants de connexion ne vous permettent pas d’utiliser le registre docker à partir de la ligne de commande."
 ],
 "eg: my-image-stream": [
  null,
  "ex : my-image-stream"
 ],
 "no": [
  null,
  "non"
 ],
 "none": [
  null,
  "aucun"
 ],
 "pending volume claims": [
  null,
  "demandes de volume en attente"
 ],
 "yes": [
  null,
  "oui"
 ]
}));
