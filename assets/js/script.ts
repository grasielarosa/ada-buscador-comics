const getData = (urlApi) => {
  return fetch(urlApi)
    .then((res) => res.json())
    .then((json) => {
      return json.data;
    });
};

const render = (comics) => {
  const container = document.querySelector("#apiResult");
  let contentHTML = "";

  for (const comic of comics) {
    let urlComic = comic.urls[0].url;
    contentHTML += `
                    <div class="col-3">
                    <div class="card">
                        <a href="${urlComic}" target="_blank">
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
  //container.dataset.masonry = "{'percentPosition': true }";
};

const init = async () => {
  const urlInit = `${MAIN_URL}/comics?ts=1&apikey=${API_KEY}&hash=${HASH}`;

  const comics = await getData(urlInit);
  render(comics.results);

  // falta hacer el init por la url del browser
};

init();
