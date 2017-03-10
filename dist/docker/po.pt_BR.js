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
  "",
  ""
 ],
 "$0 shares": [
  null,
  "$0 compartilhamentos"
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
 "${hip}:${hport} -> $cport": [
  null,
  "${hip}:${hport} -> $cport"
 ],
 "Add Additional Storage": [
  null,
  ""
 ],
 "Add Storage": [
  null,
  ""
 ],
 "Additional Storage": [
  null,
  ""
 ],
 "All data on selected disks will be erased and disks will be added to the storage pool.": [
  null,
  ""
 ],
 "Always": [
  null,
  ""
 ],
 "Are you sure you want to delete this image?": [
  null,
  ""
 ],
 "Author": [
  null,
  "Autor"
 ],
 "CPU": [
  null,
  ""
 ],
 "CPU priority": [
  null,
  "Prioridade de CPU"
 ],
 "CPU usage:": [
  null,
  ""
 ],
 "Can&rsquo;t connect to Docker": [
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
 "Change resource limits": [
  null,
  ""
 ],
 "Change resources limits": [
  null,
  ""
 ],
 "Close": [
  null,
  "Fechar"
 ],
 "Combined CPU usage": [
  null,
  ""
 ],
 "Combined memory usage": [
  null,
  ""
 ],
 "Command": [
  null,
  "Comando"
 ],
 "Command can't be empty": [
  null,
  ""
 ],
 "Command:": [
  null,
  ""
 ],
 "Commit": [
  null,
  ""
 ],
 "Commit Image": [
  null,
  ""
 ],
 "Configure storage...": [
  null,
  ""
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
  ""
 ],
 "Containers": [
  null,
  "Containers"
 ],
 "Could not add all disks": [
  null,
  ""
 ],
 "Could not reset the storage pool": [
  null,
  ""
 ],
 "Created": [
  null,
  ""
 ],
 "Created:": [
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
 "Delete $0": [
  null,
  ""
 ],
 "Deleting a container will erase all data in it.": [
  null,
  "A exclusão de um container irá apagar todos os dados nele."
 ],
 "Deleting an image will delete it, but you can probably download it again if you need it later.  Unless this image has never been pushed to a repository, that is, in which case you probably can't download it again.": [
  null,
  "Apagar uma imagem irá excluí-la, mas provavelmente você pode baixá-la novamente se você precisar dela mais tarde. A menos que essa imagem nunca tem sido enviada para um repositório, ou seja, caso em que você provavelmente não pode baixá-la novamente."
 ],
 "Details": [
  null,
  ""
 ],
 "Docker is not installed or activated on the system": [
  null,
  "Docker não está instalado ou ativado no sistema"
 ],
 "Download": [
  null,
  ""
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
 "Entrypoint": [
  null,
  ""
 ],
 "Environment": [
  null,
  ""
 ],
 "Erase containers and reset storage pool": [
  null,
  ""
 ],
 "Erase containers, reformat disks, and add them": [
  null,
  ""
 ],
 "Error message from Docker:": [
  null,
  "Mensagem de erro do Docker:"
 ],
 "Everything": [
  null,
  ""
 ],
 "Exited $ExitCode": [
  null,
  "Encerrado $ExitCode"
 ],
 "Expose container ports": [
  null,
  ""
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
  ""
 ],
 "Gateway:": [
  null,
  ""
 ],
 "Get new image": [
  null,
  ""
 ],
 "Hard Disk": [
  null,
  ""
 ],
 "IP Address:": [
  null,
  ""
 ],
 "IP Prefix Length:": [
  null,
  ""
 ],
 "Id": [
  null,
  ""
 ],
 "Id:": [
  null,
  ""
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
  ""
 ],
 "Image:": [
  null,
  ""
 ],
 "Images": [
  null,
  ""
 ],
 "Images and running containers": [
  null,
  ""
 ],
 "Information about the Docker storage pool is not available.": [
  null,
  ""
 ],
 "Invalid port": [
  null,
  "Porta inválida"
 ],
 "Link to another container": [
  null,
  ""
 ],
 "Links": [
  null,
  "Links"
 ],
 "Links:": [
  null,
  ""
 ],
 "Local Disks": [
  null,
  ""
 ],
 "MAC Address:": [
  null,
  ""
 ],
 "Memory": [
  null,
  ""
 ],
 "Memory limit": [
  null,
  "Limite de Memória"
 ],
 "Memory usage:": [
  null,
  ""
 ],
 "MiB": [
  null,
  ""
 ],
 "Mount container volumes": [
  null,
  ""
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
  ""
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
  ""
 ],
 "No containers that match the current filter": [
  null,
  ""
 ],
 "No images": [
  null,
  ""
 ],
 "No images that match the current filter": [
  null,
  ""
 ],
 "No results for $0": [
  null,
  ""
 ],
 "No running containers": [
  null,
  ""
 ],
 "No running containers that match the current filter": [
  null,
  ""
 ],
 "Not authorized to access Docker on this system": [
  null,
  "Não autorizado para acessar Docker neste sistema"
 ],
 "Not found": [
  null,
  "Não encontrado"
 ],
 "Off": [
  null,
  "Desligado"
 ],
 "Ok": [
  null,
  ""
 ],
 "On": [
  null,
  "Ligado"
 ],
 "On Failure": [
  null,
  ""
 ],
 "On failure, retry $0 time": [
  "On failure, retry $0 times",
  "",
  ""
 ],
 "Overview": [
  null,
  ""
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
  ""
 ],
 "Ports": [
  null,
  "Portas"
 ],
 "Ports:": [
  null,
  ""
 ],
 "ReadOnly": [
  null,
  ""
 ],
 "ReadWrite": [
  null,
  ""
 ],
 "Reformat and add disks": [
  null,
  ""
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
  ""
 ],
 "Resetting the storage pool will erase all containers and release disks in the pool.": [
  null,
  ""
 ],
 "Restart": [
  null,
  "Reiniciar"
 ],
 "Restart Policy": [
  null,
  ""
 ],
 "Restart Policy:": [
  null,
  ""
 ],
 "Retries:": [
  null,
  ""
 ],
 "Run": [
  null,
  ""
 ],
 "Run Image": [
  null,
  ""
 ],
 "Security": [
  null,
  ""
 ],
 "Set container environment variables": [
  null,
  ""
 ],
 "Show all containers": [
  null,
  ""
 ],
 "Show all images": [
  null,
  ""
 ],
 "Size": [
  null,
  ""
 ],
 "Solid-State Disk": [
  null,
  ""
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
  ""
 ],
 "State:": [
  null,
  ""
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
  ""
 ],
 "Storage pool": [
  null,
  ""
 ],
 "TCP": [
  null,
  "TCP"
 ],
 "Tag": [
  null,
  "Marca"
 ],
 "Tags": [
  null,
  ""
 ],
 "The Docker storage pool cannot be managed on this system.": [
  null,
  ""
 ],
 "The storage pool will be reset to optimize its layout.  All containers will be erased.": [
  null,
  ""
 ],
 "This image does not exist.": [
  null,
  ""
 ],
 "Total": [
  null,
  ""
 ],
 "Try again": [
  null,
  "Tente novamente"
 ],
 "Type to filter…": [
  null,
  ""
 ],
 "UDP": [
  null,
  "UDP"
 ],
 "Unexpected error": [
  null,
  "Erro inesperado"
 ],
 "Unless Stopped": [
  null,
  ""
 ],
 "Up since $StartedAt": [
  null,
  "Ativo desde $StartedAt"
 ],
 "Used": [
  null,
  ""
 ],
 "Used by Containers": [
  null,
  "Containers"
 ],
 "Volumes": [
  null,
  ""
 ],
 "With terminal": [
  null,
  "Com o terminal"
 ],
 "You don't have permission to manage the Docker storage pool.": [
  null,
  ""
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
  ""
 ],
 "none": [
  null,
  "Nenhum"
 ],
 "search by name, namespace or description": [
  null,
  ""
 ],
 "select container": [
  null,
  ""
 ],
 "shares": [
  null,
  ""
 ],
 "to host path": [
  null,
  ""
 ],
 "to host port": [
  null,
  "para porta do host"
 ],
 "undefined": [
  null,
  ""
 ],
 "value": [
  null,
  ""
 ],
 "page-title\u0004Containers": [
  null,
  "Containers"
 ],
 "page-title\u0004Images": [
  null,
  "Imagem"
 ]
}));
