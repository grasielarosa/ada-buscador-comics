"use strict";
var searchForm = document.querySelector('#searchForm');
var searchType = document.getElementById('searchType');
var searchBtn = document.querySelector('#searchBtn');
var MAIN_URL = "https://gateway.marvel.com:443/v1/public";
var API_KEY = "0f4aa487d42d3e3fc4a6f9b5500b84a0";
var HASH = "2b6ed155c0f547b08ac62b49a559d04d";
var typeParam = function () {
    var typeUrl = searchType.value == "comic" ? "comics" : "characters";
    return typeUrl;
};
var orderBy = function () {
    var searchInOrder = document.querySelector('#searchInOrder').value;
    switch (searchInOrder) {
        case "aToZ":
            return searchType.value == "comic" ? "title" : "name";
        case "zToA":
            return searchType.value == "comic" ? "-title" : "-name";
        case "newer":
            return "modified";
        case "older":
            return "-modified";
            ;
        default:
            return "modified";
    }
};
var onChangeHandle = function (e) {
    e.preventDefault();
    var params = {
        urlType: typeParam(),
        orderBy: orderBy(),
        limit: limit,
        offset: offsetParam(),
    };
    changeUrlBrowser(params);
    var urlAPI = getUrlApi(params);
    render(urlAPI);
};
searchForm.addEventListener("change", onChangeHandle);
