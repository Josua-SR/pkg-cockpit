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
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Change Performance Profile": [
  null,
  "Perfil alterar o desempenho"
 ],
 "Change Profile": [
  null,
  "Alterar o perfil"
 ],
 "Communication with tuned has failed": [
  null,
  "A comunicação com sintonizado falhou"
 ],
 "Disable tuned": [
  null,
  "Desabilitar tuned"
 ],
 "Failed to disable tuned": [
  null,
  "Falha ao desabilitar tuned"
 ],
 "Failed to disable tuned profile": [
  null,
  "Falha ao desabilitar perfil tuned"
 ],
 "Failed to enable tuned": [
  null,
  "Falha ao habilitar tuned"
 ],
 "Failed to switch profile": [
  null,
  "Falha ao mudar de perfil"
 ],
 "None": [
  null,
  "Nenhum"
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "The user <b>$0</b> is not permitted to change profiles": [
  null,
  "Ao usuário <b>$0</b>  não é permitido alterar perfis"
 ],
 "This system is using a custom profile": [
  null,
  "Este sistema está usando um perfil personalizado"
 ],
 "This system is using the recommended profile": [
  null,
  "Este sistema está usando o perfil recomendado"
 ],
 "Tuned has failed to start": [
  null,
  "Falhou ao iniciar Tuned"
 ],
 "Tuned is not available": [
  null,
  "Tuned não está disponível"
 ],
 "Tuned is not running": [
  null,
  "Tuned não está em execução"
 ],
 "Tuned is off": [
  null,
  "Tuned está fora"
 ],
 "none": [
  null,
  "Nenhum"
 ],
 "recommended": [
  null,
  "recomendado"
 ]
}));
