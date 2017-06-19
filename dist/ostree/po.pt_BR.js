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
 "$0 key ID": [
  null,
  "$0 Chave ID"
 ],
 "$0 package": [
  null,
  "$0 pacote"
 ],
 "$0 packages": [
  null,
  "$0 pacotes"
 ],
 "- Add New Repository": [
  null,
  "- Adicionar Novo Repositório"
 ],
 "Add": [
  null,
  "Adicionar"
 ],
 "Add Another Key": [
  null,
  "Adicionar Outra Chave"
 ],
 "Additions": [
  null,
  "Adições"
 ],
 "Apply": [
  null,
  "Aplicar"
 ],
 "Available": [
  null,
  "Disponível"
 ],
 "Begins with '-----BEGIN PGP PUBLIC KEY BLOCK-----'": [
  null,
  "Começa com '-----BEGIN PGP PUBLIC KEY BLOCK-----'"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Change Repository": [
  null,
  "Alterar Repositório"
 ],
 "Check for Updates": [
  null,
  "Verificar Atualizações"
 ],
 "Checking for updates": [
  null,
  "Verificando atualizações"
 ],
 "Connecting to OSTree": [
  null,
  "Conectando à OSTree"
 ],
 "Couldn't load settings for '$0': $1": [
  null,
  "Não foi possível carregar as configurações para '$0': $1"
 ],
 "Currently using:": [
  null,
  "Atualmente usando:"
 ],
 "Default": [
  null,
  "Padrão"
 ],
 "Delete": [
  null,
  "Excluir"
 ],
 "Downgrades": [
  null,
  "Downgrades"
 ],
 "Error loading remotes: $0": [
  null,
  "Erros de carregamento remotos: $0"
 ],
 "Expired Signature": [
  null,
  "Assinatura Expirada"
 ],
 "Failed": [
  null,
  "Falhou"
 ],
 "Good Signature": [
  null,
  "Assinatura Boa"
 ],
 "Invalid Signature": [
  null,
  "Assinatura Inválida"
 ],
 "Name": [
  null,
  "Nome"
 ],
 "No Deployments": [
  null,
  "Sem Implantações"
 ],
 "No OSTree deployments found": [
  null,
  "Não foram encontradas implantações OSTree"
 ],
 "No configuration data found": [
  null,
  "Não foram encontrados dados de configuração"
 ],
 "No signature avaliable": [
  null,
  "Nenhuma assinatura disponível"
 ],
 "Not authorized to update software on this system": [
  null,
  "Não autorizado a atualizar o software neste sistema"
 ],
 "OS $0 not found": [
  null,
  "OS 0$ não encontrado"
 ],
 "OSTree is not available on this system": [
  null,
  "OSTree não está disponível neste sistema"
 ],
 "Operating System": [
  null,
  "Sistema Operacional"
 ],
 "Operating System Updates": [
  null,
  "Atualizações do Sistema Operacional"
 ],
 "Origin": [
  null,
  "Origem"
 ],
 "Packages": [
  null,
  "Pacotes"
 ],
 "Please provide a valid URL": [
  null,
  "Por favor, forneça um URL válido"
 ],
 "Please provide a valid name": [
  null,
  "Por favor, forneça um nome válido"
 ],
 "Rebase and Reboot": [
  null,
  "Rebase e Reiniciar"
 ],
 "Receiving delta parts": [
  null,
  "Recebendo partes delta"
 ],
 "Receiving metadata objects": [
  null,
  "Recebendo objetos de metadados"
 ],
 "Receiving objects: $0%": [
  null,
  "Recebendo objetos: $0%"
 ],
 "Reconnect": [
  null,
  "Reconectar"
 ],
 "Released": [
  null,
  "Lançado"
 ],
 "Removals": [
  null,
  "Remoções"
 ],
 "Roll Back and Reboot": [
  null,
  "Retroceder e Reiniciar"
 ],
 "Running": [
  null,
  "Executando"
 ],
 "Scanning metadata": [
  null,
  "Escaneando metadados"
 ],
 "Signature": [
  null,
  "Assinatura"
 ],
 "Signed by": [
  null,
  "Assinado por"
 ],
 "Software Updates": [
  null,
  "Atualizações de Software"
 ],
 "Status": [
  null,
  "Estado"
 ],
 "This deployment contains the same packages as your currently booted system": [
  null,
  "Essa implantação contém os mesmos pacotes que o sistema atualmente inicializado"
 ],
 "Tree": [
  null,
  "Árvore"
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unable to communicate with OSTree": [
  null,
  "Incapaz de se comunicar com OSTree"
 ],
 "Update and Reboot": [
  null,
  "Atualizar e Reiniciar"
 ],
 "Updates": [
  null,
  "Atualizações"
 ],
 "Updating": [
  null,
  "Atualizando"
 ],
 "Use trusted GPG key": [
  null,
  "Usar chave GPG confiável"
 ],
 "Version": [
  null,
  "Versão"
 ],
 "When": [
  null,
  "Quando"
 ],
 "Writing objects": [
  null,
  "Escrevendo objetos"
 ],
 "at": [
  null,
  "no"
 ]
}));
