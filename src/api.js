let endpointNPM  = 'https://registry.npmjs.org/-/v1/search?text='
let endpointJsdelivr  = 'https://data.jsdelivr.com/v1/package/npm/'

const fetchConstructor = async (endpoint, packageTitle, params = '') => {
    if(!packageTitle || !endpoint){
        return
    }

    let url = endpoint + packageTitle +  params
    let response = await fetch(url)
    let data = await response.json()

    return data
}

export const getSearchResult = async (packageName) => {
   return fetchConstructor(endpointNPM , packageName)
}

export const getCurrentItemStat = async (packageName) => {
   return fetchConstructor(endpointJsdelivr , packageName, '/stats')
}

export const getCurrentItemEntry = async (packageName) => {
    return fetchConstructor(endpointJsdelivr , packageName, '/entrypoints')
 }

