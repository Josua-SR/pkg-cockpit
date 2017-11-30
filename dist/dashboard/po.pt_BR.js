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
  "$0 mês",
  "$0 meses"
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
 "5 minutes": [
  null,
  "5 minutos"
 ],
 "6 hours": [
  null,
  "6 horas"
 ],
 "A compatible version of Cockpit is not installed on {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Uma versão compatível do Cockpit não está instalada em {{#strong}}{{host}}{{/strong}}."
 ],
 "Add": [
  null,
  "Adicionar"
 ],
 "Add Machine to Dashboard": [
  null,
  "Adicionar Máquina ao Painel"
 ],
 "Address": [
  null,
  "Endereço"
 ],
 "Authentication": [
  null,
  "Autenticação"
 ],
 "Authentication Failed": [
  null,
  "Falha na Autenticação"
 ],
 "Available": [
  null,
  "Disponível"
 ],
 "Avatar": [
  null,
  "Avatar"
 ],
 "CPU": [
  null,
  "CPU"
 ],
 "Can't load image": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Checking for public keys": [
  null,
  "Checando chaves públicas"
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
  "Cockpit não está instalado"
 ],
 "Cockpit was unable to contact {{#strong}}{{host}}{{/strong}}.": [
  null,
  "O Cockpit não foi capaz de entrar em contato {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log in to {{#strong}}{{host}}{{/strong}}. {{#can_sync}}You may want to try to {{#sync_link}}synchronize users{{/sync_link}}.{{/can_sync}} For more authentication options and troubleshooting support please upgrade cockpit-ws to a newer version.": [
  null,
  "O Cockpit não pôde fazer login no {{#strong}}{{host}}{{/strong}}. {{#can_sync}}Talvez você queira tentar {{#sync_link}}sincronizar usuários{{/sync_link}}.{{/can_sync}} Para obter mais opções de autenticação e suporte a solução de problemas, atualize o cockpit-ws para uma versão mais recente."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}.": [
  null,
  "O Cockpit não foi capaz de efetuar log in em {{#strong}}{{host}}{{/strong}}."
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. To use this machine with cockpit you will need to enable one of the following authentication methods in the sshd config on {{#strong}}{{host}}{{/strong}}:": [
  null,
  "O Cockpit não pôde efetuar login em {{#strong}}{{host}}{{/strong}}. Para usar esta máquina com Cockpit você precisará habilitar um dos seguintes métodos de autenticação no sshd config em {{#strong}}{{host}}{{/strong}}:"
 ],
 "Cockpit was unable to log into {{#strong}}{{host}}{{/strong}}. You can change your authentication credentials below. {{#can_sync}}You may prefer to {{#sync_link}}synchronize accounts and passwords{{/sync_link}}.{{/can_sync}}": [
  null,
  "O Cockpit não pôde efetuar login em {{#strong}}{{host}}{{/strong}}. Você pode alterar as credenciais de autenticação abaixo. {{#can_sync}}Você pode preferir {{#sync_link}} sincronizar contas e senhas{{/sync_link}}.{{/can_sync}}"
 ],
 "Color": [
  null,
  "Cor"
 ],
 "Connect": [
  null,
  "Conectar"
 ],
 "Connecting simultaneously to more than {{ limit }} machines is unsupported.": [
  null,
  "Conectando simultaneamente a mais de {{ limit }} as máquinas não são suportadas."
 ],
 "Could not contact {{host}}": [
  null,
  "Não foi possível contatar {{host}}"
 ],
 "Dashboard": [
  null,
  "Painel"
 ],
 "Disk I/O": [
  null,
  "Entrada e Saida de disco"
 ],
 "Edit Server": [
  null,
  "Editar Servidor"
 ],
 "Enter IP address or host name": [
  null,
  "Digite o endereço IP ou nome de host"
 ],
 "Entering a different password here means you will need to retype it every time you reconnect to this machine": [
  null,
  "Introduzir uma senha diferente aqui significa que você precisará digitá-la cada vez que você se reconecta a esta máquina"
 ],
 "Error loading users: {{perm_failed}}": [
  null,
  "Erro ao carregar usuários: {{perm_failed}}"
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
  "Digital"
 ],
 "Go to now": [
  null,
  "Ir para agora"
 ],
 "Host Name": [
  null,
  "Nome do host"
 ],
 "In order to synchronize users, you need to log in to {{#strong}}{{host}}{{/strong}}.": [
  null,
  "Para sincronizar os usuários, você precisa fazer login em {{#strong}}{{host}}{{/strong}}."
 ],
 "Incorrect Host Key": [
  null,
  "Chave de Host Incorreta"
 ],
 "Invalid file permissions": [
  null,
  "Permissão de arquivos inválida"
 ],
 "Is sshd running on a different port?": [
  null,
  "O sshd está sendo executado em uma porta diferente?"
 ],
 "Kerberos Based SSO": [
  null,
  "Baseado no Kerberos SSO"
 ],
 "Kerberos Ticket": [
  null,
  "Tíquete Kerberos"
 ],
 "Leave blank to connect to this machine as the currently logged in user. If you enter a different username, that user will always be used when connecting to this machine.": [
  null,
  "Deixe em branco para se conectar a esta máquina como o usuário conectado no momento. Se você digitar um nome de usuário diferente, esse usuário sempre será usado ao se conectar a esta máquina."
 ],
 "Leave blank to connect to this machine as the currently logged in user{{#default_user}} ({{default_user}}){{/default_user}}. If you enter a different username, that user will always be used connecting to this machine.": [
  null,
  ""
 ],
 "Log In": [
  null,
  "Entrar"
 ],
 "Log in to {{host}}": [
  null,
  "Logar em {{host}}"
 ],
 "Login Password": [
  null,
  "Senha de Login"
 ],
 "Lost connection. Trying to reconnect": [
  null,
  "Conexão Perdida. Tentando reconectar."
 ],
 "Memory": [
  null,
  "Memória"
 ],
 "Network": [
  null,
  "Rede"
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
 "Password not accepted": [
  null,
  "Senha não aceita"
 ],
 "Port": [
  null,
  "Porta"
 ],
 "Prompting via ssh-add timed out": [
  null,
  "A solicitação via ssh-add expirou"
 ],
 "Prompting via ssh-keygen timed out": [
  null,
  "Solicitação via ssh-keygen expirou"
 ],
 "Public Key": [
  null,
  "Chave Pública"
 ],
 "Select the users that you would like to be synchronized with {{#strong}}{{host}}{{/strong}}": [
  null,
  "Selecione os usuários que você gostaria de ser sincronizado com {{#strong}}{{host}}{{/strong}}"
 ],
 "Servers": [
  null,
  "Servidores"
 ],
 "Set": [
  null,
  "Definir"
 ],
 "Synchronize": [
  null,
  "Sincronizar"
 ],
 "Synchronize users": [
  null,
  "Sincronizar usuários"
 ],
 "The IP address or host name cannot contain whitespace.": [
  null,
  "O enderço IP ou hostname não podem conter espações."
 ],
 "The authenticity of host {{#strong}}{{host}}{{/strong}} can't be established. Are you sure you want to continue connecting?": [
  null,
  "A autenticidade do host {{#strong}}{{host}}{{/strong}} não pode ser estabelecida. Tem certeza de que deseja continuar conectando?"
 ],
 "The key of {{#strong}}{{host}}{{/strong}} does not match the key previously in use. Unless this machine was recently replaced, it is likely that someone is trying to attack your connection to this machine.": [
  null,
  "A chave de {{#strong}}{{host}}{{/strong}} não corresponde à chave anteriormente em uso. A menos que esta máquina foi recentemente substituída, é provável que alguém está tentando atacar a sua conexão com esta máquina."
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
  "Para tentar uma porta diferente, você precisará atualizar o cockpit-ws para uma versão mais recente."
 ],
 "Type a password": [
  null,
  "Digite uma senha"
 ],
 "Unknown Host Key": [
  null,
  "Chave de Host Desconhecida"
 ],
 "Update": [
  null,
  "Atualizar"
 ],
 "User": [
  null,
  "Usuário"
 ],
 "User name": [
  null,
  "Nome de usuário"
 ],
 "Using available credentials": [
  null,
  "Usando credenciais disponíveis"
 ],
 "You are connected to {{#strong}}{{host}}{{/strong}}, however in order to synchronize users, a user with superuser privileges is required.": [
  null,
  "Você está conectado a {{#strong}}{{host}}{{/strong}}, no entanto, para sincronizar os usuários, é necessário um usuário com privilégios de superusuário."
 ],
 "You are currently connected directly to this server. You cannot delete it.": [
  null,
  "Você está conectado diretamente a este servidor. Você não pode excluí-lo."
 ],
 "You can remove the previously stored key by running the following command": [
  null,
  "Você pode remover a chave previamente armazenada executando o seguinte comando"
 ]
}));
