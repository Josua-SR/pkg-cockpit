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
  "x-generator": "Zanata 4.6.2"
 },
 "$0 Only users with local credentials will be able to log into this machine. This may also effect other services as DNS resolution settings and the list of trusted CAs may change.": [
  null,
  "$0 Somente usuários com credenciais locais poderão efetuar login nesta máquina. Isso também pode afetar outros serviços como configurações de resolução de DNS e a lista de CAS confiáveis pode mudar."
 ],
 "$0 is not available from any repository.": [
  null,
  "$0 não está disponível em nenhum repositório."
 ],
 "$0 will be installed.": [
  null,
  "$0 será instalado."
 ],
 "Additional packages:": [
  null,
  "Pacotes adicionais:"
 ],
 "Administrator Password": [
  null,
  "Senha de Administrador"
 ],
 "Are you sure you want to leave the '$0' domain?": [
  null,
  "Tem certeza de que deseja abandonar o domínio '$0'?"
 ],
 "Are you sure you want to leave this domain?": [
  null,
  "Tem certeza de que deseja abandonar este domínio?"
 ],
 "Authentication": [
  null,
  "Autenticação"
 ],
 "Automatic": [
  null,
  "Automático"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Checking installed software": [
  null,
  "Verificando o software instalado"
 ],
 "Computer OU": [
  null,
  "Computador OU"
 ],
 "Domain $0 could not be contacted": [
  null,
  "O Domínio $0 não pôde ser contatado"
 ],
 "Domain $0 is not supported": [
  null,
  "O Domínio $0 não é suportado"
 ],
 "Domain Address": [
  null,
  "Endereço do Domínio"
 ],
 "Domain Administrator Name": [
  null,
  "Nome do Administrador de Domínio"
 ],
 "Domain Administrator Password": [
  null,
  "Senha do Administrador de Domínio"
 ],
 "Downloading $0": [
  null,
  "Baixando $0"
 ],
 "Install": [
  null,
  "Instale"
 ],
 "Install Software": [
  null,
  "Instale Software"
 ],
 "Installing $0": [
  null,
  "Instalando $0"
 ],
 "Join": [
  null,
  "Afiliar-se"
 ],
 "Join Domain": [
  null,
  "Associar-se ao domínio"
 ],
 "Join a Domain": [
  null,
  "Ingressar em um domínio"
 ],
 "Joining this domain is not supported": [
  null,
  "A adesão à este domínio não é suportada"
 ],
 "Leave": [
  null,
  "Deixar"
 ],
 "Leave Domain": [
  null,
  "Abandonar Domínio"
 ],
 "More": [
  null,
  "Mais"
 ],
 "Next": [
  null,
  "Próximo"
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
 "One Time Password": [
  null,
  "Uma senha do tempo"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit caiu"
 ],
 "Removals:": [
  null,
  "Remoções:"
 ],
 "Removing $0": [
  null,
  "Removendo $0"
 ],
 "The user <b>$0</b> is not permitted to modify realms": [
  null,
  "O usuário <b> $0 </b> não tem permissão para modificar reinos"
 ],
 "This may take a while": [
  null,
  "Isso pode demorar um pouco"
 ],
 "Total size: $0": [
  null,
  "Tamanho total: $0"
 ],
 "User Name": [
  null,
  "Nome de Usuário"
 ],
 "User Password": [
  null,
  "Senha de Usuário"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Aguardando que outras operações de gerenciamento de software terminem"
 ],
 "e.g. \"$0\"": [
  null,
  "e.g. \"$0\""
 ]
}));
