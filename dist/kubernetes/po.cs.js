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
nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2;
return plural;
},
  "language": "cs",
  "x-generator": "Zanata 4.6.2"
 },
 " 1\"Do you want to delete the following Nodes?": [
  null,
  "1\"Chcete smazat následující uzly?"
 ],
 "$0% Free": [
  "$0% Free",
  "$0% volný",
  "$0% volné",
  "$0% volných"
 ],
 "$0% Used": [
  "$0% Used",
  "$0% využitý",
  "$0% využité",
  "$0% využitých"
 ],
 "AWS Elastic Block Store": [
  null,
  "AWS Elastic blokové úložiště"
 ],
 "Access Modes": [
  null,
  "Režimy přístupu"
 ],
 "Access Policy": [
  null,
  "Politika přístupu"
 ],
 "Actual": [
  null,
  "Aktuální"
 ],
 "Add": [
  null,
  "Přidat"
 ],
 "Add Cluster Node": [
  null,
  "Přidat uzel clusteru"
 ],
 "Add Group": [
  null,
  "Přidat skupinu"
 ],
 "Add Kubernetes Node": [
  null,
  "Přidat uzel Kubernetes"
 ],
 "Add Member": [
  null,
  "Přidat člena"
 ],
 "Add Membership": [
  null,
  "Přidat členství"
 ],
 "Add New Cluster": [
  null,
  "Přidat nový cluster"
 ],
 "Add New User": [
  null,
  "Přidat nového uživatele"
 ],
 "Add Role": [
  null,
  "Přidat roli"
 ],
 "Add User": [
  null,
  "Přidat uživatele"
 ],
 "Add membership": [
  null,
  "Přidat členství"
 ],
 "Address": [
  null,
  "Adresa"
 ],
 "Addresses": [
  null,
  "Adresy"
 ],
 "Adjust": [
  null,
  "Upravit"
 ],
 "Adjust Persistent Volume '{{ item.metadata.name }}'": [
  null,
  "Upravit trvalý oddíl „{{ item.metadata.name }}“"
 ],
 "Adjust Replication Controller {{ item.metadata.name }}": [
  null,
  "Upravit řadič replikace {{ item.metadata.name }}"
 ],
 "Adjust Route": [
  null,
  "Upravit trasu"
 ],
 "Adjust Service": [
  null,
  "Upravit službu"
 ],
 "Admin": [
  null,
  "Správce"
 ],
 "All Projects": [
  null,
  "Všechny projekty"
 ],
 "All Types": [
  null,
  "Všechny typy"
 ],
 "All healthy": [
  null,
  "Všechny v pořádku"
 ],
 "All images": [
  null,
  "Všechny obrazy"
 ],
 "All in use": [
  null,
  "Všechny používané"
 ],
 "All running": [
  null,
  "Všechny spuštěné"
 ],
 "Annotations": [
  null,
  "Anotace"
 ],
 "Anonymous: Allow all unauthenticated users to pull images": [
  null,
  "Anonymní: Povolit i nepřihlášeným uživatelům stahovat obrazy"
 ],
 "Authentication": [
  null,
  "Ověření"
 ],
 "Azure": [
  null,
  "Azure"
 ],
 "Boot ID": [
  null,
  "Identif. zavádění"
 ],
 "CPU": [
  null,
  "Procesor"
 ],
 "CPU Utilization: $0%": [
  null,
  "Využití procesoru: $0%"
 ],
 "Cancel": [
  null,
  "Storno"
 ],
 "Capacity": [
  null,
  "Kapacita"
 ],
 "Ceph Filesystem Mount": [
  null,
  "Připojení souborového systému Ceph"
 ],
 "Ceph Monitors": [
  null,
  "Ceph monitory"
 ],
 "Change": [
  null,
  "Změnit"
 ],
 "Change User": [
  null,
  "Změnit uživatele"
 ],
 "Change image stream": [
  null,
  "Změnit proud obrazů"
 ],
 "Change project": [
  null,
  "Změnit projekt"
 ],
 "Cinder": [
  null,
  "Cinder"
 ],
 "Claim": [
  null,
  "Nárok"
 ],
 "Claim Name": [
  null,
  "Název nároku"
 ],
 "Client Certificate": [
  null,
  "Klientský certifikát"
 ],
 "Cluster": [
  null,
  "Cluster"
 ],
 "Configuration": [
  null,
  "Nastavení"
 ],
 "Configure Flannel networking": [
  null,
  "Nastavit síť Flannel"
 ],
 "Configure Kubelet and Proxy": [
  null,
  "Nastavit Kubelet a proxy"
 ],
 "Connect": [
  null,
  "Připojit"
 ],
 "Connecting...": [
  null,
  "Připojování…"
 ],
 "Connection Error": [
  null,
  "Chyba připojení"
 ],
 "Connection Error: $0": [
  null,
  "Chyba připojení: $0"
 ],
 "Connection Settings": [
  null,
  "Nastavení připojení"
 ],
 "Container": [
  null,
  "Kontejner"
 ],
 "Container ID": [
  null,
  "Identif. kontejneru"
 ],
 "Container Runtime Version": [
  null,
  "Verze běhového prostředí kontejneru"
 ],
 "Containers": [
  null,
  "Kontejnery"
 ],
 "Could not list services": [
  null,
  "Služby se nedaří vypsat"
 ],
 "Couldn't connect to server": [
  null,
  "Nedaří se připojit k serveru"
 ],
 "Couldn't find running API server": [
  null,
  "Nedaří se nalézt spuštěný server aplikačního programového rozhraní"
 ],
 "Create": [
  null,
  "Vytvořit"
 ],
 "Create empty image stream": [
  null,
  "Vytvořit prázdný proud obrazů"
 ],
 "Create image stream": [
  null,
  "Vytvořit proud obrazů"
 ],
 "Created": [
  null,
  "Vytvořeno"
 ],
 "DNS Policy": [
  null,
  "DNS zásada"
 ],
 "Delete": [
  null,
  "Smazat"
 ],
 "Delete Node": [
  null,
  "Smazat uzel"
 ],
 "Delete Persistent Volume": [
  null,
  "Smazat trvalý svazek"
 ],
 "Delete Persistent Volume Claim": [
  null,
  "Smazat nárok na trvalý svazek"
 ],
 "Delete Project": [
  null,
  "Smazat projekt"
 ],
 "Delete Selected": [
  null,
  "Smazat označené"
 ],
 "Delete image stream": [
  null,
  "Smazat proud obrazů"
 ],
 "Delete {{ item.kind }}": [
  null,
  "Smazat {{ item.kind }}"
 ],
 "Deleting a Pod will kill all associated containers. Pods may be automatically created again in some cases.": [
  null,
  "Smazání podu vynuceně ukončí všechny související kontejnery. Pody mohou být v některých případech znovu vytvořeny."
 ],
 "Deploy": [
  null,
  "Nasadit"
 ],
 "Deploy Application": [
  null,
  "Nasadit aplikaci"
 ],
 "Deployment Causes": [
  null,
  "Nasazení způsobí"
 ],
 "Deployment Config": [
  null,
  "Nastavení nasazení"
 ],
 "Deployment Configs": [
  null,
  "Nastavení nasazení"
 ],
 "Description": [
  null,
  "Popis"
 ],
 "Details": [
  null,
  "Podrobnosti"
 ],
 "Directory": [
  null,
  "Složka"
 ],
 "Disk": [
  null,
  "Disk"
 ],
 "Disk Utilization: $0%": [
  null,
  "Využití disku: $0%"
 ],
 "Display name": [
  null,
  "Zobrazovaný název"
 ],
 "Do you want to add the role '{{ fields.displayRole }}'?": [
  null,
  "Opravdu chcete přidat roli „{{ fields.displayRole }}“?"
 ],
 "Do you want to delete the '{{stream.metadata.namespace}}/{{stream.metadata.name}}' image stream?": [
  null,
  "Opravdu chcete smazat „{{stream.metadata.namespace}}/{{stream.metadata.name}}“ proud obrazů?"
 ],
 "Do you want to delete the Persistent Volume '{{item.metadata.name}}'?": [
  null,
  "Opravdu chcete smazat trvalý svazek „{{item.metadata.name}}“?"
 ],
 "Do you want to delete the Persistent Volume Claim '{{item.metadata.name}}'?": [
  null,
  "Opravdu chcete smazat nárok trvalého svazku „{{item.metadata.name}}'?"
 ],
 "Do you want to delete the {{ item.kind }} '{{item.metadata.name}}'?": [
  null,
  "Chcete smazat {{ item.kind }} „{{item.metadata.name}}“?"
 ],
 "Do you want to delete this Node?": [
  null,
  "Opravdu chcete tento uzel smazat?"
 ],
 "Do you want to remove the image tagged as '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?": [
  null,
  "Opravdu chcete odebrat obraz opatřený štítkem „{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}“?"
 ],
 "Do you want to remove the role '{{ fields.displayRole }}' from member {{ fields.member.metadata.name }}?": [
  null,
  "Opravdu chcete odebrat členovi {{ fields.member.metadata.name }} roli „{{ fields.displayRole }}“?"
 ],
 "Don't pull images automatically": [
  null,
  "Nestahovat obrazy automaticky"
 ],
 "Driver": [
  null,
  "Ovladač"
 ],
 "Empty Directory": [
  null,
  "Prázdná složka"
 ],
 "Endpoint": [
  null,
  "Koncový bod"
 ],
 "Endpoint Name": [
  null,
  "Název koncového bodu"
 ],
 "Endpoints": [
  null,
  "Koncové body"
 ],
 "Environment": [
  null,
  "Prostředí"
 ],
 "Error getting certificate details: $0": [
  null,
  "Chyba při získávání podrobností o certifikátu: $0"
 ],
 "Error writing kubectl config": [
  null,
  "Chyba při zapisování nastavení pro kubectl"
 ],
 "Fibre Channel": [
  null,
  "Fibre Channel"
 ],
 "Filesystem Type": [
  null,
  "Typ souborového systému"
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
  "Název Flocker datové sady"
 ],
 "GCE Persistent Disk": [
  null,
  "GCE trvalý disk"
 ],
 "Git Repository": [
  null,
  "Git repozitář"
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
  "Níže udělte další přístup pro nahrávání nebo správu konkrétním členům."
 ],
 "Group Members": [
  null,
  "Členové skupiny"
 ],
 "Group or Project": [
  null,
  "Skupina nebo projekt"
 ],
 "Groups": [
  null,
  "Skupiny"
 ],
 "Host": [
  null,
  "Počítač"
 ],
 "Host Path": [
  null,
  "Popis umístění hostitele"
 ],
 "IP": [
  null,
  "IP adresa"
 ],
 "ISCSI": [
  null,
  "iSCSI"
 ],
 "Identities": [
  null,
  "Identity"
 ],
 "Identity": [
  null,
  "Identita"
 ],
 "Image": [
  null,
  "Obraz"
 ],
 "Image ID": [
  null,
  "Identifikátor obrazu"
 ],
 "Image Name": [
  null,
  "Název obrazu"
 ],
 "Image Registry": [
  null,
  "Registr obrazů"
 ],
 "Image Stream": [
  null,
  "Proud obrazů"
 ],
 "Image commands": [
  null,
  "Příkazy obrazu"
 ],
 "Images": [
  null,
  "Obrazy"
 ],
 "Images by project": [
  null,
  "Obrazy podle projektů"
 ],
 "Images pushed recently": [
  null,
  "Nedávno nahrané obrazy"
 ],
 "In order to begin pushing images to the registry, use the commands below.": [
  null,
  "Pro zahájení nahrávání obrazů do registru použijte níže uvedené příkazy."
 ],
 "In order to begin pushing images to the registry, you need to create a project.": [
  null,
  "Pro zahájení nahrávání obrazů do registru je třeba vytvořit projekt."
 ],
 "Interface": [
  null,
  "Rozhraní"
 ],
 "Kernel Version": [
  null,
  "Verze jádra"
 ],
 "Key Ring Path": [
  null,
  "Popis umístění klíčenky"
 ],
 "Kubelet Version": [
  null,
  "Verze kubelet"
 ],
 "Kubernetes Cluster": [
  null,
  "Kubernetes cluster"
 ],
 "Labels": [
  null,
  "Štítky"
 ],
 "Last Heartbeat": [
  null,
  "Poslední kontrola"
 ],
 "Last Status Change": [
  null,
  "Poslední změna stavu"
 ],
 "Latest Version": [
  null,
  "Nejnovější verze"
 ],
 "Log into OpenShift command line tools:": [
  null,
  "Přihlášení do nástrojů pro příkazový řádek pro OpenShift:"
 ],
 "Log into the registry:": [
  null,
  "Přihlášení do registru:"
 ],
 "Logical Unit Number": [
  null,
  "Číslo logické jednotky"
 ],
 "Login commands": [
  null,
  "Přihlašovací příkazy"
 ],
 "Logs": [
  null,
  "Záznamy událostí"
 ],
 "Machine ID": [
  null,
  "Identif. stroje"
 ],
 "Manifest": [
  null,
  "Manifest"
 ],
 "Medium": [
  null,
  "Středně"
 ],
 "Member of": [
  null,
  "Členem"
 ],
 "Members": [
  null,
  "Členové"
 ],
 "Membership": [
  null,
  "Členství"
 ],
 "Memory": [
  null,
  "Paměť"
 ],
 "Memory Utilization: $0%": [
  null,
  "Využití paměti: $0%"
 ],
 "Message": [
  null,
  "Zpráva"
 ],
 "Metadata": [
  null,
  "Metadata"
 ],
 "Modify": [
  null,
  "Upravit"
 ],
 "Monitors": [
  null,
  "Monitory"
 ],
 "Mount Location": [
  null,
  "Připojit umístění"
 ],
 "NFS": [
  null,
  "NFS"
 ],
 "NFS Mount": [
  null,
  "NFS připojení"
 ],
 "Name": [
  null,
  "Název"
 ],
 "Namespace": [
  null,
  "Jmenný prostor"
 ],
 "Namespace cannot be empty.": [
  null,
  "Jmenný prostor je třeba vyplnit."
 ],
 "Network": [
  null,
  "Síť"
 ],
 "New Group": [
  null,
  "Nová skupina"
 ],
 "New Project": [
  null,
  "Nový projekt"
 ],
 "New image stream": [
  null,
  "Nový proud obrazů"
 ],
 "New project": [
  null,
  "Nový projekt"
 ],
 "No": [
  null,
  "Ne"
 ],
 "No Pods are using this claim": [
  null,
  "Tento nárok nepoužívají žádné pody"
 ],
 "No Volume Bound": [
  null,
  "Nenalezen žádný svazek"
 ],
 "No groups are present.": [
  null,
  "Nejsou přítomné žádné skupiny."
 ],
 "No images pushed": [
  null,
  "Nenahrány žádné obrazy"
 ],
 "No metadata file was selected. Please select a Kubernetes metadata file.": [
  null,
  "Nebyl vybrán žádný soubor s metadaty. Vyberte soubor s metadaty Kubernetes"
 ],
 "No nodes in cluster": [
  null,
  "Žádné uzly v clusteru"
 ],
 "No pods deployed": [
  null,
  "Nejsou nasazené žádné pody"
 ],
 "No pods replicated": [
  null,
  "Nejsou replikovány žádné pody"
 ],
 "No pods scheduled": [
  null,
  "Nejsou naplánovány žádné pody"
 ],
 "No pods selected": [
  null,
  "Nejsou vybrány žádné pody"
 ],
 "No projects are present.": [
  null,
  "Nejsou přítomné žádné projekty."
 ],
 "No users are present.": [
  null,
  "Nejsou přítomní žádní uživatelé"
 ],
 "No volumes are present.": [
  null,
  "Nejsou přítomné žádné svazky."
 ],
 "No volumes in use": [
  null,
  "Žádné svazky v používání"
 ],
 "Node": [
  null,
  "Uzel"
 ],
 "Nodes": [
  null,
  "Uzly"
 ],
 "Nodes are the machines that run your containers.": [
  null,
  "Uzly jsou stroje na kterých jsou spouštěné kontejnery."
 ],
 "None": [
  null,
  "Žádný"
 ],
 "Not Ready": [
  null,
  "Nepřipraveno"
 ],
 "Not a valid number of replicas": [
  null,
  "Neplatný počet replik"
 ],
 "Not a valid value for Host": [
  null,
  "Není platná hodnota pro stroj"
 ],
 "Not deployed": [
  null,
  "Nenasazeno"
 ],
 "OS": [
  null,
  "Operační systém"
 ],
 "OS Versions": [
  null,
  "Verze oper. systému"
 ],
 "Operating System": [
  null,
  "Operační systém"
 ],
 "Options": [
  null,
  "Přepínače"
 ],
 "Overview": [
  null,
  "Přehled"
 ],
 "PD Name": [
  null,
  "Název PD"
 ],
 "Partition": [
  null,
  "Oddíl"
 ],
 "Password": [
  null,
  "Heslo"
 ],
 "Path": [
  null,
  "Popis umístění"
 ],
 "Pending Volume Claims": [
  null,
  "Čekající požadavky svazku"
 ],
 "Persistent Volumes": [
  null,
  "Trvalé svazky"
 ],
 "Phase": [
  null,
  "Fáze"
 ],
 "Please create another namespace for $0 \"$1\"": [
  null,
  "Vytvořte jiný jmenný prostor pro $0 „$1“"
 ],
 "Please provide a GlusterFS volume name": [
  null,
  "Zadejte název GlusterFS svazku"
 ],
 "Please provide a username": [
  null,
  "Zadejte uživatelské jméno"
 ],
 "Please provide a valid NFS server": [
  null,
  "Zadejte platný NFS server"
 ],
 "Please provide a valid address": [
  null,
  "Zadejte platnou adresu"
 ],
 "Please provide a valid filesystem type": [
  null,
  "Zadejte platný typ souborového systému"
 ],
 "Please provide a valid interface": [
  null,
  "Zadejte platné rozhraní"
 ],
 "Please provide a valid logical unit number": [
  null,
  "Zadejte platné číslo logického svazku"
 ],
 "Please provide a valid name": [
  null,
  "Zadejte platný název"
 ],
 "Please provide a valid namespace.": [
  null,
  "Zadejte platný jmenný prostor."
 ],
 "Please provide a valid path": [
  null,
  "Zadejte platný popis umístění"
 ],
 "Please provide a valid qualified name": [
  null,
  "Zadejte platný kvalifikovaný název"
 ],
 "Please provide a valid storage capacity.": [
  null,
  "Zadejte platnou kapacitu úložiště."
 ],
 "Please provide a valid target": [
  null,
  "Zadejte platný cíl"
 ],
 "Please select a valid access mode": [
  null,
  "Zadejte platný přístupový režim"
 ],
 "Please select a valid endpoint": [
  null,
  "Zadejte platný koncový bod"
 ],
 "Please select a valid policy option.": [
  null,
  "Vyberte platnou volbu zásady."
 ],
 "Please type an address": [
  null,
  "Zadejte adresu"
 ],
 "Pod": [
  null,
  "Pod"
 ],
 "Pod Address": [
  null,
  "Adresa podu"
 ],
 "Pod Endpoints": [
  null,
  "Koncové body podu"
 ],
 "Pod Replicated": [
  null,
  "Replikovaný pod"
 ],
 "Pod Selector": [
  null,
  "Výběr podu"
 ],
 "Pods": [
  null,
  "Pody"
 ],
 "Pods contain one or more containers that run together on a node, containing your application code.": [
  null,
  "Pody obsahují jeden nebo více kontejnerů které jsou společně spuštěné na uzlu a obsahuje kód vaší aplikace."
 ],
 "Pool Name": [
  null,
  "Název fondu"
 ],
 "Populate": [
  null,
  "Osadit"
 ],
 "Ports": [
  null,
  "Porty"
 ],
 "Private: Allow only specific users or groups to pull images": [
  null,
  "Soukromé: umožnit nahrávat obrazy pouze konkrétním uživatelům či skupinám"
 ],
 "Project": [
  null,
  "Projekt"
 ],
 "Project Members": [
  null,
  "Členové projektu"
 ],
 "Project access policy allows anonymous users to pull images.": [
  null,
  "Zásada přístupu k projektu umožňuje nahrávat obrazy anonymním uživatelům."
 ],
 "Project access policy allows any authenticated user to pull images.": [
  null,
  "Zásada přístupu k projektu umožňuje nahrávat obrazy jakémukoli přihlášenému uživateli."
 ],
 "Project access policy only allows specific members to access images.": [
  null,
  "Zásada přístupu k projektu umožňuje k obrazům přistupovat pouze konkrétním členům."
 ],
 "Project:": [
  null,
  "Projekt:"
 ],
 "Projects": [
  null,
  "Projekty"
 ],
 "Proxy Version": [
  null,
  "Verze proxy"
 ],
 "Pull an image:": [
  null,
  "Stáhnout obraz:"
 ],
 "Pull from": [
  null,
  "Stáhnout z"
 ],
 "Pull specific tags from another image repository": [
  null,
  "Stáhnout konkrétní štítky z jiného repozitáře obrazů"
 ],
 "Push an image:": [
  null,
  "Nahrát obraz:"
 ],
 "Qualified Name": [
  null,
  "Kvalifikovaný název"
 ],
 "Rados Block Device": [
  null,
  "Rados blokové zařízení"
 ],
 "Read Only": [
  null,
  "Pouze pro čtení"
 ],
 "Read and write from a single node": [
  null,
  "Čtení a zápis z jednoho uzlu"
 ],
 "Read and write from multiple nodes": [
  null,
  "Čtení a zápis z vícero uzlů"
 ],
 "Read only from multiple nodes": [
  null,
  "Pouze čtení z vícero uzlů"
 ],
 "Ready": [
  null,
  "Připraveno"
 ],
 "Reason": [
  null,
  "Důvod"
 ],
 "Reclaim Policy": [
  null,
  "Zásada uvolňování"
 ],
 "Reconnect": [
  null,
  "Znovu připojit"
 ],
 "Recycle": [
  null,
  "Znovu využít"
 ],
 "Register": [
  null,
  "Zaregistrovat"
 ],
 "Register New Volume": [
  null,
  "Zaregistrovat nový svazek"
 ],
 "Register Persistent Volume": [
  null,
  "Zaregistrovat trvalý svazek"
 ],
 "Remote registry is insecure": [
  null,
  "Vzdálený registr není bezpečný"
 ],
 "Remove": [
  null,
  "Odebrat"
 ],
 "Remove Group": [
  null,
  "Odebrat skupinu"
 ],
 "Remove Member": [
  null,
  "Odebrat člena"
 ],
 "Remove Role": [
  null,
  "Odebrat roli"
 ],
 "Remove User": [
  null,
  "Odebrat uživatele"
 ],
 "Remove image tag": [
  null,
  "Odebrat štítek obrazu"
 ],
 "Remove membership": [
  null,
  "Odebrat člena"
 ],
 "Replicas": [
  null,
  "Repliky"
 ],
 "Replication Controller": [
  null,
  "Řadič replikace"
 ],
 "Replication Controllers": [
  null,
  "Řadiče replikace"
 ],
 "Replication controllers dynamically create instances of pods from templates, and remove pods when necessary.": [
  null,
  "Řadiče replikace dynamicky vytvářejí instance podů ze šablon a v případě nezbytnosti je také odebírají."
 ],
 "Repository URL": [
  null,
  "URL adresa repozitáře"
 ],
 "Requested": [
  null,
  "Požadováné"
 ],
 "Requests": [
  null,
  "Požadavky"
 ],
 "Requires Authentication": [
  null,
  "Vyžaduje ověření"
 ],
 "Restart Count": [
  null,
  "Počet restartů"
 ],
 "Restart Policy": [
  null,
  "Zásada restartu"
 ],
 "Retain": [
  null,
  "Zachovat"
 ],
 "Revision": [
  null,
  "Revize"
 ],
 "Role": [
  null,
  "Role"
 ],
 "Roles": [
  null,
  "Role"
 ],
 "Route": [
  null,
  "Trasa"
 ],
 "Routes": [
  null,
  "Trasy"
 ],
 "Scheduled Pods": [
  null,
  "Naplánované pody"
 ],
 "Scheduling Disabled": [
  null,
  "Plánování vypnuto."
 ],
 "Secret": [
  null,
  "Tajné"
 ],
 "Secret File": [
  null,
  "Tajný soubor"
 ],
 "Secret Name": [
  null,
  "Tajný název"
 ],
 "Secret Volume": [
  null,
  "Tajný svazek"
 ],
 "Select Manifest File...": [
  null,
  "Vybrat soubor s manifestem…"
 ],
 "Select Member": [
  null,
  "Vybrat člena"
 ],
 "Select Role": [
  null,
  "Vybrat roli"
 ],
 "Select an object to see more details.": [
  null,
  "Další podrobnosti získáte výběrem objektu."
 ],
 "Server": [
  null,
  "Server"
 ],
 "Service": [
  null,
  "Služba"
 ],
 "Service Account": [
  null,
  "Servisní účet"
 ],
 "Services": [
  null,
  "Služby"
 ],
 "Services group pods and provide a common DNS name and an optional, load-balanced IP address to access them.": [
  null,
  "Obsluhuje pody skupiny a poskytuje společný DNS název a volitelnou, zátěž rozkládající IP adresu pro přístup k nim."
 ],
 "Session Affinity": [
  null,
  "Přiřazení sezení"
 ],
 "Share Name": [
  null,
  "Název sdílení"
 ],
 "Shared: Allow any authenticated user to pull images": [
  null,
  "Sdílené: umožnit libovolnému přihlášenému uživateli nahrávat obrazy"
 ],
 "Shell": [
  null,
  "Shell"
 ],
 "Show all Containers": [
  null,
  "Zobrazit všechny kontejnery"
 ],
 "Show all Deployment Configs": [
  null,
  "Zobrazit všechna nastavení pro nasazení"
 ],
 "Show all Nodes": [
  null,
  "Zobrazit všechny uzly"
 ],
 "Show all Persistent Volumes": [
  null,
  "Zobrazit všechny trvalé svazky"
 ],
 "Show all Pod Containers": [
  null,
  "Zobrazit všechny kontejnery podu"
 ],
 "Show all Pods": [
  null,
  "Zobrazit všechny pody"
 ],
 "Show all Projects": [
  null,
  "Zobrazit všechny projekty"
 ],
 "Show all Replication Controllers": [
  null,
  "Zobrazit všechny řadiče replikace"
 ],
 "Show all Routes": [
  null,
  "Zobrazit všechny trasy"
 ],
 "Show all Services": [
  null,
  "Zobrazit všechny služby"
 ],
 "Show all image streams": [
  null,
  "Zobrazit všechny proudy obrazů"
 ],
 "Show all images": [
  null,
  "Zobrazit všechny obrazy"
 ],
 "Since": [
  null,
  "Od"
 ],
 "Size": [
  null,
  "Velikost"
 ],
 "Skip Certificate Verification": [
  null,
  "Přeskočit ověřování certifikátu"
 ],
 "Sorry, I don't know how to modify this volume": [
  null,
  "Je nám líto, ale není známo, jak upravit tento svazek"
 ],
 "State": [
  null,
  "Stav"
 ],
 "Status": [
  null,
  "Stav"
 ],
 "Strategy": [
  null,
  "Strategie"
 ],
 "Sync all tags from a remote image repository": [
  null,
  "Synchronizovat všechny štítky ze vzdáleného repozitáře obrazů"
 ],
 "TLS Termination": [
  null,
  "TLS ukončení"
 ],
 "Tags": [
  null,
  "Šítky"
 ],
 "Target": [
  null,
  "Cíl"
 ],
 "Target Portal": [
  null,
  "Cílový portál"
 ],
 "Target World Wide Names": [
  null,
  "World Wide názvy cíle"
 ],
 "Template": [
  null,
  "Šablona"
 ],
 "The address contains invalid characters": [
  null,
  "Adresa obsahuje neplatné znaky"
 ],
 "The container '{{ target }}' does not exist.": [
  null,
  "Kontejner „{{ target }}“ neexistuje."
 ],
 "The deployment config '{{ target }}' does not exist.": [
  null,
  "Nastavení nasazení „{{ target }}“ neexistuje."
 ],
 "The group '{{ groupName }}' does not exist.": [
  null,
  "Skupina „{{ groupName }}“ neexistuje."
 ],
 "The maximum number of replicas is 128": [
  null,
  "Nejvyšší možný počet replik je 128"
 ],
 "The name contains invalid characters": [
  null,
  "Název obsahuje neplatné znaky"
 ],
 "The node '{{ target }}' does not exist.": [
  null,
  "Uzel „{{ target }}“ neexistuje."
 ],
 "The node doesn't have enough disk space": [
  null,
  "Na disku tohoto uzlu není dostatek prostoru"
 ],
 "The node doesn't have enough free memory": [
  null,
  "Uzel nemá dostatek volné paměti"
 ],
 "The persistent volume '{{ target }}' does not exist.": [
  null,
  "Trvalý svazek „{{ target }}“ neexistuje."
 ],
 "The pod '{{ target }}' does not exist.": [
  null,
  "Pod „{{ target }}“ neexistuje."
 ],
 "The project '{{ projName }}' does not exist.": [
  null,
  "Projekt „{{ projName }}“ neexistuje."
 ],
 "The replication controller '{{ target }}' does not exist.": [
  null,
  "Řadič replikace „{{ target }}“ neexistuje."
 ],
 "The route '{{ target }}' does not exist.": [
  null,
  "Trasa „{{ target }}“ neexistuje."
 ],
 "The selected file is not a valid Kubernetes application manifest.": [
  null,
  "Vybraný soubor není platným Kubernetes manifestem aplikace."
 ],
 "The server uses a certificate signed by an unknown authority.": [
  null,
  "Server používá certifikát podepsaný neznámou autoritou."
 ],
 "The service '{{ target }}' does not exist.": [
  null,
  "Služba „{{ target }}“ neexistuje."
 ],
 "The user '{{ userName }}' does not exist.": [
  null,
  "Uživatel „{{ userName }}“ neexistuje."
 ],
 "This claim is in use. Deleting it may cause issues with the following pod:": [
  null,
  "Tento nárok je používán. Smazání může způsobit problémy s následujícím podem:"
 ],
 "This option is for single node testing only – local storage will not work in a multi-node cluster": [
  null,
  "Tato volba je určena pouze pro zkoušení s jedním uzlem – místní úložiště nebude fungovat v clusteru s více uzly"
 ],
 "This volume has been claimed by {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Deleting it will break that claim and may cause issues with any pods depending on it.": [
  null,
  "Tento svazek byl nárokován {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Jeho smazání tento nárok rozbije a může způsobit problémy s jakýmikoli pody, které na něm závisejí."
 ],
 "This volume has not been claimed": [
  null,
  "Tento svazek nebyl nárokován"
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
  "Spouštěče"
 ],
 "Troubleshoot": [
  null,
  "Řešit potíže"
 ],
 "Trust this certificate for this connection": [
  null,
  "Pro toto spojení certifikátu věřit"
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
  "Nedaří se dekódovat Kubernetes manifest aplikace."
 ],
 "Unable to read the Kubernetes application manifest. Code $0.": [
  null,
  "Nedaří se číst Kubernetes manifest aplikace. Kód $0."
 ],
 "Unavailable": [
  null,
  "Nedostupné"
 ],
 "Unknown": [
  null,
  "Neznámé"
 ],
 "Updating $0...": [
  null,
  "Aktualizace $0…"
 ],
 "Used": [
  null,
  "Využito"
 ],
 "User": [
  null,
  "Uživatel"
 ],
 "User or Group": [
  null,
  "Uživatel nebo skupina"
 ],
 "Username": [
  null,
  "Uživatelské jméno"
 ],
 "Users": [
  null,
  "Uživatelé"
 ],
 "Volume": [
  null,
  "Svazek"
 ],
 "Volume ID": [
  null,
  "Identif. svazku"
 ],
 "Volume Name": [
  null,
  "Název svazku"
 ],
 "Volume Type": [
  null,
  "Typ svazku"
 ],
 "Volumes": [
  null,
  "Svazky"
 ],
 "Warning:": [
  null,
  "Varování:"
 ],
 "Welcome to the Image Registry": [
  null,
  "Vítejte v registru obrazů"
 ],
 "When": [
  null,
  "Kdy"
 ],
 "Yes": [
  null,
  "Ano"
 ],
 "You can bypass the certificate check, but any data you send to the server could be intercepted by others.": [
  null,
  "Ověření certifikátu sice je možné obejít, pak ale všechna data, která pošlete serveru, mohou být kýmkoli zachycena."
 ],
 "You can deploy an application to your cluster.": [
  null,
  "Aplikaci je možné nasadit na váš cluster."
 ],
 "Your login credentials do not give you access to use the docker registry from the command line.": [
  null,
  "Vaše přihlašovací údaje vám nedávají přístup k použití docker registru z příkazového řádku."
 ],
 "eg: my-image-stream": [
  null,
  "např.: muj-proud-obrazu"
 ],
 "no": [
  null,
  "ne"
 ],
 "none": [
  null,
  "nic"
 ],
 "pending volume claims": [
  null,
  "čekající nároky na svazky"
 ],
 "yes": [
  null,
  "ano"
 ]
}));
