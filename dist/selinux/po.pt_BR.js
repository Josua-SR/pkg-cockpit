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
 "$0 occurrence": [
  "$1 occurrences",
  "$0 ocorrência",
  "$1 ocorrências"
 ],
 "Apply this solution": [
  null,
  "Aplicar essa solução"
 ],
 "Applying solution...": [
  null,
  "Aplicando solução..."
 ],
 "Audit log": [
  null,
  "Log de auditoria"
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  "Conectando-se ao daemon SETroubleshoot..."
 ],
 "Enforce policy:": [
  null,
  "Política de aplicação:"
 ],
 "Error while deleting alert: $0": [
  null,
  "Erro durante a exclusão alerta: $0"
 ],
 "Error while setting SELinux mode: '$0'": [
  null,
  "Erro ao definir o modo de SELinux: '$0'"
 ],
 "Failed to delete alert: $0": [
  null,
  "Falha ao deletar alerta: $0"
 ],
 "Install setroubleshoot-server to troubleshoot SELinux events.": [
  null,
  "Instale o setroubleshoot-server para solucionar problemas de eventos SELinux."
 ],
 "No SELinux alerts.": [
  null,
  "Nenhum alerta SELinux."
 ],
 "Not connected": [
  null,
  "Não conectado"
 ],
 "Occurred $0": [
  null,
  "Ocorreu $0"
 ],
 "Occurred between $0 and $1": [
  null,
  "Ocorreu entre $0 e $1"
 ],
 "SELinux Access Control Errors": [
  null,
  "SELinux Erros de Controle de Acesso"
 ],
 "SELinux Policy": [
  null,
  "Política de SELinux"
 ],
 "SELinux Troubleshoot": [
  null,
  "Solução de problemas de SELinux"
 ],
 "SELinux is disabled on the system": [
  null,
  "SELinux está desativado no sistema"
 ],
 "SELinux is disabled on the system.": [
  null,
  "SELinux está desativado no sistema."
 ],
 "SELinux system status is unknown.": [
  null,
  "O status do sistema SELinux é desconhecido."
 ],
 "Setting deviates from the configured state and will revert on the next boot.": [
  null,
  "A configuração se desvia do estado configurado e reverterá na próxima inicialização."
 ],
 "Solution applied successfully": [
  null,
  "Solução aplicada com êxito"
 ],
 "Solution failed": [
  null,
  "Falha na solução"
 ],
 "Solutions": [
  null,
  "Soluções"
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  "O estado configurado é desconhecido, pode mudar na próxima inicialização."
 ],
 "Unable to apply this solution automatically": [
  null,
  "Não é possível aplicar esta solução automaticamente"
 ],
 "Unable to get alert details.": [
  null,
  "Não é possível obter detalhes de alerta."
 ],
 "Unable to get alert: $0": [
  null,
  "Não é possível obter alerta: $0"
 ],
 "Unable to run fix: %0": [
  null,
  "Não é possível executar correção: %0"
 ],
 "Unable to start setroubleshootd": [
  null,
  "Incapaz de iniciar setroubleshootd"
 ],
 "Waiting for details...": [
  null,
  "Esperando por detalhes..."
 ],
 "solution details": [
  null,
  "detalhes da solução"
 ]
}));
