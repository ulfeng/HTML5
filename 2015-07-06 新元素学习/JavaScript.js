﻿(function () {
    function B(a) { console.log("$f.fireEvent", [].slice.call(a)) } function y(a) { if (!a || typeof a != "object") return a; var d = new a.constructor; for (var c in a) if (a.hasOwnProperty(c)) d[c] = y(a[c]); return d } function o(a, d) { if (a) { var c, p = 0, f = a.length; if (f === undefined) for (c in a) { if (d.call(a[c], c, a[c]) === false) break } else for (c = a[0]; p < f && d.call(c, p, c) !== false; c = a[++p]); return a } } function s(a) { return document.getElementById(a) } function w(a, d, c) {
        if (typeof d != "object") return a; a && d && o(d, function (p, f) {
            if (!c ||
            typeof f != "function") a[p] = f
        }); return a
    } function z(a) { var d = a.indexOf("."); if (d != -1) { var c = a.substring(0, d) || "*", p = a.substring(d + 1, a.length), f = []; o(document.getElementsByTagName(c), function () { this.className && this.className.indexOf(p) != -1 && f.push(this) }); return f } } function E(a) { a = a || window.event; if (a.preventDefault) { a.stopPropagation(); a.preventDefault() } else { a.returnValue = false; a.cancelBubble = true } return false } function i(a, d, c) { a[d] = a[d] || []; a[d].push(c) } function v() {
        return "_" + ("" + Math.random()).substring(2,
        10)
    } function n(a, d, c) {
        function p() {
            function g(k) { !f.isLoaded() && f._fireEvent("onBeforeClick") !== false && f.load(); return E(k) } if ($f(a)) { $f(a).getParent().innerHTML = ""; F = $f(a).getIndex(); t[F] = f } else { t.push(f); F = t.length - 1 } L = parseInt(a.style.height, 10) || a.clientHeight; if (typeof d == "string") d = { src: d }; A = a.id || "fp" + v(); G = d.id || A + "_api"; d.id = G; c.playerId = A; if (typeof c == "string") c = { clip: { url: c } }; if (typeof c.clip == "string") c.clip = { url: c.clip }; c.clip = c.clip || {}; if (a.getAttribute("href", 2) && !c.clip.url) c.clip.url =
            a.getAttribute("href", 2); h = new e(c.clip, -1, f); c.playlist = c.playlist || [c.clip]; var q = 0; o(c.playlist, function () { var k = this; if (typeof k == "object" && k.length) k = { url: "" + k }; o(c.clip, function (u, C) { if (C !== undefined && k[u] === undefined && typeof C != "function") k[u] = C }); c.playlist[q] = k; k = new e(k, q, f); j.push(k); q++ }); o(c, function (k, u) { if (typeof u == "function") { h[k] ? h[k](u) : i(x, k, u); delete c[k] } }); o(c.plugins, function (k, u) { if (u) r[k] = new l(k, u, f) }); if (!c.plugins || c.plugins.controls === undefined) r.controls = new l("controls",
            null, f); r.canvas = new l("canvas", null, f); d.bgcolor = d.bgcolor || "#000000"; d.version = d.version || [9, 0]; d.expressInstall = "http://www.flowplayer.org/swf/expressinstall.swf"; D = a.innerHTML; if (D.replace(/\s/g, "") !== "") if (a.addEventListener) a.addEventListener("click", g, false); else a.attachEvent && a.attachEvent("onclick", g); else { a.addEventListener && a.addEventListener("click", E, false); f.load() }
        } var f = this, m = null, D, h, j = [], r = {}, x = {}, A, G, F, J, M, L; w(f, {
            id: function () { return A }, isLoaded: function () { return m !== null }, getParent: function () { return a },
            hide: function (g) { if (g) a.style.height = "0px"; if (m) m.style.height = "0px"; return f }, show: function () { a.style.height = L + "px"; if (m) m.style.height = M + "px"; return f }, isHidden: function () { return m && parseInt(m.style.height, 10) === 0 }, load: function (g) { if (!m && f._fireEvent("onBeforeLoad") !== false) { o(t, function () { this.unload() }); if ((D = a.innerHTML) && !flashembed.isSupported(d.version)) a.innerHTML = ""; flashembed(a, d, { config: c }); if (g) { g.cached = true; i(x, "onLoad", g) } } return f }, unload: function () {
                if (D.replace(/\s/g, "") !== "") {
                    if (f._fireEvent("onBeforeUnload") ===
                    false) return f; try { if (m) { m.fp_close(); f._fireEvent("onUnload") } } catch (g) { } m = null; a.innerHTML = D
                } return f
            }, getClip: function (g) { if (g === undefined) g = J; return j[g] }, getCommonClip: function () { return h }, getPlaylist: function () { return j }, getPlugin: function (g) { var q = r[g]; if (!q && f.isLoaded()) { var k = f._api().fp_getPlugin(g); if (k) { q = new l(g, k, f); r[g] = q } } return q }, getScreen: function () { return f.getPlugin("screen") }, getControls: function () { return f.getPlugin("controls") }, getConfig: function (g) { return g ? y(c) : c }, getFlashParams: function () { return d },
            loadPlugin: function (g, q, k, u) { if (typeof k == "function") { u = k; k = {} } var C = u ? v() : "_"; f._api().fp_loadPlugin(g, q, k, C); q = {}; q[C] = u; u = new l(g, null, f, q); return r[g] = u }, getState: function () { return m ? m.fp_getState() : -1 }, play: function (g, q) { function k() { g !== undefined ? f._api().fp_play(g, q) : f._api().fp_play() } m ? k() : f.load(function () { k() }); return f }, getVersion: function () { if (m) { var g = m.fp_getVersion(); g.push("flowplayer.js 3.1.4"); return g } return "flowplayer.js 3.1.4" }, _api: function () {
                if (!m) throw "Flowplayer " + f.id() +
                " not loaded when calling an API method"; return m
            }, setClip: function (g) { f.setPlaylist([g]); return f }, getIndex: function () { return F }
        }); o("Click*,Load*,Unload*,Keypress*,Volume*,Mute*,Unmute*,PlaylistReplace,ClipAdd,Fullscreen*,FullscreenExit,Error,MouseOver,MouseOut".split(","), function () { var g = "on" + this; if (g.indexOf("*") != -1) { g = g.substring(0, g.length - 1); var q = "onBefore" + g.substring(2); f[q] = function (k) { i(x, q, k); return f } } f[g] = function (k) { i(x, g, k); return f } }); o("pause,resume,mute,unmute,stop,toggle,seek,getStatus,getVolume,setVolume,getTime,isPaused,isPlaying,startBuffering,stopBuffering,isFullscreen,toggleFullscreen,reset,close,setPlaylist,addClip,playFeed".split(","),
        function () { var g = this; f[g] = function (q, k) { if (!m) return f; var u = null; u = q !== undefined && k !== undefined ? m["fp_" + g](q, k) : q === undefined ? m["fp_" + g]() : m["fp_" + g](q); return u === "undefined" || u === undefined ? f : u } }); f._fireEvent = function (g) {
            if (typeof g == "string") g = [g]; var q = g[0], k = g[1], u = g[2], C = g[3], H = 0; c.debug && B(g); if (!m && q == "onLoad" && k == "player") { m = m || s(G); M = m.clientHeight; o(j, function () { this._fireEvent("onLoad") }); o(r, function (N, K) { K._fireEvent("onUpdate") }); h._fireEvent("onLoad") } if (!(q == "onLoad" && k != "player")) {
                if (q ==
                "onError") if (typeof k == "string" || typeof k == "number" && typeof u == "number") { k = u; u = C } if (q == "onContextMenu") o(c.contextMenu[k], function (N, K) { K.call(f) }); else if (q == "onPluginEvent") { if (C = r[k.name || k]) { C._fireEvent("onUpdate", k); C._fireEvent(u, g.slice(3)) } } else {
                    if (q == "onPlaylistReplace") { j = []; var O = 0; o(k, function () { j.push(new e(this, O++, f)) }) } if (q == "onClipAdd") { if (k.isInStream) return; k = new e(k, u, f); j.splice(u, 0, k); for (H = u + 1; H < j.length; H++) j[H].index++ } var I = true; if (typeof k == "number" && k < j.length) {
                        J = k; if (g =
                        j[k]) I = g._fireEvent(q, u, C); if (!g || I !== false) I = h._fireEvent(q, u, C, g)
                    } o(x[q], function () { I = this.call(f, k, u); this.cached && x[q].splice(H, 1); if (I === false) return false; H++ }); return I
                }
            }
        }; typeof a == "string" ? flashembed.domReady(function () { var g = s(a); if (g) { a = g; p() } else throw "Flowplayer cannot access element: " + a; }) : p()
    } function b(a) { this.length = a.length; this.each = function (d) { o(a, d) }; this.size = function () { return a.length } } var e = function (a, d, c) {
        var p = this, f = {}, m = {}; p.index = d; if (typeof a == "string") a = { url: a }; w(this,
        a, true); o("Begin*,Start,Pause*,Resume*,Seek*,Stop*,Finish*,LastSecond,Update,BufferFull,BufferEmpty,BufferStop".split(","), function () { var h = "on" + this; if (h.indexOf("*") != -1) { h = h.substring(0, h.length - 1); var j = "onBefore" + h.substring(2); p[j] = function (r) { i(m, j, r); return p } } p[h] = function (r) { i(m, h, r); return p }; if (d == -1) { if (p[j]) c[j] = p[j]; if (p[h]) c[h] = p[h] } }); w(this, {
            onCuepoint: function (h, j) {
                if (arguments.length == 1) { f.embedded = [null, h]; return p } if (typeof h == "number") h = [h]; var r = v(); f[r] = [h, j]; c.isLoaded() &&
                c._api().fp_addCuepoints(h, d, r); return p
            }, update: function (h) { w(p, h); c.isLoaded() && c._api().fp_updateClip(h, d); var j = c.getConfig(); w(d == -1 ? j.clip : j.playlist[d], h, true) }, _fireEvent: function (h, j, r, x) {
                if (h == "onLoad") { o(f, function (F, J) { J[0] && c._api().fp_addCuepoints(J[0], d, F) }); return false } x = x || p; if (h == "onCuepoint") { var A = f[j]; if (A) return A[1].call(c, x, r) } if (j && "onBeforeBegin,onMetaData,onStart,onUpdate,onResume".indexOf(h) != -1) {
                    w(x, j); if (j.metaData) if (x.duration) x.fullDuration = j.metaData.duration; else x.duration =
                    j.metaData.duration
                } var G = true; o(m[h], function () { G = this.call(c, x, j, r) }); return G
            }
        }); if (a.onCuepoint) { var D = a.onCuepoint; p.onCuepoint.apply(p, typeof D == "function" ? [D] : D); delete a.onCuepoint } o(a, function (h, j) { if (typeof j == "function") { i(m, h, j); delete a[h] } }); if (d == -1) c.onCuepoint = this.onCuepoint
    }, l = function (a, d, c, p) {
        var f = {}, m = this, D = false; p && w(f, p); o(d, function (h, j) { if (typeof j == "function") { f[h] = j; delete d[h] } }); w(this, {
            animate: function (h, j, r) {
                if (!h) return m; if (typeof j == "function") { r = j; j = 500 } if (typeof h ==
                "string") { var x = h; h = {}; h[x] = j; j = 500 } if (r) { var A = v(); f[A] = r } if (j === undefined) j = 500; d = c._api().fp_animate(a, h, j, A); return m
            }, css: function (h, j) { if (j !== undefined) { var r = {}; r[h] = j; h = r } d = c._api().fp_css(a, h); w(m, d); return m }, show: function () { this.display = "block"; c._api().fp_showPlugin(a); return m }, hide: function () { this.display = "none"; c._api().fp_hidePlugin(a); return m }, toggle: function () { this.display = c._api().fp_togglePlugin(a); return m }, fadeTo: function (h, j, r) {
                if (typeof j == "function") { r = j; j = 500 } if (r) {
                    var x =
                    v(); f[x] = r
                } this.display = c._api().fp_fadeTo(a, h, j, x); this.opacity = h; return m
            }, fadeIn: function (h, j) { return m.fadeTo(1, h, j) }, fadeOut: function (h, j) { return m.fadeTo(0, h, j) }, getName: function () { return a }, getPlayer: function () { return c }, _fireEvent: function (h, j) {
                if (h == "onUpdate") {
                    var r = c._api().fp_getPlugin(a); if (!r) return; w(m, r); delete m.methods; if (!D) {
                        o(r.methods, function () { var x = "" + this; m[x] = function () { var A = [].slice.call(arguments); A = c._api().fp_invoke(a, x, A); return A === "undefined" || A === undefined ? m : A } });
                        D = true
                    }
                } if (r = f[h]) { r.apply(m, j); h.substring(0, 1) == "_" && delete f[h] }
            }
        })
    }, t = []; window.flowplayer = window.$f = function () {
        var a = null, d = arguments[0]; if (!arguments.length) { o(t, function () { if (this.isLoaded()) { a = this; return false } }); return a || t[0] } if (arguments.length == 1) if (typeof d == "number") return t[d]; else { if (d == "*") return new b(t); o(t, function () { if (this.id() == d.id || this.id() == d || this.getParent() == d) { a = this; return false } }); return a } if (arguments.length > 1) {
            var c = arguments[1], p = arguments.length == 3 ? arguments[2] :
{}; if (typeof d == "string") if (d.indexOf(".") != -1) { var f = []; o(z(d), function () { f.push(new n(this, y(c), y(p))) }); return new b(f) } else { var m = s(d); return new n(m !== null ? m : d, c, p) } else if (d) return new n(d, c, p)
        } return null
    }; w(window.$f, { fireEvent: function () { var a = [].slice.call(arguments), d = $f(a[0]); return d ? d._fireEvent(a.slice(1)) : null }, addPlugin: function (a, d) { n.prototype[a] = d; return $f }, each: o, extend: w }); if (typeof jQuery == "function") jQuery.prototype.flowplayer = function (a, d) {
        if (!arguments.length || typeof arguments[0] ==
        "number") { var c = []; this.each(function () { var p = $f(this); p && c.push(p) }); return arguments.length ? c[arguments[0]] : new b(c) } return this.each(function () { $f(this, y(a), d ? y(d) : {}) })
    }
})();
(function () {
    function B() { if (n.done) return false; var b = document; if (b && b.getElementsByTagName && b.getElementById && b.body) { clearInterval(n.timer); n.timer = null; for (b = 0; b < n.ready.length; b++) n.ready[b].call(); n.ready = null; n.done = true } } function y(b, e) { if (e) for (key in e) if (e.hasOwnProperty(key)) b[key] = e[key]; return b } function o(b) {
        switch (s(b)) {
            case "string": b = b.replace(new RegExp('(["\\\\])', "g"), "\\$1"); b = b.replace(/^\s?(\d+)%/, "$1pct"); return '"' + b + '"'; case "array": return "[" + w(b, function (t) { return o(t) }).join(",") +
            "]"; case "function": return '"function()"'; case "object": var e = []; for (var l in b) b.hasOwnProperty(l) && e.push('"' + l + '":' + o(b[l])); return "{" + e.join(",") + "}"
        } return String(b).replace(/\s/g, " ").replace(/\'/g, '"')
    } function s(b) { if (b === null || b === undefined) return false; var e = typeof b; return e == "object" && b.push ? "array" : e } function w(b, e) { var l = []; for (var t in b) if (b.hasOwnProperty(t)) l[t] = e(b[t]); return l } function z(b, e) {
        var l = y({}, b), t = document.all; b = '<object width="' + l.width + '" height="' + l.height + '"'; if (t &&
        !l.id) l.id = "_" + ("" + Math.random()).substring(9); if (l.id) b += ' id="' + l.id + '"'; if (l.cachebusting) l.src += (l.src.indexOf("?") != -1 ? "&" : "?") + Math.random(); b += l.w3c || !t ? ' data="' + l.src + '" type="application/x-shockwave-flash"' : ' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'; b += ">"; if (l.w3c || t) b += '<param name="movie" value="' + l.src + '" />'; l.width = l.height = l.id = l.w3c = l.src = null; for (var a in l) if (l[a] !== null) b += '<param name="' + a + '" value="' + l[a] + '" />'; a = ""; if (e) {
            for (var d in e) if (e[d] !== null) a += d + "=" +
            (typeof e[d] == "object" ? o(e[d]) : e[d]) + "&"; a = a.substring(0, a.length - 1); b += '<param name="flashvars" value=\'' + a + "' />"
        } b += "</object>"; return b
    } function E(b, e, l) {
        var t = flashembed.getVersion(); y(this, { getContainer: function () { return b }, getConf: function () { return e }, getVersion: function () { return t }, getFlashvars: function () { return l }, getApi: function () { return b.firstChild }, getHTML: function () { return z(e, l) } }); var a = e.version, d = e.expressInstall, c = !a || flashembed.isSupported(a); if (c) {
            e.onFail = e.version = e.expressInstall =
            null; b.innerHTML = z(e, l)
        } else if (a && d && flashembed.isSupported([6, 65])) { y(e, { src: d }); l = { MMredirectURL: location.href, MMplayerType: "PlugIn", MMdoctitle: document.title }; b.innerHTML = z(e, l) } else if (b.innerHTML.replace(/\s/g, "") === "") {
            b.innerHTML = "<h2>Flash version " + a + " or greater is required</h2><h3>" + (t[0] > 0 ? "Your version is " + t : "You have no flash plugin installed") + "</h3>" + (b.tagName == "A" ? "<p>Click here to download latest version</p>" : "<p>Download latest version from <a href='http://www.adobe.com/go/getflashplayer'>here</a></p>");
            if (b.tagName == "A") b.onclick = function () { location.href = "http://www.adobe.com/go/getflashplayer" }
        } if (!c && e.onFail) { a = e.onFail.call(this); if (typeof a == "string") b.innerHTML = a } if (document.all) window[e.id] = document.getElementById(e.id)
    } var i = typeof jQuery == "function", v = { width: "100%", height: "100%", allowfullscreen: true, allowscriptaccess: "always", quality: "high", version: null, onFail: null, expressInstall: null, w3c: false, cachebusting: false }; if (i) {
        jQuery.tools = jQuery.tools || {}; jQuery.tools.flashembed = {
            version: "1.0.4",
            conf: v
        }
    } var n = i ? jQuery : function (b) { if (n.done) return b(); if (n.timer) n.ready.push(b); else { n.ready = [b]; n.timer = setInterval(B, 13) } }; window.attachEvent && window.attachEvent("onbeforeunload", function () { __flash_unloadHandler = function () { }; __flash_savedUnloadHandler = function () { } }); window.flashembed = function (b, e, l) { if (typeof b == "string") { var t = document.getElementById(b); if (t) b = t; else { n(function () { flashembed(b, e, l) }); return } } if (b) { if (typeof e == "string") e = { src: e }; t = y({}, v); y(t, e); return new E(b, t, l) } }; y(window.flashembed,
    {
        getVersion: function () {
            var b = [0, 0]; if (navigator.plugins && typeof navigator.plugins["Shockwave Flash"] == "object") { var e = navigator.plugins["Shockwave Flash"].description; if (typeof e != "undefined") { e = e.replace(/^.*\s+(\S+\s+\S+$)/, "$1"); b = parseInt(e.replace(/^(.*)\..*$/, "$1"), 10); e = /r/.test(e) ? parseInt(e.replace(/^.*r(.*)$/, "$1"), 10) : 0; b = [b, e] } } else if (window.ActiveXObject) {
                try { e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7") } catch (l) {
                    try {
                        e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"); b =
                        [6, 0]; e.AllowScriptAccess = "always"
                    } catch (t) { if (b[0] == 6) return b } try { e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash") } catch (a) { }
                } if (typeof e == "object") { e = e.GetVariable("$version"); if (typeof e != "undefined") { e = e.replace(/^\S+\s+(.*)$/, "$1").split(","); b = [parseInt(e[0], 10), parseInt(e[2], 10)] } }
            } return b
        }, isSupported: function (b) { var e = flashembed.getVersion(); return e[0] > b[0] || e[0] == b[0] && e[1] >= b[1] }, domReady: n, asString: o, getHTML: z
    }); if (i) jQuery.fn.flashembed = function (b, e) {
        var l = null; this.each(function () {
            l =
            flashembed(this, b, e)
        }); return b.api === false ? this : l
    }
})(); (function () {
    function B() { if (!i) { i = true; if (v) { for (var n = 0; n < v.length; n++) v[n].call(window, []); v = [] } } } function y(n) { var b = window.onload; window.onload = typeof window.onload != "function" ? n : function () { b && b(); n() } } function o() {
        if (!E) {
            E = true; document.addEventListener && !z.opera && document.addEventListener("DOMContentLoaded", B, false); z.msie && window == top && function () { if (!i) { try { document.documentElement.doScroll("left") } catch (b) { setTimeout(arguments.callee, 0); return } B() } }(); z.opera && document.addEventListener("DOMContentLoaded",
            function () { if (!i) { for (var b = 0; b < document.styleSheets.length; b++) if (document.styleSheets[b].disabled) { setTimeout(arguments.callee, 0); return } B() } }, false); if (z.safari) {
                var n; (function () {
                    if (!i) if (document.readyState != "loaded" && document.readyState != "complete") setTimeout(arguments.callee, 0); else {
                        if (n === undefined) { for (var b = document.getElementsByTagName("link"), e = 0; e < b.length; e++) b[e].getAttribute("rel") == "stylesheet" && n++; b = document.getElementsByTagName("style"); n += b.length } document.styleSheets.length !=
                        n ? setTimeout(arguments.callee, 0) : B()
                    }
                })()
            } y(B)
        }
    } var s = window.DomReady = {}, w = navigator.userAgent.toLowerCase(), z = { version: (w.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1], safari: /webkit/.test(w), opera: /opera/.test(w), msie: /msie/.test(w) && !/opera/.test(w), mozilla: /mozilla/.test(w) && !/(compatible|webkit)/.test(w) }, E = false, i = false, v = []; s.ready = function (n) { o(); i ? n.call(window, []) : v.push(function () { return n.call(window, []) }) }; o()
})(); (function (B, y) {
    function o(i, v) { for (var n = [], b = 0; b < i.length; b++) n.push(i[b]); for (b = 0; b < n.length; b++) v(n[b]) } function s() { o(y.getElementsByTagName("video"), function (i) { var v = true; if (i.canPlayType) if (i.src && i.canPlayType(w(i.src))) v = false; else o(i.getElementsByTagName("source"), function (n) { if (i.canPlayType(w(n.src, n.type))) v = false }); v && s.createVideoFallback(i) }) } function w(i, v) {
        if (v) return v; return {
            avi: s.H264_FORMAT, mp4: s.H264_FORMAT, mkv: s.H264_FORMAT, h264: s.H264_FORMAT, "264": s.H264_FORMAT, avc: s.H264_FORMAT,
            m4v: s.H264_FORMAT, "3gp": s.H264_FORMAT, "3gpp": s.H264_FORMAT, "3g2": s.H264_FORMAT, ogg: s.THEORA_FORMAT, ogv: s.THEORA_FORMAT
        }[i.split(".").slice(-1)[0]] || s.assumedFormat
    } function z(i, v) { i = i.getAttribute(v); return i == true || typeof i == "string" } y.createElement("video").canPlayType || o(["abbr", "article", "aside", "audio", "canvas", "details", "figcaption", "figure", "footer", "header", "hgroup", "mark", "menu", "meter", "nav", "output", "progress", "section", "summary", "time", "video", "source"], function (i) { y.createElement(i) });
    var E = ""; o(y.getElementsByTagName("script"), function (i) { i = i.src; if (i.substr(i.length - 17) == "html5media.min.js") E = i.split("/").slice(0, -1).join("/") + "/" }); s.flowplayerSwf = E + "flowplayer.swf"; s.flowplayerControlsSwf = E + "flowplayer.controls.swf"; s.H264_FORMAT = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'; s.THEORA_FORMAT = 'video/ogg; codecs="theora, vorbis"'; s.assumedFormat = s.H264_FORMAT; s.createVideoFallback = function (i) {
        function v(c) { if (c.substr(0, 1) == "/") return n + c; return c } var n = B.location.protocol + "//" +
        B.location.host, b = v(i.getAttribute("poster") || ""), e = i.getAttribute("src"); e || o(i.getElementsByTagName("source"), function (c) { if (w(c.getAttribute("src"), c.getAttribute("type")).substr(0, 9) == "video/mp4") e = c.getAttribute("src") }); e = v(e || ""); var l = y.createElement("span"); l.id = i.id; l.className = i.className; l.title = i.title; l.style.display = "block"; l.style.width = i.getAttribute("width") + "px"; l.style.height = i.getAttribute("height") + "px"; i.parentNode.replaceChild(l, i); var t = (i.getAttribute("preload") || "").toLowerCase(),
        a = null; if (z(i, "controls")) a = { url: s.flowplayerControlsSwf, fullscreen: false, autoHide: "always" }; var d = []; b && d.push({ url: b }); if (e) d.push({ url: e, autoPlay: z(i, "autoplay"), autoBuffering: z(i, "autobuffer") || z(i, "preload") && (t == "" || t == "auto"), onBeforeFinish: function () { return !z(i, "loop") } }); flowplayer(l, s.flowplayerSwf, { play: null, playlist: d, clip: { scaling: "fit", fadeInSpeed: 0, fadeOutSpeed: 0 }, plugins: { controls: a } })
    }; DomReady.ready(s); B.html5media = s
})(this, document);
