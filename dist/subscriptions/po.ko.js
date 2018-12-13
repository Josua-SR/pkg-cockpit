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
nplurals=1; plural=0;
return plural;
},
  "language": "ko",
  "x-generator": "Zanata 4.6.2"
 },
 "'Organization' required to register.": [
  null,
  "'조직'을 등록해야 합니다."
 ],
 "'Organization' required when using activation keys.": [
  null,
  "활성화 키를 사용할 때 '조직'이 필요합니다."
 ],
 "Access denied": [
  null,
  "액세스 거부됨"
 ],
 "Activation Key": [
  null,
  "활성키"
 ],
 "Architecture": [
  null,
  "아키텍처"
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Couldn't get system subscription status. Please ensure subscription-manager is installed.": [
  null,
  ""
 ],
 "Custom URL": [
  null,
  "사용자 설정 URL"
 ],
 "Default": [
  null,
  "기본"
 ],
 "Details": [
  null,
  "상세 정보"
 ],
 "Ends": [
  null,
  "끝"
 ],
 "Installed products": [
  null,
  "설치된 제품"
 ],
 "Invalid credentials": [
  null,
  ""
 ],
 "Invalid username or password": [
  null,
  "잘못된 사용자 이름 또는 비밀번호"
 ],
 "Login": [
  null,
  "로그인"
 ],
 "Login/password or activation key required to register.": [
  null,
  ""
 ],
 "No installed products on the system.": [
  null,
  ""
 ],
 "Ok": [
  null,
  "확인"
 ],
 "Organization": [
  null,
  "조직"
 ],
 "Password": [
  null,
  "암호"
 ],
 "Product ID": [
  null,
  "제품 ID"
 ],
 "Product name": [
  null,
  "제품 이름 "
 ],
 "Proxy": [
  null,
  "프록시 "
 ],
 "Register": [
  null,
  "시스템 등록"
 ],
 "Register system": [
  null,
  ""
 ],
 "Retrieving subscription status...": [
  null,
  ""
 ],
 "Server": [
  null,
  "서버"
 ],
 "Starts": [
  null,
  "시작 "
 ],
 "Status": [
  null,
  "상태"
 ],
 "Status: $0": [
  null,
  "상태: $0"
 ],
 "Status: System isn't registered": [
  null,
  ""
 ],
 "Subscriptions": [
  null,
  "서브스크립션 "
 ],
 "The current user isn't allowed to access system subscription status.": [
  null,
  "현재 사용자는 시스템 서브스크립션 상태에 액세스할 수 없습니다."
 ],
 "URL": [
  null,
  "URL"
 ],
 "Unable to connect": [
  null,
  "연결할 수 없음"
 ],
 "Unregister": [
  null,
  "등록 해제"
 ],
 "Unregistering system...": [
  null,
  ""
 ],
 "Updating": [
  null,
  ""
 ],
 "Use proxy server": [
  null,
  ""
 ],
 "User": [
  null,
  "사용자"
 ],
 "Version": [
  null,
  "버전"
 ],
 "undefined": [
  null,
  ""
 ]
}));
