import ENDPOINTS from './ApinearByAsteroids'

//3bw6Tqyq36IKefLUFkn6EKpg5YVxdi774YDJgzGx

//https://api.nasa.gov/planetary/apod?api_key=3bw6Tqyq36IKefLUFkn6EKpg5YVxdi774YDJgzGx

const BASE_URL = "https://api.nasa.gov/planetary/apod?api_key="



class Api {
    constructor(baseUrl,endpoints) {
        this.baseUrl = baseUrl;
        this.endpoints = endpoints;
    }

    async generateRequest(endpoint,data){
        const {method,uri} =this.endpoints[endpoint]

        return fetch(`${this.baseUrl}${uri}`,{method,body:data})
    }

    async fetch(endpoint,data){
        const  response = await this.generateRequest(endpoint,data)
        return response.json()
    }
}

export  default new Api(BASE_URL,ENDPOINTS)
