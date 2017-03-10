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
 "Access": [
  null,
  "Acesso"
 ],
 "Account not available or cannot be edited.": [
  null,
  ""
 ],
 "Accounts": [
  null,
  ""
 ],
 "Add key": [
  null,
  ""
 ],
 "Add public key": [
  null,
  ""
 ],
 "Adding key": [
  null,
  ""
 ],
 "Authorized Public SSH Keys": [
  null,
  ""
 ],
 "Back to Accounts": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Cancelar"
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
  ""
 ],
 "Create": [
  null,
  ""
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
  ""
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
  ""
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
  ""
 ],
 "Full Name": [
  null,
  "Nome Completo"
 ],
 "Invalid key": [
  null,
  ""
 ],
 "Last Login": [
  null,
  "Último Login"
 ],
 "Local Accounts": [
  null,
  ""
 ],
 "Lock Account": [
  null,
  "Bloquear Conta"
 ],
 "Logged In": [
  null,
  ""
 ],
 "Never": [
  null,
  ""
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
  "Nenhum nome real  foi especificado"
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
  "Senha antida não aceita"
 ],
 "On": [
  null,
  "Ligado"
 ],
 "Password": [
  null,
  "Senha"
 ],
 "Password is not acceptable": [
  null,
  "Senha não é aceitavél"
 ],
 "Password is too weak": [
  null,
  "Senha é muito fraca"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  ""
 ],
 "Prompting via passwd timed out": [
  null,
  "Tempo excedido na tentativa via senha"
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
  ""
 ],
 "Set Password": [
  null,
  ""
 ],
 "Terminate Session": [
  null,
  ""
 ],
 "The key you provided was not valid.": [
  null,
  ""
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
  ""
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
  ""
 ],
 "User Name": [
  null,
  "Nome de Usuário"
 ],
 "Validating key": [
  null,
  ""
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  ""
 ],
 "page-title\u0004Accounts": [
  null,
  "Contas"
 ]
}));
