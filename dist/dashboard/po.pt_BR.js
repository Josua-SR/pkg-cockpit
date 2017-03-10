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
 "5 minutes": [
  null,
  ""
 ],
 "6 hours": [
  null,
  ""
 ],
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "Add": [
  null,
  "Adicionar"
 ],
 "Add Machine to Dashboard": [
  null,
  ""
 ],
 "Address": [
  null,
  "Endereço"
 ],
 "Authentication": [
  null,
  ""
 ],
 "Authentication Failed": [
  null,
  ""
 ],
 "Available": [
  null,
  ""
 ],
 "Avatar": [
  null,
  ""
 ],
 "CPU": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Checking for public keys": [
  null,
  ""
 ],
 "Close": [
  null,
  "Fechar"
 ],
 "Cockpit could not contact the given host $0. Make sure it has ssh running on port $1, or specify another port in the address.": [
  null,
  "Cockpit não pode contactar o host $0. Tenha certeza que o ssh  esteja rodando na porta $1, ou especifique outra porta no endereço."
 ],
 "Cockpit is not installed": [
  null,
  ""
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  ""
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  ""
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  ""
 ],
 "Color": [
  null,
  ""
 ],
 "Connect": [
  null,
  ""
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  ""
 ],
 "Could not contact {{host}}": [
  null,
  ""
 ],
 "Dashboard": [
  null,
  ""
 ],
 "Disk I/O": [
  null,
  ""
 ],
 "Edit Server": [
  null,
  ""
 ],
 "Enter IP address or host name": [
  null,
  "Digite o endereço IP ou nome de host"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  ""
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  ""
 ],
 "Failed to add machine: $0": [
  null,
  "Falha ao adicionar a máquina: $0"
 ],
 "Failed to change password": [
  null,
  "Falha ao mudar senha"
 ],
 "Failed to edit machine: $0": [
  null,
  "Falha ao editar a máquina: $0"
 ],
 "Fingerprint": [
  null,
  ""
 ],
 "Go to now": [
  null,
  ""
 ],
 "Host Name": [
  null,
  ""
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  ""
 ],
 "Incorrect Host Key": [
  null,
  ""
 ],
 "Invalid file permissions": [
  null,
  "Permissão de arquivos inválida"
 ],
 "Is sshd running on a different port?": [
  null,
  ""
 ],
 "Kerberos Based SSO": [
  null,
  ""
 ],
 "Kerberos Ticket": [
  null,
  ""
 ],
 "Leave blank to connect to this machine as the currently logged in user. If you enter a different username, that user will always be used when connecting to this machine.": [
  null,
  ""
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#user}} ({{user}}){{/user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  ""
 ],
 "Log In": [
  null,
  ""
 ],
 "Log in to {{host}}": [
  null,
  ""
 ],
 "Login Password": [
  null,
  ""
 ],
 "Lost connection. Trying to reconnect": [
  null,
  "Conexão Perdida. Tentando reconectar."
 ],
 "Memory": [
  null,
  ""
 ],
 "Network": [
  null,
  ""
 ],
 "New password was not accepted": [
  null,
  "Nova senha não foi aceita"
 ],
 "No such file or directory": [
  null,
  "Diretório ou arquivo não encontrado"
 ],
 "Not a valid private key": [
  null,
  "Chave privada não válida"
 ],
 "Off": [
  null,
  "Desligado"
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
 "Password not accepted": [
  null,
  "Senha não aceita"
 ],
 "Port": [
  null,
  ""
 ],
 "Prompting via ssh-add timed out": [
  null,
  ""
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  "tempo excedido na tentativa via chave ssh"
 ],
 "Public Key": [
  null,
  ""
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  ""
 ],
 "Servers": [
  null,
  ""
 ],
 "Set": [
  null,
  ""
 ],
 "Synchronize": [
  null,
  ""
 ],
 "Synchronize users": [
  null,
  ""
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  "O enderço IP ou hostname não podem conter espações."
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  ""
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  ""
 ],
 "The passwords do not match.": [
  null,
  "As senhas não batem."
 ],
 "The user <b>$0</b> is not permitted to manage servers": [
  null,
  "Ao usuário <b>$0</b> não é permitido gerenciar servidores"
 ],
 "This machine has already been added.": [
  null,
  "Esta máquina já foi adicionada"
 ],
 "This version of cockpit-ws does not support connecting to a host with an alternate user or port": [
  null,
  "Esta versão do cockpit-ws não suporta conectar a um host com um usuário ou porta alternativa"
 ],
 "To try a different port you will need to upgrade cockpit-ws to a newer version.": [
  null,
  ""
 ],
 "Type a password": [
  null,
  ""
 ],
 "Unknown Host Key": [
  null,
  ""
 ],
 "Update": [
  null,
  ""
 ],
 "User": [
  null,
  ""
 ],
 "User name": [
  null,
  ""
 ],
 "Using available credentials": [
  null,
  ""
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  ""
 ],
 "You are currently connected directly to this server. You cannot delete it.": [
  null,
  "Você está conectado diretamente a este servidor. Você não pode excluí-lo."
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  ""
 ]
}));
