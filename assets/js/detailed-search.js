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
var cardSelected = document.querySelector(".card-selected");
var urlParams = new URLSearchParams(window.location.search);
var idParam = urlParams.get("id");
var associatedType = urlParams.get("type");
var renderAssociated = function (associated) { return __awaiter(void 0, void 0, void 0, function () {
    var container, date, creators, creator, description, contentHTML, comicsThatShow, comic, description, contentHTML;
    return __generator(this, function (_a) {
        container = document.querySelector("#associatedComic");
        if (associatedType === "comics") {
            date = new Intl.DateTimeFormat("es-AR").format(new Date(parseInt(associated.dates.find(function (date) { return date.type === "onsaleDate"; }).date)));
            creators = [];
            for (creator in associated.creators.items) {
                creators.push(associated.creators.items[creator].name);
            }
            description = associated.description !== null
                ? associated.description
                : "no disponible";
            contentHTML = "<div class=\"row mt-5\">\n    <div class=\"col\">\n      <h2 class=\"fw-bold\">" + associated.title + "</h2>\n    </div>\n  </div>\n  <div class=\"row mt-5\">\n    <div class=\"col-3\">\n      <div class=\"card\" id=\"\"><img src=\"" + associated.thumbnail.path + "." + associated.thumbnail.extension + "\" alt=\"" + associated.title + "\"</div>\n    </div>\n    <div class=\"col ms-2\">\n    <p>Fecha Lanzamiento: <span id=\"\">" + date + "</span></p>\n    <p>Guionistas: <span id=\"\">" + creators + "</span></p>\n    <p>Descripci\u00F3n: <span id=\"\">" + description + "</span></p>\n    <p>Personajes: <span id=\"\">" + associated.title + "</span></p>\n    </div>\n  </div>\n  </div>";
        }
        if (associatedType === "characters") {
            comicsThatShow = [];
            for (comic in associated.comics.items) {
                comicsThatShow.push(associated.comics.items[comic].name);
            }
            description = associated.description !== null || associated.description !== ""
                ? associated.description
                : "no disponible";
            contentHTML = "<div class=\"row mt-5\">\n    <div class=\"col\">\n      <h2 class=\"fw-bold\">" + associated.name + "</h2>\n    </div>\n  </div>\n  <div class=\"row mt-5\">\n    <div class=\"col-3\">\n      <div class=\"card\" id=\"\"><img src=\"" + associated.thumbnail.path + "." + associated.thumbnail.extension + "\" alt=\"" + associated.title + "\"</div>\n    </div>\n    <div class=\"col ms-2\">\n    <p>Descripci\u00F3n: <span id=\"\">" + description + "</span></p>\n       <p>Comics que aparece: <span id=\"\">" + comicsThatShow + "</span></p>\n    \n    \n    </div>\n  </div>\n  </div>";
        }
        container.innerHTML = contentHTML;
        return [2 /*return*/];
    });
}); };
var associated = function () { return __awaiter(void 0, void 0, void 0, function () {
    var urlAssociated, associated;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                urlAssociated = MAIN_URL + "/" + associatedType + "/" + idParam + "?&ts=1&apikey=" + API_KEY + "&hash=" + HASH;
                console.log(urlAssociated);
                return [4 /*yield*/, getData(urlAssociated)];
            case 1:
                associated = _a.sent();
                renderAssociated(associated.results[0]);
                console.log(associated);
                return [2 /*return*/];
        }
    });
}); };
associated();
