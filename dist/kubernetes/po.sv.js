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
  "Drivrutin"
 ],
 "Empty Directory": [
  null,
  "Tom katalog"
 ],
 "Endpoint": [
  null,
  "Ändpunkt"
 ],
 "Endpoint Name": [
  null,
  "Ändpunktsnamn"
 ],
 "Endpoints": [
  null,
  "Ändpunkter"
 ],
 "Environment": [
  null,
  "Miljö"
 ],
 "Error getting certificate details: $0": [
  null,
  "Fel när certifikatdetaljer hämtades: $0"
 ],
 "Error writing kubectl config": [
  null,
  "Fel när konfiguration av kubectl skrevs"
 ],
 "Fibre Channel": [
  null,
  "Fiberkanal"
 ],
 "Filesystem Type": [
  null,
  "Filsystemstyp"
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
  "Flockers datamängdsnamn"
 ],
 "GCE Persistent Disk": [
  null,
  "GCE beständig disk"
 ],
 "Git Repository": [
  null,
  "Git-förråd"
 ],
 "Gluster FS": [
  null,
  "Gluster-FS"
 ],
 "GlusterFS": [
  null,
  "GlusterFS"
 ],
 "Grant additional push or admin access to specific members below.": [
  null,
  "Ge ytterligare push- eller admin-åtkomst till de specifika medlemmarna nedan."
 ],
 "Group Members": [
  null,
  "Gruppmedlemmar"
 ],
 "Group or Project": [
  null,
  "Grupp eller projekt"
 ],
 "Groups": [
  null,
  "Grupper"
 ],
 "Host": [
  null,
  "Värd"
 ],
 "Host Path": [
  null,
  "Värdsökväg"
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
  "Identiteter"
 ],
 "Identity": [
  null,
  "Identitet"
 ],
 "Image": [
  null,
  "Avbild"
 ],
 "Image ID": [
  null,
  "Avbilds-ID"
 ],
 "Image Name": [
  null,
  "Avbildsnamn"
 ],
 "Image Registry": [
  null,
  "Avbildsregister"
 ],
 "Image Stream": [
  null,
  "Avbildsström"
 ],
 "Image commands": [
  null,
  "Avbildskommandon"
 ],
 "Images": [
  null,
  "Avbilder"
 ],
 "Images by project": [
  null,
  "Avbilder per projekt"
 ],
 "Images pushed recently": [
  null,
  "Avbilder trycktes upp nyligen"
 ],
 "In order to begin pushing images to the registry, use the commands below.": [
  null,
  "För att börja trycka avbilder till registret, använd kommandona nedan."
 ],
 "In order to begin pushing images to the registry, you need to create a project.": [
  null,
  "För att börja trycka avbilder till registret behöver du skapa ett projekt."
 ],
 "Interface": [
  null,
  "Gränssnitt"
 ],
 "Kernel Version": [
  null,
  "Kärnversion"
 ],
 "Key Ring Path": [
  null,
  "Nyckelringssökväg"
 ],
 "Kubelet Version": [
  null,
  "Kubelet-version"
 ],
 "Kubernetes Cluster": [
  null,
  "Kubernetes-kluster"
 ],
 "Labels": [
  null,
  "Etiketter"
 ],
 "Last Heartbeat": [
  null,
  "Senaste hjärtslag"
 ],
 "Last Status Change": [
  null,
  "Senaste statusändring"
 ],
 "Latest Version": [
  null,
  "Senaste version"
 ],
 "Log into OpenShift command line tools:": [
  null,
  "Logga in till OpenShifts kommandoradsverktyg:"
 ],
 "Log into the registry:": [
  null,
  "Logga in i registret:"
 ],
 "Logical Unit Number": [
  null,
  "Logiskt enhetsnummer"
 ],
 "Login commands": [
  null,
  "Inloggningskommandon"
 ],
 "Logs": [
  null,
  "Loggar"
 ],
 "Machine ID": [
  null,
  "Makin-ID"
 ],
 "Manifest": [
  null,
  "Förteckning"
 ],
 "Medium": [
  null,
  "Medium"
 ],
 "Member of": [
  null,
  "Medlem i"
 ],
 "Members": [
  null,
  "Medlemmar"
 ],
 "Membership": [
  null,
  "Medlemskap"
 ],
 "Memory": [
  null,
  "Minne"
 ],
 "Memory Utilization: $0%": [
  null,
  "Minnesanvändning: $0 %"
 ],
 "Message": [
  null,
  "Meddelande"
 ],
 "Metadata": [
  null,
  "Metadata"
 ],
 "Modify": [
  null,
  "Modifiera"
 ],
 "Monitors": [
  null,
  "Övervakare"
 ],
 "Mount Location": [
  null,
  "Monteringsplats"
 ],
 "NFS": [
  null,
  "NFS"
 ],
 "NFS Mount": [
  null,
  "NFS-montering"
 ],
 "Name": [
  null,
  "Namn"
 ],
 "Namespace": [
  null,
  "Namnrymd"
 ],
 "Namespace cannot be empty.": [
  null,
  "Namnrymden får inte vara tom."
 ],
 "Network": [
  null,
  "Nätverk"
 ],
 "New Group": [
  null,
  "Ny grupp"
 ],
 "New Project": [
  null,
  "Nytt projekt"
 ],
 "New image stream": [
  null,
  "Ny avbildsström"
 ],
 "New project": [
  null,
  "Nytt projekt"
 ],
 "No": [
  null,
  "Nej"
 ],
 "No Pods are using this claim": [
  null,
  "Inga kapslar använder detta anspråk"
 ],
 "No Volume Bound": [
  null,
  "Ingen volymgräns"
 ],
 "No groups are present.": [
  null,
  "Inga grupper finns."
 ],
 "No images pushed": [
  null,
  "Inga avbilder trycktes"
 ],
 "No metadata file was selected. Please select a Kubernetes metadata file.": [
  null,
  "Ingen metadatafil valdes.  Välj en fil med Kubernetes metadata."
 ],
 "No nodes in cluster": [
  null,
  "Inga noder i klustret"
 ],
 "No pods deployed": [
  null,
  "Inga kapslar är utplacerade"
 ],
 "No pods replicated": [
  null,
  "Inga kapslar är replikerade"
 ],
 "No pods scheduled": [
  null,
  "Inga kapslar är schemalagda"
 ],
 "No pods selected": [
  null,
  "Inga kapslar är valda"
 ],
 "No projects are present.": [
  null,
  "Inga projekt finns."
 ],
 "No users are present.": [
  null,
  "Inga användare finns."
 ],
 "No volumes are present.": [
  null,
  "Inga volymer finns."
 ],
 "No volumes in use": [
  null,
  "Inga volymer används"
 ],
 "Node": [
  null,
  "Nod"
 ],
 "Nodes": [
  null,
  "Noder"
 ],
 "Nodes are the machines that run your containers.": [
  null,
  "Noder är maskinerna som kör dina behållare."
 ],
 "None": [
  null,
  "Inga"
 ],
 "Not Ready": [
  null,
  "Inte klar"
 ],
 "Not a valid number of replicas": [
  null,
  "Inte ett giltigt antal repliker"
 ],
 "Not a valid value for Host": [
  null,
  "Inte ett giltigt värde på värd"
 ],
 "Not deployed": [
  null,
  "Inte utplacerad"
 ],
 "OS": [
  null,
  "OS"
 ],
 "OS Versions": [
  null,
  "OS-versioner"
 ],
 "Operating System": [
  null,
  "Operativsystem"
 ],
 "Options": [
  null,
  "Alternativ"
 ],
 "Overview": [
  null,
  "Översikt"
 ],
 "PD Name": [
  null,
  "PD-namn"
 ],
 "Partition": [
  null,
  "Partition"
 ],
 "Password": [
  null,
  "Lösenord"
 ],
 "Path": [
  null,
  "Sökväg"
 ],
 "Pending Volume Claims": [
  null,
  "Väntande volymanspråk"
 ],
 "Persistent Volumes": [
  null,
  "Beständiga volymer"
 ],
 "Phase": [
  null,
  "Fas"
 ],
 "Please create another namespace for $0 \"$1\"": [
  null,
  "Skapa en annan namnrymd för $0 ”$1”"
 ],
 "Please provide a GlusterFS volume name": [
  null,
  "Ge ett GlusterFS-volymnamn"
 ],
 "Please provide a username": [
  null,
  "Ange ett användarnamn"
 ],
 "Please provide a valid NFS server": [
  null,
  "Ange en giltig NFS-server"
 ],
 "Please provide a valid address": [
  null,
  "Ange en giltig adress"
 ],
 "Please provide a valid filesystem type": [
  null,
  "Ange en giltig filsystemtyp"
 ],
 "Please provide a valid interface": [
  null,
  "Ange ett giltigt gränssnitt"
 ],
 "Please provide a valid logical unit number": [
  null,
  "Ange ett giltigt nummer på en logisk enhet"
 ],
 "Please provide a valid name": [
  null,
  "Ange ett giltigt namn"
 ],
 "Please provide a valid namespace.": [
  null,
  "Ange en giltig namnrymd."
 ],
 "Please provide a valid path": [
  null,
  "Ange en giltig sökväg"
 ],
 "Please provide a valid qualified name": [
  null,
  "Ange ett giltigt kvalificerat namn"
 ],
 "Please provide a valid storage capacity.": [
  null,
  "Ange en giltig lagringskapacitet."
 ],
 "Please provide a valid target": [
  null,
  "Ange ett giltigt mål"
 ],
 "Please select a valid access mode": [
  null,
  "Välj ett giltigt åtkomstläge"
 ],
 "Please select a valid endpoint": [
  null,
  "Välj en giltig slutpunkt"
 ],
 "Please select a valid policy option.": [
  null,
  "Välj ett giltigt policyalternativ."
 ],
 "Please type an address": [
  null,
  "Skriv en adress"
 ],
 "Pod": [
  null,
  "Kapsel"
 ],
 "Pod Address": [
  null,
  "Kapseladress"
 ],
 "Pod Endpoints": [
  null,
  "Kapseländpunkter"
 ],
 "Pod Replicated": [
  null,
  "Kapsel replikerad"
 ],
 "Pod Selector": [
  null,
  "Kapselväljare"
 ],
 "Pods": [
  null,
  "Kapslar"
 ],
 "Pods contain one or more containers that run together on a node, containing your application code.": [
  null,
  "Kapslar innehåller en eller flera behållare som kör tillsamans på en nod, och innehåller din programkod."
 ],
 "Pool Name": [
  null,
  "Poolnamn"
 ],
 "Populate": [
  null,
  "Populera"
 ],
 "Ports": [
  null,
  "Portar"
 ],
 "Private: Allow only specific users or groups to pull images": [
  null,
  "Privat: tillåt endast specifika användare eller grupper att hämta avbilder"
 ],
 "Project": [
  null,
  "Projekt"
 ],
 "Project Members": [
  null,
  "Projektmedlemmar"
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
  "Projektåtkomstpolicyn tillåter endast specifika medlemmar att komma åt avbilder."
 ],
 "Project:": [
  null,
  "Projekt:"
 ],
 "Projects": [
  null,
  "Projekt"
 ],
 "Proxy Version": [
  null,
  "Proxy-version"
 ],
 "Pull an image:": [
  null,
  "Hämta en avbild:"
 ],
 "Pull from": [
  null,
  "Hämta ifrån"
 ],
 "Pull specific tags from another image repository": [
  null,
  "Hämta specifika taggar från ett annat avbildsförråd"
 ],
 "Push an image:": [
  null,
  "Tryck ut en avbild:"
 ],
 "Qualified Name": [
  null,
  "Kvalificerat namn"
 ],
 "Rados Block Device": [
  null,
  "Rados-blockenhet"
 ],
 "Read Only": [
  null,
  "Skrivskyddad"
 ],
 "Read and write from a single node": [
  null,
  "Läs och skriv från en enstaka nod"
 ],
 "Read and write from multiple nodes": [
  null,
  "Läs och skriv från flera noder"
 ],
 "Read only from multiple nodes": [
  null,
  "Läs endast från flera noder"
 ],
 "Ready": [
  null,
  "Klar"
 ],
 "Reason": [
  null,
  "Orsak"
 ],
 "Reclaim Policy": [
  null,
  "Återvinningspolicy"
 ],
 "Reconnect": [
  null,
  "Återanslut"
 ],
 "Recycle": [
  null,
  "Återvinn"
 ],
 "Register": [
  null,
  "Registrera"
 ],
 "Register New Volume": [
  null,
  "Registrera en ny volym"
 ],
 "Register Persistent Volume": [
  null,
  "Registrera en beständig volym"
 ],
 "Remote registry is insecure": [
  null,
  "Fjärregistret är osäkert"
 ],
 "Remove": [
  null,
  "Ta bort"
 ],
 "Remove Group": [
  null,
  "Ta bort grupp"
 ],
 "Remove Member": [
  null,
  "Ta bort medlem"
 ],
 "Remove Role": [
  null,
  "Ta bort roll"
 ],
 "Remove User": [
  null,
  "Ta bort användare"
 ],
 "Remove image tag": [
  null,
  "Ta bort avbildstagg"
 ],
 "Remove membership": [
  null,
  "Ta bort medlemskap"
 ],
 "Replicas": [
  null,
  "Repliker"
 ],
 "Replication Controller": [
  null,
  "Replikeringsstyrare"
 ],
 "Replication Controllers": [
  null,
  "Replikeringsstyrare"
 ],
 "Replication controllers dynamically create instances of pods from templates, and remove pods when necessary.": [
  null,
  "Replikeringsstyrare skapar dynamiskt instanser av kapslar från mallar, och tar bort kapslar vid behov."
 ],
 "Repository URL": [
  null,
  "Förråds-URL"
 ],
 "Requested": [
  null,
  "Begärd"
 ],
 "Requests": [
  null,
  "Begäranden"
 ],
 "Requires Authentication": [
  null,
  "Begär autentisering"
 ],
 "Restart Count": [
  null,
  "Omstartsräknare"
 ],
 "Restart Policy": [
  null,
  "Omstartspolicy"
 ],
 "Retain": [
  null,
  "Behåll"
 ],
 "Revision": [
  null,
  "Revision"
 ],
 "Role": [
  null,
  "Roll"
 ],
 "Roles": [
  null,
  "Roller"
 ],
 "Route": [
  null,
  "Rutt"
 ],
 "Routes": [
  null,
  "Rutter"
 ],
 "Scheduled Pods": [
  null,
  "Schemalagda kapslar"
 ],
 "Scheduling Disabled": [
  null,
  "Schemaläggningen avaktiverad"
 ],
 "Secret": [
  null,
  "Hemlighet"
 ],
 "Secret File": [
  null,
  "Hemlig fil"
 ],
 "Secret Name": [
  null,
  "Hemligt namn"
 ],
 "Secret Volume": [
  null,
  "Hemlig volym"
 ],
 "Select Manifest File...": [
  null,
  "Välj förteckningsfil …"
 ],
 "Select Member": [
  null,
  "Välj medlem"
 ],
 "Select Role": [
  null,
  "Välj roll"
 ],
 "Select an object to see more details.": [
  null,
  "Välj ett objekt för att se fler detaljer."
 ],
 "Server": [
  null,
  "Server"
 ],
 "Service": [
  null,
  "Tjänst"
 ],
 "Service Account": [
  null,
  "Tjänstekonto"
 ],
 "Services": [
  null,
  "Tjänster"
 ],
 "Services group pods and provide a common DNS name and an optional, load-balanced IP address to access them.": [
  null,
  "Tjänster grupperar kapslar och tillhandahåller ett gemensamt DNS-namn och om så önskas en lastbalanserad IP-adress för att komma åt dem."
 ],
 "Session Affinity": [
  null,
  "Sessionsaffinitet"
 ],
 "Share Name": [
  null,
  "Delat namn"
 ],
 "Shared: Allow any authenticated user to pull images": [
  null,
  "Delat: tillåt alla autentiserade användare att hämta avbilder"
 ],
 "Shell": [
  null,
  "Skal"
 ],
 "Show all Containers": [
  null,
  "Visa alla behållare"
 ],
 "Show all Deployment Configs": [
  null,
  "Visa alla utplaceringskonfigurationer"
 ],
 "Show all Nodes": [
  null,
  "Visa alla noder"
 ],
 "Show all Persistent Volumes": [
  null,
  "Visa alla beständiga volymer"
 ],
 "Show all Pod Containers": [
  null,
  "Visa alla kapselbehållare"
 ],
 "Show all Pods": [
  null,
  "Visa alla kapslar"
 ],
 "Show all Projects": [
  null,
  "Visa alla projekt"
 ],
 "Show all Replication Controllers": [
  null,
  "Visa alla replikeringsstyrare"
 ],
 "Show all Routes": [
  null,
  "Visa alla rutter"
 ],
 "Show all Services": [
  null,
  "Visa alla tjänster"
 ],
 "Show all image streams": [
  null,
  "Visa alla avbildsströmmar"
 ],
 "Show all images": [
  null,
  "Visa alla avbilder"
 ],
 "Since": [
  null,
  "Sedan"
 ],
 "Size": [
  null,
  "Storlek"
 ],
 "Skip Certificate Verification": [
  null,
  "Hoppa över certifikatverifikation"
 ],
 "Sorry, I don't know how to modify this volume": [
  null,
  "Ledsen, jag vet inte hur man ändrar denna volym"
 ],
 "State": [
  null,
  "Tillstånd"
 ],
 "Status": [
  null,
  "Status"
 ],
 "Strategy": [
  null,
  "Strategi"
 ],
 "Sync all tags from a remote image repository": [
  null,
  "Synkronisera alla taggar från ett fjärravbildsförråd"
 ],
 "TLS Termination": [
  null,
  "TLS-avslutning"
 ],
 "Tags": [
  null,
  "Taggar"
 ],
 "Target": [
  null,
  "Mål"
 ],
 "Target Portal": [
  null,
  "Målportal"
 ],
 "Target World Wide Names": [
  null,
  "Målets världsvida namn"
 ],
 "Template": [
  null,
  "Mall"
 ],
 "The address contains invalid characters": [
  null,
  "Adressen innehåller otillåtna tecken"
 ],
 "The container '{{ target }}' does not exist.": [
  null,
  "Behållaren ”{{ target }}” finns inte."
 ],
 "The deployment config '{{ target }}' does not exist.": [
  null,
  "Utplaceringskonfigurationen ”{{ target }}” finns inte."
 ],
 "The group '{{ groupName }}' does not exist.": [
  null,
  "Gruppen ”{{ groupName }}” finns inte."
 ],
 "The maximum number of replicas is 128": [
  null,
  "Det maximala antalet repliker är 128"
 ],
 "The name contains invalid characters": [
  null,
  "Namnet innehåller ogiltiga tecken"
 ],
 "The node '{{ target }}' does not exist.": [
  null,
  "Noden ”{{ target }}” finns inte."
 ],
 "The node doesn't have enough disk space": [
  null,
  "Noden har inte tillräckligt med diskutrymme"
 ],
 "The node doesn't have enough free memory": [
  null,
  "Noden har inte tillräckligt med fritt minne"
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
  "Projektet ”{{ projName }}” finns inte."
 ],
 "The replication controller '{{ target }}' does not exist.": [
  null,
  "Replikeringsstyraren ”{{ target }}” finns inte."
 ],
 "The route '{{ target }}' does not exist.": [
  null,
  "Rutten ”{{ target }}” finns inte."
 ],
 "The selected file is not a valid Kubernetes application manifest.": [
  null,
  "Den valda filen är inte en giltig programförteckning för Kubernetes."
 ],
 "The server uses a certificate signed by an unknown authority.": [
  null,
  "Servern använder ett certifikat signerat av en okänd auktoritet."
 ],
 "The service '{{ target }}' does not exist.": [
  null,
  "Tjänsten ”{{ target }}” finns inte."
 ],
 "The user '{{ userName }}' does not exist.": [
  null,
  "Användaren ”{{ target }}” finns inte."
 ],
 "This claim is in use. Deleting it may cause issues with the following pod:": [
  null,
  "Detta anspråk används.  Att ta bort den kan orsaka problem med följande kapsel:"
 ],
 "This option is for single node testing only – local storage will not work in a multi-node cluster": [
  null,
  "Denna flagga är endast för test av enstaka noder — lokal lagring kommer inte fungera i ett flernodskluster"
 ],
 "This volume has been claimed by {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Deleting it will break that claim and may cause issues with any pods depending on it.": [
  null,
  "Denna volym har tagits i anspråk av {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}.  Att ta bort den kommer bryta detta anspråk och kan orsaka problem med de kapslar som beror på den."
 ],
 "This volume has not been claimed": [
  null,
  "Denna volym har inte tagits  anspråk"
 ],
 "Token": [
  null,
  "Symbol"
 ],
 "Topology": [
  null,
  "Topologi"
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
  "väntande volymanspråk"
 ],
 "yes": [
  null,
  ""
 ]
}));
