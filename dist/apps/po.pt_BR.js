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
 "Applications": [
  null,
  "Aplicações"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Checking for new applications": [
  null,
  "Verificando novos aplicativos"
 ],
 "Close": [
  null,
  "Fechar"
 ],
 "Error": [
  null,
  "Erro"
 ],
 "Go to Application": [
  null,
  "Vá para o aplicativo"
 ],
 "Install": [
  null,
  "Instale"
 ],
 "Installing": [
  null,
  "Instalando"
 ],
 "No applications installed or available": [
  null,
  "Nenhum aplicativo instalado ou disponível"
 ],
 "No description provided.": [
  null,
  "Nenhuma descrição fornecida."
 ],
 "No installation package found for this application.": [
  null,
  "Nenhum pacote de instalação encontrado para este aplicativo."
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit caiu"
 ],
 "Remove": [
  null,
  "Remover"
 ],
 "Removing": [
  null,
  "Removendo"
 ],
 "Unknown Application": [
  null,
  "Aplicação Desconhecida"
 ],
 "Waiting for other programs to finish using the package manager...": [
  null,
  "Aguardando outros programas terminarem de usar o gerenciador de pacotes ..."
 ]
}));
