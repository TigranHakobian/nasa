import React, {useEffect} from 'react'
import {KEY} from "../modules/api/ApinearByAsteroids";
import useFetch from "../hooks/useFetch";


export default function AstronomyPictureOfTheDay() {
    const {response, performFetch} = useFetch(KEY)
    // const [data,setData] = useState([])

    useEffect(  ()=>{
        performFetch();
    },[performFetch])

    console.log(response.data)

    return (
        <div>
            Photos
        </div>
    )
}


