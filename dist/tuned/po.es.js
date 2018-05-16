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
  "language": "es",
  "x-generator": "Zanata 3.9.6"
 },
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Change Performance Profile": [
  null,
  "Cambiar Perfil de Desempeño"
 ],
 "Change Profile": [
  null,
  "Cambiar Perfil"
 ],
 "Communication with tuned has failed": [
  null,
  "Falló la comunicación con «tuned»"
 ],
 "Disable tuned": [
  null,
  "Deshabilitar tuned "
 ],
 "Failed to disable tuned": [
  null,
  "Ha fallado deshabilitar tuned"
 ],
 "Failed to disable tuned profile": [
  null,
  "Ha fallado deshabilitar perfil de tuned"
 ],
 "Failed to enable tuned": [
  null,
  "Ha fallado habilitar tuned"
 ],
 "Failed to switch profile": [
  null,
  "Ha fallado cambiar perfil"
 ],
 "None": [
  null,
  "Ninguno"
 ],
 "Ok": [
  null,
  "Aceptar"
 ],
 "This system is using a custom profile": [
  null,
  "El sistema esta usando un perfil personalizado"
 ],
 "This system is using the recommended profile": [
  null,
  "El sistema esta usando el perfil recomendado"
 ],
 "Tuned has failed to start": [
  null,
  "Tuned a fallado al iniciar"
 ],
 "Tuned is not available": [
  null,
  "Tuned no esta disponible"
 ],
 "Tuned is not running": [
  null,
  "Tuned no se esta ejecutando"
 ],
 "Tuned is off": [
  null,
  "Tuned esta apagado"
 ],
 "none": [
  null,
  "ninguno"
 ],
 "recommended": [
  null,
  "recomendado"
 ]
}));
