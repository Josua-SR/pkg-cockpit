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
  "language": "de",
  "x-generator": "Zanata 4.6.2"
 },
 " 1\"Do you want to delete the following Nodes?": [
  null,
  "1\"Sind Sie sicher, dass Sie die folgenden Nodes löschen möchten?"
 ],
 "$0% Free": [
  "$0% Free",
  "$0% verfügbar",
  "$0% verfügbar"
 ],
 "$0% Used": [
  "$0% Used",
  "$0% in Benutzung",
  "$0% in Benutzung"
 ],
 "AWS Elastic Block Store": [
  null,
  "AWS Elastic Block Store"
 ],
 "Access Modes": [
  null,
  "Zugriffsmodi"
 ],
 "Access Policy": [
  null,
  "Zugriffs-Richtlinie"
 ],
 "Actual": [
  null,
  "Tatsächlich"
 ],
 "Add": [
  null,
  "Hinzufügen"
 ],
 "Add Cluster Node": [
  null,
  "Clusterknoten hinzufügen"
 ],
 "Add Group": [
  null,
  "Gruppe hinzufügen"
 ],
 "Add Kubernetes Node": [
  null,
  "Kubernetes Node hinzufügen"
 ],
 "Add Member": [
  null,
  "Mitglied hinzufügen"
 ],
 "Add Membership": [
  null,
  "Mitgliedschaft hinzufügen"
 ],
 "Add New Cluster": [
  null,
  "Neuen Cluster hinzufügen"
 ],
 "Add New User": [
  null,
  "Neuen Nutzer anlegen"
 ],
 "Add Role": [
  null,
  "Neue Rolle hinzufügen"
 ],
 "Add User": [
  null,
  "Benutzer hinzufügen"
 ],
 "Add membership": [
  null,
  "Mitgliedschaft hinzufügen"
 ],
 "Address": [
  null,
  "Adresse"
 ],
 "Addresses": [
  null,
  "Adressen"
 ],
 "Adjust": [
  null,
  "Anpassen"
 ],
 "Adjust Persistent Volume '{{ item.metadata.name }}'": [
  null,
  "Anhaltendes Volumen anpassen '{{ item.metadata.name }}'"
 ],
 "Adjust Replication Controller {{ item.metadata.name }}": [
  null,
  "Passen Sie den Replikationscontroller an {{ item.metadata.name }}"
 ],
 "Adjust Route": [
  null,
  "Route anpassen"
 ],
 "Adjust Service": [
  null,
  "Dienst anpassen"
 ],
 "Admin": [
  null,
  "Administrator"
 ],
 "All Projects": [
  null,
  "Alle Projekte"
 ],
 "All Types": [
  null,
  "Alle Arten"
 ],
 "All healthy": [
  null,
  "Alles gesund"
 ],
 "All images": [
  null,
  "Alle Bilder"
 ],
 "All in use": [
  null,
  "Alle in Verwendung"
 ],
 "All running": [
  null,
  "Alles läuft"
 ],
 "Annotations": [
  null,
  "Annotationen"
 ],
 "Anonymous: Allow all unauthenticated users to pull images": [
  null,
  "Anonym: Alle nicht authentifizierten Benutzer dürfen Bilder ziehen"
 ],
 "Authentication": [
  null,
  "Authentifizierung"
 ],
 "Azure": [
  null,
  "Azure"
 ],
 "Boot ID": [
  null,
  "Boot-ID"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU Utilization: $0%": [
  null,
  "CPU Auslastung: $0%"
 ],
 "Cancel": [
  null,
  "Abbrechen"
 ],
 "Capacity": [
  null,
  "Kapazität"
 ],
 "Ceph Filesystem Mount": [
  null,
  "Ceph-Dateisystem-Mount"
 ],
 "Ceph Monitors": [
  null,
  "Ceph-Monitore"
 ],
 "Change": [
  null,
  "Ändern"
 ],
 "Change User": [
  null,
  "Benutzer wechseln"
 ],
 "Change image stream": [
  null,
  "Bildstrom ändern"
 ],
 "Change project": [
  null,
  "Projekt ändern"
 ],
 "Cinder": [
  null,
  "Asche"
 ],
 "Claim": [
  null,
  "Claim"
 ],
 "Claim Name": [
  null,
  "Anspruchsname"
 ],
 "Client Certificate": [
  null,
  "Client-Zertifikat"
 ],
 "Cluster": [
  null,
  "Cluster"
 ],
 "Configuration": [
  null,
  "Konfiguration"
 ],
 "Configure Flannel networking": [
  null,
  "Flannel Netzwerk konfigurieren"
 ],
 "Configure Kubelet and Proxy": [
  null,
  "Kubelet und Proxy konfigurieren"
 ],
 "Connect": [
  null,
  "Verbinden"
 ],
 "Connecting...": [
  null,
  "Verbinde..."
 ],
 "Connection Error": [
  null,
  "Fehler bei der Verbindung"
 ],
 "Connection Error: $0": [
  null,
  "Fehler bei der Verbindung: $0"
 ],
 "Connection Settings": [
  null,
  "Verbindungseinstellungen"
 ],
 "Container": [
  null,
  "Container"
 ],
 "Container ID": [
  null,
  "Container ID"
 ],
 "Container Runtime Version": [
  null,
  "Container-Laufzeitversion"
 ],
 "Containers": [
  null,
  "Container"
 ],
 "Could not list services": [
  null,
  "Services konnten nicht aufgelistet werden"
 ],
 "Couldn't connect to server": [
  null,
  "Verbindung zum Server konnte nicht hergstellt werden"
 ],
 "Couldn't find running API server": [
  null,
  "Laufender API-Server konnte nicht gefunden werden"
 ],
 "Create": [
  null,
  "Erstellen"
 ],
 "Create empty image stream": [
  null,
  "Erstellen Sie einen leeren Bildstrom"
 ],
 "Create image stream": [
  null,
  "Bildstrom erstellen"
 ],
 "Created": [
  null,
  "Erstellt"
 ],
 "DNS Policy": [
  null,
  "DNS Policy"
 ],
 "Delete": [
  null,
  "Löschen"
 ],
 "Delete Node": [
  null,
  "Knoten löschen"
 ],
 "Delete Persistent Volume": [
  null,
  "Löschen Sie das permanente Volume"
 ],
 "Delete Persistent Volume Claim": [
  null,
  "Persistenten Volumenanspruch löschen"
 ],
 "Delete Project": [
  null,
  "Projekt löschen"
 ],
 "Delete Selected": [
  null,
  "Auswahl löschen"
 ],
 "Delete image stream": [
  null,
  "Bildstrom löschen"
 ],
 "Delete {{ item.kind }}": [
  null,
  "{{ item.kind }} löschen"
 ],
 "Deleting a Pod will kill all associated containers. Pods may be automatically created again in some cases.": [
  null,
  "Durch das Löschen eines Pods werden alle zugehörigen Container gelöscht. In einigen Fällen werden Pods möglicherweise automatisch neu erstellt."
 ],
 "Deploy": [
  null,
  "Deployen"
 ],
 "Deploy Application": [
  null,
  "Applikation installieren"
 ],
 "Deployment Causes": [
  null,
  "Bereitstellungsursachen"
 ],
 "Deployment Config": [
  null,
  "Bereitstellungskonfiguration"
 ],
 "Deployment Configs": [
  null,
  "Bereitstellungskonfigurationen"
 ],
 "Description": [
  null,
  "Beschreibung"
 ],
 "Details": [
  null,
  "Details"
 ],
 "Directory": [
  null,
  "Ordner"
 ],
 "Disk": [
  null,
  "Festplatte"
 ],
 "Disk Utilization: $0%": [
  null,
  "Festplattennutzung: $0%"
 ],
 "Display name": [
  null,
  "Anzeigename"
 ],
 "Do you want to add the role '{{ fields.displayRole }}'?": [
  null,
  "Möchten Sie die Rolle hinzufügen? '{{ fields.displayRole }}'"
 ],
 "Do you want to delete the '{{stream.metadata.namespace}}/{{stream.metadata.name}}' image stream?": [
  null,
  "Möchten Sie das 'löschen'{{stream.metadata.namespace}}/{{stream.metadata.name}}'Bildstrom?"
 ],
 "Do you want to delete the Persistent Volume '{{item.metadata.name}}'?": [
  null,
  "Möchten Sie das permanente Volume löschen?{{item.metadata.name}}'"
 ],
 "Do you want to delete the Persistent Volume Claim '{{item.metadata.name}}'?": [
  null,
  "Möchten Sie den Anspruch auf beständigen Datenträger löschen?{{item.metadata.name}}'"
 ],
 "Do you want to delete the {{ item.kind }} '{{item.metadata.name}}'?": [
  null,
  "Möchten Sie das löschen? {{ item.kind }} '{{item.metadata.name}}'"
 ],
 "Do you want to delete this Node?": [
  null,
  "Möchten Sie diesen Knoten löschen?"
 ],
 "Do you want to remove the image tagged as '{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'?": [
  null,
  "Möchten Sie das mit \"\" gekennzeichnete Bild entfernen{{stream.metadata.namespace}}/{{stream.metadata.name}}:{{tag.tag}}'"
 ],
 "Do you want to remove the role '{{ fields.displayRole }}' from member {{ fields.member.metadata.name }}?": [
  null,
  "Möchten Sie die Rolle entfernen? '{{ fields.displayRole }}'vom Mitglied {{ fields.member.metadata.name }}?"
 ],
 "Don't pull images automatically": [
  null,
  "Bilder nicht automatisch ziehen"
 ],
 "Driver": [
  null,
  "Treiber"
 ],
 "Empty Directory": [
  null,
  "Leeres Verzeichnis"
 ],
 "Endpoint": [
  null,
  "Endpunkt"
 ],
 "Endpoint Name": [
  null,
  "Endpunktname"
 ],
 "Endpoints": [
  null,
  "Endpunkte"
 ],
 "Environment": [
  null,
  "Umgebung"
 ],
 "Error getting certificate details: $0": [
  null,
  "Fehler beim Abrufen der Zertifikatdetails: $0"
 ],
 "Error writing kubectl config": [
  null,
  "Fehler beim Schreiben von kubectl config"
 ],
 "Fibre Channel": [
  null,
  "Fibre Channel"
 ],
 "Filesystem Type": [
  null,
  "Dateisystemtyp"
 ],
 "Flex": [
  null,
  "Biegen"
 ],
 "Flocker": [
  null,
  "Flocker"
 ],
 "Flocker Dataset Name": [
  null,
  "Name des Flocker-Datasets"
 ],
 "GCE Persistent Disk": [
  null,
  "GCE Persistent Disk"
 ],
 "Git Repository": [
  null,
  "Git Repository"
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
  "Gewähren Sie untenstehend bestimmten Mitgliedern zusätzlichen Push- oder Administratorzugriff."
 ],
 "Group Members": [
  null,
  "Gruppenmitglieder"
 ],
 "Group or Project": [
  null,
  "Gruppe oder Projekt"
 ],
 "Groups": [
  null,
  "Gruppen"
 ],
 "Host": [
  null,
  "Host"
 ],
 "Host Path": [
  null,
  "Hostpfad"
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
  "Identitäten"
 ],
 "Identity": [
  null,
  "Identität"
 ],
 "Image": [
  null,
  "Bild"
 ],
 "Image ID": [
  null,
  "Abbildkennung"
 ],
 "Image Name": [
  null,
  "Bildname"
 ],
 "Image Registry": [
  null,
  "Bildregistrierung"
 ],
 "Image Stream": [
  null,
  "Bildstrom"
 ],
 "Image commands": [
  null,
  "Bildbefehle"
 ],
 "Images": [
  null,
  "Abbilder"
 ],
 "Images by project": [
  null,
  "Bilder nach Projekt"
 ],
 "Images pushed recently": [
  null,
  "Bilder wurden kürzlich verschoben"
 ],
 "In order to begin pushing images to the registry, use the commands below.": [
  null,
  "Verwenden Sie die folgenden Befehle, um Bilder in die Registrierung zu verschieben."
 ],
 "In order to begin pushing images to the registry, you need to create a project.": [
  null,
  "Um Bilder in die Registrierung zu verschieben, müssen Sie ein Projekt erstellen."
 ],
 "Interface": [
  null,
  "Schnittstelle"
 ],
 "Kernel Version": [
  null,
  "Kernelversion"
 ],
 "Key Ring Path": [
  null,
  "Pfad des Schlüsselrings"
 ],
 "Kubelet Version": [
  null,
  "Kubelet-Version"
 ],
 "Kubernetes Cluster": [
  null,
  "Kubernetes Cluster"
 ],
 "Labels": [
  null,
  "Bezeichnungen"
 ],
 "Last Heartbeat": [
  null,
  "Letzter Herzschlag"
 ],
 "Last Status Change": [
  null,
  "Letzte Statusänderung"
 ],
 "Latest Version": [
  null,
  "Aktuelle Version"
 ],
 "Log into OpenShift command line tools:": [
  null,
  "Melden Sie sich bei OpenShift-Befehlszeilen-Tools an:"
 ],
 "Log into the registry:": [
  null,
  "Loggen Sie sich in die Registry ein:"
 ],
 "Logical Unit Number": [
  null,
  "Logische Einheitennummer"
 ],
 "Login commands": [
  null,
  "Login-Befehle"
 ],
 "Logs": [
  null,
  "Protokolle"
 ],
 "Machine ID": [
  null,
  "Maschinen-ID"
 ],
 "Manifest": [
  null,
  "Manifest"
 ],
 "Medium": [
  null,
  "Mittel"
 ],
 "Member of": [
  null,
  "Mitglied von"
 ],
 "Members": [
  null,
  "Mitglieder"
 ],
 "Membership": [
  null,
  "Mitgliedschaft"
 ],
 "Memory": [
  null,
  "Speicher"
 ],
 "Memory Utilization: $0%": [
  null,
  "Speicherauslastung: $0%"
 ],
 "Message": [
  null,
  "Anzeige"
 ],
 "Metadata": [
  null,
  "Metadaten"
 ],
 "Modify": [
  null,
  "Ändern"
 ],
 "Monitors": [
  null,
  "Monitore"
 ],
 "Mount Location": [
  null,
  "Montageort"
 ],
 "NFS": [
  null,
  "NFS"
 ],
 "NFS Mount": [
  null,
  "NFS-Mount"
 ],
 "Name": [
  null,
  "Name"
 ],
 "Namespace": [
  null,
  "Namespace"
 ],
 "Namespace cannot be empty.": [
  null,
  "Der Namespace darf nicht leer sein."
 ],
 "Network": [
  null,
  "Netzwerk"
 ],
 "New Group": [
  null,
  "Neue Gruppe"
 ],
 "New Project": [
  null,
  "Neues Projekt"
 ],
 "New image stream": [
  null,
  "Neuer Bildstrom"
 ],
 "New project": [
  null,
  "Neues Projekt"
 ],
 "No": [
  null,
  "Nein"
 ],
 "No Pods are using this claim": [
  null,
  "Keine Pods verwenden diese Behauptung"
 ],
 "No Volume Bound": [
  null,
  "Kein Volumen gebunden"
 ],
 "No groups are present.": [
  null,
  "Es sind keine Gruppen vorhanden."
 ],
 "No images pushed": [
  null,
  "Keine Bilder geschoben"
 ],
 "No metadata file was selected. Please select a Kubernetes metadata file.": [
  null,
  "Es wurde keine Metadaten-Datei ausgewählt. Bitte geben Sie eine Kubernetes Metadaten-Datei an. "
 ],
 "No nodes in cluster": [
  null,
  "Keine Knoten im Cluster"
 ],
 "No pods deployed": [
  null,
  "Keine Pods im Einsatz"
 ],
 "No pods replicated": [
  null,
  "Keine Pods repliziert"
 ],
 "No pods scheduled": [
  null,
  "Keine Schoten geplant"
 ],
 "No pods selected": [
  null,
  "Keine Pods ausgewählt"
 ],
 "No projects are present.": [
  null,
  "Es sind keine Projekte vorhanden."
 ],
 "No users are present.": [
  null,
  "Es sind keine Benutzer anwesend."
 ],
 "No volumes are present.": [
  null,
  "Es sind keine Bände vorhanden."
 ],
 "No volumes in use": [
  null,
  "Keine Datenträger verwendet"
 ],
 "Node": [
  null,
  "Knoten"
 ],
 "Nodes": [
  null,
  "Knoten"
 ],
 "Nodes are the machines that run your containers.": [
  null,
  "Knoten sind die Maschinen, auf denen Ihre Container ausgeführt werden."
 ],
 "None": [
  null,
  "Kein"
 ],
 "Not Ready": [
  null,
  "Nicht bereit"
 ],
 "Not a valid number of replicas": [
  null,
  "Keine gültige Anzahl von Repliken"
 ],
 "Not a valid value for Host": [
  null,
  "Kein gültiger Wert für Host"
 ],
 "Not deployed": [
  null,
  "Nicht bereitgestellt"
 ],
 "OS": [
  null,
  "Betriebssystem"
 ],
 "OS Versions": [
  null,
  "OS-Versionen"
 ],
 "Operating System": [
  null,
  "Betriebssystem"
 ],
 "Options": [
  null,
  "Einstellungen"
 ],
 "Overview": [
  null,
  "Überblick"
 ],
 "PD Name": [
  null,
  "PD-Name"
 ],
 "Partition": [
  null,
  "Partition"
 ],
 "Password": [
  null,
  "Passwort"
 ],
 "Path": [
  null,
  "Pfad"
 ],
 "Pending Volume Claims": [
  null,
  "Ausstehende Volumenforderungen"
 ],
 "Persistent Volumes": [
  null,
  "Persistent Volumes"
 ],
 "Phase": [
  null,
  "Phase"
 ],
 "Please create another namespace for $0 \"$1\"": [
  null,
  "Bitte erzeugen Sie einen anderen Namespace für $0 \"$1\""
 ],
 "Please provide a GlusterFS volume name": [
  null,
  "Bitte geben Sie einen GlusterFS-Namen an"
 ],
 "Please provide a username": [
  null,
  "Bitte geben Sie einen Benutzernamen an"
 ],
 "Please provide a valid NFS server": [
  null,
  "Bitte geben Sie einen gültigen NFS-Server an"
 ],
 "Please provide a valid address": [
  null,
  "Bitte geben Sie eine gültige Adresse an"
 ],
 "Please provide a valid filesystem type": [
  null,
  "Bitte geben Sie einen gültigen Dateisystemtyp an"
 ],
 "Please provide a valid interface": [
  null,
  "Bitte geben Sie eine gültige Schnittstelle an"
 ],
 "Please provide a valid logical unit number": [
  null,
  "Bitte geben Sie eine gültige logische Einheitennummer an"
 ],
 "Please provide a valid name": [
  null,
  "Bitte geben Sie einen gültigen Namen an"
 ],
 "Please provide a valid namespace.": [
  null,
  "Bitte geben Sie einen gültigen Namespace an."
 ],
 "Please provide a valid path": [
  null,
  "Bitte geben Sie einen gültigen Pfad an"
 ],
 "Please provide a valid qualified name": [
  null,
  "Bitte geben Sie einen gültigen qualifizierten Namen an"
 ],
 "Please provide a valid storage capacity.": [
  null,
  "Bitte geben Sie eine gültige Speicherkapazität an."
 ],
 "Please provide a valid target": [
  null,
  "Bitte geben Sie ein gültiges Ziel an"
 ],
 "Please select a valid access mode": [
  null,
  "Bitte wählen Sie einen gültigen Zugriffsmodus"
 ],
 "Please select a valid endpoint": [
  null,
  "Bitte wählen Sie einen gültigen Endpunkt aus"
 ],
 "Please select a valid policy option.": [
  null,
  "Bitte wählen Sie eine gültige Richtlinienoption aus."
 ],
 "Please type an address": [
  null,
  "Bitte geben Sie eine Adresse an"
 ],
 "Pod": [
  null,
  "Pod"
 ],
 "Pod Address": [
  null,
  "Pod-Adresse"
 ],
 "Pod Endpoints": [
  null,
  "Pod-Endpunkte"
 ],
 "Pod Replicated": [
  null,
  "Pod repliziert"
 ],
 "Pod Selector": [
  null,
  "Pod-Auswahl"
 ],
 "Pods": [
  null,
  "Pods"
 ],
 "Pods contain one or more containers that run together on a node, containing your application code.": [
  null,
  "Pods enthalten einen oder mehrere Container, die zusammen auf einem Knoten ausgeführt werden und den Anwendungscode enthalten."
 ],
 "Pool Name": [
  null,
  "Poolname"
 ],
 "Populate": [
  null,
  "Bevölkern"
 ],
 "Ports": [
  null,
  "Ports"
 ],
 "Private: Allow only specific users or groups to pull images": [
  null,
  "Privat: Nur bestimmte Benutzer oder Gruppen dürfen Bilder ziehen"
 ],
 "Project": [
  null,
  "Projekt"
 ],
 "Project Members": [
  null,
  "Projektmitglieder"
 ],
 "Project access policy allows anonymous users to pull images.": [
  null,
  "Die Projektzugriffsrichtlinie ermöglicht anonymen Benutzern das Abrufen von Bildern."
 ],
 "Project access policy allows any authenticated user to pull images.": [
  null,
  "Die Projektzugriffsrichtlinie ermöglicht jedem authentifizierten Benutzer das Abrufen von Bildern."
 ],
 "Project access policy only allows specific members to access images.": [
  null,
  "Die Projektzugriffsrichtlinie ermöglicht nur bestimmten Mitgliedern den Zugriff auf Bilder."
 ],
 "Project:": [
  null,
  "Projekt:"
 ],
 "Projects": [
  null,
  "Projekte"
 ],
 "Proxy Version": [
  null,
  "Proxy-Version"
 ],
 "Pull an image:": [
  null,
  "Bild ziehen:"
 ],
 "Pull from": [
  null,
  "Ziehen Sie aus"
 ],
 "Pull specific tags from another image repository": [
  null,
  "Ziehen Sie bestimmte Tags aus einem anderen Image-Repository ab"
 ],
 "Push an image:": [
  null,
  "Bild schieben:"
 ],
 "Qualified Name": [
  null,
  "Qualifizierter Name"
 ],
 "Rados Block Device": [
  null,
  "Rados Block Device"
 ],
 "Read Only": [
  null,
  "Nur Lesen"
 ],
 "Read and write from a single node": [
  null,
  "Lesen und Schreiben von einem einzigen Knoten aus"
 ],
 "Read and write from multiple nodes": [
  null,
  "Lesen und Schreiben von mehreren Knoten aus"
 ],
 "Read only from multiple nodes": [
  null,
  "Nur von mehreren Knoten aus lesen"
 ],
 "Ready": [
  null,
  "Bereit"
 ],
 "Reason": [
  null,
  "Grund"
 ],
 "Reclaim Policy": [
  null,
  "Rückforderungsrichtlinie"
 ],
 "Reconnect": [
  null,
  "Erneut verbinden"
 ],
 "Recycle": [
  null,
  "Recyceln"
 ],
 "Register": [
  null,
  "Registrieren"
 ],
 "Register New Volume": [
  null,
  "Registrieren Sie das neue Volume"
 ],
 "Register Persistent Volume": [
  null,
  "Registrieren Sie das permanente Volume"
 ],
 "Remote registry is insecure": [
  null,
  "Remote-Registrierung ist unsicher"
 ],
 "Remove": [
  null,
  "Entfernen"
 ],
 "Remove Group": [
  null,
  "Gruppe entfernen"
 ],
 "Remove Member": [
  null,
  "Mitglied entfernen"
 ],
 "Remove Role": [
  null,
  "Rolle entfernen"
 ],
 "Remove User": [
  null,
  "Benutzer entfernen"
 ],
 "Remove image tag": [
  null,
  "Image-Tag entfernen"
 ],
 "Remove membership": [
  null,
  "Mitgliedschaft entfernen"
 ],
 "Replicas": [
  null,
  "Repliken"
 ],
 "Replication Controller": [
  null,
  "Replication Controller"
 ],
 "Replication Controllers": [
  null,
  "Replication Controller"
 ],
 "Replication controllers dynamically create instances of pods from templates, and remove pods when necessary.": [
  null,
  "Replikationscontroller erstellen Instanzen von Pods dynamisch aus Vorlagen und entfernen sie bei Bedarf."
 ],
 "Repository URL": [
  null,
  "Repository URL"
 ],
 "Requested": [
  null,
  "Beantragt"
 ],
 "Requests": [
  null,
  "Anfragen"
 ],
 "Requires Authentication": [
  null,
  "Benötigt Authentifizierung"
 ],
 "Restart Count": [
  null,
  "Anzahl neu starten"
 ],
 "Restart Policy": [
  null,
  "Starten Sie die Richtlinie neu"
 ],
 "Retain": [
  null,
  "Behalten"
 ],
 "Revision": [
  null,
  "Revision"
 ],
 "Role": [
  null,
  "Rolle"
 ],
 "Roles": [
  null,
  "Rollen"
 ],
 "Route": [
  null,
  "Route"
 ],
 "Routes": [
  null,
  "Routen"
 ],
 "Scheduled Pods": [
  null,
  "Geplante Pods"
 ],
 "Scheduling Disabled": [
  null,
  "Terminplanung deaktiviert"
 ],
 "Secret": [
  null,
  "Geheim"
 ],
 "Secret File": [
  null,
  "Geheime Datei"
 ],
 "Secret Name": [
  null,
  "Geheimer Name"
 ],
 "Secret Volume": [
  null,
  "Geheime Band"
 ],
 "Select Manifest File...": [
  null,
  "Wählen Sie eine Manifestdatei aus..."
 ],
 "Select Member": [
  null,
  "Mitglied auswählen"
 ],
 "Select Role": [
  null,
  "Rolle auswählen"
 ],
 "Select an object to see more details.": [
  null,
  "Wählen Sie ein Objekt aus, um weitere Details anzuzeigen."
 ],
 "Server": [
  null,
  "Server"
 ],
 "Service": [
  null,
  "Dienst"
 ],
 "Service Account": [
  null,
  "Dienstkonto"
 ],
 "Services": [
  null,
  "Dienste"
 ],
 "Services group pods and provide a common DNS name and an optional, load-balanced IP address to access them.": [
  null,
  "Dienste gruppieren Pods und geben einen allgemeinen DNS-Namen und eine optionale IP-Adresse mit Lastausgleich an, um auf sie zuzugreifen."
 ],
 "Session Affinity": [
  null,
  "Sitzungsaffinität"
 ],
 "Share Name": [
  null,
  "Freigabe Name"
 ],
 "Shared: Allow any authenticated user to pull images": [
  null,
  "Freigegeben: Jeder authentifizierte Benutzer darf Bilder ziehen"
 ],
 "Shell": [
  null,
  "Shell"
 ],
 "Show all Containers": [
  null,
  "Zeige alle Container an"
 ],
 "Show all Deployment Configs": [
  null,
  "Alle Bereitstellungskonfigurationen anzeigen"
 ],
 "Show all Nodes": [
  null,
  "Zeige alle Knoten an"
 ],
 "Show all Persistent Volumes": [
  null,
  "Zeige alle persistenten Datenträger an"
 ],
 "Show all Pod Containers": [
  null,
  "Zeige alle Pod Container"
 ],
 "Show all Pods": [
  null,
  "Zeige alle Pods"
 ],
 "Show all Projects": [
  null,
  "Zeige alle Projekte an"
 ],
 "Show all Replication Controllers": [
  null,
  "Zeige alle Replication Controller an"
 ],
 "Show all Routes": [
  null,
  "Zeige alle Routen an"
 ],
 "Show all Services": [
  null,
  "Zeige alle Dienste an"
 ],
 "Show all image streams": [
  null,
  "Alle Bildströme anzeigen"
 ],
 "Show all images": [
  null,
  "Alle Bilder anzeigen"
 ],
 "Since": [
  null,
  "Seit"
 ],
 "Size": [
  null,
  "Größe"
 ],
 "Skip Certificate Verification": [
  null,
  "Zertifikatprüfung überspringen"
 ],
 "Sorry, I don't know how to modify this volume": [
  null,
  "Entschuldigung, ich weiß nicht, wie ich diesen Datenträger modifizieren soll"
 ],
 "State": [
  null,
  "Status"
 ],
 "Status": [
  null,
  "Status"
 ],
 "Strategy": [
  null,
  "Strategie"
 ],
 "Sync all tags from a remote image repository": [
  null,
  "Synchronisieren Sie alle Tags aus einem Remote-Image-Repository"
 ],
 "TLS Termination": [
  null,
  "TLS-Beendigung"
 ],
 "Tags": [
  null,
  "Tags"
 ],
 "Target": [
  null,
  "Ziel"
 ],
 "Target Portal": [
  null,
  "Zielportal"
 ],
 "Target World Wide Names": [
  null,
  "Weltweite Zielnamen"
 ],
 "Template": [
  null,
  "Vorlage"
 ],
 "The address contains invalid characters": [
  null,
  "Das Adressfeld enthält ungültige Zeichen"
 ],
 "The container '{{ target }}' does not exist.": [
  null,
  "Der Container '{{ target }}' existiert nicht."
 ],
 "The deployment config '{{ target }}' does not exist.": [
  null,
  "Die Deployment-Konfiguration '{{ target }}' ist nicht vorhanden."
 ],
 "The group '{{ groupName }}' does not exist.": [
  null,
  "Die Gruppe '{{ groupName }}' existiert nicht."
 ],
 "The maximum number of replicas is 128": [
  null,
  "Die maximale Anzahl von Repliken ist 128"
 ],
 "The name contains invalid characters": [
  null,
  "Der Name enthält ungültige Zeichen"
 ],
 "The node '{{ target }}' does not exist.": [
  null,
  "Der Knoten '{{ target }}' existiert nicht."
 ],
 "The node doesn't have enough disk space": [
  null,
  "Dieser Knoten verfügt nicht über ausreichend freien Speicherplatz"
 ],
 "The node doesn't have enough free memory": [
  null,
  "Dieser Knoten verfügt nicht über ausreichend freien Arbeitsspeicher"
 ],
 "The persistent volume '{{ target }}' does not exist.": [
  null,
  "Das dauerhafte Volumen '{{ target }}' ist nicht vorhanden."
 ],
 "The pod '{{ target }}' does not exist.": [
  null,
  "Der Pod '{{ target }}' existiert nicht."
 ],
 "The project '{{ projName }}' does not exist.": [
  null,
  "Das Projekt '{{ projName }}' existiert nicht."
 ],
 "The replication controller '{{ target }}' does not exist.": [
  null,
  "Der Replication Controller '{{ target }}' existiert nicht."
 ],
 "The route '{{ target }}' does not exist.": [
  null,
  "Die Route '{{ target }}' existiert nicht."
 ],
 "The selected file is not a valid Kubernetes application manifest.": [
  null,
  "Die ausgewählte Datei ist kein gültiges Kubernetes Applikationsmanifest."
 ],
 "The server uses a certificate signed by an unknown authority.": [
  null,
  "Der Server nutzt ein Zertifikat, das von einer unbekannten Stelle signiert wurde."
 ],
 "The service '{{ target }}' does not exist.": [
  null,
  "Der Dienst '{{ target }}' existiert nicht."
 ],
 "The user '{{ userName }}' does not exist.": [
  null,
  "Der Benutzer '{{ userName }}' existiert nicht."
 ],
 "This claim is in use. Deleting it may cause issues with the following pod:": [
  null,
  "Diese Behauptung wird verwendet. Das Löschen kann zu Problemen mit dem folgenden Pod führen:"
 ],
 "This option is for single node testing only – local storage will not work in a multi-node cluster": [
  null,
  "Diese Option ist nur für den Test einzelner Knoten vorgesehen. Lokaler Speicher funktioniert nicht in einem Cluster mit mehreren Knoten"
 ],
 "This volume has been claimed by {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Deleting it will break that claim and may cause issues with any pods depending on it.": [
  null,
  "Dieser Band wurde von beansprucht {{ item.item.spec.claimRef.namespace }} / {{ item.item.spec.claimRef.name }}. Wenn Sie es löschen, wird die Angabe beschädigt und es können je nach Podcast Probleme auftreten."
 ],
 "This volume has not been claimed": [
  null,
  "Dieses Volumen wurde nicht beansprucht"
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
  "Löst aus"
 ],
 "Troubleshoot": [
  null,
  "Fehlersuche"
 ],
 "Trust this certificate for this connection": [
  null,
  "Diesem Zertifikat für diese Verbindung vertrauen"
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
  "Kann Kubernetes Applikationsmanifest nicht verarbeiten."
 ],
 "Unable to read the Kubernetes application manifest. Code $0.": [
  null,
  "Das Kubernetes Applikationsmanifest konnte nicht gelesen werden. Code $0."
 ],
 "Unavailable": [
  null,
  "Nicht verfügbar"
 ],
 "Unknown": [
  null,
  "Unbekannt"
 ],
 "Updating $0...": [
  null,
  "Aktualisiere $0..."
 ],
 "Used": [
  null,
  "Benutzt"
 ],
 "User": [
  null,
  "Benutzer"
 ],
 "User or Group": [
  null,
  "Benutzer oder Gruppe"
 ],
 "Username": [
  null,
  "Benutzername"
 ],
 "Users": [
  null,
  "Benutzer"
 ],
 "Volume": [
  null,
  "Lautstärke"
 ],
 "Volume ID": [
  null,
  "Volume-ID"
 ],
 "Volume Name": [
  null,
  "Name des Datenträgers"
 ],
 "Volume Type": [
  null,
  "Volume-Typ"
 ],
 "Volumes": [
  null,
  "Datenträger"
 ],
 "Warning:": [
  null,
  "Warnung:"
 ],
 "Welcome to the Image Registry": [
  null,
  "Willkommen bei der Image Registry"
 ],
 "When": [
  null,
  "Wann"
 ],
 "Yes": [
  null,
  "Ja"
 ],
 "You can bypass the certificate check, but any data you send to the server could be intercepted by others.": [
  null,
  "Sie können die Zertifikatsprüfung umgehen, dann könnten jedoch sämtliche an den Server gesendete Daten von Dritten mitgelesen werden."
 ],
 "You can deploy an application to your cluster.": [
  null,
  "Sie können eine Anwendung in Ihrem Cluster bereitstellen."
 ],
 "Your login credentials do not give you access to use the docker registry from the command line.": [
  null,
  "Ihre Zugangsdaten erlauben Ihnen keinen Zugang zur Docker Registry von der Kommandozeile."
 ],
 "eg: my-image-stream": [
  null,
  "eg: my-image-stream"
 ],
 "no": [
  null,
  "Nein"
 ],
 "none": [
  null,
  "kein"
 ],
 "pending volume claims": [
  null,
  "ausstehende Volumenforderungen"
 ],
 "yes": [
  null,
  "Ja"
 ]
}));
