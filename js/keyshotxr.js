// to revert to original keyshotxr file just export another one

// (nameOfDiv,folderName,viewPortWidth,viewPortHeight,backgroundColor,uCount,vCount,uWrap,vWrap,uMouseSensitivity,vMouseSensitivity,uStartIndex,vStartIndex,minZoom,maxZoom,rotationDamping,downScaleToBrowser,addDownScaleGUIButton,downloadOnInteraction,imageExtension,showLoading,loadingIcon,allowFullscreen,uReverse,vReverse,hotspots,isIBooksWidget)

// xa, ya

var p = !0,
    t = null,
    u = !1;
window.keyshotXR = function(X, w, G, Y, va, D, wa, xa, ya, za, Aa, K, L, Z, $, Ba, aa, Ca, ba, Da, ca, Ea, Fa, Ga, Ha, r, Ia) {
    function P(a, d, b) {
        a.removeEventListener ? a.removeEventListener(d, b, u) : a.detachEvent && (a.detachEvent("on" + d, a["e" + d + b]), a["e" + d + b] = t)
    }

    function k(a, d, b) {
        a.addEventListener ? a.addEventListener(d, b, u) : a.attachEvent && (a["e" + d + b] = b, a.attachEvent("on" + d, function() {
            a["e" + d + b]()
        }))
    }

    function Q() {
        return /\bEdge\b/i.test(navigator.userAgent)
    }

    function da() {
        var a = u; - 1 != navigator.platform.toString().indexOf("Win") && -1 !=
            navigator.appVersion.indexOf("MSIE") && (a = p);
        return a
    }

/* ---------------------------------------------------------------------------		go fullscreen			----------------------------------------------------------------------------------- */
																																																				
    function Ja() {
        var a = document.getElementById(X),
            d = a.requestFullScreen || a.webkitRequestFullScreen || a.mozRequestFullScreen || a.msRequestFullScreen;
        "undefined" != typeof d && d && d.call(a);
		  
/* 		          closebtn = document.createElement("div"); 
		 closebtn.onclick=Ja;	 
        closebtn.setAttribute("class", "arrow-rotate-left");
        b = "top:  50%;";
        b += "right: 0px;";
        b += "overflow: hidden;";
        b += "background-color: red;";
        b += "position: absolute;";
        b += "top: 0;";
        b += "width: 50px;";
        b += "height: 50px;";
        b += "top: 0;";
			b += "display:flex;";
			b += "z-index:9999999999999999999;";
        b += z + "user-select: none;";
        closebtn.setAttribute("style", b);
        v.appendChild(closebtn);	 */
    }

    function ea(f) {
        a.aa = u;
        f.pointerId in a.t && delete a.t[f.pointerId];
        fa(f)
    }

    function ga(f) {
        a.aa = u;
        f.pointerId in a.t && delete a.t[f.pointerId];
        ha(f)
    }

    function ia(f) {
        a.aa && (a.t[f.pointerId] = [f.pageX, f.pageY], ja(f))
    }

    function ka(f) {
        f.target.Ta && f.target.Ta(f.pointerId);
        a.aa = p;
        a.t[f.pointerId] = [f.pageX, f.pageY];
        la(f)
    }

    function ma() {
        a.l ? (setTimeout(function() {
            a.v(u)
        }, 20), setTimeout(function() {
            a.v(p)
        }, 120)) : (setTimeout(function() {
            a.v(p)
        }, 20), setTimeout(function() {
            a.v(u)
        }, 120))
    }

    function H() {
        var a = {
                x: 0,
                y: 0
            },
            d = s;
        if (d.offsetParent) {
            do a.x += d.offsetLeft, a.y += d.offsetTop; while (d = d.offsetParent)
        }
        return a
    }

    function na() {
        var f = c.g;
        c.g = 1;
        f != c.g && a.T(a.w() * f / c.g);
        q.setAttribute("width", B.width);
        a.l ? (q.removeAttribute("height"), q.style.width = "100%", q.style[M] = "scale(" + c.n + ")", q.style.height = "auto", s.style["background-color"] =
            a.backgroundColor, document.body.style["background-color"] = a.backgroundColor) : (q.setAttribute("height", B.height), q.style[M] = "translate(" + -B.width / 2 + "px," + -B.height / 2 + "px) scale(" + c.g + ") translate(" + 0.5 * C.width / c.g + "px," + 0.5 * C.height / c.g + "px) translate(" + c.j + "px," + c.k + "px) scale(" + c.n + ")", q.style["max-width"] = "", q.style.width = "", q.style.height = "", s.style["background-color"] = a.backgroundColor)
    }

    function N() {
        a.Ua(a.h.offsetWidth, a.h.offsetHeight)
    }

    function oa(a, d) {
        l.start.x = a;
        l.start.y = d;
        l.a.x = a;
        l.a.y =
            d;
        i.a.x = a;
        i.a.y = d
    }

    function pa(a, d) {
        l.b.x = a - l.a.x;
        l.b.y = d - l.a.y;
        l.n.x = a;
        l.n.y = d;
        l.a.x = a;
        l.a.y = d
    }

    function F(f) {
        f || (f = window.event);
        var d = 0;
        f.keyCode ? d = f.keyCode : f.which && (d = f.which);
        1 == d ? j.d |= 1 : 1 < d && (j.d |= 2);
        a.wa(f);
        f.preventDefault ? f.preventDefault() : f.returnValue = u
    }

    function I(f) {
        f || (f = window.event);
        var d = H();
        a.cursor.x = f.pageX - d.x + m.left;
        a.cursor.y = f.pageY - d.y + m.top;
        f.preventDefault ? f.preventDefault() : f.returnValue = u;
        0 < j.d && (1 == j.d ? pa(f.pageX, f.pageY) : 2 == j.d ? (f = a.cursor.y - E.start.y, d = a.w(), a.T(c.u *
            Math.exp(f / 200)), f = a.w(), c.j += parseFloat(a.e * d - a.e * f), c.k += parseFloat(a.f * d - a.f * f)) : 3 == j.d && (d = a.cursor.x - E.start.x, f = a.cursor.y - E.start.y, c.j += parseFloat((d - c.m.x) / c.g), c.k += parseFloat((f - c.m.y) / c.g), c.m.x = d, c.m.y = f))
    }

    function O(f) {
        f || (f = window.event);
        var d = 0;
        f.keyCode ? d = f.keyCode : f.which && (d = f.which);
        1 == d ? j.d &= -2 : 1 < d && (j.d &= -3);
        a.wa(f);
        f.preventDefault ? f.preventDefault() : f.returnValue = u
    }

    function R(f) {
        a.ab && (f = f ? f : window.event, a.Ha(0 < (f.detail ? -1 * f.detail : f.wheelDelta / 40) ? 1 : -1), qa(f))
    }

    function la(f) {
        f ||
            (f = window.event);
        var d = ra(f),
            b = H();
        a.cursor.x = d[0].pageX - b.x + m.left;
        a.cursor.y = d[0].pageY - b.y + m.top;
        if (1 == d.length && d[0])
            if (j.start.x = d[0].pageX, j.start.y = d[0].pageY, j.a.x = d[0].pageX, j.a.y = d[0].pageY, a.qa = d[0].target, a.qa == a.r) j.d = 1, oa(d[0].pageX, d[0].pageY);
            else
                for (var e = a.qa; e && e != a.r;) {
                    if (e.onclick) e.onclick();
                    e = e.parentNode
                }
        if (2 == d.length && d[0] && d[1]) {
            j.d = 3;
            j.ca.x = d[0].pageX - b.x + m.left;
            j.ca.y = d[0].pageY - b.y + m.top;
            j.da.x = d[1].pageX - b.x + m.left;
            j.da.y = d[1].pageY - b.y + m.top;
            var e = d[0].pageX - d[1].pageX,
                g = d[0].pageY - d[1].pageY,
                i = (d[0].pageX - b.x + m.left + (d[1].pageX - b.x + m.left)) / 2,
                d = (d[0].pageY - b.y + m.top + (d[1].pageY - b.y + m.top)) / 2;
            c.pa = u;
            c.Va = Math.sqrt(e * e + g * g);
            c.u = a.w();
            a.e = parseFloat(i - 0.5 * C.width);
            a.f = parseFloat(d - 0.5 * C.height);
            a.e *= parseFloat(a.R);
            a.f *= parseFloat(a.R);
            a.e -= parseFloat(c.j);
            a.f -= parseFloat(c.k);
            a.e /= parseFloat(c.u);
            a.f /= parseFloat(c.u)
        }
        f.preventDefault()
    }

    function ja(f) {
        f || (f = window.event);
        var b = ra(f),
            e = H();
        a.cursor.x = b[0].pageX - e.x + m.left;
        a.cursor.y = b[0].pageY - e.y + m.top;
        1 == b.length &&
            b[0] && (j.a.x = b[0].pageX, j.a.y = b[0].pageY, 0 <= j.d && pa(j.a.x, j.a.y));
        if (2 == b.length && b[0] && b[1]) {
            var h = a.w(),
                g = b[0].pageX - b[1].pageX,
                i = b[0].pageY - b[1].pageY;
            a.T(c.u / c.Va * Math.sqrt(g * g + i * i));
            g = a.w();
            i = a.f * h - a.f * g;
            c.j += a.e * h - a.e * g;
            c.k += i;
            h = (a.cursor.x + b[1].pageX - e.x + m.left) / 2 - (j.ca.x + j.da.x) / 2;
            b = (a.cursor.y + b[1].pageY - e.y + m.top) / 2 - (j.ca.y + j.da.y) / 2;
            c.pa == u && (c.m.x = h, c.m.y = b, c.pa = p);
            c.j += (h - c.m.x) / c.g;
            c.k += (b - c.m.y) / c.g;
            c.m.x = h;
            c.m.y = b;
				
        }
        f.preventDefault()
    }

    function ra(f) {
        if (!da() && !Q()) return f.touches;
        f = [];
        for (id in a.t) {
            var b = a.t[id],
                e = {};
            e.pageX = b[0];
            e.pageY = b[1];
            e.target = a.r;
            e.preventDefault = function() {};
            f.push(e)
        }
        return f
    }

    function ha(f) {
        f.preventDefault();
        a.qa = t;
        j.d = 0;
        var b = (new Date).getTime(),
            e = b - (S || b + 1);
        clearTimeout(T);
        500 > e && 0 < e || (S = b, T = setTimeout(function() {
            clearTimeout(T)
        }, 500, [f]));
        S = b
    }

    function fa(a) {
        a.preventDefault();
        j.d = 0
    }

    function U() {
        Ka(U);
        a.W == a.Z && (1 == j.d ? 0.01 < i.L ? (i.b.x = 0.4 * (l.a.x - i.a.x), i.b.y = 0.4 * (l.a.y - i.a.y), i.a.x += i.b.x, i.a.y += i.b.y, a.na(i.b.x, i.b.y)) : (a.na(l.b.x, l.b.y), l.b.x =
            0, l.b.y = 0) : 0.01 < i.L && (i.b.x *= i.L, i.b.y *= i.L, 0.055 > i.b.x * i.b.x + i.b.y * i.b.y && (i.b.x = 0, i.b.y = 0, l.b.x = 0, l.b.y = 0, l.a.x = i.a.x, l.a.y = i.a.y), (0 != i.b.x || 0 != i.b.y) && a.na(i.b.x, i.b.y)));
        a.Ca();
        var f = 0;
        if (-1 == a.ha) {
            for (var b = 1, b = 0; b < a.G.length; b++) {
                var c = a.C[b];
                if (0 == a.z[c] && a.G[b].complete) {
                    a.F[c] = a.z[c];
                    a.z[c] = -1;
                    if (a.W == a.Z) {
                        var h = a.G.length + a.Aa;
                        h > e.q && (h = e.q);
                        if (h -= f)
                            for (var g = 0; g < h; g++) a.ga()
                    }
                    e.J = p;
                    0 == b && a.Ca()
                } - 1 != a.F[c] && f++
            }
            b = parseFloat(f / e.q);
            a.Sa(b);
            f == e.q && (a.ha = 0, a.Ra())
        }
    }

    function sa(a) {
        keycode =
            (a ? a : window.event).keyCode;
        switch (keycode) {
            case 13:
                ma(), qa(a)
        }
    }

    function qa(a) {
        a = a ? a : window.event;
        a.preventDefault() ? a.preventDefault() : a.returnValue = u
    }
    var A = "/",
        J = window.location.href,
        ta = J.lastIndexOf("/");
    0 <= ta && (A = J.substr(0, ta + 1));
    var V = J = u;
    Ia && (document.body.style.width = window.innerWidth + "px", document.body.style.height = window.innerHeight + "px");
    this.ab = Z != $;
    this.aa = u;
    this.t = [];
    this.ja = u;
    this.Ca = function() {
        if (e.J) {
            if (a.ja) return;
            e.J = u;
            var b = parseInt(e.K * e.c + e.I);
            if (-1 != a.F[b] && (W.setAttribute("src",
                    a.D[b]), W.complete || (a.ja = p), void 0 !== r))
                if (b = a.ia[b], !b && void 0 == r[b]) {
                    if (document.getElementById("xr_hotspot")) {
                        var d = document.getElementById("xr_hotspot");
                        document.body.removeChild(d)
                    }
                } else document.getElementById("xr_hotspot") && (d = document.getElementById("xr_hotspot"), document.body.removeChild(d)), d = document.createElement("div"), d.innerHTML = r[b].text, d.id = "xr_hotspot", d.style.position = "absolute", d.style.left = r[b].position.x + "px", d.style.top = r[b].position.y + "px", d.style.color = "#000000", void 0 !==
                    r[b].options && (r[b].options.fontSize && (d.style.fontSize = r[b].options.fontSize), r[b].options.Ia && (d.style.color = r[b].options.Ia), r[b].options.bgColor && (d.style.backgroundColor = r[b].options.bgColor), r[b].options.link && (d.href = r[b].options.link), r[b].options.height && (d.style.height = r[b].options.height), r[b].options.width && (d.style.width = r[b].options.width), r[b].options.textAlign && (d.style.textAlign = r[b].options.textAlign)), document.body.appendChild(d)
        }
        if (c.n != c.a || c.j != c.xa || c.k != c.ya) c.a = c.n, c.xa = c.j,
            c.ya = c.k, na()
    };
    this.eb = function(b) {
        for (var d = -1E3, c = b, h = parseFloat(parseInt(b % e.c)), g = parseFloat(parseInt(b / e.c)), h = h / e.c, h = h * 2 * Math.PI, g = g / e.i, g = g * Math.PI, b = Math.sin(h), h = Math.cos(h), g = Math.cos(g), i = Math.sqrt(b * b + h * h + g * g), b = b / i, h = h / i, g = g / i, i = 0; i < a.G.length; i++) {
            var j = a.C[i];
            if (-1 != a.F[j]) {
                var k = a.Ea[j].Za,
                    k = b * k.x + h * k.y + g * k.$a;
                d < k && (d = k, c = j)
            }
        }
        return c
    };
    this.ga = function() {
        if (a.oa < e.q) {
            var b = new Image,
                d = a.C[a.oa];
            a.z[d] = 0;
            b.src = a.D[d];
            a.G.push(b);
            var c = parseInt(d % e.c),
                h = parseInt(d / e.c),
                c = c / e.c,
                c = c *
                2 * Math.PI,
                h = h / e.i,
                h = h * Math.PI,
                b = Math.sin(c),
                c = Math.cos(c),
                h = Math.cos(h),
                g = Math.sqrt(b * b + c * c + h * h);
            a.Ea[d] = {
                Za: {
                    x: b / g,
                    y: c / g,
                    $a: h / g
                }
            };
            a.oa++
        }
    };
    this.Ga = function() {
        for (var b = e.ra, d = e.sa, c = 2, h = parseFloat(e.c / c), g = parseFloat(e.i / c), i = e.q, j = 0, k = 0, m = 0, n = 0, l = 0; a.P < i;) {
            var q = parseInt(b % e.c),
                s = parseInt(d % e.i),
                l = parseInt(s * e.c + q);
            a.D[l] || (a.C[a.P] = l, a.P++, a.D[l] = a.va(q, s), void 0 !== r && r[s + "_" + q] && (a.ia[l] = s + "_" + q));
            0 == j && (b += h, k++);
            1 == j && (d += g, m++);
            n++;
            if (n >= c)
                if (n = 0, 0 == j) j = 1, k = 0;
                else if (1 == j && (b += h, k++, k >= c / 2)) {
                c *=
                    2;
                b = e.ra;
                d = e.sa;
                h = parseFloat(e.c / c);
                g = parseFloat(e.i / c);
                if (1 > h && 1 > g) {
                    for (b = 0; b < i; b++) d = parseInt(b % e.c), c = parseInt(b / e.c), l = parseInt(c * e.c + d), a.D[l] || (a.C[a.P] = l, a.P++, a.D[l] = a.va(d, c), void 0 !== r && r[c + "_" + d] && (a.ia[l] = c + "_" + d));
                    break
                }
                j = m = k = 0
            }
        }
    };
    this.va = function(b, d) {
        return A + a.s + "/" + parseInt(d) + "_" + parseInt(b) + "." + Da
    };
    this.na = function(b, d) {
        var b = b * (1 < e.c ? a.Xa : 0),
            d = d * (1 < e.i ? a.Ya : 0),
            c = Math.sqrt(b * b + d * d);
        if (1E-4 < c && (e.ea += b, e.fa += d, e.A += c, 1 < e.A)) {
            var c = parseInt(e.A),
                h = Math.atan2(e.ea, e.fa);
            e.A -= c;
            e.ea =
                0;
            e.fa = 0;
            0 > h && (h += 2 * Math.PI);
            h += Math.PI / 8;
            h = parseInt(h / (Math.PI / 4));
            0 > h && (h += 8);
            h %= 8;
            if (0 != x[h]) {
                if (Ga) var g = e.I,
                    g = g - c * x[h];
                else g = e.I, g += c * x[h];
                if (e.Da) {
                    for (; 0 > g;) g += e.c;
                    for (; g >= e.c;) g -= e.c
                } else g >= e.c && (g = e.c - 1), 0 > g && (g = 0);
                e.I != g && (e.I = g, e.J = p)
            }
            if (0 != y[h]) {
                Ha ? (g = e.K, g -= c * y[h]) : (g = e.K, g += c * y[h]);
                if (e.Fa) {
                    for (; 0 > g;) g += e.i;
                    for (; g >= e.i;) g -= e.i
                } else g >= e.i && (g = e.i - 1), 0 > g && (g = 0);
                e.K != g && (e.K = g, e.J = p)
            }
        }
    };
    this.Wa = function() {
        a.v(!a.l);
        a.l ? a.H.setAttribute("src", A + a.s + "../../images/xr/GoFullScreenIcon.png") : a.H.setAttribute("src",
            A + a.s + "/files/GoFixedSizeIcon.png")
    };
    this.v = function(b) {
        a.l = b;
        a.l ? (v.style.position = "relative", v.style.left = "0px", v.style.top = "0px", document.body.style.overflow = "") : (v.style.position = "absolute", b = H(), v.style.left = window.pageXOffset - b.x + m.left + "px", v.style.top = window.pageYOffset - b.y + m.top + "px", document.body.style.overflow = "hidden");
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        N()
    };
    this.Ka = function() {
        var b = new Image;
        b.src = a.O.src;
        a.G[a.Y] = b;
        b = a.C[a.Y];
        a.F[b] = a.z[b];
        a.z[b] = -1;
        a.Y++;
        e.J = p;
        a.Y == e.q && (a.ha = 0, a.La())
    };
    var T, S = t;
    this.wa = function(b) {
        var d = H();
        a.cursor.x = b.pageX - d.x + m.left;
        a.cursor.y = b.pageY - d.y + m.top;
        1 == j.d ? oa(b.pageX, b.pageY) : 2 == j.d ? (E.start.x = a.cursor.x, E.start.y = a.cursor.y, c.u = a.w(), a.e = a.cursor.x - 0.5 * C.width, a.f = a.cursor.y - 0.5 * C.height, a.e *= a.R, a.f *= a.R, a.e -= c.j, a.f -= c.k, a.e /= c.u, a.f /= c.u) : 3 == j.d && (E.start.x = a.cursor.x, E.start.y = a.cursor.y, c.m.x = 0, c.m.y = 0)
    };
    this.Ha = function(b) {
        a.T(c.n * Math.exp(-b / 50))
    };
    this.w = function() {
        return c.n
    };
    this.T = function(a) {
        a > c.la / c.g &&
            (a = c.la / c.g);
        a < c.ma / c.g && (a = c.ma / c.g);
        c.n = a
    };
    this.cb = function(a, b, c, e) {
        m.left = a;
        m.top = b;
        m.right = c;
        m.bottom = e;
        N()
    };

/* ---------------------------------------------------------------------------		calculate turntable height			----------------------------------------------------------------------------------- */		  

    this.Ua = function(b, d) {
        a.l || (b = window.innerWidth, d = window.innerHeight);
        var c = b - m.left - m.right,
            e = d - m.top - m.bottom;
        C.width = c;
        C.height = e;
        s.style.width = c + "px";
        a.l && window.innerHeight < B.height && (e = window.innerHeight);
        s.style.height = e + "px"; //turntable
        s.style.left = m.left + "px";
        s.style.top = m.top + "px";
        na();
        n.style.width = b + "px";
        a.l && window.innerHeight < B.height && (d = window.innerHeight);
        n.style.height = d + "px";
        //a.h.style.height = d + "px";		//removed calculations of div_container height
        n.Ba && n.Ba(b, d);
        ba && (a.N.style.height = window.innerHeight + "px", a.N.style.width = window.innerWidth + "px")
    };
    this.U = function(a) {
        k(a, "mousedown", F);
        k(a, "mousemove", I);
        k(a, "mouseup", O)
    };
    this.ba = function(a) {
        P(a, "mousedown", F);
        P(a, "mousemove", I);
        P(a, "mouseup", O)
    };
    this.Ra = function() {
        a.p && (a.p.style.visibility = "hidden", a.ba(a.p), a.ba(a.Q), a.ba(a.o))
    };
    this.La = function() {
        a.B.style.visibility = "hidden";
        a.ba(a.B)
    };
    var Ka = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 10)
        };
		  
