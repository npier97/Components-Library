import Qe, { forwardRef as ge, useState as De, useEffect as er } from "react";
var pe = { exports: {} }, ie = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function rr() {
  if (Ge) return ie;
  Ge = 1;
  var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function o(n, a, s) {
    var d = null;
    if (s !== void 0 && (d = "" + s), a.key !== void 0 && (d = "" + a.key), "key" in a) {
      s = {};
      for (var l in a)
        l !== "key" && (s[l] = a[l]);
    } else s = a;
    return a = s.ref, {
      $$typeof: r,
      type: n,
      key: d,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return ie.Fragment = t, ie.jsx = o, ie.jsxs = o, ie;
}
var ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function tr() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ne ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case q:
          return "Fragment";
        case B:
          return "Portal";
        case te:
          return "Profiler";
        case re:
          return "StrictMode";
        case h:
          return "Suspense";
        case X:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case F:
            return (e.displayName || "Context") + ".Provider";
          case J:
            return (e._context.displayName || "Context") + ".Consumer";
          case U:
            var i = e.render;
            return e = e.displayName, e || (e = i.displayName || i.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case V:
            return i = e.displayName || null, i !== null ? i : r(e.type) || "Memo";
          case H:
            i = e._payload, e = e._init;
            try {
              return r(e(i));
            } catch {
            }
        }
      return null;
    }
    function t(e) {
      return "" + e;
    }
    function o(e) {
      try {
        t(e);
        var i = !1;
      } catch {
        i = !0;
      }
      if (i) {
        i = console;
        var c = i.error, p = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          i,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          p
        ), t(e);
      }
    }
    function n() {
    }
    function a() {
      if (ae === 0) {
        ke = console.log, Se = console.info, je = console.warn, Ae = console.error, Re = console.group, Te = console.groupCollapsed, Ne = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: n,
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
      ae++;
    }
    function s() {
      if (ae--, ae === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: S({}, e, { value: ke }),
          info: S({}, e, { value: Se }),
          warn: S({}, e, { value: je }),
          error: S({}, e, { value: Ae }),
          group: S({}, e, { value: Re }),
          groupCollapsed: S({}, e, { value: Te }),
          groupEnd: S({}, e, { value: Ne })
        });
      }
      0 > ae && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function d(e) {
      if (ve === void 0)
        try {
          throw Error();
        } catch (c) {
          var i = c.stack.trim().match(/\n( *(at )?)/);
          ve = i && i[1] || "", _e = -1 < c.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < c.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + ve + e + _e;
    }
    function l(e, i) {
      if (!e || xe) return "";
      var c = ye.get(e);
      if (c !== void 0) return c;
      xe = !0, c = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var p = null;
      p = z.H, z.H = null, a();
      try {
        var j = {
          DetermineComponentFrameRoot: function() {
            try {
              if (i) {
                var W = function() {
                  throw Error();
                };
                if (Object.defineProperty(W.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(W, []);
                  } catch (M) {
                    var be = M;
                  }
                  Reflect.construct(e, [], W);
                } else {
                  try {
                    W.call();
                  } catch (M) {
                    be = M;
                  }
                  e.call(W.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (M) {
                  be = M;
                }
                (W = e()) && typeof W.catch == "function" && W.catch(function() {
                });
              }
            } catch (M) {
              if (M && be && typeof M.stack == "string")
                return [M.stack, be.stack];
            }
            return [null, null];
          }
        };
        j.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var E = Object.getOwnPropertyDescriptor(
          j.DetermineComponentFrameRoot,
          "name"
        );
        E && E.configurable && Object.defineProperty(
          j.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var f = j.DetermineComponentFrameRoot(), P = f[0], K = f[1];
        if (P && K) {
          var R = P.split(`
`), L = K.split(`
`);
          for (f = E = 0; E < R.length && !R[E].includes(
            "DetermineComponentFrameRoot"
          ); )
            E++;
          for (; f < L.length && !L[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          if (E === R.length || f === L.length)
            for (E = R.length - 1, f = L.length - 1; 1 <= E && 0 <= f && R[E] !== L[f]; )
              f--;
          for (; 1 <= E && 0 <= f; E--, f--)
            if (R[E] !== L[f]) {
              if (E !== 1 || f !== 1)
                do
                  if (E--, f--, 0 > f || R[E] !== L[f]) {
                    var le = `
` + R[E].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", e.displayName)), typeof e == "function" && ye.set(e, le), le;
                  }
                while (1 <= E && 0 <= f);
              break;
            }
        }
      } finally {
        xe = !1, z.H = p, s(), Error.prepareStackTrace = c;
      }
      return R = (R = e ? e.displayName || e.name : "") ? d(R) : "", typeof e == "function" && ye.set(e, R), R;
    }
    function g(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var i = e.prototype;
        return l(
          e,
          !(!i || !i.isReactComponent)
        );
      }
      if (typeof e == "string") return d(e);
      switch (e) {
        case h:
          return d("Suspense");
        case X:
          return d("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case U:
            return e = l(e.render, !1), e;
          case V:
            return g(e.type);
          case H:
            i = e._payload, e = e._init;
            try {
              return g(e(i));
            } catch {
            }
        }
      return "";
    }
    function b() {
      var e = z.A;
      return e === null ? null : e.getOwner();
    }
    function v(e) {
      if (se.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function x(e, i) {
      function c() {
        ze || (ze = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          i
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function C() {
      var e = r(this.type);
      return Oe[e] || (Oe[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function _(e, i, c, p, j, E) {
      return c = E.ref, e = {
        $$typeof: O,
        type: e,
        key: i,
        props: E,
        _owner: j
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: C
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
    function A(e, i, c, p, j, E) {
      if (typeof e == "string" || typeof e == "function" || e === q || e === te || e === re || e === h || e === X || e === Z || typeof e == "object" && e !== null && (e.$$typeof === H || e.$$typeof === V || e.$$typeof === F || e.$$typeof === J || e.$$typeof === U || e.$$typeof === Ze || e.getModuleId !== void 0)) {
        var f = i.children;
        if (f !== void 0)
          if (p)
            if (he(f)) {
              for (p = 0; p < f.length; p++)
                w(f[p], e);
              Object.freeze && Object.freeze(f);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else w(f, e);
      } else
        f = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? p = "null" : he(e) ? p = "array" : e !== void 0 && e.$$typeof === O ? (p = "<" + (r(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          p,
          f
        );
      if (se.call(i, "key")) {
        f = r(e);
        var P = Object.keys(i).filter(function(R) {
          return R !== "key";
        });
        p = 0 < P.length ? "{key: someKey, " + P.join(": ..., ") + ": ...}" : "{key: someKey}", Pe[f + p] || (P = 0 < P.length ? "{" + P.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          p,
          f,
          P,
          f
        ), Pe[f + p] = !0);
      }
      if (f = null, c !== void 0 && (o(c), f = "" + c), v(i) && (o(i.key), f = "" + i.key), "key" in i) {
        c = {};
        for (var K in i)
          K !== "key" && (c[K] = i[K]);
      } else c = i;
      return f && x(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), _(e, f, E, j, b(), c);
    }
    function w(e, i) {
      if (typeof e == "object" && e && e.$$typeof !== Ke) {
        if (he(e))
          for (var c = 0; c < e.length; c++) {
            var p = e[c];
            m(p) && k(p, i);
          }
        else if (m(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? c = null : (c = oe && e[oe] || e["@@iterator"], c = typeof c == "function" ? c : null), typeof c == "function" && c !== e.entries && (c = c.call(e), c !== e))
          for (; !(e = c.next()).done; )
            m(e.value) && k(e.value, i);
      }
    }
    function m(e) {
      return typeof e == "object" && e !== null && e.$$typeof === O;
    }
    function k(e, i) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, i = N(i), !Me[i])) {
        Me[i] = !0;
        var c = "";
        e && e._owner != null && e._owner !== b() && (c = null, typeof e._owner.tag == "number" ? c = r(e._owner.type) : typeof e._owner.name == "string" && (c = e._owner.name), c = " It was passed a child from " + c + ".");
        var p = z.getCurrentStack;
        z.getCurrentStack = function() {
          var j = g(e.type);
          return p && (j += p() || ""), j;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          i,
          c
        ), z.getCurrentStack = p;
      }
    }
    function N(e) {
      var i = "", c = b();
      return c && (c = r(c.type)) && (i = `

Check the render method of \`` + c + "`."), i || (e = r(e)) && (i = `

Check the top-level render call using <` + e + ">."), i;
    }
    var Y = Qe, O = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), q = Symbol.for("react.fragment"), re = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), F = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), oe = Symbol.iterator, ne = Symbol.for("react.client.reference"), z = Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, se = Object.prototype.hasOwnProperty, S = Object.assign, Ze = Symbol.for("react.client.reference"), he = Array.isArray, ae = 0, ke, Se, je, Ae, Re, Te, Ne;
    n.__reactDisabledLog = !0;
    var ve, _e, xe = !1, ye = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ke = Symbol.for("react.client.reference"), ze, Oe = {}, Pe = {}, Me = {};
    ce.Fragment = q, ce.jsx = function(e, i, c, p, j) {
      return A(e, i, c, !1, p, j);
    }, ce.jsxs = function(e, i, c, p, j) {
      return A(e, i, c, !0, p, j);
    };
  }()), ce;
}
var We;
function or() {
  return We || (We = 1, process.env.NODE_ENV === "production" ? pe.exports = rr() : pe.exports = tr()), pe.exports;
}
var T = or();
function Le(r) {
  var t, o, n = "";
  if (typeof r == "string" || typeof r == "number") n += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var a = r.length;
    for (t = 0; t < a; t++) r[t] && (o = Le(r[t])) && (n && (n += " "), n += o);
  } else for (o in r) r[o] && (n && (n += " "), n += o);
  return n;
}
function Be() {
  for (var r, t, o = 0, n = "", a = arguments.length; o < a; o++) (r = arguments[o]) && (t = Le(r)) && (n && (n += " "), n += t);
  return n;
}
const Ce = "-", nr = (r) => {
  const t = ar(r), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: n
  } = r;
  return {
    getClassGroupId: (d) => {
      const l = d.split(Ce);
      return l[0] === "" && l.length !== 1 && l.shift(), qe(l, t) || sr(d);
    },
    getConflictingClassGroupIds: (d, l) => {
      const g = o[d] || [];
      return l && n[d] ? [...g, ...n[d]] : g;
    }
  };
}, qe = (r, t) => {
  var d;
  if (r.length === 0)
    return t.classGroupId;
  const o = r[0], n = t.nextPart.get(o), a = n ? qe(r.slice(1), n) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const s = r.join(Ce);
  return (d = t.validators.find(({
    validator: l
  }) => l(s))) == null ? void 0 : d.classGroupId;
}, $e = /^\[(.+)\]$/, sr = (r) => {
  if ($e.test(r)) {
    const t = $e.exec(r)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, ar = (r) => {
  const {
    theme: t,
    prefix: o
  } = r, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ir(Object.entries(r.classGroups), o).forEach(([s, d]) => {
    Ee(d, n, s, t);
  }), n;
}, Ee = (r, t, o, n) => {
  r.forEach((a) => {
    if (typeof a == "string") {
      const s = a === "" ? t : Ie(t, a);
      s.classGroupId = o;
      return;
    }
    if (typeof a == "function") {
      if (lr(a)) {
        Ee(a(n), t, o, n);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: o
      });
      return;
    }
    Object.entries(a).forEach(([s, d]) => {
      Ee(d, Ie(t, s), o, n);
    });
  });
}, Ie = (r, t) => {
  let o = r;
  return t.split(Ce).forEach((n) => {
    o.nextPart.has(n) || o.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(n);
  }), o;
}, lr = (r) => r.isThemeGetter, ir = (r, t) => t ? r.map(([o, n]) => {
  const a = n.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([d, l]) => [t + d, l])) : s);
  return [o, a];
}) : r, cr = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const a = (s, d) => {
    o.set(s, d), t++, t > r && (t = 0, n = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let d = o.get(s);
      if (d !== void 0)
        return d;
      if ((d = n.get(s)) !== void 0)
        return a(s, d), d;
    },
    set(s, d) {
      o.has(s) ? o.set(s, d) : a(s, d);
    }
  };
}, Je = "!", dr = (r) => {
  const {
    separator: t,
    experimentalParseClassName: o
  } = r, n = t.length === 1, a = t[0], s = t.length, d = (l) => {
    const g = [];
    let b = 0, v = 0, x;
    for (let m = 0; m < l.length; m++) {
      let k = l[m];
      if (b === 0) {
        if (k === a && (n || l.slice(m, m + s) === t)) {
          g.push(l.slice(v, m)), v = m + s;
          continue;
        }
        if (k === "/") {
          x = m;
          continue;
        }
      }
      k === "[" ? b++ : k === "]" && b--;
    }
    const C = g.length === 0 ? l : l.substring(v), _ = C.startsWith(Je), A = _ ? C.substring(1) : C, w = x && x > v ? x - v : void 0;
    return {
      modifiers: g,
      hasImportantModifier: _,
      baseClassName: A,
      maybePostfixModifierPosition: w
    };
  };
  return o ? (l) => o({
    className: l,
    parseClassName: d
  }) : d;
}, ur = (r) => {
  if (r.length <= 1)
    return r;
  const t = [];
  let o = [];
  return r.forEach((n) => {
    n[0] === "[" ? (t.push(...o.sort(), n), o = []) : o.push(n);
  }), t.push(...o.sort()), t;
}, fr = (r) => ({
  cache: cr(r.cacheSize),
  parseClassName: dr(r),
  ...nr(r)
}), br = /\s+/, pr = (r, t) => {
  const {
    parseClassName: o,
    getClassGroupId: n,
    getConflictingClassGroupIds: a
  } = t, s = [], d = r.trim().split(br);
  let l = "";
  for (let g = d.length - 1; g >= 0; g -= 1) {
    const b = d[g], {
      modifiers: v,
      hasImportantModifier: x,
      baseClassName: C,
      maybePostfixModifierPosition: _
    } = o(b);
    let A = !!_, w = n(A ? C.substring(0, _) : C);
    if (!w) {
      if (!A) {
        l = b + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (w = n(C), !w) {
        l = b + (l.length > 0 ? " " + l : l);
        continue;
      }
      A = !1;
    }
    const m = ur(v).join(":"), k = x ? m + Je : m, N = k + w;
    if (s.includes(N))
      continue;
    s.push(N);
    const Y = a(w, A);
    for (let O = 0; O < Y.length; ++O) {
      const B = Y[O];
      s.push(k + B);
    }
    l = b + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function gr() {
  let r = 0, t, o, n = "";
  for (; r < arguments.length; )
    (t = arguments[r++]) && (o = Fe(t)) && (n && (n += " "), n += o);
  return n;
}
const Fe = (r) => {
  if (typeof r == "string")
    return r;
  let t, o = "";
  for (let n = 0; n < r.length; n++)
    r[n] && (t = Fe(r[n])) && (o && (o += " "), o += t);
  return o;
};
function mr(r, ...t) {
  let o, n, a, s = d;
  function d(g) {
    const b = t.reduce((v, x) => x(v), r());
    return o = fr(b), n = o.cache.get, a = o.cache.set, s = l, l(g);
  }
  function l(g) {
    const b = n(g);
    if (b)
      return b;
    const v = pr(g, o);
    return a(g, v), v;
  }
  return function() {
    return s(gr.apply(null, arguments));
  };
}
const y = (r) => {
  const t = (o) => o[r] || [];
  return t.isThemeGetter = !0, t;
}, Xe = /^\[(?:([a-z-]+):)?(.+)\]$/i, hr = /^\d+\/\d+$/, vr = /* @__PURE__ */ new Set(["px", "full", "screen"]), xr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, yr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, wr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Er = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Cr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, G = (r) => D(r) || vr.has(r) || hr.test(r), $ = (r) => ee(r, "length", _r), D = (r) => !!r && !Number.isNaN(Number(r)), we = (r) => ee(r, "number", D), de = (r) => !!r && Number.isInteger(Number(r)), kr = (r) => r.endsWith("%") && D(r.slice(0, -1)), u = (r) => Xe.test(r), I = (r) => xr.test(r), Sr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), jr = (r) => ee(r, Sr, He), Ar = (r) => ee(r, "position", He), Rr = /* @__PURE__ */ new Set(["image", "url"]), Tr = (r) => ee(r, Rr, Or), Nr = (r) => ee(r, "", zr), ue = () => !0, ee = (r, t, o) => {
  const n = Xe.exec(r);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : o(n[2]) : !1;
}, _r = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  yr.test(r) && !wr.test(r)
), He = () => !1, zr = (r) => Er.test(r), Or = (r) => Cr.test(r), Pr = () => {
  const r = y("colors"), t = y("spacing"), o = y("blur"), n = y("brightness"), a = y("borderColor"), s = y("borderRadius"), d = y("borderSpacing"), l = y("borderWidth"), g = y("contrast"), b = y("grayscale"), v = y("hueRotate"), x = y("invert"), C = y("gap"), _ = y("gradientColorStops"), A = y("gradientColorStopPositions"), w = y("inset"), m = y("margin"), k = y("opacity"), N = y("padding"), Y = y("saturate"), O = y("scale"), B = y("sepia"), q = y("skew"), re = y("space"), te = y("translate"), J = () => ["auto", "contain", "none"], F = () => ["auto", "hidden", "clip", "visible", "scroll"], U = () => ["auto", u, t], h = () => [u, t], X = () => ["", G, $], V = () => ["auto", D, u], H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Z = () => ["solid", "dashed", "dotted", "double", "none"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ne = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], z = () => ["", "0", u], se = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [D, u];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ue],
      spacing: [G, $],
      blur: ["none", "", I, u],
      brightness: S(),
      borderColor: [r],
      borderRadius: ["none", "", "full", I, u],
      borderSpacing: h(),
      borderWidth: X(),
      contrast: S(),
      grayscale: z(),
      hueRotate: S(),
      invert: z(),
      gap: h(),
      gradientColorStops: [r],
      gradientColorStopPositions: [kr, $],
      inset: U(),
      margin: U(),
      opacity: S(),
      padding: h(),
      saturate: S(),
      scale: S(),
      sepia: z(),
      skew: S(),
      space: h(),
      translate: h()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", u]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [I]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": se()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": se()
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
        object: [...H(), u]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: F()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": F()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": F()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: J()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": J()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": J()
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
        inset: [w]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [w]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [w]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [w]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [w]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [w]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [w]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [w]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [w]
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
        z: ["auto", de, u]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: U()
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
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", u]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: z()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: z()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", de, u]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ue]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", de, u]
        }, u]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": V()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": V()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ue]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [de, u]
        }, u]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": V()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": V()
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
        "auto-cols": ["auto", "min", "max", "fr", u]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", u]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [C]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [C]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [C]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...ne()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ne(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...ne(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [N]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [N]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [N]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [N]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [N]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [N]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [N]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [N]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [N]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [m]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [m]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [m]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [m]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [m]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [m]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [m]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [m]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [m]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [re]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [re]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", u, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [u, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [u, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [I]
        }, I]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [u, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [u, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [u, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [u, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", I, $]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", we]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ue]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", u]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", D, we]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", G, u]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", u]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", u]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [r]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [k]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [r]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [k]
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
        decoration: [...Z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", G, $]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", G, u]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [r]
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
        indent: h()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", u]
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
        content: ["none", u]
      }],
      // Backgrounds
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
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [k]
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
        bg: [...H(), Ar]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", jr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Tr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [r]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [A]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [A]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [A]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [_]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [_]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [_]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [k]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Z(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [k]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: Z()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [a]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...Z()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [G, u]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [G, $]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: X()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [r]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [k]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [G, $]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [r]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", I, Nr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ue]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [k]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...oe(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": oe()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [o]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [g]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", I, u]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [b]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [v]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [x]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [B]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [o]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [g]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [b]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [v]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [x]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [k]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [B]
      }],
      // Tables
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
        "border-spacing": [d]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [d]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [d]
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
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", u]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: S()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", u]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: S()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", u]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [O]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [O]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [O]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [de, u]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [te]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [te]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [q]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [q]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", u]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", r]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", u]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [r]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
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
        "scroll-m": h()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": h()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": h()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": h()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": h()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": h()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": h()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": h()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": h()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": h()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": h()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": h()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": h()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": h()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": h()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": h()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": h()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": h()
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
        "will-change": ["auto", "scroll", "contents", "transform", u]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [r, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [G, $, we]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [r, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
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
    }
  };
}, Mr = /* @__PURE__ */ mr(Pr), fe = (...r) => Mr(Be(r)), Ye = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, Ue = Be, me = (r, t) => (o) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Ue(r, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
  const { variants: a, defaultVariants: s } = t, d = Object.keys(a).map((b) => {
    const v = o == null ? void 0 : o[b], x = s == null ? void 0 : s[b];
    if (v === null) return null;
    const C = Ye(v) || Ye(x);
    return a[b][C];
  }), l = o && Object.entries(o).reduce((b, v) => {
    let [x, C] = v;
    return C === void 0 || (b[x] = C), b;
  }, {}), g = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((b, v) => {
    let { class: x, className: C, ..._ } = v;
    return Object.entries(_).every((A) => {
      let [w, m] = A;
      return Array.isArray(m) ? m.includes({
        ...s,
        ...l
      }[w]) : {
        ...s,
        ...l
      }[w] === m;
    }) ? [
      ...b,
      x,
      C
    ] : b;
  }, []);
  return Ue(r, d, g, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
}, Gr = me(
  [
    "rounded-md",
    "font-semibold",
    "focus: outline-none",
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
), Yr = ge(
  ({ variant: r, size: t, colorscheme: o, className: n, ...a }, s) => /* @__PURE__ */ T.jsx(
    "button",
    {
      ref: s,
      className: fe(Gr({ variant: r, size: t, colorscheme: o, className: n })),
      ...a
    }
  )
), Vr = me([
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
]), Ur = ge(
  ({ label: r, name: t, className: o, ...n }, a) => /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
    /* @__PURE__ */ T.jsx("label", { htmlFor: t, children: r }),
    /* @__PURE__ */ T.jsx(
      "input",
      {
        ref: a,
        type: "text",
        id: t,
        name: t,
        autoComplete: "off",
        className: fe(Vr({ className: o })),
        ...n
      }
    )
  ] })
), Q = ge(({ ...r }, t) => /* @__PURE__ */ T.jsx("div", { ref: t, ...r })), Lr = ({ className: r, ...t }) => /* @__PURE__ */ T.jsx(Q, { className: fe("flex flex-col items-start", r), ...t }), Wr = me(["w-full", "px-6", "py-4", "transition-all"], {
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
    },
    shadowOnScroll: {
      true: "shadow-lg",
      false: "shadow-none"
    }
  },
  defaultVariants: {
    outline: !1,
    size: "md",
    fixed: !1,
    shadowOnScroll: !1
  }
}), Br = ({
  outline: r,
  size: t,
  fixed: o,
  shadowOnScroll: n,
  logo: a,
  brand: s,
  links: d,
  className: l,
  ...g
}) => {
  const [b, v] = De(!1);
  return er(() => {
    if (!n) return;
    const x = () => {
      v(window.scrollY > 1);
    };
    return window.addEventListener("scroll", x), () => window.removeEventListener("scroll", x);
  }, [n]), /* @__PURE__ */ T.jsx(
    "nav",
    {
      className: fe(
        Wr({
          outline: r,
          size: t,
          fixed: o,
          shadowOnScroll: n && b,
          className: l
        })
      ),
      ...g,
      children: /* @__PURE__ */ T.jsxs(Q, { className: "font-bold text-xl flex justify-between", children: [
        /* @__PURE__ */ T.jsxs(Q, { className: "pr-6 flex gap-2", children: [
          /* @__PURE__ */ T.jsx(Q, { children: a }),
          /* @__PURE__ */ T.jsx(Q, { children: s })
        ] }),
        /* @__PURE__ */ T.jsx(Q, { children: d.map((x) => /* @__PURE__ */ T.jsx(
          "a",
          {
            href: x.href,
            className: "text-base transition-colors pl-0 pr-6",
            children: x.name
          },
          x.name
        )) })
      ] })
    }
  );
}, $r = me("w-full", {
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
}), qr = ge(
  ({
    as: r = "p",
    emphasis: t,
    size: o,
    weight: n,
    align: a,
    italic: s,
    underline: d,
    className: l,
    ...g
  }, b) => /* @__PURE__ */ T.jsx(
    r,
    {
      ref: b,
      className: fe(
        $r({
          emphasis: t,
          size: o,
          weight: n,
          align: a,
          italic: s,
          underline: d,
          className: l
        })
      ),
      ...g
    }
  )
);
export {
  Q as Box,
  Yr as Button,
  Ur as Input,
  Br as Navbar,
  Lr as Stack,
  qr as Text
};
