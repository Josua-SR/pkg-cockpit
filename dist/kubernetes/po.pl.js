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
nplurals=3; plural=n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;
return plural;
},
  "language": "pl",
  "x-generator": "Zanata 3.9.6"
 },
 " 1\"Do you want to delete the following Nodes?": [
  null,
  " 1\"Usunąć poniższe węzły?"
 ],
 "$0% Free": [
  "$0% Free",
  "$0% wolny",
  "$0% wolne",
  "$0% wolnych"
 ],
 "$0% Used": [
  "$0% Used",
  "$0% używany",
  "$0% używane",
  "$0% używanych"
 ],
 "AWS Elastic Block Store": [
  null,
  "Elastyczna przechowalnia blokowa AWS"
 ],
 "Access Modes": [
  null,
  "Tryby dostępu"
 ],
 "Access Policy": [
  null,
  "Polityka dostępu"
 ],
 "Actual": [
  null,
  "Rzeczywisty"
 ],
 "Add": [
  null,
  "Dodaj"
 ],
 "Add Cluster Node": [
  null,
  "Dodaj węzeł klastra"
 ],
 "Add Group": [
  null,
  "Dodaj grupę"
 ],
 "Add Kubernetes Node": [
  null,
  "Dodaj węzeł Kubernetes"
 ],
 "Add Member": [
  null,
  "Dodaj element"
 ],
 "Add Membership": [
  null,
  "Dodaj członkostwo"
 ],
 "Add New Cluster": [
  null,
  "Dodaj nowy klaster"
 ],
 "Add New User": [
  null,
  "Dodaj nowego użytkownika"
 ],
 "Add Role": [
  null,
  "Dodaj rolę"
 ],
 "Add User": [
  null,
  "Dodaj użytkownika"
 ],
 "Add membership": [
  null,
  "Dodaj członkostwo"
 ],
 "Address": [
  null,
  "Adres"
 ],
 "Addresses": [
  null,
  "Adresy"
 ],
 "Adjust": [
  null,
  "Dostosuj"
 ],
 "Adjust Persistent Volume '{{ item.metadata.name }}'": [
  null,
  "Dostosuj trwały wolumin „{{ item.metadata.name }}”"
 ],
 "Adjust Replication Controller {{ item.metadata.name }}": [
  null,
  "Dostosuj kontroler replikacji {{ item.metadata.name }}"
 ],
 "Adjust Route": [
  null,
  "Dostosuj trasę"
 ],
 "Adjust Service": [
  null,
  "Dostosuj usługę"
 ],
 "Admin": [
  null,
  "Administrator"
 ],
 "All Projects": [
  null,
  "Wszystkie projekty"
 ],
 "All Types": [
  null,
  "Wszystkie typy"
 ],
 "All healthy": [
  null,
  "Wszystko jest zdrowe"
 ],
 "All images": [
  null,
  "Wszystkie obrazy"
 ],
 "All in use": [
  null,
  "Wszystko jest używane"
 ],
 "All running": [
  null,
  "Wszystko działa"
 ],
 "Annotations": [
  null,
  "Adnotacje"
 ],
 "Anonymous: Allow all unauthenticated users to pull images": [
  null,
  "Anonimowo: umożliwia pobieranie obrazów wszystkim nieuwierzytelnionym użytkownikom"
 ],
 "Authentication": [
  null,
  "Uwierzytelnienie"
 ],
 "Azure": [
  null,
  "Azure"
 ],
 "Boot ID": [
  null,
  "Identyfikator uruchomienia"
 ],
 "CPU": [
  null,
  "Procesor"
 ],
 "CPU Utilization: $0%": [
  null,
  "Użycie procesora: $0%"
 ],
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Capacity": [
  null,
  "Pojemność"
 ],
 "Ceph Filesystem Mount": [
  null,
  "Punkt montowania systemu plików Ceph"
 ],
 "Ceph Monitors": [
  null,
  "Monitory Ceph"
 ],
 "Change": [
  null,
  "Zmień"
 ],
 "Change User": [
  null,
  "Zmień użytkownika"
 ],
 "Change image stream": [
  null,
  "Zmień strumień obrazu"
 ],
 "Change project": [
  null,
  "Zmień projekt"
 ],
 "Cinder": [
  null,
  "Cinder"
 ],
 "Claim": [
  null,
  "Zadeklaruj"
 ],
 "Claim Name": [
  null,
  "Nazwa deklaracji"
 ],
 "Client Certificate": [
  null,
  "Certyfikat klienta"
 ],
 "Cluster": [
  null,
  "Klaster"
 ],
 "Configuration": [
  null,
  "Konfiguracja"
 ],
 "Configure Flannel networking": [
  null,
  "Skonfiguruj sieć Flannel"
 ],
 "Configure Kubelet and Proxy": [
  null,
  "Skonfiguruj Kubernetes i pośrednika"
 ],
 "Connect": [
  null,
  "Połącz"
 ],
 "Connecting...": [
  null,
  "Łączenie…"
 ],
 "Connection Error": [
  null,
  "Błąd połączenia"
 ],
 "Connection Error: $0": [
  null,
  "Błąd połączenia: $0"
 ],
 "Connection Settings": [
  null,
  "Ustawienia połączenia"
 ],
 "Container": [
  null,
  "Kontener"
 ],
 "Container ID": [
  null,
  "Identyfikator kontenera"
 ],
 "Container Runtime Version": [
  null,
  "Wersja środowiska wykonawczego kontenera"
 ],
 "Containers": [
  null,
  "Kontenery"
 ],
 "Could not list services": [
  null,
  "Nie można wyświetlić listy usług"
 ],
 "Couldn't connect to server": [
  null,
  "Nie można połączyć z serwerem"
 ],
 "Couldn't find running API server": [
  null,
  "Nie można odnaleźć uruchomionego serwera API"
 ],
 "Create": [
  null,
  "Utwórz"
 ],
 "Create empty image stream": [
  null,
  "Utwórz pusty strumień obrazu"
 ],
 "Create image stream": [
  null,
  "Utwórz strumień obrazu"
 ],
 "Created": [
  null,
  "Utworzono"
 ],
 "DNS Policy": [
  null,
  "Polityka DNS"
 ],
 "Delete": [
  null,
  "Usuń"
 ],
 "Delete Node": [
  null,
  "Usuń węzeł"
 ],
 "Delete Persistent Volume": [
  null,
  "Usuń trwały wolumin"
 ],
 "Delete Persistent Volume Claim": [
  null,
  "Usuń deklarację trwałego woluminu"
 ],
 "Delete Project": [
  null,
  "Usuń projekt"
 ],
 "Delete Selected": [
  null,
  "Usuń zaznaczone"
 ],
 "Delete image stream": [
  null,
  "Usuń strumień obrazu"
 ],
 "Delete {{ item.kind }}": [
  null,
  "Usuń {{ item.kind }}"
 ],
 "Deleting a Pod will kill all associated containers. Pods may be automatically created again in some cases.": [
  null,
  "Usunięcie pojemnika zakończy wszystkie powiązane kontenery. W niektórych przypadkach pojemniki mogą być automatycznie tworzone ponownie."
 ],
 "Deploy": [
  null,
  "Wdroż"
 ],
 "Deploy Application": [
  null,
  "Wdroż aplikację"
 ],
 "Deployment Causes": [
  null,
  "Przyczyny wdrażania"
 ],
 "Deployment Config": [
  null,
  "Konfiguracja wdrażania"
 ],
 "Deployment Configs": [
  null,
  "Konfiguracje wdrożeń"
 ],
 "Description": [
  null,
  "Opis"
 ],
 "Details": [
  null,
  "Szczegóły"
 ],
 "Directory": [
  null,
  "Katalog"
 ],
 "Disk": [
  null,
  "Dysk"
 ],
 "Disk Utilization: $0%": [
  null,
  "Użycie dysku: $0%"
 ],
 "Display name": [
  null,
  "Wyświetlana nazwa"
 ],
 "Do you want to add the role '{{ fields.displayRole }}'?": [
  null,
  "Dodać rolę „{{ fields.displayRole }}”?"
 ],
 "Do you want to delete the '{{stream.metadata.namespace}}/{{stream.metadata.name}}' image stream?": [
  null,
  "Usunąć strumień obrazu „{{stream.metadata.namespace}}/{{stream.metadata.name}}”?"
 ],
 "Do you want to delete the Persistent Volume '{{item.metadata.name}}'?": [
  null,
  "Usunąć trwały wolumin „{{item.metadata.name}}”?"
 ],
 "Do you want to delete the Persistent Volume Claim '{{item.metadata.name}}'?": [
  null,
  "Usunąć deklarację trwałego woluminu „{{item.metadata.name}}”?"
 ],
 "Do you want to delete the {{ item.kind }} '{{item.metadata.name}}'?": [
  null,
  "Usunąć {{ item.kind }} „{{item.metadata.name}}”?"
 ],
 "Do you want to delete this Node?": [
  null,
  "Usunąć ten węzeł?"
 ],
 "Do you want to remove the image tagged as '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?": [
  null,
  "Usunąć obraz z etykietą „{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}”?"
 ],
 "Do you want to remove the role '{{ fields.displayRole }}' from member {{ fields.member.metadata.name }}?": [
  null,
  "Usunąć rolę „{{ fields.displayRole }}” z elementu {{ fields.member.metadata.name }}?"
 ],
 "Don't pull images automatically": [
  null,
  "Bez automatycznego pobierania obrazów"
 ],
 "Driver": [
  null,
  "Sterownik"
 ],
 "Empty Directory": [
  null,
  "Pusty katalog"
 ],
 "Endpoint": [
  null,
  "Punkt końcowy"
 ],
 "Endpoint Name": [
  null,
  "Nazwa punktu końcowego"
 ],
 "Endpoints": [
  null,
  "Punkty końcowe"
 ],
 "Environment": [
  null,
  "Środowisko"
 ],
 "Error getting certificate details: $0": [
  null,
  "Błąd podczas uzyskiwania informacji o certyfikacie: $0"
 ],
 "Error writing kubectl config": [
  null,
  "Błąd podczas zapisywania konfiguracji kubectl"
 ],
 "Fibre Channel": [
  null,
  "Fibre Channel"
 ],
 "Filesystem Type": [
  null,
  "Typ systemu plików"
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
  "Nazwa zestawu danych Flocker"
 ],
 "GCE Persistent Disk": [
  null,
  "Trwały dysk GCE"
 ],
 "Git Repository": [
  null,
  "Repozytorium git"
 ],
 "Gluster FS": [
  null,
  "GlusterFS"
 ],
 "GlusterFS": [
  null,
  "GlusterFS"
 ],
 "Grant additional push or admin access to specific members below.": [
  null,
  "Poniżej można nadać dodatkowe uprawnienia wysyłania i administratora konkretnym elementom."
 ],
 "Group Members": [
  null,
  "Elementy grupy"
 ],
 "Group or Project": [
  null,
  "Grupa lub projekt"
 ],
 "Groups": [
  null,
  "Grupy"
 ],
 "Host": [
  null,
  "Gospodarz"
 ],
 "Host Path": [
  null,
  "Ścieżka gospodarza"
 ],
 "IP": [
  null,
  "IP"
 ],
 "ISCSI": [
  null,
  "iSCSI"
 ],
 "Identities": [
  null,
  "Tożsamości"
 ],
 "Identity": [
  null,
  "Tożsamość"
 ],
 "Image": [
  null,
  "Obraz"
 ],
 "Image ID": [
  null,
  "Identyfikator obrazu"
 ],
 "Image Name": [
  null,
  "Nazwa obrazu"
 ],
 "Image Registry": [
  null,
  "Rejestr obrazów"
 ],
 "Image Stream": [
  null,
  "Strumień obrazu"
 ],
 "Image commands": [
  null,
  "Polecenia obrazu"
 ],
 "Images": [
  null,
  "Obrazy"
 ],
 "Images by project": [
  null,
  "Obrazy według projektu"
 ],
 "Images pushed recently": [
  null,
  "Ostatnio wysłane obrazy"
 ],
 "In order to begin pushing images to the registry, use the commands below.": [
  null,
  "Aby zacząć wysyłać obrazy do rejestru, należy użyć poniższych poleceń."
 ],
 "In order to begin pushing images to the registry, you need to create a project.": [
  null,
  "Aby zacząć wysyłać obrazy do rejestru, należy utworzyć projekt."
 ],
 "Interface": [
  null,
  "Interfejs"
 ],
 "Kernel Version": [
  null,
  "Wersja jądra"
 ],
 "Key Ring Path": [
  null,
  "Ścieżka do bazy kluczy"
 ],
 "Kubelet Version": [
  null,
  "Wersja Kubelet"
 ],
 "Kubernetes Cluster": [
  null,
  "Klaster Kubernetes"
 ],
 "Labels": [
  null,
  "Etykiety"
 ],
 "Last Heartbeat": [
  null,
  "Ostatnie bicie serca"
 ],
 "Last Status Change": [
  null,
  "Ostatnia zmiana stanu"
 ],
 "Latest Version": [
  null,
  "Najnowsza wersja"
 ],
 "Log into OpenShift command line tools:": [
  null,
  "Logowanie do narzędzi wiersza poleceń OpenShift:"
 ],
 "Log into the registry:": [
  null,
  "Logowanie do rejestru:"
 ],
 "Logical Unit Number": [
  null,
  "Numer jednostki logicznej"
 ],
 "Login commands": [
  null,
  "Polecenia logowania"
 ],
 "Logs": [
  null,
  "Dzienniki"
 ],
 "Machine ID": [
  null,
  "Identyfikator komputera"
 ],
 "Manifest": [
  null,
  "Manifest"
 ],
 "Medium": [
  null,
  "Nośnik"
 ],
 "Member of": [
  null,
  "Element"
 ],
 "Members": [
  null,
  "Elementy"
 ],
 "Membership": [
  null,
  "Członkostwo"
 ],
 "Memory": [
  null,
  "Pamięć"
 ],
 "Memory Utilization: $0%": [
  null,
  "Użycie pamięci: $0%"
 ],
 "Message": [
  null,
  "Komunikat"
 ],
 "Metadata": [
  null,
  "Metadane"
 ],
 "Modify": [
  null,
  "Modyfikuj"
 ],
 "Monitors": [
  null,
  "Monitory"
 ],
 "Mount Location": [
  null,
  "Położenie punktu montowania"
 ],
 "NFS": [
  null,
  "NFS"
 ],
 "NFS Mount": [
  null,
  "Punkt montowania NFS"
 ],
 "Name": [
  null,
  "Nazwa"
 ],
 "Namespace": [
  null,
  "Przestrzeń nazw"
 ],
 "Namespace cannot be empty.": [
  null,
  "Przestrzeń nazw nie może być pusta."
 ],
 "Network": [
  null,
  "Sieć"
 ],
 "New Group": [
  null,
  "Nowa grupa"
 ],
 "New Project": [
  null,
  "Nowy projekt"
 ],
 "New image stream": [
  null,
  "Nowy strumień obrazu"
 ],
 "New project": [
  null,
  "Nowy projekt"
 ],
 "No": [
  null,
  "Nie"
 ],
 "No Pods are using this claim": [
  null,
  "Żaden pojemnik nie używa tej deklaracji"
 ],
 "No Volume Bound": [
  null,
  "Żaden wolumin nie został przypisany"
 ],
 "No groups are present.": [
  null,
  "Brak grup."
 ],
 "No images pushed": [
  null,
  "Nie wysłano obrazów"
 ],
 "No metadata file was selected. Please select a Kubernetes metadata file.": [
  null,
  "Nie wybrano żadnego pliku metadanych. Proszę wybrać plik metadanych Kubernetes."
 ],
 "No nodes in cluster": [
  null,
  "Brak węzłów w klastrze"
 ],
 "No pods deployed": [
  null,
  "Brak wdrożonych pojemników"
 ],
 "No pods replicated": [
  null,
  "Nie utworzono kopii żadnych pojemników"
 ],
 "No pods scheduled": [
  null,
  "Nie zaplanowano żadnych pojemników"
 ],
 "No pods selected": [
  null,
  "Nie wybrano żadnego pojemnika"
 ],
 "No projects are present.": [
  null,
  "Brak projektów."
 ],
 "No users are present.": [
  null,
  "Brak użytkowników."
 ],
 "No volumes are present.": [
  null,
  "Brak woluminów."
 ],
 "No volumes in use": [
  null,
  "Żadne woluminy nie są używane"
 ],
 "Node": [
  null,
  "Węzeł"
 ],
 "Nodes": [
  null,
  "Węzły"
 ],
 "Nodes are the machines that run your containers.": [
  null,
  "Węzły to komputery, na których działają kontenery."
 ],
 "None": [
  null,
  "Brak"
 ],
 "Not Ready": [
  null,
  "Niegotowe"
 ],
 "Not a valid number of replicas": [
  null,
  "Nie jest prawidłowym liczbą replik"
 ],
 "Not a valid value for Host": [
  null,
  "Nieprawidłowa wartość dla gospodarza"
 ],
 "Not deployed": [
  null,
  "Nie wdrożono"
 ],
 "OS": [
  null,
  "System operacyjny"
 ],
 "OS Versions": [
  null,
  "Wersje systemu operacyjnego"
 ],
 "Operating System": [
  null,
  "System operacyjny"
 ],
 "Options": [
  null,
  "Opcje"
 ],
 "Overview": [
  null,
  "Przegląd"
 ],
 "PD Name": [
  null,
  "Nazwa PD"
 ],
 "Partition": [
  null,
  "Partycja"
 ],
 "Password": [
  null,
  "Hasło"
 ],
 "Path": [
  null,
  "Ścieżka"
 ],
 "Pending Volume Claims": [
  null,
  "Oczekujące deklaracje woluminów"
 ],
 "Persistent Volumes": [
  null,
  "Trwałe woluminy"
 ],
 "Phase": [
  null,
  "Faza"
 ],
 "Please create another namespace for $0 \"$1\"": [
  null,
  "Proszę dodać następną przestrzeń nazw dla $0 „$1”"
 ],
 "Please provide a GlusterFS volume name": [
  null,
  "Proszę podać prawidłową nazwę woluminu GlusterFS"
 ],
 "Please provide a username": [
  null,
  "Proszę podać nazwę użytkownika"
 ],
 "Please provide a valid NFS server": [
  null,
  "Proszę podać prawidłowy serwer NFS"
 ],
 "Please provide a valid address": [
  null,
  "Proszę podać prawidłowy adres"
 ],
 "Please provide a valid filesystem type": [
  null,
  "Proszę podać prawidłowy typ systemu plików"
 ],
 "Please provide a valid interface": [
  null,
  "Proszę podać prawidłowy interfejs"
 ],
 "Please provide a valid logical unit number": [
  null,
  "Proszę podać prawidłowy numer jednostki logicznej"
 ],
 "Please provide a valid name": [
  null,
  "Proszę podać prawidłową nazwę"
 ],
 "Please provide a valid namespace.": [
  null,
  "Proszę podać prawidłową przestrzeń nazw."
 ],
 "Please provide a valid path": [
  null,
  "Proszę podać prawidłową ścieżkę"
 ],
 "Please provide a valid qualified name": [
  null,
  "Proszę podać prawidłową nazwę kwalifikowaną"
 ],
 "Please provide a valid storage capacity.": [
  null,
  "Proszę podać prawidłową pojemność urządzenia do przechowywania danych."
 ],
 "Please provide a valid target": [
  null,
  "Proszę podać prawidłowy cel"
 ],
 "Please select a valid access mode": [
  null,
  "Proszę wybrać prawidłowy tryb dostępu"
 ],
 "Please select a valid endpoint": [
  null,
  "Proszę wybrać prawidłowy punkt końcowy"
 ],
 "Please select a valid policy option.": [
  null,
  "Proszę wybrać prawidłową opcję polityki."
 ],
 "Please type an address": [
  null,
  "Proszę wpisać adres"
 ],
 "Pod": [
  null,
  "Pojemnik"
 ],
 "Pod Address": [
  null,
  "Adres pojemnika"
 ],
 "Pod Endpoints": [
  null,
  "Punkty końcowe pojemnika"
 ],
 "Pod Replicated": [
  null,
  "Utworzono kopię pojemnika"
 ],
 "Pod Selector": [
  null,
  "Wybór pojemnika"
 ],
 "Pods": [
  null,
  "Pojemniki"
 ],
 "Pods contain one or more containers that run together on a node, containing your application code.": [
  null,
  "Pojemniki zawierają jeden lub więcej kontenerów działających razem na węźle, zawierających kod aplikacji."
 ],
 "Pool Name": [
  null,
  "Nazwa puli"
 ],
 "Populate": [
  null,
  "Wypełnij"
 ],
 "Ports": [
  null,
  "Porty"
 ],
 "Private: Allow only specific users or groups to pull images": [
  null,
  "Prywatne: tylko podani użytkownicy lub grupy mogą pobierać obrazy"
 ],
 "Project": [
  null,
  "Projekt"
 ],
 "Project Members": [
  null,
  "Elementy projektu"
 ],
 "Project access policy allows anonymous users to pull images.": [
  null,
  "Polityka dostępu projektu umożliwia pobieranie obrazów anonimowym użytkownikom."
 ],
 "Project access policy allows any authenticated user to pull images.": [
  null,
  "Polityka dostępu projektu umożliwia pobieranie obrazów wszystkim uwierzytelnionym użytkownikom."
 ],
 "Project access policy only allows specific members to access images.": [
  null,
  "Polityka dostępu projektu umożliwia dostęp do obrazów tylko konkretnym członkom."
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
  "Wersja pośrednika"
 ],
 "Pull an image:": [
  null,
  "Pobranie obrazu:"
 ],
 "Pull from": [
  null,
  "Pobierz z"
 ],
 "Pull specific tags from another image repository": [
  null,
  "Pobierz podane etykiety z innego repozytorium obrazów"
 ],
 "Push an image:": [
  null,
  "Wysłanie obrazu:"
 ],
 "Qualified Name": [
  null,
  "Nazwa kwalifikowana"
 ],
 "Rados Block Device": [
  null,
  "Urządzenie blokowe Rados"
 ],
 "Read Only": [
  null,
  "Tylko do odczytu"
 ],
 "Read and write from a single node": [
  null,
  "Odczyt i zapis z jednego węzła"
 ],
 "Read and write from multiple nodes": [
  null,
  "Odczyt i zapis z wielu węzłów"
 ],
 "Read only from multiple nodes": [
  null,
  "Tylko odczyt z wielu węzłów"
 ],
 "Ready": [
  null,
  "Gotowe"
 ],
 "Reason": [
  null,
  "Przyczyna"
 ],
 "Reclaim Policy": [
  null,
  "Polityka odzyskiwania"
 ],
 "Reconnect": [
  null,
  "Połącz ponownie"
 ],
 "Recycle": [
  null,
  "Użyj ponownie"
 ],
 "Register": [
  null,
  "Zarejestruj"
 ],
 "Register New Volume": [
  null,
  "Zarejestruj nowy wolumin"
 ],
 "Register Persistent Volume": [
  null,
  "Zarejestruj trwały wolumin"
 ],
 "Remote registry is insecure": [
  null,
  "Zdalny rejestr jest niezabezpieczony"
 ],
 "Remove": [
  null,
  "Usuń"
 ],
 "Remove Group": [
  null,
  "Usuń grupę"
 ],
 "Remove Member": [
  null,
  "Usuń element"
 ],
 "Remove Role": [
  null,
  "Usuń rolę"
 ],
 "Remove User": [
  null,
  "Usuń użytkownika"
 ],
 "Remove image tag": [
  null,
  "Usuń etykietę obrazu"
 ],
 "Remove membership": [
  null,
  "Usuń członkostwo"
 ],
 "Replicas": [
  null,
  "Repliki"
 ],
 "Replication Controller": [
  null,
  "Kontroler replikacji"
 ],
 "Replication Controllers": [
  null,
  "Kontrolery replikacji"
 ],
 "Replication controllers dynamically create instances of pods from templates, and remove pods when necessary.": [
  null,
  "Kontrolery replikacji dynamicznie tworzą wystąpienia pojemników z szablonów, i usuwają je w razie potrzeby."
 ],
 "Repository URL": [
  null,
  "Adres URL repozytorium"
 ],
 "Requested": [
  null,
  "Żądany"
 ],
 "Requests": [
  null,
  "Żądania"
 ],
 "Requires Authentication": [
  null,
  "Wymaga uwierzytelnienia"
 ],
 "Restart Count": [
  null,
  "Liczba ponownych uruchomień"
 ],
 "Restart Policy": [
  null,
  "Polityka ponownego uruchamiania"
 ],
 "Retain": [
  null,
  "Zachowaj"
 ],
 "Revision": [
  null,
  "Wersja"
 ],
 "Role": [
  null,
  "Rola"
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
  "Zaplanowane pojemniki"
 ],
 "Scheduling Disabled": [
  null,
  "Wyłączono planowanie"
 ],
 "Secret": [
  null,
  "Sekret"
 ],
 "Secret File": [
  null,
  "Tajny plik"
 ],
 "Secret Name": [
  null,
  "Tajna nazwa"
 ],
 "Secret Volume": [
  null,
  "Tajny wolumin"
 ],
 "Select Manifest File...": [
  null,
  "Wybierz plik manifestu…"
 ],
 "Select an object to see more details.": [
  null,
  "Wybranie obiektu wyświetli więcej informacji."
 ],
 "Server": [
  null,
  "Serwer"
 ],
 "Service": [
  null,
  "Usługa"
 ],
 "Service Account": [
  null,
  "Konto usługi"
 ],
 "Services": [
  null,
  "Usługi"
 ],
 "Services group pods and provide a common DNS name and an optional, load-balanced IP address to access them.": [
  null,
  "Usługi grupują pojemniki i dostarczają wspólną nazwę DNS oraz opcjonalny, zrównoważony adres IP do uzyskiwania do nich dostępu."
 ],
 "Session Affinity": [
  null,
  "Pokrewieństwo procesora"
 ],
 "Share Name": [
  null,
  "Nazwa udziału"
 ],
 "Shared: Allow any authenticated user to pull images": [
  null,
  "Współdzielone: umożliwia pobieranie obrazów wszystkim uwierzytelnionym użytkownikom"
 ],
 "Shell": [
  null,
  "Powłoka"
 ],
 "Show all Containers": [
  null,
  "Wyświetl wszystkie kontenery"
 ],
 "Show all Deployment Configs": [
  null,
  "Wyświetl wszystkie konfiguracje wdrożeń"
 ],
 "Show all Nodes": [
  null,
  "Wyświetl wszystkie węzły"
 ],
 "Show all Persistent Volumes": [
  null,
  "Wyświetl wszystkie trwałe woluminy"
 ],
 "Show all Pod Containers": [
  null,
  "Wyświetl wszystkie kontenery pojemników"
 ],
 "Show all Pods": [
  null,
  "Wyświetl wszystkie pojemniki"
 ],
 "Show all Projects": [
  null,
  "Wyświetl wszystkie projekty"
 ],
 "Show all Replication Controllers": [
  null,
  "Wyświetl wszystkie kontrolery replikacji"
 ],
 "Show all Routes": [
  null,
  "Wyświetl wszystkie trasy"
 ],
 "Show all Services": [
  null,
  "Wyświetl wszystkie usługi"
 ],
 "Show all image streams": [
  null,
  "Wyświetl wszystkie strumienie obrazów"
 ],
 "Show all images": [
  null,
  "Wyświetl wszystkie obrazy"
 ],
 "Since": [
  null,
  "Od"
 ],
 "Size": [
  null,
  "Rozmiar"
 ],
 "Skip Certificate Verification": [
  null,
  "Pomiń sprawdzanie poprawności certyfikatu"
 ],
 "Sorry, I don't know how to modify this volume": [
  null,
  "Nie wiadomo, jak zmodyfikować ten wolumin"
 ],
 "State": [
  null,
  "Stan"
 ],
 "Status": [
  null,
  "Stan"
 ],
 "Strategy": [
  null,
  "Strategia"
 ],
 "Sync all tags from a remote image repository": [
  null,
  "Zsynchronizuj wszystkie etykiety ze zdalnego repozytorium obrazów"
 ],
 "TLS Termination": [
  null,
  "Zakończenie TLS"
 ],
 "Tags": [
  null,
  "Etykiety"
 ],
 "Target": [
  null,
  "Cel"
 ],
 "Target Portal": [
  null,
  "Portal docelowy"
 ],
 "Target World Wide Names": [
  null,
  "Docelowe WWN"
 ],
 "Template": [
  null,
  "Szablon"
 ],
 "The address contains invalid characters": [
  null,
  "Adres zawiera nieprawidłowe znaki"
 ],
 "The container '{{ target }}' does not exist.": [
  null,
  "Kontener „{{ target }}” nie istnieje."
 ],
 "The deployment config '{{ target }}' does not exist.": [
  null,
  "Konfiguracja wdrożenia „{{ target }}” nie istnieje."
 ],
 "The group '{{ groupName }}' does not exist.": [
  null,
  "Grupa „{{ groupName }}” nie istnieje."
 ],
 "The maximum number of replicas is 128": [
  null,
  "Maksymalna liczna replik to 128"
 ],
 "The name contains invalid characters": [
  null,
  "Nazwa zawiera nieprawidłowe znaki"
 ],
 "The node '{{ target }}' does not exist.": [
  null,
  "Węzeł „{{ target }}” nie istnieje."
 ],
 "The node doesn't have enough disk space": [
  null,
  "Węzeł ma za mało miejsca na dysku"
 ],
 "The node doesn't have enough free memory": [
  null,
  "Węzeł ma za mało wolnej pamięci"
 ],
 "The persistent volume '{{ target }}' does not exist.": [
  null,
  "Trwały wolumin „{{ target }}” nie istnieje."
 ],
 "The pod '{{ target }}' does not exist.": [
  null,
  "Pojemnik „{{ target }}” nie istnieje."
 ],
 "The project '{{ projName }}' does not exist.": [
  null,
  "Projekt „{{ projName }}” nie istnieje."
 ],
 "The replication controller '{{ target }}' does not exist.": [
  null,
  "Kontroler replikacji „{{ target }}” nie istnieje."
 ],
 "The route '{{ target }}' does not exist.": [
  null,
  "Trasa „{{ target }}” nie istnieje."
 ],
 "The selected file is not a valid Kubernetes application manifest.": [
  null,
  "Wybrany plik nie jest prawidłowym manifestem aplikacji Kubernetes."
 ],
 "The server uses a certificate signed by an unknown authority.": [
  null,
  "Serwer używa certyfikatu podpisanego przez nieznany ośrodek."
 ],
 "The service '{{ target }}' does not exist.": [
  null,
  "Usługa „{{ target }}” nie istnieje."
 ],
 "The user '{{ userName }}' does not exist.": [
  null,
  "Użytkownik „{{ userName }}” nie istnieje."
 ],
 "This claim is in use. Deleting it may cause issues with the following pod:": [
  null,
  "Ta deklaracja jest używana. Usunięcie może spowodować problemy z poniższym pojemnikiem:"
 ],
 "This option is for single node testing only – local storage will not work in a multi-node cluster": [
  null,
  "Ta opcja jest tylko do testowania jednego węzła — lokalne urządzenia do przechowywania danych nie będą działały w klastrze wielowęzłowym"
 ],
 "This volume has been claimed by {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Deleting it will break that claim and may cause issues with any pods depending on it.": [
  null,
  "Ten wolumin został zadeklarowany przez {{ item.item.spec.claimRef.namespace }}/{{ item.item.spec.claimRef.name }}. Usunięcie uszkodzi tę deklarację i może spowodować problemy z pojemnikami od niej zależnymi."
 ],
 "This volume has not been claimed": [
  null,
  "Ten wolumin nie został zadeklarowany"
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
  "Wyzwalacze"
 ],
 "Troubleshoot": [
  null,
  "Rozwiązywanie problemów"
 ],
 "Trust this certificate for this connection": [
  null,
  "Zaufaj temu certyfikatowi w tym połączeniu"
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
  "Nie można dekodować manifestu aplikacji Kubernetes."
 ],
 "Unable to read the Kubernetes application manifest. Code $0.": [
  null,
  "Nie można odczytać manifestu aplikacji Kubernetes. Kod $0."
 ],
 "Unavailable": [
  null,
  "Niedostępne"
 ],
 "Unknown": [
  null,
  "Nieznane"
 ],
 "Updating $0...": [
  null,
  "Aktualizowanie $0…"
 ],
 "Used": [
  null,
  "Używane"
 ],
 "User": [
  null,
  "Użytkownik"
 ],
 "User or Group": [
  null,
  "Użytkownik lub grupa"
 ],
 "Username": [
  null,
  "Nazwa użytkownika"
 ],
 "Users": [
  null,
  "Użytkownicy"
 ],
 "Volume": [
  null,
  "Wolumin"
 ],
 "Volume ID": [
  null,
  "Identyfikator woluminu"
 ],
 "Volume Name": [
  null,
  "Nazwa woluminu"
 ],
 "Volume Type": [
  null,
  "Typ woluminu"
 ],
 "Volumes": [
  null,
  "Woluminy"
 ],
 "Warning:": [
  null,
  "Ostrzeżenie:"
 ],
 "Welcome to the Image Registry": [
  null,
  "Witamy w rejestrze obrazów"
 ],
 "When": [
  null,
  "Kiedy"
 ],
 "Yes": [
  null,
  "Tak"
 ],
 "You can bypass the certificate check, but any data you send to the server could be intercepted by others.": [
  null,
  "Można obejść sprawdzanie certyfikatu, ale wszystkie dane przesyłane do serwera mogą zostać przechwycone przez innych."
 ],
 "You can deploy an application to your cluster.": [
  null,
  "Można wdrożyć aplikację w klastrze."
 ],
 "Your login credentials do not give you access to use the docker registry from the command line.": [
  null,
  "Dane uwierzytelniające logowania nie daję dostępu do używania rejestru Dockera z wiersza poleceń."
 ],
 "eg: my-image-stream": [
  null,
  "np. strumień-obrazu"
 ],
 "no": [
  null,
  "nie"
 ],
 "none": [
  null,
  "brak"
 ],
 "pending volume claims": [
  null,
  "oczekujące deklaracje woluminów"
 ],
 "yes": [
  null,
  "tak"
 ]
}));
