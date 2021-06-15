import React ,{useState}from 'react'
import Footer from "../components/Footer"
import Wrapper from "../components/Wrapper"

 const NewPlanet = () => {
    const [values,setValues] = useState({
        planetName:"",
        galaxyName:"",
        diametr:"",
        distance:"",
        yourName:"",
        email:"",
    })

    const  [sent,setSent] = useState(false)

    const  changePlanetName = (event) => {
        setValues({
            ...values,planetName:event.target.value
        })
    }

    const  changeDiameterName = (event) => {
        setValues({
            ...values,diametr:event.target.value
        })
    }

    const  changDistance = (event) => {
        setValues({
            ...values,distance:event.target.value
        })
    }

    const  changYourName = (event) => {
        setValues({
            ...values,yourName:event.target.value
        })
    }

    const  changeEmail = (event) => {
        setValues({
            ...values,email:event.target.value
        })
    }

    const send = (event) => {
        event.preventDefault();
        setSent(true)
        console.log(values)
    }

    return (
        <Wrapper >
           <p className={"text-of-new-planet"}>If you found new planet you can add it to our directory (Reactive forms demo)</p>
            <form action="" className="NewPlanet" onSubmit={send}>
                <input
                    type="text"
                    placeholder="Planet Name"
                    onChange={changePlanetName}
                    value={values.planetName}/>
                <input
                    type="number"
                    placeholder="Diameter (km)"
                    value={values.diametr}
                    onChange={changeDiameterName}/>
                <input
                    type="text"
                    placeholder="Distance (mln km)"
                    value={values.distance}
                    onChange={changDistance}/>
                <input type="text"
                 placeholder="Your name"
                 value={values.yourName}
                    onChange={changYourName}/>
                <input
                    type="email"
                   placeholder="Your email"
                    value={values.email}
                    onChange={changeEmail}/>
                {
                    sent? <div className={"success-message"}> Thank you!</div>:null
                }
                <button className={"btn-last"}> Submit</button>
            </form>
            <Footer/>
        </Wrapper>
    )
}
export default NewPlanet;
