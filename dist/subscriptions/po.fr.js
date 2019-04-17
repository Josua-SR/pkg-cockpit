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
nplurals=2; plural=(n > 1);
return plural;
},
  "language": "fr",
  "x-generator": "Zanata 4.6.2"
 },
 "'Organization' required to register.": [
  null,
  "«Organisation» nécessaire pour s’inscrire."
 ],
 "'Organization' required when using activation keys.": [
  null,
  "«Organisation» requis lors de l’utilisation des clés d’activation."
 ],
 "Access denied": [
  null,
  "Accès refusé"
 ],
 "Activation Key": [
  null,
  "Clé d’activation"
 ],
 "Architecture": [
  null,
  "Architecture"
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Couldn't get system subscription status. Please ensure subscription-manager is installed.": [
  null,
  "Impossible d’obtenir le statut d’abonnement au système. Veuillez vous assurer que le gestionnaire d’abonnement est installé."
 ],
 "Custom URL": [
  null,
  "URL personnalisée"
 ],
 "Default": [
  null,
  "Par défaut"
 ],
 "Details": [
  null,
  "Détails"
 ],
 "Ends": [
  null,
  "Se termine"
 ],
 "Installed products": [
  null,
  "Produits installés"
 ],
 "Invalid credentials": [
  null,
  "Identifiants invalides"
 ],
 "Invalid username or password": [
  null,
  "Nom d’utilisateur ou mot de passe non valide"
 ],
 "Login": [
  null,
  "S’identifier"
 ],
 "Login/password or activation key required to register.": [
  null,
  "Identifiant / mot de passe ou clé d’activation nécessaire pour vous inscrire."
 ],
 "No installed products on the system.": [
  null,
  "Aucun produit installé sur le système."
 ],
 "Ok": [
  null,
  "Ok"
 ],
 "Organization": [
  null,
  "Organisation"
 ],
 "Password": [
  null,
  "Mot de passe"
 ],
 "Product ID": [
  null,
  "ID de produit"
 ],
 "Product name": [
  null,
  "Nom du produit"
 ],
 "Proxy": [
  null,
  "Proxy"
 ],
 "Register": [
  null,
  "Enregistrer"
 ],
 "Register system": [
  null,
  "Enregistrer le système"
 ],
 "Retrieving subscription status...": [
  null,
  "Récupération du statut de l’abonnement…"
 ],
 "Server": [
  null,
  "Serveur"
 ],
 "Starts": [
  null,
  "Démarre"
 ],
 "Status": [
  null,
  "Statut"
 ],
 "Status: $0": [
  null,
  "Statut : $0"
 ],
 "Status: System isn't registered": [
  null,
  "Statut : le système n’est pas enregistré"
 ],
 "Subscriptions": [
  null,
  "Abonnements"
 ],
 "The current user isn't allowed to access system subscription status.": [
  null,
  "L’utilisateur actuel n’est pas autorisé à accéder au statut d’abonnement au système."
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unable to connect": [
  null,
  "Incapable de se connecter"
 ],
 "Unregister": [
  null,
  "Annuler l’inscription"
 ],
 "Unregistering system...": [
  null,
  "Système de désenregistrement…"
 ],
 "Updating": [
  null,
  "Mise à jour en cours"
 ],
 "Use proxy server": [
  null,
  "Utiliser un serveur proxy"
 ],
 "User": [
  null,
  "Utilisateur"
 ],
 "Version": [
  null,
  "Version"
 ],
 "undefined": [
  null,
  "indéfini"
 ]
}));
