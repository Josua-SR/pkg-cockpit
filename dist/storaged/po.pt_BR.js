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
  "language": "pt-BR",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Block Device": [
  null,
  ""
 ],
 "$0 Chunk Size": [
  null,
  ""
 ],
 "$0 Disks": [
  null,
  "$0 Discos"
 ],
 "$0 day": [
  "$0 days",
  "$0 dia",
  "$0 dias"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 disco não encontrado",
  "$0 discos não encontrados "
 ],
 "$0 hour": [
  "$0 hours",
  "$0 horas",
  "$0 horas"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minuto",
  "$0 minutos"
 ],
 "$0 month": [
  "$0 months",
  "",
  ""
 ],
 "$0 of $1": [
  null,
  "$0 of $1"
 ],
 "$0 week": [
  "$0 weeks",
  "",
  ""
 ],
 "$0 year": [
  "$0 years",
  "",
  ""
 ],
 "$0, $1 free": [
  null,
  ""
 ],
 "$name (from $host)": [
  null,
  "$nome(vindo de $host)"
 ],
 "(default)": [
  null,
  ""
 ],
 "(none)": [
  null,
  ""
 ],
 "1 MiB": [
  null,
  ""
 ],
 "1 day": [
  null,
  ""
 ],
 "1 hour": [
  null,
  ""
 ],
 "1 week": [
  null,
  ""
 ],
 "128 KiB": [
  null,
  ""
 ],
 "16 KiB": [
  null,
  ""
 ],
 "2 MiB": [
  null,
  ""
 ],
 "32 KiB": [
  null,
  ""
 ],
 "4 KiB": [
  null,
  ""
 ],
 "5 minutes": [
  null,
  ""
 ],
 "512 KiB": [
  null,
  ""
 ],
 "6 hours": [
  null,
  ""
 ],
 "64 KiB": [
  null,
  ""
 ],
 "8 KiB": [
  null,
  ""
 ],
 "<span>Encrypted $0</span>": [
  null,
  ""
 ],
 "<span>Encrypted Logical Volume of $0</span>": [
  null,
  ""
 ],
 "<span>Encrypted Partition of $0</span>": [
  null,
  ""
 ],
 "<span>Logical Volume of $0</span>": [
  null,
  ""
 ],
 "<span>Partition of $0</span>": [
  null,
  ""
 ],
 "Activate": [
  null,
  "Ativar"
 ],
 "Activating $target": [
  null,
  ""
 ],
 "Add": [
  null,
  "Adicionar"
 ],
 "Add Disks": [
  null,
  ""
 ],
 "Add iSCSI Portal": [
  null,
  ""
 ],
 "Adding physical volume to $target": [
  null,
  ""
 ],
 "Address": [
  null,
  "Endereço"
 ],
 "Apply": [
  null,
  ""
 ],
 "At least $0 disks are needed.": [
  null,
  ""
 ],
 "At least one disk is needed.": [
  null,
  ""
 ],
 "Authentication required": [
  null,
  ""
 ],
 "Available targets on $0": [
  null,
  ""
 ],
 "Block Device": [
  null,
  "Dispositivos de Bloco"
 ],
 "Block device for filesystems": [
  null,
  ""
 ],
 "Blocked": [
  null,
  "Bloqueado"
 ],
 "Can't delete while unlocked": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Change": [
  null,
  ""
 ],
 "Change iSCSI Initiator Name": [
  null,
  ""
 ],
 "Checking RAID Device $target": [
  null,
  ""
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  ""
 ],
 "Chunk Size": [
  null,
  "Tamanho do Bloco"
 ],
 "Cleaning up for $target": [
  null,
  ""
 ],
 "Close": [
  null,
  "Fechar"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  ""
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  ""
 ],
 "Confirm passphrase": [
  null,
  ""
 ],
 "Content": [
  null,
  "Conteúdo"
 ],
 "Create": [
  null,
  ""
 ],
 "Create Logical Volume": [
  null,
  ""
 ],
 "Create Partition": [
  null,
  "Criar Partição"
 ],
 "Create RAID Device": [
  null,
  "Criar dispositivo RAID"
 ],
 "Create Snapshot": [
  null,
  "Criar Snapshot"
 ],
 "Create Thin Volume": [
  null,
  "Criar Thin Volume"
 ],
 "Create Volume Group": [
  null,
  "Criar Grupo de Volumes"
 ],
 "Create new Logical Volume": [
  null,
  ""
 ],
 "Create partition": [
  null,
  "Criar partição"
 ],
 "Create partition on $0": [
  null,
  ""
 ],
 "Create partition table": [
  null,
  ""
 ],
 "Creating RAID Device $target": [
  null,
  ""
 ],
 "Creating filesystem on $target": [
  null,
  "Criando sistema de arquivos em $target"
 ],
 "Creating logical volume $target": [
  null,
  ""
 ],
 "Creating partition $target": [
  null,
  ""
 ],
 "Creating snapshot of $target": [
  null,
  ""
 ],
 "Creating volume group $target": [
  null,
  ""
 ],
 "Custom": [
  null,
  "Personalizado"
 ],
 "Custom (Enter filesystem type)": [
  null,
  ""
 ],
 "DISK IS FAILING": [
  null,
  ""
 ],
 "Data Used": [
  null,
  ""
 ],
 "Deactivate": [
  null,
  "Desativar"
 ],
 "Deactivating $target": [
  null,
  ""
 ],
 "Default": [
  null,
  "Padrão"
 ],
 "Delete": [
  null,
  "Excluir"
 ],
 "Deleting $target": [
  null,
  ""
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  ""
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  ""
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "A exclusão de uma partição apaga todos os dados da mesma."
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "A exclusão de um grupo de volumes apaga todos os dados do mesmo."
 ],
 "Deleting volume group $target": [
  null,
  ""
 ],
 "Device $0 is a member of RAID Array $1": [
  null,
  ""
 ],
 "Device $0 is a physical volume of $1": [
  null,
  ""
 ],
 "Device $0 is mounted on $1": [
  null,
  ""
 ],
 "Device is read-only": [
  null,
  ""
 ],
 "Disk is OK": [
  null,
  ""
 ],
 "Disks": [
  null,
  "Discos"
 ],
 "Don't overwrite existing data": [
  null,
  ""
 ],
 "Drive": [
  null,
  "Unidade"
 ],
 "Drives": [
  null,
  "Unidades"
 ],
 "Edit": [
  null,
  ""
 ],
 "Ejecting $target": [
  null,
  ""
 ],
 "Emptying $target": [
  null,
  "Esvaziando $target"
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "Encriptado EXT4 (LUKS)"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "Encriptado XFS (LUKS)"
 ],
 "Encryption": [
  null,
  ""
 ],
 "Encryption Options": [
  null,
  "Opções de Criptografia"
 ],
 "Erase": [
  null,
  "Apagar"
 ],
 "Erasing $target": [
  null,
  "Apagando $target"
 ],
 "Error": [
  null,
  "Erro"
 ],
 "Extended Partition": [
  null,
  "Partição Extendida"
 ],
 "FAILED": [
  null,
  "FALHOU"
 ],
 "Filesystem": [
  null,
  "Sistema de arquivos"
 ],
 "Filesystem Mounting": [
  null,
  ""
 ],
 "Filesystem Name": [
  null,
  ""
 ],
 "Filesystem type": [
  null,
  ""
 ],
 "Filesystems": [
  null,
  "Sistema de Arquivos"
 ],
 "Format": [
  null,
  "Formate"
 ],
 "Format $0": [
  null,
  "Formate $0"
 ],
 "Format Disk $0": [
  null,
  "Formate Disco $0"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "A formatação de um disco apaga todos os dados do mesmo."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "Formatar esse dispositivo apagará todos os dados contidos nele."
 ],
 "Free": [
  null,
  ""
 ],
 "Free Space": [
  null,
  ""
 ],
 "Go to now": [
  null,
  ""
 ],
 "In Sync": [
  null,
  "Em Sincronização"
 ],
 "Inactive volume": [
  null,
  ""
 ],
 "Invalid username or password": [
  null,
  ""
 ],
 "Jobs": [
  null,
  ""
 ],
 "Lock": [
  null,
  "Travar"
 ],
 "Locking $target": [
  null,
  ""
 ],
 "Logical Volume": [
  null,
  "Volume Lógico"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "Volume Lógico (Snapshot)"
 ],
 "Marking $target as faulty": [
  null,
  ""
 ],
 "Member of RAID Device": [
  null,
  ""
 ],
 "Member of RAID Device $0": [
  null,
  ""
 ],
 "Metadata Used": [
  null,
  ""
 ],
 "Modifying $target": [
  null,
  ""
 ],
 "Mount": [
  null,
  "Montar"
 ],
 "Mount Options": [
  null,
  "Opções de Montagem"
 ],
 "Mount Point": [
  null,
  "Ponto de Montagem"
 ],
 "Mounted At": [
  null,
  ""
 ],
 "Mounting": [
  null,
  ""
 ],
 "Mounting $target": [
  null,
  ""
 ],
 "NTFS - Compatible with most systems": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nome"
 ],
 "Name cannot be empty.": [
  null,
  ""
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  ""
 ],
 "Name cannot contain the character '$0'.": [
  null,
  ""
 ],
 "Name cannot contain whitespace.": [
  null,
  "Nome não pode conter espaço em branco."
 ],
 "Next": [
  null,
  "Próximo"
 ],
 "No Filesystem": [
  null,
  "Nenhum Sistema de Arquivos"
 ],
 "No Logical Volumes": [
  null,
  ""
 ],
 "No drives attached": [
  null,
  ""
 ],
 "No free space": [
  null,
  ""
 ],
 "No iSCSI targets set up": [
  null,
  ""
 ],
 "No media inserted": [
  null,
  ""
 ],
 "No partitioning": [
  null,
  ""
 ],
 "No storage set up as RAID": [
  null,
  ""
 ],
 "No volume groups created": [
  null,
  ""
 ],
 "Not found": [
  null,
  "Não encontrado"
 ],
 "Not running": [
  null,
  "Não está rodando"
 ],
 "Off": [
  null,
  "Desligado"
 ],
 "On": [
  null,
  "Ligado"
 ],
 "Operation '$operation' on $target": [
  null,
  ""
 ],
 "Options": [
  null,
  "Opções"
 ],
 "Other Devices": [
  null,
  "Outros dispositivos"
 ],
 "Overwrite existing data with zeros": [
  null,
  ""
 ],
 "Partition": [
  null,
  "Partição"
 ],
 "Partitioning": [
  null,
  "Particionamento"
 ],
 "Passphrase": [
  null,
  "Frase-senha"
 ],
 "Passphrase cannot be empty": [
  null,
  ""
 ],
 "Passphrases do not match": [
  null,
  ""
 ],
 "Password": [
  null,
  "Senha"
 ],
 "Physical Volume": [
  null,
  ""
 ],
 "Physical Volumes": [
  null,
  "Volumes Físicos"
 ],
 "Physical volume of $0": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  "Por favor, confirme a remoção de $0"
 ],
 "Pool": [
  null,
  ""
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "Buscando por  Thin Logical Volumes"
 ],
 "Pool for Thin Volumes": [
  null,
  ""
 ],
 "Pool for thinly provisioned volumes": [
  null,
  ""
 ],
 "Port": [
  null,
  ""
 ],
 "Purpose": [
  null,
  ""
 ],
 "RAID ($0)": [
  null,
  ""
 ],
 "RAID 0": [
  null,
  "RAID 0"
 ],
 "RAID 0 (Stripe)": [
  null,
  "RAID 0 (Distribuição)"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (Espelhamento)"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RAID 10 (Distribuição de Espelhos)"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (Paridade Dedicada)"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (Paridade Distribuída)"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (Paridade Duplamente Distribuída)"
 ],
 "RAID Device": [
  null,
  "Dispositivo RAID"
 ],
 "RAID Device $0": [
  null,
  ""
 ],
 "RAID Devices": [
  null,
  ""
 ],
 "RAID Level": [
  null,
  "Nível de RAID"
 ],
 "RAID Member": [
  null,
  ""
 ],
 "Reading": [
  null,
  ""
 ],
 "Reboot": [
  null,
  "Reiniciar"
 ],
 "Recovering": [
  null,
  "Recuperação"
 ],
 "Recovering RAID Device $target": [
  null,
  ""
 ],
 "Removing $target from RAID Device": [
  null,
  ""
 ],
 "Removing physical volume from $target": [
  null,
  ""
 ],
 "Rename": [
  null,
  "Renomear"
 ],
 "Rename Logical Volume": [
  null,
  ""
 ],
 "Rename Volume Group": [
  null,
  ""
 ],
 "Renaming $target": [
  null,
  ""
 ],
 "Resize": [
  null,
  "Re-dimensionar"
 ],
 "Resize Filesystem": [
  null,
  ""
 ],
 "Resize Logical Volume": [
  null,
  ""
 ],
 "Resizing $target": [
  null,
  ""
 ],
 "Running": [
  null,
  "Executando"
 ],
 "SMART self-test of $target": [
  null,
  ""
 ],
 "Securely erasing $target": [
  null,
  ""
 ],
 "Server Address": [
  null,
  ""
 ],
 "Server address cannot be empty.": [
  null,
  ""
 ],
 "Setting up loop device $target": [
  null,
  ""
 ],
 "Size": [
  null,
  ""
 ],
 "Size cannot be negative": [
  null,
  ""
 ],
 "Size cannot be zero": [
  null,
  ""
 ],
 "Size is too large": [
  null,
  ""
 ],
 "Size must be a number": [
  null,
  ""
 ],
 "Spare": [
  null,
  "Disponível"
 ],
 "Start": [
  null,
  "Iniciar"
 ],
 "Start Multipath": [
  null,
  ""
 ],
 "Start Scrubbing": [
  null,
  "Iniciando Scrubbing"
 ],
 "Starting RAID Device $target": [
  null,
  ""
 ],
 "Starting swapspace $target": [
  null,
  ""
 ],
 "Stop": [
  null,
  "Pare"
 ],
 "Stop Scrubbing": [
  null,
  "Parando Scrubbing"
 ],
 "Stopping RAID Device $target": [
  null,
  ""
 ],
 "Stopping swapspace $target": [
  null,
  ""
 ],
 "Storage": [
  null,
  ""
 ],
 "Storage Log": [
  null,
  "Log de armazenamento"
 ],
 "Storage Logs": [
  null,
  ""
 ],
 "Store passphrase": [
  null,
  ""
 ],
 "Stored Passphrase": [
  null,
  "Frase-senha armazenada"
 ],
 "Stored passphrase": [
  null,
  ""
 ],
 "Swap": [
  null,
  ""
 ],
 "Synchronizing RAID Device $target": [
  null,
  ""
 ],
 "Targets": [
  null,
  "Alvos"
 ],
 "The \"storaged\" API is not available on this system.": [
  null,
  ""
 ],
 "The RAID Array is in a degraded state": [
  null,
  ""
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "Ao usuário <b>$0</b> não é permitido gerenciar o armazaenamento"
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  ""
 ],
 "There is not enough free space elsewhere to remove this physical volume.  At least $0 more free space is needed.": [
  null,
  ""
 ],
 "Thin Logical Volume": [
  null,
  "Thin Logical Volume"
 ],
 "This logical volume cannot be made smaller.": [
  null,
  ""
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "UUID": [
  null,
  ""
 ],
 "Unable to reach server": [
  null,
  ""
 ],
 "Unknown": [
  null,
  "Desconhecido"
 ],
 "Unknown ($0)": [
  null,
  "Desconhecido ($0)"
 ],
 "Unknown host name": [
  null,
  ""
 ],
 "Unlock": [
  null,
  "Destravar"
 ],
 "Unlocking $target": [
  null,
  ""
 ],
 "Unmount": [
  null,
  "Desmontar"
 ],
 "Unmounting $target": [
  null,
  ""
 ],
 "Unrecognized Data": [
  null,
  ""
 ],
 "Unsupported volume": [
  null,
  ""
 ],
 "Usage": [
  null,
  ""
 ],
 "Used": [
  null,
  ""
 ],
 "Username": [
  null,
  ""
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  ""
 ],
 "Very securely erasing $target": [
  null,
  ""
 ],
 "Volume": [
  null,
  ""
 ],
 "Volume Group": [
  null,
  "Grupo de volumes"
 ],
 "Volume Group $0": [
  null,
  ""
 ],
 "Volume Groups": [
  null,
  ""
 ],
 "Write-mostly": [
  null,
  "Maioria-Escrita"
 ],
 "Writing": [
  null,
  ""
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  ""
 ],
 "[$0 bytes of binary data]": [
  null,
  ""
 ],
 "[binary data]": [
  null,
  ""
 ],
 "[no data]": [
  null,
  ""
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  ""
 ],
 "iSCSI Targets": [
  null,
  ""
 ],
 "unknown target": [
  null,
  ""
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 Sistema de Arquivos"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  ""
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "Outros Dados"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "Swap Espaço"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "Dados não reconhecidos"
 ],
 "storage\u0004Assessment": [
  null,
  "Avaliação"
 ],
 "storage\u0004Bitmap": [
  null,
  "Bitmap"
 ],
 "storage\u0004Capacity": [
  null,
  "Capacidade"
 ],
 "storage\u0004Device": [
  null,
  "Dispositivo"
 ],
 "storage\u0004Device File": [
  null,
  "Arquivo de Dispositivo"
 ],
 "storage\u0004Drive": [
  null,
  "Drive"
 ],
 "storage\u0004Firmware Version": [
  null,
  "Versão do Firmware"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Hard Disk"
 ],
 "storage\u0004Model": [
  null,
  "Modelo"
 ],
 "storage\u0004Multipathed Devices": [
  null,
  ""
 ],
 "storage\u0004Optical Drive": [
  null,
  "Optical Drive"
 ],
 "storage\u0004RAID Level": [
  null,
  "Nível de RAID"
 ],
 "storage\u0004Removable Drive": [
  null,
  "Removable Drive"
 ],
 "storage\u0004Serial Number": [
  null,
  "Número de Série"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "Solid-State Disk"
 ],
 "storage\u0004State": [
  null,
  "Estado"
 ],
 "storage\u0004UUID": [
  null,
  "UUID"
 ],
 "storage\u0004World Wide Name": [
  null,
  "Nome Global"
 ],
 "format-bytes\u0004bytes": [
  null,
  "bytes"
 ]
}));
