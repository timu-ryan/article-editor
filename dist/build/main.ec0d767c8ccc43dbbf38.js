"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*! For license information please see main.ec0d767c8ccc43dbbf38.js.LICENSE.txt */
(function () {
    "use strict";
    var e, t, n, r, a = { 221: function (e, t, n) { var r = n(540); function a(e) { var t = "https://react.dev/errors/" + e; if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                t += "&args[]=" + encodeURIComponent(arguments[n]);
        } return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; } function l() { } var o = { d: { f: l, r: function () { throw Error(a(522)); }, D: l, C: l, L: l, m: l, X: l, S: l, M: l }, p: 0, findDOMNode: null }, i = Symbol.for("react.portal"), u = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE; function s(e, t) { return "font" === e ? "" : "string" == typeof t ? "use-credentials" === t ? t : "" : void 0; } t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, t.createPortal = function (e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; if (!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
            throw Error(a(299)); return function (e, t, n) { var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return { $$typeof: i, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n }; }(e, t, null, n); }, t.flushSync = function (e) { var t = u.T, n = o.p; try {
            if (u.T = null, o.p = 2, e)
                return e();
        }
        finally {
            u.T = t, o.p = n, o.d.f();
        } }, t.preconnect = function (e, t) { "string" == typeof e && (t = t ? "string" == typeof (t = t.crossOrigin) ? "use-credentials" === t ? t : "" : void 0 : null, o.d.C(e, t)); }, t.prefetchDNS = function (e) { "string" == typeof e && o.d.D(e); }, t.preinit = function (e, t) { if ("string" == typeof e && t && "string" == typeof t.as) {
            var n = t.as, r = s(n, t.crossOrigin), a = "string" == typeof t.integrity ? t.integrity : void 0, l = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
            "style" === n ? o.d.S(e, "string" == typeof t.precedence ? t.precedence : void 0, { crossOrigin: r, integrity: a, fetchPriority: l }) : "script" === n && o.d.X(e, { crossOrigin: r, integrity: a, fetchPriority: l, nonce: "string" == typeof t.nonce ? t.nonce : void 0 });
        } }, t.preinitModule = function (e, t) { if ("string" == typeof e)
            if ("object" == typeof t && null !== t) {
                if (null == t.as || "script" === t.as) {
                    var n = s(t.as, t.crossOrigin);
                    o.d.M(e, { crossOrigin: n, integrity: "string" == typeof t.integrity ? t.integrity : void 0, nonce: "string" == typeof t.nonce ? t.nonce : void 0 });
                }
            }
            else
                null == t && o.d.M(e); }, t.preload = function (e, t) { if ("string" == typeof e && "object" == typeof t && null !== t && "string" == typeof t.as) {
            var n = t.as, r = s(n, t.crossOrigin);
            o.d.L(e, n, { crossOrigin: r, integrity: "string" == typeof t.integrity ? t.integrity : void 0, nonce: "string" == typeof t.nonce ? t.nonce : void 0, type: "string" == typeof t.type ? t.type : void 0, fetchPriority: "string" == typeof t.fetchPriority ? t.fetchPriority : void 0, referrerPolicy: "string" == typeof t.referrerPolicy ? t.referrerPolicy : void 0, imageSrcSet: "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0, imageSizes: "string" == typeof t.imageSizes ? t.imageSizes : void 0, media: "string" == typeof t.media ? t.media : void 0 });
        } }, t.preloadModule = function (e, t) { if ("string" == typeof e)
            if (t) {
                var n = s(t.as, t.crossOrigin);
                o.d.m(e, { as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0, crossOrigin: n, integrity: "string" == typeof t.integrity ? t.integrity : void 0 });
            }
            else
                o.d.m(e); }, t.requestFormReset = function (e) { o.d.r(e); }, t.unstable_batchedUpdates = function (e, t) { return e(t); }, t.useFormState = function (e, t, n) { return u.H.useFormState(e, t, n); }, t.useFormStatus = function () { return u.H.useHostTransitionStatus(); }, t.version = "19.1.1"; }, 247: function (e, t, n) { var r = n(982), a = n(540), l = n(961); function o(e) { var t = "https://react.dev/errors/" + e; if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                t += "&args[]=" + encodeURIComponent(arguments[n]);
        } return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; } function i(e) { var t = e, n = e; if (e.alternate)
            for (; t.return;)
                t = t.return;
        else {
            e = t;
            do {
                !!(4098 & (t = e).flags) && (n = t.return), e = t.return;
            } while (e);
        } return 3 === t.tag ? n : null; } function u(e) { if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)
                return t.dehydrated;
        } return null; } function s(e) { if (i(e) !== e)
            throw Error(o(188)); } function c(e) { var t = e.tag; if (5 === t || 26 === t || 27 === t || 6 === t)
            return e; for (e = e.child; null !== e;) {
            if (null !== (t = c(e)))
                return t;
            e = e.sibling;
        } return null; } var f = Object.assign, d = Symbol.for("react.element"), p = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), b = Symbol.for("react.consumer"), w = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), x = Symbol.for("react.lazy"); Symbol.for("react.scope"); var P = Symbol.for("react.activity"); Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker"); var _ = Symbol.for("react.memo_cache_sentinel"); Symbol.for("react.view_transition"); var z = Symbol.iterator; function T(e) { return null === e || "object" != typeof e ? null : "function" == typeof (e = z && e[z] || e["@@iterator"]) ? e : null; } var L = Symbol.for("react.client.reference"); function O(e) { if (null == e)
            return null; if ("function" == typeof e)
            return e.$$typeof === L ? null : e.displayName || e.name || null; if ("string" == typeof e)
            return e; switch (e) {
            case m: return "Fragment";
            case y: return "Profiler";
            case g: return "StrictMode";
            case S: return "Suspense";
            case E: return "SuspenseList";
            case P: return "Activity";
        } if ("object" == typeof e)
            switch (e.$$typeof) {
                case h: return "Portal";
                case w: return (e.displayName || "Context") + ".Provider";
                case b: return (e._context.displayName || "Context") + ".Consumer";
                case k:
                    var t = e.render;
                    return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case C: return null !== (t = e.displayName || null) ? t : O(e.type) || "Memo";
                case x:
                    t = e._payload, e = e._init;
                    try {
                        return O(e(t));
                    }
                    catch (e) { }
            } return null; } var N = Array.isArray, R = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = { pending: !1, data: null, method: null, action: null }, A = [], U = -1; function F(e) { return { current: e }; } function j(e) { 0 > U || (e.current = A[U], A[U] = null, U--); } function I(e, t) { U++, A[U] = e.current, e.current = t; } var H = F(null), B = F(null), $ = F(null), W = F(null); function V(e, t) { switch (I($, t), I(B, e), I(H, null), t.nodeType) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? rf(e) : 0;
                break;
            default: if (e = t.tagName, t = t.namespaceURI)
                e = af(t = rf(t), e);
            else
                switch (e) {
                    case "svg":
                        e = 1;
                        break;
                    case "math":
                        e = 2;
                        break;
                    default: e = 0;
                }
        } j(H), I(H, e); } function q() { j(H), j(B), j($); } function Q(e) { null !== e.memoizedState && I(W, e); var t = H.current, n = af(t, e.type); t !== n && (I(B, e), I(H, n)); } function G(e) { B.current === e && (j(H), j(B)), W.current === e && (j(W), Gf._currentValue = M); } var K = Object.prototype.hasOwnProperty, Y = r.unstable_scheduleCallback, X = r.unstable_cancelCallback, Z = r.unstable_shouldYield, J = r.unstable_requestPaint, ee = r.unstable_now, te = r.unstable_getCurrentPriorityLevel, ne = r.unstable_ImmediatePriority, re = r.unstable_UserBlockingPriority, ae = r.unstable_NormalPriority, le = r.unstable_LowPriority, oe = r.unstable_IdlePriority, ie = r.log, ue = r.unstable_setDisableYieldValue, se = null, ce = null; function fe(e) { if ("function" == typeof ie && ue(e), ce && "function" == typeof ce.setStrictMode)
            try {
                ce.setStrictMode(se, e);
            }
            catch (e) { } } var de = Math.clz32 ? Math.clz32 : function (e) { return 0 == (e >>>= 0) ? 32 : 31 - (pe(e) / he | 0) | 0; }, pe = Math.log, he = Math.LN2, me = 256, ge = 4194304; function ye(e) { var t = 42 & e; if (0 !== t)
            return t; switch (e & -e) {
            case 1: return 1;
            case 2: return 2;
            case 4: return 4;
            case 8: return 8;
            case 16: return 16;
            case 32: return 32;
            case 64: return 64;
            case 128: return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152: return 4194048 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432: return 62914560 & e;
            case 67108864: return 67108864;
            case 134217728: return 134217728;
            case 268435456: return 268435456;
            case 536870912: return 536870912;
            case 1073741824: return 0;
            default: return e;
        } } function ve(e, t, n) { var r = e.pendingLanes; if (0 === r)
            return 0; var a = 0, l = e.suspendedLanes, o = e.pingedLanes; e = e.warmLanes; var i = 134217727 & r; return 0 !== i ? 0 !== (r = i & ~l) ? a = ye(r) : 0 !== (o &= i) ? a = ye(o) : n || 0 !== (n = i & ~e) && (a = ye(n)) : 0 !== (i = r & ~l) ? a = ye(i) : 0 !== o ? a = ye(o) : n || 0 !== (n = r & ~e) && (a = ye(n)), 0 === a ? 0 : 0 !== t && t !== a && 0 === (t & l) && ((l = a & -a) >= (n = t & -t) || 32 === l && 4194048 & n) ? t : a; } function be(e, t) { return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t); } function we(e, t) { switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64: return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152: return t + 5e3;
            default: return -1;
        } } function ke() { var e = me; return !(4194048 & (me <<= 1)) && (me = 256), e; } function Se() { var e = ge; return !(62914560 & (ge <<= 1)) && (ge = 4194304), e; } function Ee(e) { for (var t = [], n = 0; 31 > n; n++)
            t.push(e); return t; } function Ce(e, t) { e.pendingLanes |= t, 268435456 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0); } function xe(e, t, n) { e.pendingLanes |= t, e.suspendedLanes &= ~t; var r = 31 - de(t); e.entangledLanes |= t, e.entanglements[r] = 1073741824 | e.entanglements[r] | 4194090 & n; } function Pe(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
            var r = 31 - de(n), a = 1 << r;
            a & t | e[r] & t && (e[r] |= t), n &= ~a;
        } } function _e(e) { switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default: e = 0;
        } return e; } function ze(e) { return 2 < (e &= -e) ? 8 < e ? 134217727 & e ? 32 : 268435456 : 8 : 2; } function Te() { var e = D.p; return 0 !== e ? e : void 0 === (e = window.event) ? 32 : id(e.type); } var Le = Math.random().toString(36).slice(2), Oe = "__reactFiber$" + Le, Ne = "__reactProps$" + Le, Re = "__reactContainer$" + Le, De = "__reactEvents$" + Le, Me = "__reactListeners$" + Le, Ae = "__reactHandles$" + Le, Ue = "__reactResources$" + Le, Fe = "__reactMarker$" + Le; function je(e) { delete e[Oe], delete e[Ne], delete e[De], delete e[Me], delete e[Ae]; } function Ie(e) { var t = e[Oe]; if (t)
            return t; for (var n = e.parentNode; n;) {
            if (t = n[Re] || n[Oe]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                    for (e = bf(e); null !== e;) {
                        if (n = e[Oe])
                            return n;
                        e = bf(e);
                    }
                return t;
            }
            n = (e = n).parentNode;
        } return null; } function He(e) { if (e = e[Oe] || e[Re]) {
            var t = e.tag;
            if (5 === t || 6 === t || 13 === t || 26 === t || 27 === t || 3 === t)
                return e;
        } return null; } function Be(e) { var t = e.tag; if (5 === t || 26 === t || 27 === t || 6 === t)
            return e.stateNode; throw Error(o(33)); } function $e(e) { var t = e[Ue]; return t || (t = e[Ue] = { hoistableStyles: new Map, hoistableScripts: new Map }), t; } function We(e) { e[Fe] = !0; } var Ve = new Set, qe = {}; function Qe(e, t) { Ge(e, t), Ge(e + "Capture", t); } function Ge(e, t) { for (qe[e] = t, e = 0; e < t.length; e++)
            Ve.add(t[e]); } var Ke, Ye, Xe = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ze = {}, Je = {}; function et(e, t, n) { if (a = t, K.call(Je, a) || !K.call(Ze, a) && (Xe.test(a) ? Je[a] = !0 : (Ze[a] = !0, 0)))
            if (null === n)
                e.removeAttribute(t);
            else {
                switch (typeof n) {
                    case "undefined":
                    case "function":
                    case "symbol": return void e.removeAttribute(t);
                    case "boolean":
                        var r = t.toLowerCase().slice(0, 5);
                        if ("data-" !== r && "aria-" !== r)
                            return void e.removeAttribute(t);
                }
                e.setAttribute(t, "" + n);
            } var a; } function tt(e, t, n) { if (null === n)
            e.removeAttribute(t);
        else {
            switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean": return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + n);
        } } function nt(e, t, n, r) { if (null === r)
            e.removeAttribute(n);
        else {
            switch (typeof r) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean": return void e.removeAttribute(n);
            }
            e.setAttributeNS(t, n, "" + r);
        } } function rt(e) { if (void 0 === Ke)
            try {
                throw Error();
            }
            catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                Ke = t && t[1] || "", Ye = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
            } return "\n" + Ke + e + Ye; } var at = !1; function lt(e, t) { if (!e || at)
            return ""; at = !0; var n = Error.prepareStackTrace; Error.prepareStackTrace = void 0; try {
            var r = { DetermineComponentFrameRoot: function () { try {
                    if (t) {
                        var n_1 = function () { throw Error(); };
                        if (Object.defineProperty(n_1.prototype, "props", { set: function () { throw Error(); } }), "object" == typeof Reflect && Reflect.construct) {
                            try {
                                Reflect.construct(n_1, []);
                            }
                            catch (e) {
                                var r = e;
                            }
                            Reflect.construct(e, [], n_1);
                        }
                        else {
                            try {
                                n_1.call();
                            }
                            catch (e) {
                                r = e;
                            }
                            e.call(n_1.prototype);
                        }
                    }
                    else {
                        try {
                            throw Error();
                        }
                        catch (e) {
                            r = e;
                        }
                        (n_1 = e()) && "function" == typeof n_1.catch && n_1.catch(function () { });
                    }
                }
                catch (e) {
                    if (e && r && "string" == typeof e.stack)
                        return [e.stack, r.stack];
                } return [null, null]; } };
            r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var a = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
            a && a.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
            var l = r.DetermineComponentFrameRoot(), o = l[0], i = l[1];
            if (o && i) {
                var u = o.split("\n"), s = i.split("\n");
                for (a = r = 0; r < u.length && !u[r].includes("DetermineComponentFrameRoot");)
                    r++;
                for (; a < s.length && !s[a].includes("DetermineComponentFrameRoot");)
                    a++;
                if (r === u.length || a === s.length)
                    for (r = u.length - 1, a = s.length - 1; 1 <= r && 0 <= a && u[r] !== s[a];)
                        a--;
                for (; 1 <= r && 0 <= a; r--, a--)
                    if (u[r] !== s[a]) {
                        if (1 !== r || 1 !== a)
                            do {
                                if (r--, 0 > --a || u[r] !== s[a]) {
                                    var c = "\n" + u[r].replace(" at new ", " at ");
                                    return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
                                }
                            } while (1 <= r && 0 <= a);
                        break;
                    }
            }
        }
        finally {
            at = !1, Error.prepareStackTrace = n;
        } return (n = e ? e.displayName || e.name : "") ? rt(n) : ""; } function ot(e) { switch (e.tag) {
            case 26:
            case 27:
            case 5: return rt(e.type);
            case 16: return rt("Lazy");
            case 13: return rt("Suspense");
            case 19: return rt("SuspenseList");
            case 0:
            case 15: return lt(e.type, !1);
            case 11: return lt(e.type.render, !1);
            case 1: return lt(e.type, !0);
            case 31: return rt("Activity");
            default: return "";
        } } function it(e) { try {
            var t = "";
            do {
                t += ot(e), e = e.return;
            } while (e);
            return t;
        }
        catch (e) {
            return "\nError generating stack: " + e.message + "\n" + e.stack;
        } } function ut(e) { switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object": return e;
            default: return "";
        } } function st(e) { var t = e.type; return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t); } function ct(e) { e._valueTracker || (e._valueTracker = function (e) { var t = st(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
            var a = n.get, l = n.set;
            return Object.defineProperty(e, t, { configurable: !0, get: function () { return a.call(this); }, set: function (e) { r = "" + e, l.call(this, e); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (e) { r = "" + e; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
        } }(e)); } function ft(e) { if (!e)
            return !1; var t = e._valueTracker; if (!t)
            return !0; var n = t.getValue(), r = ""; return e && (r = st(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0); } function dt(e) { if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0)))
            return null; try {
            return e.activeElement || e.body;
        }
        catch (t) {
            return e.body;
        } } var pt = /[\n"\\]/g; function ht(e) { return e.replace(pt, function (e) { return "\\" + e.charCodeAt(0).toString(16) + " "; }); } function mt(e, t, n, r, a, l, o, i) { e.name = "", null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o ? e.type = o : e.removeAttribute("type"), null != t ? "number" === o ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + ut(t)) : e.value !== "" + ut(t) && (e.value = "" + ut(t)) : "submit" !== o && "reset" !== o || e.removeAttribute("value"), null != t ? yt(e, o, ut(t)) : null != n ? yt(e, o, ut(n)) : null != r && e.removeAttribute("value"), null == a && null != l && (e.defaultChecked = !!l), null != a && (e.checked = a && "function" != typeof a && "symbol" != typeof a), null != i && "function" != typeof i && "symbol" != typeof i && "boolean" != typeof i ? e.name = "" + ut(i) : e.removeAttribute("name"); } function gt(e, t, n, r, a, l, o, i) { if (null != l && "function" != typeof l && "symbol" != typeof l && "boolean" != typeof l && (e.type = l), null != t || null != n) {
            if (("submit" === l || "reset" === l) && null == t)
                return;
            n = null != n ? "" + ut(n) : "", t = null != t ? "" + ut(t) : n, i || t === e.value || (e.value = t), e.defaultValue = t;
        } r = "function" != typeof (r = null != r ? r : a) && "symbol" != typeof r && !!r, e.checked = i ? e.checked : !!r, e.defaultChecked = !!r, null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o && (e.name = o); } function yt(e, t, n) { "number" === t && dt(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n); } function vt(e, t, n, r) { if (e = e.options, t) {
            t = {};
            for (var a = 0; a < n.length; a++)
                t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
                a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
        }
        else {
            for (n = "" + ut(n), t = null, a = 0; a < e.length; a++) {
                if (e[a].value === n)
                    return e[a].selected = !0, void (r && (e[a].defaultSelected = !0));
                null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
        } } function bt(e, t, n) { null == t || ((t = "" + ut(t)) !== e.value && (e.value = t), null != n) ? e.defaultValue = null != n ? "" + ut(n) : "" : e.defaultValue !== t && (e.defaultValue = t); } function wt(e, t, n, r) { if (null == t) {
            if (null != r) {
                if (null != n)
                    throw Error(o(92));
                if (N(r)) {
                    if (1 < r.length)
                        throw Error(o(93));
                    r = r[0];
                }
                n = r;
            }
            null == n && (n = ""), t = n;
        } n = ut(t), e.defaultValue = n, (r = e.textContent) === n && "" !== r && null !== r && (e.value = r); } function kt(e, t) { if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
                return void (n.nodeValue = t);
        } e.textContent = t; } var St = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")); function Et(e, t, n) { var r = 0 === t.indexOf("--"); null == n || "boolean" == typeof n || "" === n ? r ? e.setProperty(t, "") : "float" === t ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : "number" != typeof n || 0 === n || St.has(t) ? "float" === t ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"; } function Ct(e, t, n) { if (null != t && "object" != typeof t)
            throw Error(o(62)); if (e = e.style, null != n) {
            for (var r in n)
                !n.hasOwnProperty(r) || null != t && t.hasOwnProperty(r) || (0 === r.indexOf("--") ? e.setProperty(r, "") : "float" === r ? e.cssFloat = "" : e[r] = "");
            for (var a in t)
                r = t[a], t.hasOwnProperty(a) && n[a] !== r && Et(e, a, r);
        }
        else
            for (var l in t)
                t.hasOwnProperty(l) && Et(e, l, t[l]); } function xt(e) { if (-1 === e.indexOf("-"))
            return !1; switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph": return !1;
            default: return !0;
        } } var Pt = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), _t = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i; function zt(e) { return _t.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e; } var Tt = null; function Lt(e) { return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e; } var Ot = null, Nt = null; function Rt(e) { var t = He(e); if (t && (e = t.stateNode)) {
            var n = e[Ne] || null;
            e: switch (e = t.stateNode, t.type) {
                case "input":
                    if (mt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, "radio" === n.type && null != t) {
                        for (n = e; n.parentNode;)
                            n = n.parentNode;
                        for (n = n.querySelectorAll('input[name="' + ht("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                            var r = n[t];
                            if (r !== e && r.form === e.form) {
                                var a = r[Ne] || null;
                                if (!a)
                                    throw Error(o(90));
                                mt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                            }
                        }
                        for (t = 0; t < n.length; t++)
                            (r = n[t]).form === e.form && ft(r);
                    }
                    break e;
                case "textarea":
                    bt(e, n.value, n.defaultValue);
                    break e;
                case "select": null != (t = n.value) && vt(e, !!n.multiple, t, !1);
            }
        } } var Dt = !1; function Mt(e, t, n) { if (Dt)
            return e(t, n); Dt = !0; try {
            return e(t);
        }
        finally {
            if (Dt = !1, (null !== Ot || null !== Nt) && (Is(), Ot && (t = Ot, e = Nt, Nt = Ot = null, Rt(t), e)))
                for (t = 0; t < e.length; t++)
                    Rt(e[t]);
        } } function At(e, t) { var n = e.stateNode; if (null === n)
            return null; var r = n[Ne] || null; if (null === r)
            return null; n = r[t]; e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                break e;
            default: e = !1;
        } if (e)
            return null; if (n && "function" != typeof n)
            throw Error(o(231, t, typeof n)); return n; } var Ut = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement), Ft = !1; if (Ut)
            try {
                var jt = {};
                Object.defineProperty(jt, "passive", { get: function () { Ft = !0; } }), window.addEventListener("test", jt, jt), window.removeEventListener("test", jt, jt);
            }
            catch (e) {
                Ft = !1;
            } var It = null, Ht = null, Bt = null; function $t() { if (Bt)
            return Bt; var e, t, n = Ht, r = n.length, a = "value" in It ? It.value : It.textContent, l = a.length; for (e = 0; e < r && n[e] === a[e]; e++)
            ; var o = r - e; for (t = 1; t <= o && n[r - t] === a[l - t]; t++)
            ; return Bt = a.slice(e, 1 < t ? 1 - t : void 0); } function Wt(e) { var t = e.keyCode; return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0; } function Vt() { return !0; } function qt() { return !1; } function Qt(e) { function t(t, n, r, a, l) { for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = l, this.currentTarget = null, e)
            e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(a) : a[o]); return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? Vt : qt, this.isPropagationStopped = qt, this; } return f(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var e = this.nativeEvent; e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Vt); }, stopPropagation: function () { var e = this.nativeEvent; e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Vt); }, persist: function () { }, isPersistent: Vt }), t; } var Gt, Kt, Yt, Xt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, Zt = Qt(Xt), Jt = f({}, Xt, { view: 0, detail: 0 }), en = Qt(Jt), tn = f({}, Jt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pn, button: 0, buttons: 0, relatedTarget: function (e) { return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== Yt && (Yt && "mousemove" === e.type ? (Gt = e.screenX - Yt.screenX, Kt = e.screenY - Yt.screenY) : Kt = Gt = 0, Yt = e), Gt); }, movementY: function (e) { return "movementY" in e ? e.movementY : Kt; } }), nn = Qt(tn), rn = Qt(f({}, tn, { dataTransfer: 0 })), an = Qt(f({}, Jt, { relatedTarget: 0 })), ln = Qt(f({}, Xt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), on = Qt(f({}, Xt, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } })), un = Qt(f({}, Xt, { data: 0 })), sn = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, cn = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, fn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }; function dn(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : !!(e = fn[e]) && !!t[e]; } function pn() { return dn; } var hn = Qt(f({}, Jt, { key: function (e) { if (e.key) {
                var t = sn[e.key] || e.key;
                if ("Unidentified" !== t)
                    return t;
            } return "keypress" === e.type ? 13 === (e = Wt(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? cn[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pn, charCode: function (e) { return "keypress" === e.type ? Wt(e) : 0; }, keyCode: function (e) { return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; }, which: function (e) { return "keypress" === e.type ? Wt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; } })), mn = Qt(f({}, tn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), gn = Qt(f({}, Jt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pn })), yn = Qt(f({}, Xt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), vn = Qt(f({}, tn, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 })), bn = Qt(f({}, Xt, { newState: 0, oldState: 0 })), wn = [9, 13, 27, 32], kn = Ut && "CompositionEvent" in window, Sn = null; Ut && "documentMode" in document && (Sn = document.documentMode); var En = Ut && "TextEvent" in window && !Sn, Cn = Ut && (!kn || Sn && 8 < Sn && 11 >= Sn), xn = String.fromCharCode(32), Pn = !1; function _n(e, t) { switch (e) {
            case "keyup": return -1 !== wn.indexOf(t.keyCode);
            case "keydown": return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout": return !0;
            default: return !1;
        } } function zn(e) { return "object" == typeof (e = e.detail) && "data" in e ? e.data : null; } var Tn = !1, Ln = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 }; function On(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return "input" === t ? !!Ln[e.type] : "textarea" === t; } function Nn(e, t, n, r) { Ot ? Nt ? Nt.push(r) : Nt = [r] : Ot = r, 0 < (t = $c(t, "onChange")).length && (n = new Zt("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); } var Rn = null, Dn = null; function Mn(e) { Mc(e, 0); } function An(e) { if (ft(Be(e)))
            return e; } function Un(e, t) { if ("change" === e)
            return t; } var Fn = !1; if (Ut) {
            var jn;
            if (Ut) {
                var In = "oninput" in document;
                if (!In) {
                    var Hn = document.createElement("div");
                    Hn.setAttribute("oninput", "return;"), In = "function" == typeof Hn.oninput;
                }
                jn = In;
            }
            else
                jn = !1;
            Fn = jn && (!document.documentMode || 9 < document.documentMode);
        } function Bn() { Rn && (Rn.detachEvent("onpropertychange", $n), Dn = Rn = null); } function $n(e) { if ("value" === e.propertyName && An(Dn)) {
            var t = [];
            Nn(t, Dn, e, Lt(e)), Mt(Mn, t);
        } } function Wn(e, t, n) { "focusin" === e ? (Bn(), Dn = n, (Rn = t).attachEvent("onpropertychange", $n)) : "focusout" === e && Bn(); } function Vn(e) { if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return An(Dn); } function qn(e, t) { if ("click" === e)
            return An(t); } function Qn(e, t) { if ("input" === e || "change" === e)
            return An(t); } var Gn = "function" == typeof Object.is ? Object.is : function (e, t) { return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t; }; function Kn(e, t) { if (Gn(e, t))
            return !0; if ("object" != typeof e || null === e || "object" != typeof t || null === t)
            return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
            return !1; for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!K.call(t, a) || !Gn(e[a], t[a]))
                return !1;
        } return !0; } function Yn(e) { for (; e && e.firstChild;)
            e = e.firstChild; return e; } function Xn(e, t) { var n, r = Yn(e); for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t)
                    return { node: r, offset: t - e };
                e = n;
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e;
                    }
                    r = r.parentNode;
                }
                r = void 0;
            }
            r = Yn(r);
        } } function Zn(e, t) { return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? Zn(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))); } function Jn(e) { for (var t = dt((e = null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window).document); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof t.contentWindow.location.href;
            }
            catch (e) {
                n = !1;
            }
            if (!n)
                break;
            t = dt((e = t.contentWindow).document);
        } return t; } function er(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable); } var tr = Ut && "documentMode" in document && 11 >= document.documentMode, nr = null, rr = null, ar = null, lr = !1; function or(e, t, n) { var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument; lr || null == nr || nr !== dt(r) || (r = "selectionStart" in (r = nr) && er(r) ? { start: r.selectionStart, end: r.selectionEnd } : { anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }, ar && Kn(ar, r) || (ar = r, 0 < (r = $c(rr, "onSelect")).length && (t = new Zt("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = nr))); } function ir(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; } var ur = { animationend: ir("Animation", "AnimationEnd"), animationiteration: ir("Animation", "AnimationIteration"), animationstart: ir("Animation", "AnimationStart"), transitionrun: ir("Transition", "TransitionRun"), transitionstart: ir("Transition", "TransitionStart"), transitioncancel: ir("Transition", "TransitionCancel"), transitionend: ir("Transition", "TransitionEnd") }, sr = {}, cr = {}; function fr(e) { if (sr[e])
            return sr[e]; if (!ur[e])
            return e; var t, n = ur[e]; for (t in n)
            if (n.hasOwnProperty(t) && t in cr)
                return sr[e] = n[t]; return e; } Ut && (cr = document.createElement("div").style, "AnimationEvent" in window || (delete ur.animationend.animation, delete ur.animationiteration.animation, delete ur.animationstart.animation), "TransitionEvent" in window || delete ur.transitionend.transition); var dr = fr("animationend"), pr = fr("animationiteration"), hr = fr("animationstart"), mr = fr("transitionrun"), gr = fr("transitionstart"), yr = fr("transitioncancel"), vr = fr("transitionend"), br = new Map, wr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" "); function kr(e, t) { br.set(e, t), Qe(t, [e]); } wr.push("scrollEnd"); var Sr = new WeakMap; function Er(e, t) { if ("object" == typeof e && null !== e) {
            var n = Sr.get(e);
            return void 0 !== n ? n : (t = { value: e, source: t, stack: it(t) }, Sr.set(e, t), t);
        } return { value: e, source: t, stack: it(t) }; } var Cr = [], xr = 0, Pr = 0; function _r() { for (var e = xr, t = Pr = xr = 0; t < e;) {
            var n = Cr[t];
            Cr[t++] = null;
            var r = Cr[t];
            Cr[t++] = null;
            var a = Cr[t];
            Cr[t++] = null;
            var l = Cr[t];
            if (Cr[t++] = null, null !== r && null !== a) {
                var o = r.pending;
                null === o ? a.next = a : (a.next = o.next, o.next = a), r.pending = a;
            }
            0 !== l && Or(n, a, l);
        } } function zr(e, t, n, r) { Cr[xr++] = e, Cr[xr++] = t, Cr[xr++] = n, Cr[xr++] = r, Pr |= r, e.lanes |= r, null !== (e = e.alternate) && (e.lanes |= r); } function Tr(e, t, n, r) { return zr(e, t, n, r), Nr(e); } function Lr(e, t) { return zr(e, null, null, t), Nr(e); } function Or(e, t, n) { e.lanes |= n; var r = e.alternate; null !== r && (r.lanes |= n); for (var a = !1, l = e.return; null !== l;)
            l.childLanes |= n, null !== (r = l.alternate) && (r.childLanes |= n), 22 === l.tag && (null === (e = l.stateNode) || 1 & e._visibility || (a = !0)), e = l, l = l.return; return 3 === e.tag ? (l = e.stateNode, a && null !== t && (a = 31 - de(n), null === (r = (e = l.hiddenUpdates)[a]) ? e[a] = [t] : r.push(t), t.lane = 536870912 | n), l) : null; } function Nr(e) { if (50 < Os)
            throw Os = 0, Ns = null, Error(o(185)); for (var t = e.return; null !== t;)
            t = (e = t).return; return 3 === e.tag ? e.stateNode : null; } var Rr = {}; function Dr(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; } function Mr(e, t, n, r) { return new Dr(e, t, n, r); } function Ar(e) { return !(!(e = e.prototype) || !e.isReactComponent); } function Ur(e, t) { var n = e.alternate; return null === n ? ((n = Mr(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 65011712 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n; } function Fr(e, t) { e.flags &= 65011714; var n = e.alternate; return null === n ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }), e; } function jr(e, t, n, r, a, l) { var i = 0; if (r = e, "function" == typeof e)
            Ar(e) && (i = 1);
        else if ("string" == typeof e)
            i = function (e, t, n) { if (1 === n || null != t.itemProp)
                return !1; switch (e) {
                case "meta":
                case "title": return !0;
                case "style":
                    if ("string" != typeof t.precedence || "string" != typeof t.href || "" === t.href)
                        break;
                    return !0;
                case "link":
                    if ("string" != typeof t.rel || "string" != typeof t.href || "" === t.href || t.onLoad || t.onError)
                        break;
                    return "stylesheet" !== t.rel || (e = t.disabled, "string" == typeof t.precedence && null == e);
                case "script": if (t.async && "function" != typeof t.async && "symbol" != typeof t.async && !t.onLoad && !t.onError && t.src && "string" == typeof t.src)
                    return !0;
            } return !1; }(e, n, H.current) ? 26 : "html" === e || "head" === e || "body" === e ? 27 : 5;
        else
            e: switch (e) {
                case P: return (e = Mr(31, n, t, a)).elementType = P, e.lanes = l, e;
                case m: return Ir(n.children, a, l, t);
                case g:
                    i = 8, a |= 24;
                    break;
                case y: return (e = Mr(12, n, t, 2 | a)).elementType = y, e.lanes = l, e;
                case S: return (e = Mr(13, n, t, a)).elementType = S, e.lanes = l, e;
                case E: return (e = Mr(19, n, t, a)).elementType = E, e.lanes = l, e;
                default:
                    if ("object" == typeof e && null !== e)
                        switch (e.$$typeof) {
                            case v:
                            case w:
                                i = 10;
                                break e;
                            case b:
                                i = 9;
                                break e;
                            case k:
                                i = 11;
                                break e;
                            case C:
                                i = 14;
                                break e;
                            case x:
                                i = 16, r = null;
                                break e;
                        }
                    i = 29, n = Error(o(130, null === e ? "null" : typeof e, "")), r = null;
            } return (t = Mr(i, n, t, a)).elementType = e, t.type = r, t.lanes = l, t; } function Ir(e, t, n, r) { return (e = Mr(7, e, r, t)).lanes = n, e; } function Hr(e, t, n) { return (e = Mr(6, e, null, t)).lanes = n, e; } function Br(e, t, n) { return (t = Mr(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; } var $r = [], Wr = 0, Vr = null, qr = 0, Qr = [], Gr = 0, Kr = null, Yr = 1, Xr = ""; function Zr(e, t) { $r[Wr++] = qr, $r[Wr++] = Vr, Vr = e, qr = t; } function Jr(e, t, n) { Qr[Gr++] = Yr, Qr[Gr++] = Xr, Qr[Gr++] = Kr, Kr = e; var r = Yr; e = Xr; var a = 32 - de(r) - 1; r &= ~(1 << a), n += 1; var l = 32 - de(t) + a; if (30 < l) {
            var o = a - a % 5;
            l = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, Yr = 1 << 32 - de(t) + a | n << a | r, Xr = l + e;
        }
        else
            Yr = 1 << l | n << a | r, Xr = e; } function ea(e) { null !== e.return && (Zr(e, 1), Jr(e, 1, 0)); } function ta(e) { for (; e === Vr;)
            Vr = $r[--Wr], $r[Wr] = null, qr = $r[--Wr], $r[Wr] = null; for (; e === Kr;)
            Kr = Qr[--Gr], Qr[Gr] = null, Xr = Qr[--Gr], Qr[Gr] = null, Yr = Qr[--Gr], Qr[Gr] = null; } var na = null, ra = null, aa = !1, la = null, oa = !1, ia = Error(o(519)); function ua(e) { throw ha(Er(Error(o(418, "")), e)), ia; } function sa(e) { var t = e.stateNode, n = e.type, r = e.memoizedProps; switch (t[Oe] = e, t[Ne] = r, n) {
            case "dialog":
                Ac("cancel", t), Ac("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                Ac("load", t);
                break;
            case "video":
            case "audio":
                for (n = 0; n < Rc.length; n++)
                    Ac(Rc[n], t);
                break;
            case "source":
                Ac("error", t);
                break;
            case "img":
            case "image":
            case "link":
                Ac("error", t), Ac("load", t);
                break;
            case "details":
                Ac("toggle", t);
                break;
            case "input":
                Ac("invalid", t), gt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), ct(t);
                break;
            case "select":
                Ac("invalid", t);
                break;
            case "textarea": Ac("invalid", t), wt(t, r.value, r.defaultValue, r.children), ct(t);
        } "string" != typeof (n = r.children) && "number" != typeof n && "bigint" != typeof n || t.textContent === "" + n || !0 === r.suppressHydrationWarning || Kc(t.textContent, n) ? (null != r.popover && (Ac("beforetoggle", t), Ac("toggle", t)), null != r.onScroll && Ac("scroll", t), null != r.onScrollEnd && Ac("scrollend", t), null != r.onClick && (t.onclick = Yc), t = !0) : t = !1, t || ua(e); } function ca(e) { for (na = e.return; na;)
            switch (na.tag) {
                case 5:
                case 13: return void (oa = !1);
                case 27:
                case 3: return void (oa = !0);
                default: na = na.return;
            } } function fa(e) { if (e !== na)
            return !1; if (!aa)
            return ca(e), aa = !0, !1; var t, n = e.tag; if ((t = 3 !== n && 27 !== n) && ((t = 5 === n) && (t = !("form" !== (t = e.type) && "button" !== t) || lf(e.type, e.memoizedProps)), t = !t), t && ra && ua(e), ca(e), 13 === n) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                throw Error(o(317));
            e: {
                for (e = e.nextSibling, n = 0; e;) {
                    if (8 === e.nodeType)
                        if ("/$" === (t = e.data)) {
                            if (0 === n) {
                                ra = yf(e.nextSibling);
                                break e;
                            }
                            n--;
                        }
                        else
                            "$" !== t && "$!" !== t && "$?" !== t || n++;
                    e = e.nextSibling;
                }
                ra = null;
            }
        }
        else
            27 === n ? (n = ra, pf(e.type) ? (e = vf, vf = null, ra = e) : ra = n) : ra = na ? yf(e.stateNode.nextSibling) : null; return !0; } function da() { ra = na = null, aa = !1; } function pa() { var e = la; return null !== e && (null === vs ? vs = e : vs.push.apply(vs, e), la = null), e; } function ha(e) { null === la ? la = [e] : la.push(e); } var ma = F(null), ga = null, ya = null; function va(e, t, n) { I(ma, t._currentValue), t._currentValue = n; } function ba(e) { e._currentValue = ma.current, j(ma); } function wa(e, t, n) { for (; null !== e;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
                break;
            e = e.return;
        } } function ka(e, t, n, r) { var a = e.child; for (null !== a && (a.return = e); null !== a;) {
            var l = a.dependencies;
            if (null !== l) {
                var i = a.child;
                l = l.firstContext;
                e: for (; null !== l;) {
                    var u = l;
                    l = a;
                    for (var s = 0; s < t.length; s++)
                        if (u.context === t[s]) {
                            l.lanes |= n, null !== (u = l.alternate) && (u.lanes |= n), wa(l.return, n, e), r || (i = null);
                            break e;
                        }
                    l = u.next;
                }
            }
            else if (18 === a.tag) {
                if (null === (i = a.return))
                    throw Error(o(341));
                i.lanes |= n, null !== (l = i.alternate) && (l.lanes |= n), wa(i, n, e), i = null;
            }
            else
                i = a.child;
            if (null !== i)
                i.return = a;
            else
                for (i = a; null !== i;) {
                    if (i === e) {
                        i = null;
                        break;
                    }
                    if (null !== (a = i.sibling)) {
                        a.return = i.return, i = a;
                        break;
                    }
                    i = i.return;
                }
            a = i;
        } } function Sa(e, t, n, r) { e = null; for (var a = t, l = !1; null !== a;) {
            if (!l)
                if (524288 & a.flags)
                    l = !0;
                else if (262144 & a.flags)
                    break;
            if (10 === a.tag) {
                var i = a.alternate;
                if (null === i)
                    throw Error(o(387));
                if (null !== (i = i.memoizedProps)) {
                    var u = a.type;
                    Gn(a.pendingProps.value, i.value) || (null !== e ? e.push(u) : e = [u]);
                }
            }
            else if (a === W.current) {
                if (null === (i = a.alternate))
                    throw Error(o(387));
                i.memoizedState.memoizedState !== a.memoizedState.memoizedState && (null !== e ? e.push(Gf) : e = [Gf]);
            }
            a = a.return;
        } null !== e && ka(t, e, n, r), t.flags |= 262144; } function Ea(e) { for (e = e.firstContext; null !== e;) {
            if (!Gn(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next;
        } return !1; } function Ca(e) { ga = e, ya = null, null !== (e = e.dependencies) && (e.firstContext = null); } function xa(e) { return _a(ga, e); } function Pa(e, t) { return null === ga && Ca(e), _a(e, t); } function _a(e, t) { var n = t._currentValue; if (t = { context: t, memoizedValue: n, next: null }, null === ya) {
            if (null === e)
                throw Error(o(308));
            ya = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
        }
        else
            ya = ya.next = t; return n; } var za = "undefined" != typeof AbortController ? AbortController : function () { var e = [], t = this.signal = { aborted: !1, addEventListener: function (t, n) { e.push(n); } }; this.abort = function () { t.aborted = !0, e.forEach(function (e) { return e(); }); }; }, Ta = r.unstable_scheduleCallback, La = r.unstable_NormalPriority, Oa = { $$typeof: w, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 }; function Na() { return { controller: new za, data: new Map, refCount: 0 }; } function Ra(e) { e.refCount--, 0 === e.refCount && Ta(La, function () { e.controller.abort(); }); } var Da = null, Ma = 0, Aa = 0, Ua = null; function Fa() { if (0 === --Ma && null !== Da) {
            null !== Ua && (Ua.status = "fulfilled");
            var e = Da;
            Da = null, Aa = 0, Ua = null;
            for (var t = 0; t < e.length; t++)
                (0, e[t])();
        } } var ja = R.S; R.S = function (e, t) { "object" == typeof t && null !== t && "function" == typeof t.then && function (e, t) { if (null === Da) {
            var n = Da = [];
            Ma = 0, Aa = zc(), Ua = { status: "pending", value: void 0, then: function (e) { n.push(e); } };
        } Ma++, t.then(Fa, Fa); }(0, t), null !== ja && ja(e, t); }; var Ia = F(null); function Ha() { var e = Ia.current; return null !== e ? e : ns.pooledCache; } function Ba(e, t) { I(Ia, null === t ? Ia.current : t.pool); } function $a() { var e = Ha(); return null === e ? null : { parent: Oa._currentValue, pool: e }; } var Wa = Error(o(460)), Va = Error(o(474)), qa = Error(o(542)), Qa = { then: function () { } }; function Ga(e) { return "fulfilled" === (e = e.status) || "rejected" === e; } function Ka() { } function Ya(e, t, n) { switch (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(Ka, Ka), t = n), t.status) {
            case "fulfilled": return t.value;
            case "rejected": throw Ja(e = t.reason), e;
            default:
                if ("string" == typeof t.status)
                    t.then(Ka, Ka);
                else {
                    if (null !== (e = ns) && 100 < e.shellSuspendCounter)
                        throw Error(o(482));
                    (e = t).status = "pending", e.then(function (e) { if ("pending" === t.status) {
                        var n = t;
                        n.status = "fulfilled", n.value = e;
                    } }, function (e) { if ("pending" === t.status) {
                        var n = t;
                        n.status = "rejected", n.reason = e;
                    } });
                }
                switch (t.status) {
                    case "fulfilled": return t.value;
                    case "rejected": throw Ja(e = t.reason), e;
                }
                throw Xa = t, Wa;
        } } var Xa = null; function Za() { if (null === Xa)
            throw Error(o(459)); var e = Xa; return Xa = null, e; } function Ja(e) { if (e === Wa || e === qa)
            throw Error(o(483)); } var el = !1; function tl(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null }; } function nl(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null }); } function rl(e) { return { lane: e, tag: 0, payload: null, callback: null, next: null }; } function al(e, t, n) { var r = e.updateQueue; if (null === r)
            return null; if (r = r.shared, 2 & ts) {
            var a = r.pending;
            return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, t = Nr(e), Or(e, null, n), t;
        } return zr(e, r, t, n), Nr(e); } function ll(e, t, n) { if (null !== (t = t.updateQueue) && (t = t.shared, 4194048 & n)) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, Pe(e, n);
        } } function ol(e, t) { var n = e.updateQueue, r = e.alternate; if (null !== r && n === (r = r.updateQueue)) {
            var a = null, l = null;
            if (null !== (n = n.firstBaseUpdate)) {
                do {
                    var o = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
                    null === l ? a = l = o : l = l.next = o, n = n.next;
                } while (null !== n);
                null === l ? a = l = t : l = l.next = t;
            }
            else
                a = l = t;
            return n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: l, shared: r.shared, callbacks: r.callbacks }, void (e.updateQueue = n);
        } null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; } var il = !1; function ul() { if (il && null !== Ua)
            throw Ua; } function sl(e, t, n, r) { il = !1; var a = e.updateQueue; el = !1; var l = a.firstBaseUpdate, o = a.lastBaseUpdate, i = a.shared.pending; if (null !== i) {
            a.shared.pending = null;
            var u = i, s = u.next;
            u.next = null, null === o ? l = s : o.next = s, o = u;
            var c = e.alternate;
            null !== c && (i = (c = c.updateQueue).lastBaseUpdate) !== o && (null === i ? c.firstBaseUpdate = s : i.next = s, c.lastBaseUpdate = u);
        } if (null !== l) {
            var d = a.baseState;
            for (o = 0, c = s = u = null, i = l;;) {
                var p = -536870913 & i.lane, h = p !== i.lane;
                if (h ? (as & p) === p : (r & p) === p) {
                    0 !== p && p === Aa && (il = !0), null !== c && (c = c.next = { lane: 0, tag: i.tag, payload: i.payload, callback: null, next: null });
                    e: {
                        var m = e, g = i;
                        p = t;
                        var y = n;
                        switch (g.tag) {
                            case 1:
                                if ("function" == typeof (m = g.payload)) {
                                    d = m.call(y, d, p);
                                    break e;
                                }
                                d = m;
                                break e;
                            case 3: m.flags = -65537 & m.flags | 128;
                            case 0:
                                if (null == (p = "function" == typeof (m = g.payload) ? m.call(y, d, p) : m))
                                    break e;
                                d = f({}, d, p);
                                break e;
                            case 2: el = !0;
                        }
                    }
                    null !== (p = i.callback) && (e.flags |= 64, h && (e.flags |= 8192), null === (h = a.callbacks) ? a.callbacks = [p] : h.push(p));
                }
                else
                    h = { lane: p, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, null === c ? (s = c = h, u = d) : c = c.next = h, o |= p;
                if (null === (i = i.next)) {
                    if (null === (i = a.shared.pending))
                        break;
                    i = (h = i).next, h.next = null, a.lastBaseUpdate = h, a.shared.pending = null;
                }
            }
            null === c && (u = d), a.baseState = u, a.firstBaseUpdate = s, a.lastBaseUpdate = c, null === l && (a.shared.lanes = 0), ds |= o, e.lanes = o, e.memoizedState = d;
        } } function cl(e, t) { if ("function" != typeof e)
            throw Error(o(191, e)); e.call(t); } function fl(e, t) { var n = e.callbacks; if (null !== n)
            for (e.callbacks = null, e = 0; e < n.length; e++)
                cl(n[e], t); } var dl = F(null), pl = F(0); function hl(e, t) { I(pl, e = cs), I(dl, t), cs = e | t.baseLanes; } function ml() { I(pl, cs), I(dl, dl.current); } function gl() { cs = pl.current, j(dl), j(pl); } var yl = 0, vl = null, bl = null, wl = null, kl = !1, Sl = !1, El = !1, Cl = 0, xl = 0, Pl = null, _l = 0; function zl() { throw Error(o(321)); } function Tl(e, t) { if (null === t)
            return !1; for (var n = 0; n < t.length && n < e.length; n++)
            if (!Gn(e[n], t[n]))
                return !1; return !0; } function Ll(e, t, n, r, a, l) { return yl = l, vl = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, R.H = null === e || null === e.memoizedState ? Vo : qo, El = !1, l = n(r, a), El = !1, Sl && (l = Nl(t, n, r, a)), Ol(e), l; } function Ol(e) { R.H = Wo; var t = null !== bl && null !== bl.next; if (yl = 0, wl = bl = vl = null, kl = !1, xl = 0, Pl = null, t)
            throw Error(o(300)); null === e || Pi || null !== (e = e.dependencies) && Ea(e) && (Pi = !0); } function Nl(e, t, n, r) { vl = e; var a = 0; do {
            if (Sl && (Pl = null), xl = 0, Sl = !1, 25 <= a)
                throw Error(o(301));
            if (a += 1, wl = bl = null, null != e.updateQueue) {
                var l = e.updateQueue;
                l.lastEffect = null, l.events = null, l.stores = null, null != l.memoCache && (l.memoCache.index = 0);
            }
            R.H = Qo, l = t(n, r);
        } while (Sl); return l; } function Rl() { var e = R.H, t = e.useState()[0]; return t = "function" == typeof t.then ? jl(t) : t, e = e.useState()[0], (null !== bl ? bl.memoizedState : null) !== e && (vl.flags |= 1024), t; } function Dl() { var e = 0 !== Cl; return Cl = 0, e; } function Ml(e, t, n) { t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n; } function Al(e) { if (kl) {
            for (e = e.memoizedState; null !== e;) {
                var t = e.queue;
                null !== t && (t.pending = null), e = e.next;
            }
            kl = !1;
        } yl = 0, wl = bl = vl = null, Sl = !1, xl = Cl = 0, Pl = null; } function Ul() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return null === wl ? vl.memoizedState = wl = e : wl = wl.next = e, wl; } function Fl() { if (null === bl) {
            var e = vl.alternate;
            e = null !== e ? e.memoizedState : null;
        }
        else
            e = bl.next; var t = null === wl ? vl.memoizedState : wl.next; if (null !== t)
            wl = t, bl = e;
        else {
            if (null === e) {
                if (null === vl.alternate)
                    throw Error(o(467));
                throw Error(o(310));
            }
            e = { memoizedState: (bl = e).memoizedState, baseState: bl.baseState, baseQueue: bl.baseQueue, queue: bl.queue, next: null }, null === wl ? vl.memoizedState = wl = e : wl = wl.next = e;
        } return wl; } function jl(e) { var t = xl; return xl += 1, null === Pl && (Pl = []), e = Ya(Pl, e, t), t = vl, null === (null === wl ? t.memoizedState : wl.next) && (t = t.alternate, R.H = null === t || null === t.memoizedState ? Vo : qo), e; } function Il(e) { if (null !== e && "object" == typeof e) {
            if ("function" == typeof e.then)
                return jl(e);
            if (e.$$typeof === w)
                return xa(e);
        } throw Error(o(438, String(e))); } function Hl(e) { var t = null, n = vl.updateQueue; if (null !== n && (t = n.memoCache), null == t) {
            var r = vl.alternate;
            null !== r && null !== (r = r.updateQueue) && null != (r = r.memoCache) && (t = { data: r.data.map(function (e) { return e.slice(); }), index: 0 });
        } if (null == t && (t = { data: [], index: 0 }), null === n && (n = { lastEffect: null, events: null, stores: null, memoCache: null }, vl.updateQueue = n), n.memoCache = t, void 0 === (n = t.data[t.index]))
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++)
                n[r] = _; return t.index++, n; } function Bl(e, t) { return "function" == typeof t ? t(e) : t; } function $l(e) { return Wl(Fl(), bl, e); } function Wl(e, t, n) { var r = e.queue; if (null === r)
            throw Error(o(311)); r.lastRenderedReducer = n; var a = e.baseQueue, l = r.pending; if (null !== l) {
            if (null !== a) {
                var i = a.next;
                a.next = l.next, l.next = i;
            }
            t.baseQueue = a = l, r.pending = null;
        } if (l = e.baseState, null === a)
            e.memoizedState = l;
        else {
            var u = i = null, s = null, c = t = a.next, f = !1;
            do {
                var d = -536870913 & c.lane;
                if (d !== c.lane ? (as & d) === d : (yl & d) === d) {
                    var p = c.revertLane;
                    if (0 === p)
                        null !== s && (s = s.next = { lane: 0, revertLane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), d === Aa && (f = !0);
                    else {
                        if ((yl & p) === p) {
                            c = c.next, p === Aa && (f = !0);
                            continue;
                        }
                        d = { lane: 0, revertLane: c.revertLane, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }, null === s ? (u = s = d, i = l) : s = s.next = d, vl.lanes |= p, ds |= p;
                    }
                    d = c.action, El && n(l, d), l = c.hasEagerState ? c.eagerState : n(l, d);
                }
                else
                    p = { lane: d, revertLane: c.revertLane, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }, null === s ? (u = s = p, i = l) : s = s.next = p, vl.lanes |= d, ds |= d;
                c = c.next;
            } while (null !== c && c !== t);
            if (null === s ? i = l : s.next = u, !Gn(l, e.memoizedState) && (Pi = !0, f && null !== (n = Ua)))
                throw n;
            e.memoizedState = l, e.baseState = i, e.baseQueue = s, r.lastRenderedState = l;
        } return null === a && (r.lanes = 0), [e.memoizedState, r.dispatch]; } function Vl(e) { var t = Fl(), n = t.queue; if (null === n)
            throw Error(o(311)); n.lastRenderedReducer = e; var r = n.dispatch, a = n.pending, l = t.memoizedState; if (null !== a) {
            n.pending = null;
            var i = a = a.next;
            do {
                l = e(l, i.action), i = i.next;
            } while (i !== a);
            Gn(l, t.memoizedState) || (Pi = !0), t.memoizedState = l, null === t.baseQueue && (t.baseState = l), n.lastRenderedState = l;
        } return [l, r]; } function ql(e, t, n) { var r = vl, a = Fl(), l = aa; if (l) {
            if (void 0 === n)
                throw Error(o(407));
            n = n();
        }
        else
            n = t(); var i = !Gn((bl || a).memoizedState, n); if (i && (a.memoizedState = n, Pi = !0), a = a.queue, go(2048, 8, Kl.bind(null, r, a, e), [e]), a.getSnapshot !== t || i || null !== wl && 1 & wl.memoizedState.tag) {
            if (r.flags |= 2048, po(9, { destroy: void 0, resource: void 0 }, Gl.bind(null, r, a, n, t), null), null === ns)
                throw Error(o(349));
            l || 124 & yl || Ql(r, t, n);
        } return n; } function Ql(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, null === (t = vl.updateQueue) ? (t = { lastEffect: null, events: null, stores: null, memoCache: null }, vl.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e); } function Gl(e, t, n, r) { t.value = n, t.getSnapshot = r, Yl(t) && Xl(e); } function Kl(e, t, n) { return n(function () { Yl(t) && Xl(e); }); } function Yl(e) { var t = e.getSnapshot; e = e.value; try {
            var n = t();
            return !Gn(e, n);
        }
        catch (e) {
            return !0;
        } } function Xl(e) { var t = Lr(e, 2); null !== t && Ms(t, 0, 2); } function Zl(e) { var t = Ul(); if ("function" == typeof e) {
            var n = e;
            if (e = n(), El) {
                fe(!0);
                try {
                    n();
                }
                finally {
                    fe(!1);
                }
            }
        } return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Bl, lastRenderedState: e }, t; } function Jl(e, t, n, r) { return e.baseState = n, Wl(e, bl, "function" == typeof r ? r : Bl); } function eo(e, t, n, r, a) { if (Ho(e))
            throw Error(o(485)); if (null !== (e = t.action)) {
            var l = { payload: a, action: e, next: null, isTransition: !0, status: "pending", value: null, reason: null, listeners: [], then: function (e) { l.listeners.push(e); } };
            null !== R.T ? n(!0) : l.isTransition = !1, r(l), null === (n = t.pending) ? (l.next = t.pending = l, to(t, l)) : (l.next = n.next, t.pending = n.next = l);
        } } function to(e, t) { var n = t.action, r = t.payload, a = e.state; if (t.isTransition) {
            var l = R.T, o = {};
            R.T = o;
            try {
                var i = n(a, r), u = R.S;
                null !== u && u(o, i), no(e, t, i);
            }
            catch (n) {
                ao(e, t, n);
            }
            finally {
                R.T = l;
            }
        }
        else
            try {
                no(e, t, l = n(a, r));
            }
            catch (n) {
                ao(e, t, n);
            } } function no(e, t, n) { null !== n && "object" == typeof n && "function" == typeof n.then ? n.then(function (n) { ro(e, t, n); }, function (n) { return ao(e, t, n); }) : ro(e, t, n); } function ro(e, t, n) { t.status = "fulfilled", t.value = n, lo(t), e.state = n, null !== (t = e.pending) && ((n = t.next) === t ? e.pending = null : (n = n.next, t.next = n, to(e, n))); } function ao(e, t, n) { var r = e.pending; if (e.pending = null, null !== r) {
            r = r.next;
            do {
                t.status = "rejected", t.reason = n, lo(t), t = t.next;
            } while (t !== r);
        } e.action = null; } function lo(e) { e = e.listeners; for (var t = 0; t < e.length; t++)
            (0, e[t])(); } function oo(e, t) { return t; } function io(e, t) { if (aa) {
            var n = ns.formState;
            if (null !== n) {
                e: {
                    var r = vl;
                    if (aa) {
                        if (ra) {
                            t: {
                                for (var a = ra, l = oa; 8 !== a.nodeType;) {
                                    if (!l) {
                                        a = null;
                                        break t;
                                    }
                                    if (null === (a = yf(a.nextSibling))) {
                                        a = null;
                                        break t;
                                    }
                                }
                                a = "F!" === (l = a.data) || "F" === l ? a : null;
                            }
                            if (a) {
                                ra = yf(a.nextSibling), r = "F!" === a.data;
                                break e;
                            }
                        }
                        ua(r);
                    }
                    r = !1;
                }
                r && (t = n[0]);
            }
        } return (n = Ul()).memoizedState = n.baseState = t, r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: oo, lastRenderedState: t }, n.queue = r, n = Fo.bind(null, vl, r), r.dispatch = n, r = Zl(!1), l = Io.bind(null, vl, !1, r.queue), a = { state: t, dispatch: null, action: e, pending: null }, (r = Ul()).queue = a, n = eo.bind(null, vl, a, l, n), a.dispatch = n, r.memoizedState = e, [t, n, !1]; } function uo(e) { return so(Fl(), bl, e); } function so(e, t, n) { if (t = Wl(e, t, oo)[0], e = $l(Bl)[0], "object" == typeof t && null !== t && "function" == typeof t.then)
            try {
                var r = jl(t);
            }
            catch (e) {
                if (e === Wa)
                    throw qa;
                throw e;
            }
        else
            r = t; var a = (t = Fl()).queue, l = a.dispatch; return n !== t.memoizedState && (vl.flags |= 2048, po(9, { destroy: void 0, resource: void 0 }, co.bind(null, a, n), null)), [r, l, e]; } function co(e, t) { e.action = t; } function fo(e) { var t = Fl(), n = bl; if (null !== n)
            return so(t, n, e); Fl(), t = t.memoizedState; var r = (n = Fl()).queue.dispatch; return n.memoizedState = e, [t, r, !1]; } function po(e, t, n, r) { return e = { tag: e, create: n, deps: r, inst: t, next: null }, null === (t = vl.updateQueue) && (t = { lastEffect: null, events: null, stores: null, memoCache: null }, vl.updateQueue = t), null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e; } function ho() { return Fl().memoizedState; } function mo(e, t, n, r) { var a = Ul(); r = void 0 === r ? null : r, vl.flags |= e, a.memoizedState = po(1 | t, { destroy: void 0, resource: void 0 }, n, r); } function go(e, t, n, r) { var a = Fl(); r = void 0 === r ? null : r; var l = a.memoizedState.inst; null !== bl && null !== r && Tl(r, bl.memoizedState.deps) ? a.memoizedState = po(t, l, n, r) : (vl.flags |= e, a.memoizedState = po(1 | t, l, n, r)); } function yo(e, t) { mo(8390656, 8, e, t); } function vo(e, t) { go(2048, 8, e, t); } function bo(e, t) { return go(4, 2, e, t); } function wo(e, t) { return go(4, 4, e, t); } function ko(e, t) { if ("function" == typeof t) {
            e = e();
            var n = t(e);
            return function () { "function" == typeof n ? n() : t(null); };
        } if (null != t)
            return e = e(), t.current = e, function () { t.current = null; }; } function So(e, t, n) { n = null != n ? n.concat([e]) : null, go(4, 4, ko.bind(null, t, e), n); } function Eo() { } function Co(e, t) { var n = Fl(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== t && Tl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); } function xo(e, t) { var n = Fl(); t = void 0 === t ? null : t; var r = n.memoizedState; if (null !== t && Tl(t, r[1]))
            return r[0]; if (r = e(), El) {
            fe(!0);
            try {
                e();
            }
            finally {
                fe(!1);
            }
        } return n.memoizedState = [r, t], r; } function Po(e, t, n) { return void 0 === n || 1073741824 & yl ? e.memoizedState = t : (e.memoizedState = n, e = Ds(), vl.lanes |= e, ds |= e, n); } function _o(e, t, n, r) { return Gn(n, t) ? n : null !== dl.current ? (e = Po(e, n, r), Gn(e, t) || (Pi = !0), e) : 42 & yl ? (e = Ds(), vl.lanes |= e, ds |= e, t) : (Pi = !0, e.memoizedState = n); } function zo(e, t, n, r, a) { var l = D.p; D.p = 0 !== l && 8 > l ? l : 8; var o, i, u, s = R.T, c = {}; R.T = c, Io(e, !1, t, n); try {
            var f = a(), d = R.S;
            null !== d && d(c, f), null !== f && "object" == typeof f && "function" == typeof f.then ? jo(e, t, (o = r, i = [], u = { status: "pending", value: null, reason: null, then: function (e) { i.push(e); } }, f.then(function () { u.status = "fulfilled", u.value = o; for (var e = 0; e < i.length; e++)
                (0, i[e])(o); }, function (e) { for (u.status = "rejected", u.reason = e, e = 0; e < i.length; e++)
                (0, i[e])(void 0); }), u), Rs()) : jo(e, t, r, Rs());
        }
        catch (n) {
            jo(e, t, { then: function () { }, status: "rejected", reason: n }, Rs());
        }
        finally {
            D.p = l, R.T = s;
        } } function To() { } function Lo(e, t, n, r) { if (5 !== e.tag)
            throw Error(o(476)); var a = Oo(e).queue; zo(e, a, t, M, null === n ? To : function () { return No(e), n(r); }); } function Oo(e) { var t = e.memoizedState; if (null !== t)
            return t; var n = {}; return (t = { memoizedState: M, baseState: M, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Bl, lastRenderedState: M }, next: null }).next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Bl, lastRenderedState: n }, next: null }, e.memoizedState = t, null !== (e = e.alternate) && (e.memoizedState = t), t; } function No(e) { jo(e, Oo(e).next.queue, {}, Rs()); } function Ro() { return xa(Gf); } function Do() { return Fl().memoizedState; } function Mo() { return Fl().memoizedState; } function Ao(e) { for (var t = e.return; null !== t;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var n = Rs(), r = al(t, e = rl(n), n);
                    return null !== r && (Ms(r, 0, n), ll(r, t, n)), t = { cache: Na() }, void (e.payload = t);
            }
            t = t.return;
        } } function Uo(e, t, n) { var r = Rs(); n = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null }, Ho(e) ? Bo(t, n) : null !== (n = Tr(e, t, n, r)) && (Ms(n, 0, r), $o(n, t, r)); } function Fo(e, t, n) { jo(e, t, n, Rs()); } function jo(e, t, n, r) { var a = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null }; if (Ho(e))
            Bo(t, a);
        else {
            var l = e.alternate;
            if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer))
                try {
                    var o = t.lastRenderedState, i = l(o, n);
                    if (a.hasEagerState = !0, a.eagerState = i, Gn(i, o))
                        return zr(e, t, a, 0), null === ns && _r(), !1;
                }
                catch (e) { }
            if (null !== (n = Tr(e, t, a, r)))
                return Ms(n, 0, r), $o(n, t, r), !0;
        } return !1; } function Io(e, t, n, r) { if (r = { lane: 2, revertLane: zc(), action: r, hasEagerState: !1, eagerState: null, next: null }, Ho(e)) {
            if (t)
                throw Error(o(479));
        }
        else
            null !== (t = Tr(e, n, r, 2)) && Ms(t, 0, 2); } function Ho(e) { var t = e.alternate; return e === vl || null !== t && t === vl; } function Bo(e, t) { Sl = kl = !0; var n = e.pending; null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; } function $o(e, t, n) { if (4194048 & n) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, Pe(e, n);
        } } var Wo = { readContext: xa, use: Il, useCallback: zl, useContext: zl, useEffect: zl, useImperativeHandle: zl, useLayoutEffect: zl, useInsertionEffect: zl, useMemo: zl, useReducer: zl, useRef: zl, useState: zl, useDebugValue: zl, useDeferredValue: zl, useTransition: zl, useSyncExternalStore: zl, useId: zl, useHostTransitionStatus: zl, useFormState: zl, useActionState: zl, useOptimistic: zl, useMemoCache: zl, useCacheRefresh: zl }, Vo = { readContext: xa, use: Il, useCallback: function (e, t) { return Ul().memoizedState = [e, void 0 === t ? null : t], e; }, useContext: xa, useEffect: yo, useImperativeHandle: function (e, t, n) { n = null != n ? n.concat([e]) : null, mo(4194308, 4, ko.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return mo(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { mo(4, 2, e, t); }, useMemo: function (e, t) { var n = Ul(); t = void 0 === t ? null : t; var r = e(); if (El) {
                fe(!0);
                try {
                    e();
                }
                finally {
                    fe(!1);
                }
            } return n.memoizedState = [r, t], r; }, useReducer: function (e, t, n) { var r = Ul(); if (void 0 !== n) {
                var a = n(t);
                if (El) {
                    fe(!0);
                    try {
                        n(t);
                    }
                    finally {
                        fe(!1);
                    }
                }
            }
            else
                a = t; return r.memoizedState = r.baseState = a, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: a }, r.queue = e, e = e.dispatch = Uo.bind(null, vl, e), [r.memoizedState, e]; }, useRef: function (e) { return e = { current: e }, Ul().memoizedState = e; }, useState: function (e) { var t = (e = Zl(e)).queue, n = Fo.bind(null, vl, t); return t.dispatch = n, [e.memoizedState, n]; }, useDebugValue: Eo, useDeferredValue: function (e, t) { return Po(Ul(), e, t); }, useTransition: function () { var e = Zl(!1); return e = zo.bind(null, vl, e.queue, !0, !1), Ul().memoizedState = e, [!1, e]; }, useSyncExternalStore: function (e, t, n) { var r = vl, a = Ul(); if (aa) {
                if (void 0 === n)
                    throw Error(o(407));
                n = n();
            }
            else {
                if (n = t(), null === ns)
                    throw Error(o(349));
                124 & as || Ql(r, t, n);
            } a.memoizedState = n; var l = { value: n, getSnapshot: t }; return a.queue = l, yo(Kl.bind(null, r, l, e), [e]), r.flags |= 2048, po(9, { destroy: void 0, resource: void 0 }, Gl.bind(null, r, l, n, t), null), n; }, useId: function () { var e = Ul(), t = ns.identifierPrefix; if (aa) {
                var n = Xr;
                t = "«" + t + "R" + (n = (Yr & ~(1 << 32 - de(Yr) - 1)).toString(32) + n), 0 < (n = Cl++) && (t += "H" + n.toString(32)), t += "»";
            }
            else
                t = "«" + t + "r" + (n = _l++).toString(32) + "»"; return e.memoizedState = t; }, useHostTransitionStatus: Ro, useFormState: io, useActionState: io, useOptimistic: function (e) { var t = Ul(); t.memoizedState = t.baseState = e; var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null }; return t.queue = n, t = Io.bind(null, vl, !0, n), n.dispatch = t, [e, t]; }, useMemoCache: Hl, useCacheRefresh: function () { return Ul().memoizedState = Ao.bind(null, vl); } }, qo = { readContext: xa, use: Il, useCallback: Co, useContext: xa, useEffect: vo, useImperativeHandle: So, useInsertionEffect: bo, useLayoutEffect: wo, useMemo: xo, useReducer: $l, useRef: ho, useState: function () { return $l(Bl); }, useDebugValue: Eo, useDeferredValue: function (e, t) { return _o(Fl(), bl.memoizedState, e, t); }, useTransition: function () { var e = $l(Bl)[0], t = Fl().memoizedState; return ["boolean" == typeof e ? e : jl(e), t]; }, useSyncExternalStore: ql, useId: Do, useHostTransitionStatus: Ro, useFormState: uo, useActionState: uo, useOptimistic: function (e, t) { return Jl(Fl(), 0, e, t); }, useMemoCache: Hl, useCacheRefresh: Mo }, Qo = { readContext: xa, use: Il, useCallback: Co, useContext: xa, useEffect: vo, useImperativeHandle: So, useInsertionEffect: bo, useLayoutEffect: wo, useMemo: xo, useReducer: Vl, useRef: ho, useState: function () { return Vl(Bl); }, useDebugValue: Eo, useDeferredValue: function (e, t) { var n = Fl(); return null === bl ? Po(n, e, t) : _o(n, bl.memoizedState, e, t); }, useTransition: function () { var e = Vl(Bl)[0], t = Fl().memoizedState; return ["boolean" == typeof e ? e : jl(e), t]; }, useSyncExternalStore: ql, useId: Do, useHostTransitionStatus: Ro, useFormState: fo, useActionState: fo, useOptimistic: function (e, t) { var n = Fl(); return null !== bl ? Jl(n, 0, e, t) : (n.baseState = e, [e, n.queue.dispatch]); }, useMemoCache: Hl, useCacheRefresh: Mo }, Go = null, Ko = 0; function Yo(e) { var t = Ko; return Ko += 1, null === Go && (Go = []), Ya(Go, e, t); } function Xo(e, t) { t = t.props.ref, e.ref = void 0 !== t ? t : null; } function Zo(e, t) { if (t.$$typeof === d)
            throw Error(o(525)); throw e = Object.prototype.toString.call(t), Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); } function Jo(e) { return (0, e._init)(e._payload); } function ei(e) { function t(t, n) { if (e) {
            var r = t.deletions;
            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n);
        } } function n(n, r) { if (!e)
            return null; for (; null !== r;)
            t(n, r), r = r.sibling; return null; } function r(e) { for (var t = new Map; null !== e;)
            null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling; return t; } function a(e, t) { return (e = Ur(e, t)).index = 0, e.sibling = null, e; } function l(t, n, r) { return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 67108866, n) : r : (t.flags |= 67108866, n) : (t.flags |= 1048576, n); } function i(t) { return e && null === t.alternate && (t.flags |= 67108866), t; } function u(e, t, n, r) { return null === t || 6 !== t.tag ? ((t = Hr(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t); } function s(e, t, n, r) { var l = n.type; return l === m ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === l || "object" == typeof l && null !== l && l.$$typeof === x && Jo(l) === t.type) ? (Xo(t = a(t, n.props), n), t.return = e, t) : (Xo(t = jr(n.type, n.key, n.props, null, e.mode, r), n), t.return = e, t); } function c(e, t, n, r) { return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Br(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t); } function f(e, t, n, r, l) { return null === t || 7 !== t.tag ? ((t = Ir(n, e.mode, r, l)).return = e, t) : ((t = a(t, n)).return = e, t); } function d(e, t, n) { if ("string" == typeof t && "" !== t || "number" == typeof t || "bigint" == typeof t)
            return (t = Hr("" + t, e.mode, n)).return = e, t; if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
                case p: return Xo(n = jr(t.type, t.key, t.props, null, e.mode, n), t), n.return = e, n;
                case h: return (t = Br(t, e.mode, n)).return = e, t;
                case x: return d(e, t = (0, t._init)(t._payload), n);
            }
            if (N(t) || T(t))
                return (t = Ir(t, e.mode, n, null)).return = e, t;
            if ("function" == typeof t.then)
                return d(e, Yo(t), n);
            if (t.$$typeof === w)
                return d(e, Pa(e, t), n);
            Zo(e, t);
        } return null; } function g(e, t, n, r) { var a = null !== t ? t.key : null; if ("string" == typeof n && "" !== n || "number" == typeof n || "bigint" == typeof n)
            return null !== a ? null : u(e, t, "" + n, r); if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
                case p: return n.key === a ? s(e, t, n, r) : null;
                case h: return n.key === a ? c(e, t, n, r) : null;
                case x: return g(e, t, n = (a = n._init)(n._payload), r);
            }
            if (N(n) || T(n))
                return null !== a ? null : f(e, t, n, r, null);
            if ("function" == typeof n.then)
                return g(e, t, Yo(n), r);
            if (n.$$typeof === w)
                return g(e, t, Pa(e, n), r);
            Zo(e, n);
        } return null; } function y(e, t, n, r, a) { if ("string" == typeof r && "" !== r || "number" == typeof r || "bigint" == typeof r)
            return u(t, e = e.get(n) || null, "" + r, a); if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
                case p: return s(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                case h: return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                case x: return y(e, t, n, r = (0, r._init)(r._payload), a);
            }
            if (N(r) || T(r))
                return f(t, e = e.get(n) || null, r, a, null);
            if ("function" == typeof r.then)
                return y(e, t, n, Yo(r), a);
            if (r.$$typeof === w)
                return y(e, t, n, Pa(t, r), a);
            Zo(t, r);
        } return null; } function v(u, s, c, f) { if ("object" == typeof c && null !== c && c.type === m && null === c.key && (c = c.props.children), "object" == typeof c && null !== c) {
            switch (c.$$typeof) {
                case p:
                    e: {
                        for (var b = c.key; null !== s;) {
                            if (s.key === b) {
                                if ((b = c.type) === m) {
                                    if (7 === s.tag) {
                                        n(u, s.sibling), (f = a(s, c.props.children)).return = u, u = f;
                                        break e;
                                    }
                                }
                                else if (s.elementType === b || "object" == typeof b && null !== b && b.$$typeof === x && Jo(b) === s.type) {
                                    n(u, s.sibling), Xo(f = a(s, c.props), c), f.return = u, u = f;
                                    break e;
                                }
                                n(u, s);
                                break;
                            }
                            t(u, s), s = s.sibling;
                        }
                        c.type === m ? ((f = Ir(c.props.children, u.mode, f, c.key)).return = u, u = f) : (Xo(f = jr(c.type, c.key, c.props, null, u.mode, f), c), f.return = u, u = f);
                    }
                    return i(u);
                case h:
                    e: {
                        for (b = c.key; null !== s;) {
                            if (s.key === b) {
                                if (4 === s.tag && s.stateNode.containerInfo === c.containerInfo && s.stateNode.implementation === c.implementation) {
                                    n(u, s.sibling), (f = a(s, c.children || [])).return = u, u = f;
                                    break e;
                                }
                                n(u, s);
                                break;
                            }
                            t(u, s), s = s.sibling;
                        }
                        (f = Br(c, u.mode, f)).return = u, u = f;
                    }
                    return i(u);
                case x: return v(u, s, c = (b = c._init)(c._payload), f);
            }
            if (N(c))
                return function (a, o, i, u) { for (var s = null, c = null, f = o, p = o = 0, h = null; null !== f && p < i.length; p++) {
                    f.index > p ? (h = f, f = null) : h = f.sibling;
                    var m = g(a, f, i[p], u);
                    if (null === m) {
                        null === f && (f = h);
                        break;
                    }
                    e && f && null === m.alternate && t(a, f), o = l(m, o, p), null === c ? s = m : c.sibling = m, c = m, f = h;
                } if (p === i.length)
                    return n(a, f), aa && Zr(a, p), s; if (null === f) {
                    for (; p < i.length; p++)
                        null !== (f = d(a, i[p], u)) && (o = l(f, o, p), null === c ? s = f : c.sibling = f, c = f);
                    return aa && Zr(a, p), s;
                } for (f = r(f); p < i.length; p++)
                    null !== (h = y(f, a, p, i[p], u)) && (e && null !== h.alternate && f.delete(null === h.key ? p : h.key), o = l(h, o, p), null === c ? s = h : c.sibling = h, c = h); return e && f.forEach(function (e) { return t(a, e); }), aa && Zr(a, p), s; }(u, s, c, f);
            if (T(c)) {
                if ("function" != typeof (b = T(c)))
                    throw Error(o(150));
                return function (a, i, u, s) { if (null == u)
                    throw Error(o(151)); for (var c = null, f = null, p = i, h = i = 0, m = null, v = u.next(); null !== p && !v.done; h++, v = u.next()) {
                    p.index > h ? (m = p, p = null) : m = p.sibling;
                    var b = g(a, p, v.value, s);
                    if (null === b) {
                        null === p && (p = m);
                        break;
                    }
                    e && p && null === b.alternate && t(a, p), i = l(b, i, h), null === f ? c = b : f.sibling = b, f = b, p = m;
                } if (v.done)
                    return n(a, p), aa && Zr(a, h), c; if (null === p) {
                    for (; !v.done; h++, v = u.next())
                        null !== (v = d(a, v.value, s)) && (i = l(v, i, h), null === f ? c = v : f.sibling = v, f = v);
                    return aa && Zr(a, h), c;
                } for (p = r(p); !v.done; h++, v = u.next())
                    null !== (v = y(p, a, h, v.value, s)) && (e && null !== v.alternate && p.delete(null === v.key ? h : v.key), i = l(v, i, h), null === f ? c = v : f.sibling = v, f = v); return e && p.forEach(function (e) { return t(a, e); }), aa && Zr(a, h), c; }(u, s, c = b.call(c), f);
            }
            if ("function" == typeof c.then)
                return v(u, s, Yo(c), f);
            if (c.$$typeof === w)
                return v(u, s, Pa(u, c), f);
            Zo(u, c);
        } return "string" == typeof c && "" !== c || "number" == typeof c || "bigint" == typeof c ? (c = "" + c, null !== s && 6 === s.tag ? (n(u, s.sibling), (f = a(s, c)).return = u, u = f) : (n(u, s), (f = Hr(c, u.mode, f)).return = u, u = f), i(u)) : n(u, s); } return function (e, t, n, r) { try {
            Ko = 0;
            var a = v(e, t, n, r);
            return Go = null, a;
        }
        catch (t) {
            if (t === Wa || t === qa)
                throw t;
            var l = Mr(29, t, null, e.mode);
            return l.lanes = r, l.return = e, l;
        } }; } var ti = ei(!0), ni = ei(!1), ri = F(null), ai = null; function li(e) { var t = e.alternate; I(si, 1 & si.current), I(ri, e), null === ai && (null === t || null !== dl.current || null !== t.memoizedState) && (ai = e); } function oi(e) { if (22 === e.tag) {
            if (I(si, si.current), I(ri, e), null === ai) {
                var t = e.alternate;
                null !== t && null !== t.memoizedState && (ai = e);
            }
        }
        else
            ii(); } function ii() { I(si, si.current), I(ri, ri.current); } function ui(e) { j(ri), ai === e && (ai = null), j(si); } var si = F(0); function ci(e) { for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || gf(n)))
                    return t;
            }
            else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (128 & t.flags)
                    return t;
            }
            else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === e)
                break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e)
                    return null;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        } return null; } function fi(e, t, n, r) { n = null == (n = n(r, t = e.memoizedState)) ? t : f({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n); } var di = { enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = Rs(), a = rl(r); a.payload = t, null != n && (a.callback = n), null !== (t = al(e, a, r)) && (Ms(t, 0, r), ll(t, e, r)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = Rs(), a = rl(r); a.tag = 1, a.payload = t, null != n && (a.callback = n), null !== (t = al(e, a, r)) && (Ms(t, 0, r), ll(t, e, r)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = Rs(), r = rl(n); r.tag = 2, null != t && (r.callback = t), null !== (t = al(e, r, n)) && (Ms(t, 0, n), ll(t, e, n)); } }; function pi(e, t, n, r, a, l, o) { return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, l, o) : !(t.prototype && t.prototype.isPureReactComponent && Kn(n, r) && Kn(a, l)); } function hi(e, t, n, r) { e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && di.enqueueReplaceState(t, t.state, null); } function mi(e, t) { var n = t; if ("ref" in t)
            for (var r in n = {}, t)
                "ref" !== r && (n[r] = t[r]); if (e = e.defaultProps)
            for (var a in n === t && (n = f({}, n)), e)
                void 0 === n[a] && (n[a] = e[a]); return n; } var gi = "function" == typeof reportError ? reportError : function (e) { if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
            var t = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e), error: e });
            if (!window.dispatchEvent(t))
                return;
        }
        else if ("object" == typeof process && "function" == typeof process.emit)
            return void process.emit("uncaughtException", e); console.error(e); }; function yi(e) { gi(e); } function vi(e) { console.error(e); } function bi(e) { gi(e); } function wi(e, t) { try {
            (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
        }
        catch (e) {
            setTimeout(function () { throw e; });
        } } function ki(e, t, n) { try {
            (0, e.onCaughtError)(n.value, { componentStack: n.stack, errorBoundary: 1 === t.tag ? t.stateNode : null });
        }
        catch (e) {
            setTimeout(function () { throw e; });
        } } function Si(e, t, n) { return (n = rl(n)).tag = 3, n.payload = { element: null }, n.callback = function () { wi(e, t); }, n; } function Ei(e) { return (e = rl(e)).tag = 3, e; } function Ci(e, t, n, r) { var a = n.type.getDerivedStateFromError; if ("function" == typeof a) {
            var l = r.value;
            e.payload = function () { return a(l); }, e.callback = function () { ki(t, n, r); };
        } var o = n.stateNode; null !== o && "function" == typeof o.componentDidCatch && (e.callback = function () { ki(t, n, r), "function" != typeof a && (null === Es ? Es = new Set([this]) : Es.add(this)); var e = r.stack; this.componentDidCatch(r.value, { componentStack: null !== e ? e : "" }); }); } var xi = Error(o(461)), Pi = !1; function _i(e, t, n, r) { t.child = null === e ? ni(t, null, n, r) : ti(t, e.child, n, r); } function zi(e, t, n, r, a) { n = n.render; var l = t.ref; if ("ref" in r) {
            var o = {};
            for (var i in r)
                "ref" !== i && (o[i] = r[i]);
        }
        else
            o = r; return Ca(t), r = Ll(e, t, n, o, l, a), i = Dl(), null === e || Pi ? (aa && i && ea(t), t.flags |= 1, _i(e, t, r, a), t.child) : (Ml(e, t, a), Gi(e, t, a)); } function Ti(e, t, n, r, a) { if (null === e) {
            var l = n.type;
            return "function" != typeof l || Ar(l) || void 0 !== l.defaultProps || null !== n.compare ? ((e = jr(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = l, Li(e, t, l, r, a));
        } if (l = e.child, !Ki(e, a)) {
            var o = l.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : Kn)(o, r) && e.ref === t.ref)
                return Gi(e, t, a);
        } return t.flags |= 1, (e = Ur(l, r)).ref = t.ref, e.return = t, t.child = e; } function Li(e, t, n, r, a) { if (null !== e) {
            var l = e.memoizedProps;
            if (Kn(l, r) && e.ref === t.ref) {
                if (Pi = !1, t.pendingProps = r = l, !Ki(e, a))
                    return t.lanes = e.lanes, Gi(e, t, a);
                131072 & e.flags && (Pi = !0);
            }
        } return Di(e, t, n, r, a); } function Oi(e, t, n) { var r = t.pendingProps, a = r.children, l = null !== e ? e.memoizedState : null; if ("hidden" === r.mode) {
            if (128 & t.flags) {
                if (r = null !== l ? l.baseLanes | n : n, null !== e) {
                    for (a = t.child = e.child, l = 0; null !== a;)
                        l = l | a.lanes | a.childLanes, a = a.sibling;
                    t.childLanes = l & ~r;
                }
                else
                    t.childLanes = 0, t.child = null;
                return Ni(e, t, r, n);
            }
            if (!(536870912 & n))
                return t.lanes = t.childLanes = 536870912, Ni(e, t, null !== l ? l.baseLanes | n : n, n);
            t.memoizedState = { baseLanes: 0, cachePool: null }, null !== e && Ba(0, null !== l ? l.cachePool : null), null !== l ? hl(t, l) : ml(), oi(t);
        }
        else
            null !== l ? (Ba(0, l.cachePool), hl(t, l), ii(), t.memoizedState = null) : (null !== e && Ba(0, null), ml(), ii()); return _i(e, t, a, n), t.child; } function Ni(e, t, n, r) { var a = Ha(); return a = null === a ? null : { parent: Oa._currentValue, pool: a }, t.memoizedState = { baseLanes: n, cachePool: a }, null !== e && Ba(0, null), ml(), oi(t), null !== e && Sa(e, t, r, !0), null; } function Ri(e, t) { var n = t.ref; if (null === n)
            null !== e && null !== e.ref && (t.flags |= 4194816);
        else {
            if ("function" != typeof n && "object" != typeof n)
                throw Error(o(284));
            null !== e && e.ref === n || (t.flags |= 4194816);
        } } function Di(e, t, n, r, a) { return Ca(t), n = Ll(e, t, n, r, void 0, a), r = Dl(), null === e || Pi ? (aa && r && ea(t), t.flags |= 1, _i(e, t, n, a), t.child) : (Ml(e, t, a), Gi(e, t, a)); } function Mi(e, t, n, r, a, l) { return Ca(t), t.updateQueue = null, n = Nl(t, r, n, a), Ol(e), r = Dl(), null === e || Pi ? (aa && r && ea(t), t.flags |= 1, _i(e, t, n, l), t.child) : (Ml(e, t, l), Gi(e, t, l)); } function Ai(e, t, n, r, a) { if (Ca(t), null === t.stateNode) {
            var l = Rr, o = n.contextType;
            "object" == typeof o && null !== o && (l = xa(o)), l = new n(r, l), t.memoizedState = null !== l.state && void 0 !== l.state ? l.state : null, l.updater = di, t.stateNode = l, l._reactInternals = t, (l = t.stateNode).props = r, l.state = t.memoizedState, l.refs = {}, tl(t), o = n.contextType, l.context = "object" == typeof o && null !== o ? xa(o) : Rr, l.state = t.memoizedState, "function" == typeof (o = n.getDerivedStateFromProps) && (fi(t, n, o, r), l.state = t.memoizedState), "function" == typeof n.getDerivedStateFromProps || "function" == typeof l.getSnapshotBeforeUpdate || "function" != typeof l.UNSAFE_componentWillMount && "function" != typeof l.componentWillMount || (o = l.state, "function" == typeof l.componentWillMount && l.componentWillMount(), "function" == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount(), o !== l.state && di.enqueueReplaceState(l, l.state, null), sl(t, r, l, a), ul(), l.state = t.memoizedState), "function" == typeof l.componentDidMount && (t.flags |= 4194308), r = !0;
        }
        else if (null === e) {
            l = t.stateNode;
            var i = t.memoizedProps, u = mi(n, i);
            l.props = u;
            var s = l.context, c = n.contextType;
            o = Rr, "object" == typeof c && null !== c && (o = xa(c));
            var f = n.getDerivedStateFromProps;
            c = "function" == typeof f || "function" == typeof l.getSnapshotBeforeUpdate, i = t.pendingProps !== i, c || "function" != typeof l.UNSAFE_componentWillReceiveProps && "function" != typeof l.componentWillReceiveProps || (i || s !== o) && hi(t, l, r, o), el = !1;
            var d = t.memoizedState;
            l.state = d, sl(t, r, l, a), ul(), s = t.memoizedState, i || d !== s || el ? ("function" == typeof f && (fi(t, n, f, r), s = t.memoizedState), (u = el || pi(t, n, u, r, d, s, o)) ? (c || "function" != typeof l.UNSAFE_componentWillMount && "function" != typeof l.componentWillMount || ("function" == typeof l.componentWillMount && l.componentWillMount(), "function" == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount()), "function" == typeof l.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof l.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = o, r = u) : ("function" == typeof l.componentDidMount && (t.flags |= 4194308), r = !1);
        }
        else {
            l = t.stateNode, nl(e, t), c = mi(n, o = t.memoizedProps), l.props = c, f = t.pendingProps, d = l.context, s = n.contextType, u = Rr, "object" == typeof s && null !== s && (u = xa(s)), (s = "function" == typeof (i = n.getDerivedStateFromProps) || "function" == typeof l.getSnapshotBeforeUpdate) || "function" != typeof l.UNSAFE_componentWillReceiveProps && "function" != typeof l.componentWillReceiveProps || (o !== f || d !== u) && hi(t, l, r, u), el = !1, d = t.memoizedState, l.state = d, sl(t, r, l, a), ul();
            var p = t.memoizedState;
            o !== f || d !== p || el || null !== e && null !== e.dependencies && Ea(e.dependencies) ? ("function" == typeof i && (fi(t, n, i, r), p = t.memoizedState), (c = el || pi(t, n, c, r, d, p, u) || null !== e && null !== e.dependencies && Ea(e.dependencies)) ? (s || "function" != typeof l.UNSAFE_componentWillUpdate && "function" != typeof l.componentWillUpdate || ("function" == typeof l.componentWillUpdate && l.componentWillUpdate(r, p, u), "function" == typeof l.UNSAFE_componentWillUpdate && l.UNSAFE_componentWillUpdate(r, p, u)), "function" == typeof l.componentDidUpdate && (t.flags |= 4), "function" == typeof l.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof l.componentDidUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof l.getSnapshotBeforeUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), l.props = r, l.state = p, l.context = u, r = c) : ("function" != typeof l.componentDidUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof l.getSnapshotBeforeUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
        } return l = r, Ri(e, t), r = !!(128 & t.flags), l || r ? (l = t.stateNode, n = r && "function" != typeof n.getDerivedStateFromError ? null : l.render(), t.flags |= 1, null !== e && r ? (t.child = ti(t, e.child, null, a), t.child = ti(t, null, n, a)) : _i(e, t, n, a), t.memoizedState = l.state, e = t.child) : e = Gi(e, t, a), e; } function Ui(e, t, n, r) { return da(), t.flags |= 256, _i(e, t, n, r), t.child; } var Fi = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null }; function ji(e) { return { baseLanes: e, cachePool: $a() }; } function Ii(e, t, n) { return e = null !== e ? e.childLanes & ~n : 0, t && (e |= ms), e; } function Hi(e, t, n) { var r, a = t.pendingProps, l = !1, i = !!(128 & t.flags); if ((r = i) || (r = (null === e || null !== e.memoizedState) && !!(2 & si.current)), r && (l = !0, t.flags &= -129), r = !!(32 & t.flags), t.flags &= -33, null === e) {
            if (aa) {
                if (l ? li(t) : ii(), aa) {
                    var u, s = ra;
                    if (u = s) {
                        e: {
                            for (u = s, s = oa; 8 !== u.nodeType;) {
                                if (!s) {
                                    s = null;
                                    break e;
                                }
                                if (null === (u = yf(u.nextSibling))) {
                                    s = null;
                                    break e;
                                }
                            }
                            s = u;
                        }
                        null !== s ? (t.memoizedState = { dehydrated: s, treeContext: null !== Kr ? { id: Yr, overflow: Xr } : null, retryLane: 536870912, hydrationErrors: null }, (u = Mr(18, null, null, 0)).stateNode = s, u.return = t, t.child = u, na = t, ra = null, u = !0) : u = !1;
                    }
                    u || ua(t);
                }
                if (null !== (s = t.memoizedState) && null !== (s = s.dehydrated))
                    return gf(s) ? t.lanes = 32 : t.lanes = 536870912, null;
                ui(t);
            }
            return s = a.children, a = a.fallback, l ? (ii(), s = $i({ mode: "hidden", children: s }, l = t.mode), a = Ir(a, l, n, null), s.return = t, a.return = t, s.sibling = a, t.child = s, (l = t.child).memoizedState = ji(n), l.childLanes = Ii(e, r, n), t.memoizedState = Fi, a) : (li(t), Bi(t, s));
        } if (null !== (u = e.memoizedState) && null !== (s = u.dehydrated)) {
            if (i)
                256 & t.flags ? (li(t), t.flags &= -257, t = Wi(e, t, n)) : null !== t.memoizedState ? (ii(), t.child = e.child, t.flags |= 128, t = null) : (ii(), l = a.fallback, s = t.mode, a = $i({ mode: "visible", children: a.children }, s), (l = Ir(l, s, n, null)).flags |= 2, a.return = t, l.return = t, a.sibling = l, t.child = a, ti(t, e.child, null, n), (a = t.child).memoizedState = ji(n), a.childLanes = Ii(e, r, n), t.memoizedState = Fi, t = l);
            else if (li(t), gf(s)) {
                if (r = s.nextSibling && s.nextSibling.dataset)
                    var c = r.dgst;
                r = c, (a = Error(o(419))).stack = "", a.digest = r, ha({ value: a, source: null, stack: null }), t = Wi(e, t, n);
            }
            else if (Pi || Sa(e, t, n, !1), r = 0 !== (n & e.childLanes), Pi || r) {
                if (null !== (r = ns) && 0 !== (a = 0 !== ((a = 42 & (a = n & -n) ? 1 : _e(a)) & (r.suspendedLanes | n)) ? 0 : a) && a !== u.retryLane)
                    throw u.retryLane = a, Lr(e, a), Ms(r, 0, a), xi;
                "$?" === s.data || qs(), t = Wi(e, t, n);
            }
            else
                "$?" === s.data ? (t.flags |= 192, t.child = e.child, t = null) : (e = u.treeContext, ra = yf(s.nextSibling), na = t, aa = !0, la = null, oa = !1, null !== e && (Qr[Gr++] = Yr, Qr[Gr++] = Xr, Qr[Gr++] = Kr, Yr = e.id, Xr = e.overflow, Kr = t), (t = Bi(t, a.children)).flags |= 4096);
            return t;
        } return l ? (ii(), l = a.fallback, s = t.mode, c = (u = e.child).sibling, (a = Ur(u, { mode: "hidden", children: a.children })).subtreeFlags = 65011712 & u.subtreeFlags, null !== c ? l = Ur(c, l) : (l = Ir(l, s, n, null)).flags |= 2, l.return = t, a.return = t, a.sibling = l, t.child = a, a = l, l = t.child, null === (s = e.child.memoizedState) ? s = ji(n) : (null !== (u = s.cachePool) ? (c = Oa._currentValue, u = u.parent !== c ? { parent: c, pool: c } : u) : u = $a(), s = { baseLanes: s.baseLanes | n, cachePool: u }), l.memoizedState = s, l.childLanes = Ii(e, r, n), t.memoizedState = Fi, a) : (li(t), e = (n = e.child).sibling, (n = Ur(n, { mode: "visible", children: a.children })).return = t, n.sibling = null, null !== e && (null === (r = t.deletions) ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n); } function Bi(e, t) { return (t = $i({ mode: "visible", children: t }, e.mode)).return = e, e.child = t; } function $i(e, t) { return (e = Mr(22, e, null, t)).lanes = 0, e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }, e; } function Wi(e, t, n) { return ti(t, e.child, null, n), (e = Bi(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e; } function Vi(e, t, n) { e.lanes |= t; var r = e.alternate; null !== r && (r.lanes |= t), wa(e.return, t, n); } function qi(e, t, n, r, a) { var l = e.memoizedState; null === l ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = a); } function Qi(e, t, n) { var r = t.pendingProps, a = r.revealOrder, l = r.tail; if (_i(e, t, r.children, n), 2 & (r = si.current))
            r = 1 & r | 2, t.flags |= 128;
        else {
            if (null !== e && 128 & e.flags)
                e: for (e = t.child; null !== e;) {
                    if (13 === e.tag)
                        null !== e.memoizedState && Vi(e, n, t);
                    else if (19 === e.tag)
                        Vi(e, n, t);
                    else if (null !== e.child) {
                        e.child.return = e, e = e.child;
                        continue;
                    }
                    if (e === t)
                        break e;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === t)
                            break e;
                        e = e.return;
                    }
                    e.sibling.return = e.return, e = e.sibling;
                }
            r &= 1;
        } switch (I(si, r), a) {
            case "forwards":
                for (n = t.child, a = null; null !== n;)
                    null !== (e = n.alternate) && null === ci(e) && (a = n), n = n.sibling;
                null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), qi(t, !1, a, n, l);
                break;
            case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a;) {
                    if (null !== (e = a.alternate) && null === ci(e)) {
                        t.child = a;
                        break;
                    }
                    e = a.sibling, a.sibling = n, n = a, a = e;
                }
                qi(t, !0, n, null, l);
                break;
            case "together":
                qi(t, !1, null, null, void 0);
                break;
            default: t.memoizedState = null;
        } return t.child; } function Gi(e, t, n) { if (null !== e && (t.dependencies = e.dependencies), ds |= t.lanes, 0 === (n & t.childLanes)) {
            if (null === e)
                return null;
            if (Sa(e, t, n, !1), 0 === (n & t.childLanes))
                return null;
        } if (null !== e && t.child !== e.child)
            throw Error(o(153)); if (null !== t.child) {
            for (n = Ur(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;)
                e = e.sibling, (n = n.sibling = Ur(e, e.pendingProps)).return = t;
            n.sibling = null;
        } return t.child; } function Ki(e, t) { return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !Ea(e)); } function Yi(e, t, n) { if (null !== e)
            if (e.memoizedProps !== t.pendingProps)
                Pi = !0;
            else {
                if (!(Ki(e, n) || 128 & t.flags))
                    return Pi = !1, function (e, t, n) { switch (t.tag) {
                        case 3:
                            V(t, t.stateNode.containerInfo), va(0, Oa, e.memoizedState.cache), da();
                            break;
                        case 27:
                        case 5:
                            Q(t);
                            break;
                        case 4:
                            V(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            va(0, t.type, t.memoizedProps.value);
                            break;
                        case 13:
                            var r = t.memoizedState;
                            if (null !== r)
                                return null !== r.dehydrated ? (li(t), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Hi(e, t, n) : (li(t), null !== (e = Gi(e, t, n)) ? e.sibling : null);
                            li(t);
                            break;
                        case 19:
                            var a = !!(128 & e.flags);
                            if ((r = 0 !== (n & t.childLanes)) || (Sa(e, t, n, !1), r = 0 !== (n & t.childLanes)), a) {
                                if (r)
                                    return Qi(e, t, n);
                                t.flags |= 128;
                            }
                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), I(si, si.current), r)
                                break;
                            return null;
                        case 22:
                        case 23: return t.lanes = 0, Oi(e, t, n);
                        case 24: va(0, Oa, e.memoizedState.cache);
                    } return Gi(e, t, n); }(e, t, n);
                Pi = !!(131072 & e.flags);
            }
        else
            Pi = !1, aa && 1048576 & t.flags && Jr(t, qr, t.index); switch (t.lanes = 0, t.tag) {
            case 16:
                e: {
                    e = t.pendingProps;
                    var r = t.elementType, a = r._init;
                    if (r = a(r._payload), t.type = r, "function" != typeof r) {
                        if (null != r) {
                            if ((a = r.$$typeof) === k) {
                                t.tag = 11, t = zi(null, t, r, e, n);
                                break e;
                            }
                            if (a === C) {
                                t.tag = 14, t = Ti(null, t, r, e, n);
                                break e;
                            }
                        }
                        throw t = O(r) || r, Error(o(306, t, ""));
                    }
                    Ar(r) ? (e = mi(r, e), t.tag = 1, t = Ai(null, t, r, e, n)) : (t.tag = 0, t = Di(null, t, r, e, n));
                }
                return t;
            case 0: return Di(e, t, t.type, t.pendingProps, n);
            case 1: return Ai(e, t, r = t.type, a = mi(r, t.pendingProps), n);
            case 3:
                e: {
                    if (V(t, t.stateNode.containerInfo), null === e)
                        throw Error(o(387));
                    r = t.pendingProps;
                    var l = t.memoizedState;
                    a = l.element, nl(e, t), sl(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.cache, va(0, Oa, r), r !== l.cache && ka(t, [Oa], n, !0), ul(), r = i.element, l.isDehydrated) {
                        if (l = { element: r, isDehydrated: !1, cache: i.cache }, t.updateQueue.baseState = l, t.memoizedState = l, 256 & t.flags) {
                            t = Ui(e, t, r, n);
                            break e;
                        }
                        if (r !== a) {
                            ha(a = Er(Error(o(424)), t)), t = Ui(e, t, r, n);
                            break e;
                        }
                        for (e = 9 === (e = t.stateNode.containerInfo).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e, ra = yf(e.firstChild), na = t, aa = !0, la = null, oa = !0, n = ni(t, null, r, n), t.child = n; n;)
                            n.flags = -3 & n.flags | 4096, n = n.sibling;
                    }
                    else {
                        if (da(), r === a) {
                            t = Gi(e, t, n);
                            break e;
                        }
                        _i(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 26: return Ri(e, t), null === e ? (n = zf(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : aa || (n = t.type, e = t.pendingProps, (r = nf($.current).createElement(n))[Oe] = t, r[Ne] = e, Jc(r, n, e), We(r), t.stateNode = r) : t.memoizedState = zf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27: return Q(t), null === e && aa && (r = t.stateNode = wf(t.type, t.pendingProps, $.current), na = t, oa = !0, a = ra, pf(t.type) ? (vf = a, ra = yf(r.firstChild)) : ra = a), _i(e, t, t.pendingProps.children, n), Ri(e, t), null === e && (t.flags |= 4194304), t.child;
            case 5: return null === e && aa && ((a = r = ra) && (null !== (r = function (e, t, n, r) { for (; 1 === e.nodeType;) {
                var a = n;
                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                    if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type))
                        break;
                }
                else if (r) {
                    if (!e[Fe])
                        switch (t) {
                            case "meta":
                                if (!e.hasAttribute("itemprop"))
                                    break;
                                return e;
                            case "link":
                                if ("stylesheet" === (l = e.getAttribute("rel")) && e.hasAttribute("data-precedence"))
                                    break;
                                if (l !== a.rel || e.getAttribute("href") !== (null == a.href || "" === a.href ? null : a.href) || e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin) || e.getAttribute("title") !== (null == a.title ? null : a.title))
                                    break;
                                return e;
                            case "style":
                                if (e.hasAttribute("data-precedence"))
                                    break;
                                return e;
                            case "script":
                                if (((l = e.getAttribute("src")) !== (null == a.src ? null : a.src) || e.getAttribute("type") !== (null == a.type ? null : a.type) || e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin)) && l && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                                    break;
                                return e;
                            default: return e;
                        }
                }
                else {
                    if ("input" !== t || "hidden" !== e.type)
                        return e;
                    var l = null == a.name ? null : "" + a.name;
                    if ("hidden" === a.type && e.getAttribute("name") === l)
                        return e;
                }
                if (null === (e = yf(e.nextSibling)))
                    break;
            } return null; }(r, t.type, t.pendingProps, oa)) ? (t.stateNode = r, na = t, ra = yf(r.firstChild), oa = !1, a = !0) : a = !1), a || ua(t)), Q(t), a = t.type, l = t.pendingProps, i = null !== e ? e.memoizedProps : null, r = l.children, lf(a, l) ? r = null : null !== i && lf(a, i) && (t.flags |= 32), null !== t.memoizedState && (a = Ll(e, t, Rl, null, null, n), Gf._currentValue = a), Ri(e, t), _i(e, t, r, n), t.child;
            case 6: return null === e && aa && ((e = n = ra) && (null !== (n = function (e, t, n) { if ("" === t)
                return null; for (; 3 !== e.nodeType;) {
                if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !n)
                    return null;
                if (null === (e = yf(e.nextSibling)))
                    return null;
            } return e; }(n, t.pendingProps, oa)) ? (t.stateNode = n, na = t, ra = null, e = !0) : e = !1), e || ua(t)), null;
            case 13: return Hi(e, t, n);
            case 4: return V(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = ti(t, null, r, n) : _i(e, t, r, n), t.child;
            case 11: return zi(e, t, t.type, t.pendingProps, n);
            case 7: return _i(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12: return _i(e, t, t.pendingProps.children, n), t.child;
            case 10: return r = t.pendingProps, va(0, t.type, r.value), _i(e, t, r.children, n), t.child;
            case 9: return a = t.type._context, r = t.pendingProps.children, Ca(t), r = r(a = xa(a)), t.flags |= 1, _i(e, t, r, n), t.child;
            case 14: return Ti(e, t, t.type, t.pendingProps, n);
            case 15: return Li(e, t, t.type, t.pendingProps, n);
            case 19: return Qi(e, t, n);
            case 31: return r = t.pendingProps, n = t.mode, r = { mode: r.mode, children: r.children }, null === e ? ((n = $i(r, n)).ref = t.ref, t.child = n, n.return = t, t = n) : ((n = Ur(e.child, r)).ref = t.ref, t.child = n, n.return = t, t = n), t;
            case 22: return Oi(e, t, n);
            case 24: return Ca(t), r = xa(Oa), null === e ? (null === (a = Ha()) && (a = ns, l = Na(), a.pooledCache = l, l.refCount++, null !== l && (a.pooledCacheLanes |= n), a = l), t.memoizedState = { parent: r, cache: a }, tl(t), va(0, Oa, a)) : (0 !== (e.lanes & n) && (nl(e, t), sl(t, null, null, n), ul()), a = e.memoizedState, l = t.memoizedState, a.parent !== r ? (a = { parent: r, cache: r }, t.memoizedState = a, 0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = a), va(0, Oa, r)) : (r = l.cache, va(0, Oa, r), r !== a.cache && ka(t, [Oa], n, !0))), _i(e, t, t.pendingProps.children, n), t.child;
            case 29: throw t.pendingProps;
        } throw Error(o(156, t.tag)); } function Xi(e) { e.flags |= 4; } function Zi(e, t) { if ("stylesheet" !== t.type || 4 & t.state.loading)
            e.flags &= -16777217;
        else if (e.flags |= 16777216, !Hf(t)) {
            if (null !== (t = ri.current) && ((4194048 & as) === as ? null !== ai : (62914560 & as) !== as && !(536870912 & as) || t !== ai))
                throw Xa = Qa, Va;
            e.flags |= 8192;
        } } function Ji(e, t) { null !== t && (e.flags |= 4), 16384 & e.flags && (t = 22 !== e.tag ? Se() : 536870912, e.lanes |= t, gs |= t); } function eu(e, t) { if (!aa)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var n = null; null !== t;)
                        null !== t.alternate && (n = t), t = t.sibling;
                    null === n ? e.tail = null : n.sibling = null;
                    break;
                case "collapsed":
                    n = e.tail;
                    for (var r = null; null !== n;)
                        null !== n.alternate && (r = n), n = n.sibling;
                    null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null;
            } } function tu(e) { var t = null !== e.alternate && e.alternate.child === e.child, n = 0, r = 0; if (t)
            for (var a = e.child; null !== a;)
                n |= a.lanes | a.childLanes, r |= 65011712 & a.subtreeFlags, r |= 65011712 & a.flags, a.return = e, a = a.sibling;
        else
            for (a = e.child; null !== a;)
                n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; } function nu(e, t, n) { var r = t.pendingProps; switch (ta(t), t.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1: return tu(t), null;
            case 3: return n = t.stateNode, r = null, null !== e && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), ba(Oa), q(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== e && null !== e.child || (fa(t) ? Xi(t) : null === e || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, pa())), tu(t), null;
            case 26: return n = t.memoizedState, null === e ? (Xi(t), null !== n ? (tu(t), Zi(t, n)) : (tu(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (Xi(t), tu(t), Zi(t, n)) : (tu(t), t.flags &= -16777217) : (e.memoizedProps !== r && Xi(t), tu(t), t.flags &= -16777217), null;
            case 27:
                G(t), n = $.current;
                var a = t.type;
                if (null !== e && null != t.stateNode)
                    e.memoizedProps !== r && Xi(t);
                else {
                    if (!r) {
                        if (null === t.stateNode)
                            throw Error(o(166));
                        return tu(t), null;
                    }
                    e = H.current, fa(t) ? sa(t) : (e = wf(a, r, n), t.stateNode = e, Xi(t));
                }
                return tu(t), null;
            case 5:
                if (G(t), n = t.type, null !== e && null != t.stateNode)
                    e.memoizedProps !== r && Xi(t);
                else {
                    if (!r) {
                        if (null === t.stateNode)
                            throw Error(o(166));
                        return tu(t), null;
                    }
                    if (e = H.current, fa(t))
                        sa(t);
                    else {
                        switch (a = nf($.current), e) {
                            case 1:
                                e = a.createElementNS("http://www.w3.org/2000/svg", n);
                                break;
                            case 2:
                                e = a.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                break;
                            default: switch (n) {
                                case "svg":
                                    e = a.createElementNS("http://www.w3.org/2000/svg", n);
                                    break;
                                case "math":
                                    e = a.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                    break;
                                case "script":
                                    (e = a.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                                    break;
                                case "select":
                                    e = "string" == typeof r.is ? a.createElement("select", { is: r.is }) : a.createElement("select"), r.multiple ? e.multiple = !0 : r.size && (e.size = r.size);
                                    break;
                                default: e = "string" == typeof r.is ? a.createElement(n, { is: r.is }) : a.createElement(n);
                            }
                        }
                        e[Oe] = t, e[Ne] = r;
                        e: for (a = t.child; null !== a;) {
                            if (5 === a.tag || 6 === a.tag)
                                e.appendChild(a.stateNode);
                            else if (4 !== a.tag && 27 !== a.tag && null !== a.child) {
                                a.child.return = a, a = a.child;
                                continue;
                            }
                            if (a === t)
                                break e;
                            for (; null === a.sibling;) {
                                if (null === a.return || a.return === t)
                                    break e;
                                a = a.return;
                            }
                            a.sibling.return = a.return, a = a.sibling;
                        }
                        t.stateNode = e;
                        e: switch (Jc(e, n, r), n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                e = !!r.autoFocus;
                                break e;
                            case "img":
                                e = !0;
                                break e;
                            default: e = !1;
                        }
                        e && Xi(t);
                    }
                }
                return tu(t), t.flags &= -16777217, null;
            case 6:
                if (e && null != t.stateNode)
                    e.memoizedProps !== r && Xi(t);
                else {
                    if ("string" != typeof r && null === t.stateNode)
                        throw Error(o(166));
                    if (e = $.current, fa(t)) {
                        if (e = t.stateNode, n = t.memoizedProps, r = null, null !== (a = na))
                            switch (a.tag) {
                                case 27:
                                case 5: r = a.memoizedProps;
                            }
                        e[Oe] = t, (e = !!(e.nodeValue === n || null !== r && !0 === r.suppressHydrationWarning || Kc(e.nodeValue, n))) || ua(t);
                    }
                    else
                        (e = nf(e).createTextNode(r))[Oe] = t, t.stateNode = e;
                }
                return tu(t), null;
            case 13:
                if (r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                    if (a = fa(t), null !== r && null !== r.dehydrated) {
                        if (null === e) {
                            if (!a)
                                throw Error(o(318));
                            if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null))
                                throw Error(o(317));
                            a[Oe] = t;
                        }
                        else
                            da(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                        tu(t), a = !1;
                    }
                    else
                        a = pa(), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = a), a = !0;
                    if (!a)
                        return 256 & t.flags ? (ui(t), t) : (ui(t), null);
                }
                if (ui(t), 128 & t.flags)
                    return t.lanes = n, t;
                if (n = null !== r, e = null !== e && null !== e.memoizedState, n) {
                    a = null, null !== (r = t.child).alternate && null !== r.alternate.memoizedState && null !== r.alternate.memoizedState.cachePool && (a = r.alternate.memoizedState.cachePool.pool);
                    var l = null;
                    null !== r.memoizedState && null !== r.memoizedState.cachePool && (l = r.memoizedState.cachePool.pool), l !== a && (r.flags |= 2048);
                }
                return n !== e && n && (t.child.flags |= 8192), Ji(t, t.updateQueue), tu(t), null;
            case 4: return q(), null === e && jc(t.stateNode.containerInfo), tu(t), null;
            case 10: return ba(t.type), tu(t), null;
            case 19:
                if (j(si), null === (a = t.memoizedState))
                    return tu(t), null;
                if (r = !!(128 & t.flags), null === (l = a.rendering))
                    if (r)
                        eu(a, !1);
                    else {
                        if (0 !== fs || null !== e && 128 & e.flags)
                            for (e = t.child; null !== e;) {
                                if (null !== (l = ci(e))) {
                                    for (t.flags |= 128, eu(a, !1), e = l.updateQueue, t.updateQueue = e, Ji(t, e), t.subtreeFlags = 0, e = n, n = t.child; null !== n;)
                                        Fr(n, e), n = n.sibling;
                                    return I(si, 1 & si.current | 2), t.child;
                                }
                                e = e.sibling;
                            }
                        null !== a.tail && ee() > ks && (t.flags |= 128, r = !0, eu(a, !1), t.lanes = 4194304);
                    }
                else {
                    if (!r)
                        if (null !== (e = ci(l))) {
                            if (t.flags |= 128, r = !0, e = e.updateQueue, t.updateQueue = e, Ji(t, e), eu(a, !0), null === a.tail && "hidden" === a.tailMode && !l.alternate && !aa)
                                return tu(t), null;
                        }
                        else
                            2 * ee() - a.renderingStartTime > ks && 536870912 !== n && (t.flags |= 128, r = !0, eu(a, !1), t.lanes = 4194304);
                    a.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (e = a.last) ? e.sibling = l : t.child = l, a.last = l);
                }
                return null !== a.tail ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ee(), t.sibling = null, e = si.current, I(si, r ? 1 & e | 2 : 1 & e), t) : (tu(t), null);
            case 22:
            case 23: return ui(t), gl(), r = null !== t.memoizedState, null !== e ? null !== e.memoizedState !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? !!(536870912 & n) && !(128 & t.flags) && (tu(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : tu(t), null !== (n = t.updateQueue) && Ji(t, n.retryQueue), n = null, null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), r = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), null !== e && j(Ia), null;
            case 24: return n = null, null !== e && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ba(Oa), tu(t), null;
            case 25:
            case 30: return null;
        } throw Error(o(156, t.tag)); } function ru(e, t) { switch (ta(t), t.tag) {
            case 1: return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 3: return ba(Oa), q(), 65536 & (e = t.flags) && !(128 & e) ? (t.flags = -65537 & e | 128, t) : null;
            case 26:
            case 27:
            case 5: return G(t), null;
            case 13:
                if (ui(t), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                    if (null === t.alternate)
                        throw Error(o(340));
                    da();
                }
                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 19: return j(si), null;
            case 4: return q(), null;
            case 10: return ba(t.type), null;
            case 22:
            case 23: return ui(t), gl(), null !== e && j(Ia), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 24: return ba(Oa), null;
            default: return null;
        } } function au(e, t) { switch (ta(t), t.tag) {
            case 3:
                ba(Oa), q();
                break;
            case 26:
            case 27:
            case 5:
                G(t);
                break;
            case 4:
                q();
                break;
            case 13:
                ui(t);
                break;
            case 19:
                j(si);
                break;
            case 10:
                ba(t.type);
                break;
            case 22:
            case 23:
                ui(t), gl(), null !== e && j(Ia);
                break;
            case 24: ba(Oa);
        } } function lu(e, t) { try {
            var n = t.updateQueue, r = null !== n ? n.lastEffect : null;
            if (null !== r) {
                var a = r.next;
                n = a;
                do {
                    if ((n.tag & e) === e) {
                        r = void 0;
                        var l = n.create, o = n.inst;
                        r = l(), o.destroy = r;
                    }
                    n = n.next;
                } while (n !== a);
            }
        }
        catch (e) {
            sc(t, t.return, e);
        } } function ou(e, t, n) { try {
            var r = t.updateQueue, a = null !== r ? r.lastEffect : null;
            if (null !== a) {
                var l = a.next;
                r = l;
                do {
                    if ((r.tag & e) === e) {
                        var o = r.inst, i = o.destroy;
                        if (void 0 !== i) {
                            o.destroy = void 0, a = t;
                            var u = n, s = i;
                            try {
                                s();
                            }
                            catch (e) {
                                sc(a, u, e);
                            }
                        }
                    }
                    r = r.next;
                } while (r !== l);
            }
        }
        catch (e) {
            sc(t, t.return, e);
        } } function iu(e) { var t = e.updateQueue; if (null !== t) {
            var n = e.stateNode;
            try {
                fl(t, n);
            }
            catch (t) {
                sc(e, e.return, t);
            }
        } } function uu(e, t, n) { n.props = mi(e.type, e.memoizedProps), n.state = e.memoizedState; try {
            n.componentWillUnmount();
        }
        catch (n) {
            sc(e, t, n);
        } } function su(e, t) { try {
            var n = e.ref;
            if (null !== n) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var r = e.stateNode;
                        break;
                    default: r = e.stateNode;
                }
                "function" == typeof n ? e.refCleanup = n(r) : n.current = r;
            }
        }
        catch (n) {
            sc(e, t, n);
        } } function cu(e, t) { var n = e.ref, r = e.refCleanup; if (null !== n)
            if ("function" == typeof r)
                try {
                    r();
                }
                catch (n) {
                    sc(e, t, n);
                }
                finally {
                    e.refCleanup = null, null != (e = e.alternate) && (e.refCleanup = null);
                }
            else if ("function" == typeof n)
                try {
                    n(null);
                }
                catch (n) {
                    sc(e, t, n);
                }
            else
                n.current = null; } function fu(e) { var t = e.type, n = e.memoizedProps, r = e.stateNode; try {
            e: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    n.autoFocus && r.focus();
                    break e;
                case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
            }
        }
        catch (t) {
            sc(e, e.return, t);
        } } function du(e, t, n) { try {
            var r = e.stateNode;
            !function (e, t, n, r) { switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li": break;
                case "input":
                    var a = null, l = null, i = null, u = null, s = null, c = null, f = null;
                    for (h in n) {
                        var d = n[h];
                        if (n.hasOwnProperty(h) && null != d)
                            switch (h) {
                                case "checked":
                                case "value": break;
                                case "defaultValue": s = d;
                                default: r.hasOwnProperty(h) || Xc(e, t, h, null, r, d);
                            }
                    }
                    for (var p in r) {
                        var h = r[p];
                        if (d = n[p], r.hasOwnProperty(p) && (null != h || null != d))
                            switch (p) {
                                case "type":
                                    l = h;
                                    break;
                                case "name":
                                    a = h;
                                    break;
                                case "checked":
                                    c = h;
                                    break;
                                case "defaultChecked":
                                    f = h;
                                    break;
                                case "value":
                                    i = h;
                                    break;
                                case "defaultValue":
                                    u = h;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (null != h)
                                        throw Error(o(137, t));
                                    break;
                                default: h !== d && Xc(e, t, p, h, r, d);
                            }
                    }
                    return void mt(e, i, u, s, c, f, l, a);
                case "select":
                    for (l in h = i = u = p = null, n)
                        if (s = n[l], n.hasOwnProperty(l) && null != s)
                            switch (l) {
                                case "value": break;
                                case "multiple": h = s;
                                default: r.hasOwnProperty(l) || Xc(e, t, l, null, r, s);
                            }
                    for (a in r)
                        if (l = r[a], s = n[a], r.hasOwnProperty(a) && (null != l || null != s))
                            switch (a) {
                                case "value":
                                    p = l;
                                    break;
                                case "defaultValue":
                                    u = l;
                                    break;
                                case "multiple": i = l;
                                default: l !== s && Xc(e, t, a, l, r, s);
                            }
                    return t = u, n = i, r = h, void (null != p ? vt(e, !!n, p, !1) : !!r != !!n && (null != t ? vt(e, !!n, t, !0) : vt(e, !!n, n ? [] : "", !1)));
                case "textarea":
                    for (u in h = p = null, n)
                        if (a = n[u], n.hasOwnProperty(u) && null != a && !r.hasOwnProperty(u))
                            switch (u) {
                                case "value":
                                case "children": break;
                                default: Xc(e, t, u, null, r, a);
                            }
                    for (i in r)
                        if (a = r[i], l = n[i], r.hasOwnProperty(i) && (null != a || null != l))
                            switch (i) {
                                case "value":
                                    p = a;
                                    break;
                                case "defaultValue":
                                    h = a;
                                    break;
                                case "children": break;
                                case "dangerouslySetInnerHTML":
                                    if (null != a)
                                        throw Error(o(91));
                                    break;
                                default: a !== l && Xc(e, t, i, a, r, l);
                            }
                    return void bt(e, p, h);
                case "option":
                    for (var m in n)
                        p = n[m], n.hasOwnProperty(m) && null != p && !r.hasOwnProperty(m) && ("selected" === m ? e.selected = !1 : Xc(e, t, m, null, r, p));
                    for (s in r)
                        p = r[s], h = n[s], !r.hasOwnProperty(s) || p === h || null == p && null == h || ("selected" === s ? e.selected = p && "function" != typeof p && "symbol" != typeof p : Xc(e, t, s, p, r, h));
                    return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                    for (var g in n)
                        p = n[g], n.hasOwnProperty(g) && null != p && !r.hasOwnProperty(g) && Xc(e, t, g, null, r, p);
                    for (c in r)
                        if (p = r[c], h = n[c], r.hasOwnProperty(c) && p !== h && (null != p || null != h))
                            switch (c) {
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (null != p)
                                        throw Error(o(137, t));
                                    break;
                                default: Xc(e, t, c, p, r, h);
                            }
                    return;
                default: if (xt(t)) {
                    for (var y in n)
                        p = n[y], n.hasOwnProperty(y) && void 0 !== p && !r.hasOwnProperty(y) && Zc(e, t, y, void 0, r, p);
                    for (f in r)
                        p = r[f], h = n[f], !r.hasOwnProperty(f) || p === h || void 0 === p && void 0 === h || Zc(e, t, f, p, r, h);
                    return;
                }
            } for (var v in n)
                p = n[v], n.hasOwnProperty(v) && null != p && !r.hasOwnProperty(v) && Xc(e, t, v, null, r, p); for (d in r)
                p = r[d], h = n[d], !r.hasOwnProperty(d) || p === h || null == p && null == h || Xc(e, t, d, p, r, h); }(r, e.type, n, t), r[Ne] = t;
        }
        catch (t) {
            sc(e, e.return, t);
        } } function pu(e) { return 5 === e.tag || 3 === e.tag || 26 === e.tag || 27 === e.tag && pf(e.type) || 4 === e.tag; } function hu(e) { e: for (;;) {
            for (; null === e.sibling;) {
                if (null === e.return || pu(e.return))
                    return null;
                e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                if (27 === e.tag && pf(e.type))
                    continue e;
                if (2 & e.flags)
                    continue e;
                if (null === e.child || 4 === e.tag)
                    continue e;
                e.child.return = e, e = e.child;
            }
            if (!(2 & e.flags))
                return e.stateNode;
        } } function mu(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? (9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).insertBefore(e, t) : ((t = 9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Yc));
        else if (4 !== r && (27 === r && pf(e.type) && (n = e.stateNode, t = null), null !== (e = e.child)))
            for (mu(e, t, n), e = e.sibling; null !== e;)
                mu(e, t, n), e = e.sibling; } function gu(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && (27 === r && pf(e.type) && (n = e.stateNode), null !== (e = e.child)))
            for (gu(e, t, n), e = e.sibling; null !== e;)
                gu(e, t, n), e = e.sibling; } function yu(e) { var t = e.stateNode, n = e.memoizedProps; try {
            for (var r = e.type, a = t.attributes; a.length;)
                t.removeAttributeNode(a[0]);
            Jc(t, r, n), t[Oe] = e, t[Ne] = n;
        }
        catch (t) {
            sc(e, e.return, t);
        } } var vu = !1, bu = !1, wu = !1, ku = "function" == typeof WeakSet ? WeakSet : Set, Su = null; function Eu(e, t, n) { var r = n.flags; switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Au(e, n), 4 & r && lu(5, n);
                break;
            case 1:
                if (Au(e, n), 4 & r)
                    if (e = n.stateNode, null === t)
                        try {
                            e.componentDidMount();
                        }
                        catch (e) {
                            sc(n, n.return, e);
                        }
                    else {
                        var a = mi(n.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
                        }
                        catch (e) {
                            sc(n, n.return, e);
                        }
                    }
                64 & r && iu(n), 512 & r && su(n, n.return);
                break;
            case 3:
                if (Au(e, n), 64 & r && null !== (e = n.updateQueue)) {
                    if (t = null, null !== n.child)
                        switch (n.child.tag) {
                            case 27:
                            case 5:
                            case 1: t = n.child.stateNode;
                        }
                    try {
                        fl(e, t);
                    }
                    catch (e) {
                        sc(n, n.return, e);
                    }
                }
                break;
            case 27: null === t && 4 & r && yu(n);
            case 26:
            case 5:
                Au(e, n), null === t && 4 & r && fu(n), 512 & r && su(n, n.return);
                break;
            case 12:
                Au(e, n);
                break;
            case 13:
                Au(e, n), 4 & r && Tu(e, n), 64 & r && null !== (e = n.memoizedState) && null !== (e = e.dehydrated) && function (e, t) { var n = e.ownerDocument; if ("$?" !== e.data || "complete" === n.readyState)
                    t();
                else {
                    var r = function () { t(), n.removeEventListener("DOMContentLoaded", r); };
                    n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
                } }(e, n = pc.bind(null, n));
                break;
            case 22:
                if (!(r = null !== n.memoizedState || vu)) {
                    t = null !== t && null !== t.memoizedState || bu, a = vu;
                    var l = bu;
                    vu = r, (bu = t) && !l ? Fu(e, n, !!(8772 & n.subtreeFlags)) : Au(e, n), vu = a, bu = l;
                }
                break;
            case 30: break;
            default: Au(e, n);
        } } function Cu(e) { var t = e.alternate; null !== t && (e.alternate = null, Cu(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && je(t), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; } var xu = null, Pu = !1; function _u(e, t, n) { for (n = n.child; null !== n;)
            zu(e, t, n), n = n.sibling; } function zu(e, t, n) { if (ce && "function" == typeof ce.onCommitFiberUnmount)
            try {
                ce.onCommitFiberUnmount(se, n);
            }
            catch (e) { } switch (n.tag) {
            case 26:
                bu || cu(n, t), _u(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
                break;
            case 27:
                bu || cu(n, t);
                var r = xu, a = Pu;
                pf(n.type) && (xu = n.stateNode, Pu = !1), _u(e, t, n), kf(n.stateNode), xu = r, Pu = a;
                break;
            case 5: bu || cu(n, t);
            case 6:
                if (r = xu, a = Pu, xu = null, _u(e, t, n), Pu = a, null !== (xu = r))
                    if (Pu)
                        try {
                            (9 === xu.nodeType ? xu.body : "HTML" === xu.nodeName ? xu.ownerDocument.body : xu).removeChild(n.stateNode);
                        }
                        catch (e) {
                            sc(n, t, e);
                        }
                    else
                        try {
                            xu.removeChild(n.stateNode);
                        }
                        catch (e) {
                            sc(n, t, e);
                        }
                break;
            case 18:
                null !== xu && (Pu ? (hf(9 === (e = xu).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e, n.stateNode), xd(e)) : hf(xu, n.stateNode));
                break;
            case 4:
                r = xu, a = Pu, xu = n.stateNode.containerInfo, Pu = !0, _u(e, t, n), xu = r, Pu = a;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                bu || ou(2, n, t), bu || ou(4, n, t), _u(e, t, n);
                break;
            case 1:
                bu || (cu(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount && uu(n, t, r)), _u(e, t, n);
                break;
            case 21:
                _u(e, t, n);
                break;
            case 22:
                bu = (r = bu) || null !== n.memoizedState, _u(e, t, n), bu = r;
                break;
            default: _u(e, t, n);
        } } function Tu(e, t) { if (null === t.memoizedState && null !== (e = t.alternate) && null !== (e = e.memoizedState) && null !== (e = e.dehydrated))
            try {
                xd(e);
            }
            catch (e) {
                sc(t, t.return, e);
            } } function Lu(e, t) { var n = function (e) { switch (e.tag) {
            case 13:
            case 19:
                var t = e.stateNode;
                return null === t && (t = e.stateNode = new ku), t;
            case 22: return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new ku), t;
            default: throw Error(o(435, e.tag));
        } }(e); t.forEach(function (t) { var r = hc.bind(null, e, t); n.has(t) || (n.add(t), t.then(r, r)); }); } function Ou(e, t) { var n = t.deletions; if (null !== n)
            for (var r = 0; r < n.length; r++) {
                var a = n[r], l = e, i = t, u = i;
                e: for (; null !== u;) {
                    switch (u.tag) {
                        case 27:
                            if (pf(u.type)) {
                                xu = u.stateNode, Pu = !1;
                                break e;
                            }
                            break;
                        case 5:
                            xu = u.stateNode, Pu = !1;
                            break e;
                        case 3:
                        case 4:
                            xu = u.stateNode.containerInfo, Pu = !0;
                            break e;
                    }
                    u = u.return;
                }
                if (null === xu)
                    throw Error(o(160));
                zu(l, i, a), xu = null, Pu = !1, null !== (l = a.alternate) && (l.return = null), a.return = null;
            } if (13878 & t.subtreeFlags)
            for (t = t.child; null !== t;)
                Ru(t, e), t = t.sibling; } var Nu = null; function Ru(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Ou(t, e), Du(e), 4 & r && (ou(3, e, e.return), lu(3, e), ou(5, e, e.return));
                break;
            case 1:
                Ou(t, e), Du(e), 512 & r && (bu || null === n || cu(n, n.return)), 64 & r && vu && null !== (e = e.updateQueue) && null !== (r = e.callbacks) && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = null === n ? r : n.concat(r));
                break;
            case 26:
                var a = Nu;
                if (Ou(t, e), Du(e), 512 & r && (bu || null === n || cu(n, n.return)), 4 & r) {
                    var l = null !== n ? n.memoizedState : null;
                    if (r = e.memoizedState, null === n)
                        if (null === r)
                            if (null === e.stateNode) {
                                e: {
                                    r = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
                                    t: switch (r) {
                                        case "title":
                                            (!(l = a.getElementsByTagName("title")[0]) || l[Fe] || l[Oe] || "http://www.w3.org/2000/svg" === l.namespaceURI || l.hasAttribute("itemprop")) && (l = a.createElement(r), a.head.insertBefore(l, a.querySelector("head > title"))), Jc(l, r, n), l[Oe] = e, We(l), r = l;
                                            break e;
                                        case "link":
                                            var i = jf("link", "href", a).get(r + (n.href || ""));
                                            if (i)
                                                for (var u = 0; u < i.length; u++)
                                                    if ((l = i[u]).getAttribute("href") === (null == n.href || "" === n.href ? null : n.href) && l.getAttribute("rel") === (null == n.rel ? null : n.rel) && l.getAttribute("title") === (null == n.title ? null : n.title) && l.getAttribute("crossorigin") === (null == n.crossOrigin ? null : n.crossOrigin)) {
                                                        i.splice(u, 1);
                                                        break t;
                                                    }
                                            Jc(l = a.createElement(r), r, n), a.head.appendChild(l);
                                            break;
                                        case "meta":
                                            if (i = jf("meta", "content", a).get(r + (n.content || "")))
                                                for (u = 0; u < i.length; u++)
                                                    if ((l = i[u]).getAttribute("content") === (null == n.content ? null : "" + n.content) && l.getAttribute("name") === (null == n.name ? null : n.name) && l.getAttribute("property") === (null == n.property ? null : n.property) && l.getAttribute("http-equiv") === (null == n.httpEquiv ? null : n.httpEquiv) && l.getAttribute("charset") === (null == n.charSet ? null : n.charSet)) {
                                                        i.splice(u, 1);
                                                        break t;
                                                    }
                                            Jc(l = a.createElement(r), r, n), a.head.appendChild(l);
                                            break;
                                        default: throw Error(o(468, r));
                                    }
                                    l[Oe] = e, We(l), r = l;
                                }
                                e.stateNode = r;
                            }
                            else
                                If(a, e.type, e.stateNode);
                        else
                            e.stateNode = Df(a, r, e.memoizedProps);
                    else
                        l !== r ? (null === l ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : l.count--, null === r ? If(a, e.type, e.stateNode) : Df(a, r, e.memoizedProps)) : null === r && null !== e.stateNode && du(e, e.memoizedProps, n.memoizedProps);
                }
                break;
            case 27:
                Ou(t, e), Du(e), 512 & r && (bu || null === n || cu(n, n.return)), null !== n && 4 & r && du(e, e.memoizedProps, n.memoizedProps);
                break;
            case 5:
                if (Ou(t, e), Du(e), 512 & r && (bu || null === n || cu(n, n.return)), 32 & e.flags) {
                    a = e.stateNode;
                    try {
                        kt(a, "");
                    }
                    catch (t) {
                        sc(e, e.return, t);
                    }
                }
                4 & r && null != e.stateNode && du(e, a = e.memoizedProps, null !== n ? n.memoizedProps : a), 1024 & r && (wu = !0);
                break;
            case 6:
                if (Ou(t, e), Du(e), 4 & r) {
                    if (null === e.stateNode)
                        throw Error(o(162));
                    r = e.memoizedProps, n = e.stateNode;
                    try {
                        n.nodeValue = r;
                    }
                    catch (t) {
                        sc(e, e.return, t);
                    }
                }
                break;
            case 3:
                if (Ff = null, a = Nu, Nu = Cf(t.containerInfo), Ou(t, e), Nu = a, Du(e), 4 & r && null !== n && n.memoizedState.isDehydrated)
                    try {
                        xd(t.containerInfo);
                    }
                    catch (t) {
                        sc(e, e.return, t);
                    }
                wu && (wu = !1, Mu(e));
                break;
            case 4:
                r = Nu, Nu = Cf(e.stateNode.containerInfo), Ou(t, e), Du(e), Nu = r;
                break;
            case 12:
            default:
                Ou(t, e), Du(e);
                break;
            case 13:
                Ou(t, e), Du(e), 8192 & e.child.flags && null !== e.memoizedState != (null !== n && null !== n.memoizedState) && (ws = ee()), 4 & r && null !== (r = e.updateQueue) && (e.updateQueue = null, Lu(e, r));
                break;
            case 22:
                a = null !== e.memoizedState;
                var s = null !== n && null !== n.memoizedState, c = vu, f = bu;
                if (vu = c || a, bu = f || s, Ou(t, e), bu = f, vu = c, Du(e), 8192 & r)
                    e: for (t = e.stateNode, t._visibility = a ? -2 & t._visibility : 1 | t._visibility, a && (null === n || s || vu || bu || Uu(e)), n = null, t = e;;) {
                        if (5 === t.tag || 26 === t.tag) {
                            if (null === n) {
                                s = n = t;
                                try {
                                    if (l = s.stateNode, a)
                                        "function" == typeof (i = l.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none";
                                    else {
                                        u = s.stateNode;
                                        var d = s.memoizedProps.style, p = null != d && d.hasOwnProperty("display") ? d.display : null;
                                        u.style.display = null == p || "boolean" == typeof p ? "" : ("" + p).trim();
                                    }
                                }
                                catch (e) {
                                    sc(s, s.return, e);
                                }
                            }
                        }
                        else if (6 === t.tag) {
                            if (null === n) {
                                s = t;
                                try {
                                    s.stateNode.nodeValue = a ? "" : s.memoizedProps;
                                }
                                catch (e) {
                                    sc(s, s.return, e);
                                }
                            }
                        }
                        else if ((22 !== t.tag && 23 !== t.tag || null === t.memoizedState || t === e) && null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue;
                        }
                        if (t === e)
                            break e;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e)
                                break e;
                            n === t && (n = null), t = t.return;
                        }
                        n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
                    }
                4 & r && null !== (r = e.updateQueue) && null !== (n = r.retryQueue) && (r.retryQueue = null, Lu(e, n));
                break;
            case 19: Ou(t, e), Du(e), 4 & r && null !== (r = e.updateQueue) && (e.updateQueue = null, Lu(e, r));
            case 30:
            case 21:
        } } function Du(e) { var t = e.flags; if (2 & t) {
            try {
                for (var n, r = e.return; null !== r;) {
                    if (pu(r)) {
                        n = r;
                        break;
                    }
                    r = r.return;
                }
                if (null == n)
                    throw Error(o(160));
                switch (n.tag) {
                    case 27:
                        var a = n.stateNode;
                        gu(e, hu(e), a);
                        break;
                    case 5:
                        var l = n.stateNode;
                        32 & n.flags && (kt(l, ""), n.flags &= -33), gu(e, hu(e), l);
                        break;
                    case 3:
                    case 4:
                        var i = n.stateNode.containerInfo;
                        mu(e, hu(e), i);
                        break;
                    default: throw Error(o(161));
                }
            }
            catch (t) {
                sc(e, e.return, t);
            }
            e.flags &= -3;
        } 4096 & t && (e.flags &= -4097); } function Mu(e) { if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e;) {
                var t = e;
                Mu(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), e = e.sibling;
            } } function Au(e, t) { if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t;)
                Eu(e, t.alternate, t), t = t.sibling; } function Uu(e) { for (e = e.child; null !== e;) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    ou(4, t, t.return), Uu(t);
                    break;
                case 1:
                    cu(t, t.return);
                    var n = t.stateNode;
                    "function" == typeof n.componentWillUnmount && uu(t, t.return, n), Uu(t);
                    break;
                case 27: kf(t.stateNode);
                case 26:
                case 5:
                    cu(t, t.return), Uu(t);
                    break;
                case 22:
                    null === t.memoizedState && Uu(t);
                    break;
                default: Uu(t);
            }
            e = e.sibling;
        } } function Fu(e, t, n) { for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t;) {
            var r = t.alternate, a = e, l = t, o = l.flags;
            switch (l.tag) {
                case 0:
                case 11:
                case 15:
                    Fu(a, l, n), lu(4, l);
                    break;
                case 1:
                    if (Fu(a, l, n), "function" == typeof (a = (r = l).stateNode).componentDidMount)
                        try {
                            a.componentDidMount();
                        }
                        catch (e) {
                            sc(r, r.return, e);
                        }
                    if (null !== (a = (r = l).updateQueue)) {
                        var i = r.stateNode;
                        try {
                            var u = a.shared.hiddenCallbacks;
                            if (null !== u)
                                for (a.shared.hiddenCallbacks = null, a = 0; a < u.length; a++)
                                    cl(u[a], i);
                        }
                        catch (e) {
                            sc(r, r.return, e);
                        }
                    }
                    n && 64 & o && iu(l), su(l, l.return);
                    break;
                case 27: yu(l);
                case 26:
                case 5:
                    Fu(a, l, n), n && null === r && 4 & o && fu(l), su(l, l.return);
                    break;
                case 12:
                    Fu(a, l, n);
                    break;
                case 13:
                    Fu(a, l, n), n && 4 & o && Tu(a, l);
                    break;
                case 22:
                    null === l.memoizedState && Fu(a, l, n), su(l, l.return);
                    break;
                case 30: break;
                default: Fu(a, l, n);
            }
            t = t.sibling;
        } } function ju(e, t) { var n = null; null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), e = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool), e !== n && (null != e && e.refCount++, null != n && Ra(n)); } function Iu(e, t) { e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ra(e)); } function Hu(e, t, n, r) { if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t;)
                Bu(e, t, n, r), t = t.sibling; } function Bu(e, t, n, r) { var a = t.flags; switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Hu(e, t, n, r), 2048 & a && lu(9, t);
                break;
            case 1:
            case 13:
            default:
                Hu(e, t, n, r);
                break;
            case 3:
                Hu(e, t, n, r), 2048 & a && (e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ra(e)));
                break;
            case 12:
                if (2048 & a) {
                    Hu(e, t, n, r), e = t.stateNode;
                    try {
                        var l = t.memoizedProps, o = l.id, i = l.onPostCommit;
                        "function" == typeof i && i(o, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0);
                    }
                    catch (e) {
                        sc(t, t.return, e);
                    }
                }
                else
                    Hu(e, t, n, r);
                break;
            case 23: break;
            case 22:
                l = t.stateNode, o = t.alternate, null !== t.memoizedState ? 2 & l._visibility ? Hu(e, t, n, r) : Wu(e, t) : 2 & l._visibility ? Hu(e, t, n, r) : (l._visibility |= 2, $u(e, t, n, r, !!(10256 & t.subtreeFlags))), 2048 & a && ju(o, t);
                break;
            case 24: Hu(e, t, n, r), 2048 & a && Iu(t.alternate, t);
        } } function $u(e, t, n, r, a) { for (a = a && !!(10256 & t.subtreeFlags), t = t.child; null !== t;) {
            var l = e, o = t, i = n, u = r, s = o.flags;
            switch (o.tag) {
                case 0:
                case 11:
                case 15:
                    $u(l, o, i, u, a), lu(8, o);
                    break;
                case 23: break;
                case 22:
                    var c = o.stateNode;
                    null !== o.memoizedState ? 2 & c._visibility ? $u(l, o, i, u, a) : Wu(l, o) : (c._visibility |= 2, $u(l, o, i, u, a)), a && 2048 & s && ju(o.alternate, o);
                    break;
                case 24:
                    $u(l, o, i, u, a), a && 2048 & s && Iu(o.alternate, o);
                    break;
                default: $u(l, o, i, u, a);
            }
            t = t.sibling;
        } } function Wu(e, t) { if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t;) {
                var n = e, r = t, a = r.flags;
                switch (r.tag) {
                    case 22:
                        Wu(n, r), 2048 & a && ju(r.alternate, r);
                        break;
                    case 24:
                        Wu(n, r), 2048 & a && Iu(r.alternate, r);
                        break;
                    default: Wu(n, r);
                }
                t = t.sibling;
            } } var Vu = 8192; function qu(e) { if (e.subtreeFlags & Vu)
            for (e = e.child; null !== e;)
                Qu(e), e = e.sibling; } function Qu(e) { switch (e.tag) {
            case 26:
                qu(e), e.flags & Vu && null !== e.memoizedState && function (e, t, n) { if (null === Bf)
                    throw Error(o(475)); var r = Bf; if (!("stylesheet" !== t.type || "string" == typeof n.media && !1 === matchMedia(n.media).matches || 4 & t.state.loading)) {
                    if (null === t.instance) {
                        var a = Tf(n.href), l = e.querySelector(Lf(a));
                        if (l)
                            return null !== (e = l._p) && "object" == typeof e && "function" == typeof e.then && (r.count++, r = Wf.bind(r), e.then(r, r)), t.state.loading |= 4, t.instance = l, void We(l);
                        l = e.ownerDocument || e, n = Of(n), (a = Sf.get(a)) && Af(n, a), We(l = l.createElement("link"));
                        var i = l;
                        i._p = new Promise(function (e, t) { i.onload = e, i.onerror = t; }), Jc(l, "link", n), t.instance = l;
                    }
                    null === r.stylesheets && (r.stylesheets = new Map), r.stylesheets.set(t, e), (e = t.state.preload) && !(3 & t.state.loading) && (r.count++, t = Wf.bind(r), e.addEventListener("load", t), e.addEventListener("error", t));
                } }(Nu, e.memoizedState, e.memoizedProps);
                break;
            case 5:
            default:
                qu(e);
                break;
            case 3:
            case 4:
                var t = Nu;
                Nu = Cf(e.stateNode.containerInfo), qu(e), Nu = t;
                break;
            case 22: null === e.memoizedState && (null !== (t = e.alternate) && null !== t.memoizedState ? (t = Vu, Vu = 16777216, qu(e), Vu = t) : qu(e));
        } } function Gu(e) { var t = e.alternate; if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
                t = e.sibling, e.sibling = null, e = t;
            } while (null !== e);
        } } function Ku(e) { var t = e.deletions; if (16 & e.flags) {
            if (null !== t)
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    Su = r, Zu(r, e);
                }
            Gu(e);
        } if (10256 & e.subtreeFlags)
            for (e = e.child; null !== e;)
                Yu(e), e = e.sibling; } function Yu(e) { switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Ku(e), 2048 & e.flags && ou(9, e, e.return);
                break;
            case 3:
            case 12:
            default:
                Ku(e);
                break;
            case 22:
                var t = e.stateNode;
                null !== e.memoizedState && 2 & t._visibility && (null === e.return || 13 !== e.return.tag) ? (t._visibility &= -3, Xu(e)) : Ku(e);
        } } function Xu(e) { var t = e.deletions; if (16 & e.flags) {
            if (null !== t)
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    Su = r, Zu(r, e);
                }
            Gu(e);
        } for (e = e.child; null !== e;) {
            switch ((t = e).tag) {
                case 0:
                case 11:
                case 15:
                    ou(8, t, t.return), Xu(t);
                    break;
                case 22:
                    2 & (n = t.stateNode)._visibility && (n._visibility &= -3, Xu(t));
                    break;
                default: Xu(t);
            }
            e = e.sibling;
        } } function Zu(e, t) { for (; null !== Su;) {
            var n = Su;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    ou(8, n, t);
                    break;
                case 23:
                case 22:
                    if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                        var r = n.memoizedState.cachePool.pool;
                        null != r && r.refCount++;
                    }
                    break;
                case 24: Ra(n.memoizedState.cache);
            }
            if (null !== (r = n.child))
                r.return = n, Su = r;
            else
                e: for (n = e; null !== Su;) {
                    var a = (r = Su).sibling, l = r.return;
                    if (Cu(r), r === n) {
                        Su = null;
                        break e;
                    }
                    if (null !== a) {
                        a.return = l, Su = a;
                        break e;
                    }
                    Su = l;
                }
        } } var Ju = { getCacheForType: function (e) { var t = xa(Oa), n = t.data.get(e); return void 0 === n && (n = e(), t.data.set(e, n)), n; } }, es = "function" == typeof WeakMap ? WeakMap : Map, ts = 0, ns = null, rs = null, as = 0, ls = 0, os = null, is = !1, us = !1, ss = !1, cs = 0, fs = 0, ds = 0, ps = 0, hs = 0, ms = 0, gs = 0, ys = null, vs = null, bs = !1, ws = 0, ks = 1 / 0, Ss = null, Es = null, Cs = 0, xs = null, Ps = null, _s = 0, zs = 0, Ts = null, Ls = null, Os = 0, Ns = null; function Rs() { return 2 & ts && 0 !== as ? as & -as : null !== R.T ? 0 !== Aa ? Aa : zc() : Te(); } function Ds() { 0 === ms && (ms = 536870912 & as && !aa ? 536870912 : ke()); var e = ri.current; return null !== e && (e.flags |= 32), ms; } function Ms(e, t, n) { (e !== ns || 2 !== ls && 9 !== ls) && null === e.cancelPendingCommit || (Bs(e, 0), js(e, as, ms, !1)), Ce(e, n), 2 & ts && e === ns || (e === ns && (!(2 & ts) && (ps |= n), 4 === fs && js(e, as, ms, !1)), kc(e)); } function As(e, t, n) { if (6 & ts)
            throw Error(o(327)); for (var r = !n && !(124 & t) && 0 === (t & e.expiredLanes) || be(e, t), a = r ? function (e, t) { var n = ts; ts |= 2; var r = Ws(), a = Vs(); ns !== e || as !== t ? (Ss = null, ks = ee() + 500, Bs(e, t)) : us = be(e, t); e: for (;;)
            try {
                if (0 !== ls && null !== rs) {
                    t = rs;
                    var l = os;
                    t: switch (ls) {
                        case 1:
                            ls = 0, os = null, Zs(e, t, l, 1);
                            break;
                        case 2:
                        case 9:
                            if (Ga(l)) {
                                ls = 0, os = null, Xs(t);
                                break;
                            }
                            t = function () { 2 !== ls && 9 !== ls || ns !== e || (ls = 7), kc(e); }, l.then(t, t);
                            break e;
                        case 3:
                            ls = 7;
                            break e;
                        case 4:
                            ls = 5;
                            break e;
                        case 7:
                            Ga(l) ? (ls = 0, os = null, Xs(t)) : (ls = 0, os = null, Zs(e, t, l, 7));
                            break;
                        case 5:
                            var i = null;
                            switch (rs.tag) {
                                case 26: i = rs.memoizedState;
                                case 5:
                                case 27:
                                    var u = rs;
                                    if (!i || Hf(i)) {
                                        ls = 0, os = null;
                                        var s = u.sibling;
                                        if (null !== s)
                                            rs = s;
                                        else {
                                            var c = u.return;
                                            null !== c ? (rs = c, Js(c)) : rs = null;
                                        }
                                        break t;
                                    }
                            }
                            ls = 0, os = null, Zs(e, t, l, 5);
                            break;
                        case 6:
                            ls = 0, os = null, Zs(e, t, l, 6);
                            break;
                        case 8:
                            Hs(), fs = 6;
                            break e;
                        default: throw Error(o(462));
                    }
                }
                Ks();
                break;
            }
            catch (t) {
                $s(e, t);
            } return ya = ga = null, R.H = r, R.A = a, ts = n, null !== rs ? 0 : (ns = null, as = 0, _r(), fs); }(e, t) : Qs(e, t, !0), l = r;;) {
            if (0 === a) {
                us && !r && js(e, t, 0, !1);
                break;
            }
            if (n = e.current.alternate, !l || Fs(n)) {
                if (2 === a) {
                    if (l = t, e.errorRecoveryDisabledLanes & l)
                        var i = 0;
                    else
                        i = 0 != (i = -536870913 & e.pendingLanes) ? i : 536870912 & i ? 536870912 : 0;
                    if (0 !== i) {
                        t = i;
                        e: {
                            var u = e;
                            a = ys;
                            var s = u.current.memoizedState.isDehydrated;
                            if (s && (Bs(u, i).flags |= 256), 2 !== (i = Qs(u, i, !1))) {
                                if (ss && !s) {
                                    u.errorRecoveryDisabledLanes |= l, ps |= l, a = 4;
                                    break e;
                                }
                                l = vs, vs = a, null !== l && (null === vs ? vs = l : vs.push.apply(vs, l));
                            }
                            a = i;
                        }
                        if (l = !1, 2 !== a)
                            continue;
                    }
                }
                if (1 === a) {
                    Bs(e, 0), js(e, t, 0, !0);
                    break;
                }
                e: {
                    switch (r = e, l = a) {
                        case 0:
                        case 1: throw Error(o(345));
                        case 4: if ((4194048 & t) !== t)
                            break;
                        case 6:
                            js(r, t, ms, !is);
                            break e;
                        case 2:
                            vs = null;
                            break;
                        case 3:
                        case 5: break;
                        default: throw Error(o(329));
                    }
                    if ((62914560 & t) === t && 10 < (a = ws + 300 - ee())) {
                        if (js(r, t, ms, !is), 0 !== ve(r, 0, !0))
                            break e;
                        r.timeoutHandle = uf(Us.bind(null, r, n, vs, Ss, bs, t, ms, ps, gs, is, l, 2, -0, 0), a);
                    }
                    else
                        Us(r, n, vs, Ss, bs, t, ms, ps, gs, is, l, 0, -0, 0);
                }
                break;
            }
            a = Qs(e, t, !1), l = !1;
        } kc(e); } function Us(e, t, n, r, a, l, i, u, s, c, f, d, p, h) { if (e.timeoutHandle = -1, (8192 & (d = t.subtreeFlags) || !(16785408 & ~d)) && (Bf = { stylesheets: null, count: 0, unsuspend: $f }, Qu(t), null !== (d = function () { if (null === Bf)
            throw Error(o(475)); var e = Bf; return e.stylesheets && 0 === e.count && qf(e, e.stylesheets), 0 < e.count ? function (t) { var n = setTimeout(function () { if (e.stylesheets && qf(e, e.stylesheets), e.unsuspend) {
            var t = e.unsuspend;
            e.unsuspend = null, t();
        } }, 6e4); return e.unsuspend = t, function () { e.unsuspend = null, clearTimeout(n); }; } : null; }())))
            return e.cancelPendingCommit = d(tc.bind(null, e, t, l, n, r, a, i, u, s, f, 1, p, h)), void js(e, l, i, !c); tc(e, t, l, n, r, a, i, u, s); } function Fs(e) { for (var t = e;;) {
            var n = t.tag;
            if ((0 === n || 11 === n || 15 === n) && 16384 & t.flags && null !== (n = t.updateQueue) && null !== (n = n.stores))
                for (var r = 0; r < n.length; r++) {
                    var a = n[r], l = a.getSnapshot;
                    a = a.value;
                    try {
                        if (!Gn(l(), a))
                            return !1;
                    }
                    catch (e) {
                        return !1;
                    }
                }
            if (n = t.child, 16384 & t.subtreeFlags && null !== n)
                n.return = t, t = n;
            else {
                if (t === e)
                    break;
                for (; null === t.sibling;) {
                    if (null === t.return || t.return === e)
                        return !0;
                    t = t.return;
                }
                t.sibling.return = t.return, t = t.sibling;
            }
        } return !0; } function js(e, t, n, r) { t &= ~hs, t &= ~ps, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes; for (var a = t; 0 < a;) {
            var l = 31 - de(a), o = 1 << l;
            r[l] = -1, a &= ~o;
        } 0 !== n && xe(e, n, t); } function Is() { return !!(6 & ts) || (Sc(0, !1), !1); } function Hs() { if (null !== rs) {
            if (0 === ls)
                var e = rs.return;
            else
                ya = ga = null, Al(e = rs), Go = null, Ko = 0, e = rs;
            for (; null !== e;)
                au(e.alternate, e), e = e.return;
            rs = null;
        } } function Bs(e, t) { var n = e.timeoutHandle; -1 !== n && (e.timeoutHandle = -1, sf(n)), null !== (n = e.cancelPendingCommit) && (e.cancelPendingCommit = null, n()), Hs(), ns = e, rs = n = Ur(e.current, null), as = t, ls = 0, os = null, is = !1, us = be(e, t), ss = !1, gs = ms = hs = ps = ds = fs = 0, vs = ys = null, bs = !1, 8 & t && (t |= 32 & t); var r = e.entangledLanes; if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r;) {
                var a = 31 - de(r), l = 1 << a;
                t |= e[a], r &= ~l;
            } return cs = t, _r(), n; } function $s(e, t) { vl = null, R.H = Wo, t === Wa || t === qa ? (t = Za(), ls = 3) : t === Va ? (t = Za(), ls = 4) : ls = t === xi ? 8 : null !== t && "object" == typeof t && "function" == typeof t.then ? 6 : 1, os = t, null === rs && (fs = 1, wi(e, Er(t, e.current))); } function Ws() { var e = R.H; return R.H = Wo, null === e ? Wo : e; } function Vs() { var e = R.A; return R.A = Ju, e; } function qs() { fs = 4, is || (4194048 & as) !== as && null !== ri.current || (us = !0), !(134217727 & ds) && !(134217727 & ps) || null === ns || js(ns, as, ms, !1); } function Qs(e, t, n) { var r = ts; ts |= 2; var a = Ws(), l = Vs(); ns === e && as === t || (Ss = null, Bs(e, t)), t = !1; var o = fs; e: for (;;)
            try {
                if (0 !== ls && null !== rs) {
                    var i = rs, u = os;
                    switch (ls) {
                        case 8:
                            Hs(), o = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            null === ri.current && (t = !0);
                            var s = ls;
                            if (ls = 0, os = null, Zs(e, i, u, s), n && us) {
                                o = 0;
                                break e;
                            }
                            break;
                        default: s = ls, ls = 0, os = null, Zs(e, i, u, s);
                    }
                }
                Gs(), o = fs;
                break;
            }
            catch (t) {
                $s(e, t);
            } return t && e.shellSuspendCounter++, ya = ga = null, ts = r, R.H = a, R.A = l, null === rs && (ns = null, as = 0, _r()), o; } function Gs() { for (; null !== rs;)
            Ys(rs); } function Ks() { for (; null !== rs && !Z();)
            Ys(rs); } function Ys(e) { var t = Yi(e.alternate, e, cs); e.memoizedProps = e.pendingProps, null === t ? Js(e) : rs = t; } function Xs(e) { var t = e, n = t.alternate; switch (t.tag) {
            case 15:
            case 0:
                t = Mi(n, t, t.pendingProps, t.type, void 0, as);
                break;
            case 11:
                t = Mi(n, t, t.pendingProps, t.type.render, t.ref, as);
                break;
            case 5: Al(t);
            default: au(n, t), t = Yi(n, t = rs = Fr(t, cs), cs);
        } e.memoizedProps = e.pendingProps, null === t ? Js(e) : rs = t; } function Zs(e, t, n, r) { ya = ga = null, Al(t), Go = null, Ko = 0; var a = t.return; try {
            if (function (e, t, n, r, a) { if (n.flags |= 32768, null !== r && "object" == typeof r && "function" == typeof r.then) {
                if (null !== (t = n.alternate) && Sa(t, n, a, !0), null !== (n = ri.current)) {
                    switch (n.tag) {
                        case 13: return null === ai ? qs() : null === n.alternate && 0 === fs && (fs = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Qa ? n.flags |= 16384 : (null === (t = n.updateQueue) ? n.updateQueue = new Set([r]) : t.add(r), cc(e, r, a)), !1;
                        case 22: return n.flags |= 65536, r === Qa ? n.flags |= 16384 : (null === (t = n.updateQueue) ? (t = { transitions: null, markerInstances: null, retryQueue: new Set([r]) }, n.updateQueue = t) : null === (n = t.retryQueue) ? t.retryQueue = new Set([r]) : n.add(r), cc(e, r, a)), !1;
                    }
                    throw Error(o(435, n.tag));
                }
                return cc(e, r, a), qs(), !1;
            } if (aa)
                return null !== (t = ri.current) ? (!(65536 & t.flags) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== ia && ha(Er(e = Error(o(422), { cause: r }), n))) : (r !== ia && ha(Er(t = Error(o(423), { cause: r }), n)), (e = e.current.alternate).flags |= 65536, a &= -a, e.lanes |= a, r = Er(r, n), ol(e, a = Si(e.stateNode, r, a)), 4 !== fs && (fs = 2)), !1; var l = Error(o(520), { cause: r }); if (l = Er(l, n), null === ys ? ys = [l] : ys.push(l), 4 !== fs && (fs = 2), null === t)
                return !0; r = Er(r, n), n = t; do {
                switch (n.tag) {
                    case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, ol(n, e = Si(n.stateNode, r, e)), !1;
                    case 1: if (t = n.type, l = n.stateNode, !(128 & n.flags || "function" != typeof t.getDerivedStateFromError && (null === l || "function" != typeof l.componentDidCatch || null !== Es && Es.has(l))))
                        return n.flags |= 65536, a &= -a, n.lanes |= a, Ci(a = Ei(a), e, n, r), ol(n, a), !1;
                }
                n = n.return;
            } while (null !== n); return !1; }(e, a, t, n, as))
                return fs = 1, wi(e, Er(n, e.current)), void (rs = null);
        }
        catch (t) {
            if (null !== a)
                throw rs = a, t;
            return fs = 1, wi(e, Er(n, e.current)), void (rs = null);
        } 32768 & t.flags ? (aa || 1 === r ? e = !0 : us || 536870912 & as ? e = !1 : (is = e = !0, (2 === r || 9 === r || 3 === r || 6 === r) && null !== (r = ri.current) && 13 === r.tag && (r.flags |= 16384)), ec(t, e)) : Js(t); } function Js(e) { var t = e; do {
            if (32768 & t.flags)
                return void ec(t, is);
            e = t.return;
            var n = nu(t.alternate, t, cs);
            if (null !== n)
                return void (rs = n);
            if (null !== (t = t.sibling))
                return void (rs = t);
            rs = t = e;
        } while (null !== t); 0 === fs && (fs = 5); } function ec(e, t) { do {
            var n = ru(e.alternate, e);
            if (null !== n)
                return n.flags &= 32767, void (rs = n);
            if (null !== (n = e.return) && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && null !== (e = e.sibling))
                return void (rs = e);
            rs = e = n;
        } while (null !== e); fs = 6, rs = null; } function tc(e, t, n, r, a, l, i, u, s) { e.cancelPendingCommit = null; do {
            oc();
        } while (0 !== Cs); if (6 & ts)
            throw Error(o(327)); if (null !== t) {
            if (t === e.current)
                throw Error(o(177));
            if (l = t.lanes | t.childLanes, function (e, t, n, r, a, l) { var o = e.pendingLanes; e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0; var i = e.entanglements, u = e.expirationTimes, s = e.hiddenUpdates; for (n = o & ~n; 0 < n;) {
                var c = 31 - de(n), f = 1 << c;
                i[c] = 0, u[c] = -1;
                var d = s[c];
                if (null !== d)
                    for (s[c] = null, c = 0; c < d.length; c++) {
                        var p = d[c];
                        null !== p && (p.lane &= -536870913);
                    }
                n &= ~f;
            } 0 !== r && xe(e, r, 0), 0 !== l && 0 === a && 0 !== e.tag && (e.suspendedLanes |= l & ~(o & ~t)); }(e, n, l |= Pr, i, u, s), e === ns && (rs = ns = null, as = 0), Ps = t, xs = e, _s = n, zs = l, Ts = a, Ls = r, 10256 & t.subtreeFlags || 10256 & t.flags ? (e.callbackNode = null, e.callbackPriority = 0, Y(ae, function () { return ic(), null; })) : (e.callbackNode = null, e.callbackPriority = 0), r = !!(13878 & t.flags), 13878 & t.subtreeFlags || r) {
                r = R.T, R.T = null, a = D.p, D.p = 2, i = ts, ts |= 4;
                try {
                    !function (e, t) { if (e = e.containerInfo, ef = ed, er(e = Jn(e))) {
                        if ("selectionStart" in e)
                            var n = { start: e.selectionStart, end: e.selectionEnd };
                        else
                            e: {
                                var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                if (r && 0 !== r.rangeCount) {
                                    n = r.anchorNode;
                                    var a = r.anchorOffset, l = r.focusNode;
                                    r = r.focusOffset;
                                    try {
                                        n.nodeType, l.nodeType;
                                    }
                                    catch (e) {
                                        n = null;
                                        break e;
                                    }
                                    var i = 0, u = -1, s = -1, c = 0, f = 0, d = e, p = null;
                                    t: for (;;) {
                                        for (var h; d !== n || 0 !== a && 3 !== d.nodeType || (u = i + a), d !== l || 0 !== r && 3 !== d.nodeType || (s = i + r), 3 === d.nodeType && (i += d.nodeValue.length), null !== (h = d.firstChild);)
                                            p = d, d = h;
                                        for (;;) {
                                            if (d === e)
                                                break t;
                                            if (p === n && ++c === a && (u = i), p === l && ++f === r && (s = i), null !== (h = d.nextSibling))
                                                break;
                                            p = (d = p).parentNode;
                                        }
                                        d = h;
                                    }
                                    n = -1 === u || -1 === s ? null : { start: u, end: s };
                                }
                                else
                                    n = null;
                            }
                        n = n || { start: 0, end: 0 };
                    }
                    else
                        n = null; for (tf = { focusedElem: e, selectionRange: n }, ed = !1, Su = t; null !== Su;)
                        if (e = (t = Su).child, 1024 & t.subtreeFlags && null !== e)
                            e.return = t, Su = e;
                        else
                            for (; null !== Su;) {
                                switch (l = (t = Su).alternate, e = t.flags, t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                    case 5:
                                    case 26:
                                    case 27:
                                    case 6:
                                    case 4:
                                    case 17: break;
                                    case 1:
                                        if (1024 & e && null !== l) {
                                            e = void 0, n = t, a = l.memoizedProps, l = l.memoizedState, r = n.stateNode;
                                            try {
                                                var m = mi(n.type, a, (n.elementType, n.type));
                                                e = r.getSnapshotBeforeUpdate(m, l), r.__reactInternalSnapshotBeforeUpdate = e;
                                            }
                                            catch (e) {
                                                sc(n, n.return, e);
                                            }
                                        }
                                        break;
                                    case 3:
                                        if (1024 & e)
                                            if (9 === (n = (e = t.stateNode.containerInfo).nodeType))
                                                mf(e);
                                            else if (1 === n)
                                                switch (e.nodeName) {
                                                    case "HEAD":
                                                    case "HTML":
                                                    case "BODY":
                                                        mf(e);
                                                        break;
                                                    default: e.textContent = "";
                                                }
                                        break;
                                    default: if (1024 & e)
                                        throw Error(o(163));
                                }
                                if (null !== (e = t.sibling)) {
                                    e.return = t.return, Su = e;
                                    break;
                                }
                                Su = t.return;
                            } }(e, t);
                }
                finally {
                    ts = i, D.p = a, R.T = r;
                }
            }
            Cs = 1, nc(), rc(), ac();
        } } function nc() { if (1 === Cs) {
            Cs = 0;
            var e = xs, t = Ps, n = !!(13878 & t.flags);
            if (13878 & t.subtreeFlags || n) {
                n = R.T, R.T = null;
                var r = D.p;
                D.p = 2;
                var a = ts;
                ts |= 4;
                try {
                    Ru(t, e);
                    var l = tf, o = Jn(e.containerInfo), i = l.focusedElem, u = l.selectionRange;
                    if (o !== i && i && i.ownerDocument && Zn(i.ownerDocument.documentElement, i)) {
                        if (null !== u && er(i)) {
                            var s = u.start, c = u.end;
                            if (void 0 === c && (c = s), "selectionStart" in i)
                                i.selectionStart = s, i.selectionEnd = Math.min(c, i.value.length);
                            else {
                                var f = i.ownerDocument || document, d = f && f.defaultView || window;
                                if (d.getSelection) {
                                    var p = d.getSelection(), h = i.textContent.length, m = Math.min(u.start, h), g = void 0 === u.end ? m : Math.min(u.end, h);
                                    !p.extend && m > g && (o = g, g = m, m = o);
                                    var y = Xn(i, m), v = Xn(i, g);
                                    if (y && v && (1 !== p.rangeCount || p.anchorNode !== y.node || p.anchorOffset !== y.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
                                        var b = f.createRange();
                                        b.setStart(y.node, y.offset), p.removeAllRanges(), m > g ? (p.addRange(b), p.extend(v.node, v.offset)) : (b.setEnd(v.node, v.offset), p.addRange(b));
                                    }
                                }
                            }
                        }
                        for (f = [], p = i; p = p.parentNode;)
                            1 === p.nodeType && f.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
                        for ("function" == typeof i.focus && i.focus(), i = 0; i < f.length; i++) {
                            var w = f[i];
                            w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
                        }
                    }
                    ed = !!ef, tf = ef = null;
                }
                finally {
                    ts = a, D.p = r, R.T = n;
                }
            }
            e.current = t, Cs = 2;
        } } function rc() { if (2 === Cs) {
            Cs = 0;
            var e = xs, t = Ps, n = !!(8772 & t.flags);
            if (8772 & t.subtreeFlags || n) {
                n = R.T, R.T = null;
                var r = D.p;
                D.p = 2;
                var a = ts;
                ts |= 4;
                try {
                    Eu(e, t.alternate, t);
                }
                finally {
                    ts = a, D.p = r, R.T = n;
                }
            }
            Cs = 3;
        } } function ac() { if (4 === Cs || 3 === Cs) {
            Cs = 0, J();
            var e = xs, t = Ps, n = _s, r = Ls;
            10256 & t.subtreeFlags || 10256 & t.flags ? Cs = 5 : (Cs = 0, Ps = xs = null, lc(e, e.pendingLanes));
            var a = e.pendingLanes;
            if (0 === a && (Es = null), ze(n), t = t.stateNode, ce && "function" == typeof ce.onCommitFiberRoot)
                try {
                    ce.onCommitFiberRoot(se, t, void 0, !(128 & ~t.current.flags));
                }
                catch (e) { }
            if (null !== r) {
                t = R.T, a = D.p, D.p = 2, R.T = null;
                try {
                    for (var l = e.onRecoverableError, o = 0; o < r.length; o++) {
                        var i = r[o];
                        l(i.value, { componentStack: i.stack });
                    }
                }
                finally {
                    R.T = t, D.p = a;
                }
            }
            3 & _s && oc(), kc(e), a = e.pendingLanes, 4194090 & n && 42 & a ? e === Ns ? Os++ : (Os = 0, Ns = e) : Os = 0, Sc(0, !1);
        } } function lc(e, t) { 0 === (e.pooledCacheLanes &= t) && null != (t = e.pooledCache) && (e.pooledCache = null, Ra(t)); } function oc(e) { return nc(), rc(), ac(), ic(); } function ic() { if (5 !== Cs)
            return !1; var e = xs, t = zs; zs = 0; var n = ze(_s), r = R.T, a = D.p; try {
            D.p = 32 > n ? 32 : n, R.T = null, n = Ts, Ts = null;
            var l = xs, i = _s;
            if (Cs = 0, Ps = xs = null, _s = 0, 6 & ts)
                throw Error(o(331));
            var u = ts;
            if (ts |= 4, Yu(l.current), Bu(l, l.current, i, n), ts = u, Sc(0, !1), ce && "function" == typeof ce.onPostCommitFiberRoot)
                try {
                    ce.onPostCommitFiberRoot(se, l);
                }
                catch (e) { }
            return !0;
        }
        finally {
            D.p = a, R.T = r, lc(e, t);
        } } function uc(e, t, n) { t = Er(n, t), null !== (e = al(e, t = Si(e.stateNode, t, 2), 2)) && (Ce(e, 2), kc(e)); } function sc(e, t, n) { if (3 === e.tag)
            uc(e, e, n);
        else
            for (; null !== t;) {
                if (3 === t.tag) {
                    uc(t, e, n);
                    break;
                }
                if (1 === t.tag) {
                    var r = t.stateNode;
                    if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Es || !Es.has(r))) {
                        e = Er(n, e), null !== (r = al(t, n = Ei(2), 2)) && (Ci(n, r, t, e), Ce(r, 2), kc(r));
                        break;
                    }
                }
                t = t.return;
            } } function cc(e, t, n) { var r = e.pingCache; if (null === r) {
            r = e.pingCache = new es;
            var a = new Set;
            r.set(t, a);
        }
        else
            void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a)); a.has(n) || (ss = !0, a.add(n), e = fc.bind(null, e, t, n), t.then(e, e)); } function fc(e, t, n) { var r = e.pingCache; null !== r && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, ns === e && (as & n) === n && (4 === fs || 3 === fs && (62914560 & as) === as && 300 > ee() - ws ? !(2 & ts) && Bs(e, 0) : hs |= n, gs === as && (gs = 0)), kc(e); } function dc(e, t) { 0 === t && (t = Se()), null !== (e = Lr(e, t)) && (Ce(e, t), kc(e)); } function pc(e) { var t = e.memoizedState, n = 0; null !== t && (n = t.retryLane), dc(e, n); } function hc(e, t) { var n = 0; switch (e.tag) {
            case 13:
                var r = e.stateNode, a = e.memoizedState;
                null !== a && (n = a.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            case 22:
                r = e.stateNode._retryCache;
                break;
            default: throw Error(o(314));
        } null !== r && r.delete(t), dc(e, n); } var mc = null, gc = null, yc = !1, vc = !1, bc = !1, wc = 0; function kc(e) { e !== gc && null === e.next && (null === gc ? mc = gc = e : gc = gc.next = e), vc = !0, yc || (yc = !0, ff(function () { 6 & ts ? Y(ne, Ec) : Cc(); })); } function Sc(e, t) { if (!bc && vc) {
            bc = !0;
            do {
                for (var n = !1, r = mc; null !== r;) {
                    if (!t)
                        if (0 !== e) {
                            var a = r.pendingLanes;
                            if (0 === a)
                                var l = 0;
                            else {
                                var o = r.suspendedLanes, i = r.pingedLanes;
                                l = (1 << 31 - de(42 | e) + 1) - 1, l = 201326741 & (l &= a & ~(o & ~i)) ? 201326741 & l | 1 : l ? 2 | l : 0;
                            }
                            0 !== l && (n = !0, _c(r, l));
                        }
                        else
                            l = as, !(3 & (l = ve(r, r === ns ? l : 0, null !== r.cancelPendingCommit || -1 !== r.timeoutHandle))) || be(r, l) || (n = !0, _c(r, l));
                    r = r.next;
                }
            } while (n);
            bc = !1;
        } } function Ec() { Cc(); } function Cc() { vc = yc = !1; var e, t = 0; 0 !== wc && (((e = window.event) && "popstate" === e.type ? e !== of && (of = e, !0) : (of = null, !1)) && (t = wc), wc = 0); for (var n = ee(), r = null, a = mc; null !== a;) {
            var l = a.next, o = xc(a, n);
            0 === o ? (a.next = null, null === r ? mc = l : r.next = l, null === l && (gc = r)) : (r = a, (0 !== t || 3 & o) && (vc = !0)), a = l;
        } Sc(t, !1); } function xc(e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = -62914561 & e.pendingLanes; 0 < l;) {
            var o = 31 - de(l), i = 1 << o, u = a[o];
            -1 === u ? 0 !== (i & n) && 0 === (i & r) || (a[o] = we(i, t)) : u <= t && (e.expiredLanes |= i), l &= ~i;
        } if (n = as, n = ve(e, e === (t = ns) ? n : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle), r = e.callbackNode, 0 === n || e === t && (2 === ls || 9 === ls) || null !== e.cancelPendingCommit)
            return null !== r && null !== r && X(r), e.callbackNode = null, e.callbackPriority = 0; if (!(3 & n) || be(e, n)) {
            if ((t = n & -n) === e.callbackPriority)
                return t;
            switch (null !== r && X(r), ze(n)) {
                case 2:
                case 8:
                    n = re;
                    break;
                case 32:
                default:
                    n = ae;
                    break;
                case 268435456: n = oe;
            }
            return r = Pc.bind(null, e), n = Y(n, r), e.callbackPriority = t, e.callbackNode = n, t;
        } return null !== r && null !== r && X(r), e.callbackPriority = 2, e.callbackNode = null, 2; } function Pc(e, t) { if (0 !== Cs && 5 !== Cs)
            return e.callbackNode = null, e.callbackPriority = 0, null; var n = e.callbackNode; if (oc() && e.callbackNode !== n)
            return null; var r = as; return 0 === (r = ve(e, e === ns ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)) ? null : (As(e, r, t), xc(e, ee()), null != e.callbackNode && e.callbackNode === n ? Pc.bind(null, e) : null); } function _c(e, t) { if (oc())
            return null; As(e, t, !0); } function zc() { return 0 === wc && (wc = ke()), wc; } function Tc(e) { return null == e || "symbol" == typeof e || "boolean" == typeof e ? null : "function" == typeof e ? e : zt("" + e); } function Lc(e, t) { var n = t.ownerDocument.createElement("input"); return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e; } for (var Oc = 0; Oc < wr.length; Oc++) {
            var Nc = wr[Oc];
            kr(Nc.toLowerCase(), "on" + (Nc[0].toUpperCase() + Nc.slice(1)));
        } kr(dr, "onAnimationEnd"), kr(pr, "onAnimationIteration"), kr(hr, "onAnimationStart"), kr("dblclick", "onDoubleClick"), kr("focusin", "onFocus"), kr("focusout", "onBlur"), kr(mr, "onTransitionRun"), kr(gr, "onTransitionStart"), kr(yr, "onTransitionCancel"), kr(vr, "onTransitionEnd"), Ge("onMouseEnter", ["mouseout", "mouseover"]), Ge("onMouseLeave", ["mouseout", "mouseover"]), Ge("onPointerEnter", ["pointerout", "pointerover"]), Ge("onPointerLeave", ["pointerout", "pointerover"]), Qe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Qe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Qe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Qe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Qe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Qe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var Rc = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Dc = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rc)); function Mc(e, t) { t = !!(4 & t); for (var n = 0; n < e.length; n++) {
            var r = e[n], a = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t)
                    for (var o = r.length - 1; 0 <= o; o--) {
                        var i = r[o], u = i.instance, s = i.currentTarget;
                        if (i = i.listener, u !== l && a.isPropagationStopped())
                            break e;
                        l = i, a.currentTarget = s;
                        try {
                            l(a);
                        }
                        catch (e) {
                            gi(e);
                        }
                        a.currentTarget = null, l = u;
                    }
                else
                    for (o = 0; o < r.length; o++) {
                        if (u = (i = r[o]).instance, s = i.currentTarget, i = i.listener, u !== l && a.isPropagationStopped())
                            break e;
                        l = i, a.currentTarget = s;
                        try {
                            l(a);
                        }
                        catch (e) {
                            gi(e);
                        }
                        a.currentTarget = null, l = u;
                    }
            }
        } } function Ac(e, t) { var n = t[De]; void 0 === n && (n = t[De] = new Set); var r = e + "__bubble"; n.has(r) || (Ic(t, e, 2, !1), n.add(r)); } function Uc(e, t, n) { var r = 0; t && (r |= 4), Ic(n, e, r, t); } var Fc = "_reactListening" + Math.random().toString(36).slice(2); function jc(e) { if (!e[Fc]) {
            e[Fc] = !0, Ve.forEach(function (t) { "selectionchange" !== t && (Dc.has(t) || Uc(t, !1, e), Uc(t, !0, e)); });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Fc] || (t[Fc] = !0, Uc("selectionchange", !1, t));
        } } function Ic(e, t, n, r) { switch (id(t)) {
            case 2:
                var a = td;
                break;
            case 8:
                a = nd;
                break;
            default: a = rd;
        } n = a.bind(null, t, n, e), a = void 0, !Ft || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1); } function Hc(e, t, n, r, a) { var l = r; if (!(1 & t || 2 & t || null === r))
            e: for (;;) {
                if (null === r)
                    return;
                var o = r.tag;
                if (3 === o || 4 === o) {
                    var u = r.stateNode.containerInfo;
                    if (u === a)
                        break;
                    if (4 === o)
                        for (o = r.return; null !== o;) {
                            var s = o.tag;
                            if ((3 === s || 4 === s) && o.stateNode.containerInfo === a)
                                return;
                            o = o.return;
                        }
                    for (; null !== u;) {
                        if (null === (o = Ie(u)))
                            return;
                        if (5 === (s = o.tag) || 6 === s || 26 === s || 27 === s) {
                            r = l = o;
                            continue e;
                        }
                        u = u.parentNode;
                    }
                }
                r = r.return;
            } Mt(function () { var r = l, a = Lt(n), o = []; e: {
            var u = br.get(e);
            if (void 0 !== u) {
                var s = Zt, c = e;
                switch (e) {
                    case "keypress": if (0 === Wt(n))
                        break e;
                    case "keydown":
                    case "keyup":
                        s = hn;
                        break;
                    case "focusin":
                        c = "focus", s = an;
                        break;
                    case "focusout":
                        c = "blur", s = an;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        s = an;
                        break;
                    case "click": if (2 === n.button)
                        break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        s = nn;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        s = rn;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        s = gn;
                        break;
                    case dr:
                    case pr:
                    case hr:
                        s = ln;
                        break;
                    case vr:
                        s = yn;
                        break;
                    case "scroll":
                    case "scrollend":
                        s = en;
                        break;
                    case "wheel":
                        s = vn;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        s = on;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        s = mn;
                        break;
                    case "toggle":
                    case "beforetoggle": s = bn;
                }
                var f = !!(4 & t), d = !f && ("scroll" === e || "scrollend" === e), p = f ? null !== u ? u + "Capture" : null : u;
                f = [];
                for (var h, m = r; null !== m;) {
                    var g = m;
                    if (h = g.stateNode, 5 !== (g = g.tag) && 26 !== g && 27 !== g || null === h || null === p || null != (g = At(m, p)) && f.push(Bc(m, g, h)), d)
                        break;
                    m = m.return;
                }
                0 < f.length && (u = new s(u, c, null, n, a), o.push({ event: u, listeners: f }));
            }
        } if (!(7 & t)) {
            if (s = "mouseout" === e || "pointerout" === e, (!(u = "mouseover" === e || "pointerover" === e) || n === Tt || !(c = n.relatedTarget || n.fromElement) || !Ie(c) && !c[Re]) && (s || u) && (u = a.window === a ? a : (u = a.ownerDocument) ? u.defaultView || u.parentWindow : window, s ? (s = r, null !== (c = (c = n.relatedTarget || n.toElement) ? Ie(c) : null) && (d = i(c), f = c.tag, c !== d || 5 !== f && 27 !== f && 6 !== f) && (c = null)) : (s = null, c = r), s !== c)) {
                if (f = nn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (f = mn, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), d = null == s ? u : Be(s), h = null == c ? u : Be(c), (u = new f(g, m + "leave", s, n, a)).target = d, u.relatedTarget = h, g = null, Ie(a) === r && ((f = new f(p, m + "enter", c, n, a)).target = h, f.relatedTarget = d, g = f), d = g, s && c)
                    e: {
                        for (p = c, m = 0, h = f = s; h; h = Wc(h))
                            m++;
                        for (h = 0, g = p; g; g = Wc(g))
                            h++;
                        for (; 0 < m - h;)
                            f = Wc(f), m--;
                        for (; 0 < h - m;)
                            p = Wc(p), h--;
                        for (; m--;) {
                            if (f === p || null !== p && f === p.alternate)
                                break e;
                            f = Wc(f), p = Wc(p);
                        }
                        f = null;
                    }
                else
                    f = null;
                null !== s && Vc(o, u, s, f, !1), null !== c && null !== d && Vc(o, d, c, f, !0);
            }
            if ("select" === (s = (u = r ? Be(r) : window).nodeName && u.nodeName.toLowerCase()) || "input" === s && "file" === u.type)
                var y = Un;
            else if (On(u))
                if (Fn)
                    y = Qn;
                else {
                    y = Vn;
                    var v = Wn;
                }
            else
                !(s = u.nodeName) || "input" !== s.toLowerCase() || "checkbox" !== u.type && "radio" !== u.type ? r && xt(r.elementType) && (y = Un) : y = qn;
            switch (y && (y = y(e, r)) ? Nn(o, y, n, a) : (v && v(e, u, r), "focusout" === e && r && "number" === u.type && null != r.memoizedProps.value && yt(u, "number", u.value)), v = r ? Be(r) : window, e) {
                case "focusin":
                    (On(v) || "true" === v.contentEditable) && (nr = v, rr = r, ar = null);
                    break;
                case "focusout":
                    ar = rr = nr = null;
                    break;
                case "mousedown":
                    lr = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    lr = !1, or(o, n, a);
                    break;
                case "selectionchange": if (tr)
                    break;
                case "keydown":
                case "keyup": or(o, n, a);
            }
            var b;
            if (kn)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var w = "onCompositionStart";
                            break e;
                        case "compositionend":
                            w = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            w = "onCompositionUpdate";
                            break e;
                    }
                    w = void 0;
                }
            else
                Tn ? _n(e, n) && (w = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (w = "onCompositionStart");
            w && (Cn && "ko" !== n.locale && (Tn || "onCompositionStart" !== w ? "onCompositionEnd" === w && Tn && (b = $t()) : (Ht = "value" in (It = a) ? It.value : It.textContent, Tn = !0)), 0 < (v = $c(r, w)).length && (w = new un(w, e, null, n, a), o.push({ event: w, listeners: v }), (b || null !== (b = zn(n))) && (w.data = b))), (b = En ? function (e, t) { switch (e) {
                case "compositionend": return zn(t);
                case "keypress": return 32 !== t.which ? null : (Pn = !0, xn);
                case "textInput": return (e = t.data) === xn && Pn ? null : e;
                default: return null;
            } }(e, n) : function (e, t) { if (Tn)
                return "compositionend" === e || !kn && _n(e, t) ? (e = $t(), Bt = Ht = It = null, Tn = !1, e) : null; switch (e) {
                case "paste":
                default: return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length)
                            return t.char;
                        if (t.which)
                            return String.fromCharCode(t.which);
                    }
                    return null;
                case "compositionend": return Cn && "ko" !== t.locale ? null : t.data;
            } }(e, n)) && 0 < (w = $c(r, "onBeforeInput")).length && (v = new un("onBeforeInput", "beforeinput", null, n, a), o.push({ event: v, listeners: w }), v.data = b), function (e, t, n, r, a) { if ("submit" === t && n && n.stateNode === a) {
                var l = Tc((a[Ne] || null).action), o = r.submitter;
                o && null !== (t = (t = o[Ne] || null) ? Tc(t.formAction) : o.getAttribute("formAction")) && (l = t, o = null);
                var i = new Zt("action", "action", null, r, a);
                e.push({ event: i, listeners: [{ instance: null, listener: function () { if (r.defaultPrevented) {
                                if (0 !== wc) {
                                    var e = o ? Lc(a, o) : new FormData(a);
                                    Lo(n, { pending: !0, data: e, method: a.method, action: l }, null, e);
                                }
                            }
                            else
                                "function" == typeof l && (i.preventDefault(), e = o ? Lc(a, o) : new FormData(a), Lo(n, { pending: !0, data: e, method: a.method, action: l }, l, e)); }, currentTarget: a }] });
            } }(o, e, r, n, a);
        } Mc(o, t); }); } function Bc(e, t, n) { return { instance: e, listener: t, currentTarget: n }; } function $c(e, t) { for (var n = t + "Capture", r = []; null !== e;) {
            var a = e, l = a.stateNode;
            if (5 !== (a = a.tag) && 26 !== a && 27 !== a || null === l || (null != (a = At(e, n)) && r.unshift(Bc(e, a, l)), null != (a = At(e, t)) && r.push(Bc(e, a, l))), 3 === e.tag)
                return r;
            e = e.return;
        } return []; } function Wc(e) { if (null === e)
            return null; do {
            e = e.return;
        } while (e && 5 !== e.tag && 27 !== e.tag); return e || null; } function Vc(e, t, n, r, a) { for (var l = t._reactName, o = []; null !== n && n !== r;) {
            var i = n, u = i.alternate, s = i.stateNode;
            if (i = i.tag, null !== u && u === r)
                break;
            5 !== i && 26 !== i && 27 !== i || null === s || (u = s, a ? null != (s = At(n, l)) && o.unshift(Bc(n, s, u)) : a || null != (s = At(n, l)) && o.push(Bc(n, s, u))), n = n.return;
        } 0 !== o.length && e.push({ event: t, listeners: o }); } var qc = /\r\n?/g, Qc = /\u0000|\uFFFD/g; function Gc(e) { return ("string" == typeof e ? e : "" + e).replace(qc, "\n").replace(Qc, ""); } function Kc(e, t) { return t = Gc(t), Gc(e) === t; } function Yc() { } function Xc(e, t, n, r, a, l) { switch (n) {
            case "children":
                "string" == typeof r ? "body" === t || "textarea" === t && "" === r || kt(e, r) : ("number" == typeof r || "bigint" == typeof r) && "body" !== t && kt(e, "" + r);
                break;
            case "className":
                tt(e, "class", r);
                break;
            case "tabIndex":
                tt(e, "tabindex", r);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                tt(e, n, r);
                break;
            case "style":
                Ct(e, r, l);
                break;
            case "data": if ("object" !== t) {
                tt(e, "data", r);
                break;
            }
            case "src":
            case "href":
                if ("" === r && ("a" !== t || "href" !== n)) {
                    e.removeAttribute(n);
                    break;
                }
                if (null == r || "function" == typeof r || "symbol" == typeof r || "boolean" == typeof r) {
                    e.removeAttribute(n);
                    break;
                }
                r = zt("" + r), e.setAttribute(n, r);
                break;
            case "action":
            case "formAction":
                if ("function" == typeof r) {
                    e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break;
                }
                if ("function" == typeof l && ("formAction" === n ? ("input" !== t && Xc(e, t, "name", a.name, a, null), Xc(e, t, "formEncType", a.formEncType, a, null), Xc(e, t, "formMethod", a.formMethod, a, null), Xc(e, t, "formTarget", a.formTarget, a, null)) : (Xc(e, t, "encType", a.encType, a, null), Xc(e, t, "method", a.method, a, null), Xc(e, t, "target", a.target, a, null))), null == r || "symbol" == typeof r || "boolean" == typeof r) {
                    e.removeAttribute(n);
                    break;
                }
                r = zt("" + r), e.setAttribute(n, r);
                break;
            case "onClick":
                null != r && (e.onclick = Yc);
                break;
            case "onScroll":
                null != r && Ac("scroll", e);
                break;
            case "onScrollEnd":
                null != r && Ac("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (null != r) {
                    if ("object" != typeof r || !("__html" in r))
                        throw Error(o(61));
                    if (null != (n = r.__html)) {
                        if (null != a.children)
                            throw Error(o(60));
                        e.innerHTML = n;
                    }
                }
                break;
            case "multiple":
                e.multiple = r && "function" != typeof r && "symbol" != typeof r;
                break;
            case "muted":
                e.muted = r && "function" != typeof r && "symbol" != typeof r;
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus": break;
            case "xlinkHref":
                if (null == r || "function" == typeof r || "boolean" == typeof r || "symbol" == typeof r) {
                    e.removeAttribute("xlink:href");
                    break;
                }
                n = zt("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                null != r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(n, "") : e.removeAttribute(n);
                break;
            case "capture":
            case "download":
                !0 === r ? e.setAttribute(n, "") : !1 !== r && null != r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(n, r) : e.removeAttribute(n);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                null != r && "function" != typeof r && "symbol" != typeof r && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
                break;
            case "rowSpan":
            case "start":
                null == r || "function" == typeof r || "symbol" == typeof r || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
                break;
            case "popover":
                Ac("beforetoggle", e), Ac("toggle", e), et(e, "popover", r);
                break;
            case "xlinkActuate":
                nt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
                break;
            case "xlinkArcrole":
                nt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
                break;
            case "xlinkRole":
                nt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
                break;
            case "xlinkShow":
                nt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
                break;
            case "xlinkTitle":
                nt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
                break;
            case "xlinkType":
                nt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
                break;
            case "xmlBase":
                nt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
                break;
            case "xmlLang":
                nt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
                break;
            case "xmlSpace":
                nt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
                break;
            case "is":
                et(e, "is", r);
                break;
            case "innerText":
            case "textContent": break;
            default: (!(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && et(e, n = Pt.get(n) || n, r);
        } } function Zc(e, t, n, r, a, l) { switch (n) {
            case "style":
                Ct(e, r, l);
                break;
            case "dangerouslySetInnerHTML":
                if (null != r) {
                    if ("object" != typeof r || !("__html" in r))
                        throw Error(o(61));
                    if (null != (n = r.__html)) {
                        if (null != a.children)
                            throw Error(o(60));
                        e.innerHTML = n;
                    }
                }
                break;
            case "children":
                "string" == typeof r ? kt(e, r) : ("number" == typeof r || "bigint" == typeof r) && kt(e, "" + r);
                break;
            case "onScroll":
                null != r && Ac("scroll", e);
                break;
            case "onScrollEnd":
                null != r && Ac("scrollend", e);
                break;
            case "onClick":
                null != r && (e.onclick = Yc);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent": break;
            default: qe.hasOwnProperty(n) || ("o" !== n[0] || "n" !== n[1] || (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), "function" == typeof (l = null != (l = e[Ne] || null) ? l[n] : null) && e.removeEventListener(t, l, a), "function" != typeof r) ? n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : et(e, n, r) : ("function" != typeof l && null !== l && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, a)));
        } } function Jc(e, t, n) { switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li": break;
            case "img":
                Ac("error", e), Ac("load", e);
                var r, a = !1, l = !1;
                for (r in n)
                    if (n.hasOwnProperty(r)) {
                        var i = n[r];
                        if (null != i)
                            switch (r) {
                                case "src":
                                    a = !0;
                                    break;
                                case "srcSet":
                                    l = !0;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML": throw Error(o(137, t));
                                default: Xc(e, t, r, i, n, null);
                            }
                    }
                return l && Xc(e, t, "srcSet", n.srcSet, n, null), void (a && Xc(e, t, "src", n.src, n, null));
            case "input":
                Ac("invalid", e);
                var u = r = i = l = null, s = null, c = null;
                for (a in n)
                    if (n.hasOwnProperty(a)) {
                        var f = n[a];
                        if (null != f)
                            switch (a) {
                                case "name":
                                    l = f;
                                    break;
                                case "type":
                                    i = f;
                                    break;
                                case "checked":
                                    s = f;
                                    break;
                                case "defaultChecked":
                                    c = f;
                                    break;
                                case "value":
                                    r = f;
                                    break;
                                case "defaultValue":
                                    u = f;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (null != f)
                                        throw Error(o(137, t));
                                    break;
                                default: Xc(e, t, a, f, n, null);
                            }
                    }
                return gt(e, r, u, s, c, i, l, !1), void ct(e);
            case "select":
                for (l in Ac("invalid", e), a = i = r = null, n)
                    if (n.hasOwnProperty(l) && null != (u = n[l]))
                        switch (l) {
                            case "value":
                                r = u;
                                break;
                            case "defaultValue":
                                i = u;
                                break;
                            case "multiple": a = u;
                            default: Xc(e, t, l, u, n, null);
                        }
                return t = r, n = i, e.multiple = !!a, void (null != t ? vt(e, !!a, t, !1) : null != n && vt(e, !!a, n, !0));
            case "textarea":
                for (i in Ac("invalid", e), r = l = a = null, n)
                    if (n.hasOwnProperty(i) && null != (u = n[i]))
                        switch (i) {
                            case "value":
                                a = u;
                                break;
                            case "defaultValue":
                                l = u;
                                break;
                            case "children":
                                r = u;
                                break;
                            case "dangerouslySetInnerHTML":
                                if (null != u)
                                    throw Error(o(91));
                                break;
                            default: Xc(e, t, i, u, n, null);
                        }
                return wt(e, a, l, r), void ct(e);
            case "option":
                for (s in n)
                    n.hasOwnProperty(s) && null != (a = n[s]) && ("selected" === s ? e.selected = a && "function" != typeof a && "symbol" != typeof a : Xc(e, t, s, a, n, null));
                return;
            case "dialog":
                Ac("beforetoggle", e), Ac("toggle", e), Ac("cancel", e), Ac("close", e);
                break;
            case "iframe":
            case "object":
                Ac("load", e);
                break;
            case "video":
            case "audio":
                for (a = 0; a < Rc.length; a++)
                    Ac(Rc[a], e);
                break;
            case "image":
                Ac("error", e), Ac("load", e);
                break;
            case "details":
                Ac("toggle", e);
                break;
            case "embed":
            case "source":
            case "link": Ac("error", e), Ac("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (c in n)
                    if (n.hasOwnProperty(c) && null != (a = n[c]))
                        switch (c) {
                            case "children":
                            case "dangerouslySetInnerHTML": throw Error(o(137, t));
                            default: Xc(e, t, c, a, n, null);
                        }
                return;
            default: if (xt(t)) {
                for (f in n)
                    n.hasOwnProperty(f) && void 0 !== (a = n[f]) && Zc(e, t, f, a, n, void 0);
                return;
            }
        } for (u in n)
            n.hasOwnProperty(u) && null != (a = n[u]) && Xc(e, t, u, a, n, null); } var ef = null, tf = null; function nf(e) { return 9 === e.nodeType ? e : e.ownerDocument; } function rf(e) { switch (e) {
            case "http://www.w3.org/2000/svg": return 1;
            case "http://www.w3.org/1998/Math/MathML": return 2;
            default: return 0;
        } } function af(e, t) { if (0 === e)
            switch (t) {
                case "svg": return 1;
                case "math": return 2;
                default: return 0;
            } return 1 === e && "foreignObject" === t ? 0 : e; } function lf(e, t) { return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "bigint" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html; } var of = null, uf = "function" == typeof setTimeout ? setTimeout : void 0, sf = "function" == typeof clearTimeout ? clearTimeout : void 0, cf = "function" == typeof Promise ? Promise : void 0, ff = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== cf ? function (e) { return cf.resolve(null).then(e).catch(df); } : uf; function df(e) { setTimeout(function () { throw e; }); } function pf(e) { return "head" === e; } function hf(e, t) { var n = t, r = 0, a = 0; do {
            var l = n.nextSibling;
            if (e.removeChild(n), l && 8 === l.nodeType)
                if ("/$" === (n = l.data)) {
                    if (0 < r && 8 > r) {
                        n = r;
                        var o = e.ownerDocument;
                        if (1 & n && kf(o.documentElement), 2 & n && kf(o.body), 4 & n)
                            for (kf(n = o.head), o = n.firstChild; o;) {
                                var i = o.nextSibling, u = o.nodeName;
                                o[Fe] || "SCRIPT" === u || "STYLE" === u || "LINK" === u && "stylesheet" === o.rel.toLowerCase() || n.removeChild(o), o = i;
                            }
                    }
                    if (0 === a)
                        return e.removeChild(l), void xd(t);
                    a--;
                }
                else
                    "$" === n || "$?" === n || "$!" === n ? a++ : r = n.charCodeAt(0) - 48;
            else
                r = 0;
            n = l;
        } while (n); xd(t); } function mf(e) { var t = e.firstChild; for (t && 10 === t.nodeType && (t = t.nextSibling); t;) {
            var n = t;
            switch (t = t.nextSibling, n.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    mf(n), je(n);
                    continue;
                case "SCRIPT":
                case "STYLE": continue;
                case "LINK": if ("stylesheet" === n.rel.toLowerCase())
                    continue;
            }
            e.removeChild(n);
        } } function gf(e) { return "$!" === e.data || "$?" === e.data && "complete" === e.ownerDocument.readyState; } function yf(e) { for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t)
                break;
            if (8 === t) {
                if ("$" === (t = e.data) || "$!" === t || "$?" === t || "F!" === t || "F" === t)
                    break;
                if ("/$" === t)
                    return null;
            }
        } return e; } var vf = null; function bf(e) { e = e.previousSibling; for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("$" === n || "$!" === n || "$?" === n) {
                    if (0 === t)
                        return e;
                    t--;
                }
                else
                    "/$" === n && t++;
            }
            e = e.previousSibling;
        } return null; } function wf(e, t, n) { switch (t = nf(n), e) {
            case "html":
                if (!(e = t.documentElement))
                    throw Error(o(452));
                return e;
            case "head":
                if (!(e = t.head))
                    throw Error(o(453));
                return e;
            case "body":
                if (!(e = t.body))
                    throw Error(o(454));
                return e;
            default: throw Error(o(451));
        } } function kf(e) { for (var t = e.attributes; t.length;)
            e.removeAttributeNode(t[0]); je(e); } var Sf = new Map, Ef = new Set; function Cf(e) { return "function" == typeof e.getRootNode ? e.getRootNode() : 9 === e.nodeType ? e : e.ownerDocument; } var xf = D.d; D.d = { f: function () { var e = xf.f(), t = Is(); return e || t; }, r: function (e) { var t = He(e); null !== t && 5 === t.tag && "form" === t.type ? No(t) : xf.r(e); }, D: function (e) { xf.D(e), _f("dns-prefetch", e, null); }, C: function (e, t) { xf.C(e, t), _f("preconnect", e, t); }, L: function (e, t, n) { xf.L(e, t, n); var r = Pf; if (r && e && t) {
                var a = 'link[rel="preload"][as="' + ht(t) + '"]';
                "image" === t && n && n.imageSrcSet ? (a += '[imagesrcset="' + ht(n.imageSrcSet) + '"]', "string" == typeof n.imageSizes && (a += '[imagesizes="' + ht(n.imageSizes) + '"]')) : a += '[href="' + ht(e) + '"]';
                var l = a;
                switch (t) {
                    case "style":
                        l = Tf(e);
                        break;
                    case "script": l = Nf(e);
                }
                Sf.has(l) || (e = f({ rel: "preload", href: "image" === t && n && n.imageSrcSet ? void 0 : e, as: t }, n), Sf.set(l, e), null !== r.querySelector(a) || "style" === t && r.querySelector(Lf(l)) || "script" === t && r.querySelector(Rf(l)) || (Jc(t = r.createElement("link"), "link", e), We(t), r.head.appendChild(t)));
            } }, m: function (e, t) { xf.m(e, t); var n = Pf; if (n && e) {
                var r = t && "string" == typeof t.as ? t.as : "script", a = 'link[rel="modulepreload"][as="' + ht(r) + '"][href="' + ht(e) + '"]', l = a;
                switch (r) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script": l = Nf(e);
                }
                if (!Sf.has(l) && (e = f({ rel: "modulepreload", href: e }, t), Sf.set(l, e), null === n.querySelector(a))) {
                    switch (r) {
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script": if (n.querySelector(Rf(l)))
                            return;
                    }
                    Jc(r = n.createElement("link"), "link", e), We(r), n.head.appendChild(r);
                }
            } }, X: function (e, t) { xf.X(e, t); var n = Pf; if (n && e) {
                var r = $e(n).hoistableScripts, a = Nf(e), l = r.get(a);
                l || ((l = n.querySelector(Rf(a))) || (e = f({ src: e, async: !0 }, t), (t = Sf.get(a)) && Uf(e, t), We(l = n.createElement("script")), Jc(l, "link", e), n.head.appendChild(l)), l = { type: "script", instance: l, count: 1, state: null }, r.set(a, l));
            } }, S: function (e, t, n) { xf.S(e, t, n); var r = Pf; if (r && e) {
                var a = $e(r).hoistableStyles, l = Tf(e);
                t = t || "default";
                var o = a.get(l);
                if (!o) {
                    var i = { loading: 0, preload: null };
                    if (o = r.querySelector(Lf(l)))
                        i.loading = 5;
                    else {
                        e = f({ rel: "stylesheet", href: e, "data-precedence": t }, n), (n = Sf.get(l)) && Af(e, n);
                        var u = o = r.createElement("link");
                        We(u), Jc(u, "link", e), u._p = new Promise(function (e, t) { u.onload = e, u.onerror = t; }), u.addEventListener("load", function () { i.loading |= 1; }), u.addEventListener("error", function () { i.loading |= 2; }), i.loading |= 4, Mf(o, t, r);
                    }
                    o = { type: "stylesheet", instance: o, count: 1, state: i }, a.set(l, o);
                }
            } }, M: function (e, t) { xf.M(e, t); var n = Pf; if (n && e) {
                var r = $e(n).hoistableScripts, a = Nf(e), l = r.get(a);
                l || ((l = n.querySelector(Rf(a))) || (e = f({ src: e, async: !0, type: "module" }, t), (t = Sf.get(a)) && Uf(e, t), We(l = n.createElement("script")), Jc(l, "link", e), n.head.appendChild(l)), l = { type: "script", instance: l, count: 1, state: null }, r.set(a, l));
            } } }; var Pf = "undefined" == typeof document ? null : document; function _f(e, t, n) { var r = Pf; if (r && "string" == typeof t && t) {
            var a = ht(t);
            a = 'link[rel="' + e + '"][href="' + a + '"]', "string" == typeof n && (a += '[crossorigin="' + n + '"]'), Ef.has(a) || (Ef.add(a), e = { rel: e, crossOrigin: n, href: t }, null === r.querySelector(a) && (Jc(t = r.createElement("link"), "link", e), We(t), r.head.appendChild(t)));
        } } function zf(e, t, n, r) { var a, l, i, u, s = (s = $.current) ? Cf(s) : null; if (!s)
            throw Error(o(446)); switch (e) {
            case "meta":
            case "title": return null;
            case "style": return "string" == typeof n.precedence && "string" == typeof n.href ? (t = Tf(n.href), (r = (n = $e(s).hoistableStyles).get(t)) || (r = { type: "style", instance: null, count: 0, state: null }, n.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
            case "link":
                if ("stylesheet" === n.rel && "string" == typeof n.href && "string" == typeof n.precedence) {
                    e = Tf(n.href);
                    var c = $e(s).hoistableStyles, f = c.get(e);
                    if (f || (s = s.ownerDocument || s, f = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, c.set(e, f), (c = s.querySelector(Lf(e))) && !c._p && (f.instance = c, f.state.loading = 5), Sf.has(e) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, Sf.set(e, n), c || (a = s, l = e, i = n, u = f.state, a.querySelector('link[rel="preload"][as="style"][' + l + "]") ? u.loading = 1 : (l = a.createElement("link"), u.preload = l, l.addEventListener("load", function () { return u.loading |= 1; }), l.addEventListener("error", function () { return u.loading |= 2; }), Jc(l, "link", i), We(l), a.head.appendChild(l))))), t && null === r)
                        throw Error(o(528, ""));
                    return f;
                }
                if (t && null !== r)
                    throw Error(o(529, ""));
                return null;
            case "script": return t = n.async, "string" == typeof (n = n.src) && t && "function" != typeof t && "symbol" != typeof t ? (t = Nf(n), (r = (n = $e(s).hoistableScripts).get(t)) || (r = { type: "script", instance: null, count: 0, state: null }, n.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
            default: throw Error(o(444, e));
        } } function Tf(e) { return 'href="' + ht(e) + '"'; } function Lf(e) { return 'link[rel="stylesheet"][' + e + "]"; } function Of(e) { return f({}, e, { "data-precedence": e.precedence, precedence: null }); } function Nf(e) { return '[src="' + ht(e) + '"]'; } function Rf(e) { return "script[async]" + e; } function Df(e, t, n) { if (t.count++, null === t.instance)
            switch (t.type) {
                case "style":
                    var r = e.querySelector('style[data-href~="' + ht(n.href) + '"]');
                    if (r)
                        return t.instance = r, We(r), r;
                    var a = f({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
                    return We(r = (e.ownerDocument || e).createElement("style")), Jc(r, "style", a), Mf(r, n.precedence, e), t.instance = r;
                case "stylesheet":
                    a = Tf(n.href);
                    var l = e.querySelector(Lf(a));
                    if (l)
                        return t.state.loading |= 4, t.instance = l, We(l), l;
                    r = Of(n), (a = Sf.get(a)) && Af(r, a), We(l = (e.ownerDocument || e).createElement("link"));
                    var i = l;
                    return i._p = new Promise(function (e, t) { i.onload = e, i.onerror = t; }), Jc(l, "link", r), t.state.loading |= 4, Mf(l, n.precedence, e), t.instance = l;
                case "script": return l = Nf(n.src), (a = e.querySelector(Rf(l))) ? (t.instance = a, We(a), a) : (r = n, (a = Sf.get(l)) && Uf(r = f({}, n), a), We(a = (e = e.ownerDocument || e).createElement("script")), Jc(a, "link", r), e.head.appendChild(a), t.instance = a);
                case "void": return null;
                default: throw Error(o(443, t.type));
            }
        else
            "stylesheet" === t.type && !(4 & t.state.loading) && (r = t.instance, t.state.loading |= 4, Mf(r, n.precedence, e)); return t.instance; } function Mf(e, t, n) { for (var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = r.length ? r[r.length - 1] : null, l = a, o = 0; o < r.length; o++) {
            var i = r[o];
            if (i.dataset.precedence === t)
                l = i;
            else if (l !== a)
                break;
        } l ? l.parentNode.insertBefore(e, l.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild); } function Af(e, t) { null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.title && (e.title = t.title); } function Uf(e, t) { null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.integrity && (e.integrity = t.integrity); } var Ff = null; function jf(e, t, n) { if (null === Ff) {
            var r = new Map, a = Ff = new Map;
            a.set(n, r);
        }
        else
            (r = (a = Ff).get(n)) || (r = new Map, a.set(n, r)); if (r.has(e))
            return r; for (r.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
            var l = n[a];
            if (!(l[Fe] || l[Oe] || "link" === e && "stylesheet" === l.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== l.namespaceURI) {
                var o = l.getAttribute(t) || "";
                o = e + o;
                var i = r.get(o);
                i ? i.push(l) : r.set(o, [l]);
            }
        } return r; } function If(e, t, n) { (e = e.ownerDocument || e).head.insertBefore(n, "title" === t ? e.querySelector("head > title") : null); } function Hf(e) { return !!("stylesheet" !== e.type || 3 & e.state.loading); } var Bf = null; function $f() { } function Wf() { if (this.count--, 0 === this.count)
            if (this.stylesheets)
                qf(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null, e();
            } } var Vf = null; function qf(e, t) { e.stylesheets = null, null !== e.unsuspend && (e.count++, Vf = new Map, t.forEach(Qf, e), Vf = null, Wf.call(e)); } function Qf(e, t) { if (!(4 & t.state.loading)) {
            var n = Vf.get(e);
            if (n)
                var r = n.get(null);
            else {
                n = new Map, Vf.set(e, n);
                for (var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), l = 0; l < a.length; l++) {
                    var o = a[l];
                    "LINK" !== o.nodeName && "not all" === o.getAttribute("media") || (n.set(o.dataset.precedence, o), r = o);
                }
                r && n.set(null, r);
            }
            o = (a = t.instance).getAttribute("data-precedence"), (l = n.get(o) || r) === r && n.set(null, a), n.set(o, a), this.count++, r = Wf.bind(this), a.addEventListener("load", r), a.addEventListener("error", r), l ? l.parentNode.insertBefore(a, l.nextSibling) : (e = 9 === e.nodeType ? e.head : e).insertBefore(a, e.firstChild), t.state.loading |= 4;
        } } var Gf = { $$typeof: w, Provider: null, Consumer: null, _currentValue: M, _currentValue2: M, _threadCount: 0 }; function Kf(e, t, n, r, a, l, o, i) { this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ee(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ee(0), this.hiddenUpdates = Ee(null), this.identifierPrefix = r, this.onUncaughtError = a, this.onCaughtError = l, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = new Map; } function Yf(e, t, n, r, a, l) { a = function (e) { return e ? e = Rr : Rr; }(a), null === r.context ? r.context = a : r.pendingContext = a, (r = rl(t)).payload = { element: n }, null !== (l = void 0 === l ? null : l) && (r.callback = l), null !== (n = al(e, r, t)) && (Ms(n, 0, t), ll(n, e, t)); } function Xf(e, t) { if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
        } } function Zf(e, t) { Xf(e, t), (e = e.alternate) && Xf(e, t); } function Jf(e) { if (13 === e.tag) {
            var t = Lr(e, 67108864);
            null !== t && Ms(t, 0, 67108864), Zf(e, 67108864);
        } } var ed = !0; function td(e, t, n, r) { var a = R.T; R.T = null; var l = D.p; try {
            D.p = 2, rd(e, t, n, r);
        }
        finally {
            D.p = l, R.T = a;
        } } function nd(e, t, n, r) { var a = R.T; R.T = null; var l = D.p; try {
            D.p = 8, rd(e, t, n, r);
        }
        finally {
            D.p = l, R.T = a;
        } } function rd(e, t, n, r) { if (ed) {
            var a = ad(r);
            if (null === a)
                Hc(e, t, r, ld, n), gd(e, r);
            else if (function (e, t, n, r, a) { switch (t) {
                case "focusin": return sd = yd(sd, e, t, n, r, a), !0;
                case "dragenter": return cd = yd(cd, e, t, n, r, a), !0;
                case "mouseover": return fd = yd(fd, e, t, n, r, a), !0;
                case "pointerover":
                    var l = a.pointerId;
                    return dd.set(l, yd(dd.get(l) || null, e, t, n, r, a)), !0;
                case "gotpointercapture": return l = a.pointerId, pd.set(l, yd(pd.get(l) || null, e, t, n, r, a)), !0;
            } return !1; }(a, e, t, n, r))
                r.stopPropagation();
            else if (gd(e, r), 4 & t && -1 < md.indexOf(e)) {
                for (; null !== a;) {
                    var l = He(a);
                    if (null !== l)
                        switch (l.tag) {
                            case 3:
                                if ((l = l.stateNode).current.memoizedState.isDehydrated) {
                                    var o = ye(l.pendingLanes);
                                    if (0 !== o) {
                                        var i = l;
                                        for (i.pendingLanes |= 2, i.entangledLanes |= 2; o;) {
                                            var u = 1 << 31 - de(o);
                                            i.entanglements[1] |= u, o &= ~u;
                                        }
                                        kc(l), !(6 & ts) && (ks = ee() + 500, Sc(0, !1));
                                    }
                                }
                                break;
                            case 13: null !== (i = Lr(l, 2)) && Ms(i, 0, 2), Is(), Zf(l, 2);
                        }
                    if (null === (l = ad(r)) && Hc(e, t, r, ld, n), l === a)
                        break;
                    a = l;
                }
                null !== a && r.stopPropagation();
            }
            else
                Hc(e, t, r, null, n);
        } } function ad(e) { return od(e = Lt(e)); } var ld = null; function od(e) { if (ld = null, null !== (e = Ie(e))) {
            var t = i(e);
            if (null === t)
                e = null;
            else {
                var n = t.tag;
                if (13 === n) {
                    if (null !== (e = u(t)))
                        return e;
                    e = null;
                }
                else if (3 === n) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return 3 === t.tag ? t.stateNode.containerInfo : null;
                    e = null;
                }
                else
                    t !== e && (e = null);
            }
        } return ld = e, null; } function id(e) { switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart": return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave": return 8;
            case "message": switch (te()) {
                case ne: return 2;
                case re: return 8;
                case ae:
                case le: return 32;
                case oe: return 268435456;
                default: return 32;
            }
            default: return 32;
        } } var ud = !1, sd = null, cd = null, fd = null, dd = new Map, pd = new Map, hd = [], md = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "); function gd(e, t) { switch (e) {
            case "focusin":
            case "focusout":
                sd = null;
                break;
            case "dragenter":
            case "dragleave":
                cd = null;
                break;
            case "mouseover":
            case "mouseout":
                fd = null;
                break;
            case "pointerover":
            case "pointerout":
                dd.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture": pd.delete(t.pointerId);
        } } function yd(e, t, n, r, a, l) { return null === e || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [a] }, null !== t && null !== (t = He(t)) && Jf(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e); } function vd(e) { var t = Ie(e.target); if (null !== t) {
            var n = i(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = u(n)))
                        return e.blockedOn = t, void function (e) { var t = D.p; try {
                            return D.p = e, function () { if (13 === n.tag) {
                                var e = Rs();
                                e = _e(e);
                                var t = Lr(n, e);
                                null !== t && Ms(t, 0, e), Zf(n, e);
                            } }();
                        }
                        finally {
                            D.p = t;
                        } }(e.priority);
                }
                else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                    return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
        } e.blockedOn = null; } function bd(e) { if (null !== e.blockedOn)
            return !1; for (var t = e.targetContainers; 0 < t.length;) {
            var n = ad(e.nativeEvent);
            if (null !== n)
                return null !== (t = He(n)) && Jf(t), e.blockedOn = n, !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            Tt = r, n.target.dispatchEvent(r), Tt = null, t.shift();
        } return !0; } function wd(e, t, n) { bd(e) && n.delete(t); } function kd() { ud = !1, null !== sd && bd(sd) && (sd = null), null !== cd && bd(cd) && (cd = null), null !== fd && bd(fd) && (fd = null), dd.forEach(wd), pd.forEach(wd); } function Sd(e, t) { e.blockedOn === t && (e.blockedOn = null, ud || (ud = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, kd))); } var Ed = null; function Cd(e) { Ed !== e && (Ed = e, r.unstable_scheduleCallback(r.unstable_NormalPriority, function () { Ed === e && (Ed = null); for (var t = 0; t < e.length; t += 3) {
            var n = e[t], r = e[t + 1], a = e[t + 2];
            if ("function" != typeof r) {
                if (null === od(r || n))
                    continue;
                break;
            }
            var l = He(n);
            null !== l && (e.splice(t, 3), t -= 3, Lo(l, { pending: !0, data: a, method: n.method, action: r }, r, a));
        } })); } function xd(e) { function t(t) { return Sd(t, e); } null !== sd && Sd(sd, e), null !== cd && Sd(cd, e), null !== fd && Sd(fd, e), dd.forEach(t), pd.forEach(t); for (var n = 0; n < hd.length; n++) {
            var r = hd[n];
            r.blockedOn === e && (r.blockedOn = null);
        } for (; 0 < hd.length && null === (n = hd[0]).blockedOn;)
            vd(n), null === n.blockedOn && hd.shift(); if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
                var a = n[r], l = n[r + 1], o = a[Ne] || null;
                if ("function" == typeof l)
                    o || Cd(n);
                else if (o) {
                    var i = null;
                    if (l && l.hasAttribute("formAction")) {
                        if (a = l, o = l[Ne] || null)
                            i = o.formAction;
                        else if (null !== od(a))
                            continue;
                    }
                    else
                        i = o.action;
                    "function" == typeof i ? n[r + 1] = i : (n.splice(r, 3), r -= 3), Cd(n);
                }
            } } function Pd(e) { this._internalRoot = e; } function _d(e) { this._internalRoot = e; } _d.prototype.render = Pd.prototype.render = function (e) { var t = this._internalRoot; if (null === t)
            throw Error(o(409)); Yf(t.current, Rs(), e, t, null, null); }, _d.prototype.unmount = Pd.prototype.unmount = function () { var e = this._internalRoot; if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Yf(e.current, 2, null, e, null, null), Is(), t[Re] = null;
        } }, _d.prototype.unstable_scheduleHydration = function (e) { if (e) {
            var t = Te();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < hd.length && 0 !== t && t < hd[n].priority; n++)
                ;
            hd.splice(n, 0, e), 0 === n && vd(e);
        } }; var zd = a.version; if ("19.1.1" !== zd)
            throw Error(o(527, zd, "19.1.1")); D.findDOMNode = function (e) { var t = e._reactInternals; if (void 0 === t) {
            if ("function" == typeof e.render)
                throw Error(o(188));
            throw e = Object.keys(e).join(","), Error(o(268, e));
        } return e = function (e) { var t = e.alternate; if (!t) {
            if (null === (t = i(e)))
                throw Error(o(188));
            return t !== e ? null : e;
        } for (var n = e, r = t;;) {
            var a = n.return;
            if (null === a)
                break;
            var l = a.alternate;
            if (null === l) {
                if (null !== (r = a.return)) {
                    n = r;
                    continue;
                }
                break;
            }
            if (a.child === l.child) {
                for (l = a.child; l;) {
                    if (l === n)
                        return s(a), e;
                    if (l === r)
                        return s(a), t;
                    l = l.sibling;
                }
                throw Error(o(188));
            }
            if (n.return !== r.return)
                n = a, r = l;
            else {
                for (var u = !1, c = a.child; c;) {
                    if (c === n) {
                        u = !0, n = a, r = l;
                        break;
                    }
                    if (c === r) {
                        u = !0, r = a, n = l;
                        break;
                    }
                    c = c.sibling;
                }
                if (!u) {
                    for (c = l.child; c;) {
                        if (c === n) {
                            u = !0, n = l, r = a;
                            break;
                        }
                        if (c === r) {
                            u = !0, r = l, n = a;
                            break;
                        }
                        c = c.sibling;
                    }
                    if (!u)
                        throw Error(o(189));
                }
            }
            if (n.alternate !== r)
                throw Error(o(190));
        } if (3 !== n.tag)
            throw Error(o(188)); return n.stateNode.current === n ? e : t; }(t), null === (e = null !== e ? c(e) : null) ? null : e.stateNode; }; var Td = { bundleType: 0, version: "19.1.1", rendererPackageName: "react-dom", currentDispatcherRef: R, reconcilerVersion: "19.1.1" }; if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var Ld = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!Ld.isDisabled && Ld.supportsFiber)
                try {
                    se = Ld.inject(Td), ce = Ld;
                }
                catch (e) { }
        } t.createRoot = function (e, t) { if (!(n = e) || 1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType)
            throw Error(o(299)); var n, r = !1, a = "", l = yi, i = vi, u = bi; return null != t && (!0 === t.unstable_strictMode && (r = !0), void 0 !== t.identifierPrefix && (a = t.identifierPrefix), void 0 !== t.onUncaughtError && (l = t.onUncaughtError), void 0 !== t.onCaughtError && (i = t.onCaughtError), void 0 !== t.onRecoverableError && (u = t.onRecoverableError), void 0 !== t.unstable_transitionCallbacks && t.unstable_transitionCallbacks), t = function (e, t, n, r, a, l, o, i, u, s, c, f) { return e = new Kf(e, t, n, o, i, u, s, f), t = 1, !0 === l && (t |= 24), l = Mr(3, null, null, t), e.current = l, l.stateNode = e, (t = Na()).refCount++, e.pooledCache = t, t.refCount++, l.memoizedState = { element: r, isDehydrated: n, cache: t }, tl(l), e; }(e, 1, !1, null, 0, r, a, l, i, u, 0, null), e[Re] = t.current, jc(e), new Pd(t); }; }, 338: function (e, t, n) { !function e() { if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            }
            catch (e) {
                console.error(e);
            } }(), e.exports = n(247); }, 477: function (e, t) { function n(e, t) { var n = e.length; e.push(t); e: for (; 0 < n;) {
            var r = n - 1 >>> 1, a = e[r];
            if (!(0 < l(a, t)))
                break e;
            e[r] = t, e[n] = a, n = r;
        } } function r(e) { return 0 === e.length ? null : e[0]; } function a(e) { if (0 === e.length)
            return null; var t = e[0], n = e.pop(); if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
                var i = 2 * (r + 1) - 1, u = e[i], s = i + 1, c = e[s];
                if (0 > l(u, n))
                    s < a && 0 > l(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[i] = n, r = i);
                else {
                    if (!(s < a && 0 > l(c, n)))
                        break e;
                    e[r] = c, e[s] = n, r = s;
                }
            }
        } return t; } function l(e, t) { var n = e.sortIndex - t.sortIndex; return 0 !== n ? n : e.id - t.id; } if (t.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
            var o = performance;
            t.unstable_now = function () { return o.now(); };
        }
        else {
            var i = Date, u = i.now();
            t.unstable_now = function () { return i.now() - u; };
        } var s = [], c = [], f = 1, d = null, p = 3, h = !1, m = !1, g = !1, y = !1, v = "function" == typeof setTimeout ? setTimeout : null, b = "function" == typeof clearTimeout ? clearTimeout : null, w = "undefined" != typeof setImmediate ? setImmediate : null; function k(e) { for (var t = r(c); null !== t;) {
            if (null === t.callback)
                a(c);
            else {
                if (!(t.startTime <= e))
                    break;
                a(c), t.sortIndex = t.expirationTime, n(s, t);
            }
            t = r(c);
        } } function S(e) { if (g = !1, k(e), !m)
            if (null !== r(s))
                m = !0, C || (C = !0, E());
            else {
                var t = r(c);
                null !== t && N(S, t.startTime - e);
            } } var E, C = !1, x = -1, P = 5, _ = -1; function z() { return !(!y && t.unstable_now() - _ < P); } function T() { if (y = !1, C) {
            var e = t.unstable_now();
            _ = e;
            var n = !0;
            try {
                e: {
                    m = !1, g && (g = !1, b(x), x = -1), h = !0;
                    var l = p;
                    try {
                        t: {
                            for (k(e), d = r(s); null !== d && !(d.expirationTime > e && z());) {
                                var o = d.callback;
                                if ("function" == typeof o) {
                                    d.callback = null, p = d.priorityLevel;
                                    var i = o(d.expirationTime <= e);
                                    if (e = t.unstable_now(), "function" == typeof i) {
                                        d.callback = i, k(e), n = !0;
                                        break t;
                                    }
                                    d === r(s) && a(s), k(e);
                                }
                                else
                                    a(s);
                                d = r(s);
                            }
                            if (null !== d)
                                n = !0;
                            else {
                                var u = r(c);
                                null !== u && N(S, u.startTime - e), n = !1;
                            }
                        }
                        break e;
                    }
                    finally {
                        d = null, p = l, h = !1;
                    }
                    n = void 0;
                }
            }
            finally {
                n ? E() : C = !1;
            }
        } } if ("function" == typeof w)
            E = function () { w(T); };
        else if ("undefined" != typeof MessageChannel) {
            var L = new MessageChannel, O = L.port2;
            L.port1.onmessage = T, E = function () { O.postMessage(null); };
        }
        else
            E = function () { v(T, 0); }; function N(e, n) { x = v(function () { e(t.unstable_now()); }, n); } t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) { e.callback = null; }, t.unstable_forceFrameRate = function (e) { 0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < e ? Math.floor(1e3 / e) : 5; }, t.unstable_getCurrentPriorityLevel = function () { return p; }, t.unstable_next = function (e) { switch (p) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default: t = p;
        } var n = p; p = t; try {
            return e();
        }
        finally {
            p = n;
        } }, t.unstable_requestPaint = function () { y = !0; }, t.unstable_runWithPriority = function (e, t) { switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: break;
            default: e = 3;
        } var n = p; p = e; try {
            return t();
        }
        finally {
            p = n;
        } }, t.unstable_scheduleCallback = function (e, a, l) { var o = t.unstable_now(); switch (l = "object" == typeof l && null !== l && "number" == typeof (l = l.delay) && 0 < l ? o + l : o, e) {
            case 1:
                var i = -1;
                break;
            case 2:
                i = 250;
                break;
            case 5:
                i = 1073741823;
                break;
            case 4:
                i = 1e4;
                break;
            default: i = 5e3;
        } return e = { id: f++, callback: a, priorityLevel: e, startTime: l, expirationTime: i = l + i, sortIndex: -1 }, l > o ? (e.sortIndex = l, n(c, e), null === r(s) && e === r(c) && (g ? (b(x), x = -1) : g = !0, N(S, l - o))) : (e.sortIndex = i, n(s, e), m || h || (m = !0, C || (C = !0, E()))), e; }, t.unstable_shouldYield = z, t.unstable_wrapCallback = function (e) { var t = p; return function () { var n = p; p = t; try {
            return e.apply(this, arguments);
        }
        finally {
            p = n;
        } }; }; }, 540: function (e, t, n) { e.exports = n(869); }, 698: function (e, t) { var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment"); function a(e, t, r) { var a = null; if (void 0 !== r && (a = "" + r), void 0 !== t.key && (a = "" + t.key), "key" in t)
            for (var l in r = {}, t)
                "key" !== l && (r[l] = t[l]);
        else
            r = t; return t = r.ref, { $$typeof: n, type: e, key: a, ref: void 0 !== t ? t : null, props: r }; } t.Fragment = r, t.jsx = a, t.jsxs = a; }, 848: function (e, t, n) { e.exports = n(698); }, 869: function (e, t) { var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.iterator, h = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, m = Object.assign, g = {}; function y(e, t, n) { this.props = e, this.context = t, this.refs = g, this.updater = n || h; } function v() { } function b(e, t, n) { this.props = e, this.context = t, this.refs = g, this.updater = n || h; } y.prototype.isReactComponent = {}, y.prototype.setState = function (e, t) { if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); }, y.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); }, v.prototype = y.prototype; var w = b.prototype = new v; w.constructor = b, m(w, y.prototype), w.isPureReactComponent = !0; var k = Array.isArray, S = { H: null, A: null, T: null, S: null, V: null }, E = Object.prototype.hasOwnProperty; function C(e, t, r, a, l, o) { return r = o.ref, { $$typeof: n, type: e, key: t, ref: void 0 !== r ? r : null, props: o }; } function x(e) { return "object" == typeof e && null !== e && e.$$typeof === n; } var P = /\/+/g; function _(e, t) { return "object" == typeof e && null !== e && null != e.key ? (n = "" + e.key, r = { "=": "=0", ":": "=2" }, "$" + n.replace(/[=:]/g, function (e) { return r[e]; })) : t.toString(36); var n, r; } function z() { } function T(e, t, a, l, o) { var i = typeof e; "undefined" !== i && "boolean" !== i || (e = null); var u, s, c = !1; if (null === e)
            c = !0;
        else
            switch (i) {
                case "bigint":
                case "string":
                case "number":
                    c = !0;
                    break;
                case "object": switch (e.$$typeof) {
                    case n:
                    case r:
                        c = !0;
                        break;
                    case d: return T((c = e._init)(e._payload), t, a, l, o);
                }
            } if (c)
            return o = o(e), c = "" === l ? "." + _(e, 0) : l, k(o) ? (a = "", null != c && (a = c.replace(P, "$&/") + "/"), T(o, t, a, "", function (e) { return e; })) : null != o && (x(o) && (u = o, s = a + (null == o.key || e && e.key === o.key ? "" : ("" + o.key).replace(P, "$&/") + "/") + c, o = C(u.type, s, void 0, 0, 0, u.props)), t.push(o)), 1; c = 0; var f, h = "" === l ? "." : l + ":"; if (k(e))
            for (var m = 0; m < e.length; m++)
                c += T(l = e[m], t, a, i = h + _(l, m), o);
        else if ("function" == typeof (m = null === (f = e) || "object" != typeof f ? null : "function" == typeof (f = p && f[p] || f["@@iterator"]) ? f : null))
            for (e = m.call(e), m = 0; !(l = e.next()).done;)
                c += T(l = l.value, t, a, i = h + _(l, m++), o);
        else if ("object" === i) {
            if ("function" == typeof e.then)
                return T(function (e) { switch (e.status) {
                    case "fulfilled": return e.value;
                    case "rejected": throw e.reason;
                    default: switch ("string" == typeof e.status ? e.then(z, z) : (e.status = "pending", e.then(function (t) { "pending" === e.status && (e.status = "fulfilled", e.value = t); }, function (t) { "pending" === e.status && (e.status = "rejected", e.reason = t); })), e.status) {
                        case "fulfilled": return e.value;
                        case "rejected": throw e.reason;
                    }
                } throw e; }(e), t, a, l, o);
            throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        } return c; } function L(e, t, n) { if (null == e)
            return e; var r = [], a = 0; return T(e, r, "", "", function (e) { return t.call(n, e, a++); }), r; } function O(e) { if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(function (t) { 0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t); }, function (t) { 0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t); }), -1 === e._status && (e._status = 0, e._result = t);
        } if (1 === e._status)
            return e._result.default; throw e._result; } var N = "function" == typeof reportError ? reportError : function (e) { if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
            var t = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e), error: e });
            if (!window.dispatchEvent(t))
                return;
        }
        else if ("object" == typeof process && "function" == typeof process.emit)
            return void process.emit("uncaughtException", e); console.error(e); }; function R() { } t.Children = { map: L, forEach: function (e, t, n) { L(e, function () { t.apply(this, arguments); }, n); }, count: function (e) { var t = 0; return L(e, function () { t++; }), t; }, toArray: function (e) { return L(e, function (e) { return e; }) || []; }, only: function (e) { if (!x(e))
                throw Error("React.Children.only expected to receive a single React element child."); return e; } }, t.Component = y, t.Fragment = a, t.Profiler = o, t.PureComponent = b, t.StrictMode = l, t.Suspense = c, t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S, t.__COMPILER_RUNTIME = { __proto__: null, c: function (e) { return S.H.useMemoCache(e); } }, t.cache = function (e) { return function () { return e.apply(null, arguments); }; }, t.cloneElement = function (e, t, n) { if (null == e)
            throw Error("The argument must be a React element, but you passed " + e + "."); var r = m({}, e.props), a = e.key; if (null != t)
            for (l in t.ref, void 0 !== t.key && (a = "" + t.key), t)
                !E.call(t, l) || "key" === l || "__self" === l || "__source" === l || "ref" === l && void 0 === t.ref || (r[l] = t[l]); var l = arguments.length - 2; if (1 === l)
            r.children = n;
        else if (1 < l) {
            for (var o = Array(l), i = 0; i < l; i++)
                o[i] = arguments[i + 2];
            r.children = o;
        } return C(e.type, a, void 0, 0, 0, r); }, t.createContext = function (e) { return (e = { $$typeof: u, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }).Provider = e, e.Consumer = { $$typeof: i, _context: e }, e; }, t.createElement = function (e, t, n) { var r, a = {}, l = null; if (null != t)
            for (r in void 0 !== t.key && (l = "" + t.key), t)
                E.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (a[r] = t[r]); var o = arguments.length - 2; if (1 === o)
            a.children = n;
        else if (1 < o) {
            for (var i = Array(o), u = 0; u < o; u++)
                i[u] = arguments[u + 2];
            a.children = i;
        } if (e && e.defaultProps)
            for (r in o = e.defaultProps)
                void 0 === a[r] && (a[r] = o[r]); return C(e, l, void 0, 0, 0, a); }, t.createRef = function () { return { current: null }; }, t.forwardRef = function (e) { return { $$typeof: s, render: e }; }, t.isValidElement = x, t.lazy = function (e) { return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: O }; }, t.memo = function (e, t) { return { $$typeof: f, type: e, compare: void 0 === t ? null : t }; }, t.startTransition = function (e) { var t = S.T, n = {}; S.T = n; try {
            var r = e(), a = S.S;
            null !== a && a(n, r), "object" == typeof r && null !== r && "function" == typeof r.then && r.then(R, N);
        }
        catch (e) {
            N(e);
        }
        finally {
            S.T = t;
        } }, t.unstable_useCacheRefresh = function () { return S.H.useCacheRefresh(); }, t.use = function (e) { return S.H.use(e); }, t.useActionState = function (e, t, n) { return S.H.useActionState(e, t, n); }, t.useCallback = function (e, t) { return S.H.useCallback(e, t); }, t.useContext = function (e) { return S.H.useContext(e); }, t.useDebugValue = function () { }, t.useDeferredValue = function (e, t) { return S.H.useDeferredValue(e, t); }, t.useEffect = function (e, t, n) { var r = S.H; if ("function" == typeof n)
            throw Error("useEffect CRUD overload is not enabled in this build of React."); return r.useEffect(e, t); }, t.useId = function () { return S.H.useId(); }, t.useImperativeHandle = function (e, t, n) { return S.H.useImperativeHandle(e, t, n); }, t.useInsertionEffect = function (e, t) { return S.H.useInsertionEffect(e, t); }, t.useLayoutEffect = function (e, t) { return S.H.useLayoutEffect(e, t); }, t.useMemo = function (e, t) { return S.H.useMemo(e, t); }, t.useOptimistic = function (e, t) { return S.H.useOptimistic(e, t); }, t.useReducer = function (e, t, n) { return S.H.useReducer(e, t, n); }, t.useRef = function (e) { return S.H.useRef(e); }, t.useState = function (e) { return S.H.useState(e); }, t.useSyncExternalStore = function (e, t, n) { return S.H.useSyncExternalStore(e, t, n); }, t.useTransition = function () { return S.H.useTransition(); }, t.version = "19.1.1"; }, 961: function (e, t, n) { !function e() { if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            }
            catch (e) {
                console.error(e);
            } }(), e.exports = n(221); }, 982: function (e, t, n) { e.exports = n(477); } }, l = {};
    function o(e) { var t = l[e]; if (void 0 !== t)
        return t.exports; var n = l[e] = { exports: {} }; return a[e](n, n.exports, o), n.exports; }
    o.m = a, t = Object.getPrototypeOf ? function (e) { return Object.getPrototypeOf(e); } : function (e) { return e.__proto__; }, o.t = function (n, r) { if (1 & r && (n = this(n)), 8 & r)
        return n; if ("object" == typeof n && n) {
        if (4 & r && n.__esModule)
            return n;
        if (16 & r && "function" == typeof n.then)
            return n;
    } var a = Object.create(null); o.r(a); var l = {}; e = e || [null, t({}), t([]), t(t)]; for (var i = 2 & r && n; ("object" == typeof i || "function" == typeof i) && !~e.indexOf(i); i = t(i))
        Object.getOwnPropertyNames(i).forEach(function (e) { return l[e] = function () { return n[e]; }; }); return l.default = function () { return n; }, o.d(a, l), a; }, o.d = function (e, t) { for (var n in t)
        o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }); }, o.f = {}, o.e = function (e) { return Promise.all(Object.keys(o.f).reduce(function (t, n) { return (o.f[n](e, t), t); }, [])); }, o.u = function (e) { return e + "." + { 914: "ea711be72138eba8f322", 960: "3c3551b5c5ad34d13017" }[e] + ".js"; }, o.miniCssF = function (e) { }, o.g = function () { if ("object" == typeof globalThis)
        return globalThis; try {
        return this || new Function("return this")();
    }
    catch (e) {
        if ("object" == typeof window)
            return window;
    } }(), o.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n = {}, r = "start:", o.l = function (e, t, a, l) { if (n[e])
        n[e].push(t);
    else {
        var i, u;
        if (void 0 !== a)
            for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var f = s[c];
                if (f.getAttribute("src") == e || f.getAttribute("data-webpack") == r + a) {
                    i = f;
                    break;
                }
            }
        i || (u = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, o.nc && i.setAttribute("nonce", o.nc), i.setAttribute("data-webpack", r + a), i.src = e), n[e] = [t];
        var d = function (t, r) { i.onerror = i.onload = null, clearTimeout(p); var a = n[e]; if (delete n[e], i.parentNode && i.parentNode.removeChild(i), a && a.forEach(function (e) { return e(r); }), t)
            return t(r); }, p = setTimeout(d.bind(null, void 0, { type: "timeout", target: i }), 12e4);
        i.onerror = d.bind(null, i.onerror), i.onload = d.bind(null, i.onload), u && document.head.appendChild(i);
    } }, o.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, (function () { var e; o.g.importScripts && (e = o.g.location + ""); var t = o.g.document; if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length)
            for (var r = n.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));)
                e = n[r--].src;
    } if (!e)
        throw new Error("Automatic publicPath is not supported in this browser"); e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e; })(), (function () { var e = { 792: 0 }; o.f.j = function (t, n) { var r = o.o(e, t) ? e[t] : void 0; if (0 !== r)
        if (r)
            n.push(r[2]);
        else {
            var a = new Promise(function (n, a) { return r = e[t] = [n, a]; });
            n.push(r[2] = a);
            var l = o.p + o.u(t), i = new Error;
            o.l(l, function (n) { if (o.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                var a = n && ("load" === n.type ? "missing" : n.type), l = n && n.target && n.target.src;
                i.message = "Loading chunk " + t + " failed.\n(" + a + ": " + l + ")", i.name = "ChunkLoadError", i.type = a, i.request = l, r[1](i);
            } }, "chunk-" + t, t);
        } }; var t = function (t, n) { var r, a, l = n[0], i = n[1], u = n[2], s = 0; if (l.some(function (t) { return 0 !== e[t]; })) {
        for (r in i)
            o.o(i, r) && (o.m[r] = i[r]);
        u && u(o);
    } for (t && t(n); s < l.length; s++)
        a = l[s], o.o(e, a) && e[a] && e[a][0](), e[a] = 0; }, n = self.webpackChunkstart = self.webpackChunkstart || []; n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n)); })();
    var i = o(848), u = o(338), s = o(540), c = o.t(s, 2);
    function f() { return f = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, f.apply(this, arguments); }
    var d;
    !function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"; }(d || (d = {}));
    var p = "popstate";
    function h(e, t) { if (!1 === e || null == e)
        throw new Error(t); }
    function m(e, t) { if (!e) {
        "undefined" != typeof console && console.warn(t);
        try {
            throw new Error(t);
        }
        catch (e) { }
    } }
    function g(e, t) { return { usr: e.state, key: e.key, idx: t }; }
    function y(e, t, n, r) { return void 0 === n && (n = null), f({ pathname: "string" == typeof e ? e : e.pathname, search: "", hash: "" }, "string" == typeof t ? b(t) : t, { state: n, key: t && t.key || r || Math.random().toString(36).substr(2, 8) }); }
    function v(e) { var _b = e.pathname, t = _b === void 0 ? "/" : _b, _g = e.search, n = _g === void 0 ? "" : _g, _h = e.hash, r = _h === void 0 ? "" : _h; return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t; }
    function b(e) { var t = {}; if (e) {
        var n_2 = e.indexOf("#");
        n_2 >= 0 && (t.hash = e.substr(n_2), e = e.substr(0, n_2));
        var r_1 = e.indexOf("?");
        r_1 >= 0 && (t.search = e.substr(r_1), e = e.substr(0, r_1)), e && (t.pathname = e);
    } return t; }
    var w;
    !function (e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"; }(w || (w = {}));
    var k = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
    function S(e, t, n, r) { return void 0 === n && (n = []), void 0 === r && (r = {}), e.map(function (e, a) { var l = __spreadArray(__spreadArray([], n, true), [a], false), o = "string" == typeof e.id ? e.id : l.join("-"); if (h(!0 !== e.index || !e.children, "Cannot specify children on an index route"), h(!r[o], 'Found a route id collision on id "' + o + "\".  Route id's must be globally unique within Data Router usages"), function (e) { return !0 === e.index; }(e)) {
        var n_3 = f({}, e, t(e), { id: o });
        return r[o] = n_3, n_3;
    } {
        var n_4 = f({}, e, t(e), { id: o, children: void 0 });
        return r[o] = n_4, e.children && (n_4.children = S(e.children, t, l, r)), n_4;
    } }); }
    function E(e, t, n) { void 0 === n && (n = "/"); var r = U(("string" == typeof t ? b(t) : t).pathname || "/", n); if (null == r)
        return null; var a = C(e); !function (e) { e.sort(function (e, t) { return e.score !== t.score ? t.score - e.score : function (e, t) { return e.length === t.length && e.slice(0, -1).every(function (e, n) { return e === t[n]; }) ? e[e.length - 1] - t[t.length - 1] : 0; }(e.routesMeta.map(function (e) { return e.childrenIndex; }), t.routesMeta.map(function (e) { return e.childrenIndex; })); }); }(a); var l = null; for (var e_1 = 0; null == l && e_1 < a.length; ++e_1)
        l = D(a[e_1], A(r)); return l; }
    function C(e, t, n, r) { void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = ""); var a = function (e, a, l) { var o = { relativePath: void 0 === l ? e.path || "" : l, caseSensitive: !0 === e.caseSensitive, childrenIndex: a, route: e }; o.relativePath.startsWith("/") && (h(o.relativePath.startsWith(r), 'Absolute route path "' + o.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), o.relativePath = o.relativePath.slice(r.length)); var i = H([r, o.relativePath]), u = n.concat(o); e.children && e.children.length > 0 && (h(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + i + '".'), C(e.children, t, u, i)), (null != e.path || e.index) && t.push({ path: i, score: R(i, e.index), routesMeta: u }); }; return e.forEach(function (e, t) { var n; if ("" !== e.path && null != (n = e.path) && n.includes("?"))
        for (var _b = 0, _g = x(e.path); _b < _g.length; _b++) {
            var n_5 = _g[_b];
            a(e, t, n_5);
        }
    else
        a(e, t); }), t; }
    function x(e) { var t = e.split("/"); if (0 === t.length)
        return []; var n = t[0], r = t.slice(1), a = n.endsWith("?"), l = n.replace(/\?$/, ""); if (0 === r.length)
        return a ? [l, ""] : [l]; var o = x(r.join("/")), i = []; return i.push.apply(i, o.map(function (e) { return "" === e ? l : [l, e].join("/"); })), a && i.push.apply(i, o), i.map(function (t) { return e.startsWith("/") && "" === t ? "/" : t; }); }
    var P = /^:\w+$/, _ = 3, z = 2, T = 1, L = 10, O = -2, N = function (e) { return "*" === e; };
    function R(e, t) { var n = e.split("/"), r = n.length; return n.some(N) && (r += O), t && (r += z), n.filter(function (e) { return !N(e); }).reduce(function (e, t) { return e + (P.test(t) ? _ : "" === t ? T : L); }, r); }
    function D(e, t) { var n = e.routesMeta, r = {}, a = "/", l = []; for (var e_2 = 0; e_2 < n.length; ++e_2) {
        var o_1 = n[e_2], i_1 = e_2 === n.length - 1, u_1 = "/" === a ? t : t.slice(a.length) || "/", s_1 = M({ path: o_1.relativePath, caseSensitive: o_1.caseSensitive, end: i_1 }, u_1);
        if (!s_1)
            return null;
        Object.assign(r, s_1.params);
        var c_1 = o_1.route;
        l.push({ params: r, pathname: H([a, s_1.pathname]), pathnameBase: B(H([a, s_1.pathnameBase])), route: c_1 }), "/" !== s_1.pathnameBase && (a = H([a, s_1.pathnameBase]));
    } return l; }
    function M(e, t) { "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 }); var _b = function (e, t, n) { void 0 === t && (t = !1), void 0 === n && (n = !0), m("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".'); var r = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, function (e, t) { return (r.push(t), "/([^\\/]+)"); }); return e.endsWith("*") ? (r.push("*"), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), r]; }(e.path, e.caseSensitive, e.end), n = _b[0], r = _b[1], a = t.match(n); if (!a)
        return null; var l = a[0], o = l.replace(/(.)\/+$/, "$1"), i = a.slice(1); return { params: r.reduce(function (e, t, n) { if ("*" === t) {
            var e_3 = i[n] || "";
            o = l.slice(0, l.length - e_3.length).replace(/(.)\/+$/, "$1");
        } return e[t] = function (e, t) { try {
            return decodeURIComponent(e);
        }
        catch (n) {
            return m(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e;
        } }(i[n] || "", t), e; }, {}), pathname: l, pathnameBase: o, pattern: e }; }
    function A(e) { try {
        return decodeURI(e);
    }
    catch (t) {
        return m(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e;
    } }
    function U(e, t) { if ("/" === t)
        return e; if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null; var n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n); return r && "/" !== r ? null : e.slice(n) || "/"; }
    function F(e, t, n, r) { return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'; }
    function j(e) { return e.filter(function (e, t) { return 0 === t || e.route.path && e.route.path.length > 0; }); }
    function I(e, t, n, r) { var a; void 0 === r && (r = !1), "string" == typeof e ? a = b(e) : (a = f({}, e), h(!a.pathname || !a.pathname.includes("?"), F("?", "pathname", "search", a)), h(!a.pathname || !a.pathname.includes("#"), F("#", "pathname", "hash", a)), h(!a.search || !a.search.includes("#"), F("#", "search", "hash", a))); var l, o = "" === e || "" === a.pathname, i = o ? "/" : a.pathname; if (r || null == i)
        l = n;
    else {
        var e_4 = t.length - 1;
        if (i.startsWith("..")) {
            var t_1 = i.split("/");
            for (; ".." === t_1[0];)
                t_1.shift(), e_4 -= 1;
            a.pathname = t_1.join("/");
        }
        l = e_4 >= 0 ? t[e_4] : "/";
    } var u = function (e, t) { void 0 === t && (t = "/"); var _b = "string" == typeof e ? b(e) : e, n = _b.pathname, _g = _b.search, r = _g === void 0 ? "" : _g, _h = _b.hash, a = _h === void 0 ? "" : _h, l = n ? n.startsWith("/") ? n : function (e, t) { var n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach(function (e) { ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e); }), n.length > 1 ? n.join("/") : "/"; }(n, t) : t; return { pathname: l, search: $(r), hash: W(a) }; }(a, l), s = i && "/" !== i && i.endsWith("/"), c = (o || "." === i) && n.endsWith("/"); return u.pathname.endsWith("/") || !s && !c || (u.pathname += "/"), u; }
    var H = function (e) { return e.join("/").replace(/\/\/+/g, "/"); }, B = function (e) { return e.replace(/\/+$/, "").replace(/^\/*/, "/"); }, $ = function (e) { return e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""; }, W = function (e) { return e && "#" !== e ? e.startsWith("#") ? e : "#" + e : ""; };
    Error;
    var V = /** @class */ (function () {
        function V(e, t, n, r) {
            void 0 === r && (r = !1), this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
        }
        return V;
    }());
    function q(e) { return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e; }
    var Q = ["post", "put", "patch", "delete"], G = new Set(Q), K = __spreadArray(["get"], Q, true), Y = new Set(K), X = new Set([301, 302, 303, 307, 308]), Z = new Set([307, 308]), J = { state: "idle", location: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, ee = { state: "idle", data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, te = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 }, ne = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, re = function (e) { return ({ hasErrorBoundary: Boolean(e.hasErrorBoundary) }); };
    function ae(e, t, n, r, a, l, o) { var i, u; if (null != l && "path" !== o) {
        i = [];
        for (var _b = 0, t_2 = t; _b < t_2.length; _b++) {
            var e_5 = t_2[_b];
            if (i.push(e_5), e_5.route.id === l) {
                u = e_5;
                break;
            }
        }
    }
    else
        i = t, u = t[t.length - 1]; var s = I(a || ".", j(i).map(function (e) { return e.pathnameBase; }), U(e.pathname, n) || e.pathname, "path" === o); return null == a && (s.search = e.search, s.hash = e.hash), null != a && "" !== a && "." !== a || !u || !u.route.index || _e(s.search) || (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), r && "/" !== n && (s.pathname = "/" === s.pathname ? n : H([n, s.pathname])), v(s); }
    function le(e, t, n, r) { if (!r || !function (e) { return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body); }(r))
        return { path: n }; if (r.formMethod && (a = r.formMethod, !Y.has(a.toLowerCase())))
        return { path: n, error: ve(405, { method: r.formMethod }) }; var a; var l, o, i = function () { return ({ path: n, error: ve(400, { type: "invalid-body" }) }); }, u = r.formMethod || "get", s = e ? u.toUpperCase() : u.toLowerCase(), c = we(n); if (void 0 !== r.body) {
        if ("text/plain" === r.formEncType) {
            if (!Ce(s))
                return i();
            var e_6 = "string" == typeof r.body ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce(function (e, t) { var n = t[0], r = t[1]; return "" + e + n + "=" + r + "\n"; }, "") : String(r.body);
            return { path: n, submission: { formMethod: s, formAction: c, formEncType: r.formEncType, formData: void 0, json: void 0, text: e_6 } };
        }
        if ("application/json" === r.formEncType) {
            if (!Ce(s))
                return i();
            try {
                var e_7 = "string" == typeof r.body ? JSON.parse(r.body) : r.body;
                return { path: n, submission: { formMethod: s, formAction: c, formEncType: r.formEncType, formData: void 0, json: e_7, text: void 0 } };
            }
            catch (e) {
                return i();
            }
        }
    } if (h("function" == typeof FormData, "FormData is not available in this environment"), r.formData)
        l = de(r.formData), o = r.formData;
    else if (r.body instanceof FormData)
        l = de(r.body), o = r.body;
    else if (r.body instanceof URLSearchParams)
        l = r.body, o = pe(l);
    else if (null == r.body)
        l = new URLSearchParams, o = new FormData;
    else
        try {
            l = new URLSearchParams(r.body), o = pe(l);
        }
        catch (e) {
            return i();
        } var f = { formMethod: s, formAction: c, formEncType: r && r.formEncType || "application/x-www-form-urlencoded", formData: o, json: void 0, text: void 0 }; if (Ce(f.formMethod))
        return { path: n, submission: f }; var d = b(n); return t && d.search && _e(d.search) && l.append("index", ""), d.search = "?" + l, { path: v(d), submission: f }; }
    function oe(e, t, n, r, a, l, o, i, u, s, c, d, p, h) { var m = h ? Object.values(h)[0] : p ? Object.values(p)[0] : void 0, g = e.createURL(t.location), y = e.createURL(a), v = h ? Object.keys(h)[0] : void 0, b = function (e, t) { var n = e; if (t) {
        var r_2 = e.findIndex(function (e) { return e.route.id === t; });
        r_2 >= 0 && (n = e.slice(0, r_2));
    } return n; }(n, v).filter(function (e, n) { if (e.route.lazy)
        return !0; if (null == e.route.loader)
        return !1; if (function (e, t, n) { var r = !t || n.route.id !== t.route.id, a = void 0 === e[n.route.id]; return r || a; }(t.loaderData, t.matches[n], e) || o.some(function (t) { return t === e.route.id; }))
        return !0; var a = t.matches[n], i = e; return ue(e, f({ currentUrl: g, currentParams: a.params, nextUrl: y, nextParams: i.params }, r, { actionResult: m, defaultShouldRevalidate: l || g.pathname + g.search === y.pathname + y.search || g.search !== y.search || ie(a, i) })); }), w = []; return u.forEach(function (e, a) { if (!n.some(function (t) { return t.route.id === e.routeId; }))
        return; var o = E(c, e.path, d); if (!o)
        return void w.push({ key: a, routeId: e.routeId, path: e.path, matches: null, match: null, controller: null }); var u = t.fetchers.get(a), p = ze(o, e.path), h = !1; h = !s.has(a) && (!!i.includes(a) || (u && "idle" !== u.state && void 0 === u.data ? l : ue(p, f({ currentUrl: g, currentParams: t.matches[t.matches.length - 1].params, nextUrl: y, nextParams: n[n.length - 1].params }, r, { actionResult: m, defaultShouldRevalidate: l })))), h && w.push({ key: a, routeId: e.routeId, path: e.path, matches: o, match: p, controller: new AbortController }); }), [b, w]; }
    function ie(e, t) { var n = e.route.path; return e.pathname !== t.pathname || null != n && n.endsWith("*") && e.params["*"] !== t.params["*"]; }
    function ue(e, t) { if (e.route.shouldRevalidate) {
        var n_6 = e.route.shouldRevalidate(t);
        if ("boolean" == typeof n_6)
            return n_6;
    } return t.defaultShouldRevalidate; }
    function se(e, t, n) {
        return __awaiter(this, void 0, void 0, function () { var r, a, l, e_8, t_3; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!e.lazy)
                        return [2 /*return*/];
                    return [4 /*yield*/, e.lazy()];
                case 1:
                    r = _b.sent();
                    if (!e.lazy)
                        return [2 /*return*/];
                    a = n[e.id];
                    h(a, "No route found in manifest");
                    l = {};
                    for (e_8 in r) {
                        t_3 = void 0 !== a[e_8] && "hasErrorBoundary" !== e_8;
                        m(!t_3, 'Route "' + a.id + '" has a static property "' + e_8 + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e_8 + '" will be ignored.'), t_3 || k.has(e_8) || (l[e_8] = r[e_8]);
                    }
                    Object.assign(a, l), Object.assign(a, f({}, t(a), { lazy: void 0 }));
                    return [2 /*return*/];
            }
        }); });
    }
    function ce(e, t, n, r, a, l, o, i) {
        return __awaiter(this, void 0, void 0, function () { var u, s, c, f, r_3, e_10, t_4, e_11, r_4, e_12, e_9, e_13, a_1, e_14, n_7, r_5, a_2, l_1, _b, d, p, m; return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    void 0 === i && (i = {});
                    f = function (e) { var r, a = new Promise(function (e, t) { return r = t; }); return c = function () { return r(); }, t.signal.addEventListener("abort", c), Promise.race([e({ request: t, params: n.params, context: i.requestContext }), a]); };
                    _g.label = 1;
                case 1:
                    _g.trys.push([1, 10, 11, 12]);
                    r_3 = n.route[e];
                    if (!n.route.lazy) return [3 /*break*/, 7];
                    if (!r_3) return [3 /*break*/, 3];
                    return [4 /*yield*/, Promise.all([f(r_3).catch(function (t) { e_10 = t; }), se(n.route, l, a)])];
                case 2:
                    t_4 = _g.sent();
                    if (e_10)
                        throw e_10;
                    s = t_4[0];
                    return [3 /*break*/, 6];
                case 3: return [4 /*yield*/, se(n.route, l, a)];
                case 4:
                    if (_g.sent(), r_3 = n.route[e], !r_3) {
                        if ("action" === e) {
                            e_11 = new URL(t.url), r_4 = e_11.pathname + e_11.search;
                            throw ve(405, { method: t.method, pathname: r_4, routeId: n.route.id });
                        }
                        return [2 /*return*/, { type: w.data, data: void 0 }];
                    }
                    return [4 /*yield*/, f(r_3)];
                case 5:
                    s = _g.sent();
                    _g.label = 6;
                case 6: return [3 /*break*/, 9];
                case 7:
                    if (!r_3) {
                        e_12 = new URL(t.url);
                        throw ve(404, { pathname: e_12.pathname + e_12.search });
                    }
                    return [4 /*yield*/, f(r_3)];
                case 8:
                    s = _g.sent();
                    _g.label = 9;
                case 9:
                    h(void 0 !== s, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + n.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.");
                    return [3 /*break*/, 12];
                case 10:
                    e_9 = _g.sent();
                    u = w.error, s = e_9;
                    return [3 /*break*/, 12];
                case 11:
                    c && t.signal.removeEventListener("abort", c);
                    return [7 /*endfinally*/];
                case 12:
                    if (!(null != (d = s) && "number" == typeof d.status && "string" == typeof d.statusText && "object" == typeof d.headers && void 0 !== d.body)) return [3 /*break*/, 17];
                    a_1 = s.status;
                    if (X.has(a_1)) {
                        e_14 = s.headers.get("Location");
                        if (h(e_14, "Redirects returned/thrown from loaders/actions must have a Location header"), ne.test(e_14)) {
                            if (!i.isStaticRequest) {
                                n_7 = new URL(t.url), r_5 = e_14.startsWith("//") ? new URL(n_7.protocol + e_14) : new URL(e_14), a_2 = null != U(r_5.pathname, o);
                                r_5.origin === n_7.origin && a_2 && (e_14 = r_5.pathname + r_5.search + r_5.hash);
                            }
                        }
                        else
                            e_14 = ae(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, e_14);
                        if (i.isStaticRequest)
                            throw s.headers.set("Location", e_14), s;
                        return [2 /*return*/, { type: w.redirect, status: a_1, location: e_14, revalidate: null !== s.headers.get("X-Remix-Revalidate"), reloadDocument: null !== s.headers.get("X-Remix-Reload-Document") }];
                    }
                    if (i.isRouteRequest)
                        throw { type: u === w.error ? w.error : w.data, response: s };
                    l_1 = s.headers.get("Content-Type");
                    if (!(l_1 && /\bapplication\/json\b/.test(l_1))) return [3 /*break*/, 14];
                    return [4 /*yield*/, s.json()];
                case 13:
                    _b = _g.sent();
                    return [3 /*break*/, 16];
                case 14: return [4 /*yield*/, s.text()];
                case 15:
                    _b = _g.sent();
                    _g.label = 16;
                case 16: return [2 /*return*/, (e_13 = _b, u === w.error ? { type: u, error: new V(a_1, s.statusText, e_13), headers: s.headers } : { type: w.data, data: e_13, statusCode: s.status, headers: s.headers })];
                case 17: return [2 /*return*/, u === w.error ? { type: u, error: s } : function (e) { var t = e; return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData; }(s) ? { type: w.deferred, deferredData: s, statusCode: null == (p = s.init) ? void 0 : p.status, headers: (null == (m = s.init) ? void 0 : m.headers) && new Headers(s.init.headers) } : { type: w.data, data: s }];
            }
        }); });
    }
    function fe(e, t, n, r) { var a = e.createURL(we(t)).toString(), l = { signal: n }; if (r && Ce(r.formMethod)) {
        var e_15 = r.formMethod, t_5 = r.formEncType;
        l.method = e_15.toUpperCase(), "application/json" === t_5 ? (l.headers = new Headers({ "Content-Type": t_5 }), l.body = JSON.stringify(r.json)) : "text/plain" === t_5 ? l.body = r.text : "application/x-www-form-urlencoded" === t_5 && r.formData ? l.body = de(r.formData) : l.body = r.formData;
    } return new Request(a, l); }
    function de(e) { var t = new URLSearchParams; for (var _b = 0, _g = e.entries(); _b < _g.length; _b++) {
        var _h = _g[_b], n_8 = _h[0], r_6 = _h[1];
        t.append(n_8, "string" == typeof r_6 ? r_6 : r_6.name);
    } return t; }
    function pe(e) { var t = new FormData; for (var _b = 0, _g = e.entries(); _b < _g.length; _b++) {
        var _h = _g[_b], n_9 = _h[0], r_7 = _h[1];
        t.append(n_9, r_7);
    } return t; }
    function he(e, t, n, r, a, l, o, i) {
        var _b;
        var _g = function (e, t, n, r, a) { var l, o = {}, i = null, u = !1, s = {}; return n.forEach(function (n, c) { var f = t[c].route.id; if (h(!Ee(n), "Cannot handle redirect results in processLoaderData"), Se(n)) {
            var t_6 = ge(e, f), a_3 = n.error;
            r && (a_3 = Object.values(r)[0], r = void 0), i = i || {}, null == i[t_6.route.id] && (i[t_6.route.id] = a_3), o[f] = void 0, u || (u = !0, l = q(n.error) ? n.error.status : 500), n.headers && (s[f] = n.headers);
        }
        else
            ke(n) ? (a.set(f, n.deferredData), o[f] = n.deferredData.data) : o[f] = n.data, null == n.statusCode || 200 === n.statusCode || u || (l = n.statusCode), n.headers && (s[f] = n.headers); }), r && (i = r, o[Object.keys(r)[0]] = void 0), { loaderData: o, errors: i, statusCode: l || 200, loaderHeaders: s }; }(t, n, r, a, i), u = _g.loaderData, s = _g.errors;
        for (var t_7 = 0; t_7 < l.length; t_7++) {
            var _h = l[t_7], n_10 = _h.key, r_8 = _h.match, a_4 = _h.controller;
            h(void 0 !== o && void 0 !== o[t_7], "Did not find corresponding fetcher result");
            var i_2 = o[t_7];
            if (!a_4 || !a_4.signal.aborted)
                if (Se(i_2)) {
                    var t_8 = ge(e.matches, null == r_8 ? void 0 : r_8.route.id);
                    s && s[t_8.route.id] || (s = f({}, s, (_b = {}, _b[t_8.route.id] = i_2.error, _b))), e.fetchers.delete(n_10);
                }
                else if (Ee(i_2))
                    h(!1, "Unhandled fetcher revalidation redirect");
                else if (ke(i_2))
                    h(!1, "Unhandled fetcher deferred data");
                else {
                    var t_9 = Ne(i_2.data);
                    e.fetchers.set(n_10, t_9);
                }
        }
        return { loaderData: u, errors: s };
    }
    function me(e, t, n, r) { var a = f({}, t); for (var _b = 0, n_11 = n; _b < n_11.length; _b++) {
        var l_2 = n_11[_b];
        var n_12 = l_2.route.id;
        if (t.hasOwnProperty(n_12) ? void 0 !== t[n_12] && (a[n_12] = t[n_12]) : void 0 !== e[n_12] && l_2.route.loader && (a[n_12] = e[n_12]), r && r.hasOwnProperty(n_12))
            break;
    } return a; }
    function ge(e, t) { return (t ? e.slice(0, e.findIndex(function (e) { return e.route.id === t; }) + 1) : __spreadArray([], e, true)).reverse().find(function (e) { return !0 === e.route.hasErrorBoundary; }) || e[0]; }
    function ye(e) { var t = e.find(function (e) { return e.index || !e.path || "/" === e.path; }) || { id: "__shim-error-route__" }; return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }], route: t }; }
    function ve(e, t) { var _b = void 0 === t ? {} : t, n = _b.pathname, r = _b.routeId, a = _b.method, l = _b.type, o = "Unknown Server Error", i = "Unknown @remix-run/router error"; return 400 === e ? (o = "Bad Request", a && n && r ? i = "You made a " + a + ' request to "' + n + '" but did not provide a `loader` for route "' + r + '", so there is no way to handle the request.' : "defer-action" === l ? i = "defer() is not supported in actions" : "invalid-body" === l && (i = "Unable to encode submission body")) : 403 === e ? (o = "Forbidden", i = 'Route "' + r + '" does not match URL "' + n + '"') : 404 === e ? (o = "Not Found", i = 'No route matches URL "' + n + '"') : 405 === e && (o = "Method Not Allowed", a && n && r ? i = "You made a " + a.toUpperCase() + ' request to "' + n + '" but did not provide an `action` for route "' + r + '", so there is no way to handle the request.' : a && (i = 'Invalid request method "' + a.toUpperCase() + '"')), new V(e || 500, o, new Error(i), !0); }
    function be(e) { for (var t_10 = e.length - 1; t_10 >= 0; t_10--) {
        var n_13 = e[t_10];
        if (Ee(n_13))
            return { result: n_13, idx: t_10 };
    } }
    function we(e) { return v(f({}, "string" == typeof e ? b(e) : e, { hash: "" })); }
    function ke(e) { return e.type === w.deferred; }
    function Se(e) { return e.type === w.error; }
    function Ee(e) { return (e && e.type) === w.redirect; }
    function Ce(e) { return G.has(e.toLowerCase()); }
    function xe(e, t, n, r, a, l) {
        return __awaiter(this, void 0, void 0, function () { var _loop_1, o_2; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _loop_1 = function (o_2) {
                        var i_3, u_2, s_2, c_2, e_16;
                        return __generator(this, function (_g) {
                            switch (_g.label) {
                                case 0:
                                    i_3 = n[o_2], u_2 = t[o_2];
                                    if (!u_2)
                                        return [2 /*return*/, "continue"];
                                    s_2 = e.find(function (e) { return e.route.id === u_2.route.id; }), c_2 = null != s_2 && !ie(s_2, u_2) && void 0 !== (l && l[u_2.route.id]);
                                    if (!(ke(i_3) && (a || c_2))) return [3 /*break*/, 2];
                                    e_16 = r[o_2];
                                    h(e_16, "Expected an AbortSignal for revalidating fetcher deferred result");
                                    return [4 /*yield*/, Pe(i_3, e_16, a).then(function (e) { e && (n[o_2] = e || n[o_2]); })];
                                case 1:
                                    _g.sent();
                                    _g.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    };
                    o_2 = 0;
                    _b.label = 1;
                case 1:
                    if (!(o_2 < n.length)) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_1(o_2)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    o_2++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        }); });
    }
    function Pe(e, t, n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    void 0 === n && (n = !1);
                    return [4 /*yield*/, e.deferredData.resolveData(t)];
                case 1:
                    if (!(_b.sent())) {
                        if (n)
                            try {
                                return [2 /*return*/, { type: w.data, data: e.deferredData.unwrappedData }];
                            }
                            catch (e) {
                                return [2 /*return*/, { type: w.error, error: e }];
                            }
                        return [2 /*return*/, { type: w.data, data: e.deferredData.data }];
                    }
                    return [2 /*return*/];
            }
        }); });
    }
    function _e(e) { return new URLSearchParams(e).getAll("index").some(function (e) { return "" === e; }); }
    function ze(e, t) { var n = "string" == typeof t ? b(t).search : t.search; if (e[e.length - 1].route.index && _e(n || ""))
        return e[e.length - 1]; var r = j(e); return r[r.length - 1]; }
    function Te(e) { var t = e.formMethod, n = e.formAction, r = e.formEncType, a = e.text, l = e.formData, o = e.json; if (t && n && r)
        return null != a ? { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: void 0, text: a } : null != l ? { formMethod: t, formAction: n, formEncType: r, formData: l, json: void 0, text: void 0 } : void 0 !== o ? { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: o, text: void 0 } : void 0; }
    function Le(e, t) { return t ? { state: "loading", location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text } : { state: "loading", location: e, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }; }
    function Oe(e, t) { return e ? { state: "loading", formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t } : { state: "loading", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: t }; }
    function Ne(e) { return { state: "idle", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: e }; }
    function Re() { return Re = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, Re.apply(this, arguments); }
    Symbol("deferred");
    var De = s.createContext(null), Me = s.createContext(null), Ae = s.createContext(null), Ue = s.createContext(null), Fe = s.createContext({ outlet: null, matches: [], isDataRoute: !1 }), je = s.createContext(null);
    function Ie() { return null != s.useContext(Ue); }
    function He() { return Ie() || h(!1), s.useContext(Ue).location; }
    function Be(e) { s.useContext(Ae).static || s.useLayoutEffect(e); }
    function $e() { var e = s.useContext(Fe).isDataRoute; return e ? function () { var e = function () { var e = s.useContext(De); return e || h(!1), e; }(Xe.UseNavigateStable).router, t = Je(Ze.UseNavigateStable), n = s.useRef(!1); Be(function () { n.current = !0; }); var r = s.useCallback(function (r, a) { void 0 === a && (a = {}), n.current && ("number" == typeof r ? e.navigate(r) : e.navigate(r, Re({ fromRouteId: t }, a))); }, [e, t]); return r; }() : function () { Ie() || h(!1); var e = s.useContext(De), _b = s.useContext(Ae), t = _b.basename, n = _b.navigator, r = s.useContext(Fe).matches, a = He().pathname, l = JSON.stringify(j(r).map(function (e) { return e.pathnameBase; })), o = s.useRef(!1); return Be(function () { o.current = !0; }), s.useCallback(function (r, i) { if (void 0 === i && (i = {}), !o.current)
        return; if ("number" == typeof r)
        return void n.go(r); var u = I(r, JSON.parse(l), a, "path" === i.relative); null == e && "/" !== t && (u.pathname = "/" === u.pathname ? t : H([t, u.pathname])), (i.replace ? n.replace : n.push)(u, i.state, i); }, [t, n, l, a, e]); }(); }
    var We = s.createContext(null);
    function Ve(e, t) { var n = (void 0 === t ? {} : t).relative, r = s.useContext(Fe).matches, a = He().pathname, l = JSON.stringify(j(r).map(function (e) { return e.pathnameBase; })); return s.useMemo(function () { return I(e, JSON.parse(l), a, "path" === n); }, [e, l, a, n]); }
    function qe(e, t, n) { Ie() || h(!1); var r = s.useContext(Ae).navigator, a = s.useContext(Fe).matches, l = a[a.length - 1], o = l ? l.params : {}, i = (l && l.pathname, l ? l.pathnameBase : "/"); l && l.route; var u, c = He(); if (t) {
        var f;
        var e_17 = "string" == typeof t ? b(t) : t;
        "/" === i || (null == (f = e_17.pathname) ? void 0 : f.startsWith(i)) || h(!1), u = e_17;
    }
    else
        u = c; var p = u.pathname || "/", m = E(e, { pathname: "/" === i ? p : p.slice(i.length) || "/" }), g = function (e, t, n) { var r; if (void 0 === t && (t = []), void 0 === n && (n = null), null == e) {
        var a;
        if (null == (a = n) || !a.errors)
            return null;
        e = n.matches;
    } var l = e, o = null == (r = n) ? void 0 : r.errors; if (null != o) {
        var e_18 = l.findIndex(function (e) { return e.route.id && (null == o ? void 0 : o[e.route.id]); });
        e_18 >= 0 || h(!1), l = l.slice(0, Math.min(l.length, e_18 + 1));
    } return l.reduceRight(function (e, r, a) { var i = r.route.id ? null == o ? void 0 : o[r.route.id] : null, u = null; n && (u = r.route.errorElement || Ge); var c = t.concat(l.slice(0, a + 1)), f = function () { var t; return t = i ? u : r.route.Component ? s.createElement(r.route.Component, null) : r.route.element ? r.route.element : e, s.createElement(Ye, { match: r, routeContext: { outlet: e, matches: c, isDataRoute: null != n }, children: t }); }; return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === a) ? s.createElement(Ke, { location: n.location, revalidation: n.revalidation, component: u, error: i, children: f(), routeContext: { outlet: null, matches: c, isDataRoute: !0 } }) : f(); }, null); }(m && m.map(function (e) { return Object.assign({}, e, { params: Object.assign({}, o, e.params), pathname: H([i, r.encodeLocation ? r.encodeLocation(e.pathname).pathname : e.pathname]), pathnameBase: "/" === e.pathnameBase ? i : H([i, r.encodeLocation ? r.encodeLocation(e.pathnameBase).pathname : e.pathnameBase]) }); }), a, n); return t && g ? s.createElement(Ue.Provider, { value: { location: Re({ pathname: "/", search: "", hash: "", state: null, key: "default" }, u), navigationType: d.Pop } }, g) : g; }
    function Qe() { var e = function () { var e; var t = s.useContext(je), n = function () { var e = s.useContext(Me); return e || h(!1), e; }(Ze.UseRouteError), r = Je(Ze.UseRouteError); return t || (null == (e = n.errors) ? void 0 : e[r]); }(), t = q(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" }; return s.createElement(s.Fragment, null, s.createElement("h2", null, "Unexpected Application Error!"), s.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? s.createElement("pre", { style: r }, n) : null, null); }
    var Ge = s.createElement(Qe, null);
    var Ke = /** @class */ (function (_super) {
        __extends(Ke, _super);
        function Ke(e) {
            var _this = this;
            _this = _super.call(this, e) || this, _this.state = { location: e.location, revalidation: e.revalidation, error: e.error };
            return _this;
        }
        Ke.getDerivedStateFromError = function (e) { return { error: e }; };
        Ke.getDerivedStateFromProps = function (e, t) { return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? { error: e.error, location: e.location, revalidation: e.revalidation } : { error: e.error || t.error, location: t.location, revalidation: e.revalidation || t.revalidation }; };
        Ke.prototype.componentDidCatch = function (e, t) { console.error("React Router caught the following error during render", e, t); };
        Ke.prototype.render = function () { return this.state.error ? s.createElement(Fe.Provider, { value: this.props.routeContext }, s.createElement(je.Provider, { value: this.state.error, children: this.props.component })) : this.props.children; };
        return Ke;
    }(s.Component));
    function Ye(e) { var t = e.routeContext, n = e.match, r = e.children, a = s.useContext(De); return a && a.static && a.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = n.route.id), s.createElement(Fe.Provider, { value: t }, r); }
    var Xe = function (e) { return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e; }(Xe || {}), Ze = function (e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e; }(Ze || {});
    function Je(e) { var t = function () { var e = s.useContext(Fe); return e || h(!1), e; }(), n = t.matches[t.matches.length - 1]; return n.route.id || h(!1), n.route.id; }
    var et = c.startTransition;
    function tt(e) { var t = e.routes, n = e.state; return qe(t, void 0, n); }
    function nt(e) { return function (e) { var t = s.useContext(Fe).outlet; return t ? s.createElement(We.Provider, { value: e }, t) : t; }(e.context); }
    function rt(e) { var _b = e.basename, t = _b === void 0 ? "/" : _b, _g = e.children, n = _g === void 0 ? null : _g, r = e.location, _h = e.navigationType, a = _h === void 0 ? d.Pop : _h, l = e.navigator, _j = e.static, o = _j === void 0 ? !1 : _j; Ie() && h(!1); var i = t.replace(/^\/*/, "/"), u = s.useMemo(function () { return ({ basename: i, navigator: l, static: o }); }, [i, l, o]); "string" == typeof r && (r = b(r)); var _k = r.pathname, c = _k === void 0 ? "/" : _k, _m = r.search, f = _m === void 0 ? "" : _m, _q = r.hash, p = _q === void 0 ? "" : _q, _v = r.state, m = _v === void 0 ? null : _v, _w = r.key, g = _w === void 0 ? "default" : _w, y = s.useMemo(function () { var e = U(c, i); return null == e ? null : { location: { pathname: e, search: f, hash: p, state: m, key: g }, navigationType: a }; }, [i, c, f, p, m, g, a]); return null == y ? null : s.createElement(Ae.Provider, { value: u }, s.createElement(Ue.Provider, { children: n, value: y })); }
    function at() { return at = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, at.apply(this, arguments); }
    new Promise(function () { }), s.Component, new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
    var lt = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
    function ot(e) { if (!e)
        return null; var t = Object.entries(e), n = {}; for (var _b = 0, t_11 = t; _b < t_11.length; _b++) {
        var _g = t_11[_b], e_19 = _g[0], r_9 = _g[1];
        if (r_9 && "RouteErrorResponse" === r_9.__type)
            n[e_19] = new V(r_9.status, r_9.statusText, r_9.data, !0 === r_9.internal);
        else if (r_9 && "Error" === r_9.__type) {
            if (r_9.__subType) {
                var t_12 = window[r_9.__subType];
                if ("function" == typeof t_12)
                    try {
                        var a_5 = new t_12(r_9.message);
                        a_5.stack = "", n[e_19] = a_5;
                    }
                    catch (e) { }
            }
            if (null == n[e_19]) {
                var t_13 = new Error(r_9.message);
                t_13.stack = "", n[e_19] = t_13;
            }
        }
        else
            n[e_19] = r_9;
    } return n; }
    c.startTransition;
    var it = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement, ut = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, st = s.forwardRef(function (e, t) { var n, r = e.onClick, a = e.relative, l = e.reloadDocument, o = e.replace, i = e.state, u = e.target, c = e.to, f = e.preventScrollReset, d = function (e, t) { if (null == e)
        return {}; var n, r, a = {}, l = Object.keys(e); for (r = 0; r < l.length; r++)
        n = l[r], t.indexOf(n) >= 0 || (a[n] = e[n]); return a; }(e, lt), p = s.useContext(Ae).basename, m = !1; if ("string" == typeof c && ut.test(c) && (n = c, it))
        try {
            var e_20 = new URL(window.location.href), t_14 = c.startsWith("//") ? new URL(e_20.protocol + c) : new URL(c), n_14 = U(t_14.pathname, p);
            t_14.origin === e_20.origin && null != n_14 ? c = n_14 + t_14.search + t_14.hash : m = !0;
        }
        catch (e) { } var g = function (e, t) { var n = (void 0 === t ? {} : t).relative; Ie() || h(!1); var _b = s.useContext(Ae), r = _b.basename, a = _b.navigator, _g = Ve(e, { relative: n }), l = _g.hash, o = _g.pathname, i = _g.search, u = o; return "/" !== r && (u = "/" === o ? r : H([r, o])), a.createHref({ pathname: u, search: i, hash: l }); }(c, { relative: a }), y = function (e, t) { var _b = void 0 === t ? {} : t, n = _b.target, r = _b.replace, a = _b.state, l = _b.preventScrollReset, o = _b.relative, i = $e(), u = He(), c = Ve(e, { relative: o }); return s.useCallback(function (t) { if (function (e, t) { return !(0 !== e.button || t && "_self" !== t || function (e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey); }(e)); }(t, n)) {
        t.preventDefault();
        var n_15 = void 0 !== r ? r : v(u) === v(c);
        i(e, { replace: n_15, state: a, preventScrollReset: l, relative: o });
    } }, [u, i, c, r, a, n, e, l, o]); }(c, { replace: o, state: i, target: u, preventScrollReset: f, relative: a }); return s.createElement("a", at({}, d, { href: n || g, onClick: m || l ? r : function (e) { r && r(e), e.defaultPrevented || y(e); }, ref: t, target: u })); });
    var ct, ft;
    (function (e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher"; })(ct || (ct = {})), function (e) { e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"; }(ft || (ft = {}));
    var dt = o.p + "09f6debbda79c9dabf05.png", pt = o.p + "edf377dd4f6ccd3ea7be.jpg";
    var ht, mt;
    function gt() { return gt = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, gt.apply(null, arguments); }
    var yt = function (e) { return s.createElement("svg", gt({ width: "1em", height: "1em", id: "Firefox_-_Large", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 1024 1024" }, e), ht || (ht = s.createElement("defs", null, s.createElement("radialGradient", { id: "radial-gradient", cx: -14480.522, cy: -8329.079, fx: -14509.281265145226, r: 450.875, gradientTransform: "matrix(0.762, 0.034, -0.05, 1.12, 11560.893, 10069.103)", gradientUnits: "userSpaceOnUse" }, s.createElement("stop", { offset: .045, stopColor: "currentColor" }), s.createElement("stop", { offset: .12, stopColor: "currentColor" }), s.createElement("stop", { offset: .254, stopColor: "currentColor" }), s.createElement("stop", { offset: .429, stopColor: "currentColor" }), s.createElement("stop", { offset: .769, stopColor: "currentColor" }), s.createElement("stop", { offset: .872, stopColor: "currentColor" }), s.createElement("stop", { offset: .953, stopColor: "currentColor" }), s.createElement("stop", { offset: 1, stopColor: "currentColor" })), s.createElement("radialGradient", { id: "radial-gradient-2", cx: -7529.669, cy: -7921.608, r: 791.229, gradientTransform: "translate(9921.963 9899.103) scale(1.225 1.225)", gradientUnits: "userSpaceOnUse" }, s.createElement("stop", { offset: 0, stopColor: "currentColor" }), s.createElement("stop", { offset: .22, stopColor: "currentColor" }), s.createElement("stop", { offset: .261, stopColor: "currentColor" }), s.createElement("stop", { offset: .33, stopColor: "currentColor" }), s.createElement("stop", { offset: .333, stopColor: "currentColor" }), s.createElement("stop", { offset: .438, stopColor: "currentColor" }), s.createElement("stop", { offset: .522, stopColor: "currentColor" }), s.createElement("stop", { offset: .566, stopColor: "currentColor" })), s.createElement("linearGradient", { id: "linear-gradient", x1: 575.669, y1: 731.188, x2: 384.231, y2: 104.96, gradientUnits: "userSpaceOnUse" }, s.createElement("stop", { offset: 0, stopColor: "currentColor", stopOpacity: .4 }), s.createElement("stop", { offset: .485, stopColor: "currentColor", stopOpacity: .173 }), s.createElement("stop", { offset: 1, stopColor: "currentColor", stopOpacity: 0 })), s.createElement("radialGradient", { id: "radial-gradient-3", cx: -8260.94, cy: -6516.556, r: 266.886, gradientTransform: "matrix(1.219, 0.123, -0.123, 1.219, 10296.265, 9597.23)", gradientUnits: "userSpaceOnUse" }, s.createElement("stop", { offset: .003, stopColor: "currentColor" }), s.createElement("stop", { offset: .497, stopColor: "currentColor" }), s.createElement("stop", { offset: 1, stopColor: "currentColor" })), s.createElement("radialGradient", { id: "radial-gradient-4", cx: -8285.087, cy: -6772.468, r: 445.678, gradientTransform: "matrix(1.219, 0.123, -0.123, 1.219, 10296.265, 9597.23)", gradientUnits: "userSpaceOnUse" }, s.createElement("stop", { offset: .003, stopColor: "currentColor" }), s.createElement("stop", { offset: .157, stopColor: "currentColor" }), s.createElement("stop", { offset: .316, stopColor: "currentColor" }), s.createElement("stop", { offset: .472, stopColor: "currentColor" }), s.createElement("stop", { offset: .621, stopColor: "currentColor" }), s.createElement("stop", { offset: .762, stopColor: "currentColor" }), s.createElement("stop", { offset: .892, stopColor: "currentColor" }), s.createElement("stop", { offset: 1, stopColor: "currentColor" })), s.createElement("radialGradient", { id: "radial-gradient-5", cx: -8222.051, cy: -6359.332, r: 408.958, gradientTransform: "matrix(1.219, 0.123, -0.123, 1.219, 10296.265, 9597.23)", gradientUnits: "userSpaceOnUse" }, s.createElement("stop", { offset: .003, stopColor: "currentColor" }), s.createElement("stop", { offset: .497, stopColor: "currentColor" }), s.createElement("stop", { offset: .986, stopColor: "currentColor" })), s.createElement("radialGradient", { id: "radial-gradient-6", cx: 750.189, cy: 396.041, fx: 778.1665281038617, fy: 382.2124050106231, r: 782.18, gradientUnits: "userSpaceOnUse" }, s.createElement("stop", { offset: .156, stopColor: "currentColor" }), s.createElement("stop", { offset: .231, stopColor: "currentColor" }), s.createElement("stop", { offset: .365, stopColor: "currentColor" }), s.createElement("stop", { offset: .541, stopColor: "currentColor" }), s.createElement("stop", { offset: .763, stopColor: "currentColor" }), s.createElement("stop", { offset: .796, stopColor: "currentColor" }), s.createElement("stop", { offset: .841, stopColor: "currentColor" }), s.createElement("stop", { offset: .893, stopColor: "currentColor" }), s.createElement("stop", { offset: .935, stopColor: "currentColor" })), s.createElement("radialGradient", { id: "radial-gradient-7", cx: 691.339, cy: 3.289, r: 923.615, gradientUnits: "userSpaceOnUse" }, s.createElement("stop", { offset: .279, stopColor: "currentColor" }), s.createElement("stop", { offset: .402, stopColor: "currentColor" }), s.createElement("stop", { offset: .63, stopColor: "currentColor" }), s.createElement("stop", { offset: .856, stopColor: "currentColor" }), s.createElement("stop", { offset: .933, stopColor: "currentColor" }), s.createElement("stop", { offset: .994, stopColor: "currentColor" })), s.createElement("linearGradient", { id: "linear-gradient-2", x1: -8944.65, y1: -6677.742, x2: -8660.289, y2: -6750.226, gradientTransform: "matrix(1.219, 0.123, -0.123, 1.219, 10296.265, 9597.23)", gradientUnits: "userSpaceOnUse" }, s.createElement("stop", { offset: 0, stopColor: "currentColor", stopOpacity: .5 }), s.createElement("stop", { offset: .474, stopColor: "currentColor", stopOpacity: .5 }), s.createElement("stop", { offset: .486, stopColor: "currentColor", stopOpacity: .513 }), s.createElement("stop", { offset: .675, stopColor: "currentColor", stopOpacity: .72 }), s.createElement("stop", { offset: .829, stopColor: "currentColor", stopOpacity: .871 }), s.createElement("stop", { offset: .942, stopColor: "currentColor", stopOpacity: .964 }), s.createElement("stop", { offset: 1, stopColor: "currentColor" })), s.createElement("linearGradient", { id: "linear-gradient-3", x1: 245.347, y1: -1082.012, x2: 190.775, y2: -1221.859, gradientTransform: "matrix(0.995, 0.1, -0.1, 0.995, -173.696, 1313.941)", gradientUnits: "userSpaceOnUse" }, s.createElement("stop", { offset: 0, stopColor: "currentColor", stopOpacity: .6 }), s.createElement("stop", { offset: 1, stopColor: "currentColor", stopOpacity: 0 })), s.createElement("linearGradient", { id: "linear-gradient-4", x1: 22.04, y1: 718.827, x2: 116.148, y2: 825.714, gradientTransform: "matrix(0.995, 0.1, -0.1, 0.995, 305.439, -246.471)", gradientUnits: "userSpaceOnUse" }, s.createElement("stop", { offset: .005, stopColor: "currentColor", stopOpacity: .5 }), s.createElement("stop", { offset: .484, stopColor: "currentColor", stopOpacity: .5 }), s.createElement("stop", { offset: 1, stopColor: "currentColor", stopOpacity: 0 })), s.createElement("linearGradient", { id: "linear-gradient-5", x1: 200.104, y1: 904.616, x2: 200.171, y2: 829.835, gradientTransform: "matrix(0.995, 0.1, -0.1, 0.995, 305.439, -246.471)", gradientUnits: "userSpaceOnUse" }, s.createElement("stop", { offset: 0, stopColor: "currentColor" }), s.createElement("stop", { offset: .083, stopColor: "currentColor", stopOpacity: .81 }), s.createElement("stop", { offset: .206, stopColor: "currentColor", stopOpacity: .565 }), s.createElement("stop", { offset: .328, stopColor: "currentColor", stopOpacity: .362 }), s.createElement("stop", { offset: .447, stopColor: "currentColor", stopOpacity: .204 }), s.createElement("stop", { offset: .562, stopColor: "currentColor", stopOpacity: .091 }), s.createElement("stop", { offset: .673, stopColor: "currentColor", stopOpacity: .023 }), s.createElement("stop", { offset: .773, stopColor: "currentColor", stopOpacity: 0 })), s.createElement("linearGradient", { id: "linear-gradient-6", x1: 655.531, y1: 38.12, x2: 961.187, y2: 721.615, gradientUnits: "userSpaceOnUse" }, s.createElement("stop", { offset: 0, stopColor: "currentColor" }), s.createElement("stop", { offset: .268, stopColor: "currentColor" }), s.createElement("stop", { offset: .452, stopColor: "currentColor" }), s.createElement("stop", { offset: .612, stopColor: "currentColor" }), s.createElement("stop", { offset: .757, stopColor: "currentColor" }), s.createElement("stop", { offset: .892, stopColor: "currentColor" }), s.createElement("stop", { offset: .902, stopColor: "currentColor" }), s.createElement("stop", { offset: .949, stopColor: "currentColor" }), s.createElement("stop", { offset: 1, stopColor: "currentColor" })), s.createElement("linearGradient", { id: "linear-gradient-7", x1: 715.885, y1: 431.21, x2: 571.098, y2: 819.96, gradientUnits: "userSpaceOnUse" }, s.createElement("stop", { offset: 0, stopColor: "currentColor" }), s.createElement("stop", { offset: .04, stopColor: "currentColor", stopOpacity: .858 }), s.createElement("stop", { offset: .084, stopColor: "currentColor", stopOpacity: .729 }), s.createElement("stop", { offset: .13, stopColor: "currentColor", stopOpacity: .628 }), s.createElement("stop", { offset: .178, stopColor: "currentColor", stopOpacity: .557 }), s.createElement("stop", { offset: .227, stopColor: "currentColor", stopOpacity: .514 }), s.createElement("stop", { offset: .282, stopColor: "currentColor", stopOpacity: .5 }), s.createElement("stop", { offset: .389, stopColor: "currentColor", stopOpacity: .478 }), s.createElement("stop", { offset: .524, stopColor: "currentColor", stopOpacity: .416 }), s.createElement("stop", { offset: .676, stopColor: "currentColor", stopOpacity: .314 }), s.createElement("stop", { offset: .838, stopColor: "currentColor", stopOpacity: .172 }), s.createElement("stop", { offset: 1, stopColor: "currentColor", stopOpacity: 0 })))), mt || (mt = s.createElement("title", null, "firefox-logo")), s.createElement("g", null, s.createElement("path", { d: "M805.285,93.558c-23.947,27.884-35.1,90.639-10.818,154.256s61.5,49.8,84.7,114.673c30.623,85.6,16.369,200.589,16.369,200.589s36.814,106.609,62.468-6.633C1014.787,343.74,805.285,145.937,805.285,93.558Z", style: { fill: "url(#radial-gradient)" } }), s.createElement("path", { id: "_Path_", d: "M513.072,976.638c245.236,0,443.9-199.739,443.9-446.028S758.308,84.583,513.31,84.583,69.65,284.322,69.65,530.61C69.175,777.137,268.073,976.638,513.072,976.638Z", style: { fill: "url(#radial-gradient-2)" } }), s.createElement("path", { d: "M845.675,805.636a246.888,246.888,0,0,1-30.123,18.183,704,704,0,0,0,38.3-62.961c9.46-10.47,18.126-20.648,25.188-31.653,3.437-5.407,7.313-12.079,11.416-19.819,24.921-44.9,52.4-117.563,53.179-192.2l0-.18c.018-1.837.029-3.675.014-5.515a257.6,257.6,0,0,0-5.712-55.748c.2,1.431.376,2.861.556,4.291-.221-1.1-.407-2.212-.644-3.314.366,2.034.66,4,.976,5.983,5.094,43.217,1.466,85.372-16.682,116.45-.286.454-.58.879-.869,1.323,9.41-47.234,12.558-99.387,2.088-151.6,0,0-4.187-25.383-35.376-102.441-17.952-44.353-49.833-80.716-78-107.207-24.69-30.546-47.114-51.045-59.475-64.06-25.821-27.189-36.643-47.569-41.087-60.867-3.853-1.932-53.135-49.807-57.05-51.631-21.511,33.352-89.162,137.675-56.981,235.146,14.584,44.172,51.467,90.017,90.067,115.736,1.695,1.936,22.969,25.042,33.086,77.157C728.992,524.551,723.5,566.564,702,628.692c-25.286,54.505-90.067,108.388-150.724,113.9C421.6,754.373,374.127,677.484,374.127,677.484c46.336,18.525,97.568,14.65,128.724-4.556,31.4-19.425,50.394-33.827,65.81-28.148,15.2,5.653,27.3-10.756,16.442-27.767a78.5,78.5,0,0,0-79.4-34.573c-31.433,5.109-60.226,30.009-101.412,5.894a85.528,85.528,0,0,1-7.729-5.062c-2.715-1.785,8.826,2.717,6.133.688-8.015-4.354-22.2-13.842-25.88-17.217-.613-.562,6.219,2.179,5.606,1.616-38.51-31.712-33.7-53.134-32.49-66.57.969-10.749,7.964-24.523,19.751-30.11,5.693,3.107,9.24,5.479,9.24,5.479s-2.428-4.961-3.741-7.576c.46-.2.9-.147,1.358-.342,4.664,2.251,14.977,8.1,20.407,11.667,7.072,4.988,9.326,9.436,9.326,9.436s1.862-1.025.485-5.375c-.5-1.784-2.647-7.453-9.652-13.174l.438.049a81.2,81.2,0,0,1,11.867,8.241c1.975-7.181,5.527-14.679,4.746-28.092-.477-9.431-.257-11.873-1.919-15.515-1.488-3.128.834-4.348,3.418-1.1a32.826,32.826,0,0,0-2.208-7.4l.022-.244c3.225-11.236,68.248-40.461,72.981-43.877a67.355,67.355,0,0,0,19.132-20.8c3.617-5.763,6.337-13.848,7-26.112.355-8.844-3.759-14.734-69.507-21.618-17.981-1.771-28.531-14.8-34.526-26.823-1.094-2.59-2.209-4.937-3.325-7.282a58,58,0,0,1-2.558-8.431c10.749-30.873,28.81-56.977,55.367-76.7,1.447-1.318-5.782.338-4.336-.98,1.687-1.538,12.706-5.977,14.787-6.977,2.542-1.2-10.882-6.9-22.732-5.512-12.069,1.36-14.632,2.8-21.073,5.531,2.673-2.661,11.173-6.149,9.18-6.126-13.011,1.995-29.179,9.558-43,18.124a10.731,10.731,0,0,1,.835-4.348c-6.441,2.732-22.26,13.788-26.865,23.142a44.329,44.329,0,0,0,.266-5.4A84.483,84.483,0,0,0,351.9,227.362l-.241.219c-37.358-15.05-70.233-16.024-98.053-9.276-6.086-6.112-9.059-1.644-22.907-32.069-.941-1.832.722,1.809,0,0-2.278-5.9,1.389,7.872,0,0-23.284,18.372-53.92,39.193-68.626,53.89-.182.586,17.156-4.9,0,0-6.008,1.716-5.6,5.281-6.513,37.5-.22,2.443-.025,5.179-.223,7.378-11.748,14.968-19.749,27.643-22.775,34.211-15.193,26.18-31.926,66.992-48.146,131.551A334.364,334.364,0,0,1,110.2,400.365c-13.488,34.267-26.527,88.078-29.134,170.945a483.614,483.614,0,0,1,12.533-50.66,473.038,473.038,0,0,0,34.74,201.061c9.329,22.821,24.76,57.455,51.029,95.4,82.533,86.839,198.945,140.9,327.852,140.9C641.792,958.012,762.635,899.133,845.675,805.636Z", style: { fill: "url(#linear-gradient)" } }), s.createElement("path", { d: "M746.1,868.708c162.87-18.86,234.969-186.7,142.381-190-83.633-2.673-219.527,198.9-142.381,190Z", style: { fill: "url(#radial-gradient-3)" } }), s.createElement("path", { d: "M900.207,644.424c112.056-65.214,82.839-206.08,82.839-206.08S939.8,488.582,910.421,568.664C881.4,647.963,832.837,683.812,900.207,644.424Z", style: { fill: "url(#radial-gradient-4)" } }), s.createElement("path", { d: "M544.474,952.062c156.227,49.851,290.5-73.22,207.733-114.32C676.956,800.676,470.324,928.49,544.474,952.062Z", style: { fill: "url(#radial-gradient-5)" } }), s.createElement("path", { d: "M911.849,704.234c3.8-5.363,8.94-22.535,13.48-30.211C952.911,629.5,953.106,594,953.106,593.187c16.659-83.219,15.148-117.2,4.9-180.043-8.251-50.6-44.322-123.092-75.57-158-32.2-35.965-9.514-24.247-40.692-50.518-27.327-30.293-53.823-60.291-68.253-72.355C669.215,45.094,671.571,26.577,673.579,23.42c-.339.371-.837.922-1.472,1.643C670.872,20.14,670,16,670,16s-57,57-69,152c-7.834,62.021,15.383,126.676,49,168a381.367,381.367,0,0,0,59,58l0-.026c25.4,36.477,39.38,81.489,39.38,129.909,0,121.244-98.341,219.531-219.652,219.531a220.455,220.455,0,0,1-49.134-5.519c-57.236-10.908-90.288-39.781-106.772-59.382-9.447-11.234-13.464-19.423-13.464-19.423,51.283,18.371,107.986,14.528,142.468-4.518,34.749-19.265,55.774-33.546,72.837-27.915,16.82,5.606,30.211-10.667,18.2-27.536-11.771-16.845-42.4-40.97-87.878-34.286-34.789,5.067-66.657,29.76-112.24,5.845a96.313,96.313,0,0,1-8.554-5.02c-3.005-1.771,9.768,2.695,6.787.682-8.87-4.318-24.573-13.728-28.643-17.074-.679-.557,6.883,2.161,6.2,1.6-42.621-31.449-37.3-52.693-35.959-66.018,1.073-10.66,8.814-24.32,21.859-29.86,6.3,3.081,10.226,5.433,10.226,5.433s-2.688-4.92-4.141-7.513c.509-.194.994-.145,1.5-.339,5.162,2.232,16.576,8.029,22.586,11.57,7.827,4.947,10.322,9.358,10.322,9.358s2.061-1.016.536-5.33c-.557-1.769-2.929-7.391-10.682-13.065l.485.049a90.851,90.851,0,0,1,13.134,8.173c2.186-7.121,6.118-14.557,5.253-27.859-.528-9.352-.284-11.775-2.124-15.386-1.647-3.1.924-4.312,3.782-1.088a30.038,30.038,0,0,0-2.444-7.343l.025-.242c3.57-11.143,75.535-40.125,80.773-43.513a70.31,70.31,0,0,0,21.175-20.63c4-5.715,7.014-13.733,7.748-25.895.246-5.48-1.441-9.817-20.5-13.965-11.439-2.49-29.136-4.913-56.433-7.474-19.9-1.756-31.577-14.676-38.212-26.6-1.211-2.569-2.445-4.9-3.68-7.222a53.108,53.108,0,0,1-2.831-8.36,158.47,158.47,0,0,1,61.279-76.063c1.6-1.308-6.4.335-4.8-.972,1.868-1.525,14.063-5.927,16.367-6.919,2.813-1.186-12.044-6.84-25.159-5.466-13.357,1.349-16.194,2.776-23.323,5.486,2.959-2.639,12.366-6.1,10.161-6.075-14.4,1.978-32.3,9.479-47.6,17.973a9.676,9.676,0,0,1,.924-4.312c-7.129,2.709-24.637,13.674-29.734,22.95a39.488,39.488,0,0,0,.294-5.354,88.678,88.678,0,0,0-14.6,13.7l-.267.218c-41.347-14.925-77.732-15.891-108.522-9.2-6.736-6.061-17.566-15.226-32.892-45.4-1.041-1.817-1.6,3.755-2.4,1.961-5.955-13.813-9.553-36.444-8.962-52.046,0,0-12.318,5.614-22.513,29.06-1.893,4.215-3.107,6.54-4.32,8.865-.558.678,1.265-7.7.974-7.244-1.772,3-6.356,7.192-8.371,12.618-1.384,4.021-3.325,6.273-4.564,11.288l-.291.46c-.1-1.478.367-6.081.027-5.137a236.1,236.1,0,0,0-12.308,29.841c-5.489,18.046-11.879,42.61-12.892,74.565-.244,2.423-.027,5.136-.247,7.317-13,14.844-21.858,27.413-25.207,33.928C75.18,329.762,56.66,370.236,38.707,434.259A319.143,319.143,0,0,1,67.245,384.27C52.316,418.253,37.885,471.618,35,553.8a438.522,438.522,0,0,1,13.872-50.24c-2.578,54.8,3.805,122.74,38.449,199.393,20.57,45.087,67.921,136.649,183.62,208.1l-.01.007s39.36,29.3,107.017,51.259c5,1.814,10.065,3.6,15.234,5.333-1.622-.655-3.191-1.344-4.715-2.052a484.883,484.883,0,0,0,138.8,20.4c175.18.149,226.846-70.2,226.846-70.2s-.182.137-.513.377q3.708-3.491,7.143-7.257c-27.639,26.1-90.715,27.832-114.3,25.949,40.223-11.813,66.691-21.806,118.175-41.519Q773.655,890,783.1,885.71c.681-.3,1.368-.625,2.052-.936,1.249-.582,2.486-1.132,3.747-1.744a349.205,349.205,0,0,0,70.262-43.987c51.7-41.3,62.949-81.557,68.829-108.1-.82,2.544-3.375,8.475-5.17,12.316-13.315,28.482-42.841,45.959-74.908,60.948A688.993,688.993,0,0,0,890.3,741.773C900.767,731.39,904.033,715.148,911.849,704.234Z", style: { fill: "url(#radial-gradient-6)" } }), s.createElement("path", { d: "M848.921,802.982c21.08-23.241,40.01-49.824,54.349-79.968,36.9-77.582,93.952-206.58,49.018-341.306C916.775,275.225,868.016,217,806.107,160.122,705.563,67.756,677.482,26.521,677.482,2c0,0-116.089,129.409-65.742,264.381S765.2,396.405,833.419,537.255C913.694,703,768.47,883.869,648.375,934.493c7.353-1.633,266.97-60.383,280.614-208.882C928.68,728.342,922.83,769.414,848.921,802.982Z", style: { fill: "url(#radial-gradient-7)" } }), s.createElement("path", { d: "M512.592,321.373c.393-8.77-4.156-14.66-76.682-21.463-29.839-2.755-41.265-30.334-44.748-41.941-10.61,27.565-14.991,56.49-12.636,91.477,1.61,22.92,17.009,47.521,24.37,61.965,0,0,1.636-2.126,2.391-2.912,13.861-14.431,71.936-36.419,77.392-39.541C488.693,365.159,511.582,348.435,512.592,321.373Z", style: { fill: "url(#linear-gradient-2)" } }), s.createElement("path", { d: "M193.314,158.471c-1.041-1.818-1.6,3.754-2.4,1.961-5.955-13.813-9.578-36.2-8.72-52.022,0,0-12.318,5.614-22.513,29.06-1.893,4.215-3.107,6.54-4.32,8.865-.558.678,1.265-7.7.974-7.244-1.771,3-6.355,7.192-8.346,12.375-1.651,4.239-3.349,6.515-4.613,11.772-.389,1.429.392-6.323.052-5.379-23.711,45.825-28.237,115.114-25.738,112.184,50.478-53.9,108.325-66.683,108.325-66.683-6.155-4.534-19.528-17.625-32.7-44.889Z", style: { fill: "url(#linear-gradient-3)" } }), s.createElement("path", { d: "M384.844,722.1c-69.724-29.769-148.992-71.755-146-167.138,4.075-125.619,117.145-100.791,117.145-100.791-4.267,1.039-15.675,9.162-19.718,17.82-4.273,10.827-12.069,35.276,11.551,60.9,37.089,40.192-76.2,95.356,98.663,199.567,4.41,2.4-40.991-1.43-61.639-10.358Z", style: { fill: "url(#linear-gradient-4)" } }), s.createElement("path", { d: "M360.074,659.5c49.442,17.207,107.04,14.189,141.523-4.858,23.085-12.851,52.7-33.434,70.922-28.353-15.777-6.236-27.726-9.15-42.1-9.862-2.448,0-5.382-.052-8.048-.32a136.228,136.228,0,0,0-15.757.863c-8.9.818-18.766,6.433-27.735,5.532-.485-.049,8.7-3.774,7.953-3.605-4.752.991-9.915,1.205-15.37,1.881-3.467.386-6.449.82-9.891.963-102.982,8.733-190.017-55.813-190.017-55.813-7.408,24.95,33.166,74.3,88.521,93.572Z", style: { fill: "url(#linear-gradient-5)" } }), s.createElement("path", { d: "M848.738,803.646C952.9,701.376,1005.6,577.061,983.321,437.627c0,0,8.9,71.5-24.848,144.628,16.213-71.393,18.1-160.114-24.975-251.988C876.005,207.636,781.45,143.109,745.351,116.189,690.656,75.4,667.983,33.87,667.574,25.3c-16.339,33.477-65.766,148.2-5.31,247,56.64,92.564,145.865,120.039,208.328,204.947C985.667,633.667,848.738,803.646,848.738,803.646Z", style: { fill: "url(#linear-gradient-6)" } }), s.createElement("path", { d: "M833.814,537.551C797.412,462.35,751.978,429.55,709,394c5,7,6.232,9.473,9,14,37.827,40.316,93.607,138.656,53.11,262.107C694.881,902.482,389.967,793.057,358,762.319c12.932,134.489,238.036,198.845,384.6,111.63C826,795,893.468,660.788,833.814,537.551Z", style: { fill: "url(#linear-gradient-7)" } }))); };
    var vt = (0, s.lazy)(function () { return o.e(960).then(o.bind(o, 960)); }), bt = (0, s.lazy)(function () { return o.e(914).then(o.bind(o, 914)); }), wt = document.getElementById("root");
    if (!wt)
        throw new Error("root not found");
    var kt, St, Et = (kt = [{ path: "/", element: (0, i.jsx)(function () { var e = (0, s.useState)(0), t = e[0], n = e[1]; return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)("h1", { children: ["PLATFORM: ", "desktop"] }), (0, i.jsxs)("div", { children: [(0, i.jsx)("img", { width: 200, src: dt, alt: "example image" }), (0, i.jsx)("img", { width: 200, src: pt, alt: "example image" }), (0, i.jsx)(yt, { style: { color: "green" }, width: 200, height: 200 })] }), (0, i.jsx)(st, { to: "/about", children: "about" }), (0, i.jsx)(st, { to: "/shop", children: "shop" }), (0, i.jsx)("div", { children: "Hello world" }), (0, i.jsx)("div", { children: t }), (0, i.jsx)("button", { className: "j_hXvOGO", onClick: function () { n(function (e) { return e + 1; }); }, children: "add 1" }), (0, i.jsx)(nt, {})] }); }, {}), children: [{ path: "/about", element: (0, i.jsx)(s.Suspense, { fallback: "Loading...", children: (0, i.jsx)(vt, {}) }) }, { path: "/shop", element: (0, i.jsx)(s.Suspense, { fallback: "Loading...", children: (0, i.jsx)(bt, {}) }) }] }], function (e) {
        var _b;
        var t = e.window ? e.window : "undefined" != typeof window ? window : void 0, n = void 0 !== t && void 0 !== t.document && void 0 !== t.document.createElement, r = !n;
        var a;
        if (h(e.routes.length > 0, "You must provide a non-empty routes array to createRouter"), e.mapRouteProperties)
            a = e.mapRouteProperties;
        else if (e.detectErrorBoundary) {
            var t_15 = e.detectErrorBoundary;
            a = function (e) { return ({ hasErrorBoundary: t_15(e) }); };
        }
        else
            a = re;
        var l, o = {}, i = S(e.routes, a, void 0, o), u = e.basename || "/", s = f({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future), c = null, p = new Set, g = null, v = null, b = null, k = null != e.hydrationData, C = E(i, e.history.location, u), x = null;
        if (null == C) {
            var t_16 = ve(404, { pathname: e.history.location.pathname }), _g = ye(i), n_16 = _g.matches, r_10 = _g.route;
            C = n_16, x = (_b = {}, _b[r_10.id] = t_16, _b);
        }
        var P, _, z = !(C.some(function (e) { return e.route.lazy; }) || C.some(function (e) { return e.route.loader; }) && null == e.hydrationData), T = { historyAction: e.history.action, location: e.history.location, matches: C, initialized: z, navigation: J, restoreScrollPosition: null == e.hydrationData && null, preventScrollReset: !1, revalidation: "idle", loaderData: e.hydrationData && e.hydrationData.loaderData || {}, actionData: e.hydrationData && e.hydrationData.actionData || null, errors: e.hydrationData && e.hydrationData.errors || x, fetchers: new Map, blockers: new Map }, L = d.Pop, O = !1, N = !1, R = !1, D = [], M = [], A = new Map, F = 0, j = -1, I = new Map, H = new Set, B = new Map, $ = new Map, W = new Map, V = !1;
        function q(e) { T = f({}, T, e), p.forEach(function (e) { return e(T); }); }
        function Q(t, n) { var r, a; var o, u = null != T.actionData && null != T.navigation.formMethod && Ce(T.navigation.formMethod) && "loading" === T.navigation.state && !0 !== (null == (r = t.state) ? void 0 : r._isRedirect); o = n.actionData ? Object.keys(n.actionData).length > 0 ? n.actionData : null : u ? T.actionData : null; var s = n.loaderData ? me(T.loaderData, n.loaderData, n.matches || [], n.errors) : T.loaderData, c = T.blockers; c.size > 0 && (c = new Map(c), c.forEach(function (e, t) { return c.set(t, te); })); var p = !0 === O || null != T.navigation.formMethod && Ce(T.navigation.formMethod) && !0 !== (null == (a = t.state) ? void 0 : a._isRedirect); l && (i = l, l = void 0), N || L === d.Pop || (L === d.Push ? e.history.push(t, t.state) : L === d.Replace && e.history.replace(t, t.state)), q(f({}, n, { actionData: o, loaderData: s, historyAction: L, location: t, initialized: !0, navigation: J, revalidation: "idle", restoreScrollPosition: Fe(t, n.matches || T.matches), preventScrollReset: p, blockers: c })), L = d.Pop, O = !1, N = !1, R = !1, D = [], M = []; }
        function G(t, n, r) {
            return __awaiter(this, void 0, void 0, function () {
                var s, c, p, e_21, _b, t_17, r_11, h, m, y, v, k, e_22, _g, S, C, x;
                var _h, _j;
                return __generator(this, function (_k) {
                    switch (_k.label) {
                        case 0:
                            _ && _.abort(), _ = null, L = t, N = !0 === (r && r.startUninterruptedRevalidation), function (e, t) { if (g && b) {
                                var n_17 = Ue(e, t);
                                g[n_17] = b();
                            } }(T.location, T.matches), O = !0 === (r && r.preventScrollReset);
                            s = l || i, c = r && r.overrideNavigation, p = E(s, n, u);
                            if (!p) {
                                e_21 = ve(404, { pathname: n.pathname }), _b = ye(s), t_17 = _b.matches, r_11 = _b.route;
                                return [2 /*return*/, (Ae(), void Q(n, { matches: t_17, loaderData: {}, errors: (_h = {}, _h[r_11.id] = e_21, _h) }))];
                            }
                            if (T.initialized && !R && (h = T.location, m = n, h.pathname === m.pathname && h.search === m.search && ("" === h.hash ? "" !== m.hash : h.hash === m.hash || "" !== m.hash)) && !(r && r.submission && Ce(r.submission.formMethod)))
                                return [2 /*return*/, void Q(n, { matches: p })];
                            _ = new AbortController;
                            k = fe(e.history, n, _.signal, r && r.submission);
                            if (!(r && r.pendingError)) return [3 /*break*/, 1];
                            v = (_j = {}, _j[ge(p).route.id] = r.pendingError, _j);
                            return [3 /*break*/, 3];
                        case 1:
                            if (!(r && r.submission && Ce(r.submission.formMethod))) return [3 /*break*/, 3];
                            return [4 /*yield*/, function (e, t, n, r, l) {
                                    return __awaiter(this, void 0, void 0, function () {
                                        var i, s, c, e_23, e_24;
                                        var _b, _g;
                                        return __generator(this, function (_h) {
                                            switch (_h.label) {
                                                case 0:
                                                    void 0 === l && (l = {}), ie();
                                                    s = function (e, t) { return { state: "submitting", location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text }; }(t, n);
                                                    q({ navigation: s });
                                                    c = ze(r, t);
                                                    if (!(c.route.action || c.route.lazy)) return [3 /*break*/, 2];
                                                    return [4 /*yield*/, ce("action", e, c, r, o, a, u)];
                                                case 1:
                                                    if (i = _h.sent(), e.signal.aborted)
                                                        return [2 /*return*/, { shortCircuited: !0 }];
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    i = { type: w.error, error: ve(405, { method: e.method, pathname: t.pathname, routeId: c.route.id }) };
                                                    _h.label = 3;
                                                case 3:
                                                    if (!Ee(i)) return [3 /*break*/, 5];
                                                    e_23 = l && null != l.replace ? l.replace : i.location === T.location.pathname + T.location.search;
                                                    return [4 /*yield*/, Y(T, i, { submission: n, replace: e_23 })];
                                                case 4: return [2 /*return*/, (_h.sent(), { shortCircuited: !0 })];
                                                case 5:
                                                    if (Se(i)) {
                                                        e_24 = ge(r, c.route.id);
                                                        return [2 /*return*/, (!0 !== (l && l.replace) && (L = d.Push), { pendingActionData: {}, pendingActionError: (_b = {}, _b[e_24.route.id] = i.error, _b) })];
                                                    }
                                                    if (ke(i))
                                                        throw ve(400, { type: "defer-action" });
                                                    return [2 /*return*/, { pendingActionData: (_g = {}, _g[c.route.id] = i.data, _g) }];
                                            }
                                        });
                                    });
                                }(k, n, r.submission, p, { replace: r.replace })];
                        case 2:
                            e_22 = _k.sent();
                            if (e_22.shortCircuited)
                                return [2 /*return*/];
                            y = e_22.pendingActionData, v = e_22.pendingActionError, c = Le(n, r.submission), k = new Request(k.url, { signal: k.signal });
                            _k.label = 3;
                        case 3: return [4 /*yield*/, function (t, n, r, a, o, s, c, d, p) {
                                return __awaiter(this, void 0, void 0, function () { var h, m, g, _b, y, v, e_25, e_26, b, _g, w, k, S, E, e_27, _h, C, x, P, z; return __generator(this, function (_j) {
                                    switch (_j.label) {
                                        case 0:
                                            h = a || Le(n, o), m = o || s || Te(h), g = l || i, _b = oe(e.history, T, r, m, n, R, D, M, B, H, g, u, d, p), y = _b[0], v = _b[1];
                                            if (Ae(function (e) { return !(r && r.some(function (t) { return t.route.id === e; })) || y && y.some(function (t) { return t.route.id === e; }); }), j = ++F, 0 === y.length && 0 === v.length) {
                                                e_25 = we();
                                                return [2 /*return*/, (Q(n, f({ matches: r, loaderData: {}, errors: p || null }, d ? { actionData: d } : {}, e_25 ? { fetchers: new Map(T.fetchers) } : {})), { shortCircuited: !0 })];
                                            }
                                            if (!N) {
                                                v.forEach(function (e) { var t = T.fetchers.get(e.key), n = Oe(void 0, t ? t.data : void 0); T.fetchers.set(e.key, n); });
                                                e_26 = d || T.actionData;
                                                q(f({ navigation: h }, e_26 ? 0 === Object.keys(e_26).length ? { actionData: null } : { actionData: e_26 } : {}, v.length > 0 ? { fetchers: new Map(T.fetchers) } : {}));
                                            }
                                            v.forEach(function (e) { A.has(e.key) && de(e.key), e.controller && A.set(e.key, e.controller); });
                                            b = function () { return v.forEach(function (e) { return de(e.key); }); };
                                            _ && _.signal.addEventListener("abort", b);
                                            return [4 /*yield*/, X(T.matches, r, y, v, t)];
                                        case 1:
                                            _g = _j.sent(), w = _g.results, k = _g.loaderResults, S = _g.fetcherResults;
                                            if (t.signal.aborted)
                                                return [2 /*return*/, { shortCircuited: !0 }];
                                            _ && _.signal.removeEventListener("abort", b), v.forEach(function (e) { return A.delete(e.key); });
                                            E = be(w);
                                            if (!E) return [3 /*break*/, 3];
                                            if (E.idx >= y.length) {
                                                e_27 = v[E.idx - y.length].key;
                                                H.add(e_27);
                                            }
                                            return [4 /*yield*/, Y(T, E.result, { replace: c })];
                                        case 2: return [2 /*return*/, (_j.sent(), { shortCircuited: !0 })];
                                        case 3:
                                            _h = he(T, r, y, k, p, v, S, $), C = _h.loaderData, x = _h.errors;
                                            $.forEach(function (e, t) { e.subscribe(function (n) { (n || e.done) && $.delete(t); }); });
                                            P = we(), z = _e(j);
                                            return [2 /*return*/, f({ loaderData: C, errors: x }, P || z || v.length > 0 ? { fetchers: new Map(T.fetchers) } : {})];
                                    }
                                }); });
                            }(k, n, p, c, r && r.submission, r && r.fetcherSubmission, r && r.replace, y, v)];
                        case 4:
                            _g = _k.sent(), S = _g.shortCircuited, C = _g.loaderData, x = _g.errors;
                            S || (_ = null, Q(n, f({ matches: p }, y ? { actionData: y } : {}, { loaderData: C, errors: x })));
                            return [2 /*return*/];
                    }
                });
            });
        }
        function K(e) { return T.fetchers.get(e) || ee; }
        function Y(r, a, l) {
            return __awaiter(this, void 0, void 0, function () { var _b, o, i, s, c, n_18, r_12, p, _g, m, g, v, b, e_28; return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        _b = void 0 === l ? {} : l, o = _b.submission, i = _b.fetcherSubmission, s = _b.replace;
                        a.revalidate && (R = !0);
                        c = y(r.location, a.location, { _isRedirect: !0 });
                        if (h(c, "Expected a location on the redirect navigation"), n) {
                            n_18 = !1;
                            if (a.reloadDocument)
                                n_18 = !0;
                            else if (ne.test(a.location)) {
                                r_12 = e.history.createURL(a.location);
                                n_18 = r_12.origin !== t.location.origin || null == U(r_12.pathname, u);
                            }
                            if (n_18)
                                return [2 /*return*/, void (s ? t.location.replace(a.location) : t.location.assign(a.location))];
                        }
                        _ = null;
                        p = !0 === s ? d.Replace : d.Push, _g = r.navigation, m = _g.formMethod, g = _g.formAction, v = _g.formEncType;
                        !o && !i && m && g && v && (o = Te(r.navigation));
                        b = o || i;
                        if (!(Z.has(a.status) && b && Ce(b.formMethod))) return [3 /*break*/, 2];
                        return [4 /*yield*/, G(p, c, { submission: f({}, b, { formAction: a.location }), preventScrollReset: O })];
                    case 1:
                        _h.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        e_28 = Le(c, o);
                        return [4 /*yield*/, G(p, c, { overrideNavigation: e_28, fetcherSubmission: i, preventScrollReset: O })];
                    case 3:
                        _h.sent();
                        _h.label = 4;
                    case 4: return [2 /*return*/];
                }
            }); });
        }
        function X(t, n, r, l, i) {
            return __awaiter(this, void 0, void 0, function () { var s, c, f; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all(__spreadArray(__spreadArray([], r.map(function (e) { return ce("loader", i, e, n, o, a, u); }), true), l.map(function (t) { return t.matches && t.match && t.controller ? ce("loader", fe(e.history, t.path, t.controller.signal), t.match, t.matches, o, a, u) : { type: w.error, error: ve(404, { pathname: t.path }) }; }), true))];
                    case 1:
                        s = _b.sent(), c = s.slice(0, r.length), f = s.slice(r.length);
                        return [4 /*yield*/, Promise.all([xe(t, r, c, c.map(function () { return i.signal; }), !1, T.loaderData), xe(t, l.map(function (e) { return e.match; }), f, l.map(function (e) { return e.controller ? e.controller.signal : null; }), !0)])];
                    case 2: return [2 /*return*/, (_b.sent(), { results: s, loaderResults: c, fetcherResults: f })];
                }
            }); });
        }
        function ie() { R = !0, D.push.apply(D, Ae()), B.forEach(function (e, t) { A.has(t) && (M.push(t), de(t)); }); }
        function ue(e, t, n) {
            var _b;
            var r = ge(T.matches, t);
            se(e), q({ errors: (_b = {}, _b[r.route.id] = n, _b), fetchers: new Map(T.fetchers) });
        }
        function se(e) { var t = T.fetchers.get(e); !A.has(e) || t && "loading" === t.state && I.has(e) || de(e), B.delete(e), I.delete(e), H.delete(e), T.fetchers.delete(e); }
        function de(e) { var t = A.get(e); h(t, "Expected fetch controller: " + e), t.abort(), A.delete(e); }
        function pe(e) { for (var _b = 0, e_29 = e; _b < e_29.length; _b++) {
            var t_18 = e_29[_b];
            var e_30 = Ne(K(t_18).data);
            T.fetchers.set(t_18, e_30);
        } }
        function we() { var e = [], t = !1; for (var _b = 0, H_1 = H; _b < H_1.length; _b++) {
            var n_19 = H_1[_b];
            var r_13 = T.fetchers.get(n_19);
            h(r_13, "Expected fetcher: " + n_19), "loading" === r_13.state && (H.delete(n_19), e.push(n_19), t = !0);
        } return pe(e), t; }
        function _e(e) { var t = []; for (var _b = 0, I_1 = I; _b < I_1.length; _b++) {
            var _g = I_1[_b], n_20 = _g[0], r_14 = _g[1];
            if (r_14 < e) {
                var e_31 = T.fetchers.get(n_20);
                h(e_31, "Expected fetcher: " + n_20), "loading" === e_31.state && (de(n_20), I.delete(n_20), t.push(n_20));
            }
        } return pe(t), t.length > 0; }
        function Re(e) { T.blockers.delete(e), W.delete(e); }
        function De(e, t) { var n = T.blockers.get(e) || te; h("unblocked" === n.state && "blocked" === t.state || "blocked" === n.state && "blocked" === t.state || "blocked" === n.state && "proceeding" === t.state || "blocked" === n.state && "unblocked" === t.state || "proceeding" === n.state && "unblocked" === t.state, "Invalid blocker state transition: " + n.state + " -> " + t.state); var r = new Map(T.blockers); r.set(e, t), q({ blockers: r }); }
        function Me(e) { var t = e.currentLocation, n = e.nextLocation, r = e.historyAction; if (0 === W.size)
            return; W.size > 1 && m(!1, "A router only supports one blocker at a time"); var a = Array.from(W.entries()), _b = a[a.length - 1], l = _b[0], o = _b[1], i = T.blockers.get(l); return i && "proceeding" === i.state ? void 0 : o({ currentLocation: t, nextLocation: n, historyAction: r }) ? l : void 0; }
        function Ae(e) { var t = []; return $.forEach(function (n, r) { e && !e(r) || (n.cancel(), t.push(r), $.delete(r)); }), t; }
        function Ue(e, t) { return v && v(e, t.map(function (e) { return function (e, t) { var n = e.route, r = e.pathname, a = e.params; return { id: n.id, pathname: r, params: a, data: t[n.id], handle: n.handle }; }(e, T.loaderData); })) || e.key; }
        function Fe(e, t) { if (g) {
            var n_21 = Ue(e, t), r_15 = g[n_21];
            if ("number" == typeof r_15)
                return r_15;
        } return null; }
        return P = { get basename() { return u; }, get state() { return T; }, get routes() { return i; }, initialize: function () { return c = e.history.listen(function (t) { var n = t.action, r = t.location, a = t.delta; if (V)
                return void (V = !1); m(0 === W.size || null != a, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."); var l = Me({ currentLocation: T.location, nextLocation: r, historyAction: n }); return l && null != a ? (V = !0, e.history.go(-1 * a), void De(l, { state: "blocked", location: r, proceed: function () { De(l, { state: "proceeding", proceed: void 0, reset: void 0, location: r }), e.history.go(a); }, reset: function () { var e = new Map(T.blockers); e.set(l, te), q({ blockers: e }); } })) : G(n, r); }), T.initialized || G(d.Pop, T.location), P; }, subscribe: function (e) { return p.add(e), function () { return p.delete(e); }; }, enableScrollRestoration: function (e, t, n) { if (g = e, b = t, v = n || null, !k && T.navigation === J) {
                k = !0;
                var e_32 = Fe(T.location, T.matches);
                null != e_32 && q({ restoreScrollPosition: e_32 });
            } return function () { g = null, b = null, v = null; }; }, navigate: function t(n, r) {
                return __awaiter(this, void 0, void 0, function () { var a, _b, l, o, i, c, p, h, m, g, v; return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            if ("number" == typeof n)
                                return [2 /*return*/, void e.history.go(n)];
                            a = ae(T.location, T.matches, u, s.v7_prependBasename, n, null == r ? void 0 : r.fromRouteId, null == r ? void 0 : r.relative), _b = le(s.v7_normalizeFormMethod, !1, a, r), l = _b.path, o = _b.submission, i = _b.error, c = T.location, p = y(T.location, l, r && r.state);
                            p = f({}, p, e.history.encodeLocation(p));
                            h = r && null != r.replace ? r.replace : void 0, m = d.Push;
                            !0 === h ? m = d.Replace : !1 === h || null != o && Ce(o.formMethod) && o.formAction === T.location.pathname + T.location.search && (m = d.Replace);
                            g = r && "preventScrollReset" in r ? !0 === r.preventScrollReset : void 0, v = Me({ currentLocation: c, nextLocation: p, historyAction: m });
                            if (!!v) return [3 /*break*/, 2];
                            return [4 /*yield*/, G(m, p, { submission: o, pendingError: i, preventScrollReset: g, replace: r && r.replace })];
                        case 1: return [2 /*return*/, _g.sent()];
                        case 2:
                            De(v, { state: "blocked", location: p, proceed: function () { De(v, { state: "proceeding", proceed: void 0, reset: void 0, location: p }), t(n, r); }, reset: function () { var e = new Map(T.blockers); e.set(v, te), q({ blockers: e }); } });
                            return [2 /*return*/];
                    }
                }); });
            }, fetch: function (t, n, c, d) { if (r)
                throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."); A.has(t) && de(t); var p = l || i, m = ae(T.location, T.matches, u, s.v7_prependBasename, c, n, null == d ? void 0 : d.relative), g = E(p, m, u); if (!g)
                return void ue(t, n, ve(404, { pathname: m })); var _b = le(s.v7_normalizeFormMethod, !0, m, d), y = _b.path, v = _b.submission, b = _b.error; if (b)
                return void ue(t, n, b); var w = ze(g, y); O = !0 === (d && d.preventScrollReset), v && Ce(v.formMethod) ? function (t, n, r, s, c, d) {
                return __awaiter(this, void 0, void 0, function () {
                    var e_33, p, m, g, y, v, e_34, e_35, b, w, k, S, C, x, _b, P, z, O, _g, N, U, W, V, e_36, _h, G, K, e_37, Z;
                    var _j;
                    return __generator(this, function (_k) {
                        switch (_k.label) {
                            case 0:
                                if (ie(), B.delete(t), !s.route.action && !s.route.lazy) {
                                    e_33 = ve(405, { method: d.formMethod, pathname: r, routeId: n });
                                    return [2 /*return*/, void ue(t, n, e_33)];
                                }
                                p = function (e, t) { return { state: "submitting", formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t ? t.data : void 0 }; }(d, T.fetchers.get(t));
                                T.fetchers.set(t, p), q({ fetchers: new Map(T.fetchers) });
                                m = new AbortController, g = fe(e.history, r, m.signal, d);
                                A.set(t, m);
                                y = F;
                                return [4 /*yield*/, ce("action", g, s, c, o, a, u)];
                            case 1:
                                v = _k.sent();
                                if (g.signal.aborted)
                                    return [2 /*return*/, void (A.get(t) === m && A.delete(t))];
                                if (Ee(v)) {
                                    if (A.delete(t), j > y) {
                                        e_34 = Ne(void 0);
                                        return [2 /*return*/, (T.fetchers.set(t, e_34), void q({ fetchers: new Map(T.fetchers) }))];
                                    }
                                    {
                                        H.add(t);
                                        e_35 = Oe(d);
                                        return [2 /*return*/, (T.fetchers.set(t, e_35), q({ fetchers: new Map(T.fetchers) }), Y(T, v, { fetcherSubmission: d }))];
                                    }
                                }
                                if (Se(v))
                                    return [2 /*return*/, void ue(t, n, v.error)];
                                if (ke(v))
                                    throw ve(400, { type: "defer-action" });
                                b = T.navigation.location || T.location, w = fe(e.history, b, m.signal), k = l || i, S = "idle" !== T.navigation.state ? E(k, T.navigation.location, u) : T.matches;
                                h(S, "Didn't find any matches after fetcher action");
                                C = ++F;
                                I.set(t, C);
                                x = Oe(d, v.data);
                                T.fetchers.set(t, x);
                                _b = oe(e.history, T, S, d, b, R, D, M, B, H, k, u, (_j = {}, _j[s.route.id] = v.data, _j), void 0), P = _b[0], z = _b[1];
                                z.filter(function (e) { return e.key !== t; }).forEach(function (e) { var t = e.key, n = T.fetchers.get(t), r = Oe(void 0, n ? n.data : void 0); T.fetchers.set(t, r), A.has(t) && de(t), e.controller && A.set(t, e.controller); }), q({ fetchers: new Map(T.fetchers) });
                                O = function () { return z.forEach(function (e) { return de(e.key); }); };
                                m.signal.addEventListener("abort", O);
                                return [4 /*yield*/, X(T.matches, S, P, z, w)];
                            case 2:
                                _g = _k.sent(), N = _g.results, U = _g.loaderResults, W = _g.fetcherResults;
                                if (m.signal.aborted)
                                    return [2 /*return*/];
                                m.signal.removeEventListener("abort", O), I.delete(t), A.delete(t), z.forEach(function (e) { return A.delete(e.key); });
                                V = be(N);
                                if (V) {
                                    if (V.idx >= P.length) {
                                        e_36 = z[V.idx - P.length].key;
                                        H.add(e_36);
                                    }
                                    return [2 /*return*/, Y(T, V.result)];
                                }
                                _h = he(T, T.matches, P, U, void 0, z, W, $), G = _h.loaderData, K = _h.errors;
                                if (T.fetchers.has(t)) {
                                    e_37 = Ne(v.data);
                                    T.fetchers.set(t, e_37);
                                }
                                Z = _e(C);
                                "loading" === T.navigation.state && C > j ? (h(L, "Expected pending action"), _ && _.abort(), Q(T.navigation.location, { matches: S, loaderData: G, errors: K, fetchers: new Map(T.fetchers) })) : (q(f({ errors: K, loaderData: me(T.loaderData, G, S, K) }, Z || z.length > 0 ? { fetchers: new Map(T.fetchers) } : {})), R = !1);
                                return [2 /*return*/];
                        }
                    });
                });
            }(t, n, y, w, g, v) : (B.set(t, { routeId: n, path: y }), function (t, n, r, l, i, s) {
                return __awaiter(this, void 0, void 0, function () {
                    var c, f, d, p, m, g, _b, e_38, e_39, y;
                    var _g;
                    return __generator(this, function (_h) {
                        switch (_h.label) {
                            case 0:
                                c = T.fetchers.get(t), f = Oe(s, c ? c.data : void 0);
                                T.fetchers.set(t, f), q({ fetchers: new Map(T.fetchers) });
                                d = new AbortController, p = fe(e.history, r, d.signal);
                                A.set(t, d);
                                m = F;
                                return [4 /*yield*/, ce("loader", p, l, i, o, a, u)];
                            case 1:
                                g = _h.sent();
                                _b = ke(g);
                                if (!_b) return [3 /*break*/, 3];
                                return [4 /*yield*/, Pe(g, p.signal, !0)];
                            case 2:
                                _b = (g = (_h.sent()) || g);
                                _h.label = 3;
                            case 3:
                                if (_b, A.get(t) === d && A.delete(t), p.signal.aborted)
                                    return [2 /*return*/];
                                if (!Ee(g)) return [3 /*break*/, 5];
                                if (j > m) {
                                    e_38 = Ne(void 0);
                                    return [2 /*return*/, (T.fetchers.set(t, e_38), void q({ fetchers: new Map(T.fetchers) }))];
                                }
                                H.add(t);
                                return [4 /*yield*/, Y(T, g)];
                            case 4: return [2 /*return*/, void (_h.sent())];
                            case 5:
                                if (Se(g)) {
                                    e_39 = ge(T.matches, n);
                                    return [2 /*return*/, (T.fetchers.delete(t), void q({ fetchers: new Map(T.fetchers), errors: (_g = {}, _g[e_39.route.id] = g.error, _g) }))];
                                }
                                h(!ke(g), "Unhandled fetcher deferred data");
                                y = Ne(g.data);
                                T.fetchers.set(t, y), q({ fetchers: new Map(T.fetchers) });
                                return [2 /*return*/];
                        }
                    });
                });
            }(t, n, y, w, g, v)); }, revalidate: function () { ie(), q({ revalidation: "loading" }), "submitting" !== T.navigation.state && ("idle" !== T.navigation.state ? G(L || T.historyAction, T.navigation.location, { overrideNavigation: T.navigation }) : G(T.historyAction, T.location, { startUninterruptedRevalidation: !0 })); }, createHref: function (t) { return e.history.createHref(t); }, encodeLocation: function (t) { return e.history.encodeLocation(t); }, getFetcher: K, deleteFetcher: se, dispose: function () { c && c(), p.clear(), _ && _.abort(), T.fetchers.forEach(function (e, t) { return se(t); }), T.blockers.forEach(function (e, t) { return Re(t); }); }, getBlocker: function (e, t) { var n = T.blockers.get(e) || te; return W.get(e) !== t && W.set(e, t), n; }, deleteBlocker: Re, _internalFetchControllers: A, _internalActiveDeferreds: $, _internalSetRoutes: function (e) { o = {}, l = S(e, a, void 0, o); } }, P;
    }({ basename: void 0, future: at({}, void 0, { v7_prependBasename: !0 }), history: (St = { window: void 0 }, void 0 === St && (St = {}), function (e, t, n, r) { void 0 === r && (r = {}); var _b = r.window, a = _b === void 0 ? document.defaultView : _b, _g = r.v5Compat, l = _g === void 0 ? !1 : _g, o = a.history, i = d.Pop, u = null, s = c(); function c() { return (o.state || { idx: null }).idx; } function m() { i = d.Pop; var e = c(), t = null == e ? null : e - s; s = e, u && u({ action: i, location: w.location, delta: t }); } function b(e) { var t = "null" !== a.location.origin ? a.location.origin : a.location.href, n = "string" == typeof e ? e : v(e); return h(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t); } null == s && (s = 0, o.replaceState(f({}, o.state, { idx: s }), "")); var w = { get action() { return i; }, get location() { return e(a, o); }, listen: function (e) { if (u)
                throw new Error("A history only accepts one active listener"); return a.addEventListener(p, m), u = e, function () { a.removeEventListener(p, m), u = null; }; }, createHref: function (e) { return t(a, e); }, createURL: b, encodeLocation: function (e) { var t = b(e); return { pathname: t.pathname, search: t.search, hash: t.hash }; }, push: function (e, t) { i = d.Push; var r = y(w.location, e, t); n && n(r, e), s = c() + 1; var f = g(r, s), p = w.createHref(r); try {
                o.pushState(f, "", p);
            }
            catch (e) {
                if (e instanceof DOMException && "DataCloneError" === e.name)
                    throw e;
                a.location.assign(p);
            } l && u && u({ action: i, location: w.location, delta: 1 }); }, replace: function (e, t) { i = d.Replace; var r = y(w.location, e, t); n && n(r, e), s = c(); var a = g(r, s), f = w.createHref(r); o.replaceState(a, "", f), l && u && u({ action: i, location: w.location, delta: 0 }); }, go: function (e) { return o.go(e); } }; return w; }(function (e, t) { var _b = e.location, n = _b.pathname, r = _b.search, a = _b.hash; return y("", { pathname: n, search: r, hash: a }, t.state && t.state.usr || null, t.state && t.state.key || "default"); }, function (e, t) { return "string" == typeof t ? t : v(t); }, null, St)), hydrationData: function () { var e; var t = null == (e = window) ? void 0 : e.__staticRouterHydrationData; return t && t.errors && (t = at({}, t, { errors: ot(t.errors) })), t; }(), routes: kt, mapRouteProperties: function (e) { var t = { hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement }; return e.Component && Object.assign(t, { element: s.createElement(e.Component), Component: void 0 }), e.ErrorBoundary && Object.assign(t, { errorElement: s.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }), t; } }).initialize());
    (0, u.createRoot)(wt).render((0, i.jsx)(function (e) { var t = e.fallbackElement, n = e.router, r = e.future, _b = s.useState(n.state), a = _b[0], l = _b[1], o = (r || {}).v7_startTransition, i = s.useCallback(function (e) { o && et ? et(function () { return l(e); }) : l(e); }, [l, o]); s.useLayoutEffect(function () { return n.subscribe(i); }, [n, i]); var u = s.useMemo(function () { return ({ createHref: n.createHref, encodeLocation: n.encodeLocation, go: function (e) { return n.navigate(e); }, push: function (e, t, r) { return n.navigate(e, { state: t, preventScrollReset: null == r ? void 0 : r.preventScrollReset }); }, replace: function (e, t, r) { return n.navigate(e, { replace: !0, state: t, preventScrollReset: null == r ? void 0 : r.preventScrollReset }); } }); }, [n]), c = n.basename || "/", f = s.useMemo(function () { return ({ router: n, navigator: u, static: !1, basename: c }); }, [n, u, c]); return s.createElement(s.Fragment, null, s.createElement(De.Provider, { value: f }, s.createElement(Me.Provider, { value: a }, s.createElement(rt, { basename: c, location: a.location, navigationType: a.historyAction, navigator: u }, a.initialized ? s.createElement(tt, { routes: n.routes, state: a }) : t))), null); }, { router: Et }));
})();
//# sourceMappingURL=main.ec0d767c8ccc43dbbf38.js.map
