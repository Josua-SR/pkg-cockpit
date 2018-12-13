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
 "Access": [
  null,
  "Acesso"
 ],
 "Account Expiration": [
  null,
  "Conta expirou"
 ],
 "Account not available or cannot be edited.": [
  null,
  "Conta não disponível ou não pode ser editada."
 ],
 "Accounts": [
  null,
  "Contas"
 ],
 "Add key": [
  null,
  "Adicionar chave"
 ],
 "Add public key": [
  null,
  "Adicionar chave pública"
 ],
 "Authorized Public SSH Keys": [
  null,
  "Chaves Públicas Autorizadas de SSH"
 ],
 "Back to Accounts": [
  null,
  "Voltar para Contas"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Change": [
  null,
  "Alterar"
 ],
 "Close": [
  null,
  "Fechar"
 ],
 "Confirm": [
  null,
  "Confirmar"
 ],
 "Confirm New Password": [
  null,
  "Confirmar Nova Senha"
 ],
 "Create": [
  null,
  "Criar"
 ],
 "Create New Account": [
  null,
  "Criar Nova Conta"
 ],
 "Delete": [
  null,
  "Excluir"
 ],
 "Delete Files": [
  null,
  "Excluir Arquivos"
 ],
 "Failed to load authorized keys.": [
  null,
  "Falha ao carregar as chaves autorizadas."
 ],
 "Force Change": [
  null,
  "Force Mudança"
 ],
 "Force password change": [
  null,
  "Force troca de senha"
 ],
 "Full Name": [
  null,
  "Nome Completo"
 ],
 "Invalid key": [
  null,
  "Chave inválida"
 ],
 "Last Login": [
  null,
  "Último Login"
 ],
 "Local Accounts": [
  null,
  "Contas Locais"
 ],
 "Lock Account": [
  null,
  "Bloquear Conta"
 ],
 "Never expire password": [
  null,
  "Senha nunca expira"
 ],
 "Never lock account": [
  null,
  "Nunca bloquear conta"
 ],
 "New Password": [
  null,
  "Nova Senha"
 ],
 "Off": [
  null,
  "Desligado"
 ],
 "Old Password": [
  null,
  "Senha Atual"
 ],
 "On": [
  null,
  "Ligado"
 ],
 "Password": [
  null,
  "Senha"
 ],
 "Password Expiration": [
  null,
  "Expiração de Senha"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Cole o conteúdo do seu arquivo de chave pública SSH aqui"
 ],
 "Reset": [
  null,
  "Redefinir"
 ],
 "Roles": [
  null,
  "Papéis"
 ],
 "Set": [
  null,
  "Definir"
 ],
 "Set Password": [
  null,
  "Definir uma Senha"
 ],
 "Terminate Session": [
  null,
  "Encerrar Sessão"
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Não existem chaves públicas autorizadas para esta conta."
 ],
 "Unnamed": [
  null,
  "Não nomeado"
 ],
 "User Name": [
  null,
  "Nome de Usuário"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "Você não tem permissão para exibir as chaves públicas autorizadas para esta conta."
 ],
 "translatable": [
  null,
  "traduzível"
 ]
}));
