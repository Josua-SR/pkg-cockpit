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
  "진단 보고서 "
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
  "보고서 생성 "
 ],
 "No archive has been created.": [
  null,
  "생성된 아카이브가 없습니다. "
 ],
 "The collected information will be stored locally on the system.": [
  null,
  "수집된 정보는 시스템에 로컬로 저장됩니다. "
 ],
 "The generated archive contains data considered sensitive and its content should be reviewed by the originating organization before being passed to any third party.": [
  null,
  "생성된 아카이브에는 기밀 데이터로 간주되는 데이터가 포함되어 있으며 해당 내용은 타사에 전달하기 전에 원래 조직에서 검토해야 합니다."
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  ""
 ]
}));
