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
  "Создать отчет"
 ],
 "Create diagnostic report": [
  null,
  "Создать диагностический отчет"
 ],
 "Diagnostic reports": [
  null,
  "Диагностические отчеты"
 ],
 "Done!": [
  null,
  "Готово"
 ],
 "Download report": [
  null,
  "Скачать отчет"
 ],
 "Generating report": [
  null,
  "Создание отчета"
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
  "Сгенерированный архив содержит данные, считающиеся чувствительными, и его содержимое должно быть пересмотрено исходящей организацией до передачи какой-либо третьей стороне."
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  "Этот инструмент будет собирать конфигурацию системы и диагностическую информацию из этой системы для использования при диагностике проблем с системой."
 ]
}));