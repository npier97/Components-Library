import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
import { useEffect as r, useRef as i, useState as a } from "react";
// node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function o(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = o(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function s() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = o(e)) && (r && (r += " "), r += t);
	return r;
}
// node_modules/.pnpm/tailwind-merge@3.7.1/node_modules/tailwind-merge/dist/bundle-mjs.mjs
var c = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, l = (e, t) => ({
	classGroupId: e,
	validator: t
}), u = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), d = "-", f = [], p = "arbitrary..", m = (e) => {
	let t = ee(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return g(e);
			let n = e.split(d);
			return h(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? c(i, t) : t : i || f;
			}
			return n[e] || f;
		}
	};
}, h = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = h(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(d) : e.slice(t).join(d), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, g = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? p + r : void 0;
})(), ee = (e) => {
	let { theme: t, classGroups: n } = e;
	return te(n, t);
}, te = (e, t) => {
	let n = u();
	for (let r in e) {
		let i = e[r];
		_(i, n, r, t);
	}
	return n;
}, _ = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		v(i, t, n, r);
	}
}, v = (e, t, n, r) => {
	typeof e == "string" ? y(e, t, n) : typeof e == "function" ? b(e, t, n, r) : x(e, t, n, r);
}, y = (e, t, n) => {
	let r = e === "" ? t : S(t, e);
	r.classGroupId = n;
}, b = (e, t, n, r) => {
	C(e) ? _(e(r), t, n, r) : (t.validators === null && (t.validators = []), t.validators.push(l(n, e)));
}, x = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		_(o, S(t, a), n, r);
	}
}, S = (e, t) => {
	let n = e, r = t.split(d), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = u(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, C = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, ne = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, w = "!", T = ":", re = [], E = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), D = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let c = e[s];
			if (n === 0 && r === 0) {
				if (c === T) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (c === "/") {
					a = s;
					continue;
				}
			}
			if (c === "[") n++;
			else if (c === "]") n--;
			else if (c === "(") r++;
			else if (c === ")") r--;
			else if (c === "\\") s++;
			else if (c === "\"" || c === "'") for (; ++s < o;) {
				let t = e[s];
				if (t === "\\") s++;
				else if (t === c) break;
			}
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(w) ? (c = s.slice(0, -1), l = !0) : s.startsWith(w) && (c = s.slice(1), l = !0);
		let u = l && s.startsWith(w) ? 1 : 0, d = a && a > i ? a - i - u : void 0;
		return E(t, l, c, d);
	};
	if (t) {
		let e = t + T, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : E(re, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, O = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, k = (e) => ({
	cache: ne(e.cacheSize),
	parseClassName: D(e),
	sortModifiers: O(e),
	postfixLookupClassGroupIds: A(e),
	...m(e)
}), A = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, ie = /\s+/, j = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(ie), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let h = !!m, g;
		if (h) {
			g = r(p.substring(0, m));
			let e = g && o[g] ? r(p) : void 0;
			e && e !== g && (g = e, h = !1);
		} else g = r(p);
		if (!g) {
			if (!h || (g = r(p), !g)) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			h = !1;
		}
		let ee = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), te = f ? ee + w : ee, _ = te + g;
		if (s.indexOf(_) > -1) continue;
		s.push(_);
		let v = i(g, h);
		for (let e = 0; e < v.length; ++e) {
			let t = v[e];
			s.push(te + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
}, ae = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = oe(n)) && (i && (i += " "), i += r);
	return i;
}, oe = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = oe(e[r])) && (n && (n += " "), n += t);
	return n;
}, se = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = k(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = j(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(ae(...e));
}, ce = [], M = (e) => {
	let t = (t) => t[e] || ce;
	return t.isThemeGetter = !0, t.themeKey = e, t;
}, N = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, P = /^\((?:(\w[\w-]*):)?(.+)\)$/i, F = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, le = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, I = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|Q|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^--spacing\(.+\)|^0$/, L = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark|contrast-color|device-cmyk|--alpha)\(.+\)$/i, R = /^(?:_*[+-]?(?:\d|\.\d)|[\w-]+\(|_*(?:inherit|initial|revert(?:-layer)?|unset)_*$)/i, z = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, B = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, V = (e) => F.test(e), H = (e) => !!e && !Number.isNaN(Number(e)), U = (e) => !!e && Number.isInteger(Number(e)), ue = (e) => e.endsWith("%") && H(e.slice(0, -1)), W = (e) => le.test(e), de = () => !0, G = (e) => I.test(e) && !L.test(e), fe = (e) => R.test(e) && !L.test(e), pe = () => !1, me = (e) => z.test(e), he = (e) => B.test(e), ge = (e) => !K(e) && !J(e), _e = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), ve = (e) => X(e, Fe, pe), K = (e) => N.test(e), q = (e) => X(e, Ie, G), ye = (e) => X(e, Le, fe), be = (e) => X(e, Re, H), xe = (e) => X(e, Be, de), Se = (e) => X(e, ze, pe), Ce = (e) => X(e, Ne, pe), we = (e) => X(e, Pe, he), Te = (e) => X(e, Ve, me), J = (e) => P.test(e), Y = (e) => Z(e, Ie), Ee = (e) => Z(e, Le, !0), De = (e) => Z(e, ze), Oe = (e) => Z(e, Ne), ke = (e) => Z(e, Fe), Ae = (e) => Z(e, Pe), je = (e) => Z(e, Ve, !0), Me = (e) => Z(e, Be, !0), X = (e, t, n) => {
	let r = N.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Z = (e, t, n = !1) => {
	let r = P.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Ne = (e) => e === "position" || e === "percentage", Pe = (e) => e === "image" || e === "url", Fe = (e) => e === "length" || e === "size" || e === "bg-size", Ie = (e) => e === "length", Le = (e) => e !== "color", Re = (e) => e === "number", ze = (e) => e === "family-name", Be = (e) => e === "number" || e === "weight", Ve = (e) => e === "shadow", He = /*#__PURE__*/ se(() => {
	let e = M("color"), t = M("font"), n = M("text"), r = M("font-weight"), i = M("tracking"), a = M("leading"), o = M("breakpoint"), s = M("container"), c = M("spacing"), l = M("radius"), u = M("shadow"), d = M("inset-shadow"), f = M("text-shadow"), p = M("drop-shadow"), m = M("blur"), h = M("perspective"), g = M("aspect"), ee = M("ease"), te = M("animate"), _ = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], v = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], y = () => [
		...v(),
		J,
		K
	], b = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], x = () => [
		"auto",
		"contain",
		"none"
	], S = () => [
		J,
		K,
		c
	], C = () => [
		V,
		"full",
		"auto",
		...S()
	], ne = () => [
		U,
		"none",
		"subgrid",
		J,
		K
	], w = () => [
		"auto",
		{ span: [
			"full",
			U,
			J,
			K
		] },
		U,
		J,
		K
	], T = () => [
		U,
		"auto",
		J,
		K
	], re = () => [
		"auto",
		"min",
		"max",
		"fr",
		J,
		K
	], E = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], D = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], O = () => ["auto", ...S()], k = () => [
		V,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...S()
	], A = () => [
		s,
		V,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...S()
	], ie = () => [
		V,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...S()
	], j = () => [
		e,
		J,
		K
	], ae = () => [
		...v(),
		Oe,
		Ce,
		{ position: [J, K] }
	], oe = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], se = () => [
		"auto",
		"cover",
		"contain",
		ke,
		ve,
		{ size: [J, K] }
	], ce = () => [
		ue,
		Y,
		q
	], N = () => [
		"",
		"none",
		"full",
		l,
		J,
		K
	], P = () => [
		"",
		H,
		Y,
		q
	], F = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], le = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], I = () => [
		H,
		ue,
		Ee,
		ye
	], L = () => [
		"",
		"none",
		m,
		J,
		K
	], R = () => [
		"none",
		H,
		J,
		K
	], z = () => [
		"none",
		H,
		J,
		K
	], B = () => [
		H,
		J,
		K
	], G = () => [
		V,
		"full",
		...S()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [W],
			breakpoint: [W],
			color: [de],
			container: [W],
			"drop-shadow": [W],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [ge],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [W],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [W],
			shadow: [W],
			spacing: ["px", H],
			text: [W],
			"text-shadow": [W],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				V,
				K,
				J,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				J,
				K
			] }],
			"container-named": [_e],
			columns: [{ columns: [
				H,
				"auto",
				K,
				J,
				s
			] }],
			"break-after": [{ "break-after": _() }],
			"break-before": [{ "break-before": _() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only"],
			"not-sr": ["not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: y() }],
			overflow: [{ overflow: b() }],
			"overflow-x": [{ "overflow-x": b() }],
			"overflow-y": [{ "overflow-y": b() }],
			overscroll: [{ overscroll: x() }],
			"overscroll-x": [{ "overscroll-x": x() }],
			"overscroll-y": [{ "overscroll-y": x() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: C() }],
			"inset-x": [{ "inset-x": C() }],
			"inset-y": [{ "inset-y": C() }],
			start: [{
				"inset-s": C(),
				start: C()
			}],
			end: [{
				"inset-e": C(),
				end: C()
			}],
			"inset-bs": [{ "inset-bs": C() }],
			"inset-be": [{ "inset-be": C() }],
			top: [{ top: C() }],
			right: [{ right: C() }],
			bottom: [{ bottom: C() }],
			left: [{ left: C() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				U,
				"auto",
				J,
				K
			] }],
			basis: [{ basis: [
				V,
				"full",
				"auto",
				s,
				...S()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				H,
				V,
				"auto",
				"initial",
				"none",
				J,
				K
			] }],
			grow: [{ grow: [
				"",
				H,
				J,
				K
			] }],
			shrink: [{ shrink: [
				"",
				H,
				J,
				K
			] }],
			order: [{ order: [
				U,
				"first",
				"last",
				"none",
				J,
				K
			] }],
			"grid-cols": [{ "grid-cols": ne() }],
			"col-start-end": [{ col: w() }],
			"col-start": [{ "col-start": T() }],
			"col-end": [{ "col-end": T() }],
			"grid-rows": [{ "grid-rows": ne() }],
			"row-start-end": [{ row: w() }],
			"row-start": [{ "row-start": T() }],
			"row-end": [{ "row-end": T() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": re() }],
			"auto-rows": [{ "auto-rows": re() }],
			gap: [{ gap: S() }],
			"gap-x": [{ "gap-x": S() }],
			"gap-y": [{ "gap-y": S() }],
			"justify-content": [{ justify: [...E(), "normal"] }],
			"justify-items": [{ "justify-items": [...D(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...D()] }],
			"align-content": [{ content: ["normal", ...E()] }],
			"align-items": [{ items: [...D(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...D(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": E() }],
			"place-items": [{ "place-items": [...D(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...D()] }],
			p: [{ p: S() }],
			px: [{ px: S() }],
			py: [{ py: S() }],
			ps: [{ ps: S() }],
			pe: [{ pe: S() }],
			pbs: [{ pbs: S() }],
			pbe: [{ pbe: S() }],
			pt: [{ pt: S() }],
			pr: [{ pr: S() }],
			pb: [{ pb: S() }],
			pl: [{ pl: S() }],
			m: [{ m: O() }],
			mx: [{ mx: O() }],
			my: [{ my: O() }],
			ms: [{ ms: O() }],
			me: [{ me: O() }],
			mbs: [{ mbs: O() }],
			mbe: [{ mbe: O() }],
			mt: [{ mt: O() }],
			mr: [{ mr: O() }],
			mb: [{ mb: O() }],
			ml: [{ ml: O() }],
			"space-x": [{ "space-x": S() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": S() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: k() }],
			"inline-size": [{ inline: ["auto", ...A()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...A()] }],
			"max-inline-size": [{ "max-inline": ["none", ...A()] }],
			"block-size": [{ block: ["auto", ...ie()] }],
			"min-block-size": [{ "min-block": ["auto", ...ie()] }],
			"max-block-size": [{ "max-block": ["none", ...ie()] }],
			w: [{ w: [
				s,
				"screen",
				...k()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...k()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...k()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...k()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...k()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				"none",
				...k()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				Y,
				q
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Me,
				xe
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				ue,
				K
			] }],
			"font-family": [{ font: [
				De,
				Se,
				t
			] }],
			"font-features": [{ "font-features": [K] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				J,
				K
			] }],
			"line-clamp": [{ "line-clamp": [
				H,
				"none",
				J,
				K
			] }],
			leading: [{ leading: [
				"none",
				a,
				...S()
			] }],
			"list-image": [{ "list-image": [
				"none",
				J,
				K
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				J,
				K
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: j() }],
			"text-color": [{ text: j() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...F(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				H,
				"from-font",
				"auto",
				Y,
				Oe,
				q
			] }],
			"text-decoration-color": [{ decoration: j() }],
			"underline-offset": [{ "underline-offset": [
				H,
				"auto",
				J,
				K
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: S() }],
			"tab-size": [{ tab: [
				U,
				J,
				K
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				J,
				K
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				J,
				K
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: ae() }],
			"bg-repeat": [{ bg: oe() }],
			"bg-size": [{ bg: se() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						U,
						J,
						K
					],
					radial: [
						"",
						J,
						K
					],
					conic: [
						"",
						U,
						J,
						K
					]
				},
				Ae,
				we
			] }],
			"bg-color": [{ bg: j() }],
			"gradient-from-pos": [{ from: ce() }],
			"gradient-via-pos": [{ via: ce() }],
			"gradient-to-pos": [{ to: ce() }],
			"gradient-from": [{ from: j() }],
			"gradient-via": [{ via: j() }],
			"gradient-to": [{ to: j() }],
			rounded: [{ rounded: N() }],
			"rounded-s": [{ "rounded-s": N() }],
			"rounded-e": [{ "rounded-e": N() }],
			"rounded-t": [{ "rounded-t": N() }],
			"rounded-r": [{ "rounded-r": N() }],
			"rounded-b": [{ "rounded-b": N() }],
			"rounded-l": [{ "rounded-l": N() }],
			"rounded-ss": [{ "rounded-ss": N() }],
			"rounded-se": [{ "rounded-se": N() }],
			"rounded-ee": [{ "rounded-ee": N() }],
			"rounded-es": [{ "rounded-es": N() }],
			"rounded-tl": [{ "rounded-tl": N() }],
			"rounded-tr": [{ "rounded-tr": N() }],
			"rounded-br": [{ "rounded-br": N() }],
			"rounded-bl": [{ "rounded-bl": N() }],
			"border-w": [{ border: P() }],
			"border-w-x": [{ "border-x": P() }],
			"border-w-y": [{ "border-y": P() }],
			"border-w-s": [{ "border-s": P() }],
			"border-w-e": [{ "border-e": P() }],
			"border-w-bs": [{ "border-bs": P() }],
			"border-w-be": [{ "border-be": P() }],
			"border-w-t": [{ "border-t": P() }],
			"border-w-r": [{ "border-r": P() }],
			"border-w-b": [{ "border-b": P() }],
			"border-w-l": [{ "border-l": P() }],
			"divide-x": [{ "divide-x": P() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": P() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...F(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...F(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: j() }],
			"border-color-x": [{ "border-x": j() }],
			"border-color-y": [{ "border-y": j() }],
			"border-color-s": [{ "border-s": j() }],
			"border-color-e": [{ "border-e": j() }],
			"border-color-bs": [{ "border-bs": j() }],
			"border-color-be": [{ "border-be": j() }],
			"border-color-t": [{ "border-t": j() }],
			"border-color-r": [{ "border-r": j() }],
			"border-color-b": [{ "border-b": j() }],
			"border-color-l": [{ "border-l": j() }],
			"divide-color": [{ divide: j() }],
			"outline-style": [{ outline: [
				...F(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				H,
				J,
				K
			] }],
			"outline-w": [{ outline: [
				"",
				H,
				Y,
				q
			] }],
			"outline-color": [{ outline: j() }],
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				u,
				je,
				Te
			] }],
			"shadow-color": [{ shadow: j() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				je,
				Te
			] }],
			"inset-shadow-color": [{ "inset-shadow": j() }],
			"ring-w": [{ ring: P() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: j() }],
			"ring-offset-w": [{ "ring-offset": [H, q] }],
			"ring-offset-color": [{ "ring-offset": j() }],
			"inset-ring-w": [{ "inset-ring": P() }],
			"inset-ring-color": [{ "inset-ring": j() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				je,
				Te
			] }],
			"text-shadow-color": [{ "text-shadow": j() }],
			opacity: [{ opacity: [
				H,
				J,
				K
			] }],
			"mix-blend": [{ "mix-blend": [
				...le(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": le() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [H] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": I() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": I() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": j() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": j() }],
			"mask-image-t-from-pos": [{ "mask-t-from": I() }],
			"mask-image-t-to-pos": [{ "mask-t-to": I() }],
			"mask-image-t-from-color": [{ "mask-t-from": j() }],
			"mask-image-t-to-color": [{ "mask-t-to": j() }],
			"mask-image-r-from-pos": [{ "mask-r-from": I() }],
			"mask-image-r-to-pos": [{ "mask-r-to": I() }],
			"mask-image-r-from-color": [{ "mask-r-from": j() }],
			"mask-image-r-to-color": [{ "mask-r-to": j() }],
			"mask-image-b-from-pos": [{ "mask-b-from": I() }],
			"mask-image-b-to-pos": [{ "mask-b-to": I() }],
			"mask-image-b-from-color": [{ "mask-b-from": j() }],
			"mask-image-b-to-color": [{ "mask-b-to": j() }],
			"mask-image-l-from-pos": [{ "mask-l-from": I() }],
			"mask-image-l-to-pos": [{ "mask-l-to": I() }],
			"mask-image-l-from-color": [{ "mask-l-from": j() }],
			"mask-image-l-to-color": [{ "mask-l-to": j() }],
			"mask-image-x-from-pos": [{ "mask-x-from": I() }],
			"mask-image-x-to-pos": [{ "mask-x-to": I() }],
			"mask-image-x-from-color": [{ "mask-x-from": j() }],
			"mask-image-x-to-color": [{ "mask-x-to": j() }],
			"mask-image-y-from-pos": [{ "mask-y-from": I() }],
			"mask-image-y-to-pos": [{ "mask-y-to": I() }],
			"mask-image-y-from-color": [{ "mask-y-from": j() }],
			"mask-image-y-to-color": [{ "mask-y-to": j() }],
			"mask-image-radial": [{ "mask-radial": [J, K] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": I() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": I() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": j() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": j() }],
			"mask-image-radial-shape": [{ mask: ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": v() }],
			"mask-image-conic-pos": [{ "mask-conic": [H] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": I() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": I() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": j() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": j() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: ae() }],
			"mask-repeat": [{ mask: oe() }],
			"mask-size": [{ mask: se() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				J,
				K
			] }],
			filter: [{ filter: [
				"",
				"none",
				J,
				K
			] }],
			blur: [{ blur: L() }],
			brightness: [{ brightness: [
				H,
				J,
				K
			] }],
			contrast: [{ contrast: [
				H,
				J,
				K
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				je,
				Te
			] }],
			"drop-shadow-color": [{ "drop-shadow": j() }],
			grayscale: [{ grayscale: [
				"",
				H,
				J,
				K
			] }],
			"hue-rotate": [{ "hue-rotate": [
				H,
				J,
				K
			] }],
			invert: [{ invert: [
				"",
				H,
				J,
				K
			] }],
			saturate: [{ saturate: [
				H,
				J,
				K
			] }],
			sepia: [{ sepia: [
				"",
				H,
				J,
				K
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				J,
				K
			] }],
			"backdrop-blur": [{ "backdrop-blur": L() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				H,
				J,
				K
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				H,
				J,
				K
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				H,
				J,
				K
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				H,
				J,
				K
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				H,
				J,
				K
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				H,
				J,
				K
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				H,
				J,
				K
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				H,
				J,
				K
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": S() }],
			"border-spacing-x": [{ "border-spacing-x": S() }],
			"border-spacing-y": [{ "border-spacing-y": S() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				J,
				K
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				H,
				"initial",
				J,
				K
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				ee,
				J,
				K
			] }],
			delay: [{ delay: [
				H,
				J,
				K
			] }],
			animate: [{ animate: [
				"none",
				te,
				J,
				K
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				J,
				K
			] }],
			"perspective-origin": [{ "perspective-origin": y() }],
			rotate: [{ rotate: R() }],
			"rotate-x": [{ "rotate-x": R() }],
			"rotate-y": [{ "rotate-y": R() }],
			"rotate-z": [{ "rotate-z": R() }],
			scale: [{ scale: z() }],
			"scale-x": [{ "scale-x": z() }],
			"scale-y": [{ "scale-y": z() }],
			"scale-z": [{ "scale-z": z() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: B() }],
			"skew-x": [{ "skew-x": B() }],
			"skew-y": [{ "skew-y": B() }],
			transform: [{ transform: [
				J,
				K,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: y() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: G() }],
			"translate-x": [{ "translate-x": G() }],
			"translate-y": [{ "translate-y": G() }],
			"translate-z": [{ "translate-z": G() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				U,
				J,
				K
			] }],
			accent: [{ accent: j() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: j() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				J,
				K
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": j() }],
			"scrollbar-track-color": [{ "scrollbar-track": j() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": S() }],
			"scroll-mx": [{ "scroll-mx": S() }],
			"scroll-my": [{ "scroll-my": S() }],
			"scroll-ms": [{ "scroll-ms": S() }],
			"scroll-me": [{ "scroll-me": S() }],
			"scroll-mbs": [{ "scroll-mbs": S() }],
			"scroll-mbe": [{ "scroll-mbe": S() }],
			"scroll-mt": [{ "scroll-mt": S() }],
			"scroll-mr": [{ "scroll-mr": S() }],
			"scroll-mb": [{ "scroll-mb": S() }],
			"scroll-ml": [{ "scroll-ml": S() }],
			"scroll-p": [{ "scroll-p": S() }],
			"scroll-px": [{ "scroll-px": S() }],
			"scroll-py": [{ "scroll-py": S() }],
			"scroll-ps": [{ "scroll-ps": S() }],
			"scroll-pe": [{ "scroll-pe": S() }],
			"scroll-pbs": [{ "scroll-pbs": S() }],
			"scroll-pbe": [{ "scroll-pbe": S() }],
			"scroll-pt": [{ "scroll-pt": S() }],
			"scroll-pr": [{ "scroll-pr": S() }],
			"scroll-pb": [{ "scroll-pb": S() }],
			"scroll-pl": [{ "scroll-pl": S() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				J,
				K
			] }],
			fill: [{ fill: ["none", ...j()] }],
			"stroke-w": [{ stroke: [
				H,
				Y,
				q,
				be
			] }],
			stroke: [{ stroke: ["none", ...j()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": [
				"start",
				"end",
				"right",
				"left"
			],
			"inset-y": [
				"inset-bs",
				"inset-be",
				"top",
				"bottom"
			],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			"place-content": ["align-content", "justify-content"],
			"place-items": ["align-items", "justify-items"],
			"place-self": ["align-self", "justify-self"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: [
				"ps",
				"pe",
				"pr",
				"pl"
			],
			py: [
				"pbs",
				"pbe",
				"pt",
				"pb"
			],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: [
				"ms",
				"me",
				"mr",
				"ml"
			],
			my: [
				"mbs",
				"mbe",
				"mt",
				"mb"
			],
			size: ["w", "h"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			sr: /* @__PURE__ */ "not-sr.position.size.w.h.p.px.py.ps.pe.pbs.pbe.pt.pr.pb.pl.m.mx.my.ms.me.mbs.mbe.mt.mr.mb.ml.overflow.overflow-x.overflow-y.whitespace".split("."),
			"not-sr": ["sr"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": [
				"border-w-s",
				"border-w-e",
				"border-w-r",
				"border-w-l"
			],
			"border-w-y": [
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-b"
			],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": [
				"border-color-s",
				"border-color-e",
				"border-color-r",
				"border-color-l"
			],
			"border-color-y": [
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-b"
			],
			"mask-image-x-from-pos": ["mask-image-r-from-pos", "mask-image-l-from-pos"],
			"mask-image-x-to-pos": ["mask-image-r-to-pos", "mask-image-l-to-pos"],
			"mask-image-x-from-color": ["mask-image-r-from-color", "mask-image-l-from-color"],
			"mask-image-x-to-color": ["mask-image-r-to-color", "mask-image-l-to-color"],
			"mask-image-y-from-pos": ["mask-image-t-from-pos", "mask-image-b-from-pos"],
			"mask-image-y-to-pos": ["mask-image-t-to-pos", "mask-image-b-to-pos"],
			"mask-image-y-from-color": ["mask-image-t-from-color", "mask-image-b-from-color"],
			"mask-image-y-to-color": ["mask-image-t-to-color", "mask-image-b-to-color"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": [
				"scroll-ms",
				"scroll-me",
				"scroll-mr",
				"scroll-ml"
			],
			"scroll-my": [
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mb"
			],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": [
				"scroll-ps",
				"scroll-pe",
				"scroll-pr",
				"scroll-pl"
			],
			"scroll-py": [
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pb"
			],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
}), Q = (...e) => He(s(e)), Ue = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, We = s, $ = (e, t) => (n) => {
	if (t?.variants == null) return We(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = Ue(t) || Ue(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return We(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
}, Ge = $([
	"rounded-md",
	"font-semibold",
	"hover:cursor-pointer",
	"disabled:cursor-not-allowed"
], {
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
}), Ke = ({ ref: e, variant: n, size: r, colorscheme: i, className: a, ...o }) => /* @__PURE__ */ t("button", {
	ref: e,
	className: Q(Ge({
		variant: n,
		size: r,
		colorscheme: i,
		className: a
	})),
	...o
}), qe = $([
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
]), Je = ({ ref: r, label: i, name: a, className: o, ...s }) => /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("label", {
	htmlFor: a,
	children: i
}), /* @__PURE__ */ t("input", {
	ref: r,
	type: "text",
	id: a,
	name: a,
	autoComplete: "off",
	className: Q(qe({ className: o })),
	...s
})] }), Ye = ({ ref: e, ...n }) => /* @__PURE__ */ t("div", {
	ref: e,
	...n
}), Xe = ({ className: e, ...n }) => /* @__PURE__ */ t(Ye, {
	className: Q("flex flex-col items-start", e),
	...n
}), Ze = $([
	"m-4",
	"fixed",
	"inset-0",
	"flex",
	"items-center",
	"justify-center",
	"bg-blend-darken",
	"z-40"
]), Qe = $([
	"bg-white",
	"rounded-lg",
	"p-4",
	"max-w-lg",
	"transition-all",
	"duration-200",
	"shadow-2xl"
]), $e = ({ isOpen: e, onClose: n, children: a, contentClassName: o, className: s, ...c }) => {
	let l = i(null);
	return r(() => {
		let t = (e) => {
			l.current && !l.current.contains(e.target) && n();
		};
		return e && document.addEventListener("mousedown", t), () => {
			document.removeEventListener("mousedown", t);
		};
	}, [e, n]), e ? /* @__PURE__ */ t("div", {
		ref: l,
		className: Q(Ze({ className: s })),
		...c,
		role: "dialog",
		"aria-modal": "true",
		children: /* @__PURE__ */ t("div", {
			className: Q(Qe(), o),
			children: /* @__PURE__ */ t("div", { children: a })
		})
	}) : null;
}, et = $([], {
	variants: {
		emphasis: { low: "text-gray-600 font-light" },
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
		italic: { true: "italic" },
		underline: { true: "underline underline-offset-2" }
	},
	defaultVariants: {
		size: "base",
		align: "left"
	}
}), tt = ({ ref: e, as: n = "p", emphasis: r, size: i, weight: a, align: o, italic: s, underline: c, className: l, ...u }) => /* @__PURE__ */ t(n, {
	ref: e,
	className: Q(et({
		emphasis: r,
		size: i,
		weight: a,
		align: o,
		italic: s,
		underline: c,
		className: l
	})),
	...u
}), nt = ({ logo: e, brand: r, href: i }) => !e && !r ? null : /* @__PURE__ */ t("a", {
	href: i,
	"aria-label": "Go to the homepage",
	children: /* @__PURE__ */ n(Ye, {
		className: "pr-6 flex gap-2 items-center",
		children: [e, r && /* @__PURE__ */ t(tt, { children: r })]
	})
}), rt = $([
	"w-full",
	"px-6",
	"py-4",
	"transition-all"
], {
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
}), it = ({ outline: e, size: i, fixed: o, themeOnScroll: s, logo: c, brand: l, brandHref: u, links: d, className: f, ...p }) => {
	let [m, h] = a(!1);
	return r(() => {
		if (!s) return;
		let e = () => {
			h(window.scrollY > 1);
		};
		return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e);
	}, [s]), /* @__PURE__ */ t("nav", {
		className: Q(rt({
			outline: e,
			size: i,
			fixed: o,
			className: f
		}), "transition-all duration-300 ease-in-out", m && `${s?.textColor} ${s?.backgroundColor} ${s?.shadow}`),
		...p,
		children: /* @__PURE__ */ n(Ye, {
			className: "font-bold text-xl flex justify-between items-center",
			children: [/* @__PURE__ */ t(nt, {
				logo: c,
				brand: l,
				href: u
			}), /* @__PURE__ */ t("ul", {
				className: "flex",
				children: d.map((e) => /* @__PURE__ */ t("li", { children: /* @__PURE__ */ t("a", {
					href: e.href,
					className: "text-base transition-colors pl-0 pr-6",
					children: e.name
				}) }, e.name))
			})]
		})
	});
};
export { Ye as Box, Ke as Button, Je as Input, $e as Modal, it as Navbar, Xe as Stack, tt as Text };
