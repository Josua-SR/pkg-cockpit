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
nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
return plural;
},
  "language": "ru",
  "x-generator": "Zanata 4.6.2"
 },
 "Cancel": [
  null,
  "Отмена"
 ],
 "Close": [
  null,
  "Закрыть"
 ],
 "Create Report": [
  null,
  "Создать отчёт"
 ],
 "Create diagnostic report": [
  null,
  "Создание диагностического отчёта"
 ],
 "Diagnostic reports": [
  null,
  "Диагностические отчёты"
 ],
 "Done!": [
  null,
  "Завершено."
 ],
 "Download report": [
  null,
  "Загрузить отчёт"
 ],
 "Generating report": [
  null,
  "Создание отчёта"
 ],
 "No archive has been created.": [
  null,
  "Архив не создан."
 ],
 "The collected information will be stored locally on the system.": [
  null,
  "Собранная информация будет храниться локально в системе."
 ],
 "The generated archive contains data considered sensitive and its content should be reviewed by the originating organization before being passed to any third party.": [
  null,
  "Сформированный архив содержит данные, считающиеся конфиденциальными, и его содержимое должно быть пересмотрено первоначальной организацией до передачи какой-либо третьей стороне."
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  "Этот инструмент соберёт информацию о конфигурации системы и диагностическую информацию для использования при диагностике проблем с системой."
 ]
}));
