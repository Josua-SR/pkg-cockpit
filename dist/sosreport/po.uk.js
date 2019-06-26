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
  "language": "uk",
  "x-generator": "Zanata 4.6.2"
 },
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Close": [
  null,
  "Закрити"
 ],
 "Create Report": [
  null,
  "Створити звіт"
 ],
 "Create diagnostic report": [
  null,
  "Створити діагностичний звіт"
 ],
 "Diagnostic reports": [
  null,
  "Діагностичні звіти"
 ],
 "Done!": [
  null,
  "Готово!"
 ],
 "Download report": [
  null,
  "Звіт щодо отримання"
 ],
 "Generating report": [
  null,
  "Створюємо звіт"
 ],
 "No archive has been created.": [
  null,
  "Архів не було створено."
 ],
 "The collected information will be stored locally on the system.": [
  null,
  "Зібрані дані буде збережено локально у операційній системі."
 ],
 "The generated archive contains data considered sensitive and its content should be reviewed by the originating organization before being passed to any third party.": [
  null,
  "У створеному архіві містяться дані, які є конфіденційними. Його вміст має бути переглянути організацією походження, перш ніж архів буде передано стороннім особам."
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  "Ця програма збере дані щодо налаштувань системи і діагностичні дані з цієї системи для виявлення причин проблем у системі."
 ]
}));
