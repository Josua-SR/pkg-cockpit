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
 "Change Performance Profile": [
  null,
  "성능 프로파일 변경"
 ],
 "Change Profile": [
  null,
  "프로파일 변경 "
 ],
 "Communication with tuned has failed": [
  null,
  "tuned와의 통신에 실패했습니다 "
 ],
 "Disable tuned": [
  null,
  "tuned 비활성화 "
 ],
 "Failed to disable tuned": [
  null,
  "tuned 비활성화에 실패했습니다 "
 ],
 "Failed to disable tuned profile": [
  null,
  "tuned 프로파일 비활성화에 실패"
 ],
 "Failed to enable tuned": [
  null,
  "tuned를 활성화하지 못했습니다 "
 ],
 "Failed to switch profile": [
  null,
  "프로파일 전환에 실패했습니다 "
 ],
 "None": [
  null,
  "없음"
 ],
 "Ok": [
  null,
  "확인"
 ],
 "The user <b>$0</b> is not permitted to change profiles": [
  null,
  "사용자 <b>$0</b>는 프로파일을 변경할 수 없습니다."
 ],
 "This system is using a custom profile": [
  null,
  "이 시스템은 사용자 정의 프로파일을 사용하고 있습니다."
 ],
 "This system is using the recommended profile": [
  null,
  "이 시스템은 권장 프로파일을 사용하고 있습니다"
 ],
 "Tuned has failed to start": [
  null,
  "Tuned 시작에 실패했습니다 "
 ],
 "Tuned is not available": [
  null,
  "Tuned를 사용할 수 없습니다 "
 ],
 "Tuned is not running": [
  null,
  "Tuned가 실행되고 있지 않습니다 "
 ],
 "Tuned is off": [
  null,
  "Tuned이 종료되어 있습니다. "
 ],
 "none": [
  null,
  "없음"
 ],
 "recommended": [
  null,
  "권장 사항 "
 ]
}));
