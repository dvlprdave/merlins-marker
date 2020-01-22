/* PrismJS 1.19.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+git+json+jsx&plugins=line-highlight+normalize-whitespace */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}, Prism = function (u) { var c = /\blang(?:uage)?-([\w-]+)\b/i, n = 0, C = { manual: u.Prism && u.Prism.manual, disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler, util: { encode: function (e) { return e instanceof _ ? new _(e.type, C.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(C.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ") }, type: function (e) { return Object.prototype.toString.call(e).slice(8, -1) }, objId: function (e) { return e.__id || Object.defineProperty(e, "__id", { value: ++n }), e.__id }, clone: function r(e, t) { var a, n, i = C.util.type(e); switch (t = t || {}, i) { case "Object": if (n = C.util.objId(e), t[n]) return t[n]; for (var o in a = {}, t[n] = a, e) e.hasOwnProperty(o) && (a[o] = r(e[o], t)); return a; case "Array": return n = C.util.objId(e), t[n] ? t[n] : (a = [], t[n] = a, e.forEach(function (e, n) { a[n] = r(e, t) }), a); default: return e } }, getLanguage: function (e) { for (; e && !c.test(e.className);)e = e.parentElement; return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none" }, currentScript: function () { if ("undefined" == typeof document) return null; if ("currentScript" in document) return document.currentScript; try { throw new Error } catch (e) { var n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1]; if (n) { var r = document.getElementsByTagName("script"); for (var t in r) if (r[t].src == n) return r[t] } return null } } }, languages: { extend: function (e, n) { var r = C.util.clone(C.languages[e]); for (var t in n) r[t] = n[t]; return r }, insertBefore: function (r, e, n, t) { var a = (t = t || C.languages)[r], i = {}; for (var o in a) if (a.hasOwnProperty(o)) { if (o == e) for (var l in n) n.hasOwnProperty(l) && (i[l] = n[l]); n.hasOwnProperty(o) || (i[o] = a[o]) } var s = t[r]; return t[r] = i, C.languages.DFS(C.languages, function (e, n) { n === s && e != r && (this[e] = i) }), i }, DFS: function e(n, r, t, a) { a = a || {}; var i = C.util.objId; for (var o in n) if (n.hasOwnProperty(o)) { r.call(n, o, n[o], t || o); var l = n[o], s = C.util.type(l); "Object" !== s || a[i(l)] ? "Array" !== s || a[i(l)] || (a[i(l)] = !0, e(l, r, o, a)) : (a[i(l)] = !0, e(l, r, null, a)) } } }, plugins: {}, highlightAll: function (e, n) { C.highlightAllUnder(document, e, n) }, highlightAllUnder: function (e, n, r) { var t = { callback: r, container: e, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' }; C.hooks.run("before-highlightall", t), t.elements = Array.prototype.slice.apply(t.container.querySelectorAll(t.selector)), C.hooks.run("before-all-elements-highlight", t); for (var a, i = 0; a = t.elements[i++];)C.highlightElement(a, !0 === n, t.callback) }, highlightElement: function (e, n, r) { var t = C.util.getLanguage(e), a = C.languages[t]; e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + t; var i = e.parentNode; i && "pre" === i.nodeName.toLowerCase() && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + t); var o = { element: e, language: t, grammar: a, code: e.textContent }; function l(e) { o.highlightedCode = e, C.hooks.run("before-insert", o), o.element.innerHTML = o.highlightedCode, C.hooks.run("after-highlight", o), C.hooks.run("complete", o), r && r.call(o.element) } if (C.hooks.run("before-sanity-check", o), !o.code) return C.hooks.run("complete", o), void (r && r.call(o.element)); if (C.hooks.run("before-highlight", o), o.grammar) if (n && u.Worker) { var s = new Worker(C.filename); s.onmessage = function (e) { l(e.data) }, s.postMessage(JSON.stringify({ language: o.language, code: o.code, immediateClose: !0 })) } else l(C.highlight(o.code, o.grammar, o.language)); else l(C.util.encode(o.code)) }, highlight: function (e, n, r) { var t = { code: e, grammar: n, language: r }; return C.hooks.run("before-tokenize", t), t.tokens = C.tokenize(t.code, t.grammar), C.hooks.run("after-tokenize", t), _.stringify(C.util.encode(t.tokens), t.language) }, matchGrammar: function (e, n, r, t, a, i, o) { for (var l in r) if (r.hasOwnProperty(l) && r[l]) { var s = r[l]; s = Array.isArray(s) ? s : [s]; for (var u = 0; u < s.length; ++u) { if (o && o == l + "," + u) return; var c = s[u], g = c.inside, f = !!c.lookbehind, h = !!c.greedy, d = 0, m = c.alias; if (h && !c.pattern.global) { var p = c.pattern.toString().match(/[imsuy]*$/)[0]; c.pattern = RegExp(c.pattern.source, p + "g") } c = c.pattern || c; for (var y = t, v = a; y < n.length; v += n[y].length, ++y) { var k = n[y]; if (n.length > e.length) return; if (!(k instanceof _)) { if (h && y != n.length - 1) { if (c.lastIndex = v, !(O = c.exec(e))) break; for (var b = O.index + (f && O[1] ? O[1].length : 0), w = O.index + O[0].length, A = y, P = v, x = n.length; A < x && (P < w || !n[A].type && !n[A - 1].greedy); ++A)(P += n[A].length) <= b && (++y, v = P); if (n[y] instanceof _) continue; S = A - y, k = e.slice(v, P), O.index -= v } else { c.lastIndex = 0; var O = c.exec(k), S = 1 } if (O) { f && (d = O[1] ? O[1].length : 0); w = (b = O.index + d) + (O = O[0].slice(d)).length; var j = k.slice(0, b), N = k.slice(w), E = [y, S]; j && (++y, v += j.length, E.push(j)); var L = new _(l, g ? C.tokenize(O, g) : O, m, O, h); if (E.push(L), N && E.push(N), Array.prototype.splice.apply(n, E), 1 != S && C.matchGrammar(e, n, r, y, v, !0, l + "," + u), i) break } else if (i) break } } } } }, tokenize: function (e, n) { var r = [e], t = n.rest; if (t) { for (var a in t) n[a] = t[a]; delete n.rest } return C.matchGrammar(e, r, n, 0, 0, !1), r }, hooks: { all: {}, add: function (e, n) { var r = C.hooks.all; r[e] = r[e] || [], r[e].push(n) }, run: function (e, n) { var r = C.hooks.all[e]; if (r && r.length) for (var t, a = 0; t = r[a++];)t(n) } }, Token: _ }; function _(e, n, r, t, a) { this.type = e, this.content = n, this.alias = r, this.length = 0 | (t || "").length, this.greedy = !!a } if (u.Prism = C, _.stringify = function (e, n) { if ("string" == typeof e) return e; if (Array.isArray(e)) return e.map(function (e) { return _.stringify(e, n) }).join(""); var r = { type: e.type, content: _.stringify(e.content, n), tag: "span", classes: ["token", e.type], attributes: {}, language: n }; if (e.alias) { var t = Array.isArray(e.alias) ? e.alias : [e.alias]; Array.prototype.push.apply(r.classes, t) } C.hooks.run("wrap", r); var a = Object.keys(r.attributes).map(function (e) { return e + '="' + (r.attributes[e] || "").replace(/"/g, "&quot;") + '"' }).join(" "); return "<" + r.tag + ' class="' + r.classes.join(" ") + '"' + (a ? " " + a : "") + ">" + r.content + "</" + r.tag + ">" }, !u.document) return u.addEventListener && (C.disableWorkerMessageHandler || u.addEventListener("message", function (e) { var n = JSON.parse(e.data), r = n.language, t = n.code, a = n.immediateClose; u.postMessage(C.highlight(t, C.languages[r], r)), a && u.close() }, !1)), C; var e = C.util.currentScript(); if (e && (C.filename = e.src, e.hasAttribute("data-manual") && (C.manual = !0)), !C.manual) { function r() { C.manual || C.highlightAll() } var t = document.readyState; "loading" === t || "interactive" === t && e && e.defer ? document.addEventListener("DOMContentLoaded", r) : window.requestAnimationFrame ? window.requestAnimationFrame(r) : window.setTimeout(r, 16) } return C }(_self); "undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i, greedy: !0 }, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i, inside: { punctuation: [/^=/, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function (a) { "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&")) }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function (a, e) { var s = {}; s["language-" + e] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: Prism.languages[e] }, s.cdata = /^<!\[CDATA\[|\]\]>$/i; var n = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } }; n["language-" + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] }; var t = {}; t[a] = { pattern: RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g, a), "i"), lookbehind: !0, greedy: !0, inside: n }, Prism.languages.insertBefore("markup", "cdata", t) } }), Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
!function (s) { var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/; s.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/, inside: { rule: /@[\w-]+/ } }, url: { pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"), inside: { function: /^url/i, punctuation: /^\(|\)$/ } }, selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"), string: { pattern: t, greedy: !0 }, property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i, important: /!important\b/i, function: /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:,]/ }, s.languages.css.atrule.inside.rest = s.languages.css; var e = s.languages.markup; e && (e.tag.addInlined("style", "css"), s.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: e.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: s.languages.css } }, alias: "language-css" } }, e.tag)) }(Prism);
Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ };
Prism.languages.javascript = Prism.languages.extend("clike", { "class-name": [Prism.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/ }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: !0, greedy: !0 }, "function-variable": { pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: Prism.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: !0, inside: Prism.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), Prism.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\${|}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript;
Prism.languages.git = { comment: /^#.*/m, deleted: /^[-–].*/m, inserted: /^\+.*/m, string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m, command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/m } }, coord: /^@@.*@@$/m, commit_sha1: /^commit \w{40}$/m };
Prism.languages.json = { property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 }, string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 }, comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, number: /-?\d+\.?\d*(?:e[+-]?\d+)?/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:true|false)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } };
!function (i) { var t = i.util.clone(i.languages.javascript); i.languages.jsx = i.languages.extend("markup", t), i.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i, i.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i, i.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i, i.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, i.languages.insertBefore("inside", "attr-name", { spread: { pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/, inside: { punctuation: /\.{3}|[{}.]/, "attr-value": /\w+/ } } }, i.languages.jsx.tag), i.languages.insertBefore("inside", "attr-value", { script: { pattern: /=(?:\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i, inside: { "script-punctuation": { pattern: /^=(?={)/, alias: "punctuation" }, rest: i.languages.jsx }, alias: "language-javascript" } }, i.languages.jsx.tag); var o = function (t) { return t ? "string" == typeof t ? t : "string" == typeof t.content ? t.content : t.content.map(o).join("") : "" }, p = function (t) { for (var n = [], e = 0; e < t.length; e++) { var a = t[e], s = !1; if ("string" != typeof a && ("tag" === a.type && a.content[0] && "tag" === a.content[0].type ? "</" === a.content[0].content[0].content ? 0 < n.length && n[n.length - 1].tagName === o(a.content[0].content[1]) && n.pop() : "/>" === a.content[a.content.length - 1].content || n.push({ tagName: o(a.content[0].content[1]), openedBraces: 0 }) : 0 < n.length && "punctuation" === a.type && "{" === a.content ? n[n.length - 1].openedBraces++ : 0 < n.length && 0 < n[n.length - 1].openedBraces && "punctuation" === a.type && "}" === a.content ? n[n.length - 1].openedBraces-- : s = !0), (s || "string" == typeof a) && 0 < n.length && 0 === n[n.length - 1].openedBraces) { var g = o(a); e < t.length - 1 && ("string" == typeof t[e + 1] || "plain-text" === t[e + 1].type) && (g += o(t[e + 1]), t.splice(e + 1, 1)), 0 < e && ("string" == typeof t[e - 1] || "plain-text" === t[e - 1].type) && (g = o(t[e - 1]) + g, t.splice(e - 1, 1), e--), t[e] = new i.Token("plain-text", g, null, g) } a.content && "string" != typeof a.content && p(a.content) } }; i.hooks.add("after-tokenize", function (t) { "jsx" !== t.language && "tsx" !== t.language || p(t.tokens) }) }(Prism);
!function () { if ("undefined" != typeof self && self.Prism && self.document && document.querySelector) { var t, n = function () { if (void 0 === t) { var e = document.createElement("div"); e.style.fontSize = "13px", e.style.lineHeight = "1.5", e.style.padding = 0, e.style.border = 0, e.innerHTML = "&nbsp;<br />&nbsp;", document.body.appendChild(e), t = 38 === e.offsetHeight, document.body.removeChild(e) } return t }, a = 0; Prism.hooks.add("before-sanity-check", function (e) { var t = e.element.parentNode, n = t && t.getAttribute("data-line"); if (t && n && /pre/i.test(t.nodeName)) { var i = 0; r(".line-highlight", t).forEach(function (e) { i += e.textContent.length, e.parentNode.removeChild(e) }), i && /^( \n)+$/.test(e.code.slice(-i)) && (e.code = e.code.slice(0, -i)) } }), Prism.hooks.add("complete", function e(t) { var n = t.element.parentNode, i = n && n.getAttribute("data-line"); if (n && i && /pre/i.test(n.nodeName)) { clearTimeout(a); var r = Prism.plugins.lineNumbers, o = t.plugins && t.plugins.lineNumbers; if (l(n, "line-numbers") && r && !o) Prism.hooks.add("line-numbers", e); else s(n, i)(), a = setTimeout(u, 1) } }), window.addEventListener("hashchange", u), window.addEventListener("resize", function () { var t = []; r("pre[data-line]").forEach(function (e) { t.push(s(e)) }), t.forEach(i) }) } function r(e, t) { return Array.prototype.slice.call((t || document).querySelectorAll(e)) } function l(e, t) { return t = " " + t + " ", -1 < (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(t) } function i(e) { e() } function s(u, e, d) { var t = (e = "string" == typeof e ? e : u.getAttribute("data-line")).replace(/\s+/g, "").split(","), c = +u.getAttribute("data-line-offset") || 0, f = (n() ? parseInt : parseFloat)(getComputedStyle(u).lineHeight), h = l(u, "line-numbers"), p = h ? u : u.querySelector("code") || u, m = []; return t.forEach(function (e) { var t = e.split("-"), n = +t[0], i = +t[1] || n, r = u.querySelector('.line-highlight[data-range="' + e + '"]') || document.createElement("div"); if (m.push(function () { r.setAttribute("aria-hidden", "true"), r.setAttribute("data-range", e), r.className = (d || "") + " line-highlight" }), h && Prism.plugins.lineNumbers) { var o = Prism.plugins.lineNumbers.getLine(u, n), a = Prism.plugins.lineNumbers.getLine(u, i); if (o) { var l = o.offsetTop + "px"; m.push(function () { r.style.top = l }) } if (a) { var s = a.offsetTop - o.offsetTop + a.offsetHeight + "px"; m.push(function () { r.style.height = s }) } } else m.push(function () { r.setAttribute("data-start", n), n < i && r.setAttribute("data-end", i), r.style.top = (n - c - 1) * f + "px", r.textContent = new Array(i - n + 2).join(" \n") }); m.push(function () { p.appendChild(r) }) }), function () { m.forEach(i) } } function u() { var e = location.hash.slice(1); r(".temporary.line-highlight").forEach(function (e) { e.parentNode.removeChild(e) }); var t = (e.match(/\.([\d,-]+)$/) || [, ""])[1]; if (t && !document.getElementById(e)) { var n = e.slice(0, e.lastIndexOf(".")), i = document.getElementById(n); if (i) i.hasAttribute("data-line") || i.setAttribute("data-line", ""), s(i, t, "temporary ")(), document.querySelector(".temporary.line-highlight").scrollIntoView() } } }();
!function () { var i = Object.assign || function (e, n) { for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]); return e }; function e(e) { this.defaults = i({}, e) } function l(e) { for (var n = 0, t = 0; t < e.length; ++t)e.charCodeAt(t) == "\t".charCodeAt(0) && (n += 3); return e.length + n } e.prototype = { setDefaults: function (e) { this.defaults = i(this.defaults, e) }, normalize: function (e, n) { for (var t in n = i(this.defaults, n)) { var r = t.replace(/-(\w)/g, function (e, n) { return n.toUpperCase() }); "normalize" !== t && "setDefaults" !== r && n[t] && this[r] && (e = this[r].call(this, e, n[t])) } return e }, leftTrim: function (e) { return e.replace(/^\s+/, "") }, rightTrim: function (e) { return e.replace(/\s+$/, "") }, tabsToSpaces: function (e, n) { return n = 0 | n || 4, e.replace(/\t/g, new Array(++n).join(" ")) }, spacesToTabs: function (e, n) { return n = 0 | n || 4, e.replace(RegExp(" {" + n + "}", "g"), "\t") }, removeTrailing: function (e) { return e.replace(/\s*?$/gm, "") }, removeInitialLineFeed: function (e) { return e.replace(/^(?:\r?\n|\r)/, "") }, removeIndent: function (e) { var n = e.match(/^[^\S\n\r]*(?=\S)/gm); return n && n[0].length ? (n.sort(function (e, n) { return e.length - n.length }), n[0].length ? e.replace(RegExp("^" + n[0], "gm"), "") : e) : e }, indent: function (e, n) { return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++n).join("\t") + "$&") }, breakLines: function (e, n) { n = !0 === n ? 80 : 0 | n || 80; for (var t = e.split("\n"), r = 0; r < t.length; ++r)if (!(l(t[r]) <= n)) { for (var i = t[r].split(/(\s+)/g), o = 0, a = 0; a < i.length; ++a) { var s = l(i[a]); n < (o += s) && (i[a] = "\n" + i[a], o = s) } t[r] = i.join("") } return t.join("\n") } }, "undefined" != typeof module && module.exports && (module.exports = e), "undefined" != typeof Prism && (Prism.plugins.NormalizeWhitespace = new e({ "remove-trailing": !0, "remove-indent": !0, "left-trim": !0, "right-trim": !0 }), Prism.hooks.add("before-sanity-check", function (e) { var n = Prism.plugins.NormalizeWhitespace; if (!e.settings || !1 !== e.settings["whitespace-normalization"]) if (e.element && e.element.parentNode || !e.code) { var t = e.element.parentNode, r = /(?:^|\s)no-whitespace-normalization(?:\s|$)/; if (e.code && t && "pre" === t.nodeName.toLowerCase() && !r.test(t.className) && !r.test(e.element.className)) { for (var i = t.childNodes, o = "", a = "", s = !1, l = 0; l < i.length; ++l) { var c = i[l]; c == e.element ? s = !0 : "#text" === c.nodeName && (s ? a += c.nodeValue : o += c.nodeValue, t.removeChild(c), --l) } if (e.element.children.length && Prism.plugins.KeepMarkup) { var u = o + e.element.innerHTML + a; e.element.innerHTML = n.normalize(u, e.settings), e.code = e.element.textContent } else e.code = o + e.code + a, e.code = n.normalize(e.code, e.settings) } } else e.code = n.normalize(e.code, e.settings) })) }();