/* ---------------------------------------------------------------------------		Loader		----------------------------------------------------------------------------------- */			  
/* -------------------		Spinner		-------------------- */			  		  
    this.ua = function() {
        a.p = document.createElement("div");
        a.U(a.p);
        a.p.V = function() {
            /* this.parentNode && (this.style.left = "16px", this.style.top = "16px") */	/* position spinner here top-left */
				this.parentNode && (this.style.left = "50%", this.style.top = "50%", this.style.transform = "translate(-50%, -50%)") /* centered spinner */
        };
		  a.p.setAttribute("id", "loader-icon");
        b = "position:absolute;";
        b += "left: 0px;";
        b += "top:  0px;";
        b += "width: 40px;";											/* spinner outer size size default 80*/
        b += "height: 15px;";
        b += z + "transform-origin: 50% 50%;";
        b += "visibility: inherit;";
        a.p.setAttribute("style", b);
        a.Q = document.createElement("div");
        a.U(a.Q);
        b = "position:absolute;";
        b += "left: 0px;";
        b += "top:  0px;";
        b += "width: 40px;";											/*?*/
        b += "height: 15px;";
        b += z + "transform-origin: 50% 50%;";
        b += "opacity: 1.0;";
        b += "visibility: hidden;";
        b += "border: 0px solid #000000;";
        b += "color: #ffffff;";
        b += "text-align: left;";
        b += "white-space: nowrap;";
        b += "padding: 0px 0px 0px 0px;";
        b += "overflow: hidden;";
        a.Q.setAttribute("style", b);
		  
        a.o = document.createElement("div");
        a.U(a.o);
        a.o.$ = {
            Na: 0,
            Oa: 0,
            ka: 0,
            Pa: 1,
            Qa: 1,
            gb: 1
        };
        b = "position:absolute;";
        b += "left: 0px;";
        b += "top:  0px;";
/*         b += "width: 60px;";											
        b += "height: 60px;"; */
		  b += "width: 100%;";											/* spinner size default 80*/
        b += "height: 100%;";
        b += z + "transform-origin: 50% 50%;";
        b += "opacity: 1.0;";
        b += "visibility: inherit;";
        b += "border: 0px solid #000000;";
        b += "color: #ffffff;";
        b += "text-align: left;";
        b += "white-space: nowrap;";
        b += "padding: 0px 0px 0px 0px;";
        b += "overflow: hidden;";
        var c = Ea;
/*         "" == c && (c = "ks_logo.png"); */
        "" == c && (c = "ks_logo.png");
        a.o.setAttribute("style", b);
        a.o.innerHTML = '<img src="../../images/loaders/three-dots.svg"></img>';
       /*  a.o.innerHTML = '<img src="' + "../../images/xr/" + c + '" class="apa"></img>'; */
		  /* a.o.innerHTML = '<div class="xrspinner"></div>'; */
        a.p.appendChild(a.o);
        a.p.appendChild(a.Q);
        n.appendChild(a.p);
        a.v(a.l);
        setTimeout(function() {
            a.v(a.l)
        }, 10)
    };
    this.Sa = function(b) {
        if (a.p) {
/*             a.Q.innerHTML = "<center>" + parseInt(100 * b) + "</center>"; */				/* hides counter */
            a.o.$.ka += 2.1;
            b = "";
            if (a.o.$) var d = a.o.$,
				// b = b + ("translate(" + d.Na + "px," + d.Oa + "px) rotate(" + d.ka + "deg) scale(" + d.Pa + "," + d.Qa + ") "); to stop spinning
                b = b + ("translate(" + d.Na + "px," + d.Oa + "px)  scale(" + d.Pa + "," + d.Qa + ") ");
            a.o.style[M] = b + "scale(1.0,1.0)"
        }
    };
    this.ta = function() {
        V = p;
        U()
    };
    this.za = function() {
        k(window, "resize", N);
        Fa && k(n, "dblclick", Ja);
        if (da())
            if (k(window, "mousewheel", R), k(window, "keydown", sa), /Tablet PC/i.test(navigator.userAgent) && window.bb) {
                var b = new MSGesture;
                b.target = a.h;
                a.h.Ja = b;
                a.h.Ja.pointerType = t;
                a.h.hb = [];
                k(a.h, "MSPointerDown", ka);
                k(a.h, "MSPointerMove", ia);
                k(a.h, "MSPointerUp",
                    ga);
                k(a.h, "MSPointerCancel", ea)
            } else k(n, "mousedown", F), k(q, "mousedown", F), k(n, "mousemove", I), k(q, "mousemove", I), k(document, "mouseup", O);
        else n.addEventListener && (k(document, "mouseup", O), k(n, "mousewheel", R), k(document, "keydown", sa), k(n, "mousedown", F), k(q, "mousedown", F), k(n, "mousemove", I), k(n, "touchstart", la), k(n, "touchmove", ja), k(n, "touchcancel", fa), k(n, "touchend", ha), k(n, "DOMMouseScroll", R), k(window, "orientationchange", ma), Q() && (b = function(a, b) {
            "touch" == b.pointerType && a(b)
        }, k(n, "pointerdown", b.bind(t,
            ka)), k(n, "pointermove", b.bind(t, ia)), k(n, "pointerup", b.bind(t, ga)), k(n, "pointercancel", b.bind(t, ea))))
    };
	 
