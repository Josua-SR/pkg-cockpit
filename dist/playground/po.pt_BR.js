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
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 disco não encontrado",
  "$0 discos não encontrados"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Control": [
  null,
  "Controle"
 ],
 "Empty": [
  null,
  "Vazio"
 ],
 "Error": [
  null,
  "Erro"
 ],
 "Memory": [
  null,
  "Memória"
 ],
 "Network": [
  null,
  "Rede"
 ],
 "No matching files found": [
  null,
  "Nenhum arquivo correspondente encontrado"
 ],
 "Not Ready": [
  null,
  "Não está pronto"
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
 "Path to file": [
  null,
  "Caminho para o arquivo"
 ],
 "Ready": [
  null,
  "Pronto"
 ],
 "Too many files found": [
  null,
  "Muitos arquivos encontrados"
 ],
 "Unavailable": [
  null,
  "Indisponível"
 ],
 "User": [
  null,
  "Usuário"
 ],
 "undefined": [
  null,
  "indefinido"
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "$0 disco não encontrado",
  "$0 discos não encontrados"
 ],
 "key\u0004Control": [
  null,
  "Controle"
 ],
 "verb\u0004Empty": [
  null,
  "Vazio"
 ],
 "verb\u0004Ready": [
  null,
  "Pronto"
 ]
}));
