(function() {
    var e, t, n;
    (function(r) {
        function d(e, t) {
            return h.call(e, t)
        }

        function v(e, t) {
            var n, r, i, s, o, u, a, f, c, h, p = t && t.split("/"),
                d = l.map,
                v = d && d["*"] || {};
            if (e && e.charAt(0) === ".")
                if (t) {
                    p = p.slice(0, p.length - 1), e = p.concat(e.split("/"));
                    for (f = 0; f < e.length; f += 1) {
                        h = e[f];
                        if (h === ".") e.splice(f, 1), f -= 1;
                        else if (h === "..") {
                            if (f === 1 && (e[2] === ".." || e[0] === "..")) break;
                            f > 0 && (e.splice(f - 1, 2), f -= 2)
                        }
                    }
                    e = e.join("/")
                } else e.indexOf("./") === 0 && (e = e.substring(2));
            if ((p || v) && d) {
                n = e.split("/");
                for (f = n.length; f > 0; f -= 1) {
                    r = n.slice(0, f).join("/");
                    if (p)
                        for (c = p.length; c > 0; c -= 1) {
                            i = d[p.slice(0, c).join("/")];
                            if (i) {
                                i = i[r];
                                if (i) {
                                    s = i, o = f;
                                    break
                                }
                            }
                        }
                    if (s) break;
                    !u && v && v[r] && (u = v[r], a = f)
                }!s && u && (s = u, o = a), s && (n.splice(0, o, s), e = n.join("/"))
            }
            return e
        }

        function m(e, t) {
            return function() {
                return s.apply(r, p.call(arguments, 0).concat([e, t]))
            }
        }

        function g(e) {
            return function(t) {
                return v(t, e)
            }
        }

        function y(e) {
            return function(t) {
                a[e] = t
            }
        }

        function b(e) {
            if (d(f, e)) {
                var t = f[e];
                delete f[e], c[e] = !0, i.apply(r, t)
            }
            if (!d(a, e) && !d(c, e)) throw new Error("No " + e);
            return a[e]
        }

        function w(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function E(e) {
            return function() {
                return l && l.config && l.config[e] || {}
            }
        }
        var i, s, o, u, a = {},
            f = {},
            l = {},
            c = {},
            h = Object.prototype.hasOwnProperty,
            p = [].slice;
        o = function(e, t) {
            var n, r = w(e),
                i = r[0];
            return e = r[1], i && (i = v(i, t), n = b(i)), i ? n && n.normalize ? e = n.normalize(e, g(t)) : e = v(e, t) : (e = v(e, t), r = w(e), i = r[0], e = r[1], i && (n = b(i))), {
                f: i ? i + "!" + e : e,
                n: e,
                pr: i,
                p: n
            }
        }, u = {
            require: function(e) {
                return m(e)
            },
            exports: function(e) {
                var t = a[e];
                return typeof t != "undefined" ? t : a[e] = {}
            },
            module: function(e) {
                return {
                    id: e,
                    uri: "",
                    exports: a[e],
                    config: E(e)
                }
            }
        }, i = function(e, t, n, i) {
            var s, l, h, p, v, g = [],
                w;
            i = i || e;
            if (typeof n == "function") {
                t = !t.length && n.length ? ["require", "exports", "module"] : t;
                for (v = 0; v < t.length; v += 1) {
                    p = o(t[v], i), l = p.f;
                    if (l === "require") g[v] = u.require(e);
                    else if (l === "exports") g[v] = u.exports(e), w = !0;
                    else if (l === "module") s = g[v] = u.module(e);
                    else if (d(a, l) || d(f, l) || d(c, l)) g[v] = b(l);
                    else {
                        if (!p.p) throw new Error(e + " missing " + l);
                        p.p.load(p.n, m(i, !0), y(l), {}), g[v] = a[l]
                    }
                }
                h = n.apply(a[e], g);
                if (e)
                    if (s && s.exports !== r && s.exports !== a[e]) a[e] = s.exports;
                    else if (h !== r || !w) a[e] = h
            } else e && (a[e] = n)
        }, e = t = s = function(e, t, n, a, f) {
            return typeof e == "string" ? u[e] ? u[e](t) : b(o(e, t).f) : (e.splice || (l = e, t.splice ? (e = t, t = n, n = null) : e = r), t = t || function() {}, typeof n == "function" && (n = a, a = f), a ? i(r, e, t, n) : setTimeout(function() {
                i(r, e, t, n)
            }, 4), s)
        }, s.config = function(e) {
            return l = e, l.deps && s(l.deps, l.callback), s
        }, n = function(e, t, n) {
            t.splice || (n = t, t = []), !d(a, e) && !d(f, e) && (f[e] = [e, t, n])
        }, n.amd = {
            jQuery: !0
        }
    })(), n("almond.js", function() {}),
        function() {
            (function(e, t) {
                return typeof n == "function" && n.amd ? n("salvattore", t) : typeof exports == "object" ? module.exports = t() : e.salvattore = t()
            })(this, function() {
                var e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m;
                return o = [], t = function(e, t, n) {
                    var r;
                    return r = e.dataset, r ? r[t] = n : e.setAttribute("data-" + t, n)
                }, l = function(e) {
                    var t, n, r, i, s, o, u;
                    return n = getComputedStyle(e, ":before"), r = n.getPropertyValue("content").slice(1, -1), i = r.match(/^\s*(\d+)(?:\s?\.(.+))?\s*$/), i ? (s = i[1], t = ((o = i[2]) != null ? o.split(".") : void 0) || ["column"]) : (i = r.match(/^\s*\.(.+)\s+(\d+)\s*$/), t = i[1], s = (u = i[2]) != null ? u.split(".") : void 0), {
                        numberOfColumns: s,
                        columnClasses: t
                    }
                }, e = function(e, n) {
                    var r, i, s, o, u, a, f;
                    f = l(e), u = f.numberOfColumns, r = f.columnClasses, s = new Array(+u), /*console.log("settings", u, r),*/ o = u;
                    while (o-- !== 0) a = "[data-columns] > *:nth-child(" + u + "n-" + o + ")", s.push(n.querySelectorAll(a));
                    return i = document.createDocumentFragment(), s.forEach(function(e) {
                        var t, n;
                        return t = document.createElement("div"), t.className = r.join(" "), n = document.createDocumentFragment(), Array.prototype.forEach.call(e, function(e) {
                            return n.appendChild(e)
                        }), t.appendChild(n), i.appendChild(t)
                    }), e.appendChild(i), t(e, "columns", u)
                }, d = function(e) {
                    var n, r, i, s, o, u;
                    return o = document.createRange(), o.selectNodeContents(e), n = Array.prototype.filter.call(o.extractContents().childNodes, function(e) {
                        return e instanceof HTMLElement
                    }), i = n.length, s = n[0].childNodes.length, u = new Array(s * i), Array.prototype.forEach.call(n, function(e, t) {
                        return Array.prototype.forEach.call(e.children, function(e, n) {
                            return u[n * i + t] = e
                        })
                    }), r = document.createElement("div"), t(r, "columns", 0), u.filter(function(e) {
                        return e != null
                    }).forEach(function(e) {
                        return r.appendChild(e)
                    }), r
                }, h = function(t) {
                    return requestAnimationFrame(function() {
                        var n;
                        return n = d(t), e(t, n)
                    })
                }, u = function(e) {
                    if (e.matches) return Array.prototype.forEach.call(o, h)
                }, i = function(e) {
                    var t, n;
                    try {
                        t = e.sheet.cssRules
                    } catch (r) {
                        return n = r, []
                    }
                    return t ? t : []
                }, s = function() {
                    return Array.prototype.concat.call(Array.prototype.slice.call(document.querySelectorAll('style[type="text/css"]')), Array.prototype.slice.call(document.querySelectorAll('link[rel="stylesheet"]')))
                }, a = function(e) {
                    var t, n;
                    t = e.length;
                    while (t--) {
                        n = e[t];
                        if (n.selectorText.match(/\[data-columns\](.*)::?before$/)) return !0
                    }
                    return !1
                }, v = function() {
                    var e;
                    if (typeof matchMedia == "undefined" || matchMedia === null) return;
                    return e = [], s().forEach(function(t) {
                        return Array.prototype.forEach.call(i(t), function(t) {
                            if (t.media != null && a(t.cssRules)) return e.push(matchMedia(t.media.mediaText))
                        })
                    }), e.forEach(function(e) {
                        return e.addListener(u)
                    })
                }, f = function(e, t) {
                    var n, r, i, s, o, u, a, f;
                    r = e.children, u = r.length;
                    for (o = a = 0, f = r.length; a < f; o = ++a) {
                        n = r[o], i = n.children.length;
                        if (o !== 0 && s > i) break;
                        if (o + 1 === u) {
                            o = 0;
                            break
                        }
                        s = i
                    }
                    return o
                }, r = function(e) {
                    var t, n;
                    t = new Array(e), n = 0;
                    while (n !== e) t[n] = document.createDocumentFragment(), n++;
                    return t
                }, n = function(e, t) {
                    var n, i, s, o;
                    return i = e.children, o = i.length, s = r(o), n = f(e, t[0]), t.forEach(function(e) {
                        return s[n].appendChild(e), n === o - 1 ? n = 0 : n++
                    }), Array.prototype.forEach.call(i, function(e, t) {
                        return e.appendChild(s[t])
                    })
                }, c = function(e, t) {
                    var n, i, s, o, u, a;
                    i = e.children, u = i.length, o = r(u), n = u - 1, t.forEach(function(e) {
                        var t;
                        return t = o[n], t.insertBefore(e, t.firstChild), n === 0 ? n = u - 1 : n--
                    }), Array.prototype.forEach.call(i, function(e, t) {
                        return e.insertBefore(o[t], e.firstChild)
                    }), s = document.createDocumentFragment(), a = t.length % u;
                    while (a-- !== 0) s.appendChild(e.lastChild);
                    return e.insertBefore(s, e.firstChild)
                }, p = function(n) {
                    var r, i;
                    if (getComputedStyle(n).display === "none") return;
                    return i = document.createRange(), i.selectNodeContents(n), r = document.createElement("div"), r.appendChild(i.extractContents()), t(r, "columns", 0), e(n, r), o.push(n)
                }, m = function() {
                    return Array.prototype.forEach.call(document.querySelectorAll("[data-columns]"), p), v()
                }, m(), {
                    append_elements: n,
                    prepend_elements: c,
                    register_grid: p
                }
            })
        }.call(this), n("scripts/main", ["require", "salvattore"], function(e) {
            function i(e) {
                var i = n.splice(0, 1),
                    img = imageMain.splice(0, 1),
                    imgOverlay = imageOverlay.splice(0,1),
                    conParagraph = paragraphContent.splice(0,1),
                    catIcon = categoryC.splice(0,1),
                    s = t.replace(/\{\{(\w+)\}\}/g, function(e, t) {
                        switch (t) {
                            case "number":
                                return ++r;
                            case "imageMain":
                                return img;
                            case "imageOverlay":
                                return imgOverlay;
                            case "paragraphContent":
                                return conParagraph;
                            case "categoryC":
                                return catIcon;
                            case "content":
                                return i
                        }
                    }),
                    o = document.createElement("article");
                u[e + "_elements"](a, [o]), o.outerHTML = s, n.length || c.classList.add("hidden")
            }
            // function s(e) {
            //     i("prepend")
            // }
            function o(e) {
                if(n.length >= 3){
                    i("append")
                    i("append")
                    i("append")
                } else if(n.length = 2){
                    i("append")
                    i("append")
                } else {
                    i("append")
                }
            }
            var t = "<article class='grid-item fade-in'><a class='bg-image' href='#imgPinterest'><img src='{{imageMain}}' alt='Pin Image'/><img class='overlay' src='{{imageOverlay}}' alt='Overlay Image'/></a><div class='pin-content'><div class='category'><span class='thumbnails-tags {{categoryC}}-tag'>{{categoryC}}</span><div class='category-video-gray'></div></div><a href='#pinDescription'><div class='pin-description'><h2>{{content}}</h2><p>{{paragraphContent}}</p></div></a></div><div class='border-left tv'></div><div class='border-right tv'></div><div class='border-top-right-sm tv'></div><div class='border-top-left-sm tv'></div></article>",
                // t = "<article class='item added'><h1 class='font-gamma'>{{number}}</h1><p>{{content}}</p><img src='{{imageMain}}' /> </article>",
                n = ["Heading 1 Lorem Ipsum", "Heading 2 Lorem Ipsum", "Heading 3 Lorem Ipsum", "Heading 4 Lorem Ipsum", "Heading 5 Lorem Ipsum"],
                categoryC = ["tv", "push", "starcinema", "starmusic", "myx"],
                paragraphContent = ["Lorem ipsum dolor sit amet", "consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", "Aenean massa. Cum sociis natoque penatibus et ma...", "Lorem ipsum dolor sit amet Aenean massa. Cum sociis natoque penatibus et ma...", "Lorem ipsum dolor sit amet"],
                imageMain = ["theme/images/pinterest-07.png", "theme/images/pinterest-08.png", "theme/images/pinterest-10.png", "theme/images/pinterest-11.png", "theme/images/pinterest-12.png",],
                imageOverlay = ["theme/images/pinterest-bg-myx.png", "theme/images/pinterest-bg-push.png","theme/images/pinterest-bg-starcinema.png","theme/images/pinterest-bg-starmusic.png","theme/images/pinterest-bg-tv.png"],
                r = 7,
                u = e("salvattore"),
                a = document.querySelector(".pinterest-grid"),
                l = document.querySelector(".post-append"),
                c = document.querySelector("#js-button-block");
            l.addEventListener("click", o)
        }), t(["scripts/main"])

})();