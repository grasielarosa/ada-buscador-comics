const firstPage: HTMLElement = document.querySelector('#firstPage');
const prevPage: HTMLElement = document.querySelector('#prevPage');
const nextPage: HTMLElement = document.querySelector('#nextPage');
const lastPage: HTMLElement = document.querySelector('#lastPage');

let offset : number = 0;
const limit : number = 20;
let count : number = 1;

firstPage.addEventListener('click', e => {
    if (count === 1){
        firstPage.disabled = true;
    }
    console.log("firstPage");
});
prevPage.addEventListener('click', e => {
    console.log("prevPage");
});
nextPage.addEventListener('click', e => {
    console.log("nextPage");
});
lastPage.addEventListener('click', e => {
    if (count === numPages()){
        lastPage.setAttribute = 'disabled';
    };
});

const offsetParam  = () => {
return 10;
    
}

const numPages = (totalResults: number) => {
    console.log(Math.ceil(totalResults / limit));
}
