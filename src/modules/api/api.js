import ENDPOINTS from './ApinearByAsteroids'

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
