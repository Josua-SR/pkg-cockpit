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
  "language": "ja",
  "x-generator": "Zanata 4.6.2"
 },
 "$0 occurrence": [
  "$1 occurrences",
  "$0 件"
 ],
 "Apply this solution": [
  null,
  "このソリューションの適用"
 ],
 "Applying solution...": [
  null,
  "ソリューションの適用中 ..."
 ],
 "Audit log": [
  null,
  "監査ログ"
 ],
 "Connecting to SETroubleshoot daemon...": [
  null,
  "SETroubleshoot デーモンへの接続中 ..."
 ],
 "Enforce policy:": [
  null,
  "ポリシーの適用:"
 ],
 "Error while deleting alert: $0": [
  null,
  "アラートの削除中にエラーが発生しました: $0"
 ],
 "Error while setting SELinux mode: '$0'": [
  null,
  "SELinux モードの設定中にエラーが発生しました: '$0'"
 ],
 "Failed to delete alert: $0": [
  null,
  "アラートの削除に失敗しました: $0"
 ],
 "Install setroubleshoot-server to troubleshoot SELinux events.": [
  null,
  "setroubleshoot-server をインストールして SELinux イベントをトラブルシュートします。"
 ],
 "No SELinux alerts.": [
  null,
  "SELinux アラートがありません。"
 ],
 "Not connected": [
  null,
  "接続していません"
 ],
 "Occurred $0": [
  null,
  "発生件数 $0"
 ],
 "Occurred between $0 and $1": [
  null,
  "$0〜$1 の発生件数"
 ],
 "Off": [
  null,
  "オフ"
 ],
 "On": [
  null,
  "オン"
 ],
 "SELinux Access Control Errors": [
  null,
  "SELinux アクセス制御エラー"
 ],
 "SELinux Policy": [
  null,
  "SELinux ポリシー"
 ],
 "SELinux Troubleshoot": [
  null,
  "SELinux トラブルシュート"
 ],
 "SELinux is disabled on the system": [
  null,
  "SELinux はシステムで無効です"
 ],
 "SELinux is disabled on the system.": [
  null,
  "SELinux はシステムで無効です"
 ],
 "SELinux system status is unknown.": [
  null,
  "SELinux システムステータスが不明です。"
 ],
 "Setting deviates from the configured state and will revert on the next boot.": [
  null,
  "設定が設定された状態と異なるため、次回起動時に元の状態に戻ります。"
 ],
 "Solution applied successfully": [
  null,
  "ソリューションが正常に適用されました"
 ],
 "Solution failed": [
  null,
  "ソリューションが失敗しました"
 ],
 "Solutions": [
  null,
  "ソリューション"
 ],
 "The configured state is unknown, it might change on the next boot.": [
  null,
  "設定された状態が不明です。状態は次回の起動時に変わることがあります。"
 ],
 "Unable to apply this solution automatically": [
  null,
  "このソリューションを自動的に適用できません"
 ],
 "Unable to get alert details.": [
  null,
  "アラート詳細を取得できません"
 ],
 "Unable to get alert: $0": [
  null,
  "アラートを取得できません: $0"
 ],
 "Unable to run fix: %0": [
  null,
  "修正を実行できません: %0"
 ],
 "Unable to start setroubleshootd": [
  null,
  "setroubleshootd を起動できません"
 ],
 "Waiting for details...": [
  null,
  "詳細を待機中 ..."
 ],
 "solution details": [
  null,
  "ソリューションの詳細"
 ]
}));
