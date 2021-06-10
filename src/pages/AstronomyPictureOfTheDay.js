import React, {useEffect, useState} from 'react'
// import {KEY} from "../modules/api/ApinearByAsteroids";
// import useFetch from "../hooks/useFetch";
import TextField from "@material-ui/core/TextField";
import Wrapper from "../components/Wrapper";
import {actionsApod} from "../store/actions/apod";
import {connect} from "react-redux";


const AstronomyPictureOfTheDay = (props) => {
    // const {response, performFetch} = useFetch(KEY);
    const [date, setDate] = useState("");

    useEffect(()=> {
        props.actionsApod(date)
        console.log(11111111, props.apodData)
    },[date])


    //
    // useEffect(() => {
    //     performFetch();
    // }, [performFetch])


    // console.log(response.data)

    const onChangeDate = (e) => {
        setDate(e.target.value);
        console.log(e.target.value)

    }

    return (
        <Wrapper>
            <div className={"calendar-one-day-div"}>
                <TextField
                    className="calendar-one-day"
                    id="date"
                    type="date"
                    defaultValue="2021-03-22"
                    onChange={(e) => onChangeDate(e)}/>
            </div>

            <>
                <div className={"title-of-apod"}>{props.apodData.copyright}</div>
                <div className={"explanation-of-apod"}>{props.apodData.explanation}</div>
                <div className={"for-img"}>
                    <img
                    src={props.apodData.hdurl} alt="Photo"/>
                </div>

            </>
        </Wrapper>
    )
}



// export default AstronomyPictureOfTheDay;
const mapStateToProps = (props) => ({
    apodData: props.apod.apodData,
});

const mapDispatchToProps = {
    actionsApod,
};
const ApodContainer = connect(mapStateToProps, mapDispatchToProps)(AstronomyPictureOfTheDay);

export default ApodContainer;


