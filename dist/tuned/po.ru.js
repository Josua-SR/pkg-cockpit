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
 "Change Performance Profile": [
  null,
  "Изменить профиль производительности"
 ],
 "Change Profile": [
  null,
  "Изменить профиль"
 ],
 "Communication with tuned has failed": [
  null,
  "Сбой связи с демоном tuned"
 ],
 "Disable tuned": [
  null,
  "Отключить демон tuned"
 ],
 "Failed to disable tuned": [
  null,
  "Не удалось отключить демон tuned"
 ],
 "Failed to disable tuned profile": [
  null,
  "Не удалось отключить профиль демона tuned"
 ],
 "Failed to enable tuned": [
  null,
  "Не удалось включить демон tuned"
 ],
 "Failed to switch profile": [
  null,
  "Не удалось переключить профиль"
 ],
 "None": [
  null,
  "Нет"
 ],
 "Ok": [
  null,
  "OK"
 ],
 "The user <b>$0</b> is not permitted to change profiles": [
  null,
  "Пользователь <b>$0</b> не разрешается изменять профили"
 ],
 "This system is using a custom profile": [
  null,
  "Эта система использует настраиваемый профиль"
 ],
 "This system is using the recommended profile": [
  null,
  "Эта система использует рекомендуемый профиль"
 ],
 "Tuned has failed to start": [
  null,
  "Сбой при запуске демона tuned"
 ],
 "Tuned is not available": [
  null,
  "Демон tuned недоступен"
 ],
 "Tuned is not running": [
  null,
  "Демон tuned не запущен"
 ],
 "Tuned is off": [
  null,
  "Демон tuned отключен"
 ],
 "none": [
  null,
  "нет"
 ],
 "recommended": [
  null,
  "рекомендуемые"
 ]
}));
