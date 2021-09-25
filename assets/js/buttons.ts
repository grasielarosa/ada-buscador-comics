const btnPages: HTMLElement = document.querySelector("#btnPages");
const firstPage: HTMLElement = document.querySelector("#firstPage");
const prevPage: HTMLElement = document.querySelector("#prevPage");
const nextPage: HTMLElement = document.querySelector("#nextPage");
const lastPage: HTMLElement = document.querySelector("#lastPage");

let offset: number = 0;
const limit: number = 20;
let count: number = 1;

const offsetParam = (e) => {
  const el = e.target;
  if (el == firstPage) {
    offset = 0;
    onChangeHandle(e);
  } else if (el === prevPage) {
    offset -= 20;

    onChangeHandle(e);
  } else if (el == nextPage) {
    offset += 20;
    onChangeHandle(e);

    // }else if (el === lastPage ) {
    //     return offset -= "";
  } else {
    return (offset = 20);
  }
};

const numPages = (totalResults: number) => {
  console.log(Math.ceil(totalResults / limit));
};

btnPages.addEventListener("click", offsetParam);
