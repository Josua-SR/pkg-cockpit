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
 "Adding key": [
  null,
  "Adicionando chave"
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
 "Container Administrator": [
  null,
  "Administrador de contêineres"
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
 "Delete $0": [
  null,
  "Deletar $0"
 ],
 "Delete Files": [
  null,
  "Excluir Arquivos"
 ],
 "Error": [
  null,
  "Erro"
 ],
 "Error saving authorized keys: ": [
  null,
  "Erro ao salvar chaves autorizadas:"
 ],
 "Excellent password": [
  null,
  "Senha excelente"
 ],
 "Failed to change password": [
  null,
  "Falha ao mudar senha"
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
 "Image Builder": [
  null,
  ""
 ],
 "Invalid expiration date": [
  null,
  "Data de validade inválida"
 ],
 "Invalid key": [
  null,
  "Chave inválida"
 ],
 "Invalid number of days": [
  null,
  "Número inválido de dias"
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
 "Lock account on $0": [
  null,
  "Bloquear conta em $0"
 ],
 "Logged In": [
  null,
  "Logado"
 ],
 "Never": [
  null,
  "Nunca"
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
 "New password was not accepted": [
  null,
  "Nova senha não foi aceita"
 ],
 "No real name specified": [
  null,
  "Nenhum nome real especificado"
 ],
 "No user name specified": [
  null,
  "Nenhum nome de usuário foi especificado"
 ],
 "Off": [
  null,
  "Desligado"
 ],
 "Old Password": [
  null,
  "Senha Atual"
 ],
 "Old password not accepted": [
  null,
  "Senha antiga não aceita"
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
 "Password is not acceptable": [
  null,
  "Senha não é aceitavél"
 ],
 "Password is too weak": [
  null,
  "Senha é muito fraca"
 ],
 "Password must be changed": [
  null,
  "A senha deve ser alterada"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Cole o conteúdo do seu arquivo de chave pública SSH aqui"
 ],
 "Please specify an expiration date": [
  null,
  "Por favor especifique uma data de expiração"
 ],
 "Prompting via passwd timed out": [
  null,
  "Tempo excedido na tentativa de solicitação via senha"
 ],
 "Require password change every $0 days": [
  null,
  "Requer mudança de senha a cada $0 dias"
 ],
 "Require password change on $0": [
  null,
  "Exigir alteração de senha em $0"
 ],
 "Reset": [
  null,
  "Redefinir"
 ],
 "Roles": [
  null,
  "Papéis"
 ],
 "Server Administrator": [
  null,
  "Administrador do servidor"
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
 "The account '$0' will be forced to change their password on next login": [
  null,
  "A conta '$0' será forçado a mudar sua senha no próximo login"
 ],
 "The key you provided was not valid.": [
  null,
  "A chave que você forneceu não era válida."
 ],
 "The passwords do not match": [
  null,
  "As senhas não batem"
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  "O usuário <b>$0</b> não tem permissões para odificar contas"
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  "O nome de usuário coniste em letas de  a-z, digitos, pontos, barras e underline."
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Não existem chaves públicas autorizadas para esta conta."
 ],
 "This user name already exists": [
  null,
  "Este usuário já existe"
 ],
 "Unable to delete root account": [
  null,
  "Incapaz de deletar a conta root"
 ],
 "Unable to rename root account": [
  null,
  "Incapaz de renomear a conta root"
 ],
 "Unexpected error": [
  null,
  "Erro inesperado"
 ],
 "Unnamed": [
  null,
  "Não nomeado"
 ],
 "User Name": [
  null,
  "Nome de Usuário"
 ],
 "Validating key": [
  null,
  "Validando chave"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "Você não tem permissão para exibir as chaves públicas autorizadas para esta conta."
 ],
 "translatable": [
  null,
  ""
 ],
 "page-title\u0004Accounts": [
  null,
  "Contas"
 ]
}));