/* ---------------------------------------------------------------------------		div_container	/ image / #backbuffer		----------------------------------------------------------------------------------- */		 	 
    if (document.createElement("canvas").getContext) {
        var a = this,
            v = a.h = t,
            s = t,
            W = t,
            n = t,
            q = t;
        a.l = aa;
        a.s = w;
        a.fb = u;
        a.Z = u;
        a.W = ba;
        a.ib = 0;
        a.P = 0;
        a.Xa = parseFloat(za);
        a.Ya = parseFloat(Aa);
        a.Aa = 1;
        a.Y = 0;
        a.ha = -1;
        var m = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            },
            e = {
                I: 0,
                K: 0,
                c: 1,
                i: 1,
                ra: 0,
                sa: 0,
                A: 0,
                ea: 0,
                fa: 0,
                J: u,
                q: 0,
                Da: p,
                Fa: u
            };
        K || (K = 0);
        L || (L = 0);
        e.ra = K;
        e.sa = L;
        e.I = K;
        e.K = L;
        e.c = D;
        e.i = wa;
        e.Da = xa;
        e.Fa = ya;
        e.q = e.c * e.i;
        var B = {
            width: 0,
            height: 0
        };
        /* B.width = G; */        
        /* B.height = Y; */
		  B.width = "100%";
		  B.height = "100%";
        var z = "",
            M = "transform",
            C = {
                x: 640,
                y: 480
            },
            c = {
                n: 1,
                u: 1,
                a: -1,
                j: 0,
                k: 0,
                xa: -1,
                ya: -1,
                g: 1,
                ma: 1,
                la: 1,
                m: {
                    x: 0,
                    y: 0
                },
                pa: u
            };
        c.ma = parseFloat(Z);
        c.la = parseFloat($);
        var l = {
                start: {
                    x: 0,
                    y: 0
                },
                a: {
                    x: 0,
                    y: 0
                },
                Ma: {
                    x: 0,
                    y: 0
                },
                n: {
                    x: 0,
                    y: 0
                },
                b: {
                    x: 0,
                    y: 0
                }
            },
            E = {
                start: {
                    x: 0,
                    y: 0
                }
            },
            j = {
                d: 0,
                start: {
                    x: 0,
                    y: 0
                },
                a: {
                    x: 0,
                    y: 0
                },
                Ma: {
                    x: 0,
                    y: 0
                },
                n: {
                    x: 0,
                    y: 0
                },
                b: {
                    x: 0,
                    y: 0
                },
                ca: {
                    x: 0,
                    y: 0
                },
                da: {
                    x: 0,
                    y: 0
                }
            },
            i = {
                a: {
                    x: 0,
                    y: 0
                },
                b: {
                    x: 0,
                    y: 0
                },
                L: 0.96
            };
        i.L = Ba;
        a.cursor = {
            x: 0,
            y: 0
        };
        var x = [],
            y = [];
        x[0] = 0;
        y[0] = 1;
        x[1] = 1;
        y[1] = 1;
        x[2] = 1;
        y[2] = 0;
        x[3] = 1;
        y[3] = -1;
        x[4] = 0;
        y[4] = -1;
        x[5] = -1;
        y[5] = -1;
        x[6] = -1;
        y[6] = 0;
        x[7] = -1;
        y[7] = 1;
        a.e = 0;
        a.f = 0;
        a.oa = 0;
        a.G = [];
        a.C = [];
        a.z = [];
        a.F = [];
        a.Ea = [];
        for (w = 0; w < e.q; w++) a.z[w] = -1, a.F[w] = -1;
        a.D = [];
        a.ia = [];
        w = ["Webkit", "Moz", "0", "ms", "Ms"];
        for (D = 0; D < w.length; D++) "undefined" != typeof document.documentElement.style[w[D] + "Transform"] && (z = "-" + w[D].toLowerCase() + "-", M = w[D] + "Transform");
        var b = "";
		  
