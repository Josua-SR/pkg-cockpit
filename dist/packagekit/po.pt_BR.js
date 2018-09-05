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
  "x-generator": "Zanata 4.6.0"
 },
 "$0 is not available from any repository.": [
  null,
  "$0 não está disponível em nenhum repositório."
 ],
 "$0 update": [
  "$0 updates",
  "$0 atualizar",
  "$0 atualizações"
 ],
 "$0 will be installed.": [
  null,
  "$0 será instalado."
 ],
 "$1 security fix": [
  "$1 security fixes",
  "$1 correção de segurança",
  "$1 correções de segurança"
 ],
 ", including $1 security fix": [
  ", including $1 security fixes",
  ", incluindo $1 correção de segurança",
  ", incluindo $1 correções de segurança"
 ],
 "Additional packages:": [
  null,
  "Pacotes adicionais:"
 ],
 "Apply all updates": [
  null,
  "Aplicar todas as atualizações"
 ],
 "Apply security updates": [
  null,
  "Aplicar atualizações de segurança"
 ],
 "Applying updates": [
  null,
  "Aplicando atualizações"
 ],
 "Applying updates failed": [
  null,
  "A aplicação de atualizações falhou"
 ],
 "Automatic Updates": [
  null,
  "Atualizações automáticas"
 ],
 "Available Updates": [
  null,
  "Atualizações Disponíveis"
 ],
 "Bugs:": [
  null,
  "Bugs:"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Check for Updates": [
  null,
  "Verificar Atualizações"
 ],
 "Checking installed software": [
  null,
  "Verificando o software instalado"
 ],
 "Details": [
  null,
  "Detalhes"
 ],
 "Downloaded": [
  null,
  "Baixado"
 ],
 "Downloading": [
  null,
  "Baixando"
 ],
 "Downloading $0": [
  null,
  "Baixando $0"
 ],
 "Errata:": [
  null,
  "Errata:"
 ],
 "Ignore": [
  null,
  "Ignorar"
 ],
 "Initializing...": [
  null,
  "Inicializando ..."
 ],
 "Install": [
  null,
  "Instale"
 ],
 "Install All Updates": [
  null,
  "Instalar todas as atualizações"
 ],
 "Install Security Updates": [
  null,
  "Instalar atualizações de segurança"
 ],
 "Install Software": [
  null,
  "Instale Software"
 ],
 "Installed": [
  null,
  "Instalado"
 ],
 "Installing": [
  null,
  "Instalando"
 ],
 "Installing $0": [
  null,
  "Instalando $0"
 ],
 "Last checked: $0 ago": [
  null,
  "Última verificação: $0 atrás"
 ],
 "Loading available updates failed": [
  null,
  "Falhou ao carregar as atualizações disponíveis "
 ],
 "Loading available updates, please wait...": [
  null,
  "Carregando as atualizações disponíveis, por favor aguarde ..."
 ],
 "Name": [
  null,
  "Nome"
 ],
 "No updates pending": [
  null,
  "Nenhuma atualização pendente"
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
 "Package information": [
  null,
  "Informações do pacote"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit caiu"
 ],
 "PackageKit is not installed": [
  null,
  "PackageKit não está instalado"
 ],
 "PackageKit reported error code $0": [
  null,
  "PackageKit reportou código de erro $0"
 ],
 "Refreshing package information": [
  null,
  "Atualizando informações do pacote"
 ],
 "Register…": [
  null,
  "Registro…"
 ],
 "Removals:": [
  null,
  "Remoções:"
 ],
 "Removing $0": [
  null,
  "Removendo $0"
 ],
 "Restart Now": [
  null,
  "Reinicie agora"
 ],
 "Restart Recommended": [
  null,
  "Reiniciar Recomendado"
 ],
 "Restarting": [
  null,
  "Reiniciando"
 ],
 "Set up": [
  null,
  "Configuração"
 ],
 "Setting up": [
  null,
  "Configurando"
 ],
 "Severity": [
  null,
  "Gravidade"
 ],
 "Severity:": [
  null,
  "Gravidade:"
 ],
 "Software Updates": [
  null,
  "Atualizações de Software"
 ],
 "Some other program is currently using the package manager, please wait...": [
  null,
  "Algum outro programa está atualmente usando o gerenciador de pacotes, por favor aguarde ..."
 ],
 "System is up to date": [
  null,
  "O sistema está atualizado"
 ],
 "The following packages were recently updated:": [
  null,
  "Os seguintes pacotes foram atualizados recentemente:"
 ],
 "The following packages were updated $0:": [
  null,
  "Os seguintes pacotes foram atualizados $0:"
 ],
 "This system is not registered": [
  null,
  "Este sistema não está registrado"
 ],
 "This web console will be updated.": [
  null,
  "Este console da web será atualizado."
 ],
 "To get software updates, this system needs to be registered with Red Hat, either using the Red Hat Customer Portal or a local subscription server.": [
  null,
  "Para obter atualizações de software, este sistema precisa ser registrado na Red Hat, usando o Portal do Cliente Red Hat ou um servidor de assinatura local."
 ],
 "Total size: $0": [
  null,
  "Tamanho total: $0"
 ],
 "Unregistered System": [
  null,
  "Sistema não registrado"
 ],
 "Update History": [
  null,
  "Atualizar histórico"
 ],
 "Update Log": [
  null,
  "Atualizar Log"
 ],
 "Updated": [
  null,
  "Atualizado"
 ],
 "Updated packages may require a restart to take effect.": [
  null,
  "Pacotes atualizados podem exigir uma reinicialização para entrar em vigor."
 ],
 "Updates are disabled.": [
  null,
  "Atualizações estão desativadas."
 ],
 "Updating": [
  null,
  "Atualizando"
 ],
 "Verified": [
  null,
  "Verificado"
 ],
 "Verifying": [
  null,
  "Verificando"
 ],
 "Version": [
  null,
  "Versão"
 ],
 "View Registration Details": [
  null,
  "Visualizar detalhes do registro"
 ],
 "Waiting for other software management operations to finish": [
  null,
  "Aguardando que outras operações de gerenciamento de software terminem"
 ],
 "You need to re-subscribe this system.": [
  null,
  "Você precisa se inscrever novamente neste sistema."
 ],
 "Your browser will disconnect, but this does not affect the update process. You can reconnect in a few moments to continue watching the progress.": [
  null,
  "Seu navegador será desconectado, mas isso não afeta o processo de atualização. Você pode se reconectar em alguns instantes para continuar acompanhando o progresso."
 ],
 "Your server will close the connection soon. You can reconnect after it has restarted.": [
  null,
  "Seu servidor fechará a conexão em breve. Você pode reconectar depois de ter reiniciado."
 ],
 "and restart the machine automatically.": [
  null,
  "e reinicie a máquina automaticamente."
 ],
 "at": [
  null,
  "no"
 ],
 "every day": [
  null,
  ""
 ],
 "on Fridays": [
  null,
  ""
 ],
 "on Mondays": [
  null,
  ""
 ],
 "on Saturdays": [
  null,
  ""
 ],
 "on Sundays": [
  null,
  ""
 ],
 "on Thursdays": [
  null,
  ""
 ],
 "on Tuesdays": [
  null,
  ""
 ],
 "on Wednesdays": [
  null,
  ""
 ],
 "undefined": [
  null,
  "indefinido"
 ]
}));
