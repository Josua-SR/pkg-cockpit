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
  "language": "pt_BR",
  "x-generator": "Zanata 4.4.5"
 },
 "\"http\" Key escrow": [
  null,
  ""
 ],
 "\"tang\" Binding server": [
  null,
  ""
 ],
 "$0 Block Device": [
  null,
  "$0 Dispositivos de Bloco"
 ],
 "$0 Chunk Size": [
  null,
  "$0 Tamanho do Bloco"
 ],
 "$0 Disks": [
  null,
  "$0 Discos"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  "$0 dados + $1 sobrecarga usada de $2 ($3)"
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
 "$0 filesystems can not be made larger.": [
  null,
  "$0 sistemas de arquivos não podem ser maiores."
 ],
 "$0 filesystems can not be made smaller.": [
  null,
  "$0 sistemas de arquivos não podem ser menores."
 ],
 "$0 filesystems can not be resized here.": [
  null,
  "$0 sistemas de arquivos não podem ser redimensionados aqui."
 ],
 "$0 hour": [
  "$0 hours",
  "$0 horas",
  "$0 horas"
 ],
 "$0 is in active use": [
  null,
  "$0 está ativo e em uso"
 ],
 "$0 is not available from any repository.": [
  null,
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minuto",
  "$0 minutos"
 ],
 "$0 month": [
  "$0 months",
  "$0 mês",
  "$0 meses"
 ],
 "$0 of $1": [
  null,
  "$0 of $1"
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  "$0 usados of $1 ($2 salvos)"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 semana",
  "$0 semanas"
 ],
 "$0 will be installed.": [
  null,
  ""
 ],
 "$0 year": [
  "$0 years",
  "$0 ano",
  "$0 anos"
 ],
 "$0, $1 free": [
  null,
  "$0, $1 livre"
 ],
 "$name (from $host)": [
  null,
  "$nome(vindo de $host)"
 ],
 "${size} ${desc}": [
  null,
  "${size} ${desc}"
 ],
 "(default)": [
  null,
  "(padrão)"
 ],
 "(none)": [
  null,
  "(nenhum)"
 ],
 "--": [
  null,
  "--"
 ],
 "1 MiB": [
  null,
  "1 MiB"
 ],
 "1 day": [
  null,
  "1 dia"
 ],
 "1 hour": [
  null,
  "1 hora"
 ],
 "1 week": [
  null,
  "1 semana"
 ],
 "128 KiB": [
  null,
  "128 KiB"
 ],
 "16 KiB": [
  null,
  "16 KiB"
 ],
 "2 MiB": [
  null,
  "2 MiB"
 ],
 "32 KiB": [
  null,
  "32 KiB"
 ],
 "4 KiB": [
  null,
  "4 KiB"
 ],
 "5 minutes": [
  null,
  "5 minutos"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6 horas"
 ],
 "64 KiB": [
  null,
  "64 KiB"
 ],
 "8 KiB": [
  null,
  "8 KiB"
 ],
 "A disk is needed.": [
  null,
  "Um disco é necessário."
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  "Um disco de reposição precisa ser adicionado primeiro antes que este disco possa ser removido."
 ],
 "Activate": [
  null,
  "Ativar"
 ],
 "Activating $target": [
  null,
  "Ativando $target"
 ],
 "Active since": [
  null,
  "Ativo desde"
 ],
 "Add": [
  null,
  "Adicionar"
 ],
 "Add Disks": [
  null,
  "Adicionar Discos"
 ],
 "Add iSCSI Portal": [
  null,
  "Adicionar Portal iSCSI"
 ],
 "Add network key": [
  null,
  "Adicione a senha da rede"
 ],
 "Adding physical volume to $target": [
  null,
  "Adicionando volume físico a $target"
 ],
 "Additional packages:": [
  null,
  ""
 ],
 "Address": [
  null,
  "Endereço"
 ],
 "Allow \"http://\" URL": [
  null,
  ""
 ],
 "Apply": [
  null,
  "Aplicar"
 ],
 "At least $0 disks are needed.": [
  null,
  "Pelo menos $0 discos são necessários."
 ],
 "At least one disk is needed.": [
  null,
  "Pelo menos um disco é necessário."
 ],
 "Authentication required": [
  null,
  "Autenticação requerida"
 ],
 "Available targets on $0": [
  null,
  "Alvos disponíveis em $0"
 ],
 "Backing Device": [
  null,
  "Dispositivo de apoio"
 ],
 "Block": [
  null,
  "Bloco"
 ],
 "Block device for filesystems": [
  null,
  "Dispositivo de bloqueio para sistemas de arquivos"
 ],
 "Blocked": [
  null,
  "Bloqueado"
 ],
 "Can't delete while unlocked": [
  null,
  "Não é possível excluir enquanto desbloqueado"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Change": [
  null,
  "Alterar"
 ],
 "Change iSCSI Initiator Name": [
  null,
  "Alterar Nome do Iniciador iSCSI"
 ],
 "Checking $target": [
  null,
  "Vericando $target"
 ],
 "Checking RAID Device $target": [
  null,
  "Checando Dispositivo RAID $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "Checando e Reparando o Dispositivo RAID $target"
 ],
 "Checking installed software": [
  null,
  ""
 ],
 "Chunk Size": [
  null,
  "Tamanho do Bloco"
 ],
 "Cleaning up for $target": [
  null,
  "Limpando $target"
 ],
 "Close": [
  null,
  "Fechar"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "Compatível com todos os sistemas e dispositivos (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "Compatível com sistema moderno e discos rígidos > 2TB (GPT)"
 ],
 "Compression": [
  null,
  "Compressão"
 ],
 "Confirm passphrase": [
  null,
  "Confirmar senha"
 ],
 "Content": [
  null,
  "Conteúdo"
 ],
 "Create": [
  null,
  "Criar"
 ],
 "Create Logical Volume": [
  null,
  "Criar Volume Lógico"
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
 "Create VDO Device": [
  null,
  "Criar dispositivo VDO"
 ],
 "Create Volume Group": [
  null,
  "Criar Grupo de Volumes"
 ],
 "Create new Logical Volume": [
  null,
  "Criar novo Volume Lógico"
 ],
 "Create partition": [
  null,
  "Criar partição"
 ],
 "Create partition on $0": [
  null,
  "Criar partição em $0"
 ],
 "Create partition table": [
  null,
  "Criar tabela de partições"
 ],
 "Creating RAID Device $target": [
  null,
  "Criando Dispositivo RAID $target"
 ],
 "Creating filesystem on $target": [
  null,
  "Criando sistema de arquivos em $target"
 ],
 "Creating logical volume $target": [
  null,
  "Criando volume lógico $target"
 ],
 "Creating partition $target": [
  null,
  "Criando partição $target"
 ],
 "Creating snapshot of $target": [
  null,
  "Criando snapshot de $target"
 ],
 "Creating volume group $target": [
  null,
  "Criando grupo de volume $target"
 ],
 "Custom": [
  null,
  "Personalizado"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "Customizado (Digite tipo de sistema de arquivos)"
 ],
 "Custom encryption options": [
  null,
  "Opções de criptografia personalizadas"
 ],
 "Custom mount option": [
  null,
  "Opção de montagem personalizada"
 ],
 "Custom mount options": [
  null,
  "Opções de montagem personalizadas"
 ],
 "DISK IS FAILING": [
  null,
  "O DISCO ESTÁ FALHANDO"
 ],
 "Data Used": [
  null,
  "Dados Usados"
 ],
 "Deactivate": [
  null,
  "Desativar"
 ],
 "Deactivating $target": [
  null,
  "Desativando $target"
 ],
 "Deduplication": [
  null,
  "Desduplicação"
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
  "Deletando $0"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "A exclusão de um dispositivo RAID apagará todos os dados nele."
 ],
 "Deleting a VDO device will erase all data on it.": [
  null,
  "A exclusão de um dispositivo VDO apagará todos os dados nele."
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "Excluindo um volume lógico irá excluir todos os dados nele."
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
  "Excluindo grupo de volume $target"
 ],
 "Device File": [
  null,
  "Arquivo do dispositivo"
 ],
 "Device is read-only": [
  null,
  "Dispositivo é somente leitura"
 ],
 "Disk": [
  null,
  "Disco"
 ],
 "Disk is OK": [
  null,
  "O Disco está OK"
 ],
 "Disks": [
  null,
  "Discos"
 ],
 "Don't overwrite existing data": [
  null,
  "Não sobrescrever dados existentes"
 ],
 "Downloading $0": [
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
  "Editar"
 ],
 "Ejecting $target": [
  null,
  "Ejetando $target"
 ],
 "Emptying $target": [
  null,
  "Esvaziando $target"
 ],
 "Encrypted $0": [
  null,
  "Encriptado"
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "Encriptado EXT4 (LUKS)"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "Volume Lógico Criptografado de $0"
 ],
 "Encrypted Partition of $0": [
  null,
  "Partição Criptografada de $0"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "Encriptado XFS (LUKS)"
 ],
 "Encrypted volumes can not be resized here.": [
  null,
  "Volumes criptografados não podem ser redimensionados aqui."
 ],
 "Encrypted volumes need to be unlocked before they can be resized.": [
  null,
  "Volumes criptografados precisam ser desbloqueados antes de serem redimensionados."
 ],
 "Encryption": [
  null,
  "Encriptação"
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
 "Existing passphrase": [
  null,
  "Frase-chave existente"
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
  "Montagem do Sistema de Arquivos"
 ],
 "Filesystem Name": [
  null,
  "Nome do Sistema de Arquivos"
 ],
 "Filesystem type": [
  null,
  "Tipo do Sistema de Arquivos"
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
  "Livre"
 ],
 "Free Space": [
  null,
  "Espaço Livre"
 ],
 "Go to now": [
  null,
  "Ir para agora"
 ],
 "Grow": [
  null,
  "Crescer"
 ],
 "Grow Logical Volume": [
  null,
  "Aumentar o Volume Lógico"
 ],
 "Grow logical size of $0": [
  null,
  "Crescer tamanho lógico de $0"
 ],
 "Grow to take all space": [
  null,
  "Crescer para tomar todo o espaço"
 ],
 "HTTP method": [
  null,
  ""
 ],
 "In Sync": [
  null,
  "Em Sincronização"
 ],
 "Inactive volume": [
  null,
  "Volume inativo"
 ],
 "Index Memory": [
  null,
  "Memória de índice"
 ],
 "Install": [
  null,
  "Instale"
 ],
 "Install NFS Support": [
  null,
  ""
 ],
 "Install Software": [
  null,
  ""
 ],
 "Installing $0": [
  null,
  ""
 ],
 "Invalid username or password": [
  null,
  "Nome de usuário ou senha inválidos"
 ],
 "Jobs": [
  null,
  "Trabalhos"
 ],
 "Key can't be retrieved": [
  null,
  ""
 ],
 "Key does not work": [
  null,
  "Chave não funciona"
 ],
 "Key is obsolete": [
  null,
  "A chave está obsoleta"
 ],
 "Key is okay": [
  null,
  "A chave está ok"
 ],
 "Key server address": [
  null,
  "Endereço do servidor de chaves"
 ],
 "Local Mount Point": [
  null,
  "Ponto de montagem local"
 ],
 "Lock": [
  null,
  "Travar"
 ],
 "Locking $target": [
  null,
  "Bloqueando $target"
 ],
 "Logical": [
  null,
  "Logical"
 ],
 "Logical Size": [
  null,
  "Tamanho Lógico"
 ],
 "Logical Volume": [
  null,
  "Volume Lógico"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "Volume Lógico (Snapshot)"
 ],
 "Logical Volume of $0": [
  null,
  "Volume Lógico de $0"
 ],
 "Manually verify the key on the server: ": [
  null,
  "Verificar manualmente a chave no servidor:"
 ],
 "Marking $target as faulty": [
  null,
  "Marcando $target como defeituoso"
 ],
 "Member of RAID Device": [
  null,
  "Membro do Dispositivo RAID"
 ],
 "Member of RAID Device $0": [
  null,
  "Membro do Dispositivo RAID $0"
 ],
 "Metadata Used": [
  null,
  "Metadados Usados"
 ],
 "Method": [
  null,
  ""
 ],
 "Modifying $target": [
  null,
  "Modificando $target"
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
 "Mount at boot": [
  null,
  "Monte na Inicialização"
 ],
 "Mount options": [
  null,
  "Opções de montagem"
 ],
 "Mount point can not be empty": [
  null,
  "O ponto de montagem não pode estar vazio"
 ],
 "Mount point cannot be empty.": [
  null,
  "O ponto de montagem não pode estar vazio"
 ],
 "Mount point must start with \"/\".": [
  null,
  "O ponto de montagem deve começar com \"/\"."
 ],
 "Mount read only": [
  null,
  "Monte só de leitura"
 ],
 "Mounted At": [
  null,
  "Montado Em"
 ],
 "Mounting": [
  null,
  "Montando"
 ],
 "Mounting $target": [
  null,
  "Montando $target"
 ],
 "NFS Mount": [
  null,
  "Montagem NFS"
 ],
 "NFS Mounts": [
  null,
  "NFS Mounts"
 ],
 "NFS Support not installed": [
  null,
  ""
 ],
 "NTFS - Compatible with most systems": [
  null,
  "NTFS - Compatível com a maioria dos sistemas"
 ],
 "Name": [
  null,
  "Nome"
 ],
 "Name can not be empty.": [
  null,
  "O nome não pode estar vazio."
 ],
 "Name cannot be empty.": [
  null,
  "O nome não pode estar vazio."
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  "O nome não pode ser maior do que 127 caracteres."
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "O nome não pode conter o caractere '$0'."
 ],
 "Name cannot contain whitespace.": [
  null,
  "Nome não pode conter espaço em branco."
 ],
 "Network keys": [
  null,
  "Chaves de rede"
 ],
 "New NFS Mount": [
  null,
  "Nova montagem de volume NFS"
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
  "Nenhum Volume Lógico"
 ],
 "No NFS mounts set up": [
  null,
  "Nenhum volume NFS montado"
 ],
 "No disks are available.": [
  null,
  "Sem discos disponíveis."
 ],
 "No drives attached": [
  null,
  "Não há unidades anexadas"
 ],
 "No free space": [
  null,
  "Não há espaço livre"
 ],
 "No iSCSI targets set up": [
  null,
  "Nenhum destino iSCSI configurado"
 ],
 "No media inserted": [
  null,
  "Nenhuma mídia inserida"
 ],
 "No partitioning": [
  null,
  "Sem particionamento"
 ],
 "No storage set up as RAID": [
  null,
  "Nenhum armazenamento configurado como RAID"
 ],
 "No storage set up as VDO": [
  null,
  "Nenhum armazenamento configurado como VDO"
 ],
 "No volume groups created": [
  null,
  "Nenhum grupo de volume criado"
 ],
 "Not found": [
  null,
  "Não encontrado"
 ],
 "Not mounted": [
  null,
  "Não montado"
 ],
 "Not running": [
  null,
  "Não está rodando"
 ],
 "Off": [
  null,
  "Desligado"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "On": [
  null,
  "Ligado"
 ],
 "Only $0 of $1 are used.": [
  null,
  "Somente $0 de $1 está em uso."
 ],
 "Operation '$operation' on $target": [
  null,
  "Operação '$operation' em $target"
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
  "Sobrescrever dados existentes com zeros"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit caiu"
 ],
 "Partition": [
  null,
  "Partição"
 ],
 "Partition of $0": [
  null,
  "Partição de $0"
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
  "A senha não pode estar vazia"
 ],
 "Passphrases do not match": [
  null,
  "As senhas não correspondem"
 ],
 "Password": [
  null,
  "Senha"
 ],
 "Path on Server": [
  null,
  "Caminho no servidor"
 ],
 "Path on server cannot be empty.": [
  null,
  "Caminho no servidor não pode estar vazio."
 ],
 "Path on server must start with \"/\".": [
  null,
  "Caminho no servidor deve começar com \"/\"."
 ],
 "Physical": [
  null,
  "Fisica"
 ],
 "Physical Volume": [
  null,
  "Volume Físico"
 ],
 "Physical Volumes": [
  null,
  "Volumes Físicos"
 ],
 "Physical volume of $0": [
  null,
  "Volume físico de $0"
 ],
 "Physical volumes can not be resized here.": [
  null,
  "Volumes físicos não podem ser redimensionados aqui."
 ],
 "Please confirm deletion of $0": [
  null,
  "Por favor, confirme a remoção de $0"
 ],
 "Please confirm network key removal": [
  null,
  "Por favor, confirme a remoção da chave de rede"
 ],
 "Please confirm stopping of $0": [
  null,
  "Por favor confirme a parada de $0"
 ],
 "Pool": [
  null,
  "Pool"
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "Buscando por  Thin Logical Volumes"
 ],
 "Pool for Thin Volumes": [
  null,
  "Pool para Volumes Finos"
 ],
 "Pool for thinly provisioned volumes": [
  null,
  "Pool para volumes finamente provisionados"
 ],
 "Port": [
  null,
  "Porta"
 ],
 "Process": [
  null,
  "Processo"
 ],
 "Purpose": [
  null,
  "Propósito"
 ],
 "RAID ($0)": [
  null,
  "RAID ($0)"
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
  "Dispositivo RAID $0"
 ],
 "RAID Devices": [
  null,
  "Dispositivos RAID"
 ],
 "RAID Level": [
  null,
  "Nível de RAID"
 ],
 "RAID Member": [
  null,
  "Membro RAID"
 ],
 "Reading": [
  null,
  "Lendo"
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
  "Recuperando Dispositivo RAID $target"
 ],
 "Removals:": [
  null,
  ""
 ],
 "Remove": [
  null,
  "Remover"
 ],
 "Remove device": [
  null,
  "Remover dispositivo"
 ],
 "Remove key": [
  null,
  "Remover chave"
 ],
 "Removing $0": [
  null,
  ""
 ],
 "Removing $target from RAID Device": [
  null,
  "Removendo $target de Dispositivo RAID"
 ],
 "Removing network keys might prevent unattended booting.": [
  null,
  "Remover chaves de rede pode impedir a inicialização automática."
 ],
 "Removing physical volume from $target": [
  null,
  "Removendo volume físico de $target"
 ],
 "Rename": [
  null,
  "Renomear"
 ],
 "Rename Logical Volume": [
  null,
  "Renomear Volume Lógico"
 ],
 "Rename Volume Group": [
  null,
  "Renomear Grupo de Volume"
 ],
 "Renaming $target": [
  null,
  "Renomeando $target"
 ],
 "Repairing $target": [
  null,
  "Reparando $target"
 ],
 "Resizing $target": [
  null,
  "Redimensionando $target"
 ],
 "Retrieving the key from $0 has failed: $1.": [
  null,
  ""
 ],
 "Running": [
  null,
  "Executando"
 ],
 "SMART self-test of $target": [
  null,
  "SMART auto-teste de $target"
 ],
 "Securely erasing $target": [
  null,
  "Apagando com segurança $target"
 ],
 "Server": [
  null,
  "Servidor"
 ],
 "Server Address": [
  null,
  "Endereço do Servidor"
 ],
 "Server address cannot be empty": [
  null,
  ""
 ],
 "Server address cannot be empty.": [
  null,
  "O endereço do servidor não pode estar vazio."
 ],
 "Server can't be reached": [
  null,
  "Servidor não pode ser encontrado"
 ],
 "Server cannot be empty.": [
  null,
  "O servidor não pode estar vazio."
 ],
 "Service": [
  null,
  "Serviço"
 ],
 "Session": [
  null,
  "Sessão"
 ],
 "Setting up loop device $target": [
  null,
  "Configurando o dispositivo de loop $target"
 ],
 "Shrink": [
  null,
  "Compactar"
 ],
 "Shrink Logical Volume": [
  null,
  "Compactar Logical Volume"
 ],
 "Size": [
  null,
  "Tamanho"
 ],
 "Size cannot be negative": [
  null,
  "O tamanho não pode ser negativo"
 ],
 "Size cannot be zero": [
  null,
  "O tamanho não pode ser zero"
 ],
 "Size is too large": [
  null,
  "O tamanho é muito extenso"
 ],
 "Size must be a number": [
  null,
  "O tamanho deve ser um número"
 ],
 "Size must be at least $0": [
  null,
  "O tamanho deve ser pelo menos $0"
 ],
 "Spare": [
  null,
  "Reposição"
 ],
 "Start": [
  null,
  "Iniciar"
 ],
 "Start Multipath": [
  null,
  "Iniciar Multipath"
 ],
 "Starting RAID Device $target": [
  null,
  "Iniciando o Dispositivo RAID $target"
 ],
 "Starting swapspace $target": [
  null,
  "Iniciando swapspace $target"
 ],
 "Stop": [
  null,
  "Pare"
 ],
 "Stop Device": [
  null,
  "Parar dispositivo"
 ],
 "Stop and Unmount": [
  null,
  "Parar e desmontar"
 ],
 "Stop and remove": [
  null,
  "Pare e remova"
 ],
 "Stopping RAID Device $target": [
  null,
  "Parando o Dispositivo RAID $target"
 ],
 "Stopping swapspace $target": [
  null,
  "Parando swapspace $target"
 ],
 "Storage": [
  null,
  "Armazenamento"
 ],
 "Storage Logs": [
  null,
  "Logs de Armazenamento"
 ],
 "Store passphrase": [
  null,
  "Armazene a senha"
 ],
 "Stored Passphrase": [
  null,
  "Frase-senha armazenada"
 ],
 "Stored passphrase": [
  null,
  "Senha armazenada"
 ],
 "Support is installed.": [
  null,
  ""
 ],
 "Swap": [
  null,
  "Swap"
 ],
 "Synchronizing RAID Device $target": [
  null,
  "Sincronizando Dispositivo RAID $target"
 ],
 "Targets": [
  null,
  "Alvos"
 ],
 "The \"storaged\" API is not available on this system.": [
  null,
  "A API \"armazenada\" não está disponível neste sistema."
 ],
 "The RAID Array is in a degraded state": [
  null,
  "A matriz RAID está em um estado degradado"
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  "O dispositivo RAID deve estar em execução para adicionar discos sobressalentes."
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  "O dispositivo RAID deve estar em execução para remover discos."
 ],
 "The creation of this VDO device did not finish and the device can't be used.": [
  null,
  "A criação deste dispositivo VDO não foi concluída e o dispositivo não pode ser usado."
 ],
 "The filesystem is in use by login sessions and system services.                Proceeding will stop these.": [
  null,
  "O sistema de arquivos está em uso por sessões de login e serviços do sistema.                 Prosseguir interromperá isso."
 ],
 "The filesystem is in use by login sessions.                Proceeding will stop these.": [
  null,
  "O sistema de arquivos está em uso por sessões de login.                Prosseguir interromperá isso."
 ],
 "The filesystem is in use by system services.                Proceeding will stop these.": [
  null,
  "O sistema de arquivos está sendo usado pelos serviços do sistema.                Proseguir interromperá isso."
 ],
 "The key of $0 will be removed.": [
  null,
  "A chave de $0 será removida."
 ],
 "The key server at $0 can not be reached.  This network key can not unlock the encrypted data right now, but it might be able to when the server becomes reachable again.": [
  null,
  "A chave do servidor $0 não pode ser alcançada. Essa chave de rede não pode desbloquear os dados criptografados agora, mas isso pode ser possível quando o servidor tornar-se acessível novamente."
 ],
 "The last disk of a RAID device cannot be removed.": [
  null,
  "O último disco de um dispositivo RAID não pode ser removido."
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  "O último volume físico de um grupo de volumes não pode ser removido."
 ],
 "The output should match this text: ": [
  null,
  "A saída deve corresponder a este texto:"
 ],
 "The server has returned a key that doesn't work.": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "Ao usuário <b>$0</b> não é permitido gerenciar o armazaenamento"
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  "Há dispositivos com vários caminhos no sistema, mas o serviço de multicaminho não está sendo executado."
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  "Não há espaço livre suficiente em outro lugar para remover este volume físico. Pelo menos mais $0 de espaço livre é necessário."
 ],
 "Thin Logical Volume": [
  null,
  "Thin Logical Volume"
 ],
 "This NFS mount is in use and only its options can be changed.": [
  null,
  "Esta montagem NFS está em uso e somente suas opções podem ser alteradas."
 ],
 "This VDO device does not use all of its backing device.": [
  null,
  "Este dispositivo VDO não usa todo o seu dispositivo de apoio."
 ],
 "This box must be checked to confirm that the key will be transported without HTTPS": [
  null,
  ""
 ],
 "This device has filesystems that are currently in use.                Proceeding will unmount all filesystems on it.": [
  null,
  "Não há sistemas de arquivos que você possa montar ou desmontar.\nContate seu administrador de sistemas."
 ],
 "This device is currently used for RAID devices.": [
  null,
  "Este dispositivo é atualmente usado por dispositivos RAID."
 ],
 "This device is currently used for RAID devices.                Proceeding will remove it from its RAID devices.": [
  null,
  "Este dispositivo é usado atualmente para dispositivos RAID.                Proceder o removerá dos seus dispositivos RAID."
 ],
 "This device is currently used for VDO devices.": [
  null,
  "Este dispositivo é usado atualmente para dispositivos VDO."
 ],
 "This device is currently used for volume groups.": [
  null,
  "Este dispositivo é usado atualmente para grupos de volumes."
 ],
 "This device is currently used for volume groups.                Proceeding will remove it from its volume groups.": [
  null,
  "Este dispositivo é usado atualmente para grupos de volumes.                Proceder irá removê-lo dos seus grupos de volumes."
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  "Este disco não pode ser removido enquanto o dispositivo está se recuperando."
 ],
 "This network key is not recognized anymore by the server.": [
  null,
  ""
 ],
 "This network key is obsolete. It is still functional but it should be replaced. A new key has been retrieved from the server.": [
  null,
  "Esta chave de rede está obsoleta. Ainda é funcional, mas deve ser substituída. Uma nova chave foi recuperada do servidor."
 ],
 "This network key is obsolete. It is still functional but it should be replaced. A new key has been securely retrieved from the server.": [
  null,
  "Esta chave de rede está obsoleta. Ainda é funcional, mas deve ser substituída. Uma nova chave foi recuperada com segurança do servidor."
 ],
 "This network key works fine right now and the encrypted data can be unlocked with it.": [
  null,
  "Esta chave de rede funciona bem agora e os dados criptografados podem ser desbloqueados com ela."
 ],
 "This volume needs to be activated before it can be resized.": [
  null,
  ""
 ],
 "Total size: $0": [
  null,
  ""
 ],
 "Trust Key": [
  null,
  ""
 ],
 "Trust new key": [
  null,
  ""
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "URL": [
  null,
  "URL"
 ],
 "URL cannot be empty": [
  null,
  ""
 ],
 "URL must start with either \"http:\" or \"https:\"": [
  null,
  ""
 ],
 "UUID": [
  null,
  "UUID"
 ],
 "Unable to reach server": [
  null,
  "Não é possível acessar o servidor"
 ],
 "Unable to remove mount": [
  null,
  ""
 ],
 "Unable to unmount filesystem": [
  null,
  ""
 ],
 "Unit": [
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
  "Nome de host desconhecido"
 ],
 "Unlock": [
  null,
  "Destravar"
 ],
 "Unlock at boot": [
  null,
  ""
 ],
 "Unlock read only": [
  null,
  ""
 ],
 "Unlocking $target": [
  null,
  "Desbloqueando $target"
 ],
 "Unmount": [
  null,
  "Desmontar"
 ],
 "Unmounting $target": [
  null,
  "Desmontando $target"
 ],
 "Unrecognized Data": [
  null,
  "Dados não reconhecidos"
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  ""
 ],
 "Unsupported volume": [
  null,
  "Volume não suportado"
 ],
 "Usage": [
  null,
  "Uso"
 ],
 "Use 512 Byte emulation": [
  null,
  ""
 ],
 "Use new key": [
  null,
  ""
 ],
 "Used": [
  null,
  "Usado"
 ],
 "Username": [
  null,
  "Nome de Usuário"
 ],
 "VDO Backing": [
  null,
  ""
 ],
 "VDO Device": [
  null,
  ""
 ],
 "VDO Device $0": [
  null,
  ""
 ],
 "VDO Devices": [
  null,
  ""
 ],
 "VDO backing devices can not be made smaller": [
  null,
  ""
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  "VFAT - Compatível com todos os sistemas e dispositivos"
 ],
 "Verify Key": [
  null,
  ""
 ],
 "Very securely erasing $target": [
  null,
  "Apagando com muita segurança $target"
 ],
 "Volume": [
  null,
  "Volume"
 ],
 "Volume Group": [
  null,
  "Grupo de volumes"
 ],
 "Volume Group $0": [
  null,
  "Grupo do Volume $0"
 ],
 "Volume Groups": [
  null,
  "Grupos do Volume"
 ],
 "Waiting for other software management operations to finish": [
  null,
  ""
 ],
 "Write-mostly": [
  null,
  "Maioria-Escrita"
 ],
 "Writing": [
  null,
  "Escrevendo"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS - Red Hat Enterprise Linux 7 padrão"
 ],
 "You might want to remove it.": [
  null,
  ""
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 bytes de data bynária]"
 ],
 "[binary data]": [
  null,
  "[dados binários]"
 ],
 "[no data]": [
  null,
  "[sem dados]"
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4 - Red Hat Enterprise Linux 6 padrão"
 ],
 "iSCSI Targets": [
  null,
  "Alvos iSCSI"
 ],
 "undefined": [
  null,
  "indefinido"
 ],
 "unknown target": [
  null,
  "alvo desconhecido"
 ],
 "unpartitioned space on $0": [
  null,
  "espaço não particionado em $0"
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 Sistema de Arquivos"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  "Dados encriptados"
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
 "storage-id-desc\u0004VDO Backing": [
  null,
  ""
 ],
 "storage\u0004Drive": [
  null,
  "Drive"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Hard Disk"
 ],
 "storage\u0004Optical Drive": [
  null,
  "Optical Drive"
 ],
 "storage\u0004Removable Drive": [
  null,
  "Removable Drive"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "Solid-State Disk"
 ],
 "format-bytes\u0004bytes": [
  null,
  "bytes"
 ]
}));
