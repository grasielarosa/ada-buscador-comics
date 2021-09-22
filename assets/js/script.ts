const MAIN_URL = `https://gateway.marvel.com:443/v1/public/`;
const API_KEY = `0f4aa487d42d3e3fc4a6f9b5500b84a0`;
const HASH = `2b6ed155c0f547b08ac62b49a559d04d`;

const api = { 
  render: () => {
    const urlAPI = `${MAIN_URL}comics?ts=1&apikey=${API_KEY}&hash=${HASH}`;
    const container = document.querySelector("#apiResult");
    let contentHTML = "";

    fetch(urlAPI)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        const totalResults: number = json.data.total;
        numPages(totalResults);
        
    
        for (const comic of json.data.results) {
          let urlComic = comic.urls[0].url;
          contentHTML += `
                    <div class="col-3">
                    <div class="card">
                        <a href="${urlComic}" target="_blank">
                            <div class="card-body">
                                <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="${comic.title}"
                                    class="card-body img-fluid">
                            </div>
                            <div class="card-footer">
                                <span class="">${comic.title}</span>
                            </div>
                        </a>
                    </div>
                    </div>
                   `;
        }
        container!.innerHTML = contentHTML;
        
       

        
      });
      
  },
};

api.render();

const numPages = (totalResults: number) => {
    console.log(Math.ceil(totalResults / 20));
}