/* ---------------------------------------------------------------------------		div_container			----------------------------------------------------------------------------------- */			  
		  
        a.h = document.getElementById(X);
        //b = "width: " + G + "px;"; 		G = viewPortWidth in xr.html
		  //b += "height: " + Y + "px;";		Y = viewPortHeight in xr.html
        b = "height: 100%;";
        b += "width: 100%;";
        a.h.setAttribute("style", b);
        v = document.createElement("div");
        v.setAttribute("id",
            "viewwindow");
        b = "top:  0px;";
        b += "left: 0px;";
        b += "position: relative;";
		  b += "cursor: grab;";								/* iframe cursor same as 959*/
		  b += "height: 100%;";								/* iframe cursor same as 959*/
        v.setAttribute("style", b);
        a.h.appendChild(v);
		  
        s = document.createElement("div");
        s.setAttribute("id", "turntable");
        b = "top:  0px;";
        b += "left: 0px;";
        b += "overflow: hidden;";
/*         b += "position:absolute;"; */        
		  b += "display:flex;";
        b += z + "user-select: none;";
        s.setAttribute("style", b);
        v.appendChild(s);


/*         xrtext = document.createElement("div");
        xrtext.setAttribute("class", "xrtext");
        b = "position: absolute;";
        b = "top:  0px;";
        b += "right: 0px;";
        b += "overflow: hidden;";       
		  b += "display:flex;";
        b += z + "user-select: none;";
        xrtext.setAttribute("style", b);
        v.appendChild(xrtext); */
		  


																															/* create open fullscreen btn */
			//var hatt = window.parent.document.getElementById('openfullscreen'); 
			//var ap = document.getElementById('openfullscreen');
			//hatt.onclick=Ja;		
																					
