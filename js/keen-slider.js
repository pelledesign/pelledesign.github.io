! function(n, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = "undefined" != typeof globalThis ? globalThis : n || self).KeenSlider = t()
}(this, (function() {
	"use strict";
	var n = function() {
		return (n = Object.assign || function(n) {
			for (var t, i = 1, e = arguments.length; i < e; i++)
				for (var r in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
			return n
		}).apply(this, arguments)
	};

	function t(n, t, i) {
		if (i || 2 === arguments.length)
			for (var e, r = 0, a = t.length; r < a; r++) !e && r in t || (e || (e = Array.prototype.slice.call(t, 0, r)), e[r] = t[r]);
		return n.concat(e || Array.prototype.slice.call(t))
	}

	function i(n) {
		return Array.prototype.slice.call(n)
	}

	function e() {
		return Date.now()
	}

	function r(n, t, i) {
		if (t = "data-keen-slider-" + t, null === i) return n.removeAttribute(t);
		n.setAttribute(t, i || "")
	}

	function a(n, t) {
		return t = t || document, "function" == typeof n && (n = n(t)), Array.isArray(n) ? n : "string" == typeof n ? i(t.querySelectorAll(n)) : n instanceof HTMLElement ? [n] : n instanceof NodeList ? i(n) : []
	}

	function o(n) {
		n.raw && (n = n.raw), n.cancelable && !n.defaultPrevented && n.preventDefault()
	}

	function u(n) {
		n.raw && (n = n.raw), n.stopPropagation && n.stopPropagation()
	}

	function s() {
		var n = [];
		return {
			add: function(t, i, e, r) {
				t.addListener ? t.addListener(e) : t.addEventListener(i, e, r), n.push([t, i, e, r])
			},
			input: function(n, t, i, e) {
				this.add(n, t, function(n) {
					return function(t) {
						var i = t.changedTouches || [],
							e = t.targetTouches || [],
							r = t.detail && t.detail.x ? t.detail : null;
						n({
							id: r ? r.identifier ? r.identifier : "i" : e[0] ? e[0] ? e[0].identifier : "e" : "d",
							idChanged: r ? r.identifier ? r.identifier : "i" : i[0] ? i[0] ? i[0].identifier : "e" : "d",
							raw: t,
							x: r && r.x ? r.x : e[0] ? e[0].screenX : r ? r.x : t.pageX,
							y: r && r.y ? r.y : e[0] ? e[0].screenY : r ? r.y : t.pageY
						})
					}
				}(i), e)
			},
			purge: function() {
				n.forEach((function(n) {
					n[0].removeListener ? n[0].removeListener(n[2]) : n[0].removeEventListener(n[1], n[2], n[3])
				})), n = []
			}
		}
	}

	function c(n, t, i) {
		return Math.min(Math.max(n, t), i)
	}

	function d(n) {
		return (n > 0 ? 1 : 0) - (n < 0 ? 1 : 0) || +n
	}

	function l(n) {
		return n.getBoundingClientRect()
	}

	function f(n, t, i, e) {
		var r = n && n[t];
		return null == r ? i : e && "function" == typeof r ? r() : r
	}

	function p(n) {
		return Math.round(1e6 * n) / 1e6
	}

	function v(n) {
		var t, i, e, r, a, o;

		function u(t) {
			o || (o = t), s(!0);
			var a = t - o;
			a > e && (a = e);
			var l = r[i];
			if (l[3] < a) return i++, u(t);
			var f = l[2],
				p = l[4],
				v = l[0],
				m = l[1] * (0, l[5])(0 === p ? 1 : (a - f) / p);
			if (m && n.track.to(v + m), a < e) return d();
			o = null, s(!1), c(null), n.emit("animationEnded")
		}

		function s(n) {
			t.active = n
		}

		function c(n) {
			t.targetIdx = n
		}

		function d() {
			var n;
			n = u, a = window.requestAnimationFrame(n)
		}

		function l() {
			var t;
			t = a, window.cancelAnimationFrame(t), s(!1), c(null), o && n.emit("animationStopped"), o = null
		}
		return t = {
			active: !1,
			start: function(t) {
				if (l(), n.track.details) {
					var a = 0,
						o = n.track.details.position;
					i = 0, e = 0, r = t.map((function(n) {
						var t, i = o,
							r = null !== (t = n.earlyExit) && void 0 !== t ? t : n.duration,
							u = n.easing,
							s = n.distance * u(r / n.duration) || 0;
						o += s;
						var c = e;
						return e += r, a += s, [i, n.distance, c, e, n.duration, u]
					})), c(n.track.distToIdx(a)), d(), n.emit("animationStarted")
				}
			},
			stop: l,
			targetIdx: null
		}
	}

	function m(n) {
		var i, r, a, o, u, s, l, v, m, h, g, b, x, y = [],
			k = null,
			w = 0;

		function M(n) {
			S(w + n)
		}

		function T(n) {
			var t = C(w + n).abs;
			return I(t) ? t : null
		}

		function C(n) {
			var i = Math.floor(Math.abs(n / r)),
				e = (n % r + r) % r,
				a = d(n),
				o = l.indexOf(t([], l, !0).reduce((function(n, t) {
					return Math.abs(t - e) < Math.abs(n - e) ? t : n
				}))),
				u = o;
			return a < 0 && 0 !== e && i++, o === s && (u = 0, i += a > 0 ? 1 : -1), {
				abs: u + i * s * a,
				origin: o,
				rel: u
			}
		}

		function z(n, t, i) {
			var e;
			if (t || !D()) return E(n, i);
			if (!I(n)) return null;
			var r = C(null != i ? i : w),
				a = r.abs,
				o = n - r.rel,
				u = a + o;
			e = E(u);
			var c = E(u - s * Math.sign(o));
			return (null !== c && Math.abs(c) < Math.abs(e) || null === e) && (e = c), p(e)
		}

		function E(n, t) {
			if (null == t && (t = p(w)), !I(n) || null === n) return null;
			n = Math.round(n);
			var i = C(t),
				e = i.abs,
				a = i.rel,
				o = i.origin,
				u = L(n),
				c = (t % r + r) % r,
				d = l[o],
				f = Math.floor((n - (e - a)) / s) * r;
			return p(d - c - d + l[u] + f + (o === s ? r : 0))
		}

		function I(n) {
			return A(n) === n
		}

		function A(n) {
			return c(n, v, m)
		}

		function D() {
			return o.loop
		}

		function L(n) {
			return (n % s + s) % s
		}

		function S(t) {
			var i;
			i = t - w, y.push({
				distance: i,
				timestamp: e()
			}), y.length > 6 && (y = y.slice(-6)), w = Math.round(1e6 * t) / 1e6;
			var r = _().abs;
			if (r !== k) {
				var a = null !== k;
				k = r, a && n.emit("slideChanged")
			}
		}

		function _(t) {
			var e = t ? null : function() {
				if (s) {
					var n = D(),
						t = n ? (w % r + r) % r : w,
						i = (n ? w % r : w) - u[0][2],
						e = 0 - (i < 0 && n ? r - Math.abs(i) : i),
						c = 0,
						l = C(w),
						f = l.abs,
						p = l.rel,
						y = u[p][2],
						k = u.map((function(t, i) {
							var a = e + c;
							(a < 0 - t[0] || a > 1) && (a += (Math.abs(a) > r - 1 && n ? r : 0) * d(-a));
							var u = i - p,
								l = Math.sign(u),
								v = u + f;
							n && (-1 === l && a > y && (v += s), 1 === l && a < y && (v -= s), null !== h && v < h && (a += r), null !== g && v > g && (a -= r));
							var m = a + t[0] + t[1],
								b = Math.max(a >= 0 && m <= 1 ? 1 : m < 0 || a > 1 ? 0 : a < 0 ? Math.min(1, (t[0] + a) / t[0]) : (1 - a) / t[0], 0);
							return c += t[0] + t[1], {
								abs: v,
								distance: o.rtl ? -1 * a + 1 - t[0] : a,
								portion: b,
								size: t[0]
							}
						}));
					return f = A(f), p = L(f), {
						abs: A(f),
						length: a,
						max: x,
						maxIdx: m,
						min: b,
						minIdx: v,
						position: w,
						progress: n ? t / r : w / a,
						rel: p,
						slides: k
					}
				}
			}();
			return i.details = e, n.emit("detailsChanged"), e
		}
		return i = {
			absToRel: L,
			add: M,
			details: null,
			distToIdx: T,
			idxToDist: z,
			init: function(t) {
				if (function() {
						if (o = n.options, u = (o.trackConfig || []).map((function(n) {
								return [f(n, "size", 1), f(n, "spacing", 0), f(n, "origin", 0)]
							})), s = u.length) {
							r = p(u.reduce((function(n, t) {
								return n + t[0] + t[1]
							}), 0));
							var t = s - 1;
							a = p(r + u[0][2] - u[t][0] - u[t][2] - u[t][1]), (l = u.reduce((function(n, t) {
								if (!n) return [0];
								var i = u[n.length - 1],
									e = n[n.length - 1] + (i[0] + i[2]) + i[1];
								return e -= t[2], n[n.length - 1] > e && (e = n[n.length - 1]), n.push(e), n
							}), null)).push(r)
						}
					}(), !s) return _(!0);
				var i;
				! function() {
					var t = n.options.range,
						i = n.options.loop;
					h = v = i ? f(i, "min", -1 / 0) : 0, g = m = i ? f(i, "max", 1 / 0) : u.length - 1;
					var e = f(t, "min", null),
						r = f(t, "max", null);
					e && (v = e), r && (m = r), b = v === -1 / 0 ? v : n.track.idxToDist(v || 0, !0, 0), x = m === 1 / 0 ? m : z(m, !0, 0), null === r && (g = m), f(t, "align", !1) && m !== 1 / 0 && 0 === u[L(m)][2] && (x -= 1 - u[L(m)][0], m = T(x)), b = p(b), x = p(x)
				}(), i = t, Number(i) === i ? M(E(A(t))) : _()
			},
			to: S,
			velocity: function() {
				var n = e(),
					t = y.reduce((function(t, i) {
						var e = i.distance,
							r = i.timestamp;
						return n - r > 200 || (d(e) !== d(t.distance) && t.distance && (t = {
							distance: 0,
							lastTimestamp: 0,
							time: 0
						}), t.time && (t.distance += e), t.lastTimestamp && (t.time += r - t.lastTimestamp), t.lastTimestamp = r), t
					}), {
						distance: 0,
						lastTimestamp: 0,
						time: 0
					});
				return t.distance / t.time || 0
			}
		}
	}

	function h(n) {
		var t, i, e, l, f, p, v, m, h, g, b, x, y, k, w, M, T, C, z = s();

		function E(a) {
			if (p && m === a.id) {
				var s = L(a);
				if (!D(a) && h) return A(a);
				if (h && (g = s, h = !1), M) return g = s;
				o(a);
				var y = function(t) {
					if (T === -1 / 0 && C === 1 / 0) return t;
					var e = n.track.details,
						r = e.length,
						a = e.position,
						o = c(t, T - a, C - a);
					if (0 === r) return 0;
					if (!n.options.rubberband) return o;
					if (a <= C && a >= T) return t;
					if (a < T && i > 0 || a > C && i < 0) return t;
					var u = (a < T ? a - T : a - C) / r,
						s = l * r,
						d = Math.abs(u * s),
						p = Math.max(0, 1 - d / f * 2);
					return p * p * t
				}(v(g - s) / l * e);
				i = d(y);
				var k = n.track.details.position;
				(k > T && k < C || k === T && i > 0 || k === C && i < 0) && u(a), b += y, !x && Math.abs(b * l) > 5 && (x = !0, r(t, "moves", "")), n.track.add(y), g = s, n.emit("dragged")
			}
		}

		function I(t) {
			!p && n.track.details && n.track.details.length && (x = !1, b = 0, p = !0, h = !0, m = t.id, D(t), g = L(t), n.emit("dragStarted"))
		}

		function A(i) {
			p && m === i.idChanged && (r(t, "moves", null), p = !1, n.emit("dragEnded"))
		}

		function D(n) {
			var t = S(),
				i = t ? n.y : n.x,
				e = t ? n.x : n.y,
				r = void 0 !== y && void 0 !== k && Math.abs(k - e) <= Math.abs(y - i);
			return y = i, k = e, r
		}

		function L(n) {
			return S() ? n.y : n.x
		}

		function S() {
			return n.options.vertical
		}

		function _() {
			l = n.size, f = S() ? window.innerHeight : window.innerWidth;
			var t = n.track.details;
			t && (T = t.min, C = t.max)
		}

		function O() {
			if (z.purge(), n.options.drag && !n.options.disabled) {
				var i;
				i = n.options.dragSpeed || 1, v = "function" == typeof i ? i : function(n) {
						return n * i
					}, e = n.options.rtl ? -1 : 1, _(), t = n.container,
					function() {
						var n = "data-keen-slider-clickable";
						a("[".concat(n, "]:not([").concat(n, "=false])"), t).map((function(n) {
							z.add(n, "mousedown", u), z.add(n, "touchstart", u)
						}))
					}(), z.add(t, "dragstart", (function(n) {
						o(n)
					})), z.input(t, "ksDragStart", I), z.input(t, "ksDrag", E), z.input(t, "ksDragEnd", A), z.input(t, "mousedown", I), z.input(t, "mousemove", E), z.input(t, "mouseleave", A), z.input(t, "mouseup", A), z.input(t, "touchstart", I, {
						passive: !0
					}), z.input(t, "touchmove", E, {
						passive: !1
					}), z.input(t, "touchend", A), z.input(t, "touchcancel", A), z.add(window, "wheel", (function(n) {
						p && o(n)
					}));
				var r = "data-keen-slider-scrollable";
				a("[".concat(r, "]:not([").concat(r, "=false])"), n.container).map((function(n) {
					return function(n) {
						var t;
						z.input(n, "touchstart", (function(n) {
							t = L(n), M = !0, w = !0
						}), {
							passive: !0
						}), z.input(n, "touchmove", (function(i) {
							var e = S(),
								r = e ? n.scrollHeight - n.clientHeight : n.scrollWidth - n.clientWidth,
								a = t - L(i),
								u = e ? n.scrollTop : n.scrollLeft,
								s = e && "scroll" === n.style.overflowY || !e && "scroll" === n.style.overflowX;
							if (t = L(i), (a < 0 && u > 0 || a > 0 && u < r) && w && s) return M = !0;
							w = !1, o(i), M = !1
						})), z.input(n, "touchend", (function() {
							M = !1
						}))
					}(n)
				}))
			}
		}
		n.on("updated", _), n.on("optionsChanged", O), n.on("created", O), n.on("destroyed", z.purge)
	}

	function g(n) {
		var t, i, e, r, a, o, u;

		function s(n) {
			return 2 * n
		}

		function l(n) {
			return c(n, o, u)
		}

		function f(n) {
			return 1 - Math.pow(1 - n, 3)
		}

		function p() {
			h();
			var t = "free-snap" === n.options.mode,
				i = n.track,
				o = i.velocity();
			e = d(o);
			var u = n.track.details,
				c = [];
			if (o || !t) {
				var p = v(o),
					m = p.dist,
					g = p.dur;
				if (g = s(g), m *= e, t) {
					var b = i.idxToDist(i.distToIdx(m), !0);
					b && (m = b)
				}
				c.push({
					distance: m,
					duration: g,
					easing: f
				});
				var x = u.position,
					y = x + m;
				if (y < r || y > a) {
					var k = y < r ? r - x : a - x,
						w = 0,
						M = o;
					if (d(k) === e) {
						var T = Math.min(Math.abs(k) / Math.abs(m), 1),
							C = function(n) {
								return 1 - Math.pow(1 - n, 1 / 3)
							}(T) * g;
						c[0].earlyExit = C, M = o * (1 - T)
					} else c[0].earlyExit = 0, w += k;
					var z = v(M, 100),
						E = z.dist * e;
					n.options.rubberband && (c.push({
						distance: E,
						duration: s(z.dur),
						easing: f
					}), c.push({
						distance: -E + w,
						duration: 500,
						easing: f
					}))
				}
				n.animator.start(c)
			} else n.moveToIdx(l(u.abs), !0, {
				duration: 500,
				easing: function(n) {
					return 1 + --n * n * n * n * n
				}
			})
		}

		function v(n, t) {
			void 0 === t && (t = 1e3);
			var i = 147e-9 + (n = Math.abs(n)) / t;
			return {
				dist: Math.pow(n, 2) / i,
				dur: n / i
			}
		}

		function m() {
			var t = n.track.details;
			t && (r = t.min, a = t.max, o = t.minIdx, u = t.maxIdx)
		}

		function h() {
			n.animator.stop()
		}
		n.on("updated", m), n.on("optionsChanged", m), n.on("created", m), n.on("dragStarted", (function() {
			h(), t = i = n.track.details.abs
		})), n.on("dragEnded", (function() {
			var e = n.options.mode;
			"snap" === e && function() {
				var e = n.track,
					o = n.track.details,
					u = o.position,
					s = d(e.velocity());
				(u > a || u < r) && (s = 0);
				var c = t + s;
				0 === o.slides[e.absToRel(c)].portion && (c -= s), t !== i && (c = i), d(e.idxToDist(c, !0)) !== s && (c += s), c = l(c);
				var f = e.idxToDist(c, !0);
				n.animator.start([{
					distance: f,
					duration: 500,
					easing: function(n) {
						return 1 + --n * n * n * n * n
					}
				}])
			}(), "free" !== e && "free-snap" !== e || p()
		})), n.on("dragged", (function() {
			i = n.track.details.abs
		}))
	}

	function b(n) {
		var t, i, e = null;

		function r(t, i, e) {
			n.animator.active ? o(t, i, e) : requestAnimationFrame((function() {
				return o(t, i, e)
			}))
		}

		function a() {
			r(!1, !1, i)
		}

		function o(i, r, a) {
			var o = 0,
				c = n.size,
				d = n.track.details;
			if (d && t) {
				var l = d.slides;
				t.forEach((function(n, t) {
					if (i) !e && r && u(n, null, a), s(n, null, a);
					else {
						if (!l[t]) return;
						var d = l[t].size * c;
						!e && r && u(n, d, a), s(n, l[t].distance * c - o, a), o += d
					}
				}))
			}
		}

		function u(n, t, i) {
			var e = i ? "height" : "width";
			//null !== t && (t += "px"), n.style["min-" + e] = t, n.style["max-" + e] = t
		}

		function s(t, i, e) {
			if (null !== i) {
				"performance" === n.options.renderMode && (i = Math.round(i));
				var r = e ? i : 0;
				i = "translate3d(".concat(e ? 0 : i, "px, ").concat(r, "px, 0)")
			}
			t.style.transform = i, t.style["-webkit-transform"] = i
		}

		function c() {
			t && r(!0, !0, i), n.on("detailsChanged", a, !0)
		}

		function d() {
			r(!1, !0, i)
		}

		function l() {
			c(), i = n.options.vertical, n.options.disabled || "custom" === n.options.renderMode || (e = "auto" === f(n.options.slides, "perView", null), n.on("detailsChanged", a), (t = n.slides).length && d())
		}
		n.on("created", l), n.on("optionsChanged", l), n.on("updated", d), n.on("destroyed", c)
	}

	function x(t, i) {
		return function(e) {
			var o, u, c, d, p, v, m = s();

			function h(n) {
				r(e.container, "v", e.options.vertical && !n ? "" : null), r(e.container, "disabled", e.options.disabled && !n ? "" : null)
			}

			function g() {
				b() && M()
			}

			function b() {
				var t = null;
				if (d.forEach((function(n) {
						n.matches && (t = n.__media)
					})), t === o) return !1;
				o = t;
				var i = t ? c.breakpoints[t] : c;
				return e.options = n(n({}, c), i), h(), I(), A(), C(), !0
			}

			function x(n) {
				var t = l(n);
				return (e.options.vertical ? t.height : t.width) / e.size
			}

			function y() {
				return e.options.trackConfig.length
			}

			function k(t) {
				for (var r in o = !1, c = n(n({}, i), t), m.purge(), u = e.size, d = [], c.breakpoints || []) {
					var a = window.matchMedia(r);
					a.__media = r, d.push(a), m.add(a, "change", g)
				}
				m.add(window, "orientationchange", E), m.add(window, "resize", z), b()
			}

			function w(n) {
				e.animator.stop();
				var t = e.track.details;
				e.track.init(null != n ? n : t ? t.abs : 0)
			}

			function M(n) {
				w(n), e.emit("optionsChanged")
			}

			function T(n, t) {
				if (n) return k(n), void M(t);
				I(), A();
				var i = y();
				C(), y() !== i ? M(t) : w(t), e.emit("updated")
			}

			function C() {
				var n = e.options.slides;
				if ("function" == typeof n) return e.options.trackConfig = n(e.size, e.slides);
				for (var t = e.slides, i = t.length, r = "number" == typeof n ? n : f(n, "number", i, !0), a = [], o = f(n, "perView", 1, !0), u = f(n, "spacing", 0, !0) / e.size || 0, s = "auto" === o ? u : u / o, c = f(n, "origin", "auto"), d = 0, l = 0; l < r; l++) {
					var p = "auto" === o ? x(t[l]) : 1 / o - u + s,
						v = "center" === c ? .5 - p / 2 : "auto" === c ? 0 : c;
					a.push({
						origin: v,
						size: p,
						spacing: u
					}), d += p
				}
				if (d += u * (r - 1), "auto" === c && !e.options.loop && 1 !== o) {
					var m = 0;
					a.map((function(n) {
						var t = d - m;
						return m += n.size + u, t >= 1 || (n.origin = 1 - t - (d > 1 ? 0 : 1 - d)), n
					}))
				}
				e.options.trackConfig = a
			}

			function z() {
				I();
				var n = e.size;
				e.options.disabled || n === u || (u = n, T())
			}

			function E() {
				z(), setTimeout(z, 500), setTimeout(z, 2e3)
			}

			function I() {
				var n = l(e.container);
				e.size = e.options.vertical ? n.height : n.width
			}

			function A() {
				e.slides = a(e.options.selector, e.container)
			}
			e.container = (v = a(t, p || document)).length ? v[0] : null, e.destroy = function() {
				m.purge(), e.emit("destroyed"), h(!0)
			}, e.prev = function() {
				e.moveToIdx(e.track.details.abs - 1, !0)
			}, e.next = function() {
				e.moveToIdx(e.track.details.abs + 1, !0)
			}, e.update = T, k(e.options)
		}
	}
	return function(n, i, e) {
		try {
			return function(n, t) {
				var i, e = {};
				return i = {
						emit: function(n) {
							e[n] && e[n].forEach((function(n) {
								n(i)
							}));
							var t = i.options[n];
							t && t(i)
						},
						moveToIdx: function(n, t, e) {
							var r = i.track.idxToDist(n, t);
							if (r) {
								var a = i.options.defaultAnimation;
								i.animator.start([{
									distance: r,
									duration: f(e || a, "duration", 500),
									easing: f(e || a, "easing", (function(n) {
										return 1 + --n * n * n * n * n
									}))
								}])
							}
						},
						on: function(n, t, i) {
							void 0 === i && (i = !1), e[n] || (e[n] = []);
							var r = e[n].indexOf(t);
							r > -1 ? i && delete e[n][r] : i || e[n].push(t)
						},
						options: n
					},
					function() {
						if (i.track = m(i), i.animator = v(i), t)
							for (var n in t) {
								var e = t[n];
								e && e(i)
							}
						i.track.init(i.options.initial || 0), i.emit("created")
					}(), i
			}(i, t([x(n, {
				drag: !0,
				mode: "snap",
				renderMode: "precision",
				rubberband: !0,
				selector: ".slide"
			}), b, h, g], e || [], !0))
		} catch (n) {
			console.error(n)
		}
	}
}));