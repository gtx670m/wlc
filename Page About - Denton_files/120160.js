(function() {
    (function t(loc, tit) {
        var validLFID = function(n) {
            return n && 37 <= n.length;
        };
        var getLFID = function() {
            var t = null,
                n = "lfuuid=";
            try {
                for (var e = document.cookie.split(";"), r = 0; r < e.length; r++) {
                    for (var l = e[r];
                        " " == l.charAt(0);)
                        l = l.substring(1, l.length);
                    0 == l.indexOf(n) && (t = l.substring(n.length, l.length));
                }
            } catch (n) {
                t = null;
            }
            return validLFID(t) ? encodeURIComponent(t) : "NA";
        };
        var trk_sw = encodeURIComponent(screen.width).substring(0, 6);
        var trk_sh = encodeURIComponent(screen.height).substring(0, 6);
        var trk_ref = encodeURIComponent(document.referrer).substring(0, 1100);
        var trk_tit = tit || encodeURIComponent(document.title).substring(0, 200);
        var trk_loc = loc || encodeURIComponent(document.location).substring(0, 1000);
        var trk_agn = encodeURIComponent(navigator.appName).substring(0, 100);
        var trk_lng = window.navigator.userLanguage || window.navigator.language;
        var trk_agv = encodeURIComponent(navigator.userAgent + ".lfcd" + screen.colorDepth + ".lflng" + trk_lng).substring(0, 1000);
        var trk_dom = encodeURIComponent(document.domain).substring(0, 200);
        var trk_link = "https://secure.leadforensics.com/Track/Capture.aspx?retType=js&trk_uid=&trk_user=120160&trk_sw=" + trk_sw + "&trk_sh=" + trk_sh + "&trk_ref=" + trk_ref + "&trk_tit=" + trk_tit + "&trk_loc=" + trk_loc + "&trk_agn=" + trk_agn + "&trk_agv=" + trk_agv + "&trk_dom=" + trk_dom + "&trk_cookie=" + getLFID();
        var j = document.createElement("script");
        j.type = "text/javascript";
        j.src = trk_link;
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(j, s);
        if (loc == null) {
            window.addEventListener("load", function() {
                var trk_anchors = document.getElementsByTagName("a");
                for (var i = 0, l = trk_anchors.length; i < l; i++) {
                    try {
                        var trk_ext = trk_anchors[i].getAttribute("href").substring(trk_anchors[i].getAttribute("href").lastIndexOf("."), trk_anchors[i].getAttribute("href").length);
                        if ((/\.pdf/g).test(trk_ext) || (/\.doc/g).test(trk_ext) || (/\.docx/g).test(trk_ext) || (/\.xls/g).test(trk_ext) || (/\.xlsx/g).test(trk_ext) || (/\.ashx/g).test(trk_ext) || (/\.exe/g).test(trk_ext)) {
                            trk_anchors[i].addEventListener("mousedown", function() {
                                t(this.getAttribute("href"), "Downloaded - " + this.getAttribute("href"));
                            });
                        }
                    } catch (e) {}
                }
            });
        }
    })();
})();