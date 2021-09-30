const MAIN_URL = `https://gateway.marvel.com:443/v1/public`;
const API_KEY = `0f4aa487d42d3e3fc4a6f9b5500b84a0`;
const HASH = `2b6ed155c0f547b08ac62b49a559d04d`;

const getData = (urlApi: string) => {
  return fetch(urlApi)
    .then((res) => res.json())
    .then((json) => {
      return json.data;
    });
};

const render = async (comics) => {
  const container = document.querySelector("#apiResult");
  let contentHTML = "";

  for (const comic of comics) {
    let urlComic = comic.urls[0].url;
    contentHTML += `
                    <div class="col-3">
                    <div class="card card-selected">
                        <a href="./detailed-search.html?title=${
                          comic.title || comic.name
                        }&id=${comic.id}&type=${
      searchType.value
    }" target="_blank">
                            <div class="card-body">
                                <img src="${comic.thumbnail.path}.${
      comic.thumbnail.extension
    }" alt="${comic.title || comic.name}"
                                    class="card-body img-fluid">
                            </div>
                            <div class="card-footer">
                                <span class="">${
                                  comic.title || comic.name
                                }</span>
                            </div>
                        </a>
                    </div>
                    </div>
                   `;
  }
  container!.innerHTML = contentHTML;
  // const msnry = new Masonry(container, {
  //   itemSelector: ".col-3",
  //   percentPosition: true,
  // });
  // const cards = container!.querySelectorAll(".card");
  // cards.forEach(async function (el) {
  //   await msnry.layout();
  // });
};

const counterResults = (comics: number) => {
  total = comics;
  const container = document.querySelector("#textResult");
  container!.innerHTML = `<span class="col-4 fw-bold mb-4"> Su búsqueda tiene ${total} resultados.</span>`;
  buttons(total);
};

const init = async () => {
  const urlInit = `${MAIN_URL}/comics?ts=1&apikey=${API_KEY}&hash=${HASH}`;
  const comics = await getData(urlInit);
  render(comics.results);
  counterResults(comics.total);

  // falta hacer el init por la url del browser
};

init();
