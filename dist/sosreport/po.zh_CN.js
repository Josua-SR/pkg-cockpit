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
  "language": "zh_CN",
  "x-generator": "Zanata 4.6.2"
 },
 "Cancel": [
  null,
  "取消"
 ],
 "Close": [
  null,
  "关闭"
 ],
 "Create Report": [
  null,
  "创建报表"
 ],
 "Create diagnostic report": [
  null,
  "创建诊断报告"
 ],
 "Diagnostic reports": [
  null,
  "诊断报告"
 ],
 "Done!": [
  null,
  "已完成！"
 ],
 "Download report": [
  null,
  "下载报表"
 ],
 "Generating report": [
  null,
  "正在生成报告"
 ],
 "No archive has been created.": [
  null,
  "没有档案被创建"
 ],
 "The collected information will be stored locally on the system.": [
  null,
  "搜集的信息将保存在系统本地。"
 ],
 "The generated archive contains data considered sensitive and its content should be reviewed by the originating organization before being passed to any third party.": [
  null,
  "生成的文档包含敏感数据，其内容在传递到第三方前应该由原始组织检查通过。"
 ],
 "This tool will collect system configuration and diagnostic information from this system for use with diagnosing problems with the system.": [
  null,
  "该工具会从该系统搜集系统配置和诊断信息用于诊断系统问题。"
 ]
}));
