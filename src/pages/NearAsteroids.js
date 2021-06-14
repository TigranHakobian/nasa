import React, {useState, useEffect} from 'react'
import Wrapper from "../components/Wrapper"
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import {actionsANA} from "../store/actions/asteroids";
import _ from "lodash"
import ReactPaginate from 'react-paginate';
import moment from "moment";


function NearAsteroids(props) {
    const [loading, setLoading] = useState(false)
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [search, setSearch] = useState()
    const [allData, setAllData] = useState([])

    const [perPage, setPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(0)
    const [isSet, setIsSet] = useState(0)


    useEffect(() => {
        props.actionsANA(startDate, endDate)
        setLoading(true)
        const result = props.nearAst.asteroids.asteroidsData.near_earth_objects
        console.log(props.nearAst.asteroids.asteroidsData)
        const array_of_data = _.map(result);
        console.log(array_of_data)
        let gotData = array_of_data.flat()
        console.log(gotData)
        setAllData(gotData)
        setLoading(false)

    }, [search])


    const PageChange = (e) => {
        const selectedPage = e.selected;
        const isset = selectedPage * perPage;
        setCurrentPage(selectedPage)
        setIsSet(isSet)
    };

    const onChangeStartDate = (e) => {
        console.log(e.target.value)
        setStartDate(e.target.value)
        console.log(startDate)
    }

    const onChangeEndDate = (e) => {
        setEndDate(e.target.value)
        console.log(endDate)

    }

    const find = () => {
        console.log("st date", startDate)
        console.log("end date", endDate)
        console.log("all Data", allData)
        setSearch(`${Math.random() * 10000}`)
    }


    return (
        <Wrapper>
            <div className={"cal-and-btn"}>
                <div className="cont-calendar">
                    <TextField
                        className="calendar-one-day"
                        id="start-date"
                        type="date"
                        defaultValue={moment().format('YYYY-MM-DD')}
                        onChange={(e) => onChangeStartDate(e)}/>
                    <TextField
                        className="calendar-one-day"
                        id="date"
                        type="date"
                        defaultValue={moment().format('YYYY-MM-DD')}
                        onChange={(e) => onChangeEndDate(e)}/>
                </div>


                <button onClick={find} className="btn-of-NA"> Go!</button>
            </div>

            {/*{*/}
            {/*    endDate - 7 */}
            {/*}*/}
            {allData === [] ? <h2>loading...</h2>
                : allData.map(arr => (
                    <div key={_.uniqueId()} className="table-div">
                        <div>{arr.name} </div>
                        <div>{arr.estimated_diameter.feet.estimated_diameter_max} </div>
                        <div>{arr.absolute_magnitude_h}</div>
                        <div>{arr.estimated_diameter.meters.estimated_diameter_min} - {arr.estimated_diameter.meters.estimated_diameter_max} </div>
                        {arr.is_sentry_object ? <div>Yes</div> : <div>No</div>}
                    </div>
                        // ? !props.nearAst.<div>chkaaaa</div>
                ))}
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                pageCount={7}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={PageChange}
                containerClassName={"pagination"}
            />


        </Wrapper>
    )
}

const mapStateToProps = (props) => ({
    nearAst: props
});

const mapDispatchToProps = {
    actionsANA,
};
const ApodContainer = connect(mapStateToProps, mapDispatchToProps)(NearAsteroids);

export default ApodContainer;