/*         apa = document.createElement("div");	 
		  apa.onclick=Ja;	 
        apa.setAttribute("class", "fullscreen ion-android-add-circle glunn");
        b += "right: 15px;";
        b += "left: auto;";
        b += "border: 1px solid black;";
        b += "position: absolute;";
        b += "top: 15px;";
        b += "width: 20px;";
        b += "height: 20px;";
			b += "display:flex;";
			b += "z-index:999;";
        b += "user-select: none;";
        b += "cursor: pointer;";
        apa.setAttribute("style", b);
        v.appendChild(apa);	 */
		  


/*         apa = document.createElement("img");	 
		  apa.onclick=Ja;	 
		  apa.src = '../../images/icons/cog.svg';
		  b += "right: 15px;";
        b += "left: auto;";
        b += "position: absolute;";
        b += "top: 15px;";
        b += "width: 20px;";
        b += "height: 20px;";
			b += "display:flex;";
			b += "z-index:999;";
        b += "user-select: none;";
        b += "cursor: pointer;";
        apa.setAttribute("style", b);
        v.appendChild(apa);	
		   */
			
/* ---------------------------------------------------------------------------		image / #backbuffer			----------------------------------------------------------------------------------- */				
			
        q = document.createElement("img");
        q.setAttribute("id", "backbuffer");
        b = "top:  0px;";
        b += "left: 0px;";
		b += "max-height:100%;";			/* added line */
		b += "object-fit:contain;";			/* added line */		
        b += "position:relative;";
        b += z + "user-select: none;";
        q.setAttribute("style", b);
        s.appendChild(q);
        W = q;
        G = function() {
            a.ja = u
        };
        q.addEventListener("load", G, u);
        q.addEventListener("error", G, u);
        n = document.createElement("div");
		  n.setAttribute("id", "iconcontainer");
        a.r = n;
        b = "top:  0px;";
        b += "left: 0px;";
        b += "width:  100px;";
        b += "height: 100px;";
        b += "overflow: hidden;";
        b += "position:absolute;";
        b += "z-index: 522;";
        b += z + "user-select: none;";
        Q() && (b += "touch-action: none;");
        n.setAttribute("style", b);
        v.appendChild(n);
        n.Ba = function(a, b) {
            var c = [];
            for (c.push(this); 0 < c.length;) {
                var e = c.pop();
                e.V && e.V(a, b);
                if (e.hasChildNodes())
                    for (var g = 0; g < e.childNodes.length; g++) c.push(e.childNodes[g])
            }
        };
		  
