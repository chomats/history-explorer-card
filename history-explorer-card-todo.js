
(function () {
    // TODO: start of deps/moment.min.js
    var __f = function (e, t) {
        window.HXLocal_moment = t()
    };
    __f(this, function () {
        "use strict";
        var e;

        function h() {
            return e.apply(null, arguments)
        }

        function a(e) {
            return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
        }

        function o(e) {
            return null != e && "[object Object]" === Object.prototype.toString.call(e)
        }

        function r(e) {
            return void 0 === e
        }

        function u(e) {
            return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
        }

        function s(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
        }

        function i(e, t) {
            for (var n = [], s = 0; s < e.length; ++s) n.push(t(e[s], s));
            return n
        }

        function c(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function l(e, t) {
            for (var n in t) c(t, n) && (e[n] = t[n]);
            return c(t, "toString") && (e.toString = t.toString), c(t, "valueOf") && (e.valueOf = t.valueOf), e
        }

        function d(e, t, n, s) {
            return Yt(e, t, n, s, !0).utc()
        }

        function f(e) {
            return null == e._pf && (e._pf = {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1
            }), e._pf
        }

        var m = Array.prototype.some || function (e) {
            for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++) if (s in t && e.call(this, t[s], s, t)) return !0;
            return !1
        };

        function _(e) {
            if (null == e._isValid) {
                var t = f(e), n = m.call(t.parsedDateParts, function (e) {
                        return null != e
                    }),
                    n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return n;
                e._isValid = n
            }
            return e._isValid
        }

        function y(e) {
            var t = d(NaN);
            return null != e ? l(f(t), e) : f(t).userInvalidated = !0, t
        }

        var g = h.momentProperties = [];

        function w(e, t) {
            var n, s, i;
            if (r(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), r(t._i) || (e._i = t._i), r(t._f) || (e._f = t._f), r(t._l) || (e._l = t._l), r(t._strict) || (e._strict = t._strict), r(t._tzm) || (e._tzm = t._tzm), r(t._isUTC) || (e._isUTC = t._isUTC), r(t._offset) || (e._offset = t._offset), r(t._pf) || (e._pf = f(t)), r(t._locale) || (e._locale = t._locale), 0 < g.length) for (n = 0; n < g.length; n++) r(i = t[s = g[n]]) || (e[s] = i);
            return e
        }

        var t = !1;

        function p(e) {
            w(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === t && (t = !0, h.updateOffset(this), t = !1)
        }

        function v(e) {
            return e instanceof p || null != e && null != e._isAMomentObject
        }

        function M(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
        }

        function S(e) {
            var t = +e, e = 0;
            return e = 0 != t && isFinite(t) ? M(t) : e
        }

        function k(e, t, n) {
            for (var s = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), r = 0, a = 0; a < s; a++) (n && e[a] !== t[a] || !n && S(e[a]) !== S(t[a])) && r++;
            return r + i
        }

        function D(e) {
            !1 === h.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
        }

        function n(i, r) {
            var a = !0;
            return l(function () {
                if (null != h.deprecationHandler && h.deprecationHandler(null, i), a) {
                    for (var e, t = [], n = 0; n < arguments.length; n++) {
                        if (e = "", "object" == typeof arguments[n]) {
                            for (var s in e += "\n[" + n + "] ", arguments[0]) e += s + ": " + arguments[0][s] + ", ";
                            e = e.slice(0, -2)
                        } else e = arguments[n];
                        t.push(e)
                    }
                    D(i + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + (new Error).stack), a = !1
                }
                return r.apply(this, arguments)
            }, r)
        }

        var Y = {};

        function O(e, t) {
            null != h.deprecationHandler && h.deprecationHandler(e, t), Y[e] || (D(t), Y[e] = !0)
        }

        function T(e) {
            return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
        }

        function x(e, t) {
            var n, s = l({}, e);
            for (n in t) c(t, n) && (o(e[n]) && o(t[n]) ? (s[n] = {}, l(s[n], e[n]), l(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]);
            for (n in e) c(e, n) && !c(t, n) && o(e[n]) && (s[n] = l({}, s[n]));
            return s
        }

        function b(e) {
            null != e && this.set(e)
        }

        h.suppressDeprecationWarnings = !1, h.deprecationHandler = null;
        var P = Object.keys || function (e) {
            var t, n = [];
            for (t in e) c(e, t) && n.push(t);
            return n
        };
        var W = {};

        function R(e, t) {
            var n = e.toLowerCase();
            W[n] = W[n + "s"] = W[t] = e
        }

        function C(e) {
            return "string" == typeof e ? W[e] || W[e.toLowerCase()] : void 0
        }

        function F(e) {
            var t, n, s = {};
            for (n in e) c(e, n) && (t = C(n)) && (s[t] = e[n]);
            return s
        }

        var U = {};

        function H(e, t) {
            U[e] = t
        }

        function L(t, n) {
            return function (e) {
                return null != e ? (V(this, t, e), h.updateOffset(this, n), this) : G(this, t)
            }
        }

        function G(e, t) {
            return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
        }

        function V(e, t, n) {
            e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
        }

        function N(e, t, n) {
            var s = "" + Math.abs(e);
            return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, t - s.length)).toString().substr(1) + s
        }

        var j = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            E = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, A = {}, I = {};

        function Z(e, t, n, s) {
            var i = "string" == typeof s ? function () {
                return this[s]()
            } : s;
            e && (I[e] = i), t && (I[t[0]] = function () {
                return N(i.apply(this, arguments), t[1], t[2])
            }), n && (I[n] = function () {
                return this.localeData().ordinal(i.apply(this, arguments), e)
            })
        }

        function z(e, t) {
            return e.isValid() ? (t = $(t, e.localeData()), A[t] = A[t] || function (s) {
                for (var e, i = s.match(j), t = 0, r = i.length; t < r; t++) I[i[t]] ? i[t] = I[i[t]] : i[t] = (e = i[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
                return function (e) {
                    for (var t = "", n = 0; n < r; n++) t += T(i[n]) ? i[n].call(e, s) : i[n];
                    return t
                }
            }(t), A[t](e)) : e.localeData().invalidDate()
        }

        function $(e, t) {
            var n = 5;

            function s(e) {
                return t.longDateFormat(e) || e
            }

            for (E.lastIndex = 0; 0 <= n && E.test(e);) e = e.replace(E, s), E.lastIndex = 0, --n;
            return e
        }

        var q = /\d/, J = /\d\d/, B = /\d{3}/, Q = /\d{4}/, X = /[+-]?\d{6}/, K = /\d\d?/, ee = /\d\d\d\d?/,
            te = /\d\d\d\d\d\d?/, ne = /\d{1,3}/, se = /\d{1,4}/, ie = /[+-]?\d{1,6}/, re = /\d+/, ae = /[+-]?\d+/,
            oe = /Z|[+-]\d\d:?\d\d/gi, ue = /Z|[+-]\d\d(?::?\d\d)?/gi,
            le = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            de = {};

        function he(e, n, s) {
            de[e] = T(n) ? n : function (e, t) {
                return e && s ? s : n
            }
        }

        function ce(e, t) {
            return c(de, e) ? de[e](t._strict, t._locale) : new RegExp(fe(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, s, i) {
                return t || n || s || i
            })))
        }

        function fe(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        var me = {};

        function _e(e, n) {
            var t, s = n;
            for ("string" == typeof e && (e = [e]), u(n) && (s = function (e, t) {
                t[n] = S(e)
            }), t = 0; t < e.length; t++) me[e[t]] = s
        }

        function ye(e, i) {
            _e(e, function (e, t, n, s) {
                n._w = n._w || {}, i(e, n._w, n, s)
            })
        }

        var ge = 0, we = 1, pe = 2, ve = 3, Me = 4, Se = 5, ke = 6, De = 7, Ye = 8,
            Oe = Array.prototype.indexOf || function (e) {
                for (var t = 0; t < this.length; ++t) if (this[t] === e) return t;
                return -1
            }, Te = Oe;

        function xe(e, t) {
            return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
        }

        Z("M", ["MM", 2], "Mo", function () {
            return this.month() + 1
        }), Z("MMM", 0, 0, function (e) {
            return this.localeData().monthsShort(this, e)
        }), Z("MMMM", 0, 0, function (e) {
            return this.localeData().months(this, e)
        }), R("month", "M"), H("month", 8), he("M", K), he("MM", K, J), he("MMM", function (e, t) {
            return t.monthsShortRegex(e)
        }), he("MMMM", function (e, t) {
            return t.monthsRegex(e)
        }), _e(["M", "MM"], function (e, t) {
            t[we] = S(e) - 1
        }), _e(["MMM", "MMMM"], function (e, t, n, s) {
            s = n._locale.monthsParse(e, s, n._strict);
            null != s ? t[we] = s : f(n).invalidMonth = e
        });
        var be = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            Pe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
        var We = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

        function Re(e, t) {
            var n;
            if (!e.isValid()) return e;
            if ("string" == typeof t) if (/^\d+$/.test(t)) t = S(t); else if (!u(t = e.localeData().monthsParse(t))) return e;
            return n = Math.min(e.date(), xe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
        }

        function Ce(e) {
            return null != e ? (Re(this, e), h.updateOffset(this, !0), this) : G(this, "Month")
        }

        var Fe = le;
        var Ue = le;

        function He() {
            function e(e, t) {
                return t.length - e.length
            }

            for (var t, n = [], s = [], i = [], r = 0; r < 12; r++) t = d([2e3, r]), n.push(this.monthsShort(t, "")), s.push(this.months(t, "")), i.push(this.months(t, "")), i.push(this.monthsShort(t, ""));
            for (n.sort(e), s.sort(e), i.sort(e), r = 0; r < 12; r++) n[r] = fe(n[r]), s[r] = fe(s[r]);
            for (r = 0; r < 24; r++) i[r] = fe(i[r]);
            this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
        }

        function Le(e) {
            return Ge(e) ? 366 : 365
        }

        function Ge(e) {
            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        }

        Z("Y", 0, 0, function () {
            var e = this.year();
            return e <= 9999 ? "" + e : "+" + e
        }), Z(0, ["YY", 2], 0, function () {
            return this.year() % 100
        }), Z(0, ["YYYY", 4], 0, "year"), Z(0, ["YYYYY", 5], 0, "year"), Z(0, ["YYYYYY", 6, !0], 0, "year"), R("year", "y"), H("year", 1), he("Y", ae), he("YY", K, J), he("YYYY", se, Q), he("YYYYY", ie, X), he("YYYYYY", ie, X), _e(["YYYYY", "YYYYYY"], ge), _e("YYYY", function (e, t) {
            t[ge] = 2 === e.length ? h.parseTwoDigitYear(e) : S(e)
        }), _e("YY", function (e, t) {
            t[ge] = h.parseTwoDigitYear(e)
        }), _e("Y", function (e, t) {
            t[ge] = parseInt(e, 10)
        }), h.parseTwoDigitYear = function (e) {
            return S(e) + (68 < S(e) ? 1900 : 2e3)
        };
        var Ve = L("FullYear", !0);

        function Ne(e, t, n, s, i, r, a) {
            a = new Date(e, t, n, s, i, r, a);
            return e < 100 && 0 <= e && isFinite(a.getFullYear()) && a.setFullYear(e), a
        }

        function je(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return e < 100 && 0 <= e && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
        }

        function Ee(e, t, n) {
            n = 7 + t - n;
            return n - (7 + je(e, 0, n).getUTCDay() - t) % 7 - 1
        }

        function Ae(e, t, n, s, i) {
            var r, i = 1 + 7 * (t - 1) + (7 + n - s) % 7 + Ee(e, s, i),
                i = i <= 0 ? Le(r = e - 1) + i : i > Le(e) ? (r = e + 1, i - Le(e)) : (r = e, i);
            return {year: r, dayOfYear: i}
        }

        function Ie(e, t, n) {
            var s, i, r = Ee(e.year(), t, n), r = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
            return r < 1 ? s = r + Ze(i = e.year() - 1, t, n) : r > Ze(e.year(), t, n) ? (s = r - Ze(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = r), {
                week: s,
                year: i
            }
        }

        function Ze(e, t, n) {
            var s = Ee(e, t, n), n = Ee(e + 1, t, n);
            return (Le(e) - s + n) / 7
        }

        Z("w", ["ww", 2], "wo", "week"), Z("W", ["WW", 2], "Wo", "isoWeek"), R("week", "w"), R("isoWeek", "W"), H("week", 5), H("isoWeek", 5), he("w", K), he("ww", K, J), he("W", K), he("WW", K, J), ye(["w", "ww", "W", "WW"], function (e, t, n, s) {
            t[s.substr(0, 1)] = S(e)
        });
        Z("d", 0, "do", "day"), Z("dd", 0, 0, function (e) {
            return this.localeData().weekdaysMin(this, e)
        }), Z("ddd", 0, 0, function (e) {
            return this.localeData().weekdaysShort(this, e)
        }), Z("dddd", 0, 0, function (e) {
            return this.localeData().weekdays(this, e)
        }), Z("e", 0, 0, "weekday"), Z("E", 0, 0, "isoWeekday"), R("day", "d"), R("weekday", "e"), R("isoWeekday", "E"), H("day", 11), H("weekday", 11), H("isoWeekday", 11), he("d", K), he("e", K), he("E", K), he("dd", function (e, t) {
            return t.weekdaysMinRegex(e)
        }), he("ddd", function (e, t) {
            return t.weekdaysShortRegex(e)
        }), he("dddd", function (e, t) {
            return t.weekdaysRegex(e)
        }), ye(["dd", "ddd", "dddd"], function (e, t, n, s) {
            s = n._locale.weekdaysParse(e, s, n._strict);
            null != s ? t.d = s : f(n).invalidWeekday = e
        }), ye(["d", "e", "E"], function (e, t, n, s) {
            t[s] = S(e)
        });
        var ze = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
        var $e = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
        var qe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
        var Je = le;
        var Be = le;
        var Qe = le;

        function Xe() {
            function e(e, t) {
                return t.length - e.length
            }

            for (var t, n, s, i = [], r = [], a = [], o = [], u = 0; u < 7; u++) s = d([2e3, 1]).day(u), t = this.weekdaysMin(s, ""), n = this.weekdaysShort(s, ""), s = this.weekdays(s, ""), i.push(t), r.push(n), a.push(s), o.push(t), o.push(n), o.push(s);
            for (i.sort(e), r.sort(e), a.sort(e), o.sort(e), u = 0; u < 7; u++) r[u] = fe(r[u]), a[u] = fe(a[u]), o[u] = fe(o[u]);
            this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
        }

        function Ke() {
            return this.hours() % 12 || 12
        }

        function et(e, t) {
            Z(e, 0, 0, function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), t)
            })
        }

        function tt(e, t) {
            return t._meridiemParse
        }

        Z("H", ["HH", 2], 0, "hour"), Z("h", ["hh", 2], 0, Ke), Z("k", ["kk", 2], 0, function () {
            return this.hours() || 24
        }), Z("hmm", 0, 0, function () {
            return "" + Ke.apply(this) + N(this.minutes(), 2)
        }), Z("hmmss", 0, 0, function () {
            return "" + Ke.apply(this) + N(this.minutes(), 2) + N(this.seconds(), 2)
        }), Z("Hmm", 0, 0, function () {
            return "" + this.hours() + N(this.minutes(), 2)
        }), Z("Hmmss", 0, 0, function () {
            return "" + this.hours() + N(this.minutes(), 2) + N(this.seconds(), 2)
        }), et("a", !0), et("A", !1), R("hour", "h"), H("hour", 13), he("a", tt), he("A", tt), he("H", K), he("h", K), he("k", K), he("HH", K, J), he("hh", K, J), he("kk", K, J), he("hmm", ee), he("hmmss", te), he("Hmm", ee), he("Hmmss", te), _e(["H", "HH"], ve), _e(["k", "kk"], function (e, t, n) {
            e = S(e);
            t[ve] = 24 === e ? 0 : e
        }), _e(["a", "A"], function (e, t, n) {
            n._isPm = n._locale.isPM(e), n._meridiem = e
        }), _e(["h", "hh"], function (e, t, n) {
            t[ve] = S(e), f(n).bigHour = !0
        }), _e("hmm", function (e, t, n) {
            var s = e.length - 2;
            t[ve] = S(e.substr(0, s)), t[Me] = S(e.substr(s)), f(n).bigHour = !0
        }), _e("hmmss", function (e, t, n) {
            var s = e.length - 4, i = e.length - 2;
            t[ve] = S(e.substr(0, s)), t[Me] = S(e.substr(s, 2)), t[Se] = S(e.substr(i)), f(n).bigHour = !0
        }), _e("Hmm", function (e, t, n) {
            var s = e.length - 2;
            t[ve] = S(e.substr(0, s)), t[Me] = S(e.substr(s))
        }), _e("Hmmss", function (e, t, n) {
            var s = e.length - 4, i = e.length - 2;
            t[ve] = S(e.substr(0, s)), t[Me] = S(e.substr(s, 2)), t[Se] = S(e.substr(i))
        });
        var nt, Oe = L("Hours", !0), st = {
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            months: Pe,
            monthsShort: We,
            week: {dow: 0, doy: 6},
            weekdays: ze,
            weekdaysMin: qe,
            weekdaysShort: $e,
            meridiemParse: /[ap]\.?m?\.?/i
        }, it = {}, rt = {};

        function at(e) {
            return e && e.toLowerCase().replace("_", "-")
        }

        function ot(e) {
            var t;
            if (!it[e] && "undefined" != typeof module && module && module.exports) try {
                t = nt._abbr, require("./locale/" + e), ut(t)
            } catch (e) {
            }
            return it[e]
        }

        function ut(e, t) {
            var n;
            return (nt = e && (n = r(t) ? dt(e) : lt(e, t)) ? n : nt)._abbr
        }

        function lt(e, t) {
            if (null === t) return delete it[e], null;
            var n = st;
            if (t.abbr = e, null != it[e]) O("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = it[e]._config; else if (null != t.parentLocale) {
                if (null == it[t.parentLocale]) return rt[t.parentLocale] || (rt[t.parentLocale] = []), rt[t.parentLocale].push({
                    name: e,
                    config: t
                }), null;
                n = it[t.parentLocale]._config
            }
            return it[e] = new b(x(n, t)), rt[e] && rt[e].forEach(function (e) {
                lt(e.name, e.config)
            }), ut(e), it[e]
        }

        function dt(e) {
            var t;
            if (!(e = e && e._locale && e._locale._abbr ? e._locale._abbr : e)) return nt;
            if (!a(e)) {
                if (t = ot(e)) return t;
                e = [e]
            }
            return function (e) {
                for (var t, n, s, i, r = 0; r < e.length;) {
                    for (t = (i = at(e[r]).split("-")).length, n = (n = at(e[r + 1])) ? n.split("-") : null; 0 < t;) {
                        if (s = ot(i.slice(0, t).join("-"))) return s;
                        if (n && n.length >= t && k(i, n, !0) >= t - 1) break;
                        t--
                    }
                    r++
                }
                return null
            }(e)
        }

        function ht(e) {
            var t = e._a;
            return t && -2 === f(e).overflow && (t = t[we] < 0 || 11 < t[we] ? we : t[pe] < 1 || t[pe] > xe(t[ge], t[we]) ? pe : t[ve] < 0 || 24 < t[ve] || 24 === t[ve] && (0 !== t[Me] || 0 !== t[Se] || 0 !== t[ke]) ? ve : t[Me] < 0 || 59 < t[Me] ? Me : t[Se] < 0 || 59 < t[Se] ? Se : t[ke] < 0 || 999 < t[ke] ? ke : -1, f(e)._overflowDayOfYear && (t < ge || pe < t) && (t = pe), f(e)._overflowWeeks && -1 === t && (t = De), f(e)._overflowWeekday && -1 === t && (t = Ye), f(e).overflow = t), e
        }

        var ct = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            ft = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            mt = /Z|[+-]\d\d(?::?\d\d)?/,
            _t = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
            yt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
            gt = /^\/?Date\((\-?\d+)/i;

        function wt(e) {
            var t, n, s, i, r, a, o = e._i, u = ct.exec(o) || ft.exec(o);
            if (u) {
                for (f(e).iso = !0, t = 0, n = _t.length; t < n; t++) if (_t[t][1].exec(u[1])) {
                    i = _t[t][0], s = !1 !== _t[t][2];
                    break
                }
                if (null != i) {
                    if (u[3]) {
                        for (t = 0, n = yt.length; t < n; t++) if (yt[t][1].exec(u[3])) {
                            r = (u[2] || " ") + yt[t][0];
                            break
                        }
                        if (null == r) return void (e._isValid = !1)
                    }
                    if (s || null == r) {
                        if (u[4]) {
                            if (!mt.exec(u[4])) return void (e._isValid = !1);
                            a = "Z"
                        }
                        e._f = i + (r || "") + (a || ""), kt(e)
                    } else e._isValid = !1
                } else e._isValid = !1
            } else e._isValid = !1
        }

        var pt = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

        function vt(e) {
            var t, n, s, i, r, a = {
                    " GMT": " +0000",
                    " EDT": " -0400",
                    " EST": " -0500",
                    " CDT": " -0500",
                    " CST": " -0600",
                    " MDT": " -0600",
                    " MST": " -0700",
                    " PDT": " -0700",
                    " PST": " -0800"
                }, o = e._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""),
                u = pt.exec(o);
            if (u) {
                if (t = u[1] ? "ddd" + (5 === u[1].length ? ", " : " ") : "", n = "D MMM " + (10 < u[2].length ? "YYYY " : "YY "), s = "HH:mm" + (u[4] ? ":ss" : ""), u[1]) {
                    o = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date(u[2]).getDay()];
                    if (u[1].substr(0, 3) !== o) return f(e).weekdayMismatch = !0, void (e._isValid = !1)
                }
                switch (u[5].length) {
                    case 2:
                        i = 0 === r ? " +0000" : ((r = "YXWVUTSRQPONZABCDEFGHIKLM".indexOf(u[5][1].toUpperCase()) - 12) < 0 ? " -" : " +") + ("" + r).replace(/^-?/, "0").match(/..$/)[0] + "00";
                        break;
                    case 4:
                        i = a[u[5]];
                        break;
                    default:
                        i = a[" GMT"]
                }
                u[5] = i, e._i = u.splice(1).join(""), e._f = t + n + s + " ZZ", kt(e), f(e).rfc2822 = !0
            } else e._isValid = !1
        }

        function Mt(e, t, n) {
            return null != e ? e : null != t ? t : n
        }

        function St(e) {
            var t, n, s, i, r = [];
            if (!e._d) {
                for (s = e, i = new Date(h.now()), n = s._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()], e._w && null == e._a[pe] && null == e._a[we] && function (e) {
                    var t, n, s, i, r, a, o;
                    {
                        var u;
                        null != (t = e._w).GG || null != t.W || null != t.E ? (r = 1, a = 4, n = Mt(t.GG, e._a[ge], Ie(Ot(), 1, 4).year), s = Mt(t.W, 1), ((i = Mt(t.E, 1)) < 1 || 7 < i) && (o = !0)) : (r = e._locale._week.dow, a = e._locale._week.doy, u = Ie(Ot(), r, a), n = Mt(t.gg, e._a[ge], u.year), s = Mt(t.w, u.week), null != t.d ? ((i = t.d) < 0 || 6 < i) && (o = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || 6 < t.e) && (o = !0)) : i = r)
                    }
                    s < 1 || s > Ze(n, r, a) ? f(e)._overflowWeeks = !0 : null != o ? f(e)._overflowWeekday = !0 : (a = Ae(n, s, i, r, a), e._a[ge] = a.year, e._dayOfYear = a.dayOfYear)
                }(e), null != e._dayOfYear && (i = Mt(e._a[ge], n[ge]), (e._dayOfYear > Le(i) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), i = je(i, 0, e._dayOfYear), e._a[we] = i.getUTCMonth(), e._a[pe] = i.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = r[t] = n[t];
                for (; t < 7; t++) e._a[t] = r[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                24 === e._a[ve] && 0 === e._a[Me] && 0 === e._a[Se] && 0 === e._a[ke] && (e._nextDay = !0, e._a[ve] = 0), e._d = (e._useUTC ? je : Ne).apply(null, r), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ve] = 24)
            }
        }

        function kt(e) {
            if (e._f !== h.ISO_8601) if (e._f !== h.RFC_2822) {
                e._a = [], f(e).empty = !0;
                for (var t, n, s, i, r, a = "" + e._i, o = a.length, u = 0, l = $(e._f, e._locale).match(j) || [], d = 0; d < l.length; d++) n = l[d], (t = (a.match(ce(n, e)) || [])[0]) && (0 < (i = a.substr(0, a.indexOf(t))).length && f(e).unusedInput.push(i), a = a.slice(a.indexOf(t) + t.length), u += t.length), I[n] ? (t ? f(e).empty = !1 : f(e).unusedTokens.push(n), s = n, r = e, null != (i = t) && c(me, s) && me[s](i, r._a, r, s)) : e._strict && !t && f(e).unusedTokens.push(n);
                f(e).charsLeftOver = o - u, 0 < a.length && f(e).unusedInput.push(a), e._a[ve] <= 12 && !0 === f(e).bigHour && 0 < e._a[ve] && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[ve] = function (e, t, n) {
                    if (null == n) return t;
                    return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((n = e.isPM(n)) && t < 12 && (t += 12), t = n || 12 !== t ? t : 0) : t
                }(e._locale, e._a[ve], e._meridiem), St(e), ht(e)
            } else vt(e); else wt(e)
        }

        function Dt(e) {
            var t = e._i, n = e._f;
            return e._locale = e._locale || dt(e._l), null === t || void 0 === n && "" === t ? y({nullInput: !0}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), v(t) ? new p(ht(t)) : (s(t) ? e._d = t : a(n) ? function (e) {
                var t, n, s, i, r;
                if (0 === e._f.length) return f(e).invalidFormat = !0, e._d = new Date(NaN);
                for (i = 0; i < e._f.length; i++) r = 0, t = w({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], kt(t), _(t) && (r += f(t).charsLeftOver, r += 10 * f(t).unusedTokens.length, f(t).score = r, (null == s || r < s) && (s = r, n = t));
                l(e, n || t)
            }(e) : n ? kt(e) : r(n = (t = e)._i) ? t._d = new Date(h.now()) : s(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? function (e) {
                var t = gt.exec(e._i);
                null === t ? (wt(e), !1 === e._isValid && (delete e._isValid, vt(e), !1 === e._isValid && (delete e._isValid, h.createFromInputFallback(e)))) : e._d = new Date(+t[1])
            }(t) : a(n) ? (t._a = i(n.slice(0), function (e) {
                return parseInt(e, 10)
            }), St(t)) : o(n) ? function (e) {
                var t;
                e._d || (t = F(e._i), e._a = i([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
                    return e && parseInt(e, 10)
                }), St(e))
            }(t) : u(n) ? t._d = new Date(n) : h.createFromInputFallback(t), _(e) || (e._d = null), e))
        }

        function Yt(e, t, n, s, i) {
            var r = {};
            return !0 !== n && !1 !== n || (s = n, n = void 0), (o(e) && function (e) {
                for (var t in e) return;
                return 1
            }(e) || a(e) && 0 === e.length) && (e = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = i, r._l = n, r._i = e, r._f = t, r._strict = s, (r = new p(ht(Dt(r = r))))._nextDay && (r.add(1, "d"), r._nextDay = void 0), r
        }

        function Ot(e, t, n, s) {
            return Yt(e, t, n, s, !1)
        }

        h.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
        }), h.ISO_8601 = function () {
        }, h.RFC_2822 = function () {
        };
        le = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var e = Ot.apply(null, arguments);
            return this.isValid() && e.isValid() ? e < this ? this : e : y()
        }), ee = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var e = Ot.apply(null, arguments);
            return this.isValid() && e.isValid() ? this < e ? this : e : y()
        });

        function Tt(e, t) {
            var n, s;
            if (!(t = 1 === t.length && a(t[0]) ? t[0] : t).length) return Ot();
            for (n = t[0], s = 1; s < t.length; ++s) t[s].isValid() && !t[s][e](n) || (n = t[s]);
            return n
        }

        var xt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

        function bt(e) {
            var t = F(e), n = t.year || 0, s = t.quarter || 0, i = t.month || 0, r = t.week || 0, a = t.day || 0,
                o = t.hour || 0, u = t.minute || 0, l = t.second || 0, e = t.millisecond || 0;
            this._isValid = function (e) {
                for (var t in e) if (-1 === xt.indexOf(t) || null != e[t] && isNaN(e[t])) return !1;
                for (var n = !1, s = 0; s < xt.length; ++s) if (e[xt[s]]) {
                    if (n) return !1;
                    parseFloat(e[xt[s]]) !== S(e[xt[s]]) && (n = !0)
                }
                return !0
            }(t), this._milliseconds = +e + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60, this._days = +a + 7 * r, this._months = +i + 3 * s + 12 * n, this._data = {}, this._locale = dt(), this._bubble()
        }

        function Pt(e) {
            return e instanceof bt
        }

        function Wt(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
        }

        function Rt(e, n) {
            Z(e, 0, 0, function () {
                var e = this.utcOffset(), t = "+";
                return e < 0 && (e = -e, t = "-"), t + N(~~(e / 60), 2) + n + N(~~e % 60, 2)
            })
        }

        Rt("Z", ":"), Rt("ZZ", ""), he("Z", ue), he("ZZ", ue), _e(["Z", "ZZ"], function (e, t, n) {
            n._useUTC = !0, n._tzm = Ft(ue, e)
        });
        var Ct = /([\+\-]|\d\d)/gi;

        function Ft(e, t) {
            t = (t || "").match(e);
            if (null === t) return null;
            e = ((t[t.length - 1] || []) + "").match(Ct) || ["-", 0, 0], t = 60 * e[1] + S(e[2]);
            return 0 === t ? 0 : "+" === e[0] ? t : -t
        }

        function Ut(e, t) {
            var n;
            return t._isUTC ? (n = t.clone(), t = (v(e) || s(e) ? e : Ot(e)).valueOf() - n.valueOf(), n._d.setTime(n._d.valueOf() + t), h.updateOffset(n, !1), n) : Ot(e).local()
        }

        function Ht(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
        }

        function Lt() {
            return !!this.isValid() && (this._isUTC && 0 === this._offset)
        }

        h.updateOffset = function () {
        };
        var Gt = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            Vt = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

        function Nt(e, t) {
            var n, s = e, i = null;
            return Pt(e) ? s = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            } : u(e) ? (s = {}, t ? s[t] = e : s.milliseconds = e) : (i = Gt.exec(e)) ? (n = "-" === i[1] ? -1 : 1, s = {
                y: 0,
                d: S(i[pe]) * n,
                h: S(i[ve]) * n,
                m: S(i[Me]) * n,
                s: S(i[Se]) * n,
                ms: S(Wt(1e3 * i[ke])) * n
            }) : (i = Vt.exec(e)) ? (n = "-" === i[1] ? -1 : 1, s = {
                y: jt(i[2], n),
                M: jt(i[3], n),
                w: jt(i[4], n),
                d: jt(i[5], n),
                h: jt(i[6], n),
                m: jt(i[7], n),
                s: jt(i[8], n)
            }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (n = function (e, t) {
                var n;
                if (!e.isValid() || !t.isValid()) return {milliseconds: 0, months: 0};
                t = Ut(t, e), e.isBefore(t) ? n = Et(e, t) : ((n = Et(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
                return n
            }(Ot(s.from), Ot(s.to)), (s = {}).ms = n.milliseconds, s.M = n.months), s = new bt(s), Pt(e) && c(e, "_locale") && (s._locale = e._locale), s
        }

        function jt(e, t) {
            e = e && parseFloat(e.replace(",", "."));
            return (isNaN(e) ? 0 : e) * t
        }

        function Et(e, t) {
            var n = {milliseconds: 0, months: 0};
            return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
        }

        function At(s, i) {
            return function (e, t) {
                var n;
                return null === t || isNaN(+t) || (O(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = e, e = t, t = n), It(this, Nt(e = "string" == typeof e ? +e : e, t), s), this
            }
        }

        function It(e, t, n, s) {
            var i = t._milliseconds, r = Wt(t._days), t = Wt(t._months);
            e.isValid() && (s = null == s || s, i && e._d.setTime(e._d.valueOf() + i * n), r && V(e, "Date", G(e, "Date") + r * n), t && Re(e, G(e, "Month") + t * n), s && h.updateOffset(e, r || t))
        }

        Nt.fn = bt.prototype, Nt.invalid = function () {
            return Nt(NaN)
        };
        te = At(1, "add"), Pe = At(-1, "subtract");

        function Zt(e) {
            return void 0 === e ? this._locale._abbr : (null != (e = dt(e)) && (this._locale = e), this)
        }

        h.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", h.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        We = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
            return void 0 === e ? this.localeData() : this.locale(e)
        });

        function zt() {
            return this._locale
        }

        function $t(e, t) {
            Z(0, [e, e.length], 0, t)
        }

        function qt(e, t, n, s, i) {
            var r;
            return null == e ? Ie(this, s, i).year : (r = Ze(e, s, i), function (e, t, n, s, i) {
                i = Ae(e, t, n, s, i), i = je(i.year, 0, i.dayOfYear);
                return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this
            }.call(this, e, t = r < t ? r : t, n, s, i))
        }

        Z(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100
        }), Z(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100
        }), $t("gggg", "weekYear"), $t("ggggg", "weekYear"), $t("GGGG", "isoWeekYear"), $t("GGGGG", "isoWeekYear"), R("weekYear", "gg"), R("isoWeekYear", "GG"), H("weekYear", 1), H("isoWeekYear", 1), he("G", ae), he("g", ae), he("GG", K, J), he("gg", K, J), he("GGGG", se, Q), he("gggg", se, Q), he("GGGGG", ie, X), he("ggggg", ie, X), ye(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, s) {
            t[s.substr(0, 2)] = S(e)
        }), ye(["gg", "GG"], function (e, t, n, s) {
            t[s] = h.parseTwoDigitYear(e)
        }), Z("Q", 0, "Qo", "quarter"), R("quarter", "Q"), H("quarter", 7), he("Q", q), _e("Q", function (e, t) {
            t[we] = 3 * (S(e) - 1)
        }), Z("D", ["DD", 2], "Do", "date"), R("date", "D"), H("date", 9), he("D", K), he("DD", K, J), he("Do", function (e, t) {
            return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
        }), _e(["D", "DD"], pe), _e("Do", function (e, t) {
            t[pe] = S(e.match(K)[0])
        });
        ze = L("Date", !0);
        Z("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), R("dayOfYear", "DDD"), H("dayOfYear", 4), he("DDD", ne), he("DDDD", B), _e(["DDD", "DDDD"], function (e, t, n) {
            n._dayOfYear = S(e)
        }), Z("m", ["mm", 2], 0, "minute"), R("minute", "m"), H("minute", 14), he("m", K), he("mm", K, J), _e(["m", "mm"], Me);
        qe = L("Minutes", !1);
        Z("s", ["ss", 2], 0, "second"), R("second", "s"), H("second", 15), he("s", K), he("ss", K, J), _e(["s", "ss"], Se);
        var Jt, $e = L("Seconds", !1);
        for (Z("S", 0, 0, function () {
            return ~~(this.millisecond() / 100)
        }), Z(0, ["SS", 2], 0, function () {
            return ~~(this.millisecond() / 10)
        }), Z(0, ["SSS", 3], 0, "millisecond"), Z(0, ["SSSS", 4], 0, function () {
            return 10 * this.millisecond()
        }), Z(0, ["SSSSS", 5], 0, function () {
            return 100 * this.millisecond()
        }), Z(0, ["SSSSSS", 6], 0, function () {
            return 1e3 * this.millisecond()
        }), Z(0, ["SSSSSSS", 7], 0, function () {
            return 1e4 * this.millisecond()
        }), Z(0, ["SSSSSSSS", 8], 0, function () {
            return 1e5 * this.millisecond()
        }), Z(0, ["SSSSSSSSS", 9], 0, function () {
            return 1e6 * this.millisecond()
        }), R("millisecond", "ms"), H("millisecond", 16), he("S", ne, q), he("SS", ne, J), he("SSS", ne, B), Jt = "SSSS"; Jt.length <= 9; Jt += "S") he(Jt, re);

        function Bt(e, t) {
            t[ke] = S(1e3 * ("0." + e))
        }

        for (Jt = "S"; Jt.length <= 9; Jt += "S") _e(Jt, Bt);
        se = L("Milliseconds", !1);
        Z("z", 0, 0, "zoneAbbr"), Z("zz", 0, 0, "zoneName");
        Q = p.prototype;

        function Qt(e) {
            return e
        }

        Q.add = te, Q.calendar = function (e, t) {
            var n = e || Ot(), e = Ut(n, this).startOf("day"), e = h.calendarFormat(this, e) || "sameElse",
                t = t && (T(t[e]) ? t[e].call(this, n) : t[e]);
            return this.format(t || this.localeData().calendar(e, this, Ot(n)))
        }, Q.clone = function () {
            return new p(this)
        }, Q.diff = function (e, t, n) {
            var s, i;
            return this.isValid() && (s = Ut(e, this)).isValid() ? (e = 6e4 * (s.utcOffset() - this.utcOffset()), "year" === (t = C(t)) || "month" === t || "quarter" === t ? (i = function (e, t) {
                var n, s = 12 * (t.year() - e.year()) + (t.month() - e.month()), i = e.clone().add(s, "months");
                i = t - i < 0 ? (n = e.clone().add(s - 1, "months"), (t - i) / (i - n)) : (n = e.clone().add(1 + s, "months"), (t - i) / (n - i));
                return -(s + i) || 0
            }(this, s), "quarter" === t ? i /= 3 : "year" === t && (i /= 12)) : (s = this - s, i = "second" === t ? s / 1e3 : "minute" === t ? s / 6e4 : "hour" === t ? s / 36e5 : "day" === t ? (s - e) / 864e5 : "week" === t ? (s - e) / 6048e5 : s), n ? i : M(i)) : NaN
        }, Q.endOf = function (e) {
            return void 0 === (e = C(e)) || "millisecond" === e ? this : this.startOf(e = "date" === e ? "day" : e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
        }, Q.format = function (e) {
            return e = e || (this.isUtc() ? h.defaultFormatUtc : h.defaultFormat), e = z(this, e), this.localeData().postformat(e)
        }, Q.from = function (e, t) {
            return this.isValid() && (v(e) && e.isValid() || Ot(e).isValid()) ? Nt({
                to: this,
                from: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }, Q.fromNow = function (e) {
            return this.from(Ot(), e)
        }, Q.to = function (e, t) {
            return this.isValid() && (v(e) && e.isValid() || Ot(e).isValid()) ? Nt({
                from: this,
                to: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }, Q.toNow = function (e) {
            return this.to(Ot(), e)
        }, Q.get = function (e) {
            return T(this[e = C(e)]) ? this[e]() : this
        }, Q.invalidAt = function () {
            return f(this).overflow
        }, Q.isAfter = function (e, t) {
            return e = v(e) ? e : Ot(e), !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = C(r(t) ? "millisecond" : t)) ? this.valueOf() > e.valueOf() : e.valueOf() < this.clone().startOf(t).valueOf())
        }, Q.isBefore = function (e, t) {
            return e = v(e) ? e : Ot(e), !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = C(r(t) ? "millisecond" : t)) ? this.valueOf() < e.valueOf() : this.clone().endOf(t).valueOf() < e.valueOf())
        }, Q.isBetween = function (e, t, n, s) {
            return ("(" === (s = s || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
        }, Q.isSame = function (e, t) {
            var e = v(e) ? e : Ot(e);
            return !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = C(t || "millisecond")) ? this.valueOf() === e.valueOf() : (e = e.valueOf(), this.clone().startOf(t).valueOf() <= e && e <= this.clone().endOf(t).valueOf()))
        }, Q.isSameOrAfter = function (e, t) {
            return this.isSame(e, t) || this.isAfter(e, t)
        }, Q.isSameOrBefore = function (e, t) {
            return this.isSame(e, t) || this.isBefore(e, t)
        }, Q.isValid = function () {
            return _(this)
        }, Q.lang = We, Q.locale = Zt, Q.localeData = zt, Q.max = ee, Q.min = le, Q.parsingFlags = function () {
            return l({}, f(this))
        }, Q.set = function (e, t) {
            if ("object" == typeof e) for (var n = function (e) {
                var t, n = [];
                for (t in e) n.push({unit: t, priority: U[t]});
                return n.sort(function (e, t) {
                    return e.priority - t.priority
                }), n
            }(e = F(e)), s = 0; s < n.length; s++) this[n[s].unit](e[n[s].unit]); else if (T(this[e = C(e)])) return this[e](t);
            return this
        }, Q.startOf = function (e) {
            switch (e = C(e)) {
                case"year":
                    this.month(0);
                case"quarter":
                case"month":
                    this.date(1);
                case"week":
                case"isoWeek":
                case"day":
                case"date":
                    this.hours(0);
                case"hour":
                    this.minutes(0);
                case"minute":
                    this.seconds(0);
                case"second":
                    this.milliseconds(0)
            }
            return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
        }, Q.subtract = Pe, Q.toArray = function () {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
        }, Q.toObject = function () {
            var e = this;
            return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds()
            }
        }, Q.toDate = function () {
            return new Date(this.valueOf())
        }, Q.toISOString = function () {
            if (!this.isValid()) return null;
            var e = this.clone().utc();
            return e.year() < 0 || 9999 < e.year() ? z(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : T(Date.prototype.toISOString) ? this.toDate().toISOString() : z(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }, Q.inspect = function () {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var e = "moment", t = "";
            this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
            var n = "[" + e + '("]', e = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
            return this.format(n + e + "-MM-DD[T]HH:mm:ss.SSS" + (t + '[")]'))
        }, Q.toJSON = function () {
            return this.isValid() ? this.toISOString() : null
        }, Q.toString = function () {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }, Q.unix = function () {
            return Math.floor(this.valueOf() / 1e3)
        }, Q.valueOf = function () {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
        }, Q.creationData = function () {
            return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
        }, Q.year = Ve, Q.isLeapYear = function () {
            return Ge(this.year())
        }, Q.weekYear = function (e) {
            return qt.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }, Q.isoWeekYear = function (e) {
            return qt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
        }, Q.quarter = Q.quarters = function (e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        }, Q.month = Ce, Q.daysInMonth = function () {
            return xe(this.year(), this.month())
        }, Q.week = Q.weeks = function (e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d")
        }, Q.isoWeek = Q.isoWeeks = function (e) {
            var t = Ie(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d")
        }, Q.weeksInYear = function () {
            var e = this.localeData()._week;
            return Ze(this.year(), e.dow, e.doy)
        }, Q.isoWeeksInYear = function () {
            return Ze(this.year(), 1, 4)
        }, Q.date = ze, Q.day = Q.days = function (e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t, n, s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - s, "d")) : s
        }, Q.weekday = function (e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d")
        }, Q.isoWeekday = function (e) {
            if (!this.isValid()) return null != e ? this : NaN;
            if (null == e) return this.day() || 7;
            var t = (t = e, e = this.localeData(), "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t);
            return this.day(this.day() % 7 ? t : t - 7)
        }, Q.dayOfYear = function (e) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d")
        }, Q.hour = Q.hours = Oe, Q.minute = Q.minutes = qe, Q.second = Q.seconds = $e, Q.millisecond = Q.milliseconds = se, Q.utcOffset = function (e, t, n) {
            var s, i = this._offset || 0;
            if (!this.isValid()) return null != e ? this : NaN;
            if (null == e) return this._isUTC ? i : Ht(this);
            if ("string" == typeof e) {
                if (null === (e = Ft(ue, e))) return this
            } else Math.abs(e) < 16 && !n && (e *= 60);
            return !this._isUTC && t && (s = Ht(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), i !== e && (!t || this._changeInProgress ? It(this, Nt(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, h.updateOffset(this, !0), this._changeInProgress = null)), this
        }, Q.utc = function (e) {
            return this.utcOffset(0, e)
        }, Q.local = function (e) {
            return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ht(this), "m")), this
        }, Q.parseZone = function () {
            var e;
            return null != this._tzm ? this.utcOffset(this._tzm, !1, !0) : "string" == typeof this._i && (null != (e = Ft(oe, this._i)) ? this.utcOffset(e) : this.utcOffset(0, !0)), this
        }, Q.hasAlignedHourOffset = function (e) {
            return !!this.isValid() && (e = e ? Ot(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
        }, Q.isDST = function () {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }, Q.isLocal = function () {
            return !!this.isValid() && !this._isUTC
        }, Q.isUtcOffset = function () {
            return !!this.isValid() && this._isUTC
        }, Q.isUtc = Lt, Q.isUTC = Lt, Q.zoneAbbr = function () {
            return this._isUTC ? "UTC" : ""
        }, Q.zoneName = function () {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }, Q.dates = n("dates accessor is deprecated. Use date instead.", ze), Q.months = n("months accessor is deprecated. Use month instead", Ce), Q.years = n("years accessor is deprecated. Use year instead", Ve), Q.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
            return null != e ? (this.utcOffset(e = "string" != typeof e ? -e : e, t), this) : -this.utcOffset()
        }), Q.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
            if (!r(this._isDSTShifted)) return this._isDSTShifted;
            var e, t = {};
            return w(t, this), (t = Dt(t))._a ? (e = (t._isUTC ? d : Ot)(t._a), this._isDSTShifted = this.isValid() && 0 < k(t._a, e.toArray())) : this._isDSTShifted = !1, this._isDSTShifted
        });
        ie = b.prototype;

        function Xt(e, t, n, s) {
            var i = dt(), t = d().set(s, t);
            return i[n](t, e)
        }

        function Kt(e, t, n) {
            if (u(e) && (t = e, e = void 0), e = e || "", null != t) return Xt(e, t, n, "month");
            for (var s = [], i = 0; i < 12; i++) s[i] = Xt(e, i, n, "month");
            return s
        }

        function en(e, t, n, s) {
            t = ("boolean" == typeof e ? u(t) && (n = t, t = void 0) : (t = e, e = !1, u(n = t) && (n = t, t = void 0)), t || "");
            var i = dt(), r = e ? i._week.dow : 0;
            if (null != n) return Xt(t, (n + r) % 7, s, "day");
            for (var a = [], o = 0; o < 7; o++) a[o] = Xt(t, (o + r) % 7, s, "day");
            return a
        }

        ie.calendar = function (e, t, n) {
            return T(e = this._calendar[e] || this._calendar.sameElse) ? e.call(t, n) : e
        }, ie.longDateFormat = function (e) {
            var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
            return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
                return e.slice(1)
            }), this._longDateFormat[e])
        }, ie.invalidDate = function () {
            return this._invalidDate
        }, ie.ordinal = function (e) {
            return this._ordinal.replace("%d", e)
        }, ie.preparse = Qt, ie.postformat = Qt, ie.relativeTime = function (e, t, n, s) {
            var i = this._relativeTime[n];
            return T(i) ? i(e, t, n, s) : i.replace(/%d/i, e)
        }, ie.pastFuture = function (e, t) {
            return T(e = this._relativeTime[0 < e ? "future" : "past"]) ? e(t) : e.replace(/%s/i, t)
        }, ie.set = function (e) {
            var t, n;
            for (n in e) T(t = e[n]) ? this[n] = t : this["_" + n] = t;
            this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }, ie.months = function (e, t) {
            return e ? (a(this._months) ? this._months : this._months[(this._months.isFormat || be).test(t) ? "format" : "standalone"])[e.month()] : a(this._months) ? this._months : this._months.standalone
        }, ie.monthsShort = function (e, t) {
            return e ? (a(this._monthsShort) ? this._monthsShort : this._monthsShort[be.test(t) ? "format" : "standalone"])[e.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }, ie.monthsParse = function (e, t, n) {
            var s, i;
            if (this._monthsParseExact) return function (e, t, n) {
                var s, i, r, e = e.toLocaleLowerCase();
                if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) r = d([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
                return n ? "MMM" === t ? -1 !== (i = Te.call(this._shortMonthsParse, e)) ? i : null : -1 !== (i = Te.call(this._longMonthsParse, e)) ? i : null : "MMM" === t ? -1 !== (i = Te.call(this._shortMonthsParse, e)) || -1 !== (i = Te.call(this._longMonthsParse, e)) ? i : null : -1 !== (i = Te.call(this._longMonthsParse, e)) || -1 !== (i = Te.call(this._shortMonthsParse, e)) ? i : null
            }.call(this, e, t, n);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
                if (i = d([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (i = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s;
                if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
                if (!n && this._monthsParse[s].test(e)) return s
            }
        }, ie.monthsRegex = function (e) {
            return this._monthsParseExact ? (c(this, "_monthsRegex") || He.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = Ue), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
        }, ie.monthsShortRegex = function (e) {
            return this._monthsParseExact ? (c(this, "_monthsRegex") || He.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Fe), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }, ie.week = function (e) {
            return Ie(e, this._week.dow, this._week.doy).week
        }, ie.firstDayOfYear = function () {
            return this._week.doy
        }, ie.firstDayOfWeek = function () {
            return this._week.dow
        }, ie.weekdays = function (e, t) {
            return e ? (a(this._weekdays) ? this._weekdays : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"])[e.day()] : a(this._weekdays) ? this._weekdays : this._weekdays.standalone
        }, ie.weekdaysMin = function (e) {
            return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
        }, ie.weekdaysShort = function (e) {
            return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
        }, ie.weekdaysParse = function (e, t, n) {
            var s, i;
            if (this._weekdaysParseExact) return function (e, t, n) {
                var s, i, r, e = e.toLocaleLowerCase();
                if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) r = d([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
                return n ? "dddd" === t ? -1 !== (i = Te.call(this._weekdaysParse, e)) ? i : null : "ddd" === t ? -1 !== (i = Te.call(this._shortWeekdaysParse, e)) ? i : null : -1 !== (i = Te.call(this._minWeekdaysParse, e)) ? i : null : "dddd" === t ? -1 !== (i = Te.call(this._weekdaysParse, e)) || -1 !== (i = Te.call(this._shortWeekdaysParse, e)) || -1 !== (i = Te.call(this._minWeekdaysParse, e)) ? i : null : "ddd" === t ? -1 !== (i = Te.call(this._shortWeekdaysParse, e)) || -1 !== (i = Te.call(this._weekdaysParse, e)) || -1 !== (i = Te.call(this._minWeekdaysParse, e)) ? i : null : -1 !== (i = Te.call(this._minWeekdaysParse, e)) || -1 !== (i = Te.call(this._weekdaysParse, e)) || -1 !== (i = Te.call(this._shortWeekdaysParse, e)) ? i : null
            }.call(this, e, t, n);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
                if (i = d([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[s] || (i = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s;
                if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
                if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
                if (!n && this._weekdaysParse[s].test(e)) return s
            }
        }, ie.weekdaysRegex = function (e) {
            return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Je), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }, ie.weekdaysShortRegex = function (e) {
            return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Be), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }, ie.weekdaysMinRegex = function (e) {
            return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qe), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }, ie.isPM = function (e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        }, ie.meridiem = function (e, t, n) {
            return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM"
        }, ut("en", {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (e) {
                var t = e % 10;
                return e + (1 === S(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
            }
        }), h.lang = n("moment.lang is deprecated. Use moment.locale instead.", ut), h.langData = n("moment.langData is deprecated. Use moment.localeData instead.", dt);
        var tn = Math.abs;

        function nn(e, t, n, s) {
            n = Nt(t, n);
            return e._milliseconds += s * n._milliseconds, e._days += s * n._days, e._months += s * n._months, e._bubble()
        }

        function sn(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e)
        }

        function rn(e) {
            return 4800 * e / 146097
        }

        function an(e) {
            return 146097 * e / 4800
        }

        function on(e) {
            return function () {
                return this.as(e)
            }
        }

        X = on("ms"), q = on("s"), J = on("m"), ne = on("h"), B = on("d"), te = on("w"), ee = on("M"), le = on("y");

        function un(e) {
            return function () {
                return this.isValid() ? this._data[e] : NaN
            }
        }

        Pe = un("milliseconds"), Oe = un("seconds"), qe = un("minutes"), $e = un("hours"), se = un("days"), ze = un("months"), Ve = un("years");
        var ln = Math.round, dn = {ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11};

        function hn(e, t, n) {
            var s = Nt(e).abs(), i = ln(s.as("s")), r = ln(s.as("m")), a = ln(s.as("h")), o = ln(s.as("d")),
                u = ln(s.as("M")), s = ln(s.as("y")),
                s = (i <= dn.ss ? ["s", i] : i < dn.s && ["ss", i]) || r <= 1 && ["m"] || r < dn.m && ["mm", r] || a <= 1 && ["h"] || a < dn.h && ["hh", a] || o <= 1 && ["d"] || o < dn.d && ["dd", o] || u <= 1 && ["M"] || u < dn.M && ["MM", u] || s <= 1 && ["y"] || ["yy", s];
            return s[2] = t, s[3] = 0 < +e, s[4] = n, function (e, t, n, s, i) {
                return i.relativeTime(t || 1, !!n, e, s)
            }.apply(null, s)
        }

        var cn = Math.abs;

        function fn() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e = cn(this._milliseconds) / 1e3, t = cn(this._days), n = cn(this._months), s = M(e / 60),
                i = M(s / 60);
            e %= 60, s %= 60;
            var r = M(n / 12), a = n %= 12, n = t, t = i, i = s, s = e, e = this.asSeconds();
            return e ? (e < 0 ? "-" : "") + "P" + (r ? r + "Y" : "") + (a ? a + "M" : "") + (n ? n + "D" : "") + (t || i || s ? "T" : "") + (t ? t + "H" : "") + (i ? i + "M" : "") + (s ? s + "S" : "") : "P0D"
        }

        ie = bt.prototype;
        return ie.isValid = function () {
            return this._isValid
        }, ie.abs = function () {
            var e = this._data;
            return this._milliseconds = tn(this._milliseconds), this._days = tn(this._days), this._months = tn(this._months), e.milliseconds = tn(e.milliseconds), e.seconds = tn(e.seconds), e.minutes = tn(e.minutes), e.hours = tn(e.hours), e.months = tn(e.months), e.years = tn(e.years), this
        }, ie.add = function (e, t) {
            return nn(this, e, t, 1)
        }, ie.subtract = function (e, t) {
            return nn(this, e, t, -1)
        }, ie.as = function (e) {
            if (!this.isValid()) return NaN;
            var t, n, s = this._milliseconds;
            if ("month" === (e = C(e)) || "year" === e) return t = this._days + s / 864e5, n = this._months + rn(t), "month" === e ? n : n / 12;
            switch (t = this._days + Math.round(an(this._months)), e) {
                case"week":
                    return t / 7 + s / 6048e5;
                case"day":
                    return t + s / 864e5;
                case"hour":
                    return 24 * t + s / 36e5;
                case"minute":
                    return 1440 * t + s / 6e4;
                case"second":
                    return 86400 * t + s / 1e3;
                case"millisecond":
                    return Math.floor(864e5 * t) + s;
                default:
                    throw new Error("Unknown unit " + e)
            }
        }, ie.asMilliseconds = X, ie.asSeconds = q, ie.asMinutes = J, ie.asHours = ne, ie.asDays = B, ie.asWeeks = te, ie.asMonths = ee, ie.asYears = le, ie.valueOf = function () {
            return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * S(this._months / 12) : NaN
        }, ie._bubble = function () {
            var e = this._milliseconds, t = this._days, n = this._months, s = this._data;
            return 0 <= e && 0 <= t && 0 <= n || e <= 0 && t <= 0 && n <= 0 || (e += 864e5 * sn(an(n) + t), n = t = 0), s.milliseconds = e % 1e3, e = M(e / 1e3), s.seconds = e % 60, e = M(e / 60), s.minutes = e % 60, e = M(e / 60), s.hours = e % 24, t += M(e / 24), n += e = M(rn(t)), t -= sn(an(e)), e = M(n / 12), n %= 12, s.days = t, s.months = n, s.years = e, this
        }, ie.get = function (e) {
            return e = C(e), this.isValid() ? this[e + "s"]() : NaN
        }, ie.milliseconds = Pe, ie.seconds = Oe, ie.minutes = qe, ie.hours = $e, ie.days = se, ie.weeks = function () {
            return M(this.days() / 7)
        }, ie.months = ze, ie.years = Ve, ie.humanize = function (e) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var t = this.localeData(), n = hn(this, !e, t);
            return e && (n = t.pastFuture(+this, n)), t.postformat(n)
        }, ie.toISOString = fn, ie.toString = fn, ie.toJSON = fn, ie.locale = Zt, ie.localeData = zt, ie.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", fn), ie.lang = We, Z("X", 0, 0, "unix"), Z("x", 0, 0, "valueOf"), he("x", ae), he("X", /[+-]?\d+(\.\d{1,3})?/), _e("X", function (e, t, n) {
            n._d = new Date(1e3 * parseFloat(e, 10))
        }), _e("x", function (e, t, n) {
            n._d = new Date(S(e))
        }), h.version = "2.18.1", e = Ot, h.fn = Q, h.min = function () {
            return Tt("isBefore", [].slice.call(arguments, 0))
        }, h.max = function () {
            return Tt("isAfter", [].slice.call(arguments, 0))
        }, h.now = function () {
            return Date.now ? Date.now() : +new Date
        }, h.utc = d, h.unix = function (e) {
            return Ot(1e3 * e)
        }, h.months = function (e, t) {
            return Kt(e, t, "months")
        }, h.isDate = s, h.locale = ut, h.invalid = y, h.duration = Nt, h.isMoment = v, h.weekdays = function (e, t, n) {
            return en(e, t, n, "weekdays")
        }, h.parseZone = function () {
            return Ot.apply(null, arguments).parseZone()
        }, h.localeData = dt, h.isDuration = Pt, h.monthsShort = function (e, t) {
            return Kt(e, t, "monthsShort")
        }, h.weekdaysMin = function (e, t, n) {
            return en(e, t, n, "weekdaysMin")
        }, h.defineLocale = lt, h.updateLocale = function (e, t) {
            var n;
            return null != t ? (n = st, (t = new b(t = x(n = null != it[e] ? it[e]._config : n, t))).parentLocale = it[e], it[e] = t, ut(e)) : null != it[e] && (null != it[e].parentLocale ? it[e] = it[e].parentLocale : null != it[e] && delete it[e]), it[e]
        }, h.locales = function () {
            return P(it)
        }, h.weekdaysShort = function (e, t, n) {
            return en(e, t, n, "weekdaysShort")
        }, h.normalizeUnits = C, h.relativeTimeRounding = function (e) {
            return void 0 === e ? ln : "function" == typeof e && (ln = e, !0)
        }, h.relativeTimeThreshold = function (e, t) {
            return void 0 !== dn[e] && (void 0 === t ? dn[e] : (dn[e] = t, "s" === e && (dn.ss = t - 1), !0))
        }, h.calendarFormat = function (e, t) {
            return (t = e.diff(t, "days", !0)) < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse"
        }, h.prototype = Q, h
    });
    // TODO: end of deps/moment.min.js?


    // TODO: start of deps/chart.js
    !function (t) {
        "object" == typeof exports && "undefined" != typeof module
            ? module.exports = t()
            : "function" == typeof define && define.amd
                ? define([], t)
                : (
                    "undefined" != typeof window
                        ? window
                        : "undefined" != typeof global
                            ? global
                            : "undefined" != typeof self
                                ? self
                                : this
                ).HXLocal_Chart = t()
    }(function () {
        return function n(o, a, r) {
            function s(i, t) {
                if (!a[i]) {
                    if (!o[i]) {
                        var e = "function" == typeof require && require;
                        if (!t && e) return e(i, !0);
                        if (l) return l(i, !0);
                        e = new Error("Cannot find module '" + i + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }
                    e = a[i] = {exports: {}};
                    o[i][0].call(e.exports, function (t) {
                        var e = o[i][1][t];
                        return s(e || t)
                    }, e, e.exports, n, o, a, r)
                }
                return a[i].exports
            }

            for (var l = "function" == typeof require && require, t = 0; t < r.length; t++) s(r[t]);
            return s
        }({
            1: [function (t, e, i) {
            }, {}], 2: [function (t, e, i) {
                var a = t(6);

                function n(t) {
                    if (t) {
                        var e = [0, 0, 0], i = 1;
                        if (n = t.match(/^#([a-fA-F0-9]{3})$/i)) for (var n = n[1], o = 0; o < e.length; o++) e[o] = parseInt(n[o] + n[o], 16); else if (n = t.match(/^#([a-fA-F0-9]{6})$/i)) {
                            n = n[1];
                            for (o = 0; o < e.length; o++) e[o] = parseInt(n.slice(2 * o, 2 * o + 2), 16)
                        } else if (n = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                            for (o = 0; o < e.length; o++) e[o] = parseInt(n[o + 1]);
                            i = parseFloat(n[4])
                        } else if (n = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                            for (o = 0; o < e.length; o++) e[o] = Math.round(2.55 * parseFloat(n[o + 1]));
                            i = parseFloat(n[4])
                        } else if (n = t.match(/(\w+)/)) {
                            if ("transparent" == n[1]) return [0, 0, 0, 0];
                            if (!(e = a[n[1]])) return
                        }
                        for (o = 0; o < e.length; o++) e[o] = d(e[o], 0, 255);
                        return i = i || 0 == i ? d(i, 0, 1) : 1, e[3] = i, e
                    }
                }

                function o(t) {
                    if (t) {
                        var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                        if (e) {
                            t = parseFloat(e[4]);
                            return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(t) ? 1 : t, 0, 1)]
                        }
                    }
                }

                function r(t) {
                    if (t) {
                        var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                        if (e) {
                            t = parseFloat(e[4]);
                            return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(t) ? 1 : t, 0, 1)]
                        }
                    }
                }

                function s(t, e) {
                    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
                }

                function l(t, e) {
                    return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
                }

                function u(t, e) {
                    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
                }

                function d(t, e, i) {
                    return Math.min(Math.max(e, t), i)
                }

                function c(t) {
                    t = t.toString(16).toUpperCase();
                    return t.length < 2 ? "0" + t : t
                }

                e.exports = {
                    getRgba: n, getHsla: o, getRgb: function (t) {
                        t = n(t);
                        return t && t.slice(0, 3)
                    }, getHsl: function (t) {
                        t = o(t);
                        return t && t.slice(0, 3)
                    }, getHwb: r, getAlpha: function (t) {
                        var e = n(t);
                        return (e = e || o(t)) || (e = r(t)) ? e[3] : void 0
                    }, hexString: function (t) {
                        return "#" + c(t[0]) + c(t[1]) + c(t[2])
                    }, rgbString: function (t, e) {
                        if (e < 1 || t[3] && t[3] < 1) return s(t, e);
                        return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                    }, rgbaString: s, percentString: function (t, e) {
                        if (e < 1 || t[3] && t[3] < 1) return l(t, e);
                        var i = Math.round(t[0] / 255 * 100), e = Math.round(t[1] / 255 * 100),
                            t = Math.round(t[2] / 255 * 100);
                        return "rgb(" + i + "%, " + e + "%, " + t + "%)"
                    }, percentaString: l, hslString: function (t, e) {
                        if (e < 1 || t[3] && t[3] < 1) return u(t, e);
                        return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
                    }, hslaString: u, hwbString: function (t, e) {
                        void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
                        return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
                    }, keyword: function (t) {
                        return f[t.slice(0, 3)]
                    }
                };
                var h, f = {};
                for (h in a) f[a[h]] = h
            }, {6: 6}], 3: [function (t, e, i) {
                function r(t) {
                    return t instanceof r ? t : this instanceof r ? (this.valid = !1, this.values = {
                        rgb: [0, 0, 0],
                        hsl: [0, 0, 0],
                        hsv: [0, 0, 0],
                        hwb: [0, 0, 0],
                        cmyk: [0, 0, 0, 0],
                        alpha: 1
                    }, void ("string" == typeof t ? (e = n.getRgba(t)) ? this.setValues("rgb", e) : (e = n.getHsla(t)) ? this.setValues("hsl", e) : (e = n.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new r(t);
                    var e
                }

                var d = t(5), n = t(2);
                (r.prototype = {
                    isValid: function () {
                        return this.valid
                    }, rgb: function () {
                        return this.setSpace("rgb", arguments)
                    }, hsl: function () {
                        return this.setSpace("hsl", arguments)
                    }, hsv: function () {
                        return this.setSpace("hsv", arguments)
                    }, hwb: function () {
                        return this.setSpace("hwb", arguments)
                    }, cmyk: function () {
                        return this.setSpace("cmyk", arguments)
                    }, rgbArray: function () {
                        return this.values.rgb
                    }, hslArray: function () {
                        return this.values.hsl
                    }, hsvArray: function () {
                        return this.values.hsv
                    }, hwbArray: function () {
                        var t = this.values;
                        return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                    }, cmykArray: function () {
                        return this.values.cmyk
                    }, rgbaArray: function () {
                        var t = this.values;
                        return t.rgb.concat([t.alpha])
                    }, hslaArray: function () {
                        var t = this.values;
                        return t.hsl.concat([t.alpha])
                    }, alpha: function (t) {
                        return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                    }, red: function (t) {
                        return this.setChannel("rgb", 0, t)
                    }, green: function (t) {
                        return this.setChannel("rgb", 1, t)
                    }, blue: function (t) {
                        return this.setChannel("rgb", 2, t)
                    }, hue: function (t) {
                        return t = t && ((t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                    }, saturation: function (t) {
                        return this.setChannel("hsl", 1, t)
                    }, lightness: function (t) {
                        return this.setChannel("hsl", 2, t)
                    }, saturationv: function (t) {
                        return this.setChannel("hsv", 1, t)
                    }, whiteness: function (t) {
                        return this.setChannel("hwb", 1, t)
                    }, blackness: function (t) {
                        return this.setChannel("hwb", 2, t)
                    }, value: function (t) {
                        return this.setChannel("hsv", 2, t)
                    }, cyan: function (t) {
                        return this.setChannel("cmyk", 0, t)
                    }, magenta: function (t) {
                        return this.setChannel("cmyk", 1, t)
                    }, yellow: function (t) {
                        return this.setChannel("cmyk", 2, t)
                    }, black: function (t) {
                        return this.setChannel("cmyk", 3, t)
                    }, hexString: function () {
                        return n.hexString(this.values.rgb)
                    }, rgbString: function () {
                        return n.rgbString(this.values.rgb, this.values.alpha)
                    }, rgbaString: function () {
                        return n.rgbaString(this.values.rgb, this.values.alpha)
                    }, percentString: function () {
                        return n.percentString(this.values.rgb, this.values.alpha)
                    }, hslString: function () {
                        return n.hslString(this.values.hsl, this.values.alpha)
                    }, hslaString: function () {
                        return n.hslaString(this.values.hsl, this.values.alpha)
                    }, hwbString: function () {
                        return n.hwbString(this.values.hwb, this.values.alpha)
                    }, keyword: function () {
                        return n.keyword(this.values.rgb, this.values.alpha)
                    }, rgbNumber: function () {
                        var t = this.values.rgb;
                        return t[0] << 16 | t[1] << 8 | t[2]
                    }, luminosity: function () {
                        for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                            var n = t[i] / 255;
                            e[i] = n <= .03928 ? n / 12.92 : Math.pow((.055 + n) / 1.055, 2.4)
                        }
                        return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                    }, contrast: function (t) {
                        var e = this.luminosity(), t = t.luminosity();
                        return t < e ? (e + .05) / (t + .05) : (t + .05) / (e + .05)
                    }, level: function (t) {
                        t = this.contrast(t);
                        return 7.1 <= t ? "AAA" : 4.5 <= t ? "AA" : ""
                    }, dark: function () {
                        var t = this.values.rgb;
                        return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
                    }, light: function () {
                        return !this.dark()
                    }, negate: function () {
                        for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                        return this.setValues("rgb", t), this
                    }, lighten: function (t) {
                        var e = this.values.hsl;
                        return e[2] += e[2] * t, this.setValues("hsl", e), this
                    }, darken: function (t) {
                        var e = this.values.hsl;
                        return e[2] -= e[2] * t, this.setValues("hsl", e), this
                    }, saturate: function (t) {
                        var e = this.values.hsl;
                        return e[1] += e[1] * t, this.setValues("hsl", e), this
                    }, desaturate: function (t) {
                        var e = this.values.hsl;
                        return e[1] -= e[1] * t, this.setValues("hsl", e), this
                    }, whiten: function (t) {
                        var e = this.values.hwb;
                        return e[1] += e[1] * t, this.setValues("hwb", e), this
                    }, blacken: function (t) {
                        var e = this.values.hwb;
                        return e[2] += e[2] * t, this.setValues("hwb", e), this
                    }, greyscale: function () {
                        var t = this.values.rgb, t = .3 * t[0] + .59 * t[1] + .11 * t[2];
                        return this.setValues("rgb", [t, t, t]), this
                    }, clearer: function (t) {
                        var e = this.values.alpha;
                        return this.setValues("alpha", e - e * t), this
                    }, opaquer: function (t) {
                        var e = this.values.alpha;
                        return this.setValues("alpha", e + e * t), this
                    }, rotate: function (t) {
                        var e = this.values.hsl, t = (e[0] + t) % 360;
                        return e[0] = t < 0 ? 360 + t : t, this.setValues("hsl", e), this
                    }, mix: function (t, e) {
                        var i = this, n = t, o = void 0 === e ? .5 : e, t = 2 * o - 1, e = i.alpha() - n.alpha(),
                            t = (1 + (t * e == -1 ? t : (t + e) / (1 + t * e))) / 2, e = 1 - t;
                        return this.rgb(t * i.red() + e * n.red(), t * i.green() + e * n.green(), t * i.blue() + e * n.blue()).alpha(i.alpha() * o + n.alpha() * (1 - o))
                    }, toJSON: function () {
                        return this.rgb()
                    }, clone: function () {
                        var t, e, i, n = new r, o = this.values, a = n.values;
                        for (i in o) o.hasOwnProperty(i) && (t = o[i], "[object Array]" === (e = {}.toString.call(t)) ? a[i] = t.slice(0) : "[object Number]" === e ? a[i] = t : console.error("unexpected color value:", t));
                        return n
                    }
                }).spaces = {
                    rgb: ["red", "green", "blue"],
                    hsl: ["hue", "saturation", "lightness"],
                    hsv: ["hue", "saturation", "value"],
                    hwb: ["hue", "whiteness", "blackness"],
                    cmyk: ["cyan", "magenta", "yellow", "black"]
                }, r.prototype.maxes = {
                    rgb: [255, 255, 255],
                    hsl: [360, 100, 100],
                    hsv: [360, 100, 100],
                    hwb: [360, 100, 100],
                    cmyk: [100, 100, 100, 100]
                }, r.prototype.getValues = function (t) {
                    for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
                    return 1 !== e.alpha && (i.a = e.alpha), i
                }, r.prototype.setValues = function (t, e) {
                    var i, n, o = this.values, a = this.spaces, r = this.maxes, s = 1;
                    if (this.valid = !0, "alpha" === t) s = e; else if (e.length) o[t] = e.slice(0, t.length), s = e[t.length]; else if (void 0 !== e[t.charAt(0)]) {
                        for (u = 0; u < t.length; u++) o[t][u] = e[t.charAt(u)];
                        s = e.a
                    } else if (void 0 !== e[a[t][0]]) {
                        for (var l = a[t], u = 0; u < t.length; u++) o[t][u] = e[l[u]];
                        s = e.alpha
                    }
                    if (o.alpha = Math.max(0, Math.min(1, void 0 === s ? o.alpha : s)), "alpha" === t) return !1;
                    for (u = 0; u < t.length; u++) i = Math.max(0, Math.min(r[t][u], o[t][u])), o[t][u] = Math.round(i);
                    for (n in a) n !== t && (o[n] = d[t][n](o[t]));
                    return !0
                }, r.prototype.setSpace = function (t, e) {
                    var i = e[0];
                    return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
                }, r.prototype.setChannel = function (t, e, i) {
                    var n = this.values[t];
                    return void 0 === i ? n[e] : (i === n[e] || (n[e] = i, this.setValues(t, n)), this)
                }, e.exports = r
            }, {2: 2, 5: 5}], 4: [function (t, e, i) {
                function o(t) {
                    var e, i = t[0] / 255, n = t[1] / 255, o = t[2] / 255, a = Math.min(i, n, o), r = Math.max(i, n, o),
                        t = r - a;
                    return r == a ? e = 0 : i == r ? e = (n - o) / t : n == r ? e = 2 + (o - i) / t : o == r && (e = 4 + (i - n) / t), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (a + r) / 2, [e, 100 * (r == a ? 0 : n <= .5 ? t / (r + a) : t / (2 - r - a)), 100 * n]
                }

                function n(t) {
                    var e, i = t[0], n = t[1], o = t[2], a = Math.min(i, n, o), r = Math.max(i, n, o), s = r - a,
                        t = 0 == r ? 0 : s / r * 1e3 / 10;
                    return r == a ? e = 0 : i == r ? e = (n - o) / s : n == r ? e = 2 + (o - i) / s : o == r && (e = 4 + (i - n) / s), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, t, r / 255 * 1e3 / 10]
                }

                function a(t) {
                    var e = t[0], i = t[1], n = t[2];
                    return [o(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(i, n))), 100 * (n = 1 - 1 / 255 * Math.max(e, Math.max(i, n)))]
                }

                function s(t) {
                    var e = t[0] / 255, i = t[1] / 255, n = t[2] / 255, t = Math.min(1 - e, 1 - i, 1 - n);
                    return [100 * ((1 - e - t) / (1 - t) || 0), 100 * ((1 - i - t) / (1 - t) || 0), 100 * ((1 - n - t) / (1 - t) || 0), 100 * t]
                }

                function l(t) {
                    return _[JSON.stringify(t)]
                }

                function u(t) {
                    var e = t[0] / 255, i = t[1] / 255, t = t[2] / 255;
                    return [100 * (.4124 * (e = .04045 < e ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = .04045 < i ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (t = .04045 < t ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * t), 100 * (.0193 * e + .1192 * i + .9505 * t)]
                }

                function d(t) {
                    var e = u(t), i = e[0], t = e[1], e = e[2];
                    return t /= 100, e /= 108.883, i = .008856 < (i /= 95.047) ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (t = .008856 < t ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116) - 16, 500 * (i - t), 200 * (t - (e = .008856 < e ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116))]
                }

                function c(t) {
                    var e, i, n = t[0] / 360, o = t[1] / 100, t = t[2] / 100;
                    if (0 == o) return [i = 255 * t, i, i];
                    for (var a, r = 2 * t - (a = t < .5 ? t * (1 + o) : t + o - t * o), s = [0, 0, 0], l = 0; l < 3; l++) (e = n + 1 / 3 * -(l - 1)) < 0 && e++, 1 < e && e--, s[l] = 255 * (i = 6 * e < 1 ? r + 6 * (a - r) * e : 2 * e < 1 ? a : 3 * e < 2 ? r + (a - r) * (2 / 3 - e) * 6 : r);
                    return s
                }

                function h(t) {
                    var e = t[0] / 60, i = t[1] / 100, n = t[2] / 100, t = Math.floor(e) % 6, e = e - Math.floor(e),
                        o = 255 * n * (1 - i), a = 255 * n * (1 - i * e), r = 255 * n * (1 - i * (1 - e)), n = 255 * n;
                    switch (t) {
                        case 0:
                            return [n, r, o];
                        case 1:
                            return [a, n, o];
                        case 2:
                            return [o, n, r];
                        case 3:
                            return [o, a, n];
                        case 4:
                            return [r, o, n];
                        case 5:
                            return [n, o, a]
                    }
                }

                function f(t) {
                    var e, i, n = t[0] / 360, o = t[1] / 100, a = t[2] / 100, t = o + a;
                    switch (1 < t && (o /= t, a /= t), n = 6 * n - (t = Math.floor(6 * n)), i = o + (n = 0 != (1 & t) ? 1 - n : n) * ((e = 1 - a) - o), t) {
                        default:
                        case 6:
                        case 0:
                            r = e, g = i, b = o;
                            break;
                        case 1:
                            r = i, g = e, b = o;
                            break;
                        case 2:
                            r = o, g = e, b = i;
                            break;
                        case 3:
                            r = o, g = i, b = e;
                            break;
                        case 4:
                            r = i, g = o, b = e;
                            break;
                        case 5:
                            r = e, g = o, b = i
                    }
                    return [255 * r, 255 * g, 255 * b]
                }

                function p(t) {
                    var e = t[0] / 100, i = t[1] / 100, n = t[2] / 100, t = t[3] / 100;
                    return [255 * (1 - Math.min(1, e * (1 - t) + t)), 255 * (1 - Math.min(1, i * (1 - t) + t)), 255 * (1 - Math.min(1, n * (1 - t) + t))]
                }

                function m(t) {
                    var e = t[0] / 100, i = t[1] / 100, n = t[2] / 100, o = 3.2406 * e + -1.5372 * i + -.4986 * n,
                        t = -.9689 * e + 1.8758 * i + .0415 * n, n = .0557 * e + -.204 * i + 1.057 * n;
                    return o = .0031308 < o ? 1.055 * Math.pow(o, 1 / 2.4) - .055 : 12.92 * o, t = .0031308 < t ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = .0031308 < n ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, [255 * (o = Math.min(Math.max(0, o), 1)), 255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
                }

                function v(t) {
                    var e = t[0], i = t[1], t = t[2];
                    return i /= 100, t /= 108.883, e = .008856 < (e /= 95.047) ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = .008856 < i ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (t = .008856 < t ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116))]
                }

                function x(t) {
                    var e, i = t[0], n = t[1], t = t[2],
                        i = i <= 8 ? (e = 100 * i / 903.3) / 100 * 7.787 + 16 / 116 : (e = 100 * Math.pow((i + 16) / 116, 3), Math.pow(e / 100, 1 / 3)),
                        o = o / 95.047 <= .008856 ? 95.047 * (n / 500 + i - 16 / 116) / 7.787 : 95.047 * Math.pow(n / 500 + i, 3),
                        a = a / 108.883 <= .008859 ? 108.883 * (i - t / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(i - t / 200, 3);
                    return [o, e, a]
                }

                function y(t) {
                    var e = t[0], i = t[1], n = t[2], t = 360 * Math.atan2(n, i) / 2 / Math.PI;
                    return t < 0 && (t += 360), [e, Math.sqrt(i * i + n * n), t]
                }

                function k(t) {
                    return m(x(t))
                }

                function w(t) {
                    var e = t[0], i = t[1], t = t[2] / 360 * 2 * Math.PI;
                    return [e, i * Math.cos(t), i * Math.sin(t)]
                }

                function M(t) {
                    return C[t]
                }

                e.exports = {
                    rgb2hsl: o,
                    rgb2hsv: n,
                    rgb2hwb: a,
                    rgb2cmyk: s,
                    rgb2keyword: l,
                    rgb2xyz: u,
                    rgb2lab: d,
                    rgb2lch: function (t) {
                        return y(d(t))
                    },
                    hsl2rgb: c,
                    hsl2hsv: function (t) {
                        var e = t[0], i = t[1] / 100, t = t[2] / 100;
                        return 0 != t ? [e, 100 * (2 * (i *= (t *= 2) <= 1 ? t : 2 - t) / (t + i)), 100 * ((t + i) / 2)] : [0, 0, 0]
                    },
                    hsl2hwb: function (t) {
                        return a(c(t))
                    },
                    hsl2cmyk: function (t) {
                        return s(c(t))
                    },
                    hsl2keyword: function (t) {
                        return l(c(t))
                    },
                    hsv2rgb: h,
                    hsv2hsl: function (t) {
                        var e = t[0], i = t[1] / 100, n = t[2] / 100;
                        return t = i * n, [e, 100 * (t = t / ((n = (2 - i) * n) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)]
                    },
                    hsv2hwb: function (t) {
                        return a(h(t))
                    },
                    hsv2cmyk: function (t) {
                        return s(h(t))
                    },
                    hsv2keyword: function (t) {
                        return l(h(t))
                    },
                    hwb2rgb: f,
                    hwb2hsl: function (t) {
                        return o(f(t))
                    },
                    hwb2hsv: function (t) {
                        return n(f(t))
                    },
                    hwb2cmyk: function (t) {
                        return s(f(t))
                    },
                    hwb2keyword: function (t) {
                        return l(f(t))
                    },
                    cmyk2rgb: p,
                    cmyk2hsl: function (t) {
                        return o(p(t))
                    },
                    cmyk2hsv: function (t) {
                        return n(p(t))
                    },
                    cmyk2hwb: function (t) {
                        return a(p(t))
                    },
                    cmyk2keyword: function (t) {
                        return l(p(t))
                    },
                    keyword2rgb: M,
                    keyword2hsl: function (t) {
                        return o(M(t))
                    },
                    keyword2hsv: function (t) {
                        return n(M(t))
                    },
                    keyword2hwb: function (t) {
                        return a(M(t))
                    },
                    keyword2cmyk: function (t) {
                        return s(M(t))
                    },
                    keyword2lab: function (t) {
                        return d(M(t))
                    },
                    keyword2xyz: function (t) {
                        return u(M(t))
                    },
                    xyz2rgb: m,
                    xyz2lab: v,
                    xyz2lch: function (t) {
                        return y(v(t))
                    },
                    lab2xyz: x,
                    lab2rgb: k,
                    lab2lch: y,
                    lch2lab: w,
                    lch2xyz: function (t) {
                        return x(w(t))
                    },
                    lch2rgb: function (t) {
                        return k(w(t))
                    }
                };
                var S, C = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                }, _ = {};
                for (S in C) _[JSON.stringify(C[S])] = S
            }, {}], 5: [function (t, e, i) {
                function o() {
                    return new l
                }

                var n, a = t(4);
                for (n in a) {
                    o[n + "Raw"] = function (e) {
                        return function (t) {
                            return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), a[e](t)
                        }
                    }(n);
                    var r = /(\w+)2(\w+)/.exec(n), s = r[1], r = r[2];
                    (o[s] = o[s] || {})[r] = o[n] = function (n) {
                        return function (t) {
                            "number" == typeof t && (t = Array.prototype.slice.call(arguments));
                            var e = a[n](t);
                            if ("string" == typeof e || void 0 === e) return e;
                            for (var i = 0; i < e.length; i++) e[i] = Math.round(e[i]);
                            return e
                        }
                    }(n)
                }
                var l = function () {
                    this.convs = {}
                };
                l.prototype.routeSpace = function (t, e) {
                    var i = e[0];
                    return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
                }, l.prototype.setValues = function (t, e) {
                    return this.space = t, this.convs = {}, this.convs[t] = e, this
                }, l.prototype.getValues = function (t) {
                    var e, i, n = this.convs[t];
                    return n || (e = this.space, i = this.convs[e], n = o[e][t](i), this.convs[t] = n), n
                }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (e) {
                    l.prototype[e] = function (t) {
                        return this.routeSpace(e, arguments)
                    }
                }), e.exports = o
            }, {4: 4}], 6: [function (t, e, i) {
                "use strict";
                e.exports = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                }
            }, {}], 7: [function (t, e, i) {
                var n = t(29)();
                n.helpers = t(45), t(27)(n), n.defaults = t(25), n.Element = t(26), n.elements = t(40), n.Interaction = t(28), n.platform = t(48), t(31)(n), t(22)(n), t(23)(n), t(24)(n), t(30)(n), t(33)(n), t(32)(n), t(35)(n), t(54)(n), t(52)(n), t(53)(n), t(55)(n), t(56)(n), t(57)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(21)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n);
                var o = [];
                o.push(t(49)(n), t(50)(n), t(51)(n)), n.plugins.register(o), n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.HXLocal_Chart = n), n.canvasHelpers = n.helpers.canvas
            }, {
                10: 10,
                11: 11,
                12: 12,
                13: 13,
                14: 14,
                15: 15,
                16: 16,
                17: 17,
                18: 18,
                19: 19,
                20: 20,
                21: 21,
                22: 22,
                23: 23,
                24: 24,
                25: 25,
                26: 26,
                27: 27,
                28: 28,
                29: 29,
                30: 30,
                31: 31,
                32: 32,
                33: 33,
                35: 35,
                40: 40,
                45: 45,
                48: 48,
                49: 49,
                50: 50,
                51: 51,
                52: 52,
                53: 53,
                54: 54,
                55: 55,
                56: 56,
                57: 57,
                8: 8,
                9: 9
            }], 8: [function (t, e, i) {
                "use strict";
                e.exports = function (i) {
                    i.Bar = function (t, e) {
                        return e.type = "bar", new i(t, e)
                    }
                }
            }, {}], 9: [function (t, e, i) {
                "use strict";
                e.exports = function (i) {
                    i.Bubble = function (t, e) {
                        return e.type = "bubble", new i(t, e)
                    }
                }
            }, {}], 10: [function (t, e, i) {
                "use strict";
                e.exports = function (i) {
                    i.Doughnut = function (t, e) {
                        return e.type = "doughnut", new i(t, e)
                    }
                }
            }, {}], 11: [function (t, e, i) {
                "use strict";
                e.exports = function (i) {
                    i.Line = function (t, e) {
                        return e.type = "line", new i(t, e)
                    }
                }
            }, {}], 12: [function (t, e, i) {
                "use strict";
                e.exports = function (i) {
                    i.PolarArea = function (t, e) {
                        return e.type = "polarArea", new i(t, e)
                    }
                }
            }, {}], 13: [function (t, e, i) {
                "use strict";
                e.exports = function (i) {
                    i.Radar = function (t, e) {
                        return e.type = "radar", new i(t, e)
                    }
                }
            }, {}], 14: [function (t, e, i) {
                "use strict";
                e.exports = function (i) {
                    i.Scatter = function (t, e) {
                        return e.type = "scatter", new i(t, e)
                    }
                }
            }, {}], 15: [function (t, e, i) {
                "use strict";
                var n = t(25), o = t(40), c = t(45);
                n._set("bar", {
                    hover: {mode: "label"},
                    scales: {
                        xAxes: [{
                            type: "category",
                            categoryPercentage: .8,
                            barPercentage: .9,
                            offset: !0,
                            gridLines: {offsetGridLines: !0}
                        }], yAxes: [{type: "linear"}]
                    }
                }), n._set("horizontalBar", {
                    hover: {mode: "index", axis: "y"},
                    scales: {
                        xAxes: [{type: "linear", position: "bottom"}],
                        yAxes: [{
                            position: "left",
                            type: "category",
                            categoryPercentage: .8,
                            barPercentage: .9,
                            offset: !0,
                            gridLines: {offsetGridLines: !0}
                        }]
                    },
                    elements: {rectangle: {borderSkipped: "left"}},
                    tooltips: {
                        callbacks: {
                            title: function (t, e) {
                                var i = "";
                                return 0 < t.length && (t[0].yLabel ? i = t[0].yLabel : 0 < e.labels.length && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i
                            }, label: function (t, e) {
                                return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
                            }
                        }, mode: "index", axis: "y"
                    }
                }), e.exports = function (e) {
                    e.controllers.bar = e.DatasetController.extend({
                        dataElementType: o.Rectangle, initialize: function () {
                            var t;
                            e.DatasetController.prototype.initialize.apply(this, arguments), (t = this.getMeta()).stack = this.getDataset().stack, t.bar = !0
                        }, update: function (t) {
                            var e, i, n = this.getMeta().data;
                            for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t)
                        }, updateElement: function (t, e, i) {
                            var n = this, o = n.chart, a = n.getMeta(), r = n.getDataset(), s = t.custom || {},
                                l = o.options.elements.rectangle;
                            t._xScale = n.getScaleForId(a.xAxisID), t._yScale = n.getScaleForId(a.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
                                datasetLabel: r.label,
                                label: o.data.labels[e],
                                borderSkipped: s.borderSkipped || l.borderSkipped,
                                backgroundColor: s.backgroundColor || c.valueAtIndexOrDefault(r.backgroundColor, e, l.backgroundColor),
                                borderColor: s.borderColor || c.valueAtIndexOrDefault(r.borderColor, e, l.borderColor),
                                borderWidth: s.borderWidth || c.valueAtIndexOrDefault(r.borderWidth, e, l.borderWidth)
                            }, n.updateElementGeometry(t, e, i), t.pivot()
                        }, updateElementGeometry: function (t, e, i) {
                            var n = this, o = t._model, a = n.getValueScale(), r = a.getBasePixel(),
                                s = a.isHorizontal(), t = n._ruler || n.getRuler(),
                                a = n.calculateBarValuePixels(n.index, e), t = n.calculateBarIndexPixels(n.index, e, t);
                            o.horizontal = s, o.base = i ? r : a.base, o.x = s ? i ? r : a.head : t.center, o.y = s ? t.center : i ? r : a.head, o.height = s ? t.size : void 0, o.width = s ? void 0 : t.size
                        }, getValueScaleId: function () {
                            return this.getMeta().yAxisID
                        }, getIndexScaleId: function () {
                            return this.getMeta().xAxisID
                        }, getValueScale: function () {
                            return this.getScaleForId(this.getValueScaleId())
                        }, getIndexScale: function () {
                            return this.getScaleForId(this.getIndexScaleId())
                        }, getStackCount: function (t) {
                            for (var e, i = this.chart, n = this.getIndexScale().options.stacked, o = void 0 === t ? i.data.datasets.length : t + 1, a = [], r = 0; r < o; ++r) (e = i.getDatasetMeta(r)).bar && i.isDatasetVisible(r) && (!1 === n || !0 === n && -1 === a.indexOf(e.stack) || void 0 === n && (void 0 === e.stack || -1 === a.indexOf(e.stack))) && a.push(e.stack);
                            return a.length
                        }, getStackIndex: function (t) {
                            return this.getStackCount(t) - 1
                        }, getRuler: function () {
                            for (var t = this.getIndexScale(), e = this.getStackCount(), i = this.index, n = [], o = t.isHorizontal(), a = o ? t.left : t.top, o = a + (o ? t.width : t.height), r = 0, s = this.getMeta().data.length; r < s; ++r) n.push(t.getPixelForValue(null, r, i));
                            return {pixels: n, start: a, end: o, stackCount: e, scale: t}
                        }, calculateBarValuePixels: function (t, e) {
                            var i, n, o, a = this.chart, r = this.getMeta(), s = this.getValueScale(),
                                l = a.data.datasets, u = s.getRightValue(l[t].data[e]), d = s.options.stacked,
                                c = r.stack, h = 0;
                            if (d || void 0 === d && void 0 !== c) for (i = 0; i < t; ++i) (n = a.getDatasetMeta(i)).bar && n.stack === c && n.controller.getValueScaleId() === s.id && a.isDatasetVisible(i) && (n = s.getRightValue(l[i].data[e]), (u < 0 && n < 0 || 0 <= u && 0 < n) && (h += n));
                            return o = s.getPixelForValue(h), {
                                size: d = ((r = s.getPixelForValue(h + u)) - o) / 2,
                                base: o,
                                head: r,
                                center: r + d / 2
                            }
                        }, calculateBarIndexPixels: function (t, e, i) {
                            var n, o, a = i.scale.options, r = this.getStackIndex(t), s = i.pixels, l = s[e],
                                u = s.length, d = i.start, t = i.end;
                            return 1 === u ? (n = d < l ? l - d : t - l, o = l < t ? t - l : l - d) : (0 < e && (n = (l - s[e - 1]) / 2, e === u - 1 && (o = n)), e < u - 1 && (o = (s[e + 1] - l) / 2, 0 === e && (n = o))), i = (o = ((n = n * a.categoryPercentage) + o * a.categoryPercentage) / i.stackCount) * a.barPercentage, l -= n, l += o * r, {
                                size: i = Math.min(c.valueOrDefault(a.barThickness, i), c.valueOrDefault(a.maxBarThickness, 1 / 0)),
                                base: l += (o - i) / 2,
                                head: l + i,
                                center: l + i / 2
                            }
                        }, draw: function () {
                            var t = this.chart, e = this.getValueScale(), i = this.getMeta().data,
                                n = this.getDataset(), o = i.length, a = 0;
                            for (c.canvas.clipArea(t.ctx, t.chartArea); a < o; ++a) isNaN(e.getRightValue(n.data[a])) || i[a].draw();
                            c.canvas.unclipArea(t.ctx)
                        }, setHoverStyle: function (t) {
                            var e = this.chart.data.datasets[t._datasetIndex], i = t._index, n = t.custom || {},
                                t = t._model;
                            t.backgroundColor = n.hoverBackgroundColor || c.valueAtIndexOrDefault(e.hoverBackgroundColor, i, c.getHoverColor(t.backgroundColor)), t.borderColor = n.hoverBorderColor || c.valueAtIndexOrDefault(e.hoverBorderColor, i, c.getHoverColor(t.borderColor)), t.borderWidth = n.hoverBorderWidth || c.valueAtIndexOrDefault(e.hoverBorderWidth, i, t.borderWidth)
                        }, removeHoverStyle: function (t) {
                            var e = this.chart.data.datasets[t._datasetIndex], i = t._index, n = t.custom || {},
                                o = t._model, t = this.chart.options.elements.rectangle;
                            o.backgroundColor = n.backgroundColor || c.valueAtIndexOrDefault(e.backgroundColor, i, t.backgroundColor), o.borderColor = n.borderColor || c.valueAtIndexOrDefault(e.borderColor, i, t.borderColor), o.borderWidth = n.borderWidth || c.valueAtIndexOrDefault(e.borderWidth, i, t.borderWidth)
                        }
                    }), e.controllers.horizontalBar = e.controllers.bar.extend({
                        getValueScaleId: function () {
                            return this.getMeta().xAxisID
                        }, getIndexScaleId: function () {
                            return this.getMeta().yAxisID
                        }
                    })
                }
            }, {25: 25, 40: 40, 45: 45}], 16: [function (t, e, i) {
                "use strict";
                var n = t(25), o = t(40), f = t(45);
                n._set("bubble", {
                    hover: {mode: "single"},
                    scales: {
                        xAxes: [{type: "linear", position: "bottom", id: "x-axis-0"}],
                        yAxes: [{type: "linear", position: "left", id: "y-axis-0"}]
                    },
                    tooltips: {
                        callbacks: {
                            title: function () {
                                return ""
                            }, label: function (t, e) {
                                var i = e.datasets[t.datasetIndex].label || "",
                                    e = e.datasets[t.datasetIndex].data[t.index];
                                return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + e.r + ")"
                            }
                        }
                    }
                }), e.exports = function (t) {
                    t.controllers.bubble = t.DatasetController.extend({
                        dataElementType: o.Point, update: function (i) {
                            var n = this, t = n.getMeta().data;
                            f.each(t, function (t, e) {
                                n.updateElement(t, e, i)
                            })
                        }, updateElement: function (t, e, i) {
                            var n = this, o = n.getMeta(), a = t.custom || {}, r = n.getScaleForId(o.xAxisID),
                                s = n.getScaleForId(o.yAxisID), l = n._resolveElementOptions(t, e),
                                u = n.getDataset().data[e], o = n.index,
                                n = i ? r.getPixelForDecimal(.5) : r.getPixelForValue("object" == typeof u ? u : NaN, e, o),
                                u = i ? s.getBasePixel() : s.getPixelForValue(u, e, o);
                            t._xScale = r, t._yScale = s, t._options = l, t._datasetIndex = o, t._index = e, t._model = {
                                backgroundColor: l.backgroundColor,
                                borderColor: l.borderColor,
                                borderWidth: l.borderWidth,
                                hitRadius: l.hitRadius,
                                pointStyle: l.pointStyle,
                                radius: i ? 0 : l.radius,
                                skip: a.skip || isNaN(n) || isNaN(u),
                                x: n,
                                y: u
                            }, t.pivot()
                        }, setHoverStyle: function (t) {
                            var e = t._model, t = t._options;
                            e.backgroundColor = f.valueOrDefault(t.hoverBackgroundColor, f.getHoverColor(t.backgroundColor)), e.borderColor = f.valueOrDefault(t.hoverBorderColor, f.getHoverColor(t.borderColor)), e.borderWidth = f.valueOrDefault(t.hoverBorderWidth, t.borderWidth), e.radius = t.radius + t.hoverRadius
                        }, removeHoverStyle: function (t) {
                            var e = t._model, t = t._options;
                            e.backgroundColor = t.backgroundColor, e.borderColor = t.borderColor, e.borderWidth = t.borderWidth, e.radius = t.radius
                        }, _resolveElementOptions: function (t, e) {
                            for (var i, n = this.chart, o = n.data.datasets[this.index], a = t.custom || {}, r = n.options.elements.point, s = f.options.resolve, t = o.data[e], l = {}, u = {
                                chart: n,
                                dataIndex: e,
                                dataset: o,
                                datasetIndex: this.index
                            }, d = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"], c = 0, h = d.length; c < h; ++c) l[i = d[c]] = s([a[i], o[i], r[i]], u, e);
                            return l.radius = s([a.radius, t ? t.r : void 0, o.radius, r.radius], u, e), l
                        }
                    })
                }
            }, {25: 25, 40: 40, 45: 45}], 17: [function (t, e, i) {
                "use strict";
                var n = t(25), o = t(40), b = t(45);
                n._set("doughnut", {
                    animation: {animateRotate: !0, animateScale: !1},
                    hover: {mode: "single"},
                    legendCallback: function (t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        var t = t.data, i = t.datasets, n = t.labels;
                        if (i.length) for (var o = 0; o < i[0].data.length; ++o) e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), n[o] && e.push(n[o]), e.push("</li>");
                        return e.push("</ul>"), e.join("")
                    },
                    legend: {
                        labels: {
                            generateLabels: function (s) {
                                var l = s.data;
                                return l.labels.length && l.datasets.length ? l.labels.map(function (t, e) {
                                    var i = s.getDatasetMeta(0), n = l.datasets[0], o = i.data[e],
                                        a = o && o.custom || {}, r = b.valueAtIndexOrDefault,
                                        o = s.options.elements.arc;
                                    return {
                                        text: t,
                                        fillStyle: a.backgroundColor || r(n.backgroundColor, e, o.backgroundColor),
                                        strokeStyle: a.borderColor || r(n.borderColor, e, o.borderColor),
                                        lineWidth: a.borderWidth || r(n.borderWidth, e, o.borderWidth),
                                        hidden: isNaN(n.data[e]) || i.data[e].hidden,
                                        index: e
                                    }
                                }) : []
                            }
                        }, onClick: function (t, e) {
                            for (var i, n = e.index, o = this.chart, a = 0, r = (o.data.datasets || []).length; a < r; ++a) (i = o.getDatasetMeta(a)).data[n] && (i.data[n].hidden = !i.data[n].hidden);
                            o.update()
                        }
                    },
                    cutoutPercentage: 50,
                    rotation: -.5 * Math.PI,
                    circumference: 2 * Math.PI,
                    tooltips: {
                        callbacks: {
                            title: function () {
                                return ""
                            }, label: function (t, e) {
                                var i = e.labels[t.index], t = ": " + e.datasets[t.datasetIndex].data[t.index];
                                return b.isArray(i) ? (i = i.slice())[0] += t : i += t, i
                            }
                        }
                    }
                }), n._set("pie", b.clone(n.doughnut)), n._set("pie", {cutoutPercentage: 0}), e.exports = function (e) {
                    e.controllers.doughnut = e.controllers.pie = e.DatasetController.extend({
                        dataElementType: o.Arc, linkScales: b.noop, getRingIndex: function (t) {
                            for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
                            return e
                        }, update: function (i) {
                            var t, e, n, o, a, r = this, s = r.chart, l = s.chartArea, u = s.options,
                                d = u.elements.arc, c = l.right - l.left - d.borderWidth,
                                h = l.bottom - l.top - d.borderWidth, f = Math.min(c, h), g = {x: 0, y: 0},
                                p = r.getMeta(), m = u.cutoutPercentage, v = u.circumference;
                            v < 2 * Math.PI && (n = u.rotation % (2 * Math.PI), a = (n += 2 * Math.PI * (n >= Math.PI ? -1 : n < -Math.PI ? 1 : 0)) + v, t = Math.cos(n), e = Math.sin(n), o = Math.cos(a), l = Math.sin(a), d = n <= 0 && 0 <= a || n <= 2 * Math.PI && 2 * Math.PI <= a, u = n <= .5 * Math.PI && .5 * Math.PI <= a || n <= 2.5 * Math.PI && 2.5 * Math.PI <= a, v = n <= -Math.PI && -Math.PI <= a || n <= Math.PI && Math.PI <= a, n = n <= .5 * -Math.PI && .5 * -Math.PI <= a || n <= 1.5 * Math.PI && 1.5 * Math.PI <= a, a = m / 100, v = v ? -1 : Math.min(t * (t < 0 ? 1 : a), o * (o < 0 ? 1 : a)), n = n ? -1 : Math.min(e * (e < 0 ? 1 : a), l * (l < 0 ? 1 : a)), o = d ? 1 : Math.max(t * (0 < t ? 1 : a), o * (0 < o ? 1 : a)), a = u ? 1 : Math.max(e * (0 < e ? 1 : a), l * (0 < l ? 1 : a)), f = Math.min(c / (.5 * (o - v)), h / (.5 * (a - n))), g = {
                                x: -.5 * (o + v),
                                y: -.5 * (a + n)
                            }), s.borderWidth = r.getMaxBorderWidth(p.data), s.outerRadius = Math.max((f - s.borderWidth) / 2, 0), s.innerRadius = Math.max(m ? s.outerRadius / 100 * m : 0, 0), s.radiusLength = (s.outerRadius - s.innerRadius) / s.getVisibleDatasetCount(), s.offsetX = g.x * s.outerRadius, s.offsetY = g.y * s.outerRadius, p.total = r.calculateTotal(), r.outerRadius = s.outerRadius - s.radiusLength * r.getRingIndex(r.index), r.innerRadius = Math.max(r.outerRadius - s.radiusLength, 0), b.each(p.data, function (t, e) {
                                r.updateElement(t, e, i)
                            })
                        }, updateElement: function (t, e, i) {
                            var n = this, o = n.chart, a = o.chartArea, r = o.options, s = r.animation,
                                l = (a.left + a.right) / 2, u = (a.top + a.bottom) / 2, d = r.rotation, c = r.rotation,
                                h = n.getDataset(),
                                f = i && s.animateRotate || t.hidden ? 0 : n.calculateCircumference(h.data[e]) * (r.circumference / (2 * Math.PI)),
                                g = i && s.animateScale ? 0 : n.innerRadius,
                                p = i && s.animateScale ? 0 : n.outerRadius, a = b.valueAtIndexOrDefault;
                            b.extend(t, {
                                _datasetIndex: n.index,
                                _index: e,
                                _model: {
                                    x: l + o.offsetX,
                                    y: u + o.offsetY,
                                    startAngle: d,
                                    endAngle: c,
                                    circumference: f,
                                    outerRadius: p,
                                    innerRadius: g,
                                    label: a(h.label, e, o.data.labels[e])
                                }
                            });
                            o = t._model;
                            this.removeHoverStyle(t), i && s.animateRotate || (o.startAngle = 0 === e ? r.rotation : n.getMeta().data[e - 1]._model.endAngle, o.endAngle = o.startAngle + o.circumference), t.pivot()
                        }, removeHoverStyle: function (t) {
                            e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
                        }, calculateTotal: function () {
                            var i, n = this.getDataset(), t = this.getMeta(), o = 0;
                            return b.each(t.data, function (t, e) {
                                i = n.data[e], isNaN(i) || t.hidden || (o += Math.abs(i))
                            }), o
                        }, calculateCircumference: function (t) {
                            var e = this.getMeta().total;
                            return 0 < e && !isNaN(t) ? 2 * Math.PI * (t / e) : 0
                        }, getMaxBorderWidth: function (t) {
                            for (var e, i = 0, n = this.index, o = t.length, a = 0; a < o; a++) i = (i = i < (e = t[a]._model ? t[a]._model.borderWidth : 0) ? e : i) < (e = t[a]._chart ? t[a]._chart.config.data.datasets[n].hoverBorderWidth : 0) ? e : i;
                            return i
                        }
                    })
                }
            }, {25: 25, 40: 40, 45: 45}], 18: [function (t, e, i) {
                "use strict";
                var n = t(25), o = t(40), f = t(45);
                n._set("line", {
                    showLines: !0,
                    spanGaps: !1,
                    hover: {mode: "label"},
                    scales: {xAxes: [{type: "category", id: "x-axis-0"}], yAxes: [{type: "linear", id: "y-axis-0"}]}
                }), e.exports = function (t) {
                    function h(t, e) {
                        return f.valueOrDefault(t.showLine, e.showLines)
                    }

                    t.controllers.line = t.DatasetController.extend({
                        datasetElementType: o.Line, dataElementType: o.Point, update: function (t) {
                            var e, i, n = this, o = n.getMeta(), a = o.dataset, r = o.data || [], s = n.chart.options,
                                l = s.elements.line, u = n.getScaleForId(o.yAxisID), d = n.getDataset(), c = h(d, s);
                            for (c && (o = a.custom || {}, void 0 !== d.tension && void 0 === d.lineTension && (d.lineTension = d.tension), a._scale = u, a._datasetIndex = n.index, a._children = r, a._model = {
                                spanGaps: d.spanGaps || s.spanGaps,
                                tension: o.tension || f.valueOrDefault(d.lineTension, l.tension),
                                backgroundColor: o.backgroundColor || d.backgroundColor || l.backgroundColor,
                                borderWidth: o.borderWidth || d.borderWidth || l.borderWidth,
                                borderColor: o.borderColor || d.borderColor || l.borderColor,
                                borderCapStyle: o.borderCapStyle || d.borderCapStyle || l.borderCapStyle,
                                borderDash: o.borderDash || d.borderDash || l.borderDash,
                                borderDashOffset: o.borderDashOffset || d.borderDashOffset || l.borderDashOffset,
                                borderJoinStyle: o.borderJoinStyle || d.borderJoinStyle || l.borderJoinStyle,
                                fill: o.fill || (void 0 !== d.fill ? d : l).fill,
                                steppedLine: o.steppedLine || f.valueOrDefault(d.steppedLine, l.stepped),
                                cubicInterpolationMode: o.cubicInterpolationMode || f.valueOrDefault(d.cubicInterpolationMode, l.cubicInterpolationMode)
                            }, a.pivot()), e = 0, i = r.length; e < i; ++e) n.updateElement(r[e], e, t);
                            for (c && 0 !== a._model.tension && n.updateBezierControlPoints(), e = 0, i = r.length; e < i; ++e) r[e].pivot()
                        }, getPointBackgroundColor: function (t, e) {
                            var i = this.chart.options.elements.point.backgroundColor, n = this.getDataset(),
                                t = t.custom || {};
                            return t.backgroundColor ? i = t.backgroundColor : n.pointBackgroundColor ? i = f.valueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i
                        }, getPointBorderColor: function (t, e) {
                            var i = this.chart.options.elements.point.borderColor, n = this.getDataset(),
                                t = t.custom || {};
                            return t.borderColor ? i = t.borderColor : n.pointBorderColor ? i = f.valueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i
                        }, getPointBorderWidth: function (t, e) {
                            var i = this.chart.options.elements.point.borderWidth, n = this.getDataset(),
                                t = t.custom || {};
                            return isNaN(t.borderWidth) ? !isNaN(n.pointBorderWidth) || f.isArray(n.pointBorderWidth) ? i = f.valueAtIndexOrDefault(n.pointBorderWidth, e, i) : isNaN(n.borderWidth) || (i = n.borderWidth) : i = t.borderWidth, i
                        }, updateElement: function (t, e, i) {
                            var n, o = this, a = o.getMeta(), r = t.custom || {}, s = o.getDataset(), l = o.index,
                                u = s.data[e], d = o.getScaleForId(a.yAxisID), c = o.getScaleForId(a.xAxisID),
                                h = o.chart.options.elements.point;
                            void 0 !== s.radius && void 0 === s.pointRadius && (s.pointRadius = s.radius), void 0 !== s.hitRadius && void 0 === s.pointHitRadius && (s.pointHitRadius = s.hitRadius), n = c.getPixelForValue("object" == typeof u ? u : NaN, e, l), u = i ? d.getBasePixel() : o.calculatePointY(u, e, l), t._xScale = c, t._yScale = d, t._datasetIndex = l, t._index = e, t._model = {
                                x: n,
                                y: u,
                                skip: r.skip || isNaN(n) || isNaN(u),
                                radius: r.radius || f.valueAtIndexOrDefault(s.pointRadius, e, h.radius),
                                pointStyle: r.pointStyle || f.valueAtIndexOrDefault(s.pointStyle, e, h.pointStyle),
                                backgroundColor: o.getPointBackgroundColor(t, e),
                                borderColor: o.getPointBorderColor(t, e),
                                borderWidth: o.getPointBorderWidth(t, e),
                                tension: a.dataset._model ? a.dataset._model.tension : 0,
                                steppedLine: !!a.dataset._model && a.dataset._model.steppedLine,
                                hitRadius: r.hitRadius || f.valueAtIndexOrDefault(s.pointHitRadius, e, h.hitRadius)
                            }
                        }, calculatePointY: function (t, e, i) {
                            var n, o = this.chart, a = this.getMeta(), r = this.getScaleForId(a.yAxisID), s = 0, l = 0;
                            if (r.options.stacked) {
                                for (n = 0; n < i; n++) {
                                    var u, d = o.data.datasets[n];
                                    "line" === (u = o.getDatasetMeta(n)).type && u.yAxisID === r.id && o.isDatasetVisible(n) && ((d = Number(r.getRightValue(d.data[e]))) < 0 ? l += d || 0 : s += d || 0)
                                }
                                a = Number(r.getRightValue(t));
                                return a < 0 ? r.getPixelForValue(l + a) : r.getPixelForValue(s + a)
                            }
                            return r.getPixelForValue(t)
                        }, updateBezierControlPoints: function () {
                            var t, e, i, n, o = this.getMeta(), a = this.chart.chartArea, r = o.data || [];

                            function s(t, e, i) {
                                return Math.max(Math.min(t, i), e)
                            }

                            if (o.dataset._model.spanGaps && (r = r.filter(function (t) {
                                return !t._model.skip
                            })), "monotone" === o.dataset._model.cubicInterpolationMode) f.splineCurveMonotone(r); else for (t = 0, e = r.length; t < e; ++t) i = r[t]._model, n = f.splineCurve(f.previousItem(r, t)._model, i, f.nextItem(r, t)._model, o.dataset._model.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
                            if (this.chart.options.elements.line.capBezierPoints) for (t = 0, e = r.length; t < e; ++t) (i = r[t]._model).controlPointPreviousX = s(i.controlPointPreviousX, a.left, a.right), i.controlPointPreviousY = s(i.controlPointPreviousY, a.top, a.bottom), i.controlPointNextX = s(i.controlPointNextX, a.left, a.right), i.controlPointNextY = s(i.controlPointNextY, a.top, a.bottom)
                        }, draw: function () {
                            var t = this.chart, e = this.getMeta(), i = e.data || [], n = t.chartArea, o = i.length,
                                a = 0, r = {
                                    left: n.left,
                                    right: n.right,
                                    top: n.top - (t.options.topClipMargin ?? 0),
                                    bottom: n.bottom + (t.options.bottomClipMargin ?? 0)
                                };
                            for (f.canvas.clipArea(t.ctx, r), h(this.getDataset(), t.options) && e.dataset.draw(), f.canvas.unclipArea(t.ctx); a < o; ++a) i[a].draw(n)
                        }, setHoverStyle: function (t) {
                            var e = this.chart.data.datasets[t._datasetIndex], i = t._index, n = t.custom || {},
                                t = t._model;
                            t.radius = n.hoverRadius || f.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), t.backgroundColor = n.hoverBackgroundColor || f.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, f.getHoverColor(t.backgroundColor)), t.borderColor = n.hoverBorderColor || f.valueAtIndexOrDefault(e.pointHoverBorderColor, i, f.getHoverColor(t.borderColor)), t.borderWidth = n.hoverBorderWidth || f.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, t.borderWidth)
                        }, removeHoverStyle: function (t) {
                            var e = this, i = e.chart.data.datasets[t._datasetIndex], n = t._index, o = t.custom || {},
                                a = t._model;
                            void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), a.radius = o.radius || f.valueAtIndexOrDefault(i.pointRadius, n, e.chart.options.elements.point.radius), a.backgroundColor = e.getPointBackgroundColor(t, n), a.borderColor = e.getPointBorderColor(t, n), a.borderWidth = e.getPointBorderWidth(t, n)
                        }
                    })
                }
            }, {25: 25, 40: 40, 45: 45}], 19: [function (t, e, i) {
                "use strict";
                var n = t(25), o = t(40), b = t(45);
                n._set("polarArea", {
                    scale: {
                        type: "radialLinear",
                        angleLines: {display: !1},
                        gridLines: {circular: !0},
                        pointLabels: {display: !1},
                        ticks: {beginAtZero: !0}
                    },
                    animation: {animateRotate: !0, animateScale: !0},
                    startAngle: -.5 * Math.PI,
                    legendCallback: function (t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        var t = t.data, i = t.datasets, n = t.labels;
                        if (i.length) for (var o = 0; o < i[0].data.length; ++o) e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), n[o] && e.push(n[o]), e.push("</li>");
                        return e.push("</ul>"), e.join("")
                    },
                    legend: {
                        labels: {
                            generateLabels: function (s) {
                                var l = s.data;
                                return l.labels.length && l.datasets.length ? l.labels.map(function (t, e) {
                                    var i = s.getDatasetMeta(0), n = l.datasets[0], o = i.data[e].custom || {},
                                        a = b.valueAtIndexOrDefault, r = s.options.elements.arc;
                                    return {
                                        text: t,
                                        fillStyle: o.backgroundColor || a(n.backgroundColor, e, r.backgroundColor),
                                        strokeStyle: o.borderColor || a(n.borderColor, e, r.borderColor),
                                        lineWidth: o.borderWidth || a(n.borderWidth, e, r.borderWidth),
                                        hidden: isNaN(n.data[e]) || i.data[e].hidden,
                                        index: e
                                    }
                                }) : []
                            }
                        }, onClick: function (t, e) {
                            for (var i, n = e.index, o = this.chart, a = 0, r = (o.data.datasets || []).length; a < r; ++a) (i = o.getDatasetMeta(a)).data[n].hidden = !i.data[n].hidden;
                            o.update()
                        }
                    },
                    tooltips: {
                        callbacks: {
                            title: function () {
                                return ""
                            }, label: function (t, e) {
                                return e.labels[t.index] + ": " + t.yLabel
                            }
                        }
                    }
                }), e.exports = function (e) {
                    e.controllers.polarArea = e.DatasetController.extend({
                        dataElementType: o.Arc, linkScales: b.noop, update: function (i) {
                            var n = this, t = n.chart, e = t.chartArea, o = n.getMeta(), a = t.options,
                                r = a.elements.arc, e = Math.min(e.right - e.left, e.bottom - e.top);
                            t.outerRadius = Math.max((e - r.borderWidth / 2) / 2, 0), t.innerRadius = Math.max(a.cutoutPercentage ? t.outerRadius / 100 * a.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), n.outerRadius = t.outerRadius - t.radiusLength * n.index, n.innerRadius = n.outerRadius - t.radiusLength, o.count = n.countVisibleElements(), b.each(o.data, function (t, e) {
                                n.updateElement(t, e, i)
                            })
                        }, updateElement: function (t, e, i) {
                            for (var n = this, o = n.chart, a = n.getDataset(), r = o.options, s = r.animation, l = o.scale, u = o.data.labels, d = n.calculateCircumference(a.data[e]), c = l.xCenter, h = l.yCenter, f = 0, g = n.getMeta(), p = 0; p < e; ++p) isNaN(a.data[p]) || g.data[p].hidden || ++f;
                            var m = r.startAngle, v = t.hidden ? 0 : l.getDistanceFromCenterForValue(a.data[e]),
                                o = m + d * f, r = o + (t.hidden ? 0 : d),
                                d = s.animateScale ? 0 : l.getDistanceFromCenterForValue(a.data[e]);
                            b.extend(t, {
                                _datasetIndex: n.index,
                                _index: e,
                                _scale: l,
                                _model: {
                                    x: c,
                                    y: h,
                                    innerRadius: 0,
                                    outerRadius: i ? d : v,
                                    startAngle: i && s.animateRotate ? m : o,
                                    endAngle: i && s.animateRotate ? m : r,
                                    label: b.valueAtIndexOrDefault(u, e, u[e])
                                }
                            }), n.removeHoverStyle(t), t.pivot()
                        }, removeHoverStyle: function (t) {
                            e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
                        }, countVisibleElements: function () {
                            var i = this.getDataset(), t = this.getMeta(), n = 0;
                            return b.each(t.data, function (t, e) {
                                isNaN(i.data[e]) || t.hidden || n++
                            }), n
                        }, calculateCircumference: function (t) {
                            var e = this.getMeta().count;
                            return 0 < e && !isNaN(t) ? 2 * Math.PI / e : 0
                        }
                    })
                }
            }, {25: 25, 40: 40, 45: 45}], 20: [function (t, e, i) {
                "use strict";
                var n = t(25), o = t(40), u = t(45);
                n._set("radar", {
                    scale: {type: "radialLinear"},
                    elements: {line: {tension: 0}}
                }), e.exports = function (t) {
                    t.controllers.radar = t.DatasetController.extend({
                        datasetElementType: o.Line, dataElementType: o.Point, linkScales: u.noop, update: function (i) {
                            var n = this, t = n.getMeta(), e = t.dataset, o = t.data, a = e.custom || {},
                                r = n.getDataset(), s = n.chart.options.elements.line, e = n.chart.scale;
                            void 0 !== r.tension && void 0 === r.lineTension && (r.lineTension = r.tension), u.extend(t.dataset, {
                                _datasetIndex: n.index,
                                _scale: e,
                                _children: o,
                                _loop: !0,
                                _model: {
                                    tension: a.tension || u.valueOrDefault(r.lineTension, s.tension),
                                    backgroundColor: a.backgroundColor || r.backgroundColor || s.backgroundColor,
                                    borderWidth: a.borderWidth || r.borderWidth || s.borderWidth,
                                    borderColor: a.borderColor || r.borderColor || s.borderColor,
                                    fill: a.fill || (void 0 !== r.fill ? r : s).fill,
                                    borderCapStyle: a.borderCapStyle || r.borderCapStyle || s.borderCapStyle,
                                    borderDash: a.borderDash || r.borderDash || s.borderDash,
                                    borderDashOffset: a.borderDashOffset || r.borderDashOffset || s.borderDashOffset,
                                    borderJoinStyle: a.borderJoinStyle || r.borderJoinStyle || s.borderJoinStyle
                                }
                            }), t.dataset.pivot(), u.each(o, function (t, e) {
                                n.updateElement(t, e, i)
                            }, n), n.updateBezierControlPoints()
                        }, updateElement: function (t, e, i) {
                            var n = this, o = t.custom || {}, a = n.getDataset(), r = n.chart.scale,
                                s = n.chart.options.elements.point, l = r.getPointPositionForValue(e, a.data[e]);
                            void 0 !== a.radius && void 0 === a.pointRadius && (a.pointRadius = a.radius), void 0 !== a.hitRadius && void 0 === a.pointHitRadius && (a.pointHitRadius = a.hitRadius), u.extend(t, {
                                _datasetIndex: n.index,
                                _index: e,
                                _scale: r,
                                _model: {
                                    x: i ? r.xCenter : l.x,
                                    y: i ? r.yCenter : l.y,
                                    tension: o.tension || u.valueOrDefault(a.lineTension, n.chart.options.elements.line.tension),
                                    radius: o.radius || u.valueAtIndexOrDefault(a.pointRadius, e, s.radius),
                                    backgroundColor: o.backgroundColor || u.valueAtIndexOrDefault(a.pointBackgroundColor, e, s.backgroundColor),
                                    borderColor: o.borderColor || u.valueAtIndexOrDefault(a.pointBorderColor, e, s.borderColor),
                                    borderWidth: o.borderWidth || u.valueAtIndexOrDefault(a.pointBorderWidth, e, s.borderWidth),
                                    pointStyle: o.pointStyle || u.valueAtIndexOrDefault(a.pointStyle, e, s.pointStyle),
                                    hitRadius: o.hitRadius || u.valueAtIndexOrDefault(a.pointHitRadius, e, s.hitRadius)
                                }
                            }), t._model.skip = o.skip || isNaN(t._model.x) || isNaN(t._model.y)
                        }, updateBezierControlPoints: function () {
                            var n = this.chart.chartArea, o = this.getMeta();
                            u.each(o.data, function (t, e) {
                                var i = t._model,
                                    e = u.splineCurve(u.previousItem(o.data, e, !0)._model, i, u.nextItem(o.data, e, !0)._model, i.tension);
                                i.controlPointPreviousX = Math.max(Math.min(e.previous.x, n.right), n.left), i.controlPointPreviousY = Math.max(Math.min(e.previous.y, n.bottom), n.top), i.controlPointNextX = Math.max(Math.min(e.next.x, n.right), n.left), i.controlPointNextY = Math.max(Math.min(e.next.y, n.bottom), n.top), t.pivot()
                            })
                        }, setHoverStyle: function (t) {
                            var e = this.chart.data.datasets[t._datasetIndex], i = t.custom || {}, n = t._index,
                                t = t._model;
                            t.radius = i.hoverRadius || u.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), t.backgroundColor = i.hoverBackgroundColor || u.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, u.getHoverColor(t.backgroundColor)), t.borderColor = i.hoverBorderColor || u.valueAtIndexOrDefault(e.pointHoverBorderColor, n, u.getHoverColor(t.borderColor)), t.borderWidth = i.hoverBorderWidth || u.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, t.borderWidth)
                        }, removeHoverStyle: function (t) {
                            var e = this.chart.data.datasets[t._datasetIndex], i = t.custom || {}, n = t._index,
                                o = t._model, t = this.chart.options.elements.point;
                            o.radius = i.radius || u.valueAtIndexOrDefault(e.pointRadius, n, t.radius), o.backgroundColor = i.backgroundColor || u.valueAtIndexOrDefault(e.pointBackgroundColor, n, t.backgroundColor), o.borderColor = i.borderColor || u.valueAtIndexOrDefault(e.pointBorderColor, n, t.borderColor), o.borderWidth = i.borderWidth || u.valueAtIndexOrDefault(e.pointBorderWidth, n, t.borderWidth)
                        }
                    })
                }
            }, {25: 25, 40: 40, 45: 45}], 21: [function (t, e, i) {
                "use strict";
                t(25)._set("scatter", {
                    hover: {mode: "single"},
                    scales: {
                        xAxes: [{id: "x-axis-1", type: "linear", position: "bottom"}],
                        yAxes: [{id: "y-axis-1", type: "linear", position: "left"}]
                    },
                    showLines: !1,
                    tooltips: {
                        callbacks: {
                            title: function () {
                                return ""
                            }, label: function (t) {
                                return "(" + t.xLabel + ", " + t.yLabel + ")"
                            }
                        }
                    }
                }), e.exports = function (t) {
                    t.controllers.scatter = t.controllers.line
                }
            }, {25: 25}], 22: [function (t, e, i) {
                "use strict";
                var n = t(25), o = t(26), a = t(45);
                n._set("global", {
                    animation: {
                        duration: 1e3,
                        easing: "easeOutQuart",
                        onProgress: a.noop,
                        onComplete: a.noop
                    }
                }), e.exports = function (t) {
                    t.Animation = o.extend({
                        chart: null,
                        currentStep: 0,
                        numSteps: 60,
                        easing: "",
                        render: null,
                        onAnimationProgress: null,
                        onAnimationComplete: null
                    }), t.animationService = {
                        frameDuration: 17,
                        animations: [],
                        dropFrames: 0,
                        request: null,
                        addAnimation: function (t, e, i, n) {
                            var o, a, r = this.animations;
                            for (e.chart = t, n || (t.animating = !0), o = 0, a = r.length; o < a; ++o) if (r[o].chart === t) return void (r[o] = e);
                            r.push(e), 1 === r.length && this.requestAnimationFrame()
                        },
                        cancelAnimation: function (e) {
                            var t = a.findIndex(this.animations, function (t) {
                                return t.chart === e
                            });
                            -1 !== t && (this.animations.splice(t, 1), e.animating = !1)
                        },
                        requestAnimationFrame: function () {
                            var t = this;
                            null === t.request && (t.request = a.requestAnimFrame.call(window, function () {
                                t.request = null, t.startDigest()
                            }))
                        },
                        startDigest: function () {
                            var t = this, e = Date.now(), i = 0;
                            1 < t.dropFrames && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + i);
                            i = Date.now();
                            t.dropFrames += (i - e) / t.frameDuration, 0 < t.animations.length && t.requestAnimationFrame()
                        },
                        advance: function (t) {
                            for (var e, i, n = this.animations, o = 0; o < n.length;) i = (e = n[o]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), a.callback(e.render, [i, e], i), a.callback(e.onAnimationProgress, [e], i), e.currentStep >= e.numSteps ? (a.callback(e.onAnimationComplete, [e], i), i.animating = !1, n.splice(o, 1)) : ++o
                        }
                    }, Object.defineProperty(t.Animation.prototype, "animationObject", {
                        get: function () {
                            return this
                        }
                    }), Object.defineProperty(t.Animation.prototype, "chartInstance", {
                        get: function () {
                            return this.chart
                        }, set: function (t) {
                            this.chart = t
                        }
                    })
                }
            }, {25: 25, 26: 26, 45: 45}], 23: [function (t, e, i) {
                "use strict";
                var l = t(25), u = t(45), n = t(28), d = t(48);
                e.exports = function (r) {
                    var s = r.plugins;

                    function a(t) {
                        return "top" === t || "bottom" === t
                    }

                    r.types = {}, r.instances = {}, r.controllers = {}, u.extend(r.prototype, {
                        construct: function (t, e) {
                            var i = this;
                            (o = (a = (a = e) || {}).data = a.data || {}).datasets = o.datasets || [], o.labels = o.labels || [], a.options = u.configMerge(l.global, l[a.type], a.options || {}), e = a;
                            var n = d.acquireContext(t, e), o = n && n.canvas, a = o && o.height, t = o && o.width;
                            i.id = u.uid(), i.ctx = n, i.canvas = o, i.config = e, i.width = t, i.height = a, i.aspectRatio = a ? t / a : null, i.options = e.options, i._bufferedRender = !1, (i.chart = i).controller = i, r.instances[i.id] = i, Object.defineProperty(i, "data", {
                                get: function () {
                                    return i.config.data
                                }, set: function (t) {
                                    i.config.data = t
                                }
                            }), n && o ? (i.initialize(), i.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                        }, initialize: function () {
                            var t = this;
                            return s.notify(t, "beforeInit"), u.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildScales(), t.initToolTip(), s.notify(t, "afterInit"), t
                        }, clear: function () {
                            return u.canvas.clear(this), this
                        }, stop: function () {
                            return r.animationService.cancelAnimation(this), this
                        }, resize: function (t, e) {
                            var i = this, n = i.options, o = i.canvas,
                                a = n.maintainAspectRatio && i.aspectRatio || null,
                                r = Math.max(0, Math.floor(u.getMaximumWidth(o))),
                                a = Math.max(0, Math.floor(a ? r / a : u.getMaximumHeight(o)));
                            e && (a = e), i.width === r && i.height === a || (o.width = i.width = r, o.height = i.height = a, o.style.width = r + "px", o.style.height = a + "px", u.retinaScale(i, n.devicePixelRatio), t || (s.notify(i, "resize", [a = {
                                width: r,
                                height: a
                            }]), i.options.onResize && i.options.onResize(i, a), i.stop(), i.update(i.options.responsiveAnimationDuration)))
                        }, ensureScalesHaveIDs: function () {
                            var t = this.options, e = t.scales || {}, t = t.scale;
                            u.each(e.xAxes, function (t, e) {
                                t.id = t.id || "x-axis-" + e
                            }), u.each(e.yAxes, function (t, e) {
                                t.id = t.id || "y-axis-" + e
                            }), t && (t.id = t.id || "scale")
                        }, buildScales: function () {
                            var n = this, t = n.options, o = n.scales = {}, e = [];
                            t.scales && (e = e.concat((t.scales.xAxes || []).map(function (t) {
                                return {options: t, dtype: "category", dposition: "bottom"}
                            }), (t.scales.yAxes || []).map(function (t) {
                                return {options: t, dtype: "linear", dposition: "left"}
                            }))), t.scale && e.push({
                                options: t.scale,
                                dtype: "radialLinear",
                                isDefault: !0,
                                dposition: "chartArea"
                            }), u.each(e, function (t) {
                                var e = t.options, i = u.valueOrDefault(e.type, t.dtype),
                                    i = r.scaleService.getScaleConstructor(i);
                                i && (a(e.position) !== a(t.dposition) && (e.position = t.dposition), e = new i({
                                    id: e.id,
                                    options: e,
                                    ctx: n.ctx,
                                    chart: n
                                }), (o[e.id] = e).mergeTicksOptions(), t.isDefault && (n.scale = e))
                            }), r.scaleService.addScalesToLayout(this)
                        }, buildOrUpdateControllers: function () {
                            var n = this, o = [], a = [];
                            return u.each(n.data.datasets, function (t, e) {
                                var i = n.getDatasetMeta(e), t = t.type || n.config.type;
                                if (i.type && i.type !== t && (n.destroyDatasetMeta(e), i = n.getDatasetMeta(e)), i.type = t, o.push(i.type), i.controller) i.controller.updateIndex(e); else {
                                    t = r.controllers[i.type];
                                    if (void 0 === t) throw new Error('"' + i.type + '" is not a chart type.');
                                    i.controller = new t(n, e), a.push(i.controller)
                                }
                            }, n), a
                        }, resetElements: function () {
                            var i = this;
                            u.each(i.data.datasets, function (t, e) {
                                i.getDatasetMeta(e).controller.reset()
                            }, i)
                        }, reset: function () {
                            this.resetElements(), this.tooltip.initialize()
                        }, update: function (t) {
                            var e, i, n = this;
                            t && "object" == typeof t || (t = {
                                duration: t,
                                lazy: arguments[1]
                            }), (i = (e = n).options).scale ? e.scale.options = i.scale : i.scales && i.scales.xAxes.concat(i.scales.yAxes).forEach(function (t) {
                                e.scales[t.id].options = t
                            }), e.tooltip._options = i.tooltips, !1 !== s.notify(n, "beforeUpdate") && (n.tooltip._data = n.data, i = n.buildOrUpdateControllers(), u.each(n.data.datasets, function (t, e) {
                                n.getDatasetMeta(e).controller.buildOrUpdateElements()
                            }, n), n.updateLayout(), u.each(i, function (t) {
                                t.reset()
                            }), n.updateDatasets(), n.tooltip.initialize(), n.lastActive = [], s.notify(n, "afterUpdate"), n._bufferedRender ? n._bufferedRequest = {
                                duration: t.duration,
                                easing: t.easing,
                                lazy: t.lazy
                            } : n.render(t))
                        }, updateLayout: function () {
                            !1 !== s.notify(this, "beforeLayout") && (r.layoutService.update(this, this.width, this.height), s.notify(this, "afterScaleUpdate"), s.notify(this, "afterLayout"))
                        }, updateDatasets: function () {
                            if (!1 !== s.notify(this, "beforeDatasetsUpdate")) {
                                for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                                s.notify(this, "afterDatasetsUpdate")
                            }
                        }, updateDataset: function (t) {
                            var e = this.getDatasetMeta(t), t = {meta: e, index: t};
                            !1 !== s.notify(this, "beforeDatasetUpdate", [t]) && (e.controller.update(), s.notify(this, "afterDatasetUpdate", [t]))
                        }, render: function (t) {
                            var e = this,
                                i = (t = !t || "object" != typeof t ? {duration: t, lazy: arguments[1]} : t).duration,
                                n = t.lazy;
                            if (!1 !== s.notify(e, "beforeRender")) {
                                var o = e.options.animation, a = function (t) {
                                    s.notify(e, "afterRender"), u.callback(o && o.onComplete, [t], e)
                                };
                                return o && (void 0 !== i && 0 !== i || void 0 === i && 0 !== o.duration) ? (t = new r.Animation({
                                    numSteps: (i || o.duration) / 16.66,
                                    easing: t.easing || o.easing,
                                    render: function (t, e) {
                                        var i = u.easing.effects[e.easing], n = e.currentStep, e = n / e.numSteps;
                                        t.draw(i(e), e, n)
                                    },
                                    onAnimationProgress: o.onProgress,
                                    onAnimationComplete: a
                                }), r.animationService.addAnimation(e, t, i, n)) : (e.draw(), a(new r.Animation({
                                    numSteps: 0,
                                    chart: e
                                }))), e
                            }
                        }, draw: function (t) {
                            var e = this;
                            e.clear(), u.isNullOrUndef(t) && (t = 1), e.transition(t), !1 !== s.notify(e, "beforeDraw", [t]) && (u.each(e.boxes, function (t) {
                                t.draw(e.chartArea)
                            }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), s.notify(e, "afterDraw", [t]))
                        }, transition: function (t) {
                            for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                            this.tooltip.transition(t)
                        }, drawDatasets: function (t) {
                            var e = this;
                            if (!1 !== s.notify(e, "beforeDatasetsDraw", [t])) {
                                for (var i = (e.data.datasets || []).length - 1; 0 <= i; --i) e.isDatasetVisible(i) && e.drawDataset(i, t);
                                s.notify(e, "afterDatasetsDraw", [t])
                            }
                        }, drawDataset: function (t, e) {
                            var i = this.getDatasetMeta(t), t = {meta: i, index: t, easingValue: e};
                            !1 !== s.notify(this, "beforeDatasetDraw", [t]) && (i.controller.draw(e), s.notify(this, "afterDatasetDraw", [t]))
                        }, _drawTooltip: function (t) {
                            var e = this.tooltip, t = {tooltip: e, easingValue: t};
                            !1 !== s.notify(this, "beforeTooltipDraw", [t]) && (e.draw(), s.notify(this, "afterTooltipDraw", [t]))
                        }, getElementAtEvent: function (t) {
                            return n.modes.single(this, t)
                        }, getElementsAtEvent: function (t) {
                            return n.modes.label(this, t, {intersect: !0})
                        }, getElementsAtXAxis: function (t) {
                            return n.modes["x-axis"](this, t, {intersect: !0})
                        }, getElementsAtEventForMode: function (t, e, i) {
                            e = n.modes[e];
                            return "function" == typeof e ? e(this, t, i) : []
                        }, getDatasetAtEvent: function (t) {
                            return n.modes.dataset(this, t, {intersect: !0})
                        }, getDatasetMeta: function (t) {
                            t = this.data.datasets[t];
                            return t._meta || (t._meta = {}), t._meta[this.id] || (t._meta[this.id] = {
                                type: null,
                                data: [],
                                dataset: null,
                                controller: null,
                                hidden: null,
                                xAxisID: null,
                                yAxisID: null
                            })
                        }, getVisibleDatasetCount: function () {
                            for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
                            return t
                        }, isDatasetVisible: function (t) {
                            var e = this.getDatasetMeta(t);
                            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                        }, generateLegend: function () {
                            return this.options.legendCallback(this)
                        }, destroyDatasetMeta: function (t) {
                            var e = this.id, i = this.data.datasets[t], t = i._meta && i._meta[e];
                            t && (t.controller.destroy(), delete i._meta[e])
                        }, destroy: function () {
                            var t, e, i = this, n = i.canvas;
                            for (i.stop(), t = 0, e = i.data.datasets.length; t < e; ++t) i.destroyDatasetMeta(t);
                            n && (i.unbindEvents(), u.canvas.clear(i), d.releaseContext(i.ctx), i.canvas = null, i.ctx = null), s.notify(i, "destroy"), delete r.instances[i.id]
                        }, toBase64Image: function () {
                            return this.canvas.toDataURL.apply(this.canvas, arguments)
                        }, initToolTip: function () {
                            var t = this;
                            t.tooltip = new r.Tooltip({
                                _chart: t,
                                _chartInstance: t,
                                _data: t.data,
                                _options: t.options.tooltips
                            }, t)
                        }, bindEvents: function () {
                            var e = this, i = e._listeners = {}, n = function () {
                                e.eventHandler.apply(e, arguments)
                            };
                            u.each(e.options.events, function (t) {
                                d.addEventListener(e, t, n), i[t] = n
                            }), e.options.responsive && (n = function () {
                                e.resize()
                            }, d.addEventListener(e, "resize", n), i.resize = n)
                        }, unbindEvents: function () {
                            var i = this, t = i._listeners;
                            t && (delete i._listeners, u.each(t, function (t, e) {
                                d.removeEventListener(i, e, t)
                            }))
                        }, updateHoverStyle: function (t, e, i) {
                            for (var n, o = i ? "setHoverStyle" : "removeHoverStyle", a = 0, r = t.length; a < r; ++a) (n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[o](n)
                        }, eventHandler: function (t) {
                            var e = this, i = e.tooltip;
                            if (!1 !== s.notify(e, "beforeEvent", [t])) {
                                e._bufferedRender = !0, e._bufferedRequest = null;
                                var n = e.handleEvent(t);
                                n |= i && i.handleEvent(t), s.notify(e, "afterEvent", [t]);
                                t = e._bufferedRequest;
                                return t ? e.render(t) : n && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e
                            }
                        }, handleEvent: function (t) {
                            var e = this, i = e.options || {}, n = i.hover;
                            return e.lastActive = e.lastActive || [], "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, n.mode, n), u.callback(i.onHover || i.hover.onHover, [t.native, e.active], e), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(e, t.native, e.active), e.lastActive.length && e.updateHoverStyle(e.lastActive, n.mode, !1), e.active.length && n.mode && e.updateHoverStyle(e.active, n.mode, !0), n = !u.arrayEquals(e.active, e.lastActive), e.lastActive = e.active, n
                        }
                    }), r.Controller = r
                }
            }, {25: 25, 28: 28, 45: 45, 48: 48}], 24: [function (t, e, i) {
                "use strict";
                var r = t(45);
                e.exports = function (t) {
                    var n = ["push", "pop", "shift", "splice", "unshift"];

                    function a(e, t) {
                        var i = e._chartjs;
                        i && (-1 !== (t = (i = i.listeners).indexOf(t)) && i.splice(t, 1), 0 < i.length || (n.forEach(function (t) {
                            delete e[t]
                        }), delete e._chartjs))
                    }

                    t.DatasetController = function (t, e) {
                        this.initialize(t, e)
                    }, r.extend(t.DatasetController.prototype, {
                        datasetElementType: null, dataElementType: null, initialize: function (t, e) {
                            this.chart = t, this.index = e, this.linkScales(), this.addElements()
                        }, updateIndex: function (t) {
                            this.index = t
                        }, linkScales: function () {
                            var t = this.getMeta(), e = this.getDataset();
                            null === t.xAxisID && (t.xAxisID = e.xAxisID || this.chart.options.scales.xAxes[0].id), null === t.yAxisID && (t.yAxisID = e.yAxisID || this.chart.options.scales.yAxes[0].id)
                        }, getDataset: function () {
                            return this.chart.data.datasets[this.index]
                        }, getMeta: function () {
                            return this.chart.getDatasetMeta(this.index)
                        }, getScaleForId: function (t) {
                            return this.chart.scales[t]
                        }, reset: function () {
                            this.update(!0)
                        }, destroy: function () {
                            this._data && a(this._data, this)
                        }, createMetaDataset: function () {
                            var t = this.datasetElementType;
                            return t && new t({_chart: this.chart, _datasetIndex: this.index})
                        }, createMetaData: function (t) {
                            var e = this.dataElementType;
                            return e && new e({_chart: this.chart, _datasetIndex: this.index, _index: t})
                        }, addElements: function () {
                            for (var t = this.getMeta(), e = this.getDataset().data || [], i = t.data, n = 0, o = e.length; n < o; ++n) i[n] = i[n] || this.createMetaData(n);
                            t.dataset = t.dataset || this.createMetaDataset()
                        }, addElementAndReset: function (t) {
                            var e = this.createMetaData(t);
                            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                        }, buildOrUpdateElements: function () {
                            var o, t = this, e = t.getDataset(), i = e.data || (e.data = []);
                            t._data !== i && (t._data && a(t._data, t), e = t, (o = i)._chartjs ? o._chartjs.listeners.push(e) : (Object.defineProperty(o, "_chartjs", {
                                configurable: !0,
                                enumerable: !1,
                                value: {listeners: [e]}
                            }), n.forEach(function (t) {
                                var i = "onData" + t.charAt(0).toUpperCase() + t.slice(1), n = o[t];
                                Object.defineProperty(o, t, {
                                    configurable: !0, enumerable: !1, value: function () {
                                        var e = Array.prototype.slice.call(arguments), t = n.apply(this, e);
                                        return r.each(o._chartjs.listeners, function (t) {
                                            "function" == typeof t[i] && t[i].apply(t, e)
                                        }), t
                                    }
                                })
                            })), t._data = i), t.resyncElements()
                        }, update: r.noop, transition: function (t) {
                            for (var e = this.getMeta(), i = e.data || [], n = i.length, o = 0; o < n; ++o) i[o].transition(t);
                            e.dataset && e.dataset.transition(t)
                        }, draw: function () {
                            var t = this.getMeta(), e = t.data || [], i = e.length, n = 0;
                            for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw()
                        }, removeHoverStyle: function (t, e) {
                            var i = this.chart.data.datasets[t._datasetIndex], n = t._index, o = t.custom || {},
                                a = r.valueAtIndexOrDefault, t = t._model;
                            t.backgroundColor = o.backgroundColor || a(i.backgroundColor, n, e.backgroundColor), t.borderColor = o.borderColor || a(i.borderColor, n, e.borderColor), t.borderWidth = o.borderWidth || a(i.borderWidth, n, e.borderWidth)
                        }, setHoverStyle: function (t) {
                            var e = this.chart.data.datasets[t._datasetIndex], i = t._index, n = t.custom || {},
                                o = r.valueAtIndexOrDefault, a = r.getHoverColor, t = t._model;
                            t.backgroundColor = n.hoverBackgroundColor || o(e.hoverBackgroundColor, i, a(t.backgroundColor)), t.borderColor = n.hoverBorderColor || o(e.hoverBorderColor, i, a(t.borderColor)), t.borderWidth = n.hoverBorderWidth || o(e.hoverBorderWidth, i, t.borderWidth)
                        }, resyncElements: function () {
                            var t = this.getMeta(), e = this.getDataset().data, i = t.data.length, e = e.length;
                            e < i ? t.data.splice(e, i - e) : i < e && this.insertElements(i, e - i)
                        }, insertElements: function (t, e) {
                            for (var i = 0; i < e; ++i) this.addElementAndReset(t + i)
                        }, onDataPush: function () {
                            this.insertElements(this.getDataset().data.length - 1, arguments.length)
                        }, onDataPop: function () {
                            this.getMeta().data.pop()
                        }, onDataShift: function () {
                            this.getMeta().data.shift()
                        }, onDataSplice: function (t, e) {
                            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                        }, onDataUnshift: function () {
                            this.insertElements(0, arguments.length)
                        }
                    }), t.DatasetController.extend = r.inherits
                }
            }, {45: 45}], 25: [function (t, e, i) {
                "use strict";
                var n = t(45);
                e.exports = {
                    _set: function (t, e) {
                        return n.merge(this[t] || (this[t] = {}), e)
                    }
                }
            }, {45: 45}], 26: [function (t, e, i) {
                "use strict";
                var f = t(3), n = t(45);

                function o(t) {
                    n.extend(this, t), this.initialize.apply(this, arguments)
                }

                n.extend(o.prototype, {
                    initialize: function () {
                        this.hidden = !1
                    }, pivot: function () {
                        var t = this;
                        return t._view || (t._view = n.clone(t._model)), t._start = {}, t
                    }, transition: function (t) {
                        var e = this, i = e._model, n = e._start, o = e._view;
                        return i && 1 !== t ? (o = o || (e._view = {}), function (t, e, i, n) {
                            for (var o, a, r, s, l, u, d = Object.keys(i), c = 0, h = d.length; c < h; ++c) if (r = i[o = d[c]], e.hasOwnProperty(o) || (e[o] = r), (l = e[o]) !== r && "_" !== o[0]) {
                                if (t.hasOwnProperty(o) || (t[o] = l), (s = typeof r) == typeof (a = t[o])) if ("string" == s) {
                                    if ((l = f(a)).valid && (u = f(r)).valid) {
                                        e[o] = u.mix(l, n).rgbString();
                                        continue
                                    }
                                } else if ("number" == s && isFinite(a) && isFinite(r)) {
                                    e[o] = a + (r - a) * n;
                                    continue
                                }
                                e[o] = r
                            }
                        }(n = n || (e._start = {}), o, i, t)) : (e._view = i, e._start = null), e
                    }, tooltipPosition: function () {
                        return {x: this._model.x, y: this._model.y}
                    }, hasValue: function () {
                        return n.isNumber(this._model.x) && n.isNumber(this._model.y)
                    }
                }), o.extend = n.inherits, e.exports = o
            }, {3: 3, 45: 45}], 27: [function (t, e, i) {
                "use strict";
                var n = t(3), o = t(25), h = t(45);
                e.exports = function (l) {
                    function u(t, e, i) {
                        var n;
                        return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
                    }

                    function d(t) {
                        return null != t && "none" !== t
                    }

                    function e(t, e, i) {
                        var n = document.defaultView, o = t.parentNode, a = n.getComputedStyle(t)[e],
                            r = n.getComputedStyle(o)[e], s = d(a), n = d(r), e = Number.POSITIVE_INFINITY;
                        return s || n ? Math.min(s ? u(a, t, i) : e, n ? u(r, o, i) : e) : "none"
                    }

                    h.configMerge = function () {
                        return h.merge(h.clone(arguments[0]), [].slice.call(arguments, 1), {
                            merger: function (t, e, i, n) {
                                var o = e[t] || {}, a = i[t];
                                "scales" === t ? e[t] = h.scaleMerge(o, a) : "scale" === t ? e[t] = h.merge(o, [l.scaleService.getScaleDefaults(a.type), a]) : h._merger(t, e, i, n)
                            }
                        })
                    }, h.scaleMerge = function () {
                        return h.merge(h.clone(arguments[0]), [].slice.call(arguments, 1), {
                            merger: function (t, e, i, n) {
                                if ("xAxes" === t || "yAxes" === t) {
                                    var o, a, r, s = i[t].length;
                                    for (e[t] || (e[t] = []), o = 0; o < s; ++o) r = i[t][o], a = h.valueOrDefault(r.type, "xAxes" === t ? "category" : "linear"), o >= e[t].length && e[t].push({}), !e[t][o].type || r.type && r.type !== e[t][o].type ? h.merge(e[t][o], [l.scaleService.getScaleDefaults(a), r]) : h.merge(e[t][o], r)
                                } else h._merger(t, e, i, n)
                            }
                        })
                    }, h.where = function (t, e) {
                        if (h.isArray(t) && Array.prototype.filter) return t.filter(e);
                        var i = [];
                        return h.each(t, function (t) {
                            e(t) && i.push(t)
                        }), i
                    }, h.findIndex = Array.prototype.findIndex ? function (t, e, i) {
                        return t.findIndex(e, i)
                    } : function (t, e, i) {
                        i = void 0 === i ? t : i;
                        for (var n = 0, o = t.length; n < o; ++n) if (e.call(i, t[n], n, t)) return n;
                        return -1
                    }, h.findNextWhere = function (t, e, i) {
                        for (var n = (i = h.isNullOrUndef(i) ? -1 : i) + 1; n < t.length; n++) {
                            var o = t[n];
                            if (e(o)) return o
                        }
                    }, h.findPreviousWhere = function (t, e, i) {
                        for (var n = (i = h.isNullOrUndef(i) ? t.length : i) - 1; 0 <= n; n--) {
                            var o = t[n];
                            if (e(o)) return o
                        }
                    }, h.isNumber = function (t) {
                        return !isNaN(parseFloat(t)) && isFinite(t)
                    }, h.almostEquals = function (t, e, i) {
                        return Math.abs(t - e) < i
                    }, h.almostWhole = function (t, e) {
                        var i = Math.round(t);
                        return i - e < t && t < i + e
                    }, h.max = function (t) {
                        return t.reduce(function (t, e) {
                            return isNaN(e) ? t : Math.max(t, e)
                        }, Number.NEGATIVE_INFINITY)
                    }, h.min = function (t) {
                        return t.reduce(function (t, e) {
                            return isNaN(e) ? t : Math.min(t, e)
                        }, Number.POSITIVE_INFINITY)
                    }, h.sign = Math.sign ? function (t) {
                        return Math.sign(t)
                    } : function (t) {
                        return 0 === (t = +t) || isNaN(t) ? t : 0 < t ? 1 : -1
                    }, h.log10 = Math.log10 ? function (t) {
                        return Math.log10(t)
                    } : function (t) {
                        return Math.log(t) / Math.LN10
                    }, h.toRadians = function (t) {
                        return t * (Math.PI / 180)
                    }, h.toDegrees = function (t) {
                        return t * (180 / Math.PI)
                    }, h.getAngleFromPoint = function (t, e) {
                        var i = e.x - t.x, e = e.y - t.y, t = Math.sqrt(i * i + e * e), i = Math.atan2(e, i);
                        return i < -.5 * Math.PI && (i += 2 * Math.PI), {angle: i, distance: t}
                    }, h.distanceBetweenPoints = function (t, e) {
                        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                    }, h.aliasPixel = function (t) {
                        return t % 2 == 0 ? 0 : .5
                    }, h.splineCurve = function (t, e, i, n) {
                        var o = t.skip ? e : t, a = e, r = i.skip ? e : i,
                            t = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)),
                            e = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)), i = t / (t + e),
                            e = e / (t + e), i = n * (i = isNaN(i) ? 0 : i), e = n * (e = isNaN(e) ? 0 : e);
                        return {
                            previous: {x: a.x - i * (r.x - o.x), y: a.y - i * (r.y - o.y)},
                            next: {x: a.x + e * (r.x - o.x), y: a.y + e * (r.y - o.y)}
                        }
                    }, h.EPSILON = Number.EPSILON || 1e-14, h.splineCurveMonotone = function (t) {
                        for (var e, i, n, o, a, r, s, l, u = (t || []).map(function (t) {
                            return {model: t._model, deltaK: 0, mK: 0}
                        }), d = u.length, c = 0; c < d; ++c) (o = u[c]).model.skip || (i = 0 < c ? u[c - 1] : null, (n = c < d - 1 ? u[c + 1] : null) && !n.model.skip && (e = n.model.x - o.model.x, o.deltaK = 0 != e ? (n.model.y - o.model.y) / e : 0), !i || i.model.skip ? o.mK = o.deltaK : !n || n.model.skip ? o.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(o.deltaK) ? o.mK = 0 : o.mK = (i.deltaK + o.deltaK) / 2);
                        for (c = 0; c < d - 1; ++c) o = u[c], n = u[c + 1], o.model.skip || n.model.skip || (h.almostEquals(o.deltaK, 0, this.EPSILON) ? o.mK = n.mK = 0 : (a = o.mK / o.deltaK, r = n.mK / o.deltaK, (s = Math.pow(a, 2) + Math.pow(r, 2)) <= 9 || (s = 3 / Math.sqrt(s), o.mK = a * s * o.deltaK, n.mK = r * s * o.deltaK)));
                        for (c = 0; c < d; ++c) (o = u[c]).model.skip || (i = 0 < c ? u[c - 1] : null, n = c < d - 1 ? u[c + 1] : null, i && !i.model.skip && (l = (o.model.x - i.model.x) / 3, o.model.controlPointPreviousX = o.model.x - l, o.model.controlPointPreviousY = o.model.y - l * o.mK), n && !n.model.skip && (l = (n.model.x - o.model.x) / 3, o.model.controlPointNextX = o.model.x + l, o.model.controlPointNextY = o.model.y + l * o.mK))
                    }, h.nextItem = function (t, e, i) {
                        return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                    }, h.previousItem = function (t, e, i) {
                        return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                    }, h.niceNum = function (t, e) {
                        var i = Math.floor(h.log10(t)), t = t / Math.pow(10, i),
                            t = e ? t < 1.5 ? 1 : t < 3 ? 2 : t < 7 ? 5 : 10 : t <= 1 ? 1 : t <= 2 ? 2 : t <= 5 ? 5 : 10;
                        return t * Math.pow(10, i)
                    }, h.requestAnimFrame = "undefined" == typeof window ? function (t) {
                        t()
                    } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                        return window.setTimeout(t, 1e3 / 60)
                    }, h.getRelativePosition = function (t, e) {
                        var i = t.originalEvent || t, n = t.currentTarget || t.srcElement,
                            o = n.getBoundingClientRect(), a = i.touches,
                            r = a && 0 < a.length ? (l = a[0].clientX, a[0].clientY) : (l = i.clientX, i.clientY),
                            s = parseFloat(h.getStyle(n, "padding-left")), t = parseFloat(h.getStyle(n, "padding-top")),
                            a = parseFloat(h.getStyle(n, "padding-right")),
                            i = parseFloat(h.getStyle(n, "padding-bottom")), a = o.right - o.left - s - a,
                            i = o.bottom - o.top - t - i,
                            l = Math.round((l - o.left - s) / a * n.width / e.currentDevicePixelRatio);
                        return {x: l, y: r = Math.round((r - o.top - t) / i * n.height / e.currentDevicePixelRatio)}
                    }, h.getConstraintWidth = function (t) {
                        return e(t, "max-width", "clientWidth")
                    }, h.getConstraintHeight = function (t) {
                        return e(t, "max-height", "clientHeight")
                    }, h.getMaximumWidth = function (t) {
                        var e = t.parentNode;
                        if (!e) return t.clientWidth;
                        var i = parseInt(h.getStyle(e, "padding-left"), 10),
                            n = parseInt(h.getStyle(e, "padding-right"), 10), n = e.clientWidth - i - n,
                            t = h.getConstraintWidth(t);
                        return isNaN(t) ? n : Math.min(n, t)
                    }, h.getMaximumHeight = function (t) {
                        var e = t.parentNode;
                        if (!e) return t.clientHeight;
                        var i = parseInt(h.getStyle(e, "padding-top"), 10),
                            n = parseInt(h.getStyle(e, "padding-bottom"), 10), n = e.clientHeight - i - n,
                            t = h.getConstraintHeight(t);
                        return isNaN(t) ? n : Math.min(n, t)
                    }, h.getStyle = function (t, e) {
                        return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                    }, h.retinaScale = function (t, e) {
                        var i, n, o = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1;
                        1 !== o && (i = t.canvas, n = t.height, e = t.width, i.height = n * o, i.width = e * o, t.ctx.scale(o, o), i.style.height = n + "px", i.style.width = e + "px")
                    }, h.fontString = function (t, e, i) {
                        return e + " " + t + "px " + i
                    }, h.longestText = function (e, t, i, n) {
                        var o = (n = n || {}).data = n.data || {}, a = n.garbageCollect = n.garbageCollect || [];
                        n.font !== t && (o = n.data = {}, a = n.garbageCollect = [], n.font = t), e.font = t;
                        var r = 0;
                        h.each(i, function (t) {
                            null != t && !0 !== h.isArray(t) ? r = h.measureText(e, o, a, r, t) : h.isArray(t) && h.each(t, function (t) {
                                null == t || h.isArray(t) || (r = h.measureText(e, o, a, r, t))
                            })
                        });
                        var s = a.length / 2;
                        if (s > i.length) {
                            for (var l = 0; l < s; l++) delete o[a[l]];
                            a.splice(0, s)
                        }
                        return r
                    }, h.measureText = function (t, e, i, n, o) {
                        var a = e[o];
                        return a || (a = e[o] = t.measureText(o).width, i.push(o)), n = n < a ? a : n
                    }, h.numberOfLabelLines = function (t) {
                        var e = 1;
                        return h.each(t, function (t) {
                            h.isArray(t) && t.length > e && (e = t.length)
                        }), e
                    }, h.color = n ? function (t) {
                        return t instanceof CanvasGradient && (t = o.global.defaultColor), n(t)
                    } : function (t) {
                        return console.error("Color.js not found!"), t
                    }, h.getHoverColor = function (t) {
                        return t instanceof CanvasPattern ? t : h.color(t).saturate(.5).darken(.1).rgbString()
                    }
                }
            }, {25: 25, 3: 3, 45: 45}], 28: [function (t, e, i) {
                "use strict";
                var n = t(45);

                function r(t, e) {
                    return t.native ? {x: t.x, y: t.y} : n.getRelativePosition(t, e)
                }

                function s(t, e) {
                    for (var i, n, o, a = 0, r = t.data.datasets.length; a < r; ++a) if (t.isDatasetVisible(a)) for (n = 0, o = (i = t.getDatasetMeta(a)).data.length; n < o; ++n) {
                        var s = i.data[n];
                        s._view.skip || e(s)
                    }
                }

                function l(t, e) {
                    var i = [];
                    return s(t, function (t) {
                        t.inRange(e.x, e.y) && i.push(t)
                    }), i
                }

                function u(t, i, n, o) {
                    var a = Number.POSITIVE_INFINITY, r = [];
                    return s(t, function (t) {
                        var e;
                        n && !t.inRange(i.x, i.y) || (e = t.getCenterPoint(), (e = o(i, e)) < a ? (r = [t], a = e) : e === a && r.push(t))
                    }), r
                }

                function d(t) {
                    var n = -1 !== t.indexOf("x"), o = -1 !== t.indexOf("y");
                    return function (t, e) {
                        var i = n ? Math.abs(t.x - e.x) : 0, e = o ? Math.abs(t.y - e.y) : 0;
                        return Math.sqrt(Math.pow(i, 2) + Math.pow(e, 2))
                    }
                }

                function o(i, t, e) {
                    var n = r(t, i);
                    e.axis = e.axis || "x";
                    var t = d(e.axis), o = e.intersect ? l(i, n) : u(i, n, !1, t), a = [];
                    return o.length ? (i.data.datasets.forEach(function (t, e) {
                        !i.isDatasetVisible(e) || (e = i.getDatasetMeta(e).data[o[0]._index]) && !e._view.skip && a.push(e)
                    }), a) : []
                }

                e.exports = {
                    modes: {
                        single: function (t, e) {
                            var i = r(e, t), n = [];
                            return s(t, function (t) {
                                return t.inRange(i.x, i.y) && (n.push(t), n)
                            }), n.slice(0, 1)
                        }, label: o, index: o, dataset: function (t, e, i) {
                            var n = r(e, t);
                            i.axis = i.axis || "xy";
                            e = d(i.axis), e = i.intersect ? l(t, n) : u(t, n, !1, e);
                            return e = 0 < e.length ? t.getDatasetMeta(e[0]._datasetIndex).data : e
                        }, "x-axis": function (t, e) {
                            return o(t, e, {intersect: !1})
                        }, point: function (t, e) {
                            return l(t, r(e, t))
                        }, nearest: function (t, e, i) {
                            var n = r(e, t);
                            i.axis = i.axis || "xy";
                            e = d(i.axis), e = u(t, n, i.intersect, e);
                            1 < e.length && e.sort(function (t, e) {
                                var i = t.getArea() - e.getArea();
                                return i = 0 === i ? t._datasetIndex - e._datasetIndex : i
                            });
                            let o = e.slice(0, 1);
                            return !i.intersect && 0 < o.length && (i = o[0].getCenterPoint(), (20 < (i = n.y - i.y) || i < -5) && (o = [])), o
                        }, x: function (t, e, i) {
                            var n = r(e, t), o = [], a = !1;
                            return s(t, function (t) {
                                t.inXRange(n.x) && o.push(t), t.inRange(n.x, n.y) && (a = !0)
                            }), o = i.intersect && !a ? [] : o
                        }, y: function (t, e, i) {
                            var n = r(e, t), o = [], a = !1;
                            return s(t, function (t) {
                                t.inYRange(n.y) && o.push(t), t.inRange(n.x, n.y) && (a = !0)
                            }), o = i.intersect && !a ? [] : o
                        }
                    }
                }
            }, {45: 45}], 29: [function (t, e, i) {
                "use strict";
                t(25)._set("global", {
                    responsive: !0,
                    responsiveAnimationDuration: 0,
                    maintainAspectRatio: !0,
                    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                    hover: {onHover: null, mode: "nearest", intersect: !0, animationDuration: 400},
                    onClick: null,
                    defaultColor: "rgba(0,0,0,0.1)",
                    defaultFontColor: "#666",
                    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    defaultFontSize: 12,
                    defaultFontStyle: "normal",
                    showLines: !0,
                    elements: {},
                    layout: {padding: {top: 0, right: 0, bottom: 0, left: 0}}
                }), e.exports = function () {
                    function t(t, e) {
                        return this.construct(t, e), this
                    }

                    return t.Chart = t
                }
            }, {25: 25}], 30: [function (t, e, i) {
                "use strict";
                var B = t(45);
                e.exports = function (t) {
                    function L(t, e) {
                        return B.where(t, function (t) {
                            return t.position === e
                        })
                    }

                    function z(t, n) {
                        t.forEach(function (t, e) {
                            return t._tmpIndex_ = e, t
                        }), t.sort(function (t, e) {
                            var i = n ? e : t, e = n ? t : e;
                            return i.weight === e.weight ? i._tmpIndex_ - e._tmpIndex_ : i.weight - e.weight
                        }), t.forEach(function (t) {
                            delete t._tmpIndex_
                        })
                    }

                    t.layoutService = {
                        defaults: {}, addBox: function (t, e) {
                            t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
                        }, removeBox: function (t, e) {
                            e = t.boxes ? t.boxes.indexOf(e) : -1;
                            -1 !== e && t.boxes.splice(e, 1)
                        }, configure: function (t, e, i) {
                            for (var n, o = ["fullWidth", "position", "weight"], a = o.length, r = 0; r < a; ++r) i.hasOwnProperty(n = o[r]) && (e[n] = i[n])
                        }, update: function (e, i, t) {
                            if (e) {
                                var n = e.options.layout || {}, o = B.options.toPadding(n.padding), a = o.left,
                                    r = o.right, s = o.top, l = o.bottom;
                                for (let t = 0; t < e.boxes.length; t++) e.boxes[t]._dataLimitsCached = !1;
                                var u = L(e.boxes, "left"), d = L(e.boxes, "right"), c = L(e.boxes, "top"),
                                    h = L(e.boxes, "bottom"), n = L(e.boxes, "chartArea");
                                z(u, !0), z(d, !1), z(c, !0), z(h, !1);
                                var f = i - a - r, g = t - s - l, p = g / 2, m = (i - f / 2) / (u.length + d.length),
                                    v = (t - p) / (c.length + h.length), b = f, x = g, y = [];
                                B.each(u.concat(d, c, h), function (t) {
                                    var e, i = t.isHorizontal();
                                    i ? (e = t.update(t.fullWidth ? f : b, v), x -= e.height) : (e = t.update(m, p), b -= e.width), y.push({
                                        horizontal: i,
                                        minSize: e,
                                        box: t
                                    })
                                });
                                var k = 0, w = 0, M = 0, S = 0;
                                B.each(c.concat(h), function (t) {
                                    t.getPadding && (t = t.getPadding(), k = Math.max(k, t.left), w = Math.max(w, t.right))
                                }), B.each(u.concat(d), function (t) {
                                    t.getPadding && (t = t.getPadding(), M = Math.max(M, t.top), S = Math.max(S, t.bottom))
                                });
                                var C = a, _ = r, D = s, I = l;
                                B.each(u.concat(d), O), B.each(u, function (t) {
                                    C += t.width
                                }), B.each(d, function (t) {
                                    _ += t.width
                                }), B.each(c.concat(h), O), B.each(c, function (t) {
                                    D += t.height
                                }), B.each(h, function (t) {
                                    I += t.height
                                }), B.each(u.concat(d), function (e) {
                                    var t = B.findNextWhere(y, function (t) {
                                        return t.box === e
                                    }), i = {left: 0, right: 0, top: D, bottom: I};
                                    t && e.update(t.minSize.width, x, i)
                                }), C = a, _ = r, D = s, I = l, B.each(u, function (t) {
                                    C += t.width
                                }), B.each(d, function (t) {
                                    _ += t.width
                                }), B.each(c, function (t) {
                                    D += t.height
                                }), B.each(h, function (t) {
                                    I += t.height
                                });
                                o = Math.max(k - C, 0);
                                C += o, _ += Math.max(w - _, 0);
                                l = Math.max(M - D, 0);
                                D += l, I += Math.max(S - I, 0);
                                var P = t - D - I, A = i - C - _;
                                A === b && P === x || (B.each(u, function (t) {
                                    t.height = P
                                }), B.each(d, function (t) {
                                    t.height = P
                                }), B.each(c, function (t) {
                                    t.fullWidth || (t.width = A)
                                }), B.each(h, function (t) {
                                    t.fullWidth || (t.width = A)
                                }), x = P, b = A);
                                var T = a + o, F = s + l;
                                B.each(u.concat(c), R), T += b, F += x, B.each(d, R), B.each(h, R), e.chartArea = {
                                    left: C,
                                    top: D,
                                    right: C + b,
                                    bottom: D + x
                                }, B.each(n, function (t) {
                                    t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(b, x)
                                })
                            }

                            function O(e) {
                                var t, i = B.findNextWhere(y, function (t) {
                                    return t.box === e
                                });
                                i && (e.isHorizontal() ? (t = {
                                    left: Math.max(C, k),
                                    right: Math.max(_, w),
                                    top: 0,
                                    bottom: 0
                                }, e.update(e.fullWidth ? f : b, g / 2, t)) : e.update(i.minSize.width, x))
                            }

                            function R(t) {
                                t.isHorizontal() ? (t.left = t.fullWidth ? a : C, t.right = t.fullWidth ? i - r : C + b, t.top = F, t.bottom = F + t.height, F = t.bottom) : (t.left = T, t.right = T + t.width, t.top = D, t.bottom = D + x, T = t.right)
                            }
                        }
                    }
                }
            }, {45: 45}], 31: [function (t, e, i) {
                "use strict";
                var r = t(25), n = t(26), s = t(45);
                r._set("global", {plugins: {}}), e.exports = function (t) {
                    t.plugins = {
                        _plugins: [], _cacheId: 0, register: function (t) {
                            var e = this._plugins;
                            [].concat(t).forEach(function (t) {
                                -1 === e.indexOf(t) && e.push(t)
                            }), this._cacheId++
                        }, unregister: function (t) {
                            var e = this._plugins;
                            [].concat(t).forEach(function (t) {
                                t = e.indexOf(t);
                                -1 !== t && e.splice(t, 1)
                            }), this._cacheId++
                        }, clear: function () {
                            this._plugins = [], this._cacheId++
                        }, count: function () {
                            return this._plugins.length
                        }, getAll: function () {
                            return this._plugins
                        }, notify: function (t, e, i) {
                            for (var n, o, a, r, s = this.descriptors(t), l = s.length, u = 0; u < l; ++u) if ("function" == typeof (r = (o = (n = s[u]).plugin)[e]) && ((a = [t].concat(i || [])).push(n.options), !1 === r.apply(o, a))) return !1;
                            return !0
                        }, descriptors: function (t) {
                            var e = t._plugins || (t._plugins = {});
                            if (e.id === this._cacheId) return e.descriptors;
                            var n = [], o = [], t = t && t.config || {}, a = t.options && t.options.plugins || {};
                            return this._plugins.concat(t.plugins || []).forEach(function (t) {
                                var e, i;
                                -1 === n.indexOf(t) && (e = t.id, !1 !== (i = a[e]) && (!0 === i && (i = s.clone(r.global.plugins[e])), n.push(t), o.push({
                                    plugin: t,
                                    options: i || {}
                                })))
                            }), e.descriptors = o, e.id = this._cacheId, o
                        }
                    }, t.pluginService = t.plugins, t.PluginBase = n.extend({})
                }
            }, {25: 25, 26: 26, 45: 45}], 32: [function (t, e, i) {
                "use strict";
                var m = t(25), n = t(26), B = t(45), t = t(34);

                function f(t) {
                    for (var e = [], i = 0, n = t.length; i < n; ++i) e.push(t[i].label);
                    return e
                }

                function N(t, e, i) {
                    var n = t.getPixelForTick(e);
                    return i && (n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n
                }

                m._set("scale", {
                    display: !0,
                    position: "left",
                    offset: !1,
                    gridLines: {
                        display: !0,
                        color: "rgba(0, 0, 0, 0.1)",
                        lineWidth: 1,
                        drawBorder: !0,
                        drawOnChartArea: !0,
                        drawTicks: !0,
                        tickMarkLength: 10,
                        zeroLineWidth: 1,
                        zeroLineColor: "rgba(0,0,0,0.25)",
                        zeroLineBorderDash: [],
                        zeroLineBorderDashOffset: 0,
                        offsetGridLines: !1,
                        borderDash: [],
                        borderDashOffset: 0
                    },
                    scaleLabel: {display: !1, labelString: "", lineHeight: 1.2, padding: {top: 4, bottom: 4}},
                    ticks: {
                        beginAtZero: !1,
                        minRotation: 0,
                        maxRotation: 50,
                        mirror: !1,
                        padding: 0,
                        reverse: !1,
                        display: !0,
                        autoSkip: !0,
                        autoSkipPadding: 0,
                        labelOffset: 0,
                        callback: t.formatters.values,
                        minor: {},
                        major: {}
                    }
                }), e.exports = function (t) {
                    function h(t, e, i) {
                        return B.isArray(e) ? B.longestText(t, i, e) : t.measureText(e).width
                    }

                    function g(t) {
                        var e = B.valueOrDefault, i = m.global, n = e(t.fontSize, i.defaultFontSize),
                            o = e(t.fontStyle, i.defaultFontStyle), i = e(t.fontFamily, i.defaultFontFamily);
                        return {size: n, style: o, family: i, font: B.fontString(n, o, i)}
                    }

                    function p(t) {
                        return B.options.toLineHeight(B.valueOrDefault(t.lineHeight, 1.2), B.valueOrDefault(t.fontSize, m.global.defaultFontSize))
                    }

                    t.Scale = n.extend({
                        getPadding: function () {
                            return {
                                left: this.paddingLeft || 0,
                                top: this.paddingTop || 0,
                                right: this.paddingRight || 0,
                                bottom: this.paddingBottom || 0
                            }
                        },
                        getTicks: function () {
                            return this._ticks
                        },
                        mergeTicksOptions: function () {
                            var t, e = this.options.ticks;
                            for (t in !1 === e.minor && (e.minor = {display: !1}), !1 === e.major && (e.major = {display: !1}), e) "major" !== t && "minor" !== t && (void 0 === e.minor[t] && (e.minor[t] = e[t]), void 0 === e.major[t] && (e.major[t] = e[t]))
                        },
                        beforeUpdate: function () {
                            B.callback(this.options.beforeUpdate, [this])
                        },
                        update: function (t, e, i) {
                            var n, o, a, r, s, l, u = this;
                            for (u.beforeUpdate(), u.maxWidth = t, u.maxHeight = e, u.margins = B.extend({
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }, i), u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u._dataLimitsCached || (u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u._dataLimitsCached = !0), u.beforeBuildTicks(), s = u.buildTicks() || [], u.afterBuildTicks(), u.beforeTickToLabelConversion(), a = u.convertTicksToLabels(s) || u.ticks, u.afterTickToLabelConversion(), u.options.ticks.removeEdgeTicks && (a[0] = " ", a[a.length - 1] = " "), n = 0, o = (u.ticks = a).length; n < o; ++n) r = a[n], (l = s[n]) ? l.label = r : s.push(l = {
                                label: r,
                                major: !1
                            });
                            return u._ticks = s, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize
                        },
                        afterUpdate: function () {
                            B.callback(this.options.afterUpdate, [this])
                        },
                        beforeSetDimensions: function () {
                            B.callback(this.options.beforeSetDimensions, [this])
                        },
                        setDimensions: function () {
                            var t = this;
                            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                        },
                        afterSetDimensions: function () {
                            B.callback(this.options.afterSetDimensions, [this])
                        },
                        beforeDataLimits: function () {
                            B.callback(this.options.beforeDataLimits, [this])
                        },
                        determineDataLimits: B.noop,
                        afterDataLimits: function () {
                            B.callback(this.options.afterDataLimits, [this])
                        },
                        beforeBuildTicks: function () {
                            B.callback(this.options.beforeBuildTicks, [this])
                        },
                        buildTicks: B.noop,
                        afterBuildTicks: function () {
                            B.callback(this.options.afterBuildTicks, [this])
                        },
                        beforeTickToLabelConversion: function () {
                            B.callback(this.options.beforeTickToLabelConversion, [this])
                        },
                        convertTicksToLabels: function () {
                            var t = this.options.ticks;
                            this.ticks = this.ticks.map(t.userCallback || t.callback, this)
                        },
                        afterTickToLabelConversion: function () {
                            B.callback(this.options.afterTickToLabelConversion, [this])
                        },
                        beforeCalculateTickRotation: function () {
                            B.callback(this.options.beforeCalculateTickRotation, [this])
                        },
                        calculateTickRotation: function () {
                            var t = this, e = t.ctx, i = t.options.ticks, n = f(t._ticks), o = g(i);
                            e.font = o.font;
                            var a = i.minRotation || 0;
                            if (n.length && t.options.display && t.isHorizontal()) for (var r = B.longestText(e, o.font, n, t.longestTextCache), s = r, l = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; l < s && a < i.maxRotation;) {
                                var u = B.toRadians(a), d = Math.cos(u);
                                if (Math.sin(u) * r > t.maxHeight) {
                                    a--;
                                    break
                                }
                                a++, s = d * r
                            }
                            t.labelRotation = a
                        },
                        afterCalculateTickRotation: function () {
                            B.callback(this.options.afterCalculateTickRotation, [this])
                        },
                        beforeFit: function () {
                            B.callback(this.options.beforeFit, [this])
                        },
                        fit: function () {
                            var t, e = this, i = e.minSize = {width: 0, height: 0}, n = f(e._ticks), o = e.options,
                                a = o.ticks, r = o.scaleLabel, s = o.gridLines, l = o.display, u = e.isHorizontal(),
                                d = g(a), c = o.gridLines.tickMarkLength;
                            i.width = u ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : l && s.drawTicks ? c : 0, i.height = u ? l && s.drawTicks ? c : 0 : e.maxHeight, r.display && l && (t = p(r) + B.options.toPadding(r.padding).height, u ? i.height += t : i.width += t), a.display && l && (s = B.longestText(e.ctx, d.font, n, e.longestTextCache), c = B.numberOfLabelLines(n), r = .5 * d.size, t = e.options.ticks.padding, u ? (e.longestLabelWidth = s, l = B.toRadians(e.labelRotation), u = Math.cos(l), c = Math.sin(l) * s + d.size * c + r * (c - 1) + r, i.height = Math.min(e.maxHeight, i.height + c + t), e.ctx.font = d.font, c = h(e.ctx, n[0], d.font), n = h(e.ctx, n[n.length - 1], d.font), 0 !== e.labelRotation ? (e.paddingLeft = "bottom" === o.position ? u * c + 3 : u * r + 3, e.paddingRight = "bottom" === o.position ? u * r + 3 : u * n + 3) : (e.paddingLeft = c / 2 + 3, e.paddingRight = n / 2 + 3)) : (a.mirror ? s = 0 : s += t + r, i.width = Math.min(e.maxWidth, i.width + s), e.paddingTop = d.size / 2, e.paddingBottom = d.size / 2)), e.handleMargins(), e.width = i.width, e.height = i.height
                        },
                        handleMargins: function () {
                            var t = this;
                            t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
                        },
                        afterFit: function () {
                            B.callback(this.options.afterFit, [this])
                        },
                        isHorizontal: function () {
                            return "top" === this.options.position || "bottom" === this.options.position
                        },
                        isFullWidth: function () {
                            return this.options.fullWidth
                        },
                        getRightValue: function (t) {
                            if (B.isNullOrUndef(t)) return NaN;
                            if ("number" == typeof t && !isFinite(t)) return NaN;
                            if (t) if (this.isHorizontal()) {
                                if (void 0 !== t.x) return this.getRightValue(t.x)
                            } else if (void 0 !== t.y) return this.getRightValue(t.y);
                            return t
                        },
                        getLabelForIndex: B.noop,
                        getPixelForValue: B.noop,
                        getValueForPixel: B.noop,
                        getPixelForTick: function (t) {
                            var e = this, i = e.options.offset;
                            if (e.isHorizontal()) {
                                var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
                                    o = n * t + e.paddingLeft;
                                i && (o += n / 2);
                                o = e.left + Math.round(o);
                                return o += e.isFullWidth() ? e.margins.left : 0
                            }
                            o = e.height - (e.paddingTop + e.paddingBottom);
                            return e.top + t * (o / (e._ticks.length - 1))
                        },
                        getPixelForDecimal: function (t) {
                            var e = this;
                            if (e.isHorizontal()) {
                                var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                                    i = e.left + Math.round(i);
                                return i += e.isFullWidth() ? e.margins.left : 0
                            }
                            return e.top + t * e.height
                        },
                        getBasePixel: function () {
                            return this.getPixelForValue(this.getBaseValue())
                        },
                        getBaseValue: function () {
                            var t = this.min, e = this.max;
                            return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0
                        },
                        _autoSkip: function (t) {
                            var e, i, n, o, a = this, r = a.isHorizontal(), s = a.options.ticks.minor, l = t.length,
                                u = B.toRadians(a.labelRotation), u = Math.cos(u), u = a.longestLabelWidth * u, d = [];
                            for (s.maxTicksLimit && (o = s.maxTicksLimit), r && (e = !1, (u + s.autoSkipPadding) * l > a.width - (a.paddingLeft + a.paddingRight) && (e = 1 + Math.floor((u + s.autoSkipPadding) * l / (a.width - (a.paddingLeft + a.paddingRight)))), o && o < l && (e = Math.max(e, Math.floor(l / o)))), i = 0; i < l; i++) n = t[i], (1 < e && 0 < i % e || i % e == 0 && l <= i + e) && i !== l - 1 && delete n.label, d.push(n);
                            return d
                        },
                        draw: function (k) {
                            var o, w, M, S, C, _, D, a, r, s, l, I, t, P, A, T, F, O, R, e, i, n, u, d, c, h, f,
                                L = this, z = L.options;
                            z.display && (o = L.ctx, w = m.global, M = z.ticks.minor, i = z.ticks.major || M, S = z.gridLines, f = z.scaleLabel, C = 0 !== L.labelRotation, _ = L.isHorizontal(), D = M.autoSkip ? L._autoSkip(L.getTicks()) : L.getTicks(), a = B.valueOrDefault(M.fontColor, w.defaultFontColor), r = g(M), s = B.valueOrDefault(i.fontColor, w.defaultFontColor), l = g(i), I = S.drawTicks ? S.tickMarkLength : 0, c = B.valueOrDefault(f.fontColor, w.defaultFontColor), h = g(f), t = B.options.toPadding(f.padding), P = B.toRadians(L.labelRotation), A = [], T = "right" === z.position ? L.left : L.right - I, F = "right" === z.position ? L.left + I : L.right, O = "bottom" === z.position ? L.top : L.bottom - I, R = "bottom" === z.position ? L.top + I : L.bottom, B.each(D, function (t, e) {
                                var i, n, o, a, r, s, l, u, d, c, h, f, g, p, m, v, b, x, y;
                                B.isNullOrUndef(t.label) || (i = t.label, f = e === L.zeroLineIndex && z.offset === S.offsetGridLines ? (n = S.zeroLineWidth, o = S.zeroLineColor, a = S.zeroLineBorderDash, S.zeroLineBorderDashOffset) : (n = B.valueAtIndexOrDefault(S.lineWidth, e), o = B.valueAtIndexOrDefault(S.color, e), a = B.valueOrDefault(S.borderDash, w.borderDash), B.valueOrDefault(S.borderDashOffset, w.borderDashOffset)), p = g = "middle", y = M.padding, _ ? (m = I + y, v = "bottom" === z.position ? (p = C ? "middle" : "top", g = C ? "right" : "center", L.top + m) : (p = C ? "middle" : "bottom", g = C ? "left" : "center", L.bottom - m), (b = N(L, e, S.offsetGridLines && 1 < D.length)) < L.left && (o = "rgba(0,0,0,0)"), b += B.aliasPixel(n), x = L.getPixelForTick(e) + M.labelOffset, r = l = d = h = b, s = O, u = R, c = k.top, m = k.bottom) : (b = "left" === z.position, y = M.mirror ? (g = b ? "left" : "right", y) : (g = b ? "right" : "left", I + y), x = b ? L.right - y : L.left + y, (y = N(L, e, S.offsetGridLines && 1 < D.length)) < L.top && (o = "rgba(0,0,0,0)"), y += B.aliasPixel(n), v = L.getPixelForTick(e) + M.labelOffset, r = T, l = F, d = k.left, h = k.right, s = u = c = m = y), A.push({
                                    tx1: r,
                                    ty1: s,
                                    tx2: l,
                                    ty2: u,
                                    x1: d,
                                    y1: c,
                                    x2: h,
                                    y2: m,
                                    labelX: x,
                                    labelY: v,
                                    glWidth: n,
                                    glColor: o,
                                    glBorderDash: a,
                                    glBorderDashOffset: f,
                                    rotation: -1 * P,
                                    label: i,
                                    major: t.major,
                                    textBaseline: p,
                                    textAlign: g
                                }))
                            }), B.each(A, function (t) {
                                if (S.display && (o.save(), o.lineWidth = t.glWidth, o.strokeStyle = t.glColor, o.setLineDash && (o.setLineDash(t.glBorderDash), o.lineDashOffset = t.glBorderDashOffset), o.beginPath(), S.drawTicks && (o.moveTo(t.tx1, t.ty1), o.lineTo(t.tx2, t.ty2)), S.drawOnChartArea && (o.moveTo(t.x1, t.y1), o.lineTo(t.x2, t.y2)), o.stroke(), o.restore()), M.display) {
                                    o.save(), o.translate(t.labelX, t.labelY), o.rotate(t.rotation), o.font = (t.major ? l : r).font, o.fillStyle = t.major ? s : a, o.textBaseline = t.textBaseline, o.textAlign = t.textAlign;
                                    var e = t.label;
                                    if (B.isArray(e)) for (var i = 0, n = 0; i < e.length; ++i) o.fillText("" + e[i], 0, n), n += 1.5 * r.size; else o.fillText(e, 0, 0);
                                    o.restore()
                                }
                            }), f.display && (d = 0, e = p(f) / 2, _ ? (n = L.left + (L.right - L.left) / 2, u = "bottom" === z.position ? L.bottom - e - t.bottom : L.top + e + t.top) : (n = (i = "left" === z.position) ? L.left + e + t.top : L.right - e - t.top, u = L.top + (L.bottom - L.top) / 2, d = i ? -.5 * Math.PI : .5 * Math.PI), o.save(), o.translate(n, u), o.rotate(d), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = c, o.font = h.font, o.fillText(f.labelString, 0, 0), o.restore()), S.drawBorder && (o.lineWidth = B.valueAtIndexOrDefault(S.lineWidth, 0), o.strokeStyle = B.valueAtIndexOrDefault(S.color, 0), u = L.left, d = L.right, c = L.top, h = L.bottom, f = B.aliasPixel(o.lineWidth), _ ? (c = h = "top" === z.position ? L.bottom : L.top, c += f, h += f) : (u = d = "left" === z.position ? L.right : L.left, u += f, d += f), o.beginPath(), o.moveTo(u, c), o.lineTo(d, h), o.stroke()))
                        }
                    })
                }
            }, {25: 25, 26: 26, 34: 34, 45: 45}], 33: [function (t, e, i) {
                "use strict";
                var n = t(25), o = t(45);
                e.exports = function (i) {
                    i.scaleService = {
                        constructors: {}, defaults: {}, registerScaleType: function (t, e, i) {
                            this.constructors[t] = e, this.defaults[t] = o.clone(i)
                        }, getScaleConstructor: function (t) {
                            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                        }, getScaleDefaults: function (t) {
                            return this.defaults.hasOwnProperty(t) ? o.merge({}, [n.scale, this.defaults[t]]) : {}
                        }, updateScaleDefaults: function (t, e) {
                            this.defaults.hasOwnProperty(t) && (this.defaults[t] = o.extend(this.defaults[t], e))
                        }, addScalesToLayout: function (e) {
                            o.each(e.scales, function (t) {
                                t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, i.layoutService.addBox(e, t)
                            })
                        }
                    }
                }
            }, {25: 25, 45: 45}], 34: [function (t, e, i) {
                "use strict";
                var u = t(45);
                e.exports = {
                    generators: {
                        linear: function (t, e) {
                            var i, n, o = [];
                            n = t.stepSize && 0 < t.stepSize ? t.stepSize : (i = u.niceNum(e.max - e.min, !1), u.niceNum(i / (t.maxTicks - 1), !0));
                            var a = Math.floor(e.min / n) * n, e = Math.ceil(e.max / n) * n;
                            t.min && t.max && t.stepSize && u.almostWhole((t.max - t.min) / t.stepSize, n / 1e3) && (a = t.min, e = t.max);
                            var r = (e - a) / n,
                                r = u.almostEquals(r, Math.round(r), n / 1e3) ? Math.round(r) : Math.ceil(r);
                            o.push(void 0 !== t.min ? t.min : a);
                            for (var s = 1; s < r; ++s) o.push(a + s * n);
                            return o.push(void 0 !== t.max ? t.max : e), o
                        }, logarithmic: function (t, e) {
                            var i, n, o = [], a = u.valueOrDefault,
                                r = a(t.min, Math.pow(10, Math.floor(u.log10(e.min)))), s = Math.floor(u.log10(e.max)),
                                l = Math.ceil(e.max / Math.pow(10, s));
                            for (0 === r ? (i = Math.floor(u.log10(e.minNotZero)), n = Math.floor(e.minNotZero / Math.pow(10, i)), o.push(r), r = n * Math.pow(10, i)) : (i = Math.floor(u.log10(r)), n = Math.floor(r / Math.pow(10, i))); o.push(r), 10 === ++n && (n = 1, ++i), r = n * Math.pow(10, i), i < s || i === s && n < l;) ;
                            t = a(t.max, r);
                            return o.push(t), o
                        }
                    }, formatters: {
                        values: function (t) {
                            return u.isArray(t) ? t : "" + t
                        }, linear: function (t, e, i) {
                            var i = 3 < i.length ? i[2] - i[1] : i[1] - i[0];
                            1 < Math.abs(i) && t !== Math.floor(t) && (i = t - Math.floor(t));
                            var i = u.log10(Math.abs(i));
                            return 0 !== t ? (i = -1 * Math.floor(i), i = Math.max(Math.min(i, 20), 0), t.toFixed(i)) : "0"
                        }, logarithmic: function (t, e, i) {
                            var n = t / Math.pow(10, Math.floor(u.log10(t)));
                            return 0 === t ? "0" : 1 == n || 2 == n || 5 == n || 0 === e || e === i.length - 1 ? t.toExponential() : ""
                        }
                    }
                }
            }, {45: 45}], 35: [function (t, e, i) {
                "use strict";
                var n = t(25), o = t(26), T = t(45);
                n._set("global", {
                    tooltips: {
                        enabled: !0,
                        custom: null,
                        mode: "nearest",
                        position: "average",
                        intersect: !0,
                        backgroundColor: "rgba(0,0,0,0.8)",
                        titleFontStyle: "bold",
                        titleSpacing: 2,
                        titleMarginBottom: 6,
                        titleFontColor: "#fff",
                        titleAlign: "left",
                        bodySpacing: 2,
                        bodyFontColor: "#fff",
                        bodyAlign: "left",
                        footerFontStyle: "bold",
                        footerSpacing: 2,
                        footerMarginTop: 6,
                        footerFontColor: "#fff",
                        footerAlign: "left",
                        yPadding: 6,
                        xPadding: 6,
                        caretPadding: 2,
                        caretSize: 5,
                        cornerRadius: 6,
                        multiKeyBackground: "#fff",
                        displayColors: !0,
                        borderColor: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        callbacks: {
                            beforeTitle: T.noop,
                            title: function (t, e) {
                                var i = "", n = e.labels, e = n ? n.length : 0;
                                return 0 < t.length && ((t = t[0]).xLabel ? i = t.xLabel : 0 < e && t.index < e && (i = n[t.index])), i
                            },
                            afterTitle: T.noop,
                            beforeBody: T.noop,
                            beforeLabel: T.noop,
                            label: function (t, e) {
                                e = e.datasets[t.datasetIndex].label || "";
                                return e && (e += ": "), e += t.yLabel
                            },
                            labelColor: function (t, e) {
                                t = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                                return {borderColor: t.borderColor, backgroundColor: t.backgroundColor}
                            },
                            labelTextColor: function () {
                                return this._options.bodyFontColor
                            },
                            afterLabel: T.noop,
                            afterBody: T.noop,
                            beforeFooter: T.noop,
                            footer: T.noop,
                            afterFooter: T.noop
                        }
                    }
                }), e.exports = function (I) {
                    function c(t, e) {
                        t = T.color(t);
                        return t.alpha(e * t.alpha()).rgbaString()
                    }

                    function r(t, e) {
                        return e && (T.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
                    }

                    function P(t) {
                        var e = n.global, i = T.valueOrDefault;
                        return {
                            xPadding: t.xPadding,
                            yPadding: t.yPadding,
                            xAlign: t.xAlign,
                            yAlign: t.yAlign,
                            bodyFontColor: t.bodyFontColor,
                            _bodyFontFamily: i(t.bodyFontFamily, e.defaultFontFamily),
                            _bodyFontStyle: i(t.bodyFontStyle, e.defaultFontStyle),
                            _bodyAlign: t.bodyAlign,
                            bodyFontSize: i(t.bodyFontSize, e.defaultFontSize),
                            bodySpacing: t.bodySpacing,
                            titleFontColor: t.titleFontColor,
                            _titleFontFamily: i(t.titleFontFamily, e.defaultFontFamily),
                            _titleFontStyle: i(t.titleFontStyle, e.defaultFontStyle),
                            titleFontSize: i(t.titleFontSize, e.defaultFontSize),
                            _titleAlign: t.titleAlign,
                            titleSpacing: t.titleSpacing,
                            titleMarginBottom: t.titleMarginBottom,
                            footerFontColor: t.footerFontColor,
                            _footerFontFamily: i(t.footerFontFamily, e.defaultFontFamily),
                            _footerFontStyle: i(t.footerFontStyle, e.defaultFontStyle),
                            footerFontSize: i(t.footerFontSize, e.defaultFontSize),
                            _footerAlign: t.footerAlign,
                            footerSpacing: t.footerSpacing,
                            footerMarginTop: t.footerMarginTop,
                            caretSize: t.caretSize,
                            cornerRadius: t.cornerRadius,
                            backgroundColor: t.backgroundColor,
                            opacity: 0,
                            legendColorBackground: t.multiKeyBackground,
                            displayColors: t.displayColors,
                            borderColor: t.borderColor,
                            borderWidth: t.borderWidth
                        }
                    }

                    function A(t, e) {
                        var i = t._chart.ctx, n = 2 * e.yPadding, o = 0, a = e.body, r = a.reduce(function (t, e) {
                            return t + e.before.length + e.lines.length + e.after.length
                        }, 0);
                        r += e.beforeBody.length + e.afterBody.length;
                        var s = e.title.length, l = e.footer.length, u = e.titleFontSize, d = e.bodyFontSize,
                            t = e.footerFontSize;
                        n += s * u, n += s ? (s - 1) * e.titleSpacing : 0, n += s ? e.titleMarginBottom : 0, n += r * d, n += r ? (r - 1) * e.bodySpacing : 0, n += l ? e.footerMarginTop : 0, n += l * t, n += l ? (l - 1) * e.footerSpacing : 0;

                        function c(t) {
                            o = Math.max(o, i.measureText(t).width + h)
                        }

                        var h = 0;
                        return i.font = T.fontString(u, e._titleFontStyle, e._titleFontFamily), T.each(e.title, c), i.font = T.fontString(d, e._bodyFontStyle, e._bodyFontFamily), T.each(e.beforeBody.concat(e.afterBody), c), h = e.displayColors ? d + 2 : 0, T.each(a, function (t) {
                            T.each(t.before, c), T.each(t.lines, c), T.each(t.after, c)
                        }), h = 0, i.font = T.fontString(t, e._footerFontStyle, e._footerFontFamily), T.each(e.footer, c), {
                            width: o += 2 * e.xPadding,
                            height: n
                        }
                    }

                    I.Tooltip = o.extend({
                        initialize: function () {
                            this._model = P(this._options), this._lastActive = []
                        }, getTitle: function () {
                            var t = this._options.callbacks, e = t.beforeTitle.apply(this, arguments),
                                i = t.title.apply(this, arguments), n = t.afterTitle.apply(this, arguments),
                                t = r(t = [], e);
                            return t = r(t, i), t = r(t, n)
                        }, getBeforeBody: function () {
                            var t = this._options.callbacks.beforeBody.apply(this, arguments);
                            return T.isArray(t) ? t : void 0 !== t ? [t] : []
                        }, getBody: function (t, i) {
                            var n = this, o = n._options.callbacks, a = [];
                            return T.each(t, function (t) {
                                var e = {before: [], lines: [], after: []};
                                r(e.before, o.beforeLabel.call(n, t, i)), r(e.lines, o.label.call(n, t, i)), r(e.after, o.afterLabel.call(n, t, i)), a.push(e)
                            }), a
                        }, getAfterBody: function () {
                            var t = this._options.callbacks.afterBody.apply(this, arguments);
                            return T.isArray(t) ? t : void 0 !== t ? [t] : []
                        }, getFooter: function () {
                            var t = this._options.callbacks, e = t.beforeFooter.apply(this, arguments),
                                i = t.footer.apply(this, arguments), n = t.afterFooter.apply(this, arguments),
                                t = r(t = [], e);
                            return t = r(t, i), t = r(t, n)
                        }, update: function (t) {
                            var e, i, n, o, a, r, s, l, u, d, c, h, f = this, g = f._options, p = f._model,
                                m = f._model = P(g), v = f._active, b = f._data,
                                x = {xAlign: p.xAlign, yAlign: p.yAlign}, y = {x: p.x, y: p.y},
                                k = {width: p.width, height: p.height}, w = {x: p.caretX, y: p.caretY};
                            if (v.length) {
                                m.opacity = 1;
                                for (var M = [], S = [], w = I.Tooltip.positioners[g.position].call(f, v, f._eventPosition), C = [], _ = 0, D = v.length; _ < D; ++_) C.push((l = v[_], h = c = d = u = void 0, u = l._xScale, d = l._yScale || l._scale, c = l._index, h = l._datasetIndex, {
                                    xLabel: u ? u.getLabelForIndex(c, h) : "",
                                    yLabel: d ? d.getLabelForIndex(c, h) : "",
                                    index: c,
                                    datasetIndex: h,
                                    x: l._model.x,
                                    y: l._model.y
                                }));
                                g.filter && (C = C.filter(function (t) {
                                    return g.filter(t, b)
                                })), g.itemSort && (C = C.sort(function (t, e) {
                                    return g.itemSort(t, e, b)
                                })), T.each(C, function (t) {
                                    M.push(g.callbacks.labelColor.call(f, t, f._chart)), S.push(g.callbacks.labelTextColor.call(f, t, f._chart))
                                }), m.title = f.getTitle(C, b), m.beforeBody = f.getBeforeBody(C, b), m.body = f.getBody(C, b), m.afterBody = f.getAfterBody(C, b), m.footer = f.getFooter(C, b), m.x = Math.round(w.x), m.y = Math.round(w.y), m.caretPadding = g.caretPadding, m.labelColors = M, m.labelTextColors = S, m.dataPoints = C, x = function (t, e) {
                                    var i, n = t._model, o = t._chart, a = t._chart.chartArea, r = "center",
                                        s = "center", l = "nocenter" === t._options?.yAlign ? 11 : 0;
                                    n.y < e.height ? s = "top" : n.y > o.height - e.height - l && (s = "bottom");
                                    var u = (a.left + a.right) / 2, d = (a.top + a.bottom) / 2,
                                        c = "center" === s ? (i = function (t) {
                                            return t <= u
                                        }, function (t) {
                                            return u < t
                                        }) : (i = function (t) {
                                            return t <= e.width / 2
                                        }, function (t) {
                                            return t >= o.width - e.width / 2
                                        }), h = function (t) {
                                            return t + e.width > o.width
                                        }, l = function (t) {
                                            return t - e.width < 0
                                        }, a = function (t) {
                                            return t <= d ? "top" : "bottom"
                                        };
                                    return i(n.x) ? (r = "left", h(n.x) && (r = "center", s = a(n.y))) : c(n.x) && (r = "right", l(n.x) && (r = "center", s = a(n.y))), {
                                        xAlign: (t = t._options).xAlign || r,
                                        yAlign: t.yAlign ? "nocenter" == t.yAlign ? "center" == s ? "top" : s : t.yAlign : s
                                    }
                                }(this, k = A(this, m)), i = k, n = x, o = (e = m).x, a = e.y, r = e.caretSize, s = e.caretPadding, p = e.cornerRadius, e = n.xAlign, n = n.yAlign, r += s, s = p + s, "right" === e ? o -= i.width : "center" === e && (o -= i.width / 2), "top" === n ? a += r : a -= "bottom" === n ? i.height + r : i.height / 2, "center" === n ? "left" === e ? o += r : "right" === e && (o -= r) : "left" === e ? o -= s : "right" === e && (o += s), y = {
                                    x: o,
                                    y: a
                                }
                            } else m.opacity = 0;
                            return m.xAlign = x.xAlign, m.yAlign = x.yAlign, m.x = y.x, m.y = y.y, m.width = k.width, m.height = k.height, m.caretX = w.x, m.caretY = w.y, f._model = m, t && g.custom && g.custom.call(f, m), f
                        }, drawCaret: function (t, e) {
                            var i = this._chart.ctx, n = this._view, n = this.getCaretPosition(t, e, n);
                            i.lineTo(n.x1, n.y1), i.lineTo(n.x2, n.y2), i.lineTo(n.x3, n.y3)
                        }, getCaretPosition: function (t, e, i) {
                            var n, o, a, r, s, l, u = i.caretSize, d = i.cornerRadius, c = i.xAlign, h = i.yAlign,
                                f = t.x, i = t.y, t = e.width, e = e.height;
                            return "center" === h ? (a = i + e / 2, r = "left" === c ? (n = (l = f) - u, s = l, o = a + u, a - u) : (n = (l = f + t) + u, s = l, o = a - u, a + u)) : (s = (l = "left" === c ? (n = f + d + u) - u : "right" === c ? (n = f + t - d - u) - u : (n = f + t / 2) - u, n + u), "top" === h ? (a = (o = i) - u, r = o) : (a = (o = i + e) + u, r = o, u = s, s = l, l = u)), {
                                x1: l,
                                x2: n,
                                x3: s,
                                y1: o,
                                y2: a,
                                y3: r
                            }
                        }, drawTitle: function (t, e, i, n) {
                            var o = e.title;
                            if (o.length) {
                                i.textAlign = e._titleAlign, i.textBaseline = "top";
                                var a, r, s = e.titleFontSize, l = e.titleSpacing;
                                for (i.fillStyle = c(e.titleFontColor, n), i.font = T.fontString(s, e._titleFontStyle, e._titleFontFamily), a = 0, r = o.length; a < r; ++a) i.fillText(o[a], t.x, t.y), t.y += s + l, a + 1 === o.length && (t.y += e.titleMarginBottom - l)
                            }
                        }, drawBody: function (n, o, a, r) {
                            var s = o.bodyFontSize, e = o.bodySpacing, t = o.body;
                            a.textAlign = o._bodyAlign, a.textBaseline = "top", a.font = T.fontString(s, o._bodyFontStyle, o._bodyFontFamily);

                            function l(t) {
                                a.fillText(t, n.x + i, n.y), n.y += s + e
                            }

                            var i = 0;
                            a.fillStyle = c(o.bodyFontColor, r), T.each(o.beforeBody, l);
                            var u = o.displayColors, i = u ? s + 2 : 0;
                            T.each(t, function (t, e) {
                                var i = c(o.labelTextColors[e], r);
                                a.fillStyle = i, T.each(t.before, l), T.each(t.lines, function (t) {
                                    u && (a.fillStyle = c(o.legendColorBackground, r), a.fillRect(n.x, n.y, s, s), a.lineWidth = 1, a.strokeStyle = c(o.labelColors[e].borderColor, r), a.strokeRect(n.x, n.y, s, s), a.fillStyle = c(o.labelColors[e].backgroundColor, r), a.fillRect(n.x + 1, n.y + 1, s - 2, s - 2), a.fillStyle = i), l(t)
                                }), T.each(t.after, l)
                            }), i = 0, T.each(o.afterBody, l), n.y -= e
                        }, drawFooter: function (e, i, n, t) {
                            var o = i.footer;
                            o.length && (e.y += i.footerMarginTop, n.textAlign = i._footerAlign, n.textBaseline = "top", n.fillStyle = c(i.footerFontColor, t), n.font = T.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily), T.each(o, function (t) {
                                n.fillText(t, e.x, e.y), e.y += i.footerFontSize + i.footerSpacing
                            }))
                        }, drawBackground: function (t, e, i, n, o) {
                            i.fillStyle = c(e.backgroundColor, o), i.strokeStyle = c(e.borderColor, o), i.lineWidth = e.borderWidth;
                            var a = e.xAlign, r = e.yAlign, s = t.x, l = t.y, u = n.width, d = n.height,
                                o = e.cornerRadius;
                            i.beginPath(), i.moveTo(s + o, l), "top" === r && this.drawCaret(t, n), i.lineTo(s + u - o, l), i.quadraticCurveTo(s + u, l, s + u, l + o), "center" === r && "right" === a && this.drawCaret(t, n), i.lineTo(s + u, l + d - o), i.quadraticCurveTo(s + u, l + d, s + u - o, l + d), "bottom" === r && this.drawCaret(t, n), i.lineTo(s + o, l + d), i.quadraticCurveTo(s, l + d, s, l + d - o), "center" === r && "left" === a && this.drawCaret(t, n), i.lineTo(s, l + o), i.quadraticCurveTo(s, l, s + o, l), i.closePath(), i.fill(), 0 < e.borderWidth && i.stroke()
                        }, draw: function () {
                            var t, e, i, n, o = this._chart.ctx, a = this._view;
                            0 !== a.opacity && (t = {width: a.width, height: a.height}, e = {
                                x: a.x,
                                y: a.y
                            }, (i = Math.abs(a.opacity < .001) ? 0 : a.opacity) < 1 && (i = 0), n = a.title.length || a.beforeBody.length || a.body.length || a.afterBody.length || a.footer.length, this._options.enabled && n && (this.drawBackground(e, a, o, t, i), e.x += a.xPadding, e.y += a.yPadding, this.drawTitle(e, a, o, i), this.drawBody(e, a, o, i), this.drawFooter(e, a, o, i)))
                        }, handleEvent: function (t) {
                            var e = this, i = e._options, n = !1;
                            return e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chart.getElementsAtEventForMode(t, i.mode, i), (n = !T.arrayEquals(e._active, e._lastActive)) && (e._lastActive = e._active, (i.enabled || i.custom) && (e._eventPosition = {
                                x: t.x,
                                y: t.y
                            }, t = e._model, e.update(!0), e.pivot(), n |= t.x !== e._model.x || t.y !== e._model.y), n)
                        }
                    }), I.Tooltip.positioners = {
                        average: function (t) {
                            if (!t.length) return !1;
                            for (var e = 0, i = 0, n = 0, o = 0, a = t.length; o < a; ++o) {
                                var r = t[o];
                                r && r.hasValue() && (e += (r = r.tooltipPosition()).x, i += r.y, ++n)
                            }
                            return {x: Math.round(e / n), y: Math.round(i / n)}
                        }, nearest: function (t, e) {
                            for (var i, n, o = e.x, a = e.y, r = Number.POSITIVE_INFINITY, s = 0, l = t.length; s < l; ++s) {
                                var u, d = t[s];
                                d && d.hasValue() && (u = d.getCenterPoint(), (u = T.distanceBetweenPoints(e, u)) < r && (r = u, i = d))
                            }
                            return i && (o = (n = i.tooltipPosition()).x, a = n.y), {x: o, y: a}
                        }
                    }
                }
            }, {25: 25, 26: 26, 45: 45}], 36: [function (t, e, i) {
                "use strict";
                var n = t(25), o = t(26), r = t(45);
                n._set("global", {
                    elements: {
                        arc: {
                            backgroundColor: n.global.defaultColor,
                            borderColor: "#fff",
                            borderWidth: 2
                        }
                    }
                }), e.exports = o.extend({
                    inLabelRange: function (t) {
                        var e = this._view;
                        return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                    }, inRange: function (t, e) {
                        var i = this._view;
                        if (i) {
                            for (var e = r.getAngleFromPoint(i, {
                                x: t,
                                y: e
                            }), n = e.angle, e = e.distance, o = i.startAngle, a = i.endAngle; a < o;) a += 2 * Math.PI;
                            for (; a < n;) n -= 2 * Math.PI;
                            for (; n < o;) n += 2 * Math.PI;
                            i = e >= i.innerRadius && e <= i.outerRadius;
                            return o <= n && n <= a && i
                        }
                        return !1
                    }, getCenterPoint: function () {
                        var t = this._view, e = (t.startAngle + t.endAngle) / 2,
                            i = (t.innerRadius + t.outerRadius) / 2;
                        return {x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i}
                    }, getArea: function () {
                        var t = this._view;
                        return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                    }, tooltipPosition: function () {
                        var t = this._view, e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                            i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                        return {x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i}
                    }, draw: function () {
                        var t = this._chart.ctx, e = this._view, i = e.startAngle, n = e.endAngle;
                        t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, n), t.arc(e.x, e.y, e.innerRadius, n, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                    }
                })
            }, {25: 25, 26: 26, 45: 45}], 37: [function (t, e, i) {
                "use strict";
                var n = t(25), o = t(26), d = t(45), c = n.global;
                n._set("global", {
                    elements: {
                        line: {
                            tension: .4,
                            backgroundColor: c.defaultColor,
                            borderWidth: 3,
                            borderColor: c.defaultColor,
                            borderCapStyle: "butt",
                            borderDash: [],
                            borderDashOffset: 0,
                            borderJoinStyle: "miter",
                            capBezierPoints: !0,
                            fill: !0
                        }
                    }
                }), e.exports = o.extend({
                    draw: function () {
                        var t, e, i, n, o = this._view, a = this._chart.ctx, r = o.spanGaps, s = this._children.slice(),
                            l = c.elements.line, u = -1;
                        for (this._loop && s.length && s.push(s[0]), a.save(), a.lineCap = o.borderCapStyle || l.borderCapStyle, a.setLineDash && a.setLineDash(o.borderDash || l.borderDash), a.lineDashOffset = o.borderDashOffset || l.borderDashOffset, a.lineJoin = o.borderJoinStyle || l.borderJoinStyle, a.lineWidth = o.borderWidth || l.borderWidth, a.strokeStyle = o.borderColor || c.defaultColor, a.beginPath(), u = -1, t = 0; t < s.length; ++t) e = s[t], i = d.previousItem(s, t), n = e._view, 0 === t ? n.skip || (a.moveTo(n.x, n.y), u = t) : (i = -1 === u ? i : s[u], n.skip || (u !== t - 1 && !r || -1 === u ? a.moveTo(n.x, n.y) : d.canvas.lineTo(a, i._view, e._view), u = t));
                        a.stroke(), a.restore()
                    }
                })
            }, {25: 25, 26: 26, 45: 45}], 38: [function (t, e, i) {
                "use strict";
                var d = t(25), n = t(26), c = t(45), h = d.global.defaultColor;

                function o(t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2)
                }

                d._set("global", {
                    elements: {
                        point: {
                            radius: 3,
                            pointStyle: "circle",
                            backgroundColor: h,
                            borderColor: h,
                            borderWidth: 1,
                            hitRadius: 1,
                            hoverRadius: 4,
                            hoverBorderWidth: 1
                        }
                    }
                }), e.exports = n.extend({
                    inRange: function (t, e) {
                        var i = this._view;
                        return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
                    }, inLabelRange: o, inXRange: o, inYRange: function (t) {
                        var e = this._view;
                        return !!e && Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2)
                    }, getCenterPoint: function () {
                        var t = this._view;
                        return {x: t.x, y: t.y}
                    }, getArea: function () {
                        return Math.PI * Math.pow(this._view.radius, 2)
                    }, tooltipPosition: function () {
                        var t = this._view;
                        return {x: t.x, y: t.y, padding: t.radius + t.borderWidth}
                    }, draw: function (t) {
                        var e = this._view, i = this._model, n = this._chart.ctx, o = e.pointStyle, a = e.radius,
                            r = e.x, s = e.y, l = c.color, u = 0;
                        e.skip || (n.strokeStyle = e.borderColor || h, n.lineWidth = c.valueOrDefault(e.borderWidth, d.global.elements.point.borderWidth), n.fillStyle = e.backgroundColor || h, void 0 !== t && (i.x < t.left || 1.01 * t.right < i.x || i.y < t.top || 1.01 * t.bottom < i.y) && (i.x < t.left ? u = (r - i.x) / (t.left - i.x) : 1.01 * t.right < i.x ? u = (i.x - r) / (i.x - t.right) : i.y < t.top ? u = (s - i.y) / (t.top - i.y) : 1.01 * t.bottom < i.y && (u = (i.y - s) / (i.y - t.bottom)), u = Math.round(100 * u) / 100, n.strokeStyle = l(n.strokeStyle).alpha(u).rgbString(), n.fillStyle = l(n.fillStyle).alpha(u).rgbString()), c.canvas.drawPoint(n, o, a, r, s))
                    }
                })
            }, {25: 25, 26: 26, 45: 45}], 39: [function (t, e, i) {
                "use strict";
                var n = t(25), t = t(26);

                function r(t) {
                    return void 0 !== t._view.width
                }

                function o(t) {
                    var e, i, n, o, a = t._view;
                    return o = r(t) ? (n = a.width / 2, e = a.x - n, i = a.x + n, n = Math.min(a.y, a.base), Math.max(a.y, a.base)) : (o = a.height / 2, e = Math.min(a.x, a.base), i = Math.max(a.x, a.base), n = a.y - o, a.y + o), {
                        left: e,
                        top: n,
                        right: i,
                        bottom: o
                    }
                }

                n._set("global", {
                    elements: {
                        rectangle: {
                            backgroundColor: n.global.defaultColor,
                            borderColor: n.global.defaultColor,
                            borderSkipped: "bottom",
                            borderWidth: 0
                        }
                    }
                }), e.exports = t.extend({
                    draw: function () {
                        var t, e, i, n, o, a, r, s, l, u = this._chart.ctx, d = this._view, c = d.borderWidth,
                            h = d.horizontal ? (t = d.base, e = d.x, i = d.y - d.height / 2, n = d.y + d.height / 2, r = t < e ? 1 : -1, a = 1, d.borderSkipped || "left") : (t = d.x - d.width / 2, e = d.x + d.width / 2, r = 1, a = (i = d.y) < (n = d.base) ? 1 : -1, d.borderSkipped || "bottom");
                        c && (o = (c = (l = Math.min(Math.abs(t - e), Math.abs(i - n))) < c ? l : c) / 2, s = i + ("top" !== h ? o * a : 0), l = n + ("bottom" !== h ? -o * a : 0), (a = t + ("left" !== h ? o * r : 0)) !== (r = e + ("right" !== h ? -o * r : 0)) && (i = s, n = l), s !== l && (t = a, e = r)), u.beginPath(), u.fillStyle = d.backgroundColor, u.strokeStyle = d.borderColor, u.lineWidth = c;
                        var f = [[t, n], [t, i], [e, i], [e, n]], g = ["bottom", "left", "top", "right"].indexOf(h, 0);

                        function p(t) {
                            return f[(g + t) % 4]
                        }

                        -1 === g && (g = 0);
                        var m = p(0);
                        u.moveTo(m[0], m[1]);
                        for (var v = 1; v < 4; v++) m = p(v), u.lineTo(m[0], m[1]);
                        u.fill(), c && u.stroke()
                    }, height: function () {
                        var t = this._view;
                        return t.base - t.y
                    }, inRange: function (t, e) {
                        var i, n = !1;
                        return n = this._view ? t >= (i = o(this)).left && t <= i.right && e >= i.top && e <= i.bottom : n
                    }, inLabelRange: function (t, e) {
                        if (!this._view) return !1;
                        var i = o(this);
                        return r(this) ? t >= i.left && t <= i.right : e >= i.top && e <= i.bottom
                    }, inXRange: function (t) {
                        var e = o(this);
                        return t >= e.left && t <= e.right
                    }, inYRange: function (t) {
                        var e = o(this);
                        return t >= e.top && t <= e.bottom
                    }, getCenterPoint: function () {
                        var t, e = this._view,
                            e = r(this) ? (t = e.x, (e.y + e.base) / 2) : (t = (e.x + e.base) / 2, e.y);
                        return {x: t, y: e}
                    }, getArea: function () {
                        var t = this._view;
                        return t.width * Math.abs(t.y - t.base)
                    }, tooltipPosition: function () {
                        var t = this._view;
                        return {x: t.x, y: t.y}
                    }
                })
            }, {25: 25, 26: 26}], 40: [function (t, e, i) {
                "use strict";
                e.exports = {}, e.exports.Arc = t(36), e.exports.Line = t(37), e.exports.Point = t(38), e.exports.Rectangle = t(39)
            }, {36: 36, 37: 37, 38: 38, 39: 39}], 41: [function (t, e, i) {
                "use strict";
                t = t(42), i = e.exports = {
                    clear: function (t) {
                        t.ctx.clearRect(0, 0, t.width, t.height)
                    }, roundedRect: function (t, e, i, n, o, a) {
                        var r;
                        a ? (r = Math.min(a, n / 2), a = Math.min(a, o / 2), t.moveTo(e + r, i), t.lineTo(e + n - r, i), t.quadraticCurveTo(e + n, i, e + n, i + a), t.lineTo(e + n, i + o - a), t.quadraticCurveTo(e + n, i + o, e + n - r, i + o), t.lineTo(e + r, i + o), t.quadraticCurveTo(e, i + o, e, i + o - a), t.lineTo(e, i + a), t.quadraticCurveTo(e, i, e + r, i)) : t.rect(e, i, n, o)
                    }, drawPoint: function (t, e, i, n, o) {
                        var a, r, s, l;
                        if (!e || "object" != typeof e || "[object HTMLImageElement]" !== (a = e.toString()) && "[object HTMLCanvasElement]" !== a) {
                            if (!(isNaN(i) || i <= 0)) {
                                switch (e) {
                                    default:
                                        t.beginPath(), t.arc(n, o, i, 0, 2 * Math.PI), t.closePath(), t.fill();
                                        break;
                                    case"triangle":
                                        t.beginPath(), c = (d = 3 * i / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(n - d / 2, o + c / 3), t.lineTo(n + d / 2, o + c / 3), t.lineTo(n, o - 2 * c / 3), t.closePath(), t.fill();
                                        break;
                                    case"rect":
                                        l = 1 / Math.SQRT2 * i, t.beginPath(), t.fillRect(n - l, o - l, 2 * l, 2 * l), t.strokeRect(n - l, o - l, 2 * l, 2 * l);
                                        break;
                                    case"rectRounded":
                                        var u = i / Math.SQRT2, d = n - u, c = o - u, u = Math.SQRT2 * i;
                                        t.beginPath(), this.roundedRect(t, d, c, u, u, i / 2), t.closePath(), t.fill();
                                        break;
                                    case"rectRot":
                                        l = 1 / Math.SQRT2 * i, t.beginPath(), t.moveTo(n - l, o), t.lineTo(n, o + l), t.lineTo(n + l, o), t.lineTo(n, o - l), t.closePath(), t.fill();
                                        break;
                                    case"cross":
                                        t.beginPath(), t.moveTo(n, o + i), t.lineTo(n, o - i), t.moveTo(n - i, o), t.lineTo(n + i, o), t.closePath();
                                        break;
                                    case"crossRot":
                                        t.beginPath(), r = Math.cos(Math.PI / 4) * i, s = Math.sin(Math.PI / 4) * i, t.moveTo(n - r, o - s), t.lineTo(n + r, o + s), t.moveTo(n - r, o + s), t.lineTo(n + r, o - s), t.closePath();
                                        break;
                                    case"star":
                                        t.beginPath(), t.moveTo(n, o + i), t.lineTo(n, o - i), t.moveTo(n - i, o), t.lineTo(n + i, o), r = Math.cos(Math.PI / 4) * i, s = Math.sin(Math.PI / 4) * i, t.moveTo(n - r, o - s), t.lineTo(n + r, o + s), t.moveTo(n - r, o + s), t.lineTo(n + r, o - s), t.closePath();
                                        break;
                                    case"line":
                                        t.beginPath(), t.moveTo(n - i, o), t.lineTo(n + i, o), t.closePath();
                                        break;
                                    case"dash":
                                        t.beginPath(), t.moveTo(n, o), t.lineTo(n + i, o), t.closePath()
                                }
                                t.stroke()
                            }
                        } else t.drawImage(e, n - e.width / 2, o - e.height / 2, e.width, e.height)
                    }, clipArea: function (t, e) {
                        t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                    }, unclipArea: function (t) {
                        t.restore()
                    }, lineTo: function (t, e, i, n) {
                        if (i.steppedLine) return "after" === i.steppedLine && !n || "after" !== i.steppedLine && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y), void t.lineTo(i.x, i.y);
                        i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y)
                    }
                };
                t.clear = i.clear, t.drawRoundedRectangle = function (t) {
                    t.beginPath(), i.roundedRect.apply(i, arguments), t.closePath()
                }
            }, {42: 42}], 42: [function (t, e, i) {
                "use strict";
                var n, d = {
                    noop: function () {
                    }, uid: (n = 0, function () {
                        return n++
                    }), isNullOrUndef: function (t) {
                        return null == t
                    }, isArray: Array.isArray || function (t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    }, isObject: function (t) {
                        return null !== t && "[object Object]" === Object.prototype.toString.call(t)
                    }, valueOrDefault: function (t, e) {
                        return void 0 === t ? e : t
                    }, valueAtIndexOrDefault: function (t, e, i) {
                        return d.valueOrDefault(d.isArray(t) ? t[e] : t, i)
                    }, callback: function (t, e, i) {
                        if (t && "function" == typeof t.call) return t.apply(i, e)
                    }, each: function (t, e, i, n) {
                        var o, a, r;
                        if (d.isArray(t)) if (a = t.length, n) for (o = a - 1; 0 <= o; o--) e.call(i, t[o], o); else for (o = 0; o < a; o++) e.call(i, t[o], o); else if (d.isObject(t)) for (a = (r = Object.keys(t)).length, o = 0; o < a; o++) e.call(i, t[r[o]], r[o])
                    }, arrayEquals: function (t, e) {
                        var i, n, o, a;
                        if (!t || !e || t.length !== e.length) return !1;
                        for (i = 0, n = t.length; i < n; ++i) if (o = t[i], a = e[i], o instanceof Array && a instanceof Array) {
                            if (!d.arrayEquals(o, a)) return !1
                        } else if (o !== a) return !1;
                        return !0
                    }, clone: function (t) {
                        if (d.isArray(t)) return t.map(d.clone);
                        if (d.isObject(t)) {
                            for (var e = {}, i = Object.keys(t), n = i.length, o = 0; o < n; ++o) e[i[o]] = d.clone(t[i[o]]);
                            return e
                        }
                        return t
                    }, _merger: function (t, e, i, n) {
                        var o = e[t], i = i[t];
                        d.isObject(o) && d.isObject(i) ? d.merge(o, i, n) : e[t] = d.clone(i)
                    }, _mergerIf: function (t, e, i) {
                        var n = e[t], i = i[t];
                        d.isObject(n) && d.isObject(i) ? d.mergeIf(n, i) : e.hasOwnProperty(t) || (e[t] = d.clone(i))
                    }, merge: function (t, e, i) {
                        var n, o, a, r, s, l = d.isArray(e) ? e : [e], u = l.length;
                        if (!d.isObject(t)) return t;
                        for (n = (i = i || {}).merger || d._merger, o = 0; o < u; ++o) if (e = l[o], d.isObject(e)) for (s = 0, r = (a = Object.keys(e)).length; s < r; ++s) n(a[s], t, e, i);
                        return t
                    }, mergeIf: function (t, e) {
                        return d.merge(t, e, {merger: d._mergerIf})
                    }, extend: function (i) {
                        for (var t = function (t, e) {
                            i[e] = t
                        }, e = 1, n = arguments.length; e < n; ++e) d.each(arguments[e], t);
                        return i
                    }, inherits: function (t) {
                        function e() {
                            this.constructor = n
                        }

                        var i = this, n = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
                            return i.apply(this, arguments)
                        };
                        return e.prototype = i.prototype, n.prototype = new e, n.extend = d.inherits, t && d.extend(n.prototype, t), n.__super__ = i.prototype, n
                    }
                };
                (e.exports = d).callCallback = d.callback, d.indexOf = function (t, e, i) {
                    return Array.prototype.indexOf.call(t, e, i)
                }, d.getValueOrDefault = d.valueOrDefault, d.getValueAtIndexOrDefault = d.valueAtIndexOrDefault
            }, {}], 43: [function (t, e, i) {
                "use strict";
                var t = t(42), n = {
                    linear: function (t) {
                        return t
                    }, easeInQuad: function (t) {
                        return t * t
                    }, easeOutQuad: function (t) {
                        return -t * (t - 2)
                    }, easeInOutQuad: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    }, easeInCubic: function (t) {
                        return t * t * t
                    }, easeOutCubic: function (t) {
                        return (t -= 1) * t * t + 1
                    }, easeInOutCubic: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    }, easeInQuart: function (t) {
                        return t * t * t * t
                    }, easeOutQuart: function (t) {
                        return -((t -= 1) * t * t * t - 1)
                    }, easeInOutQuart: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                    }, easeInQuint: function (t) {
                        return t * t * t * t * t
                    }, easeOutQuint: function (t) {
                        return (t -= 1) * t * t * t * t + 1
                    }, easeInOutQuint: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                    }, easeInSine: function (t) {
                        return 1 - Math.cos(t * (Math.PI / 2))
                    }, easeOutSine: function (t) {
                        return Math.sin(t * (Math.PI / 2))
                    }, easeInOutSine: function (t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                    }, easeInExpo: function (t) {
                        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                    }, easeOutExpo: function (t) {
                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                    }, easeInOutExpo: function (t) {
                        return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                    }, easeInCirc: function (t) {
                        return 1 <= t ? t : -(Math.sqrt(1 - t * t) - 1)
                    }, easeOutCirc: function (t) {
                        return Math.sqrt(1 - (t -= 1) * t)
                    }, easeInOutCirc: function (t) {
                        return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    }, easeInElastic: function (t) {
                        var e = 1.70158, i = 0, n = 1;
                        return 0 === t ? 0 : 1 === t ? 1 : (i = i || .3, e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * --t) * Math.sin((t - e) * (2 * Math.PI) / i)))
                    }, easeOutElastic: function (t) {
                        var e = 1.70158, i = 0, n = 1;
                        return 0 === t ? 0 : 1 === t ? 1 : (i = i || .3, e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1)
                    }, easeInOutElastic: function (t) {
                        var e = 1.70158, i = 0, n = 1;
                        return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i = i || .45, e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * --t) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * --t) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1)
                    }, easeInBack: function (t) {
                        return t * t * (2.70158 * t - 1.70158)
                    }, easeOutBack: function (t) {
                        return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
                    }, easeInOutBack: function (t) {
                        var e = 1.70158;
                        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                    }, easeInBounce: function (t) {
                        return 1 - n.easeOutBounce(1 - t)
                    }, easeOutBounce: function (t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    }, easeInOutBounce: function (t) {
                        return t < .5 ? .5 * n.easeInBounce(2 * t) : .5 * n.easeOutBounce(2 * t - 1) + .5
                    }
                };
                e.exports = {effects: n}, t.easingEffects = n
            }, {42: 42}], 44: [function (t, e, i) {
                "use strict";
                var r = t(42);
                e.exports = {
                    toLineHeight: function (t, e) {
                        var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                        if (!i || "normal" === i[1]) return 1.2 * e;
                        switch (t = +i[2], i[3]) {
                            case"px":
                                return t;
                            case"%":
                                t /= 100
                        }
                        return e * t
                    }, toPadding: function (t) {
                        var e, i, n, o;
                        return r.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, n = +t.bottom || 0, o = +t.left || 0) : e = i = n = o = +t || 0, {
                            top: e,
                            right: i,
                            bottom: n,
                            left: o,
                            height: e + n,
                            width: o + i
                        }
                    }, resolve: function (t, e, i) {
                        for (var n, o = 0, a = t.length; o < a; ++o) if (void 0 !== (n = t[o]) && (void 0 !== e && "function" == typeof n && (n = n(e)), void 0 !== (n = void 0 !== i && r.isArray(n) ? n[i] : n))) return n
                    }
                }
            }, {42: 42}], 45: [function (t, e, i) {
                "use strict";
                e.exports = t(42), e.exports.easing = t(43), e.exports.canvas = t(41), e.exports.options = t(44)
            }, {41: 41, 42: 42, 43: 43, 44: 44}], 46: [function (t, e, i) {
                e.exports = {
                    acquireContext: function (t) {
                        return (t = t && t.canvas ? t.canvas : t) && t.getContext("2d") || null
                    }
                }
            }, {}], 47: [function (t, e, i) {
                "use strict";
                var f = t(45), g = "$chartjs", p = "chartjs-", m = p + "render-monitor", v = p + "render-animation",
                    b = ["animationstart", "webkitAnimationStart"], r = {
                        touchstart: "mousedown",
                        touchmove: "mousemove",
                        touchend: "mouseup",
                        pointerenter: "mouseenter",
                        pointerdown: "mousedown",
                        pointermove: "mousemove",
                        pointerup: "mouseup",
                        pointerleave: "mouseout",
                        pointerout: "mouseout"
                    };

                function s(t, e) {
                    e = f.getStyle(t, e), e = e && e.match(/^(\d+)(\.\d+)?px$/);
                    return e ? Number(e[1]) : void 0
                }

                var n = !!function () {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function () {
                                t = !0
                            }
                        });
                        window.addEventListener("e", null, e)
                    } catch (t) {
                    }
                    return t
                }() && {passive: !0};

                function x(t, e, i) {
                    t.addEventListener(e, i, n)
                }

                function a(t, e, i) {
                    t.removeEventListener(e, i, n)
                }

                function y(t, e, i, n, o) {
                    return {
                        type: t,
                        chart: e,
                        native: o || null,
                        x: void 0 !== i ? i : null,
                        y: void 0 !== n ? n : null
                    }
                }

                function l(e, t, i) {
                    var n, o, a, r, s, l, u, d, c = e[g] || (e[g] = {}), h = c.resizer = function (t) {
                        var e = document.createElement("div"), i = p + "size-monitor",
                            n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                        e.style.cssText = n, e.className = i, e.innerHTML = '<div class="' + i + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + i + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                        var o = e.childNodes[0], a = e.childNodes[1];

                        function r() {
                            e._reset(), t()
                        }

                        return e._reset = function () {
                            o.scrollLeft = 1e6, o.scrollTop = 1e6, a.scrollLeft = 1e6, a.scrollTop = 1e6
                        }, x(o, "scroll", r.bind(o, "expand")), x(a, "scroll", r.bind(a, "shrink")), e
                    }((n = function () {
                        if (c.resizer) return t(y("resize", i))
                    }, r = !1, function () {
                        a = Array.prototype.slice.call(arguments), o = o || this, r || (r = !0, f.requestAnimFrame.call(window, function () {
                            r = !1, n.apply(o, a)
                        }))
                    }));
                    l = function () {
                        var t;
                        c.resizer && ((t = e.parentNode) && t !== h.parentNode && t.insertBefore(h, t.firstChild), h._reset())
                    }, u = (s = e)[g] || (s[g] = {}), d = u.renderProxy = function (t) {
                        t.animationName === v && l()
                    }, f.each(b, function (t) {
                        x(s, t, d)
                    }), u.reflow = !!s.offsetParent, s.classList.add(m)
                }

                function o(t) {
                    var e, i, n = t[g] || {}, o = n.resizer;
                    delete n.resizer, t = (e = t)[g] || {}, (i = t.renderProxy) && (f.each(b, function (t) {
                        a(e, t, i)
                    }), delete t.renderProxy), e.classList.remove(m), o && o.parentNode && o.parentNode.removeChild(o)
                }

                e.exports = {
                    _enabled: "undefined" != typeof window && "undefined" != typeof document, initialize: function () {
                        var t, e, i = "from{opacity:0.99}to{opacity:1}";
                        e = "@-webkit-keyframes " + v + "{" + i + "}@keyframes " + v + "{" + i + "}." + m + "{-webkit-animation:" + v + " 0.001s;animation:" + v + " 0.001s;}", i = (t = this)._style || document.createElement("style"), t._style || (e = "/* Chart.js */\n" + e, (t._style = i).setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e))
                    }, acquireContext: function (t, e) {
                        "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]);
                        var i, n, o, a, r = (t = t && t.canvas ? t.canvas : t) && t.getContext && t.getContext("2d");
                        return r && r.canvas === t ? (n = e, a = (i = t).style, e = i.getAttribute("height"), t = i.getAttribute("width"), i[g] = {
                            initial: {
                                height: e,
                                width: t,
                                style: {display: a.display, height: a.height, width: a.width}
                            }
                        }, a.display = a.display || "block", null !== t && "" !== t || void 0 !== (o = s(i, "width")) && (i.width = o), null !== e && "" !== e || ("" === i.style.height ? i.height = i.width / (n.options.aspectRatio || 2) : (n = s(i, "height"), void 0 !== o && (i.height = n))), r) : null
                    }, releaseContext: function (t) {
                        var i, n = t.canvas;
                        n[g] && (i = n[g].initial, ["height", "width"].forEach(function (t) {
                            var e = i[t];
                            f.isNullOrUndef(e) ? n.removeAttribute(t) : n.setAttribute(t, e)
                        }), f.each(i.style || {}, function (t, e) {
                            n.style[e] = t
                        }), n.width = n.width, delete n[g])
                    }, addEventListener: function (o, t, a) {
                        var e, i = o.canvas;
                        "resize" !== t ? x(i, t, ((e = a[g] || (a[g] = {})).proxies || (e.proxies = {}))[o.id + "_" + t] = function (t) {
                            var e, i, n;
                            a((i = o, n = r[(e = t).type] || e.type, t = f.getRelativePosition(e, i), y(n, i, t.x, t.y, e)))
                        }) : l(i, a, o)
                    }, removeEventListener: function (t, e, i) {
                        var n = t.canvas;
                        "resize" !== e ? (t = ((i[g] || {}).proxies || {})[t.id + "_" + e]) && a(n, e, t) : o(n)
                    }
                }, f.addEvent = x, f.removeEvent = a
            }, {45: 45}], 48: [function (t, e, i) {
                "use strict";
                var n = t(45), o = t(46), t = t(47), o = t._enabled ? t : o;
                e.exports = n.extend({
                    initialize: function () {
                    }, acquireContext: function () {
                    }, releaseContext: function () {
                    }, addEventListener: function () {
                    }, removeEventListener: function () {
                    }
                }, o)
            }, {45: 45, 46: 46, 47: 47}], 49: [function (t, e, i) {
                "use strict";
                var s = t(25), f = t(40), l = t(45);
                s._set("global", {plugins: {filler: {propagate: !0}}}), e.exports = function () {
                    var h = {
                        dataset: function (t) {
                            var e = t.fill, i = t.chart, t = i.getDatasetMeta(e),
                                n = t && i.isDatasetVisible(e) && t.dataset._children || [], o = n.length || 0;
                            return o ? function (t, e) {
                                return e < o && n[e]._view || null
                            } : null
                        }, boundary: function (t) {
                            var t = t.boundary, e = t ? t.x : null, i = t ? t.y : null;
                            return function (t) {
                                return {x: null === e ? t.x : e, y: null === i ? t.y : i}
                            }
                        }
                    };

                    function b(t) {
                        return t && !t.skip
                    }

                    function x(t, e, i, n, o) {
                        var a;
                        if (n && o) {
                            for (t.moveTo(e[0].x, e[0].y), a = 1; a < n; ++a) l.canvas.lineTo(t, e[a - 1], e[a]);
                            for (t.lineTo(i[o - 1].x, i[o - 1].y), a = o - 1; 0 < a; --a) l.canvas.lineTo(t, i[a], i[a - 1], !0)
                        }
                    }

                    return {
                        id: "filler", afterDatasetsUpdate: function (t, e) {
                            for (var i, n, o, a, r, s, l = (t.data.datasets || []).length, u = e.propagate, d = [], c = 0; c < l; ++c) o = null, (n = (i = t.getDatasetMeta(c)).dataset) && n._model && n instanceof f.Line && (o = {
                                visible: t.isDatasetVisible(c),
                                fill: function (t, e, i) {
                                    var n = (t = t._model || {}).fill;
                                    if (!1 === (n = void 0 === n ? !!t.backgroundColor : n) || null === n) return !1;
                                    if (!0 === n) return "origin";
                                    if (t = parseFloat(n, 10), isFinite(t) && Math.floor(t) === t) return !((t = "-" === n[0] || "+" === n[0] ? e + t : t) === e || t < 0 || i <= t) && t;
                                    switch (n) {
                                        case"bottom":
                                            return "start";
                                        case"top":
                                            return "end";
                                        case"zero":
                                            return "origin";
                                        case"origin":
                                        case"start":
                                        case"end":
                                            return n;
                                        default:
                                            return !1
                                    }
                                }(n, c, l),
                                chart: t,
                                el: n
                            }), i.$filler = o, d.push(o);
                            for (c = 0; c < l; ++c) (o = d[c]) && (o.fill = function (t, e, i) {
                                var n, o = t[e].fill, a = [e];
                                if (!i) return o;
                                for (; !1 !== o && -1 === a.indexOf(o);) {
                                    if (!isFinite(o)) return o;
                                    if (!(n = t[o])) return !1;
                                    if (n.visible) return o;
                                    a.push(o), o = n.fill
                                }
                                return !1
                            }(d, c, u), o.boundary = function (t) {
                                var e = t.el._model || {}, i = t.el._scale || {}, n = t.fill, t = null;
                                if (isFinite(n)) return null;
                                if ("start" === n ? t = void 0 === e.scaleBottom ? i.bottom : e.scaleBottom : "end" === n ? t = void 0 === e.scaleTop ? i.top : e.scaleTop : void 0 !== e.scaleZero ? t = e.scaleZero : i.getBasePosition ? t = i.getBasePosition() : i.getBasePixel && (t = i.getBasePixel()), null != t) {
                                    if (void 0 !== t.x && void 0 !== t.y) return t;
                                    if ("number" == typeof t && isFinite(t)) return {
                                        x: (i = i.isHorizontal()) ? t : null,
                                        y: i ? null : t
                                    }
                                }
                                return null
                            }(o), o.mapper = (s = r = void 0, r = (a = o).fill, !(s = "dataset") === r ? null : (isFinite(r) || (s = "boundary"), h[s](a))))
                        }, beforeDatasetDraw: function (t, e) {
                            var i, n, o, a, r = e.meta.$filler;
                            r && (i = t.ctx, o = (n = r.el)._view, a = n._children || [], e = r.mapper, r = o.backgroundColor || s.global.defaultColor, e && r && a.length && (l.canvas.clipArea(i, t.chartArea), function (t, e, i, n, o, a) {
                                var r, s, l, u, d, c, h = e.length, f = n.spanGaps, g = [], p = [], m = 0, v = 0;
                                for (t.beginPath(), r = 0, s = h + !!a; r < s; ++r) u = i(l = e[c = r % h]._view, c, n), d = b(l), c = b(u), d && c ? (m = g.push(l), v = p.push(u)) : m && v && (f ? (d && g.push(l), c && p.push(u)) : (x(t, g, p, m, v), m = v = 0, g = [], p = []));
                                x(t, g, p, m, v), t.closePath(), t.fillStyle = o, t.fill()
                            }(i, a, e, o, r, n._loop), l.canvas.unclipArea(i)))
                        }
                    }
                }
            }, {25: 25, 40: 40, 45: 45}], 50: [function (t, e, i) {
                "use strict";
                var I = t(25), r = t(26), P = t(45);
                I._set("global", {
                    legend: {
                        display: !0,
                        position: "top",
                        fullWidth: !0,
                        reverse: !1,
                        weight: 1e3,
                        onClick: function (t, e) {
                            var i = e.datasetIndex, n = this.chart, e = n.getDatasetMeta(i);
                            e.hidden = null === e.hidden ? !n.data.datasets[i].hidden : null, n.update()
                        },
                        onHover: null,
                        labels: {
                            boxWidth: 40, padding: 10, generateLabels: function (i) {
                                var t = i.data;
                                return P.isArray(t.datasets) ? t.datasets.map(function (t, e) {
                                    return {
                                        text: t.label,
                                        fillStyle: P.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
                                        hidden: !i.isDatasetVisible(e),
                                        lineCap: t.borderCapStyle,
                                        lineDash: t.borderDash,
                                        lineDashOffset: t.borderDashOffset,
                                        lineJoin: t.borderJoinStyle,
                                        lineWidth: t.borderWidth,
                                        strokeStyle: t.borderColor,
                                        pointStyle: t.pointStyle,
                                        datasetIndex: e
                                    }
                                }, this) : []
                            }
                        }
                    }, legendCallback: function (t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
                        return e.push("</ul>"), e.join("")
                    }
                }), e.exports = function (n) {
                    var o = n.layoutService, t = P.noop;

                    function D(t, e) {
                        return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
                    }

                    function a(t, e) {
                        var i = new n.Legend({ctx: t.ctx, options: e, chart: t});
                        o.configure(t, i, e), o.addBox(t, i), t.legend = i
                    }

                    return n.Legend = r.extend({
                        initialize: function (t) {
                            P.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                        }, beforeUpdate: t, update: function (t, e, i) {
                            var n = this;
                            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                        }, afterUpdate: t, beforeSetDimensions: t, setDimensions: function () {
                            var t = this;
                            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                                width: 0,
                                height: 0
                            }
                        }, afterSetDimensions: t, beforeBuildLabels: t, buildLabels: function () {
                            var e = this, i = e.options.labels || {},
                                t = P.callback(i.generateLabels, [e.chart], e) || [];
                            i.filter && (t = t.filter(function (t) {
                                return i.filter(t, e.chart.data)
                            })), e.options.reverse && t.reverse(), e.legendItems = t
                        }, afterBuildLabels: t, beforeFit: t, fit: function () {
                            var i, n, o, a, r, s, l, u = this, t = u.options, d = t.labels, e = t.display, c = u.ctx,
                                h = I.global, f = P.valueOrDefault, g = f(d.fontSize, h.defaultFontSize),
                                t = f(d.fontStyle, h.defaultFontStyle), h = f(d.fontFamily, h.defaultFontFamily),
                                t = P.fontString(g, t, h), p = u.legendHitBoxes = [], m = u.minSize,
                                h = u.isHorizontal();
                            h ? (m.width = u.maxWidth, m.height = e ? 10 : 0) : (m.width = e ? 10 : 0, m.height = u.maxHeight), e && (c.font = t, h ? (i = u.lineWidths = [0], n = u.legendItems.length ? g + d.padding : 0, c.textAlign = "left", c.textBaseline = "top", P.each(u.legendItems, function (t, e) {
                                t = D(d, g) + g / 2 + c.measureText(t.text).width;
                                i[i.length - 1] + t + d.padding >= u.width && (n += g + d.padding, i[i.length] = u.left), p[e] = {
                                    left: 0,
                                    top: 0,
                                    width: t,
                                    height: g
                                }, i[i.length - 1] += t + d.padding
                            }), m.height += n) : (h = d.padding, o = u.columnWidths = [], a = d.padding, s = r = 0, l = g + h, P.each(u.legendItems, function (t, e) {
                                t = D(d, g) + g / 2 + c.measureText(t.text).width;
                                s + l > m.height && (a += r + d.padding, o.push(r), s = r = 0), r = Math.max(r, t), s += l, p[e] = {
                                    left: 0,
                                    top: 0,
                                    width: t,
                                    height: g
                                }
                            }), a += r, o.push(r), m.width += a)), u.width = m.width, u.height = m.height
                        }, afterFit: t, isHorizontal: function () {
                            return "top" === this.options.position || "bottom" === this.options.position
                        }, draw: function () {
                            var h, f, t, g, e, i, p, m, v, b, x, y = this, k = y.options, w = k.labels, M = I.global,
                                S = M.elements.line, C = y.width, _ = y.lineWidths;
                            k.display && (h = y.ctx, t = (f = P.valueOrDefault)(w.fontColor, M.defaultFontColor), g = f(w.fontSize, M.defaultFontSize), e = f(w.fontStyle, M.defaultFontStyle), i = f(w.fontFamily, M.defaultFontFamily), i = P.fontString(g, e, i), h.textAlign = "left", h.textBaseline = "middle", h.lineWidth = .5, h.strokeStyle = t, h.fillStyle = t, h.font = i, p = D(w, g), m = y.legendHitBoxes, v = y.isHorizontal(), b = v ? {
                                x: y.left + (C - _[0]) / 2,
                                y: y.top + w.padding,
                                line: 0
                            } : {
                                x: y.left + w.padding,
                                y: y.top + w.padding,
                                line: 0
                            }, x = g + w.padding, P.each(y.legendItems, function (t, e) {
                                var i, n, o, a, r, s, l = h.measureText(t.text).width, u = p + g / 2 + l, d = b.x,
                                    c = b.y;
                                v ? C <= d + u && (c = b.y += x, b.line++, d = b.x = y.left + (C - _[b.line]) / 2) : c + x > y.bottom && (d = b.x = d + y.columnWidths[b.line] + w.padding, c = b.y = y.top + w.padding, b.line++), i = d, n = c, o = t, isNaN(p) || p <= 0 || (h.save(), h.fillStyle = f(o.fillStyle, M.defaultColor), h.lineCap = f(o.lineCap, S.borderCapStyle), h.lineDashOffset = f(o.lineDashOffset, S.borderDashOffset), h.lineJoin = f(o.lineJoin, S.borderJoinStyle), h.lineWidth = f(o.lineWidth, S.borderWidth), h.strokeStyle = f(o.strokeStyle, M.defaultColor), a = 0 === f(o.lineWidth, S.borderWidth), h.setLineDash && h.setLineDash(f(o.lineDash, S.borderDash)), k.labels && k.labels.usePointStyle ? (s = (r = g * Math.SQRT2 / 2) / Math.SQRT2, P.canvas.drawPoint(h, o.pointStyle, r, i + s, n + s)) : (a || h.strokeRect(i, n, p, g), h.fillRect(i, n, p, g)), h.restore()), m[e].left = d, m[e].top = c, e = t, t = l, d = p + (l = g / 2) + (d = d), l = c + l, h.fillText(e.text, d, l), e.hidden && (h.beginPath(), h.lineWidth = 2, h.moveTo(d, l), h.lineTo(d + t, l), h.stroke()), v ? b.x += u + w.padding : b.y += x
                            }))
                        }, handleEvent: function (t) {
                            var e = this, i = e.options, n = "mouseup" === t.type ? "click" : t.type, o = !1;
                            if ("mousemove" === n) {
                                if (!i.onHover) return
                            } else {
                                if ("click" !== n) return;
                                if (!i.onClick) return
                            }
                            var a = t.x, r = t.y;
                            if (a >= e.left && a <= e.right && r >= e.top && r <= e.bottom) for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                                var u = s[l];
                                if (a >= u.left && a <= u.left + u.width && r >= u.top && r <= u.top + u.height) {
                                    if ("click" === n) {
                                        i.onClick.call(e, t.native, e.legendItems[l]), o = !0;
                                        break
                                    }
                                    if ("mousemove" === n) {
                                        i.onHover.call(e, t.native, e.legendItems[l]), o = !0;
                                        break
                                    }
                                }
                            }
                            return o
                        }
                    }), {
                        id: "legend", beforeInit: function (t) {
                            var e = t.options.legend;
                            e && a(t, e)
                        }, beforeUpdate: function (t) {
                            var e = t.options.legend, i = t.legend;
                            e ? (P.mergeIf(e, I.global.legend), i ? (o.configure(t, i, e), i.options = e) : a(t, e)) : i && (o.removeBox(t, i), delete t.legend)
                        }, afterEvent: function (t, e) {
                            t = t.legend;
                            t && t.handleEvent(e)
                        }
                    }
                }
            }, {25: 25, 26: 26, 45: 45}], 51: [function (t, e, i) {
                "use strict";
                var x = t(25), r = t(26), y = t(45);
                x._set("global", {
                    title: {
                        display: !1,
                        fontStyle: "bold",
                        fullWidth: !0,
                        lineHeight: 1.2,
                        padding: 10,
                        position: "top",
                        text: "",
                        weight: 2e3
                    }
                }), e.exports = function (n) {
                    var o = n.layoutService, t = y.noop;

                    function a(t, e) {
                        var i = new n.Title({ctx: t.ctx, options: e, chart: t});
                        o.configure(t, i, e), o.addBox(t, i), t.titleBlock = i
                    }

                    return n.Title = r.extend({
                        initialize: function (t) {
                            y.extend(this, t), this.legendHitBoxes = []
                        },
                        beforeUpdate: t,
                        update: function (t, e, i) {
                            var n = this;
                            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                        },
                        afterUpdate: t,
                        beforeSetDimensions: t,
                        setDimensions: function () {
                            var t = this;
                            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                                width: 0,
                                height: 0
                            }
                        },
                        afterSetDimensions: t,
                        beforeBuildLabels: t,
                        buildLabels: t,
                        afterBuildLabels: t,
                        beforeFit: t,
                        fit: function () {
                            var t = this, e = y.valueOrDefault, i = t.options, n = i.display,
                                o = e(i.fontSize, x.global.defaultFontSize), a = t.minSize,
                                e = y.isArray(i.text) ? i.text.length : 1, o = y.options.toLineHeight(i.lineHeight, o),
                                i = n ? e * o + 2 * i.padding : 0;
                            t.isHorizontal() ? (a.width = t.maxWidth, a.height = i) : (a.width = i, a.height = t.maxHeight), t.width = a.width, t.height = a.height
                        },
                        afterFit: t,
                        isHorizontal: function () {
                            var t = this.options.position;
                            return "top" === t || "bottom" === t
                        },
                        draw: function () {
                            var t = this, e = t.ctx, i = y.valueOrDefault, n = t.options, o = x.global;
                            if (n.display) {
                                var a, r, s, l = i(n.fontSize, o.defaultFontSize),
                                    u = i(n.fontStyle, o.defaultFontStyle), d = i(n.fontFamily, o.defaultFontFamily),
                                    c = y.fontString(l, u, d), h = y.options.toLineHeight(n.lineHeight, l),
                                    f = h / 2 + n.padding, g = 0, p = t.top, u = t.left, d = t.bottom, l = t.right;
                                e.fillStyle = i(n.fontColor, o.defaultFontColor), e.font = c, t.isHorizontal() ? (r = u + (l - u) / 2, s = p + f, a = l - u) : (r = "left" === n.position ? u + f : l - f, s = p + (d - p) / 2, a = d - p, g = Math.PI * ("left" === n.position ? -.5 : .5)), e.save(), e.translate(r, s), e.rotate(g), e.textAlign = "center", e.textBaseline = "middle";
                                var m = n.text;
                                if (y.isArray(m)) for (var v = 0, b = 0; b < m.length; ++b) e.fillText(m[b], 0, v, a), v += h; else e.fillText(m, 0, 0, a);
                                e.restore()
                            }
                        }
                    }), {
                        id: "title", beforeInit: function (t) {
                            var e = t.options.title;
                            e && a(t, e)
                        }, beforeUpdate: function (t) {
                            var e = t.options.title, i = t.titleBlock;
                            e ? (y.mergeIf(e, x.global.title), i ? (o.configure(t, i, e), i.options = e) : a(t, e)) : i && (n.layoutService.removeBox(t, i), delete t.titleBlock)
                        }
                    }
                }
            }, {25: 25, 26: 26, 45: 45}], 52: [function (t, e, i) {
                "use strict";
                e.exports = function (t) {
                    var e = t.Scale.extend({
                        getLabels: function () {
                            var t = this.chart.data;
                            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                        }, determineDataLimits: function () {
                            var t, e = this, i = e.getLabels();
                            e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex]
                        }, buildTicks: function () {
                            var t = this, e = t.getLabels();
                            t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                        }, getLabelForIndex: function (t, e) {
                            var i = this, n = i.chart.data, o = i.isHorizontal();
                            return n.yLabels && !o ? i.getRightValue(n.datasets[e].data[t]) : i.ticks[t - i.minIndex]
                        }, getPixelForValue: function (t, e) {
                            var i, n = this, o = n.options.offset,
                                a = Math.max(n.maxIndex + 1 - n.minIndex - (o ? 0 : 1), 1);
                            if ((void 0 !== (i = null != t ? n.isHorizontal() ? t.x : t.y : i) || void 0 !== t && isNaN(e)) && (e = -1 !== (r = n.getLabels().indexOf(t = i || t)) ? r : e), n.isHorizontal()) {
                                var t = n.width / a, r = t * (e - n.minIndex);
                                return o && (r += t / 2), n.left + Math.round(r)
                            }
                            a = n.height / a, e = a * (e - n.minIndex);
                            return o && (e += a / 2), n.top + Math.round(e)
                        }, getPixelForTick: function (t) {
                            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
                        }, getValueForPixel: function (t) {
                            var e = this, i = e.options.offset, n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
                                o = e.isHorizontal(), n = (o ? e.width : e.height) / n;
                            return t -= o ? e.left : e.top, i && (t -= n / 2), (t <= 0 ? 0 : Math.round(t / n)) + e.minIndex
                        }, getBasePixel: function () {
                            return this.bottom
                        }
                    });
                    t.scaleService.registerScaleType("category", e, {position: "bottom"})
                }
            }, {}], 53: [function (t, e, i) {
                "use strict";
                var n = t(25), c = t(45), o = t(34);
                e.exports = function (t) {
                    var e = {position: "left", ticks: {callback: o.formatters.linear}}, i = t.LinearScaleBase.extend({
                        determineDataLimits: function () {
                            var r = this, s = r.options, l = r.chart, t = l.data.datasets, e = r.isHorizontal();

                            function u(t) {
                                return e ? t.xAxisID === r.id : t.yAxisID === r.id
                            }

                            r.min = null, r.max = null;
                            var d, n = s.stacked;
                            void 0 === n && c.each(t, function (t, e) {
                                var i;
                                n || (i = l.getDatasetMeta(e), l.isDatasetVisible(e) && u(i) && void 0 !== i.stack && (n = !0))
                            }), s.stacked || n ? (d = {}, c.each(t, function (t, e) {
                                var i = l.getDatasetMeta(e),
                                    n = [i.type, void 0 === s.stacked && void 0 === i.stack ? e : "", i.stack].join(".");
                                void 0 === d[n] && (d[n] = {positiveValues: [], negativeValues: []});
                                var o = d[n].positiveValues, a = d[n].negativeValues;
                                l.isDatasetVisible(e) && u(i) && c.each(t.data, function (t, e) {
                                    t = +r.getRightValue(t);
                                    isNaN(t) || i.data[e].hidden || (o[e] = o[e] || 0, a[e] = a[e] || 0, s.relativePoints ? o[e] = 100 : t < 0 ? a[e] += t : o[e] += t)
                                })
                            }), c.each(d, function (t) {
                                var e = t.positiveValues.concat(t.negativeValues), t = c.min(e), e = c.max(e);
                                r.min = null === r.min ? t : Math.min(r.min, t), r.max = null === r.max ? e : Math.max(r.max, e)
                            })) : c.each(t, function (t, e) {
                                var i = l.getDatasetMeta(e);
                                l.isDatasetVisible(e) && u(i) && c.each(t.data, function (t, e) {
                                    t = +r.getRightValue(t);
                                    isNaN(t) || i.data[e].hidden || ((null === r.min || t < r.min) && (r.min = t), (null === r.max || t > r.max) && (r.max = t))
                                })
                            }), r.min = isFinite(r.min) && !isNaN(r.min) ? r.min : 0, r.max = isFinite(r.max) && !isNaN(r.max) ? r.max : 1, this.handleTickRangeOptions()
                        }, getTickLimit: function () {
                            var t, e = this.options.ticks;
                            return this.isHorizontal() ? Math.min(e.maxTicksLimit || 11, Math.ceil(this.width / 50)) : (t = c.valueOrDefault(e.fontSize, n.global.defaultFontSize), Math.min(e.maxTicksLimit || 11, Math.ceil(this.height / (2 * t))))
                        }, handleDirectionalChanges: function () {
                            this.isHorizontal() || this.ticks.reverse()
                        }, getLabelForIndex: function (t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        }, getPixelForValue: function (t) {
                            var e, i = this, n = i.start, o = +i.getRightValue(t), t = i.end - n;
                            return e = i.isHorizontal() ? i.left + i.width / t * (o - n) : i.bottom - i.height / t * (o - n), Math.round(e)
                        }, getValueForPixel: function (t) {
                            var e = this, i = e.isHorizontal(), n = i ? e.width : e.height,
                                n = (i ? t - e.left : e.bottom - t) / n;
                            return e.start + (e.end - e.start) * n
                        }, getPixelForTick: function (t) {
                            return this.getPixelForValue(this.ticksAsNumbers[t])
                        }
                    });
                    t.scaleService.registerScaleType("linear", i, e)
                }
            }, {25: 25, 34: 34, 45: 45}], 54: [function (t, e, i) {
                "use strict";
                var o = t(45), n = t(34);
                e.exports = function (e) {
                    var t = o.noop;
                    e.LinearScaleBase = e.Scale.extend({
                        getRightValue: function (t) {
                            return "string" == typeof t ? +t : e.Scale.prototype.getRightValue.call(this, t)
                        }, handleTickRangeOptions: function () {
                            var t = this, e = t.options.ticks;
                            e.beginAtZero && (i = o.sign(t.min), n = o.sign(t.max), i < 0 && n < 0 ? t.max = 0 : 0 < i && 0 < n && (t.min = 0));
                            var i = void 0 !== e.min || void 0 !== e.suggestedMin,
                                n = void 0 !== e.max || void 0 !== e.suggestedMax;
                            void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), i != n && t.min >= t.max && (i ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
                        }, getTickLimit: t, handleDirectionalChanges: t, buildTicks: function () {
                            var t = this, e = t.options.ticks, i = t.getTickLimit(), i = {
                                maxTicks: i = Math.max(2, i),
                                min: e.min,
                                max: e.max,
                                stepSize: o.valueOrDefault(e.fixedStepSize, e.stepSize)
                            }, i = t.ticks = n.generators.linear(i, t);
                            t.handleDirectionalChanges(), t.max = o.max(i), t.min = o.min(i), e.reverse ? (i.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                        }, convertTicksToLabels: function () {
                            var t = this;
                            t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), e.Scale.prototype.convertTicksToLabels.call(t)
                        }
                    })
                }
            }, {34: 34, 45: 45}], 55: [function (t, e, i) {
                "use strict";
                var d = t(45), n = t(34);
                e.exports = function (t) {
                    var e = {position: "left", ticks: {callback: n.formatters.logarithmic}}, i = t.Scale.extend({
                        determineDataLimits: function () {
                            var a = this, r = a.options, t = r.ticks, s = a.chart, e = s.data.datasets,
                                i = d.valueOrDefault, n = a.isHorizontal();

                            function l(t) {
                                return n ? t.xAxisID === a.id : t.yAxisID === a.id
                            }

                            a.min = null, a.max = null, a.minNotZero = null;
                            var u, o = r.stacked;
                            void 0 === o && d.each(e, function (t, e) {
                                var i;
                                o || (i = s.getDatasetMeta(e), s.isDatasetVisible(e) && l(i) && void 0 !== i.stack && (o = !0))
                            }), r.stacked || o ? (u = {}, d.each(e, function (t, e) {
                                var n = s.getDatasetMeta(e),
                                    o = [n.type, void 0 === r.stacked && void 0 === n.stack ? e : "", n.stack].join(".");
                                s.isDatasetVisible(e) && l(n) && (void 0 === u[o] && (u[o] = []), d.each(t.data, function (t, e) {
                                    var i = u[o], t = +a.getRightValue(t);
                                    isNaN(t) || n.data[e].hidden || (i[e] = i[e] || 0, r.relativePoints ? i[e] = 100 : i[e] += t)
                                }))
                            }), d.each(u, function (t) {
                                var e = d.min(t), t = d.max(t);
                                a.min = null === a.min ? e : Math.min(a.min, e), a.max = null === a.max ? t : Math.max(a.max, t)
                            })) : d.each(e, function (t, e) {
                                var i = s.getDatasetMeta(e);
                                s.isDatasetVisible(e) && l(i) && d.each(t.data, function (t, e) {
                                    t = +a.getRightValue(t);
                                    isNaN(t) || i.data[e].hidden || ((null === a.min || t < a.min) && (a.min = t), (null === a.max || t > a.max) && (a.max = t), 0 != t && (null === a.minNotZero || t < a.minNotZero) && (a.minNotZero = t))
                                })
                            }), a.min = i(t.min, a.min), a.max = i(t.max, a.max), a.min === a.max && (0 !== a.min && null !== a.min ? (a.min = Math.pow(10, Math.floor(d.log10(a.min)) - 1), a.max = Math.pow(10, Math.floor(d.log10(a.max)) + 1)) : (a.min = 1, a.max = 10))
                        }, buildTicks: function () {
                            var t = this, e = t.options.ticks, i = {min: e.min, max: e.max},
                                i = t.ticks = n.generators.logarithmic(i, t);
                            t.isHorizontal() || i.reverse(), t.max = d.max(i), t.min = d.min(i), e.reverse ? (i.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                        }, convertTicksToLabels: function () {
                            this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
                        }, getLabelForIndex: function (t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        }, getPixelForTick: function (t) {
                            return this.getPixelForValue(this.tickValues[t])
                        }, getPixelForValue: function (t) {
                            var e, i, n = this, o = n.start, a = +n.getRightValue(t), t = n.options.ticks,
                                n = n.isHorizontal() ? (i = d.log10(n.end) - d.log10(o), 0 == a ? n.left : (e = n.width, n.left + e / i * (d.log10(a) - d.log10(o)))) : (e = n.height, 0 !== o || t.reverse ? 0 === n.end && t.reverse ? (i = d.log10(n.start) - d.log10(n.minNotZero), a === n.end ? n.top : a === n.minNotZero ? n.top + .02 * e : n.top + .02 * e + .98 * e / i * (d.log10(a) - d.log10(n.minNotZero))) : 0 == a ? t.reverse ? n.top : n.bottom : (i = d.log10(n.end) - d.log10(o), e = n.height, n.bottom - e / i * (d.log10(a) - d.log10(o))) : (i = d.log10(n.end) - d.log10(n.minNotZero), a === o ? n.bottom : a === n.minNotZero ? n.bottom - .02 * e : n.bottom - .02 * e - .98 * e / i * (d.log10(a) - d.log10(n.minNotZero))));
                            return n
                        }, getValueForPixel: function (t) {
                            var e, i = this, n = d.log10(i.end) - d.log10(i.start),
                                i = i.isHorizontal() ? (e = i.width, i.start * Math.pow(10, (t - i.left) * n / e)) : (e = i.height, Math.pow(10, (i.bottom - t) * n / e) / i.start);
                            return i
                        }
                    });
                    t.scaleService.registerScaleType("logarithmic", i, e)
                }
            }, {34: 34, 45: 45}], 56: [function (t, e, i) {
                "use strict";
                var a = t(25), m = t(45), s = t(34);
                e.exports = function (e) {
                    var f = a.global, t = {
                        display: !0,
                        animate: !0,
                        position: "chartArea",
                        angleLines: {display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1},
                        gridLines: {circular: !1},
                        ticks: {
                            showLabelBackdrop: !0,
                            backdropColor: "rgba(255,255,255,0.75)",
                            backdropPaddingY: 2,
                            backdropPaddingX: 2,
                            callback: s.formatters.linear
                        },
                        pointLabels: {
                            display: !0, fontSize: 10, callback: function (t) {
                                return t
                            }
                        }
                    };

                    function g(t) {
                        var e = t.options;
                        return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
                    }

                    function p(t) {
                        var e = t.options.pointLabels, i = m.valueOrDefault(e.fontSize, f.defaultFontSize),
                            t = m.valueOrDefault(e.fontStyle, f.defaultFontStyle),
                            e = m.valueOrDefault(e.fontFamily, f.defaultFontFamily);
                        return {size: i, style: t, family: e, font: m.fontString(i, t, e)}
                    }

                    function h(t, e, i, n, o) {
                        return t === n || t === o ? {
                            start: e - i / 2,
                            end: e + i / 2
                        } : t < n || o < t ? {start: e - i - 5, end: e} : {start: e, end: e + i + 5}
                    }

                    function i(t) {
                        var e, i = p(t), n = Math.min(t.height / 2, t.width / 2),
                            o = {r: t.width, l: 0, t: t.height, b: 0}, a = {};
                        t.ctx.font = i.font, t._pointLabelSizes = [];
                        for (var r = g(t), s = 0; s < r; s++) {
                            e = t.getPointPosition(s, n), l = t.ctx, d = i.size, u = t.pointLabels[s] || "", c = m.isArray(u) ? {
                                w: m.longestText(l, l.font, u),
                                h: u.length * d + 1.5 * (u.length - 1) * d
                            } : {w: l.measureText(u).width, h: d}, t._pointLabelSizes[s] = c;
                            var l = t.getIndexAngle(s), u = m.toDegrees(l) % 360, d = h(u, e.x, c.w, 0, 180),
                                c = h(u, e.y, c.h, 90, 270);
                            d.start < o.l && (o.l = d.start, a.l = l), d.end > o.r && (o.r = d.end, a.r = l), c.start < o.t && (o.t = c.start, a.t = l), c.end > o.b && (o.b = c.end, a.b = l)
                        }
                        t.setReductions(n, o, a)
                    }

                    function n(t) {
                        var e = t.ctx, i = m.valueOrDefault, n = t.options, o = n.angleLines, a = n.pointLabels;
                        e.lineWidth = o.lineWidth, e.strokeStyle = o.color;
                        var r = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max), s = p(t);
                        e.textBaseline = "top";
                        for (var l, u, d, c, h = g(t) - 1; 0 <= h; h--) o.display && (d = t.getPointPosition(h, r), e.beginPath(), e.moveTo(t.xCenter, t.yCenter), e.lineTo(d.x, d.y), e.stroke(), e.closePath()), a.display && (l = t.getPointPosition(h, r + 5), c = i(a.fontColor, f.defaultFontColor), e.font = s.font, e.fillStyle = c, u = t.getIndexAngle(h), d = m.toDegrees(u), e.textAlign = 0 === (c = d) || 180 === c ? "center" : c < 180 ? "left" : "right", u = d, c = t._pointLabelSizes[h], d = l, 90 === u || 270 === u ? d.y -= c.h / 2 : (270 < u || u < 90) && (d.y -= c.h), function (t, e, i, n) {
                            if (m.isArray(e)) for (var o = i.y, a = 1.5 * n, r = 0; r < e.length; ++r) t.fillText(e[r], i.x, o), o += a; else t.fillText(e, i.x, i.y)
                        }(e, t.pointLabels[h] || "", l, s.size))
                    }

                    function r(t) {
                        return m.isNumber(t) ? t : 0
                    }

                    var o = e.LinearScaleBase.extend({
                        setDimensions: function () {
                            var t = this, e = t.options, i = e.ticks;
                            t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                            var n = m.min([t.height, t.width]), o = m.valueOrDefault(i.fontSize, f.defaultFontSize);
                            t.drawingArea = e.display ? n / 2 - (o / 2 + i.backdropPaddingY) : n / 2
                        }, determineDataLimits: function () {
                            var n = this, o = n.chart, a = Number.POSITIVE_INFINITY, r = Number.NEGATIVE_INFINITY;
                            m.each(o.data.datasets, function (t, e) {
                                var i;
                                o.isDatasetVisible(e) && (i = o.getDatasetMeta(e), m.each(t.data, function (t, e) {
                                    t = +n.getRightValue(t);
                                    isNaN(t) || i.data[e].hidden || (a = Math.min(t, a), r = Math.max(t, r))
                                }))
                            }), n.min = a === Number.POSITIVE_INFINITY ? 0 : a, n.max = r === Number.NEGATIVE_INFINITY ? 0 : r, n.handleTickRangeOptions()
                        }, getTickLimit: function () {
                            var t = this.options.ticks, e = m.valueOrDefault(t.fontSize, f.defaultFontSize);
                            return Math.min(t.maxTicksLimit || 11, Math.ceil(this.drawingArea / (1.5 * e)))
                        }, convertTicksToLabels: function () {
                            var t = this;
                            e.LinearScaleBase.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t)
                        }, getLabelForIndex: function (t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        }, fit: function () {
                            var t, e;
                            this.options.pointLabels.display ? i(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0))
                        }, setReductions: function (t, e, i) {
                            var n = e.l / Math.sin(i.l), o = Math.max(e.r - this.width, 0) / Math.sin(i.r),
                                a = -e.t / Math.cos(i.t), i = -Math.max(e.b - this.height, 0) / Math.cos(i.b), n = r(n),
                                o = r(o), a = r(a), i = r(i);
                            this.drawingArea = Math.min(Math.round(t - (n + o) / 2), Math.round(t - (a + i) / 2)), this.setCenterPoint(n, o, a, i)
                        }, setCenterPoint: function (t, e, i, n) {
                            var o = this, e = o.width - e - o.drawingArea, t = t + o.drawingArea, i = i + o.drawingArea,
                                n = o.height - n - o.drawingArea;
                            o.xCenter = Math.round((t + e) / 2 + o.left), o.yCenter = Math.round((i + n) / 2 + o.top)
                        }, getIndexAngle: function (t) {
                            return t * (2 * Math.PI / g(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                        }, getDistanceFromCenterForValue: function (t) {
                            var e = this;
                            if (null === t) return 0;
                            var i = e.drawingArea / (e.max - e.min);
                            return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i
                        }, getPointPosition: function (t, e) {
                            t = this.getIndexAngle(t) - Math.PI / 2;
                            return {
                                x: Math.round(Math.cos(t) * e) + this.xCenter,
                                y: Math.round(Math.sin(t) * e) + this.yCenter
                            }
                        }, getPointPositionForValue: function (t, e) {
                            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                        }, getBasePosition: function () {
                            var t = this.min, e = this.max;
                            return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0)
                        }, draw: function () {
                            var o, a, r, t, e, s, l = this, i = l.options, u = i.gridLines, d = i.ticks,
                                c = m.valueOrDefault;
                            i.display && (o = l.ctx, a = this.getIndexAngle(0), r = c(d.fontSize, f.defaultFontSize), t = c(d.fontStyle, f.defaultFontStyle), e = c(d.fontFamily, f.defaultFontFamily), s = m.fontString(r, t, e), m.each(l.ticks, function (t, e) {
                                var i, n;
                                (0 < e || d.reverse) && (i = l.getDistanceFromCenterForValue(l.ticksAsNumbers[e]), u.display && 0 !== e && function (t, e, i, n) {
                                    var o = t.ctx;
                                    if (o.strokeStyle = m.valueAtIndexOrDefault(e.color, n - 1), o.lineWidth = m.valueAtIndexOrDefault(e.lineWidth, n - 1), t.options.gridLines.circular) o.beginPath(), o.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), o.closePath(), o.stroke(); else {
                                        var a = g(t);
                                        if (0 !== a) {
                                            o.beginPath();
                                            var r = t.getPointPosition(0, i);
                                            o.moveTo(r.x, r.y);
                                            for (var s = 1; s < a; s++) r = t.getPointPosition(s, i), o.lineTo(r.x, r.y);
                                            o.closePath(), o.stroke()
                                        }
                                    }
                                }(l, u, i, e), d.display && (n = c(d.fontColor, f.defaultFontColor), o.font = s, o.save(), o.translate(l.xCenter, l.yCenter), o.rotate(a), d.showLabelBackdrop && (e = o.measureText(t).width, o.fillStyle = d.backdropColor, o.fillRect(-e / 2 - d.backdropPaddingX, -i - r / 2 - d.backdropPaddingY, e + 2 * d.backdropPaddingX, r + 2 * d.backdropPaddingY)), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = n, o.fillText(t, 0, -i), o.restore()))
                            }), (i.angleLines.display || i.pointLabels.display) && n(l))
                        }
                    });
                    e.scaleService.registerScaleType("radialLinear", o, t)
                }
            }, {25: 25, 34: 34, 45: 45}], 57: [function (t, e, i) {
                "use strict";
                var b = "function" == typeof (b = t(1)) ? b : window.HXLocal_moment, o = t(25), g = t(45),
                    p = Number.MIN_SAFE_INTEGER || -9007199254740991, m = Number.MAX_SAFE_INTEGER || 9007199254740991,
                    x = {
                        millisecond: {common: !0, size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]},
                        second: {common: !0, size: 1e3, steps: [1, 2, 5, 10, 30]},
                        minute: {common: !0, size: 6e4, steps: [1, 2, 5, 10, 30]},
                        hour: {common: !0, size: 36e5, steps: [1, 2, 3, 6, 12]},
                        day: {common: !0, size: 864e5, steps: [1, 2, 5]},
                        week: {common: !1, size: 6048e5, steps: [1, 2, 3, 4]},
                        month: {common: !0, size: 2628e6, steps: [1, 2, 3]},
                        quarter: {common: !1, size: 7884e6, steps: [1, 2, 3, 4]},
                        year: {common: !0, size: 3154e7}
                    }, y = Object.keys(x);

                function v(t, e) {
                    return t - e
                }

                function k(t) {
                    for (var e, i = {}, n = [], o = 0, a = t.length; o < a; ++o) i[e = t[o]] || (i[e] = !0, n.push(e));
                    return n
                }

                function w(t, e, i, n) {
                    var o = function (t, e, i) {
                            for (var n, o, a, r = 0, s = t.length - 1; 0 <= r && r <= s;) {
                                if (o = t[(n = r + s >> 1) - 1] || null, a = t[n], !o) return {lo: null, hi: a};
                                if (a[e] < i) r = 1 + n; else {
                                    if (!(o[e] > i)) return {lo: o, hi: a};
                                    s = n - 1
                                }
                            }
                            return {lo: a, hi: null}
                        }(t, e, i), a = o.lo ? o.hi ? o.lo : t[t.length - 2] : t[0],
                        o = o.lo ? o.hi || t[t.length - 1] : t[1], t = o[e] - a[e], t = t ? (i - a[e]) / t : 0,
                        t = (o[n] - a[n]) * t;
                    return a[n] + t
                }

                var n = new Map;

                function a(t, e) {
                    var i = e.parser, e = e.parser || e.format;
                    return "function" == typeof i ? i(t) : "string" == typeof t && "string" == typeof e ? b(t, e) : !(t = !(t instanceof b) ? function (t) {
                        let e;
                        return void 0 !== t && (n.has(t) ? e = n.get(t) : (e = b(t), n.set(t, e))), e
                    }(t) : t).isValid() && "function" == typeof e ? e(t) : t
                }

                function M(t, e) {
                    if (g.isNullOrUndef(t)) return null;
                    var i = e.options.time, t = a(e.getRightValue(t), i);
                    return t.isValid() ? (i.round && t.startOf(i.round), t.valueOf()) : null
                }

                function S(t) {
                    for (var e = y.indexOf(t) + 1, i = y.length; e < i; ++e) if (x[y[e]].common) return y[e]
                }

                function C(t, e, i, n) {
                    var o, a = n.time, r = a.unit || function (t, e, i, n) {
                            for (var o, a, r = y.length, s = y.indexOf(t); s < r - 1; ++s) if (a = (o = x[y[s]]).steps ? o.steps[o.steps.length - 1] : m, o.common && Math.ceil((i - e) / (a * o.size)) <= n) return y[s];
                            return y[r - 1]
                        }(a.minUnit, t, e, i), s = S(r), l = g.valueOrDefault(a.stepSize, a.unitStepSize),
                        u = "week" === r && a.isoWeekday, d = n.ticks.major.enabled, c = x[r], n = b(t), h = b(e),
                        f = [], l = l || function (t, e, i, n) {
                            var o, a, r, s = e - t, l = (i = x[i]).size, u = i.steps;
                            if (!u) return Math.ceil(s / ((n || 1) * l));
                            for (o = 0, a = u.length; o < a && (r = u[o], !(Math.ceil(s / (l * r)) <= n)); ++o) ;
                            return r
                        }(t, e, r, i);
                    for (u && (n = n.isoWeekday(u), h = h.isoWeekday(u)), n = n.startOf(u ? "day" : r), (h = h.startOf(u ? "day" : r)) < e && h.add(1, r), o = b(n), d && s && !u && !a.round && (o.startOf(s), o.add(~~((n - o) / (c.size * l)) * l, r)); o < h; o.add(l, r)) f.push(+o);
                    return f.push(+o), f
                }

                e.exports = function (e) {
                    var t = e.Scale.extend({
                        initialize: function () {
                            if (!b) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                            this.mergeTicksOptions(), e.Scale.prototype.initialize.call(this)
                        }, update: function () {
                            var t = this.options;
                            return t.time && t.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), e.Scale.prototype.update.apply(this, arguments)
                        }, getRightValue: function (t) {
                            return t && void 0 !== t.t && (t = t.t), e.Scale.prototype.getRightValue.call(this, t)
                        }, determineDataLimits: function () {
                            for (var t, e, i, n, o = this, a = o.chart, r = o.options.time, s = m, l = p, u = [], d = [], c = [], h = 0, f = a.data.labels.length; h < f; ++h) c.push(M(a.data.labels[h], o));
                            for (h = 0, f = (a.data.datasets || []).length; h < f; ++h) if (a.isDatasetVisible(h)) if (i = a.data.datasets[h].data, g.isObject(i[0])) for (d[h] = [], t = 0, e = i.length; t < e; ++t) n = M(i[t], o), u.push(n), d[h][t] = n; else u.push.apply(u, c), d[h] = c.slice(0); else d[h] = [];
                            c.length && (c = k(c).sort(v), s = Math.min(s, c[0]), l = Math.max(l, c[c.length - 1])), u.length && (u = k(u).sort(v), s = Math.min(s, u[0]), l = Math.max(l, u[u.length - 1])), s = M(r.min, o) || s, l = M(r.max, o) || l, s = s === m ? +b().startOf("day") : s, l = l === p ? +b().endOf("day") + 1 : l, o.min = Math.min(s, l), o.max = Math.max(s + 1, l), o._horizontal = o.isHorizontal(), o._table = [], o._timestamps = {
                                data: u,
                                datasets: d,
                                labels: c
                            }
                        }, buildTicks: function () {
                            var t, e, i, n, o, a, r, s, l, u, d, c = this, h = c.min, f = c.max, g = c.options,
                                p = g.time, m = [], v = [];
                            switch (g.ticks.source) {
                                case"data":
                                    m = c._timestamps.data;
                                    break;
                                case"labels":
                                    m = c._timestamps.labels;
                                    break;
                                default:
                                    m = C(h, f, c.getLabelCapacity(h), g)
                            }
                            for ("ticks" === g.bounds && m.length && (h = m[0], f = m[m.length - 1]), h = M(p.min, c) || h, f = M(p.max, c) || f, t = 0, e = m.length; t < e; ++t) h <= (i = m[t]) && i <= f && v.push(i);
                            return c.min = h, c.max = f, c._unit = p.unit || function (t, e, i, n) {
                                for (var o, a = b.duration(b(n).diff(b(i))), r = y.length - 1; r >= y.indexOf(e); r--) if (o = y[r], x[o].common && a.as(o) >= t.length) return o;
                                return y[e ? y.indexOf(e) : 0]
                            }(v, p.minUnit, c.min, c.max), c._majorUnit = S(c._unit), c._table = function (t, e, i, n) {
                                if ("linear" === n || !t.length) return [{time: e, pos: 0}, {time: i, pos: 1}];
                                for (var o, a, r, s = [], l = [e], u = 0, d = t.length; u < d; ++u) e < (a = t[u]) && a < i && l.push(a);
                                for (l.push(i), u = 0, d = l.length; u < d; ++u) r = l[u + 1], o = l[u - 1], a = l[u], void 0 !== o && void 0 !== r && Math.round((r + o) / 2) === a || s.push({
                                    time: a,
                                    pos: u / (d - 1)
                                });
                                return s
                            }(c._timestamps.data, h, f, g.distribution), c._offsets = (n = c._table, o = v, a = h, r = f, d = u = 0, (p = g).offset && o.length && (p.time.min || (s = 1 < o.length ? o[1] : r, l = o[0], u = (w(n, "time", s, "pos") - w(n, "time", l, "pos")) / 2), p.time.max || (s = o[o.length - 1], l = 1 < o.length ? o[o.length - 2] : a, d = (w(n, "time", s, "pos") - w(n, "time", l, "pos")) / 2)), {
                                left: u,
                                right: d
                            }), function (t, e) {
                                for (var i, n, o = [], a = 0, r = t.length; a < r; ++a) i = t[a], n = !!e && i === +b(i).startOf(e), o.push({
                                    value: i,
                                    major: n
                                });
                                return o
                            }(v, c._majorUnit)
                        }, getLabelForIndex: function (t, e) {
                            var i = this.chart.data, n = this.options.time,
                                o = i.labels && t < i.labels.length ? i.labels[t] : "", t = i.datasets[e].data[t];
                            return g.isObject(t) && (o = this.getRightValue(t)), o = n.tooltipFormat ? a(o, n).format(n.tooltipFormat) : o
                        }, tickFormatFunction: function (t, e, i, n) {
                            var o = this.options, a = t.valueOf(), r = o.time.displayFormats, s = r[this._unit],
                                l = this._majorUnit, u = r[l], d = t.clone().startOf(l).valueOf(), r = o.ticks.major,
                                d = r.enabled && l && u && a === d, s = t.format(n || (d ? u : s)),
                                o = d ? r : o.ticks.minor, o = g.valueOrDefault(o.callback, o.userCallback);
                            return o ? o(s, e, i) : s
                        }, convertTicksToLabels: function (t) {
                            for (var e = [], i = 0, n = t.length; i < n; ++i) e.push(this.tickFormatFunction(b(t[i].value), i, t));
                            return e
                        }, getPixelForOffset: function (t) {
                            var e = this, i = e._horizontal ? e.width : e.height, n = e._horizontal ? e.left : e.top,
                                t = w(e._table, "time", t, "pos");
                            return n + i * (e._offsets.left + t) / (e._offsets.left + 1 + e._offsets.right)
                        }, getPixelForValue: function (t, e, i) {
                            var n = null;
                            if (null !== (n = null === (n = void 0 !== e && void 0 !== i ? this._timestamps.datasets[i][e] : n) ? M(t, this) : n)) return this.getPixelForOffset(n)
                        }, getPixelForTick: function (t) {
                            var e = this.getTicks();
                            return 0 <= t && t < e.length ? this.getPixelForOffset(e[t].value) : null
                        }, getValueForPixel: function (t) {
                            var e = this, i = e._horizontal ? e.width : e.height, n = e._horizontal ? e.left : e.top,
                                i = (i ? (t - n) / i : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                                i = w(e._table, "pos", i, "time");
                            return b(i)
                        }, getLabelWidth: function (t) {
                            var e = this.options.ticks, i = this.ctx.measureText(t).width,
                                n = g.toRadians(e.maxRotation), t = Math.cos(n), n = Math.sin(n);
                            return i * t + g.valueOrDefault(e.fontSize, o.global.defaultFontSize) * n
                        }, getLabelCapacity: function (t) {
                            var e = this, i = e.options.time.displayFormats.millisecond,
                                i = e.tickFormatFunction(b(t), 0, [], i), i = e.getLabelWidth(i),
                                e = e.isHorizontal() ? e.width : e.height;
                            return Math.floor(e / i)
                        }
                    });
                    e.scaleService.registerScaleType("time", t, {
                        position: "bottom",
                        distribution: "linear",
                        bounds: "data",
                        time: {
                            parser: !1,
                            format: !1,
                            unit: !1,
                            round: !1,
                            displayFormat: !1,
                            isoWeekday: !1,
                            minUnit: "millisecond",
                            displayFormats: {
                                millisecond: "h:mm:ss.SSS a",
                                second: "h:mm:ss a",
                                minute: "h:mm a",
                                hour: "hA",
                                day: "MMM D",
                                week: "ll",
                                month: "MMM YYYY",
                                quarter: "[Q]Q - YYYY",
                                year: "YYYY"
                            }
                        },
                        ticks: {autoSkip: !1, source: "auto", major: {enabled: !1}}
                    })
                }
            }, {1: 1, 25: 25, 45: 45}]
        }, {}, [7])(7)
    });
    // TODO: end of deps/chart.js

    // TODO: start of deps/timeline.js?
    var Chart = window.HXLocal_Chart;
    var moment = window.HXLocal_moment;
    const helpers = Chart.helpers;
    const isArray = helpers.isArray;
    var _color = Chart.helpers.color;
    var TimelineConfig = {
        position: "bottom",
        tooltips: {mode: "nearest"},
        adapters: {},
        time: {
            parser: false,
            format: false,
            unit: false,
            round: false,
            displayFormat: false,
            isoWeekday: false,
            minUnit: "millisecond",
            distribution: "linear",
            bounds: "data",
            displayFormats: {
                millisecond: "h:mm:ss.SSS a",
                second: "h:mm:ss a",
                minute: "h:mm a",
                hour: "hA",
                day: "MMM D",
                week: "ll",
                month: "MMM YYYY",
                quarter: "[Q]Q - YYYY",
                year: "YYYY"
            }
        },
        ticks: {autoSkip: true}
    };
    var _tl_momentCache = new Map;

    function tl_momentCache(t) {
        let e;
        if (t !== undefined) {
            if (!_tl_momentCache.has(t)) {
                e = moment(t);
                _tl_momentCache.set(t, e)
            } else e = _tl_momentCache.get(t)
        }
        return e
    }

    function momentify(t, e) {
        var a = e.parser;
        var r = e.parser || e.format;
        if (typeof a === "function") {
            return a(t)
        }
        if (typeof t === "string" && typeof r === "string") {
            return moment(t, r)
        }
        if (!(t instanceof moment)) {
            t = tl_momentCache(t)
        }
        if (t.isValid()) {
            return t
        }
        if (typeof r === "function") {
            return r(t)
        }
        return t
    }

    function parse(t, e) {
        if (helpers.isNullOrUndef(t)) {
            return null
        }
        var a = e.options.time;
        var r = momentify(e.getRightValue(t), a);
        if (!r.isValid()) {
            return null
        }
        if (a.round) {
            r.startOf(a.round)
        }
        return r.valueOf()
    }

    function arrayUnique(t) {
        var e = {};
        var a = [];
        var r, i, o;
        for (r = 0, i = t.length; r < i; ++r) {
            o = t[r];
            if (!e[o]) {
                e[o] = true;
                a.push(o)
            }
        }
        return a
    }

    var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;
    var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
    var TimelineScale = Chart.scaleService.getScaleConstructor("time").extend({
        determineDataLimits: function () {
            var t = this;
            var e = t.chart;
            var a = t.options.time;
            var r = t.chart.options.elements;
            var i = MAX_INTEGER;
            var o = MIN_INTEGER;
            var n = [];
            var s = {};
            var l = [];
            var d, h, c, u, f, m, g;
            for (d = 0, c = (e.data.datasets || []).length; d < c; ++d) {
                if (e.isDatasetVisible(d)) {
                    f = e.data.datasets[d].data;
                    l[d] = [];
                    for (h = 0, u = f.length; h < u; ++h) {
                        m = parse(f[h][r.keyStart], t);
                        g = parse(f[h][r.keyEnd], t);
                        if (m > g) {
                            [m, g] = [g, m]
                        }
                        if (i > m && m) {
                            i = m
                        }
                        if (o < g && g) {
                            o = g
                        }
                        l[d][h] = [m, g, f[h][r.keyValue]];
                        if (Object.prototype.hasOwnProperty.call(s, m)) {
                            s[m] = true;
                            n.push(m)
                        }
                        if (Object.prototype.hasOwnProperty.call(s, g)) {
                            s[g] = true;
                            n.push(g)
                        }
                    }
                } else {
                    l[d] = []
                }
            }
            if (n.size) {
                n.sort(function (t, e) {
                    return t - e
                })
            }
            i = parse(a.min, t) || i;
            o = parse(a.max, t) || o;
            i = i === MAX_INTEGER ? +moment().startOf("day") : i;
            o = o === MIN_INTEGER ? +moment().endOf("day") + 1 : o;
            t.min = Math.min(i, o);
            t.max = Math.max(i + 1, o);
            t._horizontal = t.isHorizontal();
            t._table = [];
            t._timestamps = {data: n, datasets: l, labels: []}
        }
    });
    Chart.scaleService.registerScaleType("timeline", TimelineScale, TimelineConfig);
    Chart.controllers.timeline = Chart.controllers.bar.extend({
        getBarBounds: function (t) {
            var e = t._view;
            var a, r, i, o;
            a = e.x;
            r = e.x + e.width;
            i = e.y;
            o = e.y + e.height;
            return {left: a, top: i, right: r, bottom: o}
        }, update: function (a) {
            var r = this;
            var e = r.getMeta();
            var t = r.chart.options;
            if (t.textPadding || t.minBarWidth || t.showText || t.colorFunction) {
                var i = r.chart.options.elements;
                i.textPadding = t.textPadding || i.textPadding;
                i.minBarWidth = t.minBarWidth || i.minBarWidth;
                i.colorFunction = t.colorFunction || i.colorFunction;
                i.minBarWidth = t.minBarWidth || i.minBarWidth;
                if (Chart._tl_depwarn !== true) {
                    console.log("Timeline Chart: Configuration deprecated. Please check document on Github.");
                    Chart._tl_depwarn = true
                }
            }
            if (e.data.length > 0) {
                let t = r.getRuler(0);
                r.barHeight = r.calculateBarHeight(t) + 4;
                helpers.each(e.data, function (t, e) {
                    r.updateElement(t, e, a)
                }, r)
            }
        }, updateElement: function (t, e, a) {
            var i = this;
            var r = i.getMeta();
            var o = i.getScaleForId(r.xAxisID);
            var n = i.getScaleForId(r.yAxisID);
            var s = i.getDataset();
            var l = s.data[e];
            var d = t.custom || {};
            var h = i.index;
            var c = i.chart.options;
            var u = c.elements || Chart.defaults.timeline.elements;
            var f = u.rectangle;
            var m = u.textPadding;
            var g = u.minBarWidth;
            t._xScale = o;
            t._yScale = n;
            t._datasetIndex = i.index;
            t._index = e;
            var v = u.textFunction(l[u.keyValue], i.chart.data.datasets, h);
            var p = o.getPixelForValue(l[u.keyStart]);
            var x = o.getPixelForValue(l[u.keyEnd]);
            var y = n.getPixelForValue(l, h, h);
            var b = x - p;
            var w = i.barHeight;
            var _ = _color(u.colorFunction(v, l, i.chart.data.datasets, h));
            var k = u.showText;
            var C = u.font;
            if (!C) {
                C = 'bold 12px "Helvetica Neue", Helvetica, Arial, sans-serif'
            }
            var M = y - w / 2;
            t._model = {
                x: a ? p - b : p,
                y: M,
                width: Math.max(b, g),
                height: w,
                base: p + b,
                backgroundColor: _.rgbaString(),
                borderSkipped: d.borderSkipped ? d.borderSkipped : f.borderSkipped,
                borderColor: d.borderColor ? d.borderColor : helpers.getValueAtIndexOrDefault(s.borderColor, e, f.borderColor),
                borderWidth: d.borderWidth ? d.borderWidth : helpers.getValueAtIndexOrDefault(s.borderWidth, e, f.borderWidth),
                label: i.chart.data.labels[e],
                datasetLabel: s.label,
                text: v,
                textColor: _.luminosity() > .5 ? "#333333" : "#ffffff"
            };
            t.draw = function () {
                var t = this._chart.ctx;
                var e = this._view;
                var a = t.globalAlpha;
                var r = t.globalCompositeOperation;
                t.fillStyle = e.backgroundColor;
                t.lineWidth = e.borderWidth;
                t.globalCompositeOperation = "destination-over";
                t.fillRect(e.x, e.y, e.width, e.height);
                t.globalAlpha = .5;
                t.globalCompositeOperation = "source-over";
                t.fillRect(e.x, e.y, e.width, e.height);
                t.globalAlpha = a;
                t.globalCompositeOperation = r;
                if (k) {
                    t.beginPath();
                    var i = t.measureText(e.text);
                    if (i.width > 0 && i.width + m + 2 < e.width) {
                        t.font = C;
                        t.fillStyle = e.textColor;
                        t.lineWidth = 0;
                        t.strokeStyle = e.textColor;
                        t.textBaseline = "middle";
                        t.fillText(e.text, e.x + m, e.y + e.height / 2)
                    }
                    t.fill()
                }
            };
            t.inXRange = function (t) {
                var e = i.getBarBounds(this);
                return t >= e.left && t <= e.right
            };
            t.tooltipPosition = function () {
                var t = this.getCenterPoint();
                return {x: t.x, y: t.y}
            };
            t.getCenterPoint = function () {
                var t = this._view;
                var e, a;
                e = t.x + t.width / 2;
                a = t.y + t.height / 2;
                return {x: e, y: a}
            };
            t.inRange = function (t, e) {
                var a = false;
                if (this._view) {
                    var r = i.getBarBounds(this);
                    a = t >= r.left && t <= r.right && e >= r.top && e <= r.bottom
                }
                return a
            };
            t.pivot()
        }, getBarCount: function () {
            var r = this;
            var i = 0;
            helpers.each(r.chart.data.datasets, function (t, e) {
                var a = r.chart.getDatasetMeta(e);
                if (a.bar && r.chart.isDatasetVisible(e)) {
                    ++i
                }
            }, r);
            return i
        }, draw: function (t) {
            var e, a;
            var r = this.getMeta().data;
            for (e = 0, a = r.length; e < a; e++) {
                r[e].draw()
            }
        }, calculateBarHeight: function (t) {
            var e = this;
            var a = e.getScaleForId(e.getMeta().yAxisID);
            if (a.options.barThickness) {
                return a.options.barThickness
            }
            return a.options.stacked ? t.categoryHeight : t.barHeight
        }, removeHoverStyle: function (t) {
        }, setHoverStyle: function (t) {
        }
    });
    Chart.defaults.timeline = {
        elements: {
            colorFunction: function () {
                return _color("black")
            }, showText: true, textPadding: 4, minBarWidth: 1, keyStart: 0, keyEnd: 1, keyValue: 2
        },
        layout: {padding: {left: 0, right: 0, top: 0, bottom: 0}},
        legend: {display: false},
        scales: {
            xAxes: [{
                type: "timeline",
                position: "bottom",
                distribution: "linear",
                categoryPercentage: .8,
                barPercentage: .9,
                gridLines: {display: true, drawBorder: true, drawTicks: true},
                ticks: {maxRotation: 0},
                unit: "day"
            }],
            yAxes: [{
                type: "category",
                position: "left",
                barThickness: 20,
                categoryPercentage: .8,
                barPercentage: .9,
                offset: true,
                gridLines: {display: true, offsetGridLines: true, drawBorder: true, drawTicks: true}
            }]
        },
        tooltips: {
            callbacks: {
                title: function (t, e) {
                    var a = this._chart.options.elements;
                    var r = e.labels[t[0].datasetIndex];
                    return r
                }, label: function (t, e) {
                    var a = this._chart.options.elements;
                    var r = e.datasets[t.datasetIndex].data[t.index];
                    return [r[a.keyValue], moment(r[a.keyStart]).format("D MMM, HH:mm:ss"), moment(r[a.keyEnd]).format("D MMM, HH:mm:ss")]
                }
            }
        }
    };
    var ArrowlineConfig = {
        position: "bottom",
        tooltips: {mode: "nearest"},
        adapters: {},
        time: {
            parser: false,
            format: false,
            unit: false,
            round: false,
            displayFormat: false,
            isoWeekday: false,
            minUnit: "millisecond",
            distribution: "linear",
            bounds: "data",
            displayFormats: {
                millisecond: "h:mm:ss.SSS a",
                second: "h:mm:ss a",
                minute: "h:mm a",
                hour: "hA",
                day: "MMM D",
                week: "ll",
                month: "MMM YYYY",
                quarter: "[Q]Q - YYYY",
                year: "YYYY"
            }
        },
        ticks: {autoSkip: true}
    };
    var ArrowlineScale = Chart.scaleService.getScaleConstructor("time").extend({
        determineDataLimits: function () {
            var t = this;
            var e = t.chart;
            var a = t.options.time;
            var r = t.chart.options.elements;
            var i = MAX_INTEGER;
            var o = MIN_INTEGER;
            var n = [];
            var s = {};
            var l = [];
            var d, h, c, u, f, m, g;
            for (d = 0, c = (e.data.datasets || []).length; d < c; ++d) {
                if (e.isDatasetVisible(d)) {
                    f = e.data.datasets[d].data;
                    l[d] = [];
                    for (h = 0, u = f.length; h < u; ++h) {
                        m = parse(f[h][r.keyStart], t);
                        g = parse(f[h][r.keyEnd], t);
                        if (m > g) {
                            [m, g] = [g, m]
                        }
                        if (i > m && m) {
                            i = m
                        }
                        if (o < g && g) {
                            o = g
                        }
                        l[d][h] = [m, g, f[h][r.keyValue]];
                        if (Object.prototype.hasOwnProperty.call(s, m)) {
                            s[m] = true;
                            n.push(m)
                        }
                        if (Object.prototype.hasOwnProperty.call(s, g)) {
                            s[g] = true;
                            n.push(g)
                        }
                    }
                } else {
                    l[d] = []
                }
            }
            if (n.size) {
                n.sort(function (t, e) {
                    return t - e
                })
            }
            i = parse(a.min, t) || i;
            o = parse(a.max, t) || o;
            i = i === MAX_INTEGER ? +moment().startOf("day") : i;
            o = o === MIN_INTEGER ? +moment().endOf("day") + 1 : o;
            t.min = Math.min(i, o);
            t.max = Math.max(i + 1, o);
            t._horizontal = t.isHorizontal();
            t._table = [];
            t._timestamps = {data: n, datasets: l, labels: []}
        }
    });
    var arrowImageMap = new Map;
    Chart.scaleService.registerScaleType("arrowline", ArrowlineScale, ArrowlineConfig);
    Chart.controllers.arrowline = Chart.controllers.bar.extend({
        getBarBounds: function (t) {
            var e = t._view;
            var a, r, i, o;
            a = e.x;
            r = e.x + e.width;
            i = e.y;
            o = e.y + e.height;
            return {left: a, top: i, right: r, bottom: o}
        }, update: function (a) {
            var r = this;
            var e = r.getMeta();
            if (e.data.length > 0) {
                let t = r.getRuler(0);
                r.barHeight = r.calculateBarHeight(t) + 4;
                helpers.each(e.data, function (t, e) {
                    r.updateElement(t, e, a)
                }, r)
            }
        }, updateElement: function (t, e, a) {
            var i = this;
            var r = i.getMeta();
            var o = i.getScaleForId(r.xAxisID);
            var n = i.getScaleForId(r.yAxisID);
            var s = i.getDataset();
            var l = s.data[e];
            var d = t.custom || {};
            var h = i.index;
            var c = i.chart.options;
            var u = c.elements || Chart.defaults.timeline.elements;
            var f = u.rectangle;
            var m = u.minBarWidth;
            t._xScale = o;
            t._yScale = n;
            t._datasetIndex = i.index;
            t._index = e;
            var g = l[u.keyValue];
            var v = o.getPixelForValue(l[u.keyStart]);
            var p = o.getPixelForValue(l[u.keyEnd]);
            var x = n.getPixelForValue(l, h, h);
            var y = p - v;
            var b = i.barHeight;
            var w = x - b / 2;
            t._model = {
                x: a ? v - y : v,
                y: w,
                width: Math.max(y, m),
                height: b,
                base: v + y,
                backgroundColor: "#000000",
                borderSkipped: d.borderSkipped ? d.borderSkipped : f.borderSkipped,
                borderColor: d.borderColor ? d.borderColor : helpers.getValueAtIndexOrDefault(s.borderColor, e, f.borderColor),
                borderWidth: d.borderWidth ? d.borderWidth : helpers.getValueAtIndexOrDefault(s.borderWidth, e, f.borderWidth),
                label: i.chart.data.labels[e],
                datasetLabel: s.label,
                text: g,
                textColor: "#ffffff"
            };
            t.getPosition = function (t) {
                return this._view.x + (t ? this._view.width : 0)
            };
            t.getMidPosition = function () {
                return this._view.y + this._view.height / 2
            };
            t.getValue = function () {
                return this._view.text
            };
            t.inXRange = function (t) {
                var e = i.getBarBounds(this);
                return t >= e.left && t <= e.right
            };
            t.tooltipPosition = function () {
                var t = this.getCenterPoint();
                return {x: t.x, y: t.y}
            };
            t.getCenterPoint = function () {
                var t = this._view;
                var e, a;
                e = t.x + t.width / 2;
                a = t.y + t.height / 2;
                return {x: e, y: a}
            };
            t.inRange = function (t, e) {
                var a = false;
                if (this._view) {
                    var r = i.getBarBounds(this);
                    a = t >= r.left && t <= r.right && e >= r.top && e <= r.bottom
                }
                return a
            };
            t.pivot()
        }, getBarCount: function () {
            var r = this;
            var i = 0;
            helpers.each(r.chart.data.datasets, function (t, e) {
                var a = r.chart.getDatasetMeta(e);
                if (a.bar && r.chart.isDatasetVisible(e)) {
                    ++i
                }
            }, r);
            return i
        }, draw: function (t) {
            let o = this.index < this.chart.data.datasets.length ? this.chart.data.datasets[this.index].arrowColor : undefined;
            let e = this.index < this.chart.data.datasets.length ? this.chart.data.datasets[this.index].arrowBackground : undefined;
            if (!arrowImageMap.has(o)) {
                let t = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="${o ?? this.chart.options.elements.arrowColor}" d="M7.03 9.97H11.03V18.89L13.04 18.92V9.97H17.03L12.03 4.97Z" /></svg>`;
                let e = new Blob([t], {type: "image/svg+xml;charset=utf-8"});
                let a = window.URL || window.webkitURL || window;
                let r = a.createObjectURL(e);
                let i = new Image;
                i.onload = () => {
                    arrowImageMap.set(o, i)
                };
                i.src = r
            }
            var r = this.getMeta().data;
            if (!r.length || !arrowImageMap.has(o)) return;
            const i = arrowImageMap.get(o);
            const n = this.chart.chartArea;
            const s = 30;
            const a = Math.ceil((n.right - n.left) / s);
            const l = r[0].getMidPosition();
            if (e) {
                const m = l - i.height / 2;
                this.chart.ctx.fillStyle = e;
                this.chart.ctx.lineWidth = 0;
                this.chart.ctx.fillRect(n.left, m - 3, n.right - n.left, i.height + 6)
            }
            const d = this.chart.ctx.getTransform();
            let h = this.getScaleForId(this.getMeta().xAxisID);
            let c = h.getPixelForValue(moment().startOf("day"));
            let u = c % s;
            let f = 0;
            for (let t = 0; t < a; t++) {
                let a = null;
                const g = t * s + n.left + u;
                const m = l - i.height / 2;
                const v = g + i.width / 2;
                for (; f < r.length; f++) {
                    const g = r[f].getPosition(0);
                    const p = r[f].getPosition(1);
                    if (p > v) {
                        if (v >= g) {
                            a = r[f].getValue() * 1
                        }
                        break
                    }
                }
                if (a != null) {
                    let t = g + i.width / 2;
                    let e = m + i.height / 2;
                    this.chart.ctx.setTransform(d);
                    this.chart.ctx.translate(t, e);
                    this.chart.ctx.rotate((a + 180) / 180 * Math.PI);
                    this.chart.ctx.translate(-t, -e);
                    this.chart.ctx.drawImage(i, g, m, i.width, i.height)
                }
            }
            this.chart.ctx.setTransform(d)
        }, calculateBarHeight: function (t) {
            var e = this;
            var a = e.getScaleForId(e.getMeta().yAxisID);
            if (a.options.barThickness) {
                return a.options.barThickness
            }
            return a.options.stacked ? t.categoryHeight : t.barHeight
        }, removeHoverStyle: function (t) {
        }, setHoverStyle: function (t) {
        }
    });

    Chart.defaults.arrowline = {
        elements: {minBarWidth: 1, keyStart: 0, keyEnd: 1, keyValue: 2},
        layout: {padding: {left: 0, right: 0, top: 0, bottom: 0}},
        legend: {display: false},
        scales: {
            xAxes: [{
                type: "timeline",
                position: "bottom",
                distribution: "linear",
                categoryPercentage: .8,
                barPercentage: .9,
                gridLines: {display: true, drawBorder: true, drawTicks: true},
                ticks: {maxRotation: 0},
                unit: "day"
            }],
            yAxes: [{
                type: "category",
                position: "left",
                barThickness: 20,
                categoryPercentage: .8,
                barPercentage: .9,
                offset: true,
                gridLines: {display: true, offsetGridLines: true, drawBorder: true, drawTicks: true}
            }]
        }
    };

    // TODO: start of md5hx
    !function (n) {
        function e(n, r) {
            var t = n[0], o = n[1], u = n[2], e = n[3], t = c(t, o, u, e, r[0], 7, -680876936),
                e = c(e, t, o, u, r[1], 12, -389564586), u = c(u, e, t, o, r[2], 17, 606105819),
                o = c(o, u, e, t, r[3], 22, -1044525330);
            t = c(t, o, u, e, r[4], 7, -176418897), e = c(e, t, o, u, r[5], 12, 1200080426), u = c(u, e, t, o, r[6], 17, -1473231341), o = c(o, u, e, t, r[7], 22, -45705983), t = c(t, o, u, e, r[8], 7, 1770035416), e = c(e, t, o, u, r[9], 12, -1958414417), u = c(u, e, t, o, r[10], 17, -42063), o = c(o, u, e, t, r[11], 22, -1990404162), t = c(t, o, u, e, r[12], 7, 1804603682), e = c(e, t, o, u, r[13], 12, -40341101), u = c(u, e, t, o, r[14], 17, -1502002290), o = c(o, u, e, t, r[15], 22, 1236535329), t = f(t, o, u, e, r[1], 5, -165796510), e = f(e, t, o, u, r[6], 9, -1069501632), u = f(u, e, t, o, r[11], 14, 643717713), o = f(o, u, e, t, r[0], 20, -373897302), t = f(t, o, u, e, r[5], 5, -701558691), e = f(e, t, o, u, r[10], 9, 38016083), u = f(u, e, t, o, r[15], 14, -660478335), o = f(o, u, e, t, r[4], 20, -405537848), t = f(t, o, u, e, r[9], 5, 568446438), e = f(e, t, o, u, r[14], 9, -1019803690), u = f(u, e, t, o, r[3], 14, -187363961), o = f(o, u, e, t, r[8], 20, 1163531501), t = f(t, o, u, e, r[13], 5, -1444681467), e = f(e, t, o, u, r[2], 9, -51403784), u = f(u, e, t, o, r[7], 14, 1735328473), o = f(o, u, e, t, r[12], 20, -1926607734), t = i(t, o, u, e, r[5], 4, -378558), e = i(e, t, o, u, r[8], 11, -2022574463), u = i(u, e, t, o, r[11], 16, 1839030562), o = i(o, u, e, t, r[14], 23, -35309556), t = i(t, o, u, e, r[1], 4, -1530992060), e = i(e, t, o, u, r[4], 11, 1272893353), u = i(u, e, t, o, r[7], 16, -155497632), o = i(o, u, e, t, r[10], 23, -1094730640), t = i(t, o, u, e, r[13], 4, 681279174), e = i(e, t, o, u, r[0], 11, -358537222), u = i(u, e, t, o, r[3], 16, -722521979), o = i(o, u, e, t, r[6], 23, 76029189), t = i(t, o, u, e, r[9], 4, -640364487), e = i(e, t, o, u, r[12], 11, -421815835), u = i(u, e, t, o, r[15], 16, 530742520), o = i(o, u, e, t, r[2], 23, -995338651), t = a(t, o, u, e, r[0], 6, -198630844), e = a(e, t, o, u, r[7], 10, 1126891415), u = a(u, e, t, o, r[14], 15, -1416354905), o = a(o, u, e, t, r[5], 21, -57434055), t = a(t, o, u, e, r[12], 6, 1700485571), e = a(e, t, o, u, r[3], 10, -1894986606), u = a(u, e, t, o, r[10], 15, -1051523), o = a(o, u, e, t, r[1], 21, -2054922799), t = a(t, o, u, e, r[8], 6, 1873313359), e = a(e, t, o, u, r[15], 10, -30611744), u = a(u, e, t, o, r[6], 15, -1560198380), o = a(o, u, e, t, r[13], 21, 1309151649), t = a(t, o, u, e, r[4], 6, -145523070), e = a(e, t, o, u, r[11], 10, -1120210379), u = a(u, e, t, o, r[2], 15, 718787259), o = a(o, u, e, t, r[9], 21, -343485551), n[0] = g(t, n[0]), n[1] = g(o, n[1]), n[2] = g(u, n[2]), n[3] = g(e, n[3])
        }

        function c(n, r, t, o, u, e, c) {
            return h(r & t | ~r & o, n, r, u, e, c)
        }

        function f(n, r, t, o, u, e, c) {
            return h(r & o | t & ~o, n, r, u, e, c)
        }

        function i(n, r, t, o, u, e, c) {
            return h(r ^ t ^ o, n, r, u, e, c)
        }

        function a(n, r, t, o, u, e, c) {
            return h(t ^ (r | ~o), n, r, u, e, c)
        }

        var h = function (n, r, t, o, u, e) {
            return r = g(g(r, n), g(o, e)), g(r << u | r >>> 32 - u, t)
        }, d = (n.md5hx = function (n) {
            for (var r = n.length, t = [1732584193, -271733879, -1732584194, 271733878], o = 64; o <= n.length; o += 64) e(t, d(n.substring(o - 64, o)));
            n = n.substring(o - 64);
            var u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (o = 0; o < n.length; o++) u[o >> 2] |= n.charCodeAt(o) << (o % 4 << 3);
            if (u[o >> 2] |= 128 << (o % 4 << 3), 55 < o) for (e(t, u), o = 0; o < 16; o++) u[o] = 0;
            return u[14] = 8 * r, e(t, u), t
        }, function (n) {
            for (var r = [], t = 0; t < 64; t += 4) r[t >> 2] = n.charCodeAt(t) + (n.charCodeAt(t + 1) << 8) + (n.charCodeAt(t + 2) << 16) + (n.charCodeAt(t + 3) << 24);
            return r
        }), g = function (n, r) {
            return n + r & 4294967295
        }
    }(window);
    // TODO: end of deps/md5.js

    // TODO: start of deps/FileSaver.js
    var _global = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : this;

    function bom(e, t) {
        return void 0 === t ? t = {autoBom: !1} : "object" != typeof t && (console.warn("Deprecated: Expected third argument to be a object"), t = {autoBom: !t}), t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], {type: e.type}) : e
    }

    function download(e, t, o) {
        var n = new XMLHttpRequest;
        n.open("GET", e), n.responseType = "blob", n.onload = function () {
            saveAs(n.response, t, o)
        }, n.onerror = function () {
            console.error("could not download file")
        }, n.send()
    }

    function corsEnabled(e) {
        var t = new XMLHttpRequest;
        t.open("HEAD", e, !1);
        try {
            t.send()
        } catch (e) {
        }
        return 200 <= t.status && t.status <= 299
    }

    function click(t) {
        try {
            t.dispatchEvent(new MouseEvent("click"))
        } catch (e) {
            var o = document.createEvent("MouseEvents");
            o.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(o)
        }
    }

    var isMacOSWebView = _global.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
        saveAs = _global.saveAs || ("object" != typeof window || window !== _global ? function () {
        } : "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? function (e, t, o) {
            var n = _global.URL || _global.webkitURL, a = document.createElement("a");
            t = t || e.name || "download", a.download = t, a.rel = "noopener", "string" == typeof e ? (a.href = e, a.origin !== location.origin ? corsEnabled(a.href) ? download(e, t, o) : click(a, a.target = "_blank") : click(a)) : (a.href = n.createObjectURL(e), setTimeout(function () {
                n.revokeObjectURL(a.href)
            }, 4e4), setTimeout(function () {
                click(a)
            }, 0))
        } : "msSaveOrOpenBlob" in navigator ? function (e, t, o) {
            var n;
            t = t || e.name || "download", "string" == typeof e ? corsEnabled(e) ? download(e, t, o) : ((n = document.createElement("a")).href = e, n.target = "_blank", setTimeout(function () {
                click(n)
            })) : navigator.msSaveOrOpenBlob(bom(e, o), t)
        } : function (e, t, o, n) {
            if ((n = n || open("", "_blank")) && (n.document.title = n.document.body.innerText = "downloading..."), "string" == typeof e) return download(e, t, o);
            var a, l, i, t = "application/octet-stream" === e.type,
                o = /constructor/i.test(_global.HTMLElement) || _global.safari,
                r = /CriOS\/[\d]+/.test(navigator.userAgent);
            (r || t && o || isMacOSWebView) && "undefined" != typeof FileReader ? ((a = new FileReader).onloadend = function () {
                var e = a.result, e = r ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;");
                n ? n.location.href = e : location = e, n = null
            }, a.readAsDataURL(e)) : (l = _global.URL || _global.webkitURL, i = l.createObjectURL(e), n ? n.location = i : location.href = i, n = null, setTimeout(function () {
                l.revokeObjectURL(i)
            }, 4e4))
        });
    _global.saveAs = saveAs.saveAs = saveAs, "undefined" != typeof module && (module.exports = saveAs);
    // TODO: end of deps/FileSaver.js?

    // TODO: start of src/languages.js
    const lang_en={ui:{label:{type_to_search:"Type to search for an entity to add",error_retreiving:"Could not retrieve available entities !",loading:"Loading available entities..."},popup:{remove_all:"Remove all dynamically added graphs ?",enable_panel:"Enable entity history info panel ?",disable_panel:"Disable entity history info panel ?"},menu:{export_csv:"Export as CSV",export_stats:"Export statistics as CSV",remove_all:"Remove all added graphs",enable_panel:"Enable history info panel",disable_panel:"Disable history info panel"},ranges:{l_hour:"< 1 H",hour:"1 H",n_hours:"%1 H",day:"1 Day",n_days:"%1 Days",week:"1 Week",n_weeks:"%1 Weeks",month:"1 Month",n_months:"%1 Months",year:"1 Year"},interval:{_10m:"10 min",hourly:"Hourly",daily:"Daily",monthly:"Monthly",rawline:"As line"}}};const lang_fr={ui:{label:{type_to_search:"Tapez ici pour rechercher une entité à ajouter",error_retreiving:"Impossible de récupérer les entités !",loading:"Chargement des entités disponibles..."},popup:{remove_all:"Supprimer tous les graphiques ajoutés dynamiquement ?",enable_panel:"Activer le panneau d'historique des entités ?",disable_panel:"Déactiver le panneau d'historique des entités ?"},menu:{export_csv:"Exporter le CSV",export_stats:"Exporter le CSV des statistiques",remove_all:"Supprimer tous les graphiques",enable_panel:"Activer le panneau d'historique",disable_panel:"Déactiver le panneau d'historique"},ranges:{l_hour:"< 1 H",hour:"1 H",n_hours:"%1 H",day:"1 Jour",n_days:"%1 Jours",week:"1 Sem",n_weeks:"%1 Sem",month:"1 Mois",n_months:"%1 Mois",year:"1 An"},interval:{_10m:"10 min",hourly:"Heure",daily:"Journée",monthly:"Mensuel",rawline:"Linéaire"}}};const lang_de={ui:{label:{type_to_search:"Entität suchen oder auswählen",error_retreiving:"Entitäten konnten nicht geladen werden !",loading:"Lade verfügbare Entitäten..."},popup:{remove_all:"Alle dynamisch hinzugefügten Diagramme entfernen ?",enable_panel:"Verlaufsinfo für Entitäten aktivieren ?",disable_panel:"Verlaufsinfo für Entitäten deaktivieren ?"},menu:{export_csv:"Als CSV exportieren",export_stats:"Statistik als CSV exportieren",remove_all:"Alle Diagramme entfernen",enable_panel:"Verlaufsinfo aktivieren",disable_panel:"Verlaufsinfo deaktivieren"},ranges:{l_hour:"< 1 Std",hour:"1 Stunde",n_hours:"%1 Stdn.",day:"1 Tag",n_days:"%1 Tage",week:"1 Woche",n_weeks:"%1 Wo.",month:"1 Monat",n_months:"%1 Monate",year:"1 Jahr"},interval:{_10m:"10 Min",hourly:"Stündlich",daily:"Täglich",monthly:"Monatlich",rawline:"Als Linie"}}};const lang_es={ui:{label:{type_to_search:"Seleccionar entidad a añadir",error_retreiving:"No se encuentran entidades disponibles!",loading:"Cargando entidades ..."},popup:{remove_all:"Borrar gráficos añadidos dinámicamente ?",enable_panel:"Habilitar panel info historia entidades ?",disable_panel:"Deshabilitar panel info historia entidades ?"},menu:{export_csv:"Exportar como CSV",export_stats:"Exportar estadísticas como CSV",remove_all:"Borrar gráficos añadidos",enable_panel:"Activar panel info historia",disable_panel:"Desactivar panel info historia"},ranges:{l_hour:"< 1 H",hour:"1 H",n_hours:"%1 H",day:"1 Día",n_days:"%1 Días",week:"1 Sem.",n_weeks:"%1 Sem.",month:"1 Mes",n_months:"%1 Meses",year:"1 Año"},interval:{_10m:"10 min",hourly:"Horario",daily:"Diario",monthly:"Mensual",rawline:"Línea"}}};const lang_nl={ui:{label:{type_to_search:"Typ om te zoeken naar een entiteit om toe te voegen",error_retreiving:"Kan beschikbare entiteiten niet ophalen !",loading:"Beschikbare entiteiten laden..."},popup:{remove_all:"Alle dynamisch toegevoegde grafieken verwijderen ?",enable_panel:"Schakel het informatiepaneel over de geschiedenis van de entiteit in ?",disable_panel:"Schakel het informatiepaneel over de geschiedenis van de entiteit uit ?"},menu:{export_csv:"Exporteren als CSV",export_stats:"Exporteer statistieken als CSV",remove_all:"Verwijder alle toegevoegde grafieken",enable_panel:"Deelvenster Geschiedenisinfo inschakelen",disable_panel:"Schakel geschiedenisinfopaneel uit"},ranges:{l_hour:"< 1 u",hour:"1 u",n_hours:"%1 u",day:"1 Dag",n_days:"%1 Dagen",week:"1 Week",n_weeks:"%1 Weken",month:"1 Maand",n_months:"%1 Maand",year:"1 Jaar"},interval:{_10m:"10 minuten",hourly:"Per uur",daily:"Dagelijks",monthly:"Maandelijks",rawline:"Lijngrafiek"}}};const lang_pl={ui:{label:{type_to_search:"Wpisz, aby wyszukać i dodać encję",error_retreiving:"Nie można pobrać dostępnych elementów !",loading:"Ładowanie dostępnych elementów..."},popup:{remove_all:"Usuń wszystkie wykresy ?",enable_panel:"Włącz panel informacji o historii ?",disable_panel:"Wyłącz panel informacji o historii ?"},menu:{export_csv:"Eksportuj w CSV",export_stats:"Eksportuj statystyki w CSV",remove_all:"Usuń wszystkie dodane grafiki",enable_panel:"Włącz panel historia",disable_panel:"Wyłącz panel historia"},ranges:{l_hour:"< 1 H",hour:"1 H",n_hours:"%1 H",day:"1 Dzień",n_days:"%1 Dni",week:"1 Tydzień",n_weeks:"%1 Tyg",month:"1 Miesiąc",n_months:"%1 Mies",year:"1 Rok"},interval:{_10m:"10 minut",hourly:"Godzina",daily:"Dzień",monthly:"Miesiąc",rawline:"As line"}}};const lang_sv={ui:{label:{type_to_search:"Skriv för att söka efter en enhet att lägga till",error_retreiving:"Kunde inte hämta tillgängliga enheter!",loading:"Laddar tillgängliga enheter..."},popup:{remove_all:"Ta bort alla dynamiskt tillagda grafer?",enable_panel:"Aktivera panelen för enhetens historikinformation?",disable_panel:"Inaktivera panelen för enhetens historikinformation?"},menu:{export_csv:"Exportera som CSV",export_stats:"Exportera statistik som CSV",remove_all:"Ta bort alla tillagda grafer",enable_panel:"Aktivera historikinfo-panelen",disable_panel:"Inaktivera historikinfo-panelen"},ranges:{l_hour:"< 1 tim",hour:"1 tim",n_hours:"%1 timmar",day:"1 dag",n_days:"%1 dagar",week:"1 vecka",n_weeks:"%1 veckor",month:"1 månad",n_months:"%1 månader",year:"1 år"},interval:{_10m:"10 min",hourly:"Varje timme",daily:"Varje dag",monthly:"Varje månad",rawline:"As line"}}};const lang_da={ui:{label:{type_to_search:"Indtast for at søge efter en entitet, der skal tilføjes",error_retreiving:"Fejl ved indlæsning af entiteter !",loading:"Indlæser tilgængelige entiteter..."},popup:{remove_all:"Fjern alle dynamisk tilføjede grafer ?",enable_panel:"Brug historik graf som standard ?",disable_panel:"Fravælg historik graf som standard ?"},menu:{export_csv:"Eksporter som CSV",export_stats:"Eksporter statistik som CSV",remove_all:"Fjern alle tilføjede grafer ",enable_panel:"Brug historik graf som standard",disable_panel:"Deaktivér historik graf som standard"},ranges:{l_hour:"< 1 T",hour:"1 T",n_hours:"%1 T",day:"1 dag",n_days:"%1 dage",week:"1 uge",n_weeks:"%1 uger",month:"1 måned",n_months:"%1 måneder",year:"1 år"},interval:{_10m:"10 min",hourly:"Hver time",daily:"Daglig",monthly:"Månedlig",rawline:"As line"}}};const lang_sk={ui:{label:{type_to_search:"Napíšte, ak chcete vyhľadať entitu, ktorú chcete pridať",error_retreiving:"Nepodarilo sa načítať dostupné entity !",loading:"Načitavanie dostupných entít..."},popup:{remove_all:"Odstrániť všetky dynamicky pridané grafy ?",enable_panel:"Povoliť informačný panel histórie ?",disable_panel:"Zakázať informačný panel histórie ?"},menu:{export_csv:"Export ako CSV",export_stats:"Export štatistiky ako CSV",remove_all:"Odstrániť všetky pridané grafy",enable_panel:"Povoliť informačný panel histórie",disable_panel:"Zakázať informačný panel histórie"},ranges:{l_hour:"< 1 H",hour:"1 H",n_hours:"%1 H",day:"1 deň",n_days:"%1 dní",week:"1 týždeň",n_weeks:"%1 týždňov",month:"1 mesiac",n_months:"%1 mesiacov",year:"1 rok"},interval:{_10m:"10 min",hourly:"Hodinovo",daily:"Denne",monthly:"Mesačné",rawline:"Ako čiara"}}};const lang_ru={ui:{label:{type_to_search:"Начните поиск объекта для добавления",error_retreiving:"Невозможно загрузить доступные объекты!",loading:"Загрузка доступных объектов..."},popup:{remove_all:"Очистить все добавленные графики?",enable_panel:"Активировать историю в панели информации",disable_panel:"Деактивировать историю в панели информации"},menu:{export_csv:"Экспортировать как CSV",export_stats:"Экспортировать статистику как CSV",remove_all:"Очистить все добавленные графики",enable_panel:"Активировать историю в панели информации",disable_panel:"Деактивировать историю в панели информации"},ranges:{l_hour:"< 1 Ч",hour:"1 Ч",n_hours:"%1 Ч",day:"1 День",n_days:"%1 Дн",week:"1 Неделя",n_weeks:"%1 Нед",month:"1 Месяц",n_months:"%1 Мес",year:"1 Год"},interval:{_10m:"10 мин",hourly:"По часам",daily:"По дням",monthly:"По месяцам",rawline:"Линия"}}};var languages={en:lang_en,fr:lang_fr,de:lang_de,es:lang_es,nl:lang_nl,pl:lang_pl,sv:lang_sv,da:lang_da,sk:lang_sk,ru:lang_ru};var language="en";function setLanguage(e){language="en";let a=e.replace("-","_").split("_");if(a&&a.length>0&&languages[a[0]])language=a[0]}function i18n(e,a){let n=e.split(".").reduce((e,a)=>e[a],languages[language]);if(n===undefined)n=e.split(".").reduce((e,a)=>e[a],languages["en"]);if(n&&a)n=n.replace("%1",a);return n}
    // TODO: End of src/languages.js


    // TODO: Start of src/history-explorer-card.js
    const Version="1.0.51";var isMobile=navigator.appVersion.indexOf("Mobi")>-1||navigator.userAgent.indexOf("HomeAssistant")>-1;const ranges=[1,2,6,12,24,48,72,96,120,144,168,336,504,720,2184,4368,8760];var panstate={};panstate.mx=0;panstate.lx=0;panstate.my=0;panstate.ly=0;panstate.tc=0;panstate.g=null;panstate.overlay=null;panstate.st0=null;panstate.st1=null;let infoPanelEnabled=!!JSON.parse(window.localStorage.getItem("history-explorer-info-panel"));class HistoryCardState{constructor(){this.colorMap=new Map;this.timeCache=new Map;this.stateTexts=new Map;this.stateMap=new Map;this.csvExporter=new HistoryCSVExporter;this.statsExporter=new StatisticsCSVExporter;this.stateColors=stateColors;this.stateColorsDark=stateColorsDark;this.ui={};this.ui.dateSelector=[];this.ui.rangeSelector=[];this.ui.zoomButton=[];this.ui.inputField=[];this.ui.darkMode=false;this.ui.spinOverlay=null;this.ui.optionStyle="";this.ui.hideHeader=false;this.ui.hideInterval=false;this.ui.hideSelector=false;this.ui.stickyTools=0;this.ui.wideInterval=false;this.i18n={};this.i18n.valid=false;this.i18n.styleDateSelector="";this.i18n.styleTimeTicks="";this.i18n.styleDateTicks="";this.i18n.styleDateTimeTooltip="";this.pconfig={};this.pconfig.graphLabelColor="#333";this.pconfig.graphGridColor="#00000000";this.pconfig.cursorLineColor="#00000000";this.pconfig.lineGraphHeight=250;this.pconfig.barGraphHeight=150;this.pconfig.timelineBarHeight=24;this.pconfig.timelineBarSpacing=40;this.pconfig.labelAreaWidth=65;this.pconfig.labelsVisible=true;this.pconfig.cursorMode="auto";this.pconfig.cursorTypes=["all"];this.pconfig.showTooltipColors=[true,true];this.pconfig.tooltipSize="auto";this.pconfig.tooltipShowDuration=false;this.pconfig.tooltipShowLabel=true;this.pconfig.tooltipStateTextMode="raw";this.pconfig.closeButtonColor=undefined;this.pconfig.customStateColors=undefined;this.pconfig.colorSeed=137;this.pconfig.stateTextMode="raw";this.pconfig.graphConfig=[];this.pconfig.entityOptions=undefined;this.pconfig.lockAllGraphs=false;this.pconfig.combineSameUnits=false;this.pconfig.recordedEntitiesOnly=false;this.pconfig.filterEntities=undefined;this.pconfig.decimation="fast";this.pconfig.roundingPrecision=2;this.pconfig.defaultLineMode=undefined;this.pconfig.defaultLineWidth=undefined;this.pconfig.nextDefaultColor=0;this.pconfig.showUnavailable=true;this.pconfig.showCurrentValues=false;this.pconfig.axisAddMarginMin=true;this.pconfig.axisAddMarginMax=true;this.pconfig.defaultTimeRange="24";this.pconfig.defaultTimeOffset=undefined;this.pconfig.timeTickDensity="high";this.pconfig.timeTickOverride=undefined;this.pconfig.timeTickShortDate=false;this.pconfig.refreshEnabled=false;this.pconfig.refreshInterval=undefined;this.pconfig.exportSeparator=undefined;this.pconfig.exportTimeFormat=undefined;this.pconfig.exportStatsPeriod=undefined;this.pconfig.entities=[];this.pconfig.infoPanelConfig=null;this.loader={};this.loader.startTime=0;this.loader.endTime=0;this.loader.startIndex=-1;this.loader.endIndex=-1;this.loader.loadingStats=false;this.state={};this.state.drag=false;this.state.selecting=false;this.state.updateCanvas=null;this.state.loading=false;this.state.zoomMode=false;this.state.altGraph=null;this.state.autoScroll=false;this.activeRange={};this.activeRange.timeRangeHours=24;this.activeRange.timeRangeMinutes=0;this.activeRange.tickStepSize=1;this.activeRange.tickStepUnit="hour";this.activeRange.dataClusterSize=0;this.statistics={};this.statistics.enabled=false;this.statistics.retention=undefined;this.statistics.mode="";this.statistics.period="hour";this.id="";this.graphs=[];this.g_id=0;this.firstDynamicId=0;this.startTime;this.endTime;this.limitSlot=0;this.cacheSize=365+1;this.cache=[];this._hass=null;this._this=null;this.version=[];this.contentValid=false;this.entitiesPopulated=false;this.iid=0;this.tid=0;this.lastWidth=0;this.defocusCall=this.entitySelectorDefocus.bind(this);this.databaseCallback=null}getNextDefaultColor(){let t=this.pconfig.nextDefaultColor++;this.pconfig.nextDefaultColor=this.pconfig.nextDefaultColor%defaultColors.length;return defaultColors[t]}getStateColor(t,e,i,s){let a;if(s===undefined||s===null||s==="")s="unknown";if(i){const n=i+"."+s;a=this.pconfig.customStateColors?.[n];if(!a)a=this.pconfig.customStateColors?.[i]}if(!a&&e){const n=e+"."+s;a=this.pconfig.customStateColors?.[n];if(!a)a=this.pconfig.customStateColors?.[e]}if(!a&&t){const n=t+"."+s;a=this.pconfig.customStateColors?.[n];if(!a)a=this.pconfig.customStateColors?.[t]}if(!a){a=this.pconfig.customStateColors?.[s]}if(!a&&e){const n=e+"."+s;a=this.ui.darkMode&&this.stateColorsDark[n]?this.stateColorsDark[n]:this.stateColors[n]}if(!a&&t){const n=t+"."+s;a=this.ui.darkMode&&this.stateColorsDark[n]?this.stateColorsDark[n]:this.stateColors[n]}if(!a){a=this.ui.darkMode&&this.stateColorsDark[s]?this.stateColorsDark[s]:this.stateColors[s]}if(!a){if(!this.colorMap.has(s)){const o=md5hx(s);const r=(o[0]&2147483647)*this.pconfig.colorSeed%359;const l=Math.ceil(45+30*((o[1]&2147483647)%255/255))-(this.ui.darkMode?13:0);const h=Math.ceil(55+10*((o[1]&2147483647)%255/255))-(this.ui.darkMode?5:0);a="hsl("+r+","+l+"%,"+h+"%)";this.colorMap.set(s,a)}else a=this.colorMap.get(s)}return a}getLocalizedState(t,e,i,s){const a=s+t;let n=this.stateTexts.get(a);if(!n){n=i&&this._hass.localize(`component.${e}.entity_component.${i}.state.${t}`)||this._hass.localize(`component.${e}.entity_component._.state.${t}`)||i&&this._hass.localize(`component.${e}.state.${i}.${t}`)||this._hass.localize(`component.${e}.state._.${t}`)||t;this.stateTexts.set(a,n)}return n}today(e=false){if(!this.state.loading){if(e)this.setTimeRangeFromString(String(this.pconfig.defaultTimeRange));let t=moment();if(this.pconfig.defaultTimeOffset){const i=this.pconfig.defaultTimeOffset.slice(0,-1);switch(this.pconfig.defaultTimeOffset.slice(-1)[0]){case"m":t=t.add(i,"minute");break;case"h":t=t.add(i,"hour");break;case"d":t=t.add(i,"day");break;case"w":t=t.add(i,"week");break;case"o":t=t.add(i,"month");break;case"y":t=t.add(i,"year");break;case"H":t=moment(t.format("YYYY-MM-DDTHH:00:00")).add(i,"hour");break;case"D":t=moment(t.format("YYYY-MM-DDT00:00:00")).add(i,"day");break;case"O":t=moment(t.format("YYYY-MM-01T00:00:00")).add(i,"month");break;case"Y":t=moment(t.format("YYYY-01-01T00:00:00")).add(i,"year");break}}this.endTime=t.format("YYYY-MM-DDTHH:mm:ss");this.startTime=moment(this.endTime).subtract(this.activeRange.timeRangeHours,"hour").subtract(this.activeRange.timeRangeMinutes,"minute").format("YYYY-MM-DDTHH:mm:ss");this.updateHistory()}this.state.autoScroll=true}todayNoReset(){this.today(false)}todayReset(){this.today(true)}subDay(){if(!this.state.loading){if(this.activeRange.timeRangeHours<24)this.setTimeRange(24,false);let t=moment(this.startTime).subtract(1,this.activeRange.timeRangeHours<720?"day":"month");let e=moment(t).add(this.activeRange.timeRangeHours,"hour");this.startTime=t.format("YYYY-MM-DD")+"T00:00:00";this.endTime=e.format("YYYY-MM-DD")+"T00:00:00";this.updateHistory()}}addDay(){if(!this.state.loading){if(this.activeRange.timeRangeHours<24)this.setTimeRange(24,false);let t=moment(this.startTime).add(1,this.activeRange.timeRangeHours<720?"day":"month");let e=moment(t).add(this.activeRange.timeRangeHours,"hour");this.startTime=t.format("YYYY-MM-DD")+"T00:00:00";this.endTime=e.format("YYYY-MM-DD")+"T00:00:00";this.updateHistory()}}toggleZoom(){this.state.zoomMode=!this.state.zoomMode;for(let t of this.ui.zoomButton)if(t)t.style.backgroundColor=this.state.zoomMode?this.ui.darkMode?"#ffffff3a":"#0000003a":"#0000";if(panstate.overlay){panstate.overlay.remove();panstate.overlay=null}}decZoom(){this.decZoomStep()}incZoom(){this.incZoomStep()}timeRangeSelected(t){this.setTimeRange(t.target.value,true)}exportFile(){this.menuSetVisibility(0,false);this.menuSetVisibility(1,false);this.csvExporter.exportFile(this)}exportStatistics(){this.menuSetVisibility(0,false);this.menuSetVisibility(1,false);this.statsExporter.exportFile(this)}toggleInfoPanel(){this.menuSetVisibility(0,false);this.menuSetVisibility(1,false);if(confirm(infoPanelEnabled?i18n("ui.popup.disable_panel"):i18n("ui.popup.enable_panel"))){infoPanelEnabled=!infoPanelEnabled;this.writeInfoPanelConfig(true);location.reload()}}decZoomStep(e=null,i=.5){if(!this.activeRange.timeRangeHours){this.activeRange.timeRangeMinutes*=2;if(this.activeRange.timeRangeMinutes>=60){this.activeRange.timeRangeMinutes=0;this.activeRange.timeRangeHours=0}}if(!this.activeRange.timeRangeMinutes){let t=ranges.findIndex(t=>t>=this.activeRange.timeRangeHours);if(t>=0){if(ranges[t]>this.activeRange.timeRangeHours)t--;if(t<ranges.length-1)this.setTimeRange(ranges[t+1],true,e,i)}}else this.setTimeRangeMinutes(this.activeRange.timeRangeMinutes,true,e,i)}incZoomStep(t=null,e=.5){const i=ranges.findIndex(t=>t>=this.activeRange.timeRangeHours);if(i>0)this.setTimeRange(ranges[i-1],true,t,e);else this.setTimeRangeMinutes((this.activeRange.timeRangeHours*60+this.activeRange.timeRangeMinutes)/2,true,t,e)}selectBarInterval(t){const i=t.target.id.substr(t.target.id.indexOf("-")+1);for(let e=0;e<this.graphs.length;e++){if(this.graphs[e].id==i){this.graphs[e].interval=t.target.value;const s=t.target.value==4?"line":"bar";if(s!==this.graphs[e].type){if(s=="line"){for(let t of this.graphs[e].chart.data.datasets){t.backgroundColor="rgba(0,0,0,0)";if(t.borderColor&&Array.isArray(t.borderColor))t.borderColor=t.borderColor[0]}}else{for(let t of this.graphs[e].chart.data.datasets)t.backgroundColor=t.borderColor}this.graphs[e].chart.type=this.graphs[e].chart.config.type=this.graphs[e].type=s;this.graphs[e].chart.update();if(this.graphs[e].yaxisLock)this.scaleLockClicked({currentTarget:{id:`-${e}`}})}break}}this.updateHistory()}createIntervalSelectorHtml(t,e,i,s){if(i===undefined)i=1;return`<select id='bd-${t}' style="position:absolute;right:50px;width:${this.ui.wideInterval?100:80}px;margin-top:${-e+5}px;color:var(--primary-text-color);background-color:${this.pconfig.closeButtonColor};border:0px solid black;">
                    <option value="0" ${s} ${i==0?"selected":""}>${i18n("ui.interval._10m")}</option>
                    <option value="1" ${s} ${i==1?"selected":""}>${i18n("ui.interval.hourly")}</option>
                    <option value="2" ${s} ${i==2?"selected":""}>${i18n("ui.interval.daily")}</option>
                    <option value="3" ${s} ${i==3?"selected":""}>${i18n("ui.interval.monthly")}</option>
                    <option value="4" ${s} ${i==4?"selected":""}>${i18n("ui.interval.rawline")}</option>
                </select>`}parseIntervalConfig(t){const e={"10m":0,hourly:1,daily:2,monthly:3};return e[t]}scaleLockClicked(t){const i=t.currentTarget.id.substr(t.currentTarget.id.indexOf("-")+1);for(let e=0;e<this.graphs.length;e++){if(this.graphs[e].id==i){let t=this.graphs[e].chart;if(this.graphs[e].yaxisLock){t.options.scales.yAxes[0].ticks.min=t.options.scales.yAxes[0].ticks.forceMin;t.options.scales.yAxes[0].ticks.removeEdgeTicks=false;t.options.scales.yAxes[0].ticks.max=t.options.scales.yAxes[0].ticks.forceMax;t.options.scales.yAxes[0].ticks.removeEdgeTicks=false;this.graphs[e].yaxisLock=0}else this.graphs[e].yaxisLock=1;this.updateScaleLockState(this.graphs[e],false);break}}this.updateHistory()}createScaleLockIconHtml(t,e){return`<button id='ca-${t}' style="position:absolute;left:${(this.pconfig.labelAreaWidth-18)*0+10}px;margin-top:${-e+5}px;background:none;opacity:1.0;border:0px solid black;">
            <svg style='display:none' width="18" height="18" viewBox="0 0 24 24"><path fill="var(--primary-text-color)" d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" /></svg>
            </button>`}updateScaleLockState(t,e){const i=t.chart.options.scales.yAxes[0].ticks.forceMin&&t.chart.options.scales.yAxes[0].ticks.forceMax;let s=this._this.querySelector(`#ca-${t.id}`);if(s){s.children[0].style.display=i&&!e?"none":"inherit";s.style.opacity=e||t.yaxisLock?1:.3}}computeTickDensity(t){const e={low:4,medium:3,high:2,higher:1,highest:0};let i=e[this.pconfig.timeTickDensity];if(i===undefined)i=2;if(this.pconfig.timeTickOverride===undefined)return Math.max(t<650?4:t<1100?3:t<1300?2:t<1900?1:0,i);else return e[this.pconfig.timeTickOverride]??2}setStepSize(t=false){const e=this._this.querySelector("#maincard").clientWidth;const i=this.computeTickDensity(e);if(this.activeRange.timeRangeHours){const s=this.activeRange.timeRangeHours;const a=[];a.push({1:"2m",2:"5m",3:"5m",4:"5m",5:"5m",6:"10m",7:"10m",8:"10m",9:"10m",10:"15m",11:"15m",12:"15m",24:"30m",48:"1h",72:"2h",96:"2h",120:"3h",144:"3h",168:"6h",336:"12h",504:"12h",720:"1d",2184:"1o",4368:"1o",8760:"1o"});a.push({1:"2m",2:"5m",3:"10m",4:"10m",5:"10m",6:"15m",7:"15m",8:"20m",9:"20m",10:"30m",11:"30m",12:"30m",24:"1h",48:"2h",72:"3h",96:"3h",120:"6h",144:"6h",168:"12h",336:"1d",504:"1d",720:"1d",2184:"1o",4368:"1o",8760:"1o"});a.push({1:"5m",2:"10m",3:"15m",4:"30m",5:"30m",6:"30m",7:"30m",8:"30m",9:"30m",10:"1h",11:"1h",12:"1h",24:"2h",48:"4h",72:"6h",96:"6h",120:"12h",144:"12h",168:"12h",336:"1d",504:"2d",720:"2d",2184:"1o",4368:"1o",8760:"1o"});a.push({1:"10m",2:"20m",3:"30m",4:"1h",5:"1h",6:"1h",7:"1h",8:"1h",9:"1h",10:"2h",11:"2h",12:"2h",24:"4h",48:"8h",72:"12h",96:"1d",120:"1d",144:"1d",168:"2d",336:"3d",504:"4d",720:"7d",2184:"1o",4368:"1o",8760:"1o"});a.push({1:"20m",2:"30m",3:"1h",4:"2h",5:"2h",6:"2h",7:"2h",8:"2h",9:"2h",10:"4h",11:"4h",12:"4h",24:"6h",48:"12h",72:"1d",96:"2d",120:"2d",144:"2d",168:"4d",336:"7d",504:"7d",720:"14d",2184:"1o",4368:"1o",8760:"1o"});this.activeRange.tickStepSize=a[i][s].slice(0,-1);switch(a[i][s].slice(-1)[0]){case"m":this.activeRange.tickStepUnit="minute";break;case"h":this.activeRange.tickStepUnit="hour";break;case"d":this.activeRange.tickStepUnit="day";break;case"o":this.activeRange.tickStepUnit="month";break}}else if(this.activeRange.timeRangeMinutes){switch(i){case 0:this.activeRange.tickStepSize=1;break;case 1:this.activeRange.tickStepSize=1;break;case 2:this.activeRange.tickStepSize=this.activeRange.timeRangeMinutes<=20?1:5;break;case 3:this.activeRange.tickStepSize=this.activeRange.timeRangeMinutes<=10?1:this.activeRange.timeRangeMinutes<30?5:10;break;case 4:this.activeRange.tickStepSize=this.activeRange.timeRangeMinutes<=5?1:this.activeRange.timeRangeMinutes<25?5:10;break}this.activeRange.tickStepUnit="minute"}else{this.activeRange.tickStepSize=24;this.activeRange.tickStepUnit="hour"}if(t){for(let t of this.graphs){t.chart.options.scales.xAxes[0].time.unit=this.activeRange.tickStepUnit;t.chart.options.scales.xAxes[0].time.stepSize=this.activeRange.tickStepSize;t.chart.update()}}}validateRange(e,t=false){if(t&&e<12&&e>0)return e;let i=ranges.findIndex(t=>t>=e);if(i<ranges.length-1&&(i<0||ranges[i]!=e))i++;return ranges[i]}setTimeRange(e,t,i=null,s=.5){if(this.state.loading)return;this.timeCache.clear();s=Math.min(Math.max(s,0),1);e=Math.max(e,1);const a={48:2,72:5,96:10,120:30,144:30,168:60,336:60,504:120,720:240,2184:240,4368:240,8760:360};const n=6e4;this.activeRange.dataClusterSize=e>=48?a[e]*n:0;this.activeRange.timeRangeHours=e;this.activeRange.timeRangeMinutes=0;this.setStepSize(!t);for(let t of this.ui.rangeSelector)if(t)t.value=e;if(t){if(i){let t=moment(i).add(this.activeRange.timeRangeHours*(1-s),"hour");let e=moment(t).subtract(this.activeRange.timeRangeHours,"hour");this.startTime=e.format("YYYY-MM-DDTHH:mm:ss");this.endTime=t.format("YYYY-MM-DDTHH:mm:ss")}else if(this.activeRange.timeRangeHours>24){let t=moment(this.endTime);let e=moment(t).subtract(this.activeRange.timeRangeHours,"hour");this.startTime=e.format("YYYY-MM-DDTHH:mm:ss");this.endTime=t.format("YYYY-MM-DDTHH:mm:ss")}else{let t=(moment(this.endTime)+moment(this.startTime))/2;let e=moment(t).add(this.activeRange.timeRangeHours/2,"hour");let i=moment(e).subtract(this.activeRange.timeRangeHours,"hour");this.startTime=i.format("YYYY-MM-DDTHH:mm:ss");this.endTime=e.format("YYYY-MM-DDTHH:mm:ss")}for(let t of this.graphs){t.chart.options.scales.xAxes[0].time.unit=this.activeRange.tickStepUnit;t.chart.options.scales.xAxes[0].time.stepSize=this.activeRange.tickStepSize;t.chart.options.scales.xAxes[0].time.min=this.startTime;t.chart.options.scales.xAxes[0].time.max=this.endTime;t.chart.update()}this.updateHistory()}}setTimeRangeMinutes(t,e,i,s=.5){if(this.state.loading)return;s=Math.min(Math.max(s,0),1);t=Math.max(t,1);this.activeRange.dataClusterSize=0;this.activeRange.timeRangeHours=0;this.activeRange.timeRangeMinutes=t;this.setStepSize(!e);for(let t of this.ui.rangeSelector)if(t)t.value="0";if(e){if(!i)i=(moment(this.startTime)+moment(this.endTime))/2;let t=moment(i).add(this.activeRange.timeRangeMinutes*(1-s),"minute");let e=moment(t).subtract(this.activeRange.timeRangeMinutes,"minute");this.startTime=e.format("YYYY-MM-DDTHH:mm:ss");this.endTime=t.format("YYYY-MM-DDTHH:mm:ss");for(let t of this.graphs){t.chart.options.scales.xAxes[0].time.unit=this.activeRange.tickStepUnit;t.chart.options.scales.xAxes[0].time.stepSize=this.activeRange.tickStepSize;t.chart.options.scales.xAxes[0].time.min=this.startTime;t.chart.options.scales.xAxes[0].time.max=this.endTime;t.chart.update()}this.updateHistory()}}setTimeRangeFromString(t,e=false,i=null){const s=t.slice(0,-1);let a=0;switch(t.slice(-1)[0]){case"m":a=s*1;break;case"h":a=s*60;break;case"d":a=s<=7?s*24*60:s<=14?14*24*60:s<=21?21*24*60:30*24*60;break;case"w":a=s<=3?s*7*24*60:30*24*60;break;case"o":a=s<=1?30*24*60:s<=3?91*24*60:s<=6?182*24*60:365*24*60;break;case"y":a=365*24*60;break;default:a=t*60;break}const n=Math.floor(a/60);if(n>0)this.setTimeRange(this.validateRange(n,true),e,i);else this.setTimeRangeMinutes(a,e,i)}findFirstIndex(t,e,i){let s=e.start-1;while(s++<e.end){if(i(t[s]))return s}return-1}findLastIndex(t,e,i){let s=e.end+1;while(s-- >e.start){if(i(t[s]))return s}return-1}getFormattedLabelName(t,e,i){let s=t;const a=10**this.pconfig.roundingPrecision;const n=Math.round(this._hass.states[e].state*a)/a;if(!isNaN(n)){s+=" ("+n+(i?" "+i:"")+")"}return s}initCache(){let e=moment().format("YYYY-MM-DD")+"T00:00:00";e=moment(e).subtract(this.cacheSize,"day").format("YYYY-MM-DD")+"T00:00:00";for(let t=0;t<this.cacheSize+1;t++){let t=moment(e).add(1,"day").format("YYYY-MM-DD")+"T00:00:00";this.cache.push({start:e,end:t,start_m:moment(e),end_m:moment(t),data:[],valid:false});e=t}}growCache(e){if(this.cacheSize>=20*365)return;let i=this.cache[0].start;for(let t=0;t<e;t++){let t=moment(i).subtract(1,"day").format("YYYY-MM-DD")+"T00:00:00";this.cache.unshift({start:t,end:i,start_m:moment(t),end_m:moment(i),data:[],valid:false});i=t}this.cacheSize+=e;console.log(`Cache grown from ${this.cacheSize-e} to ${this.cacheSize} days`)}mapStartTimeToCacheSlot(t){let e=moment(t);for(let t=0;t<this.cacheSize+1;t++){if(e>=this.cache[t].start_m&&e<this.cache[t].end_m)return t}if(e<this.cache[0].start_m)return 0;return-1}mapEndTimeToCacheSlot(t){let e=moment(t);for(let t=0;t<this.cacheSize+1;t++){if(e>this.cache[t].start_m&&e<=this.cache[t].end_m)return t}if(e>this.cache[this.cacheSize].end_m)return this.cacheSize;return-1}findCacheEntityIndex(e,i){if(!this.cache[e].valid)return-1;for(let t=0;t<this.cache[e].entities.length;t++){if(this.cache[e].entities[t]==i)return t}return-1}generateGraphDataFromCache(){let n=this.mapStartTimeToCacheSlot(this.startTime);let t=this.mapEndTimeToCacheSlot(this.endTime);if(n>=0&&t>=0){let a=[];for(let s=n;s<=t;s++){let i=0;for(let e of this.graphs){for(let t of e.entities){if(a[i]==undefined)a[i]=[];const o=this.findCacheEntityIndex(s,t.entity);if(o>=0)a[i]=a[i].concat(this.cache[s].data[o]);i++}}}if(n>0&&this.cache[n-1].valid){let i=0;for(let e of this.graphs){for(let t of e.entities){for(let e=n-1;e>=0&&this.cache[e].valid;e--){const o=this.findCacheEntityIndex(e,t.entity);if(o>=0){let t=this.cache[e].data[o].length;if(t>0){a[i].unshift({last_changed:this.cache[n].start,state:this.cache[e].data[o][t-1].state});break}}}i++}}}this.buildChartData(a)}else this.buildChartData(null)}searchFirstAffectedSlot(e,i,s){for(let t=e;t<=i;t++){if(this.cache[t].end_m>=s)return t}return undefined}loaderCallback(i){if(this.databaseCallback)this.databaseCallback(i.length>0);let t=false;let s=0;if(this.statistics.enabled&&!this.loader.loadingStats){s=this.cacheSize;for(let e of i){let t=this.searchFirstAffectedSlot(this.loader.startIndex,this.loader.endIndex,moment(e[0].last_changed));if(t&&t<s)s=t}if(!i.length){s=this.loader.endIndex+1}if(s>this.loader.startIndex&&this.statistics.retention){const e=this.cacheSize-this.statistics.retention;if(s>e){console.warn(`first partial slot ${s}, first history slot is ${e}`);s=e}}if(s>this.loader.startIndex&&s<this.cacheSize){s++;this.cache[s-1].valid=false;this.limitSlot=s-1;t=true}}this.loader.loadingStats=false;if(this.loader.startIndex==this.loader.endIndex){if(this.loader.startIndex>=s){this.cache[this.loader.startIndex].data=i;this.cache[this.loader.startIndex].valid=true}}else{for(let t=this.loader.startIndex;t<=this.loader.endIndex;t++){this.cache[t].data=[];this.cache[t].valid=t>=s}for(let n of i){let a=0;for(let s=this.loader.startIndex;s<=this.loader.endIndex;s++){let e=moment(this.cache[s].end);let t=this.findFirstIndex(n,{start:a,end:n.length-1},function(t){return moment(t.last_changed)>=e});if(t<0)t=n.length;let i=n.slice(a,t);this.cache[s].data.push(i);a=t}}}for(let e=this.loader.startIndex;e<=this.loader.endIndex;e++){this.cache[e].entities=[];for(let t of i){this.cache[e].entities.push(t[0].entity_id)}}this.generateGraphDataFromCache();this.state.loading=false;if(t)this.updateHistory()}loaderFailed(t){console.log("Database request failure");console.log(t);if(this.databaseCallback)this.databaseCallback(false);this.buildChartData(null);this.state.loading=false}loaderCallbackStats(i){const s=this.statistics.mode;let a=[];for(let t in i){const n=i[t];let e=[];e.push({last_changed:n[0].start,state:n[0][s]??n[0].state,entity_id:t});for(let t=1;t<n.length;t++){e.push({last_changed:n[t].start,state:n[t][s]??n[t].state})}a.push(e)}this.loader.loadingStats=true;this.loaderCallback(a)}loaderCallbackWS(i){let s=[];for(let t in i){const a=i[t];let e=[];e.push({last_changed:a[0].lu*1e3,state:a[0].s,entity_id:t});for(let t=1;t<a.length;t++){e.push({last_changed:a[t].lu*1e3,state:a[t].s})}s.push(e)}this.loaderCallback(s)}process(e,i){if(e===""||e===null||e===undefined){e="unavailable"}if(i){let t=e*1;if(isNaN(t))t=e;return i(t)}else return e}processRaw(t,e){if(t===null||t===undefined){t="unavailable"}return e?e(t):t}buildProcessFunction(t){if(!t)return null;try{const e=new Function("state",`"use strict";return (${t});`);e("undefined");return e}catch(t){console.warn(t.message);return null}}momentCache(t){let e;if(t!==undefined){if(!this.timeCache.has(t)){e=moment(t);this.timeCache.set(t,e)}else e=this.timeCache.get(t)}return e}buildChartData(d){let i=moment();let p=moment(this.startTime);let f=moment(this.endTime);const l=t=>this.pconfig.showUnavailable||!["unavailable","unknown"].includes(t);let u=0;for(let c of this.graphs){let e=false;for(let t=0;t<c.entities.length;t++,u++){if(this.state.updateCanvas&&this.state.updateCanvas!==c.canvas)continue;var g=[];var r=[];if(d&&d.length>u){var m=d[u].length;const y=this.buildProcessFunction(c.entities[t].process);if(c.type=="line"){const h=c.entities[t].scale??1;const b=c.entities[t].decimation??this.pconfig.decimation??"fast";if(m>2&&b&&this.activeRange.dataClusterSize>0){let s=this.momentCache(d[u][0].last_changed);let a=null,n=null;let o=null,r=null;for(let i=0;i<m;i++){let e=this.process(d[u][i].state,y);if(l(e)){e*=h;let t=this.momentCache(d[u][i].last_changed);if(b=="accurate"){if(a===null||e>a){a=e;n=t}if(o===null||e<o){o=e;r=t}}if(!i||t.diff(s)>=this.activeRange.dataClusterSize){if(b=="accurate"){if(r<n){g.push({x:r,y:o});g.push({x:n,y:a})}else{g.push({x:n,y:a});g.push({x:r,y:o})}}else g.push({x:t,y:e});s=t;a=o=null}}}}else{for(let t=0;t<m;t++){const x=this.process(d[u][t].state,y);if(l(x)){g.push({x:d[u][t].last_changed,y:x*h})}}}if(i>f&&g.length>0&&moment(g[g.length-1].x)<f){const x=this.process(d[u][m-1].state,y);if(l(x))g.push({x:f,y:x*h})}else if(i<=f&&g.length>0&&moment(g[g.length-1].x)<i){const x=this.process(d[u][m-1].state,y);if(l(x))g.push({x:i,y:x*h})}}else if(c.type=="bar"&&m>0){const h=c.entities[t].scale??1;const v=c.entities[t].netBars??false;const S=c.entities[t].color&&c.entities[t].color.constructor==Object?c.entities[t].color:null;let i;if(c.interval==0)i=moment.duration(10,"minute");else if(c.interval==1)i=moment.duration(1,"hour");else if(c.interval==2)i=moment.duration(1,"day");else if(c.interval==3)i=moment.duration(1,"month");let s=0;let a=this.process(d[u][0].state,y)*1;let n=a;const _=c.interval<=1?"YYYY-MM-DDTHH[:00:00]":c.interval<=2?"YYYY-MM-DDT[00:00:00]":"YYYY-MM-[01]T[00:00:00]";let o=moment(moment(p).format(_));while(s<m&&moment(d[u][s].last_changed)<=o){a=this.process(d[u][s++].state,y)*1}for(;o<=f+i;){let t=moment(o).add(i);n=a;let e=0;while(s<m&&this.momentCache(d[u][s].last_changed)<t){const x=this.process(d[u][s].state,y)*1;if(!isNaN(x)){if(!v&&x<n){e+=n-a;a=x}n=x}s++}e+=n-a;g.push({x:o+i/2,y:e*h});if(S)r.push(parseColorRange(S,e));o=t;a=n}}else if(c.type=="timeline"||c.type=="arrowline"){const b=c.entities[t].decimation??this.pconfig.decimation??"fast";let n=b!=false;if(c.type=="arrowline"||y)n=false;let o=0;let r,l;let h;const k=i<f?i:f;for(let t=0;t<m;t++){let e=d[u][t].last_changed;let i=t<m-1?d[u][t+1].last_changed:k;if(!o){h=this.processRaw(d[u][t].state,y);while(t<m-1&&this.processRaw(d[u][t].state,y)==this.processRaw(d[u][t+1].state,y)){++t;i=t<m-1?d[u][t+1].last_changed:k}}let s=this.momentCache(e);let a=i===k?moment(i):this.momentCache(i);if(!n||a.diff(s)>=this.activeRange.dataClusterSize||t==m-1){if(o>0){e=r;i=l;s=moment(e);a=moment(i);t--}}else{if(!o){r=e;h=this.processRaw(d[u][t].state,y)}l=i;o++;continue}if(a>=p){if(a>f)i=this.endTime;if(s>f)break;if(s<p)e=this.startTime;let t=[];t.push(e);t.push(i);t.push(o>1?"multiple":String(h));g.push(t)}o=0}}}c.chart.data.datasets[t].data=g;if(r.length>0){c.chart.data.datasets[t].backgroundColor=r;c.chart.data.datasets[t].borderColor=r}e=true}if(e){c.chart.options.scales.xAxes[0].time.unit=this.activeRange.tickStepUnit;c.chart.options.scales.xAxes[0].time.stepSize=this.activeRange.tickStepSize;c.chart.options.scales.xAxes[0].time.min=this.startTime;c.chart.options.scales.xAxes[0].time.max=this.endTime;c.chart.update()}}}generateTooltipContents(i,s,t,e=1){if(this.pconfig.tooltipShowDuration){let t="";let e=moment(s[1]).diff(moment(s[0]));if(e>=24*60*60*1e3){const a=Math.floor(e/(24*60*60*1e3));e-=a*24*60*60*1e3;t=a>1?`${i18n("ui.ranges.n_days",a)}, `:`${i18n("ui.ranges.day")}, `}t+=moment.utc(e).format("HH:mm:ss");i=`${i}  (for ${t})`}if(t=="compact"||t=="slim"||t=="auto"&&e<2)return[i,moment(s[0]).format(this.i18n.styleDateTimeTooltip)+" -- "+moment(s[1]).format(this.i18n.styleDateTimeTooltip)];else return[i,moment(s[0]).format(this.i18n.styleDateTimeTooltip),moment(s[1]).format(this.i18n.styleDateTimeTooltip)]}newGraph(t,o,r,i){const e=t.getContext("2d");var s;let a;if(o=="line"||o=="bar"){s={datasets:[]};for(let t of r){s.datasets.push({borderColor:t.bColor,backgroundColor:t.fillColor,borderWidth:t.width,borderDash:t.dashMode==="points"?[1,5]:t.dashMode==="shortlines"?[5,5]:t.dashMode==="longlines"?[10,8]:t.dashMode==="pointline"?[15,3,3,3]:undefined,pointRadius:i?.showSamples?4:0,hitRadius:5,label:this.pconfig.showCurrentValues?this.getFormattedLabelName(t.name,t.entity_id,t.unit):t.name,name:t.name,steppedLine:t.mode==="stepped",cubicInterpolationMode:t.mode!=="stepped"&&t.mode!=="lines"?"monotone":"default",lineTension:t.mode==="lines"?0:undefined,domain:t.domain,entity_id:t.entity_id,unit:t.unit,hidden:t.hidden,data:{}});a=a??t.unit}}else if(o=="timeline"||o=="arrowline"){s={labels:[],datasets:[]};for(let t of r){s.labels.push(this.pconfig.labelsVisible?t.name:"");s.datasets.push({domain:t.domain,device_class:t.device_class,entity_id:t.entity_id,unit:t.unit,arrowColor:t.bColor,arrowBackground:t.fillColor,data:[]})}}const l=this.pconfig.tooltipSize;var n=new Chart(e,{type:o,data:s,options:{scales:{xAxes:[{type:o=="line"||o=="bar"?"time":o=="arrowline"?"arrowline":"timeline",time:{unit:this.activeRange.tickStepUnit,stepSize:this.activeRange.tickStepSize,displayFormats:{minute:this.i18n.styleTimeTicks,hour:this.i18n.styleTimeTicks,day:this.i18n.styleDateTicks,month:"MMM"},tooltipFormat:this.i18n.styleDateTimeTooltip},ticks:{fontColor:i?.showTimeLabels===false?"rgba(0,0,0,0)":this.pconfig.graphLabelColor,major:{enabled:true,unit:"day",fontStyle:"bold",unitStepSize:1,displayFormats:{day:this.i18n.styleDateTicks}},maxRotation:0},gridLines:{color:this.pconfig.graphGridColor},stacked:i?.stacked}],yAxes:[{afterFit:t=>{t.width=this.pconfig.labelAreaWidth},afterDataLimits:t=>{const e=1e-4;if(i?.ymin==null&&this.pconfig.axisAddMarginMin&&o=="line")t.min-=e;if(i?.ymax==null&&this.pconfig.axisAddMarginMax&&o=="line")t.max+=e},ticks:{fontColor:this.pconfig.graphLabelColor,min:i?.ymin??undefined,max:i?.ymax??undefined,forceMin:i?.ymin??undefined,forceMax:i?.ymax??undefined,stepSize:i?.ystepSize??undefined},gridLines:{color:o=="line"||o=="bar"||r.length>1?this.pconfig.graphGridColor:"rgba(0,0,0,0)"},scaleLabel:{display:a!==undefined&&a!==""&&this.pconfig.labelsVisible,labelString:a,fontColor:this.pconfig.graphLabelColor},barThickness:this.pconfig.timelineBarHeight-4,stacked:i?.stacked}]},topClipMargin:i?.ymax==null?4:1,bottomClipMargin:i?.ymin==null?4:1,animation:{duration:0},tooltips:{callbacks:{label:(e,i)=>{if(o=="line"||o=="bar"){let t="";if(this.pconfig.tooltipShowLabel)t=i.datasets[e.datasetIndex].name||"";if(t)t+=": ";const s=10**this.pconfig.roundingPrecision;t+=Math.round(e.yLabel*s)/s;t+=" "+(i.datasets[e.datasetIndex].unit||"");return t}else if(o=="timeline"){const a=i.datasets[e.datasetIndex];const n=a.data[e.index];let t=n[2];if(this.pconfig.tooltipStateTextMode=="auto")t=this.getLocalizedState(t,a.domain,a.device_class,a.entity_id);return this.generateTooltipContents(t,n,l,r.length)}else if(o=="arrowline"){const n=i.datasets[e.datasetIndex].data[e.index];const s=10**this.pconfig.roundingPrecision;let t=Math.round(n[2]*s)/s;t+=" "+(i.datasets[e.datasetIndex].unit||"");return this.generateTooltipContents(t,n,"slim")}},title:function(e,i){let s="";if(e.length>0){if(o=="line"||o=="bar"){s=e[0].xLabel}else{let t=i.labels[e[0].datasetIndex];s=l!=="slim"?t:""}}return s}},yAlign:o=="line"||o=="bar"?undefined:"nocenter",caretPadding:8,displayColors:o=="line"?this.pconfig.showTooltipColors[0]:o=="timeline"?this.pconfig.showTooltipColors[1]:false},hover:{mode:"nearest",intersect:o!="line"},legend:{display:(o=="line"||o=="bar")&&this.pconfig.hideLegend!=true,labels:{fontColor:this.pconfig.graphLabelColor,usePointStyle:o=="line"||o=="bar"&&r.length>1,boxWidth:0}},elements:{textFunction:(t,e,i)=>{switch(this.pconfig.stateTextMode){case"auto":return this.getLocalizedState(t,e[i].domain,e[i].device_class,e[i].entity_id);case"hide":return"";default:return t}},colorFunction:(t,e,i,s)=>{return this.getStateColor(i[s].domain,i[s].device_class,i[s].entity_id,e[2])},showText:true,font:'normal 13px "Helvetica Neue", Helvetica, Arial, sans-serif',textPadding:4,arrowColor:getComputedStyle(document.body).getPropertyValue("--primary-text-color")},responsive:true,maintainAspectRatio:false,plugins:{vertline:{color:this.pconfig.cursorLineColor}}},plugins:[vertline_plugin]});n.callerInstance=this;return n}updateHistory(){if(this.tid){clearTimeout(this.tid);this.tid=0}for(let t of this.ui.dateSelector)if(t)t.innerHTML=moment(this.startTime).format(this.i18n.styleDateSelector);if(!this.cache.length)this.initCache();if(moment(this.startTime)<this.cache[0].start_m)this.growCache(365);let t=this.mapStartTimeToCacheSlot(this.startTime);let e=this.mapEndTimeToCacheSlot(this.endTime);let a=t>=0?this.findFirstIndex(this.cache,{start:t,end:e},function(t){return!t.valid}):-1;let n=e>=0?this.findLastIndex(this.cache,{start:t,end:e},function(t){return!t.valid}):-1;if(a>=0){if(this.state.loading){if(a>=this.loader.startIndex&&n<=this.loader.endIndex)return;console.log(`Slots ${a} to ${n} need loading`);console.log(`Double loading blocked, slots ${this.loader.startIndex} to ${this.loader.endIndex} are currently loading`);return}this.loader.startTime=this.cache[a].start;this.loader.endTime=this.cache[n].end;this.loader.startIndex=a;this.loader.endIndex=n;let i=0;let t=this.loader.startTime.replace("+","%2b");let e=this.loader.endTime.replace("+","%2b");let s=[];for(let e of this.graphs){for(let t of e.entities){s.push(t.entity);i++}}if(i>0){this.state.loading=true;if(this.statistics.force)this.limitSlot=this.cacheSize+1;if(!this.statistics.enabled||a>this.limitSlot){const o={type:"history/history_during_period",start_time:moment(t).format("YYYY-MM-DDTHH:mm:ssZ"),end_time:moment(e).format("YYYY-MM-DDTHH:mm:ssZ"),minimal_response:true,no_attributes:true,entity_ids:s};this._hass.callWS(o).then(this.loaderCallbackWS.bind(this),this.loaderFailed.bind(this))}else{const o={type:this.version[0]>2022||this.version[1]>=11?"recorder/statistics_during_period":"history/statistics_during_period",start_time:moment(t).format("YYYY-MM-DDTHH:mm:ssZ"),end_time:moment(e).format("YYYY-MM-DDTHH:mm:ssZ"),period:this.statistics.period,statistic_ids:s};this._hass.callWS(o).then(this.loaderCallbackStats.bind(this),this.loaderFailed.bind(this))}}}else this.generateGraphDataFromCache()}updateHistoryAutoRefresh(){const t=moment();const e=moment(this.endTime);if(this.state.autoScroll&&e<t){this.today()}else{this.updateHistory()}}updateHistoryWithClearCache(){if(!this.state.loading){this.cache.length=0;this.updateHistory()}}updateAxes(){for(let t of this.graphs){if(!this.state.updateCanvas||this.state.updateCanvas===t.canvas){t.chart.options.scales.xAxes[0].time.min=this.startTime;t.chart.options.scales.xAxes[0].time.max=this.endTime;t.chart.update()}}}pixelPositionToTimecode(t){const e=(t-panstate.g.chart.chartArea.left)/(panstate.g.chart.chartArea.right-panstate.g.chart.chartArea.left);return this.factorToTimecode(e)}factorToTimecode(t){return moment(this.startTime)+moment(this.endTime).diff(this.startTime)*t}pointerDown(e){panstate.g=null;for(let t of this.graphs){if(t.canvas===e.target){panstate.g=t;t.chart.options.tooltips.enabled=false;t.chart.options.scales.yAxes[0].ticks.min=panstate.y0=t.chart.scales["y-axis-0"].min;t.chart.options.scales.yAxes[0].ticks.max=panstate.y1=t.chart.scales["y-axis-0"].max;t.chart.options.topClipMargin=0;t.chart.options.bottomClipMargin=0;break}}if(panstate.g){this.state.autoScroll=false;panstate.mx=e.clientX;panstate.lx=e.clientX;panstate.my=e.clientY;panstate.ly=e.clientY;e.target?.setPointerCapture(e.pointerId);if(!this.state.zoomMode){this.state.drag=true;panstate.tc=this.startTime;this.state.updateCanvas=this.pconfig.lockAllGraphs?null:e.target}else{const t=panstate.mx-panstate.g.canvas.getBoundingClientRect().left;if(t>panstate.g.chart.chartArea.left&&t<panstate.g.chart.chartArea.right){if(!panstate.overlay){let t=document.createElement("canvas");t.style="position:absolute;pointer-events:none;";t.width=panstate.g.canvas.width;t.height=panstate.g.canvas.height;panstate.g.canvas.parentNode.insertBefore(t,panstate.g.canvas);panstate.overlay=t}panstate.st0=this.pixelPositionToTimecode(t);this.state.selecting=true}}}}pointerMove(e){if(this.state.drag){if(Math.abs(e.clientX-panstate.lx)>0){panstate.lx=e.clientX;const t=panstate.g.chart.chartArea.right-panstate.g.chart.chartArea.left;const i=Math.floor((e.clientX-panstate.mx)*((3600*this.activeRange.timeRangeHours+60*this.activeRange.timeRangeMinutes)/t));if(i<0){let t=moment(panstate.tc).add(-i,"second");let e=moment(t).add(this.activeRange.timeRangeHours,"hour").add(this.activeRange.timeRangeMinutes,"minute");this.startTime=t.format("YYYY-MM-DDTHH:mm:ss");this.endTime=e.format("YYYY-MM-DDTHH:mm:ss")}else if(i>0){let t=moment(panstate.tc).subtract(i,"second");let e=moment(t).add(this.activeRange.timeRangeHours,"hour").add(this.activeRange.timeRangeMinutes,"minute");this.startTime=t.format("YYYY-MM-DDTHH:mm:ss");this.endTime=e.format("YYYY-MM-DDTHH:mm:ss")}if(!this.state.loading)this.updateHistory();else this.updateAxes()}if(e.shiftKey&&Math.abs(e.clientY-panstate.ly)>0){panstate.ly=e.clientY;const s=panstate.g.chart.chartArea.bottom-panstate.g.chart.chartArea.top;const a=(e.clientY-panstate.my)*(panstate.y1-panstate.y0)/s;panstate.g.chart.options.scales.yAxes[0].ticks.min=panstate.y0+a;panstate.g.chart.options.scales.yAxes[0].ticks.max=panstate.y1+a;panstate.g.chart.options.scales.yAxes[0].ticks.removeEdgeTicks=true;panstate.g.chart.update()}if(!e.shiftKey){panstate.ly=panstate.my=e.clientY;panstate.y0=panstate.g.chart.options.scales.yAxes[0].ticks.min;panstate.y1=panstate.g.chart.options.scales.yAxes[0].ticks.max}else{if(panstate.g.yaxisLock!==2)this.updateScaleLockState(panstate.g,true);panstate.g.yaxisLock=2}}else if(this.state.selecting&&panstate.overlay){let t=panstate.overlay.getContext("2d");t.clearRect(0,0,panstate.overlay.width,panstate.overlay.height);const n=panstate.overlay.getBoundingClientRect();const o=panstate.mx-n.left;const r=Math.max(Math.min(e.clientX-n.left,panstate.g.chart.chartArea.right),panstate.g.chart.chartArea.left);t.fillStyle=this.ui.darkMode?"#ffffff20":"#00000020";t.fillRect(o,panstate.g.chart.chartArea.top,r-o,panstate.g.chart.chartArea.bottom-panstate.g.chart.chartArea.top);panstate.st1=this.pixelPositionToTimecode(r)}else if(!this.state.altGraph&&e.altKey){for(let t of this.graphs){if(t.canvas===e.target){this.state.altGraph=t;t.chart.options.hover.mode="dataset";break}}}else if(this.state.altGraph&&!e.altKey){this.state.altGraph.chart.options.hover.mode="nearest";this.state.altGraph=null}}pointerUp(t){if(this.state.drag){this.state.drag=false;this.state.updateCanvas=null;panstate.g.chart.options.tooltips.enabled=true;if(panstate.g.chart.options.scales.yAxes[0].ticks.forceMin===undefined&&!panstate.g.yaxisLock){panstate.g.chart.options.scales.yAxes[0].ticks.min=undefined;panstate.g.chart.options.bottomClipMargin=4}else panstate.g.chart.options.bottomClipMargin=1;if(panstate.g.chart.options.scales.yAxes[0].ticks.forceMax===undefined&&!panstate.g.yaxisLock){panstate.g.chart.options.scales.yAxes[0].ticks.max=undefined;panstate.g.chart.options.topClipMargin=4}else panstate.g.chart.options.topClipMargin=1;this.updateHistory()}if(this.state.selecting){this.state.selecting=false;panstate.g.chart.options.tooltips.enabled=true;panstate.overlay.remove();panstate.overlay=null;if(panstate.st1<panstate.st0)[panstate.st1,panstate.st0]=[panstate.st0,panstate.st1];const e=(moment(panstate.st1)+moment(panstate.st0))/2;const i=moment.duration(panstate.st1-panstate.st0).asMinutes();let t=i>=60?Math.ceil(i/60):0;if(t<12){if(t<1)this.setTimeRangeMinutes(Math.ceil(i),true,e);else this.setTimeRange(t,true,e)}else{t=Math.ceil(t/24);if(t<1)this.setTimeRange(12,true,e);else if(t<2)this.setTimeRange(24,true,e);else if(t<3)this.setTimeRange(48,true,e);else if(t<4)this.setTimeRange(72,true,e);else if(t<5)this.setTimeRange(96,true,e);else if(t<6)this.setTimeRange(120,true,e);else if(t<7)this.setTimeRange(144,true,e);else if(t<13)this.setTimeRange(168,true,e);else if(t<20)this.setTimeRange(336,true,e);else if(t<28)this.setTimeRange(504,true,e);else if(t<45)this.setTimeRange(720,true,e);else if(t<105)this.setTimeRange(2184,true,e);else this.setTimeRange(4368,true,e)}this.toggleZoom()}panstate.g=null;this.state.autoScroll=moment()<=moment(this.endTime)}pointerCancel(t){if(this.state.drag){this.state.drag=false;this.state.updateCanvas=null;panstate.g.chart.options.tooltips.enabled=true;panstate.g.chart.options.scales.yAxes[0].ticks.min=undefined;panstate.g.chart.options.scales.yAxes[0].ticks.max=undefined;panstate.g.chart.options.topClipMargin=4;panstate.g.chart.options.bottomClipMargin=4}if(this.state.selecting){this.state.selecting=false;panstate.g.chart.options.tooltips.enabled=true;panstate.overlay.remove();panstate.overlay=null}panstate.g=null;this.state.autoScroll=moment()<=moment(this.endTime)}wheelScrolled(t){if(t.ctrlKey){t.preventDefault();if(!this.graphs.length||this.state.loading)return;const e=this.graphs[0].canvas.getBoundingClientRect();const i=this.graphs[0].chart.chartArea;const s=t.clientX-e.left-i.left;const a=s/(i.right-i.left);const n=this.factorToTimecode(a);if(t.deltaY<0)this.incZoomStep(n,a);else if(t.deltaY>0)this.decZoomStep(n,a)}if(t.shiftKey){let a=Math.abs(t.deltaX)>Math.abs(t.deltaY)?t.deltaX:t.deltaY;for(let s of this.graphs){const e=s.canvas.getBoundingClientRect();if(t.clientY>=e.top&&t.clientY<=e.bottom){let t=a<0?.9:1/.9;let e=s.chart.options.scales.yAxes[0].ticks;if(e.min===undefined)e.min=s.chart.scales["y-axis-0"].min;if(e.max===undefined)e.max=s.chart.scales["y-axis-0"].max;let i=e.max-e.min;i=i-i*t;e.max-=i*.5;e.min+=i*.5;if(!s.yaxisLock){s.yaxisLock=2;this.updateScaleLockState(s,true)}s.chart.options.scales.yAxes[0].ticks.removeEdgeTicks=true;s.chart.update();break}}}}matchWildcardPattern(t){t=t.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]","g"),"\\$&");t=t.replace(/\\\*/g,".*");return new RegExp("^"+t+"$","i")}addEntitySelected(t){if(this.state.loading)return;let e=t.target?t.target.id=="b8_0"?0:1:-1;if(e<0)return;const i=this.ui.inputField[e]?.value;for(let t of this.ui.inputField)if(t)t.value="";if(i.indexOf("*")>=0){const s=this._this.querySelector(isMobile?`#es_${e}`:`#b6_${this.cid}`);if(!s)return;const a=this.matchWildcardPattern(i);for(let t of Array.from(s.children)){const i=t.innerText;if(a.test(i)){if(this._hass.states[i]==undefined)continue;this.addDynamicGraph(i);this.pconfig.entities.push(i)}}}else{if(this._hass.states[i]==undefined)return;this.addDynamicGraph(i);this.pconfig.entities.push(i)}this.updateHistoryWithClearCache();this.writeLocalState()}removeAllEntities(){this.menuSetVisibility(0,false);this.menuSetVisibility(1,false);if(!confirm(i18n("ui.popup.remove_all")))return;let e=0;for(e=0;e<this.graphs.length;e++)if(this.graphs[e].id>=this.firstDynamicId)break;for(let t=e;t<this.graphs.length;t++)this.graphs[t].canvas.parentNode.remove();this.graphs.splice(e);this.pconfig.entities=[];this.writeLocalState()}getDomainForEntity(t){return t.substr(0,t.indexOf("."))}getDeviceClass(t){return this._hass.states[t]?.attributes?.device_class}getUnitOfMeasure(t,e){return e===undefined?this._hass.states[t]?.attributes?.unit_of_measurement:e}getStateClass(t){return this._hass.states[t]?.attributes?.state_class}getEntityOptions(t){let e=this.pconfig.entityOptions?.[t];if(!e){const i=this.getDeviceClass(t);e=i?this.pconfig.entityOptions?.[i]:undefined;if(!e){const s=this.getDomainForEntity(t);e=s?this.pconfig.entityOptions?.[s]:undefined}}return e??undefined}calcGraphHeight(t,e,i){switch(t){case"line":return i?i:this.pconfig.lineGraphHeight;case"bar":return(i?i:this.pconfig.barGraphHeight)+24;default:const s=this.pconfig.tooltipSize=="full"?130:this.pconfig.tooltipSize=="slim"?90:115;return Math.max(34+e*this.pconfig.timelineBarSpacing,s)}}removeGraph(t){const i=t.target.id.substr(t.target.id.indexOf("-")+1);for(let e=0;e<this.graphs.length;e++){if(this.graphs[e].id==i){this.graphs[e].canvas.parentNode.remove();for(let t of this.graphs[e].entities){const s=this.pconfig.entities.indexOf(t.entity);if(s>=0)this.pconfig.entities.splice(s,1)}this.graphs.splice(e,1);break}}this.updateHistoryWithClearCache();this.writeLocalState()}addFixedGraph(s){if(s.graph.type=="line"||s.graph.type=="bar"){let i=[];for(let e of s.graph.entities){const a=this.getNextDefaultColor();const n=e.color??a.color;let t=e.fill??(e.color?"rgba(0,0,0,0)":a.fill);if(s.graph.type=="bar")t=n;i.push({...e,color:n,fill:t})}this.addGraphToCanvas(s.id,s.graph.type,i,s.graph.options)}else this.addGraphToCanvas(s.id,s.graph.type,s.graph.entities,s.graph.options);if(s.graph.type=="bar")this._this.querySelector(`#bd-${s.id}`)?.addEventListener("change",this.selectBarInterval.bind(this));if(s.graph.type=="line"||s.graph.type=="bar")this._this.querySelector(`#ca-${s.id}`)?.addEventListener("click",this.scaleLockClicked.bind(this))}addDynamicGraph(t){if(this._hass.states[t]==undefined)return;var e=this.getEntityOptions(t);const i=this.getUnitOfMeasure(t);const s=this.getStateClass(t);const a=e?.type?e.type:s==="total_increasing"?"bar":i==undefined&&s!=="measurement"?"timeline":"line";let n=[{entity:t,color:"#000000",fill:"#00000000",process:e?.process}];if(a=="line"||a=="arrowline"||a=="bar"){if(e?.color){n[0].color=e?.color;n[0].fill=e?.fill??"rgba(0,0,0,0)"}else{const p=this.getNextDefaultColor();n[0].color=p.color;n[0].fill=e?.fill??p.fill}n[0].dashMode=e?.dashMode;n[0].width=e?.width;n[0].lineMode=e?.lineMode;n[0].scale=e?.scale;n[0].hidden=e?.hidden;n[0].netBars=e?.netBars;if(a=="bar"){n[0].fill=n[0].color;n[0].lineMode=e?.lineMode??"lines"}}const o=this.graphs.length-1;let r=o>=0&&a!="bar"&&this.graphs[o].type===a&&(a=="timeline"||this.pconfig.combineSameUnits&&this.getUnitOfMeasure(t)==this.getUnitOfMeasure(this.graphs[o].entities[0].entity));if(r){n=this.graphs[this.graphs.length-1].entities.concat(n);this.graphs[this.graphs.length-1].canvas.parentNode.remove();this.graphs.length--}const l=this.calcGraphHeight(a,n.length,e?.height);let h="";h+=`<div sytle='height:${l}px'>`;h+=`<canvas id="graph${this.g_id}" height="${l}px" style='touch-action:pan-y'></canvas>`;h+=`<button id='bc-${this.g_id}' style="position:absolute;right:20px;margin-top:${-l+5}px;color:var(--primary-text-color);background-color:${this.pconfig.closeButtonColor};border:0px solid black;">×</button>`;if(a=="bar"&&!this.ui.hideInterval)h+=this.createIntervalSelectorHtml(this.g_id,l,this.parseIntervalConfig(e?.interval),this.ui.optionStyle);if(a=="line"||a=="bar")h+=this.createScaleLockIconHtml(this.g_id,l);h+=`</div>`;let c=document.createElement("div");c.innerHTML=h;let d=this._this.querySelector("#graphlist");d.appendChild(c);if(a=="bar"&&!this.ui.hideInterval)this._this.querySelector(`#bd-${this.g_id}`).addEventListener("change",this.selectBarInterval.bind(this));if(a=="line"||a=="bar")this._this.querySelector(`#ca-${this.g_id}`)?.addEventListener("click",this.scaleLockClicked.bind(this));this._this.querySelector(`#bc-${this.g_id}`).addEventListener("click",this.removeGraph.bind(this));this.addGraphToCanvas(this.g_id++,a,n,e)}addGraphToCanvas(t,e,i,s){const a=this._this.querySelector(`#graph${t}`);let n=[];for(let t of i){n.push({name:t.name===undefined?this._hass.states[t.entity]?.attributes?.friendly_name:t.name,bColor:parseColor(t.color),fillColor:parseColor(t.fill),dashMode:t.dashMode,mode:t.lineMode||this.pconfig.defaultLineMode,width:t.width||this.pconfig.defaultLineWidth,unit:this.getUnitOfMeasure(t.entity,t.unit),domain:this.getDomainForEntity(t.entity),device_class:this.getDeviceClass(t.entity),hidden:t.hidden,entity_id:t.entity})}const o=this.newGraph(a,e,n,s);const r=this.calcGraphHeight(e,i.length,s?.height);const l=this.parseIntervalConfig(s?.interval)??1;const h={id:t,type:e,canvas:a,graphHeight:r,chart:o,entities:i,interval:l};this.graphs.push(h);a.addEventListener("pointerdown",this.pointerDown.bind(this));a.addEventListener("pointermove",this.pointerMove.bind(this));a.addEventListener("pointerup",this.pointerUp.bind(this));a.addEventListener("pointercancel",this.pointerCancel.bind(this));if(e=="line"||e=="bar")this.updateScaleLockState(h,false)}addUIHtml(t,e,i,s,a,n,o){let r="";if((t||e)&&this.ui.stickyTools&1<<o){const h=o?"bottom:0px":"top:var(--header-height)";r=`<div style="position:sticky;${h};padding-top:${this.ui.hideHeader?0:15}px;padding-bottom:10px;margin-top:-${this.ui.hideHeader?0:15}px;z-index:1;background-color:var(--card-background-color);line-height:0px;">`}if(t||e)r+=`<div style="margin-left:0px;width:100%;min-height:30px;text-align:center;display:block;line-height:normal;">`;const l=`<a id="eh_${o}" href="#" style="display:block;padding:5px 5px;text-decoration:none;color:inherit"></a>`;if(t)r+=`
            <div id="dl_${o}" style="background-color:${i};float:left;margin-left:10px;display:inline-block;padding-left:10px;padding-right:10px;">
                <button id="b1_${o}" style="margin:0px;border:0px solid black;color:inherit;background-color:#00000000;height:30px"><</button>
                <button id="bx_${o}" style="margin:0px;border:0px solid black;color:inherit;background-color:#00000000;height:30px">-</button>
                <button id="b2_${o}" style="margin:0px;border:0px solid black;color:inherit;background-color:#00000000;height:30px">></button>
            </div>`;if(e&&isMobile)r+=`
            <div id='sl_${o}' style="background-color:${i};display:none;padding-left:10px;padding-right:10px;">
                <input id="b7_${o}" ${a} autoComplete="on"/>
                <div id="es_${o}" style="display:none;position:absolute;text-align:left;min-width:260px;max-height:150px;overflow:auto;border:1px solid #444;z-index:1;color:var(--primary-text-color);background-color:var(--card-background-color)"></div>
                <button id="b8_${o}" style="border:0px solid black;color:inherit;background-color:#00000000;height:34px;margin-left:5px;">+</button>
                <button id="bo_${o}" style="border:0px solid black;color:inherit;background-color:#00000000;height:30px;margin-left:1px;margin-right:0px;"><svg width="18" height="18" viewBox="0 0 24 24" style="vertical-align:middle;"><path fill="var(--primary-text-color)" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg></button>
                <div id="eo_${o}" style="display:none;position:absolute;text-align:left;min-width:150px;overflow:auto;border:1px solid #ddd;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;color:var(--primary-text-color);background-color:var(--card-background-color)">
                    <a id="ef_${o}" href="#" style="display:block;padding:5px 5px;text-decoration:none;color:inherit"></a>
                    ${this.statistics.enabled?l:""}
                    <a id="eg_${o}" href="#" style="display:block;padding:5px 5px;text-decoration:none;color:inherit"></a>
                    <a id="ei_${o}" href="#" style="display:block;padding:5px 5px;text-decoration:none;color:inherit"></a>
                </div>
            </div>`;if(e&&!isMobile)r+=`
            <div id='sl_${o}' style="background-color:${i};display:none;padding-left:10px;padding-right:10px;">
                <input id="b7_${o}" ${a} autoComplete="on" list="b6_${this.cid}" placeholder="Type to search for an entity to add"/>
                <button id="b8_${o}" style="border:0px solid black;color:inherit;background-color:#00000000;height:34px;margin-left:5px;">+</button>
                <button id="bo_${o}" style="border:0px solid black;color:inherit;background-color:#00000000;height:30px;margin-left:1px;margin-right:0px;"><svg width="18" height="18" viewBox="0 0 24 24" style="vertical-align:middle;"><path fill="var(--primary-text-color)" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg></button>
                <div id="eo_${o}" style="display:none;position:absolute;text-align:left;min-width:150px;overflow:auto;border:1px solid #ddd;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;color:var(--primary-text-color);background-color:var(--card-background-color)">
                    <a id="ef_${o}" href="#" style="display:block;padding:5px 5px;text-decoration:none;color:inherit"></a>
                    ${this.statistics.enabled?l:""}
                    <a id="eg_${o}" href="#" style="display:block;padding:5px 5px;text-decoration:none;color:inherit"></a>
                    <a id="ei_${o}" href="#" style="display:block;padding:5px 5px;text-decoration:none;color:inherit"></a>
                </div>
            </div>`;if(t)r+=`
            <div id="dr_${o}" style="background-color:${i};float:right;margin-right:10px;display:inline-block;padding-left:10px;padding-right:10px;">
                <button id="bz_${o}" style="margin:0px;border:0px solid black;color:inherit;background-color:#00000000"><svg width="24" height="24" viewBox="0 0 24 24" style="vertical-align:middle;"><path fill="var(--primary-text-color)" d="M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z" /></svg></button>
                <button id="b${n?5:4}_${o}" style="margin:0px;border:0px solid black;color:inherit;background-color:#00000000;height:30px">-</button>
                <select id="by_${o}" style="margin:0px;border:0px solid black;color:inherit;background-color:#00000000;height:30px;max-width:83px">
                    <option value="0" ${s} hidden></option>
                    <option value="1" ${s}></option>
                    <option value="2" ${s}></option>
                    <option value="3" ${s} hidden></option>
                    <option value="4" ${s} hidden></option>
                    <option value="5" ${s} hidden></option>
                    <option value="6" ${s}></option>
                    <option value="7" ${s} hidden></option>
                    <option value="8" ${s} hidden></option>
                    <option value="9" ${s} hidden></option>
                    <option value="10" ${s} hidden></option>
                    <option value="11" ${s} hidden></option>
                    <option value="12" ${s}></option>
                    <option value="24" ${s}></option>
                    <option value="48" ${s}></option>
                    <option value="72" ${s}></option>
                    <option value="96" ${s} hidden></option>
                    <option value="120" ${s} hidden></option>
                    <option value="144" ${s} hidden></option>
                    <option value="168" ${s}></option>
                    <option value="336" ${s}></option>
                    <option value="504" ${s}></option>
                    <option value="720" ${s}></option>
                    <option value="2184" ${s}></option>
                    <option value="4368" ${s}></option>
                    <option value="8760" ${s}></option>
                </select>
                <button id="b${n?4:5}_${o}" style="margin:0px;border:0px solid black;color:inherit;background-color:#00000000;height:30px">+</button>
            </div>`;if(t||e)r+=`</div>`;r+=`<div id='rf_${o}' style="margin-left:0px;margin-top:10px;margin-bottom:0px;width:100%;text-align:center;display:none;line-height:normal;"></div>`;if((t||e)&&this.ui.stickyTools&1<<o)r+=`</div>`;return r}insertUIHtmlText(t){let e=this._this.querySelector(`#ef_${t}`);if(e)e.innerHTML=i18n("ui.menu.export_csv");let i=this._this.querySelector(`#eh_${t}`);if(i)i.innerHTML=i18n("ui.menu.export_stats");let s=this._this.querySelector(`#eg_${t}`);if(s)s.innerHTML=i18n("ui.menu.remove_all");let a=this._this.querySelector(`#ei_${t}`);if(a)a.innerHTML=infoPanelEnabled?i18n("ui.menu.disable_panel"):i18n("ui.menu.enable_panel");let n=this._this.querySelector(`#by_${t}`);if(n){n.children[0].innerHTML=i18n("ui.ranges.l_hour");n.children[1].innerHTML=i18n("ui.ranges.hour");n.children[2].innerHTML=i18n("ui.ranges.n_hours",2);n.children[3].innerHTML=i18n("ui.ranges.n_hours",3);n.children[4].innerHTML=i18n("ui.ranges.n_hours",4);n.children[5].innerHTML=i18n("ui.ranges.n_hours",5);n.children[6].innerHTML=i18n("ui.ranges.n_hours",6);n.children[7].innerHTML=i18n("ui.ranges.n_hours",7);n.children[8].innerHTML=i18n("ui.ranges.n_hours",8);n.children[9].innerHTML=i18n("ui.ranges.n_hours",9);n.children[10].innerHTML=i18n("ui.ranges.n_hours",10);n.children[11].innerHTML=i18n("ui.ranges.n_hours",11);n.children[12].innerHTML=i18n("ui.ranges.n_hours",12);n.children[13].innerHTML=i18n("ui.ranges.day");n.children[14].innerHTML=i18n("ui.ranges.n_days",2);n.children[15].innerHTML=i18n("ui.ranges.n_days",3);n.children[16].innerHTML=i18n("ui.ranges.n_days",4);n.children[17].innerHTML=i18n("ui.ranges.n_days",5);n.children[18].innerHTML=i18n("ui.ranges.n_days",6);n.children[19].innerHTML=i18n("ui.ranges.week");n.children[20].innerHTML=i18n("ui.ranges.n_weeks",2);n.children[21].innerHTML=i18n("ui.ranges.n_weeks",3);n.children[22].innerHTML=i18n("ui.ranges.month");n.children[23].innerHTML=i18n("ui.ranges.n_months",3);n.children[24].innerHTML=i18n("ui.ranges.n_months",6);n.children[25].innerHTML=i18n("ui.ranges.year")}}resize(){const t=this._this.querySelector("#maincard").clientWidth;if(Math.abs(this.lastWidth-t)>2){const e=this.computeTickDensity(t)!=this.computeTickDensity(this.lastWidth);this.lastWidth=t;for(let t of this.graphs)t.chart.resize(undefined,t.graphHeight);if(e)this.setStepSize(true)}this.resizeSelector()}adjustSelectorPosition(t,e){const i=this._this.querySelector(`#rf_${e}`);const s=this._this.querySelector(`#sl_${e}`);s.style.display="inline-block";const a=i.style.display!=="none";if(!t&&a){i.style.display="none";const n=this._this.querySelector(`#dl_${e}`);n.after(s)}else if(t&&!a){i.style.display="block";i.appendChild(s)}}resizeSelector(){const i=120;const s=220;const a=500;const n=this._this.querySelector("#maincard").clientWidth;for(let e=0;e<2;++e){const o=this._this.querySelector(`#b7_${e}`);if(o){let t=n-i-(this._this.querySelector(`#dl_${e}`)?.clientWidth??0)-(this._this.querySelector(`#dr_${e}`)?.clientWidth??0);const r=t<s&&this._this.querySelector(`#dl_${e}`)!=null;this.adjustSelectorPosition(r,e);if(!r){t=Math.min(t,a);o.style.width=t+"px"}else o.style.width=n-108+"px"}}}createContent(){if(!this.contentValid){this.contentValid=true;for(let t=0;t<2;t++)this.insertUIHtmlText(t);let t=getComputedStyle(this._this.querySelector("#maincard")).backgroundColor.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);this.ui.darkMode=this._hass.selectedTheme&&this._hass.selectedTheme.dark||this._hass.themes&&this._hass.themes.darkMode;this.ui.darkMode|=t&&t.length==4&&(+t[1]+ +t[2]+ +t[3])/3<=100;if(this._this.config.uimode){if(this._this.config.uimode==="dark")this.ui.darkMode=true;else if(this._this.config.uimode==="light")this.ui.darkMode=false}this.pconfig.graphLabelColor=parseColor(this._this.config.uiColors?.labels??(this.ui.darkMode?"#9b9b9b":"#333"));this.pconfig.graphGridColor=parseColor(this._this.config.uiColors?.gridlines??(this.ui.darkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"));this.pconfig.cursorLineColor=parseColor(this._this.config.uiColors?.cursorline??this.pconfig.graphGridColor);this.pconfig.nextDefaultColor=0;this.graphs=[];for(let t of this.pconfig.graphConfig)this.addFixedGraph(t);this.resizeSelector();for(let t=0;t<2;t++){this._this.querySelector(`#b1_${t}`)?.addEventListener("click",this.subDay.bind(this),false);this._this.querySelector(`#b2_${t}`)?.addEventListener("click",this.addDay.bind(this),false);this._this.querySelector(`#b4_${t}`)?.addEventListener("click",this.decZoom.bind(this),false);this._this.querySelector(`#b5_${t}`)?.addEventListener("click",this.incZoom.bind(this),false);this._this.querySelector(`#b8_${t}`)?.addEventListener("click",this.addEntitySelected.bind(this));this._this.querySelector(`#bx_${t}`)?.addEventListener("click",this.todayNoReset.bind(this),false);this._this.querySelector(`#bx_${t}`)?.addEventListener("dblclick",this.todayReset.bind(this),false);this._this.querySelector(`#by_${t}`)?.addEventListener("change",this.timeRangeSelected.bind(this));this._this.querySelector(`#bz_${t}`)?.addEventListener("click",this.toggleZoom.bind(this),false);this._this.querySelector(`#ef_${t}`)?.addEventListener("click",this.exportFile.bind(this),false);this._this.querySelector(`#eh_${t}`)?.addEventListener("click",this.exportStatistics.bind(this),false);this._this.querySelector(`#eg_${t}`)?.addEventListener("click",this.removeAllEntities.bind(this),false);this._this.querySelector(`#ei_${t}`)?.addEventListener("click",this.toggleInfoPanel.bind(this),false);this._this.querySelector(`#bo_${t}`)?.addEventListener("click",this.menuClicked.bind(this),false);if(isMobile){this._this.querySelector(`#b7_${t}`)?.addEventListener("focusin",this.entitySelectorFocus.bind(this),true);this._this.querySelector(`#b7_${t}`)?.addEventListener("keyup",this.entitySelectorEntered.bind(this),true)}this.ui.dateSelector[t]=this._this.querySelector(`#bx_${t}`);this.ui.rangeSelector[t]=this._this.querySelector(`#by_${t}`);this.ui.zoomButton[t]=this._this.querySelector(`#bz_${t}`)}if(!isMobile)this._this.querySelector("#maincard").addEventListener("wheel",this.wheelScrolled.bind(this),{passive:false});this.readLocalState();this.pconfig.nextDefaultColor=0;if(this.pconfig.entities){for(let t of this.pconfig.entities)this.addDynamicGraph(t)}else this.pconfig.entities=[];this.setTimeRangeFromString(String(this.pconfig.defaultTimeRange));this.today(false);let e=new ResizeObserver(t=>{this.resize()});e.observe(this._this.querySelector("#maincard"));this.writeInfoPanelConfig();if(this.pconfig.refreshInterval)setInterval(this.refresh.bind(this),this.pconfig.refreshInterval*1e3)}}refresh(){this.cache[this.cacheSize].valid=false;this.updateHistory()}updateContent(){if(!this.contentValid){let t=this._this.querySelector("#maincard").clientWidth;if(t>0){clearInterval(this.iid);this.createContent();this.iid=null}}}menuSetVisibility(e,t){const i=this._this.querySelector(`#eo_${e}`);if(!i)return;this._this.querySelector(`#bo_${e}`).style.transform=t?"scale(1,-1)":"scale(1,1)";if(t){i.style.display="block";const s=this._this.querySelector("#maincard").clientWidth-4;let t=this._this.querySelector(`#bo_${e}`).offsetLeft-30;if(t+i.clientWidth>=s){t=s-i.clientWidth}i.style.left=t+"px"}else i.style.display="none"}menuClicked(t){if(!t.currentTarget)return;const e=t.currentTarget.id.substr(3)*1;this.menuSetVisibility(e,this._this.querySelector(`#eo_${e}`)?.style.display=="none")}setDropdownVisibility(t,e){let i=this._this.querySelector(`#b7_${t}`);let s=this._this.querySelector(`#es_${t}`);if(!i||!s)return;if(e){s.style["min-width"]=i.clientWidth+"px";s.style.display="block";for(let t of s.getElementsByTagName("a"))t.style.display="block"}else s.style.display="none"}entitySelectorFocus(t){if(!t.target)return;const e=t.target.id.substr(3)*1;this.setDropdownVisibility(e^1,false);this.setDropdownVisibility(e,true);this.focusClick=true;if(!this.focusListener){this.focusListener=true;window.addEventListener("click",this.defocusCall)}}entitySelectorDefocus(t){if(!this.focusClick){window.removeEventListener("click",this.defocusCall);this.focusListener=undefined;this.setDropdownVisibility(0,false);this.setDropdownVisibility(1,false)}else this.focusClick=undefined}entitySelectorEntered(t){if(!t.target)return;const e=t.target.id.substr(3)*1;let i=this._this.querySelector(`#es_${e}`);let s=this._this.querySelector(`#b7_${e}`);let a=s.value.toLowerCase();let n=i.getElementsByTagName("a");for(let e of n){let t=e.textContent;if(t.toLowerCase().indexOf(a)>=0)e.style.display="block";else e.style.display="none"}}entitySelectorEntryClicked(t){window.removeEventListener("click",this.defocusCall);this.focusListener=undefined;const e=t.target.href.slice(-1);let i=this._this.querySelector(`#b7_${e}`);let s=this._this.querySelector(`#es_${e}`);i.value=t.target.id;s.style.display="none"}buildFilterRegexList(){let e=[];if(this.pconfig.filterEntities){if(Array.isArray(this.pconfig.filterEntities)){for(let t of this.pconfig.filterEntities)if(t)e.push(this.matchWildcardPattern(t))}else e.push(this.matchWildcardPattern(this.pconfig.filterEntities))}return e}matchRegexList(e,i){if(!e.length)return true;for(let t of e)if(t.test(i))return true;return false}entityCollectorCallback(e){for(let s=0;s<(isMobile?2:1);++s){const a=this._this.querySelector(isMobile?`#es_${s}`:`#b6_${this.cid}`);if(!a)continue;while(a.firstChild)a.removeChild(a.firstChild);const n=this.buildFilterRegexList();let i=[];for(let t in e){if(this.matchRegexList(n,t))i.push(t)}i.sort();for(let e of i){let t;if(isMobile){t=document.createElement("a");t.href=`#s_${s}`;t.id=e;t.style="display:block;padding:2px 5px;text-decoration:none;color:inherit";t.addEventListener("click",this.entitySelectorEntryClicked.bind(this),true)}else t=document.createElement("option");t.innerHTML=e;a.appendChild(t)}}for(let t of this.ui.inputField)if(t)t.placeholder=i18n("ui.label.type_to_search")}entityCollectorFailed(t){console.log(t);this.entityCollectAll();for(let t of this.ui.inputField)if(t)t.placeholder=i18n("ui.label.error_retreiving")}entityCollectAll(){for(let s=0;s<(isMobile?2:1);++s){const a=this._this.querySelector(isMobile?`#es_${s}`:`#b6_${this.cid}`);if(!a)continue;while(a.firstChild)a.removeChild(a.firstChild);const e=this.buildFilterRegexList();let i=[];for(let t in this._hass.states){if(!this.matchRegexList(e,t))continue;const n=this.getDomainForEntity(t);if(!["automation","script","zone","camera","persistent_notification","timer"].includes(n)){i.push(t)}}i.sort();for(let e of i){let t;if(isMobile){t=document.createElement("a");t.href=`#s_${s}`;t.id=e;t.style="display:block;padding:2px 5px;text-decoration:none;color:inherit";t.addEventListener("click",this.entitySelectorEntryClicked.bind(this),true)}else t=document.createElement("option");t.innerHTML=e;a.appendChild(t)}}for(let t of this.ui.inputField)if(t)t.placeholder=i18n("ui.label.type_to_search")}requestEntityCollection(){if(this.entitiesPopulated)return;this.entitiesPopulated=true;if(this.ui.hideSelector)return;this.ui.inputField[0]=this._this.querySelector(`#b7_0`);this.ui.inputField[1]=this._this.querySelector(`#b7_1`);if(this.pconfig.recordedEntitiesOnly){for(let t of this.ui.inputField)if(t)t.placeholder=i18n("ui.label.loading");const t=moment().subtract(1,"hour").format("YYYY-MM-DDTHH:mm:ss");const i=this.buildFilterRegexList();let e=[];for(let t in this._hass.states){if(!this.matchRegexList(i,t))continue;const s=this.getDomainForEntity(t);if(!["automation","script","zone","camera","persistent_notification","timer"].includes(s))e.push(t)}const s={type:"history/history_during_period",start_time:t,minimal_response:true,no_attributes:true,entity_ids:e};this._hass.callWS(s).then(this.entityCollectorCallback.bind(this),this.entityCollectorFailed.bind(this))}else this.entityCollectAll()}initLocalization(){if(this.i18n.valid)return;let t=this._hass.language?this._hass.language:"en-GB";setLanguage(t);this.ui.wideInterval=["da","nl","sv","sk","ru"].includes(t);const e=getLocalizedDateString(t,{dateStyle:"medium"});const i=e[0]=="D"?"D MMM":"MMM D";this.i18n.styleDateTicks=this.pconfig.timeTickShortDate?"D":i;this.i18n.styleDateSelector=isMobile?i:e;if(this._hass.locale?.time_format==="24")t="en-GB";if(this._hass.locale?.time_format==="12")t="en-US";this.i18n.styleTimeTicks=getLocalizedDateString(t,{timeStyle:"short"});this.i18n.styleDateTimeTooltip=this.i18n.styleDateTicks+", "+getLocalizedDateString(t,{timeStyle:"medium"});this.i18n.valid=true}writeLocalState(){const t={version:1,entities:this.pconfig.entities};window.localStorage.removeItem("history-explorer-card");window.localStorage.removeItem("history-explorer_card_"+this.id);window.localStorage.setItem("history-explorer_card_"+this.id,JSON.stringify(t))}readLocalState(){let t=JSON.parse(window.localStorage.getItem("history-explorer_card_"+this.id));if(t&&t.version===1){this.pconfig.entities=t.entities}else{t=JSON.parse(window.localStorage.getItem("history-explorer-card"));if(t)this.pconfig.entities=t;else this.pconfig.entities=[]}}writeInfoPanelConfig(t=false){if(!infoPanelEnabled){window.localStorage.removeItem("history-explorer-info-panel")}else if(infoPanelEnabled&&(this.pconfig.infoPanelConfig||t)){let t={};t.enabled=true;t.config=this.pconfig.infoPanelConfig;window.localStorage.removeItem("history-explorer-info-panel");window.localStorage.setItem("history-explorer-info-panel",JSON.stringify(t))}}handleChangedEntities(){if(!this.pconfig.showCurrentValues&&!this.pconfig.refreshEnabled)return false;let t=false;for(let s of this.graphs){let i=0;for(let e of s.entities){const a=this._hass.states[e.entity].last_changed;if(this.stateMap.has(e.entity)&&a!=this.stateMap.get(e.entity)){if(this.pconfig.showCurrentValues){let t=s.chart.data.datasets[i];t.label=this.getFormattedLabelName(t.name,e.entity,t.unit)}t=true}this.stateMap.set(e.entity,a);i++}}return t}buildEntityExclusionList(e){let i=[];if(e)for(let t of e){const s=this.matchWildcardPattern(t.entity);if(s)i.push(s)}return i}buildGraphListFromConfig(s){const a=function(e,i){for(let t of i)if(t.test(e))return true;return false};for(let t=0;t<s.length;t++){if(!s[t].entities)continue;let i={...s[t],entities:[]};for(let e of s[t].entities){if(e.entity.indexOf("*")>=0){const n=this.buildEntityExclusionList(e.exclude);const o=this.matchWildcardPattern(e.entity);for(let t in this._hass.states){if(o&&o.test(t)&&!a(t,n)){i.entities.push({...e,entity:t})}}}else i.entities.push(e)}this.pconfig.graphConfig.push({graph:i,id:this.g_id++})}}}function isSingleSymbol(t){return t.length==1&&t[0].toLowerCase()==t[0].toUpperCase()}function getLocalizedDateString(t,e){let i=new Intl.DateTimeFormat(t,e).formatToParts(new Date);return i.map(t=>{switch(t.type){case"year":return"YYYY";case"month":return"MMM";case"day":return"D";case"hour":return i.findIndex(t=>t.type=="dayPeriod")>=0?"h":"HH";case"minute":return"mm";case"second":return"ss";case"dayPeriod":return"a";default:return[".",",","/","-"].includes(t.value)||!isSingleSymbol(t.value)?" ":t.value}}).join("")}var gcid=0;class HistoryExplorerCard extends HTMLElement{instance=null;configSet=false;set hass(t){if(this.configSet){this.configSet=false;this.InitWithConfig(t)}if(!this.instance)return;this.instance._this=this;this.instance._hass=t;this.instance.version=t.config.version.split(".").map(Number);if(!this.instance.i18n.valid)this.instance.initLocalization();if(!this.instance.entitiesPopulated)this.instance.requestEntityCollection();if(!this.instance.contentValid&&!this.instance.iid)this.instance.iid=setInterval(this.instance.updateContent.bind(this.instance),100);if(this.instance.contentValid&&this.instance.handleChangedEntities()){if(this.instance.pconfig.showCurrentValues)this.instance.updateHistory();if(this.instance.pconfig.refreshEnabled){this.instance.cache[this.instance.cacheSize].valid=false;if(this.instance.tid)clearTimeout(this.instance.tid);this.instance.tid=setTimeout(this.instance.updateHistoryAutoRefresh.bind(this.instance),2e3)}}}set panel(t){this.setConfig(t.config)}setConfig(t){this.config=t;this.configSet=true}InitWithConfig(t){const e=this.config;if(!this.instance)this.instance=new HistoryCardState;this.instance._hass=t;this.instance.g_id=0;this.instance.pconfig.graphConfig=[];if(e.graphs)this.instance.buildGraphListFromConfig(e.graphs);this.instance.firstDynamicId=this.instance.g_id;this.instance.pconfig.customStateColors={};if(e.stateColors){for(let t in e.stateColors){this.instance.pconfig.customStateColors[t]=parseColor(e.stateColors[t])}}this.instance.pconfig.entityOptions=e.entityOptions;this.instance.pconfig.labelAreaWidth=e.labelAreaWidth??65;this.instance.pconfig.labelsVisible=e.labelsVisible??true;this.instance.pconfig.hideLegend=e.legendVisible==false?true:undefined;this.instance.pconfig.cursorMode=e.cursor?.mode??"auto";this.instance.pconfig.cursorTypes=e.cursor?.types??["timeline"];this.instance.pconfig.showTooltipColors[0]=e.tooltip?.showColorsLine??e.showTooltipColorsLine??true;this.instance.pconfig.showTooltipColors[1]=e.tooltip?.showColorsTimeline??e.showTooltipColorsTimeline??true;this.instance.pconfig.tooltipSize=e.tooltip?.size??e.tooltipSize??"auto";this.instance.pconfig.tooltipShowDuration=e.tooltip?.showDuration??e.tooltipShowDuration??false;this.instance.pconfig.tooltipShowLabel=e.tooltip?.showLabel??true;this.instance.pconfig.tooltipStateTextMode=e.tooltip?.stateTextMode??e.stateTextMode??"auto";this.instance.pconfig.colorSeed=e.stateColorSeed??137;this.instance.pconfig.stateTextMode=e.stateTextMode??"auto";this.instance.pconfig.decimation=e.decimation;this.instance.pconfig.roundingPrecision=e.rounding||2;this.instance.pconfig.defaultLineMode=e.lineMode;this.instance.pconfig.defaultLineWidth=e.lineWidth??2;this.instance.pconfig.showUnavailable=e.showUnavailable??false;this.instance.pconfig.showCurrentValues=e.showCurrentValues??true;this.instance.pconfig.axisAddMarginMin=e.axisAddMarginMin!==undefined?e.axisAddMarginMin:false;this.instance.pconfig.axisAddMarginMax=e.axisAddMarginMax!==undefined?e.axisAddMarginMax:false;this.instance.pconfig.recordedEntitiesOnly=e.recordedEntitiesOnly??false;this.instance.pconfig.filterEntities=e.filterEntities;this.instance.pconfig.combineSameUnits=e.combineSameUnits===true;this.instance.pconfig.defaultTimeRange=e.defaultTimeRange??"24";this.instance.pconfig.defaultTimeOffset=e.defaultTimeOffset??undefined;this.instance.pconfig.timeTickDensity=e.timeTicks?.density??e.timeTickDensity??"high";this.instance.pconfig.timeTickOverride=e.timeTicks?.densityOverride??undefined;this.instance.pconfig.timeTickShortDate=e.timeTicks?.dateFormat==="short";this.instance.pconfig.lineGraphHeight=(e.lineGraphHeight??250)*1;this.instance.pconfig.barGraphHeight=(e.barGraphHeight??150)*1;this.instance.pconfig.timelineBarHeight=(e.timelineBarHeight??24)*1;this.instance.pconfig.timelineBarSpacing=(e.timelineBarSpacing??40)*1;this.instance.pconfig.refreshEnabled=e.refresh?.automatic??false;this.instance.pconfig.refreshInterval=e.refresh?.interval??undefined;this.instance.pconfig.exportSeparator=e.csv?.separator;this.instance.pconfig.exportTimeFormat=e.csv?.timeFormat;this.instance.pconfig.exportAttributes=e.csv?.exportAttributes;this.instance.pconfig.exportStatsPeriod=e.csv?.statisticsPeriod??"hour";this.instance.pconfig.exportNumberLocale=e.csv?.numberLocale;this.instance.statistics.enabled=e.statistics?.enabled??true;this.instance.statistics.mode=e.statistics?.mode??"mean";this.instance.statistics.retention=e.statistics?.retention??undefined;this.instance.statistics.period=e.statistics?.period??"hour";this.instance.statistics.force=e.statistics?.force??undefined;this.instance.pconfig.closeButtonColor=parseColor(e.uiColors?.closeButton??"#0000001f");this.instance.pconfig.infoPanelConfig=e.infoPanel;this.instance.id=e.cardName??"default";this.instance.cid=gcid++;this.instance.contentValid=false;this.instance.entitiesPopulated=false;const i=e.header||"History explorer";const s=parseColor(e.uiColors?.buttons??getComputedStyle(document.body).getPropertyValue("--primary-color")+"1f");const a={hide:0,top:1,bottom:2,both:3};const n=a[e.uiLayout?.toolbar]??1;const o=a[e.uiLayout?.selector]??2;this.instance.ui.stickyTools=a[e.uiLayout?.sticky]??0;this.instance.ui.hideSelector=o===0;const r=e.uiLayout?.invertZoom===true;const l=`style="color:var(--primary-text-color);background-color:var(--card-background-color)"`;const h=e.uiColors?.selector?`style="color:var(--primary-text-color);background-color:${e.uiColors.selector};border:1px solid black;"`:"";this.instance.ui.optionStyle=l;this.instance.ui.hideHeader=i==="hide";this.instance.ui.hideInterval=e.uiLayout?.interval==="hide";let c=`
            <ha-card id="maincard" header="${this.instance.ui.hideHeader?"":i}">
            ${this.instance.addUIHtml(n&1,o&1,s,l,h,r,0)}
            <div id='graphlist' class='card-content' style='margin-top:${this.instance.ui.stickyTools&1?"0px":"8px"};'>
        `;let d=true;for(let t of this.instance.pconfig.graphConfig){if(t.id>0&&d)c+="<br>";if(t.graph.title!==undefined)c+=`<div style='text-align:center;'>${t.graph.title}</div>`;const p=this.instance.calcGraphHeight(t.graph.type,t.graph.entities.length,t.graph.options?.height);c+=`<div style='height:${p}px'>`;c+=`<canvas id="graph${t.id}" height="${p}px" style='touch-action:pan-y'></canvas>`;if(t.graph.type=="bar"&&!this.instance.ui.hideInterval)c+=this.instance.createIntervalSelectorHtml(t.id,p,this.instance.parseIntervalConfig(t.graph.options?.interval),l);if(t.graph.type=="line"||t.graph.type=="bar")c+=this.instance.createScaleLockIconHtml(t.id,p);c+=`</div>`;d=!(t.graph.options?.showTimeLabels===false)}c+=`
            </div>
            ${this.instance.addUIHtml(n&2,o&2,s,l,h,r,1)}
            ${(n|o)&2&&!(this.instance.ui.stickyTools&2)?"<br>":""}
            <datalist id="b6_${this.instance.cid}"></datalist>
            </ha-card>
        `;this.innerHTML=c;this.instance.ui.spinOverlay=document.createElement("div");this.instance.ui.spinOverlay.style="position:fixed;display:block;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2;backdrop-filter:blur(5px)";this.instance.ui.spinOverlay.innerHTML=`<svg width="38" height="38" viewBox="0 0 38 38" stroke="#fff" style="position:fixed;left:calc(50% - 20px);top:calc(50% - 20px);"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg>`}getCardSize(){return 3}static getStubConfig(){return{cardName:"historycard-"+Math.floor(Math.random()*99999999+1)}}}console.info(`%c HISTORY-EXPLORER-CARD %c Version ${Version}`,"color:white;background:blue;font-weight:bold","color:black;background:white;font-weight:bold");customElements.define("history-explorer-card",HistoryExplorerCard);window.customCards=window.customCards||[];window.customCards.push({type:"history-explorer-card",name:"History Explorer Card",preview:false,description:"An interactive history viewer card"});
    // TODO: End of src/history-explorer-card.js



// TODO: start of src/history-chart-vline.js
    const vertline_plugin={id:"vertline",afterInit:e=>{e.vertline={x:0,draw:false}},afterEvent:(r,t)=>{const e=r.callerInstance.pconfig;if(isMobile||e.cursorMode==="hide")return;if(!e.cursorTypes.includes("all")&&!e.cursorTypes.includes(r.config.type))return;const{chartArea:{top:o,bottom:a,left:l,right:i}}=r;const n=t.x>=l&&t.x<=i&&t.y>=o&&t.y<=a;if(e.cursorMode==="auto"){r.vertline={x:t.x,draw:n};r.draw()}else if(e.cursorMode==="all"){for(let e of r.callerInstance.graphs){e.chart.vertline={x:t.x,draw:n};e.chart.draw()}}},afterDatasetsDraw:(e,r,t)=>{const{ctx:o,chartArea:{top:a,bottom:l,left:i,right:n}}=e;if(e.vertline.draw){o.lineWidth=1;o.strokeStyle=t.color||"black";o.save();o.beginPath();o.moveTo(e.vertline.x,l);o.lineTo(e.vertline.x,a);o.stroke();o.restore()}}};
    // TODO: end of src/history-chart-vline.js

    // TODO: Start of src/history-default-colors.js
    var defaultColors=[{color:"#3e95cd",fill:"rgba(151,187,205,0.15)"},{color:"#95cd3e",fill:"rgba(187,205,151,0.15)"},{color:"#cd3e3e",fill:"rgba(205,151,151,0.15)"},{color:"#3ecd95",fill:"rgba(151,205,187,0.15)"},{color:"#cd953e",fill:"rgba(205,187,151,0.15)"},{color:"#953ecd",fill:"rgba(187,151,205,0.15)"},{color:"#175ec8",fill:"rgba(151,187,205,0.15)"},{color:"#ff7f00",fill:"rgba(225,179,133,0.15)"},{color:"#cd3e95",fill:"rgba(205,151,187,0.15)"}];const defaultGood="#66a61e";const defaultBad="#b5342d";const defaultMultiple="#e5ad23";const activeRed="#cd3e3e";const activeGreen="#3ecd3e";const multipleRed="rgb(213, 142, 142)";const multipleGreen="rgb(142, 213, 142)";const defaultInactiveLight="#dddddd";const defaultInactiveDark="#383838";const stateColors={unknown:"#888888",unavailable:"#aaaaaa",idle:"#aaaaaa",on:activeRed,off:defaultInactiveLight,"binary_sensor.multiple":multipleRed,"battery_charging.on":activeGreen,"battery_charging.multiple":multipleGreen,"plug.on":activeGreen,"plug.multiple":multipleGreen,"running.on":activeGreen,"running.multiple":multipleGreen,"update.on":activeGreen,"update.multiple":multipleGreen,"connectivity.on":defaultGood,"connectivity.off":defaultBad,"connectivity.multiple":defaultMultiple,"power.on":defaultGood,"power.off":defaultBad,"power.multiple":defaultMultiple,"presence.on":defaultGood,"presence.off":defaultBad,"presence.multiple":defaultMultiple,"gas.on":defaultBad,"gas.off":defaultGood,"gas.multiple":defaultMultiple,"smoke.on":defaultBad,"smoke.off":defaultGood,"smoke.multiple":defaultMultiple,"problem.on":defaultBad,"problem.off":defaultGood,"problem.multiple":defaultMultiple,"safety.on":defaultBad,"safety.off":defaultGood,"safety.multiple":defaultMultiple,"person.home":"#66a61e","person.not_home":"#b5342d","person.arriving":"#d5bd43","person.leaving":"#d5bd43","person.multiple":"#e5ad23","weather.cloudy":"#91acce","weather.fog":"#adadad","weather.rainy":"#5285df","weather.partlycloudy":"#11a3e9","weather.sunny":"#e9db11","weather.multiple":"#aaaaaa","automation.on":activeGreen,"automation.multiple":multipleGreen,"input_select.Arret":defaultInactiveLight,"input_select.Eco":"#44739e","input_select.Confort - 2":"#53b8ba","input_select.Confort - 1":"#984ea3","input_select.Confort":"#e99745","sensor.WCDMA":"#44739e","sensor.LTE":"#984ea3"};const stateColorsDark={off:defaultInactiveDark,"input_select.Arret":defaultInactiveDark};function parseColor(e){if(e&&e.constructor==Object)return e;while(e&&e.startsWith("--"))e=getComputedStyle(document.body).getPropertyValue(e);return e}function parseColorRange(t,l){let a,o,n,r;for(let e in t){const i=e*1;if(l>=i&&(n==undefined||i>n)){a=t[e];n=i}if(l<i&&(r==undefined||i<r)){o=t[e];r=i}}return a??o}
    // TODO: end of src/history-default-colors.js

    // TODO: start of src/history-csv-exporter.js
    function isNumber(t){return!isNaN(parseFloat(t))&&!isNaN(t-0)}function localizeNumber(t,e){if(!e||t===undefined||t===null||t===""||!isNumber(t))return t;return e.format(+t)}function escapeSeperator(t,e){if(e!==undefined&&e!==null&&String(e).indexOf(t)>=0)return`"${e}"`;else return e}class HistoryCSVExporter{constructor(){this.overlay=null;this.separator=undefined;this.timeFormat=undefined;this.saveAttributes=undefined;this._hass=null}exportCallback(t){let r=[];let a=[];let o=null;if(this.numberLocale)o=new Intl.NumberFormat(this.numberLocale,{maximumSignificantDigits:20});r.push(`Time stamp${this.separator}State\r\n`);for(let s in t){const n=t[s];if(!n.length)continue;let e=s;if(this.saveAttributes){a=[];if(this._hass.states[s]){e+=`${this.separator}State`;for(let t in this._hass.states[s].attributes){if(!_STATE_ATTRIBUTES.includes(t)){a.push(t);e+=`${this.separator}${t}`}}}}r.push(e+"\r\n");for(let i of n){const l=moment(i.lu*1e3).format(this.timeFormat);let e=localizeNumber(i.s,o);let s=l+this.separator+escapeSeperator(this.separator,e);if(this.saveAttributes){for(let t of a){e=i.a?localizeNumber(i.a[t],o):"";s+=this.separator+escapeSeperator(this.separator,e)}}r.push(s+"\r\n")}}const e=new Blob(r,{type:"text/plain;charset=utf-8"});document.body.removeChild(this.overlay);saveAs(e,"entities-"+moment().format("YYYY-MM-DD_HH:mm:ss")+".csv")}exportFailed(t){document.body.removeChild(this.overlay);console.log(t)}exportFile(s){this.separator=s.pconfig.exportSeparator??",";this.timeFormat=s.pconfig.exportTimeFormat??"YYYY-MM-DD HH:mm:ss";this.saveAttributes=s.pconfig.exportAttributes;this.numberLocale=s.pconfig.exportNumberLocale;this._hass=s._hass;let i=0;let e=s.startTime.replace("+","%2b");let r=s.endTime.replace("+","%2b");let a=[];for(let e of s.graphs){for(let t of e.entities){a.push(t.entity);i++}}if(i>0){this.overlay=s.ui.spinOverlay;document.body.appendChild(this.overlay);let t={type:"history/history_during_period",start_time:moment(e).format("YYYY-MM-DDTHH:mm:ssZ"),end_time:moment(r).format("YYYY-MM-DDTHH:mm:ssZ"),minimal_response:!this.saveAttributes,no_attributes:!this.saveAttributes,entity_ids:a};s._hass.callWS(t).then(this.exportCallback.bind(this),this.exportFailed.bind(this))}}}class StatisticsCSVExporter{constructor(){this.overlay=null;this.separator=undefined;this.timeFormat=undefined}exportCallback(e){let a=[];let o=null;if(this.numberLocale)o=new Intl.NumberFormat(this.numberLocale,{maximumSignificantDigits:20});a.push(`Time stamp${this.separator}State${this.separator}Mean${this.separator}Min${this.separator}Max\r\n`);for(let t in e){const s=e[t];if(!s.length)continue;a.push(t+"\r\n");for(let r of s){const n=moment(r.start).format(this.timeFormat);let t=r.state?localizeNumber(r.state,o):"";let e=r["mean"]?localizeNumber(r["mean"],o):"";let s=r["min"]?localizeNumber(r["min"],o):"";let i=r["max"]?localizeNumber(r["max"],o):"";t=escapeSeperator(this.separator,t);e=escapeSeperator(this.separator,e);s=escapeSeperator(this.separator,s);i=escapeSeperator(this.separator,i);a.push(n+this.separator+t+this.separator+e+this.separator+s+this.separator+i+"\r\n")}}const t=new Blob(a,{type:"text/plain;charset=utf-8"});document.body.removeChild(this.overlay);saveAs(t,"entities-"+moment().format("YYYY-MM-DD_HH:mm:ss")+".csv")}exportFailed(t){document.body.removeChild(this.overlay);console.log(t)}exportFile(s){this.separator=s.pconfig.exportSeparator??",";this.timeFormat=s.pconfig.exportTimeFormat??"YYYY-MM-DD HH:mm:ss";this.numberLocale=s.pconfig.exportNumberLocale;let i=0;let e=s.startTime.replace("+","%2b");let r=s.endTime.replace("+","%2b");let a=[];for(let e of s.graphs){for(let t of e.entities){a.push(t.entity);i++}}if(i>0){this.overlay=s.ui.spinOverlay;document.body.appendChild(this.overlay);let t={type:s.version[0]>2022||s.version[1]>=11?"recorder/statistics_during_period":"history/statistics_during_period",start_time:moment(e).format("YYYY-MM-DDTHH:mm:ssZ"),end_time:moment(r).format("YYYY-MM-DDTHH:mm:ssZ"),period:s.pconfig.exportStatsPeriod??"hour",statistic_ids:a};s._hass.callWS(t).then(this.exportCallback.bind(this),this.exportFailed.bind(this))}}}var _STATE_ATTRIBUTES=["entity_id","assumed_state","attribution","custom_ui_more_info","custom_ui_state_card","device_class","editable","emulated_hue_name","emulated_hue","entity_picture","friendly_name","haaska_hidden","haaska_name","icon","initial_state","last_reset","restored","state_class","supported_features","unit_of_measurement"];
    // TODO: end of src/history-csv-exporter.js


    // TODO: start of src/history-info-panel.js
    const litHtml=t=>{return(o,...e)=>{return{_$litType$:t,strings:o,values:e}}};const html=litHtml(1);let hec_panel={};hec_panel.config=null;hec_panel.show=undefined;hec_panel.entity=null;hec_panel.iid=null;hec_panel.lc=null;function hecHookInfoPanel(){let o=customElements.get("ha-more-info-history");if(!o)return;clearInterval(hec_panel.iid);hec_panel.iid=null;o.prototype._databaseCallback=function(o){if(hec_panel.show===undefined){hec_panel.show=o;if(!o){let o=this.shadowRoot.querySelector("#maincard");if(o)o.style.display="none"}}};o.prototype._setEntityOptions=function(e){const o=this.__entityId;const t=e.getEntityOptions(o);const i=e.getUnitOfMeasure(o);const n=e.getStateClass(o);const l=t?.type?t.type:n==="total_increasing"?"bar":i==undefined&&n!=="measurement"?"timeline":"line";e.pconfig.nextDefaultColor=0;e.pconfig.labelAreaWidth=l=="timeline"||l=="arrowline"?0:55;let r=[{entity:o,process:t?.process}];if(l=="line"||l=="arrowline"||l=="bar"){if(t?.color){r[0].color=t?.color;r[0].fill=t?.fill??"rgba(0,0,0,0)"}else{const s=e.getNextDefaultColor();r[0].color=s.color;r[0].fill=t?.fill??s.fill}r[0].width=t?.width??1.001;r[0].lineMode=t?.lineMode;r[0].scale=t?.scale;if(l=="bar"){r[0].fill=r[0].color;r[0].lineMode=t?.lineMode??"lines"}}const a={type:l,entities:r,options:t};e.pconfig.graphConfig=[];e.pconfig.graphConfig.push({graph:a,id:e.g_id});e.graphs=[];for(let o of e.pconfig.graphConfig)e.addFixedGraph(o)};o.prototype._injectHistoryExplorer=function(e){e.initLocalization();e.insertUIHtmlText(0);for(let o=0;o<1;o++){e._this.querySelector(`#b1_${o}`)?.addEventListener("click",e.subDay.bind(e),false);e._this.querySelector(`#b2_${o}`)?.addEventListener("click",e.addDay.bind(e),false);e._this.querySelector(`#b4_${o}`)?.addEventListener("click",e.decZoom.bind(e),false);e._this.querySelector(`#b5_${o}`)?.addEventListener("click",e.incZoom.bind(e),false);e._this.querySelector(`#bx_${o}`)?.addEventListener("click",e.todayNoReset.bind(e),false);e._this.querySelector(`#bx_${o}`)?.addEventListener("dblclick",e.todayReset.bind(e),false);e._this.querySelector(`#by_${o}`)?.addEventListener("change",e.timeRangeSelected.bind(e));e._this.querySelector(`#bz_${o}`)?.addEventListener("click",e.toggleZoom.bind(e),false);e._this.querySelector(`#bo_${o}`)?.addEventListener("click",e.menuClicked.bind(e),false);e.ui.dateSelector[o]=e._this.querySelector(`#bx_${o}`);e.ui.rangeSelector[o]=e._this.querySelector(`#by_${o}`);e.ui.zoomButton[o]=e._this.querySelector(`#bz_${o}`)}if(!isMobile)e._this.querySelector("#maincard").addEventListener("wheel",e.wheelScrolled.bind(e),{passive:false});const t=hec_panel.config??{};e.g_id=0;e.pconfig.customStateColors={};e.stateColors={...stateColors};e.stateColorsDark={...stateColorsDark};e.stateColors["off"]=defaultGood;e.stateColors["binary_sensor.multiple"]="#e5ad23";e.stateColors["battery_charging.off"]=defaultInactiveLight;e.stateColors["plug.off"]=defaultInactiveLight;e.stateColors["running.off"]=defaultInactiveLight;e.stateColors["update.on"]=defaultInactiveLight;e.stateColorsDark["battery_charging.off"]=defaultInactiveDark;e.stateColorsDark["plug.off"]=defaultInactiveDark;e.stateColorsDark["running.off"]=defaultInactiveDark;e.stateColorsDark["update.on"]=defaultInactiveDark;if(t.stateColors){for(let o in t.stateColors){e.pconfig.customStateColors[o]=parseColor(t.stateColors[o])}}e.pconfig.entityOptions=t.entityOptions;e.pconfig.labelsVisible=false;e.pconfig.cursorMode=t.cursor?.mode??"hide";e.pconfig.cursorTypes=t.cursor?.types??["all"];e.pconfig.showTooltipColors[0]=t.tooltip?.showColorsLine??t.showTooltipColorsLine??true;e.pconfig.showTooltipColors[1]=t.tooltip?.showColorsTimeline??t.showTooltipColorsTimeline??true;e.pconfig.tooltipSize=t.tooltip?.size??t.tooltipSize??"auto";e.pconfig.tooltipShowDuration=t.tooltip?.showDuration??t.tooltipShowDuration??true;e.pconfig.tooltipShowLabel=t.tooltip?.showLabel??true;e.pconfig.tooltipStateTextMode=t.tooltip?.stateTextMode??t.stateTextMode??"auto";e.pconfig.colorSeed=t.stateColorSeed??137;e.pconfig.stateTextMode=t.stateTextMode??"auto";e.pconfig.decimation=t.decimation;e.pconfig.roundingPrecision=t.rounding||2;e.pconfig.defaultLineMode=t.lineMode??"lines";e.pconfig.defaultLineWidth=t.lineWidth??2;e.pconfig.showUnavailable=t.showUnavailable??false;e.pconfig.showCurrentValues=false;e.pconfig.axisAddMarginMin=t.axisAddMarginMin!==undefined?t.axisAddMarginMin:false;e.pconfig.axisAddMarginMax=t.axisAddMarginMax!==undefined?t.axisAddMarginMax:false;e.pconfig.recordedEntitiesOnly=false;e.pconfig.filterEntities=null;e.pconfig.combineSameUnits=false;e.pconfig.defaultTimeRange=t.defaultTimeRange??"24";e.pconfig.defaultTimeOffset=t.defaultTimeOffset??undefined;e.pconfig.timeTickDensity=t.timeTicks?.density??t.timeTickDensity??"high";e.pconfig.timeTickOverride=t.timeTicks?.densityOverride??undefined;e.pconfig.timeTickShortDate=t.timeTicks?.dateFormat==="short";e.pconfig.lineGraphHeight=(t.lineGraphHeight??250)*1;e.pconfig.barGraphHeight=(t.barGraphHeight??150)*1;e.pconfig.timelineBarHeight=(t.timelineBarHeight??24)*1;e.pconfig.timelineBarSpacing=40;e.pconfig.hideLegend=true;e.pconfig.refreshEnabled=t.refresh?.automatic!==undefined?t.refresh.automatic:true;e.pconfig.refreshInterval=undefined;e.statistics.enabled=t.statistics?.enabled??true;e.statistics.mode=t.statistics?.mode??"mean";e.statistics.retention=t.statistics?.retention??undefined;e.statistics.period=t.statistics?.period??"hour";e.statistics.force=undefined;e.ui.darkMode=e._hass.selectedTheme&&e._hass.selectedTheme.dark||e._hass.themes&&e._hass.themes.darkMode;if(t.uimode){if(t.uimode==="dark")e.ui.darkMode=true;else if(t.uimode==="light")e.ui.darkMode=false}e.pconfig.graphLabelColor=parseColor(t.uiColors?.labels??(e.ui.darkMode?"#9b9b9b":"#333"));e.pconfig.graphGridColor=parseColor(t.uiColors?.gridlines??(e.ui.darkMode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"));e.pconfig.cursorLineColor=parseColor(t.uiColors?.cursorline??e.pconfig.graphGridColor);this._setEntityOptions(e);e.contentValid=true;e.databaseCallback=this._databaseCallback.bind(this);e.setTimeRangeFromString(String(e.pconfig.defaultTimeRange));e.today(false);let o=new ResizeObserver(o=>{for(let o of e.graphs)o.chart.resize(undefined,o.graphHeight);e.setStepSize(true)});o.observe(this)};function r(o){return o.substr(0,o.indexOf("."))}function a(o,e){return o.states[e]?.attributes?.device_class}function g(o,e,t){let i=e?.[t];if(!i){const n=a(o,t);i=n?e?.[n]:undefined;if(!i){const l=r(t);i=l?e?.[l]:undefined}}return i??undefined}function f(o,e){if(hec_panel?.config?.exclude){return hec_panel.config.exclude[e]||hec_panel.config.exclude[r(e)]||hec_panel.config.exclude[a(o,e)]}return false}o.prototype._hec_updated=function(o){if(!this.hec_instance){hec_panel.show=undefined;y();this.hec_instance=new HistoryCardState;this.hec_instance._this=this.shadowRoot;this.hec_instance._hass=this.__hass;this.hec_instance.version=this.__hass.config.version.split(".").map(Number);if(f(this.__hass,this.__entityId)){return this._oldUpdated(o)}this._injectHistoryExplorer(this.hec_instance);hec_panel.lc=this.__hass.states[this.__entityId]?.last_changed}else{if(this._recreate){this._recreate=false;this._setEntityOptions(this.hec_instance);this.hec_instance.updateHistoryWithClearCache()}const e=this.__hass.states[this.__entityId]?.last_changed;if(hec_panel.lc!=e){hec_panel.lc=e;if(this.hec_instance.pconfig.refreshEnabled){this.hec_instance.cache[this.hec_instance.cacheSize].valid=false;if(this.hec_instance.tid)clearTimeout(this.hec_instance.tid);this.hec_instance.tid=setTimeout(this.hec_instance.updateHistoryAutoRefresh.bind(this.hec_instance),2e3)}}}};function b(o){switch(o){case"line":return hec_panel?.config?.lineGraphHeight??250;case"bar":return(hec_panel?.config?.barGraphHeight??150)+24;default:return 90}}o.prototype._hec_render=function(){if(!this.hec_instance)y();const o=this.__entityId;if(f(this.__hass,o)){return this._oldRender()}const e=g(this.__hass,hec_panel?.config?.entityOptions,o);const t=this.__hass.states[o]?.attributes?.unit_of_measurement;const i=this.__hass.states[o]?.attributes?.state_class;const n=e?.type?e.type:i==="total_increasing"?"bar":t==undefined&&i!=="measurement"?"timeline":"line";const l=b(n);const r="var(--primary-text-color)";const a="var(--card-background-color)";const s=parseColor(hec_panel?.config?.uiColors?.buttons??getComputedStyle(document.body).getPropertyValue("--primary-color")+"1f");const c=parseColor(hec_panel?.config?.uiColors?.closeButton??"#0000001f");const d=hec_panel?.config?.uiLayout?.toolbar!="hide";const p=hec_panel?.config?.uiLayout?.invertZoom===true;const h=hec_panel?.config?.uiLayout?.interval!="hide";if(hec_panel.entity!==this.__entityId){hec_panel.entity=this.__entityId;hec_panel.show=undefined;if(this.hec_instance)this._recreate=true}const u=0;if(d){return html`
                <div id="maincard" style="display:${hec_panel.show===false?"none":"block"};margin-bottom: 16px">
                <div style="margin-bottom:10px;width:100%;min-height:30px;text-align:center;display:block;line-height:normal;">
                    <div id="dl_${u}" style="background-color:${s};float:left;margin-left:${isMobile?-12:-4}px;display:inline-block;padding-left:10px;padding-right:10px;">
                        <button id="b1_${u}" style="margin:0px;border:0px solid black;color:inherit;background-color:#00000000;height:30px"><</button>
                        <button id="bx_${u}" style="margin:0px;border:0px solid black;color:inherit;background-color:#00000000;height:30px">-</button>
                        <button id="b2_${u}" style="margin:0px;border:0px solid black;color:inherit;background-color:#00000000;height:30px">></button>
                    </div>
                    <div id="dr_${u}" style="background-color:${s};float:right;margin-right:${isMobile?-12:-4}px;display:inline-block;padding-left:${isMobile?5:10}px;padding-right:10px;">
                        <button id="bz_${u}" style="margin:0px;border:0px solid black;color:inherit;background-color:#00000000"><svg width="24" height="24" viewBox="0 0 24 24" style="vertical-align:middle;"><path fill="var(--primary-text-color)" d="M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z" /></svg></button>
                        <button id="b${p?5:4}_${u}" style="margin:0px;border:0px solid black;color:inherit;background-color:#00000000;height:30px">-</button>
                        <select id="by_${u}" style="margin:0px;border:0px solid black;color:inherit;background-color:#00000000;height:30px;max-width:83px">
                            <option value="0" style="color:${r};background-color:${a}" hidden></option>
                            <option value="1" style="color:${r};background-color:${a}"></option>
                            <option value="2" style="color:${r};background-color:${a}"></option>
                            <option value="3" style="color:${r};background-color:${a}" hidden></option>
                            <option value="4" style="color:${r};background-color:${a}" hidden></option>
                            <option value="5" style="color:${r};background-color:${a}" hidden></option>
                            <option value="6" style="color:${r};background-color:${a}"></option>
                            <option value="7" style="color:${r};background-color:${a}" hidden></option>
                            <option value="8" style="color:${r};background-color:${a}" hidden></option>
                            <option value="9" style="color:${r};background-color:${a}" hidden></option>
                            <option value="10" style="color:${r};background-color:${a}" hidden></option>
                            <option value="11" style="color:${r};background-color:${a}" hidden></option>
                            <option value="12" style="color:${r};background-color:${a}"></option>
                            <option value="24" style="color:${r};background-color:${a}"></option>
                            <option value="48" style="color:${r};background-color:${a}"></option>
                            <option value="72" style="color:${r};background-color:${a}"></option>
                            <option value="96" style="color:${r};background-color:${a}" hidden></option>
                            <option value="120" style="color:${r};background-color:${a}" hidden></option>
                            <option value="144" style="color:${r};background-color:${a}" hidden></option>
                            <option value="168" style="color:${r};background-color:${a}"></option>
                            <option value="336" style="color:${r};background-color:${a}"></option>
                            <option value="504" style="color:${r};background-color:${a}"></option>
                            <option value="720" style="color:${r};background-color:${a}"></option>
                            <option value="2184" style="color:${r};background-color:${a}"></option>
                            <option value="4368" style="color:${r};background-color:${a}"></option>
                            <option value="8760" style="color:${r};background-color:${a}"></option>
                        </select>
                        <button id="b${p?4:5}_${u}" style="margin:0px;border:0px solid black;color:inherit;background-color:#00000000;height:30px">+</button>
                    </div>
                </div>
                <div id='graphlist' style="margin-left:-2px;margin-right:-10px">
                    <div>
                        <select id='bd-0' style="display:${n=="bar"&&h?"block":"none"};position:relative;float:right;width:80px;right:10px;color:var(--primary-text-color);background-color:${c};border:0px solid black;">
                            <option value="0" style="color:${r};background-color:${a}">10m</option>
                            <option value="1" style="color:${r};background-color:${a}" selected>Hourly</option>
                            <option value="2" style="color:${r};background-color:${a}">Daily</option>
                            <option value="3" style="color:${r};background-color:${a}">Monthly</option>
                            <option value="4" style="color:${r};background-color:${a}">As line</option>
                        </select>
                        <button id='ca-0' style="display:${n=="line"||n=="bar"?"block":"none"};position:absolute;margin-left:-12px;background:none;opacity:1.0;border:0px solid black;">
                            <svg style='display:none' width="18" height="18" viewBox="0 0 24 24"><path fill="var(--primary-text-color)" d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" /></svg>
                        </button>
                        <canvas id="graph0" height="${l}px" style='touch-action:pan-y'></canvas>
                    </div>
                </div>
                </div>
                `}else{return html`
                <div id="maincard" style="display:${hec_panel.show===false?"none":"block"};margin-bottom: 16px">
                <div id='graphlist' style="margin-left:-2px;margin-right:-10px">
                    <div>
                        <select id='bd-0' style="display:${n=="bar"&&h?"block":"none"};position:relative;float:right;width:80px;right:10px;color:var(--primary-text-color);background-color:${c};border:0px solid black;">
                            <option value="0" style="color:${r};background-color:${a}">10m</option>
                            <option value="1" style="color:${r};background-color:${a}" selected>Hourly</option>
                            <option value="2" style="color:${r};background-color:${a}">Daily</option>
                            <option value="3" style="color:${r};background-color:${a}">Monthly</option>
                            <option value="4" style="color:${r};background-color:${a}">As line</option>
                        </select>
                        <button id='ca-0' style="display:${n=="line"||n=="bar"?"block":"none"};position:absolute;margin-top:-6px;margin-left:-12px;background:none;opacity:1.0;border:0px solid black;">
                            <svg style='display:none' width="18" height="18" viewBox="0 0 24 24"><path fill="var(--primary-text-color)" d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" /></svg>
                        </button>
                        <canvas id="graph0" height="${l}px" style='touch-action:pan-y'></canvas>
                    </div>
                </div>
                </div>
                `}};function y(){let o=JSON.parse(window.localStorage.getItem("history-explorer-info-panel"));if(o)hec_panel.config=o.config}if(infoPanelEnabled){o.prototype._oldUpdated=o.prototype.updated;o.prototype._oldRender=o.prototype.render;o.prototype.updated=o.prototype._hec_updated;o.prototype.render=o.prototype._hec_render}}hec_panel.iid=setInterval(hecHookInfoPanel,100);
// TODO: end of src/history-info-panel.js

})();