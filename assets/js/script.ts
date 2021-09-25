
 const render = async (urlAPI) => {
    const container = document.querySelector("#apiResult");
    let contentHTML = "";

   fetch(urlAPI)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        const totalResults: number = json.data.total;
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
        container.dataset.masonry = "{'percentPosition': true }";       
      });
  };




