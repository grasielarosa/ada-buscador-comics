"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var MAIN_URL = "https://gateway.marvel.com:443/v1/public";
var API_KEY = "0f4aa487d42d3e3fc4a6f9b5500b84a0";
var HASH = "2b6ed155c0f547b08ac62b49a559d04d";
var getData = function (urlApi) {
    return fetch(urlApi)
        .then(function (res) { return res.json(); })
        .then(function (json) {
        return json.data;
    });
};
var render = function (comics) { return __awaiter(void 0, void 0, void 0, function () {
    var container, contentHTML, _i, comics_1, comic, urlComic;
    return __generator(this, function (_a) {
        container = document.querySelector("#apiResult");
        contentHTML = "";
        for (_i = 0, comics_1 = comics; _i < comics_1.length; _i++) {
            comic = comics_1[_i];
            urlComic = comic.urls[0].url;
            contentHTML += "\n                    <div class=\"col-3\">\n                    <div class=\"card card-selected\">\n                        <a href=\"./detailed-search.html?title=" + (comic.title || comic.name) + "&id=" + comic.id + "&type=" + searchType.value + "\" target=\"_blank\">\n                            <div class=\"card-body\">\n                                <img src=\"" + comic.thumbnail.path + "." + comic.thumbnail.extension + "\" alt=\"" + (comic.title || comic.name) + "\"\n                                    class=\"card-body img-fluid\">\n                            </div>\n                            <div class=\"card-footer\">\n                                <span class=\"\">" + (comic.title || comic.name) + "</span>\n                            </div>\n                        </a>\n                    </div>\n                    </div>\n                   ";
        }
        container.innerHTML = contentHTML;
        return [2 /*return*/];
    });
}); };
var counterResults = function (comics) {
    total = comics;
    var container = document.querySelector("#textResult");
    container.innerHTML = "<span class=\"col-4 fw-bold mb-4\"> Su b\u00FAsqueda tiene " + total + " resultados.</span>";
    buttons(total);
};
var init = function () { return __awaiter(void 0, void 0, void 0, function () {
    var urlInit, comics;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                urlInit = MAIN_URL + "/comics?ts=1&apikey=" + API_KEY + "&hash=" + HASH;
                return [4 /*yield*/, getData(urlInit)];
            case 1:
                comics = _a.sent();
                render(comics.results);
                counterResults(comics.total);
                return [2 /*return*/];
        }
    });
}); };
init();