/* ---------------------------------------------------------------------------		Hand & Cursor 		----------------------------------------------------------------------------------- */			  
		  
        this.B = document.createElement("div");
        b = "position:absolute;";
        b += "left: 0px;";
        b += "top:  0px;";
        b += "width: 256px;";
        b += "height: 256px;";
        b += "opacity: 0.0;";
        b += z + "transform-origin: 50% 50%;";
        b += "visibility: inherit;";
        b += "display: none";
        this.B.setAttribute("style", b);
        this.O = document.createElement("img");
        this.O.setAttribute("width", 256);
        this.O.setAttribute("height", 256);
        this.O.onload = function() {
            a.Ka()
        };
        a.U(this.B);
        this.B.appendChild(this.O);
        n.appendChild(this.B);
        this.backgroundColor = s.style.backgroundColor =
            va;
        Ca && (a.S = document.createElement("div"), b = "position:absolute;", b += "width: 38px;", b += "height: 32px;", b += z + "transform-origin: 50% 50%;", b += "visibility: inherit;", b += "cursor: pointer;", a.S.setAttribute("style", b), a.H = document.createElement("img"), a.l ? a.H.setAttribute("src", A + a.s + "../../images/xr/GoFullScreenIcon.png") : a.H.setAttribute("src", A + a.s + "/files/GoFixedSizeIcon.png"), a.H.setAttribute("style", "position: absolute;top: 0px;left: 0px;width: 38px;height: 32px;"), a.S.appendChild(a.H), a.S.V = function(a, b) {
            this.style.left =
                a - 38 + "px";
            this.style.top = b - 32 + "px"
        }, a.S.onclick = function() {
            a.Wa()
        }, a.r.appendChild(a.S));
        if (a.W) {								// xr swip animation
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (J = p);
            a.M = document.createElement("div");
				a.M.setAttribute("id", "swipeanimationcontainer");
            b = "position:absolute;";
/*             b += "width: 92px;";
            b += "height: 92px;"; */
            b += "width: 60px;";
            b += "height: 60px;";				
            b += z + "transform-origin: 50% 50%;";
            b += "visibility: inherit;";
            b += "cursor: grab;"; /* iframe cursor same as 840 - old ew-resize*/
            a.M.setAttribute("style", b);
            a.X = document.createElement("img");
            J ? a.X.setAttribute("src", "") : a.X.setAttribute("src", ""); //../../images/xr/xr_hand.gif				
            /* J ? a.X.setAttribute("src", "../../images/xr/xr_hand.gif") : a.X.setAttribute("src", "../../images/loaders/bars.svg"); */	 
           /*  a.X.setAttribute("style", "position: absolute;top: 0px;left: 0px;width: 92px;height: 92px;"); */
			   //a.X.setAttribute("style", "position: absolute;top: 0px;left: 0px;width: 60px;height: 60px;");
			   a.X.setAttribute("style", "position: absolute;top: 0px;left: 0px;width: 0px;height: 0px;");
            a.M.appendChild(a.X);
            a.M.V = function(a, b) {
/*                 this.style.left = 0.5 * a - 46 + "px";
                this.style.top = 0.5 * b - 46 + "px" */
                this.style.left = 0.5 * a - 30 + "px";
                this.style.top = 0.5 * b - 30 + "px"					 
            };
            a.N = document.createElement("div");
            b = "position:absolute;";
            b += z + "transform-origin: 50% 50%;";
            b += " width: " + window.innerWidth + "px;";
            b += " height: " + window.innerHeight + "px;";
            b += " background-color: #ccc;";
            /* b += " opacity: .7"; */
			b += " opacity: 0";
            a.N.setAttribute("style", b);
            a.r.appendChild(a.N);
            var ua = function() {
                a.M.style.visibility =
                    "hidden";
                a.N.style.visibility = "hidden";
                ca && a.ua();
                a.Z = p;
                for (var b = 0; b < a.Aa; b++) a.ga();
                a.ta()
            };
            a.r.onmousedown = function(a) {
                V || ua();
                a.preventDefault()
            };
            a.r.ontouchstart = function(a) {
                V || ua();
                a.preventDefault()
            };
            a.r.appendChild(a.M);
            a.za()
        } else a.W = p, a.Z = p, ca && a.ua(), a.za(), a.ta();
        a.v(aa);
        a.R = 1 / c.g;
        a.T(a.R);
        this.Ga();
        a.ga();
        setTimeout(function() {
            U()
        }, 10);
        setTimeout(function() {
            N()
        }, 15)
    } else alert("Your browser must support HTML5 to show KeyShotXR")	 
};