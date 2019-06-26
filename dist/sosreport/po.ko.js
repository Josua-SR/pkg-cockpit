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
nplurals=1; plural=0;
return plural;
},
  "language": "ko",
  "x-generator": "Zanata 4.6.2"
 },
 "Cancel": [
  null,
  "취소"
 ],
 "Close": [
  null,
  "닫기"
 ],
 "Create Report": [
  null,
  "보고서 작성 "
 ],
 "Create diagnostic report": [
  null,
  "진단 보고서 작성 "
 ],
 "Diagnostic reports": [
  null,
  ""
 ],
 "Done!": [
  null,
  "완료"
 ],
 "Download report": [
  null,
  "리포트 다운로드 "
 ],
 "Generating report": [
  null,
  ""
 ],
 "No archive has been created.": [
  null,
  ""
 ],
 "The collected information will be stored locally on the system.": [
  null,
  ""
 ],
 "The generated archive contains data considered sensitive and its content should be reviewed by the originating organization before being passed to any third party.": [
  null,
  ""
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  ""
 ]
}));
