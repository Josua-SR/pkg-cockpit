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
 "$0 is in active use": [
  null,
  "$0 está ativo e em uso"
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
 "$0 week": [
  "$0 weeks",
  "$0 semana",
  "$0 semanas"
 ],
 "$0 year": [
  "$0 years",
  "$0 ano",
  "$0 anos"
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
 "<span>Encrypted $0</span>": [
  null,
  "<span>Criptografado $0</span>"
 ],
 "<span>Encrypted Logical Volume of $0</span>": [
  null,
  "<span>Volume Lógico Criptografado de $0</span>"
 ],
 "<span>Encrypted Partition of $0</span>": [
  null,
  "<span>Partição Criptografada de $0</span>"
 ],
 "<span>Logical Volume of $0</span>": [
  null,
  "<span>Volume Lógico de $0</span>"
 ],
 "<span>Partition of $0</span>": [
  null,
  "<span>Partição de $0</span>"
 ],
 "Activate": [
  null,
  "Ativar"
 ],
 "Activating $target": [
  null,
  "Ativando $target"
 ],
 "Add": [
  null,
  "Adicionar"
 ],
 "Add iSCSI Portal": [
  null,
  "Adicionar Portal iSCSI"
 ],
 "Adding physical volume to $target": [
  null,
  "Adicionando volume físico a $target"
 ],
 "Address": [
  null,
  "Endereço"
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
 "Block Device": [
  null,
  "Dispositivos de Bloco"
 ],
 "Block device for filesystems": [
  null,
  "Dispositivo de bloqueio para sistemas de arquivos"
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
 "Checking RAID Device $target": [
  null,
  "Checando Dispositivo RAID $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "Checando e Reparando o Dispositivo RAID $target"
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
  ""
 ],
 "Custom mount options": [
  null,
  ""
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
 "Device is read-only": [
  null,
  "Dispositivo é somente leitura"
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
 "Extended Partition": [
  null,
  "Partição Extendida"
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
 "Inactive volume": [
  null,
  "Volume inativo"
 ],
 "Invalid username or password": [
  null,
  "Nome de usuário ou senha inválidos"
 ],
 "Jobs": [
  null,
  "Trabalhos"
 ],
 "Lock": [
  null,
  "Travar"
 ],
 "Locking $target": [
  null,
  "Bloqueando $target"
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
  ""
 ],
 "Mount options": [
  null,
  ""
 ],
 "Mount point can not be empty": [
  null,
  ""
 ],
 "Mount read only": [
  null,
  ""
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
 "NTFS - Compatible with most systems": [
  null,
  "NTFS - Compatível com a maioria dos sistemas"
 ],
 "Name": [
  null,
  "Nome"
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
 "No volume groups created": [
  null,
  "Nenhum grupo de volume criado"
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
 "Physical Volume": [
  null,
  "Volume Físico"
 ],
 "Physical volume of $0": [
  null,
  "Volume físico de $0"
 ],
 "Please confirm deletion of $0": [
  null,
  "Por favor, confirme a remoção de $0"
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
 "Recovering RAID Device $target": [
  null,
  "Recuperando Dispositivo RAID $target"
 ],
 "Removing $target from RAID Device": [
  null,
  "Removendo $target de Dispositivo RAID"
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
 "Resize": [
  null,
  "Re-dimensionar"
 ],
 "Resize Filesystem": [
  null,
  "Redimensionar Sistema de Arquivos"
 ],
 "Resize Logical Volume": [
  null,
  "Redimensionar Volume Lógico"
 ],
 "Resizing $target": [
  null,
  "Redimensionando $target"
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
 "Server Address": [
  null,
  "Endereço do Servidor"
 ],
 "Server address cannot be empty.": [
  null,
  "O endereço do servidor não pode estar vazio."
 ],
 "Setting up loop device $target": [
  null,
  "Configurando o dispositivo de loop $target"
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
 "Start": [
  null,
  "Iniciar"
 ],
 "Start Multipath": [
  null,
  "Iniciar Multipath"
 ],
 "Start Scrubbing": [
  null,
  "Iniciando Scrubbing"
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
 "Stop Scrubbing": [
  null,
  "Parando Scrubbing"
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
 "Storage Log": [
  null,
  "Log de armazenamento"
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
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "Ao usuário <b>$0</b> não é permitido gerenciar o armazaenamento"
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  "Há dispositivos com vários caminhos no sistema, mas o serviço de multicaminho não está sendo executado."
 ],
 "Thin Logical Volume": [
  null,
  "Thin Logical Volume"
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
 "This device is currently used for volume groups.": [
  null,
  "Este dispositivo é usado atualmente para grupos de volumes."
 ],
 "This device is currently used for volume groups.                Proceeding will remove it from its volume groups.": [
  null,
  "Este dispositivo é usado atualmente para grupos de volumes.                Proceder irá removê-lo dos seus grupos de volumes."
 ],
 "This logical volume cannot be made smaller.": [
  null,
  "Este volume lógico não pode ser reduzido."
 ],
 "Type": [
  null,
  "Tipo"
 ],
 "UUID": [
  null,
  "UUID"
 ],
 "Unable to reach server": [
  null,
  "Não é possível acessar o servidor"
 ],
 "Unknown": [
  null,
  "Desconhecido"
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
 "Unsupported volume": [
  null,
  "Volume não suportado"
 ],
 "Usage": [
  null,
  "Uso"
 ],
 "Used": [
  null,
  "Usado"
 ],
 "Username": [
  null,
  "Nome de Usuário"
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  "VFAT - Compatível com todos os sistemas e dispositivos"
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
 "Writing": [
  null,
  "Escrevendo"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS - Red Hat Enterprise Linux 7 padrão"
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
  "Dispositivos Multipath"
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
