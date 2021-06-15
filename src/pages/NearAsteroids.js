import React, {useState, useEffect} from 'react'
import Wrapper from "../components/Wrapper"
import {connect} from "react-redux";
import {actionsANA} from "../store/actions/asteroids";
import _ from "lodash"
import ReactPaginate from 'react-paginate';
import moment from "moment";
import ReactLoading from 'react-loading';

const NearAsteroids = (props) => {

    const [loading, setLoading] = useState(false)

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const [search, setSearch] = useState(0)

    const [allData, setAllData] = useState([])

    const [perPage, setPerPage] = useState(0)
    const [isThereError, setIsError] = useState(false)

    const perPageEnd = Math.floor(allData.length/10) > 0 ? Math.floor(allData.length/10) + 1:Math.floor(allData.length/10)



    useEffect(() => {
        setLoading(true)
        props.actionsANA(startDate, endDate)
        const result = props.nearAst.asteroids.asteroidsData.near_earth_objects
        const array_of_data = _.map(result);
        let gotData = array_of_data.flat()
        setAllData(gotData)
        setLoading(false)
    }, [search])


    const PageChange = (e) => {
        const selectedPage = e.selected + 1;
        setPerPage(selectedPage * 10 -10)
    };

    const onChangeStartDate = (e) => {
        console.log(e.target.value)
        setStartDate(e.target.value)
    }

    const onChangeEndDate = (e) => {
        setEndDate(e.target.value)
    }

    const searchTo = () => {
         const a = startDate.replace("-","")
         const c =   a.replace("-","")
         const b = endDate.replace("-","")
         const d =  b.replace("-","")

         const balance = +d - +c

        if (
            balance < 7 ||
            balance === 76 ||
            balance === 75 || balance === 74 ||
            balance === 73 || balance === 72  ||
            balance === 71  || balance === 70  ||
            balance === 8870 || balance === 8871 ||
            balance === 8872 || balance === 8873 ||
            balance === 8874 || balance === 8875||
            balance === 8876
        )
        {
            setIsError(false)
            setSearch(Math.random() * 10000)
        }
        else
        {
            setIsError(true)
        }
    }

    return (
        <Wrapper>
            <div className={"cal-and-btn"}>
                <div className="cont-calendar">
                    <input
                        className="calendar-one-day"
                        type="date"
                        defaultValue={moment().format('YYYY-MM-DD')}
                        onChange={(e) => onChangeStartDate(e)}/>
                    <input
                        className="calendar-one-day"
                        max={moment().format('YYYY-MM-DD')}
                        type="date"
                        defaultValue={moment().format('YYYY-MM-DD')}
                        onChange={(e) => onChangeEndDate(e)}/>
                </div>
                <button onClick={searchTo} className="btn-of-NA"> Go!</button>
            </div>
            {
                isThereError? <div className={"error-of-week"}>Range should not exceed 1 week</div> :null
            }
            {
                allData.length === 0 ?
                null :
            <div className={"show-all"}>
            <div className={"table-of-div"}>
                <table className={"table-of-NA"}>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Distance (km)</th>
                        <th>Absolute Magnitude</th>
                        <th>Is potentially hazardous</th>
                        <th>Diameter (meters)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {loading?  <ReactLoading type={"type"} color={"lightblue"} height={667} width={375} /> : null}
                     {allData.slice(perPage, perPage + 10).map(arr => (
                            <tr key={_.uniqueId()}>
                                <td>{arr.name}</td>
                                <td>{arr.estimated_diameter.feet.estimated_diameter_max}</td>
                                <td>{arr.absolute_magnitude_h}</td>
                                <td>{arr.estimated_diameter.meters.estimated_diameter_min} - {arr.estimated_diameter.meters.estimated_diameter_max}</td>
                                {arr.is_sentry_object ? <td>Yes</td> : <td>No</td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <div className="div-of-pagination">
                    <ReactPaginate
                        previousLabel="prev"
                        nextLabel="next"
                        pageCount={perPageEnd}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={PageChange}
                        containerClassName="pagination"
                    />
                </div>
                <div className="page-count">
                    <div>
                        page {perPage === 0 ? 1 : +perPage.toString().slice(0, 1) + 1} / {perPageEnd}
                    </div>
                </div>

        </div>
            }
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
