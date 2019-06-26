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
nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2;
return plural;
},
  "language": "cs",
  "x-generator": "Zanata 4.6.2"
 },
 "Access": [
  null,
  "Přístup"
 ],
 "Account Expiration": [
  null,
  "Skončení platnosti účtu"
 ],
 "Account not available or cannot be edited.": [
  null,
  "Účet není k dispozici nebo ho není možné měnit."
 ],
 "Accounts": [
  null,
  "Účty"
 ],
 "Add key": [
  null,
  "Přidat klíč"
 ],
 "Add public key": [
  null,
  "Přidat veřejnou část klíče"
 ],
 "Adding key": [
  null,
  "Přidání klíče"
 ],
 "Authorized Public SSH Keys": [
  null,
  "Pověřené veřejné SSH klíče"
 ],
 "Back to Accounts": [
  null,
  "Zpět k účtům"
 ],
 "Cancel": [
  null,
  "Storno"
 ],
 "Change": [
  null,
  "Změnit"
 ],
 "Close": [
  null,
  "Zavřít"
 ],
 "Confirm": [
  null,
  "Potvrdit"
 ],
 "Confirm New Password": [
  null,
  "Potvrdit nové heslo"
 ],
 "Container Administrator": [
  null,
  "Správce kontejneru"
 ],
 "Create": [
  null,
  "Vytvořit"
 ],
 "Create New Account": [
  null,
  "Vytvořit nový účet"
 ],
 "Delete": [
  null,
  "Smazat"
 ],
 "Delete $0": [
  null,
  "Smazat $0"
 ],
 "Delete Files": [
  null,
  "Smazat soubory"
 ],
 "Error": [
  null,
  "Chyba"
 ],
 "Error saving authorized keys: ": [
  null,
  "Chyba při ukládání pověřených klíčů:"
 ],
 "Excellent password": [
  null,
  "Skvělé heslo"
 ],
 "Failed to change password": [
  null,
  "Nepodařilo se změnit heslo"
 ],
 "Failed to load authorized keys.": [
  null,
  "Nepodařilo se nahrát ověřovací klíče."
 ],
 "Force Change": [
  null,
  "Vynutit změnu"
 ],
 "Force password change": [
  null,
  "Vynutit změnu hesla"
 ],
 "Full Name": [
  null,
  "Celé jméno"
 ],
 "Image Builder": [
  null,
  "Tvorba obrazů"
 ],
 "Invalid expiration date": [
  null,
  "Neplatné datum skončení platnosti"
 ],
 "Invalid key": [
  null,
  "Neplatný klíč"
 ],
 "Invalid number of days": [
  null,
  "Neplatný počet dnů"
 ],
 "Last Login": [
  null,
  "Poslední přihlášení"
 ],
 "Local Accounts": [
  null,
  "Místní účty"
 ],
 "Lock Account": [
  null,
  "Uzamknout účet"
 ],
 "Lock account on $0": [
  null,
  "Uzamknout účet na $0"
 ],
 "Logged In": [
  null,
  "Přihlášeni"
 ],
 "Never": [
  null,
  "Nikdy"
 ],
 "Never expire password": [
  null,
  "Heslo platí napořád"
 ],
 "Never lock account": [
  null,
  "Účet nikdy nezamykat"
 ],
 "New Password": [
  null,
  "Nové heslo"
 ],
 "New password was not accepted": [
  null,
  "Nové heslo nebylo přijato"
 ],
 "No real name specified": [
  null,
  "Není zadán skutečný název"
 ],
 "No user name specified": [
  null,
  "Nebylo zadáno uživatelské jméno"
 ],
 "Off": [
  null,
  "Vypnuto"
 ],
 "Old Password": [
  null,
  "Původní heslo"
 ],
 "Old password not accepted": [
  null,
  "Původní heslo nebylo přijato"
 ],
 "On": [
  null,
  "Zapnuto"
 ],
 "Password": [
  null,
  "Heslo"
 ],
 "Password Expiration": [
  null,
  "Skončení platnosti hesla"
 ],
 "Password is not acceptable": [
  null,
  "Heslo není přijatelné"
 ],
 "Password is too weak": [
  null,
  "Heslo je příliš slabé"
 ],
 "Password must be changed": [
  null,
  "Heslo je třeba změnit"
 ],
 "Paste the contents of your public SSH key file here": [
  null,
  "Sem vložte obsah veřejné části svého ssh klíče"
 ],
 "Please specify an expiration date": [
  null,
  "Zadejte datum skončení platnosti"
 ],
 "Prompting via passwd timed out": [
  null,
  "Časový limit výzvy prostřednictvím hesla překročen"
 ],
 "Require password change every $0 days": [
  null,
  "Vyžadovat změnu hesla každých $0 dnů"
 ],
 "Require password change on $0": [
  null,
  "Vyžadovat změnu hesla na $0"
 ],
 "Reset": [
  null,
  "Reset"
 ],
 "Roles": [
  null,
  "Role"
 ],
 "Server Administrator": [
  null,
  "Správce serveru"
 ],
 "Set": [
  null,
  "Nastavit"
 ],
 "Set Password": [
  null,
  "Nastavit heslo"
 ],
 "Terminate Session": [
  null,
  "Ukončit sezení"
 ],
 "The account '$0' will be forced to change their password on next login": [
  null,
  "Účet „$0“ bude při příštím přihlášení vyzván k vynucené změně hesla"
 ],
 "The key you provided was not valid.": [
  null,
  "Zadaný klíč není platný."
 ],
 "The passwords do not match": [
  null,
  "Zadání hesla se neshodují"
 ],
 "The user <b>$0</b> is not permitted to modify accounts": [
  null,
  "Uživatel <b>$0</b> není oprávněn upravovat účty"
 ],
 "The user name can only consist of letters from a-z, digits, dots, dashes and underscores.": [
  null,
  "Uživatelské jméno se může sestávat pouze z písmen a-z (bez diakritiky), číslic, teček, spojovníků a podtržítek."
 ],
 "There are no authorized public keys for this account.": [
  null,
  "Pro tento účet nejsou žádné pověřené klíče."
 ],
 "This user name already exists": [
  null,
  "Toto uživatelské jméno už existuje"
 ],
 "Unable to delete root account": [
  null,
  "Účet správce (root) není možné smazat"
 ],
 "Unable to rename root account": [
  null,
  "Účet správce (root) není možné přejmenovat"
 ],
 "Unexpected error": [
  null,
  "Neočekávaná chyba"
 ],
 "Unnamed": [
  null,
  "Bez názvu"
 ],
 "User Name": [
  null,
  "Uživatelské jméno"
 ],
 "Validating key": [
  null,
  "Ověřuje se klíč"
 ],
 "You do not have permission to view the authorized public keys for this account.": [
  null,
  "Nemáte oprávnění zobrazovat pověřené klíče pro tento účet."
 ],
 "You must wait longer to change your password": [
  null,
  "Pro změnu hesla je třeba vyčkat déle"
 ],
 "translatable": [
  null,
  "přeložitelné"
 ],
 "page-title\u0004Accounts": [
  null,
  "Účty"
 ]
}));
