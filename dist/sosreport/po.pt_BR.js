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
 "Close": [
  null,
  "Fechar"
 ],
 "Create Report": [
  null,
  "Criar relatório"
 ],
 "Create diagnostic report": [
  null,
  "Criar um relatório de diagnostico"
 ],
 "Diagnostic reports": [
  null,
  "Relatório de diagnostico"
 ],
 "Done!": [
  null,
  "Feito!"
 ],
 "Download report": [
  null,
  "Relatório de download"
 ],
 "Generating report": [
  null,
  "Gerando relatório"
 ],
 "No archive has been created.": [
  null,
  "Nenhum arquivo foi criado."
 ],
 "The collected information will be stored locally on the system.": [
  null,
  "As informações coletadas serão armazenadas localmente no sistema."
 ],
 "The generated archive contains data considered sensitive and its content should be reviewed by the originating organization before being passed to any third party.": [
  null,
  "O arquivo gerado contém dados considerados confidenciais e seu conteúdo deve ser revisado pela organização de origem antes de ser passado para quaisquer terceiros."
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  "Esta ferramenta irá coletar a configuração do sistema e informações diagnósticas deste sistema para diagnosticar problemas com o mesmo."
 ]
}));
