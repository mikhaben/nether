let endpoint = 'https://data.jsdelivr.com/v1/stats/packages/year'
endpoint  = 'https://registry.npmjs.org/-/v1/search?text='

export const getSearchResult = async (packageName) => {
    if(!packageName){
        return
    }

    let response = await fetch(endpoint + packageName)
    let data = await response.json()

    return data
}