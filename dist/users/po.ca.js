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
  "language": "ca",
  "x-generator": "Zanata 3.9.6"
 },
 "Access": [
  null,
  "Accés"
 ],
 "Account Expiration": [
  null,
  ""
 ],
 "Account not available or cannot be edited.": [
  null,
  "El compte no està disponible o no es pot editar."
 ],
 "Accounts": [
  null,
  "Comptes"
 ],
 "Add key": [
  null,
  ""
 ],
 "Add public key": [
  null,
  "Afegeix una clau pública"
 ],
 "Adding key": [
  null,
  "S'està afegint la clau"
 ],
 "Authorized Public SSH Keys": [
  null,
  "Claus SSH públiques autoritzades"
 ],
 "Back to Accounts": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Cancel·la"
 ],
 "Change": [
  null,
  "Canvia"
 ],
 "Close": [
  null,
  "Tanca"
 ],
 "Confirm": [
  null,
  "Confirmació"
 ],
 "Confirm New Password": [
  null,
  "Confirmació de la nova contrasenya"
 ],
 "Container Administrator": [
  null,
  "Administrador del contenidor"
 ],
 "Create": [
  null,
  "Crea"
 ],
 "Create New Account": [
  null,
  "Crea un nou compte"
 ],
 "Delete": [
  null,
  "Suprimeix"
 ],
 "Delete $0": [
  null,
  "Suprimeix $0"
 ],
 "Delete Files": [
  null,
  "Suprimeix els fitxers"
 ],
 "Error": [
  null,
  "Error"
 ],
 "Error saving authorized keys: ": [
  null,
  "S'ha produït un error en desar les claus autoritzades:"
 ],
 "Excellent password": [
  null,
  "Contrasenya excel·lent"
 ],
 "Failed to change password": [
  null,
  "Ha fallat el canvi de contrasenya"
 ],
 "Failed to load authorized keys.": [
  null,
  "Ha fallat la càrrega de les claus autoritzades."
 ],
 "Force Change": [
  null,
  ""
 ],
 "Force password change": [
  null,
  ""
 ],
 "Full Name": [
  null,
  "Nom complet"
 ],
 "Invalid expiration date": [
  null,
  ""
 ],
 "Invalid key": [
  null,
  "Clau no vàlida"
 ],
 "Invalid number of days": [
  null,
  ""
 ],
 "Last Login": [
  null,
  "Últim inici de sessió"
 ],
 "Local Accounts": [
  null,
  "Comptes locals"
 ],
 "Lock Account": [
  null,
  "Bloqueja el compte"
 ],
 "Lock account on $0": [
  null,
  ""
 ],
 "Logged In": [
  null,
  "Autenticat"
 ],
 "Never": [
  null,
  "Mai"
 ],
 "Never expire password": [
  null,
  ""
 ],
 "Never lock account": [
  null,
  ""
 ],
 "New Password": [
  null,
  "Contrasenya nova"
 ],
 "New password was not accepted": [
  null,
  "No s'ha acceptat la nova contrasenya"
 ],
 "No real name specified": [
  null,
  "Sense especificar el nom real"
 ],
 "No user name specified": [
  null,
  "Sense especificar el nom d'usuari"
 ],
 "Off": [
  null,
  "Apagat"
 ],
 "Old Password": [
  null,
  "Contrasenya antiga"
 ],
 "Old password not accepted": [
  null,
  "Contrasenya antiga no acceptada"
 ],
 "On": [
  null,
  "Engegat"
 ],
 "Password": [
  null,
  "Contrasenya"
 ],
 "Password Expiration": [
  null,
  ""
 ],
 "Password is not acceptable": [
  null,
  "La contrasenya no és acceptable"
 ],
 "Password is too weak": [
  null,
  "La contrasenya és massa feble"
 ],
 "Password must be changed": [
  null,
  ""
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  ""
 ],
 "Please specify an expiration date": [
  null,
  ""
 ],
 "Prompting via passwd timed out": [
  null,
  "Expiració de temps en la deferència a través passwd"
 ],
 "Require password change every $0 days": [
  null,
  ""
 ],
 "Require password change on $0": [
  null,
  ""
 ],
 "Reset": [
  null,
  "Restableix"
 ],
 "Roles": [
  null,
  "Rols"
 ],
 "Server Administrator": [
  null,
  "Administrador del servidor"
 ],
 "Set": [
  null,
  "Estableix"
 ],
 "Set Password": [
  null,
  "Estableix la contrasenya"
 ],
 "Terminate Session": [
  null,
  "Acaba la sessió"
 ],
 "The account '$0' will be forced to change their password on next login": [
  null,
  ""
 ],
 "The key you provided was not valid.": [
  null,
  "La clau que heu proporcionat no era vàlida."
 ],
 "The passwords do not match": [
  null,
  "Les contrasenyes no coincideixen"
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  "A l'usuari <b>$0</b> no se li permet modificar els comptes"
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  ""
 ],
 "There are no authorized public keys for this account.": [
  null,
  "No hi ha cap clau pública autoritzada per aquest compte."
 ],
 "This user name already exists": [
  null,
  "Aquest nom d'usuari ja existeix"
 ],
 "Unable to delete root account": [
  null,
  "No es pot suprimir el compte de root"
 ],
 "Unable to rename root account": [
  null,
  "No es pot reanomenar el compte de root"
 ],
 "Unexpected error": [
  null,
  "Error inesperat"
 ],
 "Unnamed": [
  null,
  "Sense nom"
 ],
 "User Name": [
  null,
  "Nom d'usuari"
 ],
 "Validating key": [
  null,
  "S'està validant la clau"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "No teniu el permís per visualitzar les claus públiques autoritzades per aquest compte."
 ],
 "page-title\u0004Accounts": [
  null,
  "Comptes"
 ]
}));
