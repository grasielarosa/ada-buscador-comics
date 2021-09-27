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
var searchForm = document.querySelector("#searchForm");
var searchType = document.getElementById("searchType");
var searchBtn = document.querySelector("#searchBtn");
var typeParam = function () {
    var typeUrl = searchType.value == "comic" ? "comics" : "characters";
    return typeUrl;
};
var orderBy = function () {
    var searchInOrder = document.querySelector("#searchInOrder").value;
    switch (searchInOrder) {
        case "aToZ":
            return searchType.value == "comic" ? "title" : "name";
        case "zToA":
            return searchType.value == "comic" ? "-title" : "-name";
        case "newer":
            return "modified";
        case "older":
            return "-modified";
        default:
            return "modified";
    }
};
var changeUrlBrowser = function (params) {
    console.log(typeof params);
    var paramsStr = new URLSearchParams();
    paramsStr.set("orderBy", params.orderBy);
    paramsStr.set("limit", params.limit);
    paramsStr.set("offset", params.offset);
    paramsStr.set("urlType", params.urlType);
    window.history.pushState({}, "", "?" + paramsStr.toString());
};
var getUrlApi = function (params) {
    var paramsStr = new URLSearchParams();
    paramsStr.set("orderBy", params.orderBy);
    paramsStr.set("limit", params.limit);
    paramsStr.set("offset", params.offset);
    return MAIN_URL + "/" + params.urlType + "?" + paramsStr + "&ts=1&apikey=" + API_KEY + "&hash=" + HASH;
};
var onChangeHandle = function (e) { return __awaiter(void 0, void 0, void 0, function () {
    var params, urlAPI, comics;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e.preventDefault();
                params = {
                    urlType: typeParam(),
                    orderBy: orderBy(),
                    limit: limit,
                    offset: offset,
                };
                changeUrlBrowser(params);
                urlAPI = getUrlApi(params);
                return [4 /*yield*/, getData(urlAPI)];
            case 1:
                comics = _a.sent();
                render(comics.results);
                counterResults(comics.total);
                return [2 /*return*/];
        }
    });
}); };
searchForm.addEventListener("change", onChangeHandle);
