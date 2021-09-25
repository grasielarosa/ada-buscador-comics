"use strict";
var btnPages = document.querySelector("#btnPages");
var firstPage = document.querySelector("#firstPage");
var prevPage = document.querySelector("#prevPage");
var nextPage = document.querySelector("#nextPage");
var lastPage = document.querySelector("#lastPage");
var offset = 0;
var limit = 20;
var count = 1;
var offsetParam = function (e) {
    var el = e.target;
    if (el == firstPage) {
        offset = 0;
        onChangeHandle(e);
    }
    else if (el === prevPage) {
        offset -= 20;
        onChangeHandle(e);
    }
    else if (el == nextPage) {
        offset += 20;
        onChangeHandle(e);
        // }else if (el === lastPage ) {
        //     return offset -= "";
    }
    else {
        return (offset = 20);
    }
};
var numPages = function (totalResults) {
    console.log(Math.ceil(totalResults / limit));
};
btnPages.addEventListener("click", offsetParam);
