(function(e, n) {
    var t, a;
    if (typeof define === "function" && define.amd) {
        define(n);
        t = true;
    }
    if (typeof cockpit === "object") {
        cockpit.locale(n);
        t = true;
    }
    function i(e, n) {
        var t, a, i, r, u = {};
        for (t in e) {
            if (t === "") continue;
            i = t.split("");
            r = e[t];
            if (i[1]) {
                a = i[0];
                t = i[1];
            } else {
                a = "$$noContext";
                t = i[0];
            }
            if (r[0] === null) r = r[1]; else r = r.slice(1);
            if (!(t in u)) u[t] = {};
            u[t][a] = r;
        }
        return angular.extend(n, u);
    }
    if (typeof angular === "object") {
        try {
            a = angular.module([ "gettext" ]);
        } catch (r) {
            console.log(r);
        }
        if (a) {
            t = true;
            a.run([ "gettextCatalog", function(e) {
                var t = n[""]["language"];
                var a = e.getCurrentLanguage() == t ? e.strings : {};
                e.setStrings(t, i(n, a));
                e.setCurrentLanguage(t);
            } ]);
        }
    }
    if (!t) e.po = n;
})(this, {
    "": {
        "plural-forms": function(e) {
            var n, t;
            n = 2;
            t = e != 1;
            return t;
        },
        language: "de"
    },
    "Delete '{{ name }}'": [ null, "'{{ name }}' löschen!!!" ]
});
