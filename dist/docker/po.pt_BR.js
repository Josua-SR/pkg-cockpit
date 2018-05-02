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
 " (shared with the OS)": [
  null,
  "(compartilhado com o SO)"
 ],
 "$0 day": [
  "$0 days",
  "$0 dia",
  "$0 dias"
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
  "$0 mês",
  "$0 meses"
 ],
 "$0 shares": [
  null,
  "$0 compartilhamentos"
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
 "${hip}:${hport} -> $cport": [
  null,
  "${hip}:${hport} -> $cport"
 ],
 "Add Additional Storage": [
  null,
  "Inserir Armazenamento Adicional"
 ],
 "Add Storage": [
  null,
  "Adicionar Armazenamento"
 ],
 "Additional Storage": [
  null,
  "Armazenamento Adicional"
 ],
 "Advanced TCA": [
  null,
  "TCA Avançado"
 ],
 "All In One": [
  null,
  "Tudo em um"
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  "Todos os dados em discos selecionados serão apagados e os discos serão adicionados ao pool de armazenamento."
 ],
 "Always": [
  null,
  "Sempre"
 ],
 "Are you sure you want to delete this image?": [
  null,
  "Tem certeza de que deseja excluir esta imagem?"
 ],
 "Author": [
  null,
  "Autor"
 ],
 "Blade": [
  null,
  "Blade"
 ],
 "Blade enclosure": [
  null,
  "Blade enclosure"
 ],
 "Bus Expansion Chassis": [
  null,
  "Chassi de Expansão de Barramento"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "CPU priority": [
  null,
  "Prioridade de CPU"
 ],
 "CPU usage:": [
  null,
  "Uso da CPU:"
 ],
 "Can&rsquo;t connect to Docker": [
  null,
  "Pode&rsquo;t conectar ao Docker"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Change": [
  null,
  "Alterar"
 ],
 "Change resource limits": [
  null,
  "Alterar limites de recursos"
 ],
 "Change resources limits": [
  null,
  "Alterar limites de recursos"
 ],
 "Close": [
  null,
  "Fechar"
 ],
 "Combined memory usage": [
  null,
  "Uso de memória combinada"
 ],
 "Combined usage of $0 CPU core": [
  "Combined usage of $0 CPU cores",
  "Uso combinado de núcleo de CPU de $0",
  "Uso combinado de núcleos de CPU de $0 CPU"
 ],
 "Command": [
  null,
  "Comando"
 ],
 "Command can't be empty": [
  null,
  "O comando não pode estar vazio"
 ],
 "Command:": [
  null,
  "Comando:"
 ],
 "Commit": [
  null,
  "Commit"
 ],
 "Commit Image": [
  null,
  "Imagem Commit "
 ],
 "Compact PCI": [
  null,
  "Compacto PCI"
 ],
 "Configure storage...": [
  null,
  "Configurar armazenamento..."
 ],
 "Connecting to Docker": [
  null,
  "Conectando ao Docker"
 ],
 "Container": [
  null,
  "Container"
 ],
 "Container Name": [
  null,
  "Nome do Container"
 ],
 "Container is currently marked as not running, but regular stopping failed.": [
  null,
  "Container está atualmente marcado como parado, mas parada normal falhou."
 ],
 "Container is currently running.": [
  null,
  "Container está em execução."
 ],
 "Container:": [
  null,
  "Contêiner:"
 ],
 "Containers": [
  null,
  "Containers"
 ],
 "Convertible": [
  null,
  "Conversível"
 ],
 "Could not add all disks": [
  null,
  "Não foi possível adicionar todos os discos"
 ],
 "Could not reset the storage pool": [
  null,
  "Não foi possível redefinir o pool de armazenamento"
 ],
 "Created": [
  null,
  "Criado"
 ],
 "Created:": [
  null,
  "Criado:"
 ],
 "Default": [
  null,
  "Padrão"
 ],
 "Delete": [
  null,
  "Excluir"
 ],
 "Delete $0": [
  null,
  "Deletar $0"
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "A exclusão de um container irá apagar todos os dados nele."
 ],
 "Deleting an image will delete it, but you can probably download it again if you need it later.  Unless this image has never been pushed to a repository, that is, in which case you probably can't download it again.": [
  null,
  "Apagar uma imagem irá excluí-la, mas provavelmente você pode baixá-la novamente se você precisar dela mais tarde. A menos que essa imagem nunca tem sido enviada para um repositório, ou seja, caso em que você provavelmente não pode baixá-la novamente."
 ],
 "Desktop": [
  null,
  "Desktop"
 ],
 "Detachable": [
  null,
  "Destacável"
 ],
 "Details": [
  null,
  "Detalhes"
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Docker não está instalado ou ativado no sistema"
 ],
 "Docking Station": [
  null,
  "Estação de ancoragem."
 ],
 "Download": [
  null,
  "Baixar"
 ],
 "Drive": [
  null,
  "Unidade"
 ],
 "Duplicate alias": [
  null,
  "Apelido duplicado"
 ],
 "Duplicate port": [
  null,
  "Porta duplicada"
 ],
 "Embedded PC": [
  null,
  "Embedded PC"
 ],
 "Entrypoint": [
  null,
  "Ponto de entrada"
 ],
 "Environment": [
  null,
  "Ambiente"
 ],
 "Erase containers and reset storage pool": [
  null,
  "Apagar contêineres e redefinir pool de armazenamento"
 ],
 "Error message from Docker:": [
  null,
  "Mensagem de erro do Docker:"
 ],
 "Everything": [
  null,
  "Tudo"
 ],
 "Exited $ExitCode": [
  null,
  "Encerrado $ExitCode"
 ],
 "Expansion Chassis": [
  null,
  "Chassi de Expansão"
 ],
 "Expose container ports": [
  null,
  "Expor portas de contêiner"
 ],
 "Failed to start Docker: $0": [
  null,
  "Falha ao iniciar Docker: $0"
 ],
 "Failed to stop Docker scope: $0": [
  null,
  "Falha ao parar Docker escopo: $0"
 ],
 "Force Delete": [
  null,
  "Remoção forçada"
 ],
 "Free": [
  null,
  "Livre"
 ],
 "Gateway:": [
  null,
  "Gateway:"
 ],
 "Get new image": [
  null,
  "Obter nova imagem"
 ],
 "Hand Held": [
  null,
  "Portátil"
 ],
 "Hard Disk": [
  null,
  "Disco Rígido"
 ],
 "IP Address:": [
  null,
  "Endereço IP:"
 ],
 "IP Prefix Length:": [
  null,
  "Comprimento do prefixo IP:"
 ],
 "Id": [
  null,
  "Id"
 ],
 "Id:": [
  null,
  "Id:"
 ],
 "Image": [
  null,
  "Imagem"
 ],
 "Image $0": [
  null,
  "Imagem $0"
 ],
 "Image Search": [
  null,
  "Pesquisa de Imagem"
 ],
 "Image:": [
  null,
  "Imagem:"
 ],
 "Images": [
  null,
  "Imagens"
 ],
 "Images and running containers": [
  null,
  "Imagens e contêineres em execução"
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  "As informações sobre o pool de armazenamento do Docker não estão disponíveis."
 ],
 "Invalid port": [
  null,
  "Porta inválida"
 ],
 "IoT Gateway": [
  null,
  "Gateway IoT"
 ],
 "Laptop": [
  null,
  "Laptop"
 ],
 "Link to another container": [
  null,
  "Link para outro contêiner"
 ],
 "Links": [
  null,
  "Links"
 ],
 "Links:": [
  null,
  "Links:"
 ],
 "Local Disks": [
  null,
  "Discos Locais"
 ],
 "Low Profile Desktop": [
  null,
  "Desktop de baixo perfil"
 ],
 "Lunch Box": [
  null,
  "Lunch Box"
 ],
 "MAC Address:": [
  null,
  "Endereço MAC:"
 ],
 "Main Server Chassis": [
  null,
  "Chassi do Servidor Principal"
 ],
 "Memory": [
  null,
  "Memória"
 ],
 "Memory limit": [
  null,
  "Limite de Memória"
 ],
 "Memory usage:": [
  null,
  "Uso de memória:"
 ],
 "MiB": [
  null,
  "MiB"
 ],
 "Mini PC": [
  null,
  "Mini PC"
 ],
 "Mini Tower": [
  null,
  "Mini Torre"
 ],
 "Mount container volumes": [
  null,
  "Montar contêiners de volumes"
 ],
 "Multi-system Chassis": [
  null,
  "Chassi Multi-sistema"
 ],
 "Name": [
  null,
  "Nome"
 ],
 "No": [
  null,
  "Não"
 ],
 "No additional local storage found.": [
  null,
  "Nenhum armazenamento local adicional encontrado."
 ],
 "No alias specified": [
  null,
  "Nenhum apelido especificado"
 ],
 "No container specified": [
  null,
  "Nenhum container especificado"
 ],
 "No containers": [
  null,
  "Nenhum contêiner"
 ],
 "No containers that match the current filter": [
  null,
  "Nenhum contêiner que corresponda ao filtro atual"
 ],
 "No images": [
  null,
  "Nenhuma imagem"
 ],
 "No images that match the current filter": [
  null,
  "Sem imagens que correspondam ao filtro atual"
 ],
 "No results for $0": [
  null,
  "Nenhum resuldado para $0"
 ],
 "No running containers": [
  null,
  "Sem contêiners em execução"
 ],
 "No running containers that match the current filter": [
  null,
  "Sem contêineres em execução que correspondem ao filtro atual"
 ],
 "Not authorized to access Docker on this system": [
  null,
  "Não autorizado para acessar Docker neste sistema"
 ],
 "Not found": [
  null,
  "Não encontrado"
 ],
 "Notebook": [
  null,
  "Notebook"
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
 "On Failure": [
  null,
  "Em Falha"
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "Em falha, repetir $0 vez",
  "Em falha, repetir $0 vezes"
 ],
 "Other": [
  null,
  "De outros"
 ],
 "Overview": [
  null,
  "Visão geral"
 ],
 "Peripheral Chassis": [
  null,
  "Chassi Periférico"
 ],
 "Pizza Box": [
  null,
  "Pizza Box"
 ],
 "Please confirm deletion of $0": [
  null,
  "Por favor, confirme a remoção de $0"
 ],
 "Please confirm forced deletion of $0": [
  null,
  "Por favor, confirme a exclusão forçada de $0"
 ],
 "Please try another term": [
  null,
  "Por favor, tente outro termo"
 ],
 "Portable": [
  null,
  "Portatil"
 ],
 "Ports": [
  null,
  "Portas"
 ],
 "Ports:": [
  null,
  "Portas:"
 ],
 "Problems": [
  null,
  "Problemas"
 ],
 "RAID Chassis": [
  null,
  "RAID Chassis"
 ],
 "Rack Mount Chassis": [
  null,
  "Rack Mount Chassis"
 ],
 "ReadOnly": [
  null,
  "SomenteLeitura"
 ],
 "ReadWrite": [
  null,
  "LeituraEscrita"
 ],
 "Reboot": [
  null,
  "Reiniciar"
 ],
 "Reformat and add disks": [
  null,
  "Reformatar e adicionar discos"
 ],
 "Repository": [
  null,
  "Repositório"
 ],
 "Reset": [
  null,
  "Redefinir"
 ],
 "Reset Storage Pool": [
  null,
  "Resetar Pool de Armazenamento"
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  "A redefinição do pool de armazenamento apagará todos os recipientes e discos de liberação no pool."
 ],
 "Restart": [
  null,
  "Reiniciar"
 ],
 "Restart Policy": [
  null,
  "Reinicie a Política"
 ],
 "Restart Policy:": [
  null,
  "Reinicie a Política:"
 ],
 "Retries:": [
  null,
  "Tentativas:"
 ],
 "Run": [
  null,
  "Executar"
 ],
 "Run Image": [
  null,
  "Executar Imagem"
 ],
 "Sealed-case PC": [
  null,
  "PC com caixa vedada"
 ],
 "Security": [
  null,
  "Segurança"
 ],
 "Set container environment variables": [
  null,
  "Definir variáveis de ambiente de contêiner"
 ],
 "Show all containers": [
  null,
  "Exibir todos os contêineres"
 ],
 "Show all images": [
  null,
  "Exibir todas as imagens"
 ],
 "Size": [
  null,
  "Tamanho"
 ],
 "Solid-State Disk": [
  null,
  "Disco de Estado Sólido"
 ],
 "Space-saving Computer": [
  null,
  "Computador com economia de espaço"
 ],
 "Start": [
  null,
  "Iniciar"
 ],
 "Start Docker": [
  null,
  "Iniciar Docker"
 ],
 "State": [
  null,
  "Estado"
 ],
 "State:": [
  null,
  "Estado:"
 ],
 "Stick PC": [
  null,
  "Stick PC"
 ],
 "Stop": [
  null,
  "Pare"
 ],
 "Stopped": [
  null,
  "Parado"
 ],
 "Storage": [
  null,
  "Armazenamento"
 ],
 "Storage pool": [
  null,
  "Pool de Armazenamento"
 ],
 "Sub Chassis": [
  null,
  "Sub Chassis"
 ],
 "Sub Notebook": [
  null,
  "Sub Notebook"
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Tablet": [
  null,
  "Tablet"
 ],
 "Tag": [
  null,
  "Marca"
 ],
 "Tags": [
  null,
  "Tags"
 ],
 "The Docker storage pool cannot be managed on this system.": [
  null,
  "O pool de armazenamento do Docker não pode ser gerenciado neste sistema."
 ],
 "The scan from $time ($type) found no vulnerabilities.": [
  null,
  "O scanner de  $time ($type) não detectou vulnerabilidades."
 ],
 "The scan from $time ($type) was not successful.": [
  null,
  "O scanner de $time ($type) não funcionou."
 ],
 "This image does not exist.": [
  null,
  "Esta imagem não existe."
 ],
 "Total": [
  null,
  "Total"
 ],
 "Tower": [
  null,
  ""
 ],
 "Try again": [
  null,
  "Tente novamente"
 ],
 "Type to filter…": [
  null,
  "Tipo para filtrar..."
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Erro inesperado"
 ],
 "Unknown": [
  null,
  "Desconhecido"
 ],
 "Unless Stopped": [
  null,
  "Parou-se"
 ],
 "Up since $StartedAt": [
  null,
  "Ativo desde $StartedAt"
 ],
 "Used": [
  null,
  "Usado"
 ],
 "Used by Containers": [
  null,
  "Usado pelos Contêineres"
 ],
 "Volumes": [
  null,
  "Volumes"
 ],
 "With terminal": [
  null,
  "Com o terminal"
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  "Você não tem permissão para gerenciar o Docker e pool de armazenamento."
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
 "alias": [
  null,
  "apelido"
 ],
 "default": [
  null,
  "padrão"
 ],
 "key": [
  null,
  "chave"
 ],
 "none": [
  null,
  "Nenhum"
 ],
 "search by name, namespace or description": [
  null,
  "pesquisar por nome, tamanho do nome ou descrição"
 ],
 "select container": [
  null,
  "selecionar contêiner"
 ],
 "shares": [
  null,
  "compartilhamentos"
 ],
 "to host path": [
  null,
  "para hospedar o caminho"
 ],
 "to host port": [
  null,
  "para porta do host"
 ],
 "undefined": [
  null,
  "indefinido"
 ],
 "value": [
  null,
  "valor"
 ],
 "page-title\u0004Containers": [
  null,
  "Containers"
 ],
 "page-title\u0004Images": [
  null,
  "Imagens"
 ]
}));
