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
  "language": "fi",
  "x-generator": "Zanata 4.5.0"
 },
 " 1\"Do you want to delete the following Nodes?": [
  null,
  " 1\"Haluatko varmasti poistaa seuraavat Nodet?"
 ],
 " or drag & drop.": [
  null,
  ""
 ],
 "$0% Free": [
  "$0% Free",
  "$0% Vapaana",
  "$0% Vapaana"
 ],
 "$0% Used": [
  "$0% Used",
  "$0% Käytetty",
  "$0% Käytetty"
 ],
 "AWS Elastic Block Store": [
  null,
  "AWS Elastic Block Store"
 ],
 "Access Modes": [
  null,
  ""
 ],
 "Access Policy": [
  null,
  "Pääsykäytäntö"
 ],
 "Actual": [
  null,
  "Todellinen"
 ],
 "Add": [
  null,
  "Lisää"
 ],
 "Add Cluster Node": [
  null,
  "Lisää Klusteri-Node"
 ],
 "Add Group": [
  null,
  "Lisää ryhmä"
 ],
 "Add Kubernetes Node": [
  null,
  "Lisää Kubernetes-Node"
 ],
 "Add Member": [
  null,
  "Lisää jäsen"
 ],
 "Add Membership": [
  null,
  "Lisää jäsenyys"
 ],
 "Add New Cluster": [
  null,
  "Lisää uusi klusteri"
 ],
 "Add New User": [
  null,
  "Lisää uusi käyttäjä"
 ],
 "Add Role": [
  null,
  "Lisää rooli"
 ],
 "Add User": [
  null,
  "Lisää käyttäjä"
 ],
 "Add membership": [
  null,
  "Lisää jäsenyys"
 ],
 "Address": [
  null,
  "Osoite"
 ],
 "Addresses": [
  null,
  "Osoitteet"
 ],
 "Adjust": [
  null,
  "Säädä"
 ],
 "Adjust Persistent Volume '{{ item.metadata.name }}'": [
  null,
  "Uusi Persistent Volume '{{ item.metadata.name }}'"
 ],
 "Adjust Replication Controller {{ item.metadata.name }}": [
  null,
  "Säädä Replication Controller {{ item.metadata.name }}"
 ],
 "Adjust Route": [
  null,
  "Säädä reittiä"
 ],
 "Adjust Service": [
  null,
  "Säädä palvelua"
 ],
 "Admin": [
  null,
  "Ylläpito"
 ],
 "All Projects": [
  null,
  "Kaikki projektit"
 ],
 "All Types": [
  null,
  "Kaikki tyypit"
 ],
 "All healthy": [
  null,
  "Kaikki kunnossa"
 ],
 "All images": [
  null,
  "Kaikki levykuvat"
 ],
 "All in use": [
  null,
  "Kaikki käytössä olevat"
 ],
 "All running": [
  null,
  "Kaikki käynnissä"
 ],
 "Annotations": [
  null,
  "Annotaatiot"
 ],
 "Anonymous: Allow all unauthenticated users to pull images": [
  null,
  "Anonyymi: Salli kaikkien tunnistautumattomien käyttäjien ottaa levykuvia"
 ],
 "Authentication": [
  null,
  "Tunnistautuminen"
 ],
 "Azure": [
  null,
  "Azure"
 ],
 "Boot ID": [
  null,
  "Boot ID"
 ],
 "Bus": [
  null,
  ""
 ],
 "CPU": [
  null,
  "Prosessori"
 ],
 "CPU Utilization: $0%": [
  null,
  "Prosessorin käyttöaste: $0%"
 ],
 "Cancel": [
  null,
  "Peru"
 ],
 "Capacity": [
  null,
  "Koko"
 ],
 "Ceph Filesystem Mount": [
  null,
  ""
 ],
 "Ceph Monitors": [
  null,
  "Ceph-monitorit"
 ],
 "Change": [
  null,
  "Vaihda"
 ],
 "Change User": [
  null,
  "Vaihda käyttäjä"
 ],
 "Change image stream": [
  null,
  "Vaihda image stream"
 ],
 "Change project": [
  null,
  "Vaihda projekti"
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
  "Asiakasvarmenne"
 ],
 "Cluster": [
  null,
  "Klusteri"
 ],
 "Configuration": [
  null,
  "Asetukset"
 ],
 "Configure Flannel networking": [
  null,
  "Muokkaa Flannel-verkotusta"
 ],
 "Configure Kubelet and Proxy": [
  null,
  "Aseta Kubelet ja välityspalvelin"
 ],
 "Connect": [
  null,
  "Yhdistä"
 ],
 "Connecting...": [
  null,
  "Yhdistetään..."
 ],
 "Connection Error": [
  null,
  "Yhteysvirhe"
 ],
 "Connection Error: $0": [
  null,
  "Yhteysvirhe: $0"
 ],
 "Connection Settings": [
  null,
  "Yhteysasetukset"
 ],
 "Container": [
  null,
  "Kontti"
 ],
 "Container ID": [
  null,
  "Kontti-ID"
 ],
 "Container Runtime Version": [
  null,
  "Kontin Runtime-versio"
 ],
 "Containers": [
  null,
  "Kontit"
 ],
 "Could not list services": [
  null,
  "Ei voitu listata palveluita"
 ],
 "Couldn't connect to server": [
  null,
  "Ei saatu yhteyttä palvelimeen"
 ],
 "Couldn't find running API server": [
  null,
  "Ei löydetty käynnissä olevaa API-palvelinta"
 ],
 "Create": [
  null,
  "Luo"
 ],
 "Create Virtual Machine": [
  null,
  "Luo virtuaalikone"
 ],
 "Create empty image stream": [
  null,
  "Luo tyhjä image stream"
 ],
 "Create image stream": [
  null,
  ""
 ],
 "Created": [
  null,
  "Luotu"
 ],
 "DNS Policy": [
  null,
  "DNS-käytäntö"
 ],
 "Delete": [
  null,
  "Poista"
 ],
 "Delete Node": [
  null,
  "Poista Node"
 ],
 "Delete Persistent Volume": [
  null,
  "Poista Persistent Volume"
 ],
 "Delete Persistent Volume Claim": [
  null,
  "Poista Persistent Volume Claim"
 ],
 "Delete Project": [
  null,
  "Poista projekti"
 ],
 "Delete Selected": [
  null,
  "Poista valittu"
 ],
 "Delete image stream": [
  null,
  "Poista image stream"
 ],
 "Delete {{ item.kind }}": [
  null,
  "Poista {{ item.kind }}"
 ],
 "Deleting a Pod will kill all associated containers. Pods may be automatically created again in some cases.": [
  null,
  "Podin poistaminen tulee tappamaan kaikki liittyvät kontit. Podit voidaan luoda uudestaan automaattisesti joissain tilanteissa."
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
  "Kuvaus"
 ],
 "Details": [
  null,
  "Yksityiskohdat"
 ],
 "Device": [
  null,
  "Laite"
 ],
 "Directory": [
  null,
  "Hakemisto"
 ],
 "Disk": [
  null,
  "Levy"
 ],
 "Disk Utilization: $0%": [
  null,
  "Levyn käyttöaste: $0%"
 ],
 "Disks": [
  null,
  "Levyt"
 ],
 "Display name": [
  null,
  "Näytä nimi"
 ],
 "Do you want to add the role '{{ fields.displayRole }}'?": [
  null,
  "Haluatko lisätä roolin '{{ fields.displayRole }}'?"
 ],
 "Do you want to delete the '{{stream.metadata.namespace}}/{{stream.metadata.name}}' image stream?": [
  null,
  "Haluatko tuhota '{{stream.metadata.namespace}}/{{stream.metadata.name}}' -image streamin?"
 ],
 "Do you want to delete the Persistent Volume '{{item.metadata.name}}'?": [
  null,
  "Haluatko tuhota Persistent Volumen '{{item.metadata.name}}'?"
 ],
 "Do you want to delete the Persistent Volume Claim '{{item.metadata.name}}'?": [
  null,
  "Haluatko tuhota Persistent Volume Claimin '{{item.metadata.name}}'?"
 ],
 "Do you want to delete the {{ item.kind }} '{{item.metadata.name}}'?": [
  null,
  "Haluatko tuhota {{ item.kind }} '{{item.metadata.name}}'?"
 ],
 "Do you want to delete this Node?": [
  null,
  "Haluatko tuhota tämän Noden?"
 ],
 "Do you want to remove the image tagged as '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?": [
  null,
  "Haluatko tuhota levykuvan, joka on merkitty '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?"
 ],
 "Do you want to remove the role '{{ fields.displayRole }}' from member {{ fields.member.metadata.name }}?": [
  null,
  "Haluatko poistaa roolin '{{ fields.displayRole }}' jäseneltä {{ fields.member.metadata.name }}?"
 ],
 "Don't pull images automatically": [
  null,
  "Älä hae levykuvia automaattisesti"
 ],
 "Driver": [
  null,
  "Ajuri"
 ],
 "Drop file here to upload.": [
  null,
  "Pudosta tiedosto tähän lähettääksesi."
 ],
 "Empty Directory": [
  null,
  "Tyhjä hakemisto"
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
  "Ympäristö"
 ],
 "Error getting certificate details: $0": [
  null,
  "Virhe haettaessa varmenteen yksityiskohtia: $0"
 ],
 "Error writing kubectl config": [
  null,
  "Virhe kirjoittaessa kubectl config"
 ],
 "Fibre Channel": [
  null,
  "Fibre-kanava"
 ],
 "Filesystem Type": [
  null,
  "Tiedostojärjestelmän tyyppi"
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
  "Flocker Datasetin Nimi"
 ],
 "Free": [
  null,
  "Vapaa"
 ],
 "GCE Persistent Disk": [
  null,
  "GCE Persistent Disk"
 ],
 "GiB": [
  null,
  "GiB"
 ],
 "Git Repository": [
  null,
  "Git-tietovarasto"
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
  "Myönnä lisäoikeuksia (push tai admin) tietyille jäsenille alla."
 ],
 "Group Members": [
  null,
  "Ryhmän jäsenet"
 ],
 "Group or Project": [
  null,
  "Ryhmä tai projekti"
 ],
 "Groups": [
  null,
  "Ryhmät"
 ],
 "Host": [
  null,
  "Kone"
 ],
 "Host Path": [
  null,
  "Koneen polku"
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
  "Tunnisteet:"
 ],
 "Identity": [
  null,
  "Identiteetti"
 ],
 "Image": [
  null,
  "Levykuva"
 ],
 "Image ID": [
  null,
  "Levykuvan ID"
 ],
 "Image Name": [
  null,
  "Levykuvan nimi"
 ],
 "Image Registry": [
  null,
  "Levykuvahakemisto"
 ],
 "Image Stream": [
  null,
  "Image Stream"
 ],
 "Image commands": [
  null,
  "Levykuvan komennot"
 ],
 "Images": [
  null,
  "Levykuvat"
 ],
 "Images by project": [
  null,
  "Levykuvat projektien mukaan"
 ],
 "Images pushed recently": [
  null,
  "Viimeksi tuotuja levykuvia"
 ],
 "In order to begin pushing images to the registry, use the commands below.": [
  null,
  "Aloittaaksesi levykuvien tuomisen rekisteriin, käytä alla olevia komentoja."
 ],
 "In order to begin pushing images to the registry, you need to create a project.": [
  null,
  "Aloittaaksesi levykuvien tuomisen rekisteriin, sinun tulee luoda projekti."
 ],
 "Interface": [
  null,
  "Liitäntä"
 ],
 "Kernel Version": [
  null,
  "Kernel-versio"
 ],
 "Key Ring Path": [
  null,
  "Key Ring Path"
 ],
 "Kubelet Version": [
  null,
  "Kubelet-versio"
 ],
 "Kubernetes Cluster": [
  null,
  "Kubernetes-klusteri"
 ],
 "Labels": [
  null,
  ""
 ],
 "Labels:": [
  null,
  ""
 ],
 "Last Heartbeat": [
  null,
  "Edellinen Heartbeat"
 ],
 "Last Status Change": [
  null,
  "Edellinen tilamuutos"
 ],
 "Latest Version": [
  null,
  "Viimeisin versio"
 ],
 "Log into OpenShift command line tools:": [
  null,
  "Kirjaudu OpenShiftin komentorivityökaluihin:"
 ],
 "Log into the registry:": [
  null,
  "Kirjaudu rekisteriin:"
 ],
 "Logical Unit Number": [
  null,
  "Looginen yksikön numero"
 ],
 "Login commands": [
  null,
  "Kirjautumiskomennot"
 ],
 "Logs": [
  null,
  "Lokit"
 ],
 "Machine ID": [
  null,
  "Koneen ID"
 ],
 "Manifest": [
  null,
  ""
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
  "Jäsenet"
 ],
 "Membership": [
  null,
  "Jäsenyys"
 ],
 "Memory": [
  null,
  "Muisti"
 ],
 "Memory Utilization: $0%": [
  null,
  "Muistin käyttö: $0%"
 ],
 "Memory:": [
  null,
  "Muisti:"
 ],
 "Message": [
  null,
  "Viesti"
 ],
 "Metadata": [
  null,
  ""
 ],
 "Modify": [
  null,
  "Muokkaa"
 ],
 "Monitors": [
  null,
  ""
 ],
 "Mount Location": [
  null,
  "Liitossijainti"
 ],
 "N/A": [
  null,
  ""
 ],
 "NFS": [
  null,
  "NFS"
 ],
 "NFS Mount": [
  null,
  "NFS-liitos"
 ],
 "Name": [
  null,
  "Nimi"
 ],
 "Namespace": [
  null,
  "Nimiavaruus"
 ],
 "Namespace cannot be empty.": [
  null,
  ""
 ],
 "Network": [
  null,
  "Verkko"
 ],
 "New Group": [
  null,
  "Uusi ryhmä"
 ],
 "New Project": [
  null,
  "Uusi projekti"
 ],
 "New image stream": [
  null,
  ""
 ],
 "New project": [
  null,
  "Uusi projekti"
 ],
 "No": [
  null,
  ""
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
  "Tälle virtuaalikoneelle ei ole määritetty levyjä."
 ],
 "No groups are present.": [
  null,
  "Ryhmiä ei ole läsnä."
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
  "Ei nodeja klusterissa"
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
  "Podeja ei ole aikataulutettu"
 ],
 "No pods selected": [
  null,
  "Podeja ei ole valittu"
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
  "Ei virtuaalikoneita"
 ],
 "No volumes are present.": [
  null,
  "Taltioita ei ole läsnä."
 ],
 "No volumes in use": [
  null,
  "Taltioita ei ole käytössä"
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
  "Noodit"
 ],
 "Nodes are the machines that run your containers.": [
  null,
  "Noodit ovat konttejasi suorittavia koneita."
 ],
 "None": [
  null,
  ""
 ],
 "Not Available": [
  null,
  "Ei saatavilla"
 ],
 "Not Ready": [
  null,
  "Ei valmiina"
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
  "Käyttöjärjestelmä"
 ],
 "OS Versions": [
  null,
  "Käyttöjärjestelmäversiot"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "Only files of size $0 MiB and less are supported": [
  null,
  ""
 ],
 "Operating System": [
  null,
  "Käyttöjärjestelmä"
 ],
 "Options": [
  null,
  "Valinnat"
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
  "Osio"
 ],
 "Password": [
  null,
  "Salasana"
 ],
 "Paste JSON below, ": [
  null,
  ""
 ],
 "Path": [
  null,
  "Polku"
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
  "Anna GlusterFS-taltion nimi"
 ],
 "Please provide a username": [
  null,
  ""
 ],
 "Please provide a valid NFS server": [
  null,
  "Anna kelvollinen NFS-palvelin"
 ],
 "Please provide a valid address": [
  null,
  "Anna kelvollinen osoite"
 ],
 "Please provide a valid filesystem type": [
  null,
  "Anna kelvollinen tiedostojärjestelmän tyyppi"
 ],
 "Please provide a valid interface": [
  null,
  "Anna kelvollinen liitäntä"
 ],
 "Please provide a valid logical unit number": [
  null,
  "Anna kelvollinen loogisen yksikön numero"
 ],
 "Please provide a valid name": [
  null,
  "Anna kelvollinen nimi"
 ],
 "Please provide a valid namespace.": [
  null,
  "Anna kelvollinen nimiavaruus."
 ],
 "Please provide a valid path": [
  null,
  "Anna kelvollinen polku"
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
  "Valitse kelvollinen käytäntövalinta."
 ],
 "Please type an address": [
  null,
  "Anna osoite"
 ],
 "Pod": [
  null,
  "Pod"
 ],
 "Pod Address": [
  null,
  "Podin osoite"
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
  "Pod:"
 ],
 "Pods": [
  null,
  "Podit"
 ],
 "Pods contain one or more containers that run together on a node, containing your application code.": [
  null,
  "Podit sisältävät yhden tai useamman nodessa yhdessä toimivan kontin, ja ne sisältävät sovelluksesi koodin."
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
  "Portit"
 ],
 "Private: Allow only specific users or groups to pull images": [
  null,
  ""
 ],
 "Project": [
  null,
  "Projekti"
 ],
 "Project Members": [
  null,
  "Projektin jäsenet"
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
  "Projekti:"
 ],
 "Projects": [
  null,
  "Projektit"
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
  "Rados-lohkolaite"
 ],
 "Read Only": [
  null,
  "Vain luku"
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
 "Readonly": [
  null,
  ""
 ],
 "Ready": [
  null,
  "Valmis"
 ],
 "Reason": [
  null,
  "Syy"
 ],
 "Reclaim Policy": [
  null,
  ""
 ],
 "Reconnect": [
  null,
  "Yhdistä uudelleen"
 ],
 "Recycle": [
  null,
  ""
 ],
 "Register": [
  null,
  "Rekisteröi"
 ],
 "Register New Volume": [
  null,
  "Rekisteröi uusi taltio"
 ],
 "Register Persistent Volume": [
  null,
  ""
 ],
 "Remote registry is insecure": [
  null,
  "Etärekisteri on turvaton"
 ],
 "Remove": [
  null,
  "Poista"
 ],
 "Remove Group": [
  null,
  "Poista ryhmä"
 ],
 "Remove Member": [
  null,
  "Poista jäsen"
 ],
 "Remove Role": [
  null,
  "Poista rooli"
 ],
 "Remove User": [
  null,
  "Poista käyttäjä"
 ],
 "Remove image tag": [
  null,
  ""
 ],
 "Remove membership": [
  null,
  "Poista jäsenyys"
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
  "Vaatii tunnistautumisen"
 ],
 "Resolve above errors to continue": [
  null,
  ""
 ],
 "Restart Count": [
  null,
  "Uudelleenkäynnistysten lukumäärä"
 ],
 "Restart Policy": [
  null,
  "Uudelleenkäynnistyksen käytäntö"
 ],
 "Retain": [
  null,
  ""
 ],
 "Revision": [
  null,
  ""
 ],
 "Role": [
  null,
  "Rooli"
 ],
 "Roles": [
  null,
  "Roolit"
 ],
 "Route": [
  null,
  "Reitti"
 ],
 "Routes": [
  null,
  "Reitit"
 ],
 "Scheduled Pods": [
  null,
  "Aikataulutetut podit"
 ],
 "Scheduling Disabled": [
  null,
  "Aikataulus poistettu käytöstä"
 ],
 "Secret": [
  null,
  ""
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
  "Palvelin"
 ],
 "Service": [
  null,
  "Palvelu"
 ],
 "Service Account": [
  null,
  "Palvelutili"
 ],
 "Services": [
  null,
  "Palvelut"
 ],
 "Services group pods and provide a common DNS name and an optional, load-balanced IP address to access them.": [
  null,
  ""
 ],
 "Session": [
  null,
  "Istunto"
 ],
 "Session Affinity": [
  null,
  ""
 ],
 "Share Name": [
  null,
  "Jaon nimi"
 ],
 "Shared: Allow any authenticated user to pull images": [
  null,
  ""
 ],
 "Shell": [
  null,
  ""
 ],
 "Show all Containers": [
  null,
  "Näytä kaikki kontit"
 ],
 "Show all Deployment Configs": [
  null,
  ""
 ],
 "Show all Nodes": [
  null,
  "Näytä kaikki nodet"
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
  "Näytä kaikki podit"
 ],
 "Show all Projects": [
  null,
  "Näytä kaikki projektit"
 ],
 "Show all Replication Controllers": [
  null,
  ""
 ],
 "Show all Routes": [
  null,
  "Näytä kaikki reitit"
 ],
 "Show all Services": [
  null,
  "Näytä kaikki palvelut"
 ],
 "Show all VMs": [
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
  "Koko"
 ],
 "Skip Certificate Verification": [
  null,
  "Ohita varmenteen vahvistaminen"
 ],
 "Sorry, I don't know how to modify this volume": [
  null,
  ""
 ],
 "Source": [
  null,
  "Lähde"
 ],
 "State": [
  null,
  "Tila"
 ],
 "Status": [
  null,
  "Tila"
 ],
 "Strategy": [
  null,
  ""
 ],
 "Sync all tags from a remote image repository": [
  null,
  ""
 ],
 "System": [
  null,
  "Järjestelmä"
 ],
 "TLS Termination": [
  null,
  ""
 ],
 "Tags": [
  null,
  ""
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
  ""
 ],
 "The address contains invalid characters": [
  null,
  "Osoite sisltää virheellisiä merkkejä"
 ],
 "The container '{{ target }}' does not exist.": [
  null,
  "Konttia '{{ target }}' ei ole olemassa."
 ],
 "The deployment config '{{ target }}' does not exist.": [
  null,
  ""
 ],
 "The group '{{ groupName }}' does not exist.": [
  null,
  "Ryhmää '{{ groupName }}' ei ole olemassa."
 ],
 "The maximum number of replicas is 128": [
  null,
  ""
 ],
 "The name contains invalid characters": [
  null,
  "Nimi sisältää virheellisiä merkkejä"
 ],
 "The node '{{ target }}' does not exist.": [
  null,
  "Nodea '{{ target }}' ei ole olemassa."
 ],
 "The node doesn't have enough disk space": [
  null,
  "Nodessa ei ole riittävästi vapaata levytilaa"
 ],
 "The node doesn't have enough free memory": [
  null,
  "Nodessa ei ole riittävästi vapaata muistia"
 ],
 "The persistent volume '{{ target }}' does not exist.": [
  null,
  ""
 ],
 "The pod '{{ target }}' does not exist.": [
  null,
  "Podia '{{ target }}' ei ole olemassa."
 ],
 "The project '{{ projName }}' does not exist.": [
  null,
  "Projektia '{{ projName }}' ei ole olemassa."
 ],
 "The replication controller '{{ target }}' does not exist.": [
  null,
  ""
 ],
 "The route '{{ target }}' does not exist.": [
  null,
  "Reittiä '{{ target }}' ei ole olemassa."
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
  "Palvelua '{{ target }}' ei ole olemassa."
 ],
 "The user '{{ userName }}' does not exist.": [
  null,
  "Käyttäjää '{{ userName }}' ei ole olemassa."
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
  "Topologia"
 ],
 "Triggers": [
  null,
  "Liipaisimet"
 ],
 "Troubleshoot": [
  null,
  "Vianetsintä"
 ],
 "Trust this certificate for this connection": [
  null,
  "Luota tähän varmenteeseen tälle yhteydelle"
 ],
 "Type": [
  null,
  "Tyyppi"
 ],
 "Type:": [
  null,
  "Tyyppi:"
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
  "Ei käytettävissä"
 ],
 "Unknown": [
  null,
  "Tuntematon"
 ],
 "Updating $0...": [
  null,
  "Päivitetään $0..."
 ],
 "Usage": [
  null,
  "Käyttö"
 ],
 "Usage metrics are available after the pod starts": [
  null,
  ""
 ],
 "Used": [
  null,
  "Käytetty"
 ],
 "User": [
  null,
  "Käyttäjä"
 ],
 "User or Group": [
  null,
  "Käyttäjä tai ryhmä"
 ],
 "Username": [
  null,
  "Käyttäjätunnus"
 ],
 "Users": [
  null,
  "Käyttäjät"
 ],
 "VM": [
  null,
  ""
 ],
 "VM $0:$1 does not exist.": [
  null,
  ""
 ],
 "VM DELETE failed.": [
  null,
  "VM DELETE epäonnistui."
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
  "Virtuaalikoneet"
 ],
 "Volume": [
  null,
  "Taltio"
 ],
 "Volume ID": [
  null,
  "Taltio-ID"
 ],
 "Volume Name": [
  null,
  "Taltion nimi"
 ],
 "Volume Type": [
  null,
  "Taltion tyyppi"
 ],
 "Volumes": [
  null,
  "Taltiot"
 ],
 "Warning:": [
  null,
  "Varoitus:"
 ],
 "Welcome to the Image Registry": [
  null,
  ""
 ],
 "When": [
  null,
  "Kun"
 ],
 "Yes": [
  null,
  "Kyllä"
 ],
 "You can bypass the certificate check, but any data you send to the server could be intercepted by others.": [
  null,
  "Voit ohittaa sertifikaatin tarkituksen, mutta muut voivat siepata mitä vaan serverille lähettämääsi dataa."
 ],
 "You can deploy an application to your cluster.": [
  null,
  ""
 ],
 "Your login credentials do not give you access to use the docker registry from the command line.": [
  null,
  ""
 ],
 "bridge": [
  null,
  ""
 ],
 "cdrom": [
  null,
  ""
 ],
 "crashed": [
  null,
  "kaatui"
 ],
 "custom": [
  null,
  ""
 ],
 "direct": [
  null,
  ""
 ],
 "disabled": [
  null,
  "pois käytöstä"
 ],
 "disk": [
  null,
  ""
 ],
 "down": [
  null,
  ""
 ],
 "dying": [
  null,
  "kuolemassa"
 ],
 "eg: my-image-stream": [
  null,
  "esim.: my-image-stream"
 ],
 "enabled": [
  null,
  "käytössä"
 ],
 "ethernet": [
  null,
  "ethernet"
 ],
 "host": [
  null,
  ""
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
  "jouten"
 ],
 "mcast": [
  null,
  ""
 ],
 "n/a": [
  null,
  ""
 ],
 "network": [
  null,
  "verkko"
 ],
 "no": [
  null,
  "ei"
 ],
 "none": [
  null,
  "Ei mitään"
 ],
 "paused": [
  null,
  "pysäytetty"
 ],
 "pending volume claims": [
  null,
  ""
 ],
 "running": [
  null,
  "suoritetaan"
 ],
 "server": [
  null,
  "palvelin"
 ],
 "show less": [
  null,
  "näytä vähemmän"
 ],
 "show more": [
  null,
  "näytä enemmän"
 ],
 "shut off": [
  null,
  "sammutettu"
 ],
 "shutdown": [
  null,
  "sammuta"
 ],
 "suspended (PM)": [
  null,
  "pysäytetty (PM)"
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
  "lähetä JSON-tiedosto"
 ],
 "user": [
  null,
  "käyttäjä"
 ],
 "vCPUs:": [
  null,
  "vCPUt:"
 ],
 "vhostuser": [
  null,
  ""
 ],
 "yes": [
  null,
  "kyllä"
 ]
}));
