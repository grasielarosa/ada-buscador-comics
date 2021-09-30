const searchForm = document.querySelector("#searchForm") as HTMLInputElement;
const searchInput = document.querySelector("#searchInput") as HTMLInputElement;
const searchType = document.getElementById("searchType") as HTMLSelectElement;
const searchBtn = document.querySelector("#searchBtn") as HTMLButtonElement;

const typeParam = () => {
  const typeUrl = searchType!.value == "comics" ? "comics" : "characters";
  return typeUrl;
};

const orderBy = () => {
  const searchInOrder = (
    document.querySelector("#searchInOrder") as HTMLSelectElement
  ).value;
  switch (searchInOrder) {
    case "aToZ":
      return searchType!.value == "comic" ? "title" : "name";

    case "zToA":
      return searchType!.value == "comic" ? "-title" : "-name";

    case "newer":
      return "-modified";

    case "older":
      return "modified";

    default:
      return "modified";
  }
};

const changeUrlBrowser = (params) => {
  const paramsStr = new URLSearchParams();
  paramsStr.set("orderBy", params.orderBy);
  paramsStr.set("limit", params.limit);
  paramsStr.set("offset", params.offset);
  paramsStr.set("urlType", params.urlType);
  if (params.name && searchType.value) {
    const nameSearch =
      searchType.value === "comic" ? "titleStartsWith" : "nameStartsWith";
    paramsStr.set(nameSearch, params.name);
  }

  window.history.pushState({}, "", "?" + paramsStr.toString());
};

const getUrlApi = (params) => {
  const paramsStr = new URLSearchParams();
  paramsStr.set("orderBy", params.orderBy);
  paramsStr.set("limit", params.limit);
  paramsStr.set("offset", params.offset);
  if (params.name && searchType.value) {
    const nameSearch =
      searchType.value === "comic" ? "titleStartsWith" : "nameStartsWith";
    paramsStr.set(nameSearch, params.name);
  }
  return `${MAIN_URL}/${params.urlType}?${paramsStr}&ts=1&apikey=${API_KEY}&hash=${HASH}`;
};

const onChangeHandle = async (e) => {
  e.preventDefault();

  const params = {
    urlType: typeParam(),
    name: searchInput.value,
    orderBy: orderBy(),
    limit,
    offset,
  };

  changeUrlBrowser(params);
  const urlAPI = getUrlApi(params);

  const comics = await getData(urlAPI);
  render(comics.results);
  counterResults(comics.total);
};

searchForm.addEventListener("change", onChangeHandle);
searchBtn.addEventListener("click", onChangeHandle);
