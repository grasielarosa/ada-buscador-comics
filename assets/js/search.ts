const searchForm = document.querySelector("#searchForm");
const searchType = document.getElementById("searchType");
const searchBtn = document.querySelector("#searchBtn");

const MAIN_URL = `https://gateway.marvel.com:443/v1/public`;
const API_KEY = `0f4aa487d42d3e3fc4a6f9b5500b84a0`;
const HASH = `2b6ed155c0f547b08ac62b49a559d04d`;

const typeParam = () => {
  const typeUrl = searchType.value == "comic" ? "comics" : "characters";
  return typeUrl;
};

const orderBy = () => {
  const searchInOrder = document.querySelector("#searchInOrder").value;
  switch (searchInOrder) {
    case "aToZ":
      return searchType.value == "comic" ? "title" : "name";

    case "zToA":
      return searchType.value == "comic" ? "-title" : "-name";

    case "newer":
      return "modified";

    case "older":
      return "-modified";

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
  window.history.pushState({}, "", "?" + paramsStr.toString());
};
const getUrlApi = (params) => {
  const paramsStr = new URLSearchParams();
  paramsStr.set("orderBy", params.orderBy);
  paramsStr.set("limit", params.limit);
  paramsStr.set("offset", params.offset);
  return `${MAIN_URL}/${params.urlType}?${paramsStr}&ts=1&apikey=${API_KEY}&hash=${HASH}`;
};

const onChangeHandle = async (e) => {
  e.preventDefault();

  const params = {
    urlType: typeParam(),
    orderBy: orderBy(),
    limit,
    offset,
  };

  changeUrlBrowser(params);
  const urlAPI = getUrlApi(params);

  const comics = await getData(urlAPI);
  render(comics.results);
};

searchForm!.addEventListener("change", onChangeHandle);
