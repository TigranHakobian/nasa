const API_KEY = "vsOioM79hYpi8fMRm0Bs5kwcffjwKdzXYc5LqwCs"



export const getApod = async (date) => {
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`);
        const data = await response.json();
        console.log('API Apod Data', data)
        return data;
    } catch (e) {
        console.log(e)
    }
};


export const getAsteroids= async (startDate, endDate) => {
    try {
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e)
    }
};
