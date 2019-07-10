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
 "Applications": [
  null,
  "애플리케이션 "
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Checking for new applications": [
  null,
  "새 애플리케이션 확인 중 "
 ],
 "Close": [
  null,
  "닫기"
 ],
 "Error": [
  null,
  "오류"
 ],
 "Go to Application": [
  null,
  "애플리케이션으로 이동"
 ],
 "Install": [
  null,
  "설치"
 ],
 "Installing": [
  null,
  "설치 중"
 ],
 "No applications installed or available": [
  null,
  "애플리케이션이 설치되어 있지 않거나 사용할 수 없습니다. "
 ],
 "No description provided.": [
  null,
  "설명이 없습니다."
 ],
 "No installation package found for this application.": [
  null,
  "이 패키지에 대한 설치 패키지를 찾을 수 없습니다. "
 ],
 "Ok": [
  null,
  "확인"
 ],
 "PackageKit crashed": [
  null,
  "PackageKit가 크래시되었습니다 "
 ],
 "Remove": [
  null,
  "제거 "
 ],
 "Removing": [
  null,
  "삭제 중"
 ],
 "Unknown Application": [
  null,
  "알 수 없는 애플리케이션 "
 ],
 "Waiting for other programs to finish using the package manager...": [
  null,
  ""
 ]
}));
