function hasOwnProperty(r, e) {
    return Object.prototype.hasOwnProperty.call(r, e);
}

module.exports = function(r, e, t, n) {
    e = e || "&", t = t || "=";
    var o = {};
    if ("string" != typeof r || 0 === r.length) return o;
    var s = /\+/g;
    r = r.split(e);
    var a = 1e3;
    n && "number" == typeof n.maxKeys && (a = n.maxKeys);
    var p = r.length;
    a > 0 && p > a && (p = a);
    for (var u = 0; u < p; ++u) {
        var y, c, i, f, l = r[u].replace(s, "%20"), d = l.indexOf(t);
        d >= 0 ? (y = l.substr(0, d), c = l.substr(d + 1)) : (y = l, c = ""), i = decodeURIComponent(y), 
        f = decodeURIComponent(c), hasOwnProperty(o, i) ? Array.isArray(o[i]) ? o[i].push(f) : o[i] = [ o[i], f ] : o[i] = f;
    }
    return o;
};