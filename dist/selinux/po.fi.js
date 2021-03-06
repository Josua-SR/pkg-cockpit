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
  "language": "fi",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 occurrence": [
  "$1 occurrences",
  "$0 tapahtuma",
  "$0 tapahtumat"
 ],
 "Apply this solution": [
  null,
  "Toteuta tämä ratkaisu"
 ],
 "Applying solution...": [
  null,
  "Toteutetaan ratkaisu..."
 ],
 "Audit log": [
  null,
  "Audit-loki"
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  "Yhdistetään SETroubleshoot daemoniin..."
 ],
 "Enforce policy:": [
  null,
  "Toimeenpane käytäntö:"
 ],
 "Error while deleting alert: $0": [
  null,
  "Virhe poistaessa hälytystä:"
 ],
 "Error while setting SELinux mode: '$0'": [
  null,
  "Virhe asettaessa SELinuxin tilaa: '$0'"
 ],
 "Failed to delete alert: $0": [
  null,
  "Ei voitu tuhota virhettä: $0"
 ],
 "Install setroubleshoot-server to troubleshoot SELinux events.": [
  null,
  "Asenna setroubleshoot-server tehdäksesi vianetsinnän SELinux-tapahtumista."
 ],
 "No SELinux alerts.": [
  null,
  "Ei SELinux-hälytyksiä."
 ],
 "Not connected": [
  null,
  "Ei yhdistetty"
 ],
 "Occurred $0": [
  null,
  ""
 ],
 "Occurred between $0 and $1": [
  null,
  ""
 ],
 "SELinux Access Control Errors": [
  null,
  ""
 ],
 "SELinux Policy": [
  null,
  "SELinux-käytäntö"
 ],
 "SELinux Troubleshoot": [
  null,
  "SELinux-ongelmanratkaisu"
 ],
 "SELinux is disabled on the system": [
  null,
  "SELinux on poistettu käytöstä järjestelmässä"
 ],
 "SELinux is disabled on the system.": [
  null,
  "SELinux on poistettu käytöstä järjestelmässä."
 ],
 "SELinux system status is unknown.": [
  null,
  "SELinux-järjestelmän tila on tuntematon."
 ],
 "Setting deviates from the configured state and will revert on the next boot.": [
  null,
  ""
 ],
 "Solution applied successfully": [
  null,
  ""
 ],
 "Solution failed": [
  null,
  ""
 ],
 "Solutions": [
  null,
  ""
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  ""
 ],
 "Unable to apply this solution automatically": [
  null,
  "Tämän ratkaisun automaattinen asettaminen epäonnistui"
 ],
 "Unable to get alert details.": [
  null,
  "Virheen lisätietojen hakeminen epäonnistui."
 ],
 "Unable to get alert: $0": [
  null,
  "Ei voitu hakea virhettä: $0"
 ],
 "Unable to run fix: %0": [
  null,
  "Ei voitu ajaa korjausta: %0"
 ],
 "Unable to start setroubleshootd": [
  null,
  "Ei voitu aloittaa setroubleshootd"
 ],
 "Waiting for details...": [
  null,
  "Odotetaan lisätietoja..."
 ],
 "solution details": [
  null,
  "ratkaisun yksityiskohdat"
 ]
}));
