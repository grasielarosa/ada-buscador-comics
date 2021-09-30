const btnPages: HTMLButtonElement = document.querySelector("#btnPages")!;
const firstPage: HTMLButtonElement = document.querySelector("#firstPage")!;
const prevPage: HTMLButtonElement = document.querySelector("#prevPage")!;
const nextPage: HTMLButtonElement = document.querySelector("#nextPage")!;
const lastPage: HTMLButtonElement = document.querySelector("#lastPage")!;

let offset: number = 0;
const limit: number = 20;
let total: number;

const offsetParam = (e: Event) => {
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
  } else if (el === lastPage) {
    offset = total - limit;

    onChangeHandle(e);
  } else {
    return (offset = 20);
  }
};

const buttons = (total: number) => {
  if (offset <= 0) {
    prevPage.disabled = true;
    prevPage.setAttribute("aria-disabled", "true");
    firstPage.disabled = true;
    firstPage.setAttribute("aria-disabled", "true");
  } else {
    prevPage.disabled = false;
    prevPage.setAttribute("aria-disabled", "false");
    firstPage.disabled = false;
    firstPage.setAttribute("aria-disabled", "false");
  }
  if (offset + limit >= total) {
    nextPage.disabled = true;
    nextPage.setAttribute("aria-disabled", "true");
    lastPage.disabled = true;
    lastPage.setAttribute("aria-disabled", "true");
  } else {
    nextPage.disabled = false;
    nextPage.setAttribute("aria-disabled", "false");
    lastPage.disabled = false;
    lastPage.setAttribute("aria-disabled", "false");
  }
};

btnPages.addEventListener("click", offsetParam);
