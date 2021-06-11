import React,{useState,useEffect} from 'react'
import Wrapper from "../components/Wrapper"
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import {actionsApod} from "../store/actions/asteroids";
import _ from "lodash"
import ReactPaginate from 'react-paginate';


function NearAsteroids(props) {
    const [loading, setLoading] = useState(false)
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [search, setSearch] = useState("")
    const [allData,setAllData] = useState([].slice(0,5))

    useEffect(  async ()=> {
         props.actionsApod(startDate,endDate)
         setLoading(true)
        const result = props.nearAst.asteroids.asteroidsData.near_earth_objects
        const array_of_data = _.map(result);
        let gotData = array_of_data.flat()
        console.log(gotData)
         setAllData(gotData)
         setLoading(false)
    },[search])


    const onChangeStartDate = async (e) => {
        await setStartDate(e.target.value)
        console.log(startDate)
    }

    const onChangeEndDate = async (e) => {
        await setEndDate(e.target.value)
    }

    const find = () =>{
        console.log("st date" , startDate)
        console.log("end date" , endDate)
        console.log("all Data", allData)
        setSearch(`${Math.random()*10000}`)
    }


    return (
        <Wrapper>
            <TextField
                className="calendar-one-day"
                id="start-date"
                type="date"
                defaultValue={Date}
                onChange={(e) => onChangeStartDate(e)}/>
            <TextField
                className="calendar-one-day"
                id="date"
                type="date"
                defaultValue={endDate}
                onChange={(e) => onChangeEndDate(e)}/>

                <button onClick={find}> Go!</button>
            {allData === []?<h2>loading...</h2>
                : allData.map(arr =>(
                            <div key={_.uniqueId()} className="table-div">
                                <div>{arr.name} </div>
                                <div>{arr.estimated_diameter.feet.estimated_diameter_max} </div>
                                <div>{arr.absolute_magnitude_h}</div>
                                <div>{arr.estimated_diameter.meters.estimated_diameter_min} - {arr.estimated_diameter.meters.estimated_diameter_max} </div>
                                 {arr.is_sentry_object ? <div>Yes</div>:<div>No</div>}
                            </div>
                    ))}


        </Wrapper>
    )
}

const mapStateToProps = (props) => ({
    nearAst: props
});

const mapDispatchToProps = {
    actionsApod,
};
const ApodContainer = connect(mapStateToProps, mapDispatchToProps)(NearAsteroids);

export default ApodContainer;
