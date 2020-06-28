const URL = 'https://yts.lt/api/v2/list_movies.json'

class API{

    async getData(){
        const query = await fetch(URL)
        const data = await query.json()
        return data
    }

}

export default new API()