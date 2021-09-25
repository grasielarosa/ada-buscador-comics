"use strict";
var getData = function (urlApi) {
    return fetch(urlApi)
        .then(function (res) { return res.json(); })
        .then(function (json) {
        return json.data;
    });
};
var render = function (comics) {
    var container = document.querySelector("#apiResult");
    var contentHTML = "";
    for (var _i = 0, comics_1 = comics; _i < comics_1.length; _i++) {
        var comic = comics_1[_i];
        var urlComic = comic.urls[0].url;
        contentHTML += "\n                    <div class=\"col-3\">\n                    <div class=\"card\">\n                        <a href=\"" + urlComic + "\" target=\"_blank\">\n                            <div class=\"card-body\">\n                                <img src=\"" + comic.thumbnail.path + "." + comic.thumbnail.extension + "\" alt=\"" + (comic.title || comic.name) + "\"\n                                    class=\"card-body img-fluid\">\n                            </div>\n                            <div class=\"card-footer\">\n                                <span class=\"\">" + (comic.title || comic.name) + "</span>\n                            </div>\n                        </a>\n                    </div>\n                    </div>\n                   ";
    }
    container.innerHTML = contentHTML;
    //container.dataset.masonry = "{'percentPosition': true }";
};
