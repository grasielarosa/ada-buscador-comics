"use strict";
var MAIN_URL = "https://gateway.marvel.com:443/v1/public/";
var API_KEY = "0f4aa487d42d3e3fc4a6f9b5500b84a0";
var HASH = "2b6ed155c0f547b08ac62b49a559d04d";
var api = {
    render: function () {
        var urlAPI = MAIN_URL + "comics?ts=1&apikey=" + API_KEY + "&hash=" + HASH;
        var container = document.querySelector("#apiResult");
        var contentHTML = "";
        fetch(urlAPI)
            .then(function (res) { return res.json(); })
            .then(function (json) {
            console.log(json);
            var totalResults = json.data.total;
            numPages(totalResults);
            for (var _i = 0, _a = json.data.results; _i < _a.length; _i++) {
                var comic = _a[_i];
                var urlComic = comic.urls[0].url;
                contentHTML += "\n                    <div class=\"col-3\">\n                    <div class=\"card\">\n                        <a href=\"" + urlComic + "\" target=\"_blank\">\n                            <div class=\"card-body\">\n                                <img src=\"" + comic.thumbnail.path + "." + comic.thumbnail.extension + "\" alt=\"" + comic.title + "\"\n                                    class=\"card-body img-fluid\">\n                            </div>\n                            <div class=\"card-footer\">\n                                <span class=\"\">" + comic.title + "</span>\n                            </div>\n                        </a>\n                    </div>\n                    </div>\n                   ";
            }
            container.innerHTML = contentHTML;
        });
    },
};
api.render();
var numPages = function (totalResults) {
    console.log(Math.ceil(totalResults / 20));
};
// const nextPage = (numPages) => {
//   // offset + 20
// }
// const prevPage = (numPages) => {
//   // offset - 20
// }
// const lastPage = (numPages) => {
//   // offset  última página
// }
// const firstPage = (numPages) => {
//   // offset 0
// }
