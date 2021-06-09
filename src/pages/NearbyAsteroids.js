import React, {useEffect} from 'react'
import {KEY} from "../modules/api/ApinearByAsteroids";
import useFetch from "../hooks/useFetch";

export default function NearbyAsteroids() {
    const {response, performFetch} = useFetch(KEY)
    // const [data,setData] = useState([])

    useEffect(  ()=>{
        performFetch();
    },[performFetch])

    console.log(response.data.date)

   // const  renderData =()=>{
   //     response.data.map(item => data.push(item))
   //     setData(data)
   //     console.log(data)
   //  }

    return (
        <div>
            {/*<button onClick={renderData}>get</button>*/}
            {/*{data.map(item => <div key={Math.random()*20233}> {item} </div>)}*/}

        </div>
    )
}


