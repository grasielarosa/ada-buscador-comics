const cardSelected = document.querySelector(".card-selected");

const urlParams = new URLSearchParams(window.location.search);
const idParam = urlParams.get("id");
const associatedType = urlParams.get("type");

const renderAssociated = async (associated) => {
  const container = document.querySelector("#associatedComic");
  if (associatedType === "comics") {
    const date = new Intl.DateTimeFormat("es-AR").format(
      new Date(
        parseInt(
          associated.dates.find((date) => date.type === "onsaleDate").date
        )
      )
    );

    let creators = [];
    for (const creator in associated.creators.items) {
      creators.push(associated.creators.items[creator].name);
    }

    const description =
      associated.description !== null
        ? associated.description
        : "no disponible";

    let contentHTML = `<div class="row mt-5">
    <div class="col">
      <h2 class="fw-bold">${associated.title}</h2>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-3">
      <div class="card" id=""><img src="${associated.thumbnail.path}.${associated.thumbnail.extension}" alt="${associated.title}"</div>
    </div>
    <div class="col ms-2">
    <p>Fecha Lanzamiento: <span id="">${date}</span></p>
    <p>Guionistas: <span id="">${creators}</span></p>
    <p>Descripción: <span id="">${description}</span></p>
    <p>Personajes: <span id="">${associated.title}</span></p>
    </div>
  </div>
  </div>`;
  }
  if (associatedType === "characters") {
    let comicsThatShow = [];
    for (const comic in associated.comics.items) {
      comicsThatShow.push(associated.comics.items[comic].name);
    }

    const description =
      associated.description !== null || associated.description !== ""
        ? associated.description
        : "no disponible";

    let contentHTML = `<div class="row mt-5">
    <div class="col">
      <h2 class="fw-bold">${associated.name}</h2>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-3">
      <div class="card" id=""><img src="${associated.thumbnail.path}.${associated.thumbnail.extension}" alt="${associated.title}"</div>
    </div>
    <div class="col ms-2">
    <p>Descripción: <span id="">${description}</span></p>
       <p>Comics que aparece: <span id="">${comicsThatShow}</span></p>
    
    
    </div>
  </div>
  </div>`;
  }

  container!.innerHTML = contentHTML;
};

const associated = async () => {
  const urlAssociated = `${MAIN_URL}/${associatedType}/${idParam}?&ts=1&apikey=${API_KEY}&hash=${HASH}`;
  console.log(urlAssociated);
  const associated = await getData(urlAssociated);
  renderAssociated(associated.results[0]);
  console.log(associated);
};

associated();
