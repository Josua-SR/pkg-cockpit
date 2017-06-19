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
 "'Organization' required to register.": [
  null,
  "'Organização' necessária para se registar."
 ],
 "'Organization' required when using activation keys.": [
  null,
  "'Organização' necessária ao usar chaves de ativação."
 ],
 "Access denied": [
  null,
  "Acesso negado"
 ],
 "Activation Key": [
  null,
  "Chave de Ativação"
 ],
 "Architecture": [
  null,
  "Arquitetura"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Couldn't get system subscription status. Please ensure subscription-manager is installed.": [
  null,
  "Não foi possível obter o status de assinatura do sistema. Verifique se o gerenciador de assinaturas está instalado."
 ],
 "Custom URL": [
  null,
  "URL Personalizada"
 ],
 "Default": [
  null,
  "Padrão"
 ],
 "Details": [
  null,
  "Detalhes"
 ],
 "Ends": [
  null,
  "Finais"
 ],
 "Installed products": [
  null,
  "Produtos instalados"
 ],
 "Invalid credentials": [
  null,
  "Credenciais Inválidas"
 ],
 "Invalid username or password": [
  null,
  "Nome de usuário ou senha inválidos"
 ],
 "Login": [
  null,
  "Login"
 ],
 "Login/password or activation key required to register.": [
  null,
  "Login/senha ou chave de ativação necessária para registrar."
 ],
 "No installed products on the system.": [
  null,
  "Não há produtos instalados no sistema."
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Organization": [
  null,
  "Organização"
 ],
 "Password": [
  null,
  "Senha"
 ],
 "Product ID": [
  null,
  "ID do Produto"
 ],
 "Product name": [
  null,
  "Nome do produto"
 ],
 "Proxy": [
  null,
  "Proxy"
 ],
 "Register": [
  null,
  "Registrar"
 ],
 "Register system": [
  null,
  "Registrar sistema"
 ],
 "Retrieving subscription status...": [
  null,
  "Recuperando o status da assinatura..."
 ],
 "Server": [
  null,
  "Servidor"
 ],
 "Starts": [
  null,
  "Começa"
 ],
 "Status": [
  null,
  "Estado"
 ],
 "Status: $0": [
  null,
  "Status: $0"
 ],
 "Status: System isn't registered": [
  null,
  "Status: O sistema não está registrado"
 ],
 "Subscriptions": [
  null,
  "Assinaturas"
 ],
 "The current user isn't allowed to access system subscription status.": [
  null,
  "O usuário atual não tem permissão para acessar o status de assinatura do sistema."
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unable to connect": [
  null,
  "Não é possível conectar"
 ],
 "Unregister": [
  null,
  "Cancelar o registro"
 ],
 "Unregistering system...": [
  null,
  "Cancelando o registro do sistema..."
 ],
 "Updating": [
  null,
  "Atualizando"
 ],
 "Use proxy server": [
  null,
  "Usar servidor proxy"
 ],
 "User": [
  null,
  "Usuário"
 ],
 "Version": [
  null,
  "Versão"
 ],
 "undefined": [
  null,
  "indefinido"
 ]
}));
