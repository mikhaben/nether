// Package for npm api to avoid "CORS"
// DOC: https://www.jsdocs.io/package/query-registry

let endpointNPM = "https://registry.npmjs.org/-/v1/search?text=";
let endpointJsdelivr = "https://data.jsdelivr.com/v1/package/npm/";
let endpointJsdelivrStat = "https://data.jsdelivr.com/v1/stats/packages";

const fetchConstructor = async (endpoint, packageTitle, params = "") => {
  if (!packageTitle || !endpoint) {
    return;
  }

  let url = endpoint + packageTitle + params;
  console.log(url);
  let response = await fetch(url);
  let data = await response.json();

  return data;
};

export const getSearchResult = async (packageName, from) => {
  return fetchConstructor(endpointNPM, packageName, `&size=250&from=${from}`);
};

export const getCurrentItemStat = async (packageName) => {
  return fetchConstructor(endpointJsdelivr, packageName, "/stats");
};

export const getPopularItemsList = async () => {
  let response = await fetch(endpointJsdelivrStat);
  let data = await response.json();
  return data;
};
