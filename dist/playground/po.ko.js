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
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 디스크 누락 "
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Control": [
  null,
  "컨트롤 "
 ],
 "Empty": [
  null,
  "비었음"
 ],
 "Error": [
  null,
  "오류"
 ],
 "Memory": [
  null,
  "메모리"
 ],
 "Network": [
  null,
  "네트워크"
 ],
 "No matching files found": [
  null,
  "일치하는 파일을 찾을 수 없음 "
 ],
 "Not Ready": [
  null,
  "준비되지 않음"
 ],
 "Ok": [
  null,
  "확인"
 ],
 "Path to file": [
  null,
  "파일의 경로 "
 ],
 "Ready": [
  null,
  "준비됨"
 ],
 "Too many files found": [
  null,
  "너무 많은 파일이 검색되었습니다. "
 ],
 "Unavailable": [
  null,
  "사용 불가능"
 ],
 "User": [
  null,
  "사용자"
 ],
 "undefined": [
  null,
  "정의되지 않음 "
 ],
 "disk-non-rotational\u0004$0 disk is missing": [
  "$0 disks are missing",
  "$0 디스크 누락 "
 ],
 "key\u0004Control": [
  null,
  "컨트롤 "
 ],
 "verb\u0004Empty": [
  null,
  "비었음"
 ],
 "verb\u0004Ready": [
  null,
  "준비됨"
 ]
}));
