import ir, { forwardRef as xe, useRef as cr, useEffect as Ze, useState as dr } from "react";
var we = { exports: {} }, ge = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function ur() {
  if (Ye) return ge;
  Ye = 1;
  var r = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function o(t, s, i) {
    var c = null;
    if (i !== void 0 && (c = "" + i), s.key !== void 0 && (c = "" + s.key), "key" in s) {
      i = {};
      for (var p in s)
        p !== "key" && (i[p] = s[p]);
    } else i = s;
    return s = i.ref, {
      $$typeof: r,
      type: t,
      key: c,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return ge.Fragment = n, ge.jsx = o, ge.jsxs = o, ge;
}
var he = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function fr() {
  return Ue || (Ue = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === T ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case f:
          return "Fragment";
        case B:
          return "Portal";
        case be:
          return "Profiler";
        case M:
          return "StrictMode";
        case Z:
          return "Suspense";
        case V:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case X:
            return (e.displayName || "Context") + ".Provider";
          case pe:
            return (e._context.displayName || "Context") + ".Consumer";
          case ne:
            var d = e.render;
            return e = e.displayName, e || (e = d.displayName || d.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case P:
            return d = e.displayName || null, d !== null ? d : r(e.type) || "Memo";
          case O:
            d = e._payload, e = e._init;
            try {
              return r(e(d));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function o(e) {
      try {
        n(e);
        var d = !1;
      } catch {
        d = !0;
      }
      if (d) {
        d = console;
        var u = d.error, x = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u.call(
          d,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          x
        ), n(e);
      }
    }
    function t() {
    }
    function s() {
      if (L === 0) {
        Q = console.log, le = console.info, D = console.warn, Me = console.error, Pe = console.group, Oe = console.groupCollapsed, Ge = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: t,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      L++;
    }
    function i() {
      if (L--, L === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: $({}, e, { value: Q }),
          info: $({}, e, { value: le }),
          warn: $({}, e, { value: D }),
          error: $({}, e, { value: Me }),
          group: $({}, e, { value: Pe }),
          groupCollapsed: $({}, e, { value: Oe }),
          groupEnd: $({}, e, { value: Ge })
        });
      }
      0 > L && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function c(e) {
      if (ke === void 0)
        try {
          throw Error();
        } catch (u) {
          var d = u.stack.trim().match(/\n( *(at )?)/);
          ke = d && d[1] || "", Ie = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + ke + e + Ie;
    }
    function p(e, d) {
      if (!e || Ce) return "";
      var u = Re.get(e);
      if (u !== void 0) return u;
      Ce = !0, u = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var x = null;
      x = k.H, k.H = null, s();
      try {
        var N = {
          DetermineComponentFrameRoot: function() {
            try {
              if (d) {
                var F = function() {
                  throw Error();
                };
                if (Object.defineProperty(F.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(F, []);
                  } catch (U) {
                    var ye = U;
                  }
                  Reflect.construct(e, [], F);
                } else {
                  try {
                    F.call();
                  } catch (U) {
                    ye = U;
                  }
                  e.call(F.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (U) {
                  ye = U;
                }
                (F = e()) && typeof F.catch == "function" && F.catch(function() {
                });
              }
            } catch (U) {
              if (U && ye && typeof U.stack == "string")
                return [U.stack, ye.stack];
            }
            return [null, null];
          }
        };
        N.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var w = Object.getOwnPropertyDescriptor(
          N.DetermineComponentFrameRoot,
          "name"
        );
        w && w.configurable && Object.defineProperty(
          N.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var m = N.DetermineComponentFrameRoot(), Y = m[0], ie = m[1];
        if (Y && ie) {
          var z = Y.split(`
`), ee = ie.split(`
`);
          for (m = w = 0; w < z.length && !z[w].includes(
            "DetermineComponentFrameRoot"
          ); )
            w++;
          for (; m < ee.length && !ee[m].includes(
            "DetermineComponentFrameRoot"
          ); )
            m++;
          if (w === z.length || m === ee.length)
            for (w = z.length - 1, m = ee.length - 1; 1 <= w && 0 <= m && z[w] !== ee[m]; )
              m--;
          for (; 1 <= w && 0 <= m; w--, m--)
            if (z[w] !== ee[m]) {
              if (w !== 1 || m !== 1)
                do
                  if (w--, m--, 0 > m || z[w] !== ee[m]) {
                    var me = `
` + z[w].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && me.includes("<anonymous>") && (me = me.replace("<anonymous>", e.displayName)), typeof e == "function" && Re.set(e, me), me;
                  }
                while (1 <= w && 0 <= m);
              break;
            }
        }
      } finally {
        Ce = !1, k.H = x, i(), Error.prepareStackTrace = u;
      }
      return z = (z = e ? e.displayName || e.name : "") ? c(z) : "", typeof e == "function" && Re.set(e, z), z;
    }
    function b(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var d = e.prototype;
        return p(
          e,
          !(!d || !d.isReactComponent)
        );
      }
      if (typeof e == "string") return c(e);
      switch (e) {
        case Z:
          return c("Suspense");
        case V:
          return c("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ne:
            return e = p(e.render, !1), e;
          case P:
            return b(e.type);
          case O:
            d = e._payload, e = e._init;
            try {
              return b(e(d));
            } catch {
            }
        }
      return "";
    }
    function g() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function y(e) {
      if (K.call(e, "key")) {
        var d = Object.getOwnPropertyDescriptor(e, "key").get;
        if (d && d.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function R(e, d) {
      function u() {
        Ve || (Ve = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          d
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: u,
        configurable: !0
      });
    }
    function E() {
      var e = r(this.type);
      return $e[e] || ($e[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function W(e, d, u, x, N, w) {
      return u = w.ref, e = {
        $$typeof: I,
        type: e,
        key: d,
        props: w,
        _owner: N
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: E
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function A(e, d, u, x, N, w) {
      if (typeof e == "string" || typeof e == "function" || e === f || e === be || e === M || e === Z || e === V || e === v || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === P || e.$$typeof === X || e.$$typeof === pe || e.$$typeof === ne || e.$$typeof === ve || e.getModuleId !== void 0)) {
        var m = d.children;
        if (m !== void 0)
          if (x)
            if (ae(m)) {
              for (x = 0; x < m.length; x++)
                S(m[x], e);
              Object.freeze && Object.freeze(m);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else S(m, e);
      } else
        m = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? x = "null" : ae(e) ? x = "array" : e !== void 0 && e.$$typeof === I ? (x = "<" + (r(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          x,
          m
        );
      if (K.call(d, "key")) {
        m = r(e);
        var Y = Object.keys(d).filter(function(z) {
          return z !== "key";
        });
        x = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", Le[m + x] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          m,
          Y,
          m
        ), Le[m + x] = !0);
      }
      if (m = null, u !== void 0 && (o(u), m = "" + u), y(d) && (o(d.key), m = "" + d.key), "key" in d) {
        u = {};
        for (var ie in d)
          ie !== "key" && (u[ie] = d[ie]);
      } else u = d;
      return m && R(
        u,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(e, m, w, N, g(), u);
    }
    function S(e, d) {
      if (typeof e == "object" && e && e.$$typeof !== lr) {
        if (ae(e))
          for (var u = 0; u < e.length; u++) {
            var x = e[u];
            _(x) && G(x, d);
          }
        else if (_(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? u = null : (u = se && e[se] || e["@@iterator"], u = typeof u == "function" ? u : null), typeof u == "function" && u !== e.entries && (u = u.call(e), u !== e))
          for (; !(e = u.next()).done; )
            _(e.value) && G(e.value, d);
      }
    }
    function _(e) {
      return typeof e == "object" && e !== null && e.$$typeof === I;
    }
    function G(e, d) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, d = J(d), !We[d])) {
        We[d] = !0;
        var u = "";
        e && e._owner != null && e._owner !== g() && (u = null, typeof e._owner.tag == "number" ? u = r(e._owner.type) : typeof e._owner.name == "string" && (u = e._owner.name), u = " It was passed a child from " + u + ".");
        var x = k.getCurrentStack;
        k.getCurrentStack = function() {
          var N = b(e.type);
          return x && (N += x() || ""), N;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          d,
          u
        ), k.getCurrentStack = x;
      }
    }
    function J(e) {
      var d = "", u = g();
      return u && (u = r(u.type)) && (d = `

Check the render method of \`` + u + "`."), d || (e = r(e)) && (d = `

Check the top-level render call using <` + e + ">."), d;
    }
    var H = ir, I = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), be = Symbol.for("react.profiler"), pe = Symbol.for("react.consumer"), X = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), se = Symbol.iterator, T = Symbol.for("react.client.reference"), k = H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, $ = Object.assign, ve = Symbol.for("react.client.reference"), ae = Array.isArray, L = 0, Q, le, D, Me, Pe, Oe, Ge;
    t.__reactDisabledLog = !0;
    var ke, Ie, Ce = !1, Re = new (typeof WeakMap == "function" ? WeakMap : Map)(), lr = Symbol.for("react.client.reference"), Ve, $e = {}, Le = {}, We = {};
    he.Fragment = f, he.jsx = function(e, d, u, x, N) {
      return A(e, d, u, !1, x, N);
    }, he.jsxs = function(e, d, u, x, N) {
      return A(e, d, u, !0, x, N);
    };
  }()), he;
}
var Be;
function br() {
  return Be || (Be = 1, process.env.NODE_ENV === "production" ? we.exports = ur() : we.exports = fr()), we.exports;
}
var C = br();
function Ke(r) {
  var n, o, t = "";
  if (typeof r == "string" || typeof r == "number") t += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var s = r.length;
    for (n = 0; n < s; n++) r[n] && (o = Ke(r[n])) && (t && (t += " "), t += o);
  } else for (o in r) r[o] && (t && (t += " "), t += o);
  return t;
}
function Qe() {
  for (var r, n, o = 0, t = "", s = arguments.length; o < s; o++) (r = arguments[o]) && (n = Ke(r)) && (t && (t += " "), t += n);
  return t;
}
const Ne = "-", pr = (r) => {
  const n = gr(r), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: t
  } = r;
  return {
    getClassGroupId: (c) => {
      const p = c.split(Ne);
      return p[0] === "" && p.length !== 1 && p.shift(), De(p, n) || mr(c);
    },
    getConflictingClassGroupIds: (c, p) => {
      const b = o[c] || [];
      return p && t[c] ? [...b, ...t[c]] : b;
    }
  };
}, De = (r, n) => {
  var c;
  if (r.length === 0)
    return n.classGroupId;
  const o = r[0], t = n.nextPart.get(o), s = t ? De(r.slice(1), t) : void 0;
  if (s)
    return s;
  if (n.validators.length === 0)
    return;
  const i = r.join(Ne);
  return (c = n.validators.find(({
    validator: p
  }) => p(i))) == null ? void 0 : c.classGroupId;
}, Fe = /^\[(.+)\]$/, mr = (r) => {
  if (Fe.test(r)) {
    const n = Fe.exec(r)[1], o = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, gr = (r) => {
  const {
    theme: n,
    classGroups: o
  } = r, t = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in o)
    Ae(o[s], t, s, n);
  return t;
}, Ae = (r, n, o, t) => {
  r.forEach((s) => {
    if (typeof s == "string") {
      const i = s === "" ? n : qe(n, s);
      i.classGroupId = o;
      return;
    }
    if (typeof s == "function") {
      if (hr(s)) {
        Ae(s(t), n, o, t);
        return;
      }
      n.validators.push({
        validator: s,
        classGroupId: o
      });
      return;
    }
    Object.entries(s).forEach(([i, c]) => {
      Ae(c, qe(n, i), o, t);
    });
  });
}, qe = (r, n) => {
  let o = r;
  return n.split(Ne).forEach((t) => {
    o.nextPart.has(t) || o.nextPart.set(t, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(t);
  }), o;
}, hr = (r) => r.isThemeGetter, xr = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, o = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  const s = (i, c) => {
    o.set(i, c), n++, n > r && (n = 0, t = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let c = o.get(i);
      if (c !== void 0)
        return c;
      if ((c = t.get(i)) !== void 0)
        return s(i, c), c;
    },
    set(i, c) {
      o.has(i) ? o.set(i, c) : s(i, c);
    }
  };
}, Se = "!", Te = ":", vr = Te.length, yr = (r) => {
  const {
    prefix: n,
    experimentalParseClassName: o
  } = r;
  let t = (s) => {
    const i = [];
    let c = 0, p = 0, b = 0, g;
    for (let A = 0; A < s.length; A++) {
      let S = s[A];
      if (c === 0 && p === 0) {
        if (S === Te) {
          i.push(s.slice(b, A)), b = A + vr;
          continue;
        }
        if (S === "/") {
          g = A;
          continue;
        }
      }
      S === "[" ? c++ : S === "]" ? c-- : S === "(" ? p++ : S === ")" && p--;
    }
    const y = i.length === 0 ? s : s.substring(b), R = wr(y), E = R !== y, W = g && g > b ? g - b : void 0;
    return {
      modifiers: i,
      hasImportantModifier: E,
      baseClassName: R,
      maybePostfixModifierPosition: W
    };
  };
  if (n) {
    const s = n + Te, i = t;
    t = (c) => c.startsWith(s) ? i(c.substring(s.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: c,
      maybePostfixModifierPosition: void 0
    };
  }
  if (o) {
    const s = t;
    t = (i) => o({
      className: i,
      parseClassName: s
    });
  }
  return t;
}, wr = (r) => r.endsWith(Se) ? r.substring(0, r.length - 1) : r.startsWith(Se) ? r.substring(1) : r, Er = (r) => {
  const n = Object.fromEntries(r.orderSensitiveModifiers.map((t) => [t, !0]));
  return (t) => {
    if (t.length <= 1)
      return t;
    const s = [];
    let i = [];
    return t.forEach((c) => {
      c[0] === "[" || n[c] ? (s.push(...i.sort(), c), i = []) : i.push(c);
    }), s.push(...i.sort()), s;
  };
}, kr = (r) => ({
  cache: xr(r.cacheSize),
  parseClassName: yr(r),
  sortModifiers: Er(r),
  ...pr(r)
}), Cr = /\s+/, Rr = (r, n) => {
  const {
    parseClassName: o,
    getClassGroupId: t,
    getConflictingClassGroupIds: s,
    sortModifiers: i
  } = n, c = [], p = r.trim().split(Cr);
  let b = "";
  for (let g = p.length - 1; g >= 0; g -= 1) {
    const y = p[g], {
      isExternal: R,
      modifiers: E,
      hasImportantModifier: W,
      baseClassName: A,
      maybePostfixModifierPosition: S
    } = o(y);
    if (R) {
      b = y + (b.length > 0 ? " " + b : b);
      continue;
    }
    let _ = !!S, G = t(_ ? A.substring(0, S) : A);
    if (!G) {
      if (!_) {
        b = y + (b.length > 0 ? " " + b : b);
        continue;
      }
      if (G = t(A), !G) {
        b = y + (b.length > 0 ? " " + b : b);
        continue;
      }
      _ = !1;
    }
    const J = i(E).join(":"), H = W ? J + Se : J, I = H + G;
    if (c.includes(I))
      continue;
    c.push(I);
    const B = s(G, _);
    for (let f = 0; f < B.length; ++f) {
      const M = B[f];
      c.push(H + M);
    }
    b = y + (b.length > 0 ? " " + b : b);
  }
  return b;
};
function jr() {
  let r = 0, n, o, t = "";
  for (; r < arguments.length; )
    (n = arguments[r++]) && (o = er(n)) && (t && (t += " "), t += o);
  return t;
}
const er = (r) => {
  if (typeof r == "string")
    return r;
  let n, o = "";
  for (let t = 0; t < r.length; t++)
    r[t] && (n = er(r[t])) && (o && (o += " "), o += n);
  return o;
};
function Ar(r, ...n) {
  let o, t, s, i = c;
  function c(b) {
    const g = n.reduce((y, R) => R(y), r());
    return o = kr(g), t = o.cache.get, s = o.cache.set, i = p, p(b);
  }
  function p(b) {
    const g = t(b);
    if (g)
      return g;
    const y = Rr(b, o);
    return s(b, y), y;
  }
  return function() {
    return i(jr.apply(null, arguments));
  };
}
const j = (r) => {
  const n = (o) => o[r] || [];
  return n.isThemeGetter = !0, n;
}, rr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, tr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Sr = /^\d+\/\d+$/, Tr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Nr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, zr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, _r = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Mr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ce = (r) => Sr.test(r), h = (r) => !!r && !Number.isNaN(Number(r)), re = (r) => !!r && Number.isInteger(Number(r)), Je = (r) => r.endsWith("%") && h(r.slice(0, -1)), q = (r) => Tr.test(r), Pr = () => !0, Or = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Nr.test(r) && !zr.test(r)
), ze = () => !1, Gr = (r) => _r.test(r), Ir = (r) => Mr.test(r), Vr = (r) => !a(r) && !l(r), $r = (r) => de(r, sr, ze), a = (r) => rr.test(r), te = (r) => de(r, ar, Or), je = (r) => de(r, Zr, h), Lr = (r) => de(r, or, ze), Wr = (r) => de(r, nr, Ir), Yr = (r) => de(r, ze, Gr), l = (r) => tr.test(r), Ee = (r) => ue(r, ar), Ur = (r) => ue(r, Kr), Br = (r) => ue(r, or), Fr = (r) => ue(r, sr), qr = (r) => ue(r, nr), Jr = (r) => ue(r, Qr, !0), de = (r, n, o) => {
  const t = rr.exec(r);
  return t ? t[1] ? n(t[1]) : o(t[2]) : !1;
}, ue = (r, n, o = !1) => {
  const t = tr.exec(r);
  return t ? t[1] ? n(t[1]) : o : !1;
}, or = (r) => r === "position", Hr = /* @__PURE__ */ new Set(["image", "url"]), nr = (r) => Hr.has(r), Xr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), sr = (r) => Xr.has(r), ar = (r) => r === "length", Zr = (r) => r === "number", Kr = (r) => r === "family-name", Qr = (r) => r === "shadow", Dr = () => {
  const r = j("color"), n = j("font"), o = j("text"), t = j("font-weight"), s = j("tracking"), i = j("leading"), c = j("breakpoint"), p = j("container"), b = j("spacing"), g = j("radius"), y = j("shadow"), R = j("inset-shadow"), E = j("drop-shadow"), W = j("blur"), A = j("perspective"), S = j("aspect"), _ = j("ease"), G = j("animate"), J = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], I = () => ["auto", "hidden", "clip", "visible", "scroll"], B = () => ["auto", "contain", "none"], f = () => [l, a, b], M = () => [ce, "full", "auto", ...f()], be = () => [re, "none", "subgrid", l, a], pe = () => ["auto", {
    span: ["full", re, l, a]
  }, l, a], X = () => [re, "auto", l, a], ne = () => ["auto", "min", "max", "fr", l, a], Z = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], V = () => ["start", "end", "center", "stretch"], P = () => ["auto", ...f()], O = () => [ce, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...f()], v = () => [r, l, a], se = () => [Je, te], T = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    g,
    l,
    a
  ], k = () => ["", h, Ee, te], K = () => ["solid", "dashed", "dotted", "double"], $ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ve = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    W,
    l,
    a
  ], ae = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l, a], L = () => ["none", h, l, a], Q = () => ["none", h, l, a], le = () => [h, l, a], D = () => [ce, "full", ...f()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [q],
      breakpoint: [q],
      color: [Pr],
      container: [q],
      "drop-shadow": [q],
      ease: ["in", "out", "in-out"],
      font: [Vr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [q],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [q],
      shadow: [q],
      spacing: ["px", h],
      text: [q],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", ce, a, l, S]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [h, a, l, p]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": J()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": J()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...H(), a, l]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: I()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": I()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": I()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: B()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": B()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": B()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: M()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": M()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": M()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: M()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: M()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: M()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: M()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: M()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: M()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [re, "auto", l, a]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ce, "full", "auto", p, ...f()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [h, ce, "auto", "initial", "none", a]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", h, l, a]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", h, l, a]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [re, "first", "last", "none", l, a]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": be()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: pe()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": X()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": X()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": be()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: pe()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": X()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": X()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ne()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ne()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: f()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": f()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": f()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Z(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...V(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...V()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Z()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...V(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...V(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Z()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...V(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...V()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: f()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: f()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: f()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: f()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: f()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: f()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: f()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: f()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: f()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: P()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: P()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: P()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: P()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: P()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: P()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: P()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: P()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: P()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": f()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": f()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: O()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [p, "screen", ...O()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          p,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...O()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          p,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [c]
          },
          ...O()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...O()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...O()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...O()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, Ee, te]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [t, l, je]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Je, a]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ur, a, n]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [s, l, a]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [h, "none", l, je]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...f()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", l, a]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", l, a]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: v()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: v()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...K(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [h, "from-font", "auto", l, te]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: v()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [h, "auto", l, a]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: f()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l, a]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", l, a]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...H(), Br, Lr]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "space", "round"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Fr, $r]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, re, l, a],
          radial: ["", l, a],
          conic: [re, l, a]
        }, qr, Wr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: v()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: se()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: se()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: se()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: v()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: v()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: v()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: T()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": T()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": T()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": T()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": T()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": T()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": T()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": T()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": T()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": T()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": T()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": T()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": T()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": T()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": T()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: k()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": k()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": k()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": k()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": k()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": k()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": k()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": k()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": k()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": k()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": k()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...K(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...K(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: v()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": v()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": v()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": v()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": v()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": v()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": v()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": v()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": v()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: v()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...K(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [h, l, a]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", h, Ee, te]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          y,
          Jr,
          Yr
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: v()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", l, a, R]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": v()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: k()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: v()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [h, te]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": v()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": k()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": v()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [h, l, a]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...$(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": $()
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          l,
          a
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ve()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [h, l, a]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [h, l, a]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          E,
          l,
          a
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", h, l, a]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [h, l, a]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", h, l, a]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [h, l, a]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", h, l, a]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          l,
          a
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ve()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [h, l, a]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [h, l, a]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", h, l, a]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [h, l, a]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", h, l, a]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [h, l, a]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [h, l, a]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", h, l, a]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": f()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": f()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": f()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", l, a]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [h, "initial", l, a]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", _, l, a]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [h, l, a]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", G, l, a]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [A, l, a]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": ae()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: L()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": L()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": L()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": L()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Q()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Q()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Q()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Q()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: le()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": le()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": le()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [l, a, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ae()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: D()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": D()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": D()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": D()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: v()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: v()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l, a]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": f()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": f()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": f()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": f()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": f()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": f()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": f()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": f()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": f()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": f()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": f()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": f()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": f()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": f()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": f()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": f()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": f()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": f()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", l, a]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...v()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [h, Ee, te, je]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...v()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["before", "after", "placeholder", "file", "marker", "selection", "first-line", "first-letter", "backdrop", "*", "**"]
  };
}, et = /* @__PURE__ */ Ar(Dr), oe = (...r) => et(Qe(r)), He = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, Xe = Qe, fe = (r, n) => (o) => {
  var t;
  if ((n == null ? void 0 : n.variants) == null) return Xe(r, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
  const { variants: s, defaultVariants: i } = n, c = Object.keys(s).map((g) => {
    const y = o == null ? void 0 : o[g], R = i == null ? void 0 : i[g];
    if (y === null) return null;
    const E = He(y) || He(R);
    return s[g][E];
  }), p = o && Object.entries(o).reduce((g, y) => {
    let [R, E] = y;
    return E === void 0 || (g[R] = E), g;
  }, {}), b = n == null || (t = n.compoundVariants) === null || t === void 0 ? void 0 : t.reduce((g, y) => {
    let { class: R, className: E, ...W } = y;
    return Object.entries(W).every((A) => {
      let [S, _] = A;
      return Array.isArray(_) ? _.includes({
        ...i,
        ...p
      }[S]) : {
        ...i,
        ...p
      }[S] === _;
    }) ? [
      ...g,
      R,
      E
    ] : g;
  }, []);
  return Xe(r, c, b, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
}, rt = fe(
  [
    "rounded-md",
    "font-semibold",
    "hover:cursor-pointer",
    "disabled:cursor-not-allowed"
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300"
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
      },
      colorscheme: {
        primary: "text-white bg-blue-500 hover:bg-blue-400",
        secondary: "text-white bg-gray-500 hover:bg-gray-400",
        success: "text-white bg-green-500 hover:bg-green-400",
        warning: "text-black bg-yellow-500 hover:bg-yellow-400",
        danger: "text-white bg-red-500 hover:bg-red-400"
      }
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary"
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className: "border-blue-500 text-blue-500 bg-transparent"
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className: "text-blue-500 bg-transparent"
      }
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary"
    }
  }
), dt = xe(
  ({ variant: r, size: n, colorscheme: o, className: t, ...s }, i) => /* @__PURE__ */ C.jsx(
    "button",
    {
      ref: i,
      className: oe(rt({ variant: r, size: n, colorscheme: o, className: t })),
      ...s
    }
  )
), tt = fe([
  "w-full",
  "border",
  "border-gray-200",
  "p-2",
  "rounded-lg",
  "transition-all",
  "duration-100",
  "focus:outline-blue-500",
  "focus:border-transparent",
  "placeholder:text-gray-400",
  "placeholder:text-sm"
]), ut = xe(
  ({ label: r, name: n, className: o, ...t }, s) => /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsx("label", { htmlFor: n, children: r }),
    /* @__PURE__ */ C.jsx(
      "input",
      {
        ref: s,
        type: "text",
        id: n,
        name: n,
        autoComplete: "off",
        className: oe(tt({ className: o })),
        ...t
      }
    )
  ] })
), _e = xe(({ ...r }, n) => /* @__PURE__ */ C.jsx("div", { ref: n, ...r })), ft = ({ className: r, ...n }) => /* @__PURE__ */ C.jsx(_e, { className: oe("flex flex-col items-start", r), ...n }), ot = fe([
  "m-4",
  "fixed",
  "inset-0",
  "flex",
  "items-center",
  "justify-center",
  "bg-blend-darken",
  "z-40"
]), nt = fe([
  "bg-white",
  "rounded-lg",
  "p-4",
  "max-w-lg",
  "transition-all",
  "duration-200",
  "shadow-2xl"
]), bt = xe(
  ({
    isOpen: r,
    onClose: n,
    title: o,
    children: t,
    contentClassName: s,
    className: i,
    ...c
  }) => {
    const p = cr(null);
    return Ze(() => {
      const b = (g) => {
        p.current && !p.current.contains(g.target) && n();
      };
      return r && document.addEventListener("mousedown", b), () => {
        document.removeEventListener("mousedown", b);
      };
    }, [r, n]), r ? /* @__PURE__ */ C.jsx(
      "div",
      {
        ref: p,
        className: oe(ot({ className: i })),
        ...c,
        role: "dialog",
        "aria-modal": "true",
        children: /* @__PURE__ */ C.jsx("div", { className: oe(nt(), s), children: /* @__PURE__ */ C.jsx("div", { children: t }) })
      }
    ) : null;
  }
), st = fe([], {
  variants: {
    emphasis: {
      low: "text-gray-600 font-light"
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl"
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    },
    italic: {
      true: "italic"
    },
    underline: {
      true: "underline underline-offset-2"
    }
  },
  defaultVariants: {
    size: "base",
    align: "left"
  }
}), at = xe(
  ({
    as: r = "p",
    emphasis: n,
    size: o,
    weight: t,
    align: s,
    italic: i,
    underline: c,
    className: p,
    ...b
  }, g) => /* @__PURE__ */ C.jsx(
    r,
    {
      ref: g,
      className: oe(
        st({
          emphasis: n,
          size: o,
          weight: t,
          align: s,
          italic: i,
          underline: c,
          className: p
        })
      ),
      ...b
    }
  )
), lt = ({ logo: r, brand: n, href: o }) => !r && !n ? null : /* @__PURE__ */ C.jsx("a", { href: o, "aria-label": "Go to the homepage", children: /* @__PURE__ */ C.jsxs(_e, { className: "pr-6 flex gap-2 items-center", children: [
  r,
  n && /* @__PURE__ */ C.jsx(at, { children: n })
] }) }), it = fe(["w-full", "px-6", "py-4", "transition-all"], {
  variants: {
    outline: {
      true: "border-b-2",
      false: "border-none"
    },
    size: {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-4 text-base",
      lg: "px-8 py-6 text-lg"
    },
    fixed: {
      true: "fixed top-0 z-50",
      false: "relative"
    }
  },
  defaultVariants: {
    outline: !1,
    size: "md",
    fixed: !1
  }
}), pt = ({
  outline: r,
  size: n,
  fixed: o,
  themeOnScroll: t,
  logo: s,
  brand: i,
  brandHref: c,
  links: p,
  className: b,
  ...g
}) => {
  const [y, R] = dr(!1);
  return Ze(() => {
    if (!t) return;
    const E = () => {
      R(window.scrollY > 1);
    };
    return window.addEventListener("scroll", E), () => window.removeEventListener("scroll", E);
  }, [t]), /* @__PURE__ */ C.jsx(
    "nav",
    {
      className: oe(
        it({
          outline: r,
          size: n,
          fixed: o,
          className: b
        }),
        "transition-all duration-300 ease-in-out",
        y && `${t == null ? void 0 : t.textColor} ${t == null ? void 0 : t.backgroundColor} ${t == null ? void 0 : t.shadow}`
      ),
      ...g,
      children: /* @__PURE__ */ C.jsxs(_e, { className: "font-bold text-xl flex justify-between items-center", children: [
        /* @__PURE__ */ C.jsx(lt, { logo: s, brand: i, href: c }),
        /* @__PURE__ */ C.jsx("ul", { className: "flex", children: p.map((E) => /* @__PURE__ */ C.jsx("li", { children: /* @__PURE__ */ C.jsx(
          "a",
          {
            href: E.href,
            className: "text-base transition-colors pl-0 pr-6",
            children: E.name
          }
        ) }, E.name)) })
      ] })
    }
  );
};
export {
  _e as Box,
  dt as Button,
  ut as Input,
  bt as Modal,
  pt as Navbar,
  ft as Stack,
  at as Text
};
